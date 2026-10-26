import{a as e}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as i,x as r,y as o,z as t}from"./shared-WHKIMZAY.js";function a({className:n,style:m,...d}){return o(i,{children:[r("style",{children:`
        @keyframes loading-ui-arc-spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}),r("div",{className:e("rounded-full border-[5px] border-current/10 border-t-current",n),style:{animationName:"loading-ui-arc-spin",animationDuration:"var(--duration, 1s)",animationTimingFunction:"linear",animationIterationCount:"infinite",...m},...d})]})}function g(n){return t(n,a,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
