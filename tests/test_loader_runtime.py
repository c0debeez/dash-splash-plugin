"""Build artifacts must use real React/Motion, not a second DOM interpreter."""

import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def test_react_baseline_and_loader_version_requirements():
    package = json.loads((ROOT / "package.json").read_text())
    assert package["dependencies"]["react"] == "18.3.1"
    assert package["dependencies"]["react-dom"] == "18.3.1"
    manifest = json.loads((ROOT / "src/dash_splash_plugin/resources/manifest.json").read_text())
    for item in manifest["loaders"].values():
        assert item["minReact"] == (19 if item["family"] == "loading-dev" else 18)


def test_bundles_use_only_the_host_react_and_real_motion():
    manifest = json.loads((ROOT / "src/dash_splash_plugin/resources/manifest.json").read_text())
    assert len({item["module"] for item in manifest["loaders"].values()}) == 162
    source = (ROOT / "scripts/build_loaders.mjs").read_text()
    assert "window." in source
    assert 'loader-motion' not in source
    assert 'loader-dom' not in source
    assert not (ROOT / "scripts/runtime/loader-motion.ts").exists()
    assert not (ROOT / "scripts/runtime/loader-dom.ts").exists()
    assert (ROOT / "src/dash_splash_plugin/resources/splash.js").stat().st_size < 10000


def test_presets_share_component_chunks_and_native_options_are_discoverable():
    manifest = json.loads((ROOT / "src/dash_splash_plugin/resources/manifest.json").read_text())
    loaders = manifest["loaders"]
    assert loaders["flicker:mycelium"]["module"] == loaders["flicker:spore-ring"]["module"]
    assert loaders["gridora:orbit"]["module"] == loaders["gridora:spiral"]["module"]
    assert loaders["loadersz:working"]["module"] == loaders["loadersz:heatmapping"]["module"]
    assert "grids" in loaders["flicker:mycelium"]["options"]
    assert "duration" in loaders["loading-dev:arc"]["options"]
