import { build } from 'esbuild';
import { parse } from '@babel/parser';
import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir, rm, rename } from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import {shadowStylesheet} from './shadow-css.mjs';

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
  const sourceKey = JSON.stringify([item.source, item.symbol ?? 'default']);
  let metadata = sources.get(sourceKey);
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
    sources.set(sourceKey, metadata);
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

const privateReact = createRequire(path.join(root, 'scripts/react19/package.json'));
const bridges = {
  name: 'dash-private-react',
  setup(builder) {
    builder.onResolve({ filter: /^react(?:-dom)?(?:\/.*)?$/ }, args => ({path: privateReact.resolve(args.path)}));
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
const staticBuilder = path.join(root, 'build/static-loaders.cjs');
const staticFamilies = new Set(['epic', 'flicker', 'spinners', 'spinners-react']);
const nativeEntries = input.filter(item => staticFamilies.has(item.family));
const nativeSources = [...new Set(nativeEntries.map(item => item.source))];
await writeFile(path.join(root, 'build/static-components.mjs'),
  nativeSources.map((source, index) => `import C${index} from ${JSON.stringify(source)};`).join('\n') +
  `\nexport const native = [${nativeEntries.map(item => `{id:${JSON.stringify(item.id)},family:${JSON.stringify(item.family)},defaults:${JSON.stringify(item.defaults ?? {})},Component:C${nativeSources.indexOf(item.source)}}`).join(',')}];\n`);
await rm(staticBuilder.replace(/\.cjs$/, '.css'), {force: true});
await build({
  entryPoints: [path.join(root, 'scripts/build_static_loaders.mjs')], outfile: staticBuilder,
  bundle: true, platform: 'node', format: 'cjs', target: 'node20', jsx: 'automatic',
  loader: {'.js': 'jsx'},
  mainFields: ['module', 'main'],
  external: ['react', 'react-dom', 'react-dom/*', 'jsdom'],
  define: {'process.env.NODE_ENV': '"production"'},
});
execFileSync(process.execPath, [staticBuilder, path.join(resources, 'static-loaders.json')],
  {env: {...process.env, NODE_ENV: 'production'}});
await rm(path.join(resources, 'react'), { recursive: true, force: true });
await rename(output, path.join(resources, 'react'));
await rename(path.join(resources, 'react/manifest.json'), path.join(resources, 'manifest.json'));
