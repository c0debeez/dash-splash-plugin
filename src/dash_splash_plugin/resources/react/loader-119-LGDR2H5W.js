import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as o,l as i,o as t}from"./shared-NWYK6JU4.js";var n=o(i());function s({className:a,dots:l=3,...m}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @keyframes loading-ui-bouncing-dots {
          0%,
          100% {
            transform: scale(0.8);
            opacity: 0.5;
          }

          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }
      `}),(0,n.jsxs)("span",{role:"status",className:r("inline-flex items-center gap-[12%]",a),...m,children:[Array.from({length:l},(u,e)=>(0,n.jsx)("span",{"aria-hidden":"true",className:"inline-block aspect-square grow rounded-full bg-current",style:{animation:"loading-ui-bouncing-dots var(--duration, 1.4s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.2s) * ${e})`}},e)),(0,n.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function y(a){return t(a,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{y as mount};
