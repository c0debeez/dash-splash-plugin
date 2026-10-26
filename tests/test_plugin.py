"""Python configuration, real hook routes and generated registry contracts."""

import json
import math
import re
from dataclasses import fields
from html import unescape
from importlib.resources import files
from typing import get_args

import pytest
from dash import Dash, html
from dash_splash_plugin import (
    SplashConfig,
    get_config,
    list_loaders,
    reset_config,
    setup,
)
from dash_splash_plugin.plugin import LoaderName, SetupOptions, _inject_overlay
from flask import Flask


@pytest.fixture(autouse=True)
def defaults():
    reset_config()
    yield
    reset_config()


def payload(index):
    return json.loads(
        unescape(re.search(r'data-dash-splash-config="([^"]+)"', index)[1])
    )


def test_generated_inventory_and_types_are_complete():
    assert {name.split(":", 1)[1] for name in list_loaders()} == set(
        get_args(LoaderName)
    )
    assert len(list_loaders()) == 527
    assert len(list_loaders("loading-ui")) == 47
    assert all(
        re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name)
        for name in list_loaders("loading-ui")
    )
    assert {
        "loading-ui:fade-arc",
        "loading-ui:text-shimmer-wave",
        "loading-ui:infinity-loop",
    } <= set(list_loaders())
    assert {"fade-arc", "ring", "text-shimmer"}.isdisjoint(list_loaders())
    for family in (
        "loading-dev",
        "ldrs",
        "premium",
        "spinners",
        "indicators",
        "loader-spinner",
        "spinners-react",
        "epic",
        "m3",
        "flicker",
        "gridora",
        "loadersz",
        "thinking-orbs",
        "lab",
    ):
        assert list_loaders(family), family


@pytest.mark.parametrize("name", [
    "atom", "flower", "hollow-dots", "orbit", "radar", "semipolar",
    "spring", "trinity-rings",
])
def test_epic_names_omit_spinner_suffix_without_aliases(name):
    assert set(list_loaders("epic")) == {
        "atom", "flower", "hollow-dots", "orbit", "radar", "semipolar",
        "spring", "trinity-rings",
    }
    setup(library="epic", loader=name)
    index = _inject_overlay("<html><body></body></html>")
    assert f'data-dash-splash-loader="epic:{name}"' in index
    for suffix in ("-spinner", "-spinners"):
        with pytest.raises(ValueError):
            setup(library="epic", loader=name + suffix)
        assert get_config().loader == name


def test_index_has_immediate_fallback_and_defers_native_react():
    index = _inject_overlay(
        '<html><head></head><body class="app"><main></main></body></html>'
    )
    assert index.index('data-dash-splash-resource="runtime"') < index.index("</head>")
    assert '<body class="app"><div class="dash-splash"' in index
    assert 'class="dash-splash__fallback"' in index
    assert 'data-dash-splash-module="/_dash-splash-plugin/react/loader-' in index
    assert "<script src=" not in index
    assert 'data-dash-splash-loader="loading-ui:fade-arc"' in index
    assert payload(index)["text"] == "Loading"
    assert _inject_overlay(index) == index
    setup(enabled=False)
    assert _inject_overlay("<body></body>") == "<body></body>"


def test_presets_and_native_parameters_are_serialized_and_escaped():
    setup(
        library="flicker",
        loader="mycelium",
        text='Loading <script>"',
        aria_label='Loading "app"',
        size=40,
        rate=2,
        playing=False,
        loader_options={"reverse": True},
    )
    index = _inject_overlay("<html><body></body></html>")
    props = payload(index)
    assert props["loader_options"]["grids"]
    assert props["loader_options"]["reverse"] is True
    assert props["rate"] == 2 and props["playing"] is False
    assert props["size"] == 40
    assert 'aria-label="Loading &quot;app&quot;"' in index
    assert '<script>"' not in index


def test_native_options_are_copied_on_input_and_output():
    options = {"color": ["red", "blue"]}
    original = setup(library="indicators", loader="atom", loader_options=options)
    options["color"].append("black")
    original.loader_options["color"].append("white")
    get_config().loader_options.clear()
    assert get_config().loader_options == {"color": ["red", "blue"]}


@pytest.mark.parametrize(
    "changes,error",
    [
        ({"loader": "not-real"}, ValueError),
        ({"loader": []}, ValueError),
        ({"library": "not-real", "loader": "fade-arc"}, ValueError),
        ({"aria_label": " "}, ValueError),
        ({"text": ""}, ValueError),
        ({"z_index": True}, TypeError),
        ({"enabled": 1}, TypeError),
        ({"playing": 1}, TypeError),
        ({"rate": 0}, ValueError),
        ({"rate": True}, TypeError),
        ({"size": -1}, ValueError),
        ({"stroke": math.inf}, ValueError),
        ({"font_size": math.nan}, ValueError),
        ({"size": True}, TypeError),
        ({"custom_loader_html": 123}, TypeError),
        ({"dark_color": ""}, ValueError),
        ({"loader_options": []}, TypeError),
        ({"loader_options": {"color": object()}}, ValueError),
        ({"loader_options": {"size": math.nan}}, ValueError),
        ({"loader_options": {1: "not-a-string-key"}}, ValueError),
        ({"loader_options": {"color": ("red", "blue")}}, ValueError),
        (
            {"library": "loading-dev", "loader": "arc", "loader_options": {"typo": 1}},
            ValueError,
        ),
        (
            {
                "library": "loading-dev",
                "loader": "arc",
                "loader_options": {"size": "big"},
            },
            ValueError,
        ),
        (
            {
                "library": "loading-dev",
                "loader": "arc",
                "loader_options": {"easing": "invalid"},
            },
            ValueError,
        ),
        (
            {
                "library": "gridora",
                "loader": "orbit",
                "loader_options": {"colors": ["red", 123]},
            },
            ValueError,
        ),
    ],
)
def test_invalid_options_are_rejected_atomically(changes, error):
    previous = get_config()
    with pytest.raises(error):
        setup(**changes)
    assert get_config() == previous


