module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist/",n(n.s=13)}([function(t,e,n){"use strict";function r(t,e,n,r,o,u,i,a){var s,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),u&&(c._scopeId="data-v-"+u),i?(s=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},c._ssrRegister=s):o&&(s=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var f=c.render;c.render=function(t,e){return s.call(e),f(t,e)}}else{var d=c.beforeCreate;c.beforeCreate=d?[].concat(d,s):[s]}return{exports:t,options:c}}n.d(e,"a",function(){return r})},function(t,e,n){"use strict";n.r(e);var r=n(2),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{who:"Vue and Webpack !!"}}}},function(t,e,n){var r=n(17);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var o=n(19).default;t.exports.__inject__=function(t){o("9968b7b8",r,!0,t)}},function(t,e,n){"use strict";n.r(e);var r=n(5),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"component"}}}},function(t,e,n){"use strict";n.r(e);var r=n(7),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{name:"about"}}}},function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._ssrNode('<div class="hello" data-v-0502c6be>'+t._ssrEscape("Hello "+t._s(t.who))+"</div> <br data-v-0502c6be> "),t._ssrNode("<p data-v-0502c6be>","</p>",[n("router-link",{attrs:{to:"/"}},[t._v("Go To Home")]),t._ssrNode(" "),n("router-link",{attrs:{to:"/page2"}},[t._v("Go To page2")])],2),t._ssrNode(" "),n("router-view")],2)},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"testComponent"}},[this._ssrNode(this._ssrEscape("\n\tI'm a "+this._s(this.name)+".\n\n"))])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e,n){"use strict";var r=function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"testComponent"}},[this._ssrNode(this._ssrEscape("\n\tThis is "+this._s(this.name)+".\n\t\n"))])},o=[];n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o})},function(t,e){t.exports=require("vue")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var u=e[o],i=u[0],a=u[1],s=u[2],c=u[3],f={id:t+":"+o,css:a,media:s,sourceMap:c};r[i]?r[i].parts.push(f):n.push(r[i]={id:i,parts:[f]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return new Promise(function(e,n){var o=(0,r.createApp)(),u=o.app,i=o.router;i.push(t.url),i.onReady(function(){if(!i.getMatchedComponents().length)return n({code:404});e(u)},n)})};var r=n(14)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=function(){var t=(0,u.createRouter)();return{app:new r.default({router:t,render:function(t){return t(o.default)}}),router:t}};var r=i(n(11)),o=i(n(15)),u=n(20);function i(t){return t&&t.__esModule?t:{default:t}}},function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(1);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var i=n(0);var a=Object(i.a)(o.default,r.a,r.b,!1,function(t){var e=n(16);e.__inject__&&e.__inject__(t)},"0502c6be","75be44e2");e.default=a.exports},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,function(){return r[t]})}(u);e.default=o.a},function(t,e,n){(t.exports=n(18)(!1)).push([t.i,"\n.hello[data-v-0502c6be] {\n  padding: .5em;\n  font-size: 2em;\n  background-color: #fcf;\n}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),u=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(u).concat([o]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var u=this[o][0];"number"==typeof u&&(r[u]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return u});var r=n(12),o=n.n(r);function u(t,e,n,r){if(r||"undefined"==typeof __VUE_SSR_CONTEXT__||(r=__VUE_SSR_CONTEXT__),r){r.hasOwnProperty("styles")||(Object.defineProperty(r,"styles",{enumerable:!0,get:function(){return i(r._styles)}}),r._renderStyles=i);var u=r._styles||(r._styles={});e=o()(t,e),n?function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var u=r[o],i=u.media||"default",a=t[i];a?a.ids.indexOf(u.id)<0&&(a.ids.push(u.id),a.css+="\n"+u.css):t[i]={ids:[u.id],css:u.css,media:u.media}}}(u,e):function(t,e){for(var n=0;n<e.length;n++)for(var r=e[n].parts,o=0;o<r.length;o++){var u=r[o];t[u.id]={ids:[u.id],css:u.css,media:u.media}}}(u,e)}}function i(t){var e="";for(var n in t){var r=t[n];e+='<style data-vue-ssr-id="'+r.ids.join(" ")+'"'+(r.media?' media="'+r.media+'"':"")+">"+r.css+"</style>"}return e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.createRouter=function(){return new o.default({routes:[{path:"/",name:"testComponent",component:u.default},{path:"/page2",name:"page2",component:i.default}]})};var r=a(n(11)),o=a(n(21)),u=a(n(22)),i=a(n(23));function a(t){return t&&t.__esModule?t:{default:t}}r.default.use(o.default)},function(t,e){t.exports=require("vue-router")},function(t,e,n){"use strict";n.r(e);var r=n(9),o=n(4);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var i=n(0);var a=Object(i.a)(o.default,r.a,r.b,!1,function(t){},null,"48469998");e.default=a.exports},function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(6);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);var i=n(0);var a=Object(i.a)(o.default,r.a,r.b,!1,function(t){},null,"2850e9a8");e.default=a.exports}]);