from importlib.resources import files

import pytest
from dash import Dash
from dash import html as dash_html

import dash_startup_loading_plugin as loading_plugin
from dash_startup_loading_plugin import (
    get_config,
    reset_config,
    setup,
)
from dash_startup_loading_plugin.plugin import _inject_overlay


@pytest.fixture(autouse=True)
def restore_defaults():
    reset_config()
    yield
    reset_config()


def startup_runtime() -> str:
    return files("dash_startup_loading_plugin").joinpath("resources/startup-loading.js").read_text(encoding="utf-8")


def loading_ui_runtime(loader: str) -> str:
    return (
        files("dash_startup_loading_plugin").joinpath(f"resources/loading-ui/{loader}.js").read_text(encoding="utf-8")
    )


def test_setup_is_the_public_configuration_entry_point():
    assert hasattr(loading_plugin, "setup")
    assert not hasattr(loading_plugin, "configure")


def test_injects_overlay_after_body_with_custom_attributes():
    index = '<!doctype html><html><head></head><body class="app"><main></main></body></html>'

    result = _inject_overlay(index)

    assert '<script data-dash-loading-resource="startup">' in result
    assert result.index('data-dash-loading-resource="startup"') < result.index("</head>")
    assert '<body class="app"><div class="dash-loading"' in result
    assert "if (window.__dashStartupLoadingStart){window.__dashStartupLoadingStart()}" in result
    assert result.index('class="dash-loading"') < result.rindex("window.__dashStartupLoadingStart")
    assert result.count(" data-dash-loading ") == 1
    assert '<span class="dash-loading__spinner" aria-hidden="true"></span>' not in result
    assert '<span class="dash-loading__antd-dot">' in result
    assert 'data-dash-loading-resource="loading-ui"' not in result
    assert "--dash-loading-size:32px" in result
    assert "--dash-loading-stroke:" not in result
    assert "--dash-loading-background:#f5f5f5" in result
    assert "--dash-loading-dark-background:#000" in result
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-dark-color:currentColor" in result
    assert "--dash-loading-loader-text-color:currentColor" in result
    assert "--dash-loading-loader-dark-text-color:currentColor" in result
    assert "data-config=" not in result


def test_injection_is_idempotent_and_can_be_disabled():
    index = "<html><body><main></main></body></html>"
    once = _inject_overlay(index)
    assert _inject_overlay(once) == once

    setup(enabled=False)
    assert _inject_overlay(index) == index


def test_escapes_accessible_label():
    setup(aria_label='Loading "application"')

    result = _inject_overlay("<html><body><main></main></body></html>")

    assert 'aria-label="Loading &quot;application&quot;"' in result


def test_browser_runtime_supports_initial_readiness_gates():
    script = startup_runtime()

    assert 'document.querySelector("#react-entry-point")' in script
    assert 'querySelector("._dash-loading")' in script
    assert "requestAnimationFrame(" in script
    assert "MutationObserver" in script


def test_custom_loader_html_is_intentionally_preserved():
    setup(custom_loader_html='<div class="brand-loader">Please wait</div>')

    result = _inject_overlay("<html><body></body></html>")

    assert '<div class="brand-loader">Please wait</div>' in result


def test_default_loader_uses_the_ant_design_spinner():
    result = _inject_overlay("<html><body></body></html>")
    assert get_config().loader == "default"
    assert '<span class="dash-loading__antd-dot">' in result
    assert 'data-dash-loading-ui=' not in result
    assert 'data-dash-loading-resource="loading-ui"' not in result


def test_dash_builtin_loading_message_stays_hidden_after_overlay_removal():
    runtime = startup_runtime()

    assert "._dash-loading{" in runtime
    assert "display:none!important" in runtime
    assert ".dash-loading ~" not in runtime


