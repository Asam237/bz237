(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,3,4,5,6,7,8,9,10,12,13],{277:function(t,e,n){t.exports=n.p+"img/pict02.3933841.png"},278:function(t,e,n){t.exports=n.p+"img/star.fb8c104.png"},279:function(t,e,n){t.exports=n.p+"img/search.0bbcc82.png"},280:function(t,e,n){t.exports=n.p+"img/user.5587c13.png"},281:function(t,e,n){t.exports=n.p+"img/shopping.1dd7fff.png"},282:function(t,e,n){t.exports=n.p+"img/ecommerce.dd55304.png"},283:function(t,e,n){t.exports=n.p+"img/instagram.4ef96d5.png"},284:function(t,e,n){t.exports=n.p+"img/twitter.3794ba2.png"},285:function(t,e,n){t.exports=n.p+"img/youtube.4611e9f.png"},286:function(t,e,n){t.exports=n.p+"img/day.c711a9d.png"},287:function(t,e,n){t.exports=n.p+"img/next.d2b4727.png"},288:function(t,e,n){t.exports=n.p+"img/pict01.92b4d93.png"},289:function(t,e,n){var map={"./day.png":286,"./ecommerce.png":282,"./facebook.png":291,"./instagram.png":283,"./next.png":287,"./pict01.png":288,"./pict02.png":277,"./pict03.png":292,"./pict04.png":293,"./search.png":279,"./shopping.png":281,"./star.png":278,"./twitter.png":284,"./user.png":280,"./youtube.png":285};function l(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}l.keys=function(){return Object.keys(map)},l.resolve=r,t.exports=l,l.id=289},290:function(t,e,n){"use strict";var l=n(2),r=n(294);l({target:"String",proto:!0,forced:n(295)("link")},{link:function(t){return r(this,"a","href",t)}})},291:function(t,e,n){t.exports=n.p+"img/facebook.da23095.png"},292:function(t,e,n){t.exports=n.p+"img/pict03.4ca49f0.png"},293:function(t,e,n){t.exports=n.p+"img/pict04.060c766.png"},294:function(t,e,n){var l=n(4),r=n(23),m=n(13),c=/"/g,o=l("".replace);t.exports=function(t,e,n,l){var d=m(r(t)),f="<"+e;return""!==n&&(f+=" "+n+'="'+o(m(l),c,"&quot;")+'"'),f+">"+d+"</"+e+">"}},295:function(t,e,n){var l=n(3);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},296:function(t,e,n){"use strict";n.r(e);n(37);var l={name:"CollectionCardComponent",data:function(){return{pict:n(277)}},props:{mypict:{type:String},name:{type:String}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:mx-4"},[e("div",{staticClass:"w-full h-[250px] md:mx-4 mt-4 md:mt-0",staticStyle:{background:"#d3d1d1"}},[e("img",{staticClass:"w-auto h-full mx-auto",attrs:{alt:"",src:n(289)("./".concat(t.mypict))}}),t._v(" "),e("div",{staticClass:"mx-2 mt-[-50px] flex justify-center items-center",staticStyle:{opacity:"0.8"}},[e("p",{staticClass:"w-full py-2 font-bold text-center uppercase bg-white"},[t._v("\n          "+t._s(t.name)+"\n        ")])])])])}),[],!1,null,null,null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);n(37);var l={name:"ProductCardComponent",props:{mypict:{type:String},name:{type:String}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-12 mb-24 md:mx-4 md:mt-0"},[e("div",{staticClass:"w-full h-[250px] md:mx-4 mt-4 md:mt-0",staticStyle:{background:"#d3d1d1"}},[e("img",{staticClass:"w-auto h-full mx-auto",attrs:{alt:"",src:n(289)("./".concat(t.mypict))}}),t._v(" "),e("div",{staticClass:"flex"},t._l(5,(function(t,l){return e("div",{key:l,staticClass:"mt-3 ml-3"},[e("img",{staticClass:"w-4 h-4 mr-1",attrs:{src:n(278)}})])})),0),t._v(" "),e("p",{staticClass:"w-full py-1 font-semibold bg-white text-start"},[t._v("\n      "+t._s(t.name)+"\n    ")]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex"},[e("p",{staticClass:"text-gray-500 line-through"},[t._v("$220")]),t._v(" "),e("p",{staticClass:"ml-3 font-semibold"},[t._v("$140")])])}],!1,null,null,null);e.default=component.exports},298:function(t,e,n){"use strict";n.r(e);n(37);var l={name:"DayCardComponent",props:{day:{type:String},name:{type:String}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-white p-1 w-[60px] h-16 mr-4 flex flex-col items-center justify-center mt-6 md:mt-12"},[e("h1",{staticClass:"text-[30px] md:text-[25px] text-start",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n    "+t._s(t.day)+"\n  ")]),t._v(" "),e("p",{staticClass:"text-sm"},[t._v(t._s(t.name))])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,n){"use strict";n.r(e);n(290),n(37);var l={name:"HeaderComponent",data:function(){return{main:[{name:"Home",link:"#"},{name:"Men",link:"#"},{name:"Women",link:"#"},{name:"Trending",link:"#"}],icons:[{icon:n(279),link:"#"},{icon:n(280),link:"#"},{icon:n(281),link:"#"}]}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("header",{staticClass:"flex flex-row items-center justify-between p-4 flex-start md:p-0"},[t._m(0),t._v(" "),e("div",{staticClass:"flex-col hidden md:flex md:flex-row"},t._l(t.main,(function(n,l){return e("nav",{key:l},[e("ul",{staticClass:"mx-0 mt-2 md:my-0 md:mx-2"},[e("a",{staticClass:"font-semibold uppercase text-md md:text-base hover:underline",staticStyle:{"font-family":"'Raleway', sans-serif"},attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.name))])])])})),0),t._v(" "),e("div",{staticClass:"flex flex-row pt-4 md:pt-0"},t._l(t.icons,(function(t,n){return e("nav",{key:n},[e("ul",{staticClass:"mx-0 md:my-0 md:mx-2"},[e("a",{attrs:{href:t.link}},[e("img",{staticClass:"w-5 h-5 ml-3",attrs:{src:t.icon}})])])])})),0)])}),[function(){var t=this._self._c;return t("div",[t("h4",{staticClass:"text-base md:text-xl",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[this._v("\n      WoilaTchogou237\n    ")])])}],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);n(290);var l={name:"BrandComponent",data:function(){return{brandpic:n(282),icons:[{icon:n(283),link:"#"},{icon:n(284),link:"#"},{icon:n(285),link:"#"}]}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col px-4 pt-20 md:pt-28 md:flex-row"},[e("div",{staticClass:"justify-center hidden md:flex md:flex-col w-28"},[e("div",{staticClass:"ml-2 h-14",staticStyle:{background:"#654642",width:"1px"}}),t._v(" "),e("div",{staticClass:"my-6"},t._l(t.icons,(function(t,n){return e("nav",{key:n},[e("ul",{staticClass:"mt-5"},[e("a",{attrs:{href:t.link}},[e("img",{staticClass:"w-4 h-4",attrs:{src:t.icon}})])])])})),0),t._v(" "),e("div",{staticClass:"h-24 ml-2",staticStyle:{background:"#654642",width:"1px"}})]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"flex justify-center w-full mt-4 mb-12 md:justify-start md:w-2/5 md:mt-8 md:mb-0"},[e("img",{staticClass:"w-[300px] h-auto",attrs:{src:t.brandpic,alt:""}})])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full md:w-3/5"},[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center md:text-start",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n      All your style "),e("br"),t._v("Are here\n    ")]),t._v(" "),e("p",{staticClass:"w-full my-4 font-normal text-center md:my-8 md:w-3/4 md:text-left",staticStyle:{"font-family":"'Raleway', sans-serif"}},[t._v("\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam\n      voluptua.\n    ")]),t._v(" "),e("div",{staticClass:"flex justify-center mt-4 mb-8 md:mb-0 md:justify-start"},[e("button",{staticClass:"px-8 py-2 font-semibold text-white rounded-full md:px-6",staticStyle:{background:"#654642","font-family":"'Raleway', sans-serif"}},[t._v("\n        Shop now\n      ")])])])}],!1,null,null,null);e.default=component.exports},302:function(t,e,n){"use strict";n.r(e);var l={name:"JoinCommunityComponent"},r=n(46),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"py-8 md:py-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("h1",{staticClass:"text-base font-normal text-center text-gray-200 md:text-xl md:text-left"},[t._v("\n    Join our "),e("span",{staticClass:"font-extrabold"},[t._v("WoilaTchogou237")]),t._v(" Community\n  ")]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center mx-4 mt-3 md:mt-6 md:flex-row md:justify-start md:mx-0"},[e("input",{staticClass:"rounded-[100px] px-10 py-3 bg-gray-200 md:w-1/3",attrs:{type:"text",placeholder:"ENTER YOUR NAME",value:"",name:"",id:""}}),t._v(" "),e("input",{staticClass:"rounded-[100px] px-10 py-3 bg-gray-200 ml-0 md:ml-10 mt-4 md:mt-0 md:w-1/3",attrs:{type:"text",placeholder:"ENTER YOUR EMAIL",value:"",name:"",id:""}}),t._v(" "),e("div",{staticClass:"w-1/4 mt-4 md:ml-10 md:mt-0"},[e("button",{staticClass:"w-32 px-4 py-3 font-semibold rounded-full",staticStyle:{background:"#f7f2ed",color:"#654642"}},[t._v("\n        Join now\n      ")])])])])}],!1,null,null,null);e.default=component.exports},303:function(t,e,n){"use strict";n.r(e);n(37);var l={name:"CollectionsComponent",data:function(){return{collections:[{name:"sweeter",picture:"pict01.png"},{name:"t-shirt",picture:"pict04.png"},{name:"t-shirt",picture:"pict03.png"}]}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-4 md:mx-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("div",[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n      New Collection\n    ")]),t._v(" "),e("p",{staticClass:"text-center"},[t._v("\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy\n      eirmod.\n    ")]),t._v(" "),e("div",{staticClass:"flex flex-col justify-center mt-8 sm:flex-row md:mt-16"},t._l(t.collections,(function(t,n){return e("div",{key:n},[e("CollectionCardComponent",{attrs:{name:t.name,mypict:t.picture}})],1)})),0)]),t._v(" "),e("div",{staticClass:"flex flex-col flex-col-reverse justify-center mt-8 sm:flex-row md:mt-16 mb-20"},[e("div",{staticClass:"h-[350px] w-full md:w-[350px] rounded-tl-[100px] flex justify-center items-center mt-6 md:mt-0",staticStyle:{background:"#a1e7f0"}},[e("img",{attrs:{src:n(277),alt:""}})]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-6 ml-0 md:mt-0 md:ml-8 md:w-1/4"},[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center md:text-start",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n        Best Fashion "),e("br"),t._v("Sicnce 2022\n      ")]),t._v(" "),e("p",{staticClass:"text-center md:text-start md:w-[400px] mt-4"},[t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n        sed diam voluptua.\n      ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{CollectionCardComponent:n(296).default})},304:function(t,e,n){"use strict";n.r(e);var l={name:"BestSellerComponent",data:function(){return{pict01:n(288),pict02:n(277)}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-4 md:mx-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("div",{staticClass:"flex flex-col justify-center mt-8 mb-20 sm:flex-row md:mt-16"},[t._m(0),t._v(" "),e("div",{staticClass:"flex items-center justify-center w-full mt-6 md:w-1/4 md:mt-0"},[e("div",{staticClass:"w-full h-[280px] md:mx-4 mt-4 md:mt-0",staticStyle:{background:"#d3d1d1"}},[e("img",{staticClass:"w-auto h-[200px] mx-auto",attrs:{alt:"",src:t.pict02}}),t._v(" "),e("div",{staticClass:"px-4 py-2 bg-white"},[e("div",{staticClass:"flex"},t._l(5,(function(t,l){return e("div",{key:l,staticClass:"mt-3 ml-3"},[e("img",{staticClass:"w-4 h-4 mr-1",attrs:{src:n(278)}})])})),0),t._v(" "),e("p",{staticClass:"w-full py-1 font-semibold text-start"},[t._v("Pastel Long Sleeve")]),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"flex items-center justify-center w-full mt-6 md:w-1/4 md:mt-0"},[e("div",{staticClass:"w-full h-[280px] md:mx-4 mt-4 md:mt-0",staticStyle:{background:"#d3d1d1"}},[e("img",{staticClass:"w-auto h-[200px] mx-auto",attrs:{alt:"",src:t.pict01}}),t._v(" "),e("div",{staticClass:"px-4 py-2 bg-white"},[e("div",{staticClass:"flex"},t._l(5,(function(t,l){return e("div",{key:l,staticClass:"mt-3 ml-3"},[e("img",{staticClass:"w-4 h-4 mr-1",attrs:{src:n(278)}})])})),0),t._v(" "),e("p",{staticClass:"w-full py-1 font-semibold text-start"},[t._v("Pastel Long Sleeve")]),t._v(" "),t._m(2)])])]),t._v(" "),e("div",{staticClass:"hidden w-1/5 md:flex"},[e("button",{staticClass:"ml-20"},[e("img",{staticClass:"w-20 h-20",attrs:{src:n(287)}})])])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"mt-6 mr-0 md:mt-0 md:mr-8 md:w-1/4"},[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center md:text-start text-gray-200",staticStyle:{"font-family":"'DynaPuff', cursive"}},[t._v("\n          Best Seller"),e("br"),t._v("Product\n        ")]),t._v(" "),e("p",{staticClass:"text-center md:text-start md:w-[320px] mt-4 text-gray-200"},[t._v("\n          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n          sed diam voluptua.\n        ")]),t._v(" "),e("div",{staticClass:"flex justify-center mt-6 md:mt-12 md:justify-start"},[e("button",{staticClass:"px-8 py-2 text-base font-bold text-white rounded-full",staticStyle:{color:"#654642",background:"#f7f2ed"}},[t._v("\n            See more\n          ")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex pb-2"},[e("p",{staticClass:"text-gray-500 line-through"},[t._v("$220")]),t._v(" "),e("p",{staticClass:"ml-3 font-semibold"},[t._v("$140")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex pb-2"},[e("p",{staticClass:"text-gray-500 line-through"},[t._v("$220")]),t._v(" "),e("p",{staticClass:"ml-3 font-semibold"},[t._v("$140")])])}],!1,null,null,null);e.default=component.exports},305:function(t,e,n){"use strict";n.r(e);n(290),n(37);var l={name:"OurProductComponent",data:function(){return{main:[{name:"Hot",link:"#"},{name:"On Sale",link:"#"},{name:"Trending now",link:"#"},{name:"Trending now",link:"#"},{name:"New arrival",link:"#"}],products:[{name:"Pastel Long Sleeve",picture:"pict03.png"},{name:"Pastel Long Sleeve",picture:"pict02.png"},{name:"Pastel Long Sleeve",picture:"pict01.png"},{name:"Pastel Long Sleeve",picture:"pict04.png"},{name:"Pastel Long Sleeve",picture:"pict02.png"},{name:"Pastel Long Sleeve",picture:"pict01.png"},{name:"Pastel Long Sleeve",picture:"pict02.png"},{name:"Pastel Long Sleeve",picture:"pict03.png"}]}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-4 md:mx-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("div",[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n        Our Product\n      ")]),t._v(" "),e("div",{staticClass:"flex flex-row justify-center mt-4"},t._l(t.main,(function(n,l){return e("ul",{key:l,staticClass:"hidden mx-2 my-0 mt-2 md:flex"},[e("a",{staticClass:"font-semibold uppercase text-md md:text-base hover:underline",attrs:{href:n.link,target:"_blank"}},[t._v(t._s(n.name))])])})),0),t._v(" "),e("div",{staticClass:"justify-center mt-4 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:mt-16"},t._l(t.products,(function(t,n){return e("div",{key:n},[e("ProductCardComponent",{attrs:{name:t.name,mypict:t.picture}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductCardComponent:n(297).default})},306:function(t,e,n){"use strict";n.r(e);n(37);var l={name:"DealOfDayComponent",data:function(){return{deal:[{day:"01",name:"Day"},{day:"08",name:"Hour"},{day:"09",name:"Minute"}]}}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"mx-4 md:mx-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("div",{staticClass:"flex flex-col justify-center mt-8 sm:flex-row md:mt-16"},[e("div",{staticClass:"hidden w-1/4 md:flex"}),t._v(" "),e("div",{staticClass:"mt-6 mr-0 md:mt-0 md:mr-8 md:w-1/2"},[e("h1",{staticClass:"text-[30px] md:text-[40px] text-center md:text-start",staticStyle:{"font-family":"'DynaPuff', cursive",color:"#654642"}},[t._v("\n        Deal Of The Day\n      ")]),t._v(" "),e("p",{staticClass:"text-center md:text-start md:w-[450px] mt-4"},[t._v("\n        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam\n        nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n        sed diam voluptua.\n      ")]),t._v(" "),e("div",{staticClass:"flex justify-center mb-6 md:justify-start"},t._l(t.deal,(function(t,n){return e("div",{key:n},[e("DayCardComponent",{attrs:{day:t.day,name:t.name}})],1)})),0),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"flex items-center justify-center"},[e("img",{staticClass:"h-[auto] w-auto",attrs:{src:n(286),alt:""}})]),t._v(" "),e("div",{staticClass:"hidden w-1/4 md:flex"})])])}),[function(){var t=this._self._c;return t("div",{staticClass:"flex justify-center mb-4 md:mb-0 md:justify-start"},[t("button",{staticClass:"px-8 py-2 text-base text-white uppercase rounded-full md:text-xl font-semibold",staticStyle:{background:"#654642"}},[this._v("\n          Shop now\n        ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DayCardComponent:n(298).default})},307:function(t,e,n){"use strict";n.r(e);var l={name:"FooterComponent"},r=n(46),component=Object(r.a)(l,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex flex-col mx-4 md:flex-row md:mx-0",staticStyle:{"font-family":"'Raleway', sans-serif"}},[e("div",{staticClass:"w-full md:w-2/5"},[e("h4",{staticClass:"text-base text-gray-200 md:text-xl",staticStyle:{"font-family":"'DynaPuff', cursive"}},[t._v("\n      WoilaTchogou237\n    ")]),t._v(" "),e("p",{staticClass:"mt-2 text-sm font-normal text-gray-200 md:mt-4"},[t._v("\n      Lorem ipsum dolor sit amet, consetetur sadipscing elitr.\n    ")])]),t._v(" "),e("div",{staticClass:"w-full mt-4 md:w-1/5 md:mt-0"},[e("h4",{staticClass:"text-base font-semibold text-gray-200 md:text-xl"},[t._v("\n      My Account\n    ")]),t._v(" "),e("ul",{staticClass:"mt-1 md:mt-4"},[e("p",{staticClass:"text-sm text-gray-200"},[t._v("Contact Us")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("abbasalimokolo@gmail.com")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("example@gmail.com")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("Call us: +123456")])])]),t._v(" "),e("div",{staticClass:"w-full mt-4 md:w-1/5 md:mt-0"},[e("h4",{staticClass:"text-base font-semibold text-gray-200 md:text-xl"},[t._v("About Us")]),t._v(" "),e("ul",{staticClass:"mt-1 md:mt-4"},[e("p",{staticClass:"text-sm text-gray-200"},[t._v("Sign in")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("Track Orders")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("Register Now")])])]),t._v(" "),e("div",{staticClass:"w-full mt-4 md:w-1/5 md:mt-0"},[e("h4",{staticClass:"text-base font-semibold text-gray-200 md:text-xl"},[t._v("Contact")]),t._v(" "),e("ul",{staticClass:"mt-1 md:mt-4"},[e("p",{staticClass:"text-sm text-gray-200"},[t._v("Customer Support")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("About us")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("Privacy")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-200"},[t._v("Terms and Conditions")])])])])}],!1,null,null,null);e.default=component.exports},310:function(t,e,n){"use strict";n.r(e);var l={name:"IndexPage",head:{title:"WoilaTchogou237  |  Accueil",link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=DynaPuff&display=swap"}]}},r=n(46),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticStyle:{background:"#f7f2ed"}},[e("div",{staticClass:"container mx-auto md:py-12"},[e("HeaderComponent"),t._v(" "),e("BrandComponent")],1)]),t._v(" "),e("div",{staticStyle:{background:"#654642"}},[e("div",{staticClass:"container py-6 mx-auto md:py-20"},[e("JoinCommunityComponent")],1)]),t._v(" "),e("div",{staticStyle:{background:"white"}},[e("div",{staticClass:"container pt-12 mx-auto mb-8 md:pt-24 md:mb-16"},[e("CollectionsComponent")],1)]),t._v(" "),e("div",{staticStyle:{background:"#654642"}},[e("div",{staticClass:"container py-6 mx-auto md:py-12"},[e("BestSellerComponent")],1)]),t._v(" "),e("div",{staticStyle:{background:"white"}},[e("div",{staticClass:"container pt-12 mx-auto mb-8 md:pt-24 md:mb-16"},[e("OurProductComponent")],1)]),t._v(" "),e("div",{staticClass:"mt-24 md:mt-0",staticStyle:{background:"#f7f2ed"}},[e("div",{staticClass:"container py-6 mx-auto md:py-12"},[e("DealOfDayComponent")],1)]),t._v(" "),e("div",{staticStyle:{background:"#654642"}},[e("div",{staticClass:"container py-6 mx-auto"},[e("FooterComponent")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HeaderComponent:n(300).default,BrandComponent:n(301).default,JoinCommunityComponent:n(302).default,CollectionsComponent:n(303).default,BestSellerComponent:n(304).default,OurProductComponent:n(305).default,DealOfDayComponent:n(306).default,FooterComponent:n(307).default})}}]);