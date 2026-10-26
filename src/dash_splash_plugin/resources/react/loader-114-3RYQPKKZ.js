import{a as s}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as l,x as a,y as t,z as c}from"./shared-WHKIMZAY.js";var i=["\u2588","\u2593","\u2592"];function d({className:n,blocks:m=i,track:p="\u2591",trackLength:u=16,style:f,...h}){let o=Math.max(2,Math.floor(u)),y=i.map((r,e)=>m[e]??i[e]);return t(l,{children:[a("style",{children:`
        @keyframes loading-ui-accordion-loader {
          0%,
          100% {
            transform: translateX(0);
          }

          50% {
            transform: translateX(var(--loader-x));
          }
        }
      `}),t("span",{role:"status",className:s("relative inline-flex h-[1em] w-[var(--loader-width)] items-center overflow-hidden font-mono text-xl leading-none text-current select-none",n),style:{"--loader-width":`${o}ch`,"--loader-x":`${o-1}ch`,...f},...h,children:[a("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 whitespace-nowrap",children:p.repeat(o)}),y.map((r,e)=>a("span",{"aria-hidden":"true",className:s("pointer-events-none absolute top-0 left-0 flex h-full w-[1ch] items-center justify-center text-center",["z-30","z-20","z-10"][e]),style:{animation:"loading-ui-accordion-loader var(--duration, 2.8s) ease-in-out infinite",animationDelay:`calc(var(--delay, 0.04s) * ${e})`,backgroundColor:"var(--mask-color, var(--background))"},children:r},`${r}-${e}`)),a("span",{className:"sr-only",children:"Loading"})]})]})}function x(n){return c(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{x as mount};
