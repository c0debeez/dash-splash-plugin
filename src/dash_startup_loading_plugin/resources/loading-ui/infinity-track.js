(()=>{function l(t,i,...e){return{type:t,props:{...i,...e.length?{children:e}:{}}}}function w({children:t}){return t}function m(...t){return t.filter(Boolean).join(" ")}var H="http://www.w3.org/2000/svg",W=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function h(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function k(t,i){for(let[e,n]of Object.entries(i))n!=null&&t.style.setProperty(h(e),typeof n=="number"&&n!==0&&!W.test(e)&&!e.startsWith("--")?`${n}px`:String(n))}function d(t,i,e,n=!1){if(t==null||typeof t=="boolean")return;if(Array.isArray(t)){for(let r of t)d(r,i,e,n);return}if(typeof t!="object"){i.appendChild(document.createTextNode(String(t)));return}if(typeof t.type=="function"){d(t.type(t.props),i,e,n);return}n=n||t.type==="svg";let c=n?document.createElementNS(H,t.type):document.createElement(t.type);for(let[r,s]of Object.entries(t.props))if(!(["children","key","ref","__mount"].includes(r)||s==null))if(r==="style")k(c,s);else{let o=r==="className"?"class":["viewBox","preserveAspectRatio"].includes(r)?r:n?h(r):r;c.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(r)?r:o,String(s))}i.appendChild(c),d(t.props.children,c,e,n&&t.type!=="foreignObject"),t.props.__mount?.(c,e)}var q={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[5ch]":{height:"5ch"},"w-[9ch]":{width:"9ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},"pointer-events-none":{pointerEvents:"none"},absolute:{position:"absolute"},"inset-0":{inset:"0"},grid:{display:"grid"},"grid-cols-9":{gridTemplateColumns:"repeat(9,minmax(0,1fr))"},"grid-rows-5":{gridTemplateRows:"repeat(5,minmax(0,1fr))"},flex:{display:"flex"},"h-[1ch]":{height:"1ch"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"top-0":{top:"0"},"left-0":{left:"0"},"z-30":{zIndex:"30"},"z-20":{zIndex:"20"},"z-10":{zIndex:"10"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function g(t,i){let e={};if(typeof t=="string")for(let n of t.split(/\s+/))Object.assign(e,q[n]);return Object.assign(e,i||{})}var I=["\u2588","\u2593","\u2592"];function R({className:t,blocks:i=I,track:e="\u2591",...n}){let c=I.map((s,o)=>i[o]??I[o]),r=Array.from({length:45},(s,o)=>{let f=Math.floor(o/9),a=o%9;return f===0||f===4||a===0||a===4||a===8?e:" "});return l(w,null,l("style",null,`
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
      `),l("span",{role:"status",...n,style:g(m("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",t),null)},l("span",{"aria-hidden":"true",style:g("pointer-events-none absolute inset-0 grid grid-cols-9 grid-rows-5",null)},r.map((s,o)=>l("span",{key:o,style:g("flex h-[1ch] w-[1ch] items-center justify-center",null)},s))),c.map((s,o)=>l("span",{key:`${s}-${o}`,"aria-hidden":"true",style:g(m("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][o]),{animation:"loading-ui-infinity-track var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * ${o})`,backgroundColor:"var(--mask-color, var(--background))"})},s)),l("span",{style:g("sr-only",null)},"Loading")))}var D=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function V({component:t,css:i,geometry:e,usesText:n,forwardsStyle:c,visualScale:r=1}){let s=document.querySelector("[data-dash-loading-ui]");if(!s)return;let o=s.attachShadow({mode:"open"}),f=document.createElement("style");f.textContent=D+i,o.appendChild(f);let a=document.createElement("span");a.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(a.style,e);let y=getComputedStyle(s),A=y.getPropertyValue("--dash-loading-font-size").trim();n&&A&&(a.style.fontSize=A),o.appendChild(a);let x=a;r!==1&&(a.style.width=`calc(${e.width} * ${r})`,a.style.height=`calc(${e.height} * ${r})`,a.style.alignItems="center",a.style.justifyContent="center",x=document.createElement("span"),x.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(x.style,e),a.appendChild(x));let $=!!(e.width||e.height),j=n?s.dataset.dashLoadingText||"Loading":void 0;d(l(t,c&&$?{style:{width:"100%",height:"100%"},children:j}:{className:$?"size-full":void 0,children:j}),x,f);let L=y.getPropertyValue("--dash-loading-target-size").trim(),b=1;if(L&&!n){let u=a.getBoundingClientRect(),p=Math.max(u.width,u.height);p>0&&(b=Number(L)/p),s.style.zoom=String(b)}let C=y.getPropertyValue("--dash-loading-thickness").trim();C&&b>0&&(f.textContent+=`*{border-width:${Number(C)/b}px!important}svg *{stroke-width:${Number(C)/b}px!important;vector-effect:non-scaling-stroke}`);let S=Number(y.getPropertyValue("--dash-loading-rate").trim()||1),M=y.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let u of o.querySelectorAll("*"))for(let p of u.getAnimations())p.playbackRate=S,M||p.pause();for(let u of o.querySelectorAll("svg")){if(S!==1)for(let p of u.querySelectorAll("animate,animateTransform,animateMotion"))for(let O of["dur","begin"]){let P=p.getAttribute(O);P&&p.setAttribute(O,P.replace(/(-?[\d.]+)(ms|s)\b/g,(K,B,E)=>`${Number(B)/S}${E}`))}M||u.pauseAnimations()}}var _='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';V({component:R,css:_,geometry:{},usesText:!1,forwardsStyle:!1,visualScale:1});})();
