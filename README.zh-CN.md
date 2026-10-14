# dash-startup-loading-plugin

[English](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-startup-loading-plugin/blob/master/README.zh-CN.md)

一个基于 [Dash Hooks](https://dash.plotly.com/dash-plugins-using-hooks) 的首屏加载插件，为 Dash 应用提供可配置的全屏加载遮罩。
安装后自动启用默认动画，也可从 48 种 loader 中选择，并统一设置颜色、尺寸和动画播放行为。Dash 原生组件与 Dash Ant Design 使用相同的配置方式。

![usage.py 中全部 48 种 loader 的动态预览](https://raw.githubusercontent.com/C0deBeez/dash-startup-loading-plugin/a2bc500ddbcb2f1c3d6d9f1132a93e115ddd4520/docs/assets/loader-preview.gif)

*录制自项目的 `usage.py` 演示页面。演示中持续显示动画以便比较；实际应用的启动遮罩会自动关闭。*

## 安装

需要 **Python 3.9+** 和 **Dash 3.0.3+**。

```bash
pip install "dash-startup-loading-plugin>=3.0.0"
```

Dash 通过 `dash_hooks` entry point 自动发现插件，无需显式注册、复制 assets 或替换 `index_string`。
默认的 Ant Design 四圆点动画已包含在插件中，无需安装额外组件库。

## 快速开始

安装插件后，普通 Dash 应用即可自动显示启动遮罩：

```python
from dash import Dash, html

app = Dash(__name__)
app.layout = html.Main([
    html.H1("我的 Dash 应用"),
    html.P("初始布局挂载完成后，启动遮罩会自动关闭。"),
])

if __name__ == "__main__":
    app.run(debug=True)
```

如需自定义，请在创建应用前调用 `setup()`：

```python
from dash import Dash, html
from dash_startup_loading_plugin import setup

setup(loader="ring", color="#1677ff", size=32, stroke=3, rate=1.0)

app = Dash(__name__)
app.layout = html.H1("我的仪表盘")

if __name__ == "__main__":
    app.run(debug=True)
```

使用 `setup(loader="default")` 选择默认四圆点动画；
使用 `setup(loader="text-shimmer", text="正在准备仪表盘", font_size=20)` 显示文字动画；
使用 `setup(enabled=False)` 关闭插件。

### Dash Ant Design

Dash Ant Design 是可选依赖。运行 `pip install dash-ant-design` 安装后，在 Python 中使用模块名 `dash_antd_components` 构建布局即可。
启动遮罩会自动生效，仍通过同一个 `setup()` 配置。

## 运行交互演示

在本项目的源码目录中运行：

```bash
uv sync
uv run python usage.py
```

打开 [http://127.0.0.1:5000](http://127.0.0.1:5000)，即可查看全部 48 种动画：默认四圆点与 47 种内置 [Loading UI](https://loading-ui.com/) loader。
通过 **Preview color** 下拉菜单比较六种前景颜色；每张卡片的标题就是 `setup(loader=...)` 接受的名称。

所有预览共用 `usage.py` 顶部 `setup()` 中的 `size`、`rate` 和 `playing` 设置。
修改这些参数并重启演示即可比较效果。颜色下拉菜单只改变演示卡片的颜色。

## 配置项

`setup(**changes)` 更新进程级的不可变 `StartupLoadingConfig`。
同一 Python 进程中的应用共享配置，请每个进程使用一套设置。

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
`custom_loader_html` 会原样插入页面，只能传入可信 HTML。

### 尺寸与动画

图形 loader 按最长容器边适配 `size`，保持原始比例。
`size=None` 保留原始几何，`size=0` 隐藏 loader；文字 loader 通过 `font_size` 设置字号。
`stroke=None` 保留原始边框与描边。

`rate` 必须是有限正数，使用 `playing=False` 暂停动画并保留显示。
`size`、`color`、`rate` 和 `playing` 的参数名称也便于与 `dash-loading-components` 共用配置。
该库是可选依赖，两者的动画样式与默认尺寸可能不同。

### 主题行为

插件跟随根节点的 `html.dark` class，分别使用 `background` 和 `dark_background` 作为遮罩背景。
默认继承的前景色为亮色模式的 `rgba(0,0,0,.88)` 和暗色模式的 `rgba(255,255,255,.85)`。
使用 `color` 与 `dark_color` 自定义颜色；文字 loader 共用这些颜色，也可单独指定文字颜色。

应用应在 Dash 挂载前初始化根节点的 `dark`/`light` class，例如在 `index_string` 中加入脚本。
跟随系统主题时可使用 `prefers-color-scheme`。插件只跟随 class，主题偏好由应用负责。

### 配置名称迁移

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

## 启动生命周期

插件在 React 挂载前注入遮罩，并观察 Dash 的 `#react-entry-point ._dash-loading` 元素。
该元素消失后遮罩即被移除。遮罩不会等待应用特定的后台任务，也不会在后续 callback 中重新出现。
后续回调的加载状态可使用 `dcc.Loading`。

默认动画使用内联 HTML 与 CSS；其他 loader 各自打包为可缓存的 JavaScript，仅加载当前选中的动画。
隔离渲染器使用原生 DOM、CSS 和 SVG 动画，不携带 React、React DOM 或 Motion。
严格的 Content Security Policy 配置需要允许注入的启动脚本、样式以及所选 loader 的资源路由。

## Python API

```python
from dash_startup_loading_plugin import (
    StartupLoadingConfig,
    setup,
    get_config,
    reset_config,
)
```

`setup()` 返回更新后的配置，`get_config()` 读取当前配置，`reset_config()` 恢复默认值。

## 开发

```bash
uv sync --group test
uv run pytest -q
```

如需重新构建 Loading UI 资源，运行 `uv run python scripts/build_loading_ui.py`，环境需提供 Node.js 与 npm。

## License

MIT，详见 [LICENSE](LICENSE)。
