(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["329fe8cc"],{5014:function(t,e,n){"use strict";n("ac6a"),n("cadf"),n("456d"),n("7514"),n("96cf");var i=n("c973"),r=n.n(i),a=(n("551c"),n("f9d8")),s=n("f61f"),o=n("af13"),c=n("49c2"),u=s["a"].init(),l=u.axios,f="data-stores",v={stores:function(){return a["a"].get.item(f)}},p={list:function(){return new Promise(function(){var t=r()(regeneratorRuntime.mark(function t(e,n){var i,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,i=v.stores(),!navigator.onLine||i){t.next=8;break}return r="stores/store_allocate_mobile",t.next=6,l.get(r);case 6:s=t.sent,a["a"].set(f,s.data.list);case 8:e(v.stores()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),n(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,n){return t.apply(this,arguments)}}())},listRefresh:function(){return new Promise(function(){var t=r()(regeneratorRuntime.mark(function t(e,n){var i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i="stores/store_allocate_mobile",t.next=4,l.get(i);case 4:r=t.sent,a["a"].set(f,r.data.list),e(v.stores()),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),n(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,n){return t.apply(this,arguments)}}())},findById:function(t){return new Promise(function(){var e=r()(regeneratorRuntime.mark(function e(n,i){var r,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r=a["a"].get.item(t),r||(r=v.stores().find(function(e){return e.store_id===t})),e.next=5,o["a"].list();case 5:s=e.sent,n({store:r,activities:s}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),i(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}())},checkInOld:function(t){return new Promise(function(){var e=r()(regeneratorRuntime.mark(function e(n,i){var r,s,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,r=t.visit,s=a["a"].get.item(t.store_id),s||a["a"].set(t.store_id,t),!navigator.onLine||r.visit_id){e.next=11;break}return e.next=7,l.post("activityvisit",r);case 7:o=e.sent,c=o.data,r.visit_id=c.id,a["a"].set(t.store_id,t);case 11:n(t),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),i(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n){return e.apply(this,arguments)}}())},checkIn:function(t,e){t.commit("store",e);var n=e.visit;return n||(n={visit_checkin:(new Date).toISOString().substr(0,23),visit_isonline:navigator.onLine?1:0,store_id:e.store_id},e.visit=n),a["a"].set(e.store_id,e),new Promise(function(){var i=r()(regeneratorRuntime.mark(function i(r,s){var o,u,f,v,p,d,h;return regeneratorRuntime.wrap(function(i){while(1)switch(i.prev=i.next){case 0:return i.prev=0,i.t0=JSON,i.next=4,c["a"].getCurrentPosition();case 4:if(i.t1=i.sent,n.visit_gps=i.t0.stringify.call(i.t0,i.t1),!navigator.onLine||n.visit_id){i.next=16;break}for(o={},u=Object.keys(n),f=["store_id","visit_checkin","visit_gps","visit_isonline"],v=0;v<u.length;v+=1)p=u[v],f.indexOf(p)>=0&&(o[p]=n[p]);return i.next=13,l.post("activityvisit",o);case 13:d=i.sent,h=d.data,n.visit_id=h.id;case 16:t.commit("store",e),a["a"].set(e.store_id,e),r(e),i.next=24;break;case 21:i.prev=21,i.t2=i["catch"](0),s(i.t2);case 24:case"end":return i.stop()}},i,this,[[0,21]])}));return function(t,e){return i.apply(this,arguments)}}())},checkOut:function(t,e){return new Promise(function(){var n=r()(regeneratorRuntime.mark(function n(i,r){var s,o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,s=e.visit,!(navigator.onLine&&s&&s.visit_id)||s.visit_checkout){n.next=9;break}return o=(new Date).toISOString().substr(0,23),s.visit_checkout=o,n.next=7,l.put("activityvisit/".concat(s.visit_id),{visit_checkout:o});case 7:t.commit("store",e),a["a"].set(e.store_id,e);case 9:i(e),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),r(n.t0);case 15:case"end":return n.stop()}},n,this,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())}};e["a"]=p},"8dc8":function(t,e,n){},af13:function(t,e,n){"use strict";n("7514"),n("ac6a"),n("96cf");var i=n("c973"),r=n.n(i),a=(n("551c"),n("f9d8")),s=n("f61f"),o=s["a"].init(),c=o.axios,u="data-activity",l={list:function(){return a["a"].get.item(u)}},f={list:function(){return new Promise(function(){var t=r()(regeneratorRuntime.mark(function t(e,n){var i,r,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,i=l.list(),!navigator.onLine){t.next=10;break}return r="activities?activity_isactive=1&sortBy=sequence&fields=activity_id,activity_name,activity_parent,sequence",t.next=6,c.get(r);case 6:s=t.sent,i=s.data.list.filter(function(t){return""===(t.activity_parent||"")}),i.forEach(function(t){t.subs=s.data.list.filter(function(e){return e.activity_parent===t.activity_id})}),a["a"].set(u,i);case 10:e(l.list()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),n(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e,n){return t.apply(this,arguments)}}())},findOne:function(t,e){return new Promise(function(){var n=r()(regeneratorRuntime.mark(function n(i,r){var s,o,u,f;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,s=a["a"].get.item(t),o=l.list().find(function(t){return t.activity_id===e}),!navigator.onLine){n.next=9;break}return u="visibilities/list?store_id=".concat(t),n.next=7,c.get(u);case 7:f=n.sent,s.activities=f.data.list;case 9:i({store:s,activity:o}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),r(n.t0);case 15:case"end":return n.stop()}},n,this,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())},lastActivity:function(){return new Promise(function(){var t=r()(regeneratorRuntime.mark(function t(e,n){var i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,i="activityvisit/last_activities",t.next=4,c.get(i);case 4:r=t.sent,e(r),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())},detail:function(t,e){return new Promise(function(){var n=r()(regeneratorRuntime.mark(function n(i,r){var a,s,o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:a="",n.prev=1,n.t0=t,n.next="2"===n.t0?5:"3"===n.t0?7:9;break;case 5:return a="trainings/".concat(e),n.abrupt("break",11);case 7:return a="escalations/".concat(e),n.abrupt("break",11);case 9:return a="visibilities/".concat(e),n.abrupt("break",11);case 11:return n.next=13,c.get(a);case 13:s=n.sent,o=s.data,i(o),n.next=21;break;case 18:n.prev=18,n.t1=n["catch"](1),r(n.t1);case 21:case"end":return n.stop()}},n,this,[[1,18]])}));return function(t,e){return n.apply(this,arguments)}}())}};e["a"]=f},c199:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{attrs:{view:"lHh Lpr lFf"}},[n("div",{staticClass:"field-force"},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}},[n("q-icon",{attrs:{name:"menu"}})],1),n("q-toolbar-title",[t._v(t._s(t.title))]),n("q-btn",{attrs:{flat:""},on:{click:t.refresh}},[t.online?n("q-icon",{attrs:{name:"wifi"}}):t._e(),t.online?t._e():n("q-icon",{attrs:{name:"wifi_off"}})],1)],1)],1),n("q-layout-drawer",{staticClass:"sidebar-left",attrs:{"content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[n("div",{staticClass:"toolbar",attrs:{color:"primary"}},[n("div",{staticClass:"fullname"},[t._v(t._s(t.profile.user_fullname))]),n("div",{staticClass:"email"},[t._v(t._s(t.profile.user_email))]),n("div",{staticClass:"version"},[t._v(t._s(t.version))])]),t._l(t.menus,function(e,i){return n("div",{key:i},[n("q-list",{attrs:{highlight:""}},t._l(e.menus,function(e,i){return n("q-item",{key:i,attrs:{to:e.link},nativeOn:{click:function(n){t.linkClick(e.code)}}},[n("q-item-side",{attrs:{icon:e.icon}}),n("q-item-main",{attrs:{label:e.text}})],1)}))],1)}),n("div",{staticStyle:{"border-bottom":"1px solid #e0e0e0"}}),n("q-list",{attrs:{"no-border":"",link:"","inset-delimiter":""}},[n("q-item",{nativeOn:{click:function(e){t.linkClick("logout")}}},[n("q-item-side",{attrs:{icon:"logout"}}),n("q-item-main",{attrs:{label:"Log Out"}})],1)],1)],2),n("q-page-container",[n("router-view")],1)],1)])},r=[];i._withStripped=!0;n("96cf");var a=n("c973"),s=n.n(a),o=(n("7f7f"),n("49c2")),c=n("5014"),u=[{text:"Link Menus",menus:[{text:"List of Stores",link:"/stores",icon:"store"},{text:"List of Drafts",link:"/outstanding",icon:"notes"},{text:"Last Activities",link:"/history",icon:"history"},{text:"Settings",code:"refresh",icon:"settings"},{text:"About",link:"/platform",icon:"info"}]}],l={data:function(){return{menus:u,version:"0.9.60",leftDrawerOpen:this.$q.platform.is.desktop,profile:{},online:!1}},computed:{title:function(){var t={"app.stores":"Store List","app.outstanding":"Draft List","app.history":"Last Activities"};return t[this.$route.name]},status:function(){return this.$store.state.layout.status}},created:function(){this.init();var t=this,e=this.$store;window.addEventListener("offline",function(n){console.log("offline"),e.commit("isonline",!1),t.online=!1}),window.addEventListener("online",function(n){console.log("online"),e.commit("isonline",!0),t.online=!0})},methods:{init:function(){var t=s()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].current();case 2:e=t.sent,this.profile=e,this.online=navigator.onLine;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=s()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.online=navigator.onLine,!this.online){t.next=6;break}return t.next=4,c["a"].listRefresh();case 4:e=t.sent,this.$store.commit("layout/storeList",e);case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),linkClick:function(t){if(t)switch(t){case"refresh":window.location.reload(!0);break;case"logout":o["a"].logout();break;default:break}}}},f=l,v=(n("dd78"),n("2877")),p=Object(v["a"])(f,i,r,!1,null,null,null);p.options.__file="fieldforce.vue";e["default"]=p.exports},dd78:function(t,e,n){"use strict";var i=n("8dc8"),r=n.n(i);r.a}}]);