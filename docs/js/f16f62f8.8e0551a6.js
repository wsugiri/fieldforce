(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["f16f62f8"],{"0743":function(t,e,i){},"0831":function(t,e,i){"use strict";var a=i("0743"),s=i.n(a);s.a},"09f8":function(t,e,i){},"0c3d":function(t,e,i){},1142:function(t,e,i){"use strict";var a=i("c2aa"),s=i.n(a);s.a},"254e":function(t,e,i){"use strict";var a=i("0c3d"),s=i.n(a);s.a},"297f":function(t,e,i){},"2d5c":function(t,e,i){},"568d":function(t,e,i){"use strict";var a=i("09f8"),s=i.n(a);s.a},"5dbd":function(t,e,i){},"84a3":function(t,e,i){},"9de8":function(t,e,i){"use strict";var a=i("84a3"),s=i.n(a);s.a},a439:function(t,e,i){"use strict";var a=i("297f"),s=i.n(a);s.a},adab:function(t,e,i){},b963:function(t,e,i){"use strict";var a=i("5dbd"),s=i.n(a);s.a},ba2b:function(t,e,i){"use strict";var a=i("2d5c"),s=i.n(a);s.a},c2aa:function(t,e,i){},c8e4:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkIn()}}},[t._v("Check In")])],1),i("q-page",[i("q-carousel",{attrs:{color:"white",arrows:"","quick-nav":"",height:"300px"}},t._l(t.images,function(t,e){return i("q-carousel-slide",{key:e,attrs:{"img-src":t}})})),i("div",{staticClass:"store-profile"},[i("v-store-profile",{attrs:{store:t.store}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.activity,callback:function(e){t.activity=e},expression:"activity"}},[i("q-modal-layout",[i("v-activity",{attrs:{store:t.store}})],1)],1)],1)},s=[];a._withStripped=!0;i("96cf");var o=i("c973"),n=i.n(o),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-profile"},[i("div",{staticClass:"text-weight-light"},[i("p",{staticClass:"store store-name text-weight-medium"},[i("q-icon",{attrs:{name:"fa fa-building"}}),t._v("\n      "+t._s(t.store.store_name)+"\n    ")],1),i("p",{staticClass:"store store-location"},[i("q-icon",{attrs:{name:"place"}}),t._v("\n      "+t._s(t.store.store_address)+"\n    ")],1)])])},l=[];r._withStripped=!0;var c={props:{store:{type:Object,default:{}}}},u=c,d=(i("254e"),i("2877")),m=Object(d["a"])(u,r,l,!1,null,null,null);m.options.__file="store_profile.vue";var v=m.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"store-activity"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title"),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.checkOut()}}},[t._v("Check Out")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("q-list",{staticClass:"q-pt-none q-pb-none",attrs:{link:"",separator:"",sparse:""}},t._l(t.activities,function(e,a){return i("q-item",{key:a,nativeOn:{click:function(i){t.activityClick(e)}}},[i("q-item-main",[t._v(t._s(e.text))]),i("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}))],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility,callback:function(e){t.visibility=e},expression:"visibility"}},[i("q-modal-layout",[i("v-visibility",{attrs:{store:t.store}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.training,callback:function(e){t.training=e},expression:"training"}},[i("q-modal-layout",[i("v-training",{attrs:{store:t.store},on:{close:function(e){t.training=!1}}})],1)],1),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.eskalasi,callback:function(e){t.eskalasi=e},expression:"eskalasi"}},[i("q-modal-layout",[i("v-eskalasi",{attrs:{store:t.store},on:{close:function(e){t.eskalasi=!1}}})],1)],1)],1)},g=[];p._withStripped=!0;i("b54a");var f=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibilities"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-btn",{directives:[{name:"close-overlay",rawName:"v-close-overlay"}],attrs:{flat:"",round:"",dense:"",icon:"keyboard_arrow_left"}}),i("q-toolbar-title",[t._v("Visibility")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),t._l(t.list,function(e,a){return i("q-card",{key:a,nativeOn:{click:function(i){t.showDetail(e)}}},[i("q-card-main",[i("q-item",{attrs:{link:""}},[i("q-item-main",{attrs:{label:e.activity_name}}),i("div",{staticClass:"icon-visibility",class:e.selected?"selected":""},[i("i",{staticClass:"fa fa-check"})])],1)],1)],1)})],2),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.visibility_detail,callback:function(e){t.visibility_detail=e},expression:"visibility_detail"}},[i("q-modal-layout",[i("v-visibility-detail",{attrs:{store:t.store},on:{close:function(e){t.visibility_detail=!1}}})],1)],1)],1)},b=[];f._withStripped=!0;var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-visibily-detail"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Visibility Detail")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-visibility"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Device Terpasang",helper:"masukkan jumlah device terpasang"}},[i("q-input",{model:{value:t.model.terpasang,callback:function(e){t.$set(t.model,"terpasang",e)},expression:"model.terpasang"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},k=[];h._withStripped=!0;var _=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._l(t.images,function(e,a){return i("q-card",{key:a,staticClass:"bigger q-mt-md"},[i("q-card-title",{staticStyle:{padding:"5px 15px",height:"42px"}},[i("div",[t._v("Picture #"+t._s(a+1))])]),i("q-card-separator"),i("q-card-media",[i("img",{attrs:{src:e.src}})]),i("q-card-separator"),i("q-card-actions",[i("div",{staticClass:"text-center"},[i("q-btn",{attrs:{icon:"fa fa-camera",color:"primary"},on:{click:function(i){t.takingPicture(e)}}},[i("span",{staticClass:"q-ml-sm"},[t._v("Take Picture")])]),i("q-btn",{attrs:{icon:"fa fa-trash",color:"red"},on:{click:function(i){t.removePicture(e)}}},[i("span",{staticClass:"q-ml-sm"},[t._v("Remove Picture")])])],1)])],1)}),i("q-modal",{attrs:{"content-css":{minWidth:"80vw",minHeight:"80vh"}},model:{value:t.take_picture,callback:function(e){t.take_picture=e},expression:"take_picture"}},[i("q-modal-layout",[i("video",{ref:"video",staticStyle:{height:"auto",width:"100%"},attrs:{autoplay:""}}),i("div",{staticClass:"text-center"},[i("q-btn",{staticStyle:{top:"-15px",transform:"translateY(-100%)"},attrs:{round:"",icon:"camera",color:"blue",size:"lg"},on:{click:function(e){t.capturePicture()}}})],1),i("canvas",{ref:"canvas",staticStyle:{display:"none"}})])],1)],2)},q=[];_._withStripped=!0;var y={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg",5:"http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"}},C={props:{images:{type:Array,default:[{id:1,src:y.images["1"]},{id:2,src:y.images["2"]},{id:3,src:y.images["3"]},{id:4,src:y.images["4"]}]}},data:function(){return{take_picture:!1}},methods:{takingPicture:function(t){var e=this;this.video=this.$refs.video,this.image=t,navigator.mediaDevices&&navigator.mediaDevices.getUserMedia&&navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:"environment"}}).then(function(t){var i=window.URL||window.webkitURL;e.video.srcObject=t,e.video.src=i.createObjectURL(t)}),this.take_picture=!0},removePicture:function(t){t&&(t.src=y.images[t.id])},capturePicture:function(){this.take_picture=!1;var t=this.video,e=this.$refs.canvas;e.width=t.videoWidth,e.height=t.videoHeight;var i=e.getContext("2d");i.drawImage(t,0,0);var a=e.toDataURL("image/png");this.image.src=a,t.pause(),t.src="",t.srcObject.getTracks()[0].stop()},save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},j=C,w=Object(d["a"])(j,_,q,!1,null,null,null);w.options.__file="take_picture.vue";var x=w.exports,R={images:{1:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg",2:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg",3:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg",4:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg",5:"http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"}},S={components:{vStoreProfile:v,vTakePicture:x},props:{store:Object,default:{}},data:function(){return{take_picture:!1,images:[{id:1,src:R.images["1"]},{id:2,src:R.images["2"]},{id:3,src:R.images["3"]},{id:4,src:R.images["4"]}],list:[{activity_id:4,activity_name:"Banner",activity_parent:1},{activity_id:5,activity_name:"Sticker",activity_parent:1,selected:1},{activity_id:6,activity_name:"Mini X-Banner",activity_parent:1}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},$=S,O=(i("ba2b"),Object(d["a"])($,h,k,!1,null,null,null));O.options.__file="visibility_detail.vue";var P=O.exports,T={components:{vStoreProfile:v,vVisibilityDetail:P},props:{store:Object,default:{}},data:function(){return{visibility_detail:!1,list:[{activity_id:4,activity_name:"Banner",activity_parent:1},{activity_id:5,activity_name:"Sticker",activity_parent:1,selected:1},{activity_id:6,activity_name:"Mini X-Banner",activity_parent:1}]}},methods:{showDetail:function(t){console.log("----",t),this.visibility_detail=!0}}},E=T,D=(i("df4e"),Object(d["a"])(E,f,b,!1,null,null,null));D.options.__file="visibility.vue";var H=D.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-training"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Training")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-training text-weight-light"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{icon:"important_devices",label:"Nama Training",helper:"masukkan jumlah nama training"}},[i("q-input",{model:{value:t.model.training,callback:function(e){t.$set(t.model,"training",e)},expression:"model.training"}})],1),i("q-field",{attrs:{icon:"fa fa-users",label:"Perserta Training",helper:"masukkan semua nama peserta training"}},[i("q-input",{attrs:{type:"textarea"},model:{value:t.model.list,callback:function(e){t.$set(t.model,"list",e)},expression:"model.list"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},W=[];U._withStripped=!0;i("28a5");var M={components:{vStoreProfile:v,vTakePicture:x},props:{store:Object,default:{}},computed:{listPerserta:function(){var t=[];return this.model.list&&(t=this.model.list.split("\n")),t}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-002.jpg"},{id:3,src:"http://dkm.boogr-sooka.club/img/samples/CR-003.jpg"},{id:4,src:"http://dkm.boogr-sooka.club/img/samples/CR-004.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},B=M,I=(i("1142"),Object(d["a"])(B,U,W,!1,null,null,null));I.options.__file="training.vue";var V=I.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-eskalasi"},[i("q-toolbar",{attrs:{slot:"header"},slot:"header"},[i("q-toolbar-title",[t._v("Eskalasi")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.save()}}},[t._v("Save")]),i("q-btn",{attrs:{flat:""},on:{click:function(e){t.cancel()}}},[t._v("Cancel")])],1),i("q-page",[i("v-store-profile",{attrs:{store:t.store}}),i("div",{staticClass:"card-eskalasi"},[i("q-card",[i("q-card-main",[i("q-field",{attrs:{helper:"Pick one escalation",label:"Status"}},[i("q-option-group",{attrs:{type:"radio",color:"secondary","float-label":"Status",options:[{label:"Temporary",value:"bat"},{label:"Permanent",value:"friend"},{label:"Under Renovation",value:"upload"},{label:"Moved",value:"modev"}]},model:{value:t.model.status,callback:function(e){t.$set(t.model,"status",e)},expression:"model.status"}})],1),i("q-field",[i("q-input",{attrs:{"float-label":"Keterangan",type:"textarea"},model:{value:t.model.keterangan,callback:function(e){t.$set(t.model,"keterangan",e)},expression:"model.keterangan"}})],1)],1)],1),i("v-take-picture",{staticClass:"q-mt-sm",attrs:{images:t.images}})],1)],1)],1)},A=[];L._withStripped=!0;var J={components:{vStoreProfile:v,vTakePicture:x},props:{store:Object,default:{}},data:function(){return{images:[{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:1,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"},{id:2,src:"http://dkm.boogr-sooka.club/img/samples/CR-001.jpg"}],model:{}}},methods:{save:function(){console.log("close"),this.$emit("close")},cancel:function(){console.log("close"),this.$emit("close")}}},N=J,X=(i("9de8"),Object(d["a"])(N,L,A,!1,null,null,null));X.options.__file="eskalasi.vue";var z=X.exports,K={components:{vStoreProfile:v,vVisibility:H,vTraining:V,vEskalasi:z},props:{store:Object,default:{}},data:function(){return{visibility:!1,training:!1,eskalasi:!1,activities:[{text:"Visibility",link:"visibility"},{text:"Training",link:"training"},{text:"Eskalasi Toko",link:"eskalasi"}]}},methods:{activityClick:function(t){console.log("link click",t.link),void 0!=this[t.link]&&(this[t.link]=!0)},checkOut:function(){this.$router.push("/stores")}}},Y=K,F=(i("a439"),i("0831"),Object(d["a"])(Y,p,g,!1,null,null,null));F.options.__file="activity.vue";var G=F.exports,Q=i("5014"),Z={components:{vActivity:G,vStoreProfile:v},data:function(){return{state:null,store:{},images:["http://dkm.boogr-sooka.club/img/samples/CR-001.jpg","http://dkm.boogr-sooka.club/img/samples/CR-002.jpg","http://dkm.boogr-sooka.club/img/samples/CR-003.jpg","http://dkm.boogr-sooka.club/img/samples/CR-004.jpg","http://dkm.boogr-sooka.club/img/samples/CR-005.jpg"],activity:!1}},created:function(){this.refresh()},methods:{refresh:function(){var t=n()(regeneratorRuntime.mark(function t(){var e,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$route.params.id,t.next=3,Q["a"].findById(e);case 3:i=t.sent,this.store=i;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),checkIn:function(){this.state="checkin",this.activity=!0}}},tt=Z,et=(i("568d"),i("b963"),Object(d["a"])(tt,a,s,!1,null,null,null));et.options.__file="store_profile.vue";e["default"]=et.exports},df4e:function(t,e,i){"use strict";var a=i("adab"),s=i.n(a);s.a}}]);