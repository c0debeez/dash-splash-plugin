(()=>{function a(e,r,...o){return{type:e,props:{...r,...o.length?{children:o}:{}}}}function f({children:e}){return e}function d(...e){return e.filter(Boolean).join(" ")}var N="http://www.w3.org/2000/svg",I=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function p(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function u(e,r){for(let[o,t]of Object.entries(r))t!=null&&e.style.setProperty(p(o),typeof t=="number"&&t!==0&&!I.test(o)&&!o.startsWith("--")?`${t}px`:String(t))}function s(e,r,o,t=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let n of e)s(n,r,o,t);return}if(typeof e!="object"){r.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){s(e.type(e.props),r,o,t);return}t=t||e.type==="svg";let i=t?document.createElementNS(N,e.type):document.createElement(e.type);for(let[n,l]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(n)||l==null))if(n==="style")u(i,l);else{let c=n==="className"?"class":["viewBox","preserveAspectRatio"].includes(n)?n:t?p(n):n;i.setAttribute(t&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(n)?n:c,String(l))}r.appendChild(i),s(e.props.children,i,o,t&&e.type!=="foreignObject"),e.props.__mount?.(i,o)}var j={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[5ch]":{height:"5ch"},"w-[9ch]":{width:"9ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},"pointer-events-none":{pointerEvents:"none"},absolute:{position:"absolute"},"top-0":{top:"0"},"left-0":{left:"0"},flex:{display:"flex"},"h-[1ch]":{height:"1ch"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function m(e,r){let o={};if(typeof e=="string")for(let t of e.split(/\s+/))Object.assign(o,j[t]);return Object.assign(o,r||{})}var b=["\u2588","\u2593","\u2592","\u2591"];function v({className:e,blocks:r=b,...o}){let t=b.map((i,n)=>r[n]??b[n]);return a(f,null,a("style",null,`
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
      `),a("span",{role:"status",...o,style:m(d("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),null)},t.map((i,n)=>a("span",{key:`${i}-${n}`,"aria-hidden":"true",style:m("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",{animation:"loading-ui-infinity-square-snake var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * -${t.length-1-n})`})},i)),a("span",{style:m("sr-only",null)},"Loading")))}var L=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function C({component:e,css:r,geometry:o,usesText:t,forwardsStyle:i}){let n=document.querySelector("[data-dash-loading-ui]");if(!n)return;let l=n.attachShadow({mode:"open"}),c=document.createElement("style");c.textContent=L+r,l.appendChild(c);let h=document.createElement("span");h.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(h.style,o),l.appendChild(h);let S=!!(o.width||o.height),k=t?n.dataset.dashLoadingText||"Loading":void 0;s(a(e,i&&S?{style:{width:"100%",height:"100%"},children:k}:{className:S?"size-full":void 0,children:k}),h,c)}var T='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';C({component:v,css:T,geometry:{},usesText:!1,forwardsStyle:!1});})();
