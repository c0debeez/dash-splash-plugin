import{a as c}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as i,x as a,y as o,z as m}from"./shared-WHKIMZAY.js";var s=["\u2588","\u2593","\u2592","\u2591"];function d({className:n,blocks:p=s,size:u=5,style:f,...y}){let r=Math.max(2,Math.floor(u)),l=s.map((t,e)=>p[e]??s[e]);return o(i,{children:[a("style",{children:`
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
      `}),o("span",{role:"status",className:c("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-size":`${r}ch`,"--loader-x":`${r-1}ch`,"--loader-y":`${r-1}ch`,...f},...y,children:[l.map((t,e)=>a("span",{"aria-hidden":"true",className:"pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",style:{animation:"loading-ui-square-snake var(--duration, 2s) linear infinite",animationDelay:`calc(var(--delay, 0.125s) * -${l.length-1-e})`},children:t},`${t}-${e}`)),a("span",{className:"sr-only",children:"Loading"})]})]})}function q(n){return m(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{q as mount};
