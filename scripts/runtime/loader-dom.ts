// The pinned Loading UI components are pure functions. Render them once without
// shipping React's reconciliation, event system, or scheduler into each bundle.
// This intentionally supports only the APIs used by that pinned source.
export interface VNode {
  type: string | ((props: any) => Child);
  props: Record<string, any>;
}
type Child = VNode | string | number | boolean | null | undefined | Child[];

export function createElement(type: VNode["type"], props: any, ...children: Child[]): VNode {
  return { type, props: { ...props, ...(children.length ? { children } : {}) } };
}
export function Fragment({ children }: any): Child { return children; }
export function useMemo<T>(factory: () => T): T { return factory(); }
let nextId = 0;
export function useId(): string { return `loading-ui-${nextId++}`; }
export function memo<T>(component: T): T { return component; }
export default { createElement, Fragment, memo };

export function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const SVG = "http://www.w3.org/2000/svg";
const unitless = /^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;
export function cssProperty(name: string): string {
  return name.startsWith("--") ? name : name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
}
export function setStyle(element: Element, styles: Record<string, any>): void {
  for (const [name, value] of Object.entries(styles)) {
    if (value == null) continue;
    (element as HTMLElement).style.setProperty(cssProperty(name),
      typeof value === "number" && value !== 0 && !unitless.test(name) && !name.startsWith("--")
        ? `${value}px` : String(value));
  }
}

export function render(child: Child, parent: Node, stylesheet: HTMLStyleElement, svg = false): void {
  if (child == null || typeof child === "boolean") return;
  if (Array.isArray(child)) {
    for (const item of child) render(item, parent, stylesheet, svg);
    return;
  }
  if (typeof child !== "object") {
    parent.appendChild(document.createTextNode(String(child)));
    return;
  }
  if (typeof child.type === "function") {
    render(child.type(child.props), parent, stylesheet, svg);
    return;
  }
  svg = svg || child.type === "svg";
  const element = svg ? document.createElementNS(SVG, child.type) : document.createElement(child.type);
  for (const [name, value] of Object.entries(child.props)) {
    if (["children", "key", "ref", "__mount"].includes(name) || value == null) continue;
    if (name === "style") setStyle(element, value);
    else {
      const attribute = name === "className" ? "class" : ["viewBox", "preserveAspectRatio"].includes(name) ? name : svg ? cssProperty(name) : name;
      // SVG's gradient/filter attributes retain camelCase, unlike presentation attributes.
      element.setAttribute(svg && /^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(name) ? name : attribute, String(value));
    }
  }
  parent.appendChild(element);
  render(child.props.children, element, stylesheet, svg && child.type !== "foreignObject");
  child.props.__mount?.(element, stylesheet);
}
