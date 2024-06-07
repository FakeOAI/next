"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8890],{11823:function(e,t,r){r.d(t,{h:function(){return h},t:function(){return y}});var a,n,s,l,i,o,c=r(41141),d=r(19841),m=r(95182),u=r.n(m),x=r(74091),f=r(33481),j=r(40616),b=r(73746),g=r(651);function h(e){let{currentPage:t,onChangeIndex:r,length:a,className:n,showInline:s=!1}=e,l=(0,b.Qr)(),i=e=>{r(u()(t+e,0,a-1))};return l?(0,g.jsxs)("div",{className:(0,d.default)("flex items-center justify-center rounded-lg text-token-text-secondary",!s&&j.W.MessageAction),children:[(0,g.jsx)("button",{onClick:()=>i(-1),disabled:0===t,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,g.jsx)(f.DUf,{className:"icon-md-heavy"})}),(0,g.jsx)("div",{className:"px-0.5 text-sm font-semibold tabular-nums",children:"".concat(t+1,"/").concat(a)}),(0,g.jsx)("button",{onClick:()=>i(1),disabled:t===a-1,className:"flex h-[30px] w-[30px] items-center justify-center rounded-md hover:bg-token-main-surface-secondary disabled:opacity-50 disabled:hover:bg-transparent",children:(0,g.jsx)(f.ob9,{className:"icon-md-heavy"})})]}):(0,g.jsxs)(p,{className:n,children:[(0,g.jsx)(v,{onClick:()=>i(-1),disabled:0===t,children:(0,g.jsx)(f.DUf,{className:"icon-xs"})}),(0,g.jsx)(M,{children:"".concat(t+1," / ").concat(a)}),(0,g.jsx)(v,{onClick:()=>i(1),disabled:t===a-1,children:(0,g.jsx)(f.ob9,{className:"icon-xs"})})]})}let p=x.Z.div(a||(a=(0,c.Z)(["text-xs flex items-center justify-center gap-1"]))),v=x.Z.button(n||(n=(0,c.Z)(["dark:text-white disabled:text-gray-300 dark:disabled:text-gray-400"]))),M=x.Z.span(s||(s=(0,c.Z)(["flex-grow flex-shrink-0 tabular-nums"])));function y(e){let{currentPage:t,onChangeIndex:r,length:a,className:n}=e,s=e=>{r(u()(t+e,0,a-1))};return 0===a?null:(0,g.jsxs)(Z,{className:n,children:[(0,g.jsx)(k,{onClick:()=>s(-1),disabled:0===t,children:(0,g.jsx)(f.DUf,{className:"icon-sm"})}),(0,g.jsx)(U,{children:"".concat(t+1,"/").concat(a)}),(0,g.jsx)(k,{onClick:()=>s(1),disabled:t===a-1,children:(0,g.jsx)(f.ob9,{className:"icon-sm"})})]})}let Z=x.Z.div(l||(l=(0,c.Z)(["text-xs inline-flex bg-token-main-surface-secondary h-8 border rounded border-token-border-medium"]))),k=x.Z.button(i||(i=(0,c.Z)(["text-token-text-secondary disabled:text-token-border-medium w-8 flex items-center justify-center hover:bg-token-main-surface-tertiary"]))),U=x.Z.span(o||(o=(0,c.Z)(["text-token-text-tertiary px-2 flex items-center font-mono tracking-widest"])))},98890:function(e,t,r){r.d(t,{ZP:function(){return S},bq:function(){return H},mJ:function(){return B},p5:function(){return E}});var a=r(94521),n=r(21904),s=r(50684),l=r(93223),i=r(55371),o=r(24040),c=r(96053),d=r(35226),m=r(19841),u=r(70933),x=r(92379),f=r(72256),j=r(26123),b=r(25940),g=r(68810),h=r(11823),p=r(67165),v=r(8649),M=r(8735),y=r(69482),Z=r(33481),k=r(49217),U=r(94982),N=r(24768),C=r(55775),D=r(651);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let R=(0,g.Ue)(()=>({confirmModalUserData:null})),A=e=>{R.setState({confirmModalUserData:e})},P=()=>{R.setState({confirmModalUserData:null})};function S(e){let{workspaceId:t,filterInputValue:r}=e,{0:a,1:n}=(0,x.useState)(0),s=(0,o.aF)(),m=null==s?void 0:s.id,u=(0,C.Gk)(t),j=(0,C.bE)(t),b=u||j,g=(0,c.D)({mutationFn:e=>{let{userId:t,workspaceId:r,value:a}=e;return l.Z.updateWorkspaceUserRole(r,t,a).catch(e=>{U.m.danger("Unable to update user (".concat(t,") role: ").concat(e.message))})}}),p=function(e){let t=(0,d.NL)();return(0,c.D)({mutationFn:t=>{let{userId:r}=t;return l.Z.removeWorkspaceUser(e,r).catch(e=>{U.m.danger("Unable to remove user (".concat(r,") from workspace: ").concat(e.message))})},onSuccess:()=>{t.invalidateQueries({queryKey:["workspace",e]})}})}(t),{data:v}=(0,N.Z)(t,a*N.I,r),M=(0,x.useCallback)(e=>{A(e)},[]),k=(0,x.useCallback)(()=>{var e;let t=null===(e=R.getState().confirmModalUserData)||void 0===e?void 0:e.id;void 0!==t&&p.mutate({userId:t}),P()},[p]),w=(0,x.useCallback)((e,r)=>{g.mutate({userId:e,value:r,workspaceId:t})},[g,t]);if(void 0===v)return(0,D.jsx)(H,{});let S=v.items,B=Math.ceil(v.total/N.I);return a>=B&&0!==B&&n(Math.max(B-1,0)),(0,D.jsxs)(D.Fragment,{children:[(0,D.jsxs)(y.Z.Root,{fixed:!0,size:"normal",children:[(0,D.jsxs)(y.Z.Header,{children:[(0,D.jsx)(y.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,D.jsx)(f.Z,O({},_.name))}),(0,D.jsx)(y.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,D.jsx)(f.Z,O({},_.email))}),(0,D.jsx)(y.Z.HeaderCell,{className:"w-28 bg-token-main-surface-primary",children:(0,D.jsx)("span",{className:u?"pl-3":"",children:(0,D.jsx)(f.Z,O({},_.role))})}),b&&(0,D.jsx)(y.Z.HeaderCell,{className:"w-16 bg-token-main-surface-primary"})]}),(0,D.jsxs)(y.Z.Body,{children:[S.map(e=>(0,D.jsx)(T,{isCurrentUser:void 0!==m&&e.id===m,userId:e.id,name:e.name,role:e.role,currentUserHasAdminRights:b,isCurrentUserOwner:u,email:e.email,onRemoveUserClick:()=>M({id:e.id,name:e.name,email:e.email,created_time:e.created_time}),onUpdateUserRole:w},e.id)),0===S.length&&(0,D.jsx)(y.Z.Row,{children:(0,D.jsx)(y.Z.Cell,{children:(0,D.jsx)("div",{className:"text-token-text-tertiary",children:(0,D.jsx)(f.Z,O({},_.noResults))})})})]})]}),(0,D.jsxs)("div",{className:"relative mb-8 mt-4 min-h-[20px]",children:[u&&(0,D.jsxs)("button",{onClick:()=>i.vm.openModal(i.B.InviteUsersToWorkspace),className:"flex items-center gap-2 text-token-text-secondary hover:text-token-text-primary",children:[(0,D.jsx)(Z.Vz5,{className:"icon-sm"}),(0,D.jsx)(f.Z,O({},_.inviteMemberButton))]}),B>1&&(0,D.jsx)("div",{className:"absolute start-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 justify-center",children:(0,D.jsx)(h.t,{currentPage:a,onChangeIndex:n,length:B})})]}),(0,D.jsx)(I,{onDeleteConfirm:k})]})}function I(e){var t;let{onDeleteConfirm:r}=e,a=(0,j.Z)(),n=R(e=>null!==e.confirmModalUserData),s=R(e=>null===e.confirmModalUserData?{}:{userId:e.confirmModalUserData.id,email:e.confirmModalUserData.email,name:e.confirmModalUserData.name,dateAdded:(0,u.Z)(e.confirmModalUserData.created_time)});return(0,D.jsx)(k.Z,{isOpen:n,title:a.formatMessage(_.removeMemberModalTitle),onClose:()=>P(),type:"success",primaryButton:(0,D.jsx)(v.ZP.Button,{title:a.formatMessage(_.removeMemberModalConfirm),color:"danger",onClick:r}),secondaryButton:(0,D.jsx)(v.ZP.Button,{title:a.formatMessage(_.removeMemberModalCancel),color:"secondary",onClick:()=>P()}),children:(0,D.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[null!==(t=s.name)&&void 0!==t?t:s.email,(0,D.jsx)("div",{className:"text-token-text-tertiary",children:(0,D.jsx)(f.Z,O(O({},_.dateJoined),{},{values:{dateAdded:a.formatDate(s.dateAdded,{year:"numeric",month:"long",day:"numeric"})}}))})]})})}function T(e){let{userId:t,name:r,email:a,role:n,currentUserHasAdminRights:s,isCurrentUserOwner:l,isCurrentUser:i,onRemoveUserClick:o,onUpdateUserRole:c}=e,d=(0,C.Ap)()[n];return(0,D.jsxs)(y.Z.Row,{children:[(0,D.jsx)(y.Z.Cell,{children:(0,D.jsxs)("span",{className:(0,m.default)("flex items-center gap-2",(null===r||""===r)&&"text-token-text-tertiary"),children:[(0,D.jsx)("span",{children:null!=r?r:(0,D.jsx)(f.Z,O({},_.missingName))}),(0,D.jsx)("span",{children:i&&(0,D.jsx)(f.Z,O({},_.youSpecifier))})]})}),(0,D.jsx)(y.Z.Cell,{children:a}),(0,D.jsx)(y.Z.Cell,{children:l?(0,D.jsx)(B,{currentRole:n,onUpdateUserRole:e=>{c(t,e)},disabled:i}):d}),s&&(0,D.jsx)(y.Z.Cell,{children:(0,D.jsx)(W,{userId:t,onRemoveUserClick:o,disabled:i})})]})}function B(e){let{currentRole:t,onUpdateUserRole:r,disabled:a=!1}=e,s=(0,C.Ap)();return(0,D.jsx)(M.g,{disabled:a,defaultValue:t,onValueChange:e=>{r(e)},options:[{label:s[n.r3.STANDARD],value:n.r3.STANDARD},{label:s[n.r3.ADMIN],value:n.r3.ADMIN},{label:s[n.r3.OWNER],value:n.r3.OWNER}]})}function W(e){let{disabled:t,onRemoveUserClick:r,userId:a}=e;return t?null:(0,D.jsxs)(p.Z.Root,{children:[(0,D.jsx)(p.Z.Trigger,{className:"-my-2",children:(0,D.jsx)(Z.nWS,{className:"icon-sm"})}),(0,D.jsx)(p.Z.Portal,{children:(0,D.jsx)(p.Z.Content,{children:(0,D.jsx)(p.Z.Item,{onClick:()=>{r(a)},children:(0,D.jsx)(f.Z,O({},_.removeMemberModalTitle))})})})]})}function E(e){var t;let{data:r}=(0,N.Z)(e);return null!==(t=null==r?void 0:r.total)&&void 0!==t?t:0}function H(){return(0,D.jsx)("div",{className:"flex w-full items-center justify-center",children:(0,D.jsx)(s.Z,{})})}let _=(0,b.vU)({name:{id:"UserManager.name",defaultMessage:"Name"},email:{id:"UserManager.email",defaultMessage:"Email"},role:{id:"UserManager.role",defaultMessage:"Role"},missingName:{id:"UserManager.missingName",defaultMessage:"No name provided"},youSpecifier:{id:"UserManager.youSpecifier",defaultMessage:"(You)"},removeUser:{id:"UserManager.removeUser",defaultMessage:"Remove user from workspace"},removeMemberModalTitle:{id:"UserManager.removeMemberModalTitle",defaultMessage:"Remove member"},removeMemberModalConfirm:{id:"UserManager.removeMemberModalConfirm",defaultMessage:"Delete"},removeMemberModalCancel:{id:"UserManager.removeMemberModalCancel",defaultMessage:"Cancel"},dateJoined:{id:"UserManager.dateJoined",defaultMessage:"Joined workspace on {dateAdded}"},inviteMemberButton:{id:"UserManager.inviteMemberButton",defaultMessage:"Invite member"},noResults:{id:"UserManager.noResults",defaultMessage:"No results"}})},24768:function(e,t,r){r.d(t,{I:function(){return s},Z:function(){return l}});var a=r(93223),n=r(14816);let s=25;function l(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:s,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;return(0,n.a)({queryKey:["workspace",e,t,r],queryFn:async()=>await a.Z.getWorkspaceUsers(e,t,l,r),placeholderData:i,enabled:!!e})}},40616:function(e,t,r){r.d(t,{W:function(){return a}});let a={MessageAction:"z-10",ScrollToBottom:"z-10",PromptTextareaHeader:"z-20",TagGpt:"z-20"}}}]);
//# sourceMappingURL=8890-71099fc6cbe6c24c.js.map