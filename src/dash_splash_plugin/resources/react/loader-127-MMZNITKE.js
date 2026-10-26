import{a as p}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as m,x as a,y as i,z as u}from"./shared-WHKIMZAY.js";function f(n,e,s){return Math.min(Math.max(n,e),s)}function d({className:n,style:e,dots:s=8,dotScale:y=.16,radiusScale:g=.34,...h}){let t=Math.max(4,Math.floor(s)),o=f(y,.2,.4),l=f(g,0,.5-o/2);return i(m,{children:[a("style",{children:`
        @keyframes loading-ui-dots-ring-pulse {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.65);
          }

          12.5% {
            opacity: 1;
            transform: scale(1);
          }

          25% {
            opacity: 0.75;
            transform: scale(0.85);
          }

          50% {
            opacity: 0.35;
            transform: scale(0.7);
          }
        }
      `}),i("span",{role:"status",className:p("@container-[size] relative inline-flex aspect-square items-center justify-center",n),style:e,...h,children:[a("span",{"aria-hidden":"true",className:"relative block size-full",children:Array.from({length:t},(M,r)=>{let c=r/t*Math.PI*2,b=`${(Math.sin(c)*l*100).toFixed(2)}cqmin`,$=`${(-Math.cos(c)*l*100).toFixed(2)}cqmin`;return a("span",{className:"absolute top-1/2 left-1/2",style:{width:`calc(${o} * 100cqmin)`,height:`calc(${o} * 100cqmin)`,transform:`translate(-50%, -50%) translate(${b}, ${$})`},children:a("span",{className:"block size-full rounded-full bg-current",style:{animation:"loading-ui-dots-ring-pulse var(--duration, 1s) linear infinite",animationDelay:`calc(var(--duration, 1s) / ${t} * ${r-t})`}})},r)})}),a("span",{className:"sr-only",children:"Loading"})]})]})}function N(n){return u(n,d,{family:"loading-ui",geometry:{width:"2rem",height:"2rem"},visualScale:void 0,bindPlayback:void 0})}export{N as mount};
