(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["06a832c5"],{2452:function(t,e,n){"use strict";var r=n("ee39"),a=n.n(r);a.a},4917:function(t,e,n){"use strict";var r=n("cb7c"),a=n("9def"),i=n("0390"),s=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var o=r(t),u=String(this);if(!o.global)return s(o,u);var f=o.unicode;o.lastIndex=0;var h,d=[],l=0;while(null!==(h=s(o,u))){var v=String(h[0]);d[l]=v,""===v&&(o.lastIndex=i(u,a(o.lastIndex),f)),l++}return 0===l?null:d}]})},"4d57":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-stores"},[n("q-card",[n("q-card-main",[n("q-icon",{attrs:{name:"fa fa-store"}}),t._v("\n      "+t._s("Total Store: "+t.stores.length)+"\n    ")],1)],1),t._l(t.stores,function(e,r){return n("q-card",{key:r},[n("q-card-main",{staticClass:"text-weight-light"},[n("div",{staticClass:"store store-name text-weight-medium"},[n("q-icon",{attrs:{name:"fa fa-building"}}),t._v("\n        "+t._s(e.store_name)+"\n      ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map"}}),t._v("\n        "+t._s(e.area_manage)+"\n      ")],1),n("div",{staticClass:"store store-location"},[n("q-icon",{attrs:{name:"fa fa-map-marker"}}),t._v("\n        "+t._s(e.region_name)+"\n      ")],1),e.last_visit?n("div",{staticClass:"store store-last-visit"},[n("q-icon",{attrs:{name:"fa fa-calendar-check"}}),n("span",{staticStyle:{"margin-left":"4px","margin-top":"2px",position:"absolute"}},[t._v(t._s(t.formattedDate(e.last_visit)))])],1):t._e(),e.dirty?n("div",{staticClass:"store text-italic text-warning"},[n("q-icon",{attrs:{name:"fa fa-info"}}),t._v("pending sync\n      ")],1):t._e(),n("q-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"primary"},on:{click:function(n){t.checkIn(e)}}},[t._v("Check In")])],1)],1)})],2)},a=[];r._withStripped=!0;n("96cf");var i=n("c973"),s=n.n(i),c=n("f490"),o=n("5014"),u=n("49c2"),f={data:function(){return{list:[]}},computed:{stores:function(){return this.$store.state.stores}},created:function(){this.init()},methods:{init:function(){var t=s()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,u["a"].me();case 2:e=t.sent,e?this.refresh():this.$router.push({name:"login"});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),refresh:function(){var t=s()(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,o["a"].list();case 2:e=t.sent,this.$store.commit("stores",e);case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),checkIn:function(){var t=s()(regeneratorRuntime.mark(function t(e){var n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=this.$q.localStorage.get.item(e.store_id)||e,t.next=3,o["a"].checkIn(this.$store,n);case 3:this.$router.push({name:"checkin",params:{id:n.store_id}});case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),formattedDate:function(t){var e=c["a"].formatDate(t,"YYYY-MM-DD HH:mm:ss Z");return e}}},h=f,d=(n("2452"),n("2877")),l=Object(d["a"])(h,r,a,!1,null,"027b55e3",null);l.options.__file="stores.vue";e["default"]=l.exports},5014:function(t,e,n){"use strict";n("7514"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("f9d8")),s=n("f61f"),c=n("af13"),o=n("49c2"),u=s["a"].init(),f=u.axios,h="data-stores",d={stores:function(){return i["a"].get.item(h)}},l={list:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=d.stores(),!navigator.onLine||r){t.next=8;break}return a="stores/store_allocate_mobile",t.next=6,f.get(a);case 6:s=t.sent,i["a"].set(h,s.data.list);case 8:e(d.stores()),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),n(t.t0);case 14:case"end":return t.stop()}},t,this,[[0,11]])}));return function(e,n){return t.apply(this,arguments)}}())},listRefresh:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r="stores/store_allocate_mobile",t.next=4,f.get(r);case 4:a=t.sent,i["a"].set(h,a.data.list),e(d.stores()),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),n(t.t0);case 12:case"end":return t.stop()}},t,this,[[0,9]])}));return function(e,n){return t.apply(this,arguments)}}())},findById:function(t){return new Promise(function(){var e=a()(regeneratorRuntime.mark(function e(n,r){var a,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=i["a"].get.item(t),a||(a=d.stores().find(function(e){return e.store_id===t})),e.next=5,c["a"].list();case 5:s=e.sent,n({store:a,activities:s}),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),r(e.t0);case 12:case"end":return e.stop()}},e,this,[[0,9]])}));return function(t,n){return e.apply(this,arguments)}}())},checkInOld:function(t){return new Promise(function(){var e=a()(regeneratorRuntime.mark(function e(n,r){var a,s,c,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,a=t.visit,s=i["a"].get.item(t.store_id),s||i["a"].set(t.store_id,t),!navigator.onLine||a.visit_id){e.next=11;break}return e.next=7,f.post("activityvisit",a);case 7:c=e.sent,o=c.data,a.visit_id=o.id,i["a"].set(t.store_id,t);case 11:n(t),e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),r(e.t0);case 17:case"end":return e.stop()}},e,this,[[0,14]])}));return function(t,n){return e.apply(this,arguments)}}())},checkIn:function(t,e){t.commit("store",e);var n=e.visit;return n||(n={visit_checkin:(new Date).toISOString().substr(0,23),visit_isonline:navigator.onLine?1:0,store_id:e.store_id},e.visit=n),i["a"].set(e.store_id,e),new Promise(function(){var r=a()(regeneratorRuntime.mark(function r(a,s){var c,u;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.t0=JSON,r.next=4,o["a"].getCurrentPosition();case 4:if(r.t1=r.sent,n.visit_gps=r.t0.stringify.call(r.t0,r.t1),!navigator.onLine||n.visit_id){r.next=12;break}return r.next=9,f.post("activityvisit",n);case 9:c=r.sent,u=c.data,n.visit_id=u.id;case 12:t.commit("store",e),i["a"].set(e.store_id,e),a(e),r.next=20;break;case 17:r.prev=17,r.t2=r["catch"](0),s(r.t2);case 20:case"end":return r.stop()}},r,this,[[0,17]])}));return function(t,e){return r.apply(this,arguments)}}())},checkOut:function(t,e){return new Promise(function(){var n=a()(regeneratorRuntime.mark(function n(r,a){var s,c;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,s=e.visit,!(navigator.onLine&&s&&s.visit_id)||s.visit_checkout){n.next=9;break}return c=(new Date).toISOString().substr(0,23),s.visit_checkout=c,n.next=7,f.put("activityvisit/".concat(s.visit_id),{visit_checkout:c});case 7:t.commit("store",e),i["a"].set(e.store_id,e);case 9:r(e),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),a(n.t0);case 15:case"end":return n.stop()}},n,this,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())}};e["a"]=l},af13:function(t,e,n){"use strict";n("7514"),n("ac6a"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("f9d8")),s=n("f61f"),c=s["a"].init(),o=c.axios,u="data-activity",f={list:function(){return i["a"].get.item(u)}},h={list:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=f.list(),!navigator.onLine||r){t.next=10;break}return a="activities/list",t.next=6,o.get(a);case 6:s=t.sent,r=s.data.list.filter(function(t){return""===(t.parent||"")}),r.forEach(function(t){t.subs=s.data.list.filter(function(e){return e.parent===t.activity_name})}),i["a"].set(u,r);case 10:e(f.list()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),n(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e,n){return t.apply(this,arguments)}}())},findOne:function(t,e){return new Promise(function(){var n=a()(regeneratorRuntime.mark(function n(r,a){var s,c,u,h;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,s=i["a"].get.item(t),c=f.list().find(function(t){return t.activity_id===e}),!navigator.onLine){n.next=9;break}return u="visibilities/list?store_id=".concat(t),n.next=7,o.get(u);case 7:h=n.sent,s.activities=h.data.list;case 9:r({store:s,activity:c}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),a(n.t0);case 15:case"end":return n.stop()}},n,this,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())}};e["a"]=h},ee39:function(t,e,n){},f490:function(t,e,n){"use strict";n("28a5"),n("4917"),n("cadf"),n("456d"),n("ac6a"),n("a481");var r=n("73f5"),a=n("177b"),i=n("b157"),s=864e5,c=36e5,o=6e4,u=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,f=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),s=r%60;return n+Object(a["d"])(i)+e+Object(a["d"])(s)}function d(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),r=n.getDate();t.setMonth(e-1,Math.min(r,t.getDate()))}function l(t){return new Date(Object(r["c"])(t)&&null!==f.exec(t)?t.substring(0,23).replace(" ","T"):t)}function v(t,e,n){var r=l(t),i=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(a["b"])("days"===t?"date":t);r["set".concat(n)](r["get".concat(n)]()+i*e[t])}else d(r,r.getMonth()+1+i*e.month)}),r}function g(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function m(t,e){return x(new Date,t,e)}function p(t){var e=l(t).getDay();return 0===e?7:e}function w(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/(7*s);return 1+Math.floor(a)}function D(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=l(e).getTime(),i=l(n).getTime(),s=l(t).getTime();return r.inclusiveFrom&&a--,r.inclusiveTo&&i++,s>a&&s<i}function b(t,e){return v(t,e,!0)}function y(t,e){return v(t,e,!1)}function x(t,e,n){var r=l(t),a="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);r["".concat(a).concat(n)](e[t])}else d(r,e.month)}),r}function M(t,e){var n=l(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function _(t,e){var n=l(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(I(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function k(t){for(var e=l(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.max(e,l(t))}),e}function O(t){for(var e=l(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.min(e,l(t))}),e}function S(t,e,n){return(t.getTime()-t.getTimezoneOffset()*o-(e.getTime()-e.getTimezoneOffset()*o))/n}function Y(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",r=l(t),a=l(e);switch(n){case"years":return r.getFullYear()-a.getFullYear();case"months":return 12*(r.getFullYear()-a.getFullYear())+r.getMonth()-a.getMonth();case"days":return S(M(r,"day"),M(a,"day"),s);case"hours":return S(M(r,"hour"),M(a,"hour"),c);case"minutes":return S(M(r,"minute"),M(a,"minute"),o);case"seconds":return S(M(r,"second"),M(a,"second"),1e3)}}function R(t){return Y(t,M(t,"year"),"days")+1}function T(t){return Object(r["a"])(t)?"date":"number"===typeof t?"number":"string"}function j(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return E(t,n)}}function H(t,e,n){var r=l(t);if(e){var a=l(e);if(r<a)return a}if(n){var i=l(n);if(r>i)return i}return r}function F(t,e,n){var r=l(t),a=l(e);if(void 0===n)return r.getTime()===a.getTime();switch(n){case"second":if(r.getSeconds()!==a.getSeconds())return!1;case"minute":if(r.getMinutes()!==a.getMinutes())return!1;case"hour":if(r.getHours()!==a.getHours())return!1;case"day":if(r.getDate()!==a.getDate())return!1;case"month":if(r.getMonth()!==a.getMonth())return!1;case"year":if(r.getFullYear()!==a.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function I(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function q(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var C={YY:function(t){return Object(a["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(a["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(a["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||i["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||i["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return q(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return q(t.getDate())},DD:function(t){return Object(a["d"])(t.getDate())},DDD:function(t){return R(t)},DDDD:function(t){return Object(a["d"])(R(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||i["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||i["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return w(t)},ww:function(t){return Object(a["d"])(w(t))},H:function(t){return t.getHours()},HH:function(t){return Object(a["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(a["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(a["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(a["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(a["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(a["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return h(t.getTimezoneOffset(),":")},ZZ:function(t){return h(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",n=arguments.length>2?arguments[2]:void 0;if(0===t||t){var r=l(t);return e.replace(u,function(t,e){return t in C?C[t](r,n):void 0===e?t:e.split("\\]").join("]")})}}function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(u)}function $(t){return Object(r["a"])(t)?new Date(t.getTime()):t}e["a"]={isValid:g,buildDate:m,getDayOfWeek:p,getWeekOfYear:w,isBetweenDates:D,addToDate:b,subtractFromDate:y,adjustDate:x,startOfDate:M,endOfDate:_,getMaxDate:k,getMinDate:O,getDateDiff:Y,getDayOfYear:R,inferDateFormat:T,convertDateToFormat:j,getDateBetween:H,isSameDate:F,daysInMonth:I,formatter:C,formatDate:E,matchFormat:P,clone:$}}}]);