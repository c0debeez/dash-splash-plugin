import{b as s,d as Tr,l}from"./shared-NWYK6JU4.js";var q="--ld-duration",J="--ld-play-state",Q="--ld-size",u="--ld-step",rr=20,r=`var(${Q}, ${rr}px)`,Lr={arc:800,atom:1e3,blocks:1300,"bouncing-dots":500,cascade:1500,"circular-dots":800,classic:1200,"classic-v2":800,clock:1200,comet:700,compass:500,dual:1e3,eclipse:1200,flip:1200,gather:1600,leap:1800,"linear-dots":900,loading:1e3,morph:1200,orbit:750,pulse:1200,radar:1500,ring:800,ripple:1200,slide:2400,snake:1400,swirl:1200,trace:1200,wave:900};function ir(e){return`var(${q}, ${Lr[e]}ms)`}function d(e,t){return`calc(${ir(e)} * (var(${u}) - ${t}) / ${t})`}var _r=`var(${J}, running)`;function n(e,t,i){return`animation: ${[t].flat().map(H=>`${H} ${ir(e)} ${i} infinite`).join(", ")};
  animation-play-state: ${_r};`}var nr=s(l(),1);function o({children:e,name:t}){return(0,nr.jsx)("style",{href:`ld-${t}`,precedence:"loading-dev",children:e})}function c(e){return{[u]:e}}function a(e,{className:t,color:i,duration:h,playState:H,size:jr=rr}){return{"aria-hidden":!0,className:[`ld-${e}`,t].filter(Boolean).join(" "),style:{[Q]:`${jr}px`,...i===void 0?null:{color:i},...h===void 0?null:{[q]:`${h}ms`},...H===void 0?null:{[J]:H}}}}var x=s(l(),1),sr=[0,1,2,7,null,3,6,5,4],Zr=sr.filter(e=>e!==null).length,Fr=`
.ld-swirl {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: calc(${r} * 0.15625);
  box-sizing: border-box;
  width: ${r};
  height: ${r};
  padding: calc(${r} * 0.0625);
}

.ld-swirl-cell {
  background: currentColor;
  border-radius: calc(${r} * 0.0625);
  ${n("swirl","ld-swirl-fade","linear")}
  animation-delay: ${d("swirl",Zr)};
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
`;function Dr(e){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(o,{name:"swirl",children:Fr}),(0,x.jsx)("div",{...a("swirl",e),children:sr.map((t,i)=>t===null?(0,x.jsx)("div",{},i):(0,x.jsx)("div",{className:"ld-swirl-cell",style:c(t)},i))})]})}var Vr="linear";function m(e,t=Vr){let i=`ld-${e}-spin`;return t==="linear"?i:`${i} ${i}-${t}`}var Pr=`to {
    transform: rotate(360deg);
  }`;function p(e,t=Pr){return`
.ld-${e}-spin {
  transform-origin: center;
  ${n(e,`ld-${e}-rotate`,"linear")}
}

.ld-${e}-spin-ease-in-out {
  animation-timing-function: ease-in-out;
}

.ld-${e}-spin-stacked {
  animation-name: ld-${e}-rotate, ld-${e}-rotate;
  animation-timing-function: linear, ease-in-out;
  animation-composition: add;
}

@keyframes ld-${e}-rotate {
  ${t}
}

@media (prefers-reduced-motion: reduce) {
  .ld-${e}-spin {
    animation: none;
  }
}
`}var Or="round";function g(e=Or){return e==="flat"?"butt":"round"}var C=s(l(),1),K=20,z=17.5,er=4,cr=4*(z-2*er)+2*Math.PI*er,lr=16,dr={height:z,rx:er,width:z,x:(K-z)/2,y:(K-z)/2},Mr=`
.ld-trace {
  width: ${r};
  height: ${r};
}

${p("trace",`to {
    stroke-dashoffset: ${-cr};
  }`)}
`;function Br({cap:e,easing:t,...i}){return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(o,{name:"trace",children:Mr}),(0,C.jsxs)("svg",{...a("trace",i),fill:"none",role:"presentation",stroke:"currentColor",strokeWidth:"2.5",viewBox:`0 0 ${K} ${K}`,children:[(0,C.jsx)("rect",{...dr,opacity:"0.2"}),(0,C.jsx)("rect",{...dr,className:m("trace",t),strokeDasharray:`${lr} ${cr-lr}`,strokeLinecap:g(e)})]})]})}var L=s(l(),1),mr="center",pr=Array.from({length:5},(e,t)=>t),Ur=`
.ld-wave {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${r};
  height: ${r};
}

.ld-wave-bar {
  width: calc(${r} * 0.12);
  height: 100%;
  background: currentColor;
  border-radius: 9999px;
  ${n("wave","ld-wave-rise","ease-in-out")}
  animation-delay: ${d("wave",pr.length)};
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
`;function Gr({origin:e=mr,...t}){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(o,{name:"wave",children:Ur}),(0,L.jsx)("div",{...a("wave",t),children:pr.map(i=>(0,L.jsx)("div",{className:`ld-wave-bar ld-wave-bar-${e}`,style:c(i)},i))})]})}var S=s(l(),1),Wr=`
.ld-orbit {
  --ld-orbit-stroke: calc(${r} * 0.0625);
  position: relative;
  width: ${r};
  height: ${r};
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

${p("orbit")}
`;function Hr({easing:e,...t}){return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(o,{name:"orbit",children:Wr}),(0,S.jsxs)("div",{...a("orbit",t),children:[(0,S.jsx)("div",{className:"ld-orbit-dot"}),(0,S.jsx)("div",{className:`ld-orbit-track ${m("orbit",e)}`})]})]})}var k=s(l(),1),Xr=`
.ld-pulse {
  width: ${r};
  height: ${r};
}

.ld-pulse-ring {
  transform-origin: center;
  ${n("pulse","ld-pulse-ripple","ease-out")}
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
`;function zr(e){return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(o,{name:"pulse",children:Xr}),(0,k.jsxs)("svg",{...a("pulse",e),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[(0,k.jsx)("circle",{className:"ld-pulse-ring",cx:"8",cy:"8",fill:"currentColor",r:"8"}),(0,k.jsx)("circle",{cx:"8",cy:"8",fill:"currentColor",r:"2"})]})]})}var fr=s(Tr(),1),f=s(l(),1),Yr=`
.ld-radar {
  width: ${r};
  height: ${r};
}

${p("radar")}
`;function Kr({easing:e,...t}){let i=(0,fr.useId)();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o,{name:"radar",children:Yr}),(0,f.jsxs)("svg",{...a("radar",t),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[(0,f.jsx)("defs",{children:(0,f.jsxs)("radialGradient",{cx:"8",cy:"8",gradientUnits:"userSpaceOnUse",id:i,r:"8",children:[(0,f.jsx)("stop",{offset:"0.3334",stopColor:"currentColor"}),(0,f.jsx)("stop",{offset:"1",stopColor:"currentColor",stopOpacity:"0"})]})}),(0,f.jsx)("circle",{cx:"8",cy:"8",fill:"currentColor",opacity:"0.2",r:"8"}),(0,f.jsx)("circle",{cx:"8",cy:"8",opacity:"0.2",r:"5.5",stroke:"currentColor"}),(0,f.jsx)("path",{className:m("radar",e),d:"M8 0C9.50657 0 10.9824 0.425672 12.2578 1.22754C13.5333 2.02953 14.557 3.17533 15.21 4.5332C15.8629 5.89107 16.1193 7.40626 15.9492 8.90332C15.7791 10.4001 15.1896 11.8184 14.249 12.9951L10.4707 9.69922C10.8037 9.21598 11 8.63123 11 8C11 6.34315 9.65685 5 8 5V0Z",fill:`url(#${i})`}),(0,f.jsx)("circle",{cx:"8",cy:"8",fill:"currentColor",r:"2"})]})]})}var b=s(l(),1),qr=`
.ld-ring {
  width: ${r};
  height: ${r};
}

${p("ring")}
`;function Jr({cap:e,easing:t,...i}){return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{name:"ring",children:qr}),(0,b.jsxs)("svg",{...a("ring",i),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:[(0,b.jsx)("circle",{cx:"12",cy:"12",opacity:"0.2",r:"10",stroke:"currentColor",strokeWidth:"2.5"}),(0,b.jsx)("circle",{className:m("ring",t),cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeDasharray:"16 46.8",strokeLinecap:g(e),strokeWidth:"2.5"})]})]})}var _=s(l(),1),hr="out",tr=Array.from({length:3},(e,t)=>t),Qr=`
.ld-ripple {
  position: relative;
  width: ${r};
  height: ${r};
}

.ld-ripple-ring {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: calc(${r} * 0.08) solid currentColor;
  border-radius: 9999px;
  ${n("ripple","ld-ripple-spread","ease-out")}
  animation-delay: ${d("ripple",tr.length)};
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
    transform: scale(calc((var(${u}) + 1) / ${tr.length}));
    animation: none;
  }
}
`;function re({direction:e=hr,...t}){return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(o,{name:"ripple",children:Qr}),(0,_.jsx)("div",{...a("ripple",t),children:tr.map(i=>(0,_.jsx)("div",{className:`ld-ripple-ring ld-ripple-ring-${e}`,style:c(i)},i))})]})}var Z=s(l(),1),Y=34,vr=20,ur=(100-2*Y-vr)/2,X=`${((Y+vr)/Y*100).toFixed(1)}%`,$r=[`translate(${X}, 0)`,"translate(0, 0)",`translate(0, ${X})`],ee=`
.ld-slide {
  position: relative;
  width: ${r};
  height: ${r};
}

.ld-slide-dot {
  position: absolute;
  top: ${ur}%;
  left: ${ur}%;
  width: ${Y}%;
  height: ${Y}%;
  background: currentColor;
  border-radius: 50%;
  ${n("slide","ld-slide-walk","ease-in-out")}
  animation-delay: ${d("slide",$r.length)};
}

@keyframes ld-slide-walk {
  0% {
    transform: translate(${X}, 0);
  }
  8.33%,
  25% {
    transform: translate(${X}, ${X});
  }
  33.33%,
  50% {
    transform: translate(0, ${X});
  }
  58.33%,
  75% {
    transform: translate(0, 0);
  }
  83.33%,
  100% {
    transform: translate(${X}, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-slide-dot {
    transform: var(--ld-slide-rest);
    animation: none;
  }
}
`;function te(e){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(o,{name:"slide",children:ee}),(0,Z.jsx)("div",{...a("slide",e),children:$r.map((t,i)=>(0,Z.jsx)("div",{className:"ld-slide-dot",style:{...c(i),"--ld-slide-rest":t}},t))})]})}var w=s(l(),1),oe=`
.ld-snake {
  width: ${r};
  height: ${r};
}

${p("snake")}

.ld-snake-dash {
  ${n("snake","ld-snake-stretch","ease-in-out")}
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
`;function ae({cap:e,easing:t,...i}){return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(o,{name:"snake",children:oe}),(0,w.jsx)("svg",{...a("snake",i),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:(0,w.jsx)("g",{className:m("snake",t),children:(0,w.jsx)("circle",{className:"ld-snake-dash",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeLinecap:g(e),strokeWidth:"2.5"})})})]})}var E=s(l(),1),ie=[{x:1,y:1},{x:-1,y:1},{x:1,y:-1},{x:-1,y:-1}],or=24,ne=8,se=(100-or)/2,yr=`${((or-ne)/2/se*100).toFixed(1)}%`,le=`
.ld-gather {
  width: ${r};
  height: ${r};
}

.ld-gather-group {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${or}%;
  width: 100%;
  height: 100%;
  ${n("gather","ld-gather-turn","ease-in-out")}
}

.ld-gather-block {
  background: currentColor;
  border-radius: calc(${r} * 0.14);
  ${n("gather","ld-gather-pull","ease-in-out")}
}

@keyframes ld-gather-pull {
  0%,
  100% {
    transform: translate(0, 0);
  }
  30%,
  60% {
    transform: translate(
      calc(var(--ld-gather-x) * ${yr}),
      calc(var(--ld-gather-y) * ${yr})
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
`;function de(e){return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(o,{name:"gather",children:le}),(0,E.jsx)("div",{...a("gather",e),children:(0,E.jsx)("div",{className:"ld-gather-group",children:ie.map(({x:t,y:i})=>(0,E.jsx)("div",{className:"ld-gather-block",style:{"--ld-gather-x":t,"--ld-gather-y":i}},`${t}${i}`))})})]})}var R=s(l(),1),xr=Array.from({length:3},(e,t)=>t),ce=`
.ld-leap {
  --ld-leap-dot: round(calc(${r} * 0.22), 1px);
  --ld-leap-gap: round(down, calc((${r} - var(--ld-leap-dot)) / 2), 1px);
  position: relative;
  width: ${r};
  height: ${r};
}

.ld-leap-wrapper {
  position: absolute;
  top: round(calc((${r} - var(--ld-leap-dot)) / 2), 1px);
  left: calc(${r} - var(--ld-leap-dot) - var(--ld-leap-gap) * 2);
  width: calc(var(--ld-leap-gap) * 2 + var(--ld-leap-dot));
  height: var(--ld-leap-dot);
  ${n("leap","ld-leap-hop","ease-in-out")}
  animation-delay: ${d("leap",xr.length)};
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
`;function me(e){return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(o,{name:"leap",children:ce}),(0,R.jsx)("div",{...a("leap",e),children:xr.map(t=>(0,R.jsx)("div",{className:"ld-leap-wrapper",style:c(t),children:(0,R.jsx)("div",{className:"ld-leap-dot"})},t))})]})}var F=s(l(),1),Cr=Array.from({length:3},(e,t)=>t),pe=`
.ld-linear-dots {
  display: flex;
  align-items: center;
  gap: calc(${r} * 0.1875);
  height: ${r};
}

.ld-linear-dots-dot {
  width: calc(${r} * 0.1875);
  height: calc(${r} * 0.1875);
  background: currentColor;
  border-radius: 9999px;
  ${n("linear-dots","ld-linear-dots-fade","linear")}
  animation-delay: ${d("linear-dots",Cr.length)};
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
`;function fe(e){return(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(o,{name:"linear-dots",children:pe}),(0,F.jsx)("div",{...a("linear-dots",e),children:Cr.map(t=>(0,F.jsx)("div",{className:"ld-linear-dots-dot",style:c(t)},t))})]})}var D=s(l(),1),he="M0 0h1v1H0zM2 0h1v1H2zM0 2h1v1H0zM2 2h1v1H2z",Sr=[{x:12,y:6},{x:10,y:10},{x:6,y:12},{x:2,y:10},{x:0,y:6},{x:2,y:2},{x:6,y:0},{x:10,y:2}],ue=`
.ld-loading {
  width: ${r};
  height: ${r};
}

.ld-loading-segment {
  ${n("loading","ld-loading-fade","linear")}
  animation-delay: ${d("loading",Sr.length)};
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
`;function ge(e){return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(o,{name:"loading",children:ue}),(0,D.jsx)("svg",{...a("loading",e),fill:"currentColor",role:"presentation",viewBox:"0 0 15 15",children:Sr.map(({x:t,y:i},h)=>(0,D.jsx)("path",{className:"ld-loading-segment",d:he,style:c(h),transform:`translate(${t} ${i})`},`${t}-${i}`))})]})}var V=s(l(),1),ve=`
.ld-morph {
  width: ${r};
  height: ${r};
}

.ld-morph-shape {
  width: 64%;
  height: 64%;
  margin: 18%;
  background: currentColor;
  border-radius: calc(${r} * 0.08);
  ${n("morph","ld-morph-round","ease-in-out")}
}

@keyframes ld-morph-round {
  0% {
    border-radius: calc(${r} * 0.08);
    transform: rotate(0);
  }
  50% {
    border-radius: 50%;
    transform: rotate(45deg);
  }
  100% {
    border-radius: calc(${r} * 0.08);
    transform: rotate(90deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .ld-morph-shape {
    animation: none;
  }
}
`;function $e(e){return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(o,{name:"morph",children:ve}),(0,V.jsx)("div",{...a("morph",e),children:(0,V.jsx)("div",{className:"ld-morph-shape"})})]})}var I=s(l(),1),kr=Array.from({length:12},(e,t)=>t),ye=`
.ld-classic {
  width: ${r};
  height: ${r};
}

.ld-classic-inner {
  position: relative;
  top: 50%;
  left: 50%;
  width: ${r};
  height: ${r};
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
  ${n("classic","ld-classic-spin","linear")}
  animation-delay: ${d("classic",kr.length)};
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
`;function xe(e){return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(o,{name:"classic",children:ye}),(0,I.jsx)("div",{...a("classic",e),children:(0,I.jsx)("div",{className:"ld-classic-inner",children:kr.map(t=>(0,I.jsx)("div",{className:"ld-classic-bar",style:c(t)},t))})})]})}var A=s(l(),1),Ce=`
.ld-clock {
  width: ${r};
  height: ${r};
}

${p("clock")}
`;function Se({easing:e,...t}){return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(o,{name:"clock",children:Ce}),(0,A.jsxs)("svg",{...a("clock",t),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:[(0,A.jsx)("circle",{cx:"8",cy:"8",fill:"currentColor",opacity:"0.1",r:"8"}),(0,A.jsx)("path",{className:m("clock",e),d:"M11.1937 2.92061C10.5206 2.49739 9.77304 2.21397 8.9954 2.08314C8.45076 1.99151 8 2.44772 8 3V7.20324C8 7.49211 8.12492 7.76686 8.34259 7.95677L11.8999 11.0603C12.3287 11.4344 12.9913 11.378 13.2643 10.8787C13.6356 10.1998 13.8736 9.45248 13.9617 8.67713C14.0892 7.55433 13.8971 6.41834 13.4074 5.39993C12.9177 4.38152 12.1503 3.5221 11.1937 2.92061Z",fill:"currentColor"})]})]})}var y=s(l(),1),ke=`
.ld-comet {
  --ld-comet-stroke: calc(${r} * 0.12);
  position: relative;
  width: ${r};
  height: ${r};
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

${p("comet")}
`;function be({easing:e,...t}){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(o,{name:"comet",children:ke}),(0,y.jsx)("div",{...a("comet",t),children:(0,y.jsxs)("div",{className:m("comet",e),children:[(0,y.jsx)("div",{className:"ld-comet-tail"}),(0,y.jsx)("div",{className:"ld-comet-head"})]})})]})}var v=s(l(),1),we=`
.ld-compass {
  width: ${r};
  height: ${r};
}

.ld-compass-ticks {
  transform-origin: center;
  ${n("compass","ld-compass-turn","ease-in-out")}
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
`;function Ee(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o,{name:"compass",children:we}),(0,v.jsx)("svg",{...a("compass",e),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:(0,v.jsxs)("g",{className:"ld-compass-ticks",fill:"currentColor",children:[(0,v.jsx)("path",{d:"M7.33334 0.666667C7.33334 0.298477 7.63181 0 8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V3.33333C8.66667 3.70152 8.36819 4 8 4C7.63181 4 7.33334 3.70152 7.33334 3.33333V0.666667Z"}),(0,v.jsx)("path",{d:"M12.6667 8.66667C12.2985 8.66667 12 8.3682 12 8.00001C12 7.63182 12.2985 7.33334 12.6667 7.33334H15.3333C15.7015 7.33334 16 7.63182 16 8.00001C16 8.3682 15.7015 8.66667 15.3333 8.66667H12.6667Z"}),(0,v.jsx)("path",{d:"M7.33333 12.6667C7.33333 12.2985 7.63181 12 8 12C8.36819 12 8.66667 12.2985 8.66667 12.6667V15.3333C8.66667 15.7015 8.36819 16 8 16C7.63181 16 7.33333 15.7015 7.33333 15.3333V12.6667Z"}),(0,v.jsx)("path",{d:"M0.666667 8.66667C0.298477 8.66667 1.60941e-08 8.3682 0 8.00001C-1.60941e-08 7.63182 0.298477 7.33334 0.666667 7.33334H3.33333C3.70152 7.33334 4 7.63182 4 8.00001C4 8.3682 3.70152 8.66667 3.33333 8.66667H0.666667Z"})]})})]})}var N=s(l(),1),Re=`
.ld-dual {
  width: ${r};
  height: ${r};
}

${p("dual")}

.ld-dual-inner {
  animation-direction: reverse;
}

@media (prefers-reduced-motion: reduce) {
  .ld-dual-inner {
    transform: rotate(180deg);
  }
}
`;function Ie({cap:e,easing:t,...i}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(o,{name:"dual",children:Re}),(0,N.jsxs)("svg",{...a("dual",i),fill:"none",role:"presentation",stroke:"currentColor",strokeLinecap:g(e),strokeWidth:"2.5",viewBox:"0 0 24 24",children:[(0,N.jsx)("circle",{className:m("dual",t),cx:"12",cy:"12",r:"10",strokeDasharray:"18 44.8"}),(0,N.jsx)("circle",{className:`ld-dual-inner ${m("dual",t)}`,cx:"12",cy:"12",r:"5.5",strokeDasharray:"10 24.6"})]})]})}var P=s(l(),1),br=[0,1],Ae=`
.ld-eclipse {
  position: relative;
  width: ${r};
  height: ${r};
}

.ld-eclipse-dot {
  position: absolute;
  top: 30%;
  left: 30%;
  width: 40%;
  height: 40%;
  background: currentColor;
  border-radius: 50%;
  ${n("eclipse",["ld-eclipse-slide","ld-eclipse-depth"],"ease-in-out")}
  animation-delay: ${d("eclipse",br.length)};
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
`;function Ne(e){return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(o,{name:"eclipse",children:Ae}),(0,P.jsx)("div",{...a("eclipse",e),children:br.map(t=>(0,P.jsx)("div",{className:"ld-eclipse-dot",style:c(t)},t))})]})}var O=s(l(),1),je=`
.ld-flip {
  width: ${r};
  height: ${r};
  perspective: calc(${r} * 3);
}

.ld-flip-face {
  width: 64%;
  height: 64%;
  margin: 18%;
  background: currentColor;
  border-radius: calc(${r} * 0.06);
  ${n("flip","ld-flip-turn","ease-in-out")}
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
`;function Te(e){return(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)(o,{name:"flip",children:je}),(0,O.jsx)("div",{...a("flip",e),children:(0,O.jsx)("div",{className:"ld-flip-face"})})]})}var M=s(l(),1),Le=`
.ld-arc {
  width: ${r};
  height: ${r};
}

${p("arc")}
`;function _e({cap:e,easing:t,...i}){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(o,{name:"arc",children:Le}),(0,M.jsx)("svg",{...a("arc",i),fill:"none",role:"presentation",viewBox:"0 0 24 24",children:(0,M.jsx)("circle",{className:m("arc",t),cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeDasharray:"18 44.8",strokeLinecap:g(e),strokeWidth:"2.5"})})]})}var $=s(l(),1),ar=Array.from({length:3},(e,t)=>t),wr=180/ar.length,Ze=`calc(${r} * 0.055)`,Fe=`calc(${r} * 0.045)`,De=`
.ld-atom {
  position: relative;
  width: ${r};
  height: ${r};
}

.ld-atom-shell {
  position: absolute;
  inset: 0;
  box-sizing: border-box;
  border: ${Ze} solid currentColor;
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
  border: ${Fe} solid currentColor;
  border-radius: 9999px;
  transform: rotateX(90deg);
}

${p("atom")}

.ld-atom-spin {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation-delay: ${d("atom",ar.length)};
}

@media (prefers-reduced-motion: reduce) {
  .ld-atom-spin {
    transform: rotate(${wr}deg);
  }
}
`;function Ve({easing:e,...t}){return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(o,{name:"atom",children:De}),(0,$.jsxs)("div",{...a("atom",t),children:[(0,$.jsx)("div",{className:"ld-atom-shell"}),ar.map(i=>(0,$.jsx)("div",{className:"ld-atom-orbit",style:{"--ld-atom-tilt":`${i*wr}deg`},children:(0,$.jsx)("div",{className:m("atom",e),style:c(i),children:(0,$.jsx)("div",{className:"ld-atom-ring"})})},i))]})]})}var B=s(l(),1),Er="diagonal",j=3,Pe=Array.from({length:j*j},(e,t)=>({col:t%j,row:Math.floor(t/j)})),Rr={columns:{count:j,place:({col:e})=>e},diagonal:{count:j*2-1,place:({col:e,row:t})=>t+e},rows:{count:j,place:({row:e})=>e}},Oe=`
.ld-blocks {
  display: grid;
  grid-template-columns: repeat(${j}, 1fr);
  grid-template-rows: repeat(${j}, 1fr);
  gap: calc(${r} * 0.1);
  width: ${r};
  height: ${r};
}

.ld-blocks-cell {
  background: currentColor;
  border-radius: calc(${r} * 0.0625);
  ${n("blocks","ld-blocks-sweep","ease-in-out")}
}
${Object.entries(Rr).map(([e,{count:t}])=>`
.ld-blocks-cell-${e} {
  animation-delay: ${d("blocks",t)};
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
`;function Me({sweep:e=Er,...t}){let{place:i}=Rr[e];return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(o,{name:"blocks",children:Oe}),(0,B.jsx)("div",{...a("blocks",t),children:Pe.map(h=>(0,B.jsx)("div",{className:`ld-blocks-cell ld-blocks-cell-${e}`,style:c(i(h))},`${h.col}-${h.row}`))})]})}var U=s(l(),1),Ir=Array.from({length:3},(e,t)=>t),Be=`
.ld-bouncing-dots {
  display: flex;
  align-items: center;
  gap: calc(${r} * 0.2);
  height: ${r};
}

.ld-bouncing-dots-dot {
  width: calc(${r} * 0.22);
  height: calc(${r} * 0.22);
  background: currentColor;
  border-radius: 9999px;
  ${n("bouncing-dots","ld-bouncing-dots-bounce","ease-in-out alternate")}
  animation-delay: ${d("bouncing-dots",Ir.length)};
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
`;function Ue(e){return(0,U.jsxs)(U.Fragment,{children:[(0,U.jsx)(o,{name:"bouncing-dots",children:Be}),(0,U.jsx)("div",{...a("bouncing-dots",e),children:Ir.map(t=>(0,U.jsx)("div",{className:"ld-bouncing-dots-dot",style:c(t)},t))})]})}var G=s(l(),1),Ge=[10.5,7,3.5],We=24,He=`
.ld-cascade {
  width: ${r};
  height: ${r};
}

.ld-cascade-arc {
  transform-origin: center;
  ${n("cascade","ld-cascade-turn","cubic-bezier(0.68, -0.75, 0.265, 1.75)")}
  animation-delay: ${d("cascade",We)};
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
`;function Xe({cap:e,...t}){return(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(o,{name:"cascade",children:He}),(0,G.jsx)("svg",{...a("cascade",t),fill:"none",role:"presentation",stroke:"currentColor",strokeLinecap:g(e),strokeWidth:"2",viewBox:"0 0 24 24",children:Ge.map((i,h)=>{let H=2*Math.PI*i;return(0,G.jsx)("circle",{className:"ld-cascade-arc",cx:"12",cy:"12",r:i,strokeDasharray:`${H/4} ${H*3/4}`,style:c(h)},i)})})]})}var W=s(l(),1),Ar=[[8,1.5],[12.5962,3.4038],[14.5,8],[12.5962,12.5962],[8,14.5],[3.4038,12.5962],[1.5,8],[3.4038,3.4038]],ze=`
.ld-circular-dots {
  width: ${r};
  height: ${r};
}

.ld-circular-dots-dot {
  ${n("circular-dots","ld-circular-dots-fade","linear")}
  animation-delay: ${d("circular-dots",Ar.length)};
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
`;function Ye(e){return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(o,{name:"circular-dots",children:ze}),(0,W.jsx)("svg",{...a("circular-dots",e),fill:"currentColor",role:"presentation",viewBox:"0 0 16 16",children:Ar.map(([t,i],h)=>(0,W.jsx)("circle",{className:"ld-circular-dots-dot",cx:t,cy:i,r:"1.5",style:c(h)},`${t}-${i}`))})]})}var T=s(l(),1),Nr=["M7.33334 0.666667C7.33334 0.298477 7.63181 0 8 0C8.36819 0 8.66667 0.298477 8.66667 0.666667V3.33333C8.66667 3.70152 8.36819 4 8 4C7.63181 4 7.33334 3.70152 7.33334 3.33333V0.666667Z","M11.7712 5.17154C11.5109 5.43189 11.0888 5.43189 10.8284 5.17154C10.5681 4.91119 10.5681 4.48908 10.8284 4.22873L12.714 2.34311C12.9744 2.08276 13.3965 2.08276 13.6568 2.34311C13.9172 2.60346 13.9172 3.02557 13.6568 3.28592L11.7712 5.17154Z","M12.6667 8.66667C12.2985 8.66667 12 8.36819 12 8.00001C12 7.63182 12.2985 7.33334 12.6667 7.33334H15.3333C15.7015 7.33334 16 7.63182 16 8.00001C16 8.36819 15.7015 8.66667 15.3333 8.66667H12.6667Z","M10.8284 11.7713C10.5681 11.5109 10.5681 11.0888 10.8284 10.8284C11.0888 10.5681 11.5109 10.5681 11.7712 10.8284L13.6568 12.7141C13.9172 12.9744 13.9172 13.3965 13.6568 13.6569C13.3965 13.9172 12.9744 13.9172 12.714 13.6569L10.8284 11.7713Z","M7.33333 12.6667C7.33333 12.2985 7.63181 12 8 12C8.36819 12 8.66667 12.2985 8.66667 12.6667V15.3333C8.66667 15.7015 8.36819 16 8 16C7.63181 16 7.33333 15.7015 7.33333 15.3333V12.6667Z","M3.28594 13.6569C3.02559 13.9172 2.60348 13.9172 2.34313 13.6569C2.08278 13.3965 2.08278 12.9744 2.34313 12.714L4.22875 10.8284C4.4891 10.5681 4.91121 10.5681 5.17156 10.8284C5.43191 11.0888 5.43191 11.5109 5.17156 11.7712L3.28594 13.6569Z","M0.666667 8.66667C0.298477 8.66667 1.60941e-08 8.36819 0 8.00001C-1.60941e-08 7.63182 0.298477 7.33334 0.666667 7.33334H3.33333C3.70152 7.33334 4 7.63182 4 8.00001C4 8.36819 3.70152 8.66667 3.33333 8.66667H0.666667Z","M2.34315 3.28594C2.0828 3.02559 2.0828 2.60348 2.34315 2.34314C2.6035 2.08279 3.02561 2.08279 3.28596 2.34313L5.17158 4.22875C5.43193 4.4891 5.43193 4.91121 5.17158 5.17156C4.91123 5.43191 4.48912 5.43191 4.22877 5.17156L2.34315 3.28594Z"],Ke=`
.ld-classic-v2 {
  width: ${r};
  height: ${r};
}

.ld-classic-v2-tick {
  ${n("classic-v2","ld-classic-v2-fade","linear")}
  animation-delay: ${d("classic-v2",Nr.length)};
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
`;function qe(e){return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(o,{name:"classic-v2",children:Ke}),(0,T.jsx)("svg",{...a("classic-v2",e),fill:"none",role:"presentation",viewBox:"0 0 16 16",children:(0,T.jsx)("g",{fill:"currentColor",children:Nr.map((t,i)=>(0,T.jsx)("path",{className:"ld-classic-v2-tick",d:t,style:c(i)},t))})})]})}export{Dr as a,Br as b,Gr as c,Hr as d,zr as e,Kr as f,Jr as g,re as h,te as i,ae as j,de as k,me as l,fe as m,ge as n,$e as o,xe as p,Se as q,be as r,Ee as s,Ie as t,Ne as u,Te as v,_e as w,Ve as x,Me as y,Ue as z,Xe as A,Ye as B,qe as C};
