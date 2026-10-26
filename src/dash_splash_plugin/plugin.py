"""Dash Hooks registration and startup-overlay configuration."""

from __future__ import annotations

import json
import math
import re
from copy import deepcopy
from dataclasses import dataclass, fields, replace
from difflib import get_close_matches
from functools import cache
from html import escape
from importlib.metadata import PackageNotFoundError, version
from importlib.resources import files
from threading import RLock
from typing import Any, NamedTuple, TypedDict, cast
from weakref import WeakKeyDictionary, ref

from dash import get_app, hooks
from flask import abort, current_app, has_request_context, request
from typing_extensions import Unpack

from ._catalog import LoaderId, LoaderLibrary

try:
    __version__ = version("dash-splash-plugin")
except PackageNotFoundError:  # pragma: no cover - source tree fallback
    __version__ = "0.1.0"

_SPLASH_MARKER = "data-dash-splash"
_BODY_PATTERN = re.compile(r"<body(?:\s[^>]*)?>", flags=re.IGNORECASE)
_HEAD_END_PATTERN = re.compile(r"</head\s*>", flags=re.IGNORECASE)
_START_SCRIPT = (
    "<script>if (window.__dashSplashStart){window.__dashSplashStart()}</script>"
)
_ASSET_CACHE_CONTROL = "public, max-age=31536000, immutable"
_DEFAULT_PATHNAME_PREFIX = "/"

_CONFIG_LOCK = RLock()
_dash_server: WeakKeyDictionary[Any, list[Any]] = WeakKeyDictionary()

_DEFAULT_SIZE = 32
_MANIFEST = json.loads(
    files(__package__).joinpath("resources/manifest.json").read_text(encoding="utf-8")
)
_LOADER_NAMES = frozenset(_MANIFEST["loaders"])
_COLOR_OPTIONS = (
    "color",
    "dark_color",
    "text_color",
    "dark_text_color",
)
_SPLASH_ROUTE = "_dash-splash-plugin"


@hooks.setup(priority=100)
def _register_dash_app(app: Any) -> None:
    registered = _dash_server.setdefault(app.server, [])
    registered[:] = [app_ref for app_ref in registered if app_ref() is not None]
    registered.append(ref(app))


def _current_app() -> Any:
    """Return the Dash app serving the current request, or ``None`` outside one."""

    if has_request_context():
        server = cast(Any, current_app)._get_current_object()
        apps = [
            app
            for app in (app_ref() for app_ref in _dash_server.get(server, ()))
            if app is not None
        ]
        if apps:
            matches = [
                app
                for app in apps
                if request.path.startswith(app.config.routes_pathname_prefix)
            ]
            return max(
                matches or apps, key=lambda app: len(app.config.routes_pathname_prefix)
            )
    # Dash 4 binds plugin routes and index hooks to their app's context, including
    # non-Flask backends. Only accept it during a request, not its global fallback.
    try:
        app = get_app()
    except Exception:  # Dash 3 raises a plain Exception when no app exists.
        return None
    backend = getattr(app, "backend", None)
    if backend is not None and backend.has_request_context():
        return app
    return None


def _requests_pathname_prefix() -> str:
    app = _current_app()
    if app is None:
        return _DEFAULT_PATHNAME_PREFIX
    return app.config.requests_pathname_prefix


class SetupOptions(TypedDict, total=False):
    enabled: bool
    aria_label: str
    z_index: int
    background: str
    dark_background: str
    color: str | None
    dark_color: str | None
    text_color: str | None
    dark_text_color: str | None
    loader: LoaderId
    text: str
    size: int | float | None
    stroke: int | float | None
    rate: int | float
    playing: bool
    font_size: int | float | None
    custom_loader_html: str | None
    loader_options: dict[str, Any] | None


@dataclass(frozen=True)
class SplashConfig:
    """Configuration serialized into the startup overlay.

    ``custom_loader_html`` is inserted verbatim and must only contain trusted
    HTML supplied by the application author.
    """

    enabled: bool = True
    aria_label: str = "Loading"
    z_index: int = 9999
    background: str = "#f5f5f5"
    dark_background: str = "#000"
    color: str | None = "#1890ff"
    dark_color: str | None = None
    text_color: str | None = None
    dark_text_color: str | None = None
    loader: LoaderId = "loading-ui:fade-arc"
    text: str = "Loading"
    size: int | float | None = None
    stroke: int | float | None = None
    rate: int | float = 1.0
    playing: bool = True
    font_size: int | float | None = None
    custom_loader_html: str | None = None
    loader_options: dict[str, Any] | None = None


