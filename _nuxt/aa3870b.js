(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{347:function(t,e,n){"use strict";var r=n(2),o=n(76).find,c=n(152),l="find",d=!0;l in[]&&Array(1).find((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},417:function(t,e,n){var content=n(423);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("e549e962",content,!0,{sourceMap:!1})},422:function(t,e,n){"use strict";n(417)},423:function(t,e,n){var r=n(51)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tab[data-v-4533c0c1]{\n  overflow:hidden\n}\n.tab-content[data-v-4533c0c1]{\n  max-height:0;\n  transition:all .5s\n}\ninput:checked+.tab-label .test[data-v-4533c0c1]{\n  background-color:#000\n}\ninput:checked+.tab-label .test svg[data-v-4533c0c1]{\n  transform:rotate(180deg);\n  stroke:#fff\n}\ninput:checked+.tab-label[data-v-4533c0c1]:after{\n  transform:rotate(90deg)\n}\ninput:checked~.tab-content[data-v-4533c0c1]{\n  max-height:100vh\n}\n.stylelist[data-v-4533c0c1]:not(:first-child){\n  border-top:1px solid #000\n}\n.orders__detail[data-v-4533c0c1]{\n  top:0;\n  left:0;\n  max-height:calc(100vh - 100px);\n  overflow-y:auto\n}\n.gridd[data-v-4533c0c1]{\n  display:grid;\n  grid-template-columns:1fr 1fr;\n  grid-gap:20px\n}\n.detailed[data-v-4533c0c1]{\n  width:400px\n}\n.detailed-border[data-v-4533c0c1]{\n  min-width:500px;\n  min-height:300px;\n  max-width:700px;\n  opacity:.9\n}\n@media(max-width:1000px){\n.gridd[data-v-4533c0c1]{\n    grid-template-columns:1fr\n}\n.detailed[data-v-4533c0c1]{\n    margin-left:50px;\n    width:70%;\n    height:80%\n}\n}\n@media(max-width:500px){\n.detailed-border[data-v-4533c0c1]{\n    min-width:250px\n}\n}\nul[data-v-4533c0c1]{\n  max-height:calc(100vh - 100px);\n  overflow-y:auto\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},428:function(t,e,n){"use strict";n.r(e);var r=n(15),o=n(13),c=(n(66),n(347),n(25),n(118),n(31),n(24),n(30),n(35),n(36),n(153)),l=n(144),d=n(32);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{error:n(55).a},data:function(){return{orders:[],openDetail:!1,detailData:[],openMessage:!1,message:""}},methods:{detailSet:function(t){this.openDetail=!0,console.log(t,this.orders);var data=this.orders.find((function(e){return e.id==t}));this.detailData=data.order},showMessage:function(t){this.openMessage=!0,console.log(t,this.orders);var data=this.orders.find((function(e){return e.id==t}));this.message=data.comment,console.log(data)},deleteDoc:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!confirm("Are you sure you want to delete this order")){n.next=6;break}return n.next=3,Object(c.c)(Object(c.d)(l.a,"orders",t));case 3:e.orders.forEach((function(n,r){n.id==t&&e.orders.splice(r,1)})),n.next=6;break;case 6:case"end":return n.stop()}}),n)})))()},fetchOrders:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(c.e)(Object(c.b)(l.a,"orders"));case 3:e.sent.forEach((function(e){var n=v({id:e.id},e.data());t.orders.push(n),console.log(t.orders)})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("FEY"),t.orders=null;case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},created:function(){this.fetchOrders()},computed:v({},Object(d.b)(["getAxesData"]))},m=(n(422),n(29)),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[null!=t.orders?n("div",{staticClass:"overflow-x-auto"},[n("div",{staticClass:"min-w-screen min-h-screen  flex mt-10 justify-center  font-sans overflow-hidden"},[n("div",{staticClass:"w-full lg:w-5/6"},[n("div",{staticClass:"bg-white  rounded my-6 overflow-x-auto"},[n("div",{staticClass:"main-table"},[n("table",{staticClass:"min-w-max w-full table-auto"},[t._m(0),t._v(" "),n("tbody",{staticClass:"text-gray-600 text-sm font-light"},t._l(t.orders,(function(e,r){return n("tr",{key:r,staticClass:"border-b border-gray-200 hover:bg-gray-100 text-center"},[n("td",{staticClass:"py-3 px-6 text-left whitespace-nowrap"},[t._v("\n                    "+t._s(e.name)+"\n                    "+t._s(e.lastName)+"\n                  ")]),t._v(" "),n("td",{staticClass:"py-3 px-6  whitespace-nowrap"},[t._v("\n                    "+t._s(e.email)+"\n                  ")]),t._v(" "),n("td",{staticClass:"py-3 px-6  whitespace-nowrap"},[t._v("\n                    "+t._s(e.phone)+"\n                  ")]),t._v(" "),n("td",{staticClass:"py-3 px-6",staticStyle:{"max-width":"100px"}},[n("svg",{staticClass:"cursor-pointer hover:text-purple-500 hover:scale-110 mt-2",staticStyle:{width:"35px",margin:"auto"},attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(n){return t.showMessage(e.id)}}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}})])]),t._v(" "),n("td",{staticClass:"py-3 px-6  whitespace-nowrap flex justify-center"},[n("div",{staticClass:"w-4 mr-2 transform"},[n("svg",{staticClass:"cursor-pointer hover:text-purple-500 hover:scale-110",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(n){return t.deleteDoc(e.id)}}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})]),t._v(" "),n("svg",{staticClass:"cursor-pointer hover:text-purple-500 hover:scale-110 mt-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},on:{click:function(n){return t.detailSet(e.id)}}},[n("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"}})])])])])})),0)])])])])]),t._v(" "),t.openDetail?n("div",{staticClass:" flex  mx-auto w-full h-full items-center justify-center fixed orders__detail",on:{click:function(e){t.openDetail=!1}}},[n("ul",{staticClass:"gridd p-4 rounded-lg bg-gray-100  padding-30 detailed-border"},t._l(t.detailData,(function(e,r){return n("li",{key:r,staticClass:"border-gray-400 flex flex-row mb-2 shadow-lg detailed"},[n("div",{staticClass:"select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"},[n("div",{staticClass:"flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4"},[t._v("\n              💧\n            ")]),t._v(" "),n("div",{staticClass:"flex-1 pl-1"},[n("div",{staticClass:"font-medium"},[t._v("TOUR: "+t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-gray-600 text-sm mt-2"},[t._v("\n                DESTINATION: "+t._s(e.dest.name)+"\n              ")])]),t._v(" "),n("div",{staticClass:"text-gray-600 text-xs"},[t._v(t._s(r+1))])])])})),0)]):t._e(),t._v(" "),t.openMessage?n("div",{staticClass:" flex  mx-auto w-full h-full items-center justify-center fixed orders__detail",on:{click:function(e){t.openMessage=!1}}},[n("ul",{staticClass:"grid p-4 rounded-lg bg-gray-100  padding-30 detailed-border",on:{click:function(t){t.stopPropagation()}}},[t._v("\n        \n         \n           "+t._s(this.message||"NO COMMENT")+"\n           \n       \n      ")])]):t._e()]):t._e(),t._v(" "),null==t.orders?n("div",{staticClass:"w-full flex justify-center items-center h-full"},[n("error")],1):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticClass:"bg-gray-200 text-gray-600 uppercase text-sm leading-normal"},[n("th",{staticClass:"py-3 px-6 text-left"},[t._v("user")]),t._v(" "),n("th",{staticClass:"py-3 px-6 text-center"},[t._v("Email")]),t._v(" "),n("th",{staticClass:"py-3 px-6 text-center"},[t._v("phone")]),t._v(" "),n("th",{staticClass:"py-3 px-6 text-center"},[t._v("comment")]),t._v(" "),n("th",{staticClass:"py-3 px-6 text-center"},[t._v("utils")])])])}],!1,null,"4533c0c1",null);e.default=component.exports}}]);