import {test} from 'node:test';
import assert from 'node:assert/strict';
import {shadowStylesheet} from '../scripts/shadow-css.mjs';

test('Tailwind property defaults initialize inside the shadow without a browser feature gate', () => {
  const result = shadowStylesheet(`
    @layer properties {
      @supports (display: grid) { *,::before,::after { --tw-border-style:solid; --tw-translate-x:0; } }
    }
    @layer utilities { .border-2 {border-style:var(--tw-border-style);border-width:2px} }
    @supports (color:color-mix(in oklab,red,blue)) {.color{color:red}}
  `).toString();
  assert.ok(result.includes('@layer properties{*,:before,:after{'));
  assert.ok(result.includes('--tw-border-style:solid'));
  assert.ok(result.includes('--tw-translate-x:0'));
  assert.ok(!result.includes('@supports (display:grid)'));
  assert.ok(result.includes('@supports (color:'));
  assert.ok(result.includes('border-style:var(--tw-border-style)'));
  assert.equal(shadowStylesheet(result).toString(), result);
});
