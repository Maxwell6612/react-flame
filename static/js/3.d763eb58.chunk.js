(this.webpackJsonpflame=this.webpackJsonpflame||[]).push([[3],{310:function(t,e,s){t.exports={descriptionBlock:"ProfileInfo_descriptionBlock__3cd8Y",mainPhoto:"ProfileInfo_mainPhoto__1Fgjo",contact:"ProfileInfo_contact__1N3gp"}},311:function(t,e,s){t.exports={content:"MyPosts_content__2BWhL",item:"MyPosts_item__HnIIR",postsBlock:"MyPosts_postsBlock__3BujM",posts:"MyPosts_posts__22lkl"}},312:function(t,e,s){t.exports={content:"Post_content__lEA_2",item:"Post_item__2R1qu"}},313:function(t,e,s){"use strict";s.r(e);var c=s(3),o=s(38),i=s(39),n=s(43),r=s(41),a=s(0),j=s.n(a),l=s(108),u=s(42),b=s(139),d=s(71),h=s(26),p=s(1),O=Object(b.a)({form:"profile-add-post"})((function(t){return Object(p.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(p.jsx)("div",{children:Object(h.c)("Your post","newPostText",[d.b],h.a)}),Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"Add post"})})]})})),f=s(311),x=s.n(f),m=s(312),v=s.n(m),g=function(t){return Object(p.jsxs)("div",{className:v.a.item,children:[Object(p.jsx)("img",{src:"https://cs16planet.ru/steam-avatars/images/avatar3219.jpg",alt:""}),t.message,Object(p.jsxs)("div",{children:[Object(p.jsx)("span",{children:"like"}),t.likesCount]})]})},P=function(t){var e=Object(u.a)(t.posts).reverse().map((function(t){return Object(p.jsx)(g,{message:t.message,likesCount:t.likesCount},t.id)}));return Object(p.jsxs)("div",{className:x.a.postsBlock,children:[Object(p.jsx)("h3",{children:"My posts "}),Object(p.jsx)(O,{onSubmit:function(e){t.addPost(e.newPostText)}}),Object(p.jsx)("div",{className:x.a.posts,children:e})]})},k=j.a.memo(P),_=s(19),S=Object(_.b)((function(t){return{posts:t.profilePage.posts}}),{addPost:l.a.addPostActionCreator})(k),y=s(107),I=s(310),M=s.n(I),A=s(40),C=function(t){var e=Object(a.useState)(!1),s=Object(y.a)(e,2),c=s[0],o=s[1],i=Object(a.useState)(t.status),n=Object(y.a)(i,2),r=n[0],j=n[1];Object(a.useEffect)((function(){j(t.status)}),[t.status]);return Object(p.jsxs)("div",{children:[!c&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Status: "}),Object(p.jsx)("span",{onDoubleClick:function(){o(!0)},children:t.status||"----no status"})]}),c&&Object(p.jsx)("div",{children:Object(p.jsx)("input",{onChange:function(t){j(t.currentTarget.value)},autoFocus:!0,onBlur:function(){o(!1),t.updateStatus(r)},value:r})})]})},N=s(117),w=s(50),F=s.n(w),B=Object(b.a)({form:"edit-profile"})((function(t){var e=t.handleSubmit,s=t.profile,c=t.error;return Object(p.jsxs)("form",{onSubmit:e,children:[Object(p.jsx)("div",{children:Object(p.jsx)("button",{children:"save"})}),c&&Object(p.jsx)("div",{className:F.a.formSummaryError,children:c}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",Object(h.c)("Full name","fullName",[],h.a)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",Object(h.c)("","lookingForAJob",[],h.a,{type:"checkbox"})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),":",Object(h.c)("My professional skills","lookingForAJobDescription",[],h.b)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),":",Object(h.c)("About me","aboutMe",[],h.b)]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(s.contacts).map((function(t){return Object(p.jsx)("div",{className:M.a.contact,children:Object(p.jsxs)("b",{children:[t,": ",Object(h.c)(t,"contacts."+t,[],h.a)]})},t)}))]})]})})),J=function(t){var e=t.profile,s=t.isOwner,c=t.goToEditMode;return Object(p.jsxs)("div",{children:[s&&Object(p.jsx)("div",{children:Object(p.jsx)("button",{onClick:c,children:"edit"})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Full name"}),": ",e.fullName]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Looking for a job"}),": ",e.lookingForAJob?"yes":"no"]}),e.lookingForAJob&&Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"My professional skills"}),": ",e.lookingForAJobDescription]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"About me"}),": ",e.aboutMe]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("b",{children:"Contacts"}),": ",Object.keys(e.contacts).map((function(t){return Object(p.jsx)(T,{contactTitle:t,contactValue:e.contacts[t]},t)}))]})]})},T=function(t){var e=t.contactTitle,s=t.contactValue;return Object(p.jsxs)("div",{className:M.a.contact,children:[Object(p.jsx)("b",{children:e}),": ",s]})},U=function(t){var e=t.profile,s=t.status,c=t.updateStatus,o=t.isOwner,i=t.savePhoto,n=t.saveProfile,r=Object(a.useState)(!1),j=Object(y.a)(r,2),l=j[0],u=j[1];if(!e)return Object(p.jsx)(A.a,{});return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:M.a.descriptionBlock,children:[Object(p.jsx)("img",{alt:"",src:e.photos.large||N.a,className:M.a.mainPhoto}),o&&Object(p.jsx)("input",{type:"file",onChange:function(t){t.target.files&&t.target.files.length&&i(t.target.files[0])}}),l?Object(p.jsx)(B,{initialValues:e,profile:e,onSubmit:function(t){n(t).then((function(){u(!1)}))}}):Object(p.jsx)(J,{goToEditMode:function(){u(!0)},profile:e,isOwner:o}),Object(p.jsx)(C,{status:s,updateStatus:c})]})})},D=function(t){return Object(p.jsxs)("div",{children:[Object(p.jsx)(U,{savePhoto:t.savePhoto,isOwner:t.isOwner,profile:t.profile,status:t.status,saveProfile:t.saveProfile,updateStatus:t.updateStatus}),Object(p.jsx)(S,{})]})},E=s(10),z=s(9),L=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(o.a)(this,s),e.apply(this,arguments)}return Object(i.a)(s,[{key:"refreshProfile",value:function(){var t=+this.props.match.params.userId;t||(t=this.props.authorizedUserId)||this.props.history.push("/login"),t?(this.props.getUserProfile(t),this.props.getStatus(t)):console.error("Id should exists in URI params or in state ('authorizedUserId')")}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(p.jsx)(D,Object(c.a)(Object(c.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))}}]),s}(j.a.Component);e.default=Object(z.d)(Object(_.b)((function(t){return{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),{getUserProfile:l.d,getStatus:l.c,updateStatus:l.g,savePhoto:l.e,saveProfile:l.f}),E.g)(L)}}]);
//# sourceMappingURL=3.d763eb58.chunk.js.map