(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6497],{44140:function(e,t,r){var n=r(96581),a=r(49912);e.exports=function e(t,r,o,i,c){var s=-1,l=t.length;for(o||(o=a),c||(c=[]);++s<l;){var u=t[s];r>0&&o(u)?r>1?e(u,r-1,o,i,c):n(c,u):i||(c[c.length]=u)}return c}},49912:function(e,t,r){var n=r(66293),a=r(43735),o=r(2428),i=n?n.isConcatSpreadable:void 0;e.exports=function(e){return o(e)||a(e)||!!(i&&e&&e[i])}},54741:function(e,t,r){var n=r(44140),a=1/0;e.exports=function(e){return(null==e?0:e.length)?n(e,a):[]}},92609:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(98601),a=r(52088),o=r(19841),i=r(651);let c=["className","openNewTab","type"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(e){let{className:t,openNewTab:r=!1,type:l="primary"}=e,u=(0,a.Z)(e,c);return(0,i.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({rel:"noreferrer",className:(0,o.default)("cursor-pointer font-normal underline","primary"===l&&"text-green-600",t),target:r?"_blank":"_self"},u))}},16779:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(77420),a=r(19841),o=r(92379),i=r(13490),c=r(651);function s(e){let{onChange:t,enabled:r,label:s,disabled:l,withLockIcon:u=!1,lockIconOverride:d=null,size:f="normal",id:p}=e,b=(0,o.useCallback)(()=>{t(!r)},[r,t]);return(0,c.jsx)(n.fC,{id:p,checked:r,disabled:l,onCheckedChange:b,"aria-label":s,className:(0,a.default)("focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-token-text-secondary focus-visible:ring-offset-2 focus-visible:radix-state-checked:ring-black focus-visible:dark:ring-token-main-surface-primary focus-visible:dark:radix-state-checked:ring-green-600",l?"cursor-not-allowed opacity-50":"cursor-pointer","bg-gray-200 radix-state-checked:bg-black dark:border dark:border-token-border-medium dark:bg-transparent","relative shrink-0 rounded-full dark:radix-state-checked:border-green-600 dark:radix-state-checked:bg-green-600","normal"===f?"h-[20px] w-[32px]":"h-[19px] w-[30px]"),children:(0,c.jsx)(n.bU,{className:(0,a.default)("flex items-center justify-center rounded-full","transition-transform duration-100 will-change-transform ltr:translate-x-0.5 rtl:-translate-x-0.5","bg-white","normal"===f?"h-[16px] w-[16px] ltr:radix-state-checked:translate-x-[14px] rtl:radix-state-checked:translate-x-[-14px]":"h-[15px] w-[15px] ltr:radix-state-checked:translate-x-[13px] rtl:radix-state-checked:translate-x-[-13px]"),children:u?d||(0,c.jsx)(i.oVl,{className:"icon-xs dark:text-black"}):null})})}},73062:function(e,t,r){"use strict";r.d(t,{g:function(){return x}});var n=r(98601),a=r(52088),o=r(54198),i=r(19841),c=r(92379),s=r(13490),l=r(50863),u=r(651);let d=["children"],f=["children","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function x(e){let{options:t,value:r,onValueChange:n,disabled:a,defaultValue:o,placeholder:i}=e;return(0,u.jsxs)(m.Root,{value:r,onValueChange:n,disabled:a,defaultValue:o,children:[(0,u.jsxs)(m.Trigger,{children:[(0,u.jsx)(m.Value,{placeholder:i}),(0,u.jsx)(m.Icon,{})]}),(0,u.jsx)(m.Portal,{children:(0,u.jsx)(m.Content,{children:t.map(e=>(0,u.jsx)(m.Item,{value:e.value,children:e.label},e.value))})})]})}let m={Root:o.fC,Trigger:function(e){return(0,u.jsx)(l.J7,b({$as:o.xz},e))},Value:o.B4,Icon:function(){return(0,u.jsx)(o.JO,{children:(0,u.jsx)(s.Tg4,{className:"icon-sm"})})},Portal:o.h_,Content:function(e){let{children:t,className:r}=e,n=(0,a.Z)(e,f);return(0,u.jsxs)(l.w5,b(b({$as:o.VY,side:"bottom",sideOffset:4,position:"popper",className:(0,i.default)("min-w-[220px] overflow-auto",r)},n),{},{children:[(0,u.jsx)(o.u_,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,u.jsx)(s.r0F,{className:"icon-sm"})}),(0,u.jsx)(o.l_,{children:t}),(0,u.jsx)(o.$G,{className:"flex h-8 cursor-default items-center justify-center text-token-text-primary",children:(0,u.jsx)(s.Tg4,{className:"icon-sm"})})]}))},Item:c.forwardRef(function(e,t){let{children:r}=e,n=(0,a.Z)(e,d);return(0,u.jsxs)(l.gG,b(b({$as:o.ck,ref:t,className:"flex justify-between"},n),{},{children:[(0,u.jsx)(o.eT,{children:r}),(0,u.jsx)(o.wU,{className:"",children:(0,u.jsx)(s.kvR,{className:"icon-sm"})})]}))}),ItemText:o.eT,ItemIndicator:o.wU,Separator:function(){return(0,u.jsx)(o.Z0,{className:"mx-5 my-1 h-px bg-token-border-light"})},Label:function(e){let{children:t}=e;return(0,u.jsx)(o.__,{className:"mx-2 my-0 px-2 text-xs font-semibold text-token-text-secondary",children:t})},Group:o.ZA};t.Z=m},50863:function(e,t,r){"use strict";r.d(t,{J7:function(){return u},M4:function(){return b},aF:function(){return d},gG:function(){return f},w5:function(){return p}});var n,a,o,i,c,s=r(2346),l=r(15478);let u=l.Z.button(n||(n=(0,s.Z)(["\ntext-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent\nleading-none outline-none cursor-pointer\nhover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary\nfocus-visible:bg-token-main-surface-secondary\nradix-state-active:text-token-text-secondary\nradix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent\n"]))),d=l.Z.div(a||(a=(0,s.Z)(["flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative"]))),f=(0,l.Z)(d)(o||(o=(0,s.Z)(["hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5] dark:hover:bg-token-main-surface-secondary dark:focus-visible:bg-token-main-surface-secondary rounded-md my-0 px-3 mx-2 radix-state-open:bg-[#f5f5f5] dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3"]))),p=l.Z.div(i||(i=(0,s.Z)(["max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2"]))),b=l.Z.div(c||(c=(0,s.Z)(["popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl"])))},26671:function(e,t,r){"use strict";r.d(t,{B:function(){return c}});var n=r(92379),a=r(31541),o=r(59246),i=r(7186);function c(e){let t=e+"CollectionProvider",[r,c]=(0,a.b)(t),[s,l]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:a}=e,c=l(u,r),s=(0,o.e)(t,c.collectionRef);return n.createElement(i.g7,{ref:s},a)}),f=e+"CollectionItemSlot",p="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,a=n.useRef(null),o=n.useRef(new Map).current;return n.createElement(s,{scope:t,itemMap:o,collectionRef:a},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:a,...c}=e,s=n.useRef(null),u=(0,o.e)(t,s),d=l(f,r);return n.useEffect(()=>(d.itemMap.set(s,{ref:s,...c}),()=>void d.itemMap.delete(s))),n.createElement(i.g7,{[p]:"",ref:u},a)})},function(t){let r=l(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${p}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},c]}},78571:function(e,t,r){"use strict";r.d(t,{_:function(){return i}});var n=r(37088),a=r(92379),o=r(52125);let i=(0,a.forwardRef)((e,t)=>(0,a.createElement)(o.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},77420:function(e,t,r){"use strict";r.d(t,{bU:function(){return w},fC:function(){return y}});var n=r(37088),a=r(92379),o=r(10132),i=r(59246),c=r(31541),s=r(48758),l=r(26468),u=r(8312),d=r(52125);let f="Switch",[p,b]=(0,c.b)(f),[x,m]=p(f),h=(0,a.forwardRef)((e,t)=>{let{__scopeSwitch:r,name:c,checked:l,defaultChecked:u,required:f,disabled:p,value:b="on",onCheckedChange:m,...h}=e,[g,y]=(0,a.useState)(null),w=(0,i.e)(t,e=>y(e)),j=(0,a.useRef)(!1),O=!g||!!g.closest("form"),[C=!1,P]=(0,s.T)({prop:l,defaultProp:u,onChange:m});return(0,a.createElement)(x,{scope:r,checked:C,disabled:p},(0,a.createElement)(d.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":C,"aria-required":f,"data-state":v(C),"data-disabled":p?"":void 0,disabled:p,value:b},h,{ref:w,onClick:(0,o.M)(e.onClick,e=>{P(e=>!e),O&&(j.current=e.isPropagationStopped(),j.current||e.stopPropagation())})})),O&&(0,a.createElement)(k,{control:g,bubbles:!j.current,name:c,value:b,checked:C,required:f,disabled:p,style:{transform:"translateX(-100%)"}}))}),g=(0,a.forwardRef)((e,t)=>{let{__scopeSwitch:r,...o}=e,i=m("SwitchThumb",r);return(0,a.createElement)(d.WV.span,(0,n.Z)({"data-state":v(i.checked),"data-disabled":i.disabled?"":void 0},o,{ref:t}))}),k=e=>{let{control:t,checked:r,bubbles:o=!0,...i}=e,c=(0,a.useRef)(null),s=(0,l.D)(r),d=(0,u.t)(t);return(0,a.useEffect)(()=>{let e=c.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(s!==r&&t){let n=new Event("click",{bubbles:o});t.call(e,r),e.dispatchEvent(n)}},[s,r,o]),(0,a.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:r},i,{tabIndex:-1,ref:c,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}let y=h,w=g},26468:function(e,t,r){"use strict";r.d(t,{D:function(){return a}});var n=r(92379);function a(e){let t=(0,n.useRef)({value:e,previous:e});return(0,n.useMemo)(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}}}]);
//# sourceMappingURL=6497.470a3d1859c94908.js.map