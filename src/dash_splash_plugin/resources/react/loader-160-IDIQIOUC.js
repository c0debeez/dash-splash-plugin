import{a as r}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as o,x as a,y as n,z as t}from"./shared-WHKIMZAY.js";var c=["50%","75%","100%","75%","50%"];function s({className:e,...l}){return n(o,{children:[a("style",{children:`
        @keyframes loading-ui-wave {
          0%,
          100% {
            transform: scaleY(1);
          }

          50% {
            transform: scaleY(0.6);
          }
        }
      `}),n("span",{role:"status",className:r("inline-flex items-center gap-[2.5%]",e),...l,children:[c.map((m,i)=>a("span",{"aria-hidden":"true",className:"inline-block rounded-full bg-current",style:{width:"12.5%",height:m,animation:"loading-ui-wave var(--duration, 1s) ease-in-out infinite",animationDelay:`calc(var(--delay, 100ms) * ${i})`}},i)),a("span",{className:"sr-only",children:"Loading"})]})]})}function v(e){return t(e,s,{family:"loading-ui",geometry:{width:"3rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{v as mount};
