"""Exercise the generated native loader bundles without a React runtime."""

import json
from importlib.resources import files
from pathlib import Path

import pytest

from test_runtime import run_node


@pytest.fixture(scope="module")
def rendered_loaders():
    directory = files("dash_startup_loading_plugin").joinpath("resources/loading-ui")
    bundles = {path.name: path.read_text(encoding="utf-8") for path in directory.iterdir()}
    return run_node("""
const vm = require('node:vm');
class Element {
  constructor(tag, namespace = null) {
    this.tag = tag; this.namespace = namespace; this.attributes = {};
    this.children = []; this.style = {setProperty(name, value) {this[name] = value;}};
  }
  setAttribute(name, value) {this.attributes[name] = value;}
  appendChild(child) {child.parent = this; this.children.push(child); return child;}
  attachShadow() {return this.shadow = new Element('shadow');}
}
function walk(node) {return [node, ...node.children.flatMap(walk)];}
const result = {};
for (const [name, source] of Object.entries(BUNDLES)) {
  const host = new Element('host');
  host.dataset = {dashLoadingText: '报表 <img src=x onerror=alert(1)>'};
  const document = {
    querySelector: () => host,
    createElement: tag => new Element(tag),
    createElementNS: (namespace, tag) => new Element(tag, namespace),
    createTextNode: text => Object.assign(new Element('#text'), {text}),
  };
  const context = {document, getComputedStyle: element => ({
    color: 'rgb(22, 119, 255)',
    getPropertyValue(name) {
      for (let node = element; node; node = node.parent) {
        if (node.style[name]) return node.style[name];
      }
      return '';
    }
  })};
  vm.runInNewContext(source, context);
  const nodes = walk(host.shadow);
  result[name] = {
    targetStyle: host.shadow.children[1].style,
    text: nodes.filter(node => node.tag === '#text' && node.parent.tag !== 'style').map(node => node.text).join(''),
    css: nodes.filter(node => node.tag === 'style').map(node => node.textContent || node.children.map(child => child.text).join('')).join(''),
    elements: nodes.filter(node => node.tag !== '#text').map(node => ({
      tag: node.tag, namespace: node.namespace, attributes: node.attributes, style: node.style,
    })),
  };
  // The same resource may be prefetched on a page that has no loader host.
  document.querySelector = () => null;
  vm.runInNewContext(source, context);
}
console.log(JSON.stringify(result));
""".replace("BUNDLES", json.dumps(bundles)))


def test_all_loader_bundles_mount_and_keep_their_geometry(rendered_loaders):
    assert len(rendered_loaders) == 47
    for result in rendered_loaders.values():
        assert len(result["elements"]) > 2
        assert "box-sizing:border-box" in result["css"]
        assert "var(--dash-loading-ui-stroke,2px)" in result["css"]
    for name, size in {"ring": "2rem", "infinity": "3rem", "morphing-infinity": "3rem",
                       "triple-dot-spinner": "0.6rem", "twin-orbit": "0.6rem", "swirling": "6rem"}.items():
        assert rendered_loaders[f"{name}.js"]["targetStyle"]["width"] == size
        assert rendered_loaders[f"{name}.js"]["targetStyle"]["height"] == size
    assert rendered_loaders["wave.js"]["targetStyle"]["width"] == "3rem"
    assert rendered_loaders["wave.js"]["targetStyle"]["height"] == "2rem"
    svg = next(node for node in rendered_loaders["infinity.js"]["elements"] if node["tag"] == "svg")
    assert svg["attributes"]["preserveAspectRatio"] == "xMidYMid"
    assert svg["namespace"] == "http://www.w3.org/2000/svg"


def test_custom_text_is_rendered_as_text_in_every_text_loader(rendered_loaders):
    for name in ("text-blink", "text-dots", "text-shimmer", "text-shimmer-wave"):
        result = rendered_loaders[f"{name}.js"]
        assert "报表 <img src=x onerror=alert(1)>" in result["text"]
        assert not any(node["tag"] == "img" for node in result["elements"])
        assert result["targetStyle"]["fontSize"] == "1.25rem"


def test_motion_loaders_have_native_looping_animations(rendered_loaders):
    for name in ("bobbing-dots", "pulsating-dots", "spiral", "analyzing-image", "text-shimmer", "text-shimmer-wave"):
        result = rendered_loaders[f"{name}.js"]
        assert "@keyframes loading-ui-motion-" in result["css"]
        animated = [node for node in result["elements"] if node["style"].get("animation-name")]
        assert animated
        assert all(node["style"]["animation-iteration-count"] == "infinite" for node in animated)
    morph = rendered_loaders["morphing-infinity.js"]
    animation = next(node for node in morph["elements"] if node["tag"] == "animate")
    assert animation["attributes"]["attributeName"] == "d"
    assert animation["attributes"]["repeatCount"] == "indefinite"
    assert animation["attributes"]["keyTimes"] == "0;0.25;0.5;0.75;1"
    assert len(animation["attributes"]["values"].split(";")) == 5


def test_loader_resources_stay_small_and_match_build_outputs():
    resources = files("dash_startup_loading_plugin").joinpath("resources/loading-ui")
    source = Path(__file__).resolve().parents[1] / "scripts/runtime/loading-ui"
    for path in resources.iterdir():
        bundle = path.read_bytes()
        assert len(bundle) < 16_384, path.name
        assert bundle == (source / path.name).read_bytes()
