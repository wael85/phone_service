(function(e){function t(t){for(var n,l,s=t[0],i=t[1],u=t[2],c=0,d=[];c<s.length;c++)l=s[c],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&d.push(a[l][0]),a[l]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==a[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function l(e){return s.p+"js/"+({about:"about"}[e]||e)+"."+{about:"89ef2c9c"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r=a[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=n);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.src=l(e);var u=new Error;o=function(t){i.onerror=i.onload=null,clearTimeout(c);var r=a[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",u.name="ChunkLoadError",u.type=n,u.request=o,r[1](u)}a[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("cd49")},cd49:function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[r("div",{staticClass:"d-flex align-center"},[r("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),r("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),r("v-spacer"),r("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[r("span",{staticClass:"mr-2"},[e._v("Latest Release")]),r("v-icon",[e._v("mdi-open-in-new")])],1)],1),r("v-main",[r("router-view")],1)],1)},o=[],l=n["a"].extend({name:"App",data:function(){return{}}}),s=l,i=r("2877"),u=r("6544"),c=r.n(u),m=r("7496"),d=r("40dc"),p=r("8336"),f=r("132d"),v=r("adda"),b=r("f6c4"),h=r("2fa4"),g=Object(i["a"])(s,a,o,!1,null,null,null),y=g.exports;c()(g,{VApp:m["a"],VAppBar:d["a"],VBtn:p["a"],VIcon:f["a"],VImg:v["a"],VMain:b["a"],VSpacer:h["a"]});r("d3b7"),r("3ca3"),r("ddb0");var x=r("8c4f"),w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("CreateCustomer")},k=[],C=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"First name",required:""},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.nameRules,counter:10,label:"Last name",required:""},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{rules:e.telRules,counter:8,label:"tel",required:""},model:{value:e.tel,callback:function(t){e.tel=t},expression:"tel"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Street Name",required:""},model:{value:e.streetName,callback:function(t){e.streetName=t},expression:"streetName"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Street Number",required:""},model:{value:e.streetNr,callback:function(t){e.streetNr=t},expression:"streetNr"}})],1)],1),r("v-row",[r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"City",required:""},model:{value:e.city,callback:function(t){e.city=t},expression:"city"}})],1),r("v-col",{attrs:{cols:"12",md:"4"}},[r("v-text-field",{attrs:{label:"Post code",required:""},model:{value:e.postCode,callback:function(t){e.postCode=t},expression:"postCode"}})],1),r("v-col",{attrs:{cols:"4",md:"4"}},[r("v-text-field",{attrs:{label:"Phone Type",required:""},model:{value:e.phoneType,callback:function(t){e.phoneType=t},expression:"phoneType"}})],1)],1),r("v-row",[r("v-textarea",{attrs:{label:"Problem"},model:{value:e.problem,callback:function(t){e.problem=t},expression:"problem"}})],1),r("v-row",[r("v-btn",{on:{click:e.createNewCustomer}},[e._v(" Submit ")])],1)],1)],1)},N=[],j=r("1da1"),O=(r("96cf"),r("a9e3"),r("bc3a")),V=r.n(O),_=n["a"].extend({name:"HelloWorld",data:function(){return{valid:!1,firstname:"",lastname:"",nameRules:[function(e){return!!e||"Name is required"},function(e){return e.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],tel:"",telRules:[function(e){return!!e||"Phone number is required"},function(e){return 8===e.length},function(e){return Number(e)>0}],streetName:"",streetNr:"",city:"",postCode:"",phoneType:"",problem:"",statusOfDevice:!1}},created:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.getCustomers();case 1:case"end":return t.stop()}}),t)})))()},methods:{createNewCustomer:function(){var e=this;return Object(j["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,V.a.post("api/customer",{firstName:e.firstname,lastName:e.lastname,tel:e.tel,streetName:e.streetName,streetNr:e.streetNr,city:e.city,postCode:e.postCode,phoneType:e.phoneType,problem:e.problem,status:!1});case 3:r=t.sent,console.log(r),t.next=10;break;case 7:t.prev=7,t.t0=t["catch"](0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getCustomers:function(){return Object(j["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,V.a.get("api/customer");case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}}),e)})))()}}}),R=_,T=r("62ad"),q=r("a523"),P=r("4bd4"),S=r("0fd9"),E=r("8654"),A=r("a844"),L=Object(i["a"])(R,C,N,!1,null,null,null),M=L.exports;c()(L,{VBtn:p["a"],VCol:T["a"],VContainer:q["a"],VForm:P["a"],VRow:S["a"],VTextField:E["a"],VTextarea:A["a"]});var $=n["a"].extend({name:"Home",components:{CreateCustomer:M}}),B=$,F=Object(i["a"])(B,w,k,!1,null,null,null),H=F.exports;n["a"].use(x["a"]);var I=[{path:"/",name:"Home",component:H},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],J=new x["a"]({mode:"history",base:"/",routes:I}),D=J,W=r("2f62");n["a"].use(W["a"]);var z=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),G=r("f309");n["a"].use(G["a"]);var K=new G["a"]({});n["a"].config.productionTip=!1,new n["a"]({router:D,store:z,vuetify:K,render:function(e){return e(y)}}).$mount("#app")}});
//# sourceMappingURL=app.6fedb67e.js.map