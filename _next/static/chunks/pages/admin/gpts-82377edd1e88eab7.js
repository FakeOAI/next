(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8298,8086],{42974:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return q},default:function(){return U}});var i=s(94521),n=s(70657),r=s(21904),a=s(62484),l=s(2377),o=s(93223),d=s(4702),c=s(35226),u=s(96053),p=s(48580),g=s(19841),f=s(71126),h=s.n(f),x=s(92379),m=s(62984),w=s(75172),O=s(68306),b=s(50684),j=s(71840),y=s(8735),v=s(94982),k=s(5443),T=s(65530),P=s(69482),S=s(73600),Z=s(651);function N(e){let{value:t,title:s,valueClassName:i,onChange:n,emptyMessage:r}=e,{0:a,1:l}=(0,x.useState)(!1),{0:o,1:d}=(0,x.useState)(""),c=(0,x.useRef)(null),u=()=>{""!==o&&(n([...t,o.trim()]),l(!1),d(""))};return(0,Z.jsxs)(P.Z.Root,{className:"w-auto",children:[(0,Z.jsxs)(P.Z.Header,{children:[(0,Z.jsx)(P.Z.HeaderCell,{children:s}),(0,Z.jsx)(P.Z.HeaderCell,{})]}),(0,Z.jsxs)(P.Z.Body,{children:[t.map((e,s)=>(0,Z.jsxs)(P.Z.Row,{children:[(0,Z.jsx)(P.Z.Cell,{className:i,children:e}),(0,Z.jsx)(P.Z.Cell,{textAlign:"right",children:(0,Z.jsx)(k.z,{type:"button",onClick:()=>{n(t.filter((e,t)=>t!==s))},children:(0,Z.jsx)(S.XHJ,{className:"icon-sm"})})})]},s)),r&&0===t.length?(0,Z.jsx)(P.Z.Row,{children:(0,Z.jsx)(P.Z.Cell,{colSpan:2,className:"text-center text-sm italic",children:r})}):null,(0,Z.jsxs)(P.Z.Row,{children:[(0,Z.jsxs)("div",{className:(0,g.default)("mt-2 flex flex-row gap-2 p-1",!a&&"hidden"),children:[(0,Z.jsx)(T.Z,{className:"w-80",name:"newDomain",value:o,onChange:e=>{d(e.target.value)},ref:c,onPressEnter:u,placeholder:"example.com"}),(0,Z.jsx)(k.z,{className:"grow-0",onClick:u,children:(0,Z.jsx)(m.Z,{id:"svRVol",defaultMessage:"Add"})})]}),!a&&(0,Z.jsxs)(k.z,{type:"button",onClick:()=>{l(!0),setTimeout(()=>{var e;null===(e=c.current)||void 0===e||e.focus()},0)},className:"mt-2",children:[(0,Z.jsx)(S.pOD,{className:"icon-sm inline-block"}),(0,Z.jsx)(m.Z,{id:"J5y3+M",defaultMessage:"Add new domain"})]})]})]})]})}var M=s(49868),_=s(24351),G=s(93322);function A(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?A(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):A(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function D(e){let{title:t,description:s,children:i,upsellEnterprise:n=!1,className:r=""}=e;return(0,Z.jsx)(a.E,{label:(0,Z.jsx)(m.Z,C({},F.enterpriseRequiredMessage)),side:"top",sideOffset:4,disabled:!n,className:"max-w-5xl",children:(0,Z.jsxs)(G.i9,{className:(0,g.default)(n&&"text-token-text-tertiary","max-w-4xl",r),children:[(0,Z.jsxs)(G.A4,{className:"flex items-center gap-3",children:[(0,Z.jsx)(m.Z,C({},t)),n&&(0,Z.jsx)("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:(0,Z.jsx)(m.Z,C({},F.enterpriseUpsellPill))})]}),s&&(0,Z.jsx)(G.Li,{className:"py-2 text-token-text-secondary",children:(0,Z.jsx)(m.Z,C({},s))}),i]})})}function E(e){var t;let{workspaceId:s,label:i,setting:n,defaultValue:r,values:a,disabled:l=!1}=e,d=(0,w.Z)(),p=(0,c.NL)(),{variables:g,mutate:f}=(0,u.D)({mutationFn:e=>{let{setting:t,value:i}=e;return o.Z.setWorkspaceShareSetting(s,t,i)},onSettled:()=>{p.invalidateQueries({queryKey:["workspace-settings"]}),p.invalidateQueries({queryKey:["workspace"]})},onError:()=>{v.m.danger(d.formatMessage(F.featureSettingsUpdateFailed))}});return(0,Z.jsxs)(G.vi,{children:[(0,Z.jsx)("p",{className:"text-md inline-flex items-center",children:(0,Z.jsx)(m.Z,C({},i))}),(0,Z.jsxs)(y.Z.Root,{defaultValue:null!==(t=null==g?void 0:g.value)&&void 0!==t?t:r,onValueChange:e=>{f({setting:n,value:e})},disabled:l,children:[(0,Z.jsxs)(y.Z.Trigger,{className:"text-md focus-visible:border-none",children:[(0,Z.jsx)(y.Z.Value,{}),(0,Z.jsx)(y.Z.Icon,{})]}),(0,Z.jsx)(y.Z.Portal,{children:(0,Z.jsx)(y.Z.Content,{children:a.map((e,t)=>(0,Z.jsx)(y.Z.Item,{className:"text-md",value:e.value,children:(0,Z.jsx)(m.Z,C({},e.display))},t))})})]})]})}function I(e){var t;let{workspaceId:s,value:i,upsellEnterprise:n=!1}=e,a=(0,w.Z)(),l=(0,c.NL)(),{variables:d,mutate:p}=(0,u.D)({mutationFn:e=>{let{value:t}=e;return o.Z.setWorkspaceThirdPartyGPTSetting(s,t)},onSettled:()=>{l.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{v.m.danger(a.formatMessage(F.featureSettingsUpdateFailed))}});return(0,Z.jsxs)(y.Z.Root,{defaultValue:null!==(t=null==d?void 0:d.value)&&void 0!==t?t:i,onValueChange:e=>{p({value:e})},children:[(0,Z.jsxs)(y.Z.Trigger,{className:"border border-token-border-light text-base focus-visible:border-token-border-light",children:[(0,Z.jsx)(y.Z.Value,{}),(0,Z.jsx)(y.Z.Icon,{})]}),(0,Z.jsx)(y.Z.Portal,{children:(0,Z.jsxs)(y.Z.Content,{children:[(0,Z.jsx)(y.Z.Item,{className:"text-base",value:r.NN.ALLOW_ALL,children:(0,Z.jsx)(m.Z,C({},F.allowAllOption))}),!n&&(0,Z.jsx)(y.Z.Item,{className:"text-base",value:r.NN.ALLOW_SPECIFIC,children:(0,Z.jsx)(m.Z,C({},F.ownerApprovedOnlyOption))}),(0,Z.jsx)(y.Z.Item,{className:"text-base",value:r.NN.ALLOW_NONE,children:(0,Z.jsx)(m.Z,C({},F.dontAllowOption))})]})})]})}function R(e){var t;let{workspaceId:s,data:i}=e,n=(0,w.Z)(),l=(0,d.t)(),g=(0,c.NL)(),{0:f,1:h}=(0,x.useState)([]),{value:O}=(0,p.sB)("3298726333"),y=(0,u.D)({mutationFn:e=>{let{value:t}=e;return o.Z.setWorkspaceCustomActionsDomains(s,t)},onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{v.m.danger(n.formatMessage(F.featureSettingsUpdateFailed))}});if(null==l)return null;let k=l.isTeam(),T=(0,Z.jsx)(D,{title:F.thirdPartyGPTsTitle,description:F.thirdPartyGPTsDescription,className:"border-b border-token-border-light pb-4",children:(0,Z.jsx)("div",{children:(0,Z.jsx)(I,{workspaceId:s,value:i.allow_third_party_gpts,upsellEnterprise:k})})}),P=(0,Z.jsx)(D,{title:F.sidebarTitle,children:(0,Z.jsx)(_.Z,{account:l,showThirdParty:!k&&i.allow_third_party_gpts===r.NN.ALLOW_SPECIFIC})}),S=null!=i.allowed_custom_actions_domains||!1===i.beta_settings.workspace_gpt_custom_actions;return(0,Z.jsxs)(G.$V,{className:"max-w-5xl",children:[k&&T,k&&l.isOwnerOfAccount()&&P,k&&(0,Z.jsx)(G.W8,{}),(0,Z.jsx)(D,{title:F.sharingSettingsTitle,upsellEnterprise:k,children:(0,Z.jsx)(G.qQ,{children:(0,Z.jsx)(E,{workspaceId:s,label:F.gptSharingTitle,disabled:k,setting:r.bb.GPT_SHARE_SETTINGS,defaultValue:i.share_settings.gpt_share_setting,values:[{display:F.anyOneSelect,value:r.Gz.ANYONE},{display:F.workspaceMembersOnlySelect,value:r.Gz.WORKSPACE_ONLY},{display:F.inviteOnlySelect,value:r.Gz.NO_ONE}]})})}),(0,Z.jsx)(D,{title:F.workspaceGPTsTitle,description:F.workspaceGPTsDescription,upsellEnterprise:k,children:(0,Z.jsxs)(G.qQ,{children:[(0,Z.jsx)(M.K,{label:F.browseOptionTitle,feature:r.Nh.BROWSING,value:i.beta_settings.browsing,workspaceId:s,tooltip:F.browseTooltip,disabled:k}),O?(0,Z.jsxs)("div",{className:"flex flex-col gap-4 py-6",children:[(0,Z.jsx)("div",{className:"text-xl font-semibold",children:(0,Z.jsx)(m.Z,{id:"ugI3Yt",defaultMessage:"GPT actions"})}),(0,Z.jsx)("div",{className:"py-2 text-sm text-token-text-secondary",children:(0,Z.jsx)(m.Z,{id:"HY2eof",defaultMessage:"GPT actions allow GPTs to call third-party APIs for tasks such as retrieving or modifying data. GPT actions are defined by GPT builders, and you can limit the domains that can be used for GPTs created in your workspace."})}),(0,Z.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,Z.jsx)(j.Z,{checked:!S,id:"allow-all-domains",onChange:e=>{e.currentTarget.checked?(h(i.allowed_custom_actions_domains),y.mutate({value:null})):y.mutate({value:null!=f?f:[]})},label:(0,Z.jsxs)("span",{className:"flex flex-row items-center",children:[(0,Z.jsx)(m.Z,{id:"WnWoqJ",defaultMessage:"Allow all domains for GPT actions"}),(0,Z.jsx)(a.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,Z.jsx)(m.Z,{id:"KjJtEm",defaultMessage:"Limit the Internet domains that can be used by GPTs created in your workspace. This does not apply to third-party GPTs."}),side:"top",children:(0,Z.jsx)(M.I,{})})]})}),y.isPending&&(0,Z.jsx)(b.Z,{})]}),S&&(0,Z.jsx)(N,{value:null!==(t=i.allowed_custom_actions_domains)&&void 0!==t?t:[],title:n.formatMessage({id:"YetDcq",defaultMessage:"Domains"}),onChange:e=>{y.mutate({value:e})},emptyMessage:n.formatMessage({id:"rFH4IP",defaultMessage:"No domains added. No GPT actions will be allowed."})})]}):(0,Z.jsx)(M.K,{label:F.customActionsOptionTitle,feature:r.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,value:i.beta_settings.workspace_gpt_custom_actions,workspaceId:s,tooltip:F.customActionsTooltip,disabled:k})]})}),!k&&T,!k&&l.isOwnerOfAccount()&&P]})}function L(e){let{currentWorkspaceId:t}=e,{data:s,isLoading:i}=(0,l.C)(t),r=(0,w.Z)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(h(),{children:(0,Z.jsx)("title",{children:r.formatMessage(F.sidebarTitle)})}),(0,Z.jsx)(n.yG,{title:r.formatMessage(F.sidebarTitle)}),(0,Z.jsx)(n.hb,{showSpinner:i,children:void 0===s?null:(0,Z.jsx)(R,{workspaceId:t,data:s})})]})}let F=(0,O.vU)({sidebarTitle:{id:"workspaceSettingsOld.sidebarTitle",defaultMessage:"GPTs"},allowAllOption:{id:"workspaceSettingsOld.allowAllOption",defaultMessage:"Allow all"},ownerApprovedOnlyOption:{id:"workspaceSettingsOld.ownerApprovedOnlyOption",defaultMessage:"Owner-approved only"},dontAllowOption:{id:"workspaceSettingsOld.dontAllowOption",defaultMessage:"Don't allow"},retentionPolicyTitle:{id:"workspaceSettingsOld.retentionPolicyTitle",defaultMessage:"Retention policy"},thirdPartyGPTsTitle:{id:"workspaceSettingsOld.thirdPartyGPTsTitle",defaultMessage:"Third-party"},thirdPartyGPTsDescription:{id:"workspaceSettingsOld.thirdPartyGPTsDescription",defaultMessage:"Manage whether members can use GPTs created outside your workspace."},customActionsTooltip:{id:"workspaceSettingsOld.customActionsTooltip",defaultMessage:"Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders."},browseTooltip:{id:"workspaceSettingsOld.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},customActionsOptionTitle:{id:"workspaceSettingsOld.pluginsOptionTitle.0",defaultMessage:"Custom actions"},browseOptionTitle:{id:"workspaceSettingsOld.browseOptionTitle",defaultMessage:"Browsing with Bing"},workspaceGPTsTitle:{id:"workspaceSettingsOld.workspaceGPTsTitle",defaultMessage:"Workspace"},appearanceTitle:{id:"workspaceSettingsOld.appearanceTitle",defaultMessage:"Appearance"},sharingSettingsTitle:{id:"workspaceSettingsOld.sharingSettingsTitle",defaultMessage:"Sharing"},gptSharingTitle:{id:"workspaceSettingsOld.gptSharingTitle",defaultMessage:"GPTs can be shared with..."},chatSharingTitle:{id:"workspaceSettingsOld.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceMembersOnlySelect:{id:"workspaceSettingsOld.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},anyOneSelect:{id:"workspaceSettingsOld.anyOneSelect",defaultMessage:"Anyone"},noOneSelect:{id:"workspaceSettingsOld.noOneSelect",defaultMessage:"No one"},inviteOnlySelect:{id:"workspaceSettingsOld.inviteOnlySelect",defaultMessage:"Invite only"},featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettingsOld.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettingsOld.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettingsOld.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettingsOld.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettingsOld.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettingsOld.retentionChange",defaultMessage:"Contact your account manager to change this setting."},workspaceGPTsDescription:{id:"workspaceSettingsOld.workspaceGPTsDescription",defaultMessage:"Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs."},enterpriseUpsellPill:{id:"workspaceSettingsOld.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettingsOld.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettingsOld.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},shareRecipientTitlePrivate:{id:"workspaceSettingsOld.shareRecipientTitlePrivate",defaultMessage:"Private"},shareRecipientTitleLink:{id:"workspaceSettingsOld.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettingsOld.shareRecipientTitlePublic",defaultMessage:"Public"}});function W(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}var q=!0;function U(e){return(0,Z.jsx)(L,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?W(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},e))}U.getLayout=function(e){return(0,Z.jsx)(n.ZP,{mobilePageTitle:"GPTs",requireOwnerPrivileges:!0,children:e})}},49868:function(e,t,s){"use strict";s.d(t,{I:function(){return w},K:function(){return O}});var i=s(94521),n=s(62484),r=s(93223),a=s(35226),l=s(96053),o=s(75172),d=s(62984),c=s(68306),u=s(73600),p=s(65321),g=s(94982),f=s(93322),h=s(651);function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function w(){return(0,h.jsx)(u.szr,{className:"icon-sm ml-1 text-token-text-tertiary"})}function O(e){var t;let{workspaceId:s,Icon:i,label:c,feature:u,value:x,tooltip:O,disabled:j=!1}=e,y=(0,o.Z)(),v=(0,a.NL)(),{variables:k,mutate:T}=(0,l.D)({mutationFn:e=>{let{feature:t,enabled:i}=e;return r.Z.setWorkspaceBetaFeature(s,t,i)},onSettled:()=>{v.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{g.m.danger(y.formatMessage(b.featureSettingsUpdateFailed))}});return(0,h.jsxs)(f.vi,{className:"justify-start py-6",children:[(0,h.jsx)(p.wy,{label:"",disabled:j,enabled:null!==(t=null==k?void 0:k.enabled)&&void 0!==t?t:x,onChange:e=>{T({feature:u,enabled:e})}}),(0,h.jsxs)("p",{className:"text-md inline-flex items-center",children:[i&&(0,h.jsx)(i,{className:"icon-md mr-2"}),(0,h.jsx)(d.Z,m({},c)),O&&(0,h.jsx)(n.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,h.jsx)(d.Z,m({},O)),side:"top",children:(0,h.jsx)(w,{})})]})]})}let b=(0,c.vU)({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}})},93322:function(e,t,s){"use strict";s.d(t,{$V:function(){return g},A4:function(){return f},Li:function(){return w},W8:function(){return b},i$:function(){return h},i9:function(){return m},qQ:function(){return x},vi:function(){return O}});var i,n,r,a,l,o,d,c,u=s(41141),p=s(74091);let g=p.Z.div(i||(i=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),f=p.Z.div(n||(n=(0,u.Z)(["text-xl font-semibold"]))),h=p.Z.div(r||(r=(0,u.Z)(["text-base font-semibold"]))),x=p.Z.div(a||(a=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),m=p.Z.div(l||(l=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),w=p.Z.div(o||(o=(0,u.Z)(["text-sm"]))),O=p.Z.div(d||(d=(0,u.Z)(["flex justify-between py-4 gap-4"]))),b=p.Z.hr(c||(c=(0,u.Z)(["max-w-xl border-token-border-light"])))},15888:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/gpts",function(){return s(42974)}])}},function(e){e.O(0,[3391,7349,9207,6271,4984,6441,8868,8794,5257,7639,6797,5943,5815,5904,7647,657,766,9987,8230,5720,2481,2888,9774,179],function(){return e(e.s=15888)}),_N_E=e.O()}]);
//# sourceMappingURL=gpts-82377edd1e88eab7.js.map