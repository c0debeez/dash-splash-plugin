import{b as d,j as a,l as p}from"./shared-QQL2K63A.js";var n=d(p(),1),m=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  overflow: hidden;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    position: relative;
    display: block;
    height: 100%;
    width: 100%;
  }

  .spinner-circle {
    display: block;
    position: absolute;
    color: ${i=>i.color};
    font-size: calc(${i=>i.size}px * 0.24);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .spinner-line {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    animation-duration: ${i=>i.animationDuration}ms;
    border-left-width: calc(${i=>i.size}px / 25);
    border-top-width: calc(${i=>i.size}px / 25);
    border-left-color: ${i=>i.color};
    border-left-style: solid;
    border-top-style: solid;
    border-top-color: transparent;
  }

  .spinner-line:nth-child(1) {
    animation: atom-spinner-animation-1 ${i=>i.animationDuration}ms linear infinite;
    transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(2) {
    animation: atom-spinner-animation-2 ${i=>i.animationDuration}ms linear infinite;
    transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
  }

  .spinner-line:nth-child(3) {
    animation: atom-spinner-animation-3 ${i=>i.animationDuration}ms linear infinite;
    transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
  }

  @keyframes atom-spinner-animation-1 {
    100% {
      transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-2 {
    100% {
      transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
    }
  }
  @keyframes atom-spinner-animation-3 {
    100% {
      transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
    }
  }
`;function v({size:i=60,animationDuration:t=1e3,color:r="#fff",className:e="",style:o,...s}){return(0,n.jsx)(m,{size:i,color:r,animationDuration:t,className:`atom-spinner${e?" "+e:""}`,style:o,...s,children:(0,n.jsxs)("div",{className:"spinner-inner",children:[(0,n.jsx)("div",{className:"spinner-line"}),(0,n.jsx)("div",{className:"spinner-line"}),(0,n.jsx)("div",{className:"spinner-line"}),(0,n.jsx)("div",{className:"spinner-circle",children:"\u25CF"})]})})}var k=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  transform: rotate(45deg);

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: calc(${i=>i.size}px / 7.5);
    width: calc(${i=>i.size}px / 7.5);
    animation-duration: ${i=>i.animationDuration}ms;
    top: calc(${i=>i.size}px / 2.3077);
    left: calc(${i=>i.size}px / 2.3077);
    background-color: ${i=>i.color};
    position: absolute;
    animation-iteration-count: infinite;
  }

  .rhombus:nth-child(2n + 0) {
    margin-right: 0;
  }

  .rhombus.child-1 {
    animation-name: breeding-rhombus-spinner-animation-child-1;
    animation-delay: calc(${i=>i.delayModifier}ms * 1);
  }

  .rhombus.child-2 {
    animation-name: breeding-rhombus-spinner-animation-child-2;
    animation-delay: calc(${i=>i.delayModifier}ms * 2);
  }

  .rhombus.child-3 {
    animation-name: breeding-rhombus-spinner-animation-child-3;
    animation-delay: calc(${i=>i.delayModifier}ms * 3);
  }

  .rhombus.child-4 {
    animation-name: breeding-rhombus-spinner-animation-child-4;
    animation-delay: calc(${i=>i.delayModifier}ms * 4);
  }

  .rhombus.child-5 {
    animation-name: breeding-rhombus-spinner-animation-child-5;
    animation-delay: calc(${i=>i.delayModifier}ms * 5);
  }

  .rhombus.child-6 {
    animation-name: breeding-rhombus-spinner-animation-child-6;
    animation-delay: calc(${i=>i.delayModifier}ms * 6);
  }

  .rhombus.child-7 {
    animation-name: breeding-rhombus-spinner-animation-child-7;
    animation-delay: calc(${i=>i.delayModifier}ms * 7);
  }

  .rhombus.child-8 {
    animation-name: breeding-rhombus-spinner-animation-child-8;
    animation-delay: calc(${i=>i.delayModifier}ms * 8);
  }

  .rhombus.big {
    height: calc(${i=>i.size}px / 3);
    width: calc(${i=>i.size}px / 3);
    animation-duration: ${i=>i.animationDuration}ms;
    top: calc(${i=>i.size}px / 3);
    left: calc(${i=>i.size}px / 3);
    background-color: ${i=>i.color};
    animation: breeding-rhombus-spinner-animation-child-big ${i=>i.animationDuration}
      infinite;
    animation-delay: 0.5s;
  }

  @keyframes breeding-rhombus-spinner-animation-child-1 {
    50% {
      transform: translate(-325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-2 {
    50% {
      transform: translate(0, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-3 {
    50% {
      transform: translate(325%, -325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-4 {
    50% {
      transform: translate(325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-5 {
    50% {
      transform: translate(325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-6 {
    50% {
      transform: translate(0, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-7 {
    50% {
      transform: translate(-325%, 325%);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-8 {
    50% {
      transform: translate(-325%, 0);
    }
  }
  @keyframes breeding-rhombus-spinner-animation-child-big {
    50% {
      transform: scale(0.5);
    }
  }
`;var D=a.div`
  height: ${i=>i.size}px;
  width: ${i=>(i.size+i.circleMarginLeft)*i.circleNum}px;
  display: flex;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .circle {
    height: ${i=>i.size}px;
    width: ${i=>i.size}px;
    margin-left: ${i=>i.circleMarginLeft}px;
    transform: rotate(45deg);
    border-radius: 10%;
    border: 3px solid ${i=>i.color};
    overflow: hidden;
    background: transparent;
    animation: circles-to-rhombuses-animation ${i=>i.animationDuration}ms linear
      infinite;
  }
  .circle:nth-child(1) {
    animation-delay: calc(${i=>i.delay}ms * 1);
    margin-left: 0;
  }
  .circle:nth-child(2) {
    animation-delay: calc(${i=>i.delay}ms * 2);
  }
  .circle:nth-child(3) {
    animation-delay: calc(${i=>i.delay}ms * 3);
  }
  @keyframes circles-to-rhombuses-animation {
    0% {
      border-radius: 10%;
    }
    17.5% {
      border-radius: 10%;
    }
    50% {
      border-radius: 100%;
    }
    93.5% {
      border-radius: 10%;
    }
    100% {
      border-radius: 10%;
    }
  }
`;var q=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  padding: ${i=>i.containerPadding}px;
  overflow: hidden;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .spinner-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid transparent;
    border-top-color: ${i=>i.color};
    animation: fingerprint-spinner-animation ${i=>i.animationDuration}ms
      cubic-bezier(0.68, -0.75, 0.265, 1.75) infinite forwards;
    margin: auto;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
  }
  .spinner-ring:nth-child(1) {
    height: ${i=>i.ringBase+0*i.ringBase}px;
    width: ${i=>i.ringBase+0*i.ringBase}px;
    animation-delay: calc(50ms * 1);
  }
  .spinner-ring:nth-child(2) {
    height: ${i=>i.ringBase+1*i.ringBase}px;
    width: ${i=>i.ringBase+1*i.ringBase}px;
    animation-delay: calc(50ms * 2);
  }
  .spinner-ring:nth-child(3) {
    height: ${i=>i.ringBase+2*i.ringBase}px;
    width: ${i=>i.ringBase+2*i.ringBase}px;
    animation-delay: calc(50ms * 3);
  }
  .spinner-ring:nth-child(4) {
    height: ${i=>i.ringBase+3*i.ringBase}px;
    width: ${i=>i.ringBase+3*i.ringBase}px;
    animation-delay: calc(50ms * 4);
  }
  .spinner-ring:nth-child(5) {
    height: ${i=>i.ringBase+4*i.ringBase}px;
    width: ${i=>i.ringBase+4*i.ringBase}px;
    animation-delay: calc(50ms * 5);
  }
  .spinner-ring:nth-child(6) {
    height: ${i=>i.ringBase+5*i.ringBase}px;
    width: ${i=>i.ringBase+5*i.ringBase}px;
    animation-delay: calc(50ms * 6);
  }
  .spinner-ring:nth-child(7) {
    height: ${i=>i.ringBase+6*i.ringBase}px;
    width: ${i=>i.ringBase+6*i.ringBase}px;
    animation-delay: calc(50ms * 7);
  }
  .spinner-ring:nth-child(8) {
    height: ${i=>i.ringBase+7*i.ringBase}px;
    width: ${i=>i.ringBase+7*i.ringBase}px;
    animation-delay: calc(50ms * 8);
  }
  .spinner-ring:nth-child(9) {
    height: ${i=>i.ringBase+8*i.ringBase}px;
    width: ${i=>i.ringBase+8*i.ringBase}px;
    animation-delay: calc(50ms * 9);
  }

  @keyframes fingerprint-spinner-animation {
    100% {
      transform: rotate(360deg);
    }
  }
`;var h=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  * {
    box-sizing: border-box;
  }

  .dots-container {
    height: ${i=>i.dotSize}px;
    width: ${i=>i.dotSize}px;
  }
  .smaller-dot {
    background: ${i=>i.color};
    height: 100%;
    width: 100%;
    border-radius: 50%;
    animation: flower-spinner-smaller-dot-animation ${i=>i.animationDuration}ms 0s
      infinite both;
  }
  .bigger-dot {
    background: ${i=>i.color};
    height: 100%;
    width: 100%;
    padding: 10%;
    border-radius: 50%;
    animation: flower-spinner-bigger-dot-animation ${i=>i.animationDuration}ms 0s
      infinite both;
  }
  @keyframes flower-spinner-bigger-dot-animation {
    0%,
    100% {
      box-shadow:
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color};
    }
    50% {
      transform: rotate(180deg);
    }
    25%,
    75% {
      box-shadow:
        ${i=>i.dotSize*2.6}px 0 0 ${i=>i.color},
        -${i=>i.dotSize*2.6}px 0 0 ${i=>i.color},
        0 ${i=>i.dotSize*2.6}px 0 ${i=>i.color},
        0 -${i=>i.dotSize*2.6}px 0 ${i=>i.color},
        ${i=>i.dotSize*1.9}px -${i=>i.dotSize*1.9}px 0
          ${i=>i.color},
        ${i=>i.dotSize*1.9}px ${i=>i.dotSize*1.9}px 0
          ${i=>i.color},
        -${i=>i.dotSize*1.9}px -${i=>i.dotSize*1.9}px 0
          ${i=>i.color},
        -${i=>i.dotSize*1.9}px ${i=>i.dotSize*1.9}px 0
          ${i=>i.color};
    }
    100% {
      transform: rotate(360deg);
      box-shadow:
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color};
    }
  }
  @keyframes flower-spinner-smaller-dot-animation {
    0%,
    100% {
      box-shadow:
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color};
    }
    25%,
    75% {
      box-shadow:
        ${i=>i.dotSize*1.4}px 0 0 ${i=>i.color},
        -${i=>i.dotSize*1.4}px 0 0 ${i=>i.color},
        0 ${i=>i.dotSize*1.4}px 0 ${i=>i.color},
        0 -${i=>i.dotSize*1.4}px 0 ${i=>i.color},
        ${i=>i.dotSize}px -${i=>i.dotSize}px 0 ${i=>i.color},
        ${i=>i.dotSize}px ${i=>i.dotSize}px 0 ${i=>i.color},
        -${i=>i.dotSize}px -${i=>i.dotSize}px 0 ${i=>i.color},
        -${i=>i.dotSize}px ${i=>i.dotSize}px 0 ${i=>i.color};
    }
    100% {
      box-shadow:
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color},
        0px 0px 0px ${i=>i.color};
    }
  }
`;function N({size:i=70,color:t="#fff",animationDuration:r=2500,className:e="",style:o,...s}){let l=i/7;return(0,n.jsx)(h,{size:i,color:t,animationDuration:r,className:`flower-spinner${e?" "+e:""}`,style:o,dotSize:l,...s,children:(0,n.jsx)("div",{className:"dots-container",children:(0,n.jsx)("div",{className:"bigger-dot",children:(0,n.jsx)("div",{className:"smaller-dot"})})})})}var B=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  animation: fulfilling-bouncing-circle-spinner-animation infinite
    ${i=>i.animationDuration}ms ease;

  * {
    box-sizing: border-box;
  }

  .orbit {
    height: ${i=>i.size}px;
    width: ${i=>i.size}px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50%;
    border: calc(${i=>i.size}px * 0.03) solid ${i=>i.color};
    animation: fulfilling-bouncing-circle-spinner-orbit-animation infinite
      ${i=>i.animationDuration}ms ease;
  }
  .circle {
    height: ${i=>i.size}px;
    width: ${i=>i.size}px;
    color: ${i=>i.color};
    display: block;
    border-radius: 50%;
    position: relative;
    border: calc(${i=>i.size}px * 0.1) solid ${i=>i.color};
    animation: fulfilling-bouncing-circle-spinner-circle-animation infinite
      ${i=>i.animationDuration}ms ease;
    transform: rotate(0deg) scale(1);
  }
  @keyframes fulfilling-bouncing-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-orbit-animation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1);
    }
    62.5% {
      transform: scale(0.8);
    }
    75% {
      transform: scale(1);
    }
    87.5% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes fulfilling-bouncing-circle-spinner-circle-animation {
    0% {
      transform: scale(1);
      border-color: transparent;
      border-top-color: inherit;
    }
    16.7% {
      border-color: transparent;
      border-top-color: initial;
      border-right-color: initial;
    }
    33.4% {
      border-color: transparent;
      border-top-color: inherit;
      border-right-color: inherit;
      border-bottom-color: inherit;
    }
    50% {
      border-color: inherit;
      transform: scale(1);
    }
    62.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    75% {
      border-color: inherit;
      transform: scale(1);
      opacity: 1;
    }
    87.5% {
      border-color: inherit;
      transform: scale(1.4);
    }
    100% {
      border-color: transparent;
      border-top-color: inherit;
      transform: scale(1);
    }
  }
`;var Z=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  border: 4px solid ${i=>i.color};
  animation: fulfilling-square-spinner-animation ${i=>i.animationDuration}ms infinite
    ease;

  * {
    box-sizing: border-box;
  }

  .spinner-inner {
    vertical-align: top;
    display: inline-block;
    background-color: ${i=>i.color};
    width: 100%;
    opacity: 1;
    animation: fulfilling-square-spinner-inner-animation ${i=>i.animationDuration}ms
      infinite ease-in;
  }

  @keyframes fulfilling-square-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes fulfilling-square-spinner-inner-animation {
    0% {
      height: 0%;
    }
    25% {
      height: 0%;
    }
    50% {
      height: 100%;
    }
    75% {
      height: 100%;
    }
    100% {
      height: 0%;
    }
  }
`;var X=a.div`
  width: ${i=>i.size}px;
  height: ${i=>i.size}px;
  border-radius: 100%;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100%;
    border: calc(${i=>i.size}px / 10) solid transparent;
  }
  .circle.circle-1 {
    border-top-color: ${i=>i.color};
    animation: half-circle-spinner-animation ${i=>i.animationDuration}ms infinite;
  }
  .circle.circle-2 {
    border-bottom-color: ${i=>i.color};
    animation: half-circle-spinner-animation ${i=>i.animationDuration}ms infinite
      alternate;
  }
  @keyframes half-circle-spinner-animation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var x=a.div`
  height: ${i=>i.size}px;
  width: ${i=>2*i.size*i.dotsNum}px;

  * {
    box-sizing: border-box;
  }

  .dot {
    width: ${i=>i.size}px;
    height: ${i=>i.size}px;
    margin: 0 calc(${i=>i.size}px / 2);
    border: calc(${i=>i.size}px / 5) solid ${i=>i.color};
    border-radius: 50%;
    float: left;
    transform: scale(0);
    animation: hollow-dots-spinner-animation ${i=>i.animationDuration}ms ease infinite
      0ms;
  }
  .dot:nth-child(1) {
    animation-delay: calc(${i=>i.animationDelay}ms * 1);
  }
  .dot:nth-child(2) {
    animation-delay: calc(${i=>i.animationDelay}ms * 2);
  }
  .dot:nth-child(3) {
    animation-delay: calc(${i=>i.animationDelay}ms * 3);
  }
  @keyframes hollow-dots-spinner-animation {
    50% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;function g(i){return Array.from({length:i}).map((t,r)=>(0,n.jsx)("div",{className:"dot"},r))}function A({size:i=15,color:t="#fff",animationDuration:r=1e3,className:e="",style:o,...s}){let c=r*.3;return(0,n.jsx)(x,{size:i,color:t,animationDuration:r,className:`hollow-dots-spinner${e?" "+e:""}`,style:o,dotsNum:3,animationDelay:c,...s,children:g(3)})}var W=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .spinnerBlock {
    animation: intersecting-circles-spinners-animation ${i=>i.animationDuration}ms
      linear infinite;
    transform-origin: center;
    display: block;
    height: ${i=>i.circleSize}px;
    width: ${i=>i.circleSize}px;
  }
  .circle {
    display: block;
    border: 2px solid ${i=>i.color};
    border-radius: 50%;
    height: 100%;
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .circle:nth-child(1) {
    left: 0;
    top: 0;
  }
  .circle:nth-child(2) {
    left: ${i=>i.circleSize*-.36}px;
    top: ${i=>i.circleSize*.2}px;
  }
  .circle:nth-child(3) {
    left: ${i=>i.circleSize*-.36}px;
    top: ${i=>i.circleSize*-.2}px;
  }
  .circle:nth-child(4) {
    left: 0;
    top: ${i=>i.circleSize*-.36}px;
  }
  .circle:nth-child(5) {
    left: ${i=>i.circleSize*.36}px;
    top: ${i=>i.circleSize*-.2}px;
  }
  .circle:nth-child(6) {
    left: ${i=>i.circleSize*.36}px;
    top: ${i=>i.circleSize*.2}px;
  }
  .circle:nth-child(7) {
    left: 0;
    top: ${i=>i.circleSize*.36}px;
  }
  @keyframes intersecting-circles-spinners-animation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;var M=a.div`
  width: ${i=>i.size*4}px;
  height: ${i=>i.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .rhombus {
    height: ${i=>i.size}px;
    width: ${i=>i.size}px;
    background-color: ${i=>i.color};
    left: ${i=>i.size*4}px;
    position: absolute;
    margin: 0 auto;
    border-radius: 2px;
    transform: translateY(0) rotate(45deg) scale(0);
    animation: looping-rhombuses-spinner-animation ${i=>i.animationDuration}ms linear
      infinite;
  }
  .rhombus:nth-child(1) {
    animation-delay: calc(${i=>i.animationDuration}ms * 1 / -1.5);
  }
  .rhombus:nth-child(2) {
    animation-delay: calc(${i=>i.animationDuration}ms * 2 / -1.5);
  }
  .rhombus:nth-child(3) {
    animation-delay: calc(${i=>i.animationDuration}ms * 3 / -1.5);
  }
  @keyframes looping-rhombuses-spinner-animation {
    0% {
      transform: translateX(0) rotate(45deg) scale(0);
    }
    50% {
      transform: translateX(-233%) rotate(45deg) scale(1);
    }
    100% {
      transform: translateX(-466%) rotate(45deg) scale(0);
    }
  }
`;var $=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  border-radius: 50%;
  perspective: 800px;

  * {
    box-sizing: border-box;
  }

  .orbit {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
  .orbit:nth-child(1) {
    left: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-one-animation ${i=>i.animationDuration}ms linear
      infinite;
    border-bottom: 3px solid ${i=>i.color};
  }
  .orbit:nth-child(2) {
    right: 0%;
    top: 0%;
    animation: orbit-spinner-orbit-two-animation ${i=>i.animationDuration}ms linear
      infinite;
    border-right: 3px solid ${i=>i.color};
  }
  .orbit:nth-child(3) {
    right: 0%;
    bottom: 0%;
    animation: orbit-spinner-orbit-three-animation ${i=>i.animationDuration}ms linear
      infinite;
    border-top: 3px solid ${i=>i.color};
  }
  @keyframes orbit-spinner-orbit-one-animation {
    0% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-two-animation {
    0% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
    }
  }
  @keyframes orbit-spinner-orbit-three-animation {
    0% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
    }
    100% {
      transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
    }
  }
`;function R({size:i=50,color:t="#fff",animationDuration:r=1e3,className:e="",style:o,...s}){return(0,n.jsxs)($,{size:i,color:t,animationDuration:r,className:`orbit-spinner${e?" "+e:""}`,style:o,...s,children:[(0,n.jsx)("div",{className:"orbit one"}),(0,n.jsx)("div",{className:"orbit two"}),(0,n.jsx)("div",{className:"orbit three"})]})}var C=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .pixel-spinner-inner {
    width: ${i=>i.pixelSize}px;
    height: ${i=>i.pixelSize}px;
    background-color: ${i=>i.color};
    color: ${i=>i.color};

    box-shadow:
      ${i=>i.pixelSize*1.5}px ${i=>i.pixelSize*1.5}px 0 0,
      ${i=>i.pixelSize*-1.5}px ${i=>i.pixelSize*-1.5}px 0 0,
      ${i=>i.pixelSize*1.5}px ${i=>i.pixelSize*-1.5}px 0 0,
      ${i=>i.pixelSize*-1.5}px ${i=>i.pixelSize*1.5}px 0 0,
      0 ${i=>i.pixelSize*1.5}px 0 0,
      ${i=>i.pixelSize*1.5}px 0 0 0,
      ${i=>i.pixelSize*-1.5}px 0 0 0,
      0 ${i=>i.pixelSize*-1.5}px 0 0;
    animation: pixel-spinner-animation ${i=>i.animationDuration}ms linear infinite;
  }

  @keyframes pixel-spinner-animation {
    50% {
      box-shadow:
        ${i=>i.pixelSize*2}px ${i=>i.pixelSize*2}px 0 0,
        ${i=>i.pixelSize*-2}px ${i=>i.pixelSize*-2}px 0 0,
        ${i=>i.pixelSize*2}px ${i=>i.pixelSize*-2}px 0 0,
        ${i=>i.pixelSize*-2}px ${i=>i.pixelSize*2}px 0 0,
        0 ${i=>i.pixelSize}px 0 0,
        ${i=>i.pixelSize}px 0 0 0,
        ${i=>i.pixelSize*-1}px 0 0 0,
        0 ${i=>i.pixelSize*-1}px 0 0;
    }
    75% {
      box-shadow:
        ${i=>i.pixelSize*2}px ${i=>i.pixelSize*2}px 0 0,
        ${i=>i.pixelSize*-2}px ${i=>i.pixelSize*-2}px 0 0,
        ${i=>i.pixelSize*2}px ${i=>i.pixelSize*-2}px 0 0,
        ${i=>i.pixelSize*-2}px ${i=>i.pixelSize*2}px 0 0,
        0 ${i=>i.pixelSize}px 0 0,
        ${i=>i.pixelSize}px 0 0 0,
        ${i=>i.pixelSize*-1}px 0 0 0,
        0 ${i=>i.pixelSize*-1}px 0 0;
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;var f=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    animation: radar-spinner-animation ${i=>i.animationDuration}ms infinite;
  }
  .circle:nth-child(1) {
    padding: ${i=>i.borderWidth*2*0}px;
    animation-delay: ${i=>i.animationDuration*.15}ms;
  }
  .circle:nth-child(2) {
    padding: ${i=>i.borderWidth*2*1}px;
    animation-delay: ${i=>i.animationDuration*.15}ms;
  }
  .circle:nth-child(3) {
    padding: ${i=>i.borderWidth*2*2}px;
    animation-delay: ${i=>i.animationDuration*.15}ms;
  }
  .circle:nth-child(4) {
    padding: ${i=>i.borderWidth*2*3}px;
    animation-delay: 0ms;
  }
  .circle-inner,
  .circle-inner-container {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    border: ${i=>i.borderWidth}px solid transparent;
  }
  .circle-inner {
    border-left-color: ${i=>i.color};
    border-right-color: ${i=>i.color};
  }
  @keyframes radar-spinner-animation {
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;function u(i){return Array.from({length:i}).map((t,r)=>(0,n.jsx)("div",{className:"circle",children:(0,n.jsx)("div",{className:"circle-inner-container",children:(0,n.jsx)("div",{className:"circle-inner"})})},r))}function j({size:i=110,color:t="#fff",animationDuration:r=2e3,className:e="",style:o,...s}){let l=i*5/110;return(0,n.jsx)(f,{size:i,color:t,animationDuration:r,className:`radar-spinner${e?" "+e:""}`,style:o,borderWidth:l,...s,children:u(4)})}var P=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  animation: scaling-squares-animation ${i=>i.animationDuration}ms;
  animation-iteration-count: infinite;
  transform: rotate(0deg);

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(${i=>i.size}px * 0.25 / 1.3);
    width: calc(${i=>i.size}px * 0.25 / 1.3);
    margin-right: auto;
    margin-left: auto;
    border: calc(${i=>i.size}px * 0.04 / 1.3) solid ${i=>i.color};
    position: absolute;
    animation-duration: ${i=>i.animationDuration}ms;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: scaling-squares-spinner-animation-child-1;
  }
  .square:nth-child(2) {
    animation-name: scaling-squares-spinner-animation-child-2;
  }
  .square:nth-child(3) {
    animation-name: scaling-squares-spinner-animation-child-3;
  }
  .square:nth-child(4) {
    animation-name: scaling-squares-spinner-animation-child-4;
  }
  @keyframes scaling-squares-animation {
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes scaling-squares-spinner-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`;var Y=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  top: ${i=>-1*i.initialTopPosition}px;

  * {
    box-sizing: border-box;
  }

  .square {
    height: ${i=>i.size/4}px;
    width: ${i=>i.size/4}px;
    top: ${i=>-1*i.initialTopPosition}px;
    margin-right: calc(${i=>i.size/4}px / 3);
    margin-top: calc(${i=>i.size/4}px / 3);
    background: ${i=>i.color};
    float: left;
    position: relative;
    opacity: 0;
    animation: self-building-square-spinner ${i=>i.animationDuration}ms infinite;
  }
  .square:nth-child(1) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 6);
  }
  .square:nth-child(2) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 7);
  }
  .square:nth-child(3) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 8);
  }
  .square:nth-child(4) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 3);
  }
  .square:nth-child(5) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 4);
  }
  .square:nth-child(6) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 5);
  }
  .square:nth-child(7) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 0);
  }
  .square:nth-child(8) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 1);
  }
  .square:nth-child(9) {
    animation-delay: calc(${i=>i.animationDuration*.05}ms * 2);
  }
  .clear {
    clear: both;
  }
  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }
`;var b=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;

  * {
    box-sizing: border-box;
  }

  .ring {
    border-radius: 50%;
    position: absolute;
    border: calc(${i=>i.size}px * 0.05) solid transparent;
    border-top-color: ${i=>i.color};
    border-left-color: ${i=>i.color};
    animation: semipolar-spinner-animation ${i=>i.animationDuration}ms infinite;
  }
  .ring:nth-child(1) {
    height: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 0);
    width: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 0);
    top: calc(${i=>i.size}px * 0.1 * 0);
    left: calc(${i=>i.size}px * 0.1 * 0);
    animation-delay: calc(${i=>i.animationDuration}ms * 0.1 * 4);
    z-index: 5;
  }
  .ring:nth-child(2) {
    height: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 1);
    width: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 1);
    top: calc(${i=>i.size}px * 0.1 * 1);
    left: calc(${i=>i.size}px * 0.1 * 1);
    animation-delay: calc(${i=>i.animationDuration}ms * 0.1 * 3);
    z-index: 4;
  }
  .ring:nth-child(3) {
    height: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 2);
    width: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 2);
    top: calc(${i=>i.size}px * 0.1 * 2);
    left: calc(${i=>i.size}px * 0.1 * 2);
    animation-delay: calc(${i=>i.animationDuration}ms * 0.1 * 2);
    z-index: 3;
  }
  .ring:nth-child(4) {
    height: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 3);
    width: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 3);
    top: calc(${i=>i.size}px * 0.1 * 3);
    left: calc(${i=>i.size}px * 0.1 * 3);
    animation-delay: calc(${i=>i.animationDuration}ms * 0.1 * 1);
    z-index: 2;
  }
  .ring:nth-child(5) {
    height: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 4);
    width: calc(${i=>i.size}px - ${i=>i.size}px * 0.2 * 4);
    top: calc(${i=>i.size}px * 0.1 * 4);
    left: calc(${i=>i.size}px * 0.1 * 4);
    animation-delay: calc(${i=>i.animationDuration}ms * 0.1 * 0);
    z-index: 1;
  }
  @keyframes semipolar-spinner-animation {
    50% {
      transform: rotate(360deg) scale(0.7);
    }
  }
`;function z(i){return Array.from({length:i}).map((t,r)=>(0,n.jsx)("div",{className:"ring"},r))}function T({size:i=65,color:t="#fff",animationDuration:r=2e3,className:e="",style:o,...s}){return(0,n.jsx)(b,{size:i,color:t,animationDuration:r,className:`semipolar-spinner${e?" "+e:""}`,style:o,...s,children:z(5)})}var y=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;

  * {
    box-sizing: border-box;
  }

  .spring-spinner-part {
    overflow: hidden;
    height: calc(${i=>i.size}px / 2);
    width: ${i=>i.size}px;
  }
  .spring-spinner-part.bottom {
    transform: rotate(180deg) scale(-1, 1);
  }
  .spring-spinner-rotator {
    width: ${i=>i.size}px;
    height: ${i=>i.size}px;
    border: calc(${i=>i.size}px / 7) solid transparent;
    border-right-color: ${i=>i.color};
    border-top-color: ${i=>i.color};
    border-radius: 50%;
    box-sizing: border-box;
    animation: spring-spinner-animation ${i=>i.animationDuration}ms ease-in-out
      infinite;
    transform: rotate(-200deg);
  }
  @keyframes spring-spinner-animation {
    0% {
      border-width: calc(${i=>i.size}px / 7);
    }
    25% {
      border-width: calc(${i=>i.size}px / 23.33);
    }
    50% {
      transform: rotate(115deg);
      border-width: calc(${i=>i.size}px / 7);
    }
    75% {
      border-width: calc(${i=>i.size}px / 23.33);
    }
    100% {
      border-width: calc(${i=>i.size}px / 7);
    }
  }
