(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[138],{1042:function(e){e.exports=JSON.parse('{"data":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"positiveAndNegative":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":-3000,"pv":1398,"amt":2210},{"name":"Page C","uv":-2000,"pv":-9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":-1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":-3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"nullChart":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":0,"pv":0,"amt":0},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"data01":[{"name":"Group A","value":400},{"name":"Group B","value":300},{"name":"Group C","value":300},{"name":"Group D","value":200}],"data02":[{"name":"A1","value":100},{"name":"A2","value":300},{"name":"B1","value":100},{"name":"B2","value":80},{"name":"B3","value":40},{"name":"B4","value":30},{"name":"B5","value":50},{"name":"C1","value":100},{"name":"C2","value":200},{"name":"D1","value":150},{"name":"D2","value":50}],"radar":[{"subject":"Math","A":120,"B":110,"fullMark":150},{"subject":"Chinese","A":98,"B":130,"fullMark":150},{"subject":"English","A":86,"B":130,"fullMark":150},{"subject":"Geography","A":99,"B":100,"fullMark":150},{"subject":"Physics","A":85,"B":90,"fullMark":150},{"subject":"History","A":65,"B":85,"fullMark":150}]}')},1151:function(e,a,t){"use strict";t.r(a);t(103);var n=t(39),l=(t(104),t(16)),r=t(65),m=t(0),i=t.n(m),c=t(1063),d=t(218),u=t(217),s=t(994),E=t(1042),o=E.data,v=E.positiveAndNegative;a.default=function(){var e=Object(m.useState)({responsive:0}),a=Object(r.a)(e,2),t=a[0],E=a[1],h=t.responsive;return Object(m.useLayoutEffect)((function(){function e(){var e=document.querySelector(".recharts-wrapper"),a=null!==e?e.closest(".ant-card-body").clientWidth:document.querySelector(".ant-card-body").clientWidth;E({responsive:a})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.PageHeader,{title:"Recharts Bar Chart"}),i.a.createElement(s.Main,null,i.a.createElement(n.a,{gutter:25},i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"TINY BAR CHART",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:o,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.c,{dataKey:"uv",fill:"#5F63F2"}),i.a.createElement(c.c,{dataKey:"pv",fill:"#82ca9d"}),i.a.createElement(c.c,{dataKey:"amt",fill:"#2F63F250"})))),i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"STACKED BAR CHART",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:o,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.c,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),i.a.createElement(c.c,{dataKey:"uv",stackId:"a",fill:"#82ca9d"})))),i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"MIX BAR CHART",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:o,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.c,{dataKey:"pv",stackId:"a",fill:"#8884d8"}),i.a.createElement(c.c,{dataKey:"amt",stackId:"a",fill:"#82ca9d"}),i.a.createElement(c.c,{dataKey:"uv",fill:"#ffc658"})))),i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"POSITIVE AND NEGATIVE BAR CHART",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:v,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.u,{y:0,stroke:"#000"}),i.a.createElement(c.c,{dataKey:"pv",fill:"#8884d8"}),i.a.createElement(c.c,{dataKey:"uv",fill:"#82ca9d"})))),i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"BAR CHART STACKED BY SIGN",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:v,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.u,{y:0,stroke:"#000"}),i.a.createElement(c.c,{dataKey:"pv",fill:"#8884d8",stackId:"stack"}),i.a.createElement(c.c,{dataKey:"uv",fill:"#82ca9d",stackId:"stack"})))),i.a.createElement(l.a,{md:12,xs:24},i.a.createElement(u.Cards,{title:"BIAXIAL BAR CHART",size:"large",more:!1},i.a.createElement(c.d,{width:h-5*h/100,height:h/2,data:o,margin:{top:20,right:window.innerWidth<=375?30:40,left:window.innerWidth<=375?-18:0,bottom:5}},i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,null),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.f,{strokeDasharray:"3 3"}),i.a.createElement(c.x,{dataKey:"name"}),i.a.createElement(c.y,{yAxisId:"left",orientation:"left",stroke:"#8884d8"}),i.a.createElement(c.y,{yAxisId:"right",orientation:"right",stroke:"#82ca9d"}),i.a.createElement(c.w,null),i.a.createElement(c.i,null),i.a.createElement(c.c,{yAxisId:"left",dataKey:"pv",fill:"#8884d8"}),i.a.createElement(c.c,{yAxisId:"right",dataKey:"uv",fill:"#82ca9d"})))))))}}}]);