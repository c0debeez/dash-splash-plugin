import{a as r}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as i,x as n,y as e,z as t}from"./shared-WHKIMZAY.js";function s({className:a,dots:l=3,...m}){return e(i,{children:[n("style",{children:`
        @keyframes loading-ui-bouncing-dots {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}),e("span",{role:"status",className:r("inline-flex items-center gap-[12%]",a),...m,children:[Array.from({length:l},(u,o)=>n("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-bouncing-dots var(--duration, 1.4s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${o})`}},o)),n("span",{className:"sr-only",children:"Loading"})]})]})}function b(a){return t(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{b as mount};
