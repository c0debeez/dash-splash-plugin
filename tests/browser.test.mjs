import {test, before, after} from 'node:test';
import assert from 'node:assert/strict';
import {spawn} from 'node:child_process';
import {readFile, mkdir} from 'node:fs/promises';
import {createServer} from 'node:net';
import {chromium} from 'playwright';

let browser, server, base;
const reactVersion = process.env.REACT_VERSION ?? '18.3.1';
const manifest = JSON.parse(await readFile('src/dash_splash_plugin/resources/manifest.json', 'utf8'));
before(async () => {
  const socket = createServer();
  await new Promise(resolve => socket.listen(0, '127.0.0.1', resolve));
  const port = socket.address().port;
  await new Promise(resolve => socket.close(resolve));
  base = `http://127.0.0.1:${port}`;
  const python = process.env.PYTHON ?? '../dash-antd-components/.venv/bin/python';
  server = spawn(python, ['tests/browser_app.py', String(port)], {stdio: ['ignore', 'ignore', 'pipe']});
  let logs = '';
  server.stderr.on('data', data => {logs = (logs + data).slice(-5000);});
  for (let i = 0; i < 100; i++) {
    if (server.exitCode !== null) throw new Error(logs);
    try { if ((await fetch(`${base}/host-react.js`)).ok) break; } catch {}
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  browser = await chromium.launch({headless: true, args: ['--no-sandbox']});
});
after(async () => { await browser?.close(); server?.kill('SIGTERM'); });

test('CSS, Motion and Canvas animate, pause and follow root theme changes', async () => {
  const page = await browser.newPage({viewport: {width: 1280, height: 800}});
  await mkdir('test-results', {recursive: true});
  for (const id of ['loading-ui:bobbing-dots', 'spinners:clip', 'loadersz:heatmapping', 'thinking-orbs:solving']) {
    await page.goto(`${base}/preview?loader=${encodeURIComponent(id)}`);
    await page.waitForSelector('[data-dash-splash-enhanced="true"]');
    await page.waitForTimeout(250);
    const first = await page.screenshot();
    await page.waitForTimeout(250);
    const second = await page.screenshot({path: `test-results/${id.replace(':', '-')}.png`});
    assert.notDeepEqual(first, second, `${id}: animation is static`);
    await page.goto(`${base}/preview?loader=${encodeURIComponent(id)}&playing=false`);
    await page.waitForSelector('[data-dash-splash-enhanced="true"]');
    await page.waitForTimeout(250);
    const paused = await page.screenshot();
    await page.waitForTimeout(250);
    assert.ok(paused.equals(await page.screenshot()), `${id}: paused animation still moves`);
  }
  await page.evaluate(() => { document.documentElement.className = 'dark'; });
  await page.waitForTimeout(50);
  assert.equal(await page.locator('[data-dash-splash-loader]').evaluate(host =>
    host.shadowRoot.querySelector('canvas')?.getAttribute('width') !== '0'), true);
  assert.equal(await page.locator('[data-dash-splash-loader]').evaluate(host => getComputedStyle(host).color), 'rgb(255, 255, 255)');
  await page.setViewportSize({width: 375, height: 640});
  await page.screenshot({path: 'test-results/mobile-dark.png'});
  await page.close();
});

test('every registered animation renders without changing host React or console errors', {timeout: 300000}, async () => {
  const page = await browser.newPage({viewport: {width: 375, height: 640}});
  const noHostReact = process.env.NO_HOST_REACT === '1';
  if (noHostReact) await page.route('**/host-react*.js*', route => route.fulfill({contentType: 'text/javascript', body: ''}));
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  const identifiers = process.env.ALL_LOADERS === '1' ? Object.keys(manifest.loaders) : [
    'antd:spin', 'antd:loading', 'antd:progress', 'antd:skeleton', 'loading-ui:fade-arc', 'loading-ui:bobbing-dots', 'loading-ui:text-shimmer', 'loading-ui:morphing-infinity',
    'loading-dev:arc', 'spinners:clip', 'spinners-react:spinner-circular',
    'ldrs:ring', 'loader-spinner:ball-triangle', 'premium:spinner-circle', 'indicators:atom',
    'm3:loading-indicator', ...Object.keys(manifest.loaders).filter(id => id.startsWith('epic:')),
    'flicker:mycelium', 'gridora:orbit',
    'gridora:text', 'loadersz:heatmapping', 'thinking-orbs:solving', 'lab:hplc-trace',
  ];
  for (const id of identifiers) {
    errors.length = 0;
    await page.goto(`${base}/preview?loader=${encodeURIComponent(id)}`);
    try { await page.waitForSelector('[data-dash-splash-enhanced="true"]', {timeout: 8000}); }
    catch (error) { throw new Error(`${id}: ${error.message}; errors=${JSON.stringify(errors)}`); }
    const result = await page.locator('[data-dash-splash-loader]').evaluate(host => {
      const art = host.shadowRoot.querySelector('.artwork');
      const rect = host.getBoundingClientRect();
      return {nodes: art.querySelectorAll('*').length,
        width: rect.width, height: rect.height, react: window.React?.version};
    });
    assert.ok(result.nodes > 0, `${id}: empty artwork`);
    assert.ok(result.width > 0 && result.height > 0 && result.width <= 375, `${id}: ${JSON.stringify(result)}`);
    assert.equal(result.react, noHostReact ? undefined : reactVersion);
    assert.deepEqual(errors, [], id);
  }
  await page.close();
});

test('native Ant Design presets have isolated styles, animation, theme and playback controls', async () => {
  const page = await browser.newPage({viewport: {width: 375, height: 640}});
  const selectors = {
    spin: '.ant-spin-dot-item', loading: '.anticon-loading',
    progress: '.ant-progress', skeleton: '.ant-skeleton-paragraph',
  };
  try {
    for (const [name, selector] of Object.entries(selectors)) {
      await page.goto(`${base}/preview?loader=antd:${name}&rate=2`);
      const host = page.locator('[data-dash-splash-enhanced="true"]');
      await host.waitFor();
      await page.waitForTimeout(300);
      const inspect = () => host.evaluate((element, selector) => {
        const shadow = element.shadowRoot;
        const native = shadow.querySelector(selector);
        const animations = shadow.querySelector('.artwork').getAnimations({subtree: true})
          .filter(animation => animation instanceof CSSAnimation);
        return {
          native: !!native, styles: shadow.querySelectorAll('style[data-css-hash]').length,
          primary: getComputedStyle(shadow.querySelector('.ant-spin, .ant-progress, .ant-skeleton')).color,
          running: animations.filter(animation => animation.playState === 'running').length,
          rates: animations.map(animation => animation.playbackRate),
          width: element.getBoundingClientRect().width,
        };
      }, selector);
      const active = await inspect();
      assert.equal(active.native, true, name);
      assert.ok(active.styles > 0, `${name}: CSS was not injected into the shadow`);
      assert.ok(active.running > 0, `${name}: no native animation`);
      assert.ok(active.rates.every(rate => rate === 2), `${name}: rate ignored`);
      assert.ok(active.width > 0 && active.width <= 375, `${name}: invalid geometry`);
      await page.evaluate(() => { document.documentElement.className = 'dark'; });
      await page.waitForTimeout(150);
      const dark = await inspect();
      assert.equal(dark.primary, 'rgb(255, 255, 255)', `${name}: theme color ignored`);
      assert.ok(dark.rates.every(rate => rate === 2), `${name}: theme reset the rate`);
      await page.goto(`${base}/preview?loader=antd:${name}&playing=false`);
      await page.waitForSelector('[data-dash-splash-enhanced="true"]');
      await page.waitForTimeout(500);
      assert.equal((await inspect()).running, 0, `${name}: pause ignored`);
      const paused = await host.screenshot();
      await page.waitForTimeout(250);
      assert.ok(paused.equals(await host.screenshot()), `${name}: paused image changed`);
      await page.emulateMedia({reducedMotion: 'reduce'});
      await page.goto(`${base}/preview?loader=antd:${name}`);
      await page.waitForSelector('[data-dash-splash-enhanced="true"]');
      assert.equal((await inspect()).running, 0, `${name}: reduced motion ignored`);
      await page.emulateMedia({reducedMotion: 'no-preference'});
    }
  } finally {
    await page.close();
  }
});

test('pre-rendered loaders animate before React with no component module requests', async () => {
  const page = await browser.newPage();
  const modules = [];
  page.on('request', request => {
    if (request.url().includes('/_dash-splash-plugin/react/')) modules.push(request.url());
  });
  await page.route('**/host-react*.js*', route => route.abort());
  try {
    for (const name of [...Object.keys(manifest.loaders).filter(name => /^(antd|epic|spinners|spinners-react):/.test(name)),
      'flicker:helix', 'flicker:mycelium']) {
      await page.goto(`${base}/preview?loader=${name}`);
      const host = page.locator('[data-dash-splash-enhanced="true"]');
      await host.waitFor();
      assert.equal(await page.evaluate(() => typeof window.React), 'undefined');
      assert.equal(await page.locator('.dash-splash__fallback').count(), 0);
      const animations = await host.evaluate(element => element.shadowRoot.querySelector('.artwork')
        .getAnimations({subtree: true}).filter(animation => animation.playState === 'running').length);
      assert.ok(animations > 0, `${name}: static markup is not animated`);
      // Progress deliberately holds its first keyframe for 20% of the cycle.
      await page.waitForTimeout(750);
      const first = await host.screenshot();
      await page.waitForTimeout(250);
      assert.notDeepEqual(first, await host.screenshot(), `${name}: artwork does not move without React`);
      assert.deepEqual(modules, [], `${name}: requested a React component module`);
      await page.evaluate(() => { document.querySelector('#react-entry-point').innerHTML = '<main>Ready</main>'; });
      await page.waitForSelector('[data-dash-splash]', {state: 'detached'});
    }
  } finally {
    await page.close();
  }
});

test('advanced options upgrade the pre-rendered preview to its native component', async () => {
  const page = await browser.newPage();
  try {
    const options = encodeURIComponent(JSON.stringify({animation_duration: 1600}));
    await page.goto(`${base}/preview?loader=epic:spring&options=${options}`);
    await page.waitForFunction(() => {
      const host = document.querySelector('[data-dash-splash-enhanced="true"]');
      return host?.shadowRoot && !host.shadowRoot.querySelector('style[data-css-hash="dash-splash-static"]');
    });
    const durations = await page.locator('[data-dash-splash-loader]').evaluate(host =>
      host.shadowRoot.querySelector('.artwork').getAnimations({subtree: true})
        .map(animation => animation.effect.getTiming().duration));
    assert.ok(durations.includes(1600), JSON.stringify(durations));
  } finally {
    await page.close();
  }
});

test('spinners dynamic keyframes survive advanced options and theme updates', async () => {
  const page = await browser.newPage();
  await page.route('**/host-react*.js*', route => route.fulfill({contentType: 'text/javascript', body: ''}));
  try {
    const options = encodeURIComponent(JSON.stringify({size: 48}));
    await page.goto(`${base}/preview?loader=spinners:hash&options=${options}`);
    await page.waitForFunction(() => {
      const shadow = document.querySelector('[data-dash-splash-enhanced="true"]')?.shadowRoot;
      return shadow && !shadow.querySelector('style[data-css-hash="dash-splash-static"]') &&
        (shadow.querySelector('.artwork')?.getAnimations({subtree: true}).length ?? 0) >= 2;
    });
    await page.evaluate(() => { document.documentElement.className = 'dark'; });
    await page.waitForFunction(() => {
      const artwork = document.querySelector('[data-dash-splash-loader]').shadowRoot.querySelector('.artwork');
      return getComputedStyle(artwork).color === 'rgb(255, 255, 255)' &&
        artwork.getAnimations({subtree: true}).length >= 2 &&
        [...artwork.querySelectorAll('span')].some(node => getComputedStyle(node).boxShadow.includes('255, 255, 255'));
    });
    const host = page.locator('[data-dash-splash-loader]');
    const first = await host.screenshot();
    await page.waitForTimeout(250);
    assert.notDeepEqual(first, await host.screenshot());
    assert.equal(await page.evaluate(() => typeof window.React), 'undefined');
  } finally {
    await page.close();
  }
});

test('development React accepts static JSX siblings and still warns for unkeyed dynamic lists', async () => {
  const page = await browser.newPage();
  const errors = [];
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('pageerror', error => errors.push(error.message));
  try {
    for (const id of ['antd:spin', 'antd:loading', 'antd:progress', 'antd:skeleton', 'loading-ui:fade-arc', 'loading-ui:text-shimmer', 'ldrs:ring']) {
      errors.length = 0;
      await page.goto(`${base}/preview?loader=${encodeURIComponent(id)}&development=true`);
      await page.waitForSelector('[data-dash-splash-enhanced="true"]');
      await page.waitForTimeout(100);
      assert.deepEqual(errors, [], id);
    }
    // Confirm this really is development React, not a production build hiding warnings.
    await page.evaluate(() => {
      const container = document.createElement('div');
      document.body.appendChild(container);
      const root = window.ReactDOM.createRoot(container);
      root.render(window.React.createElement('section', null,
        [window.React.createElement('span', null, 'Missing key')]));
    });
    await page.waitForFunction(() => document.querySelector('section span')?.textContent === 'Missing key');
    assert.ok(errors.some(message => message.includes('unique "key"')));
  } finally {
    await page.close();
  }
});

test('Loading UI rings keep visible borders and their native animations', async () => {
  const page = await browser.newPage();
  try {
    await mkdir('test-results', {recursive: true});
    for (const name of ['orbit-ring', 'concentric-ring', 'pulse', 'quarter-ring', 'clock-ring', 'satellite-ring', 'arc', 'dual-arc']) {
      await page.goto(`${base}/preview?loader=loading-ui:${name}`);
      const host = page.locator('[data-dash-splash-enhanced="true"]');
      await host.waitFor();
      const result = await host.evaluate(element => {
        const art = element.shadowRoot.querySelector('.artwork');
        const borders = [...art.querySelectorAll('*')].map(node => {
          const style = getComputedStyle(node);
          return ['Top', 'Right', 'Bottom', 'Left'].some(side =>
            parseFloat(style[`border${side}Width`]) > 0 &&
            style[`border${side}Style`] === 'solid' &&
            style[`border${side}Color`] !== 'rgba(0, 0, 0, 0)');
        });
        return {paintedBorder: borders.some(Boolean), animations: art.getAnimations({subtree: true}).length};
      });
      assert.equal(result.paintedBorder, true, `${name}: invisible border`);
      assert.ok(result.animations > 0, `${name}: native animation was lost`);
      const first = await host.screenshot({path: `test-results/${name}.png`});
      const coloredPixels = await page.evaluate(async encoded => {
        const image = new Image();
        image.src = `data:image/png;base64,${encoded}`;
        await image.decode();
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);
        const {data} = context.getImageData(0, 0, canvas.width, canvas.height);
        let colored = 0;
        for (let i = 0; i < data.length; i += 4) {
          if (data[i + 2] > data[i] + 30 && data[i + 2] > data[i + 1] + 15) colored++;
        }
        return colored;
      }, first.toString('base64'));
      assert.ok(coloredPixels > 50, `${name}: artwork is blank (${coloredPixels} colored pixels)`);
      await page.waitForTimeout(180);
      assert.notDeepEqual(first, await host.screenshot(), `${name}: artwork does not move`);
      await page.goto(`${base}/preview?loader=loading-ui:${name}&playing=false`);
      await host.waitFor();
      assert.equal(await host.evaluate(element => element.shadowRoot.querySelector('.artwork')
        .getAnimations({subtree: true}).every(animation => animation.playState === 'paused')), true);
      if (name === 'orbit-ring') {
        assert.equal(await host.evaluate(element => {
          const box = element.getBoundingClientRect();
          return [...element.shadowRoot.querySelectorAll('.dash-splash-native [aria-hidden]')].every(node => {
            const ring = node.getBoundingClientRect();
            return ring.left >= box.left - 1 && ring.top >= box.top - 1 &&
              ring.right <= box.right + 1 && ring.bottom <= box.bottom + 1;
          });
        }), true, 'orbit-ring: outer ring exceeds reserved geometry');
      }
    }
  } finally {
    await page.close();
  }
});

