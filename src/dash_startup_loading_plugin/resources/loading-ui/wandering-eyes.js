(()=>{function s(e,i,...n){return{type:e,props:{...i,...n.length?{children:n}:{}}}}function b({children:e}){return e}function w(...e){return e.filter(Boolean).join(" ")}var I="http://www.w3.org/2000/svg",H=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function m(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function x(e,i){for(let[n,t]of Object.entries(i))t!=null&&e.style.setProperty(m(n),typeof t=="number"&&t!==0&&!H.test(n)&&!n.startsWith("--")?`${t}px`:String(t))}function p(e,i,n,t=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let r of e)p(r,i,n,t);return}if(typeof e!="object"){i.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){p(e.type(e.props),i,n,t);return}t=t||e.type==="svg";let l=t?document.createElementNS(I,e.type):document.createElement(e.type);for(let[r,a]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(r)||a==null))if(r==="style")x(l,a);else{let d=r==="className"?"class":["viewBox","preserveAspectRatio"].includes(r)?r:t?m(r):r;l.setAttribute(t&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(r)?r:d,String(a))}i.appendChild(l),p(e.props.children,l,n,t&&e.type!=="foreignObject"),e.props.__mount?.(l,n)}var G={"size-full":{width:"100%",height:"100%"},"@container-[size]":{containerType:"size"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"aspect-9/4":{aspectRatio:"9/4"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"align-middle":{verticalAlign:"middle"},"[--eye-color:color-mix(in_srgb,currentColor_16%,transparent)]":{"--eye-color":"color-mix(in srgb,currentColor 16%,transparent)"},"[--pupil-color:currentColor]":{"--pupil-color":"currentColor"},"gap-(--loading-ui-wandering-eyes-gap)":{gap:"var(--loading-ui-wandering-eyes-gap)"},"inline-block":{display:"inline-block"},"rounded-full":{borderRadius:"3.40282e38px"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function v(e,i){let n={};if(typeof e=="string")for(let t of e.split(/\s+/))Object.assign(n,G[t]);return Object.assign(n,i||{})}function S(e,i,n){return Math.min(Math.max(e,i),n)}function W({className:e,style:i,eyeScale:n=.62,gapScale:t=.09,pupilScale:l=.32,blinkScale:r=.375,travelScale:a=.3125,...d}){let f=S(n,.28,.7),o=S(t,.04,.3),u=S(l,.12,.45),k=S(r,.15,1),g=S(a,.08,.5),C={...i,"--loading-ui-wandering-eyes-eye":`${(f*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-gap":`${(o*100).toFixed(2)}cqmin`,"--loading-ui-wandering-eyes-pupil-scale":`${u}`,"--loading-ui-wandering-eyes-blink":`${k}`,"--loading-ui-wandering-eyes-travel-scale":`${g}`};return s(b,null,s("style",null,`
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
      `),s("span",{role:"status",...d,style:v(w("@container-[size] relative inline-flex aspect-9/4 items-center justify-center align-middle [--eye-color:color-mix(in_srgb,currentColor_16%,transparent)] [--pupil-color:currentColor]",e),C)},s("span",{"aria-hidden":"true",style:v("inline-flex items-center justify-center gap-(--loading-ui-wandering-eyes-gap)",null)},Array.from({length:2},(T,E)=>s("span",{key:E,style:v("inline-block rounded-full",{width:"var(--loading-ui-wandering-eyes-eye)",height:"var(--loading-ui-wandering-eyes-eye)",backgroundColor:"var(--eye-color)",backgroundImage:"radial-gradient(circle calc(var(--loading-ui-wandering-eyes-eye) * var(--loading-ui-wandering-eyes-pupil-scale)), var(--pupil-color) 100%, transparent 0)",backgroundRepeat:"no-repeat",animation:"loading-ui-wandering-eyes-move var(--duration, 10s) infinite, loading-ui-wandering-eyes-blink var(--duration, 10s) infinite"})}))),s("span",{style:v("sr-only",null)},"Loading")))}var D=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function L({component:e,css:i,geometry:n,usesText:t,forwardsStyle:l,visualScale:r=1}){let a=document.querySelector("[data-dash-loading-ui]");if(!a)return;let d=a.attachShadow({mode:"open"}),f=document.createElement("style");f.textContent=D+i,d.appendChild(f);let o=document.createElement("span");o.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(o.style,n);let u=getComputedStyle(a),k=u.getPropertyValue("--dash-loading-font-size").trim();t&&k&&(o.style.fontSize=k),d.appendChild(o);let g=o;r!==1&&(o.style.width=`calc(${n.width} * ${r})`,o.style.height=`calc(${n.height} * ${r})`,o.style.alignItems="center",o.style.justifyContent="center",g=document.createElement("span"),g.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(g.style,n),o.appendChild(g));let C=!!(n.width||n.height),T=t?a.dataset.dashLoadingText||"Loading":void 0;p(s(e,l&&C?{style:{width:"100%",height:"100%"},children:T}:{className:C?"size-full":void 0,children:T}),g,f);let R=u.getPropertyValue("--dash-loading-target-size").trim(),h=1;if(R&&!t){let y=o.getBoundingClientRect(),c=Math.max(y.width,y.height);c>0&&(h=Number(R)/c),a.style.zoom=String(h)}let $=u.getPropertyValue("--dash-loading-thickness").trim();$&&h>0&&(f.textContent+=`*{border-width:${Number($)/h}px!important}svg *{stroke-width:${Number($)/h}px!important;vector-effect:non-scaling-stroke}`);let A=Number(u.getPropertyValue("--dash-loading-rate").trim()||1),_=u.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let y of d.querySelectorAll("*"))for(let c of y.getAnimations())c.playbackRate=A,_||c.pause();for(let y of d.querySelectorAll("svg")){if(A!==1)for(let c of y.querySelectorAll("animate,animateTransform,animateMotion"))for(let O of["dur","begin"]){let V=c.getAttribute(O);V&&c.setAttribute(O,V.replace(/(-?[\d.]+)(ms|s)\b/g,(Z,q,B)=>`${Number(q)/A}${B}`))}_||y.pauseAnimations()}}var M="";L({component:W,css:M,geometry:{width:"2rem",height:"2rem"},usesText:!1,forwardsStyle:!1,visualScale:1});})();
