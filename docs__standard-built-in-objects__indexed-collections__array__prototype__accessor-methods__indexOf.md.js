(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[334],{ayoC:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"arrayprototypeindexof"},l.a.createElement("a",{"aria-hidden":"true",href:"#arrayprototypeindexof"},l.a.createElement("span",{className:"icon icon-link"})),"Array.prototype.indexOf()"),l.a.createElement("p",null,l.a.createElement("code",null,"Array.prototype.indexOf()")," \u65b9\u6cd5\u7528\u4e8e\u67e5\u627e\u6570\u7ec4\u6210\u5458\u7b2c\u4e00\u6b21\u51fa\u73b0\u6307\u5b9a\u5b57\u7b26\u7684\u4f4d\u7f6e\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"arr.indexOf( searchValue [, fromIndex] )\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"searchValue")),l.a.createElement("td",null,"\u8981\u67e5\u627e\u7684\u6570\u7ec4\u5143\u7d20"),l.a.createElement("td",null,"any")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("code",null,"fromIndex")),l.a.createElement("td",null,"\u53ef\u9009\uff0c\u5728\u5f53\u524d\u5b57\u7b26\u4e32\u4e2d\u67e5\u627e\u7684\u8d77\u59cb\u7d22\u5f15\uff0c\u9ed8\u8ba4\u4e3a 0\u3002"),l.a.createElement("td",null,"number")))),l.a.createElement("p",null,l.a.createElement("strong",null,"\u8fd4\u56de\u503c\uff1a")," \u6570\u7ec4\u5143\u7d20\u5728\u5f53\u524d\u6570\u7ec4\u4e2d\u7b2c\u4e00\u6b21\u67e5\u627e\u5230\u7684\u8d77\u59cb\u4f4d\u7f6e\uff08\u7d22\u5f15\uff09\u3002"),l.a.createElement("h2",{id:"\u63cf\u8ff0"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},l.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),l.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u4f7f\u7528 Strict Equality\uff08\u65e0\u8bba\u662f\u7edd\u5bf9\u76f8\u7b49 ",l.a.createElement("code",null,"==="),"\uff0c\u8fd8\u662f Triple-equals \u64cd\u4f5c\u7b26\u90fd\u57fa\u4e8e\u540c\u6837\u7684\u65b9\u6cd5\uff09\u8fdb\u884c\u5224\u65ad\u67e5\u627e\u7684\u5143\u7d20\u4e0e\u6570\u7ec4\u4e2d\u5305\u542b\u7684\u5143\u7d20\u4e4b\u95f4\u7684\u5173\u7cfb\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u6807\u51c6\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6807\u51c6\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u6807\u51c6\u793a\u4f8b"),l.a.createElement(c.a,{code:"var arr = [1, 2, 3, 4, 5];\n\narr.indexOf(1);\n// 0\narr.indexOf(7);\n// -1\narr.indexOf(4, 2);\n// 3\narr.indexOf(3, -1);\n// -1\narr.indexOf(3, -3);\n// 2\n",lang:"js"}),l.a.createElement("h3",{id:"\u627e\u51fa\u6307\u5b9a\u5143\u7d20\u51fa\u73b0\u7684\u6240\u6709\u4f4d\u7f6e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u627e\u51fa\u6307\u5b9a\u5143\u7d20\u51fa\u73b0\u7684\u6240\u6709\u4f4d\u7f6e"},l.a.createElement("span",{className:"icon icon-link"})),"\u627e\u51fa\u6307\u5b9a\u5143\u7d20\u51fa\u73b0\u7684\u6240\u6709\u4f4d\u7f6e"),l.a.createElement(c.a,{code:"// \u5b58\u653e\u6307\u5b9a\u5143\u7d20\u51fa\u73b0\u7684\u4f4d\u7f6e\u7684\u6570\u7ec4\nvar indices = [];\n// \u88ab\u67e5\u627e\u7684\u6570\u7ec4\nconst array = ['a', 'b', 'a', 'c', 'a', 'd'];\n// \u67e5\u627e\u7684\u5143\u7d20\nvar element = 'a';\n\nvar idx = array.indexOf(element);\n\nwhile (idx != -1) {\n  indices.push(idx);\n  idx = array.indexOf(element, idx + 1);\n}\n\nconsole.log(indices);\n// [0, 2, 4]\n",lang:"js"})))}}}]);