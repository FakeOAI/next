(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6964],{89678:function(e,t,r){var n=r(6627),a=r(85365),i=r(67948),s=Math.max,o=Math.min;e.exports=function(e,t,r){var l,c,u,d,f,p,m=0,g=!1,v=!1,h=!0;if("function"!=typeof e)throw TypeError("Expected a function");function x(t){var r=l,n=c;return l=c=void 0,m=t,d=e.apply(n,r)}function y(e){var r=e-p,n=e-m;return void 0===p||r>=t||r<0||v&&n>=u}function b(){var e,r,n,i=a();if(y(i))return j(i);f=setTimeout(b,(e=i-p,r=i-m,n=t-e,v?o(n,u-r):n))}function j(e){return(f=void 0,h&&l)?x(e):(l=c=void 0,d)}function w(){var e,r=a(),n=y(r);if(l=arguments,c=this,p=r,n){if(void 0===f)return m=e=p,f=setTimeout(b,t),g?x(e):d;if(v)return clearTimeout(f),f=setTimeout(b,t),x(p)}return void 0===f&&(f=setTimeout(b,t)),d}return t=i(t)||0,n(r)&&(g=!!r.leading,u=(v="maxWait"in r)?s(i(r.maxWait)||0,t):u,h="trailing"in r?!!r.trailing:h),w.cancel=function(){void 0!==f&&clearTimeout(f),m=0,l=p=c=f=void 0},w.flush=function(){return void 0===f?d:j(a())},w}},85365:function(e,t,r){var n=r(73401);e.exports=function(){return n.Date.now()}},84746:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return ef},default:function(){return ep}});var n,a=r(98601),i=r(68986),s=r(98095),o=r(93951),l=r(31438),c=r(60806),u=r(19841),d=r(89678),f=r.n(d),p=r(11941),m=r.n(p),g=r(34977),v=r(92379),h=r(62984),x=r(75172),y=r(68306),b=r(15478),j=r(11550),w=r(28146),M=r(25805),k=r(89794),I=r(30853),P=r(88667),_=r(38482),O=r.n(_),E=r(36792),Z=r(13350),C=r(2721),U=r(84760),F=r(42420),R=r(56032),N=r(24740);function T(e){let t=(0,x.Z)(),r=(0,F.NL)();return(0,R.D)({mutationFn:r=>{let{inviteId:n,role:a,acceptRequest:i}=r;return C.Z.patchWorkspaceInvite(e,n,{role:a,acceptRequest:i}).catch(e=>{N.m.danger(t.formatMessage(q.updateInviteError,{error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]}),r.invalidateQueries({queryKey:["workspace",e]})}})}function S(e){let t=(0,x.Z)(),r=(0,F.NL)();return(0,R.D)({mutationFn:r=>{let{email:n}=r;return C.Z.deleteWorkspaceInvite(e,n).catch(e=>{N.m.danger(t.formatMessage(q.deleteInviteError,{email:n,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}let q=(0,y.vU)({updateInviteError:{id:"WorkspaceInvites.updateInviteError",defaultMessage:"Unable to update invite from workspace: {error}"},deleteInviteError:{id:"WorkspaceInvites.deleteInviteError",defaultMessage:"Unable to remove user ({email}) from workspace: {error}"},resendInviteSuccess:{id:"WorkspaceInvites.resendInviteSuccess",defaultMessage:"Sent a new invite to {email}"},resendInviteError:{id:"WorkspaceInvites.resendInviteError",defaultMessage:"Unable to resend invite to ({email}) from workspace: {error}"}});var D=r(60211),L=r(44087),A=r(651);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let z=O()(()=>r.e(6638).then(r.bind(r,76638)).then(e=>e.DirectorySyncResourceManagedIndication),{loadableGenerated:{webpack:()=>[76638]}});function G(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:a,1:i}=(0,v.useState)(0),s=(0,L.Gk)(r),o=(0,L.bE)(r),l=s||o,{data:c}=(t=25*a,(0,U.a)({queryKey:["workspace",r,"invites",t,n],queryFn:async()=>await C.Z.getWorkspaceInvites(r,t,25,n)}));if(void 0===c)return(0,A.jsx)(D.bq,{});let u=c.items,d=Math.ceil((c.total??0)/25);return a>=d&&0!==d&&i(Math.max(d-1,0)),(0,A.jsxs)("div",{children:[(0,A.jsxs)(E.Z.Root,{fixed:!0,size:"normal",children:[(0,A.jsxs)(E.Z.Header,{children:[(0,A.jsx)(E.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,A.jsx)(h.Z,W({},K.email))}),(0,A.jsx)(E.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,A.jsx)("span",{className:l?"pl-3":"",children:(0,A.jsx)(h.Z,W({},K.role))})}),l&&(0,A.jsx)(E.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,A.jsxs)(E.Z.Body,{children:[u.map(e=>(0,A.jsx)(H,{workspaceId:r,invite:e,isCurrentUserOwner:s,currentUserHasAdminRights:l},e.id)),0===u.length&&(0,A.jsx)(E.Z.Row,{children:(0,A.jsx)(E.Z.Cell,{children:(0,A.jsx)("div",{className:"text-token-text-tertiary",children:(0,A.jsx)(h.Z,W({},K.noResults))})})})]})]}),d>1&&(0,A.jsx)("div",{className:"mt-2 flex justify-center",children:(0,A.jsx)(Z.t,{currentPage:a,onChangeIndex:i,length:d})})]})}function H(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:a}=e,i=(0,L.Ap)(),s=T(t),o=S(t),l=function(e){let t=(0,x.Z)(),r=(0,F.NL)();return(0,R.D)({mutationFn:r=>{let{role:n,email:a}=r;return C.Z.addWorkspaceUsers(e,[a],n,!0).then(e=>{let{account_invites:r,errored_emails:n}=e;if(n.length>0)throw Error(n[0].error);r.length>0&&N.m.success(t.formatMessage(q.resendInviteSuccess,{email:a}))}).catch(e=>{N.m.danger(t.formatMessage(q.resendInviteError,{email:a,error:e.message}))})},onSuccess:()=>{r.invalidateQueries({queryKey:["workspace",e,"invites"]}),r.invalidateQueries({queryKey:["workspace",e,"invites","requests"]})}})}(t),{value:c}=(0,P.sB)("3999712942");return(0,A.jsxs)(E.Z.Row,{disabled:s.isPending||o.isPending||o.isSuccess||l.isPending,children:[(0,A.jsx)(E.Z.Cell,{children:(0,A.jsxs)("span",{className:"flex flex-grow justify-between",children:[(0,A.jsx)("span",{children:r.email_address}),c&&r.is_scim_managed&&(0,A.jsx)(z,{})]})}),(0,A.jsx)(E.Z.Cell,{children:n?(0,A.jsx)(D.mJ,{currentRole:r.role,onUpdateUserRole:e=>{s.mutate({inviteId:r.id,role:e})}}):i[r.role]}),a&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(E.Z.Cell,{children:(0,A.jsx)(J,{onDeleteUser:()=>{o.mutate({email:r.email_address??""})},onResendInvite:()=>{l.mutate({email:r.email_address??"",role:r.role??""})},disabled:r.is_scim_managed})})})]})}function J(e){let{onDeleteUser:t,onResendInvite:r,disabled:n}=e,a=(0,x.Z)();return(0,A.jsx)(A.Fragment,{children:n?(0,A.jsx)(s.Z.Root,{children:(0,A.jsx)(s.Z.Trigger,{disabled:!0,children:(0,A.jsx)(I.u,{sideOffset:0,label:a.formatMessage(k.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,A.jsx)(w.nWS,{className:"icon-sm"})})})}):(0,A.jsxs)(s.Z.Root,{children:[(0,A.jsx)(s.Z.Trigger,{children:(0,A.jsx)(w.nWS,{className:"icon-sm"})}),(0,A.jsx)(s.Z.Portal,{children:(0,A.jsxs)(s.Z.Content,{children:[(0,A.jsx)(s.Z.Item,{onClick:r,children:(0,A.jsx)(h.Z,W({},K.resendInvite))}),(0,A.jsx)(s.Z.Item,{onClick:t,children:(0,A.jsx)(h.Z,W({},K.revokeInvite))})]})})]})})}let K=(0,y.vU)({email:{id:"InviteManager.email",defaultMessage:"Email"},role:{id:"InviteManager.role",defaultMessage:"Role"},resendInvite:{id:"InviteManager.resendInvite",defaultMessage:"Resend invite"},revokeInvite:{id:"InviteManager.revokeInvite",defaultMessage:"Revoke invite"},noResults:{id:"InviteManager.noResults",defaultMessage:"No results"}});function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function X(e){var t;let{workspaceId:r,filterInputValue:n}=e,{0:a,1:i}=(0,v.useState)(0),{data:s}=(t=25*a,(0,U.a)({queryKey:["workspace",r,"invites","requests",t,n],queryFn:async()=>await C.Z.getWorkspaceInviteRequests(r,t,25,n)})),o=(0,L.Gk)(r),l=(0,L.bE)(r),c=(0,x.Z)(),u=o||l;if(void 0===s)return(0,A.jsx)(D.bq,{});let d=s.items,f=Math.ceil(s.total/25);return a>=f&&0!==f&&i(Math.max(f-1,0)),(0,A.jsxs)("div",{children:[(0,A.jsxs)(E.Z.Root,{fixed:!0,size:"normal",children:[(0,A.jsxs)(E.Z.Header,{children:[(0,A.jsx)(E.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,A.jsx)(h.Z,V({},Y.email))}),(0,A.jsx)(E.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,A.jsx)("span",{className:u?"pl-3":"",children:(0,A.jsx)(h.Z,V({},Y.role))})}),u&&(0,A.jsx)(E.Z.HeaderCell,{className:"w-40 bg-token-main-surface-primary",children:c.formatMessage(Y.actions)})]}),(0,A.jsxs)(E.Z.Body,{children:[d.map(e=>(0,A.jsx)($,{workspaceId:r,invite:e,isCurrentUserOwner:o,currentUserHasAdminRights:u},e.id)),0===d.length&&(0,A.jsx)(E.Z.Row,{children:(0,A.jsx)(E.Z.Cell,{children:(0,A.jsx)("div",{className:"text-token-text-tertiary",children:(0,A.jsx)(h.Z,V({},Y.noResults))})})})]})]}),f>1&&(0,A.jsx)("div",{className:"mt-2 flex justify-center",children:(0,A.jsx)(Z.t,{currentPage:a,onChangeIndex:i,length:f})})]})}function $(e){let{workspaceId:t,invite:r,isCurrentUserOwner:n,currentUserHasAdminRights:a}=e,i=(0,L.Ap)(),s=T(t),o=S(t),l=(0,x.Z)();return(0,A.jsxs)(E.Z.Row,{disabled:s.isPending||o.isPending||o.isPending,children:[(0,A.jsx)(E.Z.Cell,{children:r.email_address}),(0,A.jsx)(E.Z.Cell,{children:n?(0,A.jsx)(D.mJ,{currentRole:r.role,onUpdateUserRole:e=>{s.mutate({inviteId:r.id,role:e})}}):i[r.role]}),a&&(0,A.jsx)(A.Fragment,{children:(0,A.jsx)(E.Z.Cell,{children:(0,A.jsxs)("div",{className:"flex gap-2",children:[(0,A.jsx)(j.z,{onClick:()=>s.mutate({inviteId:r.id,acceptRequest:!0}),children:l.formatMessage(Y.accept)}),(0,A.jsx)(j.z,{color:"secondary",onClick:()=>o.mutate({email:r.email_address}),children:l.formatMessage(Y.reject)})]})})})]})}let Y=(0,y.vU)({email:{id:"RequestInviteManager.email",defaultMessage:"Email"},role:{id:"RequestInviteManager.role",defaultMessage:"Role"},actions:{id:"RequestInviteManager.actions",defaultMessage:"Actions"},accept:{id:"RequestInviteManager.accept",defaultMessage:"Accept"},reject:{id:"RequestInviteManager.reject",defaultMessage:"Reject"},noResults:{id:"RequestInviteManager.noResults",defaultMessage:"No results"}});var ee=r(12310);function et(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function er(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?et(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):et(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var en=((n=en||{}).Members="members",n.Invites="invites",n.Requests="requests",n);function ea(e){let{tab:t}=e;switch(t){case en.Members:return(0,A.jsx)(h.Z,er({},eu.allMembers));case en.Invites:return(0,A.jsx)(h.Z,er({},eu.pendingInvites));case en.Requests:return(0,A.jsx)(h.Z,er({},eu.pendingRequests))}}function ei(e){let{tab:t,filterInputValue:r,workspaceId:n}=e;switch(t){case en.Members:return(0,A.jsx)(D.ZP,{workspaceId:n,filterInputValue:r});case en.Invites:return(0,A.jsx)(G,{workspaceId:n,filterInputValue:r});case en.Requests:return(0,A.jsx)(X,{workspaceId:n,filterInputValue:r})}}let es=(0,c.b)(en);function eo(e){let{currentWorkspaceId:t}=e,r=(0,x.Z)(),n=(0,o.t)(),a=(0,D.p5)(t)??"?",c=(0,L.qH)(n),u=n?.isTeam(),d=(0,g.useRouter)(),p="string"==typeof d.query.tab&&es(d.query.tab)?d.query.tab:en.Members,{0:y,1:b}=(0,v.useState)(""),{0:k,1:I}=(0,v.useState)("");(0,v.useEffect)(()=>{I("")},[p]);let P=(0,v.useCallback)(f()(e=>{I(e)},250),[]),_=(0,ee.uo)(),O=!!_?.length;if(!n)return null;let E=n.isAdminOfAccount(),Z=n.isOwnerOfAccount(),C=u||!O?[en.Members,en.Invites]:[en.Members,en.Invites,en.Requests];return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(m(),{children:(0,A.jsx)("title",{children:r.formatMessage(eu.adminBrowserPageTitle)})}),(0,A.jsx)(i.yG,{title:r.formatMessage(eu.adminPageTitle),subtitle:(0,A.jsx)(h.Z,er({values:{totalMembers:a,planName:c}},eu.totalMembers))}),(0,A.jsxs)(i.hb,{children:[(0,A.jsxs)(ec,{children:[(0,A.jsx)("div",{className:"mb-6 flex gap-2",children:C.map(e=>(0,A.jsx)(el,{onClick:()=>{d.push(null!=e?`/admin?tab=${e}`:"/admin")},isSelected:p===e,children:(0,A.jsx)(ea,{tab:e})},e))}),(0,A.jsxs)("div",{className:"flex gap-2",children:[(0,A.jsxs)("div",{className:"relative",children:[(0,A.jsx)(w.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,A.jsx)("input",{type:"text",value:y,onChange:e=>{b(e.target.value),P(e.target.value)},placeholder:r.formatMessage(eu.search),className:"w-48 rounded-lg border border-token-border-light bg-token-main-surface-primary pl-8 placeholder:text-token-text-tertiary"})]}),(E||Z||u)&&(0,A.jsx)(j.z,{onClick:()=>{l.vm.openModal(l.B.InviteUsersToWorkspace)},icon:w.Vz5,children:(0,A.jsx)(h.Z,er({},eu.inviteMemberButton))}),u?(0,A.jsx)(s.d,{triggerButton:(0,A.jsx)(j.z,{color:"secondary",icon:w.nWS}),children:(0,A.jsx)(s.Z.Item,{onClick:()=>{n&&l.vm.setLeaveWorkspaceData(n)},children:(0,A.jsx)(h.Z,er({},eu.leaveWorkspace))})}):null]})]}),(0,A.jsx)(ei,{workspaceId:t,tab:p,filterInputValue:k})]}),null!=n?(0,A.jsx)(M.Z,{workspace:n}):null]})}function el(e){let{children:t,isSelected:r,onClick:n}=e;return(0,A.jsx)(j.z,{color:"ghost",className:(0,u.default)(r?"bg-token-main-surface-tertiary":"hover:bg-token-main-surface-tertiary"),onClick:n,children:t})}let ec=b.Z.div`mb-4 py-6 flex flex-col gap-4 lg:flex-row md:items-start lg:justify-between`,eu=(0,y.vU)({adminBrowserPageTitle:{id:"adminPage.adminBrowserPageTitle",defaultMessage:"ChatGPT - Member admin"},adminPageTitle:{id:"adminPage.adminPageTitle.0",defaultMessage:"Members"},workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},totalMembers:{id:"adminPage.totalMembers",defaultMessage:"{planName} \xb7 {totalMembers} {totalMembers, plural, one {member} other {members}}"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},allMembers:{id:"adminPage.allMembers",defaultMessage:"All members"},pendingInvites:{id:"adminPage.pendingInvites",defaultMessage:"Pending invites"},pendingRequests:{id:"adminPage.pendingRequests",defaultMessage:"Pending requests"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},inviteMemberButton:{id:"adminPage.inviteMemberButton",defaultMessage:"Invite member"},leaveWorkspace:{id:"adminPage.leaveWorkspace",defaultMessage:"Leave workspace"},search:{id:"adminPage.search",defaultMessage:"Search"}});function ed(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var ef=!0;function ep(e){return(0,A.jsx)(eo,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ed(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ed(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}ep.getLayout=function(e){return(0,A.jsx)(i.ZP,{mobilePageTitle:"Members",children:e})}},42606:function(e,t,r){"use strict";r.d(t,{I:function(){return i},o:function(){return s}});let n=["xlsx","pptx","docx"],a={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function i(e){return e?a[e.split(";")[0]]??null:null}function s(e){return e&&n.includes(e)?e:null}},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return i},EZ:function(){return s},Ql:function(){return a},dO:function(){return n},xC:function(){return o}});let n=10,a=4,i={duration:20,hasCloseButton:!0},s=512,o=536870912},93866:function(e,t,r){"use strict";r.d(t,{AJ:function(){return s},XX:function(){return l},xA:function(){return o}});var n,a,i=r(42606);let s=((n={})[n.None=0]="None",n[n.Multimodal=1]="Multimodal",n[n.Interpreter=2]="Interpreter",n[n.Retrieval=3]="Retrieval",n[n.ContextConnector=4]="ContextConnector",n[n.ProfilePicture=5]="ProfilePicture",n);function o(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,i.o)(e.synthetic_extension),type:e.type}}let l=((a={}).Uploading="uploading",a.Ready="ready",a)},98628:function(e,t,r){"use strict";r.d(t,{E1:function(){return h},Sj:function(){return y},W7:function(){return p},cT:function(){return g},lU:function(){return v},po:function(){return m},sY:function(){return b}});var n=r(99333),a=r(2721),i=r(92319),s=r(99976),o=r(61619),l=r(68306),c=r(88815),u=r(24740),d=r(66114);let f={duration:20,hasCloseButton:!0};function p(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function m(e){return new Promise((t,r)=>{let n=new FileReader,a=new Image;n.onload=()=>{a.onload=()=>t(a),a.onerror=e=>r(e),a.src=n.result},n.readAsDataURL(e)})}async function g(e,t,r,l,d,p){let m=c.N.getState().resetRateLimits,g=n.EG.Initial;s.A.logEvent(o.M.uploadFileInitiated,{client:"web",useCase:l.kind,uploadEntry:"local"});let v=p.usesRetrievalIndex?performance.now():void 0;try{let{file_id:i,upload_url:s}=await a.Z.createFile(t.name,t.size,l,!!m);d.onFileCreated(e,i,s),g=n.EG.FileCreated;let o=l.kind===n.Ei.Gizmo?l.gizmoId:void 0,c=p.shouldUpdateProgress??!1,y=p.usesRetrievalIndex??!1,j=await a.Z.uploadFileToAzureStorage(t,s,t=>{c&&d.onFileUploadProgress(e,10+80*t)});if(d.onFileUploadProgress(e,90),201!==j.status&&x(j,i,y),g=n.EG.FileUploaded,await a.Z.processFileUpload(i,{gizmoId:o}),g=n.EG.FileProcessed,p.usesRetrievalIndex){let t=await h(i,o);t?.status===n.Xf.Skipped&&u.m.danger(r.formatMessage(b.retrievalSkippedFile,{fileName:t.name}),f),d.onFileUploaded(e,i,void 0,{fileTokenSize:t.file_size_tokens}),g=n.EG.RetrievalIndexCreated}else d.onFileUploaded(e,i,p.imageDimensions);null!=v&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-v,type:"file"})}catch(a){y(r,t.name,a);let n="NotInstanceOfError";a instanceof i.gK?n=a.name:a instanceof i.Q0?n=`FatalServerError_type_${a.type??"undefined"}`:a instanceof Error?n=a.name:a instanceof i.vq&&(n=a.name),d.onError(e,"error",n,l,g)}}async function v(e,t,r,n,a){let{width:i,height:s}=await m(t);return g(e,t,r,{kind:n},a,{imageDimensions:{width:i,height:s}})}async function h(e,t){let r=Date.now()+6e4,s=e=>new Promise(t=>setTimeout(t,e)),o=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===n.Xf.Success||r.status===n.Xf.Skipped)return r;if(r.status===n.Xf.Failed)throw new i.vq("Context extraction failed",r.error_code);o++,await s(Math.min(1e3,100*o))}throw new i.vq("Retrieval indexing timed out")}async function x(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new i.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function y(e,t,r){let n=(0,d.kr)(e,"default_upload_error",{fileName:t});r instanceof i.vq&&null!=r.code&&(n=(0,d.kr)(e,r.code)),u.m.danger(n,f)}let b=(0,l.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},66114:function(e,t,r){"use strict";r.d(t,{$H:function(){return v},$p:function(){return E},Ad:function(){return T},B:function(){return N},BV:function(){return U},CO:function(){return Z},Iy:function(){return m},KL:function(){return _},L8:function(){return g},O6:function(){return y},Tu:function(){return F},VF:function(){return x},Vm:function(){return C},WI:function(){return R},YN:function(){return j},Z8:function(){return O},Zp:function(){return I},_0:function(){return k},kr:function(){return h},p0:function(){return P},s1:function(){return w},ww:function(){return b},xs:function(){return M}});var n=r(99333),a=r(16757),i=r(2721),s=r(86025),o=r(58695),l=r(82363),c=r(92379),u=r(75172),d=r(68306),f=r(24740),p=r(93866);function m(e){return e.replace("file-service://","")}function g(e){return"file-service://"+e}function v(e){return e.startsWith("file-service://")}function h(e,t,r){switch(t){case"file_zero_bytes":return e.formatMessage(S.fileZeroBytes,r);case"file_too_large":return e.formatMessage(S.fileTooLarge,r);case"over_user_quota":return e.formatMessage(S.overUserQuota,r);case"file_not_found":case"file_expired":return e.formatMessage(S.fileNotFound,r);case"file_timed_out":return e.formatMessage(S.fileTimedOut,r);case"ace_pod_expired":return e.formatMessage(S.codeInterpreterSessionTimeout,r);case"permission_error":return e.formatMessage(S.permissionError,r);case"default_upload_error":case"file_rejected":return e.formatMessage(S.defaultCreateEntryError,r);case"default_download_link_error":return e.formatMessage(S.defaultDownloadLinkError,r);case"file_empty":return e.formatMessage(S.fileEmpty,r);case"too_many_tokens":return e.formatMessage(S.fileTooManyTokens,r);case"file_encrypted":return e.formatMessage(S.fileEncrypted,r);case"file_corrupted":return e.formatMessage(S.fileCorrupted,r);case"failed_upload_to_blobstore":return e.formatMessage(S.failedUploadToBlobStore,r);default:return e.formatMessage(S.unknownError)}}function x(){let e=(0,u.Z)();return(0,c.useCallback)((t,r)=>h(e,t,r),[e])}function y(){let{session:e}=(0,o.kP)(),{isUnauthenticated:t}=(0,s.u)(),r=(0,u.Z)();return async(a,s)=>{if(!t&&null==e)return f.m.danger(r.formatMessage(S.fileDownloadFailed)),!1;try{let e=await i.Z.getFileDownloadLink(a,void 0,t);if(e.status!==n.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let r=e.download_url,o=document.createElement("a");o.href=r,o.download=s,o.click(),window.open(r,"_blank")}catch(e){return f.m.danger(r.formatMessage(S.fileDownloadFailed)),!1}return!0}}function b(e,t){return t?.kind===a.OL.GizmoInteraction||t?.kind===a.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function j(e,t){let r=b(e,t);return r?.attachments?.type===n.Cd.CodeInterpreter?p.AJ.Interpreter:r?.attachments?.type===n.Cd.Multimodal?p.AJ.Multimodal:r?.attachments?.type===n.Cd.Retrieval?p.AJ.Retrieval:r?.attachments?.type===n.Cd.ContextConnector?p.AJ.ContextConnector:p.AJ.None}function w(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function M(e,t,r,n,a){if(null==a)return e;let i=w(t);i&&(r=i),n&&(r=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(r));let{accepted_mime_types:s,can_accept_all_mime_types:o}=a;return null!=s&&0!==s.length&&o?s.includes(r)?e:p.AJ.Interpreter:e}function k(e,t,r){let a=""!==t?t:w(r),i=e?.product_features?.attachments;return null==i?void 0:i.accepted_mime_types?.includes(a)?i.type:i.image_mime_types?.includes(a)?n.Cd.Multimodal:n.Cd.CodeInterpreter}function I(e,t){let r=b(e,t);return r?.attachments?.can_accept_all_mime_types?void 0:r?.attachments?.accepted_mime_types}function P(e,t){let{attachments:r}=b(e,t)??{};return r?.image_mime_types?r.image_mime_types:r?.type==="multimodal"?r.accepted_mime_types??_:[]}let _=["image/png","image/jpeg","image/gif","image/webp"];function O(e){return(0,c.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,r)=>(r in t?e[r]=t[r]:r.includes("/")&&(e[r]=[`.${r.split("/")[1]}`]),e),{})}},[e])}function E(e){return e.split(".").pop()?.toLowerCase()}function Z(e){let t=E(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function C(e){let t=E(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function U(e){let t=E(e);return null!=t&&["xls","xlsx"].includes(t)}function F(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((n,a)=>{let i=new FileReader;i.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),a(Error("Failed to read the file."))},i.onload=i=>{let s=new Image;s.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),a(Error("Failed to load the image."))},s.onload=()=>{let i=document.createElement("canvas"),o,c=0,u=0;switch(r){case"fill":case"square":o=t/Math.min(s.width,s.height);break;case"fit":o=t/Math.max(s.width,s.height)}let d=s.width*o,f=s.height*o;"square"===r?(i.width=t,i.height=t,c=(t-d)/2,u=(t-f)/2):(i.width=d,i.height=f);let p=i.getContext("2d");if(null==p){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),a(Error("Failed to create canvas context."));return}p.drawImage(s,c,u,d,f);let m=e.type||"image/png";i.toBlob(t=>{t?n(new File([t],e.name,{type:m})):(l.U.addError("Blob creation failed. Blob is null."),a(Error("Failed to create blob from image data.")))},m)},null==i.target?(l.U.addError("Event target is null. Failed to load image."),a("Failed to load image.")):s.src=i.target.result},i.readAsDataURL(e)})}function R(e,t){return F(e,t,"square")}function N(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function T(e,t){return t?e.slice(0,-t.length-1):e}let S=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return a},N:function(){return i}});var n=r(68810);let a={label:"Auto",value:""},i=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:a,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},60806:function(e,t,r){"use strict";function n(e){let t=Object.values(e);return e=>t.includes(e)}r.d(t,{b:function(){return n}})},37300:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return r(84746)}])}},function(e){e.O(0,[9237,2342,4198,4089,1133,3718,3088,5696,1612,2349,2745,5162,9113,9725,6803,5011,3666,3127,3662,2888,9774,179],function(){return e(e.s=37300)}),_N_E=e.O()}]);
//# sourceMappingURL=admin-8275f32912be1a5f.js.map