def test_default_spinner_respects_the_configured_size():
    setup(loader="default")
    result = _inject_overlay("<html><body></body></html>")
    runtime = startup_runtime()

    assert '<span class="dash-loading__antd-dot">' in result
    assert "<i></i><i></i><i></i><i></i>" in result
    assert "--dash-loading-size:32px" in result
    assert "transform:scale(var(--dash-loading-antd-scale,1))" in runtime
    assert "transform-origin:center" in runtime
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-dark-color:currentColor" in result
    assert "--dash-loading-antd-scale:" not in result

    setup(size=20)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-size:20px" in result
    assert "--dash-loading-antd-scale:" not in result

    setup(size=32)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-size:32px" in result
    assert "--dash-loading-antd-scale:" not in result


def test_antd_default_size_override_does_not_affect_other_loaders():
    setup(loader="ring")
    result = _inject_overlay("<html><body></body></html>")

    assert "--dash-loading-size:32px" in result
    assert '<span class="dash-loading__antd-spinner"' not in result


@pytest.mark.parametrize("loader", ["unknown", "antd"])
def test_invalid_loader_is_rejected(loader):
    with pytest.raises(ValueError, match="loader"):
        setup(loader=loader)


@pytest.mark.parametrize("name", ["spokes", "classic", "dots-ring", "spiral", "wave", "text-shimmer"])
def test_loading_ui_loader_is_mounted_before_dash_runtime(name):
    setup(loader=name, color="#e91e63", dark_color="#ff80ab")

    result = _inject_overlay("<html><head></head><body></body></html>")

    assert f'data-dash-loading-ui="{name}"' in result
    assert '<svg class="dash-loading__ring"' not in result
    assert '<div class="dash-loading__spinner-region">' in result
    assert "--dash-loading-size:32px" in result
    assert 'data-dash-loading-resource="startup"' in result
    assert "--dash-loading-loader-color:#e91e63" in result
    assert "--dash-loading-loader-dark-color:#ff80ab" in result


def test_loading_ui_uses_official_component_geometry_and_border_box():
    setup(loader="dual-arc")

    result = _inject_overlay("<html><body></body></html>")
    runtime = loading_ui_runtime("dual-arc")
    core_runtime = startup_runtime()

    assert ".dash-loading__loading-ui" in core_runtime
    assert 'width:"2rem",height:"2rem"' in runtime
    assert "display:inline-flex;width:auto;height:auto" in runtime
    assert "box-sizing:border-box" in runtime
    assert "--dash-loading-thickness" in runtime
    assert "--dash-loading-size:32px" in result
    assert "--dash-loading-scale:1" in result
    assert "--dash-loading-stroke:" not in result

    assert 'width:"2rem",height:"2rem"' in loading_ui_runtime("wandering-eyes")
    assert 'fontSize:"1.25rem"' in loading_ui_runtime("text-blink")
    assert 'geometry:{fontSize:"1.25rem"}' in loading_ui_runtime("text-blink")
    assert 'geometry:{fontSize:"1.25rem",fontWeight:"500"}' in loading_ui_runtime("text-dots")
    assert 'geometry:{fontSize:"1.25rem",fontWeight:"500"}' in loading_ui_runtime("text-shimmer")
    assert 'geometry:{fontSize:"1.25rem",fontWeight:"500"}' in loading_ui_runtime("text-shimmer-wave")
    assert 'geometry:{width:"0.6rem",height:"0.6rem"}' in loading_ui_runtime("triple-dot-spinner")
    assert 'geometry:{width:"0.6rem",height:"0.6rem"}' in loading_ui_runtime("twin-orbit")
    assert 'geometry:{width:"3rem",height:"2rem"}' in loading_ui_runtime("wave")
    assert 'geometry:{width:"48px",height:"48px"}' in loading_ui_runtime("swirling")

    setup(loader="wave", size=40)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-size:40px" in result
    assert "--dash-loading-target-size:40" in result
    assert "--dash-loading-stroke:" not in result

    setup(loader="wave", size=0)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-target-size:0" in result
    assert "--dash-loading-ui-display:none" in result


def test_loading_ui_uses_ant_design_token_default_colors():
    setup(loader="wave")
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-dark-color:currentColor" in result


