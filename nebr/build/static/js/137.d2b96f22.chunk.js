(this.webpackJsonpstrikingDash=this.webpackJsonpstrikingDash||[]).push([[137],{1042:function(e){e.exports=JSON.parse('{"data":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"positiveAndNegative":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":-3000,"pv":1398,"amt":2210},{"name":"Page C","uv":-2000,"pv":-9800,"amt":2290},{"name":"Page D","uv":2780,"pv":3908,"amt":2000},{"name":"Page E","uv":-1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":-3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"nullChart":[{"name":"Page A","uv":4000,"pv":2400,"amt":2400},{"name":"Page B","uv":3000,"pv":1398,"amt":2210},{"name":"Page C","uv":2000,"pv":9800,"amt":2290},{"name":"Page D","uv":0,"pv":0,"amt":0},{"name":"Page E","uv":1890,"pv":4800,"amt":2181},{"name":"Page F","uv":2390,"pv":3800,"amt":2500},{"name":"Page G","uv":3490,"pv":4300,"amt":2100}],"data01":[{"name":"Group A","value":400},{"name":"Group B","value":300},{"name":"Group C","value":300},{"name":"Group D","value":200}],"data02":[{"name":"A1","value":100},{"name":"A2","value":300},{"name":"B1","value":100},{"name":"B2","value":80},{"name":"B3","value":40},{"name":"B4","value":30},{"name":"B5","value":50},{"name":"C1","value":100},{"name":"C2","value":200},{"name":"D1","value":150},{"name":"D2","value":50}],"radar":[{"subject":"Math","A":120,"B":110,"fullMark":150},{"subject":"Chinese","A":98,"B":130,"fullMark":150},{"subject":"English","A":86,"B":130,"fullMark":150},{"subject":"Geography","A":99,"B":100,"fullMark":150},{"subject":"Physics","A":85,"B":90,"fullMark":150},{"subject":"History","A":65,"B":85,"fullMark":150}]}')},1150:function(e,a,t){"use strict";t.r(a);t(103);var n=t(39),r=(t(104),t(16)),l=t(65),m=t(0),i=t.n(m),o=t(1063),d=t(218),c=t(217),u=t(994),s=t(1042);a.default=function(){var e=Object(m.useState)({responsive:0}),a=Object(l.a)(e,2),t=a[0],v=a[1],E=t.responsive;return Object(m.useLayoutEffect)((function(){function e(){var e=document.querySelector(".recharts-wrapper"),a=null!==e?e.closest(".ant-card-body").clientWidth:document.querySelector(".ant-card-body").clientWidth;v({responsive:a})}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(d.PageHeader,{title:"ReCharts Area Chart"}),i.a.createElement(u.Main,null,i.a.createElement(n.a,{gutter:25},i.a.createElement(r.a,{md:12,xs:24},i.a.createElement(c.Cards,{title:"SIMPLE AREA CHART",size:"large",more:!1},i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.data,margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})))),i.a.createElement(r.a,{md:12,xs:24},i.a.createElement(c.Cards,{title:"STACKED AREA CHART",size:"large",more:!1},i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.data,margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{type:"monotone",dataKey:"uv",stackId:"1",stroke:"#8884d8",fill:"#8884d8"}),i.a.createElement(o.a,{type:"monotone",dataKey:"pv",stackId:"1",stroke:"#82ca9d",fill:"#82ca9d"}),i.a.createElement(o.a,{type:"monotone",dataKey:"amt",stackId:"1",stroke:"#ffc658",fill:"#ffc658"})))),i.a.createElement(r.a,{md:12,xs:24},i.a.createElement(c.Cards,{title:"AreaChart Connect Nulls",size:"large",more:!1},i.a.createElement("div",null,i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.nullChart,margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})),i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.data,margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{connectNulls:!0,type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"}))))),i.a.createElement(r.a,{md:12,xs:24},i.a.createElement(c.Cards,{title:"synchronized AreaCharts",size:"large",more:!1},i.a.createElement("div",null,i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.data,syncId:"anyId",margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{type:"monotone",dataKey:"uv",stroke:"#8884d8",fill:"#8884d8"})),i.a.createElement("p",null,"Maybe some other content"),i.a.createElement(o.b,{width:E-5*E/100,height:E/2,data:s.data,syncId:"anyId",margin:{top:10,right:window.innerWidth<=375?34:40,left:window.innerWidth<=375?-18:0,bottom:0}},i.a.createElement(o.f,{strokeDasharray:"3 3"}),i.a.createElement(o.x,{dataKey:"name"}),i.a.createElement(o.y,null),i.a.createElement(o.w,null),i.a.createElement(o.a,{type:"monotone",dataKey:"pv",stroke:"#82ca9d",fill:"#82ca9d"}))))))))}}}]);