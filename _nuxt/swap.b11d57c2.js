import{H as p,T as d,M as m}from"./components.e1112c77.js";import{t as _}from"./tokens.25d090ff.js";import{S as f}from"./SimpleSwap.d619935c.js";import{a as u,b as w,e,w as a,f as t,F as S,D as k,o as g,i as h,t as T}from"./entry.9e17b736.js";import"./composables.38fee997.js";import"./balanceUtils.8bd55096.js";import"./site.9e38e4d4.js";import"./ConnectWalletButton.56c5103c.js";import"./WaitingToast.e110c82c.js";const $={name:"Swap",components:{SimpleSwap:f},setup(){return{tokens:_}}},b={class:"scroll-500"},v={class:"card border"},M={class:"card-body mb-3"},y={class:"fs-3"},j=t("h3",{class:"mt-3"},"Token Swap",-1),A={class:"d-flex justify-content-center mt-5"},B={class:"col-12 col-lg-8"};function C(o,s,H,n,N,V){const r=d,c=m,i=p,l=k("SimpleSwap");return g(),w(S,null,[e(i,null,{default:a(()=>[e(r,null,{default:a(()=>[h("Swap | "+T(o.$config.projectMetadataTitle),1)]),_:1}),e(c,{property:"og:title",content:"Token Swap | "+o.$config.projectMetadataTitle},null,8,["content"])]),_:1}),t("div",b,[t("div",v,[t("div",M,[t("p",y,[t("i",{class:"bi bi-arrow-left-circle cursor-pointer",onClick:s[0]||(s[0]=x=>o.$router.back())})]),j,t("div",A,[t("div",B,[e(l,{routerAddress:o.$config.swapRouterAddress,swapId:"SwapPage1",tokens:n.tokens},null,8,["routerAddress","tokens"])])])])])])],64)}const J=u($,[["render",C]]);export{J as default};