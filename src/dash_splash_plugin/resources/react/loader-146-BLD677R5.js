import{a as s}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as m,x as n,y as t,z as d}from"./shared-WHKIMZAY.js";var l=["\u2588","\u2593","\u2592"];function p({className:o,blocks:u=l,size:f=5,track:h="\u2591",style:y,...g}){let e=Math.max(2,Math.floor(f)),v=l.map((r,a)=>u[a]??l[a]),k=Array.from({length:e*e},(r,a)=>{let i=Math.floor(a/e),c=a%e;return i===0||i===e-1||c===0||c===e-1?h:" "});return t(m,{children:[n("style",{children:`
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
      `}),t("span",{role:"status",className:s("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",o),style:{"--loader-size":`${e}ch`,"--loader-x":`${e-1}ch`,"--loader-y":`${e-1}ch`,...y},...g,children:[n("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${e}, 1ch)`,gridTemplateRows:`repeat(${e}, 1ch)`},children:k.map((r,a)=>n("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:r},a))}),v.map((r,a)=>n("span",{"aria-hidden":"true",className:s("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][a]),style:{animation:"loading-ui-square-accordion var(--duration, 3.5s) linear infinite",animationDelay:`calc(var(--delay, 0.08s) * ${a})`,backgroundColor:"var(--mask-color, var(--background))"},children:r},`${r}-${a}`)),n("span",{className:"sr-only",children:"Loading"})]})]})}function z(o){return d(o,p,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{z as mount};
