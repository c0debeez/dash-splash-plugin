# dash-startup-loading-plugin

[English](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.zh-CN.md)

一个基于 [Dash Hooks 插件规范](https://dash.plotly.com/dash-plugins-using-hooks) 的可安装插件，用于替换 Dash 初始 loading 遮罩。

## 环境要求

- Python 3.9 或更高版本
- Dash 3.0.3 或更高版本

## 安装

```bash
pip install "dash-startup-loading-plugin>=2.0.1"
```

Dash 会通过 `dash_hooks` entry point 自动发现插件，安装后默认 loading 遮罩会自动启用。

## 使用示例

### Dash 原生组件

插件会自动发现，无需额外注册：

```python
from dash import Dash, html

app = Dash(__name__)
app.layout = html.Main(
    [
        html.H1("我的 Dash 应用"),
        html.P("页面布局加载完成后，启动遮罩会自动关闭。"),
    ]
)

if __name__ == "__main__":
    app.run(debug=True)
```

### dash-antd-components

安装 PyPI 包 `dash-ant-design` 后，Python 中使用模块名
`dash_antd_components`：

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
        dac.Title("我的 Dash Ant Design 应用", level=2),
        dac.Button("继续", type="primary"),
        dac.Input(placeholder="搜索"),
    ],
    orientation="vertical",
    size="middle",
)

if __name__ == "__main__":
    app.run(debug=True)
```

所有应用的 `loader="default"` 都使用 Ant Design 四圆点 spinner。
如需 Loading UI 的 ring，可调用 `setup(loader="ring")`。

## 主题初始化

主题由应用负责。请在 `index_string` 中于 Dash 挂载前设置根节点的 `dark`/`light` class，并可使用 `prefers-color-scheme` 读取系统偏好。插件样式会跟随 `html.dark`，避免插件接管应用主题和异步 callback。

## Dash Ant Design

Dash Ant Design 是可选依赖。默认的 Ant Design 四圆点 loader 已包含在插件中，
无需安装 Dash Ant Design 即可使用。可通过 loader 和颜色参数自定义外观。

```bash
pip install dash-ant-design
```

```bash
uv add dash-ant-design
```

```python
from dash_startup_loading_plugin import setup

setup(loader="default", color="#1677ff")
```

也可以仅显式选择 Ant Design loader：

```python
setup(loader="default")
```

## 配置项

| 参数 | 默认值 | 说明 |
| --- | ---: | --- |
| `enabled` | `True` | 是否注入 startup overlay。 |
| `aria_label` | `"Loading"` | 无障碍状态标签。 |
| `z_index` | `9999` | 遮罩层级。 |
| `background` | `#f5f5f5` | 亮色模式下的遮罩背景。 |
| `dark_background` | `#000` | `html.dark` 下的遮罩背景。 |
| `color` | `"currentColor"` | 继承遮罩前景色；显式 CSS 颜色覆盖默认值。 |
| `dark_color` | `None` | 暗色覆盖，依次回退至 `color`、继承颜色。 |
| `text_color` | `None` | 可选文字颜色，依次回退至 `color`、继承颜色。 |
| `dark_text_color` | `None` | 依次回退至 `text_color`、`dark_color`、`color`、继承颜色。 |
| `loader` | `"default"` | Ant Design 四圆点 spinner；可选 `"ring"` 使用 Loading UI ring。 |
| `text` | `"Loading"` | `text-*` loader 的文字。 |
| `size` | `32` | 图形 loader 容器最长边的 CSS 像素值，保持比例；文字 loader 使用 `font_size`。`None` 保留原始几何，`0` 隐藏。可见图形不保证填满容器。 |
| `stroke` | `None` | 保留原始边框和 SVG 描边。数字覆盖支持的描边宽度（CSS 像素）；圆点、文字和实心图形可能没有可调整描边。 |
| `rate` | `1.0` | 正数，相对动画速度；`2.0` 为两倍速度，`0.5` 为半速。 |
| `playing` | `True` | `False` 暂停 CSS 和 SVG 动画，仍显示 loader。 |
| `font_size` | `None` | `text-*` loader 字号（CSS 像素），独立于容器尺寸。 |
| `custom_loader_html` | `None` | 替换 loader 的可信 HTML。 |

`custom_loader_html` 会原样插入页面，禁止传入不可信用户输入。

Loading UI 保留 `currentColor` 默认机制。遮罩提供亮色 `rgba(0,0,0,.88)`、
暗色 `rgba(255,255,255,.85)` 的前景色兜底。未指定文字颜色时，文字也使用
`color`。遮罩显示期间切换 `html.dark`，shimmer-wave 动画颜色会同步更新。
`text-*` loader 保留原始 1.25rem 字号，宽度随内容变化。使用 `font_size` 调整字号；
`size` 不缩放文字 loader（`size=0` 仍会隐藏 loader）。

