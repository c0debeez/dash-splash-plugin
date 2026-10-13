"""Run a gallery showing every loader bundled with the startup plugin."""

from html import escape
from hashlib import sha256
from importlib.resources import files
from typing import get_args

from dash import Dash, html

from dash_startup_loading_plugin import setup
from dash_startup_loading_plugin.plugin import LoaderName

setup(loader="default", loader_size=32, loader_stroke_width=2)

app = Dash(__name__)

LOADER_NAMES = get_args(LoaderName)
LOADER_ROUTE = f"{app.config.requests_pathname_prefix}_dash-startup-loading"
INTRINSIC_LOADERS = frozenset(
    {
        "accordion-loader",
        "conveyor-loop",
        "infinity-square-snake",
        "infinity-track",
        "square-accordion",
        "square-grid",
        "symmetric-wave",
        "square-snake",
    }
)
ORIGINAL_SIZE_LOADERS = INTRINSIC_LOADERS | {
    "text-blink",
    "text-dots",
    "text-shimmer",
    "text-shimmer-wave",
    "swirling",
}


def loader_preview(name: str) -> str:
    """Return an isolated document so each loader bundle mounts in its own frame."""

    if name == "default":
        preview = (
            '<span class="antd-spinner" aria-hidden="true"><span class="antd-dot">'
            "<i></i><i></i><i></i><i></i></span></span>"
        )
        css = """
            .antd-spinner,.antd-dot{position:relative;display:inline-block;width:20px;height:20px}
            .antd-dot{transform:rotate(45deg);animation:rotate 1.2s linear infinite}
            .antd-dot i{position:absolute;display:block;width:9px;height:9px;background:#1677ff;
                border-radius:100%;transform:scale(.75);opacity:.3;animation:move 1s linear infinite alternate}
            .antd-dot i:first-child{top:0;left:0;animation-delay:0s}
            .antd-dot i:nth-child(2){top:0;right:0;animation-delay:.4s}
            .antd-dot i:nth-child(3){right:0;bottom:0;animation-delay:.8s}
            .antd-dot i:nth-child(4){bottom:0;left:0;animation-delay:1.2s}
            @keyframes rotate{to{transform:rotate(405deg)}}
            @keyframes move{to{opacity:1}}
        """
        body = f'<main class="preview">{preview}</main>'
        script = ""
    else:
        loader = name
        host_class = "loader loader--intrinsic" if loader in ORIGINAL_SIZE_LOADERS else "loader"
        if loader in {"infinity", "morphing-infinity"}:
            host_class += " loader--infinity-size"
        body = (
            f'<main class="preview"><span class="{host_class}" data-dash-loading-ui="{escape(loader, quote=True)}" '
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
    body {{ display: grid; place-items: center; color: #1677ff; font-family: sans-serif; }}
    .preview {{ display: grid; place-items: center; width: 100%; height: 100%; }}
    .loader {{ display: grid; place-items: center; width: 2rem; height: 2rem; }}
    .loader--intrinsic {{ width: 100%; height: 100%; }}
    .loader--infinity-size {{ width: 3rem; height: 3rem; }}
    {css}
</style></head><body>{body}{script}</body></html>"""


app.layout = html.Main(
    [
        html.Header(
            [
                html.H1("Dash Startup Loading · Loader Gallery"),
                html.P(f"Preview all {len(LOADER_NAMES)} loader choices."),
            ],
            className="gallery-header",
        ),
        html.Section(
            [
                html.Article(
                    [
                        html.H2(name),
                        html.Iframe(
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

app.index_string = app.index_string.replace(
    "</head>",
    """<style>
        body { margin: 0; background: #f5f7fa; color: #1f2937; }
        .gallery { max-width: 1280px; margin: 0 auto; padding: 32px 24px 48px; }
        .gallery-header { margin-bottom: 24px; }
        .gallery-header h1 { margin: 0 0 8px; font-size: 28px; }
        .gallery-header p { margin: 0; color: #667085; }
        .loader-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px; }
        .loader-card { min-width: 0; overflow: hidden; border: 1px solid #e4e7ec; border-radius: 10px; background: white; }
        .loader-card h2 { margin: 0; padding: 12px 16px; border-bottom: 1px solid #eaecf0; font: 600 14px/20px sans-serif; }
        .loader-frame { display: block; width: 100%; height: 150px; border: 0; }
    </style></head>""",
)


if __name__ == "__main__":
    app.run(debug=False, port=5000)
