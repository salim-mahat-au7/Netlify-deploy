(this["webpackJsonpm-tube"]=this["webpackJsonpm-tube"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/Loading-Image-1.37194ebb.gif"},46:function(e,t,a){e.exports=a(75)},51:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),c=a.n(l),o=a(15),s=(a(51),a(1)),i={API_KEY:"AIzaSyDRbO8Haj-pfEU6liqs4VL5tEyPIuG_UlI",BASE_URL:"https://www.googleapis.com/youtube/v3",CLIENT_ID:"59974692553-pm127a9u90sd23fa10uhccrjenlr80dh.apps.googleusercontent.com"},u=a(26),m=a(4),p={setUser:function(e){return localStorage.setItem("accessToken",e.accessToken),{type:"SET_USER",payload:e}},logOut:function(){return localStorage.removeItem("accessToken"),{type:"LOG_OUT"}}},d=Object(m.b)((function(e){return{user:e.userState.user}}),p)((function(e){var t=e.user,a=e.setUser,n=e.logOut,l=function(e){if(e.error)return alert("Something has gone wrong. Please try again");var t=Object(s.a)(Object(s.a)({},e.profileObj),{},{accessToken:e.accessToken});a(t)};return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement(o.b,{className:"navbar-brand",to:"/"},"mTube"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/"},"Home ",r.a.createElement("span",{className:"sr-only"},"(current)"))),r.a.createElement("li",{className:"nav-item active"},r.a.createElement(o.b,{className:"nav-link",to:"/playlist"},"Create Playlist +")),r.a.createElement("li",{className:"nav-item"},null===t?r.a.createElement(u.GoogleLogin,{scope:"https://www.googleapis.com/auth/youtube",clientId:i.CLIENT_ID,buttonText:"Login",onSuccess:l,onFailure:l,cookiePolicy:"single_host_origin",isSignedIn:!0}):r.a.createElement(u.GoogleLogout,{clientId:i.CLIENT_ID,buttonText:"Logout",onLogoutSuccess:n})))))})),h=a(3),v=a(5),b=a(6),g=a(8),y=a(7),E=a(30),f=a(14),O=a.n(f),S=a(19),j=a(22),N=a.n(j),w=i.API_KEY,C=i.BASE_URL,k=function(){return{type:"CLEAR_VIDEOS"}},T=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleSubmit=function(t){t.preventDefault();var a=e.state.query;e.props.setSearchQuery(a),e.props.clearVideos(),e.props.history.push("/search/".concat(a))},e.handleChange=function(t){e.setState({query:t.target.value})},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement("form",{className:"input-group mb-3 container my-3",onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Recipient's username","aria-label":"Recipient's username","aria-describedby":"basic-addon2",name:"query",value:this.state.query,onChange:this.handleChange}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-primary",type:"submit"},"Search")))}}]),a}(n.Component),I={setSearchQuery:function(e){return{type:"SET_SEARCH_QUERY",payload:e}},clearVideos:k},_=Object(m.b)(null,I)(Object(h.g)(T)),x=Object(h.g)((function(e){var t=e.video,a=e.history;return r.a.createElement("div",{className:"col mb-4"},r.a.createElement("div",{onClick:function(){var e="string"===typeof t.id?t.id:t.id.videoId;a.push("/videos/".concat(e))},className:"card h-100",style:{cursor:"pointer"}},r.a.createElement("img",{loading:"lazy",src:t.snippet.thumbnails.high.url,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},t.snippet.title),r.a.createElement("p",{style:{textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"100%",overflow:"hidden"},className:"card-text"},t.snippet.description))))})),P=function(e){var t=e.videos,a=e.fetchVideos,n=e.searchQuery;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:"20px 10px"},className:"card-deck row row-cols-1 row-cols-md-3 row-cols-lg-4"},t.items.map((function(e){return r.a.createElement(x,{video:e,key:e.etag})}))),void 0!==t.prevPageToken?r.a.createElement("button",{onClick:function(){return a({pageToken:t.prevPageToken})},type:"button",className:"btn btn-primary"},"Prev Page"):null,void 0!==t.nextPageToken?r.a.createElement("button",{onClick:function(){return a({pageToken:t.nextPageToken,searchQuery:n||""})},type:"button",className:"btn btn-success"},"Next Page"):null)},L=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchTrendingVideos({})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),this.props.videos?r.a.createElement(P,{videos:this.props.videos,fetchVideos:this.props.fetchTrendingVideos}):r.a.createElement("h1",null,"Loading videos"))}}]),a}(n.Component),R={fetchTrendingVideos:function(e){var t=e.pageToken,a=void 0===t?"":t;return function(){var e=Object(S.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CLEAR_VIDEOS"}),e.next=3,N.a.get("".concat(C,"/videos"),{params:{part:"snippet",maxResults:30,key:w,chart:"mostPopular",regionCode:"IN",pageToken:a}});case 3:n=e.sent,r=n.data,t({type:"SET_VIDEOS",payload:r});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},D=Object(m.b)((function(e){return{videos:e.videoState.videos}}),R)(L),A=Object(m.b)((function(e){return{user:e.userState.user}}))((function(e){return e.user||null!==localStorage.getItem("accessToken")?r.a.createElement("div",null):r.a.createElement(h.a,{to:"/"})})),F=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).searchQuery=n.props.match.params.query,n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){null===this.props.videos&&this.props.fetchSearchResults({searchQuery:this.searchQuery})}},{key:"componentDidUpdate",value:function(e){var t=e.match.params.query,a=this.searchQuery;t!==a&&(this.props.clearVideos(),this.props.fetchSearchResults({searchQuery:a}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),this.props.videos?r.a.createElement(P,{videos:this.props.videos,fetchVideos:this.props.fetchSearchResults,searchQuery:this.searchQuery}):r.a.createElement("h1",null,"Loading videos"))}}]),a}(n.Component),V={fetchSearchResults:function(e){var t=e.pageToken,a=void 0===t?"":t,n=e.searchQuery;return function(){var e=Object(S.a)(O.a.mark((function e(t){var r,l;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.prev=1,e.next=4,N.a.get("".concat(C,"/search"),{params:{part:"snippet",maxResults:30,key:w,pageToken:a,q:n}});case 4:r=e.sent,l=r.data,t({type:"SET_VIDEOS",payload:l}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},clearVideos:k},Q=Object(m.b)((function(e){return{videos:e.videoState.videos}}),V)(F),M=function(e){var t=e.videoId;return r.a.createElement("div",{className:"embed-responsive embed-responsive-16by9"},r.a.createElement("iframe",{title:"Video Player",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))},U=function(e){var t=e.comments;return r.a.createElement("ul",{className:"list-group list-group-flush"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"list-group-item"},e.snippet.topLevelComment.snippet.textOriginal,r.a.createElement("br",null),void 0!==e.replies&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"btn btn-primary",type:"button","data-toggle":"collapse","data-target":"#replies-".concat(e.id)},"Show replies"),r.a.createElement("div",{className:"collapse",id:"replies-".concat(e.id)},e.replies.comments.map((function(e){return r.a.createElement("div",{key:e.id,className:"card card-body"},e.snippet.textOriginal)})))))})))},q=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.props.fetchComments(n.videoId,n.props.comments.nextPageToken)},n.videoId=n.props.match.params.videoId,n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.clearComments(),this.props.fetchComments(this.videoId)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(_,null),r.a.createElement("div",null,r.a.createElement(M,{videoId:this.videoId}),this.props.comments&&r.a.createElement(r.a.Fragment,null,r.a.createElement(U,{comments:this.props.comments.items}),r.a.createElement("button",{onClick:this.handleClick,type:"button",className:"btn btn-danger"},"Show more comments"))))}}]),a}(n.Component),G={fetchComments:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var a=Object(S.a)(O.a.mark((function a(n,r){var l,c,o;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return l=r().videoState.comments,a.next=3,N.a.get("https://www.googleapis.com/youtube/v3/commentThreads",{params:{part:"snippet,replies",videoId:e,key:w,pageToken:t}});case 3:c=a.sent,o=c.data,console.log(o),n({type:"SET_COMMENTS",payload:l?Object(s.a)(Object(s.a)({},o),{},{items:[].concat(Object(E.a)(l.items),Object(E.a)(o.items))}):o});case 7:case"end":return a.stop()}}),a)})));return function(e,t){return a.apply(this,arguments)}}()},clearComments:function(){return{type:"CLEAR_COMMENTS"}}},H=Object(m.b)((function(e){return{comments:e.videoState.comments}}),G)(q),Y=a(18),B=RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i),z=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).handleChange=function(e){e.preventDefault();var t=e.target,a=t.name,r=t.value,l=n.state.errors;switch(a){case"fullName":l.fullName=r.length<5?"Full Name must be 5 characters long!":"";break;case"email":l.email=B.test(r)?"":"Email is not valid!";break;case"password":l.password=r.length<8?"Password must be 8 characters long!":""}n.setState(Object(Y.a)({errors:l},a,r))},n.handleSubmit=function(e){e.preventDefault(),function(e){var t=!0;Object.values(e).forEach((function(e){e.length>0&&(t=!1)}))}(n.state.errors)},n.state={fullName:null,email:null,password:null,errors:{fullName:"",email:"",password:""}},n}return Object(b.a)(a,[{key:"render",value:function(){var e=this.state.errors;return console.log("this.state:",this.state),r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"form-wrapper"},r.a.createElement("h2",null,"Create Account"),r.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0},r.a.createElement("div",{className:"fullName"},r.a.createElement("label",{htmlFor:"fullName"},"Full Name"),r.a.createElement("input",{type:"text",name:"fullName",onChange:this.handleChange,noValidate:!0}),e.fullName.length>0&&r.a.createElement("span",{className:"error"},e.fullName)),r.a.createElement("div",{className:"email"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",name:"email",onChange:this.handleChange,noValidate:!0}),e.email.length>0&&r.a.createElement("span",{className:"error"},e.email)),r.a.createElement("div",{className:"password"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",name:"password",onChange:this.handleChange,noValidate:!0}),e.password.length>0&&r.a.createElement("span",{className:"error"},e.password)),r.a.createElement("div",{className:"info"},r.a.createElement("small",null,"Password must be eight characters in length.")),r.a.createElement("div",{className:"submit"},r.a.createElement("button",null,"Create")))))}}]),a}(n.Component),J=a(21),W=r.a.createContext(),K=W.Provider,$=(W.Consumer,function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={data:[{name:"AttainU"}]},e}return Object(b.a)(a,[{key:"render",value:function(){return r.a.createElement(K,{value:{data:this.state.data}},this.props.children)}}]),a}(n.Component)),X=function(e){var t=e.playlist,a=e.pending;return console.log("playlist data:",t),t?r.a.createElement("div",{className:"playlist-view-section"},r.a.createElement("h2",null,"Current Playlists"),r.a.createElement("hr",null),r.a.createElement("ul",null,"Created:",t.length>0&&t.map((function(e){return r.a.createElement("li",null,e.snippet.title)}))),r.a.createElement("ul",null,"Pending:",a.length>0&&a.map((function(e){return r.a.createElement("li",null,e.snippet.title)})))):null},Z=a(45),ee=a(42),te=a.n(ee);var ae=function(e){return console.log("Component Loader:",e),function(t){var a=t.isloading,n=Object(Z.a)(t,["isloading"]);return console.log("isloading Loader:",a),a?r.a.createElement("img",{style:{width:"50%"},src:te.a}):r.a.createElement(e,n)}}(X),ne=function(e){Object(g.a)(a,e);var t=Object(y.a)(a);function a(e){var n;return Object(v.a)(this,a),(n=t.call(this,e)).onChange=function(e){var t=e.target.name;n.setState(Object(Y.a)({},t,e.target.value))},n.state={name:"",description:"",playlist:[],pending_playlist:[],loading:!0,condition:!0},n.onChange=n.onChange.bind(Object(J.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(J.a)(n)),n}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchPlaylists({})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={title:this.state.name,description:this.state.description};this.setState({condition:!1}),this.props.createPlaylist({parameters:t})}},{key:"componentWillReceiveProps",value:function(e){console.log("nextProps:",e),!1===e.loading&&this.setState({loading:!1}),this.setState({playlist:e.playlist,pending_playlist:e.pending_playlist})}},{key:"render",value:function(){return console.log("this.state",this.state),r.a.createElement("div",{className:"playlist"},r.a.createElement("div",{className:"playlist-creation-section"},r.a.createElement("h2",null,"Create a new playlist"),r.a.createElement("hr",null),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Playlist Name:",r.a.createElement("input",{name:"name",onChange:this.onChange,className:"form-control",type:"text"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Playlist Description:",r.a.createElement("textarea",{name:"description",cols:"30",rows:"5",onChange:this.onChange,className:"form-control",type:"text"}))),r.a.createElement("button",{type:"submit",className:"btn btn-info"},"Create Playlist"))),this.state.condition?r.a.createElement("p",null,"I'm conditionally rendered"):r.a.createElement("p",null,"I'm the second condition"),r.a.createElement(ae,{isloading:this.state.loading,playlist:this.state.playlist,pending:this.state.pending_playlist}))}}]),a}(r.a.Component),re={createPlaylist:function(e){var t=e.parameters;return function(){var e=Object(S.a)(O.a.mark((function e(a){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("parameters:",t),"https://www.googleapis.com/youtube/v3/playlists?part=snippet",n=localStorage.getItem("accessToken"),r={snippet:{title:t.title,description:t.description}},fetch("https://www.googleapis.com/youtube/v3/playlists?part=snippet",{method:"POST",headers:{Authorization:"Bearer ".concat(n),"content-type":"application/json"},body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){console.log("Reached here:",e),a({type:"FETCH_PLAYLIST_PENDING",payload:[e]})})).catch((function(e){console.log("error occured",e)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchPlaylists:function(e){var t=e.pageToken,a=void 0===t?"":t;return function(){var e=Object(S.a)(O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("".concat(C,"/playlists"),{params:{part:"snippet",maxResults:30,mine:!0,key:w,pageToken:a,access_token:localStorage.getItem("accessToken")}});case 2:n=e.sent,r=n.data,console.log("data playlist:",r),t({type:"FETCH_PLAYLIST",payload:r}),t({type:"SET_LOADER",payload:!1});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},le=Object(m.b)((function(e){return console.log("stateMapper Playlist:",e),{playlist:e.playlistState.playlist,pending_playlist:e.playlistState.pending_playlist,loading:e.loaderState.loader}}),re)(ne);var ce=function(){return r.a.createElement($,null,r.a.createElement("div",{className:"App"},r.a.createElement(d,null),r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",component:D}),r.a.createElement(h.b,{exact:!0,path:"/search/:query",component:Q}),r.a.createElement(h.b,{exact:!0,path:"/profile",component:A}),r.a.createElement(h.b,{exact:!0,path:"/videos/:videoId",component:H}),r.a.createElement(h.b,{exact:!0,path:"/form",component:z}),r.a.createElement(h.b,{exact:!0,path:"/playlist",component:le}))))},oe=a(16),se=a(43),ie=a(44),ue={user:null,isFetching:!1},me={videos:null,comments:null,isFetching:!1,searchQuery:""},pe={playlist:null,pending_playlist:[]},de={loader:null},he=Object(oe.combineReducers)({userState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;return"SET_USER"===n?Object(s.a)(Object(s.a)({},e),{},{user:a}):"LOG_OUT"===n?Object(s.a)(Object(s.a)({},e),{},{user:null}):e},videoState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;return"SET_VIDEOS"===n?Object(s.a)(Object(s.a)({},e),{},{videos:a}):"CLEAR_VIDEOS"===n?Object(s.a)(Object(s.a)({},e),{},{videos:null}):"SET_COMMENTS"===n?Object(s.a)(Object(s.a)({},e),{},{comments:a}):"CLEAR_COMMENTS"===n?Object(s.a)(Object(s.a)({},e),{},{comments:null}):"SET_SEARCH_QUERY"===n?Object(s.a)(Object(s.a)({},e),{},{searchQuery:a}):"TOGGLE_FETCHING"===n?Object(s.a)(Object(s.a)({},e),{},{isFetching:!e.isFetching}):e},playlistState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;switch(n){case"FETCH_PLAYLIST":return Object(s.a)(Object(s.a)({},e),{},{playlist:a.items});case"FETCH_PLAYLIST_PENDING":return Object(s.a)(Object(s.a)({},e),{},{pending_playlist:e.pending_playlist.concat(a)})}return e},loaderState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0,a=t.payload,n=t.type;return"SET_LOADER"===n?Object(s.a)(Object(s.a)({},e),{},{loader:a}):e}}),ve=Object(oe.createStore)(he,Object(se.composeWithDevTools)(Object(oe.applyMiddleware)(ie.a)));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m.a,{store:ve},r.a.createElement(o.a,null,r.a.createElement(ce,null)))),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.d51b8c60.chunk.js.map