(()=>{function r(e,i,...t){return{type:e,props:{...i,...t.length?{children:t}:{}}}}function x({children:e}){return e}function b(...e){return e.filter(Boolean).join(" ")}var _="http://www.w3.org/2000/svg",I=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function f(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function w(e,i){for(let[t,n]of Object.entries(i))n!=null&&e.style.setProperty(f(t),typeof n=="number"&&n!==0&&!I.test(t)&&!t.startsWith("--")?`${n}px`:String(n))}function c(e,i,t,n=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let o of e)c(o,i,t,n);return}if(typeof e!="object"){i.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){c(e.type(e.props),i,t,n);return}n=n||e.type==="svg";let s=n?document.createElementNS(_,e.type):document.createElement(e.type);for(let[o,l]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(o)||l==null))if(o==="style")w(s,l);else{let u=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:n?f(o):o;s.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:u,String(l))}i.appendChild(s),c(e.props.children,s,t,n&&e.type!=="foreignObject"),e.props.__mount?.(s,t)}var B={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[1em]":{height:"1em"},"w-[10ch]":{width:"10ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},flex:{display:"flex"},"h-full":{height:"100%"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"opacity-30":{opacity:".3"},absolute:{position:"absolute"},"inset-0":{inset:"0"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function m(e,i){let t={};if(typeof e=="string")for(let n of e.split(/\s+/))Object.assign(t,B[n]);return Object.assign(t,i||{})}var q=[1,2,3,4,5,5,4,3,2,1];function L({className:e,block:i="\u2588",track:t="\u2591",...n}){return r(x,null,r("style",null,`
        @keyframes loading-ui-symmetric-wave-1 {
          0%,
          100% {
            opacity: 1;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5%,
          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-2 {
          0%,
          100% {
            opacity: 0.6;
          }

          12.5%,
          87.5% {
            opacity: 1;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 0.3;
          }

          50% {
            opacity: 0;
          }
        }

        @keyframes loading-ui-symmetric-wave-3 {
          0%,
          100% {
            opacity: 0.3;
          }

          12.5%,
          87.5% {
            opacity: 0.6;
          }

          25%,
          75% {
            opacity: 1;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 0.3;
          }
        }

        @keyframes loading-ui-symmetric-wave-4 {
          0%,
          100% {
            opacity: 0;
          }

          12.5%,
          87.5% {
            opacity: 0.3;
          }

          25%,
          75% {
            opacity: 0.6;
          }

          37.5%,
          62.5% {
            opacity: 1;
          }

          50% {
            opacity: 0.6;
          }
        }

        @keyframes loading-ui-symmetric-wave-5 {
          0%,
          100%,
          12.5%,
          87.5% {
            opacity: 0;
          }

          25%,
          75% {
            opacity: 0.3;
          }

          37.5%,
          62.5% {
            opacity: 0.6;
          }

          50% {
            opacity: 1;
          }
        }
      `),r("span",{role:"status",...n,style:m(b("relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),null)},q.map((s,o)=>r("span",{key:o,"aria-hidden":"true",style:m("relative flex h-full w-[1ch] items-center justify-center",null)},r("span",{style:m("opacity-30",null)},t),r("span",{style:m("absolute inset-0 flex items-center justify-center",{animation:`loading-ui-symmetric-wave-${s} var(--duration, 2s) linear infinite`})},i))),r("span",{style:m("sr-only",null)},"Loading")))}var D=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function O({component:e,css:i,geometry:t,usesText:n,forwardsStyle:s,visualScale:o=1}){let l=document.querySelector("[data-dash-loading-ui]");if(!l)return;let u=l.attachShadow({mode:"open"}),S=document.createElement("style");S.textContent=D+i,u.appendChild(S);let a=document.createElement("span");a.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(a.style,t);let y=getComputedStyle(l),j=y.getPropertyValue("--dash-loading-font-size").trim();n&&j&&(a.style.fontSize=j),u.appendChild(a);let g=a;o!==1&&(a.style.width=`calc(${t.width} * ${o})`,a.style.height=`calc(${t.height} * ${o})`,a.style.alignItems="center",a.style.justifyContent="center",g=document.createElement("span"),g.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(g.style,t),a.appendChild(g));let $=!!(t.width||t.height),M=n?l.dataset.dashLoadingText||"Loading":void 0;c(r(e,s&&$?{style:{width:"100%",height:"100%"},children:M}:{className:$?"size-full":void 0,children:M}),g,S);let P=y.getPropertyValue("--dash-loading-target-size").trim(),h=1;if(P&&!n){let d=a.getBoundingClientRect(),p=Math.max(d.width,d.height);p>0&&(h=Number(P)/p),l.style.zoom=String(h)}let v=y.getPropertyValue("--dash-loading-thickness").trim();v&&h>0&&(S.textContent+=`*{border-width:${Number(v)/h}px!important}svg *{stroke-width:${Number(v)/h}px!important;vector-effect:non-scaling-stroke}`);let C=Number(y.getPropertyValue("--dash-loading-rate").trim()||1),W=y.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let d of u.querySelectorAll("*"))for(let p of d.getAnimations())p.playbackRate=C,W||p.pause();for(let d of u.querySelectorAll("svg")){if(C!==1)for(let p of d.querySelectorAll("animate,animateTransform,animateMotion"))for(let z of["dur","begin"]){let V=p.getAttribute(z);V&&p.setAttribute(z,V.replace(/(-?[\d.]+)(ms|s)\b/g,(U,E,H)=>`${Number(E)/C}${H}`))}W||d.pauseAnimations()}}var R='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';O({component:L,css:R,geometry:{},usesText:!1,forwardsStyle:!1,visualScale:1});})();
