(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[290],{MXdj:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"objectcreate"},l.a.createElement("a",{"aria-hidden":"true",href:"#objectcreate"},l.a.createElement("span",{className:"icon icon-link"})),"Object.create"),l.a.createElement("p",null,l.a.createElement("code",null,"Object.create()")," \u65b9\u6cd5\u7528\u4e8e\u521b\u5efa\u6307\u5b9a\u5bf9\u8c61\u4e3a\u539f\u578b\u5bf9\u8c61\u7684\u65b0\u5bf9\u8c61\u3002"),l.a.createElement("h2",{id:"\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),l.a.createElement(c.a,{code:"Object.create(proto, properties);\n",lang:"js"}),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"proto"),l.a.createElement("td",null,"\u65b0\u521b\u5efa\u5bf9\u8c61\u6307\u5411\u7684\u539f\u578b\u5bf9\u8c61"),l.a.createElement("td",null,"object")),l.a.createElement("tr",null,l.a.createElement("td",null,"properties"),l.a.createElement("td",null,"\u53ef\u9009\u53c2\u6570\u3002\u6dfb\u52a0\u5230\u65b0\u521b\u5efa\u5bf9\u8c61\u7684\u53ef\u679a\u4e3e\u5c5e\u6027\uff08\u5373\u81ea\u8eab\u5b9a\u4e49\u7684\u5c5e\u6027\uff0c\u800c\u4e0d\u662f\u539f\u578b\u94fe\u4e0a\u7684\u679a\u4e3e\u5c5e\u6027\uff09"),l.a.createElement("td",null,"object")))),l.a.createElement("p",null,"\u26a0\ufe0f ",l.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1a\u5982\u679c ",l.a.createElement("code",null,"properties")," \u53c2\u6570\u4e0d\u662f ",l.a.createElement("code",null,"null")," \u6216\u5bf9\u8c61\uff0c\u5219\u629b\u51fa\u4e00\u4e2a TypeError \u5f02\u5e38\u3002"),l.a.createElement("p",null,"\u8fd4\u56de\u6307\u5b9a\u539f\u578b\u5bf9\u8c61\u548c\u53ef\u679a\u4e3e\u5c5e\u6027\u7684\u65b0\u5bf9\u8c61\u3002"),l.a.createElement("h2",{id:"\u793a\u4f8b"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},l.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),l.a.createElement("h3",{id:"\u7c7b\u5f0f\u7ee7\u627f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u5f0f\u7ee7\u627f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u5f0f\u7ee7\u627f"),l.a.createElement(c.a,{code:"// Shape = Super Class\nfunction Shape() {\n  this.x = 0;\n  this.y = 0;\n}\n\n// Super Class Methods\nShape.prototype.move = function() {\n  this.x += x;\n  this.y += y;\n  console.log('Shap moved');\n};\n\n// Retangle - Sub Class\nfunction Retangle() {\n  Shape.all(this); // call super constructor\n}\n\n// \u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\nRetangle.prototype = Object.create(Shape.prototype);\nRetangle.prototype.constructor = Retangle;\n\nconst rect = new Retangle();\n\nconsole.log(rect instanceof Retangle);\n// true\nconsole.log(rect instanceof Shape);\n// true\n",lang:"js"})))}}}]);