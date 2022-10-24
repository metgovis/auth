(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scopes-scopes-module"],{

/***/ "4dGL":
/*!***********************************************!*\
  !*** ./src/app/pages/scopes/scopes.module.ts ***!
  \***********************************************/
/*! exports provided: ScopesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesModule", function() { return ScopesModule; });
/* harmony import */ var _scopes_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scopes.page */ "FoxV");
/* harmony import */ var _editor_editor_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.page */ "9NTL");
/* harmony import */ var _filter_filter_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter/filter.dialog */ "O5eP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/libs/confirm/confirm.module */ "R32p");
/* harmony import */ var src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/libs/options/options.module */ "gyTc");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/libs/mat-footer/mat-footer.module */ "tVzd");
/* harmony import */ var src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/pipes/order/order.module */ "J89Z");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/libs/mat-content/mat-content.module */ "H0Zp");
/* harmony import */ var src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/pipes/filter/filter.module */ "p/0r");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* --- PAGES --- */



/* --- MODULES --- */




























const routes = [
    {
        path: '',
        component: _scopes_page__WEBPACK_IMPORTED_MODULE_0__["ScopesPage"]
    },
    {
        path: 'editor',
        component: _editor_editor_page__WEBPACK_IMPORTED_MODULE_1__["ScopesEditorPage"]
    }
];
class ScopesModule {
}
ScopesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ScopesModule });
ScopesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ factory: function ScopesModule_Factory(t) { return new (t || ScopesModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_9__["ConfirmModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
            src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_10__["OptionsModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
            src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderPipeModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
            src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_17__["MatFooterModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
            src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_22__["MatContentModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
            src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_23__["FilterPipeModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
            ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_27__["NgxMatSelectSearchModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ScopesModule, { declarations: [_scopes_page__WEBPACK_IMPORTED_MODULE_0__["ScopesPage"],
        _editor_editor_page__WEBPACK_IMPORTED_MODULE_1__["ScopesEditorPage"],
        _filter_filter_dialog__WEBPACK_IMPORTED_MODULE_2__["ScopesFilterDialog"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
        src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_9__["ConfirmModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
        src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_10__["OptionsModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
        src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderPipeModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
        src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_17__["MatFooterModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
        src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_22__["MatContentModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
        src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_23__["FilterPipeModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
        ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_27__["NgxMatSelectSearchModule"], _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ScopesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                    src_app_libs_confirm_confirm_module__WEBPACK_IMPORTED_MODULE_9__["ConfirmModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                    src_app_libs_options_options_module__WEBPACK_IMPORTED_MODULE_10__["OptionsModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_12__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"],
                    src_app_pipes_order_order_module__WEBPACK_IMPORTED_MODULE_18__["OrderPipeModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                    src_app_libs_mat_footer_mat_footer_module__WEBPACK_IMPORTED_MODULE_17__["MatFooterModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_20__["MatToolbarModule"],
                    src_app_libs_mat_content_mat_content_module__WEBPACK_IMPORTED_MODULE_22__["MatContentModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_21__["FlexLayoutModule"],
                    src_app_pipes_filter_filter_module__WEBPACK_IMPORTED_MODULE_23__["FilterPipeModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                    ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_27__["NgxMatSelectSearchModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_25__["RouterModule"].forChild(routes)
                ],
                declarations: [
                    _scopes_page__WEBPACK_IMPORTED_MODULE_0__["ScopesPage"],
                    _editor_editor_page__WEBPACK_IMPORTED_MODULE_1__["ScopesEditorPage"],
                    _filter_filter_dialog__WEBPACK_IMPORTED_MODULE_2__["ScopesFilterDialog"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9NTL":
/*!****************************************************!*\
  !*** ./src/app/pages/scopes/editor/editor.page.ts ***!
  \****************************************************/
/*! exports provided: ScopesEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesEditorPage", function() { return ScopesEditorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/app */ "Ovx2");
/* harmony import */ var src_app_classes_scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/scope */ "ONon");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apps/apps.service */ "xyCQ");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/config/config.service */ "L7HW");
/* harmony import */ var src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/buttons/buttons.service */ "BhS5");
/* harmony import */ var src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/scopes/scopes.service */ "a6VE");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../libs/mat-footer/mat-footer */ "ZRfb");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../pipes/filter/filter.pipe */ "AbOq");























function ScopesEditorPage_mat_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", app_r4.appId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", app_r4.name, " ");
} }
function ScopesEditorPage_mat_error_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.errors.appId, " ");
} }
function ScopesEditorPage_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.errors.url, " ");
} }
function ScopesEditorPage_mat_error_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r3.errors.description, " ");
} }
const _c0 = function (a0) { return { "name": a0 }; };
class ScopesEditorPage {
    constructor(apps, toast, route, config, router, buttons, service) {
        this.apps = apps;
        this.toast = toast;
        this.route = route;
        this.config = config;
        this.router = router;
        this.buttons = buttons;
        this.service = service;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            url: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            appId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.errors = {
            url: '',
            appId: '',
            description: ''
        };
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            apps: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
        });
        this.subscriptions = {};
    }
    get() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.get({
                filter: [
                    'url',
                    'role',
                    'appId',
                    'description'
                ],
                scopeId: this.scopeId
            });
            if (response.ok) {
                const scope = new src_app_classes_scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](response.result);
                if (scope.role >= 2) {
                    this.form.controls.url.setValue(scope.url);
                    this.form.controls.appId.setValue(scope.appId);
                    this.form.controls.description.setValue(scope.description);
                }
                else {
                    this.toast.show('You have insufficient rights to edit this scope!');
                    this.router.navigate(['/scopes']);
                }
            }
            else {
                this.toast.show(response.error.message);
                this.router.navigate(['/scopes']);
            }
            this.loading = false;
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.apps.list({
                filter: [
                    'role',
                    'name',
                    'icon',
                    'appId'
                ]
            });
            if (response.ok) {
                this.apps.data = response.result.map(app => new src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__["App"](app)).filter(app => app.role >= 2);
            }
            else {
                this.apps.data = [];
                this.toast.show(response.error.message);
            }
            this.loading = false;
        });
    }
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            let mode = this.mode;
            if (mode == 'copy') {
                mode = 'add';
                delete this.scopeId;
            }
            const response = yield this.service[mode]({
                url: this.form.value.url,
                appId: this.form.value.appId,
                scopeId: this.scopeId,
                description: this.form.value.description,
            });
            if (response.ok) {
                this.router.navigate(['/scopes']);
            }
            else {
                this.toast.show(response.error.message);
            }
            this.loading = false;
        });
    }
    ngOnInit() {
        this.buttons.hide('add');
        this.buttons.show('close');
        this.buttons.hide('filter');
        this.buttons.hide('search');
        this.subscriptions.close = this.buttons.close.click.subscribe(event => {
            this.router.navigate(['/scopes']);
        });
        this.subscriptions.loaded = this.config.loaded.subscribe((loaded) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loaded) {
                const params = this.route.snapshot.queryParams;
                this.mode = params.mode;
                this.scopeId = params.scopeId;
                if (this.mode != 'add') {
                    yield this.get();
                    yield this.load();
                    this.form.controls.appId.disable();
                }
                else {
                    yield this.load();
                    this.form.controls.appId.enable();
                }
            }
        }));
    }
    ngOnDestroy() {
        this.subscriptions.close.unsubscribe();
        this.subscriptions.loaded.unsubscribe();
    }
}
ScopesEditorPage.ɵfac = function ScopesEditorPage_Factory(t) { return new (t || ScopesEditorPage)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_9__["ButtonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_10__["ScopesService"])); };
ScopesEditorPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ScopesEditorPage, selectors: [["scopes-editor-page"]], decls: 24, vars: 13, consts: [[3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["name", "appId", "placeholder", "appId", "formControlName", "appId", "required", ""], [3, "formGroup"], ["placeholderLabel", "filter apps", "noEntriesFoundLabel", "no apps found", "formControlName", "apps"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "type", "url", "name", "url", "placeholder", "url", "formControlName", "url", "required", ""], ["matInput", "", "type", "text", "name", "description", "placeholder", "description", "formControlName", "description", "required", ""], ["type", "button", "mat-flat-button", "", "color", "primary", 3, "disabled", "click"], [3, "value"]], template: function ScopesEditorPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function ScopesEditorPage_Template_form_ngSubmit_1_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " App ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "ngx-mat-select-search", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, ScopesEditorPage_mat_option_8_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "filterBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ScopesEditorPage_mat_error_10_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, " Url ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ScopesEditorPage_mat_error_15_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Description ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ScopesEditorPage_mat_error_20_Template, 2, 1, "mat-error", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mat-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ScopesEditorPage_Template_button_click_22_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](9, 8, ctx.apps.data, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](11, _c0, ctx.filter.value.apps)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errors.appId);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errors.url);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errors.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.mode, " ");
    } }, directives: [_libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__["MatContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _libs_mat_footer_mat_footer__WEBPACK_IMPORTED_MODULE_18__["MatFooter"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"]], pipes: [_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_20__["FilterPipe"]], styles: ["[upload][_ngcontent-%COMP%] {\n  width: 100px;\n  margin: auto;\n  height: 100px;\n  border: 2px solid transparent;\n  display: flex;\n  align-items: center;\n  border-radius: 100%;\n  justify-content: center;\n  background-color: #EEEEEE;\n}\n\n[upload].required[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\nmat-footer[_ngcontent-%COMP%], mat-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n\nmat-footer[_ngcontent-%COMP%]   form[_ngcontent-%COMP%], mat-content[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin-top: 20px;\n}\n\nmat-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], mat-content[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n}\n\nmat-footer[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NvcGVzL2VkaXRvci9lZGl0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7O0VBRUksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFHSjs7QUFGSTs7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBS1I7O0FBSEk7O0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0FBTVI7O0FBSEE7RUFDSSx1QkFBQTtBQU1KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2NvcGVzL2VkaXRvci9lZGl0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW3VwbG9hZF0ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFRUVFO1xyXG59XHJcblt1cGxvYWRdLnJlcXVpcmVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcbm1hdC1mb290ZXIsXHJcbm1hdC1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZvcm0ge1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxufVxyXG5tYXQtZm9vdGVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ScopesEditorPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'scopes-editor-page',
                styleUrls: ['./editor.page.scss'],
                templateUrl: './editor.page.html'
            }]
    }], function () { return [{ type: src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__["AppsService"] }, { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_6__["ToastService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_8__["ConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_9__["ButtonsService"] }, { type: src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_10__["ScopesService"] }]; }, null); })();


