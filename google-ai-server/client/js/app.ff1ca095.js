(function(){"use strict";var e={256:function(e,t,r){var n=r(144),o=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav",[t("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),t("router-link",{attrs:{to:"/Upload"}},[e._v("Upload")])],1),t("router-view")],1)},i=[],a=r(1),u={},s=(0,a.Z)(u,o,i,!1,null,null,null),l=s.exports,c=r(205);(0,c.z)("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var f=r(345),v=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[e.loading?t("b-container",[t("b-card",[t("b-skeleton",{attrs:{animation:"wave",width:"85%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"55%"}}),t("b-skeleton",{attrs:{animation:"wave",width:"70%"}})],1)],1):t("b-container",[t("b-button-group",[this.meta&&1!==this.meta.currentPage?t("b-button",{on:{click:function(t){return e.Next(-1)}}},[e._v("Previous")]):e._e(),e._v(" "+e._s(e.meta.currentPage)+" / "+e._s(e.meta.totalPages)+" ( "+e._s(e.meta.totalItems)+") "),this.meta&&this.meta.totalPages!==this.meta.currentPage?t("b-button",{on:{click:function(t){return e.Next(1)}}},[e._v("Next")]):e._e()],1),e._l(e.items,(function(r){return t("b-card",{key:r.id,on:{click:function(t){return e.View(r)}}},[t("b-card-img",{staticClass:"mb-2",staticStyle:{"max-width":"20rem"},attrs:{"img-top":"",tag:"article",src:r.imageData}}),t("b-card-body",[t("b-card-text",[e._v(" "+e._s(JSON.parse(r.jsonResult).text)+" ")])],1)],1)}))],2)],1)},p=[],d=r(655),h=r(929),g=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"hello"},[t("h1",[e._v(e._s(e.msg))]),e._m(0),t("h3",[e._v("Installed CLI Plugins")]),e._m(1),t("h3",[e._v("Essential Links")]),e._m(2),t("h3",[e._v("Ecosystem")]),e._m(3)])},b=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),t("br"),e._v(" check out the "),t("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",target:"_blank",rel:"noopener"}},[e._v("pwa")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[t("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),t("li",[t("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),t("li",[t("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),t("li",[t("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),t("li",[t("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[t("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),t("li",[t("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),t("li",[t("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"msg",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),t}return(0,d.ZT)(t,e),(0,d.gn)([(0,h.fI)()],t.prototype,"msg",void 0),t=(0,d.gn)([h.wA],t),t}(h.w3),_=m,y=_,w=(0,a.Z)(y,g,b,!1,null,"7c824ce6",null),k=w.exports,j=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return Object.defineProperty(t,"loading",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"error",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(t,"userMessage",{enumerable:!0,configurable:!0,writable:!0,value:""}),Object.defineProperty(t,"meta",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(t,"items",{enumerable:!0,configurable:!0,writable:!0,value:[]}),t}return(0,d.ZT)(t,e),Object.defineProperty(t.prototype,"View",{enumerable:!1,configurable:!0,writable:!0,value:function(e){this.$router.push("/view/".concat(e.id))}}),Object.defineProperty(t.prototype,"Next",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return(0,d.mG)(this,void 0,void 0,(function(){return(0,d.Jh)(this,(function(t){switch(t.label){case 0:return this.meta&&this.meta.currentPage+e>=0&&this.meta.currentPage+e<=this.meta.totalPages?[4,this.ListWrapper(this.meta.currentPage+e)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))}}),Object.defineProperty(t.prototype,"created",{enumerable:!1,configurable:!0,writable:!0,value:function(){return(0,d.mG)(this,void 0,void 0,(function(){return(0,d.Jh)(this,(function(e){switch(e.label){case 0:return[4,this.ListWrapper(1)];case 1:return e.sent(),[2]}}))}))}}),Object.defineProperty(t.prototype,"ListWrapper",{enumerable:!1,configurable:!0,writable:!0,value:function(e){return void 0===e&&(e=1),(0,d.mG)(this,void 0,void 0,(function(){var t,r;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:this.loading=!0,n.label=1;case 1:return n.trys.push([1,3,,4]),[4,O(e,25)];case 2:return t=n.sent(),this.meta=t.meta,this.items=t.items,console.log(t),[3,4];case 3:return r=n.sent(),this.loading=!1,this.userMessage=r.message,[3,4];case 4:return this.loading=!1,[2]}}))}))}}),t=(0,d.gn)([(0,h.wA)({components:{HelloWorld:k}})],t),t}(h.w3),P=j;function O(e,t){return(0,d.mG)(this,void 0,void 0,(function(){var r;return(0,d.Jh)(this,(function(n){switch(n.label){case 0:return[4,fetch("/api/upload/list",{method:"POST",body:JSON.stringify({limit:t,page:e})})];case 1:return r=n.sent(),r.ok?[4,r.json()]:[3,3];case 2:return[2,n.sent()];case 3:return[2]}}))}))}var x=P,C=(0,a.Z)(x,v,p,!1,null,null,null),N=C.exports;n["default"].use(f.ZP);var A=[{path:"/",name:"home",component:N},{path:"/upload",name:"upload",component:function(){return r.e(443).then(r.bind(r,442))}},{path:"/view/:id",name:"view",component:function(){return r.e(443).then(r.bind(r,295))}}],E=new f.ZP({mode:"history",base:"",routes:A}),S=E,T=r(69),L=r(17);r(24);n["default"].config.productionTip=!1,n["default"].use(T.XG7),n["default"].use(L.A7),n["default"].use(r(754)),new n["default"]({router:S,render:function(e){return e(l)}}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,i){if(!n){var a=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],i=e[c][2];for(var u=!0,s=0;s<n.length;s++)(!1&i||a>=i)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,i<a&&(a=i));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[n,o,i]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))}}(),function(){r.u=function(e){return"js/about.1ba8d98f.js"}}(),function(){r.miniCssF=function(e){return"css/about.630a8ad9.css"}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="google-ai-frontend:";r.l=function(n,o,i,a){if(e[n])e[n].push(o);else{var u,s;if(void 0!==i)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var f=l[c];if(f.getAttribute("src")==n||f.getAttribute("data-webpack")==t+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",t+i),u.src=n),e[n]=[o];var v=function(t,r){u.onerror=u.onload=null,clearTimeout(p);var o=e[n];if(delete e[n],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(v.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=v.bind(null,u.onerror),u.onload=v.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p=""}(),function(){var e=function(e,t,r,n){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)r();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),n(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var r=document.getElementsByTagName("link"),n=0;n<r.length;n++){var o=r[n],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){o=a[n],i=o.getAttribute("data-href");if(i===e||i===t)return o}},n=function(n){return new Promise((function(o,i){var a=r.miniCssF(n),u=r.p+a;if(t(a,u))return o();e(n,u,o,i)}))},o={143:0};r.f.miniCss=function(e,t){var r={443:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=n(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};r.f.j=function(t,n){var o=r.o(e,t)?e[t]:void 0;if(0!==o)if(o)n.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));n.push(o[2]=i);var a=r.p+r.u(t),u=new Error,s=function(n){if(r.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};r.l(a,s,"chunk-"+t,t)}},r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,i,a=n[0],u=n[1],s=n[2],l=0;if(a.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var c=s(r)}for(t&&t(n);l<a.length;l++)i=a[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(c)},n=self["webpackChunkgoogle_ai_frontend"]=self["webpackChunkgoogle_ai_frontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(256)}));n=r.O(n)})();
//# sourceMappingURL=app.ff1ca095.js.map