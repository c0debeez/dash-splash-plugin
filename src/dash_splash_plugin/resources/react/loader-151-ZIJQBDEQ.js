import"./shared-KXBAZB5M.js";import{a as t}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as i,l as a,o as r}from"./shared-NWYK6JU4.js";var n=i(a());function o({className:e,prompt:m=">",style:s,...l}){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @keyframes loading-ui-terminal-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0;
          }
        }
      `}),(0,n.jsxs)("span",{role:"status",className:t("inline-flex items-center gap-[0.25em] font-mono",e),style:s,...l,children:[(0,n.jsx)("span",{"aria-hidden":"true",children:m}),(0,n.jsx)("span",{"aria-hidden":"true",className:"inline-block w-[0.5em] bg-current",style:{height:"1em",animation:"loading-ui-terminal-blink var(--duration, 1s) step-end infinite"}}),(0,n.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function y(e){return r(e,o,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{y as mount};