test('fallback, theme, pause, reduced motion, cleanup, and slow module races', async () => {
  const page = await browser.newPage();
  await page.route('**/host-react.js', route => route.abort());
  await page.goto(`${base}/preview`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  await page.unroute('**/host-react.js');
  await page.goto(`${base}/preview?loader=antd:spin&playing=false&theme=dark`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  assert.equal(await page.locator('[data-dash-splash]').evaluate(el => getComputedStyle(el).backgroundColor), 'rgb(0, 0, 0)');
  assert.equal(await page.locator('[data-dash-splash-loader]').evaluate(el => getComputedStyle(el).color), 'rgb(255, 255, 255)');
  const paused = await page.locator('[data-dash-splash-loader]').evaluate(host =>
    host.shadowRoot.querySelector('.artwork').getAnimations({subtree: true}).every(animation => animation.playState === 'paused'));
  assert.equal(paused, true);
  await page.evaluate(() => { document.querySelector('#react-entry-point').innerHTML = '<main>Ready</main>'; });
  await page.waitForSelector('[data-dash-splash]', {state: 'detached'});
  await page.route('**/_dash-splash-plugin/react/*.js', async route => {
    await new Promise(resolve => setTimeout(resolve, 100));
    await route.continue();
  });
  await page.goto(`${base}/preview?loader=loading-ui:bobbing-dots`);
  await page.evaluate(() => { document.querySelector('#react-entry-point').innerHTML = '<main>Ready</main>'; });
  await page.waitForTimeout(300);
  assert.equal(await page.locator('[data-dash-splash]').count(), 0);
  await page.unroute('**/_dash-splash-plugin/react/*.js');
  await page.emulateMedia({reducedMotion: 'reduce'});
  await page.goto(`${base}/preview?loader=antd:spin`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  assert.equal(await page.locator('[data-dash-splash-loader]').evaluate(host => !!host.shadowRoot.querySelector('.dlc-paused')), true);
  await page.close();
});

test('native speed and playback options override common configuration', async () => {
  const page = await browser.newPage();
  const options = encodeURIComponent(JSON.stringify({duration: 1600, play_state: 'running'}));
  await page.goto(`${base}/preview?loader=loading-dev:arc&rate=2&playing=false&options=${options}`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  const animations = await page.locator('[data-dash-splash-loader]').evaluate(host =>
    host.shadowRoot.querySelector('.artwork').getAnimations({subtree: true})
      .map(animation => ({state: animation.playState, duration: animation.effect.getTiming().duration})));
  assert.ok(animations.length > 0);
  assert.ok(animations.every(item => item.state === 'running' && item.duration === 1600), JSON.stringify(animations));
  await page.close();
});

test('host React is isolated; module errors and stylesheet errors retain safe fallbacks', async () => {
  const page = await browser.newPage();
  await page.route('**/host-react.js', route => route.fulfill({contentType: 'text/javascript',
    body: 'window.React={version:"17.0.2"};'}));
  await page.goto(`${base}/preview`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  await page.unroute('**/host-react.js');
  await page.route('**/_dash-splash-plugin/react/loader-*.js', route => route.fulfill({contentType: 'text/javascript',
    body: 'export function mount(){throw new Error("Test render failure")}'}));
  await page.goto(`${base}/preview`);
  await page.waitForSelector('[data-dash-splash-error="resource"]');
  assert.equal(await page.locator('.dash-splash__fallback').isVisible(), true);
  await page.unroute('**/_dash-splash-plugin/react/loader-*.js');
  await page.route('**/_dash-splash-plugin/react/*.css', route => route.abort());
  await page.goto(`${base}/preview?loader=gridora:orbit`);
  await page.waitForSelector('[data-dash-splash-error="render"]');
  assert.equal(await page.locator('.dash-splash__fallback').isVisible(), true);
  await page.unroute('**/_dash-splash-plugin/react/*.css');
  await page.goto(`${base}/preview?loader=antd:spin`);
  await page.waitForSelector('[data-dash-splash-enhanced="true"]');
  await page.evaluate(() => { window.__dashSplashStart(); window.__dashSplashStart(); });
  assert.equal(await page.locator('[data-dash-splash]').count(), 1);
  await page.evaluate(() => { document.querySelector('[data-dash-splash]').remove(); });
  await page.waitForTimeout(100);
  assert.equal(await page.locator('[data-dash-splash]').count(), 0);
  await page.close();
});

test('usage gallery switches real callback previews across animation families', {timeout: 45000}, async () => {
  const socket = createServer();
  await new Promise(resolve => socket.listen(0, '127.0.0.1', resolve));
  const port = socket.address().port;
  await new Promise(resolve => socket.close(resolve));
  const python = process.env.PYTHON ?? '../dash-antd-components/.venv/bin/python';
  const gallery = spawn(python, ['-c',
    `import usage; usage.app.run(host="127.0.0.1",port=${port},debug=False)`],
    {stdio: ['ignore', 'ignore', 'pipe']});
  let logs = '';
  gallery.stderr.on('data', data => {logs = (logs + data).slice(-5000);});
  const page = await browser.newPage({viewport: {width: 1280, height: 900}});
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  try {
    for (let i = 0; i < 100; i++) {
      if (gallery.exitCode !== null) throw new Error(logs);
      try { if ((await fetch(`http://127.0.0.1:${port}`)).ok) break; } catch {}
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    await page.goto(`http://127.0.0.1:${port}`);
    const preview = page.frameLocator('#loader-preview');
    await preview.locator('[data-dash-splash-enhanced="true"]').waitFor();
    let selectedLibrary = 'loading-ui';
    for (const id of ['antd:spin', 'antd:loading', 'antd:progress', 'antd:skeleton', 'loading-ui:bobbing-dots', 'loading-ui:orbit-ring', 'loading-ui:concentric-ring',
      'loading-ui:pulse', 'loading-ui:quarter-ring', 'ldrs:ring', 'loadersz:heatmapping', 'flicker:mail']) {
      const [library, name] = id.split(':');
      if (library !== selectedLibrary) {
        await page.evaluate(value => window.dash_clientside.set_props('loader-library', {value}), library);
        await page.waitForFunction(value => document.querySelector('#loader-preview').srcdoc.includes(`data-dash-splash-loader="${value}:`), library);
        selectedLibrary = library;
      }
      await page.evaluate(value => window.dash_clientside.set_props('loader-name', {value}), id);
      await preview.locator(`[data-dash-splash-loader="${id}"][data-dash-splash-enhanced="true"]`).waitFor();
      assert.ok((await page.locator('#loader-code').textContent()).includes(`loader='${id}'`));
      const module = await preview.locator('[data-dash-splash-loader]').getAttribute('data-dash-splash-module');
      assert.ok(module.endsWith(manifest.loaders[id].module), `${id}: stale module ${module}`);
      if (['orbit-ring', 'concentric-ring', 'pulse', 'quarter-ring'].includes(name)) {
        await page.locator('#loader-preview').screenshot({path: `test-results/gallery-${name}.png`});
      }
    }
    await page.evaluate(() => window.dash_clientside.set_props('loader-color', {value: 'green'}));
    await page.waitForFunction(() => document.querySelector('#loader-preview').srcdoc.includes('--dash-splash-color:#52c41a'));
    await preview.locator('[data-dash-splash-enhanced="true"]').waitFor();
    assert.equal(await preview.locator('[data-dash-splash-loader]').evaluate(host => getComputedStyle(host).color), 'rgb(82, 196, 26)');
    assert.deepEqual(errors, []);
    assert.equal(await preview.locator('[data-dash-splash]').evaluate(host => getComputedStyle(host).backgroundColor), 'rgb(255, 255, 255)');
    assert.ok(await page.locator('#loader-code .hljs-keyword').count() > 0);
    await page.screenshot({path: 'test-results/gallery-selected.png'});
  } finally {
    await page.close();
    gallery.kill('SIGTERM');
  }
});