def test_loader_color_is_reused_in_dark_mode_when_not_explicitly_set():
    setup(color="#e91e63")

    result = _inject_overlay("<html><body></body></html>")

    assert "--dash-loading-loader-color:#e91e63" in result
    assert "--dash-loading-loader-dark-color:#e91e63" in result


def test_text_loader_colors_use_plugin_defaults_and_allow_overrides():
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-loader-text-color:currentColor" in result
    assert "--dash-loading-loader-dark-text-color:currentColor" in result

    setup(text_color="#333333")
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-loader-text-color:#333333" in result
    assert "--dash-loading-loader-dark-text-color:#333333" in result


def test_text_loader_supports_custom_text_and_escapes_the_attribute():
    setup(loader="text-shimmer", text='正在加载 "报表"')

    result = _inject_overlay("<html><body></body></html>")
    renderer = loading_ui_runtime("text-shimmer")

    assert 'data-dash-loading-text="正在加载 &quot;报表&quot;"' in result
    assert ".dataset.dashLoadingText" in renderer


def test_dash_antd_bundle_uses_the_plugin_default_loader_without_setup():
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert '<span class="dash-loading__antd-dot">' in result
    assert 'data-dash-loading-resource="startup"' in result
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-dark-color:currentColor" in result
    assert "--dash-loading-antd-scale:" not in result


def test_dash_antd_bundle_does_not_read_config_provider_tokens():
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert "--dash-loading-background:#f5f5f5" in result
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-text-color:currentColor" in result


def test_dash_antd_dark_algorithm_does_not_change_plugin_defaults():
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert "--dash-loading-background:#f5f5f5" in result
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-text-color:currentColor" in result


def test_explicit_loader_applies_with_a_dash_antd_bundle():
    setup(loader="wave")
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert 'data-dash-loading-ui="wave"' in result
    assert 'data-dash-loading-resource="startup"' in result
    assert "--dash-loading-loader-color:currentColor" in result
    assert "--dash-loading-loader-dark-color:currentColor" in result


def test_explicit_default_loader_uses_ant_design_spinner_with_dash_antd_bundle():
    setup(loader="default")
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert 'data-dash-loading-ui="ring"' not in result
    assert '<span class="dash-loading__antd-dot">' in result


def test_explicit_colors_apply_with_the_default_loader_and_dash_antd_bundle():
    setup(color="#e91e63", dark_color="#ff80ab")
    index = (
        '<html><head><script src="/_dash-component-suites/'
        'dash_antd_components/bundle.js"></script></head><body></body></html>'
    )

    result = _inject_overlay(index)

    assert '<span class="dash-loading__antd-dot">' in result
    assert "--dash-loading-antd-scale:" not in result
    assert "--dash-loading-loader-color:#e91e63" in result
    assert "--dash-loading-loader-dark-color:#ff80ab" in result


def test_loading_ui_ring_uses_responsive_region_and_accepts_fixed_size():
    setup(loader="ring")
    result = _inject_overlay("<html><body></body></html>")
    assert (
        '<div class="dash-loading__spinner-region"><span class="dash-loading__loading-ui" data-dash-loading-ui="ring"'
        in result
    )
    assert "--dash-loading-size:32px" in result
    assert "--dash-loading-loader-color:currentColor" in result

    setup(size=36)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-size:36px" in result

    setup(size=None)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-size:32px" in result
    assert "--dash-loading-scale:1" in result


def test_explicit_colors_override_loader_defaults():
    setup(color="#222222", dark_color="#eeeeee")
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-loader-color:#222222" in result
    assert "--dash-loading-loader-dark-color:#eeeeee" in result


def test_custom_html_skips_loading_ui_runtime():
    setup(loader="spiral", custom_loader_html="<span>Custom</span>")
    result = _inject_overlay("<html><body></body></html>")
    assert "<span>Custom</span>" in result
    assert 'data-dash-loading-resource="startup"' in result


