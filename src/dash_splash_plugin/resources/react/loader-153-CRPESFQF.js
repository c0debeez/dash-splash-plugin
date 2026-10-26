import{a as r}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as i,x as t,y as n,z as s}from"./shared-WHKIMZAY.js";function l({className:e,children:p,dots:a=3,style:m,...u}){let d=Number.isFinite(a)?Math.max(1,Math.floor(a)):3;return n(i,{children:[t("style",{children:`
        @keyframes loading-ui-text-dots {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      `}),n("span",{role:"status",className:r("inline-flex items-center",e),style:m,...u,children:[t("span",{children:p}),t("span",{"aria-hidden":"true",className:"inline-flex",children:Array.from({length:d},(f,o)=>t("span",{style:{animation:"loading-ui-text-dots var(--duration, 1.4s) infinite",animationDelay:`calc(var(--delay, 0.2s) * ${o+1})`},children:"."},o))})]})]})}function h(e){return s(e,l,{family:"loading-ui",geometry:{fontSize:"1.25rem"},visualScale:void 0,bindPlayback:void 0})}export{h as mount};
