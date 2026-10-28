!function(){"use strict";var e=document.createElement("style");e.setAttribute("data-dash-splash-resource","style");e.textContent=".dash-splash{position:fixed;inset:0;z-index:var(--dash-splash-z-index,9999);display:grid;place-items:center;overflow:hidden;background:var(--dash-splash-background,#f5f5f5);color:var(--dash-splash-color,#1890ff)}\n.dash-splash__content,.dash-splash__spinner-region{display:grid;place-items:center;max-width:100%;min-width:0}\n.dash-splash__loader{display:var(--dash-splash-display,inline-flex);position:relative;align-items:center;justify-content:center;max-width:100%;color:inherit}\n.dash-splash__fallback{display:block;box-sizing:border-box;width:var(--dash-splash-size,32px);height:var(--dash-splash-size,32px);border:var(--dash-splash-stroke,2px) solid transparent;border-top-color:currentColor;border-radius:50%;animation:dash-splash-spin calc(.8s / var(--dash-splash-rate,1)) linear infinite;animation-play-state:var(--dash-splash-play-state,running)}\n.dash-splash__loader[data-dash-splash-enhanced=true]>.dash-splash__fallback{display:none}\n.dash-splash{--dash-splash-active-text-color:var(--dash-splash-text-color,currentColor)}\n.dash-splash__loader[data-dash-splash-loader^=\"loading-ui:text\"]{color:var(--dash-splash-active-text-color)}\n.dash-splash[data-dash-splash-theme=dark],html[data-theme=dark] .dash-splash[data-dash-splash-theme=auto],html.dark:not([data-theme=light]):not([data-theme=dark]) .dash-splash[data-dash-splash-theme=auto]{background:var(--dash-splash-dark-background,#000);color:var(--dash-splash-dark-color,currentColor);--dash-splash-active-text-color:var(--dash-splash-dark-text-color,currentColor)}\n._dash-loading{display:none!important}\n@keyframes dash-splash-spin{to{transform:rotate(360deg)}}\n@media(prefers-reduced-motion:reduce){.dash-splash__fallback{animation:none}}\n@media(prefers-color-scheme:dark){.dash-splash[data-dash-splash-theme=system]{background:var(--dash-splash-dark-background,#000);color:var(--dash-splash-dark-color,currentColor);--dash-splash-active-text-color:var(--dash-splash-dark-text-color,currentColor)}}\n";(document.head||document.documentElement).appendChild(e);window.__dashSplashStart=function(){!(function () {
  "use strict";
  var overlay = document.querySelector("[data-dash-splash]");
  if (!overlay || overlay.__dashSplashStarted) return;
  overlay.__dashSplashStarted = true;
  var host = overlay.querySelector("[data-dash-splash-loader]");
  var observer = null;
  var checkFrame = 0;
  var finished = false;
  var importing = false;
  var dispose = null;

  function prepareStatic() {
    if (!host || !host.dataset.dashSplashStatic) return;
    var template = host.querySelector('template');
    // Declarative Shadow DOM renders directly from the response. Older browsers
    // receive the same build-time markup through this small, React-free bridge.
    var shadow = host.shadowRoot;
    if (!shadow && template) {
      shadow = host.attachShadow({mode: 'open'});
      shadow.appendChild(template.content.cloneNode(true));
      template.remove();
    }
    if (!shadow) return;
    importing = host.dataset.dashSplashStatic === 'true';
    var config = JSON.parse(host.dataset.dashSplashConfig);
    var options = config.loader_options;
    var playing = options.playing === undefined ? config.playing : options.playing;
    if (options.play_state !== undefined) playing = options.play_state === 'running';
    if (options.paused !== undefined) playing = !options.paused;
    if (options.still !== undefined) playing = !options.still;
    host.style.setProperty('--dash-splash-play-state', playing ? 'running' : 'paused');
    var artwork = shadow.querySelector('.artwork');
    var viewport = shadow.querySelector('.viewport');
    var preference = matchMedia('(prefers-reduced-motion: reduce)');
    function playback() {
      var running = playing && !preference.matches;
      artwork.classList.toggle('dlc-paused', !running);
      artwork.getAnimations({subtree: true}).forEach(function (animation) {
        animation.updatePlaybackRate(config.rate);
        if (running) animation.play(); else animation.pause();
      });
    }
    function fit() {
      var width = artwork.offsetWidth;
      var height = artwork.offsetHeight;
      var requested = typeof options.size === 'number' ? options.size : config.size;
      var scale = requested && Math.max(width, height) ? requested / Math.max(width, height) : 1;
      scale = Math.min(scale, Math.max(1, document.documentElement.clientWidth - 32) / Math.max(width, 1));
      viewport.style.width = width * scale + 'px';
      viewport.style.height = height * scale + 'px';
      artwork.style.position = 'absolute';
      artwork.style.transform = 'scale(' + scale + ')';
    }
    var resize = new ResizeObserver(fit);
    resize.observe(artwork);
    window.addEventListener('resize', fit);
    preference.addEventListener('change', playback);
    fit();
    playback();
    host.dataset.dashSplashEnhanced = 'true';
    dispose = function () {
      resize.disconnect();
      window.removeEventListener('resize', fit);
      preference.removeEventListener('change', playback);
    };
  }

  function remove() {
    if (finished) return;
    finished = true;
    if (observer) observer.disconnect();
    if (checkFrame) cancelAnimationFrame(checkFrame);
    window.removeEventListener("pagehide", remove);
    if (dispose) dispose();
    if (overlay.isConnected) overlay.remove();
  }

  function enhance() {
    if (finished || importing || !host || !host.dataset.dashSplashModule) return;
    importing = true;
    import(host.dataset.dashSplashModule).then(function (module) {
      if (finished || !overlay.isConnected) return;
      if (dispose) dispose();
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

  prepareStatic();
  observer = new MutationObserver(scheduleCheck);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener("pagehide", remove);
  check();
})();
}}();
