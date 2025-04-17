import{a as j}from"./chunk-I2UGXQKX.js";import{a as $}from"./chunk-ZOLMSFT4.js";import{d as A,f as P,n as N,o as L,p as B,t as W}from"./chunk-W5JIORLU.js";import{k as O}from"./chunk-4AEBGA5V.js";import{Ea as S,Hb as k,Ia as u,Ib as F,Jb as M,Lb as V,Nb as D,Pa as a,Sa as n,Ta as o,Ua as g,Xa as v,Y as h,Ya as f,Z as _,Za as d,cb as s,db as b,eb as m,fb as R,gb as w,hb as T,lb as x,mb as E,nb as I,sa as C,va as r,za as y}from"./chunk-C2RAPJWX.js";import"./chunk-2NFLSA4Y.js";var z=(i,t,e,c)=>({"bg-info":i,"bg-danger":t,"bg-success":e,"bg-warning":c}),q=(i,t,e,c)=>({"bi-file-earmark-pdf":i,"bi-play-circle":t,"bi-file-text":e,"bi-link":c});function G(i,t){if(i&1&&(n(0,"option",15),s(1),o()),i&2){let e=t.$implicit;a("value",e),r(),b(e)}}function H(i,t){if(i&1){let e=v();n(0,"div",16),s(1),n(2,"button",17),f("click",function(){h(e);let l=d();return _(l.clearSearch())}),s(3,"Clear Search"),o()()}if(i&2){let e=d();r(),m(' Showing results for: "',e.currentSearchTerm,'" ')}}function J(i,t){if(i&1&&(n(0,"span",35),s(1),o()),i&2){let e=t.$implicit;r(),m(" ",e," ")}}function K(i,t){if(i&1&&(n(0,"div"),g(1,"i",36),s(2),o()),i&2){let e=d().$implicit;r(2),m(" ",e.author," ")}}function Q(i,t){if(i&1&&(n(0,"div"),g(1,"i",37),s(2),o()),i&2){let e=d().$implicit;r(2),m(" ",e.downloadCount," downloads ")}}function X(i,t){if(i&1){let e=v();n(0,"div",18)(1,"div",19)(2,"div",20)(3,"span",21),s(4),o()(),n(5,"div",22),g(6,"img",23),o(),n(7,"div",24)(8,"h5",25),s(9),o(),n(10,"p",26),s(11),o(),n(12,"div",27),u(13,J,2,1,"span",28),o(),n(14,"div",29)(15,"div"),g(16,"i",30),s(17),E(18,"date"),o(),u(19,K,3,1,"div",31)(20,Q,3,1,"div",31),o()(),n(21,"div",32)(22,"a",33),f("click",function(){let l=h(e).$implicit,p=d();return _(p.onResourceClick(l))}),g(23,"i",34),s(24),o()()()()}if(i&2){let e=t.$implicit,c=d();r(3),a("ngClass",x(15,z,e.type==="PDF",e.type==="Video",e.type==="Article",e.type==="Link")),r(),m(" ",e.type," "),r(2),a("src",e.thumbnailUrl||c.getDefaultThumbnail(e.type),C)("alt",e.title),r(3),b(e.title),r(2),b(e.description),r(2),a("ngForOf",e.tags),r(4),m(" ",I(18,13,e.createdAt),""),r(2),a("ngIf",e.author),r(),a("ngIf",e.downloadCount!==void 0),r(2),a("href",e.url,C),r(),a("ngClass",x(20,q,e.type==="PDF",e.type==="Video",e.type==="Article",e.type==="Link")),r(),m(" ",c.getActionText(e.type)," ")}}function Y(i,t){if(i&1){let e=v();n(0,"div",38),g(1,"i",39),n(2,"p",40),s(3,"No resources found"),o(),n(4,"button",41),f("click",function(){h(e);let l=d();return _(l.resetFilters())}),s(5,"Clear Filters"),o()()}}var U=class i{constructor(t){this.resourceService=t}resources=[];filteredResources=[];currentSearchTerm="";selectedCategory="";categories=["Programming","Web Development","Mathematics","Science","Language Learning","Teaching Materials"];ngOnInit(){this.loadResources()}loadResources(){this.resourceService.getResources().subscribe({next:t=>{this.resources=t,this.filteredResources=t},error:t=>{console.error("Error loading resources:",t)}})}onSearch(t){if(this.currentSearchTerm=t.searchTerm,!this.currentSearchTerm.trim()){this.filteredResources=this.resources;return}this.resourceService.searchResources(this.currentSearchTerm).subscribe({next:e=>{console.log("Search results:",e),this.filteredResources=e},error:e=>{console.error("Error searching resources:",e),this.filteredResources=[]}})}clearSearch(){this.currentSearchTerm="",this.filteredResources=this.resources}filterByCategory(){if(!this.selectedCategory){this.filteredResources=this.resources;return}this.resourceService.filterByCategory(this.selectedCategory).subscribe({next:t=>{this.filteredResources=t},error:t=>{console.error("Error filtering resources:",t)}})}resetFilters(){this.selectedCategory="",this.currentSearchTerm="",this.loadResources()}onResourceClick(t){this.resourceService.incrementDownloadCount(t.id).subscribe()}getDefaultThumbnail(t){switch(t){case"PDF":return"https://cdn-icons-png.flaticon.com/512/337/337946.png";case"Video":return"https://cdn-icons-png.flaticon.com/512/1666/1666998.png";case"Article":return"https://cdn-icons-png.flaticon.com/512/2965/2965879.png";case"Link":return"https://cdn-icons-png.flaticon.com/512/1828/1828954.png";default:return"https://cdn-icons-png.flaticon.com/512/2965/2965879.png"}}getActionText(t){switch(t){case"PDF":return"Download PDF";case"Video":return"Watch Video";case"Article":return"Read Article";case"Link":return"Visit Link";default:return"Access Resource"}}static \u0275fac=function(e){return new(e||i)(y(j))};static \u0275cmp=S({type:i,selectors:[["app-resources"]],decls:18,vars:5,consts:[[1,"container","py-5"],[1,"text-center","mb-5"],[1,"display-4"],[1,"lead"],[1,"row","mb-4"],[1,"col-md-6","mb-3","mb-md-0"],["placeholder","Search resources...",3,"search"],[1,"col-md-6"],[1,"form-select",3,"ngModelChange","change","ngModel"],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert alert-info mb-4",4,"ngIf"],[1,"row","g-4"],["class","col-md-6 col-lg-4",4,"ngFor","ngForOf"],["class","text-center py-5",4,"ngIf"],[3,"value"],[1,"alert","alert-info","mb-4"],[1,"btn","btn-sm","btn-outline-info","ms-2",3,"click"],[1,"col-md-6","col-lg-4"],[1,"card","h-100","shadow-sm"],[1,"position-absolute","top-0","end-0","m-2"],[1,"badge",3,"ngClass"],[1,"resource-thumbnail"],[1,"card-img-top",2,"height","200px","object-fit","cover",3,"src","alt"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"mb-3"],["class","badge bg-light text-dark me-1",4,"ngFor","ngForOf"],[1,"small","text-muted","mb-3"],[1,"bi","bi-calendar"],[4,"ngIf"],[1,"card-footer","bg-white","border-top-0"],["target","_blank",1,"btn","btn-outline-danger","w-100",3,"click","href"],[1,"bi",3,"ngClass"],[1,"badge","bg-light","text-dark","me-1"],[1,"bi","bi-person"],[1,"bi","bi-download"],[1,"text-center","py-5"],[1,"bi","bi-inbox","display-1","text-muted"],[1,"lead","mt-3"],[1,"btn","btn-danger",3,"click"]],template:function(e,c){e&1&&(n(0,"div",0)(1,"header",1)(2,"h1",2),s(3,"Educational Resources"),o(),n(4,"p",3),s(5,"Access quality learning materials to support your education journey"),o()(),n(6,"div",4)(7,"div",5)(8,"app-search-bar",6),f("search",function(p){return c.onSearch(p)}),o()(),n(9,"div",7)(10,"select",8),T("ngModelChange",function(p){return w(c.selectedCategory,p)||(c.selectedCategory=p),p}),f("change",function(){return c.filterByCategory()}),n(11,"option",9),s(12,"All Categories"),o(),u(13,G,2,2,"option",10),o()()(),u(14,H,4,1,"div",11),n(15,"div",12),u(16,X,25,25,"div",13),o(),u(17,Y,6,0,"div",14),o()),e&2&&(r(10),R("ngModel",c.selectedCategory),r(3),a("ngForOf",c.categories),r(),a("ngIf",c.currentSearchTerm),r(2),a("ngForOf",c.filteredResources),r(),a("ngIf",c.filteredResources.length===0))},dependencies:[D,k,F,M,V,W,L,B,N,A,P,O,$],styles:['.resource-thumbnail[_ngcontent-%COMP%]{position:relative;overflow:hidden}.resource-thumbnail[_ngcontent-%COMP%]:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,#0000001a,#0000004d);pointer-events:none}']})};export{U as ResourcesComponent};
