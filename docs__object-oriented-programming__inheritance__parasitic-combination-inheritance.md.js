(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[253],{PqXq:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),o=t.n(r);t("5Yjd");e["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"},l.a.createElement("span",{className:"icon icon-link"})),"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),l.a.createElement("p",null,l.a.createElement("strong",null,"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f"),"\uff0c\u5373\u901a\u8fc7\u501f\u7528\u6784\u9020\u51fd\u6570\u6765\u7ee7\u627f\u5c5e\u6027\uff0c\u901a\u8fc7\u539f\u578b\u94fe\u7684\u6df7\u6210\u5f62\u5f0f\u6765\u7ee7\u627f\u65b9\u6cd5\u3002"),l.a.createElement("p",null,"\u5176\u80cc\u540e\u7684\u57fa\u672c\u601d\u8def\u662f\uff1a",l.a.createElement("strong",null,"\u4e0d\u5fc5\u4e3a\u4e86\u6307\u5b9a\u5b50\u7c7b\u578b\u7684\u539f\u578b\u800c\u8c03\u7528\u8d85\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570\uff0c\u6211\u4eec\u6240\u9700\u8981\u7684\u65e0\u975e\u5c31\u662f\u8d85\u7c7b\u578b\u539f\u578b\u7684\u4e00\u4e2a\u526f\u672c\u800c\u5df2\u3002")," \u672c\u8d28\u4e0a\uff0c\u5c31\u662f\u4f7f\u7528\u5bc4\u751f\u5f0f\u7ee7\u627f\u6765\u7ee7\u627f\u8d85\u7c7b\u578b\u7684\u539f\u578b\uff0c\u7136\u540e\u518d\u5c06\u7ed3\u679c\u6307\u5b9a\u7ed9\u5b50\u7c7b\u578b\u7684\u539f\u578b\u3002"),l.a.createElement("p",null,"\ud83c\udf30 ",l.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),l.a.createElement(o.a,{code:"function inherit(child, parent) {\n  // \u521b\u5efa\u5bf9\u8c61\n  let prototype = Object.create(parent.prototype);\n\n  // \u589e\u5f3a\u5bf9\u8c61\n  prototype.constructor = child;\n\n  // \u6307\u5b9a\u5bf9\u8c61\n  child.prototype = prototype;\n}\n",lang:"js"}),l.a.createElement("p",null,"\u8fd9\u4e2a\u793a\u4f8b\u4e2d\u7684\u51fd\u6570\u5b9e\u73b0\u4e86\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u7684\u6700\u7b80\u5355\u5f62\u5f0f\u3002\u8fd9\u4e2a\u51fd\u6570\u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a",l.a.createElement("strong",null,"\u5b50\u7c7b\u578b\u6784\u9020\u51fd\u6570")," \u548c ",l.a.createElement("strong",null,"\u8d85\u7c7b\u578b\u6784\u9020\u51fd\u6570\u3002")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u7b2c\u4e00\u6b65\u662f\u521b\u5efa\u8d85\u7c7b\u578b\u539f\u578b\u7684\u4e00\u4e2a\u526f\u672c"),l.a.createElement("li",null,"\u7b2c\u4e8c\u6b65\u662f\u4e3a\u521b\u5efa\u7684\u526f\u672c\u6dfb\u52a0 ",l.a.createElement("code",null,"constructor")," \u5c5e\u6027\uff0c\u4ece\u800c\u5f25\u8865\u56e0\u91cd\u5199\u539f\u578b\u800c\u5931\u53bb\u7684\u9ed8\u8ba4\u7684 ",l.a.createElement("code",null,"constructor")," \u5c5e\u6027"),l.a.createElement("li",null,"\u6700\u540e\u4e00\u6b65\uff0c\u5c06\u65b0\u521b\u5efa\u7684\u5bf9\u8c61\uff08\u5373\u526f\u672c\uff09\u8d4b\u503c\u7ed9\u5b50\u7c7b\u578b\u7684\u539f\u578b")),l.a.createElement(o.a,{code:"function inherit(children, parent) {\n  // \u521b\u5efa\u5bf9\u8c61\n  let prototype = Object.create(parent.prototype);\n  // \u589e\u5f3a\u5bf9\u8c61\n  prototype.constructor = children;\n  // \u6307\u5b9a\u5bf9\u8c61\n  children.prototype = prototype;\n}\n\nfunction Parent(name) {\n  this.name = name;\n  this.num = [0, 1, 2];\n}\n\nParent.prototype.sayName = function() {\n  alert(this.name);\n};\n\nfunction Child(name, age) {\n  Parent.call(this, name);\n  this.age = age;\n}\n\ninherit(Child, Parent);\n\nChild.prototype.sayAge = function() {\n  console.log(this.age);\n};\n",lang:"js"}),l.a.createElement("p",null,"\u89e3\u51b3\u4e24\u6b21\u8c03\u7528\u7684\u65b9\u6cd5\u662f\u4f7f\u7528\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u3002"),l.a.createElement("p",null,"\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u4e0e\u7ec4\u5408\u7ee7\u627f\u76f8\u4f3c\uff0c\u90fd\u662f\u901a\u8fc7\u501f\u7528\u6784\u9020\u51fd\u6570\u6765\u7ee7\u627f\u4e0d\u53ef\u5171\u4eab\u7684\u5c5e\u6027\uff0c\u901a\u8fc7\u539f\u578b\u94fe\u7684\u6df7\u6210\u5f62\u5f0f\u6765\u7ee7\u627f\u65b9\u6cd5\u548c\u53ef\u5171\u4eab\u7684\u5c5e\u6027\u3002\u53ea\u4e0d\u8fc7\u628a\u539f\u578b\u7ee7\u627f\u7684\u5f62\u5f0f\u53d8\u6210\u4e86\u5bc4\u751f\u5f0f\u7ee7\u627f\u3002"),l.a.createElement("p",null,"\u4f7f\u7528\u5bc4\u751f\u7ec4\u5408\u5f0f\u7ee7\u627f\u53ef\u4ee5\u4e0d\u5fc5\u4e3a\u4e86\u6307\u5b9a\u5b50\u7c7b\u578b\u7684\u539f\u578b\u800c\u8c03\u7528\u7236\u7c7b\u578b\u7684\u6784\u9020\u51fd\u6570\uff0c\u4ece\u800c\u5bc4\u751f\u5f0f\u7ee7\u627f\u53ea\u7ee7\u627f\u4e86\u7236\u7c7b\u578b\u7684\u539f\u578b\u5c5e\u6027\uff0c\u800c\u7236\u7c7b\u578b\u7684\u5b9e\u4f8b\u5c5e\u6027\u662f\u901a\u8fc7\u501f\u7528\u6784\u9020\u51fd\u6570\u7684\u65b9\u5f0f\u6765\u5f97\u5230\u7684\u3002"),l.a.createElement("p",null,"\u4e0b\u65b9\u4e2d\u4f1a\u5bf9\u5bc4\u751f\u7ee7\u627f\u8fdb\u884c\u8be6\u7ec6\u8bf4\u660e\uff1a"),l.a.createElement(o.a,{code:"function Parent(name) {\n  this.name = name;\n  this.num = [0, 1, 2];\n}\n\nParent.prototype.sayName = function() {\n  return this.name;\n};\n\nfunction Child(name, age) {\n  Parent.call(this, name);\n  this.age = age;\n}\n\nChild.prototype = Object.create(Parent.prototype);\n\nChild.prototype.constructor = Child;\n\n// The first instance\nconst boy = new Child('Jothan', 22);\n\nboy.num.push(3);\nconsole.log(boy.num);\n// [0, 1, 2, 3]\n\nboy.sayName();\n// 'Jothan'\n\n// The second instance\nconst girl = new Child('Kat', 18);\n\nconsole.log(girl.num);\n// [0, 1, 2]\n\ngirl.sayName();\n// 'Kat'\n",lang:"js"}),l.a.createElement("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u7684\u9ad8\u6548\u7387\u4f53\u73b0\u5728\u5b83\u53ea\u8c03\u7528\u4e86\u4e00\u6b21 Parent \u6784\u9020\u51fd\u6570\uff0c\u5e76\u4e14\u56e0\u6b64\u907f\u514d\u4e86\u5728 ",l.a.createElement("code",null,"Child.prototype")," \u4e0a\u9762\u521b\u5efa\u4e0d\u5fc5\u8981\u7684\u3001\u591a\u4f59\u7684\u5c5e\u6027\u3002\u4e0e\u6b64\u540c\u65f6\uff0c\u539f\u578b\u94fe\u8fd8\u4fdd\u6301\u4e0d\u53d8\u3002")))}}}]);