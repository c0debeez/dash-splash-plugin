import { build } from 'esbuild';
import { parse } from '@babel/parser';
import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir, rm, rename } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import {shadowStylesheet} from './shadow-css.mjs';

const require = createRequire(import.meta.url);
const root = process.cwd();
const ui = process.argv[2];
const directory = path.join(root, 'build/react-entries');
const output = path.join(root, 'build/react-bundles');
await mkdir(directory, { recursive: true });
await rm(output, { recursive: true, force: true });
const input = JSON.parse(await readFile('build/catalog-input.json', 'utf8'));
const css = path.join(directory, 'loading-ui.css');
const theme = `@layer base, utilities;
@import "tailwindcss/preflight" layer(base);
@import "tailwindcss/utilities" layer(utilities);
@theme {--color-muted:currentColor;--radius-md:4px;--spacing:.25rem;--shadow-sm:0 1px 3px #0002;--font-mono:monospace;--text-xl:1.25rem;}
@source "${ui}/registry/components/loading-ui";`;
await writeFile(path.join(directory, 'input.css'), theme);
execFileSync(path.join(root, 'node_modules/.bin/tailwindcss'), ['-i', path.join(directory, 'input.css'), '-o', css, '--minify'], { stdio: 'inherit' });
await writeFile(css, shadowStylesheet(await readFile(css)));

function schema(node) {
  if (node.type === 'MemberExpression') {
    if (node.property.name === 'isRequired') return { ...schema(node.object), required: true };
    return { type: node.property.name };
  }
  if (node.type === 'CallExpression') {
    const type = node.callee.property?.name;
    if (type === 'oneOf') return { type, values: node.arguments[0].elements.map(item => item.value) };
    if (type === 'oneOfType') return { type, values: node.arguments[0].elements.map(schema) };
    if (type === 'arrayOf' || type === 'objectOf') return { type, items: schema(node.arguments[0]) };
    if (type === 'shape' || type === 'exact') return {
      type, properties: Object.fromEntries(
        node.arguments[0].properties.map(property => [property.key.name ?? property.key.value, schema(property.value)]))
    };
    return { type };
  }
  return { type: 'any' };
}

