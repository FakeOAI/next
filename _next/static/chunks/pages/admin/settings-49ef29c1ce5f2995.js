(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{82920:function(e,t){"use strict";t.ZP=function(e,t){if(t)return e;throw Error("Unhandled discriminated union member: "+JSON.stringify(e))}},52539:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return W},default:function(){return q}});var r=n(98601),o=n(68986),i=n(99333),s=n(34607),a=n(70663),l=n(30853),c=n(28146),u=n(59358),d=n(2721),f=n(93951),p=n(31498),g=n(83963),m=n(42420),x=n(56032),h=n(19841),y=n(11941),w=n.n(y),v=n(92379),b=n(75172),k=n(62984),M=n(68306),O=n(11550),S=n(64216),j=n(5691),C=n(73062),_=n(24434),E=n(12622),P=n(24740),T=n(8040),N=n(651);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function U(e){let t,{conversationTTL:n}=e,r=(0,b.Z)();return t=null==n?r.formatMessage(A.retentionInfinite):7776e3===n?r.formatMessage(A.retentionNinetyDays):31536e3===n?r.formatMessage(A.retentionOneYear):r.formatMessage(A.retentionCustomDays,{num:Math.floor(n/86400)}),(0,N.jsxs)(T.vi,{children:[(0,N.jsx)("p",{className:"inline-flex items-center text-base",children:(0,N.jsx)(k.Z,D({},A.conversationRetention))}),(0,N.jsx)(l.u,{label:r.formatMessage(A.retentionSettingTooltip),children:t})]})}function Z(e){let{title:t,description:n,children:r,upsellEnterprise:o=!1,descriptionValues:i={}}=e;return(0,N.jsx)(l.E,{label:(0,N.jsx)(k.Z,D({},A.enterpriseRequiredMessage)),side:"top",sideOffset:4,disabled:!o,className:"max-w-xl",children:(0,N.jsxs)(T.i9,{className:(0,h.default)(o&&"text-token-text-tertiary"),children:[(0,N.jsxs)(T.A4,{className:"flex items-center gap-3",children:[(0,N.jsx)(k.Z,D({},t)),o&&(0,N.jsx)("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:(0,N.jsx)(k.Z,D({},A.enterpriseUpsellPill))})]}),n&&(0,N.jsx)(T.Li,{className:"py-2 text-token-text-secondary",children:n&&"object"==typeof n&&"id"in n?(0,N.jsx)(k.Z,D(D({},n),{},{values:i})):n}),r]})})}function I(e){let{workspaceId:t,label:n,setting:r,defaultValue:o,values:i,disabled:s=!1}=e,a=(0,b.Z)(),l=(0,m.NL)(),{variables:c,mutate:u}=(0,x.D)({mutationFn:e=>{let{setting:n,value:r}=e;return d.Z.setWorkspaceShareSetting(t,n,r)},onSettled:()=>{l.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{P.m.danger(a.formatMessage(A.featureSettingsUpdateFailed))}});return(0,N.jsxs)(T.vi,{children:[(0,N.jsx)("p",{className:"text-md inline-flex items-center",children:(0,N.jsx)(k.Z,D({},n))}),(0,N.jsxs)(C.Z.Root,{defaultValue:c?.value??o,onValueChange:e=>{u({setting:r,value:e})},disabled:s,children:[(0,N.jsxs)(C.Z.Trigger,{className:"text-md focus-visible:border-none",children:[(0,N.jsx)(C.Z.Value,{}),(0,N.jsx)(C.Z.Icon,{})]}),(0,N.jsx)(C.Z.Portal,{children:(0,N.jsx)(C.Z.Content,{children:i.map((e,t)=>(0,N.jsx)(C.Z.Item,{className:"text-md",value:e.value,children:(0,N.jsx)(k.Z,D({},e.display))},t))})})]})]})}function L(e){let{onConfirm:t,onClose:n}=e,r=(0,b.Z)();return(0,N.jsx)(_.Z,{type:"warning",isOpen:!0,onClose:n,title:r.formatMessage(A.deleteWorkspaceMemoryModalTitle),showCloseButton:!0,primaryButton:(0,N.jsx)(O.z,{color:"danger",onClick:t,children:(0,N.jsx)(k.Z,D({},A.deleteWorkspaceMemoryModalConfirm))}),secondaryButton:(0,N.jsx)(O.z,{onClick:n,color:"secondary",children:(0,N.jsx)(k.Z,D({},A.deleteWorkspaceMemoryModalCancel))}),children:(0,N.jsx)("div",{className:"mb-2 text-sm text-token-text-primary",children:(0,N.jsx)(k.Z,D(D({},A.deleteWorkspaceMemoryModalInfo),{},{values:{b:e=>(0,N.jsx)("b",{children:e})}}))})})}function R(e){let{workspaceId:t,data:n}=e,r=(0,p.ec)(p.F_.isTeamPlan),o=(0,f.t)(),l=(0,b.Z)(),u=(0,g.tv)(),{showWorkspaceSettings:h}=(0,a.r)(),{0:y,1:w}=(0,v.useState)(!1),M=(0,m.NL)(),{variables:O,mutate:C}=(0,x.D)({mutationFn:e=>{let{feature:n,enabled:r}=e;return d.Z.setWorkspaceBetaFeature(t,n,r)},onSettled:()=>{M.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{P.m.danger(l.formatMessage(A.featureSettingsUpdateFailed))}});return(0,N.jsxs)(T.$V,{children:[r&&(0,N.jsx)(T.W8,{}),(0,N.jsxs)(Z,{title:A.workspaceDetails,children:[(0,N.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,N.jsx)(k.Z,{id:"SgdcRQ",defaultMessage:"Organization ID"}),(0,N.jsx)(S.Z,{value:o?.data.organizationId??"",onCopied:()=>P.m.success(l.formatMessage({id:"Ctw3o0",defaultMessage:"Copied organization ID"}))})]}),(0,N.jsxs)("div",{className:"flex flex-row items-center justify-between",children:[(0,N.jsx)(k.Z,{id:"yFldxx",defaultMessage:"Workspace ID"}),(0,N.jsx)(S.Z,{value:t,onCopied:()=>P.m.success(l.formatMessage({id:"CqDpiM",defaultMessage:"Copied workspace ID"}))})]})]}),(0,N.jsx)(Z,{title:A.sharingSettingsTitle,upsellEnterprise:r,children:(0,N.jsx)(T.qQ,{children:(0,N.jsx)(I,{workspaceId:t,label:A.chatSharingTitle,setting:i.bb.CHAT_SHARE_SETTINGS,disabled:r,defaultValue:n.share_settings.chat_share_setting,values:[{display:A.workspaceMembersOnlySelect,value:i.Gz.WORKSPACE_ONLY},{display:A.noOneSelect,value:i.Gz.NO_ONE}]})})}),u&&(0,N.jsx)(Z,{title:A.memoryFeatureSettingsTitle,description:A.workspaceMemoryDescription,descriptionValues:{link:e=>(0,N.jsx)("a",{href:"https://help.openai.com/en/articles/8590148-memory-in-chatgpt-faq",target:"_blank",className:"underline",rel:"noreferrer",children:e})},upsellEnterprise:r,children:(0,N.jsx)(T.qQ,{children:(0,N.jsxs)(T.vi,{className:"justify-start py-6",children:[(0,N.jsx)(E.wy,{label:"",disabled:r,enabled:O?.enabled??n.beta_settings.sunshine,onChange:e=>{e?C({feature:i.Nh.MEMORY,enabled:e}):w(!0)}}),(0,N.jsx)("p",{className:"text-md inline-flex items-center",children:(0,N.jsx)(k.Z,D({},A.memoryOptionTitle))})]})})}),y&&(0,N.jsx)(L,{onConfirm:()=>{C({feature:i.Nh.MEMORY,enabled:!1}),w(!1)},onClose:()=>{w(!1)}}),(0,N.jsx)(Z,{title:A.retentionPolicyTitle,description:A.retentionChange,upsellEnterprise:r,children:(0,N.jsx)(U,{conversationTTL:n.conversation_ttl})}),h&&(0,N.jsx)(Z,{title:A.contextConnectorsTitle,upsellEnterprise:r,description:(0,N.jsx)(k.Z,D(D({},A.contextConnectorsSubtitle),{},{values:{helpCenterLink:(0,N.jsx)("a",{className:"text-token-link",href:"https://help.openai.com/en/articles/9309188-connected-apps-on-chatgpt",target:"_blank",rel:"noreferrer",children:(0,N.jsx)(k.Z,D({},A.contextConnectorsHelpCenterLink))})}})),children:(0,N.jsx)(T.qQ,{children:(0,N.jsxs)(T.qQ,{children:[(0,N.jsx)(s.K,{disabled:r,label:A.contextConnectorsGoogleDrive,Icon:c.Gle,feature:i.Nh.CONTEXT_CONNECTOR_GDRIVE,value:n.beta_settings.context_connector_gdrive,workspaceId:t}),(0,N.jsx)(s.K,{disabled:r,label:j.e6,Icon:c.ur6,tooltip:A.contextConnectorsO365BusinessTooltip,feature:i.Nh.CONTEXT_CONNECTOR_O365_BUSINESS,value:n.beta_settings.context_connector_o365_business,workspaceId:t}),(0,N.jsx)(s.K,{disabled:r,label:j.AJ,Icon:c.ur6,tooltip:A.contextConnectorsO365PersonalTooltip,feature:i.Nh.CONTEXT_CONNECTOR_O365_PERSONAL,value:n.beta_settings.context_connector_o365_personal,workspaceId:t})]})})})]})}function B(e){let{currentWorkspaceId:t}=e,{data:n,isLoading:r}=(0,u.C)(t),i=(0,b.Z)();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(w(),{children:(0,N.jsx)("title",{children:i.formatMessage(A.title)})}),(0,N.jsx)(o.yG,{title:i.formatMessage(A.title)}),(0,N.jsx)(o.hb,{showSpinner:r,children:void 0===n?null:(0,N.jsx)(R,{workspaceId:t,data:n})})]})}let A=(0,M.vU)({title:{id:"workspaceSettings.title",defaultMessage:"Settings"},retentionPolicyTitle:{id:"workspaceSettings.retentionPolicyTitle",defaultMessage:"Retention policy"},sharingSettingsTitle:{id:"workspaceSettings.sharingSettingsTitle",defaultMessage:"Sharing"},memoryFeatureSettingsTitle:{id:"workspaceSettings.memoryFeatureSettingsTitle",defaultMessage:"Memory"},memoryOptionTitle:{id:"workspaceSettings.memoryOptionTitle",defaultMessage:"Allow members to use memory"},workspaceMemoryDescription:{id:"workspaceSettings.workspaceMemoryDescription",defaultMessage:"Manage whether members can enable memory. This allows ChatGPT to become more helpful by remembering details and preferences across chats. <link>Learn more</link>"},deleteWorkspaceMemoryModalTitle:{id:"workspaceSettings.deleteWorkspaceMemoryModalTitle",defaultMessage:"Are you sure?"},deleteWorkspaceMemoryModalConfirm:{id:"workspaceSettings.deleteWorkspaceMemoryModalConfirm",defaultMessage:"Disable and delete memories"},deleteWorkspaceMemoryModalCancel:{id:"workspaceSettings.deleteWorkspaceMemoryModalCancel",defaultMessage:"Cancel"},deleteWorkspaceMemoryModalInfo:{id:"workspaceSettings.groups.deleteWorkspaceMemoryModalInfo",defaultMessage:"If you disable memory for your workspace, <b>members' existing memories will be forgotten</b>. This can't be undone."},chatSharingTitle:{id:"workspaceSettings.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceDetails:{id:"workspaceSettings.workspaceDetails",defaultMessage:"Workspace details"},workspaceMembersOnlySelect:{id:"workspaceSettings.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},noOneSelect:{id:"workspaceSettings.noOneSelect",defaultMessage:"No one"},featureSettingsUpdateFailed:{id:"workspaceSettings.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettings.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettings.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettings.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettings.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettings.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettings.retentionChange",defaultMessage:"Contact your account manager to change this setting."},enterpriseUpsellPill:{id:"workspaceSettings.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettings.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettings.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},contextConnectorsTitle:{id:"workspaceSettings.contextConnectorsTitle",defaultMessage:"Connected Apps"},contextConnectorsSubtitle:{id:"workspaceSettings.contextConnectorsSubtitle",defaultMessage:"Manage which apps users in this workspace can connect to directly from ChatGPT. For more information, refer to the {helpCenterLink}."},contextConnectorsHelpCenterLink:{id:"workspaceSettings.contextConnectorsHelpCenterLink",defaultMessage:"Help Center"},contextConnectorsGoogleDrive:{id:"workspaceSettings.contextConnectorsGoogleDrive",defaultMessage:"Google Drive"},contextConnectorsO365PersonalTooltip:{id:"workspaceSettings.contextConnectorsO365PersonalTooltip",defaultMessage:"This includes personal OneDrive accounts but not OneDrive for Business or SharePoint accounts."},contextConnectorsO365BusinessTooltip:{id:"workspaceSettings.contextConnectorsO365BusinessTooltip",defaultMessage:"This includes OneDrive for Business and SharePoint accounts but not personal accounts."}});function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var W=!0;function q(e){return(0,N.jsx)(B,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))}q.getLayout=function(e){return(0,N.jsx)(o.ZP,{mobilePageTitle:"Settings",requireAdminPrivileges:!0,children:e})}},64216:function(e,t,n){"use strict";var r=n(79746),o=n(11550),i=n(28146),s=n(651);t.Z=e=>{let{label:t,value:n,onCopied:a}=e,l=()=>{(0,r.v)(n),a()};return(0,s.jsxs)("div",{className:"flex flex-col space-y-2",children:[void 0!==t&&(0,s.jsx)("label",{className:"font-semibold",children:t}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("div",{onClick:l,className:"w-full cursor-pointer break-all rounded-lg bg-token-main-surface-tertiary px-4 py-2 font-mono text-sm text-token-text-primary",children:n}),(0,s.jsx)(o.z,{color:"ghost",onClick:l,icon:i.TIy})]})]})}},34607:function(e,t,n){"use strict";n.d(t,{I:function(){return y},K:function(){return w}});var r=n(98601),o=n(30853),i=n(2721),s=n(42420),a=n(56032),l=n(75172),c=n(62984),u=n(68306),d=n(28146),f=n(12622),p=n(24740),g=n(8040),m=n(651);function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(){return(0,m.jsx)(d.szr,{className:"icon-sm ml-1 text-token-text-tertiary"})}function w(e){let{workspaceId:t,Icon:n,label:r,feature:u,value:d,tooltip:x,disabled:w=!1}=e,b=(0,l.Z)(),k=(0,s.NL)(),{variables:M,mutate:O}=(0,a.D)({mutationFn:e=>{let{feature:n,enabled:r}=e;return i.Z.setWorkspaceBetaFeature(t,n,r)},onSettled:()=>{k.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{p.m.danger(b.formatMessage(v.featureSettingsUpdateFailed))}});return(0,m.jsxs)(g.vi,{className:"justify-start py-6",children:[(0,m.jsx)(f.wy,{label:"",disabled:w,enabled:M?.enabled??d,onChange:e=>{O({feature:u,enabled:e})}}),(0,m.jsxs)("p",{className:"text-md inline-flex items-center",children:[n&&(0,m.jsx)(n,{className:"icon-md mr-2"}),(0,m.jsx)(c.Z,h({},r)),x&&(0,m.jsx)(o.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,m.jsx)(c.Z,h({},x)),side:"top",children:(0,m.jsx)(y,{})})]})]})}let v=(0,u.vU)({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}})},8040:function(e,t,n){"use strict";n.d(t,{$V:function(){return o},A4:function(){return i},Li:function(){return c},W8:function(){return d},i$:function(){return s},i9:function(){return l},qQ:function(){return a},vi:function(){return u}});var r=n(15478);let o=r.Z.div`text-base text-token-text-primary flex flex-col gap-10 my-10`,i=r.Z.div`text-xl font-semibold`,s=r.Z.div`text-base font-semibold`,a=r.Z.div`flex flex-col divide-y divide-token-border-light border-y border-token-border-light`,l=r.Z.div`flex flex-col gap-3 w-full m-auto md:m-0`,c=r.Z.div`text-sm`,u=r.Z.div`flex justify-between py-4 gap-4`,d=r.Z.hr`max-w-xl border-token-border-light`},5691:function(e,t,n){"use strict";n.d(t,{AJ:function(){return a},JQ:function(){return d},L_:function(){return c},Ul:function(){return u},e6:function(){return l},i5:function(){return f}});var r=n(99333),o=n(82920),i=n(68306),s=n(651);let a=(0,i.Em)({defaultMessage:"Microsoft OneDrive (personal)",id:"ContextConnector.OneDrivePersonal.name"}),l=(0,i.Em)({defaultMessage:"Microsoft OneDrive (work/school)",id:"ContextConnector.OneDriveBusiness.name"}),c=(0,i.vU)({includesSharePoint:{id:"ContextConnectorPicker.o365BusinessIncludesSharePoint",defaultMessage:"Includes SharePoint"}});function u(e,t){switch(e){case r.PO.GDRIVE_SYNC_CONNECTOR:case r.PO.GDRIVE:return"Google Drive";case r.PO.O365:return"Microsoft OneDrive";case r.PO.O365_PERSONAL:return t?.formatMessage(a)??"Microsoft OneDrive (personal)";case r.PO.O365_BUSINESS:return t?.formatMessage(l)??"Microsoft OneDrive (work/school)"}}function d(e,t){switch(e){case r.PO.GDRIVE_SYNC_CONNECTOR:case r.PO.GDRIVE:switch(t){case"doc":case"docx":return"Google Docs";case"xls":case"xlsx":return"Google Sheets";case"ppt":case"pptx":return"Google Slides";default:return"Google Drive"}case r.PO.O365:case r.PO.O365_PERSONAL:case r.PO.O365_BUSINESS:switch(t){case"doc":case"docx":return"Microsoft Word";case"xls":case"xlsx":return"Microsoft Excel";case"ppt":case"pptx":return"Microsoft PowerPoint";default:return"Microsoft OneDrive"}}(0,o.ZP)(e)}function f(e){let{contextConnector:t,extension:n}=e;return(0,s.jsx)(s.Fragment,{children:d(t,n)})}},70663:function(e,t,n){"use strict";n.d(t,{r:function(){return s}});var r=n(31498),o=n(88667),i=n(92379);function s(){let e=(0,r.aF)(),t=(0,o.xb)("1967546325").config,n=t.get("gdrivePicker",!1),s=t.get("o365Picker",!1),l=t.get("gdriveLink",!1),c=t.get("o365PersonalLink",!1),u=t.get("o365BusinessLink",!1),d=t.get("gdrivePercentage",0),f=t.get("o365Percentage",0),p=t.get("loadTestPercentage",0),g=t.get("showWorkspaceSettings",!1),m=e?Math.abs(function(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n)|0;return t}(e.id)%100):null;return(0,i.useMemo)(()=>({gdriveStatus:a(n,m,d),o365Status:a(s,m,f),gdriveLinkStatus:a(l,m,d),o365PersonalLinkStatus:a(c,m,f),o365BusinessLinkStatus:a(u,m,f),loadTest:"true"===a(!0,m,p),showWorkspaceSettings:g}),[n,m,d,s,f,l,c,u,p,g])}function a(e,t,n){return e&&null!=t?t<n?"true":"ifConnected":"false"}},42606:function(e,t,n){"use strict";n.d(t,{I:function(){return i},o:function(){return s}});let r=["xlsx","pptx","docx"],o={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function i(e){return e?o[e.split(";")[0]]??null:null}function s(e){return e&&r.includes(e)?e:null}},84082:function(e,t,n){"use strict";n.d(t,{$e:function(){return i},EZ:function(){return s},Ql:function(){return o},dO:function(){return r},xC:function(){return a}});let r=10,o=4,i={duration:20,hasCloseButton:!0},s=512,a=536870912},93866:function(e,t,n){"use strict";n.d(t,{AJ:function(){return s},XX:function(){return l},xA:function(){return a}});var r,o,i=n(42606);let s=((r={})[r.None=0]="None",r[r.Multimodal=1]="Multimodal",r[r.Interpreter=2]="Interpreter",r[r.Retrieval=3]="Retrieval",r[r.ContextConnector=4]="ContextConnector",r[r.ProfilePicture=5]="ProfilePicture",r);function a(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,i.o)(e.synthetic_extension),type:e.type}}let l=((o={}).Uploading="uploading",o.Ready="ready",o)},98628:function(e,t,n){"use strict";n.d(t,{E1:function(){return h},Sj:function(){return w},W7:function(){return p},cT:function(){return m},lU:function(){return x},po:function(){return g},sY:function(){return v}});var r=n(99333),o=n(2721),i=n(92319),s=n(99976),a=n(61619),l=n(68306),c=n(88815),u=n(24740),d=n(66114);let f={duration:20,hasCloseButton:!0};function p(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function g(e){return new Promise((t,n)=>{let r=new FileReader,o=new Image;r.onload=()=>{o.onload=()=>t(o),o.onerror=e=>n(e),o.src=r.result},r.readAsDataURL(e)})}async function m(e,t,n,l,d,p){let g=c.N.getState().resetRateLimits,m=r.EG.Initial;s.A.logEvent(a.M.uploadFileInitiated,{client:"web",useCase:l.kind,uploadEntry:"local"});let x=p.usesRetrievalIndex?performance.now():void 0;try{let{file_id:i,upload_url:s}=await o.Z.createFile(t.name,t.size,l,!!g);d.onFileCreated(e,i,s),m=r.EG.FileCreated;let a=l.kind===r.Ei.Gizmo?l.gizmoId:void 0,c=p.shouldUpdateProgress??!1,w=p.usesRetrievalIndex??!1,b=await o.Z.uploadFileToAzureStorage(t,s,t=>{c&&d.onFileUploadProgress(e,10+80*t)});if(d.onFileUploadProgress(e,90),201!==b.status&&y(b,i,w),m=r.EG.FileUploaded,await o.Z.processFileUpload(i,{gizmoId:a}),m=r.EG.FileProcessed,p.usesRetrievalIndex){let t=await h(i,a);t?.status===r.Xf.Skipped&&u.m.danger(n.formatMessage(v.retrievalSkippedFile,{fileName:t.name}),f),d.onFileUploaded(e,i,void 0,{fileTokenSize:t.file_size_tokens}),m=r.EG.RetrievalIndexCreated}else d.onFileUploaded(e,i,p.imageDimensions);null!=x&&o.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-x,type:"file"})}catch(o){w(n,t.name,o);let r="NotInstanceOfError";o instanceof i.gK?r=o.name:o instanceof i.Q0?r=`FatalServerError_type_${o.type??"undefined"}`:o instanceof Error?r=o.name:o instanceof i.vq&&(r=o.name),d.onError(e,"error",r,l,m)}}async function x(e,t,n,r,o){let{width:i,height:s}=await g(t);return m(e,t,n,{kind:r},o,{imageDimensions:{width:i,height:s}})}async function h(e,t){let n=Date.now()+6e4,s=e=>new Promise(t=>setTimeout(t,e)),a=0;for(;Date.now()<n;){let n=await o.Z.getRetrievalStatus(e,t);if(n.status===r.Xf.Success||n.status===r.Xf.Skipped)return n;if(n.status===r.Xf.Failed)throw new i.vq("Context extraction failed",n.error_code);a++,await s(Math.min(1e3,100*a))}throw new i.vq("Retrieval indexing timed out")}async function y(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="Unknown error";try{r=await e.data}catch(e){}throw n&&o.Z.markFileUploadFailed(t,{error:r}),new i.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function w(e,t,n){let r=(0,d.kr)(e,"default_upload_error",{fileName:t});n instanceof i.vq&&null!=n.code&&(r=(0,d.kr)(e,n.code)),u.m.danger(r,f)}let v=(0,l.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},66114:function(e,t,n){"use strict";n.d(t,{$H:function(){return x},$p:function(){return E},Ad:function(){return Z},B:function(){return U},BV:function(){return N},CO:function(){return P},Iy:function(){return g},KL:function(){return C},L8:function(){return m},O6:function(){return w},Tu:function(){return F},VF:function(){return y},Vm:function(){return T},WI:function(){return D},YN:function(){return b},Z8:function(){return _},Zp:function(){return S},_0:function(){return O},kr:function(){return h},p0:function(){return j},s1:function(){return k},ww:function(){return v},xs:function(){return M}});var r=n(99333),o=n(16757),i=n(2721),s=n(86025),a=n(58695),l=n(82363),c=n(92379),u=n(75172),d=n(68306),f=n(24740),p=n(93866);function g(e){return e.replace("file-service://","")}function m(e){return"file-service://"+e}function x(e){return e.startsWith("file-service://")}function h(e,t,n){switch(t){case"file_zero_bytes":return e.formatMessage(I.fileZeroBytes,n);case"file_too_large":return e.formatMessage(I.fileTooLarge,n);case"over_user_quota":return e.formatMessage(I.overUserQuota,n);case"file_not_found":case"file_expired":return e.formatMessage(I.fileNotFound,n);case"file_timed_out":return e.formatMessage(I.fileTimedOut,n);case"ace_pod_expired":return e.formatMessage(I.codeInterpreterSessionTimeout,n);case"permission_error":return e.formatMessage(I.permissionError,n);case"default_upload_error":case"file_rejected":return e.formatMessage(I.defaultCreateEntryError,n);case"default_download_link_error":return e.formatMessage(I.defaultDownloadLinkError,n);case"file_empty":return e.formatMessage(I.fileEmpty,n);case"too_many_tokens":return e.formatMessage(I.fileTooManyTokens,n);case"file_encrypted":return e.formatMessage(I.fileEncrypted,n);case"file_corrupted":return e.formatMessage(I.fileCorrupted,n);case"failed_upload_to_blobstore":return e.formatMessage(I.failedUploadToBlobStore,n);default:return e.formatMessage(I.unknownError)}}function y(){let e=(0,u.Z)();return(0,c.useCallback)((t,n)=>h(e,t,n),[e])}function w(){let{session:e}=(0,a.kP)(),{isUnauthenticated:t}=(0,s.u)(),n=(0,u.Z)();return async(o,s)=>{if(!t&&null==e)return f.m.danger(n.formatMessage(I.fileDownloadFailed)),!1;try{let e=await i.Z.getFileDownloadLink(o,void 0,t);if(e.status!==r.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let n=e.download_url,a=document.createElement("a");a.href=n,a.download=s,a.click(),window.open(n,"_blank")}catch(e){return f.m.danger(n.formatMessage(I.fileDownloadFailed)),!1}return!0}}function v(e,t){return t?.kind===o.OL.GizmoInteraction||t?.kind===o.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function b(e,t){let n=v(e,t);return n?.attachments?.type===r.Cd.CodeInterpreter?p.AJ.Interpreter:n?.attachments?.type===r.Cd.Multimodal?p.AJ.Multimodal:n?.attachments?.type===r.Cd.Retrieval?p.AJ.Retrieval:n?.attachments?.type===r.Cd.ContextConnector?p.AJ.ContextConnector:p.AJ.None}function k(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function M(e,t,n,r,o){if(null==o)return e;let i=k(t);i&&(n=i),r&&(n=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(n));let{accepted_mime_types:s,can_accept_all_mime_types:a}=o;return null!=s&&0!==s.length&&a?s.includes(n)?e:p.AJ.Interpreter:e}function O(e,t,n){let o=""!==t?t:k(n),i=e?.product_features?.attachments;return null==i?void 0:i.accepted_mime_types?.includes(o)?i.type:i.image_mime_types?.includes(o)?r.Cd.Multimodal:r.Cd.CodeInterpreter}function S(e,t){let n=v(e,t);return n?.attachments?.can_accept_all_mime_types?void 0:n?.attachments?.accepted_mime_types}function j(e,t){let{attachments:n}=v(e,t)??{};return n?.image_mime_types?n.image_mime_types:n?.type==="multimodal"?n.accepted_mime_types??C:[]}let C=["image/png","image/jpeg","image/gif","image/webp"];function _(e){return(0,c.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,n)=>(n in t?e[n]=t[n]:n.includes("/")&&(e[n]=[`.${n.split("/")[1]}`]),e),{})}},[e])}function E(e){return e.split(".").pop()?.toLowerCase()}function P(e){let t=E(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function T(e){let t=E(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function N(e){let t=E(e);return null!=t&&["xls","xlsx"].includes(t)}function F(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((r,o)=>{let i=new FileReader;i.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),o(Error("Failed to read the file."))},i.onload=i=>{let s=new Image;s.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),o(Error("Failed to load the image."))},s.onload=()=>{let i=document.createElement("canvas"),a,c=0,u=0;switch(n){case"fill":case"square":a=t/Math.min(s.width,s.height);break;case"fit":a=t/Math.max(s.width,s.height)}let d=s.width*a,f=s.height*a;"square"===n?(i.width=t,i.height=t,c=(t-d)/2,u=(t-f)/2):(i.width=d,i.height=f);let p=i.getContext("2d");if(null==p){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),o(Error("Failed to create canvas context."));return}p.drawImage(s,c,u,d,f);let g=e.type||"image/png";i.toBlob(t=>{t?r(new File([t],e.name,{type:g})):(l.U.addError("Blob creation failed. Blob is null."),o(Error("Failed to create blob from image data.")))},g)},null==i.target?(l.U.addError("Event target is null. Failed to load image."),o("Failed to load image.")):s.src=i.target.result},i.readAsDataURL(e)})}function D(e,t){return F(e,t,"square")}function U(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function Z(e,t){return t?e.slice(0,-t.length-1):e}let I=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},88815:function(e,t,n){"use strict";n.d(t,{J:function(){return o},N:function(){return i}});var r=n(68810);let o={label:"Auto",value:""},i=(0,r.Ue)(()=>({forceParagen:!1,forceParagenModel:o,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},83963:function(e,t,n){"use strict";n.d(t,{ll:function(){return l},tW:function(){return c},tv:function(){return d},u1:function(){return u}});var r=n(99333),o=n(58025),i=n(93951),s=n(41987),a=n(88667);function l(){return i.hz()?.includes(s.L0.Sunshine)??!1}function c(){let{data:e}=(0,o.R1)(r.sh.Sunshine),t=l();return!!e&&t}function u(){let e=c(),t=(0,a.sB)("1611573287").value??!1;return e&&t}function d(){return i.hz()?.includes(s.L0.MemoryGA)??!1}},40476:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/settings",function(){return n(52539)}])}},function(e){e.O(0,[9237,2342,4198,4089,1133,3718,3088,5696,1612,2349,2745,5162,9113,9725,6803,5011,3666,3127,3662,2888,9774,179],function(){return e(e.s=40476)}),_N_E=e.O()}]);
//# sourceMappingURL=settings-49ef29c1ce5f2995.js.map