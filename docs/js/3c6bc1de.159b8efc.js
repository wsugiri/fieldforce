(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3c6bc1de"],{"0743":function(t,e,i){},"0831":function(t,e,i){"use strict";var a=i("0743"),n=i.n(a);n.a},"09f8":function(t,e,i){},"0c3d":function(t,e,i){},1142:function(t,e,i){"use strict";var a=i("c2aa"),n=i.n(a);n.a},"254e":function(t,e,i){"use strict";var a=i("0c3d"),n=i.n(a);n.a},"297f":function(t,e,i){},"2d5c":function(t,e,i){},4917:function(t,e,i){"use strict";var a=i("cb7c"),n=i("9def"),r=i("0390"),s=i("5f1b");i("214f")("match",1,function(t,e,i,o){return[function(i){var a=t(this),n=void 0==i?void 0:i[e];return void 0!==n?n.call(i,a):new RegExp(i)[e](String(a))},function(t){var e=o(i,t,this);if(e.done)return e.value;var c=a(t),l=String(this);if(!c.global)return s(c,l);var u=c.unicode;c.lastIndex=0;var d,f=[],v=0;while(null!==(d=s(c,l))){var m=String(d[0]);f[v]=m,""===m&&(c.lastIndex=r(l,n(c.lastIndex),u)),v++}return 0===v?null:f}]})},5014:function(t,e,i){"use strict";i("ac6a"),i("cadf"),i("456d"),i("7514"),i("96cf");var a=i("c973"),n=i.n(a),r=(i("551c"),i("f61f")),s=r["a"].init(),o=s.axios,c="data-stores",l={stores:function(){var t=localStorage.getItem(c);return t?JSON.parse(t):[]},setStores:function(t){localStorage.setItem(c,JSON.stringify(t))}},u=function(t){return new Promise(function(){var e=n()(regeneratorRuntime.mark(function e(i,a){var n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.post("activityvisit",t.visit);case 3:n=e.sent,r=n.data,t.visit.id=r.id,t.dirty=0,i(r),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),a(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(t,i){return e.apply(this,arguments)}}())};e["a"]={list:function(){return new Promise(function(){var t=n()(regeneratorRuntime.mark(function t(e,i){var a,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,a=l.stores(),!navigator.onLine||a.length){t.next=8;break}return n="stores/store_allocate_mobile",t.next=6,o.get(n);case 6:r=t.sent,l.setStores(r.data.list);case 8:e(l.stores()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),i(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,i){return t.apply(this,arguments)}}())},findById:function(t){return new Promise(function(e,i){try{var a=l.stores(),n=a.filter(function(e){return e.store_id===t});e(n[0])}catch(t){i(t)}})},update:function(t){return new Promise(function(){var e=n()(regeneratorRuntime.mark(function e(i,a){var n,r,s,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n=l.stores(),r=n.find(function(e){return e.store_id===t.store_id}),r)for(s=Object.keys(t),o=0;o<s.length;o+=1)c=s[o],r[c]=t[c];if(!r.visit||!navigator.onLine){e.next=7;break}return e.next=7,u(r);case 7:l.setStores(n),i(r),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](0),a(e.t0);case 14:case"end":return e.stop()}},e,this,[[0,11]])}));return function(t,i){return e.apply(this,arguments)}}())}}},"568d":function(t,e,i){"use strict";var a=i("09f8"),n=i.n(a);n.a},"5dbd":function(t,e,i){},"84a3":function(t,e,i){},"9de8":function(t,e,i){"use strict";var a=i("84a3"),n=i.n(a);n.a},a439:function(t,e,i){"use strict";var a=i("297f"),n=i.n(a);n.a},adab:function(t,e,i){},b963:function(t,e,i){"use strict";var a=i("5dbd"),n=i.n(a);n.a},ba2b:function(t,e,i){"use strict";var a=i("2d5c"),n=i.n(a);n.a},c2aa:function(t,e,i){},c8e4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkIn()}}},[t._v("Check In")])],1),i("q-page",[i("q-carousel",{attrs:{color:"white",arrows:"","quick-nav":"",height:"300px"}},t._l(t.images,function(t,e){return i("q-carousel-slide",{key:e,attrs:{"img-src":t}})})),i("div",{staticClass:"store-profile"},[i("v-store-profile",{attrs:{store:t.store}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.activity,callback:function(e){t.activity=e},expression:"activity"}},[i("q-modal-layout",[i("v-activity",{attrs:{store:t.store}})],1)],1)],1)},n=[];a._withStripped=!0;i("96cf");var r=i("c973"),s=i.n(r),o=(i("28a5"),i("4917"),i("cadf"),i("456d"),i("ac6a"),i("a481"),i("73f5")),c=i("177b"),l=i("b157"),u=864e5,d=36e5,f=6e4,v=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,m=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function g(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=t>0?"-":"+",a=Math.abs(t),n=Math.floor(a/60),r=a%60;return i+Object(c["d"])(n)+e+Object(c["d"])(r)}function p(t,e){var i=new Date(t.getFullYear(),e,0,0,0,0,0),a=i.getDate();t.setMonth(e-1,Math.min(a,t.getDate()))}function h(t){return new Date(Object(o["c"])(t)&&null!==m.exec(t)?t.substring(0,23).replace(" ","T"):t)}function b(t,e,i){var a=h(t),n=i?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var i="year"===t?"FullYear":Object(c["b"])("days"===t?"date":t);a["set".concat(i)](a["get".concat(i)]()+n*e[t])}else p(a,a.getMonth()+1+n*e.month)}),a}function k(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function _(t,e){return j(new Date,t,e)}function y(t){var e=h(t).getDay();return 0===e?7:e}function q(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var i=new Date(e.getFullYear(),0,4);i.setDate(i.getDate()-(i.getDay()+6)%7+3);var a=e.getTimezoneOffset()-i.getTimezoneOffset();e.setHours(e.getHours()-a);var n=(e-i)/(7*u);return 1+Math.floor(n)}function w(t,e,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},n=h(e).getTime(),r=h(i).getTime(),s=h(t).getTime();return a.inclusiveFrom&&n--,a.inclusiveTo&&r++,s>n&&s<r}function D(t,e){return b(t,e,!0)}function x(t,e){return b(t,e,!1)}function j(t,e,i){var a=h(t),n="set".concat(i?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var i="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);a["".concat(n).concat(i)](e[t])}else p(a,e.month)}),a}function M(t,e){var i=h(t);switch(e){case"year":i.setMonth(0);case"month":i.setDate(1);case"day":i.setHours(0);case"hour":i.setMinutes(0);case"minute":i.setSeconds(0);case"second":i.setMilliseconds(0)}return i}function S(t,e){var i=h(t);switch(e){case"year":i.setMonth(11);case"month":i.setDate(F(t));case"day":i.setHours(23);case"hour":i.setMinutes(59);case"minute":i.setSeconds(59);case"second":i.setMilliseconds(59)}return i}function C(t){for(var e=h(t),i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return a.forEach(function(t){e=Math.max(e,h(t))}),e}function O(t){for(var e=h(t),i=arguments.length,a=new Array(i>1?i-1:0),n=1;n<i;n++)a[n-1]=arguments[n];return a.forEach(function(t){e=Math.min(e,h(t))}),e}function R(t,e,i){return(t.getTime()-t.getTimezoneOffset()*f-(e.getTime()-e.getTimezoneOffset()*f))/i}function T(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",a=h(t),n=h(e);switch(i){case"years":return a.getFullYear()-n.getFullYear();case"months":return 12*(a.getFullYear()-n.getFullYear())+a.getMonth()-n.getMonth();case"days":return R(M(a,"day"),M(n,"day"),u);case"hours":return R(M(a,"hour"),M(n,"hour"),d);case"minutes":return R(M(a,"minute"),M(n,"minute"),f);case"seconds":return R(M(a,"second"),M(n,"second"),1e3)}}function Y(t){return T(t,M(t,"year"),"days")+1}function P(t){return Object(o["a"])(t)?"date":"number"===typeof t?"number":"string"}function H(t,e,i){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return U(t,i)}}function $(t,e,i){var a=h(t);if(e){var n=h(e);if(a<n)return n}if(i){var r=h(i);if(a>r)return r}return a}function E(t,e,i){var a=h(t),n=h(e);if(void 0===i)return a.getTime()===n.getTime();switch(i){case"second":if(a.getSeconds()!==n.getSeconds())return!1;case"minute":if(a.getMinutes()!==n.getMinutes())return!1;case"hour":if(a.getHours()!==n.getHours())return!1;case"day":if(a.getDate()!==n.getDate())return!1;case"month":if(a.getMonth()!==n.getMonth())return!1;case"year":if(a.getFullYear()!==n.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(i))}return!0}function F(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function I(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var N={YY:function(t){return Object(c["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(c["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(c["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||l["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||l["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return I(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return I(t.getDate())},DD:function(t){return Object(c["d"])(t.getDate())},DDD:function(t){return Y(t)},DDDD:function(t){return Object(c["d"])(Y(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||l["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||l["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return q(t)},ww:function(t){return Object(c["d"])(q(t))},H:function(t){return t.getHours()},HH:function(t){return Object(c["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(c["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(c["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(c["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(c["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(c["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return g(t.getTimezoneOffset(),":")},ZZ:function(t){return g(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function U(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",i=arguments.length>2?arguments[2]:void 0;if(0===t||t){var a=h(t);return e.replace(v,function(t,e){return t in N?N[t](a,i):void 0===e?t:e.split("\\]").join("]")})}}function W(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(v)}function A(t){return Object(o["a"])(t)?new Date(t.getTime()):t}var B={isValid:k,buildDate:_,getDayOfWeek:y,getWeekOfYear:q,isBetweenDates:w,addToDate:D,subtractFromDate:x,adjustDate:j,startOfDate:M,endOfDate:S,getMaxDate:C,getMinDate:O,getDateDiff:T,getDayOfYear:Y,inferDateFormat:P,convertDateToFormat:H,getDateBetween:$,isSameDate:E,daysInMonth:F,formatter:N,formatDate:U,matchFormat:W,clone:A},V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-profile"},[i("div",{staticClass:"text-weight-light"},[i("div",{staticClass:"store store-name text-weight-medium"},[i("q-icon",{attrs:{name:"fa fa-building"}}),t._v("\n      "+t._s(t.store.store_name)+"\n    ")],1),i("div",{staticClass:"store store-location"},[i("q-icon",{attrs:{name:"fa fa-map"}}),t._v("\n      "+t._s(t.store.area_manage)+"\n    ")],1),i("div",{staticClass:"store store-location"},[i("q-icon",{attrs:{name:"fa fa-map-marker"}}),t._v("\n      "+t._s(t.store.region_name)+"\n    ")],1),t.store.last_visit?i("div",{staticClass:"store store-last-visit text-italic"},[i("q-icon",{attrs:{name:"fa fa-calendar-check"}}),t._v("\n      Kunjungan terakhir pada: "+t._s(t.lastVisit)+"\n    ")],1):t._e()])])},z=[];V._withStripped=!0;var L={props:{store:{type:Object,default:{}}},computed:{lastVisit:function(){return this.store.last_visit?B.formatDate(this.store.last_visit,"YYYY-MM-DD HH:mm Z"):"--="}}},Z=L,J=(i("254e"),i("2877")),Q=Object(J["a"])(Z,V,z,!1,null,null,null);Q.options.__file="store_profile.vue";var X=Q.exports,K=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-activity"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkOut()}}},[t._v("Check Out")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("q-list",{staticClass:"q-pt-none q-pb-none",attrs:{link:"",separator:"",sparse:""}},t._l(t.activities,function(e,a){return i("q-item",{key:a,nativeOn:{click:function(i){t.activityClick(e)}}},[i("q-item-main",[t._v(t._s(e.text))]),i("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}))],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[i("q-modal-layout",[i("v-visibility",{attrs:{store:t.store}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.training,callback:function(e){t.training=e},expression:"training"}},[i("q-modal-layout",[i("v-training",{attrs:{store:t.store},on:{close:function(e){t.training=!1}}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.eskalasi,callback:function(e){t.eskalasi=e},expression:"eskalasi"}},[i("q-modal-layout",[i("v-eskalasi",{attrs:{store:t.store},on:{close:function(e){t.eskalasi=!1}}})],1)],1)],1)},G=[];K._withStripped=!0;i("b54a");var tt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibilities"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"keyboard_arrow_left"}}),i("q-toolbar-title",[t._v("Visibility")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),t._l(t.list,function(e,a){return i("q-card",{key:a,nativeOn:{click:function(i){t.showDetail(e)}}},[i("q-card-main",[i("q-item",{attrs:{link:""}},[i("q-item-main",{attrs:{label:e.activity_name}}),i("div",{staticClass:"icon-visibility",class:e.selected?"selected":""},[i("i",{staticClass:"fa fa-check"})])],1)],1)],1)})],2),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility_detail,callback:function(e){t.visibility_detail=e},expression:"visibility_detail"}},[i("q-modal-layout",[i("v-visibility-detail",{attrs:{store:t.store},on:{close:function(e){t.visibility_detail=!1}}})],1)],1)],1)},et=[];tt._withStripped=!0;var it=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibily-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Visibility Detail")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-visibility"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Device Terpasang",helper:"masukkan jumlah device terpasang"}},[i("q-input",{model:{value:t.model.terpasang,callback:function(e){t.$set(t.model,"terpasang",e)},expression:"model.terpasang"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},at=[];it._withStripped=!0;var nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.images,function(e,a){return i("q-card",{key:a,staticClass:"bigger q-mt-md"},[i("q-card-title",{staticStyle:{padding:"5px 15px",height:"42px"}},[i("div",[t._v("Picture #"+t._s(a+1))])]),i("q-card-separator"),i("q-card-media",[i("img",{attrs:{src:e.src}})]),i("q-card-separator"),i("q-card-actions",[i("div",{staticClass:"text-center"},[i("q-btn",{attrs:{icon:"fa fa-camera",color:"primary"},on:{click:function(i){t.takingPicture(e)}}},[i("span",{staticClass:"q-ml-sm"},[t._v("Take Picture")])]),i("q-btn",{attrs:{icon:"fa fa-trash",color:"red"},on:{click:function(i){t.removePicture(e)}}},[i("span",{staticClass:"q-ml-sm"},[t._v("Remove Picture")])])],1)])],1)}),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.take_picture,callback:function(e){t.take_picture=e},expression:"take_picture"}},[i("q-modal-layout",[i("video",{ref:"video",staticStyle:{height:"auto",width:"100%"},attrs:{autoplay:""}}),i("div",{staticClass:"text-center"},[i("q-btn",{staticStyle:{top:"-15px",transform:"translateY(-100%)"},attrs:{round:"",icon:"camera",color:"blue",size:"lg"},on:{click:function(e){t.capturePicture()}}})],1),i("canvas",{ref:"canvas",staticStyle:{display:"none"}})])],1)],2)},rt=[];nt._withStripped=!0;var st={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg",5:"http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"}},ot={props:{images:{type:Array,default:[{id:1,src:st.images["1"]},{id:2,src:st.images["2"]},{id:3,src:st.images["3"]},{id:4,src:st.images["4"]}]}},data:function(){return{take_picture:!1}},methods:{takingPicture:function(t){var e=this;this.video=this.$refs.video,this.image=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(t){var i=window.URL||window.webkitURL;e.video.srcObject=t,e.video.src=i.createObjectURL(t)}),this.take_picture=!0},removePicture:function(t){t&&(t.src=st.images[t.id])},capturePicture:function(){this.take_picture=!1;var t=this.video,e=this.$refs.canvas;e.width=t.videoWidth,e.height=t.videoHeight;var i=e.getContext("2d");i.drawImage(t,0,0);var a=e.toDataURL("image/png");this.image.src=a,t.pause(),t.src="",t.srcObject.getTracks()[0].stop()},save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},ct=ot,lt=Object(J["a"])(ct,nt,rt,!1,null,null,null);lt.options.__file="take_picture.vue";var ut=lt.exports,dt={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg",5:"http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"}},ft={components:{vStoreProfile:X,vTakePicture:ut},props:{store:Object,default:{}},data:function(){return{take_picture:!1,images:[{id:1,src:dt.images["1"]},{id:2,src:dt.images["2"]},{id:3,src:dt.images["3"]},{id:4,src:dt.images["4"]}],list:[{activity_id:4,activity_name:"Banner",activity_parent:1},{activity_id:5,activity_name:"Sticker",activity_parent:1,selected:1},{activity_id:6,activity_name:"Mini X-Banner",activity_parent:1}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},vt=ft,mt=(i("ba2b"),Object(J["a"])(vt,it,at,!1,null,null,null));mt.options.__file="visibility_detail.vue";var gt=mt.exports,pt={components:{vStoreProfile:X,vVisibilityDetail:gt},props:{store:Object,default:{}},data:function(){return{visibility_detail:!1,list:[{activity_id:4,activity_name:"Banner",activity_parent:1},{activity_id:5,activity_name:"Sticker",activity_parent:1,selected:1},{activity_id:6,activity_name:"Mini X-Banner",activity_parent:1}]}},methods:{showDetail:function(t){console.log("----",t),this.visibility_detail=!0}}},ht=pt,bt=(i("df4e"),Object(J["a"])(ht,tt,et,!1,null,null,null));bt.options.__file="visibility.vue";var kt=bt.exports,_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-training"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Training")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-training text-weight-light"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Nama Training",helper:"masukkan jumlah nama training"}},[i("q-input",{model:{value:t.model.training,callback:function(e){t.$set(t.model,"training",e)},expression:"model.training"}})],1),i("q-field",{attrs:{icon:"fa fa-users",label:"Perserta Training",helper:"masukkan semua nama peserta training"}},[i("q-input",{attrs:{type:"textarea"},model:{value:t.model.list,callback:function(e){t.$set(t.model,"list",e)},expression:"model.list"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},yt=[];_t._withStripped=!0;var qt={components:{vStoreProfile:X,vTakePicture:ut},props:{store:Object,default:{}},computed:{listPerserta:function(){var t=[];return this.model.list&&(t=this.model.list.split("\n")),t}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"},{id:3,src:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg"},{id:4,src:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},wt=qt,Dt=(i("1142"),Object(J["a"])(wt,_t,yt,!1,null,null,null));Dt.options.__file="training.vue";var xt=Dt.exports,jt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-eskalasi"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Eskalasi")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-eskalasi"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{helper:"Pick one escalation",label:"Status"}},[i("q-option-group",{attrs:{type:"radio",color:"secondary","float-label":"Status",options:[{label:"Temporary",value:"bat"},{label:"Permanent",value:"friend"},{label:"Under Renovation",value:"upload"},{label:"Moved",value:"modev"}]},model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}})],1),i("q-field",[i("q-input",{attrs:{"float-label":"Keterangan",type:"textarea"},model:{value:t.model.keterangan,callback:function(e){t.$set(t.model,"keterangan",e)},expression:"model.keterangan"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},Mt=[];jt._withStripped=!0;var St={components:{vStoreProfile:X,vTakePicture:ut},props:{store:Object,default:{}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},Ct=St,Ot=(i("9de8"),Object(J["a"])(Ct,jt,Mt,!1,null,null,null));Ot.options.__file="eskalasi.vue";var Rt=Ot.exports,Tt={components:{vStoreProfile:X,vVisibility:kt,vTraining:xt,vEskalasi:Rt},props:{store:Object,default:{}},data:function(){return{visibility:!1,training:!1,eskalasi:!1,activities:[{text:"Visibility",link:"visibility"},{text:"Training",link:"training"},{text:"Eskalasi Toko",link:"eskalasi"}]}},methods:{activityClick:function(t){console.log("link click",t.link),void 0!=this[t.link]&&(this[t.link]=!0)},checkOut:function(){this.$router.push("/stores")}}},Yt=Tt,Pt=(i("a439"),i("0831"),Object(J["a"])(Yt,K,G,!1,null,null,null));Pt.options.__file="activity.vue";var Ht=Pt.exports,$t=i("5014"),Et=i("49c2"),Ft={components:{vActivity:Ht,vStoreProfile:X},data:function(){return{state:"",store:{},user:{},images:["http://dkm.boogr-sooka.club/img/samples/CR-001.jpg","http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"],activity:!1}},created:function(){this.refresh()},methods:{refresh:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,i,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,$t["a"].findById(e);case 3:return i=t.sent,this.store=i,t.next=7,Et["a"].me();case 7:return this.user=t.sent,t.next=10,Et["a"].getCurrentPosition();case 10:a=t.sent,this.user.gps=JSON.stringify(a);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),checkIn:function(){var t=s()(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.store,i=this.user,e.last_visit=(new Date).toISOString().substr(0,23),e.dirty=!0,e.visit={visit_gps:i.gps,visit_checkin:e.last_visit,visit_isonline:navigator.onLine?1:0,store_id:e.store_id,user_id:i.user_id},t.prev=4,t.next=7,$t["a"].update(e);case 7:this.activity=!0,t.next=13;break;case 10:throw t.prev=10,t.t0=t["catch"](4),t.t0;case 13:case"end":return t.stop()}},t,this,[[4,10]])}));return function(){return t.apply(this,arguments)}}()}},It=Ft,Nt=(i("568d"),i("b963"),Object(J["a"])(It,a,n,!1,null,null,null));Nt.options.__file="store_profile.vue";e["default"]=Nt.exports},df4e:function(t,e,i){"use strict";var a=i("adab"),n=i.n(a);n.a}}]);