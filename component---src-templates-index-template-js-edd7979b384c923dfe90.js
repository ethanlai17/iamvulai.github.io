(self.webpackChunkgatsby_starter_glass=self.webpackChunkgatsby_starter_glass||[]).push([[509],{7383:function(t,e,r){"use strict";var i=r(7294),a=r(1554),n=r(5444),o=r(1621);e.Z=function(t){var e=t.posts.map((function(t){var e=t.frontmatter,r=t.fields,a=t.excerpt,n=t.timeToRead,o=e.title,l=e.tags,m=e.date,d=e.description,c=r.slug;return i.createElement(s,{key:c,tags:l,title:o,date:m,slug:c,timeToRead:n,description:d,excerpt:a})}));return i.createElement(l,null,e)};var s=function(t){var e=t.title,r=t.date,a=t.timeToRead,s=t.tags,l=t.excerpt,g=t.description,u=t.slug;return i.createElement(m,null,i.createElement(o.Z,{tags:s}),i.createElement(d,null,i.createElement(n.Link,{to:u},e)),i.createElement(c,{dangerouslySetInnerHTML:{__html:g||l}}),i.createElement(p,null,i.createElement("span",null,r),i.createElement("span",null,a," mins")))},l=a.ZP.ul.withConfig({displayName:"post-list__StyledPostList",componentId:"rmizj4-0"})(["padding:0;list-style:none;display:grid;justify-items:center;grid-gap:var(--size-600);grid-template-columns:repeat(auto-fit,minmax(35ch,1fr));@media screen and (max-width:500px){&{display:block;}}"]),m=a.ZP.li.withConfig({displayName:"post-list__StyledPostListItem",componentId:"rmizj4-1"})(["position:relative;display:flex;flex-direction:column;padding:1.5rem;border:1px solid rgba(255,255,255,0.5);background-color:rgba(255,255,255,0.3);backdrop-filter:blur(10px);border-radius:8px;&:hover{background-color:rgba(255,255,255,0.5);}@media screen and (max-width:500px){&{margin-top:var(--size-600);}}"]),d=a.ZP.h2.withConfig({displayName:"post-list__PostListTitle",componentId:"rmizj4-2"})(["line-height:1.2;margin-top:1rem;margin-bottom:1rem;text-transform:capitalize;font-size:var(--size-600);font-weight:700;& a{text-decoration:none;color:inherit;}& a::after{content:'';position:absolute;top:0;bottom:0;left:0;right:0;}"]),c=a.ZP.p.withConfig({displayName:"post-list__PostListExcerpt",componentId:"rmizj4-3"})(["margin-top:auto;font-size:var(--size-400);"]),p=a.ZP.div.withConfig({displayName:"post-list__PostListMeta",componentId:"rmizj4-4"})(["margin-top:2rem;font-size:var(--size-300);display:flex;justify-content:space-between;"])},1444:function(t,e,r){"use strict";var i=r(5444),a=(0,r(1554).ZP)(i.Link).withConfig({displayName:"styled-link__StyledLink",componentId:"sc-1e3ktw4-0"})(["padding:0.5rem;padding-left:1.5rem;padding-right:1.5rem;color:inherit;background-color:rgba(255,255,255,0.4);text-decoration:none;border-radius:0px;border:1px solid rgba(255,255,255,0.8);text-transform:uppercase;border-radius:4px;"]);e.Z=a},1621:function(t,e,r){"use strict";var i=r(7294),a=r(1554),n=r(5444);e.Z=function(t){var e=t.tags;return i.createElement("div",null,e&&e.map((function(t){return i.createElement(o,{key:t},i.createElement(n.Link,{to:"/tags/"+(e=t,e.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map((function(t){return t.toLowerCase()})).join("-"))},t));var e})))};var o=a.ZP.span.withConfig({displayName:"tags__Tag",componentId:"sc-16itk8x-0"})(["margin-right:0.6rem;margin-bottom:0.6rem;text-transform:uppercase;font-size:var(--size-300);& a{position:relative;z-index:2;background-color:rgba(255,255,255,0.7);text-decoration:none;color:inherit;padding:0.2rem 0.6rem;border:1px solid rgba(255,255,255,1);border-radius:4px;}& a:hover{background-color:rgba(255,255,255,0.9);}"])},2295:function(t,e,r){"use strict";r.r(e);var i=r(7294),a=r(1397),n=r(7383),o=r(1554),s=r(1444),l=(0,o.ZP)(s.Z).withConfig({displayName:"index-template___StyledStyledLink",componentId:"sc-1cnic20-0"})(["display:block;margin-top:var(--size-800);margin-bottom:var(--size-800);margin-left:auto;margin-right:auto;width:fit-content;"]);e.default=function(t){var e=t.data,r=e.allMarkdownRemark.nodes,o=e.markdownRemark.html,s=e.markdownRemark.frontmatter.title;return i.createElement(a.Z,{title:s},i.createElement(m,{dangerouslySetInnerHTML:{__html:o}}),i.createElement(n.Z,{posts:r}),i.createElement(l,{to:"/blog"},"View All posts"))};var m=o.ZP.div.withConfig({displayName:"index-template__Intro",componentId:"sc-1cnic20-1"})(["display:flex;flex-direction:column;max-width:60ch;align-items:center;margin-right:auto;margin-left:auto;margin-top:var(--size-800);margin-bottom:var(--size-900);text-align:center;& p{text-transform:capitalize;font-size:var(--size-400);}@media screen and (max-width:700px){& h1{font-size:var(--size-700);}}"])}}]);
//# sourceMappingURL=component---src-templates-index-template-js-edd7979b384c923dfe90.js.map