// Translate the seven pinned loaders' declarative Motion loops to native CSS
// keyframes (and SMIL for SVG path morphing). No animation scheduler is needed.
import { createElement, cssProperty, setStyle } from "./loader-dom";

const transforms: Record<string, string> = {
  x: "translateX", y: "translateY", translateX: "translateX", translateY: "translateY",
  translateZ: "translateZ", rotateY: "rotateY", scale: "scale",
};
const easing: Record<string, string> = { linear: "linear", easeInOut: "cubic-bezier(.42,0,.58,1)" };
let nextAnimation = 0;

function declarations(values: Record<string, any>): Record<string, any> {
  const styles: Record<string, any> = {};
  const transform: string[] = [];
  for (const [property, value] of Object.entries(values)) {
    if (transforms[property]) {
      const unit = property === "scale" ? "" : property === "rotateY" ? "deg" : "px";
      transform.push(`${transforms[property]}(${typeof value === "number" ? value + unit : value})`);
    } else styles[property] = value;
  }
  if (transform.length) styles.transform = transform.join(" ");
  return styles;
}

function animate(element: Element, stylesheet: HTMLStyleElement, initial: any, values: any, transition: any): void {
  if (!values || !Object.keys(values).length) return;
  const options = values.d ? transition.d || transition : transition;
  const duration = options.duration ?? 1;
  const repeatDelay = options.repeatDelay || 0;
  const ease = Array.isArray(options.ease) ? `cubic-bezier(${options.ease.join(",")})` : easing[options.ease] || "ease";
  // Resolve inherited color variables once, as Motion does. Leaving currentColor
  // inside an animated color-mix would apply the base opacity twice.
  const computed = getComputedStyle(element);
  const resolve = (key: string, value: any) => key === "color" && typeof value === "string"
    ? value.replace(/var\((--[\w-]+)\)/g, (_, name) => computed.getPropertyValue(name).trim())
      .replace(/currentColor/gi, computed.color) : value;
  initial = Object.fromEntries(Object.entries(initial || {}).map(([key, value]) => [key, resolve(key, value)]));
  const tracks = Object.fromEntries(Object.entries(values).map(([key, value]) => [key,
    (Array.isArray(value) ? value : [initial[key] ?? value, value]).map((frame) => resolve(key, frame))]));
  if (values.d) {
    const frames = tracks.d;
    element.setAttribute("d", frames[0]);
    const animation = document.createElementNS("http://www.w3.org/2000/svg", "animate");
    const times = options.times || frames.map((_: any, i: number) => i / (frames.length - 1));
    for (const [name, value] of Object.entries({ attributeName: "d", values: frames.join(";"),
      dur: `${duration}s`, repeatCount: options.repeat === Infinity ? "indefinite" : String((options.repeat || 0) + 1),
      keyTimes: times.join(";"), calcMode: "spline",
      keySplines: frames.slice(1).map(() => "0.42 0 0.58 1").join(";") })) animation.setAttribute(name, value);
    element.appendChild(animation);
    return;
  }
  const length = Math.max(...Object.values(tracks).map((track: any) => track.length));
  const times = options.times || Array.from({ length }, (_, i) => i / (length - 1));
  const cycle = duration + repeatDelay;
  const frames = times.map((time: number, index: number) => {
    const styles = declarations(Object.fromEntries(Object.entries(tracks).map(([key, track]) => [key, track[index]])));
    return { offset: time * duration / cycle, styles };
  });
  if (repeatDelay) frames.push({ offset: 1, styles: frames[frames.length - 1].styles });
  if (options.repeatType === "mirror" || options.repeatType === "reverse") {
    const reversed = frames.slice().reverse().map((frame: any) => ({ ...frame, offset: 1 - frame.offset }));
    frames.forEach((frame: any) => { frame.offset /= 2; });
    frames.push(...reversed.map((frame: any) => ({ ...frame, offset: .5 + frame.offset / 2 })));
  }
  const name = `loading-ui-motion-${nextAnimation++}`;
  const css = frames.map(({ offset, styles }: any) => `${offset * 100}%{${Object.entries(styles)
    .map(([key, value]) => `${cssProperty(key)}:${value}`).join(";")}}`).join("");
  stylesheet.textContent += `@keyframes ${name}{${css}}`;
  setStyle(element, declarations({ ...Object.fromEntries(Object.entries(tracks).map(([key, track]) => [key, track[0]])), ...initial }));
  setStyle(element, { animationName: name, animationDuration: `${cycle * (options.repeatType === "mirror" || options.repeatType === "reverse" ? 2 : 1)}s`,
    animationTimingFunction: ease, animationDelay: `${options.delay || 0}s`, animationFillMode: "both",
    animationIterationCount: options.repeat === Infinity ? "infinite" : (options.repeat || 0) + 1 });
}

function component(tag: string) {
  return ({ initial, animate: values, transition = {}, ...props }: any) => createElement(tag, {
    ...props, __mount: (element: Element, stylesheet: HTMLStyleElement) => animate(element, stylesheet, initial, values, transition),
  });
}
export const motion = { create: component, span: component("span"), div: component("div"), path: component("path") };
