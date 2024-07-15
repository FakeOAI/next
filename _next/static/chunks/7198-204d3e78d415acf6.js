"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7198,7688,6680],{10727:function(e,t,s){s.d(t,{Z:function(){return b}});var r,n=s(41141),a=s(94521),l=s(92379),o=s(68306),i=s(62984),c=s(74091),d=s(56505),u=s(62484),m=s(3445),x=s(651);function p(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?p(Object(s),!0).forEach(function(t){(0,a.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):p(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let f=(0,o.vU)({copy:{id:"CopyButton.copy",defaultMessage:"Copy"},copied:{id:"CopyButton.copied",defaultMessage:"Copied!"}});function b(e){let{buttonText:t,shouldChangeText:s=!0,iconClassName:r="icon-sm",onCopy:n,className:a}=e,{0:o,1:c}=(0,l.useState)(!1),p=(0,d.Z)(),b=(0,l.useCallback)(e=>{e.stopPropagation(),n(),c(!0),setTimeout(()=>{p()&&c(!1)},2e3)},[p,n]),j=t;return s&&o?j=(0,x.jsx)(i.Z,h({},f.copied)):!0===t&&(j=(0,x.jsx)(i.Z,h({},f.copy))),(0,x.jsxs)(x.Fragment,{children:[!o&&(0,x.jsx)(u.u,{label:(0,x.jsx)(i.Z,{id:"CopyButton.copyTooltip",defaultMessage:"Copy"}),sideOffset:0,children:(0,x.jsxs)(g,{onClick:b,className:a,children:[(0,x.jsx)(m.TIy,{className:r}),j]})}),o&&(0,x.jsxs)(g,{className:a,children:[(0,x.jsx)(m.$As,{className:r}),j]})]})}let g=c.Z.button(r||(r=(0,n.Z)(["flex gap-1 items-center"])))},17688:function(e,t,s){s.d(t,{Z:function(){return o}});var r=s(82783),n=s(20736),a=s(92379),l=s(651);function o(e){let{children:t,sidebarOpen:s,onClose:o}=e;return(0,l.jsx)(r.u.Root,{show:s,as:a.Fragment,children:(0,l.jsxs)(n.V,{as:"div",className:"relative z-10",onClose:o,children:[(0,l.jsx)("div",{className:"fixed inset-0"}),(0,l.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,l.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,l.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,l.jsx)(r.u.Child,{as:a.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,l.jsx)(n.V.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:(0,l.jsx)("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}},77198:function(e,t,s){s.r(t),s.d(t,{DebugConversation:function(){return ed},DebugConversationSidebar:function(){return ec},default:function(){return en},downloadMessages:function(){return eu}});var r,n,a,l,o,i=s(41141),c=s(94521),d=s(85734),u=(s(64831),s(71840)),m=s(89987),x=(s(10852),s(4702)),p=s(86021),h=s(92524),f=s(22770),b=s(20408),g=s(16054),j=(s(96053),s(35226)),v=s(48538),y=s(2423),w=s.n(y),N=s(86078),C=s.n(N),k=s(92379),O=s(75172),S=s(62984),P=s(68306),_=s(34189),Z=s(5741),T=s(74091),I=s(5443),D=s(10727),F=s(17688),R=s(62484),L=s(14975),M=s(3445),E=s(49217),U=s(73487),A=s(89678),z=s.n(A),V=s(13859),Q=s.n(V),B=s(94982),J=s(34565),G=s(651);function q(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function $(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?q(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):q(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function X(e){var t;let{clientThreadId:s}=e,{rebaseSystemMessageContent:r,showDebugConversationTurns:n}=(0,J.N)(),{0:a,1:l}=(0,k.useState)(()=>r?JSON.stringify(r,null,2):void 0),{0:o,1:i}=(0,k.useState)(!!r),c=(0,p.u9)(s,p.tQ.getThreadCurrentLeafId(s)),m=Q()(c,e=>e.content.content_type===d.PX.SystemContent),x=null!==(t=null==m?void 0:m.content)&&void 0!==t?t:null,h=(0,k.useMemo)(()=>z()(e=>{try{e?J.N.setState({rebaseSystemMessageContent:$($({},JSON.parse(e)),{},{content_type:d.PX.SystemContent})}):J.N.setState({rebaseSystemMessageContent:null}),B.m.closeAll()}catch(e){B.m.danger("The System Message is not valid JSON")}},500),[]);return(0,k.useEffect)(()=>{o?h(a):(h.cancel(),J.N.setState({rebaseSystemMessageContent:null}))},[h,o,a]),(0,G.jsxs)("div",{className:"flex flex-col gap-3 px-4",children:[(0,G.jsxs)("div",{children:[(0,G.jsxs)("div",{className:"flex justify-between",children:[(0,G.jsx)(R.u,{label:"Enable to apply this system message to the current conversation.",children:(0,G.jsx)(u.Z,{id:"enabled",label:"Enabled",checked:o,onChange:e=>i(e.currentTarget.checked)})}),(0,G.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:n,onChange:()=>{J.N.setState({showDebugConversationTurns:!n})}})]}),(0,G.jsx)(I.z,{disabled:!x,className:"mt-2",onClick:()=>{l(x?JSON.stringify(x,null,2):"")},size:"small",children:"Load active system message"})]}),(0,G.jsxs)("div",{children:[(0,G.jsx)("label",{className:"text-sm",children:"System Message"}),(0,G.jsx)(Y,{disabled:!o,placeholder:x?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:a,onChange:e=>l(e.target.value)})]})]})}let Y=T.Z.textarea(r||(r=(0,i.Z)(["w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary"])));var H=s(19841);function K(e){let{clientThreadId:t}=e,{0:s,1:r}=(0,k.useState)([]),n=p.tQ.getThreadCurrentLeafId(t),a=p.tQ.getThreadConversationTurns(t,n),l=e=>{let s=p.tQ.getTree(t).getLeafFromNode(e);p.tQ.setThreadCurrentLeafId(t,s.id)},o=e=>{r(e=>[...e,n]),l(e)};return(0,G.jsxs)(G.Fragment,{children:[s.length>0&&(0,G.jsxs)(I.z,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{l(s[s.length-1]),r(e=>e.slice(0,-1))},children:[(0,G.jsx)(M.eF8,{className:"icon-sm"}),"Go back to ",s[s.length-1]]}),(0,G.jsx)("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:a.map((e,s)=>{let r;let n=e.messages[0].nodeId,a=p.tQ.getTree(t),l=0!==s?a.getParent(n):null,i=null!=l?l.children.findIndex(e=>n===e):0,c=null!=l?l.children:[],u=c.slice(0,i),m=c.slice(i+1);switch(e.role){case d.uU.User:r="bg-blue-500";break;case d.uU.Assistant:r="bg-gray-600";break;default:r="bg-gray-400"}return(0,G.jsxs)("div",{className:(0,H.default)("relative p-2",r),children:[(0,G.jsx)("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:u.map(e=>(0,G.jsx)(W,{variantId:e,onChangeItemInView:o},e))}),(0,G.jsx)("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:m.map(e=>(0,G.jsx)(W,{variantId:e,onChangeItemInView:o},e))}),(0,G.jsx)("div",{className:"flex flex-col gap-2",children:e.messages.map(e=>(0,G.jsxs)("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[(0,G.jsx)("div",{className:"font-semibold",children:e.nodeId}),(0,G.jsx)("div",{className:"italic text-token-text-tertiary",children:e.message.author.role}),(0,G.jsx)("div",{children:(0,h.RR)(e.message)})]},e.nodeId))})]},s)})})]})}function W(e){let{variantId:t,onChangeItemInView:s}=e;return(0,G.jsx)("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{s(t)},children:(0,G.jsx)("span",{className:"bg-gray-200 p-2",children:t})},t)}function ee(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function et(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ee(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let es=C()(()=>Promise.all([s.e(5893),s.e(6113)]).then(s.bind(s,26113)).then(e=>e.default),{ssr:!1,loadableGenerated:{webpack:()=>[26113]}}),er=C()(()=>s.e(6649).then(s.bind(s,66649)).then(e=>e.FramesViewer),{ssr:!1,loadableGenerated:{webpack:()=>[66649]}});function en(e){let{children:t,title:s,icon:r,isOpen:n,slideOver:a,onClose:l}=e,o=(0,G.jsxs)(eh,{children:[(0,G.jsxs)("div",{className:"flex items-start justify-between",children:[(0,G.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[(0,G.jsx)(r,{className:"icon-sm"}),s]}),(0,G.jsx)("div",{className:"mr-2 mt-2 flex h-7 items-center",children:(0,G.jsx)(L.P,{onClick:l})})]}),t]});return a?(0,G.jsx)(F.Z,{sidebarOpen:n,onClose:l,children:o}):n?o:null}function ea(e){let{nodes:t,setDebugNodeIndex:s,setFrameSrc:r}=e,n=t.map((e,t)=>{var n;let a=e.message,{role:l,name:o}=a.author,i=w()(a,"metadata.__internal.model_id"),c=w()(a,"metadata.__internal.agent.settings.completion_api.engine"),u=w()(a,"metadata.__internal.model_experiment_name"),m=w()(a,"metadata.__internal.model_experiment_treatment"),x=w()(a,"metadata.__internal.normalized_model_side"),p=w()(a,"metadata.__internal.model_experiment_group_name"),f=w()(a,"metadata.__internal.model_experiment_group_params"),g=w()(a,"metadata.__internal.model_experiment_override"),j=w()(a,"metadata.__internal.model_experiment_eval_seq"),v=null===(n=w()(a,"metadata.__internal.raw_tokens"))||void 0===n?void 0:n.length,y=w()(a,"metadata.request_id"),N=b.U.getAudio(a),C=b.U.getAudioAssetPointers(a),k=b.U.getFrameAssetPointers(a);return(0,G.jsxs)(eb,{role:"button",onClick:()=>s(t),children:[(0,G.jsxs)("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[l,o&&o!==l&&" (".concat(o,")"),a.recipient&&" -> ",(0,h.Ej)(a)]}),(a.author.role!==d.uU.System||y)&&(0,G.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(0,G.jsxs)("div",{children:["ID: ",a.id]}),e.id!==a.id&&(0,G.jsxs)("div",{children:["UI Node ID: ",e.id]}),(0,G.jsxs)("div",{children:["Req ID: ",y||"Reload page to see ID"]})]}),(0,G.jsx)("div",{className:"line-clamp-6",children:(0,h.RR)(a)}),(v||i||c||u||m||x||p||f||g||j)&&(0,G.jsxs)("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[void 0!==v&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Tokens Count:"})," ",v]}),i&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Model ID:"})," ",i]}),c&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Engine:"})," ",c]}),u&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Experiment:"})," ",u]}),m&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Treatment:"})," ",m]}),x&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Normalized Side:"})," ",x]}),p&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Group Name:"})," ",p]}),f&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Group Params:"}),(0,G.jsx)("div",{children:JSON.stringify(f,null,2)})]}),g&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Above Params are Overridden By:"})," ",g]}),j&&(0,G.jsxs)("div",{children:[(0,G.jsx)("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),N.length||C.length?(0,G.jsxs)("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[(0,G.jsx)(ex,{frameAssets:k,setFrameSrc:r},t),N.map((e,t)=>(0,G.jsx)(ep,{audio:e},t)),C.map((e,t)=>(0,G.jsx)(ep,{assetPointer:e},t))]}):null]},a.id)});return(0,G.jsx)(ef,{children:n})}let el=e=>(0,G.jsx)(_.c.Input,et(et({},e),{},{inputClassName:"focus:ring-0"}));function eo(){let e=(0,J.N)(),t=(0,U.ZP)().map(e=>({label:e.name,options:e.options.map(e=>({label:"".concat(e.value," (").concat(e.name,")"),value:e.value}))}));return(0,G.jsxs)("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold ",children:[(0,G.jsx)(u.Z,{id:"force-paragen",label:"Force Parallel Gen",checked:e.forceParagen,onChange:()=>{J.N.setState({forceParagen:!e.forceParagen})}}),(0,G.jsx)(Z.Z,{options:t,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!e.forceParagen,isLoading:0===t.length,value:e.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:el},onChange:e=>{J.N.setState({forceParagenModel:null!=e?e:J.J})}}),(0,G.jsx)(u.Z,{id:"force-paragen",label:"Force Nulligen",checked:e.forceNulligen,onChange:()=>{J.N.setState({forceNulligen:!e.forceNulligen})}}),(0,G.jsx)(u.Z,{id:"force-indepth-feedback",label:"Force Indepth Feedback with prompt:",checked:e.forceIndepthFeedback,onChange:()=>{J.N.setState({forceIndepthFeedback:!e.forceIndepthFeedback})}}),(0,G.jsx)(m.B1,{id:"force-indepth-feedback-prompt",value:e.forceIndepthFeedbackPrompt,disabled:!e.forceIndepthFeedback,className:"font-weight-normal font-mono text-xs",onChange:e=>{J.N.setState({forceIndepthFeedbackPrompt:e.target.value})}}),(0,G.jsx)(u.Z,{id:"force-rate-limit",label:"Force Rate Limit",checked:e.forceRateLimit,onChange:()=>{J.N.setState({forceRateLimit:!e.forceRateLimit})}}),(0,G.jsx)(u.Z,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:e.resetRateLimits,onChange:()=>{J.N.setState({resetRateLimits:!e.resetRateLimits})}}),(0,G.jsx)(R.u,{label:"Enabling this will show debug conversation messages in the chat",children:(0,G.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:e.showDebugConversationTurns,onChange:()=>{J.N.setState({showDebugConversationTurns:!e.showDebugConversationTurns})}})})]})}let ei=T.Z.div(n||(n=(0,i.Z)(["px-3 pb-2 text-xs font-semibold uppercase border-b-2 ",""])),e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"});function ec(e){let{clientThreadId:t,isOpen:s,slideOver:r,onClose:n}=e,a=(0,O.Z)(),l=(0,x.hz)(),{0:o,1:i}=(0,k.useState)("conversation");return null!=l&&l.includes("debug")?(0,G.jsx)(en,{icon:M.reV,title:a.formatMessage(eg.debugTitle),isOpen:s,slideOver:r,onClose:n,children:(0,G.jsxs)(g.fC,{orientation:"vertical",defaultValue:o,onValueChange:e=>i(e),children:[(0,G.jsxs)(g.aV,{className:"flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold",children:[(0,G.jsx)(g.xz,{value:"conversation",children:(0,G.jsx)(ei,{$isSelected:"conversation"===o,children:"Conversation"})}),(0,G.jsx)(g.xz,{value:"system-message-editor",className:"p-4",children:(0,G.jsx)(ei,{$isSelected:"system-message-editor"===o,children:"System Message Editor"})})]}),(0,G.jsx)(g.VY,{value:"conversation",children:(0,G.jsx)(ed,{clientThreadId:t})}),(0,G.jsx)(g.VY,{value:"system-message-editor",children:(0,G.jsx)(X,{clientThreadId:t})})]})}):null}function ed(e){let{clientThreadId:t}=e,s=(0,O.Z)(),r=p.tQ.getThreadCurrentLeafId(t),n=(0,p.Fe)(t,r),{0:a,1:l}=(0,k.useState)(),o=(0,x.hz)(),i=(0,k.useCallback)(()=>{l(void 0)},[]),c=(0,k.useCallback)(()=>{let e=p.tQ.getTree(t);(0,v.v)(e.getTextFromThread(r))},[r,t]),{0:d,1:u}=(0,k.useState)(!1),{0:m,1:h}=(0,k.useState)(void 0);return null!=o&&o.includes("debug")?(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:(0,G.jsx)(em,{clientThreadId:t,messages:n.map(e=>e.message)})}),!1,(0,G.jsxs)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[(0,G.jsx)("div",{children:(0,G.jsx)(D.Z,{onCopy:c,buttonText:s.formatMessage(eg.copyText)})}),(0,G.jsxs)("button",{className:"flex items-center justify-center gap-2",onClick:()=>u(!0),children:[(0,G.jsx)(M.aAc,{className:"icon-sm rotate-90"}),"View tree"]})]}),(0,G.jsx)(eo,{}),(0,G.jsx)(ea,{nodes:n,setDebugNodeIndex:l,setFrameSrc:h}),void 0!==a&&(0,G.jsx)(E.Z,{className:"min-w-[80vw]",isOpen:!0,onClose:i,type:"success",children:(0,G.jsx)("div",{className:"max-h-[80vh] overflow-auto",children:(0,G.jsx)(es,{json:n[a].message})})},"DebugMessageModal-".concat(a)),d&&(0,G.jsx)(E.Z,{isOpen:!0,onClose:()=>u(!1),type:"success",size:"custom",noPadding:!0,children:(0,G.jsx)(K,{clientThreadId:t})},"DebugTreeViewer"),m&&(0,G.jsx)(E.Z,{size:"normal",isOpen:!0,onClose:()=>h(void 0),type:"success",children:(0,G.jsx)("img",{src:m,alt:"debug image"})},"DebugFrameViewer")]}):null}function eu(e,t){let s=new Blob([JSON.stringify({conversation_id:p.tQ.getServerThreadId(e),messages:t},null,2)],{type:"application/json"}),r=URL.createObjectURL(s),n=document.createElement("a");n.href=r,n.download="messages-".concat(p.tQ.getServerThreadId(e),".json"),n.click(),URL.revokeObjectURL(r)}function em(e){let{clientThreadId:t,messages:s}=e,r=(0,k.useCallback)(()=>{eu(t,s)},[t,s]);return(0,G.jsx)(I.z,{onClick:r,color:"primary",size:"small",icon:M._8t,children:(0,G.jsx)(S.Z,et({},eg.downloadRawConversation))})}function ex(e){let{0:t,1:s}=(0,k.useState)([]),r=(0,j.NL)(),{frameAssets:n}=e;return(0,k.useEffect)(()=>{async function e(){return Promise.all(n.map(async e=>{let{image_asset_pointer:t,timestamp:s}=e;return{src:(await f.j.fetch(r,{asset:t})).url,timestamp:s}}))}n.length>0&&e().then(s)},[n,r]),(0,G.jsx)(er,{frames:t,setFrameSrc:e.setFrameSrc})}function ep(e){let t=ep.useAssetPointerSource(e.assetPointer),s=ep.useAudioSource(e.audio),r=null!=t?t:s;return r?(0,G.jsx)("audio",{controls:!0,src:r,className:"w-full"}):null}ep.useAssetPointerSource=e=>{let{0:t,1:s}=(0,k.useState)(null),r=(0,j.NL)();return(0,k.useEffect)(()=>{e&&f.j.fetch(r,{asset:e}).then(e=>{s(e.url)})},[r,e]),t},ep.useAudioSource=e=>{let{0:t,1:s}=(0,k.useState)(null);return(0,k.useEffect)(()=>{if(e){let t=atob(e.payload),r=new Uint8Array(t.length);for(let e=0;e<t.length;e++)r[e]=t.charCodeAt(e);let n=new Blob([r],{type:"audio/".concat(e.format)}),a=URL.createObjectURL(n);return s(a),()=>{URL.revokeObjectURL(a)}}},[e]),t};let eh=T.Z.div(a||(a=(0,i.Z)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary"]))),ef=T.Z.pre(l||(l=(0,i.Z)(["whitespace-pre-wrap text-sm"]))),eb=T.Z.div(o||(o=(0,i.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200"]))),eg=(0,P.vU)({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}})}}]);
//# sourceMappingURL=7198-204d3e78d415acf6.js.map