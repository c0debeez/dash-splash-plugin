import"./shared-KXBAZB5M.js";import{a as t}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as c,l as m,o as d}from"./shared-NWYK6JU4.js";var r=c(m()),s=["\u2588","\u2593","\u2592"];function p({className:o,blocks:u=s,size:f=5,track:h="\u2591",style:y,...g}){let e=Math.max(2,Math.floor(f)),v=s.map((n,a)=>u[a]??s[a]),k=Array.from({length:e*e},(n,a)=>{let l=Math.floor(a/e),i=a%e;return l===0||l===e-1||i===0||i===e-1?h:" "});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-square-accordion {
          0% {
            transform: translate(0, 0);
          }

          15%,
          25% {
            transform: translate(var(--loader-x), 0);
          }

          40%,
          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          65%,
          75% {
            transform: translate(0, var(--loader-y));
          }

          90%,
          100% {
            transform: translate(0, 0);
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:t("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",o),style:{"--loader-size":`${e}ch`,"--loader-x":`${e-1}ch`,"--loader-y":`${e-1}ch`,...y},...g,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${e}, 1ch)`,gridTemplateRows:`repeat(${e}, 1ch)`},children:k.map((n,a)=>(0,r.jsx)("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:n},a))}),v.map((n,a)=>(0,r.jsx)("span",{"aria-hidden":"true",className:t("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][a]),style:{animation:"loading-ui-square-accordion var(--duration, 3.5s) linear infinite",animationDelay:`calc(var(--delay, 0.08s) * ${a})`,backgroundColor:"var(--mask-color, var(--background))"},children:n},`${n}-${a}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function x(o){return d(o,p,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{x as mount};
