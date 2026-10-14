"""Rebuild the bundled Loading UI renderers from the pinned MIT-licensed source.

One self-contained IIFE bundle is emitted per loader, containing only its
geometry, native animations and a small one-shot DOM renderer.
"""

from __future__ import annotations

import json
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

UPSTREAM = "https://github.com/turbostarter/loading-ui.git"
COMMIT = "0ba63f89430d21c445edc6a771039288733462a9"
PACKAGES = (
    "esbuild@0.28.2",
    "tailwindcss@4.3.3",
    "@tailwindcss/cli@4.3.3",
    "@babel/parser@7.29.8",
    "@babel/traverse@7.29.8",
    "@babel/generator@7.29.8",
    "@babel/types@7.29.8",
    "postcss@8.5.28",
    "postcss-selector-parser@7.1.6",
)
PROJECT_ROOT = Path(__file__).resolve().parents[1]
RUNTIME = PROJECT_ROOT / "scripts/runtime"
OUTPUT = RUNTIME / "loading-ui"

# Loaders use compact dimensions unless an entry preserves its demo geometry.
# Components omitted here calculate their own intrinsic ch/em dimensions.
COMPONENT_STYLES = {
    "analyzing-image": {"width": "2rem", "height": "2rem"},
    "arc": {"width": "2rem", "height": "2rem"},
    "bars": {"width": "2rem", "height": "2rem"},
    "bobbing-dots": {"width": "2rem", "height": "2rem"},
    "bouncing-dots": {"width": "2rem", "height": "2rem"},
    "classic": {"width": "2rem", "height": "2rem"},
    "clock-ring": {"width": "2rem", "height": "2rem"},
    "comet-spinner": {"width": "2rem", "height": "2rem"},
    "concentric-ring": {"width": "2rem", "height": "2rem"},
    "dash-ring": {"width": "2rem", "height": "2rem"},
    "diamond": {"width": "2rem", "height": "2rem"},
    "dots-ring": {"width": "2rem", "height": "2rem"},
    "dots": {"width": "2rem", "height": "2rem"},
    "dual-arc": {"width": "2rem", "height": "2rem"},
    "fade-arc": {"width": "2rem", "height": "2rem"},
    "infinity": {"width": "3rem", "height": "3rem"},
    "morphing-infinity": {"width": "3rem", "height": "3rem"},
    "orbit-ring": {"width": "2rem", "height": "2rem"},
    "pulsating-dots": {"width": "2rem", "height": "2rem"},
    "pulse-dot": {"width": "2rem", "height": "2rem"},
    "pulse": {"width": "2rem", "height": "2rem"},
    "quarter-ring": {"width": "2rem", "height": "2rem"},
    "ring": {"width": "2rem", "height": "2rem"},
    "ripple": {"width": "2rem", "height": "2rem"},
    "satellite-ring": {"width": "2rem", "height": "2rem"},
    "skeleton": {"width": "2rem", "height": "2rem"},
    "spiral": {"width": "2rem", "height": "2rem"},
    "spokes": {"width": "2rem", "height": "2rem"},
    "swirling": {"width": "48px", "height": "48px"},
    "terminal": {"width": "2rem", "height": "2rem", "fontSize": "1.25rem"},
    "text-blink": {"fontSize": "1.25rem"},
    "text-dots": {"fontSize": "1.25rem", "fontWeight": "500"},
    "text-shimmer-wave": {"fontSize": "1.25rem", "fontWeight": "500"},
    "text-shimmer": {"fontSize": "1.25rem", "fontWeight": "500"},
    "triple-dot-spinner": {"width": "0.6rem", "height": "0.6rem"},
    "twin-orbit": {"width": "0.6rem", "height": "0.6rem"},
    "typing": {"width": "2rem", "height": "2rem"},
    "wandering-eyes": {"width": "2rem", "height": "2rem"},
    "wave": {"width": "3rem", "height": "2rem"},
}

# Loaders whose root element is sized through ``style`` rather than a class.
FORWARDS_STYLE = frozenset({"diamond", "morphing-infinity", "swirling"})

# These roots describe one dot, not the complete rotating artwork. Reserve
# its maximum envelope, including rotated element bounding boxes (~4.23 dots).
VISUAL_SCALES = {"triple-dot-spinner": 4.25, "twin-orbit": 4.25}

