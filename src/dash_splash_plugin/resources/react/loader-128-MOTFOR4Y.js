import{a as r}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as o,x as n,y as e,z as i}from"./shared-WHKIMZAY.js";function s({className:a,dots:l=3,...m}){return e(o,{children:[n("style",{children:`
        @keyframes loading-ui-dots-blink {
          0%,
          100% {
            opacity: 0.2;
          }

          20% {
            opacity: 1;
          }
        }
      `}),e("span",{role:"status",className:r("inline-flex items-center justify-center gap-[12%]",a),...m,children:[Array.from({length:l},(d,t)=>n("span",{"data-slot":"dot","aria-hidden":"true",style:{animation:"loading-ui-dots-blink var(--duration, 1.4s) infinite both",animationDelay:`calc(var(--delay, 0.2s) * ${t})`},className:"aspect-square grow rounded-full bg-current"},t)),n("span",{className:"sr-only",children:"Loading"})]})]})}function b(a){return i(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{b as mount};
