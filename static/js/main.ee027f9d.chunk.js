(this["webpackJsonpreact-21-22"]=this["webpackJsonpreact-21-22"]||[]).push([[0],{19:function(e,t,n){e.exports={button__delete:"ContactList_button__delete__3Zboc"}},20:function(e,t,n){e.exports={input__filter:"Filter_input__filter__1qs6r"}},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n(0),a=n.n(c),o=n(4),i=n.n(o),u=n(3),b=(n(32),n(33),n(34),n(9)),l=n(19),j=n.n(l),s=n(6),f=Object(s.a)("items/add",(function(e){return{payload:e}})),O=Object(s.a)("items/remove",(function(e){return{payload:e}})),d=Object(s.a)("filter/addFilter",(function(e){return{payload:e}})),p=function(){var e=Object(u.c)((function(e){return e})),t=e.items,n=e.filter,c=Object(u.b)();return 0===t.length?null:Object(r.jsx)("ul",{children:function(e,t){return e.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}))}(t,n).map((function(e){var t=e.id,n=e.name,a=e.phone;return Object(r.jsxs)("li",{children:[n," : ",a,Object(r.jsx)("button",{onClick:function(){c(O(t))},className:j.a.button__delete,children:"Delete"})]},t)}))})},m=n(16),h=(n(35),n(41));var x=function(){var e=Object(u.c)((function(e){return e})).items,t=Object(u.b)(),n=Object(c.useState)(""),a=Object(m.a)(n,2),o=a[0],i=a[1],l=Object(c.useState)(""),j=Object(m.a)(l,2),s=j[0],O=j[1],d=function(e){var t=e.target,n=t.name,r=t.value;switch(n){case"name":i(r);break;case"phone":O(r);break;default:console.log("Sorry, we are not have "+n+".")}},p=function(){return o&&s?function(e,t){var n=!!e.find((function(e){return e.name===t}));return n&&alert("Contact is already exist"),!n}(e,o):(Object(b.b)("Some filed is empty"),!1)};return Object(r.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),p()){var n={id:Object(h.a)(),name:o,phone:s};return i(""),O(""),function(e){return t(f(e))}(n)}},children:[Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Enter name",value:o,onChange:d}),Object(r.jsx)("input",{type:"tel",name:"phone",placeholder:"Enter phone number",value:s,onChange:d}),Object(r.jsx)("button",{type:"submit",children:"Add Contact"})]})},v=n(20),_=n.n(v),y=function(){var e=Object(u.c)((function(e){return e})).filter,t=Object(u.b)();return Object(r.jsx)("input",{className:_.a.input__filter,type:"text",name:"filter",value:e,onChange:function(e){var n,r=e.target;return n=r.value,t(d(n))},placeholder:"Enter name for Search"})};n(36);var C,g=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h2",{children:"From Contact"}),Object(r.jsx)(x,{}),Object(r.jsx)("h2",{children:"Contacts list"}),Object(r.jsx)(y,{}),Object(r.jsx)(p,{}),Object(r.jsx)(b.a,{})]})},S=n(2),w=n(21),k=n(10),E=n(17),F=Object(s.b)([],(C={},Object(k.a)(C,f,(function(e,t){var n=t.payload;return[].concat(Object(E.a)(e),[n])})),Object(k.a)(C,O,(function(e,t){var n=t.payload;return Object(E.a)(e.filter((function(e){return e.id!==n})))})),C)),D=Object(s.b)("",Object(k.a)({},d,(function(e,t){return t.payload}))),L=Object(S.combineReducers)({items:F,filter:D}),J=Object(S.createStore)(L,Object(w.composeWithDevTools)());i.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(u.a,{store:J,children:Object(r.jsx)(g,{})})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.ee027f9d.chunk.js.map