`setup()` 保留一个版本的弃用别名：`loader_color` → `color`、
`loader_dark_color` → `dark_color`、`loader_text_color` → `text_color`、
`loader_dark_text_color` → `dark_text_color`、`loader_size` → `size`、
`loader_stroke_width` → `stroke`、`loader_text` → `text`、`thickness` → `stroke`。
旧名称触发 `DeprecationWarning`，同时传入新旧名称触发 `TypeError`。
配置对象使用新字段名。显式 `size` 表示实际容器尺寸，不再表示相对 32px 的缩放基准。

```python
setup(loader="ring", color="#1677ff", size=32, stroke=2)
setup(loader="text-shimmer", text="正在加载", font_size=20)
```

公共参数 `size/color/rate/playing` 与 dash-loading-components（DLC）对齐。
32px 是插件统一采用的默认值，并非 DLC 所有组件的上游默认值；两阶段应显式
共用配置以避免默认值差异。`stroke` 对应 DLC 的 `ldrs.Ring` 描边参数，但并非
所有 DLC 组件都支持。此阶段仍使用现有 Loading UI 动画和最长边尺寸语义，
参数一致不代表动画完全相同；插件不强制依赖 DLC。

```python
SPINNER = dict(size=32, color="#1677ff", rate=1.0, playing=True)
setup(loader="ring", stroke=3, **SPINNER)

# 安装 DLC 后，可在应用中使用：
# dcc.Loading(children=content,
#     custom_spinner=dlc.ldrs.Ring(stroke=3, **SPINNER))
```

遮罩背景根据应用的 `html.dark` class 选择 `background` 或 `dark_background`，默认值分别为 `#f5f5f5` 和 `#000`。插件不会读取 `--layout-bg` 或 ConfigProvider token。

## Loading UI

默认的 `default` loader 使用内联 HTML 和 CSS。Loading UI loader 会按需加载隔离 renderer。每个 loader 单独打包，页面只引用当前选中的那个（`<requests_pathname_prefix>_dash-startup-loading/<loader>.js`），因此 HTML 体积不受 loader 选择影响，且 renderer 可被浏览器长期缓存，不拖慢首屏。可用 `text`、颜色参数和尺寸参数自定义 loader：

资源基于固定版本的 Loading UI 源码生成，使用轻量 DOM 渲染器一次性挂载。
每个包只包含自身所需的样式与动画，不再携带 React、React DOM、Motion 或完整
Tailwind 样式表；Motion 循环动画转换为原生 CSS 关键帧或 SVG 路径动画。
执行 `python scripts/build_loading_ui.py` 可重新构建（需要 Node.js 和 npm）。
此渲染器专用于固定版本的 loader 集合，不用于渲染任意 React 组件。

```python
setup(loader="text-shimmer", text="正在准备仪表盘", color="#1677ff")
```

## Loader 预览

以下原始几何适用于 `size=None`：除特殊项外，loader 为 2rem × 2rem；默认 Ant Design spinner 与 AntD Spin middle 一致，为 20px × 20px；
`infinity` 和 `morphing-infinity` 为 3rem × 3rem。
四种 `text-*` loader 保留原字号；`wave` 为宽 3rem、高 2rem；
`triple-dot-spinner` 和 `twin-orbit` 的圆点为 0.6rem，动画容器预留 4.25 倍圆点尺寸；
显式 `size` 缩放整组动画（包括轨道圆点），而不是放大单个圆点。`swirling` 默认 SVG 视口为
48px × 48px。`accordion-loader`、`conveyor-loop`、`infinity-square-snake`、
`infinity-track`、`square-accordion`、`square-grid`、`symmetric-wave`、
`square-snake` 保留原有几何设置。
显式 `size` 将容器最长边等比例缩放到指定 CSS 像素值。

所有组件库使用相同的默认 loader：

| 应用 | 默认 loader | 说明 |
| --- | --- | --- |
| Dash 原生组件 | `default` | Ant Design 四圆点 spinner。 |
| `dash-antd-components` | `default` | Ant Design 四圆点 spinner。 |
| 显式调用 `setup(loader=...)` 的应用 | 选定的 loader | 显式配置始终优先。 |

所有 Loading UI loader 都单独打包，只在被选中时加载。下面的预览图链接到官方
交互式演示页面，点击图片即可查看动态效果和源码。`text-*` loader 支持通过
`text` 自定义文字；`color`、`dark_color`、`size` 和
`stroke` 会在对应 loader 支持时生效。

| 预览 | 预览 | 预览 |
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

## 关闭时机

插件只观察 Dash 的 `#react-entry-point ._dash-loading` 生命周期：Dash 内置 loading 消失后移除 startup overlay。页面主题和应用特定的异步布局等待由应用自身处理。

## Python API

```python
from dash_startup_loading_plugin import (
    StartupLoadingConfig,
    setup,
    get_config,
    reset_config,
)
```

## License

本项目采用 MIT License。
