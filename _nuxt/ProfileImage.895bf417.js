import{a as i,o as a,b as o}from"./entry.9e17b736.js";const r={name:"ProfileImage",props:["address","domain","image"],data(){return{imgPath:null,defaultImage:"/img/user/anon.svg"}},created(){this.imgPath=this.defaultImage},mounted(){const e=sessionStorage.getItem(String(this.address).toLowerCase()+"-img");e?this.imgPath=e:this.image&&(this.imgPath=this.image,sessionStorage.setItem(String(this.address).toLowerCase()+"-img",this.image))},watch:{image(e,s){s&&(this.imgPath=s,sessionStorage.setItem(String(this.address).toLowerCase()+"-img",this.image))}}},m=["src"];function g(e,s,n,h,t,d){return a(),o("img",{src:t.imgPath},null,8,m)}const l=i(r,[["render",g]]);export{l as P};
