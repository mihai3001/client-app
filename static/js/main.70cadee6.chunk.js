(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{486:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n(0),r=n.n(c),i=n(15),o=n.n(i),s=n(63),l=n(16),u=n(24),b=n(29),j=n.n(b),d=n(46),h=n(14),O=n(47),x=n.n(O),f=n(105),p=n(106);function m(){var e=Object(f.a)(["\n  display: inline-block;\n  width: 50px;\n  height: 50px;\n  border: 3px solid rgba(195, 195, 195, 0.6);\n  border-radius: 50%;\n  border-top-color: #636767;\n  animation: spin 1s ease-in-out infinite;\n  -webkit-animation: spin 1s ease-in-out infinite;\n  @keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n  @-webkit-keyframes spin {\n    to {\n      -webkit-transform: rotate(360deg);\n    }\n  }\n"]);return m=function(){return e},e}function g(){var e=Object(f.a)(["\n  height: 60vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return g=function(){return e},e}var v=p.a.div(g()),y=p.a.div(m()),w=n(538),k=n(540),C=n(521),S=n(524),L=n(527),P=n(531),N=n(530),I=n(526),W=n(528),_=n(539),E=n(529),T=[{id:"id",label:"Id",minWidth:100},{id:"name",label:"Name",minWidth:170},{id:"symbol",label:"Symbol",minWidth:100}],F=Object(C.a)({root:{width:"100%"},container:{maxHeight:700}});function H(e){var t=e.rows,n=F(),c=r.a.useState(0),i=Object(h.a)(c,2),o=i[0],s=i[1],l=r.a.useState(10),u=Object(h.a)(l,2),b=u[0],j=u[1];return Object(a.jsxs)(S.a,{className:n.root,children:[Object(a.jsx)(I.a,{className:n.container,children:Object(a.jsxs)(L.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(E.a,{children:T.map((function(e){return Object(a.jsx)(N.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(a.jsx)(P.a,{children:t.slice(o*b,o*b+b).map((function(e){return Object(a.jsx)(E.a,{hover:!0,role:"checkbox",tabIndex:-1,children:T.map((function(t){var n=e[t.id];return Object(a.jsx)(N.a,{align:t.align,children:n},t.id)}))},e.code)}))})]})}),Object(a.jsx)(_.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:b,page:o,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){j(+e.target.value),s(0)}})]})}var B=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),o=Object(h.a)(i,2),s=o[0],l=o[1],b=Object(c.useState)([]),O=Object(h.a)(b,2),f=O[0],p=O[1],m=Object(c.useState)(""),g=Object(h.a)(m,2),C=g[0],S=g[1],L=Object(c.useState)(!0),P=Object(h.a)(L,2),N=P[0],I=P[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,x.a.get("https://api.coingecko.com/api/v3/coins/list").then((function(e){r(e.data),p(e.data),I(!1)}));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);return Object(c.useEffect)((function(){console.log(s,C),p(n.filter((function(e){return-1!==e.name.toLowerCase().indexOf(s.toLocaleLowerCase())&&-1!==e.symbol.toLowerCase().indexOf(C.toLocaleLowerCase())})))}),[s,C]),Object(a.jsx)("div",{children:N?Object(a.jsx)(v,{children:Object(a.jsx)(y,{})}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:"0 1 auto",width:"100%"},children:[Object(a.jsx)(w.a,{id:"combo-box-demo",options:n.map((function(e){return e.name})),getOptionLabel:function(e){return e},freeSolo:!0,onChange:function(e,t){l(t||"")},style:{width:300,height:100,margin:"20px"},renderInput:function(e){return Object(a.jsx)(k.a,Object(u.a)(Object(u.a)({},e),{},{label:"Name",variant:"outlined",value:s,onChange:function(e){return l(e.target.value)}}))}}),Object(a.jsx)(w.a,{id:"combo-box-demo",options:n.map((function(e){return e.symbol})),onChange:function(e,t){S(t||"")},getOptionLabel:function(e){return e},freeSolo:!0,style:{width:200,height:100,margin:"20px"},renderInput:function(e){return Object(a.jsx)(k.a,Object(u.a)(Object(u.a)({},e),{},{label:"Symbol",variant:"outlined",value:C,onChange:function(e){return S(e.target.value)}}))}})]}),Object(a.jsx)(H,{rows:f})]})})},D=[{id:"id",label:"Id",minWidth:100},{id:"name",label:"Name",minWidth:170},{id:"year_established",label:"Year Established",minWidth:100},{id:"country",label:"Country",minWidth:150},{id:"trust_score",label:"Trust score",minWidth:100},{id:"trust_score_rank",label:"Trust score rank",minWidth:100}],M=Object(C.a)({root:{width:"100%"},container:{maxHeight:700}});function R(e){var t=e.rows,n=M(),c=r.a.useState(0),i=Object(h.a)(c,2),o=i[0],s=i[1],l=r.a.useState(10),u=Object(h.a)(l,2),b=u[0],j=u[1];return Object(a.jsxs)(S.a,{className:n.root,children:[Object(a.jsx)(I.a,{className:n.container,children:Object(a.jsxs)(L.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(E.a,{children:D.map((function(e){return Object(a.jsx)(N.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(a.jsx)(P.a,{children:t.slice(o*b,o*b+b).map((function(e){return Object(a.jsx)(E.a,{hover:!0,role:"checkbox",tabIndex:-1,children:D.map((function(t){var n=e[t.id];return Object(a.jsx)(N.a,{align:t.align,children:n},t.id)}))},e.code)}))})]})}),Object(a.jsx)(_.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:b,page:o,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){j(+e.target.value),s(0)}})]})}var q=function(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!0),o=Object(h.a)(i,2),s=o[0],l=o[1],b=Object(c.useState)([]),O=Object(h.a)(b,2),f=O[0],p=O[1],m=Object(c.useState)(""),g=Object(h.a)(m,2),C=g[0],S=g[1],L=Object(c.useState)(""),P=Object(h.a)(L,2),N=P[0],I=P[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.coingecko.com/api/v3/exchanges?per_page=250").then((function(e){r(e.data),p(e.data),l(!1)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}()}),[]);return Object(c.useEffect)((function(){!function(){console.log(C,N,n);var e=n.filter((function(e){return e.name&&-1!==e.name.toLowerCase().indexOf(C.toLocaleLowerCase())&&e.country&&-1!==e.country.toLocaleLowerCase().indexOf(N.toLocaleLowerCase())}));p(e)}()}),[C,N]),Object(a.jsx)("div",{children:s?Object(a.jsx)(v,{children:Object(a.jsx)(y,{})}):Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",flex:"0 1 auto",width:"100%"},children:[Object(a.jsx)(w.a,{id:"combo-box-demo",options:n.map((function(e){return e.name})),getOptionLabel:function(e){return e},freeSolo:!0,onChange:function(e,t){S(t||"")},style:{width:300,height:100,margin:"20px"},renderInput:function(e){return Object(a.jsx)(k.a,Object(u.a)(Object(u.a)({},e),{},{label:"Name",variant:"outlined",value:C,onChange:function(e){return S(e.target.value)}}))}}),Object(a.jsx)(w.a,{id:"combo-box-demo",options:n.map((function(e){return e.country?e.country:""})),getOptionLabel:function(e){return e},freeSolo:!0,onChange:function(e,t){S(t||"")},style:{width:300,height:100,margin:"20px"},renderInput:function(e){return Object(a.jsx)(k.a,Object(u.a)(Object(u.a)({},e),{},{label:"Country",variant:"outlined",value:N,onChange:function(e){return I(e.target.value)}}))}})]}),Object(a.jsx)(R,{rows:f})]})})},G=n(109),J=n(158),z=n(160),Y=n.n(z),A=n(536),K=n(159),Q=n.n(K),U=n(532),V=[{id:"id",label:"Id",minWidth:100},{id:"delete",label:"delete",minwidth:50}],X=Object(C.a)({root:{width:"100%"},container:{maxHeight:700}});function Z(e){var t=e.rows,n=e.setCoinsOnGraph,c=X(),i=r.a.useState(0),o=Object(h.a)(i,2),s=o[0],l=o[1],u=r.a.useState(10),b=Object(h.a)(u,2),j=b[0],d=b[1];return Object(a.jsxs)(S.a,{className:c.root,children:[Object(a.jsx)(I.a,{className:c.container,children:Object(a.jsxs)(L.a,{stickyHeader:!0,"aria-label":"sticky table",children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(E.a,{children:V.map((function(e){return Object(a.jsx)(N.a,{align:e.align,style:{minWidth:e.minWidth},children:e.label},e.id)}))})}),Object(a.jsx)(P.a,{children:t.slice(s*j,s*j+j).map((function(e){return Object(a.jsxs)(E.a,{hover:!0,role:"checkbox",tabIndex:-1,children:[Object(a.jsx)(N.a,{children:e.label},e),Object(a.jsx)(N.a,{children:Object(a.jsx)(U.a,{onClick:function(){return n(t.filter((function(t){return t.label!==e.label})))},children:Object(a.jsx)(Q.a,{})})},e)]},e.label)}))})]})}),Object(a.jsx)(_.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:j,page:s,onChangePage:function(e,t){l(t)},onChangeRowsPerPage:function(e){d(+e.target.value),l(0)}})]})}function $(){var e=Object(c.useState)([]),t=Object(h.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(!1),o=Object(h.a)(i,2),s=o[0],l=o[1],b=Object(c.useState)([]),O=Object(h.a)(b,2),f=O[0],p=O[1],m=Object(c.useState)({}),g=Object(h.a)(m,2),C=g[0],S=g[1],L=Object(c.useState)(""),P=Object(h.a)(L,2),N=P[0],I=P[1];Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("https://api.coingecko.com/api/v3/coins/list").then((function(e){r(e.data.map((function(e){return e.id})))}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}l(!0),function(){e.apply(this,arguments)}(),l(!1)}),[]);var W=(new Date).getTime(),_=function(){var e=Object(d.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n.indexOf(t)<0)){e.next=3;break}return alert("Invalid value"),e.abrupt("return");case 3:if(t in C){e.next=14;break}return e.prev=4,e.next=7,x.a.get("https://api.coingecko.com/api/v3/coins/".concat(t,"/market_chart/range?vs_currency=usd&from=").concat(1104537600,"&to=").concat(W)).then((function(e){var n=C;n[t]={label:t,prices:{label:t,datums:e.data.prices.map((function(e){return{x:e[0],y:e[1]}}))},volumes:{label:t,datums:e.data.total_volumes.map((function(e){return{x:e[0],y:e[1]}}))},market_caps:{label:t,datums:e.data.market_caps.map((function(e){return{x:e[0],y:e[1]}}))}},S(n),0===f.filter((function(e){return e.label===t})).length&&p([].concat(Object(G.a)(f),[n[t]]))}));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(4),alert(e.t0);case 12:e.next=16;break;case 14:0===f.filter((function(e){return e.label===t})).length&&p([].concat(Object(G.a)(f),[C[t]]));case 16:console.log(C),console.log(f);case 18:case"end":return e.stop()}}),e,null,[[4,9]])})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){({labels:[],datasets:[]})}),[f]);var E=["aliceblue","aqua","azure","beige","brown","black","blue","blueviolet","coral","cyan","darkblue","forestgreen","fuchsia","gold","darkturquoise"],T=[],F={datasets:f.map((function(e){for(var t=E[Math.floor(Math.random()*E.length)];t in T;)t=E[Math.floor(Math.random()*E.length)];return T.push(t),{label:e.label,data:e.prices.datums,pointBorderColor:t}}))};return Object(a.jsx)("div",{children:s?Object(a.jsx)(v,{children:Object(a.jsx)(y,{})}):Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(a.jsx)("div",{style:{width:"100%",height:"400px"},children:Object(a.jsx)(J.Scatter,{data:F,width:"800px",height:"200px"})}),Object(a.jsx)("div",{children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginTop:"80px"},children:[Object(a.jsx)(w.a,{id:"combo-box-demo",options:n,getOptionLabel:function(e){return e},freeSolo:!0,onChange:function(e,t){I(t||"")},style:{width:300,height:100,margin:"20px"},renderInput:function(e){return Object(a.jsx)(k.a,Object(u.a)(Object(u.a)({},e),{},{label:"Crypto Name",variant:"outlined",value:N,onChange:function(e){return I(e.target.value)}}))}}),Object(a.jsx)(A.a,{variant:"contained",color:"primary",onClick:function(){return _(N)},style:{maxHeight:"50px",marginTop:"20px"},children:Object(a.jsx)(Y.a,{})})]})}),Object(a.jsx)("div",{children:Object(a.jsx)(Z,{rows:f,setCoinsOnGraph:p})})]})})}var ee=n(34),te=n(161),ne=Object(l.o)((function(e){e.location;return Object(a.jsx)(r.a.Fragment,{children:Object(a.jsxs)(ee.Navbar,{expand:"lg",dark:!0,bg:"dark",mb:"3",children:[Object(a.jsx)(ee.Navbar.Brand,{href:"#",children:"Crypto"}),Object(a.jsx)(ee.Navbar.Toggler,{target:"#navbarColor1"}),Object(a.jsxs)(ee.Collapse,{navbar:!0,id:"navbarColor1",children:[Object(a.jsx)(ee.Navbar.Nav,{mr:"auto",children:["Coins","Exchanges","Charts"].map((function(e){return Object(a.jsx)(te.LinkContainer,{to:"/".concat(e.toLowerCase()),children:Object(a.jsx)(ee.Nav.ItemLink,{children:e})},e)}))}),Object(a.jsxs)(ee.Form,{inline:!0,my:"2 lg-0",children:[Object(a.jsx)(ee.Form.Input,{type:"search",placeholder:"Search",mr:"sm-2"}),Object(a.jsx)(ee.Button,{outline:!0,info:!0,my:"2 sm-0",children:"Search"})]})]})]})})}));var ae=function(){return Object(a.jsx)("div",{children:Object(a.jsxs)(s.BrowserRouter,{children:[Object(a.jsx)(ne,{}),Object(a.jsx)("div",{children:Object(a.jsxs)(l.g,{children:[Object(a.jsx)(l.d,{path:"/coins",component:B}),Object(a.jsx)(l.d,{path:"/exchanges",component:q}),Object(a.jsx)(l.d,{path:"/charts",component:$}),Object(a.jsx)(l.d,{path:"/",children:Object(a.jsx)("div",{children:"home"})})]})})]})})},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,542)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};n(485);o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(ae,{})}),document.getElementById("root")),ce()}},[[486,1,2]]]);
//# sourceMappingURL=main.70cadee6.chunk.js.map