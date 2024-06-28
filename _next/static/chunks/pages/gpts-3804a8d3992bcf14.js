(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106,876,8086],{14924:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return v},default:function(){return m}});var o=n(62164),r=n(71126),l=n.n(r),a=n(651);function u(){let e="Explore GPTs",t="Discover and create custom versions of ChatGPT that combine instructions, extra knowledge, and any combination of skills.";return(0,a.jsxs)(l(),{children:[(0,a.jsx)("title",{children:e}),(0,a.jsx)("meta",{name:"title",content:e},"title"),(0,a.jsx)("meta",{property:"og:site_name",content:"ChatGPT"},"og:site_name"),(0,a.jsx)("meta",{property:"og:type",content:"website"},"og:type"),(0,a.jsx)("meta",{property:"og:title",content:e},"og:title"),(0,a.jsx)("meta",{property:"og:url",content:"/gpts"},"og:url"),(0,a.jsx)("meta",{name:"description",content:t},"description"),(0,a.jsx)("meta",{property:"og:description",content:t},"og:description"),(0,a.jsx)("meta",{property:"og:image",content:"https://cdn.oaistatic.com/_next/static/media/gpts-og.772bef1f.jpg"},"og:image"),(0,a.jsx)("meta",{property:"og:image:width",content:"1200"},"og:image:width"),(0,a.jsx)("meta",{property:"og:image:height",content:"630"},"og:image:height")]})}var i=n(40806),s=n(52773),c=n(4702),p=n(93747),d=n(15236),f=n(92379),v=!0;function m(e){var t;let n="store_anon"===e.kind,r=null===(t=(0,c.t)())||void 0===t?void 0:t.planType;return((0,f.useEffect)(()=>{(r||n)&&p.A.logEvent(d.M.pageView,{page:"gpts/discovery",isAnon:n,referrer:e.referrer,plan_type:r})},[n,e.referrer,r]),n)?(0,a.jsxs)("div",{className:"relative h-full w-full flex-1 flex-col overflow-auto",children:[(0,a.jsx)(u,{}),(0,a.jsx)(o.fN,{anon:!0})]}):(0,a.jsx)(P,{})}function P(){return null==(0,c.hz)()?null:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.r,{}),(0,a.jsx)(i.Z,{header:(0,a.jsx)(u,{}),children:(0,a.jsx)(o.fN,{})})]})}},40806:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var o=n(2027),r=n(1e4),l=n(59585),a=n(43128),u=n.n(a),i=n(37968),s=n(65034),c=n(73746),p=n(9085),d=n(651);function f(e){let{children:t,header:n}=e,a=(0,c.Q)();return(0,d.jsxs)(r.Z,{mobileHeaderRightContent:null,sidebar:(0,d.jsxs)(l.ZP,{navHeader:a?(0,d.jsx)(i.$,{className:"flex h-14 items-center",onNewThread:()=>u().push("/"),historyDisabled:!1}):null,children:[(0,d.jsx)(p.Dy,{}),(0,d.jsx)(o.Z,{activeId:void 0})]}),children:[n,(0,d.jsx)(s.Z,{children:t})]})}},3616:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gpts",function(){return n(14924)}])},20876:function(e,t,n){"use strict";let o,r;n.d(t,{J:function(){return B}});var l=n(92379),a=n(26970),u=n(97757),i=n(64775),s=n(78461),c=n(27192),p=n(44137),d=n(74214),f=n(70232),v=n(14482),m=n(23508),P=n(75370),y=n(29555),g=n(15750),b=n(35165),h=n(42652),E=n(24980),S=((o=S||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),x=((r=x||{})[r.TogglePopover=0]="TogglePopover",r[r.ClosePopover=1]="ClosePopover",r[r.SetButton=2]="SetButton",r[r.SetButtonId=3]="SetButtonId",r[r.SetPanel=4]="SetPanel",r[r.SetPanelId=5]="SetPanelId",r);let w={0:e=>({...e,popoverState:(0,a.E)(e.popoverState,{0:1,1:0})}),1:e=>1===e.popoverState?e:{...e,popoverState:1},2:(e,t)=>e.button===t.button?e:{...e,button:t.button},3:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},4:(e,t)=>e.panel===t.panel?e:{...e,panel:t.panel},5:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},T=(0,l.createContext)(null);function j(e){let t=(0,l.useContext)(T);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,j),t}return t}T.displayName="PopoverContext";let I=(0,l.createContext)(null);function N(e){let t=(0,l.useContext)(I);if(null===t){let t=Error(`<${e} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}I.displayName="PopoverAPIContext";let k=(0,l.createContext)(null);function O(){return(0,l.useContext)(k)}k.displayName="PopoverGroupContext";let C=(0,l.createContext)(null);function _(e,t){return(0,a.E)(t.type,w,e,t)}C.displayName="PopoverPanelContext";let M=(0,u.yV)(function(e,t){var n;let o=`headlessui-popover-button-${(0,s.M)()}`,r=`headlessui-popover-panel-${(0,s.M)()}`,c=(0,l.useRef)(null),p=(0,i.T)(t,(0,i.h)(e=>{c.current=e})),v=(0,l.useReducer)(_,{popoverState:1,button:null,buttonId:o,panel:null,panelId:r,beforePanelSentinel:(0,l.createRef)(),afterPanelSentinel:(0,l.createRef)()}),[{popoverState:P,button:b,panel:E,beforePanelSentinel:S,afterPanelSentinel:x},w]=v,j=(0,y.i)(null!=(n=c.current)?n:b);(0,l.useEffect)(()=>w({type:3,buttonId:o}),[o,w]),(0,l.useEffect)(()=>w({type:5,panelId:r}),[r,w]);let N=(0,l.useMemo)(()=>{if(!b||!E)return!1;for(let e of document.querySelectorAll("body > *"))if(Number(null==e?void 0:e.contains(b))^Number(null==e?void 0:e.contains(E)))return!0;return!1},[b,E]),k=(0,l.useMemo)(()=>({buttonId:o,panelId:r,close:()=>w({type:1})}),[o,r,w]),C=O(),M=null==C?void 0:C.registerPopover,F=(0,h.z)(()=>{var e;return null!=(e=null==C?void 0:C.isFocusWithinPopoverGroup())?e:(null==j?void 0:j.activeElement)&&((null==b?void 0:b.contains(j.activeElement))||(null==E?void 0:E.contains(j.activeElement)))});(0,l.useEffect)(()=>null==M?void 0:M(k),[M,k]),(0,g.O)(null==j?void 0:j.defaultView,"focus",e=>{var t,n,o,r;0===P&&(F()||!b||!E||null!=(n=null==(t=S.current)?void 0:t.contains)&&n.call(t,e.target)||null!=(r=null==(o=x.current)?void 0:o.contains)&&r.call(o,e.target)||w({type:1}))},!0),(0,m.O)([b,E],(e,t)=>{w({type:1}),(0,d.sP)(t,d.tJ.Loose)||(e.preventDefault(),null==b||b.focus())},0===P);let A=(0,h.z)(e=>{w({type:1});let t=e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:b:b;null==t||t.focus()}),R=(0,l.useMemo)(()=>({close:A,isPortalled:N}),[A,N]),z=(0,l.useMemo)(()=>({open:0===P,close:A}),[P,A]);return l.createElement(T.Provider,{value:v},l.createElement(I.Provider,{value:R},l.createElement(f.up,{value:(0,a.E)(P,{0:f.ZM.Open,1:f.ZM.Closed})},(0,u.sY)({ourProps:{ref:p},theirProps:e,slot:z,defaultTag:"div",name:"Popover"}))))}),F=(0,u.yV)(function(e,t){let[n,o]=j("Popover.Button"),{isPortalled:r}=N("Popover.Button"),f=(0,l.useRef)(null),m=`headlessui-focus-sentinel-${(0,s.M)()}`,P=O(),g=null==P?void 0:P.closeOthers,S=(0,l.useContext)(C),x=null!==S&&S===n.panelId,w=(0,i.T)(f,t,x?null:e=>o({type:2,button:e})),T=(0,i.T)(f,t),I=(0,y.i)(f),k=(0,h.z)(e=>{var t,r,l;if(x){if(1===n.popoverState)return;switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),null==(r=(t=e.target).click)||r.call(t),o({type:1}),null==(l=n.button)||l.focus()}}else switch(e.key){case c.R.Space:case c.R.Enter:e.preventDefault(),e.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),o({type:0});break;case c.R.Escape:if(0!==n.popoverState)return null==g?void 0:g(n.buttonId);if(!f.current||(null==I?void 0:I.activeElement)&&!f.current.contains(I.activeElement))return;e.preventDefault(),e.stopPropagation(),o({type:1})}}),_=(0,h.z)(e=>{x||e.key===c.R.Space&&e.preventDefault()}),M=(0,h.z)(t=>{var r,l;(0,p.P)(t.currentTarget)||e.disabled||(x?(o({type:1}),null==(r=n.button)||r.focus()):(t.preventDefault(),t.stopPropagation(),1===n.popoverState&&(null==g||g(n.buttonId)),o({type:0}),null==(l=n.button)||l.focus()))}),F=(0,h.z)(e=>{e.preventDefault(),e.stopPropagation()}),A=0===n.popoverState,R=(0,l.useMemo)(()=>({open:A}),[A]),z=(0,v.f)(e,f),B=x?{ref:T,type:z,onKeyDown:k,onClick:M}:{ref:w,id:n.buttonId,type:z,"aria-expanded":e.disabled?void 0:0===n.popoverState,"aria-controls":n.panel?n.panelId:void 0,onKeyDown:k,onKeyUp:_,onClick:M,onMouseDown:F},D=(0,E.l)(),Z=(0,h.z)(()=>{let e=n.panel;e&&(0,a.E)(D.current,{[E.N.Forwards]:()=>(0,d.jA)(e,d.TO.First),[E.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(l.Fragment,null,(0,u.sY)({ourProps:B,theirProps:e,slot:R,defaultTag:"button",name:"Popover.Button"}),A&&!x&&r&&l.createElement(b._,{id:m,features:b.A.Focusable,as:"button",type:"button",onFocus:Z}))}),A=u.AN.RenderStrategy|u.AN.Static,R=(0,u.yV)(function(e,t){let[{popoverState:n},o]=j("Popover.Overlay"),r=(0,i.T)(t),a=`headlessui-popover-overlay-${(0,s.M)()}`,c=(0,f.oJ)(),d=null!==c?c===f.ZM.Open:0===n,v=(0,h.z)(e=>{if((0,p.P)(e.currentTarget))return e.preventDefault();o({type:1})}),m=(0,l.useMemo)(()=>({open:0===n}),[n]);return(0,u.sY)({ourProps:{ref:r,id:a,"aria-hidden":!0,onClick:v},theirProps:e,slot:m,defaultTag:"div",features:A,visible:d,name:"Popover.Overlay"})}),z=u.AN.RenderStrategy|u.AN.Static,B=Object.assign(M,{Button:F,Overlay:R,Panel:(0,u.yV)(function(e,t){let{focus:n=!1,...o}=e,[r,p]=j("Popover.Panel"),{close:v,isPortalled:m}=N("Popover.Panel"),P=`headlessui-focus-sentinel-before-${(0,s.M)()}`,g=`headlessui-focus-sentinel-after-${(0,s.M)()}`,S=(0,l.useRef)(null),x=(0,i.T)(S,t,e=>{p({type:4,panel:e})}),w=(0,y.i)(S),T=(0,f.oJ)(),I=null!==T?T===f.ZM.Open:0===r.popoverState,k=(0,h.z)(e=>{var t;if(e.key===c.R.Escape){if(0!==r.popoverState||!S.current||(null==w?void 0:w.activeElement)&&!S.current.contains(w.activeElement))return;e.preventDefault(),e.stopPropagation(),p({type:1}),null==(t=r.button)||t.focus()}});(0,l.useEffect)(()=>{var t;e.static||1===r.popoverState&&(null==(t=e.unmount)||t)&&p({type:4,panel:null})},[r.popoverState,e.unmount,e.static,p]),(0,l.useEffect)(()=>{if(!n||0!==r.popoverState||!S.current)return;let e=null==w?void 0:w.activeElement;S.current.contains(e)||(0,d.jA)(S.current,d.TO.First)},[n,S,r.popoverState]);let O=(0,l.useMemo)(()=>({open:0===r.popoverState,close:v}),[r,v]),_={ref:x,id:r.panelId,onKeyDown:k,onBlur:n&&0===r.popoverState?e=>{var t,n,o,l,a;let u=e.relatedTarget;!u||!S.current||null!=(t=S.current)&&t.contains(u)||(p({type:1}),((null==(o=null==(n=r.beforePanelSentinel.current)?void 0:n.contains)?void 0:o.call(n,u))||(null==(a=null==(l=r.afterPanelSentinel.current)?void 0:l.contains)?void 0:a.call(l,u)))&&u.focus({preventScroll:!0}))}:void 0,tabIndex:-1},M=(0,E.l)(),F=(0,h.z)(()=>{let e=S.current;e&&(0,a.E)(M.current,{[E.N.Forwards]:()=>{(0,d.jA)(e,d.TO.First)},[E.N.Backwards]:()=>{var e;null==(e=r.button)||e.focus({preventScroll:!0})}})}),A=(0,h.z)(()=>{let e=S.current;e&&(0,a.E)(M.current,{[E.N.Forwards]:()=>{var e,t,n;if(!r.button)return;let o=(0,d.GO)(),l=o.indexOf(r.button),a=o.slice(0,l+1),u=[...o.slice(l+1),...a];for(let o of u.slice())if((null==(t=null==(e=null==o?void 0:o.id)?void 0:e.startsWith)?void 0:t.call(e,"headlessui-focus-sentinel-"))||(null==(n=r.panel)?void 0:n.contains(o))){let e=u.indexOf(o);-1!==e&&u.splice(e,1)}(0,d.jA)(u,d.TO.First,!1)},[E.N.Backwards]:()=>(0,d.jA)(e,d.TO.Last)})});return l.createElement(C.Provider,{value:r.panelId},I&&m&&l.createElement(b._,{id:P,ref:r.beforePanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:F}),(0,u.sY)({ourProps:_,theirProps:o,slot:O,defaultTag:"div",features:z,visible:I,name:"Popover.Panel"}),I&&m&&l.createElement(b._,{id:g,ref:r.afterPanelSentinel,features:b.A.Focusable,as:"button",type:"button",onFocus:A}))}),Group:(0,u.yV)(function(e,t){let n=(0,l.useRef)(null),o=(0,i.T)(n,t),[r,a]=(0,l.useState)([]),s=(0,h.z)(e=>{a(t=>{let n=t.indexOf(e);if(-1!==n){let e=t.slice();return e.splice(n,1),e}return t})}),c=(0,h.z)(e=>(a(t=>[...t,e]),()=>s(e))),p=(0,h.z)(()=>{var e;let t=(0,P.r)(n);if(!t)return!1;let o=t.activeElement;return!!(null!=(e=n.current)&&e.contains(o))||r.some(e=>{var n,r;return(null==(n=t.getElementById(e.buttonId))?void 0:n.contains(o))||(null==(r=t.getElementById(e.panelId))?void 0:r.contains(o))})}),d=(0,h.z)(e=>{for(let t of r)t.buttonId!==e&&t.close()}),f=(0,l.useMemo)(()=>({registerPopover:c,unregisterPopover:s,isFocusWithinPopoverGroup:p,closeOthers:d}),[c,s,p,d]),v=(0,l.useMemo)(()=>({}),[]);return l.createElement(k.Provider,{value:f},(0,u.sY)({ourProps:{ref:o},theirProps:e,slot:v,defaultTag:"div",name:"Popover.Group"}))})})},15750:function(e,t,n){"use strict";n.d(t,{O:function(){return l}});var o=n(92379),r=n(22088);function l(e,t,n,l){let a=(0,r.E)(n);(0,o.useEffect)(()=>{function n(e){a.current(e)}return(e=null!=e?e:window).addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)},[e,t,l])}},24980:function(e,t,n){"use strict";let o;n.d(t,{N:function(){return a},l:function(){return u}});var r=n(92379),l=n(22088),a=((o=a||{})[o.Forwards=0]="Forwards",o[o.Backwards=1]="Backwards",o);function u(){var e,t;let n,o=(0,r.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(o.current=e.shiftKey?1:0)},n=(0,l.E)(t),(0,r.useEffect)(()=>{function t(e){n.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),o}},35165:function(e,t,n){"use strict";let o;n.d(t,{A:function(){return l},_:function(){return a}});var r=n(97757),l=((o=l||{})[o.None=1]="None",o[o.Focusable=2]="Focusable",o[o.Hidden=4]="Hidden",o);let a=(0,r.yV)(function(e,t){let{features:n=1,...o}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,r.sY)({ourProps:l,theirProps:o,slot:{},defaultTag:"div",name:"Hidden"})})}},function(e){e.O(0,[3391,7349,9207,6271,4984,6441,8868,5257,7639,6797,5943,5815,5904,7647,766,2888,9774,179],function(){return e(e.s=3616)}),_N_E=e.O()}]);
//# sourceMappingURL=gpts-3804a8d3992bcf14.js.map