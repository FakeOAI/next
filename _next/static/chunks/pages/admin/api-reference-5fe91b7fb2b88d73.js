(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{20356:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(24040),u=n(14816),l=n(50406),i=n(43128),s=n(92379),a=n(11232),c=n(93223),o=n(651);function d(){let e=(0,i.useRouter)(),t=(0,r.ec)(e=>e.currentWorkspace),n=(0,r.aF)(),{0:d,1:p}=(0,s.useState)(void 0),{data:f}=(0,u.a)({queryKey:["enterprise_compliance_spec",null==t?void 0:t.id],queryFn:()=>t&&c.Z.getComplianceSpecification(t.id),enabled:!!t});return((0,s.useEffect)(()=>{t?p(null!=t||n&&(0,l.yl)(n)):p(void 0)},[t,n]),(0,s.useEffect)(()=>{!1===d&&e.push("/admin")},[d,e]),d)?(0,o.jsx)("div",{className:"bg-white",children:f&&(0,o.jsx)(a.RedocStandalone,{spec:f})}):null}},24040:function(e,t,n){"use strict";n.d(t,{F_:function(){return E},aF:function(){return f},e2:function(){return P},ec:function(){return b},m0:function(){return O}});var r=n(94521),u=n(14718),l=n(14816),i=n(21904),s=n(93223),a=n(4702);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}async function d(){let e=await s.Z.getMe();return{id:e.id,email:e.email,name:e.name,picture:e.picture,created:e.created}}let p=(0,u.C)({queryKey:["user"],queryFn:d,staleTime:1/0});function f(){return(0,l.a)(p).data}let v={currentWorkspace:null,subscriptionStatus:null,workspaces:[]};function b(e){var t;let n=null!==(t=(0,l.a)(o(o({},(0,a.KP)()),{},{select:e=>{var t,n;let r=(0,a.EI)(e);return{currentWorkspace:null!==(t=null==r?void 0:r.data)&&void 0!==t?t:null,subscriptionStatus:null!==(n=null==r?void 0:r.data.subscriptionStatus)&&void 0!==n?n:null,workspaces:e.accountItems.map(e=>e.data)}}})).data)&&void 0!==t?t:v;return e?e(n):n}let E={hasMultipleWorkspaces:e=>{let{workspaces:t}=e;return t.length>1},isPersonalWorkspace:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.PERSONAL},isBusinessWorkspace:e=>{let{currentWorkspace:t}=e;return null!=t?t.structure===i.CZ.WORKSPACE:void 0},isEnterprisePlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.ENTERPRISE},isEduPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.EDU},isEnterpriseOrEduPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.ENTERPRISE||(null==t?void 0:t.planType)===i.D8.EDU},isTeamPlan:e=>{let{subscriptionStatus:t}=e;return(null==t?void 0:t.planType)===i.D8.TEAM},isAdmin:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.ADMIN},isOwner:e=>{let{currentWorkspace:t}=e;return null!=t&&t.role===i.r3.OWNER},workspaceId:e=>{let{currentWorkspace:t}=e;return null!=t?t.id:null},businessWorkspace:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.WORKSPACE?t:void 0},businessWorkspaceId:e=>{let{currentWorkspace:t}=e;return(null==t?void 0:t.structure)===i.CZ.WORKSPACE?t.id:void 0},hasPaidSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasPaidSubscription},wasPaidCustomer:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.wasPaidCustomer},hasCustomerObject:e=>{let{subscriptionStatus:t}=e;return null!=t&&t.hasCustomerObject},hasUnclaimedFreeTrial:e=>{var t;let{currentWorkspace:n}=e;return null==n||null===(t=n.promoData)||void 0===t?void 0:t.has_claimed_free_trial},lastActiveSubscription:e=>{let{subscriptionStatus:t}=e;return null!=t?t.lastActiveSubscription:null},workspaces:e=>{let{workspaces:t}=e;return t},accountUserId:e=>{let{currentWorkspace:t}=e;return null==t?void 0:t.accountUserId}};function O(){let e=(0,a.t)();if(null!=e)return e.hasPlusFeatures()}function P(){var e;return null===(e=(0,a.t)())||void 0===e?void 0:e.data.subscriptionStatus.lastActiveSubscription}},59273:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/api-reference",function(){return n(20356)}])},81040:function(){},61492:function(){},40782:function(){},85176:function(){},32523:function(){},40235:function(){},41334:function(){}},function(e){e.O(0,[1205,5442,4984,1703,5827,2888,9774,179],function(){return e(e.s=59273)}),_N_E=e.O()}]);
//# sourceMappingURL=api-reference-5fe91b7fb2b88d73.js.map