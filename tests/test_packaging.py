"""Verify actual release archives, including wheel builds from an sdist."""

import json
import shutil
import subprocess
import tarfile
import zipfile
from pathlib import Path, PurePosixPath

import pytest

ROOT = Path(__file__).resolve().parents[1]


@pytest.fixture(scope="module")
def distributions(tmp_path_factory: pytest.TempPathFactory) -> dict[str, Path]:
    uv = shutil.which("uv")
    if uv is None:
        pytest.skip("uv is required to build release archives")
    output = tmp_path_factory.mktemp("distributions")
    result = subprocess.run(
        [uv, "build", "--no-sources", "--sdist", "--out-dir", str(output), str(ROOT)],
        cwd=ROOT,
        capture_output=True,
        text=True,
        timeout=180,
    )
    assert result.returncode == 0, result.stdout + result.stderr
    source = next(output.glob("*.tar.gz"))
    result = subprocess.run(
        [uv, "build", "--no-sources", "--wheel", "--out-dir", str(output), str(source)],
        cwd=output,
        capture_output=True,
        text=True,
        timeout=180,
    )
    assert result.returncode == 0, result.stdout + result.stderr
    return {"sdist": source, "wheel": next(output.glob("*.whl"))}


@pytest.mark.parametrize("kind", ["sdist", "wheel"])
def test_distributions_ship_runtime_without_development_files(
    distributions: dict[str, Path], kind: str
):
    if kind == "wheel":
        with zipfile.ZipFile(distributions[kind]) as archive:
            contents = {
                name: archive.read(name)
                for name in archive.namelist()
                if not name.endswith("/")
            }
        package = "dash_splash_plugin"
    else:
        with tarfile.open(distributions[kind]) as archive:
            contents = {}
            for member in archive.getmembers():
                if not member.isfile():
                    continue
                stream = archive.extractfile(member)
                assert stream is not None
                with stream:
                    name = str(PurePosixPath(*PurePosixPath(member.name).parts[1:]))
                    contents[name] = stream.read()
        package = "src/dash_splash_plugin"

    forbidden = {"scripts", "node_modules", "tests", "docs"}
    npm_files = {"package.json", "package-lock.json", "tsconfig.json", "usage.py"}
    for name in contents:
        path = PurePosixPath(name)
        assert not forbidden.intersection(path.parts), name
        assert path.name not in npm_files, name

    for required in (
        "__init__.py", "plugin.py", "_catalog.py", "py.typed",
        "resources/splash.js", "resources/static-loaders.json",
    ):
        assert f"{package}/{required}" in contents
    manifest = json.loads(contents[f"{package}/resources/manifest.json"])
    for asset in manifest["files"]:
        assert f"{package}/resources/react/{asset}" in contents
    assert any(name.startswith(f"{package}/resources/licenses/") for name in contents)
