(()=>{function o(e,r,...n){return{type:e,props:{...r,...n.length?{children:n}:{}}}}function u({children:e}){return e}function g(...e){return e.filter(Boolean).join(" ")}var _="http://www.w3.org/2000/svg",L=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function c(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function y(e,r){for(let[n,t]of Object.entries(r))t!=null&&e.style.setProperty(c(n),typeof t=="number"&&t!==0&&!L.test(n)&&!n.startsWith("--")?`${t}px`:String(t))}function l(e,r,n,t=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let i of e)l(i,r,n,t);return}if(typeof e!="object"){r.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){l(e.type(e.props),r,n,t);return}t=t||e.type==="svg";let a=t?document.createElementNS(_,e.type):document.createElement(e.type);for(let[i,s]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(i)||s==null))if(i==="style")y(a,s);else{let d=i==="className"?"class":["viewBox","preserveAspectRatio"].includes(i)?i:t?c(i):i;a.setAttribute(t&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(i)?i:d,String(s))}r.appendChild(a),l(e.props.children,a,n,t&&e.type!=="foreignObject"),e.props.__mount?.(a,n)}var N={"size-full":{width:"100%",height:"100%"},"@container-[size]":{containerType:"size"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"aspect-9/4":{aspectRatio:"9/4"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"align-middle":{verticalAlign:"middle"},"[--eye-color:color-mix(in_srgb,currentColor_16%,transparent)]":{"--eye-color":"color-mix(in srgb,currentColor 16%,transparent)"},"[--pupil-color:currentColor]":{"--pupil-color":"currentColor"},"gap-(--loading-ui-wandering-eyes-gap)":{gap:"var(--loading-ui-wandering-eyes-gap)"},"inline-block":{display:"inline-block"},"rounded-full":{borderRadius:"3.40282e38px"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function f(e,r){let n={};if(typeof e=="string")for(let t of e.split(/\s+/))Object.assign(n,N[t]);return Object.assign(n,r||{})}function m(e,r,n){return Math.min(Math.max(e,r),n)}function C({className:e,style:r,eyeScale:n=.62,gapScale:t=.09,pupilScale:a=.32,blinkScale:i=.375,travelScale:s=.3125,...d}){let p=m(n,.28,.7),h=m(t,.04,.3),b=m(a,.12,.45),S=m(i,.15,1),E=m(s,.08,.5),R={...r,"--loading-ui-wandering-eyes-eye":`${(p*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-gap":`${(h*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-pupil-scale":`${b}`,"--loading-ui-wandering-eyes-blink":`${S}`,"--loading-ui-wandering-eyes-travel-scale":`${E}`};return o(u,null,o("style",null,`
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
      `),o("span",{role:"status",...d,style:f(g("@container-[size] relative inline-flex aspect-9/4 items-center justify-center align-middle [--eye-color:color-mix(in_srgb,currentColor_16%,transparent)] [--pupil-color:currentColor]",e),R)},o("span",{"aria-hidden":"true",style:f("inline-flex items-center justify-center gap-(--loading-ui-wandering-eyes-gap)",null)},Array.from({length:2},(A,W)=>o("span",{key:W,style:f("inline-block rounded-full",{width:"var(--loading-ui-wandering-eyes-eye)",height:"var(--loading-ui-wandering-eyes-eye)",backgroundColor:"var(--eye-color)",backgroundImage:"radial-gradient(circle calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-pupil-scale)), var(--pupil-color) 100%, transparent 0)",backgroundRepeat:"no-repeat",animation:"loading-ui-wandering-eyes-move var(--duration, 10s) infinite, loading-ui-wandering-eyes-blink var(--duration, 10s) infinite"})}))),o("span",{style:f("sr-only",null)},"Loading")))}var O=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function T({component:e,css:r,geometry:n,usesText:t,forwardsStyle:a}){let i=document.querySelector("[data-dash-loading-ui]");if(!i)return;let s=i.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=O+r,s.appendChild(d);let p=document.createElement("span");p.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(p.style,n),s.appendChild(p);let h=!!(n.width||n.height),b=t?i.dataset.dashLoadingText||"Loading":void 0;l(o(e,a&&h?{style:{width:"100%",height:"100%"},children:b}:{className:h?"size-full":void 0,children:b}),p,d)}var j="";T({component:C,css:j,geometry:{width:"2rem",height:"2rem"},usesText:!1,forwardsStyle:!1});})();
