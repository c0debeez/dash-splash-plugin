!(function () {
  "use strict";
  var overlay = document.querySelector("[data-dash-splash]");
  if (!overlay || overlay.__dashSplashStarted) return;
  overlay.__dashSplashStarted = true;
  var host = overlay.querySelector("[data-dash-splash-loader]");
  var observer = null;
  var checkFrame = 0;
  var poll = 0;
  var finished = false;
  var importing = false;
  var dispose = null;

  function remove() {
    if (finished) return;
    finished = true;
    if (observer) observer.disconnect();
    if (checkFrame) cancelAnimationFrame(checkFrame);
    if (poll) window.clearTimeout(poll);
    window.removeEventListener("pagehide", remove);
    if (dispose) dispose();
    if (overlay.isConnected) overlay.remove();
  }

  function enhance() {
    if (finished || importing || !host || !host.dataset.dashSplashModule) return;
    if (!window.React || !window.ReactDOM || !window.ReactDOM.createRoot) return;
    importing = true;
    // Retain the fallback on older hosts instead of downloading another React.
    var minimum = Number(host.dataset.dashSplashReactMin || 18);
    if (Number.parseInt(window.React.version, 10) < minimum) {
      host.dataset.dashSplashUnsupportedReact = String(minimum);
      return;
    }
    import(host.dataset.dashSplashModule).then(function (module) {
      if (finished || !overlay.isConnected) return;
      dispose = module.mount(host);
    }).catch(function () {
      if (!finished) overlay.dataset.dashSplashError = "resource";
    });
  }

  function check() {
    checkFrame = 0;
    if (finished) return;
    if (!overlay.isConnected) return remove();
    var root = document.querySelector("#react-entry-point");
    if (root && root.firstElementChild && !root.querySelector("._dash-loading")) return remove();
    enhance();
  }

  function scheduleCheck() {
    if (!checkFrame && !finished) checkFrame = requestAnimationFrame(check);
  }

  function awaitReact() {
    if (finished || importing || !host) return;
    enhance();
    if (!importing) poll = window.setTimeout(awaitReact, 50);
  }

  observer = new MutationObserver(scheduleCheck);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("pagehide", remove);
  check();
  awaitReact();
})();
