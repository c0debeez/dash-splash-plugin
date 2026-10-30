# dash-splash-plugin

[English](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.md) |
[简体中文](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.zh-CN.md)

一个基于 [Dash Hooks](https://dash.plotly.com/dash-plugins-using-hooks) 的首屏加载插件，为 Dash 应用提供可配置的全屏加载遮罩。
安装后自动启用默认 `loading-ui:fade-arc` 动画，也可从自动生成的 530 个动画与预设标识中选择，并统一设置颜色、尺寸和动画播放行为。Dash 原生组件与 Dash Ant Design 使用相同的配置方式。

## 安装

需要 **Python 3.9+** 和 **Dash >=4.5.0**。

构建、服务端预渲染、类型、演示和默认浏览器测试统一使用 **React 19.2.4**。
原生动画仍使用私有 React 19 运行时，不读取或替换宿主 React/ReactDOM，可在 Dash 加载前启动。

Dash 4.5.0 支持显式启用 React 19，默认仍为 React 18.3.1。
应用可在启动 Python 前设置：

```bash
REACT_VERSION=19.2.4 python app.py
```

内置 `usage.py` 演示默认启用 React 19.2.4。已有 React 18 宿主仍与插件运行时隔离。

首次发布 PyPI 前，请在本仓库的源码目录中安装：

```bash
pip install -e .
```

发布后可使用固定版本安装：

```bash
pip install "dash-splash-plugin==0.1.0"
```

Dash 通过 `dash_hooks` entry point 自动发现插件，无需显式注册、复制 assets 或替换 `index_string`。
原生 Ant Design 动画作为独立资源包含在插件中，无需安装额外的 Python 组件库。

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

setup(loader="loading-ui:ring", color="#1677ff", size=32, stroke=3, rate=1.0)

app = Dash(__name__)
app.layout = html.H1("我的仪表盘")

if __name__ == "__main__":
    app.run(debug=True)
```

默认 loader 为 `loading-ui:fade-arc`，也可通过 `setup(loader="loading-ui:fade-arc")` 显式选择；使用 `setup(loader="antd:spin")` 选择四圆点动画；
使用 `setup(loader="loading-ui:text-shimmer", text="正在准备仪表盘", font_size=20)` 显示文字动画；
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

预览使用与页面一致的白色背景和固定的 `size=64`，使用独立动画运行时，
并沿用配置中的 `rate` 和 `playing`。选择器只更新预览，不修改进程级配置。

## 配置项

`setup(**changes)` 更新进程级的不可变 `SplashConfig`。
同一 Python 进程中的应用共享配置，请每个进程使用一套设置。

通过一个完整的 `library:name` 标识选择动画：

```python
setup()  # 首次使用时默认为 loading-ui:fade-arc。
setup(loader="loading-ui:fade-arc")
setup(loader="flicker:mail")
setup(loader="spinners:bar")  # 省略末尾的 -loader。
```

`loader` 必须包含命名空间，不接受短名称或独立的 `library` 参数。省略的配置保持不变。
切换动画会清除之前的 `loader_options`，除非在同一次调用中提供新的参数。
无效标识会抛出 `ValueError` 并提示相近名称，原配置保持不变，不会自动猜测库或回退。
自动生成的 `LoaderId` 字面量类型支持 IDE 补全和类型检查：

```python
from dash_splash_plugin import LoaderId, setup

loader: LoaderId = "flicker:helix"
setup(loader=loader)
```

不带参数调用 `setup()` 不会重置已有配置，恢复默认值请使用 `reset_config()`。
`get_config().loader` 始终保存完整标识，配置中没有独立的 `library` 字段。

| 参数 | 默认值 | 说明 |
| --- | ---: | --- |
| `enabled` | `True` | 是否注入 startup overlay。 |
| `theme` | `"auto"` | 遮罩主题策略：`"light"`、`"dark"`、`"auto"` 或 `"system"`。 |
| `aria_label` | `"Loading"` | 无障碍状态标签。 |
| `z_index` | `9999` | 遮罩层级。 |
| `background` | `#f5f5f5` | 亮色模式下的遮罩背景。 |
| `dark_background` | `#000` | 遮罩解析为暗色模式时的背景。 |
| `color` | `"#1890ff"` | 明暗主题下的默认 loader 前景色；可设置 CSS 颜色覆盖。 |
| `dark_color` | `None` | 暗色覆盖，依次回退至 `color`、继承颜色。 |
| `text_color` | `None` | 可选文字颜色，依次回退至 `color`、继承颜色。 |
| `dark_text_color` | `None` | 依次回退至 `text_color`、`dark_color`、`color`、继承颜色。 |
| `loader` | `"loading-ui:fade-arc"` | 完整的动画标识，例如 `"flicker:helix"`。 |
| `text` | `"Loading"` | `loading-ui:text*` loader 的文字。 |
| `size` | `None` | loader 默认保留原始尺寸（`antd:spin` 为 20px，与 Ant Design Spin medium 一致）。可指定 CSS 像素尺寸覆盖，`0` 隐藏；文字 loader 使用 `font_size`。 |
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
setup(loader="loading-dev:arc", size=48, loader_options={"easing": "linear"})
setup(loader="gridora:orbit", size=48, loader_options={"grid_size": 5})
setup(loader="flicker:mycelium", size=48)
setup(loader="loadersz:heatmapping", size=96)
```

清单包含 47 个 Loading UI 组件、4 个 `antd` 动画，以及 dash-loading-components 14 个家族的
全部公开封装与预设：loading-dev、ldrs、spinners、spinners-react、loader-spinner、premium、
indicators、m3、epic、flicker、gridora、loadersz、thinking-orbs 和 lab。
同一组件的预设共享分包。以 `list_loaders()` 和自动生成的 `LoaderId` 字面量为准。

库名和动画名统一使用 kebab-case，动画名省略末尾的 `-loader`，
例如 `setup(loader="spinners:bar")` 或 `setup(loader="flicker:mail")`。
通过 `list_libraries()` 获取命名空间，`list_loaders()` 获取完整标识。
`list_loaders("flicker")` 按库筛选，但保留命名空间；每个返回值都能直接传给 `setup(loader=...)`。
四圆点动画使用 `setup(loader="antd:spin")`。
`antd` 库提供以下原生 React 预设：

| 动画 | 组件 |
| --- | --- |
| `antd:spin` | 默认 Spin 四圆点动画。 |
| `antd:loading` | 使用旋转 LoadingOutlined 图标的 Spin。 |
| `antd:progress` | 宽 160px 的 active Progress 进度条，固定 70% 的轨道循环播放动画，不代表实际启动进度。 |
| `antd:skeleton` | 宽 160px 的 active Skeleton，包含标题和两行段落。 |

例如使用 `setup(loader="antd:skeleton")`。四种动画在构建时从原生 React 组件
预渲染为 HTML 和 CSS，运行时无需加载 React 或组件分包即可立即播放。
动画跟随 splash 颜色，支持 `size`、`rate`、`playing` 和减少动态效果设置，
样式隔离在各自的 Shadow DOM 中。
Epic 动画名同样省略 `-spinner` 后缀，例如
`setup(loader="epic:atom")` 或 `loader="epic:hollow-dots"`，不兼容带后缀的旧名称。
Epic 的八种动画、Flicker 的 64 个预设（包含 `helix`）以及 `spinners`、`spinners-react`
均预渲染为 HTML/CSS，无需下载 React 运行时即可播放，首屏支持范围由生成清单决定。
指定 `loader_options` 时，先立即显示预渲染动画，再用私有运行时挂载原生组件以应用高级选项。

### 主题行为

使用 `theme` 明确指定遮罩的主题策略，颜色值单独配置：

| `theme` | 行为 |
| --- | --- |
| `"auto"`（默认） | 跟随应用根节点的主题标记；没有标记时使用亮色，忽略系统偏好。 |
| `"light"` | 固定亮色，忽略根节点标记和系统偏好。 |
| `"dark"` | 固定暗色。 |
| `"system"` | 跟随 `prefers-color-scheme`，忽略根节点标记。 |

`"auto"` 优先读取有效的 `html[data-theme="light"]` 或 `html[data-theme="dark"]`，
其次读取 `html.dark` / `html.light`。无效属性值会回退到 class；没有暗色标记时使用亮色。
根节点标记或系统偏好变化时，对应模式会自动更新。插件只设置遮罩样式，不修改应用根节点。

固定亮色的应用可显式配置，即使操作系统使用暗色也保持亮色：

```python
setup(theme="light", background="#f3f5f4")
```

支持主题切换的应用可使用：

```python
setup(theme="auto", background="#f7f9fc", dark_background="#0b1018")
```

应用应在 Dash 挂载前初始化根节点标记，例如在 `index_string` 中加入脚本，以保证首屏一致。
React 渲染前的遮罩无法推断 `ConfigProvider` 内的主题设置。
如需跟随系统，请显式设置 `theme="system"`；与之前的行为不同，`"auto"` 不再回退到系统偏好。

`background` / `dark_background` 设置明暗背景，`color` / `dark_color` 设置动画颜色；
文字 loader 可通过 `text_color` / `dark_text_color` 单独覆盖。
所有 loader 在明暗模式下默认使用 `#1890ff` 蓝色。
预渲染动画的 HTML 和样式直接嵌入首屏响应；其他库从可缓存分包加载原生组件，不等待宿主 React。

### 配置校验

`setup()` 只接受上表中的当前参数。未知参数直接触发 `TypeError`，不会改变当前配置。
不提供别名、弃用警告或参数转换兼容层。

```python
setup(loader="loading-ui:ring", color="#1677ff", size=32, stroke=2)
setup(loader="loading-ui:text-shimmer", text="正在加载", font_size=20)
```

## 启动生命周期

插件在 React 挂载前注入遮罩，并观察 Dash 的 `#react-entry-point ._dash-loading` 元素。
该元素消失后遮罩即被移除。遮罩不会等待应用特定的后台任务，也不会在后续 callback 中重新出现。
后续回调的加载状态可使用 `dcc.Loading`。

遮罩严格跟随 Dash 初始布局的挂载状态，不因等待时间或脚本加载错误提前退出。
遮罩移除时会释放监听器。

### 首屏渲染方式

使用默认原生参数时，97 个动画直接通过响应内嵌的 HTML/CSS 渲染，
无需下载动画分包或 React：

| 命名空间 | 预渲染标识数 |
| --- | ---: |
| `antd` | 4 |
| `epic` | 8 |
| `flicker` | 64 |
| `spinners` | 12 |
| `spinners-react` | 9 |

预渲染动画直接显示构建时生成的 HTML/CSS，默认配置下不挂载 React root，也不请求动画分包。
其他库仅在自身分包下载期间显示内联 HTML/CSS 占位，立即通过私有运行时
将原始 React 动画挂载到独立 root，并使用 Shadow DOM 隔离样式；
Motion 动画使用真实 Motion 运行时，不会替换 Dash 的主 root。导入或渲染失败时保留占位。
不强制延长遮罩显示时间。

仅请求所选模块、样式和共享依赖，资源采用内容哈希文件名与不可变缓存。
移除遮罩前卸载 React 并断开监听；延迟导入不能重新挂载已经移除的遮罩。
尊重系统减少动态效果设置。严格的 Content Security Policy 需要允许内联启动脚本和样式，
以及同源 `_dash-splash-plugin/react/` 模块与样式资源。

### 常见问题

- 重建或升级插件后，请重启 Dash 进程。运行中的进程会缓存资源清单，
  旧的哈希资源地址可能已不存在。
- 非预渲染动画在自身分包下载期间短暂显示通用 spinner 属于正常行为，
  不会等待 Dash 的 React。持续显示回退动画通常表示资源或渲染失败，
  请检查浏览器报错以及 `_dash-splash-plugin/react/` 下的网络请求。
- 无效动画标识会在 `setup()` 时直接报错，不会静默切换到其他动画。
  可通过 `list_loaders()` 查询支持的完整标识。

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

`setup()` 返回更新后的配置，`get_config()` 读取当前配置，`reset_config()` 恢复默认值。

## 开发

```bash
uv sync --group test
uv run pytest -q
```

重新构建时运行 `npm ci` 和 `uv run python scripts/build_loaders.py`。
重建前端需要使用 Git 仓库源码。Python wheel 和源码包只包含 Python 运行时代码、
预构建资源、类型文件和许可证，不包含 `scripts/`、npm 配置、测试和演示文件。
构建锁定上游提交，自动生成清单和 Python 字面量类型，并将私有 React 19 运行时打包为共享分包。
浏览器分包与服务端预渲染共用根目录的 React 19.2.4 依赖和 React 19 类型。
生成清单记录上游最低版本，私有运行时满足这些要求，无需修改宿主版本。
可通过 `--upstream PATH --loading-ui PATH` 指定对应提交的本地源码。
运行 `npm run typecheck` 检查类型，`npm run test:browser` 验证浏览器行为；`ALL_LOADERS=1 npm run test:browser` 遍历全部标识。
浏览器测试默认使用 React 19.2.4 宿主；设置 `REACT_VERSION=18.3.1` 可验证与 React 18 宿主的隔离。
使用 `ALL_LOADERS=1 NO_HOST_REACT=1 npm run test:browser` 阻断宿主 React 脚本并验证全部动画。
浏览器测试需先执行 `npx playwright install chromium`，并通过 `PYTHON` 指定安装了
Dash 4.5.0 的解释器。wheel/sdist 用户无需 Node、npm 或上游源码。
开发版本固定为 Dash 4.5.0，演示只使用 Dash 内置控件，无需额外安装 Python 组件库。

## License

MIT，详见 [LICENSE](LICENSE)。第三方许可证、上游 NOTICE 和来源提交随包存放于
`dash_splash_plugin/resources/licenses/`。M3 保留 Apache-2.0 声明；不包含上游排除的库或未开源画廊图案。
