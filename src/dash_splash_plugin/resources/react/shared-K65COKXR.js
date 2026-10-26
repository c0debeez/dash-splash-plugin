import{m as j,t as or,w as i,x as r,y as a}from"./shared-WHKIMZAY.js";var k="--ld-duration",b="--ld-play-state",w="--ld-size",u="--ld-step",E=20,e=`var(${w}, ${E}px)`,ar={arc:800,atom:1e3,blocks:1300,"bouncing-dots":500,cascade:1500,"circular-dots":800,classic:1200,"classic-v2":800,clock:1200,comet:700,compass:500,dual:1e3,eclipse:1200,flip:1200,gather:1600,leap:1800,"linear-dots":900,loading:1e3,morph:1200,orbit:750,pulse:1200,radar:1500,ring:800,ripple:1200,slide:2400,snake:1400,swirl:1200,trace:1200,wave:900};function T(t){return`var(${k}, ${ar[t]}ms)`}function c(t,o){return`calc(${T(t)} * (var(${u}) - ${o}) / ${o})`}var ir=`var(${b}, running)`;function d(t,o,l){return`animation: ${[o].flat().map($=>`${$} ${T(t)} ${l} infinite`).join(", ")};
  animation-play-state: ${ir};`}function n({children:t,name:o}){return r("style",{href:`ld-${o}`,precedence:"loading-dev",children:t})}function m(t){return{[u]:t}}function s(t,{className:o,color:l,duration:h,playState:$,size:tr=E}){return{"aria-hidden":!0,className:[`ld-${t}`,o].filter(Boolean).join(" "),style:{[w]:`${tr}px`,...l===void 0?null:{color:l},...h===void 0?null:{[k]:`${h}ms`},...$===void 0?null:{[b]:$}}}}var L=[0,1,2,7,null,3,6,5,4],nr=L.filter(t=>t!==null).length,sr=`
.ld-swirl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: calc(${e} * 0.15625);
  box-sizing: border-box;
  width: ${e};
  height: ${e};
  padding: calc(${e} * 0.0625);
}

.ld-swirl-cell {
  background: currentColor;
  border-radius: calc(${e} * 0.0625);
  ${d("swirl","ld-swirl-fade","linear")}
  animation-delay: ${c("swirl",nr)};
}

@keyframes ld-swirl-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-swirl-cell {
    opacity: 0.6;
    animation: none;
  }
}
`;function lr(t){return a(i,{children:[r(n,{name:"swirl",children:sr}),r("div",{...s("swirl",t),children:L.map((o,l)=>o===null?r("div",{},l):r("div",{className:"ld-swirl-cell",style:m(o)},l))})]})}var dr="linear";function p(t,o=dr){let l=`ld-${t}-spin`;return o==="linear"?l:`${l} ${l}-${o}`}var cr=`to {
    transform: rotate(360deg);
  }`;function f(t,o=cr){return`
.ld-${t}-spin {
  transform-origin: center;
  ${d(t,`ld-${t}-rotate`,"linear")}
}

.ld-${t}-spin-ease-in-out {
  animation-timing-function: ease-in-out;
}

.ld-${t}-spin-stacked {
  animation-name: ld-${t}-rotate, ld-${t}-rotate;
  animation-timing-function: linear, ease-in-out;
  animation-composition: add;
}

@keyframes ld-${t}-rotate {
  ${o}
}

@media (prefers-reduced-motion: reduce) {
  .ld-${t}-spin {
    animation: none;
  }
}
`}var mr="round";function g(t=mr){return t==="flat"?"butt":"round"}var S=20,x=17.5,R=4,F=4*(x-2*R)+2*Math.PI*R,_=16,Z={height:x,rx:R,width:x,x:(S-x)/2,y:(S-x)/2},pr=`
.ld-trace {
  width: ${e};
  height: ${e};
}

${f("trace",`to {
    stroke-dashoffset: ${-F};
  }`)}
`;function fr({cap:t,easing:o,...l}){return a(i,{children:[r(n,{name:"trace",children:pr}),a("svg",{...s("trace",l),fill:"none",role:"presentation",stroke:"currentColor",strokeWidth:"2.5",viewBox:`0 0 ${S} ${S}`,children:[r("rect",{...Z,opacity:"0.2"}),r("rect",{...Z,className:p("trace",o),strokeDasharray:`${_} ${F-_}`,strokeLinecap:g(t)})]})]})}var D="center",V=Array.from({length:5},(t,o)=>o),hr=`
.ld-wave {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${e};
  height: ${e};
}

.ld-wave-bar {
  width: calc(${e} * 0.12);
  height: 100%;
  background: currentColor;
  border-radius: 9999px;
  ${d("wave","ld-wave-rise","ease-in-out")}
  animation-delay: ${c("wave",V.length)};
}

.ld-wave-bar-bottom {
  align-self: flex-end;
}

@keyframes ld-wave-rise {
  0%,
  100% {
    height: 30%;
  }
  50% {
    height: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-wave-bar {
    height: calc((0.4 + var(${u}) * 0.15) * 100%);
    animation: none;
  }
}
`;function ur({origin:t=D,...o}){return a(i,{children:[r(n,{name:"wave",children:hr}),r("div",{...s("wave",o),children:V.map(l=>r("div",{className:`ld-wave-bar ld-wave-bar-${t}`,style:m(l)},l))})]})}var gr=`
.ld-orbit {
  --ld-orbit-stroke: calc(${e} * 0.0625);
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-orbit-track {
  position: absolute;
  inset: 8%;
  border-radius: 9999px;
  background: conic-gradient(from 180deg, transparent 0deg, currentColor 180deg, transparent 180deg);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - var(--ld-orbit-stroke)), #000 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - var(--ld-orbit-stroke)), #000 0);
}

.ld-orbit-dot {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 25%;
  height: 25%;
  background: currentColor;
  border-radius: 9999px;
  transform: translate(-50%, -50%);
}

${f("orbit")}
`;function vr({easing:t,...o}){return a(i,{children:[r(n,{name:"orbit",children:gr}),a("div",{...s("orbit",o),children:[r("div",{className:"ld-orbit-dot"}),r("div",{className:`ld-orbit-track ${p("orbit",t)}`})]})]})}var $r=`
.ld-pulse {
  width: ${e};
  height: ${e};
}

.ld-pulse-ring {
  transform-origin: center;
  ${d("pulse","ld-pulse-ripple","ease-out")}
}

@keyframes ld-pulse-ripple {
  from {
    opacity: 0.4;
    transform: scale(0.25);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-pulse-ring {
    opacity: 0.2;
    animation: none;
  }
}
`;function yr(t){return a(i,{children:[r(n,{name:"pulse",children:$r}),a("svg",{...s("pulse",t),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[r("circle",{className:"ld-pulse-ring",cx:"8",cy:"8",fill:"currentColor",r:"8"}),r("circle",{cx:"8",cy:"8",fill:"currentColor",r:"2"})]})]})}or();var xr=`
.ld-radar {
  width: ${e};
  height: ${e};
}

${f("radar")}
`;function Cr({easing:t,...o}){let l=j();return a(i,{children:[r(n,{name:"radar",children:xr}),a("svg",{...s("radar",o),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[r("defs",{children:a("radialGradient",{cx:"8",cy:"8",gradientUnits:"userSpaceOnUse",id:l,r:"8",children:[r("stop",{offset:"0.3334",stopColor:"currentColor"}),r("stop",{offset:"1",stopColor:"currentColor",stopOpacity:"0"})]})}),r("circle",{cx:"8",cy:"8",fill:"currentColor",opacity:"0.2",r:"8"}),r("circle",{cx:"8",cy:"8",opacity:"0.2",r:"5.5",stroke:"currentColor"}),r("path",{className:p("radar",t),d:"M8 0C9.50657 0 10.9824 0.425672 12.2578 1.22754C13.5333 2.02953 14.557 3.17533 15.21 4.5332C15.8629 5.89107 16.1193 7.40626 15.9492 8.90332C15.7791 10.4001 15.1896 11.8184 14.249 12.9951L10.4707 9.69922C10.8037 9.21598 11 8.63123 11 8C11 6.34315 9.65685 5 8 5V0Z",fill:`url(#${l})`}),r("circle",{cx:"8",cy:"8",fill:"currentColor",r:"2"})]})]})}var Sr=`
.ld-ring {
  width: ${e};
  height: ${e};
}

${f("ring")}
`;function kr({cap:t,easing:o,...l}){return a(i,{children:[r(n,{name:"ring",children:Sr}),a("svg",{...s("ring",l),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:[r("circle",{cx:"12",cy:"12",opacity:"0.2",r:"10",stroke:"currentColor",strokeWidth:"2.5"}),r("circle",{className:p("ring",o),cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeDasharray:"16 46.8",strokeLinecap:g(t),strokeWidth:"2.5"})]})]})}var P="out",I=Array.from({length:3},(t,o)=>o),br=`
.ld-ripple {
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-ripple-ring {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: calc(${e} * 0.08) solid currentColor;
  border-radius: 9999px;
  ${d("ripple","ld-ripple-spread","ease-out")}
  animation-delay: ${c("ripple",I.length)};
}

.ld-ripple-ring-in {
  animation-direction: reverse;
}

@keyframes ld-ripple-spread {
  from {
    opacity: 1;
    transform: scale(0);
  }
  to {
    opacity: 0;
    transform: scale(1);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-ripple-ring {
    opacity: 0.4;
    transform: scale(calc((var(${u}) + 1) / ${I.length}));
    animation: none;
  }
}
`;function wr({direction:t=P,...o}){return a(i,{children:[r(n,{name:"ripple",children:br}),r("div",{...s("ripple",o),children:I.map(l=>r("div",{className:`ld-ripple-ring ld-ripple-ring-${t}`,style:m(l)},l))})]})}var C=34,B=20,O=(100-2*C-B)/2,y=`${((C+B)/C*100).toFixed(1)}%`,U=[`translate(${y}, 0)`,"translate(0, 0)",`translate(0, ${y})`],Er=`
.ld-slide {
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-slide-dot {
  position: absolute;
  top: ${O}%;
  left: ${O}%;
  width: ${C}%;
  height: ${C}%;
  background: currentColor;
  border-radius: 50%;
  ${d("slide","ld-slide-walk","ease-in-out")}
  animation-delay: ${c("slide",U.length)};
}

@keyframes ld-slide-walk {
  0% {
    transform: translate(${y}, 0);
  }
  8.33%,
  25% {
    transform: translate(${y}, ${y});
  }
  33.33%,
  50% {
    transform: translate(0, ${y});
  }
  58.33%,
  75% {
    transform: translate(0, 0);
  }
  83.33%,
  100% {
    transform: translate(${y}, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-slide-dot {
    transform: var(--ld-slide-rest);
    animation: none;
  }
}
`;function Rr(t){return a(i,{children:[r(n,{name:"slide",children:Er}),r("div",{...s("slide",t),children:U.map((o,l)=>r("div",{className:"ld-slide-dot",style:{...m(l),"--ld-slide-rest":o}},o))})]})}var Ir=`
.ld-snake {
  width: ${e};
  height: ${e};
}

${f("snake")}

.ld-snake-dash {
  ${d("snake","ld-snake-stretch","ease-in-out")}
}

@keyframes ld-snake-stretch {
  0% {
    stroke-dasharray: 1 100;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 45 100;
    stroke-dashoffset: -17;
  }
  100% {
    stroke-dasharray: 45 100;
    stroke-dashoffset: -62;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-snake-dash {
    stroke-dasharray: 18 100;
    animation: none;
  }
}
`;function Ar({cap:t,easing:o,...l}){return a(i,{children:[r(n,{name:"snake",children:Ir}),r("svg",{...s("snake",l),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:r("g",{className:p("snake",o),children:r("circle",{className:"ld-snake-dash",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeLinecap:g(t),strokeWidth:"2.5"})})})]})}var Nr=[{x:1,y:1},{x:-1,y:1},{x:1,y:-1},{x:-1,y:-1}],A=24,jr=8,Tr=(100-A)/2,G=`${((A-jr)/2/Tr*100).toFixed(1)}%`,Lr=`
.ld-gather {
  width: ${e};
  height: ${e};
}

.ld-gather-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${A}%;
  width: 100%;
  height: 100%;
  ${d("gather","ld-gather-turn","ease-in-out")}
}

.ld-gather-block {
  background: currentColor;
  border-radius: calc(${e} * 0.14);
  ${d("gather","ld-gather-pull","ease-in-out")}
}

@keyframes ld-gather-pull {
  0%,
  100% {
    transform: translate(0, 0);
  }
  30%,
  60% {
    transform: translate(
      calc(var(--ld-gather-x) * ${G}),
      calc(var(--ld-gather-y) * ${G})
    );
  }
}

@keyframes ld-gather-turn {
  0%,
  30% {
    transform: rotate(0);
  }
  60%,
  100% {
    transform: rotate(90deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-gather-group,
  .ld-gather-block {
    animation: none;
  }
}
`;function _r(t){return a(i,{children:[r(n,{name:"gather",children:Lr}),r("div",{...s("gather",t),children:r("div",{className:"ld-gather-group",children:Nr.map(({x:o,y:l})=>r("div",{className:"ld-gather-block",style:{"--ld-gather-x":o,"--ld-gather-y":l}},`${o}${l}`))})})]})}var W=Array.from({length:3},(t,o)=>o),Zr=`
.ld-leap {
  --ld-leap-dot: round(calc(${e} * 0.22), 1px);
  --ld-leap-gap: round(down, calc((${e} - var(--ld-leap-dot)) / 2), 1px);
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-leap-wrapper {
  position: absolute;
  top: round(calc((${e} - var(--ld-leap-dot)) / 2), 1px);
  left: calc(${e} - var(--ld-leap-dot) - var(--ld-leap-gap) * 2);
  width: calc(var(--ld-leap-gap) * 2 + var(--ld-leap-dot));
  height: var(--ld-leap-dot);
  ${d("leap","ld-leap-hop","ease-in-out")}
  animation-delay: ${c("leap",W.length)};
}

.ld-leap-dot {
  position: absolute;
  inset: 0 auto 0 0;
  width: var(--ld-leap-dot);
  background: currentColor;
  border-radius: 50%;
}

@keyframes ld-leap-hop {
  0% {
    transform: translateX(0) rotate(0);
  }
  33.33% {
    transform: translateX(0) rotate(180deg);
  }
  66.66% {
    transform: translateX(calc(var(--ld-leap-gap) * -1)) rotate(180deg);
  }
  100% {
    transform: translateX(calc(var(--ld-leap-gap) * -2)) rotate(180deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-leap-wrapper {
    transform: translateX(calc(var(${u}) * var(--ld-leap-gap)));
    animation: none;
  }
}
`;function Fr(t){return a(i,{children:[r(n,{name:"leap",children:Zr}),r("div",{...s("leap",t),children:W.map(o=>r("div",{className:"ld-leap-wrapper",style:m(o),children:r("div",{className:"ld-leap-dot"})},o))})]})}var H=Array.from({length:3},(t,o)=>o),Dr=`
.ld-linear-dots {
  display: flex;
  align-items: center;
  gap: calc(${e} * 0.1875);
  height: ${e};
}

.ld-linear-dots-dot {
  width: calc(${e} * 0.1875);
  height: calc(${e} * 0.1875);
  background: currentColor;
  border-radius: 9999px;
  ${d("linear-dots","ld-linear-dots-fade","linear")}
  animation-delay: ${c("linear-dots",H.length)};
}

@keyframes ld-linear-dots-fade {
  0% {
    opacity: 1;
  }
  66.67% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-linear-dots-dot {
    opacity: 0.75;
    animation: none;
  }
}
`;function Vr(t){return a(i,{children:[r(n,{name:"linear-dots",children:Dr}),r("div",{...s("linear-dots",t),children:H.map(o=>r("div",{className:"ld-linear-dots-dot",style:m(o)},o))})]})}var Pr="M0 0h1v1H0zM2 0h1v1H2zM0 2h1v1H0zM2 2h1v1H2z",X=[{x:12,y:6},{x:10,y:10},{x:6,y:12},{x:2,y:10},{x:0,y:6},{x:2,y:2},{x:6,y:0},{x:10,y:2}],Or=`
.ld-loading {
  width: ${e};
  height: ${e};
}

.ld-loading-segment {
  ${d("loading","ld-loading-fade","linear")}
  animation-delay: ${c("loading",X.length)};
}

@keyframes ld-loading-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-loading-segment {
    opacity: 0.6;
    animation: none;
  }
}
`;function Mr(t){return a(i,{children:[r(n,{name:"loading",children:Or}),r("svg",{...s("loading",t),fill:"currentColor",role:"presentation",viewBox:"0 0 15 15",children:X.map(({x:o,y:l},h)=>r("path",{className:"ld-loading-segment",d:Pr,style:m(h),transform:`translate(${o} ${l})`},`${o}-${l}`))})]})}var Br=`
.ld-morph {
  width: ${e};
  height: ${e};
}

.ld-morph-shape {
  width: 64%;
  height: 64%;
  margin: 18%;
  background: currentColor;
  border-radius: calc(${e} * 0.08);
  ${d("morph","ld-morph-round","ease-in-out")}
}

@keyframes ld-morph-round {
  0% {
    border-radius: calc(${e} * 0.08);
    transform: rotate(0);
  }
  50% {
    border-radius: 50%;
    transform: rotate(45deg);
  }
  100% {
    border-radius: calc(${e} * 0.08);
    transform: rotate(90deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-morph-shape {
    animation: none;
  }
}
`;function Ur(t){return a(i,{children:[r(n,{name:"morph",children:Br}),r("div",{...s("morph",t),children:r("div",{className:"ld-morph-shape"})})]})}var z=Array.from({length:12},(t,o)=>o),Gr=`
.ld-classic {
  width: ${e};
  height: ${e};
}

.ld-classic-inner {
  position: relative;
  top: 50%;
  left: 50%;
  width: ${e};
  height: ${e};
}

.ld-classic-bar {
  position: absolute;
  top: -3.9%;
  left: -10%;
  width: 24%;
  height: 8%;
  background: currentColor;
  border-radius: 6px;
  transform: rotate(calc(var(${u}) * 30deg)) translate(146%);
  ${d("classic","ld-classic-spin","linear")}
  animation-delay: ${c("classic",z.length)};
}

@keyframes ld-classic-spin {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.15;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-classic-bar {
    opacity: 0.5;
    animation: none;
  }
}
`;function Wr(t){return a(i,{children:[r(n,{name:"classic",children:Gr}),r("div",{...s("classic",t),children:r("div",{className:"ld-classic-inner",children:z.map(o=>r("div",{className:"ld-classic-bar",style:m(o)},o))})})]})}var Hr=`
.ld-clock {
  width: ${e};
  height: ${e};
}

${f("clock")}
`;function Xr({easing:t,...o}){return a(i,{children:[r(n,{name:"clock",children:Hr}),a("svg",{...s("clock",o),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[r("circle",{cx:"8",cy:"8",fill:"currentColor",opacity:"0.1",r:"8"}),r("path",{className:p("clock",t),d:"M11.1937 2.92061C10.5206 2.49739 9.77304 2.21397 8.9954 2.08314C8.45076 1.99151 8 2.44772 8 3V7.20324C8 7.49211 8.12492 7.76686 8.34259 7.95677L11.8999 11.0603C12.3287 11.4344 12.9913 11.378 13.2643 10.8787C13.6356 10.1998 13.8736 9.45248 13.9617 8.67713C14.0892 7.55433 13.8971 6.41834 13.4074 5.39993C12.9177 4.38152 12.1503 3.5221 11.1937 2.92061Z",fill:"currentColor"})]})]})}var zr=`
.ld-comet {
  --ld-comet-stroke: calc(${e} * 0.12);
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-comet-spin {
  position: absolute;
  inset: 0;
}

.ld-comet-tail {
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  background: conic-gradient(from 0deg, transparent, currentColor);
  -webkit-mask: radial-gradient(farthest-side, transparent calc(100% - var(--ld-comet-stroke)), #000 0);
  mask: radial-gradient(farthest-side, transparent calc(100% - var(--ld-comet-stroke)), #000 0);
}

.ld-comet-head {
  position: absolute;
  top: 0;
  left: 50%;
  width: var(--ld-comet-stroke);
  height: var(--ld-comet-stroke);
  background: currentColor;
  border-radius: 9999px;
  transform: translateX(-50%);
}

${f("comet")}
`;function Yr({easing:t,...o}){return a(i,{children:[r(n,{name:"comet",children:zr}),r("div",{...s("comet",o),children:a("div",{className:p("comet",t),children:[r("div",{className:"ld-comet-tail"}),r("div",{className:"ld-comet-head"})]})})]})}var Kr=`
.ld-compass {
  width: ${e};
  height: ${e};
}

.ld-compass-ticks {
  transform-origin: center;
  ${d("compass","ld-compass-turn","ease-in-out")}
}

@keyframes ld-compass-turn {
  to {
    transform: rotate(90deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-compass-ticks {
    animation: none;
  }
}
`;function qr(t){return a(i,{children:[r(n,{name:"compass",children:Kr}),r("svg",{...s("compass",t),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:a("g",{className:"ld-compass-ticks",fill:"currentColor",children:[r("path",{d:"M7.33334 0.666667C7.33334 0.298477 7.63181 0 8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V3.33333C8.66667 3.70152 8.36819 4 8 4C7.63181 4 7.33334 3.70152 7.33334 3.33333V0.666667Z"}),r("path",{d:"M12.6667 8.66667C12.2985 8.66667 12 8.3682 12 8.00001C12 7.63182 12.2985 7.33334 12.6667 7.33334H15.3333C15.7015 7.33334 16 7.63182 16 8.00001C16 8.3682 15.7015 8.66667 15.3333 8.66667H12.6667Z"}),r("path",{d:"M7.33333 12.6667C7.33333 12.2985 7.63181 12 8 12C8.36819 12 8.66667 12.2985 8.66667 12.6667V15.3333C8.66667 15.7015 8.36819 16 8 16C7.63181 16 7.33333 15.7015 7.33333 15.3333V12.6667Z"}),r("path",{d:"M0.666667 8.66667C0.298477 8.66667 1.60941e-08 8.3682 0 8.00001C-1.60941e-08 7.63182 0.298477 7.33334 0.666667 7.33334H3.33333C3.70152 7.33334 4 7.63182 4 8.00001C4 8.3682 3.70152 8.66667 3.33333 8.66667H0.666667Z"})]})})]})}var Jr=`
.ld-dual {
  width: ${e};
  height: ${e};
}

${f("dual")}

.ld-dual-inner {
  animation-direction: reverse;
}

@media (prefers-reduced-motion: reduce) {
  .ld-dual-inner {
    transform: rotate(180deg);
  }
}
`;function Qr({cap:t,easing:o,...l}){return a(i,{children:[r(n,{name:"dual",children:Jr}),a("svg",{...s("dual",l),fill:"none",role:"presentation",stroke:"currentColor",strokeLinecap:g(t),strokeWidth:"2.5",viewBox:"0 0 24 24",children:[r("circle",{className:p("dual",o),cx:"12",cy:"12",r:"10",strokeDasharray:"18 44.8"}),r("circle",{className:`ld-dual-inner ${p("dual",o)}`,cx:"12",cy:"12",r:"5.5",strokeDasharray:"10 24.6"})]})]})}var Y=[0,1],re=`
.ld-eclipse {
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-eclipse-dot {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  background: currentColor;
  border-radius: 50%;
  ${d("eclipse",["ld-eclipse-slide","ld-eclipse-depth"],"ease-in-out")}
  animation-delay: ${c("eclipse",Y.length)};
}

@keyframes ld-eclipse-slide {
  0%,
  100% {
    translate: 75% 0;
  }
  50% {
    translate: -75% 0;
  }
}

@keyframes ld-eclipse-depth {
  0%,
  50%,
  100% {
    opacity: 0.75;
    scale: 1;
  }
  25% {
    opacity: 1;
    scale: 1.3;
  }
  75% {
    opacity: 0.5;
    scale: 0.7;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-eclipse-dot {
    translate: calc(var(${u}) * 150% - 75%) 0;
    animation: none;
  }
}
`;function ee(t){return a(i,{children:[r(n,{name:"eclipse",children:re}),r("div",{...s("eclipse",t),children:Y.map(o=>r("div",{className:"ld-eclipse-dot",style:m(o)},o))})]})}var te=`
.ld-flip {
  width: ${e};
  height: ${e};
  perspective: calc(${e} * 3);
}

.ld-flip-face {
  width: 64%;
  height: 64%;
  margin: 18%;
  background: currentColor;
  border-radius: calc(${e} * 0.06);
  ${d("flip","ld-flip-turn","ease-in-out")}
}

@keyframes ld-flip-turn {
  0% {
    transform: rotateX(0) rotateY(0);
  }
  50% {
    transform: rotateX(-180deg) rotateY(0);
  }
  100% {
    transform: rotateX(-180deg) rotateY(-180deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-flip-face {
    animation: none;
  }
}
`;function oe(t){return a(i,{children:[r(n,{name:"flip",children:te}),r("div",{...s("flip",t),children:r("div",{className:"ld-flip-face"})})]})}var ae=`
.ld-arc {
  width: ${e};
  height: ${e};
}

${f("arc")}
`;function ie({cap:t,easing:o,...l}){return a(i,{children:[r(n,{name:"arc",children:ae}),r("svg",{...s("arc",l),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:r("circle",{className:p("arc",o),cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeDasharray:"18 44.8",strokeLinecap:g(t),strokeWidth:"2.5"})})]})}var N=Array.from({length:3},(t,o)=>o),K=180/N.length,ne=`calc(${e} * 0.055)`,se=`calc(${e} * 0.045)`,le=`
.ld-atom {
  position: relative;
  width: ${e};
  height: ${e};
}

.ld-atom-shell {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: ${ne} solid currentColor;
  border-radius: 9999px;
}

.ld-atom-orbit {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  transform: rotate(var(--ld-atom-tilt)) rotateX(90deg);
}

.ld-atom-ring {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: ${se} solid currentColor;
  border-radius: 9999px;
  transform: rotateX(90deg);
}

${f("atom")}

.ld-atom-spin {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation-delay: ${c("atom",N.length)};
}

@media (prefers-reduced-motion: reduce) {
  .ld-atom-spin {
    transform: rotate(${K}deg);
  }
}
`;function de({easing:t,...o}){return a(i,{children:[r(n,{name:"atom",children:le}),a("div",{...s("atom",o),children:[r("div",{className:"ld-atom-shell"}),N.map(l=>r("div",{className:"ld-atom-orbit",style:{"--ld-atom-tilt":`${l*K}deg`},children:r("div",{className:p("atom",t),style:m(l),children:r("div",{className:"ld-atom-ring"})})},l))]})]})}var q="diagonal",v=3,ce=Array.from({length:v*v},(t,o)=>({col:o%v,row:Math.floor(o/v)})),J={columns:{count:v,place:({col:t})=>t},diagonal:{count:v*2-1,place:({col:t,row:o})=>o+t},rows:{count:v,place:({row:t})=>t}},me=`
.ld-blocks {
  display: grid;
  grid-template-columns: repeat(${v}, 1fr);
  grid-template-rows: repeat(${v}, 1fr);
  gap: calc(${e} * 0.1);
  width: ${e};
  height: ${e};
}

.ld-blocks-cell {
  background: currentColor;
  border-radius: calc(${e} * 0.0625);
  ${d("blocks","ld-blocks-sweep","ease-in-out")}
}
${Object.entries(J).map(([t,{count:o}])=>`
.ld-blocks-cell-${t} {
  animation-delay: ${c("blocks",o)};
}
`).join("")}
@keyframes ld-blocks-sweep {
  0%,
  70%,
  100% {
    transform: scale(1);
  }
  35% {
    transform: scale(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-blocks-cell {
    transform: scale(0.8);
    animation: none;
  }
}
`;function pe({sweep:t=q,...o}){let{place:l}=J[t];return a(i,{children:[r(n,{name:"blocks",children:me}),r("div",{...s("blocks",o),children:ce.map(h=>r("div",{className:`ld-blocks-cell ld-blocks-cell-${t}`,style:m(l(h))},`${h.col}-${h.row}`))})]})}var Q=Array.from({length:3},(t,o)=>o),fe=`
.ld-bouncing-dots {
  display: flex;
  align-items: center;
  gap: calc(${e} * 0.2);
  height: ${e};
}

.ld-bouncing-dots-dot {
  width: calc(${e} * 0.22);
  height: calc(${e} * 0.22);
  background: currentColor;
  border-radius: 9999px;
  ${d("bouncing-dots","ld-bouncing-dots-bounce","ease-in-out alternate")}
  animation-delay: ${c("bouncing-dots",Q.length)};
}

@keyframes ld-bouncing-dots-bounce {
  from {
    transform: translateY(28%);
  }
  to {
    transform: translateY(-72%);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-bouncing-dots-dot {
    animation: none;
  }
}
`;function he(t){return a(i,{children:[r(n,{name:"bouncing-dots",children:fe}),r("div",{...s("bouncing-dots",t),children:Q.map(o=>r("div",{className:"ld-bouncing-dots-dot",style:m(o)},o))})]})}var ue=[10.5,7,3.5],ge=24,ve=`
.ld-cascade {
  width: ${e};
  height: ${e};
}

.ld-cascade-arc {
  transform-origin: center;
  ${d("cascade","ld-cascade-turn","cubic-bezier(0.68, -0.75, 0.265, 1.75)")}
  animation-delay: ${c("cascade",ge)};
}

@keyframes ld-cascade-turn {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-cascade-arc {
    animation: none;
  }
}
`;function $e({cap:t,...o}){return a(i,{children:[r(n,{name:"cascade",children:ve}),r("svg",{...s("cascade",o),fill:"none",role:"presentation",stroke:"currentColor",strokeLinecap:g(t),strokeWidth:"2",viewBox:"0 0 24 24",children:ue.map((l,h)=>{let $=2*Math.PI*l;return r("circle",{className:"ld-cascade-arc",cx:"12",cy:"12",r:l,strokeDasharray:`${$/4} ${$*3/4}`,style:m(h)},l)})})]})}var rr=[[8,1.5],[12.5962,3.4038],[14.5,8],[12.5962,12.5962],[8,14.5],[3.4038,12.5962],[1.5,8],[3.4038,3.4038]],ye=`
.ld-circular-dots {
  width: ${e};
  height: ${e};
}

.ld-circular-dots-dot {
  ${d("circular-dots","ld-circular-dots-fade","linear")}
  animation-delay: ${c("circular-dots",rr.length)};
}

@keyframes ld-circular-dots-fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-circular-dots-dot {
    opacity: 0.6;
    animation: none;
  }
}
`;function xe(t){return a(i,{children:[r(n,{name:"circular-dots",children:ye}),r("svg",{...s("circular-dots",t),fill:"currentColor",role:"presentation",viewBox:"0 0 16 16",children:rr.map(([o,l],h)=>r("circle",{className:"ld-circular-dots-dot",cx:o,cy:l,r:"1.5",style:m(h)},`${o}-${l}`))})]})}var er=["M7.33334 0.666667C7.33334 0.298477 7.63181 0 8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V3.33333C8.66667 3.70152 8.36819 4 8 4C7.63181 4 7.33334 3.70152 7.33334 3.33333V0.666667Z","M11.7712 5.17154C11.5109 5.43189 11.0888 5.43189 10.8284 5.17154C10.5681 4.91119 10.5681 4.48908 10.8284 4.22873L12.714 2.34311C12.9744 2.08276 13.3965 2.08276 13.6568 2.34311C13.9172 2.60346 13.9172 3.02557 13.6568 3.28592L11.7712 5.17154Z","M12.6667 8.66667C12.2985 8.66667 12 8.36819 12 8.00001C12 7.63182 12.2985 7.33334 12.6667 7.33334H15.3333C15.7015 7.33334 16 7.63182 16 8.00001C16 8.36819 15.7015 8.66667 15.3333 8.66667H12.6667Z","M10.8284 11.7713C10.5681 11.5109 10.5681 11.0888 10.8284 10.8284C11.0888 10.5681 11.5109 10.5681 11.7712 10.8284L13.6568 12.7141C13.9172 12.9744 13.9172 13.3965 13.6568 13.6569C13.3965 13.9172 12.9744 13.9172 12.714 13.6569L10.8284 11.7713Z","M7.33333 12.6667C7.33333 12.2985 7.63181 12 8 12C8.36819 12 8.66667 12.2985 8.66667 12.6667V15.3333C8.66667 15.7015 8.36819 16 8 16C7.63181 16 7.33333 15.7015 7.33333 15.3333V12.6667Z","M3.28594 13.6569C3.02559 13.9172 2.60348 13.9172 2.34313 13.6569C2.08278 13.3965 2.08278 12.9744 2.34313 12.714L4.22875 10.8284C4.4891 10.5681 4.91121 10.5681 5.17156 10.8284C5.43191 11.0888 5.43191 11.5109 5.17156 11.7712L3.28594 13.6569Z","M0.666667 8.66667C0.298477 8.66667 1.60941e-08 8.36819 0 8.00001C-1.60941e-08 7.63182 0.298477 7.33334 0.666667 7.33334H3.33333C3.70152 7.33334 4 7.63182 4 8.00001C4 8.36819 3.70152 8.66667 3.33333 8.66667H0.666667Z","M2.34315 3.28594C2.0828 3.02559 2.0828 2.60348 2.34315 2.34314C2.6035 2.08279 3.02561 2.08279 3.28596 2.34313L5.17158 4.22875C5.43193 4.4891 5.43193 4.91121 5.17158 5.17156C4.91123 5.43191 4.48912 5.43191 4.22877 5.17156L2.34315 3.28594Z"],Ce=`
.ld-classic-v2 {
  width: ${e};
  height: ${e};
}

.ld-classic-v2-tick {
  ${d("classic-v2","ld-classic-v2-fade","linear")}
  animation-delay: ${c("classic-v2",er.length)};
}

@keyframes ld-classic-v2-fade {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.4;
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-classic-v2-tick {
    opacity: 0.5;
    animation: none;
  }
}
`;function Se(t){return a(i,{children:[r(n,{name:"classic-v2",children:Ce}),r("svg",{...s("classic-v2",t),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:r("g",{fill:"currentColor",children:er.map((o,l)=>r("path",{className:"ld-classic-v2-tick",d:o,style:m(l)},o))})})]})}export{lr as a,fr as b,ur as c,vr as d,yr as e,Cr as f,kr as g,wr as h,Rr as i,Ar as j,_r as k,Fr as l,Vr as m,Mr as n,Ur as o,Wr as p,Xr as q,Yr as r,qr as s,Qr as t,ee as u,oe as v,ie as w,de as x,pe as y,he as z,$e as A,xe as B,Se as C};
