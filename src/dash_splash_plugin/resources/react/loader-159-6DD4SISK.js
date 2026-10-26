import"./shared-KXBAZB5M.js";import{a as d}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as l,l as o,o as s}from"./shared-QQL2K63A.js";var e=l(o());function a(n,i,r){return Math.min(Math.max(n,i),r)}function t({className:n,style:i,eyeScale:r=.62,gapScale:g=.09,pupilScale:c=.32,blinkScale:u=.375,travelScale:y=.3125,...p}){let m=a(r,.28,.7),v=a(g,.04,.3),b=a(c,.12,.45),w=a(u,.15,1),f=a(y,.08,.5),k={...i,"--loading-ui-wandering-eyes-eye":`${(m*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-gap":`${(v*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-pupil-scale":`${b}`,"--loading-ui-wandering-eyes-blink":`${w}`,"--loading-ui-wandering-eyes-travel-scale":`${f}`};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("style",{children:`
        @keyframes loading-ui-wandering-eyes-move {
          0%,
          10% {
            background-position: 0 0;
          }

          13%,
          40% {
            background-position: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale) * -1) 0;
          }

          43%,
          70% {
            background-position: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale)) 0;
          }

          73%,
          90% {
            background-position: 0 calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-travel-scale));
          }

          93%,
          100% {
            background-position: 0 0;
          }
        }

        @keyframes loading-ui-wandering-eyes-blink {
          0%,
          10%,
          12%,
          20%,
          22%,
          40%,
          42%,
          60%,
          62%,
          70%,
          72%,
          90%,
          92%,
          98%,
          100% {
            height: var(--loading-ui-wandering-eyes-eye);
          }

          11%,
          21%,
          41%,
          61%,
          71%,
          91%,
          99% {
            height: calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-blink));
          }
        }
      `}),(0,e.jsxs)("span",{role:"status",className:d("@container-[size] relative inline-flex aspect-9/4 items-center justify-center align-middle [--eye-color:color-mix(in_srgb,currentColor_16%,transparent)] [--pupil-color:currentColor]",n),style:k,...p,children:[(0,e.jsx)("span",{"aria-hidden":"true",className:"inline-flex items-center justify-center gap-(--loading-ui-wandering-eyes-gap)",children:Array.from({length:2},(S,h)=>(0,e.jsx)("span",{className:"inline-block rounded-full",style:{width:"var(--loading-ui-wandering-eyes-eye)",height:"var(--loading-ui-wandering-eyes-eye)",backgroundColor:"var(--eye-color)",backgroundImage:"radial-gradient(circle calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-pupil-scale)), var(--pupil-color) 100%, transparent 0)",backgroundRepeat:"no-repeat",animation:"loading-ui-wandering-eyes-move var(--duration, 10s) infinite, loading-ui-wandering-eyes-blink var(--duration, 10s) infinite"}},h))}),(0,e.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function N(n){return s(n,t,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{N as mount};
