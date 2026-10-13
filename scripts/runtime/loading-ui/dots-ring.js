(()=>{function i(t,o,...e){return{type:t,props:{...o,...e.length?{children:e}:{}}}}function m({children:t}){return t}function y(...t){return t.filter(Boolean).join(" ")}var M="http://www.w3.org/2000/svg",z=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function d(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}function g(t,o){for(let[e,n]of Object.entries(o))n!=null&&t.style.setProperty(d(e),typeof n=="number"&&n!==0&&!z.test(e)&&!e.startsWith("--")?`${n}px`:String(n))}function p(t,o,e,n=!1){if(t==null||typeof t=="boolean")return;if(Array.isArray(t)){for(let r of t)p(r,o,e,n);return}if(typeof t!="object"){o.appendChild(document.createTextNode(String(t)));return}if(typeof t.type=="function"){p(t.type(t.props),o,e,n);return}n=n||t.type==="svg";let a=n?document.createElementNS(M,t.type):document.createElement(t.type);for(let[r,s]of Object.entries(t.props))if(!(["children","key","ref","__mount"].includes(r)||s==null))if(r==="style")g(a,s);else{let l=r==="className"?"class":["viewBox","preserveAspectRatio"].includes(r)?r:n?d(r):r;a.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(r)?r:l,String(s))}o.appendChild(a),p(t.props.children,a,e,n&&t.type!=="foreignObject"),t.props.__mount?.(a,e)}var L={"size-full":{width:"100%",height:"100%"},"@container-[size]":{containerType:"size"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"aspect-square":{aspectRatio:"1"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},block:{display:"block"},absolute:{position:"absolute"},"top-1/2":{top:"50%"},"left-1/2":{left:"50%"},"rounded-full":{borderRadius:"3.40282e38px"},"bg-current":{backgroundColor:"currentColor"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function f(t,o){let e={};if(typeof t=="string")for(let n of t.split(/\s+/))Object.assign(e,L[n]);return Object.assign(e,o||{})}function k(t,o,e){return Math.min(Math.max(t,o),e)}function T({className:t,style:o,dots:e=8,dotScale:n=.16,radiusScale:a=.34,...r}){let s=Math.max(4,Math.floor(e)),l=k(n,.2,.4),c=k(a,0,.5-l/2);return i(m,null,i("style",null,`
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
      `),i("span",{role:"status",...r,style:f(y("@container-[size] relative inline-flex aspect-square items-center justify-center",t),o)},i("span",{"aria-hidden":"true",style:f("relative block size-full",null)},Array.from({length:s},(h,u)=>{let x=u/s*Math.PI*2,$=`${(Math.sin(x)*c*100).toFixed(2)}cqmin`,j=`${(-Math.cos(x)*c*100).toFixed(2)}cqmin`;return i("span",{key:u,style:f("absolute top-1/2 left-1/2",{width:`calc(${l} * 100cqmin)`,height:`calc(${l} * 100cqmin)`,transform:`translate(-50%, -50%) translate(${$}, ${j})`})},i("span",{style:f("block size-full rounded-full bg-current",{animation:"loading-ui-dots-ring-pulse var(--duration, 1s) linear infinite",animationDelay:`calc(var(--duration, 1s) / ${s} * ${u-s})`})}))})),i("span",{style:f("sr-only",null)},"Loading")))}var N=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function v({component:t,css:o,geometry:e,usesText:n,forwardsStyle:a}){let r=document.querySelector("[data-dash-loading-ui]");if(!r)return;let s=r.attachShadow({mode:"open"}),l=document.createElement("style");l.textContent=N+o,s.appendChild(l);let c=document.createElement("span");c.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(c.style,e),s.appendChild(c);let h=!!(e.width||e.height),u=n?r.dataset.dashLoadingText||"Loading":void 0;p(i(t,a&&h?{style:{width:"100%",height:"100%"},children:u}:{className:h?"size-full":void 0,children:u}),c,l)}var R="";v({component:T,css:R,geometry:{width:"2rem",height:"2rem"},usesText:!1,forwardsStyle:!1});})();
