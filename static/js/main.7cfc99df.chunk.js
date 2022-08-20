(this["webpackJsonpshipping-list"]=this["webpackJsonpshipping-list"]||[]).push([[0],{137:function(t,e,n){},138:function(t,e,n){},207:function(t,e,n){},208:function(t,e,n){"use strict";n.r(e);var i,a=n(0),o=n.n(a),l=n(24),c=n.n(l),d=n(35),r=n(82),s=n(105),p=n(3),u=n(1),j="SET_SHIPPING_LIST",h="UPDATE_SHIPPING_ADDRESS",g="UPDATE_SELECTED_SHIPPING",m={shippingList:[],locations:[{id:"dfsikd",name:"Armavir",lat:"40.1590519",lng:"44.0250491"},{id:"thjilx",name:"Yerevan",lat:"40.1535005",lng:"44.4185274"},{id:"rgbnju",name:"Sevan",lat:"40.548772",lng:"44.957293"},{id:"lsdojd",name:"Tsakhkadzor",lat:"40.531104",lng:"44.719860"},{id:"domfjd",name:"Dilijan",lat:"40.741784",lng:"44.872034"},{id:"ufjisk",name:"Ijevan",lat:"40.878007",lng:"45.143766"},{id:"idksuy",name:"Jermuk",lat:"39.840426",lng:"45.670322"},{id:"pskduc",name:"Yeghegnadzor",lat:"39.764008",lng:"45.333242"},{id:"oidskd",name:"Abovyan",lat:"40.279573",lng:"44.629786"},{id:"rtfdxv",name:"Arzni",lat:"40.295609",lng:"44.597328"}],selectedShippingId:null};i=Object(r.c)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case j:return Object(u.a)(Object(u.a)({},t),{},{shippingList:e.payload});case h:var n=t.locations.find((function(t){return t.id===e.payload.locationId}));return Object(u.a)(Object(u.a)({},t),{},{shippingList:t.shippingList.map((function(t){return t.id===e.payload.shippingId?Object(u.a)(Object(u.a)({},t),{},Object(p.a)({},e.payload.type,n)):t}))});case g:return Object(u.a)(Object(u.a)({},t),{},{selectedShippingId:e.payload});default:return t}}),Object(r.b)(Object(r.a)(s.a)));var b=n(106),f=n.n(b),O=n(2),v=n(212),x=n(214),y=n(14),S=n(15),k=n(91),I=n(37),D=n(23),L=n(22),N=n(107),P=n(45),A=n(16),E=n.n(A),w=(n(132),n(134),function(t){Object(D.a)(n,t);var e=Object(L.a)(n);function n(t){return Object(y.a)(this,n),e.call(this,t)}return Object(S.a)(n,[{key:"createLeafletElement",value:function(){var t=this.props.map,e=E.a.Routing.control({show:!1,lineOptions:{styles:[{color:"blue",opacity:1,weight:3}]},addWaypononeints:!1,draggableWaypoints:!1,fitSelectedRoutes:!0,showAlternatives:!1});return this.control=e,e.addTo(t.leafletElement).hide(),e.getPlan()}},{key:"componentDidMount",value:function(){Object(k.a)(Object(I.a)(n.prototype),"componentDidMount",this).call(this);var t=this.props.locations;this.control.setWaypoints([E.a.latLng(t.from.lat,t.from.lng),E.a.latLng(t.to.lat,t.to.lng)])}},{key:"componentDidUpdate",value:function(t){Object(k.a)(Object(I.a)(n.prototype),"componentDidUpdate",this).call(this,t);var e=this.props.locations;this.control.setWaypoints([E.a.latLng(e.from.lat,e.from.lng),E.a.latLng(e.to.lat,e.to.lng)])}}]),n}(N.a)),T=Object(P.b)(w),z=n(8),U=40.1535005,M=44.4185274,_=8;var G=function(t){var e=Object(a.useState)(!1),n=Object(O.a)(e,2),i=n[0],o=n[1],l=Object(a.useRef)(),c=_,d=[U,M];return Object(z.jsxs)(v.a,{center:d,zoom:c,ref:function(t){l.current=t,o(!0)},className:"map",children:[Object(z.jsx)(x.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),i&&t.locations&&Object(z.jsx)(T,{map:l.current,locations:t.locations})]})},R=(n(137),function(t){return t}),W=[{id:"441315",date:"06-15-22",from:{id:"dfsikd",name:"Armavir",lat:"40.1590519",lng:"44.0250491"},to:{id:"thjilx",name:"Yerevan",lat:"40.1535005",lng:"44.4185274"}},{id:"895147",date:"08-05-22",from:{id:"thjilx",name:"Yerevan",lat:"40.1535005",lng:"44.4185274"},to:{id:"domfjd",name:"Dilijan",lat:"40.741784",lng:"44.872034"}},{id:"847692",date:"10-20-22",from:{id:"ufjisk",name:"Ijevan",lat:"40.878007",lng:"45.143766"},to:{id:"domfjd",name:"Dilijan",lat:"40.741784",lng:"44.872034"}},{id:"689345",date:"06-02-22",from:{id:"idksuy",name:"Jermuk",lat:"39.840426",lng:"45.670322"},to:{id:"pskduc",name:"Yeghegnadzor",lat:"39.764008",lng:"45.333242"}},{id:"758619",date:"10-15-22",from:{id:"rgbnju",name:"Sevan",lat:"40.548772",lng:"44.957293"},to:{id:"lsdojd",name:"Tsakhkadzor",lat:"40.531104",lng:"44.719860"}},{id:"589314",date:"10-15-22",from:{id:"oidskd",name:"Abovyan",lat:"40.279573",lng:"44.629786"},to:{id:"rgbnju",name:"Sevan",lat:"40.548772",lng:"44.957293"}}],Y=n(213),C=(n(138),Y.a.Option);var J={UpdateShippingAddress:function(t,e,n){return function(i){return i({type:h,payload:{locationId:e,shippingId:t,type:n}})}},UpdateSelectedShipping:function(t){return function(e){return e({type:g,payload:t})}}},H=Object(d.b)(R,J)((function(t){var e,n,i=t.data,a=t.locations,o=t.selectedShippingId,l=t.UpdateShippingAddress,c=t.UpdateSelectedShipping;return Object(z.jsxs)("div",{className:"shipping-item ".concat(o===i.id?"selected":""),onClick:function(){c(i.id)},children:[Object(z.jsxs)("div",{className:"shipping-info",children:[Object(z.jsxs)("span",{className:"shipping-id",children:["N: ",i.id]}),Object(z.jsxs)("span",{className:"shipping-date",children:["Date: ",i.date]})]}),Object(z.jsxs)("div",{className:"locations",children:[Object(z.jsx)(Y.a,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:function(t){l(i.id,t,"from")},value:i.from.id,children:!(null===a||void 0===a||!a.length)&&(null===a||void 0===a||null===(e=a.filter((function(t){return t.id!==i.to.id})))||void 0===e?void 0:e.map((function(t){return Object(z.jsx)(C,{value:t.id,children:t.name},t.id)})))}),Object(z.jsx)(Y.a,{showSearch:!0,placeholder:"Select a person",optionFilterProp:"children",onChange:function(t){l(i.id,t,"to")},value:i.to.id,children:!(null===a||void 0===a||!a.length)&&(null===a||void 0===a||null===(n=a.filter((function(t){return t.id!==i.from.id})))||void 0===n?void 0:n.map((function(t){return Object(z.jsx)(C,{value:t.id,children:t.name},t.id)})))})]})]},i.id)})),F=n(118);var B={GetShippingData:function(){return function(t){return new Promise((function(e){var n=Math.floor(300*Math.random()+700);setTimeout((function(){t({type:j,payload:W}),e()}),n)}))}}},q=Object(d.b)(R,B)((function(t){var e=t.shippingList,n=t.GetShippingData,i=Object(a.useState)(!0),o=Object(O.a)(i,2),l=o[0],c=o[1];return Object(a.useEffect)((function(){n().finally((function(){c(!1)}))}),[]),Object(z.jsxs)("div",{children:[Object(z.jsx)("h1",{children:"Shipping list"}),Object(z.jsx)("div",{className:"shipping-list",children:l?Object(z.jsx)("div",{className:"loading",children:Object(z.jsx)(F.a,{})}):null===e||void 0===e?void 0:e.map((function(t){return Object(z.jsx)(H,{data:t},t.id)}))})]})}));var K=Object(d.b)(R)((function(t){var e=t.shippingList,n=t.selectedShippingId,i=null===e||void 0===e?void 0:e.find((function(t){return t.id===n})),a=i&&{from:i.from,to:i.to};return Object(z.jsx)("div",{children:Object(z.jsx)("table",{children:Object(z.jsx)("tbody",{children:Object(z.jsxs)("tr",{children:[Object(z.jsx)("td",{children:Object(z.jsx)(q,{})}),Object(z.jsx)(f.a,{className:"columnResizer",minWidth:0}),Object(z.jsx)("td",{children:Object(z.jsx)(G,{locations:a})})]})})})})}));n(207);c.a.render(Object(z.jsx)(o.a.StrictMode,{children:Object(z.jsx)(d.a,{store:i,children:Object(z.jsx)(K,{})})}),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.7cfc99df.chunk.js.map