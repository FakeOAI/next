"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4777],{51866:function(e,t,n){n.d(t,{Z:function(){return f},b:function(){return d}});var r=n(98601),i=n(52088),a=n(51308),o=n(63585),l=n(89905),c=n(651);let u=["node","className","children","inline"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function f(e){let{node:t,className:n,children:r,inline:o}=e,s=(0,i.Z)(e,u);if(o)return(0,c.jsx)("code",h(h({className:n},s),{},{children:r}));{var f;let e=null==n||null===(f=n.split(" ").filter(e=>e.startsWith("language-")))||void 0===f?void 0:f[0],i=e?e.split("-")[1]:"",o=t?(0,a.B)(t):"";return(0,c.jsx)(l.Z,{language:i,className:n,content:o,children:r})}}function p(e){return"element"===e.type}function d(){return function(e){(0,o.Vn)(e,"element",function(e,t,n){p(e)&&"code"===e.tagName&&(n&&p(n)&&"pre"===n.tagName?e.properties.inline=!1:e.properties.inline=!0)})}}},33491:function(e,t,n){n.d(t,{R:function(){return s},k:function(){return u}});var r=n(67794),i=n(92379),a=n(63585),o=n(65994),l=n(84654),c=n(651);let u=()=>e=>{(0,a.Vn)(e,e=>{var t,n;if(!(0,l.j)(e)||e.name!==o.p)return;let r=null!==(t=e.data)&&void 0!==t?t:e.data={},i=null===(n=e.attributes)||void 0===n?void 0:n.index;if(null==i)return;r.hName=o.p,r.hProperties={index:i};let a="inline";switch(e.type){case"textDirective":a="inline";break;case"leafDirective":a="block";break;case"containerDirective":a="container"}r.hProperties.displayLayout=a})},s=e=>{let{index:t}=e,n=(0,i.useContext)(r.h7);if(null==n)return null;let{displayedCitations:a}=n,o=a[t];return(0,c.jsx)(r.s8,{index:t,displayInfo:o,displayType:n.displayType})}},22440:function(e,t,n){n.d(t,{O6:function(){return k},ZP:function(){return v},c7:function(){return S}});var r=n(98601),i=n(52088),a=n(66114),o=n(2721),l=n(92745),c=n(92319),u=n(42420),s=n(84760),h=n(92379),f=n(75172),p=n(62984),d=n(68306),m=n(97537),g=n(30853),x=n(24740),y=n(651);let q=["messageId","clientThreadId","href"];function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let k="sandbox:";function v(e){let{messageId:t,clientThreadId:n,href:r}=e,p=(0,i.Z)(e,q),d=(0,l.h9)(),b=(0,u.NL)(),{0:v,1:S}=(0,h.useState)(!1),V=r.substring(k.length),j=l.tQ.getServerThreadId(n),O=(0,f.Z)(),D=(0,h.useCallback)(e=>{let t=document.createElement("a");t.href=e,t.click(),S(!1)},[]),E=function(e,t,n,r,i,l){let u=(0,a.VF)();return(0,s.a)({queryKey:F(t,r),queryFn:()=>o.Z.downloadFromInterpreter(t,n,r).then(e=>((null==e?void 0:e.status)==="success"&&l(e.download_url),e)).catch(e=>{let t=u("default_download_link_error",{fileName:r});throw e instanceof c.vq&&null!=e.code&&(t=u(e.code)),null==i||i(t),e}),enabled:!!(e&&t&&n&&r)})}(v&&!d,t,j,V,(0,h.useCallback)(e=>{S(!1),x.m.danger(e)},[]),D).data,P=(0,h.useCallback)(async e=>{void 0!==n&&(e.preventDefault(),(void 0===E||(null==E?void 0:E.status)!=="success")&&b.invalidateQueries({queryKey:F(t,V)}),(null==E?void 0:E.status)==="success"&&null!=E&&E.download_url?D(E.download_url):S(!0))},[n,E,b,t,V,D]);return(0,y.jsx)(g.u,{closeOnOutsideClick:!1,delayDuration:0,label:(0,y.jsxs)("span",{className:"flex items-center gap-1",children:[v?O.formatMessage(T.startingDownload):O.formatMessage(T.downloadFile),v&&(0,y.jsx)(m.Z,{})]}),side:"top",sideOffset:4,children:(0,y.jsx)("a",w(w({},p),{},{className:"cursor-pointer",onClick:e=>!v&&P(e)}))})}function S(e){return(0,y.jsx)(g.u,{closeOnOutsideClick:!1,delayDuration:0,label:(0,y.jsx)("span",{className:"flex items-center gap-1",children:(0,y.jsx)(p.Z,w({},T.downloadUnavailable))}),side:"top",sideOffset:4,children:(0,y.jsx)("span",w(w({},e),{},{className:"font-semibold text-token-text-secondary underline"}))})}function F(e,t){return["downloadSandboxLink",e,t]}let T=(0,d.vU)({downloadFile:{id:"SandboxDownload.downloadFile",defaultMessage:"Download file"},startingDownload:{id:"SandboxDownload.startingDownload",defaultMessage:"Starting download"},downloadUnavailable:{id:"SandboxDownload.downloadUnavailable",defaultMessage:"File download not supported in a shared chat"}})},4777:function(e,t,n){n.d(t,{ff:function(){return Z},Yu:function(){return C},Hf:function(){return P},SQ:function(){return E}});var r=n(26868),i=n(55975),a=n(46050),o=n(29874),l=n(8449),c=n(15472);let u={tokenize:function(e,t,n){let r=this,u=this.events[this.events.length-1],h=u&&u[1].type===c.V.linePrefix?u[2].sliceSerialize(u[1],!0).length:0,f=[];return function(t){return i.q.backslash,e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return r===i.q.backslash||r===i.q.leftSquareBracket&&f[0]===i.q.backslash?(e.consume(r),f.push(r),t):(e.exit("mathFlowFenceSequence"),f.length<2?n(r):(0,a.f)(e,p,c.V.whitespace)(r))}(t)};function p(t){return t===i.q.eof||(0,o.Ch)(t)?d(t):(e.enter("mathFlowFenceMeta"),e.enter(c.V.chunkString,{contentType:l._.contentTypeString}),function t(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit(c.V.chunkString),e.exit("mathFlowFenceMeta"),d(r)):r===i.q.rightSquareBracket?n(r):(e.consume(r),t)}(t))}function d(n){return e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return n===i.q.eof?m(n):(0,o.Ch)(n)?e.attempt(s,e.attempt({tokenize:g,partial:!0},m,h?(0,a.f)(e,t,c.V.linePrefix,h+1):t),m)(n):(e.enter("mathFlowValue"),function n(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function m(n){return e.exit("mathFlow"),t(n)}function g(e,t,n){let r=[];return(0,a.f)(e,function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return o===i.q.backslash&&0===r.length||o===i.q.rightSquareBracket&&r[0]===i.q.backslash?(e.consume(o),r.push(o),t):r<f?n(o):(e.exit("mathFlowFenceSequence"),(0,a.f)(e,u,c.V.whitespace)(o))}(t)},c.V.linePrefix,l._.tabSize);function u(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},s={tokenize:function(e,t,n){let r=this;return function(t){return e.enter(c.V.lineEnding),e.consume(t),e.exit(c.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},h={tokenize:function(e,t,n){let r=this,u=r.events[r.events.length-1],s=u&&u[1].type===c.V.linePrefix?u[2].sliceSerialize(u[1],!0).length:0,h=0;return function(t){return i.q.dollarSign,e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return r===i.q.dollarSign?(e.consume(r),h++,t):(e.exit("mathFlowFenceSequence"),h<2?n(r):(0,a.f)(e,p,c.V.whitespace)(r))}(t)};function p(t){return t===i.q.eof||(0,o.Ch)(t)?d(t):(e.enter("mathFlowFenceMeta"),e.enter(c.V.chunkString,{contentType:l._.contentTypeString}),function t(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit(c.V.chunkString),e.exit("mathFlowFenceMeta"),d(r)):r===i.q.dollarSign?n(r):(e.consume(r),t)}(t))}function d(n){return e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return n===i.q.eof?m(n):(0,o.Ch)(n)?e.attempt(f,e.attempt({tokenize:g,partial:!0},m,s?(0,a.f)(e,t,c.V.linePrefix,s+1):t),m)(n):(e.enter("mathFlowValue"),function n(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function m(n){return e.exit("mathFlow"),t(n)}function g(e,t,n){let r=0;return(0,a.f)(e,function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return o===i.q.dollarSign?(e.consume(o),r++,t):r<h?n(o):(e.exit("mathFlowFenceSequence"),(0,a.f)(e,u,c.V.whitespace)(o))}(t)},c.V.linePrefix,l._.tabSize);function u(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},f={tokenize:function(e,t,n){let r=this;return function(t){return(0,o.Ch)(t),e.enter(c.V.lineEnding),e.consume(t),e.exit(c.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};function p(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===c.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===c.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==c.V.lineEnding&&(n=t):(t===r||e[t][1].type===c.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function d(e){return e!==i.q.backslash||this.events[this.events.length-1][1].type===c.V.characterEscape}function m(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===c.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===c.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==c.V.lineEnding&&(n=t):(t===r||e[t][1].type===c.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function g(e){return e!==i.q.dollarSign||this.events[this.events.length-1][1].type===c.V.characterEscape}function x(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===c.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===c.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==c.V.lineEnding&&(n=t):(t===r||e[t][1].type===c.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function y(e){return e!==i.q.backslash||this.events[this.events.length-1][1].type===c.V.characterEscape}var q=n(52620),b=n(50895),w=n(70229),k=n(91488),v=n(79619),S=n(15758),F=n(33549),T=n(58748),V=n(51866),j=n(33491),O=n(22440),D=n(65994);let E=e=>e.startsWith(O.O6)?e:(0,b.n)(e),P=[T.Z,[function(){let e=this.data();function t(t,n){(e[t]?e[t]:e[t]=[]).push(n)}t("micromarkExtensions",{flow:{[i.q.dollarSign]:h,[i.q.backslash]:u},text:{[i.q.dollarSign]:{tokenize:function(e,t,n){let r,a,l=0;return function(t){return e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return r===i.q.dollarSign?(e.consume(r),l++,t):l<2?n(r):(e.exit("mathTextSequence"),u(r))}(t)};function u(h){return h===i.q.eof?n(h):h===i.q.dollarSign?(a=e.enter("mathTextSequence"),r=0,function n(o){return o===i.q.dollarSign?(e.consume(o),r++,n):r===l?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(a.type="mathTextData",s(o))}(h)):h===i.q.space?(e.enter("space"),e.consume(h),e.exit("space"),u):(0,o.Ch)(h)?(e.enter(c.V.lineEnding),e.consume(h),e.exit(c.V.lineEnding),u):(e.enter("mathTextData"),s(h))}function s(t){return t===i.q.eof||t===i.q.space||t===i.q.dollarSign||(0,o.Ch)(t)?(e.exit("mathTextData"),u(t)):(e.consume(t),s)}},resolve:m,previous:g},[i.q.backslash]:[{tokenize:function(e,t,n){let r;let a=[],l=[],u=this;return function(t){return i.q.backslash,d.call(u,u.previous)&&u.previous,e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return(a.join(","),r===i.q.backslash&&0===a.length||r===i.q.leftParenthesis&&1===a.length)?(e.consume(r),a.push(r),t):a.length<2?n(r):(e.exit("mathTextSequence"),s(r))}(t)};function s(u){return u===i.q.eof?n(u):u===i.q.backslash?(r=e.enter("mathTextSequence"),l=[],function n(o){return(a.join(","),o===i.q.backslash&&0===l.length||o===i.q.rightParenthesis&&1===l.length)?(e.consume(o),l.push(o),n):l.length===a.length?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(r.type="mathTextData",h(o))}(u)):u===i.q.space?(e.enter("space"),e.consume(u),e.exit("space"),s):(0,o.Ch)(u)?(e.enter(c.V.lineEnding),e.consume(u),e.exit(c.V.lineEnding),s):(e.enter("mathTextData"),h(u))}function h(t){return t===i.q.eof||t===i.q.space||t===i.q.backslash||(0,o.Ch)(t)?(e.exit("mathTextData"),s(t)):(e.consume(t),h)}},resolve:p,previous:d},{tokenize:function(e,t,n){let r;let a=[],l=[],u=this;return function(t){return i.q.backslash,y.call(u,u.previous)&&u.previous,e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return(a.join(","),r===i.q.backslash&&0===a.length||r===i.q.leftSquareBracket&&1===a.length)?(e.consume(r),a.push(r),t):a.length<2?n(r):(e.exit("mathTextSequence"),s(r))}(t)};function s(u){return u===i.q.eof?n(u):u===i.q.backslash?(r=e.enter("mathTextSequence"),l=[],function n(o){return(a.join(","),o===i.q.backslash&&0===l.length||o===i.q.rightSquareBracket&&1===l.length)?(e.consume(o),l.push(o),n):l.length===a.length?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(r.type="mathTextData",h(o))}(u)):u===i.q.space?(e.enter("space"),e.consume(u),e.exit("space"),s):(0,o.Ch)(u)?(e.enter(c.V.lineEnding),e.consume(u),e.exit(c.V.lineEnding),s):(e.enter("mathTextData"),h(u))}function h(t){return t===i.q.eof||t===i.q.space||t===i.q.backslash||(0,o.Ch)(t)?(e.exit("mathTextData"),s(t)):(e.consume(t),h)}},resolve:x,previous:y}]}}),t("fromMarkdownExtensions",(0,r.N)()),t("toMarkdownExtensions",(0,r.O)())},{singleDollarTextMath:!1}],F.Z,j.k],C=[[k.Z,{languages:{mathematica:q.Z},detect:!0,subset:["arduino","bash","c","cpp","csharp","css","diff","go","graphql","java","javascript","json","kotlin","latex","less","lua","makefile","makefile","markdown","matlab","mathematica","nginx","objectivec","perl","pgsql","php-template","php","plaintext","python-repl","python","r","ruby","rust","scss","shell","sql","swift","typescript","vbnet","wasm","xml","yaml"],ignoreMissing:!0,aliases:{mathematica:"wolfram"}}],v.Z,[S.Z,{newlines:!0}],[w.Z,{target:"_new",rel:"noopener noreferrer"}],V.b],Z={code:V.Z,[D.p]:j.R}},84654:function(e,t,n){n.d(t,{j:function(){return r}});function r(e){return("containerDirective"===e.type||"textDirective"===e.type||"leafDirective"===e.type)&&"name"in e}}}]);
//# sourceMappingURL=4777.6aee38d292037bbc.js.map