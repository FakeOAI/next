(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7705,6638],{43062:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSP:function(){return et},default:function(){return er}});var n=r(98601),s=r(68986),a=r(76638),o=r(89794),i=r(30853),l=r(24740),u=r(2721),c=r(93951),d=r(42420),p=r(84760),f=r(52134),m=r(56032),g=r(88667),x=r(19841),h=r(11941),y=r.n(h),j=r(92379),w=r(49764),b=r(75325),v=r(47584),M=r(64854),k=r(11550),Z=r(6440),O=r(13350),S=r(28146),C=r(651);function N(e){let{className:t,inputClassName:r,value:n,onChange:s,placeholder:a}=e;return(0,C.jsxs)("div",{className:(0,x.default)("relative",t),children:[(0,C.jsx)(S.W1M,{className:"icon-sm absolute left-2 top-1/2 -translate-y-1/2 transform text-token-text-tertiary"}),(0,C.jsx)("input",{type:"text",value:n,onChange:s,placeholder:a,className:(0,x.default)("rounded-lg border border-gray-200 pl-8 placeholder:text-gray-500 dark:border-gray-600 dark:bg-gray-700",r),autoComplete:"off"})]})}var _=r(97537),P=r(98095),E=r(36792),D=r(24434),F=r(82363),T=r(91530),U=r.n(T),I=r(18898),A=r(60464),R=r(66587);function G(e){let{group:t,isOpen:r,onClose:n}=e,s=(0,w.Z)(),a=s.formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),o=(0,c.t)(),{0:i,1:d}=(0,j.useState)([]),{0:p,1:f}=(0,j.useState)(!1);async function m(){let e=o?.getWorkspaceId();if(!e)throw Error("No workspace ID found");f(!0);let r=await u.Z.bulkAddWorkspaceGroupUsers(e,t.id,i);l.m.success(s.formatMessage({id:"yU4Zf0",defaultMessage:"Added {numUsers} users to the group"},{numUsers:r.added_group_users.length})),n?.(),f(!1)}return(0,C.jsxs)(D.Z,{isOpen:r,onClose:n??U(),title:a,type:"success",showCloseButton:!0,primaryButton:(0,C.jsx)(k.z,{onClick:m,disabled:0===i.length||i.length>1e3,loading:p,children:(0,C.jsx)(b.Z,{id:"EpbOzA",defaultMessage:"Add users to group"})}),children:[(0,C.jsx)(B,{onChange:d}),i.length>1e3&&(0,C.jsx)("div",{className:"mt-2 text-sm text-token-text-error",children:(0,C.jsx)(b.Z,{id:"9lp0Tc",defaultMessage:"Email list is limited to {maxEmails} users at once",values:{maxEmails:1e3}})})]})}function B(e){let{onChange:t}=e,{0:r,1:n}=(0,j.useState)("");return(0,C.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,C.jsxs)("label",{htmlFor:"group-email-paste",children:[(0,C.jsx)(b.Z,{id:"qvGcSC",defaultMessage:"Emails"}),(0,C.jsx)("br",{}),(0,C.jsx)("span",{className:"text-sm text-token-text-tertiary",children:(0,C.jsx)(b.Z,{id:"Fhd+5h",defaultMessage:"Paste email addresses here, one per line:"})})]}),(0,C.jsx)(R.Z,{id:"group-email-paste",className:"h-[250px] text-sm",value:r,onChange:e=>{n(e.target.value),t(e.target.value.split("\n").map(e=>e.trim()).filter(e=>e.length>0).filter(e=>A.F.test(e)))},placeholder:"jean@example.com\njoohyun@example.com\nmuhammed@example.com\nsusan@example.com"})]})}function q(e){let{group:t,isOpen:r,onClose:n}=e,s=(0,w.Z)().formatMessage({id:"workspaceSettings.groups.addMember",defaultMessage:"Add members to the {groupName} group"},{groupName:t.name}),a=(0,c.t)(),o=a?.getWorkspaceId(),{0:i,1:l}=(0,j.useState)(""),{0:u,1:d}=(0,j.useState)(0),{data:p}=(0,I.Z)(o,u*I.I,i,I.I,f.Wk),{0:m,1:g}=(0,j.useState)([]),{0:x,1:h}=(0,j.useState)([]),{0:y,1:v}=(0,j.useState)("interactive"),M=p?Math.ceil(p.total??0/I.I):0;async function Z(e){h(t=>[...t,e]);try{await z(o,t.id,e),g(t=>[...t,e])}catch(e){F.U.addError(e)}finally{h(t=>t.filter(t=>t!==e))}}return"batch"===y?(0,C.jsx)(G,{group:t,isOpen:r,onClose:n}):(0,C.jsx)(D.Z,{type:"warning",isOpen:r,onClose:n??U(),title:s,size:"custom",className:"max-w-screen-md",showCloseButton:!0,primaryButton:(0,C.jsx)(k.z,{onClick:n,children:(0,C.jsx)(b.Z,{id:"0NAzDq",defaultMessage:"Done"})}),children:(0,C.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,C.jsxs)("div",{className:"flex flex-row justify-between",children:[(0,C.jsx)("p",{children:s}),(0,C.jsx)(k.z,{onClick:()=>{v("batch")},color:"secondary",children:(0,C.jsx)(b.Z,{id:"5GPldp",defaultMessage:"Bulk add users"})})]}),(0,C.jsx)(N,{value:i,inputClassName:"w-full",onChange:e=>{l(e.target.value)}}),(0,C.jsxs)(E.Z.Root,{className:"min-w-full",children:[(0,C.jsxs)(E.Z.Header,{children:[(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.addMember.name",defaultMessage:"Name"})}),(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.addMember.email",defaultMessage:"Email"})}),(0,C.jsx)(E.Z.HeaderCell,{})]}),(0,C.jsx)(E.Z.Body,{children:p?.items.map(e=>C.jsxs(E.Z.Row,{children:[C.jsx(E.Z.Cell,{children:e.name}),C.jsx(E.Z.Cell,{children:e.email}),C.jsx(E.Z.Cell,{textAlign:"right",className:"pr-1",children:C.jsx(k.z,{size:"small",color:"secondary",disabled:x.includes(e.id),onClick:()=>{m.includes(e.id)||Z(e.id)},icon:m.includes(e.id)?S.$As:S.Vz5,children:m.includes(e.id)?C.jsx(b.Z,{id:"workspaceSettings.groups.addMember.addButton",defaultMessage:"Added"}):C.jsx(b.Z,{id:"workspaceSettings.groups.addMember.addedButton",defaultMessage:"Add"})})})]},e.id))})]}),(0,C.jsx)("div",{className:"flex flex-row justify-center",children:(0,C.jsx)(O.t,{currentPage:u,onChangeIndex:e=>{d(e)},length:M})})]})})}async function z(e,t,r){await u.Z.addWorkspaceGroupUser(e,t,r)}function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function L(e){let{workspaceId:t,group:r,readOnly:n}=e,s=(0,w.Z)(),{0:a,1:l}=(0,j.useState)(!1),{0:c,1:g}=(0,j.useState)(""),{0:h,1:y}=(0,j.useState)(0),{data:v,isLoading:M,isPlaceholderData:Z}=(0,p.a)({queryKey:[t,"groups",r.id,c,`members-page-${h}`],queryFn:()=>u.Z.listWorkspaceGroupMembers(t,r.id,c,10*h),placeholderData:f.Wk}),{0:N,1:D}=(0,j.useState)(!1),F=(0,j.useRef)(null),T=(0,d.NL)();(0,j.useEffect)(()=>{a&&F.current&&F.current.focus()},[a]);let{mutateAsync:U}=(0,m.D)({mutationFn:async e=>await u.Z.removeWorkspaceGroupMember(t,r.id,e),onMutate:e=>(T.cancelQueries({queryKey:[t,"groups",r.id]}),T.setQueryData([t,"groups",r.id,c,`members-page-${h}`],t=>t?W(W({},t),{},{items:t.items.filter(t=>t.id!==e),total:t.total-1}):{limit:10,offset:0,items:[],total:0}),{previousData:v}),onError:(e,n,s)=>{T.setQueryData([t,"groups",r.id,`members-page-${h}`],s?.previousData),T.invalidateQueries({queryKey:[t,"groups",r.id]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),T.invalidateQueries({queryKey:[t,"groups"]})}});return(0,C.jsxs)("div",{className:"flex w-full flex-col",children:[(0,C.jsxs)("div",{className:"flex flex-row items-center",children:[(0,C.jsx)("div",{className:"border-token-border-dark mt-3 inline-block h-8 grow-0 border-b-2 text-sm font-semibold",children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.membersTableTitle",defaultMessage:"Group members"})}),(0,C.jsx)("div",{className:"grow"}),(0,C.jsx)(i.u,{label:s.formatMessage({id:"workspaceSettings.groups.searchButtonTooltip",defaultMessage:"Search members"}),children:(0,C.jsx)("div",{className:"cursor-pointer p-2",onClick:()=>{l(!0)},children:(0,C.jsx)(S.W1M,{className:"icon-sm"})})}),(0,C.jsx)("input",{type:"text",ref:F,placeholder:s.formatMessage({id:"workspaceSettings.groups.searchMembers",defaultMessage:"Filter by name or email..."}),className:(0,x.default)("bg-token-surface-primary dark:bg-token-surface-secondary border-none px-0 transition-width duration-300 ease-in-out focus:ring-0",a?"w-64":"w-0"),value:c,onChange:()=>{y(0),g(F.current?.value??"")}})]}),(0,C.jsxs)(E.Z.Root,{className:"min-w-full",children:[(0,C.jsxs)(E.Z.Header,{children:[(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.memberName",defaultMessage:"Name"})}),(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.email",defaultMessage:"Email"})}),(0,C.jsx)(E.Z.HeaderCell,{})]}),(0,C.jsx)(E.Z.Body,{className:M||Z?"opacity-50":void 0,children:null==v?(0,C.jsx)(E.Z.Row,{children:(0,C.jsx)(E.Z.Cell,{colSpan:3,children:(0,C.jsx)(_.Z,{})})}):0===v.items.length?(0,C.jsx)(E.Z.Row,{children:(0,C.jsx)(E.Z.Cell,{colSpan:3,children:""===c?(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.noMembers",defaultMessage:"No members"}):(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.noMembersForSearch",defaultMessage:"No members matched the filter"})})}):v.items.map(e=>(0,C.jsxs)(E.Z.Row,{children:[(0,C.jsx)(E.Z.Cell,{children:(0,C.jsx)("span",{className:"ml-3",children:e.name})}),(0,C.jsx)(E.Z.Cell,{children:e.email}),(0,C.jsx)(E.Z.Cell,{textAlign:"right",children:!n&&(r.is_scim_managed?(0,C.jsx)(P.Z.Root,{children:(0,C.jsx)(P.Z.Trigger,{disabled:!0,children:(0,C.jsx)(i.u,{sideOffset:0,label:s.formatMessage(o.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,C.jsx)(S.nWS,{className:"icon-sm"})})})}):(0,C.jsxs)(P.Z.Root,{children:[(0,C.jsx)(P.Z.Trigger,{className:"-my-2",children:(0,C.jsx)(S.nWS,{className:"icon-sm"})}),(0,C.jsx)(P.Z.Portal,{children:(0,C.jsx)(P.Z.Content,{children:(0,C.jsx)(P.Z.Item,{onClick:()=>U(e.id),children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.removeMember",defaultMessage:"Remove member"})})})})]}))})]},e.id))})]}),(0,C.jsxs)("div",{className:"my-2 flex flex-row justify-center",children:[!n&&!r.is_scim_managed&&(0,C.jsx)(k.z,{color:"secondary",onClick:()=>D(!0),children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})}),!n&&r.is_scim_managed&&(0,C.jsx)(i.u,{label:s.formatMessage(o.s.managedViaSCIMTooltip),side:"right",sideOffset:0,children:(0,C.jsx)(k.z,{color:"secondary",disabled:!0,children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.addMemberButton",defaultMessage:"Add member"})})}),(0,C.jsx)("div",{className:"grow"}),v&&v.items.length>0&&(0,C.jsx)(O.t,{currentPage:h,onChangeIndex:e=>{y(e)},length:Math.ceil(v.total/10)})]}),N&&(0,C.jsx)(q,{isOpen:!0,onClose:()=>{T.invalidateQueries({queryKey:[t,"groups"]}),D(!1)},group:r})]})}function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function K(e){let{workspaceId:t}=e,r=(0,w.Z)(),n=(0,c.t)(),s=!(n?.isAdminOfAccount()||n?.isOwnerOfAccount()),a=(0,d.NL)(),{0:o,1:i}=(0,j.useState)(""),{0:g,1:h}=(0,j.useState)(0),{data:y,isLoading:v,isPlaceholderData:M}=(0,p.a)({queryKey:""===o?[t,"groups",`page-${g}`]:[t,"groups","filtered",o,`page-${g}`],queryFn:()=>u.Z.getWorkspaceGroups(t,{query:o,offset:10*g}),placeholderData:f.Wk}),{0:Z,1:S}=(0,j.useState)(!1),P=e=>{e&&(h(0),i("")),S(e)},{mutateAsync:D}=(0,m.D)({mutationFn:async e=>{let{workspaceId:t,name:r}=e;return await u.Z.createWorkspaceGroup(t,r)},onMutate:e=>{let{workspaceId:t,name:r}=e;return a.cancelQueries({queryKey:[t,"groups"]}),a.setQueryData([t,"groups","page-0"],e=>(e||(e={limit:10,offset:0,items:[],total:0}),$($({},e),{},{items:[{id:"new",name:r,num_members:0,created_time:""},...e.items.slice(0,9)]}))),{previousGroups:y}},onError:(e,n,s)=>{a.setQueryData([t,"groups","page-0"],s?.previousGroups),a.invalidateQueries({queryKey:[t,"groups"]}),"Group with this name already exists."===e.message&&l.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:F}=(0,m.D)({mutationFn:async e=>await u.Z.deleteWorkspaceGroup(t,e),onMutate:e=>(a.cancelQueries({queryKey:[t,"groups","page-0"]}),a.setQueryData([t,"groups","page-0"],t=>(t||(t={items:[]}),$($({},t),{},{items:t.items.filter(t=>t.id!==e)}))),{previousGroups:y}),onError:(e,r,n)=>{a.setQueryData([t,"groups","page-0"],n?.previousGroups),a.invalidateQueries({queryKey:[t,"groups"]})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}}),{mutateAsync:T}=(0,m.D)({mutationFn:async e=>{let{workspaceId:t,groupID:r,name:n}=e;return await u.Z.updateWorkspaceGroup(t,r,n)},onMutate:e=>{let{workspaceId:t,groupID:r,name:n}=e,s=a.getQueryData([t,"groups",`page-${g}`]);return a.setQueryData([t,"groups",`page-${g}`],e=>(e||(e={items:[]}),$($({},e),{},{items:e.items.map(e=>e.id===r?$($({},e),{},{name:n}):e)}))),{previousGroups:s}},onError:(e,t,n)=>{a.setQueryData([t,"groups",`page-${g}`],n?.previousGroups),"Group with this name already exists."===e.message&&l.m.warning(r.formatMessage({id:"workspaceSettings.groups.duplicateName",defaultMessage:"Group with this name already exists"}),{duration:2})},onSettled:async()=>{await new Promise(e=>setTimeout(e,1e3)),a.invalidateQueries({queryKey:[t,"groups"]})}});return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"mb-3 mt-6 flex flex-row justify-between gap-2",children:[(0,C.jsx)(N,{inputClassName:"w-[250px]",value:o,onChange:e=>{i(e.target.value),h(0)},placeholder:r.formatMessage({id:"workspaceSettings.groups.search",defaultMessage:"Search group name"})}),!s&&(0,C.jsx)(k.z,{onClick:()=>P(!0),children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.create",defaultMessage:"Create group"})})]}),(0,C.jsxs)("div",{children:[(0,C.jsxs)(E.Z.Root,{className:"min-w-full",children:[(0,C.jsxs)(E.Z.Header,{children:[(0,C.jsx)(E.Z.HeaderCell,{}),(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.groupName",defaultMessage:"Group name"})}),(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.members",defaultMessage:"Members"})}),(0,C.jsx)(E.Z.HeaderCell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.created",defaultMessage:"Created"})}),(0,C.jsx)(E.Z.HeaderCell,{})]}),(0,C.jsxs)(E.Z.Body,{className:(0,x.default)((v||M)&&"opacity-50"),children:[Z&&(0,C.jsx)(X,{group:"new",workspaceId:t,onChangeName:async e=>{""!==e.trim()&&(D({workspaceId:t,name:e}),P(!1))},onDelete:()=>null,readOnly:s}),null==y?(0,C.jsx)(E.Z.Row,{children:(0,C.jsx)(E.Z.Cell,{colSpan:5,textAlign:"center",children:(0,C.jsx)(_.Z,{})})}):0===y.items.length?(0,C.jsx)(E.Z.Row,{children:(0,C.jsx)(E.Z.Cell,{colSpan:5,textAlign:"center",children:""===o?(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.noGroups",defaultMessage:"No groups found."}):(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.noGroupsWithFIlter",defaultMessage:"No groups found. Try changing the search query."})})}):y.items.map(e=>(0,C.jsx)(X,{group:e,workspaceId:t,onDelete:F,onChangeName:async r=>{T({workspaceId:t,groupID:e.id,name:r})},readOnly:s},e.id))]})]}),y&&(0,C.jsx)("div",{className:"text-center",children:(0,C.jsx)(O.t,{length:Math.ceil(y.total/10),currentPage:Math.min(g,Math.ceil(y.total/10)),onChangeIndex:e=>h(e)})})]})]})}function J(e){let{currentWorkspaceId:t}=e,r=(0,w.Z)();return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(y(),{children:(0,C.jsx)("title",{children:r.formatMessage(Y.title)})}),(0,C.jsx)(s.yG,{title:r.formatMessage(Y.title),subtitle:(0,C.jsx)(b.Z,{id:"NDDzzF",defaultMessage:"Only workspace admins can edit these settings."})}),(0,C.jsx)(s.hb,{showSpinner:!1,children:(0,C.jsx)(K,{workspaceId:t})})]})}function X(e){let{group:t,workspaceId:r,onChangeName:n,onDelete:s,readOnly:l}=e,u=(0,w.Z)(),{value:c}=(0,g.sB)("2091463435"),{0:d,1:p}=(0,j.useState)(!1),{0:f,1:m}=(0,j.useState)("new"===t?"":t.name),{0:x,1:h}=(0,j.useState)(!1),{0:y,1:k}=(0,j.useState)("new"===t),{0:O,1:N}=(0,j.useState)(null),_=(0,j.useRef)(null);(0,j.useEffect)(()=>{("new"===t||y)&&_.current?.focus()},[t,y]);let D=async()=>{if(""===f.trim()){m("new"===t?"":t.name),k(!1),h(!1);return}n&&(h(!0),await n(f)),h(!1),k(!1)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(E.Z.Row,{onClick:()=>p(e=>!e),className:"hover:bg-token-surface-secondary cursor-pointer",children:[(0,C.jsx)(E.Z.Cell,{children:(0,C.jsx)(M.Z,{checked:d})}),(0,C.jsxs)(E.Z.Cell,{children:["new"===t||y?(0,C.jsx)(Z.Z,{ref:_,name:"newGroupName",value:f,disabled:x,placeholder:u.formatMessage({id:"workspaceSettings.groups.groupNamePlaceholder",defaultMessage:"New group name..."}),onChange:e=>m(e.target.value),onBlur:()=>{f!==("new"===t?"":t.name)&&D()},onPressEnter:D}):t.name,c&&"new"!==t&&t.is_scim_managed&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("span",{className:"flex-grow"}),(0,C.jsx)(a.DirectorySyncResourceManagedIndication,{})]})]}),(0,C.jsx)(E.Z.Cell,{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.memberCount",defaultMessage:"{count} members",values:{count:"new"===t?"0":t.num_members}})}),(0,C.jsx)(E.Z.Cell,{children:"new"!==t&&t.created_time?(0,C.jsx)(v.Ji,{value:t.created_time,year:"numeric",month:"long",day:"numeric"}):""}),(0,C.jsx)(E.Z.Cell,{textAlign:"right",children:"new"!==t&&!l&&(t.is_scim_managed?(0,C.jsx)(P.Z.Root,{children:(0,C.jsx)(P.Z.Trigger,{disabled:!0,children:(0,C.jsx)(i.u,{sideOffset:0,label:u.formatMessage(o.s.managedViaSCIMTooltip),className:"flex",side:"right",children:(0,C.jsx)(S.nWS,{className:"icon-sm"})})})}):(0,C.jsxs)(P.Z.Root,{children:[(0,C.jsx)(P.Z.Trigger,{className:"-my-2",children:(0,C.jsx)(S.nWS,{className:"icon-sm"})}),(0,C.jsx)(P.Z.Portal,{children:(0,C.jsxs)(P.Z.Content,{children:[(0,C.jsx)(P.Z.Item,{onClick:e=>{k(!0),setTimeout(()=>{_.current?.focus()},120),e.stopPropagation()},children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.changeName",defaultMessage:"Edit name"})}),(0,C.jsx)(P.Z.Item,{onClick:e=>{N(t),e.stopPropagation()},children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.edit",defaultMessage:"Delete group"})})]})})]}))})]}),d&&"new"!==t&&(0,C.jsx)(E.Z.Row,{children:(0,C.jsx)(E.Z.Cell,{colSpan:5,className:"pl-8",children:(0,C.jsx)(L,{group:t,workspaceId:r,readOnly:l})})}),O&&(0,C.jsx)(V,{group:O,onDelete:s,onClose:()=>N(null)})]})}function V(e){let{group:t,onDelete:r,onClose:n}=e,s=(0,w.Z)().formatMessage({id:"workspaceSettings.groups.deleteGroupTitle",defaultMessage:"Delete group {groupName}?"},{groupName:t.name});return(0,C.jsx)(D.Z,{type:"warning",isOpen:!0,onClose:n,title:s,showCloseButton:!0,primaryButton:(0,C.jsx)(k.z,{color:"danger",onClick:async()=>{r(t.id),n()},children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.confirmDelete",defaultMessage:"Delete"})}),secondaryButton:(0,C.jsx)(k.z,{onClick:n,color:"secondary",children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.cancelDelete",defaultMessage:"Cancel"})}),children:(0,C.jsx)("p",{children:(0,C.jsx)(b.Z,{id:"workspaceSettings.groups.deleteGroupWarning",defaultMessage:'Are you sure you want to delete the "{groupName}" group? This action cannot be undone.',values:{groupName:t.name}})})})}let Y=(0,v.vU)({title:{id:"admin.groupsSettings.title",defaultMessage:"Groups"}});function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var et=!0;function er(e){return(0,C.jsx)(J,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},e))}er.getLayout=function(e){return(0,C.jsx)(s.ZP,{mobilePageTitle:"Groups",children:e})}},64854:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(19841),s=r(28146),a=r(651);function o(e){let{className:t,checked:r}=e;return(0,a.jsx)(s.Tg4,{className:(0,n.default)("icon-sm transform transition-transform duration-200",t,r?"rotate-0":"ltr:-rotate-90 rtl:rotate-90")})}},66587:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(98601),s=r(52088),a=r(19841),o=r(651);let i=["className"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){let{className:t}=e,r=(0,s.Z)(e,i);return(0,o.jsx)("textarea",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({className:(0,a.default)("form-textarea w-full rounded-lg border border-token-border-light bg-token-main-surface-secondary text-sm text-token-text-primary focus:border-token-text-primary focus:shadow-none focus:outline-none focus:ring-token-text-primary",t)},r))}},76638:function(e,t,r){"use strict";r.r(t),r.d(t,{DirectorySyncResourceManagedIndication:function(){return l}});var n=r(98601),s=r(75325),a=r(47584),o=r(651);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function l(){return(0,o.jsx)("div",{className:"flex items-center",children:(0,o.jsx)("div",{className:"flex rounded-md bg-orange-300 px-1 text-center text-white dark:bg-orange-800",children:(0,o.jsx)("span",{className:"text-[0.5em] font-bold leading-4",children:(0,o.jsx)(s.Z,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},u.scimIndicatorText))})})})}let u=(0,a.vU)({scimIndicatorText:{id:"workspaceIdentity.directorySyncResourceTagTitle",defaultMessage:"SCIM"}})},42606:function(e,t,r){"use strict";r.d(t,{I:function(){return a},o:function(){return o}});let n=["xlsx","pptx","docx"],s={"application/vnd.google-apps.spreadsheet":"xlsx","application/vnd.google-apps.presentation":"pptx","application/vnd.google-apps.document":"docx"};function a(e){return e?s[e.split(";")[0]]??null:null}function o(e){return e&&n.includes(e)?e:null}},84082:function(e,t,r){"use strict";r.d(t,{$e:function(){return a},EZ:function(){return o},Ql:function(){return s},dO:function(){return n},xC:function(){return i}});let n=10,s=4,a={duration:20,hasCloseButton:!0},o=512,i=536870912},93866:function(e,t,r){"use strict";r.d(t,{AJ:function(){return o},XX:function(){return l},xA:function(){return i}});var n,s,a=r(42606);let o=((n={})[n.None=0]="None",n[n.Multimodal=1]="Multimodal",n[n.Interpreter=2]="Interpreter",n[n.Retrieval=3]="Retrieval",n[n.ContextConnector=4]="ContextConnector",n[n.ProfilePicture=5]="ProfilePicture",n);function i(e){if(e)return{contextConnector:e.context_connector,sourceUrl:e.source_url,syntheticExtension:(0,a.o)(e.synthetic_extension),type:e.type}}let l=((s={}).Uploading="uploading",s.Ready="ready",s)},98628:function(e,t,r){"use strict";r.d(t,{E1:function(){return w},Sj:function(){return v},W7:function(){return x},cT:function(){return y},lU:function(){return j},po:function(){return h},sY:function(){return M}});var n=r(98601),s=r(99333),a=r(2721),o=r(92319),i=r(99976),l=r(61619),u=r(47584),c=r(88815),d=r(24740),p=r(66114);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach(function(t){(0,n.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}let g={duration:20,hasCloseButton:!0};function x(e){return JSON.stringify({file:e.name,modified:e.lastModified,currentTime:new Date().toString()})}function h(e){return new Promise((t,r)=>{let n=new FileReader,s=new Image;n.onload=()=>{s.onload=()=>t(s),s.onerror=e=>r(e),s.src=n.result},n.readAsDataURL(e)})}async function y(e,t,r,n,u,p){let f=c.N.getState().resetRateLimits,x=s.EG.Initial;i.A.logEvent(l.M.uploadFileInitiated,{client:"web",useCase:n.kind,uploadEntry:"local"});let h=p.usesRetrievalIndex?performance.now():void 0;try{let{file_id:o,upload_url:c}=await a.Z.createFile(t.name,t.size,n,!!f);u.onFileCreated(e,o,c),x=s.EG.FileCreated;let y=n.kind===s.Ei.Gizmo?n.gizmoId:void 0,j=p.shouldUpdateProgress??!1,v=p.usesRetrievalIndex??!1,k={client:"web",useCase:n.kind,uploadEntry:"local",fileId:o,fileSize:t.size};i.A.logEvent(l.M.blobStoreUploadStarted,k);let Z=await a.Z.uploadFileToAzureStorage(t,c,t=>{j&&u.onFileUploadProgress(e,10+80*t)});if(u.onFileUploadProgress(e,90),201!==Z.status&&(i.A.logEvent(l.M.blobStoreUploadError,m(m({},k),{},{error_type_name:`HTTPStatus${Z.status}`,error_msg:`HTTP status ${Z.status}: ${Z.statusText}`,error_stack:""})),b(Z,o,v)),i.A.logEvent(l.M.blobStoreUploadCompleted,k),x=s.EG.FileUploaded,await a.Z.processFileUpload(o,{gizmoId:y}),x=s.EG.FileProcessed,p.usesRetrievalIndex){let t=await w(o,y);t?.status===s.Xf.Skipped&&d.m.danger(r.formatMessage(M.retrievalSkippedFile,{fileName:t.name}),g),u.onFileUploaded(e,o,void 0,{fileTokenSize:t.file_size_tokens}),x=s.EG.RetrievalIndexCreated}else u.onFileUploaded(e,o,p.imageDimensions);null!=h&&a.Z.postRetrievalTiming({e2eLatencyMs:performance.now()-h,type:"file"})}catch(a){v(r,t.name,a);let s="NotInstanceOfError";a instanceof o.gK?s=a.name:a instanceof o.Q0?s=`FatalServerError_type_${a.type??"undefined"}`:a instanceof Error?s=a.name:a instanceof o.vq&&(s=a.name),u.onError(e,"error",s,n,x)}}async function j(e,t,r,n,s){let{width:a,height:o}=await h(t);return y(e,t,r,{kind:n},s,{imageDimensions:{width:a,height:o}})}async function w(e,t){let r=Date.now()+6e4,n=e=>new Promise(t=>setTimeout(t,e)),i=0;for(;Date.now()<r;){let r=await a.Z.getRetrievalStatus(e,t);if(r.status===s.Xf.Success||r.status===s.Xf.Skipped)return r;if(r.status===s.Xf.Failed)throw new o.vq("Context extraction failed",r.error_code);i++,await n(Math.min(1e3,100*i))}throw new o.vq("Retrieval indexing timed out")}async function b(e,t){let r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n="Unknown error";try{n=await e.data}catch(e){}throw r&&a.Z.markFileUploadFailed(t,{error:n}),new o.vq("File upload to blobstore failed","failed_upload_to_blobstore")}function v(e,t,r){let n=(0,p.kr)(e,"default_upload_error",{fileName:t});r instanceof o.vq&&null!=r.code&&(n=(0,p.kr)(e,r.code)),d.m.danger(n,g)}let M=(0,u.vU)({retrievalSkippedFile:{id:"useFilePickerState.retrievalSkippedFile",defaultMessage:'Unable to extract text from "{fileName}"'}})},66114:function(e,t,r){"use strict";r.d(t,{$H:function(){return x},$p:function(){return N},Ad:function(){return U},B:function(){return T},BV:function(){return E},CO:function(){return _},Iy:function(){return m},KL:function(){return S},L8:function(){return g},O6:function(){return j},Tu:function(){return D},VF:function(){return y},Vm:function(){return P},WI:function(){return F},YN:function(){return b},Z8:function(){return C},Zp:function(){return Z},_0:function(){return k},kr:function(){return h},p0:function(){return O},s1:function(){return v},ww:function(){return w},xs:function(){return M}});var n=r(99333),s=r(16757),a=r(2721),o=r(86025),i=r(58695),l=r(82363),u=r(92379),c=r(49764),d=r(47584),p=r(24740),f=r(93866);function m(e){return e.replace("file-service://","")}function g(e){return"file-service://"+e}function x(e){return e.startsWith("file-service://")}function h(e,t,r){switch(t){case"file_zero_bytes":return e.formatMessage(I.fileZeroBytes,r);case"file_too_large":return e.formatMessage(I.fileTooLarge,r);case"over_user_quota":return e.formatMessage(I.overUserQuota,r);case"file_not_found":case"file_expired":return e.formatMessage(I.fileNotFound,r);case"file_timed_out":return e.formatMessage(I.fileTimedOut,r);case"ace_pod_expired":return e.formatMessage(I.codeInterpreterSessionTimeout,r);case"permission_error":return e.formatMessage(I.permissionError,r);case"default_upload_error":case"file_rejected":return e.formatMessage(I.defaultCreateEntryError,r);case"default_download_link_error":return e.formatMessage(I.defaultDownloadLinkError,r);case"file_empty":return e.formatMessage(I.fileEmpty,r);case"too_many_tokens":return e.formatMessage(I.fileTooManyTokens,r);case"file_encrypted":return e.formatMessage(I.fileEncrypted,r);case"file_corrupted":return e.formatMessage(I.fileCorrupted,r);case"failed_upload_to_blobstore":return e.formatMessage(I.failedUploadToBlobStore,r);default:return e.formatMessage(I.unknownError)}}function y(){let e=(0,c.Z)();return(0,u.useCallback)((t,r)=>h(e,t,r),[e])}function j(){let{session:e}=(0,i.kP)(),{isUnauthenticated:t}=(0,o.u)(),r=(0,c.Z)();return async(s,o)=>{if(!t&&null==e)return p.m.danger(r.formatMessage(I.fileDownloadFailed)),!1;try{let e=await a.Z.getFileDownloadLink(s,void 0,t);if(e.status!==n.KF.Success)throw Error("File is not ready to download: "+JSON.stringify(e));let r=e.download_url,i=document.createElement("a");i.href=r,i.download=o,i.click(),window.open(r,"_blank")}catch(e){return p.m.danger(r.formatMessage(I.fileDownloadFailed)),!1}return!0}}function w(e,t){return t?.kind===s.OL.GizmoInteraction||t?.kind===s.OL.GizmoTest?t.gizmo?.product_features:e?.product_features}function b(e,t){let r=w(e,t);return r?.attachments?.type===n.Cd.CodeInterpreter?f.AJ.Interpreter:r?.attachments?.type===n.Cd.Multimodal?f.AJ.Multimodal:r?.attachments?.type===n.Cd.Retrieval?f.AJ.Retrieval:r?.attachments?.type===n.Cd.ContextConnector?f.AJ.ContextConnector:f.AJ.None}function v(e){return({md:"text/markdown",java:"text/x-java",py:"text/x-script.python",c:"text/x-c",cpp:"text/x-c++",h:"text/x-c++",php:"text/x-php",rb:"text/x-ruby",tex:"application/x-latext",ts:"text/x-typescript",cs:"text/x-csharp"})[e.split(".").pop()?.toLowerCase()??""]||""}function M(e,t,r,n,s){if(null==s)return e;let a=v(t);a&&(r=a),n&&(r=function(e){switch(e){case"application/vnd.google-apps.spreadsheet":return"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";case"application/vnd.google-apps.document":case"application/vnd.google-apps.presentation":return"text/plain";default:return e}}(r));let{accepted_mime_types:o,can_accept_all_mime_types:i}=s;return null!=o&&0!==o.length&&i?o.includes(r)?e:f.AJ.Interpreter:e}function k(e,t,r){let s=""!==t?t:v(r),a=e?.product_features?.attachments;return null==a?void 0:a.accepted_mime_types?.includes(s)?a.type:a.image_mime_types?.includes(s)?n.Cd.Multimodal:n.Cd.CodeInterpreter}function Z(e,t){let r=w(e,t);return r?.attachments?.can_accept_all_mime_types?void 0:r?.attachments?.accepted_mime_types}function O(e,t){let{attachments:r}=w(e,t)??{};return r?.image_mime_types?r.image_mime_types:r?.type==="multimodal"?r.accepted_mime_types??S:[]}let S=["image/png","image/jpeg","image/gif","image/webp"];function C(e){return(0,u.useMemo)(()=>{if(void 0===e)return{};let t={"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"]};return{accept:e.reduce((e,r)=>(r in t?e[r]=t[r]:r.includes("/")&&(e[r]=[`.${r.split("/")[1]}`]),e),{})}},[e])}function N(e){return e.split(".").pop()?.toLowerCase()}function _(e){let t=N(e);return null!=t&&["jpg","jpeg","png","gif","webp"].includes(t)}function P(e){let t=N(e);return null!=t&&["xls","xlsx","csv"].includes(t)}function E(e){let t=N(e);return null!=t&&["xls","xlsx"].includes(t)}function D(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"fit";return new Promise((n,s)=>{let a=new FileReader;a.onerror=e=>{l.U.addError(Error("File reading has failed:",{cause:e})),s(Error("Failed to read the file."))},a.onload=a=>{let o=new Image;o.onerror=e=>{l.U.addError(Error("Image loading has failed:",{cause:e})),s(Error("Failed to load the image."))},o.onload=()=>{let a=document.createElement("canvas"),i,u=0,c=0;switch(r){case"fill":case"square":i=t/Math.min(o.width,o.height);break;case"fit":i=t/Math.max(o.width,o.height)}let d=o.width*i,p=o.height*i;"square"===r?(a.width=t,a.height=t,u=(t-d)/2,c=(t-p)/2):(a.width=d,a.height=p);let f=a.getContext("2d");if(null==f){l.U.addError("Canvas context creation failed. Your environment might not fully support HTML5 canvas."),s(Error("Failed to create canvas context."));return}f.drawImage(o,u,c,d,p);let m=e.type||"image/png";a.toBlob(t=>{t?n(new File([t],e.name,{type:m})):(l.U.addError("Blob creation failed. Blob is null."),s(Error("Failed to create blob from image data.")))},m)},null==a.target?(l.U.addError("Event target is null. Failed to load image."),s("Failed to load image.")):o.src=a.target.result},a.readAsDataURL(e)})}function F(e,t){return D(e,t,"square")}function T(e){let t=e.name.split("/")??[];return(t[t.length-1]??"").replace(/[-_]/g," ").split(".")[0]}function U(e,t){return t?e.slice(0,-t.length-1):e}let I=(0,d.vU)({defaultCreateEntryError:{id:"fileUpload.defaultCreateEntryError",defaultMessage:"Unable to upload {fileName}"},defaultDownloadLinkError:{id:"fileUpload.defaultDownloadLinkError",defaultMessage:"Failed to get upload status for {fileName}"},unknownError:{id:"fileUpload.unknownError",defaultMessage:"Unknown error occurred"},fileZeroBytes:{id:"fileUpload.fileZeroBytes",defaultMessage:"File is empty"},fileTooLarge:{id:"fileUpload.fileTooLarge",defaultMessage:"File is too large"},overUserQuota:{id:"fileUpload.overUserQuota",defaultMessage:"User quota exceeded"},fileNotFound:{id:"fileUpload.fileNotFound",defaultMessage:"File not found"},fileTimedOut:{id:"fileUpload.fileTimedOut",defaultMessage:"File upload timed out. Please try again."},fileEmpty:{id:"fileUpload.fileEmpty",defaultMessage:"No text could be extracted from this file."},fileTooManyTokens:{id:"fileUpload.fileTooManyTokens",defaultMessage:"This file contains too much text content. Please try again with a smaller file."},fileEncrypted:{id:"fileUpload.fileEncrypted",defaultMessage:"This file is encrypted/requires a password to access. Please try again with an unencrypted file."},fileCorrupted:{id:"fileUpload.fileCorrupted",defaultMessage:"This file is corrupted. Please ensure the file is not corrupted and try again."},codeInterpreterSessionTimeout:{id:"fileUpload.codeInterpreterSessionTimeout",defaultMessage:"Code interpreter session expired"},permissionError:{id:"fileUpload.permissionError",defaultMessage:"Missing permission to access file"},fileDownloadFailed:{id:"filesModal.fileDownloadFailed",defaultMessage:"File download failed. Please try again."},failedUploadToBlobStore:{id:"fileUpload.failedUploadToBlobStore",defaultMessage:"Failed upload to files.oaiusercontent.com. Please ensure your network settings allow access to this site or contact your network administrator."}})},88815:function(e,t,r){"use strict";r.d(t,{J:function(){return s},N:function(){return a}});var n=r(68810);let s={label:"Auto",value:""},a=(0,n.Ue)(()=>({forceParagen:!1,forceParagenModel:s,forceNulligen:!1,forceIndepthFeedback:!1,forceIndepthFeedbackPrompt:"The user has opted in to provide additional feedback on the previous response. Encourage the user to share feedback that you can store in a memory to better meet their needs in future. Use no more than 3 turns. If at any point the user indicates no longer wanting to provide feedback, return to the original topic.",forceRateLimit:!1,resetRateLimits:!1,showDebugConversationTurns:!1,rebaseSystemMessageContent:null,forceUseSearch:null}))},68865:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/groups",function(){return r(43062)}])}},function(e){e.O(0,[4160,4198,5239,4089,6030,5592,3991,5113,4398,2349,4335,2745,2804,4993,4315,7005,3809,3127,8986,2888,9774,179],function(){return e(e.s=68865)}),_N_E=e.O()}]);
//# sourceMappingURL=groups-26c12870701d86af.js.map