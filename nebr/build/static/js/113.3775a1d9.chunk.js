(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[113],{1001:function(e,t,a){"use strict";a.r(t),a.d(t,"DateRangePickerOne",(function(){return y})),a.d(t,"CustomDateRange",(function(){return h}));a(1009);var n=a(1010),r=a(14),l=a(93),o=a(94),c=a(109),i=a(108),d=a(1),s=a(65),m=a(0),u=a.n(m),E=a(1544),p=(a(1024),a(1025),a(1026)),f=a(1003),g=a(216),y=function(){var e=Object(m.useState)({datePickerInternational:null,dateRangePicker:{selection:{startDate:new Date,endDate:Object(E.a)(new Date,7),key:"selection"}}}),t=Object(s.a)(e,2),a=t[0],n=t[1],r=a.dateRangePicker,l=r.selection.startDate.toString().split(" "),o=r.selection.endDate.toString().split(" ");return u.a.createElement(f.ItemWraper,null,u.a.createElement(p.DateRangePicker,{onChange:function(e){n(Object(d.a)(Object(d.a)({},a),{},{dateRangePicker:Object(d.a)(Object(d.a)({},a.dateRangePicker),e)}))},showSelectionPreview:!0,moveRangeOnFirstSelection:!1,className:"PreviewArea",months:2,ranges:[r.selection],direction:"horizontal"}),u.a.createElement(f.ButtonGroup,null,u.a.createElement("p",null,"".concat(l[1]," ").concat(l[2]," ").concat(l[3]," - ").concat(o[1]," ").concat(o[2]," ").concat(o[3])),u.a.createElement(g.Button,{size:"small",type:"primary"},"Apply"),u.a.createElement(g.Button,{size:"small",type:"white",outlined:!0},"Cancel")))},h=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={startValue:null,endValue:null,endOpen:!1},e.disabledStartDate=function(t){var a=e.state.endValue;return!(!t||!a)&&t.valueOf()>a.valueOf()},e.disabledEndDate=function(t){var a=e.state.startValue;return!(!t||!a)&&t.valueOf()<=a.valueOf()},e.onChange=function(t,a){e.setState(Object(r.a)({},t,a))},e.onStartChange=function(t){e.onChange("startValue",t)},e.onEndChange=function(t){e.onChange("endValue",t)},e.handleStartOpenChange=function(t){t||e.setState({endOpen:!0})},e.handleEndOpenChange=function(t){e.setState({endOpen:t})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.startValue,a=e.endValue,r=e.endOpen;return u.a.createElement("div",null,u.a.createElement(n.a,{disabledDate:this.disabledStartDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:t,placeholder:"Start",onChange:this.onStartChange,onOpenChange:this.handleStartOpenChange,style:{margin:"5px"}}),u.a.createElement(n.a,{disabledDate:this.disabledEndDate,showTime:!0,format:"YYYY-MM-DD HH:mm:ss",value:a,placeholder:"End",onChange:this.onEndChange,open:r,onOpenChange:this.handleEndOpenChange,style:{margin:"5px"}}))}}]),a}(u.a.Component)},1003:function(e,t,a){"use strict";a.r(t),a.d(t,"ItemWraper",(function(){return c})),a.d(t,"ButtonGroup",(function(){return i}));var n=a(10),r=a(9);function l(){var e=Object(n.a)(["\n    border-top: 1px solid #EEEFF2;\n    padding: 10px;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: flex-end;\n    margin: -4px -4px -15px;\n    p{\n        font-size: 13px;\n    margin: ",";\n        font-weight: 500;\n        color: ",";\n    }\n    button {\n        font-size: 12px;\n        margin: 4px;\n        height: 32px;\n        padding: 0px 13.26px;\n    }\n"]);return l=function(){return e},e}function o(){var e=Object(n.a)(["\n    display: flex;\n    flex-direction: column;\n    .rdrDateDisplay, .rdrMonthAndYearPickers{\n        display: none;\n    }\n    .rdrMonth {\n        position: relative;\n        max-width: 272px;\n    }\n    .rdrMonthName {\n        text-align: center;\n        font-size: 18px;\n        position: absolute;\n        top: -50px;\n        ",": 100px;\n        font-weight: 400;\n    }\n    .rdrDefinedRangesWrapper{\n        .rdrStaticRanges{\n            .rdrStaticRange{\n                border-bottom: 0 none;\n                &:hover,\n                &.rdrStaticRangeSelected{\n                    span{\n                        font-weight: 400;\n                        color: ",";\n                        background-color: #EFEFFE;\n                    }\n                }\n                .rdrStaticRangeLabel{\n                    padding: 9px 10px;\n                }\n            }\n        }\n    }\n    .rdrCalendarWrapper{\n        .rdrPprevButton,\n        .rdrNextButton{\n            padding: 0;\n            background: transparent;\n        }\n        .rdrMonthsHorizontal{\n            .rdrMonth{\n                .rdrMonthName{\n                    font-size: 13px;\n                    font-weight: 500;\n                    color: ",";\n                }\n            }\n            .rdrDays{\n                .rdrSelected, \n                .rdrInRange{                    \n                    background-color: #EFEFFE;\n                    left: 0 !important;\n                    right: 0 !important;\n                }\n                .rdrStartEdge{\n                    right: 0 !important;\n                    left: 0 !important;\n                    ",";\n                    ",";\n                }\n                .rdrEndEdge{\n                    ",";\n                    ",";\n                }\n                .rdrDayStartOfMonth .rdrDayInPreview, .rdrDayStartOfMonth .rdrDayEndPreview, .rdrDayStartOfWeek .rdrDayInPreview, .rdrDayStartOfWeek .rdrDayEndPreview{\n                    border-radius: 0px;\n                }\n                \n                .rdrDayEndOfWeek .rdrDayStartPreview,\n                .rdrDayEndOfWeek .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview,\n                .rdrDayEndOfMonth .rdrDayInPreview,\n                .rdrDayEndOfMonth .rdrInRange, \n                .rdrDayEndOfWeek .rdrInRange, \n                .rdrDayEndOfWeek .rdrStartEdge\n                .rdrDayStartOfMonth .rdrInRange, \n                .rdrDayStartOfWeek .rdrInRange{\n                    border-radius: 0;\n                }\n\n                .rdrDayEndOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfWeek .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayEndOfMonth .rdrDayStartPreview.rdrDayEndPreview,\n                .rdrDayStartOfMonth .rdrDayStartPreview.rdrDayEndPreview{\n                    border-radius: 1.042em;\n                    color: #fff !important;\n                }\n                \n                .rdrDayEndPreview,\n                .rdrDayStartPreview,\n                .rdrDayInPreview{\n                    border: 0 none;\n                    background-color: #EFEFFE;\n                    color: "," !importtant;\n                    top: 0;\n                    bottom: 0;\n                }\n                \n                .rdrStartEdge, \n                .rdrEndEdge,\n                .rdrDayStartPreview,\n                .rdrDayEndPreview{\n                    background-color: ",";\n                }\n\n                .rdrDay:not(.rdrDayPassive) .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrSelected ~ .rdrDayNumber span{\n                    color: "," !important;\n                }\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrInRange ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrDayInPreview ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive).rdrDayHovered .rdrSelected ~ .rdrDayNumber span{\n                    color: #fff !important;\n                }\n                .rdrDay:not(.rdrDayPassive) .rdrDayEndPreview ~ .rdrDayNumber span,\n                .rdrDay:not(.rdrDayPassive) .rdrStartEdge ~ .rdrDayNumber span, \n                .rdrDay:not(.rdrDayPassive) .rdrEndEdge ~ .rdrDayNumber span{\n                    color: #fff;\n                }\n                .rdrDay{\n                    margin-bottom: 3px;\n                    .rdrSelected, \n                    .rdrInRange, \n                    .rdrStartEdge, \n                    .rdrEndEdge{\n                        top: 0;\n                        bottom: 0;\n\n                    }\n                    .rdrDayNumber{\n                        z-index: 10;\n                    }\n                    &.rdrDayToday{\n                        background-color: ",";\n                        color: #fff;\n                        border-radius: 50%;\n                        .rdrDayNumber{\n                            span{\n                                color: #fff;\n                                &:after{\n                                    display: none;\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }\n"]);return o=function(){return e},e}var c=r.b.div(o(),(function(e){return e.theme.rtl?"right":"left"}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme.rtl?"border-top-right-radius: 1.042em; border-top-left-radius: 0em;":"border-top-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-right-radius: 1.042em;border-bottom-left-radius: 0em;":"border-bottom-left-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-top-left-radius: 1.042em;border-top-right-radius: 0;":"border-top-right-radius: 1.042em;"}),(function(e){return e.theme.rtl?"border-bottom-left-radius: 1.042em;border-bottom-right-radius: 0;":"border-bottom-right-radius: 1.042em;"}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]}),(function(e){return e.theme["dark-color"]}),(function(e){return e.theme["primary-color"]})),i=r.b.div(l(),(function(e){return e.theme.rtl?"0 0 0 20px":"0 20px 0 0"}),(function(e){return e.theme["gray-color"]}))},1175:function(e,t,a){"use strict";a.r(t);a(103);var n=a(39),r=(a(104),a(16)),l=a(0),o=a.n(l),c=a(11),i=a.n(c),d=a(1311),s=a(218),m=a(994),u=a(217),E=a(216),p=a(995),f=a(996),g=a(997);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.PageHeader,{title:"Grid",buttons:[o.a.createElement("div",{key:"1",className:"page-header-actions"},o.a.createElement(g.CalendarButtonPageHeader,null),o.a.createElement(f.ExportButtonPageHeader,null),o.a.createElement(p.ShareButtonPageHeader,null),o.a.createElement(E.Button,{size:"small",type:"primary"},o.a.createElement(i.a,{icon:"plus",size:14}),"Add New"))]}),o.a.createElement(m.Main,null,o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"Basic Grid",size:"default"},o.a.createElement(d.GridStyle,null,o.a.createElement(n.a,null,o.a.createElement(r.a,{span:12},"col-12"),o.a.createElement(r.a,{span:12},"col-12")),o.a.createElement(n.a,null,o.a.createElement(r.a,{span:8},"col-8"),o.a.createElement(r.a,{span:8},"col-8"),o.a.createElement(r.a,{span:8},"col-8")),o.a.createElement(n.a,null,o.a.createElement(r.a,{span:6},"col-6"),o.a.createElement(r.a,{span:6},"col-6"),o.a.createElement(r.a,{span:6},"col-6"),o.a.createElement(r.a,{span:6},"col-6")))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"Grid Gutter",size:"default"},o.a.createElement(d.GridStyleGutter,null,o.a.createElement(n.a,{gutter:16},o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6"))),o.a.createElement(n.a,{gutter:[{xs:8,sm:16,md:24,lg:32},20]},o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6")),o.a.createElement(r.a,{className:"gutter-row",span:6},o.a.createElement("div",{className:"gutter-box"},"col-6"))))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"Column offset",size:"default"},o.a.createElement(d.GridStyleOffset,null,o.a.createElement(n.a,null,o.a.createElement(r.a,{span:8},"col-8"),o.a.createElement(r.a,{span:8,offset:8},"col-8")),o.a.createElement(n.a,null,o.a.createElement(r.a,{span:6,offset:6},"col-6 col-offset-6"),o.a.createElement(r.a,{span:6,offset:6},"col-6 col-offset-6")),o.a.createElement(n.a,null,o.a.createElement(r.a,{span:12,offset:6},"col-12 col-offset-6")))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"Grid sort",size:"default"},o.a.createElement(d.GridStyle,null,o.a.createElement(n.a,null,o.a.createElement(r.a,{span:18,push:6},"col-18 col-push-6"),o.a.createElement(r.a,{span:6,pull:18},"col-6 col-pull-18")))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"sub-element align",size:"default"},o.a.createElement(d.GridStyle,null,o.a.createElement("p",null,"sub-element align left"),o.a.createElement(n.a,{type:"flex",justify:"start"},o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4")),o.a.createElement("p",null,"sub-element align center"),o.a.createElement(n.a,{type:"flex",justify:"center"},o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4")),o.a.createElement("p",null,"sub-element align right"),o.a.createElement(n.a,{type:"flex",justify:"end"},o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4")),o.a.createElement("p",null,"sub-element monospaced arrangement"),o.a.createElement(n.a,{type:"flex",justify:"space-between"},o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4")),o.a.createElement("p",null,"sub-element align full"),o.a.createElement(n.a,{type:"flex",justify:"space-around"},o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4"),o.a.createElement(r.a,{span:4},"col-4")))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"Responsive",size:"default"},o.a.createElement(d.GridStyle,null,o.a.createElement(n.a,null,o.a.createElement(r.a,{xs:2,sm:4,md:6,lg:8,xl:10},"Col"),o.a.createElement(r.a,{xs:20,sm:16,md:12,lg:8,xl:4},"Col"),o.a.createElement(r.a,{xs:2,sm:4,md:6,lg:8,xl:10},"Col")))))),o.a.createElement(n.a,{gutter:15},o.a.createElement(r.a,{xs:24},o.a.createElement(u.Cards,{headless:!0,title:"More Responsive",size:"default"},o.a.createElement(d.GridStyle,null,o.a.createElement(n.a,null,o.a.createElement(r.a,{xs:{span:5,offset:1},lg:{span:6,offset:2}},"Col"),o.a.createElement(r.a,{xs:{span:11,offset:1},lg:{span:6,offset:2}},"Col"),o.a.createElement(r.a,{xs:{span:5,offset:1},lg:{span:6,offset:2}},"Col"))))))))}},1311:function(e,t,a){"use strict";a.r(t),a.d(t,"GridStyle",(function(){return d})),a.d(t,"GridStyleGutter",(function(){return s})),a.d(t,"GridStyleOffset",(function(){return m}));var n=a(10),r=a(9);function l(){var e=Object(n.a)(["\n    .ant-row .ant-col {\n        height: 50px;\n        background: ",";\n        text-align: center;        \n        margin-bottom: 15px;\n        line-height: 50px;\n        color: #ffff;\n    }    \n"]);return l=function(){return e},e}function o(){var e=Object(n.a)(["\n    .ant-row .ant-col .gutter-box {\n        height: 50px;\n        background: ",";\n        text-align: center;        \n        margin-bottom: 15px;\n        line-height: 50px;\n        color: #ffff;\n    }    \n"]);return o=function(){return e},e}function c(){var e=Object(n.a)(["\n    .ant-row .ant-col, .ant-row-flex .ant-col {\n        height: 50px;\n        background: ",";\n        text-align: center;        \n        margin-bottom: 15px;\n        line-height: 50px;\n        color: #ffff;\n    }\n    .ant-row .ant-col:nth-child(even), .ant-row-flex .ant-col:nth-child(even) {\n        background: ","95;\n    }\n"]);return c=function(){return e},e}var i=a(192).default.theme,d=r.b.div(c(),i["primary-color"],i["primary-color"]),s=r.b.div(o(),i["primary-color"]),m=r.b.div(l(),i["primary-color"])},995:function(e,t,a){"use strict";a.r(t),a.d(t,"ShareButtonPageHeader",(function(){return s}));var n=a(0),r=a.n(n),l=a(2),o=a(11),c=a.n(o),i=a(385),d=a(216),s=function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"facebook"}),r.a.createElement("span",null,"Facebook")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"twitter"}),r.a.createElement("span",null,"Twitter")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"rss"}),r.a.createElement("span",null,"Feed")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"linkedin"}),r.a.createElement("span",null,"Linkedin")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"instagram"}),r.a.createElement("span",null,"Instagram")));return r.a.createElement(i.Popover,{placement:"bottomLeft",content:e,trigger:"click"},r.a.createElement(d.Button,{size:"small",type:"white",key:"3"},r.a.createElement(c.a,{icon:"share-2",size:14}),"Share"))}},996:function(e,t,a){"use strict";a.r(t),a.d(t,"ExportButtonPageHeader",(function(){return s}));var n=a(0),r=a.n(n),l=a(2),o=a(11),c=a.n(o),i=a(385),d=a(216),s=function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"printer"}),r.a.createElement("span",null,"Printer")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"book-open"}),r.a.createElement("span",null,"PDF")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"file-text"}),r.a.createElement("span",null,"Google Sheets")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"x"}),r.a.createElement("span",null,"Excel (XLSX)")),r.a.createElement(l.d,{to:"#"},r.a.createElement(c.a,{size:16,icon:"file"}),r.a.createElement("span",null,"CSV")));return r.a.createElement(i.Popover,{placement:"bottomLeft",content:e,trigger:"click"},r.a.createElement(d.Button,{size:"small",type:"white"},r.a.createElement(c.a,{icon:"download",size:14}),"Export"))}},997:function(e,t,a){"use strict";a.r(t),a.d(t,"CalendarButtonPageHeader",(function(){return s}));var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=a(385),i=a(1001),d=a(216),s=function(){var e=r.a.createElement(r.a.Fragment,null,r.a.createElement(i.DateRangePickerOne,null));return r.a.createElement(c.Popover,{placement:"bottomRight",title:"Search by Calendar",content:e,action:"hover"},r.a.createElement(d.Button,{size:"small",type:"white"},r.a.createElement(o.a,{icon:"calendar",size:14}),"Calendar"))}}}]);