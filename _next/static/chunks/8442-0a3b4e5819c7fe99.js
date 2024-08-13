"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8442],{6440:function(e,r,t){var n,o=t(2346),a=t(98601),i=t(19841),s=t(92379),c=t(15478),l=t(651);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach(function(r){(0,a.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}r.Z=s.forwardRef(function(e,r){let{name:t,placeholder:n,type:o,list:a,displayName:c,onChange:d,onFocus:b,onBlur:p,value:x,saveOnBlur:m,icon:g,onInputIconClick:h,className:y,autoComplete:j,autoFocus:k,onPressEnter:v,disabled:w,maxLength:O,color:N="tertiary"}=e,{0:P,1:Z}=(0,s.useState)(x),C=(0,s.useCallback)(e=>{null==p||p(e),m&&Z(e.target.value)},[p,m]),D=(0,s.useCallback)(e=>{null==d||d(e),m&&Z(e.target.value)},[d,m]),R=(0,s.useCallback)(e=>{"Enter"===e.key&&v&&(e.preventDefault(),v(P))},[v,P]);(0,s.useEffect)(()=>{Z(x)},[x]);let E=u(u({},m?{}:{value:x}),m?{value:P}:{});return(0,l.jsxs)("div",{className:(0,i.default)("rounded-md border shadow-none","neutral"===N&&"border-transparent px-3 py-2 focus-within:border-green-500 focus-within:bg-token-main-surface-tertiary focus-within:ring-1 focus-within:ring-transparent hover:bg-token-main-surface-tertiary","tertiary"===N&&"border-token-border-medium px-3 py-2 focus-within:border-token-border-xheavy focus-within:ring-1 focus-within:ring-token-text-secondary","search"===N&&"rounded-xl border-token-border-medium bg-token-main-surface-primary p-4 focus-within:border-token-border-xheavy focus-within:ring-0 dark:border-token-border-medium dark:focus-within:border-token-border-xheavy dark:focus-within:ring-0",y),children:[(0,l.jsx)("label",{htmlFor:t,className:"block text-xs font-semibold text-token-text-primary",children:c}),(0,l.jsxs)("div",{className:(0,i.default)(c&&"mt-1","relative"),children:[(0,l.jsx)("input",u({ref:r,type:o,name:t,id:t,list:a,className:(0,i.default)("block w-full border-0 p-0 placeholder-gray-500 shadow-none outline-none focus-within:shadow-none focus-within:outline-none focus-within:ring-0 focus:border-none focus:ring-0 sm:text-sm",null!=g&&"pr-6","neutral"===N||"search"===N?"bg-transparent":"bg-token-main-surface-primary text-token-text-primary"),placeholder:n,onBlur:C,onFocus:b,onChange:D,onKeyDown:R,autoComplete:j,autoFocus:k,disabled:w,maxLength:O},E)),null!=g&&(0,l.jsx)(f,{onClick:h,children:(0,l.jsx)(g,{className:"icon-sm"})})]})]})});let f=c.Z.button(n||(n=(0,o.Z)(["absolute right-0 top-1/2 -translate-y-1/2"])))},94668:function(e,r,t){t.d(r,{Z:function(){return d}});var n,o=t(2346),a=t(19841),i=t(92379),s=t(15478),c=t(77748),l=t(651);function d(e){let r,{type:t="info",children:n,isDismissible:o=!1,onDismiss:s,className:d,isElevated:f=!1}=e,{0:b,1:p}=(0,i.useState)(!1);return b?null:("none"!==t&&(r=c.szr),(0,l.jsxs)(u,{$type:t,className:(0,a.default)("flex w-full items-start gap-3 rounded-2xl border text-sm","warning"===t||"danger"===t?"bg-opacity-5":"bg-opacity-10",o?"py-2.5 pl-3 pr-2 md:py-3 md:pl-4 md:pr-3":"px-3 py-2.5 md:p-4",f&&"shadow-xxs",d),children:[r&&(0,l.jsx)(r,{className:(0,a.default)("icon-lg shrink-0",o&&"mt-[2px] md:mt-px",("info"===t||"none"===t)&&"text-token-text-secondary")}),(0,l.jsx)("div",{className:(0,a.default)("grow",o?"pt-[4px] md:pt-[3px]":"pt-[2px]",!r&&"pl-1"),children:n}),o&&(0,l.jsx)("button",{onClick:()=>{p(!0),null==s||s()},className:(0,a.default)("flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-transparent text-token-text-primary",("info"===t||"none"===t)&&"hover:bg-token-main-surface-secondary","danger"===t&&"hover:bg-token-surface-error/10","warning"===t&&"hover:bg-orange-400/10"),children:(0,l.jsx)(c.tPq,{className:"icon-md"})})]}))}let u=s.Z.div(n||(n=(0,o.Z)(["\n",""])),e=>{let{$type:r}=e;switch(r){case"danger":return"text-token-text-error border-token-surface-error/15 bg-token-surface-error bg-opacity-0";case"warning":return"text-orange-600 bg-orange-400 bg-opacity-0 border-orange-400/15";case"success":return"text-green-500 border-green-500 bg-green-500 bg-opacity-0";default:return"text-token-text-primary border-token-border-light bg-token-main-surface-primary bg-opacity-0"}})},73062:function(e,r,t){t.d(r,{g:function(){return x}});var n=t(98601),o=t(52088),a=t(54198),i=t(19841),s=t(92379),c=t(77748),l=t(50863),d=t(651);let u=["children"],f=["children","className"];function b(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?b(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}function x(e){let{options:r,value:t,onValueChange:n,disabled:o,defaultValue:a,placeholder:i}=e;return(0,d.jsxs)(m.Root,{value:t,onValueChange:n,disabled:o,defaultValue:a,children:[(0,d.jsxs)(m.Trigger,{children:[(0,d.jsx)(m.Value,{placeholder:i}),(0,d.jsx)(m.Icon,{})]}),(0,d.jsx)(m.Portal,{children:(0,d.jsx)(m.Content,{children:r.map(e=>(0,d.jsx)(m.Item,{value:e.value,children:e.label},e.value))})})]})}let m={Root:a.fC,Trigger:function(e){return(0,d.jsx)(l.J7,p({$as:a.xz},e))},Value:a.B4,Icon:function(){return(0,d.jsx)(a.JO,{children:(0,d.jsx)(c.Tg4,{className:"icon-sm"})})},Portal:a.h_,Content:function(e){let{children:r,className:t}=e,n=(0,o.Z)(e,f);return(0,d.jsxs)(l.w5,p(p({$as:a.VY,side:"bottom",sideOffset:4,position:"popper",className:(0,i.default)("min-w-[220px] overflow-auto",t)},n),{},{children:[(0,d.jsx)(a.u_,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(c.r0F,{className:"icon-sm"})}),(0,d.jsx)(a.l_,{children:r}),(0,d.jsx)(a.$G,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,d.jsx)(c.Tg4,{className:"icon-sm"})})]}))},Item:s.forwardRef(function(e,r){let{children:t}=e,n=(0,o.Z)(e,u);return(0,d.jsxs)(l.gG,p(p({$as:a.ck,ref:r,className:"flex justify-between"},n),{},{children:[(0,d.jsx)(a.eT,{children:t}),(0,d.jsx)(a.wU,{className:"",children:(0,d.jsx)(c.kvR,{className:"icon-sm"})})]}))}),ItemText:a.eT,ItemIndicator:a.wU,Separator:function(){return(0,d.jsx)(a.Z0,{className:"mx-5 my-1 h-px bg-token-border-light"})},Label:function(e){let{children:r}=e;return(0,d.jsx)(a.__,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:r})},Group:a.ZA};r.Z=m},36792:function(e,r,t){var n=t(98601),o=t(52088),a=t(19841),i=t(92379),s=t(651);let c=["children"];function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach(function(r){(0,n.Z)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}let u=(0,i.createContext)({rootBordered:!1}),f=(0,i.forwardRef)(function(e,r){let{children:t,disabled:n=!1,onClick:o,className:i}=e;return(0,s.jsx)("tr",d(d({ref:r},n?{"data-disabled":!0}:{}),{},{className:(0,a.default)(n?"pointer-events-none":"",i),onClick:o,children:t}))});r.Z={Root:function(e){let{children:r,fixed:t=!1,className:n,size:o="normal",bordered:c=!1}=e,l=(0,i.useRef)(null),d=(0,i.useRef)(null),{0:f,1:b}=(0,i.useState)(!1);return(0,i.useEffect)(()=>{let e=l.current,r=d.current;if(e&&r){let t=new ResizeObserver(()=>{b(r.scrollHeight>e.clientHeight)});return t.observe(e),()=>t.disconnect()}},[]),(0,s.jsx)(u.Provider,{value:{rootBordered:c},children:(0,s.jsx)("div",{className:(0,a.default)("overflow-y-auto text-token-text-primary",c&&"rounded-lg border border-token-border-light","normal"===o?"text-base":"text-sm",f&&"pr-1",n),ref:l,children:(0,s.jsx)("table",{className:(0,a.default)("w-full border-separate border-spacing-0",t&&"table-fixed"),ref:d,children:r})})})},Header:function(e){let{children:r}=e;return(0,s.jsx)("thead",{children:(0,s.jsx)("tr",{children:r})})},HeaderCell:function(e){let{textAlign:r="left",children:t,className:n=""}=e,{rootBordered:o}=(0,i.useContext)(u);return(0,s.jsx)("th",{className:(0,a.default)("text-token sticky top-0 z-10 border-b-[0.5px] border-token-border-medium bg-token-main-surface-primary py-2 font-semibold",o?"px-3":"pr-4 last:pr-0","left"===r?"text-left":"right"===r?"text-right":"text-center",n),children:t})},Body:function(e){let{children:r}=e,t=(0,o.Z)(e,c);return(0,s.jsx)("tbody",d(d({},t),{},{children:r}))},Row:f,Cell:function(e){let{textAlign:r="left",children:t,className:n,colSpan:o}=e,{rootBordered:c}=(0,i.useContext)(u);return(0,s.jsx)("td",{className:(0,a.default)("border-b-[0.5px] border-token-border-medium align-top",c?"px-3":"pr-4 last:pr-0 [tr:last-child_&]:border-b-0",r&&"text-"+r,n),colSpan:o,children:(0,s.jsx)("div",{className:(0,a.default)("flex min-h-[40px] items-center [tr[data-disabled=true]_&]:opacity-50","right"===r&&"justify-end","center"===r&&"justify-center"),children:t})})},Actions:function(e){let{children:r}=e;return(0,s.jsx)("div",{className:"text-md flex items-center justify-end gap-2",children:r})}}},50863:function(e,r,t){t.d(r,{J7:function(){return d},M4:function(){return p},aF:function(){return u},gG:function(){return f},w5:function(){return b}});var n,o,a,i,s,c=t(2346),l=t(15478);let d=l.Z.button(n||(n=(0,c.Z)(["\ntext-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary\nfocus-visible:bg-token-main-surface-secondary\nradix-state-active:text-token-text-secondary\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent\n"]))),u=l.Z.div(o||(o=(0,c.Z)(["flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative"]))),f=(0,l.Z)(u)(a||(a=(0,c.Z)(["","\nhover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5]\nradix-state-open:bg-[#f5f5f5]\ndark:hover:bg-token-main-surface-secondary\ndark:focus-visible:bg-token-main-surface-secondary\nrounded-md my-0 px-3 mx-2\ndark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"])),e=>e.spoofHovered?"bg-[#f5f5f5]":""),b=l.Z.div(i||(i=(0,c.Z)(["max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2"]))),p=l.Z.div(s||(s=(0,c.Z)(["popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl"])))}}]);
//# sourceMappingURL=8442-0a3b4e5819c7fe99.js.map