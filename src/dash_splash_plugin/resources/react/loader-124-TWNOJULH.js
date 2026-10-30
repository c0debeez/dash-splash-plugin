import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as c,l as p,o as m}from"./shared-NWYK6JU4.js";var e=c(p()),s=["\u2588","\u2593","\u2592"];function d({className:n,blocks:u=s,track:f="\u2591",trackLength:y=10,style:h,...v}){let a=Math.max(2,Math.floor(y)),l=s.map((t,o)=>u[o]??s[o]),i=l.length-1;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        @keyframes loading-ui-conveyor-loop {
          0% {
            transform: translateX(var(--loader-start-x));
          }

          100% {
            transform: translateX(var(--loader-end-x));
          }
        }
      `}),(0,e.jsxs)("span",{role:"status",className:r("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-width":`${a}ch`,"--loader-start-x":`-${i}ch`,"--loader-end-x":`${a+i}ch`,...h},...v,children:[(0,e.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:f.repeat(a)}),l.map((t,o)=>(0,e.jsx)("span",{"aria-hidden":"true",className:r("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][o]),style:{animation:"loading-ui-conveyor-loop var(--duration, 1.8s) linear infinite",animationDelay:`calc(var(--delay, 0.05s) * ${o})`,backgroundColor:"var(--mask-color, var(--background))"},children:t},`${t}-${o}`)),(0,e.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function w(n){return m(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{w as mount};
