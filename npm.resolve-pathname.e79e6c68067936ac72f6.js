(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{lCFh:function(n,t,r){"use strict";function i(n){return"/"===n.charAt(0)}function o(n,t){for(var r=t,i=r+1,o=n.length;i<o;r+=1,i+=1)n[r]=n[i];n.pop()}t.a=function(n,t){void 0===t&&(t="");var r,e=n&&n.split("/")||[],f=t&&t.split("/")||[],s=n&&i(n),u=t&&i(t),a=s||u;if(n&&i(n)?f=e:e.length&&(f.pop(),f=f.concat(e)),!f.length)return"/";if(f.length){var h=f[f.length-1];r="."===h||".."===h||""===h}else r=!1;for(var p=0,c=f.length;c>=0;c--){var l=f[c];"."===l?o(f,c):".."===l?(o(f,c),p++):p&&(o(f,c),p--)}if(!a)for(;p--;p)f.unshift("..");!a||""===f[0]||f[0]&&i(f[0])||f.unshift("");var v=f.join("/");return r&&"/"!==v.substr(-1)&&(v+="/"),v}}}]);