"""Real Flask/Dash asset routes with a deliberately held initial loading marker."""

import os
import json
import sys
from importlib.resources import files
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / "src"))
REACT_VERSION = os.environ.setdefault("REACT_VERSION", "19.2.4")

from dash import Dash, html
from flask import request, send_file
from dash_splash_plugin import reset_config, setup
from dash_splash_plugin.plugin import _inject_overlay

app = Dash(__name__)
app.layout = html.Div("Ready")


@app.server.get("/preview")
def preview():
    reset_config()
    setup(
        theme=request.args.get("splash_theme", "auto"),
        loader=request.args.get("loader", "loading-ui:fade-arc"),
        size=64,
        rate=float(request.args.get("rate", 1)),
        loader_options=json.loads(request.args.get("options", "{}")),
        playing=request.args.get("playing", "true") == "true",
        dark_color="rgb(255, 255, 255)",
        text_color=request.args.get("text_color"),
        dark_text_color=request.args.get("dark_text_color"),
    )
    theme = request.args.get("theme", "light")
    development = (
        "?development=true" if request.args.get("development") == "true" else ""
    )
    doc = (
        f'<html class="{theme}"><head></head><body style="margin:0">'
        '<div id="react-entry-point"><div class="_dash-loading">Loading</div></div>'
        f'<script src="/host-react.js{development}"></script><script src="/host-react-dom.js{development}"></script>'
        "</body></html>"
    )
    return _inject_overlay(doc)


@app.server.get("/host-react.js")
def react():
    filename = (
        f"react@{REACT_VERSION}.js"
        if request.args.get("development") == "true"
        else f"react@{REACT_VERSION}.min.js"
    )
    return send_file(
        str(files("dash").joinpath(f"deps/{filename}")),
        mimetype="text/javascript",
    )


@app.server.get("/host-react-dom.js")
def react_dom():
    filename = (
        f"react-dom@{REACT_VERSION}.js"
        if request.args.get("development") == "true"
        else f"react-dom@{REACT_VERSION}.min.js"
    )
    return send_file(
        str(files("dash").joinpath(f"deps/{filename}")),
        mimetype="text/javascript",
    )


if __name__ == "__main__":
    app.server.run(host="127.0.0.1", port=int(sys.argv[1]), threaded=True)
