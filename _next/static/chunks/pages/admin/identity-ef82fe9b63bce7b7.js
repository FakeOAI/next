(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2571],{25672:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return q},default:function(){return G}});var o,i=n(94521),s=n(30032),r=n(21904),a=n(19841),l=n(71126),d=n.n(l),c=n(92379),u=n(72256),f=n(26123),p=n(25940),g=n(5443),m=n(18102),b=n(33481),y=n(67165),x=n(69482),j=n(23212),v=n(46129),h=n(651);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e){let{onRemoveDomainClick:t,onVerifyDomainClick:n}=e;return(0,h.jsxs)(y.Z.Root,{children:[(0,h.jsx)(y.Z.Trigger,{children:(0,h.jsx)(b.nWS,{className:"icon-sm"})}),(0,h.jsx)(y.Z.Portal,{children:(0,h.jsxs)(y.Z.Content,{children:[(0,h.jsx)(y.Z.Item,{onClick:t,children:(0,h.jsx)(u.Z,w({},I.ssoDropdownRemoveButtonText))}),(0,h.jsx)(y.Z.Item,{onClick:n,children:(0,h.jsx)(u.Z,w({},I.ssoDropdownVerifyButtonText))})]})})]})}function M(e){let{domains:t,workspaceId:n}=e,o=(0,f.Z)(),{mutateAsync:i}=(0,v.Bd)(n),{0:s,1:r}=(0,c.useState)(!1),{0:a,1:l}=(0,c.useState)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(x.Z.Root,{className:"w-full table-auto",children:[(0,h.jsxs)(x.Z.Header,{children:[(0,h.jsx)(x.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,h.jsx)(u.Z,w({},I.domainTableHeader))}),(0,h.jsx)(x.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,h.jsx)(u.Z,w({},I.statusTableHeader))}),(0,h.jsx)(x.Z.HeaderCell,{className:"bg-token-main-surface-primary"})]}),(0,h.jsx)(x.Z.Body,{children:t.map((e,t)=>(0,h.jsxs)("tr",{onClick:()=>l(e),className:"cursor-pointer",children:[(0,h.jsx)(x.Z.Cell,{children:e.hostname}),(0,h.jsx)(x.Z.Cell,{children:o.formatMessage(v.sd[e.status])}),(0,h.jsx)(x.Z.Cell,{textAlign:"right",children:(0,h.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,h.jsx)(S,{onRemoveDomainClick:()=>{i({domainId:e.id})},onVerifyDomainClick:()=>{l(e)}})})})]},t))})]}),(0,h.jsxs)(g.z,{color:"secondary",className:"mt-6",onClick:()=>{r(!0)},children:[(0,h.jsx)(b.Vz5,{className:"icon-sm"}),(0,h.jsx)(u.Z,w({},I.addDomainButton))]}),(0,h.jsx)(j.Z,{isOpen:s||void 0!==a,onClose:()=>{r(!1),l(void 0)},workspaceId:n,currentDomain:s?void 0:a,domains:t},null==a?void 0:a.id)]})}let I=(0,p.vU)({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}});var k=n(38417),C=n(65530),Z=n(8649),P=n(49217),T=n(94982),D=n(93322);function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let A=async e=>new Promise((t,n)=>{let o=new FileReader;o.readAsText(e),o.onload=function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)},o.onerror=n});function B(e){let{acsId:t,hasSSO:n}=e,o="https://auth0.openai.com/login/callback?connection=".concat(t),i="urn:auth0:openai:".concat(t),s="".concat(location.host,"/auth/login?sso=true&connection=").concat(t),r=(0,f.Z)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(D.Li,{children:(0,h.jsx)(u.Z,E({},_.setupSSOContent))}),(0,h.jsxs)("div",{className:"mb-6 flex flex-col space-y-4",children:[(0,h.jsx)(k.Z,{label:"Assertion Consumer Service (ACS) URL",value:o,onCopied:()=>{T.m.success(r.formatMessage(_.copiedACSToClipboard),{duration:3})}}),(0,h.jsx)(k.Z,{label:"Entity ID",value:i,onCopied:()=>{T.m.success(r.formatMessage(_.copiedEntityToClipboard),{duration:3})}}),n&&(0,h.jsx)(k.Z,{label:r.formatMessage(_.idpSignInURL),value:s,onCopied:()=>{T.m.success(r.formatMessage(_.copiedIDPUrlToClipboard),{duration:3})}})]})]})}var N=((o=N||{})[o.CREATE=1]="CREATE",o[o.EDIT=2]="EDIT",o);function R(e){let{workspaceId:t,data:n,isOpen:o,onClose:i}=e,s=(0,f.Z)(),{mutateAsync:r}=(0,v.Fc)(t),{mutateAsync:l}=(0,v.OR)(t),{mutateAsync:d}=(0,v.DD)(t),p=(0,c.useRef)(null),m=null==n?void 0:n.connection,{0:y,1:x}=(0,c.useState)(null==m?void 0:m.sign_in_endpoint),{0:j,1:O}=(0,c.useState)(null==m?void 0:m.cert),w=null===n?N.CREATE:N.EDIT,S=async(e,t)=>{let n=await r({signInEndpoint:e,cert:t});await d({connectionId:n.id,active:!0}),i()},M=w===N.CREATE?(0,h.jsx)(Z.ZP.Button,{title:s.formatMessage(_.doneButton),color:"primary",disabled:void 0===y||void 0===j,onClick:async()=>{void 0!==y&&void 0!==j&&await S(y,j)}}):n&&(0,h.jsx)(Z.ZP.Button,{title:s.formatMessage(_.doneButton),color:"primary",onClick:async()=>{await d({connectionId:null==n?void 0:n.id,cert:j,signInEndpoint:y,active:!0}),i()}}),I=null===n?(0,h.jsx)(Z.ZP.Button,{title:s.formatMessage(_.cancelButton),color:"secondary",onClick:()=>i()}):(0,h.jsx)(g.z,{as:"link",color:"danger-outline",onClick:async()=>{await l({connectionId:null==n?void 0:n.id}),i()},children:s.formatMessage(_.deleteButton)});return(0,h.jsx)(P.Z,{isOpen:o,type:"success",title:s.formatMessage(w===N.CREATE?_.createTitle:_.editTitle),primaryButton:M,secondaryButton:I,onClose:i,children:(0,h.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,h.jsx)(v.z0,{children:(0,h.jsx)(u.Z,E({},_.createInstructionsManual))}),(0,h.jsx)("label",{className:"mb-2 flex items-center text-sm",children:(0,h.jsx)(u.Z,E({},_.signInLabel))}),(0,h.jsx)("div",{className:"mb-4",children:(0,h.jsx)(C.Z,{className:"w-full appearance-none rounded border px-3 py-2",name:"Sign-In URL",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:null!=y?y:"",onChange:e=>{x(e.target.value)}})}),(0,h.jsxs)("div",{className:"mb-4",children:[(0,h.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,h.jsx)("label",{className:"text-sm",children:(0,h.jsx)(u.Z,E({},_.certLabel))}),(0,h.jsx)("input",{ref:p,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:async e=>{var t;null!==(t=e.target.files)&&void 0!==t&&t[0]&&O(await A(e.target.files[0]))}}),(0,h.jsx)(g.z,{color:"secondary",onClick:()=>{var e;return null===(e=p.current)||void 0===e?void 0:e.click()},children:(0,h.jsx)("div",{className:"flex items-center",children:(0,h.jsx)(b.aAc,{className:"icon-sm"})})})]}),(0,h.jsx)("textarea",{rows:10,className:(0,a.default)("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600","text-token-text-primary placeholder-gray-500 dark:bg-gray-700"),placeholder:"-----BEGIN CERTIFICATE-----",value:null!=j?j:"",onChange:e=>{O(e.target.value)}})]})]})})}let _=(0,p.vU)({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}});function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let V=e=>{let{title:t,footer:n,children:o}=e;return(0,h.jsxs)(D.i9,{children:[(0,h.jsx)(D.A4,{children:(0,h.jsx)(u.Z,F({},t))}),(0,h.jsx)("div",{children:o}),(0,h.jsx)(D.Li,{children:n})]})},H=e=>{let{icon:t,title:n,body:o,toggle:i}=e;return(0,h.jsxs)(D.i9,{children:[(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)(t,{className:"icon-sm"}),(0,h.jsx)(D.A4,{children:(0,h.jsx)(u.Z,F({},n))})]}),(0,h.jsx)("div",{children:i})]}),(0,h.jsx)(D.Li,{children:o})]})};function X(e){var t,n,o,i;let{currentWorkspaceId:l}=e,p=(0,f.Z)(),{data:y,isLoading:x}=(0,v.f_)(l),{mutateAsync:j}=(0,v.DD)(l),{variables:O,mutateAsync:w}=(0,v.Ji)(l),S=(null==y?void 0:y.sso_connection)!==null,I=null==y?void 0:y.domains.some(e=>e.status===r.pT.VERIFIED),k=S?z.ssoEditButton:z.ssoAddButton,{0:C,1:Z}=(0,c.useState)(!1),P=(null==y||null===(t=y.sso_connection)||void 0===t?void 0:t.status)==="ACTIVE",T=null==y||null===(n=y.sso_connection)||void 0===n?void 0:n.id,L=y?(0,h.jsxs)(D.$V,{children:[(0,h.jsx)(V,{title:z.domainSubtitle,footer:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,F({},z.verifyDomainInfoText))}),children:(0,h.jsx)(M,{domains:y.domains,workspaceId:l})}),(0,h.jsx)(H,{icon:b.uSF,title:z.autoProvisionTitle,body:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,F({},z.autoProvisionBody))}),toggle:(0,h.jsx)(m.Z,{disabled:!I,enabled:null!==(o=null==O?void 0:O.shouldAutoProvision)&&void 0!==o?o:y.should_auto_provision,onChange:e=>{w({shouldAutoProvision:e})},label:p.formatMessage(z.toggleAutoProvisionLabel)})}),(0,h.jsxs)(D.i9,{children:[(0,h.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,h.jsxs)("div",{className:"flex items-center gap-2",children:[(0,h.jsx)(b.kaz,{className:(0,a.default)("icon-sm",P?"text-blue-600":"text-token-text-tertiary")}),(0,h.jsx)(D.A4,{children:(0,h.jsx)(u.Z,F({},z.ssoTitle))})]}),S&&(0,h.jsx)("div",{children:(0,h.jsx)(m.Z,{enabled:P,onChange:()=>{j({connectionId:T,active:!P})},label:p.formatMessage(z.ssoToggleActive)})})]}),I&&(0,h.jsx)(B,{acsId:y.acs_id,hasSSO:S}),(0,h.jsxs)("div",{children:[(0,h.jsx)(g.z,{as:"button",color:"primary",disabled:!I,onClick:()=>{Z(!0)},children:(0,h.jsx)(u.Z,F({},k))}),(0,h.jsx)(R,{workspaceId:l,data:y.sso_connection,isOpen:C,onClose:()=>Z(!1)})]})]}),y.sso_connection&&(0,h.jsx)(H,{icon:b.oVl,title:z.enforceSSOTitle,body:(0,h.jsx)(h.Fragment,{children:(0,h.jsx)(u.Z,F({},z.enforceSSOBody))}),toggle:(0,h.jsx)(m.Z,{disabled:!I,enabled:null===(i=y.sso_connection.auth0_enforced_clients)||void 0===i?void 0:i.includes("chat"),onChange:e=>{j({connectionId:y.sso_connection.id,enforcedClients:e?["chat"]:[]})},label:p.formatMessage(z.enforceSSOLabel)})})]}):null;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d(),{children:(0,h.jsx)("title",{children:p.formatMessage(z.title)})}),(0,h.jsx)(s.yG,{title:p.formatMessage(z.title)}),(0,h.jsx)(s.hb,{showSpinner:x,children:L})]})}let z=(0,p.vU)({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create ChatGPT Enterprise accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"}});function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}var q=!0;function G(e){return(0,h.jsx)(X,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))}G.getLayout=function(e){return(0,h.jsx)(s.ZP,{mobilePageTitle:"Identity",requireOwnerPrivileges:!0,children:e})}},93322:function(e,t,n){"use strict";n.d(t,{$V:function(){return p},A4:function(){return g},Li:function(){return x},W8:function(){return v},i$:function(){return m},i9:function(){return y},qQ:function(){return b},vi:function(){return j}});var o,i,s,r,a,l,d,c,u=n(41141),f=n(74091);let p=f.Z.div(o||(o=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),g=f.Z.div(i||(i=(0,u.Z)(["text-xl font-semibold"]))),m=f.Z.div(s||(s=(0,u.Z)(["text-base font-semibold"]))),b=f.Z.div(r||(r=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),y=f.Z.div(a||(a=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),x=f.Z.div(l||(l=(0,u.Z)(["text-sm"]))),j=f.Z.div(d||(d=(0,u.Z)(["flex justify-between py-4 gap-4"]))),v=f.Z.hr(c||(c=(0,u.Z)(["max-w-xl border-token-border-light"])))},71941:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/identity",function(){return n(25672)}])}},function(e){e.O(0,[4736,8543,7126,0,5165,32,2888,9774,179],function(){return e(e.s=71941)}),_N_E=e.O()}]);
//# sourceMappingURL=identity-ef82fe9b63bce7b7.js.map