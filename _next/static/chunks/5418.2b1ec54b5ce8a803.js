"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5418],{39358:function(e,t,r){r.d(t,{Z:function(){return p}});var s=r(98601),a=r(92379),n=r(68306),l=r(62984),o=r(15478),i=r(15174),c=r(30853),d=r(28146),u=r(651);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let f=(0,n.vU)({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function p(e){let{buttonText:t,shouldChangeText:r=!0,iconClassName:s="icon-sm",onCopy:n,className:o}=e,{0:m,1:p}=(0,a.useState)(!1),b=(0,i.Z)(),g=(0,a.useCallback)(e=>{e.stopPropagation(),n(),p(!0),setTimeout(()=>{b()&&p(!1)},2e3)},[b,n]),j=t;return r&&m?j=(0,u.jsx)(l.Z,x({},f.copied)):!0===t&&(j=(0,u.jsx)(l.Z,x({},f.copy))),(0,u.jsxs)(u.Fragment,{children:[!m&&(0,u.jsx)(c.u,{label:(0,u.jsx)(l.Z,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:(0,u.jsxs)(h,{onClick:g,className:o,children:[(0,u.jsx)(d.TIy,{className:s}),j]})}),m&&(0,u.jsxs)(h,{className:o,children:[(0,u.jsx)(d.$As,{className:s}),j]})]})}let h=o.Z.button`flex gap-1 items-center`},88301:function(e,t,r){r.d(t,{B1:function(){return c},hj:function(){return d},lX:function(){return m},r:function(){return x},yt:function(){return u}});var s=r(28146),a=r(30853),n=r(19841),l=r(62984),o=r(15478),i=r(651);let c=o.Z.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,d=o.Z.div`mb-6`,u=o.Z.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;function m(e){let{label:t,description:r,collapsed:n,onClick:l}=e,o=(0,i.jsx)("label",{className:"block font-semibold text-token-text-primary",children:t});return(0,i.jsxs)("div",{className:"mb-1.5 flex items-center",onClick:l,children:[void 0!==n&&(n?(0,i.jsx)(s.r0F,{className:"icon-sm"}):(0,i.jsx)(s.Tg4,{className:"icon-sm"})),r?(0,i.jsx)(a.u,{label:r,sideOffset:4,side:"top",delayDuration:0,children:o}):(0,i.jsx)(i.Fragment,{children:o})]})}function x(e){let{actionTool:t,onShowActionsEditor:r,isDisabled:a}=e,o="metadata"in t?t.metadata?.domain:void 0;return(0,i.jsxs)("div",{className:(0,n.default)("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",a?"bg-token-main-surface-secondary":""),onClick:r,children:[(0,i.jsx)("div",{className:"h-9 grow px-3 py-2",children:o??(0,i.jsx)("span",{className:"text-red-500",children:(0,i.jsx)(l.Z,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),(0,i.jsx)("div",{className:"w-px bg-token-border-medium"}),(0,i.jsx)("button",{disabled:a,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:(0,i.jsx)(s.SWE,{className:"icon-sm"})})]})}},65418:function(e,t,r){r.r(t),r.d(t,{DebugConversation:function(){return ei},DebugConversationSidebar:function(){return eo},default:function(){return er},downloadMessages:function(){return ec}});var s=r(98601),a=r(16757),n=(r(34095),r(55963)),l=r(88301),o=(r(2721),r(93951)),i=r(92745),c=r(22433),d=r(93180),u=r(46900),m=(r(66290),r(30757)),x=(r(56032),r(42420)),f=r(79746),p=r(88667),h=r(2423),b=r.n(h),g=r(38482),j=r.n(g),v=r(92379),y=r(75172),w=r(62984),N=r(68306),k=r(67526),C=r(75592),S=r(75853),O=r(15478),_=r(11550),P=r(39358),D=r(94273),I=r(75130),T=r(651);function Z(e){let{children:t,sidebarOpen:r,onClose:s}=e;return(0,T.jsx)(D.u.Root,{show:r,as:v.Fragment,children:(0,T.jsxs)(I.V,{as:"div",className:"relative z-10",onClose:s,children:[(0,T.jsx)("div",{className:"fixed inset-0"}),(0,T.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,T.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,T.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,T.jsx)(D.u.Child,{as:v.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,T.jsx)(I.V.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:(0,T.jsx)("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}var F=r(30853),R=r(30115),L=r(28146),M=r(24434),U=r(73468),E=r(89678),z=r.n(E),A=r(13859),V=r.n(A),Q=r(24740),$=r(88815);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function G(e){let{clientThreadId:t}=e,{rebaseSystemMessageContent:r,showDebugConversationTurns:s}=(0,$.N)(),{0:l,1:o}=(0,v.useState)(()=>r?JSON.stringify(r,null,2):void 0),{0:c,1:d}=(0,v.useState)(!!r),u=(0,i.u9)(t,i.tQ.getThreadCurrentLeafId(t)),m=V()(u,e=>e.content.content_type===a.PX.SystemContent),x=m?.content??null,f=(0,v.useMemo)(()=>z()(e=>{try{e?$.N.setState({rebaseSystemMessageContent:J(J({},JSON.parse(e)),{},{content_type:a.PX.SystemContent})}):$.N.setState({rebaseSystemMessageContent:null}),Q.m.closeAll()}catch(e){Q.m.danger("The System Message is not valid JSON")}},500),[]);return(0,v.useEffect)(()=>{c?f(l):(f.cancel(),$.N.setState({rebaseSystemMessageContent:null}))},[f,c,l]),(0,T.jsxs)("div",{className:"flex flex-col gap-3 px-4",children:[(0,T.jsxs)("div",{children:[(0,T.jsxs)("div",{className:"flex justify-between",children:[(0,T.jsx)(F.u,{label:"Enable to apply this system message to the current conversation.",children:(0,T.jsx)(n.Z,{id:"enabled",label:"Enabled",checked:c,onChange:e=>d(e.currentTarget.checked)})}),(0,T.jsx)(n.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:s,onChange:()=>{$.N.setState({showDebugConversationTurns:!s})}})]}),(0,T.jsx)(_.z,{disabled:!x,className:"mt-2",onClick:()=>{o(x?JSON.stringify(x,null,2):"")},size:"small",children:"Load active system message"})]}),(0,T.jsxs)("div",{children:[(0,T.jsx)("label",{className:"text-sm",children:"System Message"}),(0,T.jsx)(q,{disabled:!c,placeholder:x?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:l,onChange:e=>o(e.target.value)})]})]})}let q=O.Z.textarea`w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary`;var X=r(19841);function Y(e){let{clientThreadId:t}=e,{0:r,1:s}=(0,v.useState)([]),n=i.tQ.getThreadCurrentLeafId(t),l=i.tQ.getThreadConversationTurns(t,n),o=e=>{let r=i.tQ.getTree(t).getLeafFromNode(e);i.tQ.setThreadCurrentLeafId(t,r.id)},d=e=>{s(e=>[...e,n]),o(e)};return(0,T.jsxs)(T.Fragment,{children:[r.length>0&&(0,T.jsxs)(_.z,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{o(r[r.length-1]),s(e=>e.slice(0,-1))},children:[(0,T.jsx)(L.eF8,{className:"icon-sm"}),"Go back to ",r[r.length-1]]}),(0,T.jsx)("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:l.map((e,r)=>{let s;let n=e.messages[0].nodeId,l=i.tQ.getTree(t),o=0!==r?l.getParent(n):null,u=null!=o?o.children.findIndex(e=>n===e):0,m=null!=o?o.children:[],x=m.slice(0,u),f=m.slice(u+1);switch(e.role){case a.uU.User:s="bg-blue-500";break;case a.uU.Assistant:s="bg-gray-600";break;default:s="bg-gray-400"}return(0,T.jsxs)("div",{className:(0,X.default)("relative p-2",s),children:[(0,T.jsx)("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:x.map(e=>(0,T.jsx)(W,{variantId:e,onChangeItemInView:d},e))}),(0,T.jsx)("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:f.map(e=>(0,T.jsx)(W,{variantId:e,onChangeItemInView:d},e))}),(0,T.jsx)("div",{className:"flex flex-col gap-2",children:e.messages.map(e=>(0,T.jsxs)("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[(0,T.jsx)("div",{className:"font-semibold",children:e.nodeId}),(0,T.jsx)("div",{className:"italic text-token-text-tertiary",children:e.message.author.role}),(0,T.jsx)("div",{children:(0,c.RR)(e.message)})]},e.nodeId))})]},r)})})]})}function W(e){let{variantId:t,onChangeItemInView:r}=e;return(0,T.jsx)("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{r(t)},children:(0,T.jsx)("span",{className:"bg-gray-200 p-2",children:t})},t)}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let ee=j()(()=>Promise.all([r.e(6923),r.e(1981),r.e(6925),r.e(1502)]).then(r.bind(r,19042)).then(e=>e.DebugModalContents),{ssr:!1,loadableGenerated:{webpack:()=>[19042]}}),et=j()(()=>r.e(1583).then(r.bind(r,51583)).then(e=>e.FramesViewer),{ssr:!1,loadableGenerated:{webpack:()=>[51583]}});function er(e){let{children:t,title:r,icon:s,isOpen:a,slideOver:n,onClose:l}=e,o=(0,T.jsxs)(ex,{children:[(0,T.jsxs)("div",{className:"flex items-start justify-between",children:[(0,T.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[(0,T.jsx)(s,{className:"icon-sm"}),r]}),(0,T.jsx)("div",{className:"mr-2 mt-2 flex h-7 items-center",children:(0,T.jsx)(R.P,{onClick:l})})]}),t]});return n?(0,T.jsx)(Z,{sidebarOpen:a,onClose:l,children:o}):a?o:null}function es(e){let{nodes:t,setDebugNodeIndex:r,setFrameSrc:s}=e,n=t.map((e,t)=>{let n=e.message,{role:l,name:o}=n.author,i=b()(n,"metadata.__internal.model_id"),d=b()(n,"metadata.__internal.agent.settings.completion_api.engine"),m=b()(n,"metadata.__internal.model_experiment_name"),x=b()(n,"metadata.__internal.model_experiment_treatment"),f=b()(n,"metadata.__internal.normalized_model_side"),p=b()(n,"metadata.__internal.model_experiment_group_name"),h=b()(n,"metadata.__internal.model_experiment_group_params"),g=b()(n,"metadata.__internal.model_experiment_override"),j=b()(n,"metadata.__internal.model_experiment_eval_seq"),v=b()(n,"metadata.__internal.raw_tokens")?.length,y=b()(n,"metadata.request_id"),w=u.U.getAudio(n),N=u.U.getAudioAssetPointers(n),k=u.U.getFrameAssetPointers(n);return(0,T.jsxs)(ep,{role:"button",onClick:()=>r(t),children:[(0,T.jsxs)("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[l,o&&o!==l&&` (${o})`,n.recipient&&" -> ",(0,c.Ej)(n)]}),(n.author.role!==a.uU.System||y)&&(0,T.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(0,T.jsxs)("div",{children:["ID: ",n.id]}),e.id!==n.id&&(0,T.jsxs)("div",{children:["UI Node ID: ",e.id]}),(0,T.jsxs)("div",{children:["Req ID: ",y||"Reload page to see ID"]})]}),(0,T.jsx)("div",{className:"line-clamp-6",children:(0,c.RR)(n)}),(v||i||d||m||x||f||p||h||g||j)&&(0,T.jsxs)("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[void 0!==v&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Tokens Count:"})," ",v]}),i&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Model ID:"})," ",i]}),d&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Engine:"})," ",d]}),m&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Experiment:"})," ",m]}),x&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Treatment:"})," ",x]}),f&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Normalized Side:"})," ",f]}),p&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Group Name:"})," ",p]}),h&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Group Params:"}),(0,T.jsx)("div",{children:JSON.stringify(h,null,2)})]}),g&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Above Params are Overridden By:"})," ",g]}),j&&(0,T.jsxs)("div",{children:[(0,T.jsx)("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),w.length||N.length?(0,T.jsxs)("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[(0,T.jsx)(eu,{frameAssets:k,setFrameSrc:s},t),w.map((e,t)=>(0,T.jsx)(em,{audio:e},t)),N.map((e,t)=>(0,T.jsx)(em,{assetPointer:e},t))]}):null]},n.id)});return(0,T.jsx)(ef,{children:n})}let ea=e=>(0,T.jsx)(k.c.Input,K(K({},e),{},{inputClassName:"focus:ring-0"}));function en(){let e=(0,$.N)(),t=(0,U.ZP)().map(e=>({label:e.name,options:e.options.map(e=>({label:`${e.value} (${e.name})`,value:e.value}))}));return(0,T.jsxs)("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold",children:[(0,T.jsx)(n.Z,{id:"force-paragen",label:"Force Parallel Gen",checked:e.forceParagen,onChange:()=>{$.N.setState({forceParagen:!e.forceParagen})}}),(0,T.jsx)(S.Z,{options:t,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!e.forceParagen,isLoading:0===t.length,value:e.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:ea},onChange:e=>{$.N.setState({forceParagenModel:e??$.J})}}),(0,T.jsx)(n.Z,{id:"force-paragen",label:"Force Nulligen",checked:e.forceNulligen,onChange:()=>{$.N.setState({forceNulligen:!e.forceNulligen})}}),(0,T.jsx)("div",{id:"force-use-search-label",children:"Force Use Search:"}),(0,T.jsx)(C.ZP,{id:"force-use-search",options:[{label:"Default",value:"default"},{label:"Force",value:"true"},{label:"Disable",value:"false"}],name:"force-use-search",className:"shadow-none dark:text-gray-800",value:null==e.forceUseSearch?{value:"default",label:"Default"}:e.forceUseSearch?{value:"true",label:"Force"}:{value:"false",label:"Disable"},isMulti:!1,components:{Input:ea},onChange:e=>{$.N.setState({forceUseSearch:(e?.value??"default")==="default"?null:e?.value==="true"})}}),(0,T.jsx)(n.Z,{id:"force-indepth-feedback",label:"Force Indepth Feedback with prompt:",checked:e.forceIndepthFeedback,onChange:()=>{$.N.setState({forceIndepthFeedback:!e.forceIndepthFeedback})}}),(0,T.jsx)(l.B1,{id:"force-indepth-feedback-prompt",value:e.forceIndepthFeedbackPrompt,disabled:!e.forceIndepthFeedback,className:"font-weight-normal font-mono text-xs",onChange:e=>{$.N.setState({forceIndepthFeedbackPrompt:e.target.value})}}),(0,T.jsx)(n.Z,{id:"force-rate-limit",label:"Force Rate Limit",checked:e.forceRateLimit,onChange:()=>{$.N.setState({forceRateLimit:!e.forceRateLimit})}}),(0,T.jsx)(n.Z,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:e.resetRateLimits,onChange:()=>{$.N.setState({resetRateLimits:!e.resetRateLimits})}}),(0,T.jsx)(F.u,{label:"Enabling this will show debug conversation messages in the chat",children:(0,T.jsx)(n.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:e.showDebugConversationTurns,onChange:()=>{$.N.setState({showDebugConversationTurns:!e.showDebugConversationTurns})}})})]})}let el=O.Z.div`px-3 pb-2 text-xs font-semibold uppercase border-b-2 ${e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"}}`;function eo(e){let{clientThreadId:t,isOpen:r,slideOver:s,onClose:a}=e,n=(0,y.Z)(),l=(0,o.hz)(),{0:i,1:c}=(0,v.useState)("conversation");return l?.includes("debug")?(0,T.jsx)(er,{icon:L.reV,title:n.formatMessage(eh.debugTitle),isOpen:r,slideOver:s,onClose:a,children:(0,T.jsxs)(m.fC,{orientation:"vertical",defaultValue:i,onValueChange:e=>c(e),children:[(0,T.jsxs)(m.aV,{className:"flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold",children:[(0,T.jsx)(m.xz,{value:"conversation",children:(0,T.jsx)(el,{$isSelected:"conversation"===i,children:"Conversation"})}),(0,T.jsx)(m.xz,{value:"system-message-editor",className:"p-4",children:(0,T.jsx)(el,{$isSelected:"system-message-editor"===i,children:"System Message Editor"})})]}),(0,T.jsx)(m.VY,{value:"conversation",children:(0,T.jsx)(ei,{clientThreadId:t})}),(0,T.jsx)(m.VY,{value:"system-message-editor",children:(0,T.jsx)(G,{clientThreadId:t})})]})}):null}function ei(e){let{clientThreadId:t}=e,r=(0,y.Z)(),s=i.tQ.getThreadCurrentLeafId(t),a=(0,i.Fe)(t,s),{0:n,1:l}=(0,v.useState)(),c=(0,o.hz)(),d=(0,v.useCallback)(()=>{l(void 0)},[]),u=(0,v.useCallback)(()=>{let e=i.tQ.getTree(t);(0,f.v)(e.getTextFromThread(s))},[s,t]),{0:m,1:x}=(0,v.useState)(!1),{0:p,1:h}=(0,v.useState)(void 0);return c?.includes("debug")?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:(0,T.jsx)(ed,{clientThreadId:t,messages:a.map(e=>e.message)})}),!1,(0,T.jsxs)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[(0,T.jsx)("div",{children:(0,T.jsx)(P.Z,{onCopy:u,buttonText:r.formatMessage(eh.copyText)})}),(0,T.jsxs)("button",{className:"flex items-center justify-center gap-2",onClick:()=>x(!0),children:[(0,T.jsx)(L.aAc,{className:"icon-sm rotate-90"}),"View tree"]})]}),(0,T.jsx)(en,{}),(0,T.jsx)(es,{nodes:a,setDebugNodeIndex:l,setFrameSrc:h}),void 0!==n&&(0,T.jsx)(M.Z,{type:"success",size:"fullscreen",noPadding:!0,isOpen:!0,onClose:d,children:(0,T.jsx)(ee,{threadId:a[n].message.metadata?.__internal?.sonic_thread_id,threadUserId:a[n].message.metadata?.__internal?.sonic_user_id,onClose:d,message:a[n].message})},`DebugMessageModal-${n}`),m&&(0,T.jsx)(M.Z,{isOpen:!0,onClose:()=>x(!1),type:"success",size:"custom",noPadding:!0,children:(0,T.jsx)(Y,{clientThreadId:t})},"DebugTreeViewer"),p&&(0,T.jsx)(M.Z,{size:"normal",isOpen:!0,onClose:()=>h(void 0),type:"success",children:(0,T.jsx)("img",{src:p,alt:"debug image"})},"DebugFrameViewer")]}):null}function ec(e,t){let r=new Blob([JSON.stringify({conversation_id:i.tQ.getServerThreadId(e),messages:t},null,2)],{type:"application/json"}),s=URL.createObjectURL(r),a=document.createElement("a");a.href=s,a.download=`messages-${i.tQ.getServerThreadId(e)}.json`,a.click(),URL.revokeObjectURL(s)}function ed(e){let{clientThreadId:t,messages:r}=e,s=(0,v.useCallback)(()=>{ec(t,r)},[t,r]);return(0,T.jsx)(_.z,{onClick:s,color:"primary",size:"small",icon:L._8t,children:(0,T.jsx)(w.Z,K({},eh.downloadRawConversation))})}function eu(e){let{0:t,1:r}=(0,v.useState)([]),s=(0,x.NL)(),{frameAssets:a}=e;return(0,v.useEffect)(()=>{async function e(){return Promise.all(a.map(async e=>{let{image_asset_pointer:t,timestamp:r}=e;return{src:(await d.j.fetch(s,{asset:t})).url,timestamp:r}}))}a.length>0&&e().then(r)},[a,s]),(0,T.jsx)(et,{frames:t,setFrameSrc:e.setFrameSrc})}function em(e){let t=em.useAssetPointerSource(e.assetPointer),r=em.useAudioSource(e.audio),s=t??r,a=(0,p.xb)("3230069703").config.value.expirySeconds,{0:n,1:l}=(0,v.useState)(Date.now()),o=(0,v.useRef)(null);return((0,v.useEffect)(()=>{let e=setInterval(()=>{o.current&&o.current.currentTime>0&&!o.current.paused&&!o.current.ended&&o.current.readyState>2||l(Date.now())},1e3*a);return()=>clearInterval(e)},[a]),s)?(0,T.jsx)("audio",{ref:o,controls:!0,src:s,className:"w-full"},n):null}em.useAssetPointerSource=e=>{let{0:t,1:r}=(0,v.useState)(null),s=(0,x.NL)();return(0,v.useEffect)(()=>{e&&d.j.fetch(s,{asset:e}).then(e=>{r(e.url)})},[s,e]),t},em.useAudioSource=e=>{let{0:t,1:r}=(0,v.useState)(null);return(0,v.useEffect)(()=>{if(e){let t=atob(e.payload),s=new Uint8Array(t.length);for(let e=0;e<t.length;e++)s[e]=t.charCodeAt(e);let a=new Blob([s],{type:`audio/${e.format}`}),n=URL.createObjectURL(a);return r(n),()=>{URL.revokeObjectURL(n)}}},[e]),t};let ex=O.Z.div`overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary`,ef=O.Z.pre`whitespace-pre-wrap text-sm`,ep=O.Z.div`px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200`,eh=(0,N.vU)({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}})}}]);
//# sourceMappingURL=5418.2b1ec54b5ce8a803.js.map