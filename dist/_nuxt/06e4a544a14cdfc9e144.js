(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{251:function(t,e,r){"use strict";var n=r(252);e.a=n.a},268:function(t,e,r){"use strict";var n=r(269);e.a=n.a},269:function(t,e,r){"use strict";r(15),r(10),r(6),r(5),r(7);var n,o=r(2),l=(r(113),r(26),r(44),r(45),r(157),r(273),r(112)),d=r(63),c=r(115),v=r(62),h=r(1),m=r(0),f=r(19);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(n||(n={}));var y=Object(f.a)(l.a,d.a,c.a,v.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(h.o)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(h.l)(t).find((function(e){return t[e]}));return e&&n[e]||Object(h.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:x({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},applyColors:function(data){data.class=x({},data.class,{},this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var r=[],data=this.getDefaultData(),n="material-icons",o=t.indexOf("-"),l=o<=-1;l?r.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(n=t.slice(0,o))&&(n=""),data.class[n]=!0,data.class[t]=!l;var d=this.getSize();return d&&(data.style={fontSize:d}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,r)},renderSvgIcon:function(t,e){var r=this.getSize(),n=x({},this.getDefaultData(),{style:r?{fontSize:r,height:r,width:r}:void 0});n.class["v-icon--svg"]=!0,this.applyColors(n);var o={attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",height:r||"32",width:r||"32",role:"img","aria-hidden":!0}};return e(this.hasClickListener?"button":"span",n,[e("svg",o,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data=this.getDefaultData();data.class["v-icon--is-component"]=!0;var r=this.getSize();r&&(data.style={fontSize:r,height:r}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(component,data)}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}});e.a=m.a.extend({name:"v-icon",$_wrapperFor:y,functional:!0,render:function(t,e){var data=e.data,r=e.children,n="";return data.domProps&&(n=data.domProps.textContent||data.domProps.innerHTML||n,delete data.domProps.textContent,delete data.domProps.innerHTML),t(y,data,n?[n]:r)}})},270:function(t,e,r){var content=r(290);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("78bb8044",content,!0,{sourceMap:!1})},271:function(t,e,r){var content=r(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("5db1c400",content,!0,{sourceMap:!1})},272:function(t,e,r){(e=r(13)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1);transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__border--left,.v-alert__border--right{bottom:0;top:0}.v-alert__border--bottom,.v-alert__border--top{left:0;right:0}.v-alert__border--bottom{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;bottom:0}.v-application--is-ltr .v-alert__border--left{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-application--is-ltr .v-alert__border--right,.v-application--is-rtl .v-alert__border--left{border-top-right-radius:inherit;border-bottom-right-radius:inherit;right:0}.v-application--is-rtl .v-alert__border--right{border-top-left-radius:inherit;border-bottom-left-radius:inherit;left:0}.v-alert__border--top{border-top-left-radius:inherit;border-top-right-radius:inherit;top:0}.v-alert__content{-webkit-box-flex:1;flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{-webkit-box-align:center;align-items:center;border-radius:inherit;display:-webkit-box;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},273:function(t,e,r){var content=r(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(14).default)("6b715e77",content,!0,{sourceMap:!1})},274:function(t,e,r){(e=r(13)(!1)).push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;font-feature-settings:"liga";font-size:24px;-webkit-box-pack:center;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;-webkit-transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;opacity:0;pointer-events:none;position:absolute;-webkit-transform:scale(1.3);transform:scale(1.3);width:100%;-webkit-transition:opacity .2s cubic-bezier(.4,0,.6,1);transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--is-component,.v-icon--svg{height:24px;width:24px}.v-icon--svg{fill:currentColor}.v-icon--dense--is-component{height:20px}',""]),t.exports=e},289:function(t,e,r){"use strict";var n=r(270);r.n(n).a},290:function(t,e,r){(e=r(13)(!1)).push([t.i,"table[data-v-5f3d0d4b]{width:100%}.ingreTable[data-v-5f3d0d4b]{border-collapse:collapse}.ingreTable input[data-v-5f3d0d4b]{width:100%}.ingreTableAmount[data-v-5f3d0d4b],.ingreTableNum[data-v-5f3d0d4b],.ingreTableUnit[data-v-5f3d0d4b]{width:10%;border:1px solid #d3d3d3}.ingreTableIngre[data-v-5f3d0d4b]{width:70%;border:1px solid #d3d3d3}.container[data-v-5f3d0d4b]{font-weight:100}tr[data-v-5f3d0d4b]{margin-top:2px;margin-bottom:2px;clear:both}#confirmBtn[data-v-5f3d0d4b],.addBtn[data-v-5f3d0d4b]{float:right}.addBtn[data-v-5f3d0d4b]{margin-left:5px}.refreshBtn[data-v-5f3d0d4b]{top:5px}.phoneBtn[data-v-5f3d0d4b]{display:none}.dataName[data-v-5f3d0d4b]{font-size:150%}.tagInput[data-v-5f3d0d4b]{margin:2px 3px;width:18%}.normalInput[data-v-5f3d0d4b],.tagInput[data-v-5f3d0d4b]{background-color:#d4d4d4}.normalInput[data-v-5f3d0d4b]{width:100%}.preview[data-v-5f3d0d4b]{margin:auto;width:400px;clear:both}.morePreview[data-v-5f3d0d4b]{margin:10px 10px 0 0;width:20%}.alert[data-v-5f3d0d4b]{color:red}a[data-v-5f3d0d4b]{text-decoration:none;color:#000}@media only screen and (max-width:600px){.alert[data-v-5f3d0d4b]{font-size:90%;display:block}.tagAlert[data-v-5f3d0d4b]{font-size:70%}.mulBtn[data-v-5f3d0d4b]{display:none}.phoneBtn[data-v-5f3d0d4b]{display:inline-block;height:30px;float:left;margin:10px 2px 2px}.refreshBtn[data-v-5f3d0d4b]{top:3px}.ingreTableAmount[data-v-5f3d0d4b],.ingreTableNum[data-v-5f3d0d4b],.ingreTableUnit[data-v-5f3d0d4b]{width:13%;border:1px solid #d3d3d3}.ingreTableIngre[data-v-5f3d0d4b]{width:60%;border:1px solid #d3d3d3}.ingreTable input[data-v-5f3d0d4b]{font-size:50%}}",""]),t.exports=e},319:function(t,e,r){"use strict";r(15),r(10),r(6),r(5),r(7);var n=r(2),o=(r(44),r(45),r(271),r(114)),l=r(251),d=r(268),c=r(79),v=r(62),h=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),m=r(19),f=r(4);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}e.a=Object(m.a)(o.a,c.a,h).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(d.a,{props:{color:e}},"$cancel")])},__cachedIcon:function(){return this.computedIcon?this.$createElement(d.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},o.a.options.computed.classes.call(this),{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||v.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(f.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},329:function(t,e,r){"use strict";r.r(e);var n=r(88),o=r.n(n),l={data:function(){return{title:"",desc:"",tags:[],image:"",ingredients:[],amount:[],unit:[],moreImages:[],recipes:[],errMsg:""}},mounted:function(){var t=this,e=this;o.a.get("/api/get/recipes").then((function(t){e.recipes=t.data})),this.errMsg="",o.a.get("/api/auth-with-jwt",{headers:{token:localStorage.getItem("token")}}).then((function(e){console.log(e),200===e.status&&e.data.profile.permissionLevel>=2&&(t.errMsg="Sorry, your account does not have permission to post a recipe!")}))},methods:{addTag:function(){this.tags.push("")},delTag:function(){this.tags.pop("")},addIngre:function(){this.ingredients.push(""),this.amount.push(""),this.unit.push("")},delIngre:function(){this.ingredients.pop(""),this.amount.pop(""),this.unit.pop("")},send:function(){canSubmit&&o.a.post("/api/post/add-recipe",{title:this.title,desc:this.desc,tags:this.tags,image:this.image,ingredients:this.ingredients,amount:this.amount,unit:this.unit,moreImages:this.moreImages})},onFileChange:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&this.createImage(e[0])},createImage:function(t){new Image;var e=new FileReader,r=this;e.onload=function(t){r.image=t.target.result},e.readAsDataURL(t)},removeImage:function(t){this.image=""},refresh:function(){this.moreImages.push(""),this.moreImages.pop()},addMoreImages:function(t){var e=t.target.files||t.dataTransfer.files;if(e.length)for(var i=0;i<e.length;i++)this.createMoreImages(e[i],i)},createMoreImages:function(t,e){new Image;var r=new FileReader,n=this;r.onload=function(t){n.moreImages[e]=t.target.result},r.readAsDataURL(t)},getMoreImages:function(t){return this.moreImages[t]}},computed:{existedTitle:function(){for(var i=0;i<this.recipes.length;i++)if(this.recipes[i].title==this.title)return!0;return!1},emptyTitle:function(){return""==this.title},emptyDesc:function(){return""==this.desc},emptyTags:function(){if(this.tags.length>=1)for(var i=0;i<this.tags.length;i++)if(""==this.tags[i])return!0;return!1},emptyImage:function(){return""==this.image},emptyIngre:function(){for(var i=0;i<this.ingredients.length;i++){if(""==this.ingredients[i])return!0;if(""==this.amount[i])return!0;if(""==this.unit[i])return!0}return!1},canSubmit:function(){return 0==this.existedTitle&&0==this.emptyTitle&&0==this.emptyDesc&&0==this.emptyTags&&0==this.emptyImage&&0==this.emptyIngre&&""==this.errMsg}},created:function(){null===localStorage.getItem("token")&&this.$router.push("/signin")}},d=(r(289),r(46)),c=r(111),v=r.n(c),h=r(319),m=r(252),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("v-alert",{attrs:{type:"error",value:""==!t.errMsg,transition:"scale-transition"}},[t._v("\n        "+t._s(t.errMsg)+"\n    ")]),t._v(" "),r("table",[r("tr",[r("td",{staticClass:"dataName"},[r("span",[t._v("Title*")]),t._v(" "),t.emptyTitle?r("span",{staticClass:"alert"},[t._v("Cannot be empty, please input")]):t._e(),t._v(" "),t.existedTitle?r("span",{staticClass:"alert"},[t._v(" WARNING: Recipe with such name already existed")]):t._e(),r("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],staticClass:"normalInput",attrs:{type:"text",placeholder:" *Required"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})])]),t._v(" "),r("tr",[r("td",{staticClass:"dataName"},[t._v("Description* \n                "),t.emptyDesc?r("span",{staticClass:"alert"},[t._v("Cannot be empty, please input")]):t._e()])]),t._v(" "),r("tr",[r("td",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"normalInput",attrs:{cols:"155",rows:"5",placeholder:" *Required"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})])]),t._v(" "),r("tr",[r("td",[r("span",{staticClass:"dataName"},[t._v("Tags "),t.emptyTags?r("span",{staticClass:"alert tagAlert"},[t._v(" None of them can be empty, please input")]):t._e()]),t._v(" "),r("v-btn",{staticClass:"addBtn mulBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.delTag}},[t._v("DEL")]),t._v(" "),r("v-btn",{staticClass:"addBtn mulBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.addTag}},[t._v("ADD")])],1)])]),t._v(" "),t._l(t.tags,(function(e,n){return r("span",{key:n},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.tags[n],expression:"tags[index]"}],staticClass:"tagInput",attrs:{type:"text",placeholder:" #tag"},domProps:{value:t.tags[n]},on:{input:function(e){e.target.composing||t.$set(t.tags,n,e.target.value)}}})])})),t._v(" "),t.tags.length>=1?r("br"):t._e(),t._v(" "),r("v-btn",{staticClass:"addBtn phoneBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.addTag}},[t._v("ADD")]),t._v(" "),r("v-btn",{staticClass:"addBtn phoneBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.delTag}},[t._v("DEL")]),t._v(" "),t.image?r("table",[t._m(0),t._v(" "),r("tr",[r("td",[r("img",{staticClass:"preview",attrs:{src:t.image}})])]),t._v(" "),r("tr",[r("td",[r("v-btn",{on:{click:t.removeImage}},[t._v("Cancel and Remove image")])],1)])]):r("table",[r("tr",[r("td",{staticClass:"dataName"},[t._v("\n                    Select a profile image* \n                    "),t.emptyImage?r("span",{staticClass:"alert"},[t._v("Cannot be empty, please input")]):t._e()])]),t._v(" "),r("tr",[r("td",[r("input",{attrs:{type:"file"},on:{change:t.onFileChange}})])])]),t._v(" "),r("br"),t._v(" "),r("table",[r("tr",[r("td",[r("span",{staticClass:"dataName"},[t._v("Ingredients Table")]),t._v(" "),t.emptyIngre?r("span",{staticClass:"alert"},[t._v("None of them can be empty, please input")]):t._e(),t._v(" "),r("v-btn",{staticClass:"addBtn mulBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.delIngre}},[t._v("Del")]),t._v(" "),r("v-btn",{staticClass:"addBtn mulBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.addIngre}},[t._v("Add")])],1)])]),t._v(" "),r("table",{staticClass:"ingreTable"},[r("thead",[r("tr",{directives:[{name:"show",rawName:"v-show",value:t.ingredients.length>=1,expression:"ingredients.length >= 1"}]},[r("th",{staticClass:"ingreTableNum"},[t._v("#Number")]),t._v(" "),r("th",{staticClass:"ingreTableIngre"},[t._v("Ingredient")]),t._v(" "),r("th",{staticClass:"ingreTableAmount"},[t._v("Amount")]),t._v(" "),r("th",{staticClass:"ingreTableUnit"},[t._v("Unit")])])]),t._v(" "),r("tbody",t._l(t.ingredients,(function(e,n){return r("tr",{key:n},[r("td",{staticClass:"ingreTableNum"},[t._v(" "+t._s(n+1))]),t._v(" "),r("td",{staticClass:"ingreTableIngre"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.ingredients[n],expression:"ingredients[index]"}],attrs:{type:"text"},domProps:{value:t.ingredients[n]},on:{input:function(e){e.target.composing||t.$set(t.ingredients,n,e.target.value)}}})]),t._v(" "),r("td",{staticClass:"ingreTableAmount"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.amount[n],expression:"amount[index]"}],attrs:{type:"text"},domProps:{value:t.amount[n]},on:{input:function(e){e.target.composing||t.$set(t.amount,n,e.target.value)}}})]),t._v(" "),r("td",{staticClass:"ingreTableUnit"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.unit[n],expression:"unit[index]"}],attrs:{type:"text"},domProps:{value:t.unit[n]},on:{input:function(e){e.target.composing||t.$set(t.unit,n,e.target.value)}}})])])})),0)]),t._v(" "),r("v-btn",{staticClass:"phoneBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.addIngre}},[t._v("Add")]),t._v(" "),r("v-btn",{staticClass:"phoneBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.delIngre}},[t._v("Del")]),t._v(" "),r("table",{staticClass:"imagesTable"},[r("tr",[r("td",[r("span",{staticClass:"dataName"},[t._v("More Images")]),t._v(" "),r("v-btn",{staticClass:"addBtn refreshBtn",attrs:{color:"#d4d4d4",depressed:""},on:{click:t.refresh}},[t._v("REFRESH")])],1)])]),t._v(" "),r("input",{attrs:{type:"file",multiple:""},on:{change:function(e){return t.addMoreImages(e)}}}),t._v(" "),r("br"),t._v(" "),t._l(t.moreImages,(function(e,n){return r("img",{key:n,staticClass:"morePreview",attrs:{src:t.getMoreImages(n)}})})),t._v(" "),r("br"),t._v(" "),r("nuxt-link",{attrs:{to:"/"}},[r("v-btn",{attrs:{color:"#BBDEFB",id:"confirmBtn",disabled:!t.canSubmit},on:{click:t.send}},[t._v("Confirm")])],1),t._v(" "),r("br")],2)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"dataName"},[this._v("Image Preview")])])}],!1,null,"5f3d0d4b",null);e.default=component.exports;v()(component,{VAlert:h.a,VBtn:m.a})}}]);