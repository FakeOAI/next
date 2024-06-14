(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{51516:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},13500:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return eo},default:function(){return el}});var n,s,i=r(94521),a=r(70657),o=r(41141),l=r(67165),c=r(4702),u=r(55371),d=r(37031),m=r(19841),f=r(61888),p=r(71126),g=r.n(p),v=r(43128),j=r(92379),b=r(72256),h=r(26123),y=r(25940),x=r(74091),k=r(5443),w=r(44230),M=r(99373),I=r(69482),P=r(11823),O=r(93223),Z=r(14816),E=r(35226),R=r(96053),q=r(94982);function C(e){let t=(0,h.Z)(),r=(0,E.NL)();return(0,R.D)({mutationFn:r=>{let{inviteId:n,role:s,acceptRequest:i}=r;return O.Z.patchWorkspaceInvite(e,n,{role:s,acceptRequest:i}).catch(e=>{q.m.danger(t.formatMessage(D.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function N(e){let t=(0,h.Z)(),r=(0,E.NL)();return(0,R.D)({mutationFn:r=>{let{email:n}=r;return O.Z.deleteWorkspaceInvite(e,n).catch(e=>{q.m.danger(t.formatMessage(D.deleteInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let D=(0,y.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var S=r(98890),T=r(55775),W=r(651);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function A(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:s,1:i}=(0,j.useState)(0),a=(0,T.Gk)(r),o=(0,T.bE)(r),l=a||o,{data:c}=(t=25*s,(0,Z.a)({queryKey:["workspace",r,"invites",t,n],queryFn:async()=>await O.Z.getWorkspaceInvites(r,t,25,n)}));if(void 0===c)return(0,W.jsx)(S.bq,{});let u=c.items,d=Math.ceil(c.total/25);return s>=d&&0!==d&&i(Math.max(d-1,0)),(0,W.jsxs)("div",{children:[(0,W.jsxs)(I.Z.Root,{fixed:!0,size:"normal",children:[(0,W.jsxs)(I.Z.Header,{children:[(0,W.jsx)(I.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,_({},B.email))}),(0,W.jsx)(I.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,W.jsx)("span",{className:l?"pl-3":"",children:(0,W.jsx)(b.Z,_({},B.role))})}),l&&(0,W.jsx)(I.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,W.jsxs)(I.Z.Body,{children:[u.map(e=>(0,W.jsx)(U,{workspaceId:r,invite:e,isCurrentUserOwner:a,currentUserHasAdminRights:l},e.id)),0===u.length&&(0,W.jsx)(I.Z.Row,{children:(0,W.jsx)(I.Z.Cell,{children:(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,_({},B.noResults))})})})]})]}),d>1&&(0,W.jsx)("div",{className:"mt-2 flex justify-center",children:(0,W.jsx)(P.t,{currentPage:s,onChangeIndex:i,length:d})})]})}function U(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:s}=e,i=(0,T.Ap)(),a=C(t),o=N(t),l=function(e){let t=(0,h.Z)(),r=(0,E.NL)();return(0,R.D)({mutationFn:r=>{let{role:n,email:s}=r;return O.Z.addWorkspaceUsers(e,[s],n,!0).then(e=>{let{account_invites:r,errored_emails:n}=e;if(n.length>0)throw Error(n[0].error);r.length>0&&q.m.success(t.formatMessage(D.resendInviteSuccess,{email:s}))}).catch(e=>{q.m.danger(t.formatMessage(D.resendInviteError,{email:s,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t);return(0,W.jsxs)(I.Z.Row,{disabled:a.isPending||o.isPending||o.isSuccess||l.isPending,children:[(0,W.jsx)(I.Z.Cell,{children:r.email_address}),(0,W.jsx)(I.Z.Cell,{children:n?(0,W.jsx)(S.mJ,{currentRole:r.role,onUpdateUserRole:e=>{a.mutate({inviteId:r.id,role:e})}}):i[r.role]}),s&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(I.Z.Cell,{children:(0,W.jsx)(K,{onDeleteUser:()=>{o.mutate({email:r.email_address})},onResendInvite:()=>{l.mutate({email:r.email_address,role:r.role})}})})})]})}function K(e){let{onDeleteUser:t,onResendInvite:r}=e;return(0,W.jsxs)(l.Z.Root,{children:[(0,W.jsx)(l.Z.Trigger,{children:(0,W.jsx)(w.nWS,{className:"icon-sm"})}),(0,W.jsx)(l.Z.Portal,{children:(0,W.jsxs)(l.Z.Content,{children:[(0,W.jsx)(l.Z.Item,{onClick:r,children:(0,W.jsx)(b.Z,_({},B.resendInvite))}),(0,W.jsx)(l.Z.Item,{onClick:t,children:(0,W.jsx)(b.Z,_({},B.revokeInvite))})]})})]})}let B=(0,y.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Q(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:s,1:i}=(0,j.useState)(0),{data:a}=(t=25*s,(0,Z.a)({queryKey:["workspace",r,"invites","requests",t,n],queryFn:async()=>await O.Z.getWorkspaceInviteRequests(r,t,25,n)})),o=(0,T.Gk)(r),l=(0,T.bE)(r),c=(0,h.Z)(),u=o||l;if(void 0===a)return(0,W.jsx)(S.bq,{});let d=a.items,m=Math.ceil(a.total/25);return s>=m&&0!==m&&i(Math.max(m-1,0)),(0,W.jsxs)("div",{children:[(0,W.jsxs)(I.Z.Root,{fixed:!0,size:"normal",children:[(0,W.jsxs)(I.Z.Header,{children:[(0,W.jsx)(I.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,W.jsx)(b.Z,H({},G.email))}),(0,W.jsx)(I.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,W.jsx)("span",{className:u?"pl-3":"",children:(0,W.jsx)(b.Z,H({},G.role))})}),u&&(0,W.jsx)(I.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(G.actions)})]}),(0,W.jsxs)(I.Z.Body,{children:[d.map(e=>(0,W.jsx)(z,{workspaceId:r,invite:e,isCurrentUserOwner:o,currentUserHasAdminRights:u},e.id)),0===d.length&&(0,W.jsx)(I.Z.Row,{children:(0,W.jsx)(I.Z.Cell,{children:(0,W.jsx)("div",{className:"text-token-text-tertiary",children:(0,W.jsx)(b.Z,H({},G.noResults))})})})]})]}),m>1&&(0,W.jsx)("div",{className:"mt-2 flex justify-center",children:(0,W.jsx)(P.t,{currentPage:s,onChangeIndex:i,length:m})})]})}function z(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:s}=e,i=(0,T.Ap)(),a=C(t),o=N(t),l=(0,h.Z)();return(0,W.jsxs)(I.Z.Row,{disabled:a.isPending||o.isPending||o.isPending,children:[(0,W.jsx)(I.Z.Cell,{children:r.email_address}),(0,W.jsx)(I.Z.Cell,{children:n?(0,W.jsx)(S.mJ,{currentRole:r.role,onUpdateUserRole:e=>{a.mutate({inviteId:r.id,role:e})}}):i[r.role]}),s&&(0,W.jsx)(W.Fragment,{children:(0,W.jsx)(I.Z.Cell,{children:(0,W.jsxs)("div",{className:"flex gap-2",children:[(0,W.jsx)(k.z,{onClick:()=>a.mutate({inviteId:r.id,acceptRequest:!0}),children:l.formatMessage(G.accept)}),(0,W.jsx)(k.z,{color:"secondary",onClick:()=>o.mutate({email:r.email_address}),children:l.formatMessage(G.reject)})]})})})]})}let G=(0,y.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var V=r(46129);function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Y=((n=Y||{}).Members="members",n.Invites="invites",n.Requests="requests",n);function $(e){let{tab:t}=e;switch(t){case Y.Members:return(0,W.jsx)(b.Z,X({},ei.allMembers));case Y.Invites:return(0,W.jsx)(b.Z,X({},ei.pendingInvites));case Y.Requests:return(0,W.jsx)(b.Z,X({},ei.pendingRequests))}}function ee(e){let{tab:t,filterInputValue:r,workspaceId:n}=e;switch(t){case Y.Members:return(0,W.jsx)(S.ZP,{workspaceId:n,filterInputValue:r});case Y.Invites:return(0,W.jsx)(A,{workspaceId:n,filterInputValue:r});case Y.Requests:return(0,W.jsx)(Q,{workspaceId:n,filterInputValue:r})}}let et=(0,d.b)(Y);function er(e){var t;let{currentWorkspaceId:r}=e,n=(0,h.Z)(),s=(0,c.t)(),i=null!==(t=(0,S.p5)(r))&&void 0!==t?t:"?",o=(0,T.qH)(s),d=null==s?void 0:s.isTeam(),m=(0,v.useRouter)(),p="string"==typeof m.query.tab&&et(m.query.tab)?m.query.tab:Y.Members,{0:y,1:x}=(0,j.useState)(""),{0:I,1:P}=(0,j.useState)("");(0,j.useEffect)(()=>{P("")},[p]);let O=(0,j.useCallback)((0,f.debounce)(e=>{P(e)},250),[]),Z=(0,V.Wv)();if(!s)return null;let E=s.isAdminOfAccount(),R=s.isOwnerOfAccount(),q=d||!Z?[Y.Members,Y.Invites]:[Y.Members,Y.Invites,Y.Requests];return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(g(),{children:(0,W.jsx)("title",{children:n.formatMessage(ei.adminBrowserPageTitle)})}),(0,W.jsx)(a.yG,{title:n.formatMessage(ei.adminPageTitle),subtitle:(0,W.jsx)(b.Z,X({values:{totalMembers:i,planName:o}},ei.totalMembers))}),(0,W.jsxs)(a.hb,{children:[(0,W.jsxs)(es,{children:[(0,W.jsx)("div",{className:"mb-6 flex gap-2",children:q.map(e=>(0,W.jsx)(en,{onClick:()=>{m.push(null!=e?"/admin?tab=".concat(e):"/admin")},isSelected:p===e,children:(0,W.jsx)($,{tab:e})},e))}),(0,W.jsxs)("div",{className:"flex gap-2",children:[(0,W.jsxs)("div",{className:"relative",children:[(0,W.jsx)(w.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,W.jsx)("input",{type:"text",value:y,onChange:e=>{x(e.target.value),O(e.target.value)},placeholder:n.formatMessage(ei.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(E||R||d)&&(0,W.jsx)(k.z,{onClick:()=>{u.vm.openModal(u.B.InviteUsersToWorkspace)},icon:w.Vz5,children:(0,W.jsx)(b.Z,X({},ei.inviteMemberButton))}),d?(0,W.jsx)(l.d,{triggerButton:(0,W.jsx)(k.z,{color:"secondary",icon:w.nWS}),children:(0,W.jsx)(l.Z.Item,{onClick:()=>{s&&u.vm.setLeaveWorkspaceData(s)},children:(0,W.jsx)(b.Z,X({},ei.leaveWorkspace))})}):null]})]}),(0,W.jsx)(ee,{workspaceId:r,tab:p,filterInputValue:I})]}),null!=s?(0,W.jsx)(M.Z,{workspace:s}):null]})}function en(e){let{children:t,isSelected:r,onClick:n}=e;return(0,W.jsx)(k.z,{color:"ghost",className:(0,m.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:n,children:t})}let es=x.Z.div(s||(s=(0,o.Z)(["mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between"]))),ei=(0,y.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ea(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var eo=!0;function el(e){return(0,W.jsx)(er,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(r),!0).forEach(function(t){(0,i.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ea(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}el.getLayout=function(e){return(0,W.jsx)(a.ZP,{mobilePageTitle:"Members",children:e})}},46129:function(e,t,r){"use strict";r.d(t,{Bd:function(){return j},DD:function(){return y},Fc:function(){return h},Ji:function(){return v},OR:function(){return x},Wv:function(){return g},f_:function(){return p},sd:function(){return w},z0:function(){return k}});var n,s=r(41141),i=r(21904),a=r(94982),o=r(93223),l=r(24040),c=r(14816),u=r(96053),d=r(35226),m=r(26123),f=r(25940);function p(e,t){return(0,c.a)({queryKey:["workspace/identity",e],queryFn:async()=>{if(void 0!==e)return await o.Z.getWorkspaceIdentitySettings(e)},enabled:t})}function g(){let e=(0,l.ec)(l.F_.workspaceId),{data:t}=p(null!=e?e:void 0,null!=e);return(null==t?void 0:t.domains)&&(null==t?void 0:t.domains.filter(e=>"verified"==e.status))}function v(e){let t=(0,m.Z)();return(0,u.D)({mutationFn:r=>{let{shouldAutoProvision:n}=r;return o.Z.setWorkspaceShouldAutoProvision(e,n).then(e=>{let r=n?M.autoProvisionEnabledToast:M.autoProvisionDisabledToast;return a.m.success(t.formatMessage(r),{duration:3}),e}).catch(e=>{throw a.m.danger(e.message),e})}})}function j(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{domainId:r}=t;return o.Z.removeDomainFromWorkspace(e,r)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]}),t.refetchQueries({queryKey:["builderProfile"]})}})}function b(e){let t=e;return t.startsWith("-----BEGIN")||(t="-----BEGIN CERTIFICATE-----\n".concat(t)),t.endsWith("CERTIFICATE-----")||(t="".concat(t,"\n-----END CERTIFICATE-----")),t}function h(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{signInEndpoint:r,cert:n}=t;return o.Z.createSAMLConnection(e,r,b(n))},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function y(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{connectionId:r,signInEndpoint:n,cert:s,active:i,enforcedClients:a}=t;return o.Z.updateSAMLConnection(e,r,{signInEndpoint:n,cert:void 0!==s?b(s):void 0,active:i,enforcedClients:a})},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function x(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{connectionId:r}=t;return o.Z.deleteSAMLConnection(e,r)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}let k=r(74091).Z.div(n||(n=(0,s.Z)(["text-md mb-4 text-token-text-secondary"]))),w={[i.pT.VERIFIED]:(0,f.Em)({id:"i7FkyS",defaultMessage:"Verified"}),[i.pT.PENDING]:(0,f.Em)({id:"THBv/l",defaultMessage:"Pending"}),[i.pT.EXPIRED]:(0,f.Em)({id:"+sjWGK",defaultMessage:"Expired"})},M=(0,f.vU)({autoProvisionEnabledToast:{id:"workspaceIdentity.autoProvisionEnabledToast",defaultMessage:"Auto provisioning enabled for this workspace"},autoProvisionDisabledToast:{id:"workspaceIdentity.autoProvisionDisabledToast",defaultMessage:"Auto provisioning disabled for this workspace"}})},42506:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(13500)}])}},function(e){e.O(0,[7349,6271,3718,4368,5365,2349,1783,4834,7126,8890,1220,4963,5165,657,2888,9774,179],function(){return e(e.s=42506)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-36a73cfcd9edccb0.js.map