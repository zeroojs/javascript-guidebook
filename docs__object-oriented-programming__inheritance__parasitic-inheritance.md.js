(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[254],{reg0:function(e,n,a){"use strict";a.r(n);var t=a("q1tI"),l=a.n(t),r=(a("B2uJ"),a("+su7"),a("qOys")),c=a.n(r);a("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5bc4\u751f\u5f0f\u7ee7\u627f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5bc4\u751f\u5f0f\u7ee7\u627f"},l.a.createElement("span",{className:"icon icon-link"})),"\u5bc4\u751f\u5f0f\u7ee7\u627f"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u5bc4\u751f\u5f0f\u7ee7\u627f\uff08Parasitic Inheritance\uff09"),"\uff1a\u521b\u5efa\u4e00\u4e2a\u4ec5\u7528\u4e8e\u5c01\u88c5\u7ee7\u627f\u8fc7\u7a0b\u7684\u51fd\u6570\uff0c\u5728\u51fd\u6570\u5185\u90e8\u4ee5\u67d0\u79cd\u65b9\u5f0f\u589e\u5f3a\u5bf9\u8c61"),l.a.createElement(c.a,{code:"function creator(origin) {\n  // \u4ee5 origin \u4e3a\u539f\u578b\u5bf9\u8c61\u521b\u5efa\u4e00\u4e2a\u65b0\u5bf9\u8c61\n  let clone = Object.create(origin);\n\n  // \u4ee5\u67d0\u79cd\u65b9\u5f0f\u6765\u589e\u5f3a\u8fd9\u4e2a\u5bf9\u8c61\n  clone.sayHi = function() {\n    console.log('Hello world!');\n  };\n\n  // \u8fd4\u56de\u8fd9\u4e2a\u5bf9\u8c61\n  return clone;\n}\n\nlet friendship = {\n  name: 'Uzi',\n  friends: ['Amy', 'Ben', 'Tom'],\n};\n\n// \u5177\u6709\u5b9e\u4f8b\u7684\u539f\u578bperson\u7684\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\uff0c\u4e5f\u6709\u81ea\u5df1\u7684\u65b9\u6cd5\nlet uzi = creator(friendship);\n\nuzi.sayHi();\n// Hello world!\n",lang:"js"}),l.a.createElement("p",null,"\u5728\u4e3b\u8981\u8003\u8651\u5bf9\u8c61\u800c ",l.a.createElement("strong",null,"\u4e0d\u662f\u81ea\u5b9a\u4e49\u7c7b\u578b\u548c\u6784\u9020\u51fd\u6570\u7684\u60c5\u51b5\u4e0b"),"\uff0c\u5bc4\u751f\u5f0f\u7ee7\u627f\u4e5f\u662f\u4e00\u79cd\u6709\u7528\u7684\u6a21\u5f0f\u3002\u524d\u9762\u793a\u8303\u7ee7\u627f\u6a21\u5f0f\u65f6\u4f7f\u7528\u7684 ",l.a.createElement("code",null,"Object")," \u51fd\u6570\u4e0d\u662f\u5fc5\u9700\u7684\uff0c\u4efb\u4f55\u80fd\u591f\u8fd4\u56de\u65b0\u5bf9\u8c61\u7684\u51fd\u6570\u90fd\u9002\u7528\u4e8e\u6b64\u6a21\u5f0f\u3002"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u26a0\ufe0f ",l.a.createElement("strong",null,"\u6ce8\u610f\uff1a")," \u4f7f\u7528\u5bc4\u751f\u5f0f\u7ee7\u627f\u6765\u4e3a\u5bf9\u8c61\u6dfb\u52a0\u51fd\u6570\uff0c\u4f1a\u7531\u4e8e\u4e0d\u80fd\u505a\u5230\u51fd\u6570\u590d\u7528\u800c\u964d\u4f4e\u6548\u7387\uff1b\u8fd9\u4e00\u70b9\u4e0e\u501f\u7528\u6784\u9020\u51fd\u6570\u6a21\u5f0f\u7c7b\u4f3c\u3002"))))}}}]);