(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{51516:function(e,t,n){"use strict";function s(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}n.d(t,{Z:function(){return s}})},68770:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return G},default:function(){return U}});var s=n(94521),r=n(70657),o=n(21904),i=n(49868),a=n(94631),l=n(62484),c=n(66246),d=n(2377),u=n(93223),p=n(4702),g=n(24040),f=n(84468),m=n(35226),x=n(96053),h=n(19841),y=n(71126),b=n.n(y),j=n(92379),k=n(26123),v=n(72256),O=n(25940),w=n(5443),S=n(38417),M=n(8735),C=n(49217),T=n(65321),Z=n(94982),N=n(93322),P=n(651);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function E(e){let t,{conversationTTL:n}=e,s=(0,k.Z)();return t=null==n?s.formatMessage(B.retentionInfinite):7776e3===n?s.formatMessage(B.retentionNinetyDays):31536e3===n?s.formatMessage(B.retentionOneYear):s.formatMessage(B.retentionCustomDays,{num:Math.floor(n/86400)}),(0,P.jsxs)(N.vi,{children:[(0,P.jsx)("p",{className:"inline-flex items-center text-base",children:(0,P.jsx)(v.Z,D({},B.conversationRetention))}),(0,P.jsx)(l.u,{label:s.formatMessage(B.retentionSettingTooltip),children:t})]})}function I(e){let{title:t,description:n,children:s,upsellEnterprise:r=!1,descriptionValues:o={}}=e;return(0,P.jsx)(l.E,{label:(0,P.jsx)(v.Z,D({},B.enterpriseRequiredMessage)),side:"top",sideOffset:4,disabled:!r,className:"max-w-xl",children:(0,P.jsxs)(N.i9,{className:(0,h.default)(r&&"text-token-text-tertiary"),children:[(0,P.jsxs)(N.A4,{className:"flex items-center gap-3",children:[(0,P.jsx)(v.Z,D({},t)),r&&(0,P.jsx)("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:(0,P.jsx)(v.Z,D({},B.enterpriseUpsellPill))})]}),n&&(0,P.jsx)(N.Li,{className:"py-2 text-token-text-secondary",children:n&&"object"==typeof n&&"id"in n?(0,P.jsx)(v.Z,D(D({},n),{},{values:o})):n}),s]})})}function W(e){var t;let{workspaceId:n,label:s,setting:r,defaultValue:o,values:i,disabled:a=!1}=e,l=(0,k.Z)(),c=(0,m.NL)(),{variables:d,mutate:p}=(0,x.D)({mutationFn:e=>{let{setting:t,value:s}=e;return u.Z.setWorkspaceShareSetting(n,t,s)},onSettled:()=>{c.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{Z.m.danger(l.formatMessage(B.featureSettingsUpdateFailed))}});return(0,P.jsxs)(N.vi,{children:[(0,P.jsx)("p",{className:"text-md inline-flex items-center",children:(0,P.jsx)(v.Z,D({},s))}),(0,P.jsxs)(M.Z.Root,{defaultValue:null!==(t=null==d?void 0:d.value)&&void 0!==t?t:o,onValueChange:e=>{p({setting:r,value:e})},disabled:a,children:[(0,P.jsxs)(M.Z.Trigger,{className:"text-md focus-visible:border-none",children:[(0,P.jsx)(M.Z.Value,{}),(0,P.jsx)(M.Z.Icon,{})]}),(0,P.jsx)(M.Z.Portal,{children:(0,P.jsx)(M.Z.Content,{children:i.map((e,t)=>(0,P.jsx)(M.Z.Item,{className:"text-md",value:e.value,children:(0,P.jsx)(v.Z,D({},e.display))},t))})})]})]})}function F(e){let{onConfirm:t,onClose:n}=e,s=(0,k.Z)();return(0,P.jsx)(C.Z,{type:"warning",isOpen:!0,onClose:n,title:s.formatMessage(B.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:(0,P.jsx)(w.z,{color:"danger",onClick:t,children:(0,P.jsx)(v.Z,D({},B.deleteWorkspaceMemoryModalConfirm))}),secondaryButton:(0,P.jsx)(w.z,{onClick:n,color:"secondary",children:(0,P.jsx)(v.Z,D({},B.deleteWorkspaceMemoryModalCancel))}),children:(0,P.jsx)("div",{className:"mb-2 text-sm text-token-text-primary",children:(0,P.jsx)(v.Z,D(D({},B.deleteWorkspaceMemoryModalInfo),{},{values:{b:e=>(0,P.jsx)("b",{children:e})}}))})})}function L(e){var t,n;let{workspaceId:s,data:r}=e,l=(0,g.ec)(g.F_.isTeamPlan),d=(0,p.t)(),h=(0,k.Z)(),y=(0,f.tv)(),{showWorkspaceSettings:b}=(0,a.r)(),{0:O,1:w}=(0,j.useState)(!1),M=(0,m.NL)(),{variables:C,mutate:_}=(0,x.D)({mutationFn:e=>{let{feature:t,enabled:n}=e;return u.Z.setWorkspaceBetaFeature(s,t,n)},onSettled:()=>{M.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{Z.m.danger(h.formatMessage(B.featureSettingsUpdateFailed))}});return(0,P.jsxs)(N.$V,{children:[l&&(0,P.jsx)(N.W8,{}),(0,P.jsxs)(I,{title:B.workspaceDetails,children:[(0,P.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,P.jsx)(v.Z,{id:"SgdcRQ",defaultMessage:"Organization ID"}),(0,P.jsx)(S.Z,{value:null!==(t=null==d?void 0:d.data.organizationId)&&void 0!==t?t:"",onCopied:()=>Z.m.success(h.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),(0,P.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,P.jsx)(v.Z,{id:"yFldxx",defaultMessage:"Workspace ID"}),(0,P.jsx)(S.Z,{value:s,onCopied:()=>Z.m.success(h.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),(0,P.jsx)(I,{title:B.sharingSettingsTitle,upsellEnterprise:l,children:(0,P.jsx)(N.qQ,{children:(0,P.jsx)(W,{workspaceId:s,label:B.chatSharingTitle,setting:o.bb.CHAT_SHARE_SETTINGS,disabled:l,defaultValue:r.share_settings.chat_share_setting,values:[{display:B.workspaceMembersOnlySelect,value:o.Gz.WORKSPACE_ONLY},{display:B.noOneSelect,value:o.Gz.NO_ONE}]})})}),y&&!l&&(0,P.jsx)(I,{title:B.memoryFeatureSettingsTitle,description:B.workspaceMemoryDescription,descriptionValues:{link:e=>(0,P.jsx)("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:e})},upsellEnterprise:l,children:(0,P.jsx)(N.qQ,{children:(0,P.jsxs)(N.vi,{className:"justify-start py-6",children:[(0,P.jsx)(T.wy,{label:"",disabled:l,enabled:null!==(n=null==C?void 0:C.enabled)&&void 0!==n?n:r.beta_settings.sunshine,onChange:e=>{e?_({feature:o.Nh.MEMORY,enabled:e}):w(!0)}}),(0,P.jsx)("p",{className:"text-md inline-flex items-center",children:(0,P.jsx)(v.Z,D({},B.memoryOptionTitle))})]})})}),O&&(0,P.jsx)(F,{onConfirm:()=>{_({feature:o.Nh.MEMORY,enabled:!1}),w(!1)},onClose:()=>{w(!1)}}),(0,P.jsx)(I,{title:B.retentionPolicyTitle,description:B.retentionChange,upsellEnterprise:l,children:(0,P.jsx)(E,{conversationTTL:r.conversation_ttl})}),b&&(0,P.jsx)(I,{title:B.contextConnectorsTitle,upsellEnterprise:l,description:(0,P.jsx)(v.Z,D(D({},B.contextConnectorsSubtitle),{},{values:{helpCenterLink:(0,P.jsx)("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:(0,P.jsx)(v.Z,D({},B.contextConnectorsHelpCenterLink))})}})),children:(0,P.jsx)(N.qQ,{children:(0,P.jsxs)(N.qQ,{children:[(0,P.jsx)(i.K,{disabled:l,label:B.contextConnectorsGoogleDrive,Icon:c.Gle,feature:o.Nh.CONTEXT_CONNECTOR_GDRIVE,value:r.beta_settings.context_connector_gdrive,workspaceId:s}),(0,P.jsx)(i.K,{disabled:l,label:B.contextConnectorsO365Business,Icon:c.ur6,tooltip:B.contextConnectorsO365BusinessTooltip,feature:o.Nh.CONTEXT_CONNECTOR_O365_BUSINESS,value:r.beta_settings.context_connector_o365_business,workspaceId:s}),(0,P.jsx)(i.K,{disabled:l,label:B.contextConnectorsO365Personal,Icon:c.ur6,tooltip:B.contextConnectorsO365PersonalTooltip,feature:o.Nh.CONTEXT_CONNECTOR_O365_PERSONAL,value:r.beta_settings.context_connector_o365_personal,workspaceId:s})]})})})]})}function R(e){let{currentWorkspaceId:t}=e,{data:n,isLoading:s}=(0,d.C)(t),o=(0,k.Z)();return(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(b(),{children:(0,P.jsx)("title",{children:o.formatMessage(B.title)})}),(0,P.jsx)(r.yG,{title:o.formatMessage(B.title)}),(0,P.jsx)(r.hb,{showSpinner:s,children:void 0===n?null:(0,P.jsx)(L,{workspaceId:t,data:n})})]})}let B=(0,O.vU)({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365Personal:{id:"workspaceSettings.contextConnectorsO365Personal",defaultMessage:"Microsoft OneDrive Personal"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365Business:{id:"workspaceSettings.contextConnectorsO365Business",defaultMessage:"Microsoft OneDrive for Business"},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}var G=!0;function U(e){return(0,P.jsx)(R,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))}U.getLayout=function(e){return(0,P.jsx)(r.ZP,{mobilePageTitle:"Settings",requireAdminPrivileges:!0,children:e})}},38417:function(e,t,n){"use strict";var s=n(48538),r=n(5443),o=n(66246),i=n(651);t.Z=e=>{let{label:t,value:n,onCopied:a}=e,l=()=>{(0,s.v)(n),a()};return(0,i.jsxs)("div",{className:"flex flex-col space-y-2",children:[void 0!==t&&(0,i.jsx)("label",{className:"font-semibold",children:t}),(0,i.jsxs)("div",{className:"flex items-center gap-2",children:[(0,i.jsx)("div",{onClick:l,className:"w-full cursor-pointer break-all rounded-lg bg-token-main-surface-tertiary px-4 py-2 font-mono text-sm text-token-text-primary",children:n}),(0,i.jsx)(r.z,{color:"ghost",onClick:l,icon:o.TIy})]})]})}},49868:function(e,t,n){"use strict";n.d(t,{K:function(){return b}});var s=n(94521),r=n(62484),o=n(93223),i=n(35226),a=n(96053),l=n(26123),c=n(72256),d=n(25940),u=n(66246),p=n(65321),g=n(94982),f=n(93322),m=n(651);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,s.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(){return(0,m.jsx)(u.szr,{className:"icon-sm ml-1 text-token-text-tertiary"})}function b(e){var t;let{workspaceId:n,Icon:s,label:d,feature:u,value:x,tooltip:b,disabled:k=!1}=e,v=(0,l.Z)(),O=(0,i.NL)(),{variables:w,mutate:S}=(0,a.D)({mutationFn:e=>{let{feature:t,enabled:s}=e;return o.Z.setWorkspaceBetaFeature(n,t,s)},onSettled:()=>{O.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{g.m.danger(v.formatMessage(j.featureSettingsUpdateFailed))}});return(0,m.jsxs)(f.vi,{className:"justify-start py-6",children:[(0,m.jsx)(p.wy,{label:"",disabled:k,enabled:null!==(t=null==w?void 0:w.enabled)&&void 0!==t?t:x,onChange:e=>{S({feature:u,enabled:e})}}),(0,m.jsxs)("p",{className:"text-md inline-flex items-center",children:[s&&(0,m.jsx)(s,{className:"icon-md mr-2"}),(0,m.jsx)(c.Z,h({},d)),b&&(0,m.jsx)(r.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,m.jsx)(c.Z,h({},b)),side:"top",children:(0,m.jsx)(y,{})})]})]})}let j=(0,d.vU)({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}})},93322:function(e,t,n){"use strict";n.d(t,{$V:function(){return g},A4:function(){return f},Li:function(){return y},W8:function(){return j},i$:function(){return m},i9:function(){return h},qQ:function(){return x},vi:function(){return b}});var s,r,o,i,a,l,c,d,u=n(41141),p=n(74091);let g=p.Z.div(s||(s=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),f=p.Z.div(r||(r=(0,u.Z)(["text-xl font-semibold"]))),m=p.Z.div(o||(o=(0,u.Z)(["text-base font-semibold"]))),x=p.Z.div(i||(i=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),h=p.Z.div(a||(a=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),y=p.Z.div(l||(l=(0,u.Z)(["text-sm"]))),b=p.Z.div(c||(c=(0,u.Z)(["flex justify-between py-4 gap-4"]))),j=p.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},94631:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var s=n(24040),r=n(48580),o=n(92379);function i(){let e=(0,s.aF)(),t=(0,r.xb)("chatgpt-context-connector-enabled-types").config,n=t.get("gdrivePicker",!1),i=t.get("o365Picker",!1),l=t.get("gdriveLink",!1),c=t.get("o365Link",!1),d=t.get("gdrivePercentage",0),u=t.get("o365Percentage",0),p=t.get("loadTestPercentage",0),g=t.get("showWorkspaceSettings",!1),f=e?Math.abs(function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e.id)%100):null;return(0,o.useMemo)(()=>({gdriveStatus:a(n,f,d),o365Status:a(i,f,u),gdriveLinkStatus:a(l,f,d),o365LinkStatus:a(c,f,u),loadTest:"true"===a(!0,f,p),showWorkspaceSettings:g}),[f,d,n,l,i,c,u,p,g])}function a(e,t,n){return e&&null!=t?t<n?"true":"ifConnected":"false"}},84468:function(e,t,n){"use strict";n.d(t,{ll:function(){return l},tW:function(){return c},tv:function(){return u},u1:function(){return d}});var s=n(21904),r=n(43852),o=n(4702),i=n(27603),a=n(48580);function l(){var e,t;return null!==(e=null===(t=(0,o.hz)())||void 0===t?void 0:t.includes(i.L0.Sunshine))&&void 0!==e&&e}function c(){let{data:e}=(0,r.R1)(s.sh.Sunshine),t=l();return!!e&&t}function d(){var e;let t=c(),n=null!==(e=(0,a.sB)("chatgpt-memory-storage-management").value)&&void 0!==e&&e;return t&&n}function u(){var e,t;return null!==(e=null===(t=(0,o.hz)())||void 0===t?void 0:t.includes(i.L0.MemoryGA))&&void 0!==e&&e}},82898:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/settings",function(){return n(68770)}])}},function(e){e.O(0,[6271,7349,3718,4368,5365,2349,1783,4834,7126,8890,9511,0,5165,657,2888,9774,179],function(){return e(e.s=82898)}),_N_E=e.O()}]);
//# sourceMappingURL=settings-4a83496f88ff731a.js.map