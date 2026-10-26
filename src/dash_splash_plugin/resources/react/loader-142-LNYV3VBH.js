import{a as i}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as r,x as e,y as n,z as a}from"./shared-WHKIMZAY.js";function o({className:t,...l}){return n(r,{children:[e("style",{children:`
        @keyframes loading-ui-satellite-ring-rotation {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `}),n("span",{role:"status",className:i("relative inline-block rounded-full border-2 border-current/25",t),style:{animation:"loading-ui-satellite-ring-rotation var(--duration, 1.5s) linear infinite"},...l,children:[e("span",{"aria-hidden":"true",className:"absolute top-0 left-0 rounded-full bg-current",style:{width:"33.333%",height:"33.333%",transform:"translate(-50%, 50%)"}}),e("span",{className:"sr-only",children:"Loading"})]})]})}function g(t){return a(t,o,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
