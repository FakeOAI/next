(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[867],{95105:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return T},default:function(){return U}});var r,a,n,i,l=s(24312),o=s(90164),c=s(81669),d=s(97021),u=s(14816),f=s(65998),m=s(64331),x=s(28181),p=s.n(x),b=s(92379),g=s(55969),y=s(26123),h=s(72256),j=s(25940),v=s(74091),w=s(651);function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function O(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach(function(t){(0,l.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}async function N(e){let{queryKey:[t,{workspaceId:s}]}=e;return d.Z.getWorkspaceAnalytics(s)}function P(e){let{data:t,label:s,getWeekValue:r}=e,a=(0,y.Z)(),n=(0,m.F)().theme,i=(0,b.useMemo)(()=>(function(e){let t=getComputedStyle(document.body);return{animation:!1,scales:{y:{position:"right",beginAtZero:!0,ticks:{stepSize:3,color:t.getPropertyValue("--text-tertiary"),padding:12},grid:{tickLength:0,color:t.getPropertyValue("--border-medium")},border:{display:!1}},x:{grid:{display:!1},ticks:{color:t.getPropertyValue("--text-tertiary"),padding:20}}},plugins:{legend:!1,tooltip:{backgroundColor:t.getPropertyValue("--surface-primary"),titleColor:t.getPropertyValue("--text-primary"),bodyColor:t.getPropertyValue("--text-secondary"),displayColors:!1,padding:{top:8,left:8,right:8,bottom:8}}}}})(0),[n]),l=(0,b.useMemo)(()=>getComputedStyle(document.body).getPropertyValue("--text-secondary"),[n]),o={labels:t.weekly_data.map(e=>a.formatDate(e.week,{month:"numeric",day:"numeric"})),datasets:[{label:s,data:t.weekly_data.map(r),borderWidth:0,backgroundColor:l,barThickness:20}]};return(0,w.jsx)("div",{className:"flex h-full w-full items-center justify-center bg-token-main-surface-secondary p-4",children:(0,w.jsx)(g.$Q,{options:i,data:o,height:192})})}function C(e){let{label:t,value:s}=e;return(0,w.jsxs)("div",{className:"w-1/3 rounded bg-token-main-surface-secondary px-4 py-2",children:[(0,w.jsx)("label",{className:"text-sm text-token-text-secondary",children:t}),(0,w.jsx)("div",{className:"text-xl font-semibold text-token-text-primary",children:s})]})}function S(e){let{data:t}=e,s=(0,y.Z)(),r=t.weekly_data[t.weekly_data.length-2];return(0,w.jsxs)("div",{className:"mt-10",children:[(0,w.jsx)("div",{className:"mb-2 font-semibold text-token-text-primary",children:(0,w.jsx)(h.Z,O({},_.totals))}),(0,w.jsxs)("div",{className:"mb-16 flex gap-4",children:[(0,w.jsx)(C,{label:s.formatMessage(_.usersLabel),value:t.total_users}),(0,w.jsx)(C,{label:s.formatMessage(_.conversationsLabel),value:t.total_conversations}),(0,w.jsx)(C,{label:s.formatMessage(_.messagesLabel),value:t.total_messages})]}),(0,w.jsxs)(M,{children:[(0,w.jsx)("div",{className:"flex flex-col justify-between p-4",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{children:(0,w.jsx)(h.Z,O({},_.usageTitle))}),null!=r&&(0,w.jsxs)("div",{children:[(0,w.jsx)(L,{children:r.message_count}),(0,w.jsx)(A,{children:(0,w.jsx)(h.Z,O({},_.messagesLastWeek))})]})]})}),(0,w.jsx)("div",{children:(0,w.jsx)(P,{data:t,label:s.formatMessage(_.messagesChartLabel),getWeekValue:e=>e.message_count})})]}),(0,w.jsxs)(M,{children:[(0,w.jsx)("div",{children:(0,w.jsx)(P,{data:t,label:s.formatMessage(_.activeUsersChartLabel),getWeekValue:e=>e.active_users_count})}),(0,w.jsx)("div",{className:"flex grow flex-col justify-between p-4",children:(0,w.jsxs)("div",{children:[(0,w.jsx)(Z,{children:(0,w.jsx)(h.Z,O({},_.weeklyUsersTitle))}),null!=r&&(0,w.jsxs)("div",{children:[(0,w.jsx)(L,{children:r.active_users_count}),(0,w.jsx)(A,{children:(0,w.jsx)(h.Z,O({},_.activeUsersLastWeek))})]})]})})]})]})}f.kL.register(f.uw,f.f$,f.od,f.ZL,f.Dx,f.u,f.De);let M=v.Z.div(r||(r=(0,c.Z)(["mb-12 grid grid-cols-1 rounded-lg overflow-hidden border border-token-border-light sm:grid-cols-2"]))),Z=v.Z.div(a||(a=(0,c.Z)(["font-semibold"]))),L=v.Z.div(n||(n=(0,c.Z)(["font-semibold text-3xl"]))),A=v.Z.div(i||(i=(0,c.Z)(["text-sm text-token-text-tertiary"])));function D(e){let{currentWorkspaceId:t}=e,s=(0,y.Z)(),{data:r,isLoading:a}=(0,u.a)({queryKey:["workspace-analytics",{workspaceId:t}],queryFn:N});return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(p(),{children:(0,w.jsx)("title",{children:s.formatMessage(_.title)})}),(0,w.jsx)(o.yG,{title:s.formatMessage(_.title),subtitle:s.formatMessage(_.pageDescription)}),(0,w.jsx)(o.hb,{showSpinner:a,children:void 0!==r?(0,w.jsx)(S,{data:r}):null})]})}let _=(0,j.vU)({title:{id:"workspaceAnalytics.title",defaultMessage:"Workspace Analytics"},pageDescription:{id:"workspaceAnalytics.understand",defaultMessage:"Understand how your workspace is using ChatGPT"},totals:{id:"workspaceAnalytics.totals",defaultMessage:"Totals over last 30 days"},usersLabel:{id:"workspaceAnalytics.usersLabel",defaultMessage:"Users"},conversationsLabel:{id:"workspaceAnalytics.conversationsLabel",defaultMessage:"Conversations"},messagesLabel:{id:"workspaceAnalytics.messagesLabel",defaultMessage:"Messages"},usageTitle:{id:"workspaceAnalytics.usageTitle",defaultMessage:"Usage"},messagesLastWeek:{id:"workspaceAnalytics.messagesLastWeek",defaultMessage:"Messages processed last week"},messagesLast30Days:{id:"workspaceAnalytics.messagesLast30Days",defaultMessage:"{count, plural, =0 {No messages} one {# message} other {# messages}} processed over last 30 days"},messagesChartLabel:{id:"workspaceAnalytics.messagesChartLabel",defaultMessage:"Messages"},weeklyUsersTitle:{id:"workspaceAnalytics.weeklyUsersTitle",defaultMessage:"Weekly users"},activeUsersChartLabel:{id:"workspaceAnalytics.activeUsersChartLabel",defaultMessage:"Active users"},activeUsersLastWeek:{id:"workspaceAnalytics.activeUsersLastWeek",defaultMessage:"Active users last week"},usersLast30Days:{id:"workspaceAnalytics.usersLast30Days",defaultMessage:"{count, plural, =0 {No active users} one {# active user} other {# active user}} over last 30 days"}});function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}var T=!0;function U(e){return(0,w.jsx)(D,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach(function(t){(0,l.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},e))}U.getLayout=function(e){return(0,w.jsx)(o.ZP,{mobilePageTitle:"Analytics",requireAdminPrivileges:!0,children:e})}},24103:function(e,t,s){"use strict";s.d(t,{Z:function(){return j}});var r=s(24312),a=s(21292),n=s(50045),i=s(19841),l=s(58164),o=s(92379),c=s(72256),d=s(25940),u=s(79014),f=s(33168),m=s(80935),x=s(28178),p=s(79198),b=s(651);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function y(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function h(e){let{isDesktopNavCollapsed:t}=e;return(0,b.jsx)(l.E.div,{initial:!1,transition:{duration:.165},animate:{x:t?"0":"260px"},style:{rotate:t?180:0,y:"-50%"},className:(0,i.default)("fixed left-0 top-1/2 z-40"),children:(0,b.jsx)("button",{onClick:u.vm.toggleDesktopNavCollapsed,children:(0,b.jsxs)(a.u,{side:"right",label:t?(0,b.jsx)(c.Z,y({},v.openSidebar)):(0,b.jsx)(c.Z,y({},v.closeSidebar)),sideOffset:4,children:[(0,b.jsx)(l.E.div,{className:"flex h-[72px] w-8 items-center justify-center",variants:{rest:{},hover:{}},initial:!1,whileHover:["hover","arrow"],animate:["rest",t?"arrow":"line"],children:(0,b.jsxs)(l.E.div,{className:"flex h-6 w-6 flex-col items-center",children:[(0,b.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:".15rem"},arrow:{rotate:"15deg",y:".15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}}),(0,b.jsx)(l.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:"-.15rem"},arrow:{rotate:"-15deg",y:"-.15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}})]})}),(0,b.jsx)(n.T,{children:t?(0,b.jsx)(c.Z,y({},v.openSidebar)):(0,b.jsx)(c.Z,y({},v.closeSidebar))})]})})})}function j(e){let{children:t,hideNavigation:s=!1,mobileHeaderContent:r,mobileHeaderRightContent:a,mobileHeaderBottomContent:n,sidebar:l,forceOpenDesktopSidebar:c=!1}=e,d=(0,f.w$)(),g=(0,u.xH)(),y=[],v=null;o.Children.forEach(t,e=>{o.isValidElement(e)&&(e.type===j.Sidebars?v=e:y.push(e))});let w=(0,p.Qr)(),k=d&&!s&&null!=l;return(0,b.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[k?(0,b.jsx)(m.Z,{children:(0,b.jsx)(x.l6,{forceOpenDesktopSidebar:c,children:(0,b.jsx)("div",{className:(0,i.default)("flex h-full min-h-0 flex-col"),children:l})})}):null,(0,b.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!d&&!s&&(0,b.jsx)(m.Z,{children:(0,b.jsx)(x.Vs,{onClickOpenSidebar:()=>u.vm.toggleActiveSidebar("mobile-nav"),sidebar:l,rightContent:a,bottomContent:n,children:r})}),(0,b.jsxs)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:[(0,b.jsx)(m.Z,{children:k&&!w&&(0,b.jsx)(h,{isDesktopNavCollapsed:g})}),y]})]}),v]})}j.Sidebars=function(e){let{children:t}=e;return(0,b.jsx)(b.Fragment,{children:t})};let v=(0,d.vU)({closeSidebar:{id:"Stage.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"Stage.openSidebar",defaultMessage:"Open sidebar"}})},28178:function(e,t,s){"use strict";s.d(t,{MP:function(){return S},Nz:function(){return M},Vs:function(){return D},l6:function(){return _}});var r=s(24312),a=s(4545),n=s(73581),i=s(29757),l=s(59791),o=s(94326),c=s(82783),d=s(20736),u=s(16602),f=s(19841),m=s(58164),x=s(34442),p=s(92379),b=s(26123),g=s(72256),y=s(25940),h=s(79014);s(33168);var j=s(21292),v=s(79198),w=s(26382),k=s(651);let O=["onClick","className"],N=["onClick"];function P(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?P(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function S(e){let{onClick:t,className:s}=e,r=(0,a.Z)(e,O);return(0,k.jsx)(w.zV,C({onClick:t,className:(0,f.default)(s,"flex-grow overflow-hidden")},r))}function M(e){let{historyDisabled:t,onNewChatButtonClick:s}=e,r=(0,b.Z)(),{isUserUnauthenticated:a,isLoading:n}=(0,o.EH)(),l=(0,v.Qr)();return n?null:a?(0,k.jsx)(L,{className:"mr-3"}):(0,k.jsx)(j.u,{label:t?r.formatMessage({id:"/CxV1V",defaultMessage:"Clear chat"}):r.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),children:(0,k.jsx)(Z,{onClick:()=>{u.A.logNewChatButtonClicked({location:"Mobile header"}),s()},children:t?(0,k.jsx)(i.Ezi,{className:(0,f.default)(l?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")}):(0,k.jsx)(i.bl$,{className:(0,f.default)(l?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")})})})}function Z(e){let{onClick:t}=e,s=(0,a.Z)(e,N);return(0,k.jsx)("button",C({type:"button",className:"px-3",onClick:t},s))}function L(e){let{className:t}=e,{navigateToAuth:s}=(0,o.EH)();return(0,k.jsx)(n.z,{as:"button",size:"small",color:"primary",className:t,onClick:()=>{let e=s({authType:"signup"});u.A.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:e})},children:(0,k.jsx)(g.Z,C({},E.signUpButtonText))})}let A=e=>{let{onClose:t,sidebarOpen:s,children:r}=e;return(0,k.jsx)(c.u.Root,{show:s,as:p.Fragment,children:(0,k.jsxs)(d.V,{as:"div",className:"relative",onClose:t,children:[(0,k.jsx)(c.u.Child,{as:p.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,k.jsx)("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/75"})}),(0,k.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,k.jsx)(c.u.Child,{as:p.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,k.jsxs)(d.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-token-sidebar-surface-primary",children:[(0,k.jsx)(c.u.Child,{as:p.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,k.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-3.5",children:(0,k.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-0 focus-visible:outline-white juice:hidden",onClick:t,children:[(0,k.jsx)("span",{className:"sr-only",children:(0,k.jsx)(g.Z,C({},E.closeSidebar))}),(0,k.jsx)(l.v7,{className:"icon-md"})]})})}),r]})}),(0,k.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},D=e=>{let{onClickOpenSidebar:t,children:s,sidebar:r,rightContent:a,bottomContent:n}=e,l=(0,h.tN)(e=>e.activeSidebar),o=(0,x.useRouter)().asPath;return(0,p.useEffect)(()=>{"mobile-nav"===l&&h.vm.setActiveSidebar(!1)},[o]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:"sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-main-surface-primary pl-1 juice:min-h-[60px] juice:border-transparent md:hidden",children:[(0,k.jsxs)("button",{type:"button",className:"absolute bottom-0 left-0 top-0 inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,children:[(0,k.jsx)("span",{className:"sr-only",children:(0,k.jsx)(g.Z,C({},E.openSidebar))}),(0,k.jsx)(i.Oqj,{className:"icon-lg juice:mx-2.5 juice:text-token-text-secondary"})]}),s,null!=a&&(0,k.jsx)("div",{className:"absolute bottom-0 right-0 top-0 flex items-center",children:a})]}),n&&(0,k.jsx)("div",{className:"flex w-full items-center justify-center bg-token-main-surface-primary",children:n}),(0,k.jsx)(A,{onClose:()=>{h.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===l,children:r})]})};function _(e){let{forceOpenDesktopSidebar:t,children:s}=e,r=(0,p.useRef)(null),a=(0,h.xH)()&&!t;return(0,k.jsx)(m.E.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary",ref:r,initial:!1,animate:{width:a?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:()=>{r.current&&(r.current.style.visibility="visible")},onAnimationComplete:()=>{r.current&&a&&(r.current.style.visibility="hidden")},children:(0,k.jsx)("div",{className:"h-full w-[260px]",children:(0,k.jsx)("div",{className:"flex h-full min-h-0 flex-col",children:s})})})}let E=(0,y.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}})},62847:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/analytics",function(){return s(95105)}])}},function(e){e.O(0,[6835,4736,3400,7380,164,2888,9774,179],function(){return e(e.s=62847)}),_N_E=e.O()}]);
//# sourceMappingURL=analytics-1f0a1aa3895c0b6e.js.map