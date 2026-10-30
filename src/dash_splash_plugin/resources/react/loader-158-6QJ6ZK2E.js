import"./shared-KXBAZB5M.js";import{a as o}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as r,l as t,o as i}from"./shared-NWYK6JU4.js";var n=r(t());function s({className:a,dots:l=3,...m}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @keyframes loading-ui-typing {
          0%,
          100% {
            transform: translateY(0);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-50%);
            opacity: 1;
          }
        }
      `}),(0,n.jsxs)("span",{role:"status",className:o("inline-flex items-center gap-[12%]",a),...m,children:[Array.from({length:l},(p,e)=>(0,n.jsx)("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-typing var(--duration, 1s) infinite",animationDelay:`calc(var(--delay, 160ms) * ${e})`}},e)),(0,n.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function g(a){return i(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