const sources = new Map();
const loaders = {};
const entries = {};
for (const item of input) {
  let metadata = sources.get(item.source);
  if (!metadata) {
    const file = `loader-${sources.size}`;
    const legacy = item.family === 'loading-ui';
    const motion = legacy && /from ["']motion\/react["']/.test(await readFile(item.source, 'utf8'));
    const properties = {};
    if (!legacy && item.family !== 'antd') {
      const ast = parse(await readFile(item.source, 'utf8'), { sourceType: 'module', plugins: ['jsx'] });
      for (const statement of ast.program.body) {
        const expression = statement.expression;
        if (expression?.type === 'AssignmentExpression' && expression.left?.property?.name === 'propTypes') {
          for (const property of expression.right.properties) properties[property.key.name ?? property.key.value] = schema(property.value);
        }
      }
    }
    metadata = { file, properties };
    sources.set(item.source, metadata);
    const geometry = legacy ? { width: '2rem', height: '2rem' } : undefined;
    if (legacy && item.name.startsWith('text-')) { delete geometry.width; delete geometry.height; geometry.fontSize = '1.25rem'; }
    if (legacy && ['infinity', 'morphing-infinity'].includes(item.name)) Object.assign(geometry, { width: '3rem', height: '3rem' });
    if (legacy && item.name === 'wave') Object.assign(geometry, { width: '3rem', height: '2rem' });
    if (legacy && ['triple-dot-spinner', 'twin-orbit'].includes(item.name)) Object.assign(geometry, { width: '.6rem', height: '.6rem' });
    const visualScale = legacy ? {
      'triple-dot-spinner': 4.25, 'twin-orbit': 4.25,
      'orbit-ring': 7 / 6, 'pulse': 1.05,
    }[item.name] : undefined;
    const source = `${legacy ? `import ${JSON.stringify(css)};` : ''}
import ${item.symbol ? `{${item.symbol} as Component}` : 'Component'} from ${JSON.stringify(item.source)};
import {render} from ${JSON.stringify(path.join(root, 'scripts/runtime/react-mount.tsx'))};
${motion ? `import {bindMotionPlayback} from ${JSON.stringify(path.join(root, 'scripts/runtime/motion-playback.ts'))};` : ''}
${!legacy && item.family !== 'antd' ? `// Empty upstream defaults trigger a React 18 deprecation warning without providing values.
if (Component.defaultProps && Object.keys(Component.defaultProps).length === 0) delete Component.defaultProps;` : ''}
export function mount(host) { return render(host, Component, {family:${JSON.stringify(item.family)},geometry:${JSON.stringify(geometry) ?? 'undefined'},visualScale:${visualScale ?? 'undefined'},bindPlayback:${motion ? 'bindMotionPlayback' : 'undefined'}}); }
`;
    await writeFile(path.join(directory, `${file}.tsx`), source);
    entries[file] = path.join(directory, `${file}.tsx`);
  }
  loaders[item.id] = { family: item.family, minReact: item.family === 'loading-dev' ? 19 : 18, module: `${metadata.file}.js`, defaults: item.defaults ?? {}, options: metadata.properties };
}

const bridges = {
  name: 'dash-host-react',
  setup(builder) {
    builder.onResolve({ filter: /^react(?:-dom)?(?:\/.*)?$/ }, args => ({ path: args.path, namespace: 'dash-react' }));
    builder.onLoad({ filter: /.*/, namespace: 'dash-react' }, args => {
      if (args.path === 'react/jsx-runtime' || args.path === 'react/jsx-dev-runtime') {
        return {
          contents: `const React=window.React;export const Fragment=React.Fragment;
export function jsx(type, props, key){const config={...props};if(key!==undefined)config.key=key;return React.createElement(type,config);}
// Static JSX siblings are separate arguments; nested dynamic lists stay arrays.
export function jsxs(type, props, key){const {children,...config}=props??{};if(key!==undefined)config.key=key;return Array.isArray(children)?React.createElement(type,config,...children):React.createElement(type,config,children);}
export function jsxDEV(type, props, key, isStaticChildren){return (isStaticChildren?jsxs:jsx)(type,props,key);}`};
      }
      const dom = args.path.startsWith('react-dom');
      const names = Object.keys(require(dom ? 'react-dom' : 'react')).filter(name => /^[A-Za-z_$][\w$]*$/.test(name) && name !== 'default');
      if (dom) names.push('createRoot', 'hydrateRoot');
      return { contents: `const host=window.${dom ? 'ReactDOM' : 'React'};export default host;export const {${[...new Set(names)].join(',')}}=host;` };
    });
  },
};
const result = await build({
  entryPoints: entries, outdir: output, bundle: true, splitting: true,
  format: 'esm', platform: 'browser', target: 'es2020', minify: true, metafile: true,
  jsx: 'automatic', define: { 'process.env.NODE_ENV': '"production"' },
  loader: { '.js': 'jsx' }, nodePaths: [path.join(root, 'node_modules'), path.join(root, 'scripts/react19/node_modules')], plugins: [bridges],
  alias: { '@/lib/utils': path.join(root, 'scripts/runtime/cn.ts') },
  entryNames: '[name]-[hash]', chunkNames: 'shared-[hash]', assetNames: 'asset-[hash]', legalComments: 'eof'
});
for (const loader of Object.values(loaders)) {
  const entry = Object.entries(result.metafile.outputs).find(([, info]) => info.entryPoint &&
    path.basename(info.entryPoint, '.tsx') === path.basename(loader.module, '.js'));
  const bundle = entry?.[1];
  loader.module = path.basename(entry[0]);
  if (bundle?.cssBundle) loader.css = path.basename(bundle.cssBundle);
}
// Defaults differ for presets sharing one component; keep them in host data, not duplicated bundles.
const files = Object.keys(result.metafile.outputs).map(name => path.basename(name));
await writeFile(path.join(output, 'manifest.json'), JSON.stringify({ schema_version: 1, loaders, files }, null, 2) + '\n');
await writeFile(path.join(root, 'build/react-metafile.json'), JSON.stringify(result.metafile));
const resources = path.join(root, 'src/dash_splash_plugin/resources');
await mkdir(resources, { recursive: true });
await rm(path.join(resources, 'react'), { recursive: true, force: true });
await rename(output, path.join(resources, 'react'));
await rename(path.join(resources, 'react/manifest.json'), path.join(resources, 'manifest.json'));
