(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[280],{"0Owb":function(e,t,l){"use strict";function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},n.apply(this,arguments)}l.d(t,"a",(function(){return n}))},GUpo:function(e,t,l){e.exports=l.p+"static/state.9900f330.png"},"K+nK":function(e,t){function l(e){return e&&e.__esModule?e:{default:e}}e.exports=l},Kj7J:function(e,t,l){e.exports=l.p+"static/workflow.a495be0a.png"},bzx2:function(e,t,l){"use strict";l.r(t);var n=l("0Owb"),a=l("55Ip"),r=l("q1tI"),c=l.n(r),o=(l("B2uJ"),l("+su7"),l("qOys")),m=l.n(o),i=l("5Yjd"),s=l.n(i),u=c.a.memo((function(){var e=l("K+nK"),t=e(l("q1tI")),n=e(l("Kj7J")),a=function(){return t["default"].createElement("img",{alt:"Promise Workflow",src:n["default"],width:720})};return t["default"].createElement(a)})),E=c.a.memo((function(){var e=l("K+nK"),t=e(l("q1tI")),n=e(l("GUpo")),a=function(){return t["default"].createElement("img",{alt:"Promise State",src:n["default"],width:720})};return t["default"].createElement(a)}));t["default"]=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"markdown"},c.a.createElement("h1",{id:"promise"},c.a.createElement("a",{"aria-hidden":"true",href:"#promise"},c.a.createElement("span",{className:"icon icon-link"})),"Promise"),c.a.createElement("p",null,"\u4f20\u7edf\u5f02\u6b65\u7f16\u7a0b\u6700\u5927\u7279\u70b9\u662f\u5730\u72f1\u5f0f\u56de\u8c03\u5d4c\u5957\uff0c\u4e00\u65e6\u5d4c\u5957\u5c42\u7ea7\u8fc7\u6df1\uff0c\u9879\u76ee\u4ee3\u7801\u5c06\u96be\u4ee5\u7406\u89e3\u548c\u7ef4\u62a4\u3002\u800c Promise \u80fd\u8ba9\u6211\u4eec\u901a\u8fc7 ",c.a.createElement("strong",null,"\u94fe\u5f0f\u8c03\u7528")," \u7684\u65b9\u6cd5\u53bb\u89e3\u51b3\u56de\u8c03\u5730\u72f1\u7684\u95ee\u9898\u3002"),c.a.createElement("p",null,"Promise \u662f\u5f02\u6b65\u7f16\u7a0b\u7684\u4e00\u79cd\u89e3\u51b3\u65b9\u6848\uff0c\u53ef\u4ee5\u5c06\u5f02\u6b65\u64cd\u4f5c\u961f\u5217\u5316\uff0c\u6309\u7167\u671f\u671b\u7684\u987a\u5e8f\u6267\u884c\uff0c\u8fd4\u56de\u7b26\u5408\u9884\u671f\u7684\u7ed3\u679c\u3002\u53ef\u4ee5\u5728\u5bf9\u8c61\u4e4b\u95f4\u4f20\u9012\u548c\u64cd\u4f5c Promise\uff0c\u5e2e\u52a9\u6211\u4eec\u5904\u7406\u961f\u5217\u3002"),c.a.createElement("h2",{id:"\u8bed\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),c.a.createElement(m.a,{code:"new Promise(executor)\n\nnew Promise(function(resolve, reject){...})\n",lang:"js"}),c.a.createElement("p",null,"Promise \u7684\u53c2\u6570 ",c.a.createElement("code",null,"executor")," \u662f\u5e26\u6709 ",c.a.createElement("code",null,"resolve")," \u548c ",c.a.createElement("code",null,"reject")," \u4e24\u4e2a\u53c2\u6570\u7684\u51fd\u6570\u3002\u800c\u8fd9\u4e24\u4e2a\u53c2\u6570\u4e5f\u662f\u51fd\u6570\uff0c\u7531 JavaScript \u5f15\u64ce\u63d0\u4f9b\uff0c\u4e0d\u7528\u5f00\u53d1\u8005\u90e8\u7f72\u3002"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("code",null,"resolve"),"\uff1a\u4ece Pending\uff08\u5f85\u5b9a\uff09 \u53d8\u4e3a Fullfilled\uff08\u5b9e\u73b0\uff09\uff0c\u5728\u5f02\u6b65\u64cd\u4f5c\u6210\u529f\u65f6\u8c03\u7528\uff0c\u5e76\u5c06\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u51fa\u53bb\u3002\u8be5\u51fd\u6570\u7684\u53c2\u6570\u9664\u4e86",c.a.createElement("strong",null,"\u6b63\u5e38\u7684\u503c"),"\u4ee5\u5916\uff0c\u8fd8\u53ef\u80fd\u662f",c.a.createElement("strong",null,"\u53e6\u4e00\u4e2a Promise \u5b9e\u4f8b"),"\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"reject"),"\uff1a\u4ece Pending\uff08\u5f85\u5b9a\uff09 \u53d8\u4e3a Rejected\uff08\u5426\u51b3\uff09\uff0c\u5728\u5f02\u6b65\u5931\u8d25\u65f6\u8c03\u7528\uff0c\u5e76\u5c06\u5f02\u6b65\u64cd\u4f5c\u62a5\u51fa\u7684\u9519\u8bef\uff0c\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\u51fa\u53bb\u3002\u8be5\u51fd\u6570\u7684\u53c2\u6570\u901a\u5e38\u662f ",c.a.createElement("strong",null,"Error \u5bf9\u8c61"),"\u7684\u5b9e\u4f8b\uff0c\u8868\u793a\u629b\u51fa\u7684\u9519\u8bef\u3002")),c.a.createElement("h2",{id:"\u63cf\u8ff0"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u63cf\u8ff0"},c.a.createElement("span",{className:"icon icon-link"})),"\u63cf\u8ff0"),c.a.createElement("ul",null,c.a.createElement("li",null,"Promise \u6784\u9020\u51fd\u6570\u6267\u884c\u65f6",c.a.createElement("strong",null,"\u7acb\u5373\u8c03\u7528")," ",c.a.createElement("code",null,"executor")," \u51fd\u6570\uff0c",c.a.createElement("code",null,"resolve")," \u548c ",c.a.createElement("code",null,"reject")," \u4e24\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u4f20\u5165 ",c.a.createElement("code",null,"executor")," \uff08",c.a.createElement("code",null,"executor")," \u51fd\u6570\u4f1a\u5728 Promise \u6784\u9020\u51fd\u6570\u8fd4\u56de\u65b0\u5efa\u5bf9\u8c61\u524d\u88ab\u8c03\u7528\uff09\u3002"),c.a.createElement("li",null,c.a.createElement("code",null,"executor")," \u5185\u90e8\u901a\u5e38\u4f1a\u6267\u884c\u4e00\u4e9b\u5f02\u6b65\u64cd\u4f5c\uff0c\u4e00\u65e6\u5b8c\u6210\uff0c\u53ef\u4ee5\u8c03\u7528 ",c.a.createElement("code",null,"resolve")," \u51fd\u6570\u6765\u5c06 Promise \u72b6\u6001\u6539\u6210 Fulfilled\uff0c\u6216\u8005\u5728\u53d1\u751f\u9519\u8bef\u65f6\u5c06\u5b83\u7684\u72b6\u6001\u6539\u4e3a Rejected"),c.a.createElement("li",null,"\u65e0\u6cd5\u53d6\u6d88 Promise\uff0c\u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u4f1a\u7acb\u5373\u6267\u884c\uff0c",c.a.createElement("strong",null,"\u65e0\u6cd5\u4e2d\u9014\u53d6\u6d88")),c.a.createElement("li",null,"\u5982\u679c\u4e0d\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\uff08executor\uff09\uff0cPromise \u5185\u90e8\u629b\u51fa\u9519\u8bef\uff0c\u4e0d\u4f1a\u53cd\u5e94\u5230\u5916\u90e8"),c.a.createElement("li",null,"\u5f53\u5904\u4e8e Pending \u72b6\u6001\u65f6\uff0c\u65e0\u6cd5\u5f97\u77e5\u76ee\u524d\u8fdb\u5c55\u5230\u54ea\u4e00\u4e2a\u9636\u6bb5")),c.a.createElement("p",null,"\u5982\u679c\u67d0\u4e9b\u4e8b\u4ef6\u4e0d\u65ad\u5730\u53cd\u590d\u53d1\u751f\uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u4f7f\u7528 \xa0",c.a.createElement("a",{href:"https://nodejs.org/api/stream.html",target:"_blank",rel:"noopener noreferrer"},"Stream",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},c.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}))),"\xa0 \u6a21\u5f0f\u662f\u6bd4\u90e8\u7f72 Promise \u66f4\u597d\u7684\u9009\u62e9\u3002"),c.a.createElement("p",null,"\ud83c\udf30 ",c.a.createElement("strong",null,"\u6807\u51c6\u793a\u4f8b")),c.a.createElement(m.a,{code:"new Promise(\n  /* \u6267\u884c\u5668 */\n  function(resolve, reject) {\n    // \u5f02\u6b65\u5904\u7406\n\n    // \u6570\u636e\u5904\u7406\u5b8c\u6210\u540e\u6267\u884c\n    resolve();\n\n    // \u6570\u636e\u5904\u7406\u51fa\u9519\u65f6\u6267\u884c\n    reject();\n  }\n).then(\n  function A() {\n    /* \u6210\u529f\uff0c\u4e0b\u4e00\u6b65 */\n  },\n  function B() {\n    /* \u5931\u8d25\uff0c\u505a\u76f8\u5e94\u5904\u7406 */\n  }\n);\n",lang:"js"}),c.a.createElement("h2",{id:"\u5de5\u4f5c\u6d41"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5de5\u4f5c\u6d41"},c.a.createElement("span",{className:"icon icon-link"})),"\u5de5\u4f5c\u6d41"),c.a.createElement("p",null,"Promise \u662f\u4e00\u4e2a\u4ee3\u7406\u5bf9\u8c61\uff08\u4ee3\u7406\u4e00\u4e2a\u503c\uff09\uff0c\u88ab\u4ee3\u7406\u7684\u503c\u5728 Promise \u5bf9\u8c61\u521b\u5efa\u65f6\u53ef\u80fd\u662f\u672a\u77e5\u7684\u3002\u5b83\u5141\u8bb8\u4f60\u4e3a\u5f02\u6b65\u64cd\u4f5c\u7684 ",c.a.createElement("strong",null,"Fulfilled")," \u548c ",c.a.createElement("strong",null,"Rejected")," \u5206\u522b\u7ed1\u5b9a\u76f8\u5e94\u7684\u5904\u7406\u65b9\u6cd5\uff08handlers\uff09\u3002\u8fd9\u8ba9\u5f02\u6b65\u65b9\u6cd5\u53ef\u4ee5\u50cf\u540c\u6b65\u65b9\u6cd5\u90a3\u6837\u8fd4\u56de\u503c\uff0c\u4f46",c.a.createElement("strong",null,"\u5e76\u4e0d\u662f\u7acb\u5373\u8fd4\u56de"),"\u6700\u7ec8\u6267\u884c\u7ed3\u679c\uff0c\u800c\u662f\u4e00\u4e2a\u80fd\u4ee3\u8868",c.a.createElement("strong",null,"\u672a\u6765\u51fa\u73b0"),"\u7684\u7ed3\u679c\u7684 Promise \u5bf9\u8c61\u3002"),c.a.createElement("p",null,"\u7531\u4e8e ",c.a.createElement("code",null,"Promise.prototype.then")," \u548c ",c.a.createElement("code",null,"Promise.prototype.catch")," \u65b9\u6cd5\u8fd4\u56de Promise \u5bf9\u8c61\uff0c\u6240\u4ee5\u5b83\u4eec\u53ef\u4ee5\u88ab ",c.a.createElement(a["a"],{to:"../../../core-modules/ecmascript-function-objects/function-types/cascade-function"},"\u94fe\u5f0f\u8c03\u7528"),"\u3002")),c.a.createElement(s.a,Object(n["a"])({source:{jsx:"import React from 'react';\nimport img from '../../../assets/promise/workflow.png';\n\nexport default () => <img alt=\"Promise Workflow\" src={img} width={720} />;"}},{inline:!0,dependencies:{},files:{}}),c.a.createElement(u,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("h2",{id:"\u72b6\u6001"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u72b6\u6001"},c.a.createElement("span",{className:"icon icon-link"})),"\u72b6\u6001"),c.a.createElement("p",null,"\u7528 ",c.a.createElement("code",null,"new")," \u5b9e\u4f8b\u5316\u7684 Promise \u5bf9\u8c61\u6709\u4ee5\u4e0b\u4e09\u79cd\u72b6\u6001\uff1a"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",{align:"left"},"\u72b6\u6001"),c.a.createElement("th",{align:"left"},"\u542b\u4e49"),c.a.createElement("th",{align:"left"},"\u63cf\u8ff0"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Pending"),c.a.createElement("td",{align:"left"},"\u5f85\u5b9a"),c.a.createElement("td",{align:"left"},"\u521d\u59cb\u72b6\u6001")),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Fulfilled"),c.a.createElement("td",{align:"left"},"\u5b9e\u73b0"),c.a.createElement("td",{align:"left"},"\u64cd\u4f5c\u6210\u529f\uff0c\u6b64\u65f6\u4f1a\u8c03\u7528 ",c.a.createElement("code",null,"onFulfilled"))),c.a.createElement("tr",null,c.a.createElement("td",{align:"left"},"Rejected"),c.a.createElement("td",{align:"left"},"\u5426\u51b3"),c.a.createElement("td",{align:"left"},"\u64cd\u4f5c\u5931\u8d25\uff0c\u6b64\u65f6\u4f1a\u8c03\u7528 ",c.a.createElement("code",null,"onRejected")))))),c.a.createElement(s.a,Object(n["a"])({source:{jsx:"import React from 'react';\nimport img from '../../../assets/promise/state.png';\n\nexport default () => <img alt=\"Promise State\" src={img} width={720} />;"}},{inline:!0,dependencies:{},files:{}}),c.a.createElement(E,null)),c.a.createElement("div",{className:"markdown"},c.a.createElement("p",null,"\u26a0\ufe0f ",c.a.createElement("strong",null,"\u6ce8\u610f"),"\uff1aPromise \u7684\u72b6\u6001\uff0c\u4ece ",c.a.createElement("span",{style:{fontWeight:"bold",color:"red"}},"Pending"),"\u8f6c\u6362\u4e3a ",c.a.createElement("span",{style:{fontWeight:"bold",color:"red"}},"Fulfilled")," \u6216 ",c.a.createElement("span",{style:{fontWeight:"bold",color:"red"}},"Rejected")," \u4e4b\u540e\uff0c\u8fd9\u4e2a Promise \u5bf9\u8c61\u7684\u72b6\u6001\u5c31\u4e0d\u4f1a\u53d1\u751f\u4efb\u4f55\u53d8\u5316\u3002"),c.a.createElement("p",null,"\u800c\u5f53 Promise \u72b6\u6001\u4e00\u65e6\u53d1\u751f\u53d8\u5316\uff0c\u5c31\u4f1a\u89e6\u53d1 ",c.a.createElement("code",null,".then()")," \u91cc\u7684\u54cd\u5e94\u51fd\u6570\u5904\u7406\u540e\u7eed\u6b65\u9aa4\u3002"),c.a.createElement("p",null,"\u4f46\u662f\uff0c",c.a.createElement("code",null,".then()")," \u53c2\u6570\u4e2d\u7684\u51fd\u6570\u53ea\u4f1a\u8c03\u7528\u5176\u4e2d\u4e00\u4e2a\uff0c\u8c03\u7528\u54ea\u4e2a\u53d6\u51b3\u4e8e\u8be5 Promise \u7684\u72b6\u6001\u3002"),c.a.createElement("p",null,"\u53e6\u5916\uff0c",c.a.createElement("strong",null,"Fulfilled")," \u548c ",c.a.createElement("strong",null,"Rejected")," \u8fd9\u4e24\u4e2a\u4e2d\u7684\u4efb\u4f55\u4e00\u79cd\u72b6\u6001\u90fd\u53ef\u4ee5\u8868\u793a\u4e3a ",c.a.createElement("strong",null,"Settled\uff08\u4e0d\u53d8\u7684\uff09"),"\u3002"),c.a.createElement("h2",{id:"\u9759\u6001\u65b9\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u9759\u6001\u65b9\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u9759\u6001\u65b9\u6cd5"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u65b9\u6cd5"),c.a.createElement("th",null,"\u8bf4\u660e"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-constructor/all"},"Promise.all(iterable)")),c.a.createElement("td",null,"\u5c06\u591a\u4e2a Promise \u5b9e\u4f8b\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\u3002\u5168\u90e8\u6210\u5458 Fulfilled \u6216\u67d0\u4e2a\u6210\u5458 Rejected \u65f6\u89e6\u53d1\u56de\u8c03")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-constructor/race"},"Promise.race(iterable)")),c.a.createElement("td",null,"\u5c06\u591a\u4e2a Promise \u5b9e\u4f8b\u5305\u88c5\u6210\u4e00\u4e2a\u65b0\u7684 Promise \u5b9e\u4f8b\u3002\u67d0\u4e2a\u6210\u5458\u72b6\u6001\u53d8\u66f4\u540e\u89e6\u53d1\u56de\u8c03")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-constructor/reject"},"Promise.reject(reason)")),c.a.createElement("td",null,"\u8fd4\u56de\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u7684\u72b6\u6001\u4e3a Rejected")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-constructor/resolve"},"Promise.resolve(value)")),c.a.createElement("td",null,"\u8fd4\u56de\u65b0\u7684 Promise \u5b9e\u4f8b\uff0c\u8be5\u5b9e\u4f8b\u7684\u72b6\u6001\u4e3a Fulfilled")))),c.a.createElement("h2",{id:"\u539f\u578b\u5bf9\u8c61"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u539f\u578b\u5bf9\u8c61"},c.a.createElement("span",{className:"icon icon-link"})),"\u539f\u578b\u5bf9\u8c61"),c.a.createElement("h3",{id:"\u5c5e\u6027"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u5c5e\u6027"},c.a.createElement("span",{className:"icon icon-link"})),"\u5c5e\u6027"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u539f\u578b\u5c5e\u6027"),c.a.createElement("th",null,"\u8bf4\u660e"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",null,"Promise.prototype.constructor")),c.a.createElement("td",null,"\u8fd4\u56de\u88ab\u521b\u5efa\u7684\u5b9e\u4f8b\u51fd\u6570\uff0c\u9ed8\u8ba4\u4e3a Promise \u51fd\u6570")))),c.a.createElement("h3",{id:"\u65b9\u6cd5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u65b9\u6cd5"},c.a.createElement("span",{className:"icon icon-link"})),"\u65b9\u6cd5"),c.a.createElement("table",null,c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"\u539f\u578b\u65b9\u6cd5"),c.a.createElement("th",null,"\u8bf4\u660e"))),c.a.createElement("tbody",null,c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-prototype-object/catch"},"Promise.prototype.catch(onRejected)")),c.a.createElement("td",null,"\u76f8\u5f53\u4e8e ",c.a.createElement("code",null,".then(null, rejection)"),"\uff0c\u7528\u4e8e\u6307\u5b9a\u53d1\u751f\u9519\u8bef\u65f6\u7684\u56de\u8c03\u51fd\u6570")),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("a",{href:"properties-of-the-promise-prototype-object/then"},"Promise.prototype.then(onFulfilled, onRejected)")),c.a.createElement("td",null,"\u6dfb\u52a0 ",c.a.createElement("code",null,"fulfillment")," \u548c ",c.a.createElement("code",null,"rejection")," \u56de\u8c03\u5230\u5f53\u524d Promise\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 Promise\uff0c\u5c06\u4ee5\u56de\u8c03\u7684\u8fd4\u56de\u503c\u6765 ",c.a.createElement("code",null,"resolve"))),c.a.createElement("tr",null,c.a.createElement("td",null,c.a.createElement("code",null,"Promise.prototype.finally(onFinally)")),c.a.createElement("td",null,"\u7528\u4e8e\u6307\u5b9a\u65e0\u8bba Promise \u5bf9\u8c61\u6700\u540e\u72b6\u6001\u5982\u4f55\uff0c\u90fd\u4f1a\u6267\u884c\u7684\u64cd\u4f5c")))),c.a.createElement("h2",{id:"\u6700\u4f73\u5b9e\u8df5"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u6700\u4f73\u5b9e\u8df5"},c.a.createElement("span",{className:"icon icon-link"})),"\u6700\u4f73\u5b9e\u8df5"),c.a.createElement("h3",{id:"\u591a\u4efb\u52a1\u4e32\u884c"},c.a.createElement("a",{"aria-hidden":"true",href:"#\u591a\u4efb\u52a1\u4e32\u884c"},c.a.createElement("span",{className:"icon icon-link"})),"\u591a\u4efb\u52a1\u4e32\u884c"),c.a.createElement(m.a,{code:"const Task = function(result, isSuccess = true) {\n  return () =>\n    new Promise((resolve, reject) => {\n      setTimeout(() => {\n        if (isSuccess) {\n          resolve(result);\n        } else {\n          reject(result);\n        }\n      }, 1000);\n    });\n};\n\nexecute([Task('A'), Task('B'), Task('C', false), Task('D')]).then(resultList => {\n  // do something\n});\n",lang:"js"}),c.a.createElement("p",null,"\u6ce8\u610f\u4e8b\u9879\uff1a"),c.a.createElement("ol",null,c.a.createElement("li",null,"\u6bcf\u4e2a Task \u65e0\u8bba\u6210\u529f\u4e0e\u5426\uff0c\u90fd\u4e0d\u80fd\u963b\u65ad\u4e0b\u4e2a Task \u7684\u6267\u884c"),c.a.createElement("li",null,"\u6700\u540e\u7684 ",c.a.createElement("code",null,"then")," \u9700\u8981\u628a\u6bcf\u4e2a Task \u7684\u6267\u884c\u7ed3\u679c ",c.a.createElement("code",null,"\u51b3\u8bae")," \u51fa\u53bb")),c.a.createElement("p",null,"\u5b9e\u73b0\u601d\u8def\uff1a"),c.a.createElement("ol",null,c.a.createElement("li",null,"\u6bcf\u4e2a Task \u5916\u5c42\u5305\u88c5\u4e00\u5c42 Promise\uff0c\u6355\u83b7 Task \u7684 ",c.a.createElement("code",null,"rejected")," \u72b6\u6001"),c.a.createElement("li",null,"\u53ef\u4ee5\u5229\u7528\u4e2d\u95f4\u53d8\u91cf\uff0c\u7f13\u5b58\u6240\u6709 Task \u7684\u8f93\u51fa\u7ed3\u679c\uff0c\u7136\u540e\u5728\u6700\u540e\u4e00\u4e2a Promise \u7684 ",c.a.createElement("code",null,"then")," \u91cc\u628a\u4e2d\u95f4\u53d8\u91cf ",c.a.createElement("code",null,"\u51b3\u8bae")," \u51fa\u53bb")),c.a.createElement(m.a,{code:"function execute(tasks) {\n  return;\n  task.reduce(\n    (previousPromise, currentPromise) =>\n      previousPromise.then(resultList => {\n        return new Promise(resolve => {\n          currentPromise()\n            .then(result => {\n              resolve(resultList.concat(result));\n            })\n            .catch(() => {\n              resolve(resultList.concat(null));\n            });\n        });\n      }),\n    []\n  );\n}\n",lang:"js"}),c.a.createElement("hr",null),c.a.createElement("p",null,c.a.createElement("strong",null,"\u53c2\u8003\u8d44\u6599\uff1a")),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"http://liubin.org/promises-book/",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcda JavaScript Promise \u8ff7\u4f60\u4e66",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},c.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://juejin.im/post/5aa7868b6fb9a028dd4de672",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd Promise \u539f\u7406\u8bb2\u89e3(\u9075\u5faa Promise/A+ \u89c4\u8303)",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},c.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://zhuanlan.zhihu.com/p/90850451",target:"_blank",rel:"noopener noreferrer"},"\ud83d\udcdd Promise \u4e32\u884c",c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15",className:"__dumi-default-external-link-icon"},c.a.createElement("path",{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}),c.a.createElement("polygon",{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"})))))))}}}]);