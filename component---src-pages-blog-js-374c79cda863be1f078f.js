(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[7],{7383:function(e,t,a){"use strict";var i=a(7294),n=a(9),r=a(5444),o=a(1621);t.Z=function(e){var t=e.posts.map((function(e){var t=e.frontmatter,a=e.fields,n=e.excerpt,r=e.timeToRead,o=t.title,l=t.tags,c=t.date,m=t.description,d=a.slug;return i.createElement(s,{key:d,tags:l,title:o,date:c,slug:d,timeToRead:r,description:m,excerpt:n})}));return i.createElement(l,null,t)};var s=function(e){var t=e.title,a=e.date,n=e.timeToRead,s=e.tags,l=e.excerpt,f=e.description,g=e.slug;return i.createElement(c,null,i.createElement(o.Z,{tags:s}),i.createElement(m,null,i.createElement(r.Link,{to:g},t)),i.createElement(d,{dangerouslySetInnerHTML:{__html:f||l}}),i.createElement(p,null,i.createElement("span",null,a),i.createElement("span",null,n," mins")))},l=n.ZP.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"sc-rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),c=n.ZP.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"sc-rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid #000000;background-color:#ffffff;backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:#9fc0de;}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),m=n.ZP.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"sc-rmizj4-2"})(["line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;}"]),d=n.ZP.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"sc-rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=n.ZP.div.withConfig({displayName:"post-list__PostListMeta",componentId:"sc-rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},1621:function(e,t,a){"use strict";var i=a(7294),n=a(9),r=a(5444);t.Z=function(e){var t=e.tags;return i.createElement("div",null,t&&t.map((function(e){return i.createElement(o,{key:e},i.createElement(r.Link,{to:"/tags/"+(t=e,t.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(e){return e.toLowerCase()})).join("-"))},e));var t})))};var o=n.ZP.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:#ffffff;text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid #000000;border-radius:4px;}& a:hover{background-color:#f2c894;}"])},223:function(e,t,a){"use strict";a.r(t);var i=a(7294),n=a(5444),r=a(6569),o=a(7383),s=a(9);t.default=function(e){var t=e.data.allMarkdownRemark.nodes;return i.createElement(r.Z,{title:"Blog"},i.createElement(l,null,i.createElement("h1",null,"Blog"),i.createElement(c,{to:"/tags"},"view all tags")),i.createElement(o.Z,{posts:t}))};var l=s.ZP.div.withConfig({displayName:"blog__HeaderWrapper",componentId:"sc-1ak27tl-0"})(["display:flex;flex-direction:column;margin-top:var(--size-900);margin-bottom:var(--size-700);h1{max-width:none;}"]),c=(0,s.ZP)(n.Link).withConfig({displayName:"blog___StyledLink",componentId:"sc-1ak27tl-1"})(["margin-top:var(--size-400);color:inherit;text-transform:uppercase;"])}}]);
//# sourceMappingURL=component---src-pages-blog-js-374c79cda863be1f078f.js.map