def test_configuration_api_has_only_current_fields():
    assert set(SetupOptions.__annotations__) == {
        field.name for field in fields(SplashConfig)
    }
    assert isinstance(get_config(), SplashConfig)


def test_library_selection_and_default_library_use_kebab_case():
    assert get_config().library == "loading-ui"
    assert get_config().loader == "fade-arc"
    config = setup(library="flicker", loader="mail")
    assert config.library == "flicker" and config.loader == "mail"
    assert 'data-dash-splash-loader="flicker:mail"' in _inject_overlay("<body></body>")
    assert setup(loader="ring").library == "loading-ui"
    assert setup(library="flicker").loader in list_loaders("flicker")
    for identifier in list_loaders():
        assert not identifier.endswith("-loader")
        assert re.fullmatch(
            r"[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:-[a-z0-9]+)*", identifier
        )
    with pytest.raises(ValueError):
        setup(library="loading_ui", loader="FadeArc")


def test_loader_suffix_is_removed_from_public_names():
    assert "bar" in list_loaders("spinners")
    assert "propagate" in list_loaders("spinners")
    assert "accordion" in list_loaders("loading-ui")
    assert setup(library="spinners", loader="bar").loader == "bar"
    with pytest.raises(ValueError):
        setup(library="spinners", loader="bar-loader")


def test_switching_loaders_clears_previous_native_options():
    setup(library="flicker", loader="mail", loader_options={"reverse": True})
    assert setup(loader="ring").loader_options is None


@pytest.mark.parametrize("name", ["unknown", "loader_color", "thickness"])
def test_unknown_options_are_rejected_atomically(name):
    before = get_config()
    with pytest.raises(TypeError, match="Unknown splash option"):
        setup(**{name: True})
    assert get_config() == before


def test_trusted_custom_html_does_not_load_a_react_module():
    setup(custom_loader_html='<span class="brand">Please wait</span>')
    index = _inject_overlay("<body></body>")
    assert '<span class="brand">Please wait</span>' in index
    assert "data-dash-splash-module=" not in index
    assert 'data-dash-splash-resource="runtime"' in index


def test_multiple_apps_and_proxy_prefixes_keep_module_and_stylesheet_urls():
    setup(library="gridora", loader="orbit")
    server = Flask(__name__)
    for name in ("a", "b"):
        app = Dash(
            name,
            server=server,
            routes_pathname_prefix=f"/{name}/",
            requests_pathname_prefix=f"/proxy/{name}/",
        )
        app.layout = html.Div("Ready")
    client = server.test_client()
    for name in ("a", "b"):
        index = client.get(f"/{name}/").get_data(as_text=True)
        assert (
            f'data-dash-splash-module="/proxy/{name}/_dash-splash-plugin/react/'
            in index
        )
        assert (
            f'data-dash-splash-css="/proxy/{name}/_dash-splash-plugin/react/' in index
        )
        assets = re.findall(r'data-dash-splash-(?:module|css)="([^"]+)"', index)
        for asset in assets:
            response = client.get(asset.replace("/proxy/", "/"))
            assert response.status_code == 200
            assert response.mimetype == (
                "text/css" if asset.endswith(".css") else "text/javascript"
            )
            assert (
                response.headers["Cache-Control"]
                == "public, max-age=31536000, immutable"
            )
        assert (
            client.get(f"/{name}/_dash-splash-plugin/react/unknown.js").status_code
            == 404
        )


def test_assets_are_allowlisted_hashed_and_do_not_bundle_react():
    resources = files("dash_splash_plugin").joinpath("resources")
    manifest = json.loads(resources.joinpath("manifest.json").read_text())
    assert set(manifest["files"]) == {
        asset.name for asset in resources.joinpath("react").iterdir()
    }
    for asset in manifest["files"]:
        assert re.fullmatch(r"(?:loader-\d+|shared|asset)-[A-Z0-9]+\.(?:js|css)", asset)
        source = resources.joinpath(f"react/{asset}").read_text()
        assert "react.production.min.js" not in source
        assert "react-dom-client.production.js" not in source
    assert resources.joinpath("licenses/dash-loading-components-NOTICE.txt").is_file()
    assert resources.joinpath("licenses/loading-ui-LICENSE.txt").is_file()
