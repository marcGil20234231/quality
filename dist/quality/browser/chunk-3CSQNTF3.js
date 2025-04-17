import{a as y}from"./chunk-SSB2MDWQ.js";import{a as D}from"./chunk-YEKDV2CF.js";import{a as I}from"./chunk-ATP2JAFY.js";import{e as T,h as C,k as E}from"./chunk-4AEBGA5V.js";import{Ea as g,Ia as s,Ib as b,Jb as S,Nb as _,Pa as l,Sa as i,Ta as t,Ua as u,Za as p,cb as r,db as d,eb as v,jb as x,kb as h,va as a,za as m}from"./chunk-C2RAPJWX.js";import"./chunk-2NFLSA4Y.js";var k=()=>["/teachers"],A=n=>["/teachers/edit",n],F=n=>["/courses",n];function O(n,o){n&1&&(i(0,"div",4)(1,"div",5)(2,"span",6),r(3,"Loading..."),t()()())}function w(n,o){n&1&&(i(0,"div",7),r(1," Teacher not found or has been removed. "),t())}function M(n,o){if(n&1&&(i(0,"a",27),u(1,"i",28),r(2," Edit Profile "),t()),n&2){let e=p(2);l("routerLink",h(1,A,e.teacher.id))}}function N(n,o){n&1&&(i(0,"div",29),r(1," No courses currently assigned. "),t())}function R(n,o){if(n&1&&(i(0,"tr")(1,"td"),r(2),t(),i(3,"td"),r(4),t(),i(5,"td"),r(6),t(),i(7,"td")(8,"a",32),r(9," View Course "),t()()()),n&2){let e=o.$implicit;a(2),d(e.title),a(2),d(e.category),a(2),d(e.level),a(2),l("routerLink",h(4,F,e.id))}}function j(n,o){if(n&1&&(i(0,"table",30)(1,"thead")(2,"tr")(3,"th"),r(4,"Title"),t(),i(5,"th"),r(6,"Category"),t(),i(7,"th"),r(8,"Level"),t(),i(9,"th"),r(10,"Actions"),t()()(),i(11,"tbody"),s(12,R,10,6,"tr",31),t()()),n&2){let e=p(2);a(12),l("ngForOf",e.courses)}}function P(n,o){if(n&1&&(i(0,"div",8)(1,"div",9)(2,"div",10)(3,"div",11)(4,"h3",12),r(5),t(),i(6,"h6",13),r(7),t(),i(8,"p",14)(9,"strong"),r(10,"Email:"),t(),r(11),t(),i(12,"p",14)(13,"strong"),r(14,"Courses:"),t(),r(15),t()()(),i(16,"div",15)(17,"a",16),u(18,"i",17),r(19," Back to Teachers "),t(),s(20,M,3,3,"a",18),t()(),i(21,"div",19)(22,"div",20)(23,"div",21)(24,"h4",22),r(25,"About"),t()(),i(26,"div",11)(27,"p",14),r(28),t()()(),i(29,"div",23)(30,"div",21)(31,"h4",22),r(32,"Courses"),t()(),i(33,"div",11),s(34,N,2,0,"div",24),i(35,"div",25),s(36,j,13,1,"table",26),t()()()()()),n&2){let e=p();a(5),d(e.teacher.name),a(2),d(e.teacher.specialization),a(4),v(" ",e.teacher.email,""),a(4),v(" ",e.teacher.courses.length||0,""),a(2),l("routerLink",x(9,k)),a(3),l("ngIf",e.authService.isAdmin()),a(8),d(e.teacher.bio),a(6),l("ngIf",e.courses.length===0),a(2),l("ngIf",e.courses.length>0)}}var L=class n{constructor(o,e,c,f){this.route=o;this.teacherService=e;this.courseService=c;this.authService=f}teacher=null;courses=[];loading=!0;ngOnInit(){this.route.paramMap.subscribe(o=>{let e=o.get("id");e?this.loadTeacher(+e):this.loading=!1})}loadTeacher(o){this.teacherService.getTeacher(o).subscribe({next:e=>{this.teacher=e,this.loadTeacherCourses(e.courses||[]),this.loading=!1},error:e=>{console.error("Error loading teacher:",e),this.loading=!1}})}loadTeacherCourses(o){if(o.length===0){this.courses=[];return}let e=o.map(c=>this.courseService.getCourse(c));Promise.all(e.map(c=>c.toPromise())).then(c=>{this.courses=c.filter(f=>f!==void 0)}).catch(c=>{console.error("Error loading courses:",c),this.courses=[]})}static \u0275fac=function(e){return new(e||n)(m(T),m(y),m(I),m(D))};static \u0275cmp=g({type:n,selectors:[["app-teacher-detail"]],decls:4,vars:3,consts:[[1,"container","mt-4"],["class","text-center my-5",4,"ngIf"],["class","alert alert-danger",4,"ngIf"],["class","row",4,"ngIf"],[1,"text-center","my-5"],["role","status",1,"spinner-border","text-danger"],[1,"visually-hidden"],[1,"alert","alert-danger"],[1,"row"],[1,"col-md-4","mb-4"],[1,"card","border-danger"],[1,"card-body"],[1,"card-title","text-danger"],[1,"card-subtitle","mb-2","text-muted"],[1,"card-text"],[1,"mt-3"],[1,"btn","btn-outline-secondary","me-2",3,"routerLink"],[1,"bi","bi-arrow-left"],["class","btn btn-outline-danger",3,"routerLink",4,"ngIf"],[1,"col-md-8"],[1,"card","mb-4"],[1,"card-header","bg-danger","text-white"],[1,"mb-0"],[1,"card"],["class","alert alert-info",4,"ngIf"],[1,"table-responsive"],["class","table table-striped table-hover",4,"ngIf"],[1,"btn","btn-outline-danger",3,"routerLink"],[1,"bi","bi-pencil"],[1,"alert","alert-info"],[1,"table","table-striped","table-hover"],[4,"ngFor","ngForOf"],[1,"btn","btn-sm","btn-outline-danger",3,"routerLink"]],template:function(e,c){e&1&&(i(0,"div",0),s(1,O,4,0,"div",1)(2,w,2,0,"div",2)(3,P,37,10,"div",3),t()),e&2&&(a(),l("ngIf",c.loading),a(),l("ngIf",!c.loading&&!c.teacher),a(),l("ngIf",c.teacher))},dependencies:[_,b,S,E,C],encapsulation:2})};export{L as TeacherDetailComponent};
