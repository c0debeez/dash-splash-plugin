(()=>{function a(t,i,...e){return{type:t,props:{...i,...e.length?{children:e}:{}}}}function m({children:t}){return t}function f(...t){return t.filter(Boolean).join(" ")}var z="http://www.w3.org/2000/svg",I=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function u(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function g(t,i){for(let[e,n]of Object.entries(i))n!=null&&t.style.setProperty(u(e),typeof n=="number"&&n!==0&&!I.test(e)&&!e.startsWith("--")?`${n}px`:String(n))}function p(t,i,e,n=!1){if(t==null||typeof t=="boolean")return;if(Array.isArray(t)){for(let o of t)p(o,i,e,n);return}if(typeof t!="object"){i.appendChild(document.createTextNode(String(t)));return}if(typeof t.type=="function"){p(t.type(t.props),i,e,n);return}n=n||t.type==="svg";let l=n?document.createElementNS(z,t.type):document.createElement(t.type);for(let[o,s]of Object.entries(t.props))if(!(["children","key","ref","__mount"].includes(o)||s==null))if(o==="style")g(l,s);else{let r=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:n?u(o):o;l.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:r,String(s))}i.appendChild(l),p(t.props.children,l,e,n&&t.type!=="foreignObject"),t.props.__mount?.(l,e)}var j={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[5ch]":{height:"5ch"},"w-[9ch]":{width:"9ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},"pointer-events-none":{pointerEvents:"none"},absolute:{position:"absolute"},"inset-0":{inset:"0"},grid:{display:"grid"},"grid-cols-9":{gridTemplateColumns:"repeat(9,minmax(0,1fr))"},"grid-rows-5":{gridTemplateRows:"repeat(5,minmax(0,1fr))"},flex:{display:"flex"},"h-[1ch]":{height:"1ch"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"top-0":{top:"0"},"left-0":{left:"0"},"z-30":{zIndex:"30"},"z-20":{zIndex:"20"},"z-10":{zIndex:"10"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function h(t,i){let e={};if(typeof t=="string")for(let n of t.split(/\s+/))Object.assign(e,j[n]);return Object.assign(e,i||{})}var k=["\u2588","\u2593","\u2592"];function v({className:t,blocks:i=k,track:e="\u2591",...n}){let l=k.map((s,r)=>i[r]??k[r]),o=Array.from({length:45},(s,r)=>{let c=Math.floor(r/9),d=r%9;return c===0||c===4||d===0||d===4||d===8?e:" "});return a(m,null,a("style",null,`
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
      `),a("span",{role:"status",...n,style:h(f("relative inline-flex h-[5ch] w-[9ch] overflow-hidden font-mono text-xl leading-none text-current select-none",t),null)},a("span",{"aria-hidden":"true",style:h("pointer-events-none absolute inset-0 grid grid-cols-9 grid-rows-5",null)},o.map((s,r)=>a("span",{key:r,style:h("flex h-[1ch] w-[1ch] items-center justify-center",null)},s))),l.map((s,r)=>a("span",{key:`${s}-${r}`,"aria-hidden":"true",style:h(f("pointer-events-none absolute top-0 left-0 flex h-[1ch] w-[1ch] items-center justify-center",["z-30","z-20","z-10"][r]),{animation:"loading-ui-infinity-track var(--duration, 3.2s) linear infinite",animationDelay:`calc(var(--delay, 0.1s) * ${r})`,backgroundColor:"var(--mask-color, var(--background))"})},s)),a("span",{style:h("sr-only",null)},"Loading")))}var N=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function T({component:t,css:i,geometry:e,usesText:n,forwardsStyle:l}){let o=document.querySelector("[data-dash-loading-ui]");if(!o)return;let s=o.attachShadow({mode:"open"}),r=document.createElement("style");r.textContent=N+i,s.appendChild(r);let c=document.createElement("span");c.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(c.style,e),s.appendChild(c);let d=!!(e.width||e.height),C=n?o.dataset.dashLoadingText||"Loading":void 0;p(a(t,l&&d?{style:{width:"100%",height:"100%"},children:C}:{className:d?"size-full":void 0,children:C}),c,r)}var S='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';T({component:v,css:S,geometry:{},usesText:!1,forwardsStyle:!1});})();
