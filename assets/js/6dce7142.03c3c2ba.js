"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[5694],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1213:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"view",title:"View, Props, etc",sidebar_label:"View, Props, etc"},o=void 0,c={unversionedId:"view",id:"version-1.x.x/view",title:"View, Props, etc",description:"Follow the original Animated library guides to learn how values can be connected to View attributes.",source:"@site/versioned_docs/version-1.x.x/view.md",sourceDirName:".",slug:"/view",permalink:"/react-native-reanimated/docs/1.x.x/view",draft:!1,tags:[],version:"1.x.x",frontMatter:{id:"view",title:"View, Props, etc",sidebar_label:"View, Props, etc"},sidebar:"version-1.x.x/docs",previous:{title:"Event handling",permalink:"/react-native-reanimated/docs/1.x.x/event"},next:{title:"Animated.Code",permalink:"/react-native-reanimated/docs/1.x.x/code"}},l={},p=[],s={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Follow the original ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," library guides to learn how values can be connected to View attributes.\nSimilarly with ",(0,a.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," you need to use components prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated.")," (remember to ",(0,a.kt)("a",{parentName:"p",href:"/react-native-reanimated/docs/1.x.x/getting_started#installation"},"import")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Animated")," from reanimated package). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import Animated from 'react-native-reanimated';\n\n// use\n<Animated.View/>\n// instead of\n<View/>\n")))}d.isMDXComponent=!0}}]);