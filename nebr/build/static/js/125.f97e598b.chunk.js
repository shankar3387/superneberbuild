(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[125],{1157:function(e,t,a){"use strict";a(56),a(1463)},1204:function(e,t,a){"use strict";var n=a(5),l=a.n(n),i=a(6),c=a.n(i),s=a(0),o=a(7),r=a(12),d=a(20),m=a(4),u=a.n(m),f=a(112),p=a(23),E=s.forwardRef((function(e,t){var a,n=e.prefixCls,l=void 0===n?"rc-switch":n,i=e.className,c=e.checked,m=e.defaultChecked,E=e.disabled,h=e.loadingIcon,N=e.checkedChildren,y=e.unCheckedChildren,g=e.onClick,C=e.onChange,b=e.onKeyDown,v=Object(d.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),w=Object(f.a)(!1,{value:c,defaultValue:m}),k=Object(r.a)(w,2),_=k[0],x=k[1];function O(e,t){var a=_;return E||(x(a=e),null===C||void 0===C||C(a,t)),a}var j=u()(l,i,(a={},Object(o.a)(a,"".concat(l,"-checked"),_),Object(o.a)(a,"".concat(l,"-disabled"),E),a));return s.createElement("button",Object.assign({},v,{type:"button",role:"switch","aria-checked":_,disabled:E,className:j,ref:t,onKeyDown:function(e){e.which===p.a.LEFT?O(!1,e):e.which===p.a.RIGHT&&O(!0,e),null===b||void 0===b||b(e)},onClick:function(e){var t=O(!_,e);null===g||void 0===g||g(t,e)}}),h,s.createElement("span",{className:"".concat(l,"-inner")},_?N:y))}));E.displayName="Switch";var h=E,N=a(110),y=a.n(N),g=a(437),C=a(54),b=a(72),v=a(47),w=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(e);l<n.length;l++)t.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(e,n[l])&&(a[n[l]]=e[n[l]])}return a},k=s.forwardRef((function(e,t){var a,n=e.prefixCls,i=e.size,o=e.loading,r=e.className,d=void 0===r?"":r,m=e.disabled,f=w(e,["prefixCls","size","loading","className","disabled"]);Object(v.a)("checked"in f||!("value"in f),"Switch","`value` is not a valid prop, do you mean `checked`?");var p=s.useContext(C.b),E=p.getPrefixCls,N=p.direction,k=s.useContext(b.b),_=E("switch",n),x=s.createElement("div",{className:"".concat(_,"-handle")},o&&s.createElement(y.a,{className:"".concat(_,"-loading-icon")})),O=u()((a={},c()(a,"".concat(_,"-small"),"small"===(i||k)),c()(a,"".concat(_,"-loading"),o),c()(a,"".concat(_,"-rtl"),"rtl"===N),a),d);return s.createElement(g.a,{insertExtraNode:!0},s.createElement(h,l()({},f,{prefixCls:_,className:O,disabled:m||o,ref:t,loadingIcon:x})))}));k.__ANT_SWITCH=!0,k.displayName="Switch";t.a=k},1302:function(e,t,a){"use strict";a.r(t);a(103);var n=a(39),l=(a(104),a(16)),i=(a(1157),a(1204)),c=a(0),s=a.n(c),o=a(2),r=a(1062),d=a(217),m=a(216),u=a(219),f={display:"flex",justifyContent:"space-between",alignItems:"center",margin:0,padding:0};t.default=function(){return s.a.createElement(r.NotificationWrapper,null,s.a.createElement(d.Cards,{title:s.a.createElement("div",{className:"setting-card-title"},s.a.createElement(u.default,{as:"h4"},"Notifications"),s.a.createElement("span",null,"Choose What Notification you will Receive"))},s.a.createElement(n.a,{gutter:15},s.a.createElement(l.a,{xs:24},s.a.createElement("div",{className:"notification-box-single"},s.a.createElement(d.Cards,{headless:!0,bodyStyle:{backgroundColor:"#F7F8FA",borderRadius:10}},s.a.createElement("div",{style:{height:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"},className:"notification-header"},s.a.createElement(u.default,{className:"notification-header__text",as:"h4"},"Notifications"),s.a.createElement(o.c,{className:"btn-toggle",to:"#"},"Toggle all")),s.a.createElement("div",{className:"notification-body"},s.a.createElement(d.Cards,{headless:!0},s.a.createElement("nav",null,s.a.createElement("ul",{style:{margin:0,padding:0}},s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Company News"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!1})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Meetups Near you"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!0})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Opportunities"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!1})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Weekly News Letters"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!0}))))))))),s.a.createElement(l.a,{xs:24},s.a.createElement("div",{className:"notification-box-single"},s.a.createElement(d.Cards,{headless:!0,bodyStyle:{backgroundColor:"#F7F8FA",borderRadius:10}},s.a.createElement("div",{style:{height:"50px",display:"flex",justifyContent:"space-between",alignItems:"center"},className:"notification-header"},s.a.createElement(u.default,{className:"notification-header__text",as:"h4"},"Account Activity"),s.a.createElement(o.c,{className:"btn-toggle",to:"#"},"Toggle all")),s.a.createElement("div",{className:"notification-body"},s.a.createElement(d.Cards,{headless:!0},s.a.createElement("nav",null,s.a.createElement("ul",{style:{margin:0,padding:0}},s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Company News"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!1})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Meetups Near you"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!0})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Opportunities"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!1})),s.a.createElement("li",{style:f},s.a.createElement("div",{className:"notification-list-single"},s.a.createElement(u.default,{className:"notification-list-single__title",as:"h4"},"Weekly News Letters"),s.a.createElement("p",null,"Get Company News, announcements, and product updates")),s.a.createElement(i.a,{defaultChecked:!0})))))))))),s.a.createElement("div",{className:"notification-actions"},s.a.createElement(m.Button,{size:"default",type:"primary"},"Update Email Notifications"),"\xa0 \xa0",s.a.createElement(m.Button,{size:"default",type:"light"},"Cancel"))))}},1463:function(e,t,a){}}]);