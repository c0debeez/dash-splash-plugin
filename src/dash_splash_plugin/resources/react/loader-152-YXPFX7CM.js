import{a}from"./shared-LSLL2LDH.js";import"./shared-5VWDGKKA.js";import{w as n,x as i,y as t,z as o}from"./shared-WHKIMZAY.js";function r({children:e,as:l="p",className:m,minOpacity:p=.45,style:c,...s}){return t(n,{children:[i("style",{children:`
        @keyframes loading-ui-text-blink {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: var(--loading-ui-text-blink-opacity);
          }
        }
      `}),i(l,{className:a("inline-block font-medium",m),style:{...c,"--loading-ui-text-blink-opacity":p,animation:"loading-ui-text-blink var(--duration, 2s) ease-in-out infinite"},...s,children:e})]})}function b(e){return o(e,r,{family:"loading-ui",geometry:{fontSize:"1.25rem"},visualScale:void 0,bindPlayback:void 0})}export{b as mount};
