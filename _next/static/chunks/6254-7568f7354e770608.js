"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6254],{42508:function(e,t,i){var r=i(92379);function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)({}).hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e}).apply(null,arguments)}t.Z=e=>r.createElement("svg",n({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",viewBox:"0 0 14 14"},e),r.createElement("path",{stroke:"currentColor",strokeWidth:1.2,d:"m10.67 9.087 2.252-6.347c.367-1.033-.63-2.03-1.662-1.662L4.913 3.33A2.6 2.6 0 0 0 3.33 4.913L1.078 11.26c-.367 1.033.63 2.03 1.662 1.662l6.347-2.251a2.6 2.6 0 0 0 1.584-1.584Z",style:{stroke:"currentColor",strokeOpacity:1}}),r.createElement("path",{stroke:"currentColor",d:"M7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",style:{stroke:"currentColor",strokeOpacity:1}}))},95033:function(e,t,i){i.d(t,{Dy:function(){return J},eY:function(){return B},xL:function(){return X}});var r,n=i(98601),s=i(30853),l=i(12128),o=i(25899),a=i(39004),c=i(99555),d=i(10080),u=i(93951),m=i(86025),g=i(31438),p=i(3551),f=i(42420),x=i(58695),h=i(13490),b=i(66290),v=i(99976),j=i(61619),y=i(27393),w=i(88667),k=i(19841),O=i(88600),N=i(14015),z=i.n(N),P=i(38482),S=i.n(P),C=i(24098),E=i.n(C),G=i(92379),T=i(62984),M=i(75172),D=i(68306),Z=i(98095),I=i(34643),L=i(75372),_=i(15972),A=i(47762),F=i(651);function K(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function R(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?K(Object(i),!0).forEach(function(t){(0,n.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):K(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}let q=S()(()=>Promise.all([i.e(6746),i.e(9773),i.e(8493)]).then(i.bind(i,52245)).then(e=>e.GizmoKeepInSidebarMenuItem),{loadableGenerated:{webpack:()=>[52245]}}),W=((r={})[r.Keep=0]="Keep",r[r.Recents=1]="Recents",r);function B(e){let{data:{gizmos:t}={}}=(0,a.Wz)();return!!t&&t.some(t=>t.resource.gizmo.id===e)}function H(e){let{isActive:t,isNewConversation:i}=e,r=(0,f.NL)(),n=(0,b.Z)();return(0,F.jsx)("div",{className:"bg-token-sidebar-surface-primary pt-0",children:(0,F.jsx)(Y,{gizmo:void 0,isActive:t,onClick:e=>{(0,m.P)((0,x.y_)(r))&&!i&&(e.preventDefault(),(0,_.Xl)(n))}})})}function U(e){let{gizmo:t,currentGizmoId:i}=e,r=(0,G.useRef)(!1),n=(0,g.tN)(),{0:s,1:l}=(0,G.useState)(!1),{itemsLeft:o,listItems:a,needsToCollapseItems:c}=function(e,t){var i,r,n,s,l,o;let a=z()(e,e=>e.flair.kind),c=[...null!==(i=null===(r=a[d.JK.FirstParty])||void 0===r?void 0:r.map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Keep}}))&&void 0!==i?i:[],...null!==(n=null===(s=a[d.JK.SidebarKeep])||void 0===s?void 0:s.map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Keep}}))&&void 0!==n?n:[],...null!==(l=null===(o=a[d.JK.Recent])||void 0===o?void 0:o.slice(0,2).map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Recents}}))&&void 0!==l?l:[]],u=c.length>5,m=u&&!t&&c.length>4?c.slice(0,4):c;return{listItems:[...m.filter(e=>{let{section:t}=e;return t===W.Keep}),...m.filter(e=>{let{section:t}=e;return t===W.Recents})],itemsLeft:c.length-m.length,needsToCollapseItems:u}}(t,s);return(0,G.useEffect)(()=>{if(a.length>0&&!r.current){var e;null===(e=(0,y.Ef)({namespace:y.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_gizmo_sidebar"),r.current=!0}},[a]),(0,F.jsxs)("div",{children:[a.map((e,t)=>{let{gizmo:r,section:n}=e;return(0,F.jsxs)(G.Fragment,{children:[t>1&&n!==a[t-1].section&&(0,F.jsx)("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),(0,F.jsx)(Y,{gizmo:r,isActive:r.gizmo.id===i,section:n},r.gizmo.id)]},t)}),c?(0,F.jsxs)("button",{onClick:()=>{l(!s)},className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[(0,F.jsx)("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:(0,F.jsx)(h.nWS,{className:"icon-md text-token-text-primary"})}),(0,F.jsx)("div",{className:"flex grow items-center gap-1",children:s?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(T.Z,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),(0,F.jsx)(h.r0F,{className:"icon-xs"})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(T.Z,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:o}}),(0,F.jsx)(h.Tg4,{className:"icon-xs"})]})})]}):null,(0,F.jsx)(I.Z,{children:(0,F.jsx)(O.E.div,{whileTap:{scale:.98},children:(0,F.jsx)(E(),{href:(0,p.cy)(),onClick:()=>{"mobile-nav"===n.activeSidebar&&g.vm.toggleActiveSidebar("mobile-nav")},children:(0,F.jsx)(L.f,{icon:h.frp,children:(0,F.jsx)(T.Z,R({},$.exploreStoreEnabled))})},"explore")})})]})}function J(e){let{currentGizmoId:t}=e,{data:{gizmos:i}={}}=(0,a.Wz)(),{value:r}=(0,w.sB)("1334159177");return(0,F.jsxs)(F.Fragment,{children:[!r&&(0,F.jsx)(H,{isActive:void 0===t,isNewConversation:!0}),(0,F.jsx)(A.Z,{}),null!=i?(0,F.jsx)(U,{gizmo:i,currentGizmoId:t}):null]})}function V(e){let{gizmo:t,isOpen:i,setIsOpen:r,section:n}=e,s=(0,f.NL)();return(0,F.jsxs)(Z.d,{open:i,onOpenChange:r,triggerButton:(0,F.jsx)("button",{className:(0,k.default)("flex text-token-text-secondary hover:text-token-text-primary",i?"":"invisible group-hover:visible"),children:(0,F.jsx)(h.nWS,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[n===W.Recents&&(0,F.jsx)(Z.Z.Item,{onClick:async()=>{await c.U.updateGizmoSidebar(s,t.gizmo.id,"keep")},children:(0,F.jsx)(T.Z,R({},$.keepInSidebar))}),(0,F.jsx)(q,{gizmoResource:t})]})}function Y(e){var t,i;let r;let{gizmo:n,historyDisabled:c,section:m,onClick:g}=e,p=(0,M.Z)(),{0:f,1:x}=(0,G.useState)(!1),{0:b,1:v}=(0,G.useState)(!1),j=(0,u.t)(),y=!!(null==n||null===(t=n.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));if(null!=n)r=n.gizmo.display.name||o.zf;else{if(null==j)return null;r=c?p.formatMessage($.clearChat):j.canInteractWithGizmos()?o.Dd:p.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return(0,F.jsx)(O.E.div,{whileTap:{scale:.98},onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1)},children:(0,F.jsx)(X,{loggingGizmoId:null!==(i=null==n?void 0:n.gizmo.id)&&void 0!==i?i:"primary",href:null!=n?(0,a.m_)(n):"/",onClick:g,icon:(0,F.jsx)(l.Z,{isFirstParty:null==n||y,src:null==n?void 0:n.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:f,label:r,hoverRightIcon:(0,F.jsxs)("div",{className:"flex gap-2",children:[(b||f)&&null!=n&&(0,F.jsx)("div",{className:"text-token-text-tertiary",onClick:e=>{e.preventDefault()},children:(0,F.jsx)(V,{gizmo:n,isOpen:f,setIsOpen:x,section:m})}),(0,F.jsx)(s.u,{side:"right",label:p.formatMessage(c?$.clearChat:$.newChat),className:"flex items-center",children:(0,F.jsx)("button",{className:f?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:c?(0,F.jsx)(h.Ezi,{className:"icon-md"}):(0,F.jsx)(h.bl$,{className:"icon-md"})})})]})})})}function X(e){let{href:t,icon:i,label:r,hoverRightIcon:n,isMenuOpen:s,loggingGizmoId:l,onClick:o,target:a}=e;return(0,F.jsxs)(E(),{href:t,target:a,shallow:!0,className:(0,k.default)("group flex h-10 items-center gap-2.5 rounded-lg bg-token-sidebar-surface-primary px-2 font-normal",s?"bg-token-main-surface-primary":"hover:bg-token-sidebar-surface-secondary"),onClick:e=>{v.A.logNewChatButtonClicked({location:"Sidebar gizmo list",gizmo_id:l}),v.A.logEvent(j.M.sidebarClickGizmo,{gizmo_id:l}),null==o||o(e)},children:[i,(0,F.jsx)("div",{className:"grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",children:r}),n]})}let $=(0,D.vU)({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}})},47762:function(e,t,i){i.d(t,{Z:function(){return y}});var r=i(13490),n=i(95033),s=i(60682),l=i(98095),o=i(40833),a=i(34643),c=i(31438),d=i(45120),u=i(19841),m=i(88600),g=i(92379),p=i(62984),f=i(42508),x=i(651);function h(){let e=(0,s.qg)(s.pm.SonicSidebar),{0:t,1:i}=(0,g.useState)(!1);return e.isLoading||!e.eligible?null:(0,x.jsx)(m.E.div,{className:"group pb-0",whileTap:{scale:.98},children:(0,x.jsx)(b,{children:(0,x.jsx)(n.xL,{href:"/search",target:"_blank",icon:(0,x.jsx)("div",{className:(0,u.default)("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:(0,x.jsx)(f.Z,{})}),label:"SearchGPT",hoverRightIcon:(0,x.jsxs)("div",{className:"flex gap-3",children:[(0,x.jsx)(v,{isOpen:t,setIsOpen:i,onDismiss:()=>e.markAsViewed()}),(0,x.jsx)(r.Pfi,{className:(0,u.default)("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function b(e){let{children:t}=e,i=function(){let e=(0,c.xH)(),t=(0,s.qg)(s.pm.hasSeenSncSidebarTooltip),i=(0,a.c)(),r=(0,c.ss)(),{activeModals:n}=(0,c.tN)(),l=(0,d.AH)("717266490").layer.get("optimize_initial_modals",!1);return!t.isLoading&&t.eligible&&!i&&0===n.size&&!e&&(!l||!r)}(),r=(0,s.qg)(s.pm.hasSeenSncSidebarTooltip);return i?(0,x.jsx)(o.v,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:r.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:(0,x.jsx)("div",{className:"w-full",children:t})}):(0,x.jsx)(x.Fragment,{children:t})}function v(e){let{isOpen:t,setIsOpen:i,onDismiss:n}=e;return(0,x.jsx)(l.d,{open:t,onOpenChange:i,triggerButton:(0,x.jsx)("button",{className:(0,u.default)("flex text-token-text-tertiary",t?"":"invisible group-hover:visible"),onClick:e=>{e.preventDefault()},children:(0,x.jsx)(r.nWS,{className:"icon-md"})}),children:(0,x.jsx)(l.Z.Item,{onClick:e=>{e.preventDefault(),n()},children:(0,x.jsx)(p.Z,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}var j=i(88667);function y(){return(0,j.sB)("114024").value?(0,x.jsx)(h,{}):null}},34643:function(e,t,i){i.d(t,{Z:function(){return b},c:function(){return h}});var r=i(98601),n=i(93951),s=i(31438),l=i(99976),o=i(61619),a=i(45120),c=i(92379),d=i(75172),u=i(62984),m=i(68306),g=i(60682),p=i(40833),f=i(651);function x(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),i.push.apply(i,r)}return i}function h(){let{activeModals:e}=(0,s.tN)(),t=(0,n.t)(),i=(0,g.qg)(g.pm.ExploreGPTs),r=(0,g.qg)(g.pm.ExploreGPTsNewNux),d=(0,s.ss)(),u=(0,s.xH)(),m=(0,a.AH)("717266490").layer.get("optimize_initial_modals",!1),p=i.eligible&&!i.isLoading&&!u,f=r.eligible&&!r.isLoading&&!u&&(!m||!d);return e.size>0&&(f=!1),!p&&null!=t&&t.hasPlusFeatures()&&(f=!1),(0,c.useEffect)(()=>{f&&l.A.logEvent(o.M.storeDisplayNewNux)},[f]),f}function b(e){let{children:t}=e,i=h(),n=(0,d.Z)(),s=(0,g.qg)(g.pm.ExploreGPTsNewNux);return i?(0,f.jsx)(p.v,{side:"right",show:!0,title:n.formatMessage(v.exploreGPTsTitle),onDismiss:s.markAsViewed,sideOffset:20,theme:"bright",description:(0,f.jsx)(u.Z,function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?x(Object(i),!0).forEach(function(t){(0,r.Z)(e,t,i[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):x(Object(i)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))})}return e}({},v.exploreGPTsDescriptionNewNux)),children:t}):(0,f.jsx)(f.Fragment,{children:t})}let v=(0,m.vU)({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}})}}]);
//# sourceMappingURL=6254-7568f7354e770608.js.map