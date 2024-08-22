"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[431],{7331:function(e,t,n){n.d(t,{Z:function(){return z}});var a,i=n(98601),r=n(99333),s=n(55963),o=n(2721),l=n(60464),c=n(42420),d=n(56032),u=n(18939),m=n.n(u),f=n(92379),p=n(75172),g=n(62984),h=n(11550),b=n(19841),v=n(68306),x=n(75592),j=n(67526),y=n(30853),w=n(28146),M=n(651);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function T(e){return e.split(/[\s,]+/)}function P(e){let{value:t,onChange:n,className:a}=e,i=(0,p.Z)(),{0:r,1:s}=(0,f.useState)(""),o=(0,f.useCallback)(e=>{if(r)switch(e.key){case"Enter":case",":case" ":n([...t,...T(r).map(S)]),s(""),e.preventDefault()}},[r,n,t]);return(0,M.jsx)(x.ZP,{className:(0,b.default)("react-select-container",a),isMulti:!0,onBlur:e=>{r&&(n([...t,...T(r).map(S)]),s(r),e.preventDefault())},classNamePrefix:"react-select",components:O,inputValue:r,isClearable:!0,menuIsOpen:!1,onChange:n,onInputChange:s,onKeyDown:o,placeholder:i.formatMessage(E.placeholder),value:t,"aria-labelledby":"add-emails-label",name:"add-member-emails"})}let S=e=>({label:e,value:e,isValid:l.F.test(e)}),O={DropdownIndicator:()=>null,IndicatorsContainer:()=>null,ClearIndicator:()=>null,MultiValueRemove:()=>null,MultiValue:e=>{let t=(0,p.Z)(),n=(0,M.jsxs)("span",{className:"flex items-center gap-1",children:[(0,M.jsx)("span",{children:e.children}),(0,M.jsx)(w.tPq,{className:"icon-sm"})]}),a=e.data.isValid?n:(0,M.jsx)(y.u,{label:t.formatMessage(E.tooltipInvalidEmail,{email:e.data.value}),side:"top",children:n});return(0,M.jsx)(j.c.MultiValue,N(N({},e),{},{children:(0,M.jsx)("button",{className:(0,b.default)("m-1 cursor-pointer rounded-full border border-transparent py-1 pl-3 pr-2 text-sm text-token-text-primary",e.data.isValid?"bg-token-main-surface-secondary hover:border-token-border-medium hover:bg-token-main-surface-tertiary":"bg-red-200 text-red-500"),onClick:t=>{e.removeProps.onClick?.(t),t.preventDefault()},"aria-label":t.formatMessage(E.removeMember,{member:e.data.value}),children:a})}))}},E=(0,v.vU)({membersAdded:{id:"emailsTextarea.membersAdded",defaultMessage:"+{count} {count, plural, one {member} other {members}}"},removeMember:{id:"emailsTextarea.removeMember",defaultMessage:"Remove {member}"},tooltipInvalidEmail:{id:"emailsTextarea.tooltipInvalidEmail",defaultMessage:'"{email}" may not be a valid email'},clearAllEntries:{id:"emailsTextarea.clearAllEntries",defaultMessage:"Clear all"},placeholder:{id:"emailsTextarea.placeholder",defaultMessage:"Type an email and press enter..."}});var I=n(6440),C=n(94668),Z=n(73062),D=n(36792),A=n(24740),R=n(12310),L=n(44087);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let V=((a={})[a.INITIAL=0]="INITIAL",a[a.CSV_TABLE=1]="CSV_TABLE",a),B=`email,role
user1@company.com,member
admin@company.com,admin
it@company.com,owner`,_=[];function z(e){let{workspace:t,canResendInviteEmails:n,onCancel:a,cancelButtonText:i,onSuccess:u,fullWidthButtons:b=!1}=e,v=t.isOwnerOfAccount(),{0:x,1:j}=(0,f.useState)(!1),{0:y,1:k}=(0,f.useState)(!1),N=(0,f.useRef)(null),T=t.isTeam(),S=(0,p.Z)(),{0:O,1:E}=(0,f.useState)(!0),{0:F,1:z}=(0,f.useState)(!1),{0:q,1:G}=(0,f.useState)(V.INITIAL),{0:K,1:Y}=(0,f.useState)([]),{0:$,1:Q}=(0,f.useState)([]),{mutateAsync:X}=function(e,t){let n=(0,p.Z)(),a=(0,c.NL)();return(0,d.D)({mutationFn:async t=>{let{emails:a,role:i,resendEmails:r}=t,s=[],l=Math.max(5,Math.round(a.length/10));for(let e=0;e<a.length;e+=l)s.push(a.slice(e,e+l));let c=async t=>o.Z.addWorkspaceUsers(e,t,i,r).then(e=>(e.errored_emails.length>0&&A.m.danger(n.formatMessage(U.inviteMessageFailure,{emailsStr:e.errored_emails.map(e=>{let{email_address:t,error:n}=e;return`${t}: ${n}`}).join(", ")})),e.account_invites)).catch(e=>{throw A.m.danger(e.message),e});return(await Promise.all(s.map(e=>c(e)))).flat()},onSuccess:()=>{a.invalidateQueries({queryKey:["workspace","invites",e]}),t?.()}})}(t.id,u),J=(0,R.uo)(),ee=(0,R.VG)()??!0,{0:et,1:en}=(0,f.useState)(_);(0,f.useEffect)(()=>{if(!K?.length||!J?.length||ee){en(_);return}let e=J.map(e=>"@"+e.hostname.toLowerCase());en(K.map(e=>{let{email:t}=e;return t.toLowerCase()}).filter(t=>!e.some(e=>t.endsWith(e))))},[J,ee,K]);let ea=H(v),ei=async e=>{let t=e.target.files?.[0];if(t){let e=await new Promise(e=>{if(t.size/1048576>25)e({status:"error",reason:"file_too_large"});else if("text/csv"!==t.type)e({status:"error",reason:"invalid_file_type"});else{let n=new FileReader;n.readAsText(t),n.onload=function(t){let n=y,a=(t.target?.result).split("\n"),i=new Set;e({status:"success",newRows:a.reduce((e,t)=>{let[a,r]=t.split(",").map(e=>e.trim());return l.F.test(a)&&!i.has(a)&&(void 0!==ea[r]||n||(n=!0),e.push({email:a,role:ea[r]??ea.member})),i.add(a),e},[]),hasWarning:n})}}});"success"===e.status?(Y(e.newRows),G(V.CSV_TABLE),k(e.hasWarning)):"file_too_large"===e.reason?A.m.danger(S.formatMessage(U.fileTooLargeWarning,{maxSize:"25MB"}),{duration:5}):"invalid_file_type"===e.reason&&A.m.danger(S.formatMessage(U.fileIncorrectTypeWarning),{duration:5})}},er=(e,t,n)=>{let a=[...K];a[e]=W(W({},a[e]),{},{[t]:n}),Y(a)},es=e=>{Y([...K.slice(0,e),...K.slice(e+1)])},eo=(0,f.useCallback)(()=>{Y([]),G(V.INITIAL),z(!1),Q([])},[]),el=async()=>{z(!0);try{K.length>5&&A.m.info(S.formatMessage(U.inviteMessageLoading,{numRows:K.length}),{hasCloseButton:!0});let e=[["admin",r.r3.ADMIN],["owner",r.r3.OWNER],["member",r.r3.STANDARD]],n=(await Promise.all(m()(e.map(e=>{let[t,n]=e,a=K.filter(e=>e.role===t).map(e=>e.email);return a.length>0&&X({emails:a,role:n,resendEmails:O})})))).flat().length;n>0&&A.m.success(S.formatMessage(U.inviteSuccessToast,{numRows:n,userStr:1===n?"user":"users",workspaceName:(0,L.CV)(S,t)})),u?.(),eo()}finally{z(!1)}},ec=(0,M.jsx)(h.z,{color:"primary",size:b?"large":"medium",disabled:F||0===K.length||et.length>0,onClick:el,children:F?S.formatMessage(U.inviteMemberInviteSubmitButtonLoading):S.formatMessage(U.inviteMemberInviteSubmitButton)}),ed=(0,M.jsx)(h.z,{color:"primary",size:b?"large":"medium",disabled:0===$.length,onClick:()=>{let e=new Set;Y($.reduce((t,n)=>(e.has(n.value)||t.push(n.value),e.add(n.value),t),[]).map(e=>({email:e,role:ea.member}))),G(V.CSV_TABLE)},children:S.formatMessage(U.inviteMemberInviteNextButton)});return(0,M.jsxs)("div",{className:"flex flex-col gap-2",children:[q===V.INITIAL&&(0,M.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,M.jsxs)("div",{className:"flex items-start justify-between gap-4",children:[(0,M.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,M.jsx)("label",{htmlFor:"upload-csv",id:"upload-csv-label",children:(0,M.jsx)(g.Z,W({},U.importCSVLabel))}),(0,M.jsxs)("span",{className:"text-sm text-token-text-tertiary",children:[(0,M.jsx)(g.Z,W(W({},x?U.helperCSVFormatHide:U.helperCSVFormatShow),{},{values:{link:e=>(0,M.jsx)("button",{className:"underline",onClick:()=>{j(!x)},children:e})}})),x&&(0,M.jsx)("pre",{className:"mt-4",children:B})]})]}),(0,M.jsx)("input",{ref:N,type:"file",accept:".csv,text/csv",id:"upload-csv",className:"hidden",onChange:ei}),(0,M.jsx)(h.z,{color:"secondary",onClick:()=>N.current?.click(),children:(0,M.jsx)(g.Z,W({},U.importCSVButton))})]}),(0,M.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,M.jsx)("label",{htmlFor:"add-member-emails",id:"add-emails-label",children:(0,M.jsx)(g.Z,W({},U.addEmailsFieldName))}),(0,M.jsx)(P,{value:$,onChange:Q})]})]}),q===V.CSV_TABLE&&(0,M.jsxs)(M.Fragment,{children:[y&&(0,M.jsxs)("div",{className:"flex w-full items-center bg-yellow-100 p-4",children:[(0,M.jsx)(w.ETw,{className:"icon-sm mr-2 text-yellow-700"}),(0,M.jsx)("div",{className:"flex-grow text-yellow-700",children:(0,M.jsx)(g.Z,W({},U.unspecifiedRoleDescription))})]}),et.length>0&&(0,M.jsx)("div",{className:"flex w-full items-center bg-red-100 p-4",children:(0,M.jsxs)("div",{className:"flex-grow text-red-700",children:[(0,M.jsx)(g.Z,W({},U.prohibitedExternalEmailDescription)),(0,M.jsx)("pre",{className:"my-1",children:et.join(", ")}),(0,M.jsx)(g.Z,W({},U.prohibitedExternalEmailResolution))]})}),(0,M.jsxs)(D.Z.Root,{size:"normal",children:[(0,M.jsxs)(D.Z.Header,{children:[(0,M.jsx)(D.Z.HeaderCell,{children:(0,M.jsx)(g.Z,W({},U.inviteTableHeaderEmail))}),(0,M.jsx)(D.Z.HeaderCell,{className:"pl-3 dark:bg-gray-900",children:(0,M.jsx)(g.Z,W({},U.inviteTableHeaderRole))}),(0,M.jsx)(D.Z.HeaderCell,{})]}),(0,M.jsx)(D.Z.Body,{children:K.map((e,t)=>(0,M.jsxs)(D.Z.Row,{children:[(0,M.jsx)(D.Z.Cell,{children:(0,M.jsx)(I.Z,{name:"email",type:"email",value:e.email,onChange:e=>er(t,"email",e.target.value),color:"neutral"})}),(0,M.jsx)(D.Z.Cell,{children:(0,M.jsxs)(Z.Z.Root,{value:e.role,onValueChange:e=>er(t,"role",e),children:[(0,M.jsxs)(Z.Z.Trigger,{children:[(0,M.jsx)(Z.Z.Value,{}),(0,M.jsx)(Z.Z.Icon,{})]}),(0,M.jsx)(Z.Z.Portal,{children:(0,M.jsxs)(Z.Z.Content,{className:"border border-token-main-surface-secondary",children:[(0,M.jsx)(Z.Z.Item,{value:ea.member,children:(0,M.jsx)(g.Z,W({},U.inviteRoleMember))}),ea.admin&&(0,M.jsx)(Z.Z.Item,{value:ea.admin,children:(0,M.jsx)(g.Z,W({},U.inviteRoleAdmin))}),ea.owner&&(0,M.jsx)(Z.Z.Item,{value:ea.owner,children:(0,M.jsx)(g.Z,W({},U.inviteRoleOwner))})]})})]})}),(0,M.jsx)(D.Z.Cell,{textAlign:"right",children:(0,M.jsx)(w.XHJ,{onClick:()=>es(t),className:"icon-sm mr-2 cursor-pointer text-token-text-secondary"})})]},t))})]})]}),n&&E&&(0,M.jsx)("div",{className:"mt-2 flex items-center text-left text-token-text-secondary",children:(0,M.jsx)(s.Z,{id:"resend-emails",checked:O,onChange:e=>E(e.currentTarget.checked),label:S.formatMessage(U.resendEmailsFieldName)})}),q===V.INITIAL&&T&&(0,M.jsx)("div",{className:"mb-4",children:(0,M.jsx)(C.Z,{children:(0,M.jsx)(g.Z,W({},U.teamInviteModalNote))})}),(0,M.jsxs)("div",{className:"flex justify-end gap-2",children:[(0,M.jsx)(h.z,{color:"secondary",size:b?"large":"medium",onClick:()=>{q!==V.INITIAL?G(V.INITIAL):(eo(),a())},children:q===V.INITIAL?i:S.formatMessage(U.inviteMemberInviteBackButton)}),q===V.INITIAL?ed:ec]})]})}let H=e=>{let t={member:"member"};return e&&(t.admin="admin",t.owner="owner"),t},U={importCSVLabel:{id:"adminPage.importCSVLabel",defaultMessage:"Import from CSV",description:"Name of label for import from CSV button"},helperCSVFormatHide:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Hide Example</link>',description:"Instructions for formatting the import CSV, with a link to hide the example"},helperCSVFormatShow:{id:"adminPage.helperCSVFormat",defaultMessage:'The file must include email and an optional role on each line. Roles can be "member", "admin", or "owner". <link>Show Example</link>',description:"Instructions for formatting the import CSV, with a link to show an example"},importCSVButton:{id:"adminPage.importCSVButton",defaultMessage:"Upload",description:"Name of upload from CSV button"},addEmailsFieldName:{id:"adminPage.addEmailsFieldName.0",defaultMessage:"Emails",description:"Name of input for adding emails to workspace"},unspecifiedRoleDescription:{id:"adminPage.unspecifiedRoleDescription",defaultMessage:"Roles that were unspecified have been changed to Member.",description:"Description text for defaulting invite roles to member"},prohibitedExternalEmailDescription:{id:"adminPage.prohibitedExternalEmailDescription",defaultMessage:"The following emails are not a part of your organization's verified domains:",description:"Description text for error message"},prohibitedExternalEmailResolution:{id:"adminPage.prohibitedExternalEmailResolution",defaultMessage:'Either remove these emails, enable "Allow External Domain Invites" from your workspace settings, or verify these email domains.',description:"Description text for error message"},inviteTableHeaderEmail:{id:"adminPage.inviteTableHeaderEmail",defaultMessage:"Email",description:"Label for email column of invite table header"},inviteTableHeaderRole:{id:"adminPage.inviteTableHeaderRole",defaultMessage:"Role",description:"Label for role column of invite table header"},inviteRoleMember:{id:"adminPage.inviteRoleMember",defaultMessage:"Member",description:"Member role for workspace invite"},inviteRoleAdmin:{id:"adminPage.inviteRoleAdmin",defaultMessage:"Admin",description:"Admin role for workspace invite"},inviteRoleOwner:{id:"adminPage.inviteRoleOwner",defaultMessage:"Owner",description:"Owner role for workspace invite"},fileTooLargeWarning:{id:"adminPage",defaultMessage:"File is too large. Please upload a CSV file smaller than {maxSize}.",description:"Error when uploading a file that is too large"},fileIncorrectTypeWarning:{id:"adminPage",defaultMessage:"Please upload a CSV file.",description:"Error when uploading a file that is not a CSV"},resendEmailsFieldName:{id:"adminPage.resendEmailsFieldName",defaultMessage:"Resend emails for existing invites",description:"Name of checkbox input for resending emails to workspace"},teamInviteModalNote:{id:"adminPage.teamInviteModalNote",defaultMessage:"Users that accept invites will be included as additional seats on your next invoice.",description:"Note for team plan invites that additional seats will be charged"},inviteMessageLoading:{id:"adminPage.inviteMessageLoading",defaultMessage:"Sending out {numRows} invites, this may take a minute...",description:"Loading message when invites are being sent"},inviteSuccessToast:{id:"adminPage.inviteSuccessToast",defaultMessage:"Invited {numRows} {userStr} to {workspaceName}",description:"Message on successfully sending out invites"},inviteMemberInviteNextButton:{id:"adminPage.inviteMemberInviteNextButton",defaultMessage:"Next",description:"The title of the invite member modal next button"},inviteMemberInviteSubmitButton:{id:"adminPage.inviteMemberInviteSubmitButton",defaultMessage:"Send invites",description:"The title of the invite member modal submit button"},inviteMemberInviteSubmitButtonLoading:{id:"adminPage.inviteMemberInviteSubmitButtonLoading",defaultMessage:"Sending invites...",description:"Button label while inviting members"},inviteMemberInviteBackButton:{id:"adminPage.inviteMemberInviteBackButton",defaultMessage:"Back",description:"The title of the invite member modal back button"},inviteMessageFailure:{id:"adminPage.inviteMessageFailure",defaultMessage:"Unable to invite {emailsStr}",description:"Message that shows which emails were unsuccessful at being invited"}}},12310:function(e,t,n){n.d(t,{Bd:function(){return v},DD:function(){return y},Fc:function(){return j},HH:function(){return b},Ji:function(){return h},OR:function(){return w},VG:function(){return p},f_:function(){return f},sd:function(){return k},uo:function(){return g},z0:function(){return M}});var a=n(99333),i=n(24740),r=n(2721),s=n(31498),o=n(84760),l=n(56032),c=n(42420),d=n(75172),u=n(68306),m=n(15478);function f(e,t){return(0,o.a)({queryKey:["workspace/identity",e],queryFn:async()=>{if(void 0!==e)return await r.Z.getWorkspaceIdentitySettings(e)},enabled:t})}function p(){let e=(0,s.ec)(s.F_.workspaceId),{data:t}=f(e??void 0,null!=e);return t?.allow_external_domain_invites}function g(){let e=(0,s.ec)(s.F_.workspaceId),{data:t}=f(e??void 0,null!=e);return t?.domains&&t?.domains.filter(e=>"verified"==e.status)}function h(e){let t=(0,d.Z)();return(0,l.D)({mutationFn:n=>{let{shouldAutoProvision:a}=n;return r.Z.setWorkspaceShouldAutoProvision(e,a).then(e=>{let n=a?N.autoProvisionEnabledToast:N.autoProvisionDisabledToast;return i.m.success(t.formatMessage(n),{duration:3}),e}).catch(e=>{throw i.m.danger(e.message),e})}})}function b(e){let t=(0,d.Z)();return(0,l.D)({mutationFn:async n=>{let{shouldAllowExternalDomainInvites:a}=n;try{let n=await r.Z.setWorkspaceShouldDisableExternalDomainInvites(e,a),s=a?N.allowExternalDomainInvitesToast:N.disableExternalDomainInvitesToast;return i.m.success(t.formatMessage(s),{duration:3}),n}catch(e){throw i.m.danger(e.message),e}}})}function v(e){let t=(0,c.NL)();return(0,l.D)({mutationFn:t=>{let{domainId:n}=t;return r.Z.removeDomainFromWorkspace(e,n)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]}),t.refetchQueries({queryKey:["builderProfile"]})}})}function x(e){let t=e;return t.startsWith("-----BEGIN")||(t=`-----BEGIN CERTIFICATE-----
${t}`),t.endsWith("CERTIFICATE-----")||(t=`${t}
-----END CERTIFICATE-----`),t}function j(e){let t=(0,c.NL)();return(0,l.D)({mutationFn:t=>{let{signInEndpoint:n,cert:a}=t;return r.Z.createSAMLConnection(e,n,x(a))},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function y(e){let t=(0,c.NL)();return(0,l.D)({mutationFn:t=>{let{connectionId:n,signInEndpoint:a,cert:i,active:s,enforcedClients:o}=t;return r.Z.updateSAMLConnection(e,n,{signInEndpoint:a,cert:void 0!==i?x(i):void 0,active:s,enforcedClients:o})},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function w(e){let t=(0,c.NL)();return(0,l.D)({mutationFn:t=>{let{connectionId:n}=t;return r.Z.deleteSAMLConnection(e,n)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}let M=m.Z.div`text-md mb-4 text-token-text-secondary`,k={[a.pT.VERIFIED]:(0,u.Em)({id:"i7FkyS",defaultMessage:"Verified"}),[a.pT.PENDING]:(0,u.Em)({id:"THBv/l",defaultMessage:"Pending"}),[a.pT.EXPIRED]:(0,u.Em)({id:"+sjWGK",defaultMessage:"Expired"})},N=(0,u.vU)({autoProvisionEnabledToast:{id:"workspaceIdentity.autoProvisionEnabledToast",defaultMessage:"Auto provisioning enabled for this workspace"},autoProvisionDisabledToast:{id:"workspaceIdentity.autoProvisionDisabledToast",defaultMessage:"Auto provisioning disabled for this workspace"},allowExternalDomainInvitesToast:{id:"j0jI/4",defaultMessage:"External domain invites are allowed for this workspace"},disableExternalDomainInvitesToast:{id:"67yB97",defaultMessage:"External domain invites are disabled for this workspace"}})},44087:function(e,t,n){n.d(t,{$3:function(){return u},Ap:function(){return l},CV:function(){return m},GA:function(){return d},Gk:function(){return b},bE:function(){return v},cI:function(){return p},eA:function(){return f},my:function(){return h},qH:function(){return c}});var a=n(99333),i=n(93951),r=n(31498),s=n(92379),o=n(75172);function l(){let e=(0,o.Z)(),t=e.formatMessage(x.adminRoleName),n=e.formatMessage(x.ownerRoleName),i=e.formatMessage(x.standardRoleName);return(0,s.useMemo)(()=>({[a.r3.OWNER]:n,[a.r3.ADMIN]:t,[a.r3.STANDARD]:i}),[n,t,i])}function c(e){let t=(0,o.Z)(),n=e?.isTeam(),a=e?.isEnterprise(),i=e?.isEdu();if(e){if(n)return t.formatMessage(x.teamPlanName);if(a)return t.formatMessage(x.enterprisePlanName);if(i)return t.formatMessage(x.eduPlanName)}return t.formatMessage(x.personalPlanName)}function d(e){return m((0,o.Z)(),e)}function u(){let e=(0,i.t)();return m((0,o.Z)(),e)}function m(e,t){return null==t||t.isPersonalAccount()?e.formatMessage(x.personalWorkspaceTitle):t.data.name??e.formatMessage(x.defaultWorkspaceTitle)}function f(){let e=(0,r.aF)();return e?.email??null}function p(){let e=(0,r.aF)();return e?.name??e?.email??null}function g(){return(0,r.ec)(e=>{let{workspaces:t}=e;return t})}function h(){let{data:e}=(0,i.rk)();return e?.accountItems.filter(e=>!e.isDeactivated())??[]}function b(e){let t=g().find(t=>t.id===e);return t?.role===a.r3.OWNER}function v(e){let t=g().find(t=>t.id===e);return t?.role===a.r3.ADMIN}let x=(0,n(68306).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise"},eduPlanName:{id:"useWorkspaces.eduPlanName",defaultMessage:"Edu"},teamPlanName:{id:"useWorkspaces.teamPlanName",defaultMessage:"Team"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member"}})},55963:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(19841),i=n(651);function r(e){let{id:t,label:n,checked:r,onChange:s,disabled:o,className:l,labelClassName:c,readOnly:d,labelSide:u="right"}=e,m=n&&(0,i.jsx)("label",{className:(0,a.default)("form-check-label text-token-text-primary",c),htmlFor:t,children:n});return(0,i.jsxs)("div",{className:"form-check flex items-center gap-2",children:["left"===u&&m,(0,i.jsx)("input",{className:(0,a.default)("form-check-input float-left h-4 w-4 appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none",o?"cursor-not-allowed":"cursor-pointer",l),type:"checkbox",disabled:o,onChange:s,checked:r,readOnly:d,id:t}),"right"===u&&m]})}},40431:function(e,t,n){n.d(t,{W:function(){return K}});var a,i=n(98601),r=n(11550),s=n(15478),o=n(25162),l=n(651);function c(e){let{children:t}=e;return(0,l.jsxs)("div",{className:"flex min-h-screen w-full flex-col",children:[(0,l.jsx)("div",{className:"m-4 flex gap-3",children:(0,l.jsx)(o.nI,{className:"icon-xl"})}),(0,l.jsx)("div",{className:"m-auto max-w-sm flex-col justify-center",children:t})]})}let d=s.Z.h2`mb-2 text-2xl font-semibold`,u=s.Z.p`mb-10 text-sm`;var m=n(99976),f=n(61619),p=n(11941),g=n.n(p),h=n(34977),b=n(92379),v=n(75172),x=n(62984),j=n(68306),y=n(21389),w=n(88600),M=n(28146);let k={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{staggerChildren:.5,delayChildren:.2}}},N={hidden:{opacity:0,translateY:50},show:{opacity:1,translateY:0,transition:{type:"spring",damping:14}}};function T(e){let{isTrial:t}=e;return(0,l.jsx)("div",{className:"mb-6 flex items-center justify-center gap-2",children:(0,l.jsx)(y.M,{children:(0,l.jsx)(w.E.div,{variants:k,initial:"hidden",animate:"show",className:"flex",children:(0,l.jsx)(w.E.div,{variants:N,children:t?(0,l.jsx)(M.FwT,{className:"h-8"}):(0,l.jsx)(M.o3E,{className:"h-8"})})})})})}var P=n(99333),S=n(7331),O=n(93951),E=n(82821),I=n(31498),C=n(42420),Z=n(60806);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var R=((a=R||{}).Landing="landing",a.Setup="setup",a.Invite="invite",a.Complete="complete",a);let L=[R.Landing,R.Invite,R.Complete],F={enter:e=>({translateX:e>=0?"50%":"-50%",opacity:0}),center:{translateX:0,opacity:1},exit:e=>({translateX:e<=0?"50%":"-50%",opacity:0})};function W(){let e=(0,C.NL)(),t=(0,h.useRouter)(),{currentPath:n,currentStep:a}=function(){let e=(0,h.useRouter)().asPath.split("#"),t=e[1];return{currentStep:H(t)?t:R.Landing,currentPath:e[0]}}(),i=(0,O.t)(),r=(0,I.ec)(I.F_.workspaces),s=(0,E.b)(),o=(0,v.Z)(),c=r.find(e=>e.structure===P.CZ.WORKSPACE&&!e.deactivated),{0:d,1:u}=(0,b.useState)(1);(0,b.useEffect)(()=>{function e(){u(-1)}return window.addEventListener("popstate",e),()=>{window.removeEventListener("popstate",e)}},[]);let m=()=>{u(1);let e=L.indexOf(a),i=e+1;c||t.push("/"),-1!==e&&i<L.length&&t.push(n+"#"+L[i])};return(0,l.jsx)("div",{className:"max-w-sm pb-6",children:(0,l.jsxs)(y.M,{mode:"wait",custom:d,children:[a===R.Landing&&(0,l.jsx)(V,{initial:!1,custom:d,children:(0,l.jsx)(B,{onNext:m,isLoading:null==i})},"landing"),a===R.Invite&&(0,l.jsx)(V,{custom:d,children:(0,l.jsx)(_,{onNext:()=>{m()}})},"invite"),a===R.Complete&&(0,l.jsx)(V,{custom:d,children:(0,l.jsx)(z,{onNext:()=>{m(),c&&(0,O.nq)(e,c.id,s,o),t.push("/")}})},"complete")]})})}let V=e=>(0,l.jsx)(w.E.div,A({initial:"enter",animate:"center",exit:"exit",variants:F,transition:{translateX:{type:"just"},opacity:{duration:.2}}},e));function B(e){let{onNext:t,isLoading:n=!1}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(T,{isTrial:!1}),(0,l.jsx)(d,{children:(0,l.jsx)(x.Z,A({},U.standard))}),(0,l.jsx)(u,{children:(0,l.jsx)(x.Z,A({},U.description))}),(0,l.jsx)(r.z,{onClick:t,size:"large",loading:n,fullWidth:!0,children:(0,l.jsx)(x.Z,A({},U.continue))})]})}function _(e){let{onNext:t}=e,n=(0,O.t)(),a=(0,v.Z)();return null==n?null:(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{children:(0,l.jsx)(x.Z,A(A({},U.inviteTitle),{},{values:{workspaceName:n.data.name}}))}),(0,l.jsx)(u,{children:(0,l.jsx)(x.Z,A({},U.completeDescription))}),null!=n&&(0,l.jsx)("div",{className:"text-sm",children:(0,l.jsx)(S.Z,{fullWidthButtons:!0,workspace:n,canResendInviteEmails:!1,onCancel:t,cancelButtonText:a.formatMessage(U.skipAddMembers),onSuccess:t})})]})}function z(e){let{onNext:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(d,{children:(0,l.jsx)(x.Z,A({},U.completeTitle))}),(0,l.jsx)(u,{children:(0,l.jsx)(x.Z,A({},U.completeDescription))}),(0,l.jsx)(r.z,{onClick:t,size:"large",fullWidth:!0,children:(0,l.jsx)(x.Z,A({},U.continueToChatgpt))})]})}let H=(0,Z.b)(R),U=(0,j.vU)({standard:{id:"UpgradedToTeamSuccess.trial",defaultMessage:"Payment successful"},description:{id:"UpgradedToTeamSuccess.description",defaultMessage:"Your team has been created. You can invite members to join the workspace to start collaborating."},continue:{id:"UpgradedToTeamSuccess.continue",defaultMessage:"Continue"},continueToChatgpt:{id:"UpgradedToTeamSuccess.continueToChatgpt",defaultMessage:"Continue to ChatGPT"},setupTitle:{id:"UpgradedToTeamSuccess.setupTitle",defaultMessage:"Set up a team workspace"},setupSubtitle:{id:"UpgradedToTeamSuccess.setupSubtitle",defaultMessage:"Workspace name"},inviteTitle:{id:"UpgradedToTeamSuccess.inviteTitle",defaultMessage:"Invite members to {workspaceName}"},completeTitle:{id:"UpgradedToTeamSuccess.completeTitle",defaultMessage:"Workspace setup complete"},completeDescription:{id:"UpgradedToTeamSuccess.completeDescription",defaultMessage:"You have now created a team workspace. You can invite members to join the workspace. You can do so at any time from the workspace settings page."},skipAddMembers:{id:"UpgradedToTeamSuccess.skipAddMembers",defaultMessage:"Skip"}});function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function K(e){let{isTrial:t,isTeam:n}=e,a=(0,v.Z)(),i=(0,h.useRouter)(),r=(0,b.useCallback)(e=>{e.preventDefault(),m.A.logEvent(f.M.clickAccountPaymentSuccessContinue),i.push("/")},[i]);return(0,l.jsxs)(c,{children:[(0,l.jsx)(g(),{children:(0,l.jsx)("title",{children:a.formatMessage($.pageTitle)})}),(0,l.jsx)("div",{className:"flex flex-col",children:n?(0,l.jsx)(W,{}):(0,l.jsx)(Y,{isTrial:t,onContinue:r})})]})}function Y(e){let{isTrial:t,onContinue:n}=e,a=t?$.trial:$.standard;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(T,{isTrial:!!t}),(0,l.jsxs)("div",{className:"flex flex-col items-center",children:[(0,l.jsx)(d,{children:(0,l.jsx)(x.Z,G({},a))}),(0,l.jsx)(u,{children:(0,l.jsx)(x.Z,G({},$.paymentReceived))}),(0,l.jsx)(r.z,{onClick:n,size:"large",fullWidth:!0,children:(0,l.jsx)(x.Z,G({},$.continueButton))})]})]})}let $=(0,j.vU)({pageTitle:{id:"PaymentsSuccess.pageTitle",defaultMessage:"Account - Payment success"},paymentReceived:{id:"PaymentsSuccess.paymentSuccessful",defaultMessage:"You've been upgraded to ChatGPT Plus"},continueButton:{id:"PaymentsSuccess.continueButton",defaultMessage:"Continue"},standard:{id:"PaymentsSuccess.standard",defaultMessage:"Payment successful"},trial:{id:"PaymentsSuccess.trial",defaultMessage:"Trial started"}})},82821:function(e,t,n){n.d(t,{A:function(){return p},b:function(){return g}});var a=n(98601),i=n(58695),r=n(4132),s=n(177),o=n(82826),l=n(88667),c=n(45120),d=n(87161),u=n(34977);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t?i.Ho.LoginWebAuth0:i.Ho.Auth0}function g(){let e=(0,u.useRouter)(),{value:t}=(0,c.fW)("1198030896"),n=(0,i._0)((0,l.xb)("1977905538").config.value),a=(0,o.L)();return function(){let{authType:o="signup",callbackUrl:l="/",additionalAuthParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},u=p(e,t,n.forwardToAuthApi),m=a();return(0,d.signIn)(u,{callbackUrl:l},f(f(f(f({prompt:"login",screen_hint:o},(0,r.gk)((0,s.f3)())),(0,i.zC)(n)),m?{use_email_otp:"true"}:{}),c)),u}}},60464:function(e,t,n){n.d(t,{F:function(){return a}});let a=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/},4132:function(e,t,n){n.d(t,{gk:function(){return i}});var a=n(95947);function i(e){return{"ext-statsig-tier":a.uG,"ext-oai-did":e}}},60806:function(e,t,n){n.d(t,{b:function(){return a}});function a(e){let t=Object.values(e);return e=>t.includes(e)}},82826:function(e,t,n){n.d(t,{L:function(){return i}});var a=n(45120);function i(){let{layer:e}=(0,a.AH)("1346366956");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=431-40657cda5138447f.js.map