(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[89],{24421:function(t,e,r){"use strict";function n(t){var e=new Date(Date.UTC(t.getFullYear(),t.getMonth(),t.getDate(),t.getHours(),t.getMinutes(),t.getSeconds(),t.getMilliseconds()));return e.setUTCFullYear(t.getFullYear()),t.getTime()-e.getTime()}r.d(e,{Z:function(){return n}})},51516:function(t,e,r){"use strict";function n(t,e){if(e.length<t)throw TypeError(t+" argument"+(t>1?"s":"")+" required, but only "+e.length+" present")}r.d(e,{Z:function(){return n}})},94801:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(67629),i=r(51516);function s(t,e){(0,i.Z)(2,arguments);var r=(0,n.Z)(t),s=(0,n.Z)(e);return r.getTime()===s.getTime()}},91304:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(94801),i=r(51516);function s(t){return(0,i.Z)(1,arguments),(0,n.Z)(t,Date.now())}},67629:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(28734),i=r(51516);function s(t){(0,i.Z)(1,arguments);var e=(0,n.Z)(t);return e.setHours(0,0,0,0),e}},28734:function(t,e,r){"use strict";r.d(e,{Z:function(){return s}});var n=r(51516);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(t){(0,n.Z)(1,arguments);var e=Object.prototype.toString.call(t);return t instanceof Date||"object"===i(t)&&"[object Date]"===e?new Date(t.getTime()):"number"==typeof t||"[object Number]"===e?new Date(t):(("string"==typeof t||"[object String]"===e)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},20267:function(t){t.exports=function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}},44140:function(t,e,r){var n=r(96581),i=r(49912);t.exports=function t(e,r,s,u,o){var a=-1,c=e.length;for(s||(s=i),o||(o=[]);++a<c;){var l=e[a];r>0&&s(l)?r>1?t(l,r-1,s,u,o):n(o,l):u||(o[o.length]=l)}return o}},59600:function(t,e,r){var n=r(25898),i=r(71701);t.exports=function(t,e){var r=-1,s=i(t)?Array(t.length):[];return n(t,function(t,n,i){s[++r]=e(t,n,i)}),s}},35728:function(t,e,r){var n=r(67631),i=r(87856),s=r(61757),u=r(59600),o=r(28499),a=r(52715),c=r(87127),l=r(98958),f=r(2428);t.exports=function(t,e,r){e=e.length?n(e,function(t){return f(t)?function(e){return i(e,1===t.length?t[0]:t)}:t}):[l];var h=-1;return e=n(e,a(s)),o(u(t,function(t,r,i){return{criteria:n(e,function(e){return e(t)}),index:++h,value:t}}),function(t,e){return c(t,e,r)})}},17063:function(t,e,r){var n=r(98958),i=r(58544),s=r(11863);t.exports=function(t,e){return s(i(t,e,n),t+"")}},43182:function(t,e,r){var n=r(75269),i=r(57965),s=r(98958),u=i?function(t,e){return i(t,"toString",{configurable:!0,enumerable:!1,value:n(e),writable:!0})}:s;t.exports=u},28499:function(t){t.exports=function(t,e){var r=t.length;for(t.sort(e);r--;)t[r]=t[r].value;return t}},1522:function(t,e,r){var n=r(42848);t.exports=function(t,e){if(t!==e){var r=void 0!==t,i=null===t,s=t==t,u=n(t),o=void 0!==e,a=null===e,c=e==e,l=n(e);if(!a&&!l&&!u&&t>e||u&&o&&c&&!a&&!l||i&&o&&c||!r&&c||!s)return 1;if(!i&&!u&&!l&&t<e||l&&r&&s&&!i&&!u||a&&r&&s||!o&&s||!c)return -1}return 0}},87127:function(t,e,r){var n=r(1522);t.exports=function(t,e,r){for(var i=-1,s=t.criteria,u=e.criteria,o=s.length,a=r.length;++i<o;){var c=n(s[i],u[i]);if(c){if(i>=a)return c;return c*("desc"==r[i]?-1:1)}}return t.index-e.index}},49912:function(t,e,r){var n=r(66293),i=r(43735),s=r(2428),u=n?n.isConcatSpreadable:void 0;t.exports=function(t){return s(t)||i(t)||!!(u&&t&&t[u])}},57209:function(t,e,r){var n=r(3284),i=r(71701),s=r(30911),u=r(6627);t.exports=function(t,e,r){if(!u(r))return!1;var o=typeof e;return("number"==o?!!(i(r)&&s(e,r.length)):"string"==o&&e in r)&&n(r[e],t)}},58544:function(t,e,r){var n=r(20267),i=Math.max;t.exports=function(t,e,r){return e=i(void 0===e?t.length-1:e,0),function(){for(var s=arguments,u=-1,o=i(s.length-e,0),a=Array(o);++u<o;)a[u]=s[e+u];u=-1;for(var c=Array(e+1);++u<e;)c[u]=s[u];return c[e]=r(a),n(t,this,c)}}},11863:function(t,e,r){var n=r(43182),i=r(29426)(n);t.exports=i},29426:function(t){var e=Date.now;t.exports=function(t){var r=0,n=0;return function(){var i=e(),s=16-(i-n);if(n=i,s>0){if(++r>=800)return arguments[0]}else r=0;return t.apply(void 0,arguments)}}},75269:function(t){t.exports=function(t){return function(){return t}}},89678:function(t,e,r){var n=r(6627),i=r(85365),s=r(67948),u=Math.max,o=Math.min;t.exports=function(t,e,r){var a,c,l,f,h,p,v=0,d=!1,b=!1,g=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(e){var r=a,n=c;return a=c=void 0,v=e,f=t.apply(n,r)}function y(t){var r=t-p,n=t-v;return void 0===p||r>=e||r<0||b&&n>=l}function x(){var t,r,n,s=i();if(y(s))return w(s);h=setTimeout(x,(t=s-p,r=s-v,n=e-t,b?o(n,l-r):n))}function w(t){return(h=void 0,g&&a)?m(t):(a=c=void 0,f)}function O(){var t,r=i(),n=y(r);if(a=arguments,c=this,p=r,n){if(void 0===h)return v=t=p,h=setTimeout(x,e),d?m(t):f;if(b)return clearTimeout(h),h=setTimeout(x,e),m(p)}return void 0===h&&(h=setTimeout(x,e)),f}return e=s(e)||0,n(r)&&(d=!!r.leading,l=(b="maxWait"in r)?u(s(r.maxWait)||0,e):l,g="trailing"in r?!!r.trailing:g),O.cancel=function(){void 0!==h&&clearTimeout(h),v=0,a=p=c=h=void 0},O.flush=function(){return void 0===h?f:w(i())},O}},85365:function(t,e,r){var n=r(73401);t.exports=function(){return n.Date.now()}},28541:function(t,e,r){var n=r(44140),i=r(35728),s=r(17063),u=r(57209),o=s(function(t,e){if(null==t)return[];var r=e.length;return r>1&&u(t,e[0],e[1])?e=[]:r>2&&u(e[0],e[1],e[2])&&(e=[e[0]]),i(t,n(e,1),[])});t.exports=o},23763:function(t,e,r){var n=r(89678),i=r(6627);t.exports=function(t,e,r){var s=!0,u=!0;if("function"!=typeof t)throw TypeError("Expected a function");return i(r)&&(s="leading"in r?!!r.leading:s,u="trailing"in r?!!r.trailing:u),n(t,e,{leading:s,maxWait:e,trailing:u})}},19464:function(t,e,r){"use strict";r.d(e,{h:function(){return d}});var n=r(92379),i=r(39743),s=r(60083),u=r(74349),o=r(52134);function a(t,e){return t.filter(t=>!e.includes(t))}var c=class extends u.l{#t;#e;#r;#n;#i;#s;constructor(t,e,r){super(),this.#t=t,this.#r=[],this.#n=[],this.#u([]),this.setQueries(e,r)}#u(t){this.#e=t,this.#s=this.#o(t)}onSubscribe(){1===this.listeners.size&&this.#n.forEach(t=>{t.subscribe(e=>{this.#a(t,e)})})}onUnsubscribe(){this.listeners.size||this.destroy()}destroy(){this.listeners=new Set,this.#n.forEach(t=>{t.destroy()})}setQueries(t,e,r){this.#r=t,this.#i=e,i.V.batch(()=>{let t=this.#n,e=this.#c(this.#r);e.forEach(t=>t.observer.setOptions(t.defaultedQueryOptions,r));let n=e.map(t=>t.observer),i=n.map(t=>t.getCurrentResult()),s=n.some((e,r)=>e!==t[r]);(t.length!==n.length||s)&&(this.#n=n,this.#u(i),this.hasListeners()&&(a(t,n).forEach(t=>{t.destroy()}),a(n,t).forEach(t=>{t.subscribe(e=>{this.#a(t,e)})}),this.#l()))})}getCurrentResult(){return this.#s}getQueries(){return this.#n.map(t=>t.getCurrentQuery())}getObservers(){return this.#n}getOptimisticResult(t){let e=this.#c(t),r=e.map(t=>t.observer.getOptimisticResult(t.defaultedQueryOptions));return[r,t=>this.#o(t??r),()=>e.map((t,e)=>{let n=r[e];return t.defaultedQueryOptions.notifyOnChangeProps?n:t.observer.trackResult(n)})]}#o(t){let e=this.#i?.combine;return e?(0,o.Q$)(this.#s,e(t)):t}#c(t){let e=new Map(this.#n.map(t=>[t.options.queryHash,t])),r=t.map(t=>this.#t.defaultQueryOptions(t)),n=r.flatMap(t=>{let r=e.get(t.queryHash);return null!=r?[{defaultedQueryOptions:t,observer:r}]:[]}),i=new Set(n.map(t=>t.defaultedQueryOptions.queryHash)),u=r.filter(t=>!i.has(t.queryHash)),o=t=>{let e=this.#t.defaultQueryOptions(t);return this.#n.find(t=>t.options.queryHash===e.queryHash)??new s.z(this.#t,e)},a=u.map(t=>({defaultedQueryOptions:t,observer:o(t)}));return n.concat(a).sort((t,e)=>r.indexOf(t.defaultedQueryOptions)-r.indexOf(e.defaultedQueryOptions))}#a(t,e){let r=this.#n.indexOf(t);-1!==r&&(this.#u(function(t,e,r){let n=t.slice(0);return n[e]=r,n}(this.#e,r,e)),this.#l())}#l(){i.V.batch(()=>{this.listeners.forEach(t=>{t(this.#e)})})}},l=r(42420),f=r(40925),h=r(71219),p=r(38163),v=r(31196);function d({queries:t,...e},r){let s=(0,l.NL)(r),u=(0,f.S)(),o=(0,h._)(),a=n.useMemo(()=>t.map(t=>{let e=s.defaultQueryOptions(t);return e._optimisticResults=u?"isRestoring":"optimistic",e}),[t,s,u]);a.forEach(t=>{(0,v.Fb)(t),(0,p.pf)(t,o)}),(0,p.JN)(o);let[d]=n.useState(()=>new c(s,a,e)),[b,g,m]=d.getOptimisticResult(a);n.useSyncExternalStore(n.useCallback(t=>u?()=>void 0:d.subscribe(i.V.batchCalls(t)),[d,u]),()=>d.getCurrentResult(),()=>d.getCurrentResult()),n.useEffect(()=>{d.setQueries(a,e,{listeners:!1})},[a,e,d]);let y=b.some((t,e)=>(0,v.SB)(a[e],t,u))?b.flatMap((t,e)=>{let r=a[e],n=d.getObservers()[e];if(r&&n){if((0,v.SB)(r,t,u))return(0,v.j8)(r,n,o);(0,v.Z$)(t,u)&&(0,v.j8)(r,n,o)}return[]}):[];if(y.length>0)throw Promise.all(y);let x=d.getQueries(),w=b.find((t,e)=>(0,p.KJ)({result:t,errorResetBoundary:o,throwOnError:a[e]?.throwOnError??!1,query:x[e]}));if(w?.error)throw w.error;return g(m())}},79208:function(t,e,r){"use strict";r.d(e,{Ue:function(){return i},rp:function(){return s},ck:function(){return u}});let n=()=>{let t,e;let r=new Promise((r,n)=>{t=r,e=n});return{resolve:t,reject:e,value:r}},i=(t,e)=>{let r=t.name??`batcher:${Math.random().toString(16).slice(2)})`,i=t.scheduler??u(10),s=globalThis.__BATSHIT_DEVTOOLS__?.for(r),o=e??{seq:0,batch:new Set,currentRequest:n(),timer:void 0,start:null,latest:null};s?.create({seq:o.seq});let a=()=>{o.batch=new Set,o.currentRequest=n(),o.timer=void 0,o.start=null,o.latest=null};return{fetch:e=>{o.start||(o.start=Date.now()),o.latest=Date.now(),o.batch.add(e),clearTimeout(o.timer);let r=i(o.start,o.latest,o.batch.size);s?.queue({seq:o.seq,query:e,batch:[...o.batch],scheduled:r,latest:o.latest,start:o.start});let n=()=>{let e=o.seq,r=t.fetcher([...o.batch]),n=o.currentRequest;return s?.fetch({seq:e,batch:[...o.batch]}),a(),r.then(t=>{s?.data({seq:e,data:t}),n.resolve(t)}).catch(t=>{s?.error({seq:e,error:t}),n.reject(t)}),o.seq++,r};if("immediate"===r){let r=o.currentRequest;return n(),r.value.then(r=>t.resolver(r,e))}return"never"===r?o.currentRequest.value.then(r=>t.resolver(r,e)):(o.timer=setTimeout(n,r),o.currentRequest.value.then(r=>t.resolver(r,e)))}}},s=t=>(e,r)=>e.find(e=>e[t]==r),u=t=>(e,r)=>t-(r-e)}}]);
//# sourceMappingURL=89-f03b142d1ad87029.js.map