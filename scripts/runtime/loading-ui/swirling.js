(()=>{function a(t,r,...e){return{type:t,props:{...r,...e.length?{children:e}:{}}}}function h({children:t}){return t}var _="http://www.w3.org/2000/svg",q=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function f(t){return t.startsWith("--")?t:t.replace(/[A-Z]/g,r=>`-${r.toLowerCase()}`)}function x(t,r){for(let[e,n]of Object.entries(r))n!=null&&t.style.setProperty(f(e),typeof n=="number"&&n!==0&&!q.test(e)&&!e.startsWith("--")?`${n}px`:String(n))}function p(t,r,e,n=!1){if(t==null||typeof t=="boolean")return;if(Array.isArray(t)){for(let o of t)p(o,r,e,n);return}if(typeof t!="object"){r.appendChild(document.createTextNode(String(t)));return}if(typeof t.type=="function"){p(t.type(t.props),r,e,n);return}n=n||t.type==="svg";let c=n?document.createElementNS(_,t.type):document.createElement(t.type);for(let[o,s]of Object.entries(t.props))if(!(["children","key","ref","__mount"].includes(o)||s==null))if(o==="style")x(c,s);else{let u=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:n?f(o):o;c.setAttribute(n&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:u,String(s))}r.appendChild(c),p(t.props.children,c,e,n&&t.type!=="foreignObject"),t.props.__mount?.(c,e)}var H={"size-full":{width:"100%",height:"100%"},"loading-ui-swirling-circle":{transformOrigin:"center",animation:`loading-ui-swirling-dash var(--duration, 1.5s) ease-in-out infinite alternate,
            loading-ui-swirling-spin calc(var(--duration, 1.5s) * 1.333333) linear infinite`}};function L(t,r){let e={};if(typeof t=="string")for(let n of t.split(/\s+/))Object.assign(e,H[n]);return Object.assign(e,r||{})}function P(t){return a(h,null,a("style",null,`
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
      `),a("svg",{viewBox:"0 0 800 800",xmlns:"http://www.w3.org/2000/svg",...t},a("circle",{cx:"400",cy:"400",r:"200",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"50",style:L("loading-ui-swirling-circle",null)})))}var I=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function R({component:t,css:r,geometry:e,usesText:n,forwardsStyle:c,visualScale:o=1}){let s=document.querySelector("[data-dash-loading-ui]");if(!s)return;let u=s.attachShadow({mode:"open"}),w=document.createElement("style");w.textContent=I+r,u.appendChild(w);let i=document.createElement("span");i.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(i.style,e);let g=getComputedStyle(s),A=g.getPropertyValue("--dash-loading-font-size").trim();n&&A&&(i.style.fontSize=A),u.appendChild(i);let m=i;o!==1&&(i.style.width=`calc(${e.width} * ${o})`,i.style.height=`calc(${e.height} * ${o})`,i.style.alignItems="center",i.style.justifyContent="center",m=document.createElement("span"),m.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(m.style,e),i.appendChild(m));let $=!!(e.width||e.height),O=n?s.dataset.dashLoadingText||"Loading":void 0;p(a(t,c&&$?{style:{width:"100%",height:"100%"},children:O}:{className:$?"size-full":void 0,children:O}),m,w);let j=g.getPropertyValue("--dash-loading-target-size").trim(),y=1;if(j&&!n){let d=i.getBoundingClientRect(),l=Math.max(d.width,d.height);l>0&&(y=Number(j)/l),s.style.zoom=String(y)}let b=g.getPropertyValue("--dash-loading-thickness").trim();b&&y>0&&(w.textContent+=`*{border-width:${Number(b)/y}px!important}svg *{stroke-width:${Number(b)/y}px!important;vector-effect:non-scaling-stroke}`);let k=Number(g.getPropertyValue("--dash-loading-rate").trim()||1),V=g.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let d of u.querySelectorAll("*"))for(let l of d.getAnimations())l.playbackRate=k,V||l.pause();for(let d of u.querySelectorAll("svg")){if(k!==1)for(let l of d.querySelectorAll("animate,animateTransform,animateMotion"))for(let z of["dur","begin"]){let E=l.getAttribute(z);E&&l.setAttribute(z,E.replace(/(-?[\d.]+)(ms|s)\b/g,(Z,M,W)=>`${Number(M)/k}${W}`))}V||d.pauseAnimations()}}var B="";R({component:P,css:B,geometry:{width:"48px",height:"48px"},usesText:!1,forwardsStyle:!0,visualScale:1});})();
