(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,function(e,a,t){e.exports={body:"Message_body__33y4t",avatar:"Message_avatar__2IpIG",angle:"Message_angle__dorM6",messageBlock:"Message_messageBlock__1ac9c",name:"Message_name__9EAXN",message:"Message_message__3XHa3",time:"Message_time__3W9HX"}},,,function(e,a,t){e.exports={error:"Error_error__2ADIL",title:"Error_title__2_Fxf"}},function(e,a,t){e.exports={default:"SuperButton_default__3obaO",red:"SuperButton_red__2rXOi"}},function(e,a,t){e.exports={input:"SuperInputText_input__1D9L_",superInput:"SuperInputText_superInput__1nb0x",errorInput:"SuperInputText_errorInput__3MXGH",error:"SuperInputText_error__3FgpX"}},function(e,a,t){e.exports={blue:"HW4_blue__2s8YL",column:"HW4_column__2DGxx",testSpanError:"HW4_testSpanError__1rjiz"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__3B0xg"}},,,function(e,a,t){e.exports={App:"App_App__G-hGI"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1jCoe",error:"Greeting_error__3rTg8"}},function(e,a,t){e.exports={header:"Header_header__1eIdM"}},,function(e,a,t){e.exports=t(27)},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=(t(26),t(14)),s=t.n(o),u=t(5),i=t(1),m=t(7),E=t.n(m);var d=function(){return r.a.createElement("div",{className:E.a.error},r.a.createElement("div",{className:E.a.title},"404"),r.a.createElement("div",{className:E.a.title},"Page not found!"),r.a.createElement("div",{className:E.a.title},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))};var _=function(){return r.a.createElement("div",null)},p=t(4),f=t.n(p);var h=function(e){return r.a.createElement("div",{className:f.a.body},r.a.createElement("img",{src:e.avatar,className:f.a.avatar}),r.a.createElement("div",{className:f.a.angle}),r.a.createElement("div",{className:f.a.messageBlock},r.a.createElement("div",{className:f.a.name},e.name),r.a.createElement("div",{className:f.a.message},e.message),r.a.createElement("div",{className:f.a.time},e.time)))},v={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"};var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(h,{avatar:v.avatar,name:v.name,message:v.message,time:v.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=t(2),N=t(6),C=t(8),k=t.n(C),O=function(e){var a=e.red,t=e.className,n=Object(N.a)(e,["red","className"]),l="".concat(a?k.a.red:k.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var x=function(e){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,e.affair.name,"---",e.affair.priority),r.a.createElement(O,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var j=function(e){var a=e.data.map(function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})});return r.a.createElement("div",null,a,r.a.createElement(O,{onClick:function(){e.setFilter("All")}},"All"),r.a.createElement(O,{onClick:function(){e.setFilter("Middle")}},"Middle"),r.a.createElement(O,{onClick:function(){e.setFilter("Low")}},"Low"),r.a.createElement(O,{onClick:function(){e.setFilter("High")}},"High"))},y=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"}],w=function(e,a){switch(a){case"High":return e.filter(function(e){return"High"===e.priority});case"Middle":return e.filter(function(e){return"Middle"===e.priority});case"Low":return e.filter(function(e){return"Low"===e.priority});default:return e}},S=function(e,a){return e.filter(function(e){return e._id!==a})};var P=function(){var e=Object(n.useState)(y),a=Object(b.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(b.a)(c,2),s=o[0],u=o[1],i=w(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(j,{data:i,setFilter:u,deleteAffairCallback:function(e){return l(S(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(17),U=t(29),J=t(9),M=t.n(J),H=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,u=Object(N.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),i="".concat(M.a.error," ").concat(s||""),m="".concat(M.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},u)),c&&r.a.createElement("span",{className:i},c))},R=t(15),A=t.n(R),L=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=A.a.error;return r.a.createElement("div",null,r.a.createElement(H,{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(O,{onClick:n},"add"),r.a.createElement("span",null,c))},T=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(b.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),i=Object(b.a)(u,2),m=i[0],E=(i[1],a.length);return r.a.createElement(L,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){alert("Hello ".concat(o," ! ")),t(o),s("")},error:m,totalUsers:E})};var F=function(){var e=Object(n.useState)([]),a=Object(b.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(T,{users:t,addUserCallback:function(e){var a={_id:Object(U.a)(),name:e};l([a].concat(Object(I.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},B=t(10),G=t.n(B),W=t(11),X=t.n(W),D=function(e){e.type,e.onChange,e.onChangeChecked;var a=e.className,t=(e.spanClassName,e.children),n=Object(N.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(X.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},n)),t&&r.a.createElement("span",{className:X.a.spanClassName},t))};var K=function(){var e=Object(n.useState)(""),a=Object(b.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),u=Object(b.a)(s,2),i=u[0],m=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:G.a.column},r.a.createElement(H,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(H,{className:G.a.blue}),r.a.createElement(O,null,"default"),r.a.createElement(O,{red:!0,onClick:o},"delete "),r.a.createElement(O,{disabled:!0},"disabled"),r.a.createElement(D,{checked:i,onChangeChecked:m},"some text "),r.a.createElement(D,{checked:i,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Y=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(P,null),r.a.createElement(F,null),r.a.createElement(K,null))};var q=function(){return r.a.createElement("div",null)},z={PRE_JUNIOR:"/pre-junior",PRE_JUN:"/pre-Jun",PRE_JUNPLUS:"/pre-Jun+",Error404:"/*"};var Z=function(){return r.a.createElement("div",null,r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",element:r.a.createElement(i.a,{to:z.PRE_JUNIOR})}),r.a.createElement(i.b,{path:z.PRE_JUNIOR,element:r.a.createElement(Y,null)}),r.a.createElement(i.b,{path:z.PRE_JUN,element:r.a.createElement(_,null)}),r.a.createElement(i.b,{path:z.PRE_JUNPLUS,element:r.a.createElement(q,null)}),"// add routes",r.a.createElement(i.b,{path:z.Error404,element:r.a.createElement(d,null)})))},$=t(16),Q=t.n($);var V=function(){return r.a.createElement("div",{className:Q.a.header},r.a.createElement(u.b,{to:z.PRE_JUNIOR}," PreJunior"),r.a.createElement(u.b,{to:z.PRE_JUN}," PreJun"),r.a.createElement(u.b,{to:z.PRE_JUNPLUS}," PreJun +"))};var ee=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(V,null),r.a.createElement(Z,null)))};var ae=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ee,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[18,1,2]]]);
//# sourceMappingURL=main.891e4c58.chunk.js.map