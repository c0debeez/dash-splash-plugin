import{a}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as e,x as r,y as t,z as o}from"./shared-WHKIMZAY.js";function i({className:n,...s}){return t(e,{children:[r("style",{children:`
        @keyframes loading-ui-quarter-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),r("span",{role:"status",className:a("inline-block rounded-full border-t-[3px] border-r-[3px] border-t-current border-r-transparent",n),style:{animation:"loading-ui-quarter-ring-rotation var(--duration, 1s) linear infinite"},...s,children:r("span",{className:"sr-only",children:"Loading"})})]})}function g(n){return o(n,i,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
