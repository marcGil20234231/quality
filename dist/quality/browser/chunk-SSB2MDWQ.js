import{b as h}from"./chunk-4AEBGA5V.js";import{M as a,R as i}from"./chunk-C2RAPJWX.js";var c=class t{constructor(e){this.http=e}apiUrl="http://localhost:3000/teachers";getTeachers(){return this.http.get(this.apiUrl)}getTeacher(e){return this.http.get(`${this.apiUrl}/${e}`)}createTeacher(e){return this.http.post(this.apiUrl,e)}updateTeacher(e,r){return this.http.put(`${this.apiUrl}/${e}`,r)}deleteTeacher(e){return this.http.delete(`${this.apiUrl}/${e}`)}searchTeachers(e){return this.http.get(`${this.apiUrl}?q=${e}`)}static \u0275fac=function(r){return new(r||t)(i(h))};static \u0275prov=a({token:t,factory:t.\u0275fac,providedIn:"root"})};export{c as a};
