(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4404,9294],{24421:function(e,t,n){"use strict";function r(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}n.d(t,{Z:function(){return r}})},51516:function(e,t,n){"use strict";function r(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return r}})},95638:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(24421),o=n(67629),u=n(51516);function l(e,t){(0,u.Z)(2,arguments);var n=(0,o.Z)(e),l=(0,o.Z)(t);return Math.round((n.getTime()-(0,r.Z)(n)-(l.getTime()-(0,r.Z)(l)))/864e5)}},26430:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e,t){return(0,o.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(t).getTime()}},21508:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(23,59,59,999),t}},12654:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(21508);function o(){return(0,r.Z)(Date.now())}},44043:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e){return(0,o.Z)(1,arguments),(0,r.Z)(e).getMonth()}},82187:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e){return(0,o.Z)(1,arguments),(0,r.Z)(e).getFullYear()}},69262:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e){return(0,o.Z)(1,arguments),function(e,t){(0,o.Z)(2,arguments);var n=(0,r.Z)(e),u=(0,r.Z)(t);return n.getFullYear()===u.getFullYear()}(e,Date.now())}},67629:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(28734),o=n(51516);function u(e){(0,o.Z)(1,arguments);var t=(0,r.Z)(e);return t.setHours(0,0,0,0),t}},28734:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(51516);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e){(0,r.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===o(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},34598:function(e,t,n){var r=n(85036);e.exports=function(e,t){return!!(null==e?0:e.length)&&r(e,t,0)>-1}},60510:function(e){e.exports=function(e,t,n){for(var r=-1,o=null==e?0:e.length;++r<o;)if(n(t,e[r]))return!0;return!1}},85036:function(e,t,n){var r=n(83663),o=n(18826),u=n(31154);e.exports=function(e,t,n){return t==t?u(e,t,n):r(e,o,n)}},18826:function(e){e.exports=function(e){return e!=e}},18296:function(e,t,n){var r=n(25561),o=n(34598),u=n(60510),l=n(8529),a=n(33295),i=n(33005);e.exports=function(e,t,n){var s=-1,c=o,p=e.length,f=!0,d=[],v=d;if(n)f=!1,c=u;else if(p>=200){var m=t?null:a(e);if(m)return i(m);f=!1,c=l,v=new r}else v=t?[]:d;e:for(;++s<p;){var b=e[s],y=t?t(b):b;if(b=n||0!==b?b:0,f&&y==y){for(var g=v.length;g--;)if(v[g]===y)continue e;t&&v.push(y),d.push(b)}else c(v,y,n)||(v!==d&&v.push(y),d.push(b))}return d}},33295:function(e,t,n){var r=n(353),o=n(91530),u=n(33005),l=r&&1/u(new r([,-0]))[1]==1/0?function(e){return new r(e)}:o;e.exports=l},31154:function(e){e.exports=function(e,t,n){for(var r=n-1,o=e.length;++r<o;)if(e[r]===t)return r;return -1}},96594:function(e,t,n){var r=n(61757),o=n(18296);e.exports=function(e,t){return e&&e.length?o(e,r(t,2)):[]}},75592:function(e,t,n){"use strict";n.d(t,{ZP:function(){return a}});var r=n(57869),o=n(37088),u=n(92379),l=n(12012);n(93865),n(95295),n(82845);var a=(0,u.forwardRef)(function(e,t){var n=(0,r.u)(e);return u.createElement(l.S,(0,o.Z)({ref:t},n))})},89039:function(e,t,n){"use strict";let r,o;n.d(t,{J:function(){return z}});var u=n(92379),l=n(782),a=n(78789),i=n(91157),s=n(86060),c=n(76227),p=n(88554),f=n(98397),d=n(57084),v=n(60839),m=n(67607),b=n(87054),y=n(25825),g=n(39231),P=n(37927),S=n(11943),E=n(51973),h=((r=h||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),w=((o=w||{})[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o);let T={0:e=>({...e,popoverState:(0,l.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},Z=(0,u.createContext)(null);function I(e){let t=(0,u.useContext)(Z);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,I),t}return t}Z.displayName="PopoverContext";let M=(0,u.createContext)(null);function x(e){let t=(0,u.useContext)(M);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,x),t}return t}M.displayName="PopoverAPIContext";let C=(0,u.createContext)(null);function k(){return(0,u.useContext)(C)}C.displayName="PopoverGroupContext";let F=(0,u.createContext)(null);function O(e,t){return(0,l.E)(t.type,T,e,t)}F.displayName="PopoverPanelContext";let N=(0,a.yV)(function(e,t){var n;let r=`headlessui-popover-button-${(0,s.M)()}`,o=`headlessui-popover-panel-${(0,s.M)()}`,c=(0,u.useRef)(null),p=(0,i.T)(t,(0,i.h)(e=>{c.current=e})),v=(0,u.useReducer)(O,{popoverState:1,button:null,buttonId:r,panel:null,panelId:o,beforePanelSentinel:(0,u.createRef)(),afterPanelSentinel:(0,u.createRef)()}),[{popoverState:b,button:P,panel:E,beforePanelSentinel:h,afterPanelSentinel:w},T]=v,I=(0,y.i)(null!=(n=c.current)?n:P);(0,u.useEffect)(()=>T({type:3,buttonId:r}),[r,T]),(0,u.useEffect)(()=>T({type:5,panelId:o}),[o,T]);let x=(0,u.useMemo)(()=>{if(!P||!E)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(P))^Number(null==e?void 0:e.contains(E)))return!0;return!1},[P,E]),C=(0,u.useMemo)(()=>({buttonId:r,panelId:o,close:()=>T({type:1})}),[r,o,T]),F=k(),N=null==F?void 0:F.registerPopover,D=(0,S.z)(()=>{var e;return null!=(e=null==F?void 0:F.isFocusWithinPopoverGroup())?e:(null==I?void 0:I.activeElement)&&((null==P?void 0:P.contains(I.activeElement))||(null==E?void 0:E.contains(I.activeElement)))});(0,u.useEffect)(()=>null==N?void 0:N(C),[N,C]),(0,g.O)(null==I?void 0:I.defaultView,"focus",e=>{var t,n,r,o;0===b&&(D()||!P||!E||null!=(n=null==(t=h.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(o=null==(r=w.current)?void 0:r.contains)&&o.call(r,e.target)||T({type:1}))},!0),(0,m.O)([P,E],(e,t)=>{T({type:1}),(0,f.sP)(t,f.tJ.Loose)||(e.preventDefault(),null==P||P.focus())},0===b);let R=(0,S.z)(e=>{T({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:P:P;null==t||t.focus()}),A=(0,u.useMemo)(()=>({close:R,isPortalled:x}),[R,x]),B=(0,u.useMemo)(()=>({open:0===b,close:R}),[b,R]);return u.createElement(Z.Provider,{value:v},u.createElement(M.Provider,{value:A},u.createElement(d.up,{value:(0,l.E)(b,{0:d.ZM.Open,1:d.ZM.Closed})},(0,a.sY)({ourProps:{ref:p},theirProps:e,slot:B,defaultTag:"div",name:"Popover"}))))}),D=(0,a.yV)(function(e,t){let[n,r]=I("Popover.Button"),{isPortalled:o}=x("Popover.Button"),d=(0,u.useRef)(null),m=`headlessui-focus-sentinel-${(0,s.M)()}`,b=k(),g=null==b?void 0:b.closeOthers,h=(0,u.useContext)(F),w=null!==h&&h===n.panelId,T=(0,i.T)(d,t,w?null:e=>r({type:2,button:e})),Z=(0,i.T)(d,t),M=(0,y.i)(d),C=(0,S.z)(e=>{var t,o,u;if(w){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(o=(t=e.target).click)||o.call(t),r({type:1}),null==(u=n.button)||u.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==g?void 0:g(n.buttonId);if(!d.current||(null==M?void 0:M.activeElement)&&!d.current.contains(M.activeElement))return;e.preventDefault(),e.stopPropagation(),r({type:1})}}),O=(0,S.z)(e=>{w||e.key===c.R.Space&&e.preventDefault()}),N=(0,S.z)(t=>{var o,u;(0,p.P)(t.currentTarget)||e.disabled||(w?(r({type:1}),null==(o=n.button)||o.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),r({type:0}),null==(u=n.button)||u.focus()))}),D=(0,S.z)(e=>{e.preventDefault(),e.stopPropagation()}),R=0===n.popoverState,A=(0,u.useMemo)(()=>({open:R}),[R]),B=(0,v.f)(e,d),z=w?{ref:Z,type:B,onKeyDown:C,onClick:N}:{ref:T,id:n.buttonId,type:B,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:C,onKeyUp:O,onClick:N,onMouseDown:D},j=(0,E.l)(),Y=(0,S.z)(()=>{let e=n.panel;e&&(0,l.E)(j.current,{[E.N.Forwards]:()=>(0,f.jA)(e,f.TO.First),[E.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})});return u.createElement(u.Fragment,null,(0,a.sY)({ourProps:z,theirProps:e,slot:A,defaultTag:"button",name:"Popover.Button"}),R&&!w&&o&&u.createElement(P._,{id:m,features:P.A.Focusable,as:"button",type:"button",onFocus:Y}))}),R=a.AN.RenderStrategy|a.AN.Static,A=(0,a.yV)(function(e,t){let[{popoverState:n},r]=I("Popover.Overlay"),o=(0,i.T)(t),l=`headlessui-popover-overlay-${(0,s.M)()}`,c=(0,d.oJ)(),f=null!==c?c===d.ZM.Open:0===n,v=(0,S.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();r({type:1})}),m=(0,u.useMemo)(()=>({open:0===n}),[n]);return(0,a.sY)({ourProps:{ref:o,id:l,"aria-hidden":!0,onClick:v},theirProps:e,slot:m,defaultTag:"div",features:R,visible:f,name:"Popover.Overlay"})}),B=a.AN.RenderStrategy|a.AN.Static,z=Object.assign(N,{Button:D,Overlay:A,Panel:(0,a.yV)(function(e,t){let{focus:n=!1,...r}=e,[o,p]=I("Popover.Panel"),{close:v,isPortalled:m}=x("Popover.Panel"),b=`headlessui-focus-sentinel-before-${(0,s.M)()}`,g=`headlessui-focus-sentinel-after-${(0,s.M)()}`,h=(0,u.useRef)(null),w=(0,i.T)(h,t,e=>{p({type:4,panel:e})}),T=(0,y.i)(h),Z=(0,d.oJ)(),M=null!==Z?Z===d.ZM.Open:0===o.popoverState,C=(0,S.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==o.popoverState||!h.current||(null==T?void 0:T.activeElement)&&!h.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),p({type:1}),null==(t=o.button)||t.focus()}});(0,u.useEffect)(()=>{var t;e.static||1===o.popoverState&&(null==(t=e.unmount)||t)&&p({type:4,panel:null})},[o.popoverState,e.unmount,e.static,p]),(0,u.useEffect)(()=>{if(!n||0!==o.popoverState||!h.current)return;let e=null==T?void 0:T.activeElement;h.current.contains(e)||(0,f.jA)(h.current,f.TO.First)},[n,h,o.popoverState]);let k=(0,u.useMemo)(()=>({open:0===o.popoverState,close:v}),[o,v]),O={ref:w,id:o.panelId,onKeyDown:C,onBlur:n&&0===o.popoverState?e=>{var t,n,r,u,l;let a=e.relatedTarget;!a||!h.current||null!=(t=h.current)&&t.contains(a)||(p({type:1}),((null==(r=null==(n=o.beforePanelSentinel.current)?void 0:n.contains)?void 0:r.call(n,a))||(null==(l=null==(u=o.afterPanelSentinel.current)?void 0:u.contains)?void 0:l.call(u,a)))&&a.focus({preventScroll:!0}))}:void 0,tabIndex:-1},N=(0,E.l)(),D=(0,S.z)(()=>{let e=h.current;e&&(0,l.E)(N.current,{[E.N.Forwards]:()=>{(0,f.jA)(e,f.TO.First)},[E.N.Backwards]:()=>{var e;null==(e=o.button)||e.focus({preventScroll:!0})}})}),R=(0,S.z)(()=>{let e=h.current;e&&(0,l.E)(N.current,{[E.N.Forwards]:()=>{var e,t,n;if(!o.button)return;let r=(0,f.GO)(),u=r.indexOf(o.button),l=r.slice(0,u+1),a=[...r.slice(u+1),...l];for(let r of a.slice())if((null==(t=null==(e=null==r?void 0:r.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=o.panel)?void 0:n.contains(r))){let e=a.indexOf(r);-1!==e&&a.splice(e,1)}(0,f.jA)(a,f.TO.First,!1)},[E.N.Backwards]:()=>(0,f.jA)(e,f.TO.Last)})});return u.createElement(F.Provider,{value:o.panelId},M&&m&&u.createElement(P._,{id:b,ref:o.beforePanelSentinel,features:P.A.Focusable,as:"button",type:"button",onFocus:D}),(0,a.sY)({ourProps:O,theirProps:r,slot:k,defaultTag:"div",features:B,visible:M,name:"Popover.Panel"}),M&&m&&u.createElement(P._,{id:g,ref:o.afterPanelSentinel,features:P.A.Focusable,as:"button",type:"button",onFocus:R}))}),Group:(0,a.yV)(function(e,t){let n=(0,u.useRef)(null),r=(0,i.T)(n,t),[o,l]=(0,u.useState)([]),s=(0,S.z)(e=>{l(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,S.z)(e=>(l(t=>[...t,e]),()=>s(e))),p=(0,S.z)(()=>{var e;let t=(0,b.r)(n);if(!t)return!1;let r=t.activeElement;return!!(null!=(e=n.current)&&e.contains(r))||o.some(e=>{var n,o;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(r))||(null==(o=t.getElementById(e.panelId))?void 0:o.contains(r))})}),f=(0,S.z)(e=>{for(let t of o)t.buttonId!==e&&t.close()}),d=(0,u.useMemo)(()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:p,closeOthers:f}),[c,s,p,f]),v=(0,u.useMemo)(()=>({}),[]);return u.createElement(C.Provider,{value:d},(0,a.sY)({ourProps:{ref:r},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},39231:function(e,t,n){"use strict";n.d(t,{O:function(){return u}});var r=n(92379),o=n(23441);function u(e,t,n,u){let l=(0,o.E)(n);(0,r.useEffect)(()=>{function n(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,n,u),()=>e.removeEventListener(t,n,u)},[e,t,u])}},51973:function(e,t,n){"use strict";let r;n.d(t,{N:function(){return l},l:function(){return a}});var o=n(92379),u=n(23441),l=((r=l||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r);function a(){var e,t;let n,r=(0,o.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(r.current=e.shiftKey?1:0)},n=(0,u.E)(t),(0,o.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),r}},37927:function(e,t,n){"use strict";let r;n.d(t,{A:function(){return u},_:function(){return l}});var o=n(78789),u=((r=u||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let l=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,u={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:u,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},11812:function(e,t,n){"use strict";n.d(t,{E:function(){return o}});var r=n(46598);function o(e=.1,{startDelay:t=0,from:n=0,ease:o}={}){return(u,l)=>{let a=e*Math.abs(("number"==typeof n?n:function(e,t){if("first"===e)return 0;{let n=t-1;return"last"===e?n:n/2}}(n,l))-u);if(o){let t=l*e;a=(0,r.R)(o)(a/t)*t}return t+a}}},157:function(e,t,n){"use strict";n.d(t,{S:function(){return c}});var r=n(92379),o=n(10542);let u=(0,r.createContext)(null);var l=n(9321);let a=e=>!e.isLayoutDirty&&e.willUpdate(!1),i=e=>!0===e,s=e=>i(!0===e)||"id"===e,c=({children:e,id:t,inherit:n=!0})=>{let c=(0,r.useContext)(o.p),p=(0,r.useContext)(u),[f,d]=(0,l.N)(),v=(0,r.useRef)(null),m=c.id||p;null===v.current&&(s(n)&&m&&(t=t?m+"-"+t:m),v.current={id:t,group:i(n)&&c.group||function(){let e=new Set,t=new WeakMap,n=()=>e.forEach(a);return{add:r=>{e.add(r),t.set(r,r.addEventListener("willUpdate",n))},remove:r=>{e.delete(r);let o=t.get(r);o&&(o(),t.delete(r)),n()},dirty:n}}()});let b=(0,r.useMemo)(()=>({...v.current,forceRender:f}),[d]);return r.createElement(o.p.Provider,{value:b},e)}}}]);
//# sourceMappingURL=4404-4ba8019a49aca817.js.map