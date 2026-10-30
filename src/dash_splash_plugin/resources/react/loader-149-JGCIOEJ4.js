import"./shared-5VWDGKKA.js";import{b as e,l as n,o}from"./shared-NWYK6JU4.js";var i=e(n());function s(r){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        @keyframes loading-ui-swirling-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loading-ui-swirling-dash {
          0% {
            stroke-dasharray: 1, 800;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -200px;
          }
          100% {
            stroke-dasharray: 800, 1;
            stroke-dashoffset: -800px;
          }
        }

        .loading-ui-swirling-circle {
          transform-origin: center;
          animation:
            loading-ui-swirling-dash var(--duration, 1.5s) ease-in-out infinite alternate,
            loading-ui-swirling-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite;
        }
      `}),(0,i.jsx)("svg",{viewBox:"0 0 800 800",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,i.jsx)("circle",{className:"loading-ui-swirling-circle",cx:"400",cy:"400",r:"200",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"50"})})]})}function g(r){return o(r,s,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{g as mount};
