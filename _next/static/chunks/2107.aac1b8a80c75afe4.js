(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2107],{34598:function(e,t,r){var n=r(85036);e.exports=function(e,t){return!!(null==e?0:e.length)&&n(e,t,0)>-1}},60510:function(e){e.exports=function(e,t,r){for(var n=-1,o=null==e?0:e.length;++n<o;)if(r(t,e[n]))return!0;return!1}},85036:function(e,t,r){var n=r(83663),o=r(18826),s=r(31154);e.exports=function(e,t,r){return t==t?s(e,t,r):n(e,o,r)}},18826:function(e){e.exports=function(e){return e!=e}},18296:function(e,t,r){var n=r(25561),o=r(34598),s=r(60510),i=r(8529),l=r(33295),a=r(33005);e.exports=function(e,t,r){var c=-1,u=o,d=e.length,f=!0,p=[],m=p;if(r)f=!1,u=s;else if(d>=200){var x=t?null:l(e);if(x)return a(x);f=!1,u=i,m=new n}else m=t?[]:p;e:for(;++c<d;){var g=e[c],h=t?t(g):g;if(g=r||0!==g?g:0,f&&h==h){for(var v=m.length;v--;)if(m[v]===h)continue e;t&&m.push(h),p.push(g)}else u(m,h,r)||(m!==p&&m.push(h),p.push(g))}return p}},33295:function(e,t,r){var n=r(353),o=r(91530),s=r(33005),i=n&&1/s(new n([,-0]))[1]==1/0?function(e){return new n(e)}:o;e.exports=i},31154:function(e){e.exports=function(e,t,r){for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return -1}},96594:function(e,t,r){var n=r(61757),o=r(18296);e.exports=function(e,t){return e&&e.length?o(e,n(t,2)):[]}},55904:function(e,t,r){"use strict";r.d(t,{r:function(){return L},wV:function(){return Z}});var n,o=r(94521),s=r(41141),i=r(85734),l=r(50684),a=r(83252),c=r(82823),u=r(16645),d=r(63424),f=r(25257),p=r(98506),m=r(93747),x=r(15236),g=r(19841),h=r(96594),v=r.n(h),y=r(40319),w=r.n(y),k=r(92379),b=r(62984),j=r(75172),C=r(68306),N=r(74091),P=r(3445),_=r(69581),T=r(651);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach(function(t){(0,o.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let D=N.Z.div(n||(n=(0,s.Z)(["group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold hover:bg-token-main-surface-secondary text-sm text-token-text-primary"])));function L(){let{data:e,isLoading:t}=(0,c.Fi)({cutId:"recent",limit:8}),{data:r,isLoading:n}=(0,c.Dq)();return{isLoading:t||n,recent:e,pinned:r}}let A=(0,k.forwardRef)(function(e,t){let{query:r,onSelectGizmo:n,selectedIdx:o}=e,s=(0,p.oc)(),i=(0,k.useRef)([]),{isLoading:a,recent:c,pinned:d}=L();(0,k.useImperativeHandle)(t,()=>({handleEnterOnIndex:e=>{if(!m[e])return e<f.length?f[e].resource:"create"},getResultsLength:()=>f.length+1,scrollToItem:e=>{let t=i.current[e];t&&t.scrollIntoView({behavior:"instant",block:"nearest"})}}));let f=[];if(a)return(0,T.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,T.jsx)(l.Z,{})});c&&f.push(...c.pages.flatMap(e=>e.list.items).map(e=>({resource:e.resource,from:"recent"}))),d&&f.push(...d.items.map(e=>({resource:e,from:"pinned"})));let m=(f=v()(f,e=>e.resource.gizmo.id)).map(e=>{var t;return null===(t=e.resource.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.WorkspaceDisabled)});return r&&""!==r&&(f=f.filter(e=>{var t,n;return(e.resource.gizmo.display.name.toLowerCase()+(null===(t=e.resource.gizmo.display.description)||void 0===t?void 0:t.toLowerCase())+(null===(n=e.resource.gizmo.author.display_name)||void 0===n?void 0:n.toLowerCase())).includes(null==r?void 0:r.toLowerCase())})),(0,T.jsxs)("div",{className:"max-h-40 overflow-y-auto",children:[f.map((e,t)=>(0,T.jsx)("div",{ref:e=>{i.current[t]=e},tabIndex:t,onClick:()=>{m[t]||n(e.resource)},children:(0,T.jsx)(M,{gizmoResource:e.resource,from:e.from,showDescription:s,isSelected:o===t,grayedOut:m[t]})},e.resource.gizmo.id)),(0,T.jsx)("div",{ref:e=>{i.current[f.length]=e},tabIndex:f.length,onClick:()=>{n("create")},children:(0,T.jsx)(E,{isSelected:o===f.length})},"create")]})}),E=e=>{let{isSelected:t}=e;return(0,T.jsx)(D,{className:t?"bg-token-main-surface-secondary":"",children:(0,T.jsxs)(w(),{href:"/gpts/editor",target:"_blank",className:"flex flex-row space-x-2",children:[(0,T.jsx)("span",{className:"self-center",children:(0,T.jsx)(P.Vz5,{className:"icon-sm"})}),(0,T.jsx)("span",{children:(0,T.jsx)(b.Z,z({},S.dropdownCreateLabel))})]})})},I=e=>{let{onClick:t,onClose:r}=e,{0:n,1:o}=(0,k.useState)(null),s=(0,k.useRef)(null),i=(0,k.useRef)(null),{0:l,1:a}=(0,k.useState)(0),c=(0,j.Z)(),u=e=>{m.A.logEvent(x.M.mentionsClickGizmo,{gizmo_id:"create"===e?"create":e.gizmo.id}),"create"!==e&&t(e)};return(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("input",{autoFocus:!0,placeholder:c.formatMessage(S.searchPlaceholder),ref:s,onKeyDown:e=>{var t,o,s,c,d;let f=null!==(t=null===(o=i.current)||void 0===o?void 0:o.getResultsLength())&&void 0!==t?t:0;if("Escape"!==e.key&&("Backspace"!==e.key||n)||(e.preventDefault(),r()),"Enter"===e.key||"Tab"===e.key){e.preventDefault();let t=null===(s=i.current)||void 0===s?void 0:s.handleEnterOnIndex(l);if(!t)return;"create"===t?(window.open("/gpts/editor","_blank"),r()):u(t)}if("ArrowDown"===e.key&&l<f-1){e.preventDefault();let t=l+1;null===(c=i.current)||void 0===c||c.scrollToItem(t),a(t)}if("ArrowUp"===e.key&&l>0){e.preventDefault();let t=l-1;null===(d=i.current)||void 0===d||d.scrollToItem(t),a(t)}},onChange:e=>{o(e.target.value),a(0)},className:"mb-1 w-full border-0 bg-token-main-surface-primary p-2 text-sm focus:outline-none"}),(0,T.jsx)(A,{ref:i,query:n,selectedIdx:l,onSelectGizmo:u})]})};function M(e){var t;let{gizmoResource:r,from:n,showDescription:o,isSelected:s,grayedOut:i}=e,l=!!(null===(t=r.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.FirstParty));return(0,T.jsxs)(D,{className:(0,g.default)(s?"bg-token-main-surface-secondary":"",i&&"opacity-50"),children:[(0,T.jsx)(a.Z,{isFirstParty:l,src:r.gizmo.display.profile_picture_url,className:(0,g.default)("icon-xl h-7 w-7 flex-shrink-0",i&&"grayscale group-hover:grayscale-0")}),(0,T.jsxs)("div",{className:"flex h-fit grow flex-row justify-between space-x-2 overflow-hidden text-ellipsis whitespace-nowrap",children:[(0,T.jsxs)("div",{className:"flex flex-row space-x-2",children:[(0,T.jsx)("span",{className:"shrink-0 truncate",children:r.gizmo.display.name}),o&&(0,T.jsx)("span",{className:"flex-grow truncate text-sm text-token-text-tertiary sm:max-w-xs lg:max-w-md",children:r.gizmo.display.description})]}),(0,T.jsx)("span",{className:"shrink-0 self-center",children:"recent"===n?(0,T.jsx)(P.T39,{className:"icon-sm"}):(0,T.jsx)(P.qQX,{className:"icon-sm"})})]})]})}function Z(e){var t;let{gizmoResource:r,onRemove:n}=e,o=!!(null===(t=r.gizmo.tags)||void 0===t?void 0:t.includes(u.U9.FirstParty));return(0,T.jsxs)("div",{className:"flex w-full flex-row items-center rounded-t-2xl bg-token-main-surface-secondary px-2 py-1",children:[(0,T.jsxs)("div",{className:(0,g.default)("group flex h-10 items-center gap-2 rounded-lg px-2 font-semibold"),children:[(0,T.jsx)(a.Z,{isFirstParty:o,src:r.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),(0,T.jsxs)("div",{className:"space-x-2 overflow-hidden text-ellipsis text-sm text-token-text-tertiary",children:[(0,T.jsx)(b.Z,z({},S.talkingTo))," ",(0,T.jsx)("span",{className:"font-semibold text-token-text-secondary",children:r.gizmo.display.name})]})]}),n&&(0,T.jsx)("button",{className:"absolute right-4 text-sm font-bold",onClick:n,children:(0,T.jsx)(P.tPq,{className:"icon-md text-token-text-secondary hover:text-token-text-primary"})})]})}let S=(0,C.vU)({talkingTo:{id:"TaggingDropdown.talkingTo",defaultMessage:"Talking to"},dropdownCreateLabel:{id:"TaggingDropdown.dropdownCreateLabel",defaultMessage:"Create a GPT"},searchPlaceholder:{id:"TaggingDropdown.searchPlaceholder",defaultMessage:"Search recent and pinned GPTs"}});t.ZP=e=>{let{onClick:t,onClose:r}=e,n=(0,f.b0)(),o=!!n;return((0,d.n)(()=>{m.A.logEvent(x.M.mentionsOpened,{gizmo_selector_disabled:o})}),o)?(0,T.jsx)(_.W,{clientThreadId:i.Zq,rateLimitInfo:n}):(0,T.jsx)("div",{onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||r()},className:"popover rounded-2xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-lg",children:(0,T.jsx)(I,{onClick:t,onClose:r})})}},69581:function(e,t,r){"use strict";r.d(t,{W:function(){return g}});var n=r(85734),o=r(44254),s=r(75172),i=r(52825),l=r(651);let a=e=>{var t,r,n,o,a,c;let{actions:u,title:d,description:f,onDismiss:p}=e,m=(0,s.Z)(),x=null!=u&&null!==(t=u.primaryAction)&&void 0!==t&&t.text?m.formatMessage(u.primaryAction.text):void 0,g=null!=u&&null!==(r=u.secondaryAction)&&void 0!==r&&r.text?m.formatMessage(u.secondaryAction.text):void 0;return(0,l.jsx)(i.j,{title:d,content:f,onDismiss:p,primaryCtaText:x,onPrimaryCtaClick:null!==(n=null==u||null===(o=u.primaryAction)||void 0===o?void 0:o.onClick)&&void 0!==n?n:void 0,secondaryCtaText:g,onSecondaryCtaClick:null!==(a=null==u||null===(c=u.secondaryAction)||void 0===c?void 0:c.onClick)&&void 0!==a?a:void 0,isElevated:!0})};var c=r(63424),u=r(4702),d=r(25257),f=r(86021),p=r(93747),m=r(68306),x=r(55059);let g=e=>{var t;let{clientThreadId:r,rateLimitInfo:s,onDismiss:i}=e,{name:m,title:g,call_to_action:v,description:y}=s,w=(0,u.t)(),k=(0,x.fm)(!0),b=(0,d.zd)(),j=(0,f.Ao)(r),C=null!==(t=null==w?void 0:w.planType)&&void 0!==t?t:"unknown",N=b&&"block_reason"in b?b.block_reason:null,P="banner_description",_={type:m||"unknown",location:P,plan_type:C,is_new_conversation:j,is_hard_block:!!b,hard_block_reason:null!=N?N:""},T=e=>{switch(e){case n.Pt.GET_PLUS:return{text:h.getPlusButton,onClick:()=>{p.A.logRateLimitGetPlusButtonClicked(_),(0,o.MG)("Prompt textarea rate limit banner")}};case n.Pt.NEW_CHAT:return{text:h.newChatButton,onClick:()=>{k({modelId:"",location:P})}}}};(0,c.n)(()=>{p.A.logRateLimitBannerShown(_)});let[O,z]=null!=v?v:[],D={primaryAction:T(O),secondaryAction:T(z)};return(0,l.jsx)(a,{onDismiss:i,title:g,description:y,actions:D})},h=(0,m.vU)({getPlusButton:{id:"TeyLcp",defaultMessage:"Get Plus"},newChatButton:{id:"7OvnJ5",defaultMessage:"New chat"}})},63424:function(e,t,r){"use strict";r.d(t,{n:function(){return o}});var n=r(92379);let o=e=>{(0,n.useEffect)(e,[])}}}]);
//# sourceMappingURL=2107.aac1b8a80c75afe4.js.map