/***/ }),

/***/ "FoxV":
/*!*********************************************!*\
  !*** ./src/app/pages/scopes/scopes.page.ts ***!
  \*********************************************/
/*! exports provided: ScopesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesPage", function() { return ScopesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/app */ "Ovx2");
/* harmony import */ var src_app_classes_scope__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/classes/scope */ "ONon");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _filter_filter_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter.dialog */ "O5eP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/apps/apps.service */ "xyCQ");
/* harmony import */ var src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/libs/options/options.service */ "u0tM");
/* harmony import */ var src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/config/config.service */ "L7HW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_libs_confirm_confirm_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/libs/confirm/confirm.service */ "swrf");
/* harmony import */ var src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/services/filters/filters.service */ "bS1C");
/* harmony import */ var src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/services/buttons/buttons.service */ "BhS5");
/* harmony import */ var src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/services/scopes/scopes.service */ "a6VE");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





























function ScopesPage_mat_progress_bar_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "mat-progress-bar", 14);
} }
function ScopesPage_mat_chip_list_1_mat_chip_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("removed", function ScopesPage_mat_chip_list_1_mat_chip_1_Template_mat_chip_removed_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const id_r14 = ctx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r15.unfilter("appId", id_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " apps ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, " cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r13.describe(ctx_r13.apps.data, "appId", id_r14), " ");
} }
function ScopesPage_mat_chip_list_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-chip-list", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ScopesPage_mat_chip_list_1_mat_chip_1_Template, 7, 1, "mat-chip", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.filter.appId);
} }
function ScopesPage_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " App ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ScopesPage_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r17.app.name, " ");
} }
function ScopesPage_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Scope ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ScopesPage_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r18.url, " ");
} }
function ScopesPage_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Description ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ScopesPage_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r19.description, " ");
} }
function ScopesPage_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "th", 21);
} }
function ScopesPage_td_14_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScopesPage_td_14_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r22); const element_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.options(element_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " more_vert ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function ScopesPage_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 23);
} }
function ScopesPage_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 24);
} }
function ScopesPage_mat_list_item_18_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-list-item", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ScopesPage_mat_list_item_18_Template_mat_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r26); const element_r24 = ctx.$implicit; const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.options(element_r24); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24.app.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r24.url, " ");
} }
class ScopesPage {
    constructor(apps, toast, dialog, sheet, config, router, confirm, filters, buttons, service) {
        this.apps = apps;
        this.toast = toast;
        this.dialog = dialog;
        this.sheet = sheet;
        this.config = config;
        this.router = router;
        this.confirm = confirm;
        this.filters = filters;
        this.buttons = buttons;
        this.service = service;
        this.filter = this.filters.get({
            appId: []
        });
        this.scopes = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"]();
        this.columns = ['app.name', 'url', 'description', 'options'];
        this.subscriptions = {};
    }
    list() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const response = yield this.service.list({
                filter: [
                    'url',
                    'app',
                    'role',
                    'appId',
                    'roles',
                    'scopeId',
                    'description'
                ],
                appId: this.filter.appId
            });
            if (response.ok) {
                this.scopes.data = response.result.map(scope => new src_app_classes_scope__WEBPACK_IMPORTED_MODULE_2__["Scope"](scope));
            }
            else {
                this.scopes.data = [];
            }
            this.loading = false;
        });
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const apps = yield this.apps.list({
                filter: [
                    'name',
                    'appId'
                ]
            });
            if (apps.ok) {
                this.apps.data = apps.result.map(o => new src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__["App"](o));
            }
            else {
                this.apps.data = [];
            }
            this.loading = false;
        });
    }
    unfilter(key, value) {
        this.filter[key] = this.filter[key].filter(o => o != value);
        this.filters.update(this.filter);
        this.list();
    }
    options(scope) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.sheet.show({
                role: scope.role,
                title: scope.url,
                options: [
                    {
                        icon: 'edit',
                        title: 'Edit',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.router.navigate(['/scopes', 'editor'], {
                                queryParams: {
                                    mode: 'update',
                                    scopeId: scope.scopeId
                                }
                            });
                        }),
                        disabled: [0, 1]
                    },
                    {
                        icon: 'content_copy',
                        title: 'Copy',
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.router.navigate(['/scopes', 'editor'], {
                                queryParams: {
                                    mode: 'copy',
                                    scopeId: scope.scopeId
                                }
                            });
                        }),
                        disabled: [0, 1]
                    },
                    {
                        icon: 'delete',
                        title: 'Delete',
                        danger: true,
                        handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            this.confirm.show({
                                message: 'Are you sure you want to delete ' + scope.url + '?',
                                handler: () => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                                    this.loading = true;
                                    const response = yield this.service.delete({
                                        scopeId: scope.scopeId
                                    });
                                    if (response.ok) {
                                        for (let i = 0; i < this.scopes.data.length; i++) {
                                            if (this.scopes.data[i].scopeId == scope.scopeId) {
                                                this.scopes.data.splice(i, 1);
                                                this.toast.show('Scope was removed!');
                                                break;
                                            }
                                        }
                                        this.scopes.data = JSON.parse(JSON.stringify(this.scopes.data));
                                    }
                                    else {
                                        this.toast.show(response.error.message);
                                    }
                                    this.loading = false;
                                })
                            });
                        }),
                        disabled: [0, 1, 2, 3, 4]
                    }
                ]
            });
        });
    }
    describe(array, key, id) {
        let result = '-';
        array.map(o => {
            if (o[key] == id) {
                result = o.name;
            }
        });
        return result;
    }
    ngOnInit() {
        this.buttons.show('add');
        this.buttons.hide('close');
        this.buttons.show('filter');
        this.buttons.show('search');
        this.scopes.sort = this.sort;
        this.scopes.sort.active = 'url';
        this.scopes.sort.direction = 'asc';
        this.subscriptions.add = this.buttons.add.click.subscribe(event => {
            this.router.navigate(['/scopes', 'editor'], {
                queryParams: {
                    mode: 'add'
                }
            });
        });
        this.subscriptions.loaded = this.config.loaded.subscribe((loaded) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loaded) {
                yield this.list();
                yield this.load();
            }
        }));
        this.subscriptions.search = this.buttons.search.value.subscribe(value => {
            this.scopes.filter = value;
        });
        this.subscriptions.filter = this.buttons.filter.click.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dialog = yield this.dialog.open(_filter_filter_dialog__WEBPACK_IMPORTED_MODULE_5__["ScopesFilterDialog"], {
                data: this.filter,
                panelClass: 'filter-dialog'
            });
            yield dialog.afterClosed().subscribe((result) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                if (result) {
                    Object.keys(result).map(key => {
                        this.filter[key] = result[key];
                    });
                    this.filters.update(this.filter);
                    this.list();
                }
                ;
            }));
        }));
    }
    ngOnDestroy() {
        this.buttons.reset('search');
        this.subscriptions.add.unsubscribe();
        this.subscriptions.loaded.unsubscribe();
        this.subscriptions.search.unsubscribe();
        this.subscriptions.filter.unsubscribe();
    }
}
ScopesPage.ɵfac = function ScopesPage_Factory(t) { return new (t || ScopesPage)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_7__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_10__["OptionsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_libs_confirm_confirm_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_14__["FiltersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_15__["ButtonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_16__["ScopesService"])); };
ScopesPage.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ScopesPage, selectors: [["scopes-page"]], viewQuery: function ScopesPage_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
    } }, decls: 19, vars: 7, consts: [["mode", "indeterminate", 4, "ngIf"], ["class", "filterbar", 4, "ngIf"], ["mat-table", "", "fxShow", "", "fxHide.xs", "true", "matSort", "", 3, "dataSource"], ["matColumnDef", "app.name"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "url"], ["matColumnDef", "description"], ["matColumnDef", "options"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["fxHide", "", "fxShow.xs", "true"], ["lines", "full", "matRipple", "", 3, "click", 4, "ngFor", "ngForOf"], ["mode", "indeterminate"], [1, "filterbar"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "removed"], ["matChipRemove", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["lines", "full", "matRipple", "", 3, "click"]], template: function ScopesPage_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, ScopesPage_mat_progress_bar_0_Template, 1, 0, "mat-progress-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ScopesPage_mat_chip_list_1_Template, 2, 1, "mat-chip-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](3, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ScopesPage_th_4_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ScopesPage_td_5_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](6, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ScopesPage_th_7_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ScopesPage_td_8_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](9, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ScopesPage_th_10_Template, 2, 0, "th", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, ScopesPage_td_11_Template, 2, 1, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](12, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ScopesPage_th_13_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ScopesPage_td_14_Template, 4, 0, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ScopesPage_tr_15_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ScopesPage_tr_16_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "mat-list", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ScopesPage_mat_list_item_18_Template, 6, 2, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.filter.appId.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx.scopes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", ctx.columns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.scopes.data);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultShowHideDirective"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatList"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_20__["MatProgressBar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChip"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatLabel"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_21__["MatChipRemove"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_button__WEBPACK_IMPORTED_MODULE_24__["MatButton"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_list__WEBPACK_IMPORTED_MODULE_19__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatRipple"]], styles: [".mat-column-options[_ngcontent-%COMP%] {\n  width: 40px;\n  padding-right: 16px !important;\n}\n\nmat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NvcGVzL3Njb3Blcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zY29wZXMvc2NvcGVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtY29sdW1uLW9wdGlvbnMge1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LWxpc3QgbWF0LWxpc3QtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵsetClassMetadata"](ScopesPage, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"],
        args: [{
                selector: 'scopes-page',
                styleUrls: ['./scopes.page.scss'],
                templateUrl: './scopes.page.html'
            }]
    }], function () { return [{ type: src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_7__["AppsService"] }, { type: src_app_services_toast_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: src_app_libs_options_options_service__WEBPACK_IMPORTED_MODULE_10__["OptionsService"] }, { type: src_app_services_config_config_service__WEBPACK_IMPORTED_MODULE_11__["ConfigService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }, { type: src_app_libs_confirm_confirm_service__WEBPACK_IMPORTED_MODULE_13__["ConfirmService"] }, { type: src_app_services_filters_filters_service__WEBPACK_IMPORTED_MODULE_14__["FiltersService"] }, { type: src_app_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_15__["ButtonsService"] }, { type: src_app_services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_16__["ScopesService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_6__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], { static: true }]
        }] }); })();


