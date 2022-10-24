(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-request-access-request-access-module"],{

/***/ "Gwy7":
/*!***************************************************************!*\
  !*** ./src/app/pages/request-access/request-access.module.ts ***!
  \***************************************************************/
/*! exports provided: RequestAccessModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAccessModule", function() { return RequestAccessModule; });
/* harmony import */ var _request_access_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request-access.page */ "lPGO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* --- PAES --- */

/* --- MODULES --- */














const routes = [
    {
        path: '',
        component: _request_access_page__WEBPACK_IMPORTED_MODULE_0__["RequestAccessPage"]
    }
];
class RequestAccessModule {
}
RequestAccessModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RequestAccessModule });
RequestAccessModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function RequestAccessModule_Factory(t) { return new (t || RequestAccessModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_8__["MatContentModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RequestAccessModule, { declarations: [_request_access_page__WEBPACK_IMPORTED_MODULE_0__["RequestAccessPage"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_8__["MatContentModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RequestAccessModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                    src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_8__["MatContentModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatProgressSpinnerModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forChild(routes)
                ],
                declarations: [
                    _request_access_page__WEBPACK_IMPORTED_MODULE_0__["RequestAccessPage"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ovx2":
/*!********************************!*\
  !*** ./src/app/classes/app.ts ***!
  \********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "UxUN");

class App {
    constructor(args) {
        this.role = 0;
        this.users = [];
        this.theme = {};
        this.google = {};
        this.scopes = [];
        this.domains = [];
        if (typeof (args) != 'undefined' && args !== null) {
            if (Array.isArray(args.users)) {
                this.users = args.users.map(user => new _user__WEBPACK_IMPORTED_MODULE_0__["User"](user));
            }
            if (Array.isArray(args.scopes)) {
                this.scopes = args.scopes;
            }
            if (Array.isArray(args.domains)) {
                this.domains = args.domains;
            }
            if (typeof (args.theme) != 'undefined' && args.theme !== null) {
                if (typeof (args.theme.color) != 'undefined' && args.theme.color !== null) {
                    this.theme.color = args.theme.color;
                }
                if (typeof (args.theme.background) != 'undefined' && args.theme.background !== null) {
                    this.theme.background = args.theme.background;
                }
            }
            if (typeof (args.google) != 'undefined' && args.google !== null) {
                if (typeof (args.google.database) != 'undefined' && args.google.database !== null) {
                    this.google.database = args.google.database;
                }
                if (typeof (args.google.credentials) != 'undefined' && args.google.credentials !== null) {
                    this.google.credentials = args.google.credentials;
                }
            }
            if (typeof (args.url) != 'undefined' && args.url !== null) {
                this.url = args.url;
            }
            if (typeof (args.role) != 'undefined' && args.role !== null) {
                this.role = args.role;
            }
            if (typeof (args.icon) != 'undefined' && args.icon !== null) {
                this.icon = args.icon;
            }
            if (typeof (args.name) != 'undefined' && args.name !== null) {
                this.name = args.name;
            }
            if (typeof (args.appId) != 'undefined' && args.appId !== null) {
                this.appId = args.appId;
            }
            if (typeof (args.expiry) != 'undefined' && args.expiry !== null) {
                this.expiry = args.expiry;
            }
            if (typeof (args.private) != 'undefined' && args.private !== null) {
                this.private = args.private;
            }
            if (typeof (args.secret) != 'undefined' && args.secret !== null) {
                this.secret = args.secret;
            }
            if (typeof (args.organizationOnly) != 'undefined' && args.organizationOnly !== null) {
                this.organizationOnly = args.organizationOnly;
            }
        }
    }
}


/***/ }),

/***/ "UxUN":
/*!*********************************!*\
  !*** ./src/app/classes/user.ts ***!
  \*********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(args) {
        if (typeof (args.role) != 'undefined' && args.role !== null) {
            this.role = args.role;
        }
        if (typeof (args.email) != 'undefined' && args.email !== null) {
            this.email = args.email;
        }
        if (typeof (args.status) != 'undefined' && args.status !== null) {
            this.status = args.status;
        }
    }
}


/***/ }),

/***/ "lPGO":
/*!*************************************************************!*\
  !*** ./src/app/pages/request-access/request-access.page.ts ***!
  \*************************************************************/
/*! exports provided: RequestAccessPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestAccessPage", function() { return RequestAccessPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/app */ "Ovx2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/config/config.service */ "L7HW");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/buttons/buttons.service */ "BhS5");
/* harmony import */ var src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/apps/apps.service */ "xyCQ");
/* harmony import */ var src_app_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");



















