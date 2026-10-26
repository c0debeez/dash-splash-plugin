"""Full-screen startup loading overlay for Dash applications."""

from .plugin import (
    SplashConfig,
    __version__,
    get_config,
    list_loaders,
    list_libraries,
    reset_config,
    setup,
)

__all__ = [
    "SplashConfig",
    "__version__",
    "get_config",
    "list_loaders",
    "list_libraries",
    "reset_config",
    "setup",
]
