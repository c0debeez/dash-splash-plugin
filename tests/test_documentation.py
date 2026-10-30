import ast
import json
import re
from pathlib import Path
from runpy import run_path
from typing import Any

import tomllib

PROJECT_ROOT = Path(__file__).resolve().parents[1]


def test_pypi_metadata_references_the_project_readme():
    pyproject = tomllib.loads(
        (PROJECT_ROOT / "pyproject.toml").read_text(encoding="utf-8")
    )

    assert pyproject["project"]["readme"] == "README.md"
    assert pyproject["project"]["version"] == "0.1.0"
    assert (PROJECT_ROOT / pyproject["project"]["readme"]).is_file()
    assert pyproject["project"]["dependencies"] == [
        "dash>=4.5.0",
        "typing-extensions>=4.11",
    ]
    assert pyproject["dependency-groups"]["dev"] == ["dash==4.5.0"]
    assert "optional-dependencies" not in pyproject["project"]


def test_readmes_document_current_setup_and_installation():
    english = (PROJECT_ROOT / "README.md").read_text(encoding="utf-8")
    chinese = (PROJECT_ROOT / "README.zh-CN.md").read_text(encoding="utf-8")

    for readme in (english, chinese):
        assert "loader-preview.gif" not in readme
        assert "dash-mantine-components" not in readme
        assert 'pip install "dash-splash-plugin==0.1.0"' in readme
        assert "root_selector" not in readme
        assert "required_selectors" not in readme
        assert "pending_selector" not in readme
        assert "hide_default_loading" not in readme
        assert "minimum_display_ms" not in readme
        assert "overlay_id" not in readme
        assert "spinner_size_px" not in readme
        assert "spinner_stroke_px" not in readme
        assert "size" in readme
        assert "stroke" in readme
        assert "text" in readme
        assert "html.dark" in readme
        assert "theme_store" not in readme
        assert "sync_theme" not in readme
        assert "wait_for" not in readme
        assert "timeout" not in readme
        assert "theme_storage_key" not in readme
        assert "wait_for_initial_callbacks" not in readme
        assert "stabilize_selectors" not in readme
        assert "pip install dash-ant-design" in readme
        assert "usage-header" not in readme
        assert "usage-sidebar-menu" not in readme
        assert "dash-ant-design  # Python 3.10+" not in readme
        assert "index_string" in readme
        assert "prefers-color-scheme" in readme
        assert "dash_theme_component_id" not in readme
        assert 'setup(loader="loading-ui:fade-arc")' in readme
        assert 'setup(loader="antd:spin")' in readme

        assert "automatically uses the `antd`" not in readme
        assert "自动使用\n`antd` loader" not in readme
        assert "loader_options" in readme
        assert "list_loaders" in readme
        assert "dash-splash-plugin examples." not in readme
        assert "Installed examples" not in readme
        assert "内置示例" not in readme


def test_readmes_link_to_each_other():
    english = (PROJECT_ROOT / "README.md").read_text(encoding="utf-8")
    chinese = (PROJECT_ROOT / "README.zh-CN.md").read_text(encoding="utf-8")

    chinese_link = "[简体中文](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.zh-CN.md)"
    english_link = "[English](https://github.com/C0deBeez/dash-splash-plugin/blob/master/README.md)"

    for readme in (english, chinese):
        assert chinese_link in readme
        assert english_link in readme


def test_readmes_document_qualified_api_and_first_paint_inventory():
    previews = json.loads(
        (PROJECT_ROOT / "src/dash_splash_plugin/resources/static-loaders.json").read_text()
    )
    for name in ("README.md", "README.zh-CN.md"):
        source = (PROJECT_ROOT / name).read_text(encoding="utf-8")
        assert "pip install -e ." in source
        assert "setup(library=" not in source
        assert "LoaderId" in source and "LoaderLibrary" in source
        assert str(len(previews)) in source
        for family in {identifier.split(":", 1)[0] for identifier in previews}:
            count = sum(identifier.startswith(f"{family}:") for identifier in previews)
            assert f"| `{family}` | {count} |" in source


def test_readme_setup_examples_match_the_current_catalog():
    from dash_splash_plugin import reset_config, setup

    try:
        for name in ("README.md", "README.zh-CN.md"):
            source = (PROJECT_ROOT / name).read_text(encoding="utf-8")
            examples = re.findall(r"```python\n(.*?)```", source, flags=re.DOTALL)
            calls = 0
            for example in examples:
                tree = ast.parse(example)
                constants = {
                    node.target.id: ast.literal_eval(node.value)
                    for node in tree.body
                    if isinstance(node, ast.AnnAssign)
                    and isinstance(node.target, ast.Name)
                    and isinstance(node.value, ast.Constant)
                }
                for node in ast.walk(tree):
                    if (
                        not isinstance(node, ast.Call)
                        or not isinstance(node.func, ast.Name)
                        or node.func.id != "setup"
                    ):
                        continue
                    options: dict[str, Any] = {}
                    for item in node.keywords:
                        assert item.arg is not None
                        options[item.arg] = (
                            constants[item.value.id]
                            if isinstance(item.value, ast.Name)
                            else ast.literal_eval(item.value)
                        )
                    reset_config()
                    setup(**options)
                    calls += 1
            assert calls >= 10, name
    finally:
        reset_config()


def test_package_does_not_duplicate_project_readmes():
    package_root = PROJECT_ROOT / "src" / "dash_splash_plugin"

    assert not (package_root / "README.md").exists()
    assert not (package_root / "README.zh-CN.md").exists()


def test_usage_gallery_defaults_to_blue_without_duplicate_blue_option():
    gallery = run_path(str(PROJECT_ROOT / "usage.py"))
    preview_colors = gallery["PREVIEW_COLORS"]
    loader_preview = gallery["loader_preview"]

    assert preview_colors["default"] == ("Default", "#1890ff")
    assert "blue" not in preview_colors
    assert "--dash-splash-color:#1890ff" in loader_preview("antd:spin")
    assert "parent.React" not in loader_preview("antd:spin")
    assert "--dash-splash-background:#fff" in loader_preview("antd:spin")
    assert 'data-dash-splash-loader="loading-ui:fade-arc"' in loader_preview(
        "loading-ui:fade-arc"
    )
    assert "--dash-splash-size:64px" in loader_preview("loading-ui:ring")


def test_gallery_recreates_the_selected_loader_and_never_silently_falls_back():
    import pytest

    gallery = run_path(str(PROJECT_ROOT / "usage.py"))
    update = gallery["update_preview"]
    for name in (
        "antd:spin",
        "loading-ui:bobbing-dots",
        "ldrs:ring",
        "loadersz:heatmapping",
    ):
        library, loader = name.split(":", 1)
        frame, code = update(name, "green", library)
        props = frame.to_plotly_json()["props"]
        assert props["key"] == f"{name}:green"
        assert f'data-dash-splash-loader="{name}"' in props["srcDoc"]
        assert "--dash-splash-color:#52c41a" in props["srcDoc"]
        assert f"setup(loader={name!r}" in code
        assert code.startswith("```python\n")
        assert "color='#52c41a'" in code
    with pytest.raises(ValueError, match="Unknown loader"):
        gallery["loader_preview"]("unknown")
