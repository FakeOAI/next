(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8298,657],{42974:function(e,t,s){"use strict";s.r(t),s.d(t,{__N_SSP:function(){return B},default:function(){return L}});var a=s(94521),r=s(70657),n=s(21904),i=s(62484),l=s(2377),o=s(93223),c=s(4702),d=s(35226),u=s(96053),p=s(48580),m=s(19841),g=s(71126),f=s.n(g),x=s(92379),h=s(72256),j=s(26123),b=s(25940),w=s(50684),y=s(71840),v=s(8735),O=s(94982),k=s(5443),P=s(65530),N=s(69482),S=s(66246),Z=s(651);function M(e){let{value:t,title:s,valueClassName:a,onChange:r,emptyMessage:n}=e,{0:i,1:l}=(0,x.useState)(!1),{0:o,1:c}=(0,x.useState)(""),d=(0,x.useRef)(null),u=()=>{""!==o&&(r([...t,o.trim()]),l(!1),c(""))};return(0,Z.jsxs)(N.Z.Root,{className:"w-auto",children:[(0,Z.jsxs)(N.Z.Header,{children:[(0,Z.jsx)(N.Z.HeaderCell,{children:s}),(0,Z.jsx)(N.Z.HeaderCell,{})]}),(0,Z.jsxs)(N.Z.Body,{children:[t.map((e,s)=>(0,Z.jsxs)(N.Z.Row,{children:[(0,Z.jsx)(N.Z.Cell,{className:a,children:e}),(0,Z.jsx)(N.Z.Cell,{textAlign:"right",children:(0,Z.jsx)(k.z,{type:"button",onClick:()=>{r(t.filter((e,t)=>t!==s))},children:(0,Z.jsx)(S.XHJ,{className:"icon-sm"})})})]},s)),n&&0===t.length?(0,Z.jsx)(N.Z.Row,{children:(0,Z.jsx)(N.Z.Cell,{colSpan:2,className:"text-center text-sm italic",children:n})}):null,(0,Z.jsxs)(N.Z.Row,{children:[(0,Z.jsxs)("div",{className:(0,m.default)("mt-2 flex flex-row gap-2 p-1",!i&&"hidden"),children:[(0,Z.jsx)(P.Z,{className:"w-80",name:"newDomain",value:o,onChange:e=>{c(e.target.value)},ref:d,onPressEnter:u,placeholder:"example.com"}),(0,Z.jsx)(k.z,{className:"grow-0",onClick:u,children:(0,Z.jsx)(h.Z,{id:"svRVol",defaultMessage:"Add"})})]}),!i&&(0,Z.jsxs)(k.z,{type:"button",onClick:()=>{l(!0),setTimeout(()=>{var e;null===(e=d.current)||void 0===e||e.focus()},0)},className:"mt-2",children:[(0,Z.jsx)(S.pOD,{className:"icon-sm inline-block"}),(0,Z.jsx)(h.Z,{id:"J5y3+M",defaultMessage:"Add new domain"})]})]})]})]})}var T=s(49868),A=s(24351),D=s(93322);function E(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function C(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?E(Object(s),!0).forEach(function(t){(0,a.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):E(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function _(e){let{title:t,description:s,children:a,upsellEnterprise:r=!1,className:n=""}=e;return(0,Z.jsx)(i.E,{label:(0,Z.jsx)(h.Z,C({},U.enterpriseRequiredMessage)),side:"top",sideOffset:4,disabled:!r,className:"max-w-5xl",children:(0,Z.jsxs)(D.i9,{className:(0,m.default)(r&&"text-token-text-tertiary","max-w-4xl",n),children:[(0,Z.jsxs)(D.A4,{className:"flex items-center gap-3",children:[(0,Z.jsx)(h.Z,C({},t)),r&&(0,Z.jsx)("span",{className:"rounded-xl bg-token-main-surface-tertiary px-2 pb-0.5 text-sm",children:(0,Z.jsx)(h.Z,C({},U.enterpriseUpsellPill))})]}),s&&(0,Z.jsx)(D.Li,{className:"py-2 text-token-text-secondary",children:(0,Z.jsx)(h.Z,C({},s))}),a]})})}function G(e){var t;let{workspaceId:s,label:a,setting:r,defaultValue:n,values:i,disabled:l=!1}=e,c=(0,j.Z)(),p=(0,d.NL)(),{variables:m,mutate:g}=(0,u.D)({mutationFn:e=>{let{setting:t,value:a}=e;return o.Z.setWorkspaceShareSetting(s,t,a)},onSettled:()=>{p.invalidateQueries({queryKey:["workspace-settings"]}),p.invalidateQueries({queryKey:["workspace"]})},onError:()=>{O.m.danger(c.formatMessage(U.featureSettingsUpdateFailed))}});return(0,Z.jsxs)(D.vi,{children:[(0,Z.jsx)("p",{className:"text-md inline-flex items-center",children:(0,Z.jsx)(h.Z,C({},a))}),(0,Z.jsxs)(v.Z.Root,{defaultValue:null!==(t=null==m?void 0:m.value)&&void 0!==t?t:n,onValueChange:e=>{g({setting:r,value:e})},disabled:l,children:[(0,Z.jsxs)(v.Z.Trigger,{className:"text-md focus-visible:border-none",children:[(0,Z.jsx)(v.Z.Value,{}),(0,Z.jsx)(v.Z.Icon,{})]}),(0,Z.jsx)(v.Z.Portal,{children:(0,Z.jsx)(v.Z.Content,{children:i.map((e,t)=>(0,Z.jsx)(v.Z.Item,{className:"text-md",value:e.value,children:(0,Z.jsx)(h.Z,C({},e.display))},t))})})]})]})}function F(e){var t;let{workspaceId:s,value:a,upsellEnterprise:r=!1}=e,i=(0,j.Z)(),l=(0,d.NL)(),{variables:c,mutate:p}=(0,u.D)({mutationFn:e=>{let{value:t}=e;return o.Z.setWorkspaceThirdPartyGPTSetting(s,t)},onSettled:()=>{l.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{O.m.danger(i.formatMessage(U.featureSettingsUpdateFailed))}});return(0,Z.jsxs)(v.Z.Root,{defaultValue:null!==(t=null==c?void 0:c.value)&&void 0!==t?t:a,onValueChange:e=>{p({value:e})},children:[(0,Z.jsxs)(v.Z.Trigger,{className:"border border-token-border-light text-base focus-visible:border-token-border-light",children:[(0,Z.jsx)(v.Z.Value,{}),(0,Z.jsx)(v.Z.Icon,{})]}),(0,Z.jsx)(v.Z.Portal,{children:(0,Z.jsxs)(v.Z.Content,{children:[(0,Z.jsx)(v.Z.Item,{className:"text-base",value:n.NN.ALLOW_ALL,children:(0,Z.jsx)(h.Z,C({},U.allowAllOption))}),!r&&(0,Z.jsx)(v.Z.Item,{className:"text-base",value:n.NN.ALLOW_SPECIFIC,children:(0,Z.jsx)(h.Z,C({},U.ownerApprovedOnlyOption))}),(0,Z.jsx)(v.Z.Item,{className:"text-base",value:n.NN.ALLOW_NONE,children:(0,Z.jsx)(h.Z,C({},U.dontAllowOption))})]})})]})}function I(e){var t;let{workspaceId:s,data:a}=e,r=(0,j.Z)(),l=(0,c.t)(),m=(0,d.NL)(),{0:g,1:f}=(0,x.useState)([]),{value:b}=(0,p.sB)("chatgpt-custom-actions-domains"),v=(0,u.D)({mutationFn:e=>{let{value:t}=e;return o.Z.setWorkspaceCustomActionsDomains(s,t)},onSettled:()=>{m.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{O.m.danger(r.formatMessage(U.featureSettingsUpdateFailed))}});if(null==l)return null;let k=l.isTeam(),P=(0,Z.jsx)(_,{title:U.thirdPartyGPTsTitle,description:U.thirdPartyGPTsDescription,className:"border-b border-token-border-light pb-4",children:(0,Z.jsx)("div",{children:(0,Z.jsx)(F,{workspaceId:s,value:a.allow_third_party_gpts,upsellEnterprise:k})})}),N=(0,Z.jsx)(_,{title:U.sidebarTitle,children:(0,Z.jsx)(A.Z,{account:l,showThirdParty:!k&&a.allow_third_party_gpts===n.NN.ALLOW_SPECIFIC})}),S=null!=a.allowed_custom_actions_domains||!1===a.beta_settings.workspace_gpt_custom_actions;return(0,Z.jsxs)(D.$V,{className:"max-w-5xl",children:[k&&P,k&&l.isOwnerOfAccount()&&N,k&&(0,Z.jsx)(D.W8,{}),(0,Z.jsx)(_,{title:U.sharingSettingsTitle,upsellEnterprise:k,children:(0,Z.jsx)(D.qQ,{children:(0,Z.jsx)(G,{workspaceId:s,label:U.gptSharingTitle,disabled:k,setting:n.bb.GPT_SHARE_SETTINGS,defaultValue:a.share_settings.gpt_share_setting,values:[{display:U.anyOneSelect,value:n.Gz.ANYONE},{display:U.workspaceMembersOnlySelect,value:n.Gz.WORKSPACE_ONLY},{display:U.inviteOnlySelect,value:n.Gz.NO_ONE}]})})}),(0,Z.jsx)(_,{title:U.workspaceGPTsTitle,description:U.workspaceGPTsDescription,upsellEnterprise:k,children:(0,Z.jsxs)(D.qQ,{children:[(0,Z.jsx)(T.K,{label:U.browseOptionTitle,feature:n.Nh.BROWSING,value:a.beta_settings.browsing,workspaceId:s,tooltip:U.browseTooltip,disabled:k}),b?(0,Z.jsxs)("div",{className:"flex flex-col gap-4 py-6",children:[(0,Z.jsx)("div",{className:"text-xl font-semibold",children:(0,Z.jsx)(h.Z,{id:"ugI3Yt",defaultMessage:"GPT actions"})}),(0,Z.jsx)("div",{className:"py-2 text-sm text-token-text-secondary",children:(0,Z.jsx)(h.Z,{id:"HY2eof",defaultMessage:"GPT actions allow GPTs to call third-party APIs for tasks such as retrieving or modifying data. GPT actions are defined by GPT builders, and you can limit the domains that can be used for GPTs created in your workspace."})}),(0,Z.jsxs)("div",{className:"flex flex-row items-center gap-4",children:[(0,Z.jsx)(y.Z,{checked:!S,id:"allow-all-domains",onChange:e=>{e.currentTarget.checked?(f(a.allowed_custom_actions_domains),v.mutate({value:null})):v.mutate({value:null!=g?g:[]})},label:(0,Z.jsxs)("span",{className:"flex flex-row items-center",children:[(0,Z.jsx)(h.Z,{id:"WnWoqJ",defaultMessage:"Allow all domains for GPT actions"}),(0,Z.jsx)(i.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,Z.jsx)(h.Z,{id:"KjJtEm",defaultMessage:"Limit the Internet domains that can be used by GPTs created in your workspace. This does not apply to third-party GPTs."}),side:"top",children:(0,Z.jsx)(T.I,{})})]})}),v.isPending&&(0,Z.jsx)(w.Z,{})]}),S&&(0,Z.jsx)(M,{value:null!==(t=a.allowed_custom_actions_domains)&&void 0!==t?t:[],title:r.formatMessage({id:"YetDcq",defaultMessage:"Domains"}),onChange:e=>{v.mutate({value:e})},emptyMessage:r.formatMessage({id:"rFH4IP",defaultMessage:"No domains added. No GPT actions will be allowed."})})]}):(0,Z.jsx)(T.K,{label:U.customActionsOptionTitle,feature:n.Nh.WORKSPACE_GPT_CUSTOM_ACTIONS,value:a.beta_settings.workspace_gpt_custom_actions,workspaceId:s,tooltip:U.customActionsTooltip,disabled:k})]})}),!k&&P,!k&&l.isOwnerOfAccount()&&N]})}function R(e){let{currentWorkspaceId:t}=e,{data:s,isLoading:a}=(0,l.C)(t),n=(0,j.Z)();return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(f(),{children:(0,Z.jsx)("title",{children:n.formatMessage(U.sidebarTitle)})}),(0,Z.jsx)(r.yG,{title:n.formatMessage(U.sidebarTitle)}),(0,Z.jsx)(r.hb,{showSpinner:a,children:void 0===s?null:(0,Z.jsx)(I,{workspaceId:t,data:s})})]})}let U=(0,b.vU)({sidebarTitle:{id:"workspaceSettingsOld.sidebarTitle",defaultMessage:"GPTs"},allowAllOption:{id:"workspaceSettingsOld.allowAllOption",defaultMessage:"Allow all"},ownerApprovedOnlyOption:{id:"workspaceSettingsOld.ownerApprovedOnlyOption",defaultMessage:"Owner-approved only"},dontAllowOption:{id:"workspaceSettingsOld.dontAllowOption",defaultMessage:"Don't allow"},retentionPolicyTitle:{id:"workspaceSettingsOld.retentionPolicyTitle",defaultMessage:"Retention policy"},thirdPartyGPTsTitle:{id:"workspaceSettingsOld.thirdPartyGPTsTitle",defaultMessage:"Third-party"},thirdPartyGPTsDescription:{id:"workspaceSettingsOld.thirdPartyGPTsDescription",defaultMessage:"Manage whether members can use GPTs created outside your workspace."},customActionsTooltip:{id:"workspaceSettingsOld.customActionsTooltip",defaultMessage:"Allow GPTs to use third-party services for tasks such as finding flights. Actions are defined by GPT builders."},browseTooltip:{id:"workspaceSettingsOld.browseTooltip",defaultMessage:"Allow ChatGPT and GPTs to browse the internet to answer questions about recent topics and events."},customActionsOptionTitle:{id:"workspaceSettingsOld.pluginsOptionTitle.0",defaultMessage:"Custom actions"},browseOptionTitle:{id:"workspaceSettingsOld.browseOptionTitle",defaultMessage:"Browsing with Bing"},workspaceGPTsTitle:{id:"workspaceSettingsOld.workspaceGPTsTitle",defaultMessage:"Workspace"},appearanceTitle:{id:"workspaceSettingsOld.appearanceTitle",defaultMessage:"Appearance"},sharingSettingsTitle:{id:"workspaceSettingsOld.sharingSettingsTitle",defaultMessage:"Sharing"},gptSharingTitle:{id:"workspaceSettingsOld.gptSharingTitle",defaultMessage:"GPTs can be shared with..."},chatSharingTitle:{id:"workspaceSettingsOld.chatSharingTitle",defaultMessage:"Chats can be shared with..."},workspaceMembersOnlySelect:{id:"workspaceSettingsOld.workspaceMembersOnlySelect",defaultMessage:"Workspace members only"},anyOneSelect:{id:"workspaceSettingsOld.anyOneSelect",defaultMessage:"Anyone"},noOneSelect:{id:"workspaceSettingsOld.noOneSelect",defaultMessage:"No one"},inviteOnlySelect:{id:"workspaceSettingsOld.inviteOnlySelect",defaultMessage:"Invite only"},featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"},conversationRetention:{id:"workspaceSettingsOld.conversationRetention",defaultMessage:"Chat retention"},retentionInfinite:{id:"workspaceSettingsOld.retentionInfinite",defaultMessage:"Infinite"},retentionNinetyDays:{id:"workspaceSettingsOld.retentionNinetyDays",defaultMessage:"90 days"},retentionOneYear:{id:"workspaceSettingsOld.retentionOneYear",defaultMessage:"1 year"},retentionCustomDays:{id:"workspaceSettingsOld.retentionCustomDays",defaultMessage:"{num} days"},retentionChange:{id:"workspaceSettingsOld.retentionChange",defaultMessage:"Contact your account manager to change this setting."},workspaceGPTsDescription:{id:"workspaceSettingsOld.workspaceGPTsDescription",defaultMessage:"Manage which capabilities are available for GPTs built in your workspace or by ChatGPT. This does not apply to third-party GPTs."},enterpriseUpsellPill:{id:"workspaceSettingsOld.enterpriseUpsellPill",defaultMessage:"Enterprise"},retentionSettingTooltip:{id:"workspaceSettingsOld.retentionSettingTooltip",defaultMessage:"Contact your account manager to change this setting"},enterpriseRequiredMessage:{id:"workspaceSettingsOld.enterpriseRequiredMessage",defaultMessage:"Only workspaces with the Enterprise plan can change these settings"},shareRecipientTitlePrivate:{id:"workspaceSettingsOld.shareRecipientTitlePrivate",defaultMessage:"Private"},shareRecipientTitleLink:{id:"workspaceSettingsOld.shareRecipientTitleLink",defaultMessage:"Link"},shareRecipientTitlePublic:{id:"workspaceSettingsOld.shareRecipientTitlePublic",defaultMessage:"Public"}});function W(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}var B=!0;function L(e){return(0,Z.jsx)(R,function(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?W(Object(s),!0).forEach(function(t){(0,a.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}({},e))}L.getLayout=function(e){return(0,Z.jsx)(r.ZP,{mobilePageTitle:"GPTs",requireOwnerPrivileges:!0,children:e})}},70657:function(e,t,s){"use strict";s.d(t,{hb:function(){return eh},yG:function(){return ef},ZP:function(){return eu}});var a,r,n,i,l,o=s(41141),c=s(94521),d=s(21904),u=s(27084),p=s(50684),m=s(1e4),g=s(51022),f=s(81354),x=s(65530),h=s(18532),j=s(58543),b=s(19841),w=s(92379),y=s(72349),v=s(26123),O=s(25940),k=s(66246),P=s(651);function N(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function S(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?N(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):N(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function Z(e){let{onFileChange:t,className:s,message:a,mimeTypes:r}=e,n=(0,v.Z)(),i=null!=a?a:n.formatMessage(M.helpText),{open:l,getRootProps:o,getInputProps:c,isDragActive:d}=(0,y.uI)(S({disabled:!1,noClick:!0,onDropAccepted:e=>{if(e.length>0){let s=e[0];r&&r.includes(s.type)&&t(s)}},onDropRejected:()=>null,multiple:!1,maxSize:h.xC},(0,j.Z8)(r)));return(0,P.jsxs)("div",S(S({className:(0,b.default)("flex flex-col content-center justify-center gap-3 rounded border border-dashed px-6 py-16 text-center juice:rounded-xl",d?" border-green-600 bg-green-600 bg-opacity-10":"border-token-border-medium",s)},o()),{},{children:[(0,P.jsx)("input",S({},c())),(0,P.jsx)("div",{className:"text-center dark:text-white",children:(0,P.jsx)("div",{className:"inline-block",children:(0,P.jsx)(k.tCl,{})})}),(0,P.jsx)("div",{className:"text-center text-sm",children:i}),(0,P.jsx)("div",{className:"cursor-pointer text-center text-sm font-bold text-green-600",onClick:()=>{l()},children:n.formatMessage(M.openFilePicker)})]}))}let M=(0,O.vU)({helpText:{id:"FileUploadBox.helpText",defaultMessage:"Drop file here to upload"},openFilePicker:{id:"FileUploadBox.openFilePicker",defaultMessage:"Browse files"}});var T=s(8649),A=s(23041),D=s(49217),E=s(61457),C=s(37234),_=s(94982),G=s(93223),F=s(55371),I=s(35226),R=s(96053),U=s(72256);function W(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function B(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?W(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):W(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function L(e){var t,s;let{workspace:a}=e,{0:r,1:n}=(0,w.useState)(null!==(t=null==a?void 0:a.name)&&void 0!==t?t:""),{0:i,1:l}=(0,w.useState)(!1);!i&&a&&(l(!0),""==r&&n(null!==(s=null==a?void 0:a.name)&&void 0!==s?s:""));let{0:o,1:c}=(0,w.useState)(a.profilePictureUrl),{0:p,1:m}=(0,w.useState)(a.profilePictureId),g=(0,F.EV)(F.B.WorkspaceAppearance),h=(0,v.Z)(),{0:b,1:y}=(0,w.useState)(void 0);async function O(e){let t=await (0,j.WI)(e,2*u.EF.workspaceAvatarPreview),s=(0,C.W7)(t);y({tempId:s,file:t,status:E.XX.Uploading,progress:1,fileId:null,cdnUrl:null}),(0,C.lU)(s,t,h,d.Ei.ProfilePicture,{onFileCreated(e,t,s){y(a=>"initial"!==a&&(null==a?void 0:a.tempId)===e&&a.status===E.XX.Uploading?B(B({},a),{},{progress:10,fileId:t,cdnUrl:s}):a)},onFileUploadProgress(e,t){y(s=>"initial"!==s&&(null==s?void 0:s.tempId)===e&&s.status===E.XX.Uploading?B(B({},s),{},{progress:t}):s)},onFileUploaded(e,t,s){y(t=>"initial"!==t&&t&&t.cdnUrl&&t.tempId===e?(G.Z.getFileDownloadLink(t.fileId).then(e=>{e.status===d.KF.Success&&(m(t.fileId),c(e.download_url))}),B(B({},t),{},{status:E.XX.Ready,progress:100,fileSpec:B({name:t.file.name,id:t.fileId,size:t.file.size},null!=s?s:{})})):t)},onError(e){y(t=>{if("initial"!==t&&(null==t?void 0:t.tempId)===e){m(void 0),c(void 0),W(null);return}return t})}})}let k=function(e){let t=(0,I.NL)(),s=(0,v.Z)();return(0,R.D)({mutationFn:t=>{let{name:a,profilePictureId:r,profilePictureUrl:n}=t;return G.Z.patchWorkspace({workspaceId:e,name:a,profile_picture_id:r,profile_picture_url:n}).catch(e=>{_.m.danger(s.formatMessage(q.saveError,{error:e.message}))})},onSuccess:()=>{t.invalidateQueries({queryKey:["account-status"]})}})}(a.id),N=(0,P.jsx)(T.Z.Button,{color:"primary",disabled:"initial"!==b&&void 0!==b&&b.status!==E.XX.Ready||"initial"!==b&&void 0!==b&&b.status===E.XX.Ready&&!o||k.isPending||0===r.trim().length,onClick:async()=>{k.mutate({name:r,profilePictureId:p,profilePictureUrl:o}),F.vm.closeModal(F.B.WorkspaceAppearance)},title:h.formatMessage(q.modalSubmit)}),S=(0,P.jsx)(T.Z.Button,{onClick:()=>{y(void 0),m(a.profilePictureId),c(a.profilePictureUrl),F.vm.closeModal(F.B.WorkspaceAppearance)},title:h.formatMessage(q.modalCancel)}),{0:M,1:W}=(0,w.useState)(null);return(0,w.useEffect)(()=>{if("initial"!==b&&void 0!=b&&null==M){let e=new FileReader;e.addEventListener("load",()=>{let t=e.result;"string"==typeof t&&W(t)}),e.readAsDataURL(b.file)}},[b,M]),(0,P.jsxs)(D.Z,{isOpen:g,onClose:()=>F.vm.closeModal(F.B.WorkspaceAppearance),showCloseButton:!0,primaryButton:N,secondaryButton:S,type:"danger",title:h.formatMessage(q.modalTitle),children:[(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-name",className:"block pb-1 font-semibold text-token-text-primary",children:(0,P.jsx)(U.Z,B({},q.workspaceName))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:(0,P.jsx)(U.Z,B({},q.workspaceNameDescription))})]}),(0,P.jsx)("div",{className:"mb-4",children:(0,P.jsx)(x.Z,{type:"text",name:"workspace-name",value:r,onChange:e=>n(e.target.value),maxLength:64})}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap",children:[(0,P.jsx)("label",{htmlFor:"workspace-avatar",className:"block pb-1 font-semibold text-token-text-primary",children:(0,P.jsx)(U.Z,B({},q.workspaceAvatar))}),(0,P.jsx)("p",{className:"font-base text-sm text-token-text-secondary",children:h.formatMessage(q.workspaceAvatarDescription,{size:2*u.EF.workspaceAvatarPreview})})]}),(0,P.jsxs)("div",{className:"mb-4 flex-wrap text-center",children:[o?(0,P.jsxs)("div",{className:"relative mb-3 inline-flex",children:[(0,P.jsx)(u.B0,{src:o,size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute -right-1 -top-1",children:(0,P.jsx)(z,{onClick:()=>{m(null),c(null),y(void 0),W(null)}})})]}):void 0!=b&&"initial"!==b&&M?(0,P.jsx)("div",{className:"flex flex-col justify-center text-center",children:(0,P.jsxs)("div",{className:"relative mb-3 text-center",children:[(0,P.jsx)(u.B0,{src:URL.createObjectURL(b.file),size:"workspaceAvatarPreview"}),(0,P.jsx)("div",{className:"absolute inset-0 flex items-center justify-center text-white",children:(0,P.jsx)(f.Z,{percentage:b.progress,className:"h-6 w-6"})})]})}):(0,P.jsx)(Z,{onFileChange:e=>{O(e)},mimeTypes:j.KL}),(0,P.jsx)(A.Z,{className:"mt-3",children:h.formatMessage(q.propagationWarning)})]})]})}function z(e){let{onClick:t}=e;return(0,P.jsx)("div",{className:" flex h-6 w-6 cursor-pointer flex-row flex-wrap content-center justify-center rounded-full border-2 border-white bg-black text-white",onClick:t,children:(0,P.jsx)(k.tPq,{className:"h-3 w-3"})})}let q=(0,O.vU)({modalTitle:{id:"workspaceAppearanceModal.title",defaultMessage:"Workspace appearance"},modalSubmit:{id:"workspaceAppearanceModal.submit",defaultMessage:"Save"},modalCancel:{id:"workspaceAppearanceModal.cancel",defaultMessage:"Cancel"},workspaceName:{id:"workspaceAppearanceModal.workspaceName",defaultMessage:"Workspace name"},workspaceNameDescription:{id:"workspaceAppearanceModal.workspaceNameDescription",defaultMessage:"Update the name of the workspace."},workspaceAvatar:{id:"workspaceAppearanceModal.workspaceAvatar",defaultMessage:"Workspace image"},workspaceAvatarDescription:{id:"workspaceAppearanceModal.workspaceAvatarDescription",defaultMessage:"Upload a JPEG or PNG workspace image for your team. (Minimum {size}\xd7{size}px recommended.)"},propagationWarning:{id:"workspaceAppearanceModal.propagationWarning",defaultMessage:"Changes to the workspace name and image may take some time to take effect."},saveError:{id:"workspaceAppearanceModal.saveError",defaultMessage:"Failed to save workspace appearance"}});var X=s(62484),K=s(92187),V=s(4702),H=s(24040),Q=s(43128),Y=s(74091),J=s(14910),$=s(55257),ee=s(5443),et=s(35746),es=s(55775);function ea(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function er(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ea(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ea(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function en(e){let{accountId:t,subscription:s}=e,a=(0,v.Z)(),r=(0,et.wK)(t),{0:n,1:i}=(0,w.useState)(!1),l=(0,es.Gk)(t),o=async()=>{i(!0);try{await r.mutateAsync(t)}catch(e){_.m.warning(a.formatMessage(ei.errorRenewingSubscription),{hasCloseButton:!0})}finally{i(!1)}};return(0,P.jsx)("div",{className:"bg-token-main-surface-secondary",children:(0,P.jsxs)("div",{className:"mx-auto flex w-full max-w-5xl items-center justify-between px-2 py-4 md:px-6 lg:px-10 lg:py-6",children:[(0,P.jsxs)("div",{className:"mx-2 flex-grow md:mx-4",children:[(0,P.jsxs)("div",{className:"flex items-center",children:[(0,P.jsx)($.FE,{className:"mr-4 hidden text-orange-500 md:block"}),(0,P.jsx)("p",{className:"text-lg font-semibold",children:(0,P.jsx)(U.Z,er({},ei.workspaceWillBeDeactivated))})]}),null!=s.active_until&&(0,P.jsx)("p",{className:"md:ml-8",children:(0,P.jsx)(U.Z,er(er({},ei.retainAccessUntil),{},{values:{expiryDate:new Date(s.active_until)}}))})]}),l&&(0,P.jsx)(ee.z,{color:"primary",onClick:o,loading:n,children:(0,P.jsx)(U.Z,er({},ei.reactivateBtn))})]})})}let ei=(0,O.vU)({retainAccessUntil:{id:"adminPage.retainAccessUntil",defaultMessage:"You will retain access to the workspace until the end of your billing cycle on {expiryDate, date, long}."},workspaceWillBeDeactivated:{id:"adminPage.workspaceWillBeDeactivated",defaultMessage:"This workspace will be deactivated."},reactivateBtn:{id:"adminPage.reactivateBtn",defaultMessage:"Reactivate"},errorRenewingSubscription:{id:"adminPage.errorRenewingSubscription",defaultMessage:"There was an error reactivating your subscription."}});function el(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function eo(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?el(Object(s),!0).forEach(function(t){(0,c.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):el(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function ec(e){let{route:t,icon:s,name:a,upsellEnterprise:r=!1}=e,n=(0,Q.useRouter)();return r?(0,P.jsx)(X.u,{label:(0,P.jsx)(U.Z,eo({},ej.availableForEnterprise)),side:"right",children:(0,P.jsxs)(K.ZB,{$as:"button",className:(0,b.default)("w-full rounded text-left","hover:bg-token-sidebar-surface-secondary"),children:[(0,P.jsx)(k.oVl,{className:"icon-sm shrink-0 text-token-text-secondary"}),(0,P.jsx)("span",{className:"text-token-text-secondary",children:(0,P.jsx)(U.Z,eo({},a))})]})}):(0,P.jsxs)(K.ZB,{$as:"button",className:(0,b.default)("w-full rounded text-left hover:bg-token-sidebar-surface-secondary",n.route===t&&"bg-token-sidebar-surface-secondary"),onClick:e=>{n.push(t),e.stopPropagation()},children:[s,(0,P.jsx)(U.Z,eo({},a))]})}function ed(e){let{workspace:t,hasAdminPrivileges:s,hasOwnerPrivileges:a}=e,r=(0,Q.useRouter)(),n=(0,w.useCallback)(()=>{r.push("/")},[r]),i=(0,H.ec)(H.F_.isEnterprisePlan);return(0,P.jsxs)("nav",{className:"p-2",children:[(0,P.jsx)("div",{className:"mb-1 flex flex-row gap-2",children:(0,P.jsxs)(g.MP,{onClick:n,children:[(0,P.jsx)(J.Rp,{className:"icon-sm"}),(0,P.jsx)(U.Z,eo({},ej.backToChat))]})}),(0,P.jsxs)("div",{className:"flex flex-col gap-2 py-2",children:[(0,P.jsxs)("div",{className:"flex flex-col gap-2 rounded px-2 py-2 ".concat(a?"cursor-pointer hover:bg-token-main-surface-secondary":""),onClick:()=>{a&&F.vm.openModal(F.B.WorkspaceAppearance)},children:[(0,P.jsx)(u.B0,{size:"large",src:null==t?void 0:t.profilePictureUrl}),(0,P.jsxs)("div",{className:"align-center flex flex-row",children:[(0,P.jsx)("h2",{className:"flex-1 text-lg text-token-text-primary dark:text-white",children:null==t?void 0:t.name}),a?(0,P.jsx)("div",{className:"my-auto h-4 flex-initial align-middle dark:text-white",children:(0,P.jsx)(k.vdY,{className:"icon-sm opacity-70 hover:opacity-100"})}):null]})]}),(0,P.jsx)(ec,{route:"/admin",icon:(0,P.jsx)(k.yjj,{className:"icon-sm"}),name:ej.membersPageTitle}),i&&(0,P.jsx)(ec,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!i,name:(0,O.Em)({id:"aecR1i",defaultMessage:"Groups"})}),a&&(0,P.jsx)(ec,{route:"/admin/billing",icon:(0,P.jsx)(k.ciH,{className:"icon-sm"}),name:ej.billing}),a&&(0,P.jsx)(ec,{route:"/admin/gpts",icon:(0,P.jsx)(k.frp,{className:"icon-sm"}),name:ej.gpts}),a&&(0,P.jsx)(ec,{route:"/admin/settings",icon:(0,P.jsx)(k.SWE,{className:"icon-sm"}),name:ej.settings}),!i&&(0,P.jsx)("span",{className:"mx-3 border-t border-y-token-border-medium"}),!i&&(0,P.jsx)(ec,{route:"/admin/groups",icon:(0,P.jsx)(k.wws,{className:"icon-sm"}),upsellEnterprise:!i,name:(0,O.Em)({id:"aecR1i",defaultMessage:"Groups"})}),s&&(0,P.jsx)(ec,{route:"/admin/analytics",icon:(0,P.jsx)(k.IeX,{className:"icon-sm"}),name:ej.analytics,upsellEnterprise:!i}),a&&(0,P.jsx)(ec,{route:"/admin/identity",upsellEnterprise:!i,icon:(0,P.jsx)(k.kaz,{className:"icon-sm"}),name:ej.identity})]})]})}function eu(e){var t;let{mobilePageTitle:s,requireAdminPrivileges:a=!1,requireOwnerPrivileges:r=!1,children:n}=e,i=(0,H.ec)(e=>e.currentWorkspace),l=(0,Q.useRouter)(),o=null!=i?(t=i.role)===d.r3.ADMIN||t===d.r3.OWNER:void 0,c=null!=i?i.role===d.r3.OWNER:void 0;return((0,w.useEffect)(()=>{a&&!1===o&&l.push("/admin"),r&&!1===c&&l.push("/admin")},[a,o,l,r,c]),null==(0,V.t)())?null:(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(m.Z,{mobileHeaderContent:s,forceOpenDesktopSidebar:!0,sidebar:(0,P.jsx)(ed,{workspace:null!=i?i:void 0,hasAdminPrivileges:o,hasOwnerPrivileges:c}),children:n}),null==i?null:(0,P.jsx)(L,{workspace:i})]})}let ep=Y.Z.div(a||(a=(0,o.Z)(["border-b border-token-main-surface-tertiary hidden md:block py-6 lg:py-10"]))),em=Y.Z.h2(r||(r=(0,o.Z)(["mx-auto w-full max-w-4xl px-2 md:px-6 lg:px-10"]))),eg=(0,Y.Z)(em)(n||(n=(0,o.Z)(["font-normal text-base text-token-text-secondary"])));function ef(e){let{title:t,subtitle:s}=e,{data:a}=(0,et.ZP)(),r=(0,V.t)(),n=r&&a&&a.plan_type===d.D8.TEAM&&!a.will_renew;return(0,P.jsxs)(P.Fragment,{children:[n&&(0,P.jsx)(en,{accountId:r.id,subscription:a}),(0,P.jsxs)(ep,{children:[(0,P.jsx)(em,{children:t}),s&&(0,P.jsx)(eg,{children:s})]})]})}Y.Z.p(i||(i=(0,o.Z)(["text-sm text-token-text-tertiary"])));let ex=Y.Z.div(l||(l=(0,o.Z)(["max-w-4xl mx-auto w-full px-2 md:px-6 lg:px-10"])));function eh(e){let{children:t,showSpinner:s}=e,a=(0,V.t)(),r=(0,H.ec)(e=>e.currentWorkspace),n=!a||s;return(0,P.jsxs)(ex,{children:[n&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(p.Z,{})}),!n&&!r&&(0,P.jsx)("div",{className:"flex min-h-[80vh] items-center justify-center",children:(0,P.jsx)(U.Z,eo({},ej.workspaceNotFound))}),!n&&r&&t]})}let ej=(0,O.vU)({workspaceNotFound:{id:"adminPage.workspaceNotFound",defaultMessage:"Workspace not found"},backToChat:{id:"adminPage.backToChat",defaultMessage:"Back to chat"},membersPageTitle:{id:"adminPage.membersPageTitle",defaultMessage:"Members"},analytics:{id:"adminPage.analytics",defaultMessage:"Analytics"},billing:{id:"adminPage.billing.1",defaultMessage:"Billing"},gpts:{id:"adminPage.gpts",defaultMessage:"GPTs"},settings:{id:"adminPage.Settings",defaultMessage:"Settings"},identity:{id:"adminPage.identity.0",defaultMessage:"Identity & provisioning"},availableForEnterprise:{id:"adminPage.availableForEnterprise",defaultMessage:"Available for Enterprise plan"}})},49868:function(e,t,s){"use strict";s.d(t,{I:function(){return j},K:function(){return b}});var a=s(94521),r=s(62484),n=s(93223),i=s(35226),l=s(96053),o=s(26123),c=s(72256),d=s(25940),u=s(66246),p=s(65321),m=s(94982),g=s(93322),f=s(651);function x(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),s.push.apply(s,a)}return s}function h(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?x(Object(s),!0).forEach(function(t){(0,a.Z)(e,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):x(Object(s)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))})}return e}function j(){return(0,f.jsx)(u.szr,{className:"icon-sm ml-1 text-token-text-tertiary"})}function b(e){var t;let{workspaceId:s,Icon:a,label:d,feature:u,value:x,tooltip:b,disabled:y=!1}=e,v=(0,o.Z)(),O=(0,i.NL)(),{variables:k,mutate:P}=(0,l.D)({mutationFn:e=>{let{feature:t,enabled:a}=e;return n.Z.setWorkspaceBetaFeature(s,t,a)},onSettled:()=>{O.invalidateQueries({queryKey:["workspace-settings"]})},onError:()=>{m.m.danger(v.formatMessage(w.featureSettingsUpdateFailed))}});return(0,f.jsxs)(g.vi,{className:"justify-start py-6",children:[(0,f.jsx)(p.wy,{label:"",disabled:y,enabled:null!==(t=null==k?void 0:k.enabled)&&void 0!==t?t:x,onChange:e=>{P({feature:u,enabled:e})}}),(0,f.jsxs)("p",{className:"text-md inline-flex items-center",children:[a&&(0,f.jsx)(a,{className:"icon-md mr-2"}),(0,f.jsx)(c.Z,h({},d)),b&&(0,f.jsx)(r.u,{sideOffset:4,interactive:!0,delayDuration:0,label:(0,f.jsx)(c.Z,h({},b)),side:"top",children:(0,f.jsx)(j,{})})]})]})}let w=(0,d.vU)({featureSettingsUpdateFailed:{id:"workspaceSettingsOld.featureSettingsUpdateFailed",defaultMessage:"Failed to update feature setting"}})},93322:function(e,t,s){"use strict";s.d(t,{$V:function(){return m},A4:function(){return g},Li:function(){return j},W8:function(){return w},i$:function(){return f},i9:function(){return h},qQ:function(){return x},vi:function(){return b}});var a,r,n,i,l,o,c,d,u=s(41141),p=s(74091);let m=p.Z.div(a||(a=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),g=p.Z.div(r||(r=(0,u.Z)(["text-xl font-semibold"]))),f=p.Z.div(n||(n=(0,u.Z)(["text-base font-semibold"]))),x=p.Z.div(i||(i=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),h=p.Z.div(l||(l=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),j=p.Z.div(o||(o=(0,u.Z)(["text-sm"]))),b=p.Z.div(c||(c=(0,u.Z)(["flex justify-between py-4 gap-4"]))),w=p.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},15888:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/gpts",function(){return s(42974)}])}},function(e){e.O(0,[6617,3656,7349,6271,3718,4368,5365,2349,5582,6331,4984,8852,6463,1783,4834,7126,8890,9511,0,5165,3969,6992,4099,6385,765,5939,6229,766,9987,5720,2481,2888,9774,179],function(){return e(e.s=15888)}),_N_E=e.O()}]);
//# sourceMappingURL=gpts-d8619c543387c893.js.map