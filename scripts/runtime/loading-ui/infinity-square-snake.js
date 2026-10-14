(()=>{function s(e,r,...t){return{type:e,props:{...r,...t.length?{children:t}:{}}}}function g({children:e}){return e}function x(...e){return e.filter(Boolean).join(" ")}var B="http://www.w3.org/2000/svg",H=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function d(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function b(e,r){for(let[t,n]of Object.entries(r))n!=null&&e.style.setProperty(d(t),typeof n=="number"&&n!==0&&!H.test(t)&&!t.startsWith("--")?`${n}px`:String(n))}function c(e,r,t,n=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let o of e)c(o,r,t,n);return}if(typeof e!="object"){r.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){c(e.type(e.props),r,t,n);return}n=n||e.type==="svg";let i=n?document.createElementNS(B,e.type):document.createElement(e.type);for(let[o,l]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(o)||l==null))if(o==="style")b(i,l);else{let u=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:n?d(o):o;i.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:u,String(l))}r.appendChild(i),c(e.props.children,i,t,n&&e.type!=="foreignObject"),e.props.__mount?.(i,t)}var W={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[5ch]":{height:"5ch"},"w-[9ch]":{width:"9ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},"pointer-events-none":{pointerEvents:"none"},absolute:{position:"absolute"},"top-0":{top:"0"},"left-0":{left:"0"},flex:{display:"flex"},"h-[1ch]":{height:"1ch"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function S(e,r){let t={};if(typeof e=="string")for(let n of e.split(/\s+/))Object.assign(t,W[n]);return Object.assign(t,r||{})}var $=["\u2588","\u2593","\u2592","\u2591"];function P({className:e,blocks:r=$,...t}){let n=$.map((i,o)=>r[o]??$[o]);return s(g,null,s("style",null,`
        @keyframes loading-ui-infinity-square-snake {
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
      `),s("span",{role:"status",...t,style:S(x("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),null)},n.map((i,o)=>s("span",{key:`${i}-${o}`,"aria-hidden":"true",style:S("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",{animation:"loading-ui-infinity-square-snake var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * -${n.length-1-o})`})},i)),s("span",{style:S("sr-only",null)},"Loading")))}var D=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function M({component:e,css:r,geometry:t,usesText:n,forwardsStyle:i,visualScale:o=1}){let l=document.querySelector("[data-dash-loading-ui]");if(!l)return;let u=l.attachShadow({mode:"open"}),w=document.createElement("style");w.textContent=D+r,u.appendChild(w);let a=document.createElement("span");a.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(a.style,t);let m=getComputedStyle(l),j=m.getPropertyValue("--dash-loading-font-size").trim();n&&j&&(a.style.fontSize=j),u.appendChild(a);let h=a;o!==1&&(a.style.width=`calc(${t.width} * ${o})`,a.style.height=`calc(${t.height} * ${o})`,a.style.alignItems="center",a.style.justifyContent="center",h=document.createElement("span"),h.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(h.style,t),a.appendChild(h));let I=!!(t.width||t.height),q=n?l.dataset.dashLoadingText||"Loading":void 0;c(s(e,i&&I?{style:{width:"100%",height:"100%"},children:q}:{className:I?"size-full":void 0,children:q}),h,w);let z=m.getPropertyValue("--dash-loading-target-size").trim(),y=1;if(z&&!n){let f=a.getBoundingClientRect(),p=Math.max(f.width,f.height);p>0&&(y=Number(z)/p),l.style.zoom=String(y)}let k=m.getPropertyValue("--dash-loading-thickness").trim();k&&y>0&&(w.textContent+=`*{border-width:${Number(k)/y}px!important}svg *{stroke-width:${Number(k)/y}px!important;vector-effect:non-scaling-stroke}`);let C=Number(m.getPropertyValue("--dash-loading-rate").trim()||1),E=m.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let f of u.querySelectorAll("*"))for(let p of f.getAnimations())p.playbackRate=C,E||p.pause();for(let f of u.querySelectorAll("svg")){if(C!==1)for(let p of f.querySelectorAll("animate,animateTransform,animateMotion"))for(let L of["dur","begin"]){let O=p.getAttribute(L);O&&p.setAttribute(L,O.replace(/(-?[\d.]+)(ms|s)\b/g,(K,V,_)=>`${Number(V)/C}${_}`))}E||f.pauseAnimations()}}var R='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';M({component:P,css:R,geometry:{},usesText:!1,forwardsStyle:!1,visualScale:1});})();
