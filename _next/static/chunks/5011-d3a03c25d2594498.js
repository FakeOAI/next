"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5011],{28605:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(93677);n(92379);var r=n(651);function i(e){let{title:t,description:n,onClose:i,actionButton:l,cancelButton:o}=e;return(0,r.jsx)(a.fC,{open:!0,onOpenChange:e=>{e||i()},children:(0,r.jsxs)(a.h_,{children:[(0,r.jsx)(a.aV,{className:"fixed inset-0 border-token-border-medium radix-state-open:animate-show"}),(0,r.jsxs)(a.VY,{className:"fixed start-1/2 top-1/2 flex max-h-[85vh] w-[90vw] max-w-lg -translate-x-1/2 -translate-y-1/2 flex-col gap-2 rounded-2xl bg-token-main-surface-primary shadow-2xl focus:outline-none radix-state-open:animate-alertShow",onEscapeKeyDown:e=>e.preventDefault(),children:[(0,r.jsx)(a.Dx,{className:"border-b border-token-border-light p-4 text-lg font-semibold md:p-6",children:t}),(0,r.jsxs)("div",{className:"flex flex-col gap-4 p-4 md:p-6",children:[(0,r.jsx)(a.dk,{className:"text-base",children:n}),(0,r.jsxs)("div",{className:"flex justify-end gap-2",children:[o&&(0,r.jsx)(a.$j,{asChild:!0,children:o}),(0,r.jsx)(a.aU,{asChild:!0,children:l})]})]})]})]})})}},6440:function(e,t,n){var a=n(98601),r=n(19841),i=n(92379),l=n(15478),o=n(651);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}t.Z=i.forwardRef(function(e,t){let{name:n,placeholder:a,type:l,list:s,displayName:d,onChange:f,onFocus:m,onBlur:p,value:g,saveOnBlur:b,icon:h,onInputIconClick:x,className:k,autoComplete:y,autoFocus:j,onPressEnter:v,disabled:w,maxLength:P,color:O="tertiary"}=e,{0:M,1:N}=(0,i.useState)(g),C=(0,i.useCallback)(e=>{p?.(e),b&&N(e.target.value)},[p,b]),S=(0,i.useCallback)(e=>{f?.(e),b&&N(e.target.value)},[f,b]),_=(0,i.useCallback)(e=>{"Enter"===e.key&&v&&(e.preventDefault(),v(M))},[v,M]);(0,i.useEffect)(()=>{N(g)},[g]);let T=c(c({},b?{}:{value:g}),b?{value:M}:{});return(0,o.jsxs)("div",{className:(0,r.default)("rounded-md border shadow-none","neutral"===O&&"border-transparent px-3 py-2 focus-within:border-green-500 focus-within:bg-token-main-surface-tertiary focus-within:ring-1 focus-within:ring-transparent hover:bg-token-main-surface-tertiary","tertiary"===O&&"border-token-border-medium px-3 py-2 focus-within:border-token-border-xheavy focus-within:ring-1 focus-within:ring-token-text-secondary","search"===O&&"rounded-xl border-token-border-medium bg-token-main-surface-primary p-4 focus-within:border-token-border-xheavy focus-within:ring-0 dark:border-token-border-medium dark:focus-within:border-token-border-xheavy dark:focus-within:ring-0",k),children:[(0,o.jsx)("label",{htmlFor:n,className:"block text-xs font-semibold text-token-text-primary",children:d}),(0,o.jsxs)("div",{className:(0,r.default)(d&&"mt-1","relative"),children:[(0,o.jsx)("input",c({ref:t,type:l,name:n,id:n,list:s,className:(0,r.default)("block w-full border-0 p-0 placeholder-gray-500 shadow-none outline-none focus-within:shadow-none focus-within:outline-none focus-within:ring-0 focus:border-none focus:ring-0 sm:text-sm",null!=h&&"pr-6","neutral"===O||"search"===O?"bg-transparent":"bg-token-main-surface-primary text-token-text-primary"),placeholder:a,onBlur:C,onFocus:m,onChange:S,onKeyDown:_,autoComplete:y,autoFocus:j,disabled:w,maxLength:P},T)),null!=h&&(0,o.jsx)(u,{onClick:x,children:(0,o.jsx)(h,{className:"icon-sm"})})]})]})});let u=l.Z.button`absolute right-0 top-1/2 -translate-y-1/2`},92609:function(e,t,n){n.d(t,{Z:function(){return p},d:function(){return m}});var a=n(98601),r=n(52088),i=n(92745),l=n(36368),o=n(19841),s=n(651);let c=["href","children"],u=["className","openNewTab","type"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function m(e){let{href:t,children:n}=e,a=(0,r.Z)(e,c),o=(0,i.h9)();return(0,s.jsx)("a",f(f({href:(0,l.k)(t),target:"_blank",rel:o?"noopener noreferrer":"noopener"},a),{},{children:n}))}function p(e){let{className:t,openNewTab:n=!1,type:a="primary"}=e,i=(0,r.Z)(e,u);return(0,s.jsx)("a",f({rel:"noopener",className:(0,o.default)("cursor-pointer font-normal underline","primary"===a&&"text-green-600",t),target:n?"_blank":"_self"},i))}},55356:function(e,t,n){n.d(t,{HC:function(){return i},QI:function(){return r}});var a=n(15478);a.Z.ol`ml-5 list-decimal`;let r=a.Z.ul`ml-3 list-disc`,i=a.Z.li`marker:text-token-text-tertiary text-token-text-primary mb-2`},44087:function(e,t,n){n.d(t,{$3:function(){return d},Ap:function(){return s},CV:function(){return f},GA:function(){return u},Gk:function(){return h},bE:function(){return x},cI:function(){return p},eA:function(){return m},my:function(){return b},qH:function(){return c}});var a=n(99333),r=n(93951),i=n(31498),l=n(92379),o=n(75172);function s(){let e=(0,o.Z)(),t=e.formatMessage(k.adminRoleName),n=e.formatMessage(k.ownerRoleName),r=e.formatMessage(k.standardRoleName);return(0,l.useMemo)(()=>({[a.r3.OWNER]:n,[a.r3.ADMIN]:t,[a.r3.STANDARD]:r}),[n,t,r])}function c(e){let t=(0,o.Z)(),n=e?.isTeam(),a=e?.isEnterprise(),r=e?.isEdu();if(e){if(n)return t.formatMessage(k.teamPlanName);if(a)return t.formatMessage(k.enterprisePlanName);if(r)return t.formatMessage(k.eduPlanName)}return t.formatMessage(k.personalPlanName)}function u(e){return f((0,o.Z)(),e)}function d(){let e=(0,r.t)();return f((0,o.Z)(),e)}function f(e,t){return null==t||t.isPersonalAccount()?e.formatMessage(k.personalWorkspaceTitle):t.data.name??e.formatMessage(k.defaultWorkspaceTitle)}function m(){let e=(0,i.aF)();return e?.email??null}function p(){let e=(0,i.aF)();return e?.name??e?.email??null}function g(){return(0,i.ec)(e=>{let{workspaces:t}=e;return t})}function b(){let{data:e}=(0,r.rk)();return e?.accountItems.filter(e=>!e.isDeactivated())??[]}function h(e){let t=g().find(t=>t.id===e);return t?.role===a.r3.OWNER}function x(e){let t=g().find(t=>t.id===e);return t?.role===a.r3.ADMIN}let k=(0,n(68306).vU)({defaultWorkspaceTitle:{id:"useWorkspaces.defaultWorkspaceTitle",defaultMessage:"Untitled Workspace"},personalWorkspaceTitle:{id:"useWorkspaces.personalWorkspaceTitle",defaultMessage:"Personal account"},personalPlanName:{id:"useWorkspaces.personalPlanName",defaultMessage:"Personal"},enterprisePlanName:{id:"useWorkspaces.enterprisePlanName",defaultMessage:"Enterprise"},eduPlanName:{id:"useWorkspaces.eduPlanName",defaultMessage:"Edu"},teamPlanName:{id:"useWorkspaces.teamPlanName",defaultMessage:"Team"},adminRoleName:{id:"useWorkspaces.adminRoleName",defaultMessage:"Admin"},ownerRoleName:{id:"useWorkspaces.ownerRoleName",defaultMessage:"Owner"},standardRoleName:{id:"useWorkspacews.standardRoleName",defaultMessage:"Member"}})},69338:function(e,t,n){n.d(t,{j:function(){return o}});var a=n(19841),r=n(11550),i=n(30115),l=n(651);let o=e=>{let{onDismiss:t,title:n,content:o,onPrimaryCtaClick:s,primaryCtaText:c,onSecondaryCtaClick:u,secondaryCtaText:d,isElevated:f=!0}=e;return(0,l.jsxs)("div",{className:(0,a.default)("flex w-full items-start gap-4 rounded-2xl border border-token-border-light bg-token-main-surface-primary py-4 pl-5 pr-3 text-sm text-token-text-primary [text-wrap:pretty] dark:border-transparent dark:bg-token-main-surface-secondary md:items-center lg:mx-auto",f&&"shadow-xxs"),children:[(0,l.jsxs)("div",{className:"mt-1.5 flex grow flex-col items-start gap-4 md:mt-0 md:flex-row md:items-center md:justify-between md:gap-8",children:[(0,l.jsxs)("div",{className:"flex max-w-none flex-col",children:[n&&(0,l.jsx)("div",{className:(0,a.default)("font-bold text-token-text-primary"),children:n}),(0,l.jsx)("div",{className:(0,a.default)(n?"text-token-text-secondary":""),children:o})]}),(c||d)&&(0,l.jsxs)("div",{className:"flex shrink-0 gap-2 pb-1 md:pb-0",children:[d&&(0,l.jsx)(r.z,{onClick:u,color:"secondary",className:"shrink-0",children:d}),c&&(0,l.jsx)(r.z,{onClick:s,color:"primary",className:"shrink-0",children:c})]})]}),(0,l.jsx)("div",{className:"flex shrink-0 items-center gap-2",children:!!t&&(0,l.jsx)(i.P,{onClick:t})})]})}},89692:function(e,t,n){n.d(t,{Dr:function(){return S},Jx:function(){return T},f6:function(){return C},gO:function(){return D},im:function(){return _}});var a=n(98601),r=n(16757),i=n(28605),l=n(11550),o=n(92609),s=n(69338),c=n(24907),u=n(60682),d=n(93951),f=n(99976),m=n(61619),p=n(88667),g=n(30474),b=n(34977),h=n(92379),x=n(62984),k=n(75172),y=n(68306),j=n(651);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let P=u.pm.UseSidekick,O=u.pm.SidekickLauncherOnboarding,M="https://persistent.oaistatic.com/sidekick/public/ChatGPT_Desktop_public_latest.dmg",N="download";function C(){let e=(0,d.t)(),t=(0,p.ep)("1696863369").layer.get("has_sidekick_access",!1);return null!=e&&t}function S(){let e=(0,b.useRouter)(),t=((0,g.L)(()=>e.asPath)??"").split("#");return{openModal:()=>{let t=e.asPath.split("#");e.replace(t[0]+"#"+N)},closeModal:()=>{e.replace(t[0])},isOpen:t[1]===N}}function _(e){let{eligible:t,isLoading:n}=(0,c.g)(),a=C(),{eligible:i,isLoading:l}=(0,u.qg)(P),{eligible:o,isLoading:s}=(0,u.qg)(O);return{eligible:!(t||!i||!o||!a||e.conversationMode?.kind!==r.OL.PrimaryAssistant)&&p.m9.getLayerValue({layerName:"1696863369",key:"show_nux_banner",defaultValue:!1}),isLoading:n||s||l}}function T(e){let{onClose:t}=e;(0,h.useEffect)(()=>{f.A.logEvent(m.M.sidekickAnnouncementShown),p.m9.logEvent("chatgpt_sidekick_announcement_shown")},[]);let{markAsViewed:n}=(0,u.qg)(P),a=(0,h.useCallback)(()=>{n(),f.A.logEvent(m.M.sidekickAnnouncementDismissed),p.m9.logEvent("chatgpt_sidekick_announcement_closed"),t&&t()},[n,t]),r={downloadUrl:M,markAsDownloaded:(0,h.useCallback)(()=>{f.A.logEvent(m.M.sidekickAnnouncementLinkClicked),p.m9.logEvent("chatgpt_sidekick_announcement_download_clicked"),n(),t&&t()},[n,t]),markAsViewed:a,isSidekickAvailable:C()};return(0,j.jsx)(B,w({},r))}function D(){let{closeModal:e,isOpen:t}=S(),n=C(),a=(0,h.useMemo)(()=>({isDesktopAppAvailable:n}),[n]);return((0,h.useEffect)(()=>{t&&(f.A.logEvent(m.M.sidekickDownloadModalShown,w({},a)),p.m9.logEvent("chatgpt_sidekick_modal_shown"))},[a,t]),t)?(0,j.jsx)(A,{downloadUrl:M,markAsDownloaded:()=>{f.A.logEvent(m.M.sidekickDownloadModalDownloaded,a),p.m9.logEvent("chatgpt_sidekick_modal_download_clicked"),e()},markAsViewed:()=>{f.A.logEvent(m.M.sidekickDownloadModalClosed,a),p.m9.logEvent("chatgpt_sidekick_modal_closed"),e()},isSidekickAvailable:n}):null}function A(e){let{downloadUrl:t,markAsDownloaded:n,markAsViewed:a,isSidekickAvailable:r}=e,s=r?E.modalTitleEligible:E.modalTitleNotEligible,c=(0,j.jsx)(x.Z,w({},s)),u=(0,j.jsx)(x.Z,w({},E.modalContent)),d=r?E.disclaimer:E.comingSoonDisclaimer,f=(0,j.jsx)(x.Z,w(w({},d),{},{values:{learnMoreLink:e=>(0,j.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),m=(0,j.jsxs)("div",{children:[(0,j.jsx)("div",{children:u}),(0,j.jsx)("div",{className:"mt-2",children:f})]}),p=(0,j.jsx)(l.z,{as:"link",to:t,color:"primary",onClick:n,openNewTab:!0,children:(0,j.jsx)(x.Z,w({},E.download))}),g=(0,j.jsx)(l.z,{color:"secondary",onClick:a,children:(0,j.jsx)(x.Z,w({},E.close))}),b=r?p:g,h=r?g:void 0;return(0,j.jsx)(i.Z,{onClose:a,title:c,description:m,actionButton:b,cancelButton:h})}function B(e){let{markAsDownloaded:t,markAsViewed:n}=e,a=(0,k.Z)(),r=(0,h.useCallback)(()=>{window.open(M,"_blank"),t()},[t]),i=(0,j.jsx)(x.Z,w({},d.t()?.isPlus()?E.bannerTitleMentioningPlus:E.bannerTitleNotMentioningPlus)),l=(0,j.jsx)(x.Z,w({},E.bannerContent)),c=(0,j.jsx)(x.Z,w(w({},E.disclaimer),{},{values:{learnMoreLink:e=>(0,j.jsx)(o.Z,{openNewTab:!0,href:"https://help.openai.com/en/articles/9275200",children:e})}})),u=(0,j.jsxs)("div",{className:"flex-grow",children:[(0,j.jsx)("div",{className:"mb-0.5 font-semibold",children:i}),(0,j.jsxs)("span",{className:"text-token-text-secondary",children:[l," ",c]})]});return(0,j.jsx)(s.j,{onPrimaryCtaClick:r,primaryCtaText:a.formatMessage(E.download),onDismiss:n,content:u})}let E=(0,y.vU)({bannerTitleNotMentioningPlus:{id:"SidekickOnboarding.bannerTitleEnterprisey_2",defaultMessage:"ChatGPT is available for macOS 14+ with Apple Silicon"},bannerTitleMentioningPlus:{id:"SidekickOnboarding.bannerTitleMentioningPlus",defaultMessage:"ChatGPT is now available for macOS—Plus users get early access"},modalTitleEligible:{id:"SidekickOnboarding.modalTitleEligible",defaultMessage:"The ChatGPT app is now available for macOS"},modalTitleNotEligible:{id:"SidekickOnboarding.modalTitleNotEligible",defaultMessage:"The ChatGPT macOS desktop app is coming soon"},modalContent:{id:"SidekickOnboarding.modal_content_eligible",defaultMessage:"Quickly access ChatGPT from anywhere on your computer with a shortcut: Option + Space. Share screenshots, upload files and photos, have voice conversations, and search through past conversations."},bannerContent:{id:"SidekickOnboarding.banner_content_3",defaultMessage:"Get faster access to ChatGPT with the Option + Space shortcut and the floating companion window."},disclaimer:{id:"SidekickOnboarding.disclaimer_3",defaultMessage:"<learnMoreLink>Learn more</learnMoreLink>."},comingSoonDisclaimer:{id:"SidekickOnboarding.coming_soon_disclaimer",defaultMessage:"The app will be available over the next couple of weeks."},download:{id:"SidekickOnboarding.download",defaultMessage:"Download"},close:{id:"SidekickOnboarding.close",defaultMessage:"Close"}})},71829:function(e,t,n){let a;n.d(t,{IB:function(){return o},M4:function(){return l},MG:function(){return i}});var r=n(25025);function i(e,t){a=t,e({hash:r.D$})}function l(e){e(window.location.pathname+window.location.search)}function o(){let e=a;return a=void 0,e}},25025:function(e,t,n){n.d(t,{B2:function(){return r},D$:function(){return s},D7:function(){return u},Ks:function(){return o},Zr:function(){return l},_4:function(){return c},m1:function(){return i},ti:function(){return a}});let a="https://help.openai.com/en/collections/3943089-billing",r="https://openai.com/enterprise",i="https://help.openai.com/en/articles/7905690-how-do-i-cancel-my-apple-subscription-for-chatgpt-plus-in-the-chatgpt-ios-app",l="https://help.openai.com/en/articles/8258076-how-to-cancel-my-plus-subscription-in-the-chatgpt-android-app",o="https://help.openai.com/en/articles/7102672-how-can-i-access-gpt-4",s="pricing",c={WEBAPP:"chatgpt_web",MOBILE_IOS:"chatgpt_mobile_ios",MOBILE_ANDROID:"chatgpt_mobile_android",GRANTED:"chatgpt_gratis_recepient",NOT_PURCHASED:"chatgpt_not_purchased"},u={ALREADY_PAID:"User is already paid"}},50454:function(e,t,n){n.d(t,{IW:function(){return v},Re:function(){return y},Y6:function(){return j},ZY:function(){return w},c0:function(){return M},sY:function(){return P},sr:function(){return N}});var a,r=n(98601),i=n(28146),l=n(55356),o=n(43991),s=n(95182),c=n.n(s),u=n(62984),d=n(68306),f=n(15478),m=n(651);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach(function(t){(0,r.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}let b=f.Z.div`p-6`,h=f.Z.label`font-semibold text-base cursor-pointer`,x=f.Z.div`flex flex-col gap-3 text-token-text-secondary text-sm mt-3`,k=f.Z.p`text-token-text-primary`,y=f.Z.s`text-token-text-tertiary`,j=2;function v(e){let{billingType:t,name:n,billingFeatures:a,cost:r,costStructure:s}=e;return(0,m.jsxs)(b,{children:[(0,m.jsxs)("div",{className:"flex items-center gap-4",children:[(0,m.jsx)(o.ck,{value:t,id:t,className:"h-5 w-5 cursor-pointer rounded-full border border-token-border-medium bg-token-main-surface-primary outline-none hover:bg-token-main-surface-secondary radix-state-checked:border-green-500 radix-state-checked:bg-green-500",children:(0,m.jsx)(o.z$,{className:"flex items-center justify-center",children:(0,m.jsx)(i.$As,{className:"mt-0.5 h-[14px] w-[14px] stroke-[3] text-white"})})}),(0,m.jsx)(h,{htmlFor:t,children:(0,m.jsx)(u.Z,g({},n))})]}),(0,m.jsxs)(x,{children:[(0,m.jsxs)("div",{children:[(0,m.jsx)(k,{children:(0,m.jsx)(u.Z,g(g({},r),{},{values:{s:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,m.jsx)(y,{children:t})}}}))}),(0,m.jsx)("p",{children:(0,m.jsx)(u.Z,g({},s))})]}),(0,m.jsx)(l.QI,{children:a.map(e=>(0,m.jsx)(l.HC,{children:(0,m.jsx)(u.Z,g({},e))},e.id))})]})]})}function w(e){let{numSeats:t,minSeats:n,setNumSeats:a}=e;return(0,m.jsxs)("div",{className:"mb-3 flex items-center",children:[(0,m.jsx)("button",{disabled:t<=n,onClick:e=>{let t=e.shiftKey;a(e=>c()(e-=t?10:1,n,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,m.jsx)(i.V_R,{className:"icon-sm"})}),(0,m.jsx)("input",{type:"number",min:n,max:999,name:"seats",value:t,onChange:e=>{a(parseInt(e.target.value))},onBlur:()=>{t<n&&a(n),t>999&&a(999),t||a(n)},className:"m-0 h-9 appearance-none rounded border border-gray-200 px-2 py-0 text-center text-sm text-gray-800 shadow-none outline-none ring-transparent focus:border-green-500 focus:ring-green-500 dark:border-gray-700"}),(0,m.jsx)("button",{disabled:t>=999,onClick:e=>{let t=e.shiftKey;a(e=>c()(e+=t?10:1,n,999))},className:"px-4 py-2 disabled:cursor-not-allowed disabled:text-token-text-secondary",children:(0,m.jsx)(i.Vz5,{className:"icon-sm"})})]})}let P=(0,d.vU)({flexiblePlanName:{id:"teamBilling.flexiblePlan.name",defaultMessage:"Flexible plan"},flexiblePlanCost:{id:"teamBilling.flexiblePlan.cost",defaultMessage:"USD $30"},flexibleBilledMonthly:{id:"teamBilling.flexiblePlan.billedMonthly",defaultMessage:"Price billed monthly"},flexibleAddRemoveUsers:{id:"teamBilling.flexiblePlan.addRemoveUsers",defaultMessage:"Add or remove users as needed"},flexibleMinBill:{id:"teamBilling.flexiblePlan.minBill",defaultMessage:"The minimum monthly bill is for 2 users, USD $60/month"},seatsTitle:{id:"teamBilling.seatsTitle",defaultMessage:"Seats"},summaryTitle:{id:"teamBilling.summaryTitle",defaultMessage:"Summary"},annualPlanName:{id:"teamBilling.annualPlan.name",defaultMessage:"Annual plan"},annualPlanCost:{id:"teamBilling.annualPlan.cost",defaultMessage:"USD $25 <s>$30</s>"},annualBilledAnnually:{id:"teamBilling.annualPlan.billedAnnually",defaultMessage:"Annual price billed annually"},annualAddUsersWithRenewal:{id:"teamBilling.annualPlan.addUsersWithRenewal",defaultMessage:"Add users as needed, remove users only when you renew the contract"},annualMinBill:{id:"teamBilling.annualPlan.minBill",defaultMessage:"The minimum bill is for 2 users, USD $50/month billed annually"},teamsCostStructure:{id:"teamBilling.teamsCostStructure",defaultMessage:"per person/month"},annualSavingsPercentage:{id:"teamBilling.annualSavingsPercentage",defaultMessage:"16.7% off"},createWorkspace:{id:"createWorkspace.title",defaultMessage:"Create workspace"},cancel:{id:"createWorkspace.cancel",defaultMessage:"Cancel"},selectTeamPlan:{id:"createWorkspace.selectTeamPlan",defaultMessage:"Select Team Plan"},selectTeamPlanModalTitle:{id:"createWorkspace.selectTeamPlanModalTitle",defaultMessage:"Select your team plan"},continueToBillingButton:{id:"createWorkspace.continueToBillingButton",defaultMessage:"Continue to billing"},paymentErrorWarning:{id:"createWorkspace.paymentErrorWarning",defaultMessage:"The payments page encountered an error. Please try again. If the problem continues, please visit help.openai.com."},selectBillingOption:{id:"createWorkspace.selectBillingOption",defaultMessage:"Select billing options"},annualPlanSelected:{id:"teamBilling.annualPlanSelected",defaultMessage:"ChatGPT Team annual plan"},annualPlanBilled:{id:"teamBilling.annualPlanBilled",defaultMessage:"Price billed annually, starting {date}"},annualPlanTotal:{id:"teamBilling.annualPlanTotal",defaultMessage:"USD ${totalCost} per year total"},flexiblePlanSelected:{id:"teamBilling.flexiblePlanSelected",defaultMessage:"ChatGPT Team flexible plan"},flexiblePlanBilled:{id:"teamBilling.flexiblePlanBilled",defaultMessage:"Price billed monthly, starting {date}"},flexiblePlanTotal:{id:"teamBilling.flexiblePlanTotal",defaultMessage:"USD ${totalCost} per month total"},continueToPricePreview:{id:"teamBilling.continueToPricePreview",defaultMessage:"Continue"},changeEffectDate:{id:"teamBilling.changeEffectDate",defaultMessage:"This change will take effect at your next renewal on {date}"},confirmPageChangeEffectDate:{id:"teamBilling.confirmPageChangeEffectDate",defaultMessage:"Your billing schedule will change from {current_plan} to {new_plan} starting at your next renewal on {date}"},confirmChange:{id:"teamBilling.confirmChange",defaultMessage:"Confirm"}});var O=((a=O||{}).FLEXIBLE="month",a.ANNUAL="year",a);let M={type:O.FLEXIBLE,name:P.flexiblePlanName,cost:P.flexiblePlanCost,costStructure:P.teamsCostStructure,billingFeatures:[P.flexibleBilledMonthly,P.flexibleAddRemoveUsers,P.flexibleMinBill]},N={type:O.ANNUAL,name:P.annualPlanName,cost:P.annualPlanCost,costStructure:P.teamsCostStructure,originalCost:P.flexiblePlanCost,savingsFromOriginal:P.annualSavingsPercentage,billingFeatures:[P.annualBilledAnnually,P.annualAddUsersWithRenewal,P.annualMinBill]}},24907:function(e,t,n){n.d(t,{g:function(){return s},h:function(){return c}});var a=n(60682),r=n(67437),i=n(88667),l=n(45120);function o(){return(0,l.fW)("437245079").value}function s(){let e=o(),t=(0,r.Hb)(),n=(0,i.xb)("1908072088").config.value,{eligible:l,isLoading:s}=(0,a.qg)(a.pm.AG8PqS2q);return{eligible:l&&e&&t&&!0===n.blocking_modal,singleButtonVariant:!0===n.single_button_variant,isLoading:s}}function c(){let e=o(),t=(0,r.Hb)(),n=(0,i.xb)("1908072088").config.value,{eligible:l,isLoading:s}=(0,a.qg)(a.pm.AG8PqS2q);return{eligible:l&&e&&t&&n.dropdown_tooltip,isLoading:s}}},91496:function(e,t,n){n.d(t,{F:function(){return l}});var a=n(12622),r=n(30474),i=n(34977);function l(){var e;let t=(0,i.useRouter)(),n=((0,r.L)(()=>t.asPath)??"").split("#"),l=(e=n[1],e?.startsWith("settings")??!1),o=l?n[1].split("/")[1]:void 0;return{openSettings:e=>{let n=t.asPath.split("#"),a=e?`settings/${e}`:"settings";t.replace(n[0]+"#"+a)},closeSettings:()=>{t.replace(n[0])},isOpen:l,currentTab:Object.values(a.u5).includes(o)?o:a.u5.General}}},12622:function(e,t,n){n.d(t,{ZR:function(){return h},a7:function(){return b},aG:function(){return g},c0:function(){return j},ls:function(){return y},u5:function(){return p},wy:function(){return k},yk:function(){return x}});var a,r=n(15913),i=n(30757),l=n(19841),o=n(15478),s=n(11550),c=n(38838),u=n(97537),d=n(16779),f=n(30853),m=n(651);let p=((a={}).General="General",a.BetaFeatures="BetaFeatures",a.DataControls="DataControls",a.Personalization="Personalization",a.BuilderProfile="BuilderProfile",a.ConnectorSettings="ConnectorSettings",a.Speech="Speech",a.Security="Security",a);function g(e){let{value:t,icon:n,label:a}=e,o=(0,r.w$)();return(0,m.jsxs)(i.xz,{className:(0,l.default)("group flex items-center justify-start gap-2 rounded-md px-2 py-1.5 text-sm text-token-text-primary radix-state-active:bg-token-main-surface-tertiary radix-state-active:text-token-text-primary md:radix-state-active:bg-token-main-surface-secondary",{"flex-1 justify-center":!o}),value:t,children:[n,(0,m.jsx)("div",{className:o?"text-left":"truncate",children:a})]})}function b(e){let{value:t,children:n}=e;return(0,m.jsx)(i.VY,{className:"max-h-[calc(100vh-150px)] w-full overflow-y-auto md:min-h-[380px]",value:t,children:(0,m.jsx)("div",{className:"flex flex-col gap-3 px-4 pb-1 text-sm text-token-text-primary sm:px-6 sm:pb-2 md:ps-0 md:pt-5",children:n})})}function h(e){let{children:t}=e;return(0,m.jsx)("div",{className:"border-b border-token-border-light pb-3 last-of-type:border-b-0",children:t})}let x=o.Z.div`text-xs text-token-text-secondary pr-12 mt-3`;function k(e){let{label:t,disabled:n,enabled:a,onChange:r,description:i,toggleTooltip:l,isLoading:o=!1}=e,s=(0,m.jsx)(d.Z,{disabled:n,enabled:a,onChange:r,label:t,withLockIcon:n,size:"normal"});return null!=l&&(s=(0,m.jsx)(f.u,{label:l,side:"top",sideOffset:4,children:s})),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("div",{children:t}),o?(0,m.jsx)(u.Z,{}):s]}),null!=i&&(0,m.jsx)(x,{children:i})]})}function y(e){let{color:t="secondary",disabled:n,label:a,buttonLabel:r,onClick:i,description:o}=e;return(0,m.jsxs)("div",{className:(0,l.default)("flex",o?"items-start":"items-center","justify-between"),children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("div",{children:a}),null!=o&&(0,m.jsx)(x,{children:o})]}),(0,m.jsx)(s.z,{className:"shrink-0",color:t,disabled:!!n,onClick:i,children:r})]})}function j(e){let{onClick:t,label:n,stateLabel:a}=e;return(0,m.jsx)("button",{className:"w-full",onClick:t,children:(0,m.jsxs)("div",{className:"flex items-center justify-between",children:[(0,m.jsx)("div",{children:n}),(0,m.jsxs)("div",{className:"flex items-center text-token-text-secondary",children:[a&&(0,m.jsx)("div",{className:"-mt-0.5 me-1",children:a}),(0,m.jsx)(c.Yf,{className:"icon-sm"})]})]})})}},82821:function(e,t,n){n.d(t,{A:function(){return p},b:function(){return g}});var a=n(98601),r=n(58695),i=n(4132),l=n(177),o=n(82826),s=n(88667),c=n(45120),u=n(87161),d=n(34977);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach(function(t){(0,a.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function p(e,t,n){return t?r.Ho.LoginWebAuth0:r.Ho.Auth0}function g(){let e=(0,d.useRouter)(),{value:t}=(0,c.fW)("1198030896"),n=(0,r._0)((0,s.xb)("1977905538").config.value),a=(0,o.L)();return function(){let{authType:o="signup",callbackUrl:s="/",additionalAuthParams:c={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=p(e,t,n.forwardToAuthApi),f=a();return(0,u.signIn)(d,{callbackUrl:s},m(m(m(m({prompt:"login",screen_hint:o},(0,i.gk)((0,l.f3)())),(0,r.zC)(n)),f?{use_email_otp:"true"}:{}),c)),d}}},36368:function(e,t,n){n.d(t,{k:function(){return r}});let a=["https:","mailto:","tel:"],r=e=>{let t;if(void 0!==e){try{t=new URL(e,window.location.origin)}catch(e){return}if(!a.includes(t.protocol))return;return t.href}}},66290:function(e,t,n){n.d(t,{Z:function(){return l}});var a=n(34977),r=n.n(a),i=n(92379);function l(){return(0,i.useCallback)(e=>{-1===e?r().back():r().push(e,void 0,{shallow:!0})},[])}},4132:function(e,t,n){n.d(t,{gk:function(){return r}});var a=n(95947);function r(e){return{"ext-statsig-tier":a.uG,"ext-oai-did":e}}},82826:function(e,t,n){n.d(t,{L:function(){return r}});var a=n(45120);function r(){let{layer:e}=(0,a.AH)("1346366956");return()=>e.get("use_email_otp",!1)}}}]);
//# sourceMappingURL=5011-d3a03c25d2594498.js.map