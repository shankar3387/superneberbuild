(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[152],{967:function(e,a,t){"use strict";t.r(a);var r=t(14),l=t(65),n=t(0),s=t.n(n),c=t(59);a.default=function(e){var a=Object(n.useState)({item:{},errorMessage:""}),t=Object(l.a)(a,2),m=t[0],o=t[1],i=m.errorMessage;return s.a.createElement("div",{className:"app-container",style:{backgroundColor:"#cedaf3"}},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row mt-5"},s.a.createElement("div",{className:"col-sm-9 col-md-7 col-lg-5 mx-auto mt-4"},s.a.createElement("div",{className:"card card-signin my-5"},s.a.createElement("div",{className:"card-body"},s.a.createElement("h5",{className:"card-title text-center"},"Community Login"),s.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=e.history;console.log(a),localStorage.setItem("login_type","seller"),t.push("/seller")},className:"form-signin"},s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{onChange:function(e){var a=e.target,t=a.name,l=a.value;o({items:Object(r.a)({},t,l)})},name:"email",type:"text",className:"form-control",placeholder:"Email"})),s.a.createElement("div",{className:"form-row form-group"},s.a.createElement("div",{className:"col"},s.a.createElement("input",{type:"password",className:"form-control",id:!0,placeholder:"Password",name:"password"}))),s.a.createElement("div",null,i),s.a.createElement("button",{className:"btn btn-lg btn-warning text-white btn-block text-uppercase",type:"submit"},"Login"),s.a.createElement("div",{className:"mt-4"},s.a.createElement("div",{className:"float-right pr-2"},s.a.createElement(c.Link,{to:"/login",href:!0},s.a.createElement("i",{className:"fa fa-arrow-circle-right","aria-hidden":"true",style:{fontSize:30,color:"#ffa500"}}))),s.a.createElement("p",{className:"mb-0 pt-1"},"Want to Login as a User?")))))))))}}}]);