(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[411],{3686:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return C}});let i=r(8754),n=r(1757),o=r(5893),s=n._(r(7294)),l=i._(r(3935)),a=i._(r(6665)),u=r(1908),c=r(4706),h=r(5670);r(1558);let d=r(1973),f=i._(r(3293)),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(e,t,r,i,n,o){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function p(e){let[t,r]=s.version.split(".",2),i=parseInt(t,10),n=parseInt(r,10);return i>18||18===i&&n>=3?{fetchPriority:e}:{fetchpriority:e}}let E=(0,s.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:l,width:a,decoding:u,className:c,style:h,fetchPriority:d,placeholder:f,loading:g,unoptimized:E,fill:w,onLoadRef:C,onLoadingCompleteRef:v,setBlurComplete:M,setShowAltText:y,onLoad:R,onError:b,...P}=e;return(0,o.jsx)("img",{...P,...p(d),loading:g,width:a,height:l,decoding:u,"data-nimg":w?"fill":"1",className:c,style:h,sizes:n,srcSet:i,src:r,ref:(0,s.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(b&&(e.src=e.src),e.complete&&m(e,f,C,v,M,E))},[r,f,C,v,M,b,E,t]),onLoad:e=>{m(e.currentTarget,f,C,v,M,E)},onError:e=>{y(!0),"empty"!==f&&M(!0),b&&b(e)}})});function w(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...p(r.fetchPriority)};return t&&l.default.preload?(l.default.preload(r.src,i),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let C=(0,s.forwardRef)((e,t)=>{let r=(0,s.useContext)(d.RouterContext),i=(0,s.useContext)(h.ImageConfigContext),n=(0,s.useMemo)(()=>{let e=g||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[i]),{onLoad:l,onLoadingComplete:a}=e,m=(0,s.useRef)(l);(0,s.useEffect)(()=>{m.current=l},[l]);let p=(0,s.useRef)(a);(0,s.useEffect)(()=>{p.current=a},[a]);let[C,v]=(0,s.useState)(!1),[M,y]=(0,s.useState)(!1),{props:R,meta:b}=(0,u.getImgProps)(e,{defaultLoader:f.default,imgConf:n,blurComplete:C,showAltText:M});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(E,{...R,unoptimized:b.unoptimized,placeholder:b.placeholder,fill:b.fill,onLoadRef:m,onLoadingCompleteRef:p,setBlurComplete:v,setShowAltText:y,ref:t}),b.priority?(0,o.jsx)(w,{isAppRouter:!r,imgAttributes:R}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1908:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return l}}),r(1558);let i=r(7386),n=r(4706);function o(e){return void 0!==e.default}function s(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function l(e,t){var r;let l,a,u,{src:c,sizes:h,unoptimized:d=!1,priority:f=!1,loading:g,className:m,quality:p,width:E,height:w,fill:C=!1,style:v,onLoad:M,onLoadingComplete:y,placeholder:R="empty",blurDataURL:b,fetchPriority:P,layout:S,objectFit:A,objectPosition:_,lazyBoundary:N,lazyRoot:I,...z}=e,{imgConf:x,showAltText:O,blurComplete:F,defaultLoader:L}=t,k=x||n.imageConfigDefault;if("allSizes"in k)l=k;else{let e=[...k.deviceSizes,...k.imageSizes].sort((e,t)=>e-t),t=k.deviceSizes.sort((e,t)=>e-t);l={...k,allSizes:e,deviceSizes:t}}let D=z.loader||L;delete z.loader,delete z.srcSet;let B="__next_img_default"in D;if(B){if("custom"===l.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=D;D=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(C=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(v={...v,...e});let t={responsive:"100vw",fill:"100vw"}[S];t&&!h&&(h=t)}let j="",T=s(E),U=s(w);if("object"==typeof(r=c)&&(o(r)||void 0!==r.src)){let e=o(c)?c.default:c;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(a=e.blurWidth,u=e.blurHeight,b=b||e.blurDataURL,j=e.src,!C){if(T||U){if(T&&!U){let t=T/e.width;U=Math.round(e.height*t)}else if(!T&&U){let t=U/e.height;T=Math.round(e.width*t)}}else T=e.width,U=e.height}}let H=!f&&("lazy"===g||void 0===g);(!(c="string"==typeof c?c:j)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,H=!1),l.unoptimized&&(d=!0),B&&c.endsWith(".svg")&&!l.dangerouslyAllowSVG&&(d=!0),f&&(P="high");let $=s(p),Q=Object.assign(C?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:A,objectPosition:_}:{},O?{}:{color:"transparent"},v),V=F||"empty"===R?null:"blur"===R?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:T,heightInt:U,blurWidth:a,blurHeight:u,blurDataURL:b||"",objectFit:Q.objectFit})+'")':'url("'+R+'")',Y=V?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:V}:{},G=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:s,loader:l}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,s),c=a.length-1;return{sizes:s||"w"!==u?s:"100vw",srcSet:a.map((e,i)=>l({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:l({config:t,src:r,quality:o,width:a[c]})}}({config:l,src:c,unoptimized:d,width:T,quality:$,sizes:h,loader:D});return{props:{...z,loading:H?"lazy":g,fetchPriority:P,width:T,height:U,decoding:"async",className:m,style:{...Q,...Y},sizes:G.sizes,srcSet:G.srcSet,src:G.src},meta:{unoptimized:d,priority:f,placeholder:R,fill:C}}}},7386:function(e,t){"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:s}=e,l=i?40*i:t,a=n?40*n:r,u=l&&a?"viewBox='0 0 "+l+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===s?"xMidYMid":"cover"===s?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},9267:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{getImageProps:function(){return l},default:function(){return a}});let i=r(8754),n=r(1908),o=r(3686),s=i._(r(3293)),l=e=>{let{props:t}=(0,n.getImgProps)(e,{defaultLoader:s.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},a=o.Image},3293:function(e,t){"use strict";function r(e){let{config:t,src:r,width:i,quality:n}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},5675:function(e,t,r){e.exports=r(9267)},1163:function(e,t,r){e.exports=r(3035)},4059:function(e,t,r){"use strict";r.d(t,{ZP:function(){return b}});var i,n,o,s=r(7294),l=Object.defineProperty,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&h(e,r,t[r]);if(a)for(var r of a(t))c.call(t,r)&&h(e,r,t[r]);return e},f=(e,t)=>{var r={};for(var i in e)u.call(e,i)&&0>t.indexOf(i)&&(r[i]=e[i]);if(null!=e&&a)for(var i of a(e))0>t.indexOf(i)&&c.call(e,i)&&(r[i]=e[i]);return r};(e=>{let t=class{constructor(e,r,i,o){if(this.version=e,this.errorCorrectionLevel=r,this.modules=[],this.isFunction=[],e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version value out of range");if(o<-1||o>7)throw RangeError("Mask value out of range");this.size=4*e+17;let s=[];for(let e=0;e<this.size;e++)s.push(!1);for(let e=0;e<this.size;e++)this.modules.push(s.slice()),this.isFunction.push(s.slice());this.drawFunctionPatterns();let l=this.addEccAndInterleave(i);if(this.drawCodewords(l),-1==o){let e=1e9;for(let t=0;t<8;t++){this.applyMask(t),this.drawFormatBits(t);let r=this.getPenaltyScore();r<e&&(o=t,e=r),this.applyMask(t)}}n(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}static encodeText(r,i){let n=e.QrSegment.makeSegments(r);return t.encodeSegments(n,i)}static encodeBinary(r,i){let n=e.QrSegment.makeBytes(r);return t.encodeSegments([n],i)}static encodeSegments(e,i,o=1,l=40,a=-1,u=!0){let c,h;if(!(t.MIN_VERSION<=o&&o<=l&&l<=t.MAX_VERSION)||a<-1||a>7)throw RangeError("Invalid value");for(c=o;;c++){let r=8*t.getNumDataCodewords(c,i),n=s.getTotalBits(e,c);if(n<=r){h=n;break}if(c>=l)throw RangeError("Data too long")}for(let e of[t.Ecc.MEDIUM,t.Ecc.QUARTILE,t.Ecc.HIGH])u&&h<=8*t.getNumDataCodewords(c,e)&&(i=e);let d=[];for(let t of e)for(let e of(r(t.mode.modeBits,4,d),r(t.numChars,t.mode.numCharCountBits(c),d),t.getData()))d.push(e);n(d.length==h);let f=8*t.getNumDataCodewords(c,i);n(d.length<=f),r(0,Math.min(4,f-d.length),d),r(0,(8-d.length%8)%8,d),n(d.length%8==0);for(let e=236;d.length<f;e^=253)r(e,8,d);let g=[];for(;8*g.length<d.length;)g.push(0);return d.forEach((e,t)=>g[t>>>3]|=e<<7-(7&t)),new t(c,i,g,a)}getModule(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]}getModules(){return this.modules}drawFunctionPatterns(){for(let e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);let e=this.getAlignmentPatternPositions(),t=e.length;for(let r=0;r<t;r++)for(let i=0;i<t;i++)0==r&&0==i||0==r&&i==t-1||r==t-1&&0==i||this.drawAlignmentPattern(e[r],e[i]);this.drawFormatBits(0),this.drawVersion()}drawFormatBits(e){let t=this.errorCorrectionLevel.formatBits<<3|e,r=t;for(let e=0;e<10;e++)r=r<<1^(r>>>9)*1335;let o=(t<<10|r)^21522;n(o>>>15==0);for(let e=0;e<=5;e++)this.setFunctionModule(8,e,i(o,e));this.setFunctionModule(8,7,i(o,6)),this.setFunctionModule(8,8,i(o,7)),this.setFunctionModule(7,8,i(o,8));for(let e=9;e<15;e++)this.setFunctionModule(14-e,8,i(o,e));for(let e=0;e<8;e++)this.setFunctionModule(this.size-1-e,8,i(o,e));for(let e=8;e<15;e++)this.setFunctionModule(8,this.size-15+e,i(o,e));this.setFunctionModule(8,this.size-8,!0)}drawVersion(){if(this.version<7)return;let e=this.version;for(let t=0;t<12;t++)e=e<<1^(e>>>11)*7973;let t=this.version<<12|e;n(t>>>18==0);for(let e=0;e<18;e++){let r=i(t,e),n=this.size-11+e%3,o=Math.floor(e/3);this.setFunctionModule(n,o,r),this.setFunctionModule(o,n,r)}}drawFinderPattern(e,t){for(let r=-4;r<=4;r++)for(let i=-4;i<=4;i++){let n=Math.max(Math.abs(i),Math.abs(r)),o=e+i,s=t+r;0<=o&&o<this.size&&0<=s&&s<this.size&&this.setFunctionModule(o,s,2!=n&&4!=n)}}drawAlignmentPattern(e,t){for(let r=-2;r<=2;r++)for(let i=-2;i<=2;i++)this.setFunctionModule(e+i,t+r,1!=Math.max(Math.abs(i),Math.abs(r)))}setFunctionModule(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0}addEccAndInterleave(e){let r=this.version,i=this.errorCorrectionLevel;if(e.length!=t.getNumDataCodewords(r,i))throw RangeError("Invalid argument");let o=t.NUM_ERROR_CORRECTION_BLOCKS[i.ordinal][r],s=t.ECC_CODEWORDS_PER_BLOCK[i.ordinal][r],l=Math.floor(t.getNumRawDataModules(r)/8),a=o-l%o,u=Math.floor(l/o),c=[],h=t.reedSolomonComputeDivisor(s);for(let r=0,i=0;r<o;r++){let n=e.slice(i,i+u-s+(r<a?0:1));i+=n.length;let o=t.reedSolomonComputeRemainder(n,h);r<a&&n.push(0),c.push(n.concat(o))}let d=[];for(let e=0;e<c[0].length;e++)c.forEach((t,r)=>{(e!=u-s||r>=a)&&d.push(t[e])});return n(d.length==l),d}drawCodewords(e){if(e.length!=Math.floor(t.getNumRawDataModules(this.version)/8))throw RangeError("Invalid argument");let r=0;for(let t=this.size-1;t>=1;t-=2){6==t&&(t=5);for(let n=0;n<this.size;n++)for(let o=0;o<2;o++){let s=t-o,l=(t+1&2)==0?this.size-1-n:n;!this.isFunction[l][s]&&r<8*e.length&&(this.modules[l][s]=i(e[r>>>3],7-(7&r)),r++)}}n(r==8*e.length)}applyMask(e){if(e<0||e>7)throw RangeError("Mask value out of range");for(let t=0;t<this.size;t++)for(let r=0;r<this.size;r++){let i;switch(e){case 0:i=(r+t)%2==0;break;case 1:i=t%2==0;break;case 2:i=r%3==0;break;case 3:i=(r+t)%3==0;break;case 4:i=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:i=r*t%2+r*t%3==0;break;case 6:i=(r*t%2+r*t%3)%2==0;break;case 7:i=((r+t)%2+r*t%3)%2==0;break;default:throw Error("Unreachable")}!this.isFunction[t][r]&&i&&(this.modules[t][r]=!this.modules[t][r])}}getPenaltyScore(){let e=0;for(let r=0;r<this.size;r++){let i=!1,n=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[r][s]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,o),i||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),i=this.modules[r][s],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,o)*t.PENALTY_N3}for(let r=0;r<this.size;r++){let i=!1,n=0,o=[0,0,0,0,0,0,0];for(let s=0;s<this.size;s++)this.modules[s][r]==i?5==++n?e+=t.PENALTY_N1:n>5&&e++:(this.finderPenaltyAddHistory(n,o),i||(e+=this.finderPenaltyCountPatterns(o)*t.PENALTY_N3),i=this.modules[s][r],n=1);e+=this.finderPenaltyTerminateAndCount(i,n,o)*t.PENALTY_N3}for(let r=0;r<this.size-1;r++)for(let i=0;i<this.size-1;i++){let n=this.modules[r][i];n==this.modules[r][i+1]&&n==this.modules[r+1][i]&&n==this.modules[r+1][i+1]&&(e+=t.PENALTY_N2)}let r=0;for(let e of this.modules)r=e.reduce((e,t)=>e+(t?1:0),r);let i=this.size*this.size,o=Math.ceil(Math.abs(20*r-10*i)/i)-1;return n(0<=o&&o<=9),n(0<=(e+=o*t.PENALTY_N4)&&e<=2568888),e}getAlignmentPatternPositions(){if(1==this.version)return[];{let e=Math.floor(this.version/7)+2,t=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*e-2)),r=[6];for(let i=this.size-7;r.length<e;i-=t)r.splice(1,0,i);return r}}static getNumRawDataModules(e){if(e<t.MIN_VERSION||e>t.MAX_VERSION)throw RangeError("Version number out of range");let r=(16*e+128)*e+64;if(e>=2){let t=Math.floor(e/7)+2;r-=(25*t-10)*t-55,e>=7&&(r-=36)}return n(208<=r&&r<=29648),r}static getNumDataCodewords(e,r){return Math.floor(t.getNumRawDataModules(e)/8)-t.ECC_CODEWORDS_PER_BLOCK[r.ordinal][e]*t.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][e]}static reedSolomonComputeDivisor(e){if(e<1||e>255)throw RangeError("Degree out of range");let r=[];for(let t=0;t<e-1;t++)r.push(0);r.push(1);let i=1;for(let n=0;n<e;n++){for(let e=0;e<r.length;e++)r[e]=t.reedSolomonMultiply(r[e],i),e+1<r.length&&(r[e]^=r[e+1]);i=t.reedSolomonMultiply(i,2)}return r}static reedSolomonComputeRemainder(e,r){let i=r.map(e=>0);for(let n of e){let e=n^i.shift();i.push(0),r.forEach((r,n)=>i[n]^=t.reedSolomonMultiply(r,e))}return i}static reedSolomonMultiply(e,t){if(e>>>8!=0||t>>>8!=0)throw RangeError("Byte out of range");let r=0;for(let i=7;i>=0;i--)r=r<<1^(r>>>7)*285^(t>>>i&1)*e;return n(r>>>8==0),r}finderPenaltyCountPatterns(e){let t=e[1];n(t<=3*this.size);let r=t>0&&e[2]==t&&e[3]==3*t&&e[4]==t&&e[5]==t;return(r&&e[0]>=4*t&&e[6]>=t?1:0)+(r&&e[6]>=4*t&&e[0]>=t?1:0)}finderPenaltyTerminateAndCount(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)}finderPenaltyAddHistory(e,t){0==t[0]&&(e+=this.size),t.pop(),t.unshift(e)}};function r(e,t,r){if(t<0||t>31||e>>>t!=0)throw RangeError("Value out of range");for(let i=t-1;i>=0;i--)r.push(e>>>i&1)}function i(e,t){return(e>>>t&1)!=0}function n(e){if(!e)throw Error("Assertion error")}t.MIN_VERSION=1,t.MAX_VERSION=40,t.PENALTY_N1=3,t.PENALTY_N2=3,t.PENALTY_N3=40,t.PENALTY_N4=10,t.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],t.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e.QrCode=t;let o=class{constructor(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw RangeError("Invalid argument");this.bitData=r.slice()}static makeBytes(e){let t=[];for(let i of e)r(i,8,t);return new o(o.Mode.BYTE,e.length,t)}static makeNumeric(e){if(!o.isNumeric(e))throw RangeError("String contains non-numeric characters");let t=[];for(let i=0;i<e.length;){let n=Math.min(e.length-i,3);r(parseInt(e.substr(i,n),10),3*n+1,t),i+=n}return new o(o.Mode.NUMERIC,e.length,t)}static makeAlphanumeric(e){let t;if(!o.isAlphanumeric(e))throw RangeError("String contains unencodable characters in alphanumeric mode");let i=[];for(t=0;t+2<=e.length;t+=2){let n=45*o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t));r(n+=o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t+1)),11,i)}return t<e.length&&r(o.ALPHANUMERIC_CHARSET.indexOf(e.charAt(t)),6,i),new o(o.Mode.ALPHANUMERIC,e.length,i)}static makeSegments(e){return""==e?[]:o.isNumeric(e)?[o.makeNumeric(e)]:o.isAlphanumeric(e)?[o.makeAlphanumeric(e)]:[o.makeBytes(o.toUtf8ByteArray(e))]}static makeEci(e){let t=[];if(e<0)throw RangeError("ECI assignment value out of range");if(e<128)r(e,8,t);else if(e<16384)r(2,2,t),r(e,14,t);else if(e<1e6)r(6,3,t),r(e,21,t);else throw RangeError("ECI assignment value out of range");return new o(o.Mode.ECI,0,t)}static isNumeric(e){return o.NUMERIC_REGEX.test(e)}static isAlphanumeric(e){return o.ALPHANUMERIC_REGEX.test(e)}getData(){return this.bitData.slice()}static getTotalBits(e,t){let r=0;for(let i of e){let e=i.mode.numCharCountBits(t);if(i.numChars>=1<<e)return 1/0;r+=4+e+i.bitData.length}return r}static toUtf8ByteArray(e){e=encodeURI(e);let t=[];for(let r=0;r<e.length;r++)"%"!=e.charAt(r)?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substr(r+1,2),16)),r+=2);return t}},s=o;s.NUMERIC_REGEX=/^[0-9]*$/,s.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,s.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",e.QrSegment=s})(o||(o={})),(e=>{let t=class{constructor(e,t){this.ordinal=e,this.formatBits=t}};t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),e.Ecc=t})((i=o||(o={})).QrCode||(i.QrCode={})),(e=>{let t=class{constructor(e,t){this.modeBits=e,this.numBitsCharCount=t}numCharCountBits(e){return this.numBitsCharCount[Math.floor((e+7)/17)]}};t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),e.Mode=t})((n=o||(o={})).QrSegment||(n.QrSegment={}));var g=o,m={L:g.QrCode.Ecc.LOW,M:g.QrCode.Ecc.MEDIUM,Q:g.QrCode.Ecc.QUARTILE,H:g.QrCode.Ecc.HIGH},p="#FFFFFF",E="#000000";function w(e,t=0){let r=[];return e.forEach(function(e,i){let n=null;e.forEach(function(o,s){if(!o&&null!==n){r.push(`M${n+t} ${i+t}h${s-n}v1H${n+t}z`),n=null;return}if(s===e.length-1){if(!o)return;null===n?r.push(`M${s+t},${i+t} h1v1H${s+t}z`):r.push(`M${n+t},${i+t} h${s+1-n}v1H${n+t}z`);return}o&&null===n&&(n=s)})}),r.join("")}function C(e,t){return e.slice().map((e,r)=>r<t.y||r>=t.y+t.h?e:e.map((e,r)=>(r<t.x||r>=t.x+t.w)&&e))}function v(e,t,r,i){if(null==i)return null;let n=e.length+2*(r?4:0),o=Math.floor(.1*t),s=n/t,l=(i.width||o)*s,a=(i.height||o)*s,u=null==i.x?e.length/2-l/2:i.x*s,c=null==i.y?e.length/2-a/2:i.y*s,h=null;if(i.excavate){let e=Math.floor(u),t=Math.floor(c);h={x:e,y:t,w:Math.ceil(l+u-e),h:Math.ceil(a+c-t)}}return{x:u,y:c,h:a,w:l,excavation:h}}var M=function(){try{new Path2D().addPath(new Path2D)}catch(e){return!1}return!0}();function y(e){let{value:t,size:r=128,level:i="L",bgColor:n=p,fgColor:o=E,includeMargin:l=!1,style:a,imageSettings:u}=e,c=f(e,["value","size","level","bgColor","fgColor","includeMargin","style","imageSettings"]),h=null==u?void 0:u.src,y=(0,s.useRef)(null),R=(0,s.useRef)(null),[b,P]=(0,s.useState)(!1);(0,s.useEffect)(()=>{if(null!=y.current){let e=y.current,s=e.getContext("2d");if(!s)return;let a=g.QrCode.encodeText(t,m[i]).getModules(),c=l?4:0,h=a.length+2*c,d=v(a,r,l,u),f=R.current,p=null!=d&&null!==f&&f.complete&&0!==f.naturalHeight&&0!==f.naturalWidth;p&&null!=d.excavation&&(a=C(a,d.excavation));let E=window.devicePixelRatio||1;e.height=e.width=r*E;let b=r/h*E;s.scale(b,b),s.fillStyle=n,s.fillRect(0,0,h,h),s.fillStyle=o,M?s.fill(new Path2D(w(a,c))):a.forEach(function(e,t){e.forEach(function(e,r){e&&s.fillRect(r+c,t+c,1,1)})}),p&&s.drawImage(f,d.x+c,d.y+c,d.w,d.h)}}),(0,s.useEffect)(()=>{P(!1)},[h]);let S=d({height:r,width:r},a),A=null;return null!=h&&(A=s.createElement("img",{src:h,key:h,style:{display:"none"},onLoad:()=>{P(!0)},ref:R})),s.createElement(s.Fragment,null,s.createElement("canvas",d({style:S,height:r,width:r,ref:y},c)),A)}function R(e){let{value:t,size:r=128,level:i="L",bgColor:n=p,fgColor:o=E,includeMargin:l=!1,imageSettings:a}=e,u=f(e,["value","size","level","bgColor","fgColor","includeMargin","imageSettings"]),c=g.QrCode.encodeText(t,m[i]).getModules(),h=l?4:0,M=c.length+2*h,y=v(c,r,l,a),R=null;null!=a&&null!=y&&(null!=y.excavation&&(c=C(c,y.excavation)),R=s.createElement("image",{xlinkHref:a.src,height:y.h,width:y.w,x:y.x+h,y:y.y+h,preserveAspectRatio:"none"}));let b=w(c,h);return s.createElement("svg",d({height:r,width:r,viewBox:`0 0 ${M} ${M}`},u),s.createElement("path",{fill:n,d:`M0,0 h${M}v${M}H0z`,shapeRendering:"crispEdges"}),s.createElement("path",{fill:o,d:b,shapeRendering:"crispEdges"}),R)}var b=e=>{let{renderAs:t}=e,r=f(e,["renderAs"]);return"svg"===t?s.createElement(R,d({},r)):s.createElement(y,d({},r))}},1955:function(e,t,r){"use strict";/*! js-cookie v3.0.5 | MIT */function i(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)e[i]=r[i]}return e}r.d(t,{Z:function(){return n}});var n=function e(t,r){function n(e,n,o){if("undefined"!=typeof document){"number"==typeof(o=i({},r,o)).expires&&(o.expires=new Date(Date.now()+864e5*o.expires)),o.expires&&(o.expires=o.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var s="";for(var l in o)o[l]&&(s+="; "+l,!0!==o[l]&&(s+="="+o[l].split(";")[0]));return document.cookie=e+"="+t.write(n,e)+s}}return Object.create({set:n,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var r=document.cookie?document.cookie.split("; "):[],i={},n=0;n<r.length;n++){var o=r[n].split("="),s=o.slice(1).join("=");try{var l=decodeURIComponent(o[0]);if(i[l]=t.read(s,l),e===l)break}catch(e){}}return e?i[e]:i}},remove:function(e,t){n(e,"",i({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,i({},this.attributes,t))},withConverter:function(t){return e(i({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(r)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}}]);