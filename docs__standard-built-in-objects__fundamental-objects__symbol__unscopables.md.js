(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[325],{"/QH+":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),a=t.n(l),o=(t("B2uJ"),t("+su7"),t("qOys")),r=t.n(o);t("5Yjd");n["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"symbolunscopables"},a.a.createElement("a",{"aria-hidden":"true",href:"#symbolunscopables"},a.a.createElement("span",{className:"icon icon-link"})),"Symbol.unscopables"),a.a.createElement("p",null,"\u5bf9\u8c61\u7684",a.a.createElement("code",null,"Symbol.unscopables"),"\u5c5e\u6027\uff0c\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\u3002\u8be5\u5bf9\u8c61\u6307\u5b9a\u4e86\u4f7f\u7528",a.a.createElement("code",null,"with"),"\u5173\u952e\u5b57\u65f6\uff0c\u54ea\u4e9b\u5c5e\u6027\u4f1a\u88ab",a.a.createElement("code",null,"with"),"\u73af\u5883\u6392\u9664\u3002"),a.a.createElement(r.a,{code:"Array.prototype[Symbol.unscopables];\n// {\n//   copyWithin: true,\n//   entries: true,\n//   fill: true,\n//   find: true,\n//   findIndex: true,\n//   includes: true,\n//   keys: true\n// }\n\nObject.keys(Array.prototype[Symbol.unscopables]);\n// ['copyWithin', 'entries', 'fill', 'find', 'findIndex', 'includes', 'keys']\n",lang:"js"}),a.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u8bf4\u660e\uff0c\u6570\u7ec4\u6709 7 \u4e2a\u5c5e\u6027\uff0c\u4f1a\u88ab",a.a.createElement("code",null,"with"),"\u547d\u4ee4\u6392\u9664\u3002"),a.a.createElement(r.a,{code:"// \u6ca1\u6709 unscopables \u65f6\nclass MyClass {\n  foo() {\n    return 1;\n  }\n}\n\nvar foo = function() {\n  return 2;\n};\n\nwith (MyClass.prototype) {\n  foo(); // 1\n}\n\n// \u6709 unscopables \u65f6\nclass MyClass {\n  foo() {\n    return 1;\n  }\n  get [Symbol.unscopables]() {\n    return { foo: true };\n  }\n}\n\nvar foo = function() {\n  return 2;\n};\n\nwith (MyClass.prototype) {\n  foo(); // 2\n}\n",lang:"js"}),a.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u901a\u8fc7\u6307\u5b9a",a.a.createElement("code",null,"Symbol.unscopables"),"\u5c5e\u6027\uff0c\u4f7f\u5f97",a.a.createElement("code",null,"with"),"\u8bed\u6cd5\u5757\u4e0d\u4f1a\u5728\u5f53\u524d\u4f5c\u7528\u57df\u5bfb\u627e",a.a.createElement("code",null,"foo"),"\u5c5e\u6027\uff0c\u5373",a.a.createElement("code",null,"foo"),"\u5c06\u6307\u5411\u5916\u5c42\u4f5c\u7528\u57df\u7684\u53d8\u91cf\u3002")))}}}]);