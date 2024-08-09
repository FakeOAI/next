"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4160],{4160:function(e,t,r){r.d(t,{V:function(){return ex},Z:function(){return ev}});var o,a,n=r(2346),s=r(98601),i=r(31438),l=r(83963),c=r(42420),d=r(27393),u=r(19841),h=r(95638),f=r(26430),m=r(12654),g=r(44043),y=r(82187),p=r(69262),v=r(157),b=r(21389),x=r(88600),k=r(24098),M=r.n(k),j=r(92379),C=r(68306),w=r(75172),S=r(62984),B=r(15478),O=r(17096),T=r(11550),D=r(39004),Z=r(2721),E=r(53132),A=r(92745),N=r(86025),P=r(43703),L=r(13391),I=r(15913),R=r(3551),_=r(66290),K=r(99976),z=r(61619),Q=r(88667),Y=r(38482),F=r.n(Y),U=r(15174),H=r(651);function V(e){let{text:t}=e,r=(0,U.Z)(),{0:o,1:a}=(0,j.useState)(!0),{0:n,1:s}=(0,j.useState)(0),i=(0,j.useMemo)(()=>Array.from(t),[t]),l=(0,j.useMemo)(()=>new G().humanTypingDelaysQuertyDistance(i),[i]);return(0,j.useEffect)(()=>{t&&o&&(a(!0),l.forEach((e,t)=>{setTimeout(()=>{r()&&(s(t),t===l.length-1&&a(!1))},e)}))},[l,r,o,t]),(0,H.jsx)(H.Fragment,{children:i.slice(0,n+1).join("")})}class G{qwertyDistance(e,t){var r,o;let a={q:[0,0],w:[1,0],e:[2,0],r:[3,0],t:[4,0],y:[5,0],u:[6,0],i:[7,0],o:[8,0],p:[9,0],a:[0,1],s:[1,1],d:[2,1],f:[3,1],g:[4,1],h:[5,1],j:[6,1],k:[7,1],l:[8,1],z:[0,2],x:[1,2],c:[2,2],v:[3,2],b:[4,2],n:[5,2],m:[6,2]},[n,s]=null!==(r=a[e.toLowerCase()])&&void 0!==r?r:[0,0],[i,l]=null!==(o=a[t.toLowerCase()])&&void 0!==o?o:[0,0];return Math.abs(n-i)+Math.abs(s-l)}humanTypingDelaysQuertyDistance(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100,o=0,a=[];for(let n=0;n<e.length;++n){let s;if(n>0){let o=this.qwertyDistance(e[n-1],e[n]);s=0===o?this.getRandomInt(t,Math.floor(r/2)):1===o?this.getRandomInt(t,Math.floor(2*r/3)):this.getRandomInt(t,r)}else s=this.getRandomInt(t,r);a.push(s+o),o+=s}return a}getRandomInt(e,t){return Math.floor(Math.random()*(t-e+1))+e}}var q=r(44395),W=r(81522),$=r(30853),J=r(41619),X=r(24740),ee=r(60682),et=r(24241);let er=F()(()=>Promise.all([r.e(2406),r.e(9417),r.e(6746),r.e(6254),r.e(1048)]).then(r.bind(r,52245)).then(e=>e.GizmoConversationOptionsDropdown),{loadableGenerated:{webpack:()=>[52245]}});function eo(e){let{conversation:t,conversationTitle:r,onOpenChange:o}=e,a=(0,w.Z)(),{isUnauthenticated:n}=(0,N.u)(),{eligible:s,markAsViewed:i}=(0,ee.qg)(ee.pm.ArchiveConversationOnboarding),l=(0,A.ff)(t.id),{0:d,1:u}=(0,j.useState)(!1),h=(0,c.NL)(),f=(0,_.Z)();return((0,j.useEffect)(()=>(0,P.LW)(L.n,{deleteChat:e=>{let{serverThreadId:r}=e;r===t.id&&u(!0)},archiveChat:async e=>{let{serverThreadId:r}=e;r===t.id&&(await Z.Z.patchConversation(t.id,{is_archived:!0}),(0,et.aM)(h),Q.m9.logEvent("chatgpt_conversation_archived"),K.A.logEvent(z.M.conversationArchived),s&&(X.m.info(a.formatMessage({defaultMessage:"You can view archived chats in Settings",id:"HistoryGizmoItem.archiveChatOnboarding"}),{duration:10,hasCloseButton:!0}),i()),l&&f("/"))}}),[f,h,s,t.id,a,l,i]),n)?null:(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)($.u,{label:a.formatMessage({id:"tJPHEQ",defaultMessage:"Options"}),sideOffset:4,side:"top",children:(0,H.jsx)(er,{clientThreadId:t.id,onOpenChange:o,children:(0,H.jsx)("button",{className:"flex items-center justify-center text-token-text-secondary transition hover:text-token-text-primary radix-state-open:text-token-text-secondary",children:(0,H.jsx)(J.nWS,{className:"icon-md"})})})}),d&&(0,H.jsx)(ex,{title:r,handleDelete:()=>{Z.Z.patchConversation(t.id,{is_visible:!1}).then(()=>{(0,et.aM)(h),Q.m9.logEvent("chatgpt_conversation_deleted"),K.A.logEvent(z.M.conversationDeleted)}),l&&f("/")},onClose:()=>{u(!1)}})]})}function ea(e){let{conversation:t,onClose:r}=e,{0:o,1:a}=(0,j.useState)(t.title),n=(0,c.NL)();function s(){o!==t.title&&(A.tQ.setTitle(t.id,o,A._L.User),K.A.logEvent(z.M.renameThread,{threadId:t.id,content:o}),Z.Z.patchConversation(t.id,{title:o}).then(()=>{(0,et.aM)(n)}))}return(0,H.jsx)("input",{type:"text",value:o,onChange:e=>{a(e.target.value)},onKeyDown:e=>{switch(e.key){case"Escape":r();break;case"Enter":s(),r()}},onBlur:()=>{s(),r()},autoFocus:!0,className:"w-full border border-token-border-light bg-transparent p-0 text-sm"})}function en(e){var t;let{conversation:r,isActive:o,elementRef:a,isPrimaryBackgroundColor:n}=e,s=(0,w.Z)(),{0:i,1:l}=(0,j.useState)(!1),{0:c,1:d}=(0,j.useState)(!1),h=E.p.useState(E.p.selectConversationStatus)(r.id),f=E.p.useStore();(0,j.useEffect)(()=>{if(2===h&&o){let e=setTimeout(()=>{f.setConversationStatus(r.id,null),Z.Z.clearConversationStatus(r.id)},500);return()=>clearTimeout(e)}},[h,o,r.id,f]),(0,j.useEffect)(()=>(0,P.LW)(L.n,{editTitle:e=>{let{serverThreadId:t}=e;(t?t===r.id:o)&&l(!0)}}),[r.id,o]);let m=s.formatMessage({id:"mpXAeu",defaultMessage:"New chat"}),{resolvedTitle:g,isTypingEffect:y}=function(e,t,r){let{title:o,titleSource:a}=(0,A.XL)(e),{0:n,1:s}=(0,j.useState)(!1),i=null!=o?o:t,l=(0,j.useRef)(i);return(0,j.useEffect)(()=>(r&&a===A._L.Generated&&i!==l.current&&s(!0),()=>{l.current=i}),[r,i,a]),{isTypingEffect:n,resolvedTitle:i}}(r.id,r.title,o),p=(0,I.w$)(),v=y&&o&&p,{data:b}=(0,D.b9)(null!==(t=r.conversation_template_id)&&void 0!==t?t:void 0),x=(0,_.Z)();return(0,H.jsxs)("div",{className:(0,u.default)("group relative rounded-lg active:opacity-90",o?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary",c&&!o&&"bg-token-sidebar-surface-secondary"),children:[(0,H.jsx)(M(),{href:(0,R.ZV)(r.id,b),onClick:e=>{if(!e.metaKey&&!e.ctrlKey&&(e.preventDefault(),!o)){var t;t=r.id,W.hx.abortAllRequests(),K.A.logEvent(z.M.loadThread,{threadId:t}),x((0,R.ZV)(t,b))}},onDoubleClick:()=>{l(!0)},ref:a,className:"flex items-center gap-2 p-2",children:(0,H.jsxs)("div",{className:"relative grow overflow-hidden whitespace-nowrap",dir:"auto",children:[v?(0,H.jsx)(V,{text:g||m}):g||m,(0,H.jsx)("div",{className:(0,u.default)("absolute bottom-0 top-0 to-transparent ltr:right-0 ltr:bg-gradient-to-l rtl:left-0 rtl:bg-gradient-to-r",!!n&&(o?"from-token-sidebar-surface-secondary":!o&&c?"from-token-sidebar-surface-secondary":"from-token-main-surface-primary"),!n&&(o?"from-token-sidebar-surface-secondary":!o&&c?"from-token-sidebar-surface-secondary":"from-token-sidebar-surface-primary"),{"from-token-main-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":n&&!o&&!c,"from-token-sidebar-surface-primary can-hover:group-hover:from-token-sidebar-surface-secondary":!n&&!o&&!c,"w-10 from-60%":o||c,"w-8 from-0% can-hover:group-hover:w-10 can-hover:group-hover:from-60%":!o&&!c})})]})}),i?(0,H.jsx)("div",{className:"absolute bottom-0 left-[7px] right-2 top-0 flex items-center bg-token-sidebar-surface-secondary",children:(0,H.jsx)(ea,{conversation:r,onClose:()=>{l(!1)}})}):o||1!==h?o||2!==h?(0,H.jsx)("div",{className:(0,u.default)("absolute bottom-0 top-0 items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",o||c?"flex":"hidden can-hover:group-hover:flex"),children:(0,H.jsx)(eo,{conversation:r,conversationTitle:null!=g?g:r.title,onOpenChange:e=>{d(e),e&&K.A.logEvent(z.M.conversationHistoryItemOpenMenu,{conversationId:r.id})}})}):(0,H.jsx)("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:(0,H.jsx)("div",{className:"h-2 w-2 rounded-full bg-blue-selection"})}):(0,H.jsx)("div",{className:"absolute bottom-0 top-0 flex items-center gap-1.5 pr-2 ltr:right-0 rtl:left-0",children:(0,H.jsx)(q.O,{size:18})})]})}var es=r(76608),ei=r(97537),el=r(59144),ec=r(24434),ed=r(22591);function eu(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function eh(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eu(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eu(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let ef=(0,C.vU)({historyBucketToday:{id:"history.bucket.today",defaultMessage:"Today"},historyBucketYesterday:{id:"history.bucket.yesterday",defaultMessage:"Yesterday"},historyBucketLastSeven:{id:"history.bucket.lastSeven",defaultMessage:"Previous 7 Days"},historyBucketLastThirty:{id:"history.bucket.lastThirty",defaultMessage:"Previous 30 Days"},unableToLoadHistory:{id:"history.unableToLoad",defaultMessage:"Unable to load history"},retryButton:{id:"history.retryButton",defaultMessage:"Retry"},showMoreButton:{id:"history.showMoreButton",defaultMessage:"Show more"},deleteModalTitle:{id:"history.deleteModalTitle",defaultMessage:"Delete chat?"},deleteModalBody:{id:"history.deleteModalBody",defaultMessage:"This will delete {title}."},deleteModalConfirm:{id:"history.deleteModalConfirm",defaultMessage:"Delete"},deleteModalCancel:{id:"history.deleteModalCancel",defaultMessage:"Cancel"}}),em={initial:e=>{let{isNew:t}=e;return t?{opacity:0,height:0,overflow:"hidden"}:{}},animate:()=>({opacity:1,height:"auto"}),exit:()=>({opacity:0,height:0})};function eg(e){let{activeId:t,items:r,isPrimaryBackgroundColor:o,previousItems:a}=e,{isCollapsible:n,recentConversationLimit:s}=(0,ed.j)(),l=r.slice(0,s);if(t){let e=r.findIndex(e=>e.id===t);e>s-1&&l.push(r[e])}return(0,H.jsxs)(x.E.div,{className:(0,u.default)(o&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),layout:"position",initial:{height:"0",opacity:1,position:"relative"},animate:{height:"auto",opacity:1},transition:{type:"spring",stiffness:225,damping:15,mass:1},children:[(0,H.jsx)(x.E.div,{className:"sticky top-0 z-20",layout:"position",children:(0,H.jsx)("span",{className:"flex h-9 items-center",children:(0,H.jsx)(ek,{children:(0,H.jsx)(S.Z,{id:"VbQeVG",defaultMessage:"Recent"})})})}),(0,H.jsx)("ol",{children:l.map((e,r)=>{let n=t===e.id,s=null==a?void 0:a.find(t=>{let{id:r}=t;return r===e.id});return(0,H.jsx)(ey,{item:e,isActive:n,isFirstItem:0===r,isExistingItem:!!s,isPrimaryBackgroundColor:o},"history-item-".concat(e.id))})}),n&&(0,H.jsx)(es.x,{type:"more",onClick:i.vm.toggleHistoryCollapsed})]})}function ey(e){let{elementRef:t,item:r,isActive:o,isFirstItem:a,isExistingItem:n,isPrimaryBackgroundColor:s}=e;return(0,H.jsx)(x.E.li,{className:(0,u.default)("relative",a?"z-[15]":""),layout:"position",custom:{isNew:!n},variants:em,initial:"initial",animate:"animate",exit:"exit",children:(0,H.jsx)(en,{isPrimaryBackgroundColor:s,conversation:r,isActive:o,elementRef:t})})}function ep(e){let{activeId:t,bucketedItems:r,items:o,hasNextPage:a,isPrimaryBackgroundColor:n,previousItems:s,infiniteScrollTriggerElementRef:i}=e;return(0,H.jsx)(H.Fragment,{children:[r.recent,r.dynamicMonths,r.dynamicYears].flatMap((e,r)=>(0,H.jsx)(j.Fragment,{children:Object.entries(e).map((e,l)=>{let[c,{items:d,label:h}]=e;if("today"!==c&&!d.length)return null;let f=!!d.find(e=>{var t;return o.length>0&&e.id===(null===(t=o[0])||void 0===t?void 0:t.id)});return d.length>0&&(0,H.jsxs)("div",{className:(0,u.default)(n&&"first:mt-0","relative mt-5 first:mt-0 last:mb-5"),children:[(0,H.jsx)("div",{className:"sticky top-0 z-20  bg-token-sidebar-surface-primary",children:(0,H.jsx)("span",{className:"flex h-9 items-center",children:(0,H.jsx)(ek,{children:h})})}),(0,H.jsx)("ol",{children:d.map((e,r)=>{var l;let d=t===e.id,u=null==s?void 0:s.find(t=>{let{id:r}=t;return r===e.id}),h=a&&(null===(l=o[o.length-5-1])||void 0===l?void 0:l.id)===e.id?i:void 0;return(0,H.jsx)(ey,{item:e,isActive:d,isFirstItem:f&&0===r,isExistingItem:!!u,isPrimaryBackgroundColor:n,elementRef:h},"history-item-".concat(e.id,"-").concat(c))})})]},"".concat(c,"-").concat(r,"-").concat(l))})},"category-".concat(r)))})}var ev=j.memo(function(e){let{activeId:t,isPrimaryBackgroundColor:r,isInPopover:o}=e,a=(0,c.NL)(),n=(0,w.Z)(),{0:s,1:l}=(0,j.useState)(!1),{0:u,1:x}=(0,j.useState)(0),k=(0,O.Z)(),{conversations:M,hasNextPage:C,fetchNextPage:B,isLoading:D,isFetchingNextPage:Z,isError:E}=(0,et.MO)(),A=(0,j.useRef)(null),N=(0,j.useCallback)(e=>{var t;D||null==e||(null===(t=A.current)||void 0===t||t.disconnect(),A.current=new IntersectionObserver(e=>{e[0].isIntersecting&&C&&B()}),A.current.observe(e))},[D,C,B]);(0,j.useEffect)(()=>()=>{var e;null===(e=A.current)||void 0===e||e.disconnect()},[]);let P=function(e){let t=(0,j.useRef)(),r=(0,j.useRef)();return((0,j.useEffect)(()=>{t.current=r.current,r.current=e},[e]),e===r.current)?t.current:r.current}(M);(0,j.useEffect)(()=>{k(()=>{x(u+1)},(0,f.Z)((0,m.Z)(),Date.now())+1e3)},[u,k]);let L=0===M.length;(0,j.useEffect)(()=>{if(!L){var e;null===(e=(0,d.Ef)({namespace:d.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_history_items")}},[L]);let I=(0,j.useMemo)(()=>M.reduce((e,t)=>{var r,o;let a=new Date(null!==(r=null!==(o=t.update_time)&&void 0!==o?o:t.create_time)&&void 0!==r?r:0),s=(0,h.Z)(new Date,a);if(0===s)e.recent.today.items.push(t);else if(s<=1)e.recent.yesterday.items.push(t);else if(s<=7)e.recent.lastSeven.items.push(t);else if(s<=30)e.recent.lastThirty.items.push(t);else if((0,p.Z)(a)){let r=(0,y.Z)(a),o=(0,g.Z)(a),s="".concat(r,"-").concat(o);e.dynamicMonths[s]?e.dynamicMonths[s].items.push(t):e.dynamicMonths[s]={label:n.formatDate(a,{month:"long"}),items:[t]}}else{let r=(0,y.Z)(a),o="".concat(r,"-");e.dynamicYears[o]?e.dynamicYears[o].items.push(t):e.dynamicYears[o]={label:n.formatDate(a,{year:"numeric"}),items:[t]}}return e},{recent:{today:{label:(0,H.jsx)(S.Z,eh({},ef.historyBucketToday)),items:[]},yesterday:{label:(0,H.jsx)(S.Z,eh({},ef.historyBucketYesterday)),items:[]},lastSeven:{label:(0,H.jsx)(S.Z,eh({},ef.historyBucketLastSeven)),items:[]},lastThirty:{label:(0,H.jsx)(S.Z,eh({},ef.historyBucketLastThirty)),items:[]}},dynamicMonths:{},dynamicYears:{}}),[u,M]),{isCollapsible:R}=(0,ed.j)(),_=(0,i.tN)(e=>e.isHistoryCollapsed);return(0,H.jsxs)(eb,{$centered:D||E||L,children:[L&&D&&(0,H.jsx)(ei.Z,{className:"m-auto"}),L&&E&&(0,H.jsxs)("div",{className:"p-3 text-center italic text-token-text-tertiary",children:[(0,H.jsx)(S.Z,eh({},ef.unableToLoadHistory)),!s&&(0,H.jsx)("div",{className:"mt-1",children:(0,H.jsx)(T.z,{as:"button",color:"primary",size:"small",className:"m-auto mt-2",onClick:()=>{l(!0),(0,et.aM)(a)},children:(0,H.jsx)(S.Z,eh({},ef.retryButton))})})]}),!D&&!L&&(0,H.jsx)("div",{children:(0,H.jsx)(v.S,{id:o?"history-popover":"history-sidebar",children:(0,H.jsx)(b.M,{initial:!1,children:R&&_?(0,H.jsx)(eg,{activeId:t,items:M,previousItems:P,isPrimaryBackgroundColor:r}):(0,H.jsx)(ep,{activeId:t,bucketedItems:I,hasNextPage:C,items:M,previousItems:P,isPrimaryBackgroundColor:r,infiniteScrollTriggerElementRef:N})})})}),Z&&(0,H.jsx)("div",{className:"m-4 mb-5 flex justify-center",children:(0,H.jsx)(ei.Z,{})})]})});let eb=B.Z.div(o||(o=(0,n.Z)(["flex flex-col gap-2 pb-2 text-token-text-primary text-sm mt-5\n",""])),e=>{let{$centered:t}=e;return t&&"h-full justify-center items-center empty:hidden"});function ex(e){let{title:t,handleDelete:r,onClose:o}=e,a=(0,w.Z)(),n=(0,l.ll)();return(0,H.jsxs)(ec.Z,{isOpen:!0,onClose:o,type:"success",title:a.formatMessage(ef.deleteModalTitle),primaryButton:(0,H.jsx)(el.Z.Button,{title:a.formatMessage(ef.deleteModalConfirm),color:"danger",onClick:()=>{r(),o()}}),secondaryButton:(0,H.jsx)(el.Z.Button,{title:a.formatMessage(ef.deleteModalCancel),color:"secondary",onClick:o}),children:[(0,H.jsx)(S.Z,eh(eh({},ef.deleteModalBody),{},{values:{title:(0,H.jsx)("strong",{children:t})}})),n&&(0,H.jsx)("div",{className:"mt-2 text-sm text-token-text-tertiary",children:(0,H.jsx)(S.Z,{id:"history.deleteModalMemoryDisclaimer",defaultMessage:"To clear any memories from this chat, visit your <link>settings</link>.",values:{link:e=>(0,H.jsx)(M(),{href:"#settings/Personalization",shallow:!0,className:"underline",children:e})}})})]})}let ek=B.Z.h3(a||(a=(0,n.Z)(["pb-2 pt-3 px-2 text-xs font-semibold text-ellipsis overflow-hidden break-all text-token-text-primary"])))},13391:function(e,t,r){r.d(t,{n:function(){return D},A3:function(){return O},yx:function(){return N},JS:function(){return A}});var o,a=r(98601),n=r(15858),s=r(70879),i=r(99976),l=r(61619),c=r(79746),d=r(82363),u=r(91530),h=r.n(u),f=r(92379),m=r(68306),g=r(16757),y=r(24740),p=r(92745),v=r(31438),b=r(49763),x=r(22433),k=r(45248);let M=f.useLayoutEffect;function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}let C=/```.*?\n([\s\S]+?)\n?```[^`]*$/gms;var w=((o=w||{}).Core="Core",o.Chat="Chat",o.Settings="Settings",o);let S=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({Mod:"mod",Comma:","},n.s),B={[S.Mod]:/Mac|iPod|iPhone|iPad/.test(window.navigator.platform)?"⌘":"Ctrl",[S.Comma]:",",[S.Enter]:"⏎",[S.Escape]:"Esc",[S.ArrowUp]:"↑",[S.ArrowDown]:"↓",[S.ArrowLeft]:"←",[S.ArrowRight]:"→",[S.Backspace]:"⌫",[S.Delete]:"⌦",[S.Tab]:"⇥",[S.Control]:"Ctrl",[S.Shift]:"Shift"},O=e=>e.map(e=>{var t;return null!==(t=B[e])&&void 0!==t?t:e}),T=(0,m.vU)({newChat:{id:"keyboardActions.newChat",defaultMessage:"Open new chat"},focusPromptTextarea:{id:"keyboardActions.focusPromptTextarea",defaultMessage:"Focus chat input"},copyLastCodeBlock:{id:"keyboardActions.copyLastCodeBlock",defaultMessage:"Copy last code block"},copyLastResponse:{id:"keyboardActions.copyLastResponse",defaultMessage:"Copy last response"},toggleCustomInstructions:{id:"keyboardActions.toggleCustomInstructions",defaultMessage:"Set custom instructions"},navigationToggle:{id:"keyboardActions.navigationToggle",defaultMessage:"Toggle sidebar"},deleteChat:{id:"keyboardActions.deleteChat",defaultMessage:"Delete chat"},archiveChat:{id:"keyboardActions.archiveChat",defaultMessage:"Archive chat"},toggleKeyboardActions:{id:"keyboardActions.toggleKeyboardActions",defaultMessage:"Show shortcuts"}}),D=new b.V,Z=e=>{let{resetThreadAction:t,clientThreadId:r}=e;return[{key:"newChat",action:t||h(),actionMessageDescriptor:T.newChat,group:w.Core,keyboardBinding:[S.Mod,S.Shift,"o"],altKeyboardBindings:[[S.Mod,"k"]]},{key:"focusPromptTextarea",action:s.go,actionMessageDescriptor:T.focusPromptTextarea,group:w.Chat,keyboardBinding:[S.Shift,S.Escape]},{key:"copyLastCodeBlock",action:()=>{if(null!=r){let e=p.tQ.getThreadCurrentLeafId(r),t=p.tQ.getThreadConversationTurns(r,e);for(let e=t.length-1;e>=0;e--){let{messages:r}=t[e],o=[...r.reduce((e,t)=>null==t.err&&t.message.author.role===g.uU.Assistant&&"all"===t.message.recipient?e+(e?"\n\n":"")+(0,x.RR)(t.message):e,"").matchAll(C)],a=o.length?o[o.length-1][1]:null;if(null!=a){(0,c.v)(a).then(()=>{y.m.success("Copied code block to clipboard")});break}}}},actionMessageDescriptor:T.copyLastCodeBlock,group:w.Chat,keyboardBinding:[S.Mod,S.Shift,";"],altKeyboardBindings:[[S.Mod,S.Shift,":"]]},{key:"copyLastResponse",action:()=>{null!=r&&p.tQ.copyLastMessageToClipboard(r,"keyboard").then(()=>{y.m.success("Last response copied to clipboard")})},actionMessageDescriptor:T.copyLastResponse,group:w.Chat,keyboardBinding:[S.Mod,S.Shift,"c"]},{key:"toggleCustomInstructions",action:()=>v.vm.toggleModal(v.B.UserContext),actionMessageDescriptor:T.toggleCustomInstructions,group:w.Settings,keyboardBinding:[S.Mod,S.Shift,"i"]},{key:"navigationToggle",action:()=>v.vm.toggleDesktopNavCollapsed(),actionMessageDescriptor:T.navigationToggle,group:w.Core,keyboardBinding:[S.Mod,S.Shift,"s"]},{key:"deleteChat",action:()=>{if(r){let e=p.tQ.getServerThreadId(r);e&&D.publish({kind:"deleteChat",serverThreadId:e})}},actionMessageDescriptor:T.deleteChat,group:w.Chat,keyboardBinding:[S.Mod,S.Shift,S.Backspace],altKeyboardBindings:[[S.Mod,S.Shift,S.Delete]]},{key:"toggleKeyboardActions",action:()=>v.vm.toggleModal(v.B.KeyboardActions),actionMessageDescriptor:T.toggleKeyboardActions,group:w.Settings,keyboardBinding:[S.Mod,"/"]}]},E=e=>(function(e,t,r){let o=e.map(e=>{let{keyboardBinding:t}=e,r=t.join("+");if(e.altKeyboardBindings){r=[r];let t=e.altKeyboardBindings.map(e=>e.join("+"));r=r.concat(t)}return(0,k.ZP)(r,{byKey:!0})});M(()=>{if((null==r?void 0:r.enabled)===!1)return;let a=r=>{if(!r.repeat)for(let a=0;a<o.length;a++)o[a](r)&&(void 0===e[a].enabled||e[a].enabled)&&(r.preventDefault(),t(e[a]),e[a].action())},n=e=>{void 0!==e.key&&a(e)},s=document;return s.addEventListener("keydown",n),()=>{s.removeEventListener("keydown",n)}},[e,r])})(e,e=>{i.A.logEvent(l.M.keyboardShortcut,{keyboardActionKey:e.key}),d.U.addAction("chatgpt_keyboard_shortcut",{keyboardActionKey:e.key})},{enabled:!0}),A=function(){let{resetThreadAction:e,clientThreadId:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,f.useMemo)(()=>Z({resetThreadAction:e,clientThreadId:t}).filter(e=>{let{enabled:t=!0}=e;return t}),[t,e])},N=e=>{let{resetThreadAction:t,clientThreadId:r}=e;E(A({resetThreadAction:t,clientThreadId:r}))}},17096:function(e,t,r){r.d(t,{Z:function(){return a}});var o=r(92379);function a(){let e=(0,o.useRef)([]),t=(0,o.useRef)((t,r)=>{let o=setTimeout(t,r);return e.current.push(o),o});return(0,o.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}}}]);
//# sourceMappingURL=4160-028eed7956e7230e.js.map