(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5111,8735,6690],{68039:function(e,t,n){var r=n(790),o=n(65064),i=n(43735),c=n(2428),s=n(71701),l=n(7757),u=n(92403),a=n(56868),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(c(e)||"string"==typeof e||"function"==typeof e.splice||l(e)||a(e)||i(e)))return!e.length;var t=o(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!r(e).length;for(var n in e)if(d.call(e,n))return!1;return!0}},8735:function(e,t,n){"use strict";n.d(t,{g:function(){return h}});var r=n(94521),o=n(17379),i=n(47349),c=n(19841),s=n(92379),l=n(73746),u=n(66246),a=n(73965),d=n(651);let f=["children"],m=["children","className"];function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function h(e){let{options:t,value:n,onValueChange:r,disabled:o,defaultValue:i}=e;return(0,d.jsxs)(b.Root,{value:n,onValueChange:r,disabled:o,defaultValue:i,children:[(0,d.jsxs)(b.Trigger,{children:[(0,d.jsx)(b.Value,{}),(0,d.jsx)(b.Icon,{})]}),(0,d.jsx)(b.Portal,{children:(0,d.jsx)(b.Content,{children:t.map(e=>(0,d.jsx)(b.Item,{value:e.value,children:e.label},e.value))})})]})}let b={Root:i.fC,Trigger:function(e){return(0,d.jsx)(a.J7,g({$as:i.xz},e))},Value:i.B4,Icon:function(){return(0,d.jsx)(i.JO,{children:(0,d.jsx)(u.Tg4,{className:"icon-sm"})})},Portal:i.h_,Content:function(e){let{children:t,className:n}=e,r=(0,o.Z)(e,m);return(0,d.jsxs)(a.w5,g(g({$as:i.VY,side:"bottom",sideOffset:4,position:"popper",className:(0,c.default)("min-w-[220px] overflow-auto",n)},r),{},{children:[(0,d.jsx)(i.u_,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(u.r0F,{className:"icon-sm"})}),(0,d.jsx)(i.l_,{children:t}),(0,d.jsx)(i.$G,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(u.Tg4,{className:"icon-sm"})})]}))},Item:s.forwardRef(function(e,t){let{children:n}=e,r=(0,o.Z)(e,f),c=(0,l.Qr)(),s=c?a.yy:a.aF;return(0,d.jsxs)(s,g(g({$as:i.ck,ref:t,className:"flex justify-between"},r),{},{children:[(0,d.jsx)(i.eT,{children:n}),(0,d.jsx)(i.wU,{className:"",children:c?(0,d.jsx)(u.kvR,{className:"icon-sm"}):(0,d.jsx)(u.pUt,{className:"icon-sm"})})]}))}),ItemText:i.eT,ItemIndicator:i.wU,Separator:function(){return(0,d.jsx)(i.Z0,{className:"my-1.5 h-[1px] bg-token-border-light juice:mx-5 juice:my-1"})},Label:function(e){let{children:t}=e;return(0,d.jsx)(i.__,{className:"m-1.5 p-2.5 text-xs font-semibold text-token-text-secondary juice:mx-2 juice:my-0 juice:px-2",children:t})},Group:i.ZA};t.Z=b},69482:function(e,t,n){"use strict";var r=n(94521),o=n(17379),i=n(19841),c=n(92379),s=n(651);let l=["children"];function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let d=(0,c.createContext)({rootBordered:!1}),f=(0,c.forwardRef)(function(e,t){let{children:n,disabled:r=!1,onClick:o,className:c}=e;return(0,s.jsx)("tr",a(a({ref:t},r?{"data-disabled":!0}:{}),{},{className:(0,i.default)(r?"pointer-events-none":"",c),onClick:o,children:n}))});t.Z={Root:function(e){let{children:t,fixed:n=!1,className:r,size:o="normal",bordered:l=!1}=e,u=(0,c.useRef)(null),a=(0,c.useRef)(null),{0:f,1:m}=(0,c.useState)(!1);return(0,c.useEffect)(()=>{let e=u.current,t=a.current;if(e&&t){let n=new ResizeObserver(()=>{m(t.scrollHeight>e.clientHeight)});return n.observe(e),()=>n.disconnect()}},[]),(0,s.jsx)(d.Provider,{value:{rootBordered:l},children:(0,s.jsx)("div",{className:(0,i.default)("overflow-y-auto text-token-text-primary",l&&"rounded-lg border border-token-border-light","normal"===o?"text-base":"text-sm",f&&"pr-1",r),ref:u,children:(0,s.jsx)("table",{className:(0,i.default)("w-full border-separate border-spacing-0",n&&"table-fixed"),ref:a,children:t})})})},Header:function(e){let{children:t}=e;return(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:t})})},HeaderCell:function(e){let{textAlign:t="left",children:n,className:r=""}=e,{rootBordered:o}=(0,c.useContext)(d);return(0,s.jsx)("th",{className:(0,i.default)("text-token sticky top-0 z-10 border-b-[0.5px] border-token-border-medium bg-token-main-surface-primary py-2 font-semibold",o?"px-3":"pr-4 last:pr-0","left"===t?"text-left":"right"===t?"text-right":"text-center",r),children:n})},Body:function(e){let{children:t}=e,n=(0,o.Z)(e,l);return(0,s.jsx)("tbody",a(a({},n),{},{children:t}))},Row:f,Cell:function(e){let{textAlign:t="left",children:n,className:r,colSpan:o}=e,{rootBordered:l}=(0,c.useContext)(d);return(0,s.jsx)("td",{className:(0,i.default)("border-b-[0.5px] border-token-border-medium align-top",l?"px-3":"pr-4 last:pr-0 [tr:last-child_&]:border-b-0",t&&"text-"+t,r),colSpan:o,children:(0,s.jsx)("div",{className:(0,i.default)("flex min-h-[40px] items-center [tr[data-disabled=true]_&]:opacity-50","right"===t&&"justify-end","center"===t&&"justify-center"),children:n})})},Actions:function(e){let{children:t}=e;return(0,s.jsx)("div",{className:"text-md flex items-center justify-end gap-2",children:t})}}},9879:function(e,t,n){"use strict";n.d(t,{R:function(){return i}});let r=["moz","ms","o","webkit"];function o(e){return e?e+"Hidden":"hidden"}function i(e){let t=function(){for(let e=0;e<r.length;e++)if(o(r[e]) in document)return r[e];return null}(),n=(t||"")+"visibilitychange";function i(n){return"boolean"==typeof n?n?e.onVisible():e.onHidden():document[o(t)]?e.onHidden():e.onVisible()}return document.addEventListener(n,i,!1),document.addEventListener("focus",e.onVisible,!1),document.addEventListener("blur",e.onHidden,!1),window.addEventListener("focus",e.onVisible,!1),window.addEventListener("blur",e.onHidden,!1),()=>{document.removeEventListener(n,i,!1),document.removeEventListener("focus",e.onVisible,!1),document.removeEventListener("blur",e.onHidden,!1),window.removeEventListener("focus",e.onVisible,!1),window.removeEventListener("blur",e.onHidden,!1)}}},79688:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(92379);function o(){let e=(0,r.useRef)([]),t=(0,r.useRef)((t,n)=>{let r=setTimeout(t,n);return e.current.push(r),r});return(0,r.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},99331:function(e,t,n){"use strict";n.d(t,{Ef:function(){return p},UG:function(){return g},dG:function(){return u},gb:function(){return h},mK:function(){return m}});var r,o=n(94521),i=n(25704),c=n(59031),s=n(92379);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let u=((r={}).SonicHome="sonic.web.home",r.SonicServer="sonic.ssr.search",r.ChatPageLoad="chatgpt.web.pageLoad",r.CompletionRequest="chatgpt.web.completionRequest",r);class a{constructor(e,t){var n,r;(0,o.Z)(this,"expectedTimingLogTimeouts",{}),(0,o.Z)(this,"startMs",-1),(0,o.Z)(this,"lastLogMs",-1),(0,o.Z)(this,"loggedTimings",new Set),(0,o.Z)(this,"timingBlocks",{}),(0,o.Z)(this,"debug",!1),this.namespace=e,this.expectedTimingLogs=null!==(n=null==t?void 0:t.expectedTimingLogs)&&void 0!==n?n:[],this.debug=null!==(r=null==t?void 0:t.debug)&&void 0!==r&&r,this.reset()}reset(){for(let e of(this.startMs=this.lastLogMs=performance.now(),this.timingBlocks={},this.loggedTimings=new Set,Object.values(this.expectedTimingLogTimeouts)))clearTimeout(e);for(let e of(this.expectedTimingLogTimeouts={},this.expectedTimingLogs)){let t=setTimeout(()=>{c.U.addAction("".concat(this.namespace,".").concat(e.name,".timed_out"))},e.expectedInMs);this.expectedTimingLogTimeouts[e.name]=t,this.debug&&console.debug("[DatadogProfiler] Expecting ".concat(this.namespace,".").concat(e.name," to be logged within ").concat(e.expectedInMs,"ms"))}}logTiming(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromLastLog:!1};if(this.loggedTimings.has(e)){console.warn("[DatadogProfiler] Timing ".concat(this.namespace,".").concat(e," already logged"));return}let n=performance.now()-(t.fromLastLog?this.lastLogMs:this.startMs);c.U.addAction("".concat(this.namespace,".").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,o.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({durationMs:n},t.context)),this.lastLogMs=performance.now(),this.loggedTimings.add(e),e in this.expectedTimingLogTimeouts&&(clearTimeout(this.expectedTimingLogTimeouts[e]),delete this.expectedTimingLogTimeouts[e]),this.debug&&console.debug("[DatadogProfiler] ".concat(this.namespace,".").concat(e,": ").concat(n,"ms"))}startBlock(e){this.timingBlocks[e]=performance.now()}endBlock(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{throwError:!0},n=this.timingBlocks[e];if(void 0===n&&t.throwError)throw Error("Block ".concat(e," not started"));let r=performance.now()-n;c.U.addAction("".concat(this.namespace,".").concat(e),{durationMs:r}),delete this.timingBlocks[e]}}let d={},f="__global__";function m(e){let{namespace:t,key:n=f,opts:r}=e;void 0===d[t]&&(d[t]={});let o=(0,i.S)(d[t]);return void 0!==o[n]&&c.U.addError("Profiler already exists for namespace ".concat(t," and key ").concat(n)),o[n]=new a(t,r),o[n]}function p(e){let{namespace:t,key:n=f}=e;if(void 0!==d[t])return(0,i.S)(d[t])[n]}function g(e){let{namespace:t,key:n=f}=e;if(void 0!==d[t]){let e=(0,i.S)(d[t]);delete e[n]}}function h(e){let{namespace:t,key:n=f,opts:r}=e,{0:o}=(0,s.useState)(()=>m({namespace:t,key:n,opts:r}));return o}},91734:function(e,t,n){"use strict";n.d(t,{W:function(){return o}});var r=n(92379);function o(e,t,n){(0,r.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},41763:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var r=n(92379),o=n(81069),i=n(42250),c=n(28868);function s(e){let t=(0,c.h)(()=>(0,o.BX)(e)),{isStatic:n}=(0,r.useContext)(i._);if(n){let[,n]=(0,r.useState)(e);(0,r.useEffect)(()=>t.on("change",n),[])}return t}},95093:function(e,t,n){"use strict";n.d(t,{q:function(){return a}});var r=n(92379),o=n(7677),i=n(41763),c=n(42250),s=n(74081),l=n(92846),u=n(54709);function a(e,t={}){let{isStatic:n}=(0,r.useContext)(c._),a=(0,r.useRef)(null),d=(0,i.c)((0,o.i)(e)?e.get():e),f=()=>{a.current&&a.current.stop()};return(0,r.useInsertionEffect)(()=>d.attach((e,r)=>{if(n)return r(e);let o=a.current;return o&&0===o.time&&o.sample(u.frameData.delta),f(),a.current=(0,l.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:r}),d.get()},f),[JSON.stringify(t)]),(0,s.L)(()=>{if((0,o.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}}}]);
//# sourceMappingURL=5111.5ce9de1a2d260167.js.map