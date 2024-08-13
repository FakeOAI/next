"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5622],{95622:function(e,t,r){r.r(t),r.d(t,{DirectorySyncSection:function(){return Y}});var n=r(98601),c=r(16779),s=r(78571),o=r(75172),a=r(62984),i=r(89794),l=r(651);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){let{setEnabled:t,isLoading:r,isEnabled:u}=e,y=(0,o.Z)();return(0,l.jsxs)("div",{className:"flex flex-row content-center items-center justify-items-center",children:[(0,l.jsx)(c.Z,{disabled:r,enabled:u,onChange:t,label:y.formatMessage(i.s.sendInviteEmailsLabel)}),(0,l.jsx)(s._,{className:"ml-2",children:(0,l.jsx)(a.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},i.s.sendInviteEmailsLabel))})]})}var y=r(8040),p=r(97537),f=r(88667),m=r(11550),v=r(53128),j=r(92379);function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function O(e){let{setEnabled:t,isLoading:r,isEnabled:n}=e,c=(0,o.Z)(),{0:s,1:d}=(0,j.useState)(!1),u=()=>{d(!0)},y=e=>{d(!1),e&&t(!1)};return(0,l.jsx)("div",{className:"pt-1.5",children:n?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.z,{disabled:r,color:"danger",onClick:()=>{r||u()},children:(0,l.jsx)(a.Z,g({},i.s.deleteDirectorySyncConnectionButton))}),(0,l.jsx)(v.Z,{title:c.formatMessage(i.s.deleteDirectorySyncConnectionModalHeader),description:c.formatMessage(i.s.deleteDirectorySyncConnectionModalExplanation),confirmText:c.formatMessage(i.s.deleteDirectorySyncConnectionModalConfirmButton),cancelText:c.formatMessage(i.s.deleteDirectorySyncConnectionModalCancelButton),isOpen:s,primaryButtonColor:"danger",onClose:()=>y(!1),onConfirm:()=>y(!0)})]}):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(m.z,{disabled:r,color:"primary",onClick:()=>{r||t(!0)},children:(0,l.jsx)(a.Z,g({},i.s.enableDirectorySyncButton))})})})}var h=r(77748),S=r(24740),x=r(28438),w=r(72409);class _{static async getWorkspaceDirectorySyncSettings(e){return w.c.safeGet("/accounts/{account_id}/scim",{parameters:{path:{account_id:e}}})}static async setWorkspaceDirectorySyncEnabled(e,t){return w.c.safePost("/accounts/{account_id}/scim/set_enabled",{parameters:{path:{account_id:e}},requestBody:{enabled:t}})}static async setWorkspaceDirectorySyncEmailInvitesEnabled(e,t){return w.c.safePost("/accounts/{account_id}/scim/set_email_invites_enabled",{parameters:{path:{account_id:e}},requestBody:{enabled:t}})}static async getWorkspaceDirectorySyncPortalUrl(e){return w.c.safeGet("/accounts/{account_id}/scim/portal_link",{parameters:{path:{account_id:e}}})}static async getWorkspaceDirectorySyncFailedEvents(e){return w.c.safeGet("/accounts/{account_id}/scim/failed_events",{parameters:{path:{account_id:e}}})}static async retryWorkspaceDirectorySyncFailedEvent(e,t){return w.c.safePost("/accounts/{account_id}/scim/failed_events/{event_id}/retry",{parameters:{path:{account_id:e,event_id:t}},requestBody:{}})}static async retryAllWorkspaceDirectorySyncFailedEvents(e){return w.c.safePost("/accounts/{account_id}/scim/failed_events/retry_all",{parameters:{path:{account_id:e}},requestBody:{}})}static async discardWorkspaceDirectorySyncFailedEvent(e,t){return w.c.delete("".concat(x.B,"/accounts/").concat(e,"/scim/failed_events/").concat(t))}static async getWorkspaceDirectorySyncProgressUsers(e){return w.c.safeGet("/accounts/{account_id}/scim/sync_progress_users",{parameters:{path:{account_id:e}}})}static async getWorkspaceDirectorySyncProgressGroups(e){return w.c.safeGet("/accounts/{account_id}/scim/sync_progress_groups",{parameters:{path:{account_id:e}}})}}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function P(e){let{isLoading:t,workspaceId:r,isDirectoryConnectionConfigured:n}=e,{0:c,1:s}=(0,j.useState)(!1),o=async()=>{try{s(!0);let e=await _.getWorkspaceDirectorySyncPortalUrl(r);s(!1),null!=e&&e.portal_link?window.open(e.portal_link,"_blank"):S.m.danger("Portal link not found.")}catch(e){e instanceof Error?S.m.danger(e.message):S.m.danger("An unexpected error occurred.")}};return(0,l.jsxs)(m.z,{disabled:t||c,color:"secondary",className:"mt-3",onClick:o,children:[n?(0,l.jsx)(a.Z,E({},i.s.launchDirectorySyncManagementPortalText)):(0,l.jsx)(a.Z,E({},i.s.launchDirectorySyncSetupPortalText)),(0,l.jsx)(h.Pfi,{className:"icon-sm ml-1"})]})}var k=r(19841);function Z(e){let{percentage:t,height:r=10,className:n,backgroundClassName:c="bg-gray-400",transitionDuration:s,transitionTimingFunction:o,onTransitionEnd:a}=e;return(0,l.jsxs)("div",{className:(0,k.default)("relative w-full",n),style:{height:r},children:[(0,l.jsx)("div",{className:(0,k.default)("absolute left-0 top-0 h-full w-full",c)}),(0,l.jsx)("div",{className:"absolute left-0 top-0 h-full bg-current transition-[width]",style:{width:"".concat(Math.max(Math.min(t,100),0),"%"),transitionDuration:s,transitionTimingFunction:o},onTransitionEnd:a})]})}var C=r(24434),N=r(36792);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function L(e){switch(e){case"dsync.user.created":return i.s.directorySyncEventTypeUserCreated;case"dsync.user.updated":return i.s.directorySyncEventTypeUserUpdated;case"dsync.user.deleted":return i.s.directorySyncEventTypeUserDeleted;case"dsync.group.created":return i.s.directorySyncEventTypeGroupCreated;case"dsync.group.updated":return i.s.directorySyncEventTypeGroupUpdated;case"dsync.group.deleted":return i.s.directorySyncEventTypeGroupDeleted;case"dsync.group.user_added":return i.s.directorySyncEventTypeGroupUserAdded;case"dsync.group.user_removed":return i.s.directorySyncEventTypeGroupUserRemoved;case"dsync.activated":return i.s.directorySyncEventTypeActivated;case"dsync.deleted":case"dsync.deactivated":return i.s.directorySyncEventTypeDeleted}}function B(e){let{isLoading:t,failedEvents:r,retryEventWithId:n,retryAllFailedEvents:c,discardFailedEventWithId:s}=e,{0:d,1:u}=(0,j.useState)(!1),{0:p,1:f}=(0,j.useState)(),v=(0,o.Z)();return(0,l.jsxs)(l.Fragment,{children:[p&&(0,l.jsx)(C.Z,{isOpen:d,onClose:u,title:v.formatMessage(L(p.event.event)),description:p.failure_reason,type:"success",showCloseButton:!0,isScrollable:!0,children:(0,l.jsx)("pre",{children:JSON.stringify(p.event,null,2)})}),r.length>0&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(y.i$,{className:"flex items-center space-x-4",children:[(0,l.jsx)(a.Z,W({},i.s.failedDirectorySyncEventsTableHeader)),(0,l.jsx)(m.z,{disabled:t,color:"secondary",size:"small",className:"ml-auto",onClick:()=>{c()},children:(0,l.jsx)(a.Z,W({},i.s.retryAllFailedDirectorySyncEventsButton))})]}),(0,l.jsxs)(N.Z.Root,{className:"w-full table-auto",children:[(0,l.jsxs)(N.Z.Header,{children:[(0,l.jsx)(N.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,l.jsx)(a.Z,W({},i.s.directorySyncEventsTableFailureEventTypeColumnHeader))}),(0,l.jsx)(N.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,l.jsx)(a.Z,W({},i.s.directorySyncEventsTableFailureReasonColumnHeader))}),(0,l.jsx)(N.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,l.jsx)(a.Z,W({},i.s.directorySyncEventsTableActionsColumnHeader))})]}),(0,l.jsx)(N.Z.Body,{children:r.map((e,r)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)(N.Z.Cell,{children:(0,l.jsx)(a.Z,W({},L(e.event.event)))}),(0,l.jsx)(N.Z.Cell,{children:e.failure_reason}),(0,l.jsxs)(N.Z.Cell,{children:[(0,l.jsx)("div",{children:(0,l.jsx)(m.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{f(e),u(!0)},children:(0,l.jsx)(a.Z,W({},i.s.showEventDirectorySyncEventButton))})}),(0,l.jsx)("div",{className:"ml-2",children:(0,l.jsx)(m.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{n(e.event.id)},children:(0,l.jsx)(a.Z,W({},i.s.retryDirectorySyncEventButton))})}),(0,l.jsx)("div",{className:"ml-2",children:s&&(0,l.jsx)(m.z,{disabled:t,color:"secondary",size:"small",onClick:()=>{s(e.event.id)},children:(0,l.jsx)(a.Z,W({},i.s.discardDirectorySyncEventButton))})})]})]},e.event.id))})]})]})]})}function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function G(e){let{isLoading:t,numUsersSynced:r,numUsersInDirectory:n,numGroupsSynced:c,numGroupsInDirectory:s,failedEvents:o,retryEventWithId:d,retryAllFailedEvents:u,discardFailedEventWithId:p}=e,{value:m}=(0,f.sB)("2091463435");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(y.Li,{className:"my-2",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)(a.Z,M(M({},i.s.directorySyncUserSyncStatus),{},{values:{numUsersSynced:r,numUsersInDirectory:n}})),(0,l.jsx)(Z,{percentage:r/(n||1)*100})]}),(0,l.jsx)("div",{className:"mt-4",children:m&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"flex items-center space-x-4",children:(0,l.jsx)(a.Z,M(M({},i.s.directorySyncGroupSyncStatus),{},{values:{numGroupsSynced:c,numGroupsInDirectory:s}}))}),(0,l.jsx)(Z,{percentage:c/(s||1)*100})]})})]}),(0,l.jsx)("div",{className:"mt-4",children:(0,l.jsx)(B,{isLoading:t,failedEvents:o,retryEventWithId:d,retryAllFailedEvents:u,discardFailedEventWithId:p})})]})}var U=r(52088),q=r(84760),I=r(42420),A=r(56032);let z=["data"],H=["data"],K=["data"];function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function J(e,t){let{0:r,1:n}=(0,j.useState)(!1),c=(0,q.a)({queryKey:["workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await _.getWorkspaceDirectorySyncSettings(e)},enabled:!!e,refetchInterval:!!t&&!!r&&2e3}),{data:s}=c,o=(0,U.Z)(c,z);return(0,j.useEffect)(()=>{null!=s&&s.enabled&&(null==s?void 0:s.directory_connection)==null?n(!0):n(!1)},[s]),R({data:s},o)}function V(e,t){let{0:r,1:n}=(0,j.useState)(!1),{data:c}=J(e,t),s=(0,q.a)({queryKey:["workspace/directorySyncStatus/progressUsers","workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await _.getWorkspaceDirectorySyncProgressUsers(e)},enabled:!!e&&!!(null!=c&&c.directory_connection),refetchInterval:!!t&&!!r&&2e3}),{data:o}=s,a=(0,U.Z)(s,H);return(0,j.useEffect)(()=>{(null==o?void 0:o.synced_scim_users)===0||(null==o?void 0:o.synced_scim_users)!==(null==o?void 0:o.total_scim_users)?n(!0):n(!1)},[o,null==c?void 0:c.directory_connection]),R({isLoadingUsers:r,data:o},a)}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function Y(e){var t,r,n,c,s,o;let{workspaceId:d}=e,{value:m}=(0,f.sB)("2091463435"),{value:v}=(0,f.sB)("2494375100"),{data:b,isLoading:g}=J(d,!0),{data:h,isLoading:S}=V(d,!0),{data:x,isLoading:w}=function(e,t){let{0:r,1:n}=(0,j.useState)(!1),{data:c}=J(e,t),s=(0,q.a)({queryKey:["workspace/directorySyncStatus/progressGroups","workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await _.getWorkspaceDirectorySyncProgressGroups(e)},enabled:!!e&&!!(null!=c&&c.directory_connection),refetchInterval:!!t&&!!r&&2e3}),{data:o}=s,a=(0,U.Z)(s,K);return(0,j.useEffect)(()=>{(null==o?void 0:o.synced_scim_groups)===0||(null==o?void 0:o.synced_scim_groups)!==(null==o?void 0:o.total_scim_groups)?n(!0):n(!1)},[o,null==c?void 0:c.directory_connection]),R({isLoadingGroups:r,data:o},a)}(d,m),{data:D,isLoading:E}=function(e,t){let{isLoadingUsers:r}=V(e,t);return(0,q.a)({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySync",e],queryFn:async()=>{if(void 0!==e)return await _.getWorkspaceDirectorySyncFailedEvents(e)},enabled:!!e,refetchInterval:!!t&&!!r&&2e3})}(d,!0),{mutateAsync:k,status:Z}=function(e){let t=(0,I.NL)();return(0,A.D)({mutationFn:t=>_.setWorkspaceDirectorySyncEnabled(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySync",e]})}})}(d),{mutateAsync:C,status:N}=function(e){let t=(0,I.NL)();return(0,A.D)({mutationFn:t=>_.retryWorkspaceDirectorySyncFailedEvent(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}(d),{mutateAsync:F,status:W}=function(e){let t=(0,I.NL)();return(0,A.D)({mutationFn:()=>_.retryAllWorkspaceDirectorySyncFailedEvents(e),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents","workspace/directorySyncStatus/progressUsers","workspace/directorySyncStatus/progressGroups"]})}})}(d),{mutateAsync:L,status:B}=function(e){let t=(0,I.NL)();return(0,A.D)({mutationFn:t=>_.discardWorkspaceDirectorySyncFailedEvent(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySyncStatus/failedEvents"]})}})}(d),{mutateAsync:T,status:M}=function(e){let t=(0,I.NL)();return(0,A.D)({mutationFn:t=>_.setWorkspaceDirectorySyncEmailInvitesEnabled(e,t),onSuccess:()=>{t.refetchQueries({queryKey:["workspace/directorySync",e]})}})}(d),z="pending"===Z||"pending"===N||"pending"===W||"pending"===B||"pending"==M||g||S||w||E;return(0,l.jsxs)(y.i9,{className:"".concat(z?"text-token-text-secondary":""),children:[(0,l.jsx)(y.A4,{children:(0,l.jsxs)("div",{className:"flex flex-row",children:[(0,l.jsx)("div",{children:(0,l.jsx)(a.Z,X({},i.s.directorySyncTitle))}),(0,l.jsx)("div",{className:"ml-2 mt-1",children:z&&(0,l.jsx)(p.Z,{})})]})}),(0,l.jsx)(y.Li,{children:(0,l.jsx)(a.Z,X({},i.s.directorySyncInfoText))}),(null==b?void 0:b.directory_connection)&&(0,l.jsx)("div",{children:(0,l.jsx)(G,{isLoading:z,numUsersSynced:null!==(t=null==h?void 0:h.synced_scim_users)&&void 0!==t?t:0,numUsersInDirectory:null!==(r=null==h?void 0:h.total_scim_users)&&void 0!==r?r:0,numGroupsSynced:null!==(n=null==x?void 0:x.synced_scim_groups)&&void 0!==n?n:0,numGroupsInDirectory:null!==(c=null==x?void 0:x.total_scim_groups)&&void 0!==c?c:0,failedEvents:null!=D?D:[],retryEventWithId:C,retryAllFailedEvents:F,discardFailedEventWithId:L})}),v&&(null==b?void 0:b.enabled)&&(0,l.jsx)("div",{children:(0,l.jsx)(u,{setEnabled:T,isLoading:z,isEnabled:null!==(s=null==b?void 0:b.send_user_invite_emails)&&void 0!==s&&s})}),(0,l.jsxs)("div",{className:"flex items-center space-x-4",children:[(0,l.jsx)(O,{setEnabled:k,isLoading:z,isEnabled:null===(o=null==b?void 0:b.enabled)||void 0===o||o}),(null==b?void 0:b.enabled)&&(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(P,{isLoading:z,workspaceId:d,isDirectoryConnectionConfigured:!!(null!=b&&b.directory_connection)})})]})]})}},53128:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(75172),c=r(68306),s=r(59144),o=r(24434),a=r(651);function i(e){let{title:t,description:r,confirmText:c,cancelText:i,isOpen:d=!1,onClose:u,onConfirm:y,primaryButtonColor:p="primary",children:f}=e,m=(0,n.Z)();return(0,a.jsx)(o.Z,{isOpen:d,onClose:u,type:"success",title:t,description:r,primaryButton:(0,a.jsx)(s.Z.Button,{title:null!=c?c:m.formatMessage(l.confirmLabel),color:p,onClick:y}),secondaryButton:(0,a.jsx)(s.Z.Button,{title:null!=i?i:m.formatMessage(l.cancelLabel),color:"secondary",onClick:u}),children:f})}let l=(0,c.vU)({confirmLabel:{id:"ConfirmModal.confirmLabel",defaultMessage:"Confirm"},cancelLabel:{id:"ConfirmModal.cancelLabel",defaultMessage:"Cancel"}})},78571:function(e,t,r){r.d(t,{_:function(){return o}});var n=r(37088),c=r(92379),s=r(52125);let o=(0,c.forwardRef)((e,t)=>(0,c.createElement)(s.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))}}]);
//# sourceMappingURL=5622.103a84656bdfa20e.js.map