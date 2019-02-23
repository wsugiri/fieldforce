(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2917d815"],{"76cc":function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("q-layout",{staticClass:"page-training"},[e("q-layout-header",[e("q-toolbar",{attrs:{color:"primary"}},[e("q-toolbar-title",[t._v("Training")]),e("q-btn",{attrs:{flat:""},on:{click:function(a){t.save()}}},[t._v("Save")]),e("q-btn",{attrs:{flat:""},on:{click:function(a){t.cancel()}}},[t._v("Cancel")])],1)],1),e("q-page-container",[e("q-page",[e("v-store-profile",{attrs:{store:t.store}}),e("div",{staticClass:"card-training text-weight-light"},[e("q-card",[e("q-card-main",[e("q-field",{attrs:{icon:"important_devices",label:"Topic Training",helper:"masukkan topic training"}},[e("q-input",{model:{value:t.model.data.training_topic,callback:function(a){t.$set(t.model.data,"training_topic",a)},expression:"model.data.training_topic"}})],1),e("q-field",{attrs:{icon:"fa fa-users",label:"List Perserta Training",helper:"masukkan semua nama peserta training"}},[e("q-input",{attrs:{type:"textarea"},model:{value:t.model.data.training_rsp,callback:function(a){t.$set(t.model.data,"training_rsp",a)},expression:"model.data.training_rsp"}})],1)],1)],1),e("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)],1)},n=[];i._withStripped=!0;e("ac6a"),e("96cf");var r=e("c973"),s=e.n(r),o=(e("28a5"),e("f490")),c=(e("551c"),e("f9d8")),l=e("f1c2"),u={save:function(t,a){var e=t.state.store;return t.commit("training",a),c["a"].set(e.store_id,e),new Promise(function(){var e=s()(regeneratorRuntime.mark(function e(i,n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:try{a.data.isonline=navigator.onLine?1:0,l["a"].saveDraft(t,a),i(a)}catch(e){l["a"].saveDraft(t,a),n(e)}case 1:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}())}},p=u,f=e("ad89"),d=e("3609"),g="http://fieldforce.seegolabs.com/static/no-image.png",h={components:{vStoreProfile:f["a"],vTakePicture:d["a"]},data:function(){return{store:{},images:[{id:1,src:g},{id:2,src:g}],model:{data:{}}}},beforeCreate:function(){var t=this.$q,a=this.$route,e=this.$router,i=a.params.id,n=t.localStorage.get.item(i);if(n&&n.visit){var r=n.visit.training;if(!r||!r.data){var s=o["a"].formatDate(new Date,"YYYY-MM-DD");r={day:s,activity:"training",key:"".concat(i,".tra.").concat(s.split("-")[2]).toLocaleUpperCase(),data:{store_id:i,start_date:(new Date).toISOString().substr(0,23)}},n.visit.training=r}this.$store.commit("store",n),this.$store.commit("training",r)}else e.push({name:"app.stores"})},created:function(){this.store=this.$store.state.store,this.model=this.$store.state.training,this.refresh()},methods:{refresh:function(){var t=s()(regeneratorRuntime.mark(function t(){var a,e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(a=this.model,e=0;e<2;e+=1)i="".concat(a.key,".").concat(e+1),n=this.$q.localStorage.get.item(i),n&&(this.images[e].src=n);if(a.data.gps){t.next=8;break}return t.t0=JSON,t.next=6,oAuth.getCurrentPosition();case 6:t.t1=t.sent,a.data.gps=t.t0.stringify.call(t.t0,t.t1);case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),save:function(){var t=s()(regeneratorRuntime.mark(function t(){var a,e,i,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.validate()){t.next=2;break}return t.abrupt("return");case 2:return a=this.$q,e=this.$store,i=this.$router,n=this.model,t.prev=3,a.loading.show(),t.next=7,p.save(e,n);case 7:a.loading.hide(),i.go(-1),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),a.loading.hide(),a.notify(t.t0.message);case 15:case"end":return t.stop()}},t,this,[[3,11]])}));return function(){return t.apply(this,arguments)}}(),validate:function(){var t=this,a=(this.store,this.model),e=[];if(a.data.training_topic)if(a.data.training_rsp){var i=a.data.training_rsp.split("\n").map(function(t){return t.trim()}).filter(Boolean);if(!(i.filter(Boolean).length<=0))return a.data.training_rsp=i.join("\n"),this.images.forEach(function(i){var n=i.id,r=i.src,s=r.length>100,o=r.indexOf("fieldforce.seegolabs.com/api/buckets")>0,c="".concat(a.key,".").concat(n);s||o?(e.push(r),r.length>100?t.$q.localStorage.set(c,r):t.$q.localStorage.remove(c)):t.$q.localStorage.remove(c)}),0!==e.length||(this.$q.notify("Silahkan masukkan minimal 1 foto"),!1);this.$q.notify("Silahkan masukkan list peserta training")}else this.$q.notify("Silahkan masukkan list peserta training");else this.$q.notify("Silahkan masukkan materi/topic training")},cancel:function(){this.$router.go(-1)}}},m=h,v=(e("bd63"),e("2877")),k=Object(v["a"])(m,i,n,!1,null,null,null);k.options.__file="training.vue";a["default"]=k.exports},"87b7":function(t,a,e){},bd63:function(t,a,e){"use strict";var i=e("87b7"),n=e.n(i);n.a}}]);