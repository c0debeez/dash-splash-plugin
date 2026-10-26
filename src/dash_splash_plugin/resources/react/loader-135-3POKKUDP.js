import{a as o}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as n,x as r,y as e,z as a}from"./shared-WHKIMZAY.js";function i({className:t,...s}){return e(n,{children:[r("style",{children:`
        @keyframes loading-ui-orbit-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),e("span",{role:"status",className:o("relative inline-block",t),style:{animation:"loading-ui-orbit-ring-rotation var(--duration, 1s) linear infinite"},...s,children:[r("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{opacity:.25}}),r("span",{"aria-hidden":"true",className:"absolute top-1/2 left-1/2 rounded-full border-2 border-transparent border-b-current",style:{width:"116.667%",height:"116.667%",transform:"translate(-50%, -50%)"}}),r("span",{className:"sr-only",children:"Loading"})]})]})}function f(t){return a(t,i,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:1.1666666666666667,bindPlayback:void 0})}export{f as mount};