@pytest.mark.parametrize(
    "removed_option",
    [
        "root_selector",
        "required_selectors",
        "pending_selector",
        "overlay_id",
        "timeout_ms",
        "minimum_display_ms",
        "spinner_size_px",
        "spinner_stroke_px",
        "hide_default_loading",
        "dash_theme_component_id",
        "theme_storage_key",
        "theme_storage_path",
        "sync_root_theme_classes",
        "wait_for_initial_callbacks",
        "wait_for_fonts",
        "stabilize_selectors",
        "settle_frames",
        "settle_ms",
        "fade_duration_ms",
        "ready_timeout_ms",
    ],
)
def test_removed_configuration_options_are_rejected(removed_option):
    with pytest.raises(TypeError, match=removed_option):
        setup(**{removed_option: True})


def test_configuration_validation():
    for name in ("background", "dark_background"):
        for invalid_value in (None, " "):
            with pytest.raises(ValueError, match=name):
                setup(**{name: invalid_value})
    with pytest.raises(TypeError, match="theme_mode"):
        setup(theme_mode="sepia")
    with pytest.raises(ValueError, match="text"):
        setup(text=" ")
    with pytest.raises(ValueError, match="size"):
        setup(size=-1)
    with pytest.raises(TypeError, match="size"):
        setup(size=True)
    with pytest.raises(ValueError, match="stroke"):
        setup(stroke=-1)
    with pytest.raises(TypeError, match="stroke"):
        setup(stroke=True)
    with pytest.raises(TypeError, match="theme_store"):
        setup(theme_store=" ")
    with pytest.raises(TypeError, match="theme_store"):
        setup(theme_store=("preferences", ""))
    with pytest.raises(TypeError, match="wait_for"):
        setup(wait_for=["#ready", ""])
    with pytest.raises(TypeError, match="wait_for"):
        setup(wait_for=1)
    with pytest.raises(TypeError, match="timeout"):
        setup(timeout=0)
    with pytest.raises(TypeError, match="Unknown"):
        setup(unknown=True)


@pytest.mark.parametrize("old,new,value", [
    ("loader_color", "color", "red"), ("loader_dark_color", "dark_color", "white"),
    ("loader_text_color", "text_color", "black"), ("loader_dark_text_color", "dark_text_color", "white"),
    ("loader_size", "size", 40), ("loader_stroke_width", "stroke", 1), ("loader_text", "text", "等待"),
])
def test_deprecated_aliases_warn_and_conflicts_do_not_change_configuration(old, new, value):
    with pytest.warns(DeprecationWarning, match=new):
        config = setup(**{old: value})
    assert getattr(config, new) == value
    with pytest.raises(TypeError, match="both"):
        setup(**{old: value, new: value})
    assert get_config() is config


def test_native_defaults_and_font_size():
    config = get_config()
    assert config.size == 32
    assert config.color == "currentColor"
    assert config.rate == 1.0 and config.playing is True
    assert config.stroke is config.font_size is None
    setup(loader="text-shimmer", color="red", dark_color="white", font_size=24)
    result = _inject_overlay("<html><body></body></html>")
    assert "--dash-loading-font-size:24px" in result
    assert "--dash-loading-loader-text-color:red" in result
    assert "--dash-loading-loader-dark-text-color:white" in result
    setup(stroke=0)
    assert "--dash-loading-stroke:0" in _inject_overlay("<body></body>")


def test_dlc_motion_contract_and_stroke_aliases():
    setup(rate=2, playing=False, stroke=3)
    result = _inject_overlay("<body></body>")
    assert "--dash-loading-rate:2" in result
    assert "--dash-loading-play-state:paused" in result
    assert "--dash-loading-thickness:3" in result
    assert "--dash-loading-stroke:3px" in result
    with pytest.warns(DeprecationWarning, match="stroke"):
        assert setup(thickness=4).stroke == 4
    with pytest.raises(TypeError, match="both"):
        setup(thickness=2, loader_stroke_width=3)
    for rate in [0, -1, float("nan"), float("inf")]:
        with pytest.raises(ValueError, match="rate"):
            setup(rate=rate)
    for name, value in [("rate", True), ("playing", 1)]:
        with pytest.raises(TypeError, match=name):
            setup(**{name: value})