_DEFAULT_CONFIG = SplashConfig()
_config = _DEFAULT_CONFIG


def _validate_color(name: str, value: str | None) -> None:
    if value is not None and (not isinstance(value, str) or not value.strip()):
        raise ValueError(f"{name} must be None or a non-empty CSS color")


def _validate_length(name: str, value: float) -> None:
    if isinstance(value, bool) or not isinstance(value, (int, float)):
        raise TypeError(f"{name} must be an int or float")
    if not math.isfinite(value) or value < 0:
        raise ValueError(f"{name} must be finite and greater than or equal to zero")


def _validate(config: SplashConfig) -> SplashConfig:
    if not isinstance(config.aria_label, str) or not config.aria_label.strip():
        raise ValueError("aria_label must be a non-empty string")
    if isinstance(config.z_index, bool) or not isinstance(config.z_index, int):
        raise TypeError("z_index must be an int")
    if config.custom_loader_html is not None and not isinstance(
        config.custom_loader_html, str
    ):
        raise TypeError("custom_loader_html must be None or a string")
    if not isinstance(config.enabled, bool):
        raise TypeError("enabled must be a boolean")
    if not isinstance(config.playing, bool):
        raise TypeError("playing must be a boolean")
    _validate_length("rate", config.rate)
    if config.rate == 0:
        raise ValueError("rate must be greater than zero; use playing=False to pause")
    if not isinstance(config.loader, str) or config.loader not in _LOADER_NAMES:
        message = (
            f"Unknown loader: {config.loader!r}. "
            "Use a qualified 'library:name' identifier."
        )
        if isinstance(config.loader, str):
            matches = get_close_matches(
                config.loader, sorted(_LOADER_NAMES), n=3, cutoff=0.5
            )
            if matches:
                message += f" Did you mean {', '.join(repr(name) for name in matches)}?"
        raise ValueError(message)
    if config.loader_options is not None:
        if not isinstance(config.loader_options, dict):
            raise TypeError("loader_options must be a JSON object")
        try:
            json.dumps(config.loader_options, allow_nan=False)
        except (TypeError, ValueError) as error:
            raise ValueError(
                "loader_options must contain only finite JSON values"
            ) from error
        if not _json_value(config.loader_options):
            raise ValueError(
                "loader_options must contain only JSON objects, arrays and scalar values"
            )
        schema = _MANIFEST["loaders"][config.loader]["options"]
        if schema:
            unknown = set(config.loader_options) - set(schema)
            if unknown:
                raise ValueError(
                    f"Unknown loader_options for {config.loader}: {', '.join(sorted(unknown))}"
                )
            for name, value in config.loader_options.items():
                if not _matches_schema(value, schema[name]):
                    raise ValueError(
                        f"Invalid loader_options.{name} for {config.loader}"
                    )
    if not isinstance(config.text, str) or not config.text.strip():
        raise ValueError("text must be a non-empty string")
    for name in ("background", "dark_background"):
        value = getattr(config, name)
        if not isinstance(value, str) or not value.strip():
            raise ValueError(f"{name} must be a non-empty CSS color")
    for name in _COLOR_OPTIONS:
        _validate_color(name, getattr(config, name))
    for name in ("size", "stroke", "font_size"):
        value = getattr(config, name)
        if value is not None:
            _validate_length(name, value)
    return config


def _json_value(value: Any) -> bool:
    if isinstance(value, dict):
        return all(
            isinstance(key, str) and _json_value(item) for key, item in value.items()
        )
    if isinstance(value, list):
        return all(_json_value(item) for item in value)
    return value is None or isinstance(value, (str, bool, int, float))


def _matches_schema(value: Any, schema: dict[str, Any]) -> bool:
    if value is None:
        return not schema.get("required", False)
    kind = schema.get("type")
    if kind == "oneOf":
        return value in schema["values"]
    if kind == "oneOfType":
        return any(_matches_schema(value, option) for option in schema["values"])
    if kind == "arrayOf":
        return isinstance(value, list) and all(
            _matches_schema(item, schema["items"]) for item in value
        )
    if kind == "objectOf":
        return isinstance(value, dict) and all(
            _matches_schema(item, schema["items"]) for item in value.values()
        )
    if kind in {"shape", "exact"}:
        return isinstance(value, dict) and all(
            _matches_schema(value.get(key), item)
            for key, item in schema["properties"].items()
        )
    expected = {
        "string": str,
        "bool": bool,
        "array": list,
        "arrayOf": list,
        "object": dict,
        "objectOf": dict,
    }
    if kind == "number":
        return (
            not isinstance(value, bool)
            and isinstance(value, (int, float))
            and math.isfinite(value)
        )
    return isinstance(value, expected[kind]) if kind in expected else True


