import"./shared-KXBAZB5M.js";import{a as r}from"./shared-MDXWYKGH.js";import"./shared-5VWDGKKA.js";import{b as n,l as i,o}from"./shared-QQL2K63A.js";var a=n(i());function t({className:e,...l}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @keyframes loading-ui-classic-fade {
          0% {
            opacity: 1;
          }

          100% {
            opacity: 0.15;
          }
        }
      `}),(0,a.jsxs)("span",{role:"status",className:r("box-border inline-block size-5",e),...l,children:[(0,a.jsx)("span",{"aria-hidden":"true",className:"relative top-1/2 left-1/2 block size-full",children:Array.from({length:12},(c,s)=>(0,a.jsx)("span",{className:"absolute top-[-3.9%] left-[-10%] block h-[8%] w-[24%] rounded-(--radius) bg-current",style:{transform:`rotate(${s*30}deg) translate(146%)`,animation:"loading-ui-classic-fade var(--duration, 1.2s) linear infinite",animationDelay:`calc(var(--duration, 1.2s) / 12 * ${s-12})`}},s))}),(0,a.jsx)("span",{className:"sr-only",children:"Loading"})]})]})}function y(e){return o(e,t,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{y as mount};
