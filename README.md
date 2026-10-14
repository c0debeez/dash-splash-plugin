# dash-startup-loading-plugin

[English](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.zh-CN.md)

An installable [Dash Hooks plugin](https://dash.plotly.com/dash-plugins-using-hooks)
that replaces Dash's initial loading presentation with a configurable
full-screen overlay.

The plugin injects its CSS and JavaScript into Dash's normal index document
before React mounts. Applications do not need to copy assets or replace
`index_string`, and Dash's built-in `<div class="_dash-loading">` remains in the
document.

## Requirements

- Python 3.9 or later
- Dash 3.0.3 or later

## Installation

```bash
pip install "dash-startup-loading-plugin>=2.0.1"
```

Dash discovers the plugin through its `dash_hooks` entry point. Installing the
package enables the default loading overlay without an explicit import.

The default background colors work with native Dash and Dash Ant Design.

## Quick start

The plugin is discovered automatically, so a native Dash app needs no
plugin-specific code:

```python
from dash import Dash, html

app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("My Dash app"),
        html.P("The overlay closes after this layout is ready."),
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
```

The example above uses Dash's native components from `dash.html`. You can also
use the plugin with `dash-antd-components`:

```bash
pip install dash-ant-design
```

```bash
uv add dash-ant-design
```

```python
import dash_antd_components as dac
from dash import Dash

app = Dash(__name__)
app.layout = dac.Space(
  [
    dac.Title("My Dash Ant Design app", level=2),
    dac.Button("Continue", type="primary"),
    dac.Input(placeholder="Search"),
  ],
  orientation="vertical",
  size="middle",
)

if __name__ == "__main__":
  app.run(debug=True)
```

All apps use Ant Design's four-dot spinner through `loader="default"`.
Use `setup(loader="ring")` to select the Loading UI ring.

### Theme behavior

Theme initialization belongs to the application. Set `dark`/`light` on the
root HTML element before Dash mounts, for example in `index_string`; the
plugin's CSS follows `html.dark`. This avoids a theme flash without making the
plugin own application preferences or asynchronous theme callbacks.
Use `prefers-color-scheme` in that head script when the application follows the
operating system preference.

## Dash Ant Design

Dash Ant Design is optional. The same `setup()` function configures native Dash
and Dash Ant Design applications. The default four-dot spinner is bundled with
the plugin and works without installing Dash Ant Design. Use loader and color
options to customize its appearance:

```bash
pip install dash-ant-design
```

```bash
uv add dash-ant-design
```

```python
from dash_startup_loading_plugin import setup

setup(loader="default")
```

## Dismissal behavior

By default, the plugin preserves its original behavior: it observes Dash's
standard `#react-entry-point` and closes the overlay after Dash's
`._dash-loading` element disappears. Theme initialization and application
specific callback/layout settling belong in the application's `index_string`
and callbacks.

## Configuration

`setup(**changes)` updates the process-wide immutable
`StartupLoadingConfig`.

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

`custom_loader_html` is inserted verbatim and must never contain untrusted
user input.

Loading UI retains its `currentColor` defaults. The overlay supplies a readable
foreground: `rgba(0,0,0,.88)` in light mode and `rgba(255,255,255,.85)` in dark
mode. Color overrides apply to text loaders too unless a text color is supplied.
Shimmer-wave colors follow changes to `html.dark` while the overlay is visible.
`text-*` loaders retain their original 1.25rem font size and fit their content.
Use `font_size` to change their font size; `size` does not scale text loaders
(except `size=0`, which still hides the loader).

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

The common `size`, `color`, `rate`, and `playing` names match
`dash-loading-components` (DLC). A shared 32px preset avoids the libraries'
different per-spinner defaults; 32px is this plugin's chosen default, not a
universal DLC upstream default. `stroke` matches DLC's `ldrs.Ring` prop but is
not supported by every DLC component. The existing Loading UI animations and
longest-side sizing remain unchanged; matching parameters does not make them
visually identical to DLC animations. DLC is not a required dependency.

```python
SPINNER = dict(size=32, color="#1677ff", rate=1.0, playing=True)
setup(loader="ring", stroke=3, **SPINNER)

# In an app with dash-loading-components installed:
# dcc.Loading(children=content,
#     custom_spinner=dlc.ldrs.Ring(stroke=3, **SPINNER))
```

The default loader uses Ant Design's four-dot animation:

```python
setup(loader="default")
```

The overlay selects `background` or `dark_background` according to the application's `html.dark` class. It does not read `--layout-bg` or ConfigProvider tokens. Use `size`, `color`, `dark_color`, `text_color`, and `dark_text_color` to match a customized theme. Use `text` to replace the default text in `text-*` loaders:

```python
setup(loader="text-shimmer", text="Preparing dashboard")
```

## Loader gallery

The default is the same for every component library:

| Application | Default loader | Notes |
| --- | --- | --- |
| Native Dash components | `default` | Ant Design's four-dot spinner. |
| `dash-antd-components` | `default` | Ant Design's four-dot spinner. |
| Any app with an explicit `setup(loader=...)` | The selected loader | Explicit configuration always wins. |

All Loading UI loaders are bundled separately and loaded only when selected.
The preview images below link to the official interactive demos. Open a preview
to see its live animation and source details. The `text-*` loaders accept
custom text through `text`; `color`, `dark_color`,
`size`, and `stroke` apply where supported.

| Preview | Preview | Preview |
| --- | --- | --- |
| [![accordion-loader](https://loading-ui.com/api/og/components/accordion-loader/image.png)](https://loading-ui.com/docs/components/accordion-loader)<br>`accordion-loader` | [![analyzing-image](https://loading-ui.com/api/og/components/analyzing-image/image.png)](https://loading-ui.com/docs/components/analyzing-image)<br>`analyzing-image` | [![arc](https://loading-ui.com/api/og/components/arc/image.png)](https://loading-ui.com/docs/components/arc)<br>`arc` |
| [![bars](https://loading-ui.com/api/og/components/bars/image.png)](https://loading-ui.com/docs/components/bars)<br>`bars` | [![bobbing-dots](https://loading-ui.com/api/og/components/bobbing-dots/image.png)](https://loading-ui.com/docs/components/bobbing-dots)<br>`bobbing-dots` | [![bouncing-dots](https://loading-ui.com/api/og/components/bouncing-dots/image.png)](https://loading-ui.com/docs/components/bouncing-dots)<br>`bouncing-dots` |
| [![classic](https://loading-ui.com/api/og/components/classic/image.png)](https://loading-ui.com/docs/components/classic)<br>`classic` | [![clock-ring](https://loading-ui.com/api/og/components/clock-ring/image.png)](https://loading-ui.com/docs/components/clock-ring)<br>`clock-ring` | [![comet-spinner](https://loading-ui.com/api/og/components/comet-spinner/image.png)](https://loading-ui.com/docs/components/comet-spinner)<br>`comet-spinner` |
| [![concentric-ring](https://loading-ui.com/api/og/components/concentric-ring/image.png)](https://loading-ui.com/docs/components/concentric-ring)<br>`concentric-ring` | [![conveyor-loop](https://loading-ui.com/api/og/components/conveyor-loop/image.png)](https://loading-ui.com/docs/components/conveyor-loop)<br>`conveyor-loop` | [![dash-ring](https://loading-ui.com/api/og/components/dash-ring/image.png)](https://loading-ui.com/docs/components/dash-ring)<br>`dash-ring` |
| [![diamond](https://loading-ui.com/api/og/components/diamond/image.png)](https://loading-ui.com/docs/components/diamond)<br>`diamond` | [![dots](https://loading-ui.com/api/og/components/dots/image.png)](https://loading-ui.com/docs/components/dots)<br>`dots` | [![dots-ring](https://loading-ui.com/api/og/components/dots-ring/image.png)](https://loading-ui.com/docs/components/dots-ring)<br>`dots-ring` |
| [![dual-arc](https://loading-ui.com/api/og/components/dual-arc/image.png)](https://loading-ui.com/docs/components/dual-arc)<br>`dual-arc` | [![fade-arc](https://loading-ui.com/api/og/components/fade-arc/image.png)](https://loading-ui.com/docs/components/fade-arc)<br>`fade-arc` | [![infinity](https://loading-ui.com/api/og/components/infinity/image.png)](https://loading-ui.com/docs/components/infinity)<br>`infinity` |
| [![infinity-square-snake](https://loading-ui.com/api/og/components/infinity-square-snake/image.png)](https://loading-ui.com/docs/components/infinity-square-snake)<br>`infinity-square-snake` | [![infinity-track](https://loading-ui.com/api/og/components/infinity-track/image.png)](https://loading-ui.com/docs/components/infinity-track)<br>`infinity-track` | [![morphing-infinity](https://loading-ui.com/api/og/components/morphing-infinity/image.png)](https://loading-ui.com/docs/components/morphing-infinity)<br>`morphing-infinity` |
| [![orbit-ring](https://loading-ui.com/api/og/components/orbit-ring/image.png)](https://loading-ui.com/docs/components/orbit-ring)<br>`orbit-ring` | [![pulsating-dots](https://loading-ui.com/api/og/components/pulsating-dots/image.png)](https://loading-ui.com/docs/components/pulsating-dots)<br>`pulsating-dots` | [![pulse](https://loading-ui.com/api/og/components/pulse/image.png)](https://loading-ui.com/docs/components/pulse)<br>`pulse` |
| [![pulse-dot](https://loading-ui.com/api/og/components/pulse-dot/image.png)](https://loading-ui.com/docs/components/pulse-dot)<br>`pulse-dot` | [![quarter-ring](https://loading-ui.com/api/og/components/quarter-ring/image.png)](https://loading-ui.com/docs/components/quarter-ring)<br>`quarter-ring` | [![ring](https://loading-ui.com/api/og/components/ring/image.png)](https://loading-ui.com/docs/components/ring)<br>`ring` |
| [![ripple](https://loading-ui.com/api/og/components/ripple/image.png)](https://loading-ui.com/docs/components/ripple)<br>`ripple` | [![satellite-ring](https://loading-ui.com/api/og/components/satellite-ring/image.png)](https://loading-ui.com/docs/components/satellite-ring)<br>`satellite-ring` | [![skeleton](https://loading-ui.com/api/og/components/skeleton/image.png)](https://loading-ui.com/docs/components/skeleton)<br>`skeleton` |
| [![spiral](https://loading-ui.com/api/og/components/spiral/image.png)](https://loading-ui.com/docs/components/spiral)<br>`spiral` | [![spokes](https://loading-ui.com/api/og/components/spokes/image.png)](https://loading-ui.com/docs/components/spokes)<br>`spokes` | [![square-accordion](https://loading-ui.com/api/og/components/square-accordion/image.png)](https://loading-ui.com/docs/components/square-accordion)<br>`square-accordion` |
| [![square-grid](https://loading-ui.com/api/og/components/square-grid/image.png)](https://loading-ui.com/docs/components/square-grid)<br>`square-grid` | [![square-snake](https://loading-ui.com/api/og/components/square-snake/image.png)](https://loading-ui.com/docs/components/square-snake)<br>`square-snake` | [![swirling](https://loading-ui.com/api/og/components/swirling/image.png)](https://loading-ui.com/docs/components/swirling)<br>`swirling` |
| [![symmetric-wave](https://loading-ui.com/api/og/components/symmetric-wave/image.png)](https://loading-ui.com/docs/components/symmetric-wave)<br>`symmetric-wave` | [![terminal](https://loading-ui.com/api/og/components/terminal/image.png)](https://loading-ui.com/docs/components/terminal)<br>`terminal` | [![text-blink](https://loading-ui.com/api/og/components/text-blink/image.png)](https://loading-ui.com/docs/components/text-blink)<br>`text-blink` |
| [![text-dots](https://loading-ui.com/api/og/components/text-dots/image.png)](https://loading-ui.com/docs/components/text-dots)<br>`text-dots` | [![text-shimmer](https://loading-ui.com/api/og/components/text-shimmer/image.png)](https://loading-ui.com/docs/components/text-shimmer)<br>`text-shimmer` | [![text-shimmer-wave](https://loading-ui.com/api/og/components/text-shimmer-wave/image.png)](https://loading-ui.com/docs/components/text-shimmer-wave)<br>`text-shimmer-wave` |
| [![triple-dot-spinner](https://loading-ui.com/api/og/components/triple-dot-spinner/image.png)](https://loading-ui.com/docs/components/triple-dot-spinner)<br>`triple-dot-spinner` | [![twin-orbit](https://loading-ui.com/api/og/components/twin-orbit/image.png)](https://loading-ui.com/docs/components/twin-orbit)<br>`twin-orbit` | [![typing](https://loading-ui.com/api/og/components/typing/image.png)](https://loading-ui.com/docs/components/typing)<br>`typing` |
| [![wandering-eyes](https://loading-ui.com/api/og/components/wandering-eyes/image.png)](https://loading-ui.com/docs/components/wandering-eyes)<br>`wandering-eyes` | [![wave](https://loading-ui.com/api/og/components/wave/image.png)](https://loading-ui.com/docs/components/wave)<br>`wave` | [Ant Design Spin](https://ant.design/components/spin)<br>`default` |

The bundled [Loading UI](https://loading-ui.com/) collection supports all 47 loader names in the current upstream catalog:

```text
accordion-loader, analyzing-image, arc, bars, bobbing-dots, bouncing-dots, classic, clock-ring, comet-spinner, concentric-ring, conveyor-loop, dash-ring, diamond, dots, dots-ring, dual-arc, fade-arc, infinity, infinity-square-snake, infinity-track, morphing-infinity, orbit-ring, pulsating-dots, pulse, pulse-dot, quarter-ring, ring, ripple, satellite-ring, skeleton, spiral, spokes, square-accordion, square-grid, square-snake, swirling, symmetric-wave, terminal, text-blink, text-dots, text-shimmer, text-shimmer-wave, triple-dot-spinner, twin-orbit, typing, wandering-eyes, wave
```

For example:

```python
setup(loader="spiral", color="#e91e63", dark_color="#ff80ab")
```

The default Ant Design spinner uses inline markup and CSS. The `ring` and other Loading UI loaders use a bundled, isolated renderer loaded before Dash starts. Each loader ships as its own bundle, and the index only references the selected one at `<requests_pathname_prefix>_dash-startup-loading/<loader>.js`. That keeps the HTML document small and lets the browser cache the renderer, so the choice of loader does not grow the first-screen payload. No other indicator is shown while that renderer starts. Loading UI loaders sit in a centered 4:3 region that uses full width below 640px, half width from 640px, one-third from 768px, and one-quarter from 1024px.

Loader bundles are derived from the pinned Loading UI source with a small,
one-shot DOM renderer. Each bundle includes only its own styles and animations;
React, React DOM, Motion, and Tailwind's full utility stylesheet are not shipped.
Motion-based loops are converted to native CSS keyframes or SVG path animations.
Rebuild the resources with `python scripts/build_loading_ui.py` (requires Node.js
and npm). The renderer targets this pinned catalog, not arbitrary React components.

With `size=None`, most loaders use a 2rem × 2rem baseline. The default Ant Design spinner uses
the 20px AntD Spin middle size. `infinity` and `morphing-infinity` use 3rem × 3rem. The four `text-*` loaders keep their original font sizes; `wave` uses
3rem × 2rem; `triple-dot-spinner` and `twin-orbit` use 0.6rem dots with a
4.25-dot-wide animation envelope. Their explicit `size` fits the whole animation,
including orbiting dots, rather than enlarging each dot to that size. The
`swirling` uses a default 48px × 48px SVG viewport. `accordion-loader`,
`conveyor-loop`, `infinity-square-snake`, `infinity-track`, `square-accordion`,
`square-grid`, `symmetric-wave`, and `square-snake` retain their original
geometry.
An explicit `size` scales the longest container side to that many CSS pixels.

## Python API

```python
from dash_startup_loading_plugin import (
    StartupLoadingConfig,
    setup,
    get_config,
    reset_config,
)
```

## Notes

- Dash's hook and plugin configuration is process-wide. Use one configuration
  per process.
- Readiness gates apply only to startup. Later callbacks do not recreate the overlay.
- The overlay markup and its small startup runtime are inlined, so strict Content
  Security Policy deployments must allow the injected style and script. The
  Loading UI renderer is served from a plugin route instead of being inlined.
- The overlay is only for initial application startup. Use `dcc.Loading` or
  another callback-specific pattern for later callback execution.

## License

This project is distributed under the MIT License.

MIT
