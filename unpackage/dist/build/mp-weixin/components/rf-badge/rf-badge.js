(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/rf-badge/rf-badge"],{"12cb":function(t,e,n){"use strict";var u;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return u}));var a=function(){var t=this,e=t.$createElement;t._self._c},i=[]},"2f68":function(t,e,n){"use strict";n.r(e);var u=n("12cb"),a=n("a5fb");for(var i in a)"default"!==i&&function(t){n.d(e,t,(function(){return a[t]}))}(i);n("8263");var r,f=n("f0c5"),c=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,"267b7aee",null,!1,u["a"],r);e["default"]=c.exports},"6e61":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:[String,Number],default:""},size:{type:String,default:"normal"}},data:function(){return{badgeStyle:""}},watch:{text:function(){this.setStyle()}},mounted:function(){this.setStyle()},methods:{setStyle:function(){this.badgeStyle="width: ".concat(8*String(this.text).length+12,"px")},onClick:function(){this.$emit("click")}}};e.default=u},8263:function(t,e,n){"use strict";var u=n("f8b2"),a=n.n(u);a.a},a5fb:function(t,e,n){"use strict";n.r(e);var u=n("6e61"),a=n.n(u);for(var i in u)"default"!==i&&function(t){n.d(e,t,(function(){return u[t]}))}(i);e["default"]=a.a},f8b2:function(t,e,n){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/rf-badge/rf-badge-create-component',
    {
        'components/rf-badge/rf-badge-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("2f68"))
        })
    },
    [['components/rf-badge/rf-badge-create-component']]
]);
