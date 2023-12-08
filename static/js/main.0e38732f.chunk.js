(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var l=t(0),o=t.n(l),n=t(6),r=t.n(n),c=(t(15),t(16),t(3));function s(e){return o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},o.a.createElement("div",{className:"container-fluid"},o.a.createElement(c.b,{className:"navbar-brand",to:"/"},e.Title),o.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},o.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{className:"nav-link active","aria-current":"page",to:"/"},"Home")),o.a.createElement("li",{className:"nav-item"},o.a.createElement(c.b,{className:"nav-link",to:"/about"},e.aboutUs))),o.a.createElement("button",{type:"button",onClick:e.greenMode,className:"greenbtn btn btn-success btn-circle btn-circular mx-2",title:"Green mode"}),o.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},o.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),o.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"light"===e.mode?"Enable Dark Mode":"Disable Dark Mode")))))}function m(e){const[a,t]=Object(l.useState)("Enter your Text"),[n,r]=Object(l.useState)([]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"Container",style:{color:"dark"===e.mode||"green"===e.gmode?"white":"black"}},o.a.createElement("h2",null,e.heading),o.a.createElement("div",{className:"mb-3"},o.a.createElement("textarea",{className:"form-control",id:"TextArea",value:a,onChange:e=>{console.log("change me"),t(e.target.value),r(a=>[...a,e.target.value])},style:{backgroundColor:"dark"===e.mode?"#4f4f5e":"green"===e.gmode?"#a5d7c0":"white",color:"dark"===e.mode?"white":(e.gmode,"black")},rows:"10"})),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{t(a.toUpperCase()),e.showAlert("Success: Text has been converted to uppercase")}},"Convert to UpperCase"),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{t(a.toLowerCase()),e.showAlert("Success: Text has been converted to Lowercase")}},"Convert to LowerCase"),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{t("")}},"Clear Text"),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{let l=a.split("").reverse("").join("");t(l),e.showAlert("Text is reversed")},title:"reverse"},o.a.createElement("i",{className:"fa fa-backward"})),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{var a=document.getElementById("TextArea");a.select(),navigator.clipboard.writeText(a.value),e.showAlert("Text copied to clipboard")}},"Copy Text"),o.a.createElement("button",{className:"btn mx-2 my-2",style:{backgroundColor:"dark"===e.mode||"green"===e.gmode?"white":"black",color:"dark"===e.mode||"green"===e.gmode?"black":"white"},onClick:()=>{if(n.length>1){const e=[...n];e.pop(),r(e),t(e[e.length-1])}}},"Undo")),o.a.createElement("div",{className:"Container my-4",style:{color:"dark"===e.mode||"green"===e.gmode?"white":"black"}},o.a.createElement("h3",null,"Your Text Summary"),o.a.createElement("p",null,"Your Text has ",a.split(" ").length," words and ",a.length," characters."),o.a.createElement("p",null,.008*a.split(" ").length," minutes read"),o.a.createElement("h3",null,"Preview of your entered text"),o.a.createElement("p",null,a.length>0?a:"Enter something in text box")))}s.defaultProps={Title:"Set Title",aboutUs:"About"};var d=function(e){return e.alert&&o.a.createElement("div",{className:"alert alert-success",role:"alert"},o.a.createElement("strong",null,e.alert.msg))};function i(e){return o.a.createElement("div",{class:"accordion",id:"accordionPanelsStayOpenExample"},o.a.createElement("h1",{style:{color:"dark"===e.mode||"green"===e.gmode?"white":"black"}},"About Us"),o.a.createElement("div",{class:"accordion-item"},o.a.createElement("h2",{class:"accordion-header"},o.a.createElement("button",{class:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseOne","aria-expanded":"true","aria-controls":"panelsStayOpen-collapseOne"},"About Our Service")),o.a.createElement("div",{id:"panelsStayOpen-collapseOne",class:"accordion-collapse collapse show"},o.a.createElement("div",{class:"accordion-body"},o.a.createElement("strong",null,"It is a free service!")," You can manipulate your text in the way you want. Here we also provide you with green and dark modes to make your user expeirence comfortable."))),o.a.createElement("div",{class:"accordion-item"},o.a.createElement("h2",{class:"accordion-header"},o.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseTwo","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseTwo"},"Know about features.")),o.a.createElement("div",{id:"panelsStayOpen-collapseTwo",class:"accordion-collapse collapse"},o.a.createElement("div",{class:"accordion-body"},o.a.createElement("strong",null,"Know here about UpperCase, Lowercase, reverse, Undo,Clear Text and copy.")," On clicking on the following buttons they will respond you in the same way. They are interactive."))),o.a.createElement("div",{class:"accordion-item"},o.a.createElement("h2",{class:"accordion-header"},o.a.createElement("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#panelsStayOpen-collapseThree","aria-expanded":"false","aria-controls":"panelsStayOpen-collapseThree"},"Thank You!")),o.a.createElement("div",{id:"panelsStayOpen-collapseThree",class:"accordion-collapse collapse"},o.a.createElement("div",{class:"accordion-body"},o.a.createElement("strong",null,"Thank You for choosing us.")," Wish to get you back here soon."))))}var u=t(2);var b=function(){const[e,a]=Object(l.useState)("light"),[t,n]=Object(l.useState)(null),[r,b]=Object(l.useState)("light"),g=e=>{n({msg:e}),setTimeout(()=>{n(null)},1400)};return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,null,o.a.createElement(s,{Title:"TextUtils",mode:e,toggleMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#16263e",g("Dark mode is enabled")):(a("light"),document.body.style.backgroundColor="white",g("Light mode is enabled"))},gmode:r,greenMode:()=>{"light"===r?(b("green"),document.body.style.backgroundColor="#11995a",g("Green mode is enabled")):(b("light"),document.body.style.backgroundColor="white",g("Light mode is enabled"))}}),o.a.createElement(d,{alert:t}),o.a.createElement("div",{className:"container my-3"},o.a.createElement(u.c,null,o.a.createElement(u.a,{exact:!0,path:"/",element:o.a.createElement(m,{heading:"Enter the text to analyze",mode:e,showAlert:g,gmode:r})}),o.a.createElement(u.a,{exact:!0,path:"/About",element:o.a.createElement(i,{mode:e,showAlert:g,gmode:r})})))))};var g=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,18)).then(a=>{let{getCLS:t,getFID:l,getFCP:o,getLCP:n,getTTFB:r}=a;t(e),l(e),o(e),n(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null))),g()},7:function(e,a,t){e.exports=t(17)}},[[7,1,2]]]);
//# sourceMappingURL=main.0e38732f.chunk.js.map