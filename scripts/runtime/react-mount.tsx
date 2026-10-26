import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {StyleSheetManager} from 'styled-components';

type Config = {
  color?: string; size?: number; stroke?: number; font_size?: number;
  text: string; rate: number; playing: boolean; loader_options: Record<string, unknown>;
};
type Definition = {
  family: string; defaults?: Record<string, unknown>; geometry?: React.CSSProperties;
  visualScale?: number;
  bindPlayback?: (element: HTMLElement, rate: number, playing: boolean) => () => void;
};

const RESET = `:host{display:inline-flex;color:inherit;max-width:100%}
*,*::before,*::after{box-sizing:border-box}
.viewport{display:inline-flex;align-items:center;justify-content:center;max-width:100%}
.artwork{display:inline-flex;align-items:center;justify-content:center;transform-origin:top left;flex:none}
.artwork>svg{display:block} .artwork p{margin:0}
.dash-splash-native{width:var(--dash-native-width,auto);height:var(--dash-native-height,auto);font-size:var(--dash-native-font-size,inherit);stroke-width:var(--dash-native-stroke,revert)}
.dlc-paused,.dlc-paused *,.dlc-paused *::before,.dlc-paused *::after{animation-play-state:paused!important}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation-play-state:paused!important}}
`;

class Boundary extends React.Component<{
  children: React.ReactNode; onError: () => void;
}, {failed: boolean}> {
  state = {failed: false};
  static getDerivedStateFromError() { return {failed: true}; }
  componentDidCatch() { this.props.onError(); }
  render() { return this.state.failed ? null : this.props.children; }
}

function Artwork({host, Component, definition, config, ready}: {
  host: HTMLElement; Component: React.ElementType; definition: Definition; config: Config; ready: () => void;
}) {
  const [color, setColor] = useState(getComputedStyle(host).color);
  const [reduced, setReduced] = useState(matchMedia('(prefers-reduced-motion: reduce)').matches);
  const node = useRef<HTMLDivElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const theme = new MutationObserver(() => setColor(getComputedStyle(host).color));
    theme.observe(document.documentElement, {attributes: true, attributeFilter: ['class', 'style', 'data-theme']});
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const changed = () => { setReduced(preference.matches); setColor(getComputedStyle(host).color); };
    const scheme = matchMedia('(prefers-color-scheme: dark)');
    preference.addEventListener('change', changed);
    scheme.addEventListener('change', changed);
    return () => {
      theme.disconnect();
      preference.removeEventListener('change', changed);
      scheme.removeEventListener('change', changed);
    };
  }, [host]);

  const legacy = definition.family === 'loading-ui';
  const textLoader = legacy && host.dataset.dashSplashLoader?.startsWith('loading-ui:text');
  let requestedPlaying = config.loader_options.playing ?? config.playing;
  if (config.loader_options.play_state !== undefined) requestedPlaying = config.loader_options.play_state === 'running';
  if (config.loader_options.paused !== undefined) requestedPlaying = !config.loader_options.paused;
  if (config.loader_options.still !== undefined) requestedPlaying = !config.loader_options.still;
  const playing = Boolean(requestedPlaying) && !reduced;
  const props: Record<string, unknown> = {
    ...definition.defaults, color, rate: config.rate, playing,
    ...(config.size === undefined ? {} : {size: config.size}),
    ...(config.stroke === undefined ? {} : {thickness: config.stroke}),
    ...config.loader_options,
  };
  if (definition.family === 'antd') props.styleContainer = host.shadowRoot;
  // Upstream contracts use camelCase native keys while Dash wrappers expose
  // snake_case. Supply both so explicit native tempo/play options really win.
  for (const [name, value] of Object.entries(config.loader_options)) {
    const camel = name.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
    if (camel !== name) props[camel] = value;
  }
  if (definition.family === 'indicators') {
    props.size = config.loader_options.size ?? 'small';
  }
  if (host.dataset.dashSplashLoader === 'spinners:propagate') {
    // The upstream wrapper has only absolutely positioned dots and no box.
    // Reserve its native +/-5rem travel envelope so fitting includes the motion.
    const dotSize = Number(props.size ?? 15);
    props.style = {width: dotSize + 160, height: dotSize, display: 'grid', placeItems: 'center',
      ...config.loader_options.style as object};
  }
  if (definition.family === 'gridora' && host.dataset.dashSplashLoader === 'gridora:text') {
    props.text = config.loader_options.text ?? config.text;
  }
  if (legacy) {
    // Geometry belongs in CSS: a style prop would replace upstream inline animations.
    Object.keys(props).forEach(key => delete props[key]);
    Object.assign(props, config.loader_options);
    props.className = ['dash-splash-native', props.className].filter(Boolean).join(' ');
    if (textLoader) props.children = config.text;
  }

  useLayoutEffect(() => {
    const element = node.current!;
    const frame = viewport.current!;
    const fit = () => {
      const width = element.offsetWidth;
      const height = element.offsetHeight;
      const requested = textLoader ? undefined : config.size ?? (legacy ? 32 : undefined);
      const available = Math.max(1, document.documentElement.clientWidth - 32);
      const targetScale = requested && Math.max(width, height) ? requested / Math.max(width, height) : 1;
      const scale = Math.min(targetScale, available / Math.max(width, 1));
      frame.style.width = `${width * scale}px`;
      frame.style.height = `${height * scale}px`;
      element.style.transform = `scale(${scale})`;
    };
    const observer = new ResizeObserver(fit);
    observer.observe(element);
    fit();
    ready();
    return () => observer.disconnect();
  }, [config.size, legacy, ready, textLoader]);

  useEffect(() => {
    const element = node.current!;
    const stopMotion = definition.bindPlayback?.(element,
      config.loader_options.duration !== undefined || config.loader_options.transition !== undefined ? 1 : config.rate,
      playing);
    const update = () => {
      // Native components retain their own speed mapping. Loading UI and SMIL-only
      // families need only browser playback controls, not a Motion imitation.
      if ((legacy && !definition.bindPlayback) || definition.family === 'loader-spinner' || definition.family === 'antd') {
        element.getAnimations({subtree: true}).forEach(animation => {
          animation.updatePlaybackRate(config.rate);
          if (playing) animation.play(); else animation.pause();
        });
        element.querySelectorAll('animate,animateTransform,animateMotion').forEach(animation => {
          const original = animation.getAttribute('data-dash-native-duration') ?? animation.getAttribute('dur');
          if (!original) return;
          const match = original.match(/^([\d.]+)(ms|s)$/);
          if (!match) return;
          animation.setAttribute('data-dash-native-duration', original);
          animation.setAttribute('dur', `${Number(match[1]) / config.rate}${match[2]}`);
        });
      }
      element.querySelectorAll('svg').forEach(svg => {
        if (!playing) svg.pauseAnimations(); else svg.unpauseAnimations();
      });
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(element, {childList: true, subtree: true});
    return () => { observer.disconnect(); stopMotion?.(); };
  }, [color, config.rate, config.loader_options, definition.bindPlayback, definition.family, legacy, playing]);

  return <div ref={viewport} className="viewport" style={{position: 'relative'}}>
    <div ref={node} className={`artwork${playing ? '' : ' dlc-paused'}`} style={{position: 'absolute', left: 0, top: 0,
      ...legacy ? {
        '--dash-native-width': definition.geometry?.width,
        '--dash-native-height': definition.geometry?.height,
        '--dash-native-font-size': config.font_size === undefined ? definition.geometry?.fontSize : `${config.font_size}px`,
        '--dash-native-stroke': config.stroke,
      } : {},
    } as React.CSSProperties}>
      {definition.visualScale ? <span style={{display: 'grid', placeItems: 'center',
        width: `calc(${definition.geometry?.width} * ${definition.visualScale})`,
        height: `calc(${definition.geometry?.height} * ${definition.visualScale})`}}>
        <Component {...props}/>
      </span> : <Component {...props}/>}
    </div>
  </div>;
}

