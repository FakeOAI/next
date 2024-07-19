"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2913],{42913:function(e,t,r){r.r(t),r.d(t,{DirectorySyncSection:function(){return K}});var n=r(97410),c=r(53595),o=r(35998),s=r(62984);let a=(0,r(68306).vU)({directorySyncTitle:{id:"workspaceIdentity.directorySyncTitle",defaultMessage:"Directory Sync via SCIM"},directorySyncInfoText:{id:"workspaceIdentity.directorySyncInfoText",defaultMessage:"Sync this workspace with your identity provider to automatically manage user accounts and invites."},launchDirectorySyncSetupPortalText:{id:"workspaceIdentity.launchDirectorySyncPortalText",defaultMessage:"Directory Sync Setup"},launchDirectorySyncManagementPortalText:{id:"workspaceIdentity.launchDirectorySyncManagementPortalText",defaultMessage:"Manage Directory Connection"},directorySyncProvider:{id:"workspaceIdentity.directorySyncProvider",defaultMessage:"Provider: {provider}"},directorySyncProviderStatus:{id:"workspaceIdentity.directorySyncProviderStatus",defaultMessage:"Status: {status}"},directorySyncUserSyncStatus:{id:"workspaceIdentity.directorySyncUserSyncStatus",defaultMessage:"{numUsersSynced} of {numUsersInDirectory} Users"},failedDirectorySyncEventsTableHeader:{id:"workspaceIdentity.FailedDirectorySyncEventsTableHeader",defaultMessage:"Failed Directory Sync Events"},directorySyncEventsTableFailureReasonColumnHeader:{id:"workspaceIdentity.rectorySyncEventsTableFailureReasonColumnHeader",defaultMessage:"Failure Reason"},retryDirectorySyncEventButton:{id:"workspaceIdentity.retryDirectorySyncEventButton",defaultMessage:"Retry"},discardDirectorySyncEventButton:{id:"workspaceIdentity.discardDirectorySyncEventButton",defaultMessage:"Discard"},retryAllFailedDirectorySyncEventsButton:{id:"workspaceIdentity.retryAllFailedDirectorySyncEventsButton",defaultMessage:"Retry All"},deleteDirectorySyncConnectionButton:{id:"workspaceIdentity.deleteDirectorySyncConnectionButton",defaultMessage:"Delete Connection"},enableDirectorySyncButton:{id:"workspaceIdentity.enableDirectorySyncButton",defaultMessage:"Enable Directory Sync"},deleteDirectorySyncConnectionModalHeader:{id:"workspaceIdentity.deleteDirectorySyncConnectionModalHeader",defaultMessage:"Delete Directory Connection"},deleteDirectorySyncConnectionModalExplanation:{id:"workspaceIdentity.deleteDirectorySyncConnectionModalExplanation",defaultMessage:"This will remove the link between your identity provider and the users in this workspace. All previously synced users and invitations will be retained, but will no longer update in sync with your external directory."},deleteDirectorySyncConnectionModalConfirmButton:{id:"workspaceIdentity.deleteDirectorySyncConnectionModalConfirmButton",defaultMessage:"Delete Directory"},deleteDirectorySyncConnectionModalCancelButton:{id:"workspaceIdentity.deleteDirectorySyncConnectionModalCancelButton",defaultMessage:"Cancel"},directorySyncEventsTableFailureEventTypeColumnHeader:{id:"workspaceIdentity.rectorySyncEventsTableFailureEventTypeColumnHeader",defaultMessage:"Event Type"},directorySyncEventTypeUserCreated:{id:"workspaceIdentity.directorySyncEventTypeUserCreated",defaultMessage:"Create User"},directorySyncEventTypeUserUpdated:{id:"workspaceIdentity.directorySyncEventTypeUserUpdated",defaultMessage:"Update User"},directorySyncEventTypeUserDeleted:{id:"workspaceIdentity.directorySyncEventTypeUserDeleted",defaultMessage:"Delete User"},directorySyncEventTypeGroupCreated:{id:"workspaceIdentity.directorySyncEventTypeGroupCreated",defaultMessage:"Create Group"},directorySyncEventTypeGroupUpdated:{id:"workspaceIdentity.directorySyncEventTypeGroupUpdated",defaultMessage:"Update Group"},directorySyncEventTypeGroupDeleted:{id:"workspaceIdentity.directorySyncEventTypeGroupDeleted",defaultMessage:"Delete Group"},directorySyncEventTypeGroupUserAdded:{id:"workspaceIdentity.directorySyncEventTypeGroupUserAdded",defaultMessage:"Add User to Group"},directorySyncEventTypeGroupUserRemoved:{id:"workspaceIdentity.directorySyncEventTypeGroupUserRemoved",defaultMessage:"Remove User from Group"},directorySyncEventTypeActivated:{id:"workspaceIdentity.directorySyncEventTypeActivated",defaultMessage:"Activate Directory"},directorySyncEventTypeDeleted:{id:"workspaceIdentity.directorySyncEventTypeDeleted",defaultMessage:"Delete Directory"},directorySyncEventsTableActionsColumnHeader:{id:"workspaceIdentity.directorySyncEventsTableActionsColumnHeader",defaultMessage:"Actions"},showEventDirectorySyncEventButton:{id:"workspaceIdentity.showEventDirectorySyncEventButton",defaultMessage:"Show"}});var i=r(9519),d=r(96184),l=r(92379),y=r(75172),u=r(651);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function v(e){let{setEnabled:t,isLoading:r,isEnabled:n}=e,c=(0,y.Z)(),{0:o,1:p}=(0,l.useState)(!1),v=()=>{p(!0)},S=e=>{p(!1),e&&t(!1)};return(0,u.jsx)("div",{className:"pt-1.5",children:n?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.z,{disabled:r,color:"danger",onClick:()=>{r||v()},children:(0,u.jsx)(s.Z,f({},a.deleteDirectorySyncConnectionButton))}),(0,u.jsx)(d.Z,{title:c.formatMessage(a.deleteDirectorySyncConnectionModalHeader),description:c.formatMessage(a.deleteDirectorySyncConnectionModalExplanation),confirmText:c.formatMessage(a.deleteDirectorySyncConnectionModalConfirmButton),cancelText:c.formatMessage(a.deleteDirectorySyncConnectionModalCancelButton),isOpen:o,primaryButtonColor:"danger",onClose:()=>S(!1),onConfirm:()=>S(!0)})]}):(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.z,{disabled:r,color:"primary",onClick:()=>{r||t(!0)},children:(0,u.jsx)(s.Z,f({},a.enableDirectorySyncButton))})})})}var S=r(48198),m=r(31161),b=r(85149),g=r(48449);class j{static async getWorkspaceDirectorySyncSettings(e){return g.c.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:e}}})}static async setWorkspaceDirectorySyncEnabled(e,t){return g.c.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:e}},requestBody:{enabled:t}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(e,t){return g.c.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:e}},requestBody:{enabled:t}})}static async getWorkspaceDirectorySyncPortalUrl(e){return g.c.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:e}}})}static async getWorkspaceDirectorySyncFailedEvents(e){return g.c.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:e}}})}static async retryWorkspaceDirectorySyncFailedEvent(e,t){return g.c.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:e,event_id:t}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(e){return g.c.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:e}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(e,t){return g.c.delete("".concat(b.B,"/accounts/").concat(e,"/scim/failed_events/").concat(t))}static async getWorkspaceDirectorySyncProgressUsers(e){return g.c.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:e}}})}}function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function E(e){let{isLoading:t,workspaceId:r,isDirectoryConnectionConfigured:n}=e,{0:c,1:o}=(0,l.useState)(!1),d=async()=>{try{o(!0);let e=await j.getWorkspaceDirectorySyncPortalUrl(r);o(!1),null!=e&&e.portal_link?window.open(e.portal_link,"_blank"):m.m.danger("Portal link not found.")}catch(e){e instanceof Error?m.m.danger(e.message):m.m.danger("An unexpected error occurred.")}};return(0,u.jsxs)(i.z,{disabled:t||c,color:"secondary",className:" mt-3",onClick:d,children:[n?(0,u.jsx)(s.Z,D({},a.launchDirectorySyncManagementPortalText)):(0,u.jsx)(s.Z,D({},a.launchDirectorySyncSetupPortalText)),(0,u.jsx)(S.Pfi,{className:"icon-sm ml-1"})]})}var w=r(19841);function O(e){let{percentage:t,height:r=10,className:n,backgroundClassName:c="bg-gray-400",transitionDuration:o,transitionTimingFunction:s,onTransitionEnd:a}=e;return(0,u.jsxs)("div",{className:(0,w.default)("relative w-full",n),style:{height:r},children:[(0,u.jsx)("div",{className:(0,w.default)("absolute left-0 top-0 h-full w-full",c)}),(0,u.jsx)("div",{className:"absolute left-0 top-0 h-full bg-current transition-[width]",style:{width:"".concat(t,"%"),transitionDuration:o,transitionTimingFunction:s},onTransitionEnd:a})]})}var x=r(32863),k=r(47797);function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function T(e){switch(e){case"dsync.user.created":return a.directorySyncEventTypeUserCreated;case"dsync.user.updated":return a.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return a.directorySyncEventTypeUserDeleted;case"dsync.group.created":return a.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return a.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return a.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return a.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return a.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return a.directorySyncEventTypeActivated;case"dsync.deleted":case"dsync.deactivated":return a.directorySyncEventTypeDeleted}}function M(e){let{isLoading:t,failedEvents:r,retryEventWithId:n,retryAllFailedEvents:o,discardFailedEventWithId:d}=e,{0:p,1:f}=(0,l.useState)(!1),{0:v,1:S}=(0,l.useState)(),m=(0,y.Z)();return(0,u.jsxs)(u.Fragment,{children:[v&&(0,u.jsx)(x.Z,{isOpen:p,onClose:f,title:m.formatMessage(T(v.event.event)),description:v.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:(0,u.jsx)("pre",{children:JSON.stringify(v.event,null,2)})}),r.length>0&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(c.i$,{className:"flex items-center space-x-4",children:[(0,u.jsx)(s.Z,C({},a.failedDirectorySyncEventsTableHeader)),(0,u.jsx)(i.z,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{o()},children:(0,u.jsx)(s.Z,C({},a.retryAllFailedDirectorySyncEventsButton))})]}),(0,u.jsxs)(k.Z.Root,{className:"w-full table-auto",children:[(0,u.jsxs)(k.Z.Header,{children:[(0,u.jsx)(k.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,u.jsx)(s.Z,C({},a.directorySyncEventsTableFailureEventTypeColumnHeader))}),(0,u.jsx)(k.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,u.jsx)(s.Z,C({},a.directorySyncEventsTableFailureReasonColumnHeader))}),(0,u.jsx)(k.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,u.jsx)(s.Z,C({},a.directorySyncEventsTableActionsColumnHeader))})]}),(0,u.jsx)(k.Z.Body,{children:r.map((e,r)=>(0,u.jsxs)("tr",{children:[(0,u.jsx)(k.Z.Cell,{children:(0,u.jsx)(s.Z,C({},T(e.event.event)))}),(0,u.jsx)(k.Z.Cell,{children:e.failure_reason}),(0,u.jsxs)(k.Z.Cell,{children:[(0,u.jsx)("div",{children:(0,u.jsx)(i.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{S(e),f(!0)},children:(0,u.jsx)(s.Z,C({},a.showEventDirectorySyncEventButton))})}),(0,u.jsx)("div",{className:"ml-2",children:(0,u.jsx)(i.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{n(e.event.id)},children:(0,u.jsx)(s.Z,C({},a.retryDirectorySyncEventButton))})}),(0,u.jsx)("div",{className:"ml-2",children:d&&(0,u.jsx)(i.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{d(e.event.id)},children:(0,u.jsx)(s.Z,C({},a.discardDirectorySyncEventButton))})})]})]},e.event.id))})]})]})]})}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function U(e){let{isLoading:t,numUsersSynced:r,numUsersInDirectory:n,failedEvents:o,retryEventWithId:i,retryAllFailedEvents:d,discardFailedEventWithId:l}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(c.Li,{className:"my-2",children:(0,u.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,u.jsx)(s.Z,I(I({},a.directorySyncUserSyncStatus),{},{values:{numUsersSynced:r,numUsersInDirectory:n}})),(0,u.jsx)(O,{percentage:r/(n||1)*100})]})}),(0,u.jsx)("div",{className:"mt-4",children:(0,u.jsx)(M,{isLoading:t,failedEvents:o,retryEventWithId:i,retryAllFailedEvents:d,discardFailedEventWithId:l})})]})}var Z=r(27781),F=r(84760),B=r(42420),N=r(56032);let A=["data"],G=["data"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function L(e,t){let{0:r,1:n}=(0,l.useState)(!1),c=(0,F.a)({queryKey:["workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await j.getWorkspaceDirectorySyncSettings(e)},enabled:!!e,refetchInterval:!!t&&!!r&&2e3}),{data:o}=c,s=(0,Z.Z)(c,A);return(0,l.useEffect)(()=>{null!=o&&o.enabled&&(null==o?void 0:o.directory_connection)==null?n(!0):n(!1)},[o]),H({data:o},s)}function q(e,t){let{0:r,1:n}=(0,l.useState)(!1),{data:c}=L(e,t),o=(0,F.a)({queryKey:["workspace/directorySyncProgressUsers",e],queryFn:async()=>{if(void 0!==e)return await j.getWorkspaceDirectorySyncProgressUsers(e)},enabled:!!e&&!!(null!=c&&c.directory_connection),refetchInterval:!!t&&!!r&&2e3}),{data:s}=o,a=(0,Z.Z)(o,G);return(0,l.useEffect)(()=>{(null==s?void 0:s.synced_scim_users)===0||(null==s?void 0:s.synced_scim_users)!==(null==s?void 0:s.total_scim_users)?n(!0):n(!1)},[s,null==c?void 0:c.directory_connection]),H({isLoadingUsers:r,data:s},a)}function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function K(e){var t,r,n;let{workspaceId:i}=e,{data:d,isLoading:l}=L(i,!0),{data:y,isLoading:p}=q(i,!0),{data:f,isLoading:S}=function(e,t){let{isLoadingUsers:r}=q(e,t);return(0,F.a)({queryKey:["workspace/directorySyncFailedEvents","workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await j.getWorkspaceDirectorySyncFailedEvents(e)},enabled:!!e,refetchInterval:!!t&&!!r&&2e3})}(i,!0),{mutateAsync:m,status:b}=function(e){let t=(0,B.NL)();return(0,N.D)({mutationFn:t=>j.setWorkspaceDirectorySyncEnabled(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySync",e]})}})}(i),{mutateAsync:g,status:h}=function(e){let t=(0,B.NL)();return(0,N.D)({mutationFn:t=>j.retryWorkspaceDirectorySyncFailedEvent(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncFailedEvents","workspace/directorySyncProgress"]})}})}(i),{mutateAsync:D,status:w}=function(e){let t=(0,B.NL)();return(0,N.D)({mutationFn:()=>j.retryAllWorkspaceDirectorySyncFailedEvents(e),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncFailedEvents","workspace/directorySyncProgress"]})}})}(i),{mutateAsync:O,status:x}=function(e){let t=(0,B.NL)();return(0,N.D)({mutationFn:t=>j.discardWorkspaceDirectorySyncFailedEvent(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncFailedEvents","workspace/directorySyncProgress"]})}})}(i),k="pending"===b||"pending"===h||"pending"===w||"pending"===x||l||p||S;return(0,u.jsxs)(c.i9,{className:"".concat(k?"text-token-text-secondary":""),children:[(0,u.jsx)(c.A4,{children:(0,u.jsxs)("div",{className:"flex flex-row",children:[(0,u.jsx)("div",{children:(0,u.jsx)(s.Z,R({},a.directorySyncTitle))}),(0,u.jsx)("div",{className:"ml-2 mt-1",children:k&&(0,u.jsx)(o.Z,{})})]})}),(0,u.jsx)(c.Li,{children:(0,u.jsx)(s.Z,R({},a.directorySyncInfoText))}),(null==d?void 0:d.directory_connection)&&(0,u.jsx)("div",{children:(0,u.jsx)(U,{isLoading:k,numUsersSynced:null!==(t=null==y?void 0:y.synced_scim_users)&&void 0!==t?t:0,numUsersInDirectory:null!==(r=null==y?void 0:y.total_scim_users)&&void 0!==r?r:0,failedEvents:null!=f?f:[],retryEventWithId:g,retryAllFailedEvents:D,discardFailedEventWithId:O})}),(0,u.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,u.jsx)(v,{setEnabled:m,isLoading:k,isEnabled:null!==(n=null==d?void 0:d.enabled)&&void 0!==n&&n}),(null==d?void 0:d.enabled)&&(0,u.jsx)(E,{isLoading:k,workspaceId:i,isDirectoryConnectionConfigured:!!(null!=d&&d.directory_connection)})]})]})}},96184:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(75172),c=r(68306),o=r(6242),s=r(32863),a=r(651);function i(e){let{title:t,description:r,confirmText:c,cancelText:i,isOpen:l=!1,onClose:y,onConfirm:u,primaryButtonColor:p="primary",children:f}=e,v=(0,n.Z)();return(0,a.jsx)(s.Z,{isOpen:l,onClose:y,type:"success",title:t,description:r,primaryButton:(0,a.jsx)(o.Z.Button,{title:null!=c?c:v.formatMessage(d.confirmLabel),color:p,onClick:u}),secondaryButton:(0,a.jsx)(o.Z.Button,{title:null!=i?i:v.formatMessage(d.cancelLabel),color:"secondary",onClick:y}),children:f})}let d=(0,c.vU)({confirmLabel:{id:"ConfirmModal.confirmLabel",defaultMessage:"Confirm"},cancelLabel:{id:"ConfirmModal.cancelLabel",defaultMessage:"Cancel"}})}}]);
//# sourceMappingURL=2913.5758660712a61912.js.map