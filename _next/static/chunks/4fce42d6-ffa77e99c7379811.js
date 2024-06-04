(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8066],{6618:function(e,t,r){var n,i=r(44675);/*! For license information please see redoc.browser.lib.js.LICENSE.txt */n=function(){return function(){var e={260:function(e,t,r){"use strict";var n=r(15),i=r.n(n),o=r(645),s=r.n(o)()(i());s.push([e.id,".ps{overflow:hidden!important;overflow-anchor:none;-ms-overflow-style:none;touch-action:auto;-ms-touch-action:auto}.ps__rail-x{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;height:15px;bottom:0;position:absolute}.ps__rail-y{display:none;opacity:0;transition:background-color .2s linear,opacity .2s linear;-webkit-transition:background-color .2s linear,opacity .2s linear;width:15px;right:0;position:absolute}.ps--active-x>.ps__rail-x,.ps--active-y>.ps__rail-y{display:block;background-color:transparent}.ps:hover>.ps__rail-x,.ps:hover>.ps__rail-y,.ps--focus>.ps__rail-x,.ps--focus>.ps__rail-y,.ps--scrolling-x>.ps__rail-x,.ps--scrolling-y>.ps__rail-y{opacity:.6}.ps .ps__rail-x:hover,.ps .ps__rail-y:hover,.ps .ps__rail-x:focus,.ps .ps__rail-y:focus,.ps .ps__rail-x.ps--clicking,.ps .ps__rail-y.ps--clicking{background-color:#eee;opacity:.9}.ps__thumb-x{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,height .2s ease-in-out;-webkit-transition:background-color .2s linear,height .2s ease-in-out;height:6px;bottom:2px;position:absolute}.ps__thumb-y{background-color:#aaa;border-radius:6px;transition:background-color .2s linear,width .2s ease-in-out;-webkit-transition:background-color .2s linear,width .2s ease-in-out;width:6px;right:2px;position:absolute}.ps__rail-x:hover>.ps__thumb-x,.ps__rail-x:focus>.ps__thumb-x,.ps__rail-x.ps--clicking .ps__thumb-x{background-color:#999;height:11px}.ps__rail-y:hover>.ps__thumb-y,.ps__rail-y:focus>.ps__thumb-y,.ps__rail-y.ps--clicking .ps__thumb-y{background-color:#999;width:11px}@supports (-ms-overflow-style: none){.ps{overflow:auto!important}}@media screen and (-ms-high-contrast: active),(-ms-high-contrast: none){.ps{overflow:auto!important}}\n","",{version:3,sources:["webpack://./node_modules/perfect-scrollbar/css/perfect-scrollbar.css"],names:[],mappings:"AAGA,IACE,yBAAA,CACA,oBAAA,CACA,uBAAA,CACA,iBAAA,CACA,qBAAA,CAMF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,WAAA,CAEA,QAAA,CAEA,iBAAA,CAGF,YACE,YAAA,CACA,SAAA,CACA,yDAAA,CACA,iEAAA,CACA,UAAA,CAEA,OAAA,CAEA,iBAAA,CAGF,oDAEE,aAAA,CACA,4BAAA,CAGF,oJAME,UAAA,CAGF,kJAME,qBAAA,CACA,UAAA,CAMF,aACE,qBAAA,CAnEF,iBAAA,CAqEE,6DAAA,CACA,qEAAA,CACA,UAAA,CAEA,UAAA,CAEA,iBAAA,CAGF,aACE,qBAAA,CA/EF,iBAAA,CAiFE,4DAAA,CACA,oEAAA,CACA,SAAA,CAEA,SAAA,CAEA,iBAAA,CAGF,oGAGE,qBAAA,CACA,WAAA,CAGF,oGAGE,qBAAA,CACA,UAAA,CAIF,qCACE,IACE,uBAAA,CAAA,CAIJ,wEACE,IACE,uBAAA,CAAA",sourcesContent:["/*\n * Container style\n */\n.ps {\n  overflow: hidden !important;\n  overflow-anchor: none;\n  -ms-overflow-style: none;\n  touch-action: auto;\n  -ms-touch-action: auto;\n}\n\n/*\n * Scrollbar rail styles\n */\n.ps__rail-x {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  height: 15px;\n  /* there must be 'bottom' or 'top' for ps__rail-x */\n  bottom: 0px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-y {\n  display: none;\n  opacity: 0;\n  transition: background-color .2s linear, opacity .2s linear;\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\n  width: 15px;\n  /* there must be 'right' or 'left' for ps__rail-y */\n  right: 0;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps--active-x > .ps__rail-x,\n.ps--active-y > .ps__rail-y {\n  display: block;\n  background-color: transparent;\n}\n\n.ps:hover > .ps__rail-x,\n.ps:hover > .ps__rail-y,\n.ps--focus > .ps__rail-x,\n.ps--focus > .ps__rail-y,\n.ps--scrolling-x > .ps__rail-x,\n.ps--scrolling-y > .ps__rail-y {\n  opacity: 0.6;\n}\n\n.ps .ps__rail-x:hover,\n.ps .ps__rail-y:hover,\n.ps .ps__rail-x:focus,\n.ps .ps__rail-y:focus,\n.ps .ps__rail-x.ps--clicking,\n.ps .ps__rail-y.ps--clicking {\n  background-color: #eee;\n  opacity: 0.9;\n}\n\n/*\n * Scrollbar thumb styles\n */\n.ps__thumb-x {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, height .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\n  height: 6px;\n  /* there must be 'bottom' for ps__thumb-x */\n  bottom: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__thumb-y {\n  background-color: #aaa;\n  border-radius: 6px;\n  transition: background-color .2s linear, width .2s ease-in-out;\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\n  width: 6px;\n  /* there must be 'right' for ps__thumb-y */\n  right: 2px;\n  /* please don't change 'position' */\n  position: absolute;\n}\n\n.ps__rail-x:hover > .ps__thumb-x,\n.ps__rail-x:focus > .ps__thumb-x,\n.ps__rail-x.ps--clicking .ps__thumb-x {\n  background-color: #999;\n  height: 11px;\n}\n\n.ps__rail-y:hover > .ps__thumb-y,\n.ps__rail-y:focus > .ps__thumb-y,\n.ps__rail-y.ps--clicking .ps__thumb-y {\n  background-color: #999;\n  width: 11px;\n}\n\n/* MS supports */\n@supports (-ms-overflow-style: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n  .ps {\n    overflow: auto !important;\n  }\n}\n"],sourceRoot:""}]),t.Z=s},645:function(e){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=e(t);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r}).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);n&&i[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},15:function(e){"use strict";function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}e.exports=function(e){var r=function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=r){var n,i,o=[],s=!0,a=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(o.push(n.value),4!==o.length);s=!0);}catch(e){a=!0,i=e}finally{try{s||null==r.return||r.return()}finally{if(a)throw i}}return o}}(e,0)||function(e,r){if(e){if("string"==typeof e)return t(e,4);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,4):void 0}}(e,0)||function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n=r[1],i=r[3];if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(i))));return[n].concat(i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(e," */")})).concat(["/*# ".concat("sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o)," */")]).join("\n")}return[n].join("\n")}},825:function(e){e.exports={}},388:function(e,t,n){"use strict";n.d(t,{ZP:function(){return s}});var i=r(28901),o=(e,t,r)=>new Promise((n,i)=>{var o=e=>{try{a(r.next(e))}catch(e){i(e)}},s=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())});class s{constructor(){this.add=h,this.done=m,this.search=x,this.toJS=f,this.load=y,this.dispose=b,this.fromExternalJS=g}}let a,l,c,p=[];function u(){(a=new i.Builder).field("title"),a.field("description"),a.ref("ref"),a.pipeline.add(i.trimmer,i.stopWordFilter,i.stemmer),c=new Promise(e=>{l=e})}i.tokenizer.separator=/\s+/,u();let d=e=>{let t=i.trimmer(new i.Token(e,{}));return"*"+i.stemmer(t)+"*"};function h(e,t,r){let n=p.push(r)-1,i={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};a.add(i)}function m(){return o(this,null,function*(){l(a.build())})}function f(){return o(this,null,function*(){return{store:p,index:(yield c).toJSON()}})}function g(e,t){return o(this,null,function*(){try{if(importScripts(e),!self[t])throw Error("Broken index file format");y(self[t])}catch(e){console.error("Failed to load search index: "+e.message)}})}function y(e){return o(this,null,function*(){p=e.store,l(i.Index.load(e.index))})}function b(){return o(this,null,function*(){p=[],u()})}function x(e,t=0){return o(this,null,function*(){if(0===e.trim().length)return[];let r=(yield c).query(t=>{e.trim().toLowerCase().split(/\s+/).forEach(e=>{if(1===e.length)return;let r=d(e);t.term(r,{})})});return t>0&&(r=r.slice(0,t)),r.map(e=>({meta:p[e.ref],score:e.score}))})}},342:function(e,t,r){"use strict";let n=r(376);function i(e){let t=(e=e.replace("[]","Array")).split("/");return t[0]=t[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm,"_"),t.join("/")}String.prototype.toCamelCase=function(){return this.toLowerCase().replace(/[-_ \/\.](.)/g,function(e,t){return t.toUpperCase()})},e.exports={colour:({}).NODE_DISABLE_COLORS?{red:"",yellow:"",green:"",normal:""}:{red:"\x1b[31m",yellow:"\x1b[33;1m",green:"\x1b[32m",normal:"\x1b[0m"},uniqueOnly:function(e,t,r){return r.indexOf(e)===t},hasDuplicates:function(e){return new Set(e).size!==e.length},allSame:function(e){return new Set(e).size<=1},distinctArray:function(e){return e.length===function(e){let t=[];for(let r of e)t.find(function(e,t,i){return function(e,t){function r(e,t){return n.stringify(e)===n.stringify(Object.assign({},e,t))}return r(e,t)&&r(t,e)}(e,r)})||t.push(r);return t}(e).length},firstDupe:function(e){return e.find(function(t,r,n){return e.indexOf(t)<r})},hash:function(e){let t=0;if(0===e.length)return t;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r)|0;return t},parameterTypeProperties:["format","minimum","maximum","exclusiveMinimum","exclusiveMaximum","minLength","maxLength","multipleOf","minItems","maxItems","uniqueItems","minProperties","maxProperties","additionalProperties","pattern","enum","default"],arrayProperties:["items","minItems","maxItems","uniqueItems"],httpMethods:["get","post","put","delete","patch","head","options","trace"],sanitise:i,sanitiseAll:function(e){return i(e.split("/").join("_"))}}},856:function(e,t,r){"use strict";let n=r(825),i=r(470),o=r(416),s=r(416),a=r(66),l=r(53).jptr,c=r(401).recurse,p=r(683).clone,u=r(593).dereference,d=r(592).isRef,h=r(342);function m(e,t,r,n,i,s){let a=s.externalRefs[r+n].paths[0],u=o.parse(i),m={},f=1;for(;f;)f=0,c(e,{identityDetection:!0},function(e,r,n){if(d(e,r)){if(e[r].startsWith("#")){if(m[e[r]]||e.$fixed){if(!e.$fixed){let t=(a+"/"+m[e[r]]).split("/#/").join("/");n.parent[n.pkey]={$ref:t,"x-miro":e[r],$fixed:!0},s.verbose>1&&console.warn("Replacing with",t),f++}}else{let i=p(l(t,e[r]));if(s.verbose>1&&console.warn((!1===i?h.colour.red:h.colour.green)+"Fragment resolution",e[r],h.colour.normal),!1===i){if(n.parent[n.pkey]={},s.fatal){let t=Error("Fragment $ref resolution failed "+e[r]);if(!s.promise)throw t;s.promise.reject(t)}}else f++,n.parent[n.pkey]=i,m[e[r]]=n.path.replace("/%24ref","")}}else if(u.protocol){let t=o.resolve(i,e[r]).toString();s.verbose>1&&console.warn(h.colour.yellow+"Rewriting external url ref",e[r],"as",t,h.colour.normal),e["x-miro"]=e[r],s.externalRefs[e[r]]&&(s.externalRefs[t]||(s.externalRefs[t]=s.externalRefs[e[r]]),s.externalRefs[t].failed=s.externalRefs[e[r]].failed),e[r]=t}else if(!e["x-miro"]){let t=o.resolve(i,e[r]).toString(),n=!1;s.externalRefs[e[r]]&&(n=s.externalRefs[e[r]].failed),n||(s.verbose>1&&console.warn(h.colour.yellow+"Rewriting external ref",e[r],"as",t,h.colour.normal),e["x-miro"]=e[r],e[r]=t)}}});return c(e,{},function(e,t,r){d(e,t)&&void 0!==e.$fixed&&delete e.$fixed}),s.verbose>1&&console.warn("Finished fragment resolution"),e}function f(e,t){if(!t.filters||!t.filters.length)return e;for(let r of t.filters)e=r(e,t);return e}function g(e,t,r){e.resolver.actions.push([]),(function e(t){return new Promise(function(r,s){new Promise(function(e,r){function n(e,r,n){if(e[r]&&d(e[r],"$ref")){let o=e[r].$ref;if(!o.startsWith("#")){let s="";if(!i[o]){let e=Object.keys(i).find(function(e,t,r){return o.startsWith(e+"/")});e&&(t.verbose&&console.warn("Found potential subschema at",e),s=(s="/"+(o.split("#")[1]||"").replace(e.split("#")[1]||"")).split("/undefined").join(""),o=e)}if(i[o]||(i[o]={resolved:!1,paths:[],extras:{},description:e[r].description}),i[o].resolved){if(i[o].failed);else if(t.rewriteRefs){let n=i[o].resolvedAt;t.verbose>1&&console.warn("Rewriting ref",o,n),e[r]["x-miro"]=o,e[r].$ref=n+s}else e[r]=p(i[o].data)}else i[o].paths.push(n.path),i[o].extras[n.path]=s}}}let i=t.externalRefs;if(t.resolver.depth>0&&t.source===t.resolver.base)return e(i);c(t.openapi.definitions,{identityDetection:!0,path:"#/definitions"},n),c(t.openapi.components,{identityDetection:!0,path:"#/components"},n),c(t.openapi,{identityDetection:!0},n),e(i)}).then(function(r){for(let s in r)if(!r[s].resolved){let c=t.resolver.depth;c>0&&c++,t.resolver.actions[c].push(function(){return function(e,t,r,s){let c;var u,d,h,g,y=o.parse(r.source),b=r.source.split("\\").join("/").split("/");b.pop()||b.pop();let x="",v=t.split("#");v.length>1&&(x="#"+v[1],t=v[0]),b=b.join("/");let w=(h=o.parse(t).protocol,g=y.protocol,h&&h.length>2?h:g&&g.length>2?g:"file:");if(c="file:"===w?i.resolve(b?b+"/":"",t):o.resolve(b?b+"/":"",t),r.cache[c]){r.verbose&&console.warn("CACHED",c,x);let e=p(r.cache[c]),n=r.externalRef=e;if(x&&!1===(n=l(n,x))&&(n={},r.fatal)){let e=Error("Cached $ref resolution failed "+c+x);if(!r.promise)throw e;r.promise.reject(e)}return s(p(n=f(n=m(n,e,t,x,c,r),r)),c,r),Promise.resolve(n)}if(r.verbose&&console.warn("GET",c,x),r.handlers&&r.handlers[w])return r.handlers[w](b,t,x,r).then(function(e){return r.externalRef=e,e=f(e,r),r.cache[c]=e,s(e,c,r),e}).catch(function(e){throw r.verbose&&console.warn(e),e});if(w&&w.startsWith("http")){let e=Object.assign({},r.fetchOptions,{agent:r.agent});return r.fetch(c,e).then(function(e){if(200!==e.status){if(r.ignoreIOErrors)return r.verbose&&console.warn("FAILED",t),r.externalRefs[t].failed=!0,'{"$ref":"'+t+'"}';throw Error(`Received status code ${e.status}: ${c}`)}return e.text()}).then(function(e){try{let n=a.parse(e,{schema:"core",prettyErrors:!0});if(e=r.externalRef=n,r.cache[c]=p(e),x&&!1===(e=l(e,x))&&(e={},r.fatal)){let e=Error("Remote $ref resolution failed "+c+x);if(!r.promise)throw e;r.promise.reject(e)}e=f(e=m(e,n,t,x,c,r),r)}catch(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)}return s(e,c,r),e}).catch(function(e){if(r.verbose&&console.warn(e),r.cache[c]={},!r.promise||!r.fatal)throw e;r.promise.reject(e)})}{let e='{"$ref":"'+t+'"}';return(u=r.encoding||"utf8",d=t,new Promise(function(t,i){n.readFile(c,u,function(n,o){n?r.ignoreIOErrors&&e?(r.verbose&&console.warn("FAILED",d),r.externalRefs[d].failed=!0,t(e)):i(n):t(o)})})).then(function(e){try{let n=a.parse(e,{schema:"core",prettyErrors:!0});if(e=r.externalRef=n,r.cache[c]=p(e),x&&!1===(e=l(e,x))&&(e={},r.fatal)){let e=Error("File $ref resolution failed "+c+x);if(!r.promise)throw e;r.promise.reject(e)}e=f(e=m(e,n,t,x,c,r),r)}catch(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)}return s(e,c,r),e}).catch(function(e){if(r.verbose&&console.warn(e),!r.promise||!r.fatal)throw e;r.promise.reject(e)})}}(t.openapi,s,t,function(t,n,i){if(!r[s].resolved){let e={};e.context=r[s],e.$ref=s,e.original=p(t),e.updated=t,e.source=n,i.externals.push(e),r[s].resolved=!0}let o=Object.assign({},i,{source:"",resolver:{actions:i.resolver.actions,depth:i.resolver.actions.length-1,base:i.resolver.base}});i.patch&&r[s].description&&!t.description&&"object"==typeof t&&(t.description=r[s].description),r[s].data=t;let a=[...new Set(r[s].paths)];for(let e of a=a.sort(function(e,t){let r=e.startsWith("#/components/")||e.startsWith("#/definitions/"),n=t.startsWith("#/components/")||t.startsWith("#/definitions/");return r&&!n?-1:n&&!r?1:0}))if(r[s].resolvedAt&&e!==r[s].resolvedAt&&0>e.indexOf("x-ms-examples/"))i.verbose>1&&console.warn("Creating pointer to data at",e),l(i.openapi,e,{$ref:r[s].resolvedAt+r[s].extras[e],"x-miro":s+r[s].extras[e]});else{r[s].resolvedAt?i.verbose>1&&console.warn("Avoiding circular reference"):(r[s].resolvedAt=e,i.verbose>1&&console.warn("Creating initial clone of data at",e));let n=p(t);l(i.openapi,e,n)}0===i.resolver.actions[o.resolver.depth].length&&i.resolver.actions[o.resolver.depth].push(function(){return e(o)})})})}}).catch(function(e){t.verbose&&console.warn(e),s(e)});let u={options:t};u.actions=t.resolver.actions[t.resolver.depth],r(u)})})(e).then(function(n){n.actions.reduce((e,t)=>e.then(e=>t().then(Array.prototype.concat.bind(e))),Promise.resolve([])).then(function(){if(e.resolver.depth>=e.resolver.actions.length)return console.warn("Ran off the end of resolver actions"),t(!0);e.resolver.depth++,e.resolver.actions[e.resolver.depth].length?setTimeout(function(){g(n.options,t,r)},0):(e.verbose>1&&console.warn(h.colour.yellow+"Finished external resolution!",h.colour.normal),e.resolveInternal&&(e.verbose>1&&console.warn(h.colour.yellow+"Starting internal resolution!",h.colour.normal),e.openapi=u(e.openapi,e.original,{verbose:e.verbose-1}),e.verbose>1&&console.warn(h.colour.yellow+"Finished internal resolution!",h.colour.normal)),c(e.openapi,{},function(t,r,n){d(t,r)&&(e.preserveMiro||delete t["x-miro"])}),t(e))}).catch(function(t){e.verbose&&console.warn(t),r(t)})}).catch(function(t){e.verbose&&console.warn(t),r(t)})}function y(e){if(e.cache||(e.cache={}),e.fetch||(e.fetch=s),e.source){let t=o.parse(e.source);(!t.protocol||t.protocol.length<=2)&&(e.source=i.resolve(e.source))}e.externals=[],e.externalRefs={},e.rewriteRefs=!0,e.resolver={},e.resolver.depth=0,e.resolver.base=e.source,e.resolver.actions=[[]]}e.exports={optionalResolve:function(e){return y(e),new Promise(function(t,r){e.resolve?g(e,t,r):t(e)})},resolve:function(e,t,r){return r||(r={}),r.openapi=e,r.source=t,r.resolve=!0,y(r),new Promise(function(e,t){g(r,e,t)})}}},804:function(e){"use strict";function t(){return{depth:0,seen:new WeakMap,top:!0,combine:!1,allowRefSiblings:!1}}e.exports={getDefaultState:t,walkSchema:function e(r,n,i,o){if(void 0===i.depth&&(i=t()),null==r)return r;if(void 0!==r.$ref){let e={$ref:r.$ref};return i.allowRefSiblings&&r.description&&(e.description=r.description),o(e,n,i),e}if(i.combine&&(r.allOf&&Array.isArray(r.allOf)&&1===r.allOf.length&&delete(r=Object.assign({},r.allOf[0],r)).allOf,r.anyOf&&Array.isArray(r.anyOf)&&1===r.anyOf.length&&delete(r=Object.assign({},r.anyOf[0],r)).anyOf,r.oneOf&&Array.isArray(r.oneOf)&&1===r.oneOf.length&&delete(r=Object.assign({},r.oneOf[0],r)).oneOf),o(r,n,i),i.seen.has(r))return r;if("object"==typeof r&&null!==r&&i.seen.set(r,!0),i.top=!1,i.depth++,void 0!==r.items&&(i.property="items",e(r.items,r,i,o)),r.additionalItems&&"object"==typeof r.additionalItems&&(i.property="additionalItems",e(r.additionalItems,r,i,o)),r.additionalProperties&&"object"==typeof r.additionalProperties&&(i.property="additionalProperties",e(r.additionalProperties,r,i,o)),r.properties)for(let t in r.properties){let n=r.properties[t];i.property="properties/"+t,e(n,r,i,o)}if(r.patternProperties)for(let t in r.patternProperties){let n=r.patternProperties[t];i.property="patternProperties/"+t,e(n,r,i,o)}if(r.allOf)for(let t in r.allOf){let n=r.allOf[t];i.property="allOf/"+t,e(n,r,i,o)}if(r.anyOf)for(let t in r.anyOf){let n=r.anyOf[t];i.property="anyOf/"+t,e(n,r,i,o)}if(r.oneOf)for(let t in r.oneOf){let n=r.oneOf[t];i.property="oneOf/"+t,e(n,r,i,o)}return r.not&&(i.property="not",e(r.not,r,i,o)),i.depth--,r}}},470:function(e){"use strict";function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,o=-1,s=0,a=0;a<=e.length;++a){if(a<e.length)r=e.charCodeAt(a);else{if(47===r)break;r=47}if(47===r){if(o===a-1||1===s);else if(o!==a-1&&2===s){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var l=n.lastIndexOf("/");if(l!==n.length-1){-1===l?(n="",i=0):i=(n=n.slice(0,l)).length-1-n.lastIndexOf("/"),o=a,s=0;continue}}else if(2===n.length||1===n.length){n="",i=0,o=a,s=0;continue}}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(o+1,a):n=e.slice(o+1,a),i=a-o-1;o=a,s=0}else 46===r&&-1!==s?++s:s=-1}return n}var n={resolve:function(){for(var e,n,o="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?e=arguments[a]:(void 0===n&&(n=i.cwd()),e=n),t(e),0!==e.length&&(o=e+"/"+o,s=47===e.charCodeAt(0));return o=r(o,!s),s?o.length>0?"/"+o:"/":o.length>0?o:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return 0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var o=e.length,s=o-i,a=1;a<r.length&&47===r.charCodeAt(a);++a);for(var l=r.length-a,c=s<l?s:l,p=-1,u=0;u<=c;++u){if(u===c){if(l>c){if(47===r.charCodeAt(a+u))return r.slice(a+u+1);if(0===u)return r.slice(a+u)}else s>c&&(47===e.charCodeAt(i+u)?p=u:0===u&&(p=0));break}var d=e.charCodeAt(i+u);if(d!==r.charCodeAt(a+u))break;47===d&&(p=u)}var h="";for(u=i+p+1;u<=o;++u)u!==o&&47!==e.charCodeAt(u)||(0===h.length?h+="..":h+="/..");return h.length>0?h+r.slice(a+p):(a+=p,47===r.charCodeAt(a)&&++a,r.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,o=!0,s=e.length-1;s>=1;--s)if(47===(r=e.charCodeAt(s))){if(!o){i=s;break}}else o=!1;return -1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,i=0,o=-1,s=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var a=r.length-1,l=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!s){i=n+1;break}}else -1===l&&(s=!1,l=n+1),a>=0&&(c===r.charCodeAt(a)?-1==--a&&(o=n):(a=-1,o=l))}return i===o?o=l:-1===o&&(o=e.length),e.slice(i,o)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!s){i=n+1;break}}else -1===o&&(s=!1,o=n+1);return -1===o?"":e.slice(i,o)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,o=!0,s=0,a=e.length-1;a>=0;--a){var l=e.charCodeAt(a);if(47!==l)-1===i&&(o=!1,i=a+1),46===l?-1===r?r=a:1!==s&&(s=1):-1!==r&&(s=-1);else if(!o){n=a+1;break}}return -1===r||-1===i||0===s||1===s&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return r;var n,i=e.charCodeAt(0),o=47===i;o?(r.root="/",n=1):n=0;for(var s=-1,a=0,l=-1,c=!0,p=e.length-1,u=0;p>=n;--p)if(47!==(i=e.charCodeAt(p)))-1===l&&(c=!1,l=p+1),46===i?-1===s?s=p:1!==u&&(u=1):-1!==s&&(u=-1);else if(!c){a=p+1;break}return -1===s||-1===l||0===u||1===u&&s===l-1&&s===a+1?-1!==l&&(r.base=r.name=0===a&&o?e.slice(1,l):e.slice(a,l)):(0===a&&o?(r.name=e.slice(1,s),r.base=e.slice(1,l)):(r.name=e.slice(a,s),r.base=e.slice(a,l)),r.ext=e.slice(s,l)),a>0?r.dir=e.slice(0,a-1):o&&(r.dir="/"),r},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n},683:function(e){"use strict";e.exports={nop:function(e){return e},clone:function(e){return JSON.parse(JSON.stringify(e))},shallowClone:function(e){let t={};for(let r in e)e.hasOwnProperty(r)&&(t[r]=e[r]);return t},deepClone:function e(t){let r=Array.isArray(t)?[]:{};for(let n in t)(t.hasOwnProperty(n)||Array.isArray(t))&&(r[n]="object"==typeof t[n]?e(t[n]):t[n]);return r},fastClone:function(e){return Object.assign({},e)},circularClone:function e(t,r){if(r||(r=new WeakMap),Object(t)!==t||t instanceof Function)return t;if(r.has(t))return r.get(t);try{var n=new t.constructor}catch(e){n=Object.create(Object.getPrototypeOf(t))}return r.set(t,n),Object.assign(n,...Object.keys(t).map(n=>({[n]:e(t[n],r)})))}}},593:function(e,t,r){"use strict";let n=r(401).recurse,i=r(683).shallowClone,o=r(53).jptr,s=r(592).isRef;e.exports={dereference:function e(t,r,a){var l;a||(a={}),a.cache||(a.cache={}),a.state||(a.state={}),a.state.identityDetection=!0,a.depth=a.depth?a.depth+1:1;let c=a.depth>1?t:i(t),p={data:c},u=a.depth>1?r:i(r);a.master||(a.master=c);let d=(l=a)&&l.verbose?{warn:function(){var e=Array.prototype.slice.call(arguments);console.warn.apply(console,e)}}:{warn:function(){}},h=1;for(;h>0;)h=0,n(p,a.state,function(t,r,n){if(s(t,r)){let i=t[r];if(h++,a.cache[i]){let e=a.cache[i];if(e.resolved)d.warn("Patching %s for %s",i,e.path),n.parent[n.pkey]=e.data,a.$ref&&"object"==typeof n.parent[n.pkey]&&null!==n.parent[n.pkey]&&(n.parent[n.pkey][a.$ref]=i);else{if(i===e.path)throw Error(`Tight circle at ${e.path}`);d.warn("Unresolved ref"),n.parent[n.pkey]=o(e.source,e.path),!1===n.parent[n.pkey]&&(n.parent[n.pkey]=o(e.source,e.key)),a.$ref&&"object"==typeof n.parent[n.pkey]&&null!==n.parent[n.pkey]&&(n.parent[a.$ref]=i)}}else{let t={};t.path=n.path.split("/$ref")[0],t.key=i,d.warn("Dereffing %s at %s",i,t.path),t.source=u,t.data=o(t.source,t.key),!1===t.data&&(t.data=o(a.master,t.key),t.source=a.master),!1===t.data&&d.warn("Missing $ref target",t.key),a.cache[i]=t,t.data=n.parent[n.pkey]=e(o(t.source,t.key),t.source,a),a.$ref&&"object"==typeof n.parent[n.pkey]&&null!==n.parent[n.pkey]&&(n.parent[n.pkey][a.$ref]=i),t.resolved=!0}}});return p.data}}},592:function(e){"use strict";e.exports={isRef:function(e,t){return"$ref"===t&&!!e&&"string"==typeof e[t]}}},53:function(e){"use strict";function t(e){return e.replace(/\~1/g,"/").replace(/~0/g,"~")}e.exports={jptr:function(e,r,n){if(void 0===e)return!1;if(!r||"string"!=typeof r||"#"===r)return void 0!==n?n:e;if(r.indexOf("#")>=0){let e=r.split("#");if(e[0])return!1;r=decodeURIComponent((r=e[1]).slice(1).split("+").join(" "))}r.startsWith("/")&&(r=r.slice(1));let i=r.split("/");for(let r=0;r<i.length;r++){i[r]=t(i[r]);let o=void 0!==n&&r==i.length-1,s=parseInt(i[r],10);if(!Array.isArray(e)||isNaN(s)||s.toString()!==i[r]?s=Array.isArray(e)&&"-"===i[r]?-2:-1:i[r]=r>0?i[r-1]:"",-1!=s||e&&e.hasOwnProperty(i[r])){if(s>=0)o&&(e[s]=n),e=e[s];else{if(-2===s)return o?(Array.isArray(e)&&e.push(n),n):void 0;o&&(e[i[r]]=n),e=e[i[r]]}}else{if(void 0===n||"object"!=typeof e||Array.isArray(e))return!1;e[i[r]]=o?n:"0"===i[r+1]||"-"===i[r+1]?[]:{},e=e[i[r]]}}return e},jpescape:function(e){return e.replace(/\~/g,"~0").replace(/\//g,"~1")},jpunescape:t}},401:function(e,t,r){"use strict";let n=r(53).jpescape;e.exports={recurse:function e(t,r,i){if(r||(r={depth:0}),r.depth||(r=Object.assign({},{path:"#",depth:0,pkey:"",parent:{},payload:{},seen:new WeakMap,identity:!1,identityDetection:!1},r)),"object"!=typeof t)return;let o=r.path;for(let s in t){if(r.key=s,r.path=r.path+"/"+encodeURIComponent(n(s)),r.identityPath=r.seen.get(t[s]),r.identity=void 0!==r.identityPath,t.hasOwnProperty(s)&&i(t,s,r),"object"==typeof t[s]&&!r.identity){r.identityDetection&&!Array.isArray(t[s])&&null!==t[s]&&r.seen.set(t[s],r.path);let n={};n.parent=t,n.path=r.path,n.depth=r.depth?r.depth+1:1,n.pkey=s,n.payload=r.payload,n.seen=r.seen,n.identity=!1,n.identityDetection=r.identityDetection,e(t[s],n,i)}r.path=o}}}},232:function(e,t,r){"use strict";r.r(t);var n=r(379),i=r.n(n),o=r(795),s=r.n(o),a=r(569),l=r.n(a),c=r(565),p=r.n(c),u=r(216),d=r.n(u),h=r(589),m=r.n(h),f=r(260),g={};g.styleTagTransform=m(),g.setAttributes=p(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=d(),i()(f.Z,g),t.default=f.Z&&f.Z.locals?f.Z.locals:void 0},379:function(e){"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var i={},o=[],s=0;s<e.length;s++){var a=e[s],l=n.base?a[0]+n.base:a[0],c=i[l]||0,p="".concat(l," ").concat(c);i[l]=c+1;var u=r(p),d={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==u)t[u].references++,t[u].updater(d);else{var h=function(e,t){var r=t.domAPI(t);return r.update(e),function(t){t?(t.css!==e.css||t.media!==e.media||t.sourceMap!==e.sourceMap||t.supports!==e.supports||t.layer!==e.layer)&&r.update(e=t):r.remove()}}(d,n);n.byIndex=s,t.splice(s,0,{identifier:p,updater:h,references:1})}o.push(p)}return o}e.exports=function(e,i){var o=n(e=e||[],i=i||{});return function(e){e=e||[];for(var s=0;s<o.length;s++){var a=r(o[s]);t[a].references--}for(var l=n(e,i),c=0;c<o.length;c++){var p=r(o[c]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}o=l}}},569:function(e){"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:function(e){"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,r){"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:function(e){"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){var n,i,o;n="",r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {")),(i=void 0!==r.layer)&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,i&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}"),(o=r.sourceMap)&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)},remove:function(){null!==t.parentNode&&t.parentNode.removeChild(t)}}}},589:function(e){"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},925:function(e,t,r){"use strict";let n;let i=r(825),o=r(416),s=(r(470),r(766)),a=r(416),l=r(66),c=r(53),p=c.jptr,u=r(592).isRef,d=r(683).clone,h=r(683).circularClone,m=r(401).recurse,f=r(856),g=r(804),y=r(342),b=r(711).statusCodes,x=r(109).i8,v="3.0.0";class w extends Error{constructor(e){super(e),this.name="S2OError"}}function k(e,t){let r=new w(e);if(r.options=t,!t.promise)throw r;t.promise.reject(r)}function E(e,t,r){r.warnOnly?t[r.warnProperty||"x-s2o-warning"]=e:k(e,r)}function O(e,t){g.walkSchema(e,{},{},function(e,r,n){(function(e,t){if(e["x-required"]&&Array.isArray(e["x-required"])&&(e.required||(e.required=[]),e.required=e.required.concat(e["x-required"]),delete e["x-required"]),e["x-anyOf"]&&(e.anyOf=e["x-anyOf"],delete e["x-anyOf"]),e["x-oneOf"]&&(e.oneOf=e["x-oneOf"],delete e["x-oneOf"]),e["x-not"]&&(e.not=e["x-not"],delete e["x-not"]),"boolean"==typeof e["x-nullable"]&&(e.nullable=e["x-nullable"],delete e["x-nullable"]),"object"==typeof e["x-discriminator"]&&"string"==typeof e["x-discriminator"].propertyName)for(let t in e.discriminator=e["x-discriminator"],delete e["x-discriminator"],e.discriminator.mapping){let r=e.discriminator.mapping[t];r.startsWith("#/definitions/")&&(e.discriminator.mapping[t]=r.replace("#/definitions/","#/components/schemas/"))}})(e),function(e,t,r){if(e.nullable&&r.patches++,e.discriminator&&"string"==typeof e.discriminator&&(e.discriminator={propertyName:e.discriminator}),e.items&&Array.isArray(e.items)&&(0===e.items.length?e.items={}:1===e.items.length?e.items=e.items[0]:e.items={anyOf:e.items}),e.type&&Array.isArray(e.type)){if(r.patch){if(r.patches++,0===e.type.length)delete e.type;else{for(let t of(e.oneOf||(e.oneOf=[]),e.type)){let r={};if("null"===t)e.nullable=!0;else for(let n of(r.type=t,y.arrayProperties))void 0!==e.prop&&(r[n]=e[n],delete e[n]);r.type&&e.oneOf.push(r)}delete e.type,0===e.oneOf.length?delete e.oneOf:e.oneOf.length<2&&(e.type=e.oneOf[0].type,Object.keys(e.oneOf[0]).length>1&&E("Lost properties from oneOf",e,r),delete e.oneOf)}e.type&&Array.isArray(e.type)&&1===e.type.length&&(e.type=e.type[0])}else k("(Patchable) schema type must not be an array",r)}e.type&&"null"===e.type&&(delete e.type,e.nullable=!0),"array"!==e.type||e.items||(e.items={}),"file"===e.type&&(e.type="string",e.format="binary"),"boolean"==typeof e.required&&(e.required&&e.name&&(void 0===t.required&&(t.required=[]),Array.isArray(t.required)&&t.required.push(e.name)),delete e.required),e.xml&&"string"==typeof e.xml.namespace&&(e.xml.namespace||delete e.xml.namespace),void 0!==e.allowEmptyValue&&(r.patches++,delete e.allowEmptyValue)}(e,r,t)})}function j(e,t,r){var i;let o=r.payload.options;if(u(e,t)){if(e[t].startsWith("#/components/"));else if("#/consumes"===e[t])delete e[t],r.parent[r.pkey]=d(o.openapi.consumes);else if("#/produces"===e[t])delete e[t],r.parent[r.pkey]=d(o.openapi.produces);else if(e[t].startsWith("#/definitions/")){let r=e[t].replace("#/definitions/","").split("/"),i=c.jpunescape(r[0]),s=n.schemas[decodeURIComponent(i)];s?r[0]=s:E("Could not resolve reference "+e[t],e,o),e[t]="#/components/schemas/"+r.join("/")}else if(e[t].startsWith("#/parameters/"))e[t]="#/components/parameters/"+y.sanitise(e[t].replace("#/parameters/",""));else if(e[t].startsWith("#/responses/"))e[t]="#/components/responses/"+y.sanitise(e[t].replace("#/responses/",""));else if(e[t].startsWith("#")){let r=d(c.jptr(o.openapi,e[t]));if(!1===r)E("direct $ref not found "+e[t],e,o);else if(o.refmap[e[t]])e[t]=o.refmap[e[t]];else{let n=e[t];n=(n=(n=(n=n.replace("/properties/headers/","")).replace("/properties/responses/","")).replace("/properties/parameters/","")).replace("/properties/schemas/","");let s="schemas",a=n.lastIndexOf("/schema");if("schemas"==(s=n.indexOf("/headers/")>a?"headers":n.indexOf("/responses/")>a?"responses":n.indexOf("/example")>a?"examples":n.indexOf("/x-")>a?"extensions":n.indexOf("/parameters/")>a?"parameters":"schemas")&&O(r,o),"responses"!==s&&"extensions"!==s){let n=s.substr(0,s.length-1);"parameter"===n&&r.name&&r.name===y.sanitise(r.name)&&(n=encodeURIComponent(r.name));let a=1;for(e["x-miro"]&&(i=(i=e["x-miro"]).indexOf("#")>=0?i.split("#")[1].split("/").pop():i.split("/").pop().split(".")[0],n=encodeURIComponent(y.sanitise(i)),a="");c.jptr(o.openapi,"#/components/"+s+"/"+n+a);)a=""===a?2:++a;let l="#/components/"+s+"/"+n+a,p="";"examples"===s&&(r={value:r},p="/value"),c.jptr(o.openapi,l,r),o.refmap[e[t]]=l+p,e[t]=l+p}}}if(delete e["x-miro"],Object.keys(e).length>1){let n=e[t],i=r.path.indexOf("/schema")>=0;"preserve"===o.refSiblings||(i&&"allOf"===o.refSiblings?(delete e.$ref,r.parent[r.pkey]={allOf:[{$ref:n},e]}):r.parent[r.pkey]={$ref:n})}}if("x-ms-odata"===t&&"string"==typeof e[t]&&e[t].startsWith("#/")){let r=e[t].replace("#/definitions/","").replace("#/components/schemas/","").split("/"),i=n.schemas[decodeURIComponent(r[0])];i?r[0]=i:E("Could not resolve reference "+e[t],e,o),e[t]="#/components/schemas/"+r.join("/")}}function $(e){for(let t in e)for(let r in e[t]){let n=y.sanitise(r);r!==n&&(e[t][n]=e[t][r],delete e[t][r])}}function S(e){return e&&!e["x-s2o-delete"]}function C(e,t){if(e.$ref)e.$ref=e.$ref.replace("#/responses/","#/components/responses/");else{for(let r of(e.type&&!e.schema&&(e.schema={}),e.type&&(e.schema.type=e.type),e.items&&"array"!==e.items.type&&(e.items.collectionFormat!==e.collectionFormat&&E("Nested collectionFormats are not supported",e,t),delete e.items.collectionFormat),"array"===e.type?("ssv"===e.collectionFormat?E("collectionFormat:ssv is no longer supported for headers",e,t):"pipes"===e.collectionFormat?E("collectionFormat:pipes is no longer supported for headers",e,t):"multi"===e.collectionFormat?e.explode=!0:"tsv"===e.collectionFormat?(E("collectionFormat:tsv is no longer supported",e,t),e["x-collectionFormat"]="tsv"):e.style="simple",delete e.collectionFormat):e.collectionFormat&&(t.patch?(t.patches++,delete e.collectionFormat):k("(Patchable) collectionFormat is only applicable to header.type array",t)),delete e.type,y.parameterTypeProperties))void 0!==e[r]&&(e.schema[r]=e[r],delete e[r]);for(let t of y.arrayProperties)void 0!==e[t]&&(e.schema[t]=e[t],delete e[t])}}function A(e,t){if(e.$ref.indexOf("#/parameters/")>=0){let t=e.$ref.split("#/parameters/");e.$ref=t[0]+"#/components/parameters/"+y.sanitise(t[1])}e.$ref.indexOf("#/definitions/")>=0&&E("Definition used as parameter",e,t)}function P(e,t,r,n,i,o,s){let a,l={},c=!0;if(t&&t.consumes&&"string"==typeof t.consumes){if(!s.patch)return k("(Patchable) operation.consumes must be an array",s);s.patches++,t.consumes=[t.consumes]}Array.isArray(o.consumes)||delete o.consumes;let u=((t?t.consumes:null)||o.consumes||[]).filter(y.uniqueOnly);if(e&&e.$ref&&"string"==typeof e.$ref){A(e,s);let t=decodeURIComponent(e.$ref.replace("#/components/parameters/","")),r=!1,n=o.components.parameters[t];if((!n||n["x-s2o-delete"])&&e.$ref.startsWith("#/")&&(e["x-s2o-delete"]=!0,r=!0),r){let t=e.$ref,r=p(o,e.$ref);!r&&t.startsWith("#/")?E("Could not resolve reference "+t,e,s):r&&(e=r)}}if(e&&(e.name||e.in)){"boolean"==typeof e["x-deprecated"]&&(e.deprecated=e["x-deprecated"],delete e["x-deprecated"]),void 0!==e["x-example"]&&(e.example=e["x-example"],delete e["x-example"]),"body"===e.in||e.type||(s.patch?(s.patches++,e.type="string"):k("(Patchable) parameter.type is mandatory for non-body parameters",s)),e.type&&"object"==typeof e.type&&e.type.$ref&&(e.type=p(o,e.type.$ref)),"file"===e.type&&(e["x-s2o-originalType"]=e.type,a=e.type),e.description&&"object"==typeof e.description&&e.description.$ref&&(e.description=p(o,e.description.$ref)),null===e.description&&delete e.description;let t=e.collectionFormat;if("array"!==e.type||t||(t="csv"),t&&("array"!==e.type&&(s.patch?(s.patches++,delete e.collectionFormat):k("(Patchable) collectionFormat is only applicable to param.type array",s)),"csv"!==t||"query"!==e.in&&"cookie"!==e.in||(e.style="form",e.explode=!1),"csv"!==t||"path"!==e.in&&"header"!==e.in||(e.style="simple"),"ssv"===t&&("query"===e.in?e.style="spaceDelimited":E("collectionFormat:ssv is no longer supported except for in:query parameters",e,s)),"pipes"===t&&("query"===e.in?e.style="pipeDelimited":E("collectionFormat:pipes is no longer supported except for in:query parameters",e,s)),"multi"===t&&(e.explode=!0),"tsv"===t&&(E("collectionFormat:tsv is no longer supported",e,s),e["x-collectionFormat"]="tsv"),delete e.collectionFormat),e.type&&"body"!==e.type&&"formData"!==e.in){if(e.items&&e.schema)E("parameter has array,items and schema",e,s);else for(let r of(e.schema&&s.patches++,e.schema&&"object"==typeof e.schema||(e.schema={}),e.schema.type=e.type,e.items&&(e.schema.items=e.items,delete e.items,m(e.schema.items,null,function(r,n,i){"collectionFormat"===n&&"string"==typeof r[n]&&(t&&r[n]!==t&&E("Nested collectionFormats are not supported",e,s),delete r[n])})),y.parameterTypeProperties))void 0!==e[r]&&(e.schema[r]=e[r]),delete e[r]}e.schema&&O(e.schema,s),e["x-ms-skip-url-encoding"]&&"query"===e.in&&(e.allowReserved=!0,delete e["x-ms-skip-url-encoding"])}if(e&&"formData"===e.in){c=!1,l.content={};let t="application/x-www-form-urlencoded";if(u.length&&u.indexOf("multipart/form-data")>=0&&(t="multipart/form-data"),l.content[t]={},e.schema)l.content[t].schema=e.schema,e.schema.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")));else{l.content[t].schema={},l.content[t].schema.type="object",l.content[t].schema.properties={},l.content[t].schema.properties[e.name]={};let r=l.content[t].schema,n=l.content[t].schema.properties[e.name];for(let t of(e.description&&(n.description=e.description),e.example&&(n.example=e.example),e.type&&(n.type=e.type),y.parameterTypeProperties))void 0!==e[t]&&(n[t]=e[t]);!0===e.required&&(r.required||(r.required=[]),r.required.push(e.name),l.required=!0),void 0!==e.default&&(n.default=e.default),n.properties&&(n.properties=e.properties),e.allOf&&(n.allOf=e.allOf),"array"===e.type&&e.items&&(n.items=e.items,n.items.collectionFormat&&delete n.items.collectionFormat),"file"!==a&&"file"!==e["x-s2o-originalType"]||(n.type="string",n.format="binary"),I(e,n)}}else e&&"file"===e.type&&(e.required&&(l.required=e.required),l.content={},l.content["application/octet-stream"]={},l.content["application/octet-stream"].schema={},l.content["application/octet-stream"].schema.type="string",l.content["application/octet-stream"].schema.format="binary",I(e,l));if(e&&"body"===e.in){for(let r of(l.content={},e.name&&(l["x-s2o-name"]=(t&&t.operationId?y.sanitiseAll(t.operationId):"")+("_"+e.name).toCamelCase()),e.description&&(l.description=e.description),e.required&&(l.required=e.required),t&&s.rbname&&e.name&&(t[s.rbname]=e.name),e.schema&&e.schema.$ref?l["x-s2o-name"]=decodeURIComponent(e.schema.$ref.replace("#/components/schemas/","")):e.schema&&"array"===e.schema.type&&e.schema.items&&e.schema.items.$ref&&(l["x-s2o-name"]=decodeURIComponent(e.schema.items.$ref.replace("#/components/schemas/",""))+"Array"),u.length||u.push("application/json"),u))l.content[r]={},l.content[r].schema=d(e.schema||{}),O(l.content[r].schema,s);I(e,l)}if(Object.keys(l).length>0&&(e["x-s2o-delete"]=!0,t)&&(t.requestBody&&c?(t.requestBody["x-s2o-overloaded"]=!0,E("Operation "+(t.operationId||i)+" has multiple requestBodies",t,s)):(t.requestBody||(t=r[n]=function(e,t){let r={};for(let n of Object.keys(e))r[n]=e[n],"parameters"===n&&(r.requestBody={},t.rbname&&(r[t.rbname]=""));return r.requestBody={},r}(t,s)),t.requestBody.content&&t.requestBody.content["multipart/form-data"]&&t.requestBody.content["multipart/form-data"].schema&&t.requestBody.content["multipart/form-data"].schema.properties&&l.content["multipart/form-data"]&&l.content["multipart/form-data"].schema&&l.content["multipart/form-data"].schema.properties?(t.requestBody.content["multipart/form-data"].schema.properties=Object.assign(t.requestBody.content["multipart/form-data"].schema.properties,l.content["multipart/form-data"].schema.properties),t.requestBody.content["multipart/form-data"].schema.required=(t.requestBody.content["multipart/form-data"].schema.required||[]).concat(l.content["multipart/form-data"].schema.required||[]),t.requestBody.content["multipart/form-data"].schema.required.length||delete t.requestBody.content["multipart/form-data"].schema.required):t.requestBody.content&&t.requestBody.content["application/x-www-form-urlencoded"]&&t.requestBody.content["application/x-www-form-urlencoded"].schema&&t.requestBody.content["application/x-www-form-urlencoded"].schema.properties&&l.content["application/x-www-form-urlencoded"]&&l.content["application/x-www-form-urlencoded"].schema&&l.content["application/x-www-form-urlencoded"].schema.properties?(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties=Object.assign(t.requestBody.content["application/x-www-form-urlencoded"].schema.properties,l.content["application/x-www-form-urlencoded"].schema.properties),t.requestBody.content["application/x-www-form-urlencoded"].schema.required=(t.requestBody.content["application/x-www-form-urlencoded"].schema.required||[]).concat(l.content["application/x-www-form-urlencoded"].schema.required||[]),t.requestBody.content["application/x-www-form-urlencoded"].schema.required.length||delete t.requestBody.content["application/x-www-form-urlencoded"].schema.required):(t.requestBody=Object.assign(t.requestBody,l),t.requestBody["x-s2o-name"]||(t.requestBody.schema&&t.requestBody.schema.$ref?t.requestBody["x-s2o-name"]=decodeURIComponent(t.requestBody.schema.$ref.replace("#/components/schemas/","")).split("/").join(""):t.operationId&&(t.requestBody["x-s2o-name"]=y.sanitiseAll(t.operationId)))))),e&&!e["x-s2o-delete"]){for(let t of(delete e.type,y.parameterTypeProperties))delete e[t];"path"!==e.in||void 0!==e.required&&!0===e.required||(s.patch?(s.patches++,e.required=!0):k("(Patchable) path parameters must be required:true ["+e.name+" in "+i+"]",s))}return t}function I(e,t){for(let r in e)r.startsWith("x-")&&!r.startsWith("x-s2o")&&(t[r]=e[r])}function T(e,t,r,n,i){if(!e)return!1;if(e.$ref&&"string"==typeof e.$ref)e.$ref.indexOf("#/definitions/")>=0?E("definition used as response: "+e.$ref,e,i):e.$ref.startsWith("#/responses/")&&(e.$ref="#/components/responses/"+y.sanitise(decodeURIComponent(e.$ref.replace("#/responses/",""))));else{if((void 0===e.description||null===e.description||""===e.description&&i.patch)&&(i.patch?"object"!=typeof e||Array.isArray(e)||(i.patches++,e.description=b[e]||""):k("(Patchable) response.description is mandatory",i)),void 0!==e.schema){if(O(e.schema,i),e.schema.$ref&&"string"==typeof e.schema.$ref&&e.schema.$ref.startsWith("#/responses/")&&(e.schema.$ref="#/components/responses/"+y.sanitise(decodeURIComponent(e.schema.$ref.replace("#/responses/","")))),r&&r.produces&&"string"==typeof r.produces){if(!i.patch)return k("(Patchable) operation.produces must be an array",i);i.patches++,r.produces=[r.produces]}n.produces&&!Array.isArray(n.produces)&&delete n.produces;let t=((r?r.produces:null)||n.produces||[]).filter(y.uniqueOnly);for(let r of(t.length||t.push("*/*"),e.content={},t)){if(e.content[r]={},e.content[r].schema=d(e.schema),e.examples&&e.examples[r]){let t={};t.value=e.examples[r],e.content[r].examples={},e.content[r].examples.response=t,delete e.examples[r]}"file"===e.content[r].schema.type&&(e.content[r].schema={type:"string",format:"binary"})}delete e.schema}for(let t in e.examples)e.content||(e.content={}),e.content[t]||(e.content[t]={}),e.content[t].examples={},e.content[t].examples.response={},e.content[t].examples.response.value=e.examples[t];if(delete e.examples,e.headers)for(let t in e.headers)"status code"===t.toLowerCase()?i.patch?(i.patches++,delete e.headers[t]):k('(Patchable) "Status Code" is not a valid header',i):C(e.headers[t],i)}}function _(e,t,r,n,i){for(let s in e){let a=e[s];for(let e in a&&a["x-trace"]&&"object"==typeof a["x-trace"]&&(a.trace=a["x-trace"],delete a["x-trace"]),a&&a["x-summary"]&&"string"==typeof a["x-summary"]&&(a.summary=a["x-summary"],delete a["x-summary"]),a&&a["x-description"]&&"string"==typeof a["x-description"]&&(a.description=a["x-description"],delete a["x-description"]),a&&a["x-servers"]&&Array.isArray(a["x-servers"])&&(a.servers=a["x-servers"],delete a["x-servers"]),a)if(y.httpMethods.indexOf(e)>=0||"x-amazon-apigateway-any-method"===e){let l=a[e];if(l&&l.parameters&&Array.isArray(l.parameters)){if(a.parameters)for(let t of a.parameters)"string"==typeof t.$ref&&(A(t,r),t=p(i,t.$ref)),l.parameters.find(function(e,r,n){return e.name===t.name&&e.in===t.in})||"formData"!==t.in&&"body"!==t.in&&"file"!==t.type||(l=P(t,l,a,e,s,i,r),r.rbname&&""===l[r.rbname]&&delete l[r.rbname]);for(let t of l.parameters)l=P(t,l,a,e,e+":"+s,i,r);r.rbname&&""===l[r.rbname]&&delete l[r.rbname],r.debug||l.parameters&&(l.parameters=l.parameters.filter(S))}if(l&&l.security&&$(l.security),"object"==typeof l){if(!l.responses){let e={description:"Default response"};l.responses={default:e}}for(let e in l.responses)T(l.responses[e],0,l,i,r)}if(l&&l["x-servers"]&&Array.isArray(l["x-servers"]))l.servers=l["x-servers"],delete l["x-servers"];else if(l&&l.schemes&&l.schemes.length){for(let e of l.schemes)if((!i.schemes||0>i.schemes.indexOf(e))&&(l.servers||(l.servers=[]),Array.isArray(i.servers)))for(let t of i.servers){let r=d(t),n=o.parse(r.url);n.protocol=e,r.url=n.format(),l.servers.push(r)}}if(r.debug&&(l["x-s2o-consumes"]=l.consumes||[],l["x-s2o-produces"]=l.produces||[]),l){if(delete l.consumes,delete l.produces,delete l.schemes,l["x-ms-examples"]){for(let e in l["x-ms-examples"]){let t=l["x-ms-examples"][e],r=y.sanitiseAll(e);if(t.parameters)for(let r in t.parameters){let n=t.parameters[r];for(let t of(l.parameters||[]).concat(a.parameters||[]))t.$ref&&(t=c.jptr(i,t.$ref)),t.name!==r||t.example||(t.examples||(t.examples={}),t.examples[e]={value:n})}if(t.responses)for(let n in t.responses){if(t.responses[n].headers)for(let e in t.responses[n].headers){let r=t.responses[n].headers[e];for(let t in l.responses[n].headers)t===e&&(l.responses[n].headers[t].example=r)}if(t.responses[n].body&&(i.components.examples[r]={value:d(t.responses[n].body)},l.responses[n]&&l.responses[n].content))for(let t in l.responses[n].content){let i=l.responses[n].content[t];i.examples||(i.examples={}),i.examples[e]={$ref:"#/components/examples/"+r}}}}delete l["x-ms-examples"]}if(l.parameters&&0===l.parameters.length&&delete l.parameters,l.requestBody){let r=l.operationId?y.sanitiseAll(l.operationId):y.sanitiseAll(e+s).toCamelCase(),i=y.sanitise(l.requestBody["x-s2o-name"]||r||"");delete l.requestBody["x-s2o-name"];let o=JSON.stringify(l.requestBody),a=y.hash(o);if(!n[a]){let e={};e.name=i,e.body=l.requestBody,e.refs=[],n[a]=e}let p="#/"+t+"/"+encodeURIComponent(c.jpescape(s))+"/"+e+"/requestBody";n[a].refs.push(p)}}}if(a&&a.parameters){for(let e in a.parameters)P(a.parameters[e],null,a,null,s,i,r);!r.debug&&Array.isArray(a.parameters)&&(a.parameters=a.parameters.filter(S))}}}function R(e){return e&&e.url&&"string"==typeof e.url&&(e.url=e.url.split("{{").join("{"),e.url=e.url.split("}}").join("}"),e.url.replace(/\{(.+?)\}/g,function(t,r){e.variables||(e.variables={}),e.variables[r]={default:"unknown"}})),e}function L(e,t,r){if(void 0===e.info||null===e.info){if(!t.patch)return r(new w("(Patchable) info object is mandatory"));t.patches++,e.info={version:"",title:""}}if("object"!=typeof e.info||Array.isArray(e.info))return r(new w("info must be an object"));if(void 0===e.info.title||null===e.info.title){if(!t.patch)return r(new w("(Patchable) info.title cannot be null"));t.patches++,e.info.title=""}if(void 0===e.info.version||null===e.info.version){if(!t.patch)return r(new w("(Patchable) info.version cannot be null"));t.patches++,e.info.version=""}if("string"!=typeof e.info.version){if(!t.patch)return r(new w("(Patchable) info.version must be a string"));t.patches++,e.info.version=e.info.version.toString()}if(void 0!==e.info.logo){if(!t.patch)return r(new w("(Patchable) info should not have logo property"));t.patches++,e.info["x-logo"]=e.info.logo,delete e.info.logo}if(void 0!==e.info.termsOfService){if(null===e.info.termsOfService){if(!t.patch)return r(new w("(Patchable) info.termsOfService cannot be null"));t.patches++,e.info.termsOfService=""}try{new URL(e.info.termsOfService)}catch(n){if(!t.patch)return r(new w("(Patchable) info.termsOfService must be a URL"));t.patches++,delete e.info.termsOfService}}}function z(e,t,r){if(void 0===e.paths){if(!t.patch)return r(new w("(Patchable) paths object is mandatory"));t.patches++,e.paths={}}}function D(e,t,r){return s(r,new Promise(function(r,i){if(e||(e={}),t.original=e,t.text||(t.text=l.stringify(e)),t.externals=[],t.externalRefs={},t.rewriteRefs=!0,t.preserveMiro=!0,t.promise={},t.promise.resolve=r,t.promise.reject=i,t.patches=0,t.cache||(t.cache={}),t.source&&(t.cache[t.source]=t.original),function(e,t){let r=new WeakSet;m(e,{identityDetection:!0},function(e,n,i){"object"==typeof e[n]&&null!==e[n]&&(r.has(e[n])?t.anchors?e[n]=d(e[n]):k("YAML anchor or merge key at "+i.path,t):r.add(e[n]))})}(e,t),e.openapi&&"string"==typeof e.openapi&&e.openapi.startsWith("3."))return t.openapi=h(e),L(t.openapi,t,i),z(t.openapi,t,i),void f.optionalResolve(t).then(function(){return t.direct?r(t.openapi):r(t)}).catch(function(e){console.warn(e),i(e)});if(!e.swagger||"2.0"!=e.swagger)return i(new w("Unsupported swagger/OpenAPI version: "+(e.openapi?e.openapi:e.swagger)));let o=t.openapi={};if(o.openapi="string"==typeof t.targetVersion&&t.targetVersion.startsWith("3.")?t.targetVersion:v,t.origin){o["x-origin"]||(o["x-origin"]=[]);let r={};r.url=t.source||t.origin,r.format="swagger",r.version=e.swagger,r.converter={},r.converter.url="https://github.com/mermade/oas-kit",r.converter.version=x,o["x-origin"].push(r)}if(o=Object.assign(o,h(e)),delete o.swagger,m(o,{},function(e,t,r){null===e[t]&&!t.startsWith("x-")&&"default"!==t&&0>r.path.indexOf("/example")&&delete e[t]}),e.host)for(let t of Array.isArray(e.schemes)?e.schemes:[""]){let r={},n=(e.basePath||"").replace(/\/$/,"");r.url=(t?t+":":"")+"//"+e.host+n,R(r),o.servers||(o.servers=[]),o.servers.push(r)}else if(e.basePath){let t={};t.url=e.basePath,R(t),o.servers||(o.servers=[]),o.servers.push(t)}if(delete o.host,delete o.basePath,o["x-servers"]&&Array.isArray(o["x-servers"])&&(o.servers=o["x-servers"],delete o["x-servers"]),e["x-ms-parameterized-host"]){let t=e["x-ms-parameterized-host"],r={};r.url=t.hostTemplate+(e.basePath?e.basePath:""),r.variables={};let n=r.url.match(/\{\w+\}/g);for(let e in t.parameters){let i=t.parameters[e];i.$ref&&(i=d(p(o,i.$ref))),e.startsWith("x-")||(delete i.required,delete i.type,delete i.in,void 0===i.default&&(i.enum?i.default=i.enum[0]:i.default="none"),i.name||(i.name=n[e].replace("{","").replace("}","")),r.variables[i.name]=i,delete i.name)}o.servers||(o.servers=[]),!1===t.useSchemePrefix?o.servers.push(r):e.schemes.forEach(e=>{o.servers.push(Object.assign({},r,{url:e+"://"+r.url}))}),delete o["x-ms-parameterized-host"]}L(o,t,i),z(o,t,i),"string"==typeof o.consumes&&(o.consumes=[o.consumes]),"string"==typeof o.produces&&(o.produces=[o.produces]),o.components={},o["x-callbacks"]&&(o.components.callbacks=o["x-callbacks"],delete o["x-callbacks"]),o.components.examples={},o.components.headers={},o["x-links"]&&(o.components.links=o["x-links"],delete o["x-links"]),o.components.parameters=o.parameters||{},o.components.responses=o.responses||{},o.components.requestBodies={},o.components.securitySchemes=o.securityDefinitions||{},o.components.schemas=o.definitions||{},delete o.definitions,delete o.responses,delete o.parameters,delete o.securityDefinitions,f.optionalResolve(t).then(function(){(function(e,t){let r={};for(let r in n={schemas:{}},e.security&&$(e.security),e.components.securitySchemes){let n=y.sanitise(r);r!==n&&(e.components.securitySchemes[n]&&k("Duplicate sanitised securityScheme name "+n,t),e.components.securitySchemes[n]=e.components.securitySchemes[r],delete e.components.securitySchemes[r]),function(e,t){if("basic"===e.type&&(e.type="http",e.scheme="basic"),"oauth2"===e.type){let r={},n=e.flow;"application"===e.flow&&(n="clientCredentials"),"accessCode"===e.flow&&(n="authorizationCode"),void 0!==e.authorizationUrl&&(r.authorizationUrl=e.authorizationUrl.split("?")[0].trim()||"/"),"string"==typeof e.tokenUrl&&(r.tokenUrl=e.tokenUrl.split("?")[0].trim()||"/"),r.scopes=e.scopes||{},e.flows={},e.flows[n]=r,delete e.flow,delete e.authorizationUrl,delete e.tokenUrl,delete e.scopes,void 0!==e.name&&(t.patch?(t.patches++,delete e.name):k("(Patchable) oauth2 securitySchemes should not have name property",t))}}(e.components.securitySchemes[n],t)}for(let r in e.components.schemas){let i=y.sanitiseAll(r),o="";if(r!==i){for(;e.components.schemas[i+o];)o=o?++o:2;e.components.schemas[i+o]=e.components.schemas[r],delete e.components.schemas[r]}n.schemas[r]=i+o,O(e.components.schemas[i+o],t)}for(let r in t.refmap={},m(e,{payload:{options:t}},j),function(e,t){for(let r in t.refmap)c.jptr(e,r,{$ref:t.refmap[r]})}(e,t),e.components.parameters){let n=y.sanitise(r);r!==n&&(e.components.parameters[n]&&k("Duplicate sanitised parameter name "+n,t),e.components.parameters[n]=e.components.parameters[r],delete e.components.parameters[r]),P(e.components.parameters[n],null,null,null,n,e,t)}for(let r in e.components.responses){let n=y.sanitise(r);r!==n&&(e.components.responses[n]&&k("Duplicate sanitised response name "+n,t),e.components.responses[n]=e.components.responses[r],delete e.components.responses[r]);let i=e.components.responses[n];if(T(i,0,null,e,t),i.headers)for(let e in i.headers)"status code"===e.toLowerCase()?t.patch?(t.patches++,delete i.headers[e]):k('(Patchable) "Status Code" is not a valid header',t):C(i.headers[e],t)}for(let t in e.components.requestBodies){let n=e.components.requestBodies[t],i=JSON.stringify(n),o=y.hash(i),s={};s.name=t,s.body=n,s.refs=[],r[o]=s}if(_(e.paths,"paths",t,r,e),e["x-ms-paths"]&&_(e["x-ms-paths"],"x-ms-paths",t,r,e),!t.debug)for(let t in e.components.parameters)e.components.parameters[t]["x-s2o-delete"]&&delete e.components.parameters[t];t.debug&&(e["x-s2o-consumes"]=e.consumes||[],e["x-s2o-produces"]=e.produces||[]),delete e.consumes,delete e.produces,delete e.schemes;let i=[];if(e.components.requestBodies={},!t.resolveInternal){let t=1;for(let n in r){let o=r[n];if(o.refs.length>1){let r="";for(o.name||(o.name="requestBody",r=t++);i.indexOf(o.name+r)>=0;)r=r?++r:2;for(let t in o.name=o.name+r,i.push(o.name),e.components.requestBodies[o.name]=d(o.body),o.refs){let r={};r.$ref="#/components/requestBodies/"+o.name,c.jptr(e,o.refs[t],r)}}}}e.components.responses&&0===Object.keys(e.components.responses).length&&delete e.components.responses,e.components.parameters&&0===Object.keys(e.components.parameters).length&&delete e.components.parameters,e.components.examples&&0===Object.keys(e.components.examples).length&&delete e.components.examples,e.components.requestBodies&&0===Object.keys(e.components.requestBodies).length&&delete e.components.requestBodies,e.components.securitySchemes&&0===Object.keys(e.components.securitySchemes).length&&delete e.components.securitySchemes,e.components.headers&&0===Object.keys(e.components.headers).length&&delete e.components.headers,e.components.schemas&&0===Object.keys(e.components.schemas).length&&delete e.components.schemas,e.components&&0===Object.keys(e.components).length&&delete e.components})(t.openapi,t),t.direct?r(t.openapi):r(t)}).catch(function(e){console.warn(e),i(e)})}))}function N(e,t,r){return s(r,new Promise(function(r,n){let i=null,o=null;try{i=JSON.parse(e),t.text=JSON.stringify(i,null,2)}catch(r){o=r;try{i=l.parse(e,{schema:"core",prettyErrors:!0}),t.sourceYaml=!0,t.text=e}catch(e){o=e}}i?D(i,t).then(e=>r(e)).catch(e=>n(e)):n(new w(o?o.message:"Could not parse string"))}))}e.exports={S2OError:w,targetVersion:v,convert:D,convertObj:D,convertUrl:function(e,t,r){return s(r,new Promise(function(r,n){t.origin=!0,t.source||(t.source=e),t.verbose&&console.warn("GET "+e),t.fetch||(t.fetch=a);let i=Object.assign({},t.fetchOptions,{agent:t.agent});t.fetch(e,i).then(function(t){if(200!==t.status)throw new w(`Received status code ${t.status}: ${e}`);return t.text()}).then(function(e){N(e,t).then(e=>r(e)).catch(e=>n(e))}).catch(function(e){n(e)})}))},convertStr:N,convertFile:function(e,t,r){return s(r,new Promise(function(r,n){i.readFile(e,t.encoding||"utf8",function(i,o){i?n(i):(t.sourceFile=e,N(o,t).then(e=>r(e)).catch(e=>n(e)))})}))},convertStream:function(e,t,r){return s(r,new Promise(function(r,n){let i="";e.on("data",function(e){i+=e}).on("end",function(){N(i,t).then(e=>r(e)).catch(e=>n(e))})}))}}},711:function(e,t,r){"use strict";let n=r(177);e.exports={statusCodes:Object.assign({},{default:"Default response","1XX":"Informational",103:"Early hints","2XX":"Successful","3XX":"Redirection","4XX":"Client Error","5XX":"Server Error","7XX":"Developer Error"},n.STATUS_CODES)}},595:function(e,t,r){var n=r(314),i=["add","done","toJS","fromExternalJS","load","dispose","search","Worker"];e.exports=function(){var e=new Worker(URL.createObjectURL(new Blob(['/*! For license information please see 756674defce81e90acea.worker.js.LICENSE.txt */\n!function(){var e={336:function(e,t,r){var n,i;!function(){var s,o,a,u,l,c,h,d,f,p,y,m,g,x,v,w,Q,k,S,E,L,P,b,T,O,I,R,F,C,N,j=function(e){var t=new j.Builder;return t.pipeline.add(j.trimmer,j.stopWordFilter,j.stemmer),t.searchPipeline.add(j.stemmer),e.call(t,t),t.build()};j.version="2.3.9",j.utils={},j.utils.warn=(s=this,function(e){s.console&&console.warn&&console.warn(e)}),j.utils.asString=function(e){return null==e?"":e.toString()},j.utils.clone=function(e){if(null==e)return e;for(var t=Object.create(null),r=Object.keys(e),n=0;n<r.length;n++){var i=r[n],s=e[i];if(Array.isArray(s))t[i]=s.slice();else{if("string"!=typeof s&&"number"!=typeof s&&"boolean"!=typeof s)throw new TypeError("clone is not deep and does not support nested objects");t[i]=s}}return t},j.FieldRef=function(e,t,r){this.docRef=e,this.fieldName=t,this._stringValue=r},j.FieldRef.joiner="/",j.FieldRef.fromString=function(e){var t=e.indexOf(j.FieldRef.joiner);if(-1===t)throw"malformed field ref string";var r=e.slice(0,t),n=e.slice(t+1);return new j.FieldRef(n,r,e)},j.FieldRef.prototype.toString=function(){return null==this._stringValue&&(this._stringValue=this.fieldName+j.FieldRef.joiner+this.docRef),this._stringValue},j.Set=function(e){if(this.elements=Object.create(null),e){this.length=e.length;for(var t=0;t<this.length;t++)this.elements[e[t]]=!0}else this.length=0},j.Set.complete={intersect:function(e){return e},union:function(){return this},contains:function(){return!0}},j.Set.empty={intersect:function(){return this},union:function(e){return e},contains:function(){return!1}},j.Set.prototype.contains=function(e){return!!this.elements[e]},j.Set.prototype.intersect=function(e){var t,r,n,i=[];if(e===j.Set.complete)return this;if(e===j.Set.empty)return e;this.length<e.length?(t=this,r=e):(t=e,r=this),n=Object.keys(t.elements);for(var s=0;s<n.length;s++){var o=n[s];o in r.elements&&i.push(o)}return new j.Set(i)},j.Set.prototype.union=function(e){return e===j.Set.complete?j.Set.complete:e===j.Set.empty?this:new j.Set(Object.keys(this.elements).concat(Object.keys(e.elements)))},j.idf=function(e,t){var r=0;for(var n in e)"_index"!=n&&(r+=Object.keys(e[n]).length);var i=(t-r+.5)/(r+.5);return Math.log(1+Math.abs(i))},j.Token=function(e,t){this.str=e||"",this.metadata=t||{}},j.Token.prototype.toString=function(){return this.str},j.Token.prototype.update=function(e){return this.str=e(this.str,this.metadata),this},j.Token.prototype.clone=function(e){return e=e||function(e){return e},new j.Token(e(this.str,this.metadata),this.metadata)},j.tokenizer=function(e,t){if(null==e||null==e)return[];if(Array.isArray(e))return e.map((function(e){return new j.Token(j.utils.asString(e).toLowerCase(),j.utils.clone(t))}));for(var r=e.toString().toLowerCase(),n=r.length,i=[],s=0,o=0;s<=n;s++){var a=s-o;if(r.charAt(s).match(j.tokenizer.separator)||s==n){if(a>0){var u=j.utils.clone(t)||{};u.position=[o,a],u.index=i.length,i.push(new j.Token(r.slice(o,s),u))}o=s+1}}return i},j.tokenizer.separator=/[\\s\\-]+/,j.Pipeline=function(){this._stack=[]},j.Pipeline.registeredFunctions=Object.create(null),j.Pipeline.registerFunction=function(e,t){t in this.registeredFunctions&&j.utils.warn("Overwriting existing registered function: "+t),e.label=t,j.Pipeline.registeredFunctions[e.label]=e},j.Pipeline.warnIfFunctionNotRegistered=function(e){e.label&&e.label in this.registeredFunctions||j.utils.warn("Function is not registered with pipeline. This may cause problems when serialising the index.\\n",e)},j.Pipeline.load=function(e){var t=new j.Pipeline;return e.forEach((function(e){var r=j.Pipeline.registeredFunctions[e];if(!r)throw new Error("Cannot load unregistered function: "+e);t.add(r)})),t},j.Pipeline.prototype.add=function(){Array.prototype.slice.call(arguments).forEach((function(e){j.Pipeline.warnIfFunctionNotRegistered(e),this._stack.push(e)}),this)},j.Pipeline.prototype.after=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");r+=1,this._stack.splice(r,0,t)},j.Pipeline.prototype.before=function(e,t){j.Pipeline.warnIfFunctionNotRegistered(t);var r=this._stack.indexOf(e);if(-1==r)throw new Error("Cannot find existingFn");this._stack.splice(r,0,t)},j.Pipeline.prototype.remove=function(e){var t=this._stack.indexOf(e);-1!=t&&this._stack.splice(t,1)},j.Pipeline.prototype.run=function(e){for(var t=this._stack.length,r=0;r<t;r++){for(var n=this._stack[r],i=[],s=0;s<e.length;s++){var o=n(e[s],s,e);if(null!=o&&""!==o)if(Array.isArray(o))for(var a=0;a<o.length;a++)i.push(o[a]);else i.push(o)}e=i}return e},j.Pipeline.prototype.runString=function(e,t){var r=new j.Token(e,t);return this.run([r]).map((function(e){return e.toString()}))},j.Pipeline.prototype.reset=function(){this._stack=[]},j.Pipeline.prototype.toJSON=function(){return this._stack.map((function(e){return j.Pipeline.warnIfFunctionNotRegistered(e),e.label}))},j.Vector=function(e){this._magnitude=0,this.elements=e||[]},j.Vector.prototype.positionForIndex=function(e){if(0==this.elements.length)return 0;for(var t=0,r=this.elements.length/2,n=r-t,i=Math.floor(n/2),s=this.elements[2*i];n>1&&(s<e&&(t=i),s>e&&(r=i),s!=e);)n=r-t,i=t+Math.floor(n/2),s=this.elements[2*i];return s==e||s>e?2*i:s<e?2*(i+1):void 0},j.Vector.prototype.insert=function(e,t){this.upsert(e,t,(function(){throw"duplicate index"}))},j.Vector.prototype.upsert=function(e,t,r){this._magnitude=0;var n=this.positionForIndex(e);this.elements[n]==e?this.elements[n+1]=r(this.elements[n+1],t):this.elements.splice(n,0,e,t)},j.Vector.prototype.magnitude=function(){if(this._magnitude)return this._magnitude;for(var e=0,t=this.elements.length,r=1;r<t;r+=2){var n=this.elements[r];e+=n*n}return this._magnitude=Math.sqrt(e)},j.Vector.prototype.dot=function(e){for(var t=0,r=this.elements,n=e.elements,i=r.length,s=n.length,o=0,a=0,u=0,l=0;u<i&&l<s;)(o=r[u])<(a=n[l])?u+=2:o>a?l+=2:o==a&&(t+=r[u+1]*n[l+1],u+=2,l+=2);return t},j.Vector.prototype.similarity=function(e){return this.dot(e)/this.magnitude()||0},j.Vector.prototype.toArray=function(){for(var e=new Array(this.elements.length/2),t=1,r=0;t<this.elements.length;t+=2,r++)e[r]=this.elements[t];return e},j.Vector.prototype.toJSON=function(){return this.elements},j.stemmer=(o={ational:"ate",tional:"tion",enci:"ence",anci:"ance",izer:"ize",bli:"ble",alli:"al",entli:"ent",eli:"e",ousli:"ous",ization:"ize",ation:"ate",ator:"ate",alism:"al",iveness:"ive",fulness:"ful",ousness:"ous",aliti:"al",iviti:"ive",biliti:"ble",logi:"log"},a={icate:"ic",ative:"",alize:"al",iciti:"ic",ical:"ic",ful:"",ness:""},h="^("+(l="[^aeiou][^aeiouy]*")+")?"+(c=(u="[aeiouy]")+"[aeiou]*")+l+"("+c+")?$",d="^("+l+")?"+c+l+c+l,f="^("+l+")?"+u,p=new RegExp("^("+l+")?"+c+l),y=new RegExp(d),m=new RegExp(h),g=new RegExp(f),x=/^(.+?)(ss|i)es$/,v=/^(.+?)([^s])s$/,w=/^(.+?)eed$/,Q=/^(.+?)(ed|ing)$/,k=/.$/,S=/(at|bl|iz)$/,E=new RegExp("([^aeiouylsz])\\\\1$"),L=new RegExp("^"+l+u+"[^aeiouwxy]$"),P=/^(.+?[^aeiou])y$/,b=/^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/,T=/^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,O=/^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/,I=/^(.+?)(s|t)(ion)$/,R=/^(.+?)e$/,F=/ll$/,C=new RegExp("^"+l+u+"[^aeiouwxy]$"),N=function(e){var t,r,n,i,s,u,l;if(e.length<3)return e;if("y"==(n=e.substr(0,1))&&(e=n.toUpperCase()+e.substr(1)),s=v,(i=x).test(e)?e=e.replace(i,"$1$2"):s.test(e)&&(e=e.replace(s,"$1$2")),s=Q,(i=w).test(e)){var c=i.exec(e);(i=p).test(c[1])&&(i=k,e=e.replace(i,""))}else s.test(e)&&(t=(c=s.exec(e))[1],(s=g).test(t)&&(u=E,l=L,(s=S).test(e=t)?e+="e":u.test(e)?(i=k,e=e.replace(i,"")):l.test(e)&&(e+="e")));return(i=P).test(e)&&(e=(t=(c=i.exec(e))[1])+"i"),(i=b).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+o[r])),(i=T).test(e)&&(t=(c=i.exec(e))[1],r=c[2],(i=p).test(t)&&(e=t+a[r])),s=I,(i=O).test(e)?(t=(c=i.exec(e))[1],(i=y).test(t)&&(e=t)):s.test(e)&&(t=(c=s.exec(e))[1]+c[2],(s=y).test(t)&&(e=t)),(i=R).test(e)&&(t=(c=i.exec(e))[1],s=m,u=C,((i=y).test(t)||s.test(t)&&!u.test(t))&&(e=t)),s=y,(i=F).test(e)&&s.test(e)&&(i=k,e=e.replace(i,"")),"y"==n&&(e=n.toLowerCase()+e.substr(1)),e},function(e){return e.update(N)}),j.Pipeline.registerFunction(j.stemmer,"stemmer"),j.generateStopWordFilter=function(e){var t=e.reduce((function(e,t){return e[t]=t,e}),{});return function(e){if(e&&t[e.toString()]!==e.toString())return e}},j.stopWordFilter=j.generateStopWordFilter(["a","able","about","across","after","all","almost","also","am","among","an","and","any","are","as","at","be","because","been","but","by","can","cannot","could","dear","did","do","does","either","else","ever","every","for","from","get","got","had","has","have","he","her","hers","him","his","how","however","i","if","in","into","is","it","its","just","least","let","like","likely","may","me","might","most","must","my","neither","no","nor","not","of","off","often","on","only","or","other","our","own","rather","said","say","says","she","should","since","so","some","than","that","the","their","them","then","there","these","they","this","tis","to","too","twas","us","wants","was","we","were","what","when","where","which","while","who","whom","why","will","with","would","yet","you","your"]),j.Pipeline.registerFunction(j.stopWordFilter,"stopWordFilter"),j.trimmer=function(e){return e.update((function(e){return e.replace(/^\\W+/,"").replace(/\\W+$/,"")}))},j.Pipeline.registerFunction(j.trimmer,"trimmer"),j.TokenSet=function(){this.final=!1,this.edges={},this.id=j.TokenSet._nextId,j.TokenSet._nextId+=1},j.TokenSet._nextId=1,j.TokenSet.fromArray=function(e){for(var t=new j.TokenSet.Builder,r=0,n=e.length;r<n;r++)t.insert(e[r]);return t.finish(),t.root},j.TokenSet.fromClause=function(e){return"editDistance"in e?j.TokenSet.fromFuzzyString(e.term,e.editDistance):j.TokenSet.fromString(e.term)},j.TokenSet.fromFuzzyString=function(e,t){for(var r=new j.TokenSet,n=[{node:r,editsRemaining:t,str:e}];n.length;){var i=n.pop();if(i.str.length>0){var s,o=i.str.charAt(0);o in i.node.edges?s=i.node.edges[o]:(s=new j.TokenSet,i.node.edges[o]=s),1==i.str.length&&(s.final=!0),n.push({node:s,editsRemaining:i.editsRemaining,str:i.str.slice(1)})}if(0!=i.editsRemaining){if("*"in i.node.edges)var a=i.node.edges["*"];else a=new j.TokenSet,i.node.edges["*"]=a;if(0==i.str.length&&(a.final=!0),n.push({node:a,editsRemaining:i.editsRemaining-1,str:i.str}),i.str.length>1&&n.push({node:i.node,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)}),1==i.str.length&&(i.node.final=!0),i.str.length>=1){if("*"in i.node.edges)var u=i.node.edges["*"];else u=new j.TokenSet,i.node.edges["*"]=u;1==i.str.length&&(u.final=!0),n.push({node:u,editsRemaining:i.editsRemaining-1,str:i.str.slice(1)})}if(i.str.length>1){var l,c=i.str.charAt(0),h=i.str.charAt(1);h in i.node.edges?l=i.node.edges[h]:(l=new j.TokenSet,i.node.edges[h]=l),1==i.str.length&&(l.final=!0),n.push({node:l,editsRemaining:i.editsRemaining-1,str:c+i.str.slice(2)})}}}return r},j.TokenSet.fromString=function(e){for(var t=new j.TokenSet,r=t,n=0,i=e.length;n<i;n++){var s=e[n],o=n==i-1;if("*"==s)t.edges[s]=t,t.final=o;else{var a=new j.TokenSet;a.final=o,t.edges[s]=a,t=a}}return r},j.TokenSet.prototype.toArray=function(){for(var e=[],t=[{prefix:"",node:this}];t.length;){var r=t.pop(),n=Object.keys(r.node.edges),i=n.length;r.node.final&&(r.prefix.charAt(0),e.push(r.prefix));for(var s=0;s<i;s++){var o=n[s];t.push({prefix:r.prefix.concat(o),node:r.node.edges[o]})}}return e},j.TokenSet.prototype.toString=function(){if(this._str)return this._str;for(var e=this.final?"1":"0",t=Object.keys(this.edges).sort(),r=t.length,n=0;n<r;n++){var i=t[n];e=e+i+this.edges[i].id}return e},j.TokenSet.prototype.intersect=function(e){for(var t=new j.TokenSet,r=void 0,n=[{qNode:e,output:t,node:this}];n.length;){r=n.pop();for(var i=Object.keys(r.qNode.edges),s=i.length,o=Object.keys(r.node.edges),a=o.length,u=0;u<s;u++)for(var l=i[u],c=0;c<a;c++){var h=o[c];if(h==l||"*"==l){var d=r.node.edges[h],f=r.qNode.edges[l],p=d.final&&f.final,y=void 0;h in r.output.edges?(y=r.output.edges[h]).final=y.final||p:((y=new j.TokenSet).final=p,r.output.edges[h]=y),n.push({qNode:f,output:y,node:d})}}}return t},j.TokenSet.Builder=function(){this.previousWord="",this.root=new j.TokenSet,this.uncheckedNodes=[],this.minimizedNodes={}},j.TokenSet.Builder.prototype.insert=function(e){var t,r=0;if(e<this.previousWord)throw new Error("Out of order word insertion");for(var n=0;n<e.length&&n<this.previousWord.length&&e[n]==this.previousWord[n];n++)r++;for(this.minimize(r),t=0==this.uncheckedNodes.length?this.root:this.uncheckedNodes[this.uncheckedNodes.length-1].child,n=r;n<e.length;n++){var i=new j.TokenSet,s=e[n];t.edges[s]=i,this.uncheckedNodes.push({parent:t,char:s,child:i}),t=i}t.final=!0,this.previousWord=e},j.TokenSet.Builder.prototype.finish=function(){this.minimize(0)},j.TokenSet.Builder.prototype.minimize=function(e){for(var t=this.uncheckedNodes.length-1;t>=e;t--){var r=this.uncheckedNodes[t],n=r.child.toString();n in this.minimizedNodes?r.parent.edges[r.char]=this.minimizedNodes[n]:(r.child._str=n,this.minimizedNodes[n]=r.child),this.uncheckedNodes.pop()}},j.Index=function(e){this.invertedIndex=e.invertedIndex,this.fieldVectors=e.fieldVectors,this.tokenSet=e.tokenSet,this.fields=e.fields,this.pipeline=e.pipeline},j.Index.prototype.search=function(e){return this.query((function(t){new j.QueryParser(e,t).parse()}))},j.Index.prototype.query=function(e){for(var t=new j.Query(this.fields),r=Object.create(null),n=Object.create(null),i=Object.create(null),s=Object.create(null),o=Object.create(null),a=0;a<this.fields.length;a++)n[this.fields[a]]=new j.Vector;for(e.call(t,t),a=0;a<t.clauses.length;a++){var u,l=t.clauses[a],c=j.Set.empty;u=l.usePipeline?this.pipeline.runString(l.term,{fields:l.fields}):[l.term];for(var h=0;h<u.length;h++){var d=u[h];l.term=d;var f=j.TokenSet.fromClause(l),p=this.tokenSet.intersect(f).toArray();if(0===p.length&&l.presence===j.Query.presence.REQUIRED){for(var y=0;y<l.fields.length;y++)s[R=l.fields[y]]=j.Set.empty;break}for(var m=0;m<p.length;m++){var g=p[m],x=this.invertedIndex[g],v=x._index;for(y=0;y<l.fields.length;y++){var w=x[R=l.fields[y]],Q=Object.keys(w),k=g+"/"+R,S=new j.Set(Q);if(l.presence==j.Query.presence.REQUIRED&&(c=c.union(S),void 0===s[R]&&(s[R]=j.Set.complete)),l.presence!=j.Query.presence.PROHIBITED){if(n[R].upsert(v,l.boost,(function(e,t){return e+t})),!i[k]){for(var E=0;E<Q.length;E++){var L,P=Q[E],b=new j.FieldRef(P,R),T=w[P];void 0===(L=r[b])?r[b]=new j.MatchData(g,R,T):L.add(g,R,T)}i[k]=!0}}else void 0===o[R]&&(o[R]=j.Set.empty),o[R]=o[R].union(S)}}}if(l.presence===j.Query.presence.REQUIRED)for(y=0;y<l.fields.length;y++)s[R=l.fields[y]]=s[R].intersect(c)}var O=j.Set.complete,I=j.Set.empty;for(a=0;a<this.fields.length;a++){var R;s[R=this.fields[a]]&&(O=O.intersect(s[R])),o[R]&&(I=I.union(o[R]))}var F=Object.keys(r),C=[],N=Object.create(null);if(t.isNegated())for(F=Object.keys(this.fieldVectors),a=0;a<F.length;a++){b=F[a];var _=j.FieldRef.fromString(b);r[b]=new j.MatchData}for(a=0;a<F.length;a++){var D=(_=j.FieldRef.fromString(F[a])).docRef;if(O.contains(D)&&!I.contains(D)){var A,B=this.fieldVectors[_],z=n[_.fieldName].similarity(B);if(void 0!==(A=N[D]))A.score+=z,A.matchData.combine(r[_]);else{var V={ref:D,score:z,matchData:r[_]};N[D]=V,C.push(V)}}}return C.sort((function(e,t){return t.score-e.score}))},j.Index.prototype.toJSON=function(){var e=Object.keys(this.invertedIndex).sort().map((function(e){return[e,this.invertedIndex[e]]}),this),t=Object.keys(this.fieldVectors).map((function(e){return[e,this.fieldVectors[e].toJSON()]}),this);return{version:j.version,fields:this.fields,fieldVectors:t,invertedIndex:e,pipeline:this.pipeline.toJSON()}},j.Index.load=function(e){var t={},r={},n=e.fieldVectors,i=Object.create(null),s=e.invertedIndex,o=new j.TokenSet.Builder,a=j.Pipeline.load(e.pipeline);e.version!=j.version&&j.utils.warn("Version mismatch when loading serialised index. Current version of lunr \'"+j.version+"\' does not match serialized index \'"+e.version+"\'");for(var u=0;u<n.length;u++){var l=(h=n[u])[0],c=h[1];r[l]=new j.Vector(c)}for(u=0;u<s.length;u++){var h,d=(h=s[u])[0],f=h[1];o.insert(d),i[d]=f}return o.finish(),t.fields=e.fields,t.fieldVectors=r,t.invertedIndex=i,t.tokenSet=o.root,t.pipeline=a,new j.Index(t)},j.Builder=function(){this._ref="id",this._fields=Object.create(null),this._documents=Object.create(null),this.invertedIndex=Object.create(null),this.fieldTermFrequencies={},this.fieldLengths={},this.tokenizer=j.tokenizer,this.pipeline=new j.Pipeline,this.searchPipeline=new j.Pipeline,this.documentCount=0,this._b=.75,this._k1=1.2,this.termIndex=0,this.metadataWhitelist=[]},j.Builder.prototype.ref=function(e){this._ref=e},j.Builder.prototype.field=function(e,t){if(/\\//.test(e))throw new RangeError("Field \'"+e+"\' contains illegal character \'/\'");this._fields[e]=t||{}},j.Builder.prototype.b=function(e){this._b=e<0?0:e>1?1:e},j.Builder.prototype.k1=function(e){this._k1=e},j.Builder.prototype.add=function(e,t){var r=e[this._ref],n=Object.keys(this._fields);this._documents[r]=t||{},this.documentCount+=1;for(var i=0;i<n.length;i++){var s=n[i],o=this._fields[s].extractor,a=o?o(e):e[s],u=this.tokenizer(a,{fields:[s]}),l=this.pipeline.run(u),c=new j.FieldRef(r,s),h=Object.create(null);this.fieldTermFrequencies[c]=h,this.fieldLengths[c]=0,this.fieldLengths[c]+=l.length;for(var d=0;d<l.length;d++){var f=l[d];if(null==h[f]&&(h[f]=0),h[f]+=1,null==this.invertedIndex[f]){var p=Object.create(null);p._index=this.termIndex,this.termIndex+=1;for(var y=0;y<n.length;y++)p[n[y]]=Object.create(null);this.invertedIndex[f]=p}null==this.invertedIndex[f][s][r]&&(this.invertedIndex[f][s][r]=Object.create(null));for(var m=0;m<this.metadataWhitelist.length;m++){var g=this.metadataWhitelist[m],x=f.metadata[g];null==this.invertedIndex[f][s][r][g]&&(this.invertedIndex[f][s][r][g]=[]),this.invertedIndex[f][s][r][g].push(x)}}}},j.Builder.prototype.calculateAverageFieldLengths=function(){for(var e=Object.keys(this.fieldLengths),t=e.length,r={},n={},i=0;i<t;i++){var s=j.FieldRef.fromString(e[i]),o=s.fieldName;n[o]||(n[o]=0),n[o]+=1,r[o]||(r[o]=0),r[o]+=this.fieldLengths[s]}var a=Object.keys(this._fields);for(i=0;i<a.length;i++){var u=a[i];r[u]=r[u]/n[u]}this.averageFieldLength=r},j.Builder.prototype.createFieldVectors=function(){for(var e={},t=Object.keys(this.fieldTermFrequencies),r=t.length,n=Object.create(null),i=0;i<r;i++){for(var s=j.FieldRef.fromString(t[i]),o=s.fieldName,a=this.fieldLengths[s],u=new j.Vector,l=this.fieldTermFrequencies[s],c=Object.keys(l),h=c.length,d=this._fields[o].boost||1,f=this._documents[s.docRef].boost||1,p=0;p<h;p++){var y,m,g,x=c[p],v=l[x],w=this.invertedIndex[x]._index;void 0===n[x]?(y=j.idf(this.invertedIndex[x],this.documentCount),n[x]=y):y=n[x],m=y*((this._k1+1)*v)/(this._k1*(1-this._b+this._b*(a/this.averageFieldLength[o]))+v),m*=d,m*=f,g=Math.round(1e3*m)/1e3,u.insert(w,g)}e[s]=u}this.fieldVectors=e},j.Builder.prototype.createTokenSet=function(){this.tokenSet=j.TokenSet.fromArray(Object.keys(this.invertedIndex).sort())},j.Builder.prototype.build=function(){return this.calculateAverageFieldLengths(),this.createFieldVectors(),this.createTokenSet(),new j.Index({invertedIndex:this.invertedIndex,fieldVectors:this.fieldVectors,tokenSet:this.tokenSet,fields:Object.keys(this._fields),pipeline:this.searchPipeline})},j.Builder.prototype.use=function(e){var t=Array.prototype.slice.call(arguments,1);t.unshift(this),e.apply(this,t)},j.MatchData=function(e,t,r){for(var n=Object.create(null),i=Object.keys(r||{}),s=0;s<i.length;s++){var o=i[s];n[o]=r[o].slice()}this.metadata=Object.create(null),void 0!==e&&(this.metadata[e]=Object.create(null),this.metadata[e][t]=n)},j.MatchData.prototype.combine=function(e){for(var t=Object.keys(e.metadata),r=0;r<t.length;r++){var n=t[r],i=Object.keys(e.metadata[n]);null==this.metadata[n]&&(this.metadata[n]=Object.create(null));for(var s=0;s<i.length;s++){var o=i[s],a=Object.keys(e.metadata[n][o]);null==this.metadata[n][o]&&(this.metadata[n][o]=Object.create(null));for(var u=0;u<a.length;u++){var l=a[u];null==this.metadata[n][o][l]?this.metadata[n][o][l]=e.metadata[n][o][l]:this.metadata[n][o][l]=this.metadata[n][o][l].concat(e.metadata[n][o][l])}}}},j.MatchData.prototype.add=function(e,t,r){if(!(e in this.metadata))return this.metadata[e]=Object.create(null),void(this.metadata[e][t]=r);if(t in this.metadata[e])for(var n=Object.keys(r),i=0;i<n.length;i++){var s=n[i];s in this.metadata[e][t]?this.metadata[e][t][s]=this.metadata[e][t][s].concat(r[s]):this.metadata[e][t][s]=r[s]}else this.metadata[e][t]=r},j.Query=function(e){this.clauses=[],this.allFields=e},j.Query.wildcard=new String("*"),j.Query.wildcard.NONE=0,j.Query.wildcard.LEADING=1,j.Query.wildcard.TRAILING=2,j.Query.presence={OPTIONAL:1,REQUIRED:2,PROHIBITED:3},j.Query.prototype.clause=function(e){return"fields"in e||(e.fields=this.allFields),"boost"in e||(e.boost=1),"usePipeline"in e||(e.usePipeline=!0),"wildcard"in e||(e.wildcard=j.Query.wildcard.NONE),e.wildcard&j.Query.wildcard.LEADING&&e.term.charAt(0)!=j.Query.wildcard&&(e.term="*"+e.term),e.wildcard&j.Query.wildcard.TRAILING&&e.term.slice(-1)!=j.Query.wildcard&&(e.term=e.term+"*"),"presence"in e||(e.presence=j.Query.presence.OPTIONAL),this.clauses.push(e),this},j.Query.prototype.isNegated=function(){for(var e=0;e<this.clauses.length;e++)if(this.clauses[e].presence!=j.Query.presence.PROHIBITED)return!1;return!0},j.Query.prototype.term=function(e,t){if(Array.isArray(e))return e.forEach((function(e){this.term(e,j.utils.clone(t))}),this),this;var r=t||{};return r.term=e.toString(),this.clause(r),this},j.QueryParseError=function(e,t,r){this.name="QueryParseError",this.message=e,this.start=t,this.end=r},j.QueryParseError.prototype=new Error,j.QueryLexer=function(e){this.lexemes=[],this.str=e,this.length=e.length,this.pos=0,this.start=0,this.escapeCharPositions=[]},j.QueryLexer.prototype.run=function(){for(var e=j.QueryLexer.lexText;e;)e=e(this)},j.QueryLexer.prototype.sliceString=function(){for(var e=[],t=this.start,r=this.pos,n=0;n<this.escapeCharPositions.length;n++)r=this.escapeCharPositions[n],e.push(this.str.slice(t,r)),t=r+1;return e.push(this.str.slice(t,this.pos)),this.escapeCharPositions.length=0,e.join("")},j.QueryLexer.prototype.emit=function(e){this.lexemes.push({type:e,str:this.sliceString(),start:this.start,end:this.pos}),this.start=this.pos},j.QueryLexer.prototype.escapeCharacter=function(){this.escapeCharPositions.push(this.pos-1),this.pos+=1},j.QueryLexer.prototype.next=function(){if(this.pos>=this.length)return j.QueryLexer.EOS;var e=this.str.charAt(this.pos);return this.pos+=1,e},j.QueryLexer.prototype.width=function(){return this.pos-this.start},j.QueryLexer.prototype.ignore=function(){this.start==this.pos&&(this.pos+=1),this.start=this.pos},j.QueryLexer.prototype.backup=function(){this.pos-=1},j.QueryLexer.prototype.acceptDigitRun=function(){var e,t;do{t=(e=this.next()).charCodeAt(0)}while(t>47&&t<58);e!=j.QueryLexer.EOS&&this.backup()},j.QueryLexer.prototype.more=function(){return this.pos<this.length},j.QueryLexer.EOS="EOS",j.QueryLexer.FIELD="FIELD",j.QueryLexer.TERM="TERM",j.QueryLexer.EDIT_DISTANCE="EDIT_DISTANCE",j.QueryLexer.BOOST="BOOST",j.QueryLexer.PRESENCE="PRESENCE",j.QueryLexer.lexField=function(e){return e.backup(),e.emit(j.QueryLexer.FIELD),e.ignore(),j.QueryLexer.lexText},j.QueryLexer.lexTerm=function(e){if(e.width()>1&&(e.backup(),e.emit(j.QueryLexer.TERM)),e.ignore(),e.more())return j.QueryLexer.lexText},j.QueryLexer.lexEditDistance=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.EDIT_DISTANCE),j.QueryLexer.lexText},j.QueryLexer.lexBoost=function(e){return e.ignore(),e.acceptDigitRun(),e.emit(j.QueryLexer.BOOST),j.QueryLexer.lexText},j.QueryLexer.lexEOS=function(e){e.width()>0&&e.emit(j.QueryLexer.TERM)},j.QueryLexer.termSeparator=j.tokenizer.separator,j.QueryLexer.lexText=function(e){for(;;){var t=e.next();if(t==j.QueryLexer.EOS)return j.QueryLexer.lexEOS;if(92!=t.charCodeAt(0)){if(":"==t)return j.QueryLexer.lexField;if("~"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexEditDistance;if("^"==t)return e.backup(),e.width()>0&&e.emit(j.QueryLexer.TERM),j.QueryLexer.lexBoost;if("+"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if("-"==t&&1===e.width())return e.emit(j.QueryLexer.PRESENCE),j.QueryLexer.lexText;if(t.match(j.QueryLexer.termSeparator))return j.QueryLexer.lexTerm}else e.escapeCharacter()}},j.QueryParser=function(e,t){this.lexer=new j.QueryLexer(e),this.query=t,this.currentClause={},this.lexemeIdx=0},j.QueryParser.prototype.parse=function(){this.lexer.run(),this.lexemes=this.lexer.lexemes;for(var e=j.QueryParser.parseClause;e;)e=e(this);return this.query},j.QueryParser.prototype.peekLexeme=function(){return this.lexemes[this.lexemeIdx]},j.QueryParser.prototype.consumeLexeme=function(){var e=this.peekLexeme();return this.lexemeIdx+=1,e},j.QueryParser.prototype.nextClause=function(){var e=this.currentClause;this.query.clause(e),this.currentClause={}},j.QueryParser.parseClause=function(e){var t=e.peekLexeme();if(null!=t)switch(t.type){case j.QueryLexer.PRESENCE:return j.QueryParser.parsePresence;case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:var r="expected either a field or a term, found "+t.type;throw t.str.length>=1&&(r+=" with value \'"+t.str+"\'"),new j.QueryParseError(r,t.start,t.end)}},j.QueryParser.parsePresence=function(e){var t=e.consumeLexeme();if(null!=t){switch(t.str){case"-":e.currentClause.presence=j.Query.presence.PROHIBITED;break;case"+":e.currentClause.presence=j.Query.presence.REQUIRED;break;default:var r="unrecognised presence operator\'"+t.str+"\'";throw new j.QueryParseError(r,t.start,t.end)}var n=e.peekLexeme();if(null==n)throw r="expecting term or field, found nothing",new j.QueryParseError(r,t.start,t.end);switch(n.type){case j.QueryLexer.FIELD:return j.QueryParser.parseField;case j.QueryLexer.TERM:return j.QueryParser.parseTerm;default:throw r="expecting term or field, found \'"+n.type+"\'",new j.QueryParseError(r,n.start,n.end)}}},j.QueryParser.parseField=function(e){var t=e.consumeLexeme();if(null!=t){if(-1==e.query.allFields.indexOf(t.str)){var r=e.query.allFields.map((function(e){return"\'"+e+"\'"})).join(", "),n="unrecognised field \'"+t.str+"\', possible fields: "+r;throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.fields=[t.str];var i=e.peekLexeme();if(null==i)throw n="expecting term, found nothing",new j.QueryParseError(n,t.start,t.end);if(i.type===j.QueryLexer.TERM)return j.QueryParser.parseTerm;throw n="expecting term, found \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}},j.QueryParser.parseTerm=function(e){var t=e.consumeLexeme();if(null!=t){e.currentClause.term=t.str.toLowerCase(),-1!=t.str.indexOf("*")&&(e.currentClause.usePipeline=!1);var r=e.peekLexeme();if(null!=r)switch(r.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:var n="Unexpected lexeme type \'"+r.type+"\'";throw new j.QueryParseError(n,r.start,r.end)}else e.nextClause()}},j.QueryParser.parseEditDistance=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="edit distance must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.editDistance=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},j.QueryParser.parseBoost=function(e){var t=e.consumeLexeme();if(null!=t){var r=parseInt(t.str,10);if(isNaN(r)){var n="boost must be numeric";throw new j.QueryParseError(n,t.start,t.end)}e.currentClause.boost=r;var i=e.peekLexeme();if(null!=i)switch(i.type){case j.QueryLexer.TERM:return e.nextClause(),j.QueryParser.parseTerm;case j.QueryLexer.FIELD:return e.nextClause(),j.QueryParser.parseField;case j.QueryLexer.EDIT_DISTANCE:return j.QueryParser.parseEditDistance;case j.QueryLexer.BOOST:return j.QueryParser.parseBoost;case j.QueryLexer.PRESENCE:return e.nextClause(),j.QueryParser.parsePresence;default:throw n="Unexpected lexeme type \'"+i.type+"\'",new j.QueryParseError(n,i.start,i.end)}else e.nextClause()}},void 0===(i="function"==typeof(n=function(){return j})?n.call(t,r,t,e):n)||(e.exports=i)}()}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};var n={};!function(){"use strict";r.d(n,{add:function(){return c},dispose:function(){return y},done:function(){return h},fromExternalJS:function(){return f},load:function(){return p},search:function(){return m},toJS:function(){return d}});var e=r(336),t=(e,t,r)=>new Promise(((n,i)=>{var s=e=>{try{a(r.next(e))}catch(e){i(e)}},o=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,o);a((r=r.apply(e,t)).next())}));let i,s,o,a=[];function u(){i=new e.Builder,i.field("title"),i.field("description"),i.ref("ref"),i.pipeline.add(e.trimmer,e.stopWordFilter,e.stemmer),o=new Promise((e=>{s=e}))}e.tokenizer.separator=/\\s+/,u();const l=t=>{const r=e.trimmer(new e.Token(t,{}));return"*"+e.stemmer(r)+"*"};function c(e,t,r){const n=a.push(r)-1,s={title:e.toLowerCase(),description:t.toLowerCase(),ref:n};i.add(s)}function h(){return t(this,null,(function*(){s(i.build())}))}function d(){return t(this,null,(function*(){return{store:a,index:(yield o).toJSON()}}))}function f(e,r){return t(this,null,(function*(){try{if(importScripts(e),!self[r])throw new Error("Broken index file format");p(self[r])}catch(e){console.error("Failed to load search index: "+e.message)}}))}function p(r){return t(this,null,(function*(){a=r.store,s(e.Index.load(r.index))}))}function y(){return t(this,null,(function*(){a=[],u()}))}function m(e,r=0){return t(this,null,(function*(){if(0===e.trim().length)return[];let t=(yield o).query((t=>{e.trim().toLowerCase().split(/\\s+/).forEach((e=>{if(1===e.length)return;const r=l(e);t.term(r,{})}))}));return r>0&&(t=t.slice(0,r)),t.map((e=>({meta:a[e.ref],score:e.score})))}))}addEventListener("message",(function(e){var t,r=e.data,i=r.type,s=r.method,o=r.id,a=r.params;"RPC"===i&&s&&((t=n[s])?Promise.resolve().then((function(){return t.apply(n,a)})):Promise.reject("No such method")).then((function(e){postMessage({type:"RPC",id:o,result:e})})).catch((function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:o,error:t})}))})),postMessage({type:"RPC",method:"ready"})}()}();\n//# sourceMappingURL=756674defce81e90acea.worker.js.map'])),{name:"[fullhash].worker.js"});return n(e,i),e}},314:function(e){e.exports=function(e,t){var r=0,n={};e.addEventListener("message",function(t){var r=t.data;if("RPC"===r.type){if(r.id){var i=n[r.id];i&&(delete n[r.id],r.error?i[1](Object.assign(Error(r.error.message),r.error)):i[0](r.result))}else{var o=document.createEvent("Event");o.initEvent(r.method,!1,!1),o.data=r.params,e.dispatchEvent(o)}}}),t.forEach(function(t){e[t]=function(){var i=arguments;return new Promise(function(o,s){var a=++r;n[a]=[o,s],e.postMessage({type:"RPC",id:a,method:t,params:[].slice.call(i)})})}})}},766:function(e){"use strict";e.exports=r(33566)},376:function(e){"use strict";e.exports=r(64390)},322:function(e){"use strict";e.exports=r(24717)},66:function(e){"use strict";e.exports=r(1703)},416:function(e){"use strict";e.exports=void 0},177:function(){},109:function(e){"use strict";e.exports={i8:"7.0.8"}}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.nc=void 0;var o={};return function(){"use strict";let e,t;n.r(o),n.d(o,{AUTH_TYPES:function(){return aU},ApiContentWrap:function(){return ps},ApiInfo:function(){return a1},ApiInfoModel:function(){return rC},ApiLogo:function(){return a5},AppStore:function(){return aJ},ArraySchema:function(){return s4},BackgroundStub:function(){return pa},BodyContent:function(){return lN},COMPONENT_REGEXP:function(){return rj},CallbackModel:function(){return rH},ClipboardService:function(){return oY},ContentItem:function(){return cq},ContentItems:function(){return cF},DiscriminatorDropdown:function(){return sY},Dropdown:function(){return ob},DropdownLabel:function(){return sr},DropdownOrLabel:function(){return oS},DropdownWrapper:function(){return sn},ErrorBoundary:function(){return es},Example:function(){return o7},ExampleModel:function(){return nh},ExternalExample:function(){return se},FieldModel:function(){return nb},GROUP_DEPTH:function(){return ip},GroupModel:function(){return n7},HistoryService:function(){return tD},IS_BROWSER:function(){return c},InvertedSimpleDropdown:function(){return si},JsonPointer:function(){return e$},JsonViewer:function(){return o3},LEGACY_REGEXP:function(){return rE},Loading:function(){return ep},MDX_COMPONENT_REGEXP:function(){return rO},Markdown:function(){return oq},MarkdownRenderer:function(){return rS},MarkerService:function(){return tF},MediaContentModel:function(){return nO},MediaTypeModel:function(){return nv},MediaTypesSwitch:function(){return lS},MenuBuilder:function(){return iu},MenuItem:function(){return cX},MenuItemLabel:function(){return lc},MenuItemLi:function(){return la},MenuItemTitle:function(){return lp},MenuItemUl:function(){return ls},MenuItems:function(){return c5},MenuStore:function(){return iy},MiddlePanel:function(){return iE},MimeLabel:function(){return st},NoSampleLabel:function(){return so},OLD_SECURITY_DEFINITIONS_JSX_NAME:function(){return ts},ObjectSchema:function(){return sZ},OneOfButton:function(){return aa},OneOfSchema:function(){return al},OpenAPIParser:function(){return r8},Operation:function(){return cT},OperationBadge:function(){return li},OperationItem:function(){return cU},OperationMenuItemContent:function(){return cK},OperationModel:function(){return nq},OptionsConsumer:function(){return em},OptionsContext:function(){return ed},OptionsProvider:function(){return eh},Parameters:function(){return lz},PayloadSamples:function(){return cp},Redoc:function(){return pg},RedocAttribution:function(){return lu},RedocNormalizedOptions:function(){return J},RedocStandalone:function(){return pE},RedocWrap:function(){return po},RequestBodyModel:function(){return nj},ResponseDetails:function(){return lK},ResponseHeaders:function(){return lH},ResponseModel:function(){return nL},ResponseSamples:function(){return cE},ResponseTitle:function(){return lB},ResponseView:function(){return l0},ResponsesList:function(){return l2},RightPanel:function(){return ij},Row:function(){return iS},SCHEMA_DEFINITION_JSX_NAME:function(){return ta},SECTION_ATTR:function(){return ig},SECURITY_DEFINITIONS_JSX_NAME:function(){return to},SECURITY_SCHEMES_SECTION_PREFIX:function(){return tl},Schema:function(){return ax},SchemaDefinition:function(){return aS},SchemaModel:function(){return nc},ScrollService:function(){return iw},SearchBox:function(){return pf},SearchStore:function(){return ik},Section:function(){return iO},SectionItem:function(){return cQ},SecurityDefs:function(){return aW},SecuritySchemeModel:function(){return nG},SecuritySchemesModel:function(){return nX},SideMenu:function(){return c4},SideNavStyleEnum:function(){return D},SimpleDropdown:function(){return ox},SourceCode:function(){return o5},SourceCodeWithCopy:function(){return o8},SpecStore:function(){return n5},StickyResponsiveSidebar:function(){return pi},StoreBuilder:function(){return iM},StoreConsumer:function(){return iN},StoreContext:function(){return iz},StoreProvider:function(){return iD},StyledMarkdownBlock:function(){return oP},ThemeProvider:function(){return et},Throttle:function(){return tx},alphabeticallyByProp:function(){return t_},appendToMdHeading:function(){return v},argValueToBoolean:function(){return V},buildComponentComment:function(){return r$},concatRefStacks:function(){return r5},convertSwagger2OpenAPI:function(){return ew},createGlobalStyle:function(){return K},createStore:function(){return aH},css:function(){return X},debugTime:function(){return tv},debugTimeEnd:function(){return tw},detectType:function(){return eW},escapeHTMLAttrChars:function(){return I},expandDefaultServerVariables:function(){return tn},extensionsHook:function(){return ei},extractExtensions:function(){return td},flattenByProp:function(){return y},getBasePath:function(){return S},getContentWithLegacyExamples:function(){return tm},getDefinitionName:function(){return e5},getOperationSummary:function(){return eQ},getSerializedValue:function(){return e1},getStatusCodeType:function(){return eF},highlight:function(){return tb},history:function(){return tN},html2Str:function(){return u},humanizeConstraints:function(){return e9},humanizeNumberRange:function(){return e4},isAbsoluteUrl:function(){return j},isArray:function(){return _},isBoolean:function(){return R},isFormUrlEncoded:function(){return eJ},isJsonLike:function(){return eH},isNamedDefinition:function(){return e3},isNumeric:function(){return x},isObject:function(){return k},isOperationName:function(){return eB},isPayloadSample:function(){return nM},isPrimitiveType:function(){return eV},isRedocExtension:function(){return tu},isStatusCode:function(){return eM},keyframes:function(){return ee},langFromMime:function(){return e2},loadAndBundleSpec:function(){return ev},mapLang:function(){return ty},mapValues:function(){return g},mapWithLast:function(){return f},media:function(){return er},memoize:function(){return tT},menuItemDepth:function(){return ll},mergeObjects:function(){return w},mergeParams:function(){return tt},mergeSimilarMediaTypes:function(){return tr},normalizeServers:function(){return ti},pluralizeType:function(){return th},pushRef:function(){return r3},querySelector:function(){return p},removeQueryStringAndHash:function(){return A},resolveUrl:function(){return $},safeSlugify:function(){return O},scrollIntoViewIfNeeded:function(){return d},serializeParameterValue:function(){return e0},serializeParameterValueWithMime:function(){return eK},setSecuritySchemePrefix:function(){return tc},shortenHTTPVerb:function(){return tp},sortByField:function(){return te},sortByRequired:function(){return e7},stripTrailingSlash:function(){return b},styled:function(){return en},titleize:function(){return C},unescapeHTMLChars:function(){return T},urlFormEncodePayload:function(){return eX},useStore:function(){return iF}});var s=r(92379),a=r(63973);let l={spacing:{unit:5,sectionHorizontal:({spacing:e})=>8*e.unit,sectionVertical:({spacing:e})=>8*e.unit},breakpoints:{small:"50rem",medium:"75rem",large:"105rem"},colors:{tonalOffset:.2,primary:{main:"#32329f",light:({colors:e})=>(0,a.lighten)(e.tonalOffset,e.primary.main),dark:({colors:e})=>(0,a.darken)(e.tonalOffset,e.primary.main),contrastText:({colors:e})=>(0,a.readableColor)(e.primary.main)},success:{main:"#1d8127",light:({colors:e})=>(0,a.lighten)(2*e.tonalOffset,e.success.main),dark:({colors:e})=>(0,a.darken)(e.tonalOffset,e.success.main),contrastText:({colors:e})=>(0,a.readableColor)(e.success.main)},warning:{main:"#ffa500",light:({colors:e})=>(0,a.lighten)(e.tonalOffset,e.warning.main),dark:({colors:e})=>(0,a.darken)(e.tonalOffset,e.warning.main),contrastText:"#ffffff"},error:{main:"#d41f1c",light:({colors:e})=>(0,a.lighten)(e.tonalOffset,e.error.main),dark:({colors:e})=>(0,a.darken)(e.tonalOffset,e.error.main),contrastText:({colors:e})=>(0,a.readableColor)(e.error.main)},gray:{50:"#FAFAFA",100:"#F5F5F5"},text:{primary:"#333333",secondary:({colors:e})=>(0,a.lighten)(e.tonalOffset,e.text.primary)},border:{dark:"rgba(0,0,0, 0.1)",light:"#ffffff"},responses:{success:{color:({colors:e})=>e.success.main,backgroundColor:({colors:e})=>(0,a.transparentize)(.93,e.success.main),tabTextColor:({colors:e})=>e.responses.success.color},error:{color:({colors:e})=>e.error.main,backgroundColor:({colors:e})=>(0,a.transparentize)(.93,e.error.main),tabTextColor:({colors:e})=>e.responses.error.color},redirect:{color:({colors:e})=>e.warning.main,backgroundColor:({colors:e})=>(0,a.transparentize)(.9,e.responses.redirect.color),tabTextColor:({colors:e})=>e.responses.redirect.color},info:{color:"#87ceeb",backgroundColor:({colors:e})=>(0,a.transparentize)(.9,e.responses.info.color),tabTextColor:({colors:e})=>e.responses.info.color}},http:{get:"#2F8132",post:"#186FAF",put:"#95507c",options:"#947014",patch:"#bf581d",delete:"#cc3333",basic:"#707070",link:"#07818F",head:"#A23DAD"}},schema:{linesColor:e=>(0,a.lighten)(e.colors.tonalOffset,(0,a.desaturate)(e.colors.tonalOffset,e.colors.primary.main)),defaultDetailsWidth:"75%",typeNameColor:e=>e.colors.text.secondary,typeTitleColor:e=>e.schema.typeNameColor,requireLabelColor:e=>e.colors.error.main,labelsTextSize:"0.9em",nestingSpacing:"1em",nestedBackground:"#fafafa",arrow:{size:"1.1em",color:e=>e.colors.text.secondary}},typography:{fontSize:"14px",lineHeight:"1.5em",fontWeightRegular:"400",fontWeightBold:"600",fontWeightLight:"300",fontFamily:"Roboto, sans-serif",smoothing:"antialiased",optimizeSpeed:!0,headings:{fontFamily:"Montserrat, sans-serif",fontWeight:"400",lineHeight:"1.6em"},code:{fontSize:"13px",fontFamily:"Courier, monospace",lineHeight:({typography:e})=>e.lineHeight,fontWeight:({typography:e})=>e.fontWeightRegular,color:"#e53935",backgroundColor:"rgba(38, 50, 56, 0.05)",wrap:!1},links:{color:({colors:e})=>e.primary.main,visited:({typography:e})=>e.links.color,hover:({typography:e})=>(0,a.lighten)(.2,e.links.color),textDecoration:"auto",hoverTextDecoration:"auto"}},sidebar:{width:"260px",backgroundColor:"#fafafa",textColor:"#333333",activeTextColor:e=>e.sidebar.textColor!==l.sidebar.textColor?e.sidebar.textColor:e.colors.primary.main,groupItems:{activeBackgroundColor:e=>(0,a.darken)(.1,e.sidebar.backgroundColor),activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"uppercase"},level1Items:{activeBackgroundColor:e=>(0,a.darken)(.05,e.sidebar.backgroundColor),activeTextColor:e=>e.sidebar.activeTextColor,textTransform:"none"},arrow:{size:"1.5em",color:e=>e.sidebar.textColor}},logo:{maxHeight:({sidebar:e})=>e.width,maxWidth:({sidebar:e})=>e.width,gutter:"2px"},rightPanel:{backgroundColor:"#263238",width:"40%",textColor:"#ffffff",servers:{overlay:{backgroundColor:"#fafafa",textColor:"#263238"},url:{backgroundColor:"#fff"}}},codeBlock:{backgroundColor:({rightPanel:e})=>(0,a.darken)(.1,e.backgroundColor)},fab:{backgroundColor:"#f2f2f2",color:"#0065FB"}},c="undefined"!=typeof window&&"HTMLElement"in window;function p(e){return"undefined"!=typeof document?document.querySelector(e):null}function u(e){return e.split(/<[^>]+>/).map(e=>e.trim()).filter(e=>e.length>0).join(" ")}function d(e,t=!0){let r=e.parentNode;if(!r)return;let n=window.getComputedStyle(r,void 0),i=parseInt(n.getPropertyValue("border-top-width"),10),o=parseInt(n.getPropertyValue("border-left-width"),10),s=e.offsetTop-r.offsetTop<r.scrollTop,a=e.offsetTop-r.offsetTop+e.clientHeight-i>r.scrollTop+r.clientHeight,l=e.offsetLeft-r.offsetLeft<r.scrollLeft,c=e.offsetLeft-r.offsetLeft+e.clientWidth-o>r.scrollLeft+r.clientWidth;(s||a)&&t&&(r.scrollTop=e.offsetTop-r.offsetTop-r.clientHeight/2-i+e.clientHeight/2),(l||c)&&t&&(r.scrollLeft=e.offsetLeft-r.offsetLeft-r.clientWidth/2-o+e.clientWidth/2),(s||a||l||c)&&!t&&e.scrollIntoView(s&&!a)}var h=r(86389),m=n.n(h);function f(e,t){let r=[];for(let n=0;n<e.length-1;n++)r.push(t(e[n],!1));return 0!==e.length&&r.push(t(e[e.length-1],!0)),r}function g(e,t){let r={};for(let n in e)e.hasOwnProperty(n)&&(r[n]=t(e[n],n,e));return r}function y(e,t){let r=[],n=e=>{for(let i of e)r.push(i),i[t]&&n(i[t])};return n(e),r}function b(e){return e.endsWith("/")?e.substring(0,e.length-1):e}function x(e){return!isNaN(parseFloat(e))&&isFinite(e)}function v(e,t,r){let n=RegExp(`(^|\\n)#\\s?${t}\\s*\\n`,"i"),i=RegExp(`((\\n|^)#\\s*${t}\\s*(\\n|$)(?:.|\\n)*?)(\\n#|$)`,"i");if(n.test(e))return e.replace(i,`$1

${r}
$4`);{let n=""===e||e.endsWith("\n\n")?"":e.endsWith("\n")?"\n":"\n\n";return`${e}${n}# ${t}

${r}`}}let w=(e,...t)=>{if(!t.length)return e;let r=t.shift();return void 0===r?e:(E(e)&&E(r)&&Object.keys(r).forEach(t=>{E(r[t])?(e[t]||(e[t]={}),w(e[t],r[t])):e[t]=r[t]}),w(e,...t))},k=e=>null!==e&&"object"==typeof e,E=e=>k(e)&&!_(e);function O(e){return m()(e)||e.toString().toLowerCase().replace(/\s+/g,"-").replace(/&/g,"-and-").replace(/\--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}function j(e){return/(?:^[a-z][a-z0-9+.-]*:|\/\/)/i.test(e)}function $(e,t){let r;if(t.startsWith("//"))try{r=`${new URL(e).protocol||"https:"}${t}`}catch(e){r=`https:${t}`}else if(j(t))r=t;else if(t.startsWith("/"))try{let n=new URL(e);n.pathname=t,r=n.href}catch(e){r=t}else r=b(e)+"/"+t;return b(r)}function S(e){try{return P(e).pathname}catch(t){return e}}function C(e){return e.charAt(0).toUpperCase()+e.slice(1)}function A(e){try{let t=P(e);return t.search="",t.hash="",t.toString()}catch(t){return e}}function P(e){return"undefined"==typeof URL?new(n(416)).URL(e):new URL(e)}function I(e){return e.replace(/["\\]/g,"\\$&")}function T(e){return e.replace(/&#(\d+);/g,(e,t)=>String.fromCharCode(parseInt(t,10))).replace(/&amp;/g,"&").replace(/&quot;/g,'"')}function _(e){return Array.isArray(e)}function R(e){return"boolean"==typeof e}let L={enum:"Enum",enumSingleValue:"Value",enumArray:"Items",default:"Default",deprecated:"Deprecated",example:"Example",examples:"Examples",recursive:"Recursive",arrayOf:"Array of ",webhook:"Event",const:"Value",noResultsFound:"No results found",download:"Download",downloadSpecification:"Download OpenAPI specification",responses:"Responses",callbackResponses:"Callback responses",requestSamples:"Request samples",responseSamples:"Response samples"};function z(e,t){let r=L[e];return void 0!==t?r[t]:r}var D=((t=D||{}).SummaryOnly="summary-only",t.PathOnly="path-only",t.IdOnly="id-only",t),N=Object.defineProperty,M=Object.defineProperties,F=Object.getOwnPropertyDescriptors,q=Object.getOwnPropertySymbols,B=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable,U=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))B.call(t,r)&&U(e,r,t[r]);if(q)for(var r of q(t))Q.call(t,r)&&U(e,r,t[r]);return e};function V(e,t){return void 0===e?t||!1:"string"==typeof e?"false"!==e:e}function H(e){return"string"==typeof e?parseInt(e,10):"number"==typeof e?e:void 0}class J{static normalizeExpandResponses(e){if("all"===e)return"all";if("string"==typeof e){let t={};return e.split(",").forEach(e=>{t[e.trim()]=!0}),t}return void 0!==e&&console.warn(`expandResponses must be a string but received value "${e}" of type ${typeof e}`),{}}static normalizeHideHostname(e){return!!e}static normalizeScrollYOffset(e){if("string"==typeof e&&!x(e)){let t=p(e);t||console.warn("scrollYOffset value is a selector to non-existing element. Using offset 0 by default");let r=t&&t.getBoundingClientRect().bottom||0;return()=>r}return"number"==typeof e||x(e)?()=>"number"==typeof e?e:parseFloat(e):"function"==typeof e?()=>{let t=e();return"number"!=typeof t&&console.warn(`scrollYOffset should return number but returned value "${t}" of type ${typeof t}`),t}:(void 0!==e&&console.warn("Wrong value for scrollYOffset ReDoc option: should be string, number or function"),()=>0)}static normalizeShowExtensions(e){if(void 0===e)return!1;if(""===e)return!0;if("string"!=typeof e)return e;switch(e){case"true":return!0;case"false":return!1;default:return e.split(",").map(e=>e.trim())}}static normalizeSideNavStyle(e){let t=D.SummaryOnly;if("string"!=typeof e)return t;switch(e){case t:return e;case D.PathOnly:return D.PathOnly;case D.IdOnly:return D.IdOnly;default:return t}}static normalizePayloadSampleIdx(e){return"number"==typeof e?Math.max(0,e):"string"==typeof e&&isFinite(e)?parseInt(e,10):0}static normalizeJsonSampleExpandLevel(e){return"all"===e?1/0:isNaN(Number(e))?2:Math.ceil(Number(e))}static normalizeGeneratedPayloadSamplesMaxDepth(e){return isNaN(Number(e))?10:Math.max(0,Number(e))}constructor(e,t={}){var r,n,i,o,s;let a=(e=W(W({},t),e)).theme&&e.theme.extensionsHook;(null==(r=e.theme)?void 0:r.menu)&&!(null==(n=e.theme)?void 0:n.sidebar)&&(console.warn('Theme setting "menu" is deprecated. Rename to "sidebar"'),e.theme.sidebar=e.theme.menu),(null==(i=e.theme)?void 0:i.codeSample)&&!(null==(o=e.theme)?void 0:o.codeBlock)&&(console.warn('Theme setting "codeSample" is deprecated. Rename to "codeBlock"'),e.theme.codeBlock=e.theme.codeSample),this.theme=function(e){let t={},r=0,n=(i,o)=>{Object.keys(i).forEach(s=>{let a=(o?o+".":"")+s,l=i[s];"function"==typeof l?Object.defineProperty(i,s,{get(){if(!t[a]){if(++r>1e3)throw Error(`Theme probably contains circular dependency at ${a}: ${l.toString()}`);t[a]=l(e)}return t[a]},enumerable:!0}):"object"==typeof l&&n(l,a)})};return n(e,""),JSON.parse(JSON.stringify(e))}(w({},l,M(W({},e.theme),F({extensionsHook:void 0})))),this.theme.extensionsHook=a,Object.assign(L,e.labels),this.scrollYOffset=J.normalizeScrollYOffset(e.scrollYOffset),this.hideHostname=J.normalizeHideHostname(e.hideHostname),this.expandResponses=J.normalizeExpandResponses(e.expandResponses),this.requiredPropsFirst=V(e.requiredPropsFirst),this.sortPropsAlphabetically=V(e.sortPropsAlphabetically),this.sortEnumValuesAlphabetically=V(e.sortEnumValuesAlphabetically),this.sortOperationsAlphabetically=V(e.sortOperationsAlphabetically),this.sortTagsAlphabetically=V(e.sortTagsAlphabetically),this.nativeScrollbars=V(e.nativeScrollbars),this.pathInMiddlePanel=V(e.pathInMiddlePanel),this.untrustedSpec=V(e.untrustedSpec),this.hideDownloadButton=V(e.hideDownloadButton),this.downloadFileName=e.downloadFileName,this.downloadDefinitionUrl=e.downloadDefinitionUrl,this.disableSearch=V(e.disableSearch),this.onlyRequiredInSamples=V(e.onlyRequiredInSamples),this.showExtensions=J.normalizeShowExtensions(e.showExtensions),this.sideNavStyle=J.normalizeSideNavStyle(e.sideNavStyle),this.hideSingleRequestSampleTab=V(e.hideSingleRequestSampleTab),this.hideRequestPayloadSample=V(e.hideRequestPayloadSample),this.menuToggle=V(e.menuToggle,!0),this.jsonSampleExpandLevel=J.normalizeJsonSampleExpandLevel(e.jsonSampleExpandLevel),this.enumSkipQuotes=V(e.enumSkipQuotes),this.hideSchemaTitles=V(e.hideSchemaTitles),this.simpleOneOfTypeLabel=V(e.simpleOneOfTypeLabel),this.payloadSampleIdx=J.normalizePayloadSampleIdx(e.payloadSampleIdx),this.expandSingleSchemaField=V(e.expandSingleSchemaField),this.schemaExpansionLevel=function(e,t=0){return"all"===e?1/0:H(e)||t}(e.schemaExpansionLevel),this.showObjectSchemaExamples=V(e.showObjectSchemaExamples),this.showSecuritySchemeType=V(e.showSecuritySchemeType),this.hideSecuritySection=V(e.hideSecuritySection),this.unstable_ignoreMimeParameters=V(e.unstable_ignoreMimeParameters),this.allowedMdComponents=e.allowedMdComponents||{},this.expandDefaultServerVariables=V(e.expandDefaultServerVariables),this.maxDisplayedEnumValues=H(e.maxDisplayedEnumValues);let c=_(e.ignoreNamedSchemas)?e.ignoreNamedSchemas:null==(s=e.ignoreNamedSchemas)?void 0:s.split(",").map(e=>e.trim());this.ignoreNamedSchemas=new Set(c),this.hideSchemaPattern=V(e.hideSchemaPattern),this.generatedPayloadSamplesMaxDepth=J.normalizeGeneratedPayloadSamplesMaxDepth(e.generatedPayloadSamplesMaxDepth),this.nonce=e.nonce,this.hideFab=V(e.hideFab),this.minCharacterLengthToInitSearch=H(e.minCharacterLengthToInitSearch)||3,this.showWebhookVerb=V(e.showWebhookVerb)}}var Y=r(88362),Z=n.n(Y);let{default:G,css:X,createGlobalStyle:K,keyframes:ee,ThemeProvider:et}=Y,er={lessThan:(e,t,r)=>(...n)=>X`
      @media ${t?"print, ":""} screen and (max-width: ${t=>t.theme.breakpoints[e]}) ${r||""} {
        ${X(...n)};
      }
    `,greaterThan:e=>(...t)=>X`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) {
        ${X(...t)};
      }
    `,between:(e,t)=>(...r)=>X`
      @media (min-width: ${t=>t.theme.breakpoints[e]}) and (max-width: ${e=>e.theme.breakpoints[t]}) {
        ${X(...r)};
      }
    `};var en=G;function ei(e){return t=>{if(t.theme.extensionsHook)return t.theme.extensionsHook(e,t)}}let eo=en.div`
  padding: 20px;
  color: red;
`;class es extends s.Component{constructor(e){super(e),this.state={error:void 0}}componentDidCatch(e){return this.setState({error:e}),!1}render(){return this.state.error?s.createElement(eo,null,s.createElement("h1",null,"Something went wrong..."),s.createElement("small",null," ",this.state.error.message," "),s.createElement("p",null,s.createElement("details",null,s.createElement("summary",null,"Stack trace"),s.createElement("pre",null,this.state.error.stack))),s.createElement("small",null," ReDoc Version: ","2.1.4")," ",s.createElement("br",null),s.createElement("small",null," Commit: ","a661320")):s.createElement(s.Fragment,null,s.Children.only(this.props.children))}}let ea=ee`
  0% {
    transform: rotate(0deg); }
  100% {
    transform: rotate(360deg);
  }
`,el=en(e=>s.createElement("svg",{className:e.className,version:"1.1",width:"512",height:"512",viewBox:"0 0 512 512"},s.createElement("path",{d:"M275.682 147.999c0 10.864-8.837 19.661-19.682 19.661v0c-10.875 0-19.681-8.796-19.681-19.661v-96.635c0-10.885 8.806-19.661 19.681-19.661v0c10.844 0 19.682 8.776 19.682 19.661v96.635z"}),s.createElement("path",{d:"M275.682 460.615c0 10.865-8.837 19.682-19.682 19.682v0c-10.875 0-19.681-8.817-19.681-19.682v-96.604c0-10.885 8.806-19.681 19.681-19.681v0c10.844 0 19.682 8.796 19.682 19.682v96.604z"}),s.createElement("path",{d:"M147.978 236.339c10.885 0 19.681 8.755 19.681 19.641v0c0 10.885-8.796 19.702-19.681 19.702h-96.624c-10.864 0-19.661-8.817-19.661-19.702v0c0-10.885 8.796-19.641 19.661-19.641h96.624z"}),s.createElement("path",{d:"M460.615 236.339c10.865 0 19.682 8.755 19.682 19.641v0c0 10.885-8.817 19.702-19.682 19.702h-96.584c-10.885 0-19.722-8.817-19.722-19.702v0c0-10.885 8.837-19.641 19.722-19.641h96.584z"}),s.createElement("path",{d:"M193.546 165.703c7.69 7.66 7.68 20.142 0 27.822v0c-7.701 7.701-20.162 7.701-27.853 0.020l-68.311-68.322c-7.68-7.701-7.68-20.142 0-27.863v0c7.68-7.68 20.121-7.68 27.822 0l68.342 68.342z"}),s.createElement("path",{d:"M414.597 386.775c7.7 7.68 7.7 20.163 0.021 27.863v0c-7.7 7.659-20.142 7.659-27.843-0.062l-68.311-68.26c-7.68-7.7-7.68-20.204 0-27.863v0c7.68-7.7 20.163-7.7 27.842 0l68.291 68.322z"}),s.createElement("path",{d:"M165.694 318.464c7.69-7.7 20.153-7.7 27.853 0v0c7.68 7.659 7.69 20.163 0 27.863l-68.342 68.322c-7.67 7.659-20.142 7.659-27.822-0.062v0c-7.68-7.68-7.68-20.122 0-27.801l68.311-68.322z"}),s.createElement("path",{d:"M386.775 97.362c7.7-7.68 20.142-7.68 27.822 0v0c7.7 7.68 7.7 20.183 0.021 27.863l-68.322 68.311c-7.68 7.68-20.163 7.68-27.843-0.020v0c-7.68-7.68-7.68-20.162 0-27.822l68.322-68.332z"})))`
  animation: 2s ${ea} linear infinite;
  width: 50px;
  height: 50px;
  content: '';
  display: inline-block;
  margin-left: -25px;

  path {
    fill: ${e=>e.color};
  }
`,ec=en.div`
  font-family: helvetica, sans;
  width: 100%;
  text-align: center;
  font-size: 25px;
  margin: 30px 0 20px 0;
  color: ${e=>e.color};
`;class ep extends s.PureComponent{render(){return s.createElement("div",{style:{textAlign:"center"}},s.createElement(ec,{color:this.props.color},"Loading ..."),s.createElement(el,{color:this.props.color}))}}var eu=r(39519);let ed=s.createContext(new J({})),eh=ed.Provider,em=ed.Consumer;var ef=r(36808),eg=r(31647),ey=r(7131),eb=n(925),ex=(e,t,r)=>new Promise((n,i)=>{var o=e=>{try{a(r.next(e))}catch(e){i(e)}},s=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())});function ev(e){return ex(this,null,function*(){let t=new ey.Config({}),r={config:t,base:c?window.location.href:i.cwd()};c&&(t.resolve.http.customFetch=n.g.fetch),"object"==typeof e&&null!==e?r.doc={source:{absoluteRef:""},parsed:e}:r.ref=e;let{bundle:{parsed:o}}=yield(0,eg.bundle)(r);return void 0!==o.swagger?ew(o):o})}function ew(e){return console.warn("[ReDoc Compatibility mode]: Converting OpenAPI 2.0 to OpenAPI 3.0"),new Promise((t,r)=>(0,eb.convertObj)(e,{patch:!0,warnOnly:!0,text:"{}",anchors:!0},(e,n)=>{if(e)return r(e);t(n&&n.openapi)}))}var ek=r(18321),eE=r(44057),eO=r(62507);let ej=eO.parse;class e${static baseName(e,t=1){let r=e$.parse(e);return r[r.length-t]}static dirName(e,t=1){let r=e$.parse(e);return eO.compile(r.slice(0,r.length-t))}static relative(e,t){let r=e$.parse(e);return e$.parse(t).slice(r.length)}static parse(e){let t=e;return"#"===t.charAt(0)&&(t=t.substring(1)),ej(t)}static join(e,t){let r=e$.parse(e).concat(t);return eO.compile(r)}static get(e,t){return eO.get(e,t)}static compile(e){return eO.compile(e)}static escape(e){return eO.escape(e)}}eO.parse=e$.parse,Object.assign(e$,eO);var eS=n(470),eC=r(96132),eA=Object.defineProperty,eP=Object.defineProperties,eI=Object.getOwnPropertyDescriptors,eT=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,eR=Object.prototype.propertyIsEnumerable,eL=(e,t,r)=>t in e?eA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ez=(e,t)=>{for(var r in t||(t={}))e_.call(t,r)&&eL(e,r,t[r]);if(eT)for(var r of eT(t))eR.call(t,r)&&eL(e,r,t[r]);return e},eD=(e,t)=>eP(e,eI(t));function eN(e){return"string"==typeof e&&/\dxx/i.test(e)}function eM(e){return"default"===e||x(e)||eN(e)}function eF(e,t=!1){if("default"===e)return t?"error":"success";let r="string"==typeof e?parseInt(e,10):e;if(eN(e)&&(r*=100),r<100||r>599)throw Error("invalid HTTP code");let n="success";return r>=300&&r<400?n="redirect":r>=400?n="error":r<200&&(n="info"),n}let eq={get:!0,post:!0,put:!0,head:!0,patch:!0,delete:!0,options:!0,$ref:!0};function eB(e){return e in eq}function eQ(e){return e.summary||e.operationId||e.description&&e.description.substring(0,50)||e.pathName||"<no summary>"}let eU={multipleOf:"number",maximum:"number",exclusiveMaximum:"number",minimum:"number",exclusiveMinimum:"number",maxLength:"string",minLength:"string",pattern:"string",contentEncoding:"string",contentMediaType:"string",items:"array",maxItems:"array",minItems:"array",uniqueItems:"array",maxProperties:"object",minProperties:"object",required:"object",additionalProperties:"object",unevaluatedProperties:"object",properties:"object",patternProperties:"object"};function eW(e){if(void 0!==e.type&&!_(e.type))return e.type;for(let t of Object.keys(eU)){let r=eU[t];if(void 0!==e[t])return r}return"any"}function eV(e,t=e.type){if(e["x-circular-ref"])return!0;if(void 0!==e.oneOf||void 0!==e.anyOf||e.if&&e.then||e.if&&e.else)return!1;let r=!0,n=_(t);return("object"===t||n&&(null==t?void 0:t.includes("object")))&&(r=void 0!==e.properties?0===Object.keys(e.properties).length:void 0===e.additionalProperties&&void 0===e.unevaluatedProperties&&void 0===e.patternProperties),!_(e.items)&&!_(e.prefixItems)&&(void 0!==e.items&&!R(e.items)&&("array"===t||n&&(null==t?void 0:t.includes("array")))&&(r=eV(e.items,e.items.type)),r)}function eH(e){return -1!==e.search(/json/i)}function eJ(e){return"application/x-www-form-urlencoded"===e}function eY(e,t,r){return _(e)?e.map(e=>e.toString()).join(r):"object"==typeof e?Object.keys(e).map(t=>`${t}${r}${e[t]}`).join(r):t+"="+e.toString()}function eZ(e,t){return _(e)?(console.warn("deepObject style cannot be used with array value:"+e.toString()),""):"object"==typeof e?Object.keys(e).map(r=>`${t}[${r}]=${e[r]}`).join("&"):(console.warn("deepObject style cannot be used with non-object value:"+e.toString()),"")}function eG(e,t,r){let n="__redoc_param_name__";return eC.parse(`{?${n}${t?"*":""}}`).expand({[n]:r}).substring(1).replace(/__redoc_param_name__/g,e)}function eX(e,t={}){if(_(e))throw Error("Payload must have fields: "+e.toString());return Object.keys(e).map(r=>{let n=e[r],{style:i="form",explode:o=!0}=t[r]||{};switch(i){case"form":return eG(r,o,n);case"spaceDelimited":return eY(n,r,"%20");case"pipeDelimited":return eY(n,r,"|");case"deepObject":return eZ(n,r);default:return console.warn("Incorrect or unsupported encoding style: "+i),""}}).join("&")}function eK(e,t){return eH(t)?JSON.stringify(e):(console.warn(`Parameter serialization as ${t} is not supported`),"")}function e0(e,t){let{name:r,style:n,explode:i=!1,serializationMime:o}=e;if(o)switch(e.in){case"path":case"header":return eK(t,o);case"cookie":case"query":return`${r}=${eK(t,o)}`;default:return console.warn("Unexpected parameter location: "+e.in),""}if(!n)return console.warn(`Missing style attribute or content for parameter ${r}`),"";switch(e.in){case"path":return function(e,t,r,n){let i="";"label"===t?i=".":"matrix"===t&&(i=";");let o="__redoc_param_name__";return eC.parse(`{${i}${o}${r?"*":""}}`).expand({[o]:n}).replace(/__redoc_param_name__/g,e)}(r,n,i,t);case"query":return function(e,t,r,n){switch(t){case"form":return eG(e,r,n);case"spaceDelimited":return _(n)?r?eG(e,r,n):`${e}=${n.join("%20")}`:(console.warn("The style spaceDelimited is only applicable to arrays"),"");case"pipeDelimited":return _(n)?r?eG(e,r,n):`${e}=${n.join("|")}`:(console.warn("The style pipeDelimited is only applicable to arrays"),"");case"deepObject":return!r||_(n)||"object"!=typeof n?(console.warn("The style deepObject is only applicable for objects with explode=true"),""):eZ(n,e);default:return console.warn("Unexpected style for query: "+t),""}}(r,n,i,t);case"header":return function(e,t,r){if("simple"===e){let e="__redoc_param_name__";return decodeURIComponent(eC.parse(`{${e}${t?"*":""}}`).expand({[e]:r}))}return console.warn("Unexpected style for header: "+e),""}(n,i,t);case"cookie":return"form"===n?eG(r,i,t):(console.warn("Unexpected style for cookie: "+n),"");default:return console.warn("Unexpected parameter location: "+e.in),""}}function e1(e,t){return e.in?decodeURIComponent(e0(e,t)):String(t)}function e2(e){return -1!==e.search(/xml/i)?"xml":-1!==e.search(/csv/i)?"csv":-1!==e.search(/plain/i)?"tex":"clike"}let e6=/^#\/components\/(schemas|pathItems)\/([^/]+)$/;function e3(e){return e6.test(e||"")}function e5(e){var t;let[r]=(null==(t=null==e?void 0:e.match(e6))?void 0:t.reverse())||[];return r}function e8(e,t,r){let n;return void 0!==t&&void 0!==r?n=t===r?`= ${t} ${e}`:`[ ${t} .. ${r} ] ${e}`:void 0!==r?n=`<= ${r} ${e}`:void 0!==t&&(n=1===t?"non-empty":`>= ${t} ${e}`),n}function e4(e){var t,r;let n="number"==typeof e.exclusiveMinimum?Math.min(e.exclusiveMinimum,null!=(t=e.minimum)?t:1/0):e.minimum,i="number"==typeof e.exclusiveMaximum?Math.max(e.exclusiveMaximum,null!=(r=e.maximum)?r:-1/0):e.maximum,o="number"==typeof e.exclusiveMinimum||e.exclusiveMinimum,s="number"==typeof e.exclusiveMaximum||e.exclusiveMaximum;return void 0!==n&&void 0!==i?`${o?"( ":"[ "}${n} .. ${i}${s?" )":" ]"}`:void 0!==i?`${s?"< ":"<= "}${i}`:void 0!==n?`${o?"> ":">= "}${n}`:void 0}function e9(e){let t=[],r=e8("characters",e.minLength,e.maxLength);void 0!==r&&t.push(r);let n=e8("items",e.minItems,e.maxItems);void 0!==n&&t.push(n);let i=e8("properties",e.minProperties,e.maxProperties);void 0!==i&&t.push(i);let o=function(e){if(void 0===e)return;let t=e.toString(10);return/^0\.0*1$/.test(t)?`decimal places <= ${t.split(".")[1].length}`:`multiple of ${t}`}(e.multipleOf);void 0!==o&&t.push(o);let s=e4(e);return void 0!==s&&t.push(s),e.uniqueItems&&t.push("unique"),t}function e7(e,t=[]){let r=[],n=[],i=[];return e.forEach(e=>{e.required?t.includes(e.name)?n.push(e):i.push(e):r.push(e)}),n.sort((e,r)=>t.indexOf(e.name)-t.indexOf(r.name)),[...n,...i,...r]}function te(e,t){return[...e].sort((e,r)=>e[t].localeCompare(r[t]))}function tt(e,t=[],r=[]){let n={};return r.forEach(t=>{({resolved:t}=e.deref(t)),n[t.name+"_"+t.in]=!0}),(t=t.filter(t=>({resolved:t}=e.deref(t),!n[t.name+"_"+t.in]))).concat(r)}function tr(e){let t={};return Object.keys(e).forEach(r=>{let n=e[r],i=r.split(";")[0].trim();t[i]?t[i]=ez(ez({},t[i]),n):t[i]=n}),t}function tn(e,t={}){return e.replace(/(?:{)([\w-.]+)(?:})/g,(e,r)=>t[r]&&t[r].default||e)}function ti(e,t){let r=void 0===e?A((()=>{if(!c)return"";let e=window.location.href;return e.endsWith(".html")?(0,eS.dirname)(e):e})()):(0,eS.dirname)(e);return 0===t.length&&(t=[{url:"/"}]),t.map(e=>eD(ez({},e),{url:$(r,e.url),description:e.description||""}))}let to="SecurityDefinitions",ts="security-definitions",ta="SchemaDefinition",tl="section/Authentication/";function tc(e){tl=e}let tp=e=>({delete:"del",options:"opts"})[e]||e;function tu(e){return e in{"x-circular-ref":!0,"x-parentRefs":!0,"x-refsStack":!0,"x-code-samples":!0,"x-codeSamples":!0,"x-displayName":!0,"x-examples":!0,"x-ignoredHeaderParameters":!0,"x-logo":!0,"x-nullable":!0,"x-servers":!0,"x-tagGroups":!0,"x-traitTag":!0,"x-additionalPropertiesName":!0,"x-explicitMappingOnly":!0}}function td(e,t){return Object.keys(e).filter(e=>!0===t?e.startsWith("x-")&&!tu(e):e.startsWith("x-")&&t.indexOf(e)>-1).reduce((t,r)=>(t[r]=e[r],t),{})}function th(e){return e.split(" or ").map(e=>e.replace(/^(string|object|number|integer|array|boolean)s?( ?.*)/,"$1s$2")).join(" or ")}function tm(e){let t=e.content,r=e["x-examples"],n=e["x-example"];if(r)for(let e of(t=ez({},t),Object.keys(r))){let n=r[e];t[e]=eD(ez({},t[e]),{examples:n})}else if(n)for(let e of(t=ez({},t),Object.keys(n))){let r=n[e];t[e]=eD(ez({},t[e]),{example:r})}return t}var tf=r(56512);r(11911),r(95407),r(39213),r(59621),r(46800),r(38407),r(33729),r(43734),r(11422),r(16584),r(83715),r(12331),r(46160),r(90281),r(7644),r(61525),r(11086),r(61017),r(59743),r(94403),r(40829),r(44094),r(57993);let tg="clike";function ty(e){return({json:"js","c++":"cpp","c#":"csharp","objective-c":"objectivec",shell:"bash",viml:"vim"})[e]||tg}function tb(e,t=tg){t=t.toLowerCase();let r=tf.languages[t];return r||(r=tf.languages[ty(t)]),tf.highlight(e.toString(),r,t)}function tx(e){return(t,r,n)=>{n.value=function(e,t){let r,n,i,o=null,s=0,a=()=>{s=(new Date).getTime(),o=null,i=e.apply(r,n),o||(r=n=null)};return function(){let l=(new Date).getTime(),c=t-(l-s);return r=this,n=arguments,c<=0||c>t?(o&&(clearTimeout(o),o=null),s=l,i=e.apply(r,n),o||(r=n=null)):o||(o=setTimeout(a,c)),i}}(n.value,e)}}function tv(e){}function tw(e){}tf.languages.insertBefore("javascript","string",{"property string":{pattern:/([{,]\s*)"(?:\\.|[^\\"\r\n])*"(?=\s*:)/i,lookbehind:!0}},void 0),tf.languages.insertBefore("javascript","punctuation",{property:{pattern:/([{,]\s*)[a-z]\w*(?=\s*:)/i,lookbehind:!0}},void 0);var tk=Object.defineProperty,tE=Object.defineProperties,tO=Object.getOwnPropertyDescriptors,tj=Object.getOwnPropertySymbols,t$=Object.prototype.hasOwnProperty,tS=Object.prototype.propertyIsEnumerable,tC=(e,t,r)=>t in e?tk(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,tA=(e,t)=>{for(var r in t||(t={}))t$.call(t,r)&&tC(e,r,t[r]);if(tj)for(var r of tj(t))tS.call(t,r)&&tC(e,r,t[r]);return e},tP=(e,t)=>tE(e,tO(t));let tI={};function tT(e,t,r){if("function"==typeof r.value)return function(e,t,r){if(!r.value||r.value.length>0)throw Error("@memoize decorator can only be applied to methods of zero arguments");let n=`_memoized_${t}`,i=r.value;return e[n]=tI,tP(tA({},r),{value(){return this[n]===tI&&(this[n]=i.call(this)),this[n]}})}(e,t,r);if("function"==typeof r.get)return function(e,t,r){let n=`_memoized_${t}`,i=r.get;return e[n]=tI,tP(tA({},r),{get(){return this[n]===tI&&(this[n]=i.call(this)),this[n]}})}(e,t,r);throw Error("@memoize decorator can be applied to methods or getters, got "+String(r.value)+" instead")}function t_(e){let t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),(r,n)=>-1==t?n[e].localeCompare(r[e]):r[e].localeCompare(n[e])}var tR=Object.defineProperty,tL=Object.getOwnPropertyDescriptor;let tz="hashchange";class tD{constructor(){this.emit=()=>{this._emiter.emit(tz,this.currentId)},this._emiter=new eE.EventEmitter,this.bind()}get currentId(){return c?decodeURIComponent(window.location.hash.substring(1)):""}linkForId(e){return e?"#"+e:""}subscribe(e){let t=this._emiter.addListener(tz,e);return()=>t.removeListener(tz,e)}bind(){c&&window.addEventListener("hashchange",this.emit,!1)}dispose(){c&&window.removeEventListener("hashchange",this.emit)}replace(e,t=!1){c&&null!=e&&e!==this.currentId&&(t?window.history.replaceState(null,"",window.location.href.split("#")[0]+this.linkForId(e)):(window.history.pushState(null,"",window.location.href.split("#")[0]+this.linkForId(e)),this.emit()))}}((e,t,r,n)=>{for(var i,o=tL(t,r),s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(t,r,o)||o);o&&tR(t,r,o)})([ek.bind,ek.debounce],tD.prototype,"replace");let tN=new tD;var tM=r(19678);class tF{constructor(){this.map=new Map,this.prevTerm=""}add(e){this.map.set(e,new tM(e))}delete(e){this.map.delete(e)}addOnly(e){for(let t of(this.map.forEach((t,r)=>{-1===e.indexOf(r)&&(t.unmark(),this.map.delete(r))}),e))this.map.has(t)||this.map.set(t,new tM(t))}clearAll(){this.unmark(),this.map.clear()}mark(e){(e||this.prevTerm)&&(this.map.forEach(t=>{t.unmark(),t.mark(e||this.prevTerm)}),this.prevTerm=e||this.prevTerm)}unmark(){this.map.forEach(e=>e.unmark()),this.prevTerm=""}}let tq={async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1},tB=/[&<>"']/,tQ=RegExp(tB.source,"g"),tU=/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,tW=RegExp(tU.source,"g"),tV={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tH=e=>tV[e];function tJ(e,t){if(t){if(tB.test(e))return e.replace(tQ,tH)}else if(tU.test(e))return e.replace(tW,tH);return e}let tY=/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;function tZ(e){return e.replace(tY,(e,t)=>"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):"")}let tG=/(^|[^\[])\^/g;function tX(e,t){e="string"==typeof e?e:e.source,t=t||"";let r={replace:(t,n)=>(n=(n=n.source||n).replace(tG,"$1"),e=e.replace(t,n),r),getRegex:()=>new RegExp(e,t)};return r}let tK=/[^\w:]/g,t0=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function t1(e,t,r){if(e){let e;try{e=decodeURIComponent(tZ(r)).replace(tK,"").toLowerCase()}catch(e){return null}if(0===e.indexOf("javascript:")||0===e.indexOf("vbscript:")||0===e.indexOf("data:"))return null}t&&!t0.test(r)&&(r=function(e,t){t2[" "+e]||(t6.test(e)?t2[" "+e]=e+"/":t2[" "+e]=t9(e,"/",!0));let r=-1===(e=t2[" "+e]).indexOf(":");return"//"===t.substring(0,2)?r?t:e.replace(t3,"$1")+t:"/"===t.charAt(0)?r?t:e.replace(t5,"$1")+t:e+t}(t,r));try{r=encodeURI(r).replace(/%25/g,"%")}catch(e){return null}return r}let t2={},t6=/^[^:]+:\/*[^/]*$/,t3=/^([^:]+:)[\s\S]*$/,t5=/^([^:]+:\/*[^/]*)[\s\S]*$/,t8={exec:function(){}};function t4(e,t){let r=e.replace(/\|/g,(e,t,r)=>{let n=!1,i=t;for(;--i>=0&&"\\"===r[i];)n=!n;return n?"|":" |"}).split(/ \|/),n=0;if(r[0].trim()||r.shift(),r.length>0&&!r[r.length-1].trim()&&r.pop(),r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;n<r.length;n++)r[n]=r[n].trim().replace(/\\\|/g,"|");return r}function t9(e,t,r){let n=e.length;if(0===n)return"";let i=0;for(;i<n;){let o=e.charAt(n-i-1);if(o!==t||r){if(o===t||!r)break;i++}else i++}return e.slice(0,n-i)}function t7(e,t){if(t<1)return"";let r="";for(;t>1;)1&t&&(r+=e),t>>=1,e+=e;return r+e}function re(e,t,r,n){let i=t.href,o=t.title?tJ(t.title):null,s=e[1].replace(/\\([\[\]])/g,"$1");if("!"!==e[0].charAt(0)){n.state.inLink=!0;let e={type:"link",raw:r,href:i,title:o,text:s,tokens:n.inlineTokens(s)};return n.state.inLink=!1,e}return{type:"image",raw:r,href:i,title:o,text:tJ(s)}}class rt{constructor(e){this.options=e||tq}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=t[0].replace(/^ {1,4}/gm,"");return{type:"code",raw:t[0],codeBlockStyle:"indented",text:this.options.pedantic?e:t9(e,"\n")}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],r=function(e,t){let r=e.match(/^(\s+)(?:```)/);if(null===r)return t;let n=r[1];return t.split("\n").map(e=>{let t=e.match(/^\s+/);if(null===t)return e;let[r]=t;return r.length>=n.length?e.slice(n.length):e}).join("\n")}(e,t[3]||"");return{type:"code",raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline._escapes,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(/#$/.test(e)){let t=t9(e,"#");this.options.pedantic?e=t.trim():t&&!/ $/.test(t)||(e=t.trim())}return{type:"heading",raw:t[0],depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:t[0]}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=t[0].replace(/^ *>[ \t]?/gm,""),r=this.lexer.state.top;this.lexer.state.top=!0;let n=this.lexer.blockTokens(e);return this.lexer.state.top=r,{type:"blockquote",raw:t[0],tokens:n,text:e}}}list(e){let t=this.rules.block.list.exec(e);if(t){let r,n,i,o,s,a,l,c,p,u,d,h,m=t[1].trim(),f=m.length>1,g={type:"list",raw:"",ordered:f,start:f?+m.slice(0,-1):"",loose:!1,items:[]};m=f?`\\d{1,9}\\${m.slice(-1)}`:`\\${m}`,this.options.pedantic&&(m=f?m:"[*+-]");let y=RegExp(`^( {0,3}${m})((?:[	 ][^\\n]*)?(?:\\n|$))`);for(;e&&(h=!1,t=y.exec(e))&&!this.rules.block.hr.test(e);){if(r=t[0],e=e.substring(r.length),c=t[2].split("\n",1)[0].replace(/^\t+/,e=>" ".repeat(3*e.length)),p=e.split("\n",1)[0],this.options.pedantic?(o=2,d=c.trimLeft()):(o=(o=t[2].search(/[^ ]/))>4?1:o,d=c.slice(o),o+=t[1].length),a=!1,!c&&/^ *$/.test(p)&&(r+=p+"\n",e=e.substring(p.length+1),h=!0),!h){let t=RegExp(`^ {0,${Math.min(3,o-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`),n=RegExp(`^ {0,${Math.min(3,o-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),i=RegExp(`^ {0,${Math.min(3,o-1)}}(?:\`\`\`|~~~)`),s=RegExp(`^ {0,${Math.min(3,o-1)}}#`);for(;e&&(p=u=e.split("\n",1)[0],this.options.pedantic&&(p=p.replace(/^ {1,4}(?=( {4})*[^ ])/g,"  ")),!i.test(p))&&!s.test(p)&&!t.test(p)&&!n.test(e);){if(p.search(/[^ ]/)>=o||!p.trim())d+="\n"+p.slice(o);else{if(a||c.search(/[^ ]/)>=4||i.test(c)||s.test(c)||n.test(c))break;d+="\n"+p}a||p.trim()||(a=!0),r+=u+"\n",e=e.substring(u.length+1),c=p.slice(o)}}g.loose||(l?g.loose=!0:/\n *\n *$/.test(r)&&(l=!0)),this.options.gfm&&(n=/^\[[ xX]\] /.exec(d))&&(i="[ ] "!==n[0],d=d.replace(/^\[[ xX]\] +/,"")),g.items.push({type:"list_item",raw:r,task:!!n,checked:i,loose:!1,text:d}),g.raw+=r}g.items[g.items.length-1].raw=r.trimRight(),g.items[g.items.length-1].text=d.trimRight(),g.raw=g.raw.trimRight();let b=g.items.length;for(s=0;s<b;s++)if(this.lexer.state.top=!1,g.items[s].tokens=this.lexer.blockTokens(g.items[s].text,[]),!g.loose){let e=g.items[s].tokens.filter(e=>"space"===e.type),t=e.length>0&&e.some(e=>/\n.*\n/.test(e.raw));g.loose=t}if(g.loose)for(s=0;s<b;s++)g.items[s].loose=!0;return g}}html(e){let t=this.rules.block.html.exec(e);if(t){let e={type:"html",raw:t[0],pre:!this.options.sanitizer&&("pre"===t[1]||"script"===t[1]||"style"===t[1]),text:t[0]};if(this.options.sanitize){let r=this.options.sanitizer?this.options.sanitizer(t[0]):tJ(t[0]);e.type="paragraph",e.text=r,e.tokens=this.lexer.inline(r)}return e}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(/\s+/g," "),r=t[2]?t[2].replace(/^<(.*)>$/,"$1").replace(this.rules.inline._escapes,"$1"):"",n=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline._escapes,"$1"):t[3];return{type:"def",tag:e,raw:t[0],href:r,title:n}}}table(e){let t=this.rules.block.table.exec(e);if(t){let e={type:"table",header:t4(t[1]).map(e=>({text:e})),align:t[2].replace(/^ *|\| *$/g,"").split(/ *\| */),rows:t[3]&&t[3].trim()?t[3].replace(/\n[ \t]*$/,"").split("\n"):[]};if(e.header.length===e.align.length){e.raw=t[0];let r,n,i,o,s=e.align.length;for(r=0;r<s;r++)/^ *-+: *$/.test(e.align[r])?e.align[r]="right":/^ *:-+: *$/.test(e.align[r])?e.align[r]="center":/^ *:-+ *$/.test(e.align[r])?e.align[r]="left":e.align[r]=null;for(s=e.rows.length,r=0;r<s;r++)e.rows[r]=t4(e.rows[r],e.header.length).map(e=>({text:e}));for(s=e.header.length,n=0;n<s;n++)e.header[n].tokens=this.lexer.inline(e.header[n].text);for(s=e.rows.length,n=0;n<s;n++)for(o=e.rows[n],i=0;i<o.length;i++)o[i].tokens=this.lexer.inline(o[i].text);return e}}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t)return{type:"heading",raw:t[0],depth:"="===t[2].charAt(0)?1:2,text:t[1],tokens:this.lexer.inline(t[1])}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e="\n"===t[1].charAt(t[1].length-1)?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:tJ(t[1])}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&/^<a /i.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&/^<\/a>/i.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&/^<(pre|code|kbd|script)(\s|>)/i.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&/^<\/(pre|code|kbd|script)(\s|>)/i.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:this.options.sanitize?"text":"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,text:this.options.sanitize?this.options.sanitizer?this.options.sanitizer(t[0]):tJ(t[0]):t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&/^</.test(e)){if(!/>$/.test(e))return;let t=t9(e.slice(0,-1),"\\");if((e.length-t.length)%2==0)return}else{let e=function(e,t){if(-1===e.indexOf(")"))return -1;let r=e.length,n=0,i=0;for(;i<r;i++)if("\\"===e[i])i++;else if("("===e[i])n++;else if(")"===e[i]&&--n<0)return i;return -1}(t[2],"()");if(e>-1){let r=(0===t[0].indexOf("!")?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,r).trim(),t[3]=""}}let r=t[2],n="";if(this.options.pedantic){let e=/^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r);e&&(r=e[1],n=e[3])}else n=t[3]?t[3].slice(1,-1):"";return r=r.trim(),/^</.test(r)&&(r=this.options.pedantic&&!/>$/.test(e)?r.slice(1):r.slice(1,-1)),re(t,{href:r?r.replace(this.rules.inline._escapes,"$1"):r,title:n?n.replace(this.rules.inline._escapes,"$1"):n},t[0],this.lexer)}}reflink(e,t){let r;if((r=this.rules.inline.reflink.exec(e))||(r=this.rules.inline.nolink.exec(e))){let e=(r[2]||r[1]).replace(/\s+/g," ");if(!(e=t[e.toLowerCase()])){let e=r[0].charAt(0);return{type:"text",raw:e,text:e}}return re(r,e,r[0],this.lexer)}}emStrong(e,t,r=""){let n=this.rules.inline.emStrong.lDelim.exec(e);if(!n||n[3]&&r.match(/[\p{L}\p{N}]/u))return;let i=n[1]||n[2]||"";if(!i||i&&(""===r||this.rules.inline.punctuation.exec(r))){let r=n[0].length-1,i,o,s=r,a=0,l="*"===n[0][0]?this.rules.inline.emStrong.rDelimAst:this.rules.inline.emStrong.rDelimUnd;for(l.lastIndex=0,t=t.slice(-1*e.length+r);null!=(n=l.exec(t));){if(!(i=n[1]||n[2]||n[3]||n[4]||n[5]||n[6]))continue;if(o=i.length,n[3]||n[4]){s+=o;continue}if((n[5]||n[6])&&r%3&&!((r+o)%3)){a+=o;continue}if((s-=o)>0)continue;o=Math.min(o,o+s+a);let t=e.slice(0,r+n.index+(n[0].length-i.length)+o);if(Math.min(r,o)%2){let e=t.slice(1,-1);return{type:"em",raw:t,text:e,tokens:this.lexer.inlineTokens(e)}}let l=t.slice(2,-2);return{type:"strong",raw:t,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(/\n/g," "),r=/[^ ]/.test(e),n=/^ /.test(e)&&/ $/.test(e);return r&&n&&(e=e.substring(1,e.length-1)),e=tJ(e,!0),{type:"codespan",raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e){let t=this.rules.inline.del.exec(e);if(t)return{type:"del",raw:t[0],text:t[2],tokens:this.lexer.inlineTokens(t[2])}}autolink(e,t){let r=this.rules.inline.autolink.exec(e);if(r){let e,n;return n="@"===r[2]?"mailto:"+(e=tJ(this.options.mangle?t(r[1]):r[1])):e=tJ(r[1]),{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}url(e,t){let r;if(r=this.rules.inline.url.exec(e)){let e,n;if("@"===r[2])n="mailto:"+(e=tJ(this.options.mangle?t(r[0]):r[0]));else{let t;do t=r[0],r[0]=this.rules.inline._backpedal.exec(r[0])[0];while(t!==r[0]);e=tJ(r[0]),n="www."===r[1]?"http://"+r[0]:r[0]}return{type:"link",raw:r[0],text:e,href:n,tokens:[{type:"text",raw:e,text:e}]}}}inlineText(e,t){let r=this.rules.inline.text.exec(e);if(r){let e;return e=this.lexer.state.inRawBlock?this.options.sanitize?this.options.sanitizer?this.options.sanitizer(r[0]):tJ(r[0]):r[0]:tJ(this.options.smartypants?t(r[0]):r[0]),{type:"text",raw:r[0],text:e}}}}let rr={newline:/^(?: *(?:\n|$))+/,code:/^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,fences:/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,hr:/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,heading:/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,html:"^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",def:/^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,table:t8,lheading:/^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,_paragraph:/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,text:/^[^\n]+/,_label:/(?!\s*\])(?:\\.|[^\[\]\\])+/,_title:/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/};rr.def=tX(rr.def).replace("label",rr._label).replace("title",rr._title).getRegex(),rr.bullet=/(?:[*+-]|\d{1,9}[.)])/,rr.listItemStart=tX(/^( *)(bull) */).replace("bull",rr.bullet).getRegex(),rr.list=tX(rr.list).replace(/bull/g,rr.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+rr.def.source+")").getRegex(),rr._tag="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",rr._comment=/<!--(?!-?>)[\s\S]*?(?:-->|$)/,rr.html=tX(rr.html,"i").replace("comment",rr._comment).replace("tag",rr._tag).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),rr.paragraph=tX(rr._paragraph).replace("hr",rr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rr._tag).getRegex(),rr.blockquote=tX(rr.blockquote).replace("paragraph",rr.paragraph).getRegex(),rr.normal={...rr},rr.gfm={...rr.normal,table:"^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"},rr.gfm.table=tX(rr.gfm.table).replace("hr",rr.hr).replace("heading"," {0,3}#{1,6} ").replace("blockquote"," {0,3}>").replace("code"," {4}[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rr._tag).getRegex(),rr.gfm.paragraph=tX(rr._paragraph).replace("hr",rr.hr).replace("heading"," {0,3}#{1,6} ").replace("|lheading","").replace("table",rr.gfm.table).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)]) ").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",rr._tag).getRegex(),rr.pedantic={...rr.normal,html:tX("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment",rr._comment).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:t8,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:tX(rr.normal._paragraph).replace("hr",rr.hr).replace("heading"," *#{1,6} *[^\n]").replace("lheading",rr.lheading).replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").getRegex()};let rn={escape:/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:t8,tag:"^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",link:/^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,reflink:/^!?\[(label)\]\[(ref)\]/,nolink:/^!?\[(ref)\](?:\[\])?/,reflinkSearch:"reflink|nolink(?!\\()",emStrong:{lDelim:/^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,rDelimAst:/^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,rDelimUnd:/^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/},code:/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,br:/^( {2,}|\\)\n(?!\s*$)/,del:t8,text:/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,punctuation:/^([\spunctuation])/};function ri(e){return e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…")}function ro(e){let t,r,n="",i=e.length;for(t=0;t<i;t++)r=e.charCodeAt(t),Math.random()>.5&&(r="x"+r.toString(16)),n+="&#"+r+";";return n}rn._punctuation="!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~",rn.punctuation=tX(rn.punctuation).replace(/punctuation/g,rn._punctuation).getRegex(),rn.blockSkip=/\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g,rn.escapedEmSt=/(?:^|[^\\])(?:\\\\)*\\[*_]/g,rn._comment=tX(rr._comment).replace("(?:-->|$)","-->").getRegex(),rn.emStrong.lDelim=tX(rn.emStrong.lDelim).replace(/punct/g,rn._punctuation).getRegex(),rn.emStrong.rDelimAst=tX(rn.emStrong.rDelimAst,"g").replace(/punct/g,rn._punctuation).getRegex(),rn.emStrong.rDelimUnd=tX(rn.emStrong.rDelimUnd,"g").replace(/punct/g,rn._punctuation).getRegex(),rn._escapes=/\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g,rn._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,rn._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,rn.autolink=tX(rn.autolink).replace("scheme",rn._scheme).replace("email",rn._email).getRegex(),rn._attribute=/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/,rn.tag=tX(rn.tag).replace("comment",rn._comment).replace("attribute",rn._attribute).getRegex(),rn._label=/(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/,rn._href=/<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/,rn._title=/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/,rn.link=tX(rn.link).replace("label",rn._label).replace("href",rn._href).replace("title",rn._title).getRegex(),rn.reflink=tX(rn.reflink).replace("label",rn._label).replace("ref",rr._label).getRegex(),rn.nolink=tX(rn.nolink).replace("ref",rr._label).getRegex(),rn.reflinkSearch=tX(rn.reflinkSearch,"g").replace("reflink",rn.reflink).replace("nolink",rn.nolink).getRegex(),rn.normal={...rn},rn.pedantic={...rn.normal,strong:{start:/^__|\*\*/,middle:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,endAst:/\*\*(?!\*)/g,endUnd:/__(?!_)/g},em:{start:/^_|\*/,middle:/^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,endAst:/\*(?!\*)/g,endUnd:/_(?!_)/g},link:tX(/^!?\[(label)\]\((.*?)\)/).replace("label",rn._label).getRegex(),reflink:tX(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",rn._label).getRegex()},rn.gfm={...rn.normal,escape:tX(rn.escape).replace("])","~|])").getRegex(),_extended_email:/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,url:/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,text:/^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/},rn.gfm.url=tX(rn.gfm.url,"i").replace("email",rn.gfm._extended_email).getRegex(),rn.breaks={...rn.gfm,br:tX(rn.br).replace("{2,}","*").getRegex(),text:tX(rn.gfm.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()};class rs{constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||tq,this.options.tokenizer=this.options.tokenizer||new rt,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let t={block:rr.normal,inline:rn.normal};this.options.pedantic?(t.block=rr.pedantic,t.inline=rn.pedantic):this.options.gfm&&(t.block=rr.gfm,this.options.breaks?t.inline=rn.breaks:t.inline=rn.gfm),this.tokenizer.rules=t}static get rules(){return{block:rr,inline:rn}}static lex(e,t){return new rs(t).lex(e)}static lexInline(e,t){return new rs(t).inlineTokens(e)}lex(e){let t;for(e=e.replace(/\r\n|\r/g,"\n"),this.blockTokens(e,this.tokens);t=this.inlineQueue.shift();)this.inlineTokens(t.src,t.tokens);return this.tokens}blockTokens(e,t=[]){let r,n,i,o;for(e=this.options.pedantic?e.replace(/\t/g,"    ").replace(/^ +$/gm,""):e.replace(/^( *)(\t+)/gm,(e,t,r)=>t+"    ".repeat(r.length));e;)if(!(this.options.extensions&&this.options.extensions.block&&this.options.extensions.block.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))){if(r=this.tokenizer.space(e))e=e.substring(r.raw.length),1===r.raw.length&&t.length>0?t[t.length-1].raw+="\n":t.push(r);else if(r=this.tokenizer.code(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&("paragraph"===n.type||"text"===n.type)?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(r=this.tokenizer.fences(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.heading(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.hr(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.blockquote(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.list(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.html(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.def(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&("paragraph"===n.type||"text"===n.type)?(n.raw+="\n"+r.raw,n.text+="\n"+r.raw,this.inlineQueue[this.inlineQueue.length-1].src=n.text):this.tokens.links[r.tag]||(this.tokens.links[r.tag]={href:r.href,title:r.title});else if(r=this.tokenizer.table(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.lheading(e))e=e.substring(r.raw.length),t.push(r);else{if(i=e,this.options.extensions&&this.options.extensions.startBlock){let t,r=1/0,n=e.slice(1);this.options.extensions.startBlock.forEach(function(e){"number"==typeof(t=e.call({lexer:this},n))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(i=e.substring(0,r+1))}if(this.state.top&&(r=this.tokenizer.paragraph(i)))n=t[t.length-1],o&&"paragraph"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r),o=i.length!==e.length,e=e.substring(r.raw.length);else if(r=this.tokenizer.text(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===n.type?(n.raw+="\n"+r.raw,n.text+="\n"+r.text,this.inlineQueue.pop(),this.inlineQueue[this.inlineQueue.length-1].src=n.text):t.push(r);else if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}inlineTokens(e,t=[]){let r,n,i,o,s,a,l=e;if(this.tokens.links){let e=Object.keys(this.tokens.links);if(e.length>0)for(;null!=(o=this.tokenizer.rules.inline.reflinkSearch.exec(l));)e.includes(o[0].slice(o[0].lastIndexOf("[")+1,-1))&&(l=l.slice(0,o.index)+"["+t7("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))}for(;null!=(o=this.tokenizer.rules.inline.blockSkip.exec(l));)l=l.slice(0,o.index)+"["+t7("a",o[0].length-2)+"]"+l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);for(;null!=(o=this.tokenizer.rules.inline.escapedEmSt.exec(l));)l=l.slice(0,o.index+o[0].length-2)+"++"+l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex),this.tokenizer.rules.inline.escapedEmSt.lastIndex--;for(;e;)if(s||(a=""),s=!1,!(this.options.extensions&&this.options.extensions.inline&&this.options.extensions.inline.some(n=>!!(r=n.call({lexer:this},e,t))&&(e=e.substring(r.raw.length),t.push(r),!0)))){if(r=this.tokenizer.escape(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.tag(e))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.link(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.reflink(e,this.tokens.links))e=e.substring(r.raw.length),(n=t[t.length-1])&&"text"===r.type&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(r=this.tokenizer.emStrong(e,l,a))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.codespan(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.br(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.del(e))e=e.substring(r.raw.length),t.push(r);else if(r=this.tokenizer.autolink(e,ro))e=e.substring(r.raw.length),t.push(r);else if(!this.state.inLink&&(r=this.tokenizer.url(e,ro)))e=e.substring(r.raw.length),t.push(r);else{if(i=e,this.options.extensions&&this.options.extensions.startInline){let t,r=1/0,n=e.slice(1);this.options.extensions.startInline.forEach(function(e){"number"==typeof(t=e.call({lexer:this},n))&&t>=0&&(r=Math.min(r,t))}),r<1/0&&r>=0&&(i=e.substring(0,r+1))}if(r=this.tokenizer.inlineText(i,ri))e=e.substring(r.raw.length),"_"!==r.raw.slice(-1)&&(a=r.raw.slice(-1)),s=!0,(n=t[t.length-1])&&"text"===n.type?(n.raw+=r.raw,n.text+=r.text):t.push(r);else if(e){let t="Infinite loop on byte: "+e.charCodeAt(0);if(this.options.silent){console.error(t);break}throw Error(t)}}}return t}}class ra{constructor(e){this.options=e||tq}code(e,t,r){let n=(t||"").match(/\S*/)[0];if(this.options.highlight){let t=this.options.highlight(e,n);null!=t&&t!==e&&(r=!0,e=t)}return e=e.replace(/\n$/,"")+"\n",n?'<pre><code class="'+this.options.langPrefix+tJ(n)+'">'+(r?e:tJ(e,!0))+"</code></pre>\n":"<pre><code>"+(r?e:tJ(e,!0))+"</code></pre>\n"}blockquote(e){return`<blockquote>
${e}</blockquote>
`}html(e){return e}heading(e,t,r,n){return this.options.headerIds?`<h${t} id="${this.options.headerPrefix+n.slug(r)}">${e}</h${t}>
`:`<h${t}>${e}</h${t}>
`}hr(){return this.options.xhtml?"<hr/>\n":"<hr>\n"}list(e,t,r){let n=t?"ol":"ul";return"<"+n+(t&&1!==r?' start="'+r+'"':"")+">\n"+e+"</"+n+">\n"}listitem(e){return`<li>${e}</li>
`}checkbox(e){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"'+(this.options.xhtml?" /":"")+"> "}paragraph(e){return`<p>${e}</p>
`}table(e,t){return t&&(t=`<tbody>${t}</tbody>`),"<table>\n<thead>\n"+e+"</thead>\n"+t+"</table>\n"}tablerow(e){return`<tr>
${e}</tr>
`}tablecell(e,t){let r=t.header?"th":"td";return(t.align?`<${r} align="${t.align}">`:`<${r}>`)+e+`</${r}>
`}strong(e){return`<strong>${e}</strong>`}em(e){return`<em>${e}</em>`}codespan(e){return`<code>${e}</code>`}br(){return this.options.xhtml?"<br/>":"<br>"}del(e){return`<del>${e}</del>`}link(e,t,r){if(null===(e=t1(this.options.sanitize,this.options.baseUrl,e)))return r;let n='<a href="'+e+'"';return t&&(n+=' title="'+t+'"'),n+=">"+r+"</a>"}image(e,t,r){if(null===(e=t1(this.options.sanitize,this.options.baseUrl,e)))return r;let n=`<img src="${e}" alt="${r}"`;return t&&(n+=` title="${t}"`),n+=this.options.xhtml?"/>":">"}text(e){return e}}class rl{strong(e){return e}em(e){return e}codespan(e){return e}del(e){return e}html(e){return e}text(e){return e}link(e,t,r){return""+r}image(e,t,r){return""+r}br(){return""}}class rc{constructor(){this.seen={}}serialize(e){return e.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi,"").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,"").replace(/\s/g,"-")}getNextSafeSlug(e,t){let r=e,n=0;if(this.seen.hasOwnProperty(r)){n=this.seen[e];do r=e+"-"+ ++n;while(this.seen.hasOwnProperty(r))}return t||(this.seen[e]=n,this.seen[r]=0),r}slug(e,t={}){let r=this.serialize(e);return this.getNextSafeSlug(r,t.dryrun)}}class rp{constructor(e){this.options=e||tq,this.options.renderer=this.options.renderer||new ra,this.renderer=this.options.renderer,this.renderer.options=this.options,this.textRenderer=new rl,this.slugger=new rc}static parse(e,t){return new rp(t).parse(e)}static parseInline(e,t){return new rp(t).parseInline(e)}parse(e,t=!0){let r,n,i,o,s,a,l,c,p,u,d,h,m,f,g,y,b,x,v,w="",k=e.length;for(r=0;r<k;r++)if(u=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[u.type]&&(!1!==(v=this.options.extensions.renderers[u.type].call({parser:this},u))||!["space","hr","heading","code","table","blockquote","list","html","paragraph","text"].includes(u.type)))w+=v||"";else switch(u.type){case"space":continue;case"hr":w+=this.renderer.hr();continue;case"heading":w+=this.renderer.heading(this.parseInline(u.tokens),u.depth,tZ(this.parseInline(u.tokens,this.textRenderer)),this.slugger);continue;case"code":w+=this.renderer.code(u.text,u.lang,u.escaped);continue;case"table":for(c="",l="",o=u.header.length,n=0;n<o;n++)l+=this.renderer.tablecell(this.parseInline(u.header[n].tokens),{header:!0,align:u.align[n]});for(c+=this.renderer.tablerow(l),p="",o=u.rows.length,n=0;n<o;n++){for(a=u.rows[n],l="",s=a.length,i=0;i<s;i++)l+=this.renderer.tablecell(this.parseInline(a[i].tokens),{header:!1,align:u.align[i]});p+=this.renderer.tablerow(l)}w+=this.renderer.table(c,p);continue;case"blockquote":p=this.parse(u.tokens),w+=this.renderer.blockquote(p);continue;case"list":for(d=u.ordered,h=u.start,m=u.loose,o=u.items.length,p="",n=0;n<o;n++)y=(g=u.items[n]).checked,b=g.task,f="",g.task&&(x=this.renderer.checkbox(y),m?g.tokens.length>0&&"paragraph"===g.tokens[0].type?(g.tokens[0].text=x+" "+g.tokens[0].text,g.tokens[0].tokens&&g.tokens[0].tokens.length>0&&"text"===g.tokens[0].tokens[0].type&&(g.tokens[0].tokens[0].text=x+" "+g.tokens[0].tokens[0].text)):g.tokens.unshift({type:"text",text:x}):f+=x),f+=this.parse(g.tokens,m),p+=this.renderer.listitem(f,b,y);w+=this.renderer.list(p,d,h);continue;case"html":w+=this.renderer.html(u.text);continue;case"paragraph":w+=this.renderer.paragraph(this.parseInline(u.tokens));continue;case"text":for(p=u.tokens?this.parseInline(u.tokens):u.text;r+1<k&&"text"===e[r+1].type;)p+="\n"+((u=e[++r]).tokens?this.parseInline(u.tokens):u.text);w+=t?this.renderer.paragraph(p):p;continue;default:{let e='Token with "'+u.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw Error(e)}}return w}parseInline(e,t){t=t||this.renderer;let r,n,i,o="",s=e.length;for(r=0;r<s;r++)if(n=e[r],this.options.extensions&&this.options.extensions.renderers&&this.options.extensions.renderers[n.type]&&(!1!==(i=this.options.extensions.renderers[n.type].call({parser:this},n))||!["escape","html","link","image","strong","em","codespan","br","del","text"].includes(n.type)))o+=i||"";else switch(n.type){case"escape":case"text":o+=t.text(n.text);break;case"html":o+=t.html(n.text);break;case"link":o+=t.link(n.href,n.title,this.parseInline(n.tokens,t));break;case"image":o+=t.image(n.href,n.title,n.text);break;case"strong":o+=t.strong(this.parseInline(n.tokens,t));break;case"em":o+=t.em(this.parseInline(n.tokens,t));break;case"codespan":o+=t.codespan(n.text);break;case"br":o+=t.br();break;case"del":o+=t.del(this.parseInline(n.tokens,t));break;default:{let e='Token with "'+n.type+'" type was not found.';if(this.options.silent)return void console.error(e);throw Error(e)}}return o}}class ru{constructor(e){this.options=e||tq}static passThroughHooks=new Set(["preprocess","postprocess"]);preprocess(e){return e}postprocess(e){return e}}function rd(e,t){return(r,n,i)=>{var o,s,a,l;"function"==typeof n&&(i=n,n=null);let c={...n},p=(o=(n={...rh.defaults,...c}).silent,s=n.async,a=i,e=>{if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",o){let t="<p>An error occurred:</p><pre>"+tJ(e.message+"",!0)+"</pre>";return s?Promise.resolve(t):a?void a(null,t):t}if(s)return Promise.reject(e);if(!a)throw e;a(e)});if(null==r)return p(Error("marked(): input parameter is undefined or null"));if("string"!=typeof r)return p(Error("marked(): input parameter is of type "+Object.prototype.toString.call(r)+", string expected"));if((l=n)&&l.sanitize&&!l.silent&&console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options"),n.hooks&&(n.hooks.options=n),i){let o;let s=n.highlight;try{n.hooks&&(r=n.hooks.preprocess(r)),o=e(r,n)}catch(e){return p(e)}let a=function(e){let r;if(!e)try{n.walkTokens&&rh.walkTokens(o,n.walkTokens),r=t(o,n),n.hooks&&(r=n.hooks.postprocess(r))}catch(t){e=t}return n.highlight=s,e?p(e):i(null,r)};if(!s||s.length<3||(delete n.highlight,!o.length))return a();let l=0;return rh.walkTokens(o,function(e){"code"===e.type&&(l++,setTimeout(()=>{s(e.text,e.lang,function(t,r){if(t)return a(t);null!=r&&r!==e.text&&(e.text=r,e.escaped=!0),0==--l&&a()})},0))}),void(0===l&&a())}if(n.async)return Promise.resolve(n.hooks?n.hooks.preprocess(r):r).then(t=>e(t,n)).then(e=>n.walkTokens?Promise.all(rh.walkTokens(e,n.walkTokens)).then(()=>e):e).then(e=>t(e,n)).then(e=>n.hooks?n.hooks.postprocess(e):e).catch(p);try{n.hooks&&(r=n.hooks.preprocess(r));let i=e(r,n);n.walkTokens&&rh.walkTokens(i,n.walkTokens);let o=t(i,n);return n.hooks&&(o=n.hooks.postprocess(o)),o}catch(e){return p(e)}}}function rh(e,t,r){return rd(rs.lex,rp.parse)(e,t,r)}rh.options=rh.setOptions=function(e){return rh.defaults={...rh.defaults,...e},tq=rh.defaults,rh},rh.getDefaults=function(){return{async:!1,baseUrl:null,breaks:!1,extensions:null,gfm:!0,headerIds:!0,headerPrefix:"",highlight:null,hooks:null,langPrefix:"language-",mangle:!0,pedantic:!1,renderer:null,sanitize:!1,sanitizer:null,silent:!1,smartypants:!1,tokenizer:null,walkTokens:null,xhtml:!1}},rh.defaults=tq,rh.use=function(...e){let t=rh.defaults.extensions||{renderers:{},childTokens:{}};e.forEach(e=>{let r={...e};if(r.async=rh.defaults.async||r.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error("extension name required");if(e.renderer){let r=t.renderers[e.name];t.renderers[e.name]=r?function(...t){let n=e.renderer.apply(this,t);return!1===n&&(n=r.apply(this,t)),n}:e.renderer}if(e.tokenizer){if(!e.level||"block"!==e.level&&"inline"!==e.level)throw Error("extension level must be 'block' or 'inline'");t[e.level]?t[e.level].unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&("block"===e.level?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:"inline"===e.level&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),r.extensions=t),e.renderer){let t=rh.defaults.renderer||new ra;for(let r in e.renderer){let n=t[r];t[r]=(...i)=>{let o=e.renderer[r].apply(t,i);return!1===o&&(o=n.apply(t,i)),o}}r.renderer=t}if(e.tokenizer){let t=rh.defaults.tokenizer||new rt;for(let r in e.tokenizer){let n=t[r];t[r]=(...i)=>{let o=e.tokenizer[r].apply(t,i);return!1===o&&(o=n.apply(t,i)),o}}r.tokenizer=t}if(e.hooks){let t=rh.defaults.hooks||new ru;for(let r in e.hooks){let n=t[r];ru.passThroughHooks.has(r)?t[r]=i=>{if(rh.defaults.async)return Promise.resolve(e.hooks[r].call(t,i)).then(e=>n.call(t,e));let o=e.hooks[r].call(t,i);return n.call(t,o)}:t[r]=(...i)=>{let o=e.hooks[r].apply(t,i);return!1===o&&(o=n.apply(t,i)),o}}r.hooks=t}if(e.walkTokens){let t=rh.defaults.walkTokens;r.walkTokens=function(r){let n=[];return n.push(e.walkTokens.call(this,r)),t&&(n=n.concat(t.call(this,r))),n}}rh.setOptions(r)})},rh.walkTokens=function(e,t){let r=[];for(let n of e)switch(r=r.concat(t.call(rh,n)),n.type){case"table":for(let e of n.header)r=r.concat(rh.walkTokens(e.tokens,t));for(let e of n.rows)for(let n of e)r=r.concat(rh.walkTokens(n.tokens,t));break;case"list":r=r.concat(rh.walkTokens(n.items,t));break;default:rh.defaults.extensions&&rh.defaults.extensions.childTokens&&rh.defaults.extensions.childTokens[n.type]?rh.defaults.extensions.childTokens[n.type].forEach(function(e){r=r.concat(rh.walkTokens(n[e],t))}):n.tokens&&(r=r.concat(rh.walkTokens(n.tokens,t)))}return r},rh.parseInline=rd(rs.lexInline,rp.parseInline),rh.Parser=rp,rh.parser=rp.parse,rh.Renderer=ra,rh.TextRenderer=rl,rh.Lexer=rs,rh.lexer=rs.lex,rh.Tokenizer=rt,rh.Slugger=rc,rh.Hooks=ru,rh.parse=rh,rh.options,rh.setOptions,rh.use,rh.walkTokens,rh.parseInline,rp.parse,rs.lex;var rm=Object.defineProperty,rf=Object.defineProperties,rg=Object.getOwnPropertyDescriptors,ry=Object.getOwnPropertySymbols,rb=Object.prototype.hasOwnProperty,rx=Object.prototype.propertyIsEnumerable,rv=(e,t,r)=>t in e?rm(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rw=(e,t)=>{for(var r in t||(t={}))rb.call(t,r)&&rv(e,r,t[r]);if(ry)for(var r of ry(t))rx.call(t,r)&&rv(e,r,t[r]);return e};let rk=new rh.Renderer;rh.setOptions({renderer:rk,highlight:(e,t)=>tb(e,t)});let rE="^ {0,3}<!-- ReDoc-Inject:\\s+?<({component}).*?/?>\\s+?-->\\s*$",rO="(?:^ {0,3}<({component})([\\s\\S]*?)>([\\s\\S]*?)</\\2>|^ {0,3}<({component})([\\s\\S]*?)(?:/>|\\n{2,}))",rj="(?:"+rE+"|"+rO+")";function r$(e){return`<!-- ReDoc-Inject: <${e}> -->`}class rS{constructor(e,t){this.options=e,this.parentId=t,this.headings=[],this.headingRule=(e,t,r,n)=>(1===t?this.currentTopHeading=this.saveHeading(e,t):2===t&&this.saveHeading(e,t,this.currentTopHeading&&this.currentTopHeading.items,this.currentTopHeading&&this.currentTopHeading.id),this.originalHeadingRule(e,t,r,n)),this.parentId=t,this.parser=new rh.Parser,this.headingEnhanceRenderer=new rh.Renderer,this.originalHeadingRule=this.headingEnhanceRenderer.heading.bind(this.headingEnhanceRenderer),this.headingEnhanceRenderer.heading=this.headingRule}static containsComponent(e,t){return RegExp(rj.replace(/{component}/g,t),"gmi").test(e)}static getTextBeforeHading(e,t){let r=e.search(RegExp(`^##?\\s+${t}`,"m"));return r>-1?e.substring(0,r):e}saveHeading(e,t,r=this.headings,n){e=T(e);let i={id:n?`${n}/${O(e)}`:`${this.parentId||"section"}/${O(e)}`,name:e,level:t,items:[]};return r.push(i),i}flattenHeadings(e){if(void 0===e)return[];let t=[];for(let r of e)t.push(r),t.push(...this.flattenHeadings(r.items));return t}attachHeadingsDescriptions(e){let t=e=>RegExp(`##?\\s+${e.name.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}s*(
|\r
|$|s*)`),r=this.flattenHeadings(this.headings);if(r.length<1)return;let n=r[0],i=t(n),o=e.search(i);for(let s=1;s<r.length;s++){let a=r[s],l=t(a),c=e.substr(o+1).search(l)+o+1;n.description=e.substring(o,c).replace(i,"").trim(),n=a,i=l,o=c}n.description=e.substring(o).replace(i,"").trim()}renderMd(e,t=!1){let r=t?{renderer:this.headingEnhanceRenderer}:void 0;return rh(e.toString(),r)}extractHeadings(e){this.renderMd(e,!0),this.attachHeadingsDescriptions(e);let t=this.headings;return this.headings=[],t}renderMdWithComponents(e){let t=this.options&&this.options.allowedMdComponents;if(!t||0===Object.keys(t).length)return[this.renderMd(e)];let r=Object.keys(t).join("|"),n=RegExp(rj.replace(/{component}/g,r),"mig"),i=[],o=[],s=n.exec(e),a=0;for(;s;){i.push(e.substring(a,s.index)),a=n.lastIndex;let r=t[s[1]||s[2]||s[5]],l=s[3]||s[6],c=s[4];r&&o.push({component:r.component,propsSelector:r.propsSelector,props:rf(rw(rw({},function(e){let t;if(!e)return{};let r=/([\w-]+)\s*=\s*(?:{([^}]+?)}|"([^"]+?)")/gim,n={};for(;null!==(t=r.exec(e));)if(t[3])n[t[1]]=t[3];else if(t[2]){let e;try{e=JSON.parse(t[2])}catch(e){}n[t[1]]=e}return n}(l)),r.props),rg({children:c}))}),s=n.exec(e)}i.push(e.substring(a));let l=[];for(let e=0;e<i.length;e++){let t=i[e];t&&l.push(this.renderMd(t)),o[e]&&l.push(o[e])}return l}}class rC{constructor(e,t=new J({})){this.parser=e,this.options=t,Object.assign(this,e.spec.info),this.description=e.spec.info.description||"",this.summary=e.spec.info.summary||"";let r=this.description.search(/^\s*##?\s+/m);r>-1&&(this.description=this.description.substring(0,r)),this.downloadLink=this.getDownloadLink(),this.downloadFileName=this.getDownloadFileName()}getDownloadLink(){if(this.options.downloadDefinitionUrl)return this.options.downloadDefinitionUrl;if(this.parser.specUrl)return this.parser.specUrl;if(c&&window.Blob&&window.URL&&window.URL.createObjectURL){let e=new Blob([JSON.stringify(this.parser.spec,null,2)],{type:"application/json"});return window.URL.createObjectURL(e)}}getDownloadFileName(){return this.parser.specUrl||this.options.downloadDefinitionUrl?this.options.downloadFileName:this.options.downloadFileName||"openapi.json"}}var rA=Object.defineProperty,rP=Object.defineProperties,rI=Object.getOwnPropertyDescriptors,rT=Object.getOwnPropertySymbols,r_=Object.prototype.hasOwnProperty,rR=Object.prototype.propertyIsEnumerable,rL=(e,t,r)=>t in e?rA(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class rz{constructor(e,t){let r=t.spec.components&&t.spec.components.securitySchemes||{};this.schemes=Object.keys(e||{}).map(n=>{let{resolved:i}=t.deref(r[n]),o=e[n]||[];if(!i)return void console.warn(`Non existing security scheme referenced: ${n}. Skipping`);let s=i["x-displayName"]||n;return rP(((e,t)=>{for(var r in t||(t={}))r_.call(t,r)&&rL(e,r,t[r]);if(rT)for(var r of rT(t))rR.call(t,r)&&rL(e,r,t[r]);return e})({},i),rI({id:n,sectionId:n,displayName:s,scopes:o}))}).filter(e=>void 0!==e)}}var rD=Object.defineProperty,rN=Object.defineProperties,rM=Object.getOwnPropertyDescriptor,rF=Object.getOwnPropertyDescriptors,rq=Object.getOwnPropertySymbols,rB=Object.prototype.hasOwnProperty,rQ=Object.prototype.propertyIsEnumerable,rU=(e,t,r)=>t in e?rD(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,rW=(e,t)=>{for(var r in t||(t={}))rB.call(t,r)&&rU(e,r,t[r]);if(rq)for(var r of rq(t))rQ.call(t,r)&&rU(e,r,t[r]);return e},rV=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?rM(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&rD(t,r,o),o};class rH{constructor(e,t,r,n,i){this.expanded=!1,this.operations=[],(0,ef.makeObservable)(this),this.name=t;let{resolved:o}=e.deref(r);for(let r of Object.keys(o)){let s=o[r];for(let o of Object.keys(s).filter(eB)){let a=new nq(e,rN(rW({},s[o]),rF({pathName:r,pointer:e$.compile([n,t,r,o]),httpVerb:o,pathParameters:s.parameters||[],pathServers:s.servers})),void 0,i,!0);this.operations.push(a)}}}toggle(){this.expanded=!this.expanded}}rV([ef.observable],rH.prototype,"expanded",2),rV([ef.action],rH.prototype,"toggle",1);var rJ=Object.defineProperty,rY=Object.defineProperties,rZ=Object.getOwnPropertyDescriptors,rG=Object.getOwnPropertySymbols,rX=Object.prototype.hasOwnProperty,rK=Object.prototype.propertyIsEnumerable,r0=(e,t,r)=>t in e?rJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,r1=(e,t)=>{for(var r in t||(t={}))rX.call(t,r)&&r0(e,r,t[r]);if(rG)for(var r of rG(t))rK.call(t,r)&&r0(e,r,t[r]);return e},r2=(e,t)=>rY(e,rZ(t)),r6=(e,t)=>{var r={};for(var n in e)rX.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&rG)for(var n of rG(e))0>t.indexOf(n)&&rK.call(e,n)&&(r[n]=e[n]);return r};function r3(e,t){return t&&e[e.length-1]!==t?[...e,t]:e}function r5(e,t){return t?e.concat(t):e}class r8{constructor(e,t,r=new J({})){this.options=r,this.allowMergeRefs=!1,this.byRef=e=>{let t;if(this.spec){"#"!==e.charAt(0)&&(e="#"+e),e=decodeURIComponent(e);try{t=e$.get(this.spec,e)}catch(e){}return t||{}}},this.validate(e),this.spec=e,this.allowMergeRefs=e.openapi.startsWith("3.1");let n=c?window.location.href:"";"string"==typeof t&&(this.specUrl=n?new URL(t,n).href:t)}validate(e){if(void 0===e.openapi)throw Error("Document must be valid OpenAPI 3.0.0 definition")}isRef(e){return!!e&&void 0!==e.$ref&&null!==e.$ref}deref(e,t=[],r=!1){let n=null==e?void 0:e["x-refsStack"];if(t=r5(t,n),this.isRef(e)){let n=e5(e.$ref);if(n&&this.options.ignoreNamedSchemas.has(n))return{resolved:{type:"object",title:n},refsStack:t};let i=this.byRef(e.$ref);if(!i)throw Error(`Failed to resolve $ref "${e.$ref}"`);let o=t;if(t.includes(e.$ref)||t.length>999)i=Object.assign({},i,{"x-circular-ref":!0});else if(this.isRef(i)){let e=this.deref(i,t,r);o=e.refsStack,i=e.resolved}return o=r3(t,e.$ref),{resolved:i=this.allowMergeRefs?this.mergeRefs(e,i,r):i,refsStack:o}}return{resolved:e,refsStack:r5(t,n)}}mergeRefs(e,t,r){let{$ref:n}=e,i=r6(e,["$ref"]),o=Object.keys(i);if(0===o.length)return t;if(r&&o.some(e=>!["description","title","externalDocs","x-refsStack","x-parentRefs","readOnly","writeOnly"].includes(e))){let{description:e,title:r,readOnly:n,writeOnly:o}=i;return{allOf:[{description:e,title:r,readOnly:n,writeOnly:o},t,r6(i,["description","title","readOnly","writeOnly"])]}}return r1(r1({},t),i)}mergeAllOf(e,t,r){var n;if(e["x-circular-ref"]||void 0===(e=this.hoistOneOfs(e,r)).allOf)return e;let i=r2(r1({},e),{"x-parentRefs":[],allOf:void 0,title:e.title||e5(t)});for(let{schema:o,refsStack:s}of(void 0!==i.properties&&"object"==typeof i.properties&&(i.properties=r1({},i.properties)),void 0!==i.items&&"object"==typeof i.items&&(i.items=r1({},i.items)),function(e,t){let r=new Set;return e.filter(e=>{let t=e.$ref;return!t||t&&!r.has(t)&&r.add(t)})}(e.allOf.map(e=>{var t;let{resolved:n,refsStack:o}=this.deref(e,r,!0),s=e.$ref||void 0,a=this.mergeAllOf(n,s,o);if(!a["x-circular-ref"]||!a.allOf)return s&&(null==(t=i["x-parentRefs"])||t.push(...a["x-parentRefs"]||[],s)),{$ref:s,refsStack:r3(o,s),schema:a}}).filter(e=>void 0!==e)))){let{type:e,enum:r,properties:a,items:l,required:c,title:p,description:u,readOnly:d,writeOnly:h,oneOf:m,anyOf:f,"x-circular-ref":g}=o,y=r6(o,["type","enum","properties","items","required","title","description","readOnly","writeOnly","oneOf","anyOf","x-circular-ref"]);if(i.type!==e&&void 0!==i.type&&void 0!==e&&console.warn(`Incompatible types in allOf at "${t}": "${i.type}" and "${e}"`),void 0!==e&&(Array.isArray(e)&&Array.isArray(i.type)?i.type=[...e,...i.type]:i.type=e),void 0!==r&&(Array.isArray(r)&&Array.isArray(i.enum)?i.enum=Array.from(new Set([...r,...i.enum])):i.enum=r),void 0!==a&&"object"==typeof a)for(let e in i.properties=i.properties||{},a){let r=r5(s,null==(n=a[e])?void 0:n["x-refsStack"]);if(i.properties[e]){if(!g){let n=this.mergeAllOf({allOf:[i.properties[e],r2(r1({},a[e]),{"x-refsStack":r})],"x-refsStack":r},t+"/properties/"+e,r);i.properties[e]=n}}else i.properties[e]=r2(r1({},a[e]),{"x-refsStack":r})}if(void 0!==l&&!g){let e="boolean"==typeof i.items?{}:Object.assign({},i.items),r="boolean"==typeof o.items?{}:Object.assign({},o.items);i.items=this.mergeAllOf({allOf:[e,r]},t+"/items",s)}void 0!==m&&(i.oneOf=m),void 0!==f&&(i.anyOf=f),void 0!==c&&(i.required=[...i.required||[],...c]),i=r1(r2(r1({},i),{title:i.title||p,description:i.description||u,readOnly:void 0!==i.readOnly?i.readOnly:d,writeOnly:void 0!==i.writeOnly?i.writeOnly:h,"x-circular-ref":i["x-circular-ref"]||g}),y)}return i}findDerived(e){let t={},r=this.spec.components&&this.spec.components.schemas||{};for(let n in r){let{resolved:i}=this.deref(r[n]);void 0!==i.allOf&&i.allOf.find(t=>void 0!==t.$ref&&e.indexOf(t.$ref)>-1)&&(t["#/components/schemas/"+n]=[i["x-discriminator-value"]||n])}return t}hoistOneOfs(e,t){if(void 0===e.allOf)return e;let r=e.allOf;for(let e=0;e<r.length;e++){let n=r[e];if(Array.isArray(n.oneOf)){let i=r.slice(0,e),o=r.slice(e+1);return{oneOf:n.oneOf.map(e=>({allOf:[...i,e,...o],"x-refsStack":t}))}}}return e}}var r4=Object.defineProperty,r9=Object.defineProperties,r7=Object.getOwnPropertyDescriptor,ne=Object.getOwnPropertyDescriptors,nt=Object.getOwnPropertySymbols,nr=Object.prototype.hasOwnProperty,nn=Object.prototype.propertyIsEnumerable,ni=(e,t,r)=>t in e?r4(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,no=(e,t)=>{for(var r in t||(t={}))nr.call(t,r)&&ni(e,r,t[r]);if(nt)for(var r of nt(t))nn.call(t,r)&&ni(e,r,t[r]);return e},ns=(e,t)=>r9(e,ne(t)),na=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?r7(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&r4(t,r,o),o};let nl=class{constructor(e,t,r,n,i=!1,o=[]){this.options=n,this.refsStack=o,this.typePrefix="",this.isCircular=!1,this.activeOneOf=0,(0,ef.makeObservable)(this),this.pointer=t.$ref||r||"";let{resolved:s,refsStack:a}=e.deref(t,o,!0);this.refsStack=r3(a,this.pointer),this.rawSchema=s,this.schema=e.mergeAllOf(this.rawSchema,this.pointer,this.refsStack),this.init(e,i),n.showExtensions&&(this.extensions=td(this.schema,n.showExtensions))}activateOneOf(e){this.activeOneOf=e}hasType(e){return this.type===e||_(this.type)&&this.type.includes(e)}init(e,t){var r,n,i,o,s,a,l,c;let p=this.schema;if(this.isCircular=!!p["x-circular-ref"],this.title=p.title||e3(this.pointer)&&e$.baseName(this.pointer)||"",this.description=p.description||"",this.type=p.type||eW(p),this.format=p.format,this.enum=p.enum||[],this.example=p.example,this.examples=p.examples,this.deprecated=!!p.deprecated,this.pattern=p.pattern,this.externalDocs=p.externalDocs,this.constraints=e9(p),this.displayFormat=this.format,this.isPrimitive=eV(p,this.type),this.default=p.default,this.readOnly=!!p.readOnly,this.writeOnly=!!p.writeOnly,this.const=p.const||"",this.contentEncoding=p.contentEncoding,this.contentMediaType=p.contentMediaType,this.minItems=p.minItems,this.maxItems=p.maxItems,(p.nullable||p["x-nullable"])&&(_(this.type)&&!this.type.some(e=>null===e||"null"===e)?this.type=[...this.type,"null"]:_(this.type)||null===this.type&&"null"===this.type||(this.type=[this.type,"null"])),this.displayType=_(this.type)?this.type.map(e=>null===e?"null":e).join(" or "):this.type,!this.isCircular){if(p.if&&p.then||p.if&&p.else)this.initConditionalOperators(p,e);else if(t||void 0===nu(p)){if(t&&_(p.oneOf)&&p.oneOf.find(e=>e.$ref===this.pointer)&&delete p.oneOf,void 0!==p.oneOf)return this.initOneOf(p.oneOf,e),this.oneOfType="One of",void(void 0!==p.anyOf&&console.warn(`oneOf and anyOf are not supported on the same level. Skipping anyOf at ${this.pointer}`));if(void 0!==p.anyOf)return this.initOneOf(p.anyOf,e),void(this.oneOfType="Any of");if(this.hasType("object"))this.fields=np(e,p,this.pointer,this.options,this.refsStack);else if(this.hasType("array")&&(_(p.items)||_(p.prefixItems)?this.fields=np(e,p,this.pointer,this.options,this.refsStack):p.items&&(this.items=new nl(e,p.items,this.pointer+"/items",this.options,!1,this.refsStack)),this.displayType=p.prefixItems||_(p.items)?"items":th((null==(r=this.items)?void 0:r.displayType)||this.displayType),this.displayFormat=(null==(n=this.items)?void 0:n.format)||"",this.typePrefix=(null==(i=this.items)?void 0:i.typePrefix)||""+z("arrayOf"),this.title=this.title||(null==(o=this.items)?void 0:o.title)||"",this.isPrimitive=void 0!==(null==(s=this.items)?void 0:s.isPrimitive)?null==(a=this.items)?void 0:a.isPrimitive:this.isPrimitive,void 0===this.example&&void 0!==(null==(l=this.items)?void 0:l.example)&&(this.example=[this.items.example]),(null==(c=this.items)?void 0:c.isPrimitive)&&(this.enum=this.items.enum),_(this.type))){let e=this.type.filter(e=>"array"!==e);e.length&&(this.displayType+=` or ${e.join(" or ")}`)}this.enum.length&&this.options.sortEnumValuesAlphabetically&&this.enum.sort()}else this.initDiscriminator(p,e)}}initOneOf(e,t){if(this.oneOf=e.map((e,r)=>{let{resolved:n,refsStack:i}=t.deref(e,this.refsStack,!0),o=t.mergeAllOf(n,this.pointer+"/oneOf/"+r,i),s=e3(e.$ref)&&!o.title?e$.baseName(e.$ref):`${o.title||""}${void 0!==o.const&&JSON.stringify(o.const)||""}`;return new nl(t,ns(no({},o),{title:s,allOf:[ns(no({},this.schema),{oneOf:void 0,anyOf:void 0})],discriminator:n.allOf?void 0:o.discriminator}),e.$ref||this.pointer+"/oneOf/"+r,this.options,!1,i)}),this.options.simpleOneOfTypeLabel){let e=function(e){let t=new Set;return function e(r){for(let n of r.oneOf||[])n.oneOf?e(n):n.type&&t.add(n.type)}(e),Array.from(t.values())}(this);this.displayType=e.join(" or ")}else this.displayType=this.oneOf.map(e=>{let t=e.typePrefix+(e.title?`${e.title} (${e.displayType})`:e.displayType);return t.indexOf(" or ")>-1&&(t=`(${t})`),t}).join(" or ")}initDiscriminator(e,t){let r=nu(e);this.discriminatorProp=r.propertyName;let n=t.findDerived([...this.schema["x-parentRefs"]||[],this.pointer]);if(e.oneOf)for(let t of e.oneOf){if(void 0===t.$ref)continue;let e=e$.baseName(t.$ref);n[t.$ref]=e}let i=r.mapping||{},o=r["x-explicitMappingOnly"]||!1;0===Object.keys(i).length&&(o=!1);let s={};for(let e in i){let t=i[e];_(s[t])?s[t].push(e):s[t]=[e]}let a=no(o?{}:no({},n),s),l=[];for(let e of Object.keys(a)){let t=a[e];if(_(t))for(let r of t)l.push({$ref:e,name:r});else l.push({$ref:e,name:t})}let c=Object.keys(i);0!==c.length&&(l=l.sort((e,t)=>{let r=c.indexOf(e.name),n=c.indexOf(t.name);return r<0&&n<0?e.name.localeCompare(t.name):r<0?1:n<0?-1:r-n})),this.oneOf=l.map(({$ref:e,name:r})=>{let n=new nl(t,{$ref:e},e,this.options,!0,this.refsStack.slice(0,-1));return n.title=r,n})}initConditionalOperators(e,t){let{if:r,else:n={},then:i={}}=e,o=((e,t)=>{var r={};for(var n in e)nr.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&nt)for(var n of nt(e))0>t.indexOf(n)&&nn.call(e,n)&&(r[n]=e[n]);return r})(e,["if","else","then"]),s=[{allOf:[o,i,r],title:r&&r["x-displayName"]||(null==r?void 0:r.title)||"case 1"},{allOf:[o,n],title:n&&n["x-displayName"]||(null==n?void 0:n.title)||"case 2"}];this.oneOf=s.map((e,r)=>new nl(t,no({},e),this.pointer+"/oneOf/"+r,this.options,!1,this.refsStack)),this.oneOfType="One of"}},nc=nl;function np(e,t,r,n,i){let o=t.properties||t.prefixItems||t.items||{},s=t.patternProperties||{},a=t.additionalProperties||t.unevaluatedProperties,l=t.prefixItems?t.items:t.additionalItems,c=t.default,p=Object.keys(o||[]).map(s=>{let a=o[s];a||(console.warn(`Field "${s}" is invalid, skipping.
 Field must be an object but got ${typeof a} at "${r}"`),a={});let l=void 0!==t.required&&t.required.indexOf(s)>-1;return new nb(e,{name:t.properties?s:`[${s}]`,required:l,schema:ns(no({},a),{default:void 0===a.default&&c?c[s]:a.default})},r+"/properties/"+s,n,i)});return n.sortPropsAlphabetically&&(p=te(p,"name")),n.requiredPropsFirst&&(p=e7(p,n.sortPropsAlphabetically?void 0:t.required)),p.push(...Object.keys(s).map(t=>{let o=s[t];return o||(console.warn(`Field "${t}" is invalid, skipping.
 Field must be an object but got ${typeof o} at "${r}"`),o={}),new nb(e,{name:t,required:!1,schema:o,kind:"patternProperties"},`${r}/patternProperties/${t}`,n,i)})),"object"!=typeof a&&!0!==a||p.push(new nb(e,{name:("object"==typeof a&&a["x-additionalPropertiesName"]||"property name").concat("*"),required:!1,schema:!0===a?{}:a,kind:"additionalProperties"},r+"/additionalProperties",n,i)),p.push(...function({parser:e,schema:t=!1,fieldsCount:r,$ref:n,options:i,refsStack:o}){return R(t)?t?[new nb(e,{name:`[${r}...]`,schema:{}},`${n}/additionalItems`,i,o)]:[]:_(t)?[...t.map((t,s)=>new nb(e,{name:`[${r+s}]`,schema:t},`${n}/additionalItems`,i,o))]:k(t)?[new nb(e,{name:`[${r}...]`,schema:t},`${n}/additionalItems`,i,o)]:[]}({parser:e,schema:l,fieldsCount:p.length,$ref:r,options:n,refsStack:i})),p}function nu(e){return e.discriminator||e["x-discriminator"]}na([ef.observable],nc.prototype,"activeOneOf",2),na([ef.action],nc.prototype,"activateOneOf",1);let nd={};class nh{constructor(e,t,r,n){this.mime=r;let{resolved:i}=e.deref(t);this.value=i.value,this.summary=i.summary,this.description=i.description,i.externalValue&&(this.externalValueUrl=new URL(i.externalValue,e.specUrl).href),eJ(r)&&this.value&&"object"==typeof this.value&&(this.value=eX(this.value,n))}getExternalValue(e){return this.externalValueUrl?(this.externalValueUrl in nd||(nd[this.externalValueUrl]=fetch(this.externalValueUrl).then(t=>t.text().then(r=>{if(!t.ok)return Promise.reject(Error(r));if(!eH(e))return r;try{return JSON.parse(r)}catch(e){return r}}))),nd[this.externalValueUrl]):Promise.resolve(void 0)}}var nm=Object.defineProperty,nf=Object.getOwnPropertyDescriptor,ng=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?nf(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&nm(t,r,o),o};let ny={path:{style:"simple",explode:!1},query:{style:"form",explode:!0},header:{style:"simple",explode:!1},cookie:{style:"form",explode:!0}};class nb{constructor(e,t,r,n,i){var o,s,a,l,c;this.expanded=void 0,(0,ef.makeObservable)(this);let{resolved:p}=e.deref(t);this.kind=t.kind||"field",this.name=t.name||p.name,this.in=p.in,this.required=!!p.required;let u=p.schema,d="";if(!u&&p.in&&p.content&&(d=Object.keys(p.content)[0],u=p.content[d]&&p.content[d].schema),this.schema=new nc(e,u||{},r,n,!1,i),this.description=void 0===p.description?this.schema.description||"":p.description,this.example=p.example||this.schema.example,void 0!==p.examples||void 0!==this.schema.examples){let t=p.examples||this.schema.examples;this.examples=_(t)?t:g(t,(t,r)=>new nh(e,t,r,p.encoding))}d?this.serializationMime=d:p.style?this.style=p.style:this.in&&(this.style=null!=(s=null==(o=ny[this.in])?void 0:o.style)?s:"form"),void 0===p.explode&&this.in?this.explode=null==(l=null==(a=ny[this.in])?void 0:a.explode)||l:this.explode=!!p.explode,this.deprecated=void 0===p.deprecated?!!this.schema.deprecated:p.deprecated,n.showExtensions&&(this.extensions=td(p,n.showExtensions)),this.const=(null==(c=this.schema)?void 0:c.const)||(null==p?void 0:p.const)||""}toggle(){this.expanded=!this.expanded}collapse(){this.expanded=!1}expand(){this.expanded=!0}}ng([ef.observable],nb.prototype,"expanded",2),ng([ef.action],nb.prototype,"toggle",1),ng([ef.action],nb.prototype,"collapse",1),ng([ef.action],nb.prototype,"expand",1);var nx=r(7807);class nv{constructor(e,t,r,n,i){this.name=t,this.isRequestType=r,this.schema=n.schema&&new nc(e,n.schema,"",i),this.onlyRequiredInSamples=i.onlyRequiredInSamples,this.generatedPayloadSamplesMaxDepth=i.generatedPayloadSamplesMaxDepth,void 0!==n.examples?this.examples=g(n.examples,r=>new nh(e,r,t,n.encoding)):void 0!==n.example?this.examples={default:new nh(e,{value:e.deref(n.example).resolved},t,n.encoding)}:eH(t)&&this.generateExample(e,n)}generateExample(e,t){let r={skipReadOnly:this.isRequestType,skipWriteOnly:!this.isRequestType,skipNonRequired:this.isRequestType&&this.onlyRequiredInSamples,maxSampleDepth:this.generatedPayloadSamplesMaxDepth};if(this.schema&&this.schema.oneOf)for(let n of(this.examples={},this.schema.oneOf)){let i=nx.sample(n.rawSchema,r,e.spec);this.schema.discriminatorProp&&"object"==typeof i&&i&&(i[this.schema.discriminatorProp]=n.title),this.examples[n.title]=new nh(e,{value:i},this.name,t.encoding)}else this.schema&&(this.examples={default:new nh(e,{value:nx.sample(t.schema,r,e.spec)},this.name,t.encoding)})}}var nw=Object.defineProperty,nk=Object.getOwnPropertyDescriptor,nE=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?nk(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&nw(t,r,o),o};class nO{constructor(e,t,r,n){this.isRequestType=r,this.activeMimeIdx=0,(0,ef.makeObservable)(this),n.unstable_ignoreMimeParameters&&(t=tr(t)),this.mediaTypes=Object.keys(t).map(i=>{let o=t[i];return new nv(e,i,r,o,n)})}activate(e){this.activeMimeIdx=e}get active(){return this.mediaTypes[this.activeMimeIdx]}get hasSample(){return this.mediaTypes.filter(e=>!!e.examples).length>0}}nE([ef.observable],nO.prototype,"activeMimeIdx",2),nE([ef.action],nO.prototype,"activate",1),nE([ef.computed],nO.prototype,"active",1);class nj{constructor({parser:e,infoOrRef:t,options:r,isEvent:n}){let{resolved:i}=e.deref(t);this.description=i.description||"",this.required=i.required;let o=tm(i);void 0!==o&&(this.content=new nO(e,o,!n,r))}}var n$=Object.defineProperty,nS=Object.defineProperties,nC=Object.getOwnPropertyDescriptor,nA=Object.getOwnPropertyDescriptors,nP=Object.getOwnPropertySymbols,nI=Object.prototype.hasOwnProperty,nT=Object.prototype.propertyIsEnumerable,n_=(e,t,r)=>t in e?n$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nR=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?nC(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&n$(t,r,o),o};class nL{constructor({parser:e,code:t,defaultAsError:r,infoOrRef:n,options:i,isEvent:o}){this.expanded=!1,this.headers=[],(0,ef.makeObservable)(this),this.expanded="all"===i.expandResponses||i.expandResponses[t];let{resolved:s}=e.deref(n);this.code=t,void 0!==s.content&&(this.content=new nO(e,s.content,o,i)),void 0!==s["x-summary"]?(this.summary=s["x-summary"],this.description=s.description||""):(this.summary=s.description||"",this.description=""),this.type=eF(t,r);let a=s.headers;void 0!==a&&(this.headers=Object.keys(a).map(t=>new nb(e,nS(((e,t)=>{for(var r in t||(t={}))nI.call(t,r)&&n_(e,r,t[r]);if(nP)for(var r of nP(t))nT.call(t,r)&&n_(e,r,t[r]);return e})({},a[t]),nA({name:t})),"",i))),i.showExtensions&&(this.extensions=td(s,i.showExtensions))}toggle(){this.expanded=!this.expanded}}nR([ef.observable],nL.prototype,"expanded",2),nR([ef.action],nL.prototype,"toggle",1);var nz=Object.defineProperty,nD=Object.getOwnPropertyDescriptor,nN=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?nD(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&nz(t,r,o),o};function nM(e){return"payload"===e.lang&&e.requestBodyContent}let nF=!1;class nq{constructor(e,t,r,n,i=!1){this.parser=e,this.operationSpec=t,this.options=n,this.type="operation",this.items=[],this.ready=!0,this.active=!1,this.expanded=!1,(0,ef.makeObservable)(this),this.pointer=t.pointer,this.description=t.description,this.parent=r,this.externalDocs=t.externalDocs,this.deprecated=!!t.deprecated,this.httpVerb=t.httpVerb,this.deprecated=!!t.deprecated,this.operationId=t.operationId,this.path=t.pathName,this.isCallback=i,this.isWebhook=t.isWebhook,this.isEvent=this.isCallback||this.isWebhook,this.name=eQ(t),this.sidebarLabel=n.sideNavStyle===D.IdOnly?this.operationId||this.path:n.sideNavStyle===D.PathOnly?this.path:this.name,this.isCallback?(this.security=(t.security||[]).map(t=>new rz(t,e)),this.servers=ti("",t.servers||t.pathServers||[])):(this.operationHash=t.operationId&&"operation/"+t.operationId,this.id=void 0!==t.operationId?(r?r.id+"/":"")+this.operationHash:void 0!==r?r.id+this.pointer:this.pointer,this.security=(t.security||e.spec.security||[]).map(t=>new rz(t,e)),this.servers=ti(e.specUrl,t.servers||t.pathServers||e.spec.servers||[])),n.showExtensions&&(this.extensions=td(t,n.showExtensions))}activate(){this.active=!0}deactivate(){this.active=!1}toggle(){this.expanded=!this.expanded}expand(){this.parent&&this.parent.expand()}collapse(){}get requestBody(){return this.operationSpec.requestBody&&new nj({parser:this.parser,infoOrRef:this.operationSpec.requestBody,options:this.options,isEvent:this.isEvent})}get codeSamples(){let{payloadSampleIdx:e,hideRequestPayloadSample:t}=this.options,r=this.operationSpec["x-codeSamples"]||this.operationSpec["x-code-samples"]||[];this.operationSpec["x-code-samples"]&&!nF&&(nF=!0,console.warn('"x-code-samples" is deprecated. Use "x-codeSamples" instead'));let n=this.requestBody&&this.requestBody.content;if(n&&n.hasSample&&!t){let t=Math.min(r.length,e);r=[...r.slice(0,t),{lang:"payload",label:"Payload",source:"",requestBodyContent:n},...r.slice(t)]}return r}get parameters(){let e=tt(this.parser,this.operationSpec.pathParameters,this.operationSpec.parameters).map(e=>new nb(this.parser,e,this.pointer,this.options));return this.options.sortPropsAlphabetically?te(e,"name"):this.options.requiredPropsFirst?e7(e):e}get responses(){let e=!1;return Object.keys(this.operationSpec.responses||[]).filter(t=>"default"===t||("success"===eF(t)&&(e=!0),eM(t))).map(t=>new nL({parser:this.parser,code:t,defaultAsError:e,infoOrRef:this.operationSpec.responses[t],options:this.options,isEvent:this.isEvent}))}get callbacks(){return Object.keys(this.operationSpec.callbacks||[]).map(e=>new rH(this.parser,e,this.operationSpec.callbacks[e],this.pointer,this.options))}}nN([ef.observable],nq.prototype,"ready",2),nN([ef.observable],nq.prototype,"active",2),nN([ef.observable],nq.prototype,"expanded",2),nN([ef.action],nq.prototype,"activate",1),nN([ef.action],nq.prototype,"deactivate",1),nN([ef.action],nq.prototype,"toggle",1),nN([tT],nq.prototype,"requestBody",1),nN([tT],nq.prototype,"codeSamples",1),nN([tT],nq.prototype,"parameters",1),nN([tT],nq.prototype,"responses",1),nN([tT],nq.prototype,"callbacks",1);var nB=Object.defineProperty,nQ=Object.defineProperties,nU=Object.getOwnPropertyDescriptors,nW=Object.getOwnPropertySymbols,nV=Object.prototype.hasOwnProperty,nH=Object.prototype.propertyIsEnumerable,nJ=(e,t,r)=>t in e?nB(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nY=(e,t)=>{for(var r in t||(t={}))nV.call(t,r)&&nJ(e,r,t[r]);if(nW)for(var r of nW(t))nH.call(t,r)&&nJ(e,r,t[r]);return e};class nZ{constructor(e,t,r){this.operations=[];let{resolved:n}=e.deref(r||{});this.initWebhooks(e,n,t)}initWebhooks(e,t,r){for(let n of Object.keys(t)){let i=t[n];for(let t of Object.keys(i).filter(eB)){let n=i[t];if(i.$ref){let n=e.deref(i||{});this.initWebhooks(e,{[t]:n},r)}if(!n)continue;let o=new nq(e,nQ(nY({},n),nU({httpVerb:t})),void 0,r,!1);this.operations.push(o)}}}}class nG{constructor(e,t,r){let{resolved:n}=e.deref(r);this.id=t,this.sectionId=tl+t,this.type=n.type,this.displayName=n["x-displayName"]||t,this.description=n.description||"","apiKey"===n.type&&(this.apiKey={name:n.name,in:n.in}),"http"===n.type&&(this.http={scheme:n.scheme,bearerFormat:n.bearerFormat}),"openIdConnect"===n.type&&(this.openId={connectUrl:n.openIdConnectUrl}),"oauth2"===n.type&&n.flows&&(this.flows=n.flows)}}class nX{constructor(e){let t=e.spec.components&&e.spec.components.securitySchemes||{};this.schemes=Object.keys(t).map(r=>new nG(e,r,t[r]))}}var nK=Object.defineProperty,n0=Object.getOwnPropertySymbols,n1=Object.prototype.hasOwnProperty,n2=Object.prototype.propertyIsEnumerable,n6=(e,t,r)=>t in e?nK(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,n3=(e,t)=>{for(var r in t||(t={}))n1.call(t,r)&&n6(e,r,t[r]);if(n0)for(var r of n0(t))n2.call(t,r)&&n6(e,r,t[r]);return e};class n5{constructor(e,t,r){var n,i,o;this.options=r,this.parser=new r8(e,t,r),this.info=new rC(this.parser,this.options),this.externalDocs=this.parser.spec.externalDocs,this.contentItems=iu.buildStructure(this.parser,this.options),this.securitySchemes=new nX(this.parser);let s=n3(n3({},null==(i=null==(n=this.parser)?void 0:n.spec)?void 0:i["x-webhooks"]),null==(o=this.parser)?void 0:o.spec.webhooks);this.webhooks=new nZ(this.parser,r,s)}}var n8=Object.defineProperty,n4=Object.getOwnPropertyDescriptor,n9=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?n4(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&n8(t,r,o),o};class n7{constructor(e,t,r){this.items=[],this.active=!1,this.expanded=!1,(0,ef.makeObservable)(this),this.id=t.id||e+"/"+O(t.name),this.type=e,this.name=t["x-displayName"]||t.name,this.level=t.level||1,this.sidebarLabel=this.name,this.description=t.description||"";let n=t.items;n&&n.length&&(this.description=rS.getTextBeforeHading(this.description,n[0].name)),this.parent=r,this.externalDocs=t.externalDocs,"group"===this.type&&(this.expanded=!0)}activate(){this.active=!0}expand(){this.parent&&this.parent.expand(),this.expanded=!0}collapse(){"group"!==this.type&&(this.expanded=!1)}deactivate(){this.active=!1}}n9([ef.observable],n7.prototype,"active",2),n9([ef.observable],n7.prototype,"expanded",2),n9([ef.action],n7.prototype,"activate",1),n9([ef.action],n7.prototype,"expand",1),n9([ef.action],n7.prototype,"collapse",1),n9([ef.action],n7.prototype,"deactivate",1);var ie=Object.defineProperty,it=Object.defineProperties,ir=Object.getOwnPropertyDescriptors,ii=Object.getOwnPropertySymbols,io=Object.prototype.hasOwnProperty,is=Object.prototype.propertyIsEnumerable,ia=(e,t,r)=>t in e?ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,il=(e,t)=>{for(var r in t||(t={}))io.call(t,r)&&ia(e,r,t[r]);if(ii)for(var r of ii(t))is.call(t,r)&&ia(e,r,t[r]);return e},ic=(e,t)=>it(e,ir(t));let ip=0;class iu{static buildStructure(e,t){let r=e.spec,n=[],i=iu.getTagsWithOperations(e,r);return n.push(...iu.addMarkdownItems(r.info.description||"",void 0,1,t)),r["x-tagGroups"]&&r["x-tagGroups"].length>0?n.push(...iu.getTagGroupsItems(e,void 0,r["x-tagGroups"],i,t)):n.push(...iu.getTagsItems(e,i,void 0,void 0,t)),n}static addMarkdownItems(e,t,r,n){let i=new rS(n,null==t?void 0:t.id).extractHeadings(e||"");i.length&&t&&t.description&&(t.description=rS.getTextBeforeHading(t.description,i[0].name));let o=(e,t,r=1)=>t.map(t=>{let n=new n7("section",t,e);return n.depth=r,t.items&&(n.items=o(n,t.items,r+1)),n});return o(t,i,r)}static getTagGroupsItems(e,t,r,n,i){let o=[];for(let s of r){let r=new n7("group",s,t);r.depth=ip,r.items=iu.getTagsItems(e,n,r,s,i),o.push(r)}return o}static getTagsItems(e,t,r,n,i){let o=(void 0===n?Object.keys(t):n.tags).map(e=>t[e]?(t[e].used=!0,t[e]):(console.warn(`Non-existing tag "${e}" is added to the group "${n.name}"`),null)),s=[];for(let t of o){if(!t)continue;let n=new n7("tag",t,r);if(n.depth=ip+1,""===t.name){let r=[...iu.addMarkdownItems(t.description||"",n,n.depth+1,i),...this.getOperationsItems(e,void 0,t,n.depth+1,i)];s.push(...r);continue}let o=this.getTagRelatedSchema({parser:e,tag:t,parent:n});n.items=[...o,...iu.addMarkdownItems(t.description||"",n,n.depth+1,i),...this.getOperationsItems(e,n,t,n.depth+1,i)],s.push(n)}return i.sortTagsAlphabetically&&s.sort(t_("name")),s}static getOperationsItems(e,t,r,n,i){if(0===r.operations.length)return[];let o=[];for(let s of r.operations){let r=new nq(e,s,t,i);r.depth=n,o.push(r)}return i.sortOperationsAlphabetically&&o.sort(t_("name")),o}static getTagsWithOperations(e,t){let r={},n=t["x-webhooks"]||t.webhooks;for(let e of t.tags||[])r[e.name]=ic(il({},e),{operations:[]});function i(e,t,n){for(let o of Object.keys(t)){let s=t[o];for(let t of Object.keys(s).filter(eB)){let a=s[t];if(s.$ref){let{resolved:t}=e.deref(s);i(e,{[o]:t},n);continue}let l=null==a?void 0:a.tags;for(let e of(l&&l.length||(l=[""]),l)){let i=r[e];void 0===i&&(i={name:e,operations:[]},r[e]=i),i["x-traitTag"]||i.operations.push(ic(il({},a),{pathName:o,pointer:e$.compile(["paths",o,t]),httpVerb:t,pathParameters:s.parameters||[],pathServers:s.servers,isWebhook:!!n}))}}}}return n&&i(e,n,!0),t.paths&&i(e,t.paths),r}static getTagRelatedSchema({parser:e,tag:t,parent:r}){var n;return Object.entries((null==(n=e.spec.components)?void 0:n.schemas)||{}).map(([e,n])=>{let i=n["x-tags"];if(!(null==i?void 0:i.includes(t.name)))return null;let o=new n7("schema",{name:e,"x-displayName":`${n.title||e}`,description:`<SchemaDefinition showWriteOnly={true} schemaRef="#/components/schemas/${e}" />`},r);return o.depth=r.depth+1,o}).filter(Boolean)}}var id=Object.defineProperty,ih=Object.getOwnPropertyDescriptor,im=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?ih(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&id(t,r,o),o};let ig="data-section-id";class iy{constructor(e,t,r){this.scroll=t,this.history=r,this.activeItemIdx=-1,this.sideBarOpened=!1,this.updateOnScroll=e=>{let t=e?1:-1,r=this.activeItemIdx;for(;(-1!==r||e)&&!(r>=this.flatItems.length-1&&e);){if(e){let e=this.getElementAtOrFirstChild(r+1);if(this.scroll.isElementBellow(e))break}else{let e=this.getElementAt(r);if(this.scroll.isElementAbove(e))break}r+=t}this.activate(this.flatItems[r],!0,!0)},this.updateOnHistory=(e=this.history.currentId)=>{let t;e&&((t=this.flatItems.find(t=>t.id===e))?this.activateAndScroll(t,!1):(e.startsWith(tl)&&(t=this.flatItems.find(e=>tl.startsWith(e.id)),this.activateAndScroll(t,!1)),this.scroll.scrollIntoViewBySelector(`[${ig}="${I(e)}"]`)))},this.getItemById=e=>this.flatItems.find(t=>t.id===e),(0,ef.makeObservable)(this),this.items=e.contentItems,this.flatItems=y(this.items||[],"items"),this.flatItems.forEach((e,t)=>e.absoluteIdx=t),this.subscribe()}static updateOnHistory(e=tN.currentId,t){e&&t.scrollIntoViewBySelector(`[${ig}="${I(e)}"]`)}subscribe(){this._unsubscribe=this.scroll.subscribe(this.updateOnScroll),this._hashUnsubscribe=this.history.subscribe(this.updateOnHistory)}toggleSidebar(){this.sideBarOpened=!this.sideBarOpened}closeSidebar(){this.sideBarOpened=!1}getElementAt(e){let t=this.flatItems[e];return t&&p(`[${ig}="${I(t.id)}"]`)||null}getElementAtOrFirstChild(e){let t=this.flatItems[e];return t&&"group"===t.type&&(t=t.items[0]),t&&p(`[${ig}="${I(t.id)}"]`)||null}get activeItem(){return this.flatItems[this.activeItemIdx]||void 0}activate(e,t=!0,r=!1){if((this.activeItem&&this.activeItem.id)!==(e&&e.id)&&(!e||"group"!==e.type)){if(this.deactivate(this.activeItem),!e)return this.activeItemIdx=-1,void this.history.replace("",r);e.depth<=ip||(this.activeItemIdx=e.absoluteIdx,t&&this.history.replace(encodeURI(e.id),r),e.activate(),e.expand())}}deactivate(e){if(void 0!==e)for(e.deactivate();void 0!==e;)e.collapse(),e=e.parent}activateAndScroll(e,t,r){let n=e&&this.getItemById(e.id)||e;this.activate(n,t,r),this.scrollToActive(),n&&n.items.length||this.closeSidebar()}scrollToActive(){this.scroll.scrollIntoView(this.getElementAt(this.activeItemIdx))}dispose(){this._unsubscribe(),this._hashUnsubscribe()}}im([ef.observable],iy.prototype,"activeItemIdx",2),im([ef.observable],iy.prototype,"sideBarOpened",2),im([ef.action],iy.prototype,"toggleSidebar",1),im([ef.action],iy.prototype,"closeSidebar",1),im([ef.action],iy.prototype,"activate",1),im([ef.action.bound],iy.prototype,"activateAndScroll",1);var ib=Object.defineProperty,ix=Object.getOwnPropertyDescriptor;let iv="scroll";class iw{constructor(e){this.options=e,this._prevOffsetY=0,this._scrollParent=c?window:void 0,this._emiter=new eE.EventEmitter,this.bind()}bind(){this._prevOffsetY=this.scrollY(),this._scrollParent&&this._scrollParent.addEventListener("scroll",this.handleScroll)}dispose(){this._scrollParent&&this._scrollParent.removeEventListener("scroll",this.handleScroll),this._emiter.removeAllListeners(iv)}scrollY(){return"undefined"!=typeof HTMLElement&&this._scrollParent instanceof HTMLElement?this._scrollParent.scrollTop:void 0!==this._scrollParent?this._scrollParent.pageYOffset:0}isElementBellow(e){if(null!==e)return e.getBoundingClientRect().top>this.options.scrollYOffset()}isElementAbove(e){if(null===e)return;let t=e.getBoundingClientRect().top;return(t>0?Math.floor(t):Math.ceil(t))<=this.options.scrollYOffset()}subscribe(e){let t=this._emiter.addListener(iv,e);return()=>t.removeListener(iv,e)}scrollIntoView(e){null!==e&&(e.scrollIntoView(),this._scrollParent&&this._scrollParent.scrollBy&&this._scrollParent.scrollBy(0,1-this.options.scrollYOffset()))}scrollIntoViewBySelector(e){let t=p(e);this.scrollIntoView(t)}handleScroll(){let e=this.scrollY()-this._prevOffsetY>0;this._prevOffsetY=this.scrollY(),this._emiter.emit(iv,e)}}((e,t,r,n)=>{for(var i,o=ix(t,r),s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(t,r,o)||o);o&&ib(t,r,o)})([ek.bind,tx(100)],iw.prototype,"handleScroll");class ik{constructor(){this.searchWorker=function(){let e;if(c)try{e=n(595)}catch(t){e=n(388).ZP}else e=n(388).ZP;return new e}()}indexItems(e){let t=e=>{e.forEach(e=>{"group"!==e.type&&this.add(e.name,(e.description||"").concat(" ",e.path||""),e.id),t(e.items)})};t(e),this.searchWorker.done()}add(e,t,r){this.searchWorker.add(e,t,r)}dispose(){this.searchWorker.terminate(),this.searchWorker.dispose()}search(e){return this.searchWorker.search(e)}toJS(){var e,t;return e=this,t=function*(){return this.searchWorker.toJS()},new Promise((r,n)=>{var i=e=>{try{s(t.next(e))}catch(e){n(e)}},o=e=>{try{s(t.throw(e))}catch(e){n(e)}},s=e=>e.done?r(e.value):Promise.resolve(e.value).then(i,o);s((t=t.apply(e,null)).next())})}load(e){this.searchWorker.load(e)}fromExternalJS(e,t){e&&t&&this.searchWorker.fromExternalJS(e,t)}}let iE=en.div`
  width: calc(100% - ${e=>e.theme.rightPanel.width});
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${({$compact:e,theme:t})=>er.lessThan("medium",!0)`
    width: 100%;
    padding: ${`${e?0:t.spacing.sectionVertical}px ${t.spacing.sectionHorizontal}px`};
  `};
`,iO=en.div.attrs(e=>({[ig]:e.id}))`
  padding: ${e=>e.theme.spacing.sectionVertical}px 0;

  &:last-child {
    min-height: calc(100vh + 1px);
  }

  & > &:last-child {
    min-height: initial;
  }

  ${er.lessThan("medium",!0)`
    padding: 0;
  `}
  ${({$underlined:e})=>e?"\n    position: relative;\n\n    &:not(:last-of-type):after {\n      position: absolute;\n      bottom: 0;\n      width: 100%;\n      display: block;\n      content: '';\n      border-bottom: 1px solid rgba(0, 0, 0, 0.2);\n    }\n  ":""}
`,ij=en.div`
  width: ${e=>e.theme.rightPanel.width};
  color: ${({theme:e})=>e.rightPanel.textColor};
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
  padding: 0 ${e=>e.theme.spacing.sectionHorizontal}px;

  ${er.lessThan("medium",!0)`
    width: 100%;
    padding: ${e=>`${e.theme.spacing.sectionVertical}px ${e.theme.spacing.sectionHorizontal}px`};
  `};
`,i$=en(ij)`
  background-color: ${e=>e.theme.rightPanel.backgroundColor};
`,iS=en.div`
  display: flex;
  width: 100%;
  padding: 0;

  ${er.lessThan("medium",!0)`
    flex-direction: column;
  `};
`,iC={1:"1.85714em",2:"1.57143em",3:"1.27em"},iA=e=>X`
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-weight: ${({theme:e})=>e.typography.headings.fontWeight};
  font-size: ${iC[e]};
  line-height: ${({theme:e})=>e.typography.headings.lineHeight};
`,iP=en.h1`
  ${iA(1)};
  color: ${({theme:e})=>e.colors.text.primary};

  ${ei("H1")};
`,iI=en.h2`
  ${iA(2)};
  color: ${({theme:e})=>e.colors.text.primary};
  margin: 0 0 20px;

  ${ei("H2")};
`,iT=en.h2`
  ${iA(3)};
  color: ${({theme:e})=>e.colors.text.primary};

  ${ei("H3")};
`,i_=en.h3`
  color: ${({theme:e})=>e.rightPanel.textColor};

  ${ei("RightPanelHeader")};
`,iR=en.h5`
  border-bottom: 1px solid rgba(38, 50, 56, 0.3);
  margin: 1em 0 1em 0;
  color: rgba(38, 50, 56, 0.5);
  font-weight: normal;
  text-transform: uppercase;
  font-size: 0.929em;
  line-height: 20px;

  ${ei("UnderlinedHeader")};
`;var iL=(e,t,r)=>new Promise((n,i)=>{var o=e=>{try{a(r.next(e))}catch(e){i(e)}},s=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())});let iz=(0,s.createContext)(void 0),{Provider:iD,Consumer:iN}=iz;function iM(e){let{spec:t,specUrl:r,options:n,onLoaded:i,children:o}=e,[a,l]=s.useState(null),[c,p]=s.useState(null);if(c)throw c;s.useEffect(()=>{!function(){iL(this,null,function*(){if(t||r){l(null);try{let e=yield ev(t||r);l(e)}catch(e){throw i&&i(e),p(e),e}}})}()},[t,r]);let u=s.useMemo(()=>{if(!a)return null;try{return new aJ(a,r,n)}catch(e){throw i&&i(e),e}},[a,r,n]);return s.useEffect(()=>{u&&i&&i()},[u,i]),o({loading:!u,store:u})}function iF(){return(0,s.useContext)(iz)}let iq=e=>X`
  ${e} {
    cursor: pointer;
    margin-left: -20px;
    padding: 0;
    line-height: 1;
    width: 20px;
    display: inline-block;
    outline: 0;
  }
  ${e}:before {
    content: '';
    width: 15px;
    height: 15px;
    background-size: contain;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBmaWxsPSIjMDEwMTAxIiBkPSJNNDU5LjcgMjMzLjRsLTkwLjUgOTAuNWMtNTAgNTAtMTMxIDUwLTE4MSAwIC03LjktNy44LTE0LTE2LjctMTkuNC0yNS44bDQyLjEtNDIuMWMyLTIgNC41LTMuMiA2LjgtNC41IDIuOSA5LjkgOCAxOS4zIDE1LjggMjcuMiAyNSAyNSA2NS42IDI0LjkgOTAuNSAwbDkwLjUtOTAuNWMyNS0yNSAyNS02NS42IDAtOTAuNSAtMjQuOS0yNS02NS41LTI1LTkwLjUgMGwtMzIuMiAzMi4yYy0yNi4xLTEwLjItNTQuMi0xMi45LTgxLjYtOC45bDY4LjYtNjguNmM1MC01MCAxMzEtNTAgMTgxIDBDNTA5LjYgMTAyLjMgNTA5LjYgMTgzLjQgNDU5LjcgMjMzLjR6TTIyMC4zIDM4Mi4ybC0zMi4yIDMyLjJjLTI1IDI0LjktNjUuNiAyNC45LTkwLjUgMCAtMjUtMjUtMjUtNjUuNiAwLTkwLjVsOTAuNS05MC41YzI1LTI1IDY1LjUtMjUgOTAuNSAwIDcuOCA3LjggMTIuOSAxNy4yIDE1LjggMjcuMSAyLjQtMS40IDQuOC0yLjUgNi44LTQuNWw0Mi4xLTQyYy01LjQtOS4yLTExLjYtMTgtMTkuNC0yNS44IC01MC01MC0xMzEtNTAtMTgxIDBsLTkwLjUgOTAuNWMtNTAgNTAtNTAgMTMxIDAgMTgxIDUwIDUwIDEzMSA1MCAxODEgMGw2OC42LTY4LjZDMjc0LjYgMzk1LjEgMjQ2LjQgMzkyLjMgMjIwLjMgMzgyLjJ6Ii8+PC9zdmc+Cg==');
    opacity: 0.5;
    visibility: hidden;
    display: inline-block;
    vertical-align: middle;
  }

  h1:hover > ${e}::before, h2:hover > ${e}::before, ${e}:hover::before {
    visibility: visible;
  }
`,iB=en(function(e){let t=s.useContext(iz),r=s.useCallback(r=>{var n,i;t&&(n=t.menu.history,i=e.to,r.defaultPrevented||0!==r.button||r.metaKey||r.altKey||r.ctrlKey||r.shiftKey||(r.preventDefault(),n.replace(encodeURI(i))))},[t,e.to]);return t?s.createElement("a",{className:e.className,href:t.menu.history.linkForId(e.to),onClick:r,"aria-label":e.to},e.children):null})`
  ${iq("&")};
`;function iQ(e){return s.createElement(iB,{to:e.to})}let iU={left:"90deg",right:"-90deg",up:"-180deg",down:"0"},iW=en(e=>s.createElement("svg",{className:e.className,style:e.style,version:"1.1",viewBox:"0 0 24 24",x:"0",xmlns:"http://www.w3.org/2000/svg",y:"0","aria-hidden":"true"},s.createElement("polygon",{points:"17.3 8.3 12 13.6 6.7 8.3 5.3 9.7 12 16.4 18.7 9.7 "})))`
  height: ${e=>e.size||"18px"};
  width: ${e=>e.size||"18px"};
  min-width: ${e=>e.size||"18px"};
  vertical-align: middle;
  float: ${e=>e.float||""};
  transition: transform 0.2s ease-out;
  transform: rotateZ(${e=>iU[e.direction||"down"]});

  polygon {
    fill: ${({color:e,theme:t})=>e&&t.colors.responses[e]&&t.colors.responses[e].color||e};
  }
`,iV=en.span`
  display: inline-block;
  padding: 2px 8px;
  margin: 0;
  background-color: ${e=>e.theme.colors[e.type].main};
  color: ${e=>e.theme.colors[e.type].contrastText};
  font-size: ${e=>e.theme.typography.code.fontSize};
  vertical-align: middle;
  line-height: 1.6;
  border-radius: 4px;
  font-weight: ${({theme:e})=>e.typography.fontWeightBold};
  font-size: 12px;
  + span[type] {
    margin-left: 4px;
  }
`,iH=X`
  text-decoration: line-through;
  color: #707070;
`,iJ=en.caption`
  text-align: right;
  font-size: 0.9em;
  font-weight: normal;
  color: ${e=>e.theme.colors.text.secondary};
`,iY=en.td`
  border-left: 1px solid ${e=>e.theme.schema.linesColor};
  box-sizing: border-box;
  position: relative;
  padding: 10px 10px 10px 0;

  ${er.lessThan("small")`
    display: block;
    overflow: hidden;
  `}

  tr:first-of-type > &,
  tr.last > & {
    border-left-width: 0;
    background-position: top left;
    background-repeat: no-repeat;
    background-size: 1px 100%;
  }

  tr:first-of-type > & {
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      transparent 22px,
      ${e=>e.theme.schema.linesColor} 22px,
      ${e=>e.theme.schema.linesColor} 100%
    );
  }

  tr.last > & {
    background-image: linear-gradient(
      to bottom,
      ${e=>e.theme.schema.linesColor} 0%,
      ${e=>e.theme.schema.linesColor} 22px,
      transparent 22px,
      transparent 100%
    );
  }

  tr.last + tr > & {
    border-left-color: transparent;
  }

  tr.last:first-child > & {
    background: none;
    border-left-color: transparent;
  }
`,iZ=en(iY)`
  padding: 0;
`,iG=en(iY)`
  vertical-align: top;
  line-height: 20px;
  white-space: nowrap;
  font-size: 13px;
  font-family: ${e=>e.theme.typography.code.fontFamily};

  &.deprecated {
    ${iH};
  }

  ${({kind:e})=>"patternProperties"===e&&X`
      > span.property-name {
        display: inline-table;
        white-space: break-spaces;
        margin-right: 20px;

        ::before,
        ::after {
          content: '/';
          filter: opacity(0.2);
        }
      }
    `}

  ${({kind:e=""})=>["field","additionalProperties","patternProperties"].includes(e)?"":"font-style: italic"};

  ${ei("PropertyNameCell")};
`,iX=en.td`
  border-bottom: 1px solid #9fb4be;
  padding: 10px 0;
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  box-sizing: border-box;

  tr.expanded & {
    border-bottom: none;
  }

  ${er.lessThan("small")`
    padding: 0 20px;
    border-bottom: none;
    border-left: 1px solid ${e=>e.theme.schema.linesColor};

    tr.last > & {
      border-left: none;
    }
  `}

  ${ei("PropertyDetailsCell")};
`,iK=en.span`
  color: ${e=>e.theme.schema.linesColor};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin-right: 10px;

  &::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 10px;
    height: 1px;
    background: ${e=>e.theme.schema.linesColor};
  }

  &::after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    background: ${e=>e.theme.schema.linesColor};
    height: 7px;
  }
`,i0=en.div`
  padding: ${({theme:e})=>e.schema.nestingSpacing};
`,i1=en.table`
  border-collapse: separate;
  border-radius: 3px;
  font-size: ${e=>e.theme.typography.fontSize};

  border-spacing: 0;
  width: 100%;

  > tr {
    vertical-align: middle;
  }

  ${er.lessThan("small")`
    display: block;
    > tr, > tbody > tr {
      display: block;
    }
  `}

  ${er.lessThan("small",!1," and (-ms-high-contrast:none)")`
    td {
      float: left;
      width: 100%;
    }
  `}

  &
    ${i0},
    &
    ${i0}
    ${i0}
    ${i0},
    &
    ${i0}
    ${i0}
    ${i0}
    ${i0}
    ${i0} {
    margin: ${({theme:e})=>e.schema.nestingSpacing};
    margin-right: 0;
    background: ${({theme:e})=>e.schema.nestedBackground};
  }

  &
    ${i0}
    ${i0},
    &
    ${i0}
    ${i0}
    ${i0}
    ${i0},
    &
    ${i0}
    ${i0}
    ${i0}
    ${i0}
    ${i0}
    ${i0} {
    background: #ffffff;
  }
`,i2=en.div`
  margin: 0 0 3px 0;
  display: inline-block;
`,i6=en.span`
  font-size: 0.9em;
  margin-right: 10px;
  color: ${e=>e.theme.colors.primary.main};
  font-family: ${e=>e.theme.typography.headings.fontFamily};
}
`,i3=en.button`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 5px;
  font-size: 0.8em;
  cursor: pointer;
  border: 1px solid ${e=>e.theme.colors.primary.main};
  padding: 2px 10px;
  line-height: 1.5em;
  outline: none;
  &:focus {
    box-shadow: 0 0 0 1px ${e=>e.theme.colors.primary.main};
  }

  ${({$deprecated:e})=>e&&iH||""};

  ${e=>e.$active?`
      color: white;
      background-color: ${e.theme.colors.primary.main};
      &:focus {
        box-shadow: none;
        background-color: ${(0,a.darken)(.15,e.theme.colors.primary.main)};
      }
      `:`
        color: ${e.theme.colors.primary.main};
        background-color: white;
      `}
`,i5=en.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ' [';
  }
`,i8=en.div`
  font-size: 0.9em;
  font-family: ${e=>e.theme.typography.code.fontFamily};
  &::after {
    content: ']';
  }
`;var i4=r(67202);let i9=en(i4.Tabs)`
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin: 0 -5px;

    > li {
      padding: 5px 10px;
      display: inline-block;

      background-color: ${({theme:e})=>e.codeBlock.backgroundColor};
      border-bottom: 1px solid rgba(0, 0, 0, 0.5);
      cursor: pointer;
      text-align: center;
      outline: none;
      color: ${({theme:e})=>(0,a.darken)(e.colors.tonalOffset,e.rightPanel.textColor)};
      margin: 0
        ${({theme:e})=>`${e.spacing.unit}px ${e.spacing.unit}px ${e.spacing.unit}px`};
      border: 1px solid ${({theme:e})=>(0,a.darken)(.05,e.codeBlock.backgroundColor)};
      border-radius: 5px;
      min-width: 60px;
      font-size: 0.9em;
      font-weight: bold;

      &.react-tabs__tab--selected {
        color: ${e=>e.theme.colors.text.primary};
        background: ${({theme:e})=>e.rightPanel.textColor};
        &:focus {
          outline: auto;
        }
      }

      &:only-child {
        flex: none;
        min-width: 100px;
      }

      &.tab-success {
        color: ${e=>e.theme.colors.responses.success.tabTextColor};
      }

      &.tab-redirect {
        color: ${e=>e.theme.colors.responses.redirect.tabTextColor};
      }

      &.tab-info {
        color: ${e=>e.theme.colors.responses.info.tabTextColor};
      }

      &.tab-error {
        color: ${e=>e.theme.colors.responses.error.tabTextColor};
      }
    }
  }
  > .react-tabs__tab-panel {
    background: ${({theme:e})=>e.codeBlock.backgroundColor};
    & > div,
    & > pre {
      padding: ${e=>4*e.theme.spacing.unit}px;
      margin: 0;
    }

    & > div > pre {
      padding: 0;
    }
  }
`,i7=(en(i9)`
  > ul {
    display: block;
    > li {
      padding: 2px 5px;
      min-width: auto;
      margin: 0 15px 0 0;
      font-size: 13px;
      font-weight: normal;
      border-bottom: 1px dashed;
      color: ${({theme:e})=>(0,a.darken)(e.colors.tonalOffset,e.rightPanel.textColor)};
      border-radius: 0;
      background: none;

      &:last-child {
        margin-right: 0;
      }

      &.react-tabs__tab--selected {
        color: ${({theme:e})=>e.rightPanel.textColor};
        background: none;
      }
    }
  }
  > .react-tabs__tab-panel {
    & > div,
    & > pre {
      padding: ${e=>2*e.theme.spacing.unit}px 0;
    }
  }
`,en.div`
  /**
  * Based on prism-dark.css
  */

  code[class*='language-'],
  pre[class*='language-'] {
    /* color: white;
    background: none; */
    text-shadow: 0 -0.1em 0.2em black;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }

  /* Code blocks */
  pre[class*='language-'] {
    padding: 1em;
    margin: 0.5em 0;
    overflow: auto;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: hsl(30, 20%, 50%);
  }

  .token.punctuation {
    opacity: 0.7;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.property,
  .token.tag,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #4a8bb3;
  }

  .token.boolean {
    color: #e64441;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #a0fbaa;
    & + a,
    & + a:visited {
      color: #4ed2ba;
      text-decoration: underline;
    }
  }

  .token.property.string {
    color: white;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .token.variable {
    color: hsl(40, 90%, 60%);
  }

  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: hsl(350, 40%, 70%);
  }

  .token.regex,
  .token.important {
    color: #e90;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.deleted {
    color: red;
  }

  ${ei("Prism")};
`),oe=en.div`
  opacity: 0.7;
  transition: opacity 0.3s ease;
  text-align: right;
  &:focus-within {
    opacity: 1;
  }
  > button {
    background-color: transparent;
    border: 0;
    color: inherit;
    padding: 2px 10px;
    font-family: ${({theme:e})=>e.typography.fontFamily};
    font-size: ${({theme:e})=>e.typography.fontSize};
    line-height: ${({theme:e})=>e.typography.lineHeight};
    cursor: pointer;
    outline: 0;

    :hover,
    :focus {
      background: rgba(255, 255, 255, 0.1);
    }
  }
`,ot=en.div`
  &:hover ${oe} {
    opacity: 1;
  }
`,or=en(i7).attrs({as:"pre"})`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};
  overflow-x: auto;
  margin: 0;

  white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
`;var on=r(54830),oi=n.n(on),oo=Object.defineProperty,os=Object.getOwnPropertySymbols,oa=Object.prototype.hasOwnProperty,ol=Object.prototype.propertyIsEnumerable,oc=(e,t,r)=>t in e?oo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let op=oi()||on,ou="";c&&(ou="[object Object]"===(ou="function"==typeof(ou=n(232)).toString&&ou.toString()||"")?"":ou);let od=K`${ou}`,oh=en.div`
  position: relative;
`;class om extends s.Component{constructor(){super(...arguments),this.handleRef=e=>{this._container=e}}componentDidMount(){let e=this._container.parentElement&&this._container.parentElement.scrollTop||0;this.inst=new op(this._container,this.props.options||{}),this._container.scrollTo&&this._container.scrollTo(0,e)}componentDidUpdate(){this.inst.update()}componentWillUnmount(){this.inst.destroy()}render(){let{children:e,className:t,updateFn:r}=this.props;return r&&r(this.componentDidUpdate.bind(this)),s.createElement(s.Fragment,null,ou&&s.createElement(od,null),s.createElement(oh,{className:`scrollbar-container ${t}`,ref:this.handleRef},e))}}function of(e){return s.createElement(ed.Consumer,null,t=>t.nativeScrollbars?s.createElement("div",{style:{overflow:"auto",overscrollBehavior:"contain",msOverflowStyle:"-ms-autohiding-scrollbar"}},e.children):s.createElement(om,((e,t)=>{for(var r in t||(t={}))oa.call(t,r)&&oc(e,r,t[r]);if(os)for(var r of os(t))ol.call(t,r)&&oc(e,r,t[r]);return e})({},e),e.children))}let og=en(({className:e,style:t})=>s.createElement("svg",{className:e,style:t,xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s.createElement("polyline",{points:"6 9 12 15 18 9"})))`
  position: absolute;
  pointer-events: none;
  z-index: 1;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  right: 8px;
  margin: auto;
  text-align: center;
  polyline {
    color: ${e=>"dark"===e.variant&&"white"};
  }
`,oy=s.memo(e=>{let{options:t,onChange:r,placeholder:n,value:i="",variant:o,className:a}=e;return s.createElement("div",{className:a},s.createElement(og,{variant:o}),s.createElement("select",{onChange:e=>{let{selectedIndex:i}=e.target;r(t[n?i-1:i])},value:i,className:"dropdown-select"},n&&s.createElement("option",{disabled:!0,hidden:!0,value:n},n),t.map(({idx:e,value:t,title:r},n)=>s.createElement("option",{key:e||t+n,value:t},r||t))),s.createElement("label",null,i))}),ob=Z()(oy)`
  label {
    box-sizing: border-box;
    min-width: 100px;
    outline: none;
    display: inline-block;
    font-family: ${e=>e.theme.typography.headings.fontFamily};
    color: ${({theme:e})=>e.colors.text.primary};
    vertical-align: bottom;
    width: ${({fullWidth:e})=>e?"100%":"auto"};
    text-transform: none;
    padding: 0 22px 0 4px;

    font-size: 0.929em;
    line-height: 1.5em;
    font-family: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .dropdown-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    border: none;
    appearance: none;
    cursor: pointer;

    color: ${({theme:e})=>e.colors.text.primary};
    line-height: inherit;
    font-family: inherit;
  }
  box-sizing: border-box;
  min-width: 100px;
  outline: none;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid rgba(38, 50, 56, 0.5);
  vertical-align: bottom;
  padding: 2px 0px 2px 6px;
  position: relative;
  width: auto;
  background: white;
  color: #263238;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
  cursor: pointer;
  transition: border 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;

  &:hover,
  &:focus-within {
    border: 1px solid ${e=>e.theme.colors.primary.main};
    color: ${e=>e.theme.colors.primary.main};
    box-shadow: 0px 0px 0px 1px ${e=>e.theme.colors.primary.main};
  }
`,ox=Z()(ob)`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.969em;

  font-size: 1em;
  border: none;
  padding: 0 1.2em 0 0;
  background: transparent;

  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    label {
      color: ${e=>e.theme.colors.primary.main};
      text-shadow: 0px 0px 0px ${e=>e.theme.colors.primary.main};
    }
  }
`,ov=Z().span`
  margin-left: 10px;
  text-transform: none;
  font-size: 0.929em;
  color: black;
`;var ow=Object.defineProperty,ok=Object.getOwnPropertySymbols,oE=Object.prototype.hasOwnProperty,oO=Object.prototype.propertyIsEnumerable,oj=(e,t,r)=>t in e?ow(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,o$=(e,t)=>{for(var r in t||(t={}))oE.call(t,r)&&oj(e,r,t[r]);if(ok)for(var r of ok(t))oO.call(t,r)&&oj(e,r,t[r]);return e};function oS(e){let{Label:t=ov,Dropdown:r=ox}=e;return 1===e.options.length?s.createElement(t,null,e.options[0].value):s.createElement(r,o$({},e))}var oC=r(61716);let oA=X`
  a {
    text-decoration: ${e=>e.theme.typography.links.textDecoration};
    color: ${e=>e.theme.typography.links.color};

    &:visited {
      color: ${e=>e.theme.typography.links.visited};
    }

    &:hover {
      color: ${e=>e.theme.typography.links.hover};
      text-decoration: ${e=>e.theme.typography.links.hoverTextDecoration};
    }
  }
`,oP=en(i7)`
  font-family: ${e=>e.theme.typography.fontFamily};
  font-weight: ${e=>e.theme.typography.fontWeightRegular};
  line-height: ${e=>e.theme.typography.lineHeight};

  p {
    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({$compact:e})=>e&&"\n    p:first-child {\n      margin-top: 0;\n    }\n    p:last-child {\n      margin-bottom: 0;\n    }\n  "}

  ${({$inline:e})=>e&&" p {\n    display: inline-block;\n  }"}

  h1 {
    ${iA(1)};
    color: ${e=>e.theme.colors.primary.main};
    margin-top: 0;
  }

  h2 {
    ${iA(2)};
    color: ${e=>e.theme.colors.text.primary};
  }

  code {
    color: ${({theme:e})=>e.typography.code.color};
    background-color: ${({theme:e})=>e.typography.code.backgroundColor};

    font-family: ${e=>e.theme.typography.code.fontFamily};
    border-radius: 2px;
    border: 1px solid rgba(38, 50, 56, 0.1);
    padding: 0 ${({theme:e})=>e.spacing.unit}px;
    font-size: ${e=>e.theme.typography.code.fontSize};
    font-weight: ${({theme:e})=>e.typography.code.fontWeight};

    word-break: break-word;
  }

  pre {
    font-family: ${e=>e.theme.typography.code.fontFamily};
    white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
    background-color: ${({theme:e})=>e.codeBlock.backgroundColor};
    color: white;
    padding: ${e=>4*e.theme.spacing.unit}px;
    overflow-x: auto;
    line-height: normal;
    border-radius: 0;
    border: 1px solid rgba(38, 50, 56, 0.1);

    code {
      background-color: transparent;
      color: white;
      padding: 0;

      &:before,
      &:after {
        content: none;
      }
    }
  }

  blockquote {
    margin: 0;
    margin-bottom: 1em;
    padding: 0 15px;
    color: #777;
    border-left: 4px solid #ddd;
  }

  img {
    max-width: 100%;
    box-sizing: content-box;
  }

  ul,
  ol {
    padding-left: 2em;
    margin: 0;
    margin-bottom: 1em;

    ul,
    ol {
      margin-bottom: 0;
      margin-top: 0;
    }
  }

  table {
    display: block;
    width: 100%;
    overflow: auto;
    word-break: normal;
    word-break: keep-all;
    border-collapse: collapse;
    border-spacing: 0;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  table tr {
    background-color: #fff;
    border-top: 1px solid #ccc;

    &:nth-child(2n) {
      background-color: ${({theme:e})=>e.schema.nestedBackground};
    }
  }

  table th,
  table td {
    padding: 6px 13px;
    border: 1px solid #ddd;
  }

  table th {
    text-align: left;
    font-weight: bold;
  }

  ${iq(".share-link")};

  ${oA}

  ${ei("Markdown")};
`;var oI=Object.defineProperty,oT=Object.defineProperties,o_=Object.getOwnPropertyDescriptors,oR=Object.getOwnPropertySymbols,oL=Object.prototype.hasOwnProperty,oz=Object.prototype.propertyIsEnumerable,oD=(e,t,r)=>t in e?oI(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oN=(e,t)=>{for(var r in t||(t={}))oL.call(t,r)&&oD(e,r,t[r]);if(oR)for(var r of oR(t))oz.call(t,r)&&oD(e,r,t[r]);return e};let oM=Z()(e=>s.createElement(oP,oN({},e)))`
  display: inline;
`;function oF(e){var{inline:t,compact:r}=e,n=((e,t)=>{var r={};for(var n in e)oL.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&oR)for(var n of oR(e))0>t.indexOf(n)&&oz.call(e,n)&&(r[n]=e[n]);return r})(e,["inline","compact"]);let i=t?oM:oP;return s.createElement(em,null,e=>{var o,a;return s.createElement(i,oT(oN({className:"redoc-markdown "+(n.className||""),dangerouslySetInnerHTML:{__html:(o=e.untrustedSpec,a=n.html,o?oC.sanitize(a):a)},"data-role":n["data-role"]},n),o_({$inline:t,$compact:r})))})}class oq extends s.Component{render(){let{source:e,inline:t,compact:r,className:n,"data-role":i}=this.props,o=new rS;return s.createElement(oF,{html:o.renderMd(e),inline:t,compact:r,className:n,"data-role":i})}}let oB=en.div`
  position: relative;
`,oQ=en.div`
  position: absolute;
  min-width: 80px;
  max-width: 500px;
  background: #fff;
  bottom: 100%;
  left: 50%;
  margin-bottom: 10px;
  transform: translateX(-50%);

  border-radius: 4px;
  padding: 0.3em 0.6em;
  text-align: center;
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
`,oU=en.div`
  background: #fff;
  color: #000;
  display: inline;
  font-size: 0.85em;
  white-space: nowrap;
`,oW=en.div`
  position: absolute;
  width: 0;
  height: 0;
  bottom: -5px;
  left: 50%;
  margin-left: -5px;
  border-left: solid transparent 5px;
  border-right: solid transparent 5px;
  border-top: solid #fff 5px;
`,oV=en.div`
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -20px;
`;class oH extends s.Component{render(){let{open:e,title:t,children:r}=this.props;return s.createElement(oB,null,r,e&&s.createElement(oQ,null,s.createElement(oU,null,t),s.createElement(oW,null),s.createElement(oV,null)))}}let oJ="undefined"!=typeof document&&document.queryCommandSupported&&document.queryCommandSupported("copy");class oY{static isSupported(){return oJ}static selectElement(e){let t,r;document.body.createTextRange?((t=document.body.createTextRange()).moveToElementText(e),t.select()):document.createRange&&window.getSelection&&(r=window.getSelection(),(t=document.createRange()).selectNodeContents(e),r.removeAllRanges(),r.addRange(t))}static deselect(){if(document.selection)document.selection.empty();else if(window.getSelection){let e=window.getSelection();e&&e.removeAllRanges()}}static copySelected(){let e;try{e=document.execCommand("copy")}catch(t){e=!1}return e}static copyElement(e){oY.selectElement(e);let t=oY.copySelected();return t&&oY.deselect(),t}static copyCustom(e){let t=document.createElement("textarea");t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="2em",t.style.height="2em",t.style.padding="0",t.style.border="none",t.style.outline="none",t.style.boxShadow="none",t.style.background="transparent",t.value=e,document.body.appendChild(t),t.select();let r=oY.copySelected();return document.body.removeChild(t),r}}let oZ=e=>{let[t,r]=s.useState(!1),n=()=>{let t="string"==typeof e.data?e.data:JSON.stringify(e.data,null,2);oY.copyCustom(t),i()},i=()=>{r(!0),setTimeout(()=>{r(!1)},1500)};return e.children({renderCopyButton:()=>s.createElement("button",{onClick:n},s.createElement(oH,{title:oY.isSupported()?"Copied":"Not supported in your browser",open:t},"Copy"))})},oG=1;function oX(e){return void 0!==e?e.toString().replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function oK(e){return JSON.stringify(e).slice(1,-1)}function o0(e,t){return'<span class="'+t+'">'+oX(e)+"</span>"}function o1(e){return'<span class="token punctuation">'+e+"</span>"}let o2=X`
  .redoc-json code > .collapser {
    display: none;
    pointer-events: none;
  }

  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: ${e=>e.theme.typography.code.fontSize};

  white-space: ${({theme:e})=>e.typography.code.wrap?"pre-wrap":"pre"};
  contain: content;
  overflow-x: auto;

  .callback-function {
    color: gray;
  }

  .collapser:after {
    content: '-';
    cursor: pointer;
  }

  .collapsed > .collapser:after {
    content: '+';
    cursor: pointer;
  }

  .ellipsis:after {
    content: ' … ';
  }

  .collapsible {
    margin-left: 2em;
  }

  .hoverable {
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border-radius: 2px;
  }

  .hovered {
    background-color: rgba(235, 238, 249, 1);
  }

  .collapser {
    background-color: transparent;
    border: 0;
    color: #fff;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    font-size: ${e=>e.theme.typography.code.fontSize};
    padding-right: 6px;
    padding-left: 6px;
    padding-top: 0;
    padding-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    position: absolute;
    top: 4px;
    left: -1.5em;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    padding: 2px;
    &:focus {
      outline-color: #fff;
      outline-style: dotted;
      outline-width: 1px;
    }
  }

  ul {
    list-style-type: none;
    padding: 0px;
    margin: 0px 0px 0px 26px;
  }

  li {
    position: relative;
    display: block;
  }

  .hoverable {
    display: inline-block;
  }

  .selected {
    outline-style: solid;
    outline-width: 1px;
    outline-style: dotted;
  }

  .collapsed > .collapsible {
    display: none;
  }

  .ellipsis {
    display: none;
  }

  .collapsed > .ellipsis {
    display: inherit;
  }
`,o6=en.div`
  &:hover > ${oe} {
    opacity: 1;
  }
`,o3=en(e=>{let[t,r]=s.useState(),n=()=>{let e=null==t?void 0:t.getElementsByClassName("collapsible");for(let t of Array.prototype.slice.call(e)){let e=t.parentNode;e.classList.remove("collapsed"),e.querySelector(".collapser").setAttribute("aria-label","collapse")}},i=()=>{let e=null==t?void 0:t.getElementsByClassName("collapsible");for(let t of Array.prototype.slice.call(e,1)){let e=t.parentNode;e.classList.add("collapsed"),e.querySelector(".collapser").setAttribute("aria-label","expand")}},o=e=>{let t;"collapser"===e.className&&((t=e.parentElement.getElementsByClassName("collapsible")[0]).parentElement.classList.contains("collapsed")?(t.parentElement.classList.remove("collapsed"),e.setAttribute("aria-label","collapse")):(t.parentElement.classList.add("collapsed"),e.setAttribute("aria-label","expand")))},a=s.useCallback(e=>{o(e.target)},[]),l=s.useCallback(e=>{"Enter"===e.key&&o(e.target)},[]);return s.useEffect(()=>(null==t||t.addEventListener("click",a),null==t||t.addEventListener("focus",l),()=>{null==t||t.removeEventListener("click",a),null==t||t.removeEventListener("focus",l)}),[a,l,t]),s.createElement(oZ,{data:e.data},({renderCopyButton:t})=>{let o=e.data&&Object.values(e.data).some(e=>"object"==typeof e&&null!==e);return s.createElement(o6,null,s.createElement(oe,null,t(),o&&s.createElement(s.Fragment,null,s.createElement("button",{onClick:n}," Expand all "),s.createElement("button",{onClick:i}," Collapse all "))),s.createElement(ed.Consumer,null,t=>{var n,i;return s.createElement(i7,{className:e.className,ref:e=>r(e),dangerouslySetInnerHTML:{__html:(n=e.data,i=t.jsonSampleExpandLevel,oG=1,'<div class="redoc-json"><code>'+function e(t,r){let n=typeof t,i="";return null==t?i+=o0("null","token keyword"):t&&t.constructor===Array?(oG++,i+=function(t,r){let n=oG>r?"collapsed":"",i=`<button class="collapser" aria-label="${oG>r+1?"expand":"collapse"}"></button>${o1("[")}<span class="ellipsis"></span><ul class="array collapsible">`,o=!1,s=t.length;for(let a=0;a<s;a++)o=!0,i+='<li><div class="hoverable '+n+'">'+e(t[a],r),a<s-1&&(i+=","),i+="</div></li>";return i+=`</ul>${o1("]")}`,o||(i=o1("[ ]")),i}(t,r),oG--):t&&t.constructor===Date?i+=o0('"'+t.toISOString()+'"',"token string"):"object"===n?(oG++,i+=function(t,r){let n=oG>r?"collapsed":"",i=Object.keys(t),o=i.length,s=`<button class="collapser" aria-label="${oG>r+1?"expand":"collapse"}"></button>${o1("{")}<span class="ellipsis"></span><ul class="obj collapsible">`,a=!1;for(let l=0;l<o;l++){let c=i[l];a=!0,s+='<li><div class="hoverable '+n+'"><span class="property token string">"'+oX(c)+'"</span>: '+e(t[c],r),l<o-1&&(s+=o1(",")),s+="</div></li>"}return s+=`</ul>${o1("}")}`,a||(s=o1("{ }")),s}(t,r),oG--):"number"===n?i+=o0(t,"token number"):"string"===n?/^(http|https):\/\/[^\s]+$/.test(t)?i+=o0('"',"token string")+'<a href="'+encodeURI(t)+'">'+oX(oK(t))+"</a>"+o0('"',"token string"):i+=o0('"'+oK(t)+'"',"token string"):"boolean"===n&&(i+=o0(t,"token boolean")),i}(n,i)+"</code></div>")}})}))})})`
  ${o2};
`,o5=e=>{let{source:t,lang:r}=e;return s.createElement(or,{dangerouslySetInnerHTML:{__html:tb(t,r)}})},o8=e=>{let{source:t,lang:r}=e;return s.createElement(oZ,{data:t},({renderCopyButton:e})=>s.createElement(ot,null,s.createElement(oe,null,e()),s.createElement(o5,{lang:r,source:t})))};function o4({value:e,mimeType:t}){return eH(t)?s.createElement(o3,{data:e}):("object"==typeof e&&(e=JSON.stringify(e,null,2)),s.createElement(o8,{lang:e2(t),source:e}))}var o9=(e,t,r)=>new Promise((n,i)=>{var o=e=>{try{a(r.next(e))}catch(e){i(e)}},s=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())});function o7({example:e,mimeType:t}){return void 0===e.value&&e.externalValueUrl?s.createElement(se,{example:e,mimeType:t}):s.createElement(o4,{value:e.value,mimeType:t})}function se({example:e,mimeType:t}){let r=function(e,t){let[,r]=(0,s.useState)(!0),n=(0,s.useRef)(void 0),i=(0,s.useRef)(void 0);return i.current!==e&&(n.current=void 0),i.current=e,(0,s.useEffect)(()=>{(()=>{o9(this,null,function*(){r(!0);try{n.current=yield e.getExternalValue(t)}catch(e){n.current=e}r(!1)})})()},[e,t]),n.current}(e,t);return void 0===r?s.createElement("span",null,"Loading..."):r instanceof Error?s.createElement(or,null,"Error loading external example: ",s.createElement("br",null),s.createElement("a",{className:"token string",href:e.externalValueUrl,target:"_blank",rel:"noopener noreferrer"},e.externalValueUrl)):s.createElement(o4,{value:r,mimeType:t})}let st=en.div`
  padding: 0.9em;
  background-color: ${({theme:e})=>(0,a.transparentize)(.6,e.rightPanel.backgroundColor)};
  margin: 0 0 10px 0;
  display: block;
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-size: 0.929em;
  line-height: 1.5em;
`,sr=en.span`
  font-family: ${({theme:e})=>e.typography.headings.fontFamily};
  font-size: 12px;
  position: absolute;
  z-index: 1;
  top: -11px;
  left: 12px;
  font-weight: ${({theme:e})=>e.typography.fontWeightBold};
  color: ${({theme:e})=>(0,a.transparentize)(.3,e.rightPanel.textColor)};
`,sn=en.div`
  position: relative;
`,si=en(ob)`
  label {
    color: ${({theme:e})=>e.rightPanel.textColor};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 1em;
    text-transform: none;
    border: none;
  }
  margin: 0 0 10px 0;
  display: block;
  background-color: ${({theme:e})=>(0,a.transparentize)(.6,e.rightPanel.backgroundColor)};
  border: none;
  padding: 0.9em 1.6em 0.9em 0.9em;
  box-shadow: none;
  &:hover,
  &:focus-within {
    border: none;
    box-shadow: none;
    background-color: ${({theme:e})=>(0,a.transparentize)(.3,e.rightPanel.backgroundColor)};
  }
`,so=en.div`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  font-size: 12px;
  color: #ee807f;
`;class ss extends s.Component{constructor(){super(...arguments),this.state={activeIdx:0},this.switchMedia=({idx:e})=>{void 0!==e&&this.setState({activeIdx:e})}}render(){let{activeIdx:e}=this.state,t=this.props.mediaType.examples||{},r=this.props.mediaType.name,n=s.createElement(so,null,"No sample"),i=Object.keys(t);if(0===i.length)return n;if(i.length>1){let n=i.map((e,r)=>({value:t[e].summary||e,idx:r})),o=t[i[e]],a=o.description;return s.createElement(sa,null,s.createElement(sn,null,s.createElement(sr,null,"Example"),this.props.renderDropdown({value:n[e].value,options:n,onChange:this.switchMedia,ariaLabel:"Example"})),s.createElement("div",null,a&&s.createElement(oq,{source:a}),s.createElement(o7,{example:o,mimeType:r})))}{let e=t[i[0]];return s.createElement(sa,null,e.description&&s.createElement(oq,{source:e.description}),s.createElement(o7,{example:e,mimeType:r}))}}}let sa=en.div`
  margin-top: 15px;
`;var sl=r(68010);let sc=en(iG)`
  &.deprecated {
    span.property-name {
      ${iH}
    }
  }

  button {
    background-color: transparent;
    border: 0;
    outline: 0;
    font-size: 13px;
    font-family: ${e=>e.theme.typography.code.fontFamily};
    cursor: pointer;
    padding: 0;
    color: ${e=>e.theme.colors.text.primary};
    &:focus {
      font-weight: ${({theme:e})=>e.typography.fontWeightBold};
    }
    ${({kind:e})=>"patternProperties"===e&&X`
        display: inline-flex;
        margin-right: 20px;

        > span.property-name {
          white-space: break-spaces;
          text-align: left;

          ::before,
          ::after {
            content: '/';
            filter: opacity(0.2);
          }
        }

        > svg {
          align-self: center;
        }
      `}
  }
  ${iW} {
    height: ${({theme:e})=>e.schema.arrow.size};
    width: ${({theme:e})=>e.schema.arrow.size};
    polygon {
      fill: ${({theme:e})=>e.schema.arrow.color};
    }
  }
`,sp=en.span`
  vertical-align: middle;
  font-size: ${({theme:e})=>e.typography.code.fontSize};
  line-height: 20px;
`,su=en(sp)`
  color: ${e=>(0,a.transparentize)(.1,e.theme.schema.typeNameColor)};
`,sd=en(sp)`
  color: ${e=>e.theme.schema.typeNameColor};
`,sh=en(sp)`
  color: ${e=>e.theme.schema.typeTitleColor};
  word-break: break-word;
`,sm=en(sp).attrs({as:"div"})`
  color: ${e=>e.theme.schema.requireLabelColor};
  font-size: ${e=>e.theme.schema.labelsTextSize};
  font-weight: normal;
  margin-left: 20px;
  line-height: 1;
`,sf=en(sm)`
  color: ${e=>e.theme.colors.primary.light};
`,sg=en(sp)`
  color: ${({theme:e})=>e.colors.warning.main};
  font-size: 13px;
`,sy=en(sp)`
  color: #0e7c86;
  &::before,
  &::after {
    font-weight: bold;
  }
`,sb=en(sp)`
  border-radius: 2px;
  word-break: break-word;
  ${({theme:e})=>`
    background-color: ${(0,a.transparentize)(.95,e.colors.text.primary)};
    color: ${(0,a.transparentize)(.1,e.colors.text.primary)};

    padding: 0 ${e.spacing.unit}px;
    border: 1px solid ${(0,a.transparentize)(.9,e.colors.text.primary)};
    font-family: ${e.typography.code.fontFamily};
}`};
  & + & {
    margin-left: 0;
  }
  ${ei("ExampleValue")};
`,sx=en(sb)``,sv=en(sp)`
  border-radius: 2px;
  ${({theme:e})=>`
    background-color: ${(0,a.transparentize)(.95,e.colors.primary.light)};
    color: ${(0,a.transparentize)(.1,e.colors.primary.main)};

    margin: 0 ${e.spacing.unit}px;
    padding: 0 ${e.spacing.unit}px;
    border: 1px solid ${(0,a.transparentize)(.9,e.colors.primary.main)};
}`};
  & + & {
    margin-left: 0;
  }
  ${ei("ConstraintItem")};
`,sw=en.button`
  background-color: transparent;
  border: 0;
  color: ${({theme:e})=>e.colors.text.secondary};
  margin-left: ${({theme:e})=>e.spacing.unit}px;
  border-radius: 2px;
  cursor: pointer;
  outline-color: ${({theme:e})=>e.colors.text.secondary};
  font-size: 12px;
`,sk=en.div`
  ${oA};
  ${({$compact:e})=>e?"":"margin: 1em 0"}
`,sE=class extends s.Component{render(){let{externalDocs:e}=this.props;return e&&e.url?s.createElement(sk,{$compact:this.props.compact},s.createElement("a",{href:e.url},e.description||e.url)):null}};sE=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],sE);class sO extends s.PureComponent{constructor(){super(...arguments),this.state={collapsed:!0}}toggle(){this.setState({collapsed:!this.state.collapsed})}render(){let{values:e,isArrayType:t}=this.props,{collapsed:r}=this.state,{enumSkipQuotes:n,maxDisplayedEnumValues:i}=this.context;if(!e.length)return null;let o=this.state.collapsed&&i?e.slice(0,i):e,a=!!i&&e.length>i,l=i?r?`… ${e.length-i} more`:"Hide":"";return s.createElement("div",null,s.createElement(sp,null,t?z("enumArray"):""," ",1===e.length?z("enumSingleValue"):z("enum"),":")," ",o.map((e,t)=>{let r=n?String(e):JSON.stringify(e);return s.createElement(s.Fragment,{key:t},s.createElement(sb,null,r)," ")}),a?s.createElement(sj,{onClick:()=>{this.toggle()}},l):null)}}sO.contextType=ed;let sj=en.span`
  color: ${e=>e.theme.colors.primary.main};
  vertical-align: middle;
  font-size: 13px;
  line-height: 20px;
  padding: 0 5px;
  cursor: pointer;
`,s$=en(oP)`
  margin: 2px 0;
`;class sS extends s.PureComponent{render(){let e=this.props.extensions;return s.createElement(ed.Consumer,null,t=>s.createElement(s.Fragment,null,t.showExtensions&&Object.keys(e).map(t=>s.createElement(s$,{key:t},s.createElement(sp,null," ",t.substring(2),": ")," ",s.createElement(sx,null,"string"==typeof e[t]?e[t]:JSON.stringify(e[t]))))))}}function sC({field:e}){return e.examples?s.createElement(s.Fragment,null,s.createElement(sp,null," ",z("examples"),": "),_(e.examples)?e.examples.map((t,r)=>{let n=e1(e,t),i=e.in?String(n):JSON.stringify(n);return s.createElement(s.Fragment,{key:r},s.createElement(sb,null,i)," ")}):s.createElement(sA,null,Object.values(e.examples).map((t,r)=>s.createElement("li",{key:r+t.value},s.createElement(sb,null,e1(e,t.value))," -"," ",t.summary||t.description)))):null}let sA=en.ul`
  margin-top: 1em;
  list-style-position: outside;
`;class sP extends s.PureComponent{render(){return 0===this.props.constraints.length?null:s.createElement("span",null," ",this.props.constraints.map(e=>s.createElement(sv,{key:e}," ",e," ")))}}let sI=s.memo(function({value:e,label:t,raw:r}){if(void 0===e)return null;let n=r?String(e):JSON.stringify(e);return s.createElement("div",null,s.createElement(sp,null," ",t," ")," ",s.createElement(sb,null,n))});function sT(e){let t=e.schema.pattern,{hideSchemaPattern:r}=s.useContext(ed),[n,i]=s.useState(!1),o=s.useCallback(()=>i(!n),[n]);return!t||r?null:s.createElement(s.Fragment,null,s.createElement(sy,null,n||t.length<45?t:`${t.substr(0,45)}...`),t.length>45&&s.createElement(sw,{onClick:o},n?"Hide pattern":"Show pattern"))}function s_({schema:e}){var t;let{hideSchemaPattern:r}=s.useContext(ed);return e&&((null==e?void 0:e.pattern)&&!r||e.items||e.displayFormat||(null==(t=e.constraints)?void 0:t.length))?"string"===e.type&&e.pattern?s.createElement(sR,null,"[",s.createElement(sT,{schema:e}),"]"):s.createElement(sR,null,"[ items",e.displayFormat&&s.createElement(sd,null," <",e.displayFormat," >"),s.createElement(sP,{constraints:e.constraints}),s.createElement(sT,{schema:e}),e.items&&s.createElement(s_,{schema:e.items})," ]"):null}let sR=en(su)`
  margin: 0 5px;
  vertical-align: text-top;
`;var sL=Object.defineProperty,sz=Object.getOwnPropertySymbols,sD=Object.prototype.hasOwnProperty,sN=Object.prototype.propertyIsEnumerable,sM=(e,t,r)=>t in e?sL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,sF=(e,t)=>{for(var r in t||(t={}))sD.call(t,r)&&sM(e,r,t[r]);if(sz)for(var r of sz(t))sN.call(t,r)&&sM(e,r,t[r]);return e};let sq=(0,sl.observer)(e=>{let{enumSkipQuotes:t,hideSchemaTitles:r}=s.useContext(ed),{showExamples:n,field:i,renderDiscriminatorSwitch:o}=e,{schema:a,description:l,deprecated:c,extensions:p,in:u,const:d}=i,h="array"===a.type,m=s.useMemo(()=>n&&(void 0!==i.example||void 0!==i.examples)?void 0!==i.examples?s.createElement(sC,{field:i}):s.createElement(sI,{label:z("example")+":",value:e1(i,i.example),raw:!!i.in}):null,[i,n]),f=k(a.default)&&i.in?e1(i,a.default).replace(`${i.name}=`,""):a.default;return s.createElement("div",null,s.createElement("div",null,s.createElement(su,null,a.typePrefix),s.createElement(sd,null,a.displayType),a.displayFormat&&s.createElement(sd,null," ","<",a.displayFormat,">"," "),a.contentEncoding&&s.createElement(sd,null," ","<",a.contentEncoding,">"," "),a.contentMediaType&&s.createElement(sd,null," ","<",a.contentMediaType,">"," "),a.title&&!r&&s.createElement(sh,null," (",a.title,") "),s.createElement(sP,{constraints:a.constraints}),s.createElement(sT,{schema:a}),a.isCircular&&s.createElement(sg,null," ",z("recursive")," "),h&&a.items&&s.createElement(s_,{schema:a.items})),c&&s.createElement("div",null,s.createElement(iV,{type:"warning"}," ",z("deprecated")," ")),s.createElement(sI,{raw:t||"header"===u,label:z("default")+":",value:f}),!o&&s.createElement(sO,{isArrayType:h,values:a.enum})," ",m,s.createElement(sS,{extensions:sF(sF({},p),a.extensions)}),s.createElement("div",null,s.createElement(oq,{compact:!0,source:l})),a.externalDocs&&s.createElement(sE,{externalDocs:a.externalDocs,compact:!0}),o&&o(e)||null,d&&s.createElement(sI,{label:z("const")+":",value:d})||null)}),sB=s.memo(sq);var sQ=Object.defineProperty,sU=Object.getOwnPropertySymbols,sW=Object.prototype.hasOwnProperty,sV=Object.prototype.propertyIsEnumerable,sH=(e,t,r)=>t in e?sQ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let sJ=class extends s.Component{constructor(){super(...arguments),this.toggle=()=>{void 0===this.props.field.expanded&&this.props.expandByDefault?this.props.field.collapse():this.props.field.toggle()},this.handleKeyPress=e=>{"Enter"===e.key&&(e.preventDefault(),this.toggle())}}render(){let{className:e="",field:t,isLast:r,expandByDefault:n}=this.props,{name:i,deprecated:o,required:a,kind:l}=t,c=!t.schema.isPrimitive&&!t.schema.isCircular,p=void 0===t.expanded?n:t.expanded,u=s.createElement(s.Fragment,null,"additionalProperties"===l&&s.createElement(sf,null,"additional property"),"patternProperties"===l&&s.createElement(sf,null,"pattern property"),a&&s.createElement(sm,null,"required")),d=c?s.createElement(sc,{className:o?"deprecated":"",kind:l,title:i},s.createElement(iK,null),s.createElement("button",{onClick:this.toggle,onKeyPress:this.handleKeyPress,"aria-label":`expand ${i}`},s.createElement("span",{className:"property-name"},i),s.createElement(iW,{direction:p?"down":"right"})),u):s.createElement(iG,{className:o?"deprecated":void 0,kind:l,title:i},s.createElement(iK,null),s.createElement("span",{className:"property-name"},i),u);return s.createElement(s.Fragment,null,s.createElement("tr",{className:r?"last "+e:e},d,s.createElement(iX,null,s.createElement(sB,((e,t)=>{for(var r in t||(t={}))sW.call(t,r)&&sH(e,r,t[r]);if(sU)for(var r of sU(t))sV.call(t,r)&&sH(e,r,t[r]);return e})({},this.props)))),p&&c&&s.createElement("tr",{key:t.name+"inner"},s.createElement(iZ,{colSpan:2},s.createElement(i0,null,s.createElement(ax,{schema:t.schema,skipReadOnly:this.props.skipReadOnly,skipWriteOnly:this.props.skipWriteOnly,showTitle:this.props.showTitle,level:this.props.level})))))}};sJ=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],sJ);let sY=class extends s.Component{constructor(){super(...arguments),this.changeActiveChild=e=>{void 0!==e.idx&&this.props.parent.activateOneOf(e.idx)}}sortOptions(e,t){if(0===t.length)return;let r={};t.forEach((e,t)=>{r[e]=t}),e.sort((e,t)=>r[e.value]>r[t.value]?1:-1)}render(){let{parent:e,enumValues:t}=this.props;if(void 0===e.oneOf)return null;let r=e.oneOf.map((e,t)=>({value:e.title,idx:t})),n=r[e.activeOneOf].value;return this.sortOptions(r,t),s.createElement(ob,{value:n,options:r,onChange:this.changeActiveChild,ariaLabel:"Example"})}};sY=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],sY);let sZ=(0,sl.observer)(({schema:{fields:e=[],title:t},showTitle:r,discriminator:n,skipReadOnly:i,skipWriteOnly:o,level:a})=>{let{expandSingleSchemaField:l,showObjectSchemaExamples:c,schemaExpansionLevel:p}=s.useContext(ed),u=s.useMemo(()=>i||o?e.filter(e=>!(i&&e.schema.readOnly||o&&e.schema.writeOnly)):e,[i,o,e]),d=l&&1===u.length||p>=a;return s.createElement(i1,null,r&&s.createElement(iJ,null,t),s.createElement("tbody",null,f(u,(e,t)=>s.createElement(sJ,{key:e.name,isLast:t,field:e,expandByDefault:d,renderDiscriminatorSwitch:(null==n?void 0:n.fieldName)===e.name?()=>s.createElement(sY,{parent:n.parentSchema,enumValues:e.schema.enum}):void 0,className:e.expanded?"expanded":void 0,showExamples:c,skipReadOnly:i,skipWriteOnly:o,showTitle:r,level:a}))))});var sG=Object.defineProperty,sX=Object.defineProperties,sK=Object.getOwnPropertyDescriptors,s0=Object.getOwnPropertySymbols,s1=Object.prototype.hasOwnProperty,s2=Object.prototype.propertyIsEnumerable,s6=(e,t,r)=>t in e?sG(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s3=(e,t)=>{for(var r in t||(t={}))s1.call(t,r)&&s6(e,r,t[r]);if(s0)for(var r of s0(t))s2.call(t,r)&&s6(e,r,t[r]);return e},s5=(e,t)=>sX(e,sK(t));let s8=en.div`
  padding-left: ${({theme:e})=>2*e.spacing.unit}px;
`;class s4 extends s.PureComponent{render(){let e=this.props.schema,t=e.items,r=void 0===e.minItems&&void 0===e.maxItems?"":`(${e9(e)})`;return e.fields?s.createElement(sZ,s5(s3({},this.props),{level:this.props.level})):!e.displayType||t||r.length?s.createElement("div",null,s.createElement(i5,null," Array ",r),s.createElement(s8,null,s.createElement(ax,s5(s3({},this.props),{schema:t}))),s.createElement(i8,null)):s.createElement("div",null,s.createElement(sd,null,e.displayType))}}var s9=Object.defineProperty,s7=Object.defineProperties,ae=Object.getOwnPropertyDescriptor,at=Object.getOwnPropertyDescriptors,ar=Object.getOwnPropertySymbols,an=Object.prototype.hasOwnProperty,ai=Object.prototype.propertyIsEnumerable,ao=(e,t,r)=>t in e?s9(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,as=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?ae(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&s9(t,r,o),o};let aa=class extends s.Component{constructor(){super(...arguments),this.activateOneOf=()=>{this.props.schema.activateOneOf(this.props.idx)}}render(){let{idx:e,schema:t,subSchema:r}=this.props;return s.createElement(i3,{$deprecated:r.deprecated,$active:e===t.activeOneOf,onClick:this.activateOneOf},r.title||r.typePrefix+r.displayType)}};aa=as([sl.observer],aa);let al=class extends s.Component{render(){let{schema:{oneOf:e},schema:t}=this.props;if(void 0===e)return null;let r=e[t.activeOneOf];return s.createElement("div",null,s.createElement(i6,null," ",t.oneOfType," "),s.createElement(i2,null,e.map((e,r)=>s.createElement(aa,{key:e.pointer,schema:t,subSchema:e,idx:r}))),s.createElement("div",null,e[t.activeOneOf].deprecated&&s.createElement(iV,{type:"warning"},"Deprecated")),s.createElement(sP,{constraints:r.constraints}),s.createElement(ax,s7(((e,t)=>{for(var r in t||(t={}))an.call(t,r)&&ao(e,r,t[r]);if(ar)for(var r of ar(t))ai.call(t,r)&&ao(e,r,t[r]);return e})({},this.props),at({schema:r}))))}};al=as([sl.observer],al);let ac=(0,sl.observer)(({schema:e})=>s.createElement("div",null,s.createElement(sd,null,e.displayType),e.title&&s.createElement(sh,null," ",e.title," "),s.createElement(sg,null," ",z("recursive")," ")));var ap=Object.defineProperty,au=Object.defineProperties,ad=Object.getOwnPropertyDescriptors,ah=Object.getOwnPropertySymbols,am=Object.prototype.hasOwnProperty,af=Object.prototype.propertyIsEnumerable,ag=(e,t,r)=>t in e?ap(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ay=(e,t)=>{for(var r in t||(t={}))am.call(t,r)&&ag(e,r,t[r]);if(ah)for(var r of ah(t))af.call(t,r)&&ag(e,r,t[r]);return e},ab=(e,t)=>au(e,ad(t));let ax=class extends s.Component{render(){var e;let t=this.props,{schema:r}=t,n=((e,t)=>{var r={};for(var n in e)am.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&ah)for(var n of ah(e))0>t.indexOf(n)&&af.call(e,n)&&(r[n]=e[n]);return r})(t,["schema"]),i=(n.level||0)+1;if(!r)return s.createElement("em",null," Schema not provided ");let{type:o,oneOf:a,discriminatorProp:l,isCircular:c}=r;if(c)return s.createElement(ac,{schema:r});if(void 0!==l){if(!a||!a.length)return console.warn(`Looks like you are using discriminator wrong: you don't have any definition inherited from the ${r.title}`),null;let e=a[r.activeOneOf];return e.isCircular?s.createElement(ac,{schema:e}):s.createElement(sZ,ab(ay({},n),{level:i,schema:e,discriminator:{fieldName:l,parentSchema:r}}))}if(void 0!==a)return s.createElement(al,ay({schema:r},n));let p=_(o)?o:[o];if(p.includes("object")){if(null==(e=r.fields)?void 0:e.length)return s.createElement(sZ,ab(ay({},this.props),{level:i}))}else if(p.includes("array"))return s.createElement(s4,ab(ay({},this.props),{level:i}));let u={schema:r,name:"",required:!1,description:r.description,externalDocs:r.externalDocs,deprecated:!1,toggle:()=>null,expanded:!1};return s.createElement("div",null,s.createElement(sB,{field:u}))}};ax=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],ax);var av=Object.defineProperty,aw=Object.defineProperties,ak=Object.getOwnPropertyDescriptors,aE=Object.getOwnPropertySymbols,aO=Object.prototype.hasOwnProperty,aj=Object.prototype.propertyIsEnumerable,a$=(e,t,r)=>t in e?av(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class aS extends s.PureComponent{constructor(){super(...arguments),this.renderDropdown=e=>s.createElement(oS,aw(((e,t)=>{for(var r in t||(t={}))aO.call(t,r)&&a$(e,r,t[r]);if(aE)for(var r of aE(t))aj.call(t,r)&&a$(e,r,t[r]);return e})({Label:ov,Dropdown:si},e),ak({variant:"dark"})))}static getMediaType(e,t){if(!e)return{};let r={schema:{$ref:e}};return t&&(r.examples={example:{$ref:t}}),r}get mediaModel(){let{parser:e,schemaRef:t,exampleRef:r,options:n}=this.props;return this._mediaModel||(this._mediaModel=new nv(e,"json",!1,aS.getMediaType(t,r),n)),this._mediaModel}render(){let{showReadOnly:e=!0,showWriteOnly:t=!1,showExample:r=!0}=this.props;return s.createElement(iO,null,s.createElement(iS,null,s.createElement(iE,null,s.createElement(ax,{skipWriteOnly:!t,skipReadOnly:!e,schema:this.mediaModel.schema})),r&&s.createElement(i$,null,s.createElement(aC,null,s.createElement(ss,{renderDropdown:this.renderDropdown,mediaType:this.mediaModel})))))}}let aC=en.div`
  background: ${({theme:e})=>e.codeBlock.backgroundColor};
  & > div,
  & > pre {
    padding: ${e=>4*e.theme.spacing.unit}px;
    margin: 0;
  }

  & > div > pre {
    padding: 0;
  }
`,aA=(Z().div`
  background-color: #e4e7eb;
`,Z().ul`
  display: inline;
  list-style: none;
  padding: 0;

  li {
    display: inherit;

    &:after {
      content: ',';
    }
    &:last-child:after {
      content: none;
    }
  }
`,Z().code`
  font-size: ${e=>e.theme.typography.code.fontSize};
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin: 0 3px;
  padding: 0.2em;
  display: inline-block;
  line-height: 1;

  &:after {
    content: ',';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }
`),aP=Z().span`
  &:after {
    content: ' and ';
    font-weight: normal;
  }

  &:last-child:after {
    content: none;
  }

  ${oA};
`,aI=Z().span`
  ${e=>!e.$expanded&&"white-space: nowrap;"}
  &:after {
    content: ' or ';
    ${e=>e.$expanded&&"content: ' or \\a';"}
    white-space: pre;
  }

  &:last-child:after,
  &:only-child:after {
    content: none;
  }

  ${oA};
`,aT=Z().div`
  flex: 1 1 auto;
  cursor: pointer;
`,a_=Z().div`
  width: ${e=>e.theme.schema.defaultDetailsWidth};
  text-overflow: ellipsis;
  border-radius: 4px;
  overflow: hidden;
  ${e=>e.$expanded&&`background: ${e.theme.colors.gray[100]};
     padding: 8px 9.6px;
     margin: 20px 0;
     width: 100%;
    `};
  ${er.lessThan("small")`
    margin-top: 10px;
  `}
`,aR=Z()(iR)`
  display: inline-block;
  margin: 0;
`,aL=Z().div`
  width: 100%;
  display: flex;
  margin: 1em 0;
  flex-direction: ${e=>e.$expanded?"column":"row"};
  ${er.lessThan("small")`
    flex-direction: column;
  `}
`,az=Z().div`
  margin: 0.5em 0;
`,aD=Z().div`
  border-bottom: 1px solid ${({theme:e})=>e.colors.border.dark};
  margin-bottom: 1.5em;
  padding-bottom: 0.7em;

  h5 {
    line-height: 1em;
    margin: 0 0 0.6em;
    font-size: ${({theme:e})=>e.typography.fontSize};
  }

  .redoc-markdown p:first-child {
    display: inline;
  }
`;function aN({children:e,height:t}){let r=s.createRef(),[n,i]=s.useState(!1),[o,a]=s.useState(!1);return s.useEffect(()=>{r.current&&r.current.clientHeight+20<r.current.scrollHeight&&a(!0)},[r]),s.createElement(s.Fragment,null,s.createElement(aM,{ref:r,className:n?"":"container",style:{height:n?"auto":t}},e),s.createElement(aF,{$dimmed:!n},o&&s.createElement(aq,{onClick:()=>{i(!n)}},n?"See less":"See more")))}let aM=Z().div`
  overflow-y: hidden;
`,aF=Z().div`
  text-align: center;
  line-height: 1.5em;
  ${({$dimmed:e})=>e&&"background-image: linear-gradient(to bottom, transparent,rgb(255 255 255));\n     position: relative;\n     top: -0.5em;\n     padding-top: 0.5em;\n     background-position-y: -1em;\n    "}
`,aq=Z().a`
  cursor: pointer;
`,aB=s.memo(function(e){let{type:t,flow:r,RequiredScopes:n}=e,i=Object.keys((null==r?void 0:r.scopes)||{});return s.createElement(s.Fragment,null,s.createElement(az,null,s.createElement("b",null,"Flow type: "),s.createElement("code",null,t," ")),("implicit"===t||"authorizationCode"===t)&&s.createElement(az,null,s.createElement("strong",null," Authorization URL: "),s.createElement("code",null,s.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r.authorizationUrl},r.authorizationUrl))),("password"===t||"clientCredentials"===t||"authorizationCode"===t)&&s.createElement(az,null,s.createElement("b",null," Token URL: "),s.createElement("code",null,r.tokenUrl)),r.refreshUrl&&s.createElement(az,null,s.createElement("strong",null," Refresh URL: "),s.createElement("code",null,r.refreshUrl)),!!i.length&&s.createElement(s.Fragment,null,n||null,s.createElement(az,null,s.createElement("b",null," Scopes: ")),s.createElement(aN,{height:"4em"},s.createElement("ul",null,i.map(e=>s.createElement("li",{key:e},s.createElement("code",null,e)," -"," ",s.createElement(oq,{className:"redoc-markdown",inline:!0,source:r.scopes[e]||""})))))))});function aQ(e){let{RequiredScopes:t,scheme:r}=e;return s.createElement(oP,null,r.apiKey?s.createElement(s.Fragment,null,s.createElement(az,null,s.createElement("b",null,C(r.apiKey.in||"")," parameter name: "),s.createElement("code",null,r.apiKey.name)),t):r.http?s.createElement(s.Fragment,null,s.createElement(az,null,s.createElement("b",null,"HTTP Authorization Scheme: "),s.createElement("code",null,r.http.scheme)),s.createElement(az,null,"bearer"===r.http.scheme&&r.http.bearerFormat&&s.createElement(s.Fragment,null,s.createElement("b",null,"Bearer format: "),s.createElement("code",null,r.http.bearerFormat))),t):r.openId?s.createElement(s.Fragment,null,s.createElement(az,null,s.createElement("b",null,"Connect URL: "),s.createElement("code",null,s.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:r.openId.connectUrl},r.openId.connectUrl))),t):r.flows?Object.keys(r.flows).map(e=>s.createElement(aB,{key:e,type:e,RequiredScopes:t,flow:r.flows[e]})):null)}let aU={oauth2:"OAuth2",apiKey:"API Key",http:"HTTP",openIdConnect:"OpenID Connect"};class aW extends s.PureComponent{render(){return this.props.securitySchemes.schemes.map(e=>s.createElement(iO,{id:e.sectionId,key:e.id},s.createElement(iS,null,s.createElement(iE,null,s.createElement(iI,null,s.createElement(iQ,{to:e.sectionId}),e.displayName),s.createElement(oq,{source:e.description||""}),s.createElement(aD,null,s.createElement(az,null,s.createElement("b",null,"Security Scheme Type: "),s.createElement("span",null,aU[e.type]||e.type)),s.createElement(aQ,{scheme:e}))))))}}var aV=(e,t,r)=>new Promise((n,i)=>{var o=e=>{try{a(r.next(e))}catch(e){i(e)}},s=e=>{try{a(r.throw(e))}catch(e){i(e)}},a=e=>e.done?n(e.value):Promise.resolve(e.value).then(o,s);a((r=r.apply(e,t)).next())});function aH(e,t){return aV(this,arguments,function*(e,t,r={}){return new aJ((yield ev(e||t)),t,r)})}class aJ{constructor(e,t,r={},n=!0){this.marker=new tF,this.disposer=null,this.rawOptions=r,this.options=new J(r,aY),this.scroll=new iw(this.options),iy.updateOnHistory(tN.currentId,this.scroll),this.spec=new n5(e,t,this.options),this.menu=new iy(this.spec,this.scroll,tN),this.options.disableSearch||(this.search=new ik,n&&this.search.indexItems(this.menu.items),this.disposer=(0,ef.observe)(this.menu,"activeItemIdx",e=>{this.updateMarkOnMenu(e.newValue)}))}static fromJS(e){let t=new aJ(e.spec.data,e.spec.url,e.options,!1);return t.menu.activeItemIdx=e.menu.activeItemIdx||0,t.menu.activate(t.menu.flatItems[t.menu.activeItemIdx]),t.options.disableSearch||t.search.load(e.searchIndex),t}onDidMount(){this.menu.updateOnHistory(),this.updateMarkOnMenu(this.menu.activeItemIdx)}dispose(){this.scroll.dispose(),this.menu.dispose(),this.search&&this.search.dispose(),null!=this.disposer&&this.disposer()}toJS(){return aV(this,null,function*(){return{menu:{activeItemIdx:this.menu.activeItemIdx},spec:{url:this.spec.parser.specUrl,data:this.spec.parser.spec},searchIndex:this.search?yield this.search.toJS():void 0,options:this.rawOptions}})}updateMarkOnMenu(e){let t=Math.max(0,e),r=Math.min(this.menu.flatItems.length,t+5),n=[];for(let e=t;e<r;e++){let t=this.menu.getElementAt(e);t&&n.push(t)}if(-1===e&&c){let e=document.querySelector('[data-role="redoc-description"]'),t=document.querySelector('[data-role="redoc-summary"]');e&&n.push(e),t&&n.push(t)}this.marker.addOnly(n),this.marker.mark()}}let aY={allowedMdComponents:{[to]:{component:aW,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[ts]:{component:aW,propsSelector:e=>({securitySchemes:e.spec.securitySchemes})},[ta]:{component:aS,propsSelector:e=>({parser:e.spec.parser,options:e.options})}}},aZ=en(iP)`
  margin-top: 0;
  margin-bottom: 0.5em;

  ${ei("ApiHeader")};
`,aG=en.a`
  border: 1px solid ${e=>e.theme.colors.primary.main};
  color: ${e=>e.theme.colors.primary.main};
  font-weight: normal;
  margin-left: 0.5em;
  padding: 4px 8px 4px;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  ${ei("DownloadButton")};
`,aX=en.span`
  &::before {
    content: '|';
    display: inline-block;
    opacity: 0.5;
    width: ${15}px;
    text-align: center;
  }

  &:last-child::after {
    display: none;
  }
`,aK=en.div`
  overflow: hidden;
`,a0=en.div`
  display: flex;
  flex-wrap: wrap;
  // hide separator on new lines: idea from https://stackoverflow.com/a/31732902/1749888
  margin-left: -${15}px;
`,a1=class extends s.Component{constructor(){super(...arguments),this.handleDownloadClick=e=>{e.target.href||(e.target.href=this.props.store.spec.info.downloadLink)}}render(){let{store:e}=this.props,{info:t,externalDocs:r}=e.spec,n=e.options.hideDownloadButton,i=t.downloadFileName,o=t.downloadLink,a=t.license&&s.createElement(aX,null,"License:"," ",t.license.identifier?t.license.identifier:s.createElement("a",{href:t.license.url},t.license.name))||null,l=t.contact&&t.contact.url&&s.createElement(aX,null,"URL: ",s.createElement("a",{href:t.contact.url},t.contact.url))||null,c=t.contact&&t.contact.email&&s.createElement(aX,null,t.contact.name||"E-mail",":"," ",s.createElement("a",{href:"mailto:"+t.contact.email},t.contact.email))||null,p=t.termsOfService&&s.createElement(aX,null,s.createElement("a",{href:t.termsOfService},"Terms of Service"))||null,u=t.version&&s.createElement("span",null,"(",t.version,")")||null;return s.createElement(iO,null,s.createElement(iS,null,s.createElement(iE,{className:"api-info"},s.createElement(aZ,null,t.title," ",u),!n&&s.createElement("p",null,z("downloadSpecification"),":",s.createElement(aG,{download:i||!0,target:"_blank",href:o,onClick:this.handleDownloadClick},z("download"))),s.createElement(oP,null,(t.license||t.contact||t.termsOfService)&&s.createElement(aK,null,s.createElement(a0,null,c," ",l," ",a," ",p))||null),s.createElement(oq,{source:e.spec.info.summary,"data-role":"redoc-summary"}),s.createElement(oq,{source:e.spec.info.description,"data-role":"redoc-description"}),r&&s.createElement(sE,{externalDocs:r}))))}};a1=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],a1);let a2=en.img`
  max-height: ${e=>e.theme.logo.maxHeight};
  max-width: ${e=>e.theme.logo.maxWidth};
  padding: ${e=>e.theme.logo.gutter};
  width: 100%;
  display: block;
`,a6=en.div`
  text-align: center;
`,a3=en.a`
  display: inline-block;
`,a5=class extends s.Component{render(){let{info:e}=this.props,t=e["x-logo"];if(!t||!t.url)return null;let r=t.href||e.contact&&e.contact.url,n=t.altText?t.altText:"logo",i=s.createElement(a2,{src:t.url,alt:n});return s.createElement(a6,{style:{backgroundColor:t.backgroundColor}},r?s.createElement(a3,{href:r},i):i)}};a5=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],a5);var a8=Object.defineProperty,a4=Object.getOwnPropertySymbols,a9=Object.prototype.hasOwnProperty,a7=Object.prototype.propertyIsEnumerable,le=(e,t,r)=>t in e?a8(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,lt=(e,t)=>{for(var r in t||(t={}))a9.call(t,r)&&le(e,r,t[r]);if(a4)for(var r of a4(t))a7.call(t,r)&&le(e,r,t[r]);return e};class lr extends s.Component{render(){return s.createElement(em,null,e=>s.createElement(iN,null,t=>this.renderWithOptionsAndStore(e,t)))}renderWithOptionsAndStore(e,t){let{source:r,htmlWrap:n=e=>e}=this.props;if(!t)throw Error("When using components in markdown, store prop must be provided");let i=new rS(e,this.props.parentId).renderMdWithComponents(r);return i.length?i.map((e,r)=>{if("string"==typeof e)return s.cloneElement(n(s.createElement(oF,{html:e,inline:!1,compact:!1})),{key:r});let i=e.component;return s.createElement(i,lt({key:r},lt(lt({},e.props),e.propsSelector(t))))}):null}}var ln=r(80324);let li=en.span.attrs(e=>({className:`operation-type ${e.type}`}))`
  width: 9ex;
  display: inline-block;
  height: ${e=>e.theme.typography.code.fontSize};
  line-height: ${e=>e.theme.typography.code.fontSize};
  background-color: #333;
  border-radius: 3px;
  background-repeat: no-repeat;
  background-position: 6px 4px;
  font-size: 7px;
  font-family: Verdana, sans-serif; // web-safe
  color: white;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  vertical-align: middle;
  margin-right: 6px;
  margin-top: 2px;

  &.get {
    background-color: ${({theme:e})=>e.colors.http.get};
  }

  &.post {
    background-color: ${({theme:e})=>e.colors.http.post};
  }

  &.put {
    background-color: ${({theme:e})=>e.colors.http.put};
  }

  &.options {
    background-color: ${({theme:e})=>e.colors.http.options};
  }

  &.patch {
    background-color: ${({theme:e})=>e.colors.http.patch};
  }

  &.delete {
    background-color: ${({theme:e})=>e.colors.http.delete};
  }

  &.basic {
    background-color: ${({theme:e})=>e.colors.http.basic};
  }

  &.link {
    background-color: ${({theme:e})=>e.colors.http.link};
  }

  &.head {
    background-color: ${({theme:e})=>e.colors.http.head};
  }

  &.hook {
    background-color: ${({theme:e})=>e.colors.primary.main};
  }

  &.schema {
    background-color: ${({theme:e})=>e.colors.http.basic};
  }
`;function lo(e,{theme:t},r){return e>1?t.sidebar.level1Items[r]:1===e?t.sidebar.groupItems[r]:""}let ls=en.ul`
  margin: 0;
  padding: 0;

  &:first-child {
    padding-bottom: 32px;
  }

  & & {
    font-size: 0.929em;
  }

  ${e=>e.$expanded?"":"display: none;"};
`,la=en.li`
  list-style: none inside none;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  ${e=>0===e.depth?"margin-top: 15px":""};
`,ll={0:X`
    opacity: 0.7;
    text-transform: ${({theme:e})=>e.sidebar.groupItems.textTransform};
    font-size: 0.8em;
    padding-bottom: 0;
    cursor: default;
  `,1:X`
    font-size: 0.929em;
    text-transform: ${({theme:e})=>e.sidebar.level1Items.textTransform};
  `},lc=en.label.attrs(e=>({className:ln("-depth"+e.$depth,{active:e.$active})}))`
  cursor: pointer;
  color: ${e=>e.$active?lo(e.$depth,e,"activeTextColor"):e.theme.sidebar.textColor};
  margin: 0;
  padding: 12.5px ${e=>4*e.theme.spacing.unit}px;
  ${({$depth:e,$type:t,theme:r})=>"section"===t&&e>1&&"padding-left: "+8*r.spacing.unit+"px;"||""}
  display: flex;
  justify-content: space-between;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  ${e=>ll[e.$depth]};
  background-color: ${e=>e.$active?lo(e.$depth,e,"activeBackgroundColor"):e.theme.sidebar.backgroundColor};

  ${e=>e.$deprecated&&iH||""};

  &:hover {
    color: ${e=>lo(e.$depth,e,"activeTextColor")};
    background-color: ${e=>lo(e.$depth,e,"activeBackgroundColor")};
  }

  ${iW} {
    height: ${({theme:e})=>e.sidebar.arrow.size};
    width: ${({theme:e})=>e.sidebar.arrow.size};
    polygon {
      fill: ${({theme:e})=>e.sidebar.arrow.color};
    }
  }
`,lp=en.span`
  display: inline-block;
  vertical-align: middle;
  width: ${e=>e.width?e.width:"auto"};
  overflow: hidden;
  text-overflow: ellipsis;
`,lu=en.div`
  ${({theme:e})=>X`
    font-size: 0.8em;
    margin-top: ${2*e.spacing.unit}px;
    text-align: center;
    position: fixed;
    width: ${e.sidebar.width};
    bottom: 0;
    background: ${e.sidebar.backgroundColor};

    a,
    a:visited,
    a:hover {
      color: ${e.sidebar.textColor} !important;
      padding: ${e.spacing.unit}px 0;
      border-top: 1px solid ${(0,a.darken)(.1,e.sidebar.backgroundColor)};
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `};
  img {
    width: 15px;
    margin-right: 5px;
  }

  ${er.lessThan("small")`
    width: 100%;
  `};
`,ld=en.button`
  border: 0;
  width: 100%;
  text-align: left;
  & > * {
    vertical-align: middle;
  }

  ${iW} {
    polygon {
      fill: ${({theme:e})=>(0,a.darken)(e.colors.tonalOffset,e.colors.gray[100])};
    }
  }
`,lh=en.span`
  text-decoration: ${e=>e.$deprecated?"line-through":"none"};
  margin-right: 8px;
`,lm=en(li)`
  margin: 0 5px 0 0;
`,lf=en(e=>{let{name:t,opened:r,className:n,onClick:i,httpVerb:o,deprecated:a}=e;return s.createElement(ld,{className:n,onClick:i||void 0},s.createElement(lm,{type:o},tp(o)),s.createElement(iW,{size:"1.5em",direction:r?"down":"right",float:"left"}),s.createElement(lh,{$deprecated:a},t),a?s.createElement(iV,{type:"warning"}," ",z("deprecated")," "):null)})`
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  background-color: ${({theme:e})=>e.colors.gray[100]};
  cursor: pointer;
  outline-color: ${({theme:e})=>(0,a.darken)(e.colors.tonalOffset,e.colors.gray[100])};
`,lg=en.div`
  padding: 10px 25px;
  background-color: ${({theme:e})=>e.colors.gray[50]};
  margin-bottom: 5px;
  margin-top: 5px;
`;class ly extends s.PureComponent{constructor(){super(...arguments),this.selectElement=()=>{oY.selectElement(this.child)}}render(){let{children:e}=this.props;return s.createElement("div",{ref:e=>this.child=e,onClick:this.selectElement,onFocus:this.selectElement,tabIndex:0,role:"button"},e)}}let lb=en.div`
  cursor: pointer;
  position: relative;
  margin-bottom: 5px;
`,lx=en.span`
  font-family: ${e=>e.theme.typography.code.fontFamily};
  margin-left: 10px;
  flex: 1;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,lv=en.button`
  outline: 0;
  color: inherit;
  width: 100%;
  text-align: left;
  cursor: pointer;
  padding: 10px 30px 10px ${e=>e.$inverted?"10px":"20px"};
  border-radius: ${e=>e.$inverted?"0":"4px 4px 0 0"};
  background-color: ${e=>e.$inverted?"transparent":e.theme.codeBlock.backgroundColor};
  display: flex;
  white-space: nowrap;
  align-items: center;
  border: ${e=>e.$inverted?"0":"1px solid transparent"};
  border-bottom: ${e=>e.$inverted?"1px solid #ccc":"0"};
  transition: border-color 0.25s ease;

  ${e=>e.$expanded&&!e.$inverted&&`border-color: ${e.theme.colors.border.dark};`||""}

  .${lx} {
    color: ${e=>e.$inverted?e.theme.colors.text.primary:"#ffffff"};
  }
  &:focus {
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.45), 0 2px 0 rgba(128, 128, 128, 0.25);
  }
`,lw=en.span.attrs(e=>({className:`http-verb ${e.type}`}))`
  font-size: ${e=>e.$compact?"0.8em":"0.929em"};
  line-height: ${e=>e.$compact?"18px":"20px"};
  background-color: ${e=>e.theme.colors.http[e.type]||"#999999"};
  color: #ffffff;
  padding: ${e=>e.$compact?"2px 8px":"3px 10px"};
  text-transform: uppercase;
  font-family: ${e=>e.theme.typography.headings.fontFamily};
  margin: 0;
`,lk=en.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  background: ${e=>e.theme.rightPanel.servers.overlay.backgroundColor};
  color: ${e=>e.theme.rightPanel.servers.overlay.textColor};
  box-sizing: border-box;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.33);
  overflow: hidden;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  transition: all 0.25s ease;
  visibility: hidden;
  ${e=>e.$expanded?"visibility: visible;":"transform: translateY(-50%) scaleY(0);"}
`,lE=en.div`
  padding: 10px;
`,lO=en.div`
  padding: 5px;
  border: 1px solid #ccc;
  background: ${e=>e.theme.rightPanel.servers.url.backgroundColor};
  word-break: break-all;
  color: ${e=>e.theme.colors.primary.main};
  > span {
    color: ${e=>e.theme.colors.text.primary};
  }
`;class lj extends s.Component{constructor(e){super(e),this.toggle=()=>{this.setState({expanded:!this.state.expanded})},this.state={expanded:!1}}render(){let{operation:e,inverted:t,hideHostname:r}=this.props,{expanded:n}=this.state;return s.createElement(ed.Consumer,null,i=>s.createElement(lb,null,s.createElement(lv,{onClick:this.toggle,$expanded:n,$inverted:t},s.createElement(lw,{type:e.httpVerb,$compact:this.props.compact},e.httpVerb),s.createElement(lx,null,e.path),s.createElement(iW,{float:"right",color:t?"black":"white",size:"20px",direction:n?"up":"down",style:{marginRight:"-25px"}})),s.createElement(lk,{$expanded:n,"aria-hidden":!n},e.servers.map(t=>{let n=i.expandDefaultServerVariables?tn(t.url,t.variables):t.url,o=S(n);return s.createElement(lE,{key:n},s.createElement(oq,{source:t.description||"",compact:!0}),s.createElement(ly,null,s.createElement(lO,null,s.createElement("span",null,r||i.hideHostname?"/"===o?"":o:n),e.path)))}))))}}class l$ extends s.PureComponent{render(){let{place:e,parameters:t}=this.props;return t&&t.length?s.createElement("div",{key:e},s.createElement(iR,null,e," Parameters"),s.createElement(i1,null,s.createElement("tbody",null,f(t,(e,t)=>s.createElement(sJ,{key:e.name,isLast:t,field:e,showExamples:!0}))))):null}}let lS=class extends s.Component{constructor(){super(...arguments),this.switchMedia=({idx:e})=>{this.props.content&&void 0!==e&&this.props.content.activate(e)}}render(){let{content:e}=this.props;if(!e||!e.mediaTypes||!e.mediaTypes.length)return null;let t=e.activeMimeIdx,r=e.mediaTypes.map((e,t)=>({value:e.name,idx:t}));return s.createElement(s.Fragment,null,s.createElement(({children:e})=>this.props.withLabel?s.createElement(sn,null,s.createElement(sr,null,"Content type"),e):e,null,this.props.renderDropdown({value:r[t].value,options:r,onChange:this.switchMedia,ariaLabel:"Content type"})),this.props.children(e.active))}};lS=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],lS);var lC=Object.defineProperty,lA=Object.getOwnPropertySymbols,lP=Object.prototype.hasOwnProperty,lI=Object.prototype.propertyIsEnumerable,lT=(e,t,r)=>t in e?lC(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l_=(e,t)=>{for(var r in t||(t={}))lP.call(t,r)&&lT(e,r,t[r]);if(lA)for(var r of lA(t))lI.call(t,r)&&lT(e,r,t[r]);return e},lR=(e,t)=>{var r={};for(var n in e)lP.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&lA)for(var n of lA(e))0>t.indexOf(n)&&lI.call(e,n)&&(r[n]=e[n]);return r};let lL=["path","query","cookie","header"];class lz extends s.PureComponent{orderParams(e){let t={};return e.forEach(e=>{var r;t[r=e.in]||(t[r]=[]),t[r].push(e)}),t}render(){let{body:e,parameters:t=[]}=this.props;if(void 0===e&&void 0===t)return null;let r=this.orderParams(t),n=t.length>0?lL:[],i=e&&e.content,o=e&&e.description,a=e&&e.required;return s.createElement(s.Fragment,null,n.map(e=>s.createElement(l$,{key:e,place:e,parameters:r[e]})),i&&s.createElement(lN,{content:i,description:o,bodyRequired:a}))}}function lD(e){var{bodyRequired:t}=e,r=lR(e,["bodyRequired"]);return s.createElement(iR,{key:"header"},"Request Body schema: ",s.createElement(oS,l_({},r)),"boolean"==typeof t&&!!t&&s.createElement(lF,null,"required"),"boolean"==typeof t&&!t&&s.createElement(lq,null,"optional"))}function lN(e){let{content:t,description:r,bodyRequired:n}=e,{isRequestType:i}=t;return s.createElement(lS,{content:t,renderDropdown:e=>s.createElement(lD,l_({bodyRequired:n},e))},({schema:e})=>s.createElement(s.Fragment,null,void 0!==r&&s.createElement(oq,{source:r}),"object"===(null==e?void 0:e.type)&&s.createElement(sP,{constraints:(null==e?void 0:e.constraints)||[]}),s.createElement(ax,{skipReadOnly:i,skipWriteOnly:!i,key:"schema",schema:e})))}let lM="\n  text-transform: lowercase;\n  margin-left: 0;\n  line-height: 1.5em;\n",lF=en(sm)`
  ${lM}
`,lq=en("div")`
  ${lM}
  color: ${({theme:e})=>e.colors.text.secondary};
  font-size: ${e=>e.theme.schema.labelsTextSize};
`,lB=s.memo(function({title:e,type:t,empty:r,code:n,opened:i,className:o,onClick:a}){return s.createElement("button",{className:o,onClick:!r&&a||void 0,"aria-expanded":i,disabled:r},!r&&s.createElement(iW,{size:"1.5em",color:t,direction:i?"down":"right",float:"left"}),s.createElement(lV,null,n," "),s.createElement(oq,{compact:!0,inline:!0,source:e}))}),lQ=en(lB)`
  display: block;
  border: 0;
  width: 100%;
  text-align: left;
  padding: 10px;
  border-radius: 2px;
  margin-bottom: 4px;
  line-height: 1.5em;
  cursor: pointer;

  color: ${e=>e.theme.colors.responses[e.type].color};
  background-color: ${e=>e.theme.colors.responses[e.type].backgroundColor};
  &:focus {
    outline: auto ${e=>e.theme.colors.responses[e.type].color};
  }
  ${e=>e.empty?'\ncursor: default;\n&::before {\n  content: "—";\n  font-weight: bold;\n  width: 1.5em;\n  text-align: center;\n  display: inline-block;\n  vertical-align: top;\n}\n&:focus {\n  outline: 0;\n}\n':""};
`,lU=en.div`
  padding: 10px;
`,lW=en(iR).attrs({as:"caption"})`
  text-align: left;
  margin-top: 1em;
  caption-side: top;
`,lV=en.strong`
  vertical-align: top;
`;class lH extends s.PureComponent{render(){let{headers:e}=this.props;return void 0===e||0===e.length?null:s.createElement(i1,null,s.createElement(lW,null," Response Headers "),s.createElement("tbody",null,f(e,(e,t)=>s.createElement(sJ,{isLast:t,key:e.name,field:e,showExamples:!0}))))}}var lJ=Object.defineProperty,lY=Object.getOwnPropertySymbols,lZ=Object.prototype.hasOwnProperty,lG=Object.prototype.propertyIsEnumerable,lX=(e,t,r)=>t in e?lJ(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;class lK extends s.PureComponent{constructor(){super(...arguments),this.renderDropdown=e=>s.createElement(iR,{key:"header"},"Response Schema: ",s.createElement(oS,((e,t)=>{for(var r in t||(t={}))lZ.call(t,r)&&lX(e,r,t[r]);if(lY)for(var r of lY(t))lG.call(t,r)&&lX(e,r,t[r]);return e})({},e)))}render(){let{description:e,extensions:t,headers:r,content:n}=this.props.response;return s.createElement(s.Fragment,null,e&&s.createElement(oq,{source:e}),s.createElement(sS,{extensions:t}),s.createElement(lH,{headers:r}),s.createElement(lS,{content:n,renderDropdown:this.renderDropdown},({schema:e})=>s.createElement(s.Fragment,null,"object"===(null==e?void 0:e.type)&&s.createElement(sP,{constraints:(null==e?void 0:e.constraints)||[]}),s.createElement(ax,{skipWriteOnly:!0,key:"schema",schema:e}))))}}let l0=(0,sl.observer)(({response:e})=>{let{extensions:t,headers:r,type:n,summary:i,description:o,code:a,expanded:l,content:c}=e,p=s.useMemo(()=>void 0===c?[]:c.mediaTypes.filter(e=>void 0!==e.schema),[c]),u=s.useMemo(()=>!(t&&0!==Object.keys(t).length||0!==r.length||0!==p.length||o),[t,r,p,o]);return s.createElement("div",null,s.createElement(lQ,{onClick:()=>e.toggle(),type:n,empty:u,title:i||"",code:a,opened:l}),l&&!u&&s.createElement(lU,null,s.createElement(lK,{response:e})))}),l1=en.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: normal;
`;class l2 extends s.PureComponent{render(){let{responses:e,isCallback:t}=this.props;return e&&0!==e.length?s.createElement("div",null,s.createElement(l1,null,z(t?"callbackResponses":"responses")),e.map(e=>s.createElement(l0,{key:e.code,response:e}))):null}}function l6(e){let{security:t,showSecuritySchemeType:r,expanded:n}=e,i=t.schemes.length>1;return 0===t.schemes.length?s.createElement(aI,{$expanded:n},"None"):s.createElement(aI,{$expanded:n},i&&"(",t.schemes.map(e=>s.createElement(aP,{key:e.id},r&&`${aU[e.type]||e.type}: `,s.createElement("i",null,e.displayName),n&&e.scopes.length?[" (",e.scopes.map(e=>s.createElement(aA,{key:e},e)),") "]:null)),i&&") ")}let l3=({scopes:e})=>e.length?s.createElement("div",null,s.createElement("b",null,"Required scopes: "),e.map((e,t)=>s.createElement(s.Fragment,{key:t},s.createElement("code",null,e)," "))):null;function l5(e){let t=iF(),r=null==t?void 0:t.options.showSecuritySchemeType,[n,i]=(0,s.useState)(!1),{securities:o}=e;if(!(null==o?void 0:o.length)||(null==t?void 0:t.options.hideSecuritySection))return null;let a=null==t?void 0:t.spec.securitySchemes.schemes.filter(({id:e})=>o.find(t=>t.schemes.find(t=>t.id===e)));return s.createElement(s.Fragment,null,s.createElement(aL,{$expanded:n},s.createElement(aT,{onClick:()=>i(!n)},s.createElement(aR,null,"Authorizations:"),s.createElement(iW,{size:"1.3em",direction:n?"down":"right"})),s.createElement(a_,{$expanded:n},o.map((e,t)=>s.createElement(l6,{key:t,expanded:n,showSecuritySchemeType:r,security:e})))),n&&!!(null==a?void 0:a.length)&&a.map((e,t)=>s.createElement(aD,{key:t},s.createElement("h5",null,s.createElement(l8,null)," ",aU[e.type]||e.type,": ",e.id),s.createElement(oq,{source:e.description||""}),s.createElement(aQ,{key:e.id,scheme:e,RequiredScopes:s.createElement(l3,{scopes:function(e,t){let r=[],n=t.length;for(;n--;){let i=t[n],o=i.schemes.length;for(;o--;){let t=i.schemes[o];t.id===e&&Array.isArray(t.scopes)&&r.push(...t.scopes)}}return Array.from(new Set(r))}(e.id,o)})}))))}let l8=()=>s.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"11",height:"11"},s.createElement("path",{fill:"currentColor",d:"M18 10V6A6 6 0 0 0 6 6v4H3v14h18V10h-3zM8 6c0-2.206 1.794-4 4-4s4 1.794 4 4v4H8V6zm11 16H5V12h14v10z"})),l4=class extends s.Component{render(){let{operation:e}=this.props,{description:t,externalDocs:r}=e,n=!(!t&&!r);return s.createElement(lg,null,n&&s.createElement(l9,null,void 0!==t&&s.createElement(oq,{source:t}),r&&s.createElement(sE,{externalDocs:r})),s.createElement(lj,{operation:this.props.operation,inverted:!0,compact:!0}),s.createElement(sS,{extensions:e.extensions}),s.createElement(l5,{securities:e.security}),s.createElement(lz,{parameters:e.parameters,body:e.requestBody}),s.createElement(l2,{responses:e.responses,isCallback:e.isCallback}))}};l4=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],l4);let l9=en.div`
  margin-bottom: ${({theme:e})=>3*e.spacing.unit}px;
`,l7=class extends s.Component{constructor(){super(...arguments),this.toggle=()=>{this.props.callbackOperation.toggle()}}render(){let{name:e,expanded:t,httpVerb:r,deprecated:n}=this.props.callbackOperation;return s.createElement(s.Fragment,null,s.createElement(lf,{onClick:this.toggle,name:e,opened:t,httpVerb:r,deprecated:n}),t&&s.createElement(l4,{operation:this.props.callbackOperation}))}};l7=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],l7);class ce extends s.PureComponent{render(){let{callbacks:e}=this.props;return e&&0!==e.length?s.createElement("div",null,s.createElement(ct,null," Callbacks "),e.map(e=>e.operations.map((t,r)=>s.createElement(l7,{key:`${e.name}_${r}`,callbackOperation:t})))):null}}let ct=en.h3`
  font-size: 1.3em;
  padding: 0.2em 0;
  margin: 3em 0 1.1em;
  color: ${({theme:e})=>e.colors.text.primary};
  font-weight: normal;
`,cr=class extends s.Component{constructor(e){super(e),this.switchItem=({idx:e})=>{this.props.items&&void 0!==e&&this.setState({activeItemIdx:e})},this.state={activeItemIdx:0}}render(){let{items:e}=this.props;return e&&e.length?s.createElement(s.Fragment,null,s.createElement(({children:e})=>this.props.label?s.createElement(sn,null,s.createElement(sr,null,this.props.label),e):e,null,this.props.renderDropdown({value:this.props.options[this.state.activeItemIdx].value,options:this.props.options,onChange:this.switchItem,ariaLabel:this.props.label||"Callback"})),this.props.children(e[this.state.activeItemIdx])):null}};cr=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],cr);var cn=Object.defineProperty,ci=Object.defineProperties,co=Object.getOwnPropertyDescriptors,cs=Object.getOwnPropertySymbols,ca=Object.prototype.hasOwnProperty,cl=Object.prototype.propertyIsEnumerable,cc=(e,t,r)=>t in e?cn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let cp=class extends s.Component{constructor(){super(...arguments),this.renderDropdown=e=>s.createElement(oS,ci(((e,t)=>{for(var r in t||(t={}))ca.call(t,r)&&cc(e,r,t[r]);if(cs)for(var r of cs(t))cl.call(t,r)&&cc(e,r,t[r]);return e})({Label:st,Dropdown:si},e),co({variant:"dark"})))}render(){let e=this.props.content;return void 0===e?null:s.createElement(lS,{content:e,renderDropdown:this.renderDropdown,withLabel:!0},e=>s.createElement(ss,{key:"samples",mediaType:e,renderDropdown:this.renderDropdown}))}};cp=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],cp);class cu extends s.Component{render(){let e=this.props.callback.codeSamples.find(e=>nM(e));return e?s.createElement(cd,null,s.createElement(cp,{content:e.requestBodyContent})):null}}let cd=en.div`
  margin-top: 15px;
`;var ch=Object.defineProperty,cm=Object.defineProperties,cf=Object.getOwnPropertyDescriptors,cg=Object.getOwnPropertySymbols,cy=Object.prototype.hasOwnProperty,cb=Object.prototype.propertyIsEnumerable,cx=(e,t,r)=>t in e?ch(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let cv=class extends s.Component{constructor(){super(...arguments),this.renderDropdown=e=>s.createElement(oS,cm(((e,t)=>{for(var r in t||(t={}))cy.call(t,r)&&cx(e,r,t[r]);if(cg)for(var r of cg(t))cb.call(t,r)&&cx(e,r,t[r]);return e})({Label:st,Dropdown:si},e),cf({variant:"dark"})))}render(){let{callbacks:e}=this.props;if(!e||0===e.length)return null;let t=e.map(e=>e.operations.map(e=>e)).reduce((e,t)=>e.concat(t),[]);if(!t.some(e=>e.codeSamples.length>0))return null;let r=t.map((e,t)=>({value:`${e.httpVerb.toUpperCase()}: ${e.name}`,idx:t}));return s.createElement("div",null,s.createElement(i_,null," Callback payload samples "),s.createElement(cw,null,s.createElement(cr,{items:t,renderDropdown:this.renderDropdown,label:"Callback",options:r},e=>s.createElement(cu,{key:"callbackPayloadSample",callback:e,renderDropdown:this.renderDropdown}))))}};cv.contextType=ed,cv=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],cv);let cw=en.div`
  background: ${({theme:e})=>e.codeBlock.backgroundColor};
  padding: ${e=>4*e.theme.spacing.unit}px;
`,ck=class extends s.Component{render(){let{operation:e}=this.props,t=e.codeSamples,r=t.length>0,n=1===t.length&&this.context.hideSingleRequestSampleTab;return r&&s.createElement("div",null,s.createElement(i_,null," ",z("requestSamples")," "),s.createElement(i9,{defaultIndex:0},s.createElement(i4.TabList,{hidden:n},t.map(e=>s.createElement(i4.Tab,{key:e.lang+"_"+(e.label||"")},void 0!==e.label?e.label:e.lang))),t.map(e=>s.createElement(i4.TabPanel,{key:e.lang+"_"+(e.label||"")},nM(e)?s.createElement("div",null,s.createElement(cp,{content:e.requestBodyContent})):s.createElement(o8,{lang:e.lang,source:e.source})))))||null}};ck.contextType=ed,ck=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],ck);let cE=class extends s.Component{render(){let{operation:e}=this.props,t=e.responses.filter(e=>e.content&&e.content.hasSample);return t.length>0&&s.createElement("div",null,s.createElement(i_,null," ",z("responseSamples")," "),s.createElement(i9,{defaultIndex:0},s.createElement(i4.TabList,null,t.map(e=>s.createElement(i4.Tab,{className:"tab-"+e.type,key:e.code},e.code))),t.map(e=>s.createElement(i4.TabPanel,{key:e.code},s.createElement("div",null,s.createElement(cp,{content:e.content}))))))||null}};cE=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],cE);var cO=Object.defineProperty,cj=Object.defineProperties,c$=Object.getOwnPropertyDescriptors,cS=Object.getOwnPropertySymbols,cC=Object.prototype.hasOwnProperty,cA=Object.prototype.propertyIsEnumerable,cP=(e,t,r)=>t in e?cO(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let cI=en.div`
  margin-bottom: ${({theme:e})=>6*e.spacing.unit}px;
`,cT=(0,sl.observer)(({operation:e})=>{let{name:t,description:r,deprecated:n,externalDocs:i,isWebhook:o,httpVerb:a}=e,l=!(!r&&!i),{showWebhookVerb:c}=s.useContext(ed);return s.createElement(ed.Consumer,null,p=>s.createElement(iS,cj(((e,t)=>{for(var r in t||(t={}))cC.call(t,r)&&cP(e,r,t[r]);if(cS)for(var r of cS(t))cA.call(t,r)&&cP(e,r,t[r]);return e})({},{[ig]:e.operationHash}),c$({id:e.operationHash})),s.createElement(iE,null,s.createElement(iI,null,s.createElement(iQ,{to:e.id}),t," ",n&&s.createElement(iV,{type:"warning"}," Deprecated "),o&&s.createElement(iV,{type:"primary"}," ","Webhook ",c&&a&&"| "+a.toUpperCase())),p.pathInMiddlePanel&&!o&&s.createElement(lj,{operation:e,inverted:!0}),l&&s.createElement(cI,null,void 0!==r&&s.createElement(oq,{source:r}),i&&s.createElement(sE,{externalDocs:i})),s.createElement(sS,{extensions:e.extensions}),s.createElement(l5,{securities:e.security}),s.createElement(lz,{parameters:e.parameters,body:e.requestBody}),s.createElement(l2,{responses:e.responses}),s.createElement(ce,{callbacks:e.callbacks})),s.createElement(i$,null,!p.pathInMiddlePanel&&!o&&s.createElement(lj,{operation:e}),s.createElement(ck,{operation:e}),s.createElement(cE,{operation:e}),s.createElement(cv,{callbacks:e.callbacks}))))});var c_=Object.defineProperty,cR=Object.getOwnPropertyDescriptor,cL=Object.getOwnPropertySymbols,cz=Object.prototype.hasOwnProperty,cD=Object.prototype.propertyIsEnumerable,cN=(e,t,r)=>t in e?c_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,cM=(e,t,r,n)=>{for(var i,o=n>1?void 0:n?cR(t,r):t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=(n?i(t,r,o):i(o))||o);return n&&o&&c_(t,r,o),o};let cF=class extends s.Component{render(){let e=this.props.items;return 0===e.length?null:e.map(e=>s.createElement(cq,{key:e.id,item:e}))}};cF=cM([sl.observer],cF);let cq=class extends s.Component{render(){let e;let t=this.props.item,{type:r}=t;switch(r){case"group":e=null;break;case"tag":case"section":default:e=s.createElement(cQ,((e,t)=>{for(var r in t||(t={}))cz.call(t,r)&&cN(e,r,t[r]);if(cL)for(var r of cL(t))cD.call(t,r)&&cN(e,r,t[r]);return e})({},this.props));break;case"operation":e=s.createElement(cU,{item:t})}return s.createElement(s.Fragment,null,e&&s.createElement(iO,{id:t.id,$underlined:"operation"===t.type},e),t.items&&s.createElement(cF,{items:t.items}))}};cq=cM([sl.observer],cq);let cB=e=>s.createElement(iE,{$compact:!0},e),cQ=class extends s.Component{render(){let{name:e,description:t,externalDocs:r,level:n}=this.props.item,i=2===n?iT:iI;return s.createElement(s.Fragment,null,s.createElement(iS,null,s.createElement(iE,{$compact:!1},s.createElement(i,null,s.createElement(iQ,{to:this.props.item.id}),e))),s.createElement(lr,{parentId:this.props.item.id,source:t||"",htmlWrap:cB}),r&&s.createElement(iS,null,s.createElement(iE,null,s.createElement(sE,{externalDocs:r}))))}};cQ=cM([sl.observer],cQ);let cU=class extends s.Component{render(){return s.createElement(cT,{operation:this.props.item})}};cU=cM([sl.observer],cU);var cW=Object.defineProperty,cV=Object.defineProperties,cH=Object.getOwnPropertyDescriptors,cJ=Object.getOwnPropertySymbols,cY=Object.prototype.hasOwnProperty,cZ=Object.prototype.propertyIsEnumerable,cG=(e,t,r)=>t in e?cW(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let cX=class extends s.Component{constructor(){super(...arguments),this.ref=s.createRef(),this.activate=e=>{this.props.onActivate(this.props.item),e.stopPropagation()}}componentDidMount(){this.scrollIntoViewIfActive()}componentDidUpdate(){this.scrollIntoViewIfActive()}scrollIntoViewIfActive(){this.props.item.active&&this.ref.current&&d(this.ref.current)}render(){let{item:e,withoutChildren:t}=this.props;return s.createElement(la,{tabIndex:0,onClick:this.activate,depth:e.depth,"data-item-id":e.id,role:"menuitem"},"operation"===e.type?s.createElement(cK,cV(((e,t)=>{for(var r in t||(t={}))cY.call(t,r)&&cG(e,r,t[r]);if(cJ)for(var r of cJ(t))cZ.call(t,r)&&cG(e,r,t[r]);return e})({},this.props),cH({item:e}))):s.createElement(lc,{$depth:e.depth,$active:e.active,$type:e.type,ref:this.ref},"schema"===e.type&&s.createElement(li,{type:"schema"},"schema"),s.createElement(lp,{width:"calc(100% - 38px)",title:e.sidebarLabel},e.sidebarLabel,this.props.children),e.depth>0&&e.items.length>0&&s.createElement(iW,{float:"right",direction:e.expanded?"down":"right"})||null),!t&&e.items&&e.items.length>0&&s.createElement(c5,{expanded:e.expanded,items:e.items,onActivate:this.props.onActivate}))}};cX=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],cX);let cK=(0,sl.observer)(e=>{let{item:t}=e,r=s.createRef(),{showWebhookVerb:n}=s.useContext(ed);return s.useEffect(()=>{e.item.active&&r.current&&d(r.current)},[e.item.active,r]),s.createElement(lc,{$depth:t.depth,$active:t.active,$deprecated:t.deprecated,ref:r},t.isWebhook?s.createElement(li,{type:"hook"},n?t.httpVerb:z("webhook")):s.createElement(li,{type:t.httpVerb},tp(t.httpVerb)),s.createElement(lp,{tabIndex:0,width:"calc(100% - 38px)"},t.sidebarLabel,e.children))});var c0=Object.defineProperty,c1=Object.getOwnPropertySymbols,c2=Object.prototype.hasOwnProperty,c6=Object.prototype.propertyIsEnumerable,c3=(e,t,r)=>t in e?c0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;let c5=class extends s.Component{render(){let{items:e,root:t,className:r}=this.props,n=null==this.props.expanded||this.props.expanded;return s.createElement(ls,((e,t)=>{for(var r in t||(t={}))c2.call(t,r)&&c3(e,r,t[r]);if(c1)for(var r of c1(t))c6.call(t,r)&&c3(e,r,t[r]);return e})({className:r,style:this.props.style,$expanded:n},t?{role:"menu"}:{}),e.map((e,t)=>s.createElement(cX,{key:t,item:e,onActivate:this.props.onActivate})))}};function c8(){let[e,t]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{t(!0)},[]),e?s.createElement("img",{alt:"redocly logo",onError:()=>t(!1),src:"https://cdn.redoc.ly/redoc/logo-mini.svg"}):null}c5=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],c5);let c4=class extends s.Component{constructor(){super(...arguments),this.activate=e=>{if(e&&e.active&&this.context.menuToggle)return e.expanded?e.collapse():e.expand();this.props.menu.activateAndScroll(e,!0),setTimeout(()=>{this._updateScroll&&this._updateScroll()})},this.saveScrollUpdate=e=>{this._updateScroll=e}}render(){let e=this.props.menu;return s.createElement(of,{updateFn:this.saveScrollUpdate,className:this.props.className,options:{wheelPropagation:!1}},s.createElement(c5,{items:e.items,onActivate:this.activate,root:!0}),s.createElement(lu,null,s.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://redocly.com/redoc/"},s.createElement(c8,null),"API docs by Redocly")))}};c4.contextType=ed,c4=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],c4);let c9=({open:e})=>{let t=e?8:-4;return s.createElement(pe,null,s.createElement(c7,{size:15,style:{transform:`translate(2px, ${t}px) rotate(180deg)`,transition:"transform 0.2s ease"}}),s.createElement(c7,{size:15,style:{transform:`translate(2px, ${0-t}px)`,transition:"transform 0.2s ease"}}))},c7=({size:e=10,className:t="",style:r})=>s.createElement("svg",{className:t,style:r||{},viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:e,height:e},s.createElement("g",{transform:"translate(904.92214,-879.1482)"},s.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"}))),pe=en.div`
  user-select: none;
  width: 20px;
  height: 20px;
  align-self: center;
  display: flex;
  flex-direction: column;
  color: ${e=>e.theme.colors.primary.main};
`;c&&(e=n(322));let pt=e&&e(),pr=en.div`
  width: ${e=>e.theme.sidebar.width};
  background-color: ${e=>e.theme.sidebar.backgroundColor};
  overflow: hidden;
  display: flex;
  flex-direction: column;

  backface-visibility: hidden;
  /* contain: strict; TODO: breaks layout since Chrome 80*/

  height: 100vh;
  position: sticky;
  position: -webkit-sticky;
  top: 0;

  ${er.lessThan("small")`
    position: fixed;
    z-index: 20;
    width: 100%;
    background: ${({theme:e})=>e.sidebar.backgroundColor};
    display: ${e=>e.$open?"flex":"none"};
  `};

  @media print {
    display: none;
  }
`,pn=en.div`
  outline: none;
  user-select: none;
  background-color: ${({theme:e})=>e.fab.backgroundColor};
  color: ${e=>e.theme.colors.primary.main};
  display: none;
  cursor: pointer;
  position: fixed;
  right: 20px;
  z-index: 100;
  border-radius: 50%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  ${er.lessThan("small")`
    display: flex;
  `};

  bottom: 44px;

  width: 60px;
  height: 60px;
  padding: 0 20px;
  svg {
    color: ${({theme:e})=>e.fab.color};
  }

  @media print {
    display: none;
  }
`,pi=class extends s.Component{constructor(){super(...arguments),this.state={offsetTop:"0px"},this.toggleNavMenu=()=>{this.props.menu.toggleSidebar()}}componentDidMount(){pt&&pt.add(this.stickyElement),this.setState({offsetTop:this.getScrollYOffset(this.context)})}componentWillUnmount(){pt&&pt.remove(this.stickyElement)}getScrollYOffset(e){return(void 0!==this.props.scrollYOffset?J.normalizeScrollYOffset(this.props.scrollYOffset)():e.scrollYOffset())+"px"}render(){let e=this.props.menu.sideBarOpened,t=this.state.offsetTop;return s.createElement(s.Fragment,null,s.createElement(pr,{$open:e,className:this.props.className,style:{top:t,height:`calc(100vh - ${t})`},ref:e=>{this.stickyElement=e}},this.props.children),!this.context.hideFab&&s.createElement(pn,{onClick:this.toggleNavMenu},s.createElement(c9,{open:e})))}};pi.contextType=ed,pi=((e,t,r,n)=>{for(var i,o=t,s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(o)||o);return o})([sl.observer],pi);let po=en.div`
  ${({theme:e})=>`
  font-family: ${e.typography.fontFamily};
  font-size: ${e.typography.fontSize};
  font-weight: ${e.typography.fontWeightRegular};
  line-height: ${e.typography.lineHeight};
  color: ${e.colors.text.primary};
  display: flex;
  position: relative;
  text-align: left;

  -webkit-font-smoothing: ${e.typography.smoothing};
  font-smoothing: ${e.typography.smoothing};
  ${e.typography.optimizeSpeed?"text-rendering: optimizeSpeed !important":""};

  tap-highlight-color: rgba(0, 0, 0, 0);
  text-size-adjust: 100%;

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
`};
`,ps=en.div`
  z-index: 1;
  position: relative;
  overflow: hidden;
  width: calc(100% - ${e=>e.theme.sidebar.width});
  ${er.lessThan("small",!0)`
    width: 100%;
  `};

  contain: layout;
`,pa=en.div`
  background: ${({theme:e})=>e.rightPanel.backgroundColor};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  width: ${({theme:e})=>{if(e.rightPanel.width.endsWith("%")){let t=parseInt(e.rightPanel.width,10);return`calc((100% - ${e.sidebar.width}) * ${t/100})`}return e.rightPanel.width}};
  ${er.lessThan("medium",!0)`
    display: none;
  `};
`,pl=en.div`
  padding: 5px 0;
`,pc=en.input.attrs(()=>({className:"search-input"}))`
  width: calc(100% - ${e=>8*e.theme.spacing.unit}px);
  box-sizing: border-box;
  margin: 0 ${e=>4*e.theme.spacing.unit}px;
  padding: 5px ${e=>2*e.theme.spacing.unit}px 5px
    ${e=>4*e.theme.spacing.unit}px;
  border: 0;
  border-bottom: 1px solid
    ${({theme:e})=>((0,a.getLuminance)(e.sidebar.backgroundColor)>.5?a.darken:a.lighten)(.1,e.sidebar.backgroundColor)};
  font-family: ${({theme:e})=>e.typography.fontFamily};
  font-weight: bold;
  font-size: 13px;
  color: ${e=>e.theme.sidebar.textColor};
  background-color: transparent;
  outline: none;
`,pp=en(e=>s.createElement("svg",{className:e.className,version:"1.1",viewBox:"0 0 1000 1000",x:"0px",xmlns:"http://www.w3.org/2000/svg",y:"0px"},s.createElement("path",{d:"M968.2,849.4L667.3,549c83.9-136.5,66.7-317.4-51.7-435.6C477.1-25,252.5-25,113.9,113.4c-138.5,138.3-138.5,362.6,0,501C219.2,730.1,413.2,743,547.6,666.5l301.9,301.4c43.6,43.6,76.9,14.9,104.2-12.4C981,928.3,1011.8,893,968.2,849.4z M524.5,522c-88.9,88.7-233,88.7-321.8,0c-88.9-88.7-88.9-232.6,0-321.3c88.9-88.7,233-88.7,321.8,0C613.4,289.4,613.4,433.3,524.5,522z"}))).attrs({className:"search-icon"})`
  position: absolute;
  left: ${e=>4*e.theme.spacing.unit}px;
  height: 1.8em;
  width: 0.9em;

  path {
    fill: ${e=>e.theme.sidebar.textColor};
  }
`,pu=en.div`
  padding: ${e=>e.theme.spacing.unit}px 0;
  background-color: ${({theme:e})=>(0,a.darken)(.05,e.sidebar.backgroundColor)}};
  color: ${e=>e.theme.sidebar.textColor};
  min-height: 150px;
  max-height: 250px;
  border-top: ${({theme:e})=>(0,a.darken)(.1,e.sidebar.backgroundColor)}};
  border-bottom: ${({theme:e})=>(0,a.darken)(.1,e.sidebar.backgroundColor)}};
  margin-top: 10px;
  line-height: 1.4;
  font-size: 0.9em;
  
  li {
    background-color: inherit;
  }

  ${lc} {
    padding-top: 6px;
    padding-bottom: 6px;

    &:hover,
    &.active {
      background-color: ${({theme:e})=>(0,a.darken)(.1,e.sidebar.backgroundColor)};
    }

    > svg {
      display: none;
    }
  }
`,pd=en.i`
  position: absolute;
  display: inline-block;
  width: ${e=>2*e.theme.spacing.unit}px;
  text-align: center;
  right: ${e=>4*e.theme.spacing.unit}px;
  line-height: 2em;
  vertical-align: middle;
  margin-right: 2px;
  cursor: pointer;
  font-style: normal;
  color: '#666';
`;var ph=Object.defineProperty,pm=Object.getOwnPropertyDescriptor;class pf extends s.PureComponent{constructor(e){super(e),this.activeItemRef=null,this.clear=()=>{this.setState({results:[],noResults:!1,term:"",activeItemIdx:-1}),this.props.marker.unmark()},this.handleKeyDown=e=>{if(27===e.keyCode&&this.clear(),40===e.keyCode&&(this.setState({activeItemIdx:Math.min(this.state.activeItemIdx+1,this.state.results.length-1)}),e.preventDefault()),38===e.keyCode&&(this.setState({activeItemIdx:Math.max(0,this.state.activeItemIdx-1)}),e.preventDefault()),13===e.keyCode){let e=this.state.results[this.state.activeItemIdx];if(e){let t=this.props.getItemById(e.meta);t&&this.props.onActivate(t)}}},this.search=e=>{let{minCharacterLengthToInitSearch:t}=this.context,r=e.target.value;r.length<t?this.clearResults(r):this.setState({term:r},()=>this.searchCallback(this.state.term))},this.state={results:[],noResults:!1,term:"",activeItemIdx:-1}}clearResults(e){this.setState({results:[],noResults:!1,term:e}),this.props.marker.unmark()}setResults(e,t){this.setState({results:e,noResults:0===e.length}),this.props.marker.mark(t)}searchCallback(e){this.props.search.search(e).then(t=>{this.setResults(t,e)})}render(){let{activeItemIdx:e}=this.state,t=this.state.results.filter(e=>this.props.getItemById(e.meta)).map(e=>({item:this.props.getItemById(e.meta),score:e.score})).sort((e,t)=>t.score-e.score);return s.createElement(pl,{role:"search"},this.state.term&&s.createElement(pd,{onClick:this.clear},"\xd7"),s.createElement(pp,null),s.createElement(pc,{value:this.state.term,onKeyDown:this.handleKeyDown,placeholder:"Search...","aria-label":"Search",type:"text",onChange:this.search}),t.length>0&&s.createElement(of,{options:{wheelPropagation:!1}},s.createElement(pu,{"data-role":"search:results"},t.map((t,r)=>s.createElement(cX,{item:Object.create(t.item,{active:{value:r===e}}),onActivate:this.props.onActivate,withoutChildren:!0,key:t.item.id,"data-role":"search:result"})))),this.state.term&&this.state.noResults?s.createElement(pu,{"data-role":"search:results"},z("noResultsFound")):null)}}pf.contextType=ed,((e,t,r,n)=>{for(var i,o=pm(t,r),s=e.length-1;s>=0;s--)(i=e[s])&&(o=i(t,r,o)||o);o&&ph(t,r,o)})([ek.bind,(0,ek.debounce)(400)],pf.prototype,"searchCallback");class pg extends s.Component{componentDidMount(){this.props.store.onDidMount()}componentWillUnmount(){this.props.store.dispose()}render(){let{store:{spec:e,menu:t,options:r,search:n,marker:i}}=this.props,o=this.props.store;return s.createElement(et,{theme:r.theme},s.createElement(iD,{value:o},s.createElement(eh,{value:r},s.createElement(po,{className:"redoc-wrap"},s.createElement(pi,{menu:t,className:"menu-content"},s.createElement(a5,{info:e.info}),!r.disableSearch&&s.createElement(pf,{search:n,marker:i,getItemById:t.getItemById,onActivate:t.activateAndScroll})||null,s.createElement(c4,{menu:t})),s.createElement(ps,{className:"api-content"},s.createElement(a1,{store:o}),s.createElement(cF,{items:t.items})),s.createElement(pa,null)))))}}pg.propTypes={store:eu.instanceOf(aJ).isRequired};var py=Object.defineProperty,pb=Object.getOwnPropertySymbols,px=Object.prototype.hasOwnProperty,pv=Object.prototype.propertyIsEnumerable,pw=(e,t,r)=>t in e?py(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,pk=(e,t)=>{for(var r in t||(t={}))px.call(t,r)&&pw(e,r,t[r]);if(pb)for(var r of pb(t))pv.call(t,r)&&pw(e,r,t[r]);return e};let pE=function(e){let{spec:t,specUrl:r,options:i={},onLoaded:o}=e,a=V(i.hideLoading,!1),l=new J(i);if(void 0!==l.nonce)try{n.nc=l.nonce}catch(e){}return s.createElement(es,null,s.createElement(iM,{spec:t?pk({},t):void 0,specUrl:r,options:i,onLoaded:o},({loading:e,store:t})=>e?a?null:s.createElement(ep,{color:l.theme.colors.primary.main}):s.createElement(pg,{store:t})))}}(),o}()},e.exports=n()}}]);
//# sourceMappingURL=4fce42d6-ffa77e99c7379811.js.map