"""Build the small inline, pre-React startup runtime (no Node required)."""

from __future__ import annotations

import json
from pathlib import Path

PROJECT_ROOT = Path(__file__).resolve().parents[1]
SOURCE = PROJECT_ROOT / "scripts/runtime"
OUTPUT = PROJECT_ROOT / "src/dash_splash_plugin/resources"


def main() -> None:
    css = json.dumps((SOURCE / "splash.css").read_text(encoding="utf-8"))
    loading = (SOURCE / "splash.js").read_text(encoding="utf-8")
    runtime = (
        '!function(){"use strict";var e=document.createElement("style");'
        'e.setAttribute("data-dash-splash-resource","style");'
        f"e.textContent={css};(document.head||document.documentElement).appendChild(e);"
        f"window.__dashSplashStart=function(){{{loading}}}}}();\n"
    )
    OUTPUT.mkdir(parents=True, exist_ok=True)
    (OUTPUT / "splash.js").write_text(runtime, encoding="utf-8")


if __name__ == "__main__":
    main()
