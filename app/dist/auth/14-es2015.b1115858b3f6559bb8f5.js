(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9PJG":function(r,t,e){"use strict";e.r(t),e.d(t,"SigninModule",(function(){return O}));var o=e("ofXK"),n=e("NFeN"),i=e("qFsG"),s=e("d3UM"),a=e("bTqV"),m=e("/t3+"),c=e("kmnG"),b=e("mrSG"),p=e("3Pt+"),u=e("fXoL"),l=e("9ZKQ"),d=e("tyNb"),f=e("IRyT"),g=e("dWDE"),h=e("Xa2L");function w(r,t){if(1&r&&(u.Ub(0,"mat-error"),u.yc(1),u.Tb()),2&r){const r=u.gc();u.Cb(1),u.Ac(" ",r.errors.email," ")}}function y(r,t){if(1&r&&(u.Ub(0,"mat-error"),u.yc(1),u.Tb()),2&r){const r=u.gc();u.Cb(1),u.Ac(" ",r.errors.password," ")}}function C(r,t){1&r&&u.Pb(0,"mat-progress-spinner",10)}const v=[{path:"",component:(()=>{class r{constructor(r,t,e,o){this.toast=r,this.router=t,this.service=e,this.formerror=o,this.form=new p.d({email:new p.b("",[p.p.email,p.p.required]),password:new p.b("",[p.p.required])}),this.errors={email:"",password:""},this.subscriptions={}}submit(){return Object(b.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable();const r=yield this.service.login({email:this.form.value.email,password:this.form.value.password});this.form.enable(),this.loading=!1,r.ok?this.router.navigate(["/apps"],{replaceUrl:!0}):this.toast.error(r.error.message)}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(r=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(u.Ob(l.a),u.Ob(d.b),u.Ob(f.a),u.Ob(g.a))},r.\u0275cmp=u.Ib({type:r,selectors:[["app-signin"]],decls:17,vars:5,consts:[[3,"formGroup","ngSubmit"],["src","./assets/icons/icon-512x512.png","alt","Auth Icon"],["appearance","outline"],["text-uppercase",""],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["matInput","","type","password","name","password","placeholder","password","formControlName","password","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary","routerLink","/signup"],["mode","indeterminate","diameter","30"]],template:function(r,t){1&r&&(u.Ub(0,"form",0),u.cc("ngSubmit",(function(){return!t.form.invalid&&!t.loading&&t.submit()})),u.Pb(1,"img",1),u.Ub(2,"mat-form-field",2),u.Ub(3,"mat-label",3),u.yc(4," Email "),u.Tb(),u.Pb(5,"input",4),u.xc(6,w,2,1,"mat-error",5),u.Tb(),u.Ub(7,"mat-form-field",2),u.Ub(8,"mat-label",3),u.yc(9," Password "),u.Tb(),u.Pb(10,"input",6),u.xc(11,y,2,1,"mat-error",5),u.Tb(),u.Ub(12,"button",7),u.yc(13),u.xc(14,C,1,0,"mat-progress-spinner",8),u.Tb(),u.Ub(15,"button",9),u.yc(16," sign up "),u.Tb(),u.Tb()),2&r&&(u.nc("formGroup",t.form),u.Cb(6),u.nc("ngIf",t.errors.email),u.Cb(5),u.nc("ngIf",t.errors.password),u.Cb(2),u.Ac(" ",t.loading?"":"sign in"," "),u.Cb(1),u.nc("ngIf",t.loading))},directives:[p.q,p.j,p.e,c.c,c.g,i.a,p.a,p.i,p.c,p.o,o.l,a.a,d.c,c.b,h.a],styles:["img[_ngcontent-%COMP%]{width:100px;display:block;margin:25px auto}form[_ngcontent-%COMP%]{width:400px;margin:auto}form[_ngcontent-%COMP%]   [mat-stroked-button][_ngcontent-%COMP%]{margin-top:20px}@media screen and (max-width:420px){form[_ngcontent-%COMP%]{width:calc(100% - 20px)}}"]}),r})()}];let x=(()=>{class r{}return r.\u0275mod=u.Mb({type:r}),r.\u0275inj=u.Lb({factory:function(t){return new(t||r)},imports:[[d.e.forChild(v)],d.e]}),r})(),O=(()=>{class r{}return r.\u0275mod=u.Mb({type:r}),r.\u0275inj=u.Lb({factory:function(t){return new(t||r)},imports:[[p.f,o.c,n.b,i.b,a.b,s.b,m.b,c.e,p.n,x,h.b]]}),r})()}}]);