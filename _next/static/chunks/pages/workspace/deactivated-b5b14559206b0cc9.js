(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161],{15239:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return D}});var n=a(97410),r=a(46247),s=a(6242),l=a(6796),i=a(31161),o=a(87132),c=a(72988),d=a(44575),u=a(81743),m=a(25968),f=a(89852),p=a(91530),x=a.n(p),g=a(11490),b=a.n(g),h=a(32307),v=a(92379),j=a(75172),k=a(62984),y=a(68306),M=a(7297),w=a(85060),P=a(32863),N=a(93180),O=a(651);function Z(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Z(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function C(){var e;let t=(0,m.aF)(),a=(0,d.t)(),{data:n}=(0,d.rk)(),{0:p,1:g}=(0,v.useState)(!1),y=(0,h.useRouter)(),Z=null==n?void 0:n.accountItems,C=(0,N.p5)(null!==(e=null==a?void 0:a.id)&&void 0!==e?e:""),D=null==a?void 0:a.id,B=null==Z?void 0:Z.find(e=>e.id===D),U=(null==a?void 0:a.isOwnerOfAccount())&&a.isTeam()&&!a.hasPaidSubscription(),A=(null==a?void 0:a.isOwnerOfAccount())&&a.isTeam()&&a.hasPaidSubscription(),T=null==Z?void 0:Z.filter(e=>!e.isDeactivated()),R=(0,j.Z)(),E=(0,v.useCallback)(()=>{g(!0),u.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(C,l.Y6),existingAccount:B}),g(!1)},[C,B]),I=async()=>{g(!0);try{let e=await c.Z.fetchCustomerPortalUrl();y.push(e.url),g(!1)}catch(e){g(!1),i.m.warning(R.formatMessage(W.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return null!=a&&B&&T?(0,O.jsx)(P.Z,{type:"success",onClose:x(),isOpen:null!=a||null!=n,title:(0,O.jsx)("span",{className:"text-lg",children:(0,O.jsx)(k.Z,S({},W.workspaceDeactivated))}),children:(0,O.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,O.jsxs)("div",{className:"flex w-full items-center gap-4",children:[(0,O.jsx)(M.B0,{src:B.data.profilePictureUrl,size:"large"}),(0,O.jsx)("div",{className:"font-semibold",children:B.data.name})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h3",{className:"mb-2 text-base font-bold",children:(0,O.jsx)(k.Z,S({},W.workspaceDeactivated))}),(0,O.jsxs)("ul",{className:"list-disc pl-5",children:[(0,O.jsx)("li",{className:"mb-1",children:(0,O.jsx)(k.Z,S({},W.chatHistoryUnavailable))}),(0,O.jsx)("li",{children:(0,O.jsx)(k.Z,S({},W.otherWorkspacesAvailable))})]})]}),U&&(0,O.jsxs)("div",{className:"flex w-full flex-col",children:[(0,O.jsx)("p",{children:(0,O.jsx)(k.Z,S({},W.purchaseNewSubscription))}),(0,O.jsx)(s.m,{className:"m-auto mt-2 w-full",loading:p,onClick:E,children:(0,O.jsx)(k.Z,S({},W.purchaseNewSubscriptionButton))})]}),A&&(0,O.jsxs)("div",{className:"flex w-full flex-col",children:[(0,O.jsx)("p",{children:(0,O.jsx)(k.Z,S({},W.resolveOutstandingInvoice))}),(0,O.jsx)(s.m,{className:"m-auto mt-2 w-full",loading:p,onClick:I,children:(0,O.jsx)(k.Z,S({},W.manageSubscriptionButton))})]}),(0,O.jsx)(w.b,{}),(0,O.jsx)("div",{className:"w-full justify-center",children:T.length>0?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("h3",{className:"mb-2 text-base font-bold",children:(0,O.jsx)(k.Z,S({},W.selectWorkspace))}),(0,O.jsx)(r.b,{data:T})]}):(0,O.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,O.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,O.jsx)("h3",{className:"text-base font-bold",children:(0,O.jsx)(k.Z,S({},W.createPersonalWorkspace))}),(0,O.jsx)(k.Z,S({},W.deactivatedWorkspaceReason))]}),(0,O.jsxs)("div",{className:"flex w-full items-center gap-4",children:[t&&t.picture&&(0,O.jsx)(b(),{alt:"Profile",src:t.picture,width:M.EF.workspaceMedium,height:M.EF.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),(0,O.jsx)("span",{className:"font-semibold",children:t&&(0,O.jsx)("span",{children:t.name})})]}),(0,O.jsx)("div",{className:"ml-auto",children:(0,O.jsx)(s.m,{title:R.formatMessage(W.createPersonalWorkspaceButton),loading:p,onClick:async()=>{g(!0),await c.Z.upsertPersonalWorkspace(),(0,d.eV)(o.bC),(0,f.M)()},color:"primary",className:"ml-4"})})]})})]})}):(0,O.jsx)(O.Fragment,{})}let W=(0,y.vU)({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function D(){let e=(0,m.ec)(m.F_.workspaces),t=(0,d.t)(),a=(0,m.ec)(m.F_.workspaceId),n=e.find(e=>e.id===a),r=(0,h.useRouter)();return((0,v.useEffect)(()=>{null==t||!t.data||n&&n.deactivated||r.push("/")},[t,n,r]),null==t||!t.data||n&&n.deactivated)?(0,O.jsx)(C,{}):(0,O.jsx)("div",{})}},85060:function(e,t,a){"use strict";a.d(t,{b:function(){return r}});var n=a(651);function r(){return(0,n.jsx)("hr",{className:"w-full border-token-border-xheavy"})}},59900:function(e,t,a){"use strict";a.d(t,{HC:function(){return c},QI:function(){return o}});var n,r,s,l=a(15316),i=a(15478);i.Z.ol(n||(n=(0,l.Z)(["ml-5 list-decimal"])));let o=i.Z.ul(r||(r=(0,l.Z)(["ml-3 list-disc"]))),c=i.Z.li(s||(s=(0,l.Z)(["marker:text-token-text-tertiary text-token-text-primary mb-2"])))},64031:function(e,t,a){"use strict";a.d(t,{h:function(){return p},t:function(){return x}});var n,r,s,l=a(15316),i=a(19841),o=a(95182),c=a.n(o),d=a(15478),u=a(48198),m=a(35026),f=a(651);function p(e){let{currentPage:t,onChangeIndex:a,length:n,showInline:r=!1}=e,s=e=>{a(c()(t+e,0,n-1))};return(0,f.jsxs)("div",{className:(0,i.default)("flex items-center justify-center rounded-lg text-token-text-secondary",!r&&m.W.MessageAction),children:[(0,f.jsx)("button",{onClick:()=>s(-1),disabled:0===t,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,f.jsx)(u.DUf,{className:"icon-md-heavy"})}),(0,f.jsx)("div",{className:"px-0.5 text-sm font-semibold tabular-nums",children:"".concat(t+1,"/").concat(n)}),(0,f.jsx)("button",{onClick:()=>s(1),disabled:t===n-1,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,f.jsx)(u.ob9,{className:"icon-md-heavy"})})]})}function x(e){let{currentPage:t,onChangeIndex:a,length:n,className:r}=e,s=e=>{a(c()(t+e,0,n-1))};return 0===n?null:(0,f.jsxs)(g,{className:r,children:[(0,f.jsx)(b,{onClick:()=>s(-1),disabled:0===t,children:(0,f.jsx)(u.DUf,{className:"icon-sm"})}),(0,f.jsx)(h,{children:"".concat(t+1,"/").concat(n)}),(0,f.jsx)(b,{onClick:()=>s(1),disabled:t===n-1,children:(0,f.jsx)(u.ob9,{className:"icon-sm"})})]})}let g=d.Z.div(n||(n=(0,l.Z)(["text-xs inline-flex bg-token-main-surface-secondary h-8 border rounded border-token-border-medium"]))),b=d.Z.button(r||(r=(0,l.Z)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-main-surface-tertiary"]))),h=d.Z.span(s||(s=(0,l.Z)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"])))},93180:function(e,t,a){"use strict";a.d(t,{ZP:function(){return E},bq:function(){return Y},mJ:function(){return F},p5:function(){return L}});var n=a(97410),r=a(34608),s=a(35998),l=a(72988),i=a(81743),o=a(25968),c=a(56032),d=a(42420),u=a(90681),m=a(19841),f=a(70933),p=a(47453),x=a.n(p),g=a(92379),b=a(62984),h=a(75172),v=a(68306),j=a(68810),k=a(64031),y=a(48609),M=a(6242),w=a(77313),P=a(47797),N=a(48198),O=a(32863),Z=a(31161),S=a(44051),C=a(41508),W=a(651);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function B(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let U=x()(()=>a.e(6827).then(a.bind(a,46827)).then(e=>e.DirectorySyncResourceManagedIndication),{loadableGenerated:{webpack:()=>[46827]}}),A=(0,j.Ue)(()=>({confirmModalUserData:null})),T=e=>{A.setState({confirmModalUserData:e})},R=()=>{A.setState({confirmModalUserData:null})};function E(e){var t;let{workspaceId:a,filterInputValue:n}=e,{0:r,1:s}=(0,g.useState)(0),u=(0,o.aF)(),m=null==u?void 0:u.id,f=(0,C.Gk)(a),p=(0,C.bE)(a),x=f||p,h=(0,c.D)({mutationFn:e=>{let{userId:t,workspaceId:a,value:n}=e;return l.Z.updateWorkspaceUserRole(a,t,n).catch(e=>{Z.m.danger("Unable to update user (".concat(t,") role: ").concat(e.message))})}}),v=function(e){let t=(0,d.NL)();return(0,c.D)({mutationFn:t=>{let{userId:a}=t;return l.Z.removeWorkspaceUser(e,a).catch(e=>{Z.m.danger("Unable to remove user (".concat(a,") from workspace: ").concat(e.message))})},onSuccess:()=>{t.invalidateQueries({queryKey:["workspace",e]})}})}(a),{data:j}=(0,S.Z)(a,r*S.I,n),y=(0,g.useCallback)(e=>{T(e)},[]),M=(0,g.useCallback)(()=>{var e;let t=null===(e=A.getState().confirmModalUserData)||void 0===e?void 0:e.id;void 0!==t&&v.mutate({userId:t}),R()},[v]),w=(0,g.useCallback)((e,t)=>{h.mutate({userId:e,value:t,workspaceId:a})},[h,a]);if(void 0===j)return(0,W.jsx)(Y,{});let O=j.items,D=Math.ceil((null!==(t=j.total)&&void 0!==t?t:0)/S.I);return r>=D&&0!==D&&s(Math.max(D-1,0)),(0,W.jsxs)(W.Fragment,{children:[(0,W.jsxs)(P.Z.Root,{fixed:!0,size:"normal",children:[(0,W.jsxs)(P.Z.Header,{children:[(0,W.jsx)(P.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,B({},z.name))}),(0,W.jsx)(P.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,B({},z.email))}),(0,W.jsx)(P.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,W.jsx)("span",{className:f?"pl-3":"",children:(0,W.jsx)(b.Z,B({},z.role))})}),x&&(0,W.jsx)(P.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,W.jsxs)(P.Z.Body,{children:[O.map(e=>(0,W.jsx)(_,{isCurrentUser:void 0!==m&&e.id===m,user:e,currentUserHasAdminRights:x,isCurrentUserOwner:f,onRemoveUserClick:()=>{var t,a;return y({id:e.id,name:null!==(t=e.name)&&void 0!==t?t:"",email:null!==(a=e.email)&&void 0!==a?a:"",created_time:e.created_time})},onUpdateUserRole:w},e.id)),0===O.length&&(0,W.jsx)(P.Z.Row,{children:(0,W.jsx)(P.Z.Cell,{children:(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,B({},z.noResults))})})})]})]}),(0,W.jsxs)("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[f&&(0,W.jsxs)("button",{onClick:()=>i.vm.openModal(i.B.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[(0,W.jsx)(N.Vz5,{className:"icon-sm"}),(0,W.jsx)(b.Z,B({},z.inviteMemberButton))]}),D>1&&(0,W.jsx)("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:(0,W.jsx)(k.t,{currentPage:r,onChangeIndex:s,length:D})})]}),(0,W.jsx)(I,{onDeleteConfirm:M})]})}function I(e){var t;let{onDeleteConfirm:a}=e,n=(0,h.Z)(),r=A(e=>null!==e.confirmModalUserData),s=A(e=>null===e.confirmModalUserData?{}:{userId:e.confirmModalUserData.id,email:e.confirmModalUserData.email,name:e.confirmModalUserData.name,dateAdded:(0,f.Z)(e.confirmModalUserData.created_time)});return(0,W.jsx)(O.Z,{isOpen:r,title:n.formatMessage(z.removeMemberModalTitle),onClose:()=>R(),type:"success",primaryButton:(0,W.jsx)(M.Z.Button,{title:n.formatMessage(z.removeMemberModalConfirm),color:"danger",onClick:a}),secondaryButton:(0,W.jsx)(M.Z.Button,{title:n.formatMessage(z.removeMemberModalCancel),color:"secondary",onClick:()=>R()}),children:(0,W.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[null!==(t=s.name)&&void 0!==t?t:s.email,(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,B(B({},z.dateJoined),{},{values:{dateAdded:n.formatDate(s.dateAdded,{year:"numeric",month:"long",day:"numeric"})}}))})]})})}function _(e){var t;let{user:a,currentUserHasAdminRights:n,isCurrentUserOwner:r,isCurrentUser:s,onRemoveUserClick:l,onUpdateUserRole:i}=e,o=(0,C.Ap)()[a.role],c=null==a.name||""===a.name,{value:d}=(0,u.sB)("3999712942");return(0,W.jsxs)(P.Z.Row,{children:[(0,W.jsx)(P.Z.Cell,{children:(0,W.jsxs)("span",{className:(0,m.default)("flex flex-grow items-center justify-between gap-2",c&&"text-token-text-tertiary"),children:[(0,W.jsx)("span",{children:null!==(t=a.name)&&void 0!==t?t:(0,W.jsx)(b.Z,B({},z.missingName))}),s&&(0,W.jsx)("span",{children:(0,W.jsx)(b.Z,B({},z.youSpecifier))}),d&&a.is_scim_managed&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("span",{className:"flex-grow"}),(0,W.jsx)(U,{})]})]})}),(0,W.jsx)(P.Z.Cell,{children:a.email}),(0,W.jsx)(P.Z.Cell,{children:r?(0,W.jsx)(F,{currentRole:a.role,onUpdateUserRole:e=>{i(a.id,e)},disabled:s}):o}),n&&(0,W.jsx)(P.Z.Cell,{children:(0,W.jsx)(H,{userId:a.id,onRemoveUserClick:l,disabled:s})})]})}function F(e){let{currentRole:t,onUpdateUserRole:a,disabled:n=!1}=e,s=(0,C.Ap)();return(0,W.jsx)(w.g,{disabled:n,defaultValue:t,onValueChange:e=>{a(e)},options:[{label:s[r.r3.STANDARD],value:r.r3.STANDARD},{label:s[r.r3.ADMIN],value:r.r3.ADMIN},{label:s[r.r3.OWNER],value:r.r3.OWNER}]})}function H(e){let{disabled:t,onRemoveUserClick:a,userId:n}=e;return t?null:(0,W.jsxs)(y.Z.Root,{children:[(0,W.jsx)(y.Z.Trigger,{className:"-my-2",children:(0,W.jsx)(N.nWS,{className:"icon-sm"})}),(0,W.jsx)(y.Z.Portal,{children:(0,W.jsx)(y.Z.Content,{children:(0,W.jsx)(y.Z.Item,{onClick:()=>{a(n)},children:(0,W.jsx)(b.Z,B({},z.removeMemberModalTitle))})})})]})}function L(e){var t;let{data:a}=(0,S.Z)(e);return null!==(t=null==a?void 0:a.total)&&void 0!==t?t:0}function Y(){return(0,W.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,W.jsx)(s.Z,{})})}let z=(0,v.vU)({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}})},46247:function(e,t,a){"use strict";a.d(t,{Z:function(){return Z},b:function(){return O}});var n=a(97410),r=a(34608),s=a(44575),l=a(48454),i=a(25968),o=a(89852),c=a(42420),d=a(19841),u=a(91530),m=a.n(u),f=a(92379),p=a(75172),x=a(62984),g=a(68306),b=a(7297),h=a(93934),v=a(35998),j=a(48198),k=a(32863),y=a(41508),M=a(651);function w(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function P(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?w(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):w(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function N(e){let{workspace:t}=e,a=(0,c.NL)(),n=(0,i.aF)(),u=(0,s.t)(),g=(null==u?void 0:u.id)===t.id,{0:k,1:w}=(0,f.useState)(!1),N=(0,l.b)(),O=(0,p.Z)(),Z=(0,f.useCallback)(async()=>{w(!0);let{willRedirect:e}=(0,s.nq)(a,t.id,N,O);h._P.enableHistory(),e||(0,o.M)()},[a,t.id,N,O]),C=(0,y.GA)(t),W=(0,M.jsx)("div",{className:"flex items-center justify-center",children:(0,M.jsx)(b.B0,{src:t.data.profilePictureUrl,size:"medium"})});if(t.structure===r.CZ.PERSONAL){if(!n)return null;W=(0,M.jsx)("div",{className:"flex items-center justify-center",children:(0,M.jsx)(b.Yt,{user:n,customStyle:!0,size:b.EF.workspaceMedium,className:"h-9 w-9 overflow-hidden rounded-full"})})}return(0,M.jsxs)(g?"div":"button",{onClick:g?m():Z,className:(0,d.default)({"flex w-full items-center gap-2 rounded-lg border border-token-border-medium bg-token-main-surface-primary p-4 hover:bg-token-main-surface-secondary":!0,"bg-token-sidebar-surface-secondary":g,"opacity-50":!t.canAccessWithCurrentSession}),children:[(0,M.jsxs)("div",{className:"flex w-full items-center gap-4",children:[W,(0,M.jsxs)("div",{className:"inline text-left align-top font-semibold",children:[(0,M.jsx)("p",{children:C}),!t.canAccessWithCurrentSession&&(0,M.jsx)("p",{className:"leading-4",children:(0,M.jsx)("small",{className:"text-token-text-secondary ",children:(0,M.jsx)(x.Z,P({},t.ssoConnectionName?S.authenticateWithSSOToAccessWorkspace:S.authenticateWithoutSSOToAccessWorkspace))})})]})]}),(0,M.jsx)("div",{className:"flex h-full items-center p-1",children:k?(0,M.jsx)(v.Z,{}):g?(0,M.jsx)(j.rE2,{className:"icon-lg"}):(0,M.jsx)(j.ob9,{className:"icon-lg my-auto"})})]})}function O(e){let{data:t}=e,a=t.map(e=>(0,M.jsx)(N,{workspace:e},e.id));return(0,M.jsx)("div",{className:"flex w-full flex-col gap-2",children:a})}function Z(){var e;let t=(0,y.my)(),a=(0,i.aF)(),n=null!==(e=null==a?void 0:a.email)&&void 0!==e?e:"";if(!t||0===t.length)return null;let s=t.filter(e=>e.structure===r.CZ.WORKSPACE);return(0,M.jsx)(k.Z,{isOpen:!0,onClose:m(),type:"success",size:"normal",title:(0,M.jsxs)("div",{className:"flex flex-col",children:[(0,M.jsx)(x.Z,P({},S.workspaceSwitcherTitle)),(0,M.jsx)("span",{className:"mt-0.5 text-sm text-token-text-secondary",children:n})]}),children:(0,M.jsxs)("div",{className:"flex w-full flex-col items-center justify-between",children:[(0,M.jsx)(O,{data:t}),(0,M.jsx)("span",{className:"mt-4 text-sm text-token-text-secondary",children:(0,M.jsx)(x.Z,P(P({},S.workspaceSwitcherDisclaimer),{},{values:{workspaces:(0,M.jsx)("span",{className:"contents font-bold",children:(0,M.jsx)(g.yX,{value:s.map(e=>e.data.name)})}),numWorkspaces:s.length}}))})]})})}let S=(0,g.vU)({workspaceSwitcherTitle:{id:"workspaceSwitcher.title",defaultMessage:"Select a workspace"},workspaceSwitcherDisclaimer:{id:"workspaceSwitcher.disclaimer",defaultMessage:"You've been added to the {workspaces} {numWorkspaces, plural, one {workspace} other {workspaces}}. You can switch between workspaces at any time."},authenticateWithSSOToAccessWorkspace:{id:"CV7pdM",defaultMessage:"Authenticate with SSO to access this workspace"},authenticateWithoutSSOToAccessWorkspace:{id:"zfCWFh",defaultMessage:"Authenticate without SSO to access this workspace"}})},44051:function(e,t,a){"use strict";a.d(t,{I:function(){return s},Z:function(){return l}});var n=a(72988),r=a(84760);let s=25;function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;return(0,r.a)({queryKey:["workspace",e,t,a],queryFn:async()=>await n.Z.getWorkspaceUsers(e,t,l,a),placeholderData:i,enabled:!!e})}},41508:function(e,t,a){"use strict";a.d(t,{$3:function(){return u},Ap:function(){return o},CV:function(){return m},GA:function(){return d},Gk:function(){return b},bE:function(){return h},cI:function(){return p},eA:function(){return f},my:function(){return g},qH:function(){return c}});var n=a(34608),r=a(44575),s=a(25968),l=a(92379),i=a(75172);function o(){let e=(0,i.Z)(),t=e.formatMessage(v.adminRoleName),a=e.formatMessage(v.ownerRoleName),r=e.formatMessage(v.standardRoleName);return(0,l.useMemo)(()=>({[n.r3.OWNER]:a,[n.r3.ADMIN]:t,[n.r3.STANDARD]:r}),[a,t,r])}function c(e){let t=(0,i.Z)(),a=null==e?void 0:e.isTeam(),n=null==e?void 0:e.isEnterprise(),r=null==e?void 0:e.isEdu();if(e){if(a)return t.formatMessage(v.teamPlanName);if(n)return t.formatMessage(v.enterprisePlanName);if(r)return t.formatMessage(v.eduPlanName)}return t.formatMessage(v.personalPlanName)}function d(e){return m((0,i.Z)(),e)}function u(){let e=(0,r.t)();return m((0,i.Z)(),e)}function m(e,t){var a;return null==t||t.isPersonalAccount()?e.formatMessage(v.personalWorkspaceTitle):null!==(a=t.data.name)&&void 0!==a?a:e.formatMessage(v.defaultWorkspaceTitle)}function f(){var e;let t=(0,s.aF)();return null!==(e=null==t?void 0:t.email)&&void 0!==e?e:null}function p(){var e,t;let a=(0,s.aF)();return null!==(e=null!==(t=null==a?void 0:a.name)&&void 0!==t?t:null==a?void 0:a.email)&&void 0!==e?e:null}function x(){return(0,s.ec)(e=>{let{workspaces:t}=e;return t})}function g(){var e;let{data:t}=(0,r.rk)();return null!==(e=null==t?void 0:t.accountItems.filter(e=>!e.isDeactivated()))&&void 0!==e?e:[]}function b(e){let t=x().find(t=>t.id===e);return(null==t?void 0:t.role)===n.r3.OWNER}function h(e){let t=x().find(t=>t.id===e);return(null==t?void 0:t.role)===n.r3.ADMIN}let v=(0,a(68306).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise"},eduPlanName:{id:"useWorkspaces.eduPlanName",defaultMessage:"Edu"},teamPlanName:{id:"useWorkspaces.teamPlanName",defaultMessage:"Team"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member"}})},35026:function(e,t,a){"use strict";a.d(t,{W:function(){return n}});let n={MessageAction:"z-10",ScrollToBottom:"z-10",PromptTextareaHeader:"z-20",TagGpt:"z-20"}},6796:function(e,t,a){"use strict";a.d(t,{IW:function(){return Z},Re:function(){return N},Y6:function(){return O},ZY:function(){return S},c0:function(){return D},qS:function(){return U},sY:function(){return C},sr:function(){return B}});var n,r,s,l,i,o,c=a(97410),d=a(15316),u=a(48198),m=a(59900),f=a(43991),p=a(95182),x=a.n(p),g=a(62984),b=a(68306),h=a(15478),v=a(651);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach(function(t){(0,c.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}let y=h.Z.div(r||(r=(0,d.Z)(["p-6"]))),M=h.Z.label(s||(s=(0,d.Z)(["font-semibold text-base cursor-pointer"]))),w=h.Z.div(l||(l=(0,d.Z)(["flex flex-col gap-3 text-token-text-secondary text-sm mt-3"]))),P=h.Z.p(i||(i=(0,d.Z)(["text-token-text-primary"]))),N=h.Z.s(o||(o=(0,d.Z)(["text-token-text-tertiary"]))),O=2;function Z(e){let{billingType:t,name:a,billingFeatures:n,cost:r,costStructure:s}=e;return(0,v.jsxs)(y,{children:[(0,v.jsxs)("div",{className:"flex items-center gap-4",children:[(0,v.jsx)(f.ck,{value:t,id:t,className:"h-5 w-5 cursor-pointer rounded-full border border-token-border-medium bg-token-main-surface-primary outline-none hover:bg-token-main-surface-secondary radix-state-checked:border-green-500 radix-state-checked:bg-green-500",children:(0,v.jsx)(f.z$,{className:"flex items-center justify-center",children:(0,v.jsx)(u.$As,{className:"mt-0.5 h-[14px] w-[14px] stroke-[3] text-white"})})}),(0,v.jsx)(M,{htmlFor:t,children:(0,v.jsx)(g.Z,k({},a))})]}),(0,v.jsxs)(w,{children:[(0,v.jsxs)("div",{children:[(0,v.jsx)(P,{children:(0,v.jsx)(g.Z,k(k({},r),{},{values:{s:function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,v.jsx)(N,{children:t})}}}))}),(0,v.jsx)("p",{children:(0,v.jsx)(g.Z,k({},s))})]}),(0,v.jsx)(m.QI,{children:n.map(e=>(0,v.jsx)(m.HC,{children:(0,v.jsx)(g.Z,k({},e))},e.id))})]})]})}function S(e){let{numSeats:t,minSeats:a,setNumSeats:n}=e;return(0,v.jsxs)("div",{className:"mb-3 flex items-center",children:[(0,v.jsx)("button",{disabled:t<=a,onClick:e=>{let t=e.shiftKey;n(e=>x()(e-=t?10:1,a,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,v.jsx)(u.V_R,{className:"icon-sm"})}),(0,v.jsx)("input",{type:"number",min:a,max:999,name:"seats",value:t,onChange:e=>{n(parseInt(e.target.value))},onBlur:()=>{t<a&&n(a),t>999&&n(999),t||n(a)},className:"m-0 h-9 appearance-none rounded border border-gray-200 px-2 py-0 text-center text-sm text-gray-800 shadow-none outline-none ring-transparent focus:border-green-500 focus:ring-green-500 dark:border-gray-700"}),(0,v.jsx)("button",{disabled:t>=999,onClick:e=>{let t=e.shiftKey;n(e=>x()(e+=t?10:1,a,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,v.jsx)(u.Vz5,{className:"icon-sm"})})]})}let C=(0,b.vU)({flexiblePlanName:{id:"teamBilling.flexiblePlan.name",defaultMessage:"Flexible plan"},flexiblePlanCost:{id:"teamBilling.flexiblePlan.cost",defaultMessage:"USD $30"},flexibleBilledMonthly:{id:"teamBilling.flexiblePlan.billedMonthly",defaultMessage:"Price billed monthly"},flexibleAddRemoveUsers:{id:"teamBilling.flexiblePlan.addRemoveUsers",defaultMessage:"Add or remove users as needed"},flexibleMinBill:{id:"teamBilling.flexiblePlan.minBill",defaultMessage:"The minimum monthly bill is for 2 users, USD $60/month"},seatsTitle:{id:"teamBilling.seatsTitle",defaultMessage:"Seats"},summaryTitle:{id:"teamBilling.summaryTitle",defaultMessage:"Summary"},annualPlanName:{id:"teamBilling.annualPlan.name",defaultMessage:"Annual plan"},annualPlanCost:{id:"teamBilling.annualPlan.cost",defaultMessage:"USD $25 <s>$30</s>"},annualBilledAnnually:{id:"teamBilling.annualPlan.billedAnnually",defaultMessage:"Annual price billed annually"},annualAddUsersWithRenewal:{id:"teamBilling.annualPlan.addUsersWithRenewal",defaultMessage:"Add users as needed, remove users only when you renew the contract"},annualMinBill:{id:"teamBilling.annualPlan.minBill",defaultMessage:"The minimum bill is for 2 users, USD $50/month billed annually"},teamsCostStructure:{id:"teamBilling.teamsCostStructure",defaultMessage:"per person/month"},annualSavingsPercentage:{id:"teamBilling.annualSavingsPercentage",defaultMessage:"16.7% off"},createWorkspace:{id:"createWorkspace.title",defaultMessage:"Create workspace"},cancel:{id:"createWorkspace.cancel",defaultMessage:"Cancel"},selectTeamPlan:{id:"createWorkspace.selectTeamPlan",defaultMessage:"Select Team Plan"},selectTeamPlanModalTitle:{id:"createWorkspace.selectTeamPlanModalTitle",defaultMessage:"Select your team plan"},continueToBillingButton:{id:"createWorkspace.continueToBillingButton",defaultMessage:"Continue to billing"},paymentErrorWarning:{id:"createWorkspace.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."},selectBillingOption:{id:"createWorkspace.selectBillingOption",defaultMessage:"Select billing options"},annualPlanSelected:{id:"teamBilling.annualPlanSelected",defaultMessage:"ChatGPT Team annual plan"},annualPlanBilled:{id:"teamBilling.annualPlanBilled",defaultMessage:"Price billed annually, starting {date}"},annualPlanTotal:{id:"teamBilling.annualPlanTotal",defaultMessage:"USD ${totalCost} per year total"},flexiblePlanSelected:{id:"teamBilling.flexiblePlanSelected",defaultMessage:"ChatGPT Team flexible plan"},flexiblePlanBilled:{id:"teamBilling.flexiblePlanBilled",defaultMessage:"Price billed monthly, starting {date}"},flexiblePlanTotal:{id:"teamBilling.flexiblePlanTotal",defaultMessage:"USD ${totalCost} per month total"},continueToPricePreview:{id:"teamBilling.continueToPricePreview",defaultMessage:"Continue"},changeEffectDate:{id:"teamBilling.changeEffectDate",defaultMessage:"This change will take effect at your next renewal on {date}"},confirmPageChangeEffectDate:{id:"teamBilling.confirmPageChangeEffectDate",defaultMessage:"Your billing schedule will change from {current_plan} to {new_plan} starting at your next renewal on {date}"},confirmChange:{id:"teamBilling.confirmChange",defaultMessage:"Confirm"}});var W=((n=W||{}).FLEXIBLE="month",n.ANNUAL="year",n);let D={type:W.FLEXIBLE,name:C.flexiblePlanName,cost:C.flexiblePlanCost,costStructure:C.teamsCostStructure,billingFeatures:[C.flexibleBilledMonthly,C.flexibleAddRemoveUsers,C.flexibleMinBill]},B={type:W.ANNUAL,name:C.annualPlanName,cost:C.annualPlanCost,costStructure:C.teamsCostStructure,originalCost:C.flexiblePlanCost,savingsFromOriginal:C.annualSavingsPercentage,billingFeatures:[C.annualBilledAnnually,C.annualAddUsersWithRenewal,C.annualMinBill]},U={[W.FLEXIBLE]:{name:C.flexiblePlanSelected,billed:C.flexiblePlanBilled,total:C.flexiblePlanTotal},[W.ANNUAL]:{name:C.annualPlanSelected,billed:C.annualPlanBilled,total:C.annualPlanTotal}}},48454:function(e,t,a){"use strict";a.d(t,{A:function(){return p},b:function(){return x}});var n=a(97410),r=a(69923),s=a(54031),l=a(94035),i=a(17958),o=a(90681),c=a(19698),d=a(43612),u=a(32307);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function p(e,t,a){return t?r.Ho.LoginWebAuth0:r.Ho.Auth0}function x(){let e=(0,u.useRouter)(),{value:t}=(0,c.fW)("1198030896"),a=(0,r._0)((0,o.xb)("1977905538").config.value),n=(0,i.L)();return function(){let{authType:i="signup",callbackUrl:o="/",additionalAuthParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=p(e,t,a.forwardToAuthApi),m=n();return(0,d.signIn)(u,{callbackUrl:o},f(f(f(f({prompt:"login",screen_hint:i},(0,s.gk)((0,l.f3)())),(0,r.zC)(a)),m?{use_email_otp:"true"}:{}),c)),u}}},54031:function(e,t,a){"use strict";a.d(t,{gk:function(){return r}});var n=a(99734);function r(e){return{"ext-statsig-tier":n.uG,"ext-oai-did":e}}},17958:function(e,t,a){"use strict";a.d(t,{L:function(){return r}});var n=a(19698);function r(){let{layer:e}=(0,n.AH)("1346366956");return()=>e.get("use_email_otp",!1)}},41724:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/deactivated",function(){return a(15239)}])}},function(e){e.O(0,[2205,4198,9169,4089,7751,1958,3300,737,3280,6879,2888,9774,179],function(){return e(e.s=41724)}),_N_E=e.O()}]);
//# sourceMappingURL=deactivated-b5b14559206b0cc9.js.map