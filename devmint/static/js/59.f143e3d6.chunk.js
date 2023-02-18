(self.webpackChunkcandymachineui=self.webpackChunkcandymachineui||[]).push([[59],{77059:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>j});var r=t(97143),o=t.n(r),i=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}();const a=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return i(n,e),n}(o());var s=t(38403),c=t(1742),l=t.n(c);class u extends(o()){constructor(e,n){var t,r;if(super(),t=this,this._handleMessage=e=>{if(this._injectedProvider&&e.source===window||e.origin===this._providerUrl.origin&&e.source===this._popup)if("connected"===e.data.method){const n=new s.PublicKey(e.data.params.publicKey);this._publicKey&&this._publicKey.equals(n)||(this._publicKey&&!this._publicKey.equals(n)&&this._handleDisconnect(),this._publicKey=n,this._autoApprove=!!e.data.params.autoApprove,this.emit("connect",this._publicKey))}else if("disconnected"===e.data.method)this._handleDisconnect();else if((e.data.result||e.data.error)&&this._responsePromises.has(e.data.id)){const[n,t]=this._responsePromises.get(e.data.id);e.data.result?n(e.data.result):t(new Error(e.data.error))}},this._handleConnect=()=>(this._handlerAdded||(this._handlerAdded=!0,window.addEventListener("message",this._handleMessage),window.addEventListener("beforeunload",this.disconnect)),this._injectedProvider?new Promise((e=>{this._sendRequest("connect",{}),e()})):(window.name="parent",this._popup=window.open(this._providerUrl.toString(),"_blank","location,resizable,width=460,height=675"),new Promise((e=>{this.once("connect",e)})))),this._handleDisconnect=()=>{this._handlerAdded&&(this._handlerAdded=!1,window.removeEventListener("message",this._handleMessage),window.removeEventListener("beforeunload",this.disconnect)),this._publicKey&&(this._publicKey=null,this.emit("disconnect")),this._responsePromises.forEach(((e,n)=>{let[t,r]=e;this._responsePromises.delete(n),r("Wallet disconnected")}))},this._sendRequest=async function(e,n){if("connect"!==e&&!t.connected)throw new Error("Wallet not connected");const r=t._nextRequestId;return++t._nextRequestId,new Promise(((o,i)=>{t._responsePromises.set(r,[o,i]),t._injectedProvider?t._injectedProvider.postMessage({jsonrpc:"2.0",id:r,method:e,params:{network:t._network,...n}}):(t._popup.postMessage({jsonrpc:"2.0",id:r,method:e,params:n},t._providerUrl.origin),t.autoApprove||t._popup.focus())}))},this.connect=()=>(this._popup&&this._popup.close(),this._handleConnect()),this.disconnect=async function(){t._injectedProvider&&await t._sendRequest("disconnect",{}),t._popup&&t._popup.close(),t._handleDisconnect()},this.sign=async function(e,n){if(!(e instanceof Uint8Array))throw new Error("Data must be an instance of Uint8Array");const r=await t._sendRequest("sign",{data:e,display:n});return{signature:l().decode(r.signature),publicKey:new s.PublicKey(r.publicKey)}},this.signTransaction=async function(e){const n=await t._sendRequest("signTransaction",{message:l().encode(e.serializeMessage())}),r=l().decode(n.signature),o=new s.PublicKey(n.publicKey);return e.addSignature(o,r),e},this.signAllTransactions=async function(e){const n=await t._sendRequest("signAllTransactions",{messages:e.map((e=>l().encode(e.serializeMessage())))}),r=n.signatures.map((e=>l().decode(e))),o=new s.PublicKey(n.publicKey);return e=e.map(((e,n)=>(e.addSignature(o,r[n]),e)))},function(e){return"object"===typeof e&&null!==e}(r=e)&&function(e){return"function"===typeof e}(r.postMessage))this._injectedProvider=e;else{if(!function(e){return"string"===typeof e}(e))throw new Error("provider parameter must be an injected provider or a URL string.");this._providerUrl=new URL(e),this._providerUrl.hash=new URLSearchParams({origin:window.location.origin,network:n}).toString()}this._network=n,this._publicKey=null,this._autoApprove=!1,this._popup=null,this._handlerAdded=!1,this._nextRequestId=1,this._responsePromises=new Map}get publicKey(){return this._publicKey}get connected(){return null!==this._publicKey}get autoApprove(){return this._autoApprove}}const d=u;var f=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),p=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},h=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(s){i=[6,s],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};const _=function(e){function n(n,t,r){var o=e.call(this)||this;return o._instance=null,o.handleMessage=function(e){},o._sendRequest=function(e,n){return p(o,void 0,void 0,(function(){return h(this,(function(t){switch(t.label){case 0:return this._instance.sendRequest?[4,this._instance.sendRequest(e,n)]:[3,2];case 1:case 3:return[2,t.sent()];case 2:return this._instance._sendRequest?[4,this._instance._sendRequest(e,n)]:[3,4];case 4:throw new Error("Unsupported version of `@project-serum/sol-wallet-adapter`")}}))}))},o._handleConnect=function(){o.emit("connect")},o._handleDisconnect=function(){window.clearInterval(o._pollTimer),o.emit("disconnect")},o._network=t,o._provider=r,o}return f(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._instance.publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this._instance.connected||!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return p(this,void 0,void 0,(function(){var e=this;return h(this,(function(n){switch(n.label){case 0:return this._instance=new d(this._provider,this._network),this._instance.on("connect",this._handleConnect),this._instance.on("disconnect",this._handleDisconnect),this._pollTimer=window.setInterval((function(){var n,t;!1!==(null===(t=null===(n=e._instance)||void 0===n?void 0:n._popup)||void 0===t?void 0:t.closed)&&e._handleDisconnect()}),200),[4,this._instance.connect()];case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return p(this,void 0,void 0,(function(){return h(this,(function(e){switch(e.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return this._instance.removeAllListeners("connect"),this._instance.removeAllListeners("disconnect"),[4,this._instance.disconnect()];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return p(this,void 0,void 0,(function(){var n;return h(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signTransaction",{message:l().encode(e)})];case 1:return n=t.sent(),[2,l().decode(n.signature)]}}))}))},n.prototype.signAllTransactions=function(e){return p(this,void 0,void 0,(function(){return h(this,(function(n){switch(n.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._sendRequest("signAllTransactions",{messages:e.map((function(e){return l().encode(e)}))})];case 1:return[2,n.sent().signatures.map((function(e){return l().decode(e)}))]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),p(this,void 0,void 0,(function(){var t;return h(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._instance.sign(e,n)];case 1:return t=r.sent().signature,[2,Uint8Array.from(t)]}}))}))},n}(a);var v=t(92810),y=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),m=function(){return m=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},m.apply(this,arguments)},w=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},g=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(s){i=[6,s],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},b=function(e){function n(n,t){var r,o=this;return(o=e.call(this)||this)._publicKey=null,o._messageHandlers={},o.handleMessage=function(e){if(o._messageHandlers[e.id]){var n=o._messageHandlers[e.id],t=n.resolve,r=n.reject;delete o._messageHandlers[e.id],e.error?r(e.error):t(e.result)}},o._sendMessage=function(e){if(!o.connected)throw new Error("Wallet not connected");return new Promise((function(n,t){var r,i,a=(0,v.Z)();o._messageHandlers[a]={resolve:n,reject:t},null===(i=null===(r=o._iframe)||void 0===r?void 0:r.contentWindow)||void 0===i||i.postMessage({channel:"solflareWalletAdapterToIframe",data:m({id:a},e)},"*")}))},o._iframe=n,o._publicKey=new s.PublicKey(null===(r=null===t||void 0===t?void 0:t.toString)||void 0===r?void 0:r.call(t)),o}return y(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){return this._publicKey||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return!0},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return w(this,void 0,void 0,(function(){return g(this,(function(e){return[2]}))}))},n.prototype.disconnect=function(){return w(this,void 0,void 0,(function(){return g(this,(function(e){switch(e.label){case 0:return[4,this._sendMessage({method:"disconnect"})];case 1:return e.sent(),[2]}}))}))},n.prototype.signTransaction=function(e){return w(this,void 0,void 0,(function(){var n,t;return g(this,(function(r){switch(r.label){case 0:if(!this.connected)throw new Error("Wallet not connected");r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._sendMessage({method:"signTransaction",params:{message:l().encode(e)}})];case 2:return n=r.sent().signature,[2,l().decode(n)];case 3:throw t=r.sent(),console.log(t),new Error("Failed to sign transaction");case 4:return[2]}}))}))},n.prototype.signAllTransactions=function(e){return w(this,void 0,void 0,(function(){var n;return g(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");t.label=1;case 1:return t.trys.push([1,3,,4]),[4,this._sendMessage({method:"signAllTransactions",params:{messages:e.map((function(e){return l().encode(e)}))}})];case 2:return[2,t.sent().signatures.map((function(e){return l().decode(e)}))];case 3:throw n=t.sent(),console.log(n),new Error("Failed to sign transactions");case 4:return[2]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="hex"),w(this,void 0,void 0,(function(){var t,r;return g(this,(function(o){switch(o.label){case 0:if(!this.connected)throw new Error("Wallet not connected");o.label=1;case 1:return o.trys.push([1,3,,4]),[4,this._sendMessage({method:"signMessage",params:{data:e,display:n}})];case 2:return t=o.sent(),[2,Uint8Array.from(l().decode(t))];case 3:throw r=o.sent(),console.log(r),new Error("Failed to sign message");case 4:return[2]}}))}))},n}(a);const A=b;function E(e){return void 0===e.version}var P=t(19778).Buffer,I=function(){var e=function(n,t){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},e(n,t)};return function(n,t){if("function"!==typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=n}e(n,t),n.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),x=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function a(e){try{c(r.next(e))}catch(n){i(n)}}function s(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(a,s)}c((r=r.apply(e,n||[])).next())}))},M=function(e,n){var t,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=n.call(e,a)}catch(s){i=[6,s],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},K=function(e){var n="function"===typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")};const j=function(e){function n(t){var r=e.call(this)||this;return r._network="mainnet-beta",r._provider=null,r._adapterInstance=null,r._element=null,r._iframe=null,r._connectHandler=null,r._flutterHandlerInterval=null,r._handleEvent=function(e){var n,t,o,i;switch(e.type){case"connect_native_web":return r._collapseIframe(),r._adapterInstance=new _(r._iframe,r._network,(null===(n=e.data)||void 0===n?void 0:n.provider)||r._provider||"https://solflare.com/provider"),r._adapterInstance.on("connect",r._webConnected),r._adapterInstance.on("disconnect",r._webDisconnected),r._adapterInstance.connect(),void r._setPreferredAdapter("native_web");case"connect":return r._collapseIframe(),r._adapterInstance=new A(r._iframe,(null===(t=e.data)||void 0===t?void 0:t.publicKey)||""),r._adapterInstance.connect(),r._setPreferredAdapter(null===(o=e.data)||void 0===o?void 0:o.adapter),r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),void r.emit("connect",r.publicKey);case"disconnect":return r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),void r.emit("disconnect");case"accountChanged":return void((null===(i=e.data)||void 0===i?void 0:i.publicKey)?(r._adapterInstance=new A(r._iframe,e.data.publicKey),r._adapterInstance.connect(),r.emit("accountChanged",r.publicKey)):r.emit("accountChanged",void 0));case"collapse":return void r._collapseIframe();default:return}},r._handleResize=function(e){"full"===e.resizeMode?"fullscreen"===e.params.mode?r._expandIframe():"hide"===e.params.mode&&r._collapseIframe():"coordinates"===e.resizeMode&&r._iframe&&(r._iframe.style.top=isFinite(e.params.top)?"".concat(e.params.top,"px"):"",r._iframe.style.bottom=isFinite(e.params.bottom)?"".concat(e.params.bottom,"px"):"",r._iframe.style.left=isFinite(e.params.left)?"".concat(e.params.left,"px"):"",r._iframe.style.right=isFinite(e.params.right)?"".concat(e.params.right,"px"):"",r._iframe.style.width=isFinite(e.params.width)?"".concat(e.params.width,"px"):e.params.width,r._iframe.style.height=isFinite(e.params.height)?"".concat(e.params.height,"px"):e.params.height)},r._handleMessage=function(e){var n;if("solflareIframeToWalletAdapter"===(null===(n=e.data)||void 0===n?void 0:n.channel)){var t=e.data.data||{};"event"===t.type?r._handleEvent(t.event):"resize"===t.type?r._handleResize(t):"response"===t.type&&r._adapterInstance&&r._adapterInstance.handleMessage(t)}},r._removeElement=function(){null!==r._flutterHandlerInterval&&(clearInterval(r._flutterHandlerInterval),r._flutterHandlerInterval=null),r._element&&(r._element.remove(),r._element=null)},r._removeDanglingElements=function(){var e,n,t=document.getElementsByClassName("solflare-wallet-adapter-iframe");try{for(var r=K(t),o=r.next();!o.done;o=r.next()){var i=o.value;i.parentElement&&i.remove()}}catch(a){e={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},r._injectElement=function(){r._removeElement(),r._removeDanglingElements();var e="".concat(n.IFRAME_URL,"?cluster=").concat(encodeURIComponent(r._network),"&origin=").concat(encodeURIComponent(window.location.origin),"&version=1"),t=r._getPreferredAdapter();t&&(e+="&adapter=".concat(encodeURIComponent(t))),r._element=document.createElement("div"),r._element.className="solflare-wallet-adapter-iframe",r._element.innerHTML="\n      <iframe src='".concat(e,"' style='position: fixed; top: 0; bottom: 0; left: 0; right: 0; width: 100%; height: 100%; border: none; border-radius: 0; z-index: 99999; color-scheme: auto;' allowtransparency='true'></iframe>\n    "),document.body.appendChild(r._element),r._iframe=r._element.querySelector("iframe"),window.fromFlutter=r._handleMobileMessage,r._flutterHandlerInterval=setInterval((function(){window.fromFlutter=r._handleMobileMessage}),100),window.addEventListener("message",r._handleMessage,!1)},r._collapseIframe=function(){r._iframe&&(r._iframe.style.top="",r._iframe.style.right="",r._iframe.style.height="2px",r._iframe.style.width="2px")},r._expandIframe=function(){r._iframe&&(r._iframe.style.top="0px",r._iframe.style.bottom="0px",r._iframe.style.left="0px",r._iframe.style.right="0px",r._iframe.style.width="100%",r._iframe.style.height="100%")},r._getPreferredAdapter=function(){return localStorage&&localStorage.getItem("solflarePreferredWalletAdapter")||null},r._setPreferredAdapter=function(e){localStorage&&e&&localStorage.setItem("solflarePreferredWalletAdapter",e)},r._clearPreferredAdapter=function(){localStorage&&localStorage.removeItem("solflarePreferredWalletAdapter")},r._webConnected=function(){r._connectHandler&&(r._connectHandler.resolve(),r._connectHandler=null),r.emit("connect",r.publicKey)},r._webDisconnected=function(){r._connectHandler&&(r._connectHandler.reject(),r._connectHandler=null),r._disconnected(),r.emit("disconnect")},r._disconnected=function(){window.removeEventListener("message",r._handleMessage,!1),r._removeElement(),r._clearPreferredAdapter(),r._adapterInstance=null},r._handleMobileMessage=function(e){var n,t;null===(t=null===(n=r._iframe)||void 0===n?void 0:n.contentWindow)||void 0===t||t.postMessage({channel:"solflareMobileToIframe",data:e},"*")},(null===t||void 0===t?void 0:t.network)&&(r._network=null===t||void 0===t?void 0:t.network),(null===t||void 0===t?void 0:t.provider)&&(r._provider=null===t||void 0===t?void 0:t.provider),r}return I(n,e),Object.defineProperty(n.prototype,"publicKey",{get:function(){var e;return(null===(e=this._adapterInstance)||void 0===e?void 0:e.publicKey)||null},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"isConnected",{get:function(){var e;return!!(null===(e=this._adapterInstance)||void 0===e?void 0:e.connected)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"connected",{get:function(){return this.isConnected},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"autoApprove",{get:function(){return!1},enumerable:!1,configurable:!0}),n.prototype.connect=function(){return x(this,void 0,void 0,(function(){var e=this;return M(this,(function(n){switch(n.label){case 0:return this.connected?[2]:(this._injectElement(),[4,new Promise((function(n,t){e._connectHandler={resolve:n,reject:t}}))]);case 1:return n.sent(),[2]}}))}))},n.prototype.disconnect=function(){return x(this,void 0,void 0,(function(){return M(this,(function(e){switch(e.label){case 0:return this._adapterInstance?[4,this._adapterInstance.disconnect()]:[2];case 1:return e.sent(),this._disconnected(),this.emit("disconnect"),[2]}}))}))},n.prototype.signTransaction=function(e){return x(this,void 0,void 0,(function(){var n,t,r,o,i=this;return M(this,(function(a){switch(a.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=E(e)?e.serializeMessage():e.message.serialize(),[4,this._adapterInstance.signTransaction(n)];case 1:return t=a.sent(),E(e)?e.addSignature(this.publicKey,P.from(t)):(r=e.message.staticAccountKeys.slice(0,e.message.header.numRequiredSignatures),(o=r.findIndex((function(e){return e.equals(i.publicKey)})))>=0&&(e.signatures[o]=t)),[2,e]}}))}))},n.prototype.signAllTransactions=function(e){return x(this,void 0,void 0,(function(){var n,t,r,o,i,a,s=this;return M(this,(function(c){switch(c.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return n=e.map((function(e){return E(e)?e.serializeMessage():e.message.serialize()})),[4,this._adapterInstance.signAllTransactions(n)];case 1:for(t=c.sent(),r=0;r<e.length;r++)E(o=e[r])?o.addSignature(this.publicKey,P.from(t[r])):(i=o.message.staticAccountKeys.slice(0,o.message.header.numRequiredSignatures),(a=i.findIndex((function(e){return e.equals(s.publicKey)})))>=0&&(o.signatures[a]=t[r]));return[2,e]}}))}))},n.prototype.signMessage=function(e,n){return void 0===n&&(n="utf8"),x(this,void 0,void 0,(function(){return M(this,(function(t){switch(t.label){case 0:if(!this.connected)throw new Error("Wallet not connected");return[4,this._adapterInstance.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.sign=function(e,n){return void 0===n&&(n="utf8"),x(this,void 0,void 0,(function(){return M(this,(function(t){switch(t.label){case 0:return[4,this.signMessage(e,n)];case 1:return[2,t.sent()]}}))}))},n.prototype.detectWallet=function(e){var n;return void 0===e&&(e=10),x(this,void 0,void 0,(function(){return M(this,(function(t){return window.SolflareApp||(null===(n=window.solflare)||void 0===n?void 0:n.isSolflare)?[2,!0]:[2,new Promise((function(n){var t,r;t=setInterval((function(){var e;(window.SolflareApp||(null===(e=window.solflare)||void 0===e?void 0:e.isSolflare))&&(clearInterval(t),clearTimeout(r),n(!0))}),500),r=setTimeout((function(){clearInterval(t),n(!1)}),1e3*e)}))]}))}))},n.IFRAME_URL="https://connect.solflare.com/",n}(o())},62155:(e,n,t)=>{"use strict";var r=t(82543).Buffer;e.exports=function(e){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),t=0;t<n.length;t++)n[t]=255;for(var o=0;o<e.length;o++){var i=e.charAt(o),a=i.charCodeAt(0);if(255!==n[a])throw new TypeError(i+" is ambiguous");n[a]=o}var s=e.length,c=e.charAt(0),l=Math.log(s)/Math.log(256),u=Math.log(256)/Math.log(s);function d(e){if("string"!==typeof e)throw new TypeError("Expected String");if(0===e.length)return r.alloc(0);for(var t=0,o=0,i=0;e[t]===c;)o++,t++;for(var a=(e.length-t)*l+1>>>0,u=new Uint8Array(a);e[t];){var d=n[e.charCodeAt(t)];if(255===d)return;for(var f=0,p=a-1;(0!==d||f<i)&&-1!==p;p--,f++)d+=s*u[p]>>>0,u[p]=d%256>>>0,d=d/256>>>0;if(0!==d)throw new Error("Non-zero carry");i=f,t++}for(var h=a-i;h!==a&&0===u[h];)h++;var _=r.allocUnsafe(o+(a-h));_.fill(0,0,o);for(var v=o;h!==a;)_[v++]=u[h++];return _}return{encode:function(n){if((Array.isArray(n)||n instanceof Uint8Array)&&(n=r.from(n)),!r.isBuffer(n))throw new TypeError("Expected Buffer");if(0===n.length)return"";for(var t=0,o=0,i=0,a=n.length;i!==a&&0===n[i];)i++,t++;for(var l=(a-i)*u+1>>>0,d=new Uint8Array(l);i!==a;){for(var f=n[i],p=0,h=l-1;(0!==f||p<o)&&-1!==h;h--,p++)f+=256*d[h]>>>0,d[h]=f%s>>>0,f=f/s>>>0;if(0!==f)throw new Error("Non-zero carry");o=p,i++}for(var _=l-o;_!==l&&0===d[_];)_++;for(var v=c.repeat(t);_<l;++_)v+=e.charAt(d[_]);return v},decodeUnsafe:d,decode:function(e){var n=d(e);if(n)return n;throw new Error("Non-base"+s+" character")}}}},1742:(e,n,t)=>{var r=t(62155);e.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}}]);
//# sourceMappingURL=59.f143e3d6.chunk.js.map