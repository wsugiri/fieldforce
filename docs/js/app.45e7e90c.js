(function(e){function n(n){for(var a,r,c=n[0],u=n[1],s=n[2],f=0,l=[];f<c.length;f++)r=c[f],o[r]&&l.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(n);while(l.length)l.shift()();return i.push.apply(i,s||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,r=1;r<t.length;r++){var c=t[r];0!==o[c]&&(a=!1)}a&&(i.splice(n--,1),e=u(u.s=t[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({}[e]||e)+"."+{"06a832c5":"13bf6151","219f4870":"eccc8649","270a3399":"296c2140","2d0be69d":"3ccc1a8b","2d0dd0ab":"b344b93a","2d23118b":"27eeaaa7","329fe8cc":"781cbc67","3e1f74fe":"9fa0f571","2917d815":"19f83ff0","3404f688":"778b5905","6a389924":"d2c1cb0c","7d4c9611":"6b3a370d","4575d46e":"ac9959e1","4b47640d":"21cfc388","6bde8879":"d4659d41","755ceb27":"358eb837","790aac7f":"41eeda00","7dd88d60":"c3477d73",cabf894a:"738cd157",e900e314:"7b3d5597",ef4a2a18:"7b108437"}[e]+".js"}function u(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"06a832c5":1,"219f4870":1,"270a3399":1,"329fe8cc":1,"3e1f74fe":1,"2917d815":1,"3404f688":1,"6a389924":1,"7d4c9611":1,"4575d46e":1,"6bde8879":1,"755ceb27":1,"790aac7f":1,"7dd88d60":1,cabf894a:1,e900e314:1,ef4a2a18:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var a="css/"+({}[e]||e)+"."+{"06a832c5":"09c78bf9","219f4870":"343d4801","270a3399":"7f9cbde5","2d0be69d":"31d6cfe0","2d0dd0ab":"31d6cfe0","2d23118b":"31d6cfe0","329fe8cc":"fd96350b","3e1f74fe":"a442185b","2917d815":"dcbafc21","3404f688":"7761ceba","6a389924":"3cd1244c","7d4c9611":"3cd1244c","4575d46e":"93486c66","4b47640d":"31d6cfe0","6bde8879":"d3a621f0","755ceb27":"94fd258a","790aac7f":"5b938035","7dd88d60":"b23f949d",cabf894a:"85086de3",e900e314:"3a65be82",ef4a2a18:"bbe6189d"}[e]+".css",r=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===r))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===a||s===r)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var a=n&&n.target&&n.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,t(o)},l.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(l)}).then(function(){r[e]=0}));var a=o[e];if(0!==a)if(a)n.push(a[2]);else{var i=new Promise(function(n,t){a=o[e]=[n,t]});n.push(a[2]=i);var s,f=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=c(e),s=function(n){l.onerror=l.onload=null,clearTimeout(d);var t=o[e];if(0!==t){if(t){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,t[1](i)}o[e]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:l})},12e4);l.onerror=l.onload=s,f.appendChild(l)}return Promise.all(n)},u.m=e,u.c=a,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)u.d(t,a,function(n){return e[n]}.bind(null,a));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],f=s.push.bind(s);s.push=n,s=s.slice();for(var l=0;l<s.length;l++)n(s[l]);var d=f;i.push([0,"vendor"]),t()})({0:function(e,n,t){e.exports=t("2f39")},"034f":function(e,n,t){"use strict";var a=t("fb1c"),r=t.n(a);r.a},"1e5d":function(e,n,t){},"2f39":function(e,n,t){"use strict";t.r(n);t("ac6a"),t("a114"),t("d14b"),t("df75"),t("1e5d"),t("7e6d");var a=t("2b0e"),r=t("e84f"),o=t("f2eb"),i=t("482e"),c=t("7646"),u=t("6580"),s=t("3a08"),f=t("dc23"),l=t("3054"),d=t("6ddb"),p=t("4e99"),b=t("a7da"),m=t("db35"),h=t("79e9"),g=t("52b5"),v=t("5d8b"),y=t("1180"),w=t("1e55"),S=t("506f"),k=t("b8d9"),Q=t("7d43"),P=t("91c8"),x=t("206e"),C=t("7051"),O=t("2040"),I=t("cf12"),A=t("0952"),L=t("2a70"),j=t("c1f9"),N=t("32a1"),T=t("eebf"),_=t("46a9"),E=t("6186"),M=t("895f"),J=t("f30c"),B=t("ce67"),R=t("1526"),q=t("2bd2"),z=t("133b"),$=t("a9a0"),U=t("2256"),V=t("f9d8");a["a"].use(r["a"],{config:{},components:{AppFullscreen:o["a"],QBtn:i["a"],QCard:c["a"],QCardTitle:u["a"],QCardMain:s["a"],QCardMedia:f["a"],QCardSeparator:l["a"],QCardActions:d["a"],QCarousel:p["a"],QCarouselSlide:b["a"],QCarouselControl:m["a"],QField:h["a"],QIcon:g["a"],QInput:v["a"],QList:y["a"],QListHeader:w["a"],QItem:S["a"],QItemMain:k["a"],QItemSide:Q["a"],QItemSeparator:P["a"],QInnerLoading:x["a"],QLayout:C["a"],QLayoutHeader:O["a"],QLayoutDrawer:I["a"],QModal:A["a"],QModalLayout:L["a"],QOptionGroup:j["a"],QPage:N["a"],QPageSticky:T["a"],QPageContainer:_["a"],QSearch:E["a"],QSpinnerGears:M["a"],QToolbar:J["a"],QToolbarTitle:B["a"]},directives:{Ripple:R["a"],CloseOverlay:q["a"]},plugins:{Notify:z["a"],Loading:$["a"],LoadingBar:U["a"],LocalStorage:V["a"]}});var D=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"q-app"}},[t("router-view")],1)},F=[];D._withStripped=!0;var G=t("49c2"),H={name:"App",created:function(){var e=G["a"].validate();e||this.$router.push("/login")}},K=H,W=(t("034f"),t("2877")),X=Object(W["a"])(K,D,F,!1,null,null,null);X.options.__file="App.vue";var Y=X.exports,Z=t("2f62");a["a"].use(Z["a"]);var ee=function(){var e=new Z["a"].Store({state:{stores:[],activities:[],outstanding:[],store:{},visibility:{},training:{},eskalasi:{},isonline:!1},mutations:{stores:function(e,n){e.stores=n},activities:function(e,n){e.activities=n},outstanding:function(e,n){e.outstanding=n},store:function(e,n){e.store=n},visibility:function(e,n){e.visibility=n},training:function(e,n){e.training=n},eskalasi:function(e,n){e.eskalasi=n},isonline:function(e,n){e.isonline=n}}});return e},ne=t("8c4f"),te=[{path:"/",component:function(){return t.e("329fe8cc").then(t.bind(null,"c199"))},children:[{name:"app",path:"",redirect:"/home"},{name:"app.info",path:"/info",component:function(){return t.e("ef4a2a18").then(t.bind(null,"9df3"))}},{name:"app.stores",path:"/stores",component:function(){return t.e("06a832c5").then(t.bind(null,"4d57"))}},{name:"app.platform",path:"/platform",component:function(){return t.e("2d0be69d").then(t.bind(null,"2fc6"))}},{name:"app.outstanding",path:"/outstanding",component:function(){return t.e("7dd88d60").then(t.bind(null,"2f0f"))}},{name:"app.draft",path:"/draft",component:function(){return t.e("755ceb27").then(t.bind(null,"5780"))}},{name:"app.history",path:"/history",component:function(){return t.e("6bde8879").then(t.bind(null,"8d57"))}}]},{path:"/activity",component:function(){return t.e("2d0dd0ab").then(t.bind(null,"8063"))},children:[{name:"checkin",path:"/checkin/:id",component:function(){return t.e("e900e314").then(t.bind(null,"75a7"))}},{name:"visibility",path:"/visibility/:id",component:function(){return t.e("cabf894a").then(t.bind(null,"ae68"))}},{name:"visibility_detail",path:"/visibility/:id/:vid",component:function(){return Promise.all([t.e("3e1f74fe"),t.e("7d4c9611")]).then(t.bind(null,"808b"))}},{name:"visibility_visit",path:"/visit/:id/:vid",component:function(){return Promise.all([t.e("3e1f74fe"),t.e("6a389924")]).then(t.bind(null,"2556"))}},{name:"promo",path:"/promo/:id",component:function(){return t.e("270a3399").then(t.bind(null,"d34c"))}},{name:"promo_detail",path:"/promos/:id/:pid",component:function(){return t.e("790aac7f").then(t.bind(null,"db0d"))}},{name:"stock",path:"/stock/:id",component:function(){return t.e("4575d46e").then(t.bind(null,"a5c5"))}},{name:"training",path:"/training/:id",component:function(){return Promise.all([t.e("3e1f74fe"),t.e("2917d815")]).then(t.bind(null,"76cc"))}},{name:"eskalasi",path:"/eskalasi/:id",component:function(){return Promise.all([t.e("3e1f74fe"),t.e("3404f688")]).then(t.bind(null,"2ca8"))}}]},{name:"home",path:"/home",component:function(){return t.e("2d23118b").then(t.bind(null,"eea6"))}},{name:"login",path:"/login",component:function(){return t.e("219f4870").then(t.bind(null,"c6f7"))}}];te.push({path:"*",component:function(){return t.e("4b47640d").then(t.bind(null,"e51e"))}});var ae=te;a["a"].use(ne["a"]);var re=function(){var e=new ne["a"]({scrollBehavior:function(){return{y:0}},routes:ae,mode:"hash",base:""});return e},oe=function(){var e="function"===typeof ee?ee():ee,n="function"===typeof re?re({store:e}):re;e.$router=n;var t={el:"#q-app",router:n,store:e,render:function(e){return e(Y)}};return{app:t,store:e,router:n}},ie=t("9483");Object(ie["a"])("service-worker.js",{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(e){console.log("Service worker has been registered.")},cached:function(e){console.log("Content has been cached for offline use.")},updatefound:function(e){console.log("New content is downloading.")},updated:function(e){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var ce=t("a925"),ue={failed:"Action failed",success:"Action was successful"},se={"en-us":ue},fe=function(e){var n=e.app,t=e.Vue;t.use(ce["a"]),n.i18n=new ce["a"]({locale:"en-us",fallbackLocale:"en-us",messages:se})},le=t("bc3a"),de=t.n(le),pe=function(e){var n=e.Vue;n.prototype.$axios=de.a,console.log("-- plugin axios --")},be=t("fe3c"),me=t.n(be),he=oe(),ge=he.app,ve=he.store,ye=he.router;/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&document.addEventListener("DOMContentLoaded",function(){me.a.attach(document.body)},!1),[fe,pe].forEach(function(e){e({app:ge,router:ye,store:ve,Vue:a["a"],ssrContext:null})}),new a["a"](ge)},"49c2":function(e,n,t){"use strict";t("96cf");var a=t("c973"),r=t.n(a),o=(t("551c"),t("f61f")),i=o["a"].init(),c=i.authToken,u=i.authUser,s=i.axios;function f(e,n){e.response&&e.response.data?n(e.response.data):n(e)}var l={me:function(){var e=localStorage.getItem(u);if(e){var n=JSON.parse(e);return n}return null},validate:function(){var e=JSON.parse(localStorage.getItem(c)),n=JSON.parse(localStorage.getItem(u));return!(!e||!n)&&(s.defaults.headers.Authorization=e.token,this.save(e,n),!0)},login:function(e){return new Promise(function(){var n=r()(regeneratorRuntime.mark(function n(t,a){var r,o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.post("auth/login-mobile",e);case 3:r=n.sent,o=r.data,s.defaults.headers.Authorization=o.token,t(o),n.next=12;break;case 9:n.prev=9,n.t0=n["catch"](0),f(n.t0,a);case 12:case"end":return n.stop()}},n,this,[[0,9]])}));return function(e,t){return n.apply(this,arguments)}}())},save:function(e,n){localStorage.setItem(c,JSON.stringify(e)),localStorage.setItem(u,JSON.stringify(n))},current:function(){return new Promise(function(){var e=r()(regeneratorRuntime.mark(function e(n,t){var a,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!navigator.onLine){e.next=9;break}return e.next=4,s.get("auth/me");case 4:a=e.sent,r=a.data,n(r),e.next=10;break;case 9:n(l.me());case 10:e.next=15;break;case 12:e.prev=12,e.t0=e["catch"](0),f(e.t0,t);case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(n,t){return e.apply(this,arguments)}}())},logout:function(){localStorage.removeItem("data-stores"),localStorage.removeItem("data-activity"),localStorage.removeItem("ff-pwa.me"),localStorage.removeItem("ff-pwa.tk"),window.location.href=""},getCurrentPosition:function(){return new Promise(function(e,n){try{navigator.geolocation.getCurrentPosition(function(n){var t=n.coords;e({latitude:t.latitude,longitude:t.longitude,accuracy:t.accuracy})})}catch(e){n(e)}})}};n["a"]=l},"7e6d":function(e,n,t){},f61f:function(e,n,t){"use strict";var a=t("bc3a"),r=t.n(a),o="ff-pwa.tk",i="ff-pwa.me",c="https://clh7cmbk3k.execute-api.ap-southeast-1.amazonaws.com/dev/api",u="http://fieldforce.seegolabs.com/api/buckets";n["a"]={init:function(){var e=localStorage.getItem(o)?JSON.parse(localStorage.getItem(o)).token:"",n=localStorage.getItem(i)?JSON.parse(localStorage.getItem(i)):"";return{authToken:o,authUser:i,user:n,axios:r.a.create({baseURL:c,headers:{Authorization:e,Accept:"application/json","Content-type":"application/json","Acces-Control-Allow-Origin":"*"}})}},resolveImage:function(e){return"".concat(u,"/").concat(e)}}},fb1c:function(e,n,t){}});