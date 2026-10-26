import{a as s}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as t,x as a,y as n,z as o}from"./shared-WHKIMZAY.js";function l({className:e,bars:r=3,...m}){return n(t,{children:[a("style",{children:`
        @keyframes loading-ui-wave-bars {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 1;
          }
        }
      `}),n("span",{role:"status",className:s("inline-flex items-stretch gap-[5%]",e),...m,children:[Array.from({length:r},(p,i)=>a("span",{"aria-hidden":"true",className:"inline-block h-full rounded-[1px] bg-current",style:{width:`${100/r}%`,animation:"loading-ui-wave-bars var(--duration, 1.2s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${i})`}},i)),a("span",{className:"sr-only",children:"Loading"})]})]})}function h(e){return o(e,l,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{h as mount};
