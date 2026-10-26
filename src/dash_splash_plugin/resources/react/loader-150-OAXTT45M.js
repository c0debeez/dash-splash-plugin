import"./shared-KXBAZB5M.js";import{a as n}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as i,l as t,o}from"./shared-QQL2K63A.js";var e=i(t()),l=[1,2,3,4,5,5,4,3,2,1];function c({className:a,block:s="\u2588",track:r="\u2591",...y}){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        @keyframes loading-ui-symmetric-wave-1 {
          0%,
          100% {
            opacity: 1;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5%,
          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-2 {
          0%,
          100% {
            opacity: 0.6;
          }

          12.5%,
          87.5% {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 0.3;
          }

          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-3 {
          0%,
          100% {
            opacity: 0.3;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 1;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 0.3;
          }
        }

        @keyframes loading-ui-symmetric-wave-4 {
          0%,
          100% {
            opacity: 0;
          }

          12.5%,
          87.5% {
            opacity: 0.3;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 1;
          }

          50% {
            opacity: 0.6;
          }
        }

        @keyframes loading-ui-symmetric-wave-5 {
          0%,
          100%,
          12.5%,
          87.5% {
            opacity: 0;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }
      `}),(0,e.jsxs)("span",{role:"status",className:n("relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",a),...y,children:[l.map((m,p)=>(0,e.jsxs)("span",{"aria-hidden":"true",className:"relative flex h-full w-[1ch] items-center justify-center",children:[(0,e.jsx)("span",{className:"opacity-30",children:r}),(0,e.jsx)("span",{className:"absolute inset-0 flex items-center justify-center",style:{animation:`loading-ui-symmetric-wave-${m} var(--duration, 2s) linear infinite`},children:s})]},p)),(0,e.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function w(a){return o(a,c,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{w as mount};
