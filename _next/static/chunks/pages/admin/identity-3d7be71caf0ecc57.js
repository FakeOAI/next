(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2571],{17914:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return $},default:function(){return W}});var i,r=n(24312),o=n(90164),s=n(95312),a=n(19841),l=n(28181),c=n.n(l),d=n(92379),u=n(84551),f=n(88041),p=n(94695),m=n(73581),x=n(97515),b=n(29757),g=n(67809),j=n(75887),y=n(50358),h=n(27336),v=n(651);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function S(e){let{onRemoveDomainClick:t,onVerifyDomainClick:n}=e;return(0,v.jsxs)(g.Z.Root,{children:[(0,v.jsx)(g.Z.Trigger,{children:(0,v.jsx)(b.nWS,{className:"icon-sm"})}),(0,v.jsx)(g.Z.Portal,{children:(0,v.jsxs)(g.Z.Content,{children:[(0,v.jsx)(g.Z.Item,{onClick:t,children:(0,v.jsx)(u.Z,O({},C.ssoDropdownRemoveButtonText))}),(0,v.jsx)(g.Z.Item,{onClick:n,children:(0,v.jsx)(u.Z,O({},C.ssoDropdownVerifyButtonText))})]})})]})}function k(e){let{domains:t,workspaceId:n}=e,i=(0,f.Z)(),{mutateAsync:r}=(0,h.Bd)(n),{0:o,1:s}=(0,d.useState)(!1),{0:a,1:l}=(0,d.useState)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(j.Z.Root,{className:"w-full table-auto",children:[(0,v.jsxs)(j.Z.Header,{children:[(0,v.jsx)(j.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,v.jsx)(u.Z,O({},C.domainTableHeader))}),(0,v.jsx)(j.Z.HeaderCell,{className:"bg-token-main-surface-primary",children:(0,v.jsx)(u.Z,O({},C.statusTableHeader))}),(0,v.jsx)(j.Z.HeaderCell,{className:"bg-token-main-surface-primary"})]}),(0,v.jsx)(j.Z.Body,{children:t.map((e,t)=>(0,v.jsxs)("tr",{onClick:()=>l(e),className:"cursor-pointer",children:[(0,v.jsx)(j.Z.Cell,{children:e.hostname}),(0,v.jsx)(j.Z.Cell,{children:i.formatMessage(h.sd[e.status])}),(0,v.jsx)(j.Z.Cell,{textAlign:"right",children:(0,v.jsx)("div",{onClick:e=>e.stopPropagation(),children:(0,v.jsx)(S,{onRemoveDomainClick:()=>{r({domainId:e.id})},onVerifyDomainClick:()=>{l(e)}})})})]},t))})]}),(0,v.jsxs)(m.z,{color:"secondary",className:"mt-6 font-semibold text-token-text-secondary",onClick:()=>{s(!0)},children:[(0,v.jsx)(b.Vz5,{className:"icon-sm"}),(0,v.jsx)(u.Z,O({},C.addDomainButton))]}),(0,v.jsx)(y.Z,{isOpen:o||void 0!==a,onClose:()=>{s(!1),l(void 0)},workspaceId:n,currentDomain:o?void 0:a,domains:t},null==a?void 0:a.id)]})}let C=(0,p.vU)({ssoDropdownRemoveButtonText:{id:"workspaceIdentity.ssoDropdownRemoveButtonText",defaultMessage:"Remove Domain"},ssoDropdownVerifyButtonText:{id:"workspaceIdentity.ssoDropdownVerifyButtonText",defaultMessage:"Verify"},domainTableHeader:{id:"workspaceIdentity.domainTableHeader",defaultMessage:"Domain"},statusTableHeader:{id:"workspaceIdentity.statusTableHeader",defaultMessage:"Status"},addDomainButton:{id:"workspaceIdentity.addDomainButton.0",defaultMessage:"Add domain"}});var M=n(14886),P=n(51891),Z=n(79381),I=n(61082),N=n(43446),T=n(65731);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let A=async e=>new Promise((t,n)=>{let i=new FileReader;i.readAsText(e),i.onload=function(e){var n;t(null===(n=e.target)||void 0===n?void 0:n.result)},i.onerror=n});function L(e){let{acsId:t,hasSSO:n}=e,i="https://auth0.openai.com/login/callback?connection=".concat(t),r="urn:auth0:openai:".concat(t),o="".concat(location.host,"/auth/login?sso=true&connection=").concat(t),s=(0,f.Z)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(T.Li,{children:(0,v.jsx)(u.Z,E({},U.setupSSOContent))}),(0,v.jsxs)("div",{className:"mb-6 flex flex-col space-y-4",children:[(0,v.jsx)(M.Z,{label:"Assertion Consumer Service (ACS) URL",value:i,onCopied:()=>{N.m.success(s.formatMessage(U.copiedACSToClipboard),{duration:3})}}),(0,v.jsx)(M.Z,{label:"Entity ID",value:r,onCopied:()=>{N.m.success(s.formatMessage(U.copiedEntityToClipboard),{duration:3})}}),n&&(0,v.jsx)(M.Z,{label:s.formatMessage(U.idpSignInURL),value:o,onCopied:()=>{N.m.success(s.formatMessage(U.copiedIDPUrlToClipboard),{duration:3})}})]})]})}var B=((i=B||{})[i.CREATE=1]="CREATE",i[i.EDIT=2]="EDIT",i);function R(e){let{workspaceId:t,data:n,isOpen:i,onClose:r}=e,o=(0,f.Z)(),{mutateAsync:s}=(0,h.Fc)(t),{mutateAsync:l}=(0,h.OR)(t),{mutateAsync:c}=(0,h.DD)(t),p=(0,d.useRef)(null),x=null==n?void 0:n.connection,{0:g,1:j}=(0,d.useState)(null==x?void 0:x.sign_in_endpoint),{0:y,1:w}=(0,d.useState)(null==x?void 0:x.cert),O=null===n?B.CREATE:B.EDIT,S=async(e,t)=>{let n=await s({signInEndpoint:e,cert:t});await c({connectionId:n.id,active:!0}),r()},k=O===B.CREATE?(0,v.jsx)(Z.ZP.Button,{title:o.formatMessage(U.doneButton),color:"primary",disabled:void 0===g||void 0===y,onClick:async()=>{void 0!==g&&void 0!==y&&await S(g,y)}}):n&&(0,v.jsx)(Z.ZP.Button,{title:o.formatMessage(U.doneButton),color:"primary",onClick:async()=>{await c({connectionId:null==n?void 0:n.id,cert:y,signInEndpoint:g,active:!0}),r()}}),C=null===n?(0,v.jsx)(Z.ZP.Button,{title:o.formatMessage(U.cancelButton),color:"light",onClick:()=>r()}):(0,v.jsx)(m.z,{as:"link",color:"danger",className:"bg-transparent font-bold text-red-500 hover:bg-transparent",onClick:async()=>{await l({connectionId:null==n?void 0:n.id}),r()},children:o.formatMessage(U.deleteButton)});return(0,v.jsx)(I.Z,{isOpen:i,type:"success",title:o.formatMessage(O===B.CREATE?U.createTitle:U.editTitle),primaryButton:k,secondaryButton:C,onClose:r,children:(0,v.jsxs)("form",{onSubmit:e=>e.preventDefault(),children:[(0,v.jsx)(h.z0,{children:(0,v.jsx)(u.Z,E({},U.createInstructionsManual))}),(0,v.jsx)("label",{className:"mb-2 flex items-center text-sm",children:(0,v.jsx)(u.Z,E({},U.signInLabel))}),(0,v.jsx)("div",{className:"mb-4",children:(0,v.jsx)(P.Z,{className:"w-full appearance-none rounded border px-3 py-2",name:"Sign-In URL",type:"text",placeholder:"https://your.idp.here/saml2?idpid=123456",value:null!=g?g:"",onChange:e=>{j(e.target.value)}})}),(0,v.jsxs)("div",{className:"mb-4",children:[(0,v.jsxs)("div",{className:"mb-2 flex items-center justify-between",children:[(0,v.jsx)("label",{className:"text-sm",children:(0,v.jsx)(u.Z,E({},U.certLabel))}),(0,v.jsx)("input",{ref:p,type:"file",accept:".csv,.cer,.pem,text/plain",className:"hidden",onChange:async e=>{var t;null!==(t=e.target.files)&&void 0!==t&&t[0]&&w(await A(e.target.files[0]))}}),(0,v.jsx)(m.z,{color:"light",onClick:()=>{var e;return null===(e=p.current)||void 0===e?void 0:e.click()},children:(0,v.jsx)("div",{className:"flex items-center",children:(0,v.jsx)(b.aAc,{className:"icon-sm"})})})]}),(0,v.jsx)("textarea",{rows:10,className:(0,a.default)("w-full resize-none overflow-y-auto rounded border border-gray-300 px-3 py-2","outline-none focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600","text-token-text-primary placeholder-gray-500 dark:bg-gray-700"),placeholder:"-----BEGIN CERTIFICATE-----",value:null!=y?y:"",onChange:e=>{w(e.target.value)}})]})]})})}let U=(0,p.vU)({setupSSOContent:{id:"workspaceIdentity.setupSSOContent",defaultMessage:"Anyone using email addresses with a verified domain can log in via SAML SSO."},createInstructionsXML:{id:"ssoModal.createInstructionsXML",defaultMessage:"If your Identity Provider offers a metadata URL or an XML file, add it here for the quickest setup option."},createInstructionsManual:{id:"ssoModal.createInstructionsManual",defaultMessage:"Copy your Sign-in endpoint (SSO URL) and the public X.509 certificate from your Identity Provider."},createTitle:{id:"ssoModal.createTitle",defaultMessage:"Create SAML SSO Configuration"},editTitle:{id:"ssoModal.editTitle",defaultMessage:"Edit SAML SSO Configuration"},ssoMetadataLabel:{id:"ssoModal.ssoMetadataLabel",defaultMessage:"App Federation Metadata URL"},signInLabel:{id:"ssoModal.signInLabel",defaultMessage:"SSO URL"},certLabel:{id:"ssoModal.certLabel",defaultMessage:"X.509 Signing Certificate"},doneButton:{id:"ssoModal.doneButton",defaultMessage:"Done"},nextButton:{id:"ssoModal.nextButton",defaultMessage:"Next"},deleteButton:{id:"ssoModal.deleteButton",defaultMessage:"Delete configuration"},cancelButton:{id:"ssoModal.cancelButton",defaultMessage:"Cancel"},acsURLLabel:{id:"workspaceIdentity.acsURLLabel",defaultMessage:"Assertion Consumer Service (ACS) URL"},entityIDLabel:{id:"workspaceIdentity.entityIDLabel",defaultMessage:"Entity ID"},idpSignInURL:{id:"workspaceIdentity.idpSignInURL",defaultMessage:"IDP Tile URL"},copiedACSToClipboard:{id:"workspaceIdentity.copiedACSToClipboard",defaultMessage:"Copied ACS URL to clipboard"},copiedEntityToClipboard:{id:"workspaceIdentity.copiedEntityToClipboard",defaultMessage:"Copied entity ID to clipboard"},copiedIDPUrlToClipboard:{id:"workspaceIdentity.copiedIDPUrlToClipboard",defaultMessage:"Copied IDP URL to clipboard"},orDivider:{id:"workspaceIdentity.orDivider",defaultMessage:"or"},certExtractFailed:{id:"workspaceIdentity.certExtractFailed",defaultMessage:"Unable to find X.509 Certificate in provided XML"},ssoUrlExtractFailed:{id:"workspaceIdentity.ssoUrlExtractFailed",defaultMessage:"Unable to find Entity ID (sign-in endpoint) in provided XML"},ssoLearnMoreLink:{id:"workspaceIdentity.ssoLearnMoreLink",defaultMessage:"Learn more"}});function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let V=e=>{let{title:t,footer:n,children:i}=e;return(0,v.jsxs)(T.i9,{children:[(0,v.jsx)(T.A4,{children:(0,v.jsx)(u.Z,F({},t))}),(0,v.jsx)("div",{children:i}),(0,v.jsx)(T.Li,{children:n})]})},z=e=>{let{icon:t,title:n,body:i,toggle:r}=e;return(0,v.jsxs)(T.i9,{children:[(0,v.jsxs)("div",{className:"flex items-center justify-between",children:[(0,v.jsxs)("div",{className:"flex items-center gap-2",children:[(0,v.jsx)(t,{className:"icon-sm"}),(0,v.jsx)(T.A4,{children:(0,v.jsx)(u.Z,F({},n))})]}),(0,v.jsx)("div",{children:r})]}),(0,v.jsx)(T.Li,{children:i})]})};function H(e){var t,n,i,r;let{currentWorkspaceId:l}=e,p=(0,f.Z)(),{data:g,isLoading:j}=(0,h.f_)(l),{mutateAsync:y}=(0,h.DD)(l),{variables:w,mutateAsync:O}=(0,h.Ji)(l),S=(null==g?void 0:g.sso_connection)!==null,C=null==g?void 0:g.domains.some(e=>e.status===s.pT.VERIFIED),M=S?X.ssoEditButton:X.ssoAddButton,{0:P,1:Z}=(0,d.useState)(!1),I=(null==g||null===(t=g.sso_connection)||void 0===t?void 0:t.status)==="ACTIVE",N=null==g||null===(n=g.sso_connection)||void 0===n?void 0:n.id,D=g?(0,v.jsxs)(T.$V,{children:[(0,v.jsx)(V,{title:X.domainSubtitle,footer:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.Z,F({},X.verifyDomainInfoText))}),children:(0,v.jsx)(k,{domains:g.domains,workspaceId:l})}),(0,v.jsx)(z,{icon:b.uSF,title:X.autoProvisionTitle,body:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.Z,F({},X.autoProvisionBody))}),toggle:(0,v.jsx)(x.Z,{disabled:!C,enabled:null!==(i=null==w?void 0:w.shouldAutoProvision)&&void 0!==i?i:g.should_auto_provision,onChange:e=>{O({shouldAutoProvision:e})},label:p.formatMessage(X.toggleAutoProvisionLabel)})}),(0,v.jsxs)(T.i9,{children:[(0,v.jsxs)("div",{className:"mb-4 flex items-center justify-between",children:[(0,v.jsxs)("div",{className:"flex items-center gap-2",children:[(0,v.jsx)(b.kaz,{className:(0,a.default)("icon-sm",I?"text-blue-600":"text-token-text-tertiary")}),(0,v.jsx)(T.A4,{children:(0,v.jsx)(u.Z,F({},X.ssoTitle))})]}),S&&(0,v.jsx)("div",{children:(0,v.jsx)(x.Z,{enabled:I,onChange:()=>{y({connectionId:N,active:!I})},label:p.formatMessage(X.ssoToggleActive)})})]}),C&&(0,v.jsx)(L,{acsId:g.acs_id,hasSSO:S}),(0,v.jsxs)("div",{children:[(0,v.jsx)(m.z,{as:"button",color:"primary",disabled:!C,onClick:()=>{Z(!0)},className:"font-semibold",children:(0,v.jsx)(u.Z,F({},M))}),(0,v.jsx)(R,{workspaceId:l,data:g.sso_connection,isOpen:P,onClose:()=>Z(!1)})]})]}),g.sso_connection&&(0,v.jsx)(z,{icon:b.oVl,title:X.enforceSSOTitle,body:(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(u.Z,F({},X.enforceSSOBody))}),toggle:(0,v.jsx)(x.Z,{disabled:!C,enabled:null===(r=g.sso_connection.auth0_enforced_clients)||void 0===r?void 0:r.includes("chat"),onChange:e=>{y({connectionId:g.sso_connection.id,enforcedClients:e?["chat"]:[]})},label:p.formatMessage(X.enforceSSOLabel)})})]}):null;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(c(),{children:(0,v.jsx)("title",{children:p.formatMessage(X.title)})}),(0,v.jsx)(o.yG,{title:p.formatMessage(X.title)}),(0,v.jsx)(o.hb,{showSpinner:j,children:D})]})}let X=(0,p.vU)({title:{id:"workspaceIdentity.title",defaultMessage:"Identity & Provisioning"},domainSubtitle:{id:"workspaceIdentity.domainSubtitle",defaultMessage:"Domain management"},ssoTitle:{id:"workspaceIdentity.ssoTitle",defaultMessage:"Single Sign On"},ssoToggleActive:{id:"WorkspaceIdentityPage.ssoToggleActive",defaultMessage:"Enable SSO for this workspace"},ssoAddButton:{id:"workspaceIdentity.ssoAddButton",defaultMessage:"Add SAML SSO"},ssoEditButton:{id:"workspaceIdentity.ssoEditButton",defaultMessage:"Edit SAML SSO"},autoProvisionTitle:{id:"workspaceIdentity.autoProvisionSubtitle",defaultMessage:"Automatic account creation"},autoProvisionBody:{id:"workspaceIdentity.autoProvisionBody",defaultMessage:"Automatically create ChatGPT Enterprise accounts for new users who log in with a verified domain."},toggleAutoProvisionLabel:{id:"workspaceIdentity.toggleAutoProvisionLabel",defaultMessage:"Toggle to enable or disable auto provisioning"},enforceSSOTitle:{id:"workspaceIdentity.enforceSSOTitle",defaultMessage:"Enforce SSO log in"},enforceSSOBody:{id:"workspaceIdentity.enforceSSOBody",defaultMessage:"When SSO is active, users will no longer be able to use social logins and will be redirected to your SSO portal."},enforceSSOLabel:{id:"workspaceIdentity.enforceSSOLabel",defaultMessage:"Toggle to enable or disable SSO enforcement"},verifyDomainInfoText:{id:"workspaceIdentity.verifyDomainInfoText",defaultMessage:"Verify ownership of an email domain to access advanced security features including single sign-on."},learnMoreLink:{id:"workspaceIdentity.learnMoreLink",defaultMessage:"Learn more"}});function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}var $=!0;function W(e){return(0,v.jsx)(H,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e))}W.getLayout=function(e){return(0,v.jsx)(o.ZP,{mobilePageTitle:"Identity",requireOwnerPrivileges:!0,children:e})}},24103:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(24312),r=n(21292),o=n(50045),s=n(19841),a=n(58164),l=n(92379),c=n(84551),d=n(94695),u=n(79014),f=n(33168),p=n(79198),m=n(80935),x=n(28178),b=n(651);function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function y(e){let{isDesktopNavCollapsed:t}=e;return(0,b.jsx)(a.E.div,{initial:!1,transition:{duration:.165},animate:{x:t?"0":"260px"},style:{rotate:t?180:0,y:"-50%"},className:(0,s.default)("fixed left-0 top-1/2 z-40"),children:(0,b.jsx)("button",{onClick:u.vm.toggleDesktopNavCollapsed,children:(0,b.jsxs)(r.u,{side:"right",label:t?(0,b.jsx)(c.Z,j({},v.openSidebar)):(0,b.jsx)(c.Z,j({},v.closeSidebar)),sideOffset:4,children:[(0,b.jsx)(a.E.div,{className:"flex h-[72px] w-8 items-center justify-center",variants:{rest:{},hover:{}},initial:!1,whileHover:["hover","arrow"],animate:["rest",t?"arrow":"line"],children:(0,b.jsxs)(a.E.div,{className:"flex h-6 w-6 flex-col items-center",children:[(0,b.jsx)(a.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:".15rem"},arrow:{rotate:"15deg",y:".15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}}),(0,b.jsx)(a.E.div,{className:"h-3 w-1 rounded-full",variants:{line:{rotate:"0deg",y:"-.15rem"},arrow:{rotate:"-15deg",y:"-.15rem"},rest:{background:"var(--text-quaternary)"},hover:{background:"var(--text-primary)"}}})]})}),(0,b.jsx)(o.T,{children:t?(0,b.jsx)(c.Z,j({},v.openSidebar)):(0,b.jsx)(c.Z,j({},v.closeSidebar))})]})})})}function h(e){let{children:t,hideNavigation:n=!1,mobileHeaderContent:i,mobileHeaderRightContent:r,mobileHeaderBottomContent:o,sidebar:a,forceOpenDesktopSidebar:c=!1}=e,d=(0,f.w$)(),g=(0,u.xH)(),j=[],v=null;l.Children.forEach(t,e=>{l.isValidElement(e)&&(e.type===h.Sidebars?v=e:j.push(e))});let w=(0,p.Qr)(),O=d&&!n&&null!=a;return(0,b.jsxs)("div",{className:"relative z-0 flex h-full w-full overflow-hidden",children:[O?(0,b.jsx)(m.Z,{children:(0,b.jsx)(x.l6,{forceOpenDesktopSidebar:c,children:(0,b.jsx)("div",{className:(0,s.default)("flex h-full min-h-0 flex-col"),children:a})})}):null,(0,b.jsxs)("div",{className:"relative flex h-full max-w-full flex-1 flex-col overflow-hidden",children:[!d&&!n&&(0,b.jsx)(m.Z,{children:(0,b.jsx)(x.Vs,{onClickOpenSidebar:()=>u.vm.toggleActiveSidebar("mobile-nav"),sidebar:a,rightContent:r,bottomContent:o,children:i})}),(0,b.jsxs)("main",{className:"relative h-full w-full flex-1 overflow-auto transition-width",children:[(0,b.jsx)(m.Z,{children:O&&!w&&(0,b.jsx)(y,{isDesktopNavCollapsed:g})}),j]})]}),v]})}h.Sidebars=function(e){let{children:t}=e;return(0,b.jsx)(b.Fragment,{children:t})};let v=(0,d.vU)({closeSidebar:{id:"Stage.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"Stage.openSidebar",defaultMessage:"Open sidebar"}})},28178:function(e,t,n){"use strict";n.d(t,{MP:function(){return P},Nz:function(){return Z},Vs:function(){return D},l6:function(){return E}});var i=n(24312),r=n(4545),o=n(73581),s=n(29757),a=n(59791),l=n(94326),c=n(96398),d=n(35977),u=n(16602),f=n(19841),p=n(58164),m=n(34442),x=n(92379),b=n(88041),g=n(84551),j=n(94695),y=n(79014);n(33168);var h=n(21292),v=n(79198),w=n(26382),O=n(651);let S=["onClick","className"],k=["onClick"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach(function(t){(0,i.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function P(e){let{onClick:t,className:n}=e,i=(0,r.Z)(e,S);return(0,O.jsx)(w.zV,M({onClick:t,className:(0,f.default)(n,"flex-grow overflow-hidden")},i))}function Z(e){let{historyDisabled:t,onNewChatButtonClick:n}=e,i=(0,b.Z)(),{isUserUnauthenticated:r,isLoading:o}=(0,l.EH)(),a=(0,v.Qr)();return o?null:r?(0,O.jsx)(N,{className:"mr-3"}):(0,O.jsx)(h.u,{label:t?i.formatMessage({id:"/CxV1V",defaultMessage:"Clear chat"}):i.formatMessage({id:"Cvr6Bs",defaultMessage:"New chat"}),children:(0,O.jsx)(I,{onClick:()=>{u.A.logNewChatButtonClicked({location:"Mobile header"}),n()},children:t?(0,O.jsx)(s.Ezi,{className:(0,f.default)(a?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")}):(0,O.jsx)(s.bl$,{className:(0,f.default)(a?"icon-lg mx-2.5":"icon-sm","juice:text-token-text-secondary")})})})}function I(e){let{onClick:t}=e,n=(0,r.Z)(e,k);return(0,O.jsx)("button",M({type:"button",className:"px-3",onClick:t},n))}function N(e){let{className:t}=e,{navigateToAuth:n}=(0,l.EH)();return(0,O.jsx)(o.z,{as:"button",size:"small",color:"primary",className:t,onClick:()=>{let e=n({authType:"signup"});u.A.logSignUpButtonClicked({location:"Mobile Chat Stage Header",provider:e})},children:(0,O.jsx)(g.Z,M({},A.signUpButtonText))})}let T=e=>{let{onClose:t,sidebarOpen:n,children:i}=e;return(0,O.jsx)(c.u.Root,{show:n,as:x.Fragment,children:(0,O.jsxs)(d.V,{as:"div",className:"relative",onClose:t,children:[(0,O.jsx)(c.u.Child,{as:x.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,O.jsx)("div",{className:"fixed inset-0 bg-black/50 dark:bg-black/75"})}),(0,O.jsxs)("div",{className:"fixed inset-0 flex",children:[(0,O.jsx)(c.u.Child,{as:x.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,O.jsxs)(d.V.Panel,{className:"relative flex w-full max-w-xs flex-1 flex-col bg-token-sidebar-surface-primary",children:[(0,O.jsx)(c.u.Child,{as:x.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,O.jsx)("div",{className:"absolute right-0 top-0 -mr-12 pt-3.5",children:(0,O.jsxs)("button",{type:"button",className:"ml-1 flex h-10 w-10 items-center justify-center text-white focus:outline-none focus:ring-0 focus-visible:outline-white juice:hidden",onClick:t,children:[(0,O.jsx)("span",{className:"sr-only",children:(0,O.jsx)(g.Z,M({},A.closeSidebar))}),(0,O.jsx)(a.v7,{className:"icon-md"})]})})}),i]})}),(0,O.jsx)("div",{className:"w-14 flex-shrink-0"})]})]})})},D=e=>{let{onClickOpenSidebar:t,children:n,sidebar:i,rightContent:r,bottomContent:o}=e,a=(0,y.tN)(e=>e.activeSidebar),l=(0,m.useRouter)().asPath;return(0,x.useEffect)(()=>{"mobile-nav"===a&&y.vm.setActiveSidebar(!1)},[l]),(0,O.jsxs)(O.Fragment,{children:[(0,O.jsxs)("div",{className:"sticky top-0 z-10 flex min-h-[40px] items-center justify-center border-b border-token-border-medium bg-token-main-surface-primary pl-1 juice:min-h-[60px] juice:border-transparent md:hidden",children:[(0,O.jsxs)("button",{type:"button",className:"absolute bottom-0 left-0 top-0 inline-flex items-center justify-center rounded-md px-3 hover:text-token-text-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white active:opacity-50",onClick:t,children:[(0,O.jsx)("span",{className:"sr-only",children:(0,O.jsx)(g.Z,M({},A.openSidebar))}),(0,O.jsx)(s.Oqj,{className:"icon-lg juice:mx-2.5 juice:text-token-text-secondary"})]}),n,null!=r&&(0,O.jsx)("div",{className:"absolute bottom-0 right-0 top-0 flex items-center",children:r})]}),o&&(0,O.jsx)("div",{className:"flex w-full items-center justify-center bg-token-main-surface-primary",children:o}),(0,O.jsx)(T,{onClose:()=>{y.vm.setActiveSidebar(!1)},sidebarOpen:"mobile-nav"===a,children:i})]})};function E(e){let{forceOpenDesktopSidebar:t,children:n}=e,i=(0,x.useRef)(null),r=(0,y.xH)()&&!t;return(0,O.jsx)(p.E.div,{className:"flex-shrink-0 overflow-x-hidden bg-token-sidebar-surface-primary",ref:i,initial:!1,animate:{width:r?0:"260px",transition:{duration:.165,ease:"easeOut"}},onAnimationStart:()=>{i.current&&(i.current.style.visibility="visible")},onAnimationComplete:()=>{i.current&&r&&(i.current.style.visibility="hidden")},children:(0,O.jsx)("div",{className:"h-full w-[260px]",children:(0,O.jsx)("div",{className:"flex h-full min-h-0 flex-col",children:n})})})}let A=(0,j.vU)({closeSidebar:{id:"navigation.closeSidebar",defaultMessage:"Close sidebar"},openSidebar:{id:"navigation.openSidebar",defaultMessage:"Open sidebar"},signUpButtonText:{id:"navigation.signUpButtonText",defaultMessage:"Sign up"}})},65731:function(e,t,n){"use strict";n.d(t,{$V:function(){return p},A4:function(){return m},Li:function(){return j},W8:function(){return h},i$:function(){return x},i9:function(){return g},qQ:function(){return b},vi:function(){return y}});var i,r,o,s,a,l,c,d,u=n(81669),f=n(74091);let p=f.Z.div(i||(i=(0,u.Z)(["text-base text-token-text-primary flex flex-col gap-10 my-10"]))),m=f.Z.div(r||(r=(0,u.Z)(["text-xl font-semibold"]))),x=f.Z.div(o||(o=(0,u.Z)(["text-base font-semibold"]))),b=f.Z.div(s||(s=(0,u.Z)(["flex flex-col divide-y divide-token-border-light border-y border-token-border-light"]))),g=f.Z.div(a||(a=(0,u.Z)(["flex flex-col gap-3 w-full m-auto md:m-0"]))),j=f.Z.div(l||(l=(0,u.Z)(["text-sm"]))),y=f.Z.div(c||(c=(0,u.Z)(["flex justify-between py-4 gap-4"]))),h=f.Z.hr(d||(d=(0,u.Z)(["max-w-xl border-token-border-light"])))},35539:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/identity",function(){return n(17914)}])}},function(e){e.O(0,[4736,3400,7380,164,2888,9774,179],function(){return e(e.s=35539)}),_N_E=e.O()}]);
//# sourceMappingURL=identity-3d7be71caf0ecc57.js.map