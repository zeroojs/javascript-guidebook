(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[240],{V1V8:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=(n("B2uJ"),n("+su7"),n("qOys")),c=n.n(r);n("5Yjd");t["default"]=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6\u5bf9\u8c61"),l.a.createElement("p",null,"\u5728\u89e6\u53d1 DOM \u4e0a\u7684\u67d0\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u4f1a\u4ea7\u751f\u4e00\u4e2a\u4e8b\u4ef6\u5bf9\u8c61\uff08Event Object\uff09\uff0c\u8fd9\u4e2a\u5bf9\u8c61\u4e2d\u5305\u542b\u7740\u6240\u6709\u4e0e\u4e8b\u4ef6\u6709\u5173\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u8be5\u5bf9\u8c61\u4f1a\u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9\u76d1\u542c\u51fd\u6570\u3002"),l.a.createElement("ul",null,l.a.createElement("li",null,"DOM\u4e8b\u4ef6\u6a21\u578b\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61\u5e38\u7528\u5c5e\u6027\u65b9\u6cd5",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"type"),"\uff1a\u7528\u4e8e\u83b7\u53d6\u4e8b\u4ef6\u7c7b\u578b"),l.a.createElement("li",null,l.a.createElement("code",null,"target"),"\uff1a\u83b7\u53d6\u4e8b\u4ef6\u76ee\u6807"),l.a.createElement("li",null,l.a.createElement("code",null,"stopPropagation()"),"\uff1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("li",null,l.a.createElement("code",null,"preventDefault()"),"\uff1a\u963b\u6b62\u9ed8\u8ba4\u884c\u4e3a"))),l.a.createElement("li",null,"IE\u4e8b\u4ef6\u6a21\u578b\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61\u5e38\u7528\u5c5e\u6027\u65b9\u6cd5",l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("code",null,"type"),"\uff1a\u7528\u4e8e\u83b7\u53d6\u4e8b\u4ef6\u7c7b\u578b"),l.a.createElement("li",null,l.a.createElement("code",null,"srcElement"),"\uff1a\u83b7\u53d6\u4e8b\u4ef6\u76ee\u6807"),l.a.createElement("li",null,l.a.createElement("code",null,"cancelBubble"),"\uff1a\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("li",null,l.a.createElement("code",null,"returnValue"),"\uff1a\u963b\u6b62\u4e8b\u4ef6\u9ed8\u8ba4\u884c\u4e3a")))),l.a.createElement("h3",{id:"dom\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("a",{"aria-hidden":"true",href:"#dom\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("span",{className:"icon icon-link"})),"DOM\u4e2d\u7684\u4e8b\u4ef6\u5bf9\u8c61"),l.a.createElement("p",null,"\u517c\u5bb9 DOM \u7684\u6d4f\u89c8\u5668\u4f1a\u5c06\u4e00\u4e2a ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u4f20\u5165\u5230\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e2d\u3002\u65e0\u8bba\u6307\u5b9a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u65f6\u4f7f\u7528\u4ec0\u4e48\u65b9\u6cd5\uff08DOM0\u7ea7\u6216DOM2\u7ea7\uff09\uff0c\u90fd\u4f1a\u4f20\u5165 ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u3002"),l.a.createElement("p",null,"\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u63d0\u4f9b ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\uff0c\u53ef\u4ee5\u8ba9 HTML \u7279\u6027\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u4e0e JavaScript \u51fd\u6570\u6267\u884c\u76f8\u540c\u7684\u64cd\u4f5c\u3002",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u5305\u542b\u4e0e\u521b\u5efa\u5b83\u7684\u7279\u5b9a\u4e8b\u4ef6\u76f8\u5173\u7684\u5c5e\u6027\u548c\u65b9\u6cd5\u3002\u89e6\u53d1\u7684\u4e8b\u4ef6\u7c7b\u578b\u4e0d\u4e00\u6837\u3002\u4e0d\u8fc7\uff0c\u6240\u6709\u4e8b\u4ef6\u90fd\u4f1a\u6709\u4e0b\u8868\u5217\u51fa\u7684\u6210\u5458\u3002"),l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{align:"center"},"\u5c5e\u6027/\u65b9\u6cd5"),l.a.createElement("th",{align:"center"},"\u7c7b\u578b"),l.a.createElement("th",{align:"center"},"\u8bfb/\u5199"),l.a.createElement("th",{align:"center"},"\u8bf4\u660e"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"bubbles"),l.a.createElement("td",{align:"center"},"Boolean"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u8868\u660e\u4e8b\u4ef6\u662f\u5426\u5192\u6ce1")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"cancelable"),l.a.createElement("td",{align:"center"},"Boolean"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u8868\u660e\u662f\u5426\u53ef\u4ee5\u53d6\u6d88\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"currentTarget"),l.a.createElement("td",{align:"center"},"Element"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u5176\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5f53\u524d\u6b63\u5728\u5904\u7406\u4e8b\u4ef6\u7684\u90a3\u4e2a\u5143\u7d20")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"defaultPrevented"),l.a.createElement("td",{align:"center"},"Boolean"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u4e3a ",l.a.createElement("code",null,"true")," \u8868\u793a\u5df2\u7ecf\u8c03\u7528\u4e86 ",l.a.createElement("code",null,"preventDefault()"),"\uff08DOM3\u7ea7\u4e8b\u4ef6\u4e2d\u65b0\u589e\uff09")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"detail"),l.a.createElement("td",{align:"center"},"Integer"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u4e0e\u4e8b\u4ef6\u76f8\u5173\u7684\u7ec6\u8282\u4fe1\u606f")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"eventPhase"),l.a.createElement("td",{align:"center"},"Integer"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u8c03\u7528\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u7684\u9636\u6bb5\uff1a1\u8868\u793a\u6355\u83b7\u9636\u6bb5\uff0c2\u8868\u793a\u201c\u5904\u4e8e\u76ee\u6807\u201d\uff0c3\u8868\u793a\u5192\u6ce1\u9636\u6bb5")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"preventDefault()")),l.a.createElement("td",{align:"center"},"Function"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u53d6\u6d88\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002\u5982\u679c ",l.a.createElement("code",null,"cancelable")," \u662f ",l.a.createElement("code",null,"true"),"\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5\u3002")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"stopImmediatePropagation()")),l.a.createElement("td",{align:"center"},"Function"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u53d6\u6d88\u4e8b\u4ef6\u7684\u8fdb\u4e00\u6b65\u6355\u83b7\u6216\u5192\u6ce1\uff0c\u540c\u65f6\u963b\u6b62\u4efb\u4f55\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u88ab\u8c03\u7528\uff08DOM3\u7ea7\u4e8b\u4ef6\u4e2d\u65b0\u589e\uff09")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},l.a.createElement("code",null,"stopPropagation()")),l.a.createElement("td",{align:"center"},"Function"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u53d6\u6d88\u4e8b\u4ef6\u7684\u8fdb\u4e00\u6b65\u6355\u83b7\u6216\u5192\u6ce1\u3002\u5982\u679cbubbles\u4e3a ",l.a.createElement("code",null,"true"),"\uff0c\u5219\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u65b9\u6cd5")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"target"),l.a.createElement("td",{align:"center"},"Element"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u4e8b\u4ef6\u7684\u76ee\u6807")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"trusted"),l.a.createElement("td",{align:"center"},"Boolean"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u4e3a ",l.a.createElement("code",null,"true")," \u8868\u793a\u4e8b\u4ef6\u662f\u6d4f\u89c8\u5668\u751f\u6210\u7684\u3002\u4e3a ",l.a.createElement("code",null,"false")," \u8868\u793a\u4e8b\u4ef6\u662f\u7531\u5f00\u53d1\u4eba\u5458\u901a\u8fc7JavaScript\u521b\u5efa\u7684\uff08DOM3\u7ea7\u4e8b\u4ef6\u4e2d\u65b0\u589e\uff09")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"type"),l.a.createElement("td",{align:"center"},"String"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u88ab\u89e6\u53d1\u7684\u4e8b\u4ef6\u7684\u7c7b\u578b")),l.a.createElement("tr",null,l.a.createElement("td",{align:"center"},"view"),l.a.createElement("td",{align:"center"},"AbstractView"),l.a.createElement("td",{align:"center"},"\u53ea\u8bfb"),l.a.createElement("td",{align:"center"},"\u4e0e\u4e8b\u4ef6\u5173\u8054\u7684\u62bd\u8c61\u89c6\u56fe\u3002\u7b49\u540c\u4e8e\u53d1\u751f\u4e8b\u4ef6\u7684 ",l.a.createElement("code",null,"window")," \u5bf9\u8c61")))),l.a.createElement("h4",{id:"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5185\u90e8this\u6307\u5411"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5185\u90e8this\u6307\u5411"},l.a.createElement("span",{className:"icon icon-link"})),"\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5185\u90e8this\u6307\u5411"),l.a.createElement("p",null,"\u5728\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u5185\u90e8\uff0c\u5bf9\u8c61 ",l.a.createElement("code",null,"this")," \u59cb\u7ec8\u7b49\u4e8e ",l.a.createElement("code",null,"currentTarget")," \u7684\u503c\uff0c\u800c ",l.a.createElement("code",null,"tartget")," \u5219\u53ea\u5305\u542b\u4e8b\u4ef6\u7684\u5b9e\u9645\u76ee\u6807\u3002\u5982\u679c\u76f4\u63a5\u5c06\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6307\u5b9a\u7ed9\u4e86\u76ee\u6807\u5143\u7d20\uff0c\u5219 ",l.a.createElement("code",null,"this"),"\u3001",l.a.createElement("code",null,"currentTarget")," \u548c ",l.a.createElement("code",null,"tartget")," \u5305\u542b\u76f8\u540c\u7684\u503c\u3002"),l.a.createElement(c.a,{code:'// Example\nvar btn = doocument.getElementById("myBtn");\nbtn.onclick = function(event) {\n    alert(event.currentTarget === this); // true\n    alert(event.target === this); // true\n};\n',lang:"js"}),l.a.createElement("p",null,"\u5f53\u5355\u51fb\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u7684\u6309\u94ae\u65f6\uff0c",l.a.createElement("code",null,"this")," \u548c ",l.a.createElement("code",null,"currentTarget")," \u90fd\u7b49\u4e8e ",l.a.createElement("code",null,"document.body"),"\uff0c\u56e0\u4e3a\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u662f\u6ce8\u518c\u5230\u8fd9\u4e2a\u5143\u7d20\u4e0a\u7684\u3002\u7136\u800c\uff0c",l.a.createElement("code",null,"target")," \u5143\u7d20\u5374\u7b49\u4e8e\u6309\u94ae\u5143\u7d20\uff0c\u56e0\u4e3a\u5b83\u662f ",l.a.createElement("code",null,"click")," \u4e8b\u4ef6\u771f\u6b63\u7684\u76ee\u6807\u3002\u7531\u4e8e\u6309\u94ae\u4e0a\u5e76\u6ca1\u6709\u6ce8\u518c\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\uff0c\u7ed3\u679c ",l.a.createElement("code",null,"click")," \u4e8b\u4ef6\u5c31\u5192\u6ce1\u5230\u4e86 ",l.a.createElement("code",null,"document.body"),"\uff0c\u5728\u90a3\u91cc\u4e8b\u4ef6\u624d\u5f97\u5230\u4e86\u5904\u7406\u3002"),l.a.createElement("h4",{id:"\u5355\u51fd\u6570\u5904\u7406\u591a\u4e8b\u4ef6"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u5355\u51fd\u6570\u5904\u7406\u591a\u4e8b\u4ef6"},l.a.createElement("span",{className:"icon icon-link"})),"\u5355\u51fd\u6570\u5904\u7406\u591a\u4e8b\u4ef6"),l.a.createElement("p",null,"\u5728\u9700\u8981\u901a\u8fc7\u4e00\u4e2a\u51fd\u6570\u5904\u7406\u591a\u4e2a\u4e8b\u4ef6\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"type")," \u5c5e\u6027\u3002\u4f8b\u5982\uff1a"),l.a.createElement(c.a,{code:'var btn = document.getElementById("myBtn");\nvar handler = function(event) {\n  switch(event.type) {\n    case "click":\n      alert("Clicked");\n      break;\n    case "mouseover":\n      event.target.style.backgroundColor = "red";\n      break;\n    case "mouseout":\n      event.target.style.backgroundColor = "";\n      break;\n  }\n};\n\nbtn.onclick = handler;\nbtn.mouseover = handler;\nbtn.mouseout = handler;\n',lang:"js"}),l.a.createElement("p",null,"\u8fd9\u4e2a\u4f8b\u5b50\u5b9a\u4e49\u4e86\u4e00\u4e2a\u540d\u4e3a ",l.a.createElement("code",null,"handler")," \u7684\u51fd\u6570\uff0c\u7528\u4e8e\u5904\u74063\u79cd\u4e8b\u4ef6\uff1a",l.a.createElement("code",null,"click"),"\u3001",l.a.createElement("code",null,"mouseover"),"\u548c",l.a.createElement("code",null,"mouseout"),"\u3002\u5f53\u5355\u51fb\u6309\u94ae\u65f6\uff0c\u4f1a\u51fa\u73b0\u4e00\u4e2a\u4e0e\u524d\u9762\u4f8b\u5b50\u4e2d\u4e00\u6837\u7684\u8b66\u544a\u6846\u3002\u5f53\u6309\u94ae\u79fb\u52a8\u5230\u6309\u94ae\u4e0a\u9762\u65f6\uff0c\u80cc\u666f\u989c\u8272\u5e94\u8be5\u4f1a\u53d8\u6210\u7ea2\u8272\uff0c\u800c\u5f53\u9f20\u6807\u79fb\u52a8\u51fa\u6309\u94ae\u7684\u8303\u56f4\u65f6\uff0c\u80cc\u666f\u989c\u8272\u5e94\u8be5\u4f1a\u6062\u590d\u4e3a\u9ed8\u8ba4\u503c\u3002\u8fd9\u91cc\u901a\u8fc7\u68c0\u6d4b ",l.a.createElement("code",null,"event.type"),"\u5c5e\u6027\uff0c\u8ba9\u51fd\u6570\u80fd\u591f\u786e\u5b9a\u53d1\u751f\u4e86\u4ec0\u4e48\u4e8b\u4ef6\uff0c\u5e76\u6267\u884c\u76f8\u5e94\u7684\u64cd\u4f5c\u3002"),l.a.createElement("h4",{id:"\u963b\u6b62\u6d4f\u89c8\u5668\u9ed8\u8ba4\u884c\u4e3a"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u963b\u6b62\u6d4f\u89c8\u5668\u9ed8\u8ba4\u884c\u4e3a"},l.a.createElement("span",{className:"icon icon-link"})),"\u963b\u6b62\u6d4f\u89c8\u5668\u9ed8\u8ba4\u884c\u4e3a"),l.a.createElement("p",null,"\u8981\u963b\u6b62\u7279\u5b9a\u4e8b\u4ef6\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"preventDefault()")," \u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u94fe\u63a5\u7684\u9ed8\u8ba4\u884c\u4e3a\u5c31\u662f\u5728\u88ab\u5355\u51fb\u65f6\u4f1a\u5bfc\u822a\u5230\u5176 ",l.a.createElement("code",null,"href")," \u7279\u6027\u6307\u5b9a\u7684 URL\u3002\u5982\u679c\u4f60\u60f3\u963b\u6b62\u94fe\u63a5\u5bfc\u822a\u8fd9\u4e00\u9ed8\u8ba4\u884c\u4e3a\uff0c\u90a3\u4e48\u901a\u8fc7\u94fe\u63a5\u7684 ",l.a.createElement("code",null,"onclick")," \u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u53ef\u4ee5\u53d6\u6d88\u5b83\u3002"),l.a.createElement(c.a,{code:'var link = document.getElementById("myLink");\nlink.onclick = function(event) {\n  // \u963b\u6b62\u9f20\u6807\u7684\u9ed8\u8ba4\u884c\u4e3a\n  event.preventDefault();\n}\n',lang:"js"}),l.a.createElement("p",null,"\u53ea\u6709 ",l.a.createElement("code",null,"cancelable")," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",l.a.createElement("code",null,"true")," \u7684\u4e8b\u4ef6\uff0c\u624d\u53ef\u4ee5\u4f7f\u7528 ",l.a.createElement("code",null,"preventDefault()"),"\u6765\u53d6\u6d88\u5176\u9ed8\u8ba4\u884c\u4e3a\u3002"),l.a.createElement("h4",{id:"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"},l.a.createElement("span",{className:"icon icon-link"})),"\u963b\u6b62\u4e8b\u4ef6\u5192\u6ce1"),l.a.createElement("p",null,l.a.createElement("code",null,"stopPropagation()")," \u65b9\u6cd5\u7528\u4e8e\u7acb\u5373\u505c\u6b62\u4e8b\u4ef6\u5728 DOM \u5c42\u6b21\u4e2d\u7684\u4f20\u64ad\uff0c\u5373\u53d6\u6d88\u8fdb\u4e00\u6b65\u7684\u4e8b\u4ef6\u6355\u83b7\u6216\u5192\u6ce1\u3002"),l.a.createElement(c.a,{code:"function stopPropagation(e){\n    const event = e || window.event\n    event.stopPropagation ? event.stopPropagation() : (window.event.cancelBubbl = true)\n}\n",lang:"js"}),l.a.createElement("p",null,"\u26a0\ufe0f \u53ea\u6709\u5728\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6267\u884c\u671f\u95f4\uff0cevent \u5bf9\u8c61\u624d\u4f1a\u5b58\u5728\u3002\u4e00\u65e6\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u6267\u884c\u5b8c\u6210\uff0cevent \u5bf9\u8c61\u5c31\u4f1a\u88ab\u9500\u6bc1\u3002"),l.a.createElement("h3",{id:"\u8de8\u6d4f\u89c8\u5668\u7684\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("a",{"aria-hidden":"true",href:"#\u8de8\u6d4f\u89c8\u5668\u7684\u4e8b\u4ef6\u5bf9\u8c61"},l.a.createElement("span",{className:"icon icon-link"})),"\u8de8\u6d4f\u89c8\u5668\u7684\u4e8b\u4ef6\u5bf9\u8c61"),l.a.createElement("p",null,"\u867d\u7136 DOM \u548c IE \u4e2d\u7684 ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u4e0d\u540c\uff0c\u4f46\u57fa\u4e8e\u5b83\u4eec\u4e4b\u95f4\u7684\u76f8\u4f3c\u6027\u4f9d\u65e7\u53ef\u4ee5\u62ff\u51fa\u8de8\u6d4f\u89c8\u5668\u7684\u65b9\u6848\u6765\u3002IE \u4e2d ",l.a.createElement("code",null,"event")," \u5bf9\u8c61\u7684\u5168\u90e8\u4fe1\u606f\u548c\u65b9\u6cd5 DOM \u5bf9\u8c61\u4e2d\u90fd\u6709\uff0c\u53ea\u4e0d\u8fc7\u5b9e\u73b0\u65b9\u5f0f\u4e0d\u4e00\u6837\u3002\u4e0d\u8fc7\uff0c\u8fd9\u79cd\u5bf9\u5e94\u5173\u7cfb\u8ba9\u5b9e\u73b0\u4e24\u79cd\u4e8b\u4ef6\u6a21\u578b\u4e4b\u95f4\u7684\u6620\u5c04\u975e\u5e38\u5bb9\u6613\u3002\u53ef\u4ee5\u5bf9\u524d\u9762\u4ecb\u7ecd\u7684 EventUtil \u5bf9\u8c61\u52a0\u4ee5\u589e\u5f3a\uff0c\u6dfb\u52a0\u5982\u4e0b\u65b9\u6cd5\u4ee5\u6c42\u540c\u5b58\u5f02\u3002"),l.a.createElement(c.a,{code:"const EventUtil = {\n  addHandler: function(element, type, handler) {\n    // \u7701\u7565\u7684\u4ee3\u7801\n  }\uff0c\n\n  getEvent: function(event) {\n    return event ? event : window.event;\n    }\n\n    getTarget: function(event) {\n    return event.target || event.srcElement;\n    }\n\n    preventDefault: function(event) {\n    if (event.preventDefault){\n      event.preventDefault();\n    } else {\n      event.returnValue = false;\n    }\n    }\n\n    removeHandler: function(element, type, handler) {\n    // \u7701\u7565\u7684\u4ee3\u7801\n    }\n\n    stopPropagation: function(event) {\n    if (event.stopPropagation) {\n      event.stopPropagation;\n    } else {\n      event.cancelBubble = true;\n    }\n    }\n}\n",lang:"js"}),l.a.createElement("hr",null),l.a.createElement("p",null,"\u53c2\u8003\u8d44\u6599\uff1a"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/amandakelake/blog/issues/38",target:"_blank",rel:"noopener noreferrer"},"JS\u4e8b\u4ef6\uff1a\u6355\u83b7\u4e0e\u5192\u6ce1\u3001\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u3001\u4e8b\u4ef6\u5bf9\u8c61\u3001\u8de8\u6d4f\u89c8\u5668\u3001\u4e8b\u4ef6\u59d4\u6258",l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},l.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),l.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);