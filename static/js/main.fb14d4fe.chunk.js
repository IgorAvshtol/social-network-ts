(this["webpackJsonpsocial-network-ts"]=this["webpackJsonpsocial-network-ts"]||[]).push([[0],{137:function(e,t,n){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__5TaNc",mainFoto:"ProfileInfo_mainFoto__2rNGT",contact:"ProfileInfo_contact__Okcll"}},159:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1Mb9G",posts:"MyPosts_posts__2G0xM"}},164:function(e,t,n){"use strict";n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return O})),n.d(t,"d",(function(){return h}));var r=n(19),s=n.n(r),a=n(30),c=n(89),i=n(8),o=n(31),u={users:[],pageSize:5,totalUsersCount:25,currentPage:1,isFatching:!0,followingInProgress:[],portionSize:10},l=function(e){return{type:"FOLLOW",userId:e}},j=function(e){return{type:"UNFOLLOW",userId:e}},d=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},b=function(e){return{type:"TOGGLE-IS-FETCHING",isFatching:e}},f=function(e,t){return{type:"TOGGLE-IS-FOLLOWING-PROGRESS",isFatching:e,userId:t}},p=function(e,t){return function(){var n=Object(a.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(b(!0)),r(d(e)),n.next=4,o.c.getUsers(e,t);case 4:a=n.sent,r(b(!1)),r({type:"SET-USERS",users:a.items}),r({type:"SET-TOTAL-USERS-COUNT",totalUsersCount:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},O=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(f(!0,e)),t.next=3,o.c.follow(e);case 3:0==t.sent.data.resultCode&&n(l(e)),n(f(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(a.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(f(!0,e)),t.next=3,o.c.unfollow(e);case 3:0==t.sent.data.resultCode&&n(j(e)),n(f(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case"UNFOLLOW":return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userId?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case"SET-USERS":return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case"TOGGLE-IS-FETCHING":return Object(i.a)(Object(i.a)({},e),{},{isFatching:t.isFatching});case"TOGGLE-IS-FOLLOWING-PROGRESS":return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFatching?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}}},165:function(e,t,n){},186:function(e,t,n){"use strict";t.a=n.p+"static/media/loader.e61adeab.png"},197:function(e,t,n){"use strict";t.a=n.p+"static/media/users.ea27fa10.jpg"},207:function(e,t,n){e.exports={item:"Post_item__3y8ny"}},31:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(201),s=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"38c3a417-44c2-476d-ad1b-ea982c1c54f6"}}),a={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return s.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return s.post("follow/".concat(e))},unfollow:function(e){return s.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolet method.Please, use profileAPI"),c.getProfile(e)}},c={getProfile:function(e){return s.get("profile/"+e)},getStatus:function(e){return s.get("profile/status/"+e)},updateStatus:function(e){return s.put("profile/status/",{status:e})},updateAvatar:function(e){var t=new FormData;return t.append("image",e),s.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return s.put("profile",e)}},i={me:function(){return s.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return s.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return s.delete("auth/login")}}},339:function(e,t,n){},384:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=(n(165),n(21)),c=n(19),i=n.n(c),o=n(30),u=n(89),l=n(8),j=n(31),d={posts:[{id:1,message:"Hi, how are you",likesCount:1},{id:2,message:"It's my first post",likesCount:1}],profile:{userId:0,lookingForAJob:!1,lookingForAJobDescription:"",fullName:"",aboutMe:"",contacts:{github:"",vk:"",facebook:"",instagram:"",twitter:"",website:"",youtube:"",mainLink:""},photos:{small:"",large:""}},status:""},b=function(e){return{type:"SET-STATUS",status:e}},f=function(e){return{type:"SET-PHOTO-SUCCESS",photos:e}},p=function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.c.getProfile(e);case 2:200===(r=t.sent).status&&n({type:"SET-USER-PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(l.a)(Object(l.a)({},e),{},{posts:[].concat(Object(u.a)(e.posts),[n])});case"SET-USER-PROFILE":return Object(l.a)(Object(l.a)({},e),{},{profile:t.profile});case"SET-STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"SET-PHOTO-SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{profile:Object(l.a)(Object(l.a)({},e.profile),{},{photos:t.photos})});default:return e}},h={messages:[{id:1,message:"Make America Great Again"},{id:2,message:"Show your gun"},{id:3,message:"Are you gansters?"}],dialogs:[{id:1,name:"Trump"},{id:2,name:"Biden"},{id:4,name:"Bush"},{id:3,name:"Abama"}]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(l.a)(Object(l.a)({},e),{},{messages:[].concat(Object(u.a)(e.messages),[{id:6,message:n}])});default:return e}},g=n(164),x=n(72),v={userId:10940,email:"",login:"",isAuth:!1,password:"",rememberMe:!1},S=function(e,t,n,r){return{type:"SET-USER-DATA",data:{id:e,email:t,login:n,isAuth:r}}},y=function(){return function(){var e=Object(o.a)(i.a.mark((function e(t){var n,r,s,a,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,s=r.id,a=r.email,c=r.login,t(S(s,a,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(l.a)(Object(l.a)({},e),t.data);default:return e}},I=n(202),E=n(200),P={initialized:!1},k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(l.a)(Object(l.a)({},e),{},{initialized:!0});default:return e}},C=Object(a.c)({profilePage:O,messagePage:m,usersPage:g.a,auth:w,form:E.a,app:k}),T=Object(a.e)(C,Object(a.a)(I.a)),_=n(33),A=n.n(_),N=n(78),F=n(79),M=n(90),U=n(87),L=(n(339),n(340),n(15)),D=n(186),G=n(1),R=function(){return Object(G.jsx)("div",{children:Object(G.jsx)("img",{src:D.a})})},B=n(162),z=n(386),J=n(387),H=n(391),W=n(392),Z=n(26),K=n(22),Q=n(55),q=n.n(Q),V=function(e){var t="/dislogs/"+e.id;return Object(G.jsx)("div",{className:q.a.dialog+" "+q.a.active,children:Object(G.jsx)(Z.b,{to:t,children:e.name})})},Y=function(e){return Object(G.jsx)("div",{className:q.a.dialog,children:e.message})},X=n(199),$=n(198),ee=n(108),te=n(74),ne=n.n(te),re=function(e){var t=e.input,n=e.meta,r=Object(ee.a)(e,["input","meta"]),s=n.touched&&n.error;return Object(G.jsxs)("div",{className:ne.a.formControl+" "+(s?ne.a.error:""),children:[Object(G.jsx)("div",{children:Object(G.jsx)("textarea",Object(l.a)(Object(l.a)({},t),r))}),s&&Object(G.jsx)("span",{children:n.error})]})},se=function(e){var t=e.input,n=e.meta,r=Object(ee.a)(e,["input","meta"]),s=n.touched&&n.error;return Object(G.jsxs)("div",{className:ne.a.formControl+""+(s?ne.a.error:""),children:[Object(G.jsx)("div",{children:Object(G.jsx)("input",Object(l.a)(Object(l.a)({},t),r))}),s&&Object(G.jsx)("span",{children:n.error})]})},ae=function(e){if(!e)return"Field is required"},ce=Object(X.a)({form:"dialogAddMessageForm"})((function(e){return Object(G.jsx)("div",{children:Object(G.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(G.jsx)("div",{children:Object(G.jsx)($.a,{placeholder:"Enter your message",name:"onNewMessageBody",component:re,validate:[ae]})}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{children:"Send"})})]})})})),ie=function(e){var t=e.messagePage.dialogs.map((function(e){return Object(G.jsx)(V,{name:e.name,id:e.id},e.id)})),n=e.messagePage.messages.map((function(e){return Object(G.jsx)(Y,{message:e.message},e.id)}));return Object(G.jsxs)("div",{className:q.a.dialogs,children:[Object(G.jsx)("div",{className:q.a.dialogsItems,children:t}),Object(G.jsxs)("div",{className:q.a.messages,children:[Object(G.jsx)("div",{children:n}),Object(G.jsx)(ce,{onSubmit:function(t){e.updateNewMessageBody(t.onNewMessageBody)}})]})]})},oe=function(e){return{isAuth:e.auth.isAuth}};var ue=Object(a.d)(Object(L.b)((function(e){return{messagePage:e.messagePage}}),(function(e){return{updateNewMessageBody:function(t){var n;e((n=t,console.log(n),{type:"SEND-MESSAGE",newMessageBody:n}))}}})),(function(e){var t=function(t){Object(M.a)(r,t);var n=Object(U.a)(r);function r(){return Object(N.a)(this,r),n.apply(this,arguments)}return Object(F.a)(r,[{key:"render",value:function(){var t=this.props,n=t.isAuth,r=Object(ee.a)(t,["isAuth"]);return n?Object(G.jsx)(e,Object(l.a)({},r)):Object(G.jsx)(K.a,{to:"/login"})}}]),r}(s.a.Component);return Object(L.b)(oe)(t)}))(ie),le=Object(X.a)({form:"login"})((function(e){return Object(G.jsx)("div",{children:Object(G.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(G.jsx)("div",{children:Object(G.jsx)($.a,{placeholder:"email",name:"email",component:se,validate:[ae]})}),Object(G.jsx)("div",{children:Object(G.jsx)($.a,{placeholder:"Password",name:"password",component:se,type:"password",validate:[ae]})}),Object(G.jsxs)("div",{children:[Object(G.jsx)($.a,{type:"checkbox",component:se,name:"remember me"})," remember me"]}),e.error&&Object(G.jsxs)("div",{className:ne.a.formSummaryError,children:[" ",e.error]}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{children:"Login"})})]})})})),je=Object(L.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(o.a)(i.a.mark((function r(s){var a,c;return i.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,j.a.login(e,t,n);case 2:0===(a=r.sent).data.resultCode?s(y()):(c=a.data.messages.length>0?a.data.messages[0]:"Some error",s(Object(x.a)("login",{_error:c})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?Object(G.jsx)(K.a,{to:"/profile"}):Object(G.jsxs)("div",{children:[Object(G.jsx)("h1",{children:"THIS LOGIN"}),Object(G.jsx)(le,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe)}})]})})),de=n(100),be=n(137),fe=n.n(be),pe=function(e){var t=Object(r.useState)(e.status),n=Object(de.a)(t,2),s=n[0],a=n[1],c=Object(r.useState)(!1),i=Object(de.a)(c,2),o=i[0],u=i[1];return Object(r.useEffect)((function(){a(e.status)}),[e.status]),Object(G.jsxs)("div",{children:[!o&&Object(G.jsx)("div",{children:Object(G.jsx)("span",{onClick:function(){u(!0)},children:e.status||"no status"})}),o&&Object(G.jsx)("div",{children:Object(G.jsx)("input",{onChange:function(e){a(e.currentTarget.value)},autoFocus:!0,onBlur:function(){u(!1),e.updateStatus(s)},value:s})})]})};var Oe,he=n(197),me=function(e){return Object(G.jsxs)("div",{children:[e.isOwner&&Object(G.jsx)("div",{children:Object(G.jsx)("button",{onClick:e.goToEditMode,children:"Edit"})}),Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"Full name"}),": ",e.profile.fullName]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"lookingForAJobDescription"}),": ",e.profile.lookingForAJobDescription]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"aboutMe"}),": ",e.profile.aboutMe]})]})},ge=n(92),xe=function(e){var t=Object(L.c)(),n=function(e){t(function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n,r){var s,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s=r().auth.userId,t.next=3,j.b.saveProfile(e);case 3:a=t.sent,console.log(e),0===a.data.resultCode&&n(p(s));case 6:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(e))},r=Object(L.d)((function(e){return e.profilePage.profile.fullName})),s=Object(L.d)((function(e){return e.profilePage.profile.lookingForAJobDescription})),a=Object(L.d)((function(e){return e.profilePage.profile.aboutMe}));return Object(G.jsx)("div",{children:Object(G.jsx)(ge.c,{initialValues:{fullName:r,lookingForAJobDescription:s,aboutMe:a},validate:function(e){return{}},onSubmit:function(t,r){var s=r.setSubmitting;n(t),s(!1),e.offEditMode()},children:function(e){var t=e.isSubmitting;return Object(G.jsxs)(ge.b,{children:[Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"Full name"}),": ",Object(G.jsx)(ge.a,{type:"fullName",name:"fullName"})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"lookingForAJobDescription"}),": ",Object(G.jsx)(ge.a,{type:"lookingForAJobDescription",name:"lookingForAJobDescription"})]}),Object(G.jsxs)("div",{children:[Object(G.jsx)("b",{children:"aboutMe"}),": ",Object(G.jsx)(ge.a,{type:"aboutMe",name:"aboutMe"})]}),Object(G.jsx)("button",{type:"submit",disabled:t,children:"Save"})]})}})})},ve=function(e){var t=Object(L.c)(),n=e.isOwner,s=Object(r.useState)(!1),a=Object(de.a)(s,2),c=a[0],u=a[1];return Object(G.jsxs)("div",{children:[Object(G.jsx)("div",{className:fe.a.descriptionBlock,children:Object(G.jsx)("img",{src:e.profile.photos.large||he.a,className:fe.a.mainFoto})}),n&&Object(G.jsx)("input",{type:"file",accept:".jpg, .jpeg, .png",onChange:function(e){var n;t((n=e.target.files[0],function(){var e=Object(o.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.b.updateAvatar(n);case 2:0===(r=e.sent).data.resultCode&&t(f(r.data.data.photos));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}}),c?Object(G.jsx)(xe,{offEditMode:function(){u(!1)}}):Object(G.jsx)(me,{goToEditMode:function(){u(!0)},profile:e.profile,isOwner:n}),Object(G.jsx)(pe,{status:e.status,updateStatus:e.updateStatus})]})},Se=n(207),ye=n.n(Se),we=function(e){return Object(G.jsxs)("div",{className:ye.a.item,children:[Object(G.jsx)("img",{src:"https://images-na.ssl-images-amazon.com/images/I/61IkrxQ9p8L._AC_SL1500_.jpg"}),e.message,Object(G.jsxs)("div",{children:[Object(G.jsx)("span",{children:"likes"})," ",e.likesCount]})]})},Ie=n(159),Ee=n.n(Ie),Pe=(Oe=10,function(e){if(e.length>Oe)return"Max lenght is ".concat(Oe," symbols")}),ke=Object(X.a)({form:"ProfileAddNewPostForm"})((function(e){return Object(G.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(G.jsx)("div",{children:Object(G.jsx)($.a,{name:"newPostText",component:re,placeholder:"enter new post",validate:[ae,Pe]})}),Object(G.jsx)("div",{children:Object(G.jsx)("button",{children:"Add post"})})]})})),Ce=function(e){var t=e.post.map((function(e){return Object(G.jsx)(we,{message:e.message,likesCount:e.likesCount})}));return Object(G.jsxs)("div",{className:Ee.a.postsBlock,children:[Object(G.jsx)("h2",{children:"My posts"}),Object(G.jsx)(ke,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(G.jsx)("div",{className:Ee.a.posts,children:t})]})},Te=Object(L.b)((function(e){return{post:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Ce),_e=function(e){return Object(G.jsxs)("div",{children:[Object(G.jsx)(ve,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner}),Object(G.jsx)(Te,{})]})},Ae=function(e){Object(M.a)(n,e);var t=Object(U.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorizedUserID),this.props.getUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(G.jsx)(G.Fragment,{children:Object(G.jsx)(_e,Object(l.a)(Object(l.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,isOwner:!this.props.match.params.userId}))})}}]),n}(s.a.Component),Ne=Object(a.d)(Object(L.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorizedUserID:e.auth.userId}}),{getUserProfile:p,getUserStatus:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.b.getStatus(e);case 2:r=t.sent,n(b(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(o.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(b(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),K.g)(Ae);var Fe=n(389),Me=n(390),Ue=n(388),Le=n(138),De=function(){var e=Object(L.d)((function(e){return e.auth.isAuth})),t=Object(L.d)((function(e){return e.auth.login})),n=Object(L.c)(),r=z.a.Header;return Object(G.jsx)(r,{className:"header",style:{backgroundColor:"#629e74"},children:Object(G.jsxs)(Fe.a,{children:[Object(G.jsx)(Me.a,{span:20,children:" "}),Object(G.jsxs)(Me.a,{span:4,children:[" ",e?Object(G.jsxs)("div",{children:[Object(G.jsx)(Ue.a,{style:{backgroundColor:"#87d068"},icon:Object(G.jsx)(H.a,{})}),t,"-",Object(G.jsx)(Le.a,{onClick:function(){n(function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.logout();case 2:0===e.sent.data.resultCode&&t(S(0,"","",!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}):Object(G.jsx)(Z.b,{to:"/login",children:"Login"})]})]})})},Ge=B.a.SubMenu,Re=z.a.Content,Be=z.a.Sider,ze=s.a.lazy((function(){return n.e(3).then(n.bind(null,395))})),Je=function(e){Object(M.a)(n,e);var t=Object(U.a)(n);function n(){return Object(N.a)(this,n),t.apply(this,arguments)}return Object(F.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(G.jsx)("div",{children:Object(G.jsxs)(z.a,{children:[Object(G.jsx)(De,{}),Object(G.jsxs)(z.a,{children:[Object(G.jsx)(Be,{width:200,className:"site-layout-background",children:Object(G.jsxs)(B.a,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%",borderRight:0},children:[Object(G.jsxs)(Ge,{icon:Object(G.jsx)(H.a,{}),title:"Main",children:[Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/profile",children:"Profile"})},"1"),Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/dialogs",children:"Dialogs"})},"2"),Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/users",children:"Users"})},"3"),Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/news",children:"News"})},"4"),Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/music",children:"Music"})},"5")]},"sub1"),Object(G.jsx)(Ge,{icon:Object(G.jsx)(W.a,{}),title:"More",children:Object(G.jsx)(B.a.Item,{children:Object(G.jsx)(Z.b,{to:"/setting",children:"Settings"})},"6")},"sub2")]})}),Object(G.jsxs)(z.a,{style:{padding:"0 24px 24px"},children:[Object(G.jsxs)(J.a,{style:{margin:"16px 0"},children:[Object(G.jsx)(J.a.Item,{children:"Home"}),Object(G.jsx)(J.a.Item,{children:"List"}),Object(G.jsx)(J.a.Item,{children:"App"})]}),Object(G.jsx)(Re,{className:"site-layout-background",style:{padding:24,margin:0,minHeight:280},children:Object(G.jsxs)(K.d,{children:[Object(G.jsx)(K.b,{exact:!0,path:"/",render:function(){return Object(G.jsx)(K.a,{to:"/profile"})}}),Object(G.jsx)(K.b,{path:"/dialogs",render:function(){return Object(G.jsx)(ue,{})}}),Object(G.jsx)(K.b,{path:"/profile/:userId?",render:function(){return Object(G.jsx)(Ne,{})}}),Object(G.jsx)(K.b,{path:"/users",render:(e=ze,function(t){return Object(G.jsx)(s.a.Suspense,{fallback:Object(G.jsx)("div",{children:"Loading..."}),children:Object(G.jsx)(e,Object(l.a)({},t))})})}),Object(G.jsx)(K.b,{path:"/login",render:function(){return Object(G.jsx)(je,{})}})]})})]})]})]})}):Object(G.jsx)(R,{});var e}}]),n}(s.a.Component),He=Object(L.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(y());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}})(Je);A.a.render(Object(G.jsx)(Z.a,{children:Object(G.jsx)(L.a,{store:T,children:Object(G.jsx)(He,{})})}),document.getElementById("root"))},55:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__7oQaZ",dialogsItems:"Dialogs_dialogsItems__m9MD6",active:"Dialogs_active__7QZTh",messages:"Dialogs_messages__pb9o8",message:"Dialogs_message__12dll"}},74:function(e,t,n){e.exports={formControl:"FormControls_formControl__1v_a6",error:"FormControls_error__3no1B",good:"FormControls_good__3RpN1",formSummaryError:"FormControls_formSummaryError__1K1bZ"}}},[[384,1,2]]]);
//# sourceMappingURL=main.fb14d4fe.chunk.js.map