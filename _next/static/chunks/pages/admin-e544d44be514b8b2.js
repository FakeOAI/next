(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{13500:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return el},default:function(){return ec}});var s,n,a=r(94521),i=r(30032),l=r(41141),c=r(67165),o=r(4702),d=r(55371),u=r(37031),m=r(19841),g=r(61888),p=r(71126),f=r.n(p),j=r(43128),v=r(92379),b=r(72256),x=r(26123),h=r(25940),y=r(74091),k=r(5443),w=r(33481),O=r(99373),M=r(69482),P=r(11823),I=r(10852),Z=r(14816),R=r(35226),q=r(96053),N=r(94982);function C(e){let t=(0,x.Z)(),r=(0,R.NL)();return(0,q.D)({mutationFn:r=>{let{inviteId:s,role:n,acceptRequest:a}=r;return I.Z.patchWorkspaceInvite(e,s,{role:n,acceptRequest:a}).catch(e=>{N.m.danger(t.formatMessage(S.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function E(e){let t=(0,x.Z)(),r=(0,R.NL)();return(0,q.D)({mutationFn:r=>{let{email:s}=r;return I.Z.deleteWorkspaceInvite(e,s).catch(e=>{N.m.danger(t.formatMessage(S.deleteInviteError,{email:s,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let S=(0,h.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var D=r(98890),_=r(55775),W=r(651);function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function A(e){var t;let{workspaceId:r,filterInputValue:s}=e,{0:n,1:a}=(0,v.useState)(0),i=(0,_.Gk)(r),l=(0,_.bE)(r),c=i||l,{data:o}=(t=25*n,(0,Z.a)({queryKey:["workspace",r,"invites",t,s],queryFn:async()=>await I.Z.getWorkspaceInvites(r,t,25,s)}));if(void 0===o)return(0,W.jsx)(D.bq,{});let d=o.items,u=Math.ceil(o.total/25);return n>=u&&0!==u&&a(Math.max(u-1,0)),(0,W.jsxs)("div",{children:[(0,W.jsxs)(M.Z.Root,{fixed:!0,size:"normal",children:[(0,W.jsxs)(M.Z.Header,{children:[(0,W.jsx)(M.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,T({},F.email))}),(0,W.jsx)(M.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,W.jsx)("span",{className:c?"pl-3":"",children:(0,W.jsx)(b.Z,T({},F.role))})}),c&&(0,W.jsx)(M.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,W.jsxs)(M.Z.Body,{children:[d.map(e=>(0,W.jsx)(B,{workspaceId:r,invite:e,isCurrentUserOwner:i,currentUserHasAdminRights:c},e.id)),0===d.length&&(0,W.jsx)(M.Z.Row,{children:(0,W.jsx)(M.Z.Cell,{children:(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,T({},F.noResults))})})})]})]}),u>1&&(0,W.jsx)("div",{className:"mt-2 flex justify-center",children:(0,W.jsx)(P.t,{currentPage:n,onChangeIndex:a,length:u})})]})}function B(e){let{workspaceId:t,invite:r,isCurrentUserOwner:s,currentUserHasAdminRights:n}=e,a=(0,_.Ap)(),i=C(t),l=E(t),c=function(e){let t=(0,x.Z)(),r=(0,R.NL)();return(0,q.D)({mutationFn:r=>{let{role:s,email:n}=r;return I.Z.addWorkspaceUsers(e,[n],s,!0).then(e=>{let{account_invites:r,errored_emails:s}=e;if(s.length>0)throw Error(s[0].error);r.length>0&&N.m.success(t.formatMessage(S.resendInviteSuccess,{email:n}))}).catch(e=>{N.m.danger(t.formatMessage(S.resendInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t);return(0,W.jsxs)(M.Z.Row,{disabled:i.isPending||l.isPending||l.isSuccess||c.isPending,children:[(0,W.jsx)(M.Z.Cell,{children:r.email_address}),(0,W.jsx)(M.Z.Cell,{children:s?(0,W.jsx)(D.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),n&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(M.Z.Cell,{children:(0,W.jsx)(H,{onDeleteUser:()=>{l.mutate({email:r.email_address})},onResendInvite:()=>{c.mutate({email:r.email_address,role:r.role})}})})})]})}function H(e){let{onDeleteUser:t,onResendInvite:r}=e;return(0,W.jsxs)(c.Z.Root,{children:[(0,W.jsx)(c.Z.Trigger,{children:(0,W.jsx)(w.nWS,{className:"icon-sm"})}),(0,W.jsx)(c.Z.Portal,{children:(0,W.jsxs)(c.Z.Content,{children:[(0,W.jsx)(c.Z.Item,{onClick:r,children:(0,W.jsx)(b.Z,T({},F.resendInvite))}),(0,W.jsx)(c.Z.Item,{onClick:t,children:(0,W.jsx)(b.Z,T({},F.revokeInvite))})]})})]})}let F=(0,h.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Q(e){var t;let{workspaceId:r,filterInputValue:s}=e,{0:n,1:a}=(0,v.useState)(0),{data:i}=(t=25*n,(0,Z.a)({queryKey:["workspace",r,"invites","requests",t,s],queryFn:async()=>await I.Z.getWorkspaceInviteRequests(r,t,25,s)})),l=(0,_.Gk)(r),c=(0,_.bE)(r),o=(0,x.Z)(),d=l||c;if(void 0===i)return(0,W.jsx)(D.bq,{});let u=i.items,m=Math.ceil(i.total/25);return n>=m&&0!==m&&a(Math.max(m-1,0)),(0,W.jsxs)("div",{children:[(0,W.jsxs)(M.Z.Root,{fixed:!0,size:"normal",children:[(0,W.jsxs)(M.Z.Header,{children:[(0,W.jsx)(M.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,z({},V.email))}),(0,W.jsx)(M.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,W.jsx)("span",{className:d?"pl-3":"",children:(0,W.jsx)(b.Z,z({},V.role))})}),d&&(0,W.jsx)(M.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:o.formatMessage(V.actions)})]}),(0,W.jsxs)(M.Z.Body,{children:[u.map(e=>(0,W.jsx)(L,{workspaceId:r,invite:e,isCurrentUserOwner:l,currentUserHasAdminRights:d},e.id)),0===u.length&&(0,W.jsx)(M.Z.Row,{children:(0,W.jsx)(M.Z.Cell,{children:(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,z({},V.noResults))})})})]})]}),m>1&&(0,W.jsx)("div",{className:"mt-2 flex justify-center",children:(0,W.jsx)(P.t,{currentPage:n,onChangeIndex:a,length:m})})]})}function L(e){let{workspaceId:t,invite:r,isCurrentUserOwner:s,currentUserHasAdminRights:n}=e,a=(0,_.Ap)(),i=C(t),l=E(t),c=(0,x.Z)();return(0,W.jsxs)(M.Z.Row,{disabled:i.isPending||l.isPending||l.isPending,children:[(0,W.jsx)(M.Z.Cell,{children:r.email_address}),(0,W.jsx)(M.Z.Cell,{children:s?(0,W.jsx)(D.mJ,{currentRole:r.role,onUpdateUserRole:e=>{i.mutate({inviteId:r.id,role:e})}}):a[r.role]}),n&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(M.Z.Cell,{children:(0,W.jsxs)("div",{className:"flex gap-2",children:[(0,W.jsx)(k.z,{onClick:()=>i.mutate({inviteId:r.id,acceptRequest:!0}),children:c.formatMessage(V.accept)}),(0,W.jsx)(k.z,{color:"secondary",onClick:()=>l.mutate({email:r.email_address}),children:c.formatMessage(V.reject)})]})})})]})}let V=(0,h.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var G=r(46129);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Y=((s=Y||{}).Members="members",s.Invites="invites",s.Requests="requests",s);function $(e){let{tab:t}=e;switch(t){case Y.Members:return(0,W.jsx)(b.Z,X({},ea.allMembers));case Y.Invites:return(0,W.jsx)(b.Z,X({},ea.pendingInvites));case Y.Requests:return(0,W.jsx)(b.Z,X({},ea.pendingRequests))}}function ee(e){let{tab:t,filterInputValue:r,workspaceId:s}=e;switch(t){case Y.Members:return(0,W.jsx)(D.ZP,{workspaceId:s,filterInputValue:r});case Y.Invites:return(0,W.jsx)(A,{workspaceId:s,filterInputValue:r});case Y.Requests:return(0,W.jsx)(Q,{workspaceId:s,filterInputValue:r})}}let et=(0,u.b)(Y);function er(e){var t;let{currentWorkspaceId:r}=e,s=(0,x.Z)(),n=(0,o.t)(),a=null!==(t=(0,D.p5)(r))&&void 0!==t?t:"?",l=(0,_.qH)(n),u=null==n?void 0:n.isTeam(),m=(0,j.useRouter)(),p="string"==typeof m.query.tab&&et(m.query.tab)?m.query.tab:Y.Members,{0:h,1:y}=(0,v.useState)(""),{0:M,1:P}=(0,v.useState)("");(0,v.useEffect)(()=>{P("")},[p]);let I=(0,v.useCallback)((0,g.debounce)(e=>{P(e)},250),[]),Z=(0,G.Wv)();if(!n)return null;let R=n.isAdminOfAccount(),q=n.isOwnerOfAccount(),N=u||!Z?[Y.Members,Y.Invites]:[Y.Members,Y.Invites,Y.Requests];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(f(),{children:(0,W.jsx)("title",{children:s.formatMessage(ea.adminBrowserPageTitle)})}),(0,W.jsx)(i.yG,{title:s.formatMessage(ea.adminPageTitle),subtitle:(0,W.jsx)(b.Z,X({values:{totalMembers:a,planName:l}},ea.totalMembers))}),(0,W.jsxs)(i.hb,{children:[(0,W.jsxs)(en,{children:[(0,W.jsx)("div",{className:"mb-6 flex gap-2",children:N.map(e=>(0,W.jsx)(es,{onClick:()=>{m.push(null!=e?"/admin?tab=".concat(e):"/admin")},isSelected:p===e,children:(0,W.jsx)($,{tab:e})},e))}),(0,W.jsxs)("div",{className:"flex gap-2",children:[(0,W.jsxs)("div",{className:"relative",children:[(0,W.jsx)(w.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,W.jsx)("input",{type:"text",value:h,onChange:e=>{y(e.target.value),I(e.target.value)},placeholder:s.formatMessage(ea.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(R||q||u)&&(0,W.jsxs)(k.z,{onClick:()=>{d.vm.openModal(d.B.InviteUsersToWorkspace)},children:[(0,W.jsx)(w.Vz5,{className:"icon-sm"}),(0,W.jsx)(b.Z,X({},ea.inviteMemberButton))]}),u?(0,W.jsx)(c.d,{triggerButton:(0,W.jsx)(k.z,{color:"secondary",children:(0,W.jsx)(w.nWS,{className:"icon-sm"})}),children:(0,W.jsx)(c.Z.Item,{onClick:()=>{n&&d.vm.setLeaveWorkspaceData(n)},children:(0,W.jsx)(b.Z,X({},ea.leaveWorkspace))})}):null]})]}),(0,W.jsx)(ee,{workspaceId:r,tab:p,filterInputValue:M})]}),null!=n?(0,W.jsx)(O.Z,{workspace:n}):null]})}function es(e){let{children:t,isSelected:r,onClick:s}=e;return(0,W.jsx)(k.z,{color:"none",className:(0,m.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:s,children:t})}let en=y.Z.div(n||(n=(0,l.Z)(["mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between"]))),ea=(0,h.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ei(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,s)}return r}var el=!0;function ec(e){return(0,W.jsx)(er,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ei(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ei(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}ec.getLayout=function(e){return(0,W.jsx)(i.ZP,{mobilePageTitle:"Members",children:e})}},42506:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(13500)}])}},function(e){e.O(0,[4736,8543,7126,0,5165,32,2888,9774,179],function(){return e(e.s=42506)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-e544d44be514b8b2.js.map