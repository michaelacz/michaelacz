(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{219:function(t,o,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("3b333aa0",content,!0,{sourceMap:!1})},221:function(t,o,e){var content=e(300);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("08ff215a",content,!0,{sourceMap:!1})},222:function(t,o,e){var content=e(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("68a93bd2",content,!0,{sourceMap:!1})},233:function(t,o,e){"use strict";e(299);var n=e(45),component=Object(n.a)({},(function(){var t=this._self._c;return t("div",[t("NavBar"),this._v(" "),t("div",{attrs:{id:"app"}},[t("Nuxt")],1)],1)}),[],!1,null,"82257932",null);o.a=component.exports;installComponents(component,{NavBar:e(319).default})},234:function(t,o,e){e(235),t.exports=e(236)},286:function(t,o,e){t.exports=e.p+"img/404.b2ccbfc.png"},287:function(t,o,e){"use strict";e(219)},288:function(t,o,e){var n=e(54)((function(i){return i[1]}));n.push([t.i,".container[data-v-5e30c111]{margin-top:20px}img[data-v-5e30c111]{height:50%;margin:auto;width:50%}",""]),n.locals={},t.exports=n},295:function(t,o,e){var content=e(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(55).default)("5135230c",content,!0,{sourceMap:!1})},296:function(t,o,e){var n=e(54),r=e(297),c=e(298),l=n((function(i){return i[1]})),d=r(c);l.push([t.i,'body{font-family:"Quicksand",sans-serif;-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;background-attachment:fixed;background-color:#fff;background-image:url('+d+");color:#000;text-align:center}.row{margin-top:170px}.action-btn{display:inline-table;margin:7px}.info{font-size:18px;font-weight:400;line-height:2em;margin-left:7px;margin-top:10px;text-align:left}img{background-color:#2e2a2a;border-radius:100%;cursor:pointer;height:200px;width:200px}.social-icons{margin-top:25px}.social-icons a{color:rgba(0,0,0,.712);font-size:25px;margin:15px}.social-icons a:hover{color:#000}.intro{font-size:45px;font-weight:bolder;margin-left:20px;margin-top:20px;text-align:left}@media screen and (max-width:420px){.row{margin-top:0}img{height:150px;width:150px}.intro{font-size:30px;font-weight:700}}.btn-primary{background-color:red;border-color:red}.btn-primary:hover{background-color:#f00000;border-color:#f00000}body.dark{background-color:#0a192f;color:#fff}body.dark .navbar-dark{background-color:#0a192f!important}body.dark .social-icons a{color:#dee2e6}body.dark .social-icons a:hover{color:#6c757d}body.dark .nav-item:hover{background-color:#343a40}",""]),l.locals={},t.exports=l},298:function(t,o,e){t.exports=e.p+"img/animbg.3568e3c.svg"},299:function(t,o,e){"use strict";e(221)},300:function(t,o,e){var n=e(54)((function(i){return i[1]}));n.push([t.i,"#app[data-v-82257932]{margin-top:100px}",""]),n.locals={},t.exports=n},303:function(t,o,e){"use strict";e(222)},304:function(t,o,e){var n=e(54)((function(i){return i[1]}));n.push([t.i,".mainIcon[data-v-10562c7c]{border-radius:0;height:50px;width:50px}.navbar-nav[data-v-10562c7c]{margin-left:100px}@media screen and (max-width:420px){.navbar-nav[data-v-10562c7c]{margin-left:0}}.nav-item[data-v-10562c7c]{border-radius:2px;font-size:14px;margin:15px}.nav-link a[data-v-10562c7c]{color:#000!important;-webkit-text-decoration:none;text-decoration:none}.nav-item[data-v-10562c7c]:hover{background:#f3f0f0}.moon-icon[data-v-10562c7c]{color:#000}.moon-icon[data-v-10562c7c]:hover{background:transparent!important}.bg-light[data-v-10562c7c]{background-color:#fff!important}",""]),n.locals={},t.exports=n},319:function(t,o,e){"use strict";e.r(o);var n=e(231),r=e(232);e(301);var c={name:"NavBar",components:{SunnyIcon:n.a,MoonIcon:r.a},data:function(){return{themeMode:""}},methods:{toggleDarkMode:function(){void 0!==localStorage.themeMode&&"dark"!=localStorage.themeMode?(localStorage.themeMode="dark",document.body.classList.toggle("dark"),document.querySelector("nav").classList.toggle("navbar-light"),document.querySelector("nav").classList.toggle("bg-light"),document.querySelector("nav").classList.toggle("navbar-dark"),document.querySelector("nav").classList.toggle("bg-dark"),this.themeMode="dark"):(localStorage.themeMode="light",document.body.classList.toggle("dark"),this.themeMode="light",document.querySelector("nav").classList.toggle("navbar-dark"),document.querySelector("nav").classList.toggle("bg-dark"),document.querySelector("nav").classList.toggle("navbar-light"),document.querySelector("nav").classList.toggle("bg-light"))}},mounted:function(){this.themeMode=localStorage.themeMode}},l=(e(303),e(45)),component=Object(l.a)(c,(function(){var t=this,o=t._self._c;return o("b-navbar",{attrs:{toggleable:"lg",fixed:"top",type:"light",variant:"light"}},[o("b-navbar-brand",{staticStyle:{"font-weight":"bolder"},attrs:{tag:"h1",to:"/"}},[t._v("\n    MC\n  ")]),t._v(" "),o("b-navbar-toggle",{staticStyle:{"border-radius":"0"},attrs:{target:"nav-collapse"}}),t._v(" "),o("b-collapse",{staticClass:"animate__animated animate__fadeInDown",attrs:{id:"nav-collapse","is-nav":""}},[o("b-navbar-nav",[o("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),t._v(" "),"dark"==t.themeMode?o("b-nav-item",{staticClass:"moon-icon",attrs:{href:"#",title:"Toggle Darkmode"},on:{click:t.toggleDarkMode}},[o("SunnyIcon",{staticStyle:{color:"#eee","font-size":"20px"}})],1):o("b-nav-item",{staticClass:"moon-icon",attrs:{href:"#",title:"Toggle Darkmode"},on:{click:t.toggleDarkMode}},[o("MoonIcon",{staticStyle:{color:"#000","font-size":"20px"}})],1)],1)],1)],1)}),[],!1,null,"10562c7c",null);o.default=component.exports},65:function(t,o,e){"use strict";var n={props:["error"],layout:"error"},r=(e(287),e(45)),component=Object(r.a)(n,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"container"},[404===t.error.statusCode?o("div",[o("img",{attrs:{src:e(286),alt:"404 Illustration"}}),t._v(" "),o("h1",{staticClass:"text-warning"},[t._v("Opps!, something went wrong")]),t._v(" "),o("p",[t._v("We could not find that page you were looking for")])]):o("h1",[t._v("An error occurred")]),t._v(" "),o("nuxt-link",{attrs:{to:"/"}},[t._v("🏠 Go Home")])],1)}),[],!1,null,"5e30c111",null);o.a=component.exports}},[[234,9,1,10]]]);