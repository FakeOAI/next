(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705,6638],{51516:function(e,t,r){"use strict";function n(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}r.d(t,{Z:function(){return n}})},43062:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return ee},default:function(){return et}});var n=r(98601),s=r(34142),a=r(76638),o=r(24740),i=r(2721),l=r(93951),c=r(42420),u=r(84760),d=r(52134),p=r(56032),m=r(88667),f=r(19841),g=r(11941),x=r.n(g),h=r(92379),y=r(75172),j=r(62984),w=r(68306),b=r(64854),v=r(11550),k=r(6440),O=r(13350),Z=r(47563),S=r(651);function M(e){let{className:t,inputClassName:r,value:n,onChange:s,placeholder:a}=e;return(0,S.jsxs)("div",{className:(0,f.default)("relative",t),children:[(0,S.jsx)(Z.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,S.jsx)("input",{type:"text",value:n,onChange:s,placeholder:a,className:(0,f.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",r),autoComplete:"off"})]})}var C=r(97537),P=r(98095),N=r(36792),E=r(24434),F=r(30853),D=r(82363),I=r(91530),A=r.n(I),_=r(18898),U=r(60464),T=r(66587);function G(e){let{group:t,isOpen:r,onClose:n}=e,s=(0,y.Z)(),a=s.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),c=(0,l.t)(),{0:u,1:d}=(0,h.useState)([]),{0:p,1:m}=(0,h.useState)(!1);async function f(){let e=null==c?void 0:c.getWorkspaceId();if(!e)throw Error("No workspace ID found");m(!0);let r=await i.Z.bulkAddWorkspaceGroupUsers(e,t.id,u);o.m.success(s.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:r.added_group_users.length})),null==n||n(),m(!1)}return(0,S.jsxs)(E.Z,{isOpen:r,onClose:null!=n?n:A(),title:a,type:"success",showCloseButton:!0,primaryButton:(0,S.jsx)(v.z,{onClick:f,disabled:0===u.length||u.length>1e3,loading:p,children:(0,S.jsx)(j.Z,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[(0,S.jsx)(R,{onChange:d}),u.length>1e3&&(0,S.jsx)("div",{className:"mt-2 text-sm text-token-text-error",children:(0,S.jsx)(j.Z,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:1e3}})})]})}function R(e){let{onChange:t}=e,{0:r,1:n}=(0,h.useState)("");return(0,S.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,S.jsxs)("label",{htmlFor:"group-email-paste",children:[(0,S.jsx)(j.Z,{id:"qvGcSC",defaultMessage:"Emails"}),(0,S.jsx)("br",{}),(0,S.jsx)("span",{className:"text-sm text-token-text-tertiary",children:(0,S.jsx)(j.Z,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),(0,S.jsx)(T.Z,{id:"group-email-paste",className:"h-[250px] text-sm",value:r,onChange:e=>{n(e.target.value),t(e.target.value.split("\n").map(e=>e.trim()).filter(e=>e.length>0).filter(e=>U.F.test(e)))},placeholder:"jean@example.com\njoohyun@example.com\nmuhammed@example.com\nsusan@example.com"})]})}function z(e){var t;let{group:r,isOpen:n,onClose:s}=e,a=(0,y.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:r.name}),o=(0,l.t)(),i=null==o?void 0:o.getWorkspaceId(),{0:c,1:u}=(0,h.useState)(""),{0:p,1:m}=(0,h.useState)(0),{data:f}=(0,_.Z)(i,p*_.I,c,_.I,d.Wk),{0:g,1:x}=(0,h.useState)([]),{0:w,1:b}=(0,h.useState)([]),{0:k,1:C}=(0,h.useState)("interactive"),P=f?Math.ceil(null!==(t=f.total)&&void 0!==t?t:0/_.I):0;async function F(e){b(t=>[...t,e]);try{await q(i,r.id,e),x(t=>[...t,e])}catch(e){D.U.addError(e)}finally{b(t=>t.filter(t=>t!==e))}}return"batch"===k?(0,S.jsx)(G,{group:r,isOpen:n,onClose:s}):(0,S.jsx)(E.Z,{type:"warning",isOpen:n,onClose:null!=s?s:A(),title:a,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:(0,S.jsx)(v.z,{onClick:s,children:(0,S.jsx)(j.Z,{id:"0NAzDq",defaultMessage:"Done"})}),children:(0,S.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,S.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,S.jsx)("p",{children:a}),(0,S.jsx)(v.z,{onClick:()=>{C("batch")},color:"secondary",children:(0,S.jsx)(j.Z,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),(0,S.jsx)(M,{value:c,inputClassName:"w-full",onChange:e=>{u(e.target.value)}}),(0,S.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,S.jsxs)(N.Z.Header,{children:[(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,S.jsx)(N.Z.HeaderCell,{})]}),(0,S.jsx)(N.Z.Body,{children:null==f?void 0:f.items.map(e=>(0,S.jsxs)(N.Z.Row,{children:[(0,S.jsx)(N.Z.Cell,{children:e.name}),(0,S.jsx)(N.Z.Cell,{children:e.email}),(0,S.jsx)(N.Z.Cell,{textAlign:"right",className:"pr-1",children:(0,S.jsx)(v.z,{size:"small",color:"secondary",disabled:w.includes(e.id),onClick:()=>{g.includes(e.id)||F(e.id)},icon:g.includes(e.id)?Z.$As:Z.Vz5,children:g.includes(e.id)?(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},e.id))})]}),(0,S.jsx)("div",{className:"flex flex-row justify-center",children:(0,S.jsx)(O.t,{currentPage:p,onChangeIndex:e=>{m(e)},length:P})})]})})}async function q(e,t,r){await i.Z.addWorkspaceGroupUser(e,t,r)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function W(e){let{workspaceId:t,group:r,readOnly:n}=e,s=(0,y.Z)(),{0:a,1:o}=(0,h.useState)(!1),{0:l,1:m}=(0,h.useState)(""),{0:g,1:x}=(0,h.useState)(0),{data:w,isLoading:b,isPlaceholderData:k}=(0,u.a)({queryKey:[t,"groups",r.id,l,"members-page-".concat(g)],queryFn:()=>i.Z.listWorkspaceGroupMembers(t,r.id,l,10*g),placeholderData:d.Wk}),{0:M,1:E}=(0,h.useState)(!1),D=(0,h.useRef)(null),I=(0,c.NL)();(0,h.useEffect)(()=>{a&&D.current&&D.current.focus()},[a]);let{mutateAsync:A}=(0,p.D)({mutationFn:async e=>await i.Z.removeWorkspaceGroupMember(t,r.id,e),onMutate:e=>(I.cancelQueries({queryKey:[t,"groups",r.id]}),I.setQueryData([t,"groups",r.id,l,"members-page-".concat(g)],t=>t?X(X({},t),{},{items:t.items.filter(t=>t.id!==e),total:t.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:w}),onError:(e,n,s)=>{I.setQueryData([t,"groups",r.id,"members-page-".concat(g)],null==s?void 0:s.previousData),I.invalidateQueries({queryKey:[t,"groups",r.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),I.invalidateQueries({queryKey:[t,"groups"]})}});return(0,S.jsxs)("div",{className:"flex w-full flex-col",children:[(0,S.jsxs)("div",{className:"flex flex-row items-center ",children:[(0,S.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,S.jsx)("div",{className:"grow"}),(0,S.jsx)(F.u,{label:s.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,S.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{o(!0)},children:(0,S.jsx)(Z.W1M,{className:"icon-sm"})})}),(0,S.jsx)("input",{type:"text",ref:D,placeholder:s.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,f.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",a?"w-64":"w-0"),value:l,onChange:()=>{var e,t;x(0),m(null!==(e=null===(t=D.current)||void 0===t?void 0:t.value)&&void 0!==e?e:"")}})]}),(0,S.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,S.jsxs)(N.Z.Header,{children:[(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,S.jsx)(N.Z.HeaderCell,{})]}),(0,S.jsx)(N.Z.Body,{className:b||k?"opacity-50":void 0,children:null==w?(0,S.jsx)(N.Z.Row,{children:(0,S.jsx)(N.Z.Cell,{colSpan:3,children:(0,S.jsx)(C.Z,{})})}):0===w.items.length?(0,S.jsx)(N.Z.Row,{children:(0,S.jsx)(N.Z.Cell,{colSpan:3,children:""===l?(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):w.items.map(e=>(0,S.jsxs)(N.Z.Row,{children:[(0,S.jsx)(N.Z.Cell,{children:(0,S.jsx)("span",{className:"ml-3",children:e.name})}),(0,S.jsx)(N.Z.Cell,{children:e.email}),(0,S.jsx)(N.Z.Cell,{textAlign:"right",children:!n&&(0,S.jsxs)(P.Z.Root,{children:[(0,S.jsx)(P.Z.Trigger,{className:"-my-2",children:(0,S.jsx)(Z.nWS,{className:"icon-sm"})}),(0,S.jsx)(P.Z.Portal,{children:(0,S.jsx)(P.Z.Content,{children:(0,S.jsx)(P.Z.Item,{onClick:()=>A(e.id),children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]})})]},e.id))})]}),(0,S.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[!n&&(0,S.jsx)(v.z,{color:"secondary",onClick:()=>E(!0),children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),(0,S.jsx)("div",{className:"grow"}),w&&w.items.length>0&&(0,S.jsx)(O.t,{currentPage:g,onChangeIndex:e=>{x(e)},length:Math.ceil(w.total/10)})]}),M&&(0,S.jsx)(z,{isOpen:!0,onClose:()=>{I.invalidateQueries({queryKey:[t,"groups"]}),E(!1)},group:r})]})}function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function K(e){let{workspaceId:t}=e,r=(0,y.Z)(),n=(0,l.t)(),s=!(null!=n&&n.isAdminOfAccount()||null!=n&&n.isOwnerOfAccount()),a=(0,c.NL)(),{0:m,1:g}=(0,h.useState)(""),{0:x,1:w}=(0,h.useState)(0),{data:b,isLoading:k,isPlaceholderData:Z}=(0,u.a)({queryKey:""===m?[t,"groups","page-".concat(x)]:[t,"groups","filtered",m,"page-".concat(x)],queryFn:()=>i.Z.getWorkspaceGroups(t,{query:m,offset:10*x}),placeholderData:d.Wk}),{0:P,1:E}=(0,h.useState)(!1),F=e=>{e&&(w(0),g("")),E(e)},{mutateAsync:D}=(0,p.D)({mutationFn:async e=>{let{workspaceId:t,name:r}=e;return await i.Z.createWorkspaceGroup(t,r)},onMutate:e=>{let{workspaceId:t,name:r}=e;return a.cancelQueries({queryKey:[t,"groups"]}),a.setQueryData([t,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),H(H({},e),{},{items:[{id:"new",name:r,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:b}},onError:(e,n,s)=>{a.setQueryData([t,"groups","page-0"],null==s?void 0:s.previousGroups),a.invalidateQueries({queryKey:[t,"groups"]}),"Group with this name already exists."===e.message&&o.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:I}=(0,p.D)({mutationFn:async e=>await i.Z.deleteWorkspaceGroup(t,e),onMutate:e=>(a.cancelQueries({queryKey:[t,"groups","page-0"]}),a.setQueryData([t,"groups","page-0"],t=>(t||(t={items:[]}),H(H({},t),{},{items:t.items.filter(t=>t.id!==e)}))),{previousGroups:b}),onError:(e,r,n)=>{a.setQueryData([t,"groups","page-0"],null==n?void 0:n.previousGroups),a.invalidateQueries({queryKey:[t,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:A}=(0,p.D)({mutationFn:async e=>{let{workspaceId:t,groupID:r,name:n}=e;return await i.Z.updateWorkspaceGroup(t,r,n)},onMutate:e=>{let{workspaceId:t,groupID:r,name:n}=e,s=a.getQueryData([t,"groups","page-".concat(x)]);return a.setQueryData([t,"groups","page-".concat(x)],e=>(e||(e={items:[]}),H(H({},e),{},{items:e.items.map(e=>e.id===r?H(H({},e),{},{name:n}):e)}))),{previousGroups:s}},onError:(e,t,n)=>{a.setQueryData([t,"groups","page-".concat(x)],null==n?void 0:n.previousGroups),"Group with this name already exists."===e.message&&o.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}});return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,S.jsx)(M,{inputClassName:"w-[250px]",value:m,onChange:e=>{g(e.target.value),w(0)},placeholder:r.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!s&&(0,S.jsx)(v.z,{onClick:()=>F(!0),children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,S.jsxs)("div",{children:[(0,S.jsxs)(N.Z.Root,{className:"min-w-full",children:[(0,S.jsxs)(N.Z.Header,{children:[(0,S.jsx)(N.Z.HeaderCell,{}),(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,S.jsx)(N.Z.HeaderCell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,S.jsx)(N.Z.HeaderCell,{})]}),(0,S.jsxs)(N.Z.Body,{className:(0,f.default)((k||Z)&&"opacity-50"),children:[P&&(0,S.jsx)(L,{group:"new",workspaceId:t,onChangeName:async e=>{""!==e.trim()&&(D({workspaceId:t,name:e}),F(!1))},onDelete:()=>null,readOnly:s}),null==b?(0,S.jsx)(N.Z.Row,{children:(0,S.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:(0,S.jsx)(C.Z,{})})}):0===b.items.length?(0,S.jsx)(N.Z.Row,{children:(0,S.jsx)(N.Z.Cell,{colSpan:5,textAlign:"center",children:""===m?(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):b.items.map(e=>(0,S.jsx)(L,{group:e,workspaceId:t,onDelete:I,onChangeName:async r=>{A({workspaceId:t,groupID:e.id,name:r})},readOnly:s},e.id))]})]}),b&&(0,S.jsx)("div",{className:"text-center",children:(0,S.jsx)(O.t,{length:Math.ceil(b.total/10),currentPage:Math.min(x,Math.ceil(b.total/10)),onChangeIndex:e=>w(e)})})]})]})}function J(e){let{currentWorkspaceId:t}=e,r=(0,y.Z)();return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(x(),{children:(0,S.jsx)("title",{children:r.formatMessage(V.title)})}),(0,S.jsx)(s.yG,{title:r.formatMessage(V.title),subtitle:(0,S.jsx)(j.Z,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),(0,S.jsx)(s.hb,{showSpinner:!1,children:(0,S.jsx)(K,{workspaceId:t})})]})}function L(e){let{group:t,workspaceId:r,onChangeName:n,onDelete:s,readOnly:o}=e,i=(0,y.Z)(),{value:l}=(0,m.sB)("4182851027"),{0:c,1:u}=(0,h.useState)(!1),{0:d,1:p}=(0,h.useState)("new"===t?"":t.name),{0:f,1:g}=(0,h.useState)(!1),{0:x,1:v}=(0,h.useState)("new"===t),{0:O,1:M}=(0,h.useState)(null),C=(0,h.useRef)(null);(0,h.useEffect)(()=>{if("new"===t||x){var e;null===(e=C.current)||void 0===e||e.focus()}},[t,x]);let E=async()=>{if(""===d.trim()){p("new"===t?"":t.name),v(!1),g(!1);return}n&&(g(!0),await n(d)),g(!1),v(!1)};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(N.Z.Row,{onClick:()=>u(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,S.jsx)(N.Z.Cell,{children:(0,S.jsx)(b.Z,{checked:c})}),(0,S.jsxs)(N.Z.Cell,{children:["new"===t||x?(0,S.jsx)(k.Z,{ref:C,name:"newGroupName",value:d,disabled:f,placeholder:i.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>p(e.target.value),onBlur:()=>{d!==("new"===t?"":t.name)&&E()},onPressEnter:E}):t.name,l&&"new"!==t&&t.is_scim_managed&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("span",{className:"flex-grow"}),(0,S.jsx)(a.DirectorySyncResourceManagedIndication,{})]})]}),(0,S.jsx)(N.Z.Cell,{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===t?"0":t.num_members}})}),(0,S.jsx)(N.Z.Cell,{children:"new"!==t&&t.created_time?(0,S.jsx)(w.Ji,{value:t.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,S.jsx)(N.Z.Cell,{textAlign:"right",children:"new"!==t&&!o&&(0,S.jsxs)(P.Z.Root,{children:[(0,S.jsx)(P.Z.Trigger,{className:"-my-2",children:(0,S.jsx)(Z.nWS,{className:"icon-sm"})}),(0,S.jsx)(P.Z.Portal,{children:(0,S.jsxs)(P.Z.Content,{children:[(0,S.jsx)(P.Z.Item,{onClick:e=>{v(!0),setTimeout(()=>{var e;null===(e=C.current)||void 0===e||e.focus()},120),e.stopPropagation()},children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,S.jsx)(P.Z.Item,{onClick:e=>{M(t),e.stopPropagation()},children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]})})]}),c&&"new"!==t&&(0,S.jsx)(N.Z.Row,{children:(0,S.jsx)(N.Z.Cell,{colSpan:5,className:"pl-8",children:(0,S.jsx)(W,{group:t,workspaceId:r,readOnly:o})})}),O&&(0,S.jsx)($,{group:O,onDelete:s,onClose:()=>M(null)})]})}function $(e){let{group:t,onDelete:r,onClose:n}=e,s=(0,y.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:t.name});return(0,S.jsx)(E.Z,{type:"warning",isOpen:!0,onClose:n,title:s,showCloseButton:!0,primaryButton:(0,S.jsx)(v.z,{color:"danger",onClick:async()=>{r(t.id),n()},children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,S.jsx)(v.z,{onClick:n,color:"secondary",children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,S.jsx)("p",{children:(0,S.jsx)(j.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:t.name}})})})}let V=(0,w.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var ee=!0;function et(e){return(0,S.jsx)(J,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}et.getLayout=function(e){return(0,S.jsx)(s.ZP,{mobilePageTitle:"Groups",children:e})}},64854:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(19841),s=r(47563),a=r(651);function o(e){let{className:t,checked:r}=e;return(0,a.jsx)(s.Tg4,{className:(0,n.default)("icon-sm transform transition-transform duration-200",t,r?"rotate-0":"ltr:-rotate-90 rtl:rotate-90")})}},66587:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(98601),s=r(52088),a=r(19841),o=r(651);let i=["className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function c(e){let{className:t}=e,r=(0,s.Z)(e,i);return(0,o.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,a.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},r))}},76638:function(e,t,r){"use strict";r.r(t),r.d(t,{DirectorySyncResourceManagedIndication:function(){return l}});var n=r(98601),s=r(62984),a=r(68306),o=r(651);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(){return(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("div",{className:"flex rounded-md bg-orange-300 px-1 text-center text-white dark:bg-orange-800",children:(0,o.jsx)("span",{className:"text-[0.5em] font-bold leading-4",children:(0,o.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},c.scimIndicatorText))})})})}let c=(0,a.vU)({scimIndicatorText:{id:"workspaceIdentity.directorySyncResourceTagTitle",defaultMessage:"SCIM"}})},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return a},EZ:function(){return o},Ql:function(){return s},dO:function(){return n},xC:function(){return i}});let n=10,s=4,a={duration:20,hasCloseButton:!0},o=512,i=536870912},98628:function(e,t,r){"use strict";r.d(t,{R3:function(){return b},W7:function(){return y},cT:function(){return w},lU:function(){return v},po:function(){return j}});var n=r(98601),s=r(99333),a=r(2721),o=r(92319),i=r(99976),l=r(61619),c=r(82363),u=r(68306),d=r(88815),p=r(24740),m=r(62166),f=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let h={duration:20,hasCloseButton:!0};function y(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function j(e){return new Promise((t,r)=>{let n=new FileReader,s=new Image;n.onload=()=>{s.onload=()=>t(s),s.onerror=e=>r(e),s.src=n.result},n.readAsDataURL(e)})}async function w(e,t,r,n,c,u){var m,f,g;let x=d.N.getState().resetRateLimits,y=s.EG.Initial;i.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:n.kind,uploadEntry:"local"});let j=u.usesRetrievalIndex?performance.now():void 0;try{let{file_id:o,upload_url:i}=await a.Z.createFile(t.name,t.size,n,!!x);c.onFileCreated(e,o,i),y=s.EG.FileCreated;let l=n.kind===s.Ei.Gizmo?n.gizmoId:void 0,d=null!==(m=u.shouldUpdateProgress)&&void 0!==m&&m,g=null!==(f=u.usesRetrievalIndex)&&void 0!==f&&f,w=await a.Z.uploadFileToAzureStorage(t,i,t=>{d&&c.onFileUploadProgress(e,10+80*t)});if(c.onFileUploadProgress(e,90),201!==w.status&&O(w,o,g),y=s.EG.FileUploaded,await a.Z.processFileUpload(o,{gizmoId:l}),y=s.EG.FileProcessed,u.usesRetrievalIndex){let t=await k(o,l);(null==t?void 0:t.status)===s.Xf.Skipped&&p.m.danger(r.formatMessage(S.retrievalSkippedFile,{fileName:t.name}),h),c.onFileUploaded(e,o,void 0,{fileTokenSize:t.file_size_tokens}),y=s.EG.RetrievalIndexCreated}else c.onFileUploaded(e,o,u.imageDimensions);null!=j&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-j,type:"file"})}catch(a){Z(r,t.name,a);let s="NotInstanceOfError";a instanceof o.gK?s=a.name:a instanceof o.Q0?s="FatalServerError_type_".concat(null!==(g=a.type)&&void 0!==g?g:"undefined"):a instanceof Error?s=a.name:a instanceof o.vq&&(s=a.name),c.onError(e,"error",s,n,y)}}async function b(e,t,r,n,u,d,g){let y=performance.now();i.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:r.kind,contextConnector:u.contextConnector,fileSourceType:u.type});let j=s.EG.Initial;r.kind===s.Ei.Gizmo&&(r=x(x({},r),{},{kind:n.includes(t.type)?s.Ei.Multimodal:s.Ei.MyFiles}));try{let n=await a.Z.uploadConnectorAPI(e,u.contextConnector,r,t,d,u.o365DriveId);switch(n.type){case"error":throw function(e){let{status_code:t,error_code:r,error_message:n}=e;if(!t||!(t<500))return new o.Q0(n);{let e="internal_error";return r?e=r:404===t?e="file_not_found":403===t?e="permission_error":413===t&&(e="file_too_large"),new o.vq(n,e)}}(n.error);case"file":switch(m.MP.onFileCreated(e,n.file.id,"",u.contextConnector),j=s.EG.FileProcessed,r.kind){case s.Ei.MyFiles:{m.MP.onFileUploadProgress(e,90);let t=await k(n.file.file_id,d);(null==t?void 0:t.status)===s.Xf.Skipped&&p.m.danger(g.formatMessage(S.retrievalSkippedFile,{fileName:t.name}),h),m.MP.onFileUploaded(e,n.file.file_id,void 0,{fileTokenSize:t.file_size_tokens,mimeType:n.file.mime_type}),j=s.EG.RetrievalIndexCreated;break}case s.Ei.Multimodal:m.MP.onFileUploaded(e,n.file.file_id,{width:512,height:512},{mimeType:n.file.mime_type});break;case s.Ei.AceUpload:m.MP.onFileUploaded(e,n.file.file_id,void 0,{mimeType:n.file.mime_type});break;case s.Ei.DalleAgent:case s.Ei.Gizmo:case s.Ei.ProfilePicture:throw new o.vq("Use case not supported by cloud doc: ".concat(r.kind))}break;case"folder":throw new o.vq("Folder type not supported")}a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-y,type:u.contextConnector})}catch(n){c.U.addError(Error("Failed to upload connected file by ".concat(u.contextConnector),{cause:n})),Z(g,(0,f.Ad)(t.name,null==u?void 0:u.syntheticExtension),n);let r="NotInstanceOfError";if(n instanceof o.Q0){var w;r="FatalServerError_type_".concat(null!==(w=n.type)&&void 0!==w?w:"undefined")}else(n instanceof o.gK||n instanceof Error||n instanceof o.vq)&&(r=n.name);m.MP.onError(e,"error",r,{kind:s.Ei.MyFiles},j)}}async function v(e,t,r,n,s){let{width:a,height:o}=await j(t);return w(e,t,r,{kind:n},s,{imageDimensions:{width:a,height:o}})}async function k(e,t){let r=Date.now()+6e4,n=e=>new Promise(t=>setTimeout(t,e)),i=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===s.Xf.Success||r.status===s.Xf.Skipped)return r;if(r.status===s.Xf.Failed)throw new o.vq("Context extraction failed",r.error_code);i++,await n(Math.min(1e3,100*i))}throw new o.vq("Retrieval indexing timed out")}async function O(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new o.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function Z(e,t,r){let n=(0,f.kr)(e,"default_upload_error",{fileName:t});r instanceof o.vq&&null!=r.code&&(n=(0,f.kr)(e,r.code)),p.m.danger(n,h)}let S=(0,u.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},62166:function(e,t,r){"use strict";r.d(t,{Dw:function(){return w},HR:function(){return j},MP:function(){return b},gF:function(){return y}});var n=r(98601),s=r(99333),a=r(99976),o=r(61619),i=r(82363),l=r(68306),c=r(68810),u=r(24740),d=r(84082),p=r(93866),m=r(98628),f=r(66114);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let h={files:[],connectorFileData:{}},y=(0,c.Ue)(()=>h),j={hasUploadInProgress:e=>{let{files:t}=e;return t.some(e=>e.status===p.XX.Uploading)},getReadyFiles:e=>{let{files:t}=e;return t.filter(e=>e.status===p.XX.Ready)}},w={reset:()=>{y.setState(h)},uploadFile:async function(e,t,r,n,l){let c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},g=arguments.length>6?arguments[6]:void 0,x=arguments.length>7?arguments[7]:void 0,{gizmoId:h}=c,j=y.getState().files,w=(0,f.xs)(r,t.name,t.type,null==x?void 0:x.contextConnector,g),k={tempId:e,gizmoId:c.gizmoId,status:p.XX.Uploading,file:t,progress:1,fileId:null,cdnUrl:null,contextConnectorInfo:x,contextConnector:null==x?void 0:x.contextConnector};if(j.length===d.dO)a.A.logEvent(o.M.uploadedMaxFilesError),u.m.danger(l.formatMessage(v.maxUploadsAtATime,{maxUploads:d.dO,fileName:t.name}),d.$e);else if(j.some(t=>t.tempId===e))a.A.logEvent(o.M.uploadedDuplicateFileError),u.m.danger(l.formatMessage(v.duplicateFileAttached,{fileName:t.name.length>20?t.name.slice(0,19)+"…":t.name}),d.$e);else{let r;y.setState(e=>{let{files:t}=e;return{files:[...t,k]}});let a={};if(n.includes(t.type)){if(r={kind:s.Ei.Multimodal},!x){let{width:e,height:r}=await (0,m.po)(t);if(e>2048||r>2048)try{let n=await (0,f.Tu)(t,2048),s=await (0,m.po)(n);e=s.width,r=s.height,t=n}catch(e){i.U.addError(Error("Error resizing image:",{cause:e}))}a.imageDimensions={width:e,height:r}}}else switch(w){case p.AJ.Multimodal:throw Error("Multimodal file upload not supported mime type, ".concat(t.type,"\nSupported mime types: ")+n.join(", "));case p.AJ.Interpreter:r={kind:s.Ei.AceUpload};break;case p.AJ.Retrieval:r={kind:s.Ei.MyFiles},a.usesRetrievalIndex=!0;break;case p.AJ.ProfilePicture:throw Error("cannot upload profile picture via uploadFile");case p.AJ.ContextConnector:case p.AJ.None:return}null!=h&&(r={kind:s.Ei.Gizmo,gizmoId:h}),c.skipUpload||(x?await (0,m.R3)(e,t,r,n,x,c.gizmoId,l):await (0,m.cT)(e,t,l,r,b,a))}},createFileCompleted:(e,t,r,n)=>{let s=y.getState().files,a=s.findIndex(t=>t.tempId===e),o=s[a];if(a>=0&&o.status===p.XX.Uploading){let e=[...s];e.splice(a,1,x(x({},o),{},{progress:10,fileId:t,cdnUrl:r,contextConnector:n})),y.setState({files:e})}},updateProgress:(e,t)=>{let r=y.getState().files,n=r.findIndex(t=>t.tempId===e),s=r[n];if(n>=0&&s.status===p.XX.Uploading){let e=[...r];e.splice(n,1,x(x({},s),{},{progress:t})),y.setState({files:e})}},uploadCompleted:(e,t,r,n,s)=>{let i=y.getState().files,l=i.findIndex(t=>t.tempId===e);if(l>=0&&i[l].status===p.XX.Uploading&&null!=i[l].fileId){var c,u,d;let t=i[l],m=[...i],g=x(x({},t),{},{tempId:e,status:p.XX.Ready,progress:100,fileSpec:x(x({name:t.file.name,id:t.fileId,size:t.file.size,contextConnectorInfo:t.contextConnectorInfo,mimeType:null!==(c=null!==(u=null==n?void 0:n.mimeType)&&void 0!==u?u:t.file.type)&&void 0!==c?c:(0,f.s1)(t.file.name)},r||{}),n||{})});m.splice(l,1,g);let h=x({},y.getState().connectorFileData);s&&(h[null==s?void 0:s.file_id]=s),y.setState({files:m,connectorFileData:h}),a.A.logEvent(o.M.uploadFileCompleted,{status:t.status,fileId:t.fileId,contextConnector:null!==(d=t.contextConnector)&&void 0!==d?d:"local"})}},remove:(e,t,r,n,s)=>{let i=y.getState().files,l=i.findIndex(t=>t.tempId===e);if(l>=0){let e=i[l];"error"===t?a.A.logEvent(o.M.uploadFileError,{status:e.status,fileId:e.fileId,client:"web",errorClassName:null!=r?r:"undefined",useCaseType:n,uploadStatus:null!=s?s:"undefined",contextConnector:e.contextConnector}):a.A.logEvent(o.M.removeFile,{status:e.status,fileId:e.fileId});let c=[...i];c.splice(l,1),y.setState({files:c})}}},b={onFileCreated:w.createFileCompleted,onFileUploadProgress:w.updateProgress,onFileUploaded:w.uploadCompleted,onError:w.remove},v=(0,l.vU)({maxUploadsAtATime:{id:"useFilePickerState.maxUploadsAtATime",defaultMessage:"Unable to upload {fileName}. Max {maxUploads} uploads at a time"},duplicateFileAttached:{id:"useFilePickerState.duplicateFileAttached",defaultMessage:"Unable to upload {fileName} because an identical file has already been attached to this message."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return s},N:function(){return a}});var n=r(68810);let s={label:"Auto",value:""},a=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:s,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null}))},68865:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return r(43062)}])}},function(e){e.O(0,[2205,4198,6636,4089,5182,4384,3088,8500,1612,3183,2349,5162,7437,4315,6803,8557,9857,211,449,2879,6384,2888,9774,179],function(){return e(e.s=68865)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-ce56b6225d3d21fa.js.map