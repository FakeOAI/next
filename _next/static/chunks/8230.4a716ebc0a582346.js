"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8230],{8230:function(e,t,r){r.r(t),r.d(t,{DebugConversation:function(){return ea},DebugConversationSidebar:function(){return en},default:function(){return X},downloadMessages:function(){return eo}});var n,a,o,l,s,i=r(41141),c=r(94521),d=r(85734),u=(r(64831),r(71840)),f=(r(93223),r(4702)),p=r(86021),m=r(92524),g=r(22770),h=r(20408),v=r(16054),x=(r(96053),r(35226)),b=r(48538),j=r(61888),y=r(86078),w=r.n(y),C=r(92379),N=r(72256),E=r(26123),k=r(25940),P=r(15269),T=r(54368),S=r(74091),O=r(5443),D=r(10727),R=r(82783),_=r(20736),M=r(651);function A(e){let{children:t,sidebarOpen:r,onClose:n}=e;return(0,M.jsx)(R.u.Root,{show:r,as:C.Fragment,children:(0,M.jsxs)(_.V,{as:"div",className:"relative z-10",onClose:n,children:[(0,M.jsx)("div",{className:"fixed inset-0"}),(0,M.jsx)("div",{className:"fixed inset-0 overflow-hidden",children:(0,M.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:(0,M.jsx)("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:(0,M.jsx)(R.u.Child,{as:C.Fragment,enter:"transform transition ease-in-out duration-100 sm:duration-300",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-300 sm:duration-500",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:(0,M.jsx)(_.V.Panel,{className:"pointer-events-auto w-screen max-w-md border-l border-gray-100 dark:border-gray-700",children:(0,M.jsx)("div",{className:"h-full overflow-y-auto bg-token-main-surface-primary shadow-xl",children:t})})})})})})]})})}var F=r(62484),I=r(33481),L=r(49217),Z=r(73487),V=r(94982),z=r(34565);function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function $(e){var t;let{clientThreadId:r}=e,{rebaseSystemMessageContent:n,showDebugConversationTurns:a}=(0,z.N)(),{0:o,1:l}=(0,C.useState)(()=>n?JSON.stringify(n,null,2):void 0),{0:s,1:i}=(0,C.useState)(!!n),c=(0,p.u9)(r,p.tQ.getThreadCurrentLeafId(r)),f=(0,j.findLast)(c,e=>e.content.content_type===d.PX.SystemContent),m=null!==(t=null==f?void 0:f.content)&&void 0!==t?t:null,g=(0,C.useMemo)(()=>(0,j.debounce)(e=>{try{e?z.N.setState({rebaseSystemMessageContent:U(U({},JSON.parse(e)),{},{content_type:d.PX.SystemContent})}):z.N.setState({rebaseSystemMessageContent:null}),V.m.closeAll()}catch(e){V.m.danger("The System Message is not valid JSON")}},500),[]);return(0,C.useEffect)(()=>{s?g(o):(g.cancel(),z.N.setState({rebaseSystemMessageContent:null}))},[g,s,o]),(0,M.jsxs)("div",{className:"flex flex-col gap-3 px-4",children:[(0,M.jsxs)("div",{children:[(0,M.jsxs)("div",{className:"flex justify-between",children:[(0,M.jsx)(F.u,{label:"Enable to apply this system message to the current conversation.",children:(0,M.jsx)(u.Z,{id:"enabled",label:"Enabled",checked:s,onChange:e=>i(e.currentTarget.checked)})}),(0,M.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:a,onChange:()=>{z.N.setState({showDebugConversationTurns:!a})}})]}),(0,M.jsx)(O.z,{disabled:!m,className:"mt-2",onClick:()=>{l(m?JSON.stringify(m,null,2):"")},size:"small",children:"Load active system message"})]}),(0,M.jsxs)("div",{children:[(0,M.jsx)("label",{className:"text-sm",children:"System Message"}),(0,M.jsx)(B,{disabled:!s,placeholder:m?"Press `Load active system message` to pre-populate this":"Start a conversation and then press `Load active system message` to pre-populate this",className:"min-h-[75vh] rounded-md border border-gray-400 p-1 font-mono",value:o,onChange:e=>l(e.target.value)})]})]})}let B=S.Z.textarea(n||(n=(0,i.Z)(["w-full rounded-lg border border-token-border-light bg-token-main-surface-primary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary disabled:bg-token-main-surface-tertiary"])));var H=r(19841);function Q(e){let{clientThreadId:t}=e,{0:r,1:n}=(0,C.useState)([]),a=p.tQ.getThreadCurrentLeafId(t),o=p.tQ.getThreadConversationTurns(t,a),l=e=>{let r=p.tQ.getTree(t).getLeafFromNode(e);p.tQ.setThreadCurrentLeafId(t,r.id)},s=e=>{n(e=>[...e,a]),l(e)};return(0,M.jsxs)(M.Fragment,{children:[r.length>0&&(0,M.jsxs)(O.z,{className:"absolute left-2 top-2",color:"secondary",onClick:()=>{l(r[r.length-1]),n(e=>e.slice(0,-1))},children:[(0,M.jsx)(I.eF8,{className:"icon-sm"}),"Go back to ",r[r.length-1]]}),(0,M.jsx)("div",{className:"flex flex-col items-center gap-4 overflow-auto p-4 text-xs",children:o.map((e,r)=>{let n;let a=e.messages[0].nodeId,o=p.tQ.getTree(t),l=0!==r?o.getParent(a):null,i=null!=l?l.children.findIndex(e=>a===e):0,c=null!=l?l.children:[],u=c.slice(0,i),f=c.slice(i+1);switch(e.role){case d.uU.User:n="bg-blue-500";break;case d.uU.Assistant:n="bg-gray-600";break;default:n="bg-gray-400"}return(0,M.jsxs)("div",{className:(0,H.default)("relative p-2",n),children:[(0,M.jsx)("div",{className:"absolute bottom-0 left-0 -ml-2 flex -translate-x-full gap-2 pl-2",children:u.map(e=>(0,M.jsx)(q,{variantId:e,onChangeItemInView:s},e))}),(0,M.jsx)("div",{className:"absolute left-full top-0 ml-2 flex gap-2 pr-2",children:f.map(e=>(0,M.jsx)(q,{variantId:e,onChangeItemInView:s},e))}),(0,M.jsx)("div",{className:"flex flex-col gap-2",children:e.messages.map(e=>(0,M.jsxs)("div",{className:"h-14 w-32 truncate bg-gray-200 p-1 text-black",children:[(0,M.jsx)("div",{className:"font-semibold",children:e.nodeId}),(0,M.jsx)("div",{className:"italic text-token-text-tertiary",children:e.message.author.role}),(0,M.jsx)("div",{children:(0,m.RR)(e.message)})]},e.nodeId))})]},r)})})]})}function q(e){let{variantId:t,onChangeItemInView:r}=e;return(0,M.jsx)("button",{className:"w-32 truncate bg-gray-400 p-2 text-black opacity-50 hover:opacity-100",onClick:()=>{r(t)},children:(0,M.jsx)("span",{className:"bg-gray-200 p-2",children:t})},t)}function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach(function(t){(0,c.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let W=w()(()=>Promise.all([r.e(1459),r.e(6113)]).then(r.bind(r,26113)).then(e=>e.default),{ssr:!1,loadableGenerated:{webpack:()=>[26113]}});function X(e){let{children:t,title:r,icon:n,isOpen:a,slideOver:o,onClose:l}=e,s=(0,M.jsxs)(ei,{children:[(0,M.jsxs)("div",{className:"flex items-start justify-between",children:[(0,M.jsxs)("div",{className:"flex items-center gap-2 px-4 py-2 text-lg font-semibold text-gray-900 dark:text-white",children:[(0,M.jsx)(n,{className:"icon-sm"}),r]}),(0,M.jsx)("div",{className:"mr-2 mt-2 flex h-7 items-center",children:(0,M.jsxs)("button",{type:"button",onClick:l,children:[(0,M.jsx)("span",{className:"sr-only",children:(0,M.jsx)(N.Z,J({},eu.closeSidebar))}),(0,M.jsx)(I.tPq,{className:"icon-md","aria-hidden":"true"})]})})]}),t]});return o?(0,M.jsx)(A,{sidebarOpen:a,onClose:l,children:s}):a?s:null}function K(e){let{nodes:t,setDebugNodeIndex:r}=e,n=t.map((e,t)=>{var n;let a=e.message,{role:o,name:l}=a.author,s=(0,j.get)(a,"metadata.__internal.model_id"),i=(0,j.get)(a,"metadata.__internal.agent.settings.completion_api.engine"),c=(0,j.get)(a,"metadata.__internal.model_experiment_name"),u=(0,j.get)(a,"metadata.__internal.model_experiment_treatment"),f=(0,j.get)(a,"metadata.__internal.normalized_model_side"),p=(0,j.get)(a,"metadata.__internal.model_experiment_group_name"),g=(0,j.get)(a,"metadata.__internal.model_experiment_group_params"),v=(0,j.get)(a,"metadata.__internal.model_experiment_override"),x=(0,j.get)(a,"metadata.__internal.model_experiment_eval_seq"),b=null===(n=(0,j.get)(a,"metadata.__internal.raw_tokens"))||void 0===n?void 0:n.length,y=(0,j.get)(a,"metadata.request_id"),w=h.U.getAudio(a),C=h.U.getAudioAssetPointers(a);return(0,M.jsxs)(ed,{role:"button",onClick:()=>r(t),children:[(0,M.jsxs)("div",{className:"text-xs font-semibold uppercase text-token-text-tertiary",children:[o,l&&l!==o&&" (".concat(l,")"),a.recipient&&" -> ",(0,m.Ej)(a)]}),(a.author.role!==d.uU.System||y)&&(0,M.jsxs)("div",{className:"text-xs text-token-text-tertiary",children:[(0,M.jsxs)("div",{children:["ID: ",a.id]}),e.id!==a.id&&(0,M.jsxs)("div",{children:["UI Node ID: ",e.id]}),(0,M.jsxs)("div",{children:["Req ID: ",y||"Reload page to see ID"]})]}),(0,M.jsx)("div",{className:"line-clamp-6",children:(0,m.RR)(a)}),(b||s||i||c||u||f||p||g||v||x)&&(0,M.jsxs)("div",{className:"mt-4 w-full self-start rounded-xl bg-blue-200 px-3 py-0.5 text-xs text-black",children:[void 0!==b&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Tokens Count:"})," ",b]}),s&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Model ID:"})," ",s]}),i&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Engine:"})," ",i]}),c&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Experiment:"})," ",c]}),u&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Treatment:"})," ",u]}),f&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Normalized Side:"})," ",f]}),p&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Group Name:"})," ",p]}),g&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Group Params:"}),(0,M.jsx)("div",{children:JSON.stringify(g,null,2)})]}),v&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Above Params are Overridden By:"})," ",v]}),x&&(0,M.jsxs)("div",{children:[(0,M.jsx)("b",{children:"Experiment Eval Seq:"})," click to see"]})]}),w.length||C.length?(0,M.jsxs)("div",{className:"mt-4 flex flex-col flex-nowrap gap-2",children:[w.map((e,t)=>(0,M.jsx)(es,{audio:e},t)),C.map((e,t)=>(0,M.jsx)(es,{assetPointer:e},t))]}):null]},a.id)});return(0,M.jsx)(ec,{children:n})}let ee=e=>(0,M.jsx)(P.c.Input,J(J({},e),{},{inputClassName:"focus:ring-0"}));function et(){let e=(0,z.N)(),t=(0,Z.ZP)().map(e=>({label:e.name,options:e.options.map(e=>({label:"".concat(e.value," (").concat(e.name,")"),value:e.value}))}));return(0,M.jsxs)("div",{className:"mt-2 flex flex-col justify-around gap-3 px-4 py-1 text-xs font-semibold ",children:[(0,M.jsx)(u.Z,{id:"force-paragen",label:"Force Parallel Gen",checked:e.forceParagen,onChange:()=>{z.N.setState({forceParagen:!e.forceParagen})}}),(0,M.jsx)(T.ZP,{options:t,name:"force-paragen-model",className:"shadow-none dark:text-gray-800",isDisabled:!e.forceParagen,isLoading:0===t.length,value:e.forceParagenModel,isClearable:!0,isMulti:!1,components:{Input:ee},onChange:e=>{z.N.setState({forceParagenModel:null!=e?e:z.J})}}),(0,M.jsx)(u.Z,{id:"force-paragen",label:"Force Nulligen",checked:e.forceNulligen,onChange:()=>{z.N.setState({forceNulligen:!e.forceNulligen})}}),(0,M.jsx)(u.Z,{id:"force-rate-limit",label:"Force Rate Limit",checked:e.forceRateLimit,onChange:()=>{z.N.setState({forceRateLimit:!e.forceRateLimit})}}),(0,M.jsx)(u.Z,{id:"reset-rate-limit",label:"Reset Rate Limits",checked:e.resetRateLimits,onChange:()=>{z.N.setState({resetRateLimits:!e.resetRateLimits})}}),(0,M.jsx)(F.u,{label:"Enabling this will show debug conversation messages in the chat",children:(0,M.jsx)(u.Z,{id:"show-internal-conversation-turns",label:"Conversation debug mode",checked:e.showDebugConversationTurns,onChange:()=>{z.N.setState({showDebugConversationTurns:!e.showDebugConversationTurns})}})})]})}let er=S.Z.div(a||(a=(0,i.Z)(["px-3 pb-2 text-xs font-semibold uppercase border-b-2 ",""])),e=>{let{$isSelected:t}=e;return t?"border-black dark:border-white":"border-transparent"});function en(e){let{clientThreadId:t,isOpen:r,slideOver:n,onClose:a}=e,o=(0,E.Z)(),l=(0,f.hz)(),{0:s,1:i}=(0,C.useState)("conversation");return null!=l&&l.includes("debug")?(0,M.jsx)(X,{icon:I.reV,title:o.formatMessage(eu.debugTitle),isOpen:r,slideOver:n,onClose:a,children:(0,M.jsxs)(v.fC,{orientation:"vertical",defaultValue:s,onValueChange:e=>i(e),children:[(0,M.jsxs)(v.aV,{className:"flex items-center justify-center gap-2 px-4 py-1 text-xs font-semibold",children:[(0,M.jsx)(v.xz,{value:"conversation",children:(0,M.jsx)(er,{$isSelected:"conversation"===s,children:"Conversation"})}),(0,M.jsx)(v.xz,{value:"system-message-editor",className:"p-4",children:(0,M.jsx)(er,{$isSelected:"system-message-editor"===s,children:"System Message Editor"})})]}),(0,M.jsx)(v.VY,{value:"conversation",children:(0,M.jsx)(ea,{clientThreadId:t})}),(0,M.jsx)(v.VY,{value:"system-message-editor",children:(0,M.jsx)($,{clientThreadId:t})})]})}):null}function ea(e){let{clientThreadId:t}=e,r=(0,E.Z)(),n=p.tQ.getThreadCurrentLeafId(t),a=(0,p.Fe)(t,n),{0:o,1:l}=(0,C.useState)(),s=(0,f.hz)(),i=(0,C.useCallback)(()=>{l(void 0)},[]),c=(0,C.useCallback)(()=>{let e=p.tQ.getTree(t);(0,b.v)(e.getTextFromThread(n))},[n,t]),{0:d,1:u}=(0,C.useState)(!1);return null!=s&&s.includes("debug")?(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)("div",{className:"mb-2 flex items-center justify-around px-4 py-1 text-xs font-semibold uppercase",children:(0,M.jsx)(el,{clientThreadId:t,messages:a.map(e=>e.message)})}),!1,(0,M.jsxs)("div",{className:"flex items-center justify-around gap-2 px-4 py-1 text-xs font-semibold uppercase",children:[(0,M.jsx)("div",{children:(0,M.jsx)(D.Z,{onCopy:c,buttonText:r.formatMessage(eu.copyText)})}),(0,M.jsxs)("button",{className:"flex items-center justify-center gap-2",onClick:()=>u(!0),children:[(0,M.jsx)(I.aAc,{className:"icon-sm rotate-90"}),"View tree"]})]}),(0,M.jsx)(et,{}),(0,M.jsx)(K,{nodes:a,setDebugNodeIndex:l}),void 0!==o&&(0,M.jsx)(L.Z,{className:"min-w-[80vw]",isOpen:!0,onClose:i,type:"success",children:(0,M.jsx)("div",{className:"max-h-[80vh] overflow-auto",children:(0,M.jsx)(W,{json:a[o].message})})},"DebugMessageModal-".concat(o)),d&&(0,M.jsx)(L.Z,{isOpen:!0,onClose:()=>u(!1),type:"success",size:"custom",noPadding:!0,children:(0,M.jsx)(Q,{clientThreadId:t})},"DebugTreeViewer")]}):null}function eo(e,t){let r=new Blob([JSON.stringify({conversation_id:p.tQ.getServerThreadId(e),messages:t},null,2)],{type:"application/json"}),n=URL.createObjectURL(r),a=document.createElement("a");a.href=n,a.download="messages-".concat(p.tQ.getServerThreadId(e),".json"),a.click(),URL.revokeObjectURL(n)}function el(e){let{clientThreadId:t,messages:r}=e,n=(0,C.useCallback)(()=>{eo(t,r)},[t,r]);return(0,M.jsx)(O.z,{onClick:n,color:"primary",size:"small",icon:I._8t,children:(0,M.jsx)(N.Z,J({},eu.downloadRawConversation))})}function es(e){let t=es.useAssetPointerSource(e.assetPointer),r=es.useAudioSource(e.audio),n=null!=t?t:r;return n?(0,M.jsx)("audio",{controls:!0,src:n,className:"w-full"}):null}es.useAssetPointerSource=e=>{let{0:t,1:r}=(0,C.useState)(null),n=(0,x.NL)();return(0,C.useEffect)(()=>{e&&g.j.fetch(n,{asset:e}).then(e=>{r(e.url)})},[n,e]),t},es.useAudioSource=e=>{let{0:t,1:r}=(0,C.useState)(null);return(0,C.useEffect)(()=>{if(e){let t=atob(e.payload),n=new Uint8Array(t.length);for(let e=0;e<t.length;e++)n[e]=t.charCodeAt(e);let a=new Blob([n],{type:"audio/".concat(e.format)}),o=URL.createObjectURL(a);return r(o),()=>{URL.revokeObjectURL(o)}}},[e]),t};let ei=S.Z.div(o||(o=(0,i.Z)(["overflow-y-auto h-full md:w-[250px] lg:w-[300px] xl:w-[350px] 2xl:w-[400px] md:border-l md:border-gray-100 md:dark:border-gray-700 popover bg-token-main-surface-primary"]))),ec=S.Z.pre(l||(l=(0,i.Z)(["whitespace-pre-wrap text-sm"]))),ed=S.Z.div(s||(s=(0,i.Z)(["px-6 py-4 flex flex-col gap-1 hover:bg-gray-50 dark:hover:bg-gray-500/10 cursor-pointer border-b dark:border-white/10 border-gray-200"]))),eu=(0,k.vU)({debugTitle:{id:"DebugSidebar.debugTitle",defaultMessage:"Debug"},copyText:{id:"DebugSidebar.copyText",defaultMessage:"Copy text"},downloadRawConversation:{id:"DebugSidebar.downloadRawConversation",defaultMessage:"Download raw conversation"},uploadRawConversation:{id:"DebugSidebar.uploadRawConversation",defaultMessage:"Upload conversation dump"},closeSidebar:{id:"DebugSidebar.closeSidebar",defaultMessage:"Close sidebar"}})},20736:function(e,t,r){let n,a,o,l;r.d(t,{V:function(){return ea}});var s=r(92379),i=r(26970),c=r(97757),d=r(64775),u=r(27192),f=r(44137),p=r(78461),m=r(26569),g=r(35165),h=r(74214),v=r(42652),x=r(24980),b=r(78749),j=r(29555),y=r(15750),w=r(36458);function C(e,t){let r=(0,s.useRef)([]),n=(0,v.z)(e);(0,s.useEffect)(()=>{let e=[...r.current];for(let[a,o]of t.entries())if(r.current[a]!==o){let a=n(t,e);return r.current=t,a}},[n,...t])}var N=((n=N||{})[n.None=1]="None",n[n.InitialFocus=2]="InitialFocus",n[n.TabLock=4]="TabLock",n[n.FocusLock=8]="FocusLock",n[n.RestoreFocus=16]="RestoreFocus",n[n.All=30]="All",n);let E=Object.assign((0,c.yV)(function(e,t){let r=(0,s.useRef)(null),n=(0,d.T)(r,t),{initialFocus:a,containers:o,features:l=30,...u}=e;(0,m.H)()||(l=1);let f=(0,j.i)(r);!function({ownerDocument:e},t){let r=(0,s.useRef)(null);(0,y.O)(null==e?void 0:e.defaultView,"focusout",e=>{!t||r.current||(r.current=e.target)},!0),C(()=>{t||((null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,h.C5)(r.current),r.current=null)},[t]);let n=(0,s.useRef)(!1);(0,s.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,w.Y)(()=>{n.current&&((0,h.C5)(r.current),r.current=null)})}),[])}({ownerDocument:f},!!(16&l));let p=function({ownerDocument:e,container:t,initialFocus:r},n){let a=(0,s.useRef)(null),o=(0,b.t)();return C(()=>{if(!n)return;let l=t.current;l&&(0,w.Y)(()=>{if(!o.current)return;let t=null==e?void 0:e.activeElement;if(null!=r&&r.current){if((null==r?void 0:r.current)===t){a.current=t;return}}else if(l.contains(t)){a.current=t;return}null!=r&&r.current?(0,h.C5)(r.current):(0,h.jA)(l,h.TO.First)===h.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==e?void 0:e.activeElement})},[n]),a}({ownerDocument:f,container:r,initialFocus:a},!!(2&l));!function({ownerDocument:e,container:t,containers:r,previousActiveElement:n},a){let o=(0,b.t)();(0,y.O)(null==e?void 0:e.defaultView,"focus",e=>{if(!a||!o.current)return;let l=new Set(null==r?void 0:r.current);l.add(t);let s=n.current;if(!s)return;let i=e.target;i&&i instanceof HTMLElement?function(e,t){var r;for(let n of e)if(null!=(r=n.current)&&r.contains(t))return!0;return!1}(l,i)?(n.current=i,(0,h.C5)(i)):(e.preventDefault(),e.stopPropagation(),(0,h.C5)(s)):(0,h.C5)(n.current)},!0)}({ownerDocument:f,container:r,containers:o,previousActiveElement:p},!!(8&l));let N=(0,x.l)(),E=(0,v.z)(()=>{let e=r.current;e&&(0,i.E)(N.current,{[x.N.Forwards]:()=>(0,h.jA)(e,h.TO.First),[x.N.Backwards]:()=>(0,h.jA)(e,h.TO.Last)})});return s.createElement(s.Fragment,null,!!(4&l)&&s.createElement(g._,{as:"button",type:"button",onFocus:E,features:g.A.Focusable}),(0,c.sY)({ourProps:{ref:n},theirProps:u,defaultTag:"div",name:"FocusTrap"}),!!(4&l)&&s.createElement(g._,{as:"button",type:"button",onFocus:E,features:g.A.Focusable}))}),{features:N});var k=r(75370),P=r(78697);let T=new Set,S=new Map;function O(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function D(e){let t=S.get(e);t&&(null===t["aria-hidden"]?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}var R=r(95295);let _=(0,s.createContext)(!1);function M(e){return s.createElement(_.Provider,{value:e.force},e.children)}var A=r(71661);let F=s.Fragment,I=(0,c.yV)(function(e,t){let r=(0,s.useRef)(null),n=(0,d.T)((0,d.h)(e=>{r.current=e}),t),a=(0,j.i)(r),o=function(e){let t=(0,s.useContext)(_),r=(0,s.useContext)(Z),n=(0,j.i)(e),[a,o]=(0,s.useState)(()=>{if(!t&&null!==r||A.s)return null;let e=null==n?void 0:n.getElementById("headlessui-portal-root");if(e)return e;if(null===n)return null;let a=n.createElement("div");return a.setAttribute("id","headlessui-portal-root"),n.body.appendChild(a)});return(0,s.useEffect)(()=>{null!==a&&(null!=n&&n.body.contains(a)||null==n||n.body.appendChild(a))},[a,n]),(0,s.useEffect)(()=>{t||null!==r&&o(r.current)},[r,o,t]),a}(r),[l]=(0,s.useState)(()=>{var e;return A.s?null:null!=(e=null==a?void 0:a.createElement("div"))?e:null}),i=(0,m.H)(),u=(0,s.useRef)(!1);return(0,P.e)(()=>{if(u.current=!1,!(!o||!l))return o.contains(l)||(l.setAttribute("data-headlessui-portal",""),o.appendChild(l)),()=>{u.current=!0,(0,w.Y)(()=>{var e;u.current&&o&&l&&(o.removeChild(l),o.childNodes.length<=0&&(null==(e=o.parentElement)||e.removeChild(o)))})}},[o,l]),i&&o&&l?(0,R.createPortal)((0,c.sY)({ourProps:{ref:n},theirProps:e,defaultTag:F,name:"Portal"}),l):null}),L=s.Fragment,Z=(0,s.createContext)(null),V=Object.assign(I,{Group:(0,c.yV)(function(e,t){let{target:r,...n}=e,a={ref:(0,d.T)(t)};return s.createElement(Z.Provider,{value:r},(0,c.sY)({ourProps:a,theirProps:n,defaultTag:L,name:"Popover.Group"}))})}),z=(0,s.createContext)(null),Y=(0,c.yV)(function(e,t){let r=function e(){let t=(0,s.useContext)(z);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),n=`headlessui-description-${(0,p.M)()}`,a=(0,d.T)(t);(0,P.e)(()=>r.register(n),[n,r.register]);let o={ref:a,...r.props,id:n};return(0,c.sY)({ourProps:o,theirProps:e,slot:r.slot||{},defaultTag:"p",name:r.name||"Description"})});var U=r(70232);let $=(0,s.createContext)(()=>{});$.displayName="StackContext";var B=((a=B||{})[a.Add=0]="Add",a[a.Remove=1]="Remove",a);function H({children:e,onUpdate:t,type:r,element:n,enabled:a}){let o=(0,s.useContext)($),l=(0,v.z)((...e)=>{null==t||t(...e),o(...e)});return(0,P.e)(()=>{let e=void 0===a||!0===a;return e&&l(0,r,n),()=>{e&&l(1,r,n)}},[l,r,n,a]),s.createElement($.Provider,{value:l},e)}var Q=r(23508),q=r(65033),G=((o=G||{})[o.Open=0]="Open",o[o.Closed=1]="Closed",o),J=((l=J||{})[l.SetTitleId=0]="SetTitleId",l);let W={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},X=(0,s.createContext)(null);function K(e){let t=(0,s.useContext)(X);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,K),t}return t}function ee(e,t){return(0,i.E)(t.type,W,e,t)}X.displayName="DialogContext";let et=c.AN.RenderStrategy|c.AN.Static,er=(0,c.yV)(function(e,t){var r;let{open:n,onClose:a,initialFocus:o,__demoMode:l=!1,...f}=e,[h,x]=(0,s.useState)(0),b=(0,U.oJ)();void 0===n&&null!==b&&(n=(0,i.E)(b,{[U.ZM.Open]:!0,[U.ZM.Closed]:!1}));let w=(0,s.useRef)(new Set),C=(0,s.useRef)(null),N=(0,d.T)(C,t),R=(0,s.useRef)(null),_=(0,j.i)(C),A=e.hasOwnProperty("open")||null!==b,F=e.hasOwnProperty("onClose");if(!A&&!F)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!A)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!F)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof n)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if("function"!=typeof a)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let I=n?0:1,[L,Z]=(0,s.useReducer)(ee,{titleId:null,descriptionId:null,panelRef:(0,s.createRef)()}),Y=(0,v.z)(()=>a(!1)),$=(0,v.z)(e=>Z({type:0,id:e})),G=!!(0,m.H)()&&!l&&0===I,J=h>1,W=null!==(0,s.useContext)(X);(function(e,t=!0){(0,P.e)(()=>{if(!t||!e.current)return;let r=e.current,n=(0,k.r)(r);if(n){for(let e of(T.add(r),S.keys()))e.contains(r)&&(D(e),S.delete(e));return n.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement){for(let t of T)if(e.contains(t))return;1===T.size&&(S.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),O(e))}}),()=>{if(T.delete(r),T.size>0)n.querySelectorAll("body > *").forEach(e=>{if(e instanceof HTMLElement&&!S.has(e)){for(let t of T)if(e.contains(t))return;S.set(e,{"aria-hidden":e.getAttribute("aria-hidden"),inert:e.inert}),O(e)}});else for(let e of S.keys())D(e),S.delete(e)}}},[t])})(C,!!J&&G),(0,Q.O)(()=>{var e,t;return[...Array.from(null!=(e=null==_?void 0:_.querySelectorAll("body > *, [data-headlessui-portal]"))?e:[]).filter(e=>!(!(e instanceof HTMLElement)||e.contains(R.current)||L.panelRef.current&&e.contains(L.panelRef.current))),null!=(t=L.panelRef.current)?t:C.current]},Y,G&&!J),(0,y.O)(null==_?void 0:_.defaultView,"keydown",e=>{e.defaultPrevented||e.key===u.R.Escape&&0===I&&(J||(e.preventDefault(),e.stopPropagation(),Y()))}),r=0===I&&!W,(0,s.useEffect)(()=>{var e;if(!r||!_)return;let t=(0,q.k)();function n(e,r,n){let a=e.style.getPropertyValue(r);return Object.assign(e.style,{[r]:n}),t.add(()=>{Object.assign(e.style,{[r]:a})})}let a=_.documentElement,o=(null!=(e=_.defaultView)?e:window).innerWidth-a.clientWidth;if(n(a,"overflow","hidden"),o>0){let e=a.clientWidth-a.offsetWidth;n(a,"paddingRight",`${o-e}px`)}if(/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0){let e=window.pageYOffset;n(a,"position","fixed"),n(a,"marginTop",`-${e}px`),n(a,"width","100%"),t.add(()=>window.scrollTo(0,e))}return t.dispose},[_,r]),(0,s.useEffect)(()=>{if(0!==I||!C.current)return;let e=new IntersectionObserver(e=>{for(let t of e)0===t.boundingClientRect.x&&0===t.boundingClientRect.y&&0===t.boundingClientRect.width&&0===t.boundingClientRect.height&&Y()});return e.observe(C.current),()=>e.disconnect()},[I,C,Y]);let[K,er]=function(){let[e,t]=(0,s.useState)([]);return[e.length>0?e.join(" "):void 0,(0,s.useMemo)(()=>function(e){let r=(0,v.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let r=t.slice(),n=r.indexOf(e);return -1!==n&&r.splice(n,1),r}))),n=(0,s.useMemo)(()=>({register:r,slot:e.slot,name:e.name,props:e.props}),[r,e.slot,e.name,e.props]);return s.createElement(z.Provider,{value:n},e.children)},[t])]}(),en=`headlessui-dialog-${(0,p.M)()}`,ea=(0,s.useMemo)(()=>[{dialogState:I,close:Y,setTitleId:$},L],[I,L,Y,$]),eo=(0,s.useMemo)(()=>({open:0===I}),[I]),el={ref:N,id:en,role:"dialog","aria-modal":0===I||void 0,"aria-labelledby":L.titleId,"aria-describedby":K};return s.createElement(H,{type:"Dialog",enabled:0===I,element:C,onUpdate:(0,v.z)((e,t,r)=>{"Dialog"===t&&(0,i.E)(e,{[B.Add](){w.current.add(r),x(e=>e+1)},[B.Remove](){w.current.add(r),x(e=>e-1)}})})},s.createElement(M,{force:!0},s.createElement(V,null,s.createElement(X.Provider,{value:ea},s.createElement(V.Group,{target:C},s.createElement(M,{force:!1},s.createElement(er,{slot:eo,name:"Dialog.Description"},s.createElement(E,{initialFocus:o,containers:w,features:G?(0,i.E)(J?"parent":"leaf",{parent:E.features.RestoreFocus,leaf:E.features.All&~E.features.FocusLock}):E.features.None},(0,c.sY)({ourProps:el,theirProps:f,slot:eo,defaultTag:"div",features:et,visible:0===I,name:"Dialog"})))))))),s.createElement(g._,{features:g.A.Hidden,ref:R}))}),en=(0,c.yV)(function(e,t){let[{dialogState:r,close:n}]=K("Dialog.Overlay"),a=(0,d.T)(t),o=`headlessui-dialog-overlay-${(0,p.M)()}`,l=(0,v.z)(e=>{if(e.target===e.currentTarget){if((0,f.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),n()}}),i=(0,s.useMemo)(()=>({open:0===r}),[r]);return(0,c.sY)({ourProps:{ref:a,id:o,"aria-hidden":!0,onClick:l},theirProps:e,slot:i,defaultTag:"div",name:"Dialog.Overlay"})}),ea=Object.assign(er,{Backdrop:(0,c.yV)(function(e,t){let[{dialogState:r},n]=K("Dialog.Backdrop"),a=(0,d.T)(t),o=`headlessui-dialog-backdrop-${(0,p.M)()}`;(0,s.useEffect)(()=>{if(null===n.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[n.panelRef]);let l=(0,s.useMemo)(()=>({open:0===r}),[r]);return s.createElement(M,{force:!0},s.createElement(V,null,(0,c.sY)({ourProps:{ref:a,id:o,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,c.yV)(function(e,t){let[{dialogState:r},n]=K("Dialog.Panel"),a=(0,d.T)(t,n.panelRef),o=`headlessui-dialog-panel-${(0,p.M)()}`,l=(0,s.useMemo)(()=>({open:0===r}),[r]),i=(0,v.z)(e=>{e.stopPropagation()});return(0,c.sY)({ourProps:{ref:a,id:o,onClick:i},theirProps:e,slot:l,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:en,Title:(0,c.yV)(function(e,t){let[{dialogState:r,setTitleId:n}]=K("Dialog.Title"),a=`headlessui-dialog-title-${(0,p.M)()}`,o=(0,d.T)(t);(0,s.useEffect)(()=>(n(a),()=>n(null)),[a,n]);let l=(0,s.useMemo)(()=>({open:0===r}),[r]);return(0,c.sY)({ourProps:{ref:o,id:a},theirProps:e,slot:l,defaultTag:"h2",name:"Dialog.Title"})}),Description:Y})},15750:function(e,t,r){r.d(t,{O:function(){return o}});var n=r(92379),a=r(22088);function o(e,t,r,o){let l=(0,a.E)(r);(0,n.useEffect)(()=>{function r(e){l.current(e)}return(e=null!=e?e:window).addEventListener(t,r,o),()=>e.removeEventListener(t,r,o)},[e,t,o])}},24980:function(e,t,r){let n;r.d(t,{N:function(){return l},l:function(){return s}});var a=r(92379),o=r(22088),l=((n=l||{})[n.Forwards=0]="Forwards",n[n.Backwards=1]="Backwards",n);function s(){var e,t;let r,n=(0,a.useRef)(0);return e="keydown",t=e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},r=(0,o.E)(t),(0,a.useEffect)(()=>{function t(e){r.current(e)}return window.addEventListener(e,t,!0),()=>window.removeEventListener(e,t,!0)},[e,!0]),n}},35165:function(e,t,r){let n;r.d(t,{A:function(){return o},_:function(){return l}});var a=r(97757),o=((n=o||{})[n.None=1]="None",n[n.Focusable=2]="Focusable",n[n.Hidden=4]="Hidden",n);let l=(0,a.yV)(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(2&r)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&r)==4&&(2&r)!=2&&{display:"none"}}};return(0,a.sY)({ourProps:o,theirProps:n,slot:{},defaultTag:"div",name:"Hidden"})})}}]);
//# sourceMappingURL=8230.4a716ebc0a582346.js.map