TAILWIND_THEME = (
    '@import "tailwindcss/utilities";\n'
    "@theme { --color-muted: currentColor; --radius-md: 4px; "
    "--spacing: 0.25rem; --shadow-sm: 0 1px 3px rgb(0 0 0 / 0.1); "
    "--font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "
    '"Liberation Mono", "Courier New", monospace; '
    "--text-xl: 1.25rem; --text-xl--line-height: 1.75rem; }\n"
)


def run(*args: str) -> None:
    subprocess.run(args, check=True)


def component_symbol(stem: str) -> str:
    """Return the React symbol exported by a loader source file."""

    if stem == "infinity":
        return "InfinityLoop"
    return "".join(part.title() for part in stem.split("-"))


def entry_source(name: str, component: Path, mount_module: Path, stylesheet: Path) -> str:
    symbol = component_symbol(name)
    return (
        f'import {{ {symbol} }} from "{component}";\n'
        f'import {{ mount }} from "{mount_module}";\n'
        f'import css from "{stylesheet}";\n'
        "mount({\n"
        f"  component: {symbol},\n"
        "  css,\n"
        f"  geometry: {json.dumps(COMPONENT_STYLES.get(name, {}), separators=(',', ':'))},\n"
        f"  usesText: {json.dumps(name.startswith('text-'))},\n"
        f"  forwardsStyle: {json.dumps(name in FORWARDS_STYLE)},\n"
        f"  visualScale: {VISUAL_SCALES.get(name, 1)},\n"
        "});\n"
    )


def main() -> None:
    with tempfile.TemporaryDirectory(prefix="dash-loading-ui-build-") as temp:
        root = Path(temp)
        source = root / "loading-ui"
        build = root / "build"
        build.mkdir()
        run("git", "clone", "--filter=blob:none", UPSTREAM, str(source))
        run("git", "-C", str(source), "checkout", COMMIT)
        (build / "package.json").write_text('{"private":true}', encoding="utf-8")
        run(
            "npm",
            "install",
            "--prefix",
            str(build),
            "--no-audit",
            "--no-fund",
            *PACKAGES,
        )
        (source / "node_modules").symlink_to(
            build / "node_modules", target_is_directory=True
        )

        components = source / "registry/components/loading-ui"
        stylesheet = build / "loading-ui.css"
        (build / "input.css").write_text(
            f'{TAILWIND_THEME}@source "{components}";\n', encoding="utf-8"
        )
        run(
            str(build / "node_modules/.bin/tailwindcss"),
            "-i",
            str(build / "input.css"),
            "-o",
            str(stylesheet),
            "--minify",
        )

        transformer = build / "inline_loading_ui_classes.cjs"
        shutil.copyfile(
            Path(__file__).with_name("inline_loading_ui_classes.cjs"), transformer
        )
        run(
            "node",
            str(transformer),
            str(components),
            str(stylesheet),
            str(build / "loader-class-styles.ts"),
        )

        mount_module = build / "mount.ts"
        shutil.copyfile(RUNTIME / "mount.ts", mount_module)
        for module in ("loader-dom.ts", "loader-motion.ts"):
            shutil.copyfile(RUNTIME / module, build / module)
        entries = build / "entries"
        entries.mkdir()
        names = sorted(path.stem for path in components.glob("*.tsx"))
        for name in names:
            (entries / f"{name}.tsx").write_text(
                entry_source(name, components / f"{name}.tsx", mount_module,
                             build / f"loader-class-styles-{name}.css"),
                encoding="utf-8",
            )

        # Complete the build before replacing existing generated resources.
        bundled = build / "bundled"
        run(
            str(build / "node_modules/.bin/esbuild"),
            *(str(entries / f"{name}.tsx") for name in names),
            "--bundle",
            "--minify",
            "--legal-comments=none",
            "--format=iife",
            "--platform=browser",
            '--tsconfig-raw={"compilerOptions":{"jsx":"react"}}',
            "--jsx=transform",
            "--jsx-factory=createElement",
            "--jsx-fragment=Fragment",
            f"--inject:{build / 'loader-dom.ts'}",
            f"--alias:react={build / 'loader-dom.ts'}",
            f"--alias:motion/react={build / 'loader-motion.ts'}",
            f"--alias:@/lib/utils={build / 'loader-dom.ts'}",
            "--loader:.css=text",
            f"--outdir={bundled}",
        )
        OUTPUT.mkdir(parents=True, exist_ok=True)
        for resource in bundled.glob("*.js"):
            shutil.copyfile(resource, OUTPUT / resource.name)

    subprocess.run(
        [sys.executable, str(PROJECT_ROOT / "scripts/build_startup_runtime.py")],
        check=True,
    )


if __name__ == "__main__":
    main()
