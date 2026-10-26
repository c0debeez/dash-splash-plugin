!function(){"use strict";var e=document.createElement("style");e.setAttribute("data-dash-splash-resource","style");e.textContent=".dash-splash{position:fixed;inset:0;z-index:var(--dash-splash-z-index,9999);display:grid;place-items:center;overflow:hidden;background:var(--dash-splash-background,#f5f5f5);color:var(--dash-splash-color,#1890ff)}\n.dash-splash__content,.dash-splash__spinner-region{display:grid;place-items:center;max-width:100%;min-width:0}\n.dash-splash__loader{display:var(--dash-splash-display,inline-flex);position:relative;align-items:center;justify-content:center;max-width:100%;color:inherit}\n.dash-splash__fallback{display:block;box-sizing:border-box;width:var(--dash-splash-size,32px);height:var(--dash-splash-size,32px);border:var(--dash-splash-stroke,2px) solid transparent;border-top-color:currentColor;border-radius:50%;animation:dash-splash-spin calc(.8s / var(--dash-splash-rate,1)) linear infinite;animation-play-state:var(--dash-splash-play-state,running)}\n.dash-splash__loader[data-dash-splash-enhanced=true]>.dash-splash__fallback{display:none}\n.dash-splash__loader[data-dash-splash-loader^=\"loading-ui:text\"]{color:var(--dash-splash-text-color,currentColor)}\nhtml.dark .dash-splash,html[data-theme=dark] .dash-splash{background:var(--dash-splash-dark-background,#000);color:var(--dash-splash-dark-color,currentColor)}\nhtml.dark .dash-splash__loader[data-dash-splash-loader^=\"loading-ui:text\"],html[data-theme=dark] .dash-splash__loader[data-dash-splash-loader^=\"loading-ui:text\"]{color:var(--dash-splash-dark-text-color,currentColor)}\n._dash-loading{display:none!important}\n@keyframes dash-splash-spin{to{transform:rotate(360deg)}}\n@media(prefers-reduced-motion:reduce){.dash-splash__fallback{animation:none}}\n@media(prefers-color-scheme:dark){html:not(.light):not([data-theme=light]):not(.dark):not([data-theme=dark]) .dash-splash{background:var(--dash-splash-dark-background,#000);color:var(--dash-splash-dark-color,currentColor)}}\n";(document.head||document.documentElement).appendChild(e);window.__dashSplashStart=function(){!(function () {
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
}}();
