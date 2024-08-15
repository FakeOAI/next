"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9027],{95204:function(e,t,n){var r,i=n(92379);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(null,arguments)}t.Z=e=>i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 34 34"},e),r||(r=i.createElement("g",{id:"icon / robot-sad"},i.createElement("path",{id:"Rectangle 49961",stroke:"currentColor",strokeWidth:2.833,d:"M4.959 9.917a2.833 2.833 0 0 1 2.833-2.834h18.417a2.833 2.833 0 0 1 2.833 2.834V21.25a5.667 5.667 0 0 1-5.667 5.667h-12.75A5.667 5.667 0 0 1 4.96 21.25z"}),i.createElement("circle",{id:"Ellipse 32520",cx:12.041,cy:14.167,r:2.125,fill:"currentColor"}),i.createElement("circle",{id:"Ellipse 32521",cx:21.959,cy:14.167,r:2.125,fill:"currentColor"}),i.createElement("path",{id:"Vector 2380",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M17 7.083V4.25"}),i.createElement("path",{id:"Vector 2381",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M4.958 14.167c-.782 0-1.416.634-1.416 1.416V17c0 .782.634 1.417 1.416 1.417v0"}),i.createElement("path",{id:"Vector 2382",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M29.042 14.167c.782 0 1.416.634 1.416 1.416V17c0 .782-.634 1.417-1.416 1.417v0"}),i.createElement("path",{id:"Vector 2386",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M19.834 21.158c-1.964-.822-3.703-.822-5.667 0"}))))},51866:function(e,t,n){n.d(t,{B:function(){return d},b:function(){return f}});var r=n(98601),i=n(52088),a=n(51308),o=n(63585),s=n(89905),l=n(651);let u=["node","className","children","inline"];function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function d(e){let{node:t,className:n,children:r,inline:o}=e,c=(0,i.Z)(e,u);if(o)return(0,l.jsx)("code",h(h({className:n},c),{},{children:r}));{let e=n?.split(" ").filter(e=>e.startsWith("language-"))?.[0],i=e?e.split("-")[1]:"",o=t?(0,a.B)(t):"";return(0,l.jsx)(s.Z,{language:i,className:n,content:o,children:r})}}function p(e){return"element"===e.type}function f(){return function(e){(0,o.Vn)(e,"element",function(e,t,n){p(e)&&"code"===e.tagName&&(n&&p(n)&&"pre"===n.tagName?e.properties.inline=!1:e.properties.inline=!0)})}}},22440:function(e,t,n){n.d(t,{O6:function(){return v},ZP:function(){return j},c7:function(){return S}});var r=n(98601),i=n(52088),a=n(66114),o=n(2721),s=n(92745),l=n(92319),u=n(42420),c=n(84760),h=n(92379),d=n(75172),p=n(62984),f=n(68306),g=n(97537),m=n(30853),b=n(24740),x=n(651);let y=["messageId","clientThreadId","href"];function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let v="sandbox:";function j(e){let{messageId:t,clientThreadId:n,href:r}=e,p=(0,i.Z)(e,y),f=(0,s.h9)(),w=(0,u.NL)(),{0:j,1:S}=(0,h.useState)(!1),P=r.substring(v.length),E=s.tQ.getServerThreadId(n),F=(0,d.Z)(),T=(0,h.useCallback)(e=>{let t=document.createElement("a");t.href=e,t.click(),S(!1)},[]),M=function(e,t,n,r,i,s){let u=(0,a.VF)();return(0,c.a)({queryKey:q(t,r),queryFn:()=>o.Z.downloadFromInterpreter(t,n,r).then(e=>(e?.status==="success"&&s(e.download_url),e)).catch(e=>{let t=u("default_download_link_error",{fileName:r});throw e instanceof l.vq&&null!=e.code&&(t=u(e.code)),i?.(t),e}),enabled:!!(e&&t&&n&&r)})}(j&&!f,t,E,P,(0,h.useCallback)(e=>{S(!1),b.m.danger(e)},[]),T).data,_=(0,h.useCallback)(async e=>{void 0!==n&&(e.preventDefault(),(void 0===M||M?.status!=="success")&&w.invalidateQueries({queryKey:q(t,P)}),M?.status==="success"&&M?.download_url?T(M.download_url):S(!0))},[n,M,w,t,P,T]);return(0,x.jsx)(m.u,{closeOnOutsideClick:!1,delayDuration:0,label:(0,x.jsxs)("span",{className:"flex items-center gap-1",children:[j?F.formatMessage(k.startingDownload):F.formatMessage(k.downloadFile),j&&(0,x.jsx)(g.Z,{})]}),side:"top",sideOffset:4,children:(0,x.jsx)("a",O(O({},p),{},{className:"cursor-pointer",onClick:e=>!j&&_(e)}))})}function S(e){return(0,x.jsx)(m.u,{closeOnOutsideClick:!1,delayDuration:0,label:(0,x.jsx)("span",{className:"flex items-center gap-1",children:(0,x.jsx)(p.Z,O({},k.downloadUnavailable))}),side:"top",sideOffset:4,children:(0,x.jsx)("span",O(O({},e),{},{className:"font-semibold text-token-text-secondary underline"}))})}function q(e,t){return["downloadSandboxLink",e,t]}let k=(0,f.vU)({downloadFile:{id:"SandboxDownload.downloadFile",defaultMessage:"Download file"},startingDownload:{id:"SandboxDownload.startingDownload",defaultMessage:"Starting download"},downloadUnavailable:{id:"SandboxDownload.downloadUnavailable",defaultMessage:"File download not supported in a shared chat"}})},99027:function(e,t,n){n.d(t,{Yu:function(){return C},Hf:function(){return V},SQ:function(){return D}});var r=n(26868),i=n(55975),a=n(46050),o=n(29874),s=n(8449),l=n(15472);let u={tokenize:function(e,t,n){let r=this,u=this.events[this.events.length-1],h=u&&u[1].type===l.V.linePrefix?u[2].sliceSerialize(u[1],!0).length:0,d=[];return function(t){return i.q.backslash,e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return r===i.q.backslash||r===i.q.leftSquareBracket&&d[0]===i.q.backslash?(e.consume(r),d.push(r),t):(e.exit("mathFlowFenceSequence"),d.length<2?n(r):(0,a.f)(e,p,l.V.whitespace)(r))}(t)};function p(t){return t===i.q.eof||(0,o.Ch)(t)?f(t):(e.enter("mathFlowFenceMeta"),e.enter(l.V.chunkString,{contentType:s._.contentTypeString}),function t(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit(l.V.chunkString),e.exit("mathFlowFenceMeta"),f(r)):r===i.q.rightSquareBracket?n(r):(e.consume(r),t)}(t))}function f(n){return e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return n===i.q.eof?g(n):(0,o.Ch)(n)?e.attempt(c,e.attempt({tokenize:m,partial:!0},g,h?(0,a.f)(e,t,l.V.linePrefix,h+1):t),g)(n):(e.enter("mathFlowValue"),function n(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function g(n){return e.exit("mathFlow"),t(n)}function m(e,t,n){let r=[];return(0,a.f)(e,function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return o===i.q.backslash&&0===r.length||o===i.q.rightSquareBracket&&r[0]===i.q.backslash?(e.consume(o),r.push(o),t):r<d?n(o):(e.exit("mathFlowFenceSequence"),(0,a.f)(e,u,l.V.whitespace)(o))}(t)},l.V.linePrefix,s._.tabSize);function u(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},c={tokenize:function(e,t,n){let r=this;return function(t){return e.enter(l.V.lineEnding),e.consume(t),e.exit(l.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0},h={tokenize:function(e,t,n){let r=this,u=r.events[r.events.length-1],c=u&&u[1].type===l.V.linePrefix?u[2].sliceSerialize(u[1],!0).length:0,h=0;return function(t){return i.q.dollarSign,e.enter("mathFlow"),e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(r){return r===i.q.dollarSign?(e.consume(r),h++,t):(e.exit("mathFlowFenceSequence"),h<2?n(r):(0,a.f)(e,p,l.V.whitespace)(r))}(t)};function p(t){return t===i.q.eof||(0,o.Ch)(t)?f(t):(e.enter("mathFlowFenceMeta"),e.enter(l.V.chunkString,{contentType:s._.contentTypeString}),function t(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit(l.V.chunkString),e.exit("mathFlowFenceMeta"),f(r)):r===i.q.dollarSign?n(r):(e.consume(r),t)}(t))}function f(n){return e.exit("mathFlowFence"),r.interrupt?t(n):function t(n){return n===i.q.eof?g(n):(0,o.Ch)(n)?e.attempt(d,e.attempt({tokenize:m,partial:!0},g,c?(0,a.f)(e,t,l.V.linePrefix,c+1):t),g)(n):(e.enter("mathFlowValue"),function n(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowValue"),t(r)):(e.consume(r),n)}(n))}(n)}function g(n){return e.exit("mathFlow"),t(n)}function m(e,t,n){let r=0;return(0,a.f)(e,function(t){return e.enter("mathFlowFence"),e.enter("mathFlowFenceSequence"),function t(o){return o===i.q.dollarSign?(e.consume(o),r++,t):r<h?n(o):(e.exit("mathFlowFenceSequence"),(0,a.f)(e,u,l.V.whitespace)(o))}(t)},l.V.linePrefix,s._.tabSize);function u(r){return r===i.q.eof||(0,o.Ch)(r)?(e.exit("mathFlowFence"),t(r)):n(r)}}},concrete:!0},d={tokenize:function(e,t,n){let r=this;return function(t){return(0,o.Ch)(t),e.enter(l.V.lineEnding),e.consume(t),e.exit(l.V.lineEnding),i};function i(e){return r.parser.lazy[r.now().line]?n(e):t(e)}},partial:!0};function p(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===l.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===l.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==l.V.lineEnding&&(n=t):(t===r||e[t][1].type===l.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function f(e){return e!==i.q.backslash||this.events[this.events.length-1][1].type===l.V.characterEscape}function g(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===l.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===l.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==l.V.lineEnding&&(n=t):(t===r||e[t][1].type===l.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function m(e){return e!==i.q.dollarSign||this.events[this.events.length-1][1].type===l.V.characterEscape}function b(e){let t,n,r=e.length-4,i=3;if((e[3][1].type===l.V.lineEnding||"space"===e[i][1].type)&&(e[r][1].type===l.V.lineEnding||"space"===e[r][1].type)){for(t=i;++t<r;)if("mathTextData"===e[t][1].type){e[r][1].type="mathTextPadding",e[i][1].type="mathTextPadding",i+=2,r-=2;break}}for(t=i-1,r++;++t<=r;)void 0===n?t!==r&&e[t][1].type!==l.V.lineEnding&&(n=t):(t===r||e[t][1].type===l.V.lineEnding)&&(e[n][1].type="mathTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),r-=t-n-2,t=n+2),n=void 0);return e}function x(e){return e!==i.q.backslash||this.events[this.events.length-1][1].type===l.V.characterEscape}var y=n(52620),w=n(50895),O=n(70229),v=n(91488),j=n(79619),S=n(15758),q=n(33549),k=n(58748),P=n(10295),E=n(51866),F=n(63585),T=n(65994),M=n(84654),_=n(22440);let D=e=>e.startsWith(_.O6)?e:(0,w.n)(e),V=[k.Z,[function(){let e=this.data();function t(t,n){(e[t]?e[t]:e[t]=[]).push(n)}t("micromarkExtensions",{flow:{[i.q.dollarSign]:h,[i.q.backslash]:u},text:{[i.q.dollarSign]:{tokenize:function(e,t,n){let r,a,s=0;return function(t){return e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return r===i.q.dollarSign?(e.consume(r),s++,t):s<2?n(r):(e.exit("mathTextSequence"),u(r))}(t)};function u(h){return h===i.q.eof?n(h):h===i.q.dollarSign?(a=e.enter("mathTextSequence"),r=0,function n(o){return o===i.q.dollarSign?(e.consume(o),r++,n):r===s?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(a.type="mathTextData",c(o))}(h)):h===i.q.space?(e.enter("space"),e.consume(h),e.exit("space"),u):(0,o.Ch)(h)?(e.enter(l.V.lineEnding),e.consume(h),e.exit(l.V.lineEnding),u):(e.enter("mathTextData"),c(h))}function c(t){return t===i.q.eof||t===i.q.space||t===i.q.dollarSign||(0,o.Ch)(t)?(e.exit("mathTextData"),u(t)):(e.consume(t),c)}},resolve:g,previous:m},[i.q.backslash]:[{tokenize:function(e,t,n){let r;let a=[],s=[],u=this;return function(t){return i.q.backslash,f.call(u,u.previous)&&u.previous,e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return(a.join(","),r===i.q.backslash&&0===a.length||r===i.q.leftParenthesis&&1===a.length)?(e.consume(r),a.push(r),t):a.length<2?n(r):(e.exit("mathTextSequence"),c(r))}(t)};function c(u){return u===i.q.eof?n(u):u===i.q.backslash?(r=e.enter("mathTextSequence"),s=[],function n(o){return(a.join(","),o===i.q.backslash&&0===s.length||o===i.q.rightParenthesis&&1===s.length)?(e.consume(o),s.push(o),n):s.length===a.length?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(r.type="mathTextData",h(o))}(u)):u===i.q.space?(e.enter("space"),e.consume(u),e.exit("space"),c):(0,o.Ch)(u)?(e.enter(l.V.lineEnding),e.consume(u),e.exit(l.V.lineEnding),c):(e.enter("mathTextData"),h(u))}function h(t){return t===i.q.eof||t===i.q.space||t===i.q.backslash||(0,o.Ch)(t)?(e.exit("mathTextData"),c(t)):(e.consume(t),h)}},resolve:p,previous:f},{tokenize:function(e,t,n){let r;let a=[],s=[],u=this;return function(t){return i.q.backslash,x.call(u,u.previous)&&u.previous,e.enter("mathText"),e.enter("mathTextSequence"),function t(r){return(a.join(","),r===i.q.backslash&&0===a.length||r===i.q.leftSquareBracket&&1===a.length)?(e.consume(r),a.push(r),t):a.length<2?n(r):(e.exit("mathTextSequence"),c(r))}(t)};function c(u){return u===i.q.eof?n(u):u===i.q.backslash?(r=e.enter("mathTextSequence"),s=[],function n(o){return(a.join(","),o===i.q.backslash&&0===s.length||o===i.q.rightSquareBracket&&1===s.length)?(e.consume(o),s.push(o),n):s.length===a.length?(e.exit("mathTextSequence"),e.exit("mathText"),t(o)):(r.type="mathTextData",h(o))}(u)):u===i.q.space?(e.enter("space"),e.consume(u),e.exit("space"),c):(0,o.Ch)(u)?(e.enter(l.V.lineEnding),e.consume(u),e.exit(l.V.lineEnding),c):(e.enter("mathTextData"),h(u))}function h(t){return t===i.q.eof||t===i.q.space||t===i.q.backslash||(0,o.Ch)(t)?(e.exit("mathTextData"),c(t)):(e.consume(t),h)}},resolve:b,previous:x}]}}),t("fromMarkdownExtensions",(0,r.N)()),t("toMarkdownExtensions",(0,r.O)())},{singleDollarTextMath:!1}],q.Z,()=>e=>{(0,F.Vn)(e,e=>{if(!(0,M.j)(e)||e.name!==T.b)return;let t=e.data??(e.data={}),n=e.attributes?.index;if(null==n)return;t.hName=T.b,t.hProperties={index:n};let r="inline";switch(e.type){case"textDirective":r="inline";break;case"leafDirective":r="block";break;case"containerDirective":r="container"}t.hProperties.displayLayout=r})},P.Iz],C=[[v.Z,{languages:{mathematica:y.Z},detect:!0,subset:["arduino","bash","c","cpp","csharp","css","diff","go","graphql","java","javascript","json","kotlin","latex","less","lua","makefile","makefile","markdown","matlab","mathematica","nginx","objectivec","perl","pgsql","php-template","php","plaintext","python-repl","python","r","ruby","rust","scss","shell","sql","swift","typescript","vbnet","wasm","xml","yaml"],ignoreMissing:!0,aliases:{mathematica:"wolfram"}}],j.Z,[S.Z,{newlines:!0}],[O.Z,{target:"_new",rel:"noopener noreferrer"}],E.b]},84654:function(e,t,n){n.d(t,{j:function(){return r}});function r(e){return("containerDirective"===e.type||"textDirective"===e.type||"leafDirective"===e.type)&&"name"in e}},94206:function(e,t,n){n.d(t,{O$:function(){return r},jF:function(){return a},v3:function(){return i}});class r extends Error{constructor(e){super(e),this.name="WebsocketConnectError"}}class i extends Error{constructor(e){super(e),this.name="TurnError"}}class a extends Error{constructor(e){super(e),this.name="TurnDeltaMessageError"}}},97193:function(e,t,n){n.d(t,{KP:function(){return u},W6:function(){return h},bM:function(){return d},vm:function(){return p},y6:function(){return l}});var r,i,a=n(98601),o=n(68810);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}let l=((r={}).Turn="turn",r.ImagesTab="images_tab",r),u=((i={})[i.FromLeft=-1]="FromLeft",i[i.FromRight=1]="FromRight",i),c={isInternalSettingsModalOpen:!1,isSettingsModalOpen:!1,isDebugModalOpen:!1,isUsageNuxModalOpen:!1,isWelcomePageOpen:!1,focusedImage:void 0},h=(0,o.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e})({},c)),d={isInternalSettingsModalOpen:e=>e.isInternalSettingsModalOpen,isSettingsModalOpen:e=>e.isSettingsModalOpen,isDebugModalOpen:e=>e.isDebugModalOpen,isUsageNuxModalOpen:e=>e.isUsageNuxModalOpen,isWelcomePageOpen:e=>e.isWelcomePageOpen,getFocusedImage:e=>e.focusedImage,isModalOpen:e=>d.isInternalSettingsModalOpen(e)||d.isSettingsModalOpen(e)||d.isDebugModalOpen(e)||d.isUsageNuxModalOpen(e)||d.isWelcomePageOpen(e)||null!=d.getFocusedImage(e)},p={toggleInternalSettingsModalOpen(){h.setState(e=>({isInternalSettingsModalOpen:!e.isInternalSettingsModalOpen}))},setInternalSettingsModalOpen(e){h.setState({isInternalSettingsModalOpen:e})},toggleSettingsModalOpen(){h.setState(e=>({isSettingsModalOpen:!e.isSettingsModalOpen}))},setSettingsModalOpen(e){h.setState({isSettingsModalOpen:e})},toggleDebugModalOpen(){h.setState(e=>({isDebugModalOpen:!e.isDebugModalOpen}))},setDebugModalOpen(e){h.setState({isDebugModalOpen:e})},setFocusedImage(e){h.setState({focusedImage:e})},setUsageNuxModalOpen(e){h.setState({isUsageNuxModalOpen:e})},setWelcomePageOpen(e){h.setState({isWelcomePageOpen:e})}}},12381:function(e,t,n){n.d(t,{HV:function(){return b},LW:function(){return v},P3:function(){return j},m0:function(){return m},nn:function(){return y}});var r=n(98601),i=n(95267),a=n(15539),o=n(94206),s=n(82363),l=n(18939),u=n.n(l),c=n(89678),h=n.n(c),d=n(68810),p=n(69767);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){return y(t=>t.thread?.turns.map(t=>e.reduce((e,n)=>(e[n]=t[n],e),{}))??[],(e,t)=>{if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(!(0,a.X)(e[n],t[n]))return!1;return!0})}function b(){return y(e=>u()(e.thread?.turns.flatMap(e=>e.model_response?.citations)),a.X)}let x={thread:null,error:void 0},y=(0,d.Ue)((0,i.n)(()=>g({},x))),w=h()(()=>{s.U.addError(new o.v3("got updateTurn with no current thread"))},1e3),O=h()(e=>{s.U.addError(new o.v3("turn not found"),{turnIndex:e})},1e3),v={threadId:e=>e.thread?.id??null,turns:e=>e.thread?.turns??[],turnCitations:e=>t=>t.thread?.turns[e].model_response?.citations??[],hasResponse:e=>(0,p.VP)(e.thread?.turns[0]),firstTurn:e=>null!=e.thread?e.thread.turns[0]:void 0,lastTurn:e=>null!=e.thread?e.thread.turns[e.thread.turns.length-1]:void 0,numTurns:e=>e.thread?.turns.length??0,isLastTurnStreaming:e=>{let t=null!=e.thread?e.thread.turns[e.thread.turns.length-1]:void 0;return null!=t&&(0,p.A7)(t)},hasModelResponseText:e=>{let t=e.thread?.turns[0];return t?.model_response?.text!=null},hasFirstTurnError:e=>{let t=e.thread?.turns[0];return!!t&&(0,p.jo)(t)},hasTurnError:e=>e.thread?.turns.some(p.jo)??!1,threadError:e=>e.error,__deprecated_sportsWidget:e=>{let t=e.thread?.turns[0];return t?.sports_widget??null}},j={appendTurn(e,t,n){y.setState(r=>{r.thread?.id!==e&&(n?.(e),r.thread={id:e,turns:[]}),r.thread.turns.push(t)})},updateTurn(e,t){y.setState(n=>{let r=n.thread;if(!r){w();return}let i=r.turns[e];if(!i){O(e);return}t(i)})},clearThread(){y.setState(()=>g({},x))},setError(e){y.setState(t=>{t.error=e})},setThread(e,t){y.setState(n=>{n.thread={id:e,turns:t}})}}},10295:function(e,t,n){n.d(t,{GP:function(){return x},Iz:function(){return y},qD:function(){return O}});var r=n(47313),i=n(84654),a=n(30853),o=n(65994),s=n(95204),l=n(88600),u=n(18939),c=n.n(u),h=n(92379),d=n(62984),p=n(15478),f=n(63585),g=n(97193),m=n(71868),b=n(651);let x="contextList";function y(){return e=>{(0,f.Vn)(e,e=>{(0,i.j)(e)&&e.name===x&&((e.data??(e.data={})).hName=x)})}}let w=p.Z.div`gap-6 border-b pb-4 my-4 context-list text-sm border-token-border-light`;function O(e){let{children:t}=e,n=(0,h.useContext)(r.G),i=Array.isArray(t)?t:c()([t]);if(0===i.length)return null;let[a,...s]=i,l=function(e){if("object"==typeof e&&null!=e&&"props"in e&&e.props.node&&e.props.node.tagName===o.b)return parseInt(e.props.index)}(a);if(null!=l&&null!=n){let e=n?.contentReferences?.[l],t=e?.type==="image_v2",r=e?.type==="optimistic_image_citation";if(t||r)return(0,b.jsxs)(w,{className:"clear-right items-center sm:flex",children:[(0,b.jsxs)("div",{className:"float-right ml-2 flex h-32 w-20 shrink-0 sm:float-none sm:ml-0",children:[t&&(0,b.jsx)(j,{imageRef:e}),r&&(0,b.jsx)(S,{optimisticRef:e})]}),(0,b.jsx)("div",{className:"grow sm:first:*:mt-0",children:s}),(0,b.jsx)("div",{className:"clear-right sm:clear-none"})]})}return(0,b.jsx)(w,{children:i})}let v=p.Z.button`flex w-full items-center justify-center overflow-hidden rounded-lg border-[0.5px] border-token-border-light`;function j(e){let{imageRef:t}=e,n=t.images[0],r=(0,m.Wz)(n,{width:180,height:270}),{isSuccess:i}=(0,m.Fw)(r);return(0,b.jsx)(v,{onClick:()=>{g.vm.setFocusedImage({image:n,source:g.y6.Turn})},children:(0,b.jsx)(l.E.img,{src:r,className:"h-full w-full object-cover",alt:n.title,initial:{opacity:0},animate:i?{opacity:1}:{},whileHover:{scale:1.03,transition:m._F}})})}function S(e){let{optimisticRef:t}=e;return(0,b.jsx)(v,{children:"done"===t.status?(0,b.jsx)(a.u,{label:(0,b.jsx)(d.Z,{id:"8JYwCi",defaultMessage:"Error fetching image"}),children:(0,b.jsx)(s.Z,{className:"h-12 w-12 text-token-text-tertiary"})}):(0,b.jsx)("div",{className:"h-full w-full animate-pulse bg-token-main-surface-tertiary"})})}},69767:function(e,t,n){function r(e){return!!e&&e.model_response?.text!=null&&e.model_response.text.length>0}function i(e){return"fatal_system_error"===e.execution_status}function a(e){return"in_progress"===e.execution_status||null===e.execution_status}n.d(t,{A7:function(){return a},VP:function(){return r},jo:function(){return i}})},71868:function(e,t,n){n.d(t,{ub:function(){return _},wU:function(){return k},_F:function(){return M},Fw:function(){return P},i:function(){return S},o:function(){return v},Wz:function(){return T},HQ:function(){return q}});var r=n(98601),i=n(49166),a=n(84760),o=n(88600),s=n(18939),l=n.n(s),u=n(23763),c=n.n(u),h=n(92379),d=n(81014),p=n(12381),f=n(69767),g=n(65925),m=n.n(g);class b{constructor(){(0,r.Z)(this,"queue",[]),(0,r.Z)(this,"attempted",new Set),(0,r.Z)(this,"isProcessing",!1)}enqueue(e){this.queue.push(e),this._processQueue()}async _processQueue(){if(!this.isProcessing){for(this.isProcessing=!0;this.queue.length>0;)try{let e=this.queue.shift();if(!e)continue;await this._preload(e)}catch(e){}this.isProcessing=!1}}_preload(e){return new Promise(t=>{this.attempted.has(e)&&t();let n=new Image;n.onload=()=>{this.attempted.add(e),t()},n.onerror=()=>{this.attempted.add(e),t()},n.src=e})}}let x=new b;var y=n(651);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function v(){let{imageResults:e}=S();!function(e){let{enabled:t=!0}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(e){let t=(0,h.useRef)(e);return m()(t.current,e)||(t.current=e),t.current}(e);(0,h.useEffect)(()=>{if(!t||"connection"in navigator&&"cellular"===navigator.connection.type)return;let e=setTimeout(()=>{n.forEach(e=>{e&&x.enqueue(e)})},1e3);return()=>{clearTimeout(e)}},[t,n])}([...e.map(e=>F(e))])}let j=c()(function(){return(0,d.mH)(...arguments)},5e3);function S(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=(0,p.m0)(["image_results","image_try_hard_status","execution_status"]),n=(0,p.nn)(p.LW.threadId),r=l()(t.toReversed().flatMap(e=>e.image_results?.entries)).map(e=>O(O({},e),{},{thumbnail_url:e.thumbnail_url.replace(/^http:\/\//,"https://"),content_url:e.content_url.replace(/^http:\/\//,"https://")})),i=(0,p.nn)(p.LW.hasModelResponseText),a=t.some(e=>(0,f.jo)(e)),o=0===r.length&&!i;return null!=n&&e&&!o&&0===r.length&&t[0]?.image_try_hard_status==="not_attempted"&&(j(n,0),o=!0),e&&t[0]?.image_try_hard_status==="in_progress"&&(o=!0),{imageResults:r,isLoading:o,isErrored:0===r.length&&a}}function q(){let e=(0,p.HV)(),t=(0,p.nn)(p.LW.hasTurnError),n=(0,p.nn)(p.LW.hasModelResponseText),r=l()(e.flatMap(e=>"image_v2"===e.type?e.images:[]));return{imageResults:r,isLoading:0===r.length&&!n,isErrored:0===r.length&&t}}function k(e){return(0,i.C)({queryKey:["downloadImage",{imageUrl:e}],queryFn:()=>new Promise((t,n)=>{let r=new Image;r.onload=()=>{t({width:r.width,height:r.height})},r.onerror=()=>{n()},r.src=e}),enabled:null!=e})}function P(e){return(0,a.a)(k(e))}let E={width:474,square:!0};function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;if(null==e)return;let n=new URL(e.thumbnail_url);if(-1===n.hostname.indexOf(".bing."))return e.thumbnail_url;let r=Math.min(t.width,e.content_size.width),i=t.height??Math.floor(r*e.content_size.height/e.content_size.width);if(n.searchParams.delete("pid"),t.square){let e=Math.min(r,i);n.searchParams.set("w",e.toString()),n.searchParams.set("h",e.toString())}else n.searchParams.set("w",r.toString()),n.searchParams.set("h",i.toString());return n.searchParams.set("c","7"),n.toString()}function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:E;return(0,h.useMemo)(()=>F(e,t),[e,t])}let M={type:"spring",stiffness:700,damping:82};function _(e){let{children:t,className:n}=e;return(0,y.jsx)(o.E.div,{animate:{opacity:1},initial:{width:"100%",height:"100%",translateX:0,translateY:0,opacity:0},whileHover:{width:"103%",height:"103%",translateX:"-1.5%",translateY:"-1.5%"},transition:M,className:n,children:t})}}}]);
//# sourceMappingURL=9027.fe0993352d64ae18.js.map