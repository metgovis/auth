(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"4jEk":function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("fXoL");const o=["*"];let a=(()=>{class t{constructor(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-content"]],ngContentSelectors:o,decls:1,vars:0,template:function(t,e){1&t&&(n.jc(),n.ic(0))},styles:["mat-content{flex:1 auto;height:calc(100vh - 100px);overflow-y:auto}"],encapsulation:2}),t})()},H0Zp:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("ofXK"),o=r("fXoL");let a=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})()},"Tw+5":function(t,e,r){"use strict";r.r(e),r.d(e,"VerifyAccountModule",(function(){return T}));var n=r("mrSG"),o=r("AytR"),a=r("3Pt+"),s=r("fXoL"),i=r("xyCQ"),c=r("9ZKQ"),m=r("tyNb"),d=r("L7HW"),f=r("IRyT"),l=r("dWDE"),p=r("4jEk"),h=r("kmnG"),g=r("qFsG"),u=r("ofXK"),b=r("bTqV"),k=r("fASB"),_=r("Xa2L");function x(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Cc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Ec(" ",t.errors.email," ")}}function A(t,e){if(1&t&&(s.Sb(0,"mat-error"),s.Cc(1),s.Rb()),2&t){const t=s.ec();s.Ab(1),s.Ec(" ",t.errors.code," ")}}function y(t,e){1&t&&s.Nb(0,"mat-progress-spinner",9)}let S=(()=>{class t{constructor(t,e,r,n,o,s,i){this.apps=t,this.toast=e,this.route=r,this.config=n,this.router=o,this.service=s,this.formerror=i,this.app={},this.form=new a.f({code:new a.c(null,[a.v.required,a.v.min(1e5),a.v.max(999999),a.v.minLength(6),a.v.maxLength(6)]),email:new a.c(null,[a.v.email,a.v.required])}),this.errors={code:"",email:""},this.subscriptions={}}load(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.apps.load({filter:["url","icon","name"],appId:this.appId});this.loading=!1,t.ok?(this.app=t.result,this.form.invalid||this.submit()):this.toast.show("Issue loading app!")}))}submit(){return Object(n.a)(this,void 0,void 0,(function*(){this.loading=!0;const t=yield this.service.verify({code:this.form.value.code,email:this.form.value.email});if(t.ok){const t=this.route.snapshot.queryParams;Object.keys(this.app).includes("url")?this.router.navigate(["/allow-access"],{queryParams:{appId:t.appId,email:t.email,returl:this.app.url+"/authenticate"},replaceUrl:!0}):this.router.navigate(["/signin"],{queryParams:{email:t.email},replaceUrl:!0})}else this.toast.show(t.error.message);this.loading=!1}))}ngOnInit(){this.subscriptions.form=this.form.valueChanges.subscribe(t=>{this.errors=this.formerror.validateForm(this.form,this.errors,!0)}),this.subscriptions.loaded=this.config.loaded.subscribe(t=>{if(t){const t=this.route.snapshot.queryParams;null!=t.code&&this.form.controls.code.setValue(t.code),null!=t.email&&this.form.controls.email.setValue(t.email),null!=t.appId?(this.appId=t.appId,this.load()):this.app.icon=o.a.icon,this.form.invalid||this.submit()}})}ngOnDestroy(){this.subscriptions.form.unsubscribe(),this.subscriptions.loaded.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(i.a),s.Mb(c.a),s.Mb(m.a),s.Mb(d.a),s.Mb(m.c),s.Mb(f.a),s.Mb(l.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["verify-account-page"]],decls:24,vars:7,consts:[["alt","icon","width","100","height","100",3,"src"],[3,"formGroup","ngSubmit"],["appearance","outline"],["matInput","","type","email","name","email","placeholder","email","formControlName","email","required",""],[4,"ngIf"],["matInput","","min","100000","max","999999","minlength","6","maxlength","6","type","number","name","code","placeholder","code","formControlName","code","required",""],["type","submit","mat-flat-button","","color","primary"],["mode","indeterminate","diameter","30",4,"ngIf"],["type","button","mat-stroked-button","","color","primary","back-button",""],["mode","indeterminate","diameter","30"]],template:function(t,e){1&t&&(s.Sb(0,"mat-content"),s.Nb(1,"img",0),s.Sb(2,"h1"),s.Cc(3),s.Rb(),s.Sb(4,"h2"),s.Cc(5," Verify Account "),s.Rb(),s.Sb(6,"p"),s.Cc(7," You will recieve and email with your veification code. You must enter the code below or click the link in the email to verify your account! "),s.Rb(),s.Sb(8,"form",1),s.ac("ngSubmit",(function(){return!e.form.invalid&&e.submit()})),s.Sb(9,"mat-form-field",2),s.Sb(10,"mat-label"),s.Cc(11," Email "),s.Rb(),s.Nb(12,"input",3),s.Ac(13,x,2,1,"mat-error",4),s.Rb(),s.Sb(14,"mat-form-field",2),s.Sb(15,"mat-label"),s.Cc(16," Verification Code "),s.Rb(),s.Nb(17,"input",5),s.Ac(18,A,2,1,"mat-error",4),s.Rb(),s.Sb(19,"button",6),s.Cc(20),s.Ac(21,y,1,0,"mat-progress-spinner",7),s.Rb(),s.Sb(22,"button",8),s.Cc(23," back "),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Ab(1),s.kc("src",e.app.icon?e.app.icon:"./assets/icons/icon-512x512.png",s.tc),s.Ab(2),s.Ec(" ",e.app.name?e.app.name:"Auth"," "),s.Ab(5),s.kc("formGroup",e.form),s.Ab(5),s.kc("ngIf",e.errors.email),s.Ab(5),s.kc("ngIf",e.errors.code),s.Ab(2),s.Ec(" ",e.loading?"":"verify account"," "),s.Ab(1),s.kc("ngIf",e.loading))},directives:[p.a,a.w,a.p,a.g,h.c,h.g,g.a,a.b,a.o,a.e,a.u,u.l,a.s,a.k,a.j,b.a,k.a,h.b,_.a],styles:["mat-content[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}mat-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{margin:20px 0}mat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding:0 10px;font-size:12px;text-align:justify;line-height:16px}mat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#2196f3}mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], mat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:400px}mat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin-bottom:20px}"]}),t})();var v=r("NFeN"),w=r("MutI"),C=r("d3UM"),E=r("YUcS"),R=r("Qu3c"),M=r("/t3+"),L=r("H0Zp"),O=r("pBNG"),N=r("1jcm");const V=[{path:"",component:S}];let T=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[a.i,u.c,v.b,w.c,g.b,b.b,C.b,R.b,E.a,M.b,O.a,L.a,h.e,a.t,N.b,_.b,m.g.forChild(V)]]}),t})()},Xa2L:function(t,e,r){"use strict";r.d(e,"a",(function(){return b})),r.d(e,"b",(function(){return _})),r.d(e,"c",(function(){return k}));var n=r("fXoL"),o=r("ofXK"),a=r("FKr1"),s=r("8LU1"),i=r("nLfN"),c=r("R1ws");function m(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.xc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function d(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.xc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function f(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.xc("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}function l(t,e){if(1&t&&(n.dc(),n.Nb(0,"circle",3)),2&t){const t=n.ec();n.xc("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%"),n.Bb("r",t._getCircleRadius())}}const p=".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:currentColor}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10000ms cubic-bezier(0.87, 0.03, 0.33, 1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0deg)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}\n";class h{constructor(t){this._elementRef=t}}const g=Object(a.t)(h,"primary"),u=new n.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:100}}});let b=(()=>{class t extends g{constructor(e,r,n,o,a){super(e),this._elementRef=e,this._document=n,this._diameter=100,this._value=0,this._fallbackAnimation=!1,this.mode="determinate";const s=t._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),s.has(n.head)||s.set(n.head,new Set([100])),this._fallbackAnimation=r.EDGE||r.TRIDENT,this._noopAnimations="NoopAnimations"===o&&!!a&&!a._forceAnimations,a&&(a.diameter&&(this.diameter=a.diameter),a.strokeWidth&&(this.strokeWidth=a.strokeWidth))}get diameter(){return this._diameter}set diameter(t){this._diameter=Object(s.f)(t),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),!this._fallbackAnimation&&this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(t){this._strokeWidth=Object(s.f)(t)}get value(){return"determinate"===this.mode?this._value:0}set value(t){this._value=Math.max(0,Math.min(100,Object(s.f)(t)))}ngOnInit(){const t=this._elementRef.nativeElement;this._styleRoot=Object(i.c)(t)||this._document.head,this._attachStyleNode(),t.classList.add(`mat-progress-spinner-indeterminate${this._fallbackAnimation?"-fallback":""}-animation`)}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const t=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${t} ${t}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._getStrokeCircumference():null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_attachStyleNode(){const e=this._styleRoot,r=this._diameter,n=t._diameters;let o=n.get(e);if(!o||!o.has(r)){const t=this._document.createElement("style");t.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),t.textContent=this._getAnimationText(),e.appendChild(t),o||(o=new Set,n.set(e,o)),o.add(r)}}_getAnimationText(){const t=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*t).replace(/END_VALUE/g,""+.2*t).replace(/DIAMETER/g,""+this._spinnerAnimationLabel)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.l),n.Mb(i.a),n.Mb(o.d,8),n.Mb(c.a,8),n.Mb(u))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-progress-spinner"]],hostAttrs:["role","progressbar",1,"mat-progress-spinner"],hostVars:10,hostBindings:function(t,e){2&t&&(n.Bb("aria-valuemin","determinate"===e.mode?0:null)("aria-valuemax","determinate"===e.mode?100:null)("aria-valuenow","determinate"===e.mode?e.value:null)("mode",e.mode),n.xc("width",e.diameter,"px")("height",e.diameter,"px"),n.Eb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color",mode:"mode",diameter:"diameter",strokeWidth:"strokeWidth",value:"value"},exportAs:["matProgressSpinner"],features:[n.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(n.dc(),n.Sb(0,"svg",0),n.Ac(1,m,1,9,"circle",1),n.Ac(2,d,1,7,"circle",2),n.Rb()),2&t&&(n.xc("width",e.diameter,"px")("height",e.diameter,"px"),n.kc("ngSwitch","indeterminate"===e.mode),n.Bb("viewBox",e._getViewBox()),n.Ab(1),n.kc("ngSwitchCase",!0),n.Ab(1),n.kc("ngSwitchCase",!1))},directives:[o.n,o.o],styles:[p],encapsulation:2,changeDetection:0}),t._diameters=new WeakMap,t})(),k=(()=>{class t extends b{constructor(t,e,r,n,o){super(t,e,r,n,o),this.mode="indeterminate"}}return t.\u0275fac=function(e){return new(e||t)(n.Mb(n.l),n.Mb(i.a),n.Mb(o.d,8),n.Mb(c.a,8),n.Mb(u))},t.\u0275cmp=n.Gb({type:t,selectors:[["mat-spinner"]],hostAttrs:["role","progressbar","mode","indeterminate",1,"mat-spinner","mat-progress-spinner"],hostVars:6,hostBindings:function(t,e){2&t&&(n.xc("width",e.diameter,"px")("height",e.diameter,"px"),n.Eb("_mat-animation-noopable",e._noopAnimations))},inputs:{color:"color"},features:[n.xb],decls:3,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false",3,"ngSwitch"],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(t,e){1&t&&(n.dc(),n.Sb(0,"svg",0),n.Ac(1,f,1,9,"circle",1),n.Ac(2,l,1,7,"circle",2),n.Rb()),2&t&&(n.xc("width",e.diameter,"px")("height",e.diameter,"px"),n.kc("ngSwitch","indeterminate"===e.mode),n.Bb("viewBox",e._getViewBox()),n.Ab(1),n.kc("ngSwitchCase",!0),n.Ab(1),n.kc("ngSwitchCase",!1))},directives:[o.n,o.o],styles:[p],encapsulation:2,changeDetection:0}),t})(),_=(()=>{class t{}return t.\u0275mod=n.Kb({type:t}),t.\u0275inj=n.Jb({factory:function(e){return new(e||t)},imports:[[a.h,o.c],a.h]}),t})()}}]);