function RequestAccessPage_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.app.icon, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function RequestAccessPage_h1_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.requested ? "Access Requested To" : "Requesting Access To", " ", ctx_r1.app.name, " ");
} }
function RequestAccessPage_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " We will let you know when you have been given access! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RequestAccessPage_form_4_mat_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.errors.email, " ");
} }
function RequestAccessPage_form_4_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.errors.password, " ");
} }
function RequestAccessPage_form_4_mat_progress_spinner_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "mat-progress-spinner", 11);
} }
function RequestAccessPage_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RequestAccessPage_form_4_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return !ctx_r7.form.invalid && !ctx_r7.loading && ctx_r7.submit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, RequestAccessPage_form_4_mat_error_5_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, RequestAccessPage_form_4_mat_error_10_Template, 2, 1, "mat-error", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Forgot Password? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RequestAccessPage_form_4_mat_progress_spinner_15_Template, 1, 0, "mat-progress-spinner", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r3.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.errors.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r3.loading ? "" : "request access", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.loading);
} }
class RequestAccessPage {
    constructor(route, toast, config, formerror, buttons, service, localstorage) {
        this.route = route;
        this.toast = toast;
        this.config = config;
        this.formerror = formerror;
        this.buttons = buttons;
        this.service = service;
        this.localstorage = localstorage;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])
        });
        this.errors = {
            email: '',
            password: ''
        };
        this.app = new src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__["App"]();
        this.observers = {};
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.load({
                filter: [
                    'icon',
                    'name',
                    'scopes'
                ],
                appId: this.appId
            });
            this.loading = false;
            if (response.ok) {
                this.app = response.result;
            }
            else {
                this.toast.show('Issue loading app!');
            }
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            this.form.disable();
            this.localstorage.set('email', this.form.value.email);
            const response = yield this.service.requestaccess({
                appId: this.appId,
                email: this.form.value.email,
                password: this.form.value.password
            });
            this.form.enable();
            this.loading = false;
            if (response.ok) {
                this.requested = true;
            }
            else {
                this.requested = false;
                this.toast.show(response.error.message);
            }
        });
    }
    ngOnInit() {
        this.buttons.hide('add');
        this.buttons.hide('close');
        this.buttons.hide('filter');
        this.buttons.hide('search');
        this.observers.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
        this.observers.config = this.config.loaded.subscribe(loaded => {
            if (loaded) {
                const params = this.route.snapshot.queryParams;
                this.appId = params.appId;
                if (typeof (params.email) != 'undefined' && params.email !== null) {
                    this.form.controls.email.setValue(params.email);
                }
                this.load();
            }
        });
    }
    ngOnDestroy() {
        this.observers.form.unsubscribe();
        this.observers.config.unsubscribe();
    }
}
RequestAccessPage.ɵfac = function RequestAccessPage_Factory(t) { return new (t || RequestAccessPage)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_7__["FormErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__["ButtonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_9__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalstorageService"])); };
RequestAccessPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RequestAccessPage, selectors: [["request-access-page"]], decls: 5, vars: 4, consts: [["alt", "icon", "width", "100", "height", "100", 3, "src", 4, "ngIf"], [4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["alt", "icon", "width", "100", "height", "100", 3, "src"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["matInput", "", "type", "email", "name", "email", "placeholder", "email", "formControlName", "email", "required", ""], ["matInput", "", "type", "password", "name", "password", "placeholder", "password", "formControlName", "password", "required", ""], ["routerLink", "/forgot-password", "queryParamsHandling", "preserve", 1, "forgot-password"], ["type", "submit", "mat-flat-button", "", "color", "primary"], ["mode", "indeterminate", "diameter", "30", 4, "ngIf"], ["mode", "indeterminate", "diameter", "30"]], template: function RequestAccessPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RequestAccessPage_img_1_Template, 1, 1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, RequestAccessPage_h1_2_Template, 2, 2, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, RequestAccessPage_p_3_Template, 2, 0, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, RequestAccessPage_form_4_Template, 16, 5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.app.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.app.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.requested);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.requested);
    } }, directives: [_libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__["MatContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_14__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinner"]], styles: ["mat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\nmat-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 20px 0px;\n}\nmat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n}\nmat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.forgot-password[_ngcontent-%COMP%] {\n  color: #2196F3;\n  cursor: pointer;\n  margin-left: auto;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVxdWVzdC1hY2Nlc3MvcmVxdWVzdC1hY2Nlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFDSjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksZ0JBQUE7QUFFUjtBQUFJO0VBQ0ksbUJBQUE7QUFFUjtBQUNBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXF1ZXN0LWFjY2Vzcy9yZXF1ZXN0LWFjY2Vzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAwcHg7XHJcbiAgICB9XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gICAgY29sb3I6ICMyMTk2RjM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](RequestAccessPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'request-access-page',
                styleUrls: ['./request-access.page.scss'],
                templateUrl: './request-access.page.html'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"] }, { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_7__["FormErrorService"] }, { type: src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__["ButtonsService"] }, { type: src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_9__["AppsService"] }, { type: src_app_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_10__["LocalstorageService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-request-access-request-access-module.js.map