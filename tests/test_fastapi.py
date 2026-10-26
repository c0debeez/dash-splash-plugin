"""Exercise optional Dash 4 backends with their real request context."""

import inspect
import re

import pytest
from dash import Dash, html

from dash_splash_plugin import reset_config, setup

pytest.importorskip("fastapi")
pytest.importorskip("httpx")
if "backend" not in inspect.signature(Dash).parameters:
    pytest.skip("FastAPI backends require Dash 4", allow_module_level=True)

from fastapi import FastAPI
from fastapi.testclient import TestClient


@pytest.mark.parametrize("prefix", ["/", "/docs/"])
@pytest.mark.parametrize("loader", ["antd:spin", "antd:loading", "antd:progress", "antd:skeleton", "gridora:orbit"])
def test_fastapi_serves_react_assets_with_request_prefix(prefix, loader):
    reset_config()
    setup(loader=loader)
    try:
        server = FastAPI()
        request_prefix = f"/proxy{prefix}"
        app = Dash(
            __name__,
            server=server,
            backend="fastapi",
            routes_pathname_prefix=prefix,
            requests_pathname_prefix=request_prefix,
        )
        app.layout = html.Div("Ready")
        # Match the docs app's initialization before TestClient builds middleware.
        app._setup_server()
        client = TestClient(server)

        index = client.get(prefix)
        assert index.status_code == 200
        assert (
            f'data-dash-splash-module="{request_prefix}_dash-splash-plugin/react/'
            in index.text
        )
        resource = re.search(r'data-dash-splash-module="([^"]+)"', index.text)[1]
        response = client.get(resource.replace("/proxy", "", 1))
        assert response.status_code == 200
        assert response.headers["content-type"].startswith("text/javascript")
        assert "import" in response.text
        assert (
            response.headers["cache-control"] == "public, max-age=31536000, immutable"
        )
        if loader.startswith("gridora"):
            css = re.search(r'data-dash-splash-css="([^"]+)"', index.text)[1]
            stylesheet = client.get(css.replace("/proxy", "", 1))
            assert stylesheet.status_code == 200
            assert stylesheet.headers["content-type"].startswith("text/css")
        assert (
            client.get(f"{prefix}_dash-splash-plugin/react/unknown.js").status_code
            == 404
        )
    finally:
        reset_config()
