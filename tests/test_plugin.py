"""Python configuration, real hook routes and generated registry contracts."""

import json
import math
import re
from dataclasses import fields
from html import unescape
from importlib.resources import files
from typing import get_args, get_type_hints

import pytest
from dash import Dash, html
from dash_splash_plugin import (
    SplashConfig,
    LoaderId,
    get_config,
    list_loaders,
    reset_config,
    setup,
)
from dash_splash_plugin.plugin import SetupOptions, _inject_overlay
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
    assert set(list_loaders()) == set(get_args(LoaderId))
    assert len(list_loaders()) == 530
    assert len(list_loaders("loading-ui")) == 47
    assert all(
        re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", name.split(":", 1)[1])
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
        "epic:atom", "epic:flower", "epic:hollow-dots", "epic:orbit", "epic:radar", "epic:semipolar",
        "epic:spring", "epic:trinity-rings",
    }
    setup(loader=f"epic:{name}")
    index = _inject_overlay("<html><body></body></html>")
    assert f'data-dash-splash-loader="epic:{name}"' in index
    for suffix in ("-spinner", "-spinners"):
        with pytest.raises(ValueError):
            setup(loader=f"epic:{name}{suffix}")
        assert get_config().loader == f"epic:{name}"


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
        loader="flicker:mycelium",
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
    original = setup(loader="indicators:atom", loader_options=options)
    options["color"].append("black")
    original.loader_options["color"].append("white")
    get_config().loader_options.clear()
    assert get_config().loader_options == {"color": ["red", "blue"]}


@pytest.mark.parametrize(
    "changes,error",
    [
        ({"loader": "not-real"}, ValueError),
        ({"loader": []}, ValueError),
        ({"library": "not-real", "loader": "fade-arc"}, TypeError),
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
            {"loader": "loading-dev:arc", "loader_options": {"typo": 1}},
            ValueError,
        ),
        (
            {
                "loader": "loading-dev:arc",
                "loader_options": {"size": "big"},
            },
            ValueError,
        ),
        (
            {
                "loader": "loading-dev:arc",
                "loader_options": {"easing": "invalid"},
            },
            ValueError,
        ),
        (
            {
                "loader": "gridora:orbit",
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
    assert get_type_hints(SetupOptions)["loader"] is LoaderId
    assert get_type_hints(SplashConfig)["loader"] is LoaderId


def test_qualified_loader_selection_uses_kebab_case():
    assert get_config().loader == "loading-ui:fade-arc"
    config = setup(loader="flicker:mail")
    assert not hasattr(config, "library")
    assert config.loader == "flicker:mail"
    assert 'data-dash-splash-loader="flicker:mail"' in _inject_overlay("<body></body>")
    assert setup(loader="loading-ui:ring").loader == "loading-ui:ring"
    assert setup(loader="flicker:helix").loader in list_loaders("flicker")
    for identifier in list_loaders():
        assert not identifier.endswith("-loader")
        assert re.fullmatch(
            r"[a-z0-9]+(?:-[a-z0-9]+)*:[a-z0-9]+(?:-[a-z0-9]+)*", identifier
        )
    with pytest.raises(ValueError):
        setup(loader="loading_ui:FadeArc")


def test_short_names_and_old_library_argument_are_rejected():
    previous = get_config()
    for name in ("fade-arc", "helix", "ring"):
        with pytest.raises(ValueError, match="qualified"):
            setup(loader=name)
    with pytest.raises(TypeError, match="Unknown splash option.*library"):
        setup(library="flicker", loader="helix")
    assert get_config() == previous


def test_unknown_loader_suggests_names_without_changing_configuration():
    previous = setup(loader="flicker:mail", loader_options={"reverse": True})
    with pytest.raises(ValueError, match="Did you mean.*flicker:helix"):
        setup(loader="flicker:helex")
    assert get_config() == previous


def test_every_listed_loader_can_be_passed_directly_to_setup():
    for identifier in list_loaders():
        assert setup(loader=identifier).loader == identifier
    assert all(name.startswith("flicker:") for name in list_loaders("flicker"))
    with pytest.raises(ValueError, match="Unknown loader library"):
        list_loaders("missing")


def test_partial_updates_preserve_loader_and_same_loader_native_options():
    config = setup(loader="flicker:helix", loader_options={"reverse": True})
    assert setup() == config
    assert setup(background="#fff").loader == "flicker:helix"
    assert setup(loader="flicker:helix").loader_options == {"reverse": True}
    assert reset_config().loader == "loading-ui:fade-arc"


def test_antd_variants_and_default():
    assert list_loaders("antd") == ("antd:spin", "antd:loading", "antd:progress", "antd:skeleton")
    assert setup(loader="antd:spin").loader == "antd:spin"
    for name in list_loaders("antd"):
        assert setup(loader=name).loader == name
        assert f'data-dash-splash-loader="{name}"' in _inject_overlay("<body></body>")
    with pytest.raises(ValueError):
        setup(loader="antd:antd")


@pytest.mark.parametrize("identifier", [name for name in list_loaders() if name.startswith(("antd:", "epic:", "flicker:", "spinners:", "spinners-react:"))])
def test_first_paint_uses_build_time_html_and_css(identifier):
    setup(loader=identifier)
    index = _inject_overlay("<body></body>")
    assert 'data-dash-splash-static="true"' in index
    assert '<template shadowrootmode="open">' in index
    assert '@keyframes' in index
    assert '<div class="artwork">' in index
    assert 'class="dash-splash__fallback"' not in index


def test_loader_suffix_is_removed_from_public_names():
    assert "spinners:bar" in list_loaders("spinners")
    assert "spinners:propagate" in list_loaders("spinners")
    assert "loading-ui:accordion" in list_loaders("loading-ui")
    assert setup(loader="spinners:bar").loader == "spinners:bar"
    with pytest.raises(ValueError):
        setup(loader="spinners:bar-loader")


def test_switching_loaders_clears_previous_native_options():
    setup(loader="flicker:mail", loader_options={"reverse": True})
    assert setup(loader="loading-ui:ring").loader_options is None


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
    setup(loader="gridora:orbit")
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


def test_assets_are_allowlisted_hashed_and_share_one_private_react():
    resources = files("dash_splash_plugin").joinpath("resources")
    manifest = json.loads(resources.joinpath("manifest.json").read_text())
    assert set(manifest["files"]) == {
        asset.name for asset in resources.joinpath("react").iterdir()
    }
    sources = []
    for asset in manifest["files"]:
        assert re.fullmatch(r"(?:loader-\d+|shared|asset)-[A-Z0-9]+\.(?:js|css)", asset)
        source = resources.joinpath(f"react/{asset}").read_text()
        sources.append(source)
        assert "window.React" not in source
    assert sum("react-dom/cjs/react-dom-client.production.js:" in source for source in sources) == 1
    assert sum("react/cjs/react.production.js:" in source for source in sources) == 1
    assert resources.joinpath("licenses/dash-loading-components-NOTICE.txt").is_file()
    assert resources.joinpath("licenses/loading-ui-LICENSE.txt").is_file()
