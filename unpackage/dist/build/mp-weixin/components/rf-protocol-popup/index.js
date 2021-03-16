(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rf-protocol-popup/index"],{"4cf5":function(t,n,e){"use strict";e.r(n);var u=e("6093"),o=e("7ef8");for(var r in o)"default"!==r&&function(t){e.d(n,t,(function(){return o[t]}))}(r);e("973a");var a,c=e("f0c5"),i=Object(c["a"])(o["default"],u["b"],u["c"],!1,null,null,null,!1,u["a"],a);n["default"]=i.exports},6093:function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return u}));var o=function(){var t=this,n=t.$createElement;t._self._c},r=[]},"7ef8":function(t,n,e){"use strict";e.r(n);var u=e("877d"),o=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,(function(){return u[t]}))}(r);n["default"]=o.a},"877d":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u={name:"popup",props:{title:{type:String,default:"服务协议和隐私政策"},protocolPath:{type:String},policyPath:{type:String}},data:function(){return{showPopup:!0}},methods:{clear:function(){},back:function(){this.$emit("popupState",!1)},consent:function(){this.$emit("popupState",!0)}}};n.default=u},"973a":function(t,n,e){"use strict";var u=e("ed8e"),o=e.n(u);o.a},ed8e:function(t,n,e){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rf-protocol-popup/index-create-component',
    {
        'components/rf-protocol-popup/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("4cf5"))
        })
    },
    [['components/rf-protocol-popup/index-create-component']]
]);
