(function(e){function n(n){for(var o,r,i=n[0],u=n[1],l=n[2],f=0,s=[];f<i.length;f++)r=i[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&s.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);d&&d(n);while(s.length)s.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],o=!0,r=1;r<t.length;r++){var i=t[r];0!==a[i]&&(o=!1)}o&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return u.p+"assets/js/"+({}[e]||e)+".07112013.js"}function u(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t={"chunk-0a423720":1,"chunk-1c52f2ca":1,"chunk-1f0eeab6":1,"chunk-210fe26a":1,"chunk-2ce77d94":1,"chunk-40229994":1,"chunk-58b49ec7":1,"chunk-66684a54":1,"chunk-68b1f6ea":1,"chunk-772af9f6":1,"chunk-e52fe8ea":1,"chunk-b4c30876":1,"chunk-e757d006":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var o="assets/css/"+({}[e]||e)+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===o||f===a))return n()}var s=document.getElementsByTagName("style");for(i=0;i<s.length;i++){l=s[i],f=l.getAttribute("data-href");if(f===o||f===a)return n()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=n,d.onerror=function(n){var o=n&&n.target&&n.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],d.parentNode.removeChild(d),t(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)n.push(o[2]);else{var c=new Promise((function(n,t){o=a[e]=[n,t]}));n.push(o[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(e);var s=new Error;l=function(n){f.onerror=f.onload=null,clearTimeout(d);var t=a[e];if(0!==t){if(t){var o=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",s.name="ChunkLoadError",s.type=o,s.request=r,t[1](s)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(n)},u.m=e,u.c=o,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)u.d(t,o,function(n){return e[n]}.bind(null,o));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="https://cdn.jsdelivr.net/gh/colally/common/",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var d=f;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"16fb":function(e,n,t){"use strict";var o=t("6636"),r=t.n(o);r.a},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=t("5c96"),a=t.n(r),c=(t("0fae"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),i=[],u=t("94b5"),l={name:"App",created:function(){this.check()},watch:{$route:function(e,n){console.log("to:"+e.path),console.log("from:"+n.path),this.check(e.path)}},methods:{check:function(e){u["a"].ua.wechat||u["a"].ua.qq?(this.$message.error("请勿使用QQ,微信浏览器打开此页面"),document.body.appendChild(document.createElement("iframe")).src="javascript:\"<script>top.location.replace('https://puep.qpic.cn/coral/Q3auHgzwzM4fgQ41VTF2rMf9Fibn8eSWuGHDsBovOQ1q8R3Wialibtd2w/0')<\/script>\""):Object(u["d"])(e)}}},f=l,s=t("2877"),d=Object(s["a"])(f,c,i,!1,null,null,null),p=d.exports,h=(t("d3b7"),t("8c4f")),m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"about"},[t("el-container",[t("el-main",[t("p",[e._v("本应用属于非赢利性软件，用户在接受本应用服务之前，请务必仔细阅读本条款并同意本声明。")]),t("ul",[t("li",[t("p",[t("strong",[e._v("第一条")]),e._v(" 用户使用本应用的行为以及通过各类方式利用本应用的行为，都将被视作是对本声明全部内容的无异议的认可。")])]),t("li",[t("p",[t("strong",[e._v("第二条")]),e._v(" 本应用引用内容如电影视频，电视直播等模块内容仅代表原网站观点，仅供参考使用，并不代表本应用同意其说法或描述。对于访问者根据本应用提供的信息所做出的一切行为，除非另有明确的书面承诺文件，否则本应用不承担任何形式的责任。")])]),t("li",[t("p",[t("strong",[e._v("第三条")]),e._v(" 本应用有权将在本应用的相关数数据用于其他用途，包括应用用户信息、浏览数据等。")])]),t("li",[t("p",[t("strong",[e._v("第四条")]),e._v(" 本应用所引用的视频，电视节目，其观点、内容、字体、图片版权均归原作者所有，相关责任作者自负。")])]),t("li",[t("p",[t("strong",[e._v("第五条")]),e._v(" 未经本应用和原作者同意，其他任何机构、个人不得以任何形式侵犯其作品（包含内容、观点、图片）著作权，包括但不限于：擅自复制、链接、非法使用或转载，或以任何方式建立作品镜像。")])]),t("li",[t("p",[t("strong",[e._v("第六条")]),e._v(" 访问者在从事与本应用相关的所有行为（包括但不限于访问浏览、利用、转载、宣传介绍）时，必须以善意且谨慎的态度行事；访问者不得故意或者过失的损害或者弱化本应用的各类合法权利与利益，不得利用本应用以任何方式直接或者间接的从事违反中国法律、国际公约以及社会公德的行为，且访问者应当恪守下述承诺：")]),t("blockquote",[t("p",[e._v("1、传输和利用信息符合中国法律、国际公约的规定、符合公序良俗；")]),t("p",[e._v("2、不将本应用以及与之相关的网络服务用作非法用途以及非正当用途；")]),t("p",[e._v("3、不干扰和扰乱本应用以及与之相关的网络服务；")]),t("p",[e._v("4、遵守与本应用以及与之相关的网络服务的协议、规定、程序和惯例等。")])])]),t("li",[t("p",[t("strong",[e._v("第七条")]),e._v(" 本应用郑重提醒访问者：请在转载、上载或者下载有关作品时务必尊重该作品的版权、著作权；如果您发现有您未署名的作品，请立即和我们联系，我们会在第一时间加上您的署名或作相关处理。")])]),t("li",[t("p",[t("strong",[e._v("第八条")]),e._v(" 除另有明确说明或者中国法律有强制性规定外，本应用原创的内容，本应用享有版权，其他网站、媒体及个人如需使用，须取得本应用的书面授权，未经授权严禁转载或用于其它商业用途。")])]),t("li",[t("p",[t("strong",[e._v("第九条")]),e._v(" 当本应用以链接形式推荐其他网站内容时，本应用并不对这些网站或资源的可用性负责，且不保证从这些网站获取的任何内容、产品、服务或其他材料的真实性、合法性。对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，本应用均不承担任何责任。")])]),t("li",[t("p",[t("strong",[e._v("第十条")]),e._v(" 访问者在本应用注册时提供的个人资料，本应用除第十一条规定及您本人同意外，不会将用户的任何资料以任何方式泄露给任何一方。")])]),t("li",[t("p",[t("strong",[e._v("第十一条")]),e._v(" 当政府部门、司法机关等依照法定程序要求本应用披露个人资料时，本应用将根据执法单位之要求或为公共安全之目的提供个人资料。在此情况下之任何披露，本应用均得免责。由于用户将个人密码告知他人或与他人共享注册账户，由此导致的任何个人资料泄露，本应用不负任何责任。")])]),t("li",[t("p",[t("strong",[e._v("第十二条")]),e._v(" 本应用内容如无意中侵犯了哪个媒体 、公司 、企业或个人等的知识产权，请来电或致函告之，本应用将在规定时间内给予删除等相关处理。")])])]),t("p",[e._v("如有疑问请联系Email:colalp419#gmail.com,获取更多资讯请Q群:710630896")]),t("p",[t("a",{attrs:{href:"/free/"}},[e._v("趣享运动个人版（使用时间：12:00-12:59/20:00-20:59）")]),e._v(" "),t("a",{attrs:{href:"/sport/"}},[e._v("趣享运动赞助版")])]),t("p",[t("span",[e._v("版本说明:赞助版与个人版相比去除时间和部分数据提交大小的限制,多了部分同步方式。所有赞助费用都将用于服务器等相关产品支出。")])])])],1)],1)},v=[],g={metaInfo:{title:"趣享GO",titleTemplate:"%s - 用户协议",htmlAttrs:{lang:"en",amp:!0}}},b=g,k=(t("16fb"),Object(s["a"])(b,m,v,!1,null,"3b5458dc",null)),_=k.exports;o["default"].use(h["a"]);var y=h["a"].prototype.push;h["a"].prototype.push=function(e){return y.call(this,e).catch((function(e){return e}))};var w=[{path:"/",name:"About",component:_},{path:"/login",name:"Login",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-68b1f6ea")]).then(t.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-58b49ec7")]).then(t.bind(null,"73cf"))}},{path:"/renew",name:"Renew",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-0a423720")]).then(t.bind(null,"9a03"))}},{path:"/free",name:"free_index",component:function(){return t.e("chunk-b4c30876").then(t.bind(null,"45bc"))},children:[{path:"/free/",name:"free_qq",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-e52fe8ea")]).then(t.bind(null,"2131"))}},{path:"/free/qq",name:"free_qq",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-e52fe8ea")]).then(t.bind(null,"2131"))}},{path:"/free/dongdong",name:"free_dongdong",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-1f0eeab6")]).then(t.bind(null,"c68f"))}},{path:"/free/yuedong",name:"free_yuedong",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-1c52f2ca")]).then(t.bind(null,"c7fa"))}},{path:"/free/ali",name:"free_ali",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-40229994")]).then(t.bind(null,"e23e"))}}]},{path:"/sport",name:"sport_index",component:function(){return t.e("chunk-e757d006").then(t.bind(null,"4b4b"))},children:[{path:"/sport/",name:"sport_qq",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-2ce77d94")]).then(t.bind(null,"da43"))}},{path:"/sport/qq",name:"sport_qq",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-2ce77d94")]).then(t.bind(null,"da43"))}},{path:"/sport/dongdong",name:"sport_dongdong",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-210fe26a")]).then(t.bind(null,"9ac7"))}},{path:"/sport/yuedong",name:"sport_yuedong",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-772af9f6")]).then(t.bind(null,"b018"))}},{path:"/sport/ali",name:"sport_ali",component:function(){return Promise.all([t.e("chunk-5f808f19"),t.e("chunk-66684a54")]).then(t.bind(null,"d0ca"))}}]},{path:"*",redirect:"/"}],O=new h["a"]({mode:"history",base:"https://cdn.jsdelivr.net/gh/colally/common/",routes:w}),x=O,P=t("c5d4"),q=t("82ae"),E=t.n(q),j=t("e7aa"),L=t.n(j);o["default"].use(a.a),o["default"].use(P["a"],{refreshOnceOnNavigation:!0}),o["default"].use(L.a,E.a),o["default"].config.productionTip=!1,new o["default"]({router:x,render:function(e){return e(p)}}).$mount("#app")},6636:function(e,n,t){},"94b5":function(e,n,t){"use strict";t.d(n,"a",(function(){return o})),t.d(n,"b",(function(){return r})),t.d(n,"e",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"d",(function(){return c}));t("c975"),t("4d63"),t("ac1f"),t("25f0"),t("466d"),t("5319"),t("841c"),t("498a"),t("bf19"),function(){var e=[],n=!1;function t(t){if(!n&&("onreadystatechange"!==t.type||"complete"===document.readyState)&&null!=e){for(var o=0;o<e.length;o++)e[o].call(document);n=!0,e=null}}document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),document.addEventListener("readystatechange",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",t),window.attachEvent("onload",t))}();var o={ua:function(){var e=navigator.userAgent.toLowerCase();return console.log(e),{trident:e.indexOf("trident")>-1,presto:e.indexOf("presto")>-1,webKit:e.indexOf("applewebkit")>-1,gecko:e.indexOf("gecko")>-1&&-1==e.indexOf("khtml"),mobile:!!e.match(/applewebkit.*mobile/i)||!!e.match(/midp|symbianos|nokia|samsung|lg|nec|tcl|alcatel|bird|dbtel|dopod|philips|haier|lenovo|mot-|nokia|sonyericsson|sie-|amoi|zte/),ios:!!e.match(/\(i[^;]+;( u;)? cpu.+mac os x/),android:e.indexOf("android")>-1||e.indexOf("Linux")>-1,iPhone:e.indexOf("iphone")>-1||e.indexOf("mac")>-1,iPad:e.indexOf("ipad")>-1,webApp:-1==e.indexOf("safari"),wechat:e.indexOf("micromessenger")>-1,qq:e.indexOf("qq")>-1}}()},r=function(e){if(document.cookie.length>0){var n,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null}return null},a=function(e){return void 0==e||null==e||"undefined"==e||"null"==e||""==e.trim()},c=function(e){a(e)&&(e=window.location.href.toLocaleLowerCase());var n=/(sport)/i;n.test(e)&&-1==e.indexOf("redirect")&&-1==e.indexOf("login")?(console.info("拦截页面:"+e),console.info("username:"+r("username")),console.info("token:"+r("token")),a(r("username"))||a(r("token"))?window.location.href="/login?redirect="+decodeURIComponent(window.location.href):console.info("登录状态")):console.info("释放页面:"+e)},i=function(e){var n=window.location.search.substring(1);return a(n)?null:n.replace(e+"=","")}}});