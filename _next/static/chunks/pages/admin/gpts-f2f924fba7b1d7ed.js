(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8298],{79691:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return R},default:function(){return F}});var i=s(72438),r=s(31605),n=s(58554),a=s(46),l=s(52470),o=s(71727),c=s(88324),d=s(82473),u=s(25494),p=s(19841),g=s(83474),f=s.n(g),O=s(84692),h=s(9063),w=s(68498),b=s(75967),y=s(65733),x=s(74922),j=s(84401),m=s(92389),S=s(35250);function k(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function T(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?k(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):k(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function P(){return(0,S.jsx)(x.aU,{className:"icon-sm ml-1 text-token-text-tertiary"})}function v(e){var t;let{workspaceId:s,label:i,feature:r,value:n,tooltip:l,disabled:c=!1}=e,p=(0,h.Z)(),g=(0,d.NL)(),{variables:f,mutate:w}=(0,u.D)({mutationFn:e=>{let{feature:t,enabled:i}=e;return o.Z.setWorkspaceBetaFeature(s,t,i)},onSettled:()=>{g.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{y.m.danger(p.formatMessage(Z.featureSettingsUpdateFailed))}});return(0,S.jsxs)(m.vi,{className:"justify-start py-6",children:[(0,S.jsx)(j.wy,{label:"",disabled:c,enabled:null!==(t=null==f?void 0:f.enabled)&&void 0!==t?t:n,onChange:e=>{w({feature:r,enabled:e})}}),(0,S.jsxs)("p",{className:"text-md inline-flex items-center",children:[(0,S.jsx)(O.Z,T({},i)),l&&(0,S.jsx)(a.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,S.jsx)(O.Z,T({},l)),side:"top",children:(0,S.jsx)(P,{})})]})]})}let Z=(0,w.vU)({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}});var M=s(74604);function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}function _(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function A(e){let{title:t,description:s,children:i,upsellEnterprise:r=!1,className:n=""}=e;return(0,S.jsx)(a.E,{label:(0,S.jsx)(O.Z,_({},I.enterpriseRequiredMessage)),side:"top",sideOffset:4,disabled:!r,className:"max-w-5xl",children:(0,S.jsxs)(m.i9,{className:(0,p.default)(r&&"text-token-text-tertiary","max-w-4xl",n),children:[(0,S.jsxs)(m.A4,{className:"flex items-center gap-3",children:[(0,S.jsx)(O.Z,_({},t)),r&&(0,S.jsx)("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:(0,S.jsx)(O.Z,_({},I.enterpriseUpsellPill))})]}),s&&(0,S.jsx)(m.Li,{className:"py-2 text-token-text-secondary",children:(0,S.jsx)(O.Z,_({},s))}),i]})})}function G(e){var t;let{workspaceId:s,label:i,setting:r,defaultValue:n,values:a,disabled:l=!1}=e,c=(0,h.Z)(),p=(0,d.NL)(),{variables:g,mutate:f}=(0,u.D)({mutationFn:e=>{let{setting:t,value:i}=e;return o.Z.setWorkspaceShareSetting(s,t,i)},onSettled:()=>{p.invalidateQueries({queryKey:["workspace-settings"]}),p.invalidateQueries({queryKey:["workspace"]})},onError:()=>{y.m.danger(c.formatMessage(I.featureSettingsUpdateFailed))}});return(0,S.jsxs)(m.vi,{children:[(0,S.jsx)("p",{className:"text-md inline-flex items-center",children:(0,S.jsx)(O.Z,_({},i))}),(0,S.jsxs)(b.Z.Root,{defaultValue:null!==(t=null==g?void 0:g.value)&&void 0!==t?t:n,onValueChange:e=>{f({setting:r,value:e})},disabled:l,children:[(0,S.jsxs)(b.Z.Trigger,{className:"text-md focus-visible:border-none",children:[(0,S.jsx)(b.Z.Value,{}),(0,S.jsx)(b.Z.Icon,{})]}),(0,S.jsx)(b.Z.Portal,{children:(0,S.jsx)(b.Z.Content,{children:a.map((e,t)=>(0,S.jsx)(b.Z.Item,{className:"text-md",value:e.value,children:(0,S.jsx)(O.Z,_({},e.display))},t))})})]})]})}function E(e){var t;let{workspaceId:s,value:i,upsellEnterprise:r=!1}=e,a=(0,h.Z)(),l=(0,d.NL)(),{variables:c,mutate:p}=(0,u.D)({mutationFn:e=>{let{value:t}=e;return o.Z.setWorkspaceThirdPartyGPTSetting(s,t)},onSettled:()=>{l.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{y.m.danger(a.formatMessage(I.featureSettingsUpdateFailed))}});return(0,S.jsxs)(b.Z.Root,{defaultValue:null!==(t=null==c?void 0:c.value)&&void 0!==t?t:i,onValueChange:e=>{p({value:e})},children:[(0,S.jsxs)(b.Z.Trigger,{className:"border border-token-border-light text-base focus-visible:border-token-border-light",children:[(0,S.jsx)(b.Z.Value,{}),(0,S.jsx)(b.Z.Icon,{})]}),(0,S.jsx)(b.Z.Portal,{children:(0,S.jsxs)(b.Z.Content,{children:[(0,S.jsx)(b.Z.Item,{className:"text-base",value:n.NN.ALLOW_ALL,children:(0,S.jsx)(O.Z,_({},I.allowAllOption))}),!r&&(0,S.jsx)(b.Z.Item,{className:"text-base",value:n.NN.ALLOW_SPECIFIC,children:(0,S.jsx)(O.Z,_({},I.ownerApprovedOnlyOption))}),(0,S.jsx)(b.Z.Item,{className:"text-base",value:n.NN.ALLOW_NONE,children:(0,S.jsx)(O.Z,_({},I.dontAllowOption))})]})})]})}function C(e){let{workspaceId:t,data:s}=e,i=(0,c.t)();if(null==i)return null;let r=i.isTeam(),a=(0,S.jsx)(A,{title:I.thirdPartyGPTsTitle,description:I.thirdPartyGPTsDescription,className:"border-b border-token-border-light pb-4",children:(0,S.jsx)("div",{children:(0,S.jsx)(E,{workspaceId:t,value:s.allow_third_party_gpts,upsellEnterprise:r})})}),l=(0,S.jsx)(A,{title:I.sidebarTitle,children:(0,S.jsx)(M.Z,{account:i,showThirdParty:!r&&s.allow_third_party_gpts==n.NN.ALLOW_SPECIFIC})});return(0,S.jsxs)(m.$V,{className:"max-w-5xl",children:[r&&a,r&&i.isOwnerOfAccount()&&l,r&&(0,S.jsx)(m.W8,{}),(0,S.jsx)(A,{title:I.sharingSettingsTitle,upsellEnterprise:r,children:(0,S.jsx)(m.qQ,{children:(0,S.jsx)(G,{workspaceId:t,label:I.gptSharingTitle,disabled:r,setting:n.bb.GPT_SHARE_SETTINGS,defaultValue:s.share_settings.gpt_share_setting,values:[{display:I.anyOneSelect,value:n.Gz.ANYONE},{display:I.workspaceMembersOnlySelect,value:n.Gz.WORKSPACE_ONLY},{display:I.inviteOnlySelect,value:n.Gz.NO_ONE}]})})}),(0,S.jsx)(A,{title:I.workspaceGPTsTitle,description:I.workspaceGPTsDescription,upsellEnterprise:r,children:(0,S.jsxs)(m.qQ,{children:[(0,S.jsx)(v,{label:I.browseOptionTitle,feature:n.Nh.BROWSING,value:s.beta_settings.browsing,workspaceId:t,tooltip:I.browseTooltip,disabled:r}),(0,S.jsx)(v,{label:I.customActionsOptionTitle,feature:n.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,value:s.beta_settings.workspace_gpt_custom_actions,workspaceId:t,tooltip:I.customActionsTooltip,disabled:r})]})}),!r&&a,!r&&i.isOwnerOfAccount()&&l]})}function D(e){let{currentWorkspaceId:t}=e,{data:s,isLoading:i}=(0,l.C)(t),n=(0,h.Z)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(f(),{children:(0,S.jsx)("title",{children:n.formatMessage(I.sidebarTitle)})}),(0,S.jsx)(r.yG,{title:n.formatMessage(I.sidebarTitle)}),(0,S.jsx)(r.hb,{showSpinner:i,children:void 0===s?null:(0,S.jsx)(C,{workspaceId:t,data:s})})]})}let I=(0,w.vU)({sidebarTitle:{id:"workspaceSettingsOld.sidebarTitle",defaultMessage:"GPTs"},allowAllOption:{id:"workspaceSettingsOld.allowAllOption",defaultMessage:"Allow all"},ownerApprovedOnlyOption:{id:"workspaceSettingsOld.ownerApprovedOnlyOption",defaultMessage:"Owner-approved only"},dontAllowOption:{id:"workspaceSettingsOld.dontAllowOption",defaultMessage:"Don't allow"},retentionPolicyTitle:{id:"workspaceSettingsOld.retentionPolicyTitle",defaultMessage:"Retention policy"},thirdPartyGPTsTitle:{id:"workspaceSettingsOld.thirdPartyGPTsTitle",defaultMessage:"Third-party"},thirdPartyGPTsDescription:{id:"workspaceSettingsOld.thirdPartyGPTsDescription",defaultMessage:"Manage whether members can use GPTs created outside your workspace."},customActionsTooltip:{id:"workspaceSettingsOld.customActionsTooltip",defaultMessage:"Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders."},browseTooltip:{id:"workspaceSettingsOld.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},customActionsOptionTitle:{id:"workspaceSettingsOld.pluginsOptionTitle.0",defaultMessage:"Custom actions"},browseOptionTitle:{id:"workspaceSettingsOld.browseOptionTitle",defaultMessage:"Browsing with Bing"},workspaceGPTsTitle:{id:"workspaceSettingsOld.workspaceGPTsTitle",defaultMessage:"Workspace"},appearanceTitle:{id:"workspaceSettingsOld.appearanceTitle",defaultMessage:"Appearance"},sharingSettingsTitle:{id:"workspaceSettingsOld.sharingSettingsTitle",defaultMessage:"Sharing"},gptSharingTitle:{id:"workspaceSettingsOld.gptSharingTitle",defaultMessage:"GPTs can be shared with..."},chatSharingTitle:{id:"workspaceSettingsOld.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceMembersOnlySelect:{id:"workspaceSettingsOld.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},anyOneSelect:{id:"workspaceSettingsOld.anyOneSelect",defaultMessage:"Anyone"},noOneSelect:{id:"workspaceSettingsOld.noOneSelect",defaultMessage:"No one"},inviteOnlySelect:{id:"workspaceSettingsOld.inviteOnlySelect",defaultMessage:"Invite only"},featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettingsOld.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettingsOld.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettingsOld.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettingsOld.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettingsOld.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettingsOld.retentionChange",defaultMessage:"Contact your account manager to change this setting."},workspaceGPTsDescription:{id:"workspaceSettingsOld.workspaceGPTsDescription",defaultMessage:"Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs."},enterpriseUpsellPill:{id:"workspaceSettingsOld.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettingsOld.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettingsOld.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},shareRecipientTitlePrivate:{id:"workspaceSettingsOld.shareRecipientTitlePrivate",defaultMessage:"Private"},shareRecipientTitleLink:{id:"workspaceSettingsOld.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettingsOld.shareRecipientTitlePublic",defaultMessage:"Public"}});function L(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,i)}return s}var R=!0;function F(e){return(0,S.jsx)(D,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?L(Object(s),!0).forEach(function(t){(0,i.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):L(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},e))}F.getLayout=function(e){return(0,S.jsx)(r.ZP,{mobilePageTitle:"GPTs",requireOwnerPrivileges:!0,children:e})}},92389:function(e,t,s){"use strict";s.d(t,{$V:function(){return g},A4:function(){return f},Li:function(){return b},W8:function(){return x},i$:function(){return O},i9:function(){return w},qQ:function(){return h},vi:function(){return y}});var i,r,n,a,l,o,c,d,u=s(25927),p=s(21389);let g=p.Z.div(i||(i=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),f=p.Z.div(r||(r=(0,u.Z)(["text-xl font-medium"]))),O=p.Z.div(n||(n=(0,u.Z)(["text-base font-medium"]))),h=p.Z.div(a||(a=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),w=p.Z.div(l||(l=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),b=p.Z.div(o||(o=(0,u.Z)(["text-sm"]))),y=p.Z.div(c||(c=(0,u.Z)(["flex justify-between py-4 gap-4"]))),x=p.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},82285:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/gpts",function(){return s(79691)}])}},function(e){e.O(0,[5960,1741,6786,6753,3656,4736,4848,5251,9598,6965,1978,2707,9427,3445,1605,2888,9774,179],function(){return e(e.s=82285)}),_N_E=e.O()}]);
//# sourceMappingURL=gpts-f2f924fba7b1d7ed.js.map