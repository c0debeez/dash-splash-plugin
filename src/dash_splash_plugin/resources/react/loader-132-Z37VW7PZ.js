import{a as o}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as l,x as a,y as s,z as m}from"./shared-WHKIMZAY.js";var i=["\u2588","\u2593","\u2592"];function f({className:r,blocks:p=i,track:h="\u2591",...d}){let y=i.map((t,n)=>p[n]??i[n]),u=Array.from({length:45},(t,n)=>{let c=Math.floor(n/9),e=n%9;return c===0||c===4||e===0||e===4||e===8?h:" "});return s(l,{children:[a("style",{children:`
        @keyframes loading-ui-infinity-track {
          0%,
          100% {
            transform: translate(4ch, 0);
          }

          12.5% {
            transform: translate(0, 0);
          }

          25% {
            transform: translate(0, 4ch);
          }

          37.5% {
            transform: translate(4ch, 4ch);
          }

          50% {
            transform: translate(4ch, 0);
          }

          62.5% {
            transform: translate(8ch, 0);
          }

          75% {
            transform: translate(8ch, 4ch);
          }

          87.5% {
            transform: translate(4ch, 4ch);
          }
        }
      `}),s("span",{role:"status",className:o("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",r),...d,children:[a("span",{"aria-hidden":"true",className:"pointer-events-none absolute inset-0 grid grid-cols-9 grid-rows-5",children:u.map((t,n)=>a("span",{className:"flex h-[1ch] w-[1ch] items-center justify-center",children:t},n))}),y.map((t,n)=>a("span",{"aria-hidden":"true",className:o("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][n]),style:{animation:"loading-ui-infinity-track var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * ${n})`,backgroundColor:"var(--mask-color, var(--background))"},children:t},`${t}-${n}`)),a("span",{className:"sr-only",children:"Loading"})]})]})}function N(r){return m(r,f,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{N as mount};
