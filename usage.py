"""Preview the generated native React loader catalog without loading every family."""

import os
from dataclasses import replace
from html import escape

os.environ.setdefault("REACT_VERSION", "19.2.4")

from dash import Dash, Input, Output, dcc, html

from dash_splash_plugin import (
    LoaderLibrary,
    get_config,
    list_libraries,
    list_loaders,
    setup,
)
from dash_splash_plugin.plugin import _overlay_html, _resource_text

setup()
app = Dash(__name__)
LOADER_NAMES = list_loaders()
PREVIEW_COLORS = {
    "default": ("Default", "#1890ff"),
    "green": ("Green", "#52c41a"),
    "red": ("Red", "#f5222d"),
    "orange": ("Orange", "#fa8c16"),
    "purple": ("Purple", "#722ed1"),
}


def loader_preview(name: str, color: str = "default") -> str:
    """Render an isolated preview without depending on the parent React runtime."""
    if name not in LOADER_NAMES:
        raise ValueError(f"Unknown loader: {name}")
    preview_color = PREVIEW_COLORS.get(color, PREVIEW_COLORS["default"])[1]
    config = replace(
        get_config(),
        loader=name,
        color=preview_color,
        size=64,
        background="#fff",
        dark_background="#fff",
    )
    return (
        '<!doctype html><html><head><meta charset="utf-8">'
        f"<title>{escape(name)}</title><script>{_resource_text('splash.js')}</script>"
        '</head><body style="margin:0">'
        f"{_overlay_html(config, name)}"
        "<script>window.__dashSplashStart();</script></body></html>"
    )


def preview_frame(name: str, color: str = "default") -> html.Iframe:
    return html.Iframe(
        id="loader-preview",
        key=f"{name}:{color}",
        srcDoc=loader_preview(name, color),
        title=f"{name} preview",
        style={
            "display": "block",
            "width": "100%",
            "height": 300,
            "border": "1px solid #ddd",
            "marginTop": 24,
        },
    )


app.layout = html.Main(
    [
        html.H1("Dash Splash Plugin", style={"fontSize": 24}),
        html.P(f"{len(LOADER_NAMES)} native React animations and presets"),
        html.Label("Library", htmlFor="loader-library"),
        dcc.Dropdown(
            id="loader-library",
            value="loading-ui",
            clearable=False,
            options=[{"value": name, "label": name} for name in list_libraries()],
        ),
        html.Label("Animation", htmlFor="loader-name"),
        dcc.Dropdown(
            id="loader-name",
            searchable=True,
            value="loading-ui:fade-arc",
            options=[
                {"value": name, "label": name.split(":", 1)[1]}
                for name in list_loaders("loading-ui")
            ],
            clearable=False,
        ),
        html.Label(
            "Preview color",
            htmlFor="loader-color",
            style={"display": "block", "marginTop": 16},
        ),
        dcc.Dropdown(
            id="loader-color",
            value="default",
            options=[
                {"value": key, "label": label}
                for key, (label, _) in PREVIEW_COLORS.items()
            ],
            clearable=False,
        ),
        html.Div(preview_frame("loading-ui:fade-arc"), id="preview-container"),
        dcc.Markdown(
            id="loader-code",
            highlight_config={"theme": "light"},
            style={"overflowX": "auto", "marginTop": 16},
        ),
    ],
    style={
        "maxWidth": 800,
        "margin": "0 auto",
        "padding": 24,
        "fontFamily": "sans-serif",
        "background": "#fff",
    },
)


@app.callback(
    Output("loader-name", "options"),
    Output("loader-name", "value"),
    Input("loader-library", "value"),
)
def select_library(library: LoaderLibrary):
    names = list_loaders(library)
    selected = "loading-ui:fade-arc" if library == "loading-ui" else names[0]
    options = [{"value": name, "label": name.split(":", 1)[1]} for name in names]
    return options, selected


@app.callback(
    Output("preview-container", "children"),
    Output("loader-code", "children"),
    Input("loader-name", "value"),
    Input("loader-color", "value"),
    Input("loader-library", "value"),
)
def update_preview(name: str, color: str, library: LoaderLibrary) -> tuple[html.Iframe, str]:
    # A library change can arrive before its dependent animation callback.
    if name not in list_loaders(library):
        from dash.exceptions import PreventUpdate

        raise PreventUpdate
    preview_color = PREVIEW_COLORS.get(color, PREVIEW_COLORS["default"])[1]
    code = (
        "from dash_splash_plugin import setup\n\n"
        f"setup(loader={name!r}, color={preview_color!r}, size=64)"
    )
    return preview_frame(name, color), f"```python\n{code}\n```"


if __name__ == "__main__":
    app.run(debug=True, port=5001)
