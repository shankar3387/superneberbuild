(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[67],{1001:function(e,n,t){"use strict";t.r(n),t.d(n,"DateRangePickerOne",(function(){return E})),t.d(n,"CustomDateRange",(function(){return y}));t(1009);var r=t(1010),a=t(14),o=t(93),i=t(94),l=t(109),c=t(108),s=t(1),d=t(65),m=t(0),u=t.n(m),p=t(1544),f=(t(1024),t(1025),t(1026)),g=t(1003),b=t(216),E=function(){var e=Object(m.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:Object(p.a)(new Date,7),key:"selection"}}}),n=Object(d.a)(e,2),t=n[0],r=n[1],a=t.dateRangePicker,o=a.selection.startDate.toString().split(" "),i=a.selection.endDate.toString().split(" ");return u.a.createElement(g.ItemWraper,null,u.a.createElement(f.DateRangePicker,{onChange:function(e){r(Object(s.a)(Object(s.a)({},t),{},{dateRangePicker:Object(s.a)(Object(s.a)({},t.dateRangePicker),e)}))},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[a.selection],direction:"horizontal"}),u.a.createElement(g.ButtonGroup,null,u.a.createElement("p",null,"".concat(o[1]," ").concat(o[2]," ").concat(o[3]," - ").concat(i[1]," ").concat(i[2]," ").concat(i[3])),u.a.createElement(b.Button,{size:"small",type:"primary"},"Apply"),u.a.createElement(b.Button,{size:"small",type:"white",outlined:!0},"Cancel")))},y=function(e){Object(l.a)(t,e);var n=Object(c.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=n.call.apply(n,[this].concat(i))).state={startValue:null,endValue:null,endOpen:!1},e.disabledStartDate=function(n){var t=e.state.endValue;return!(!n||!t)&&n.valueOf()>t.valueOf()},e.disabledEndDate=function(n){var t=e.state.startValue;return!(!n||!t)&&n.valueOf()<=t.valueOf()},e.onChange=function(n,t){e.setState(Object(a.a)({},n,t))},e.onStartChange=function(n){e.onChange("startValue",n)},e.onEndChange=function(n){e.onChange("endValue",n)},e.handleStartOpenChange=function(n){n||e.setState({endOpen:!0})},e.handleEndOpenChange=function(n){e.setState({endOpen:n})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,n=e.startValue,t=e.endValue,a=e.endOpen;return u.a.createElement("div",null,u.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),u.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:t,placeholder:"End",onChange:this.onEndChange,open:a,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}}))}}]),t}(u.a.Component)},1003:function(e,n,t){"use strict";t.r(n),t.d(n,"ItemWraper",(function(){return l})),t.d(n,"ButtonGroup",(function(){return c}));var r=t(10),a=t(9);function o(){var e=Object(r.a)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return i=function(){return e},e}var l=a.b.div(i(),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]})),c=a.b.div(o(),(function(e){return e.theme.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(e){return e.theme["gray-color"]}))},1006:function(e,n,t){"use strict";var r=t(20),a=t(3),o=t(999),i={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var l=function(e){var n=e.icon,t=e.className,l=e.onClick,c=e.style,s=e.primaryColor,d=e.secondaryColor,m=Object(r.a)(e,["icon","className","onClick","style","primaryColor","secondaryColor"]),u=i;if(s&&(u={primaryColor:s,secondaryColor:d||Object(o.b)(s)}),Object(o.f)(),Object(o.g)(Object(o.c)(n),"icon should be icon definiton, but got ".concat(n)),!Object(o.c)(n))return null;var p=n;return p&&"function"===typeof p.icon&&(p=Object(a.a)(Object(a.a)({},p),{},{icon:p.icon(u.primaryColor,u.secondaryColor)})),Object(o.a)(p.icon,"svg-".concat(p.name),Object(a.a)({className:t,onClick:l,style:c,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},m))};l.displayName="IconReact",l.getTwoToneColors=function(){return Object(a.a)({},i)},l.setTwoToneColors=function(e){var n=e.primaryColor,t=e.secondaryColor;i.primaryColor=n,i.secondaryColor=t||Object(o.b)(n),i.calculated=!!t},n.a=l},1012:function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"a",(function(){return l}));var r=t(12),a=t(1006),o=t(999);function i(e){var n=Object(o.d)(e),t=Object(r.a)(n,2),i=t[0],l=t[1];return a.a.setTwoToneColors({primaryColor:i,secondaryColor:l})}function l(){var e=a.a.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}},1200:function(e,n,t){"use strict";t.r(n);t(103);var r=t(39),a=(t(104),t(16)),o=(t(56),t(1663),t(5)),i=t.n(o),l=t(6),c=t.n(l),s=t(58),d=t.n(s),m=t(0),u=t.n(m),p=t(4),f=t.n(p),g=t(110),b=t.n(g),E=t(45),y=t(54),h=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},v=function(e){var n,t,r=m.useContext(y.b).getPrefixCls,a=e.prefixCls,o=e.className,l=e.color,s=e.children,d=e.pending,u=e.dot,p=e.label,g=h(e,["prefixCls","className","color","children","pending","dot","label"]),b=r("timeline",a),v=f()((n={},c()(n,"".concat(b,"-item"),!0),c()(n,"".concat(b,"-item-pending"),d),n),o),D=f()((t={},c()(t,"".concat(b,"-item-head"),!0),c()(t,"".concat(b,"-item-head-custom"),u),c()(t,"".concat(b,"-item-head-").concat(l),!0),t));return m.createElement("li",i()({},Object(E.a)(g,["position"]),{className:v}),p&&m.createElement("div",{className:"".concat(b,"-item-label")},p),m.createElement("div",{className:"".concat(b,"-item-tail")}),m.createElement("div",{className:D,style:{borderColor:/blue|red|green|gray/.test(l||"")?void 0:l}},u),m.createElement("div",{className:"".concat(b,"-item-content")},s))};v.defaultProps={color:"blue",pending:!1,position:""};var D=v,O=t(33),C=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},w=function(e){var n,t=m.useContext(y.b),r=t.getPrefixCls,a=t.direction,o=e.prefixCls,l=e.pending,s=void 0===l?null:l,u=e.pendingDot,p=e.children,g=e.className,E=e.reverse,h=e.mode,v=C(e,["prefixCls","pending","pendingDot","children","className","reverse","mode"]),w=r("timeline",o),k="boolean"===typeof s?null:s,S=s?m.createElement(D,{pending:!!s,dot:u||m.createElement(b.a,null)},k):null,x=E?[S].concat(d()(m.Children.toArray(p).reverse())):[].concat(d()(m.Children.toArray(p)),[S]),P=function(e,n){return"alternate"===h?"right"===e.props.position?"".concat(w,"-item-right"):"left"===e.props.position?"".concat(w,"-item-left"):"".concat(w,n%2===0?"-item-left":"-item-right"):"left"===h?"".concat(w,"-item-left"):"right"===h||"right"===e.props.position?"".concat(w,"-item-right"):""},j=x.filter((function(e){return!!e})),I=m.Children.count(j),N="".concat(w,"-item-last"),T=m.Children.map(j,(function(e,n){var t=n===I-2?N:"",r=n===I-1?N:"";return Object(O.a)(e,{className:f()([e.props.className,!E&&s?t:r,P(e,n)])})})),z=x.some((function(e){var n;return!!(null===(n=null===e||void 0===e?void 0:e.props)||void 0===n?void 0:n.label)})),R=f()(w,(n={},c()(n,"".concat(w,"-pending"),!!s),c()(n,"".concat(w,"-reverse"),!!E),c()(n,"".concat(w,"-").concat(h),!!h&&!z),c()(n,"".concat(w,"-label"),z),c()(n,"".concat(w,"-rtl"),"rtl"===a),n),g);return m.createElement("ul",i()({},v,{className:R}),T)};w.Item=D,w.defaultProps={reverse:!1,mode:""};var k=w,S=t(11),x=t.n(S),P=t(1333),j=t(218),I=t(994),N=t(217),T=t(216),z=t(995),R=t(996),M=t(997);n.default=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(j.PageHeader,{title:"Timelines",buttons:[u.a.createElement("div",{key:"1",className:"page-header-actions"},u.a.createElement(M.CalendarButtonPageHeader,null),u.a.createElement(R.ExportButtonPageHeader,null),u.a.createElement(z.ShareButtonPageHeader,null),u.a.createElement(T.Button,{size:"small",type:"primary"},u.a.createElement(x.a,{icon:"plus",size:14}),"Add New"))]}),u.a.createElement(I.Main,null,u.a.createElement(r.a,{gutter:25},u.a.createElement(a.a,{md:12,sm:24,xs:24},u.a.createElement(N.Cards,{title:"Basic",caption:"The simplest use of Timelines"},u.a.createElement(k,null,u.a.createElement(k.Item,null,"Create a services site 2015-09-01"),u.a.createElement(k.Item,null,"Solve initial network problems 2015-09-01"),u.a.createElement(k.Item,null,"Technical testing 2015-09-01"),u.a.createElement(k.Item,null,"Network problems being solved 2015-09-01"))),u.a.createElement(N.Cards,{title:"Alternate",caption:"The simplest use of Timelines"},u.a.createElement(k,{mode:"alternate"},u.a.createElement(k.Item,null,"Create a services site 2015-09-01"),u.a.createElement(k.Item,{color:"green"},"Solve initial network problems 2015-09-01"),u.a.createElement(k.Item,{dot:u.a.createElement(P.a,{style:{fontSize:"16px"}})},"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."),u.a.createElement(k.Item,{color:"red"},"Network problems being solved 2015-09-01"),u.a.createElement(k.Item,null,"Create a services site 2015-09-01"),u.a.createElement(k.Item,{dot:u.a.createElement(P.a,{style:{fontSize:"16px"}})},"Technical testing 2015-09-01"))),u.a.createElement(N.Cards,{title:"Custom",caption:"The simplest use of Timelines"},u.a.createElement(k,null,u.a.createElement(k.Item,null,"Create a services site 2015-09-01"),u.a.createElement(k.Item,null,"Solve initial network problems 2015-09-01"),u.a.createElement(k.Item,{dot:u.a.createElement(P.a,{style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),u.a.createElement(k.Item,null,"Network problems being solved 2015-09-01")))),u.a.createElement(a.a,{md:12,sm:24,xs:24},u.a.createElement(N.Cards,{title:"Color",caption:"The simplest use of Timelines"},u.a.createElement(k,null,u.a.createElement(k.Item,{color:"green"},"Create a services site 2015-09-01"),u.a.createElement(k.Item,{color:"green"},"Create a services site 2015-09-01"),u.a.createElement(k.Item,{color:"red"},u.a.createElement("p",null,"Solve initial network problems 1"),u.a.createElement("p",null,"Solve initial network problems 2"),u.a.createElement("p",null,"Solve initial network problems 3 2015-09-01")),u.a.createElement(k.Item,null,u.a.createElement("p",null,"Technical testing 1"),u.a.createElement("p",null,"Technical testing 2"),u.a.createElement("p",null,"Technical testing 3 2015-09-01")),u.a.createElement(k.Item,{color:"gray"},u.a.createElement("p",null,"Technical testing 1"),u.a.createElement("p",null,"Technical testing 2"),u.a.createElement("p",null,"Technical testing 3 2015-09-01")),u.a.createElement(k.Item,{color:"gray"},u.a.createElement("p",null,"Technical testing 1"),u.a.createElement("p",null,"Technical testing 2"),u.a.createElement("p",null,"Technical testing 3 2015-09-01")))),u.a.createElement(N.Cards,{title:"Right alternate",caption:"The simplest use of Timelines"},u.a.createElement(k,{mode:"right"},u.a.createElement(k.Item,null,"Create a services site 2015-09-01"),u.a.createElement(k.Item,null,"Solve initial network problems 2015-09-01"),u.a.createElement(k.Item,{dot:u.a.createElement(P.a,{style:{fontSize:"16px"}}),color:"red"},"Technical testing 2015-09-01"),u.a.createElement(k.Item,null,"Network problems being solved 2015-09-01")))))))}},1333:function(e,n,t){"use strict";var r=t(0),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"},o=t(993),i=function(e,n){return r.createElement(o.a,Object.assign({},e,{ref:n,icon:a}))};i.displayName="ClockCircleOutlined";n.a=r.forwardRef(i)},1663:function(e,n,t){},993:function(e,n,t){"use strict";var r=t(12),a=t(7),o=t(20),i=t(0),l=t(4),c=t.n(l),s=t(1006),d=t(1012),m=t(999);Object(d.b)("#1890ff");var u=i.forwardRef((function(e,n){var t=e.className,l=e.icon,d=e.spin,u=e.rotate,p=e.tabIndex,f=e.onClick,g=e.twoToneColor,b=Object(o.a)(e,["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]),E=c()("anticon",Object(a.a)({},"anticon-".concat(l.name),Boolean(l.name)),t),y=c()({"anticon-spin":!!d||"loading"===l.name}),h=p;void 0===h&&f&&(h=-1);var v=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,D=Object(m.d)(g),O=Object(r.a)(D,2),C=O[0],w=O[1];return i.createElement("span",Object.assign({role:"img","aria-label":l.name},b,{ref:n,tabIndex:h,onClick:f,className:E}),i.createElement(s.a,{className:y,icon:l,primaryColor:C,secondaryColor:w,style:v}))}));u.displayName="AntdIcon",u.getTwoToneColor=d.a,u.setTwoToneColor=d.b,n.a=u},995:function(e,n,t){"use strict";t.r(n),t.d(n,"ShareButtonPageHeader",(function(){return d}));var r=t(0),a=t.n(r),o=t(2),i=t(11),l=t.n(i),c=t(385),s=t(216),d=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"facebook"}),a.a.createElement("span",null,"Facebook")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"twitter"}),a.a.createElement("span",null,"Twitter")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"rss"}),a.a.createElement("span",null,"Feed")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"linkedin"}),a.a.createElement("span",null,"Linkedin")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"instagram"}),a.a.createElement("span",null,"Instagram")));return a.a.createElement(c.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(s.Button,{size:"small",type:"white",key:"3"},a.a.createElement(l.a,{icon:"share-2",size:14}),"Share"))}},996:function(e,n,t){"use strict";t.r(n),t.d(n,"ExportButtonPageHeader",(function(){return d}));var r=t(0),a=t.n(r),o=t(2),i=t(11),l=t.n(i),c=t(385),s=t(216),d=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"printer"}),a.a.createElement("span",null,"Printer")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"book-open"}),a.a.createElement("span",null,"PDF")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"file-text"}),a.a.createElement("span",null,"Google Sheets")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"x"}),a.a.createElement("span",null,"Excel (XLSX)")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"file"}),a.a.createElement("span",null,"CSV")));return a.a.createElement(c.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(s.Button,{size:"small",type:"white"},a.a.createElement(l.a,{icon:"download",size:14}),"Export"))}},997:function(e,n,t){"use strict";t.r(n),t.d(n,"CalendarButtonPageHeader",(function(){return d}));var r=t(0),a=t.n(r),o=t(11),i=t.n(o),l=t(385),c=t(1001),s=t(216),d=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(c.DateRangePickerOne,null));return a.a.createElement(l.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover"},a.a.createElement(s.Button,{size:"small",type:"white"},a.a.createElement(i.a,{icon:"calendar",size:14}),"Calendar"))}},999:function(e,n,t){"use strict";t.d(n,"g",(function(){return d})),t.d(n,"c",(function(){return m})),t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f})),t.d(n,"d",(function(){return g})),t.d(n,"e",(function(){return b})),t.d(n,"f",(function(){return h}));var r=t(3),a=t(30),o=t(603),i=t(0),l=t.n(i),c=t(18),s=t(604);function d(e,n){Object(c.a)(e,"[@ant-design/icons] ".concat(n))}function m(e){return"object"===Object(a.a)(e)&&"string"===typeof e.name&&"string"===typeof e.theme&&("object"===Object(a.a)(e.icon)||"function"===typeof e.icon)}function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce((function(n,t){var r=e[t];switch(t){case"class":n.className=r,delete n.class;break;default:n[t]=r}return n}),{})}function p(e,n,t){return t?l.a.createElement(e.tag,Object(r.a)(Object(r.a)({key:n},u(e.attrs)),t),(e.children||[]).map((function(t,r){return p(t,"".concat(n,"-").concat(e.tag,"-").concat(r))}))):l.a.createElement(e.tag,Object(r.a)({key:n},u(e.attrs)),(e.children||[]).map((function(t,r){return p(t,"".concat(n,"-").concat(e.tag,"-").concat(r))})))}function f(e){return Object(o.generate)(e)[0]}function g(e){return e?Array.isArray(e)?e:[e]:[]}var b={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},E="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",y=!1,h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E;Object(i.useEffect)((function(){y||(Object(s.insertCss)(e,{prepend:!0}),y=!0)}),[])}}}]);