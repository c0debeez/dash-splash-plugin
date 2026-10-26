import{a as o}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as r,x as e,y as a,z as i}from"./shared-WHKIMZAY.js";function t({className:n,...s}){return a(r,{children:[e("style",{children:`
        @keyframes loading-ui-thin-pulse {
          0%,
          100% {
            transform: scale(0.95);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.05);
            opacity: 0.4;
          }
        }
      `}),a("span",{role:"status",className:o("relative inline-block shrink-0",n),...s,children:[e("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{animation:"loading-ui-thin-pulse var(--duration, 1.5s) ease-in-out infinite"}}),e("span",{className:"sr-only",children:"Loading"})]})]})}function f(n){return i(n,t,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:1.05,bindPlayback:void 0})}export{f as mount};
