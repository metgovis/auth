(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"4dGL":function(t,e,i){"use strict";i.r(e),i.d(e,"ScopesModule",(function(){return It}));var o=i("mrSG"),s=i("Ovx2");class r{constructor(t){this.app={},this.role=0,null!=t&&(null!=t.app&&(null!=t.app.name&&(this.app.name=t.app.name),null!=t.app.icon&&(this.app.icon=t.app.icon)),null!=t.url&&(this.url=t.url),null!=t.role&&(this.role=t.role),null!=t.appId&&(this.appId=t.appId),null!=t.scopeId&&(this.scopeId=t.scopeId),null!=t.description&&(this.description=t.description))}}var n=i("Dh3D"),a=i("+0xr"),c=i("3Pt+"),l=i("0IaG"),p=i("fXoL"),d=i("xyCQ"),b=i("dWDE"),u=i("/t3+"),h=i("kmnG"),m=i("bTqV"),f=i("NFeN"),g=i("4jEk"),v=i("ofXK"),I=i("d3UM"),S=i("FKr1"),w=i("WJ5W"),R=i("bv9b"),y=i("AbOq"),k=i("roMP");function O(t,e){1&t&&p.Nb(0,"mat-progress-bar",11)}function M(t,e){if(1&t&&(p.Sb(0,"mat-option",12),p.Bc(1),p.Rb()),2&t){const t=e.$implicit;p.kc("value",t.appId),p.Ab(1),p.Dc(" ",t.name," ")}}function C(t,e){if(1&t&&(p.Sb(0,"mat-error"),p.Bc(1),p.Rb()),2&t){const t=p.ec();p.Ab(1),p.Dc(" ",t.errors.appId," ")}}const A=function(t){return{name:t}};let D=(()=>{class t{constructor(t,e,i,o){this.apps=t,this.dialog=e,this.config=i,this.formerror=o,this.form=new c.f({appId:new c.c([])}),this.errors={appId:""},this.filter=new c.f({app:new c.c("")}),this.subscriptions={}}load(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.apps.list({filter:["name","appId"]});this.apps.data=t.ok?t.result.map(t=>new s.a(t)):[],void 0!==this.config.appId&&null!=this.config.appId&&this.form.controls.appId.setValue(this.config.appId),this.loading=!1}))}close(){return Object(o.a)(this,void 0,void 0,(function*(){this.dialog.close(!1)}))}submit(){return Object(o.a)(this,void 0,void 0,(function*(){this.dialog.close(this.form.value)}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.load()}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(d.a),p.Mb(l.d),p.Mb(l.a),p.Mb(b.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["scopes-filter-dialog"]],decls:21,vars:13,consts:[[1,"spacer"],["mat-icon-button","",3,"click"],["mode","indeterminate",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["name","appId","formControlName","appId","multiple",""],[3,"formGroup"],["placeholderLabel","filter apps","noEntriesFoundLabel","no apps found","formControlName","app"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["type","submit","color","primary","mat-flat-button",""],["mode","indeterminate"],[3,"value"]],template:function(t,e){1&t&&(p.Sb(0,"mat-toolbar"),p.Sb(1,"mat-label",0),p.Bc(2," Filter Scopes "),p.Rb(),p.Sb(3,"button",1),p.ac("click",(function(){return e.close()})),p.Sb(4,"mat-icon"),p.Bc(5," close "),p.Rb(),p.Rb(),p.Rb(),p.Sb(6,"mat-content"),p.zc(7,O,1,0,"mat-progress-bar",2),p.Sb(8,"form",3),p.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),p.Sb(9,"mat-form-field",4),p.Sb(10,"mat-label"),p.Bc(11," App(s) "),p.Rb(),p.Sb(12,"mat-select",5),p.Sb(13,"mat-option",6),p.Nb(14,"ngx-mat-select-search",7),p.Rb(),p.zc(15,M,2,2,"mat-option",8),p.fc(16,"filterBy"),p.fc(17,"orderBy"),p.Rb(),p.zc(18,C,2,1,"mat-error",9),p.Rb(),p.Sb(19,"button",10),p.Bc(20," submit "),p.Rb(),p.Rb(),p.Rb()),2&t&&(p.Ab(7),p.kc("ngIf",e.loading),p.Ab(1),p.kc("formGroup",e.form),p.Ab(5),p.kc("formGroup",e.filter),p.Ab(2),p.kc("ngForOf",p.hc(16,5,p.hc(17,8,e.apps.data,"name"),p.mc(11,A,e.filter.value.app))),p.Ab(3),p.kc("ngIf",e.errors.appId))},directives:[u.a,h.f,m.a,f.a,g.a,v.l,c.w,c.p,c.g,h.c,I.a,c.o,c.e,S.k,w.a,v.k,R.a,h.b],pipes:[y.a,k.a],styles:[".filter-dialog{width:500px!important}.filter-dialog .mat-dialog-container{padding:0!important}@media screen and (max-width:600px){.filter-dialog .mat-dialog-container{top:0;left:0;right:0;bottom:0;z-index:5000;position:fixed;border-radius:0}}"],encapsulation:2}),t})();var x=i("9ZKQ"),B=i("u0tM"),P=i("L7HW"),z=i("tyNb"),j=i("swrf"),N=i("bS1C"),F=i("BhS5"),_=i("a6VE"),G=i("znSr"),q=i("MutI"),H=i("A5z7");function $(t,e){1&t&&p.Nb(0,"mat-progress-bar",14)}function J(t,e){if(1&t){const t=p.Tb();p.Sb(0,"mat-chip",17),p.ac("removed",(function(){p.rc(t);const i=e.$implicit;return p.ec(2).unfilter("appId",i)})),p.Sb(1,"mat-icon"),p.Bc(2," apps "),p.Rb(),p.Sb(3,"mat-label"),p.Bc(4),p.Rb(),p.Sb(5,"mat-icon",18),p.Bc(6," cancel "),p.Rb(),p.Rb()}if(2&t){const t=e.$implicit,i=p.ec(2);p.Ab(4),p.Dc(" ",i.describe(i.apps.data,"appId",t)," ")}}function L(t,e){if(1&t&&(p.Sb(0,"mat-chip-list",15),p.zc(1,J,7,1,"mat-chip",16),p.Rb()),2&t){const t=p.ec();p.Ab(1),p.kc("ngForOf",t.filter.appId)}}function Q(t,e){1&t&&(p.Sb(0,"th",19),p.Bc(1," App "),p.Rb())}function V(t,e){if(1&t&&(p.Sb(0,"td",20),p.Bc(1),p.Rb()),2&t){const t=e.$implicit;p.Ab(1),p.Dc(" ",t.app.name," ")}}function E(t,e){1&t&&(p.Sb(0,"th",19),p.Bc(1," Scope "),p.Rb())}function T(t,e){if(1&t&&(p.Sb(0,"td",20),p.Bc(1),p.Rb()),2&t){const t=e.$implicit;p.Ab(1),p.Dc(" ",t.url," ")}}function Z(t,e){1&t&&(p.Sb(0,"th",19),p.Bc(1," Description "),p.Rb())}function K(t,e){if(1&t&&(p.Sb(0,"td",20),p.Bc(1),p.Rb()),2&t){const t=e.$implicit;p.Ab(1),p.Dc(" ",t.description," ")}}function W(t,e){1&t&&p.Nb(0,"th",21)}function U(t,e){if(1&t){const t=p.Tb();p.Sb(0,"td",20),p.Sb(1,"button",22),p.ac("click",(function(){p.rc(t);const i=e.$implicit;return p.ec().options(i)})),p.Sb(2,"mat-icon"),p.Bc(3," more_vert "),p.Rb(),p.Rb(),p.Rb()}}function X(t,e){1&t&&p.Nb(0,"tr",23)}function Y(t,e){1&t&&p.Nb(0,"tr",24)}function tt(t,e){if(1&t){const t=p.Tb();p.Sb(0,"mat-list-item",25),p.ac("click",(function(){p.rc(t);const i=e.$implicit;return p.ec().options(i)})),p.Sb(1,"mat-label"),p.Sb(2,"h3"),p.Bc(3),p.Rb(),p.Sb(4,"p"),p.Bc(5),p.Rb(),p.Rb(),p.Rb()}if(2&t){const t=e.$implicit;p.Ab(3),p.Dc(" ",t.app.name," "),p.Ab(2),p.Dc(" ",t.url," ")}}let et=(()=>{class t{constructor(t,e,i,o,s,r,n,c,l,p){this.apps=t,this.toast=e,this.dialog=i,this.sheet=o,this.config=s,this.router=r,this.confirm=n,this.filters=c,this.buttons=l,this.service=p,this.filter=this.filters.get({appId:[]}),this.scopes=new a.k,this.columns=["app","url","description","options"],this.subscriptions={}}list(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.list({filter:["url","app","role","appId","roles","scopeId","description"],appId:this.filter.appId});this.scopes.data=t.ok?t.result.map(t=>new r(t)):[],this.loading=!1}))}load(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.apps.list({filter:["name","appId"]});this.apps.data=t.ok?t.result.map(t=>new s.a(t)):[],this.loading=!1}))}unfilter(t,e){this.filter[t]=this.filter[t].filter(t=>t!=e),this.filters.update(this.filter),this.list()}options(t){return Object(o.a)(this,void 0,void 0,(function*(){this.sheet.show({role:t.role,title:t.url,options:[{icon:"edit",title:"Edit",handler:()=>Object(o.a)(this,void 0,void 0,(function*(){this.router.navigate(["/scopes","editor"],{queryParams:{mode:"update",scopeId:t.scopeId}})})),disabled:[0,1]},{icon:"content_copy",title:"Copy",handler:()=>Object(o.a)(this,void 0,void 0,(function*(){this.router.navigate(["/scopes","editor"],{queryParams:{mode:"copy",scopeId:t.scopeId}})})),disabled:[0,1]},{icon:"delete",title:"Delete",danger:!0,handler:()=>Object(o.a)(this,void 0,void 0,(function*(){this.confirm.show({message:"Are you sure you want to delete "+t.url+"?",handler:()=>Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const e=yield this.service.delete({scopeId:t.scopeId});if(e.ok){for(let e=0;e<this.scopes.data.length;e++)if(this.scopes.data[e].scopeId==t.scopeId){this.scopes.data.splice(e,1),this.toast.show("Scope was removed!");break}this.scopes.data=JSON.parse(JSON.stringify(this.scopes.data))}else this.toast.show(e.error.message);this.loading=!1}))})})),disabled:[0,1,2,3,4]}]})}))}describe(t,e,i){let o="-";return t.map(t=>{t[e]==i&&(o=t.name)}),o}ngOnInit(){this.buttons.show("add"),this.buttons.hide("close"),this.buttons.show("filter"),this.buttons.show("search"),this.scopes.sort=this.sort,this.scopes.sort.active="url",this.scopes.sort.direction="asc",this.subscriptions.add=this.buttons.add.click.subscribe(t=>{this.router.navigate(["/scopes","editor"],{queryParams:{mode:"add"}})}),this.subscriptions.loaded=this.config.loaded.subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){t&&(yield this.list(),yield this.load())}))),this.subscriptions.search=this.buttons.search.value.subscribe(t=>{this.scopes.filter=t}),this.subscriptions.filter=this.buttons.filter.click.subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){const t=yield this.dialog.open(D,{data:this.filter,panelClass:"filter-dialog"});yield t.afterClosed().subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){t&&(Object.keys(t).map(e=>{this.filter[e]=t[e]}),this.filters.update(this.filter),this.list())})))})))}ngOnDestroy(){this.buttons.reset("search"),this.subscriptions.add.unsubscribe(),this.subscriptions.loaded.unsubscribe(),this.subscriptions.search.unsubscribe(),this.subscriptions.filter.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(d.a),p.Mb(x.a),p.Mb(l.b),p.Mb(B.a),p.Mb(P.a),p.Mb(z.c),p.Mb(j.a),p.Mb(N.a),p.Mb(F.a),p.Mb(_.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["scopes-page"]],viewQuery:function(t,e){var i;1&t&&p.vc(n.a,!0),2&t&&p.oc(i=p.bc())&&(e.sort=i.first)},decls:19,vars:7,consts:[["mode","indeterminate",4,"ngIf"],["class","filterbar",4,"ngIf"],["mat-table","","fxShow","","fxHide.xs","true","matSort","",3,"dataSource"],["matColumnDef","app"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","url"],["matColumnDef","description"],["matColumnDef","options"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],["mat-row","",4,"matRowDef","matRowDefColumns"],["fxHide","","fxShow.xs","true"],["lines","full","matRipple","",3,"click",4,"ngFor","ngForOf"],["mode","indeterminate"],[1,"filterbar"],[3,"removed",4,"ngFor","ngForOf"],[3,"removed"],["matChipRemove",""],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","",3,"click"],["mat-header-row",""],["mat-row",""],["lines","full","matRipple","",3,"click"]],template:function(t,e){1&t&&(p.zc(0,$,1,0,"mat-progress-bar",0),p.zc(1,L,2,1,"mat-chip-list",1),p.Sb(2,"table",2),p.Qb(3,3),p.zc(4,Q,2,0,"th",4),p.zc(5,V,2,1,"td",5),p.Pb(),p.Qb(6,6),p.zc(7,E,2,0,"th",4),p.zc(8,T,2,1,"td",5),p.Pb(),p.Qb(9,7),p.zc(10,Z,2,0,"th",4),p.zc(11,K,2,1,"td",5),p.Pb(),p.Qb(12,8),p.zc(13,W,1,0,"th",9),p.zc(14,U,4,0,"td",5),p.Pb(),p.zc(15,X,1,0,"tr",10),p.zc(16,Y,1,0,"tr",11),p.Rb(),p.Sb(17,"mat-list",12),p.zc(18,tt,6,2,"mat-list-item",13),p.Rb()),2&t&&(p.kc("ngIf",e.loading),p.Ab(1),p.kc("ngIf",e.filter.appId.length>0),p.Ab(1),p.kc("dataSource",e.scopes),p.Ab(13),p.kc("matHeaderRowDef",e.columns)("matHeaderRowDefSticky",!0),p.Ab(1),p.kc("matRowDefColumns",e.columns),p.Ab(2),p.kc("ngForOf",e.scopes.data))},directives:[v.l,a.j,G.a,n.a,a.c,a.e,a.b,a.g,a.i,q.a,v.k,R.a,H.c,H.a,f.a,h.f,H.d,a.d,n.b,a.a,m.a,a.f,a.h,q.b,S.o],styles:[".mat-column-options[_ngcontent-%COMP%]{width:40px;padding-right:16px!important}mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:row}"]}),t})();var it=i("qFsG"),ot=i("ZRfb");function st(t,e){if(1&t&&(p.Sb(0,"mat-error"),p.Bc(1),p.Rb()),2&t){const t=p.ec();p.Ab(1),p.Dc(" ",t.errors.url," ")}}function rt(t,e){if(1&t&&(p.Sb(0,"mat-option",10),p.Bc(1),p.Rb()),2&t){const t=e.$implicit;p.kc("value",t.appId),p.Ab(1),p.Dc(" ",t.name," ")}}function nt(t,e){if(1&t&&(p.Sb(0,"mat-error"),p.Bc(1),p.Rb()),2&t){const t=p.ec();p.Ab(1),p.Dc(" ",t.errors.appId," ")}}function at(t,e){if(1&t&&(p.Sb(0,"mat-error"),p.Bc(1),p.Rb()),2&t){const t=p.ec();p.Ab(1),p.Dc(" ",t.errors.description," ")}}const ct=function(t){return{name:t}};let lt=(()=>{class t{constructor(t,e,i,o,s,r,n){this.apps=t,this.toast=e,this.route=i,this.config=o,this.router=s,this.buttons=r,this.service=n,this.form=new c.f({url:new c.c(null,[c.v.required]),appId:new c.c(null,[c.v.required]),description:new c.c(null,[c.v.required])}),this.errors={url:"",appId:"",description:""},this.filter=new c.f({apps:new c.c("",[c.v.required])}),this.subscriptions={}}get(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.get({filter:["url","role","appId","description"],scopeId:this.scopeId});if(t.ok){const e=new r(t.result);e.role>=2?(this.form.controls.url.setValue(e.url),this.form.controls.appId.setValue(e.appId),this.form.controls.description.setValue(e.description)):(this.toast.show("You have insufficient rights to edit this scope!"),this.router.navigate(["/scopes"]))}else this.toast.show(t.error.message),this.router.navigate(["/scopes"]);this.loading=!1}))}load(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.apps.list({filter:["role","name","icon","appId"]});t.ok?this.apps.data=t.result.map(t=>new s.a(t)).filter(t=>t.role>=2):(this.apps.data=[],this.toast.show(t.error.message)),this.loading=!1}))}submit(){return Object(o.a)(this,void 0,void 0,(function*(){this.loading=!0;let t=this.mode;"copy"==t&&(t="add",delete this.scopeId);const e=yield this.service[t]({url:this.form.value.url,appId:this.form.value.appId,scopeId:this.scopeId,description:this.form.value.description});e.ok?this.router.navigate(["/scopes"]):this.toast.show(e.error.message),this.loading=!1}))}ngOnInit(){this.buttons.hide("add"),this.buttons.show("close"),this.buttons.hide("filter"),this.buttons.hide("search"),this.subscriptions.close=this.buttons.close.click.subscribe(t=>{this.router.navigate(["/scopes"])}),this.subscriptions.loaded=this.config.loaded.subscribe(t=>Object(o.a)(this,void 0,void 0,(function*(){if(t){const t=this.route.snapshot.queryParams;this.mode=t.mode,this.scopeId=t.scopeId,"add"!=this.mode?(yield this.get(),yield this.load()):yield this.load()}})))}ngOnDestroy(){this.subscriptions.close.unsubscribe(),this.subscriptions.loaded.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(p.Mb(d.a),p.Mb(x.a),p.Mb(z.a),p.Mb(P.a),p.Mb(z.c),p.Mb(F.a),p.Mb(_.a))},t.\u0275cmp=p.Gb({type:t,selectors:[["scopes-editor-page"]],decls:24,vars:13,consts:[[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","url","name","url","placeholder","url","formControlName","url","required",""],[4,"ngIf"],["name","appId","placeholder","appId","formControlName","appId","required",""],[3,"formGroup"],["placeholderLabel","filter apps","noEntriesFoundLabel","no apps found","formControlName","apps"],[3,"value",4,"ngFor","ngForOf"],["matInput","","type","text","name","description","placeholder","description","formControlName","description","required",""],["type","button","mat-flat-button","","color","primary",3,"disabled","click"],[3,"value"]],template:function(t,e){1&t&&(p.Sb(0,"mat-content"),p.Sb(1,"form",0),p.ac("ngSubmit",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),p.Sb(2,"mat-form-field",1),p.Sb(3,"mat-label"),p.Bc(4," Url "),p.Rb(),p.Nb(5,"input",2),p.zc(6,st,2,1,"mat-error",3),p.Rb(),p.Sb(7,"mat-form-field",1),p.Sb(8,"mat-label"),p.Bc(9," App "),p.Rb(),p.Sb(10,"mat-select",4),p.Sb(11,"mat-option",5),p.Nb(12,"ngx-mat-select-search",6),p.Rb(),p.zc(13,rt,2,2,"mat-option",7),p.fc(14,"filterBy"),p.Rb(),p.zc(15,nt,2,1,"mat-error",3),p.Rb(),p.Sb(16,"mat-form-field",1),p.Sb(17,"mat-label"),p.Bc(18," Description "),p.Rb(),p.Nb(19,"input",8),p.zc(20,at,2,1,"mat-error",3),p.Rb(),p.Rb(),p.Rb(),p.Sb(21,"mat-footer"),p.Sb(22,"button",9),p.ac("click",(function(){return!e.loading&&!e.form.invalid&&e.submit()})),p.Bc(23),p.Rb(),p.Rb()),2&t&&(p.Ab(1),p.kc("formGroup",e.form),p.Ab(5),p.kc("ngIf",e.errors.url),p.Ab(5),p.kc("formGroup",e.filter),p.Ab(2),p.kc("ngForOf",p.hc(14,8,e.apps.data,p.mc(11,ct,e.filter.value.apps))),p.Ab(2),p.kc("ngIf",e.errors.appId),p.Ab(5),p.kc("ngIf",e.errors.description),p.Ab(2),p.kc("disabled",e.form.invalid),p.Ab(1),p.Dc(" ",e.mode," "))},directives:[g.a,c.w,c.p,c.g,h.c,h.f,it.a,c.b,c.o,c.e,c.u,v.l,I.a,S.k,w.a,v.k,ot.a,m.a,h.b],pipes:[y.a],styles:["[upload][_ngcontent-%COMP%]{width:100px;margin:auto;height:100px;border:2px solid transparent;display:flex;align-items:center;border-radius:100%;justify-content:center;background-color:#eee}[upload].required[_ngcontent-%COMP%]{border-color:red}mat-content[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px;margin-top:20px}mat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;max-width:400px}mat-footer[_ngcontent-%COMP%]{justify-content:center}"]}),t})();var pt=i("wZkO"),dt=i("R32p"),bt=i("gyTc"),ut=i("tVzd"),ht=i("J89Z"),mt=i("YUcS"),ft=i("H0Zp"),gt=i("p/0r");const vt=[{path:"",component:et},{path:"editor",component:lt}];let It=(()=>{class t{}return t.\u0275mod=p.Kb({type:t}),t.\u0275inj=p.Jb({factory:function(e){return new(e||t)},imports:[[c.i,v.c,dt.a,pt.a,f.b,q.c,bt.a,n.c,H.e,a.l,it.b,l.c,ht.a,S.p,I.b,m.b,ut.a,u.b,ft.a,mt.a,gt.a,h.e,c.t,R.b,w.b,z.g.forChild(vt)]]}),t})()}}]);