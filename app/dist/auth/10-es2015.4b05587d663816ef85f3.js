(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"4+IK":function(r,t,e){"use strict";e.r(t),e.d(t,"AccountModule",(function(){return G}));var o=e("ofXK"),n=e("NFeN"),a=e("STbY"),s=e("qFsG"),i=e("d3UM"),c=e("bTqV"),u=e("/t3+"),m=e("Rxhi"),b=e("kmnG"),p=e("mrSG"),l=e("3Pt+"),f=e("fXoL"),d=e("d3yR"),h=e("9ZKQ"),g=e("IRyT"),w=e("O5Os"),v=e("tyNb"),y=e("bv9b");function T(r,t){1&r&&f.Pb(0,"mat-progress-bar",14)}function U(r,t){if(1&r&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&r){const r=f.gc();f.Cb(1),f.Ac(" ",r.errors.username," ")}}let C=(()=>{class r{constructor(r,t,e){this.menu=r,this.toast=t,this.service=e,this.form=new l.d({picture:new l.b("",[l.p.required]),username:new l.b("",[l.p.required])}),this.errors={picture:"",username:""},this.subscriptions={}}submit(){return Object(p.a)(this,void 0,void 0,(function*(){this.loading=!0;const r=yield this.service.update({picture:this.form.value.picture,userName:this.form.value.username});this.loading=!1,this.toast.success(r.ok?"account was updated!":"issue updating account!")}))}ngOnInit(){this.subscriptions.user=this.service.user.subscribe(r=>{this.form.controls.picture.setValue(r.picture),this.form.controls.username.setValue(r.userName)})}ngOnDestroy(){this.subscriptions.user.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(f.Ob(d.a),f.Ob(h.a),f.Ob(g.a))},r.\u0275cmp=f.Ib({type:r,selectors:[["app-account-page"]],decls:21,vars:5,consts:[["color","primary"],["mat-icon-button","",1,"menu-toggle",3,"click"],[1,"page-label","spacer"],["mode","indeterminate","color","accent",4,"ngIf"],[1,"page-body"],[3,"formGroup","ngSubmit"],["label","picture",3,"value","required"],["appearance","outline"],["text-uppercase",""],["matInput","","type","text","name","username","placeholder","username","formControlName","username","required",""],[4,"ngIf"],["type","submit","mat-flat-button","","color","primary"],["type","button","mat-flat-button","","color","accent","margin-top","","routerLink","change-password"],["type","button","mat-flat-button","","color","warn","margin-top","","routerLink","remove-account"],["mode","indeterminate","color","accent"]],template:function(r,t){1&r&&(f.Ub(0,"mat-toolbar",0),f.Ub(1,"button",1),f.cc("click",(function(){return t.menu.toggle()})),f.Ub(2,"mat-icon"),f.yc(3," menu "),f.Tb(),f.Tb(),f.Ub(4,"div",2),f.yc(5," account "),f.Tb(),f.Tb(),f.xc(6,T,1,0,"mat-progress-bar",3),f.Ub(7,"div",4),f.Ub(8,"form",5),f.cc("ngSubmit",(function(){return!t.form.invalid&&t.submit()})),f.Pb(9,"app-image-upload",6),f.Ub(10,"mat-form-field",7),f.Ub(11,"mat-label",8),f.yc(12," username "),f.Tb(),f.Pb(13,"input",9),f.xc(14,U,2,1,"mat-error",10),f.Tb(),f.Ub(15,"button",11),f.yc(16," update "),f.Tb(),f.Ub(17,"button",12),f.yc(18," change password "),f.Tb(),f.Ub(19,"button",13),f.yc(20," remove account "),f.Tb(),f.Tb(),f.Tb()),2&r&&(f.Cb(6),f.nc("ngIf",t.loading),f.Cb(2),f.nc("formGroup",t.form),f.Cb(1),f.nc("value",t.form.value.picture)("required",!t.form.value.picture||t.errors.picture),f.Cb(5),f.nc("ngIf",t.errors.username))},directives:[u.a,c.a,n.a,o.l,l.q,l.j,l.e,w.a,b.c,b.g,s.a,l.a,l.i,l.c,l.o,v.c,y.a,b.b],styles:["form[_ngcontent-%COMP%]{width:400px;margin:auto}@media screen and (max-width:420px){form[_ngcontent-%COMP%]{width:calc(100% - 20px)}}"]}),r})();var x=e("dWDE");function O(r,t){1&r&&f.Pb(0,"mat-progress-bar",11)}function I(r,t){if(1&r&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&r){const r=f.gc();f.Cb(1),f.Ac(" ",r.errors.password," ")}}function q(r,t){1&r&&f.Pb(0,"mat-progress-bar",12)}function P(r,t){if(1&r&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&r){const r=f.gc();f.Cb(1),f.Ac(" ",r.errors.old," ")}}function k(r,t){if(1&r&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&r){const r=f.gc();f.Cb(1),f.Ac(" ",r.errors.new," ")}}function M(r,t){if(1&r&&(f.Ub(0,"mat-error"),f.yc(1),f.Tb()),2&r){const r=f.gc();f.Cb(1),f.Cc(" ",r.errors.confirm," ",r.errors.confirm&&r.form.value.new!=r.form.value.confirm?" & ":""," ",r.form.value.new!=r.form.value.confirm?"Passwords do not match":""," ")}}const N=[{path:"",component:C},{path:"remove-account",component:(()=>{class r{constructor(r,t,e,o){this.toast=r,this.router=t,this.service=e,this.formerror=o,this.form=new l.d({password:new l.b("",[l.p.required])}),this.errors={password:""},this.subscriptions={}}submit(){return Object(p.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable();const r=yield this.service.removeaccount({password:this.form.value.password});this.form.enable(),this.loading=!1,r.ok?(this.service.logout(),this.toast.success("account was removed!")):this.toast.error("there was an issue removing account!")}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(r=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(f.Ob(h.a),f.Ob(v.b),f.Ob(g.a),f.Ob(x.a))},r.\u0275cmp=f.Ib({type:r,selectors:[["app-remove-account"]],decls:17,vars:3,consts:[["color","primary"],[1,"page-label","spacer"],["mat-icon-button","","routerLink","/account"],["mode","indeterminate","color","accent",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"notice"],["appearance","outline"],["text-uppercase",""],["matInput","","type","password","name","password","placeholder","password","formControlName","password","required",""],[4,"ngIf"],["type","submit","mat-flat-button","","color","warn"],["mode","indeterminate","color","accent"]],template:function(r,t){1&r&&(f.Ub(0,"mat-toolbar",0),f.Ub(1,"div",1),f.yc(2," remove account "),f.Tb(),f.Ub(3,"button",2),f.Ub(4,"mat-icon"),f.yc(5," close "),f.Tb(),f.Tb(),f.Tb(),f.xc(6,O,1,0,"mat-progress-bar",3),f.Ub(7,"form",4),f.cc("ngSubmit",(function(){return!t.form.invalid&&t.submit()})),f.Ub(8,"div",5),f.yc(9," The removal of your account will mean you can no longer sign in to the bitid platform. This does not remove the assets you have created in the time you have had an account with us and if you wish to signup again your assets will be available to you once again! "),f.Tb(),f.Ub(10,"mat-form-field",6),f.Ub(11,"mat-label",7),f.yc(12," password "),f.Tb(),f.Pb(13,"input",8),f.xc(14,I,2,1,"mat-error",9),f.Tb(),f.Ub(15,"button",10),f.yc(16," confirm & remove "),f.Tb(),f.Tb()),2&r&&(f.Cb(6),f.nc("ngIf",t.loading),f.Cb(1),f.nc("formGroup",t.form),f.Cb(7),f.nc("ngIf",t.errors.password))},directives:[u.a,c.a,v.c,n.a,o.l,l.q,l.j,l.e,b.c,b.g,s.a,l.a,l.i,l.c,l.o,y.a,b.b],styles:["form[_ngcontent-%COMP%]{width:400px;margin:auto}.notice[_ngcontent-%COMP%]{padding:0 5px;font-size:12px;text-align:justify;line-height:12px;border-left:4px solid #2196f3;margin-bottom:15px;text-transform:uppercase}@media screen and (max-width:420px){form[_ngcontent-%COMP%]{width:calc(100% - 20px)}}"]}),r})()},{path:"change-password",component:(()=>{class r{constructor(r,t,e,o){this.toast=r,this.router=t,this.service=e,this.formerror=o,this.form=new l.d({old:new l.b("",[l.p.required]),new:new l.b("",[l.p.required]),confirm:new l.b("",[l.p.required])}),this.errors={old:"",new:"",confirm:""},this.subscriptions={}}submit(){return Object(p.a)(this,void 0,void 0,(function*(){this.loading=!0,this.form.disable();const r=yield this.service.changepassword({confirm:this.form.value.confirm,passwordOld:this.form.value.old,passwordNew:this.form.value.new});this.form.enable(),this.loading=!1,r.ok?(this.router.navigate(["/account"]),this.toast.success("password was changed!")):this.toast.error("there was an issue changing password!")}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(r=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)})}ngOnDestroy(){this.subscriptions.form.unsubscribe()}}return r.\u0275fac=function(t){return new(t||r)(f.Ob(h.a),f.Ob(v.b),f.Ob(g.a),f.Ob(x.a))},r.\u0275cmp=f.Ib({type:r,selectors:[["app-change-password"]],decls:25,vars:5,consts:[["color","primary"],[1,"page-label","spacer"],["mat-icon-button","","routerLink","/account"],["mode","indeterminate","color","accent",4,"ngIf"],[3,"formGroup","ngSubmit"],["appearance","outline"],["text-uppercase",""],["matInput","","type","password","name","old","placeholder","old","formControlName","old","required",""],[4,"ngIf"],["matInput","","type","password","name","new","placeholder","new","formControlName","new","required",""],["matInput","","type","password","name","confirm","placeholder","confirm","formControlName","confirm","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","color","accent"]],template:function(r,t){1&r&&(f.Ub(0,"mat-toolbar",0),f.Ub(1,"div",1),f.yc(2," change password "),f.Tb(),f.Ub(3,"button",2),f.Ub(4,"mat-icon"),f.yc(5," close "),f.Tb(),f.Tb(),f.Tb(),f.xc(6,q,1,0,"mat-progress-bar",3),f.Ub(7,"form",4),f.cc("ngSubmit",(function(){return!t.form.invalid&&t.form.value.new==t.form.value.confirm&&t.submit()})),f.Ub(8,"mat-form-field",5),f.Ub(9,"mat-label",6),f.yc(10," old "),f.Tb(),f.Pb(11,"input",7),f.xc(12,P,2,1,"mat-error",8),f.Tb(),f.Ub(13,"mat-form-field",5),f.Ub(14,"mat-label",6),f.yc(15," new "),f.Tb(),f.Pb(16,"input",9),f.xc(17,k,2,1,"mat-error",8),f.Tb(),f.Ub(18,"mat-form-field",5),f.Ub(19,"mat-label",6),f.yc(20," confirm "),f.Tb(),f.Pb(21,"input",10),f.xc(22,M,2,3,"mat-error",8),f.Tb(),f.Ub(23,"button",11),f.yc(24," submit "),f.Tb(),f.Tb()),2&r&&(f.Cb(6),f.nc("ngIf",t.loading),f.Cb(1),f.nc("formGroup",t.form),f.Cb(5),f.nc("ngIf",t.errors.old),f.Cb(5),f.nc("ngIf",t.errors.new),f.Cb(5),f.nc("ngIf",t.errors.confirm||t.form.value.new!=t.form.value.confirm))},directives:[u.a,c.a,v.c,n.a,o.l,l.q,l.j,l.e,b.c,b.g,s.a,l.a,l.i,l.c,l.o,y.a,b.b],styles:["form[_ngcontent-%COMP%]{width:400px;margin:auto}@media screen and (max-width:420px){form[_ngcontent-%COMP%]{width:calc(100% - 20px)}}"]}),r})()}];let j=(()=>{class r{}return r.\u0275mod=f.Mb({type:r}),r.\u0275inj=f.Lb({factory:function(t){return new(t||r)},imports:[[v.e.forChild(N)],v.e]}),r})(),G=(()=>{class r{}return r.\u0275mod=f.Mb({type:r}),r.\u0275inj=f.Lb({factory:function(t){return new(t||r)},imports:[[l.f,o.c,n.b,a.a,s.b,i.b,c.b,u.b,m.a,b.e,l.n,j,y.b]]}),r})()}}]);