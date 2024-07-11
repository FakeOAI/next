(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6161,8086],{50626:function(e,a,s){"use strict";s.r(a),s.d(a,{default:function(){return C}});var t=s(94521),c=s(80159),i=s(8649),r=s(94982),o=s(38923),l=s(10852),n=s(4702),d=s(55371),u=s(24040),p=s(45779),f=s(91530),h=s.n(f),v=s(66879),b=s.n(v),m=s(43128),x=s(92379),k=s(75172),j=s(62984),w=s(68306),g=s(27084),M=s(84281),N=s(49217),W=s(58171),y=s(98890),O=s(651);function P(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),s.push.apply(s,t)}return s}function S(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?P(Object(s),!0).forEach(function(a){(0,t.Z)(e,a,s[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):P(Object(s)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))})}return e}function D(){var e;let a=(0,u.aF)(),s=(0,n.t)(),{data:t}=(0,n.rk)(),{0:f,1:v}=(0,x.useState)(!1),w=(0,m.useRouter)(),P=null==t?void 0:t.accountItems,D=(0,y.p5)(null!==(e=null==s?void 0:s.id)&&void 0!==e?e:""),C=null==s?void 0:s.id,_=null==P?void 0:P.find(e=>e.id===C),B=(null==s?void 0:s.isOwnerOfAccount())&&s.isTeam()&&!s.hasPaidSubscription(),E=(null==s?void 0:s.isOwnerOfAccount())&&s.isTeam()&&s.hasPaidSubscription(),T=null==P?void 0:P.filter(e=>!e.isDeactivated()),A=(0,k.Z)(),F=(0,x.useCallback)(()=>{v(!0),d.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(D,W.Y6),existingAccount:_}),v(!1)},[D,_]),U=async()=>{v(!0);try{let e=await l.Z.fetchCustomerPortalUrl();w.push(e.url),v(!1)}catch(e){v(!1),r.m.warning(A.formatMessage(Z.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return null!=s&&_&&T?(0,O.jsx)(N.Z,{type:"success",onClose:h(),isOpen:null!=s||null!=t,title:(0,O.jsx)("span",{className:"text-lg",children:(0,O.jsx)(j.Z,S({},Z.workspaceDeactivated))}),children:(0,O.jsxs)("div",{className:"flex flex-col items-center justify-center gap-4",children:[(0,O.jsxs)("div",{className:"flex w-full items-center gap-4",children:[(0,O.jsx)(g.B0,{src:_.data.profilePictureUrl,size:"large"}),(0,O.jsx)("div",{className:"font-semibold",children:_.data.name})]}),(0,O.jsxs)("div",{children:[(0,O.jsx)("h3",{className:"mb-2 text-base font-bold",children:(0,O.jsx)(j.Z,S({},Z.workspaceDeactivated))}),(0,O.jsxs)("ul",{className:"list-disc pl-5",children:[(0,O.jsx)("li",{className:"mb-1",children:(0,O.jsx)(j.Z,S({},Z.chatHistoryUnavailable))}),(0,O.jsx)("li",{children:(0,O.jsx)(j.Z,S({},Z.otherWorkspacesAvailable))})]})]}),B&&(0,O.jsxs)("div",{className:"flex w-full flex-col",children:[(0,O.jsx)("p",{children:(0,O.jsx)(j.Z,S({},Z.purchaseNewSubscription))}),(0,O.jsx)(i.m,{className:"m-auto mt-2 w-full",loading:f,onClick:F,children:(0,O.jsx)(j.Z,S({},Z.purchaseNewSubscriptionButton))})]}),E&&(0,O.jsxs)("div",{className:"flex w-full flex-col",children:[(0,O.jsx)("p",{children:(0,O.jsx)(j.Z,S({},Z.resolveOutstandingInvoice))}),(0,O.jsx)(i.m,{className:"m-auto mt-2 w-full",loading:f,onClick:U,children:(0,O.jsx)(j.Z,S({},Z.manageSubscriptionButton))})]}),(0,O.jsx)(M.b,{}),(0,O.jsx)("div",{className:"w-full justify-center",children:T.length>0?(0,O.jsxs)(O.Fragment,{children:[(0,O.jsx)("h3",{className:"mb-2 text-base font-bold",children:(0,O.jsx)(j.Z,S({},Z.selectWorkspace))}),(0,O.jsx)(c.b,{data:T})]}):(0,O.jsxs)("div",{className:"flex flex-col gap-6",children:[(0,O.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,O.jsx)("h3",{className:"text-base font-bold",children:(0,O.jsx)(j.Z,S({},Z.createPersonalWorkspace))}),(0,O.jsx)(j.Z,S({},Z.deactivatedWorkspaceReason))]}),(0,O.jsxs)("div",{className:"flex w-full items-center gap-4",children:[a&&a.picture&&(0,O.jsx)(b(),{alt:"Profile",src:a.picture,width:g.EF.medium,height:g.EF.medium,className:"flex items-center justify-center rounded-sm"}),(0,O.jsx)("span",{className:"font-semibold",children:a&&(0,O.jsx)("span",{children:a.name})})]}),(0,O.jsx)("div",{className:"ml-auto",children:(0,O.jsx)(i.m,{title:A.formatMessage(Z.createPersonalWorkspaceButton),loading:f,onClick:async()=>{v(!0),await l.Z.upsertPersonalWorkspace(),(0,n.eV)(o.bC),(0,p.M)()},color:"primary",className:"ml-4"})})]})})]})}):(0,O.jsx)(O.Fragment,{})}let Z=(0,w.vU)({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function C(){let e=(0,u.ec)(u.F_.workspaces),a=(0,n.t)(),s=(0,u.ec)(u.F_.workspaceId),t=e.find(e=>e.id===s),c=(0,m.useRouter)();return((0,x.useEffect)(()=>{null==a||!a.data||t&&t.deactivated||c.push("/")},[a,t,c]),null==a||!a.data||t&&t.deactivated)?(0,O.jsx)(D,{}):(0,O.jsx)("div",{})}},62800:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/workspace/deactivated",function(){return s(50626)}])}},function(e){e.O(0,[3391,7349,9207,6271,4984,6441,8868,5257,7639,6797,5943,5815,5904,488,2888,9774,179],function(){return e(e.s=62800)}),_N_E=e.O()}]);
//# sourceMappingURL=deactivated-15f1d66ef50c65c7.js.map