(this["webpackJsonp013-monsters-rolodex"]=this["webpackJsonp013-monsters-rolodex"]||[]).push([[0],[,function(e,t,n){e.exports={container:"Card_container__1khwo",image:"Card_image__2s3yF",paragraph:"Card_paragraph__1Fg-c"}},,,,,,function(e,t,n){e.exports={container:"CardsList_container__3QEOf",items:"CardsList_items__CXC6v"}},function(e,t,n){e.exports={container:"FindMonster_container__aWKMX",input:"FindMonster_input__-V3eY"}},,,function(e,t,n){e.exports={header:"App_header__FKbDA"}},,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),o=n.n(c),s=(n(18),n(12)),i=n(2),l=n(3),m=n(5),u=n(4),h=n(6),d=n(11),p=n.n(d),f=n(7),_=n.n(f),g=n(1),E=n.n(g),v=function(e){var t=e.item,n=t.name,a=t.id,c=t.email,o=t.address.city;return r.a.createElement("div",{className:E.a.container},r.a.createElement("div",null,r.a.createElement("img",{className:E.a.image,src:"https://robohash.org/".concat(a,"?set=set2&size=180x180"),alt:""})),r.a.createElement("p",{className:E.a.paragraph},n),r.a.createElement("p",{className:E.a.paragraph},c),r.a.createElement("p",{className:E.a.paragraph},o))},b=function(e){var t=e.monsters.map((function(e){return r.a.createElement(v,{key:e.id,item:e})}));return r.a.createElement("div",{className:_.a.container},r.a.createElement("ul",{className:_.a.items},t))},C=n(8),j=n.n(C),y=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.handleFind(e.target.value)},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:j.a.container},r.a.createElement("input",{onChange:this.handleChange,className:j.a.input,type:"text",placeholder:"Search for monsters..."}))}}]),t}(a.Component),O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={monsters:[],find:[]},n.handleFetchData=function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){if(200===e.status)return e.json();throw new Error("Something went wrong")})).then((function(e){n.setState({monsters:e,find:e})})).catch((function(e){return console.log(e)}))},n.handleFind=function(e){var t=Object(s.a)(n.state.monsters);t=t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())})),n.setState({find:t})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.handleFetchData()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:p.a.header},"monsters rolodex"),r.a.createElement(y,{handleFind:this.handleFind}),r.a.createElement(b,{monsters:this.state.find}))}}]),t}(a.Component);o.a.render(r.a.createElement(O,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.d31e63ea.chunk.js.map