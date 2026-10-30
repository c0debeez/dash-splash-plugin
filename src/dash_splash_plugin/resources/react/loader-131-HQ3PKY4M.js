import"./shared-KXBAZB5M.js";import{a as c}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as o,l as i,o as l}from"./shared-NWYK6JU4.js";var n=o(i()),r=["\u2588","\u2593","\u2592","\u2591"];function m({className:e,blocks:f=r,...p}){let s=r.map((t,a)=>f[a]??r[a]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("style",{children:`
        @keyframes loading-ui-infinity-square-snake {
          0%,
          100% {
            transform: translate(4ch, 0);
          }

          12.5% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(0, 4ch);
          }

          37.5% {
            transform: translate(4ch, 4ch);
          }

          50% {
            transform: translate(4ch, 0);
          }

          62.5% {
            transform: translate(8ch, 0);
          }

          75% {
            transform: translate(8ch, 4ch);
          }

          87.5% {
            transform: translate(4ch, 4ch);
          }
        }
      `}),(0,n.jsxs)("span",{role:"status",className:c("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),...p,children:[s.map((t,a)=>(0,n.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",style:{animation:"loading-ui-infinity-square-snake var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * -${s.length-1-a})`},children:t},`${t}-${a}`)),(0,n.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function k(e){return l(e,m,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{k as mount};
