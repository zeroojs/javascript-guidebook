(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[297],{"3gFk":function(e,n,t){"use strict";t.r(n);var a=t("55Ip"),r=t("q1tI"),o=t.n(r),l=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(l);t("5Yjd");n["default"]=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"markdown"},o.a.createElement("h1",{id:"objectgetownpropertynames"},o.a.createElement("a",{"aria-hidden":"true",href:"#objectgetownpropertynames"},o.a.createElement("span",{className:"icon icon-link"})),"Object.getOwnPropertyNames"),o.a.createElement("p",null,o.a.createElement("code",null,"Object.getOwnPropertyNames()")," \u65b9\u6cd5\u7528\u4e8e\u83b7\u53d6\u6307\u5b9a\u5bf9\u8c61\u7684\u6240\u6709\u81ea\u8eab Property \u7684\u952e\u540d\uff08\u5305\u62ec\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u4f46\u4e0d\u5305\u62ec Symbol \u503c\u4f5c\u4e3a\u540d\u79f0\u7684\u5c5e\u6027\uff09\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),o.a.createElement("h2",{id:"\u8bed\u6cd5"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},o.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),o.a.createElement(c.a,{code:"Object.getOwnPropertyNames(O);\n",lang:"js"}),o.a.createElement("table",null,o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",null,"\u53c2\u6570"),o.a.createElement("th",null,"\u8bf4\u660e"),o.a.createElement("th",null,"\u7c7b\u578b"))),o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,"O"),o.a.createElement("td",null,"\u7528\u4e8e\u83b7\u53d6 Property \u952e\u540d\u7684\u76ee\u6807\u5bf9\u8c61"),o.a.createElement("td",null,"object")))),o.a.createElement("p",null,"\u8fd4\u56de Properties \u952e\u540d\u7ec4\u6210\u7684\u6570\u7ec4\u3002"),o.a.createElement("h2",{id:"\u63cf\u8ff0"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},o.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),o.a.createElement("p",null,"\u5982\u679c\u53ea\u9700\u8981\u83b7\u53d6\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u53ef\u4ee5\u4f7f\u7528 ",o.a.createElement("a",{href:"keys"},"Object.keys")," \u6216\u7528 ",o.a.createElement(a["a"],{to:"../../../../basic-concept/statements-and-declarations/iteration-statement/the-for-in-statement"},"for-in \u8bed\u53e5"),"\uff08\u8fd8\u4f1a\u83b7\u53d6\u5230\u539f\u578b\u94fe\u4e0a\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u4e0d\u8fc7\u53ef\u4ee5\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../properties-of-the-object-prototype-object/hasOwnProperty"},"Object.prototype.hasOwnProperty")," \u65b9\u6cd5\u8fc7\u6ee4\uff09\u3002"),o.a.createElement("h2",{id:"\u793a\u4f8b"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},o.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),o.a.createElement("h3",{id:"\u6570\u7ec4"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u7ec4"},o.a.createElement("span",{className:"icon icon-link"})),"\u6570\u7ec4"),o.a.createElement(c.a,{code:"// Array\nconst foo = ['a', 'b', 'c'];\nconsole.log(Object.getOwnPropertyNames(foo).sort());\n// ['0', '1', '2', 'length']\n",lang:"js"}),o.a.createElement("h3",{id:"\u7c7b\u6570\u7ec4"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u6570\u7ec4"},o.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u6570\u7ec4"),o.a.createElement(c.a,{code:"// \u7c7b\u6570\u7ec4\u5bf9\u8c61\nconst foo = { 0: 'a', 1: 'b', 2: 'c' };\nconsole.log(Object.getOwnPropertyNames(foo).sort());\n// ['0', '1', '2']\n\n// \u4f7f\u7528 Array.forEach \u8f93\u51fa\u5c5e\u6027\u540d\u548c\u5c5e\u6027\u503c\nObject.getOwnPropertyNames(foo).forEach(function(val, idx, array) {\n  console.log(`${val}:${foo[val]}`);\n});\n// 0:a\n// 1:b\n// 2:c\n",lang:"js"}),o.a.createElement("h3",{id:"\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"},o.a.createElement("span",{className:"icon icon-link"})),"\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"),o.a.createElement(c.a,{code:"// \u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\nconst foo = Object.create(\n  {},\n  {\n    getBar: {\n      value: function() {\n        return this.bar;\n      },\n      enumerable: false,\n    },\n  }\n);\nfoo.bar = 1;\n\nconsole.log(Object.getOwnPropertyNames(foo).sort());\n// ['foo', 'getBar']\n",lang:"js"}),o.a.createElement("h3",{id:"\u4ec5\u83b7\u53d6\u81ea\u6709-property"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u4ec5\u83b7\u53d6\u81ea\u6709-property"},o.a.createElement("span",{className:"icon icon-link"})),"\u4ec5\u83b7\u53d6\u81ea\u6709 Property"),o.a.createElement(c.a,{code:"function SuperClass() {}\nSuperClass.prototype.inheritedMethod = function() {};\n\nfunction SubClass() {\n  this.prop = 5;\n  this.method = function() {};\n}\n\nSubClass.prototype = new SuperClass();\nSubClass.prototype.prototypeMethod = function() {};\n\nObject.getOwnPropertyNames(new SubClass());\n// ['prop', 'method']\n",lang:"js"}),o.a.createElement("h3",{id:"\u53ea\u83b7\u53d6\u4e0d\u53ef\u679a\u4e3e-property"},o.a.createElement("a",{"aria-hidden":"true",href:"#\u53ea\u83b7\u53d6\u4e0d\u53ef\u679a\u4e3e-property"},o.a.createElement("span",{className:"icon icon-link"})),"\u53ea\u83b7\u53d6\u4e0d\u53ef\u679a\u4e3e Property"),o.a.createElement("p",null,"\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"../../../indexed-collections/array-objects/properties-of-the-array-prototype-object/iteration-methods/filter"},"Array.prototype.filter")," \u65b9\u6cd5\uff0c\u4ece\u6240\u6709\u7684 Property \u952e\u540d\u6570\u7ec4\uff08\u4f7f\u7528 ",o.a.createElement("code",null,"Object.getOwnPropertyNames")," \u65b9\u6cd5\u83b7\u53d6\uff09\u4e2d\u53bb\u9664\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\uff08\u4f7f\u7528 ",o.a.createElement(a["a"],{to:"./keys"},"Object.keys")," \u65b9\u6cd5\u83b7\u53d6\uff09\uff0c\u5269\u4f59\u7684\u5c5e\u6027\u4fbf\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\u5c5e\u6027\u3002"),o.a.createElement(c.a,{code:"const enum_and_nonenum = Object.getOwnPropertyNames(target);\nconst enum_only = Object.keys(target);\nconst nonenum_only = enum_and_nonenum.filter(function(key) {\n  const indexInEnum = enum_only.indexOf(key);\n  if (indexInEnum === -1) {\n    return true;\n  } else {\n    return false;\n  }\n});\n",lang:"js"})))}}}]);