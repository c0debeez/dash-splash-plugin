import{a as o}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as t,x as n,y as e,z as i}from"./shared-WHKIMZAY.js";function s({className:a,dots:l=3,...m}){return e(t,{children:[n("style",{children:`
        @keyframes loading-ui-typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      `}),e("span",{role:"status",className:o("inline-flex items-center gap-[12%]",a),...m,children:[Array.from({length:l},(p,r)=>n("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-typing var(--duration, 1s) infinite",animationDelay:`calc(var(--delay, 160ms) * ${r})`}},r)),n("span",{className:"sr-only",children:"Loading"})]})]})}function b(a){return i(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{b as mount};
