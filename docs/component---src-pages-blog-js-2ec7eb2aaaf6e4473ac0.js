(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(149),i=n(156),l=n(154);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"Blog"}),r.a.createElement("h1",null,"Blog"),r.a.createElement(o.a,{to:"/"},"Back home"))}},149:function(e,t,n){"use strict";n.d(t,"b",function(){return s});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(32),c=n.n(l);n.d(t,"a",function(){return c.a});n(150);var d=r.a.createContext({}),s=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};s.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},150:function(e,t,n){var a;e.exports=(a=n(153))&&a.default||a},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Bravebox/io"}}}}},153:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),l=n(55),c=n(2),d=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},154:function(e,t,n){"use strict";var a=n(155),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(158),d=n.n(c);function s(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title,c=a.data.site,s=t||c.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:s},{property:"og:title",content:l},{property:"og:description",content:s},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:s}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}s.defaultProps={lang:"en",meta:[],keywords:[]},s.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Bravebox/io",description:"Hi! My name is Mick, a front-end dev from the Netherlands!",author:"@gatsbyjs"}}}}},156:function(e,t,n){"use strict";var a=n(152),r=n(0),o=n.n(r),i=n(4),l=n.n(i),c=n(149),d=n(54),s=n(151),m=s.a.button.withConfig({displayName:"icon-button__IconButton",componentId:"sc-1tiquoe-0"})(["cursor:pointer;outline:none;border:none;color:#fff;background:#000;width:2rem;height:2rem;&:hover{opacity:.8;}"]),p=s.a.div.withConfig({displayName:"navigation__NavDialog",componentId:"sc-505vy8-0"})(["pointer-events:none;width:90vw;height:90vh;position:fixed;top:5vh;left:5vw;z-index:-1;overflow:auto;@media only screen  and (min-width:768px){width:80vw;height:80vh;top:10vh;left:10vw;overflow:hidden;}padding:2rem;box-sizing:border-box;font-weight:100;color:#fff;background-color:var(--primary);h1,h4{margin-bottom:.250rem;}nav{display:flex;flex-direction:column;}a{color:inherit;text-decoration:none;&:hover{text-decoration:underline;}}button","{position:absolute;top:0;right:0;}&.is-grid{max-width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-template-rows:auto;}.fp1,.fp2,.fp3,.fp4{grid-column-start:1;grid-column-end:span 4;}.fp1{@media only screen  and (min-width:768px){grid-column-start:1;grid-column-end:3;grid-row-start:1;grid-row-end:2;}}.fp2{@media only screen  and (min-width:768px){grid-column-start:1;grid-column-end:1;grid-row-start:2;grid-row-end:2;}}.fp3{@media only screen  and (min-width:768px){grid-column-start:2;grid-column-end:2;grid-row-start:2;grid-row-end:2;}}.fp4{@media only screen  and (min-width:768px){grid-column-start:3;grid-column-end:5;grid-row-start:1;grid-row-end:3;}}"],m),u=s.a.div.withConfig({displayName:"navigation__NavButtonContainer",componentId:"sc-505vy8-1"})(["width:2rem;height:2rem;position:fixed;top:1rem;left:1rem;bottom:auto;z-index:50;box-shadow:rgba(0,0,0,.2) 2px 8px 10px;"]),g=s.a.div.withConfig({displayName:"navigation__NavOverlay",componentId:"sc-505vy8-2"})(["position:fixed;top:0;left:0;z-index:-1;width:100vw;height:100vh;opacity:0;background:rgba(255,255,255,.8);"]),f=s.a.div.withConfig({displayName:"navigation__NavContainer",componentId:"sc-505vy8-3"})(["div",",div","{transition:all .2s;}div","{transform:scale(0.98);opacity:0;}div","{transform:scale(0.98);opacity:0;}&.is-open div","{z-index:100 !important;pointer-events:auto !important;transform:scale(1);opacity:1;}&.is-open div","{z-index:90 !important;opacity:1;}&.is-open div","{display:none;}button","{background-color:var(--primary);}"],p,g,p,p,p,g,u,m),v=function(e){return o.a.createElement(d.b.Consumer,null,function(e){return o.a.createElement(f,{className:e.open?"is-open":""},o.a.createElement(u,null,o.a.createElement(m,{onClick:e.toggleOpen.bind(void 0),className:"close-button"},"☰")),o.a.createElement(p,{className:"is-grid"},o.a.createElement(m,{onClick:e.toggleOpen.bind(void 0),className:"close-button"},"✕"),o.a.createElement("div",{className:"title-panel fp1"},o.a.createElement("div",null,o.a.createElement("strong",{className:"title-accent"},"me"),o.a.createElement("h1",null,"Mick Schouten"),o.a.createElement("h4",null,"creative front-end developer"))),o.a.createElement("div",{className:"title-panel fp2"},o.a.createElement("nav",null,o.a.createElement("strong",{className:"title-accent"},"navigate"),o.a.createElement(c.a,{onClick:e.toggleOpen.bind(void 0),to:"/"},"home"),o.a.createElement(c.a,{onClick:e.toggleOpen.bind(void 0),to:"/about-me"},"about me"),o.a.createElement(c.a,{className:"u-pointer-events--n u-text-decoration--lt",to:"/work"},"work"),o.a.createElement(c.a,{className:"u-pointer-events--n u-text-decoration--lt",to:"/blog"},"blog"),o.a.createElement(c.a,{className:"u-pointer-events--n u-text-decoration--lt",to:"/contact"},"contact"))),o.a.createElement("div",{className:"title-panel fp3"},o.a.createElement("div",null,o.a.createElement("strong",{className:"title-accent"},"find me"),o.a.createElement("a",{href:"https://nl.linkedin.com/in/bravebox",target:"_blank",rel:"noopener noreferrer"},"Linkedin"))),o.a.createElement("div",{className:"title-panel fp4"},o.a.createElement("div",null,o.a.createElement("strong",{className:"title-accent"},"about me: TL;DR"),o.a.createElement("p",null,"Hi folks. I am a 39 year old creative front-end dev from the Netherlands. I design and style UI/UX components, websites and applications."),o.a.createElement("p",null,o.a.createElement("a",{href:"https://drive.google.com/open?id=1QeZOIQIBTM8_3F-ZMmHsLz-LsGKG6OED",target:"_blank",rel:"noopener noreferrer",alt:"Mick Schouten C.V."},"Download C.V.")),o.a.createElement("p",null,"This site is still under construction."),o.a.createElement("p",null,o.a.createElement("i",null,o.a.createElement("small",null,"This website was made with ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/",target:"_blank",rel:"noopener noreferrer"},"Gatsby"))))))),o.a.createElement(g,null))})},h=(n(157),function(e){var t=e.children;return o.a.createElement(c.b,{query:"755544856",render:function(e){return o.a.createElement(d.b.Consumer,null,function(e){return o.a.createElement("div",{className:e.open?"is-open":""},o.a.createElement(v,null),t)})},data:a})});h.propTypes={children:l.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-blog-js-2ec7eb2aaaf6e4473ac0.js.map