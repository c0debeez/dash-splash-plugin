"""Build native React animations from pinned upstream sources and npm lockfile."""

from __future__ import annotations

import argparse
import ast
import json
import re
import runpy
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DLC_COMMIT = "5bb43d20d62f6edb34b4827d3c8697a250988c7e"
UI_COMMIT = "0ba63f89430d21c445edc6a771039288733462a9"


def source(path: str | None, name: str, url: str, revision: str) -> Path:
    directory = Path(path).resolve() if path else ROOT / "build" / name
    if not directory.exists():
        subprocess.run(
            ["git", "clone", "--filter=blob:none", url, str(directory)], check=True
        )
        subprocess.run(["git", "-C", str(directory), "checkout", revision], check=True)
    actual = subprocess.check_output(
        ["git", "-C", str(directory), "rev-parse", "HEAD"], text=True
    ).strip()
    if actual != revision:
        raise ValueError(f"{name} must be pinned to {revision}, got {actual}")
    subprocess.run(
        ["git", "-C", str(directory), "diff", "--exit-code", "HEAD", "--"],
        check=True,
        stdout=subprocess.DEVNULL,
    )
    return directory


def literal(path: Path, name: str):
    for node in ast.parse(path.read_text(encoding="utf-8")).body:
        if isinstance(node, ast.Assign) and any(
            isinstance(target, ast.Name) and target.id == name
            for target in node.targets
        ):
            return ast.literal_eval(node.value)
    raise ValueError(f"Missing {name} in {path}")


def kebab_case(value: str) -> str:
    value = re.sub(r"([A-Z]+)([A-Z][a-z])", r"\1-\2", value)
    value = re.sub(r"([a-z0-9])([A-Z])", r"\1-\2", value)
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def catalog(dlc: Path, ui: Path) -> list[dict]:
    entries = []
    namespace = dlc / "dash_loading_components"
    for path in sorted(namespace.glob("*/__init__.py")):
        family = path.parent.name
        for node in ast.parse(path.read_text(encoding="utf-8")).body:
            if (
                not isinstance(node, ast.ImportFrom)
                or node.level != 2
                or not node.module
            ):
                continue
            component = dlc / "src/lib/components" / family / f"{node.module}.react.js"
            if not component.is_file():
                continue
            for alias in node.names:
                entries.append(
                    {
                        "id": f"{family}:{alias.asname or alias.name}",
                        "family": family,
                        "source": str(component),
                        "defaults": {},
                    }
                )
    by_id = {item["id"]: item for item in entries}
    presets = runpy.run_path(str(namespace / "flicker/presets.py"))["PRESETS"]
    by_id["flicker:Spinner"]["defaults"] = {
        "grids": next(iter(presets.values())).frames
    }
    for name, preset in presets.items():
        entries.append(
            {
                **by_id["flicker:Spinner"],
                "id": f"flicker:{name}",
                "defaults": {"grids": preset.frames},
            }
        )
    for family, constant, component, prop in (
        ("gridora", "MOTION_VARIANTS", "GridLoader", "variant"),
        ("loadersz", "LOADER_STATES", "Loader", "state"),
        ("thinking_orbs", "ORB_STATES", "Orb", "state"),
    ):
        for value in literal(namespace / family / "__init__.py", constant):
            entries.append(
                {
                    **by_id[f"{family}:{component}"],
                    "id": f"{family}:{value}",
                    "defaults": {prop: value},
                }
            )
    by_id["gridora:Text"]["defaults"] = {"text": "Loading"}
    for component in sorted((ui / "registry/components/loading-ui").glob("*.tsx")):
        symbol = (
            "InfinityLoop"
            if component.stem == "infinity"
            else "".join(part.title() for part in component.stem.split("-"))
        )
        entries.append(
            {
                "id": f"loading_ui:{symbol}",
                "name": component.stem,
                "family": "loading_ui",
                "source": str(component),
                "symbol": symbol,
            }
        )
    entries.append(
        {
            "id": "antd",
            "family": "antd",
            "source": str(ROOT / "scripts/runtime/antd.tsx"),
            "symbol": "Antd",
        }
    )
    for item in entries:
        name = item["id"].split(":")[-1]
        item["family"] = kebab_case(item["family"])
        name = kebab_case(name).removesuffix("-loader")
        if item["family"] == "epic":
            name = name.removesuffix("-spinner").removesuffix("-spinners")
        item["id"] = f"{item['family']}:{name}"
    if len({item["id"] for item in entries}) != len(entries):
        raise ValueError("Duplicate loader identifiers")
    return entries


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--upstream")
    parser.add_argument("--loading-ui")
    args = parser.parse_args()
    dlc = source(
        args.upstream,
        "dash-loading-components",
        "https://github.com/PhylaTech/dash-loading-components.git",
        DLC_COMMIT,
    )
    ui = source(
        args.loading_ui,
        "loading-ui",
        "https://github.com/turbostarter/loading-ui.git",
        UI_COMMIT,
    )
    build = ROOT / "build"
    build.mkdir(exist_ok=True)
    entries = catalog(dlc, ui)
    (build / "catalog-input.json").write_text(json.dumps(entries), encoding="utf-8")
    subprocess.run(
        ["node", str(ROOT / "scripts/build_loaders.mjs"), str(ui)], cwd=ROOT, check=True
    )
    resources = ROOT / "src/dash_splash_plugin/resources"
    manifest = json.loads((resources / "manifest.json").read_text(encoding="utf-8"))
    names = ",\n    ".join(
        repr(name)
        for name in sorted({name.split(":")[1] for name in manifest["loaders"]})
    )
    libraries = ", ".join(
        repr(name)
        for name in sorted({item["family"] for item in manifest["loaders"].values()})
    )
    (resources.parent / "_catalog.py").write_text(
        '"""Generated by scripts/build_loaders.py; do not edit."""\n\n'
        f"from typing import Literal\n\nLoaderLibrary = Literal[{libraries}]\n\nLoaderName = Literal[\n    {names},\n]\n",
        encoding="utf-8",
    )
    licenses = resources / "licenses"
    shutil.rmtree(licenses, ignore_errors=True)
    licenses.mkdir(exist_ok=True)
    for label, directory in (("dash-loading-components", dlc), ("loading-ui", ui)):
        for name in ("LICENSE", "NOTICE"):
            candidate = next(
                (path for path in directory.glob(f"{name}*") if path.is_file()), None
            )
            if candidate is not None:
                shutil.copyfile(candidate, licenses / f"{label}-{name}.txt")
    shutil.copyfile(
        dlc / "docs/UPSTREAM-INVENTORY.md", licenses / "UPSTREAM-INVENTORY.md"
    )
    (licenses / "SOURCES.json").write_text(
        json.dumps(
            {"dash-loading-components": DLC_COMMIT, "loading-ui": UI_COMMIT}, indent=2
        )
        + "\n"
    )
    lock = json.loads((ROOT / "package-lock.json").read_text())
    for location, package in lock["packages"].items():
        if not location or package.get("dev"):
            continue
        directory = ROOT / location
        for path in directory.glob("*"):
            if path.is_file() and path.name.lower().startswith(
                ("license", "notice", "copying")
            ):
                label = re.sub(r"[^A-Za-z0-9_.-]", "_", location)
                shutil.copyfile(path, licenses / f"{label}-{path.name}.txt")
    runpy.run_path(str(ROOT / "scripts/build_splash_runtime.py"), run_name="__main__")
    print(f"Built {len(entries)} loaders; React is external, npm is build-only.")


if __name__ == "__main__":
    main()
