(this["webpackJsonpjpunlay-portfolio"]=this["webpackJsonpjpunlay-portfolio"]||[]).push([[0],{197:function(e,t,a){e.exports=a.p+"static/media/tri.f57682bd.jpg"},198:function(e,t,a){e.exports=a.p+"static/media/bulb.e4cabfe1.jpg"},200:function(e,t,a){e.exports=a(409)},205:function(e,t,a){},206:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/sign.20535ad5.jpg"},409:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(15),o=a.n(r),u=(a(205),a(12)),l=(a(206),a(53)),c=a(26),s=a(13),m=(a(207),a(46)),d=a(47),p=a(36),b=a(51),h=a(50),f=a(77),g=a(76),v=a(88),E=a.n(v),k=a(42),q=a(67),x=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(){return Object(m.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{size:"xl",show:this.props.showResume,onHide:this.props.hideResume},n.a.createElement(k.a.Header,{closeButton:!0},n.a.createElement(k.a.Title,null,"Jesus Punlay Resume ",n.a.createElement("br",null),n.a.createElement("pre",null,"(123)456-7890  |  jpunlay@gmail.com  |  101 main stareet; Knightdale, NC; 27545"))),n.a.createElement(k.a.Body,null,n.a.createElement("p",null,"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod."),n.a.createElement("h2",null,"Experience"),n.a.createElement("p",null,"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!"),n.a.createElement("h2",null,"Languages | Frameworks | Other skills"),n.a.createElement("p",null,"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!"),n.a.createElement("h2",null,"Education"),n.a.createElement("p",null,"Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!")),n.a.createElement(k.a.Footer,null,n.a.createElement(q.a,{variant:"light",onClick:this.props.hideResume},"Close"),n.a.createElement(q.a,{variant:"dark",onClick:this.props.hideResume},"Download"))))}}]),a}(n.a.Component),j=a(55),C=a(180),O=a.n(C),y=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(m.a)(this,a),(i=t.call(this,e)).openIssue=function(e){e.preventDefault();var t=e.currentTarget,a={title:t.issueTitle.value,body:t.issueBody.value};O.a.post("https://api.github.com/repos/jpunlay/home-ui/issues",a,{headers:{"Content-Type":"application/json",Authorization:"token TOKENHERE"}}).then((function(e){console.log(e),console.log(e.data),i.props.hideFeedback()}))},i}return Object(d.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(k.a,{size:"s",show:this.props.showFeedback,onHide:this.props.hideFeedback},n.a.createElement(k.a.Body,null,n.a.createElement(j.a,{onSubmit:this.openIssue},n.a.createElement(j.a.Group,{controlId:"issueTitle"},n.a.createElement(j.a.Label,null,"Issue Summary"),n.a.createElement(j.a.Control,{tas:"textarea"})),n.a.createElement(j.a.Group,{controlId:"issueBody"},n.a.createElement(j.a.Label,null,"Description"),n.a.createElement(j.a.Control,{as:"textarea",rows:"3"})),n.a.createElement("div",{style:{float:"right"}},n.a.createElement(q.a,{variant:"light",onClick:this.props.hideFeedback},"Close"),n.a.createElement(q.a,{variant:"dark",type:"submit"},"Submit"))))))}}]),a}(n.a.Component);function w(){var e=Object(u.a)(["\n    font-size: .85rem;\n"]);return w=function(){return e},e}function N(){var e=Object(u.a)(["\n    background-color: #000000!important;\n    font-size: .85rem;\n"]);return N=function(){return e},e}var F=Object(s.a)(f.a)(N()),D=Object(s.a)(f.a.Brand)(w()),L=["https://github.com/jpunlay/home-ui"],I=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(m.a)(this,a),(i=t.call(this,e)).showResume=i.showResume.bind(Object(p.a)(i)),i.hideResume=i.hideResume.bind(Object(p.a)(i)),i.state={showResume:!1},i.openFeedback=i.openFeedback.bind(Object(p.a)(i)),i.hideFeedback=i.hideFeedback.bind(Object(p.a)(i)),i.state={showFeedback:!1},i}return Object(d.a)(a,[{key:"showResume",value:function(){this.setState({showResume:!0})}},{key:"hideResume",value:function(){this.setState({showResume:!1})}},{key:"openFeedback",value:function(){console.log(this.state.showFeedback),this.setState({showFeedback:!0}),console.log("at showfeedback"),console.log(this.state.showFeedback)}},{key:"hideFeedback",value:function(){this.setState({showFeedback:!1})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"topNav"},n.a.createElement(F,{bg:"dark",variant:"dark",expand:"lg"},n.a.createElement(D,{href:"/home-ui"},"JP"),n.a.createElement(f.a.Toggle,{"aria-controls":"basic-navbar-nav"}),n.a.createElement(f.a.Collapse,{id:"basic-navbar-nav"},n.a.createElement(g.a,{className:"ml-auto"},n.a.createElement(g.a.Link,{href:"/dope"},"blog"),n.a.createElement(g.a.Link,{href:"#resume",onClick:function(){return e.showResume()}},"resume"),n.a.createElement(g.a.Link,{onClick:function(){return e.openFeedback()}},"feedback"),n.a.createElement("div",{style:{padding:".5rem"}},n.a.createElement(E.a,{links:L,color:"grey",hoverColor:"white",iconSize:"1"}))))),n.a.createElement(x,{showResume:this.state.showResume,hideResume:this.hideResume}),n.a.createElement(y,{showFeedback:this.state.showFeedback,openFeedback:this.openFeedback,hideFeedback:this.hideFeedback}))}}]),a}(n.a.Component),R=a(127),S=(a(228),a(16)),U=a(66),z=a.n(U),B=a(17);function A(){var e=Object(u.a)(["\n    background-color: black !important;\n"]);return A=function(){return e},e}var H=Object(s.a)(B.a)(A());var T=function(e){return n.a.createElement(H,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,{hover:!0,zoom:!0},n.a.createElement(B.a.Img,{variant:"top",src:z.a}),n.a.createElement(S.g,{className:"flex-center"},n.a.createElement("p",{className:"white-text"},"about"))))},J=a(197),Q=a.n(J);function M(){var e=Object(u.a)(["\n      background-color: black !important;\n    "]);return M=function(){return e},e}var P=function(e){var t=Object(s.a)(B.a)(M());return n.a.createElement(t,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,{hover:!0,zoom:!0},n.a.createElement(B.a.Img,{variant:"top",src:Q.a}),n.a.createElement(S.g,{className:"flex-center"},n.a.createElement("p",{className:"white-text"},"Hobbies"))))},W=a(198),G=a.n(W);function K(){var e=Object(u.a)(["\n        background-color: black !important;\n    "]);return K=function(){return e},e}var $=function(e){var t=Object(s.a)(B.a)(K());return n.a.createElement(t,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,{hover:!0,zoom:!0},n.a.createElement(B.a.Img,{variant:"top",src:G.a}),n.a.createElement(S.g,{className:"flex-center"},n.a.createElement("p",{className:"white-text"},"> Hello World"))))};function V(){var e=Object(u.a)(["\n    background-color: black !important;\n"]);return V=function(){return e},e}var X=Object(s.a)(B.a)(V());var Y=function(e){return n.a.createElement(X,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,{hover:!0,zoom:!0},n.a.createElement(B.a.Img,{variant:"top",src:z.a}),n.a.createElement(S.g,{className:"flex-center"},n.a.createElement("p",{className:"white-text"},"articles"))))};function Z(){var e=Object(u.a)(["\n    background-color: black !important;\n"]);return Z=function(){return e},e}var _=Object(s.a)(B.a)(Z());var ee=function(e){return n.a.createElement(_,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,{hover:!0,zoom:!0},n.a.createElement(B.a.Img,{variant:"top",src:z.a}),n.a.createElement(S.g,{className:"flex-center"},n.a.createElement("p",{className:"white-text"},"life(home)"))))},te=a(35),ae=a.n(te);function ie(){var e=Object(u.a)(["\n    height: 100%!important;\n"]);return ie=function(){return e},e}function ne(){var e=Object(u.a)(["\n    background-color: black !important;\n    height: 45vw;\n    display: block;\n    width: 100%;\n"]);return ne=function(){return e},e}function re(){var e=Object(u.a)(["\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-align: justify;\n    text-justify: inter-word;\n"]);return re=function(){return e},e}var oe=s.a.div(re()),ue=Object(s.a)(B.a)(ne()),le=Object(s.a)(B.a.Img)(ie());var ce=function(e){return n.a.createElement(ue,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,null,n.a.createElement(le,{variant:"top",src:ae.a}),n.a.createElement(S.g,null,n.a.createElement(oe,null,n.a.createElement("h2",null,"Projects"),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function se(){var e=Object(u.a)(["\n    height: 100%!important;\n"]);return se=function(){return e},e}function me(){var e=Object(u.a)(["\n    background-color: black !important;\n    height: 45vw;\n    display: block;\n    width: 100%;\n"]);return me=function(){return e},e}function de(){var e=Object(u.a)(["\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: justify;\n  text-justify: inter-word;\n"]);return de=function(){return e},e}var pe=s.a.div(de()),be=Object(s.a)(B.a)(me()),he=Object(s.a)(B.a.Img)(se());var fe=function(e){return n.a.createElement(be,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,null,n.a.createElement(he,{variant:"top",src:ae.a}),n.a.createElement(S.g,null,n.a.createElement(pe,null,n.a.createElement("h2",null,"Hobbies"),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function ge(){var e=Object(u.a)(["\n    height: 100%!important;\n"]);return ge=function(){return e},e}function ve(){var e=Object(u.a)(["\n    background-color: black !important;\n    height: 45vw;\n    display: block;\n    width: 100%;\n"]);return ve=function(){return e},e}function Ee(){var e=Object(u.a)(["\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: justify;\n  text-justify: inter-word;\n"]);return Ee=function(){return e},e}var ke=s.a.div(Ee()),qe=Object(s.a)(B.a)(ve()),xe=Object(s.a)(B.a.Img)(ge());var je=function(e){return n.a.createElement(qe,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,null,n.a.createElement(xe,{variant:"top",src:ae.a}),n.a.createElement(S.g,null,n.a.createElement(ke,null,n.a.createElement("h2",null,"Articles"),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function Ce(){var e=Object(u.a)(["\n    height: 100%!important;\n"]);return Ce=function(){return e},e}function Oe(){var e=Object(u.a)(["\n    background-color: black !important;\n    height: 45vw;\n    display: block;\n    width: 100%;\n"]);return Oe=function(){return e},e}function ye(){var e=Object(u.a)(["\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: justify;\n  text-justify: inter-word;\n"]);return ye=function(){return e},e}var we=s.a.div(ye()),Ne=Object(s.a)(B.a)(Oe()),Fe=Object(s.a)(B.a.Img)(Ce());var De=function(e){return n.a.createElement(Ne,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,null,n.a.createElement(Fe,{variant:"top",src:ae.a}),n.a.createElement(S.g,null,n.a.createElement(we,null,n.a.createElement("h2",null,"Life"),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function Le(){var e=Object(u.a)(["\n    height: 100%!important;\n"]);return Le=function(){return e},e}function Ie(){var e=Object(u.a)(["\n    background-color: black !important;\n    height: 45vw;\n    display: block;\n    width: 100%;\n"]);return Ie=function(){return e},e}function Re(){var e=Object(u.a)(["\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  text-align: justify;\n  text-justify: inter-word;\n"]);return Re=function(){return e},e}var Se=s.a.div(Re()),Ue=Object(s.a)(B.a)(Ie()),ze=Object(s.a)(B.a.Img)(Le());var Be=function(e){return n.a.createElement(Ue,{bg:"dark",text:"light",onClick:e.onClick},n.a.createElement(S.l,null,n.a.createElement(ze,{variant:"top",src:ae.a}),n.a.createElement(S.g,null,n.a.createElement(Se,null,n.a.createElement("h2",null,"About"),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),n.a.createElement("p",{className:"grey-text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function Ae(){var e=Object(u.a)(["\n            background-color: black;\n        "]);return Ae=function(){return e},e}var He=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(m.a)(this,a),(i=t.call(this,e)).handleOpenClick=i.handleOpenClick.bind(Object(p.a)(i)),i.handleCloseClick=i.handleCloseClick.bind(Object(p.a)(i)),i.state={isOpen:!1},i.state={openedCard:null},i}return Object(d.a)(a,[{key:"handleOpenClick",value:function(e){switch(this.setState({isOpen:!0}),e){case"project":this.setState({openedCard:n.a.createElement(ce,{onClick:this.handleCloseClick})});break;case"hobbies":this.setState({openedCard:n.a.createElement(fe,{onClick:this.handleCloseClick})});break;case"articles":this.setState({openedCard:n.a.createElement(je,{onClick:this.handleCloseClick})});break;case"life":this.setState({openedCard:n.a.createElement(De,{onClick:this.handleCloseClick})});break;case"about":this.setState({openedCard:n.a.createElement(Be,{onClick:this.handleCloseClick})});break;default:console.log("No card with name: "+e)}}},{key:"handleCloseClick",value:function(){this.setState({isOpen:!1})}},{key:"render",value:function(){var e,t=this,a=this.state.isOpen,i=this.state.openedCard,r=s.a.div(Ae());return e=a?n.a.createElement("div",{className:"descriptionCard"},i):n.a.createElement(r,{className:"mainCard"},n.a.createElement(R.a,null,n.a.createElement($,{onClick:function(){return t.handleOpenClick("project")}}),n.a.createElement(P,{onClick:function(){return t.handleOpenClick("hobbies")}})),n.a.createElement(R.a,null,n.a.createElement(T,{onClick:function(){return t.handleOpenClick("about")}}),n.a.createElement(Y,{onClick:function(){return t.handleOpenClick("articles")}}),n.a.createElement(ee,{onClick:function(){return t.handleOpenClick("life")}}))),n.a.createElement("div",null,e)}}]),a}(n.a.Component);function Te(){var e=Object(u.a)(["\n    margin: 0!important;\n    text-align: center;\n    // line-height: 400px;\n    color: #555555;\n"]);return Te=function(){return e},e}function Je(){var e=Object(u.a)(["\n    background-color: #000000!important;\n    margin: 0!important;\n"]);return Je=function(){return e},e}function Qe(){var e=Object(u.a)(["\n    background-color: #000000!important;\n    padding: 1em 2em;\n"]);return Qe=function(){return e},e}var Me=s.a.div(Qe()),Pe=s.a.div(Je()),We=s.a.p(Te()),Ge=["https://www.linkedin.com/in/jesus-punlay-068098110/","https://twitter.com/jesuspunlay","https://www.facebook.com/jesuspunlay","https://www.youtube.com/jesuspunlay","https://www.instagram.com/jesuspunlay/","https://github.com/jpunlay"];var Ke=function(){return n.a.createElement(l.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(I,null),n.a.createElement(c.a,{path:"/home-ui"},n.a.createElement(Pe,{className:"topBox"},n.a.createElement(We,null)),n.a.createElement(Me,null,n.a.createElement(He,null)),n.a.createElement(E.a,{links:Ge,color:"grey",hoverColor:"white",iconSize:"1"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(406),a(407),a(408);o.a.render(n.a.createElement(Ke,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},66:function(e,t,a){e.exports=a.p+"static/media/ph1.c8d08e25.jpeg"}},[[200,1,2]]]);
//# sourceMappingURL=main.a76d6508.chunk.js.map