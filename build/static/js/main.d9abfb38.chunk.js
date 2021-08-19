(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{72:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(36),c=s.n(a),r=s(3),i=s(9),o=(s(73),s(1)),l=function(){return Object(o.jsx)("section",{className:"gradient landing",children:Object(o.jsxs)("section",{className:"audioAndArt index stream radius padding",children:[Object(o.jsx)("section",{children:Object(o.jsx)("h1",{className:"darkGrey bigFont",children:"Welcome to Motifs!"})}),Object(o.jsxs)("section",{className:"indexBtns",children:[Object(o.jsx)("div",{className:"centerText margin-right",children:Object(o.jsx)(r.b,{to:"/signup",children:Object(o.jsx)("button",{type:"submit",className:"trackBtn padding-top padding-bottom",children:"Create Account"})})}),Object(o.jsx)("div",{className:"centerText margin-left",children:Object(o.jsx)(r.b,{to:"/login",children:Object(o.jsx)("button",{type:"submit",className:"trackBtn padding-top padding-bottom",children:"Login"})})})]})]})})},d=s(2),j=s.n(d),u=s(6),p=s(17),b=s(11),m=s(4),h=Object(n.createContext)(),g=function(e){var t=e.children,s=Object(n.useState)((function(){return JSON.parse(localStorage.getItem("user context"))||{}})),a=Object(m.a)(s,2),c=a[0],r=a[1],i=Object(n.useCallback)((function(e){r(e),localStorage.setItem("user context",JSON.stringify(e))}));return Object(o.jsx)(h.Provider,{value:{loggedInUserContext:c,setLoggedInUserContext:i},children:t})},O=function(e){return Object(o.jsxs)("div",{className:"postField margin-top2",children:[Object(o.jsx)("label",{htmlFor:e.for,children:e.label}),Object(o.jsx)("input",{className:e.inputClass,type:e.inputType,id:e.inputId,name:e.inputName,value:e.value,onChange:e.onChange,required:!0})]})},f=function(e){return Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)("label",{htmlFor:e.for,children:e.label}),Object(o.jsx)("input",{className:e.inputClass,type:e.inputType,id:e.inputId,name:e.inputName,value:e.value,onChange:e.onChange,required:!0})]})},x=s(74),v=function(){return Object(o.jsx)("nav",{className:"navigation padding-top padding-bottom border-right flex column",children:Object(o.jsx)("div",{children:Object(o.jsx)(r.b,{to:"/",children:Object(o.jsxs)("div",{className:"flex column center padding-bottom padding-left padding-right border-bottom feedLogout",children:[Object(o.jsx)(x.a,{size:24}),Object(o.jsx)("span",{className:"",children:"Motifs"})]})})})})},k=s(8),N=s.n(k),w=function(){var e=Object(n.useContext)(h).setLoggedInUserContext,t=Object(n.useState)({userName:"",email:"",password:"",confirmPassword:"",instagram:"",twitter:"",cashAppLink:"",profilePicture:"https://res.cloudinary.com/drs4pvb1e/image/upload/v1629230843/Motifs/smiley_djkqgy.png"}),s=Object(m.a)(t,2),a=s[0],c=s[1],r=Object(n.useState)(!1),l=Object(m.a)(r,2),d=l[0],g=l[1];function x(e){var t=e.target,s=t.name,n=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},s,n)))}var k=function(){var t=Object(u.a)(j.a.mark((function t(s){var n,c,r,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("hello from createAccount"),s.preventDefault(),t.next=4,N.a.post("https://motifs-server.herokuapp.com/auth/registerUser",a,{method:"POST",headers:{"Content-Type":"application/json"}});case 4:n=t.sent,console.log(n),c=n.data,r=c.refreshtoken,i=c.accesstoken,r?(e({refreshtoken:r,accesstoken:i}),g(!0)):console.log("whoops");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return console.log("hello from signup"),d?Object(o.jsx)(i.a,{to:"/feed"}):Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsxs)("div",{className:"stream audioAndArt index radius",children:[Object(o.jsx)("div",{className:"formHead padding",children:Object(o.jsx)("h1",{className:"darkGrey margin-top2",children:"Create an account"})}),Object(o.jsxs)("form",{className:"uploadForm padding",onSubmit:k,children:[Object(o.jsxs)("div",{className:"field50 flex",children:[Object(o.jsx)(O,{for:"userName",label:"User Name",inputClass:"padding-top padding-bottom",inputType:"text",inputId:"userName",inputName:"userName",value:a.username,onChange:function(e){return x(e)}}),Object(o.jsx)(O,{for:"email",label:"Email",inputClass:"padding-top padding-bottom",inputType:"email",inputId:"email",inputName:"email",value:a.email,onChange:function(e){return x(e)}})]}),Object(o.jsxs)("div",{className:"postField margin-top passwordField",children:[Object(o.jsx)(f,{for:"password",label:"Password",inputClass:"padding-top padding-bottom",inputType:"password",inputId:"password",inputName:"password",value:a.password,onChange:function(e){return x(e)}}),Object(o.jsx)(f,{for:"confirmPassword",label:"Confirm Password",inputClass:"padding-top padding-bottom",inputType:"password",inputId:"confirmPassword",inputName:"confirmPassword",value:a.confirmPassword,onChange:function(e){return x(e)}})]}),Object(o.jsxs)("div",{className:"field50 flex",children:[Object(o.jsx)(O,{for:"instagram",label:"Instagram",inputClass:"padding-top padding-bottom",inputType:"instagram",inputId:"instagram",inputName:"instagram",value:a.instagram,onChange:function(e){return x(e)}}),Object(o.jsx)(O,{for:"twitter",label:"Twitter",inputClass:"padding-top padding-bottom",inputType:"twitter",inputId:"twitter",inputName:"twitter",value:a.twitter,onChange:function(e){return x(e)}})]}),Object(o.jsx)("div",{className:"field50 flex column",children:Object(o.jsx)(O,{for:"cashAppLink",label:"Donation Link (Cash app, Venmo or paypal)",inputClass:"padding-top padding-bottom",inputType:"cashAppLink",inputId:"cashAppLink",inputName:"cashAppLink",value:a.cashAppLink,onChange:function(e){return x(e)}})}),Object(o.jsx)("div",{className:"postField margin-top2 margin-bottom2",children:Object(o.jsx)("button",{type:"submit",className:"trackBtn padding-top padding-bottom",value:"Upload",children:"Sign Up"})})]})]})})]})},C=function(e){return Object(o.jsx)("div",{className:"artSec padding",children:Object(o.jsx)("img",{src:e.imgLink,alt:"Cover Art"})})},I=function(e){return Object(o.jsx)(r.b,{to:e.link,children:Object(o.jsxs)("button",{className:e.classes,type:"submit",onClick:e.onClick,value:e.value,children:[e.svg,Object(o.jsx)("span",{className:"hidden margin-left",children:e.name})]})})},S=function(e){return Object(o.jsxs)("button",{className:e.classes,type:"submit",onClick:e.onClick,children:[e.svg,Object(o.jsx)("span",{className:"hidden margin-left",children:e.name})]})},A=function(e){return Object(o.jsx)("a",{href:e.link,target:e.target,children:Object(o.jsxs)("button",{className:e.classes,type:"submit",onClick:e.onClick,value:e.value,children:[e.svg,Object(o.jsx)("span",{className:"hidden margin-left",children:e.name})]})})},y=s(75),B=s(76),U=s(77),L=s(78),P=s(79),F=s(80),_=function(e){var t=Object(n.useContext)(h).loggedInUserContext,s=String(e.loggedInUserId)===String(e.userWhoCreatedPost),a=Object(n.useState)(),c=Object(m.a)(a,2),r=c[0],i=c[1],l=Object(n.useState)(),d=Object(m.a)(l,2),p=d[0],b=d[1];return Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:N.a.get("https://motifs-server.herokuapp.com/getSinglePost/".concat(e.id),{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}}).then((function(e){var t=e.data;i(t.user.bookmarks.includes(t.post[0]._id)),b(t.user.following.includes(t.artist[0]._id))})).catch((function(){return console.log("failed to fetch from url")}));case 1:case"end":return s.stop()}}),s)})))()}),[e.id]),Object(o.jsxs)("div",{className:"trackBtns",children:[Object(o.jsx)("div",{className:"formBtn margin-left",children:Object(o.jsx)("button",{className:r?"trackBtn clicked":"trackBtn",onClick:function(){return Object(u.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.post("https://motifs-server.herokuapp.com/post/likePost/".concat(e.id,"?_method=PUT"),{},{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}});case 2:case"end":return s.stop()}}),s)})))(),void i(!r)},children:r?Object(o.jsx)(y.a,{size:24,weight:"regular",color:"red"}):Object(o.jsx)(y.a,{size:24,weight:"regular"})})}),Object(o.jsx)("div",{className:"formBtn margin-left",children:Object(o.jsx)(S,{classes:p?"trackBtn clicked":"trackBtn",svg:p?Object(o.jsx)(B.a,{size:24}):Object(o.jsx)(U.a,{size:24}),name:p?"Unfollow":"Follow",onClick:function(){return Object(u.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.post("https://motifs-server.herokuapp.com/post/followArtist/".concat(e.userWhoCreatedPost,"?_method=PUT"),{},{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}});case 2:case"end":return s.stop()}}),s)})))(),void b(!p)}})}),Object(o.jsx)("div",{className:"formBtn margin-left",children:Object(o.jsx)(A,{classes:"trackBtn",svg:Object(o.jsx)(L.a,{size:24}),name:"CashApp",target:"_blank",link:e.cashAppLink})}),Object(o.jsx)("div",{className:"formBtn margin-left",children:Object(o.jsx)(I,{classes:"trackBtn",svg:Object(o.jsx)(P.a,{size:24}),name:"Profile",link:"/profileOfArtist/".concat(e.userWhoCreatedPost)})}),s&&Object(o.jsx)("form",{className:"formBtn margin-left",children:Object(o.jsx)(I,{classes:"trackBtn",svg:Object(o.jsx)(F.a,{size:24}),name:"Delete",onClick:function(){return Object(u.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,N.a.post("https://motifs-server.herokuapp.com/post/deletePost/".concat(e.id,"?_method=DELETE"),{},{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}});case 2:case"end":return s.stop()}}),s)})))(),void window.location.reload()}})})]})},T=function(e){return Object(o.jsxs)("div",{className:"audioSec",children:[Object(o.jsx)("div",{className:"trackInfo margin-bottom",children:Object(o.jsx)(r.b,{to:"/singlePost/".concat(e.id),children:Object(o.jsx)("h2",{children:"".concat(e.artist," - ").concat(e.title)})})}),Object(o.jsx)("audio",{controls:!0,preload:"none",type:"audio/mpeg",children:Object(o.jsx)("source",{src:e.audioSrc})}),Object(o.jsx)(_,{id:e.id,cashAppLink:e.cashAppLink,loggedInUser:e.loggedInUser,loggedInUserId:e.loggedInUserId,post:e.post,userWhoCreatedPost:e.userWhoCreatedPost})]})},z=function(e){return Object(o.jsxs)("div",{className:"audioAndArt radius",children:[Object(o.jsx)(C,{imgLink:e.imgLink}),Object(o.jsx)(T,{audioSrc:e.audioSrc,artist:e.artist,cashAppLink:e.cashAppLink,id:e.id,title:e.title,loggedInUser:e.loggedInUser,loggedInUserId:e.loggedInUserId,post:e.post,userWhoCreatedPost:e.userWhoCreatedPost,link:e.link})]})},E=function(e){return Object(o.jsx)("div",{className:"sortSec",children:Object(o.jsxs)("section",{className:"formBtn",children:[Object(o.jsx)("button",{className:e.sortClassAll,onClick:e.onClickAll,children:Object(o.jsx)("span",{className:"margin-top margin-bottom sortBtn",children:"All"})}),Object(o.jsx)("button",{className:e.sortClassBookmark,onClick:e.onClickBookmark,children:Object(o.jsx)(y.a,{size:24,weight:"regular",color:e.sortColor})}),Object(o.jsx)("button",{className:e.sortClassFollow,onClick:e.onClickFollow,children:Object(o.jsx)("span",{className:"margin-top margin-bottom sortBtn",children:"Following"})})]})})},W=s(81),D=s(82),M=s(83),H=function(){var e=Object(n.useContext)(h),t=e.loggedInUserContext,s=e.setLoggedInUserContext,a=Object(n.useState)(!1),c=Object(m.a)(a,2),l=c[0],d=c[1],p=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,fetch("https://motifs-server.herokuapp.com/auth/logoutUser",{method:"POST",credentials:"include"});case 3:s({}),d(!0);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l?Object(o.jsx)(i.a,{to:"/"}):Object(o.jsxs)("nav",{className:"navigation padding-top padding-bottom border-right flex column",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsxs)("div",{className:"flex column center padding-bottom padding-left padding-right border-bottom feedLogout",children:[Object(o.jsx)(x.a,{size:24}),Object(o.jsx)("span",{className:"",children:"Motifs"})]})}),Object(o.jsx)(r.b,{to:"/profileOfArtist/".concat(t.userId),children:Object(o.jsxs)("div",{className:"flex column center padding-bottom padding-top border-bottom feedLogout",children:[Object(o.jsx)(W.a,{size:24}),Object(o.jsx)("span",{className:"",children:"Home"})]})}),Object(o.jsx)(r.b,{to:"/upload",children:Object(o.jsxs)("div",{className:"flex column center padding-bottom padding-top border-bottom feedLogout",children:[Object(o.jsx)(D.a,{size:24}),Object(o.jsx)("span",{className:"",children:"Upload"})]})})]}),Object(o.jsxs)("div",{className:"flex column center padding-top width100 border-top feedLogout",onClick:p,children:[Object(o.jsx)(M.a,{size:24}),Object(o.jsx)("span",{children:"Log out"})]})]})},q=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),s=t[0],a=(t[1],Object(n.useContext)(h)),c=a.loggedInUserContext,r=(a.setLoggedInUserContext,Object(n.useState)(!0)),l=Object(m.a)(r,2),d=l[0],p=l[1],b=Object(n.useState)({posts:[],user:{}}),g=Object(m.a)(b,2),O=g[0],f=g[1],x=Object(n.useState)({url:"https://motifs-server.herokuapp.com/feed"}),v=Object(m.a)(x,2),k=v[0],w=v[1],C=Object(n.useState)({all:"sortSecBtn clicked",bookmark:"sortSecBtn margin-left2",followingFeed:"sortSecBtn margin-left2",color:"black"}),I=Object(m.a)(C,2),S=I[0],A=I[1];var y=function(){var e=Object(u.a)(j.a.mark((function e(t){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get(t,{headers:{Authentication:null===c||void 0===c?void 0:c.accesstoken}});case 2:s=e.sent,f({posts:s.data.posts,user:s.data.user}),p(!1);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){y(k.url)}),[k.url]);var B=O.posts,U=O.user;return d?Object(o.jsx)("div",{children:"is loading..."}):s?Object(o.jsx)(i.a,{to:"/"}):Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(H,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsxs)("div",{className:"stream padding2 radius",children:[Object(o.jsxs)("div",{className:"flex width100",children:[Object(o.jsx)("div",{className:"width10 flex center",children:Object(o.jsx)("span",{children:"Sort by:"})}),Object(o.jsx)(E,{onClickAll:function(){return w({url:"https://motifs-server.herokuapp.com/feed"}),void A({all:"sortSecBtn clicked",bookmark:"sortSecBtn margin-left2",followingFeed:"sortSecBtn margin-left2",color:"black"})},onClickBookmark:function(){return w({url:"https://motifs-server.herokuapp.com/library"}),void A({all:"sortSecBtn",bookmark:"sortSecBtn margin-left2 clicked",followingFeed:"sortSecBtn margin-left2",color:"red"})},onClickFollow:function(){return w({url:"https://motifs-server.herokuapp.com/followingFeed"}),void A({all:"sortSecBtn",bookmark:"sortSecBtn margin-left2",followingFeed:"sortSecBtn margin-left2 clicked",color:"black"})},sortClassAll:S.all,sortClassBookmark:S.bookmark,sortClassFollow:S.followingFeed,sortColor:S.color})]}),B.map((function(e,t){return Object(o.jsx)(z,{audioSrc:e.audio,id:e._id,userWhoCreatedPost:e.user,artist:e.artist,title:e.title,imgLink:e.art,cashAppLink:e.cashAppLink,loggedInUser:U,loggedInUserId:U._id,post:e,isBookmarked:U.bookmarks.includes(e._id)},t)}))]})})]})},G=s(39),J=s(84),V=s(85),Q=function(e){var t=Object(n.useContext)(h).loggedInUserContext,s=Object(n.useState)(e.followCheck),a=Object(m.a)(s,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function s(){return j.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:N.a.get("https://motifs-server.herokuapp.com/getProfileOfArtist/".concat(e.id),{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}}).then((function(t){var s=t.data;r(s.user.following.includes(e.id))})).catch((function(){return console.log("failed to fetch from url")}));case 1:case"end":return s.stop()}}),s)})))()}),[e.id]),Object(o.jsxs)("div",{className:"userInfo padding",children:[Object(o.jsx)("div",{className:"socials margin-top2",children:Object(o.jsx)(S,{classes:c?"trackBtn clicked":"trackBtn",svg:c?Object(o.jsx)(B.a,{size:24}):Object(o.jsx)(U.a,{size:24}),name:c?"Unfollow":"Follow",onClick:function(){Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.a.post("/post/followArtist/".concat(e.id,"?_method=PUT")),r(!c);case 2:case"end":return t.stop()}}),t)})))()}})}),Object(o.jsxs)("div",{className:"socials margin-top2 userInfoIcons",children:[e.artist.instagram&&Object(o.jsx)("a",{href:e.artist.instagram,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(J.a,{size:32})}),e.artist.twitter&&Object(o.jsx)("a",{href:e.artist.twitter,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(V.a,{size:32})}),e.artist.cashAppLink&&Object(o.jsx)("a",{href:e.artist.cashAppLink,target:"_blank",rel:"noopener noreferrer",children:Object(o.jsx)(L.a,{size:32})})]})]})},X=s(86),Y=function(){var e=Object(n.useContext)(h),t=e.loggedInUserContext,s=(e.setLoggedInUserContext,Object(n.useState)(!0)),a=Object(m.a)(s,2),c=a[0],r=a[1],l=Object(n.useState)(!1),d=Object(m.a)(l,2),p=d[0],b=(d[1],Object(n.useState)({posts:[],loggedInUser:{},artist:{},following:[],dataBack:{}})),g=Object(m.a)(b,2),O=g[0],f=g[1],x=Object(i.g)(),v=O.artist,k=O.posts,w=O.loggedInUser,C=O.following;return Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function e(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N.a.get("https://motifs-server.herokuapp.com/getProfileOfArtist/".concat(x.id),{headers:{Authentication:null===t||void 0===t?void 0:t.accesstoken}}).then((function(e){var t=e.data;f({dataBack:t,posts:t.posts,loggedInUser:t.user,artist:t.artist[0],following:t.user.following.includes(v._id)}),r(!1)})).catch((function(){return console.log("failed to fetch from url")}));case 1:case"end":return e.stop()}}),e)})))()}),[x.id,v._id]),c?Object(o.jsx)("div",{children:"is loading ..."}):p?Object(o.jsx)(i.a,{to:"/"}):Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsx)("div",{className:"profileHead",children:Object(o.jsx)("section",{className:"profileSec radius",children:Object(o.jsxs)("div",{className:"profileImg ",children:[Object(o.jsxs)("div",{className:"imgBox",children:[Object(o.jsx)("div",{className:"padding imgBoxImage",children:Object(o.jsx)("img",{src:v.profilePicture,alt:"profile",className:"radius"})}),Object(o.jsxs)("div",{className:"artistNameDiv",children:[Object(o.jsx)("h1",{className:"",children:v.userName}),Object(o.jsx)("h2",{children:"Planet Earth"})]})]}),Object(o.jsxs)("div",{className:"flex justifySpaceBetween",children:[Object(o.jsx)(Q,{artistName:v.userName,loggedIn:w,id:v._id,artist:v,followCheck:C}),Object(o.jsxs)("div",{className:"flex width60",children:[Object(o.jsxs)("div",{className:"flex column center padding border-right width50",children:[Object(o.jsx)("h2",{className:"margin-bottom",children:"Followers:"}),Object(o.jsx)("span",{className:"",children:v.followers.length})]}),Object(o.jsxs)("div",{className:"flex column center padding width50",children:[Object(o.jsx)("h2",{className:"margin-bottom",children:"Following:"}),Object(o.jsx)("span",{children:v.following.length})]})]}),Object(o.jsxs)("div",{className:"padding flex column center border-left width30",children:[Object(o.jsx)("h2",{className:"margin-bottom",children:"Audio"}),Object(o.jsx)(G.a,{to:"#music",children:Object(o.jsx)(X.a,{size:32,color:"rgba(23, 0, 51, 1)"})})]})]})]})})})}),Object(o.jsxs)("div",{className:"landing gradient",children:[Object(o.jsx)("a",{id:"music"}),Object(o.jsx)("div",{children:Object(o.jsx)("h2",{children:"Music:"})}),k.map((function(e,t){return Object(o.jsx)(z,{audioSrc:e.audio,id:e._id,userWhoCreatedPost:e.user,artist:e.artist,title:e.title,imgLink:e.art,cashAppLink:e.cashAppLink,loggedInUser:w,loggedInUserId:w._id,followCheck:w.following.includes(e.user)},t)}))]})]})},Z=function(e){return Object(o.jsxs)("div",{className:"postField margin-top2",children:[Object(o.jsx)("label",{htmlFor:e.for,children:e.label}),Object(o.jsx)("textarea",{className:e.inputClass,type:e.inputType,id:e.inputId,name:e.inputName,rows:e.rows,value:e.value,onChange:e.onChange,required:!0})]})},K=s(71),R=function(){var e=Object(n.useContext)(h).loggedInUserContext,t=Object(n.useState)({artist:"",title:"",caption:"",art:"https://res.cloudinary.com/drs4pvb1e/image/upload/c_scale,h_600,w_600/v1629319772/Motifs/brett-jordan-aZVuQWEtX5Y-unsplash_bp7plp.jpg"}),s=Object(m.a)(t,2),a=s[0],c=s[1],r=Object(n.useState)(""),l=Object(m.a)(r,2),d=l[0],g=l[1],f=Object(n.useState)(""),x=Object(m.a)(f,2),v=x[0],k=x[1],w=Object(n.useState)(!1),C=Object(m.a)(w,2),I=C[0],S=C[1];function A(e){var t=e.target,s=t.name,n=t.value;c(Object(b.a)(Object(b.a)({},a),{},Object(p.a)({},s,n)))}var y=function(){var t=Object(u.a)(j.a.mark((function t(s){var n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=new K).append("file",s),n.append("artist",a.artist),n.append("title",a.title),n.append("caption",a.caption),n.append("art",a.art),t.next=8,N.a.post("https://motifs-server.herokuapp.com/post/createPost",n,{headers:{Authentication:null===e||void 0===e?void 0:e.accesstoken}});case 8:k(!1),S(!0);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return v?Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsx)("div",{children:"uploading..."})}):I?Object(o.jsx)(i.a,{to:"/"}):Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsxs)("div",{className:"stream audioAndArt index radius",children:[Object(o.jsx)("div",{className:"formHead padding",children:Object(o.jsx)("h1",{children:"Upload a track!"})}),Object(o.jsxs)("form",{className:"uploadForm padding",onSubmit:function(e){e.preventDefault(),d&&(y(d),k(!0))},children:[Object(o.jsx)(O,{for:"artist",label:"Artist",inputClass:"padding-top padding-bottom",inputType:"text",inputId:"artist",inputName:"artist",value:a.artist,onChange:function(e){return A(e)}}),Object(o.jsx)(O,{for:"title",label:"Title",inputClass:"padding-top padding-bottom",inputType:"text",inputId:"title",inputName:"title",value:a.title,onChange:function(e){return A(e)}}),Object(o.jsx)(Z,{for:"caption",label:"Caption",inputClass:"padding-top padding-bottom",inputType:"text",inputId:"caption",inputName:"caption",rows:"8",value:a.caption,onChange:function(e){return A(e)}}),Object(o.jsx)(O,{for:"audio",inputClass:"chooseFile",inputType:"file",inputId:"audio",inputName:"file",onChange:function(e){var t=e.target.files[0];g(t)}}),Object(o.jsx)("div",{className:"postField margin-top2",children:Object(o.jsx)("button",{type:"submit",className:"trackBtn padding-top padding-bottom",value:"Upload",children:"Upload"})})]})]})})]})},$=function(){var e=Object(n.useContext)(h).loggedInUserContext,t=Object(n.useState)(!0),s=Object(m.a)(t,2),a=s[0],c=s[1],r=Object(n.useState)({artist:[],post:[],loggedInUser:{},isBookmarked:!1}),l=Object(m.a)(r,2),d=l[0],p=l[1],b=Object(i.g)();Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.a.get("https://motifs-server.herokuapp.com/getSinglePost/".concat(b.id),{headers:{Authentication:null===e||void 0===e?void 0:e.accesstoken}}).then((function(e){var t=e.data;p({artist:t.artist[0],post:t.post[0],loggedInUser:t.user,isBookmarked:t.user.bookmarks.includes(t.post[0]._id),isFollowed:t.user.following.includes(t.artist[0]._id)}),c(!1)})).catch((function(){return console.log("failed to fetch from url")}));case 1:case"end":return t.stop()}}),t)})))()}),[b.id]);var g=d.artist,O=d.post,f=d.loggedInUser,x=d.isBookmarked,v=d.isFollowed;return a?Object(o.jsx)("div",{children:"is loading..."}):Object(o.jsxs)("div",{children:[Object(o.jsx)(H,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsxs)("div",{className:"audioAndArt singlePostSec radius padding",children:[Object(o.jsx)("div",{class:"artSec padding",children:Object(o.jsx)("img",{src:O.art,alt:"cover art"})}),Object(o.jsx)("div",{className:"trackInfo margin-bottom",children:Object(o.jsx)("h2",{children:"".concat(O.artist," - ").concat(O.title)})}),Object(o.jsxs)("div",{className:"audioSec",children:[Object(o.jsx)("audio",{controls:!0,preload:"none",type:"audio/mpeg",children:Object(o.jsx)("source",{src:O.audio})}),Object(o.jsx)(_,{id:O._id,cashAppLink:O.cashAppLink,loggedInUser:f,loggedInUserId:f.id,post:O,userWhoCreatedPost:g._id,isBookmarked:x,isThisArtistFollowed:v})]})]})})]})},ee=function(e){return Object(o.jsxs)("div",{className:"followBlock",children:[Object(o.jsx)("div",{children:Object(o.jsx)(r.b,{to:"/getProfileOfArtist/".concat(e.id),children:Object(o.jsx)("img",{class:"radius",src:e.src,alt:""})})}),Object(o.jsx)("div",{children:Object(o.jsx)(r.b,{to:"/getProfileOfArtist/".concat(e.id),children:Object(o.jsx)("h2",{className:"darkGrey margin-top",children:e.userName})})})]})},te=function(){var e=Object(i.g)(),t=Object(n.useState)(null),s=Object(m.a)(t,2),a=s[0],c=s[1],l=Object(n.useState)(null),d=Object(m.a)(l,2),p=d[0],b=d[1];return Object(n.useEffect)((function(){Object(u.a)(j.a.mark((function t(){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:N.a.get("/followers/".concat(e.followedBy,"/").concat(e.id)).then((function(e){var t=e.data;console.log(t),c(t.user),b(t.followers)})).catch((function(){return console.log("failed to fetch from url")}));case 1:case"end":return t.stop()}}),t)})))()}),[e.id,e.followedBy]),a&&p?Object(o.jsx)("div",{className:"gradient profileLanding",children:Object(o.jsxs)("div",{className:"isFollow margin-bottom2",children:[Object(o.jsx)(r.b,{to:"/profileOfArtist/".concat(a._id),className:"darkGrey",children:Object(o.jsxs)("h2",{children:[a.userName," is ","followers"===e.followedBy?"followed by":"following",":"]})}),Object(o.jsx)("div",{className:"profileSec followerSec radius padding margin-bottom2",children:p.map((function(e){return Object(o.jsx)(ee,{id:e._id,src:e.profilePicture,userName:e.userName})}))})]})}):Object(o.jsx)("div",{children:"Loading..."})},se=function(){var e=Object(n.useContext)(h),t=(e.loggedInUserContext,e.setLoggedInUserContext),s=Object(n.useState)(!1),a=Object(m.a)(s,2),c=a[0],r=a[1],l=Object(n.useState)({email:"",password:""}),d=Object(m.a)(l,2),g=d[0],f=d[1];function x(e){var t=e.target,s=t.name,n=t.value;f(Object(b.a)(Object(b.a)({},g),{},Object(p.a)({},s,n)))}var k=function(){var e=Object(u.a)(j.a.mark((function e(){var s,n,a,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.post("https://motifs-server.herokuapp.com/auth/loginUser",g);case 2:s=e.sent,console.log(s.data),n=s.data,a=n.refreshtoken,c=n.accesstoken,i=n.userId,a?(t({refreshtoken:a,accesstoken:c,userId:i}),r(!0)):console.log("whoops");case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return c?Object(o.jsx)(i.a,{to:"/feed"}):Object(o.jsxs)("div",{children:[Object(o.jsx)(v,{}),Object(o.jsx)("div",{className:"gradient landing",children:Object(o.jsxs)("div",{className:"stream audioAndArt index radius loginForm",children:[Object(o.jsx)("div",{className:"formHead padding",children:Object(o.jsx)("h1",{children:"Login"})}),Object(o.jsxs)("form",{className:"uploadForm padding",onSubmit:function(e){e.preventDefault(),k()},children:[Object(o.jsxs)("div",{className:"",children:[Object(o.jsx)(O,{for:"email",label:"Email",inputClass:"padding-top padding-bottom",inputType:"email",inputId:"email",inputName:"email",value:g.email,onChange:function(e){return x(e)}}),Object(o.jsx)(O,{for:"password",label:"Password",inputClass:"padding-top padding-bottom",inputType:"password",inputId:"password",inputName:"password",value:g.password,onChange:function(e){return x(e)}})]}),Object(o.jsx)("div",{className:"postField margin-top2",children:Object(o.jsx)("button",{type:"submit",className:"trackBtn padding-top padding-bottom",children:"Login"})})]})]})})]})},ne=s(21),ae=["component"],ce=function(e){var t=e.component,s=Object(ne.a)(e,ae),a=Object(n.useContext)(h),c=a.loggedInUserContext,r=(a.setLoggedInUserContext,!!Object.keys(c).length);return Object(o.jsx)(i.b,Object(b.a)(Object(b.a)({},s),{},{render:function(e){return r?Object(o.jsx)(t,Object(b.a)({},e)):Object(o.jsx)(i.a,{to:"/"})}}))},re=["component","restricted"],ie=function(e){var t=e.component,s=e.restricted,a=Object(ne.a)(e,re),c=Object(n.useContext)(h).loggedInUserContext,r=!!Object.keys(c).length;return Object(o.jsx)(i.b,Object(b.a)(Object(b.a)({},a),{},{render:function(e){return r&&s?Object(o.jsx)(i.a,{to:"/feed"}):Object(o.jsx)(t,Object(b.a)({},e))}}))},oe=function(){return Object(o.jsx)(g,{children:Object(o.jsx)(r.a,{children:Object(o.jsxs)(i.d,{children:[Object(o.jsx)(ie,{component:l,path:"/",restricted:!0,exact:!0}),Object(o.jsx)(ie,{component:w,path:"/signup",restricted:!0,exact:!0}),Object(o.jsx)(ie,{component:se,path:"/login",restricted:!0,exact:!0}),Object(o.jsx)(ce,{component:q,path:"/feed",exact:!0}),Object(o.jsx)(ce,{component:Y,path:"/profileOfArtist/:id",exact:!0}),Object(o.jsx)(ce,{component:$,path:"/singlePost/:id",exact:!0}),Object(o.jsx)(ce,{component:R,path:"/upload",exact:!0}),Object(o.jsx)(ce,{component:te,path:"/followers/:id/:followedBy",exact:!0})]})})})};c.a.render(Object(o.jsx)(oe,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.d9abfb38.chunk.js.map