/***/ }),

/***/ "O5eP":
/*!******************************************************!*\
  !*** ./src/app/pages/scopes/filter/filter.dialog.ts ***!
  \******************************************************/
/*! exports provided: ScopesFilterDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesFilterDialog", function() { return ScopesFilterDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/classes/app */ "Ovx2");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apps/apps.service */ "xyCQ");
/* harmony import */ var src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../libs/mat-content/mat-content */ "4jEk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-mat-select-search */ "WJ5W");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../pipes/filter/filter.pipe */ "AbOq");
/* harmony import */ var _pipes_order_order_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../pipes/order/order.pipe */ "roMP");






















function ScopesFilterDialog_mat_progress_bar_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "mat-progress-bar", 11);
} }
function ScopesFilterDialog_mat_option_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", app_r3.appId);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", app_r3.name, " ");
} }
function ScopesFilterDialog_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r2.errors.appId, " ");
} }
const _c0 = function (a0) { return { name: a0 }; };
class ScopesFilterDialog {
    constructor(apps, dialog, config, formerror) {
        this.apps = apps;
        this.dialog = dialog;
        this.config = config;
        this.formerror = formerror;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            appId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([])
        });
        this.errors = {
            appId: ''
        };
        this.filter = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            app: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
        this.subscriptions = {};
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.loading = true;
            const apps = yield this.apps.list({
                filter: [
                    'name',
                    'appId'
                ]
            });
            if (apps.ok) {
                this.apps.data = apps.result.map(o => new src_app_classes_app__WEBPACK_IMPORTED_MODULE_1__["App"](o));
            }
            else {
                this.apps.data = [];
            }
            if (typeof (this.config.appId) != 'undefined' && this.config.appId != null) {
                this.form.controls.appId.setValue(this.config.appId);
            }
            ;
            this.loading = false;
        });
    }
    ;
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialog.close(false);
        });
    }
    ;
    submit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dialog.close(this.form.value);
        });
    }
    ;
    ngOnInit() {
        this.subscriptions.form = this.form.valueChanges.subscribe(data => {
            this.errors = this.formerror.validateForm(this.form, this.errors, true);
        });
        this.load();
    }
    ngOnDestroy() {
        this.subscriptions.form.unsubscribe();
    }
}
ScopesFilterDialog.ɵfac = function ScopesFilterDialog_Factory(t) { return new (t || ScopesFilterDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__["AppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__["FormErrorService"])); };
ScopesFilterDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ScopesFilterDialog, selectors: [["scopes-filter-dialog"]], decls: 21, vars: 13, consts: [[1, "spacer"], ["mat-icon-button", "", 3, "click"], ["mode", "indeterminate", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline"], ["name", "appId", "formControlName", "appId", "multiple", ""], [3, "formGroup"], ["placeholderLabel", "filter apps", "noEntriesFoundLabel", "no apps found", "formControlName", "app"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "submit", "color", "primary", "mat-flat-button", ""], ["mode", "indeterminate"], [3, "value"]], template: function ScopesFilterDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-label", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, " Filter Scopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ScopesFilterDialog_Template_button_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ScopesFilterDialog_mat_progress_bar_7_Template, 1, 0, "mat-progress-bar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function ScopesFilterDialog_Template_form_ngSubmit_8_listener() { return !ctx.loading && !ctx.form.invalid && ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " App(s) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "mat-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "ngx-mat-select-search", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ScopesFilterDialog_mat_option_15_Template, 2, 2, "mat-option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "filterBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](17, "orderBy");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ScopesFilterDialog_mat_error_18_Template, 2, 1, "mat-error", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.filter);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](16, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](17, 8, ctx.apps.data, "name"), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, ctx.filter.value.app)));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.errors.appId);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _libs_mat_content_mat_content__WEBPACK_IMPORTED_MODULE_11__["MatContent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_15__["MatSelectSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_16__["MatProgressBar"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]], pipes: [_pipes_filter_filter_pipe__WEBPACK_IMPORTED_MODULE_17__["FilterPipe"], _pipes_order_order_pipe__WEBPACK_IMPORTED_MODULE_18__["OrderPipe"]], styles: [".filter-dialog {\n  width: 500px !important;\n}\n.filter-dialog .mat-dialog-container {\n  padding: 0px !important;\n}\n@media screen and (max-width: 600px) {\n  .filter-dialog .mat-dialog-container {\n    top: 0px;\n    left: 0px;\n    right: 0px;\n    bottom: 0px;\n    z-index: 5000;\n    position: fixed;\n    border-radius: 0px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2NvcGVzL2ZpbHRlci9maWx0ZXIuZGlhbG9nLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKO0FBQUk7RUFDSSx1QkFBQTtBQUVSO0FBQ0E7RUFDSTtJQUNJLFFBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0VBRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Njb3Blcy9maWx0ZXIvZmlsdGVyLmRpYWxvZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlci1kaWFsb2cge1xyXG4gICAgd2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuZmlsdGVyLWRpYWxvZyAubWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDUwMDA7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](ScopesFilterDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'scopes-filter-dialog',
                styleUrls: ['./filter.dialog.scss'],
                templateUrl: './filter.dialog.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: src_app_services_apps_apps_service__WEBPACK_IMPORTED_MODULE_5__["AppsService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: src_app_services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_6__["FormErrorService"] }]; }, null); })();


/***/ }),

