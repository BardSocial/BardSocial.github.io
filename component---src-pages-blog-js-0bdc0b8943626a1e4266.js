"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[7],{1631:function(e,t,n){var a=n(7294),l=n(1074),i=n(5226),r=l.default.div.withConfig({displayName:"page-header__Wrapper",componentId:"sc-15kywng-0"})(["padding:60px 24px 80px 0px;"]);t.Z=function(e){var t=e.header,n=e.subHeader;return a.createElement(r,null,a.createElement(i.h4,null,t),a.createElement(i.aT,null,n))}},970:function(e,t,n){n.d(t,{$0:function(){return o},$G:function(){return d},FY:function(){return u},WJ:function(){return i},gq:function(){return l},tu:function(){return r}});var a=n(1074),l=a.default.div.withConfig({displayName:"simple__FlexRow",componentId:"sc-blkykx-0"})(["display:flex;flex-direction:row;gap:",";align-items:center;"],(function(e){var t=e.gap;return t||"12px"})),i=a.default.div.withConfig({displayName:"simple__FlexRowSpace",componentId:"sc-blkykx-1"})(["display:flex;justify-content:space-between;align-items:center;"]),r=a.default.div.withConfig({displayName:"simple__FlexColumn",componentId:"sc-blkykx-2"})(["display:flex;flex-direction:column;gap:",";align-items:left;"],(function(e){var t=e.gap;return t||"12px"})),o=a.default.div.withConfig({displayName:"simple__Section",componentId:"sc-blkykx-3"})(["padding:5rem 0;@media (max-width:800px){padding:3rem 0;}"]),d=a.default.div.withConfig({displayName:"simple__Tags",componentId:"sc-blkykx-4"})(["display:flex;flex-direction:column;gap:8px;text-transform:uppercase;align-items:flex-start;span{background-color:",";padding:2px 8px;border-radius:4px;color:",";font-size:12px;font-weight:600;}"],(function(e){return e.theme.colors.tag}),(function(e){return e.theme.colors.invertText})),u=a.default.div.withConfig({displayName:"simple__TextIndent",componentId:"sc-blkykx-5"})(["position:relative;padding:0 24px;@media (max-width:1000px){padding:0 12px;}"])},5502:function(e,t,n){n.r(t);var a=n(7294),l=n(123),i=n(262),r=n(1074),o=n(1597),d=n(5226),u=n(1631),s=n(970),c=r.default.div.withConfig({displayName:"blog__Blogs",componentId:"sc-15xlt4x-0"})(["display:flex;flex-direction:column;gap:12px;"]),p=(0,r.default)(o.Link).withConfig({displayName:"blog__Blog",componentId:"sc-15xlt4x-1"})(["display:flex;flex-direction:column;gap:12px;padding:18px 0;p.blog-preview{font-size:1.2rem;line-height:1.4rem;}"]);t.default=function(e){var t,n=e.data,r=null==n||null===(t=n.allSanityPost)||void 0===t?void 0:t.edges;return a.createElement(l.Z,null,a.createElement(i.Z,{title:"Bard | Blog",description:" Read about our announcements, our thoughts on topics in the creative industries, and our releases "}),a.createElement(u.Z,{header:"Blog",subHeader:" When we aren't creating stories with all of you, we also write  about the industry, what we care about, our releases, and many other things "}),a.createElement(s.FY,null,a.createElement(c,null,r.sort((function(e,t){return new Date(t.node.publishedAt)-new Date(e.node.publishedAt)})).map((function(e){var t=e.node;return a.createElement(p,{key:t.slug.current},a.createElement(o.Link,{to:"/blog/"+t.slug.current},a.createElement(d.sD,null,t.title)),a.createElement("p",{className:"blog-preview"},t.preview),a.createElement(o.Link,{to:"/blog/"+t.slug.current},"Read more"),a.createElement(s.$G,null,t.categories.map((function(e){return a.createElement("span",null,e.title)}))))})))))}}}]);
//# sourceMappingURL=component---src-pages-blog-js-0bdc0b8943626a1e4266.js.map