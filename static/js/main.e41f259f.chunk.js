(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var a=r(1),i=r.n(a),s=r(8),c=r.n(s),n=(r(13),r(4)),d=r(5),o=r(2),p=r(7),l=r(6),m=r(0),u=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).state={display:"\u266b"},a.changeDisplay=a.changeDisplay.bind(Object(o.a)(a)),a}return Object(d.a)(r,[{key:"changeDisplay",value:function(e){this.setState({display:"\u266b "+e})}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{id:"drum-machine",children:Object(m.jsxs)("div",{className:"grid-container",children:[Object(m.jsx)("div",{id:"display",children:Object(m.jsx)("h1",{children:this.state.display})}),u.map((function(t){return Object(m.jsx)(y,{clip:t,changeDisplay:e.changeDisplay},t.id)})),Object(m.jsx)("div",{id:"logo",children:Object(m.jsx)("h1",{children:"drum-machine\u2122"})})]})})}}]),r}(i.a.Component),y=function(e){Object(p.a)(r,e);var t=Object(l.a)(r);function r(e){var a;return Object(n.a)(this,r),(a=t.call(this,e)).handleKeyPress=a.handleKeyPress.bind(Object(o.a)(a)),a.playAudio=a.playAudio.bind(Object(o.a)(a)),a}return Object(d.a)(r,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.clip.keyCode&&(this.playAudio(),document.getElementById(this.props.clip.id).focus())}},{key:"playAudio",value:function(){var e=document.getElementById(this.props.clip.keyTrigger);e.currentTime=0,e.volume=.5,e.play(),this.props.changeDisplay(this.props.clip.id)}},{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsxs)("button",{className:"drum-pad",id:this.props.clip.id,onClick:this.playAudio,children:[Object(m.jsx)("audio",{className:"clip",id:this.props.clip.keyTrigger,src:this.props.clip.url}),this.props.clip.keyTrigger]})})}}]),r}(i.a.Component),j=h;var k=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(j,{})})};c.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(k,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e41f259f.chunk.js.map