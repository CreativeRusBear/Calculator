!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/dist/js",t(t.s=0)}([function(e,n,t){"use strict";var r,i=t(1),u=(r=i)&&r.__esModule?r:{default:r};t(2);var a=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(document.querySelector(".btns").getElementsByTagName("div"))),c=document.getElementById("result"),o=document.getElementById("math");a.forEach(function(e){if("clear"!==e.getAttribute("id")&&"square"!==e.getAttribute("id")&&"del"!==e.getAttribute("id")&&"equally"!==e.getAttribute("id")&&(e.onclick=function(){e.getAttribute("id")||"0"!==c.innerHTML||"."===e.textContent?"."===e.textContent?0===c.innerHTML.indexOf(".")?c.innerHTML="0.":-1===c.innerHTML.indexOf(".")&&(c.innerHTML+="."):c.innerHTML+=e.textContent:c.innerHTML=e.textContent}),e.getAttribute("id"))switch(e.getAttribute("id")){case"clear":e.onclick=function(){c.innerHTML="0"};break;case"squareRoot":e.onclick=function(){return c.innerHTML=u.default.sqrt(c.innerHTML)};break;case"square":e.onclick=function(){return c.innerHTML=u.default.sqr(c.innerHTML)};break;case"div":e.onclick=function(){o.innerHTML+=c.innerHTML+"/",c.innerHTML="0"};break;case"multiply":e.onclick=function(){o.innerHTML+=c.innerHTML+"*",c.innerHTML="0"};break;case"sub":e.onclick=function(){o.innerHTML+=c.innerHTML+"-",c.innerHTML="0"};break;case"sum":e.onclick=function(){o.innerHTML+=c.innerHTML+"+",c.innerHTML="0"};break;case"equally":e.onclick=function(){o.innerHTML+=""+c.innerHTML,c.innerHTML=""+u.default.result(o.innerHTML),o.innerHTML=""};break;case"del":e.onclick=function(){c.innerHTML.length&&(c.innerHTML=c.innerHTML.slice(0,-1))}}})},function(module,exports,__webpack_require__){"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var Mathematics=function(){function Mathematics(){_classCallCheck(this,Mathematics)}return _createClass(Mathematics,[{key:"sqr",value:function(e){return Math.pow(e,2)}},{key:"sqrt",value:function(e){return e>=0?Math.sqrt(e).toFixed(2):"Введены неверные данные"}},{key:"result",value:function result(data){try{return eval(data)}catch(e){return e.toString()}}}]),Mathematics}();exports.default=new Mathematics},function(e,n){}]);
//# sourceMappingURL=app.js.map