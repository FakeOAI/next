"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9385],{42508:function(e,t,r){var i=r(92379);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)({}).hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e}).apply(null,arguments)}t.Z=e=>i.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",viewBox:"0 0 14 14"},e),i.createElement("path",{stroke:"currentColor",strokeWidth:1.2,d:"m10.67 9.087 2.252-6.347c.367-1.033-.63-2.03-1.662-1.662L4.913 3.33A2.6 2.6 0 0 0 3.33 4.913L1.078 11.26c-.367 1.033.63 2.03 1.662 1.662l6.347-2.251a2.6 2.6 0 0 0 1.584-1.584Z",style:{stroke:"currentColor",strokeOpacity:1}}),i.createElement("path",{stroke:"currentColor",d:"M7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",style:{stroke:"currentColor",strokeOpacity:1}}))},39385:function(e,t,r){r.d(t,{$:function(){return y},m:function(){return v}});var i=r(93951),n=r(92745),s=r(86025),a=r(31438),o=r(15913),l=r(19841),c=r(75172),d=r(30478),u=r(4160),m=r(30853),f=r(13490),h=r(95033),g=r(47762),p=r(2118),x=r(651);function v(e){let{clientThreadId:t}=e,r=(0,n.XK)(t),a=(0,i.t)(),{isUnauthenticated:o}=(0,s.u)(),l=(0,n.eV)(t),c=(0,d.V_)();return o?null:(0,x.jsxs)(x.Fragment,{children:[null!=a&&a.canInteractWithGizmos()?(0,x.jsx)(h.Dy,{currentGizmoId:l}):(0,x.jsx)(g.Z,{}),!o&&(0,x.jsx)(u.Z,{activeId:c?void 0:r,isInPopover:!1})]})}function y(e){let{className:t,onNewThread:r,historyDisabled:i}=e,n=(0,c.Z)(),s=(0,o.w$)();return(0,x.jsxs)("div",{className:(0,l.default)("flex justify-between",t),children:[(0,x.jsx)(m.u,{sideOffset:4,label:n.formatMessage({id:"e7SzX9",defaultMessage:"Close sidebar"}),className:"flex",side:"right",children:(0,x.jsx)(p.W,{onClick:()=>{s?a.vm.toggleDesktopNavCollapsed():a.vm.toggleActiveSidebar("mobile-nav")},icon:s?f.BSo:f.Oqj,surfaceContext:"secondary"})}),(0,x.jsx)(m.u,{sideOffset:4,label:n.formatMessage({id:"OFyxqj",defaultMessage:"New chat"}),className:"flex",children:(0,x.jsx)(p.W,{onClick:()=>{s||a.vm.toggleActiveSidebar("mobile-nav"),r()},icon:i?f.Ezi:f.bl$,surfaceContext:"secondary"})})]})}},4160:function(e,t,r){r.d(t,{V:function(){return eh},Z:function(){return em}});var i,n,s=r(2346),a=r(98601),o=r(83963),l=r(42420),c=r(27393),d=r(19841),u=r(95638),m=r(26430),f=r(12654),h=r(44043),g=r(82187),p=r(69262),x=r(157),v=r(21389),y=r(88600),b=r(24098),j=r.n(b),k=r(92379),w=r(68306),M=r(75172),O=r(62984),N=r(15478),C=r(17096),S=r(11550),Z=r(39004),z=r(2721),E=r(53132),P=r(92745),T=r(86025),D=r(43703),G=r(13391),I=r(15913),L=r(3551),_=r(66290),B=r(99976),A=r(61619),R=r(88667),F=r(38482),K=r.n(F),q=r(15174),W=r(651);function Y(e){let{text:t}=e,r=(0,q.Z)(),{0:i,1:n}=(0,k.useState)(!0),{0:s,1:a}=(0,k.useState)(0),o=(0,k.useMemo)(()=>Array.from(t),[t]),l=(0,k.useMemo)(()=>new H().humanTypingDelaysQuertyDistance(o),[o]);return(0,k.useEffect)(()=>{t&&i&&(n(!0),l.forEach((e,t)=>{setTimeout(()=>{r()&&(a(t),t===l.length-1&&n(!1))},e)}))},[l,r,i,t]),(0,W.jsx)(W.Fragment,{children:o.slice(0,s+1).join("")})}class H{qwertyDistance(e,t){var r,i;let n={q:[0,0],w:[1,0],e:[2,0],r:[3,0],t:[4,0],y:[5,0],u:[6,0],i:[7,0],o:[8,0],p:[9,0],a:[0,1],s:[1,1],d:[2,1],f:[3,1],g:[4,1],h:[5,1],j:[6,1],k:[7,1],l:[8,1],z:[0,2],x:[1,2],c:[2,2],v:[3,2],b:[4,2],n:[5,2],m:[6,2]},[s,a]=null!==(r=n[e.toLowerCase()])&&void 0!==r?r:[0,0],[o,l]=null!==(i=n[t.toLowerCase()])&&void 0!==i?i:[0,0];return Math.abs(s-o)+Math.abs(a-l)}humanTypingDelaysQuertyDistance(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,i=0,n=[];for(let s=0;s<e.length;++s){let a;if(s>0){let i=this.qwertyDistance(e[s-1],e[s]);a=0===i?this.getRandomInt(t,Math.floor(r/2)):1===i?this.getRandomInt(t,Math.floor(2*r/3)):this.getRandomInt(t,r)}else a=this.getRandomInt(t,r);n.push(a+i),i+=a}return n}getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}}var V=r(44395),U=r(81522),$=r(30853),X=r(13490),J=r(24740),Q=r(60682),ee=r(24241);let et=K()(()=>Promise.all([r.e(1612),r.e(9695),r.e(6746),r.e(9536),r.e(6044),r.e(890)]).then(r.bind(r,52245)).then(e=>e.GizmoConversationOptionsDropdown),{loadableGenerated:{webpack:()=>[52245]}});function er(e){let{conversation:t,conversationTitle:r,onOpenChange:i}=e,n=(0,M.Z)(),{isUnauthenticated:s}=(0,T.u)(),{eligible:a,markAsViewed:o}=(0,Q.qg)(Q.pm.ArchiveConversationOnboarding),c=(0,P.ff)(t.id),{0:d,1:u}=(0,k.useState)(!1),m=(0,l.NL)(),f=(0,_.Z)();return((0,k.useEffect)(()=>(0,D.LW)(G.n,{deleteChat:e=>{let{serverThreadId:r}=e;r===t.id&&u(!0)},archiveChat:async e=>{let{serverThreadId:r}=e;r===t.id&&(await z.Z.patchConversation(t.id,{is_archived:!0}),(0,ee.aM)(m),R.m9.logEvent("chatgpt_conversation_archived"),B.A.logEvent(A.M.conversationArchived),a&&(J.m.info(n.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),o()),c&&f("/"))}}),[f,m,a,t.id,n,c,o]),s)?null:(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)($.u,{label:n.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:(0,W.jsx)(et,{clientThreadId:t.id,onOpenChange:i,children:(0,W.jsx)("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",children:(0,W.jsx)(X.nWS,{className:"icon-md"})})})}),d&&(0,W.jsx)(eh,{title:r,handleDelete:()=>{z.Z.patchConversation(t.id,{is_visible:!1}).then(()=>{(0,ee.aM)(m),R.m9.logEvent("chatgpt_conversation_deleted"),B.A.logEvent(A.M.conversationDeleted)}),c&&f("/")},onClose:()=>{u(!1)}})]})}function ei(e){let{conversation:t,onClose:r}=e,{0:i,1:n}=(0,k.useState)(t.title),s=(0,l.NL)();function a(){i!==t.title&&(P.tQ.setTitle(t.id,i,P._L.User),B.A.logEvent(A.M.renameThread,{threadId:t.id,content:i}),z.Z.patchConversation(t.id,{title:i}).then(()=>{(0,ee.aM)(s)}))}return(0,W.jsx)("input",{type:"text",value:i,onChange:e=>{n(e.target.value)},onKeyDown:e=>{switch(e.key){case"Escape":r();break;case"Enter":a(),r()}},onBlur:()=>{a(),r()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}function en(e){var t;let{conversation:r,isActive:i,elementRef:n,isPrimaryBackgroundColor:s}=e,a=(0,M.Z)(),{0:o,1:l}=(0,k.useState)(!1),{0:c,1:u}=(0,k.useState)(!1),m=E.p.useState(E.p.selectConversationStatus)(r.id),f=E.p.useStore();(0,k.useEffect)(()=>{if(2===m&&i){let e=setTimeout(()=>{f.setConversationStatus(r.id,null),z.Z.clearConversationStatus(r.id)},500);return()=>clearTimeout(e)}},[m,i,r.id,f]),(0,k.useEffect)(()=>(0,D.LW)(G.n,{editTitle:e=>{let{serverThreadId:t}=e;(t?t===r.id:i)&&l(!0)}}),[r.id,i]);let h=a.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:g,isTypingEffect:p}=function(e,t,r){let{title:i,titleSource:n}=(0,P.XL)(e),{0:s,1:a}=(0,k.useState)(!1),o=null!=i?i:t,l=(0,k.useRef)(o);return(0,k.useEffect)(()=>(r&&n===P._L.Generated&&o!==l.current&&a(!0),()=>{l.current=o}),[r,o,n]),{isTypingEffect:s,resolvedTitle:o}}(r.id,r.title,i),x=(0,I.w$)(),v=p&&i&&x,{data:y}=(0,Z.b9)(null!==(t=r.conversation_template_id)&&void 0!==t?t:void 0),b=(0,_.Z)();return(0,W.jsxs)("div",{className:(0,d.default)("group relative rounded-lg active:opacity-90",i?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",c&&!i&&"bg-token-sidebar-surface-secondary"),children:[(0,W.jsx)(j(),{href:(0,L.ZV)(r.id,y),onClick:e=>{if(!e.metaKey&&!e.ctrlKey&&(e.preventDefault(),!i)){var t;t=r.id,U.hx.abortAllRequests(),B.A.logEvent(A.M.loadThread,{threadId:t}),b((0,L.ZV)(t,y))}},onDoubleClick:()=>{l(!0)},ref:n,className:"flex items-center gap-2 p-2",children:(0,W.jsxs)("div",{className:"relative grow overflow-hidden whitespace-nowrap",dir:"auto",children:[v?(0,W.jsx)(Y,{text:g||h}):g||h,(0,W.jsx)("div",{className:(0,d.default)("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",!!s&&(i?"from-token-sidebar-surface-secondary":!i&&c?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary"),!s&&(i?"from-token-sidebar-surface-secondary":!i&&c?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary"),{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":s&&!i&&!c,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!s&&!i&&!c,"w-10 from-60%":i||c,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!i&&!c})})]})}),o?(0,W.jsx)("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:(0,W.jsx)(ei,{conversation:r,onClose:()=>{l(!1)}})}):i||1!==m?i||2!==m?(0,W.jsx)("div",{className:(0,d.default)("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",i||c?"flex":"hidden can-hover:group-hover:flex"),children:(0,W.jsx)(er,{conversation:r,conversationTitle:null!=g?g:r.title,onOpenChange:e=>{u(e),e&&B.A.logEvent(A.M.conversationHistoryItemOpenMenu,{conversationId:r.id})}})}):(0,W.jsx)("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:(0,W.jsx)("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):(0,W.jsx)("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:(0,W.jsx)(V.O,{size:18})})]})}var es=r(97537),ea=r(59144),eo=r(24434);function el(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function ec(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?el(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):el(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let ed=(0,w.vU)({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"},unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"},showMoreButton:{id:"history.showMoreButton",defaultMessage:"Show more"},deleteModalTitle:{id:"history.deleteModalTitle",defaultMessage:"Delete chat?"},deleteModalBody:{id:"history.deleteModalBody",defaultMessage:"This will delete {title}."},deleteModalConfirm:{id:"history.deleteModalConfirm",defaultMessage:"Delete"},deleteModalCancel:{id:"history.deleteModalCancel",defaultMessage:"Cancel"}}),eu={initial:e=>{let{isNew:t}=e;return t?{opacity:0,height:0,overflow:"hidden"}:{}},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};var em=k.memo(function(e){let{activeId:t,isPrimaryBackgroundColor:r,isInPopover:i}=e,n=(0,l.NL)(),s=(0,M.Z)(),{0:a,1:o}=(0,k.useState)(!1),{0:b,1:j}=(0,k.useState)(0),w=(0,C.Z)(),{conversations:N,hasNextPage:Z,fetchNextPage:z,isLoading:E,isFetchingNextPage:P,isError:T}=(0,ee.MO)(),D=(0,k.useRef)(null),G=(0,k.useCallback)(e=>{var t;E||null==e||(null===(t=D.current)||void 0===t||t.disconnect(),D.current=new IntersectionObserver(e=>{e[0].isIntersecting&&Z&&z()}),D.current.observe(e))},[E,Z,z]);(0,k.useEffect)(()=>()=>{var e;null===(e=D.current)||void 0===e||e.disconnect()},[]);let I=function(e){let t=(0,k.useRef)(),r=(0,k.useRef)();return((0,k.useEffect)(()=>{t.current=r.current,r.current=e},[e]),e===r.current)?t.current:r.current}(N);(0,k.useEffect)(()=>{w(()=>{j(b+1)},(0,m.Z)((0,f.Z)(),Date.now())+1e3)},[b,w]);let L=0===N.length;(0,k.useEffect)(()=>{if(!L){var e;null===(e=(0,c.Ef)({namespace:c.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_history_items")}},[L]);let _=(0,k.useMemo)(()=>N.reduce((e,t)=>{var r,i;let n=new Date(null!==(r=null!==(i=t.update_time)&&void 0!==i?i:t.create_time)&&void 0!==r?r:0),a=(0,u.Z)(new Date,n);if(0===a)e.recent.today.items.push(t);else if(a<=1)e.recent.yesterday.items.push(t);else if(a<=7)e.recent.lastSeven.items.push(t);else if(a<=30)e.recent.lastThirty.items.push(t);else if((0,p.Z)(n)){let r=(0,g.Z)(n),i=(0,h.Z)(n),a="".concat(r,"-").concat(i);e.dynamicMonths[a]?e.dynamicMonths[a].items.push(t):e.dynamicMonths[a]={label:s.formatDate(n,{month:"long"}),items:[t]}}else{let r=(0,g.Z)(n),i="".concat(r,"-");e.dynamicYears[i]?e.dynamicYears[i].items.push(t):e.dynamicYears[i]={label:s.formatDate(n,{year:"numeric"}),items:[t]}}return e},{recent:{today:{label:(0,W.jsx)(O.Z,ec({},ed.historyBucketToday)),items:[]},yesterday:{label:(0,W.jsx)(O.Z,ec({},ed.historyBucketYesterday)),items:[]},lastSeven:{label:(0,W.jsx)(O.Z,ec({},ed.historyBucketLastSeven)),items:[]},lastThirty:{label:(0,W.jsx)(O.Z,ec({},ed.historyBucketLastThirty)),items:[]}},dynamicMonths:{},dynamicYears:{}}),[b,N]);return(0,W.jsxs)(ef,{$centered:E||T||L,children:[L&&E&&(0,W.jsx)(es.Z,{className:"m-auto"}),L&&T&&(0,W.jsxs)("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[(0,W.jsx)(O.Z,ec({},ed.unableToLoadHistory)),!a&&(0,W.jsx)("div",{className:"mt-1",children:(0,W.jsx)(S.z,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{o(!0),(0,ee.aM)(n)},children:(0,W.jsx)(O.Z,ec({},ed.retryButton))})})]}),!E&&!L&&(0,W.jsx)("div",{children:(0,W.jsx)(x.S,{id:i?"history-popover":"history-sidebar",children:(0,W.jsx)(v.M,{initial:!1,children:[_.recent,_.dynamicMonths,_.dynamicYears].flatMap((e,i)=>(0,W.jsx)(k.Fragment,{children:Object.entries(e).map((e,n)=>{let[s,{items:a,label:o}]=e;if("today"!==s&&!a.length)return null;let l=!!a.find(e=>{var t;return N.length>0&&e.id===(null===(t=N[0])||void 0===t?void 0:t.id)});return a.length>0&&(0,W.jsxs)(y.E.div,{className:(0,d.default)(r&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5 empty:mt-0 empty:hidden"),layout:"position",initial:{height:0,opacity:1,position:"relative"},animate:{height:"auto",opacity:1,transition:{duration:.2,ease:"easeIn"}},children:[(0,W.jsx)(y.E.div,{className:"sticky top-0 z-20 bg-token-sidebar-surface-primary",layout:"position",children:(0,W.jsx)("span",{className:"flex h-9 items-center",children:(0,W.jsx)(eg,{children:o})})},"title-".concat(s)),(0,W.jsx)("ol",{children:a.map((e,i)=>{var n;let a=t===e.id,o=null==I?void 0:I.find(t=>{let{id:r}=t;return r===e.id}),c=Z&&(null===(n=N[N.length-5-1])||void 0===n?void 0:n.id)===e.id?G:void 0;return(0,W.jsx)(y.E.li,{className:(0,d.default)("relative",l&&0===i?"z-[15]":""),layout:"position",custom:{isNew:!o},variants:eu,initial:"initial",animate:"animate",exit:"exit",children:(0,W.jsx)(en,{isPrimaryBackgroundColor:r,conversation:e,isActive:a,elementRef:c})},"history-item-".concat(e.id,"-").concat(s))})})]},"".concat(s,"-").concat(i,"-").concat(n))})},"category-".concat(i)))})})}),P&&(0,W.jsx)("div",{className:"m-4 mb-5 flex justify-center",children:(0,W.jsx)(es.Z,{})})]})});let ef=N.Z.div(i||(i=(0,s.Z)(["flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5\n",""])),e=>{let{$centered:t}=e;return t&&"h-full justify-center items-center empty:hidden"});function eh(e){let{title:t,handleDelete:r,onClose:i}=e,n=(0,M.Z)(),s=(0,o.ll)();return(0,W.jsxs)(eo.Z,{isOpen:!0,onClose:i,type:"success",title:n.formatMessage(ed.deleteModalTitle),primaryButton:(0,W.jsx)(ea.Z.Button,{title:n.formatMessage(ed.deleteModalConfirm),color:"danger",onClick:()=>{r(),i()}}),secondaryButton:(0,W.jsx)(ea.Z.Button,{title:n.formatMessage(ed.deleteModalCancel),color:"secondary",onClick:i}),children:[(0,W.jsx)(O.Z,ec(ec({},ed.deleteModalBody),{},{values:{title:(0,W.jsx)("strong",{children:t})}})),s&&(0,W.jsx)("div",{className:"mt-2 text-sm text-token-text-tertiary",children:(0,W.jsx)(O.Z,{id:"history.deleteModalMemoryDisclaimer",defaultMessage:"To clear any memories from this chat, visit your <link>settings</link>.",values:{link:e=>(0,W.jsx)(j(),{href:"#settings/Personalization",shallow:!0,className:"underline",children:e})}})})]})}let eg=N.Z.h3(n||(n=(0,s.Z)(["pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-secondary"])))},95033:function(e,t,r){r.d(t,{Dy:function(){return H},eY:function(){return q},xL:function(){return $}});var i,n=r(98601),s=r(30853),a=r(12128),o=r(25899),l=r(39004),c=r(99555),d=r(10080),u=r(93951),m=r(86025),f=r(31438),h=r(3551),g=r(42420),p=r(58695),x=r(13490),v=r(66290),y=r(99976),b=r(61619),j=r(27393),k=r(19841),w=r(88600),M=r(14015),O=r.n(M),N=r(38482),C=r.n(N),S=r(24098),Z=r.n(S),z=r(92379),E=r(62984),P=r(75172),T=r(68306),D=r(98095),G=r(34643),I=r(75372),L=r(15972),_=r(47762),B=r(651);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let F=C()(()=>Promise.all([r.e(6746),r.e(9536),r.e(9294)]).then(r.bind(r,52245)).then(e=>e.GizmoKeepInSidebarMenuItem),{loadableGenerated:{webpack:()=>[52245]}}),K=((i={})[i.Keep=0]="Keep",i[i.Recents=1]="Recents",i);function q(e){let{data:{gizmos:t}={}}=(0,l.Wz)();return!!t&&t.some(t=>t.resource.gizmo.id===e)}function W(e){let{isActive:t,isNewConversation:r}=e,i=(0,g.NL)(),n=(0,v.Z)();return(0,B.jsx)("div",{className:"bg-token-sidebar-surface-primary pt-0",children:(0,B.jsx)(U,{gizmo:void 0,isActive:t,onClick:e=>{(0,m.P)((0,p.y_)(i))&&!r&&(e.preventDefault(),(0,L.Xl)(n))}})})}function Y(e){let{gizmo:t,currentGizmoId:r}=e,i=(0,z.useRef)(!1),n=(0,f.tN)(),{0:s,1:a}=(0,z.useState)(!1),{itemsLeft:o,listItems:l,needsToCollapseItems:c}=function(e,t){var r,i,n,s,a,o;let l=O()(e,e=>e.flair.kind),c=[...null!==(r=null===(i=l[d.JK.FirstParty])||void 0===i?void 0:i.map(e=>{let{resource:t}=e;return{gizmo:t,section:K.Keep}}))&&void 0!==r?r:[],...null!==(n=null===(s=l[d.JK.SidebarKeep])||void 0===s?void 0:s.map(e=>{let{resource:t}=e;return{gizmo:t,section:K.Keep}}))&&void 0!==n?n:[],...null!==(a=null===(o=l[d.JK.Recent])||void 0===o?void 0:o.slice(0,2).map(e=>{let{resource:t}=e;return{gizmo:t,section:K.Recents}}))&&void 0!==a?a:[]],u=c.length>5,m=u&&!t&&c.length>4?c.slice(0,4):c;return{listItems:[...m.filter(e=>{let{section:t}=e;return t===K.Keep}),...m.filter(e=>{let{section:t}=e;return t===K.Recents})],itemsLeft:c.length-m.length,needsToCollapseItems:u}}(t,s);return(0,z.useEffect)(()=>{if(l.length>0&&!i.current){var e;null===(e=(0,j.Ef)({namespace:j.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_gizmo_sidebar"),i.current=!0}},[l]),(0,B.jsxs)("div",{children:[l.map((e,t)=>{let{gizmo:i,section:n}=e;return(0,B.jsxs)(z.Fragment,{children:[t>1&&n!==l[t-1].section&&(0,B.jsx)("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),(0,B.jsx)(U,{gizmo:i,isActive:i.gizmo.id===r,section:n},i.gizmo.id)]},t)}),c?(0,B.jsxs)("button",{onClick:()=>{a(!s)},className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[(0,B.jsx)("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:(0,B.jsx)(x.nWS,{className:"icon-md text-token-text-primary"})}),(0,B.jsx)("div",{className:"flex grow items-center gap-1",children:s?(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(E.Z,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),(0,B.jsx)(x.r0F,{className:"icon-xs"})]}):(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(E.Z,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:o}}),(0,B.jsx)(x.Tg4,{className:"icon-xs"})]})})]}):null,(0,B.jsx)(G.Z,{children:(0,B.jsx)(w.E.div,{whileTap:{scale:.98},children:(0,B.jsx)(Z(),{href:(0,h.cy)(),onClick:()=>{"mobile-nav"===n.activeSidebar&&f.vm.toggleActiveSidebar("mobile-nav")},children:(0,B.jsx)(I.f,{icon:x.frp,children:(0,B.jsx)(E.Z,R({},X.exploreStoreEnabled))})},"explore")})})]})}function H(e){let{currentGizmoId:t}=e,{data:{gizmos:r}={}}=(0,l.Wz)();return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(W,{isActive:void 0===t,isNewConversation:!0}),(0,B.jsx)(_.Z,{}),null!=r?(0,B.jsx)(Y,{gizmo:r,currentGizmoId:t}):null]})}function V(e){let{gizmo:t,isOpen:r,setIsOpen:i,section:n}=e,s=(0,g.NL)();return(0,B.jsxs)(D.d,{open:r,onOpenChange:i,triggerButton:(0,B.jsx)("button",{className:(0,k.default)("flex text-token-text-secondary hover:text-token-text-primary",r?"":"invisible group-hover:visible"),children:(0,B.jsx)(x.nWS,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[n===K.Recents&&(0,B.jsx)(D.Z.Item,{onClick:async()=>{await c.U.updateGizmoSidebar(s,t.gizmo.id,"keep")},children:(0,B.jsx)(E.Z,R({},X.keepInSidebar))}),(0,B.jsx)(F,{gizmoResource:t})]})}function U(e){var t,r;let i;let{gizmo:n,historyDisabled:c,section:m,onClick:f}=e,h=(0,P.Z)(),{0:g,1:p}=(0,z.useState)(!1),{0:v,1:y}=(0,z.useState)(!1),b=(0,u.t)(),j=!!(null==n||null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));if(null!=n)i=n.gizmo.display.name||o.zf;else{if(null==b)return null;i=c?h.formatMessage(X.clearChat):b.canInteractWithGizmos()?o.Dd:h.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return(0,B.jsx)(w.E.div,{whileTap:{scale:.98},onMouseEnter:()=>{y(!0)},onMouseLeave:()=>{y(!1)},children:(0,B.jsx)($,{loggingGizmoId:null!==(r=null==n?void 0:n.gizmo.id)&&void 0!==r?r:"primary",href:null!=n?(0,l.m_)(n):"/",onClick:f,icon:(0,B.jsx)(a.Z,{isFirstParty:null==n||j,src:null==n?void 0:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:g,label:i,hoverRightIcon:(0,B.jsxs)("div",{className:"flex gap-2",children:[(v||g)&&null!=n&&(0,B.jsx)("div",{className:"text-token-text-tertiary",onClick:e=>{e.preventDefault()},children:(0,B.jsx)(V,{gizmo:n,isOpen:g,setIsOpen:p,section:m})}),(0,B.jsx)(s.u,{side:"right",label:h.formatMessage(c?X.clearChat:X.newChat),className:"flex items-center",children:(0,B.jsx)("button",{className:g?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:c?(0,B.jsx)(x.Ezi,{className:"icon-md"}):(0,B.jsx)(x.bl$,{className:"icon-md"})})})]})})})}function $(e){let{href:t,icon:r,label:i,hoverRightIcon:n,isMenuOpen:s,loggingGizmoId:a,onClick:o,target:l}=e;return(0,B.jsxs)(Z(),{href:t,target:l,shallow:!0,className:(0,k.default)("group flex h-10 items-center gap-2.5 rounded-lg bg-token-sidebar-surface-primary px-2 font-normal",s?"bg-token-main-surface-primary":"hover:bg-token-sidebar-surface-secondary"),onClick:e=>{y.A.logNewChatButtonClicked({location:"Sidebar gizmo list",gizmo_id:a}),y.A.logEvent(b.M.sidebarClickGizmo,{gizmo_id:a}),null==o||o(e)},children:[r,(0,B.jsx)("div",{className:"grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",children:i}),n]})}let X=(0,T.vU)({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}})},47762:function(e,t,r){r.d(t,{Z:function(){return j}});var i=r(13490),n=r(95033),s=r(60682),a=r(98095),o=r(40833),l=r(34643),c=r(31438),d=r(45120),u=r(19841),m=r(88600),f=r(92379),h=r(62984),g=r(42508),p=r(651);function x(){let e=(0,s.qg)(s.pm.SonicSidebar),{0:t,1:r}=(0,f.useState)(!1);return e.isLoading||!e.eligible?null:(0,p.jsx)(m.E.div,{className:"group pb-0",whileTap:{scale:.98},children:(0,p.jsx)(v,{children:(0,p.jsx)(n.xL,{href:"/search",target:"_blank",icon:(0,p.jsx)("div",{className:(0,u.default)("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:(0,p.jsx)(g.Z,{})}),label:"SearchGPT",hoverRightIcon:(0,p.jsxs)("div",{className:"flex gap-3",children:[(0,p.jsx)(y,{isOpen:t,setIsOpen:r,onDismiss:()=>e.markAsViewed()}),(0,p.jsx)(i.Pfi,{className:(0,u.default)("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function v(e){let{children:t}=e,r=function(){let e=(0,c.xH)(),t=(0,s.qg)(s.pm.hasSeenSncSidebarTooltip),r=(0,l.c)(),i=(0,c.ss)(),{activeModals:n}=(0,c.tN)(),a=(0,d.AH)("717266490").layer.get("optimize_initial_modals",!1);return!t.isLoading&&t.eligible&&!r&&0===n.size&&!e&&(!a||!i)}(),i=(0,s.qg)(s.pm.hasSeenSncSidebarTooltip);return r?(0,p.jsx)(o.v,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:i.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:(0,p.jsx)("div",{className:"w-full",children:t})}):(0,p.jsx)(p.Fragment,{children:t})}function y(e){let{isOpen:t,setIsOpen:r,onDismiss:n}=e;return(0,p.jsx)(a.d,{open:t,onOpenChange:r,triggerButton:(0,p.jsx)("button",{className:(0,u.default)("flex text-token-text-tertiary",t?"":"invisible group-hover:visible"),onClick:e=>{e.preventDefault()},children:(0,p.jsx)(i.nWS,{className:"icon-md"})}),children:(0,p.jsx)(a.Z.Item,{onClick:e=>{e.preventDefault(),n()},children:(0,p.jsx)(h.Z,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}var b=r(88667);function j(){return(0,b.sB)("114024").value?(0,p.jsx)(x,{}):null}},34643:function(e,t,r){r.d(t,{Z:function(){return v},c:function(){return x}});var i=r(98601),n=r(93951),s=r(31438),a=r(99976),o=r(61619),l=r(45120),c=r(92379),d=r(75172),u=r(62984),m=r(68306),f=r(60682),h=r(40833),g=r(651);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,i)}return r}function x(){let{activeModals:e}=(0,s.tN)(),t=(0,n.t)(),r=(0,f.qg)(f.pm.ExploreGPTs),i=(0,f.qg)(f.pm.ExploreGPTsNewNux),d=(0,s.ss)(),u=(0,s.xH)(),m=(0,l.AH)("717266490").layer.get("optimize_initial_modals",!1),h=r.eligible&&!r.isLoading&&!u,g=i.eligible&&!i.isLoading&&!u&&(!m||!d);return e.size>0&&(g=!1),!h&&null!=t&&t.hasPlusFeatures()&&(g=!1),(0,c.useEffect)(()=>{g&&a.A.logEvent(o.M.storeDisplayNewNux)},[g]),g}function v(e){let{children:t}=e,r=x(),n=(0,d.Z)(),s=(0,f.qg)(f.pm.ExploreGPTsNewNux);return r?(0,g.jsx)(h.v,{side:"right",show:!0,title:n.formatMessage(y.exploreGPTsTitle),onDismiss:s.markAsViewed,sideOffset:20,theme:"bright",description:(0,g.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},y.exploreGPTsDescriptionNewNux)),children:t}):(0,g.jsx)(g.Fragment,{children:t})}let y=(0,m.vU)({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}})},17096:function(e,t,r){r.d(t,{Z:function(){return n}});var i=r(92379);function n(){let e=(0,i.useRef)([]),t=(0,i.useRef)((t,r)=>{let i=setTimeout(t,r);return e.current.push(i),i});return(0,i.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}}}]);
//# sourceMappingURL=9385-4c32d2b3fe209b84.js.map