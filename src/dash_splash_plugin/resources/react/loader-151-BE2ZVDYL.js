import{a as t}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as a,x as n,y as i,z as r}from"./shared-WHKIMZAY.js";function o({className:e,prompt:m=">",style:s,...l}){return i(a,{children:[n("style",{children:`
        @keyframes loading-ui-terminal-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}),i("span",{role:"status",className:t("inline-flex items-center gap-[0.25em] font-mono",e),style:s,...l,children:[n("span",{"aria-hidden":"true",children:m}),n("span",{"aria-hidden":"true",className:"inline-block w-[0.5em] bg-current",style:{height:"1em",animation:"loading-ui-terminal-blink var(--duration, 1s) step-end infinite"}}),n("span",{className:"sr-only",children:"Loading"})]})]})}function g(e){return r(e,o,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
