(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9344],{31438:function(e,t,a){"use strict";a.d(t,{B:function(){return u},EV:function(){return k},GK:function(){return w},bM:function(){return y},ss:function(){return m},tN:function(){return b},vm:function(){return D},xH:function(){return f}});var o,s,i,r=a(98601),n=a(99976),l=a(61619),c=a(13249),d=a(92379),p=a(68810);function v(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}let u=((o={}).DownloadMessages="download-messages",o.InviteUsersToWorkspace="invite-users-to-workspace",o.WorkspaceAppearance="workspace-appearance",o.KeyboardActions="keyboard-actions",o.UserContext="user-context",o.WorkspaceSwitcher="workspace-switcher",o.ReadOnlyConversationTemplate="read-only-conversation-template",o.CookieManagement="cookie-management",o.AgeVerificationInterstitial="age-verification-interstitial",o.GPTDetails="gpt-details",o.GPTPrivacySettings="gpt-privacy-settings",o.GPTFeedbackEmail="gpt-support-email",o.GPTReview="gpt-review",o.GPTRemoveThirdParty="gpt-remove-third-party",o.SharedConversationModeration="shared-conversation-moderation",o.ReportConversation="report-conversation",o.BlockingInitialComponent="blocking-initial-component",o.NoAuthNewChat="no-auth-new-chat",o.GlobalMemoryOnboarding="global-memory-onboarding",o),g=c.F.IsNavigationCollapsed,h=c.F.IsHistoryCollapsed,S={isThreadHeaderVisible:!0,isDesktopNavCollapsed:null!==(s=c.m.getItem(g))&&void 0!==s&&s,isVoiceActive:!1,sharingModalThreadId:void 0,leaveWorkspaceData:null,activeSidebar:!1,activeModals:new Set,isLatencyDevToolsVisible:!1,purchaseWorkspaceData:null,isShowingDvdPlayer:!1,isHistoryCollapsed:null===(i=c.m.getItem(h))||void 0===i||i},b=(0,p.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?v(Object(a),!0).forEach(function(t){(0,r.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):v(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e})({},S)),y={isThreadHeaderVisible:e=>e.isThreadHeaderVisible,isLatencyDevtoolsVisible:e=>e.isLatencyDevToolsVisible},D={toggleHistoryCollapsed:()=>{b.setState(e=>{let t=!e.isHistoryCollapsed;return c.m.setItem(h,t),n.A.logToggleShowRecents({isOnlyShowingRecents:t}),{isHistoryCollapsed:t}})},toggleDesktopNavCollapsed:()=>{b.setState(e=>{let t=!e.isDesktopNavCollapsed;return c.m.setItem(g,t),n.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:t}),{isDesktopNavCollapsed:t}})},closeSidebar:()=>{c.m.setItem(g,!0),n.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:!0}),b.setState({isDesktopNavCollapsed:!0})},closeSidebarWithoutSavingPreference:()=>{b.setState({isDesktopNavCollapsed:!0})},openSidebar:()=>{c.m.setItem(g,!1),n.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:!1}),b.setState({isDesktopNavCollapsed:!1})},hideThreadHeader:()=>{b.setState({isThreadHeaderVisible:!1})},showThreadHeader:()=>{b.setState({isThreadHeaderVisible:!0})},openSharingModal(e,t){b.setState({sharingModalThreadId:e}),n.A.logEvent(l.M.shareConversationOpenModal,{location:t})},closeSharingModal(){b.setState({sharingModalThreadId:void 0})},setLeaveWorkspaceData(e){b.setState({leaveWorkspaceData:e})},setPurchaseWorkspaceData(e){b.setState({purchaseWorkspaceData:e})},setActiveSidebar(e){b.setState({activeSidebar:e})},toggleActiveSidebar(e){b.setState(t=>({activeSidebar:t.activeSidebar!==e&&e}))},closeActiveSidebar(){b.setState(()=>({activeSidebar:!1}))},toggleModal(e){b.setState(t=>{let a=new Set(t.activeModals);return a.has(e)?a.delete(e):a.add(e),{activeModals:a}})},openModal(e){b.setState(t=>{let a=new Set(t.activeModals);return a.add(e),{activeModals:a}})},closeModal(e){b.setState(t=>{let a=new Set(t.activeModals);return a.delete(e),{activeModals:a}})},hideLatencyDevTools:()=>{b.setState({isLatencyDevToolsVisible:!1})},showLatencyDevTools:()=>{b.setState({isLatencyDevToolsVisible:!0})},showDvdPlayer:()=>{b.setState({isShowingDvdPlayer:!0})},hideDvdPlayer:()=>{b.setState({isShowingDvdPlayer:!1})}};function k(e){return b(t=>t.activeModals.has(e))}function f(){return b(e=>e.isDesktopNavCollapsed)}function w(){return b(e=>e.isShowingDvdPlayer)}function m(){let{0:e,1:t}=(0,d.useState)(!1),a=b(e=>e.activeModals);return(0,d.useEffect)(()=>{t(e=>e||a.has(u.BlockingInitialComponent))},[a]),e}},7113:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return a(62490)}])}},function(e){e.O(0,[2205,5162,3148,2490,2888,9774,179],function(){return e(e.s=7113)}),_N_E=e.O()}]);
//# sourceMappingURL=login-bccc9a732cba5f0a.js.map