export function render(host: HTMLElement, Component: React.ElementType, definition: Definition) {
  let disposed = false;
  let root: ReturnType<typeof createRoot> | undefined;
  const config: Config = JSON.parse(host.dataset.dashSplashConfig!);
  const shadow = host.shadowRoot ?? host.attachShadow({mode: 'open'});
  const preview = host.dataset.dashSplashStatic && shadow.firstChild ? document.createElement('div') : undefined;
  if (preview) preview.append(...Array.from(shadow.childNodes, node => node.cloneNode(true)));
  const slot = document.createElement('slot');
  const style = document.createElement('style');
  // Upstream keyframes may be registered on import or during a later render.
  // Mirror only this family's rules, including color/size-dependent updates.
  const marker = definition.family === 'indicators' ? 'rli-' : definition.family === 'spinners' ? 'react-spinners-' : null;
  const mirrorStyles = () => {
    style.textContent = RESET + (marker
      ? Array.from(document.head.querySelectorAll('style')).map(node => {
          try { return Array.from(node.sheet?.cssRules ?? []).map(rule => rule.cssText).join('\n'); }
          catch { return node.textContent ?? ''; }
        }).filter(css => css.includes(marker)).join('\n') : '');
  };
  mirrorStyles();
  const styleObserver = marker ? new MutationObserver(mirrorStyles) : undefined;
  styleObserver?.observe(document.head, {childList: true, subtree: true, characterData: true});
  const container = document.createElement('div');
  container.style.display = 'none';
  shadow.replaceChildren(style, slot, ...preview ? [preview] : [], container);
  const failed = () => {
    host.dataset.dashSplashError = 'render';
    container.style.display = 'none';
    slot.hidden = false;
    delete host.dataset.dashSplashEnhanced;
  };
  const ready = () => {
    if (disposed) return;
    preview?.remove();
    slot.hidden = true;
    container.style.display = 'inline-flex';
    host.dataset.dashSplashEnhanced = 'true';
  };
  const mount = () => {
    if (disposed || !host.isConnected) return;
    // Measure while hidden from paint, not display:none (which yields zero size).
    container.style.cssText = 'display:inline-flex;position:absolute;visibility:hidden';
    root = createRoot(container, {identifierPrefix: 'dash-splash-'});
    root.render(<Boundary onError={failed}>
      <StyleSheetManager target={shadow}>
        <Artwork host={host} Component={Component} definition={definition} config={config} ready={() => {
          container.style.cssText = 'display:inline-flex';
          ready();
        }}/>
      </StyleSheetManager>
    </Boundary>);
  };
  let link: HTMLLinkElement | undefined;
  if (host.dataset.dashSplashCss) {
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = host.dataset.dashSplashCss;
    link.onload = mount;
    link.onerror = failed;
    shadow.prepend(link);
  } else mount();
  return () => {
    if (disposed) return;
    disposed = true;
    styleObserver?.disconnect();
    if (link) link.onload = link.onerror = null;
    root?.unmount();
    shadow.replaceChildren();
    delete host.dataset.dashSplashEnhanced;
  };
}
