(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3ac1e8d9"],{"0c3d":function(t,e,n){},"254e":function(t,e,n){"use strict";var r=n("0c3d"),a=n.n(r);a.a},3609:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._l(t.images,function(e,r){return n("q-card",{key:r,staticClass:"bigger q-mt-md"},[n("q-card-title",{staticStyle:{padding:"5px 15px",height:"42px"}},[n("div",[t._v("Picture #"+t._s(r+1))])]),n("q-card-separator"),n("q-card-media",[n("img",{attrs:{src:e.src}})]),n("q-card-separator"),n("q-card-actions",[n("div",{staticClass:"text-center"},[n("q-btn",{attrs:{icon:"fa fa-camera",color:"primary"},on:{click:function(n){t.takingPicture(e)}}},[n("span",{staticClass:"q-ml-sm"},[t._v("Take Picture")])]),n("q-btn",{attrs:{icon:"fa fa-trash",color:"red"},on:{click:function(n){t.removePicture(e)}}},[n("span",{staticClass:"q-ml-sm"},[t._v("Remove Picture")])])],1)])],1)}),n("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.take_picture,callback:function(e){t.take_picture=e},expression:"take_picture"}},[n("q-modal-layout",[n("video",{ref:"video",staticStyle:{height:"auto",width:"100%"},attrs:{autoplay:""}}),n("div",{staticClass:"text-center"},[n("q-btn",{staticStyle:{top:"-15px",transform:"translateY(-100%)"},attrs:{round:"",icon:"camera",color:"blue",size:"lg"},on:{click:function(e){t.capturePicture()}}})],1),n("canvas",{ref:"canvas",staticStyle:{display:"none"}})])],1)],2)},a=[];r._withStripped=!0;var i={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg",5:"http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"}},s={props:{images:{type:Array,default:[{id:1,src:i.images["1"]},{id:2,src:i.images["2"]},{id:3,src:i.images["3"]},{id:4,src:i.images["4"]}]}},data:function(){return{take_picture:!1}},methods:{takingPicture:function(t){var e=this;this.video=this.$refs.video,this.image=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(t){var n=window.URL||window.webkitURL;e.video.srcObject=t,n.createObjectURL&&(e.video.src=n.createObjectURL(t))}),this.take_picture=!0},removePicture:function(t){t&&(t.src=i.images[t.id])},capturePicture:function(){this.take_picture=!1;var t=this.video,e=this.$refs.canvas;e.width=.3*t.videoWidth,e.height=.3*t.videoHeight;var n=e.getContext("2d");n.drawImage(t,0,0,e.width,e.height);var r=e.toDataURL("image/png");this.image.src=r,t.pause(),t.src="",t.srcObject.getTracks()[0].stop()},save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},o=s,c=n("2877"),u=Object(c["a"])(o,r,a,!1,null,null,null);u.options.__file="take_picture.vue";e["a"]=u.exports},4917:function(t,e,n){"use strict";var r=n("cb7c"),a=n("9def"),i=n("0390"),s=n("5f1b");n("214f")("match",1,function(t,e,n,o){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var c=r(t),u=String(this);if(!c.global)return s(c,u);var f=c.unicode;c.lastIndex=0;var l,d=[],g=0;while(null!==(l=s(c,u))){var m=String(l[0]);d[g]=m,""===m&&(c.lastIndex=i(u,a(c.lastIndex),f)),g++}return 0===g?null:d}]})},5014:function(t,e,n){"use strict";n("7514"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("f9d8")),s=n("f61f"),o=n("af13"),c=s["a"].init(),u=c.axios,f="data-stores",l={stores:function(){return i["a"].get.item(f)}};e["a"]={list:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=l.stores(),!navigator.onLine||r){t.next=8;break}return a="stores/store_allocate_mobile",t.next=6,u.get(a);case 6:s=t.sent,i["a"].set(f,s.data.list);case 8:e(l.stores()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),n(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,n){return t.apply(this,arguments)}}())},findById:function(t){return new Promise(function(){var e=a()(regeneratorRuntime.mark(function e(n,r){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=i["a"].get.item(t),a||(a=l.stores().find(function(e){return e.store_id===t})),e.next=5,o["a"].list();case 5:s=e.sent,n({store:a,activities:s}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),r(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}())},checkIn:function(t){return new Promise(function(){var e=a()(regeneratorRuntime.mark(function e(n,r){var a,s,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.visit,s=i["a"].get.item(t.store_id),s||i["a"].set(t.store_id,t),!navigator.onLine||a.visit_id){e.next=11;break}return e.next=7,u.post("activityvisit",a);case 7:o=e.sent,c=o.data,a.visit_id=c.id,i["a"].set(t.store_id,t);case 11:n(t),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),r(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n){return e.apply(this,arguments)}}())},checkOut:function(t){return new Promise(function(){var e=a()(regeneratorRuntime.mark(function e(n,r){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.visit,!a||!a.visit_id){e.next=12;break}if(s=(new Date).toISOString().substr(0,23),a.visit_checkout=s,!navigator.onLine){e.next=11;break}return e.next=8,u.put("activityvisit/".concat(a.visit_id),{visit_checkout:s});case 8:i["a"].remove(t.store_id),e.next=12;break;case 11:i["a"].set(t.store_id,t);case 12:n(t),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](0),r(e.t0);case 18:case"end":return e.stop()}},e,this,[[0,15]])}));return function(t,n){return e.apply(this,arguments)}}())}}},"76cc":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("q-layout",{staticClass:"page-training"},[n("q-layout-header",[n("q-toolbar",{attrs:{color:"primary"}},[n("q-toolbar-title",[t._v("Training")]),n("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),n("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1)],1),n("q-page-container",[n("q-page",[n("v-store-profile",{attrs:{store:t.store}}),n("div",{staticClass:"card-training text-weight-light"},[n("q-card",[n("q-card-main",[n("q-field",{attrs:{icon:"important_devices",label:"Nama Training",helper:"masukkan jumlah nama training"}},[n("q-input",{model:{value:t.model.training,callback:function(e){t.$set(t.model,"training",e)},expression:"model.training"}})],1),n("q-field",{attrs:{icon:"fa fa-users",label:"Perserta Training",helper:"masukkan semua nama peserta training"}},[n("q-input",{attrs:{type:"textarea"},model:{value:t.model.list,callback:function(e){t.$set(t.model,"list",e)},expression:"model.list"}})],1)],1)],1),n("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)],1)},a=[];r._withStripped=!0;n("96cf");var i=n("c973"),s=n.n(i),o=(n("5014"),n("af13")),c=n("ad89"),u=n("3609"),f={components:{vStoreProfile:c["a"],vTakePicture:u["a"]},data:function(){return{store:{},activity:{},images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"},{id:3,src:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg"},{id:4,src:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg"}],model:{}}},created:function(){this.refresh()},methods:{refresh:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,n,r,a,i,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$q,n=this.$route,e.loading.show(),r=n.params.id,t.next=5,o["a"].findOne(r,2);case 5:a=t.sent,i=a.store,s=a.activity,this.store=i,this.activity=s,e.loading.hide();case 11:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),save:function(){this.$router.go(-1)},cancel:function(){this.$router.go(-1)}}},l=f,d=(n("bd63"),n("2877")),g=Object(d["a"])(l,r,a,!1,null,null,null);g.options.__file="training.vue";e["default"]=g.exports},"87b7":function(t,e,n){},ad89:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"store-profile"},[n("div",{staticClass:"text-weight-light"},[n("div",{staticClass:"store store-name text-weight-medium"},[n("q-icon",{attrs:{name:"fa fa-building"}}),t._v("\n      "+t._s(t.store.store_name)+"\n    ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map"}}),t._v("\n      "+t._s(t.store.area_manage)+"\n    ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map-marker"}}),t._v("\n      "+t._s(t.store.region_name)+"\n    ")],1),t.store.last_visit?n("div",{staticClass:"store store-last-visit text-italic"},[n("q-icon",{attrs:{name:"fa fa-calendar-check"}}),t._v("\n      Kunjungan terakhir pada: "+t._s(t.lastVisit)+"\n    ")],1):t._e()])])},a=[];r._withStripped=!0;var i=n("f490"),s={props:{store:{type:Object,default:{}}},computed:{lastVisit:function(){return this.store.last_visit?i["a"].formatDate(this.store.last_visit,"YYYY-MM-DD HH:mm Z"):"--="}}},o=s,c=(n("254e"),n("2877")),u=Object(c["a"])(o,r,a,!1,null,null,null);u.options.__file="store_profile.vue";e["a"]=u.exports},af13:function(t,e,n){"use strict";n("7514"),n("ac6a"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("f9d8")),s=n("f61f"),o=s["a"].init(),c=o.axios,u="data-activity",f={list:function(){return i["a"].get.item(u)}},l={list:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=f.list(),!navigator.onLine||r){t.next=10;break}return a="activities/list",t.next=6,c.get(a);case 6:s=t.sent,r=s.data.list.filter(function(t){return""===(t.parent||"")}),r.forEach(function(t){t.subs=s.data.list.filter(function(e){return e.parent===t.activity_name})}),i["a"].set(u,r);case 10:e(f.list()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),n(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e,n){return t.apply(this,arguments)}}())},findOne:function(t,e){return new Promise(function(){var n=a()(regeneratorRuntime.mark(function n(r,a){var s,o;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:try{s=i["a"].get.item(t),o=f.list().find(function(t){return t.activity_id===e}),r({store:s,activity:o})}catch(t){a(t)}case 1:case"end":return n.stop()}},n,this)}));return function(t,e){return n.apply(this,arguments)}}())}};e["a"]=l},bd63:function(t,e,n){"use strict";var r=n("87b7"),a=n.n(r);a.a},f490:function(t,e,n){"use strict";n("28a5"),n("4917"),n("cadf"),n("456d"),n("ac6a"),n("a481");var r=n("73f5"),a=n("177b"),i=n("b157"),s=864e5,o=36e5,c=6e4,u=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,f=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;return n+Object(a["d"])(i)+e+Object(a["d"])(s)}function d(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),r=n.getDate();t.setMonth(e-1,Math.min(r,t.getDate()))}function g(t){return new Date(Object(r["c"])(t)&&null!==f.exec(t)?t.substring(0,23).replace(" ","T"):t)}function m(t,e,n){var r=g(t),i=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(a["b"])("days"===t?"date":t);r["set".concat(n)](r["get".concat(n)]()+i*e[t])}else d(r,r.getMonth()+1+i*e.month)}),r}function h(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function v(t,e){return y(new Date,t,e)}function p(t){var e=g(t).getDay();return 0===e?7:e}function b(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/(7*s);return 1+Math.floor(a)}function k(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=g(e).getTime(),i=g(n).getTime(),s=g(t).getTime();return r.inclusiveFrom&&a--,r.inclusiveTo&&i++,s>a&&s<i}function w(t,e){return m(t,e,!0)}function D(t,e){return m(t,e,!1)}function y(t,e,n){var r=g(t),a="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);r["".concat(a).concat(n)](e[t])}else d(r,e.month)}),r}function _(t,e){var n=g(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function M(t,e){var n=g(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(H(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function x(t){for(var e=g(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.max(e,g(t))}),e}function O(t){for(var e=g(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.min(e,g(t))}),e}function j(t,e,n){return(t.getTime()-t.getTimezoneOffset()*c-(e.getTime()-e.getTimezoneOffset()*c))/n}function S(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",r=g(t),a=g(e);switch(n){case"years":return r.getFullYear()-a.getFullYear();case"months":return 12*(r.getFullYear()-a.getFullYear())+r.getMonth()-a.getMonth();case"days":return j(_(r,"day"),_(a,"day"),s);case"hours":return j(_(r,"hour"),_(a,"hour"),o);case"minutes":return j(_(r,"minute"),_(a,"minute"),c);case"seconds":return j(_(r,"second"),_(a,"second"),1e3)}}function Y(t){return S(t,_(t,"year"),"days")+1}function q(t){return Object(r["a"])(t)?"date":"number"===typeof t?"number":"string"}function R(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return $(t,n)}}function T(t,e,n){var r=g(t);if(e){var a=g(e);if(r<a)return a}if(n){var i=g(n);if(r>i)return i}return r}function C(t,e,n){var r=g(t),a=g(e);if(void 0===n)return r.getTime()===a.getTime();switch(n){case"second":if(r.getSeconds()!==a.getSeconds())return!1;case"minute":if(r.getMinutes()!==a.getMinutes())return!1;case"hour":if(r.getHours()!==a.getHours())return!1;case"day":if(r.getDate()!==a.getDate())return!1;case"month":if(r.getMonth()!==a.getMonth())return!1;case"year":if(r.getFullYear()!==a.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function H(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function F(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var P={YY:function(t){return Object(a["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(a["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(a["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||i["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||i["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return F(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return F(t.getDate())},DD:function(t){return Object(a["d"])(t.getDate())},DDD:function(t){return Y(t)},DDDD:function(t){return Object(a["d"])(Y(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||i["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||i["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return b(t)},ww:function(t){return Object(a["d"])(b(t))},H:function(t){return t.getHours()},HH:function(t){return Object(a["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(a["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(a["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(a["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(a["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(a["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return l(t.getTimezoneOffset(),":")},ZZ:function(t){return l(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function $(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",n=arguments.length>2?arguments[2]:void 0;if(0===t||t){var r=g(t);return e.replace(u,function(t,e){return t in P?P[t](r,n):void 0===e?t:e.split("\\]").join("]")})}}function E(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(u)}function L(t){return Object(r["a"])(t)?new Date(t.getTime()):t}e["a"]={isValid:h,buildDate:v,getDayOfWeek:p,getWeekOfYear:b,isBetweenDates:k,addToDate:w,subtractFromDate:D,adjustDate:y,startOfDate:_,endOfDate:M,getMaxDate:x,getMinDate:O,getDateDiff:S,getDayOfYear:Y,inferDateFormat:q,convertDateToFormat:R,getDateBetween:T,isSameDate:C,daysInMonth:H,formatter:P,formatDate:$,matchFormat:E,clone:L}}}]);