(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[106],{1001:function(e,n,r){"use strict";r.r(n),r.d(n,"DateRangePickerOne",(function(){return y})),r.d(n,"CustomDateRange",(function(){return h}));r(1009);var t=r(1010),a=r(14),o=r(93),i=r(94),d=r(109),l=r(108),c=r(1),s=r(65),m=r(0),u=r.n(m),p=r(1544),f=(r(1024),r(1025),r(1026)),E=r(1003),g=r(216),y=function(){var e=Object(m.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:Object(p.a)(new Date,7),key:"selection"}}}),n=Object(s.a)(e,2),r=n[0],t=n[1],a=r.dateRangePicker,o=a.selection.startDate.toString().split(" "),i=a.selection.endDate.toString().split(" ");return u.a.createElement(E.ItemWraper,null,u.a.createElement(f.DateRangePicker,{onChange:function(e){t(Object(c.a)(Object(c.a)({},r),{},{dateRangePicker:Object(c.a)(Object(c.a)({},r.dateRangePicker),e)}))},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[a.selection],direction:"horizontal"}),u.a.createElement(E.ButtonGroup,null,u.a.createElement("p",null,"".concat(o[1]," ").concat(o[2]," ").concat(o[3]," - ").concat(i[1]," ").concat(i[2]," ").concat(i[3])),u.a.createElement(g.Button,{size:"small",type:"primary"},"Apply"),u.a.createElement(g.Button,{size:"small",type:"white",outlined:!0},"Cancel")))},h=function(e){Object(d.a)(r,e);var n=Object(l.a)(r);function r(){var e;Object(o.a)(this,r);for(var t=arguments.length,i=new Array(t),d=0;d<t;d++)i[d]=arguments[d];return(e=n.call.apply(n,[this].concat(i))).state={startValue:null,endValue:null,endOpen:!1},e.disabledStartDate=function(n){var r=e.state.endValue;return!(!n||!r)&&n.valueOf()>r.valueOf()},e.disabledEndDate=function(n){var r=e.state.startValue;return!(!n||!r)&&n.valueOf()<=r.valueOf()},e.onChange=function(n,r){e.setState(Object(a.a)({},n,r))},e.onStartChange=function(n){e.onChange("startValue",n)},e.onEndChange=function(n){e.onChange("endValue",n)},e.handleStartOpenChange=function(n){n||e.setState({endOpen:!0})},e.handleEndOpenChange=function(n){e.setState({endOpen:n})},e}return Object(i.a)(r,[{key:"render",value:function(){var e=this.state,n=e.startValue,r=e.endValue,a=e.endOpen;return u.a.createElement("div",null,u.a.createElement(t.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),u.a.createElement(t.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:r,placeholder:"End",onChange:this.onEndChange,open:a,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}}))}}]),r}(u.a.Component)},1003:function(e,n,r){"use strict";r.r(n),r.d(n,"ItemWraper",(function(){return d})),r.d(n,"ButtonGroup",(function(){return l}));var t=r(10),a=r(9);function o(){var e=Object(t.a)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"]);return o=function(){return e},e}function i(){var e=Object(t.a)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return i=function(){return e},e}var d=a.b.div(i(),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]})),l=a.b.div(o(),(function(e){return e.theme.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(e){return e.theme["gray-color"]}))},1202:function(e,n,r){"use strict";r.r(n);r(103);var t=r(39),a=(r(104),r(16)),o=(r(56),r(1664),r(1009),r(5)),i=r.n(o),d=r(0),l=r.n(d),c=r(1010),s=r(47),m=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]])}return r},u=c.a.TimePicker,p=c.a.RangePicker,f=d.forwardRef((function(e,n){return d.createElement(p,i()({},e,{picker:"time",mode:void 0,ref:n}))})),E=d.forwardRef((function(e,n){var r=e.addon,t=e.renderExtraFooter,a=e.popupClassName,o=m(e,["addon","renderExtraFooter","popupClassName"]),l=d.useMemo((function(){return t||(r?(Object(s.a)(!1,"TimePicker","`addon` is deprecated. Please use `renderExtraFooter` instead."),r):void 0)}),[r,t]);return d.createElement(u,i()({},o,{dropdownClassName:a,mode:void 0,ref:n,renderExtraFooter:l}))}));E.displayName="TimePicker",E.RangePicker=f;var g=E,y=(r(146),r(63)),h=r(65),D=r(11),b=r.n(D),v=r(1020),P=r.n(v),O=r(218),k=r(994),S=r(217),w=r(995),x=r(996),C=r(997);n.default=function(){var e=Object(d.useState)({open:!1}),n=Object(h.a)(e,2),r=n[0],o=n[1],i=function(){return o({open:!1})};return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.PageHeader,{title:"Time picker",buttons:[l.a.createElement("div",{key:"1",className:"page-header-actions"},l.a.createElement(C.CalendarButtonPageHeader,null),l.a.createElement(x.ExportButtonPageHeader,null),l.a.createElement(w.ShareButtonPageHeader,null),l.a.createElement(y.a,{size:"small",type:"primary"},l.a.createElement(b.a,{icon:"plus",size:14}),"Add New"))]}),l.a.createElement(k.Main,null,l.a.createElement(t.a,{gutter:25},l.a.createElement(a.a,{sm:12,xs:24},l.a.createElement(S.Cards,{title:"Basic",caption:"The simplest use of Time picker"},l.a.createElement(g,{defaultValue:P()("00:00:00","HH:mm:ss")})),l.a.createElement(S.Cards,{title:"interval option",caption:"The simplest use of Time picker"},l.a.createElement(g,{minuteStep:15,secondStep:10})),l.a.createElement(S.Cards,{title:"Three Size",caption:"The simplest use of Time picker"},l.a.createElement("div",{className:"timepicker-list"},l.a.createElement(g,{defaultValue:P()("12:08:23","HH:mm:ss"),style:{marginRight:"10px"}}),l.a.createElement(g,{defaultValue:P()("12:08:23","HH:mm:ss"),size:"large",style:{marginRight:"10px"}}),l.a.createElement(g,{defaultValue:P()("12:08:23","HH:mm:ss"),size:"small"}))),l.a.createElement(S.Cards,{title:"Addon",caption:"The simplest use of Time picker"},l.a.createElement(g,{open:r.open,onOpenChange:function(e){o({open:e})},renderExtraFooter:function(){return l.a.createElement(y.a,{size:"small",type:"primary",onClick:i},"Ok")}}))),l.a.createElement(a.a,{sm:12,xs:24},l.a.createElement(S.Cards,{title:"Disebled",caption:"The simplest use of Time picker"},l.a.createElement(g,{defaultValue:P()("12:08:23","HH:mm:ss"),disabled:!0})),l.a.createElement(S.Cards,{title:"12 hours",caption:"The simplest use of Time picker"},l.a.createElement("div",{className:"timepicker-list"},l.a.createElement(g,{use12Hours:!0,style:{marginRight:"10px"}}),l.a.createElement(g,{use12Hours:!0,format:"h:mm:ss A",style:{marginRight:"10px"}}),l.a.createElement(g,{use12Hours:!0,format:"h:mm a"}))),l.a.createElement(S.Cards,{title:"Hours and minute",caption:"The simplest use of Time picker"},l.a.createElement(g,{defaultValue:P()("12:08","HH:mm"),format:"HH:mm"}))))))}},1664:function(e,n,r){},995:function(e,n,r){"use strict";r.r(n),r.d(n,"ShareButtonPageHeader",(function(){return s}));var t=r(0),a=r.n(t),o=r(2),i=r(11),d=r.n(i),l=r(385),c=r(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"facebook"}),a.a.createElement("span",null,"Facebook")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"twitter"}),a.a.createElement("span",null,"Twitter")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"rss"}),a.a.createElement("span",null,"Feed")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"linkedin"}),a.a.createElement("span",null,"Linkedin")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"instagram"}),a.a.createElement("span",null,"Instagram")));return a.a.createElement(l.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(c.Button,{size:"small",type:"white",key:"3"},a.a.createElement(d.a,{icon:"share-2",size:14}),"Share"))}},996:function(e,n,r){"use strict";r.r(n),r.d(n,"ExportButtonPageHeader",(function(){return s}));var t=r(0),a=r.n(t),o=r(2),i=r(11),d=r.n(i),l=r(385),c=r(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"printer"}),a.a.createElement("span",null,"Printer")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"book-open"}),a.a.createElement("span",null,"PDF")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"file-text"}),a.a.createElement("span",null,"Google Sheets")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"x"}),a.a.createElement("span",null,"Excel (XLSX)")),a.a.createElement(o.d,{to:"#"},a.a.createElement(d.a,{size:16,icon:"file"}),a.a.createElement("span",null,"CSV")));return a.a.createElement(l.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(c.Button,{size:"small",type:"white"},a.a.createElement(d.a,{icon:"download",size:14}),"Export"))}},997:function(e,n,r){"use strict";r.r(n),r.d(n,"CalendarButtonPageHeader",(function(){return s}));var t=r(0),a=r.n(t),o=r(11),i=r.n(o),d=r(385),l=r(1001),c=r(216),s=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(l.DateRangePickerOne,null));return a.a.createElement(d.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover"},a.a.createElement(c.Button,{size:"small",type:"white"},a.a.createElement(i.a,{icon:"calendar",size:14}),"Calendar"))}}}]);