(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[102],{1006:function(e,t,n){"use strict";var a=n(20),r=n(3),c=n(999),o={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var i=function(e){var t=e.icon,n=e.className,i=e.onClick,l=e.style,s=e.primaryColor,u=e.secondaryColor,m=Object(a.a)(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),d=o;if(s&&(d={primaryColor:s,secondaryColor:u||Object(c.b)(s)}),Object(c.f)(),Object(c.g)(Object(c.c)(t),"icon should be icon definiton, but got ".concat(t)),!Object(c.c)(t))return null;var f=t;return f&&"function"===typeof f.icon&&(f=Object(r.a)(Object(r.a)({},f),{},{icon:f.icon(d.primaryColor,d.secondaryColor)})),Object(c.a)(f.icon,"svg-".concat(f.name),Object(r.a)({className:n,onClick:i,style:l,"data-icon":f.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},m))};i.displayName="IconReact",i.getTwoToneColors=function(){return Object(r.a)({},o)},i.setTwoToneColors=function(e){var t=e.primaryColor,n=e.secondaryColor;o.primaryColor=t,o.secondaryColor=n||Object(c.b)(t),o.calculated=!!n},t.a=i},1012:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(12),r=n(1006),c=n(999);function o(e){var t=Object(c.d)(e),n=Object(a.a)(t,2),o=n[0],i=n[1];return r.a.setTwoToneColors({primaryColor:o,secondaryColor:i})}function i(){var e=r.a.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},1022:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(296);var r=n(398);function c(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},1132:function(e,t,n){"use strict";n.r(t),n.d(t,"Tag",(function(){return d}));n(599);var a=n(386),r=n(1022),c=n(1),o=n(65),i=n(0),l=n.n(i),s=n(1208),u=n(1228),m=u.TagStyle.CheckableTag,d=function(e){var t=Object(i.useState)({checked:!0,selectedTags:[]}),n=Object(o.a)(t,2),a=n[0],s=n[1],d=e.closable,b=e.onClose,g=e.color,y=e.checked,p=e.onChange,h=e.data,v=e.hottags,j=e.animate,O=e.children,C=h,E=function(e,t){var n=a.selectedTags,o=t?[].concat(Object(r.a)(n),[e]):n.filter((function(t){return t!==e}));s(Object(c.a)(Object(c.a)({},a),{},{selectedTags:o})),p&&p(o)},k=a.selectedTags;return y?l.a.createElement(m,{props:e,checked:a.checked,onChange:function(e){s(Object(c.a)(Object(c.a)({},a),{},{checke:e})),p&&p(e)}}):v?l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{style:{marginRight:8}},"Categories:"),C.map((function(e){return l.a.createElement(m,{key:e,checked:k.indexOf(e)>-1,onChange:function(t){return E(e,t)}},e)}))):j?l.a.createElement(f,{data:h,onChange:p}):l.a.createElement(u.TagStyle,{closable:d,onClose:function(e){b(e)},color:g},O)},f=function(e){var t=e.data,n=e.onChange,m=Object(i.useState)({tags:t,inputVisible:!1,inputValue:""}),d=Object(o.a)(m,2),f=d[0],b=d[1],g=function(){var e=f.inputValue,t=f.tags;e&&-1===t.indexOf(e)&&(t=[].concat(Object(r.a)(t),[e])),n&&n(t),b(Object(c.a)(Object(c.a)({},f),{},{tags:t,inputVisible:!1,inputValue:""}))},y=f.tags,p=f.inputVisible,h=f.inputValue,v=y.map((function(e){var t=l.a.createElement(u.TagStyle,{closable:!0,onClose:function(t){t.preventDefault(),function(e){var t=f.tags.filter((function(t){return t!==e}));b({tags:t}),n&&n(t)}(e)}},e);return l.a.createElement("span",{key:e,style:{display:"inline-block"}},t)}));return l.a.createElement("div",null,l.a.createElement("div",{style:{marginBottom:10}},v),p&&l.a.createElement(a.a,{autoFocus:!0,type:"text",size:"small",style:{width:78},value:h,onChange:function(e){b(Object(c.a)(Object(c.a)({},f),{},{inputValue:e.target.value}))},onBlur:g,onPressEnter:g}),!p&&l.a.createElement(u.TagStyle,{onClick:function(){b(Object(c.a)(Object(c.a)({},f),{},{inputVisible:!0}))},style:{background:"#fff",borderStyle:"dashed"}},l.a.createElement(s.a,null)," New Tag"))}},1208:function(e,t,n){"use strict";var a=n(0),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},c=n(993),o=function(e,t){return a.createElement(c.a,Object.assign({},e,{ref:t,icon:r}))};o.displayName="PlusOutlined";t.a=a.forwardRef(o)},1228:function(e,t,n){"use strict";n.r(t),n.d(t,"TagStyle",(function(){return i}));n(1247);var a=n(1317),r=n(10),c=n(9);function o(){var e=Object(r.a)(["\n\n"]);return o=function(){return e},e}var i=Object(c.b)(a.a)(o())},1304:function(e,t,n){"use strict";n.r(t);n(103);var a=n(39),r=(n(104),n(16)),c=(n(599),n(386)),o=n(1),i=(n(1007),n(1008)),l=n(65),s=(n(600),n(191)),u=n(0),m=n.n(u),d=n(217),f=n(216),b=n(994),g=n(219),y=n(1132),p=s.a.Option;t.default=function(){var e=i.a.useForm(),t=Object(l.a)(e,1)[0],n=Object(u.useState)({tags:["UI/UX","Branding","Product Design","Web Design"],values:null}),h=Object(l.a)(n,2),v=h[0],j=h[1];return m.a.createElement(d.Cards,{title:m.a.createElement("div",{className:"setting-card-title"},m.a.createElement(g.default,{as:"h4"},"Edit Profile"),m.a.createElement("span",null,"Set Up Your Personal Information"))},m.a.createElement(a.a,{justify:"center"},m.a.createElement(r.a,{xl:12,lg:16,xs:24},m.a.createElement(b.BasicFormWrapper,null,m.a.createElement(i.a,{name:"editProfile",onFinish:function(e){j(Object(o.a)(Object(o.a)({},v),{},{values:Object(o.a)(Object(o.a)({},e),{},{tags:v.tags})}))}},m.a.createElement(i.a.Item,{name:"name",initialValue:"Duran Clayton",label:"Name"},m.a.createElement(c.a,null)),m.a.createElement(i.a.Item,{name:"phone",initialValue:"01742920502",label:"Phone Number"},m.a.createElement(c.a,null)),m.a.createElement(i.a.Item,{name:"country",initialValue:"",label:"Country"},m.a.createElement(s.a,{style:{width:"100%"}},m.a.createElement(p,{value:""},"Please Select"),m.a.createElement(p,{value:"bangladesh"},"Bangladesh"),m.a.createElement(p,{value:"india"},"India"),m.a.createElement(p,{value:"pakistan"},"Pakistan"))),m.a.createElement(i.a.Item,{name:"city",initialValue:"",label:"City"},m.a.createElement(s.a,{style:{width:"100%"}},m.a.createElement(p,{value:""},"Please Select"),m.a.createElement(p,{value:"dhaka"},"Dhaka"),m.a.createElement(p,{value:"mymensingh"},"Mymensingh"),m.a.createElement(p,{value:"khulna"},"Khulna"))),m.a.createElement(i.a.Item,{name:"company",initialValue:"Example",label:"Company Name"},m.a.createElement(c.a,null)),m.a.createElement(i.a.Item,{name:"website",initialValue:"www.example.com",label:"Website"},m.a.createElement(c.a,null)),m.a.createElement(i.a.Item,{name:"userBio",initialValue:"Nam malesuada dolor tellus pretium amet was hendrerit facilisi id vitae enim sed ornare there suspendisse sed orci neque ac sed aliquet risus faucibus in pretium molestee.",label:"User Bio"},m.a.createElement(c.a.TextArea,{rows:3})),m.a.createElement(i.a.Item,{name:"skills",label:"Skills"},m.a.createElement(b.TagInput,null,m.a.createElement(y.Tag,{animate:!0,onChange:function(e){j({tags:e})},data:v.tags}))),m.a.createElement("div",{className:"setting-form-actions"},m.a.createElement(f.Button,{size:"default",htmlType:"submit",type:"primary"},"Update Profile"),"\xa0 \xa0",m.a.createElement(f.Button,{size:"default",onClick:function(e){e.preventDefault(),t.resetFields()},type:"light"},"Cancel")))))))}},993:function(e,t,n){"use strict";var a=n(12),r=n(7),c=n(20),o=n(0),i=n(4),l=n.n(i),s=n(1006),u=n(1012),m=n(999);Object(u.b)("#1890ff");var d=o.forwardRef((function(e,t){var n=e.className,i=e.icon,u=e.spin,d=e.rotate,f=e.tabIndex,b=e.onClick,g=e.twoToneColor,y=Object(c.a)(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),p=l()("anticon",Object(r.a)({},"anticon-".concat(i.name),Boolean(i.name)),n),h=l()({"anticon-spin":!!u||"loading"===i.name}),v=f;void 0===v&&b&&(v=-1);var j=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,O=Object(m.d)(g),C=Object(a.a)(O,2),E=C[0],k=C[1];return o.createElement("span",Object.assign({role:"img","aria-label":i.name},y,{ref:t,tabIndex:v,onClick:b,className:p}),o.createElement(s.a,{className:h,icon:i,primaryColor:E,secondaryColor:k,style:j}))}));d.displayName="AntdIcon",d.getTwoToneColor=u.a,d.setTwoToneColor=u.b,t.a=d},999:function(e,t,n){"use strict";n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return m})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return b})),n.d(t,"d",(function(){return g})),n.d(t,"e",(function(){return y})),n.d(t,"f",(function(){return v}));var a=n(3),r=n(30),c=n(603),o=n(0),i=n.n(o),l=n(18),s=n(604);function u(e,t){Object(l.a)(e,"[@ant-design/icons] ".concat(t))}function m(e){return"object"===Object(r.a)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(r.a)(e.icon)||"function"===typeof e.icon)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(t,n){var a=e[n];switch(n){case"class":t.className=a,delete t.class;break;default:t[n]=a}return t}),{})}function f(e,t,n){return n?i.a.createElement(e.tag,Object(a.a)(Object(a.a)({key:t},d(e.attrs)),n),(e.children||[]).map((function(n,a){return f(n,"".concat(t,"-").concat(e.tag,"-").concat(a))}))):i.a.createElement(e.tag,Object(a.a)({key:t},d(e.attrs)),(e.children||[]).map((function(n,a){return f(n,"".concat(t,"-").concat(e.tag,"-").concat(a))})))}function b(e){return Object(c.generate)(e)[0]}function g(e){return e?Array.isArray(e)?e:[e]:[]}var y={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},p="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",h=!1,v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;Object(o.useEffect)((function(){h||(Object(s.insertCss)(e,{prepend:!0}),h=!0)}),[])}}}]);