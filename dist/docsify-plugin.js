!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).MiniSandboxDocsify=t()}(this,(function(){"use strict";function e(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function t(t){for(var r=1;r<arguments.length;r++){var o=null!=arguments[r]?arguments[r]:{};r%2?e(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function n(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}(e,t)||o(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function a(e){var i=[],a=0,u=$docsify.miniSandbox;e.beforeEach((function(e){return e=e.replace(/```\s?([a-z]+)\s+\[(.*)\]\s?(\$\{.*\}|\{.*\})?\n([^`]*)\n```/gm,(function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return i[a]=n.slice(0,-2).map((function(e){return String(e)})),'<div class="mini-sandbox-docsify" data-index="'.concat(a++,'"></div>')})),e})),e.doneEach((function(){var e,a=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=o(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return u=e.done,e},e:function(e){c=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(c)throw a}}}}(document.querySelectorAll(".mini-sandbox-docsify"));try{for(a.s();!(e=a.n()).done;){var c=e.value,f=c.getAttribute("data-index"),l=r(i[f],4),s=l[0],y=l[1],d=l[2],b=l[3],p=/^\$\{(.*)\}$/.exec(d);if(p){var m=p[1];d=u&&u.data&&u.data[m]}else if("string"==typeof d&&"undefined"!==d)try{d=new Function("return "+d)()}catch(e){console.error(d,e),d={}}new MiniSandbox({el:c,files:n({},y,t(t({type:s},d),{},{defaultValue:b})),defaultConfig:t({},u&&u.defaultConfig)})}}catch(e){a.e(e)}finally{a.f()}}))}return $docsify.plugins=[].concat($docsify.plugins,a),a}));
