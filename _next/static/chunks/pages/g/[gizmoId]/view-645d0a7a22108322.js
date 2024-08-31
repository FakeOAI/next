(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{52051:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return A},default:function(){return W}});var s=r(99333),n=r(16757),o=r(11550),i=r(24434),a=r(45027),l=r(12128),c=r(39004),d=r(17711),u=r(99555),f=r(71090),m=r(84760),p=r(88667),x=r(34977),g=r(92379),b=r(47584),h=r(75325),y=r(98095),j=r(11433),v=r(651);let w=e=>{let{gizmoId:t,limit:r,cursor:s}=e;return(0,m.a)({queryFn:async()=>u.U.listVersions({gizmoId:t}),queryKey:["gizmo","versions",{gizmoId:t,limit:r,cursor:s}]})},k=(0,g.memo)(function(e){let{gizmoId:t,onSelectVersion:r}=e,{value:s}=(0,p.sB)("3645668434");return t&&s?(0,v.jsx)(O,{gizmoId:t,onSelectVersion:r}):null});function O(e){let{gizmoId:t,onSelectVersion:r}=e,s=(0,x.useRouter)(),{data:n}=w({gizmoId:t}),o=n?n.items.reduce((e,t)=>{let r=new Date(t.updated_at),s=`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`;return e[s]||(e[s]=[]),e[s].push(t),e},{}):null,i=e=>{s.push(`/g/${t}/view?version=${e}`)};return o?(0,v.jsx)("div",{className:"relative h-full w-screen max-w-2xs",children:(0,v.jsx)("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:(0,v.jsx)("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(o).map((e,t)=>{let s=o[e];return(0,v.jsx)(N,{date:e,entries:s,onSelectVersion:r,onRestoreVersion:i},t)})})})}):null}function N(e){let{date:t,entries:r,onSelectVersion:s,onRestoreVersion:n}=e;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:(0,v.jsx)(b.Ji,{value:t,dateStyle:"medium"})}),(0,v.jsx)("div",{className:"flex flex-col space-y-2",children:r.map((e,t)=>(0,v.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>s(e.version),children:[(0,v.jsx)("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:(0,v.jsx)(b.Ji,{value:e.updated_at,timeStyle:"short"})}),(0,v.jsx)(P,{onRestoreVersion:()=>{n(e.version)}})]},t))})]})}function P(e){let{onRestoreVersion:t}=e;return(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(y.d,{sideOffset:8,triggerButton:(0,v.jsx)("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:(0,v.jsx)(j.nWS,{className:"icon-md"})}),children:(0,v.jsxs)(y.Z.Item,{className:"items-center",disabled:!1,onClick:t,children:[(0,v.jsx)(j.Ezi,{className:"icon-md"}),(0,v.jsx)(h.Z,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}var C=r(3551),z=r(91530),M=r.n(z),T=r(88301);let E=e=>{let{gizmoId:t,version:r}=e;return(0,m.a)({queryFn:async()=>u.U.getVersion({gizmoId:t,version:r}),queryKey:["gizmo","version",{gizmoId:t,version:r}]})},S=(e,t)=>`/gpts/editor/${e}?version=${t}`;function D(e){let{gizmoId:t}=e,{0:r,1:o}=(0,g.useState)(null),i=(0,x.useRouter)(),{data:a}=(0,c.b9)(t),l=a?.gizmo.current_user_permission?.can_write,d=(0,c.YR)(),{0:u,1:m}=(0,g.useState)(!1),p=()=>{r?i.push(S(t,r)):i.push((0,C.AA)(t))};return(0,v.jsxs)("div",{className:"flex h-screen w-full flex-col items-center",children:[(0,v.jsx)("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:a&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>i.back(),children:[(0,v.jsx)(j.Y1T,{className:"icon-lg"}),(0,v.jsx)("div",{className:"font-semibold",children:l?(0,v.jsx)(h.Z,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):(0,v.jsx)(h.Z,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),(0,v.jsx)("div",{className:"mr-4 flex items-center gap-2",children:l?(0,v.jsx)(f.cY,{color:"secondary",onClick:()=>{r&&r!==a.gizmo.live_version&&a.tools.find(e=>e.type===s.qK.JIT_PLUGIN&&e.metadata.auth?.type!==n.Jv.None)?m(!0):p()},children:(0,v.jsx)(h.Z,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):(0,v.jsx)(f.cY,{color:"secondary",loading:d.isPending,onClick:async()=>{let e=await d.mutateAsync({gizmoId:t});e.gizmo.id&&i.push(`/gpts/editor/${e.gizmo.id}`)},children:(0,v.jsx)(h.Z,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),(0,v.jsxs)("div",{className:"flex h-full w-full items-center",children:[l&&(0,v.jsx)(k,{gizmoId:t,onSelectVersion:e=>{o(e)}}),(0,v.jsx)(_,{gizmoId:t,version:r})]}),u&&(0,v.jsx)(Z,{onClose:()=>{m(!1)},onContinue:p})]})}function Z(e){let{onClose:t,onContinue:r}=e,{0:s,1:n}=(0,g.useState)(!1);return(0,v.jsx)(i.Z,{isOpen:!0,onClose:t,type:"warning",showCloseButton:!0,title:(0,v.jsx)(h.Z,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:(0,v.jsx)(o.z,{onClick:()=>{n(!0),r()},loading:s,color:"secondary",children:(0,v.jsx)(h.Z,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:(0,v.jsx)(o.z,{onClick:t,color:"secondary",children:(0,v.jsx)(h.Z,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:(0,v.jsx)(h.Z,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function _(e){let{gizmoId:t,version:r}=e,{data:n}=E({gizmoId:t,version:r}),{0:o,1:i}=(0,g.useState)(null);if(!n)return null;let c=n.tools.filter(e=>e.type===s.qK.JIT_PLUGIN);return(0,v.jsx)("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:(0,v.jsxs)("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[(0,v.jsx)(T.hj,{className:"self-center",children:(0,v.jsx)(l.Z,{src:n.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),(0,v.jsx)(T.yt,{type:"text",value:n.gizmo.display.name??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),(0,v.jsx)(T.yt,{type:"text",value:n.gizmo.display.description??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),(0,v.jsx)(T.B1,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:n.gizmo.instructions??"",disabled:!0})]}),n.gizmo.display.prompt_starters&&n.gizmo.display.prompt_starters.length>0&&(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),n.gizmo.display.prompt_starters.map((e,t)=>(0,v.jsx)(T.yt,{type:"text",value:e,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},t))]}),n.files&&n.files.length>0&&(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),n.files.map((e,t)=>(0,v.jsx)(a.Z,{file:e.name,fileId:e.id},t))]}),(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),(0,v.jsx)(d.W,{enabledTools:n.tools,onEnabledToolsChange:M()})]}),c&&c.length>0&&(0,v.jsxs)(T.hj,{children:[(0,v.jsx)(T.lX,{label:(0,v.jsx)(h.Z,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),c.map((e,t)=>(0,v.jsx)(T.r,{isDisabled:!1,actionTool:e,onShowActionsEditor:()=>{o?.metadata.action_id===e.metadata.action_id?i(null):i(e)}},t)),o&&(0,v.jsx)("textarea",{readOnly:!0,value:o.metadata.raw_spec??"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}var I=r(6530),R=r(93951),A=!0;function W(){let e=(0,R.t)(),t=(0,x.useRouter)(),r=t.query?.gizmoId??"",s=(0,I.CR)(r),{value:n}=(0,p.sB)("3645668434");return(0,g.useEffect)(()=>{null!=e&&e.isFree()&&t.push("/")},[e,t]),n?(0,v.jsx)(D,{gizmoId:s}):null}},98303:function(e,t,r){"use strict";r.d(t,{C:function(){return n}});var s=r(93951);function n(e){let t=(0,s.hz)();return!s.t()?.isWorkspaceAccount()||(t?.includes(e)??!1)}},5691:function(e,t,r){"use strict";r.d(t,{AJ:function(){return a},JQ:function(){return u},L_:function(){return c},Ul:function(){return d},e6:function(){return l},i5:function(){return f}});var s=r(99333),n=r(82920),o=r(47584),i=r(651);let a=(0,o.Em)({defaultMessage:"Microsoft OneDrive (personal)",id:"ContextConnector.OneDrivePersonal.name"}),l=(0,o.Em)({defaultMessage:"Microsoft OneDrive (work/school)",id:"ContextConnector.OneDriveBusiness.name"}),c=(0,o.vU)({includesSharePoint:{id:"ContextConnectorPicker.o365BusinessIncludesSharePoint",defaultMessage:"Includes SharePoint"}});function d(e,t){switch(e){case s.PO.GDRIVE:return"Google Drive";case s.PO.O365:return"Microsoft OneDrive";case s.PO.O365_PERSONAL:return t?.formatMessage(a)??"Microsoft OneDrive (personal)";case s.PO.O365_BUSINESS:return t?.formatMessage(l)??"Microsoft OneDrive (work/school)"}}function u(e,t){switch(e){case s.PO.GDRIVE:switch(t){case"doc":case"docx":return"Google Docs";case"xls":case"xlsx":return"Google Sheets";case"ppt":case"pptx":return"Google Slides";default:return"Google Drive"}case s.PO.O365:case s.PO.O365_PERSONAL:case s.PO.O365_BUSINESS:switch(t){case"doc":case"docx":return"Microsoft Word";case"xls":case"xlsx":return"Microsoft Excel";case"ppt":case"pptx":return"Microsoft PowerPoint";default:return"Microsoft OneDrive"}}(0,n.ZP)(e)}function f(e){let{contextConnector:t,extension:r}=e;return(0,i.jsx)(i.Fragment,{children:u(t,r)})}},44395:function(e,t,r){"use strict";r.d(t,{O:function(){return i},Z:function(){return o}});var s=r(19841),n=r(651);function o(e){let{percentage:t,thickness:r=1/12,className:o,sizeOverride:i,backgroundStrokeClassName:a="stroke-gray-400",transitionDuration:l,transitionTimingFunction:c,onTransitionEnd:d}=e,u=i??120,f=u*r,m=(u-f)/2,p=2*Math.PI*m;return(0,n.jsxs)("svg",{width:u,height:u,viewBox:`0 0 ${u} ${u}`,className:o,children:[(0,n.jsx)("circle",{className:(0,s.default)("origin-[50%_50%] -rotate-90",a),strokeWidth:f,fill:"transparent",r:m,cx:u/2,cy:u/2}),(0,n.jsx)("circle",{className:"origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",stroke:"currentColor",strokeWidth:f,strokeDashoffset:p-t/100*p,strokeDasharray:`${p} ${p}`,fill:"transparent",r:m,cx:u/2,cy:u/2,style:{transitionDuration:l,transitionTimingFunction:c},onTransitionEnd:d})]})}let i=e=>{let{size:t=40,className:r="text-blue-selection"}=e;return(0,n.jsx)("div",{className:(0,s.default)("relative",r),style:{width:t,height:t},children:(0,n.jsxs)("svg",{className:"absolute h-full w-full animate-spin",viewBox:"0 0 50 50",children:[(0,n.jsx)("defs",{children:(0,n.jsxs)("linearGradient",{id:"spinner-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,n.jsx)("stop",{offset:"0%",style:{stopColor:"currentColor",stopOpacity:1}}),(0,n.jsx)("stop",{offset:"100%",style:{stopColor:"currentColor",stopOpacity:0}})]})}),(0,n.jsx)("circle",{cx:"25",cy:"25",r:"20",stroke:"url(#spinner-gradient)",strokeWidth:"8",strokeLinecap:"round",fill:"none",strokeDasharray:"75,150",strokeDashoffset:"0"})]})})}},50863:function(e,t,r){"use strict";r.d(t,{J7:function(){return n},M4:function(){return l},aF:function(){return o},gG:function(){return i},w5:function(){return a}});var s=r(15478);let n=s.Z.button`
text-token-text-primary border border-transparent inline-flex h-9 items-center justify-center gap-1 rounded-lg bg-white px-3 text-sm dark:transparent dark:bg-transparent
leading-none outline-none cursor-pointer
hover:bg-token-main-surface-secondary dark:hover:bg-token-main-surface-secondary
focus-visible:bg-token-main-surface-secondary
radix-state-active:text-token-text-secondary
radix-disabled:cursor-auto radix-disabled:bg-transparent radix-disabled:text-token-text-tertiary dark:radix-disabled:bg-transparent
`,o=s.Z.div`flex gap-2 items-center m-1.5 rounded p-2.5 text-sm cursor-pointer focus-visible:outline-0 hover:bg-token-main-surface-secondary focus-visible:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group relative`,i=(0,s.Z)(o)`${e=>e.spoofHovered?"bg-token-main-surface-secondary":""}
hover:bg-[#f5f5f5] focus-visible:bg-[#f5f5f5]
radix-state-open:bg-[#f5f5f5]
dark:hover:bg-token-main-surface-secondary
dark:focus-visible:bg-token-main-surface-secondary
rounded-md my-0 px-3 mx-2
dark:radix-state-open:bg-token-main-surface-secondary gap-2.5 py-3`,a=s.Z.div`z-50 max-w-xs rounded-2xl popover bg-token-main-surface-primary shadow-lg will-change-[opacity,transform] radix-side-bottom:animate-slideUpAndFade radix-side-left:animate-slideRightAndFade radix-side-right:animate-slideLeftAndFade radix-side-top:animate-slideDownAndFade border border-token-border-light py-2`,l=s.Z.div`popover overflow-auto rounded-xl border border-token-border-light bg-token-main-surface-primary p-2 shadow-xl`},12128:function(e,t,r){"use strict";r.d(t,{M:function(){return c},Z:function(){return l}});var s=r(25162),n=r(11433),o=r(39004),i=r(10080),a=r(651);function l(e){let{isFirstParty:t,src:r,alt:o,className:i}=e;return(0,a.jsx)("div",{className:i,children:null!=r?(0,a.jsx)("div",{className:"gizmo-shadow-stroke overflow-hidden rounded-full",children:(0,a.jsx)("img",{src:r,className:"h-full w-full bg-token-main-surface-secondary",alt:o??"GPT",width:80,height:80})}):(0,a.jsx)("div",{className:"gizmo-shadow-stroke relative flex h-full items-center justify-center rounded-full bg-token-main-surface-primary text-token-text-primary",children:t?(0,a.jsx)(s.nI,{className:"h-2/3 w-2/3"}):(0,a.jsx)(n.uy2,{className:"h-2/3 w-2/3 text-gray-400"})})})}function c(e){let{gizmoId:t,className:r}=e,{data:s}=(0,o.b9)(t);return(0,a.jsx)(l,{src:s?.gizmo.display.profile_picture_url,isFirstParty:s?.gizmo.tags?.includes(i.U9.FirstParty)??!1,className:r})}},88301:function(e,t,r){"use strict";r.d(t,{B1:function(){return c},hj:function(){return d},lX:function(){return f},r:function(){return m},yt:function(){return u}});var s=r(11433),n=r(30853),o=r(19841),i=r(75325),a=r(15478),l=r(651);let c=a.Z.textarea`w-full text-sm overflow-y-auto rounded-lg border px-3 py-2 focus:ring-2 focus:ring-blue-400 border-token-border-medium bg-token-main-surface-primary h-32`,d=a.Z.div`mb-6`,u=a.Z.input`w-full resize-none overflow-y-auto rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 border focus:ring-blue-400 border-token-border-medium h-9 bg-token-main-surface-primary`;function f(e){let{label:t,description:r,collapsed:o,onClick:i}=e,a=(0,l.jsx)("label",{className:"block font-semibold text-token-text-primary",children:t});return(0,l.jsxs)("div",{className:"mb-1.5 flex items-center",onClick:i,children:[void 0!==o&&(o?(0,l.jsx)(s.r0F,{className:"icon-sm"}):(0,l.jsx)(s.Tg4,{className:"icon-sm"})),r?(0,l.jsx)(n.u,{label:r,sideOffset:4,side:"top",delayDuration:0,children:a}):(0,l.jsx)(l.Fragment,{children:a})]})}function m(e){let{actionTool:t,onShowActionsEditor:r,isDisabled:n}=e,a="metadata"in t?t.metadata?.domain:void 0;return(0,l.jsxs)("div",{className:(0,o.default)("flex rounded-lg border border-token-border-medium text-sm hover:cursor-pointer",n?"bg-token-main-surface-secondary":""),onClick:r,children:[(0,l.jsx)("div",{className:"h-9 grow px-3 py-2",children:a??(0,l.jsx)("span",{className:"text-red-500",children:(0,l.jsx)(i.Z,{id:"TJYXrY",defaultMessage:"Invalid action"})})}),(0,l.jsx)("div",{className:"w-px bg-token-border-medium"}),(0,l.jsx)("button",{disabled:n,className:"flex h-9 w-9 items-center justify-center rounded-lg rounded-l-none",children:(0,l.jsx)(s.SWE,{className:"icon-sm"})})]})}},17711:function(e,t,r){"use strict";r.d(t,{W:function(){return b}});var s=r(98601),n=r(99333),o=r(98303),i=r(30853),a=r(71090),l=r(41987);r(92379);var c=r(49764),d=r(75325),u=r(47584),f=r(651);function m(){return(0,f.jsx)("div",{className:"ml-2 flex h-3.5 w-3.5 cursor-default items-center justify-center rounded-full border border-token-border-medium text-[0.5rem] font-semibold leading-none text-token-text-tertiary",children:"?"})}function p(e){let{description:t}=e;return(0,f.jsx)(i.u,{wide:!0,label:t,delayDuration:0,children:(0,f.jsx)(m,{})})}function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function g(e){let{label:t,toolType:r,enabledTools:s,onEnabledToolsChange:n,disabled:o,disabledTooltip:l}=e,c=e=>s.some(t=>t.type===e),d=(0,f.jsx)(a.f8,{labelClassName:"w-full cursor-pointer",id:r,label:t,checked:!o&&c(r),disabled:o,onChange:()=>{c(r)?n(s.filter(e=>e.type!==r)):n([...s,{type:r}])}});return null!=l?(0,f.jsx)("div",{className:"opacity-70",children:(0,f.jsx)(i.u,{side:"top",label:l,children:d})}):d}function b(e){let{enabledTools:t,onEnabledToolsChange:r}=e,i=(0,o.C)(l.L0.BrowsingAvailable),a=(0,c.Z)();return(0,f.jsxs)("div",{className:"flex flex-col items-start gap-2",children:[(0,f.jsx)(g,{label:(0,f.jsx)(d.Z,{id:"tNlef1",defaultMessage:"Web Browsing"}),toolType:n.qK.BROWSER,enabledTools:t,onEnabledToolsChange:r,disabled:!i,disabledTooltip:i?void 0:(0,f.jsx)(d.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},h.disabledBrowsingToolTip))}),(0,f.jsx)(g,{label:(0,f.jsx)(d.Z,{id:"uSmS/p",defaultMessage:"DALL\xb7E Image Generation"}),toolType:n.qK.DALLE,enabledTools:t,onEnabledToolsChange:r}),(0,f.jsx)(g,{label:(0,f.jsxs)("div",{className:"flex items-center",children:[(0,f.jsx)(d.Z,{id:"8Lv1lK",defaultMessage:"Code Interpreter & Data Analysis"}),(0,f.jsx)(p,{description:a.formatMessage(h.codeInterpreterTooltip)})]}),toolType:n.qK.PYTHON,enabledTools:t,onEnabledToolsChange:r})]})}let h=(0,u.vU)({disabledBrowsingToolTip:{defaultMessage:"Web browsing is disabled for your workspace. Contact your admin to enable it.",id:"GizmoEditorModelPicker.disabledBrowsingToolTip"},codeInterpreterTooltip:{id:"GizmoEditorModelPicker.codeInterpreterTooltip",defaultMessage:"Allow this GPT to run code. When enabled, this GPT can analyze data, work with files you’ve uploaded, do math, and more."},memoryTooltip:{id:"GizmoEditorModelPicker.memoryTooltip",defaultMessage:"Allow this GPT to pick up on users details and preferences to tailor its responses to them. When enabled, users will need to have memory on to use this GPT."}})},31498:function(e,t,r){"use strict";r.d(t,{F_:function(){return g},aF:function(){return m},e2:function(){return h},ec:function(){return x},m0:function(){return b}});var s=r(98601),n=r(49166),o=r(84760),i=r(99333),a=r(2721),l=r(93951);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){(0,s.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}async function u(){let e=await a.Z.getMe();return{id:e.id,email:e.email,name:e.name,picture:e.picture,created:e.created}}let f=(0,n.C)({queryKey:["user"],queryFn:u,staleTime:1/0});function m(){return(0,o.a)(f).data}let p={currentWorkspace:null,subscriptionStatus:null,workspaces:[]};function x(e){let t=(0,o.a)(d(d({},(0,l.KP)()),{},{select:e=>{let t=(0,l.EI)(e);return{currentWorkspace:t?.data??null,subscriptionStatus:t?.data.subscriptionStatus??null,workspaces:e.accountItems.map(e=>e.data)}}})).data??p;return e?e(t):t}let g={hasMultipleWorkspaces:e=>{let{workspaces:t}=e;return t.length>1},isPersonalWorkspace:e=>{let{currentWorkspace:t}=e;return t?.structure===i.CZ.PERSONAL},isBusinessWorkspace:e=>{let{currentWorkspace:t}=e;return null!=t?t.structure===i.CZ.WORKSPACE:void 0},isEnterprisePlan:e=>{let{subscriptionStatus:t}=e;return t?.planType===i.D8.ENTERPRISE},isEduPlan:e=>{let{subscriptionStatus:t}=e;return t?.planType===i.D8.EDU},isEnterpriseyPlan:e=>{let{subscriptionStatus:t}=e;return t?.planType===i.D8.ENTERPRISE||t?.planType===i.D8.EDU},isTeamPlan:e=>{let{subscriptionStatus:t}=e;return t?.planType===i.D8.TEAM},isAdmin:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.ADMIN},isOwner:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.OWNER},workspaceId:e=>{let{currentWorkspace:t}=e;return null!=t?t.id:null},businessWorkspace:e=>{let{currentWorkspace:t}=e;return t?.structure===i.CZ.WORKSPACE?t:void 0},businessWorkspaceId:e=>{let{currentWorkspace:t}=e;return t?.structure===i.CZ.WORKSPACE?t.id:void 0},hasPaidSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasPaidSubscription},wasPaidCustomer:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.wasPaidCustomer},hasCustomerObject:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasCustomerObject},hasUnclaimedFreeTrial:e=>{let{currentWorkspace:t}=e;return t?.promoData?.has_claimed_free_trial},lastActiveSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t?t.lastActiveSubscription:null},workspaces:e=>{let{workspaces:t}=e;return t},accountUserId:e=>{let{currentWorkspace:t}=e;return t?.accountUserId}};function b(){let e=(0,l.t)();if(null!=e)return e.hasPlusFeatures()}function h(){return l.t()?.data.subscriptionStatus.lastActiveSubscription}},71026:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/view",function(){return r(52051)}])}},function(e){e.O(0,[4160,5239,4089,7204,4335,2745,4993,6091,2888,9774,179],function(){return e(e.s=71026)}),_N_E=e.O()}]);
//# sourceMappingURL=view-645d0a7a22108322.js.map