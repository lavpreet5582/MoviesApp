(this.webpackJsonpmovies=this.webpackJsonpmovies||[]).push([[0],{44:function(t,e,a){},45:function(t,e,a){},47:function(t,e,a){},48:function(t,e,a){},49:function(t,e,a){},51:function(t,e,a){},52:function(t,e,a){},53:function(t,e,a){},54:function(t,e,a){},55:function(t,e,a){},56:function(t,e,a){},57:function(t,e,a){},83:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),i=(a(44),a(3)),o=a(4),u=a(6),l=a(5),j=(a(45),a(36)),b=a(7),h=a(13),p=a.n(h),v=a(15),O=(a(47),a(48),a(49),a(1)),d=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"nav-bar-buttons",children:this.props.text})}}]),a}(r.a.Component),m=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"nav-bar",children:[Object(O.jsx)("img",{className:"logo",src:"https://www.freeiconspng.com/thumbs/movie-icon/movie-icon-6.png",alt:"img"}),Object(O.jsx)(d,{text:"Home"}),Object(O.jsx)(d,{text:"Movies"}),Object(O.jsx)(d,{text:"About"})]})}}]),a}(r.a.Component),f=(a(51),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sidebar-buttons",children:this.props.text})}}]),a}(r.a.Component)),g=(a(52),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsxs)("div",{className:"sidebar",children:[Object(O.jsx)(f,{text:"All Genre"}),Object(O.jsx)(f,{text:"Action"}),Object(O.jsx)(f,{text:"Adventure"})]})}}]),a}(r.a.Component)),x=(a(53),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){for(var t=this,e=Math.ceil(this.props.totalmovies/5),a=[],n=function(e){a.push(Object(O.jsx)("div",{className:"pagination-button",onClick:function(){t.props.changePage(e+1)},children:e+1},Math.random()))},r=0;r<e;r++)n(r);return Object(O.jsx)("div",{className:"pagination",children:a})}}]),a}(r.a.Component)),y=a(39),N=(a(54),a(55),a(56),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){for(var t=[Object(O.jsx)("img",{src:"https://img.icons8.com/color/28/000000/star--v1.png",alt:"empty-star"}),Object(O.jsx)("img",{src:"https://img.icons8.com/color/28/000000/star--v1.png",alt:"empty-star"}),Object(O.jsx)("img",{src:"https://img.icons8.com/color/28/000000/star--v1.png",alt:"empty-star"}),Object(O.jsx)("img",{src:"https://img.icons8.com/color/28/000000/star--v1.png",alt:"empty-star"}),Object(O.jsx)("img",{src:"https://img.icons8.com/color/28/000000/star--v1.png",alt:"empty-star"})],e=0;e<this.props.rating;e++)t[e]=Object(O.jsx)("img",{src:"https://img.icons8.com/fluent/28/000000/star.png",alt:"rated-star"},Math.random());return Object(O.jsx)("div",{className:"Rating",children:t})}}]),a}(r.a.Component)),k=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var t=this.props.data,e=this.props.counter;return Object(O.jsxs)("div",{className:"movies-table-row",style:this.props.header?{fontWeight:"bold"}:{},children:[Object(O.jsx)("div",{className:"column serial-number",children:this.props.header?"S.No.":e}),Object(O.jsx)("div",{className:"column movie-name",children:this.props.header?"Title":t.title}),Object(O.jsx)("div",{className:"column genre",children:this.props.header?"Genre":t.genre}),Object(O.jsx)("div",{className:"column rating",children:this.props.header?"Rating":Object(O.jsx)(N,{rating:t.rating})})]})}}]),a}(r.a.Component),C=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){var t,e=this.props.data,a=[],n=0,r=Object(y.a)(e);try{for(r.s();!(t=r.n()).done;){var c=t.value;a.push(Object(O.jsx)(k,{data:c,counter:++n},n))}}catch(s){r.e(s)}finally{r.f()}return Object(O.jsxs)("div",{className:"movies-table",children:[Object(O.jsx)(k,{data:{sno:"S.No. ",name:"Movie Name",genre:"Genre",rating:"Rating"},header:!0}),a]})}}]),a}(r.a.Component),w=(a(57),function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).state={},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("img",{src:"https://flevix.com/wp-content/uploads/2019/07/Comp-2.gif",alt:"loader"})})}}]),a}(r.a.Component)),M=a(35),S=a.n(M),A=function(){var t=Object(v.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("https://movies.free.beeceptor.com/movies");case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(v.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),G=a(20),L=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).changeSearch=function(t){n.setState({pageNumber:1,search:t.target.value})},n.changePage=function(t){n.setState({pageNumber:t})},n.changerating=function(t){n.setState({pageNumber:1,rating:"all"===t.target.value?"all":parseInt(t.target.value)})},n.state={search:"",pageNumber:1,rating:"all",data:[],loader:!0},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var t=Object(v.a)(p.a.mark((function t(){var e;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,P();case 2:e=t.sent,this.setState({data:e,loader:!1});case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=this.state.data.filter((function(e){return"all"===t.state.rating||e.rating===t.state.rating}));e=e.filter((function(e){var a=e.title.toLowerCase(),n=t.state.search.toLowerCase();return a.includes(n)}));for(var a=[],n=5*(this.state.pageNumber-1);n<5*this.state.pageNumber&&n<e.length;n++)a.push(e[n]);return Object(O.jsxs)("div",{className:"main-container",children:[this.state.loader?Object(O.jsx)(w,{}):"",Object(O.jsx)(m,{}),Object(O.jsx)(g,{}),Object(O.jsxs)("div",{className:"movies-table-container",children:[Object(O.jsxs)("div",{className:"filter",children:[Object(O.jsx)("input",{value:this.state.search,placeholder:"Search for Movies",className:"movie-search",type:"text",onChange:this.changeSearch}),Object(O.jsxs)("select",{className:"rating-dropdown",name:"rating",onChange:this.changerating,children:[Object(O.jsx)("option",{value:"all",children:"All rating"}),Object(O.jsx)("option",{value:0,children:"0 rating"}),Object(O.jsx)("option",{value:1,children:"1 rating"}),Object(O.jsx)("option",{value:2,children:"2 rating"}),Object(O.jsx)("option",{value:3,children:"3 rating"}),Object(O.jsx)("option",{value:4,children:"4 rating"}),Object(O.jsx)("option",{value:5,children:"5 rating"})]})]}),Object(O.jsx)(C,{data:a}),Object(O.jsx)(x,{totalmovies:e.length,changePage:this.changePage})]})]})}}]),a}(r.a.Component),R=Object(G.b)((function(t){return{data:t.data}}),(function(t){return{updateMovies:function(e){return t({type:"updateMovies",data:e})}}}))(L),I=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)(j.a,{children:Object(O.jsx)(b.c,{children:Object(O.jsx)(b.a,{path:"/",component:R})})})}}]),a}(n.Component),J=function(t){Object(u.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(I,{})})}}]),a}(r.a.Component),B=a(26),D=a(37),E=a.n(D),H=a(38),T=a(21),W={data:[],name:"Lavpreet"},q=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"updateMovies":return t.data=e.data,Object(T.a)({},t);case"updateName":return t.name=e.name,Object(T.a)({},t);default:return Object(T.a)({},t)}},z=a(16),F={key:"root",storage:E.a},K=Object(B.a)(F,q),Q=Object(z.b)(K),U=Object(B.b)(Q);s.a.render(Object(O.jsx)(G.a,{store:Q,children:Object(O.jsx)(H.a,{loading:null,persistor:U,children:Object(O.jsx)(J,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.0c7eb3a9.chunk.js.map