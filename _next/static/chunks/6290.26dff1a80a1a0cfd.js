"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6290],{36290:function(e,s,a){a.r(s),a.d(s,{default:function(){return X}});var t,n=a(41141),l=a(21904),i=a(85734),r=a(40715),d=a(71840),o=a(33481),u=a(72500),c=a(43852),g=a(48580),m=a(86078),h=a.n(m),x=a(92379),p=a(26123),f=a(25940),v=a(74091),y=a(76129),j=a(44512),w=a(72427),b=a(651);function M(e){var s;let{messages:a,status:t,isRequestActive:n}=e,[r,d]=a,o=(0,p.Z)(),u=null==d||null===(s=d.message.metadata)||void 0===s?void 0:s.aggregate_result,g=(0,w.We)(r.message),{data:m,error:h}=(0,c.R1)(l.sh.ShowExpandedCodeView),x=o.formatMessage({id:"message.tools.data-analysis.running",defaultMessage:"Analyzing"});if((null==u?void 0:u.status)==="success"?x=o.formatMessage({id:"message.tools.data-analysis.finished",defaultMessage:"Analyzed"}):null!=d&&d.message.content.content_type!==i.PX.ExecutionOutput||null!=u&&"running"!==u.status?x=o.formatMessage({id:"message.tools.data-analysis.error",defaultMessage:"Analysis errored"}):(g||!n)&&(x=o.formatMessage({id:"message.tools.data-analysis.stopped",defaultMessage:"Analysis paused"})),void 0!==m||h){let e=null!=(0,y.xB)(r.message);return(0,b.jsx)(j.D,{status:t,highlightedCommand:x,showWorkUserSetting:null!=m&&m,hideOnlyIfNotInteractedWith:!0,children:e?(0,b.jsxs)("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[(0,b.jsx)(y.XX,{message:r.message}),null!=d&&(0,b.jsx)(y.Xt,{message:d.message})]}):null})}return null}var k=a(33423),E=a(96294),N=a(58086);let S=h()(()=>Promise.all([a.e(9659),a.e(6835),a.e(893),a.e(8293),a.e(5556),a.e(8926)]).then(a.bind(a,58926)).then(e=>e.default),{loadableGenerated:{webpack:()=>[58926]}});function X(e){var s,a,t,n;let{messages:m,isRequestActive:h,clientThreadId:f}=e,v=(0,p.Z)(),{0:j,1:X}=(0,x.useState)(!1),{data:F}=(0,c.R1)(l.sh.ShowExpandedCodeView),I=(0,g.sB)("chatgpt-simple-browse-tool-indicator").value,A=(0,c.Gt)(),[Z,z]=m,{0:V,1:R}=(0,x.useState)(!1),{0:T,1:W}=(0,x.useState)(!1),O=(0,w.We)(Z.message),B=null==z||null===(s=z.message.metadata)||void 0===s?void 0:s.aggregate_result,P=(0,r.BR)(),D=(0,r.kY)(f),U=(0,u.Ex)(),Y=null!=z&&z.message?(0,r.y)(z.message):[],$=null!==(a=null==z||null===(t=z.message.metadata)||void 0===t||null===(t=t.aggregate_result)||void 0===t?void 0:t.messages.filter(y.O1))&&void 0!==a?a:[],G=(null!==(n=Y.filter(e=>"chart"===e.type))&&void 0!==n?n:[]).length!==$.length,q=D&&!G,H=k.X.Running,J=_.running;(null==B?void 0:B.status)==="success"?(H=k.X.Finished,J=T?_.finished:void 0):null!=z&&z.message.content.content_type!==i.PX.ExecutionOutput||null!=B&&"running"!==B.status?(H=k.X.Error,J=_.error):(O||!h)&&(H=k.X.Stopped,J=_.stopped),(0,x.useEffect)(()=>{X(null!=F&&F),!0===F&&(R(!0),W(!0))},[F]);let K=(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"flex",children:[(0,b.jsx)("div",{className:"w-full",children:(0,b.jsx)(k.Z,{conversationMessages:m,icon:E.BU,status:H,text:J?v.formatMessage(J,{expander:e=>(0,b.jsxs)("button",{className:"inline-flex items-center gap-1",onClick:()=>{R(e=>!e),V||W(!0)},children:[e,(0,b.jsx)(o.Tg4,{className:"icon-sm"})]})}):null,estimatedToolDurationMs:N.yF,shouldPersistAfterFinished:T})}),V&&!U&&(0,b.jsx)(d.Z,{id:"showExpandedCodeView",labelClassName:"whitespace-nowrap text-token-text-secondary",className:"checked:border-token-text-secondary",checked:j,onChange:e=>{X(e.currentTarget.checked),A.mutate({setting:l.sh.ShowExpandedCodeView,value:e.currentTarget.checked})},label:v.formatMessage(_.alwaysExpand),labelSide:"left"})]}),V&&(0,b.jsxs)("div",{className:"mb-3 mt-0.5 overflow-hidden rounded-xl bg-black",children:[(0,b.jsx)(y.XX,{message:Z.message}),null!=z&&(0,b.jsx)(y.Xt,{message:z.message})]})]});return(0,b.jsxs)(b.Fragment,{children:[I?(0,b.jsx)(M,{messages:m,status:H,isRequestActive:h}):K,q&&Y.map((e,s)=>("chart"!==e.type||P||(e.fallback_to_image=!0),(0,b.jsx)(C,{children:(0,b.jsx)(S,{clientThreadId:f,visualization:e})},s))),!q&&null!=z&&(0,b.jsx)(y.i$,{message:z.message})]})}let C=v.Z.div(t||(t=(0,n.Z)(["mb-3 max-w-[80%]"]))),_=(0,f.vU)({running:{id:"codeInterpreterMessage.runningV2",defaultMessage:"<expander>Analyzing</expander>"},finished:{id:"codeInterpreterMessage.finished",defaultMessage:"<expander>Finished analyzing</expander>"},stopped:{id:"codeInterpreterMessage.stoppedV2",defaultMessage:"<expander>Stopped analyzing</expander>"},error:{id:"codeInterpreterMessage.errorV2",defaultMessage:"<expander>Error analyzing</expander>"},alwaysExpand:{id:"codeInterpreterMessage.alwaysExpand",defaultMessage:"Always expand output?"}})},44512:function(e,s,a){a.d(s,{D:function(){return m}});var t,n=a(41141),l=a(33481),i=a(19841),r=a(7290),d=a(58164),o=a(92379),u=a(74091),c=a(33423),g=a(651);function m(e){let{highlightedCommand:s,status:a,children:t,showWorkUserSetting:n=!1,hideOnlyIfNotInteractedWith:u=!1}=e,m=null!=t,{0:x}=(0,o.useState)(n),{0:p,1:f}=(0,o.useState)(n),{0:v,1:y}=(0,o.useState)(!1);return a!==c.X.Finished&&a!==c.X.Error||!u||x||v?m?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(h,{$canShowWork:!0,children:(0,g.jsx)(r.M,{children:(0,g.jsx)(d.E.button,{onClick:()=>{f(e=>!e),y(!0)},initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.3},className:(0,i.default)(a===c.X.Running&&"loading-shimmer","group absolute left-0 top-0 mr-1.5 h-[26px] overflow-hidden juice:h-8"),children:(0,g.jsxs)("div",{className:"flex items-center justify-start gap-1",children:[(0,g.jsx)("span",{children:s}),p?(0,g.jsx)(l.r0F,{className:"icon-md group-hover:visible md:invisible"}):(0,g.jsx)(l.Tg4,{className:"icon-md group-hover:visible md:invisible"})]})},null==s?void 0:s.toString())})}),(0,g.jsx)(r.M,{children:p&&t&&(0,g.jsx)(d.E.div,{initial:"collapsed",animate:"reveal",exit:"collapsed",variants:{collapsed:{translateY:-20,opacity:0,height:0},reveal:{translateY:0,opacity:1,height:"auto"}},transition:{duration:.3,ease:"easeInOut"},className:"overflow-hidden",children:t})})]}):(0,g.jsx)(h,{$canShowWork:!1,children:s}):null}let h=u.Z.p(t||(t=(0,n.Z)(["juice:first:mt-0 my-1.5 relative h-[26px] juice:h-8\n",""])),e=>{let{$canShowWork:s}=e;return s?"text-token-text-secondary hover:text-token-text-primary":"text-token-text-secondary"})}}]);
//# sourceMappingURL=6290.26dff1a80a1a0cfd.js.map