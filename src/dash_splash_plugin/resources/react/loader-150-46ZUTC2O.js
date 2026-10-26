import{a as n}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as t,x as e,y as a,z as o}from"./shared-WHKIMZAY.js";var l=[1,2,3,4,5,5,4,3,2,1];function c({className:i,block:s="\u2588",track:r="\u2591",...y}){return a(t,{children:[e("style",{children:`
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
      `}),a("span",{role:"status",className:n("relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",i),...y,children:[l.map((m,p)=>a("span",{"aria-hidden":"true",className:"relative flex h-full w-[1ch] items-center justify-center",children:[e("span",{className:"opacity-30",children:r}),e("span",{className:"absolute inset-0 flex items-center justify-center",style:{animation:`loading-ui-symmetric-wave-${m} var(--duration, 2s) linear infinite`},children:s})]},p)),e("span",{className:"sr-only",children:"Loading"})]})]})}function h(i){return o(i,c,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{h as mount};
