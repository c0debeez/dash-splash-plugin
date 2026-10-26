import {transform} from 'lightningcss';

export function shadowStylesheet(code) {
  return transform({
    code: Buffer.from(code), minify: true,
    visitor: {
      Rule: {
        'layer-block'(rule) {
          if (rule.value.name?.join('.') !== 'properties') return;
          if (!rule.value.rules.some(child => child.type === 'supports')) return;
          // @property registrations in shadow stylesheets are ignored by browsers.
          // Use Tailwind's own fallback initializers even on modern hosts.
          return {...rule, value: {...rule.value, rules: rule.value.rules.flatMap(child =>
            child.type === 'supports' ? child.value.rules : [child])}};
        },
      },
    },
  }).code;
}
