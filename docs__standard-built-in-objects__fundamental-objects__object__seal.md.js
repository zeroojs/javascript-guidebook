(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[310],{kUkJ:function(e,a,n){"use strict";n.r(a);var t=n("q1tI"),l=n.n(t),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");a["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"objectseal"},l.a.createElement("a",{"aria-hidden":"true",href:"#objectseal"},l.a.createElement("span",{className:"icon icon-link"})),"Object.seal"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.seal")," \u65b9\u6cd5\u7528\u4e8e\u6807\u8bc6\u6307\u5b9a\u5bf9\u8c61\u4e3a\u4e0d\u53ef\u6269\u5c55\uff0c\u4e14\u6240\u6709\u73b0\u6709 Property \u5747\u4e0d\u53ef\u914d\u7f6e\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"Object.seal(O);\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"O"),l.a.createElement("td",null,"\u5c06\u8981\u88ab\u5bc6\u5c01\u7684\u5bf9\u8c61"),l.a.createElement("td",null,"object")))),l.a.createElement("p",null,"\u8fd4\u56de\u5904\u7406\u540e\u7684\u5bf9\u8c61\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.seal")," \u5904\u7406\u540e\u7684\u5bf9\u8c61\u5c06\u4e0d\u53ef\u6269\u5c55\u3002"),l.a.createElement("p",null,"\u540c\u65f6\uff0c\u73b0\u6709\u7684\u6240\u6709 Property \u4e5f\u4e0d\u53ef\u914d\u7f6e\uff08\u4e5f\u5c31\u662f\u4e0d\u80fd\u4fee\u6539 ",l.a.createElement("code",null,"configurable"),"\u3001",l.a.createElement("code",null,"enumerable"),"\u3001",l.a.createElement("code",null,"writable"),"\uff09\u3002"),l.a.createElement(c.a,{code:"const foo = { a: 1, b: 2 };\n\nconsole.log(Object.getOwnPropertyDescriptors(foo));\n// {\n// a: { configurable: true, enumerable: true, writable: true }\n// b: { configurable: true, enumerable: true, writable: true }\n// }\n\nObject.seal(foo);\n\nfoo.c = 3;\n\nconsole.log(foo);\n// { a: 1, b: 2}\nconsole.log(Object.isExtensible(foo));\n// false\n\nconsole.log(Object.getOwnPropertyDescriptors(foo));\n// {\n// a: { configurable: false, enumerable: true, writable: true }\n// b: { configurable: false, enumerable: true, writable: true }\n// }\n\nconsole.log(Object.isSealed(foo));\n// true\n",lang:"js"})))}}}]);