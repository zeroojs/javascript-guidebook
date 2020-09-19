(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[246],{Q8Wr:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(r);t("5Yjd");n["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h1",{id:"\u7c7b\u7684\u57fa\u672c\u8bed\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u7684\u57fa\u672c\u8bed\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u7684\u57fa\u672c\u8bed\u6cd5"),l.a.createElement("p",null,"ECMAScript 6 \u4e2d\u7684 Class\uff08\u7c7b\uff09\u6982\u5ff5\uff0c\u5b9e\u9645\u4e0a\u53ef\u4ee5\u628a\u5b83\u770b\u4f5c ECMAScript 5 \u5bf9\u8c61\u539f\u578b\u5199\u6cd5\u7684\u8bed\u6cd5\u7cd6\u3002"),l.a.createElement("p",null,l.a.createElement("strong",null,"ES5\uff1a")),l.a.createElement(c.a,{code:"function Point(x, y){\n  this.x = x\n  this.y = y\n}\n\nPoint.prototype.toString = function() {\n  return '(' +  this.x + ',' + this.y + ')'\n}\n\nvar p = new Point(1, 2)\n",lang:"js"}),l.a.createElement("p",null,l.a.createElement("strong",null,"ES6\uff1a")),l.a.createElement(c.a,{code:"class Point {\n  constructor(x, y){\n    this.x = x\n    this.y = y\n  }\n  toString(){\n    return '(' +  this.x + ',' + this.y + ')'\n  }\n}\n",lang:"js"}),l.a.createElement("h2",{id:"\u7c7b\u58f0\u660e"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u58f0\u660e"},l.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u58f0\u660e"),l.a.createElement("p",null,"\u4e0e ES5 \u76f8\u540c\u7684\u662f\uff0c\u7c7b\u4e5f\u662f\u901a\u8fc7 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u521b\u5efa\u5bf9\u8c61\u5b9e\u4f8b\u3002"),l.a.createElement("p",null,"\u4e0e ES5 \u4e0d\u540c\u7684\u662f\uff0c\u5728 ES6 \u4e2d\uff0c\u6211\u4eec\u5c06\u539f\u578b\u7684\u5b9e\u73b0\u5199\u5728\u4e86\u7c7b\u4e2d\uff0c\u4f46\u672c\u8d28\u4e0a\u8fd8\u662f\u4e00\u6837\u7684\uff0c\u90fd\u662f\u9700\u8981\u65b0\u5efa\u4e00\u4e2a\u7c7b\u540d\uff0c\u7136\u540e\u5b9e\u73b0\u6784\u9020\u51fd\u6570\uff0c\u518d\u5b9e\u73b0\u539f\u578b\u65b9\u6cd5\u3002"),l.a.createElement(c.a,{code:"class Foo(){\n  // \u6784\u9020\u51fd\u6570\n  constructor(name = 'Uzi'){\n    this.name = name\n  }\n  // \u5b9a\u4e49\u4e00\u4e2a\u65b9\u6cd5\u5e76\u4e14\u8d4b\u503c\u7ed9\u6784\u9020\u51fd\u6570\u7684\u539f\u578b\n  sayName(){\n    console.log(this.name)\n  }\n}\n\nconst foo = new Foo()\nfoo.sayName()\n// 'Uzi'\n",lang:"js"}),l.a.createElement("p",null,"\u7c7b\u58f0\u660e\u548c\u51fd\u6570\u58f0\u660e\u7684\u533a\u522b\u548c\u7279\u70b9\uff1a"),l.a.createElement("ol",null,l.a.createElement("li",null,"\u51fd\u6570\u58f0\u660e\u53ef\u4ee5\u88ab\u63d0\u5347\uff08Hoist\uff09\uff0c\u7c7b\u58f0\u660e\u4e0d\u80fd\u63d0\u5347\uff08\u4e0e ",l.a.createElement("code",null,"let")," \u58f0\u660e\u7c7b\u4f3c\uff09"),l.a.createElement("li",null,"\u7c7b\u58f0\u660e\u4e2d\u7684\u4ee3\u7801\u81ea\u52a8\u5f3a\u884c\u8fd0\u884c\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b"),l.a.createElement("li",null,"\u53ea\u80fd\u901a\u8fc7 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u6765\u58f0\u660e\u7c7b\uff0c\u58f0\u660e\u7c7b\u4f1a\u8c03\u7528\u7c7b\u7684\u6784\u9020\u51fd\u6570"),l.a.createElement("li",null,"\u6bcf\u4e2a\u7c7b\u90fd\u6709\u4e00\u4e2a ",l.a.createElement("code",null,"[[construct]]")," \u7684\u65b9\u6cd5\uff0c\u8be5\u65b9\u6cd5\u5c31\u662f\u6784\u9020\u51fd\u6570"),l.a.createElement("li",null,"\u7c7b\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u5b9a\u4e49\u5728\u7c7b\u7684 ",l.a.createElement("code",null,"prototype")," \u5c5e\u6027\u4e0a"),l.a.createElement("li",null,"\u7c7b\u4e2d\u7684\u65b9\u6cd5\u65e0\u9700\u6dfb\u52a0 ",l.a.createElement("code",null,"function")," \u5173\u952e\u5b57\uff0c\u53ea\u9700\u76f4\u63a5\u6dfb\u52a0\u5230\u7c7b\u4e2d"),l.a.createElement("li",null,"\u65b9\u6cd5\u95f4\u4e0d\u9700\u8981\u6dfb\u52a0\u9017\u53f7\uff08",l.a.createElement("code",null,","),"\uff09\uff0c\u52a0\u4e86\u4f1a\u62a5\u9519"),l.a.createElement("li",null,"\u7c7b\u4e2d\u7684\u6240\u6709\u65b9\u6cd5\u90fd\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\uff08non-enumerable\uff09\uff0c\u800c\u81ea\u5b9a\u4e49\u7c7b\u578b\u4e2d\uff0c\u53ef\u4ee5\u901a\u8fc7 ",l.a.createElement("code",null,"Object.definedProperty()")," \u624b\u5de5\u6307\u5b9a\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"),l.a.createElement("li",null,"\u5728\u7c7b\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u65b9\u6cd5\uff0c\u5b9e\u8d28\u4e0a\u5c31\u662f\u8c03\u7528\u539f\u578b\u4e0a\u7684\u65b9\u6cd5"),l.a.createElement("li",null,"\u4e0d\u80fd\u5728\u7c7b\u4e2d\u4fee\u6539\u7c7b\u540d")),l.a.createElement("h2",{id:"\u6784\u9020\u51fd\u6570"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u6784\u9020\u51fd\u6570"},l.a.createElement("span",{className:"icon icon-link"})),"\u6784\u9020\u51fd\u6570"),l.a.createElement("p",null,"\u6784\u9020\u51fd\u6570\uff08",l.a.createElement("code",null,"constructor")," \u65b9\u6cd5\uff09\u662f\u7c7b\u7684\u9ed8\u8ba4\u65b9\u6cd5\uff0c\u901a\u8fc7 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u751f\u6210\u5bf9\u8c61\u5b9e\u4f8b\u65f6\uff0c\u81ea\u52a8\u8c03\u7528\u8be5\u65b9\u6cd5\u3002\u82e5\u6ca1\u6709\u663e\u5f0f\u5b9a\u4e49\uff0c\u4e00\u4e2a\u7a7a\u7684\u6784\u9020\u51fd\u6570\u4f1a\u88ab\u9ed8\u8ba4\u6dfb\u52a0\u3002"),l.a.createElement("p",null,"\ud83d\udccc \u7c7b\u5fc5\u987b\u4f7f\u7528 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u8c03\u7528\uff0c\u5426\u5219\u4f1a\u62a5\u9519\u3002\u8fd9\u662f\u5b83\u8ddf\u666e\u901a\u6784\u9020\u51fd\u6570\u7684\u4e00\u4e2a\u4e3b\u8981\u533a\u522b\uff0c\u540e\u8005\u4e0d\u7528 ",l.a.createElement("code",null,"new")," \u5173\u952e\u5b57\u4e5f\u80fd\u6267\u884c\u3002"),l.a.createElement("h2",{id:"\u5b9e\u4f8b\u5bf9\u8c61"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u4f8b\u5bf9\u8c61"},l.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u4f8b\u5bf9\u8c61"),l.a.createElement("p",null,"\u4e0e ES5 \u4e00\u6837\uff0c\u5b9e\u4f8b\u7684\u5c5e\u6027\u9664\u975e\u663e\u5f0f\u5b9a\u4e49\u5728\u5176\u672c\u8eab\uff08\u5373\u5b9a\u4e49\u5728 ",l.a.createElement("code",null,"this")," \u5bf9\u8c61\u4e0a\uff09\uff0c\u5426\u5219\u90fd\u662f\u5b9a\u4e49\u5728 ",l.a.createElement("strong",null,"\u539f\u578b")," \u4e0a\uff08\u5373\u5b9a\u4e49\u5728 ",l.a.createElement("code",null,"class")," \u4e0a\uff09\u3002"),l.a.createElement(c.a,{code:"class Point{\n  constructor(x, y){\n    this.x = x\n    this.y = y\n  }\n  toString(){\n    return `(${this.x}, ${this.y})`\n  }\n}\n\nconst point = new Point(2, 3)\n\npoint.toString()\n// (2, 3)\n\npoint.hasOwnProperty('x')\n// true\npoint.hasOwnProperty('y')\n// true\npoint.hasOwnProperty('toString')\n// false\npoint.__proto__.hasOwnProperty('toString')\n// true\n",lang:"js"}),l.a.createElement("ul",null,l.a.createElement("li",null,"\u53d8\u91cf ",l.a.createElement("code",null,"x")," \u548c ",l.a.createElement("code",null,"y")," \u90fd\u662f\u5b9e\u4f8b\u5bf9\u8c61 ",l.a.createElement("code",null,"point")," \u81ea\u8eab\u7684\u5c5e\u6027\uff08\u56e0\u4e3a\u5b9a\u4e49\u5728 ",l.a.createElement("code",null,"this")," \u53d8\u91cf\u4e0a\uff09\uff0c\u6240\u4ee5 ",l.a.createElement("code",null,"hasOwnProperty")," \u8fd4\u56de ",l.a.createElement("code",null,"true")),l.a.createElement("li",null,"\u800c ",l.a.createElement("code",null,"toString")," \u662f\u539f\u578b\u5bf9\u8c61\u7684\u5c5e\u6027\uff08\u56e0\u4e3a\u5b9a\u4e49\u5728 ",l.a.createElement("code",null,"Point")," \u7c7b\u4e0a\uff09\uff0c\u6240\u4ee5 ",l.a.createElement("code",null,"hasOwnProperty")," \u65b9\u6cd5\u8fd4\u56de ",l.a.createElement("code",null,"false"))),l.a.createElement("p",null,"\u4e0e ES5 \u4e00\u6837\uff0c\u7c7b\u7684\u6240\u6709\u5b9e\u4f8b\u5171\u4eab\u4e00\u4e2a\u539f\u578b\u5bf9\u8c61\u3002\u8fd9\u4e5f\u610f\u5473\u7740\uff0c\u53ef\u4ee5\u901a\u8fc7\u5b9e\u4f8b\u7684 ",l.a.createElement("code",null,"__proto__")," \u5c5e\u6027\u4e3a\u7c7b\u6dfb\u52a0\u65b9\u6cd5\u3002"),l.a.createElement("blockquote",null,l.a.createElement("p",null,"\u26a0\ufe0f ",l.a.createElement("code",null,"__proto__"),"\xa0\u5e76\u4e0d\u662f\u8bed\u8a00\u672c\u8eab\u7684\u7279\u6027\uff0c\u8fd9\u662f\u5404\u5927\u5382\u5546\u5177\u4f53\u5b9e\u73b0\u65f6\u6dfb\u52a0\u7684\u79c1\u6709\u5c5e\u6027\uff0c\u867d\u7136\u76ee\u524d\u5f88\u591a\u73b0\u4ee3\u6d4f\u89c8\u5668\u7684 JS \u5f15\u64ce\u4e2d\u90fd\u63d0\u4f9b\u4e86\u8fd9\u4e2a\u79c1\u6709\u5c5e\u6027\uff0c\u4f46\u4f9d\u65e7\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528\u8be5\u5c5e\u6027\uff0c\u907f\u514d\u5bf9\u73af\u5883\u4ea7\u751f\u4f9d\u8d56\u3002\u751f\u4ea7\u73af\u5883\u4e2d\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\xa0",l.a.createElement("code",null,"Object.getPrototypeOf"),"\xa0\u65b9\u6cd5\u6765\u83b7\u53d6\u5b9e\u4f8b\u5bf9\u8c61\u7684\u539f\u578b\uff0c\u7136\u540e\u518d\u6765\u4e3a\u539f\u578b\u6dfb\u52a0\u65b9\u6cd5/\u5c5e\u6027\u3002")),l.a.createElement("h2",{id:"\u8bbf\u95ee\u5668\u5c5e\u6027"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8bbf\u95ee\u5668\u5c5e\u6027"},l.a.createElement("span",{className:"icon icon-link"})),"\u8bbf\u95ee\u5668\u5c5e\u6027"),l.a.createElement("p",null,"\u4e0e ES5 \u4e00\u6837\uff0c\u5728\u7c7b\u7684\u5185\u90e8\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"get")," \u548c ",l.a.createElement("code",null,"set")," \u5173\u952e\u5b57\uff0c\u5bf9\u67d0\u4e2a\u5c5e\u6027\u8bbe\u7f6e ",l.a.createElement("strong",null,"\u5b58\u503c\u51fd\u6570")," \u548c ",l.a.createElement("strong",null,"\u53d6\u503c\u51fd\u6570"),"\uff0c\u62e6\u622a\u8be5\u5c5e\u6027\u7684\u5b58\u53d6\u884c\u4e3a\u3002"),l.a.createElement("p",null,"\u5c3d\u7ba1\u5e94\u8be5\u5728\u7c7b\u7684\u6784\u9020\u51fd\u6570\u4e2d\u521b\u5efa\u81ea\u5df1\u7684\u5c5e\u6027\uff0c\u4f46\u662f\u7c7b\u4e5f\u652f\u6301\u76f4\u63a5\u5728\u539f\u578b\u4e0a\u5b9a\u4e49\u8bbf\u95ee\u5668\u5c5e\u6027\u3002"),l.a.createElement(c.a,{code:"class Student () {\n  constructor () {\n    // ...\n  }\n  get run () {\n    return 'get'\n  }\n  set run (value) {\n    console.log(`set:${value}`)\n  }\n}\n\nlet inst = new Student()\n\nStudent.run = 'abc'\n// set:abc\n\nStudent.run\n// get\n",lang:"js"}),l.a.createElement("h2",{id:"\u5c5e\u6027\u8868\u8fbe\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027\u8868\u8fbe\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027\u8868\u8fbe\u5f0f"),l.a.createElement("p",null,"\u7c7b\u7684\u5c5e\u6027\u540d\uff0c\u53ef\u4ee5\u91c7\u7528\u8868\u8fbe\u5f0f\u3002"),l.a.createElement(c.a,{code:"const methodName = 'getArea'\n\nclass Square(){\n  constructor(length){\n    // ...\n  }\n  [methodName](){\n    // ...\n  }\n}\n",lang:"js"}),l.a.createElement("h2",{id:"\u7c7b\u7684\u8868\u8fbe\u5f0f"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u7c7b\u7684\u8868\u8fbe\u5f0f"},l.a.createElement("span",{className:"icon icon-link"})),"\u7c7b\u7684\u8868\u8fbe\u5f0f"),l.a.createElement("p",null,"\u7c7b\u6709\u4e24\u79cd\u8868\u73b0\u5f62\u5f0f\uff1a\u58f0\u660e\u5f0f\u548c\u8868\u8fbe\u5f0f\u3002"),l.a.createElement(c.a,{code:"// \u58f0\u660e\u5f0f\nclass Foo = {\n  constructor () {}\n}\n\n// \u533f\u540d\u8868\u8fbe\u5f0f\nconst Bar = class {\n  constructor () {}\n}\n\n// \u8868\u8fbe\u5f0f\n// \u8fd9\u4e2a\u7c7b\u7684\u540d\u79f0\u4e3a Baz2 \u800c\u4e0d\u662f Baz1\n// Baz1 \u53ea\u6709\u5728\u7c7b\u5185\u90e8\u4ee3\u7801\u53ef\u7528 \u6307\u4ee3\u5f53\u524d\u7c7b\nconst Baz2 = class Baz1 {\n  constructor () {}\n  getClassName () {\n    return Baz1.name\n  }\n}\n",lang:"js"}),l.a.createElement("p",null,"\u26a0\ufe0f ",l.a.createElement("strong",null,"\u6ce8\u610f\u70b9\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,"\u5168\u5c40\u4e25\u683c\u6a21\u5f0f"),l.a.createElement("li",null,"\u4e0d\u5b58\u5728\u7c7b\u58f0\u660e\u63d0\u5347"),l.a.createElement("li",null,l.a.createElement("code",null,"name")," \u5c5e\u6027\uff1a\u603b\u662f\u8fd4\u56de\u7d27\u8ddf ",l.a.createElement("code",null,"class")," \u5173\u952e\u5b57\u540e\u7684\u7c7b\u540d"),l.a.createElement("li",null,"Generator \u65b9\u6cd5"),l.a.createElement("li",null,l.a.createElement("code",null,"this")," \u7684\u6307\u5411 \u9ed8\u8ba4\u6307\u5411\u7c7b\u7684\u5b9e\u4f8b")),l.a.createElement("h2",{id:"\u751f\u6210\u5668\u65b9\u6cd5"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u751f\u6210\u5668\u65b9\u6cd5"},l.a.createElement("span",{className:"icon icon-link"})),"\u751f\u6210\u5668\u65b9\u6cd5"),l.a.createElement("p",null,"\u5982\u679c\u67d0\u4e2a\u65b9\u6cd5\u4e4b\u524d\u52a0\u4e0a\u661f\u53f7\uff08",l.a.createElement("code",null,"*"),"\uff09\uff0c\u5c31\u8868\u793a\u8be5\u65b9\u6cd5\u662f\u4e00\u4e2a\u751f\u6210\u5668\u65b9\u6cd5\uff08Generator \u51fd\u6570\uff09\u3002"),l.a.createElement(c.a,{code:"class Foo {\n  constructor (...args) {\n    this.args = args\n  }\n  * [Symbol.iterator] () {\n    for (let arg of this.args) {\n      yield arg\n    }\n  }\n}\n\nfor (let x of new Foo('hello', 'world')) {\n  console.log(x)\n}\n// hello\n// world\n",lang:"js"}),l.a.createElement("h2",{id:"this-\u7684\u6307\u5411"},l.a.createElement("a",{"aria-hidden":"true",href:"#this-\u7684\u6307\u5411"},l.a.createElement("span",{className:"icon icon-link"})),l.a.createElement("code",null,"this")," \u7684\u6307\u5411"),l.a.createElement("p",null,"\u7c7b\u7684\u65b9\u6cd5\u5185\u90e8\u5982\u679c\u542b\u6709 ",l.a.createElement("code",null,"this"),"\uff0c\u5b83\u9ed8\u8ba4\u6307\u5411\u7c7b\u7684\u5b9e\u4f8b\u3002\u4f46\u662f\uff0c\u5982\u679c\u5c06\u7c7b\u65b9\u6cd5\u5185\u90e8\u7684\u65b9\u6cd5\u63d0\u53d6\u51fa\u6765\u5355\u72ec\u4f7f\u7528\uff0c",l.a.createElement("code",null,"this")," \u4f1a\u6307\u5411\u8be5\u65b9\u6cd5\u8fd0\u884c\u65f6\u6240\u5728\u7684\u73af\u5883\uff0c\u56e0\u4e3a\u627e\u4e0d\u5230\u76f8\u5bf9\u5e94\u7684\u65b9\u6cd5\u800c\u5bfc\u81f4\u62a5\u9519\u3002"),l.a.createElement("p",null,"\u56e0\u6b64\uff0c\u9700\u8981 ",l.a.createElement("strong",null,"\u5728\u6784\u9020\u51fd\u6570\u4e2d\u7ed1\u5b9a ",l.a.createElement("code",null,"this"))," \uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u627e\u4e0d\u5230\u76f8\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002"),l.a.createElement(c.a,{code:"class Student {\n  constructor () {\n    this.sayName = this.sayName.bind(this)\n  }\n}\n",lang:"js"}),l.a.createElement("p",null,"\u53e6\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u662f\u4f7f\u7528",l.a.createElement("strong",null,"\u7bad\u5934\u51fd\u6570"),"\u3002"),l.a.createElement(c.a,{code:"class Car {\n  constructor () {\n    this.sayName = (name = 'BOT') => {\n      this.sayName(`My name is ${name}`)\n    }\n  }\n}\n",lang:"js"}),l.a.createElement("p",null,"\u8fd8\u6709\u4e00\u79cd\u89e3\u51b3\u65b9\u6cd5\u662f\u4f7f\u7528 ",l.a.createElement("code",null,"Proxy")," \uff0c\u83b7\u53d6\u65b9\u6cd5\u7684\u65f6\u5019\uff0c\u81ea\u52a8\u7ed1\u5b9a ",l.a.createElement("code",null,"this"),"\u3002\u8be6\u60c5",l.a.createElement("a",{href:"http://es6.ruanyifeng.com/#docs/class#this-%E7%9A%84%E6%8C%87%E5%90%91",target:"_blank",rel:"noopener noreferrer"},"\u70b9\u51fb\u8fd9\u91cc",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\u3002"),l.a.createElement("hr",null),l.a.createElement("p",null,l.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"http://es6.ruanyifeng.com/#docs/class",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd ECMAScrept 6 \u5165\u95e8\uff1aClass \u7684\u57fa\u672c\u8bed\u6cd5",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://juejin.im/entry/59bbb3b65188256c4b723bdb",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd ES6 JavaScript\u4e2d\u7684\u7c7b class",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);