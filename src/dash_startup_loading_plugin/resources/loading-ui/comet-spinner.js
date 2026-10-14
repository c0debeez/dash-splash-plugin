(()=>{function c(e,i,...a){return{type:e,props:{...i,...a.length?{children:a}:{}}}}function v({children:e}){return e}function y(...e){return e.filter(Boolean).join(" ")}var B="http://www.w3.org/2000/svg",D=/^(opacity|zIndex|fontWeight|lineHeight|flex|flexGrow|flexShrink|order|scale|strokeWidth|strokeDashoffset|fillOpacity|strokeOpacity|animationIterationCount)$/;function g(e){return e.startsWith("--")?e:e.replace(/[A-Z]/g,i=>`-${i.toLowerCase()}`)}function b(e,i){for(let[a,t]of Object.entries(i))t!=null&&e.style.setProperty(g(a),typeof t=="number"&&t!==0&&!D.test(a)&&!a.startsWith("--")?`${t}px`:String(t))}function u(e,i,a,t=!1){if(e==null||typeof e=="boolean")return;if(Array.isArray(e)){for(let o of e)u(o,i,a,t);return}if(typeof e!="object"){i.appendChild(document.createTextNode(String(e)));return}if(typeof e.type=="function"){u(e.type(e.props),i,a,t);return}t=t||e.type==="svg";let l=t?document.createElementNS(B,e.type):document.createElement(e.type);for(let[o,n]of Object.entries(e.props))if(!(["children","key","ref","__mount"].includes(o)||n==null))if(o==="style")b(l,n);else{let s=o==="className"?"class":["viewBox","preserveAspectRatio"].includes(o)?o:t?g(o):o;l.setAttribute(t&&/^(gradient|pattern|marker|key|attribute|repeat|calc)/.test(o)?o:s,String(n))}i.appendChild(l),u(e.props.children,l,a,t&&e.type!=="foreignObject"),e.props.__mount?.(l,a)}var F={"size-full":{width:"100%",height:"100%"},"@container-[size]":{containerType:"size"},relative:{position:"relative"},"inline-flex":{display:"inline-flex"},"aspect-square":{aspectRatio:"1"},"items-center":{alignItems:"center"},"justify-center":{justifyContent:"center"},"align-middle":{verticalAlign:"middle"},absolute:{position:"absolute"},"inset-0":{inset:"0"},"rounded-full":{borderRadius:"3.40282e38px"},"sr-only":{clipPath:"inset(50%)",whiteSpace:"nowrap",borderWidth:"0",width:"1px",height:"1px",margin:"-1px",padding:"0",position:"absolute",overflow:"hidden"}};function w(e,i){let a={};if(typeof e=="string")for(let t of e.split(/\s+/))Object.assign(a,F[t]);return Object.assign(a,i||{})}var L="loading-ui-comet-shadow",M="loading-ui-comet-rotation";function V(e,i,a){return Math.min(Math.max(e,i),a)}function q({className:e,style:i,headScale:a=.2,radiusScale:t=.83,...l}){let o=V(a,.08,.35),n=V(t,.3,1.1),s={...i,"--loading-ui-comet-head":`${(o*100).toFixed(2)}cqmin`,"--loading-ui-comet-radius":`${(n*100).toFixed(2)}cqmin`};return c(v,null,c("style",null,`
        @keyframes ${L} {
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

        @keyframes ${M} {
          0% {
            transform: rotate(0deg);
          }

          100% {
            transform: rotate(360deg);
          }
        }
      `),c("span",{role:"status","aria-label":"Loading",...l,style:w(y("@container-[size] relative inline-flex aspect-square items-center justify-center align-middle",e),s)},c("span",{"aria-hidden":"true",style:w("absolute inset-0 rounded-full",{animation:`${L} var(--duration, 1.7s) infinite var(--easing, ease), ${M} var(--duration, 1.7s) infinite var(--easing, ease)`,transform:"translateZ(0)"})}),c("span",{style:w("sr-only",null)},"Loading")))}var G=":host{display:inline-block;width:100%;height:100%;color:inherit}*,*::before,*::after{box-sizing:border-box}.sr-only{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}";function E({component:e,css:i,geometry:a,usesText:t,forwardsStyle:l,visualScale:o=1}){let n=document.querySelector("[data-dash-loading-ui]");if(!n)return;let s=n.attachShadow({mode:"open"}),x=document.createElement("style");x.textContent=G+i,s.appendChild(x);let r=document.createElement("span");r.style.cssText="display:inline-flex;width:auto;height:auto",Object.assign(r.style,a);let p=getComputedStyle(n),k=p.getPropertyValue("--dash-loading-font-size").trim();t&&k&&(r.style.fontSize=k),s.appendChild(r);let f=r;o!==1&&(r.style.width=`calc(${a.width} * ${o})`,r.style.height=`calc(${a.height} * ${o})`,r.style.alignItems="center",r.style.justifyContent="center",f=document.createElement("span"),f.style.cssText="display:inline-flex;flex-shrink:0",Object.assign(f.style,a),r.appendChild(f));let O=!!(a.width||a.height),j=t?n.dataset.dashLoadingText||"Loading":void 0;u(c(e,l&&O?{style:{width:"100%",height:"100%"},children:j}:{className:O?"size-full":void 0,children:j}),f,x);let R=p.getPropertyValue("--dash-loading-target-size").trim(),h=1;if(R&&!t){let m=r.getBoundingClientRect(),d=Math.max(m.width,m.height);d>0&&(h=Number(R)/d),n.style.zoom=String(h)}let S=p.getPropertyValue("--dash-loading-thickness").trim();S&&h>0&&(x.textContent+=`*{border-width:${Number(S)/h}px!important}svg *{stroke-width:${Number(S)/h}px!important;vector-effect:non-scaling-stroke}`);let C=Number(p.getPropertyValue("--dash-loading-rate").trim()||1),z=p.getPropertyValue("--dash-loading-play-state").trim()!=="paused";for(let m of s.querySelectorAll("*"))for(let d of m.getAnimations())d.playbackRate=C,z||d.pause();for(let m of s.querySelectorAll("svg")){if(C!==1)for(let d of m.querySelectorAll("animate,animateTransform,animateMotion"))for(let P of["dur","begin"]){let I=d.getAttribute(P);I&&d.setAttribute(P,I.replace(/(-?[\d.]+)(ms|s)\b/g,(K,H,W)=>`${Number(H)/C}${W}`))}z||m.pauseAnimations()}}var _="";E({component:q,css:_,geometry:{width:"2rem",height:"2rem"},usesText:!1,forwardsStyle:!1,visualScale:1});})();
