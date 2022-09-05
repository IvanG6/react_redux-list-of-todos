(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){"use strict";c.r(t);var n,a=c(7),s=c.n(a),r=c(4),i=c(16),o=c(6),l=c(14),d=c(15);!function(e){e.START_LOADING="START_LOADING",e.FINISH_LOADING="FINISH_LOADING"}(n||(n={}));var u,j=function(){return{type:n.START_LOADING}},O=function(){return{type:n.FINISH_LOADING}},h=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.START_LOADING:return!0;case n.FINISH_LOADING:return!1;default:return e}};!function(e){e.SET_TODO="SET_TODO"}(u||(u={}));var b,f=function(e){return{type:u.SET_TODO,payload:e}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return t.type===u.SET_TODO?t.payload:e},m=c(8),p=c(5),v=c.n(p);!function(e){e.FETCH_TODOS="FETCH_TODOS",e.FETCH_TODOS_SUCCESS="FETCH_TODOS_SUCCESS",e.FETCH_TODOS_ERROR="FETCH_TODOS_ERROR"}(b||(b={}));var N,y=function(){return function(){var e=Object(m.a)(v.a.mark((function e(t){var c,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t({type:b.FETCH_TODOS}),e.next=4,fetch("https://jsonplaceholder.typicode.com/todos");case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,t({type:b.FETCH_TODOS_SUCCESS,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),t({type:b.FETCH_TODOS_ERROR,payload:"Error data"});case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===b.FETCH_TODOS_SUCCESS?t.payload:e},S=Object(o.combineReducers)({loading:h,todoId:x,todo:T}),g=Object(o.createStore)(S,Object(l.composeWithDevTools)(Object(o.applyMiddleware)(d.a))),E=c(3),_=(c(25),c(26),c(0));!function(e){e.ALL="all",e.ACTIVE="active",e.COMPLETED="completed"}(N||(N={}));var C=r.c,D=c(12),I=c.n(D),L=c(1),A=function(e){var t=e.todos,c=e.selectUser;return Object(L.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:"#"}),Object(L.jsx)("th",{children:Object(L.jsx)("span",{className:"icon",children:Object(L.jsx)("i",{className:"fas fa-check"})})}),Object(L.jsx)("th",{children:"Title"}),Object(L.jsx)("th",{children:" "})]})}),Object(L.jsx)("tbody",{children:t.map((function(e){return Object(L.jsxs)("tr",{"data-cy":"todo",className:I()(e.completed?"has-text-success has-background-success-light":"has-text-danger has-background-danger-light"),children:[Object(L.jsx)("td",{className:"is-vcentered",children:Object(L.jsx)("span",{className:"icon is-size-5",children:Object(L.jsx)("i",{className:I()("fas",e.completed?"fa-check-square":"fa-ban")})})}),Object(L.jsx)("td",{className:"is-vcentered is-expanded",children:e.title}),Object(L.jsx)("td",{className:"has-text-right is-vcentered",children:Object(L.jsx)("button",{"data-cy":"selectButton",className:"button is-outlined is-primary",type:"button",onClick:function(){c(e.userId,e.id)},children:"Show ".concat(e.userId)})})]},e.id)}))})]})},k=function(e){var t=e.changeFilteredBy,c=e.changeQuery,n=e.query;return Object(L.jsxs)("form",{className:"field has-addons",children:[Object(L.jsx)("p",{className:"control",children:Object(L.jsx)("span",{className:"select",children:Object(L.jsxs)("select",{"data-cy":"statusSelect",onChange:function(e){return function(e){t(e.target.value)}(e)},children:[Object(L.jsx)("option",{value:N.ALL,children:"All"}),Object(L.jsx)("option",{value:N.ACTIVE,children:"Active"}),Object(L.jsx)("option",{value:N.COMPLETED,children:"Completed"})]})})}),Object(L.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(L.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:n,onChange:function(e){c(e.target.value)}}),Object(L.jsx)("span",{className:"icon is-left",children:Object(L.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(L.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(L.jsx)("button",{"data-cy":"clearSearchButton",type:"button",className:"delete has-text",onClick:function(){return c("")}})})]})]})},F=(c(28),function(){return Object(L.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(L.jsx)("div",{className:"Loader__content"})})});function w(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=1e3,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var H=function(e){var t=e.todo,c=e.selectedUser,n=e.selectUser,a=Object(_.useState)(null),s=Object(E.a)(a,2),r=s[0],i=s[1];return Object(_.useEffect)((function(){var e=function(){var e=Object(m.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w("/users/".concat(c));case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(L.jsx)("div",{className:"modal-background"}),r?Object(L.jsxs)("div",{className:"modal-card",children:[Object(L.jsxs)("header",{className:"modal-card-head",children:[Object(L.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===t||void 0===t?void 0:t.id)}),Object(L.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return n(0,0)}})]}),Object(L.jsxs)("div",{className:"modal-card-body",children:[Object(L.jsx)("p",{className:"block","data-cy":"modal-title",children:null===t||void 0===t?void 0:t.title}),Object(L.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==t&&void 0!==t&&t.completed?Object(L.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(L.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(L.jsx)("a",{href:"mailto:".concat(null===r||void 0===r?void 0:r.email),children:null===r||void 0===r?void 0:r.name})]})]})]}):Object(L.jsx)(F,{})]})},R=function(){var e=C((function(e){return e.todo})),t=Object(_.useState)(0),c=Object(E.a)(t,2),n=c[0],a=c[1],s=Object(_.useState)(e),i=Object(E.a)(s,2),o=i[0],l=i[1],d=Object(_.useState)("all"),u=Object(E.a)(d,2),h=u[0],b=u[1],x=Object(_.useState)(""),m=Object(E.a)(x,2),p=m[0],v=m[1],T=C((function(e){return e.loading})),S=C((function(e){return e.todoId})),g=Object(r.b)();Object(_.useEffect)((function(){g(j()),g(y()),g(O())}),[]);var D=function(e){return e.toLowerCase().includes(p.toLowerCase())};Object(_.useEffect)((function(){switch(h){case N.ALL:l(e.filter((function(e){return D(e.title)})));break;case N.ACTIVE:l(e.filter((function(e){return!e.completed&&D(e.title)})));break;case N.COMPLETED:l(e.filter((function(e){return e.completed&&D(e.title)})))}}),[h,p,e]);var I=function(e,t){a(e),g(f(t))},w=e.find((function(e){return e.id===S}));return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)("div",{className:"section",children:Object(L.jsx)("div",{className:"container",children:Object(L.jsxs)("div",{className:"box",children:[Object(L.jsx)("h1",{className:"title",children:"Todos:"}),Object(L.jsx)("div",{className:"block",children:Object(L.jsx)(k,{changeFilteredBy:function(e){b(e)},changeQuery:function(e){v(e)},query:p})}),Object(L.jsxs)("div",{className:"block",children:[T&&Object(L.jsx)(F,{}),Object(L.jsx)(A,{todos:o,selectUser:I})]})]})})}),!!n&&Object(L.jsx)(H,{todo:w,selectedUser:n,selectUser:I})]})},U=function(){return Object(L.jsx)(r.a,{store:g,children:Object(L.jsx)(i.a,{children:Object(L.jsx)(R,{})})})};s.a.render(Object(L.jsx)(U,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.72deaea2.chunk.js.map