(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[302],{F2VF:function(e,n,t){"use strict";t.r(n);var a=t("55Ip"),l=t("q1tI"),c=t.n(l),o=(t("B2uJ"),t("+su7"),t("qOys")),r=t.n(o);t("5Yjd");n["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"objectisextensible"},c.a.createElement("a",{"aria-hidden":"true",href:"#objectisextensible"},c.a.createElement("span",{className:"icon icon-link"})),"Object.isExtensible"),c.a.createElement("p",null,c.a.createElement("code",null,"Object.isExtensible()")," \u65b9\u6cd5\u7528\u4e8e\u68c0\u6d4b\u6307\u5b9a\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55\u3002"),c.a.createElement("h2",{id:"\u8bed\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),c.a.createElement(r.a,{code:"Object.isExtensible(O);\n",lang:"js"}),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u53c2\u6570"),c.a.createElement("th",null,"\u8bf4\u660e"),c.a.createElement("th",null,"\u7c7b\u578b"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,"O"),c.a.createElement("td",null,"\u6307\u5b9a\u7528\u4e8e\u68c0\u6d4b\u7684\u5bf9\u8c61"),c.a.createElement("td",null,"object")))),c.a.createElement("p",null,"\u8fd4\u56de Boolean \u7c7b\u578b\u7684\u503c\u8868\u793a\u7528\u4e8e\u68c0\u6d4b\u7684\u5bf9\u8c61\u662f\u5426\u53ef\u6269\u5c55\u3002"),c.a.createElement("h2",{id:"\u63cf\u8ff0"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},c.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),c.a.createElement("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5bf9\u8c61\u662f\u53ef\u6269\u5c55\u7684\uff1a\u5373\u53ef\u4ee5\u4e3a\u4ed6\u4eec\u6dfb\u52a0\u65b0\u7684\u5c5e\u6027\u3002"),c.a.createElement("p",null,c.a.createElement(a["a"],{to:"./preventExtensions"},"Object.preventExtensions"),"\u3001",c.a.createElement(a["a"],{to:"./seal"},"Object.seal")," \u6216 ",c.a.createElement(a["a"],{to:"./freeze"},"Object.freeze")," \u65b9\u6cd5\u90fd\u53ef\u4ee5\u6807\u8bb0\u4e00\u4e2a\u5bf9\u8c61\u4e3a\u4e0d\u53ef\u6269\u5c55\uff08non-extensible\uff09\u3002"),c.a.createElement("h2",{id:"\u793a\u4f8b"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},c.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),c.a.createElement(r.a,{code:"let foo = {\n  a: 1,\n};\nconsole.log(Object.isExtensible(foo));\n// true\n\nfoo.b = 2;\n\nconsole.log(foo);\n// {a: 1, b: 2}\n\nconsole.log(Object.preventExtensions(foo));\n// { a: 1, b: 2}\n\n// \u7531\u4e8e\u5bf9\u8c61 foo \u7981\u6b62\u6269\u5c55\uff0c\u6240\u4ee5\u8be5\u8d4b\u503c\u8bed\u53e5\u9759\u9ed8\u5931\u8d25\nfoo.c = 3;\n\nconsole.log(Object.isExtensible(foo));\n// false\n\nconsole.log(foo);\n// { a: 1, b: 2}\n",lang:"js"})))}}}]);