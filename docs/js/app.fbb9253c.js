(function(e){function n(n){for(var a,r,u=n[0],c=n[1],f=n[2],s=0,l=[];s<u.length;s++)r=u[s],o[r]&&l.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(n);while(l.length)l.shift()();return i.push.apply(i,f||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var u=t[r];0!==o[u]&&(a=!1)}a&&(i.splice(n--,1),e=c(c.s=t[0]))}return e}var a={},r={app:0},o={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"0a3e9aa4":"cddf2fc3","2d23118b":"830b9f0a","31f75955":"fdb16f84","4b47640d":"21cfc388",ef4a2a18:"7b108437"}[e]+".js"}function c(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t={"0a3e9aa4":1,"31f75955":1,ef4a2a18:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"0a3e9aa4":"496e4b7f","2d23118b":"31d6cfe0","31f75955":"cf15b443","4b47640d":"31d6cfe0",ef4a2a18:"bbe6189d"}[e]+".css",r=c.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var u=o[i],f=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(f===a||f===r))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){u=s[i],f=u.getAttribute("data-href");if(f===a||f===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,t(o)},l.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=o[e]=[n,t]});n.push(a[2]=i);var f,s=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e),f=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var d=setTimeout(function(){f({type:"timeout",target:l})},12e4);l.onerror=l.onload=f,s.appendChild(l)}return Promise.all(n)},c.m=e,c.c=a,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)c.d(t,a,function(n){return e[n]}.bind(null,a));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="",c.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],s=f.push.bind(f);f.push=n,f=f.slice();for(var l=0;l<f.length;l++)n(f[l]);var d=s;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("fb1c"),r=t.n(a);r.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("a114"),t("d14b"),t("df75"),t("1e5d"),t("7e6d");var a=t("2b0e"),r=t("e84f"),o=t("f2eb"),i=t("482e"),u=t("7646"),c=t("6580"),f=t("3a08"),s=t("dc23"),l=t("3054"),d=t("6ddb"),p=t("4e99"),h=t("a7da"),b=t("79e9"),v=t("52b5"),m=t("5d8b"),g=t("1180"),y=t("1e55"),w=t("506f"),Q=t("b8d9"),S=t("7d43"),C=t("7051"),P=t("2040"),O=t("cf12"),j=t("0952"),A=t("2a70"),k=t("c1f9"),E=t("32a1"),T=t("eebf"),x=t("46a9"),L=t("6186"),M=t("91c8"),_=t("f30c"),N=t("ce67"),B=t("1526"),I=t("2bd2"),q=t("133b");a["a"].use(r["a"],{config:{},components:{AppFullscreen:o["a"],QBtn:i["a"],QCard:u["a"],QCardTitle:c["a"],QCardMain:f["a"],QCardMedia:s["a"],QCardSeparator:l["a"],QCardActions:d["a"],QCarousel:p["a"],QCarouselSlide:h["a"],QField:b["a"],QIcon:v["a"],QInput:m["a"],QList:g["a"],QListHeader:y["a"],QItem:w["a"],QItemMain:Q["a"],QItemSide:S["a"],QLayout:C["a"],QLayoutHeader:P["a"],QLayoutDrawer:O["a"],QModal:j["a"],QModalLayout:A["a"],QOptionGroup:k["a"],QPage:E["a"],QPageSticky:T["a"],QPageContainer:x["a"],QSearch:L["a"],QItemSeparator:M["a"],QToolbar:_["a"],QToolbarTitle:N["a"]},directives:{Ripple:B["a"],CloseOverlay:I["a"]},plugins:{Notify:q["a"]}});var V=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},$=[];V._withStripped=!0;var D={name:"App"},F=D,H=(t("034f"),t("2877")),J=Object(H["a"])(F,V,$,!1,null,null,null);J.options.__file="App.vue";var G=J.exports,R=t("2f62"),z={},K=t("a709"),U=t("8d6f"),W=t("5781"),X={namespaced:!0,state:z,getters:K,mutations:U,actions:W};a["a"].use(R["a"]);var Y=function(){var e=new R["a"].Store({modules:{example:X}});return e},Z=t("8c4f"),ee=[{path:"/",component:function(){return t.e("31f75955").then(t.bind(null,"c199"))},children:[{name:"app",path:"",redirect:"/home"},{name:"app.info",path:"/info",component:function(){return t.e("ef4a2a18").then(t.bind(null,"9df3"))}},{name:"app.home",path:"/home",component:function(){return t.e("2d23118b").then(t.bind(null,"eea6"))}},{name:"app.stores",path:"/stores",component:function(){return t.e("0a3e9aa4").then(t.bind(null,"4d57"))}}]}];ee.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var ne=ee;a["a"].use(Z["a"]);var te=function(){var e=new Z["a"]({scrollBehavior:function(){return{y:0}},routes:ne,mode:"hash",base:""});return e},ae=function(){var e="function"===typeof Y?Y():Y,n="function"===typeof te?te({store:e}):te;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(G)}};return{app:t,store:e,router:n}},re=t("9483");Object(re["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var oe=t("a925"),ie={failed:"Action failed",success:"Action was successful"},ue={"en-us":ie},ce=function(e){var n=e.app,t=e.Vue;t.use(oe["a"]),n.i18n=new oe["a"]({locale:"en-us",fallbackLocale:"en-us",messages:ue})},fe=t("bc3a"),se=t.n(fe),le=function(e){var n=e.Vue;n.prototype.$axios=se.a},de=t("fe3c"),pe=t.n(de),he=ae(),be=he.app,ve=he.store,me=he.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){pe.a.attach(document.body)},!1),[ce,le].forEach(function(e){e({app:be,router:me,store:ve,Vue:a["a"],ssrContext:null})}),new a["a"](be)},5781:function(e,n){},"7e6d":function(e,n,t){},"8d6f":function(e,n){},a709:function(e,n){},fb1c:function(e,n,t){}});