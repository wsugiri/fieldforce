(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["4019726a"],{"0c3d":function(t,e,n){},1935:function(t,e,n){},"20d6":function(t,e,n){"use strict";var a=n("5ca1"),r=n("0a49")(6),i="findIndex",s=!0;i in[]&&Array(1)[i](function(){s=!1}),a(a.P+a.F*s,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},"254e":function(t,e,n){"use strict";var a=n("0c3d"),r=n.n(a);r.a},"2ca8":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticClass:"page-eskalasi"},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-toolbar-title",[t._v("Eskalasi")]),n("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),n("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1)],1),n("q-page-container",[n("q-page",[n("v-store-profile",{attrs:{store:t.store}}),n("div",{staticClass:"card-eskalasi"},[n("q-card",[n("q-card-main",[n("q-field",{attrs:{label:"Kategori Eskalasi"}},[n("q-option-group",{attrs:{type:"radio",color:"secondary",options:[{label:"Toko Libur / Tutup Sementara",value:"1"},{label:"Toko Tutup Permanen",value:"2"},{label:"Toko Pindah",value:"3"},{label:"Toko dalam Renovasi",value:"4"},{label:"Lain-lain",value:"5"}]},model:{value:t.model.data.escal_categ,callback:function(e){t.$set(t.model.data,"escal_categ",e)},expression:"model.data.escal_categ"}})],1),n("q-field",{attrs:{label:"Keterangan"}},[n("q-input",{attrs:{type:"textarea"},model:{value:t.model.data.escal_notes,callback:function(e){t.$set(t.model.data,"escal_notes",e)},expression:"model.data.escal_notes"}})],1)],1)],1),n("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)],1)},r=[];a._withStripped=!0;n("ac6a"),n("96cf");var i=n("c973"),s=n.n(i),o=(n("28a5"),n("f490")),c=(n("551c"),n("f9d8")),u=n("f1c2"),l={save:function(t,e){var n=t.state.store;return t.commit("eskalasi",e),c["a"].set(n.store_id,n),new Promise(function(){var n=s()(regeneratorRuntime.mark(function n(a,r){return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:try{e.data.isonline=navigator.onLine?1:0,u["a"].saveDraft(t,e),a(e)}catch(n){u["a"].saveDraft(t,e),r(n)}case 1:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}())}},f=l,d=n("ad89"),g=n("3609"),h="http://fieldforce.seegolabs.com/static/no-image.png",v={components:{vStoreProfile:d["a"],vTakePicture:g["a"]},data:function(){return{store:{},images:[{id:1,src:h},{id:2,src:h}],model:{data:{}}}},beforeCreate:function(){var t=this.$q,e=this.$route,n=this.$router,a=e.params.id,r=t.localStorage.get.item(a);if(r&&r.visit){var i=r.visit.eskalasi;if(!i||!i.data){var s=o["a"].formatDate(new Date,"YYYY-MM-DD");i={day:s,activity:"escalation",key:"".concat(a,".esc.").concat(s.split("-")[2]).toLocaleUpperCase(),data:{store_id:a,start_date:(new Date).toISOString().substr(0,23)}},r.visit.eskalasi=i}this.$store.commit("store",r),this.$store.commit("eskalasi",i)}else n.push({name:"app.stores"})},created:function(){this.store=this.$store.state.store,this.model=this.$store.state.eskalasi,this.refresh()},methods:{refresh:function(){for(var t=this.model,e=0;e<2;e+=1){var n="".concat(t.key,".").concat(e+1),a=this.$q.localStorage.get.item(n);a&&(this.images[e].src=a)}},save:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,n,a,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.validate()){t.next=2;break}return t.abrupt("return");case 2:return e=this.$q,n=this.$store,a=this.$router,r=this.model,t.prev=3,e.loading.show(),t.next=7,f.save(n,r);case 7:e.loading.hide(),a.go(-1),t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](3),e.loading.hide(),e.notify(t.t0.message);case 15:case"end":return t.stop()}},t,this,[[3,11]])}));return function(){return t.apply(this,arguments)}}(),validate:function(){var t=this,e=(this.store,this.model),n=[];return this.images.forEach(function(a){var r=a.id,i=a.src,s=i.length>100,o=i.indexOf("fieldforce.seegolabs.com/api/buckets")>0,c="".concat(e.key,".").concat(r);s||o?(n.push(i),i.length>100?t.$q.localStorage.set(c,i):t.$q.localStorage.remove(c)):t.$q.localStorage.remove(c)}),0!==n.length||(this.$q.notify("Silahkan masukkan minimal 1 foto"),!1)},cancel:function(){this.$router.go(-1)}}},m=v,p=(n("4ef4"),n("2877")),b=Object(p["a"])(m,a,r,!1,null,null,null);b.options.__file="eskalasi.vue";e["default"]=b.exports},3609:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.images,function(e,a){return n("q-card",{key:a,staticClass:"bigger q-mt-md"},[n("q-card-title",{staticStyle:{padding:"5px 15px",height:"42px"}},[n("div",[t._v("Picture #"+t._s(a+1))])]),n("q-card-separator"),n("q-card-media",[n("img",{attrs:{src:e.src}})]),n("q-card-separator"),n("q-card-actions",[n("div",{staticClass:"text-center"},[n("q-btn",{attrs:{icon:"fa fa-camera",color:"primary"},on:{click:function(n){t.takingPicture(e)}}},[n("span",{staticClass:"q-ml-sm"},[t._v("Take Picture")])]),n("q-btn",{attrs:{icon:"fa fa-trash",color:"red"},on:{click:function(n){t.removePicture(e)}}},[n("span",{staticClass:"q-ml-sm"},[t._v("Remove Picture")])])],1)])],1)}),n("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.take_picture,callback:function(e){t.take_picture=e},expression:"take_picture"}},[n("q-modal-layout",[n("video",{ref:"video",staticStyle:{height:"auto",width:"100%"},attrs:{autoplay:""}}),n("div",{staticClass:"text-center"},[n("q-btn",{staticStyle:{top:"-15px",transform:"translateY(-100%)"},attrs:{round:"",icon:"camera",color:"blue",size:"lg"},on:{click:function(e){t.capturePicture()}}})],1),n("canvas",{ref:"canvas",staticStyle:{display:"none"}})])],1)],2)},r=[];a._withStripped=!0;var i="http://fieldforce.seegolabs.com/static/no-image.png",s={props:{images:{type:Array,default:[{id:1,src:i},{id:2,src:i},{id:3,src:i},{id:4,src:i}]}},data:function(){return{take_picture:!1}},methods:{takingPicture:function(t){var e=this;this.video=this.$refs.video,this.image=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(t){var n=window.URL||window.webkitURL;e.video.srcObject=t,n.createObjectURL&&(e.video.src=n.createObjectURL(t))}),this.take_picture=!0},removePicture:function(t){t&&(t.src=i)},capturePicture:function(){this.take_picture=!1;var t=this.video,e=this.$refs.canvas;t.videoWidth,t.videoHeight;t.videoWidth>t.videoHeight?(e.width=500,e.height=t.videoHeight*(500/t.videoWidth)):(e.height=400,e.width=t.videoWidth*(400/t.videoHeight));var n=e.getContext("2d");n.drawImage(t,0,0,e.width,e.height);var a=e.toDataURL("image/png");this.image.src=a,t.pause(),t.src="",t.srcObject.getTracks()[0].stop()},save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},o=s,c=n("2877"),u=Object(c["a"])(o,a,r,!1,null,null,null);u.options.__file="take_picture.vue";e["a"]=u.exports},4917:function(t,e,n){"use strict";var a=n("cb7c"),r=n("9def"),i=n("0390"),s=n("5f1b");n("214f")("match",1,function(t,e,n,o){return[function(n){var a=t(this),r=void 0==n?void 0:n[e];return void 0!==r?r.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=a(t),u=String(this);if(!c.global)return s(c,u);var l=c.unicode;c.lastIndex=0;var f,d=[],g=0;while(null!==(f=s(c,u))){var h=String(f[0]);d[g]=h,""===h&&(c.lastIndex=i(u,r(c.lastIndex),l)),g++}return 0===g?null:d}]})},"4ef4":function(t,e,n){"use strict";var a=n("1935"),r=n.n(a);r.a},ad89:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"store-profile"},[n("div",{staticClass:"text-weight-light"},[n("div",{staticClass:"store store-name text-weight-medium"},[n("q-icon",{attrs:{name:"fa fa-building"}}),t._v("\n      "+t._s(t.store.store_name)+"\n    ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map"}}),t._v("\n      "+t._s(t.store.area_manage)+"\n    ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map-marker"}}),t._v("\n      "+t._s(t.store.region_name)+"\n    ")],1),t.store.last_visit?n("div",{staticClass:"store store-last-visit text-italic"},[n("q-icon",{attrs:{name:"fa fa-calendar-check"}}),t._v("\n      Kunjungan terakhir pada: "+t._s(t.lastVisit)+"\n    ")],1):t._e()])])},r=[];a._withStripped=!0;var i=n("f490"),s={props:{store:{type:Object,default:{}}},computed:{lastVisit:function(){return this.store.last_visit?i["a"].formatDate(this.store.last_visit,"YYYY-MM-DD HH:mm Z"):"--="}}},o=s,c=(n("254e"),n("2877")),u=Object(c["a"])(o,a,r,!1,null,null,null);u.options.__file="store_profile.vue";e["a"]=u.exports},f1c2:function(t,e,n){"use strict";n("28a5"),n("96cf");var a=n("c973"),r=n.n(a),i=(n("551c"),n("20d6"),n("7514"),n("f9d8")),s=n("f61f"),o=n("49c2"),c=s["a"].init(),u=c.axios,l="data-outstanding",f={saveDraft:function(t,e){var n=t.state.outstanding,a=void 0===n?[]:n,r=a.find(function(t){return t.key===e.key});r?r.data=e.data:a.push(e),t.commit("outstanding",a),i["a"].set(l,a)},removeDraft:function(t,e){var n=t.state.outstanding,a=void 0===n?[]:n,r=a.findIndex(function(t){return t.key===e.key});list.splice(r,1)&&(t.commit("outstanding",a),i["a"].set(l,a))},saveTraining:function(t,e,n){return new Promise(function(){var a=r()(regeneratorRuntime.mark(function a(r,s){var c,d,g;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,c=e.data,a.t0=JSON,a.next=5,o["a"].getCurrentPosition();case 5:return a.t1=a.sent,c.gps=a.t0.stringify.call(a.t0,a.t1),c.rsp_qty=c.training_rsp.split("\n").length,a.next=10,f.saveImages(e.activity,n,c);case 10:return a.next=12,u.post("trainings",c);case 12:d=t.state.outstanding,g=d.findIndex(function(t){return e.key===t.key}),g>=0&&d.splice(g,1)&&(t.commit("outstanding",d),i["a"].set(l,d),f.cleanImage(e.key,n)),r(c),a.next=21;break;case 18:a.prev=18,a.t2=a["catch"](0),s(a.t2);case 21:case"end":return a.stop()}},a,this,[[0,18]])}));return function(t,e){return a.apply(this,arguments)}}())},saveEskalasi:function(t,e,n){return new Promise(function(){var a=r()(regeneratorRuntime.mark(function a(r,s){var c,d,g;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,c=e.data,c.isonline=1,a.t0=JSON,a.next=6,o["a"].getCurrentPosition();case 6:return a.t1=a.sent,c.gps=a.t0.stringify.call(a.t0,a.t1),a.next=10,f.saveImages(e.activity,n,c);case 10:return a.next=12,u.post("escalations",c);case 12:d=t.state.outstanding,g=d.findIndex(function(t){return e.key===t.key}),g>=0&&d.splice(g,1)&&(t.commit("outstanding",d),i["a"].set(l,d),f.cleanImage(e.key,n)),r(c),a.next=21;break;case 18:a.prev=18,a.t2=a["catch"](0),s(a.t2);case 21:case"end":return a.stop()}},a,this,[[0,18]])}));return function(t,e){return a.apply(this,arguments)}}())},saveImages:function(t,e,n){return new Promise(function(){var a=r()(regeneratorRuntime.mark(function a(r,i){var s,o,c,l;return regeneratorRuntime.wrap(function(a){while(1)switch(a.prev=a.next){case 0:a.prev=0,s="".concat(Date.now()),o=0;case 3:if(!(o<e.length)){a.next=14;break}if(n["pic_".concat(o+1)]){a.next=11;break}if(c=e[o],!(c.length>100)){a.next=11;break}return a.next=9,u.post("buckets",{data:c,folder:t,name:"".concat(s).concat(o+1)});case 9:l=a.sent,n["pic_".concat(o+1)]="read/".concat(l.data.id);case 11:o+=1,a.next=3;break;case 14:r(n),a.next=20;break;case 17:a.prev=17,a.t0=a["catch"](0),i(a.t0);case 20:case"end":return a.stop()}},a,this,[[0,17]])}));return function(t,e){return a.apply(this,arguments)}}())},cleanImage:function(t,e){for(var n=1;n<=e.length;n+=1)console.log("".concat(t,".").concat(n)),i["a"].remove("".concat(t,".").concat(n))}};e["a"]=f},f490:function(t,e,n){"use strict";n("28a5"),n("4917"),n("cadf"),n("456d"),n("ac6a"),n("a481");var a=n("73f5"),r=n("177b"),i=n("b157"),s=864e5,o=36e5,c=6e4,u=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,l=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",a=Math.abs(t),i=Math.floor(a/60),s=a%60;return n+Object(r["d"])(i)+e+Object(r["d"])(s)}function d(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),a=n.getDate();t.setMonth(e-1,Math.min(a,t.getDate()))}function g(t){return new Date(Object(a["c"])(t)&&null!==l.exec(t)?t.substring(0,23).replace(" ","T"):t)}function h(t,e,n){var a=g(t),i=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(r["b"])("days"===t?"date":t);a["set".concat(n)](a["get".concat(n)]()+i*e[t])}else d(a,a.getMonth()+1+i*e.month)}),a}function v(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function m(t,e){return w(new Date,t,e)}function p(t){var e=g(t).getDay();return 0===e?7:e}function b(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var a=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-a);var r=(e-n)/(7*s);return 1+Math.floor(r)}function y(t,e,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=g(e).getTime(),i=g(n).getTime(),s=g(t).getTime();return a.inclusiveFrom&&r--,a.inclusiveTo&&i++,s>r&&s<i}function k(t,e){return h(t,e,!0)}function D(t,e){return h(t,e,!1)}function w(t,e,n){var a=g(t),r="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);a["".concat(r).concat(n)](e[t])}else d(a,e.month)}),a}function M(t,e){var n=g(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function _(t,e){var n=g(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(C(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function x(t){for(var e=g(t),n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return a.forEach(function(t){e=Math.max(e,g(t))}),e}function S(t){for(var e=g(t),n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];return a.forEach(function(t){e=Math.min(e,g(t))}),e}function O(t,e,n){return(t.getTime()-t.getTimezoneOffset()*c-(e.getTime()-e.getTimezoneOffset()*c))/n}function q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",a=g(t),r=g(e);switch(n){case"years":return a.getFullYear()-r.getFullYear();case"months":return 12*(a.getFullYear()-r.getFullYear())+a.getMonth()-r.getMonth();case"days":return O(M(a,"day"),M(r,"day"),s);case"hours":return O(M(a,"hour"),M(r,"hour"),o);case"minutes":return O(M(a,"minute"),M(r,"minute"),c);case"seconds":return O(M(a,"second"),M(r,"second"),1e3)}}function Y(t){return q(t,M(t,"year"),"days")+1}function T(t){return Object(a["a"])(t)?"date":"number"===typeof t?"number":"string"}function j(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return R(t,n)}}function $(t,e,n){var a=g(t);if(e){var r=g(e);if(a<r)return r}if(n){var i=g(n);if(a>i)return i}return a}function H(t,e,n){var a=g(t),r=g(e);if(void 0===n)return a.getTime()===r.getTime();switch(n){case"second":if(a.getSeconds()!==r.getSeconds())return!1;case"minute":if(a.getMinutes()!==r.getMinutes())return!1;case"hour":if(a.getHours()!==r.getHours())return!1;case"day":if(a.getDate()!==r.getDate())return!1;case"month":if(a.getMonth()!==r.getMonth())return!1;case"year":if(a.getFullYear()!==r.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function C(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function P(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var F={YY:function(t){return Object(r["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(r["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(r["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||i["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||i["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return P(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return P(t.getDate())},DD:function(t){return Object(r["d"])(t.getDate())},DDD:function(t){return Y(t)},DDDD:function(t){return Object(r["d"])(Y(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||i["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||i["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return b(t)},ww:function(t){return Object(r["d"])(b(t))},H:function(t){return t.getHours()},HH:function(t){return Object(r["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(r["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(r["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(r["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(r["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(r["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return f(t.getTimezoneOffset(),":")},ZZ:function(t){return f(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",n=arguments.length>2?arguments[2]:void 0;if(0===t||t){var a=g(t);return e.replace(u,function(t,e){return t in F?F[t](a,n):void 0===e?t:e.split("\\]").join("]")})}}function I(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(u)}function E(t){return Object(a["a"])(t)?new Date(t.getTime()):t}e["a"]={isValid:v,buildDate:m,getDayOfWeek:p,getWeekOfYear:b,isBetweenDates:y,addToDate:k,subtractFromDate:D,adjustDate:w,startOfDate:M,endOfDate:_,getMaxDate:x,getMinDate:S,getDateDiff:q,getDayOfYear:Y,inferDateFormat:T,convertDateToFormat:j,getDateBetween:$,isSameDate:H,daysInMonth:C,formatter:F,formatDate:R,matchFormat:I,clone:E}}}]);