def list_libraries() -> tuple[LoaderLibrary, ...]:
    """Return the available kebab-case animation library names."""
    return tuple(sorted({item["family"] for item in _MANIFEST["loaders"].values()}))


def list_loaders(library: LoaderLibrary | None = None) -> tuple[LoaderId, ...]:
    """Return qualified identifiers accepted by setup, optionally filtered by library."""
    if library is not None and library not in list_libraries():
        raise ValueError(f"Unknown loader library: {library}")
    return tuple(
        name
        for name, item in _MANIFEST["loaders"].items()
        if library is None or item["family"] == library
    )


def setup(**changes: Unpack[SetupOptions]) -> SplashConfig:
    """Update the process-wide plugin configuration.

    Call this before creating ``dash.Dash``. The Dash hooks registry is
    process-wide, so one configuration is shared by all apps in the process.
    Use ``setup(loader="flicker:mail")``. Loader identifiers always include
    their library; omitted options keep their current values.
    """

    valid_names = {field.name for field in fields(SplashConfig)}
    unknown = set(changes).difference(valid_names)
    if unknown:
        names = ", ".join(sorted(unknown))
        raise TypeError(f"Unknown splash option(s): {names}")
    global _config
    with _CONFIG_LOCK:
        if changes.get("loader", _config.loader) != _config.loader:
            changes.setdefault("loader_options", None)
        _config = _validate(deepcopy(replace(_config, **changes)))
        return deepcopy(_config)


def get_config() -> SplashConfig:
    """Return the active immutable configuration."""

    with _CONFIG_LOCK:
        return deepcopy(_config)


def reset_config() -> SplashConfig:
    """Restore the default configuration, primarily for tests."""

    global _config
    with _CONFIG_LOCK:
        _config = _DEFAULT_CONFIG
        return _config


class _Visuals(NamedTuple):
    color: str
    dark_color: str
    text_color: str
    dark_text_color: str


def _resolved_visuals(config: SplashConfig) -> _Visuals:
    color = config.color
    return _Visuals(
        color=color or "inherit",
        dark_color=config.dark_color or color or "inherit",
        text_color=config.text_color or config.color or "inherit",
        dark_text_color=config.dark_text_color
        or config.text_color
        or config.dark_color
        or config.color
        or "inherit",
    )


def _overlay_styles(config: SplashConfig) -> dict[str, str]:
    visuals = _resolved_visuals(config)
    size = _DEFAULT_SIZE if config.size is None else config.size
    styles = {
        "--dash-splash-background": config.background,
        "--dash-splash-dark-background": config.dark_background,
        "--dash-splash-color": visuals.color,
        "--dash-splash-dark-color": visuals.dark_color,
        "--dash-splash-text-color": visuals.text_color,
        "--dash-splash-dark-text-color": visuals.dark_text_color,
        "--dash-splash-size": f"{size:g}px",
        "--dash-splash-display": "none" if size == 0 else "inline-flex",
        "--dash-splash-z-index": str(config.z_index),
        "--dash-splash-rate": f"{config.rate:g}",
        "--dash-splash-play-state": "running" if config.playing else "paused",
    }
    if config.stroke is not None:
        styles["--dash-splash-stroke"] = f"{config.stroke:g}px"
    return styles


