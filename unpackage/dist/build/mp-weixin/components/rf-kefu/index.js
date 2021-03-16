(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rf-kefu/index"],{"0ba0":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={name:"Home",props:{bottom:{type:Number,default:150}},data:function(){return{kefuClass:!1,appServiceQr:this.$mSettingConfig.appServiceQr,appServiceType:this.$mSettingConfig.appServiceType}},methods:{stopPrevent:function(){},hide:function(){this.kefuClass=!1},show:function(){if("1"===this.appServiceType)this.kefuClass=!0;else if("2"===this.appServiceType){if(!this.$mStore.getters.hasLogin)return void this.$mHelper.backToLogin();this.$mRouter.push({route:"/pages/product/service/index"})}}}};t.default=i},"1b0d":function(e,t,n){"use strict";var i;n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return i}));var r=function(){var e=this,t=e.$createElement;e._self._c},u=[]},"791f":function(e,t,n){},"982d":function(e,t,n){"use strict";n.r(t);var i=n("0ba0"),r=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);t["default"]=r.a},"9c91":function(e,t,n){"use strict";var i=n("791f"),r=n.n(i);r.a},eaa9:function(e,t,n){"use strict";n.r(t);var i=n("1b0d"),r=n("982d");for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);n("9c91");var a,o=n("f0c5"),c=Object(o["a"])(r["default"],i["b"],i["c"],!1,null,"30bf099d",null,!1,i["a"],a);t["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rf-kefu/index-create-component',
    {
        'components/rf-kefu/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("eaa9"))
        })
    },
    [['components/rf-kefu/index-create-component']]
]);
