(()=>{function i(t,o,...e){return{type:t,props:{...o,...e.length?{children:e}:{}}}}function u({children:t}){return t}var T="http://www.w3.org/2000/svg",O=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function p(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,o=>`-${o.toLowerCase()}`)}function c(t,o){for(let[e,n]of Object.entries(o))n!=null&&t.style.setProperty(p(e),typeof n=="number"&&n!==0&&!O.test(e)&&!e.startsWith("--")?`${n}px`:String(n))}function s(t,o,e,n=!1){if(t==null||typeof t=="boolean")return;if(Array.isArray(t)){for(let r of t)s(r,o,e,n);return}if(typeof t!="object"){o.appendChild(document.createTextNode(String(t)));return}if(typeof t.type=="function"){s(t.type(t.props),o,e,n);return}n=n||t.type==="svg";let a=n?document.createElementNS(T,t.type):document.createElement(t.type);for(let[r,l]of Object.entries(t.props))if(!(["children","key","ref","__mount"].includes(r)||l==null))if(r==="style")c(a,l);else{let d=r==="className"?"class":["viewBox","preserveAspectRatio"].includes(r)?r:n?p(r):r;a.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(r)?r:d,String(l))}o.appendChild(a),s(t.props.children,a,e,n&&t.type!=="foreignObject"),t.props.__mount?.(a,e)}var L={"size-full":{width:"100%",height:"100%"},"loading-ui-swirling-circle":{transformOrigin:"center",animation:`loading-ui-swirling-dash var(--duration, 1.5s) ease-in-out infinite alternate,
            loading-ui-swirling-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite`}};function k(t,o){let e={};if(typeof t=="string")for(let n of t.split(/\s+/))Object.assign(e,L[n]);return Object.assign(e,o||{})}function S(t){return i(u,null,i("style",null,`
        @keyframes loading-ui-swirling-spin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes loading-ui-swirling-dash {
          0% {
            stroke-dasharray: 1, 800;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -200px;
          }
          100% {
            stroke-dasharray: 800, 1;
            stroke-dashoffset: -800px;
          }
        }

        .loading-ui-swirling-circle {
          transform-origin: center;
          animation:
            loading-ui-swirling-dash var(--duration, 1.5s) ease-in-out infinite alternate,
            loading-ui-swirling-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite;
        }
      `),i("svg",{viewBox:"0 0 800 800",xmlns:"http://www.w3.org/2000/svg",...t},i("circle",{cx:"400",cy:"400",r:"200",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"50",style:k("loading-ui-swirling-circle",null)})))}var N=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function C({component:t,css:o,geometry:e,usesText:n,forwardsStyle:a}){let r=document.querySelector("[data-dash-loading-ui]");if(!r)return;let l=r.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=N+o,l.appendChild(d);let f=document.createElement("span");f.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(f.style,e),l.appendChild(f);let w=!!(e.width||e.height),b=n?r.dataset.dashLoadingText||"Loading":void 0;s(i(t,a&&w?{style:{width:"100%",height:"100%"},children:b}:{className:w?"size-full":void 0,children:b}),f,d)}var v="";C({component:S,css:v,geometry:{width:"6rem",height:"6rem"},usesText:!1,forwardsStyle:!0});})();
