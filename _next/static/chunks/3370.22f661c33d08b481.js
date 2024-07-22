"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3370],{39181:function(e,t,r){r.d(t,{T:function(){return C},Z:function(){return F}});var a=r(7569),l=r(65998);r(59810);var n=r(19841),o=r(92379),s=r(75172),i=r(62984),c=r(48198),d=r(97410),u=r(55969);let p=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/,m=e=>0!==e.length&&e.reduce((e,t)=>e&&p.test(t),!0);var g=r(651);function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}let f=(0,o.forwardRef)((e,t)=>{let{chart:r}=e,{datasets:a}=r,l=(0,o.useMemo)(()=>a.map(e=>{let{data:t,label:r,colors:a}=e;return{label:r,data:t,backgroundColor:a,borderColor:a,borderRadius:4}}),[a]);return(0,g.jsx)(u.$Q,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1,text:r.title},tooltip:{enabled:!0,animation:{duration:0},mode:"point",position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:6,left:16,right:16},yAlign:"bottom",callbacks:{title:function(e){return e[0].formattedValue},label:()=>""}}},scales:{x:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({title:{display:!1},grid:{display:!1},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},ticks:{display:!0,autoSkip:!1}},m(r.labels)?{type:"time"}:{}),y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}}},data:{labels:r.labels,datasets:l}})});function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}f.displayName="BarChart";let h=(0,o.forwardRef)((e,t)=>{let{chart:r}=e,{datasets:a}=r,l=(0,o.useMemo)(()=>{let e=a.length;return a.map(t=>{let{data:r,label:a,colors:l}=t,n=r.length;return{label:a,data:r,backgroundColor:l,borderColor:l,pointRadius:0,pointHoverRadius:5,pointHitRadius:10,tension:.2,borderWidth:x(e,n),pointBackgroundColor:["rgba(255, 255, 255, 1)"],pointBorderWidth:3,pointHoverBorderWidth:3}})},[a]);return(0,g.jsx)(u.x1,{ref:t,options:{maintainAspectRatio:!1,scales:{x:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({title:{display:!1,text:r.x_label},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},grid:{display:!1},ticks:{display:!0}},m(r.labels)?{type:"time"}:{}),y:{title:{display:!1,text:r.y_label},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},plugins:{legend:{display:!1},title:{display:!1,text:r.title},tooltip:{enabled:!0,mode:"point",animation:{duration:0},position:"nearest",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(e){return e[0].label},label:function(e){let{dataset:{label:t},parsed:{y:r}}=e;return"".concat(t?"".concat(t,": "):"").concat(r.toFixed(2))}}}}},data:{labels:r.labels,datasets:l}})}),x=(e,t)=>t>15?1:e>10?e>50?.5:1:3;h.displayName="LineChart";var w=r(36241);let j=(0,o.forwardRef)((e,t)=>{let{chart:r}=e,{datasets:a}=r,l=(0,o.useMemo)(()=>{let e=getComputedStyle(document.documentElement);return a.map(t=>{let{data:r,colors:a,label:l}=t;return{label:l,data:r,backgroundColor:a,borderWidth:2,borderColor:[e.getPropertyValue("--main-surface-primary").trim()]}})},[a]);return(0,g.jsx)("div",{className:"h-full w-full py-2",children:(0,g.jsx)(u.by,{ref:t,options:{responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1},title:{display:!1},tooltip:{enabled:!0,animation:{duration:0},mode:"index",position:"average",backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:e=>e[0].formattedValue,label:function(e){let t=r.labels[e.dataIndex],l=a[0],n=parseFloat((l.data[e.dataIndex]/Number(l.data.reduce((e,t)=>Number(e)+Number(t),0))*100).toFixed(2));return"".concat(t," \xb7 ").concat(n,"%")}}},datalabels:{color:"white",textAlign:"center",font:{weight:"bold",size:16},backgroundColor:function(e){return e.dataset.data[e.dataIndex]/Number(e.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?"rgba(0, 0, 0, 0.1)":"transparent"},borderRadius:15,padding:{top:6,bottom:6,left:8,right:8},formatter:(e,t)=>e/Number(t.dataset.data.reduce((e,t)=>Number(e)+Number(t),0))*100>=15?e.toFixed(2):""}}},plugins:[w.Z],data:{labels:r.labels,datasets:l}})})});function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}j.displayName="PieChart";let O=(0,o.forwardRef)((e,t)=>{let{chart:r}=e,{datasets:a}=r,l=(0,o.useMemo)(()=>{let e=a.reduce((e,t)=>e+t.data.length,0);return a.map(t=>{let{data:r,label:a,colors:l}=t;return{label:a,data:r,backgroundColor:l,borderColor:l,pointRadius:e>50?e>200?2:4:8,pointHoverRadius:e>50?4:8}})},[a]);return(0,g.jsx)(u.bp,{ref:t,options:{maintainAspectRatio:!1,scales:{x:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach(function(t){(0,d.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({title:{display:!1},time:{unit:"day",displayFormats:{day:"yyyy-MM-dd"},tooltipFormat:"yyyy-MM-dd"},grid:{display:!1},ticks:{display:!0}},m(r.labels)?{type:"time"}:{}),y:{title:{display:!1},grid:{lineWidth:e=>0===e.tick.value?0:1},border:{dash:[3,3]}}},elements:{point:{radius:0}},plugins:{legend:{display:!1},title:{display:!1,text:r.title},tooltip:{enabled:!0,mode:"point",position:"nearest",animation:{duration:0},backgroundColor:"rgba(0, 0, 0, 1)",titleColor:"white",titleFont:{size:16,weight:"bold"},bodyFont:{size:12},displayColors:!1,bodyColor:"rgba(255, 255, 255, 0.7)",cornerRadius:8,caretSize:6,padding:{top:12,bottom:12,left:16,right:16},callbacks:{title:function(){return""},label:function(e){let t=e.dataset.label?"".concat(e.dataset.label,": "):"";return"".concat(t," X=").concat(e.parsed.x.toFixed(2),", Y=").concat(e.parsed.y.toFixed(2)," \n")}}}}},data:{labels:r.labels,datasets:l}})});O.displayName="ScatterChart",l.kL.register(l.qi,l.uw,l.f$,l.ZL,l.Dx,l.u,l.De,l.ST,l.od,l.jn,l.FB);let C=16,N={bar:f,pie:j,line:h,scatter:O};function P(e){let{item:t,formattedName:r}=e;return(0,g.jsxs)("div",{className:"inline-flex items-center gap-1",children:[(0,g.jsx)("div",{className:"h-3 w-3 rounded-sm",style:{backgroundColor:t.color}}),r]})}function k(e){let{items:t,hideAxisLabels:r=!1,xLabel:a="",yLabel:l=""}=e,n=(0,s.Z)();function o(e,t){let r=t.indexOf(e);return r<t.length-2?"".concat(e.name,", "):r===t.length-2?"".concat(e.name).concat(t.length>2?", ":" "," ").concat(n.formatMessage({id:"Gt7UQw",defaultMessage:"and"})):e.name}return(0,g.jsxs)("div",{className:"flex w-full flex-wrap items-center gap-1 px-4 text-xs text-token-text-primary",children:[!r&&(0,g.jsx)(i.Z,{id:"Wn04Wd",defaultMessage:"{yLabel} by {xLabel}",values:{xLabel:(0,g.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,g.jsx)(c.Vis,{className:"icon-sm text-token-text-secondary"}),a]}),yLabel:(0,g.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,g.jsx)(c.tcB,{className:"icon-sm text-token-text-secondary"}),l]})}}),t.length>1&&t.length<C&&(r?(0,g.jsx)(i.Z,{id:"WKJKdH",defaultMessage:"For {legendItems}",values:{legendItems:t.map((e,r)=>(0,g.jsx)(P,{item:e,formattedName:o(e,t)},r))}}):(0,g.jsx)(i.Z,{id:"Isulib",defaultMessage:"for {legendItems}",values:{legendItems:t.map((e,r)=>(0,g.jsx)(P,{item:e,formattedName:o(e,t)},r))}}))]})}let M=(0,o.forwardRef)((e,t)=>{let{chart:r}=e,l=(0,o.useRef)(null);(0,o.useImperativeHandle)(t,()=>({getBase64Image:()=>{if(!l.current){a.U.addError("Chart instance is not yet available.");return}return l.current.toBase64Image()}}));let s=(0,o.useCallback)(()=>{if("pie"!==r.chart_type)return r.datasets.map(e=>({name:e.label,color:Array.isArray(e.colors)?e.colors[0]:e.colors}));{let e=r.datasets[0].colors;if(e&&Array.isArray(e))return r.labels.map((t,r)=>{var a;return{name:t,color:null!==(a=e[r])&&void 0!==a?a:""}})}return[]},[r]);if(r.chart_type in N==!1)return(0,g.jsx)(i.Z,{id:"Chart.invalidChartType",defaultMessage:"Invalid chart type"});let c=N[r.chart_type];return(0,g.jsxs)("div",{className:"flex h-full w-full flex-col items-center",children:[(0,g.jsx)("div",{className:"w-full flex-initial",style:{flexBasis:"28px"},children:(0,g.jsx)(k,{xLabel:r.x_label,yLabel:r.y_label,items:s(),hideAxisLabels:"pie"===r.chart_type})}),(0,g.jsx)("div",{className:(0,n.default)("flex w-full flex-grow items-center justify-center px-4 pb-3"),style:{minHeight:"0"},children:(0,g.jsx)(c,{chart:r,ref:l})})]})});M.displayName="Chart";var F=M},75941:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(97410),l=r(95290),n=r(96546),o=r(15690);r(41441);var s=r(99140),i=r(66943),c=r(92379),d=r(75172),u=r(2501),p=r(651);function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function y(e){let{table:t,height:r,width:a,isInFocusedView:l=!1,className:m=""}=e,{targetedContent:y,setTargetedContent:b}=(0,u.Q)(),{0:h,1:x}=(0,c.useState)([]),w=getComputedStyle(document.documentElement),j=(0,d.Z)();(0,c.useEffect)(()=>{t.columnNames.length>0&&x(t.columnNames.map((e,t)=>({id:"id:".concat(t),title:e,maxWidth:500})))},[t.columnNames]);let{0:v,1:O}=(0,c.useState)({columns:n.EV.empty(),rows:n.EV.empty()}),C=(0,c.useCallback)(function(e){let[r,a]=e,l=t.rows[a];return{kind:function(e){switch(e){case"number":return n.p6.Number;case"imageUrl":return n.p6.Image;default:return n.p6.Text}}(t.columnTypes[r]),data:l[r],allowOverlay:!0,readonly:!0,displayData:String(l[r]),allowWrapping:!0,contentAlignment:"left"}},[t.columnTypes,t.rows]),N=(0,c.useCallback)(e=>{if(e.columns.length>0){let r=e.columns.items.flatMap(e=>t.columnNames.slice(e[0],e[1]));s.A.logEvent(i.M.adaColumnTargeted);let a=r.length>1?j.formatMessage({id:"B+HlXu",defaultMessage:"{totalColumns} columns"},{totalColumns:r.length}):j.formatMessage({id:"KnFSJb",defaultMessage:'"{columnName}" column'},{columnName:r[0]});b({type:"object",label:a,isFocusedViewContent:l,createNewCompletionParams:e=>f(e,"The user has selected the columns:  ".concat(r.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),a)})}else if(e.rows.length>0){let r=e.rows.items.flatMap(e=>{let[t,r]=e,a=[];for(let e=t;e<r;e++)a.push(e);return a}),a=r.length>1?j.formatMessage({id:"vFstNk",defaultMessage:"{totalRows} rows"},{totalRows:r.length}):j.formatMessage({id:"43/z2q",defaultMessage:"#{rowIndex} row"},{rowIndex:r[0]+1});s.A.logEvent(i.M.adaRowTargeted),b({type:"object",label:a,isFocusedViewContent:l,createNewCompletionParams:e=>f(e,"The user has selected rows at the following indices: ".concat(r.map(e=>'"'.concat(e,'"')).join(", ")," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),a)})}else if(e.current){let r=e.current.range.x,a=e.current.range.y,n=e.current.range.x+e.current.range.width,o=e.current.range.y+e.current.range.height,c=(n-r)*(o-a),d="";1===c&&(d=t.rows[e.current.cell[1]][e.current.cell[0]]),s.A.logEvent(i.M.adaRangeTargeted);let u=c>1?j.formatMessage({id:"Ia9GsC",defaultMessage:"{totalCells} cells"},{totalCells:c}):j.formatMessage({id:"MEl4hN",defaultMessage:'"{cellContent}" cell'},{cellContent:d});b({type:"object",isFocusedViewContent:l,label:u,createNewCompletionParams:e=>f(e,"The user has selected a range at the iloc: ".concat(a,":").concat(o,", ").concat(r,":").concat(n," in the ").concat(t.name," table ").concat(t.sheetName?" in the ".concat(t.sheetName," sheet"):""),u)})}0===e.columns.length&&0===e.rows.length&&void 0===e.current&&b(void 0),O(e)},[t.columnNames,b,l,t.rows,j,t.name,t.sheetName]);(0,c.useEffect)(()=>{void 0===y&&O({columns:n.EV.empty(),rows:n.EV.empty()})},[y]);let P=(0,c.useCallback)(e=>{var r;let a=t.rows[e];if(!a)return 44;let l=null!==(r=a.reduce((e,t)=>((null==e?void 0:e.length)||0)>((null==t?void 0:t.length)||0)?e:t))&&void 0!==r?r:"",n=h[a.indexOf(l)],o=(null==n?void 0:n.width)||150,s=Math.ceil(l.length/(o/8));return 24+(s<4?s:4)*20},[t.rows,h]);(0,c.useEffect)(()=>{if(!document.getElementById("portal")){let e=document.createElement("div");e.id="portal",e.style.position="fixed",e.style.left="0",e.style.top="0",e.style.zIndex="9999",document.body.appendChild(e)}return()=>{let e=document.getElementById("portal");e&&document.body.removeChild(e)}},[]);let k=(0,c.useCallback)(()=>t.rows&&t.rows.length>999?10+10*String(t.rows.length).length:30,[t.rows]);return(0,p.jsx)(o.F,{getCellContent:C,columns:h,rows:t.rows.length,gridSelection:v,onGridSelectionChange:N,smoothScrollX:!0,smoothScrollY:!0,overscrollX:50,className:m,rowMarkers:"clickable-number",height:r,width:a,rowMarkerTheme:{bgCell:w.getPropertyValue("--main-surface-secondary").trim(),textLight:w.getPropertyValue("--text-primary").trim()},theme:{textDark:w.getPropertyValue("--text-primary").trim(),textMedium:w.getPropertyValue("--text-primary").trim(),textLight:w.getPropertyValue("--text-primary").trim(),textHeader:w.getPropertyValue("--text-primary").trim(),bgHeader:w.getPropertyValue("--main-surface-secondary").trim(),bgCell:w.getPropertyValue("--main-surface-primary").trim(),bgBubbleSelected:w.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHovered:w.getPropertyValue("--main-surface-tertiary").trim(),bgHeaderHasFocus:w.getPropertyValue("--main-surface-tertiary").trim(),accentColor:w.getPropertyValue("--selection").trim(),drilldownBorder:w.getPropertyValue("--selection").trim(),editorFontSize:"400 14px",baseFontStyle:"400 14px",markerFontStyle:"400 14px",headerFontStyle:"500 14px",cellHorizontalPadding:12,cellVerticalPadding:10},rowMarkerWidth:k(),rowHeight:P,verticalBorder:!0,minColumnWidth:40,maxColumnWidth:500,onColumnResize:(e,t,r)=>{t>=40&&t<=500&&x(a=>{let l=[...a];return l[r]=g(g({},e),{},{width:t}),l})}})}function f(e,t,r){let a=(0,l.bm)(t);return g(g({},e),{},{messageMetadata:g(g({},e.messageMetadata),{},{targeted_reply:t,targeted_reply_label:r}),appendMessages:null==e.appendMessages?[a]:[...e.appendMessages,a]})}},92819:function(e,t,r){r.d(t,{t:function(){return x}});var a=r(97410),l=r(39181),n=r(96530),o=r(19841),s=r(92379),i=r(62984),c=r(75172),d=r(48609),u=r(48198),p=r(651);function m(e){let{colorList:t,label:r,color:a,onColorUpdate:l}=e;return(0,p.jsxs)(d.Z.Root,{children:[(0,p.jsx)(d.Z.Trigger,{asChild:!0,children:(0,p.jsxs)("div",{className:"flex w-full items-center justify-between py-2 pl-4 pr-3.5 hover:bg-token-main-surface-secondary",children:[(0,p.jsx)("span",{className:"max-w-28 truncate text-sm",children:r||(0,p.jsx)(i.Z,{id:"UnyV2o",defaultMessage:"Dataset"})}),(0,p.jsxs)("div",{className:"flex gap-1",children:[(0,p.jsx)("div",{className:"h-4 w-4 rounded-sm",style:{backgroundColor:a}}),(0,p.jsx)(u.ob9,{className:"icon-sm"})]})]})}),(0,p.jsx)(d.Z.Portal,{children:(0,p.jsx)(d.Z.Content,{className:"flex min-w-36 flex-col gap-4 p-4 align-middle",sideOffset:5,side:"right",children:(0,p.jsx)(g,{currentColor:a,colorList:t,onUpdate:l})})})]})}function g(e){let{colorList:t,currentColor:r,onUpdate:a}=e,{0:l,1:n}=(0,s.useState)(null!=r?r:""),i=(0,c.Z)(),d=e=>/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"grid grid-cols-4 flex-wrap gap-2",children:t.map((e,t)=>(0,p.jsx)("button",{onClick:()=>{n(e),a(e)},className:(0,o.default)("flex h-6 w-6 items-center justify-center rounded-md"),style:{backgroundColor:e},children:r===e&&(0,p.jsx)(u.$As,{className:"text-white"})},t))}),(0,p.jsxs)("div",{className:"flex h-6 rounded-md border border-token-border-light",children:[(0,p.jsx)("div",{className:"flex w-6 items-center justify-center bg-gray-200 px-2 py-1 text-sm text-gray-500",children:"#"}),(0,p.jsx)("input",{className:(0,o.default)("w-16 flex-1 rounded-r-md  border-0 p-2 text-xs uppercase leading-6 outline-none"),placeholder:i.formatMessage({id:"3xKVHs",defaultMessage:"F1B023"}),value:l.slice(1),onChange:e=>{let t="#".concat(e.target.value);n(t),d(t)&&a(t)}})]})]})}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach(function(t){(0,a.Z)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function b(e){let{chartData:t,setChartData:r}=e,a=t.datasets[0].colors?[...t.datasets[0].colors]:[...n.w];return(0,p.jsx)(p.Fragment,{children:t.labels.map((e,l)=>(0,p.jsx)(m,{label:e,colorList:n.w,color:a[l],onColorUpdate:e=>{Array.isArray(a)?a[l]=e:a=[e],t.datasets[0].colors=a,null==r||r(f({},t))}},l))})}function h(e){let{chartData:t,setChartData:r}=e;return(0,p.jsx)(p.Fragment,{children:t.datasets.map((e,a)=>(0,p.jsx)(m,{label:e.label,colorList:n.w,color:e.colors?Array.isArray(e.colors)?e.colors[0]:e.colors:"",onColorUpdate:a=>{e.colors=[a],null==r||r(f({},t))}},a))})}function x(e){let{chartData:t,setChartData:r}=e;return(0,p.jsxs)(d.Z.Root,{children:[(0,p.jsx)(d.Z.Trigger,{className:"h-5 px-0 hover:bg-transparent",asChild:!0,children:(0,p.jsx)("button",{children:(0,p.jsx)(u.KAl,{className:(0,o.default)("icon-md text-token-text-tertiary hover:text-token-text-primary")})})}),(0,p.jsx)(d.Z.Portal,{children:(0,p.jsx)(d.Z.Content,{className:"flex min-w-48 max-w-xs flex-col px-0 py-1",sideOffset:7,children:t&&t.datasets.length<l.T&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("span",{className:"py-2 pl-4 pr-3.5 text-xs font-semibold text-token-text-quaternary",children:(0,p.jsx)(i.Z,{id:"yYiKvS",defaultMessage:"Colors"})}),(0,p.jsx)("div",{className:"flex max-h-36 flex-col overflow-auto",children:"pie"===t.chart_type?(0,p.jsx)(b,{chartData:t,setChartData:r}):(0,p.jsx)(h,{chartData:t,setChartData:r})})]})})})]})}},96530:function(e,t,r){r.d(t,{w:function(){return a}});let a=["#FFAF00","#F46920","#F53255","#F857C1","#29BDFD","#00CBBF","#01C159","#9DCA1C"]},4153:function(e,t,r){r.d(t,{$:function(){return i}});var a=r(48198),l=r(21389),n=r(88600),o=r(62984),s=r(651);let i=e=>{let{isHovered:t=!1}=e;return(0,s.jsx)(l.M,{children:t&&(0,s.jsxs)(n.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{type:"tween",ease:"easeInOut",duration:.2},className:"absolute bottom-2 right-2 flex items-center justify-center rounded-md border border-token-border-light bg-token-main-surface-primary px-3 py-2 text-xs text-token-text-secondary",children:[(0,s.jsx)(a.D2w,{className:"icon-md mr-2"}),(0,s.jsx)(o.Z,{id:"ILz2tL",defaultMessage:"Interactive charts of this type not yet supported"})]})})}},12432:function(e,t,r){r.d(t,{i:function(){return l}});var a=r(96530);let l=(e,t,r)=>{let l;let{colors:n}=t;return Array.isArray(l=n&&n.length>0?n:"pie"===e?t.data.map((e,t)=>a.w[t%a.w.length]):a.w[r%a.w.length])?l:[l]}},39887:function(e,t,r){r.d(t,{W:function(){return n}});var a=r(74864),l=r(11655);let n=e=>{let{file_name:t="",context_connector_info:r}=e,{source_url:n=null,context_connector:o,synthetic_extension:s}=null!=r?r:{},i=null;if(r&&o){var c;let e=null!==(c=null!=s?s:(0,l.$p)(t))&&void 0!==c?c:null;i=(0,a.JQ)(o,e)}return{sourceUrl:n,contextConnectorName:i}}},15739:function(e,t,r){r.d(t,{W:function(){return i},d:function(){return s}});var a=r(34608),l=r(72988),n=r(7569),o=r(11655);let s=async e=>{if(null==e.image_url){n.U.addError("No image url provided for download");return}let t=(0,o.Iy)(e.image_url),r=await l.Z.getFileDownloadLink(t);if(r.status===a.KF.Success){let e=await fetch(r.download_url),t=await e.blob();i(URL.createObjectURL(t),"output.png")}},i=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.createElement("a");r.href=e,t&&(r.download=t),r.click()}}}]);
//# sourceMappingURL=3370.22f661c33d08b481.js.map