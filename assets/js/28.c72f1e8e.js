(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{299:function(t,s,a){"use strict";a.r(s);var n=a(13),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"mixins混入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins混入"}},[t._v("#")]),t._v(" mixins混入")]),t._v(" "),s("h3",{attrs:{id:"局部组件mixins"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部组件mixins"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://rayhomie.gitee.io/rayhomieblog/VUE/VueMixin/#%E5%B1%80%E9%83%A8%E7%BB%84%E4%BB%B6mixins%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("局部组件mixins：")]),t._v(" "),s("p",[t._v("混入 (mixin) 提供了一种非常灵活的方式，来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当局部组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 定义一个混入对象\nvar myMixin = {\n  created: function () {\n    this.hello()\n  },\n  methods: {\n    hello: function () {\n      console.log('hello from mixin!')\n    }\n  }\n}\n\n// 定义一个使用混入对象的组件\nvar Component = Vue.extend({\n  mixins: [myMixin]\n})\n\nvar component = new Component() // => \"hello from mixin!\"\n")])])]),s("h3",{attrs:{id:"mixins的选项合并"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mixins的选项合并"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://rayhomie.gitee.io/rayhomieblog/VUE/VueMixin/#mixins%E7%9A%84%E9%80%89%E9%A1%B9%E5%90%88%E5%B9%B6%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("mixins的选项合并：")]),t._v(" "),s("p",[t._v("当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。")]),t._v(" "),s("ul",[s("li",[t._v("data对象在内部会进行递归合并，并在发生"),s("strong",[t._v("冲突时以组件数据优先")]),t._v("。")]),t._v(" "),s("li",[t._v("同名钩子函数将合并为一个数组，因此"),s("strong",[t._v("都将被调用")]),t._v("。另外，"),s("strong",[t._v("混入对象的钩子将在组件自身钩子之前调用")]),t._v("。")]),t._v(" "),s("li",[t._v("值为对象的选项，例如 methods、components 和 directives，将被合并为同一个对象。两个对象键名冲突时，"),s("strong",[t._v("取组件对象的键值对")]),t._v("。")])]),t._v(" "),s("h3",{attrs:{id:"全局混入mixin"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局混入mixin"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://rayhomie.gitee.io/rayhomieblog/VUE/VueMixin/#%E5%85%A8%E5%B1%80%E6%B7%B7%E5%85%A5mixin%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),s("a",{attrs:{href:"https://cn.vuejs.org/v2/guide/mixins.html#%E5%85%A8%E5%B1%80%E6%B7%B7%E5%85%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("全局混入mixin："),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("混入也可以进行全局注册。使用时"),s("strong",[t._v("格外小心")]),t._v("！一旦使用全局混入，它将影响"),s("strong",[t._v("每一个")]),t._v("之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 为自定义的选项 'myOption' 注入一个处理器。\nVue.mixin({\n  created: function () {\n    var myOption = this.$options.myOption\n    if (myOption) {\n      console.log(myOption)\n    }\n  }\n})\n\nnew Vue({\n  myOption: 'hello!'\n})\n// => \"hello!\"\n")])])]),s("h3",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://rayhomie.gitee.io/rayhomieblog/VUE/VueMixin/#%E6%80%BB%E7%BB%93%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),t._v("总结：")]),t._v(" "),s("ul",[s("li",[t._v("组件有mixins选项，是数组类型，里面可以接收mixin对象，mixins:[mixinObject]")]),t._v(" "),s("li",[t._v("全局Vue对象可以调用mixin()方法，里面接收mixin对象，Vue.mixin(mixinObject)")]),t._v(" "),s("li",[t._v("mixin对象与组件选项会进行合并，如果有冲突，组件优先级高于mixin")])]),t._v(" "),s("h3",{attrs:{id:"使用mixin做一个ui库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用mixin做一个ui库"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://rayhomie.gitee.io/rayhomieblog/VUE/VueMixin/#%E4%BD%BF%E7%94%A8mixin%E5%81%9A%E4%B8%80%E4%B8%AAui%E5%BA%93%EF%BC%9A",target:"_blank",rel:"noopener noreferrer"}},[t._v("#"),s("OutboundLink")],1),s("a",{attrs:{href:"https://www.bilibili.com/video/BV1LC4y1h7LQ?from=search&seid=7349708970822568843",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用mixin做一个UI库"),s("OutboundLink")],1),t._v("：")]),t._v(" "),s("p",[t._v("随便写一个复用的ui组件：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("//随便写一个复用的ui组件。\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("['my-btn',btnStyle]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("slot")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("props")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("btnStyle")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" String"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token style"}},[s("span",{pre:!0,attrs:{class:"token language-css"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-btn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 34px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 15px"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-btn.btn-primary")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-btn.btn-danger")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".my-btn.btn-success")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" greenyellow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" #fff"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("src下创建mixin文件夹下创建index.js文件夹（用于导出需要复用的组件）")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import MyUI from './MyUI.vue'\nexport default {\n    components: {\n        MyUI\n    }\n}\n")])])]),s("p",[t._v("此时我们就可以在需要使用复用UI组件的地方，使用mixins进行使用UI组件：")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("MyUI")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("btnStyle")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("btn-primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Button"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("MyUI")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" MyUI "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@/libs/MyUI"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Home"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mixins")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MyUI"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("如果我们需要全局地使用该复用UI组件，就可以直接在main.js入口文件中使用Vue.mixin(mixinObject)，就行全局绑定：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("import Vue from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport store from './store'\nimport MyUI from './libs/MyUI'\nVue.mixin(MyUI)//直接全局使用MyUI，在其他组件中使用时，不需要注册和导入，直接大胆使用\nVue.config.productionTip = false\nnew Vue({\n  router,\n  store,\n  render: h => h(App)\n}).$mount('#app')\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);