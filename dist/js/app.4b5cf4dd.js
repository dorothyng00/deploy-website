(function(e){function t(t){for(var a,r,i=t[0],l=t[1],o=t[2],d=0,j=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&j.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(j.length)j.shift()();return c.push.apply(c,o||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,i=1;i<s.length;i++){var l=s[i];0!==n[l]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var o=0;o<i.length;o++)t(i[o]);var f=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"55f6":function(e,t,s){e.exports=s.p+"img/ryerson_logo.7c2a4a45.jpeg"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("TopBar"),s("AboutMe")],1)},c=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"flex justify-center items-center h-auto relative",staticStyle:{height:"calc(100vh - 40px)"}},[e._m(0),s("div",{staticClass:"font-semibold absolute",staticStyle:{"font-family":"Didot",bottom:"0"}},[s("div",[s("div",{staticStyle:{"border-bottom":"1px solid"}},[e._v("SCROLL DOWN TO LEARN MORE ABOUT ME")]),s("div",{staticClass:"flex justify-center"},[s("svg",{staticClass:"feather feather-chevron-down",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[s("polyline",{attrs:{points:"6 9 12 15 18 9"}})])])])])]),s("div",{staticClass:"flex w-full justify-center items-center",staticStyle:{height:"100vh","background-color":"black",color:"#e8e8e8"}},[s("div",{staticClass:"md:w-1/2"},[s("div",{staticClass:"font-semibold flex items-center p-5",staticStyle:{"font-size":"50px"},attrs:{"data-aos":"fade-right"}},[s("svg",{staticStyle:{"enable-background":"new 0 0 95.333 95.332"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"95.333px",height:"95.332px",viewBox:"0 0 95.333 95.332",fill:"#FFF","xml:space":"preserve"}},[s("g",[s("g",[s("path",{attrs:{d:"M30.512,43.939c-2.348-0.676-4.696-1.019-6.98-1.019c-3.527,0-6.47,0.806-8.752,1.793 c2.2-8.054,7.485-21.951,18.013-23.516c0.975-0.145,1.774-0.85,2.04-1.799l2.301-8.23c0.194-0.696,0.079-1.441-0.318-2.045 s-1.035-1.007-1.75-1.105c-0.777-0.106-1.569-0.16-2.354-0.16c-12.637,0-25.152,13.19-30.433,32.076 c-3.1,11.08-4.009,27.738,3.627,38.223c4.273,5.867,10.507,9,18.529,9.313c0.033,0.001,0.065,0.002,0.098,0.002 c9.898,0,18.675-6.666,21.345-16.209c1.595-5.705,0.874-11.688-2.032-16.851C40.971,49.307,36.236,45.586,30.512,43.939z"}}),e._v(" "),s("path",{attrs:{d:"M92.471,54.413c-2.875-5.106-7.61-8.827-13.334-10.474c-2.348-0.676-4.696-1.019-6.979-1.019 c-3.527,0-6.471,0.806-8.753,1.793c2.2-8.054,7.485-21.951,18.014-23.516c0.975-0.145,1.773-0.85,2.04-1.799l2.301-8.23 c0.194-0.696,0.079-1.441-0.318-2.045c-0.396-0.604-1.034-1.007-1.75-1.105c-0.776-0.106-1.568-0.16-2.354-0.16 c-12.637,0-25.152,13.19-30.434,32.076c-3.099,11.08-4.008,27.738,3.629,38.225c4.272,5.866,10.507,9,18.528,9.312 c0.033,0.001,0.065,0.002,0.099,0.002c9.897,0,18.675-6.666,21.345-16.209C96.098,65.559,95.376,59.575,92.471,54.413z"}})])])]),s("div",{staticStyle:{"font-family":"Garamond"}},[e._v("WORK HARD")])]),s("div",{staticClass:"font-semibold flex items-center justify-end p-5",staticStyle:{"font-size":"50px"},attrs:{"data-aos":"fade-left"}},[s("div",{staticStyle:{"font-family":"Garamond","text-align":"right"}},[e._v("PLAY HARD")]),s("svg",{staticStyle:{"enable-background":"new 0 0 98.829 98.829"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",fill:"#FFF","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"98.829px",height:"98.829px",viewBox:"0 0 98.829 98.829","xml:space":"preserve"}},[s("g",[s("g",[s("path",{attrs:{d:"M96.76,41.603C91.511,22.831,78.562,9.204,65.975,9.204c-1.011,0-2.021,0.088-3.005,0.262 c-0.558,0.098-1.046,0.426-1.348,0.902c-0.301,0.479-0.386,1.061-0.233,1.605l2.591,9.268c0.25,0.895,1.113,1.5,2.01,1.459 l0.206-0.004c4.668,0,13.199,6.996,17.548,22.545c0.172,0.617,0.335,1.248,0.492,1.906c-4.882-2.416-10.706-2.975-15.98-1.506 C56.358,48.97,49.388,61.356,52.714,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.046-0.834 c7.846-2.193,13.745-8.707,16.611-18.338C99.521,61.764,99.456,51.249,96.76,41.603z"}}),e._v(" "),s("path",{attrs:{d:"M14.088,9.206c-1.009,0-2.02,0.086-3.003,0.26c-0.557,0.096-1.046,0.426-1.347,0.902 c-0.301,0.479-0.386,1.061-0.234,1.605l2.592,9.268c0.25,0.895,1.097,1.5,2.01,1.459l0.204-0.004 c4.668,0,13.2,6.996,17.549,22.545c0.173,0.621,0.336,1.252,0.492,1.906c-4.884-2.416-10.706-2.975-15.98-1.506 C4.475,48.97-2.497,61.356,0.831,73.252c2.696,9.639,11.563,16.373,21.563,16.373c2.037,0,4.071-0.281,6.047-0.834 c7.845-2.193,13.744-8.707,16.611-18.338c2.586-8.689,2.522-19.205-0.175-28.852C39.625,22.831,26.678,9.206,14.088,9.206z"}})])])])]),s("div",{staticClass:"p-5",attrs:{"data-aos":"fade-up"}},[e._v(" This is the principle I live by, I want to reward myself after my nerve-racking lecture hours and solving hard problems. I enjoy engineering because it is constantly changing and innovating. That gives me the chance to push me off my limit every day, learn new things every day, and sharpen my skills. ")])])]),e._m(1),e._m(2)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"md:flex items-center justify-center"},[a("div",{staticClass:"md:w-1/3 w-full justify-center flex"},[a("img",{staticClass:"w-4/5 md:w-full",staticStyle:{"object-fit":"cover","max-height":"500px"},attrs:{src:s("de2b")}})]),a("div",{staticClass:"p-8 md:w-1/3 w-full md:-ml-10",staticStyle:{"background-color":"#e8ebed"}},[a("h2",{staticClass:"font-semibold",staticStyle:{"font-size":"30px"}},[e._v("Hi, my name is Dorothy")]),e._v(" I am currently pursuing a Computer Engineering degree at Ryerson University. I love working with logic gates, making hardware/ software designs, learning coding languages, Artificial Intelligence, and traveling! ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"p-5 mt-10",staticStyle:{"background-color":"#c2e9ff"}},[a("div",{staticClass:"font-semibold flex justify-center",staticStyle:{"font-size":"30px","font-family":"Didot",width:"100%"}},[e._v("Education")]),a("div",{staticClass:"w-full flex justify-center"},[a("div",{staticClass:"md:w-4/5 w-full mt-5 p-5 md:flex",staticStyle:{"background-color":"white","border-radius":"4px","justify-content":"space-between"}},[a("div",[a("p",[e._v("Ryerson University")]),a("p",[e._v("Computer Engineering")]),a("p",[e._v("Expected Graduation Year : 2022")])]),a("div",[a("img",{attrs:{src:s("55f6")}})])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"mt-10",staticStyle:{"background-color":"#c2e9ff"}},[s("div",{staticClass:"flex justify-center font-semibold p-5",staticStyle:{"font-size":"30px","font-family":"Didot"}},[e._v("Education")]),s("div",{staticClass:"flex justify-center"},[e._v("Ryerson")])])}],l={components:{}},o=l,f=s("2877"),d=Object(f["a"])(o,r,i,!1,null,null,null),j=d.exports,u=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"justify-end p-2 hidden md:flex",staticStyle:{"background-color":"#e8ebed"}},[s("div",{staticClass:"pr-2 pl-2"},[e._v("About")]),s("div",{staticClass:"pr-2 pl-2"},[e._v("Project")]),s("div",{staticClass:"pr-2 pl-2"},[e._v("Gallery")]),s("div",{staticClass:"pr-2 pl-2"},[e._v("Contact")])])}],p={},m=p,v=Object(f["a"])(m,u,b,!1,null,null,null),h=v.exports,g={name:"App",components:{AboutMe:j,TopBar:h}},y=g,w=Object(f["a"])(y,n,c,!1,null,null,null),x=w.exports,k=s("f23d"),_=(s("d940"),s("f5af")),C=s.n(_),z=(s("e829"),s("e32c")),S=s("9a63"),O=s("0c63"),E=s("9571"),M=s("5efb"),A=s("27fd");a["a"].use(k["a"]),a["a"].use(z["a"]),a["a"].use(S["a"]),a["a"].use(O["a"]),a["a"].use(E["a"]),a["a"].use(M["a"]),a["a"].use(A["a"]),a["a"].config.productionTip=!1,new a["a"]({created:function(){C.a.init()},render:function(e){return e(x)}}).$mount("#app")},d940:function(e,t,s){},de2b:function(e,t,s){e.exports=s.p+"img/IMG_7831.3af71274.jpeg"}});
//# sourceMappingURL=app.4b5cf4dd.js.map