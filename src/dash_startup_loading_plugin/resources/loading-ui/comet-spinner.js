(()=>{function n(a,i,...e){return{type:a,props:{...i,...e.length?{children:e}:{}}}}function u({children:a}){return a}function m(...a){return a.filter(Boolean).join(" ")}var A="http://www.w3.org/2000/svg",j=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function s(a){return a.startsWith("--")?a:a.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function p(a,i){for(let[e,t]of Object.entries(i))t!=null&&a.style.setProperty(s(e),typeof t=="number"&&t!==0&&!j.test(e)&&!e.startsWith("--")?`${t}px`:String(t))}function l(a,i,e,t=!1){if(a==null||typeof a=="boolean")return;if(Array.isArray(a)){for(let o of a)l(o,i,e,t);return}if(typeof a!="object"){i.appendChild(document.createTextNode(String(a)));return}if(typeof a.type=="function"){l(a.type(a.props),i,e,t);return}t=t||a.type==="svg";let r=t?document.createElementNS(A,a.type):document.createElement(a.type);for(let[o,c]of Object.entries(a.props))if(!(["children","key","ref","__mount"].includes(o)||c==null))if(o==="style")p(r,c);else{let d=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:t?s(o):o;r.setAttribute(t&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:d,String(c))}i.appendChild(r),l(a.props.children,r,e,t&&a.type!=="foreignObject"),a.props.__mount?.(r,e)}var R={"size-full":{width:"100%",height:"100%"},"@container-[size]":{containerType:"size"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"aspect-square":{aspectRatio:"1"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"align-middle":{verticalAlign:"middle"},absolute:{position:"absolute"},"inset-0":{inset:"0"},"rounded-full":{borderRadius:"3.40282e38px"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function f(a,i){let e={};if(typeof a=="string")for(let t of a.split(/\s+/))Object.assign(e,R[t]);return Object.assign(e,i||{})}var S="loading-ui-comet-shadow",C="loading-ui-comet-rotation";function T(a,i,e){return Math.min(Math.max(a,i),e)}function N({className:a,style:i,headScale:e=.2,radiusScale:t=.83,...r}){let o=T(e,.08,.35),c=T(t,.3,1.1),d={...i,"--loading-ui-comet-head":`${(o*100).toFixed(2)}cqmin`,"--loading-ui-comet-radius":`${(c*100).toFixed(2)}cqmin`};return n(u,null,n("style",null,`
        @keyframes ${S} {
          0% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          5%,
          95% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          10%,
          59% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.105) calc(var(--loading-ui-comet-radius) * -0.994) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.208) calc(var(--loading-ui-comet-radius) * -0.978) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.308) calc(var(--loading-ui-comet-radius) * -0.95) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.358) calc(var(--loading-ui-comet-radius) * -0.934) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          20% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.407) calc(var(--loading-ui-comet-radius) * -0.913) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.669) calc(var(--loading-ui-comet-radius) * -0.743) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.808) calc(var(--loading-ui-comet-radius) * -0.588) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.902) calc(var(--loading-ui-comet-radius) * -0.41) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          38% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              calc(var(--loading-ui-comet-radius) * -0.454) calc(var(--loading-ui-comet-radius) * -0.892) 0 calc(var(--loading-ui-comet-head) * -2.1),
              calc(var(--loading-ui-comet-radius) * -0.777) calc(var(--loading-ui-comet-radius) * -0.629) 0 calc(var(--loading-ui-comet-head) * -2.2),
              calc(var(--loading-ui-comet-radius) * -0.934) calc(var(--loading-ui-comet-radius) * -0.358) 0 calc(var(--loading-ui-comet-head) * -2.3),
              calc(var(--loading-ui-comet-radius) * -0.988) calc(var(--loading-ui-comet-radius) * -0.108) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }

          100% {
            box-shadow:
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.1),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.2),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.3),
              0 calc(var(--loading-ui-comet-radius) * -1) 0 calc(var(--loading-ui-comet-head) * -2.385);
          }
        }

        @keyframes ${C} {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `),n("span",{role:"status","aria-label":"Loading",...r,style:f(m("@container-[size] relative inline-flex aspect-square items-center justify-center align-middle",a),d)},n("span",{"aria-hidden":"true",style:f("absolute inset-0 rounded-full",{animation:`${S} var(--duration, 1.7s) infinite var(--easing, ease), ${C} var(--duration, 1.7s) infinite var(--easing, ease)`,transform:"translateZ(0)"})}),n("span",{style:f("sr-only",null)},"Loading")))}var I=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box;border-width:var(--dash-loading-ui-stroke,2px)!important}svg,svg *{stroke-width:var(--dash-loading-ui-stroke,2px)!important}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function O({component:a,css:i,geometry:e,usesText:t,forwardsStyle:r}){let o=document.querySelector("[data-dash-loading-ui]");if(!o)return;let c=o.attachShadow({mode:"open"}),d=document.createElement("style");d.textContent=I+i,c.appendChild(d);let g=document.createElement("span");g.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(g.style,e),c.appendChild(g);let b=!!(e.width||e.height),w=t?o.dataset.dashLoadingText||"Loading":void 0;l(n(a,r&&b?{style:{width:"100%",height:"100%"},children:w}:{className:b?"size-full":void 0,children:w}),g,d)}var k="";O({component:N,css:k,geometry:{width:"2rem",height:"2rem"},usesText:!1,forwardsStyle:!1});})();
