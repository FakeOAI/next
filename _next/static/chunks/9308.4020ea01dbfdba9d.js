"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9308],{95204:function(e,t,r){var n,o=r(92379);function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(null,arguments)}t.Z=e=>o.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",viewBox:"0 0 34 34"},e),n||(n=o.createElement("g",{id:"icon / robot-sad"},o.createElement("path",{id:"Rectangle 49961",stroke:"currentColor",strokeWidth:2.833,d:"M4.959 9.917a2.833 2.833 0 0 1 2.833-2.834h18.417a2.833 2.833 0 0 1 2.833 2.834V21.25a5.667 5.667 0 0 1-5.667 5.667h-12.75A5.667 5.667 0 0 1 4.96 21.25z"}),o.createElement("circle",{id:"Ellipse 32520",cx:12.041,cy:14.167,r:2.125,fill:"currentColor"}),o.createElement("circle",{id:"Ellipse 32521",cx:21.959,cy:14.167,r:2.125,fill:"currentColor"}),o.createElement("path",{id:"Vector 2380",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M17 7.083V4.25"}),o.createElement("path",{id:"Vector 2381",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M4.958 14.167c-.782 0-1.416.634-1.416 1.416V17c0 .782.634 1.417 1.416 1.417v0"}),o.createElement("path",{id:"Vector 2382",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M29.042 14.167c.782 0 1.416.634 1.416 1.416V17c0 .782-.634 1.417-1.416 1.417v0"}),o.createElement("path",{id:"Vector 2386",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.833,d:"M19.834 21.158c-1.964-.822-3.703-.822-5.667 0"}))))},87381:function(e,t,r){r.r(t),r.d(t,{__N_SSP:function(){return a},default:function(){return s},sandboxReadyPhrase:function(){return i}});var n=r(92379),o=r(651),a=!0;let i="sandbox-ready";function s(){let{0:e,1:t}=(0,n.useState)(""),r=(0,n.useCallback)(e=>{t(e.data)},[t]);return(0,n.useEffect)(()=>{globalThis?.window?.parent==globalThis?.window&&(location.href="/")},[]),(0,n.useEffect)(()=>{let e=new MessageChannel;return window.parent.postMessage(i,"https://chatgpt.com",[e.port2]),e.port1.onmessage=r,()=>void(e.port1.onmessage=null)},[r]),(0,o.jsx)("iframe",{srcDoc:e,sandbox:"allow-scripts",style:{position:"fixed",top:0,left:0,width:"100vh",height:"100vw",border:0}})}},84513:function(e,t,r){r.d(t,{a:function(){return i}});var n=r(87381),o=r(92379),a=r(651);let i=(0,o.memo)(function(e){let t=(0,o.useRef)(null),{0:r,1:i}=(0,o.useState)(null),s=(0,o.useCallback)(e=>{e.source===t?.current?.contentWindow&&e.data===n.sandboxReadyPhrase&&i(e.ports[0])},[]);return(0,o.useEffect)(()=>(window.addEventListener("message",s),()=>window.removeEventListener("message",s)),[s]),(0,o.useEffect)(()=>{r&&void 0!==e.srcDoc&&r.postMessage(e.srcDoc)},[r,e.srcDoc]),(0,a.jsx)("iframe",{className:e.className,src:"/sandbox",ref:t})})},7243:function(e,t,r){r.d(t,{HK:function(){return f},Lw:function(){return m},l$:function(){return d}});var n=r(98601);r(39696);var o=r(19841),a=r(88600),i=r(92379),s=r(15478),c=r(651);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function d(e){let{lines:t=1,variance:r=0,size:n="base",width:s=50,widthVariance:l=50,className:u}=e,{0:d}=(0,i.useState)(Array.from({length:t+Math.random()*(r??0)},()=>s+Math.random()*l)),f="";switch(n){case"sm":f="h-3 mb-2 mt-0.5";break;case"base":f="h-4 my-2";break;case"lg":f="h-5 my-2"}return(0,c.jsx)(c.Fragment,{children:d.map((e,t)=>(0,c.jsx)("div",{className:(0,o.default)("relative w-full overflow-hidden rounded-md bg-token-sidebar-surface-secondary",f,u),style:{width:`${e}%`},children:(0,c.jsx)(a.E.div,{className:"absolute left-0 top-0 h-full w-full rotate-45 bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-50 dark:via-white/5",animate:{x:["-100%","100%"],opacity:[1,0,1],transition:{repeat:1/0,repeatType:"loop",duration:1.5+t}}})},t))})}function f(e){let{lines:t=1,indexOffset:r=0,variance:n=0,width:a=50,widthVariance:s=50,gapFrequency:l=0,scaleUpAnimation:u,className:d}=e,f=(0,i.useMemo)(()=>Array.from({length:t+Math.random()*(n??0)},()=>a+Math.random()*s),[t,n,a,s]);return(0,c.jsx)(p,{className:d,children:f.map((e,t)=>(0,c.jsx)(m,{index:t+r,width:e,className:(0,o.default)(l>0&&(t+1)%l==0&&"mb-snc-1"),customAnimation:u?{initial:{scaleX:u.initialScaleX},animate:{scaleX:1},transition:{scaleX:{duration:u.duration,ease:"easeInOut",delay:.07*t}}}:void 0},t))})}let p=s.Z.div`flex flex-col items-start gap-2`;function m(e){let{index:t,width:r,className:n,customAnimation:i}=e,{initial:s,animate:l,transition:d}=i??{initial:{},animate:{},transition:{}};return(0,c.jsx)(a.E.div,{className:(0,o.default)("h-5 origin-left rounded-md bg-token-border-light dark:bg-white/10",n),style:{width:`${r}%`},initial:u({opacity:1},s),animate:u({opacity:[1,.4]},l),transition:u({opacity:{repeat:1/0,repeatType:"reverse",duration:.85,ease:"easeInOut",delay:.07*t}},d)})}},51942:function(e,t,r){r.d(t,{F:function(){return m}});var n=r(16757),o=r(27742),a=r(74301),i=r(67437),s=r(92745),c=r(79857),l=r(38924),u=r(97834),d=r(52978),f=r(91530),p=r.n(f);function m(e){let t=(0,i.j8)(),r=(0,o.W)(e),f=(0,i.Bv)(e)??t.id,m=(0,a.Z)(e,void 0,p());return async function(t){let o=s.tQ.getThreadCurrentLeafId(e),a=`${o}-nextPrompt`;s.tQ.updateTree(e,e=>{e.addNode(a," ",o,n.uU.User)});let i=performance.now(),p=await (0,u.rS)(),[h,g,b]=await Promise.all([c.ZP.getEnforcementToken(p),d.Z.getEnforcementToken(p),l.Z.getEnforcementToken(p)]);m({model:f,completionType:n.Os.Next,parentNodeId:a,metadata:{eventSource:"mouse"},completionMetadata:{conversationMode:r},chatReq:p,arkoseToken:h??null,turnstileToken:g??null,proofToken:b??null,preflightTime:performance.now()-i,appendMessages:t})}}}}]);
//# sourceMappingURL=9308.4020ea01dbfdba9d.js.map