(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3c18385b"],{1923:function(t,e,n){},4917:function(t,e,n){"use strict";var r=n("cb7c"),a=n("9def"),i=n("0390"),u=n("5f1b");n("214f")("match",1,function(t,e,n,c){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=c(n,t,this);if(e.done)return e.value;var o=r(t),s=String(this);if(!o.global)return u(o,s);var f=o.unicode;o.lastIndex=0;var l,d=[],g=0;while(null!==(l=u(o,s))){var h=String(l[0]);d[g]=h,""===h&&(o.lastIndex=i(s,a(o.lastIndex),f)),g++}return 0===g?null:d}]})},"5fa9":function(t,e,n){"use strict";var r=n("1923"),a=n.n(r);a.a},"8d57":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-history"},t._l(t.list,function(e,r){return n("q-card",{key:r},[n("q-card-main",{staticClass:"text-weight-light"},[n("div",{staticClass:"capitalize text-bold"},[t._v(t._s(e.store_name))]),n("div",{staticClass:"capitalize"},[n("label",{attrs:{for:""}},[t._v("Activity")]),t._v("\n        : "+t._s(e.activity_name)+"\n      ")]),n("div",{staticClass:"text-left"},[n("label",{attrs:{for:""}},[t._v("Date")]),t._v("\n        : "+t._s(t.dateFormat(e.trans_date))+"\n      ")]),n("div",{staticClass:"text-left"},[n("label",{attrs:{for:""}},[t._v("Notes")]),t._v("\n        : "+t._s(e.note)+"\n      ")])])],1)}))},a=[];r._withStripped=!0;n("96cf");var i=n("c973"),u=n.n(i),c=n("f490"),o=n("af13"),s={data:function(){return{list:[]}},created:function(){this.refresh()},methods:{refresh:function(){var t=u()(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$q,e.loading.show(),t.next=4,o["a"].lastActivity();case 4:n=t.sent,r=n.data,r&&(this.list=r),console.log(r),e.loading.hide();case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),dateFormat:function(t){return c["a"].formatDate(t,"YYYY-MM-DD HH:mm:ss Z")}}},f=s,l=(n("5fa9"),n("2877")),d=Object(l["a"])(f,r,a,!1,null,"03c42b22",null);d.options.__file="history.vue";e["default"]=d.exports},af13:function(t,e,n){"use strict";n("7514"),n("ac6a"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("f9d8")),u=n("f61f"),c=u["a"].init(),o=c.axios,s="data-activity",f={list:function(){return i["a"].get.item(s)}},l={list:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a,u;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(t.prev=0,r=f.list(),!navigator.onLine||r){t.next=10;break}return a="activities/list",t.next=6,o.get(a);case 6:u=t.sent,r=u.data.list.filter(function(t){return""===(t.parent||"")}),r.forEach(function(t){t.subs=u.data.list.filter(function(e){return e.parent===t.activity_name})}),i["a"].set(s,r);case 10:e(f.list()),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),n(t.t0);case 16:case"end":return t.stop()}},t,this,[[0,13]])}));return function(e,n){return t.apply(this,arguments)}}())},findOne:function(t,e){return new Promise(function(){var n=a()(regeneratorRuntime.mark(function n(r,a){var u,c,s,l;return regeneratorRuntime.wrap(function(n){while(1)switch(n.prev=n.next){case 0:if(n.prev=0,u=i["a"].get.item(t),c=f.list().find(function(t){return t.activity_id===e}),!navigator.onLine){n.next=9;break}return s="visibilities/list?store_id=".concat(t),n.next=7,o.get(s);case 7:l=n.sent,u.activities=l.data.list;case 9:r({store:u,activity:c}),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](0),a(n.t0);case 15:case"end":return n.stop()}},n,this,[[0,12]])}));return function(t,e){return n.apply(this,arguments)}}())},lastActivity:function(){return new Promise(function(){var t=a()(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r="activityvisit/last_activities",t.next=4,o.get(r);case 4:a=t.sent,e(a),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),n(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}};e["a"]=l},f490:function(t,e,n){"use strict";n("28a5"),n("4917"),n("cadf"),n("456d"),n("ac6a"),n("a481");var r=n("73f5"),a=n("177b"),i=n("b157"),u=864e5,c=36e5,o=6e4,s=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,f=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function l(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),u=r%60;return n+Object(a["d"])(i)+e+Object(a["d"])(u)}function d(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),r=n.getDate();t.setMonth(e-1,Math.min(r,t.getDate()))}function g(t){return new Date(Object(r["c"])(t)&&null!==f.exec(t)?t.substring(0,23).replace(" ","T"):t)}function h(t,e,n){var r=g(t),i=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(a["b"])("days"===t?"date":t);r["set".concat(n)](r["get".concat(n)]()+i*e[t])}else d(r,r.getMonth()+1+i*e.month)}),r}function v(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function m(t,e){return w(new Date,t,e)}function D(t){var e=g(t).getDay();return 0===e?7:e}function M(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/(7*u);return 1+Math.floor(a)}function b(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=g(e).getTime(),i=g(n).getTime(),u=g(t).getTime();return r.inclusiveFrom&&a--,r.inclusiveTo&&i++,u>a&&u<i}function y(t,e){return h(t,e,!0)}function p(t,e){return h(t,e,!1)}function w(t,e,n){var r=g(t),a="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);r["".concat(a).concat(n)](e[t])}else d(r,e.month)}),r}function Y(t,e){var n=g(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function O(t,e){var n=g(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(A(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function x(t){for(var e=g(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.max(e,g(t))}),e}function S(t){for(var e=g(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.min(e,g(t))}),e}function _(t,e,n){return(t.getTime()-t.getTimezoneOffset()*o-(e.getTime()-e.getTimezoneOffset()*o))/n}function j(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",r=g(t),a=g(e);switch(n){case"years":return r.getFullYear()-a.getFullYear();case"months":return 12*(r.getFullYear()-a.getFullYear())+r.getMonth()-a.getMonth();case"days":return _(Y(r,"day"),Y(a,"day"),u);case"hours":return _(Y(r,"hour"),Y(a,"hour"),c);case"minutes":return _(Y(r,"minute"),Y(a,"minute"),o);case"seconds":return _(Y(r,"second"),Y(a,"second"),1e3)}}function T(t){return j(t,Y(t,"year"),"days")+1}function F(t){return Object(r["a"])(t)?"date":"number"===typeof t?"number":"string"}function H(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return C(t,n)}}function k(t,e,n){var r=g(t);if(e){var a=g(e);if(r<a)return a}if(n){var i=g(n);if(r>i)return i}return r}function E(t,e,n){var r=g(t),a=g(e);if(void 0===n)return r.getTime()===a.getTime();switch(n){case"second":if(r.getSeconds()!==a.getSeconds())return!1;case"minute":if(r.getMinutes()!==a.getMinutes())return!1;case"hour":if(r.getHours()!==a.getHours())return!1;case"day":if(r.getDate()!==a.getDate())return!1;case"month":if(r.getMonth()!==a.getMonth())return!1;case"year":if(r.getFullYear()!==a.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function A(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function R(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var z={YY:function(t){return Object(a["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(a["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(a["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||i["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||i["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return R(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return R(t.getDate())},DD:function(t){return Object(a["d"])(t.getDate())},DDD:function(t){return T(t)},DDDD:function(t){return Object(a["d"])(T(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||i["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||i["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return M(t)},ww:function(t){return Object(a["d"])(M(t))},H:function(t){return t.getHours()},HH:function(t){return Object(a["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(a["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(a["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(a["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(a["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(a["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return l(t.getTimezoneOffset(),":")},ZZ:function(t){return l(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function C(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",n=arguments.length>2?arguments[2]:void 0;if(0===t||t){var r=g(t);return e.replace(s,function(t,e){return t in z?z[t](r,n):void 0===e?t:e.split("\\]").join("]")})}}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(s)}function Z(t){return Object(r["a"])(t)?new Date(t.getTime()):t}e["a"]={isValid:v,buildDate:m,getDayOfWeek:D,getWeekOfYear:M,isBetweenDates:b,addToDate:y,subtractFromDate:p,adjustDate:w,startOfDate:Y,endOfDate:O,getMaxDate:x,getMinDate:S,getDateDiff:j,getDayOfYear:T,inferDateFormat:F,convertDateToFormat:H,getDateBetween:k,isSameDate:E,daysInMonth:A,formatter:z,formatDate:C,matchFormat:N,clone:Z}}}]);