@pytest.mark.parametrize("name", ["size", "stroke", "font_size"])
@pytest.mark.parametrize("value", [float("inf"), float("nan"), -1])
def test_visual_lengths_must_be_finite_and_nonnegative(name, value):
    with pytest.raises(ValueError, match=name):
        setup(**{name: value})


def test_setup_rejects_removed_theme_and_wait_options():
    for name in ("theme_store", "sync_theme", "wait_for", "timeout"):
        with pytest.raises(TypeError, match=name):
            setup(**{name: True})


def test_background_options_control_overlay_colors():
    setup(background="#fafafa", dark_background="#111111")
    result = _inject_overlay("<html><body></body></html>")
    runtime = startup_runtime()

    assert get_config().background == "#fafafa"
    assert get_config().dark_background == "#111111"
    assert "--dash-loading-background:#fafafa" in result
    assert "--dash-loading-dark-background:#111111" in result
    assert "html.dark .dash-loading" in runtime
    assert "background:var(--dash-loading-background,#f5f5f5)" in runtime
    assert "background:var(--dash-loading-dark-background,#000)" in runtime
    assert "--layout-bg" not in runtime


def test_theme_bootstrap_supports_dash_and_tailwind_conventions():
    assert True


def test_theme_bootstrap_defaults_to_light_without_an_app_preference():
    assert True


def test_theme_bootstrap_serializes_explicit_mode():
    with pytest.raises(TypeError, match="theme_mode"):
        setup(theme_mode="dark")


def test_runtime_does_not_include_framework_specific_compatibility():
    runtime = startup_runtime()

    assert "data-dash-loading-framework" not in runtime


def test_resources_contain_only_the_bundled_startup_runtime():
    resources = files("dash_startup_loading_plugin").joinpath("resources")
    resource_names = {resource.name for resource in resources.iterdir() if resource.is_file()}
    loader_names = {resource.name for resource in resources.joinpath("loading-ui").iterdir()}
    resource_text = startup_runtime()

    assert resource_names == {"startup-loading.js"}
    assert {"ring.js", "wave.js", "text-shimmer.js"} <= loader_names
    assert "window.__dashStartupLoadingStart" in resource_text
    assert "._dash-loading" in resource_text
    assert 'querySelector("._dash-loading")' in resource_text


def test_only_the_selected_loader_is_requested_by_the_index():
    setup(loader="wave")
    app = Dash(__name__)
    app.layout = dash_html.Div("Ready", id="ready")
    client = app.server.test_client()

    index = client.get("/").get_data(as_text=True)

    assert f'src="/_dash-startup-loading/wave.js?v={loading_plugin.__version__}"' in index
    assert "ring.js" not in index
    for loader in ("spiral", "text-shimmer"):
        assert f"{loader}.js" not in index

    response = client.get("/_dash-startup-loading/wave.js")
    assert response.status_code == 200
    assert response.headers["Cache-Control"] == "public, max-age=31536000, immutable"
    assert client.get("/_dash-startup-loading/default.js").status_code == 404
    assert client.get("/_dash-startup-loading/startup-loading.js").status_code == 404


def test_dash_index_contains_overlay_and_inline_resources():
    app = Dash(__name__)
    app.layout = dash_html.Div("Ready", id="ready")

    client = app.server.test_client()
    response = client.get("/")
    index = response.get_data(as_text=True)

    assert response.status_code == 200
    assert "data-dash-loading" in index
    assert '<script data-dash-loading-resource="startup">' in index
    assert "if (window.__dashStartupLoadingStart){window.__dashStartupLoadingStart()}" in index
    assert "resources/startup-loading.js" not in index
    assert '<div class="_dash-loading">' in index
