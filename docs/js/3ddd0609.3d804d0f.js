(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["3ddd0609"],{"20d6":function(t,e,n){"use strict";var r=n("5ca1"),a=n("0a49")(6),i="findIndex",c=!0;i in[]&&Array(1)[i](function(){c=!1}),r(r.P+r.F*c,"Array",{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")(i)},4917:function(t,e,n){"use strict";var r=n("cb7c"),a=n("9def"),i=n("0390"),c=n("5f1b");n("214f")("match",1,function(t,e,n,o){return[function(n){var r=t(this),a=void 0==n?void 0:n[e];return void 0!==a?a.call(n,r):new RegExp(n)[e](String(r))},function(t){var e=o(n,t,this);if(e.done)return e.value;var u=r(t),s=String(this);if(!u.global)return c(u,s);var f=u.unicode;u.lastIndex=0;var d,g=[],h=0;while(null!==(d=c(u,s))){var l=String(d[0]);g[h]=l,""===l&&(u.lastIndex=i(s,a(u.lastIndex),f)),h++}return 0===h?null:g}]})},5780:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-outstanding"},[n("q-card",[n("q-card-main",[t._v("Total draft : "+t._s(t.drafts.length))])],1)],1)},a=[];r._withStripped=!0;n("96cf");var i=n("c973"),c=n.n(i),o=(n("7514"),n("f490"),n("f1c2")),u={data:function(){return{drafts:[],stores:[]}},beforeCreate:function(){this.$store;var t=this.$q;t.localStorage},created:function(){},methods:{sync:function(t){var e=this.$q;switch(t.activity){case"training":this.saveTrainig(e,t);break;case"escalation":this.saveEskalasi(e,t);break}},storeName:function(t){var e=this.stores,n=e.find(function(e){return e.store_id==t.store_id});return n?n.store_name:""},saveTrainig:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,a,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],a=0;a<2;a+=1)i="".concat(n.key,".").concat(a+1),c=e.localStorage.get.item(i),c&&c.length>100&&r.push(c);return t.prev=2,this.$q.loading.show(),t.next=6,o["a"].saveTraining(this.$store,n,r);case 6:this.$q.loading.hide(),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),this.$q.loading.hide(),this.$q.notify(t.t0.message);case 13:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e,n){return t.apply(this,arguments)}}(),saveEskalasi:function(){var t=c()(regeneratorRuntime.mark(function t(e,n){var r,a,i,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(r=[],a=0;a<4;a+=1)i="".concat(n.key,".").concat(a+1),c=e.localStorage.get.item(i),c&&c.length>100&&r.push(c);return t.prev=2,this.$q.loading.show(),t.next=6,o["a"].saveEskalasi(this.$store,n,r);case 6:this.$q.loading.hide(),t.next=13;break;case 9:t.prev=9,t.t0=t["catch"](2),this.$q.loading.hide(),this.$q.notify(t.t0.message);case 13:case"end":return t.stop()}},t,this,[[2,9]])}));return function(e,n){return t.apply(this,arguments)}}()}},s=u,f=(n("b5c8"),n("2877")),d=Object(f["a"])(s,r,a,!1,null,"4406e286",null);d.options.__file="draft.vue";e["default"]=d.exports},b5c8:function(t,e,n){"use strict";var r=n("ed47"),a=n.n(r);a.a},ed47:function(t,e,n){},f1c2:function(t,e,n){"use strict";n("28a5"),n("96cf");var r=n("c973"),a=n.n(r),i=(n("551c"),n("20d6"),n("7514"),n("f9d8")),c=n("f61f"),o=n("49c2"),u=c["a"].init(),s=u.axios,f="data-outstanding",d={saveDraft:function(t,e){var n=t.state.outstanding,r=void 0===n?[]:n,a=r.find(function(t){return t.key===e.key});a?a.data=e.data:r.push(e),t.commit("outstanding",r),i["a"].set(f,r)},removeDraft:function(t,e){var n=t.state.outstanding,r=void 0===n?[]:n,a=r.findIndex(function(t){return t.key===e.key});list.splice(a,1)&&(t.commit("outstanding",r),i["a"].set(f,r))},saveTraining:function(t,e,n){return new Promise(function(){var r=a()(regeneratorRuntime.mark(function r(a,c){var u,g,h;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,u=e.data,r.t0=JSON,r.next=5,o["a"].getCurrentPosition();case 5:return r.t1=r.sent,u.gps=r.t0.stringify.call(r.t0,r.t1),u.rsp_qty=u.training_rsp.split("\n").length,r.next=10,d.saveImages(e.activity,n,u);case 10:return r.next=12,s.post("trainings",u);case 12:g=t.state.outstanding,h=g.findIndex(function(t){return e.key===t.key}),h>=0&&g.splice(h,1)&&(t.commit("outstanding",g),i["a"].set(f,g),d.cleanImage(e.key,n)),a(u),r.next=21;break;case 18:r.prev=18,r.t2=r["catch"](0),c(r.t2);case 21:case"end":return r.stop()}},r,this,[[0,18]])}));return function(t,e){return r.apply(this,arguments)}}())},saveEskalasi:function(t,e,n){return new Promise(function(){var r=a()(regeneratorRuntime.mark(function r(a,c){var u,g,h;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,u=e.data,u.isonline=1,r.t0=JSON,r.next=6,o["a"].getCurrentPosition();case 6:return r.t1=r.sent,u.gps=r.t0.stringify.call(r.t0,r.t1),r.next=10,d.saveImages(e.activity,n,u);case 10:return r.next=12,s.post("escalations",u);case 12:g=t.state.outstanding,h=g.findIndex(function(t){return e.key===t.key}),h>=0&&g.splice(h,1)&&(t.commit("outstanding",g),i["a"].set(f,g),d.cleanImage(e.key,n)),a(u),r.next=21;break;case 18:r.prev=18,r.t2=r["catch"](0),c(r.t2);case 21:case"end":return r.stop()}},r,this,[[0,18]])}));return function(t,e){return r.apply(this,arguments)}}())},saveImages:function(t,e,n){return new Promise(function(){var r=a()(regeneratorRuntime.mark(function r(a,i){var c,o,u,f;return regeneratorRuntime.wrap(function(r){while(1)switch(r.prev=r.next){case 0:r.prev=0,c="".concat(Date.now()),o=0;case 3:if(!(o<e.length)){r.next=14;break}if(n["pic_".concat(o+1)]){r.next=11;break}if(u=e[o],!(u.length>100)){r.next=11;break}return r.next=9,s.post("buckets",{data:u,folder:t,name:"".concat(c).concat(o+1)});case 9:f=r.sent,n["pic_".concat(o+1)]="read/".concat(f.data.id);case 11:o+=1,r.next=3;break;case 14:a(n),r.next=20;break;case 17:r.prev=17,r.t0=r["catch"](0),i(r.t0);case 20:case"end":return r.stop()}},r,this,[[0,17]])}));return function(t,e){return r.apply(this,arguments)}}())},cleanImage:function(t,e){for(var n=1;n<=e.length;n+=1)console.log("".concat(t,".").concat(n)),i["a"].remove("".concat(t,".").concat(n))}};e["a"]=d},f490:function(t,e,n){"use strict";n("28a5"),n("4917"),n("cadf"),n("456d"),n("ac6a"),n("a481");var r=n("73f5"),a=n("177b"),i=n("b157"),c=864e5,o=36e5,u=6e4,s=/\[((?:[^\]\\]|\\]|\\)*)\]|d{1,4}|M{1,4}|m{1,2}|w{1,2}|Qo|Do|D{1,4}|YY(?:YY)?|H{1,2}|h{1,2}|s{1,2}|S{1,3}|Z{1,2}|a{1,2}|[AQExX]/g,f=/^[0-9]{4}-[0-9]{2}-[0-9]{2} [0-9]{2}:[0-9]{2}:[0-9]{2}(.[0-9]{6})?$/;function d(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=t>0?"-":"+",r=Math.abs(t),i=Math.floor(r/60),c=r%60;return n+Object(a["d"])(i)+e+Object(a["d"])(c)}function g(t,e){var n=new Date(t.getFullYear(),e,0,0,0,0,0),r=n.getDate();t.setMonth(e-1,Math.min(r,t.getDate()))}function h(t){return new Date(Object(r["c"])(t)&&null!==f.exec(t)?t.substring(0,23).replace(" ","T"):t)}function l(t,e,n){var r=h(t),i=n?1:-1;return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":Object(a["b"])("days"===t?"date":t);r["set".concat(n)](r["get".concat(n)]()+i*e[t])}else g(r,r.getMonth()+1+i*e.month)}),r}function v(t){if("number"===typeof t)return!0;var e=Date.parse(t);return!1===isNaN(e)}function m(t,e){return M(new Date,t,e)}function p(t){var e=h(t).getDay();return 0===e?7:e}function D(t){var e=new Date(t.getFullYear(),t.getMonth(),t.getDate());e.setDate(e.getDate()-(e.getDay()+6)%7+3);var n=new Date(e.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=e.getTimezoneOffset()-n.getTimezoneOffset();e.setHours(e.getHours()-r);var a=(e-n)/(7*c);return 1+Math.floor(a)}function y(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=h(e).getTime(),i=h(n).getTime(),c=h(t).getTime();return r.inclusiveFrom&&a--,r.inclusiveTo&&i++,c>a&&c<i}function w(t,e){return l(t,e,!0)}function b(t,e){return l(t,e,!1)}function M(t,e,n){var r=h(t),a="set".concat(n?"UTC":"");return Object.keys(e).forEach(function(t){if("month"!==t){var n="year"===t?"FullYear":t.charAt(0).toUpperCase()+t.slice(1);r["".concat(a).concat(n)](e[t])}else g(r,e.month)}),r}function k(t,e){var n=h(t);switch(e){case"year":n.setMonth(0);case"month":n.setDate(1);case"day":n.setHours(0);case"hour":n.setMinutes(0);case"minute":n.setSeconds(0);case"second":n.setMilliseconds(0)}return n}function x(t,e){var n=h(t);switch(e){case"year":n.setMonth(11);case"month":n.setDate(_(t));case"day":n.setHours(23);case"hour":n.setMinutes(59);case"minute":n.setSeconds(59);case"second":n.setMilliseconds(59)}return n}function O(t){for(var e=h(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.max(e,h(t))}),e}function S(t){for(var e=h(t),n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return r.forEach(function(t){e=Math.min(e,h(t))}),e}function Y(t,e,n){return(t.getTime()-t.getTimezoneOffset()*u-(e.getTime()-e.getTimezoneOffset()*u))/n}function T(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"days",r=h(t),a=h(e);switch(n){case"years":return r.getFullYear()-a.getFullYear();case"months":return 12*(r.getFullYear()-a.getFullYear())+r.getMonth()-a.getMonth();case"days":return Y(k(r,"day"),k(a,"day"),c);case"hours":return Y(k(r,"hour"),k(a,"hour"),o);case"minutes":return Y(k(r,"minute"),k(a,"minute"),u);case"seconds":return Y(k(r,"second"),k(a,"second"),1e3)}}function j(t){return T(t,k(t,"year"),"days")+1}function F(t){return Object(r["a"])(t)?"date":"number"===typeof t?"number":"string"}function H(t,e,n){if(t||0===t)switch(e){case"date":return t;case"number":return t.getTime();default:return R(t,n)}}function I(t,e,n){var r=h(t);if(e){var a=h(e);if(r<a)return a}if(n){var i=h(n);if(r>i)return i}return r}function $(t,e,n){var r=h(t),a=h(e);if(void 0===n)return r.getTime()===a.getTime();switch(n){case"second":if(r.getSeconds()!==a.getSeconds())return!1;case"minute":if(r.getMinutes()!==a.getMinutes())return!1;case"hour":if(r.getHours()!==a.getHours())return!1;case"day":if(r.getDate()!==a.getDate())return!1;case"month":if(r.getMonth()!==a.getMonth())return!1;case"year":if(r.getFullYear()!==a.getFullYear())return!1;break;default:throw new Error("date isSameDate unknown unit ".concat(n))}return!0}function _(t){return new Date(t.getFullYear(),t.getMonth()+1,0).getDate()}function q(t){if(t>=11&&t<=13)return"".concat(t,"th");switch(t%10){case 1:return"".concat(t,"st");case 2:return"".concat(t,"nd");case 3:return"".concat(t,"rd")}return"".concat(t,"th")}var E={YY:function(t){return Object(a["d"])(t.getFullYear(),4).substr(2)},YYYY:function(t){return Object(a["d"])(t.getFullYear(),4)},M:function(t){return t.getMonth()+1},MM:function(t){return Object(a["d"])(t.getMonth()+1)},MMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNamesShort||i["a"].lang.date.monthsShort)[t.getMonth()]},MMMM:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.monthNames||i["a"].lang.date.months)[t.getMonth()]},Q:function(t){return Math.ceil((t.getMonth()+1)/3)},Qo:function(t){return q(this.Q(t))},D:function(t){return t.getDate()},Do:function(t){return q(t.getDate())},DD:function(t){return Object(a["d"])(t.getDate())},DDD:function(t){return j(t)},DDDD:function(t){return Object(a["d"])(j(t),3)},d:function(t){return t.getDay()},dd:function(t){return this.dddd(t).slice(0,2)},ddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNamesShort||i["a"].lang.date.daysShort)[t.getDay()]},dddd:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(e.dayNames||i["a"].lang.date.days)[t.getDay()]},E:function(t){return t.getDay()||7},w:function(t){return D(t)},ww:function(t){return Object(a["d"])(D(t))},H:function(t){return t.getHours()},HH:function(t){return Object(a["d"])(t.getHours())},h:function(t){var e=t.getHours();return 0===e?12:e>12?e%12:e},hh:function(t){return Object(a["d"])(this.h(t))},m:function(t){return t.getMinutes()},mm:function(t){return Object(a["d"])(t.getMinutes())},s:function(t){return t.getSeconds()},ss:function(t){return Object(a["d"])(t.getSeconds())},S:function(t){return Math.floor(t.getMilliseconds()/100)},SS:function(t){return Object(a["d"])(Math.floor(t.getMilliseconds()/10))},SSS:function(t){return Object(a["d"])(t.getMilliseconds(),3)},A:function(t){return this.H(t)<12?"AM":"PM"},a:function(t){return this.H(t)<12?"am":"pm"},aa:function(t){return this.H(t)<12?"a.m.":"p.m."},Z:function(t){return d(t.getTimezoneOffset(),":")},ZZ:function(t){return d(t.getTimezoneOffset())},X:function(t){return Math.floor(t.getTime()/1e3)},x:function(t){return t.getTime()}};function R(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DDTHH:mm:ss.SSSZ",n=arguments.length>2?arguments[2]:void 0;if(0===t||t){var r=h(t);return e.replace(s,function(t,e){return t in E?E[t](r,n):void 0===e?t:e.split("\\]").join("]")})}}function N(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.match(s)}function A(t){return Object(r["a"])(t)?new Date(t.getTime()):t}e["a"]={isValid:v,buildDate:m,getDayOfWeek:p,getWeekOfYear:D,isBetweenDates:y,addToDate:w,subtractFromDate:b,adjustDate:M,startOfDate:k,endOfDate:x,getMaxDate:O,getMinDate:S,getDateDiff:T,getDayOfYear:j,inferDateFormat:F,convertDateToFormat:H,getDateBetween:I,isSameDate:$,daysInMonth:_,formatter:E,formatDate:R,matchFormat:N,clone:A}}}]);