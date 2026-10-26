import{a as i}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as n,x as t,y as e,z as r}from"./shared-WHKIMZAY.js";function o({className:a,...s}){return e(n,{children:[t("style",{children:`
        @keyframes loading-ui-twin-orbit-rotate {
          100% {
            transform: rotate(360deg) translate(155%);
          }
        }
      `}),e("span",{role:"status",className:i("relative inline-block aspect-square rounded-full bg-current",a),...s,children:[t("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full bg-current",style:{transform:"rotate(0deg) translate(155%)",animation:"loading-ui-twin-orbit-rotate var(--duration, 1s) ease infinite"}}),t("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full bg-current",style:{transform:"rotate(0deg) translate(155%)",animation:"loading-ui-twin-orbit-rotate var(--duration, 1s) ease infinite",animationDelay:"calc(var(--duration, 1s) / 2)"}}),t("span",{className:"sr-only",children:"Loading"})]})]})}function f(a){return r(a,o,{family:"loading-ui",geometry:{width:".6rem",height:".6rem"},visualScale:4.25,bindPlayback:void 0})}export{f as mount};
