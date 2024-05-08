(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9457],{53854:function(e,s,t){"use strict";t.r(s),t.d(s,{__N_SSP:function(){return B},default:function(){return T}});var i=t(71909),l=t(58554),n=t(61145),a=t(63081),o=t(3806),r=t(85177),d=t(78751),c=t(99427),u=t(30185),m=t(11397),x=t(47130),g=t(95524),f=t(61236),h=t(24115),j=t(16215),y=t(70079),p=t(68498),v=t(84692),b=t(31731),z=t(35250);let w=e=>{let{gizmoId:s,limit:t,cursor:i}=e;return(0,f.a)({queryFn:async()=>x.U.listVersions({gizmoId:s}),queryKey:["gizmo","versions",{gizmoId:s,limit:t,cursor:i}]})},N=(0,y.memo)(function(e){let{gizmoId:s,onSelectVersion:t}=e,{value:i}=(0,h.sB)("chatgpt-gizmo-version-history");return s&&i?(0,z.jsx)(_,{gizmoId:s,onSelectVersion:t}):null});function _(e){let{gizmoId:s,onSelectVersion:t}=e,i=(0,j.useRouter)(),{data:l}=w({gizmoId:s}),n=l?l.items.reduce((e,s)=>{let t=new Date(s.updated_at),i="".concat(t.getFullYear(),"-").concat(t.getMonth()+1,"-").concat(t.getDate());return e[i]||(e[i]=[]),e[i].push(s),e},{}):null,a=e=>{i.push("/g/".concat(s,"/view?version=").concat(e))};return n?(0,z.jsx)("div",{className:"relative h-full w-screen max-w-2xs",children:(0,z.jsx)("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:(0,z.jsx)("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(n).map((e,s)=>{let i=n[e];return(0,z.jsx)(k,{date:e,entries:i,onSelectVersion:t,onRestoreVersion:a},s)})})})}):null}function k(e){let{date:s,entries:t,onSelectVersion:i,onRestoreVersion:l}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)("div",{className:"border-b border-token-border-medium py-2 font-medium uppercase text-token-text-secondary",children:(0,z.jsx)(p.Ji,{value:s,dateStyle:"medium"})}),(0,z.jsx)("div",{className:"flex flex-col space-y-2",children:t.map((e,s)=>(0,z.jsxs)("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>i(e.version),children:[(0,z.jsx)("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:(0,z.jsx)(p.Ji,{value:e.updated_at,timeStyle:"short"})}),(0,z.jsx)(C,{onRestoreVersion:()=>{l(e.version)}})]},s))})]})}function C(e){let{onRestoreVersion:s}=e;return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(b.d,{sideOffset:8,triggerButton:(0,z.jsx)("button",{color:"neutral",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:(0,z.jsx)(m.Yr,{className:"icon-md"})}),children:(0,z.jsxs)(b.Z.Item,{className:"items-center",disabled:!1,onClick:s,children:[(0,z.jsx)(m.Nt,{className:"icon-md"}),(0,z.jsx)(v.Z,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}var M=t(53050),Z=t(61888);let R=e=>{let{gizmoId:s,version:t}=e;return(0,f.a)({queryFn:async()=>x.U.getVersion({gizmoId:s,version:t}),queryKey:["gizmo","version",{gizmoId:s,version:t}]})},I=(e,s)=>"/gpts/editor/".concat(e,"?version=").concat(s);function S(e){var s;let{gizmoId:t}=e,{0:a,1:o}=(0,y.useState)(null),r=(0,j.useRouter)(),{data:d}=(0,i.b9)(t),c=null==d||null===(s=d.gizmo.current_user_permission)||void 0===s?void 0:s.can_write,u=(0,i.YR)(),{0:x,1:f}=(0,y.useState)(!1),h=()=>{a?r.push(I(t,a)):r.push((0,M.AA)(t))};return(0,z.jsxs)("div",{className:"flex h-screen w-full flex-col items-center",children:[(0,z.jsx)("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:d&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>r.back(),children:[(0,z.jsx)(m.L7,{className:"icon-lg"}),(0,z.jsx)("div",{className:"font-medium",children:c?(0,z.jsx)(v.Z,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):(0,z.jsx)(v.Z,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),(0,z.jsx)("div",{className:"mr-4 flex items-center gap-2",children:c?(0,z.jsx)(g.cY,{color:"light",onClick:()=>{a&&a!==d.gizmo.live_version&&d.tools.find(e=>{var s;return e.type===l.qK.JIT_PLUGIN&&(null===(s=e.metadata.auth)||void 0===s?void 0:s.type)!==n.Jv.None})?f(!0):h()},children:(0,z.jsx)(v.Z,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):(0,z.jsx)(g.cY,{color:"light",loading:u.isPending,onClick:async()=>{let e=await u.mutateAsync({gizmoId:t});e.gizmo.id&&r.push("/gpts/editor/".concat(e.gizmo.id))},children:(0,z.jsx)(v.Z,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),(0,z.jsxs)("div",{className:"flex h-full w-full items-center",children:[c&&(0,z.jsx)(N,{gizmoId:t,onSelectVersion:e=>{o(e)}}),(0,z.jsx)(L,{gizmoId:t,version:a})]}),x&&(0,z.jsx)(O,{onClose:()=>{f(!1)},onContinue:h})]})}function O(e){let{onClose:s,onContinue:t}=e,{0:i,1:l}=(0,y.useState)(!1);return(0,z.jsx)(o.Z,{isOpen:!0,onClose:s,type:"warning",showCloseButton:!0,title:(0,z.jsx)(v.Z,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:(0,z.jsx)(a.z,{onClick:()=>{l(!0),t()},loading:i,color:"light",children:(0,z.jsx)(v.Z,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:(0,z.jsx)(a.z,{onClick:s,color:"neutral",children:(0,z.jsx)(v.Z,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:(0,z.jsx)(v.Z,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function L(e){var s,t,i,n;let{gizmoId:a,version:o}=e,{data:m}=R({gizmoId:a,version:o}),{0:x,1:g}=(0,y.useState)(null);if(!m)return null;let f=m.tools.filter(e=>e.type===l.qK.JIT_PLUGIN);return(0,z.jsx)("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:(0,z.jsxs)("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[(0,z.jsx)(c.hj,{className:"self-center",children:(0,z.jsx)(d.Z,{src:m.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),(0,z.jsx)(c.yt,{type:"text",value:null!==(s=m.gizmo.display.name)&&void 0!==s?s:"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),(0,z.jsx)(c.yt,{type:"text",value:null!==(t=m.gizmo.display.description)&&void 0!==t?t:"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),(0,z.jsx)(c.B1,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:null!==(i=m.gizmo.instructions)&&void 0!==i?i:"",disabled:!0})]}),m.gizmo.display.prompt_starters&&m.gizmo.display.prompt_starters.length>0&&(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),m.gizmo.display.prompt_starters.map((e,s)=>(0,z.jsx)(c.yt,{type:"text",value:e,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},s))]}),m.files&&m.files.length>0&&(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),m.files.map((e,s)=>(0,z.jsx)(r.Z,{file:e.name,fileId:e.id},s))]}),(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),(0,z.jsx)(u.W,{enabledTools:m.tools,onEnabledToolsChange:Z.noop})]}),f&&f.length>0&&(0,z.jsxs)(c.hj,{children:[(0,z.jsx)(c.lX,{label:(0,z.jsx)(v.Z,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),f.map((e,s)=>(0,z.jsx)(c.r,{isDisabled:!1,actionTool:e,onShowActionsEditor:()=>{(null==x?void 0:x.metadata.action_id)===e.metadata.action_id?g(null):g(e)}},s)),x&&(0,z.jsx)("textarea",{readOnly:!0,value:null!==(n=x.metadata.raw_spec)&&void 0!==n?n:"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}var V=t(88324),B=!0;function T(){var e,s;let t=(0,V.t)(),l=(0,j.useRouter)(),n=null!==(e=null===(s=l.query)||void 0===s?void 0:s.gizmoId)&&void 0!==e?e:"",a=(0,i.CR)(n),{value:o}=(0,h.sB)("chatgpt-gizmo-version-history");return(0,y.useEffect)(()=>{null!=t&&t.isFree()&&l.push("/")},[t,l]),o?(0,z.jsx)(S,{gizmoId:a}):null}},21213:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/g/[gizmoId]/view",function(){return t(53854)}])}},function(e){e.O(0,[1741,4736,5251,9427,2888,9774,179],function(){return e(e.s=21213)}),_N_E=e.O()}]);
//# sourceMappingURL=view-51179ed4b255b0f5.js.map