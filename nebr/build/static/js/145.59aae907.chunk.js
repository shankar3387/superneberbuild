(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[145],{1036:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=function(){function e(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(a,t,r){return t&&e(a.prototype,t),r&&e(a,r),a}}(),s=o(t(0)),n=o(t(73));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e){function a(){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var e=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this));return e.displayName="FontAwesome",e}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),l(a,[{key:"render",value:function(){var e=this.props,a=e.border,t=e.cssModule,l=e.className,n=e.fixedWidth,o=e.flip,i=e.inverse,c=e.name,u=e.pulse,f=e.rotate,p=e.size,m=e.spin,d=e.stack,b=e.tag,h=void 0===b?"span":b,x=e.ariaLabel,y=function(e,a){var t={};for(var r in e)a.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}(e,["border","cssModule","className","fixedWidth","flip","inverse","name","pulse","rotate","size","spin","stack","tag","ariaLabel"]),E=x?{"aria-label":x}:{"aria-hidden":!0},g=[];return t?(g.push(t.fa),g.push(t["fa-"+c]),p&&g.push(t["fa-"+p]),m&&g.push(t["fa-spin"]),u&&g.push(t["fa-pulse"]),a&&g.push(t["fa-border"]),n&&g.push(t["fa-fw"]),i&&g.push(t["fa-inverse"]),o&&g.push(t["fa-flip-"+o]),f&&g.push(t["fa-rotate-"+f]),d&&g.push(t["fa-stack-"+d])):(g.push("fa"),g.push("fa-"+c),p&&g.push("fa-"+p),m&&g.push("fa-spin"),u&&g.push("fa-pulse"),a&&g.push("fa-border"),n&&g.push("fa-fw"),i&&g.push("fa-inverse"),o&&g.push("fa-flip-"+o),f&&g.push("fa-rotate-"+f),d&&g.push("fa-stack-"+d)),l&&g.push(l),s.default.createElement(h,r({},y,E,{className:g.join(" ")}))}}]),a}(s.default.Component);i.propTypes={ariaLabel:n.default.string,border:n.default.bool,className:n.default.string,cssModule:n.default.object,fixedWidth:n.default.bool,flip:n.default.oneOf(["horizontal","vertical"]),inverse:n.default.bool,name:n.default.string.isRequired,pulse:n.default.bool,rotate:n.default.oneOf([90,180,270]),size:n.default.oneOf(["lg","2x","3x","4x","5x"]),spin:n.default.bool,stack:n.default.oneOf(["1x","2x"]),tag:n.default.string},a.default=i,e.exports=a.default},1305:function(e,a,t){"use strict";t.r(a);t(103);var r=t(39),l=(t(104),t(16)),s=(t(599),t(386)),n=t(1),o=(t(1007),t(1008)),i=t(65),c=t(0),u=t.n(c),f=t(1036),p=t.n(f),m=t(1062),d=t(217),b=t(216),h=t(219),x=t(994);a.default=function(){var e=o.a.useForm(),a=Object(i.a)(e,1)[0],t=Object(c.useState)({values:null}),f=Object(i.a)(t,2),y=f[0],E=f[1];return u.a.createElement(d.Cards,{title:u.a.createElement("div",{className:"setting-card-title"},u.a.createElement(h.default,{as:"h4"},"Social Profiles"),u.a.createElement("span",null,"Add elsewhere links to your profile "))},u.a.createElement(m.SocialProfileForm,null,u.a.createElement(r.a,{justify:"center"},u.a.createElement(l.a,{xxl:12,xl:14,sm:18,xs:24},u.a.createElement(x.BasicFormWrapper,null,u.a.createElement(o.a,{name:"social",onFinish:function(e){E(Object(n.a)(Object(n.a)({},y),{},{values:e}))}},u.a.createElement(o.a.Item,{name:"facebook",label:"Facebook"},u.a.createElement(s.a,{className:"facebook",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"facebook"}),placeholder:"URL"})),u.a.createElement(o.a.Item,{name:"twitter",label:"Twitter"},u.a.createElement(s.a,{className:"twitter",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"twitter"}),placeholder:"@username"})),u.a.createElement(o.a.Item,{name:"dribbble",label:"Dribbble"},u.a.createElement(s.a,{className:"dribbble",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"dribbble"}),placeholder:"URL"})),u.a.createElement(o.a.Item,{name:"instagram",label:"Instagram"},u.a.createElement(s.a,{className:"instagram",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"instagram"}),placeholder:"URL"})),u.a.createElement(o.a.Item,{name:"github",label:"GitHub"},u.a.createElement(s.a,{className:"github",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"github"}),placeholder:"Username"})),u.a.createElement(o.a.Item,{name:"Medium",label:"Medium"},u.a.createElement(s.a,{className:"medium",prefix:u.a.createElement(p.a,{className:"super-crazy-colors",size:"2x",style:{textShadow:"0 1px 0 rgba(0, 0, 0, 0.1)"},name:"medium"}),placeholder:"Url"})),u.a.createElement("div",{className:"setting-form-actions"},u.a.createElement(b.Button,{size:"default",htmlType:"submit",type:"primary"},"Update Social Profile"),"\xa0 \xa0",u.a.createElement(b.Button,{size:"default",onClick:function(e){e.preventDefault(),a.resetFields()},type:"light"},"Cancel"))))))))}}}]);