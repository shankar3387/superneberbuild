(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[92],{1001:function(e,n,t){"use strict";t.r(n),t.d(n,"DateRangePickerOne",(function(){return y})),t.d(n,"CustomDateRange",(function(){return h}));t(1009);var r=t(1010),a=t(14),o=t(93),i=t(94),l=t(109),d=t(108),c=t(1),s=t(65),u=t(0),m=t.n(u),p=t(1544),g=(t(1024),t(1025),t(1026)),f=t(1003),E=t(216),y=function(){var e=Object(u.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:Object(p.a)(new Date,7),key:"selection"}}}),n=Object(s.a)(e,2),t=n[0],r=n[1],a=t.dateRangePicker,o=a.selection.startDate.toString().split(" "),i=a.selection.endDate.toString().split(" ");return m.a.createElement(f.ItemWraper,null,m.a.createElement(g.DateRangePicker,{onChange:function(e){r(Object(c.a)(Object(c.a)({},t),{},{dateRangePicker:Object(c.a)(Object(c.a)({},t.dateRangePicker),e)}))},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[a.selection],direction:"horizontal"}),m.a.createElement(f.ButtonGroup,null,m.a.createElement("p",null,"".concat(o[1]," ").concat(o[2]," ").concat(o[3]," - ").concat(i[1]," ").concat(i[2]," ").concat(i[3])),m.a.createElement(E.Button,{size:"small",type:"primary"},"Apply"),m.a.createElement(E.Button,{size:"small",type:"white",outlined:!0},"Cancel")))},h=function(e){Object(l.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=n.call.apply(n,[this].concat(i))).state={startValue:null,endValue:null,endOpen:!1},e.disabledStartDate=function(n){var t=e.state.endValue;return!(!n||!t)&&n.valueOf()>t.valueOf()},e.disabledEndDate=function(n){var t=e.state.startValue;return!(!n||!t)&&n.valueOf()<=t.valueOf()},e.onChange=function(n,t){e.setState(Object(a.a)({},n,t))},e.onStartChange=function(n){e.onChange("startValue",n)},e.onEndChange=function(n){e.onChange("endValue",n)},e.handleStartOpenChange=function(n){n||e.setState({endOpen:!0})},e.handleEndOpenChange=function(n){e.setState({endOpen:n})},e}return Object(i.a)(t,[{key:"render",value:function(){var e=this.state,n=e.startValue,t=e.endValue,a=e.endOpen;return m.a.createElement("div",null,m.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),m.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:t,placeholder:"End",onChange:this.onEndChange,open:a,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}}))}}]),t}(m.a.Component)},1003:function(e,n,t){"use strict";t.r(n),t.d(n,"ItemWraper",(function(){return l})),t.d(n,"ButtonGroup",(function(){return d}));var r=t(10),a=t(9);function o(){var e=Object(r.a)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"]);return o=function(){return e},e}function i(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return i=function(){return e},e}var l=a.b.div(i(),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]})),d=a.b.div(o(),(function(e){return e.theme.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(e){return e.theme["gray-color"]}))},1015:function(e,n,t){"use strict";t(56),t(1071)},1071:function(e,n,t){},1201:function(e,n,t){"use strict";t.r(n);t(103);var r=t(39),a=(t(56),t(1640),t(5)),o=t.n(a),i=t(6),l=t.n(i),d=t(0),c=t.n(d),s=t(4),u=t.n(s),m=t(57),p=t(54),g={small:8,middle:16,large:24};function f(e){var n=e.className,t=e.direction,r=e.index,a=e.size,o=e.marginDirection,i=e.children,c=d.useContext(y);return null===i||void 0===i?null:d.createElement("div",{className:n,style:r>=c?{}:l()({},"vertical"===t?"marginBottom":o,"string"===typeof a?g[a]:a)},i)}var E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t},y=d.createContext(0),h=function(e){var n,t=d.useContext(p.b),r=t.getPrefixCls,a=t.space,i=t.direction,c=e.size,s=void 0===c?(null===a||void 0===a?void 0:a.size)||"small":c,g=e.align,h=e.className,D=e.children,b=e.direction,v=void 0===b?"horizontal":b,P=e.prefixCls,O=E(e,["size","align","className","children","direction","prefixCls"]),S=Object(m.a)(D,{keepEmpty:!0});if(0===S.length)return null;var w=void 0===g&&"horizontal"===v?"center":g,x=r("space",P),k=u()(x,"".concat(x,"-").concat(v),(n={},l()(n,"".concat(x,"-rtl"),"rtl"===i),l()(n,"".concat(x,"-align-").concat(w),w),n),h),C="".concat(x,"-item"),z="rtl"===i?"marginLeft":"marginRight",N=0,B=S.map((function(e,n){return null!==e&&void 0!==e&&(N=n),d.createElement(f,{className:C,key:"".concat(C,"-").concat(n),direction:v,size:s,index:n,marginDirection:z},e)}));return d.createElement("div",o()({className:k},O),d.createElement(y.Provider,{value:N},B))},D=(t(104),t(16)),b=(t(1015),t(389)),v=t(11),P=t.n(v),O=t(218),S=t(994),w=t(217),x=t(216),k=t(995),C=t(996),z=t(997);n.default=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(O.PageHeader,{ghost:!0,title:"Message",buttons:[c.a.createElement("div",{key:"1",className:"page-header-actions"},c.a.createElement(z.CalendarButtonPageHeader,null),c.a.createElement(C.ExportButtonPageHeader,null),c.a.createElement(k.ShareButtonPageHeader,null),c.a.createElement(x.Button,{size:"small",type:"primary"},c.a.createElement(P.a,{icon:"plus",size:14}),"Add New"))]}),c.a.createElement(S.Main,null,c.a.createElement(r.a,{gutter:25},c.a.createElement(D.a,{md:12,sm:24,xs:24},c.a.createElement(w.Cards,{title:"Basic"},c.a.createElement(S.MessageStyleWrapper,null,c.a.createElement(x.Button,{type:"primary",size:"large",raised:!0,onClick:function(){b.b.info("This is a normal message")}},"Display normal message")))),c.a.createElement(D.a,{md:12,sm:24,xs:24},c.a.createElement(w.Cards,{title:"Customize"},c.a.createElement(S.MessageStyleWrapper,null,c.a.createElement(x.Button,{className:"btn-outlined",type:"light",outlined:!0,size:"large",onClick:function(){b.b.success("This is a prompt message for success, and it will disappear in 10 seconds",10)}},"Customized display duration")))),c.a.createElement(D.a,{md:12,sm:24,xs:24},c.a.createElement(w.Cards,{title:"Other types of message"},c.a.createElement(h,null,c.a.createElement("div",{className:"message-button-list"},c.a.createElement(x.Button,{className:"btn-outlined",type:"light",outlined:!0,size:"large",onClick:function(){b.b.success("This is a success message")}},"Success"),c.a.createElement(x.Button,{className:"btn-outlined",type:"light",outlined:!0,size:"large",onClick:function(){b.b.error("This is an error message")}},"Error"),c.a.createElement(x.Button,{className:"btn-outlined",type:"light",outlined:!0,size:"large",onClick:function(){b.b.warning("This is a warning message")}},"Warning"))))),c.a.createElement(D.a,{md:12,sm:24,xs:24},c.a.createElement(w.Cards,{title:"Loading"},c.a.createElement(S.MessageStyleWrapper,null,c.a.createElement(x.Button,{className:"btn-outlined",type:"light",outlined:!0,size:"large",onClick:function(){var e=b.b.loading("Action in progress..",0);setTimeout(e,2500)}},"Display a loading indicator")))))))}},1640:function(e,n,t){},995:function(e,n,t){"use strict";t.r(n),t.d(n,"ShareButtonPageHeader",(function(){return s}));var r=t(0),a=t.n(r),o=t(2),i=t(11),l=t.n(i),d=t(385),c=t(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"facebook"}),a.a.createElement("span",null,"Facebook")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"twitter"}),a.a.createElement("span",null,"Twitter")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"rss"}),a.a.createElement("span",null,"Feed")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"linkedin"}),a.a.createElement("span",null,"Linkedin")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"instagram"}),a.a.createElement("span",null,"Instagram")));return a.a.createElement(d.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(c.Button,{size:"small",type:"white",key:"3"},a.a.createElement(l.a,{icon:"share-2",size:14}),"Share"))}},996:function(e,n,t){"use strict";t.r(n),t.d(n,"ExportButtonPageHeader",(function(){return s}));var r=t(0),a=t.n(r),o=t(2),i=t(11),l=t.n(i),d=t(385),c=t(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"printer"}),a.a.createElement("span",null,"Printer")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"book-open"}),a.a.createElement("span",null,"PDF")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"file-text"}),a.a.createElement("span",null,"Google Sheets")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"x"}),a.a.createElement("span",null,"Excel (XLSX)")),a.a.createElement(o.d,{to:"#"},a.a.createElement(l.a,{size:16,icon:"file"}),a.a.createElement("span",null,"CSV")));return a.a.createElement(d.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(c.Button,{size:"small",type:"white"},a.a.createElement(l.a,{icon:"download",size:14}),"Export"))}},997:function(e,n,t){"use strict";t.r(n),t.d(n,"CalendarButtonPageHeader",(function(){return s}));var r=t(0),a=t.n(r),o=t(11),i=t.n(o),l=t(385),d=t(1001),c=t(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(d.DateRangePickerOne,null));return a.a.createElement(l.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover"},a.a.createElement(c.Button,{size:"small",type:"white"},a.a.createElement(i.a,{icon:"calendar",size:14}),"Calendar"))}}}]);