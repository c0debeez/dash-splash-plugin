(()=>{function r(e,i,...t){return{type:e,props:{...i,...t.length?{children:t}:{}}}}function u({children:e}){return e}function y(...e){return e.filter(Boolean).join(" ")}var T="http://www.w3.org/2000/svg",j=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function p(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function f(e,i){for(let[t,n]of Object.entries(i))n!=null&&e.style.setProperty(p(t),typeof n=="number"&&n!==0&&!j.test(t)&&!t.startsWith("--")?`${n}px`:String(n))}function s(e,i,t,n=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let o of e)s(o,i,t,n);return}if(typeof e!="object"){i.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){s(e.type(e.props),i,t,n);return}n=n||e.type==="svg";let a=n?document.createElementNS(T,e.type):document.createElement(e.type);for(let[o,l]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(o)||l==null))if(o==="style")f(a,l);else{let d=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:n?p(o):o;a.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:d,String(l))}i.appendChild(a),s(e.props.children,a,t,n&&e.type!=="foreignObject"),e.props.__mount?.(a,t)}var W={"size-full":{width:"100%",height:"100%"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"h-[1em]":{height:"1em"},"w-[10ch]":{width:"10ch"},"overflow-hidden":{overflow:"hidden"},"font-mono":{fontFamily:'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'},"text-xl":{fontSize:"1.25rem",lineHeight:"var(--tw-leading,var(--text-xl--line-height))"},"leading-none":{"--tw-leading":"1",lineHeight:"1"},"text-current":{color:"currentColor"},"select-none":{WebkitUserSelect:"none",userSelect:"none"},flex:{display:"flex"},"h-full":{height:"100%"},"w-[1ch]":{width:"1ch"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"opacity-30":{opacity:".3"},absolute:{position:"absolute"},"inset-0":{inset:"0"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function c(e,i){let t={};if(typeof e=="string")for(let n of e.split(/\s+/))Object.assign(t,W[n]);return Object.assign(t,i||{})}var L=[1,2,3,4,5,5,4,3,2,1];function S({className:e,block:i="\u2588",track:t="\u2591",...n}){return r(u,null,r("style",null,`
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
      `),r("span",{role:"status",...n,style:c(y("relative inline-flex h-[1em] w-[10ch] overflow-hidden font-mono text-xl leading-none text-current select-none",e),null)},L.map((a,o)=>r("span",{key:o,"aria-hidden":"true",style:c("relative flex h-full w-[1ch] items-center justify-center",null)},r("span",{style:c("opacity-30",null)},t),r("span",{style:c("absolute inset-0 flex items-center justify-center",{animation:`loading-ui-symmetric-wave-${a} var(--duration, 2s) linear infinite`})},i))),r("span",{style:c("sr-only",null)},"Loading")))}var M=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function k({component:e,css:i,geometry:t,usesText:n,forwardsStyle:a}){let o=document.querySelector("[data-dash-loading-ui]");if(!o)return;let l=o.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=M+i,l.appendChild(d);let m=document.createElement("span");m.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(m.style,t),l.appendChild(m);let b=!!(t.width||t.height),v=n?o.dataset.dashLoadingText||"Loading":void 0;s(r(e,a&&b?{style:{width:"100%",height:"100%"},children:v}:{className:b?"size-full":void 0,children:v}),m,d)}var C='@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-leading:initial}}}:root,:host{--text-xl--line-height:1.75rem}@property --tw-leading{syntax:"*";inherits:false}';k({component:S,css:C,geometry:{},usesText:!1,forwardsStyle:!1});})();
