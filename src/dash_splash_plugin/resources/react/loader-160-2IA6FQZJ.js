import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as i,l as o,o as t}from"./shared-NWYK6JU4.js";var a=i(o()),c=["50%","75%","100%","75%","50%"];function s({className:e,...l}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes loading-ui-wave {
          0%,
          100% {
            transform: scaleY(1);
          }

          50% {
            transform: scaleY(0.6);
          }
        }
      `}),(0,a.jsxs)("span",{role:"status",className:r("inline-flex items-center gap-[2.5%]",e),...l,children:[c.map((m,n)=>(0,a.jsx)("span",{"aria-hidden":"true",className:"inline-block rounded-full bg-current",style:{width:"12.5%",height:m,animation:"loading-ui-wave var(--duration, 1s) ease-in-out infinite",animationDelay:`calc(var(--delay, 100ms) * ${n})`}},n)),(0,a.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function g(e){return t(e,s,{family:"loading-ui",geometry:{width:"3rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
