# dash-splash-plugin

[English](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.zh-CN.md)

一个基于 [Dash Hooks](https://dash.plotly.com/dash-plugins-using-hooks) 的首屏加载插件，为 Dash 应用提供可配置的全屏加载遮罩。
安装后自动启用默认 `loading-ui:fade-arc` 动画，也可从自动生成的 527 个动画与预设标识中选择，并统一设置颜色、尺寸和动画播放行为。Dash 原生组件与 Dash Ant Design 使用相同的配置方式。

## 安装

需要 **Python 3.9+** 和 **Dash >=4.5.0rc0**。

原生动画支持 **React 18.3.1 和 React 19**，复用宿主的 React/ReactDOM，
使用 Dash 默认运行时无需指定 React 版本。仅 `loading-dev` 库要求 React 19，
使用该库时通过 `REACT_VERSION=19.2.4 python app.py` 启动；不兼容的宿主
保留立即可见的 HTML/CSS 占位动画。插件不会下载另一份 React，也不会更改宿主的 React 版本。

```bash
pip install "dash-splash-plugin==0.1.0"
```

Dash 通过 `dash_hooks` entry point 自动发现插件，无需显式注册、复制 assets 或替换 `index_string`。
`antd` 四圆点动画作为独立资源包含在插件中，无需安装额外组件库。

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
from dash_splash_plugin import setup

setup(library="loading-ui", loader="ring", color="#1677ff", size=32, stroke=3, rate=1.0)

app = Dash(__name__)
app.layout = html.H1("我的仪表盘")

if __name__ == "__main__":
    app.run(debug=True)
```

默认 loader 为 `loading-ui:fade-arc`，也可通过 `setup(library="loading-ui", loader="fade-arc")` 显式选择；使用 `setup(library="antd", loader="antd")` 选择四圆点动画；
使用 `setup(library="loading-ui", loader="text-shimmer", text="正在准备仪表盘", font_size=20)` 显示文字动画；
使用 `setup(enabled=False)` 关闭插件。

### Dash Ant Design

Dash Ant Design 是可选依赖。运行 `pip install dash-ant-design` 安装后，在 Python 中使用模块名 `dash_antd_components` 构建布局即可。
启动遮罩会自动生效，仍通过同一个 `setup()` 配置。

## 运行交互演示

在本项目的源码目录中运行：

```bash
uv sync --group dev
uv run python usage.py
```

打开 [http://127.0.0.1:5001](http://127.0.0.1:5001)，先选择 **Library**，
再搜索并选择 **Animation**，按需预览 [Loading UI](https://loading-ui.com/)
和 dash-loading-components 的公开组件及预设。通过 **Preview color** 比较五种前景颜色。
下方的 Python 示例随选择更新，并提供语法高亮。

预览使用与页面一致的白色背景和固定的 `size=64`，复用父页面的 Dash React 实例，
并沿用配置中的 `rate` 和 `playing`。选择器只更新预览，不修改进程级配置。

## 配置项

`setup(**changes)` 更新进程级的不可变 `SplashConfig`。
同一 Python 进程中的应用共享配置，请每个进程使用一套设置。

库名和库内的动画名称分别传入，不向 `setup()` 传入组合的 `library:loader` 标识：

```python
setup(loader="fade-arc")  # 默认使用 loading-ui 库。
setup(library="flicker", loader="mail")
setup(library="spinners", loader="bar")  # 省略末尾的 -loader。
```

只传入 `loader` 时始终从 `loading-ui` 库选择；只传入 `library` 时选择该库首个注册的动画，
其中 `loading-ui` 固定选择 `fade-arc`。其他省略的配置保持不变。
切换库或动画会清除之前的 `loader_options`，除非在同一次调用中提供新的参数。

| 参数 | 默认值 | 说明 |
| --- | ---: | --- |
| `enabled` | `True` | 是否注入 startup overlay。 |
| `aria_label` | `"Loading"` | 无障碍状态标签。 |
| `z_index` | `9999` | 遮罩层级。 |
| `background` | `#f5f5f5` | 亮色模式下的遮罩背景。 |
| `dark_background` | `#000` | `html.dark` 下的遮罩背景。 |
| `color` | `"#1890ff"` | 明暗主题下的默认 loader 前景色；可设置 CSS 颜色覆盖。 |
| `dark_color` | `None` | 暗色覆盖，依次回退至 `color`、继承颜色。 |
| `text_color` | `None` | 可选文字颜色，依次回退至 `color`、继承颜色。 |
| `dark_text_color` | `None` | 依次回退至 `text_color`、`dark_color`、`color`、继承颜色。 |
| `library` | `"loading-ui"` | 动画库名称，例如 `"flicker"`。 |
| `loader` | `"fade-arc"` | 所选库中的 kebab-case 动画名称。 |
| `text` | `"Loading"` | `loading-ui:text*` loader 的文字。 |
| `size` | `None` | loader 默认保留原始尺寸（`antd` 为 20px，与 Ant Design Spin medium 一致）。可指定 CSS 像素尺寸覆盖，`0` 隐藏；文字 loader 使用 `font_size`。 |
| `stroke` | `None` | 保留原始边框和 SVG 描边。数字覆盖支持的描边宽度（CSS 像素）；圆点、文字和实心图形可能没有可调整描边。 |
| `rate` | `1.0` | 正数，相对动画速度；`2.0` 为两倍速度，`0.5` 为半速。 |
| `playing` | `True` | `False` 暂停 CSS 和 SVG 动画，仍显示 loader。 |
| `font_size` | `None` | `loading-ui:text*` loader 字号（CSS 像素），独立于容器尺寸。 |
| `custom_loader_html` | `None` | 替换当前 loader 的可信 HTML。 |
| `loader_options` | `None` | JSON 安全的原生封装参数；显式参数优先于通用设置。 |
`custom_loader_html` 会原样插入页面，只能传入可信 HTML。

### 尺寸与动画

图形 loader 按显式指定的最长容器边 `size` 适配，保持原始比例。
`size=None` 保留 loader 的原始几何；`size=0` 隐藏 loader。文字 loader 通过 `font_size` 设置字号。
`stroke=None` 保留原始边框与描边。

`rate` 必须是有限正数，使用 `playing=False` 暂停动画并保留显示。
`size`、`color`、`rate` 和 `playing` 的参数名称也便于与 `dash-loading-components` 共用配置。
插件在构建时复用该库锁定版本的 React 封装及原生速度映射，无需安装其 Python 包。
`loader_options` 使用对应封装的 snake_case 参数名。

```python
from dash_splash_plugin import list_libraries, list_loaders, setup

print(list_loaders("loading-dev"))
print(list_libraries())
setup(library="loading-dev", loader="arc", size=48, loader_options={"easing": "linear"})
setup(library="gridora", loader="orbit", size=48, loader_options={"grid_size": 5})
setup(library="flicker", loader="mycelium", size=48)
setup(library="loadersz", loader="heatmapping", size=96)
```

清单包含 47 个 Loading UI 组件、`antd`，以及 dash-loading-components 14 个家族的
全部公开封装与预设：loading-dev、ldrs、spinners、spinners-react、loader-spinner、premium、
indicators、m3、epic、flicker、gridora、loadersz、thinking-orbs 和 lab。
同一组件的预设共享分包。以 `list_loaders()` 和自动生成的 `LoaderName` 字面量为准。

库名和动画名统一使用 kebab-case，动画名省略末尾的 `-loader`，
例如 `setup(library="spinners", loader="bar")`。库与动画分别选择：
`setup(library="flicker", loader="mail")`。默认库为 `loading-ui`，
可直接使用 `setup(loader="fade-arc")`。通过 `list_libraries()` 获取库名，
通过 `list_loaders("flicker")` 获取该库的动画名称。
不指定库的 `list_loaders()` 返回用于清单查询的 `library:loader` 标识。
四圆点动画使用 `setup(library="antd", loader="antd")`。
Epic 动画名同样省略 `-spinner` 后缀，例如
`setup(library="epic", loader="atom")` 或 `loader="hollow-dots"`，不兼容带后缀的旧名称。

### 主题行为

插件跟随根节点的 `html.dark` class 和 `html[data-theme=dark]`，分别使用
`background` 和 `dark_background` 作为遮罩背景。根节点没有明确亮暗偏好时跟随 `prefers-color-scheme`。
所有 loader 在明暗主题下默认使用 `#1890ff` 蓝色。使用 `color` 与 `dark_color` 自定义颜色；文字 loader 共用这些颜色，也可单独指定文字颜色。
`antd` 与其他 loader 一样从独立的可缓存 JavaScript 资源加载。

应用应在 Dash 挂载前初始化根节点的 `dark`/`light` class，例如在 `index_string` 中加入脚本。
跟随系统主题时可使用 `prefers-color-scheme`。插件只跟随 class，主题偏好由应用负责。

### 配置校验

`setup()` 只接受上表中的当前参数。未知参数直接触发 `TypeError`，不会改变当前配置。
不提供别名、弃用警告或参数转换兼容层。

```python
setup(library="loading-ui", loader="ring", color="#1677ff", size=32, stroke=2)
setup(library="loading-ui", loader="text-shimmer", text="正在加载", font_size=20)
```

## 启动生命周期

插件在 React 挂载前注入遮罩，并观察 Dash 的 `#react-entry-point ._dash-loading` 元素。
该元素消失后遮罩即被移除。遮罩不会等待应用特定的后台任务，也不会在后续 callback 中重新出现。
后续回调的加载状态可使用 `dcc.Loading`。

遮罩严格跟随 Dash 初始布局的挂载状态，不因等待时间或脚本加载错误提前退出。
遮罩移除时会释放监听器。

第一阶段使用内联 HTML/CSS 占位，在 React 下载前即可显示。兼容的宿主 React 就绪后，
第二阶段将选中的原始 React 动画挂载到独立 root，并使用 Shadow DOM 隔离样式；
Motion 动画使用真实 Motion 运行时，不会替换 Dash 的主 root。导入或渲染失败时保留占位。
不强制延长遮罩显示时间。

仅请求所选模块、样式和共享依赖，资源采用内容哈希文件名与不可变缓存。
移除遮罩前卸载 React、断开监听并清理轮询；延迟导入不能重新挂载已经移除的遮罩。
尊重系统减少动态效果设置。严格的 Content Security Policy 需要允许内联启动脚本和样式，
以及同源 `_dash-splash-plugin/react/` 模块与样式资源。

## Python API

```python
from dash_splash_plugin import (
    SplashConfig,
    setup,
    get_config,
    list_loaders,
    list_libraries,
    reset_config,
)
```

`setup()` 返回更新后的配置，`get_config()` 读取当前配置，`reset_config()` 恢复默认值。

## 开发

```bash
uv sync --group test
uv run pytest -q
```

重新构建时运行 `npm ci` 和 `uv run python scripts/build_loaders.py`。
构建锁定上游提交，自动生成清单和 Python 字面量类型，并外置 React/ReactDOM。
构建基线为 React 18；私有 `scripts/react19` workspace 隔离 `loading-dev` 的
React 19 构建依赖。生成清单记录各动画的最低版本，导入前检查宿主兼容性。
可通过 `--upstream PATH --loading-ui PATH` 指定对应提交的本地源码。
运行 `npm run typecheck` 检查类型，`npm run test:browser` 验证浏览器行为；`ALL_LOADERS=1 npm run test:browser` 遍历全部标识。
设置 `REACT_VERSION=19.2.4` 再次运行，可验证 React 19 及 `loading-dev` 动画。
浏览器测试需先执行 `npx playwright install chromium`，并通过 `PYTHON` 指定安装了
Dash 4.5.0rc2 的解释器。wheel/sdist 用户无需 Node、npm 或上游源码。
开发版本固定为 Dash 4.5.0rc2，演示只使用 Dash 内置控件，无需额外安装 Python 组件库。

## License

MIT，详见 [LICENSE](LICENSE)。第三方许可证、上游 NOTICE 和来源提交随包存放于
`dash_splash_plugin/resources/licenses/`。M3 保留 Apache-2.0 声明；不包含上游排除的库或未开源画廊图案。
