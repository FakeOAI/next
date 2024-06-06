(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[29,6037],{68039:function(e,t,n){var o=n(790),i=n(65064),r=n(43735),c=n(2428),s=n(71701),u=n(7757),a=n(92403),l=n(56868),d=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(s(e)&&(c(e)||"string"==typeof e||"function"==typeof e.splice||u(e)||l(e)||r(e)))return!e.length;var t=i(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(a(e))return!o(e).length;for(var n in e)if(d.call(e,n))return!1;return!0}},9879:function(e,t,n){"use strict";n.d(t,{R:function(){return r}});let o=["moz","ms","o","webkit"];function i(e){return e?e+"Hidden":"hidden"}function r(e){let t=function(){for(let e=0;e<o.length;e++)if(i(o[e]) in document)return o[e];return null}(),n=(t||"")+"visibilitychange";function r(n){return"boolean"==typeof n?n?e.onVisible():e.onHidden():document[i(t)]?e.onHidden():e.onVisible()}return document.addEventListener(n,r,!1),document.addEventListener("focus",e.onVisible,!1),document.addEventListener("blur",e.onHidden,!1),window.addEventListener("focus",e.onVisible,!1),window.addEventListener("blur",e.onHidden,!1),()=>{document.removeEventListener(n,r,!1),document.removeEventListener("focus",e.onVisible,!1),document.removeEventListener("blur",e.onHidden,!1),window.removeEventListener("focus",e.onVisible,!1),window.removeEventListener("blur",e.onHidden,!1)}}},6037:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(92379);function i(e,t){let n=(0,o.useRef)(e);(0,o.useEffect)(()=>{n.current=e},[e]),(0,o.useEffect)(()=>{if(null!=t){let e=window.setInterval(function(){n.current()},t);return()=>clearInterval(e)}},[t])}},79688:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var o=n(92379);function i(){let e=(0,o.useRef)([]),t=(0,o.useRef)((t,n)=>{let o=setTimeout(t,n);return e.current.push(o),o});return(0,o.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},99331:function(e,t,n){"use strict";n.d(t,{Ef:function(){return m},UG:function(){return h},dG:function(){return a},gb:function(){return p},mK:function(){return g}});var o,i=n(94521),r=n(25704),c=n(44529),s=n(92379);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}let a=((o={}).SonicHome="sonic.web.home",o.SonicServer="sonic.ssr.search",o.ChatPageLoad="chatgpt.web.pageLoad",o.CompletionRequest="chatgpt.web.completionRequest",o);class l{constructor(e,t){var n,o;(0,i.Z)(this,"expectedTimingLogTimeouts",{}),(0,i.Z)(this,"startMs",-1),(0,i.Z)(this,"lastLogMs",-1),(0,i.Z)(this,"loggedTimings",new Set),(0,i.Z)(this,"timingBlocks",{}),(0,i.Z)(this,"debug",!1),this.namespace=e,this.expectedTimingLogs=null!==(n=null==t?void 0:t.expectedTimingLogs)&&void 0!==n?n:[],this.debug=null!==(o=null==t?void 0:t.debug)&&void 0!==o&&o,this.reset()}reset(){for(let e of(this.startMs=this.lastLogMs=performance.now(),this.timingBlocks={},this.loggedTimings=new Set,Object.values(this.expectedTimingLogTimeouts)))clearTimeout(e);for(let e of(this.expectedTimingLogTimeouts={},this.expectedTimingLogs)){let t=setTimeout(()=>{c.U.addAction("".concat(this.namespace,".").concat(e.name,".timed_out"))},e.expectedInMs);this.expectedTimingLogTimeouts[e.name]=t,this.debug&&console.debug("[DatadogProfiler] Expecting ".concat(this.namespace,".").concat(e.name," to be logged within ").concat(e.expectedInMs,"ms"))}}logTiming(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{fromLastLog:!1};if(this.loggedTimings.has(e)){console.warn("[DatadogProfiler] Timing ".concat(this.namespace,".").concat(e," already logged"));return}let n=performance.now()-(t.fromLastLog?this.lastLogMs:this.startMs);c.U.addAction("".concat(this.namespace,".").concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({durationMs:n},t.context)),this.lastLogMs=performance.now(),this.loggedTimings.add(e),e in this.expectedTimingLogTimeouts&&(clearTimeout(this.expectedTimingLogTimeouts[e]),delete this.expectedTimingLogTimeouts[e]),this.debug&&console.debug("[DatadogProfiler] ".concat(this.namespace,".").concat(e,": ").concat(n,"ms"))}startBlock(e){this.timingBlocks[e]=performance.now()}endBlock(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{throwError:!0},n=this.timingBlocks[e];if(void 0===n&&t.throwError)throw Error("Block ".concat(e," not started"));let o=performance.now()-n;c.U.addAction("".concat(this.namespace,".").concat(e),{durationMs:o}),delete this.timingBlocks[e]}}let d={},f="__global__";function g(e){let{namespace:t,key:n=f,opts:o}=e;void 0===d[t]&&(d[t]={});let i=(0,r.S)(d[t]);return void 0!==i[n]&&c.U.addError("Profiler already exists for namespace ".concat(t," and key ").concat(n)),i[n]=new l(t,o),i[n]}function m(e){let{namespace:t,key:n=f}=e;if(void 0!==d[t])return(0,r.S)(d[t])[n]}function h(e){let{namespace:t,key:n=f}=e;if(void 0!==d[t]){let e=(0,r.S)(d[t]);delete e[n]}}function p(e){let{namespace:t,key:n=f,opts:o}=e,{0:i}=(0,s.useState)(()=>g({namespace:t,key:n,opts:o}));return i}},91734:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var o=n(92379);function i(e,t,n){(0,o.useInsertionEffect)(()=>e.on(t,n),[e,t,n])}},41763:function(e,t,n){"use strict";n.d(t,{c:function(){return s}});var o=n(92379),i=n(81069),r=n(42250),c=n(28868);function s(e){let t=(0,c.h)(()=>(0,i.BX)(e)),{isStatic:n}=(0,o.useContext)(r._);if(n){let[,n]=(0,o.useState)(e);(0,o.useEffect)(()=>t.on("change",n),[])}return t}},95093:function(e,t,n){"use strict";n.d(t,{q:function(){return l}});var o=n(92379),i=n(7677),r=n(41763),c=n(42250),s=n(74081),u=n(92846),a=n(54709);function l(e,t={}){let{isStatic:n}=(0,o.useContext)(c._),l=(0,o.useRef)(null),d=(0,r.c)((0,i.i)(e)?e.get():e),f=()=>{l.current&&l.current.stop()};return(0,o.useInsertionEffect)(()=>d.attach((e,o)=>{if(n)return o(e);let i=l.current;return i&&0===i.time&&i.sample(a.frameData.delta),f(),l.current=(0,u.y)({keyframes:[d.get(),e],velocity:d.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:o}),d.get()},f),[JSON.stringify(t)]),(0,s.L)(()=>{if((0,i.i)(e))return e.on("change",e=>d.set(parseFloat(e)))},[d]),d}}}]);
//# sourceMappingURL=29.0431c794f0fd6eb4.js.map