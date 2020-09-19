(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[207],{Isqu:function(e,l,t){"use strict";t.r(l);var n=t("q1tI"),a=t.n(n),o=(t("B2uJ"),t("+su7"),t("qOys")),c=t.n(o);t("5Yjd");l["default"]=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"markdown"},a.a.createElement("h1",{id:"nodelist"},a.a.createElement("a",{"aria-hidden":"true",href:"#nodelist"},a.a.createElement("span",{className:"icon icon-link"})),"NodeList"),a.a.createElement("p",null,"NodeList \u5b9e\u4f8b\u5bf9\u8c61\u662f\u4e00\u4e2a\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0c\u5b83\u7684\u6210\u5458\u662f\u8282\u70b9\u5bf9\u8c61\uff0c\u5305\u62ec ",a.a.createElement("code",null,"childNodes")," \u548c ",a.a.createElement("code",null,"querySelectorAll()")," \u65b9\u6cd5\u8fd4\u56de\u503c\u3002"),a.a.createElement("p",null,"DOM \u5c06 HTML \u9875\u9762\u89e3\u6790\u6210\u4e00\u4e2a\u7531\u591a\u5c42\u6b21\u8282\u70b9\u6784\u6210\u7684\u7ed3\u6784\u3002\u8282\u70b9\u662f\u9875\u9762\u7ed3\u6784\u7684\u57fa\u7840\uff0c\u800c\u6240\u6709\u8282\u70b9\u7ee7\u627f\u81ea Node \u7c7b\u578b\uff0c\u56e0\u6b64\u6240\u6709\u8282\u70b9\u5171\u4eab\u7740\u57fa\u672c\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002Node \u7c7b\u578b\u6709\u4e00\u4e2a ",a.a.createElement("code",null,"childNodes")," \u5c5e\u6027\uff0c\u6240\u4ee5\u6240\u6709\u8282\u70b9\u90fd\u62e5\u6709\u8fd9\u4e2a\u5c5e\u6027\u3002\u800c\u901a\u8fc7\u8fd9\u4e2a\u5c5e\u6027\u5c31\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u4fdd\u5b58\u7740\u672c\u8282\u70b9\u7684\u5b50\u8282\u70b9\u7ec4\u6210\u7684 NodeList \u5bf9\u8c61\u3002"),a.a.createElement("p",null,"NodeList \u53ef\u4ee5\u901a\u8fc7\u65b9\u62ec\u53f7\u8868\u8fbe\u5f0f\u6765\u8bbf\u95ee\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",a.a.createElement("code",null,"item()")," \u65b9\u6cd5\u6765\u8bbf\u95ee\u3002"),a.a.createElement("p",null,"\u901a\u8fc7 ",a.a.createElement("code",null,"length")," \u5c5e\u6027\uff0c\u53ef\u4ee5\u8bbf\u95ee\u5143\u7d20\u4e2a\u6570\u3002\u867d\u7136 JavaScript \u4e2d\u7684\u6570\u7ec4\u53ef\u4ee5\u4fee\u6539 ",a.a.createElement("code",null,"length")," \u5c5e\u6027\u3002\u4f46 NodeList \u96c6\u5408\u5e76\u4e0d\u662f\u6570\u7ec4\uff0c\u800c\u4e14\u5b83\u662f\u9875\u9762\u4e00\u7247\u533a\u57df\u7684 DOM \u7ed3\u6784\u6620\u5c04\u3002\u6240\u4ee5\u8bf7\u4e0d\u8981\u4fee\u6539 NodeList \u5bf9\u8c61\u7684 ",a.a.createElement("code",null,"length")," \u503c\u3002"),a.a.createElement(c.a,{code:"// \u83b7\u53d6\u7b2c\u4e00\u4e2a\u5143\u7d20\nconst firstChild = someNode.childNodes[0];\n\n// \u83b7\u53d6\u7b2c\u4e8c\u4e2a\u5143\u7d20\nconst secondChild = someNode.childNodes.item[1];\n\n// \u83b7\u53d6\u96c6\u5408\u957f\u5ea6\nconst count = someNode.childNodes.length;\n",lang:"js"}),a.a.createElement("blockquote",null,a.a.createElement("p",null,"NodeList \u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u662f\u4e00\u4e2a\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\uff08Like Array Object\uff09\u3002\u867d\u7136 NodeList \u4e0d\u662f\u4e00\u4e2a\u6570\u7ec4\uff0c\u4f46\u662f\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement("code",null,"forEach()")," \u6765\u8fed\u4ee3\u3002\u4f60\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",a.a.createElement("code",null,"Array.from()")," \u5c06\u5176\u8f6c\u6362\u4e3a\u6570\u7ec4\u3002"),a.a.createElement("p",null,"\u4e0d\u8fc7\uff0c\u6709\u4e9b\u6d4f\u89c8\u5668\u8f83\u4e3a\u8fc7\u65f6\uff0c\u6ca1\u6709\u5b9e\u73b0 ",a.a.createElement("code",null,"NodeList.forEach()")," \u548c ",a.a.createElement("code",null,"Array.from()"),"\u3002\u4f60\u53ef\u4ee5\u7528 ",a.a.createElement("code",null,"Array.prototype.forEach()")," \u6765\u89c4\u907f\u8fd9\u4e00\u95ee\u9898\u3002")),a.a.createElement("p",null,"\u5728\u4e00\u4e9b\u60c5\u51b5\u4e0b\uff0cNodeList \u662f\u4e00\u4e2a\u5b9e\u65f6\u96c6\u5408\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5982\u679c\u6587\u6863\u4e2d\u7684\u8282\u70b9\u6811\u53d1\u751f\u53d8\u5316\uff0cNodeList \u4e5f\u4f1a\u968f\u4e4b\u53d8\u5316\u3002\u4f8b\u5982\uff0cNode.childNodes \u662f\u5b9e\u65f6\u7684\uff1a"),a.a.createElement(c.a,{code:"const parent = document.getElementById('parent');\nconst childNodes = parent.childNodes;\n\nconsole.log(childNodes.length);\n// \u5047\u8bbe\u4e3a 2\n\nparent.appendChild(document.createElement('div'));\n\nconsole.log(childNodes.length);\n// 3\n",lang:"js"}),a.a.createElement("p",null,"\u5728\u5176\u4ed6\u60c5\u51b5\u4e0b\uff0cNodeList \u662f\u4e00\u4e2a\u9759\u6001\u96c6\u5408\uff0c\u4e5f\u5c31\u610f\u5473\u7740\u968f\u540e\u5bf9\u6587\u6863\u5bf9\u8c61\u6a21\u578b\u7684\u4efb\u4f55\u6539\u52a8\u90fd\u4e0d\u4f1a\u5f71\u54cd\u96c6\u5408\u7684\u5185\u5bb9\u3002\u6bd4\u5982 ",a.a.createElement("code",null,"document.querySelectorAll")," \u5c31\u4f1a\u8fd4\u56de\u4e00\u4e2a\u9759\u6001 NodeList\u3002"),a.a.createElement("p",null,"\u6700\u597d\u7262\u8bb0\u8fd9\u79cd\u4e0d\u540c\uff0c\u5c24\u5176\u662f\u5728\u5f53\u4f60\u9009\u62e9 NodeList \u4e2d\u6240\u6709\u9879\u904d\u5386\u7684\u65b9\u5f0f\uff0c\u6216\u7f13\u5b58\u5b83\u7684\u957f\u5ea6\u7684\u65f6\u5019\u3002"),a.a.createElement("hr",null),a.a.createElement("p",null,a.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/NodeList",target:"_blank",rel:"noopener noreferrer"},"MDN\uff1aNodeList",a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},a.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),a.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);