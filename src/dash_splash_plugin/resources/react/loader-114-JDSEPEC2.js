import"./shared-KXBAZB5M.js";import{a as t}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as i,l,o as c}from"./shared-NWYK6JU4.js";var e=i(l()),s=["\u2588","\u2593","\u2592"];function d({className:n,blocks:m=s,track:p="\u2591",trackLength:u=16,style:f,...h}){let o=Math.max(2,Math.floor(u)),y=s.map((r,a)=>m[a]??s[a]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        @keyframes loading-ui-accordion-loader {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(var(--loader-x));
          }
        }
      `}),(0,e.jsxs)("span",{role:"status",className:t("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-width":`${o}ch`,"--loader-x":`${o-1}ch`,...f},...h,children:[(0,e.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:p.repeat(o)}),y.map((r,a)=>(0,e.jsx)("span",{"aria-hidden":"true",className:t("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][a]),style:{animation:"loading-ui-accordion-loader var(--duration, 2.8s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.04s) * ${a})`,backgroundColor:"var(--mask-color, var(--background))"},children:r},`${r}-${a}`)),(0,e.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function L(n){return c(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{L as mount};
