import {dom} from './ssr_document.mjs';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {createCache, extractStyle} from '@ant-design/cssinjs';
import {writeFileSync} from 'node:fs';
import {ServerStyleSheet} from 'styled-components';
import {native} from '../build/static-components.mjs';
import {existsSync, readFileSync} from 'node:fs';
import {SpinLoader, LoadingLoader, ProgressLoader, SkeletonLoader} from './runtime/antd.tsx';

const previews = {};
for (const [name, Component] of Object.entries({spin: SpinLoader, loading: LoadingLoader,
  progress: ProgressLoader, skeleton: SkeletonLoader})) {
  const cache = createCache();
  const html = renderToStaticMarkup(React.createElement(Component, {color: 'currentColor', styleCache: cache}));
  previews[`antd:${name}`] = {html, css: extractStyle(cache, {plain: true})};
}
const bundledCSS = process.argv[1].replace(/\.cjs$/, '.css');
const importedCSS = existsSync(bundledCSS) ? readFileSync(bundledCSS, 'utf8') : '';
for (const {id, Component, defaults, family} of native) {
  const sheet = new ServerStyleSheet();
  try {
    const color = family === 'spinners' ? 'rgb(from currentColor r g b)' : 'currentColor';
    const geometry = id === 'spinners:propagate' ? {style: {width: 175, height: 15, display: 'grid', placeItems: 'center'}} : {};
    const html = renderToStaticMarkup(sheet.collectStyles(React.createElement(Component, {...defaults, color, ...geometry})));
    const styledCSS = sheet.getStyleElement().map(element => element.props.dangerouslySetInnerHTML.__html).join('\n');
    // HashLoader and similar components register keyframes while rendering.
    const css = Array.from(document.styleSheets).flatMap(sheet => Array.from(sheet.cssRules, rule => rule.cssText)).join('\n');
    previews[id] = {html, css: importedCSS + css + styledCSS};
  } finally {
    sheet.seal();
  }
}
writeFileSync(process.argv[2], JSON.stringify(previews) + '\n');
dom.window.close();
