(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[108],{1001:function(e,n,t){"use strict";t.r(n),t.d(n,"DateRangePickerOne",(function(){return g})),t.d(n,"CustomDateRange",(function(){return b}));t(1009);var r=t(1010),a=t(14),o=t(93),d=t(94),c=t(109),i=t(108),l=t(1),u=t(65),s=t(0),m=t.n(s),h=t(1544),p=(t(1024),t(1025),t(1026)),f=t(1003),E=t(216),g=function(){var e=Object(s.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:Object(h.a)(new Date,7),key:"selection"}}}),n=Object(u.a)(e,2),t=n[0],r=n[1],a=t.dateRangePicker,o=a.selection.startDate.toString().split(" "),d=a.selection.endDate.toString().split(" ");return m.a.createElement(f.ItemWraper,null,m.a.createElement(p.DateRangePicker,{onChange:function(e){r(Object(l.a)(Object(l.a)({},t),{},{dateRangePicker:Object(l.a)(Object(l.a)({},t.dateRangePicker),e)}))},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[a.selection],direction:"horizontal"}),m.a.createElement(f.ButtonGroup,null,m.a.createElement("p",null,"".concat(o[1]," ").concat(o[2]," ").concat(o[3]," - ").concat(d[1]," ").concat(d[2]," ").concat(d[3])),m.a.createElement(E.Button,{size:"small",type:"primary"},"Apply"),m.a.createElement(E.Button,{size:"small",type:"white",outlined:!0},"Cancel")))},b=function(e){Object(c.a)(t,e);var n=Object(i.a)(t);function t(){var e;Object(o.a)(this,t);for(var r=arguments.length,d=new Array(r),c=0;c<r;c++)d[c]=arguments[c];return(e=n.call.apply(n,[this].concat(d))).state={startValue:null,endValue:null,endOpen:!1},e.disabledStartDate=function(n){var t=e.state.endValue;return!(!n||!t)&&n.valueOf()>t.valueOf()},e.disabledEndDate=function(n){var t=e.state.startValue;return!(!n||!t)&&n.valueOf()<=t.valueOf()},e.onChange=function(n,t){e.setState(Object(a.a)({},n,t))},e.onStartChange=function(n){e.onChange("startValue",n)},e.onEndChange=function(n){e.onChange("endValue",n)},e.handleStartOpenChange=function(n){n||e.setState({endOpen:!0})},e.handleEndOpenChange=function(n){e.setState({endOpen:n})},e}return Object(d.a)(t,[{key:"render",value:function(){var e=this.state,n=e.startValue,t=e.endValue,a=e.endOpen;return m.a.createElement("div",null,m.a.createElement(r.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:n,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),m.a.createElement(r.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:t,placeholder:"End",onChange:this.onEndChange,open:a,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}}))}}]),t}(m.a.Component)},1003:function(e,n,t){"use strict";t.r(n),t.d(n,"ItemWraper",(function(){return c})),t.d(n,"ButtonGroup",(function(){return i}));var r=t(10),a=t(9);function o(){var e=Object(r.a)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"]);return o=function(){return e},e}function d(){var e=Object(r.a)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return d=function(){return e},e}var c=a.b.div(d(),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]})),i=a.b.div(o(),(function(e){return e.theme.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(e){return e.theme["gray-color"]}))},1034:function(e,n,t){"use strict";t.r(n),t.d(n,"Checkbox",(function(){return i})),t.d(n,"CheckboxGroup",(function(){return c}));var r=t(65),a=t(0),o=t.n(a),d=t(1072),c=d.CheckboxStyle.Group,i=function(e){var n=e.item,t=e.defaultSelect,i=e.multiple,l=e.onChange,u=e.onChangeTriger,s=e.defaultChecked,m=e.disabled,h=e.children,p=n,f=Object(a.useState)({checkedList:t,indeterminate:!0,checkAll:!1}),E=Object(r.a)(f,2),g=E[0],b=E[1];Object(a.useEffect)((function(){u&&u(g.checkedList)}),[g]);return i?o.a.createElement("div",null,o.a.createElement("div",{style:{borderBottom:"1px solid #E9E9E9"}},o.a.createElement(d.CheckboxStyle,{indeterminate:g.indeterminate,onChange:function(e){b({checkedList:e.target.checked?p:[],indeterminate:!1,checkAll:e.target.checked})},checked:g.checkAll},"Check all")),o.a.createElement("br",null),o.a.createElement(c,{options:p,value:g.checkedList,onChange:function(e){b({checkedList:e,indeterminate:!!e.length&&e.length<p.length,checkAll:e.length===p.length})}})):o.a.createElement(d.CheckboxStyle,{onChange:function(e){return l(e.target.checked,e.target.value)},defaultChecked:s,disabled:m},h)}},1072:function(e,n,t){"use strict";t.r(n),t.d(n,"CheckboxStyle",(function(){return c}));t(610);var r=t(196),a=t(10),o=t(9);function d(){var e=Object(a.a)(["\n\n"]);return d=function(){return e},e}var c=Object(o.b)(r.a)(d())},1167:function(e,n,t){"use strict";t.r(n);t(103);var r=t(39),a=(t(104),t(16)),o=t(1),d=t(65),c=t(0),i=t.n(c),l=t(11),u=t.n(l),s=t(218),m=t(994),h=t(217),p=t(1034),f=t(216),E=t(995),g=t(996),b=t(997);n.default=function(){var e=Object(c.useState)({checkData:[],checked:null}),n=Object(d.a)(e,2),t=n[0],l=n[1],y=function(e){l(Object(o.a)(Object(o.a)({},t),{},{checked:e}))};return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.PageHeader,{title:"Checkbox",buttons:[i.a.createElement("div",{key:"1",className:"page-header-actions"},i.a.createElement(b.CalendarButtonPageHeader,null),i.a.createElement(g.ExportButtonPageHeader,null),i.a.createElement(E.ShareButtonPageHeader,null),i.a.createElement(f.Button,{size:"small",type:"primary"},i.a.createElement(u.a,{icon:"plus",size:14}),"Add New"))]}),i.a.createElement(m.Main,null,i.a.createElement(r.a,{gutter:25},i.a.createElement(a.a,{md:12,xs:24},i.a.createElement(h.Cards,{title:"Basic"},i.a.createElement(p.Checkbox,{onChange:y},"Checkbox")),i.a.createElement(h.Cards,{title:"Basic"},i.a.createElement(p.Checkbox,{onChange:y},"Checkbox")),i.a.createElement(h.Cards,{title:"Check all"},i.a.createElement(p.Checkbox,{multiple:!0,onChangeTriger:function(e){l(Object(o.a)(Object(o.a)({},t),{},{checkData:e}))},item:["Apple","Pear","Orange"],defaultSelect:["Pear"]}))),i.a.createElement(a.a,{md:12,xs:24},i.a.createElement(h.Cards,{title:"Disabled"},i.a.createElement(p.Checkbox,{defaultChecked:!1,disabled:!0}),i.a.createElement("br",null),i.a.createElement(p.Checkbox,{defaultChecked:!0,disabled:!0}))))))}},995:function(e,n,t){"use strict";t.r(n),t.d(n,"ShareButtonPageHeader",(function(){return u}));var r=t(0),a=t.n(r),o=t(2),d=t(11),c=t.n(d),i=t(385),l=t(216),u=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"facebook"}),a.a.createElement("span",null,"Facebook")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"twitter"}),a.a.createElement("span",null,"Twitter")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"rss"}),a.a.createElement("span",null,"Feed")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"linkedin"}),a.a.createElement("span",null,"Linkedin")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"instagram"}),a.a.createElement("span",null,"Instagram")));return a.a.createElement(i.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(l.Button,{size:"small",type:"white",key:"3"},a.a.createElement(c.a,{icon:"share-2",size:14}),"Share"))}},996:function(e,n,t){"use strict";t.r(n),t.d(n,"ExportButtonPageHeader",(function(){return u}));var r=t(0),a=t.n(r),o=t(2),d=t(11),c=t.n(d),i=t(385),l=t(216),u=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"printer"}),a.a.createElement("span",null,"Printer")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"book-open"}),a.a.createElement("span",null,"PDF")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"file-text"}),a.a.createElement("span",null,"Google Sheets")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"x"}),a.a.createElement("span",null,"Excel (XLSX)")),a.a.createElement(o.d,{to:"#"},a.a.createElement(c.a,{size:16,icon:"file"}),a.a.createElement("span",null,"CSV")));return a.a.createElement(i.Popover,{placement:"bottomLeft",content:e,trigger:"click"},a.a.createElement(l.Button,{size:"small",type:"white"},a.a.createElement(c.a,{icon:"download",size:14}),"Export"))}},997:function(e,n,t){"use strict";t.r(n),t.d(n,"CalendarButtonPageHeader",(function(){return u}));var r=t(0),a=t.n(r),o=t(11),d=t.n(o),c=t(385),i=t(1001),l=t(216),u=function(){var e=a.a.createElement(a.a.Fragment,null,a.a.createElement(i.DateRangePickerOne,null));return a.a.createElement(c.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover"},a.a.createElement(l.Button,{size:"small",type:"white"},a.a.createElement(d.a,{icon:"calendar",size:14}),"Calendar"))}}}]);