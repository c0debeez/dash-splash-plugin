import{a as s}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as d,x as n,y as o,z as m}from"./shared-WHKIMZAY.js";var l=["\u2588","\u2593","\u2592"];function p({className:t,blocks:u=l,size:f=5,track:h="\u2591",style:y,...g}){let e=Math.max(2,Math.floor(f)),v=l.map((r,a)=>u[a]??l[a]),k=Array.from({length:e*e},(r,a)=>{let i=Math.floor(a/e),c=a%e;return i===0||i===e-1||c===0||c===e-1?h:" "});return o(d,{children:[n("style",{children:`
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
      `}),o("span",{role:"status",className:s("relative inline-flex h-[var(--loader-size)] w-[var(--loader-size)] overflow-hidden font-mono text-xl leading-none text-current select-none",t),style:{"--loader-size":`${e}ch`,"--loader-x":`${e-1}ch`,"--loader-y":`${e-1}ch`,...y},...g,children:[n("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid",style:{gridTemplateColumns:`repeat(${e}, 1ch)`,gridTemplateRows:`repeat(${e}, 1ch)`},children:k.map((r,a)=>n("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:r},a))}),v.map((r,a)=>n("span",{"aria-hidden":"true",className:s("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][a]),style:{animation:"loading-ui-square-grid var(--duration, 2.8s) linear infinite",animationDelay:`calc(var(--delay, 0.06s) * ${a})`,backgroundColor:"var(--mask-color, var(--background))"},children:r},`${r}-${a}`)),n("span",{className:"sr-only",children:"Loading"})]})]})}function C(t){return m(t,p,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{C as mount};
