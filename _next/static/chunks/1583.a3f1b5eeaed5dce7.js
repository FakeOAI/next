"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1583],{51583:function(t,e,n){n.r(e),n.d(e,{FramesViewer:function(){return i}});var a=n(97537),l=n(47563),c=n(26694),o=n(92379),s=n(651);function r(t){let{children:e,position:n,onClick:a}=t;return(0,s.jsx)("button",{onClick:a,className:"absolute ".concat("left"===n?"left-2":"right-2"," top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md"),"aria-label":"left"===n?"Previous":"Next",children:e})}function i(t){let{frames:e,setFrameSrc:n}=t,{0:i,1:u}=(0,o.useState)(0),{0:h,1:d}=(0,o.useState)(!1),f=(0,o.useCallback)((t,n)=>{u((i+e.length+n)%e.length),d(!1),t.stopPropagation()},[e.length,i]),g=(0,o.useCallback)(t=>{t.stopPropagation(),n(e[i].src)},[e,i,n]),x=(0,o.useCallback)(()=>{d(!0)},[]);return 0===e.length?null:(0,s.jsxs)("div",{className:"relative flex",children:[(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("div",{className:"absolute flex h-full w-full items-center justify-center bg-gray-50 ".concat(h?"hidden":"block"),children:(0,s.jsx)(a.Z,{})}),(0,s.jsx)("img",{onLoad:x,onClick:g,src:e[i].src,alt:"Image ".concat(i)}),(0,s.jsx)("p",{className:"absolute bottom-0 left-1/2 -translate-x-1/2 rounded-sm bg-black bg-opacity-50 p-0.5 font-mono text-sm text-white ".concat(h?"":"hidden"),children:(0,c.L)(Math.floor(e[i].timestamp))})]}),e.length>1&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r,{position:"left",onClick:t=>f(t,-1),children:(0,s.jsx)(l.Y4O,{})}),(0,s.jsx)(r,{position:"right",onClick:t=>f(t,1),children:(0,s.jsx)(l.LZ3,{})})]})]})}},26694:function(t,e,n){n.d(e,{L:function(){return a}});function a(t){let e=Math.floor(t/60),n=Math.floor(e/60),a=String(Math.floor(t)%60).padStart(2,"0"),l=String(e%60).padStart(2,"0");return 0===n?"".concat(l,":").concat(a):"".concat(n,":").concat(l,":").concat(a)}}}]);
//# sourceMappingURL=1583.a3f1b5eeaed5dce7.js.map