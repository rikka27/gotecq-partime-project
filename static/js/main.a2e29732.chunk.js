(this["webpackJsonpuser-management"]=this["webpackJsonpuser-management"]||[]).push([[0],{1055:function(t,e,n){},1057:function(t,e,n){},1058:function(t,e,n){},1103:function(t,e,n){},1130:function(t,e){},1139:function(t,e,n){},1144:function(t,e,n){},1148:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return C}));var a=n(26),r=n(22),i=n(29),c=n(30),s=n(166),u=n.n(s),o=n(0),l=n(28),d=n(101),p=n(15),f=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t,a;Object(r.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(a=e.call.apply(e,u()(t=[this]).call(t,c))).module="content-list",a.panelParam={primary:{articleId:{default:!0}},secondary:{},extension:{}},a}return Object(a.a)(n)}(d.b);function b(){return Object(p.jsx)(l.a,{to:"/content-list/list/detail"})}var j=n(4),h=n(9),m=n(494),v=n(10),x=n(165),O=Object(v.k)({ARTICLE_URL:function(){return"".concat(Object(x.a)(),"/article")}}),g={article:{all:function(){return O("ARTICLE_URL").build()},detail:function(t){return O("ARTICLE_URL").paths([t]).build()},filter:function(t){return O("ARTICLE_URL").paths(["filter"]).params({query:t}).build()}}},y={create:function(){return O("ARTICLE_URL").build()},delete:function(t){return O("ARTICLE_URL").paths([t]).build()},update:function(t){return O("ARTICLE_URL").paths([t]).build()}},w=n(58),N=n(495),k=n.n(N),R=n(61),A=n.n(R),L={article:{all:function(){var t=Object(w.a)(A.a.mark((function t(){var e;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Get(g.article.all());case 3:return e=t.sent,t.abrupt("return",null===e||void 0===e?void 0:e.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),detail:function(){var t=Object(w.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Get(g.article.detail(e));case 3:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",{});case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}(),filter:function(){var t=Object(w.a)(A.a.mark((function t(e){var n,a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Get(k()(n=g.article).call(n,e));case 3:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",[]);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}},M=(function(){var t=Object(w.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Post(y.create(),{data:e});case 3:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}(),function(){var t=Object(w.a)(A.a.mark((function t(e){var n;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Delete(y.delete(e));case 3:return n=t.sent,t.abrupt("return",null===n||void 0===n?void 0:n.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}(),function(){var t=Object(w.a)(A.a.mark((function t(e,n){var a;return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.Update(y.update(e),{data:n});case 3:return a=t.sent,t.abrupt("return",null===a||void 0===a?void 0:a.data);case 7:return t.prev=7,t.t0=t.catch(0),t.abrupt("return",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))}(),new v.a("article",Object(x.a)(),{withCredentials:!1})),B=(n(1103),function(t){var e=t.layoutService,n=Object(o.useState)(!0),a=Object(j.a)(n,2),r=a[0],i=a[1],c=Object(o.useState)(),s=Object(j.a)(c,2),u=s[0],l=s[1],d=e.getParam("primary");return Object(o.useEffect)((function(){i(!0);var t=!1,n=e.getParam("primary").articleId;return n&&L.article.detail(n).then((function(e){!1===t&&(l(e),i(!1))})).catch((function(t){i(!1)})),function(){t=!0}}),[null===d||void 0===d?void 0:d.articleId]),Object(p.jsxs)("div",{className:"article-wrap",children:[!0===r&&Object(p.jsx)(h.k.FullView,{}),Object(p.jsxs)("div",{className:"article",children:[Object(p.jsxs)("div",{className:"article-heading",children:[Object(p.jsxs)("div",{className:"article-heading-box",children:[Object(p.jsx)("h1",{className:"article-heading-title",children:null===u||void 0===u?void 0:u.title}),Object(p.jsx)("p",{className:"article-heading-introduce",children:null===u||void 0===u?void 0:u.introduce})]}),Object(p.jsx)("img",{src:null===u||void 0===u?void 0:u.thumbnail,alt:null===u||void 0===u?void 0:u.thumbnail,className:"article-heading-media"})]}),Object(p.jsx)("div",{className:"article-content",children:(null===u||void 0===u?void 0:u.content)&&Object(m.a)(null===u||void 0===u?void 0:u.content)})]})]})}),H=n(2),I=n(238),D=function(t){var e=t.data,n=t.onActive,a=t.active,r=e._id,i=e.title,c=e.introduce,s=e.thumbnail;return Object(p.jsxs)("div",{onClick:function(){n(e)},className:a?"post-paginate-item active":"post-paginate-item",children:[Object(p.jsx)("div",{className:"item-media",children:Object(p.jsx)("img",{src:s,alt:"",className:"item-media-img"})}),Object(p.jsxs)("div",{className:"item-content",children:[Object(p.jsx)("div",{className:"item-content-title truncate",children:i}),Object(p.jsxs)("p",{className:"item-content-text",children:[c," "]})]})]},r)},G=(n(1139),function(t){var e=t.layoutService,n=Object(o.useState)("https://magazine-api-server.herokuapp.com/api/article?limit=200"),a=Object(j.a)(n,2),r=a[0],i=a[1],c=Object(o.useState)(""),s=Object(j.a)(c,2),u=s[0],l=s[1],d=Object(o.useRef)(null);return Object(p.jsx)("div",{style:{height:"100%"},children:Object(p.jsx)(I.a,{Header:function(t){return Object(p.jsxs)(h.f,{children:[Object(p.jsx)(h.f.HeaderTitle,Object(H.a)(Object(H.a)({},I.b.title(Object(H.a)({},t))),{},{title:t.paginatedState.dataList.length+" articles"})),Object(p.jsx)(h.f.HeaderItem,{right:!0,children:Object(p.jsx)(h.f.ControlledHeaderSearchInput,Object(H.a)(Object(H.a)({},I.b.search(t)),{},{value:u,onSearch:function(t){t?(l(t),i("https://magazine-api-server.herokuapp.com/api/article/filter?query="+t)):(l(""),i("https://magazine-api-server.herokuapp.com/api/article?limit=200"))}}))})]})},onQuerySuccess:function(t){var n,a=e.getParam("primary");if(!a.articleId){var r=Object(H.a)(Object(H.a)({},a),{},{articleId:null===(n=t[0])||void 0===n?void 0:n._id});e.setPrimary("list",r).go()}},Row:D,baseDataURL:r,metadataURL:null,keyExtractor:function(t){return t._id},onActive:function(t){var n=e.getParam("primary"),a=Object(H.a)(Object(H.a)({},n),{},{articleId:t._id});e.setPrimary("list",a).go()},ref:d,onEmptyReset:function(){l(""),i("https://magazine-api-server.herokuapp.com/api/article?limit=200")}})})});function C(t){t.panel("list",G),t.panel("detail",B),t.route({path:"/content-list",title:"Blogle",exact:!0,secure:!1,component:b}),t.route({path:"/content-list/",title:"Blogle",exact:!1,secure:!1,component:f})}},1150:function(t,e,n){"use strict";n.r(e),n.d(e,"setup",(function(){return g}));var a=n(26),r=n(22),i=n(29),c=n(30),s=n(166),u=n.n(s),o=n(0),l=n(28),d=n(101),p=n(15),f=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(){var t,a;Object(r.a)(this,n);for(var i=arguments.length,c=new Array(i),s=0;s<i;s++)c[s]=arguments[s];return(a=e.call.apply(e,u()(t=[this]).call(t,c))).module="home",a.panelParam={primary:{},secondary:{},extension:{}},a}return Object(a.a)(n)}(d.a);function b(){return Object(p.jsx)(l.a,{to:"/home/landing"})}var j=n(4),h=n(497),m=n.n(h),v=n(183),x=(n(1144),[{id:"1",image:"https://images.unsplash.com/photo-1640729966219-0ef0b77c8901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",content:"Lorem ipsum"},{id:"2",image:"https://images.unsplash.com/photo-1583105838122-b206fbb5bd7c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80",content:"Lorem ipsum"},{id:"3",image:"https://images.unsplash.com/photo-1578702146799-f5b546e0f077?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",content:"Lorem ipsum"},{id:"4",image:"https://images.unsplash.com/photo-1571359821382-50025e52dc81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",content:"Lorem ipsum"},{id:"5",image:"https://images.unsplash.com/photo-1567972042114-5a1eaba28886?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1692&q=80",content:"Lorem ipsum"}]),O=function(){var t=Object(o.useState)((function(){var t;return u()(t=[]).call(t,x)})),e=Object(j.a)(t,1)[0];return Object(p.jsx)("div",{className:"landing-wrap",children:Object(p.jsx)(v.c,{children:null===e||void 0===e?void 0:m()(e).call(e,(function(t){var e=t.image,n=t.id;return Object(p.jsx)(v.b,{children:Object(p.jsx)("img",{src:e,alt:""})},n)}))})})};function g(t){t.panel("landing",O),t.route({path:"/home",title:"Blogle",exact:!0,secure:!1,component:b}),t.route({path:"/home/",title:"Blogle",exact:!1,secure:!1,component:f})}},1154:function(t,e,n){"use strict";n.r(e);n(502),n(0);var a=n(45),r=n.n(a),i=n(58),c=n(22),s=n(26),u=n(29),o=n(30),l=n(61),d=n.n(l),p=n(155),f=n(35),b=n(28),j=n(101),h=n(78),m=n(302),v=n(60),x=n(165),O=n(183),g=(n(1058),n(15)),y={auth:n(78),"content-list":n(1148),home:n(1150)},w=function(t){Object(u.a)(n,t);var e=Object(o.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).layoutManager=void 0,a.layoutManager=new j.d(new j.c),a}return Object(s.a)(n,[{key:"getInstalledModule",value:function(){return y}},{key:"getNavBar",value:function(){return Object(g.jsx)(h.NavBar,{})}},{key:"initiate",value:function(){var t=Object(i.a)(d.a.mark((function t(){var e=this;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setState({loading:!0}),t.next=3,Object(x.b)("app","/gotecq-partime-project/environment.json",!0);case 3:return this.setupAnalysisAndMonitor(),this.setupModule(),this.history=Object(v.a)({basename:""}),t.next=8,Object(m.b)(this.history,this.moduleRegistry.reducers(),this.moduleRegistry.sagas());case 8:this.store=t.sent,this.layoutManager.setDispatchFunction(this.store.dispatch),this.setState({loading:!1},(function(){e.initAppDone()}));case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"setupModuleDone",value:function(){var t=this,e=new h.Module;m.a.setup(e,this.moduleRegistry.entities()),this.moduleRegistry.register("@entity",e),this.layoutManager.setComponentGetter((function(e,n){return t.moduleRegistry.getPanel(e,n)}))}},{key:"renderApp",value:function(){return Object(g.jsx)(h.AppBoundary,{children:Object(g.jsx)(f.a,{store:this.store,children:Object(g.jsx)(p.a,{history:this.history,children:Object(g.jsx)(h.AppWrapper,{layoutManager:this.layoutManager,navbar:O.a,allRoutes:this.moduleRegistry.routes(),children:Object(g.jsxs)(b.d,{children:[Object(g.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(g.jsx)(b.a,{to:"/home"})}}),this.renderRoute(),Object(g.jsx)(b.b,{component:h.PageError404})]})})})})})}},{key:"initAppDone",value:function(){}},{key:"render",value:function(){return this.state.loading?Object(g.jsx)("div",{children:"Loading, please wait"}):this.renderApp()}}]),n}(h.BaseApplication);r.a.render(Object(g.jsx)(w,{}),document.getElementById("root"))},165:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return s}));var a=n(10),r=Object(a.i)(),i=r.getConfig,c=r.loadAsyncConfig,s=i("app.blg.API_URL")},183:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return f}));n(0);var a=n(1167),r=n(1168),i=n(78),c=(n(1055),n(15)),s=[{key:"home",title:"Home",link:"/home",icon:function(){return Object(c.jsx)(a.a,{})}},{key:"content",title:"List Post",link:"/content-list",icon:function(){return Object(c.jsx)(r.a,{})}}];function u(){return Object(c.jsxs)(i.NavBar,{children:[Object(c.jsx)(i.NavBar.BranchNameWithDrawer,{menu:s,showIconDrawer:!0,domain:["gotecq.user-management","gotecq.base"]}),Object(c.jsx)(i.NavBar.HomeButton,{})]})}i.NavBar,n(1057);var o=n(2),l=n(14),d=["children","className"],p=function(t){var e=t.children,n=t.className,a=Object(l.a)(t,d);return Object(c.jsx)("div",Object(o.a)(Object(o.a)({className:n?"slider-item ".concat(n):"slider-item"},a),{},{children:e}))},f=function(t){var e=t.children,n=t.className;return Object(c.jsxs)("div",{className:n?"slider ".concat(n):"slider",children:[Object(c.jsx)("div",{className:"slider-container",children:e}),Object(c.jsx)("p",{className:"slider-data",children:"Lorem ipsum dolor sit amet."}),Object(c.jsxs)("div",{className:"slider-progress",children:[Object(c.jsx)("span",{className:"slider-progress-text",children:"01"}),Object(c.jsx)("span",{className:"slider-amount",children:"/ 20"})]})]})}},502:function(t,e,n){},593:function(t,e){},595:function(t,e){},658:function(t,e){},660:function(t,e){},678:function(t,e){},679:function(t,e){}},[[1154,1,2]]]);
//# sourceMappingURL=main.a2e29732.chunk.js.map