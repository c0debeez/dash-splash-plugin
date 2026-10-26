import"./shared-KXBAZB5M.js";import{a as s}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as i,l as t,o}from"./shared-QQL2K63A.js";var a=i(t());function l({className:e,bars:n=3,...m}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes loading-ui-wave-bars {
          0%,
          100% {
            transform: scaleY(1);
            opacity: 0.5;
          }

          50% {
            transform: scaleY(0.6);
            opacity: 1;
          }
        }
      `}),(0,a.jsxs)("span",{role:"status",className:s("inline-flex items-stretch gap-[5%]",e),...m,children:[Array.from({length:n},(p,r)=>(0,a.jsx)("span",{"aria-hidden":"true",className:"inline-block h-full rounded-[1px] bg-current",style:{width:`${100/n}%`,animation:"loading-ui-wave-bars var(--duration, 1.2s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${r})`}},r)),(0,a.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function g(e){return o(e,l,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
