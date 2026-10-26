import{a as i}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as o,x as n,y as t,z as a}from"./shared-WHKIMZAY.js";function r({className:e,...s}){return t(o,{children:[n("style",{children:`
        @keyframes loading-ui-pulse-dot {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.8;
          }

          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}),n("span",{role:"status",className:i("inline-block rounded-full bg-current",e),style:{animation:"loading-ui-pulse-dot var(--duration, 1.2s) ease-in-out infinite"},...s,children:n("span",{className:"sr-only",children:"Loading"})})]})}function f(e){return a(e,r,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{f as mount};
