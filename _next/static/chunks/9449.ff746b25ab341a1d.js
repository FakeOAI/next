"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9449],{99449:function(e,t,a){a.r(t),a.d(t,{GizmoContactsMessage:function(){return l}});var n=a(98601),o=a(16757),r=a(39004),i=a(93776),c=a(92745),s=a(92379),m=a(92054),p=a(651);function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function l(e){let{messages:t,clientThreadId:a,isLastTurnInConversation:l,onRequestCompletion:u}=e,[f,...g]=t,_=(0,c.h9)(),y=g.find(e=>e.message.metadata?.jit_plugin_data?.from_server?.type==="confirm_action")?.message.metadata?.jit_plugin_data?.from_server,b=y?.body.actions[0].type==="contact_gizmo"?y?.body.actions[0].contact_gizmo.gizmo_id:void 0,{data:O}=(0,r.b9)(b),j=l&&g[g.length-1];return(0,s.useEffect)(()=>{if(_||!j||j.message.metadata?.jit_plugin_data?.from_server?.type!=="confirm_action")return;let e=j.message.metadata?.jit_plugin_data?.from_server;if(e?.type==="confirm_action"){let r=e.body.actions.find(e=>"contact_gizmo"===e.type);r&&"contact_gizmo"===r.type&&function(e){let{actionData:t,allMessages:a,assistantMessage:n,clientThreadId:r,onRequestCompletion:i}=e,s={id:(0,m.Z)(),author:{role:o.uU.Tool,name:n.message.recipient},content:{content_type:o.PX.Text,parts:[""]},recipient:"all",metadata:{jit_plugin_data:{from_client:t}}};c.tQ.updateTree(r,e=>{e.addNode(s.id,s,a[a.length-1].message.id,o.uU.Tool,{completionSampleFinishTime:Date.now()})}),c.tQ.setThreadCurrentLeafId(r,s.id),i({type:o.Os.Next,promptId:s.id,eventMetadata:{eventSource:"mouse"},cancelActiveRequests:!1,completionMetadata:{conversationMode:{kind:o.OL.PrimaryAssistant}}})}({allMessages:t,assistantMessage:f,clientThreadId:a,onRequestCompletion:u,actionData:function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach(function(t){(0,n.Z)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({type:"contact_gizmo"},r.contact_gizmo)})}},[_,j,u,t,f,a]),(0,p.jsx)("div",{className:"my-2 flex flex-col",children:O&&(0,p.jsx)(i.wV,{gizmoResource:O})})}}}]);
//# sourceMappingURL=9449.ff746b25ab341a1d.js.map