import"./shared-KXBAZB5M.js";import{a as o}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as c,l as d,o as m}from"./shared-QQL2K63A.js";var r=c(d()),s=["\u2588","\u2593","\u2592"];function p({className:t,blocks:u=s,size:f=5,track:h="\u2591",style:y,...g}){let e=Math.max(2,Math.floor(f)),v=s.map((n,a)=>u[a]??s[a]),k=Array.from({length:e*e},(n,a)=>{let l=Math.floor(a/e),i=a%e;return l===0||l===e-1||i===0||i===e-1?h:" "});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @keyframes loading-ui-square-grid {
          0%,
          100% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(var(--loader-x), 0);
          }

          50% {
            transform: translate(var(--loader-x), var(--loader-y));
          }

          75% {
            transform: translate(0, var(--loader-y));
          }
        }
      `}),(0,r.jsxs)("span",{role:"status",className:o("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",t),style:{"--loader-size":`${e}ch`,"--loader-x":`${e-1}ch`,"--loader-y":`${e-1}ch`,...y},...g,children:[(0,r.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${e}, 1ch)`,gridTemplateRows:`repeat(${e}, 1ch)`},children:k.map((n,a)=>(0,r.jsx)("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:n},a))}),v.map((n,a)=>(0,r.jsx)("span",{"aria-hidden":"true",className:o("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][a]),style:{animation:"loading-ui-square-grid var(--duration, 2.8s) linear infinite",animationDelay:`calc(var(--delay, 0.06s) * ${a})`,backgroundColor:"var(--mask-color, var(--background))"},children:n},`${n}-${a}`)),(0,r.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function z(t){return m(t,p,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{z as mount};
