function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{UWHZ:function(e,r,t){"use strict";t.r(r),t.d(r,"VerifyModule",(function(){return O}));var n=t("ofXK"),i=t("NFeN"),o=t("qFsG"),a=t("d3UM"),c=t("bTqV"),s=t("/t3+"),m=t("kmnG"),u=t("mrSG"),b=t("3Pt+"),f=t("fXoL"),l=t("9ZKQ"),p=t("tyNb"),d=t("IRyT"),h=t("dWDE"),g=t("Xa2L");function y(e,r){if(1&e&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&e){var t=f.gc();f.Cb(1),f.Ac(" ",t.errors.email," ")}}function v(e,r){if(1&e&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&e){var t=f.gc();f.Cb(1),f.Ac(" ",t.errors.code," ")}}function C(e,r){1&e&&f.Pb(0,"mat-progress-spinner",10)}var w,k,x,P=[{path:"",component:(w=function(){function e(r,t,n,i){_classCallCheck(this,e),this.toast=r,this.router=t,this.service=n,this.formerror=i,this.form=new b.d({code:new b.b("",[b.p.required,b.p.min(1e5),b.p.max(999999),b.p.minLength(6),b.p.maxLength(6)]),email:new b.b("",[b.p.email,b.p.required])}),this.errors={code:"",email:""},this.subscriptions={}}return _createClass(e,[{key:"submit",value:function(){return Object(u.a)(this,void 0,void 0,regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,this.form.disable(),e.next=3,this.service.verify({code:this.form.value.code,email:this.form.value.email});case 3:r=e.sent,this.form.enable(),this.loading=!1,r.ok?this.router.navigate(["/signin"],{replaceUrl:!0}):this.toast.error(r.error.message);case 5:case"end":return e.stop()}}),e,this)})))}},{key:"ngOnInit",value:function(){var e=this;this.subscriptions.form=this.form.valueChanges.subscribe((function(r){e.errors=e.formerror.validateForm(e.form,e.errors,!0)}))}},{key:"ngOnDestroy",value:function(){this.subscriptions.form.unsubscribe()}}]),e}(),w.\u0275fac=function(e){return new(e||w)(f.Ob(l.a),f.Ob(p.b),f.Ob(d.a),f.Ob(h.a))},w.\u0275cmp=f.Ib({type:w,selectors:[["app-verify"]],decls:19,vars:5,consts:[[3,"formGroup","ngSubmit"],["src","./assets/icons/icon-512x512.png","alt","Auth Icon"],["appearance","outline"],["text-uppercase",""],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","number","name","code","placeholder","code","formControlName","code","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary","routerLink","/signin"],["mode","indeterminate","diameter","30"]],template:function(e,r){1&e&&(f.Ub(0,"form",0),f.cc("ngSubmit",(function(){return!r.form.invalid&&!r.loading&&r.submit()})),f.Pb(1,"img",1),f.Ub(2,"mat-form-field",2),f.Ub(3,"mat-label",3),f.yc(4," Email "),f.Tb(),f.Pb(5,"input",4),f.xc(6,y,2,1,"mat-error",5),f.Tb(),f.Ub(7,"mat-form-field",2),f.Ub(8,"mat-label",3),f.yc(9," Verification Code "),f.Tb(),f.Pb(10,"input",6),f.Ub(11,"mat-hint"),f.yc(12," Check your email for code! "),f.Tb(),f.xc(13,v,2,1,"mat-error",5),f.Tb(),f.Ub(14,"button",7),f.yc(15),f.xc(16,C,1,0,"mat-progress-spinner",8),f.Tb(),f.Ub(17,"button",9),f.yc(18," sign in "),f.Tb(),f.Tb()),2&e&&(f.nc("formGroup",r.form),f.Cb(6),f.nc("ngIf",r.errors.email),f.Cb(7),f.nc("ngIf",r.errors.code),f.Cb(2),f.Ac(" ",r.loading?"":"verify"," "),f.Cb(1),f.nc("ngIf",r.loading))},directives:[b.q,b.j,b.e,m.c,m.g,o.a,b.a,b.i,b.c,b.o,n.l,b.m,m.f,c.a,p.c,m.b,g.a],styles:["img[_ngcontent-%COMP%]{width:100px;display:block;margin:25px auto}form[_ngcontent-%COMP%]{width:400px;margin:auto}form[_ngcontent-%COMP%]   [mat-stroked-button][_ngcontent-%COMP%]{margin-top:20px}@media screen and (max-width:420px){form[_ngcontent-%COMP%]{width:calc(100% - 20px)}}"]}),w)}],_=((x=function e(){_classCallCheck(this,e)}).\u0275mod=f.Mb({type:x}),x.\u0275inj=f.Lb({factory:function(e){return new(e||x)},imports:[[p.e.forChild(P)],p.e]}),x),O=((k=function e(){_classCallCheck(this,e)}).\u0275mod=f.Mb({type:k}),k.\u0275inj=f.Lb({factory:function(e){return new(e||k)},imports:[[b.f,n.c,i.b,o.b,c.b,a.b,s.b,m.e,b.n,_,g.b]]}),k)}}]);