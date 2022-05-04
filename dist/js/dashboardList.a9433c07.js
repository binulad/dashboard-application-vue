(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboardList"],{"0891":function(t,e,a){"use strict";a.r(e);var n=a("7a23"),s={class:"card border-0 h-100 shadow"},i={class:"overflow-hidden d-flex flex-column flex-grow-1 py-3"},r={class:"overflow-auto rounded px-3"},c=["title"],o=Object(n["h"])("div",{class:"tableAction"},[Object(n["h"])("span",{class:"icon icon-more_vert"})],-1);function l(t,e,a,l,d,u){var b=Object(n["F"])("table-action-content"),f=Object(n["F"])("base-listing");return Object(n["y"])(),Object(n["g"])(n["a"],null,[Object(n["j"])(b,null,{default:Object(n["P"])((function(){return[Object(n["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(e){return t.addData()})}," Add Data ")]})),_:1}),Object(n["h"])("div",s,[Object(n["h"])("div",i,[Object(n["h"])("div",r,[Object(n["j"])(f,{columns:t.columns,defaultSort:"id",dataItemList:t.dashboardDataList},{tooltipTemplate:Object(n["P"])((function(t){var e=t.props;return[Object(n["h"])("span",{title:e},Object(n["J"])(e),9,c)]})),actionTemplate:Object(n["P"])((function(){return[o]})),_:1},8,["columns","dataItemList"])])])])],64)}var d=a("7157"),u={class:"table position-relative mb-0","aria-describedby":"Listing"},b={class:"sticky-table-header"},f=["onClick"],O=Object(n["h"])("span",{class:"sort"},null,-1),h={key:1},m={key:1},j=["colspan"];function p(t,e,a,s,i,r){return Object(n["y"])(),Object(n["g"])("table",u,[Object(n["h"])("thead",b,[Object(n["h"])("tr",null,[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(t.defaultColumn,(function(e){return Object(n["y"])(),Object(n["g"])("th",{scope:"col",key:e.field},[e.sortable?(Object(n["y"])(),Object(n["g"])("a",{key:0,href:"#",class:Object(n["r"])(["header-data",t.getSortOrder(e.field)]),onClick:function(a){return t.sortColumn(e.field)}},[Object(n["i"])(Object(n["J"])(e.title)+" ",1),O],10,f)):(Object(n["y"])(),Object(n["g"])("span",h,Object(n["J"])(e.title),1))])})),128))])]),Object(n["h"])("tbody",null,[t.filterTicketsData.length?(Object(n["y"])(!0),Object(n["g"])(n["a"],{key:0},Object(n["D"])(t.filterTicketsData,(function(e,a){return Object(n["y"])(),Object(n["g"])("tr",{key:a},[(Object(n["y"])(!0),Object(n["g"])(n["a"],null,Object(n["D"])(t.defaultColumn,(function(a){return Object(n["y"])(),Object(n["g"])("td",{key:a.field},[a.cell&&t.columns.field==e.field?Object(n["E"])(t.$slots,a.cell,{key:0,props:e[a.field]}):Object(n["E"])(t.$slots,"default",{key:1},(function(){return[Object(n["i"])(Object(n["J"])(e[a.field]),1)]}))])})),128))])})),128)):(Object(n["y"])(),Object(n["g"])("tr",m,[Object(n["h"])("td",{colspan:t.totalColumns,class:"text-muted text-center"}," No Record Found ",8,j)]))])])}var D=a("8f12"),y=Object(n["k"])({name:"BaseListing",props:{columns:{type:Array,required:!0},defaultSort:String,dataItemList:{type:Array,required:!0}},data:function(){return{defaultColumn:[{field:"",title:"",sortable:!1,cell:""}],sortBy:this.defaultSort,sortOrders:new Array,sortDirection:D["a"].SORT_DIRECTION.ASCENDING,totalColumns:0,dataList:new Array}},created:function(){this.defaultColumn=this.columns,this.totalColumns=this.defaultColumn.length,this.dataList=this.dataItemList},mounted:function(){this.getSortOrder(this.sortBy),this.sortOrders=this.defaultColumn.reduce((function(t,e){return t[e.field]=1,t}),{})},computed:{filterTicketsData:function(){var t=this.sortBy,e=this.sortOrders[t]||1,a=this.dataList;return t&&(a=a.slice().sort((function(a,n){return a=a[t],n=n[t],(a===n?0:a>n?1:-1)*e}))),a}},methods:{sortColumn:function(t){this.sortDirection="asc"==this.sortDirection?"desc":"asc",this.sortBy=t,this.sortOrders[t]=-1*this.sortOrders[t]},getSortOrder:function(t){if(t==this.sortBy)return this.sortOrders[t]>0?"asc":"desc"}}}),A=a("6b0d"),T=a.n(A);const C=T()(y,[["render",p]]);var N=C,g=a("6024"),E=Object(n["k"])({name:d["a"].NAME.DASHBOARD_LIST_CONTAINER,components:{BaseListing:N,TableActionContent:g["a"]},data:function(){return{columns:[{field:"id",title:"ID",sortable:!0,cell:"tooltipTemplate"},{field:"firstName",title:"First Name",sortable:!1,cell:"tooltipTemplate"},{field:"lastName",title:"Last Name",sortable:!0,cell:"tooltipTemplate"},{field:"action",title:"Action",cell:"actionTemplate"}],dashboardDataList:new Array}},created:function(){this.dashboardDataList=[{id:1,firstName:"Test",lastName:"User"},{id:2,firstName:"Test2",lastName:"User2"},{id:11,firstName:"Test11",lastName:"User11"},{id:21,firstName:"Test21",lastName:"User21"}]},methods:{addData:function(){this.$router.push({name:d["a"].ROUTE.DATA})}}});const k=T()(E,[["render",l]]);e["default"]=k},6024:function(t,e,a){"use strict";var n=a("7a23"),s={ref:"contentWrapper"};function i(t,e,a,i,r,c){return Object(n["y"])(),Object(n["g"])("div",s,[Object(n["E"])(t.$slots,"default")],512)}var r=Object(n["k"])({name:"TableActionContent",data:function(){return{contentWrapperRef:HTMLElement,tableActionEl:HTMLElement}},mounted:function(){var t;this.contentWrapperRef=this.$refs.contentWrapper,this.tableActionEl=document.getElementById("tableActionContentWrapper"),null===(t=this.tableActionEl)||void 0===t||t.appendChild(this.contentWrapperRef)},unmounted:function(){var t;null===(t=this.tableActionEl)||void 0===t||t.removeChild(this.contentWrapperRef)}}),c=a("6b0d"),o=a.n(c);const l=o()(r,[["render",i]]);e["a"]=l},7157:function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={PAGE_TITLE:"Dashboard",NAME:{DASHBOARD_CONTAINER:"DashboardContainer",DASHBOARD_LIST_CONTAINER:"DashboardListContainer",DASHBOARD_DATA_CONTAINER:"DashboardDataContainer"},ROUTE:{DATA:"Data",DEFAULT:"Dashboard Listing"}}},"8f12":function(t,e,a){"use strict";a.d(e,"a",(function(){return n}));var n={MENU_ITEM_LIST:[{name:"Dashboard",to:"/dashboard",class:"icon icon-dashboard"},{name:"Chat",to:"/chat",class:"icon icon-chat"},{name:"Email",to:"/email",class:"icon icon-email"},{name:"Calendar",to:"/calendar",class:"icon icon-calendar"},{name:"Task",to:"/tasks",class:"icon icon-task"},{name:"Tickets",to:"/tickets",class:"icon icon-ticket"},{name:"File Manager",to:"/file-manager",class:"icon icon-file"},{name:"Settings",to:"/setting",class:"icon icon-gear"}],SORT_DIRECTION:{ASCENDING:"asc",DESCENDING:"desc"}}}}]);
//# sourceMappingURL=dashboardList.a9433c07.js.map