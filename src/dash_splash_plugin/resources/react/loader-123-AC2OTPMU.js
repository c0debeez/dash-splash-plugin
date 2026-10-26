import{a as o}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as t,x as n,y as e,z as a}from"./shared-WHKIMZAY.js";function i({className:r,...s}){return e(t,{children:[n("style",{children:`
        @keyframes loading-ui-concentric-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),e("span",{role:"status",className:o("relative inline-block",r),style:{animation:"loading-ui-concentric-ring-rotation var(--duration, 1s) linear infinite"},...s,children:[n("span",{"aria-hidden":"true",className:"absolute inset-0 rounded-full border-2 border-current",style:{opacity:.25}}),n("span",{"aria-hidden":"true",className:"absolute top-1/2 left-1/2 rounded-full border-2 border-transparent border-b-current",style:{width:"83.333%",height:"83.333%",transform:"translate(-50%, -50%)"}}),n("span",{className:"sr-only",children:"Loading"})]})]})}function f(r){return a(r,i,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{f as mount};
