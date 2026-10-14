"""Run a gallery showing every loader bundled with the startup plugin."""

from html import escape
from hashlib import sha256
from importlib.resources import files
from typing import get_args

from dash import Dash, Input, Output, dcc, html

from dash_startup_loading_plugin import get_config, setup
from dash_startup_loading_plugin.plugin import LoaderName

setup(loader="default")

app = Dash(__name__)

LOADER_NAMES = get_args(LoaderName)
LOADER_ROUTE = f"{app.config.requests_pathname_prefix}_dash-startup-loading"
PREVIEW_COLORS = {
    "default": ("Default", "rgba(0,0,0,.88)"),
    "blue": ("Blue", "#1677ff"),
    "green": ("Green", "#52c41a"),
    "red": ("Red", "#f5222d"),
    "orange": ("Orange", "#fa8c16"),
    "purple": ("Purple", "#722ed1"),
}
def loader_preview(name: str, color: str = "default") -> str:
    """Return an isolated document so each loader bundle mounts in its own frame."""

    preview_color = PREVIEW_COLORS.get(color, PREVIEW_COLORS["default"])[1]
    config = get_config()
    size = config.size if config.size is not None else 20
    controls = f"--dash-loading-rate:{config.rate:g};--dash-loading-play-state:{'running' if config.playing else 'paused'};"
    if config.size is not None:
        controls += f"--dash-loading-target-size:{config.size:g};"
    if config.stroke is not None:
        controls += f"--dash-loading-thickness:{config.stroke:g};"
    if name == "default":
        preview = (
            '<span class="antd-spinner" aria-hidden="true"><span class="antd-dot">'
            "<i></i><i></i><i></i><i></i></span></span>"
        )
        css = """
            .antd-spinner,.antd-dot{position:relative;display:inline-block;width:var(--preview-size);height:var(--preview-size)}
            .antd-dot{transform:rotate(45deg);animation:rotate 1.2s linear infinite}
            .antd-dot i{position:absolute;display:block;width:calc((var(--preview-size) - 2px)/2);height:calc((var(--preview-size) - 2px)/2);background:currentColor;
                border-radius:100%;transform:scale(.75);opacity:.3;animation:move 1s linear infinite alternate}
            .antd-dot i:first-child{top:0;left:0;animation-delay:0s}
            .antd-dot i:nth-child(2){top:0;right:0;animation-delay:.4s}
            .antd-dot i:nth-child(3){right:0;bottom:0;animation-delay:.8s}
            .antd-dot i:nth-child(4){bottom:0;left:0;animation-delay:1.2s}
            @keyframes rotate{to{transform:rotate(405deg)}}
            @keyframes move{to{opacity:1}}
            .antd-dot{animation-duration:calc(1.2s / var(--dash-loading-rate));animation-play-state:var(--dash-loading-play-state)}
            .antd-dot i{animation-duration:calc(1s / var(--dash-loading-rate));animation-play-state:var(--dash-loading-play-state)}
            .antd-dot i:nth-child(2){animation-delay:calc(.4s / var(--dash-loading-rate))}
            .antd-dot i:nth-child(3){animation-delay:calc(.8s / var(--dash-loading-rate))}
            .antd-dot i:nth-child(4){animation-delay:calc(1.2s / var(--dash-loading-rate))}
        """
        body = f'<main class="preview">{preview}</main>'
        script = ""
    else:
        loader = name
        body = (
            f'<main class="preview"><span class="loader" data-dash-loading-ui="{escape(loader, quote=True)}" '
            'data-dash-loading-text="Loading"></span></main>'
        )
        css = ""
        resource = files("dash_startup_loading_plugin").joinpath(f"resources/loading-ui/{loader}.js")
        revision = sha256(resource.read_bytes()).hexdigest()[:12]
        script = (
            f'<script async src="{escape(LOADER_ROUTE, quote=True)}/'
            f'{escape(loader, quote=True)}.js?v={revision}"></script>'
        )

    return f"""<!doctype html>
<html><head><meta charset="utf-8"><style>
    * {{ box-sizing: border-box; }}
    html, body {{ width: 100%; height: 100%; margin: 0; }}
    body {{ display: grid; place-items: center; color: {preview_color}; font-family: sans-serif; }}
    .preview {{ display: grid; place-items: center; width: 100%; height: 100%; }}
    .loader {{ display: grid; place-items: center; width: auto; height: auto; }}
    {css}
</style></head><body style="{controls}--preview-size:{size:g}px">{body}{script}</body></html>"""


app.layout = html.Main(
    [
        html.Header(
            [
                html.H1("Dash Startup Loading · Loader Gallery"),
                html.P(f"Preview all {len(LOADER_NAMES)} loader choices with shared size, color, rate and playing settings."),
                html.Div(
                    [
                        html.Label("Preview color", htmlFor="loader-color"),
                        dcc.Dropdown(
                            id="loader-color",
                            options=[{"label": label, "value": key} for key, (label, _) in PREVIEW_COLORS.items()],
                            value="default",
                            clearable=False,
                            searchable=False,
                        ),
                    ],
                    className="gallery-controls",
                ),
            ],
            className="gallery-header",
        ),
        html.Section(
            [
                html.Article(
                    [
                        html.H2(name),
                        html.Iframe(
                            id=f"loader-preview-{name}",
                            srcDoc=loader_preview(name),
                            title=f"{name} loader preview",
                            className="loader-frame",
                        ),
                    ],
                    className="loader-card",
                )
                for name in LOADER_NAMES
            ],
            className="loader-grid",
        ),
    ],
    className="gallery",
)

@app.callback(
    [Output(f"loader-preview-{name}", "srcDoc") for name in LOADER_NAMES],
    Input("loader-color", "value"),
    prevent_initial_call=True,
)
def update_preview_colors(color: str) -> list[str]:
    """Remount every isolated preview with the selected foreground color."""
    return [loader_preview(name, color) for name in LOADER_NAMES]


app.index_string = app.index_string.replace(
    "</head>",
    """<style>
        body { margin: 0; background: #f5f7fa; color: #1f2937; }
        .gallery { max-width: 1280px; margin: 0 auto; padding: 32px 24px 48px; }
        .gallery-header { margin-bottom: 24px; }
        .gallery-header h1 { margin: 0 0 8px; font-size: 28px; }
        .gallery-header p { margin: 0; color: #667085; }
        .gallery-controls { max-width: 280px; margin-top: 20px; }
        .gallery-controls label { display: block; margin-bottom: 8px; font-size: 14px; }
        .loader-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
        .loader-card { min-width: 0; overflow: hidden; border: 1px solid #e4e7ec; border-radius: 10px; background: white; }
        .loader-card h2 { margin: 0; padding: 12px 16px; border-bottom: 1px solid #eaecf0; font: 600 14px/20px sans-serif; }
        .loader-frame { display: block; width: 100%; height: 150px; border: 0; }
    </style></head>""",
)


if __name__ == "__main__":
    app.run(debug=True, port=5000)
