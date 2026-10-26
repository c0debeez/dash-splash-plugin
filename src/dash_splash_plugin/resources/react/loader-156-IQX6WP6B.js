import{a as l}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as n,x as e,y as t,z as r}from"./shared-WHKIMZAY.js";function o({className:a,...s}){return t(n,{children:[e("style",{children:`
        @keyframes loading-ui-triple-dot-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),t("span",{role:"status",className:l("relative inline-block shrink-0",a),...s,children:[t("span",{"aria-hidden":"true",className:"absolute inset-0",style:{animation:"loading-ui-triple-dot-rotation var(--duration, 2s) ease-in-out infinite"},children:[e("span",{className:"absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-current"}),e("span",{className:"absolute top-1/2 left-1/2 size-full -translate-x-[200%] -translate-y-1/2 rounded-full bg-current"}),e("span",{className:"absolute top-1/2 left-1/2 size-full translate-x-full -translate-y-1/2 rounded-full bg-current"})]}),e("span",{className:"sr-only",children:"Loading"})]})]})}function c(a){return r(a,o,{family:"loading-ui",geometry:{width:".6rem",height:".6rem"},visualScale:4.25,bindPlayback:void 0})}export{c as mount};
