(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{143:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(156),o=n(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return d});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(150);var s=r.a.createContext({}),d=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),l=n(55),c=n(2),s=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},154:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(158),s=n.n(c);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,l=e.title,c=a.data.site,d=t||c.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:l},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=d},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Default Starter",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@gatsbyjs"}}}}},156:function(e,t,n){"use strict";var a=n(152),r=n(0),i=n.n(r),o=n(4),l=n.n(o),c=n(149),s=n(54),d=n(5),u=n.n(d),m=n(151),p=m.a.button.withConfig({displayName:"icon-button__IconButton",componentId:"sc-1ui9z2e-0"})(["cursor:pointer;outline:none;border:none;color:#fff;background:#000;width:2rem;height:2rem;&:hover{opacity:.8;}"]),g=m.a.div.withConfig({displayName:"navigation__NavDialog",componentId:"sc-1rnzhl3-0"})(["pointer-events:none;width:90vw;height:90vh;position:absolute;top:5vh;left:5vw;z-index:-1;overflow:auto;@media only screen  and (min-width:768px){width:80vw;height:80vh;top:10vh;left:10vw;overflow:hidden;}padding:2rem;box-sizing:border-box;font-weight:100;color:#fff;background:black;transition:all .2s;transform:scale(0.98);opacity:0;h1,h4{margin-bottom:.250rem;}nav{display:flex;flex-direction:column;}a{color:inherit;text-decoration:none;&:hover{text-decoration:underline;}}button","{position:absolute;top:0;right:0;}&.is-grid{max-width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;}.fp1,.fp2,.fp3,.fp4{grid-column-start:1;grid-column-end:span 4;}.fp1{@media only screen  and (min-width:768px){grid-column-start:1;grid-column-end:3;grid-row-start:1;grid-row-end:2;}}.fp2{@media only screen  and (min-width:768px){grid-column-start:1;grid-column-end:1;grid-row-start:2;grid-row-end:2;}}.fp3{@media only screen  and (min-width:768px){grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}}.fp4{@media only screen  and (min-width:768px){grid-column-start:3;grid-column-end:5;grid-row-start:1;grid-row-end:3;}}"],p),f=m.a.div.withConfig({displayName:"navigation__NavButtonContainer",componentId:"sc-1rnzhl3-1"})(["width:32px;height:32px;position:absolute;top:24px;right:24px;bottom:auto;left:auto;z-index:50;@media only screen  and (min-width:768px){top:auto;right:auto;bottom:32px;left:calc(50% -  24px);}"]),h=m.a.div.withConfig({displayName:"navigation__NavContainer",componentId:"sc-1rnzhl3-2"})(["&.is-open div","{z-index:100 !important;pointer-events:auto !important;transform:scale(1);opacity:1;}&.is-open div","{display:none;}"],g,f),v=function(e){function t(){return e.apply(this,arguments)||this}return u()(t,e),t.prototype.render=function(){var e=this;return i.a.createElement(s.b.Consumer,null,function(t){return i.a.createElement(h,{className:t.open?"is-open":""},i.a.createElement(f,null,i.a.createElement(p,{onClick:t.toggleOpen.bind(e),className:"close-button"},"☰")),i.a.createElement(g,{className:"is-grid"},i.a.createElement(p,{onClick:t.toggleOpen.bind(e),className:"close-button"},"✕"),i.a.createElement("div",{className:"title-panel fp1"},i.a.createElement("div",null,i.a.createElement("strong",{className:"title-accent"},"me"),i.a.createElement("h1",null,"Mick Schouten"),i.a.createElement("h4",null,"creative front-end developer"))),i.a.createElement("div",{className:"title-panel fp2"},i.a.createElement("nav",null,i.a.createElement("strong",{className:"title-accent"},"Navigate"),i.a.createElement(c.a,{onClick:t.toggleOpen.bind(e),to:"/"},"home"),i.a.createElement(c.a,{className:"u-pointer-events--n u-text-decoration--lt",to:"/about-me"},"about me"),i.a.createElement(c.a,{className:"u-pointer-events--n u-text-decoration--lt",to:"/blog"},"blog"),i.a.createElement(c.a,{onClick:t.toggleOpen.bind(e),to:"/contact"},"contact"))),i.a.createElement("div",{className:"title-panel fp3"},i.a.createElement("div",null,i.a.createElement("strong",{className:"title-accent"},"find me"),i.a.createElement("a",{href:"https://nl.linkedin.com/in/bravebox",target:"_blank",rel:"noopener noreferrer"},"Linkedin"))),i.a.createElement("div",{className:"title-panel fp4"},i.a.createElement("div",null,i.a.createElement("strong",{className:"title-accent"},"About me: TL;DR"),i.a.createElement("p",null,"Hi folks. I am a 39 year old creative front-end dev from the Netherlands. I design, create and styled UI/UX components, websites and applications, and love CSS."),i.a.createElement("p",null,"This site is still under construction, but please injoy the mini/game on the main page."),i.a.createElement("p",null,i.a.createElement("i",null,i.a.createElement("small",null,"This website was made with ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby"))))))))})},t}(i.a.Component),w=(n(157),function(e){var t=e.children;return i.a.createElement(c.b,{query:"755544856",render:function(e){return i.a.createElement(s.b.Consumer,null,function(e){return i.a.createElement("div",{className:e.open?"is-open":""},i.a.createElement(v,null),t)})},data:a})});w.propTypes={children:l.a.node.isRequired};t.a=w}}]);
//# sourceMappingURL=component---src-pages-404-js-0ba37f008bcb77c34963.js.map