(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[401],{Hc1D:function(e,n,a){"use strict";a.r(n);var l=a("q1tI"),t=a.n(l),o=(a("B2uJ"),a("+su7"),a("qOys")),r=a.n(o);a("5Yjd");n["default"]=function(){return t.a.createElement(t.a.Fragment,null,t.a.createElement("div",{className:"markdown"},t.a.createElement("h1",{id:"stringprototypenormalize"},t.a.createElement("a",{"aria-hidden":"true",href:"#stringprototypenormalize"},t.a.createElement("span",{className:"icon icon-link"})),"String.prototype.normalize()"),t.a.createElement("p",null,t.a.createElement("code",null,"normalize()")," \u65b9\u6cd5\u4f1a\u6309\u7167\u6307\u5b9a\u7684\u4e00\u79cd Unicode \u6b63\u89c4\u5f62\u5f0f\u5c06\u5f53\u524d\u5b57\u7b26\u4e32\u6b63\u89c4\u5316\u3002\uff08\u5982\u679c\u8be5\u503c\u4e0d\u662f\u5b57\u7b26\u4e32\uff0c\u5219\u9996\u5148\u5c06\u5176\u8f6c\u6362\u4e3a\u4e00\u4e2a\u5b57\u7b26\u4e32\uff09\u3002"),t.a.createElement("h2",{id:"\u8bed\u6cd5"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u8bed\u6cd5"},t.a.createElement("span",{className:"icon icon-link"})),"\u8bed\u6cd5"),t.a.createElement(r.a,{code:"str.normalize([form]);\n",lang:"js"}),t.a.createElement("table",null,t.a.createElement("thead",null,t.a.createElement("tr",null,t.a.createElement("th",null,"\u53c2\u6570"),t.a.createElement("th",null,"\u8bf4\u660e"),t.a.createElement("th",null,"\u7c7b\u578b"))),t.a.createElement("tbody",null,t.a.createElement("tr",null,t.a.createElement("td",null,t.a.createElement("code",null,"form")),t.a.createElement("td",null,"\u53ef\u9009\uff0c\u56db\u79cd Unicode \u6b63\u89c4\u5f62\u5f0f\uff08Unicode Normalization Form\uff09\uff0c\u9ed8\u8ba4\u503c\u4e3a ",t.a.createElement("code",null,"NFC")),t.a.createElement("td",null,"string")))),t.a.createElement("p",null,"\u53ef\u9009\u503c\uff1a"),t.a.createElement("ul",null,t.a.createElement("li",null,t.a.createElement("code",null,"NFC"),"\uff1aCanonical Decomposition, followed by Canonical Composition"),t.a.createElement("li",null,t.a.createElement("code",null,"NFD"),"\uff1aCanonical Decomposition"),t.a.createElement("li",null,t.a.createElement("code",null,"NFKC"),"\uff1aCompatibility Decomposition, followed by Canonical Composition"),t.a.createElement("li",null,t.a.createElement("code",null,"NFKD"),"\uff1aCompatibility Decomposition")),t.a.createElement("p",null,"\u8fd4\u56de\u7ed9\u5b9a\u5b57\u7b26\u4e32\u7684 Unicode \u89c4\u8303\u5316\u5f62\u5f0f\u7684\u5b57\u7b26\u4e32\u3002"),t.a.createElement("p",null,"\u5982\u679c\u7ed9 ",t.a.createElement("code",null,"form")," \u53c2\u6570\u4f20\u5165\u4e86\u4e0a\u8ff0\u56db\u4e2a\u5b57\u7b26\u4e32\u610f\u5916\u4ee5\u5916\u7684\u53c2\u6570\uff0c\u5219\u4f1a\u629b\u51fa ",t.a.createElement("code",null,"RangeError")," \u5f02\u5e38\u3002"),t.a.createElement("h2",{id:"\u793a\u4f8b"},t.a.createElement("a",{"aria-hidden":"true",href:"#\u793a\u4f8b"},t.a.createElement("span",{className:"icon icon-link"})),"\u793a\u4f8b"),t.a.createElement(r.a,{code:"// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE\n// U+0323: COMBINING DOT BELOW\nvar str = '\\u1E9B\\u0323';\n\n// Canonically-composed form (NFC)\n\n// U+1E9B: LATIN SMALL LETTER LONG S WITH DOT ABOVE\n// U+0323: COMBINING DOT BELOW\nstr.normalize('NFC'); // \"\\u1E9B\\u0323\"\nstr.normalize(); // same as above\n\n// Canonically-decomposed form (NFD)\n\n// U+017F: LATIN SMALL LETTER LONG S\n// U+0323: COMBINING DOT BELOW\n// U+0307: COMBINING DOT ABOVE\nstr.normalize('NFD'); // \"\\u017F\\u0323\\u0307\"\n\n// Compatibly-composed (NFKC)\n\n// U+1E69: LATIN SMALL LETTER S WITH DOT BELOW AND DOT ABOVE\nstr.normalize('NFKC'); // \"\\u1E69\"\n\n// Compatibly-decomposed (NFKD)\n\n// U+0073: LATIN SMALL LETTER S\n// U+0323: COMBINING DOT BELOW\n// U+0307: COMBINING DOT ABOVE\nstr.normalize('NFKD'); // \"\\u0073\\u0323\\u0307\"\n",lang:"js"})))}}}]);