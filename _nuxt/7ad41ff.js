(window.webpackJsonp=window.webpackJsonp||[]).push([[14,7,8],{265:function(t,e,r){"use strict";r.r(e);var n={props:["contacts"],data:function(){return{}}},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2"},[r("div",{staticClass:"text-left max-w-xl px-6"},[r("h2",{staticClass:"\n        font-general-medium\n        text-2xl text-primary-dark\n        dark:text-primary-light\n        mt-8\n        mb-8\n      "},[t._v("\n      Contact details\n    ")]),t._v(" "),r("ul",{staticClass:"font-general-regular"},t._l(t.contacts,(function(e){return r("li",{key:e.id,staticClass:"flex"},[r("i",{staticClass:"w-5 text-gray-500 dark:text-gray-400 mr-4",attrs:{"data-feather":e.icon}}),t._v(" "),r("a",{staticClass:"text-lg mb-4 text-ternary-dark dark:text-ternary-light",class:"mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":"",attrs:{href:e.name.includes(234)?"tel:"+e.name:e.name.includes(".com")?"mailto:"+e.name:"#","aria-label":"Website and Phone"}},[t._v("\n          "+t._s(e.name)+"\n        ")])])})),0)])])}),[],!1,null,"7dbf7837",null);e.default=component.exports},266:function(t,e,r){"use strict";r.r(e);var n={components:{Button:r(134).default},data:function(){return{}}},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full md:w-1/2"},[r("div",{staticClass:"\n      leading-loose\n      max-w-xl\n      m-4\n      p-7\n      bg-secondary-light\n      dark:bg-primary-dark\n      shadow-xl\n      text-left\n    "},[r("p",{staticClass:"\n        font-general-medium\n        text-primary-dark\n        dark:text-primary-light\n        text-2xl\n        mb-8\n      "},[t._v("\n      Contact Form\n    ")]),t._v(" "),r("form",{staticClass:"font-general-regular space-y-7",on:{submit:function(t){t.preventDefault}}},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("div",{staticClass:"mt-6"},[r("Button",{staticClass:"\n            px-4\n            py-2.5\n            text-ternary-dark\n            tracking-wider\n            bg-white\n            hover:bg-ternary-light\n            duration-500\n          ",attrs:{title:"Send Message",type:"submit","aria-label":"Send Message"}})],1)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"name"}},[t._v("Full Name")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            dark:border-secondary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-primary-dark\n            border-dashed\n            shadow-sm\n            text-md\n            focus:ring-1\n            dark:focus:ring-secondary-dark\n          ",attrs:{id:"name",name:"name",type:"text",required:"",placeholder:"Your Name","aria-label":"Name"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"email"}},[t._v("Email")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            border-gray-300\n            dark:border-secondary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-primary-dark\n            border-dashed\n            shadow-sm\n            text-mdfocus:ring-1\n            dark:focus:ring-secondary-dark\n          ",attrs:{id:"email",name:"email",type:"text",required:"",placeholder:"Please enter your Email","aria-label":"Email"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"subject"}},[t._v("Subject")]),t._v(" "),r("input",{staticClass:"\n            w-full\n            px-5\n            py-2\n            dark:border-secondary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-primary-dark\n            border-dashed\n            shadow-sm\n            text-md\n            focus:ring-1\n            dark:focus:ring-secondary-dark\n          ",attrs:{id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-6"},[r("label",{staticClass:"block text-lg text-primary-dark dark:text-primary-light mb-2",attrs:{for:"message"}},[t._v("Message")]),t._v(" "),r("textarea",{staticClass:"\n            w-full\n            px-5\n            py-2\n            dark:border-secondary-dark\n            border-opacity-50\n            text-primary-dark\n            dark:text-secondary-light\n            bg-ternary-light\n            dark:bg-primary-dark\n            border-dashed\n            shadow-sm\n            text-md\n            focus:ring-1\n            dark:focus:ring-secondary-dark\n          ",attrs:{id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"}})])}],!1,null,"31bf08bb",null);e.default=component.exports},272:function(t,e,r){"use strict";r.r(e);r(20),r(38);var n=r(32),l=r.n(n),d={scrollToTop:!0,data:function(){return{contacts:[{id:1,name:"Ikeja, Lagos, Nigeria",icon:"map-pin"},{id:2,name:"chiisom03@gmail.com",icon:"mail"},{id:3,name:"+234 7088 898 247",icon:"phone"}]}},mounted:function(){l.a.replace()},updated:function(){l.a.replace()}},c=r(9),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"\n    container\n    mx-auto\n    flex flex-col\n    md:flex-row md:py-10 md:mt-20\n  "},[r("ContactDetails",{attrs:{contacts:t.contacts}}),t._v(" "),r("ContactForm")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ContactDetails:r(265).default,ContactForm:r(266).default})}}]);