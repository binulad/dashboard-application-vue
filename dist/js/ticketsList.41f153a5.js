(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ticketsList"],{"0afd":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={NAME:{TICKETS_CONTAINER:"TicketsContainer",TICKETS_LIST_PRESENTATION:"TicketsListPresentation",TICKETS_FORM_PRESENTATION:"TicketsFormPresentation",TICKETS_INFO_PRESENTATION:"TicketsInfoPresentation"},ROUTE:{ADD:"Add Tickets",EDIT:"Edit Tickets",DEFAULT:"Listing"},API_URL:{TICKETS:"tickets"},PRIORITY_DATA:{HIGH:"High",MEDIUM:"Medium",LOW:"Low"},STATUS:{OPEN:"Open",CLOSED:"Closed"},VALIDATION_MESSAGE:{REQUIRED:"This field is required"},CONFIRMATION_MESSAGE:{DISCARD:"Are you sure you want to cancel?"}}},"4a30":function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return s}));var i=function(){function t(t,e,n,i,c,s,o,r){this.id=t,this.subject=e,this.assignee=n,this.requestedBy=i,this.priority=c,this.status=s,this.createdDate=o,this.dueDate=r}return t}(),c=function(){function t(t,e,n,i,c,s,o){this.subject=t||"",this.assignee=e||"",this.requestedBy=n||"",this.priority=i||"",this.status=c||"",this.createdDate=s||"",this.dueDate=o||""}return t}(),s=function(){function t(t,e,n,i,c,s,o,r){this.id=t,this.subject=e,this.assignee=n,this.requestedBy=i,this.priority=c,this.status=s,this.createdDate=o,this.dueDate=r}return t}()},6024:function(t,e,n){"use strict";var i=n("7a23"),c={ref:"contentWrapper"};function s(t,e,n,s,o,r){return Object(i["y"])(),Object(i["g"])("div",c,[Object(i["E"])(t.$slots,"default")],512)}var o=Object(i["k"])({name:"TableActionContent",data:function(){return{contentWrapperRef:HTMLElement,tableActionEl:HTMLElement}},mounted:function(){var t;this.contentWrapperRef=this.$refs.contentWrapper,this.tableActionEl=document.getElementById("tableActionContentWrapper"),null===(t=this.tableActionEl)||void 0===t||t.appendChild(this.contentWrapperRef)},unmounted:function(){var t;null===(t=this.tableActionEl)||void 0===t||t.removeChild(this.contentWrapperRef)}}),r=n("6b0d"),a=n.n(r);const d=a()(o,[["render",s]]);e["a"]=d},"8f12":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var i={MENU_ITEM_LIST:[{name:"Dashboard",to:"/dashboard",class:"icon icon-dashboard"},{name:"Chat",to:"/chat",class:"icon icon-chat"},{name:"Email",to:"/email",class:"icon icon-email"},{name:"Calendar",to:"/calendar",class:"icon icon-calendar"},{name:"Task",to:"/tasks",class:"icon icon-task"},{name:"Tickets",to:"/tickets",class:"icon icon-ticket"},{name:"File Manager",to:"/file-manager",class:"icon icon-file"},{name:"Settings",to:"/setting",class:"icon icon-gear"}],SORT_DIRECTION:{ASCENDING:"asc",DESCENDING:"desc"}}},f557:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var i=n("a329"),c=n("4a30"),s=function(){function t(){}return t.prototype.toResponse=function(t){var e=[];return t.forEach((function(t){var n=new c["c"](t.id,t.subject,t.assignee,t.requestedBy,t.priority,t.status,t.createdDate,t.dueDate);e.push(n)})),e},t}(),o=new s,r=function(){function t(){}return t.prototype.toRequest=function(t){var e=new c["a"](t.subject,t.assignee,t.requestedBy,t.priority,t.status,t.createdDate,t.dueDate);return e},t}(),a=new r,d=function(){function t(){}return t.prototype.toResponse=function(t){var e=new c["b"](t.id,t.subject,t.assignee,t.requestedBy,t.priority,t.status,t.createdDate,t.dueDate);return e},t}(),u=new d,l=n("0afd"),b=function(){function t(){}return t.prototype.getTickets=function(){return i["a"].get(l["a"].API_URL.TICKETS).then((function(t){return o.toResponse(t.data)}))},t.prototype.deleteTicket=function(t){return i["a"].delete(l["a"].API_URL.TICKETS+"/"+t)},t.prototype.addUpdateTicket=function(t){var e=a.toRequest(t);return i["a"].post(l["a"].API_URL.TICKETS,e)},t.prototype.getTicketById=function(t){return i["a"].get(l["a"].API_URL.TICKETS+"/"+t).then((function(t){return u.toResponse(t.data)}))},t.prototype.updateTicketById=function(t,e){var n=a.toRequest(e);return i["a"].put(l["a"].API_URL.TICKETS+"/"+t,n)},t}(),h=new b},fb71:function(t,e,n){"use strict";n.r(e);var i=n("7a23"),c={class:"d-flex flex-column h-100 overflow-hidden"},s={class:"card border-0 h-100 shadow flex-grow-1 h-100 overflow-hidden"},o={class:"overflow-hidden d-flex flex-column flex-grow-1 py-3"},r={class:"overflow-auto rounded px-3"},a={class:"table position-relative mb-0","aria-describedby":"Ticket Listing"},d={class:"sticky-table-header"},u=["onClick"],l={key:0,class:"sort"},b=Object(i["h"])("th",{scope:"col"},"Action",-1),h={class:"table-action"},f=["id"],O=["onClick"],p=Object(i["h"])("span",{class:"icon icon-more_vert"},null,-1),j=[p],T=["ariaLabelledby"],k=["onClick"],D=Object(i["h"])("span",{class:"icon icon-edit me-2"},null,-1),m=Object(i["i"])("Edit"),g=[D,m],y=["onClick"],I=Object(i["h"])("span",{class:"icon icon-delete me-2"},null,-1),E=Object(i["i"])("Delete"),w=[I,E],v={key:1},A=Object(i["h"])("td",{colspan:"9",class:"text-muted text-center"}," No Record Found ",-1),S=[A];function C(t,e,n,p,D,m){var I=this,E=Object(i["F"])("TableActionContent"),A=Object(i["F"])("TicketsInfoPresentation");return Object(i["y"])(),Object(i["g"])(i["a"],null,[Object(i["j"])(E,null,{default:Object(i["P"])((function(){return[Object(i["h"])("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=function(e){return t.openTicketForm()})}," Add Ticket ")]})),_:1}),Object(i["h"])("div",c,[Object(i["j"])(A,{deletedTickets:t.getDeletedTickets,ticketDataList:t.ticketsList,class:"flex-shrink-0"},null,8,["deletedTickets","ticketDataList"]),Object(i["h"])("div",s,[Object(i["h"])("div",o,[Object(i["h"])("div",r,[Object(i["h"])("table",a,[Object(i["h"])("thead",d,[Object(i["h"])("tr",null,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["D"])(t.columns,(function(e){return Object(i["y"])(),Object(i["g"])("th",{scope:"col",key:e.field},[Object(i["h"])("a",{href:"#",class:Object(i["r"])(["header-data",t.getSortOrder(e.field)]),onClick:function(n){return t.sortColumn(e.field)}},[Object(i["h"])("span",null,Object(i["J"])(e.title),1),e.sortable?(Object(i["y"])(),Object(i["g"])("span",l)):Object(i["f"])("",!0)],10,u)])})),128)),b])]),Object(i["h"])("tbody",null,[t.filterTicketsData.length?(Object(i["y"])(!0),Object(i["g"])(i["a"],{key:0},Object(i["D"])(t.filterTicketsData,(function(e,n){return Object(i["y"])(),Object(i["g"])("tr",{key:n},[Object(i["h"])("td",null,Object(i["J"])(e.id),1),Object(i["h"])("td",null,Object(i["J"])(e.subject),1),Object(i["h"])("td",null,Object(i["J"])(t.capitalizeValue(e.requestedBy)),1),Object(i["h"])("td",null,Object(i["J"])(t.capitalizeValue(e.assignee)),1),Object(i["h"])("td",null,[Object(i["h"])("span",{class:Object(i["r"])(["badge rounded-pill",t.getPriority(e.priority)[0]])},Object(i["J"])(t.getPriority(e.priority)[1]),3)]),Object(i["h"])("td",null,[Object(i["h"])("span",{class:Object(i["r"])(["badge rounded-pill",t.getStatus(e.status)[0]])},Object(i["J"])(t.getStatus(e.status)[1]),3)]),Object(i["h"])("td",null,Object(i["J"])(e.createdDate),1),Object(i["h"])("td",null,Object(i["J"])(e.dueDate),1),Object(i["h"])("td",h,[Object(i["h"])("div",{class:"dropdown d-inline-block",id:"dropdownRef"+e.id},[Object(i["h"])("button",{class:"btn btn-link d-flex align-items-center justify-content-center",type:"button",title:"More Action",onClick:function(n){return t.openDropdown(e.id)}},j,8,O),Object(i["h"])("ul",{class:Object(i["r"])(["dropdown-menu dropdown-menu-end border-0 shadow p-0",{show:I.dropdownIndex==e.id&&I.isShowDropdown}]),ariaLabelledby:"dropdownMenuButton"+e.id},[Object(i["h"])("li",null,[Object(i["h"])("a",{class:"dropdown-item",href:"#",onClick:function(n){return t.onEdit(e.id)}},g,8,k)]),Object(i["h"])("li",null,[Object(i["h"])("a",{class:"dropdown-item",href:"#",onClick:function(n){return t.onDelete(e.id)}},w,8,y)])],10,T)],8,f)])])})),128)):(Object(i["y"])(),Object(i["g"])("tr",v,S))])])])])])])],64)}var R=n("9ab4"),L=n("0afd"),_=n("f557"),N=n("8f12"),P=n("6024"),M=n("0613"),U={class:"row mb-3"},x={class:"card ticket-info"},B={class:"card-body d-flex align-items-center"},q={class:"mt-0 ticket-info__number"},J={class:"ticket-info__text"};function F(t,e,n,c,s,o){return Object(i["y"])(),Object(i["g"])("div",U,[(Object(i["y"])(!0),Object(i["g"])(i["a"],null,Object(i["D"])(t.ticketInfoArray,(function(t,e){return Object(i["y"])(),Object(i["g"])("div",{class:"col-3",key:e},[Object(i["h"])("div",x,[Object(i["h"])("div",B,[Object(i["h"])("div",{class:Object(i["r"])(["flex-shrink-0 me-3 ticket-info__icon",t.type])},[Object(i["h"])("span",{class:Object(i["r"])(["icon",t.icon])},null,2)],2),Object(i["h"])("div",null,[Object(i["h"])("h5",q,Object(i["J"])(t.value),1),Object(i["h"])("p",J,Object(i["J"])(t.name),1)])])])])})),128))])}var K=Object(i["k"])({name:L["a"].NAME.TICKETS_INFO_PRESENTATION,props:["ticketDataList","deletedTickets"],setup:function(t){var e=Object(i["C"])(0),n=Object(i["C"])(0),c=Object(i["C"])(0),s=Object(i["C"])(0),o=Object(i["C"])([{name:"Total Tickets",value:e,icon:"icon-fiber_smart_record",type:"info"},{name:"Pending Tickets",value:n,icon:"icon-hourglass_empty",type:"warning"},{name:"Closed Tickets",value:c,icon:"icon-https",type:"success"},{name:"Deleted Tickets",value:s,icon:"icon-delete",type:"danger"}]);return Object(i["O"])((function(){e.value=t.ticketDataList.length;var i=t.ticketDataList.filter((function(t){if("open"==t.status)return!0}));n.value=i.length;var o=t.ticketDataList.filter((function(t){if("closed"==t.status)return!0}));c.value=o.length,s.value=t.deletedTickets})),{ticketInfoArray:o,props:t}}}),W=n("6b0d"),H=n.n(W);const G=H()(K,[["render",F]]);var V=G,Y=n("5502"),$=Object(Y["a"])({state:{deletedItem:0},mutations:{getDeletedItem:function(t,e){t.deletedItem=e}},actions:{getDeletedItem:function(t,e){var n=t.commit;n("getDeletedItem",e)}},getters:{getDeletedData:function(t){return t.deletedItem}},modules:{}}),z=Object(i["k"])({name:L["a"].NAME.TICKETS_LIST_PRESENTATION,components:{TableActionContent:P["a"],TicketsInfoPresentation:V},data:function(){return{ticketsList:new Array,columns:[{field:"id",title:"ID",sortable:!0},{field:"subject",title:"Subject",sortable:!0},{field:"requestedBy",title:"Requested by",sortable:!0},{field:"assignee",title:"Assignee",sortable:!0},{field:"priority",title:"Priority",sortable:!0},{field:"status",title:"Status",sortable:!0},{field:"createdDate",title:"Create Date",sortable:!0},{field:"dueDate",title:"Due Date",sortable:!0}],sortBy:"id",sortDirection:N["a"].SORT_DIRECTION.ASCENDING,sortOrders:new Array,dropdownIndex:0,isShowDropdown:!1,dropdownRef:HTMLElement,ticketPriority:"",ticketStatus:"",ticketsDataList:new Array,deletedTickets:0}},created:function(){return Object(R["a"])(this,void 0,void 0,(function(){return Object(R["b"])(this,(function(t){switch(t.label){case 0:return document.addEventListener("click",this.closeDropdown),[4,this.loadTicketsData()];case 1:return t.sent(),[2]}}))}))},mounted:function(){this.loadTicketsData(),this.getSortOrder("id"),this.sortOrders=this.columns.reduce((function(t,e){return t[e.field]=1,t}),{})},beforeUnmount:function(){document.removeEventListener("click",this.closeDropdown)},watch:{getAllData:function(t){t&&this.loadTicketsData()},deletedTickets:function(t,e){return e||t}},computed:{filterTicketsData:function(){var t=this.sortBy,e=this.sortOrders[t]||1,n=this.ticketsList;return t&&(n=n.slice().sort((function(n,i){return n=n[t],i=i[t],(n===i?0:n>i?1:-1)*e}))),n},getAllData:function(){return M["a"].getters.getAllData},getDeletedTickets:function(){return $.getters.getDeletedData}},methods:{loadTicketsData:function(){return Object(R["a"])(this,void 0,void 0,(function(){var t=this;return Object(R["b"])(this,(function(e){switch(e.label){case 0:return[4,_["a"].getTickets().then((function(e){t.ticketsList=e}))];case 1:return e.sent(),[2]}}))}))},sortColumn:function(t){this.sortDirection="asc"==this.sortDirection?"desc":"asc",this.sortBy=t,this.sortOrders[t]=-1*this.sortOrders[t]},getSortOrder:function(t){if(t==this.sortBy)return this.sortOrders[t]>0?"asc":"desc"},openDropdown:function(t){this.dropdownIndex==t&&this.isShowDropdown?this.isShowDropdown=!1:this.isShowDropdown=!0,this.dropdownIndex=t},closeDropdown:function(t){this.dropdownRef=document.getElementById("dropdownRef"+this.dropdownIndex),this.dropdownRef.contains(t.target)||(this.isShowDropdown=!1)},getPriority:function(t){var e,n;switch(t){case"high":e="bg-danger",n=L["a"].PRIORITY_DATA.HIGH;break;case"medium":e="bg-info",n=L["a"].PRIORITY_DATA.MEDIUM;break;case"low":e="bg-warning",n=L["a"].PRIORITY_DATA.LOW;break}return[e,n]},getStatus:function(t){var e,n;switch(t){case"open":e="bg-success",n=L["a"].STATUS.OPEN;break;case"closed":e="bg-secondary",n=L["a"].STATUS.CLOSED;break}return[e,n]},openTicketForm:function(){this.$router.push({name:L["a"].ROUTE.ADD})},onDelete:function(t){M["a"].dispatch("setAllData",!1),_["a"].deleteTicket(t).then((function(){M["a"].dispatch("setAllData",!0)})),this.deletedTickets++,$.dispatch("getDeletedItem",this.deletedTickets)},onEdit:function(t){var e=this;setTimeout((function(){e.$router.push({name:L["a"].ROUTE.EDIT,params:{id:t}})}),200)},capitalizeValue:function(t){return t.charAt(0).toUpperCase()+t.slice(1)}}});const Q=H()(z,[["render",C]]);e["default"]=Q}}]);
//# sourceMappingURL=ticketsList.41f153a5.js.map