(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[172],{WwB3:function(n,e,a){"use strict";a.r(e);var t=a("q1tI"),o=a.n(t),s=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(s);a("5Yjd");e["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"\u8de8\u6a21\u5757\u5e38\u91cf"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u8de8\u6a21\u5757\u5e38\u91cf"},o.a.createElement("span",{className:"icon icon-link"})),"\u8de8\u6a21\u5757\u5e38\u91cf"),o.a.createElement("p",null,"\u7531\u4e8e ",o.a.createElement("code",null,"const")," \u58f0\u660e\u7684\u53d8\u91cf\u53ea\u5728\u5f53\u524d\u4ee3\u7801\u5757\u6709\u6548\uff0c\u5982\u679c\u60f3\u8bbe\u7f6e\u8de8\u6a21\u5757\u7684\u5e38\u91cf\uff08\u5373\u8de8\u591a\u4e2a\u6587\u4ef6\uff09\uff0c\u6216\u8005\u8bf4\u4e00\u4e2a\u503c\u8981\u88ab\u591a\u4e2a\u6a21\u5757\u5171\u4eab\uff0c\u53ef\u4ee5\u91c7\u7528\u4e0b\u9762\u7684\u5199\u6cd5\u3002"),o.a.createElement(c.a,{code:"// constants.js \u58f0\u660e\u540e\u547d\u540d\u5bfc\u51fa\nexport const a = 1\nexport const b = 2\nexport const c = 3\n\n// module1.js \u547d\u540d\u7a7a\u95f4\u5bfc\u5165\nimport * as constants from './constants.js'\nconsole.log(constants.a)\n// 1\nconsole.log(constants.b)\n// 2\n\n// module2.js \u547d\u540d\u5bfc\u5165\nimport { a, b } from './constants.js'\nconsole.log(a)\n// 1\nconsole.log(b)\n// 2\n",lang:"js"}),o.a.createElement("p",null,"\u5982\u679c\u8981\u4f7f\u7528\u7684\u5e38\u91cf\u975e\u5e38\u591a\uff0c\u53ef\u4ee5\u5efa\u4e00\u4e2a\u4e13\u95e8\u7684 ",o.a.createElement("code",null,"constants")," \u76ee\u5f55\uff0c\u5c06\u5404\u79cd\u5e38\u91cf\u5199\u5728\u4e0d\u540c\u7684\u6587\u4ef6\u91cc\u9762\uff0c\u4fdd\u5b58\u5728\u8be5\u76ee\u5f55\u4e0b\u3002"),o.a.createElement(c.a,{code:"// constants/a.js\nexport const a = {\n  a1: 'a1',\n  a2: 'a2',\n  a3: 'a3'\n}\n\n// constants/b.js\nexport const b = ['b1', 'b2', 'b3', 'b5', 'b6', 'b7']\n",lang:"js"}),o.a.createElement("p",null,"\u7136\u540e\uff0c\u5c06\u8fd9\u4e9b\u6587\u4ef6\u8f93\u51fa\u7684\u5e38\u91cf\uff0c\u5408\u5e76\u5728 ",o.a.createElement("code",null,"index.js")," \u91cc\u9762\u3002"),o.a.createElement(c.a,{code:"// constants/index.js\nexport { a } from './a'\nexport { b } from './b'\n",lang:"js"}),o.a.createElement("p",null,"\u4f7f\u7528\u7684\u65f6\u5019\uff0c\u76f4\u63a5\u52a0\u8f7d ",o.a.createElement("code",null,"index.js")," \u5c31\u53ef\u4ee5\u4e86\u3002"),o.a.createElement(c.a,{code:"// module.js\nimport { a, b } from './constants'\n",lang:"js"})))}}}]);