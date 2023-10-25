"use strict";(self["webpackChunkboardframe"]=self["webpackChunkboardframe"]||[]).push([[868],{868:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var s=r(3434),i=r(401),n=r(8860),a=r(7678),l=(0,a.Z)(i.Z,n.Z,s.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...n.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...s.Z.options.computed.classes.call(this)}},styles(){const e={...s.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=i.Z.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:r}=this.generateRouteLink();return r.style=this.styles,this.isClickable&&(r.attrs=r.attrs||{},r.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,r),[this.genProgress(),this.$slots.default])}}),o=(r(560),r(1884),r(144)),c=r(1767),d=r(5352);const u=["sm","md","lg","xl"],h=(()=>u.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),g=(()=>u.reduce(((e,t)=>(e["offset"+(0,d.jC)(t)]={type:[String,Number],default:null},e)),{}))(),f=(()=>u.reduce(((e,t)=>(e["order"+(0,d.jC)(t)]={type:[String,Number],default:null},e)),{}))(),p={col:Object.keys(h),offset:Object.keys(g),order:Object.keys(f)};function m(e,t,r){let s=e;if(null!=r&&!1!==r){if(t){const r=t.replace(e,"");s+=`-${r}`}return"col"!==e||""!==r&&!0!==r?(s+=`-${r}`,s.toLowerCase()):s.toLowerCase()}}const v=new Map;var y=o.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...h,offset:{type:[String,Number],default:null},...g,order:{type:[String,Number],default:null},...f,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:r,children:s,parent:i}){let n="";for(const l in t)n+=String(t[l]);let a=v.get(n);if(!a){let e;for(e in a=[],p)p[e].forEach((r=>{const s=t[r],i=m(e,r,s);i&&a.push(i)}));const r=a.some((e=>e.startsWith("col-")));a.push({col:!r||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),v.set(n,a)}return e(t.tag,(0,c.ZP)(r,{class:a}),s)}}),b=r(9223),_=r(5808),k=r(4525),C=r(8279);const B=["sm","md","lg","xl"],S=["start","end","center"];function $(e,t){return B.reduce(((r,s)=>(r[e+(0,d.jC)(s)]=t(),r)),{})}const Z=e=>[...S,"baseline","stretch"].includes(e),w=$("align",(()=>({type:String,default:null,validator:Z}))),z=e=>[...S,"space-between","space-around"].includes(e),j=$("justify",(()=>({type:String,default:null,validator:z}))),x=e=>[...S,"space-between","space-around","stretch"].includes(e),V=$("alignContent",(()=>({type:String,default:null,validator:x}))),N={align:Object.keys(w),justify:Object.keys(j),alignContent:Object.keys(V)},E={align:"align",justify:"justify",alignContent:"align-content"};function P(e,t,r){let s=E[e];if(null!=r){if(t){const r=t.replace(e,"");s+=`-${r}`}return s+=`-${r}`,s.toLowerCase()}}const O=new Map;var L=o.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Z},...w,justify:{type:String,default:null,validator:z},...j,alignContent:{type:String,default:null,validator:x},...V},render(e,{props:t,data:r,children:s}){let i="";for(const a in t)i+=String(t[a]);let n=O.get(i);if(!n){let e;for(e in n=[],N)N[e].forEach((r=>{const s=t[r],i=P(e,r,s);i&&n.push(i)}));n.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),O.set(i,n)}return e(t.tag,(0,c.ZP)(r,{staticClass:"row",class:n}),s)}}),T=function(){var e=this,t=e._self._c;return t(L,e._l(e.cards,(function(r){return t(y,{key:r,attrs:{cols:"12"}},[t(l,[t(_.Z,{attrs:{"two-line":""}},[e._l(6,(function(r){return[t(k.Z,{key:r},[t(C.km,[t(C.V9,[e._v("Message "+e._s(r))]),t(C.oZ,[e._v(" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique ")])],1)],1),6!==r?t(b.Z,{key:`divider-${r}`,attrs:{inset:""}}):e._e()]}))],2)],1)],1)})),1)},R=[],q={name:"Home",components:{},data:()=>({cards:["Today","Yesterday"]})},H=q,M=r(1001),F=(0,M.Z)(H,T,R,!1,null,null,null),D=F.exports},1884:function(){},401:function(e,t,r){r.d(t,{Z:function(){return p}});var s=r(144),i=r(7394),n=r(6750),a=r(6878),l=r(4263),o=r(3457),c=r(6669),d=r(5352),u=r(7678);const h=(0,u.Z)(a.Z,(0,l.d)(["absolute","fixed","top","bottom"]),o.Z,c.Z);var g=h.extend({name:"v-progress-linear",directives:{intersect:n.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,d.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,d.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,d.kb)(this.normalizedValue,"%"),width:(0,d.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?i.Z5:i.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,d.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,d.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,r){this.isVisible=r},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,d.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),f=g,p=s.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(f,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})}}]);
//# sourceMappingURL=868.6bc26d18.js.map