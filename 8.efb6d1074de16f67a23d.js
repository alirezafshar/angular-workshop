(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{IwQQ:function(t,e,n){"use strict";n.r(e),n.d(e,"DirectiveModule",function(){return C});var c=n("ofXK"),i=n("tyNb"),r=n("fXoL"),o=n("2ChW"),s=n("3Pt+");function b(t,e){1&t&&(r.Nb(0,"div"),r.rc(1,"Enter an number between 1 to 3 and equals"),r.Mb())}function a(t,e){1&t&&(r.Nb(0,"div"),r.rc(1,"Template 1"),r.Mb())}function l(t,e){1&t&&(r.Nb(0,"div"),r.rc(1,"Template 2"),r.Mb())}function u(t,e){1&t&&(r.Nb(0,"div"),r.rc(1,"Template 3"),r.Mb())}function d(t,e){1&t&&(r.Nb(0,"div"),r.rc(1,"Number is not between 0 to 4"),r.Mb())}function h(t,e){1&t&&(r.Nb(0,"div"),r.Nb(1,"p"),r.rc(2,"This is not Render"),r.Mb(),r.Mb())}function M(t,e){1&t&&(r.Nb(0,"p"),r.rc(1,"You Checked"),r.Mb())}function p(t,e){1&t&&(r.Nb(0,"p"),r.rc(1,"You Unchecked"),r.Mb())}let m=(()=>{class t{constructor(){this.num="",this.checkMe=!1}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-structural-dir"]],decls:17,vars:10,consts:[[1,"subtitle"],["type","text",3,"ngModel","ngModelChange"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],["type","checkbox",3,"ngModel","ngModelChange"],[4,"ngIf","ngIfThen","ngIfElse"],["thenBlock",""],["elseBlock",""]],template:function(t,e){if(1&t&&(r.Nb(0,"h2",0),r.rc(1,"Ng Switch"),r.Mb(),r.Nb(2,"input",1),r.Vb("ngModelChange",function(t){return e.num=t}),r.Mb(),r.Nb(3,"div",2),r.pc(4,b,2,0,"div",3),r.pc(5,a,2,0,"div",3),r.pc(6,l,2,0,"div",3),r.pc(7,u,2,0,"div",3),r.pc(8,d,2,0,"div",4),r.Mb(),r.Nb(9,"h2",0),r.rc(10,"Ng If"),r.Mb(),r.Nb(11,"input",5),r.Vb("ngModelChange",function(t){return e.checkMe=t}),r.Mb(),r.pc(12,h,3,0,"div",6),r.pc(13,M,2,0,"ng-template",null,7,r.qc),r.pc(15,p,2,0,"ng-template",null,8,r.qc)),2&t){const t=r.kc(14),n=r.kc(16);r.zb(2),r.hc("ngModel",e.num),r.zb(1),r.hc("ngSwitch",e.num),r.zb(1),r.hc("ngSwitchCase",0),r.zb(1),r.hc("ngSwitchCase",1),r.zb(1),r.hc("ngSwitchCase",2),r.zb(1),r.hc("ngSwitchCase",3),r.zb(4),r.hc("ngModel",e.checkMe),r.zb(1),r.hc("ngIf",e.checkMe)("ngIfThen",t)("ngIfElse",n)}},directives:[s.b,s.k,s.n,c.o,c.p,c.q,s.a,c.m],styles:[""]}),t})();function f(t,e){if(1&t){const t=r.Pb();r.Nb(0,"ul"),r.Nb(1,"li"),r.rc(2),r.Mb(),r.Nb(3,"li"),r.Nb(4,"button",2),r.Vb("click",function(){r.lc(t);const n=e.index;return r.Zb().delMovie(n)}),r.rc(5,"Delete"),r.Mb(),r.Mb(),r.Mb()}if(2&t){const t=e.$implicit;r.zb(2),r.uc("",t.title," - ",t.director,"")}}let g=(()=>{class t{constructor(){this.movies=[],this.mvTitle="",this.mvDir="",this.addMovie=()=>{this.movies.unshift({title:this.mvTitle,director:this.mvDir}),this.mvTitle="",this.mvDir=""},this.delMovie=t=>{this.movies.splice(t,1)},this.refresh=()=>{this.movies=[{title:"Zootopia",director:"Byron Howard, Rich Moore"},{title:"Batman v Superman: Dawn of Justice",director:"Zack Snyder"},{title:"Captain American: Civil War",director:"Anthony Russo, Joe Russo"},{title:"X-Men: Apocalypse",director:"Bryan Singer"},{title:"Warcraft",director:"Duncan Jones"}]},this.trackByFn=t=>t.title}ngOnInit(){this.refresh()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-trackBy"]],decls:11,vars:4,consts:[["type","text","placeholder","MOVIE NAME",3,"ngModel","ngModelChange"],["type","text","placeholder","MOVIE DIRECTOR",3,"ngModel","ngModelChange"],[3,"click"],[4,"ngFor","ngForOf","ngForTrackBy"]],template:function(t,e){1&t&&(r.Nb(0,"h2"),r.rc(1,"Trackby"),r.Mb(),r.Nb(2,"section"),r.Nb(3,"input",0),r.Vb("ngModelChange",function(t){return e.mvTitle=t}),r.Mb(),r.Nb(4,"input",1),r.Vb("ngModelChange",function(t){return e.mvDir=t}),r.Mb(),r.Nb(5,"button",2),r.Vb("click",function(){return e.addMovie()}),r.rc(6,"Add"),r.Mb(),r.Mb(),r.Nb(7,"section"),r.pc(8,f,6,2,"ul",3),r.Nb(9,"button",2),r.Vb("click",function(){return e.refresh()}),r.rc(10,"Refresh"),r.Mb(),r.Mb()),2&t&&(r.zb(3),r.hc("ngModel",e.mvTitle),r.zb(1),r.hc("ngModel",e.mvDir),r.zb(4),r.hc("ngForOf",e.movies)("ngForTrackBy",e.trackByFn))},directives:[s.b,s.k,s.n,c.l],styles:[""]}),t})();function N(t,e){if(1&t&&(r.Nb(0,"ul",4),r.Nb(1,"li",2),r.rc(2),r.Mb(),r.Nb(3,"li",2),r.rc(4),r.Mb(),r.Nb(5,"li",2),r.rc(6),r.Mb(),r.Nb(7,"li",2),r.rc(8),r.Mb(),r.Nb(9,"li",2),r.rc(10),r.Mb(),r.Nb(11,"li",2),r.rc(12),r.Mb(),r.Mb()),2&t){const t=e.$implicit;r.zb(2),r.sc(t.customerNo),r.zb(2),r.sc(t.name),r.zb(2),r.sc(t.address),r.zb(2),r.sc(t.city),r.zb(2),r.sc(t.state),r.zb(2),r.sc(t.country)}}const v=[{path:"",component:(()=>{class t{constructor(){this.customers=[{customerNo:1,name:"Rahuld Dravid",address:"A",city:"Banglaore",state:"Karnataka",country:"Canada"},{customerNo:2,name:"Sachin Tendulkar",address:"B",city:"Mumbai",state:"Maharastra",country:"Iran"},{customerNo:3,name:"Saurrav Ganguly",address:"C",city:"Kolkata",state:"West Bengal",country:"India"},{customerNo:4,name:"Mahendra Singh Dhoni",address:"D",city:"Ranchi",state:"Bihar",country:"USA"},{customerNo:5,name:"Virat Kohli",address:"E",city:"Delhi",state:"Delhi",country:"Canada"}]}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Db({type:t,selectors:[["app-child"]],decls:19,vars:1,consts:[[1,"title"],[1,"table__header"],[1,"table__list"],["class","table__body",4,"ngFor","ngForOf"],[1,"table__body"]],template:function(t,e){1&t&&(r.Lb(0,"app-nav"),r.Nb(1,"h2",0),r.rc(2,"Reuse Component"),r.Mb(),r.Nb(3,"ul",1),r.Nb(4,"li",2),r.rc(5,"Customer Number"),r.Mb(),r.Nb(6,"li",2),r.rc(7,"Name"),r.Mb(),r.Nb(8,"li",2),r.rc(9,"Address"),r.Mb(),r.Nb(10,"li",2),r.rc(11,"City"),r.Mb(),r.Nb(12,"li",2),r.rc(13,"State"),r.Mb(),r.Nb(14,"li",2),r.rc(15,"Country"),r.Mb(),r.Mb(),r.pc(16,N,13,6,"ul",3),r.Lb(17,"app-structural-dir"),r.Lb(18,"app-trackBy")),2&t&&(r.zb(16),r.hc("ngForOf",e.customers))},directives:[o.a,c.l,m,g],styles:[""]}),t})()}];let y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[i.c.forChild(v)],i.c]}),t})();var k=n("ct+p");let C=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({imports:[[c.b,y,k.HomeModule,s.j]]}),t})()}}]);