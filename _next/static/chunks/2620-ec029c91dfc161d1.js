"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2620],{42508:function(e,t,s){var r=s(92379);function i(){return(i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)({}).hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e}).apply(null,arguments)}t.Z=e=>r.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:14,height:14,fill:"none",viewBox:"0 0 14 14"},e),r.createElement("path",{stroke:"currentColor",strokeWidth:1.2,d:"m10.67 9.087 2.252-6.347c.367-1.033-.63-2.03-1.662-1.662L4.913 3.33A2.6 2.6 0 0 0 3.33 4.913L1.078 11.26c-.367 1.033.63 2.03 1.662 1.662l6.347-2.251a2.6 2.6 0 0 0 1.584-1.584Z",style:{stroke:"currentColor",strokeOpacity:1}}),r.createElement("path",{stroke:"currentColor",d:"M7 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z",style:{stroke:"currentColor",strokeOpacity:1}}))},26555:function(e,t,s){s.d(t,{Z:function(){return $},D:function(){return X}});var r,i,a,n=s(98601),l=s(99333),o=s(11550),c=s(97537),d=s(55963),u=s(30853),p=s(10080),m=s(2721),x=s(3551),g=s(42420),h=s(19856),f=s(19841),j=s(34977),v=s(92379),y=s(62984),b=s(75172),k=s(68306),w=s(13350),T=s(98095),P=s(36792),N=s(13490),O=s(12128),C=s(91124),Z=s(41177),z=s(43465),M=s(24434),S=s(6440),A=s(60464),G=s(91530),R=s.n(G),D=s(651);function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach(function(t){(0,n.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function B(e){let{isOpen:t,onClose:s,account:r,gpt:i}=e,a=(0,b.Z)(),{0:n,1:l}=(0,v.useState)(!1),{0:c,1:d}=(0,v.useState)(""),{0:u,1:p}=(0,v.useState)(!0);return(0,D.jsxs)(M.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:t,onClose:R(),type:"success",title:a.formatMessage(L.deleteModalTitle),children:[(0,D.jsx)("p",{className:"mb-4 text-token-text-primary",children:(0,D.jsx)(y.Z,_(_({},L.deleteModalPrompt),{},{values:{gptName:i.gizmo.display.name}}))}),!u&&(0,D.jsx)("p",{className:"text-red-500",children:(0,D.jsx)(y.Z,_({},L.invalidEmail))}),(0,D.jsx)(S.Z,{className:(0,f.default)("px-3 py-2",u?"":"border-red-500"),name:"email",type:"email",value:c,placeholder:"Email",onChange:e=>{d(e.target.value)}}),(0,D.jsxs)("div",{className:"mt-4 flex justify-end gap-2",children:[(0,D.jsx)(o.z,{color:"secondary",onClick:()=>{s(!1),l(!1),p(!0)},loading:n,children:(0,D.jsx)(y.Z,_({},L.cancelButtonText))}),(0,D.jsx)(o.z,{color:"primary",loading:n,onClick:()=>{l(!0),p(!0),""!=c&&A.F.test(c)?m.Z.updateWorkspaceGPTOwner(r.id,i.gizmo.id,c).then(()=>{s(!0),l(!1),p(!0)},()=>{p(!1),l(!1)}):(p(!1),l(!1))},children:(0,D.jsx)(y.Z,_({},L.deleteButtonText))})]})]})}let L=(0,k.vU)({deleteModalTitle:{id:"changeOwnerModal.changeModalTitle",defaultMessage:"Change Owner"},deleteModalPrompt:{id:"changeOwnerModal.changeModalPrompt",defaultMessage:"New owner of {gptName}"},cancelButtonText:{id:"changeOwnerModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"changeOwnerModal.changeOwnerButtonText",defaultMessage:"Change owner"},invalidEmail:{id:"changeOwnerModal.invalidEmail",defaultMessage:"Email is invalid or does not belong to a member in this workspace"}});function I(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function W(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?I(Object(s),!0).forEach(function(t){(0,n.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function K(e){let{isOpen:t,onClose:s,account:r,gpt:i}=e,a=(0,b.Z)(),{0:n,1:l}=(0,v.useState)(!1);return(0,D.jsxs)(M.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:t,onClose:R(),type:"success",title:a.formatMessage(q.deleteModalTitle),children:[(0,D.jsx)("p",{className:"mb-4 text-token-text-primary",children:(0,D.jsx)(y.Z,W(W({},q.deleteModalPrompt),{},{values:{gptName:i.gizmo.display.name}}))}),(0,D.jsxs)("div",{className:"mt-4 flex justify-end gap-2",children:[(0,D.jsx)(o.z,{color:"secondary",onClick:()=>{s(!1)},loading:n,children:(0,D.jsx)(y.Z,W({},q.cancelButtonText))}),(0,D.jsx)(o.z,{color:"danger",loading:n,onClick:()=>{l(!0),m.Z.deleteWorkspaceGPT(r.id,i.gizmo.id).finally(()=>{s(!0),l(!1)})},children:(0,D.jsx)(y.Z,W({},q.deleteButtonText))})]})]})}let q=(0,k.vU)({deleteModalTitle:{id:"deleteGPTModal.accessModalTitle",defaultMessage:"Delete GPT"},deleteModalPrompt:{id:"deleteGPTModal.accessModalPrompt",defaultMessage:"Are you sure you would like to delete {gptName}? This action can not be undone."},cancelButtonText:{id:"deleteGPTModal.cancelButtonText",defaultMessage:"Cancel"},deleteButtonText:{id:"deleteGPTModal.deleteButtonText",defaultMessage:"Delete"}});var F=s(24765);function H(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function U(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?H(Object(s),!0).forEach(function(t){(0,n.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):H(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function Y(e){var t,s,r,i,a;let{account:n,gpt:o,thirdParty:c=!1}=e,d=(0,g.NL)(),{0:u,1:m}=(0,v.useState)(!1),{0:h,1:f}=(0,v.useState)(!1),{0:b,1:k}=(0,v.useState)(!1),{0:w,1:z}=(0,v.useState)(!1),M=(0,j.useRouter)(),S=new Date(c?null!==(t=o.gizmo.workspace_approval_date)&&void 0!==t?t:"":o.gizmo.created_at).toLocaleDateString("en-US",{month:"short",day:"numeric"}),A=o.tools.filter(e=>e.type===l.qK.JIT_PLUGIN).map(e=>e.type===l.qK.JIT_PLUGIN?e.metadata.domain:""),G="";return G=0===A.length?"":1===A.length?A[0]:"".concat(A.length," domains"),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(P.Z.Row,{children:[(0,D.jsx)(P.Z.Cell,{className:"py-4 pr-4",children:(0,D.jsxs)("div",{className:"flex items-center",children:[(0,D.jsx)("div",{className:"h-10 w-10 flex-shrink-0",children:(0,D.jsx)(O.Z,{src:o.gizmo.display.profile_picture_url,isFirstParty:null!==(s=null===(r=o.gizmo.tags)||void 0===r?void 0:r.includes(p.U9.FirstParty))&&void 0!==s&&s,alt:o.gizmo.display.name,className:"h-10 w-10"})}),(0,D.jsx)("div",{className:"ml-4",children:(0,D.jsx)("div",{className:"text-sm font-semibold text-token-text-primary",children:o.gizmo.display.name})})]})}),(0,D.jsx)(P.Z.Cell,{className:"p-4 text-sm text-token-text-secondary",children:o.gizmo.author.display_name}),(0,D.jsx)(P.Z.Cell,{className:"p-4 text-sm text-token-text-secondary",children:G}),!c&&(0,D.jsx)(P.Z.Cell,{className:"p-4 text-sm text-token-text-secondary",children:(0,D.jsx)(ee,{gizmo:o,account:n})}),!c&&(0,D.jsx)(P.Z.Cell,{className:"p-4 text-sm text-token-text-secondary",children:null!==(i=null===(a=o.gizmo.vanity_metrics)||void 0===a?void 0:a.num_conversations_str)&&void 0!==i?i:0}),(0,D.jsx)(P.Z.Cell,{className:"p-4 text-sm text-token-text-secondary",children:S}),(0,D.jsx)(P.Z.Cell,{children:(0,D.jsxs)(T.Z.Root,{children:[(0,D.jsx)(T.Z.Trigger,{className:"-my-2",children:(0,D.jsx)(N.nWS,{className:"icon-sm"})}),(0,D.jsx)(T.Z.Portal,{children:c?(0,D.jsx)(T.Z.Content,{children:(0,D.jsx)(T.Z.Item,{onClick:()=>{z(!0)},color:"danger",icon:N.XHJ,children:(0,D.jsx)(y.Z,U({},et.removeFromWorkspace))})}):(0,D.jsxs)(T.Z.Content,{children:[(0,D.jsx)(T.Z.Item,{onClick:()=>{m(o)},icon:N.yjj,children:(0,D.jsx)(y.Z,U({},et.changeAccess))}),(0,D.jsx)(T.Z.Item,{onClick:()=>{k(!0)},icon:N.oVl,children:(0,D.jsx)(y.Z,U({},et.changeOwner))}),(0,D.jsx)(T.Z.Item,{onClick:()=>{f(!0)},icon:N.XHJ,color:"danger",children:(0,D.jsx)(y.Z,U({},et.deleteGPT))})]})})]})})]}),u&&(0,D.jsx)(Z.hD,{publishedGizmo:u,gizmo:(0,C.yf)(u),promoteGizmo:async()=>void 0,onClose:()=>{m(!1)},showActionsModal:()=>void 0,appealGizmo:async()=>{M.push((0,x.AA)(u.gizmo.id))},setAppealState:()=>void 0,shareOnly:!0,updateGizmo:()=>void 0,workspaceOwner:!0}),(0,D.jsx)(B,{isOpen:b,gpt:o,account:n,onClose:e=>{k(!1),e&&d.invalidateQueries({queryKey:["workspace",n.id,l.RB.WORKSPACE]})}}),(0,D.jsx)(K,{isOpen:h,gpt:o,account:n,onClose:e=>{f(!1),e&&d.invalidateQueries({queryKey:["workspace",n.id,l.RB.WORKSPACE]})}}),(0,D.jsx)(F.Z,{isOpen:w,gpt:o,account:n,onClose:e=>{z(!1),e&&d.invalidateQueries({queryKey:["workspace",n.id,l.RB.THIRD_PARTY]})}})]})}var J=((r=J||{}).CreatedAt="created_at",r.NumConversations="vanity_metrics.num_conversations_str",r.ApprovedAt="workspace_approval_date",r),V=((i=V||{}).Ascending="asc",i.Descending="desc",i),Q=((a=Q||{}).Tools="tools",a.ShareRecipient="share_recipient",a);function X(e,t){switch(t){case l.qK.BROWSER:return"Web browsing";case l.qK.PYTHON:return"Code interpreter & Data Analysis";case l.qK.JIT_PLUGIN:return"Custom actions";case l.qK.RETRIEVAL:return"File retrieval";case l.qK.DALLE:return"DALL\xb7E image generation";case p.Zz.Private:return"Builder only";case p.Zz.Workspace:return e.data.name;case p.Zz.Link:return"Anyone with link";case p.Zz.Marketplace:return"Public";default:return null}}function $(e){var t,s;let{account:r,showThirdParty:i}=e,{0:a,1:n}=(0,v.useState)(l.RB.WORKSPACE),{data:x,fetchNextPage:j,hasNextPage:k,isError:T,isFetchingNextPage:O}=(s=r.id,(0,h.N)({queryKey:["workspace",s,"gizmos",a],queryFn:e=>{let{pageParam:t}=e;return m.Z.getWorkspaceGPTs(s,a,t)},initialPageParam:"",getNextPageParam:e=>e.cursor})),C=(0,b.Z)(),{0:Z,1:M}=(0,v.useState)(!1),S=null!==(t=null==x?void 0:x.pages.flatMap(e=>e.items))&&void 0!==t?t:[];(0,v.useEffect)(()=>{T||O||!k||j()},[O,k,T,j]);let A=(0,v.useRef)(null),{0:G,1:R}=(0,v.useState)(""),{0:E,1:_}=(0,v.useState)(!1),{0:B,1:L}=(0,v.useState)(a==l.RB.WORKSPACE?J.CreatedAt:J.ApprovedAt),{0:I,1:W}=(0,v.useState)(V.Descending),K={[Q.Tools]:{[l.qK.BROWSER]:!1,[l.qK.PYTHON]:!1,[l.qK.JIT_PLUGIN]:!1,[l.qK.RETRIEVAL]:!1,[l.qK.DALLE]:!1},[Q.ShareRecipient]:{[p.Zz.Private]:!1,[p.Zz.Workspace]:!1,[p.Zz.Link]:!1,[p.Zz.Marketplace]:!1}},{0:q,1:F}=(0,v.useState)(K),{0:H,1:$}=(0,v.useState)(0),ee=(0,g.NL)();function es(e,t){let{id:s,checked:r}=e.currentTarget,i=U({},q);i[t][s]=r,F(i),$(0)}(0,v.useEffect)(()=>{E&&A.current&&A.current.focus()},[E]);let er=0,ei=0,ea=Object.values(q[Q.Tools]).filter(Boolean).length+Object.values(q[Q.ShareRecipient]).filter(Boolean).length,en=[],el=0,eo=void 0===x,ec=!eo&&S.length>0;return eo||(el=Math.min(S.length,10),ei=Math.ceil(S.length/10),en=k?S:S.sort((e,t)=>{var s,r,i,a,n,l;let o,c;if(B===J.CreatedAt)o=new Date(e.gizmo.created_at).getTime(),c=new Date(t.gizmo.created_at).getTime();else if(B===J.ApprovedAt)o=new Date(null!==(s=e.gizmo.workspace_approval_date)&&void 0!==s?s:"").getTime(),c=new Date(null!==(r=t.gizmo.workspace_approval_date)&&void 0!==r?r:"").getTime();else if(B===J.NumConversations)o=null!==(i=null===(a=e.gizmo.vanity_metrics)||void 0===a?void 0:a.num_conversations)&&void 0!==i?i:0,c=null!==(n=null===(l=t.gizmo.vanity_metrics)||void 0===l?void 0:l.num_conversations)&&void 0!==n?n:0;else throw Error("Invalid field: ".concat(B));if(I===V.Ascending)return o-c;if(I===V.Descending)return c-o;throw Error("Invalid direction: ".concat(I))}),""!==G&&(en=function(e,t){let s=t.toLowerCase();return e.filter(e=>{let t=e.gizmo.author.display_name&&e.gizmo.author.display_name.toLowerCase(),r=e.gizmo.display.name.toLowerCase();return t&&t.includes(s)||r.includes(s)})}(en,G)),ea>0&&(en=en.filter(e=>{let t=e.tools.some(e=>e.type!==l.qK.MEMORY&&e.type!==l.qK.INTENT&&e.type!==l.qK.CONTACTS&&q.tools[e.type]),s=function(e){switch(e){case p.Zz.User:case p.Zz.Group:return p.Zz.Private;case p.Zz.WorkspaceLink:return p.Zz.Workspace;default:return e}}(e.gizmo.share_recipient),r=q.share_recipient[s];return t||r})),er=Math.ceil(en.length/10),en=en.slice(10*H,(H+1)*10)),(0,D.jsxs)("div",{children:[(0,D.jsxs)("div",{className:"flex justify-between border-b border-token-border-light",children:[(0,D.jsxs)("div",{className:"flex space-x-4 pt-2",children:[(0,D.jsx)("a",{className:(0,f.default)("text-l pb-4 font-semibold",a===l.RB.WORKSPACE?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(l.RB.WORKSPACE)},children:(0,D.jsx)(y.Z,U({},et.workspaceTab))}),i&&(0,D.jsx)("a",{className:(0,f.default)("text-l pb-4 font-semibold ",a===l.RB.THIRD_PARTY?"border-b border-token-text-secondary text-token-text-primary":"cursor-pointer text-token-text-tertiary"),onClick:()=>{n(l.RB.THIRD_PARTY)},children:(0,D.jsx)(y.Z,U({},et.thirdPartyTab))})]}),!eo&&(0,D.jsxs)("div",{className:"flex items-center space-x-4 pb-2",children:[ea>0&&(0,D.jsxs)("div",{className:"mx-0 flex items-center space-x-1",onClick:()=>{F(K)},children:[(0,D.jsx)("span",{children:ea}),(0,D.jsx)(N.tPq,{className:"cursor-pointer"})]}),(0,D.jsx)(u.u,{theme:"white",label:(0,D.jsxs)("div",{className:"w-64 space-y-4 p-2 font-normal text-token-text-primary",children:[(0,D.jsxs)("div",{className:"flex-col space-y-2",children:[(0,D.jsx)("span",{className:"flex font-semibold",children:(0,D.jsx)(y.Z,U({},et.capabilitiesTitle))}),Object.entries(q[Q.Tools]).map(e=>{let[t,s]=e;return(0,D.jsx)(d.Z,{id:t,checked:s,label:X(r,t),onChange:e=>{es(e,Q.Tools)}},t)})]}),(0,D.jsxs)("div",{className:"flex-col space-y-2",children:[(0,D.jsx)("span",{className:"flex font-semibold",children:(0,D.jsx)(y.Z,U({},et.whoHasAccessTitle))}),Object.entries(q[Q.ShareRecipient]).map(e=>{let[t,s]=e;return(0,D.jsx)(d.Z,{id:t,checked:s,label:X(r,t),onChange:e=>{es(e,Q.ShareRecipient)}},t)})]})]}),className:"bg-token-main-surface-primary",side:"bottom",withArrow:!1,align:"end",sideOffset:4,wide:!0,interactive:!0,children:(0,D.jsx)(N.k1n,{className:"cursor-pointer"})}),(0,D.jsx)("div",{className:"cursor-pointer",onClick:()=>{_(!0)},children:(0,D.jsx)(N.W1M,{className:"icon-sm"})}),(0,D.jsx)("input",{type:"text",ref:A,placeholder:C.formatMessage(et.filterByNameOrBuilderPlaceholder),className:(0,f.default)("border-none bg-token-main-surface-primary px-0 transition-width duration-300 ease-in-out focus:ring-0",E?"w-64":"w-0"),value:G,onChange:()=>{var e,t;$(0),R(null!==(e=null===(t=A.current)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}}),(0,D.jsx)("div",{className:(0,f.default)("cursor-pointer",E?"":"hidden"),onClick:()=>{_(!1),R(""),$(0)},children:(0,D.jsx)(N.tPq,{className:"icon-sm"})}),i&&(0,D.jsx)(o.z,{color:"secondary",onClick:()=>{M(!0)},icon:N.Vz5,children:(0,D.jsx)(y.Z,U({},et.approveAGPTButton))})]})]}),eo?(0,D.jsx)("div",{className:"mt-8 flex items-center justify-center",children:(0,D.jsx)(c.Z,{})}):(0,D.jsxs)("div",{style:{height:85*el+75},className:"mb-8",children:[en.length>0?(0,D.jsxs)(P.Z.Root,{size:"normal",className:"min-w-full overflow-hidden bg-token-main-surface-primary sm:rounded-lg",children:[(0,D.jsxs)(P.Z.Header,{children:[(0,D.jsx)(P.Z.HeaderCell,{className:"py-2 pr-4 text-left text-xs text-token-text-secondary",children:(0,D.jsx)(y.Z,U({},et.nameCellTitle))}),(0,D.jsx)(P.Z.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:(0,D.jsx)(y.Z,U({},et.builderCellTitle))}),(0,D.jsx)(P.Z.HeaderCell,{className:"px-4 py-2 text-left text-xs text-token-text-secondary",children:(0,D.jsx)(y.Z,U({},et.customActionsCellTitle))}),a==l.RB.WORKSPACE&&(0,D.jsx)(P.Z.HeaderCell,{className:"px-4 py-2 text-left text-xs  text-token-text-secondary",children:(0,D.jsx)(y.Z,U({},et.whoHasAccessTitle))}),a==l.RB.WORKSPACE&&(0,D.jsx)(P.Z.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:(0,D.jsxs)("div",{className:"flex items-center gap-1",onClick:()=>{B===J.NumConversations?I===V.Ascending?W(V.Descending):W(V.Ascending):(L(J.NumConversations),W(V.Descending))},children:[(0,D.jsx)("span",{children:(0,D.jsx)(y.Z,U({},et.chatsCellTitle))}),B===J.NumConversations&&I===V.Ascending&&(0,D.jsx)(N.Hf3,{className:"icon-sm"}),B===J.NumConversations&&I===V.Descending&&(0,D.jsx)(N.veu,{className:"icon-sm"})]})}),(0,D.jsx)(P.Z.HeaderCell,{className:"cursor-pointer px-4 py-2 text-left text-xs text-token-text-secondary",children:(0,D.jsxs)("div",{className:"flex items-center gap-1",onClick:()=>{B===J.CreatedAt?I===V.Ascending?W(V.Descending):W(V.Ascending):(L(J.CreatedAt),W(V.Descending))},children:[(0,D.jsx)("span",{children:a==l.RB.WORKSPACE?(0,D.jsx)(y.Z,U({},et.createdCellTitle)):(0,D.jsx)(y.Z,U({},et.approvedCellTitle))}),B===J.CreatedAt&&I===V.Ascending&&(0,D.jsx)(N.Hf3,{className:"icon-sm"}),B===J.CreatedAt&&I===V.Descending&&(0,D.jsx)(N.veu,{className:"icon-sm"})]})}),(0,D.jsx)(P.Z.HeaderCell,{className:"w-16"})]}),(0,D.jsx)(P.Z.Body,{children:en.map(e=>(0,D.jsx)(Y,{account:r,gpt:e,thirdParty:a==l.RB.THIRD_PARTY},e.gizmo.id))})]}):(0,D.jsxs)("div",{className:"flex h-full w-full flex-col items-center gap-4 py-16",children:[(0,D.jsx)(N.uy2,{className:"h-12 w-12 text-gray-400"}),(0,D.jsx)("p",{className:"text-token-text-secondary",children:a==l.RB.THIRD_PARTY?ec?(0,D.jsx)(y.Z,U({},et.noWorkspaceApprovedGPTsFound)):(0,D.jsx)(y.Z,U({},et.noWorkspaceApprovedGPTs)):ec?(0,D.jsx)(y.Z,U({},et.noWorkspaceGPTsFound)):(0,D.jsx)(y.Z,U({},et.noWorkspaceGPTs))}),a==l.RB.THIRD_PARTY&&(0,D.jsx)(o.z,{color:"secondary",onClick:()=>{M(!0)},icon:N.Vz5,children:(0,D.jsx)(y.Z,U({},et.approveAGPTButton))})]}),k&&(0,D.jsxs)("div",{className:"my-4 flex w-full items-center justify-center gap-4 text-token-text-tertiary",children:[(0,D.jsx)(c.Z,{}),(0,D.jsx)(y.Z,U({},et.stillLoadingData))]}),ei>1&&(0,D.jsx)("div",{className:"mt-2 flex justify-center",children:(0,D.jsx)(w.t,{currentPage:H,onChangeIndex:$,length:Math.max(er,1)})})]}),(0,D.jsx)(z.Z,{isOpen:Z,onClose:()=>{M(!1),ee.invalidateQueries({queryKey:["workspace",r.id,l.RB.THIRD_PARTY]})},account:r})]})}function ee(e){let{gizmo:t,account:s}=e,r=(0,b.Z)(),i={[p.Zz.Private]:r.formatMessage(et.shareRecipientTitlePrivate),[p.Zz.User]:r.formatMessage(et.shareRecipientTitlePrivate),[p.Zz.Group]:r.formatMessage(et.shareRecipientTitlePrivate),[p.Zz.Link]:r.formatMessage(et.shareRecipientTitleLink),[p.Zz.Marketplace]:r.formatMessage(et.shareRecipientTitlePublic),[p.Zz.Workspace]:s.data.name,[p.Zz.WorkspaceLink]:s.data.name};if(["private","user","group"].includes(t.gizmo.sharing.recipient)){let{users:e,groups:s}=t.gizmo.sharing.subjects?{users:t.gizmo.sharing.subjects.filter(e=>e.type===p.LA.USER).length,groups:t.gizmo.sharing.subjects.filter(e=>e.type===p.LA.GROUP).length}:{users:0,groups:0};return 0===e&&0===s?(0,D.jsx)("span",{className:"text-token-text-secondary",children:(0,D.jsx)(y.Z,U({},et.shareRecipientTitlePrivate))}):e>0&&s>0?(0,D.jsxs)("span",{className:"text-token-text-secondary",children:[i[t.gizmo.share_recipient],(0,D.jsx)("br",{}),(0,D.jsx)(y.Z,{id:"fQ+tJG",defaultMessage:"Shared with {users} and {groups}",values:{users:r.formatMessage(et.userCount,{numUsers:e}),groups:r.formatMessage(et.groupCount,{numGroups:s})}})]}):e>0?(0,D.jsxs)("span",{className:"text-token-text-secondary",children:[i[t.gizmo.share_recipient],(0,D.jsx)("br",{}),(0,D.jsx)(y.Z,U(U({},et.userCount),{},{values:{numUsers:e}}))]}):(0,D.jsxs)("span",{className:"text-token-text-secondary",children:[i[t.gizmo.share_recipient],(0,D.jsx)("br",{}),(0,D.jsx)(y.Z,U(U({},et.groupCount),{},{values:{numGroups:s}}))]})}return(0,D.jsx)("span",{children:i[t.gizmo.share_recipient]})}let et=(0,k.vU)({stillLoadingData:{id:"workspaceSettings.stillLoadingData",defaultMessage:"Don't see what you're looking for? Some GPTs are still loading..."},noWorkspaceGPTs:{id:"workspaceSettings.noWorkspaceGPTs",defaultMessage:"This workspace does not have any GPTs"},noWorkspaceGPTsFound:{id:"workspaceSettings.noWorkspaceGPTsFound",defaultMessage:"No workspace GPTs found"},noWorkspaceApprovedGPTs:{id:"workspaceSettings.noWorkspaceApprovedGPTs",defaultMessage:"You havent approved any third-party GPTs"},noWorkspaceApprovedGPTsFound:{id:"workspaceSettings.noWorkspaceApprovedGPTsFound",defaultMessage:"No approved third-party GPTs found"},workspaceTab:{id:"workspaceSettings.workspaceTab",defaultMessage:"Workspace"},thirdPartyTab:{id:"workspaceSettings.thirdPartyTab",defaultMessage:"Third-party"},capabilitiesTitle:{id:"workspaceSettings.capabilitiesTitle",defaultMessage:"Capabilities"},whoHasAccessTitle:{id:"workspaceSettings.whoHasAccessTitle",defaultMessage:"Who has access"},filterByNameOrBuilderPlaceholder:{id:"workspaceSettings.filterByNameOrBuilderPlaceholder",defaultMessage:"Filter by name or builder..."},nameCellTitle:{id:"workspaceSettings.nameCellTitle",defaultMessage:"Name"},builderCellTitle:{id:"workspaceSettings.builderCellTitle",defaultMessage:"Builder"},customActionsCellTitle:{id:"workspaceSettings.customActionsCellTitle",defaultMessage:"Custom Actions"},chatsCellTitle:{id:"workspaceSettings.chatsCellTitle",defaultMessage:"Chats"},createdCellTitle:{id:"workspaceSettings.createdCellTitle",defaultMessage:"Created"},approvedCellTitle:{id:"workspaceSettings.approvedCellTitle",defaultMessage:"Approved"},approveAGPTButton:{id:"workspaceSettings.approveAGPTButton",defaultMessage:"Approve a GPT"},shareRecipientTitlePrivate:{id:"vyjlzc",defaultMessage:"Invite only"},shareRecipientTitleLink:{id:"workspaceSettings.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettings.shareRecipientTitlePublic",defaultMessage:"Public"},changeAccess:{id:"workspaceSettings.changeAccess",defaultMessage:"Change who has access"},changeOwner:{id:"workspaceSettings.changeOwner",defaultMessage:"Change Owner"},deleteGPT:{id:"workspaceSettings.deleteGPT",defaultMessage:"Delete GPT"},removeFromWorkspace:{id:"workspaceSettings.removeFromWorkspace",defaultMessage:"Remove from workspace"},userCount:{id:"P1xo2B",defaultMessage:"{numUsers, plural, one {# user} other {# users}}"},groupCount:{id:"4zRUED",defaultMessage:"{numGroups, plural, one {# group} other {# groups}}"}})},43465:function(e,t,s){s.d(t,{Z:function(){return w}});var r=s(98601),i=s(99333),a=s(26555),n=s(11550),l=s(13490),o=s(24434),c=s(52275),d=s(2721),u=s(42420),p=s(91530),m=s.n(p),x=s(86481),g=s.n(x),h=s(92379),f=s(75172),j=s(62984),v=s(68306),y=s(651);function b(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function k(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?b(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):b(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function w(e){let{isOpen:t,onClose:s,account:r,gpt:p}=e,x=(0,f.Z)(),{0:v,1:b}=(0,h.useState)(!1),{0:w,1:P}=(0,h.useState)(p),N=null==w?void 0:w.tools.filter(e=>e.type!==i.qK.JIT_PLUGIN),O=null==w?void 0:w.tools.filter(e=>e.type===i.qK.JIT_PLUGIN),C=(0,u.NL)();return(0,y.jsxs)(o.Z,{size:"custom",className:"max-w-lg text-sm",isOpen:t,onClose:m(),type:"success",title:x.formatMessage(T.approveGPTTitle),children:[void 0==w?(0,y.jsx)("div",{className:"h-96",children:(0,y.jsx)(c.n_,{className:"max-w-3xl flex-grow",inputClassName:"h-10 text-sm pl-9",iconClassName:"left-4",resultsSizeOffset:-90,onSelect:e=>{P(e)}})}):(0,y.jsxs)("div",{className:"flex flex-col",children:[(0,y.jsxs)("div",{className:"flex gap-4 border-b border-token-border-light pb-6",children:[null!=w.gizmo.display.profile_picture_url?(0,y.jsx)(g(),{src:w.gizmo.display.profile_picture_url,alt:"Description",className:"h-24 w-24 rounded-full",width:96,height:96}):(0,y.jsx)(l.uy2,{className:"h-96 w-96 text-gray-400"}),(0,y.jsxs)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:[(0,y.jsx)("p",{className:"text-lg font-semibold",children:w.gizmo.display.name}),(0,y.jsx)("p",{children:w.gizmo.display.description}),(0,y.jsx)("p",{className:"text-token-text-secondary",children:(0,y.jsx)(j.Z,k(k({},T.gptByLine),{},{values:{authorName:w.gizmo.author.display_name}}))})]})]}),(0,y.jsx)("div",{className:"flex border-b border-token-border-light py-6",children:(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)("p",{className:"w-24 font-semibold",children:(0,y.jsx)(j.Z,k({},T.capabilitiesTitle))}),(0,y.jsx)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:N&&N.length>0?N.map(e=>(0,y.jsx)("p",{children:(0,a.D)(r,e.type)},e.id)):(0,y.jsx)("p",{className:"text-token-text-secondary",children:(0,y.jsx)(j.Z,k({},T.noCapabilitiesEnabled))})})]})}),(0,y.jsx)("div",{className:"flex py-6",children:(0,y.jsxs)("div",{className:"flex gap-4",children:[(0,y.jsx)("p",{className:"w-24 font-semibold",children:(0,y.jsx)(j.Z,k({},T.actionsTitle))}),(0,y.jsx)("div",{className:"flex flex-col gap-1 text-token-text-primary",children:O&&O.length>0?O.map(e=>{var t;return(0,y.jsx)("p",{children:null!==(t=e.metadata.domain)&&void 0!==t?t:""},e.id)}):(0,y.jsx)("p",{className:"text-token-text-secondary",children:(0,y.jsx)(j.Z,k({},T.noCustomActions))})})]})})]}),(0,y.jsxs)("div",{className:"mt-4 flex justify-end gap-2",children:[(0,y.jsx)(n.z,{color:"secondary",onClick:()=>{P(void 0),s(!1)},loading:v,children:(0,y.jsx)(j.Z,k({},T.cancelButtonText))}),(0,y.jsx)(n.z,{color:"primary",loading:v,disabled:void 0==w,onClick:()=>{void 0!=w&&(b(!0),d.Z.approveThirdPartyGPT(r.id,w.gizmo.id).finally(()=>{C.invalidateQueries({queryKey:["gizmo"]}),s(!0),P(void 0),b(!1)}))},children:(0,y.jsx)(j.Z,k({},T.approveButtonText))})]})]})}let T=(0,v.vU)({approveGPTTitle:{id:"approveGPTModal.approveGPTTitle",defaultMessage:"Approve a third-party GPT"},cancelButtonText:{id:"approveGPTModal.cancelButtonText",defaultMessage:"Cancel"},approveButtonText:{id:"approveGPTModal.approveButtonText",defaultMessage:"Approve"},gptByLine:{id:"approveGPTModal.gptByLine",defaultMessage:"By {authorName}"},capabilitiesTitle:{id:"approveGPTModal.capabilitiesTitle",defaultMessage:"Capabilities"},actionsTitle:{id:"approveGPTModal.actionsTitle",defaultMessage:"Actions"},noCapabilitiesEnabled:{id:"approveGPTModal.noCapabilitiesEnabled",defaultMessage:"No capabilities enabled"},noCustomActions:{id:"approveGPTModal.noCustomActions",defaultMessage:"No custom actions"}})},95033:function(e,t,s){s.d(t,{Dy:function(){return H},eY:function(){return K},xL:function(){return J}});var r,i=s(98601),a=s(30853),n=s(12128),l=s(25899),o=s(39004),c=s(99555),d=s(10080),u=s(93951),p=s(86025),m=s(31438),x=s(3551),g=s(42420),h=s(58695),f=s(13490),j=s(99976),v=s(61619),y=s(27393),b=s(19841),k=s(88600),w=s(14015),T=s.n(w),P=s(38482),N=s.n(P),O=s(24098),C=s.n(O),Z=s(92379),z=s(62984),M=s(75172),S=s(68306),A=s(98095),G=s(34643),R=s(75372),D=s(15972),E=s(47762),_=s(651);function B(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function L(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?B(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):B(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}let I=N()(()=>Promise.all([s.e(6746),s.e(9536),s.e(9294)]).then(s.bind(s,52245)).then(e=>e.GizmoKeepInSidebarMenuItem),{loadableGenerated:{webpack:()=>[52245]}}),W=((r={})[r.Keep=0]="Keep",r[r.Recents=1]="Recents",r);function K(e){let{data:{gizmos:t}={}}=(0,o.Wz)();return!!t&&t.some(t=>t.resource.gizmo.id===e)}function q(e){let{isActive:t,isNewConversation:s}=e,r=(0,g.NL)();return(0,_.jsx)("div",{className:"bg-token-sidebar-surface-primary pt-0",children:(0,_.jsx)(Y,{gizmo:void 0,isActive:t,onClick:e=>{(0,p.P)((0,h.y_)(r))&&!s&&(e.preventDefault(),(0,D.Xl)())}})})}function F(e){let{gizmo:t,currentGizmoId:s}=e,r=(0,Z.useRef)(!1),i=(0,m.tN)(),{0:a,1:n}=(0,Z.useState)(!1),{itemsLeft:l,listItems:o,needsToCollapseItems:c}=function(e,t){var s,r,i,a,n,l;let o=T()(e,e=>e.flair.kind),c=[...null!==(s=null===(r=o[d.JK.FirstParty])||void 0===r?void 0:r.map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Keep}}))&&void 0!==s?s:[],...null!==(i=null===(a=o[d.JK.SidebarKeep])||void 0===a?void 0:a.map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Keep}}))&&void 0!==i?i:[],...null!==(n=null===(l=o[d.JK.Recent])||void 0===l?void 0:l.slice(0,2).map(e=>{let{resource:t}=e;return{gizmo:t,section:W.Recents}}))&&void 0!==n?n:[]],u=c.length>5,p=u&&!t&&c.length>4?c.slice(0,4):c;return{listItems:[...p.filter(e=>{let{section:t}=e;return t===W.Keep}),...p.filter(e=>{let{section:t}=e;return t===W.Recents})],itemsLeft:c.length-p.length,needsToCollapseItems:u}}(t,a);return(0,Z.useEffect)(()=>{if(o.length>0&&!r.current){var e;null===(e=(0,y.Ef)({namespace:y.dG.ChatPageLoad}))||void 0===e||e.logTiming("render_gizmo_sidebar"),r.current=!0}},[o]),(0,_.jsxs)("div",{children:[o.map((e,t)=>{let{gizmo:r,section:i}=e;return(0,_.jsxs)(Z.Fragment,{children:[t>1&&i!==o[t-1].section&&(0,_.jsx)("div",{className:"my-2 ml-2 h-px w-7 bg-token-sidebar-surface-tertiary"}),(0,_.jsx)(Y,{gizmo:r,isActive:r.gizmo.id===s,section:i},r.gizmo.id)]},t)}),c?(0,_.jsxs)("button",{onClick:()=>{n(!a)},className:"flex h-10 w-full items-center gap-2 rounded-lg px-2 text-sm text-token-text-primary hover:bg-token-sidebar-surface-secondary",children:[(0,_.jsx)("div",{className:"flex h-6 w-6 flex-shrink-0 items-center justify-center",children:(0,_.jsx)(f.nWS,{className:"icon-md text-token-text-primary"})}),(0,_.jsx)("div",{className:"flex grow items-center gap-1",children:a?(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(z.Z,{id:"GizmoSidebarList.showLess",defaultMessage:"See less"}),(0,_.jsx)(f.r0F,{className:"icon-xs"})]}):(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(z.Z,{id:"GizmoSidebarList.showMoreItems",defaultMessage:"{numMore} more",values:{numMore:l}}),(0,_.jsx)(f.Tg4,{className:"icon-xs"})]})})]}):null,(0,_.jsx)(G.Z,{children:(0,_.jsx)(k.E.div,{whileTap:{scale:.98},children:(0,_.jsx)(C(),{href:(0,x.cy)(),onClick:()=>{"mobile-nav"===i.activeSidebar&&m.vm.toggleActiveSidebar("mobile-nav")},children:(0,_.jsx)(R.f,{icon:f.frp,children:(0,_.jsx)(z.Z,L({},V.exploreStoreEnabled))})},"explore")})})]})}function H(e){let{currentGizmoId:t}=e,{data:{gizmos:s}={}}=(0,o.Wz)();return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(q,{isActive:void 0===t,isNewConversation:!0}),(0,_.jsx)(E.Z,{}),null!=s?(0,_.jsx)(F,{gizmo:s,currentGizmoId:t}):null]})}function U(e){let{gizmo:t,isOpen:s,setIsOpen:r,section:i}=e,a=(0,g.NL)();return(0,_.jsxs)(A.d,{open:s,onOpenChange:r,triggerButton:(0,_.jsx)("button",{className:(0,b.default)("flex text-token-text-secondary hover:text-token-text-primary",s?"":"invisible group-hover:visible"),children:(0,_.jsx)(f.nWS,{className:"icon-md"})}),contentAlign:"start",sideOffset:4,alignOffset:-4,size:"auto",children:[i===W.Recents&&(0,_.jsx)(A.Z.Item,{onClick:async()=>{await c.U.updateGizmoSidebar(a,t.gizmo.id,"keep")},children:(0,_.jsx)(z.Z,L({},V.keepInSidebar))}),(0,_.jsx)(I,{gizmoResource:t})]})}function Y(e){var t,s;let r;let{gizmo:i,historyDisabled:c,section:p,onClick:m}=e,x=(0,M.Z)(),{0:g,1:h}=(0,Z.useState)(!1),{0:j,1:v}=(0,Z.useState)(!1),y=(0,u.t)(),b=!!(null==i||null===(t=i.gizmo.tags)||void 0===t?void 0:t.includes(d.U9.FirstParty));if(null!=i)r=i.gizmo.display.name||l.zf;else{if(null==y)return null;r=c?x.formatMessage(V.clearChat):y.canInteractWithGizmos()?l.Dd:x.formatMessage({id:"GizmoSidebarListItem.newChat",defaultMessage:"New chat"})}return(0,_.jsx)(k.E.div,{whileTap:{scale:.98},onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1)},children:(0,_.jsx)(J,{loggingGizmoId:null!==(s=null==i?void 0:i.gizmo.id)&&void 0!==s?s:"primary",href:null!=i?(0,o.m_)(i):"/",onClick:m,icon:(0,_.jsx)(n.Z,{isFirstParty:null==i||b,src:null==i?void 0:i.gizmo.display.profile_picture_url,className:"h-6 w-6 flex-shrink-0"}),isMenuOpen:g,label:r,hoverRightIcon:(0,_.jsxs)("div",{className:"flex gap-2",children:[(j||g)&&null!=i&&(0,_.jsx)("div",{className:"text-token-text-tertiary",onClick:e=>{e.preventDefault()},children:(0,_.jsx)(U,{gizmo:i,isOpen:g,setIsOpen:h,section:p})}),(0,_.jsx)(a.u,{side:"right",label:x.formatMessage(c?V.clearChat:V.newChat),className:"flex items-center",children:(0,_.jsx)("button",{className:g?"text-token-text-tertiary":"invisible text-token-text-secondary hover:text-token-text-primary group-hover:visible",children:c?(0,_.jsx)(f.Ezi,{className:"icon-md"}):(0,_.jsx)(f.bl$,{className:"icon-md"})})})]})})})}function J(e){let{href:t,icon:s,label:r,hoverRightIcon:i,isMenuOpen:a,loggingGizmoId:n,onClick:l,target:o}=e;return(0,_.jsxs)(C(),{href:t,target:o,shallow:!0,className:(0,b.default)("group flex h-10 items-center gap-2.5 rounded-lg bg-token-sidebar-surface-primary px-2 font-normal",a?"bg-token-main-surface-primary":"hover:bg-token-sidebar-surface-secondary"),onClick:e=>{j.A.logNewChatButtonClicked({location:"Sidebar gizmo list",gizmo_id:n}),j.A.logEvent(v.M.sidebarClickGizmo,{gizmo_id:n}),null==l||l(e)},children:[s,(0,_.jsx)("div",{className:"grow overflow-hidden text-ellipsis whitespace-nowrap text-sm text-token-text-primary",children:r}),i]})}let V=(0,S.vU)({exploreStoreEnabled:{id:"gizmo.exploreStoreEnabled",defaultMessage:"Explore GPTs"},keepInSidebar:{id:"gizmo.keepInSidebar",defaultMessage:"Keep in sidebar"},newChat:{id:"gizmo.newChat",defaultMessage:"New chat"},clearChat:{id:"gizmo.clearChat",defaultMessage:"Clear chat"}})},47762:function(e,t,s){s.d(t,{Z:function(){return y}});var r=s(13490),i=s(95033),a=s(60682),n=s(98095),l=s(40833),o=s(34643),c=s(31438),d=s(19841),u=s(88600),p=s(92379),m=s(62984),x=s(42508),g=s(651);function h(){let e=(0,a.qg)(a.pm.SonicSidebar),{0:t,1:s}=(0,p.useState)(!1);return e.isLoading||!e.eligible?null:(0,g.jsx)(u.E.div,{className:"group pb-0",whileTap:{scale:.98},children:(0,g.jsx)(f,{children:(0,g.jsx)(i.xL,{href:"/search",target:"_blank",icon:(0,g.jsx)("div",{className:(0,d.default)("gizmo-shadow-stroke mr-[0.5] flex h-6 w-6 items-center justify-center rounded-full bg-token-main-surface-primary align-middle text-token-text-primary"),children:(0,g.jsx)(x.Z,{})}),label:"SearchGPT",hoverRightIcon:(0,g.jsxs)("div",{className:"flex gap-3",children:[(0,g.jsx)(j,{isOpen:t,setIsOpen:s,onDismiss:()=>e.markAsViewed()}),(0,g.jsx)(r.Pfi,{className:(0,d.default)("icon-md text-token-text-tertiary",!t&&"invisible group-hover:visible")})]}),isMenuOpen:!1,loggingGizmoId:"search-gpt-sidebar"})})})}function f(e){let{children:t}=e,s=function(){let e=(0,c.xH)(),t=(0,a.qg)(a.pm.hasSeenSncSidebarTooltip),s=(0,o.c)(),r=(0,c.ss)(),{activeModals:i}=(0,c.tN)();return!t.isLoading&&t.eligible&&!s&&0===i.size&&!e&&!r}(),r=(0,a.qg)(a.pm.hasSeenSncSidebarTooltip);return s?(0,g.jsx)(l.v,{side:"right",show:!0,badge:"new",title:"Try SearchGPT",onDismiss:r.markAsViewed,sideOffset:10,theme:"bright",description:"You're in. Get answers with real-time information from relevant sources, and ask follow-up questions.",children:(0,g.jsx)("div",{className:"w-full",children:t})}):(0,g.jsx)(g.Fragment,{children:t})}function j(e){let{isOpen:t,setIsOpen:s,onDismiss:i}=e;return(0,g.jsx)(n.d,{open:t,onOpenChange:s,triggerButton:(0,g.jsx)("button",{className:(0,d.default)("flex text-token-text-tertiary",t?"":"invisible group-hover:visible"),onClick:e=>{e.preventDefault()},children:(0,g.jsx)(r.nWS,{className:"icon-md"})}),children:(0,g.jsx)(n.Z.Item,{onClick:e=>{e.preventDefault(),i()},children:(0,g.jsx)(m.Z,{id:"sidebar.hideFromSidebar",defaultMessage:"Hide from sidebar"})})})}var v=s(88667);function y(){return(0,v.sB)("114024").value?(0,g.jsx)(h,{}):null}},34643:function(e,t,s){s.d(t,{Z:function(){return f},c:function(){return h}});var r=s(98601),i=s(93951),a=s(31438),n=s(99976),l=s(61619),o=s(92379),c=s(75172),d=s(62984),u=s(68306),p=s(60682),m=s(40833),x=s(651);function g(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,r)}return s}function h(){let{activeModals:e}=(0,a.tN)(),t=(0,i.t)(),s=(0,p.qg)(p.pm.ExploreGPTs),r=(0,p.qg)(p.pm.ExploreGPTsNewNux),c=(0,a.ss)(),d=(0,a.xH)(),u=s.eligible&&!s.isLoading&&!d,m=r.eligible&&!r.isLoading&&!d&&!c;return e.size>0&&(m=!1),!u&&null!=t&&t.hasPlusFeatures()&&(m=!1),(0,o.useEffect)(()=>{m&&n.A.logEvent(l.M.storeDisplayNewNux)},[m]),m}function f(e){let{children:t}=e,s=h(),i=(0,c.Z)(),a=(0,p.qg)(p.pm.ExploreGPTsNewNux);return s?(0,x.jsx)(m.v,{side:"right",show:!0,title:i.formatMessage(j.exploreGPTsTitle),onDismiss:a.markAsViewed,sideOffset:20,theme:"bright",description:(0,x.jsx)(d.Z,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?g(Object(s),!0).forEach(function(t){(0,r.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},j.exploreGPTsDescriptionNewNux)),children:t}):(0,x.jsx)(x.Fragment,{children:t})}let j=(0,u.vU)({exploreGPTsTitle:{id:"gptExploreGPTs.title",defaultMessage:"Explore GPTs"},exploreGPTsDescription:{id:"gptExploreGPTs.description",defaultMessage:"Now you can discover GPTs created by the community"},exploreGPTsDescriptionNewNux:{id:"gptExploreGPTs.descriptionNewNux",defaultMessage:"Discover custom versions of ChatGPT created for specific use cases like writing, research, and coding."}})},17096:function(e,t,s){s.d(t,{Z:function(){return i}});var r=s(92379);function i(){let e=(0,r.useRef)([]),t=(0,r.useRef)((t,s)=>{let r=setTimeout(t,s);return e.current.push(r),r});return(0,r.useEffect)(()=>{let t=e.current;return()=>{t.forEach(e=>{clearTimeout(e)})}},[]),t.current}},11812:function(e,t,s){s.d(t,{E:function(){return i}});var r=s(46598);function i(e=.1,{startDelay:t=0,from:s=0,ease:i}={}){return(a,n)=>{let l=e*Math.abs(("number"==typeof s?s:function(e,t){if("first"===e)return 0;{let s=t-1;return"last"===e?s:s/2}}(s,n))-a);if(i){let t=n*e;l=(0,r.R)(i)(l/t)*t}return t+l}}}}]);
//# sourceMappingURL=2620-ec029c91dfc161d1.js.map