/***/ "ONon":
/*!**********************************!*\
  !*** ./src/app/classes/scope.ts ***!
  \**********************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
class Scope {
    constructor(args) {
        this.app = {
            name: null,
            icon: null
        };
        this.role = 0;
        if (typeof (args) != 'undefined' && args !== null) {
            if (typeof (args.app) != 'undefined' && args.app !== null) {
                if (typeof (args.app.name) != 'undefined' && args.app.name !== null) {
                    this.app.name = args.app.name;
                }
                if (typeof (args.app.icon) != 'undefined' && args.app.icon !== null) {
                    this.app.icon = args.app.icon;
                }
            }
            if (typeof (args.url) != 'undefined' && args.url !== null) {
                this.url = args.url;
            }
            if (typeof (args.role) != 'undefined' && args.role !== null) {
                this.role = args.role;
            }
            if (typeof (args.appId) != 'undefined' && args.appId !== null) {
                this.appId = args.appId;
            }
            if (typeof (args.scopeId) != 'undefined' && args.scopeId !== null) {
                this.scopeId = args.scopeId;
            }
            if (typeof (args.description) != 'undefined' && args.description !== null) {
                this.description = args.description;
            }
        }
    }
}


/***/ })

}]);
//# sourceMappingURL=pages-scopes-scopes-module.js.map