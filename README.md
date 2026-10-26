# dash-splash-plugin

[English](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.zh-CN.md)

A configurable full-screen startup loading overlay for Dash, packaged as a
[Dash Hooks plugin](https://dash.plotly.com/dash-plugins-using-hooks).
Install it to enable the default `loading-ui:fade-arc` loader automatically, or choose from 530 generated loader
identifiers and presets with shared color, size and playback controls. Native Dash and Dash Ant
Design applications use the same configuration.

## Installation

Requires **Python 3.9+** and **Dash >=4.5.0rc0**.

Host applications can use **React 18.3.1 or React 19**. The plugin bundles a
private React 19 runtime for native animations and never reads or replaces the
host's React/ReactDOM. Animations start before Dash's React finishes loading;
even `loading-dev` does not require changing the application's React version.

Until the first PyPI release, install from a checkout of this repository:

```bash
pip install -e .
```

Once published, install the pinned release with:

```bash
pip install "dash-splash-plugin==0.1.0"
```

Dash discovers the plugin through its `dash_hooks` entry point. No explicit
registration, asset copying or `index_string` replacement is needed to enable
the overlay. Native Ant Design loaders are bundled as separate resources, with no
additional Python component-library dependency.

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
from dash_splash_plugin import setup

setup(loader="loading-ui:ring", color="#1677ff", size=32, stroke=3, rate=1.0)

app = Dash(__name__)
app.layout = html.H1("My dashboard")

if __name__ == "__main__":
    app.run(debug=True)
```

The default loader is `loading-ui:fade-arc`; select it explicitly with `setup(loader="loading-ui:fade-arc")`. Use `setup(loader="antd:spin")` to select the four-dot spinner,
`setup(loader="loading-ui:text-shimmer", text="Preparing dashboard", font_size=20)` for a
text animation, or `setup(enabled=False)` to disable the plugin.

### Dash Ant Design

Dash Ant Design is optional. Install it with `pip install dash-ant-design`, then
use the Python module `dash_antd_components` in your layout. The overlay works
with these components automatically; configure it with the same `setup()` call.

## Run the interactive demo

From a checkout of this repository:

```bash
uv sync --group dev
uv run python usage.py
```

Open [http://127.0.0.1:5001](http://127.0.0.1:5001). Select **Library**, then search
**Animation** to preview [Loading UI](https://loading-ui.com/) or a public component
or preset from dash-loading-components. Use **Preview color** to compare five
foreground colors. The Python example below updates with syntax highlighting.

Previews use a white background matching the page and an explicit `size=64`.
They use the isolated animation runtime and the configured `rate` and `playing`
settings. The selectors update only the preview, not the process-wide configuration.

## Configuration

`setup(**changes)` updates an immutable, process-wide `SplashConfig`.
Use one configuration per Python process; apps in the same process share it.

Select an animation with a single qualified `library:name` identifier:

```python
setup()  # Initially uses loading-ui:fade-arc.
setup(loader="loading-ui:fade-arc")
setup(loader="flicker:mail")
setup(loader="spinners:bar")  # No trailing -loader.
```

`loader` always includes its namespace; short names and a separate `library`
argument are not accepted. Omitted settings retain their values. Switching the loader
clears previous `loader_options` unless new options are supplied in the same call.
Unknown identifiers raise `ValueError` with nearby suggestions and leave the
current configuration unchanged. The generated `LoaderId` literal provides IDE completion:

```python
from dash_splash_plugin import LoaderId, setup

loader: LoaderId = "flicker:helix"
setup(loader=loader)
```

Calling `setup()` without changes does not reset an existing configuration.
Use `reset_config()` to restore the defaults. `get_config().loader` always holds
the complete identifier; there is no separate `library` configuration field.

| Option | Default | Description |
| --- | ---: | --- |
| `enabled` | `True` | Enable index injection. |
| `aria_label` | `"Loading"` | Accessible status label. |
| `z_index` | `9999` | Overlay stacking order. |
| `background` | `#f5f5f5` | Overlay background in light mode. |
| `dark_background` | `#000` | Overlay background when `html.dark` is set. |
| `color` | `"#1890ff"` | Default loader foreground in both themes; set a CSS color to override it. |
| `dark_color` | `None` | Dark-mode override; falls back to `color`, then inherited foreground. |
| `text_color` | `None` | Optional text color; falls back to `color`, then inherited foreground. |
| `dark_text_color` | `None` | Falls back to `text_color`, `dark_color`, `color`, then inherited foreground. |
| `loader` | `"loading-ui:fade-arc"` | Qualified animation identifier, for example `"flicker:helix"`. |
| `text` | `"Loading"` | Text rendered by `loading-ui:text*` Loading UI loaders. |
| `size` | `None` | Loaders retain their native geometry (`antd:spin`: 20px, matching Ant Design Spin medium) unless `size` is specified. Set a CSS pixel size to override; `0` hides the loader. Text loaders use `font_size`. |
| `stroke` | `None` | Preserve original borders and SVG strokes. A number overrides supported borders and strokes in CSS pixels; dot, text and filled-shape loaders may have no adjustable stroke. |
| `rate` | `1.0` | Positive relative animation tempo. `2.0` is twice as fast; `0.5` is half speed. |
| `playing` | `True` | `False` pauses CSS and SVG animations without hiding the loader. |
| `font_size` | `None` | Font size in CSS pixels for `loading-ui:text*` loaders; independent of container sizing. |
| `custom_loader_html` | `None` | Trusted HTML replacing the selected loader. |
| `loader_options` | `None` | JSON-safe native wrapper options; explicit options override common settings. |

`custom_loader_html` is inserted verbatim and must only contain trusted HTML.

### Size and animation

Graphical loaders fit their container's longest side to an explicit `size`, preserving their
aspect ratio. `size=None` retains each loader's original geometry; `size=0` hides the
loader. Text loaders retain their original font size unless `font_size` is set.
`stroke=None` preserves the artwork's original borders and strokes.

`rate` must be a finite positive number. Use `playing=False` to pause animations
while keeping the loader visible. The `size`, `color`, `rate` and `playing`
parameter names match `dash-loading-components`. Its pinned React wrappers,
including their native speed mappings, are reused at build time. Installing its
Python package is not necessary. Native options use its snake_case names.

```python
from dash_splash_plugin import list_libraries, list_loaders, setup

print(list_loaders("loading-dev"))
print(list_libraries())
setup(loader="loading-dev:arc", size=48, loader_options={"easing": "linear"})
setup(loader="gridora:orbit", size=48, loader_options={"grid_size": 5})
setup(loader="flicker:mycelium", size=48)
setup(loader="loadersz:heatmapping", size=96)
```

The generated registry covers 47 Loading UI components, four `antd` loaders, and all public
wrappers/presets from 14 dash-loading-components families: loading-dev, ldrs,
spinners, spinners-react, loader-spinner, premium, indicators, m3, epic, flicker,
gridora, loadersz, thinking-orbs and lab. Presets share their component chunk.
`list_loaders()` and the generated `LoaderId` literal are the source of truth.

Library and loader names use kebab-case. Trailing `-loader` is omitted:
for example, use `setup(loader="spinners:bar")` or `setup(loader="flicker:mail")`.
`list_libraries()` lists available namespaces. `list_loaders()` returns qualified
identifiers; `list_loaders("flicker")` filters them without stripping the namespace.
Every returned identifier can be passed directly to `setup(loader=...)`.
Select the four-dot spinner with `setup(loader="antd:spin")`.
The `antd` library provides these native React presets:

| Loader | Component |
| --- | --- |
| `antd:spin` | Default Spin four-dot indicator. |
| `antd:loading` | Spin with the rotating LoadingOutlined icon. |
| `antd:progress` | Active Progress bar, 160px wide, with a fixed 70% animated track. This is a loading illustration, not measured startup progress. |
| `antd:skeleton` | Active Skeleton with a title and two paragraph rows, 160px wide. |

Choose, for example, `setup(loader="antd:skeleton")`. All four are
pre-rendered from the native React components at build time into HTML and CSS.
They animate immediately without loading React or a component module at runtime,
follow the splash color, and support `size`, `rate`, `playing`, and reduced motion.
Styles are scoped to each loader's shadow root.
Epic names also omit `-spinner`: use `setup(loader="epic:atom")`
or `loader="epic:hollow-dots"`. Suffixed Epic names are not accepted.
All eight Epic presets, 64 Flicker presets (including `helix`), and the
`spinners`/`spinners-react` libraries also use build-time HTML/CSS and animate
without downloading a React runtime. The generated registry determines first-paint support.
When `loader_options` is supplied, the pre-rendered preview appears immediately,
then the native component mounts with the private runtime to apply those advanced options.

### Theme behavior

The plugin follows `html.dark` and `html[data-theme=dark]`, using `background` and
`dark_background` for the overlay. Without an explicit light/dark root preference,
it follows `prefers-color-scheme`. Set
`color` and `dark_color` for custom colors; text loaders use the same color
unless a text-specific override is supplied. All loaders use `#1890ff` blue
in both themes by default. Pre-rendered markup and styles are embedded in the initial
response; other libraries immediately load their native components from cacheable
modules without waiting for the host React.

Initialize the application's root `dark`/`light` class before Dash mounts,
for example with a script in `index_string`. Applications following the system
theme can use `prefers-color-scheme`. The plugin follows the class and leaves
theme preferences to the application.

### Configuration validation

`setup()` accepts only the current configuration fields listed above. Unknown
options raise `TypeError` without changing the active configuration. No aliases
or deprecated parameter conversions are provided.

```python
setup(loader="loading-ui:ring", color="#1677ff", size=32, stroke=2)
setup(loader="loading-ui:text-shimmer", text="Loading", font_size=20)
```

## Startup lifecycle

The overlay is injected before React mounts and observes Dash's
`#react-entry-point ._dash-loading` element. When that element disappears, the
overlay is removed. It does not wait for application-specific background work
or reappear during later callbacks. Use `dcc.Loading` for callback loading states.

The overlay strictly follows Dash's initial layout mounting. Elapsed time and
script loading errors do not dismiss it. Its observer is released when the
overlay is removed.

### First-paint rendering

With default native options, 97 loaders render directly from HTML/CSS embedded
in the response, without downloading animation modules or React:

| Namespace | Pre-rendered identifiers |
| --- | ---: |
| `antd` | 4 |
| `epic` | 8 |
| `flicker` | 64 |
| `spinners` | 12 |
| `spinners-react` | 9 |

Pre-rendered loaders display their build-time HTML/CSS immediately and do not mount
a React tree or request animation modules with default options. Other libraries use an inline HTML/CSS
fallback only while their selected module loads. Their original React animation mounts immediately
in an independent root with Shadow DOM style isolation. Motion components use the
real Motion runtime. The main Dash root is never replaced. A failed import or
render keeps the fallback. There is no forced minimum display time.

Only the selected module, its stylesheet and shared dependencies are requested.
Assets have content-hashed names and immutable caching. Removing the overlay first
unmounts its React tree and disconnects observers. Delayed imports
cannot remount a dismissed overlay. Reduced-motion preferences pause animations.
Strict Content Security Policy must allow the inline startup script/style and
same-origin module/style resources under `_dash-splash-plugin/react/`.

### Troubleshooting

- After rebuilding or upgrading the plugin, restart the Dash process. A running
  process caches the resource manifest; old hashed asset URLs may no longer exist.
- For non-pre-rendered loaders, a brief generic spinner while the selected module
  downloads is expected. It does not wait for Dash's React. A persistent fallback
  indicates an asset or rendering failure; inspect browser errors and requests
  under `_dash-splash-plugin/react/`.
- Invalid loader identifiers fail during `setup()` instead of silently selecting
  another animation. Use `list_loaders()` to inspect supported identifiers.

## Python API

```python
from dash_splash_plugin import (
    LoaderId,
    LoaderLibrary,
    SplashConfig,
    setup,
    get_config,
    list_loaders,
    list_libraries,
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

To rebuild, run `npm ci` then `uv run python scripts/build_loaders.py`.
Frontend rebuilding requires a Git checkout. Python wheels and source
distributions include the Python runtime, prebuilt assets, typing files and
licenses, but exclude `scripts/`, npm configuration, tests and demo files.
The build fetches exact upstream commits, generates the registry and Python
literal, and bundles native React modules with one shared, private React 19 runtime.
The `scripts/react19` workspace isolates these browser runtime dependencies from
the React 18 server-rendering/type baseline. The manifest records upstream React
requirements; the bundled runtime satisfies them without changing the host.
`--upstream PATH --loading-ui PATH` accepts existing checkouts at those commits.
Run `npm run typecheck` and `npm run test:browser`; use `ALL_LOADERS=1 npm run test:browser` for all 530 choices.
Repeat with `REACT_VERSION=19.2.4` to verify isolation from a React 19 host.
Use `ALL_LOADERS=1 NO_HOST_REACT=1 npm run test:browser` to block the host React
scripts and check that all animations still render.
The browser tests need Playwright Chromium (`npx playwright install chromium`)
and a Python interpreter with Dash 4.5.0rc2 (set `PYTHON` to its executable).
Node, npm and the source checkouts are not required by wheel/sdist users.
Development uses Dash 4.5.0rc2. The gallery uses only Dash's built-in controls;
no additional Python component library is needed.

## License

MIT. See [LICENSE](LICENSE). Bundled third-party licenses, upstream NOTICE and
source revisions ship in `dash_splash_plugin/resources/licenses/`. The M3 library
retains Apache-2.0 attribution. Excluded upstream libraries and non-open gallery
patterns are not imported.
