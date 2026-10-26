import{d as i,t as En}from"./shared-WHKIMZAY.js";En();function P(n,o){o===void 0&&(o={});var a=o.insertAt;if(n&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",a==="top"&&r.firstChild?r.insertBefore(l,r.firstChild):r.appendChild(l),l.styleSheet?l.styleSheet.cssText=n:l.appendChild(document.createTextNode(n))}}P(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var u=function(){return u=Object.assign||function(n){for(var o,a=1,r=arguments.length;a<r;a++)for(var l in o=arguments[a])Object.prototype.hasOwnProperty.call(o,l)&&(n[l]=o[l]);return n},u.apply(this,arguments)};function pn(n){return pn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},pn(n)}var Sn=/^\s+/,Nn=/\s+$/;function f(n,o){if(o=o||{},(n=n||"")instanceof f)return n;if(!(this instanceof f))return new f(n,o);var a=(function(r){var l={r:0,g:0,b:0},c=1,p=null,v=null,t=null,e=!1,b=!1;typeof r=="string"&&(r=(function(m){m=m.replace(Sn,"").replace(Nn,"").toLowerCase();var h,y=!1;if(mn[m])m=mn[m],y=!0;else if(m=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(h=C.rgb.exec(m))?{r:h[1],g:h[2],b:h[3]}:(h=C.rgba.exec(m))?{r:h[1],g:h[2],b:h[3],a:h[4]}:(h=C.hsl.exec(m))?{h:h[1],s:h[2],l:h[3]}:(h=C.hsla.exec(m))?{h:h[1],s:h[2],l:h[3],a:h[4]}:(h=C.hsv.exec(m))?{h:h[1],s:h[2],v:h[3]}:(h=C.hsva.exec(m))?{h:h[1],s:h[2],v:h[3],a:h[4]}:(h=C.hex8.exec(m))?{r:T(h[1]),g:T(h[2]),b:T(h[3]),a:kn(h[4]),format:y?"name":"hex8"}:(h=C.hex6.exec(m))?{r:T(h[1]),g:T(h[2]),b:T(h[3]),format:y?"name":"hex"}:(h=C.hex4.exec(m))?{r:T(h[1]+""+h[1]),g:T(h[2]+""+h[2]),b:T(h[3]+""+h[3]),a:kn(h[4]+""+h[4]),format:y?"name":"hex8"}:(h=C.hex3.exec(m))?{r:T(h[1]+""+h[1]),g:T(h[2]+""+h[2]),b:T(h[3]+""+h[3]),format:y?"name":"hex"}:!1})(r)),pn(r)=="object"&&(M(r.r)&&M(r.g)&&M(r.b)?(d=r.r,s=r.g,g=r.b,l={r:255*k(d,255),g:255*k(s,255),b:255*k(g,255)},e=!0,b=String(r.r).substr(-1)==="%"?"prgb":"rgb"):M(r.h)&&M(r.s)&&M(r.v)?(p=on(r.s),v=on(r.v),l=(function(m,h,y){m=6*k(m,360),h=k(h,100),y=k(y,100);var x=Math.floor(m),z=m-x,A=y*(1-h),J=y*(1-z*h),q=y*(1-(1-z)*h),F=x%6,L=[y,J,A,A,q,y][F],Q=[q,y,y,J,A,A][F],_=[A,A,q,y,y,J][F];return{r:255*L,g:255*Q,b:255*_}})(r.h,p,v),e=!0,b="hsv"):M(r.h)&&M(r.s)&&M(r.l)&&(p=on(r.s),t=on(r.l),l=(function(m,h,y){var x,z,A;function J(L,Q,_){return _<0&&(_+=1),_>1&&(_-=1),_<1/6?L+6*(Q-L)*_:_<.5?Q:_<2/3?L+(Q-L)*(2/3-_)*6:L}if(m=k(m,360),h=k(h,100),y=k(y,100),h===0)x=z=A=y;else{var q=y<.5?y*(1+h):y+h-y*h,F=2*y-q;x=J(F,q,m+1/3),z=J(F,q,m),A=J(F,q,m-1/3)}return{r:255*x,g:255*z,b:255*A}})(r.h,p,t),e=!0,b="hsl"),r.hasOwnProperty("a")&&(c=r.a));var d,s,g;return c=On(c),{ok:e,format:r.format||b,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:c}})(n);this._originalInput=n,this._r=a.r,this._g=a.g,this._b=a.b,this._a=a.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||a.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=a.ok}function gn(n,o,a){n=k(n,255),o=k(o,255),a=k(a,255);var r,l,c=Math.max(n,o,a),p=Math.min(n,o,a),v=(c+p)/2;if(c==p)r=l=0;else{var t=c-p;switch(l=v>.5?t/(2-c-p):t/(c+p),c){case n:r=(o-a)/t+(o<a?6:0);break;case o:r=(a-n)/t+2;break;case a:r=(n-o)/t+4}r/=6}return{h:r,s:l,l:v}}function fn(n,o,a){n=k(n,255),o=k(o,255),a=k(a,255);var r,l,c=Math.max(n,o,a),p=Math.min(n,o,a),v=c,t=c-p;if(l=c===0?0:t/c,c==p)r=0;else{switch(c){case n:r=(o-a)/t+(o<a?6:0);break;case o:r=(a-n)/t+2;break;case a:r=(n-o)/t+4}r/=6}return{h:r,s:l,v}}function vn(n,o,a,r){var l=[D(Math.round(n).toString(16)),D(Math.round(o).toString(16)),D(Math.round(a).toString(16))];return r&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function yn(n,o,a,r){return[D(Pn(r)),D(Math.round(n).toString(16)),D(Math.round(o).toString(16)),D(Math.round(a).toString(16))].join("")}function zn(n,o){o=o===0?0:o||10;var a=f(n).toHsl();return a.s-=o/100,a.s=bn(a.s),f(a)}function An(n,o){o=o===0?0:o||10;var a=f(n).toHsl();return a.s+=o/100,a.s=bn(a.s),f(a)}function Tn(n){return f(n).desaturate(100)}function _n(n,o){o=o===0?0:o||10;var a=f(n).toHsl();return a.l+=o/100,a.l=bn(a.l),f(a)}function Cn(n,o){o=o===0?0:o||10;var a=f(n).toRgb();return a.r=Math.max(0,Math.min(255,a.r-Math.round(-o/100*255))),a.g=Math.max(0,Math.min(255,a.g-Math.round(-o/100*255))),a.b=Math.max(0,Math.min(255,a.b-Math.round(-o/100*255))),f(a)}function Dn(n,o){o=o===0?0:o||10;var a=f(n).toHsl();return a.l-=o/100,a.l=bn(a.l),f(a)}function Mn(n,o){var a=f(n).toHsl(),r=(a.h+o)%360;return a.h=r<0?360+r:r,f(a)}function qn(n){var o=f(n).toHsl();return o.h=(o.h+180)%360,f(o)}function xn(n,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var a=f(n).toHsl(),r=[f(n)],l=360/o,c=1;c<o;c++)r.push(f({h:(a.h+c*l)%360,s:a.s,l:a.l}));return r}function Rn(n){var o=f(n).toHsl(),a=o.h;return[f(n),f({h:(a+72)%360,s:o.s,l:o.l}),f({h:(a+216)%360,s:o.s,l:o.l})]}function Jn(n,o,a){o=o||6,a=a||30;var r=f(n).toHsl(),l=360/a,c=[f(n)];for(r.h=(r.h-(l*o>>1)+720)%360;--o;)r.h=(r.h+l)%360,c.push(f(r));return c}function Fn(n,o){o=o||6;for(var a=f(n).toHsv(),r=a.h,l=a.s,c=a.v,p=[],v=1/o;o--;)p.push(f({h:r,s:l,v:c})),c=(c+v)%1;return p}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var n=this.toRgb();return(299*n.r+587*n.g+114*n.b)/1e3},getLuminance:function(){var n,o,a,r=this.toRgb();return n=r.r/255,o=r.g/255,a=r.b/255,.2126*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))},setAlpha:function(n){return this._a=On(n),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var n=fn(this._r,this._g,this._b);return{h:360*n.h,s:n.s,v:n.v,a:this._a}},toHsvString:function(){var n=fn(this._r,this._g,this._b),o=Math.round(360*n.h),a=Math.round(100*n.s),r=Math.round(100*n.v);return this._a==1?"hsv("+o+", "+a+"%, "+r+"%)":"hsva("+o+", "+a+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var n=gn(this._r,this._g,this._b);return{h:360*n.h,s:n.s,l:n.l,a:this._a}},toHslString:function(){var n=gn(this._r,this._g,this._b),o=Math.round(360*n.h),a=Math.round(100*n.s),r=Math.round(100*n.l);return this._a==1?"hsl("+o+", "+a+"%, "+r+"%)":"hsla("+o+", "+a+"%, "+r+"%, "+this._roundA+")"},toHex:function(n){return vn(this._r,this._g,this._b,n)},toHexString:function(n){return"#"+this.toHex(n)},toHex8:function(n){return(function(o,a,r,l,c){var p=[D(Math.round(o).toString(16)),D(Math.round(a).toString(16)),D(Math.round(r).toString(16)),D(Pn(l))];return c&&p[0].charAt(0)==p[0].charAt(1)&&p[1].charAt(0)==p[1].charAt(1)&&p[2].charAt(0)==p[2].charAt(1)&&p[3].charAt(0)==p[3].charAt(1)?p[0].charAt(0)+p[1].charAt(0)+p[2].charAt(0)+p[3].charAt(0):p.join("")})(this._r,this._g,this._b,this._a,n)},toHex8String:function(n){return"#"+this.toHex8(n)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*k(this._r,255))+"%",g:Math.round(100*k(this._g,255))+"%",b:Math.round(100*k(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%)":"rgba("+Math.round(100*k(this._r,255))+"%, "+Math.round(100*k(this._g,255))+"%, "+Math.round(100*k(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Ln[vn(this._r,this._g,this._b,!0)]||!1)},toFilter:function(n){var o="#"+yn(this._r,this._g,this._b,this._a),a=o,r=this._gradientType?"GradientType = 1, ":"";if(n){var l=f(n);a="#"+yn(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+o+",endColorstr="+a+")"},toString:function(n){var o=!!n;n=n||this._format;var a=!1,r=this._a<1&&this._a>=0;return o||!r||n!=="hex"&&n!=="hex6"&&n!=="hex3"&&n!=="hex4"&&n!=="hex8"&&n!=="name"?(n==="rgb"&&(a=this.toRgbString()),n==="prgb"&&(a=this.toPercentageRgbString()),n!=="hex"&&n!=="hex6"||(a=this.toHexString()),n==="hex3"&&(a=this.toHexString(!0)),n==="hex4"&&(a=this.toHex8String(!0)),n==="hex8"&&(a=this.toHex8String()),n==="name"&&(a=this.toName()),n==="hsl"&&(a=this.toHslString()),n==="hsv"&&(a=this.toHsvString()),a||this.toHexString()):n==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return f(this.toString())},_applyModification:function(n,o){var a=n.apply(null,[this].concat([].slice.call(o)));return this._r=a._r,this._g=a._g,this._b=a._b,this.setAlpha(a._a),this},lighten:function(){return this._applyModification(_n,arguments)},brighten:function(){return this._applyModification(Cn,arguments)},darken:function(){return this._applyModification(Dn,arguments)},desaturate:function(){return this._applyModification(zn,arguments)},saturate:function(){return this._applyModification(An,arguments)},greyscale:function(){return this._applyModification(Tn,arguments)},spin:function(){return this._applyModification(Mn,arguments)},_applyCombination:function(n,o){return n.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Jn,arguments)},complement:function(){return this._applyCombination(qn,arguments)},monochromatic:function(){return this._applyCombination(Fn,arguments)},splitcomplement:function(){return this._applyCombination(Rn,arguments)},triad:function(){return this._applyCombination(xn,[3])},tetrad:function(){return this._applyCombination(xn,[4])}},f.fromRatio=function(n,o){if(pn(n)=="object"){var a={};for(var r in n)n.hasOwnProperty(r)&&(a[r]=r==="a"?n[r]:on(n[r]));n=a}return f(n,o)},f.equals=function(n,o){return!(!n||!o)&&f(n).toRgbString()==f(o).toRgbString()},f.random=function(){return f.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},f.mix=function(n,o,a){a=a===0?0:a||50;var r=f(n).toRgb(),l=f(o).toRgb(),c=a/100;return f({r:(l.r-r.r)*c+r.r,g:(l.g-r.g)*c+r.g,b:(l.b-r.b)*c+r.b,a:(l.a-r.a)*c+r.a})},f.readability=function(n,o){var a=f(n),r=f(o);return(Math.max(a.getLuminance(),r.getLuminance())+.05)/(Math.min(a.getLuminance(),r.getLuminance())+.05)},f.isReadable=function(n,o,a){var r,l,c=f.readability(n,o);switch(l=!1,(r=(function(p){var v,t;return v=((p=p||{level:"AA",size:"small"}).level||"AA").toUpperCase(),t=(p.size||"small").toLowerCase(),v!=="AA"&&v!=="AAA"&&(v="AA"),t!=="small"&&t!=="large"&&(t="small"),{level:v,size:t}})(a)).level+r.size){case"AAsmall":case"AAAlarge":l=c>=4.5;break;case"AAlarge":l=c>=3;break;case"AAAsmall":l=c>=7}return l},f.mostReadable=function(n,o,a){var r,l,c,p,v=null,t=0;l=(a=a||{}).includeFallbackColors,c=a.level,p=a.size;for(var e=0;e<o.length;e++)(r=f.readability(n,o[e]))>t&&(t=r,v=f(o[e]));return f.isReadable(n,v,{level:c,size:p})||!l?v:(a.includeFallbackColors=!1,f.mostReadable(n,["#fff","#000"],a))};var mn=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Ln=f.hexNames=(function(n){var o={};for(var a in n)n.hasOwnProperty(a)&&(o[n[a]]=a);return o})(mn);function On(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function k(n,o){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(n)&&(n="100%");var a=(function(r){return typeof r=="string"&&r.indexOf("%")!=-1})(n);return n=Math.min(o,Math.max(0,parseFloat(n))),a&&(n=parseInt(n*o,10)/100),Math.abs(n-o)<1e-6?1:n%o/parseFloat(o)}function bn(n){return Math.min(1,Math.max(0,n))}function T(n){return parseInt(n,16)}function D(n){return n.length==1?"0"+n:""+n}function on(n){return n<=1&&(n=100*n+"%"),n}function Pn(n){return Math.round(255*parseFloat(n)).toString(16)}function kn(n){return T(n)/255}var R,an,rn,C=(an="[\\s|\\(]+("+(R="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+R+")[,|\\s]+("+R+")\\s*\\)?",rn="[\\s|\\(]+("+R+")[,|\\s]+("+R+")[,|\\s]+("+R+")[,|\\s]+("+R+")\\s*\\)?",{CSS_UNIT:new RegExp(R),rgb:new RegExp("rgb"+an),rgba:new RegExp("rgba"+rn),hsl:new RegExp("hsl"+an),hsla:new RegExp("hsla"+rn),hsv:new RegExp("hsv"+an),hsva:new RegExp("hsva"+rn),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function M(n){return!!C.CSS_UNIT.exec(n)}var w=function(n,o){var a=(typeof n=="string"?parseInt(n):n)||0;if(a>=-5&&a<=5){var r=a,l=parseFloat(o),c=l+r*(l/5)*-1;return(c==0||c<=Number.EPSILON)&&(c=.1),{animationPeriod:c+"s"}}return{animationPeriod:o}},E=function(n,o){var a=n||{},r="";switch(o){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var l={};if(a.fontSize){var c=a.fontSize;l=(function(p,v){var t={};for(var e in p)Object.prototype.hasOwnProperty.call(p,e)&&v.indexOf(e)<0&&(t[e]=p[e]);if(p!=null&&typeof Object.getOwnPropertySymbols=="function"){var b=0;for(e=Object.getOwnPropertySymbols(p);b<e.length;b++)v.indexOf(e[b])<0&&Object.prototype.propertyIsEnumerable.call(p,e[b])&&(t[e[b]]=p[e[b]])}return t})(a,["fontSize"]),r=c}return{fontSize:r,styles:l}},Hn={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},S=function(n){var o=n.className,a=n.text,r=n.textColor,l=n.staticText,c=n.style;return a?i.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:u(u(u({},l&&Hn),r&&{color:r,mixBlendMode:"unset"}),c&&c)},typeof a=="string"&&a.length?a:"loading"):null},O="rgb(50, 205, 50)";function N(n,o){if(o===void 0&&(o=0),n.length===0)throw new Error("Input array cannot be empty!");var a=[];return(function r(l,c){return c===void 0&&(c=0),a.push.apply(a,l),a.length<c&&r(a,c),a.slice(0,c)})(n,o)}P(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7eg;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7fj, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gy;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7hv;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7ew, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7gg;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7fj {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes uxlv7ew {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes uxlv7eg {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes uxlv7gg {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes uxlv7gy {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes uxlv7hv {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);var U=f(O).toRgb(),H=Array.from({length:4},(function(n,o){return"--atom-phase".concat(o+1,"-rgb")})),Kn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,H.length),d=0;d<b.length&&!(d>=4);d++)try{if(!(h=f(b[d])).isValid())throw new Error("invalid color");var s=(y=h.toRgb()).r,g=y.g,m=y.b;e[H[d]]="".concat(s,", ").concat(g,", ").concat(m)}catch{s=U.r,g=U.g,m=U.b,e[H[d]]="".concat(s,", ").concat(g,", ").concat(m),console.warn("Possibly an invalid color( ".concat(b[d]," ) passed to Atom indicator!"))}return e}try{if(typeof t!="string")throw new Error("Color String expected");var h;if(!(h=f(t)).isValid())throw new Error("Invalid color");var y;for(s=(y=h.toRgb()).r,g=y.g,m=y.b,d=0;d<H.length;d++)e[H[d]]="".concat(s,", ").concat(g,", ").concat(m)}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <Atom /> indicator cannot be processed. Using default instead!")),d=0;d<H.length;d++)s=U.r,g=U.g,m=U.b,e[H[d]]="".concat(s,", ").concat(g,", ").concat(m)}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b atom-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b atom-indicator"},i.createElement("span",{className:"rli-d-i-b electron-orbit"}),i.createElement("span",{className:"rli-d-i-b electron-orbit"}),i.createElement("span",{className:"rli-d-i-b electron-orbit"})),i.createElement(S,{className:"atom-text",staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite uxlv7cp;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: uxlv7bx var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7bx {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7cp {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var X=Array.from({length:4},(function(n,o){return"--commet-phase".concat(o+1,"-color")})),Qn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,X.length),d=0;d<b.length&&!(d>=4);d++)e[X[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<X.length;s++)e[X[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <Commet /> indicator cannot be processed. Using default instead!")),s=0;s<X.length;s++)e[X[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b commet-indicator"},i.createElement("span",{className:"rli-d-i-b commet-box"},i.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),i.createElement("span",{className:"rli-d-i-b  commetball-box"})),i.createElement("span",{className:"rli-d-i-b commet-box"},i.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),i.createElement("span",{className:"rli-d-i-b commetball-box"})),i.createElement(S,{className:"commet-text",text:n?.text,textColor:n?.textColor})))};P(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: uxlv7n7 calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite uxlv7oa, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7p5;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7n7 {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7oa {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes uxlv7p5 {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var en=Array.from({length:4},(function(n,o){return"--OP-annulus-phase".concat(o+1,"-color")})),Un=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.5s").animationPeriod,v=(function(e){var b={},d=en.length;if(e instanceof Array){for(var s=N(e,d),g=0;g<s.length&&!(g>=4);g++)b[en[g]]=s[g];return b}try{if(typeof e!="string")throw new Error("Color String expected");for(var m=0;m<d;m++)b[en[m]]=e}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),m=0;m<d;m++)b[en[m]]=O}return b})((o=n?.color)!==null&&o!==void 0?o:""),t=n?.dense?4.3:2.9;return i.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},i.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},i.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:t,strokeMiterlimit:"10"})),i.createElement(S,{className:"OP-annulus-text",text:n?.text,textColor:n?.textColor})))};function hn(n){return n&&n.Math===Math&&n}P(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite uxlv7nu, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7ol;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7nu {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes uxlv7ol {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var j=hn(typeof window=="object"&&window)||hn(typeof self=="object"&&self)||hn(typeof global=="object"&&global)||(function(){return this})()||Function("return this")();function wn(){var n,o;return!((n=j?.crypto)===null||n===void 0)&&n.randomUUID?j.crypto.randomUUID():!((o=j?.btoa)===null||o===void 0)&&o.name?j.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var tn=Array.from({length:4},(function(n,o){return"--OP-dotted-phase".concat(o+1,"-color")})),Xn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(e){var b={},d=tn.length;if(e instanceof Array){for(var s=N(e,d),g=0;g<s.length&&!(g>=4);g++)b[tn[g]]=s[g];return b}try{if(typeof e!="string")throw new Error("Color String expected");for(var m=0;m<d;m++)b[tn[m]]=e}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof e,'" with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),m=0;m<d;m++)b[tn[m]]=O}return b})((o=n?.color)!==null&&o!==void 0?o:""),t=n?.dense?16:12;return i.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:t}).map((function(e,b){var d=(function(m,h,y){if(h===16){var x=360*m/h,z=h-m,A=Number.parseFloat(y)/h*z*-1;return{transform:"rotate(".concat(x,"deg)"),animationDelay:"".concat(A,"s")}}return{transform:"",animationDelay:""}})(b,t,p),s=d.animationDelay,g=d.transform;return i.createElement("span",{key:wn(),className:"rli-d-i-b dot-shape-holder",style:g?{transform:g}:void 0},i.createElement("span",{className:"dot",style:s?{animationDelay:s}:void 0}))})),i.createElement(S,{className:"OP-dotted-text",text:n?.text,textColor:n?.textColor})))};P(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite uxlv7pw, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite uxlv7qn;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7pw {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes uxlv7qn {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var ln=Array.from({length:4},(function(n,o){return"--OP-spokes-phase".concat(o+1,"-color")})),jn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(e){var b={},d=ln.length;if(e instanceof Array){for(var s=N(e,d),g=0;g<s.length&&!(g>=4);g++)b[ln[g]]=s[g];return b}try{if(typeof e!="string")throw new Error("Color String expected");for(var m=0;m<d;m++)b[ln[m]]=e}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),m=0;m<d;m++)b[ln[m]]=O}return b})((o=n?.color)!==null&&o!==void 0?o:""),t=n?.dense?16:12;return i.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:t},(function(e,b){return i.createElement("span",{key:wn(),className:"rli-d-i-b spoke",style:In(b,t,p)})}))),i.createElement(S,{text:n?.text,textColor:n?.textColor}))};function In(n,o,a){if(o===16){var r=o-n,l=Number.parseFloat(a)/o;return{transform:"rotate(".concat(360*n/o,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((r-1)*l*-1,"s")}}}P(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite uxlv7ra, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite uxlv7sv;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7ra {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes uxlv7sv {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var sn=Array.from({length:4},(function(n,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")})),Bn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(e){var b={},d=sn.length;if(e instanceof Array){for(var s=N(e,d),g=0;g<s.length&&!(g>=4);g++)b[sn[g]]=s[g];return b}try{if(typeof e!="string")throw new Error("Color String expected");for(var m=0;m<d;m++)b[sn[m]]=e}catch(h){for(h instanceof Error?console.warn("[".concat(h.message,']: Received "').concat(typeof e,'" with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),m=0;m<d;m++)b[sn[m]]=O}return b})((o=n?.color)!==null&&o!==void 0?o:""),t=n.dense?"0.45em":"";return i.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},i.createElement("span",{className:"rli-d-i-b annulus-sectors",style:u({},t&&{borderWidth:t})}),i.createElement(S,{className:"OP-annulus-dual-sectors-text",text:n?.text,textColor:n?.textColor})))};P(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite uxlv7rl, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite uxlv7tf;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7rl {
  to {
    transform: rotate(1turn);
  }
}
@keyframes uxlv7tf {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var nn=Array.from({length:4},(function(n,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]})),cn=function(n){return n===void 0&&(n=1),.25*n},Yn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1s").animationPeriod,v=(function(e){var b={},d=nn.length;if(e instanceof Array){for(var s=N(e,d),g=0;g<s.length&&!(g>=4);g++){var m=nn[g];try{if(!(x=f(s[g])).isValid())throw new Error("Invalid Color: ".concat(x.getOriginalInput()));var h=x.setAlpha(cn(x.getAlpha())).toRgbString(),y=s[g];b[m[0]]=h,b[m[1]]=y}catch{y=O,h=(x=f(O)).setAlpha(cn(x.getAlpha())).toRgbString(),b[m[0]]=h,b[m[1]]=y}}return b}try{var x=f(e);if(typeof e!="string")throw new Error("Color String expected");if(!x.isValid())throw new Error("Invalid Color: ".concat(x.getOriginalInput()));y=e,h=x.setAlpha(cn(x.getAlpha())).toRgbString();for(var z=0;z<d;z++)b[(m=nn[z])[0]]=h,b[m[1]]=y}catch(A){for(A instanceof Error?console.warn("[".concat(A.message,']: Received "').concat(typeof e,'" with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),y=O,h=(x=f(O)).setAlpha(cn(x.getAlpha())).toRgbString(),z=0;z<nn.length;z++)b[(m=nn[z])[0]]=h,b[m[1]]=y}return b})((o=n?.color)!==null&&o!==void 0?o:""),t=n.dense?"0.45em":"";return i.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},i.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:u({},t&&{borderWidth:t})}),i.createElement(S,{className:"OP-annulus-sector-text",text:n?.text,textColor:n?.textColor})))},no=function(n){var o=Object(n).variant,a=o===void 0?"disc":o;return a==="dotted"?i.createElement(Xn,u({},n)):a==="spokes"?i.createElement(jn,u({},n)):a==="disc"?i.createElement(Un,u({},n)):a==="split-disc"?i.createElement(Bn,u({},n)):a==="track-disc"?i.createElement(Yn,u({},n)):null};P(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7dk, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite uxlv7es;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: uxlv7dd var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7dk {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes uxlv7dd {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes uxlv7es {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);var I=Array.from({length:4},(function(n,o){return"--four-square-phase".concat(o+1,"-color")})),oo=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,I.length),d=0;d<b.length&&!(d>=4);d++)e[I[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<I.length;s++)e[I[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <FourSquare /> indicator cannot be processed. Using default instead!")),s=0;s<I.length;s++)e[I[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b foursquare-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b foursquare-indicator"},i.createElement("span",{className:"squares-container"},i.createElement("span",{className:"square square1"}),i.createElement("span",{className:"square square2"}),i.createElement("span",{className:"square square3"}),i.createElement("span",{className:"square square4"}))),i.createElement(S,{text:n?.text,textColor:n?.textColor,staticText:!0}))};P(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: uxlv7i4, uxlv7is;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes uxlv7i4 {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes uxlv7is {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);var B=Array.from({length:4},(function(n,o){return"--mosaic-phase".concat(o+1,"-color")})),ao=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.5s").animationPeriod,v=Math.round(parseFloat(p)/9*100)/100;v+="s";var t=(function(e){var b={};if(e instanceof Array){for(var d=N(e,B.length),s=0;s<d.length&&!(s>=4);s++)b[B[s]]=d[s];return b}try{if(typeof e!="string")throw new Error("Color String expected");for(var g=0;g<B.length;g++)b[B[g]]=e}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof e,'" instead with value, ').concat(JSON.stringify(e))):console.warn("".concat(JSON.stringify(e)," received in <Mosaic /> indicator cannot be processed. Using default instead!")),g=0;g<B.length;g++)b[B[g]]=O}return b})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b  mosaic-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),t),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b mosaic-indicator",style:u({},v&&{"--mosaic-skip-interval":v})},i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube1"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube2"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube3"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube4"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube5"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube6"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube7"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube8"}),i.createElement("span",{className:"rli-d-i-b mosaic-cube mosaic-cube9"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7i1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite uxlv7io;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7i1 {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes uxlv7io {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var Y=Array.from({length:4},(function(n,o){return"--riple-phase".concat(o+1,"-color")})),ro=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,Y.length),d=0;d<b.length&&!(d>=4);d++)e[Y[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<Y.length;s++)e[Y[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <Riple /> indicator cannot be processed. Using default instead!")),s=0;s<Y.length;s++)e[Y[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b riple-indicator"},i.createElement("span",{className:"rli-d-i-b riple"}),i.createElement("span",{className:"rli-d-i-b riple"}),i.createElement(S,{className:"riple-text",text:n?.text,textColor:n?.textColor})))};P(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7s0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite uxlv7to;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7s0 {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes uxlv7to {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);var Z=Array.from({length:4},(function(n,o){return"--TD-pulsate-phase".concat(o+1,"-color")})),Zn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,Z.length),d=0;d<b.length&&!(d>=4);d++)e[Z[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<Z.length;s++)e[Z[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t),' received in <ThreeDot variant="pulsate" /> indicator cannot be processed. Using default instead!')),s=0;s<Z.length;s++)e[Z[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b pulsate-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b pulsate-indicator"},i.createElement("span",{className:"rli-d-i-b pulsate-dot"}),i.createElement("span",{className:"rli-d-i-b pulsate-dot"}),i.createElement("span",{className:"rli-d-i-b pulsate-dot"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite uxlv7tu, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite uxlv7us;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes uxlv7tu {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes uxlv7us {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);var V=Array.from({length:4},(function(n,o){return"--TD-brick-stack-phase".concat(o+1,"-color")})),Vn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,V.length),d=0;d<b.length&&!(d>=4);d++)e[V[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<V.length;s++)e[V[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t),' received in <ThreeDot variant="brick-stack" /> indicator cannot be processed. Using default instead!')),s=0;s<V.length;s++)e[V[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b brick-stack-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b brick-stack-indicator"},i.createElement("span",{className:"rli-d-i-b brick-stack"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite uxlv7u0, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite uxlv7vq;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7u0 {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes uxlv7vq {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);var $=Array.from({length:4},(function(n,o){return"--TD-bob-phase".concat(o+1,"-color")})),$n=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,$.length),d=0;d<b.length&&!(d>=4);d++)e[$[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<$.length;s++)e[$[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t),' received in <ThreeDot variant="bob" /> indicator cannot be processed. Using default instead!')),s=0;s<$.length;s++)e[$[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b bob-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"bob-indicator"},i.createElement("span",{className:"bobbing"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7wc, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite uxlv7x6;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite uxlv7ww;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes uxlv7wc {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes uxlv7ww {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes uxlv7x6 {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);var G=Array.from({length:4},(function(n,o){return"--TD-bounce-phase".concat(o+1,"-color")})),Gn=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"0.5s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,G.length),d=0;d<b.length&&!(d>=4);d++)e[G[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<G.length;s++)e[G[s]]=t}catch{for(s=0;s<G.length;s++)e[G[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b bounce-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r)},i.createElement("span",{className:"wrapper"},i.createElement("span",{className:"group"},i.createElement("span",{className:"rli-d-i-b dot"}),i.createElement("span",{className:"rli-d-i-b dot"}),i.createElement("span",{className:"rli-d-i-b dot"})),i.createElement("span",{className:"group"},i.createElement("span",{className:"rli-d-i-b shadow"}),i.createElement("span",{className:"rli-d-i-b shadow"}),i.createElement("span",{className:"rli-d-i-b shadow"}))),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor,style:{marginTop:"2px"}}))},eo=function(n){var o=Object(n).variant,a=o===void 0?"pulsate":o;return a==="pulsate"?i.createElement(Zn,u({},n)):a==="brick-stack"?i.createElement(Vn,u({},n)):a==="bob"?i.createElement($n,u({},n)):a==="bounce"?i.createElement(Gn,u({},n)):null};P(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: uxlv7id, uxlv7jl;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes uxlv7id {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes uxlv7jl {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);var un=Array.from({length:4},(function(n,o){return"--shape-phase".concat(o+1,"-color")})),to=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"1.2s").animationPeriod,v=(function(t){var e={},b=un.length;if(Array.isArray(t)&&t.length>0){for(var d=N(t,b),s=0;s<d.length&&!(s>b-1);s++){var g=d[s];e[un[s]]=g}return e}try{if(typeof t!="string")throw new Error("Color String expected");for(s=0;s<b;s++)e[un[s]]=t}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <BlinkBlur /> indicator cannot be processed. Using default instead!")),s=0;s<b;s++)e[un[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b blink-blur-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b blink-blur-indicator"},i.createElement("span",{className:"blink-blur-shape blink-blur-shape1"}),i.createElement("span",{className:"blink-blur-shape blink-blur-shape2"}),i.createElement("span",{className:"blink-blur-shape blink-blur-shape3"}),i.createElement("span",{className:"blink-blur-shape blink-blur-shape4"}),i.createElement("span",{className:"blink-blur-shape blink-blur-shape5"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor,style:{marginTop:"0.8em"}}))};P(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: uxlv7ki var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, uxlv7l2 calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, uxlv7ly calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes uxlv7ki {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes uxlv7l2 {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes uxlv7ly {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);var dn=Array.from({length:4},(function(n,o){return"--trophySpin-phase".concat(o+1,"-color")})),io=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"2.5s").animationPeriod,v=(function(t){var e={},b=dn.length;if(t instanceof Array){for(var d=N(t,b),s=0;s<d.length&&!(s>=4);s++)e[dn[s]]=d[s];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var g=0;g<b;g++)e[dn[g]]=t}catch(m){for(m instanceof Error?console.warn("[".concat(m.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <TrophySpin /> indicator cannot be processed. Using default instead!")),g=0;g<b;g++)e[dn[g]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b trophy-spin-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b trophy-spin-indicator"},i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"}),i.createElement("span",{className:"blade"})),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite uxlv7md, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite uxlv7n0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes uxlv7md {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes uxlv7n0 {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);var W=Array.from({length:4},(function(n,o){return"--slab-phase".concat(o+1,"-color")})),lo=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"3s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,W.length),d=0;d<b.length&&!(d>=4);d++)e[W[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<W.length;s++)e[W[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <Slab /> indicator cannot be processed. Using default instead!")),s=0;s<W.length;s++)e[W[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b slab-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration-unitless":parseFloat(p)}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b slab-indicator"},i.createElement("span",{className:"slabs-wrapper"},i.createElement("span",{className:"slab"}),i.createElement("span",{className:"slab"}),i.createElement("span",{className:"slab"}),i.createElement("span",{className:"slab"}))),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};P(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite uxlv7k3, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite uxlv7kg;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes uxlv7k3 {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes uxlv7kg {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);var K=Array.from({length:4},(function(n,o){return"--life-line-phase".concat(o+1,"-color")})),so=function(n){var o,a=E(n?.style,n?.size),r=a.styles,l=a.fontSize,c=n?.easing,p=w(n?.speedPlus,"2s").animationPeriod,v=(function(t){var e={};if(t instanceof Array){for(var b=N(t,K.length),d=0;d<b.length&&!(d>=4);d++)e[K[d]]=b[d];return e}try{if(typeof t!="string")throw new Error("Color String expected");for(var s=0;s<K.length;s++)e[K[s]]=t}catch(g){for(g instanceof Error?console.warn("[".concat(g.message,']: Received "').concat(typeof t,'" instead with value, ').concat(JSON.stringify(t))):console.warn("".concat(JSON.stringify(t)," received in <LifeLine /> indicator cannot be processed. Using default instead!")),s=0;s<K.length;s++)e[K[s]]=O}return e})((o=n?.color)!==null&&o!==void 0?o:"");return i.createElement("span",{className:"rli-d-i-b lifeline-rli-bounding-box",style:u(u(u(u(u({},l&&{fontSize:l}),p&&{"--rli-animation-duration":p}),c&&{"--rli-animation-function":c}),v),r),role:"status","aria-live":"polite","aria-label":"Loading"},i.createElement("span",{className:"rli-d-i-b lifeline-indicator"},i.createElement("svg",{width:"14em",height:"6.825000001em",xmlns:"http://www.w3.org/2000/svg",version:"1.2",viewBox:"0 0 350 50",preserveAspectRatio:"xMinYMin meet"},i.createElement("path",{className:"rli-lifeline",stroke:"currentColor",fill:"none",strokeLinejoin:"round",strokeWidth:"4px",d:"M-113 70h250q8-30 12-3t5 8 3-7 3 4 6 35 8-55 6 40 8-3s2-11 10-10 1 1 8-10l4 8c6 4 8-6 10-17s2 10 9 11h210"}))),i.createElement(S,{staticText:!0,text:n?.text,textColor:n?.textColor}))};export{Kn as a,Qn as b,no as c,oo as d,ao as e,ro as f,eo as g,to as h,io as i,lo as j,so as k};
