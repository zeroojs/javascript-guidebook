(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[84],{Dd7b:function(e,n,r){"use strict";r.r(n);var a=r("q1tI"),t=r.n(a),l=(r("B2uJ"),r("+su7"),r("qOys")),o=r.n(l);r("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"web-workers"},t.a.createElement("a",{"aria-hidden":"true",href:"#web-workers"},t.a.createElement("span",{className:"icon icon-link"})),"Web Workers"),t.a.createElement("p",null,"JavaScript \u8bed\u8a00\u91c7\u7528\u7684\u662f\u5355\u7ebf\u7a0b\u6a21\u578b\uff0c\u4e5f\u5c31\u662f\u8bf4\uff0c\u6240\u6709\u4efb\u52a1\u53ea\u80fd\u5728\u4e00\u4e2a\u7ebf\u7a0b\u4e0a\u5b8c\u6210\uff0c\u4e00\u6b21\u53ea\u80fd\u505a\u4e00\u4ef6\u4e8b\u3002\u524d\u9762\u7684\u4efb\u52a1\u6ca1\u505a\u5b8c\uff0c\u540e\u9762\u7684\u4efb\u52a1\u53ea\u80fd\u7b49\u7740\u3002\u968f\u7740\u7535\u8111\u8ba1\u7b97\u80fd\u529b\u7684\u589e\u5f3a\uff0c\u5c24\u5176\u662f\u591a\u6838 CPU \u7684\u51fa\u73fe\uff0c\u5355\u7ebf\u7a0b\u5e26\u6765\u5f88\u5927\u7684\u4e0d\u53d8\uff0c\u65e0\u6cd5\u5145\u5206\u53d1\u6325\u8ba1\u7b97\u673a\u7684\u8ba1\u7b97\u80fd\u529b\u3002"),t.a.createElement("p",null,"Web Worker \u7684\u4f5c\u7528\uff0c\u5c31\u662f\u4e3a JavaScript \u521b\u9020\u591a\u7ebf\u7a0b\u73af\u5883\uff0c\u5141\u8bb8\u4e3b\u7ebf\u7a0b\u521b\u5efa Worker \u7ebf\u7a0b\uff0c\u5c06\u4e00\u4e9b\u4efb\u52a1\u5206\u914d\u7ed9\u540e\u8005\u8fd0\u884c\u3002\u5728\u4e3b\u7ebf\u7a0b\u8fd0\u884c\u7684\u540c\u65f6\uff0cWorker \u7ebf\u7a0b\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u4e24\u8005\u4e92\u4e0d\u5e72\u6270\u3002\u7b49\u5230 Worker \u7ebf\u7a0b\u5b8c\u6210\u8ba1\u7b97\u4efb\u52a1\uff0c\u518d\u628a\u7ed3\u679c\u8fd4\u56de\u7ed9\u4e3b\u7ebf\u7a0b\u3002\u8fd9\u6837\u7684\u597d\u5904\u662f\uff0c\u4e00\u4e9b\u8ba1\u7b97\u5bc6\u96c6\u578b\u6216\u9ad8\u5ef6\u8fdf\u7684\u4efb\u52a1\uff0c\u88ab Worker \u7ebf\u7a0b\u8d1f\u62c5\u4e86\uff0c\u4e3b\u7ebf\u7a0b\uff08\u901a\u5e38\u8d1f\u8d23 UI \u4ea4\u4e92\uff09\u5c31\u4f1a\u5f88\u6d41\u7545\uff0c\u4e0d\u4f1a\u88ab\u963b\u585e\u6216\u62d6\u6162\u3002"),t.a.createElement("p",null,"Worker \u7ebf\u7a0b\u4e00\u65e6\u521b\u5efa\u6210\u529f\uff0c\u5c31\u4f1a\u59cb\u7ec8\u8fd0\u884c\uff0c\u4e0d\u4f1a\u88ab\u4e3b\u7ebf\u7a0b\u4e0a\u7684\u6d3b\u52a8\uff08\u6bd4\u5982\u7528\u6237\u70b9\u51fb\u6309\u94ae\u3001\u63d0\u4ea4\u8868\u5355\uff09\u6253\u65ad\u3002\u8fd9\u6837\u6709\u5229\u4e8e\u968f\u65f6\u54cd\u5e94\u4e3b\u7ebf\u7a0b\u7684\u901a\u4fe1\u3002\u4f46\u662f\uff0c\u8fd9\u4e5f\u9020\u6210\u4e86 Worker \u6bd4\u8f83\u8017\u8d39\u8d44\u6e90\uff0c\u4e0d\u5e94\u8be5\u8fc7\u5ea6\u4f7f\u7528\uff0c\u800c\u4e14\u4e00\u65e6\u4f7f\u7528\u5b8c\u6bd5\uff0c\u5c31\u5e94\u8be5\u5173\u95ed\u3002"),t.a.createElement("p",null,"Worker \u4f7f\u7528\u6784\u9020\u51fd\u6570 ",t.a.createElement("code",null,"WebWorker")," \u8fd0\u884c\u4e00\u4e2a\u547d\u540d\u7684 JavaScript \u6587\u4ef6\uff0c\u8fd9\u4e2a\u6587\u4ef6\u5305\u542b\u5c06\u5728\u5de5\u4f5c\u7ebf\u7a0b\u4e2d\u8fd0\u884c\u7684\u4ee3\u7801\u3002Worker \u8fd0\u884c\u5728\u53e6\u4e00\u4e2a\u5168\u5c40\u4e0a\u4e0b\u6587\u4e2d\uff0c\u4e0d\u540c\u4e0e\u5f53\u524d\u7684 ",t.a.createElement("code",null,"window"),"\u3002\u56e0\u6b64\uff0c\u4f7f\u7528 ",t.a.createElement("code",null,"window")," \u5feb\u6377\u65b9\u5f0f\u83b7\u53d6\u5f53\u524d\u5168\u5c40\u8303\u56f4\u5728\u4e00\u4e2a Worker \u5185\u5c06\u8fd4\u56de\u9519\u8bef\u3002"),t.a.createElement("p",null,"\u5728 Worker \u7ebf\u7a0b\u4e2d\u4f60\u53ef\u4ee5\u8fd0\u884c\u4efb\u4f55\u4ee3\u7801\uff0c\u4e0d\u8fc7\u6709\u4e00\u4e9b\u4f8b\u5916\u60c5\u51b5\u3002\u6bd4\u5982\uff1a\u5728 Worker \u5185\uff0c\u4e0d\u80fd\u76f4\u63a5\u64cd\u4f5c DOM \u8282\u70b9\uff0c\u4e5f\u4e0d\u80fd\u4f7f\u7528 ",t.a.createElement("code",null,"window")," \u5bf9\u8c61\u7684\u9ed8\u8ba4\u65b9\u6cd5\u548c\u5c5e\u6027\u3002\u7136\u800c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5927\u91cf ",t.a.createElement("code",null,"window")," \u5bf9\u8c61\u4e4b\u4e0b\u7684\u4e1c\u897f\uff0c\u5305\u62ec WebSockets\uff0cIndexDB \u4ee5\u53ca FIreFox OS \u4e13\u7528\u7684 Data Store API \u7b49\u6570\u636e\u5b58\u50a8\u673a\u5236\u3002"),t.a.createElement("p",null,"Workers \u548c\u4e3b\u7ebf\u7a0b\u95f4\u7684\u6570\u636e\u4f20\u9012\u901a\u8fc7\u8fd9\u6837\u7684\u6d88\u606f\u673a\u5236\u8fdb\u884c\uff0c\u53cc\u65b9\u90fd\u4f7f\u7528 ",t.a.createElement("code",null,"postMessage()")," \u65b9\u6cd5\u53d1\u9001\u5404\u81ea\u7684\u6d88\u606f\uff0c\u4f7f\u7528 ",t.a.createElement("code",null,"onmessage")," \u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u6765\u54cd\u5e94\u6d88\u606f\uff08\u6d88\u606f\u88ab\u5305\u542b\u5728 ",t.a.createElement("code",null,"Message")," \u4e8b\u4ef6\u7684 ",t.a.createElement("code",null,"data")," \u5c5e\u6027\u4e2d\uff09\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u4e2d\u6570\u636e\u5e76\u4e0d\u662f\u88ab\u5171\u4eab\u800c\u662f\u88ab\u590d\u5236\u3002"),t.a.createElement("p",null,"Web Worker \u6709\u4ee5\u4e0b\u51e0\u4e2a\u4f7f\u7528\u6ce8\u610f\u70b9\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"\u540c\u6e90\u9650\u5236\uff1a\u5206\u914d\u7ed9 Web Worker \u7ebf\u7a0b\u8fd0\u884c\u7684\u811a\u672c\u6587\u4ef6\uff0c\u5fc5\u987b\u4e0e\u4e3b\u7ebf\u7a0b\u7684\u811a\u672c\u6587\u4ef6\u540c\u6e90"),t.a.createElement("li",null,"DOM \u9650\u5236\uff1aWorker \u7ebf\u7a0b\u6240\u5728\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u4e0e\u4e3b\u7ebf\u7a0b\u4e0d\u4e00\u6837\uff0c\u65e0\u6cd5\u8bfb\u53d6\u4e3b\u7ebf\u7a0b\u6240\u5728\u7f51\u9875\u7684 DOM \u5bf9\u8c61\uff0c\u4e5f\u65e0\u6cd5\u4f7f\u7528 document\u3001window\u3001parent \u8fd9\u4e9b\u5bf9\u8c61\u3002\u4f46\u662f\uff0cWorker \u7ebf\u7a0b\u53ef\u4ee5\u8bbf\u95ee navigator \u5bf9\u8c61\u548c location \u5bf9\u8c61\u3002"),t.a.createElement("li",null,"\u901a\u4fe1\u8054\u7cfb\uff1aWorker \u7ebf\u7a0b\u548c\u4e3b\u7ebf\u7a0b\u4e0d\u518d\u540c\u4e00\u4e2a\u4e0a\u4e0b\u6587\u73af\u5883\uff0c\u5b83\u4eec\u4e0d\u80fd\u76f4\u63a5\u901a\u4fe1\uff0c\u5fc5\u987b\u901a\u8fc7\u6d88\u606f\u5b8c\u6210\u3002"),t.a.createElement("li",null,"\u811a\u672c\u9650\u5236\uff1aWorker \u7ebf\u7a0b\u4e0d\u80fd\u6267\u884c ",t.a.createElement("code",null,"alert()")," \u548c ",t.a.createElement("code",null,"confirm()")," \u65b9\u6cd5\uff0c\u4f46\u53ef\u4ee5\u4f7f\u7528 XMLHttpRequest \u5bf9\u8c61\u53d1\u51fa AJAX \u8bf7\u6c42"),t.a.createElement("li",null,"\u6587\u4ef6\u9650\u5236\uff1aWorker \u7ebf\u7a0b\u65e0\u6cd5\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\uff0c\u5373\u4e0d\u80fd\u6253\u5f00\u672c\u5730\u7684\u6587\u4ef6\u7cfb\u7edf\uff08",t.a.createElement("code",null,"file://"),"\uff09 \uff0c\u5b83\u6240\u52a0\u8f7d\u7684\u811a\u672c\uff0c\u5fc5\u987b\u6765\u81ea\u7f51\u7edc")),t.a.createElement("h2",{id:"\u57fa\u672c\u7528\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u57fa\u672c\u7528\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u57fa\u672c\u7528\u6cd5"),t.a.createElement("h3",{id:"\u4e3b\u7ebf\u7a0b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4e3b\u7ebf\u7a0b"},t.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u7ebf\u7a0b"),t.a.createElement("p",null,"\u4e3b\u7ebf\u7a0b\u8c03\u7528\u6784\u9020\u51fd\u6570 Worker \u521b\u5efa\u4e00\u4e2a Worker \u7ebf\u7a0b\uff0c\u6784\u9020\u51fd\u6570\u53c2\u6570\u662f\u4e00\u4e2a URL\u3002\u521b\u5efa\u65b9\u5f0f\u5206\u4e3a\u811a\u672c\u6587\u4ef6\u548c\u5b57\u7b26\u4e32\u5f62\u5f0f\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u811a\u672c\u6587\u4ef6\u5f62\u5f0f")),t.a.createElement(o.a,{code:"const worker = new Worker('https:// ~.js');\n",lang:"js"}),t.a.createElement("p",null,"Worker \u9650\u5236"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("p",null,"\u5206\u914d\u7ed9 Worker \u7ebf\u7a0b\u8fd0\u884c\u7684\u811a\u672c\u6587\u4ef6\uff0c\u5fc5\u987b\u4e0e\u4e3b\u7ebf\u7a0b\u7684\u811a\u672c\u6587\u4ef6\u540c\u6e90\u3002")),t.a.createElement("li",null,t.a.createElement("p",null,"Worker \u4e0d\u80fd\u8bfb\u53d6\u672c\u5730\u7684\u6587\u4ef6\uff08\u4e0d\u80fd\u6253\u5f00\u672c\u673a\u7684\u6587\u4ef6\u7cfb\u7edf ",t.a.createElement("code",null,"file://"),"\uff09\uff0c\u5b83\u6240\u52a0\u8f7d\u7684\u811a\u672c\u5fc5\u987b\u6765\u81ea\u7f51\u7edc\u3002"))),t.a.createElement("p",null,t.a.createElement("strong",null,"\u5b57\u7b26\u4e32\u5f62\u5f0f")),t.a.createElement(o.a,{code:"const data = `\n    // worker \u7ebf\u7a0b do something\n`;\n// \u8f6c\u6210\u4e8c\u8fdb\u5236\u5bf9\u8c61\nconst blob = new Blob([data]);\n// \u751f\u6210URL\nconst url = window.URL.createObjectURL(blob);\n// \u52a0\u8f7dURL\nconst worker = new Worker(url);\n",lang:"js"}),t.a.createElement("p",null,"Worker \u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u811a\u672c\u6587\u4ef6\uff0c\u8be5\u6587\u4ef6\u5c31\u662f Worker \u7ebf\u7a0b\u6240\u8981\u6267\u884c\u7684\u4efb\u52a1\u3002\u7531\u4e8e Worker \u4e0d\u80fd\u8bfb\u53d6\u672c\u5730\u6587\u4ef6\uff0c\u6240\u4ee5\u8fd9\u4e2a\u811a\u672c\u5fc5\u987b\u6765\u81ea\u7f51\u7edc\uff0c\u5982\u679c\u4e0b\u8f7d\u6ca1\u6709\u6210\u529f\uff08\u6bd4\u5982 404 \u9519\u8bef\uff09\uff0cWorker \u5c31\u4f1a\u9ed8\u9ed8\u5730\u5931\u8d25\u3002"),t.a.createElement("p",null,"\u7136\u540e\uff0c",t.a.createElement("strong",null,"\u4e3b\u7ebf\u7a0b"),"\u8c03\u7528 ",t.a.createElement("code",null,"worker.postMessage()")," \u65b9\u6cd5\uff0c\u5411 Worker \u53d1\u6d88\u606f\u3002"),t.a.createElement(o.a,{code:"worker.postMessage('Hello world!');\nworker.postMessage({ method: 'echo', args: ['Work'] });\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("code",null,"worker.postMessage()")," \u65b9\u6cd5\u7684\u53c2\u6570\uff0c\u5c31\u662f",t.a.createElement("strong",null,"\u4e3b\u7ebf\u7a0b"),"\u4f20\u7ed9 Worker \u7684\u6570\u636e\u3002\u5b83\u53ef\u4ee5\u662f\u5404\u79cd\u6570\u636e\u7c7b\u578b\uff0c\u5305\u62ec\u4e8c\u8fdb\u5236\u6570\u636e\u3002"),t.a.createElement("p",null,"\u63a5\u7740\uff0c",t.a.createElement("strong",null,"\u4e3b\u7ebf\u7a0b"),"\u901a\u8fc7 ",t.a.createElement("code",null,"worker.onmessage()")," \u6307\u5b9a\u76d1\u542c\u51fd\u6570\uff0c\u63a5\u6536 Worker \u7ebf\u7a0b\u53d1\u56de\u6765\u7684\u6d88\u606f\u3002"),t.a.createElement(o.a,{code:"worker.onmessage = function(event) {\n  console.log('Received message ' + event.data);\n  doSomthing();\n};\n\nfunction doSomething() {\n  // \u6267\u884c\u4efb\u52a1\n  worker.postMessage('Work done!');\n}\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u4e8b\u4ef6\u5bf9\u8c61\u7684 ",t.a.createElement("code",null,"data")," \u5c5e\u6027\u53ef\u4ee5\u83b7\u53d6 Worker \u53d1\u6765\u7684\u6570\u636e\u3002"),t.a.createElement("p",null,"Worker \u5b8c\u6210\u4efb\u52a1\u4ee5\u540e\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u53ef\u4ee5\u628a\u5b83\u5173\u6389\u4e86\u3002"),t.a.createElement(o.a,{code:"worker.terminate();\n",lang:"js"}),t.a.createElement("h2",{id:"worker-\u7ebf\u7a0b"},t.a.createElement("a",{"aria-hidden":"true",href:"#worker-\u7ebf\u7a0b"},t.a.createElement("span",{className:"icon icon-link"})),"Worker \u7ebf\u7a0b"),t.a.createElement("p",null,"Worker \u7ebf\u7a0b\u5185\u90e8\u9700\u8981\u6709\u4e00\u4e2a\u76d1\u542c\u51fd\u6570\uff0c\u76d1\u542c ",t.a.createElement("code",null,"message")," \u4e8b\u4ef6\u3002"),t.a.createElement(o.a,{code:"self.addEventListener(\n  'message',\n  function(e) {\n    self.postMessage('You said: ' + e.data);\n  },\n  false\n);\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\uff0c",t.a.createElement("code",null,"self")," \u4ee3\u8868 Worker \u7ebf\u7a0b\u672c\u8eab\uff0c\u5373 Worker \u7ebf\u7a0b\u7684\u5168\u5c40\u5bf9\u8c61\u3002\u56e0\u6b64\uff0c\u7b49\u540c\u4e8e\u4ee5\u4e0b\u4e24\u79cd\u5199\u6cd5\uff1a"),t.a.createElement(o.a,{code:"// \u5199\u6cd5\u4e00\nthis.addEventListener(\n  'message',\n  function(e) {\n    this.postMessage('You said: ' + e.data);\n  },\n  false\n);\n\n// \u5199\u6cd5\u4e8c\naddEventListener(\n  'message',\n  function(e) {\n    postMessage('You said: ' + e.data);\n  }.false\n);\n",lang:"js"}),t.a.createElement("p",null,"\u9664\u4e86\u4f7f\u7528 ",t.a.createElement("code",null,"self.addEventListener()")," \u6307\u5b9a\u76d1\u542c\u51fd\u6570\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",t.a.createElement("code",null,"self.onmessage")," \u6307\u5b9a\u3002\u76d1\u542c\u51fd\u6570\u7684\u53c2\u6570\u662f\u4e00\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\uff0c\u5b83\u7684 ",t.a.createElement("code",null,"data")," \u5c5e\u6027\u5305\u542b\u4e3b\u7ebf\u7a0b\u53d1\u6765\u7684\u6570\u636e\u3002",t.a.createElement("code",null,"self.postMessage()")," \u65b9\u6cd5\u7528\u6765\u5411\u4e3b\u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\u3002"),t.a.createElement("p",null,"\u6839\u636e\u4e3b\u7ebf\u7a0b\u53d1\u6765\u7684\u6570\u636e\uff0cWorker \u7ebf\u7a0b\u53ef\u4ee5\u8c03\u7528\u4e0d\u540c\u7684\u65b9\u6cd5\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u4f8b\u5b50\uff1a"),t.a.createElement(o.a,{code:"self.addEventListener(\n  'message',\n  function(e) {\n    var data = e.data;\n    switch (data.cmd) {\n      case 'start':\n        self.postMessage('WORKER STARTED: ' + data.msg);\n        break;\n      case 'stop':\n        self.postMessage('WORKER STOPPED: ' + data.msg);\n        self.close(); // Terminates the worker.\n        break;\n      default:\n        self.postMessage('Unknown command: ' + data.msg);\n    }\n  },\n  false\n);\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c",t.a.createElement("code",null,"self.close()")," \u7528\u4e8e\u5728 Worker \u5185\u90e8\u5173\u95ed\u81ea\u8eab\u3002"),t.a.createElement("h3",{id:"\u7ec8\u6b62"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u7ec8\u6b62"},t.a.createElement("span",{className:"icon icon-link"})),"\u7ec8\u6b62"),t.a.createElement("p",null,"\u5982\u679c\u9700\u8981\u4ece\u4e3b\u7ebf\u7a0b\u4e2d\u7acb\u523b\u7ec8\u6b62\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684 Worker\uff0c\u53ef\u4ee5\u8c03\u7528 Worker \u7684 ",t.a.createElement("code",null,"terminate")," \u65b9\u6cd5\u3002"),t.a.createElement(o.a,{code:"worker.terminate();\n",lang:"js"}),t.a.createElement("p",null,"Worker \u7ebf\u7a0b\u4f1a\u88ab\u7acb\u5373\u6740\u6b7b\uff0c\u4e0d\u4f1a\u6709\u4efb\u4f55\u673a\u4f1a\u8ba9\u5b83\u5b8c\u6210\u81ea\u5df1\u7684\u64cd\u4f5c\u6216\u6e05\u7406\u5de5\u4f5c\u3002"),t.a.createElement("p",null,"\u800c\u5728 Worker \u7ebf\u7a0b\u4e2d\uff0cWorkers \u4e5f\u53ef\u4ee5\u8c03\u7528\u81ea\u5df1\u7684 ",t.a.createElement("code",null,"close")," \u65b9\u6cd5\u8fdb\u884c\u5173\u95ed\u3002"),t.a.createElement(o.a,{code:"close();\n",lang:"js"}),t.a.createElement("h3",{id:"\u52a0\u8f7d\u811a\u672c"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u52a0\u8f7d\u811a\u672c"},t.a.createElement("span",{className:"icon icon-link"})),"\u52a0\u8f7d\u811a\u672c"),t.a.createElement("p",null,"Worker \u5185\u90e8\u5982\u679c\u8981\u52a0\u8f7d\u5176\u5b83\u811a\u672c\uff0c\u6709\u4e00\u4e2a\u4e13\u95e8\u7684\u65b9\u6cd5 ",t.a.createElement("code",null,"importScripts()"),"\u3002"),t.a.createElement(o.a,{code:"importScripts('script1.js');\n",lang:"js"}),t.a.createElement("p",null,"\u8be5\u65b9\u6cd5\u53ef\u4ee5\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u811a\u672c\u3002"),t.a.createElement(o.a,{code:"importScripts('script1.js', 'script2.js');\n",lang:"js"}),t.a.createElement("h3",{id:"\u9519\u8bef\u5904\u7406"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u9519\u8bef\u5904\u7406"},t.a.createElement("span",{className:"icon icon-link"})),"\u9519\u8bef\u5904\u7406"),t.a.createElement("p",null,"\u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u76d1\u542c Worker \u662f\u5426\u53d1\u751f\u9519\u8bef\u3002\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0cWorker \u4f1a\u89e6\u53d1\u4e3b\u7ebf\u7a0b\u7684 ",t.a.createElement("code",null,"error")," \u4e8b\u4ef6\u3002"),t.a.createElement(o.a,{code:"worker.onerror(function(event) {\n  console.log(['ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message].join(''));\n});\n\n// \u6216\u8005\nworker.addEventListener('error', function(event) {\n  // ...\n});\n",lang:"js"}),t.a.createElement("h2",{id:"\u6570\u636e\u901a\u4fe1"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u6570\u636e\u901a\u4fe1"},t.a.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u901a\u4fe1"),t.a.createElement("p",null,"\u524d\u9762\u63d0\u53ca\uff0c\u4e3b\u7ebf\u7a0b\u4e0e Worker \u7ebf\u7a0b\u4e4b\u95f4\u7684\u901a\u4fe1\u5185\u5bb9\uff0c\u53ef\u4ee5\u662f\u6587\u672c\uff0c\u4e5f\u53ef\u4ee5\u662f\u5bf9\u8c61\u3002\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u79cd\u901a\u4fe1\u662f\u62f7\u8d1d\u5173\u7cfb\uff0c\u5373\u662f\u4f20\u503c\u800c\u4e0d\u662f\u4f20\u5740\uff0cWorker \u5bf9\u901a\u4fe1\u5185\u5bb9\u7684\u4fee\u6539\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5230\u4e3b\u7ebf\u7a0b\u3002\u4e8b\u5b9e\u4e0a\uff0c\u6d4f\u89c8\u5668\u5185\u90e8\u7684\u8fd0\u884c\u673a\u5236\u662f\uff0c\u73b0\u5c06\u901a\u4fe1\u5185\u5bb9\u4e32\u884c\u5316\uff0c\u7136\u540e\u628a\u4e32\u884c\u5316\u7684\u5b57\u7b26\u4e32\u53d1\u7ed9 Worker\uff0c\u540e\u8005\u518d\u5c06\u5b83\u8fd8\u539f\u3002"),t.a.createElement("p",null,"\u4e3b\u7ebf\u7a0b\u4e0e Worker \u7ebf\u7a0b\u4e4b\u95f4\u4e5f\u53ef\u4ee5\u4ea4\u6362\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u6bd4\u5982 File\u3001Blob\u3001ArrayBuffer \u7b49\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u5728\u7ebf\u7a0b\u4e4b\u95f4\u53d1\u9001\u3002"),t.a.createElement(o.a,{code:"// \u4e3b\u7ebf\u7a0b\nvar uInt8Array = new Uint8Array(new ArrayBuffer(10));\nfor (var i = 0; i < uInt8Array.length; ++i) {\n  uInt8Array[i] = i * 2; // [0, 2, 4, 6, 8,...]\n}\nworker.postMessage(uInt8Array);\n\n// Worker \u7ebf\u7a0b\nself.onmessage = function(e) {\n  var uInt8Array = e.data;\n  postMessage('Inside worker.js: uInt8Array.toString() = ' + uInt8Array.toString());\n  postMessage('Inside worker.js: uInt8Array.byteLength = ' + uInt8Array.byteLength);\n};\n",lang:"js"}),t.a.createElement("p",null,"\u4f46\u662f\uff0c\u62f7\u8d1d\u65b9\u5f0f\u53d1\u9001\u4e8c\u8fdb\u5236\u6570\u636e\uff0c\u4f1a\u9020\u6210\u6027\u80fd\u95ee\u9898\u3002\u6bd4\u5982\uff0c\u4e3b\u7ebf\u7a0b\u5411 Worker \u53d1\u9001\u4e00\u4e2a 500MB \u6587\u4ef6\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u6d4f\u89c8\u5668\u4f1a\u751f\u6210\u4e00\u4e2a\u539f\u6587\u4ef6\u7684\u62f7\u8d1d\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cJavaScript \u5141\u8bb8\u4e3b\u7ebf\u7a0b\u628a\u4e8c\u8fdb\u5236\u6570\u636e\u76f4\u63a5\u8f6c\u79fb\u7ed9 Worker \u7ebf\u7a0b\uff0c\u4f46\u662f\u4e00\u65e6\u8f6c\u79fb\uff0c\u4e3b\u7ebf\u7a0b\u5c31\u65e0\u6cd5\u518d\u4f7f\u7528\u8fd9\u4e9b\u4e8c\u8fdb\u5236\u6570\u636e\u4e86\uff0c\u8fd9\u662f\u4e3a\u4e86\u9632\u6b62\u51fa\u73b0\u591a\u4e2a\u7ebf\u7a0b\u540c\u65f6\u4fee\u6539\u6570\u636e\u7684\u9ebb\u70e6\u5c40\u9762\u3002\u8fd9\u79cd\u8f6c\u79fb\u6570\u636e\u7684\u65b9\u6cd5\uff0c\u53eb\u505a Transferable Objects\u3002\u8fd9\u4f7f\u5f97\u4e3b\u7ebf\u7a0b\u53ef\u4ee5\u5feb\u901f\u628a\u6570\u636e\u4ea4\u7ed9 Worker\uff0c\u5bf9\u4e8e\u5f71\u50cf\u5904\u7406\u3001\u58f0\u97f3\u5904\u7406\u30013D \u8fd0\u7b97\u7b49\u5c31\u975e\u5e38\u65b9\u4fbf\u4e86\uff0c\u4e0d\u4f1a\u4ea7\u751f\u6027\u80fd\u8d1f\u62c5\u3002"),t.a.createElement("p",null,"\u5982\u679c\u8981\u76f4\u63a5\u8f6c\u79fb\u6570\u636e\u7684\u63a7\u5236\u6743\uff0c\u5c31\u8981\u4f7f\u7528\u4e0b\u9762\u7684\u5199\u6cd5\uff1a"),t.a.createElement(o.a,{code:"// Transferable Objects \u683c\u5f0f\nworker.postMessage(arrayBuffer, [arrayBuffer]);\n\n// \u4f8b\u5b50\nvar ab = new ArrayBuffer(1);\nworker.postMessage(ab, [ab]);\n",lang:"js"}),t.a.createElement("h2",{id:"\u540c\u9875\u9762\u7684-web-worker"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u540c\u9875\u9762\u7684-web-worker"},t.a.createElement("span",{className:"icon icon-link"})),"\u540c\u9875\u9762\u7684 Web Worker"),t.a.createElement("p",null,"\u901a\u5e38\u60c5\u51b5\u4e0b\uff0cWorker \u8f7d\u5165\u7684\u662f\u4e00\u4e2a\u5355\u72ec\u7684 JavaScript \u811a\u672c\u6587\u4ef6\uff0c\u4f46\u662f\u4e5f\u53ef\u4ee5\u8f7d\u5165\u4e0e\u4e3b\u7ebf\u7a0b\u5728\u540c\u4e00\u4e2a\u7f51\u9875\u7684\u4ee3\u7801\u3002"),t.a.createElement(o.a,{code:"\n  <body>\n    <script id=\"worker\" type=\"app/worker\">\n      addEventListener('message', function () {\n        postMessage('some message');\n      }, false);\n    <\/script>\n  </body>\n</html>\n",lang:"html"}),t.a.createElement("p",null,"\u4e0a\u9762\u662f\u4e00\u6bb5\u5d4c\u5165\u7f51\u9875\u7684\u811a\u672c\uff0c\u6ce8\u610f\u5fc5\u987b\u6307\u5b9a ",t.a.createElement("code",null,"<script>")," \u6807\u7b7e\u7684 type \u5c5e\u6027\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u4e0d\u8ba4\u8bc6\u7684\u503c\uff0c\u4e0a\u4f8b\u662f ",t.a.createElement("code",null,"app/worker"),"\u3002"),t.a.createElement("p",null,"\u7136\u540e\uff0c\u8bfb\u53d6\u8fd9\u4e00\u6bb5\u5d4c\u5165\u9875\u9762\u7684\u811a\u672c\uff0c\u7528 Worker \u6765\u5904\u7406\u3002"),t.a.createElement(o.a,{code:"var blob = new Blob([document.querySelector('#worker').textContent]);\nvar url = window.URL.createObjectURL(blob);\nvar worker = new Worker(url);\n\nworker.onmessage = function(e) {\n  // e.data === 'some message'\n};\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0c\u5148\u5c06\u5d4c\u5165\u7f51\u9875\u7684\u811a\u672c\u4ee3\u7801\uff0c\u8f6c\u6210\u4e00\u4e2a\u4e8c\u8fdb\u5236\u5bf9\u8c61\uff0c\u7136\u540e\u4e3a\u8fd9\u4e2a\u4e8c\u8fdb\u5236\u5bf9\u8c61\u751f\u6210 URL\uff0c\u518d\u8ba9 Worker \u52a0\u8f7d\u8fd9\u4e2a URL\u3002\u8fd9\u6837\u5c31\u505a\u5230\u4e86\uff0c\u4e3b\u7ebf\u7a0b\u548c Worker \u7684\u4ee3\u7801\u90fd\u5728\u540c\u4e00\u4e2a\u7f51\u9875\u4e0a\u9762\u3002"),t.a.createElement("h2",{id:"\u5e94\u7528\u573a\u666f"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5e94\u7528\u573a\u666f"},t.a.createElement("span",{className:"icon icon-link"})),"\u5e94\u7528\u573a\u666f"),t.a.createElement("p",null,"WebWorker \u5e26\u6765\u540e\u53f0\u8ba1\u7b97\u80fd\u529b\uff0cWebWorker \u81ea\u8eab\u662f\u7531 Webkit \u591a\u7ebf\u7a0b\u5b9e\u73b0\uff0c\u4f46\u5b83\u5e76\u6ca1\u6709\u4e3a JavaScript \u8bed\u8a00\u5e26\u6765\u591a\u7ebf\u7a0b\u7f16\u7a0b\u7279\u6027\uff0c\u6211\u4eec\u73b0\u5728\u4ecd\u7136\u4e0d\u80fd\u5728 JavaScript \u4ee3\u7801\u4e2d\u521b\u5efa\u5e76\u7ba1\u7406\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u6216\u8005\u4e3b\u52a8\u63a7\u5236\u7ebf\u7a0b\u95f4\u7684\u540c\u6b65\u4e0e\u9501\u7b49\u7279\u6027\u3002Web Worker \u53ea\u662f\u6d4f\u89c8\u5668\uff08\u5bbf\u4e3b\u73af\u5883\uff09\u63d0\u4f9b\u7684\u4e00\u4e2a\u80fd\u529b / API\u3002\u800c\u4e14\u5b83\u4e0d\u652f\u6301 IE\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u4f7f\u7528\u4e13\u7528\u7ebf\u7a0b\u8fdb\u884c\u6570\u5b66\u8fd0\u7b97"),"Web Worker \u6700\u7b80\u5355\u7684\u5e94\u7528\u5c31\u662f\u7528\u6765\u505a\u540e\u53f0\u8ba1\u7b97\uff0c\u800c\u8fd9\u79cd\u8ba1\u7b97\u5e76\u4e0d\u4f1a\u4e2d\u65ad\u524d\u53f0\u7528\u6237\u7684\u64cd\u4f5c"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u56fe\u50cf\u5904\u7406"),"\u901a\u8fc7\u4f7f\u7528\u4ece Canvas \u6216\u8005 Video \u5143\u7d20\u4e2d\u83b7\u53d6\u7684\u6570\u636e\uff0c\u53ef\u4ee5\u628a\u56fe\u50cf\u5206\u5272\u6210\u51e0\u4e2a\u4e0d\u540c\u7684\u533a\u57df\u5e76\u4e14\u628a\u5b83\u4eec\u63a8\u9001\u7ed9\u5e76\u884c\u7684\u4e0d\u540c Workers \u6765\u505a\u8ba1\u7b97"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u5927\u91cf\u6570\u636e\u7684\u68c0\u7d22"),"\u5f53\u9700\u8981\u5728\u8c03\u7528 AJAX \u540e\u5904\u7406\u5927\u91cf\u7684\u6570\u636e\uff0c\u5982\u679c\u5904\u7406\u8fd9\u4e9b\u6570\u636e\u6240\u9700\u7684\u65f6\u95f4\u957f\u77ed\u975e\u5e38\u91cd\u8981\uff0c\u53ef\u4ee5\u5728 Web Worker \u4e2d\u6765\u505a\u8fd9\u4e9b\uff0c\u907f\u514d\u51bb\u7ed3 UI \u7ebf\u7a0b\u3002"),t.a.createElement("p",null,t.a.createElement("strong",null,"\u80cc\u666f\u6570\u636e\u5206\u6790"),"\u7531\u4e8e\u5728\u4f7f\u7528 Web Worker \u7684\u65f6\u5019\uff0c\u6211\u4eec\u6709\u66f4\u591a\u6f5c\u5728\u7684 CPU \u53ef\u7528\u65f6\u95f4\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u8003\u8651\u4e00\u4e0b JavaScript \u4e2d\u7684\u65b0\u5e94\u7528\u573a\u666f\u3002\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u8003\u8651\u4e00\u4e0b JavaScript \u4e2d\u7684\u65b0\u5e94\u7528\u573a\u666f\u3002\u4f8b\u5982\uff0c\u6211\u4eec\u53ef\u4ee5\u60f3\u50cf\u5728\u4e0d\u5f71\u54cd UI \u4f53\u9a8c\u7684\u60c5\u51b5\u4e0b\u5b9e\u65f6\u5904\u7406\u7528\u6237\u8f93\u5165\u3002\u5229\u7528\u8fd9\u6837\u4e00\u79cd\u53ef\u80fd\uff0c\u6211\u4eec\u53ef\u4ee5\u60f3\u50cf\u4e00\u4e2a\u50cf Word\uff08Office Web Apps \u5957\u88c5\uff09\u4e00\u6837\u7684\u5e94\u7528\uff1a\u5f53\u7528\u6237\u6253\u5b57\u65f6\u540e\u53f0\u5728\u8bcd\u5178\u4e2d\u8fdb\u884c\u67e5\u627e\uff0c\u5e2e\u52a9\u7528\u6237\u81ea\u52a8\u7ea0\u9519\u7b49\u7b49\u3002"),t.a.createElement("h2",{id:"\u5b9e\u4f8b\uff1aworker-\u7ebf\u7a0b\u5b8c\u6210\u8f6e\u8be2"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u4f8b\uff1aworker-\u7ebf\u7a0b\u5b8c\u6210\u8f6e\u8be2"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u4f8b\uff1aWorker \u7ebf\u7a0b\u5b8c\u6210\u8f6e\u8be2"),t.a.createElement("p",null,"\u6709\u65f6\uff0c\u6d4f\u89c8\u5668\u9700\u8981\u8f6e\u8be2\u670d\u52a1\u5668\u72b6\u6001\uff0c\u4ee5\u4fbf\u7b2c\u4e00\u65f6\u95f4\u5f97\u77e5\u72b6\u6001\u6539\u53d8\u3002\u8fd9\u4e2a\u5de5\u4f5c\u53ef\u4ee5\u653e\u5728 Worker \u7ebf\u7a0b\u91cc\u9762\u5b8c\u6210\u3002"),t.a.createElement(o.a,{code:"function createWorker(f) {\n  var blob = new Blob(['(' + f.toString() +')()']);\n  var url = window.URL.createObjectURL(blob);\n  var worker = new Worker(url);\n  return worker;\n}\n\nvar pollingWorker = createWorker(function (e) {\n  var cache;\n\n  function compare(new, old) { ... };\n\n  setInterval(function () {\n    fetch('/my-api-endpoint').then(function (res) {\n      var data = res.json();\n\n      if (!compare(data, cache)) {\n        cache = data;\n        self.postMessage(data);\n      }\n    })\n  }, 1000)\n});\n\npollingWorker.onmessage = function () {\n  // render data\n}\n\npollingWorker.postMessage('init');\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0cWorker \u7ebf\u7a0b\u6bcf\u79d2\u949f\u8f6e\u8be2\u4e00\u6b21\u6570\u636e\uff0c\u7136\u540e\u8ddf\u7f13\u5b58\u505a\u6bd4\u8f83\u3002\u5982\u679c\u4e0d\u4e00\u81f4\uff0c\u5c31\u8bf4\u660e\u670d\u52a1\u7aef\u6709\u4e86\u65b0\u7684\u53d8\u5316\uff0c\u56e0\u6b64\u5c31\u8981\u901a\u77e5\u4e3b\u7ebf\u7a0b\u3002"),t.a.createElement("h2",{id:"\u5b9e\u4f8b\uff1aworker-\u65b0\u5efa-worker"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u5b9e\u4f8b\uff1aworker-\u65b0\u5efa-worker"},t.a.createElement("span",{className:"icon icon-link"})),"\u5b9e\u4f8b\uff1aWorker \u65b0\u5efa Worker"),t.a.createElement("p",null,"Worker \u7ebf\u7a0b\u5185\u90e8\u8fd8\u80fd\u518d\u65b0\u5efa Worker \u7ebf\u7a0b\uff08\u76ee\u524d\u53ea\u6709 Firefox \u6d4f\u89c8\u5668\u652f\u6301\uff09\u3002\u4e0b\u9762\u7684\u4f8b\u5b50\u662f\u5c06\u4e00\u4e2a\u8ba1\u7b97\u5bc6\u96c6\u7684\u4efb\u52a1\uff0c\u5206\u914d\u5230 10 \u4e2a Worker\u3002"),t.a.createElement("p",null,"\u4e3b\u7ebf\u7a0b\u4ee3\u7801\u5982\u4e0b\uff1a"),t.a.createElement(o.a,{code:"var worker = new Worker('worker.js');\nworker.onmessage = function(event) {\n  document.getElementById('result').textContent = event.data;\n};\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("strong",null,"Worker \u7ebf\u7a0b"),"\u4ee3\u7801\u5982\u4e0b\uff1a"),t.a.createElement(o.a,{code:"// worker.js\n\n// settings\nvar num_workers = 10;\nvar items_per_worker = 1000000;\n\n// start the workers\nvar result = 0;\nvar pending_workers = num_workers;\nfor (var i = 0; i < num_workers; i += 1) {\n  var worker = new Worker('core.js');\n  worker.postMessage(i * items_per_worker);\n  worker.postMessage((i + 1) * items_per_worker);\n  worker.onmessage = storeResult;\n}\n\n// handle the results\nfunction storeResult(event) {\n  result += event.data;\n  pending_workers -= 1;\n  if (pending_workers <= 0) postMessage(result); // finished!\n}\n",lang:"js"}),t.a.createElement("p",null,"\u4e0a\u9762\u4ee3\u7801\u4e2d\uff0cWorker \u7ebf\u7a0b\u5185\u90e8\u65b0\u5efa\u4e86 10 \u4e2a Worker \u7ebf\u7a0b\uff0c\u5e76\u4e14\u4f9d\u6b21\u5411\u8fd9 10 \u4e2a Worker \u53d1\u9001\u6d88\u606f\uff0c\u544a\u77e5\u4e86\u8ba1\u7b97\u7684\u8d77\u70b9\u548c\u7ec8\u70b9\u3002\u8ba1\u7b97\u4efb\u52a1\u811a\u672c\u7684\u4ee3\u7801\u5982\u4e0b\uff1a"),t.a.createElement(o.a,{code:"// core.js\nvar start;\nonmessage = getStart;\nfunction getStart(event) {\n  start = event.data;\n  onmessage = getEnd;\n}\n\nvar end;\nfunction getEnd(event) {\n  end = event.data;\n  onmessage = null;\n  work();\n}\n\nfunction work() {\n  var result = 0;\n  for (var i = start; i < end; i += 1) {\n    // perform some complex calculation here\n    result += 1;\n  }\n  postMessage(result);\n  close();\n}\n",lang:"js"}),t.a.createElement("h2",{id:"api"},t.a.createElement("a",{"aria-hidden":"true",href:"#api"},t.a.createElement("span",{className:"icon icon-link"})),"API"),t.a.createElement("h3",{id:"\u4e3b\u7ebf\u7a0b-1"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u4e3b\u7ebf\u7a0b-1"},t.a.createElement("span",{className:"icon icon-link"})),"\u4e3b\u7ebf\u7a0b"),t.a.createElement("p",null,"\u6d4f\u89c8\u5668\u539f\u751f\u63d0\u4f9b ",t.a.createElement("code",null,"Worker()")," \u6784\u9020\u51fd\u6570\uff0c\u7528\u6765\u4f9b\u4e3b\u7ebf\u7a0b\u751f\u6210 Worker \u7ebf\u7a0b\u3002"),t.a.createElement(o.a,{code:"const worker = new Worker(url, options);\n",lang:"js"}),t.a.createElement("p",null,t.a.createElement("code",null,"Worker()")," \u6784\u9020\u51fd\u6570\uff0c\u53ef\u4ee5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u3002\u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u811a\u672c\u7684\u7f51\u5740\uff08\u5fc5\u987b\u9075\u5faa\u540c\u6e90\u7b56\u7565\uff09\uff0c\u8be5\u53c2\u6570\u662f\u5fc5\u987b\u7684\uff0c\u4e14\u53ea\u80fd\u533a\u5206\u591a\u4e2a Worker \u7ebf\u7a0b\u3002"),t.a.createElement(o.a,{code:"// \u4e3b\u7ebf\u7a0b\nvar worker = new Worker('worker.js', { name: 'worker' });\n\n// Worker \u7ebf\u7a0b\nself.name; // worker\n",lang:"js"}),t.a.createElement("p",null,"Worker()\u6784\u9020\u51fd\u6570\u8fd4\u56de\u4e00\u4e2a Worker \u7ebf\u7a0b\u5bf9\u8c61\uff0c\u7528\u6765\u4f9b\u4e3b\u7ebf\u7a0b\u64cd\u4f5c Worker\u3002Worker \u7ebf\u7a0b\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u5982\u4e0b\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,"Worker.onerror\uff1a\u6307\u5b9a error \u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"),t.a.createElement("li",null,"Worker.onmessage\uff1a\u6307\u5b9a message \u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\uff0c\u53d1\u9001\u8fc7\u6765\u7684\u6570\u636e\u5728 Event.data \u5c5e\u6027\u4e2d\u3002"),t.a.createElement("li",null,"Worker.onmessageerror\uff1a\u6307\u5b9a messageerror \u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002\u53d1\u9001\u7684\u6570\u636e\u65e0\u6cd5\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u65f6\uff0c\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u3002"),t.a.createElement("li",null,"Worker.postMessage()\uff1a\u5411 Worker \u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\u3002"),t.a.createElement("li",null,"Worker.terminate()\uff1a\u7acb\u5373\u7ec8\u6b62 Worker \u7ebf\u7a0b\u3002")),t.a.createElement("h3",{id:"worker-\u7ebf\u7a0b-1"},t.a.createElement("a",{"aria-hidden":"true",href:"#worker-\u7ebf\u7a0b-1"},t.a.createElement("span",{className:"icon icon-link"})),"Worker \u7ebf\u7a0b"),t.a.createElement("p",null,"Web Worker \u6709\u81ea\u5df1\u7684\u5168\u5c40\u5bf9\u8c61\uff0c\u4e0d\u662f\u4e3b\u7ebf\u7a0b\u7684 ",t.a.createElement("code",null,"window"),"\uff0c\u800c\u662f\u4e00\u4e2a\u4e13\u95e8\u4e3a Worker \u5b9a\u5236\u7684\u5168\u5c40\u5bf9\u8c61\u3002\u56e0\u6b64\u5b9a\u4e49\u5728 ",t.a.createElement("code",null,"window")," \u4e0a\u9762\u7684\u5bf9\u8c61\u548c\u65b9\u6cd5\u4e0d\u662f\u5168\u90e8\u90fd\u53ef\u4ee5\u4f7f\u7528."),t.a.createElement("p",null,"orker \u7ebf\u7a0b\u6709\u4e00\u4e9b\u81ea\u5df1\u7684\u5168\u5c40\u5c5e\u6027\u548c\u65b9\u6cd5\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"self.name"),"\uff1a Worker \u7684\u540d\u5b57\u3002\u8be5\u5c5e\u6027\u53ea\u8bfb\uff0c\u7531\u6784\u9020\u51fd\u6570\u6307\u5b9a\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"self.onmessage"),"\uff1a\u6307\u5b9a message \u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"self.onmessageerror"),"\uff1a\u6307\u5b9a messageerror \u4e8b\u4ef6\u7684\u76d1\u542c\u51fd\u6570\u3002\u53d1\u9001\u7684\u6570\u636e\u65e0\u6cd5\u5e8f\u5217\u5316\u6210\u5b57\u7b26\u4e32\u65f6\uff0c\u4f1a\u89e6\u53d1\u8fd9\u4e2a\u4e8b\u4ef6\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"self.close()"),"\uff1a\u5173\u95ed Worker \u7ebf\u7a0b\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"self.postMessage()"),"\uff1a\u5411\u4ea7\u751f\u8fd9\u4e2a Worker \u7ebf\u7a0b\u53d1\u9001\u6d88\u606f\u3002"),t.a.createElement("li",null,t.a.createElement("code",null,"self.importScripts()"),"\uff1a\u52a0\u8f7d JS \u811a\u672c\u3002")),t.a.createElement("hr",null),t.a.createElement("p",null,t.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("a",{href:"https://segmentfault.com/a/1190000009313491",target:"_blank",rel:"noopener noreferrer"},"\u804a\u804a WebWorker",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),t.a.createElement("li",null,t.a.createElement("a",{href:"https://juejin.im/post/5b4af72ae51d45198d4b1388",target:"_blank",rel:"noopener noreferrer"},"Web Worker \u521d\u63a2",t.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},t.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),t.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);