(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9PJG":function(t,r,n){"use strict";n.r(r),n.d(r,"SignInModule",(function(){return z}));var e=n("mrSG"),o=n("3Pt+"),i=n("fXoL"),s=n("9ZKQ"),a=n("tyNb"),c=n("IRyT"),m=n("dWDE"),b=n("4jEk"),u=n("kmnG"),l=n("qFsG"),p=n("ofXK"),f=n("bTqV"),d=n("Xa2L");function g(t,r){if(1&t&&(i.Rb(0,"mat-error"),i.zc(1),i.Qb()),2&t){const t=i.dc();i.Ab(1),i.Bc(" ",t.errors.email," ")}}function h(t,r){if(1&t&&(i.Rb(0,"mat-error"),i.zc(1),i.Qb()),2&t){const t=i.dc();i.Ab(1),i.Bc(" ",t.errors.password," ")}}function w(t,r){1&t&&i.Mb(0,"mat-progress-spinner",9)}let y=(()=>{class t{constructor(t,r,n,e){this.toast=t,this.router=r,this.service=n,this.formerror=e,this.form=new o.e({email:new o.c(null,[o.t.required]),password:new o.c(null,[o.t.required])}),this.errors={email:"",password:""},this.subscriptions={}}signup(){this.router.navigate(["/signup"],{queryParamsHandling:"preserve"})}submit(){return Object(e.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.signin({email:this.form.value.email,password:this.form.value.password});t.ok?(this.toast.show("Sign in successfull!"),this.router.navigate(["/apps"])):this.toast.show(t.error.message),this.loading=!1}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return t.\u0275fac=function(r){return new(r||t)(i.Lb(s.a),i.Lb(a.b),i.Lb(c.a),i.Lb(m.a))},t.\u0275cmp=i.Fb({type:t,selectors:[["signin-page"]],decls:22,vars:5,consts:[["src","./assets/icons/icon-512x512.png","alt","icon","width","100","height","100"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","name","password","placeholder","password","formControlName","password","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary",3,"click"],["mode","indeterminate","diameter","30"]],template:function(t,r){1&t&&(i.Rb(0,"mat-content"),i.Mb(1,"img",0),i.Rb(2,"h1"),i.zc(3," Auth "),i.Qb(),i.Rb(4,"h2"),i.zc(5," Sign In "),i.Qb(),i.Rb(6,"form",1),i.Zb("ngSubmit",(function(){return!r.form.invalid&&r.submit()})),i.Rb(7,"mat-form-field",2),i.Rb(8,"mat-label"),i.zc(9," Email "),i.Qb(),i.Mb(10,"input",3),i.yc(11,g,2,1,"mat-error",4),i.Qb(),i.Rb(12,"mat-form-field",2),i.Rb(13,"mat-label"),i.zc(14," Password "),i.Qb(),i.Mb(15,"input",5),i.yc(16,h,2,1,"mat-error",4),i.Qb(),i.Rb(17,"button",6),i.zc(18),i.yc(19,w,1,0,"mat-progress-spinner",7),i.Qb(),i.Rb(20,"button",8),i.Zb("click",(function(){return r.signup()})),i.zc(21," sign up "),i.Qb(),i.Qb(),i.Qb()),2&t&&(i.Ab(6),i.jc("formGroup",r.form),i.Ab(5),i.jc("ngIf",r.errors.email),i.Ab(5),i.jc("ngIf",r.errors.password),i.Ab(2),i.Bc(" ",r.loading?"":"sign in"," "),i.Ab(1),i.jc("ngIf",r.loading))},directives:[b.a,o.u,o.o,o.f,u.c,u.f,l.a,o.b,o.n,o.d,o.s,p.l,f.a,u.b,d.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px 0}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{max-width:400px}"]}),t})();var v=n("NFeN"),I=n("MutI"),Q=n("d3UM"),R=n("YUcS"),M=n("Qu3c"),j=n("/t3+"),C=n("H0Zp"),P=n("1jcm");const k=[{path:"",component:y}];let z=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(r){return new(r||t)},imports:[[o.h,p.c,v.b,I.c,l.b,f.b,Q.a,M.b,R.a,j.b,C.a,u.e,o.r,P.b,d.b,a.f.forChild(k)]]}),t})()},H0Zp:function(t,r,n){"use strict";n.d(r,"a",(function(){return i}));var e=n("ofXK"),o=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(r){return new(r||t)},imports:[[e.c]]}),t})()}}]);