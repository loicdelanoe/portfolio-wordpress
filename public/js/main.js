(()=>{"use strict";var t,e={869:()=>{function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,r(n.key),n)}}function r(e){var r=function(e,r){if("object"!=t(e)||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,r||"default");if("object"!=t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"==t(r)?r:r+""}var o=function(){return t=function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),document.body.insertAdjacentHTML("afterbegin",'<div class="cursor"></div>'),this.cursor=document.querySelector(".cursor"),this.projectLinks=document.querySelectorAll(".projetcard__link"),this.images=document.querySelectorAll(".overview__img"),this.images=document.querySelectorAll("[data-zoom]"),this.handleMouseMove(),this.AddCursorStyle(this.projectLinks,"link"),this.AddCursorStyle(this.images,"zoom"),this.AddCursorStyle(this.images,"zoom")},r=[{key:"handleMouseMove",value:function(){var t=this;document.addEventListener("mousemove",(function(e){t.cursor.style.top=e.pageY+"px",t.cursor.style.left=e.pageX+"px"}))}},{key:"AddCursorStyle",value:function(t,e){var r=this;t.forEach((function(t){r.removePointer(t),t.addEventListener("mouseover",(function(){r.cursor.classList.add(e)})),t.addEventListener("mouseleave",(function(){r.cursor.classList.remove(e)}))}))}},{key:"removePointer",value:function(t){t.classList.add("no-cursor")}}],r&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,o}(),n="show-up",i="no-opacity",s="slide-left",a="slide-right",c={display:[{opacity:0,color:"transparent"},{opacity:1,visibility:"visible",color:"black"},{opacity:1,visibility:"visible",color:"black"},{opacity:0,color:"transparent"}]};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function u(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,y(o.key),o)}}function f(t,e,r){return(e=y(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function y(t){var e=function(t,e){if("object"!=l(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==l(e)?e:e+""}var m=function(){return t=function t(){var e=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"showUpAnimation",(function(t){t.forEach((function(t){t.isIntersecting&&(setTimeout((function(){t.target.classList.add(n),t.target.classList.remove(i)}),e.delay),e.delay+=100)})),e.delay=0})),f(this,"slideLeftAnimation",(function(t){t.forEach((function(t){t.isIntersecting&&(setTimeout((function(){t.target.classList.add(s),t.target.classList.remove(i)}),e.delay),e.delay+=100)})),e.delay=0})),f(this,"slideRightAnimation",(function(t){t.forEach((function(t){t.isIntersecting&&(setTimeout((function(){t.target.classList.add(a),t.target.classList.remove(i)}),e.delay),e.delay+=100)})),e.delay=0})),this.showUpElements=document.querySelectorAll('[data-animation="'.concat(n,'"]')),this.slideLeftElements=document.querySelectorAll('[data-animation="'.concat(s,'"]')),this.slideRightElements=document.querySelectorAll('[data-animation="'.concat(s,'"]:nth-child(even)')),this.slideLeftElements.forEach((function(t){t.classList.add(i)})),this.slideRightElements.forEach((function(t){t.classList.add(i)})),this.showUpElements.forEach((function(t){t.classList.add(i)})),this.showUpObserver=new IntersectionObserver(this.showUpAnimation),this.slideLeftObserver=new IntersectionObserver(this.slideLeftAnimation),this.slideRightObserver=new IntersectionObserver(this.slideRightAnimation),this.observeAction(),this.delay=0},(e=[{key:"observeAction",value:function(){var t=this;this.showUpElements.forEach((function(e){t.showUpObserver.observe(e)})),this.slideLeftElements.forEach((function(e){t.slideLeftObserver.observe(e)})),this.slideRightElements.forEach((function(e){t.slideRightObserver.observe(e)}))}}])&&u(t.prototype,e),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,e,r}();function b(t){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},b(t)}function d(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,p(o.key),o)}}function v(t,e,r){return e&&d(t.prototype,e),r&&d(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function p(t){var e=function(t,e){if("object"!=b(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=b(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==b(e)?e:e+""}var h=v((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.clipboardElements=document.querySelectorAll("[data-clipboard]"),this.clipboardElements.forEach((function(t){t.addEventListener("click",(function(t){navigator.clipboard.writeText(t.currentTarget.dataset.clipboard).then(),t.currentTarget.animate(c.display,{duration:800,pseudoElement:"::after"})}))}))}));function g(t){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g(t)}function w(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,E(o.key),o)}}function S(t,e,r){return e&&w(t.prototype,e),r&&w(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function E(t){var e=function(t,e){if("object"!=g(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=g(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==g(e)?e:e+""}new(S((function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.observer=new m,this.cursor=new o,this.clipboard=new h})))},294:()=>{}},r={};function o(t){var n=r[t];if(void 0!==n)return n.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,o),i.exports}o.m=e,t=[],o.O=(e,r,n,i)=>{if(!r){var s=1/0;for(u=0;u<t.length;u++){for(var[r,n,i]=t[u],a=!0,c=0;c<r.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((t=>o.O[t](r[c])))?r.splice(c--,1):(a=!1,i<s&&(s=i));if(a){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={829:0,552:0};o.O.j=e=>0===t[e];var e=(e,r)=>{var n,i,[s,a,c]=r,l=0;if(s.some((e=>0!==t[e]))){for(n in a)o.o(a,n)&&(o.m[n]=a[n]);if(c)var u=c(o)}for(e&&e(r);l<s.length;l++)i=s[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},r=self.webpackChunksef_website=self.webpackChunksef_website||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),o.O(void 0,[552],(()=>o(869)));var n=o.O(void 0,[552],(()=>o(294)));n=o.O(n)})();
//# sourceMappingURL=main.js.map