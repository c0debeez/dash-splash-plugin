import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as o,l as i,o as s}from"./shared-QQL2K63A.js";var t=o(i());function l({className:e,children:p,dots:n=3,style:m,...u}){let d=Number.isFinite(n)?Math.max(1,Math.floor(n)):3;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @keyframes loading-ui-text-dots {
          0%,
          100% {
            opacity: 0;
          }

          50% {
            opacity: 1;
          }
        }
      `}),(0,t.jsxs)("span",{role:"status",className:r("inline-flex items-center",e),style:m,...u,children:[(0,t.jsx)("span",{children:p}),(0,t.jsx)("span",{"aria-hidden":"true",className:"inline-flex",children:Array.from({length:d},(f,a)=>(0,t.jsx)("span",{style:{animation:"loading-ui-text-dots var(--duration, 1.4s) infinite",animationDelay:`calc(var(--delay, 0.2s) * ${a+1})`},children:"."},a))})]})]})}function b(e){return s(e,l,{family:"loading-ui",geometry:{fontSize:"1.25rem"},visualScale:void 0,bindPlayback:void 0})}export{b as mount};
