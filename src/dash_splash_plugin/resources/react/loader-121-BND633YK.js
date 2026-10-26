import{a}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as t,x as n,y as e,z as o}from"./shared-WHKIMZAY.js";function i({className:r,...l}){return e(t,{children:[n("style",{children:`
        @keyframes loading-ui-clock-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),e("span",{role:"status",className:a("relative inline-block rounded-full border-2 border-current",r),style:{animation:"loading-ui-clock-ring-rotation var(--duration, 1.5s) linear infinite"},...l,children:[n("span",{"aria-hidden":"true",className:"absolute top-0 left-1/2 bg-current",style:{width:"6.25%",height:"50%",transform:"translateX(-50%)"}}),n("span",{className:"sr-only",children:"Loading"})]})]})}function f(r){return o(r,i,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{f as mount};
