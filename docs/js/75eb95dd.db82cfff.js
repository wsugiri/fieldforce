(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["75eb95dd"],{"0743":function(t,e,i){},"0831":function(t,e,i){"use strict";var a=i("0743"),s=i.n(a);s.a},1142:function(t,e,i){"use strict";var a=i("c2aa"),s=i.n(a);s.a},2353:function(t,e,i){"use strict";var a=i("ea8d"),s=i.n(a);s.a},"297f":function(t,e,i){},"2d5c":function(t,e,i){},5014:function(t,e,i){"use strict";i("7514"),i("96cf");var a=i("c973"),s=i.n(a),n=(i("551c"),i("f9d8")),r=i("f61f"),o=i("af13"),c=r["a"].init(),l=c.axios,u="data-stores",v={stores:function(){return n["a"].get.item(u)}},d={list:function(){return new Promise(function(){var t=s()(regeneratorRuntime.mark(function t(e,i){var a,s,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=v.stores(),!navigator.onLine||a){t.next=8;break}return s="stores/store_allocate_mobile",t.next=6,l.get(s);case 6:r=t.sent,n["a"].set(u,r.data.list);case 8:e(v.stores()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),i(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,i){return t.apply(this,arguments)}}())},listRefresh:function(){return new Promise(function(){var t=s()(regeneratorRuntime.mark(function t(e,i){var a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a="stores/store_allocate_mobile",t.next=4,l.get(a);case 4:s=t.sent,n["a"].set(u,s.data.list),e(v.stores()),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),i(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,i){return t.apply(this,arguments)}}())},findById:function(t){return new Promise(function(){var e=s()(regeneratorRuntime.mark(function e(i,a){var s,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,s=n["a"].get.item(t),s||(s=v.stores().find(function(e){return e.store_id===t})),e.next=5,o["a"].list();case 5:r=e.sent,i({store:s,activities:r}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),a(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,i){return e.apply(this,arguments)}}())},checkIn:function(t){return new Promise(function(){var e=s()(regeneratorRuntime.mark(function e(i,a){var s,r,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s=t.visit,r=n["a"].get.item(t.store_id),r||n["a"].set(t.store_id,t),!navigator.onLine||s.visit_id){e.next=11;break}return e.next=7,l.post("activityvisit",s);case 7:o=e.sent,c=o.data,s.visit_id=c.id,n["a"].set(t.store_id,t);case 11:i(t),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),a(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,i){return e.apply(this,arguments)}}())},checkOut:function(t){return new Promise(function(){var e=s()(regeneratorRuntime.mark(function e(i,a){var s,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s=t.visit,!s||!s.visit_id){e.next=14;break}if(r=(new Date).toISOString().substr(0,23),s.visit_checkout=r,!navigator.onLine){e.next=13;break}return e.next=8,l.put("activityvisit/".concat(s.visit_id),{visit_checkout:r});case 8:return e.next=10,d.listRefresh();case 10:n["a"].remove(t.store_id),e.next=14;break;case 13:n["a"].set(t.store_id,t);case 14:i(t),e.next=20;break;case 17:e.prev=17,e.t0=e["catch"](0),a(e.t0);case 20:case"end":return e.stop()}},e,this,[[0,17]])}));return function(t,i){return e.apply(this,arguments)}}())}};e["a"]=d},"5ee8":function(t,e,i){},"84a3":function(t,e,i){},"9bd1":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkIn()}}},[t._v("Check In")])],1),i("q-page",[i("q-carousel",{attrs:{color:"white",arrows:"","quick-nav":"",height:"300px"}},t._l(t.images,function(t,e){return i("q-carousel-slide",{key:e,attrs:{"img-src":t}})})),i("div",{staticClass:"store-profile"},[i("v-store-profile",{attrs:{store:t.store}})],1)],1),i("q-modal",{ref:"activity",attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},on:{show:t.onShowModal},model:{value:t.activity,callback:function(e){t.activity=e},expression:"activity"}},[i("q-modal-layout",[i("v-activity",{attrs:{store:t.store}})],1)],1)],1)},s=[];a._withStripped=!0;i("ac6a"),i("96cf");var n=i("c973"),r=i.n(n),o=(i("f490"),i("ad89")),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-activity"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkOut()}}},[t._v("Check Out")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("q-list",{staticClass:"q-pt-none q-pb-none",attrs:{link:"",separator:"",sparse:""}},t._l(t.activities,function(e,a){return i("q-item",{key:a,nativeOn:{click:function(i){t.activityClick(e)}}},[i("q-item-main",[t._v(t._s(e.activity_name))]),i("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}))],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[i("q-modal-layout",[i("v-visibility",{attrs:{store:t.store,list:t.subs}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.training,callback:function(e){t.training=e},expression:"training"}},[i("q-modal-layout",[i("v-training",{attrs:{store:t.store},on:{close:function(e){t.training=!1}}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.eskalasi,callback:function(e){t.eskalasi=e},expression:"eskalasi"}},[i("q-modal-layout",[i("v-eskalasi",{attrs:{store:t.store},on:{close:function(e){t.eskalasi=!1}}})],1)],1)],1)},l=[];c._withStripped=!0;i("b54a");var u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibilities"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"keyboard_arrow_left"}}),i("q-toolbar-title",[t._v("Visibility")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),t._l(t.list,function(e,a){return i("q-card",{key:a,nativeOn:{click:function(i){t.showDetail(e)}}},[i("q-card-main",[i("q-item",{attrs:{link:""}},[i("q-item-main",[t._v("\n            "+t._s(e.activity_name)+"\n            "),e.model?i("div",{staticClass:"q-caption text-weight-thin"},[t._v("terpasang: "+t._s(e.model.qty_items))]):t._e()]),i("div",{staticClass:"icon-visibility",class:e.model?"visited":""},[i("i",{staticClass:"fa fa-check"})])],1)],1)],1)})],2),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility_detail,callback:function(e){t.visibility_detail=e},expression:"visibility_detail"}},[i("q-modal-layout",[i("v-visibility-detail",{attrs:{store:t.store,item:t.item},on:{close:function(e){t.visibility_detail=!1}}})],1)],1)],1)},v=[];u._withStripped=!0;var d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibily-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Visibility Detail")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-visibility"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Device Terpasang",helper:"masukkan jumlah device terpasang"}},[i("q-input",{model:{value:t.model.qty_items,callback:function(e){t.$set(t.model,"qty_items",e)},expression:"model.qty_items"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},m=[];d._withStripped=!0;i("6b54");var p=i("3609"),f=i("5014"),h=i("9437"),g={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg"}},b={components:{vStoreProfile:o["a"],vTakePicture:p["a"]},props:{store:Object,item:Object},data:function(){return{take_picture:!1,images:[{id:1,src:g.images[1]},{id:2,src:g.images[2]},{id:3,src:g.images[3]},{id:4,src:g.images[4]}],model:{qty_items:1}}},watch:{model:{handler:function(t){this.images.forEach(function(e,i){var a="".concat(t.store_id,".").concat(t.activity_id,".").concat(i),s=localStorage.getItem(a);s&&s.length>100?e.src=s:e.src=g.images[i+1]});var e=this;setTimeout(function(){e.$forceUpdate()},400)}},item:{handler:function(t){var e=t.model;e||(e={qty_items:1,pic_1:1,pic_2:1,pic_3:1,pic_4:1,isonline:navigator.onLine?1:0,start_date:(new Date).toISOString().substr(0,23),activity_id:t.activity_id});var i=this.store;i.visit&&(e.gps=i.visit.visit_gps),e.store_id||(e.store_id=i.store_id),e.start_date||(e.start_date=(new Date).toISOString().substr(0,23)),e.activity_id||(e.activity_id=t.activity_id),this.model=e},deep:!0}},computed:{},methods:{save:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=[],this.images.forEach(function(t){var i=t.src;i.length>100&&e.push(i)}),0!==e.length){t.next=5;break}return this.$q.notify("Silahkan masukkan minimal 1 foto"),t.abrupt("return");case 5:i=this.model,e.forEach(function(t,e){localStorage.setItem("".concat(i.store_id,".").concat(i.activity_id,".").concat(e),t)}),i.images=e,this.item.model=i,a=JSON.parse(JSON.stringify(this.store)),f["a"].update(a);try{h["a"].insert(i),this.$emit("close")}catch(t){this.$q.notify(t.message)}case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),cancel:function(){this.$emit("close")},refresh:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){console.log(refresh)})}},k=b,_=(i("ba2b"),i("2877")),y=Object(_["a"])(k,d,m,!1,null,null,null);y.options.__file="visibility_detail.vue";var q=y.exports,w={components:{vStoreProfile:o["a"],vVisibilityDetail:q},props:{store:Object,list:Array},data:function(){return{item:{model:{}},visibility_detail:!1}},watch:{list:{handler:function(t){this.$forceUpdate()}},visibility_detail:{handler:function(t){if(t){var e=this;setTimeout(function(){e.$forceUpdate()},400)}}}},methods:{showDetail:function(t){this.store;this.item=t,this.visibility_detail=!0}}},x=w,C=(i("df4e"),Object(_["a"])(x,u,v,!1,null,null,null));C.options.__file="visibility.vue";var R=C.exports,S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-training"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Training")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-training text-weight-light"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Nama Training",helper:"masukkan jumlah nama training"}},[i("q-input",{model:{value:t.model.training,callback:function(e){t.$set(t.model,"training",e)},expression:"model.training"}})],1),i("q-field",{attrs:{icon:"fa fa-users",label:"Perserta Training",helper:"masukkan semua nama peserta training"}},[i("q-input",{attrs:{type:"textarea"},model:{value:t.model.list,callback:function(e){t.$set(t.model,"list",e)},expression:"model.list"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},$=[];S._withStripped=!0;i("28a5");var j={components:{vStoreProfile:o["a"],vTakePicture:p["a"]},props:{store:Object,default:{}},computed:{listPerserta:function(){var t=[];return this.model.list&&(t=this.model.list.split("\n")),t}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"},{id:3,src:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg"},{id:4,src:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},O=j,P=(i("1142"),Object(_["a"])(O,S,$,!1,null,null,null));P.options.__file="training.vue";var I=P.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-eskalasi"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Eskalasi")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-eskalasi"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{helper:"Pick one escalation",label:"Status"}},[i("q-option-group",{attrs:{type:"radio",color:"secondary","float-label":"Status",options:[{label:"Temporary",value:"bat"},{label:"Permanent",value:"friend"},{label:"Under Renovation",value:"upload"},{label:"Moved",value:"modev"}]},model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}})],1),i("q-field",[i("q-input",{attrs:{"float-label":"Keterangan",type:"textarea"},model:{value:t.model.keterangan,callback:function(e){t.$set(t.model,"keterangan",e)},expression:"model.keterangan"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},E=[];T._withStripped=!0;var D={components:{vStoreProfile:o["a"],vTakePicture:p["a"]},props:{store:Object,default:{}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},L=D,U=(i("9de8"),Object(_["a"])(L,T,E,!1,null,null,null));U.options.__file="eskalasi.vue";var H=U.exports,J=i("af13"),N={components:{vStoreProfile:o["a"],vVisibility:R,vTraining:I,vEskalasi:H},props:{store:Object},data:function(){return{visibility:!1,training:!1,eskalasi:!1,activities:[],subs:[]}},watch:{store:{handler:function(t){this.activities=t.activities;var e=this;setTimeout(function(){e.$forceUpdate()},400)},deep:!0}},methods:{refresh:function(){this.activities=this.store.activities,console.log(this.activities)},checkOut:function(){var t=r()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.store,this.user,e.dirty=!0,e.visit&&(e.visit.visit_checkout=(new Date).toISOString().substr(0,23)),t.prev=3,t.next=6,f["a"].checkOut(e);case 6:this.$router.push("/stores"),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](3),t.t0;case 12:case"end":return t.stop()}},t,this,[[3,9]])}));return function(){return t.apply(this,arguments)}}(),activityClick:function(t){this.subs=t.subs,void 0!=this[t.link]&&(this[t.link]=!0)}}},W=N,V=(i("a439"),i("0831"),Object(_["a"])(W,c,l,!1,null,null,null));V.options.__file="activity.vue";var M=V.exports,A=i("49c2"),B={components:{vActivity:M,vStoreProfile:o["a"]},data:function(){return{state:"",store:{},user:{},images:["http://dkm.boogr-sooka.club/img/samples/CR-001.jpg","http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"],activity:!1}},created:function(){this.refresh()},methods:{refresh:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,i,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$q,i=this.$route,e.loading.show(),a=i.params.id,t.next=5,f["a"].findById(a);case 5:return this.store=t.sent,t.next=8,A["a"].me();case 8:return this.user=t.sent,t.next=11,A["a"].getCurrentPosition();case 11:if(this.user.gps=t.sent,this.store.activities){t.next=18;break}return t.next=15,J["a"].list();case 15:s=t.sent,s.forEach(function(t){t.link=t.activity_name.toLowerCase()}),this.store.activities=s;case 18:setTimeout(function(){e.loading.hide()},40);case 19:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),checkIn:function(){var t=r()(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this.store,i=this.user,e.dirty=!0,e.open_time=new Date,e.visit||(e.visit={visit_checkin:(new Date).toISOString().substr(0,23),visit_gps:JSON.stringify(i.gps),visit_isonline:navigator.onLine?1:0,store_id:e.store_id,user_id:i.user_id}),t.prev=4,this.activity=!0,this.save(e),t.next=12;break;case 9:throw t.prev=9,t.t0=t["catch"](4),t.t0;case 12:case"end":return t.stop()}},t,this,[[4,9]])}));return function(){return t.apply(this,arguments)}}(),onShowModal:function(){var t=this.$refs;console.log("modal-show",t.activity),console.log(t.activity.$methods),setTimeout(function(){t.activity.$forceUpdate()},400)},save:function(){var t=r()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:f["a"].checkIn(e);case 1:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},K=B,z=(i("d411"),i("2353"),Object(_["a"])(K,a,s,!1,null,null,null));z.options.__file="store_detail.vue";e["default"]=z.exports},"9de8":function(t,e,i){"use strict";var a=i("84a3"),s=i.n(a);s.a},a439:function(t,e,i){"use strict";var a=i("297f"),s=i.n(a);s.a},adab:function(t,e,i){},ba2b:function(t,e,i){"use strict";var a=i("2d5c"),s=i.n(a);s.a},c2aa:function(t,e,i){},d411:function(t,e,i){"use strict";var a=i("5ee8"),s=i.n(a);s.a},df4e:function(t,e,i){"use strict";var a=i("adab"),s=i.n(a);s.a},ea8d:function(t,e,i){}}]);