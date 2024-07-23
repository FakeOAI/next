"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[449],{28605:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(93677);n(92379);var a=n(651);function i(e){let{title:t,description:n,onClose:i,actionButton:s,cancelButton:o}=e;return(0,a.jsx)(r.fC,{open:!0,onOpenChange:e=>{e||i()},children:(0,a.jsxs)(r.h_,{children:[(0,a.jsx)(r.aV,{className:"fixed inset-0 border-token-border-medium radix-state-open:animate-show"}),(0,a.jsxs)(r.VY,{className:"fixed start-1/2 top-1/2 flex max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-2xl bg-token-main-surface-primary shadow-2xl focus:outline-none radix-state-open:animate-alertShow",onEscapeKeyDown:e=>e.preventDefault(),children:[(0,a.jsx)(r.Dx,{className:"border-b border-token-border-light p-4 text-lg font-semibold md:p-6",children:t}),(0,a.jsxs)("div",{className:"flex flex-col gap-4 p-4 md:p-6",children:[(0,a.jsx)(r.dk,{className:"text-base",children:n}),(0,a.jsxs)("div",{className:"flex justify-end gap-2",children:[o&&(0,a.jsx)(r.$j,{asChild:!0,children:o}),(0,a.jsx)(r.aU,{asChild:!0,children:s})]})]})]})]})})}},92609:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(98601),a=n(52088),i=n(19841),s=n(651);let o=["className","openNewTab","type"];function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function c(e){let{className:t,openNewTab:n=!1,type:c="primary"}=e,u=(0,a.Z)(e,o);return(0,s.jsx)("a",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({rel:"noreferrer",className:(0,i.default)("cursor-pointer font-normal underline","primary"===c&&"text-green-600",t),target:n?"_blank":"_self"},u))}},15122:function(e,t,n){n.d(t,{m:function(){return s}});var r=n(94273),a=n(92379),i=n(651);function s(e){let{show:t,appear:n,children:s}=e;return(0,i.jsx)(r.u,{as:a.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0 translate-y-1",enterTo:"opacity-100 translate-y-0",leave:"transition ease-in duration-150",leaveFrom:"opacity-100 translate-y-0",leaveTo:"opacity-0 translate-y-1",show:t,appear:n,children:s})}},12310:function(e,t,n){n.d(t,{Bd:function(){return k},DD:function(){return y},Fc:function(){return b},HH:function(){return v},Ji:function(){return x},OR:function(){return w},VG:function(){return h},f_:function(){return m},sd:function(){return N},uo:function(){return g},z0:function(){return O}});var r,a=n(2346),i=n(99333),s=n(24740),o=n(2721),l=n(31498),c=n(84760),u=n(56032),d=n(42420),f=n(75172),p=n(68306);function m(e,t){return(0,c.a)({queryKey:["workspace/identity",e],queryFn:async()=>{if(void 0!==e)return await o.Z.getWorkspaceIdentitySettings(e)},enabled:t})}function h(){let e=(0,l.ec)(l.F_.workspaceId),{data:t}=m(null!=e?e:void 0,null!=e);return null==t?void 0:t.allow_external_domain_invites}function g(){let e=(0,l.ec)(l.F_.workspaceId),{data:t}=m(null!=e?e:void 0,null!=e);return(null==t?void 0:t.domains)&&(null==t?void 0:t.domains.filter(e=>"verified"==e.status))}function x(e){let t=(0,f.Z)();return(0,u.D)({mutationFn:n=>{let{shouldAutoProvision:r}=n;return o.Z.setWorkspaceShouldAutoProvision(e,r).then(e=>{let n=r?M.autoProvisionEnabledToast:M.autoProvisionDisabledToast;return s.m.success(t.formatMessage(n),{duration:3}),e}).catch(e=>{throw s.m.danger(e.message),e})}})}function v(e){let t=(0,f.Z)();return(0,u.D)({mutationFn:async n=>{let{shouldAllowExternalDomainInvites:r}=n;try{let n=await o.Z.setWorkspaceShouldDisableExternalDomainInvites(e,r),a=r?M.allowExternalDomainInvitesToast:M.disableExternalDomainInvitesToast;return s.m.success(t.formatMessage(a),{duration:3}),n}catch(e){throw s.m.danger(e.message),e}}})}function k(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{domainId:n}=t;return o.Z.removeDomainFromWorkspace(e,n)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]}),t.refetchQueries({queryKey:["builderProfile"]})}})}function j(e){let t=e;return t.startsWith("-----BEGIN")||(t="-----BEGIN CERTIFICATE-----\n".concat(t)),t.endsWith("CERTIFICATE-----")||(t="".concat(t,"\n-----END CERTIFICATE-----")),t}function b(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{signInEndpoint:n,cert:r}=t;return o.Z.createSAMLConnection(e,n,j(r))},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function y(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{connectionId:n,signInEndpoint:r,cert:a,active:i,enforcedClients:s}=t;return o.Z.updateSAMLConnection(e,n,{signInEndpoint:r,cert:void 0!==a?j(a):void 0,active:i,enforcedClients:s})},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}function w(e){let t=(0,d.NL)();return(0,u.D)({mutationFn:t=>{let{connectionId:n}=t;return o.Z.deleteSAMLConnection(e,n)},onSuccess:()=>{t.refetchQueries({queryKey:["workspace/identity",e]})}})}let O=n(15478).Z.div(r||(r=(0,a.Z)(["text-md mb-4 text-token-text-secondary"]))),N={[i.pT.VERIFIED]:(0,p.Em)({id:"i7FkyS",defaultMessage:"Verified"}),[i.pT.PENDING]:(0,p.Em)({id:"THBv/l",defaultMessage:"Pending"}),[i.pT.EXPIRED]:(0,p.Em)({id:"+sjWGK",defaultMessage:"Expired"})},M=(0,p.vU)({autoProvisionEnabledToast:{id:"workspaceIdentity.autoProvisionEnabledToast",defaultMessage:"Auto provisioning enabled for this workspace"},autoProvisionDisabledToast:{id:"workspaceIdentity.autoProvisionDisabledToast",defaultMessage:"Auto provisioning disabled for this workspace"},allowExternalDomainInvitesToast:{id:"j0jI/4",defaultMessage:"External domain invites are allowed for this workspace"},disableExternalDomainInvitesToast:{id:"67yB97",defaultMessage:"External domain invites are disabled for this workspace"}})},44087:function(e,t,n){n.d(t,{$3:function(){return d},Ap:function(){return l},CV:function(){return f},GA:function(){return u},Gk:function(){return x},bE:function(){return v},cI:function(){return m},eA:function(){return p},my:function(){return g},qH:function(){return c}});var r=n(99333),a=n(93951),i=n(31498),s=n(92379),o=n(75172);function l(){let e=(0,o.Z)(),t=e.formatMessage(k.adminRoleName),n=e.formatMessage(k.ownerRoleName),a=e.formatMessage(k.standardRoleName);return(0,s.useMemo)(()=>({[r.r3.OWNER]:n,[r.r3.ADMIN]:t,[r.r3.STANDARD]:a}),[n,t,a])}function c(e){let t=(0,o.Z)(),n=null==e?void 0:e.isTeam(),r=null==e?void 0:e.isEnterprise(),a=null==e?void 0:e.isEdu();if(e){if(n)return t.formatMessage(k.teamPlanName);if(r)return t.formatMessage(k.enterprisePlanName);if(a)return t.formatMessage(k.eduPlanName)}return t.formatMessage(k.personalPlanName)}function u(e){return f((0,o.Z)(),e)}function d(){let e=(0,a.t)();return f((0,o.Z)(),e)}function f(e,t){var n;return null==t||t.isPersonalAccount()?e.formatMessage(k.personalWorkspaceTitle):null!==(n=t.data.name)&&void 0!==n?n:e.formatMessage(k.defaultWorkspaceTitle)}function p(){var e;let t=(0,i.aF)();return null!==(e=null==t?void 0:t.email)&&void 0!==e?e:null}function m(){var e,t;let n=(0,i.aF)();return null!==(e=null!==(t=null==n?void 0:n.name)&&void 0!==t?t:null==n?void 0:n.email)&&void 0!==e?e:null}function h(){return(0,i.ec)(e=>{let{workspaces:t}=e;return t})}function g(){var e;let{data:t}=(0,a.rk)();return null!==(e=null==t?void 0:t.accountItems.filter(e=>!e.isDeactivated()))&&void 0!==e?e:[]}function x(e){let t=h().find(t=>t.id===e);return(null==t?void 0:t.role)===r.r3.OWNER}function v(e){let t=h().find(t=>t.id===e);return(null==t?void 0:t.role)===r.r3.ADMIN}let k=(0,n(68306).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise"},eduPlanName:{id:"useWorkspaces.eduPlanName",defaultMessage:"Edu"},teamPlanName:{id:"useWorkspaces.teamPlanName",defaultMessage:"Team"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member"}})},44395:function(e,t,n){n.d(t,{O:function(){return s},Z:function(){return i}});var r=n(19841),a=n(651);function i(e){let{percentage:t,thickness:n=1/12,className:i,sizeOverride:s,backgroundStrokeClassName:o="stroke-gray-400",transitionDuration:l,transitionTimingFunction:c,onTransitionEnd:u}=e,d=null!=s?s:120,f=d*n,p=(d-f)/2,m=2*Math.PI*p;return(0,a.jsxs)("svg",{width:d,height:d,viewBox:"0 0 ".concat(d," ").concat(d),className:i,children:[(0,a.jsx)("circle",{className:(0,r.default)("origin-[50%_50%] -rotate-90",o),strokeWidth:f,fill:"transparent",r:p,cx:d/2,cy:d/2}),(0,a.jsx)("circle",{className:"origin-[50%_50%] -rotate-90 transition-[stroke-dashoffset]",stroke:"currentColor",strokeWidth:f,strokeDashoffset:m-t/100*m,strokeDasharray:"".concat(m," ").concat(m),fill:"transparent",r:p,cx:d/2,cy:d/2,style:{transitionDuration:l,transitionTimingFunction:c},onTransitionEnd:u})]})}let s=e=>{let{size:t=40,className:n="text-blue-selection"}=e;return(0,a.jsx)("div",{className:(0,r.default)("relative",n),style:{width:t,height:t},children:(0,a.jsxs)("svg",{className:"absolute h-full w-full animate-spin",viewBox:"0 0 50 50",children:[(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"spinner-gradient",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[(0,a.jsx)("stop",{offset:"0%",style:{stopColor:"currentColor",stopOpacity:1}}),(0,a.jsx)("stop",{offset:"100%",style:{stopColor:"currentColor",stopOpacity:0}})]})}),(0,a.jsx)("circle",{cx:"25",cy:"25",r:"20",stroke:"url(#spinner-gradient)",strokeWidth:"8",strokeLinecap:"round",fill:"none",strokeDasharray:"75,150",strokeDashoffset:"0"})]})})}},69338:function(e,t,n){n.d(t,{j:function(){return o}});var r=n(19841),a=n(11550),i=n(30115),s=n(651);let o=e=>{let{onDismiss:t,title:n,content:o,onPrimaryCtaClick:l,primaryCtaText:c,onSecondaryCtaClick:u,secondaryCtaText:d,isElevated:f=!0}=e;return(0,s.jsxs)("div",{className:(0,r.default)("flex w-full items-start gap-4 rounded-2xl border border-token-border-light bg-token-main-surface-primary py-4 pl-5 pr-3 text-sm text-token-text-primary [text-wrap:pretty] dark:border-transparent dark:bg-token-main-surface-secondary md:items-center lg:mx-auto",f&&"shadow-xxs"),children:[(0,s.jsxs)("div",{className:"mt-1.5 flex grow flex-col items-start gap-4 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-8",children:[(0,s.jsxs)("div",{className:"flex max-w-none flex-col",children:[n&&(0,s.jsx)("div",{className:(0,r.default)("font-bold text-token-text-primary"),children:n}),(0,s.jsx)("div",{className:(0,r.default)(n?"text-token-text-secondary":""),children:o})]}),(c||d)&&(0,s.jsxs)("div",{className:"flex shrink-0 gap-2 pb-1 md:pb-0",children:[d&&(0,s.jsx)(a.z,{onClick:u,color:"secondary",className:"shrink-0",children:d}),c&&(0,s.jsx)(a.z,{onClick:l,color:"primary",className:"shrink-0",children:c})]})]}),(0,s.jsx)("div",{className:"flex shrink-0 items-center gap-2",children:!!t&&(0,s.jsx)(i.P,{onClick:t})})]})}},87440:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(98601),a=n(91530),i=n.n(a),s=n(68810);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let c={showReferralInviteModal:!1},u=(0,s.Ue)()(e=>l(l({},c),{},{setShowReferralInviteModal:function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i();e({showReferralInviteModal:t}),null==n||n()}}))},89692:function(e,t,n){n.d(t,{Dr:function(){return E},Jx:function(){return _},f6:function(){return C},gO:function(){return A},im:function(){return Z}});var r=n(98601),a=n(16757),i=n(28605),s=n(11550),o=n(92609),l=n(69338),c=n(24907),u=n(60682),d=n(93951),f=n(99976),p=n(61619),m=n(88667),h=n(30474),g=n(34977),x=n(92379),v=n(62984),k=n(75172),j=n(68306),b=n(651);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let O=u.pm.UseSidekick,N=u.pm.SidekickLauncherOnboarding,M="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",P="download";function C(){let e=(0,d.t)(),t=(0,m.ep)("1696863369").layer.get("has_sidekick_access",!1);return null!=e&&t}function E(){var e;let t=(0,g.useRouter)(),n=(null!==(e=(0,h.L)(()=>t.asPath))&&void 0!==e?e:"").split("#");return{openModal:()=>{let e=t.asPath.split("#");t.replace(e[0]+"#"+P)},closeModal:()=>{t.replace(n[0])},isOpen:n[1]===P}}function Z(e){var t;let{eligible:n,isLoading:r}=(0,c.g)(),i=C(),{eligible:s,isLoading:o}=(0,u.qg)(O),{eligible:l,isLoading:d}=(0,u.qg)(N);return{eligible:!(n||!s||!l||!i||(null===(t=e.conversationMode)||void 0===t?void 0:t.kind)!==a.OL.PrimaryAssistant)&&m.m9.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:r||d||o}}function _(e){let{onClose:t}=e;(0,x.useEffect)(()=>{f.A.logEvent(p.M.sidekickAnnouncementShown),m.m9.logEvent("chatgpt_sidekick_announcement_shown")},[]);let{markAsViewed:n}=(0,u.qg)(O),r=(0,x.useCallback)(()=>{n(),f.A.logEvent(p.M.sidekickAnnouncementDismissed),m.m9.logEvent("chatgpt_sidekick_announcement_closed"),t&&t()},[n,t]),a={downloadUrl:M,markAsDownloaded:(0,x.useCallback)(()=>{f.A.logEvent(p.M.sidekickAnnouncementLinkClicked),m.m9.logEvent("chatgpt_sidekick_announcement_download_clicked"),n(),t&&t()},[n,t]),markAsViewed:r,isSidekickAvailable:C()};return(0,b.jsx)(D,w({},a))}function A(){let{closeModal:e,isOpen:t}=E(),n=C(),r=(0,x.useMemo)(()=>({isDesktopAppAvailable:n}),[n]);return((0,x.useEffect)(()=>{t&&(f.A.logEvent(p.M.sidekickDownloadModalShown,w({},r)),m.m9.logEvent("chatgpt_sidekick_modal_shown"))},[r,t]),t)?(0,b.jsx)(S,{downloadUrl:M,markAsDownloaded:()=>{f.A.logEvent(p.M.sidekickDownloadModalDownloaded,r),m.m9.logEvent("chatgpt_sidekick_modal_download_clicked"),e()},markAsViewed:()=>{f.A.logEvent(p.M.sidekickDownloadModalClosed,r),m.m9.logEvent("chatgpt_sidekick_modal_closed"),e()},isSidekickAvailable:n}):null}function S(e){let{downloadUrl:t,markAsDownloaded:n,markAsViewed:r,isSidekickAvailable:a}=e,l=a?T.modalTitleEligible:T.modalTitleNotEligible,c=(0,b.jsx)(v.Z,w({},l)),u=(0,b.jsx)(v.Z,w({},T.modalContent)),d=a?T.disclaimer:T.comingSoonDisclaimer,f=(0,b.jsx)(v.Z,w(w({},d),{},{values:{learnMoreLink:e=>(0,b.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),p=(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{children:u}),(0,b.jsx)("div",{className:"mt-2",children:f})]}),m=(0,b.jsx)(s.z,{as:"link",to:t,color:"primary",onClick:n,openNewTab:!0,children:(0,b.jsx)(v.Z,w({},T.download))}),h=(0,b.jsx)(s.z,{color:"secondary",onClick:r,children:(0,b.jsx)(v.Z,w({},T.close))}),g=a?m:h,x=a?h:void 0;return(0,b.jsx)(i.Z,{onClose:r,title:c,description:p,actionButton:g,cancelButton:x})}function D(e){var t;let{markAsDownloaded:n,markAsViewed:r}=e,a=(0,k.Z)(),i=(0,x.useCallback)(()=>{window.open(M,"_blank"),n()},[n]),s=(0,b.jsx)(v.Z,w({},null!==(t=(0,d.t)())&&void 0!==t&&t.isEnterpriseOrEdu()?T.bannerTitleEnterpriseOrEdu:T.bannerTitleMentioningPlus)),c=(0,b.jsx)(v.Z,w({},T.bannerContent)),u=(0,b.jsx)(v.Z,w(w({},T.disclaimer),{},{values:{learnMoreLink:e=>(0,b.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),f=(0,b.jsxs)("div",{className:"flex-grow",children:[(0,b.jsx)("div",{className:"mb-0.5 font-semibold",children:s}),(0,b.jsxs)("span",{className:"text-token-text-secondary",children:[c," ",u]})]});return(0,b.jsx)(l.j,{onPrimaryCtaClick:i,primaryCtaText:a.formatMessage(T.download),onDismiss:r,content:f})}let T=(0,j.vU)({bannerTitleEnterpriseOrEdu:{id:"SidekickOnboarding.bannerTitleEnterpriseOrEdu",defaultMessage:"ChatGPT is now available for macOS"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_2",defaultMessage:"Faster access to ChatGPT from your desktop. Share screenshots, use voice, and search past conversations."},disclaimer:{id:"SidekickOnboarding.disclaimer_2",defaultMessage:"Available for macOS 14+ with Apple Silicon. <learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}})},83322:function(e,t,n){n.d(t,{S:function(){return B},W:function(){return G}});var r=n(98601),a=n(60211),i=n(98095),s=n(89692),o=n(50454),l=n(93951),c=n(31438),u=n(31498),d=n(15913),f=n(69769),p=n(42420),m=n(27702),h=n(82821),g=n(54089),x=n(58695),v=n(99976),k=n(61619),j=n(19841),b=n(18939),y=n.n(b),w=n(92379),O=n(75172),N=n(62984),M=n(68306),P=n(59725),C=n(15122),E=n(97537),Z=n(44087),_=n(30853),A=n(47563),S=n(89857),D=n(90067),T=n(56625),W=n(52503),I=n(651);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function G(e){let{onClickSettings:t}=e;return(0,I.jsxs)(m.v,{as:"div",className:"group relative",children:[(0,I.jsx)(H,{}),(0,I.jsx)(C.m,{children:(0,I.jsx)(m.v.Items,{className:"popover absolute bottom-full left-0 z-20 mb-1 w-full overflow-hidden rounded-lg border border-token-border-light bg-token-main-surface-primary p-1.5 shadow-lg outline-none",children:(0,I.jsx)(U,{onClickSettings:t})})})]})}function R(){var e;let t=!(null!==(e=(0,l.t)())&&void 0!==e&&e.isEnterpriseOrEdu),n=(0,O.Z)(),r=(0,u.aF)();return r?(0,I.jsxs)("div",{className:"flex items-center justify-between gap-2 py-2 pl-5 pr-4",children:[(0,I.jsx)("div",{className:"text-sm text-token-text-secondary",children:null==r?void 0:r.email}),t&&(0,I.jsx)(_.u,{label:n.formatMessage($.addWorkspaceTooltip),side:"right",children:(0,I.jsx)("button",{onClick:()=>(0,S.MG)("profile menu"),children:(0,I.jsx)(A.Vz5,{className:"icon-sm text-token-text-primary"})})})]}):null}function z(){let e=(0,l.t)();return null==e?(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:"w-full px-3 py-2",children:(0,I.jsx)(E.Z,{})})}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(R,{}),(0,I.jsx)("div",{className:"flex h-11 w-full items-center justify-start gap-3 px-3 py-1 text-sm",children:(0,I.jsx)(q,{workspace:e,isLoading:!1,currentWorkspaceId:e.id,showCheck:!1})})]})}function B(e){let{menuItemComponent:t}=e,n=(0,h.b)(),r=(0,p.NL)(),{data:a}=(0,l.rk)(),s=(0,l.t)(),{0:o,1:c}=(0,w.useState)(!1),d=(0,u.aF)(),m=(0,O.Z)();if(!s||!a)return null;let g=s.isWorkspaceAccount(),x=a.accountItems.length>1,v=a.accountItems,k=y()([v.find(e=>e.isPersonalAccount()),...v.filter(e=>!e.isPersonalAccount())]);if(k.sort((e,t)=>e.isPersonalAccount()?1:t.isPersonalAccount()?-1:0),!x)return g?(0,I.jsx)(z,{}):(0,I.jsx)(I.Fragment,{children:(0,I.jsx)("div",{className:"ml-3 mr-2 py-2 text-sm text-token-text-secondary",children:null==d?void 0:d.email})});let j=k.map(e=>(0,I.jsx)(t,{disabled:e.isDeactivated(),onClick:()=>{if(e.isDeactivated()||e.id===(null==s?void 0:s.id))return;c(!0);let{willRedirect:t}=(0,l.nq)(r,e.id,n,m);t||(0,f.M)()},className:"radix-disabled:pointer-events-auto radix-disabled:hover:bg-transparent",children:e.isDeactivated()?(0,I.jsx)(V,{workspace:e,isLoading:o}):(0,I.jsx)(q,{workspace:e,isLoading:o,currentWorkspaceId:null==s?void 0:s.id})},e.id));return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(R,{}),(0,I.jsx)(i.Z.Separator,{}),j]})}function q(e){let{workspace:t,isLoading:n,currentWorkspaceId:r,showCheck:a=!0}=e,i=t.canAccessWithCurrentSession;return(0,I.jsxs)("div",{children:[(0,I.jsxs)("div",{className:(0,j.default)("flex w-full items-center gap-2.5",!i&&"opacity-50"),children:[(0,I.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,I.jsx)(P.zf,{iconSize:"small",workspace:t,className:(0,j.default)({"flex-shrink-0":!0})})}),(0,I.jsx)("div",{className:"line-clamp-1 flex-grow text-token-text-primary",children:(0,Z.CV)((0,O.Z)(),t)}),n&&(0,I.jsx)(E.Z,{}),!n&&a&&(0,I.jsx)("span",{className:"text-token-text-primary",children:t.id===r?(0,I.jsx)(A.kvR,{className:"icon-sm"}):(0,I.jsx)(I.Fragment,{})})]}),!t.canAccessWithCurrentSession&&(0,I.jsx)("small",{className:"mx-1 text-token-text-secondary",children:(0,I.jsx)(N.Z,L({},$.authenticateToAccessWorkspace))})]})}function V(e){let{workspace:t,isLoading:n}=e,r=(0,O.Z)(),s=t.isOwnerOfAccount(),{0:l,1:u}=(0,w.useState)(!1),d=(0,a.p5)(t.id);return(0,w.useEffect)(()=>{null!=d&&l&&(c.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(d,o.Y6),existingAccount:t}),u(!1))},[d,l,t]),(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(_.u,{className:"flex w-full flex-1 items-center gap-2.5",label:r.formatMessage($.disabledWorkspaceTooltip),sideOffset:20,side:"right",children:[(0,I.jsx)("span",{className:"flex h-5 w-5 items-center justify-center",children:(0,I.jsx)(A.oVl,{className:"icon-sm flex-shrink-0 opacity-30"})}),(0,I.jsx)("div",{className:"truncate opacity-30",children:(0,Z.CV)(r,t)})]}),n&&(0,I.jsx)(E.Z,{}),!n&&(0,I.jsxs)(i.Z.Root,{children:[(0,I.jsx)(g.xz,{className:"rounded text-center hover:bg-token-main-surface-secondary",children:(0,I.jsx)(A.nWS,{className:"icon-sm m-1"})}),(0,I.jsx)(i.Z.Portal,{children:(0,I.jsxs)(i.Z.Content,{children:[s&&(0,I.jsx)(I.Fragment,{children:(0,I.jsx)(i.Z.Item,{onClick:()=>{null==d?u(!0):c.vm.setPurchaseWorkspaceData({minimumSeats:Math.max(d,o.Y6),existingAccount:t})},children:l?(0,I.jsx)(E.Z,{}):(0,I.jsx)(N.Z,{id:"navigation.reactivateWorkspace",defaultMessage:"Reactivate workspace"})})}),(0,I.jsx)(i.Z.Item,{onClick:()=>{c.vm.setLeaveWorkspaceData(t)},children:(0,I.jsx)(N.Z,{id:"navigation.leaveWorkspace",defaultMessage:"Leave workspace"})})]})})]})]})}function U(e){let{onClickSettings:t}=e,{data:n}=(0,l.rk)(),r=(0,l.t)(),a=(0,d.w$)(),i=(0,s.f6)(),{openModal:o}=(0,s.Dr)();if(!r||!n)return null;let c=r.isWorkspaceAccount();return(0,I.jsxs)("nav",{children:[(0,I.jsx)(B,{menuItemComponent:D.ZP}),(0,I.jsx)(D.R,{}),c?(0,I.jsx)(W.b,{menuItemComponent:D.ZP,routedMenuItemComponent:D.IS}):(0,I.jsx)(T.W,{menuItemComponent:D.ZP}),!a&&(0,I.jsx)(D.ZP,{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{v.A.logEvent(k.M.clickFaqLink)},icon:A.Pfi,children:(0,I.jsx)(N.Z,L({},$.helpAndFaq))}),(0,I.jsx)(D.ZP,{onClick:t,icon:A.SWE,children:(0,I.jsx)(N.Z,L({},$.settings))}),i&&(0,I.jsx)(K,{openDownloadModal:o}),(0,I.jsx)(D.R,{}),(0,I.jsx)(D.ZP,{onClick:()=>{v.A.logEvent(k.M.clickLogOut,{eventSource:"mouse"}),(0,x.w7)()},icon:A.iz5,children:(0,I.jsx)(N.Z,L({},$.logOut))})]})}function H(){return(0,u.aF)()?(0,I.jsx)(Q,{}):null}function K(e){let{openDownloadModal:t}=e;return(0,I.jsxs)("span",{children:[(0,I.jsx)(D.R,{}),(0,I.jsx)(D.ZP,{icon:A.gFD,onClick:()=>{v.A.logEvent(k.M.accountMenuClickDownloadApp),t()},children:(0,I.jsx)(N.Z,L({},$.downloadApp))})]})}function Q(){let{data:e}=(0,l.rk)(),t=(0,l.t)(),n=(0,Z.$3)(),r=(0,Z.cI)();if(!t||!e)return null;let a=t.isWorkspaceAccount(),i=e.accountItems.length>1;return(0,I.jsxs)(m.v.Button,{className:"flex w-full max-w-[100%] items-center gap-2 rounded-lg p-2 text-sm  hover:bg-token-sidebar-surface-secondary group-ui-open:bg-token-sidebar-surface-secondary",children:[(0,I.jsx)("div",{className:"flex-shrink-0",children:(0,I.jsx)(P.zf,{iconSize:"gizmo"})}),(0,I.jsxs)("div",{className:"relative -top-px grow -space-y-px truncate text-start text-token-text-primary",children:[(0,I.jsx)("div",{dir:"auto",children:r}),a||i?(0,I.jsx)("div",{className:"truncate text-xs text-token-text-secondary",dir:"auto",children:n}):null]})]})}let $=(0,M.vU)({helpAndFaq:{id:"navigation.helpAndFaq",defaultMessage:"Help & FAQ"},settings:{id:"navigation.settings",defaultMessage:"Settings"},logOut:{id:"navigation.logOut",defaultMessage:"Log out"},accountSwitcherTitle:{id:"navigation.accountSwitcherTitle",defaultMessage:"Workspaces"},defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},addWorkspaceTooltip:{id:"navigation.addWorkspaceTooltip",defaultMessage:"Create a Team workspace"},disabledWorkspaceTooltip:{id:"navigation.disabledWorkspaceTooltip",defaultMessage:"This workspace has been deactivated"},downloadApp:{id:"navigation.downloadMacApp",defaultMessage:"Download the macOS app"},authenticateToAccessWorkspace:{id:"Al3JyD",defaultMessage:"Authenticate to access this workspace"}})},90067:function(e,t,n){n.d(t,{IS:function(){return g},R:function(){return k},Vq:function(){return j},ZB:function(){return x},ZP:function(){return h},zV:function(){return v}});var r,a,i,s,o,l=n(2346),c=n(27702),u=n(19841),d=n(24098),f=n.n(d),p=n(15478),m=n(651);function h(e){let{onClick:t,href:n,target:r,children:a,disabled:i,icon:s}=e;return(0,m.jsx)(c.v.Item,{disabled:i,children:e=>{let{active:o}=e;return(0,m.jsxs)(x,{onClick:t,href:n,target:r,className:(0,u.default)({"bg-token-sidebar-surface-secondary":o,"hover:bg-token-sidebar-surface-secondary":!o&&!i}),children:[s&&(0,m.jsx)(s,{className:"icon-md"}),a]})}})}function g(e){let{href:t,children:n,icon:r}=e;return(0,m.jsx)(c.v.Item,{children:e=>{let{active:a}=e;return(0,m.jsx)(f(),{href:t,children:(0,m.jsxs)(x,{$as:"span",className:(0,u.default)(a?"bg-token-sidebar-surface-secondary":"cursor-pointer"),children:[r&&(0,m.jsx)(r,{className:"icon-md"}),n]})})}})}p.Z.a(r||(r=(0,l.Z)(["p-2 rounded-md hover:bg-black/10 hover:dark:bg-white/10 cursor-pointer"])));let x=p.Z.a(a||(a=(0,l.Z)(["flex gap-2 rounded p-2.5 text-sm cursor-pointer focus:ring-0 hover:bg-token-main-surface-secondary radix-disabled:pointer-events-none radix-disabled:opacity-50 group items-center"]))),v=(0,p.Z)(x)(i||(i=(0,l.Z)(["border dark:border-white/20 min-h-0 hover:bg-gray-500/10 h-10 rounded-lg border-[rgba(0,0,0,0.1)]"]))),k=p.Z.div(s||(s=(0,l.Z)(["h-px bg-token-border-light my-1.5"]))),j=(0,p.Z)(x)(o||(o=(0,l.Z)(["",""])),e=>e.$active?"bg-token-sidebar-surface-secondary":"hover:bg-token-sidebar-surface-secondary")},56625:function(e,t,n){n.d(t,{W:function(){return h}});var r=n(89857),a=n(93951),i=n(31438),s=n(3551),o=n(99976),l=n(61619),c=n(34977),u=n.n(c),d=n(92379),f=n(62984),p=n(47563),m=n(651);function h(e){let{menuItemComponent:t}=e,n=(0,a.t)(),c=(0,d.useCallback)(()=>{o.A.logEvent(l.M.clickSidebarAccountPortalMenuItem),(0,r.MG)("Sidebar account menu item")},[]);return(0,m.jsxs)(m.Fragment,{children:[(null==n?void 0:n.hasPaidSubscription())&&(0,m.jsx)(t,{onClick:c,icon:p.wpi,children:(0,m.jsx)(f.Z,{id:"popoverNavigation.myPlan",defaultMessage:"My plan"})}),(null==n?void 0:n.canInteractWithGizmos())&&(0,m.jsx)(t,{onClick:()=>{o.A.logEvent(l.M.accountMenuClickMyGPTs),u().push((0,s.L7)())},icon:p.jdE,children:(0,m.jsx)(f.Z,{id:"popoverNavigation.myGpts",defaultMessage:"My GPTs"})}),(0,m.jsx)(t,{icon:p.A2w,onClick:()=>{i.vm.openModal(i.B.UserContext),o.A.logEvent(l.M.accountMenuClickCustomizeChatGPT)},children:(0,m.jsx)(f.Z,{id:"popoverNavigation.chatPreferences.1",defaultMessage:"Customize ChatGPT"})})]})}},52503:function(e,t,n){n.d(t,{b:function(){return m}});var r=n(98601),a=n(31438),i=n(3551),s=n(99976),o=n(61619),l=n(62984),c=n(68306),u=n(47563),d=n(651);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){let{menuItemComponent:t,routedMenuItemComponent:n}=e;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{href:"/admin",icon:u.ZyV,children:(0,d.jsx)(l.Z,p({},h.myWorkspaceSettings))}),(0,d.jsx)(n,{href:(0,i.L7)(),onClick:()=>{s.A.logEvent(o.M.accountMenuClickMyGPTs)},icon:u.jdE,children:(0,d.jsx)(l.Z,p({},h.myGpts))}),(0,d.jsx)(t,{onClick:()=>{a.vm.openModal(a.B.UserContext),s.A.logEvent(o.M.accountMenuClickCustomizeChatGPT)},icon:u.A2w,children:(0,d.jsx)(l.Z,p({},h.chatPreferences))})]})}let h=(0,c.vU)({myWorkspaceSettings:{id:"workspacePopoverNavigation.myWorkspaceSettings",defaultMessage:"Manage workspace"},chatPreferences:{id:"B4s/Jz",defaultMessage:"Customize ChatGPT"},myGpts:{id:"workspacePopoverNavigation.myGpts",defaultMessage:"My GPTs"}})},30808:function(e,t,n){n.d(t,{E:function(){return c}});var r=n(99976),a=n(61619),i=n(62984),s=n(98095),o=n(47563),l=n(651);function c(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.Z.Item,{icon:o.Pfi,children:(0,l.jsx)("a",{href:"https://help.openai.com/en/collections/3742473-chatgpt",target:"_blank",onClick:()=>{r.A.logEvent(a.M.clickFaqLink)},children:(0,l.jsx)(i.Z,{id:"thread.helpAndFaq",defaultMessage:"Help & FAQ"})})}),(0,l.jsx)(s.Z.Item,{icon:o.Pfi,children:(0,l.jsx)("a",{href:"https://help.openai.com/en/articles/6825453-chatgpt-release-notes",target:"_blank",children:(0,l.jsx)(i.Z,{id:"thread.releaseNotes",defaultMessage:"Release notes"})})}),(0,l.jsx)(s.Z.Item,{icon:o.Pfi,children:(0,l.jsx)("a",{href:"https://openai.com/policies",target:"_blank",onClick:()=>{r.A.logEvent(a.M.clickPrivacyPolicy)},children:(0,l.jsx)(i.Z,{id:"thread.termsAndPolicies",defaultMessage:"Terms & policies"})})})]})}},15972:function(e,t,n){n.d(t,{Xl:function(){return x},yE:function(){return v}});var r=n(82821),a=n(31438),i=n(99976),s=n(61619),o=n(13249),l=n(88667),c=n(34977),u=n.n(c),d=n(92379),f=n(75172),p=n(62984),m=n(11550),h=n(24434),g=n(651);function x(){!0===o.m.getItem(o.F.HasSeenNewChatModal)?u().push("/"):(o.m.setItem(o.F.HasSeenNewChatModal,!0),a.vm.openModal(a.B.NoAuthNewChat))}function v(){return(0,a.EV)(a.B.NoAuthNewChat)?(0,g.jsx)(k,{onClose:()=>{a.vm.closeModal(a.B.NoAuthNewChat)}}):null}function k(e){let{onClose:t}=e,n=(0,f.Z)(),a=(0,r.b)();return(0,d.useEffect)(()=>{l.m9.logEvent("chatgpt_new_chat_modal_shown"),i.A.logEvent(s.M.newChatModalShown)},[]),(0,g.jsxs)(h.Z,{isOpen:!0,title:n.formatMessage({id:"NewChatModal.title",defaultMessage:"New chat?"}),type:"success",onClose:t,children:[(0,g.jsx)("p",{className:"mb-6",children:(0,g.jsx)(p.Z,{id:"gV6y+5",defaultMessage:"Your current chat will no longer be accessible. <signup>Sign up</signup> or <login>log in</login> to save chats.",values:{signup:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=a({authType:"signup"});l.m9.logEvent("chatgpt_new_chat_modal_sign_up_link_clicked"),i.A.logSignUpButtonClicked({location:"New chat modal",provider:t})},children:e}),login:e=>(0,g.jsx)("a",{href:"#",className:"text-token-text-primary underline",onClick:e=>{e.preventDefault();let t=a({authType:"login"});l.m9.logEvent("chatgpt_new_chat_modal_log_in_link_clicked"),i.A.logLogInButtonClicked({location:"New chat modal",provider:t})},children:e})}})}),(0,g.jsxs)("div",{className:"flex flex-row justify-end space-x-2",children:[(0,g.jsx)(m.z,{onClick:()=>{l.m9.logEvent("chatgpt_new_chat_modal_cancel_button_clicked"),i.A.logEvent(s.M.newChatModalCancelButtonClicked),t()},color:"secondary",children:(0,g.jsx)(p.Z,{id:"NewChatModal.cancel",defaultMessage:"Cancel"})}),(0,g.jsx)(m.z,{onClick:()=>{l.m9.logEvent("chatgpt_new_chat_modal_new_chat_button_clicked"),i.A.logNewChatButtonClicked({location:"New Chat Modal New Chat Button"}),u().push("/"),t()},children:(0,g.jsx)(p.Z,{id:"NewChatModal.confirm",defaultMessage:"New chat"})})]})]})}},24907:function(e,t,n){n.d(t,{g:function(){return l},h:function(){return c}});var r=n(60682),a=n(67437),i=n(88667),s=n(45120);function o(){return(0,s.fW)("437245079").value}function l(){let e=o(),t=(0,a.Hb)(),n=(0,i.xb)("1908072088").config.value,{eligible:s,isLoading:l}=(0,r.qg)(r.pm.AG8PqS2q);return{eligible:s&&e&&t&&!0===n.blocking_modal,singleButtonVariant:!0===n.single_button_variant,isLoading:l}}function c(){let e=o(),t=(0,a.Hb)(),n=(0,i.xb)("1908072088").config.value,{eligible:s,isLoading:l}=(0,r.qg)(r.pm.AG8PqS2q);return{eligible:s&&e&&t&&n.dropdown_tooltip,isLoading:l}}},91496:function(e,t,n){n.d(t,{F:function(){return s}});var r=n(12622),a=n(30474),i=n(34977);function s(){var e,t,n;let s=(0,i.useRouter)(),o=(null!==(e=(0,a.L)(()=>s.asPath))&&void 0!==e?e:"").split("#"),l=null!==(n=null==(t=o[1])?void 0:t.startsWith("settings"))&&void 0!==n&&n,c=l?o[1].split("/")[1]:void 0;return{openSettings:e=>{let t=s.asPath.split("#");s.replace(t[0]+"#"+(e?"settings/".concat(e):"settings"))},closeSettings:()=>{s.replace(o[0])},isOpen:l,currentTab:Object.values(r.u5).includes(c)?c:r.u5.General}}},12622:function(e,t,n){n.d(t,{ZR:function(){return k},a7:function(){return v},aG:function(){return x},c0:function(){return w},ls:function(){return y},u5:function(){return g},wy:function(){return b},yk:function(){return j}});var r,a,i=n(2346),s=n(15913),o=n(30757),l=n(19841),c=n(15478),u=n(11550),d=n(38838),f=n(97537),p=n(16779),m=n(30853),h=n(651);let g=((r={}).General="General",r.BetaFeatures="BetaFeatures",r.DataControls="DataControls",r.Personalization="Personalization",r.BuilderProfile="BuilderProfile",r.ConnectorSettings="ConnectorSettings",r.Speech="Speech",r.Security="Security",r);function x(e){let{value:t,icon:n,label:r}=e,a=(0,s.w$)();return(0,h.jsxs)(o.xz,{className:(0,l.default)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary",{"flex-1 justify-center":!a}),value:t,children:[n,(0,h.jsx)("div",{className:a?"text-left":"truncate",children:r})]})}function v(e){let{value:t,children:n}=e;return(0,h.jsx)(o.VY,{className:"max-h-[calc(100vh-150px)] w-full overflow-y-auto md:min-h-[380px] ",value:t,children:(0,h.jsx)("div",{className:"flex flex-col gap-3 px-4 pb-1 text-sm text-token-text-primary sm:px-6 sm:pb-2 md:ps-0 md:pt-5",children:n})})}function k(e){let{children:t}=e;return(0,h.jsx)("div",{className:"border-b border-token-border-light pb-3 last-of-type:border-b-0",children:t})}let j=c.Z.div(a||(a=(0,i.Z)(["text-xs text-token-text-secondary pr-12 mt-3"])));function b(e){let{label:t,disabled:n,enabled:r,onChange:a,description:i,toggleTooltip:s,isLoading:o=!1}=e,l=(0,h.jsx)(p.Z,{disabled:n,enabled:r,onChange:a,label:t,withLockIcon:n,size:"normal"});return null!=s&&(l=(0,h.jsx)(m.u,{label:s,side:"top",sideOffset:4,children:l})),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsx)("div",{children:t}),o?(0,h.jsx)(f.Z,{}):l]}),null!=i&&(0,h.jsx)(j,{children:i})]})}function y(e){let{color:t="secondary",disabled:n,label:r,buttonLabel:a,onClick:i,description:s}=e;return(0,h.jsxs)("div",{className:(0,l.default)("flex",s?"items-start":"items-center","justify-between"),children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{children:r}),null!=s&&(0,h.jsx)(j,{children:s})]}),(0,h.jsx)(u.z,{className:"shrink-0",color:t,disabled:!!n,onClick:i,children:a})]})}function w(e){let{onClick:t,label:n,stateLabel:r}=e;return(0,h.jsx)("button",{className:"w-full",onClick:t,children:(0,h.jsxs)("div",{className:"flex items-center justify-between",children:[(0,h.jsx)("div",{children:n}),(0,h.jsxs)("div",{className:"flex items-center text-token-text-secondary",children:[r&&(0,h.jsx)("div",{className:"-mt-0.5 me-1",children:r}),(0,h.jsx)(d.Yf,{className:"icon-sm"})]})]})})}},69539:function(e,t,n){n.d(t,{x:function(){return a}});var r=n(45120);function a(){let{layer:e}=(0,r.AH)("3637408529");return e.get("is_login_primary_button",!1)}},82821:function(e,t,n){n.d(t,{A:function(){return m},b:function(){return h}});var r=n(98601),a=n(58695),i=n(4132),s=n(177),o=n(82826),l=n(88667),c=n(45120),u=n(87161),d=n(34977);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e,t,n){return t?a.Ho.LoginWebAuth0:a.Ho.Auth0}function h(){let e=(0,d.useRouter)(),{value:t}=(0,c.fW)("1198030896"),n=(0,a._0)((0,l.xb)("1977905538").config.value),r=(0,o.L)();return function(){let{authType:o="signup",callbackUrl:l="/",additionalAuthParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=m(e,t,n.forwardToAuthApi),f=r();return(0,u.signIn)(d,{callbackUrl:l},p(p(p(p({prompt:"login",screen_hint:o},(0,i.gk)((0,s.f3)())),(0,a.zC)(n)),f?{use_email_otp:"true"}:{}),c)),d}}},4132:function(e,t,n){n.d(t,{gk:function(){return a}});var r=n(95947);function a(e){return{"ext-statsig-tier":r.uG,"ext-oai-did":e}}},82826:function(e,t,n){n.d(t,{L:function(){return a}});var r=n(45120);function a(){let{layer:e}=(0,r.AH)("1346366956");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=449-2f96341a0d0aba1f.js.map