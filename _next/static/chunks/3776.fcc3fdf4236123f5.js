(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3776],{34598:function(e,t,r){var n=r(85036);e.exports=function(e,t){return!!(null==e?0:e.length)&&n(e,t,0)>-1}},60510:function(e){e.exports=function(e,t,r){for(var n=-1,s=null==e?0:e.length;++n<s;)if(r(t,e[n]))return!0;return!1}},85036:function(e,t,r){var n=r(83663),s=r(18826),o=r(31154);e.exports=function(e,t,r){return t==t?o(e,t,r):n(e,s,r)}},18826:function(e){e.exports=function(e){return e!=e}},18296:function(e,t,r){var n=r(25561),s=r(34598),o=r(60510),a=r(8529),i=r(33295),l=r(33005);e.exports=function(e,t,r){var c=-1,u=s,d=e.length,f=!0,p=[],m=p;if(r)f=!1,u=o;else if(d>=200){var x=t?null:i(e);if(x)return l(x);f=!1,u=a,m=new n}else m=t?[]:p;e:for(;++c<d;){var g=e[c],h=t?t(g):g;if(g=r||0!==g?g:0,f&&h==h){for(var y=m.length;y--;)if(m[y]===h)continue e;t&&m.push(h),p.push(g)}else u(m,h,r)||(m!==p&&m.push(h),p.push(g))}return p}},33295:function(e,t,r){var n=r(353),s=r(91530),o=r(33005),a=n&&1/o(new n([,-0]))[1]==1/0?function(e){return new n(e)}:s;e.exports=a},31154:function(e){e.exports=function(e,t,r){for(var n=r-1,s=e.length;++n<s;)if(e[n]===t)return n;return -1}},96594:function(e,t,r){var n=r(61757),s=r(18296);e.exports=function(e,t){return e&&e.length?s(e,n(t,2)):[]}},93776:function(e,t,r){"use strict";r.d(t,{r:function(){return z},wV:function(){return I}});var n=r(98601),s=r(16757),o=r(97537),a=r(12128),i=r(39004),l=r(10080),c=r(73392),u=r(9026),d=r(15913),f=r(99976),p=r(61619),m=r(19841),x=r(96594),g=r.n(x),h=r(24098),y=r.n(h),w=r(92379),k=r(62984),v=r(75172),b=r(68306),j=r(15478),C=r(28146),N=r(56756),P=r(651);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let O=j.Z.div`group flex h-10 items-center gap-2 rounded-lg px-2 hover:bg-token-main-surface-secondary text-sm text-token-text-primary`;function z(){let{data:e,isLoading:t}=(0,i.Fi)({cutId:"recent",limit:8}),{data:r,isLoading:n}=(0,i.Dq)();return{isLoading:t||n,recent:e,pinned:r}}let D=(0,w.forwardRef)(function(e,t){let{query:r,onSelectGizmo:n,selectedIdx:s}=e,a=(0,d.oc)(),i=(0,w.useRef)([]),{isLoading:c,recent:u,pinned:f}=z();(0,w.useImperativeHandle)(t,()=>({handleEnterOnIndex:e=>{if(!m[e])return e<p.length?p[e].resource:"create"},getResultsLength:()=>p.length+1,scrollToItem:e=>{let t=i.current[e];t&&t.scrollIntoView({behavior:"instant",block:"nearest"})}}));let p=[];if(c)return(0,P.jsx)("div",{className:"absolute right-4 top-0 flex h-full items-center justify-center",children:(0,P.jsx)(o.Z,{})});u&&p.push(...u.pages.flatMap(e=>e.list.items).map(e=>({resource:e.resource,from:"recent"}))),f&&p.push(...f.items.map(e=>({resource:e,from:"pinned"})));let m=(p=g()(p,e=>e.resource.gizmo.id)).map(e=>e.resource.gizmo.tags?.includes(l.U9.WorkspaceDisabled));return r&&""!==r&&(p=p.filter(e=>(e.resource.gizmo.display.name.toLowerCase()+e.resource.gizmo.display.description?.toLowerCase()+e.resource.gizmo.author.display_name?.toLowerCase()).includes(r?.toLowerCase()))),(0,P.jsxs)("div",{className:"max-h-40 overflow-y-auto",children:[p.map((e,t)=>(0,P.jsx)("div",{ref:e=>{i.current[t]=e},tabIndex:t,onClick:()=>{m[t]||n(e.resource)},children:(0,P.jsx)(E,{gizmoResource:e.resource,from:e.from,showDescription:a,isSelected:s===t,grayedOut:m[t]})},e.resource.gizmo.id)),(0,P.jsx)("div",{ref:e=>{i.current[p.length]=e},tabIndex:p.length,onClick:()=>{n("create")},children:(0,P.jsx)(L,{isSelected:s===p.length})},"create")]})}),L=e=>{let{isSelected:t}=e;return(0,P.jsx)(O,{className:t?"bg-token-main-surface-secondary":"",children:(0,P.jsxs)(y(),{href:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2 font-semibold",children:[(0,P.jsx)("span",{className:"self-center",children:(0,P.jsx)(C.Vz5,{className:"icon-sm"})}),(0,P.jsx)("span",{children:(0,P.jsx)(k.Z,T({},M.dropdownCreateLabel))})]})})},A=e=>{let{onClick:t,onClose:r}=e,{0:n,1:s}=(0,w.useState)(null),o=(0,w.useRef)(null),a=(0,w.useRef)(null),{0:i,1:l}=(0,w.useState)(0),c=(0,v.Z)(),u=e=>{f.A.logEvent(p.M.mentionsClickGizmo,{gizmo_id:"create"===e?"create":e.gizmo.id}),"create"!==e&&t(e)};return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)("input",{autoFocus:!0,placeholder:c.formatMessage(M.searchPlaceholder),ref:o,onKeyDown:e=>{let t=a.current?.getResultsLength()??0;if("Escape"!==e.key&&("Backspace"!==e.key||n)||(e.preventDefault(),r()),"Enter"===e.key||"Tab"===e.key){e.preventDefault();let t=a.current?.handleEnterOnIndex(i);if(!t)return;"create"===t?(window.open("/gpts/editor","_blank"),r()):u(t)}if("ArrowDown"===e.key&&i<t-1){e.preventDefault();let t=i+1;a.current?.scrollToItem(t),l(t)}if("ArrowUp"===e.key&&i>0){e.preventDefault();let t=i-1;a.current?.scrollToItem(t),l(t)}},onChange:e=>{s(e.target.value),l(0)},className:"w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),(0,P.jsx)(D,{ref:a,query:n,selectedIdx:i,onSelectGizmo:u})]})};function E(e){let{gizmoResource:t,from:r,showDescription:n,isSelected:s,grayedOut:o}=e,i=!!t.gizmo.tags?.includes(l.U9.FirstParty);return(0,P.jsxs)(O,{className:(0,m.default)(s?"bg-token-main-surface-secondary":"",o&&"opacity-50"),children:[(0,P.jsx)(a.Z,{isFirstParty:i,src:t.gizmo.display.profile_picture_url,className:(0,m.default)("icon-xl h-7 w-7 flex-shrink-0",o&&"grayscale group-hover:grayscale-0")}),(0,P.jsxs)("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[(0,P.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,P.jsx)("span",{className:"shrink-0 truncate font-semibold",children:t.gizmo.display.name}),n&&(0,P.jsx)("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:t.gizmo.display.description})]}),(0,P.jsx)("span",{className:"shrink-0 self-center",children:"recent"===r?(0,P.jsx)(C.T39,{className:"icon-sm"}):(0,P.jsx)(C.qQX,{className:"icon-sm"})})]})]})}function I(e){let{gizmoResource:t,onRemove:r}=e,n=!!t.gizmo.tags?.includes(l.U9.FirstParty);return(0,P.jsxs)("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[(0,P.jsxs)("div",{className:(0,m.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[(0,P.jsx)(a.Z,{isFirstParty:n,src:t.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),(0,P.jsxs)("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[(0,P.jsx)(k.Z,T({},M.talkingTo))," ",(0,P.jsx)("span",{className:"font-semibold text-token-text-secondary",children:t.gizmo.display.name})]})]}),r&&(0,P.jsx)("button",{className:"absolute right-4 text-sm font-bold",onClick:r,children:(0,P.jsx)(C.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}let M=(0,b.vU)({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});t.ZP=e=>{let{onClick:t,onClose:r}=e,n=(0,u.b0)(),o=!!n;return((0,c.n)(()=>{f.A.logEvent(p.M.mentionsOpened,{gizmo_selector_disabled:o})}),o)?(0,P.jsx)(N.W,{clientThreadId:s.Zq,rateLimitInfo:n}):(0,P.jsx)("div",{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:(0,P.jsx)(A,{onClick:t,onClose:r})})}},56756:function(e,t,r){"use strict";r.d(t,{W:function(){return h}});var n=r(16757),s=r(71829),o=r(75172),a=r(69338),i=r(651);let l=e=>{let{actions:t,title:r,description:n,onDismiss:s}=e,l=(0,o.Z)(),c=t?.primaryAction?.text?l.formatMessage(t.primaryAction.text):void 0,u=t?.secondaryAction?.text?l.formatMessage(t.secondaryAction.text):void 0;return(0,i.jsx)(a.j,{title:r,content:n,onDismiss:s,primaryCtaText:c,onPrimaryCtaClick:t?.primaryAction?.onClick??void 0,secondaryCtaText:u,onSecondaryCtaClick:t?.secondaryAction?.onClick??void 0,isElevated:!0})};var c=r(73392),u=r(93951),d=r(9026),f=r(92745),p=r(66290),m=r(99976),x=r(68306),g=r(67437);let h=e=>{let{clientThreadId:t,rateLimitInfo:r,onDismiss:o}=e,{name:a,title:x,call_to_action:h,description:w}=r,k=(0,u.t)(),v=(0,g.fm)(!0),b=(0,d.zd)(),j=(0,f.Ao)(t),C=k?.planType??"unknown",N=b&&"block_reason"in b?b.block_reason:null,P="banner_description",_={type:a||"unknown",location:P,plan_type:C,is_new_conversation:j,is_hard_block:!!b,hard_block_reason:N??""},T=(0,p.Z)(),O=e=>{switch(e){case n.Pt.GET_PLUS:return{text:y.getPlusButton,onClick:()=>{m.A.logRateLimitGetPlusButtonClicked(_),(0,s.MG)(T,"Prompt textarea rate limit banner")}};case n.Pt.NEW_CHAT:return{text:y.newChatButton,onClick:()=>{v({modelId:"",location:P})}}}};(0,c.n)(()=>{m.A.logRateLimitBannerShown(_)});let[z,D]=h??[],L={primaryAction:O(z),secondaryAction:O(D)};return(0,i.jsx)(l,{onDismiss:o,title:x,description:w,actions:L})},y=(0,x.vU)({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}})},73392:function(e,t,r){"use strict";r.d(t,{n:function(){return s}});var n=r(92379);let s=e=>{(0,n.useEffect)(e,[])}}}]);
//# sourceMappingURL=3776.fcc3fdf4236123f5.js.map