(this["webpackJsonpphoto-website"]=this["webpackJsonpphoto-website"]||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(10),s=c.n(a),i=c(5),j=c(1),o=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/",children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(i.b,{to:"/About",children:"About"})})]})})})},u=function(){return Object(j.jsx)("div",{className:"footer",children:"Shawn Lin\xa9"})},h=c(6),b=c.n(h),p=c(9),l=c(4),d=function(e){var t=e.search,c=e.setInput;return Object(j.jsxs)("div",{className:"search",children:[Object(j.jsx)("input",{className:"input",onChange:function(e){c(e.target.value)},type:"text"}),Object(j.jsx)("button",{onClick:t,children:"Search"})]})},x=function(e){var t=e.data;return Object(j.jsx)("div",{children:Object(j.jsxs)("div",{className:"picture",children:[Object(j.jsx)("p",{children:t.photographer}),Object(j.jsx)("div",{className:"imageContainer",children:Object(j.jsx)("img",{src:t.src.large,alt:""})}),Object(j.jsxs)("p",{children:["Download Image ",Object(j.jsx)("a",{target:"_blank",href:t.src.large,children:"Click here"})]})]})})},O=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(null),s=Object(l.a)(a,2),i=s[0],o=s[1],u=Object(n.useState)(1),h=Object(l.a)(u,2),O=h[0],f=h[1],v=Object(n.useState)(""),m=Object(l.a)(v,2),g=m[0],w=m[1],k="563492ad6f91700001000001beb0e07a344548b4880d791647d4e71e",A="https://api.pexels.com/v1/curated?page=1&per_page=15",N="https://api.pexels.com/v1/search?query=".concat(g,"&per_page=15&page=1"),y=function(){var e=Object(p.a)(b.a.mark((function e(t){var c,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(2),e.next=3,fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:k}});case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,o(n.photos);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(p.a)(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=""===c?"https://api.pexels.com/v1/curated?page=".concat(O,"&per_page=15"):"https://api.pexels.com/v1/search?query=".concat(c,"&per_page=15&page=").concat(O),f(O+1),e.next=4,fetch(t,{method:"GET",headers:{Accept:"application/json",Authorization:k}});case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,o(i.concat(r.photos));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){y(A)}),[]),Object(n.useEffect)((function(){y(""===g?A:N)}),[g]),Object(j.jsxs)("div",{style:{minHeight:"100vh"},children:[Object(j.jsx)(d,{search:function(){w(c)},setInput:r}),Object(j.jsx)("div",{className:"pictures",children:i&&i.map((function(e){return Object(j.jsx)(x,{data:e})}))}),Object(j.jsx)("div",{className:"morePicture",children:Object(j.jsx)("button",{onClick:S,children:" Load More"})})]})},f=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"About"})})},v=c(2);c(17);var m=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(o,{}),Object(j.jsxs)(v.c,{children:[Object(j.jsx)(v.a,{path:"/",exact:!0,element:Object(j.jsx)(O,{})}),Object(j.jsx)(v.a,{path:"/about",exact:!0,element:Object(j.jsx)(f,{})})]}),Object(j.jsx)(u,{})]})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(i.a,{children:Object(j.jsx)(m,{})})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.4f061c53.chunk.js.map