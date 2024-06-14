(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6963],{65925:function(e,t,r){var n=r(33892);e.exports=function(e,t){return n(e,t)}},89884:function(e,t,r){"use strict";t.kQ=t.ZP=void 0;var n=r(25405);Object.defineProperty(t,"ZP",{enumerable:!0,get:function(){return n.useWebSocket}}),r(57974);var o=r(28368);Object.defineProperty(t,"kQ",{enumerable:!0,get:function(){return o.ReadyState}}),r(69404),r(9482)},85118:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.attachListeners=void 0;var o=r(17659),c=r(10377),u=r(28368),s=r(9482),a=function(e,t,r){var n;if(t.current.heartbeat&&e instanceof WebSocket){var o="boolean"==typeof t.current.heartbeat?void 0:t.current.heartbeat;n=(0,c.heartbeat)(e,o)}e.onmessage=function(e){var o;null==n||n(),t.current.onMessage&&t.current.onMessage(e),("function"!=typeof t.current.filter||!0===t.current.filter(e))&&(t.current.heartbeat&&"boolean"!=typeof t.current.heartbeat&&(null===(o=t.current.heartbeat)||void 0===o?void 0:o.returnMessage)===e.data||r(e))}},i=function(e,t,r,n){e.onopen=function(e){t.current.onOpen&&t.current.onOpen(e),n.current=0,r(u.ReadyState.OPEN)}},l=function(e,t,r,n,o){var c;return u.isEventSourceSupported&&e instanceof EventSource?function(){}:((0,s.assertIsWebSocket)(e,t.current.skipAssert),e.onclose=function(e){var s;if(t.current.onClose&&t.current.onClose(e),r(u.ReadyState.CLOSED),t.current.shouldReconnect&&t.current.shouldReconnect(e)){var a=null!==(s=t.current.reconnectAttempts)&&void 0!==s?s:u.DEFAULT_RECONNECT_LIMIT;if(o.current<a){var i="function"==typeof t.current.reconnectInterval?t.current.reconnectInterval(o.current):t.current.reconnectInterval;c=window.setTimeout(function(){o.current++,n()},null!=i?i:u.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(a),console.warn("Max reconnect attempts of ".concat(a," exceeded"))}},function(){return c&&window.clearTimeout(c)})},f=function(e,t,r,o,c){var s;return e.onerror=function(a){var i;if(t.current.onError&&t.current.onError(a),u.isEventSourceSupported&&e instanceof EventSource&&(t.current.onClose&&t.current.onClose(n(n({},a),{code:1006,reason:"An error occurred with the EventSource: ".concat(a),wasClean:!1})),r(u.ReadyState.CLOSED),e.close()),t.current.retryOnError){if(c.current<(null!==(i=t.current.reconnectAttempts)&&void 0!==i?i:u.DEFAULT_RECONNECT_LIMIT)){var l="function"==typeof t.current.reconnectInterval?t.current.reconnectInterval(c.current):t.current.reconnectInterval;s=window.setTimeout(function(){c.current++,o()},null!=l?l:u.DEFAULT_RECONNECT_INTERVAL_MS)}else t.current.onReconnectStop&&t.current.onReconnectStop(t.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(t.current.reconnectAttempts," exceeded"))}},function(){return s&&window.clearTimeout(s)}};t.attachListeners=function(e,t,r,n,c,s){var d,v,p,S=t.setLastMessage,E=t.setReadyState;return r.current.fromSocketIO&&(d=(0,o.setUpSocketIOPing)(s)),a(e,r,S),i(e,r,E,c),v=l(e,r,E,n,c),p=f(e,r,E,n,c),function(){E(u.ReadyState.CLOSING),v(),p(),e.close(),d&&clearInterval(d)}}},45687:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.attachSharedListeners=void 0;var o=r(6461),c=r(28368),u=r(79841),s=r(17659),a=r(10377),i=function(e,t,r){var n;r&&e instanceof WebSocket&&(n=(0,a.heartbeat)(e,"boolean"==typeof r?void 0:r)),e.onmessage=function(e){null==n||n(),(0,u.getSubscribers)(t).forEach(function(t){t.optionsRef.current.onMessage&&t.optionsRef.current.onMessage(e),("function"!=typeof t.optionsRef.current.filter||!0===t.optionsRef.current.filter(e))&&(r&&"boolean"!=typeof r&&(null==r?void 0:r.returnMessage)===e.data||t.setLastMessage(e))})}},l=function(e,t){e.onopen=function(e){(0,u.getSubscribers)(t).forEach(function(t){t.reconnectCount.current=0,t.optionsRef.current.onOpen&&t.optionsRef.current.onOpen(e),t.setReadyState(c.ReadyState.OPEN)})}},f=function(e,t){e instanceof WebSocket&&(e.onclose=function(e){(0,u.getSubscribers)(t).forEach(function(t){t.optionsRef.current.onClose&&t.optionsRef.current.onClose(e),t.setReadyState(c.ReadyState.CLOSED)}),delete o.sharedWebSockets[t],(0,u.getSubscribers)(t).forEach(function(t){var r;if(t.optionsRef.current.shouldReconnect&&t.optionsRef.current.shouldReconnect(e)){var n=null!==(r=t.optionsRef.current.reconnectAttempts)&&void 0!==r?r:c.DEFAULT_RECONNECT_LIMIT;if(t.reconnectCount.current<n){var o="function"==typeof t.optionsRef.current.reconnectInterval?t.optionsRef.current.reconnectInterval(t.reconnectCount.current):t.optionsRef.current.reconnectInterval;setTimeout(function(){t.reconnectCount.current++,t.reconnect.current()},null!=o?o:c.DEFAULT_RECONNECT_INTERVAL_MS)}else t.optionsRef.current.onReconnectStop&&t.optionsRef.current.onReconnectStop(t.optionsRef.current.reconnectAttempts),console.warn("Max reconnect attempts of ".concat(n," exceeded"))}})})},d=function(e,t){e.onerror=function(r){(0,u.getSubscribers)(t).forEach(function(t){t.optionsRef.current.onError&&t.optionsRef.current.onError(r),c.isEventSourceSupported&&e instanceof EventSource&&(t.optionsRef.current.onClose&&t.optionsRef.current.onClose(n(n({},r),{code:1006,reason:"An error occurred with the EventSource: ".concat(r),wasClean:!1})),t.setReadyState(c.ReadyState.CLOSED))}),c.isEventSourceSupported&&e instanceof EventSource&&e.close()}};t.attachSharedListeners=function(e,t,r,n){var o;return r.current.fromSocketIO&&(o=(0,s.setUpSocketIOPing)(n)),i(e,t,r.current.heartbeat),f(e,t),l(e,t),d(e,t),function(){o&&clearInterval(o)}}},28368:function(e,t){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.isEventSourceSupported=t.isReactNative=t.ReadyState=t.DEFAULT_HEARTBEAT=t.UNPARSABLE_JSON_OBJECT=t.DEFAULT_RECONNECT_INTERVAL_MS=t.DEFAULT_RECONNECT_LIMIT=t.SOCKET_IO_PING_CODE=t.SOCKET_IO_PATH=t.SOCKET_IO_PING_INTERVAL=t.DEFAULT_EVENT_SOURCE_OPTIONS=t.EMPTY_EVENT_HANDLERS=t.DEFAULT_OPTIONS=void 0,t.DEFAULT_OPTIONS={},t.EMPTY_EVENT_HANDLERS={},t.DEFAULT_EVENT_SOURCE_OPTIONS={withCredentials:!1,events:t.EMPTY_EVENT_HANDLERS},t.SOCKET_IO_PING_INTERVAL=25e3,t.SOCKET_IO_PATH="/socket.io/?EIO=3&transport=websocket",t.SOCKET_IO_PING_CODE="2",t.DEFAULT_RECONNECT_LIMIT=20,t.DEFAULT_RECONNECT_INTERVAL_MS=5e3,t.UNPARSABLE_JSON_OBJECT={},t.DEFAULT_HEARTBEAT={message:"ping",timeout:6e4,interval:25e3},(r=t.ReadyState||(t.ReadyState={}))[r.UNINSTANTIATED=-1]="UNINSTANTIATED",r[r.CONNECTING=0]="CONNECTING",r[r.OPEN=1]="OPEN",r[r.CLOSING=2]="CLOSING",r[r.CLOSED=3]="CLOSED",t.isReactNative="undefined"!=typeof navigator&&"ReactNative"===navigator.product,t.isEventSourceSupported=!t.isReactNative&&function(){try{return"EventSource"in globalThis}catch(e){return!1}}()},36264:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.createOrJoinSocket=void 0;var n=r(6461),o=r(28368),c=r(85118),u=r(45687),s=r(79841);t.createOrJoinSocket=function(e,t,r,a,i,l,f,d){if(!o.isEventSourceSupported&&a.current.eventSourceOptions){if(o.isReactNative)throw Error("EventSource is not supported in ReactNative");throw Error("EventSource is not supported")}if(a.current.share){var v,p=null;void 0===n.sharedWebSockets[t]?(n.sharedWebSockets[t]=a.current.eventSourceOptions?new EventSource(t,a.current.eventSourceOptions):new WebSocket(t,a.current.protocols),e.current=n.sharedWebSockets[t],r(o.ReadyState.CONNECTING),p=(0,u.attachSharedListeners)(n.sharedWebSockets[t],t,a,d)):(e.current=n.sharedWebSockets[t],r(n.sharedWebSockets[t].readyState));var S={setLastMessage:i,setReadyState:r,optionsRef:a,reconnectCount:f,reconnect:l};return(0,s.addSubscriber)(t,S),v=p,function(){if((0,s.removeSubscriber)(t,S),!(0,s.hasSubscribers)(t)){try{var e=n.sharedWebSockets[t];e instanceof WebSocket&&(e.onclose=function(e){a.current.onClose&&a.current.onClose(e),r(o.ReadyState.CLOSED)}),e.close()}catch(e){}v&&v(),delete n.sharedWebSockets[t]}}}if(e.current=a.current.eventSourceOptions?new EventSource(t,a.current.eventSourceOptions):new WebSocket(t,a.current.protocols),r(o.ReadyState.CONNECTING),!e.current)throw Error("WebSocket failed to be created");return(0,c.attachListeners)(e.current,{setLastMessage:i,setReadyState:r},a,l.current,f,d)}},8688:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,c){function u(e){try{a(n.next(e))}catch(e){c(e)}}function s(e){try{a(n.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(u,s)}a((n=n.apply(e,t||[])).next())})},o=this&&this.__generator||function(e,t){var r,n,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getUrl=void 0;var c=r(17659),u=r(28368);t.getUrl=function(e,r,s){return void 0===s&&(s=0),n(void 0,void 0,void 0,function(){var n,a,i,l,f,d,v;return o(this,function(o){switch(o.label){case 0:if("function"!=typeof e)return[3,10];o.label=1;case 1:return o.trys.push([1,3,,9]),[4,e()];case 2:return n=o.sent(),[3,9];case 3:var p;if(o.sent(),!r.current.retryOnError)return[3,7];if(a=null!==(f=r.current.reconnectAttempts)&&void 0!==f?f:u.DEFAULT_RECONNECT_LIMIT,!(s<a))return[3,5];return[4,(p=null!=(i="function"==typeof r.current.reconnectInterval?r.current.reconnectInterval(s):r.current.reconnectInterval)?i:u.DEFAULT_RECONNECT_INTERVAL_MS,new Promise(function(e){return window.setTimeout(e,p)}))];case 4:return o.sent(),[2,(0,t.getUrl)(e,r,s+1)];case 5:return null===(v=(d=r.current).onReconnectStop)||void 0===v||v.call(d,s),[2,null];case 6:return[3,8];case 7:return[2,null];case 8:return[3,9];case 9:return[3,11];case 10:n=e,o.label=11;case 11:return l=r.current.fromSocketIO?(0,c.parseSocketIOUrl)(n):n,[2,r.current.queryParams?(0,c.appendQueryParams)(l,r.current.queryParams):l]}})})}},6461:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetWebSockets=t.sharedWebSockets=void 0,t.sharedWebSockets={},t.resetWebSockets=function(e){if(e&&t.sharedWebSockets.hasOwnProperty(e))delete t.sharedWebSockets[e];else for(var r in t.sharedWebSockets)t.sharedWebSockets.hasOwnProperty(r)&&delete t.sharedWebSockets[r]}},10377:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.heartbeat=void 0;var n=r(28368);t.heartbeat=function(e,t){var r=t||{},o=r.interval,c=void 0===o?n.DEFAULT_HEARTBEAT.interval:o,u=r.timeout,s=void 0===u?n.DEFAULT_HEARTBEAT.timeout:u,a=r.message,i=void 0===a?n.DEFAULT_HEARTBEAT.message:a,l=!1,f=setInterval(function(){try{"function"==typeof i?e.send(i()):e.send(i)}catch(e){}},c),d=setInterval(function(){l?l=!1:e.close()},s);return e.addEventListener("close",function(){clearInterval(f),clearInterval(d)}),function(){l=!0}}},79841:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetSubscribers=t.removeSubscriber=t.addSubscriber=t.hasSubscribers=t.getSubscribers=void 0;var r={},n=[];t.getSubscribers=function(e){return(0,t.hasSubscribers)(e)?Array.from(r[e]):n},t.hasSubscribers=function(e){var t;return(null===(t=r[e])||void 0===t?void 0:t.size)>0},t.addSubscriber=function(e,t){r[e]=r[e]||new Set,r[e].add(t)},t.removeSubscriber=function(e,t){r[e].delete(t)},t.resetSubscribers=function(e){if(e&&r.hasOwnProperty(e))delete r[e];else for(var t in r)r.hasOwnProperty(t)&&delete r[t]}},77519:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.websocketWrapper=void 0,t.websocketWrapper=function(e,t){return new Proxy(e,{get:function(e,r){var n=e[r];return"reconnect"===r?t:"function"==typeof n?(console.error("Calling methods directly on the websocket is not supported at this moment. You must use the methods returned by useWebSocket."),function(){}):n},set:function(e,t,r){return/^on/.test(t)?(console.warn("The websocket's event handlers should be defined through the options object passed into useWebSocket."),!1):(e[t]=r,!0)}})},t.default=t.websocketWrapper},17659:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setUpSocketIOPing=t.appendQueryParams=t.parseSocketIOUrl=void 0;var n=r(28368);t.parseSocketIOUrl=function(e){if(e){var t=/^https|wss/.test(e),r=e.replace(/^(https?|wss?)(:\/\/)?/,"").replace(/\/$/,""),o=t?"wss":"ws";return"".concat(o,"://").concat(r).concat(n.SOCKET_IO_PATH)}if(""===e){var t=/^https/.test(window.location.protocol),o=t?"wss":"ws",c=window.location.port?":".concat(window.location.port):"";return"".concat(o,"://").concat(window.location.hostname).concat(c).concat(n.SOCKET_IO_PATH)}return e},t.appendQueryParams=function(e,t){void 0===t&&(t={});var r=/\?([\w]+=[\w]+)/.test(e),n="".concat(Object.entries(t).reduce(function(e,t){var r=t[0],n=t[1];return e+"".concat(r,"=").concat(n,"&")},"").slice(0,-1));return"".concat(e).concat(r?"&":"?").concat(n)},t.setUpSocketIOPing=function(e,t){return void 0===t&&(t=n.SOCKET_IO_PING_INTERVAL),window.setInterval(function(){return e(n.SOCKET_IO_PING_CODE)},t)}},69404:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useEventSource=void 0;var c=r(92379),u=r(25405),s=r(28368);t.useEventSource=function(e,t,r){void 0===t&&(t=s.DEFAULT_EVENT_SOURCE_OPTIONS);var a=t.withCredentials,i=t.events,l=o(t,["withCredentials","events"]);void 0===r&&(r=!0);var f=n(n({},l),{eventSourceOptions:{withCredentials:a}}),d=(0,c.useRef)(s.EMPTY_EVENT_HANDLERS);i&&(d.current=i);var v=(0,u.useWebSocket)(e,f,r),p=v.lastMessage,S=v.readyState,E=v.getWebSocket;return(0,c.useEffect)(function(){(null==p?void 0:p.type)&&Object.entries(d.current).forEach(function(e){var t=e[0],r=e[1];t===p.type&&r(p)})},[p]),{lastEvent:p,readyState:S,getEventSource:E}}},57974:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.useSocketIO=void 0;var o=r(92379),c=r(25405),u=r(28368),s={type:"empty",payload:null},a=function(e){if(!e||!e.data)return s;var t=e.data.match(/\[.*]/);if(!t)return s;var r=JSON.parse(t);return Array.isArray(r)&&r[1]?{type:r[0],payload:r[1]}:s};t.useSocketIO=function(e,t,r){void 0===t&&(t=u.DEFAULT_OPTIONS),void 0===r&&(r=!0);var s=(0,o.useMemo)(function(){return n(n({},t),{fromSocketIO:!0})},[]),i=(0,c.useWebSocket)(e,s,r),l=i.sendMessage,f=i.sendJsonMessage,d=i.lastMessage,v=i.readyState,p=i.getWebSocket,S=(0,o.useMemo)(function(){return a(d)},[d]);return{sendMessage:l,sendJsonMessage:f,lastMessage:S,lastJsonMessage:S,readyState:v,getWebSocket:p}}},25405:function(e,t,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))(function(o,c){function u(e){try{a(n.next(e))}catch(e){c(e)}}function s(e){try{a(n.throw(e))}catch(e){c(e)}}function a(e){var t;e.done?o(e.value):((t=e.value)instanceof r?t:new r(function(e){e(t)})).then(u,s)}a((n=n.apply(e,t||[])).next())})},c=this&&this.__generator||function(e,t){var r,n,o,c,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return c={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function s(c){return function(s){return function(c){if(r)throw TypeError("Generator is already executing.");for(;u;)try{if(r=1,n&&(o=2&c[0]?n.return:c[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,c[1])).done)return o;switch(n=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,n=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){u=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){u.label=c[1];break}if(6===c[0]&&u.label<o[1]){u.label=o[1],o=c;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(c);break}o[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],n=0}finally{r=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,s])}}},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useWebSocket=void 0;var s=r(92379),a=r(95295),i=r(28368),l=r(36264),f=r(8688),d=u(r(77519)),v=r(9482);t.useWebSocket=function(e,t,r){void 0===t&&(t=i.DEFAULT_OPTIONS),void 0===r&&(r=!0);var u=(0,s.useState)(null),p=u[0],S=u[1],E=(0,s.useState)({}),b=E[0],h=E[1],O=(0,s.useMemo)(function(){if(p)try{return JSON.parse(p.data)}catch(e){return i.UNPARSABLE_JSON_OBJECT}return null},[p]),y=(0,s.useRef)(null),_=(0,s.useRef)(null),T=(0,s.useRef)(function(){}),R=(0,s.useRef)(0),N=(0,s.useRef)([]),w=(0,s.useRef)(null),I=(0,s.useRef)(t);I.current=t;var C=y.current&&void 0!==b[y.current]?b[y.current]:null!==e&&!0===r?i.ReadyState.CONNECTING:i.ReadyState.UNINSTANTIATED,k=t.queryParams?JSON.stringify(t.queryParams):null,g=(0,s.useCallback)(function(e,t){var r;if(void 0===t&&(t=!0),i.isEventSourceSupported&&_.current instanceof EventSource){console.warn("Unable to send a message from an eventSource");return}(null===(r=_.current)||void 0===r?void 0:r.readyState)===i.ReadyState.OPEN?((0,v.assertIsWebSocket)(_.current,I.current.skipAssert),_.current.send(e)):t&&N.current.push(e)},[]),A=(0,s.useCallback)(function(e,t){void 0===t&&(t=!0),g(JSON.stringify(e),t)},[g]),P=(0,s.useCallback)(function(){return!0!==I.current.share||i.isEventSourceSupported&&_.current instanceof EventSource?_.current:(null===w.current&&_.current&&((0,v.assertIsWebSocket)(_.current,I.current.skipAssert),w.current=(0,d.default)(_.current,T)),w.current)},[]);return(0,s.useEffect)(function(){if(null!==e&&!0===r){var t,u=!1,s=!0,d=function(){return o(void 0,void 0,void 0,function(){var r,o,d;return c(this,function(c){switch(c.label){case 0:return r=y,[4,(0,f.getUrl)(e,I)];case 1:if(r.current=c.sent(),null===y.current)return console.error("Failed to get a valid URL. WebSocket connection aborted."),y.current="ABORTED",(0,a.flushSync)(function(){return h(function(e){return n(n({},e),{ABORTED:i.ReadyState.CLOSED})})}),[2];return o=function(e){u||(0,a.flushSync)(function(){return S(e)})},d=function(e){u||(0,a.flushSync)(function(){return h(function(t){var r;return n(n({},t),y.current&&((r={})[y.current]=e,r))})})},s&&(t=(0,l.createOrJoinSocket)(_,y.current,d,I,o,T,R,g)),[2]}})})};return T.current=function(){u||(w.current&&(w.current=null),null==t||t(),d())},d(),function(){u=!0,s=!1,w.current&&(w.current=null),null==t||t(),S(null)}}(null===e||!1===r)&&(R.current=0,h(function(e){var t;return n(n({},e),y.current&&((t={})[y.current]=i.ReadyState.CLOSED,t))}))},[e,r,k,g]),(0,s.useEffect)(function(){C===i.ReadyState.OPEN&&N.current.splice(0).forEach(function(e){g(e)})},[C]),{sendMessage:g,sendJsonMessage:A,lastMessage:p,lastJsonMessage:O,readyState:C,getWebSocket:P}}},9482:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.resetGlobalState=t.assertIsWebSocket=void 0;var n=r(6461),o=r(79841);t.assertIsWebSocket=function(e,t){if(!t&&e instanceof WebSocket==!1)throw Error("")},t.resetGlobalState=function(e){(0,o.resetSubscribers)(e),(0,n.resetWebSockets)(e)}},49915:function(e,t,r){"use strict";r.d(t,{_:function(){return u}});var n=r(37088),o=r(92379),c=r(58076);let u=(0,o.forwardRef)((e,t)=>(0,o.createElement)(c.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))}}]);
//# sourceMappingURL=6963.519b83d58520f613.js.map