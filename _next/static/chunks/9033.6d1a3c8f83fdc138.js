"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9033,6690,6113],{8735:function(e,t,r){r.d(t,{g:function(){return j}});var n=r(94521),o=r(17379),i=r(47349),a=r(19841),c=r(92379),l=r(73746),s=r(66246),u=r(73965),f=r(651);let d=["children"],p=["children","className"];function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function j(e){let{options:t,value:r,onValueChange:n,disabled:o,defaultValue:i}=e;return(0,f.jsxs)(x.Root,{value:r,onValueChange:n,disabled:o,defaultValue:i,children:[(0,f.jsxs)(x.Trigger,{children:[(0,f.jsx)(x.Value,{}),(0,f.jsx)(x.Icon,{})]}),(0,f.jsx)(x.Portal,{children:(0,f.jsx)(x.Content,{children:t.map(e=>(0,f.jsx)(x.Item,{value:e.value,children:e.label},e.value))})})]})}let x={Root:i.fC,Trigger:function(e){return(0,f.jsx)(u.J7,m({$as:i.xz},e))},Value:i.B4,Icon:function(){return(0,f.jsx)(i.JO,{children:(0,f.jsx)(s.Tg4,{className:"icon-sm"})})},Portal:i.h_,Content:function(e){let{children:t,className:r}=e,n=(0,o.Z)(e,p);return(0,f.jsxs)(u.w5,m(m({$as:i.VY,side:"bottom",sideOffset:4,position:"popper",className:(0,a.default)("min-w-[220px] overflow-auto",r)},n),{},{children:[(0,f.jsx)(i.u_,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,f.jsx)(s.r0F,{className:"icon-sm"})}),(0,f.jsx)(i.l_,{children:t}),(0,f.jsx)(i.$G,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,f.jsx)(s.Tg4,{className:"icon-sm"})})]}))},Item:c.forwardRef(function(e,t){let{children:r}=e,n=(0,o.Z)(e,d),a=(0,l.Qr)(),c=a?u.yy:u.aF;return(0,f.jsxs)(c,m(m({$as:i.ck,ref:t,className:"flex justify-between"},n),{},{children:[(0,f.jsx)(i.eT,{children:r}),(0,f.jsx)(i.wU,{className:"",children:a?(0,f.jsx)(s.kvR,{className:"icon-sm"}):(0,f.jsx)(s.pUt,{className:"icon-sm"})})]}))}),ItemText:i.eT,ItemIndicator:i.wU,Separator:function(){return(0,f.jsx)(i.Z0,{className:"my-1.5 h-[1px] bg-token-border-light juice:mx-5 juice:my-1"})},Label:function(e){let{children:t}=e;return(0,f.jsx)(i.__,{className:"m-1.5 p-2.5 text-xs font-semibold text-token-text-secondary juice:mx-2 juice:my-0 juice:px-2",children:t})},Group:i.ZA};t.Z=x},69482:function(e,t,r){var n=r(94521),o=r(17379),i=r(19841),a=r(92379),c=r(651);let l=["children"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let f=(0,a.createContext)({rootBordered:!1}),d=(0,a.forwardRef)(function(e,t){let{children:r,disabled:n=!1,onClick:o,className:a}=e;return(0,c.jsx)("tr",u(u({ref:t},n?{"data-disabled":!0}:{}),{},{className:(0,i.default)(n?"pointer-events-none":"",a),onClick:o,children:r}))});t.Z={Root:function(e){let{children:t,fixed:r=!1,className:n,size:o="normal",bordered:l=!1}=e,s=(0,a.useRef)(null),u=(0,a.useRef)(null),{0:d,1:p}=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=s.current,t=u.current;if(e&&t){let r=new ResizeObserver(()=>{p(t.scrollHeight>e.clientHeight)});return r.observe(e),()=>r.disconnect()}},[]),(0,c.jsx)(f.Provider,{value:{rootBordered:l},children:(0,c.jsx)("div",{className:(0,i.default)("overflow-y-auto text-token-text-primary",l&&"rounded-lg border border-token-border-light","normal"===o?"text-base":"text-sm",d&&"pr-1",n),ref:s,children:(0,c.jsx)("table",{className:(0,i.default)("w-full border-separate border-spacing-0",r&&"table-fixed"),ref:u,children:t})})})},Header:function(e){let{children:t}=e;return(0,c.jsx)("thead",{children:(0,c.jsx)("tr",{children:t})})},HeaderCell:function(e){let{textAlign:t="left",children:r,className:n=""}=e,{rootBordered:o}=(0,a.useContext)(f);return(0,c.jsx)("th",{className:(0,i.default)("text-token sticky top-0 z-10 border-b-[0.5px] border-token-border-medium bg-token-main-surface-primary py-2 font-semibold",o?"px-3":"pr-4 last:pr-0","left"===t?"text-left":"right"===t?"text-right":"text-center",n),children:r})},Body:function(e){let{children:t}=e,r=(0,o.Z)(e,l);return(0,c.jsx)("tbody",u(u({},r),{},{children:t}))},Row:d,Cell:function(e){let{textAlign:t="left",children:r,className:n,colSpan:o}=e,{rootBordered:l}=(0,a.useContext)(f);return(0,c.jsx)("td",{className:(0,i.default)("border-b-[0.5px] border-token-border-medium align-top",l?"px-3":"pr-4 last:pr-0 [tr:last-child_&]:border-b-0",t&&"text-"+t,n),colSpan:o,children:(0,c.jsx)("div",{className:(0,i.default)("flex min-h-[40px] items-center [tr[data-disabled=true]_&]:opacity-50","right"===t&&"justify-end","center"===t&&"justify-center"),children:r})})},Actions:function(e){let{children:t}=e;return(0,c.jsx)("div",{className:"text-md flex items-center justify-end gap-2",children:t})}}},26113:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(94521),o=r(98506),i=r(76458),a=r(65784),c=r(54374),l=r(651);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){let{json:t,jsonViewProps:r}=e,u=(0,o.Gv)();return(0,l.jsx)(i.ZP,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({enableClipboard:!0,displayDataTypes:!1,displayObjectSize:!1,value:t,style:u?a.$:c.W,shortenTextAfterLength:120},r))}},84494:function(e,t,r){r.d(t,{f:function(){return i}});var n=r(61888),o=r(92379);function i(e){let{0:t,1:r}=(0,o.useState)(null);return"function"==typeof e?[t,e=>{e&&r(e)}]:[e.current,n.noop]}},70529:function(e,t,r){var n=r(92379),o=r(26123),i=function(e){var t=(0,o.Z)(),r=t.formatPlural,i=t.textComponent,a=e.value,c=e.other,l=e.children,s=r(a,e),u=e[s]||c;return"function"==typeof l?l(u):i?n.createElement(i,null,u):u};i.displayName="FormattedPlural",t.Z=i},5741:function(e,t,r){r.d(t,{Z:function(){return b}});var n=r(24119),o=r(92379),i=r(78255),a=r(44928),c=r(18449),l=r(42726),s=r(62867),u=r(15269),f=["allowCreateWhileLoading","createOptionPosition","formatCreateLabel","isValidNewOption","getNewOptionData","onCreateOption","options","onChange"],d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,r=arguments.length>2?arguments[2]:void 0,n=String(e).toLowerCase(),o=String(r.getOptionValue(t)).toLowerCase(),i=String(r.getOptionLabel(t)).toLowerCase();return o===n||i===n},p={formatCreateLabel:function(e){return'Create "'.concat(e,'"')},isValidNewOption:function(e,t,r,n){return!(!e||t.some(function(t){return d(e,t,n)})||r.some(function(t){return d(e,t,n)}))},getNewOptionData:function(e,t){return{label:t,value:e,__isNew__:!0}}};r(95295),r(82845);var b=(0,o.forwardRef)(function(e,t){var r,d,b,m,j,x,O,h,g,y,v,w,N,P,C,k,Z,D,L,S,_,V,E,R,T,I,H,A,$=(b=void 0!==(d=(r=(0,a.u)(e)).allowCreateWhileLoading)&&d,j=void 0===(m=r.createOptionPosition)?"last":m,O=void 0===(x=r.formatCreateLabel)?p.formatCreateLabel:x,g=void 0===(h=r.isValidNewOption)?p.isValidNewOption:h,v=void 0===(y=r.getNewOptionData)?p.getNewOptionData:y,w=r.onCreateOption,P=void 0===(N=r.options)?[]:N,C=r.onChange,D=void 0===(Z=(k=(0,s.Z)(r,f)).getOptionValue)?i.g:Z,S=void 0===(L=k.getOptionLabel)?i.b:L,_=k.inputValue,V=k.isLoading,E=k.isMulti,R=k.value,T=k.name,I=(0,o.useMemo)(function(){return g(_,(0,u.H)(R),P,{getOptionValue:D,getOptionLabel:S})?v(_,O(_)):void 0},[O,v,S,D,_,g,P,R]),H=(0,o.useMemo)(function(){return(b||!V)&&I?"first"===j?[I].concat((0,l.Z)(P)):[].concat((0,l.Z)(P),[I]):P},[b,j,V,I,P]),A=(0,o.useCallback)(function(e,t){if("select-option"!==t.action)return C(e,t);var r=Array.isArray(e)?e:[e];if(r[r.length-1]===I){if(w)w(_);else{var n=v(_,_);C((0,u.D)(E,[].concat((0,l.Z)((0,u.H)(R)),[n]),n),{action:"create-option",name:T,option:n})}return}C(e,t)},[v,_,E,T,I,w,C,R]),(0,c.Z)((0,c.Z)({},k),{},{options:H,onChange:A}));return o.createElement(i.S,(0,n.Z)({ref:t},$))})}}]);
//# sourceMappingURL=9033.6d1a3c8f83fdc138.js.map