`;function F({size:i=70,color:t="#fff",animationDuration:r=3e3,className:e="",style:o,...s}){return(0,n.jsxs)(y,{size:i,color:t,animationDuration:r,className:`spring-spinner${e?" "+e:""}`,style:o,...s,children:[(0,n.jsx)("div",{className:"spring-spinner-part top",children:(0,n.jsx)("div",{className:"spring-spinner-rotator"})}),(0,n.jsx)("div",{className:"spring-spinner-part bottom",children:(0,n.jsx)("div",{className:"spring-spinner-rotator"})})]})}var L=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  * {
    box-sizing: border-box;
  }

  .square {
    height: calc(${i=>i.size}px * 0.25 / 1.3);
    width: calc(${i=>i.size}px * 0.25 / 1.3);
    animation-duration: ${i=>i.animationDuration}ms;
    border: calc(${i=>i.size}px * 0.04 / 1.3) solid ${i=>i.color};
    margin-right: auto;
    margin-left: auto;
    position: absolute;
    animation-iteration-count: infinite;
  }
  .square:nth-child(1) {
    animation-name: swapping-squares-animation-child-1;
    animation-delay: ${i=>i.animationDuration*.5}ms;
  }
  .square:nth-child(2) {
    animation-name: swapping-squares-animation-child-2;
    animation-delay: 0ms;
  }
  .square:nth-child(3) {
    animation-name: swapping-squares-animation-child-3;
    animation-delay: ${i=>i.animationDuration*.5}ms;
  }
  .square:nth-child(4) {
    animation-name: swapping-squares-animation-child-4;
    animation-delay: 0ms;
  }
  @keyframes swapping-squares-animation-child-1 {
    50% {
      transform: translate(150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-2 {
    50% {
      transform: translate(-150%, 150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-3 {
    50% {
      transform: translate(-150%, -150%) scale(2, 2);
    }
  }
  @keyframes swapping-squares-animation-child-4 {
    50% {
      transform: translate(150%, -150%) scale(2, 2);
    }
  }
`;var S=a.div`
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  padding: 3px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  box-sizing: border-box;

  * {
    box-sizing: border-box;
  }

  .circle {
    position: absolute;
    display: block;
    border-radius: 50%;
    border: 3px solid ${i=>i.color};
    opacity: 1;
  }
  .circle:nth-child(1) {
    height: ${i=>i.outerWidth}px;
    width: ${i=>i.outerWidth}px;
    animation: trinity-rings-spinner-circle1-animation ${i=>i.animationDuration}ms
      infinite linear;
    border-width: 3px;
  }
  .circle:nth-child(2) {
    height: calc(${i=>i.outerWidth}px * 0.65);
    width: calc(${i=>i.outerWidth}px * 0.65);
    animation: trinity-rings-spinner-circle2-animation ${i=>i.animationDuration}ms
      infinite linear;
    border-width: 2px;
  }
  .circle:nth-child(3) {
    height: calc(${i=>i.outerWidth}px * 0.1);
    width: calc(${i=>i.outerWidth}px * 0.1);
    animation: trinity-rings-spinner-circle3-animation ${i=>i.animationDuration}ms
      infinite linear;
    border-width: 1px;
  }
  @keyframes trinity-rings-spinner-circle1-animation {
    0% {
      transform: rotateZ(20deg) rotateY(0deg);
    }
    100% {
      transform: rotateZ(100deg) rotateY(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle2-animation {
    0% {
      transform: rotateZ(100deg) rotateX(0deg);
    }
    100% {
      transform: rotateZ(0deg) rotateX(360deg);
    }
  }
  @keyframes trinity-rings-spinner-circle3-animation {
    0% {
      transform: rotateZ(100deg) rotateX(-360deg);
    }
    100% {
      transform: rotateZ(-360deg) rotateX(360deg);
    }
  }
`;function H({size:i=66,color:t="#fff",animationDuration:r=1500,className:e="",style:o,...s}){let l=i-6;return(0,n.jsxs)(S,{size:i,color:t,animationDuration:r,className:`trinity-rings-spinner${e?" "+e:""}`,style:o,outerWidth:l,...s,children:[(0,n.jsx)("div",{className:"circle circle1"}),(0,n.jsx)("div",{className:"circle circle2"}),(0,n.jsx)("div",{className:"circle circle3"})]})}export{v as a,N as b,A as c,R as d,j as e,T as f,F as g,H as h};
