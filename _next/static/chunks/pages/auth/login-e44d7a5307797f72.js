(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9344],{31438:function(e,t,a){"use strict";a.d(t,{B:function(){return v},EV:function(){return D},GK:function(){return f},bM:function(){return S},ss:function(){return w},tN:function(){return h},vm:function(){return b},xH:function(){return k}});var o,s,i=a(98601),r=a(99976),n=a(61619),l=a(13249),c=a(92379),d=a(68810);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,o)}return a}let v=((o={}).DownloadMessages="download-messages",o.InviteUsersToWorkspace="invite-users-to-workspace",o.WorkspaceAppearance="workspace-appearance",o.KeyboardActions="keyboard-actions",o.UserContext="user-context",o.WorkspaceSwitcher="workspace-switcher",o.ReadOnlyConversationTemplate="read-only-conversation-template",o.CookieManagement="cookie-management",o.AgeVerificationInterstitial="age-verification-interstitial",o.GPTDetails="gpt-details",o.GPTPrivacySettings="gpt-privacy-settings",o.GPTFeedbackEmail="gpt-support-email",o.GPTReview="gpt-review",o.GPTRemoveThirdParty="gpt-remove-third-party",o.SharedConversationModeration="shared-conversation-moderation",o.ReportConversation="report-conversation",o.BlockingInitialComponent="blocking-initial-component",o.NoAuthNewChat="no-auth-new-chat",o.GlobalMemoryOnboarding="global-memory-onboarding",o),u=l.F.IsNavigationCollapsed,g={isThreadHeaderVisible:!0,isDesktopNavCollapsed:null!==(s=l.m.getItem(u))&&void 0!==s&&s,isVoiceActive:!1,sharingModalThreadId:void 0,leaveWorkspaceData:null,activeSidebar:!1,activeModals:new Set,isLatencyDevToolsVisible:!1,purchaseWorkspaceData:null,isShowingDvdPlayer:!1},h=(0,d.Ue)()(()=>(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach(function(t){(0,i.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e})({},g)),S={isThreadHeaderVisible:e=>e.isThreadHeaderVisible,isLatencyDevtoolsVisible:e=>e.isLatencyDevToolsVisible},b={toggleDesktopNavCollapsed:()=>{h.setState(e=>{let t=!e.isDesktopNavCollapsed;return l.m.setItem(u,t),r.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:t}),{isDesktopNavCollapsed:t}})},closeSidebar:()=>{l.m.setItem(u,!0),r.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:!0}),h.setState({isDesktopNavCollapsed:!0})},closeSidebarWithoutSavingPreference:()=>{h.setState({isDesktopNavCollapsed:!0})},openSidebar:()=>{l.m.setItem(u,!1),r.A.logToggleDesktopNavCollapsed({isDesktopNavCollapsed:!1}),h.setState({isDesktopNavCollapsed:!1})},hideThreadHeader:()=>{h.setState({isThreadHeaderVisible:!1})},showThreadHeader:()=>{h.setState({isThreadHeaderVisible:!0})},openSharingModal(e,t){h.setState({sharingModalThreadId:e}),r.A.logEvent(n.M.shareConversationOpenModal,{location:t})},closeSharingModal(){h.setState({sharingModalThreadId:void 0})},setLeaveWorkspaceData(e){h.setState({leaveWorkspaceData:e})},setPurchaseWorkspaceData(e){h.setState({purchaseWorkspaceData:e})},setActiveSidebar(e){h.setState({activeSidebar:e})},toggleActiveSidebar(e){h.setState(t=>({activeSidebar:t.activeSidebar!==e&&e}))},closeActiveSidebar(){h.setState(()=>({activeSidebar:!1}))},toggleModal(e){h.setState(t=>{let a=new Set(t.activeModals);return a.has(e)?a.delete(e):a.add(e),{activeModals:a}})},openModal(e){h.setState(t=>{let a=new Set(t.activeModals);return a.add(e),{activeModals:a}})},closeModal(e){h.setState(t=>{let a=new Set(t.activeModals);return a.delete(e),{activeModals:a}})},hideLatencyDevTools:()=>{h.setState({isLatencyDevToolsVisible:!1})},showLatencyDevTools:()=>{h.setState({isLatencyDevToolsVisible:!0})},showDvdPlayer:()=>{h.setState({isShowingDvdPlayer:!0})},hideDvdPlayer:()=>{h.setState({isShowingDvdPlayer:!1})}};function D(e){return h(t=>t.activeModals.has(e))}function k(){return h(e=>e.isDesktopNavCollapsed)}function f(){return h(e=>e.isShowingDvdPlayer)}function w(){let{0:e,1:t}=(0,c.useState)(!1),a=h(e=>e.activeModals);return(0,c.useEffect)(()=>{t(e=>e||a.has(v.BlockingInitialComponent))},[a]),e}},7113:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/login",function(){return a(62490)}])}},function(e){e.O(0,[2205,5162,3148,2490,2888,9774,179],function(){return e(e.s=7113)}),_N_E=e.O()}]);
//# sourceMappingURL=login-e44d7a5307797f72.js.map