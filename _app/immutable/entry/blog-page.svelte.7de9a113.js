import{S as q,i as B,s as G,k as _,q as k,a as H,l as m,m as d,r as x,h as c,c as O,b as u,D as p,H as g,J as S,n as v,u as y}from"../chunks/index.ebf61ae8.js";import{b}from"../chunks/paths.8b94fc05.js";function E(f,a,n){const s=f.slice();return s[1]=a[n].slug,s[2]=a[n].title,s}function L(f){let a,n,s=f[2]+"",r,o;return{c(){a=_("li"),n=_("a"),r=k(s),this.h()},l(t){a=m(t,"LI",{});var e=d(a);n=m(e,"A",{href:!0});var i=d(n);r=x(i,s),i.forEach(c),e.forEach(c),this.h()},h(){v(n,"href",o=b+"/blog/"+f[1])},m(t,e){u(t,a,e),p(a,n),p(n,r)},p(t,e){e&1&&s!==(s=t[2]+"")&&y(r,s),e&1&&o!==(o=b+"/blog/"+t[1])&&v(n,"href",o)},d(t){t&&c(a)}}}function A(f){let a,n,s,r,o=f[0].summaries,t=[];for(let e=0;e<o.length;e+=1)t[e]=L(E(f,o,e));return{c(){a=_("h1"),n=k("BLOG"),s=H(),r=_("ul");for(let e=0;e<t.length;e+=1)t[e].c()},l(e){a=m(e,"H1",{});var i=d(a);n=x(i,"BLOG"),i.forEach(c),s=O(e),r=m(e,"UL",{});var l=d(r);for(let h=0;h<t.length;h+=1)t[h].l(l);l.forEach(c)},m(e,i){u(e,a,i),p(a,n),u(e,s,i),u(e,r,i);for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(r,null)},p(e,[i]){if(i&1){o=e[0].summaries;let l;for(l=0;l<o.length;l+=1){const h=E(e,o,l);t[l]?t[l].p(h,i):(t[l]=L(h),t[l].c(),t[l].m(r,null))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},i:g,o:g,d(e){e&&c(a),e&&c(s),e&&c(r),S(t,e)}}}function C(f,a,n){let{data:s}=a;return f.$$set=r=>{"data"in r&&n(0,s=r.data)},[s]}class J extends q{constructor(a){super(),B(this,a,C,A,G,{data:0})}}export{J as default};
