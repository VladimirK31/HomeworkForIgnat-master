(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,function(e,a,t){e.exports={body:"Message_body__33y4t",avatar:"Message_avatar__2IpIG",angle:"Message_angle__dorM6",messageBlock:"Message_messageBlock__1ac9c",name:"Message_name__9EAXN",message:"Message_message__3XHa3",time:"Message_time__3W9HX"}},,function(e,a,t){e.exports={header:"Header_header__1eIdM",link:"Header_link__201FH",block:"Header_block__3MF4k",active:"Header_active__1HVPG"}},function(e,a,t){e.exports={error:"Error_error__2ADIL",title:"Error_title__2_Fxf"}},function(e,a,t){e.exports={default:"SuperButton_default__3obaO",red:"SuperButton_red__2rXOi"}},function(e,a,t){e.exports={input:"SuperInputText_input__1D9L_",superInput:"SuperInputText_superInput__1nb0x",errorInput:"SuperInputText_errorInput__3MXGH",error:"SuperInputText_error__3FgpX"}},function(e,a,t){e.exports={blue:"HW4_blue__2s8YL",column:"HW4_column__2DGxx",testSpanError:"HW4_testSpanError__1rjiz"}},function(e,a,t){e.exports={label:"SuperCheckbox_label__3B0xg"}},,,function(e,a,t){e.exports={App:"App_App__G-hGI"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1jCoe",error:"Greeting_error__3rTg8"}},,function(e,a,t){e.exports=t(27)},,,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(14),c=t.n(l),o=(t(26),t(15)),u=t.n(o),i=t(6),s=t(1),m=t(8),E=t.n(m);var d=function(){return r.a.createElement("div",{className:E.a.error},r.a.createElement("div",{className:E.a.title},"404"),r.a.createElement("div",{className:E.a.title},"Page not found!"),r.a.createElement("div",{className:E.a.title},"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},p=t(2),v=t(4),f=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(v.a)(e,["options","onChange","onChangeOption"]),c=a?a.map(function(e,a){return r.a.createElement("option",{key:e+""+a,value:e},e)}):[];return r.a.createElement("select",Object.assign({onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)}},l),c)},h=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),t?t.map(function(t,o){return r.a.createElement("label",{key:a+"-"+o},r.a.createElement("input",{type:"radio",name:a,checked:t===n,value:t,onChange:(Object(v.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)})}),t)}):[]);return r.a.createElement(r.a.Fragment,null,o)},_=["x","y","z"];var g=function(){var e=Object(n.useState)(_[1]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(f,{options:_,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(h,{name:"radio",options:_,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var b=function(){return r.a.createElement("div",null,r.a.createElement(g,null))};var C=function(){return r.a.createElement("div",null)},O=t(5),k=t.n(O);var N=function(e){return r.a.createElement("div",{className:k.a.body},r.a.createElement("img",{src:e.avatar,className:k.a.avatar}),r.a.createElement("div",{className:k.a.angle}),r.a.createElement("div",{className:k.a.messageBlock},r.a.createElement("div",{className:k.a.name},e.name),r.a.createElement("div",{className:k.a.message},e.message),r.a.createElement("div",{className:k.a.time},e.time)))},j={avatar:"https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",name:"Some Name",message:"some text",time:"22:00"};var y=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(N,{avatar:j.avatar,name:j.name,message:j.message,time:j.time}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(9),S=t.n(x),w=function(e){var a=e.red,t=e.className,n=Object(v.a)(e,["red","className"]),l="".concat(a?S.a.red:S.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var I=function(e){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,e.affair.name,"---",e.affair.priority),r.a.createElement(w,{onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var H=function(e){var a=e.data.map(function(a){return r.a.createElement(I,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})});return r.a.createElement("div",null,a,r.a.createElement(w,{onClick:function(){e.setFilter("All")}},"All"),r.a.createElement(w,{onClick:function(){e.setFilter("Middle")}},"Middle"),r.a.createElement(w,{onClick:function(){e.setFilter("Low")}},"Low"),r.a.createElement(w,{onClick:function(){e.setFilter("High")}},"High"))},U=[{_id:1,name:"React",priority:"High"},{_id:2,name:"anime",priority:"Low"},{_id:3,name:"games",priority:"Low"},{_id:4,name:"work",priority:"High"},{_id:5,name:"html & css",priority:"Middle"}],J=function(e,a){switch(a){case"High":return e.filter(function(e){return"High"===e.priority});case"Middle":return e.filter(function(e){return"Middle"===e.priority});case"Low":return e.filter(function(e){return"Low"===e.priority});default:return e}},F=function(e,a){return e.filter(function(e){return e._id!==a})};var M=function(){var e=Object(n.useState)(U),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(p.a)(c,2),u=o[0],i=o[1],s=J(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(H,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(F(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(17),A=t(29),R=t(10),T=t.n(R),B=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,u=e.spanClassName,i=Object(v.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),s="".concat(T.a.error," ").concat(u||""),m="".concat(T.a.errorInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:s},c))},L=t(16),G=t.n(L),W=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=G.a.error;return r.a.createElement("div",null,r.a.createElement(B,{value:a,onChange:t,className:o}),r.a.createElement("span",null,l),r.a.createElement(w,{onClick:n},"add"),r.a.createElement("span",null,c))},X=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(p.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(p.a)(i,2),m=s[0],E=(s[1],a.length);return r.a.createElement(W,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){alert("Hello ".concat(o," ! ")),t(o),u("")},error:m,totalUsers:E})};var D=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(X,{users:t,addUserCallback:function(e){var a={_id:Object(A.a)(),name:e};l([a].concat(Object(P.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},K=t(11),z=t.n(K),Y=t(12),q=t.n(Y),V=function(e){e.type,e.onChange,e.onChangeChecked;var a=e.className,t=(e.spanClassName,e.children),n=Object(v.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),l="".concat(q.a.checkbox," ").concat(a||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){},className:l},n)),t&&r.a.createElement("span",{className:q.a.spanClassName},t))};var Z=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),i=Object(p.a)(u,2),s=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(B,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(B,{className:z.a.blue}),r.a.createElement(w,null,"default"),r.a.createElement(w,{red:!0,onClick:o},"delete "),r.a.createElement(w,{disabled:!0},"disabled"),r.a.createElement(V,{checked:s,onChangeChecked:m},"some text "),r.a.createElement(V,{checked:s,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},$=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(v.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(p.a)(o,2),i=u[0],s=u[1],m=l||{},E=m.children,d=m.onDoubleClick,f=m.className,h=Object(v.a)(m,["children","onDoubleClick","className"]),_="\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0441\u043f\u0430\u043d\u0430".concat(" ",f);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(B,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e)},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:_},h),E||c.value))};function Q(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function ee(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}Q("test",{x:"A",y:1});ee("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement($,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement(w,{onClick:function(){Q("editable-span-value",t)}},"save"),r.a.createElement(w,{onClick:function(){l(ee("editable-span-value",""))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var te=function(){return r.a.createElement("div",null,r.a.createElement(y,null),r.a.createElement(M,null),r.a.createElement(D,null),r.a.createElement(Z,null),r.a.createElement(ae,null))},ne={PRE_JUNIOR:"/pre-junior",JUNIOR:"/jun",JUNIOR_PLUS:"/jun+"};var re=function(){return r.a.createElement("div",null,r.a.createElement(s.d,null,r.a.createElement(s.b,{path:"/",element:r.a.createElement(s.a,{to:ne.PRE_JUNIOR})}),r.a.createElement(s.b,{path:ne.PRE_JUNIOR,element:r.a.createElement(te,null)}),r.a.createElement(s.b,{path:ne.JUNIOR,element:r.a.createElement(b,null)}),r.a.createElement(s.b,{path:ne.JUNIOR_PLUS,element:r.a.createElement(C,null)}),"// add routes",r.a.createElement(s.b,{element:r.a.createElement(d,null)})))},le=t(7),ce=t.n(le);var oe=function(){return r.a.createElement("div",{className:ce.a.header},r.a.createElement(i.b,{to:ne.PRE_JUNIOR,className:ce.a.link},"PreJunior"),r.a.createElement(i.b,{to:ne.JUNIOR,className:ce.a.link},"Junior"),r.a.createElement(i.b,{to:ne.JUNIOR_PLUS,className:ce.a.link},"Junior +"),r.a.createElement("div",{className:ce.a.block}))};var ue=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(oe,null),r.a.createElement(re,null)))};var ie=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ie,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}],[[18,1,2]]]);
//# sourceMappingURL=main.880fba54.chunk.js.map