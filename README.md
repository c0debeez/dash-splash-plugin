# dash-startup-loading-plugin

[English](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.zh-CN.md)

A configurable full-screen startup loading overlay for Dash, packaged as a
[Dash Hooks plugin](https://dash.plotly.com/dash-plugins-using-hooks).
Install it to enable the default spinner automatically, or choose from 48 loader
styles with shared color, size and playback controls. Native Dash and Dash Ant
Design applications use the same configuration.

![Animated preview of all 48 loaders running in usage.py](https://raw.githubusercontent.com/C0deBeez/dash-startup-loading-plugin/a2bc500ddbcb2f1c3d6d9f1132a93e115ddd4520/docs/assets/loader-preview.gif)

*Recorded from the repository's `usage.py` demo. This page keeps the loaders
visible for comparison; an application's startup overlay closes automatically.*

## Installation

Requires **Python 3.9+** and **Dash 3.0.3+**.

```bash
pip install "dash-startup-loading-plugin>=3.0.0"
```

Dash discovers the plugin through its `dash_hooks` entry point. No explicit
registration, asset copying or `index_string` replacement is needed to enable
the overlay. The default Ant Design four-dot spinner is included, with no
component-library dependency.

## Quick start

Installing the package is enough for a standard Dash app:

```python
from dash import Dash, html

app = Dash(__name__)
app.layout = html.Main([
    html.H1("My Dash app"),
    html.P("The startup overlay closes after the initial layout mounts."),
])

if __name__ == "__main__":
    app.run(debug=True)
```

To customize the overlay, call `setup()` before creating the app:

```python
from dash import Dash, html
from dash_startup_loading_plugin import setup

setup(loader="ring", color="#1677ff", size=32, stroke=3, rate=1.0)

app = Dash(__name__)
app.layout = html.H1("My dashboard")

if __name__ == "__main__":
    app.run(debug=True)
```

Use `setup(loader="default")` to select the bundled four-dot spinner,
`setup(loader="text-shimmer", text="Preparing dashboard", font_size=20)` for a
text animation, or `setup(enabled=False)` to disable the plugin.

### Dash Ant Design

Dash Ant Design is optional. Install it with `pip install dash-ant-design`, then
use the Python module `dash_antd_components` in your layout. The overlay works
with these components automatically; configure it with the same `setup()` call.

## Run the interactive demo

From a checkout of this repository:

```bash
uv sync
uv run python usage.py
```

Open [http://127.0.0.1:5000](http://127.0.0.1:5000). The demo shows all 48 choices:
the default spinner and 47 bundled [Loading UI](https://loading-ui.com/) loaders.
Use **Preview color** to compare six foreground colors. Each card's title is the
value accepted by `setup(loader=...)`.

The previews share `size`, `rate` and `playing` from the `setup()` call near the
top of `usage.py`; edit those settings and restart the demo to compare them.
The color dropdown changes the demo previews only.

## Configuration

`setup(**changes)` updates an immutable, process-wide `StartupLoadingConfig`.
Use one configuration per Python process; apps in the same process share it.

| Option | Default | Description |
| --- | ---: | --- |
| `enabled` | `True` | Enable index injection. |
| `aria_label` | `"Loading"` | Accessible status label. |
| `z_index` | `9999` | Overlay stacking order. |
| `background` | `#f5f5f5` | Overlay background in light mode. |
| `dark_background` | `#000` | Overlay background when `html.dark` is set. |
| `color` | `"currentColor"` | Inherit the overlay foreground; an explicit CSS color overrides it. |
| `dark_color` | `None` | Dark-mode override; falls back to `color`, then inherited foreground. |
| `text_color` | `None` | Optional text color; falls back to `color`, then inherited foreground. |
| `dark_text_color` | `None` | Falls back to `text_color`, `dark_color`, `color`, then inherited foreground. |
| `loader` | `"default"` | Ant Design's four-dot spinner. Use `"ring"` for the Loading UI ring. |
| `text` | `"Loading"` | Text rendered by `text-*` Loading UI loaders. |
| `size` | `32` | Graphical loader container's longest side in CSS pixels, keeping the aspect ratio. Text loaders use `font_size`. `None` preserves original geometry; `0` hides the loader. The visible artwork may not fill its container. |
| `stroke` | `None` | Preserve original borders and SVG strokes. A number overrides supported borders and strokes in CSS pixels; dot, text and filled-shape loaders may have no adjustable stroke. |
| `rate` | `1.0` | Positive relative animation tempo. `2.0` is twice as fast; `0.5` is half speed. |
| `playing` | `True` | `False` pauses CSS and SVG animations without hiding the loader. |
| `font_size` | `None` | Font size in CSS pixels for `text-*` loaders; independent of container sizing. |
| `custom_loader_html` | `None` | Trusted HTML replacing the default spinner. |
`custom_loader_html` is inserted verbatim and must only contain trusted HTML.

### Size and animation

Graphical loaders fit their container's longest side to `size`, preserving their
aspect ratio. `size=None` retains the original geometry; `size=0` hides the
loader. Text loaders retain their original font size unless `font_size` is set.
`stroke=None` preserves the artwork's original borders and strokes.

`rate` must be a finite positive number. Use `playing=False` to pause animations
while keeping the loader visible. The `size`, `color`, `rate` and `playing`
parameter names also make it convenient to share a preset with
`dash-loading-components`; that library is optional and its animations and
default sizes can differ.

### Theme behavior

The plugin follows the root element's `html.dark` class, using `background` and
`dark_background` for the overlay. Its inherited foreground defaults to
`rgba(0,0,0,.88)` in light mode and `rgba(255,255,255,.85)` in dark mode. Set
`color` and `dark_color` for custom colors; text loaders use the same color
unless a text-specific override is supplied.

Initialize the application's root `dark`/`light` class before Dash mounts,
for example with a script in `index_string`. Applications following the system
theme can use `prefers-color-scheme`. The plugin follows the class and leaves
theme preferences to the application.

### Migrating configuration names

For one compatibility release, `setup()` accepts deprecated aliases:
`loader_color` → `color`, `loader_dark_color` → `dark_color`,
`loader_text_color` → `text_color`, `loader_dark_text_color` → `dark_text_color`,
`loader_size` → `size`, `loader_stroke_width` → `stroke`, and
`loader_text` → `text`, and `thickness` → `stroke`. They emit `DeprecationWarning`; supplying an alias and
its replacement together raises `TypeError`. Configuration objects use the new
field names. Explicit `size` now means actual container size, not the previous
32px scaling baseline.

```python
setup(loader="ring", color="#1677ff", size=32, stroke=2)
setup(loader="text-shimmer", text="Loading", font_size=20)
```

## Startup lifecycle

The overlay is injected before React mounts and observes Dash's
`#react-entry-point ._dash-loading` element. When that element disappears, the
overlay is removed. It does not wait for application-specific background work
or reappear during later callbacks. Use `dcc.Loading` for callback loading states.

The default spinner uses inline HTML and CSS. Other loaders are served as
individual, cacheable JavaScript bundles, and only the selected loader is loaded.
Their isolated renderer uses native DOM, CSS and SVG animations without shipping
React, React DOM or Motion. Strict Content Security Policy configurations must
allow the injected startup script and style as well as the selected loader route.

## Python API

```python
from dash_startup_loading_plugin import (
    StartupLoadingConfig,
    setup,
    get_config,
    reset_config,
)
```

`setup()` returns the updated configuration, `get_config()` reads it, and
`reset_config()` restores the defaults.

## Development

```bash
uv sync --group test
uv run pytest -q
```

To rebuild the bundled Loading UI resources, run
`uv run python scripts/build_loading_ui.py` with Node.js and npm available.

## License

MIT. See [LICENSE](LICENSE).
