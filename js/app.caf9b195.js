(function(e){function t(t){for(var n,a,l=t[0],o=t[1],c=t[2],d=0,f=[];d<l.length;d++)a=l[d],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&f.push(s[a][0]),s[a]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(f.length)f.shift()();return i.push.apply(i,c||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var o=r[l];0!==s[o]&&(n=!1)}n&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},s={app:0},i=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/alef-dev/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view"),r("Footer")],1)},i=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("div",{staticClass:"container header__container"},[n("router-link",{staticClass:"header__link",attrs:{to:{name:"EditUser"}}},[n("img",{staticClass:"header__logo",attrs:{src:r("871a"),alt:""}})]),n("nav",{staticClass:"header__nav nav"},[n("ul",{staticClass:"nav__list"},[n("li",{staticClass:"nav__item"},[n("router-link",{staticClass:"nav__link",attrs:{to:{name:"EditUser"},"active-class":"active"}},[e._v("Форма")])],1),n("li",{staticClass:"nav__item"},[n("router-link",{staticClass:"nav__link",attrs:{to:{name:"PreviewUser"},"active-class":"active"}},[e._v("Превью")])],1)])])],1)])},l=[],o={},c=o,u=r("2877"),d=Object(u["a"])(c,a,l,!1,null,null,null),f=d.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("footer",{staticClass:"footer"},[e._v("all rights reserved")])},p=[],m={},h=m,v=Object(u["a"])(h,_,p,!1,null,null,null),b=v.exports,g={components:{Header:f,Footer:b}},C=g,w=Object(u["a"])(C,s,i,!1,null,null,null),O=w.exports,y=r("8c4f"),j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"user"},[r("div",{staticClass:"container user__container"},[r("form",{staticClass:"form form-user",attrs:{action:"#"}},[r("h2",{staticClass:"title form-title"},[e._v("Персональные данные")]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.username,expression:"user.username",modifiers:{trim:!0}}],staticClass:"form__input form-user__input",attrs:{type:"text",placeholder:" "},domProps:{value:e.user.username},on:{input:function(t){t.target.composing||e.$set(e.user,"username",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"form__label form-user__label"},[e._v("Имя")])]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.user.age,expression:"user.age",modifiers:{trim:!0}}],staticClass:"form__input form-user__input",attrs:{type:"number",placeholder:" "},domProps:{value:e.user.age},on:{input:function(t){t.target.composing||e.$set(e.user,"age",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"form__label form-user__label"},[e._v("Возраст")])])]),r("form",{staticClass:"form form-children",attrs:{action:"#"}},[r("div",{staticClass:"form-children__heading-block"},[r("h2",{staticClass:"title form-title form-children__title"},[e._v("Дети (макс.5)")]),e.childreCountIsMax?r("button",{staticClass:"btn btn__add",on:{click:function(t){return t.preventDefault(),e.addChildren()}}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M5.13332 10.8556C4.50125 10.8555 3.98887 11.3679 3.98887 12C3.98887 12.6321 4.50126 13.1445 5.13332 13.1445L10.8554 13.1445L10.8554 18.8668C10.8554 19.4989 11.3678 20.0113 11.9999 20.0113C12.632 20.0113 13.1444 19.4989 13.1444 18.8668L13.1443 13.1445L18.8667 13.1445C19.4988 13.1445 20.0112 12.6321 20.0112 12C20.0112 11.3679 19.4988 10.8556 18.8667 10.8556L13.1443 10.8556L13.1443 5.13338C13.1443 4.50132 12.632 3.98893 11.9999 3.98893C11.3678 3.98893 10.8554 4.50131 10.8554 5.13338L10.8554 10.8556L5.13332 10.8556Z",fill:"#01A7FD"}})]),r("span",[e._v("Добавить ребенка")])]):e._e()]),e._l(e.childrens,(function(t,n){return r("fieldset",{key:n,staticClass:"fieldset-children"},[r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.childrens[n].childrenName,expression:"childrens[index].childrenName",modifiers:{trim:!0}}],staticClass:"form__input form-children__input",attrs:{type:"text",placeholder:" "},domProps:{value:e.childrens[n].childrenName},on:{input:function(t){t.target.composing||e.$set(e.childrens[n],"childrenName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"form__label form-children__label"},[e._v("Имя")])]),r("label",[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.childrens[n].childrenAge,expression:"childrens[index].childrenAge",modifiers:{trim:!0}}],staticClass:"form__input form-children__input",attrs:{type:"number",placeholder:" "},domProps:{value:e.childrens[n].childrenAge},on:{input:function(t){t.target.composing||e.$set(e.childrens[n],"childrenAge",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("span",{staticClass:"form__label form-children__label"},[e._v("Возраст")])]),r("button",{staticClass:"btn btn__delete",on:{click:function(t){return e.deleteChildren(n)}}},[e._v(" Удалить ")])])}))],2),r("button",{staticClass:"btn btn__save",on:{click:function(t){return t.preventDefault(),e.setUser.apply(null,arguments)}}},[e._v("Сохранить")])])])},x=[],U=r("5530"),E=(r("a434"),r("2f62")),N={mounted:function(){this.user=this.getUser,this.childrens=this.getChildren},data:function(){return{user:{username:"",age:""},childrens:[]}},methods:Object(U["a"])(Object(U["a"])({},Object(E["b"])("usersInfo",["setUserInfo"])),{},{addChildren:function(){this.childrens.push({childrenName:"",childrenAge:""})},deleteChildren:function(e){this.childrens.splice(e,1)},setUser:function(){this.setUserInfo({user:this.user,children:this.childrens}),this.$router.push({name:"PreviewUser"})}}),computed:Object(U["a"])(Object(U["a"])({},Object(E["c"])("usersInfo",["getUser","getChildren"])),{},{childreCountIsMax:function(){return this.childrens.length<5}})},I=N,k=Object(u["a"])(I,j,x,!1,null,null,null),S=k.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"preview"},[r("div",{staticClass:"container preview__container"},[r("h2",{staticClass:"title"},[e._v("Персональные данные")]),r("p",{staticClass:"preview__content preview__user"},[e._v(" "+e._s(e.getUser.username)+", "+e._s(e.getUser.age)+" лет ")]),r("h2",{staticClass:"title"},[e._v("Дети")]),e._l(e.getChildren,(function(t,n){return r("p",{key:n,staticClass:"preview__content preview__children"},[e._v(" "+e._s(t.childrenName)+", "+e._s(t.childrenAge)+" лет ")])}))],2)])},P=[],L={computed:Object(U["a"])({},Object(E["c"])("usersInfo",["getUser","getChildren"]))},F=L,T=Object(u["a"])(F,$,P,!1,null,null,null),A=T.exports;n["a"].use(y["a"]);var M,D=[{path:"/edit-user",alias:"/",name:"EditUser",component:S},{path:"/preview-user",name:"PreviewUser",component:A}],R=new y["a"]({mode:"history",base:"/alef-dev/",routes:D}),H=R,J=r("ade3"),B={SET_USER_INFO:"SET_USER_INFO",SET_CHILDREN_INFO:"SET_CHILDREN_INFO"},Z=B.SET_USER_INFO,q=B.SET_CHILDREN_INFO,z={namespaced:!0,state:{user:{username:"",age:""},children:[]},getters:{getUser:function(e){return e.user},getChildren:function(e){return e.children}},mutations:(M={},Object(J["a"])(M,Z,(function(e,t){e.user=t})),Object(J["a"])(M,q,(function(e,t){e.children=t})),M),actions:{setUserInfo:function(e,t){var r=e.commit,n=t.user,s=t.children;r(Z,n),r(q,s)}}};n["a"].use(E["a"]);var G=new E["a"].Store({state:{},mutations:{},actions:{},modules:{usersInfo:z}});r("73ec");n["a"].config.productionTip=!1,new n["a"]({router:H,store:G,render:function(e){return e(O)}}).$mount("#app")},"73ec":function(e,t,r){},"871a":function(e,t,r){e.exports=r.p+"img/Frame 10alef-dev-logo.3fef4b6d.svg"}});
//# sourceMappingURL=app.caf9b195.js.map