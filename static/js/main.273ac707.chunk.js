(this.webpackJsonpreddid=this.webpackJsonpreddid||[]).push([[0],{117:function(e,t){},126:function(e,t){},134:function(e,t){},140:function(e,t){},142:function(e,t){},150:function(e,t){},155:function(e,t,n){"use strict";n.r(t);var i,r,c,o=n(0),s=n(88),a=n.n(s),l=n(187),u=n(185),d=n(20),j=n(188),f=n(189),b=n(190),h=n(191),O=["title","titleId"];function x(){return x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},c=Object.keys(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(i=0;i<c.length;i++)n=c[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function m(e,t){var n=e.title,s=e.titleId,a=g(e,O);return o.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",ref:t,"aria-labelledby":s},a),n?o.createElement("title",{id:s},n):null,i||(i=o.createElement("defs",null,o.createElement("style",null,"\n      .cls-1 {\n        fill: #ff4500;\n      }\n      .cls-2 {\n        fill: #fff;\n      }\n    "))),r||(r=o.createElement("circle",{className:"cls-1",cx:50,cy:50,r:49})),c||(c=o.createElement("path",{className:"cls-2",d:"M52.69,18.79a1.62,1.62,0,0,1,1.93-1.22L67.86,20.5a5.24,5.24,0,1,1-.55,2.93l-12-2.66-4.07,17.5A37.77,37.77,0,0,1,73,45.47a7.71,7.71,0,0,1,11.83.93,7.53,7.53,0,0,1,.41.73,8,8,0,0,1-3.6,10.7,18.67,18.67,0,0,1-8,17.5A39.59,39.59,0,0,1,50,82.46a39.57,39.57,0,0,1-23.64-7.13,18.67,18.67,0,0,1-8-17.5,7.53,7.53,0,0,1-.73-.41,8,8,0,0,1-2.46-11,8.27,8.27,0,0,1,.9-1.06A7.74,7.74,0,0,1,27,45.47a37.78,37.78,0,0,1,21.19-7.19Zm4.39,37.4a5.3,5.3,0,1,0,5.3-5.3,5.29,5.29,0,0,0-5.3,5.3ZM63.39,70.8a1.22,1.22,0,0,0-1.3-2,20.66,20.66,0,0,1-24.18,0,1.22,1.22,0,0,0-1.3,2A22.66,22.66,0,0,0,63.39,70.8ZM32.32,56.19a5.3,5.3,0,1,0,5.3-5.3,5.29,5.29,0,0,0-5.3,5.3Z"})))}var p,w=o.forwardRef(m),v=(n.p,n(1)),I=function(){return Object(v.jsx)(h.a,{sx:{marginRight:"10px"},children:Object(v.jsx)(w,{})})},S=function(){return Object(v.jsx)(j.a,{position:"static",children:Object(v.jsxs)(f.a,{children:[Object(v.jsx)(I,{}),Object(v.jsx)(b.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"reddid"})]})})},y=n(181),A=n(193),k=n(183),_=n(194),T=n(195),E=n(196),C=function(e){var t,n,i,r=e.submission,c=(null===(t=r.preview)||void 0===t||null===(n=t.images)||void 0===n?void 0:n.length)>0,o=null===(i=r.preview)||void 0===i?void 0:i.images[0];return Object(v.jsx)(A.a,{sx:{width:{xs:"100%",md:"800px"}},children:Object(v.jsxs)(k.a,{children:[Object(v.jsx)(_.a,{title:r.title,subheader:"".concat(r.subreddit_name_prefixed," - ").concat(r.ups," ups ").concat(r.downs," downs")}),c?Object(v.jsx)(T.a,{component:"img",image:o.source.url}):Object(v.jsx)(E.a,{children:Object(v.jsx)(b.a,{children:r.selftext})})]})})},F=n(186),P=function(){return Object(v.jsxs)(A.a,{sx:{width:{xs:"100%",md:"800px"}},children:[Object(v.jsx)(_.a,{title:Object(v.jsx)(F.a,{animation:"wave",height:32,width:"85%"}),subheader:Object(v.jsx)(F.a,{animation:"wave",height:24,width:"30%"})}),Object(v.jsx)(F.a,{sx:{height:{xs:220,md:450}},animation:"wave",variant:"rectangular"})]})},M=n(89),N=n(90),Z=n(91),B=n.n(Z),H=function(){function e(t){Object(M.a)(this,e),this._options=void 0,this._r=void 0,this._options=t,this._r=new B.a({userAgent:t.userAgent,clientId:t.clientId,clientSecret:t.clientSecret,refreshToken:t.refreshToken})}return Object(N.a)(e,[{key:"getHot",value:function(){return this._r.getHot()}},{key:"isNewOptions",value:function(e){return e.userAgent!==this._options.userAgent||e.clientId!==this._options.clientId||e.clientSecret!==this._options.clientSecret||e.refreshToken!==this._options.refreshToken}}]),e}(),L=function(e){return new H(e)},R=function(e,t){return e.isNewOptions(t)?(function(e){window.localStorage.setItem("userAgent",e.userAgent),window.localStorage.setItem("clientId",e.clientId),window.localStorage.setItem("clientSecret",e.clientSecret),window.localStorage.setItem("refreshToken",e.refreshToken)}(t),L(t)):e},J=function(){return L(function(){var e,t,n,i;return{userAgent:null!==(e=window.localStorage.getItem("userAgent"))&&void 0!==e?e:"",clientId:null!==(t=window.localStorage.getItem("clientId"))&&void 0!==t?t:"",clientSecret:null!==(n=window.localStorage.getItem("clientSecret"))&&void 0!==n?n:"",refreshToken:null!==(i=window.localStorage.getItem("refreshToken"))&&void 0!==i?i:""}}())},D=Object(o.createContext)(void 0),G=function(){return Object(v.jsx)(v.Fragment,{children:Array.from(Array(10)).map((function(e,t){return Object(v.jsx)(P,{},t)}))})},Y=function(e){return Object(v.jsx)(v.Fragment,{children:e.submissions.map((function(e){return Object(v.jsx)(C,{submission:e},e.id)}))})},q=function(){var e=Object(o.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],r=Object(o.useState)(!0),c=Object(d.a)(r,2),s=c[0],a=c[1],l=Object(o.useContext)(D);return Object(o.useEffect)((function(){null===l||void 0===l||l.api.getHot().then((function(e){i(e),a(!1)}))}),[l]),Object(v.jsx)(y.a,{spacing:3,sx:{marginY:"20px"},direction:"column",justifyContent:"flex-start",alignItems:"center",children:s?Object(v.jsx)(G,{}):Object(v.jsx)(Y,{submissions:n})})},z=function(){var e=Object(o.useReducer)(R,J()),t=Object(d.a)(e,2),n=t[0],i=t[1];return Object(v.jsxs)(D.Provider,{value:{api:n,setApiOptions:i},children:[Object(v.jsx)(S,{}),Object(v.jsx)(q,{})]})},K=n(92),Q=Object(K.a)({palette:{mode:"dark"}});a.a.render(Object(v.jsx)(o.StrictMode,{children:Object(v.jsxs)(u.a,{theme:Q,children:[Object(v.jsx)(l.a,{}),Object(v.jsx)(z,{})]})}),document.getElementById("root")),p&&p instanceof Function&&n.e(3).then(n.bind(null,197)).then((function(e){var t=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(p),n(p),i(p),r(p),c(p)}))},77:function(e,t){},81:function(e,t){}},[[155,1,2]]]);
//# sourceMappingURL=main.273ac707.chunk.js.map