import{a as s}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as p,x as o,y as r,z as m}from"./shared-WHKIMZAY.js";var l=["\u2588","\u2593","\u2592"];function d({className:n,blocks:u=l,track:f="\u2591",trackLength:y=10,style:h,...v}){let a=Math.max(2,Math.floor(y)),i=l.map((t,e)=>u[e]??l[e]),c=i.length-1;return r(p,{children:[o("style",{children:`
        @keyframes loading-ui-conveyor-loop {
          0% {
            transform: translateX(var(--loader-start-x));
          }

          100% {
            transform: translateX(var(--loader-end-x));
          }
        }
      `}),r("span",{role:"status",className:s("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-width":`${a}ch`,"--loader-start-x":`-${c}ch`,"--loader-end-x":`${a+c}ch`,...h},...v,children:[o("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:f.repeat(a)}),i.map((t,e)=>o("span",{"aria-hidden":"true",className:s("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][e]),style:{animation:"loading-ui-conveyor-loop var(--duration, 1.8s) linear infinite",animationDelay:`calc(var(--delay, 0.05s) * ${e})`,backgroundColor:"var(--mask-color, var(--background))"},children:t},`${t}-${e}`)),o("span",{className:"sr-only",children:"Loading"})]})]})}function L(n){return m(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{L as mount};
