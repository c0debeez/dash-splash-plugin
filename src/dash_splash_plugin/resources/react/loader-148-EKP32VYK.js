import"./shared-KXBAZB5M.js";import{a as c}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as l,l as i,o as m}from"./shared-QQL2K63A.js";var e=l(i()),o=["\u2588","\u2593","\u2592","\u2591"];function d({className:n,blocks:p=o,size:u=5,style:f,...y}){let r=Math.max(2,Math.floor(u)),s=o.map((t,a)=>p[a]??o[a]);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        @keyframes loading-ui-square-snake {
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
      `}),(0,e.jsxs)("span",{role:"status",className:c("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-size":`${r}ch`,"--loader-x":`${r-1}ch`,"--loader-y":`${r-1}ch`,...f},...y,children:[s.map((t,a)=>(0,e.jsx)("span",{"aria-hidden":"true",className:"pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",style:{animation:"loading-ui-square-snake var(--duration, 2s) linear infinite",animationDelay:`calc(var(--delay, 0.125s) * -${s.length-1-a})`},children:t},`${t}-${a}`)),(0,e.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function x(n){return m(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{x as mount};
