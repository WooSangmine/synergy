(function(){"use strict";var e={4990:function(e,n,t){t.r(n),t.d(n,{default:function(){return b}});var r=t(9582),o=t(266),i=t(2118),u=t(9223),a=t(5808),c=t(4525),f=t(468),s=t(1713),l=function(){var e=this,n=e._self._c;return n(i.Z,{staticClass:"py-8 px-6",attrs:{fluid:""}},[n(s.Z,e._l(e.cards,(function(t){return n(o.Z,{key:t,attrs:{cols:"12"}},[n(r.Z,[n(a.Z,{attrs:{"two-line":""}},[e._l(6,(function(t){return[n(c.Z,{key:t},[n(f.km,[n(f.V9,[e._v("Message "+e._s(t))]),n(f.oZ,[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")])],1)],1),6!==t?n(u.Z,{key:`divider-${t}`,attrs:{inset:""}}):e._e()]}))],2)],1)],1)})),1)],1)},d=[],p={name:"Home",components:{},data:()=>({cards:["Today","Yesterday"],drawer:null})},m=p,h=t(1001),v=(0,h.Z)(m,l,d,!1,null,null,null),b=v.exports},817:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=function(){var e=this,n=e._self._c;return n("router-view")},o=[],i={},u=i,a=t(1001),c=(0,a.Z)(u,r,o,!1,null,null,null),f=c.exports},7026:function(e,n,t){var r=t(144),o=t(817),i=t(9669),u=t.n(i);let a={};const c=u().create(a);c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e){e.axios=c,window.axios=c,Object.defineProperties(e.prototype,{axios:{get(){return c}},$axios:{get(){return c}}})},r.ZP.use(Plugin);var f=t(1705);r.ZP.use(f.Z);var s=new f.Z({}),l=t(8345);t(4990);r.ZP.use(l.ZP);const d=[{path:"/",name:"/",redirect:"/app",component:()=>Promise.resolve().then(t.bind(t,817)),children:[{path:"/app",name:"/app",redirect:"/app/home",component:()=>t.e(474).then(t.bind(t,7474)),children:[{path:"/app/home",name:"/app/home",component:()=>Promise.resolve().then(t.bind(t,4990))},{path:"/app/table",name:"/app/table",component:()=>t.e(553).then(t.bind(t,2553))}]}]}],p=new l.ZP({mode:"history",base:"/",routes:d});var m=p;r.ZP.config.productionTip=!1,new r.ZP({vuetify:s,router:m,render:e=>e(o["default"])}).$mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={exports:{}};return e[r].call(i.exports,i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,i){if(!r){var u=1/0;for(s=0;s<e.length;s++){r=e[s][0],o=e[s][1],i=e[s][2];for(var a=!0,c=0;c<r.length;c++)(!1&i||u>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(a=!1,i<u&&(u=i));if(a){e.splice(s--,1);var f=o();void 0!==f&&(n=f)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{474:"973975ea",553:"2d96f266"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{474:"9405f923",553:"69bc52dc"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="boardframe:";t.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,c;if(void 0!==i)for(var f=document.getElementsByTagName("script"),s=0;s<f.length;s++){var l=f[s];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==n+i){a=l;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",n+i),a.src=r),e[r]=[o];var d=function(n,t){a.onerror=a.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(t){if(i.onerror=i.onload=null,"load"===t.type)r();else{var u=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=u,c.request=a,i.parentNode&&i.parentNode.removeChild(i),o(c)}};return i.onerror=i.onload=u,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var u=t.miniCssF(r),a=t.p+u;if(n(u,a))return o();e(r,a,null,o,i)}))},o={143:0};t.f.miniCss=function(e,n){var t={474:1,553:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var u=t.p+t.u(n),a=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+n+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};t.l(u,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,u=r[0],a=r[1],c=r[2],f=0;if(u.some((function(n){return 0!==e[n]}))){for(o in a)t.o(a,o)&&(t.m[o]=a[o]);if(c)var s=c(t)}for(n&&n(r);f<u.length;f++)i=u[f],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},r=self["webpackChunkboardframe"]=self["webpackChunkboardframe"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(7026)}));r=t.O(r)})();
//# sourceMappingURL=app.8b86ce1b.js.map