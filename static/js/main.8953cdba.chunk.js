(this.webpackJsonpflame=this.webpackJsonpflame||[]).push([[0],{108:function(e,t,n){"use strict";t.a=n.p+"static/media/zoom.4bb0722e.jpg"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return i}));var r=n(132),a=r.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"89e2f250-2505-4a1c-a90b-397e41b71ddc"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method please profileApi object"),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},o={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},129:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(40),a=n(3),c="SEND-MESSAGE",s={dialogs:[{id:1,name:"Dallas"},{id:2,name:"Jack"},{id:3,name:"Joseph"},{id:4,name:"Eva"},{id:5,name:"Siberia"},{id:6,name:"Tokio"}],messages:[{id:1,message:"Tokio is calling Berlin"},{id:2,message:"Tokio is calling Dock"},{id:3,message:"Tokio is calling Albania"},{id:4,message:"Eva"},{id:5,message:"Siberia"},{id:6,message:"Tokio"}]},o=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type===c){var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:6,message:n}])})}return e}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__1_En6"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__2imOE",item:"Navbar_item__zmMk4",activeLink:"Navbar_activeLink__3etBE"}},167:function(e,t,n){},168:function(e,t,n){},197:function(e,t,n){},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return p})),n.d(t,"c",(function(){return j}));var r=n(3),a=n(55),c=(n(0),n(47)),s=n.n(c),o=n(90),i=n(1),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(i.jsxs)("div",{className:s.a.formControl+" "+(c?s.a.error:""),children:[Object(i.jsx)("div",{children:a}),c&&Object(i.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(i.jsxs)(d,Object(r.a)(Object(r.a)({},e),{},{children:[" ",Object(i.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))]}))},p=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(i.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(i.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(i.jsxs)("div",{children:[Object(i.jsx)(o.a,Object(r.a)({placeholder:e,name:t,validate:n,component:a},c))," ",s]})}},297:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(64),s=n.n(c),o=(n(167),n(35)),i=n(36),u=n(38),l=n(37),d=(n(168),n(16)),f=n(15),p=n.n(f),j=n(1),b=function(){return Object(j.jsxs)("nav",{className:p.a.nav,children:[Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(j.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(j.jsx)(d.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(j.jsx)("div",{className:"".concat(p.a.item," ").concat(p.a.active),children:Object(j.jsx)(d.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/news",activeClassName:p.a.activeLink,children:"News"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/music",activeClassName:p.a.activeLink,children:"Music"})}),Object(j.jsx)("div",{className:p.a.item,children:Object(j.jsx)(d.b,{to:"/settings",activeClassName:p.a.activeLink,children:"Settings"})})]})},h=n(10),g=n(18),O=n(8),m=n.n(O),v=n(14),x=n(40),w=n(3),P=n(12),_=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(w.a)(Object(w.a)({},e),r):e}))},C="FOLLOW",S="UNFOLLOW",y="SET_USERS",k="SET_CURRENT_PAGE",E="SET_TOTAL_USERS_COUNT",I="TOGGLE_IS_FETCHING",N="TOGGLE_IS_FOLLOWING_PROGRESS",U={users:[],pageSize:12,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},T=function(e){return{type:C,userId:e}},L=function(e){return{type:S,userId:e}},A=function(e){return{type:k,currentPage:e}},F=function(e){return{type:I,isFetching:e}},z=function(e,t){return{type:N,isFetching:e,userId:t}},M=function(){var e=Object(v.a)(m.a.mark((function e(t,n,r,a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(z(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(a(n)),t(z(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!0})});case S:return Object(w.a)(Object(w.a)({},e),{},{users:_(e.users,t.userId,"id",{followed:!1})});case y:return Object(w.a)(Object(w.a)({},e),{},{users:t.users});case k:return Object(w.a)(Object(w.a)({},e),{},{currentPage:t.currentPage});case E:return Object(w.a)(Object(w.a)({},e),{},{totalUsersCount:t.count});case I:return Object(w.a)(Object(w.a)({},e),{},{isFetching:t.isFetching});case N:return Object(w.a)(Object(w.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(x.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},D=n(55),G=n(69),B=n(98),H=n(71),J=n.n(H),V=n(133),W=n.n(V),K=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,o=void 0===s?10:s,i=Math.ceil(t/n),u=[],l=1;l<=i;l++)u.push(l);var d=Math.ceil(i/o),f=Object(r.useState)(1),p=Object(B.a)(f,2),b=p[0],h=p[1],g=(b-1)*o+1,O=b*o;return Object(j.jsxs)("div",{className:J.a.paginator,children:[b>1&&Object(j.jsx)("button",{onClick:function(){h(b-1)},children:"PREV"}),u.filter((function(e){return e>=g&&e<=O})).map((function(e){return Object(j.jsx)("span",{className:W()(Object(G.a)({},J.a.selectedPage,a===e),J.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>b&&Object(j.jsx)("button",{onClick:function(){h(b+1)},children:"NEXT"})]})},X=n(134),q=n.n(X),Y=n(108),Z=function(e){var t=e.user,n=(e.followingInProgress,e.unfollow),r=e.follow;return Object(j.jsxs)("div",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:Object(j.jsx)(d.b,{to:"/profile/"+t.id,children:Object(j.jsx)("img",{alt:"usr face",src:null!=t.photos.small?t.photos.small:Y.a,className:q.a.userPhoto})})}),Object(j.jsx)("div",{children:t.followed?Object(j.jsx)("button",{onClick:function(){n(t.id)},children:"Unfollow"}):Object(j.jsx)("button",{onClick:function(){r(t.id)},children:"Follow"})})]}),Object(j.jsxs)("span",{children:[Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:t.name}),Object(j.jsx)("div",{children:t.status})]}),Object(j.jsxs)("span",{children:[Object(j.jsx)("div",{children:"user.location.country"}),Object(j.jsx)("div",{children:"user.location.city"})]})]})]})},Q=["currentPage","totalUsersCount","pageSize","onPageChanged","users"],$=function(e){var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,a=e.onPageChanged,c=e.users,s=Object(D.a)(e,Q);return Object(j.jsxs)("div",{children:[Object(j.jsx)(K,{currentPage:t,onPageChanged:a,totalItemsCount:n,pageSize:r}),Object(j.jsx)("div",{children:c.map((function(e){return Object(j.jsx)(Z,{user:e,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow},e.id)}))})]})},ee=n(39),te=n(9),ne=n(135),re=Object(ne.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),ae=function(e){return e.usersPage.PageSize},ce=function(e){return e.usersPage.totalUsersCount},se=function(e){return e.usersPage.currentPage},oe=function(e){return e.usersPage.isFetching},ie=function(e){return e.usersPage.followingInProgress},ue=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(o.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[this.props.isFetching?Object(j.jsx)(ee.a,{}):null,Object(j.jsx)($,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.toggleFollowingProgress})]})}}]),n}(a.a.Component),le=Object(te.d)(Object(g.b)((function(e){return{users:re(e),pageSize:ae(e),totalUsersCount:ce(e),currentPage:se(e),isFetching:oe(e),followingInProgress:ie(e)}}),{follow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,P.d.follow.bind(P.d),T);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(v.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:M(n,e,P.d.unfollow.bind(P.d),L);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:A,toggleFollowingProgress:z,getUsers:function(e,t){return function(){var n=Object(v.a)(m.a.mark((function n(r){var a;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(F(!0)),r(A(e)),n.next=4,P.d.getUsers(e,t);case 4:a=n.sent,r(F(!1)),r((s=a.items,{type:y,users:s})),r((c=a.totalCount,{type:E,count:c}));case 8:case"end":return n.stop()}var c,s}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ue),de=n(94),fe=n.n(de),pe=function(e){return Object(j.jsxs)("header",{className:fe.a.header,children:[Object(j.jsx)("a",{href:"https://www.freepnglogos.com/pics/company-logo-ideas",title:"Image from freepnglogos.com",children:Object(j.jsx)("img",{src:"https://www.freepnglogos.com/uploads/company-logo-png/raise-company-logo-digital-product-demo-9.png",alt:"Raise company logo, digital product demo"})}),Object(j.jsx)("div",{className:fe.a.loginBlock,children:e.isAuth?Object(j.jsxs)("div",{children:[" ",e.login," - ",Object(j.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(j.jsx)(d.b,{to:"/login",children:"Login"})})]})},je=n(29),be="SET_USER_DATA",he="GET_CAPTCHA_URL_SUCCESS",ge={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Oe=function(e,t,n,r){return{type:be,payload:{userId:e,email:t,login:n,isAuth:r}}},me=function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r,a,c,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,c=r.login,s=r.email,t(Oe(a,s,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ve=function(e){return{type:he,payload:{captchaUrl:e}}},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:case he:return Object(w.a)(Object(w.a)({},e),t.payload);default:return e}},we=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(j.jsx)(pe,Object(w.a)({},this.props))}}]),n}(a.a.Component),Pe=Object(g.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(v.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(Oe(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(we),_e=n(130),Ce=n(66),Se=n(25),ye=n(47),ke=n.n(ye),Ee=Object(_e.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(j.jsxs)("form",{onSubmit:t,children:[Object(Se.c)("Email","email",[Ce.b],Se.a),Object(Se.c)("Password","password",[Ce.b],Se.a,{type:"password"}),Object(Se.c)(null,"rememberMe",[],Se.a,{type:"checkbox"},"remember me"),r&&Object(j.jsx)("img",{alt:"",src:r}),r&&Object(Se.c)("anti bot captcha","captcha",[Ce.b],Se.a,{}),n&&Object(j.jsx)("div",{className:ke.a.formSummaryError,children:n}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{children:"Login"})})]})})),Ie=Object(g.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(v.a)(m.a.mark((function a(c){var s,o;return m.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.login(e,t,n,r);case 2:0===(s=a.sent).data.resultCode?c(me()):(10===s.data.resultCode&&c(function(){var e=Object(v.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(ve(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(je.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(j.jsx)(h.a,{to:"/profile"}):Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Login"}),Object(j.jsx)(Ee,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})]})})),Ne="INITIALIZED_SUCCESS",Ue={initialized:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;return t.type===Ne?Object(w.a)(Object(w.a)({},e),{},{initialized:!0}):e},Le=n(97),Ae=n(129),Fe={},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe;return e},Me=n(137),Re=n(131),De=Object(te.c)({profilePage:Le.b,dialogsPage:Ae.a,sidebar:ze,usersPage:R,auth:xe,form:Re.a,app:Te}),Ge=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||te.d,Be=Object(te.e)(De,Ge(Object(te.a)(Me.a)));window.__store__=Be;var He=Be,Je=function(e){return function(t){return Object(j.jsx)(a.a.Suspense,{fallback:Object(j.jsx)(ee.a,{}),children:Object(j.jsx)(e,Object(w.a)({},t))})}},Ve=a.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),We=a.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),Ke=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(j.jsxs)("div",{className:"app-wrapper",children:[Object(j.jsx)(Pe,{}),Object(j.jsx)(b,{}),Object(j.jsxs)("div",{className:"app-wrapper-content",children:[Object(j.jsx)(h.b,{path:"/dialogs",render:Je(Ve)}),Object(j.jsx)(h.b,{path:"/profile/:userId?",render:Je(We)}),Object(j.jsx)(h.b,{path:"/users",render:function(){return Object(j.jsx)(le,{})}}),Object(j.jsx)(h.b,{path:"/login",render:function(){return Object(j.jsx)(Ie,{})}})]})]}):Object(j.jsx)(ee.a,{})}}]),n}(r.Component),Xe=Object(te.d)(h.f,Object(g.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(me());Promise.all([t]).then((function(){e({type:Ne})}))}}}))(Ke),qe=function(e){return Object(j.jsx)(d.a,{children:Object(j.jsx)(g.a,{store:He,children:Object(j.jsx)(Xe,{})})})};s.a.render(Object(j.jsx)(qe,{}),document.getElementById("root"))},39:function(e,t,n){"use strict";n(197);var r=n(1);t.a=function(e){return Object(r.jsx)("div",{class:"lds-hourglass"})}},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3oI2W",error:"FormsControls_error__9lcue",formSummaryError:"FormsControls_formSummaryError__1F2-S"}},66:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},71:function(e,t,n){e.exports={paginator:"Paginator_paginator__18P4_",pageNumber:"Paginator_pageNumber__xOsKi",selectedPage:"Paginator_selectedPage__3SIki"}},94:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"d",(function(){return O})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return v})),n.d(t,"e",(function(){return x})),n.d(t,"f",(function(){return w}));var r=n(8),a=n.n(r),c=n(14),s=n(40),o=n(3),i=n(29),u=n(12),l="ADD-POST",d="SET_USER_PROFILE",f="SET_STATUS",p="DELETE_POST",j="SAVE_PHOTO_SUCCESS",b={posts:[{id:1,message:"hi, how are you?",likesCount:12},{id:2,message:"this is a post?",likesCount:23},{id:3,message:"viva latina?",likesCount:3}],newPostText:"jetlag",profile:null,status:""},h=function(e){return{type:l,newPostText:e}},g=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(g(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:j,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n,r){var c,s;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r().auth.userId,t.next=3,u.b.saveProfile(e);case 3:if(0!==(s=t.sent).data.resultCode){t.next=8;break}n(O(c)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:s.data.messages[0]})),t.abrupt("return",Promise.reject(s.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:var n={id:5,message:t.newPostText,likesCount:0};return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case f:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case d:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case p:return Object(o.a)(Object(o.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!=t.postId}))});case j:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[297,1,2]]]);
//# sourceMappingURL=main.8953cdba.chunk.js.map