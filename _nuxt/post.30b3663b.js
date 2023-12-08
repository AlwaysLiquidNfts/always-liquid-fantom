import{H as g,M as d}from"./components.44e730df.js";import{a as C,S as b,s as y,b as P,e as s,w as x,c,y as p,D as h,o as i}from"./entry.cc11cdf9.js";import{C as _}from"./ChatPost.a83e7983.js";import{C as O}from"./ChatFeed.6059a125.js";import"./composables.54316b90.js";import"./user.7d7db46d.js";import"./ProfileImage.cc149874.js";import"./WaitingToast.73fbb45f.js";import"./textUtils.1aa635dd.js";import"./MintedPostImage.0c1bdacf.js";import"./storageUtils.763dab38.js";import"./SwitchChainButton.8595f4c4.js";import"./site.977288b2.js";import"./ConnectWalletButton.3beec258.js";import"./FileUploadModal.8a79eb4b.js";const k={data(){return{hasMaster:!1,masterPost:null,post:null,replyNotMaster:!1}},components:{ChatFeed:O,ChatPost:_},created(){this.getPostObject()},computed:{getOrbisContext(){return this.post?.context?this.post.context:this.post?.content.context?this.post.content.context:this.post?.context_details.context_id?this.post.context_details.context_id:this.$config.orbisTest?this.$config.orbisTestContext:this.$config.orbisContext},getPostAuthor(){return this.post?this.post.creator_details.metadata.address:null},getQueryId(){return this.route.query.id}},methods:{async getPostObject(){this.post=null,this.masterPost=null,this.hasMaster=!1,this.replyNotMaster=!1;let{data:t,error:o}=await this.$orbis.getPost(this.route.query.id);if(this.post=t,o)console.log("Orbis error"),console.log(o),this.toast("Orbis error",{type:"error"}),this.toast(o,{type:"error"});else if(this.post.master){this.hasMaster=!0,this.post.master!==this.post.reply_to&&(this.replyNotMaster=!0);let{data:l,error:n}=await this.$orbis.getPost(this.post.master);this.masterPost=l,n&&(console.log("Orbis error"),console.log(n),this.toast("Orbis error",{type:"error"}),this.toast(n,{type:"error"}))}}},setup(){const t=b(),o=y();return{route:t,toast:o}},watch:{getQueryId(t,o){this.getPostObject()}}};function w(t,o,l,n,e,a){const r=d,u=g,m=h("ChatPost"),f=h("ChatFeed");return i(),P("div",null,[s(u,null,{default:x(()=>[s(r,{name:"description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{property:"og:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{property:"og:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"]),s(r,{name:"twitter:image",content:t.$config.projectUrl+t.$config.previewImagePost},null,8,["content"]),s(r,{name:"twitter:description",content:"Check out this chat post on "+t.$config.projectName+"!"},null,8,["content"])]),_:1}),e.masterPost?(i(),c(m,{key:0,class:"m-4",post:e.masterPost,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(m,{key:1,post:e.post,orbisContext:a.getOrbisContext},null,8,["post","orbisContext"])):p("",!0),e.post?(i(),c(f,{key:2,id:e.post.stream_id,master:e.post.master,masterPost:e.post,orbisContext:a.getOrbisContext},null,8,["id","master","masterPost","orbisContext"])):p("",!0)])}const D=C(k,[["render",w]]);export{D as default};