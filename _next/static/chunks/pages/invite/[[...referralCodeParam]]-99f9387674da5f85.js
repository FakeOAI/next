(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2493],{69926:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSP:function(){return J},default:function(){return ee}});var s,r=t(15316),i=t(97410),n=t(72988),l=t(44575),d=t(25968),o=t(84760),c=t(56032),u=t(54031),p=t(99140),f=t(66943),m=t(96785),g=t(7569),v=t(94035),h=t(17958),x=t(90681),A=t(88600),b=t(43612),P=t(45896),y=t(75179),C=t.n(y),F=t(32307),N=t(92379),j=t(75172),M=t(62984),T=t(68306),S=t(15478),I=t(20118),w=t(54189),_=t(9519),D=t(48198),k=t(13300),O=t(92332),U=t(41871),E=t(11952),L=t(35998),R=t(31161),G=t(651);function W(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function Z(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?W(Object(t),!0).forEach(function(a){(0,i.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):W(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}function H(){return(0,G.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:(0,G.jsx)(L.Z,{})})}let B=e=>{let{referralCodeId:a,sessionUser:t,auth0Provider:s,redirectUrl:r}=e,i=(0,j.Z)(),{resolvedTheme:n}=(0,P.F)(),l="dark"===n,d=(0,N.useRef)(null);return(0,N.useEffect)(()=>{x.m9.logEvent("chatgpt_referral_invite_loaded",null!=t&&t.id?"has_user":"user_logged_out",{user_id:null!=t&&t.id?t.id:"_no_user",referral_code_id:a})},[a,null==t?void 0:t.id]),(0,N.useEffect)(()=>{null===d.current&&(d.current=document.body.style.backgroundColor);let e=l?"#00002E":"#FFFFDB";return document.body.style.backgroundColor=e,()=>{null!==d.current&&(document.body.style.backgroundColor=d.current)}},[l]),(0,G.jsxs)("div",{className:"flex min-h-full w-screen flex-col sm:supports-[min-height:100dvh]:min-h-[100dvh] md:grid md:grid-cols-2 lg:grid-cols-[60%_40%] ",children:[(0,G.jsx)(U.O,{}),(0,G.jsxs)("div",{className:"relative flex grow flex-col items-center justify-between bg-white px-5 py-8 text-black dark:bg-black dark:text-white sm:rounded-t-[30px] md:rounded-none md:px-6",children:[(0,G.jsx)("nav",{className:"flex w-full justify-start px-6 pb-8 md:hidden md:px-6 lg:px-8",children:(0,G.jsx)("h1",{"aria-label":i.formatMessage(K.ariaLabel),children:(0,G.jsx)("div",{className:"flex cursor-default items-center text-[20px] font-bold leading-none lg:text-[22px]",children:(0,G.jsx)("div",{children:O.L})})})}),(0,G.jsx)(V,{sessionUser:t,auth0Provider:s,redirectUrl:r,referralCodeId:a}),(0,G.jsxs)("div",{className:"flex flex-col items-center justify-end",children:[(0,G.jsx)("div",{className:"flex text-gray-300",children:(0,G.jsx)(k.nV,{className:"h-[22px] w-auto"})}),(0,G.jsx)("div",{className:" opacity-50",children:(0,G.jsx)(w.VL,{isStorageComplianceEnabled:!1})})]})]})]})},Y=e=>{let{offerDollarValue:a,sessionUser:t,isLoading:s,isLoadingLogin:r,handleClaimInvite:i,handleSignupWarning:n,handleLogin:l}=e,o=(0,d.ec)(d.F_.hasPaidSubscription);return null!=t&&t.id?(0,G.jsx)(_.z,{disabled:s||o,loading:s,color:o?"disabled":"blue",size:"large",fullWidth:!0,onClick:i,children:o?(0,G.jsx)(M.Z,Z({},K.alreadyPaidUserCta)):(0,G.jsx)(M.Z,Z(Z({},K.acceptInviteCtaLoggedIn),{},{values:{dollarValue:a}}))}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("div",{className:"pb-5 text-center text-sm text-token-text-tertiary",children:(0,G.jsx)(M.Z,Z({},K.claimInviteLoginOrSignUp))}),(0,G.jsx)("div",{className:"flex flex-col space-y-4 px-3",children:(0,G.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row",children:[(0,G.jsx)(_.z,{disabled:s,loading:r,fullWidth:!0,onClick:l,children:(0,G.jsx)(M.Z,Z({},I.messages.logIn))}),(0,G.jsx)(_.z,{onClick:n,disabled:s,fullWidth:!0,children:(0,G.jsx)(M.Z,Z({},I.messages.signUp))})]})})]})};function V(e){var a,t;let{sessionUser:s,referralCodeId:r,redirectUrl:i,auth0Provider:P}=e,{0:y,1:T}=(0,N.useState)(!1),{0:S,1:I}=(0,N.useState)(!1),{0:w,1:_}=(0,N.useState)(!1),{0:k,1:O}=(0,N.useState)(!1),U=null!==(a=null==s?void 0:s.id)&&void 0!==a?a:"_no_user",{data:L,isLoading:W,isError:H}=(0,o.a)({queryKey:["referral-invite",r],queryFn:()=>n.Z.getPublicReferralInvite(r)}),B=(0,j.Z)(),V=null==L||null===(t=L.result.invite_metadata)||void 0===t?void 0:t.invite_data,J="$".concat(null==V?void 0:V.referral_trial_dollar_value),ee=null==V?void 0:V.referrer_public_avatar_url,ea=null!=V&&V.referral_trial_duration_months?(null==V?void 0:V.referral_trial_duration_months)>=1?B.formatMessage(K.monthsOfService,{referralTrialDurationMonths:null==V?void 0:V.referral_trial_duration_months}):B.formatMessage(K.daysOfService,{referralTrialDurationDays:null==V?void 0:V.referral_trial_duration_days}):null,et=null==V?void 0:V.referrer_user_name,es=null!=V&&V.referral_trial_duration_months?(null==V?void 0:V.referral_trial_duration_months)>1?B.formatMessage(K.monthsOfBenefit,{referralTrialDurationMonths:null==V?void 0:V.referral_trial_duration_months}):B.formatMessage(K.daysOfBenefit,{referralTrialDurationDays:null==V?void 0:V.referral_trial_duration_days}):null,er=null!=V&&V.referral_trial_duration_months?(null==V?void 0:V.referral_trial_duration_months)>=1?B.formatMessage(K.ctaHeaderMonths,{referralTrialDurationMonths:null==V?void 0:V.referral_trial_duration_months}):B.formatMessage(K.ctaHeaderDays,{referralTrialDurationDays:null==V?void 0:V.referral_trial_duration_days}):null,ei=B.formatMessage(K.dollarValue,{offerDollarValue:J}),en=(0,l.t)(),el=(0,d.ec)(d.F_.workspaceId),ed=(0,F.useRouter)(),{mutateAsync:eo}=(0,c.D)({mutationFn:()=>n.Z.postClaimReferralInvite(r,el||""),onSettled:()=>{_(!1)},onError:async()=>{R.m.danger(B.formatMessage(K.claimReferralError))},onSuccess:()=>{T(!0),ed.push("/invite/accepted?referralCodeId=".concat(r))}}),ec=async()=>{_(!0),x.m9.logEvent("chatgpt_referral_invite_claim",r,{referralCodeId:r,userId:U}),p.A.logEvent(f.M.chatgptReferralInviteClaim,{content:U}),await eo()},eu=(0,h.L)();return((0,N.useEffect)(()=>{H&&(ed.push("/?e=oldi"),g.U.addAction("fetch_error_404",{url:location.href,errorMessage:"Referral code not found"}))},[H,ed]),H)?(0,G.jsx)($,{}):W||null==en&&null!=s&&s.id||y?(0,G.jsx)(q,{}):(0,G.jsx)(G.Fragment,{children:(0,G.jsxs)("div",{className:"relative flex h-full w-full flex-col items-center justify-center",children:[S&&(0,G.jsx)(A.E.div,{initial:{opacity:0,x:10},transition:{delay:1,duration:.1},animate:{x:0,opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,G.jsx)(z,{handleSignup:()=>{_(!0),O(!0),x.m9.logEvent("chatgpt_referral_invite_signup",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteSignup,{content:r}),(0,b.signIn)(P,{callbackUrl:i},Z({prompt:"login",screen_hint:"signup"},(0,u.gk)((0,v.f3)())))},setHasRequestedSignup:I})}),!S&&(0,G.jsx)(A.E.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,G.jsx)("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:er}),(0,G.jsx)(Q,{referrerPublicAvatarUrl:ee,referrerName:et,benefitWithTime:es,receivedPlan:"ChatGPT Plus",dollarValue:ei}),(0,G.jsx)("div",{children:(0,G.jsx)("p",{className:"text-sm",children:(0,G.jsx)(M.Z,Z({},K.benefitPointsHeader))})}),(0,G.jsxs)("div",{className:"space-y-3",children:[(0,G.jsxs)(X,{children:[(0,G.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,G.jsx)(D.$As,{className:"h-4 w-4 text-white"})}),(0,G.jsx)("span",{className:"max-w-full",children:(0,G.jsx)(M.Z,Z({},E.ST.plus.demandAccess))})]}),(0,G.jsxs)(X,{children:[(0,G.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,G.jsx)(D.$As,{className:"h-4 w-4 text-white"})}),(0,G.jsx)("span",{className:"max-w-full",children:(0,G.jsx)(M.Z,Z({},E.ST.plus.responseSpeed))})]}),(0,G.jsxs)(X,{className:"pb-2",children:[(0,G.jsx)("span",{className:"h-5 w-5 rounded-full bg-green-500 p-0.5",children:(0,G.jsx)(D.$As,{className:"h-4 w-4 text-white"})}),(0,G.jsx)("span",{className:"max-w-full",children:(0,G.jsx)(M.Z,Z({},E.ST.plus.modelFeatures))})]})]}),(0,G.jsx)("div",{className:"w-full",children:(0,G.jsx)(Y,{handleClaimInvite:ec,handleSignupWarning:()=>{_(!0),I(!0),x.m9.logEvent("chatgpt_referral_invite_explain_signup",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteExplainSignup,{content:r}),_(!1)},handleLogin:()=>{var e;_(!0),O(!0),x.m9.logEvent("chatgpt_referral_invite_login",r,{referralCodeId:r}),p.A.logEvent(f.M.chatgptReferralInviteLogin,{content:r});let a=null===(e=m.bX.getCookie(m.cn.DeviceId))||void 0===e?void 0:e.toString(),t=eu();(0,b.signIn)(P,Z({callbackUrl:i},a?{device_id:a}:{}),Z(Z({prompt:"login"},(0,u.gk)((0,v.f3)())),t?{use_email_otp:"true"}:{}))},sessionUser:s,offerDollarValue:J,isLoading:w,isLoadingLogin:k})}),(0,G.jsxs)("div",{className:"space-y-1.5 py-1 text-center",children:[(0,G.jsx)("p",{className:"text-xs text-token-text-tertiary",children:(0,G.jsx)(M.Z,Z(Z({},K.ctaFollowUpSummary),{},{values:{monthlyCost:"$20",monthsOfService:ea}}))}),(null==s?void 0:s.id)&&(0,G.jsx)("p",{className:"text-xs text-token-text-tertiary",children:(0,G.jsx)(M.Z,Z(Z({},K.ctaNotice),{},{values:{userEmail:null==s?void 0:s.email,avatar:()=>{var e;return(0,G.jsx)("img",{className:"inline-block h-4 w-4 rounded-full",src:null!==(e=null==s?void 0:s.picture)&&void 0!==e?e:void 0,alt:null==s?void 0:s.name})},email:e=>(0,G.jsx)("span",{className:"font-semibold",children:e}),link:e=>(0,G.jsx)(C(),{className:"underline",href:"/auth/logout",children:e})}}))})]})]})})})]})})}let z=e=>{let{setHasRequestedSignup:a,handleSignup:t}=e;return(0,G.jsxs)("div",{className:"relative mx-auto flex h-full max-w-[372px] flex-col items-center justify-center space-y-4 rounded-t-[30px] bg-white px-5 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[(0,G.jsx)("h2",{className:"text-center text-[20px] leading-[1.2] md:text-[32px] md:leading-8",children:(0,G.jsx)(M.Z,Z({},K.signUpExplainTitle))}),(0,G.jsx)("div",{children:(0,G.jsx)("p",{className:"text-sm",children:(0,G.jsx)(M.Z,Z({},K.signUpExplainDescription))})}),(0,G.jsxs)("div",{className:"flex flex-col gap-4 md:flex-row",children:[(0,G.jsx)(_.z,{fullWidth:!0,onClick:()=>{a(!1)},color:"secondary",children:(0,G.jsx)(M.Z,Z({},K.signUpCtaBack))}),(0,G.jsx)(_.z,{onClick:t,fullWidth:!0,color:"primary",children:(0,G.jsx)(M.Z,Z({},K.signUpCtaProceed))})]})]})},$=()=>(0,G.jsxs)("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:[(0,G.jsx)("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:(0,G.jsx)(H,{})}),(0,G.jsx)(A.E.div,{initial:{opacity:0},transition:{delay:1,duration:.2},animate:{opacity:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,transition:{duration:.2,ease:"easeIn"}},children:(0,G.jsxs)("div",{className:"text-center",children:[(0,G.jsx)("h2",{className:"text-sm font-semibold",children:(0,G.jsx)(M.Z,Z({},K.errorHeader))}),(0,G.jsx)("p",{className:"text-xs font-normal",children:(0,G.jsx)(M.Z,Z(Z({},K.errorDescription),{},{values:{link:e=>(0,G.jsx)("a",{href:"/",className:"underline",children:e})}}))})]})})]}),q=()=>(0,G.jsx)("div",{className:"relative mx-auto flex h-full max-w-[480px] flex-col items-center justify-center space-y-3 rounded-t-[30px] bg-white px-5 py-8 text-black dark:bg-black dark:text-white md:rounded-none md:px-6",children:(0,G.jsx)("div",{className:"relative flex h-8 w-8 items-center justify-center opacity-70",children:(0,G.jsx)(H,{})})}),X=S.Z.div(s||(s=(0,r.Z)(["gap-2 flex flex-row justify-start text-sm items-start"]))),Q=e=>{let{referrerPublicAvatarUrl:a,referrerName:t,benefitWithTime:s,receivedPlan:r,dollarValue:i}=e;return(0,G.jsxs)("div",{className:"flex w-full items-center",children:[(0,G.jsx)("div",{className:"flex-shrink-0 pt-0.5",children:(0,G.jsx)("img",{className:"h-12 w-12 rounded-full bg-yellow-400",src:a,alt:t})}),(0,G.jsx)("div",{className:"ml-3 w-0 flex-1",children:(0,G.jsx)("p",{className:"text-sm text-token-text-primary",children:(0,G.jsx)(M.Z,Z(Z({},K.socialProofText),{},{values:{referrerName:t,benefitWithTime:s,receivedPlan:r,dollarValue:i,highlight:e=>(0,G.jsx)("span",{className:"rounded-sm bg-green-200 px-0.5 dark:bg-orange-500",children:e})}}))})})]})},K=(0,T.vU)({claimReferralError:{id:"ReferralInvite.claimReferralError",defaultMessage:"There was an issue."},claimInviteLoginOrSignUp:{id:"ReferralInvite.claimInviteLoginOrSignUp",defaultMessage:"You can claim this invite after you log in or sign up."},ctaNotice:{id:"ReferralInvite.ctaNotice",defaultMessage:"Claiming referral with <avatar></avatar> <email>{userEmail}</email>. <link>Not you?</link>"},ctaHeaderMonths:{id:"ReferralInvite.ctaHeaderMonths",defaultMessage:"Claim your {referralTrialDurationMonths, plural, one {one month} other {# months}} of ChatGPT Plus"},ctaHeaderDays:{id:"ReferralInvite.ctaHeaderDays",defaultMessage:"Claim your {referralTrialDurationDays, plural, one {one day} other {# days}} of ChatGPT Plus"},dollarValue:{id:"ReferralInvite.dollarValue",defaultMessage:"(a {offerDollarValue} value)"},monthsOfService:{id:"ReferralInvite.monthsOfService",defaultMessage:"{referralTrialDurationMonths, plural, one {# month} other {# months}}"},daysOfService:{id:"ReferralInvite.daysOfService",defaultMessage:"{referralTrialDurationDays, plural, one {# day} other {# days}}"},monthsOfBenefit:{id:"ReferralInvite.monthsOfBenefit",defaultMessage:"{referralTrialDurationMonths, plural, one {free month} other {# free months}}"},daysOfBenefit:{id:"ReferralInvite.daysOfBenefit",defaultMessage:"{referralTrialDurationDays, plural, one {# free day} other {# free days}}"},ariaLabel:{id:"ReferralInvite.ariaLabel",defaultMessage:"ChatGPT by OpenAI"},socialProofText:{id:"ReferralInvite.socialProofText",defaultMessage:"{referrerName} sent you <highlight>{benefitWithTime}</highlight> of {receivedPlan} {dollarValue}"},welcome:{id:"ReferralInvite.welcome",defaultMessage:"Welcome to ChatGPT"},benefitPointsHeader:{id:"ReferralInvite.benefitPointsHeader",defaultMessage:"ChatGPT Plus offers subscribers premium access to OpenAI's conversational AI, which includes:"},acceptInviteCtaLoggedOut:{id:"ReferralInvite.acceptInviteCtaLoggedOut",defaultMessage:"Get started"},acceptInviteCtaLoggedIn:{id:"ReferralInvite.acceptInviteCtaLoggedIn",defaultMessage:"Claim invite"},alreadyPaidUserCta:{id:"ReferralInvite.alreadyPaidUserCta",defaultMessage:"ChatGPT Plus subscription found"},ctaFollowUpSummary:{id:"ReferralInvite.ctaFollowUpSummary",defaultMessage:"{monthsOfService} free, then {monthlyCost}/month"},referralCodeContent:{id:"ReferralInvite.referralCodeContent",defaultMessage:"Referral code: {codeToken}"},errorHeader:{id:"ReferralInvite.errorHeader",defaultMessage:"Invite error"},errorDescription:{id:"ReferralInvite.errorDescription",defaultMessage:"You will be redirected, or <link>click here.</link>"},loadingHeader:{id:"ReferralInvite.loadingHeader",defaultMessage:"Invite loading"},loadingDescription:{id:"ReferralInvite.loadingDescription",defaultMessage:"Your page will be loaded, or <link>go home by clicking here.</link>"},signUpExplainTitle:{id:"ReferralInvite.signUpExplainTitle",defaultMessage:"Almost done!"},signUpExplainDescription:{id:"ReferralInvite.signUpExplainDescription",defaultMessage:"Once you’ve finished signing up, return to this page to claim your invite."},signUpCtaProceed:{id:"ReferralInvite.signUpCtaProceed",defaultMessage:"Proceed"},signUpCtaBack:{id:"ReferralInvite.signUpCtaBack",defaultMessage:"Go back"}});var J=!0;function ee(e){let{redirectUrl:a,sessionUser:t,auth0Provider:s,referralCodeId:r}=e;return(0,G.jsx)(B,{sessionUser:t,redirectUrl:a,referralCodeId:r,auth0Provider:s})}},11952:function(e,a,t){"use strict";t.d(a,{Ek:function(){return b},ST:function(){return x},_H:function(){return A}});var s,r=t(97410),i=t(20737),n=t(19698);function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,s)}return t}function d(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach(function(a){(0,r.Z)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}let o=(0,t(68306).vU)({freeName:{id:"pricingPlanConstants.free.name",defaultMessage:"Free"},freeCTA:{id:"pricingPlanConstants.free.callToAction",defaultMessage:"Your current plan"},freeForLine:{id:"pricingPlanConstants.free.freePlanForLine",defaultMessage:"For people just getting started with ChatGPT"},freeCost:{id:"pricingPlanConstants.free.costInDollars",defaultMessage:"USD $0/month"},freeAccess:{id:"pricingPlanConstants.free.demandAccess",defaultMessage:"Access to our GPT-3.5 model"},freeSpeed:{id:"pricingPlanConstants.free.responseSpeed",defaultMessage:"Standard response speed"},freeFeatures:{id:"pricingPlanConstants.free.modelFeatures",defaultMessage:"Regular model updates"},freeAdvertisedFeatures0:{id:"pricingPlanConstants.free.freeAdvertisedFeatures0",defaultMessage:"Unlimited messages, interactions, and history"},freeAdvertisedFeatures1:{id:"pricingPlanConstants.free.freeAdvertisedFeatures1",defaultMessage:"Access to our GPT-3.5 model"},freeAdvertisedFeatures2:{id:"pricingPlanConstants.free.freeAdvertisedFeatures2",defaultMessage:"Access on Web, iOS, and Android"},freeAdvertisedFeaturesNeptune0:{id:"ecdHlW",defaultMessage:"Assistance with writing, problem solving and more"},freeAdvertisedFeaturesNeptune1:{id:"gY4yrX",defaultMessage:"Access to GPT-3.5"},freeAdvertisedFeaturesNeptune2:{id:"izTv5G",defaultMessage:"Limited access to {modelName}",modelName:!0},freeAdvertisedFeaturesNeptune3:{id:"jXs92m",defaultMessage:"Limited access to advanced data analysis, file uploads, vision, web browsing, and custom GPTs"},basicModelAccess:{id:"nbg0DW",defaultMessage:"Access to GPT-4o mini"},plusName:{id:"pricingPlanConstants.plus.name",defaultMessage:"Plus"},plusForLine:{id:"pricingPlanConstants.plus.forLine",defaultMessage:"Everything in Free, and:"},plusActive:{id:"pricingPlanConstants.plus.callToAction.active",defaultMessage:"Your current plan"},plusInactive:{id:"pricingPlanConstants.plus.callToAction.inactivePayment",defaultMessage:"Upgrade to Plus"},plusCost:{id:"pricingPlanConstants.plus.costInDollars",defaultMessage:"USD $20/month"},plusYearlyCost:{id:"pricingPlanConstants.plusYearly.costInDollars",defaultMessage:"USD $16.67/month"},plusYearlyCostSubtitle:{id:"pricingPlanConstants.plusYearly.costInDollarsSubtitle",defaultMessage:"USD $199.99/year"},plusAccess:{id:"pricingPlanConstants.plus.demandAccess",defaultMessage:"Access to GPT-4, our most capable model"},plusSpeed:{id:"pricingPlanConstants.plus.responseSpeed",defaultMessage:"Faster response speed"},plusFeatures:{id:"pricingPlanConstants.plus.modelFeatures",defaultMessage:"Access to beta features like browsing, plugins, and advanced data analysis"},plusAdvertisedFeatures0:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures0",defaultMessage:"Access to GPT-4, our most capable model"},plusAdvertisedFeatures1:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures1",defaultMessage:"Browse, create, and use GPTs"},plusAdvertisedFeatures2:{id:"pricingPlanConstants.plus.plusAdvertisedFeatures2",defaultMessage:"Access to additional tools like DALL\xb7E, Browsing, Advanced Data Analysis and more"},plusAdvertisedFeaturesNeptune0:{id:"azP8zT",defaultMessage:"Access to GPT-4, {modelName}, GPT-3.5",modelName:!0},plusAdvertisedFeaturesNeptune1:{id:"pzi1cv",defaultMessage:"Up to 5x more messages for {modelName}",modelName:!0},plusAdvertisedFeaturesNeptune2:{id:"rqeQB6",defaultMessage:"Access to advanced data analysis, file uploads, vision, and web browsing"},plusAdvertisedFeaturesNeptune3:{id:"QnU/tR",defaultMessage:"DALL\xb7E image generation"},plusAdvertisedFeaturesNeptune4:{id:"aIMZgQ",defaultMessage:"Create and use custom GPTs"},plusAdvertisedFeaturesNeptune5:{id:"qWNfMZ",defaultMessage:"Early access to new features"},plusAdvertisedFeaturesChive0:{id:"ycUxUR",defaultMessage:"Access to GPT-4o, GPT-4o mini, GPT-4"},manageSubscriptionWeb:{id:"pricingPlanConstants.manageSubscriptionWeb.callToAction",defaultMessage:"Manage my subscription"},manageSubscriptionIos:{id:"pricingPlanConstants.manageSubscriptionIos.callToAction",defaultMessage:"Manage my subscription in the ChatGPT iOS app"},manageSubscriptionAndroid:{id:"pricingPlanConstants.manageSubscriptionAndroid.callToAction",defaultMessage:"Manage my subscription in the ChatGPT Android app"},cancelSubscriptionWeb:{id:"pricingPlanConstants.cancelSubscriptionWeb.callToAction",defaultMessage:"Cancel my subscription"},cancelSubscriptionIos:{id:"pricingPlanConstants.cancelSubscriptionIos.callToAction",defaultMessage:"Cancel my subscription in the ChatGPT iOS app"},cancelSubscriptionAndroid:{id:"pricingPlanConstants.cancelSubscriptionAndroid.callToAction",defaultMessage:"Cancel my subscription in the ChatGPT Android app"},getHelp:{id:"pricingPlanConstants.getHelp.callToAction",defaultMessage:"I need help with a billing issue"},business:{id:"pricingPlanConstants.business.callToAction",defaultMessage:"Buy for my team"},teamPlanName:{id:"pricingPlanConstants.teams.teamPlanName",defaultMessage:"Team"},teamPlanInactive:{id:"pricingPlanConstants.teams.teamPlanInactive",defaultMessage:"Upgrade to Team"},teamPlanActive:{id:"pricingPlanConstants.teams.teamPlanActive",defaultMessage:"Your current plan"},teamPlanCreate:{id:"pricingPlanConstants.teams.teamPlanCreate",defaultMessage:"Add Team workspace"},teamPlanForLine:{id:"pricingPlanConstants.teams.teamPlanForLine",defaultMessage:"Everything in Plus, and:"},teamPlanForLineNeptune:{id:"3bMOBg",defaultMessage:"Everything in Plus, and:"},teamPlanCost:{id:"pricingPlanConstants.teams.teamPlanSubTitle",defaultMessage:"USD $25 per person/month*"},teamPlanSpeed:{id:"pricingPlanConstants.teams.teamPlanUsageRates",defaultMessage:"Unlimited high-speed GPT-4"},teamPlanContext:{id:"pricingPlanConstants.teams.teamPlanContext",defaultMessage:"4x longer context lets you work with larger material"},teamsAdvertisedFeatures0:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures0",defaultMessage:"Higher message caps on GPT-4 and tools like DALL\xb7E, Browsing, Advanced Data Analysis, and more"},teamsAdvertisedFeatures1:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures1",defaultMessage:"Create and share GPTs with your workspace"},teamsAdvertisedFeatures2:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures2",defaultMessage:"Admin console for workspace management"},teamsAdvertisedFeatures3:{id:"pricingPlanConstants.teams.teamsAdvertisedFeatures3",defaultMessage:"Team data excluded from training by default. <link>Learn more</link>",link:"https://openai.com/enterprise-privacy"},teamsAdvertisedFeaturesNeptune0:{id:"CDEs0b",defaultMessage:"Higher limits for GPT-4, {modelName}, and tools like DALL\xb7E image generation, advanced data analysis, web browsing, and more",modelName:!0},teamsAdvertisedFeaturesNeptune1:{id:"hTiCjR",defaultMessage:"Create and share GPTs with your workspace"},teamsAdvertisedFeaturesNeptune2:{id:"VM2cal",defaultMessage:"Admin console for workspace management"},teamsAdvertisedFeaturesNeptune3:{id:"EQPMpv",defaultMessage:"Team data excluded from training by default. <article>Learn more</article>",article:"https://openai.com/enterprise-privacy"},teamPricingDisclaimer:{id:"pricingPlanConstants.teams.teamPricingDisclaimer",defaultMessage:"* Price billed annually, minimum 2 users"},highDemandDisabledText:{id:"pricingPlanConstants.highDemandDisabledText",defaultMessage:"Due to high demand, we've temporarily paused upgrades."},signUpForWaitlistActive:{id:"pricingPlanConstants.signUpForWaitlistActive",defaultMessage:"Sign up for waitlist"},signUpForWaitlistInactive:{id:"pricingPlanConstants.signUpForWaitlistInactive",defaultMessage:"Signed up for waitlist"},enterpriseName:{id:"pricingPlanConstants.enterprise.name",defaultMessage:"Enterprise"},enterpriseCTA:{id:"pricingPlanConstants.enterprise.callToAction",defaultMessage:"Contact sales"},enterpriseCost:{id:"pricingPlanConstants.enterprise.costInDollars",defaultMessage:"Tailored pricing for your business"}}),c={name:o.plusName,callToAction:{active:o.plusActive,create:o.plusActive,inactive:o.plusInactive},forLine:o.plusForLine,costInDollars:o.plusCost,demandAccess:o.plusAccess,responseSpeed:o.plusSpeed,modelFeatures:o.plusFeatures,advertisedFeatures:[o.plusAdvertisedFeatures0,o.plusAdvertisedFeatures1,o.plusAdvertisedFeatures2]},u={name:o.freeName,callToAction:{active:o.freeCTA,create:o.freeCTA,inactive:o.freeCTA},forLine:void 0,costInDollars:o.freeCost,demandAccess:o.freeAccess,responseSpeed:o.freeSpeed,modelFeatures:o.freeFeatures,advertisedFeatures:[o.freeAdvertisedFeaturesNeptune0,o.freeAdvertisedFeaturesNeptune1,o.freeAdvertisedFeaturesNeptune2,o.freeAdvertisedFeaturesNeptune3]},p=d(d({},u),{},{demandAccess:o.basicModelAccess,advertisedFeatures:[o.freeAdvertisedFeaturesNeptune0,o.basicModelAccess,o.freeAdvertisedFeaturesNeptune2,o.freeAdvertisedFeaturesNeptune3]}),f={name:o.plusName,callToAction:{active:o.plusActive,create:o.plusActive,inactive:o.plusInactive},forLine:void 0,costInDollars:o.plusCost,demandAccess:o.plusAccess,responseSpeed:o.plusSpeed,modelFeatures:o.plusFeatures,advertisedFeatures:[o.plusAdvertisedFeaturesNeptune5,o.plusAdvertisedFeaturesNeptune0,o.plusAdvertisedFeaturesNeptune1,o.plusAdvertisedFeaturesNeptune2,o.plusAdvertisedFeaturesNeptune3,o.plusAdvertisedFeaturesNeptune4]},m={name:o.plusName,callToAction:{active:o.plusActive,create:o.plusActive,inactive:o.plusInactive},forLine:void 0,costInDollars:o.plusCost,demandAccess:o.plusAccess,responseSpeed:o.plusSpeed,modelFeatures:o.plusFeatures,advertisedFeatures:[o.plusAdvertisedFeaturesNeptune5,o.plusAdvertisedFeaturesNeptune0,o.plusAdvertisedFeaturesNeptune2,o.plusAdvertisedFeaturesNeptune3,o.plusAdvertisedFeaturesNeptune4]},g=d(d({},f),{},{advertisedFeatures:[o.plusAdvertisedFeaturesNeptune5,o.plusAdvertisedFeaturesChive0,o.plusAdvertisedFeaturesNeptune1,o.plusAdvertisedFeaturesNeptune2,o.plusAdvertisedFeaturesNeptune3,o.plusAdvertisedFeaturesNeptune4]}),v=d(d({},m),{},{advertisedFeatures:[o.plusAdvertisedFeaturesNeptune5,o.plusAdvertisedFeaturesChive0,o.plusAdvertisedFeaturesNeptune2,o.plusAdvertisedFeaturesNeptune3,o.plusAdvertisedFeaturesNeptune4]}),h={name:o.teamPlanName,callToAction:{active:o.teamPlanActive,inactive:o.teamPlanInactive,create:o.teamPlanCreate},forLine:o.teamPlanForLineNeptune,costInDollars:o.teamPlanCost,responseSpeed:o.teamPlanSpeed,demandAccess:o.teamPlanSpeed,modelFeatures:o.teamPlanContext,advertisedFeatures:[o.teamsAdvertisedFeaturesNeptune0,o.teamsAdvertisedFeaturesNeptune1,o.teamsAdvertisedFeaturesNeptune2,o.teamsAdvertisedFeaturesNeptune3],disclaimer:o.teamPricingDisclaimer},x={free:{name:o.freeName,callToAction:{active:o.freeCTA,create:o.freeCTA,inactive:o.freeCTA},forLine:o.freeForLine,costInDollars:o.freeCost,demandAccess:o.freeAccess,responseSpeed:o.freeSpeed,modelFeatures:o.freeFeatures,advertisedFeatures:[o.freeAdvertisedFeatures0,o.freeAdvertisedFeatures1,o.freeAdvertisedFeatures2]},freeNeptune:u,freeChive:p,plus:c,plusNeptuneForFreeUsers:f,plusNeptuneForPlusUsers:m,plusChiveForFreeUsers:g,plusChiveForPlusUsers:v,plusYearly:d(d({},c),{},{costInDollars:o.plusYearlyCost,costInDollarsSubtitle:o.plusYearlyCostSubtitle}),teams:{name:o.teamPlanName,callToAction:{active:o.teamPlanActive,inactive:o.teamPlanInactive,create:o.teamPlanCreate},forLine:o.teamPlanForLine,costInDollars:o.teamPlanCost,responseSpeed:o.teamPlanSpeed,demandAccess:o.teamPlanSpeed,modelFeatures:o.teamPlanContext,advertisedFeatures:[o.teamsAdvertisedFeatures0,o.teamsAdvertisedFeatures1,o.teamsAdvertisedFeatures2,o.teamsAdvertisedFeatures3],disclaimer:o.teamPricingDisclaimer},teamsNeptune:h,enterprise:{name:o.enterpriseName,callToAction:{active:o.enterpriseCTA,create:o.enterpriseCTA,inactive:o.enterpriseCTA},costInDollars:o.enterpriseCost},manageSubscriptionWeb:{callToAction:o.manageSubscriptionWeb},manageSubscriptionIos:{callToAction:o.manageSubscriptionIos},manageSubscriptionAndroid:{callToAction:o.manageSubscriptionAndroid},cancelSubscriptionWeb:{callToAction:o.cancelSubscriptionWeb},cancelSubscriptionIos:{callToAction:o.cancelSubscriptionIos},cancelSubscriptionAndroid:{callToAction:o.cancelSubscriptionAndroid},getHelp:{callToAction:o.getHelp},business:{callToAction:o.business},disabledHighDemand:{hoverText:o.highDemandDisabledText},signUpForWaitlist:{active:o.signUpForWaitlistActive,create:o.signUpForWaitlistActive,inactive:o.signUpForWaitlistInactive}},A=((s={})[s.Scallion=0]="Scallion",s[s.Chive=1]="Chive",s[s.Default=2]="Default",s),b=()=>{let e=(0,i.Hb)();return(0,n.fW)("2437036977").value?A.Chive:e?A.Scallion:A.Default}},1322:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/invite/[[...referralCodeParam]]",function(){return t(69926)}])}},function(e){e.O(0,[2205,9169,3300,737,4660,118,2888,9774,179],function(){return e(e.s=1322)}),_N_E=e.O()}]);
//# sourceMappingURL=[[...referralCodeParam]]-99f9387674da5f85.js.map