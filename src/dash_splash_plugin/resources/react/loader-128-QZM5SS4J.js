import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as t,l as o,o as i}from"./shared-QQL2K63A.js";var n=t(o());function s({className:a,dots:l=3,...m}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @keyframes loading-ui-dots-blink {
          0%,
          100% {
            opacity: 0.2;
          }

          20% {
            opacity: 1;
          }
        }
      `}),(0,n.jsxs)("span",{role:"status",className:r("inline-flex items-center justify-center gap-[12%]",a),...m,children:[Array.from({length:l},(d,e)=>(0,n.jsx)("span",{"data-slot":"dot","aria-hidden":"true",style:{animation:"loading-ui-dots-blink var(--duration, 1.4s) infinite both",animationDelay:`calc(var(--delay, 0.2s) * ${e})`},className:"aspect-square grow rounded-full bg-current"},e)),(0,n.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function g(a){return i(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
