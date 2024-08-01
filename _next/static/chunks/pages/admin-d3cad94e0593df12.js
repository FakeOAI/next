(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{51516:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},89678:function(e,t,r){var n=r(6627),i=r(85365),a=r(67948),s=Math.max,o=Math.min;e.exports=function(e,t,r){var l,c,d,u,f,p,m=0,g=!1,v=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function b(t){var r=l,n=c;return l=c=void 0,m=t,u=e.apply(n,r)}function y(e){var r=e-p,n=e-m;return void 0===p||r>=t||r<0||v&&n>=d}function j(){var e,r,n,a=i();if(y(a))return x(a);f=setTimeout(j,(e=a-p,r=a-m,n=t-e,v?o(n,d-r):n))}function x(e){return(f=void 0,h&&l)?b(e):(l=c=void 0,u)}function w(){var e,r=i(),n=y(r);if(l=arguments,c=this,p=r,n){if(void 0===f)return m=e=p,f=setTimeout(j,t),g?b(e):u;if(v)return clearTimeout(f),f=setTimeout(j,t),b(p)}return void 0===f&&(f=setTimeout(j,t)),u}return t=a(t)||0,n(r)&&(g=!!r.leading,d=(v="maxWait"in r)?s(a(r.maxWait)||0,t):d,h="trailing"in r?!!r.trailing:h),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=p=c=f=void 0},w.flush=function(){return void 0===f?u:x(i())},w}},85365:function(e,t,r){var n=r(73401);e.exports=function(){return n.Date.now()}},84746:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return ef},default:function(){return ep}});var n,i,a=r(98601),s=r(34142),o=r(2346),l=r(98095),c=r(93951),d=r(31438),u=r(60806),f=r(19841),p=r(89678),m=r.n(p),g=r(11941),v=r.n(g),h=r(34977),b=r(92379),y=r(62984),j=r(75172),x=r(68306),w=r(15478),k=r(11550),O=r(13490),M=r(25805),P=r(38482),I=r.n(P),E=r(88667),Z=r(36792),C=r(13350),F=r(2721),S=r(84760),R=r(42420),U=r(56032),_=r(24740);function N(e){let t=(0,j.Z)(),r=(0,R.NL)();return(0,U.D)({mutationFn:r=>{let{inviteId:n,role:i,acceptRequest:a}=r;return F.Z.patchWorkspaceInvite(e,n,{role:i,acceptRequest:a}).catch(e=>{_.m.danger(t.formatMessage(D.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function q(e){let t=(0,j.Z)(),r=(0,R.NL)();return(0,U.D)({mutationFn:r=>{let{email:n}=r;return F.Z.deleteWorkspaceInvite(e,n).catch(e=>{_.m.danger(t.formatMessage(D.deleteInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let D=(0,x.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var T=r(60211),A=r(44087),z=r(651);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let G=I()(()=>r.e(6638).then(r.bind(r,76638)).then(e=>e.DirectorySyncResourceManagedIndication),{loadableGenerated:{webpack:()=>[76638]}});function B(e){var t,r;let{workspaceId:n,filterInputValue:i}=e,{0:a,1:s}=(0,b.useState)(0),o=(0,A.Gk)(n),l=(0,A.bE)(n),c=o||l,{data:d}=(r=25*a,(0,S.a)({queryKey:["workspace",n,"invites",r,i],queryFn:async()=>await F.Z.getWorkspaceInvites(n,r,25,i)}));if(void 0===d)return(0,z.jsx)(T.bq,{});let u=d.items,f=Math.ceil((null!==(t=d.total)&&void 0!==t?t:0)/25);return a>=f&&0!==f&&s(Math.max(f-1,0)),(0,z.jsxs)("div",{children:[(0,z.jsxs)(Z.Z.Root,{fixed:!0,size:"normal",children:[(0,z.jsxs)(Z.Z.Header,{children:[(0,z.jsx)(Z.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,z.jsx)(y.Z,X({},K.email))}),(0,z.jsx)(Z.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,z.jsx)("span",{className:c?"pl-3":"",children:(0,z.jsx)(y.Z,X({},K.role))})}),c&&(0,z.jsx)(Z.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,z.jsxs)(Z.Z.Body,{children:[u.map(e=>(0,z.jsx)(H,{workspaceId:n,invite:e,isCurrentUserOwner:o,currentUserHasAdminRights:c},e.id)),0===u.length&&(0,z.jsx)(Z.Z.Row,{children:(0,z.jsx)(Z.Z.Cell,{children:(0,z.jsx)("div",{className:"text-token-text-tertiary",children:(0,z.jsx)(y.Z,X({},K.noResults))})})})]})]}),f>1&&(0,z.jsx)("div",{className:"mt-2 flex justify-center",children:(0,z.jsx)(C.t,{currentPage:a,onChangeIndex:s,length:f})})]})}function H(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:i}=e,a=(0,A.Ap)(),s=N(t),o=q(t),l=function(e){let t=(0,j.Z)(),r=(0,R.NL)();return(0,U.D)({mutationFn:r=>{let{role:n,email:i}=r;return F.Z.addWorkspaceUsers(e,[i],n,!0).then(e=>{let{account_invites:r,errored_emails:n}=e;if(n.length>0)throw Error(n[0].error);r.length>0&&_.m.success(t.formatMessage(D.resendInviteSuccess,{email:i}))}).catch(e=>{_.m.danger(t.formatMessage(D.resendInviteError,{email:i,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t),{value:c}=(0,E.sB)("3999712942");return(0,z.jsxs)(Z.Z.Row,{disabled:s.isPending||o.isPending||o.isSuccess||l.isPending,children:[(0,z.jsx)(Z.Z.Cell,{children:(0,z.jsxs)("span",{className:"flex flex-grow justify-between",children:[(0,z.jsx)("span",{children:r.email_address}),c&&r.is_scim_managed&&(0,z.jsx)(G,{})]})}),(0,z.jsx)(Z.Z.Cell,{children:n?(0,z.jsx)(T.mJ,{currentRole:r.role,onUpdateUserRole:e=>{s.mutate({inviteId:r.id,role:e})}}):a[r.role]}),i&&(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Z.Z.Cell,{children:(0,z.jsx)(L,{onDeleteUser:()=>{var e;o.mutate({email:null!==(e=r.email_address)&&void 0!==e?e:""})},onResendInvite:()=>{var e,t;l.mutate({email:null!==(e=r.email_address)&&void 0!==e?e:"",role:null!==(t=r.role)&&void 0!==t?t:""})}})})})]})}function L(e){let{onDeleteUser:t,onResendInvite:r}=e;return(0,z.jsxs)(l.Z.Root,{children:[(0,z.jsx)(l.Z.Trigger,{children:(0,z.jsx)(O.nWS,{className:"icon-sm"})}),(0,z.jsx)(l.Z.Portal,{children:(0,z.jsxs)(l.Z.Content,{children:[(0,z.jsx)(l.Z.Item,{onClick:r,children:(0,z.jsx)(y.Z,X({},K.resendInvite))}),(0,z.jsx)(l.Z.Item,{onClick:t,children:(0,z.jsx)(y.Z,X({},K.revokeInvite))})]})})]})}let K=(0,x.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function V(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:i,1:a}=(0,b.useState)(0),{data:s}=(t=25*i,(0,S.a)({queryKey:["workspace",r,"invites","requests",t,n],queryFn:async()=>await F.Z.getWorkspaceInviteRequests(r,t,25,n)})),o=(0,A.Gk)(r),l=(0,A.bE)(r),c=(0,j.Z)(),d=o||l;if(void 0===s)return(0,z.jsx)(T.bq,{});let u=s.items,f=Math.ceil(s.total/25);return i>=f&&0!==f&&a(Math.max(f-1,0)),(0,z.jsxs)("div",{children:[(0,z.jsxs)(Z.Z.Root,{fixed:!0,size:"normal",children:[(0,z.jsxs)(Z.Z.Header,{children:[(0,z.jsx)(Z.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,z.jsx)(y.Z,J({},Y.email))}),(0,z.jsx)(Z.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,z.jsx)("span",{className:d?"pl-3":"",children:(0,z.jsx)(y.Z,J({},Y.role))})}),d&&(0,z.jsx)(Z.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(Y.actions)})]}),(0,z.jsxs)(Z.Z.Body,{children:[u.map(e=>(0,z.jsx)($,{workspaceId:r,invite:e,isCurrentUserOwner:o,currentUserHasAdminRights:d},e.id)),0===u.length&&(0,z.jsx)(Z.Z.Row,{children:(0,z.jsx)(Z.Z.Cell,{children:(0,z.jsx)("div",{className:"text-token-text-tertiary",children:(0,z.jsx)(y.Z,J({},Y.noResults))})})})]})]}),f>1&&(0,z.jsx)("div",{className:"mt-2 flex justify-center",children:(0,z.jsx)(C.t,{currentPage:i,onChangeIndex:a,length:f})})]})}function $(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:i}=e,a=(0,A.Ap)(),s=N(t),o=q(t),l=(0,j.Z)();return(0,z.jsxs)(Z.Z.Row,{disabled:s.isPending||o.isPending||o.isPending,children:[(0,z.jsx)(Z.Z.Cell,{children:r.email_address}),(0,z.jsx)(Z.Z.Cell,{children:n?(0,z.jsx)(T.mJ,{currentRole:r.role,onUpdateUserRole:e=>{s.mutate({inviteId:r.id,role:e})}}):a[r.role]}),i&&(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(Z.Z.Cell,{children:(0,z.jsxs)("div",{className:"flex gap-2",children:[(0,z.jsx)(k.z,{onClick:()=>s.mutate({inviteId:r.id,acceptRequest:!0}),children:l.formatMessage(Y.accept)}),(0,z.jsx)(k.z,{color:"secondary",onClick:()=>o.mutate({email:r.email_address}),children:l.formatMessage(Y.reject)})]})})})]})}let Y=(0,x.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var ee=r(12310);function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var en=((n=en||{}).Members="members",n.Invites="invites",n.Requests="requests",n);function ei(e){let{tab:t}=e;switch(t){case en.Members:return(0,z.jsx)(y.Z,er({},ed.allMembers));case en.Invites:return(0,z.jsx)(y.Z,er({},ed.pendingInvites));case en.Requests:return(0,z.jsx)(y.Z,er({},ed.pendingRequests))}}function ea(e){let{tab:t,filterInputValue:r,workspaceId:n}=e;switch(t){case en.Members:return(0,z.jsx)(T.ZP,{workspaceId:n,filterInputValue:r});case en.Invites:return(0,z.jsx)(B,{workspaceId:n,filterInputValue:r});case en.Requests:return(0,z.jsx)(V,{workspaceId:n,filterInputValue:r})}}let es=(0,u.b)(en);function eo(e){var t;let{currentWorkspaceId:r}=e,n=(0,j.Z)(),i=(0,c.t)(),a=null!==(t=(0,T.p5)(r))&&void 0!==t?t:"?",o=(0,A.qH)(i),u=null==i?void 0:i.isTeam(),f=(0,h.useRouter)(),p="string"==typeof f.query.tab&&es(f.query.tab)?f.query.tab:en.Members,{0:g,1:x}=(0,b.useState)(""),{0:w,1:P}=(0,b.useState)("");(0,b.useEffect)(()=>{P("")},[p]);let I=(0,b.useCallback)(m()(e=>{P(e)},250),[]),E=(0,ee.uo)(),Z=!!(null!=E&&E.length);if(!i)return null;let C=i.isAdminOfAccount(),F=i.isOwnerOfAccount(),S=u||!Z?[en.Members,en.Invites]:[en.Members,en.Invites,en.Requests];return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(v(),{children:(0,z.jsx)("title",{children:n.formatMessage(ed.adminBrowserPageTitle)})}),(0,z.jsx)(s.yG,{title:n.formatMessage(ed.adminPageTitle),subtitle:(0,z.jsx)(y.Z,er({values:{totalMembers:a,planName:o}},ed.totalMembers))}),(0,z.jsxs)(s.hb,{children:[(0,z.jsxs)(ec,{children:[(0,z.jsx)("div",{className:"mb-6 flex gap-2",children:S.map(e=>(0,z.jsx)(el,{onClick:()=>{f.push(null!=e?"/admin?tab=".concat(e):"/admin")},isSelected:p===e,children:(0,z.jsx)(ei,{tab:e})},e))}),(0,z.jsxs)("div",{className:"flex gap-2",children:[(0,z.jsxs)("div",{className:"relative",children:[(0,z.jsx)(O.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,z.jsx)("input",{type:"text",value:g,onChange:e=>{x(e.target.value),I(e.target.value)},placeholder:n.formatMessage(ed.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(C||F||u)&&(0,z.jsx)(k.z,{onClick:()=>{d.vm.openModal(d.B.InviteUsersToWorkspace)},icon:O.Vz5,children:(0,z.jsx)(y.Z,er({},ed.inviteMemberButton))}),u?(0,z.jsx)(l.d,{triggerButton:(0,z.jsx)(k.z,{color:"secondary",icon:O.nWS}),children:(0,z.jsx)(l.Z.Item,{onClick:()=>{i&&d.vm.setLeaveWorkspaceData(i)},children:(0,z.jsx)(y.Z,er({},ed.leaveWorkspace))})}):null]})]}),(0,z.jsx)(ea,{workspaceId:r,tab:p,filterInputValue:w})]}),null!=i?(0,z.jsx)(M.Z,{workspace:i}):null]})}function el(e){let{children:t,isSelected:r,onClick:n}=e;return(0,z.jsx)(k.z,{color:"ghost",className:(0,f.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:n,children:t})}let ec=w.Z.div(i||(i=(0,o.Z)(["mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between"]))),ed=(0,x.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function eu(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var ef=!0;function ep(e){return(0,z.jsx)(eo,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?eu(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):eu(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}ep.getLayout=function(e){return(0,z.jsx)(s.ZP,{mobilePageTitle:"Members",children:e})}},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return a},EZ:function(){return s},Ql:function(){return i},dO:function(){return n},xC:function(){return o}});let n=10,i=4,a={duration:20,hasCloseButton:!0},s=512,o=536870912},98628:function(e,t,r){"use strict";r.d(t,{R3:function(){return x},W7:function(){return b},cT:function(){return j},lU:function(){return w},po:function(){return y}});var n=r(98601),i=r(99333),a=r(2721),s=r(92319),o=r(99976),l=r(61619),c=r(82363),d=r(68306),u=r(88815),f=r(24740),p=r(62166),m=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let h={duration:20,hasCloseButton:!0};function b(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function y(e){return new Promise((t,r)=>{let n=new FileReader,i=new Image;n.onload=()=>{i.onload=()=>t(i),i.onerror=e=>r(e),i.src=n.result},n.readAsDataURL(e)})}async function j(e,t,r,n,c,d){var p,m,g;let v=u.N.getState().resetRateLimits,b=i.EG.Initial;o.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:n.kind,uploadEntry:"local"});let y=d.usesRetrievalIndex?performance.now():void 0;try{let{file_id:s,upload_url:o}=await a.Z.createFile(t.name,t.size,n,!!v);c.onFileCreated(e,s,o),b=i.EG.FileCreated;let l=n.kind===i.Ei.Gizmo?n.gizmoId:void 0,u=null!==(p=d.shouldUpdateProgress)&&void 0!==p&&p,g=null!==(m=d.usesRetrievalIndex)&&void 0!==m&&m,j=await a.Z.uploadFileToAzureStorage(t,o,t=>{u&&c.onFileUploadProgress(e,10+80*t)});if(c.onFileUploadProgress(e,90),201!==j.status&&O(j,s,g),b=i.EG.FileUploaded,await a.Z.processFileUpload(s,{gizmoId:l}),b=i.EG.FileProcessed,d.usesRetrievalIndex){let t=await k(s,l);(null==t?void 0:t.status)===i.Xf.Skipped&&f.m.danger(r.formatMessage(P.retrievalSkippedFile,{fileName:t.name}),h),c.onFileUploaded(e,s,void 0,{fileTokenSize:t.file_size_tokens}),b=i.EG.RetrievalIndexCreated}else c.onFileUploaded(e,s,d.imageDimensions);null!=y&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-y,type:"file"})}catch(a){M(r,t.name,a);let i="NotInstanceOfError";a instanceof s.gK?i=a.name:a instanceof s.Q0?i="FatalServerError_type_".concat(null!==(g=a.type)&&void 0!==g?g:"undefined"):a instanceof Error?i=a.name:a instanceof s.vq&&(i=a.name),c.onError(e,"error",i,n,b)}}async function x(e,t,r,n,d,u,g){let b=performance.now();o.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:r.kind,contextConnector:d.contextConnector,fileSourceType:d.type});let y=i.EG.Initial;r.kind===i.Ei.Gizmo&&(r=v(v({},r),{},{kind:n.includes(t.type)?i.Ei.Multimodal:i.Ei.MyFiles}));try{let n=await a.Z.uploadConnectorAPI(e,d.contextConnector,r,t,u,d.o365DriveId);switch(n.type){case"error":throw function(e){let{status_code:t,error_code:r,error_message:n}=e;if(!t||!(t<500))return new s.Q0(n);{let e="internal_error";return r?e=r:404===t?e="file_not_found":403===t?e="permission_error":413===t&&(e="file_too_large"),new s.vq(n,e)}}(n.error);case"file":switch(p.MP.onFileCreated(e,n.file.id,"",d.contextConnector),y=i.EG.FileProcessed,r.kind){case i.Ei.MyFiles:{p.MP.onFileUploadProgress(e,90);let t=await k(n.file.file_id,u);(null==t?void 0:t.status)===i.Xf.Skipped&&f.m.danger(g.formatMessage(P.retrievalSkippedFile,{fileName:t.name}),h),p.MP.onFileUploaded(e,n.file.file_id,void 0,{fileTokenSize:t.file_size_tokens,mimeType:n.file.mime_type}),y=i.EG.RetrievalIndexCreated;break}case i.Ei.Multimodal:p.MP.onFileUploaded(e,n.file.file_id,{width:512,height:512},{mimeType:n.file.mime_type});break;case i.Ei.AceUpload:p.MP.onFileUploaded(e,n.file.file_id,void 0,{mimeType:n.file.mime_type});break;case i.Ei.DalleAgent:case i.Ei.Gizmo:case i.Ei.ProfilePicture:throw new s.vq("Use case not supported by cloud doc: ".concat(r.kind))}break;case"folder":throw new s.vq("Folder type not supported")}a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-b,type:d.contextConnector})}catch(n){c.U.addError(Error("Failed to upload connected file by ".concat(d.contextConnector),{cause:n})),M(g,(0,m.Ad)(t.name,null==d?void 0:d.syntheticExtension),n);let r="NotInstanceOfError";if(n instanceof s.Q0){var j;r="FatalServerError_type_".concat(null!==(j=n.type)&&void 0!==j?j:"undefined")}else(n instanceof s.gK||n instanceof Error||n instanceof s.vq)&&(r=n.name);p.MP.onError(e,"error",r,{kind:i.Ei.MyFiles},y)}}async function w(e,t,r,n,i){let{width:a,height:s}=await y(t);return j(e,t,r,{kind:n},i,{imageDimensions:{width:a,height:s}})}async function k(e,t){let r=Date.now()+6e4,n=e=>new Promise(t=>setTimeout(t,e)),o=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===i.Xf.Success||r.status===i.Xf.Skipped)return r;if(r.status===i.Xf.Failed)throw new s.vq("Context extraction failed",r.error_code);o++,await n(Math.min(1e3,100*o))}throw new s.vq("Retrieval indexing timed out")}async function O(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new s.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function M(e,t,r){let n=(0,m.kr)(e,"default_upload_error",{fileName:t});r instanceof s.vq&&null!=r.code&&(n=(0,m.kr)(e,r.code)),f.m.danger(n,h)}let P=(0,d.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},62166:function(e,t,r){"use strict";r.d(t,{Dw:function(){return j},HR:function(){return y},MP:function(){return x},gF:function(){return b}});var n=r(98601),i=r(99333),a=r(99976),s=r(61619),o=r(82363),l=r(68306),c=r(68810),d=r(24740),u=r(84082),f=r(93866),p=r(98628),m=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let h={files:[],connectorFileData:{}},b=(0,c.Ue)(()=>h),y={hasUploadInProgress:e=>{let{files:t}=e;return t.some(e=>e.status===f.XX.Uploading)},getReadyFiles:e=>{let{files:t}=e;return t.filter(e=>e.status===f.XX.Ready)}},j={reset:()=>{b.setState(h)},uploadFile:async function(e,t,r,n,l){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=arguments.length>6?arguments[6]:void 0,v=arguments.length>7?arguments[7]:void 0,{gizmoId:h}=c,y=b.getState().files,j=(0,m.xs)(r,t.name,t.type,null==v?void 0:v.contextConnector,g),k={tempId:e,gizmoId:c.gizmoId,status:f.XX.Uploading,file:t,progress:1,fileId:null,cdnUrl:null,contextConnectorInfo:v,contextConnector:null==v?void 0:v.contextConnector};if(y.length===u.dO)a.A.logEvent(s.M.uploadedMaxFilesError),d.m.danger(l.formatMessage(w.maxUploadsAtATime,{maxUploads:u.dO,fileName:t.name}),u.$e);else if(y.some(t=>t.tempId===e))a.A.logEvent(s.M.uploadedDuplicateFileError),d.m.danger(l.formatMessage(w.duplicateFileAttached,{fileName:t.name.length>20?t.name.slice(0,19)+"…":t.name}),u.$e);else{let r;b.setState(e=>{let{files:t}=e;return{files:[...t,k]}});let a={};if(n.includes(t.type)){if(r={kind:i.Ei.Multimodal},!v){let{width:e,height:r}=await (0,p.po)(t);if(e>2048||r>2048)try{let n=await (0,m.Tu)(t,2048),i=await (0,p.po)(n);e=i.width,r=i.height,t=n}catch(e){o.U.addError(Error("Error resizing image:",{cause:e}))}a.imageDimensions={width:e,height:r}}}else switch(j){case f.AJ.Multimodal:throw Error("Multimodal file upload not supported mime type, ".concat(t.type,"\nSupported mime types: ")+n.join(", "));case f.AJ.Interpreter:r={kind:i.Ei.AceUpload};break;case f.AJ.Retrieval:r={kind:i.Ei.MyFiles},a.usesRetrievalIndex=!0;break;case f.AJ.ProfilePicture:throw Error("cannot upload profile picture via uploadFile");case f.AJ.ContextConnector:case f.AJ.None:return}null!=h&&(r={kind:i.Ei.Gizmo,gizmoId:h}),c.skipUpload||(v?await (0,p.R3)(e,t,r,n,v,c.gizmoId,l):await (0,p.cT)(e,t,l,r,x,a))}},createFileCompleted:(e,t,r,n)=>{let i=b.getState().files,a=i.findIndex(t=>t.tempId===e),s=i[a];if(a>=0&&s.status===f.XX.Uploading){let e=[...i];e.splice(a,1,v(v({},s),{},{progress:10,fileId:t,cdnUrl:r,contextConnector:n})),b.setState({files:e})}},updateProgress:(e,t)=>{let r=b.getState().files,n=r.findIndex(t=>t.tempId===e),i=r[n];if(n>=0&&i.status===f.XX.Uploading){let e=[...r];e.splice(n,1,v(v({},i),{},{progress:t})),b.setState({files:e})}},uploadCompleted:(e,t,r,n,i)=>{let o=b.getState().files,l=o.findIndex(t=>t.tempId===e);if(l>=0&&o[l].status===f.XX.Uploading&&null!=o[l].fileId){var c,d,u;let t=o[l],p=[...o],g=v(v({},t),{},{tempId:e,status:f.XX.Ready,progress:100,fileSpec:v(v({name:t.file.name,id:t.fileId,size:t.file.size,contextConnectorInfo:t.contextConnectorInfo,mimeType:null!==(c=null!==(d=null==n?void 0:n.mimeType)&&void 0!==d?d:t.file.type)&&void 0!==c?c:(0,m.s1)(t.file.name)},r||{}),n||{})});p.splice(l,1,g);let h=v({},b.getState().connectorFileData);i&&(h[null==i?void 0:i.file_id]=i),b.setState({files:p,connectorFileData:h}),a.A.logEvent(s.M.uploadFileCompleted,{status:t.status,fileId:t.fileId,contextConnector:null!==(u=t.contextConnector)&&void 0!==u?u:"local"})}},remove:(e,t,r,n,i)=>{let o=b.getState().files,l=o.findIndex(t=>t.tempId===e);if(l>=0){let e=o[l];"error"===t?a.A.logEvent(s.M.uploadFileError,{status:e.status,fileId:e.fileId,client:"web",errorClassName:null!=r?r:"undefined",useCaseType:n,uploadStatus:null!=i?i:"undefined",contextConnector:e.contextConnector}):a.A.logEvent(s.M.removeFile,{status:e.status,fileId:e.fileId});let c=[...o];c.splice(l,1),b.setState({files:c})}}},x={onFileCreated:j.createFileCompleted,onFileUploadProgress:j.updateProgress,onFileUploaded:j.uploadCompleted,onError:j.remove},w=(0,l.vU)({maxUploadsAtATime:{id:"useFilePickerState.maxUploadsAtATime",defaultMessage:"Unable to upload {fileName}. Max {maxUploads} uploads at a time"},duplicateFileAttached:{id:"useFilePickerState.duplicateFileAttached",defaultMessage:"Unable to upload {fileName} because an identical file has already been attached to this message."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return i},N:function(){return a}});var n=r(68810);let i={label:"Auto",value:""},a=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:i,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},60806:function(e,t,r){"use strict";function n(e){let t=Object.values(e);return e=>t.includes(e)}r.d(t,{b:function(){return n}})},37300:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(84746)}])}},function(e){e.O(0,[2205,4198,6636,4089,9504,4384,7003,8500,1612,3183,2349,5162,7437,7035,9725,6803,5385,9695,9890,6384,2888,9774,179],function(){return e(e.s=37300)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-d3cad94e0593df12.js.map