def _loader_markup(config: SplashConfig, loader: str) -> str:
    item = _MANIFEST["loaders"][loader]
    base = f"{_requests_pathname_prefix()}{_SPLASH_ROUTE}/react/"
    payload = {
        "text": config.text,
        "rate": config.rate,
        "playing": config.playing,
        "loader_options": {**item["defaults"], **(config.loader_options or {})},
    }
    for name in ("size", "stroke", "font_size"):
        if getattr(config, name) is not None:
            payload[name] = getattr(config, name)
    encoded = escape(
        json.dumps(payload, ensure_ascii=True, allow_nan=False), quote=True
    )
    css = (
        f' data-dash-splash-css="{escape(base + item["css"], quote=True)}"'
        if item.get("css")
        else ""
    )
    content = '<span class="dash-splash__fallback" aria-hidden="true"></span>'
    standalone = ""
    preview = _static_loader_previews().get(loader)
    if preview is not None:
        mode = "preview" if config.loader_options else "true"
        standalone = f' data-dash-splash-static="{mode}"'
        content = (
            '<template shadowrootmode="open">'
            '<style data-css-hash="dash-splash-static">'
            ':host{display:inline-flex;color:inherit;max-width:100%}'
            '.viewport{position:relative;display:inline-flex}'
            '.artwork{display:inline-flex;transform-origin:top left}'
            '.artwork *,.artwork *::before,.artwork *::after{'
            'animation-play-state:var(--dash-splash-play-state,running)}'
            '@media(prefers-reduced-motion:reduce){.artwork *,.artwork *::before,'
            '.artwork *::after{animation-play-state:paused!important}}'
            f'{preview["css"]}</style>'
            f'<div class="viewport"><div class="artwork">{preview["html"]}</div></div>'
            '</template>'
        )
    return (
        f'<span class="dash-splash__loader" data-dash-splash-loader="{escape(loader, quote=True)}" '
        f'data-dash-splash-module="{escape(base + item["module"], quote=True)}"{css}{standalone} '
        f'data-dash-splash-react-min="{item.get("minReact", 18)}" '
        f'data-dash-splash-config="{encoded}" aria-hidden="true">'
        f'{content}</span>'
    )


def _overlay_html(config: SplashConfig, loader: str) -> str:
    styles = _overlay_styles(config)
    style = escape(
        ";".join(f"{name}:{value}" for name, value in styles.items()), quote=True
    )
    if config.custom_loader_html is not None:
        loader_html = config.custom_loader_html
    else:
        loader_html = _loader_markup(config, loader)
        loader_html = f'<div class="dash-splash__spinner-region">{loader_html}</div>'
    return (
        f'<div class="dash-splash" {_SPLASH_MARKER} '
        'role="status" aria-live="polite" '
        f'aria-label="{escape(config.aria_label, quote=True)}" aria-busy="true" style="{style}">'
        f'<div class="dash-splash__content">{loader_html}</div>'
        "</div>"
    )


@cache
def _static_loader_previews() -> dict[str, dict[str, str]]:
    return json.loads(_resource_text("static-loaders.json"))


@cache
def _resource_text(name: str) -> str:
    return (
        files(__package__)
        .joinpath(f"resources/{name}")
        .read_text(encoding="utf-8")
        .strip()
    )


@hooks.route(name=f"{_SPLASH_ROUTE}/react/{{asset}}", priority=100)
@hooks.route(name=f"{_SPLASH_ROUTE}/react/<asset>", priority=100)
def serve_splash_asset(asset: str = ""):
    """Serve allowlisted, content-hashed React modules and their stylesheets."""

    app = _current_app()
    backend = getattr(app, "backend", None) if app is not None else None
    if asset not in _MANIFEST["files"]:
        if backend is not None:
            return backend.make_response("", status=404)
        abort(404)
    if backend is not None:
        response = backend.make_response(
            _resource_text(f"react/{asset}"),
            mimetype="text/css" if asset.endswith(".css") else "text/javascript",
        )
        response.headers["Cache-Control"] = _ASSET_CACHE_CONTROL
        return response

    return current_app.response_class(
        _resource_text(f"react/{asset}"),
        mimetype="text/css" if asset.endswith(".css") else "text/javascript",
        headers={"Cache-Control": _ASSET_CACHE_CONTROL},
    )


def _with_splash_runtime(head: str) -> str:
    runtime = f'<script data-dash-splash-resource="runtime">{_resource_text("splash.js")}</script>'
    head_end = _HEAD_END_PATTERN.search(head)
    if head_end is None:
        return runtime + head
    return head[: head_end.start()] + runtime + head[head_end.start() :]


def _inject_overlay(app_index: str) -> str:
    config = get_config()
    if not config.enabled or _SPLASH_MARKER in app_index:
        return app_index
    body = _BODY_PATTERN.search(app_index)
    if body is None:
        return app_index

    loader = config.loader
    return (
        _with_splash_runtime(app_index[: body.end()])
        + _overlay_html(config, loader)
        + _START_SCRIPT
        + app_index[body.end() :]
    )


@hooks.index(priority=100)
def inject_splash(app_index: str) -> str:
    """Inject the pre-React overlay into the final HTML document."""

    return _inject_overlay(app_index)
