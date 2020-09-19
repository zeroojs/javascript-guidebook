(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[242],{"aOA+":function(e,n,l){"use strict";l.r(n);var a=l("q1tI"),t=l.n(a),c=(l("B2uJ"),l("+su7"),l("qOys")),r=l.n(c);l("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"node-\u65b9\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#node-\u65b9\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"Node \u65b9\u6cd5"),t.a.createElement("p",null,"\u7531\u4e8e\u5173\u7cfb\u6307\u9488\u90fd\u662f\u53ea\u8bfb\u7684\uff0c\u56e0\u6b64 DOM \u63d0\u4f9b\u4e86\u4e00\u4e9b\u64cd\u4f5c\u8282\u70b9\u7684\u65b9\u6cd5\u3002"),t.a.createElement("h2",{id:"\u589e\u5220\u6539\u578b\u65b9\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u589e\u5220\u6539\u578b\u65b9\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u589e\u5220\u6539\u578b\u65b9\u6cd5"),t.a.createElement("h3",{id:"insertbefore"},t.a.createElement("a",{"aria-hidden":"true",href:"#insertbefore"},t.a.createElement("span",{className:"icon icon-link"})),"insertBefore"),t.a.createElement("p",null,"\u5728\u5f53\u524d\u8282\u70b9\u4e0b\u589e\u52a0\u4e00\u4e2a\u5b50\u8282\u70b9 Node\uff0c\u5e76\u4f7f\u8be5\u5b50\u8282\u70b9\u4f4d\u4e8e\u53c2\u8003\u8282\u70b9\u7684\u524d\u9762\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.insertBefore(node);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:"const foo = document.getElementById('foo');\nconst bar = document.getElementId('bar');\n\nfoo.insertBefore(bar);\n",lang:"js"}),t.a.createElement("h3",{id:"appendchild"},t.a.createElement("a",{"aria-hidden":"true",href:"#appendchild"},t.a.createElement("span",{className:"icon icon-link"})),"appendChild"),t.a.createElement("p",null,"\u5c06\u6307\u5b9a\u7684 childNode \u53c2\u6570\u4f5c\u4e3a\u6700\u540e\u4e00\u4e2a\u5b50\u8282\u70b9\u6dfb\u52a0\u5230\u5f53\u524d\u8282\u70b9\u3002 \u5982\u679c\u53c2\u6570\u5f15\u7528\u4e86 DOM \u6811\u4e0a\u7684\u73b0\u6709\u8282\u70b9\uff0c\u5219\u8282\u70b9\u5c06\u4ece\u5f53\u524d\u4f4d\u7f6e\u5206\u79bb\uff0c\u5e76\u9644\u52a0\u5230\u65b0\u4f4d\u7f6e\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.appendChild(node);\n",lang:"js"}),t.a.createElement("p",null,"\u53c2\u6570 ",t.a.createElement("code",null,"node")," \u4e3a\u88ab\u63d2\u5165\u7684 DOM \u8282\u70b9\u5f15\u7528\u3002"),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:"const foo = document.getElementById('foo');\nconst bar = document.getElementId('bar');\n\nfoo.appendChild(bar);\n",lang:"js"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u5982\u679c\u88ab\u63d2\u5165\u7684\u8282\u70b9\u5df2\u7ecf\u5b58\u5728\u4e8e\u5f53\u524d\u6587\u6863\u7684\u6587\u6863\u6811\u4e2d\uff0c\u5219\u90a3\u4e2a\u8282\u70b9\u4f1a\u9996\u5148\u4ece\u539f\u5148\u7684\u4f4d\u7f6e\u79fb\u9664\uff0c\u7136\u540e\u518d\u63d2\u5165\u5230\u65b0\u7684\u4f4d\u7f6e"),t.a.createElement("li",null,"\u5982\u679c\u4f60\u9700\u8981\u4fdd\u7559\u8fd9\u4e2a\u5b50\u8282\u70b9\u5728\u539f\u5148\u4f4d\u7f6e\u7684\u663e\u793a\uff0c\u5219\u4f60\u9700\u8981\u5148\u7528 ",t.a.createElement("a",{href:"clone-node"},t.a.createElement("code",null,"Node.cloneNode"))," \u65b9\u6cd5\u590d\u5236\u51fa\u4e00\u4e2a\u8282\u70b9\u7684\u526f\u672c\uff0c\u7136\u540e\u5728\u63d2\u5165\u5230\u65b0\u4f4d\u7f6e"),t.a.createElement("li",null,"\u8fd9\u4e2a\u65b9\u6cd5\u53ea\u80fd\u5c06\u67d0\u4e2a\u5b50\u8282\u70b9\u63d2\u5165\u5230\u540c\u4e00\u4e2a\u6587\u6863\u7684\u5176\u4ed6\u4f4d\u7f6e,\u5982\u679c\u4f60\u60f3\u8de8\u6587\u6863\u63d2\u5165\uff0c\u4f60\u9700\u8981\u5148\u8c03\u7528 ",t.a.createElement("code",null,"document.importNode")," \u65b9\u6cd5")),t.a.createElement("h3",{id:"replacechild"},t.a.createElement("a",{"aria-hidden":"true",href:"#replacechild"},t.a.createElement("span",{className:"icon icon-link"})),"replaceChild"),t.a.createElement("p",null,"\u66ff\u6362\u5f53\u524d\u8282\u70b9\u7684\u67d0\u4e2a\u6307\u5b9a\u5b50\u8282\u70b9\u4e3a\u6307\u5b9a\u7684\u8282\u70b9\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.replaceChild(newChild, oldChild);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<div id="foo">\n  <div class="bar"></div>\n</div>\n',lang:"html"}),t.a.createElement("p",null,"\u521b\u5efa\u4e00\u4e2a ",t.a.createElement("code",null,"span")," \u5143\u7d20\u5e76\u5c06\u5176\u66ff\u4ee3 ",t.a.createElement("code",null,"foo")," \u7684\u7b2c\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\u3002"),t.a.createElement(r.a,{code:"const span = document.createElement('span');\nconst foo = document.getElementById('foo');\nconst bar = foo.firstElementChild;\n\nfoo.replace(bar, span);\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<div id="foo">\n  <span></span>\n</div>\n',lang:"html"}),t.a.createElement("h3",{id:"removechild"},t.a.createElement("a",{"aria-hidden":"true",href:"#removechild"},t.a.createElement("span",{className:"icon icon-link"})),"removeChild"),t.a.createElement("p",null,"\u4ece DOM \u4e2d\u5220\u9664\u4e00\u4e2a\u5b50\u8282\u70b9\uff0c\u8fd4\u56de\u5220\u9664\u7684\u8282\u70b9\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.removeChild(node);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<div id="foo">\n  <div id="bar"></div>\n</div>\n',lang:"html"}),t.a.createElement(r.a,{code:"const foo = document.getElementById('foo');\nconst bar = document.getElementById('bar');\n\nfoo.removeChild(bar);\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<div id="foo"></div>\n',lang:"js"}),t.a.createElement("h3",{id:"clonenode"},t.a.createElement("a",{"aria-hidden":"true",href:"#clonenode"},t.a.createElement("span",{className:"icon icon-link"})),"cloneNode()"),t.a.createElement("p",null,"\u514b\u9686\u8282\u70b9\u5230\u5f53\u524d\u8282\u70b9\u7684\u5b50\u8282\u70b9\u5217\u8868\uff08\u53ca\u5176\u5c5e\u6027\u548c\u540e\u4ee3\u8282\u70b9\uff09\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.cloneNode(deep);\n",lang:"js"}),t.a.createElement("p",null,"\u53c2\u6570 ",t.a.createElement("code",null,"deep")," \u4e3a Boolean \u7c7b\u578b\uff0c\u8868\u793a\u662f\u5426\u91c7\u7528\u6df1\u5ea6\u514b\u9686\uff0c\u5982\u679c\u662f ",t.a.createElement("code",null,"true"),"\uff0c\u5219\u8be5\u8282\u70b9\u7684\u6240\u6709\u540e\u4ee3\u8282\u70b9\u4e5f\u4f1a\u88ab\u514b\u9686\uff0c\u5982\u679c\u4e3a ",t.a.createElement("code",null,"false"),"\uff0c\u5219\u53ea\u514b\u9686\u8be5\u8282\u70b9\u672c\u8eab\u3002"),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<div id="foo">\n  <div></div>\n  <div></div>\n</div>\n',lang:"html"}),t.a.createElement(r.a,{code:"const foo = document.getElementById('foo');\n\nconst backup = foo.cloneNode();\n\nfoo.appendChild(backup);\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<div id="foo">\n  <div></div>\n  <div></div>\n  \x3c!-- \u514b\u9686\u540e\u63d2\u5165\u5230\u5b50\u8282\u70b9\u5217\u8868\u6700\u540e --\x3e\n  <div id="foo"></div>\n</div>\n',lang:"html"}),t.a.createElement("ul",null,t.a.createElement("li",null,"\u514b\u9686\u4e00\u4e2a\u5143\u7d20\u8282\u70b9\u4f1a\u62f7\u8d1d\u5b83\u6240\u6709\u5c5e\u6027\u53ca\u5c5e\u6027\u503c\uff0c\u5f53\u7136\u4e5f\u5c31\u5305\u62ec\u4e86\u5c5e\u6027\u4e0a\u7ed1\u5b9a\u7684\u4e8b\u4ef6\uff0c\u4f46\u4e0d\u4f1a\u7ed1\u5b9a\u90a3\u4e9b\u4f7f\u7528 ",t.a.createElement("code",null,"addEventListener()")," \u65b9\u6cd5\u6216\u8005 ",t.a.createElement("code",null,"node.onClick = fn")," \u8fd9\u79cd JavaScrept \u52a8\u6001\u7ed1\u5b9a\u7684\u4e8b\u4ef6\u3002"),t.a.createElement("li",null,"\u5728\u4f7f\u7528 ",t.a.createElement("code",null,"Node.appendChild()")," \u6216\u7c7b\u4f3c\u7684\u65b9\u6cd5\u5c06\u62f7\u8d1d\u7684\u8282\u70b9\u6dfb\u52a0\u5230\u6587\u6863\u4e2d\u4e4b\u524d\uff0c\u90a3\u4e2a\u62f7\u8d1d\u8282\u70b9\u5e76\u4e0d\u5c5e\u4e8e\u5f53\u524d\u6587\u6863\u6811\u7684\u4e00\u90e8\u5206\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u5b83\u6ca1\u6709\u7236\u8282\u70b9\u3002"),t.a.createElement("li",null,"\u5982\u679c ",t.a.createElement("code",null,"deep")," \u53c2\u6570\u8bbe\u4e3a ",t.a.createElement("code",null,"false"),"\uff0c\u5219\u4e0d\u514b\u9686\u5b83\u7684\u4efb\u4f55\u5b50\u8282\u70b9\uff0c\u8be5\u8282\u70b9\u6240\u5305\u542b\u7684\u6240\u6709\u6587\u672c\u4e5f\u4e0d\u4f1a\u88ab\u514b\u9686\uff0c\u56e0\u4e3a\u6587\u672c\u672c\u8eab\u4e5f\u662f\u4e00\u4e2a\u6216\u591a\u4e2a ",t.a.createElement("code",null,"Text")," \u8282\u70b9\u3002"),t.a.createElement("li",null,"\u5982\u679c ",t.a.createElement("code",null,"deep")," \u53c2\u6570\u8bbe\u4e3a ",t.a.createElement("code",null,"true"),"\uff0c\u5219\u4f1a\u62f7\u8d1d\u6574\u68f5 DOM \u5b50\u6811\uff08\u5305\u62ec\u90a3\u4e9b\u53ef\u80fd\u5b58\u5728\u7684 ",t.a.createElement("code",null,"Text")," \u5b50\u8282\u70b9\uff09\u3002\u5bf9\u4e8e\u7a7a\u8282\u70b9\uff08\u4f8b\u5982 ",t.a.createElement("code",null,"<img>")," \u6216 ",t.a.createElement("code",null,"<input>")," \u5143\u7d20\uff09\uff0c\u5219 ",t.a.createElement("code",null,"deep")," \u53c2\u6570\u65e0\u8bba\u662f ",t.a.createElement("code",null,"true")," \u8fd8\u662f ",t.a.createElement("code",null,"false")," \uff0c\u90fd\u6ca1\u6709\u5173\u7cfb\uff0c\u4f46\u662f\u4ecd\u7136\u9700\u8981\u4e3a\u5b83\u6307\u5b9a\u4e00\u4e2a\u503c\u3002"),t.a.createElement("li",null,"\u4e3a\u4e86\u9632\u6b62\u4e00\u4e2a\u6587\u6863\u4e2d\u51fa\u73b0\u4e24\u4e2a ID \u91cd\u590d\u7684\u5143\u7d20\uff0c\u4f7f\u7528 ",t.a.createElement("code",null,"cloneNode()")," \u65b9\u6cd5\u514b\u9686\u7684\u8282\u70b9\u5728\u9700\u8981\u65f6\u5e94\u8be5\u6307\u5b9a\u53e6\u4e00\u4e2a\u4e0e\u539f ID \u503c\u4e0d\u540c\u7684 ID\u3002"),t.a.createElement("li",null,"\u5982\u679c\u539f\u59cb\u8282\u70b9\u8bbe\u7f6e\u4e86 ID\uff0c\u5e76\u4e14\u514b\u9686\u8282\u70b9\u4f1a\u88ab\u63d2\u5165\u5230\u76f8\u540c\u7684\u6587\u6863\u4e2d\uff0c\u90a3\u4e48\u5e94\u8be5\u66f4\u65b0\u514b\u9686\u8282\u70b9\u7684 ID \u4ee5\u4fdd\u8bc1\u552f\u4e00\u6027\u3002",t.a.createElement("code",null,"name")," \u5c5e\u6027\u53ef\u80fd\u4e5f\u9700\u8981\u8fdb\u884c\u4fee\u6539\uff0c\u53d6\u51b3\u4e8e\u4f60\u662f\u5426\u5e0c\u671b\u6709\u76f8\u540c\u540d\u79f0\u7684\u8282\u70b9\u5b58\u5728\u4e8e\u6587\u6863\u4e2d\u3002")),t.a.createElement("h2",{id:"\u5224\u5b9a\u578b\u65b9\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5224\u5b9a\u578b\u65b9\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u5224\u5b9a\u578b\u65b9\u6cd5"),t.a.createElement("h3",{id:"haschildnodes"},t.a.createElement("a",{"aria-hidden":"true",href:"#haschildnodes"},t.a.createElement("span",{className:"icon icon-link"})),"hasChildNodes"),t.a.createElement("p",null,"\u5224\u65ad\u5f53\u524d\u8282\u70b9\u662f\u5426\u542b\u6709\u5b50\u8282\u70b9"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.hasChildNodes();\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<div id="foo">\n  <div id="bar"></div>\n</div>\n\n<script type="text/javascript">\n  const foo = document.getElementById(\'foo\');\n  const bar = document.getElementById(\'bar\');\n\n  console.log(foo.hasChildNodes);\n  // true\n  console.log(bar.hasChildNodes);\n  // false\n<\/script>\n',lang:"html"}),t.a.createElement("h3",{id:"isequalnode"},t.a.createElement("a",{"aria-hidden":"true",href:"#isequalnode"},t.a.createElement("span",{className:"icon icon-link"})),"isEqualNode"),t.a.createElement("p",null,"\u5224\u65ad\u4e24\u4e2a\u8282\u70b9\u662f\u5426\u76f8\u7b49\u3002"),t.a.createElement("p",null,"\u5f53\u4e24\u4e2a\u8282\u70b9\u7684\u7c7b\u578b\u76f8\u540c\uff0c\u5b9a\u4e49\u7279\u5f81\uff08defining characteristics\uff09\u76f8\u540c\uff08\u5bf9\u5143\u7d20\u6765\u8bf4\uff0c\u5373 id\uff0c\u5b69\u5b50\u8282\u70b9\u7684\u6570\u91cf\u7b49\u7b49\uff09\uff0c\u5c5e\u6027\u4e00\u81f4\u7b49\uff0c\u8fd9\u4e24\u4e2a\u8282\u70b9\u5c31\u662f\u76f8\u7b49\u7684\u3002\u4e00\u4e9b\u5177\u4f53\u7684\u6570\u636e\u6307\u51fa\uff1a\u591a\u6570\u65f6\u5019\u7684\u6bd4\u8f83\u662f\u6839\u636e\u8282\u70b9\u7684\u7c7b\u578b\u6765\u7684\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.isEqualNode(node);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<ul class="list">\n  <li>Hello world!</li>\n  <li>I am the champion!</li>\n  <li>Hello world!</li>\n</ul>\n',lang:"html"}),t.a.createElement(r.a,{code:"const items = document.getElementsByClassName('list')[0].children;\n\nconsolg.log(items[0].isEqualNode(items[1]));\n// false\nconsolg.log(items[0].isEqualNode(items[2]));\n// true\n",lang:"js"}),t.a.createElement("h3",{id:"comparedocumentposition"},t.a.createElement("a",{"aria-hidden":"true",href:"#comparedocumentposition"},t.a.createElement("span",{className:"icon icon-link"})),"compareDocumentPosition"),t.a.createElement("p",null,"\u6bd4\u8f83\u5f53\u524d\u8282\u70b9\u4e0e\u4efb\u610f\u6587\u6863\u4e2d\u7684\u53e6\u4e00\u8282\u70b9\u7684\u4f4d\u7f6e\u5173\u7cfb"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.compareDocumentPosition(node);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:"var head = document.getElementsByTagName('head').item(0);\nif (head.compareDocumentPosition(document.body) & Node.DOCUMENT_POSITION_FOLLOWING) {\n  console.log('well-formed document');\n} else {\n  console.log('<head> is not before <body>');\n}\n",lang:"js"}),t.a.createElement("h3",{id:"normalize"},t.a.createElement("a",{"aria-hidden":"true",href:"#normalize"},t.a.createElement("span",{className:"icon icon-link"})),"normalize"),t.a.createElement("p",null,"\u89c4\u8303\u5316\u5f53\u524d\u8282\u70b9\u53ca\u5176\u540e\u4ee3\u8282\u70b9"),t.a.createElement("p",null,"\u5728\u4e00\u4e2a\u89c4\u8303\u5316\u540e\u7684 DOM \u6811\u4e2d\uff0c\u4e0d\u5b58\u5728\u4e00\u4e2a\u7a7a\u7684\u6587\u672c\u8282\u70b9\uff0c\u6216\u8005\u4e24\u4e2a\u76f8\u90bb\u7684\u6587\u672c\u8282\u70b9\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"Node.normalize();\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:"const wrapper = document.createElement('div');\n\nwrapper.appendChild(document.createTextNode('Part 1'));\nwrapper.appendChild(document.createTextNode('Part 2'));\n\n// \u89c4\u8303\u82b1\u524d\uff1awrapper.childNodes.length === 2\n// wrapper.childNodes[0].textContent === 'Part 1'\n// wrapper.childNodes[0].textContent === 'Part 2'\n\nwrapper.normalize();\n// \u89c4\u8303\u5316\u540e\uff1awrapper.childNodes.length === 1\n// wrapper.childNodes[0].textContent === 'Part 1 Part 2'\n",lang:"js"}),t.a.createElement("h2",{id:"childnode-\u65b9\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#childnode-\u65b9\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"ChildNode \u65b9\u6cd5"),t.a.createElement("p",null,"ChildNode \u7ee7\u627f\u4e8e Node\uff0c\u4f46\u662f\u6709\u5176\u81ea\u8eab\u7684\u4e00\u4e9b\u65b9\u6cd5\u3002"),t.a.createElement("h3",{id:"childnoderemove"},t.a.createElement("a",{"aria-hidden":"true",href:"#childnoderemove"},t.a.createElement("span",{className:"icon icon-link"})),"ChildNode.remove"),t.a.createElement("p",null,"\u4ece\u6587\u6863\u4e2d\u79fb\u9664\u5f53\u524d\u8282\u70b9"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"ChildNode.remove();\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<ul class="list">\n  <li class="item1"></li>\n  <li class="item2"></li>\n  <li class="item3"></li>\n</ul>\n',lang:"html"}),t.a.createElement(r.a,{code:"const item1 = document.querySelector('.item1');\nconst item2 = document.querySelector('.item2');\n\nitem1.remove();\nitem2.remove();\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<ul class="list">\n  <li class="item3"></li>\n</ul>\n',lang:"html"}),t.a.createElement("h3",{id:"childnodebefore"},t.a.createElement("a",{"aria-hidden":"true",href:"#childnodebefore"},t.a.createElement("span",{className:"icon icon-link"})),"ChildNode.before"),t.a.createElement("p",null,"\u5728\u5176\u7236\u8282\u70b9\u7684\u5b50\u8282\u70b9\u5217\u8868\u4e2d\u63d2\u5165\u4e00\u4e9b Node \u6216 DOMString \u5bf9\u8c61\u3002\u63d2\u5165\u4f4d\u7f6e\u4e3a ChildNode \u4e4b\u524d\u3002DOMString \u5bf9\u8c61\u4f1a\u88ab\u4ee5 Text \u7684\u5f62\u5f0f\u63d2\u5165\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"ChildNode.before();\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<ul class="list">\n  <li class="item1"></li>\n  <li class="item2"></li>\n  <li class="item3"></li>\n</ul>\n',lang:"html"}),t.a.createElement(r.a,{code:"const item1 = document.querySelector('.item1');\nconst li = document.createElement('li');\nli.innerHTML = 'Hello world!';\n\nitem1.before(li);\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<ul class="list">\n  <li>Hello world!</li>\n  <li class="item1"></li>\n  <li class="item2"></li>\n  <li class="item3"></li>\n</ul>\n',lang:"html"}),t.a.createElement("h3",{id:"childnodeafter"},t.a.createElement("a",{"aria-hidden":"true",href:"#childnodeafter"},t.a.createElement("span",{className:"icon icon-link"})),"ChildNode.after"),t.a.createElement("p",null,"\u63d2\u5165\u8282\u70b9\u5230\u5f53\u524d\u8282\u70b9\u540e\u9762\u3002"),t.a.createElement("p",null,"\u5728\u5176\u7236\u8282\u70b9\u7684\u5b50\u8282\u70b9\u5217\u8868\u4e2d\u63d2\u5165\u4e00\u4e9b Node \u6216 DOMString \u5bf9\u8c61\u3002\u63d2\u5165\u4f4d\u7f6e\u4e3a ChildNode \u4e4b\u540e\u3002DOMString \u5bf9\u8c61\u4f1a\u88ab\u4ee5 Text \u7684\u5f62\u5f0f\u63d2\u5165\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"ChildNode.after();\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:'<ul class="list">\n  <li class="item1"></li>\n  <li class="item2"></li>\n  <li class="item3"></li>\n</ul>\n',lang:"html"}),t.a.createElement(r.a,{code:"const item1 = document.querySelector('.item1');\nconst li = document.createElement('li');\nli.innerHTML = 'Hello world!';\n\nitem1.after(li);\n",lang:"js"}),t.a.createElement("p",null,"\u8fd0\u884c\u540e\uff1a"),t.a.createElement(r.a,{code:'<ul class="list">\n  <li class="item1"></li>\n  <li class="item2"></li>\n  <li class="item3"></li>\n  <li>Hello world!</li>\n</ul>\n',lang:"html"}),t.a.createElement("h3",{id:"childnodereplacewith"},t.a.createElement("a",{"aria-hidden":"true",href:"#childnodereplacewith"},t.a.createElement("span",{className:"icon icon-link"})),"ChildNode.replaceWith"),t.a.createElement("p",null,"\u66ff\u6362\u5f53\u524d\u8282\u70b9\u4e3a\u53e6\u4e00\u8282\u70b9\u3002"),t.a.createElement("p",null,"\ud83d\udcd6 ",t.a.createElement("strong",null,"\u8bed\u6cd5\uff1a")),t.a.createElement(r.a,{code:"ChildNode.replaceWith(node);\n",lang:"js"}),t.a.createElement("p",null,"\ud83c\udf30 ",t.a.createElement("strong",null,"\u793a\u4f8b\uff1a")),t.a.createElement(r.a,{code:"const parent = document.createElement('div');\nconst child = document.createElment('p');\n\nparent.appendChild(child);\nconst span = document.createElement('span');\n\nchild.replaceWith(span);\n\nconsole.log(parent.outerHTML);\n// '<div><span></span></div>'\n",lang:"js"})))}}}]);