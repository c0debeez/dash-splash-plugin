// Shared entry-point runtime for every generated per-loader bundle.
import { createElement, render } from "./loader-dom";

const SHADOW_RESET =
  ":host{display:inline-block;width:100%;height:100%;color:inherit}" +
  "*,*::before,*::after{box-sizing:border-box}" +
  ".sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;" +
  "margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;" +
  "white-space:nowrap!important;border:0!important}";

export interface LoaderBundle {
  component: (props: any) => any;
  css: string;
  /** Geometry from the loader's official demo; empty when it is intrinsically sized. */
  geometry: Record<string, string>;
  /** ``text-*`` loaders render the configured loading text as children. */
  usesText: boolean;
  /** Loaders that size themselves through ``style`` rather than a utility class. */
  forwardsStyle: boolean;
  /** Maximum animated artwork envelope relative to the component root. */
  visualScale?: number;
}

export function mount({ component, css, geometry, usesText, forwardsStyle, visualScale = 1 }: LoaderBundle): void {
  const host = document.querySelector("[data-dash-loading-ui]") as HTMLElement | null;
  if (!host) return;

  const shadow = host.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = SHADOW_RESET + css;
  shadow.appendChild(style);

  const target = document.createElement("span");
  target.style.cssText = "display:inline-flex;width:auto;height:auto";
  Object.assign(target.style, geometry);
  const computed = getComputedStyle(host);
  const fontSize = computed.getPropertyValue("--dash-loading-font-size").trim();
  if (usesText && fontSize) target.style.fontSize = fontSize;
  shadow.appendChild(target);

  let componentTarget = target;
  if (visualScale !== 1) {
    target.style.width = `calc(${geometry.width} * ${visualScale})`;
    target.style.height = `calc(${geometry.height} * ${visualScale})`;
    target.style.alignItems = "center";
    target.style.justifyContent = "center";
    componentTarget = document.createElement("span");
    componentTarget.style.cssText = "display:inline-flex;flex-shrink:0";
    Object.assign(componentTarget.style, geometry);
    target.appendChild(componentTarget);
  }

  const fillsTarget = Boolean(geometry.width || geometry.height);
  const children = usesText ? host.dataset.dashLoadingText || "Loading" : undefined;
  const props =
    forwardsStyle && fillsTarget
      ? { style: { width: "100%", height: "100%" }, children }
      : { className: fillsTarget ? "size-full" : undefined, children };
  render(createElement(component, props), componentTarget, style);
  // Measure the original container, then scale uniformly to its requested
  // longest side. Intrinsic character grids and rectangular loaders keep ratio.
  const requested = computed.getPropertyValue("--dash-loading-target-size").trim();
  let scale = 1;
  // Text is sized by its font, not by fitting a complete sentence into an icon.
  if (requested && !usesText) {
    const bounds = target.getBoundingClientRect();
    const baseline = Math.max(bounds.width, bounds.height);
    if (baseline > 0) scale = Number(requested) / baseline;
    host.style.zoom = String(scale);
  }
  const thickness = computed.getPropertyValue("--dash-loading-thickness").trim();
  if (thickness && scale > 0) {
    style.textContent += `*{border-width:${Number(thickness) / scale}px!important}` +
      `svg *{stroke-width:${Number(thickness) / scale}px!important;vector-effect:non-scaling-stroke}`;
  }
  const rate = Number(computed.getPropertyValue("--dash-loading-rate").trim() || 1);
  const playing = computed.getPropertyValue("--dash-loading-play-state").trim() !== "paused";
  // Playback rate scales complete CSS timelines, including delays, without
  // rewriting per-component durations or losing multi-animation declarations.
  for (const element of shadow.querySelectorAll("*")) {
    for (const animation of element.getAnimations()) {
      animation.playbackRate = rate;
      if (!playing) animation.pause();
    }
  }
  // SMIL is independent of CSS/Web Animations and requires its own control.
  for (const svg of shadow.querySelectorAll("svg")) {
    if (rate !== 1) {
      for (const animation of svg.querySelectorAll("animate,animateTransform,animateMotion")) {
        for (const attribute of ["dur", "begin"]) {
          const value = animation.getAttribute(attribute);
          if (!value) continue;
          animation.setAttribute(attribute, value.replace(/(-?[\d.]+)(ms|s)\b/g,
            (_, duration, unit) => `${Number(duration) / rate}${unit}`));
        }
      }
    }
    if (!playing) svg.pauseAnimations();
  }
}
