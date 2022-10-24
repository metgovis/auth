(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Precision 7510\Repos\MetGovis\auth\auth\app\src\main.ts */"zUnb");


/***/ }),

/***/ "3lET":
/*!**********************************************!*\
  !*** ./src/app/libs/search/search.module.ts ***!
  \**********************************************/
/*! exports provided: SearchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchModule", function() { return SearchModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search.component */ "IQQo");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");









class SearchModule {
}
SearchModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SearchModule_Factory(t) { return new (t || SearchModule)(); }, imports: [[
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]], imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]], exports: [_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"]
                ],
                exports: [
                    _search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
                ],
                declarations: [
                    _search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9ZKQ":
/*!*************************************************!*\
  !*** ./src/app/services/toast/toast.service.ts ***!
  \*************************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");




class ToastService {
    constructor(snackbar) {
        this.snackbar = snackbar;
    }
    show(message, duration) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.snackbar.open(message, null, {
                duration: duration || 3000,
                panelClass: 'toast'
            });
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
ToastService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ToastService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthManager", function() { return AuthManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _account_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../account/account.service */ "IRyT");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");




class AuthManager {
    constructor(account, localstorage) {
        this.account = account;
        this.localstorage = localstorage;
    }
    canActivate() {
        const now = new Date();
        let valid = true;
        const email = this.localstorage.get('email');
        const token = this.localstorage.getObject('token');
        if (!email || !token) {
            valid = false;
        }
        else {
            // let scopes = token.scopes.map(o => o.url);
            // environment.scopes.map(scope => {
            //     if (!scopes.includes(scope.url)) {
            //         valid = false;
            //     };
            // });
            // if (typeof (email) == 'undefined') {
            //     valid = false;
            // };
            if (typeof (token.expiry) != 'undefined') {
                const expiry = new Date(token.expiry);
                if (expiry < now) {
                    valid = false;
                }
            }
            else {
                valid = false;
            }
        }
        if (this.account.authenticated.value != valid) {
            this.account.authenticated.next(valid);
        }
        if (valid) {
            return true;
        }
        else {
            this.account.signout();
        }
    }
}
AuthManager.ɵfac = function AuthManager_Factory(t) { return new (t || AuthManager)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"])); };
AuthManager.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthManager, factory: AuthManager.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthManager, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _account_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"] }, { type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
const environment = {
    auth: 'http://127.0.0.1:9000',
    appId: 1,
    drive: 'http://127.0.0.1:12000',
    appName: 'Auth',
    production: false
};


/***/ }),

/***/ "BhS5":
/*!*****************************************************!*\
  !*** ./src/app/services/buttons/buttons.service.ts ***!
  \*****************************************************/
/*! exports provided: ButtonsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsService", function() { return ButtonsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ButtonsService {
    constructor() {
        this.add = {
            click: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            visible: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false)
        };
        this.close = {
            click: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            visible: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false)
        };
        this.filter = {
            click: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            visible: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false)
        };
        this.search = {
            click: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            value: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            reset: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            visible: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false)
        };
        this.download = {
            click: new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"](),
            visible: new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false)
        };
    }
    show(button) {
        this[button].visible.next(true);
    }
    hide(button) {
        this[button].visible.next(false);
    }
    reset(button) {
        this[button].reset.next();
    }
}
ButtonsService.ɵfac = function ButtonsService_Factory(t) { return new (t || ButtonsService)(); };
ButtonsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ButtonsService, factory: ButtonsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ButtonsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "BoIw":
/*!**********************************************************!*\
  !*** ./src/app/libs/splashscreen/splashscreen.module.ts ***!
  \**********************************************************/
/*! exports provided: SplashscreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenModule", function() { return SplashscreenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _splashscreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splashscreen */ "GrWz");




class SplashscreenModule {
}
SplashscreenModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SplashscreenModule });
SplashscreenModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SplashscreenModule_Factory(t) { return new (t || SplashscreenModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SplashscreenModule, { declarations: [_splashscreen__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_splashscreen__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SplashscreenModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _splashscreen__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
                ],
                declarations: [
                    _splashscreen__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Eo5A":
/*!***********************************************!*\
  !*** ./src/app/libs/update/update.service.ts ***!
  \***********************************************/
/*! exports provided: UpdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateService", function() { return UpdateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _update_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./update.dialog */ "UATu");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");






class UpdateService {
    constructor(dialog, updates) {
        this.dialog = dialog;
        this.updates = updates;
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.updates.available.subscribe((event) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                const dialog = yield this.dialog.open(_update_dialog__WEBPACK_IMPORTED_MODULE_2__["UpdateDialog"], {
                    panelClass: 'update-dialog',
                    hasBackdrop: false
                });
                dialog.afterClosed().subscribe(update => {
                    if (update) {
                        this.updates.activateUpdate().then(() => document.location.reload());
                    }
                });
            }));
        });
    }
}
UpdateService.ɵfac = function UpdateService_Factory(t) { return new (t || UpdateService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"])); };
UpdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UpdateService, factory: UpdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UpdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"] }]; }, null); })();


/***/ }),

/***/ "GrWz":
/*!***************************************************!*\
  !*** ./src/app/libs/splashscreen/splashscreen.ts ***!
  \***************************************************/
/*! exports provided: SplashScreen */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreen", function() { return SplashScreen; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



class SplashScreen {
    constructor(element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    }
    show() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'flex');
        });
    }
    hide() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
        });
    }
}
SplashScreen.ɵfac = function SplashScreen_Factory(t) { return new (t || SplashScreen)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"])); };
SplashScreen.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SplashScreen, selectors: [["splashscreen"]], decls: 4, vars: 0, consts: [[1, "loading"]], template: function SplashScreen_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["splashscreen {\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  bottom: 0px;\n  display: flex;\n  z-index: 999999;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  background-color: #fff;\n}\n\n.loading {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.loading div {\n  display: inline-block;\n  position: absolute;\n  left: 8px;\n  width: 16px;\n  background: #3f51b5;\n  animation: loading 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;\n}\n\n.loading div:nth-child(1) {\n  left: 8px;\n  animation-delay: -0.24s;\n}\n\n.loading div:nth-child(2) {\n  left: 32px;\n  animation-delay: -0.12s;\n}\n\n.loading div:nth-child(3) {\n  left: 56px;\n  animation-delay: 0;\n}\n\n@keyframes loading {\n  0% {\n    top: 8px;\n    height: 64px;\n  }\n  50%, 100% {\n    top: 24px;\n    height: 32px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicy9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBQ0Q7O0FBQ0E7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFRDs7QUFBQTtFQUNDLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkRBQUE7QUFHRDs7QUFEQTtFQUNDLFNBQUE7RUFDQSx1QkFBQTtBQUlEOztBQUZBO0VBQ0MsVUFBQTtFQUNBLHVCQUFBO0FBS0Q7O0FBSEE7RUFDQyxVQUFBO0VBQ0Esa0JBQUE7QUFNRDs7QUFKQTtFQUNDO0lBQ0MsUUFBQTtJQUNBLFlBQUE7RUFPQTtFQUxEO0lBRUMsU0FBQTtJQUNBLFlBQUE7RUFNQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbGlicy9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzcGxhc2hzY3JlZW4ge1xyXG5cdHRvcDogMHB4O1xyXG5cdGxlZnQ6IDBweDtcclxuXHRyaWdodDogMHB4O1xyXG5cdGJvdHRvbTogMHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ei1pbmRleDogOTk5OTk5O1xyXG5cdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvYWRpbmcge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0d2lkdGg6IDgwcHg7XHJcblx0aGVpZ2h0OiA4MHB4O1xyXG59XHJcbi5sb2FkaW5nIGRpdiB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRsZWZ0OiA4cHg7XHJcblx0d2lkdGg6IDE2cHg7XHJcblx0YmFja2dyb3VuZDogIzNmNTFiNTtcclxuXHRhbmltYXRpb246IGxvYWRpbmcgMS4ycyBjdWJpYy1iZXppZXIoMCwgMC41LCAwLjUsIDEpIGluZmluaXRlO1xyXG59XHJcbi5sb2FkaW5nIGRpdjpudGgtY2hpbGQoMSkge1xyXG5cdGxlZnQ6IDhweDtcclxuXHRhbmltYXRpb24tZGVsYXk6IC0wLjI0cztcclxufVxyXG4ubG9hZGluZyBkaXY6bnRoLWNoaWxkKDIpIHtcclxuXHRsZWZ0OiAzMnB4O1xyXG5cdGFuaW1hdGlvbi1kZWxheTogLTAuMTJzO1xyXG59XHJcbi5sb2FkaW5nIGRpdjpudGgtY2hpbGQoMykge1xyXG5cdGxlZnQ6IDU2cHg7XHJcblx0YW5pbWF0aW9uLWRlbGF5OiAwO1xyXG59XHJcbkBrZXlmcmFtZXMgbG9hZGluZyB7XHJcblx0MCUge1xyXG5cdFx0dG9wOiA4cHg7XHJcblx0XHRoZWlnaHQ6IDY0cHg7XHJcblx0fVxyXG5cdDUwJSxcclxuXHQxMDAlIHtcclxuXHRcdHRvcDogMjRweDtcclxuXHRcdGhlaWdodDogMzJweDtcclxuXHR9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SplashScreen, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'splashscreen',
                styleUrls: ['./splashscreen.scss'],
                templateUrl: './splashscreen.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }]; }, null); })();


/***/ }),

/***/ "IQQo":
/*!*************************************************!*\
  !*** ./src/app/libs/search/search.component.ts ***!
  \*************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");








class SearchComponent {
    constructor(el) {
        this.el = el;
        this.value = '';
        this.color = '';
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.placeholder = '';
        this.element = this.el.nativeElement;
    }
    ;
    reset() {
        this.value = '';
        this.active = false;
    }
    ;
    toggle() {
        this.value = '';
        this.active = !this.active;
        this.change.emit(this.value);
        setTimeout(() => this.input.focus(), 100);
    }
    ;
    changes(value) {
        this.change.emit(value);
    }
    ;
    ngOnInit() {
        if (this.value.length > 0) {
            this.active = true;
        }
        ;
    }
    ;
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInput"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    } }, inputs: { value: "value", color: "color", placeholder: "placeholder" }, outputs: { change: "change" }, decls: 5, vars: 8, consts: [[1, "search-container"], ["type", "text", "matInput", "", 3, "autofocus", "placeholder", "ngModel", "hidden", "ngModelChange"], ["mat-icon-button", "", 3, "click"], ["matTooltip", "search", 3, "color"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.value = $event; })("ngModelChange", function SearchComponent_Template_input_ngModelChange_1_listener($event) { return ctx.changes($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SearchComponent_Template_button_click_2_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("autofocus", true)("placeholder", ctx.placeholder)("ngModel", ctx.value)("hidden", !ctx.active);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.active ? "close" : "search", " ");
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"]], styles: [".search-container {\n  height: 40px;\n  display: flex;\n  position: relative;\n  overflow: hidden;\n  align-items: center;\n  border-radius: 40px;\n  flex-direction: row;\n  justify-content: center;\n}\n.search-container input {\n  width: calc(100% - 70px) !important;\n  margin: 0px !important;\n  border: none !important;\n  height: 20px !important;\n  outline: none !important;\n  font-size: 14px !important;\n  font-weight: normal !important;\n  line-height: 20px !important;\n  margin-left: 20px !important;\n  margin-right: 10px !important;\n}\n.search-container.active {\n  color: #000000;\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUFJO0VBQ0ksbUNBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFFUjtBQUNBO0VBQ0ksY0FBQTtFQUNBLHlCQUFBO0FBRUoiLCJmaWxlIjoic3JjL2FwcC9saWJzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VhcmNoLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6ICAgICAgICAgICAgIDQwcHg7XHJcbiAgICBkaXNwbGF5OiAgICAgICAgICAgIGZsZXg7XHJcbiAgICBwb3NpdGlvbjogICAgICAgICAgIHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6ICAgICAgICAgICBoaWRkZW47XHJcbiAgICBhbGlnbi1pdGVtczogICAgICAgIGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6ICAgICAgNDBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiAgICAgcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiAgICBjZW50ZXI7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgd2lkdGg6ICAgICAgICAgIGNhbGMoMTAwJSAtIDcwcHgpICFpbXBvcnRhbnQ7O1xyXG4gICAgICAgIG1hcmdpbjogICAgICAgICAwcHggIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6ICAgICAgICAgbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogICAgICAgICAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgb3V0bGluZTogICAgICAgIG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6ICAgICAgMTRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAgICBub3JtYWwgIWltcG9ydGFudDtcclxuICAgICAgICBsaW5lLWhlaWdodDogICAgMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAgICAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAgIDEwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uc2VhcmNoLWNvbnRhaW5lci5hY3RpdmUge1xyXG4gICAgY29sb3I6ICAgICAgICAgICAgICAjMDAwMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICAjRkZGRkZGO1xyXG59Il19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'search',
                styleUrls: ['./search.component.scss'],
                templateUrl: './search.component.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['value']
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['color']
        }], change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"],
            args: ['change']
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
            args: ['placeholder']
        }], input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_input__WEBPACK_IMPORTED_MODULE_0__["MatInput"], { 'static': true }]
        }] }); })();


/***/ }),

/***/ "IRyT":
/*!*****************************************************!*\
  !*** ./src/app/services/account/account.service.ts ***!
  \*****************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api.service */ "oZWX");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");








class AccountService {
    constructor(api, router, localstorage) {
        this.api = api;
        this.router = router;
        this.localstorage = localstorage;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.authenticated = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const params = {
                filter: [
                    'name',
                    'email',
                    'picture',
                    'username'
                ]
            };
            const response = yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/users/get', params);
            if (response.ok) {
                this.user.next(response.result);
            }
            else {
                this.user.next(null);
            }
            return response;
        });
    }
    signout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localstorage.clear();
            this.authenticated.next(false);
            this.router.navigate(['/signin']);
        });
    }
    validate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const now = new Date();
            let valid = true;
            const email = this.localstorage.get('email');
            const token = this.localstorage.getObject('token');
            if (!email || !token) {
                valid = false;
            }
            else {
                if (typeof (email) == 'undefined') {
                    valid = false;
                }
                if (typeof (token.expiry) != 'undefined') {
                    const expiry = new Date(token.expiry);
                    if (expiry < now) {
                        valid = false;
                    }
                }
                else {
                    valid = false;
                }
            }
            if (valid) {
                this.authenticated.next(true);
                return true;
            }
            else {
                this.authenticated.next(false);
                return false;
            }
        });
    }
    signin(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localstorage.set('email', params.email);
            params.appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appId;
            params.expiry = new Date(new Date().valueOf() + (31 * 24 * 60 * 60 * 1000));
            params.description = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appName;
            const response = yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/auth/authenticate', params);
            if (response.ok) {
                this.localstorage.setObject('token', response.result.token);
                this.localstorage.setObject('userId', response.result.userId);
                this.init();
            }
            else {
                this.authenticated.next(false);
            }
            return response;
        });
    }
    verify(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localstorage.set('email', params.email);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/auth/verify', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/users/update', params);
        });
    }
    register(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localstorage.set('email', params.email);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/auth/register', params);
        });
    }
    retrieve(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.localstorage.set('email', params.email);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/retrieve', params);
        });
    }
    removeaccount(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/users/delete', params);
        });
    }
    resetpassword(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            params.appId = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appId;
            params.description = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appName;
            this.localstorage.set('email', params.email);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/auth/reset-password', params);
        });
    }
    changepassword(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // this.localstorage.set('userId', params.userId);
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/auth/change-password', params);
        });
    }
}
AccountService.ɵfac = function AccountService_Factory(t) { return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"])); };
AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AccountService, factory: AccountService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "L7HW":
/*!***************************************************!*\
  !*** ./src/app/services/config/config.service.ts ***!
  \***************************************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api.service */ "oZWX");






class ConfigService {
    constructor(api) {
        this.api = api;
        this.loaded = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let url;
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].production) {
                url = window.location.origin;
            }
            else {
                url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth;
            }
            const response = yield this.api.put(url, '/config/get', {});
            if (response.ok) {
                Object.keys(response.result).map(key => {
                    src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"][key] = response.result[key];
                });
                this.loaded.next(true);
                return true;
            }
            else {
                return false;
            }
        });
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
ConfigService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ConfigService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "LjSU":
/*!*******************************************************!*\
  !*** ./src/app/services/settings/settings.service.ts ***!
  \*******************************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");





class SettingsService {
    constructor(localstorage) {
        this.localstorage = localstorage;
        this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.notifications = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.theme.subscribe(value => {
            if (typeof (value) != 'undefined' && value !== null) {
                const settings = this.localstorage.getObject('settings', {
                    theme: 'light',
                    notifications: false
                });
                settings.theme = value;
                if (value == 'dark') {
                    document.body.classList.add('dark-mode');
                }
                else {
                    document.body.classList.remove('dark-mode');
                }
                this.localstorage.setObject('settings', settings);
            }
        });
        this.notifications.subscribe(value => {
            if (typeof (value) != 'undefined' && value !== null) {
                const settings = this.localstorage.getObject('settings', {
                    theme: 'light',
                    notifications: false
                });
                settings.notifications = value;
                if (value) {
                    Notification.requestPermission((status) => {
                        new Notification('Hey!', {
                            body: 'You enabled notifications!'
                        });
                    });
                }
                this.localstorage.setObject('settings', settings);
            }
        });
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const settings = this.localstorage.getObject('settings', {
                theme: 'light',
                notifications: false
            });
            this.theme.next(settings.theme);
            this.notifications.next(settings.notifications);
            if (settings.notifications) {
                Notification.requestPermission((status) => {
                    if (status == 'granted') {
                        new Notification('Hey!', {
                            body: 'You enabled notifications!'
                        });
                    }
                });
            }
            if (settings.theme == 'dark') {
                document.body.classList.add('dark-mode');
            }
            else {
                document.body.classList.remove('dark-mode');
            }
        });
    }
}
SettingsService.ɵfac = function SettingsService_Factory(t) { return new (t || SettingsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"])); };
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SettingsService, factory: SettingsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SettingsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "RgeU":
/*!***************************************************!*\
  !*** ./src/app/services/tokens/tokens.service.ts ***!
  \***************************************************/
/*! exports provided: TokensService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokensService", function() { return TokensService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");





class TokensService {
    constructor(api) {
        this.api = api;
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/get', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/list', params);
        });
    }
    share(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/share', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/update', params);
        });
    }
    revoke(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/revoke', params);
        });
    }
    download(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/download', params);
        });
    }
    retrieve(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/retrieve', params);
        });
    }
    generate(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/generate', params);
        });
    }
    unsubscribe(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/unsubscribe', params);
        });
    }
    updatesubscriber(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/tokens/update-subscriber', params);
        });
    }
}
TokensService.ɵfac = function TokensService_Factory(t) { return new (t || TokensService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
TokensService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TokensService, factory: TokensService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TokensService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _libs_splashscreen_splashscreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/splashscreen/splashscreen */ "GrWz");
/* harmony import */ var _libs_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/search/search.component */ "IQQo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/config/config.service */ "L7HW");
/* harmony import */ var _libs_update_update_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./libs/update/update.service */ "Eo5A");
/* harmony import */ var _services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/buttons/buttons.service */ "BhS5");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/account/account.service */ "IRyT");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/settings/settings.service */ "LjSU");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");

























const _c0 = ["add"];
const _c1 = ["close"];
const _c2 = ["filter"];
function AppComponent_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 16);
} }
class AppComponent {
    constructor(config, update, router, renderer, buttons, account, settings, localstorage) {
        this.config = config;
        this.update = update;
        this.router = router;
        this.renderer = renderer;
        this.buttons = buttons;
        this.account = account;
        this.settings = settings;
        this.localstorage = localstorage;
        this.minified = JSON.parse(this.localstorage.get('minified', false));
    }
    toggle() {
        this.minified = !this.minified;
        this.localstorage.set('minified', this.minified);
    }
    initialize() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.splashscreen.show();
            yield this.config.init();
            yield this.update.init();
            yield this.settings.init();
            yield this.splashscreen.hide();
        });
    }
    ngOnInit() {
        this.config.loaded.subscribe((loaded) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (loaded) {
                this.account.validate();
            }
        }));
        this.account.authenticated.subscribe(authenticated => {
            this.authenticated = authenticated;
            if (authenticated) {
                this.account.init();
            }
        });
        this.initialize();
    }
    ngAfterViewInit() {
        if (window.location.pathname == '/signin' || window.location.pathname == '/signup' || window.location.pathname == '/reset-password' || window.location.pathname == '/forgot-password' || window.location.pathname == '/allow-access' || window.location.pathname == '/verify-account' || window.location.pathname == '/request-access') {
            this.drawer.close();
            this.authenticated = false;
        }
        ;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                if (window.location.pathname == '/signin' || window.location.pathname == '/signup' || window.location.pathname == '/reset-password' || window.location.pathname == '/forgot-password' || window.location.pathname == '/allow-access' || window.location.pathname == '/verify-account' || window.location.pathname == '/request-access') {
                    this.drawer.close();
                    this.authenticated = false;
                }
                else {
                    this.drawer.open();
                }
                ;
            }
            ;
        });
        this.renderer.listen(this.add._elementRef.nativeElement, 'click', event => this.buttons.add.click.next(event));
        this.renderer.listen(this.close._elementRef.nativeElement, 'click', event => this.buttons.close.click.next(event));
        this.renderer.listen(this.filter._elementRef.nativeElement, 'click', event => this.buttons.filter.click.next(event));
        this.buttons.add.visible.subscribe(visible => {
            if (visible) {
                this.renderer.setStyle(this.add._elementRef.nativeElement, 'display', 'block');
            }
            else {
                this.renderer.setStyle(this.add._elementRef.nativeElement, 'display', 'none');
            }
        });
        this.buttons.close.visible.subscribe(visible => {
            if (visible) {
                this.renderer.setStyle(this.close._elementRef.nativeElement, 'display', 'block');
            }
            else {
                this.renderer.setStyle(this.close._elementRef.nativeElement, 'display', 'none');
            }
        });
        this.buttons.filter.visible.subscribe(visible => {
            if (visible) {
                this.renderer.setStyle(this.filter._elementRef.nativeElement, 'display', 'block');
            }
            else {
                this.renderer.setStyle(this.filter._elementRef.nativeElement, 'display', 'none');
            }
        });
        this.buttons.search.visible.subscribe(visible => {
            if (visible) {
                this.renderer.setStyle(this.search.element, 'display', 'block');
            }
            else {
                this.renderer.setStyle(this.search.element, 'display', 'none');
            }
        });
        this.buttons.search.reset.subscribe(event => this.search.reset());
        this.search.change.subscribe(event => this.buttons.search.value.next(event));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_libs_update_update_service__WEBPACK_IMPORTED_MODULE_7__["UpdateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__["ButtonsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_account_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["LocalstorageService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_libs_splashscreen_splashscreen__WEBPACK_IMPORTED_MODULE_1__["SplashScreen"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstaticViewQuery"](_libs_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.drawer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.splashscreen = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.drawercontainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.add = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.close = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.filter = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.search = _t.first);
    } }, decls: 66, vars: 9, consts: [["mat-icon-button", "", 3, "click"], [1, "spacer"], ["mat-icon-button", ""], ["filter", ""], ["add", ""], ["close", ""], ["mode", "side", 3, "opened", "disableClose"], ["lines", "full", "matRipple", "", "routerLink", "/account", "routerLinkActive", "active", "matTooltip", "Account", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/apps", "routerLinkActive", "active", "matTooltip", "Apps", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/features", "routerLinkActive", "active", "matTooltip", "Features", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/scopes", "routerLinkActive", "active", "matTooltip", "Scopes", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/settings", "routerLinkActive", "active", "matTooltip", "Settings", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/tokens", "routerLinkActive", "active", "matTooltip", "Tokens", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "routerLink", "/users", "routerLinkActive", "active", "matTooltip", "Users", "matTooltipPosition", "right"], ["lines", "full", "matRipple", "", "matTooltip", "Sign Out", "matTooltipPosition", "right", 3, "click"], ["class", "no-auth", 4, "ngIf"], [1, "no-auth"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " menu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "mat-label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Auth ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, " filter_list ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 2, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " add ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "button", 2, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " close ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-drawer-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "mat-drawer", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "mat-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-list-item", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, " account_box ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, " apps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Apps ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "mat-list-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34, " widgets ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, " Features ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-list-item", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](39, " shield ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, " Scopes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-list-item", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, " settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46, " Settings ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "mat-list-item", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, " vpn_key ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51, " Tokens ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "mat-list-item", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, " people ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, " Users ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "mat-list-item", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_57_listener() { return ctx.account.signout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, " exit_to_app ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](63, AppComponent_div_63_Template, 1, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](64, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "splashscreen");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("authenticated", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("minified", ctx.minified)("authenticated", ctx.authenticated);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("opened", ctx.authenticated)("disableClose", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.authenticated);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _libs_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_16__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_17__["MatRipple"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _libs_splashscreen_splashscreen__WEBPACK_IMPORTED_MODULE_1__["SplashScreen"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: none;\n  padding-left: 8px;\n}\nmat-toolbar[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\nmat-toolbar[_ngcontent-%COMP%]   [mat-stroked-button][_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.no-auth[_ngcontent-%COMP%] {\n  height: 56px;\n}\nmat-toolbar.authenticated[_ngcontent-%COMP%] {\n  display: flex;\n}\nmat-drawer-container[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background-color: transparent;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%] {\n  top: 0px;\n  left: 0px;\n  right: 0px;\n  position: fixed;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 300px;\n  border: none;\n  box-shadow: none;\n  transition: width 500ms;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%] {\n  height: 56px;\n  cursor: pointer;\n  outline: none;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 250ms;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item.active[_ngcontent-%COMP%] {\n  color: #2196F3 !important;\n  background-color: rgba(33, 150, 243, 0.1) !important;\n}\nmat-drawer-container[_ngcontent-%COMP%]   mat-drawer-content[_ngcontent-%COMP%] {\n  transition: margin 500ms;\n}\nmat-drawer-container.minified[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n  width: 56px;\n}\nmat-drawer-container.minified[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%]   mat-list[_ngcontent-%COMP%]   mat-list-item[_ngcontent-%COMP%]   mat-label[_ngcontent-%COMP%] {\n  opacity: 0;\n}\nmat-drawer-container.authenticated[_ngcontent-%COMP%] {\n  height: calc(100vh - 56px);\n}\nmat-drawer-container.authenticated[_ngcontent-%COMP%]   mat-drawer-content[_ngcontent-%COMP%] {\n  height: auto;\n}\n@media screen and (max-width: 300px) {\n  mat-drawer-container[_ngcontent-%COMP%]   mat-drawer[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFDQTtFQUNJLFlBQUE7QUFFSjtBQUFBO0VBQ0ksYUFBQTtBQUdKO0FBREE7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFJSjtBQUhJO0VBQ0ksUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUtSO0FBSEk7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFLUjtBQUhZO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBS2hCO0FBSmdCO0VBQ0ksa0JBQUE7QUFNcEI7QUFKZ0I7RUFDSSxVQUFBO0VBQ0EseUJBQUE7QUFNcEI7QUFIWTtFQUNJLHlCQUFBO0VBQ0Esb0RBQUE7QUFLaEI7QUFESTtFQUNJLHdCQUFBO0FBR1I7QUFDSTtFQUNJLFdBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtBQUdaO0FBQ0E7RUFDSSwwQkFBQTtBQUVKO0FBREk7RUFDSSxZQUFBO0FBR1I7QUFBQTtFQUNJO0lBQ0ksc0JBQUE7RUFHTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHBhZGRpbmctbGVmdDogOHB4O1xyXG4gICAgbWF0LWxhYmVsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgfVxyXG4gICAgW21hdC1zdHJva2VkLWJ1dHRvbl0ge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gICAgfVxyXG59XHJcbi5uby1hdXRoIHtcclxuICAgIGhlaWdodDogNTZweDtcclxufVxyXG5tYXQtdG9vbGJhci5hdXRoZW50aWNhdGVkIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxubWF0LWRyYXdlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXQtdG9vbGJhciB7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgbGVmdDogMHB4O1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgfVxyXG4gICAgbWF0LWRyYXdlciB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDUwMG1zO1xyXG4gICAgICAgIG1hdC1saXN0IHtcclxuICAgICAgICAgICAgbWF0LWxpc3QtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWF0LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1hdC1saXN0LWl0ZW0uYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMjE5NkYzICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzIxOTZGMywgJGFscGhhOiAwLjEpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBtYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgICAgIHRyYW5zaXRpb246IG1hcmdpbiA1MDBtcztcclxuICAgIH1cclxufVxyXG5tYXQtZHJhd2VyLWNvbnRhaW5lci5taW5pZmllZCB7XHJcbiAgICBtYXQtZHJhd2VyIHtcclxuICAgICAgICB3aWR0aDogNTZweDtcclxuICAgICAgICBtYXQtbGlzdCBtYXQtbGlzdC1pdGVtIG1hdC1sYWJlbCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbm1hdC1kcmF3ZXItY29udGFpbmVyLmF1dGhlbnRpY2F0ZWQge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XHJcbiAgICBtYXQtZHJhd2VyLWNvbnRlbnQge1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMDBweCkge1xyXG4gICAgbWF0LWRyYXdlci1jb250YWluZXIgbWF0LWRyYXdlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"],
        args: [{
                selector: 'app-root',
                styleUrls: ['./app.component.scss'],
                templateUrl: './app.component.html'
            }]
    }], function () { return [{ type: _services_config_config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"] }, { type: _libs_update_update_service__WEBPACK_IMPORTED_MODULE_7__["UpdateService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Renderer2"] }, { type: _services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_8__["ButtonsService"] }, { type: _services_account_account_service__WEBPACK_IMPORTED_MODULE_9__["AccountService"] }, { type: _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"] }, { type: _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["LocalstorageService"] }]; }, { drawer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], { static: true }]
        }], splashscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_libs_splashscreen_splashscreen__WEBPACK_IMPORTED_MODULE_1__["SplashScreen"], { static: true }]
        }], drawercontainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], { static: true }]
        }], add: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['add', { static: true }]
        }], close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['close', { static: true }]
        }], filter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: ['filter', { static: true }]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"],
            args: [_libs_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"], { static: true }]
        }] }); })();


/***/ }),

/***/ "UATu":
/*!**********************************************!*\
  !*** ./src/app/libs/update/update.dialog.ts ***!
  \**********************************************/
/*! exports provided: UpdateDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateDialog", function() { return UpdateDialog; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class UpdateDialog {
    constructor(dialog) {
        this.dialog = dialog;
    }
    update() {
        this.dialog.close(true);
    }
}
UpdateDialog.ɵfac = function UpdateDialog_Factory(t) { return new (t || UpdateDialog)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
UpdateDialog.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateDialog, selectors: [["update-dialog"]], decls: 6, vars: 0, consts: [["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function UpdateDialog_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update Available\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " There's a new version of this application available\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateDialog_Template_button_click_4_listener() { return ctx.update(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Update Now\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".update-dialog mat-dialog-container {\n  top: auto;\n  left: auto;\n  width: calc(100% - 40px);\n  right: 20px;\n  bottom: 20px;\n  height: 130px;\n  padding: 0px;\n  position: fixed;\n  max-width: 400px;\n}\n.update-dialog mat-dialog-container update-dialog {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.update-dialog mat-dialog-container update-dialog h1, .update-dialog mat-dialog-container update-dialog p {\n  margin: 5px 16px;\n}\n.update-dialog mat-dialog-container update-dialog h1 {\n  height: 24px;\n  font-size: 24px;\n  margin-top: 12px;\n  line-height: 24px;\n}\n.update-dialog mat-dialog-container update-dialog p {\n  font-size: 12px;\n  line-height: 14px;\n  margin-bottom: 10px;\n}\n.update-dialog mat-dialog-container update-dialog button {\n  width: auto;\n  margin: 0px 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlicy91cGRhdGUvdXBkYXRlLmRpYWxvZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFFUjtBQURRO0VBQ0ksZ0JBQUE7QUFHWjtBQURRO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBR1o7QUFEUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQUdaIiwiZmlsZSI6InNyYy9hcHAvbGlicy91cGRhdGUvdXBkYXRlLmRpYWxvZy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwZGF0ZS1kaWFsb2cgbWF0LWRpYWxvZy1jb250YWluZXIge1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgbGVmdDogYXV0bztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB1cGRhdGUtZGlhbG9nIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgaDEsIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateDialog, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'update-dialog',
                styleUrls: ['./update.dialog.scss'],
                templateUrl: './update.dialog.html',
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "WF9o":
/*!***************************************************************!*\
  !*** ./src/app/services/localstorage/localstorage.service.ts ***!
  \***************************************************************/
/*! exports provided: LocalstorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalstorageService", function() { return LocalstorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LocalstorageService {
    constructor() { }
    set(key, value) {
        window.localStorage.setItem(key, value);
    }
    get(key, value) {
        const result = window.localStorage.getItem(key);
        if (typeof (result) != 'undefined' && result !== null) {
            return result;
        }
        else {
            return value;
        }
    }
    setObject(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value || {}));
    }
    getObject(key, value) {
        if (!value) {
            value = {};
        }
        const kayvalue = window.localStorage.getItem(key);
        if (typeof (kayvalue) == 'undefined' || kayvalue == null) {
            return value;
        }
        else {
            return JSON.parse(kayvalue);
        }
    }
    clear() {
        window.localStorage.clear();
    }
    remove(key) {
        window.localStorage.removeItem(key);
    }
}
LocalstorageService.ɵfac = function LocalstorageService_Factory(t) { return new (t || LocalstorageService)(); };
LocalstorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalstorageService, factory: LocalstorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalstorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _libs_search_search_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/search/search.module */ "3lET");
/* harmony import */ var _libs_update_update_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./libs/update/update.module */ "pxzf");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _libs_splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./libs/splashscreen/splashscreen.module */ "BoIw");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/api/api.service */ "oZWX");
/* harmony import */ var _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/apps/apps.service */ "xyCQ");
/* harmony import */ var _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./services/toast/toast.service */ "9ZKQ");
/* harmony import */ var _services_users_users_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/users/users.service */ "j7lE");
/* harmony import */ var _services_config_config_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/config/config.service */ "L7HW");
/* harmony import */ var _services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/scopes/scopes.service */ "a6VE");
/* harmony import */ var _services_tokens_tokens_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./services/tokens/tokens.service */ "RgeU");
/* harmony import */ var _services_account_account_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/account/account.service */ "IRyT");
/* harmony import */ var _services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./services/buttons/buttons.service */ "BhS5");
/* harmony import */ var _services_filters_filters_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./services/filters/filters.service */ "bS1C");
/* harmony import */ var _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./services/settings/settings.service */ "LjSU");
/* harmony import */ var _services_features_features_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/features/features.service */ "wJso");
/* harmony import */ var _services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./services/form-error/form-error.service */ "dWDE");
/* harmony import */ var _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./services/localstorage/localstorage.service */ "WF9o");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* --- MODULES --- */


















/* --- SERVICES --- */














/* --- COMPONENTS --- */

/* --- ENVIRONMENT --- */



class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _services_api_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"],
        _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_19__["AppsService"],
        _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_20__["ToastService"],
        _services_users_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"],
        _services_config_config_service__WEBPACK_IMPORTED_MODULE_22__["ConfigService"],
        _services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_23__["ScopesService"],
        _services_tokens_tokens_service__WEBPACK_IMPORTED_MODULE_24__["TokensService"],
        _services_account_account_service__WEBPACK_IMPORTED_MODULE_25__["AccountService"],
        _services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_26__["ButtonsService"],
        _services_filters_filters_service__WEBPACK_IMPORTED_MODULE_27__["FiltersService"],
        _services_features_features_service__WEBPACK_IMPORTED_MODULE_29__["FeaturesService"],
        _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_28__["SettingsService"],
        _services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_30__["FormErrorService"],
        _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_31__["LocalstorageService"]
    ], imports: [[
            _libs_search_search_module__WEBPACK_IMPORTED_MODULE_1__["SearchModule"],
            _libs_update_update_module__WEBPACK_IMPORTED_MODULE_2__["UpdateModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
            _libs_splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_14__["SplashscreenModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].production
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]], imports: [_libs_search_search_module__WEBPACK_IMPORTED_MODULE_1__["SearchModule"],
        _libs_update_update_module__WEBPACK_IMPORTED_MODULE_2__["UpdateModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
        _libs_splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_14__["SplashscreenModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _libs_search_search_module__WEBPACK_IMPORTED_MODULE_1__["SearchModule"],
                    _libs_update_update_module__WEBPACK_IMPORTED_MODULE_2__["UpdateModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_12__["MatToolbarModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                    _libs_splashscreen_splashscreen_module__WEBPACK_IMPORTED_MODULE_14__["SplashscreenModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', {
                        enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_33__["environment"].production
                    })
                ],
                providers: [
                    _services_api_api_service__WEBPACK_IMPORTED_MODULE_18__["ApiService"],
                    _services_apps_apps_service__WEBPACK_IMPORTED_MODULE_19__["AppsService"],
                    _services_toast_toast_service__WEBPACK_IMPORTED_MODULE_20__["ToastService"],
                    _services_users_users_service__WEBPACK_IMPORTED_MODULE_21__["UsersService"],
                    _services_config_config_service__WEBPACK_IMPORTED_MODULE_22__["ConfigService"],
                    _services_scopes_scopes_service__WEBPACK_IMPORTED_MODULE_23__["ScopesService"],
                    _services_tokens_tokens_service__WEBPACK_IMPORTED_MODULE_24__["TokensService"],
                    _services_account_account_service__WEBPACK_IMPORTED_MODULE_25__["AccountService"],
                    _services_buttons_buttons_service__WEBPACK_IMPORTED_MODULE_26__["ButtonsService"],
                    _services_filters_filters_service__WEBPACK_IMPORTED_MODULE_27__["FiltersService"],
                    _services_features_features_service__WEBPACK_IMPORTED_MODULE_29__["FeaturesService"],
                    _services_settings_settings_service__WEBPACK_IMPORTED_MODULE_28__["SettingsService"],
                    _services_form_error_form_error_service__WEBPACK_IMPORTED_MODULE_30__["FormErrorService"],
                    _services_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_31__["LocalstorageService"]
                ],
                bootstrap: [
                    _app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]
                ],
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_32__["AppComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "a6VE":
/*!***************************************************!*\
  !*** ./src/app/services/scopes/scopes.service.ts ***!
  \***************************************************/
/*! exports provided: ScopesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopesService", function() { return ScopesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api/api.service */ "oZWX");





class ScopesService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    add(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/add', params);
        });
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/get', params);
        });
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/load', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/list', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/update', params);
        });
    }
    delete(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/scopes/delete', params);
        });
    }
}
ScopesService.ɵfac = function ScopesService_Factory(t) { return new (t || ScopesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
ScopesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScopesService, factory: ScopesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScopesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: src_app_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "bS1C":
/*!*****************************************************!*\
  !*** ./src/app/services/filters/filters.service.ts ***!
  \*****************************************************/
/*! exports provided: FiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return FiltersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");




class FiltersService {
    constructor(localstorage) {
        this.localstorage = localstorage;
        this.filter = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filter.next(this.localstorage.getObject('filters', []));
    }
    ;
    get(filter) {
        let found;
        this.filter.value.map(o => {
            if (o.route == window.location.pathname) {
                found = true;
                Object.keys(o.filter).map(key => {
                    filter[key] = o.filter[key];
                });
            }
            ;
        });
        if (found) {
            this.update(filter);
        }
        else {
            this.add(filter);
        }
        ;
        return filter;
    }
    ;
    add(filter) {
        let filters = this.filter.value;
        filters.push({
            'route': window.location.pathname,
            'filter': filter
        });
        this.localstorage.setObject('filters', filters);
        this.filter.next(filters);
    }
    ;
    update(filter) {
        let filters = this.filter.value;
        filters.map(o => {
            if (o.route == window.location.pathname) {
                o.filter = filter;
            }
            ;
        });
        this.localstorage.setObject('filters', filters);
        this.filter.next(filters);
    }
    ;
}
FiltersService.ɵfac = function FiltersService_Factory(t) { return new (t || FiltersService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"])); };
FiltersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FiltersService, factory: FiltersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_2__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "dWDE":
/*!***********************************************************!*\
  !*** ./src/app/services/form-error/form-error.service.ts ***!
  \***********************************************************/
/*! exports provided: FormErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormErrorService", function() { return FormErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormErrorService {
    validationMessages() {
        const messages = {
            email: 'This email address is invalid',
            pattern: 'This field does not match the required pattern',
            required: 'This field is required',
            not_allowed_characters: (matches) => {
                let matchedCharacters = matches;
                matchedCharacters = matchedCharacters.reduce((characterString, character, index) => {
                    let string = characterString;
                    string += character;
                    if (matchedCharacters.length !== index + 1) {
                        string += ', ';
                    }
                    return string;
                }, '');
                return `These characters are not allowed: ${matchedCharacters}`;
            },
        };
        return messages;
    }
    validateForm(formToValidate, formErrors, checkDirty) {
        const form = formToValidate;
        for (const field in formErrors) {
            if (field) {
                formErrors[field] = '';
                const control = form.get(field);
                const messages = this.validationMessages();
                if (control && !control.valid) {
                    if (!checkDirty || (control.dirty || control.touched)) {
                        for (const key in control.errors) {
                            if (key && key !== 'not_allowed_characters') {
                                formErrors[field] = formErrors[field] || messages[key];
                            }
                            else {
                                formErrors[field] = formErrors[field] || messages[key](control.errors[key]);
                            }
                        }
                    }
                }
            }
        }
        return formErrors;
    }
}
FormErrorService.ɵfac = function FormErrorService_Factory(t) { return new (t || FormErrorService)(); };
FormErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormErrorService, factory: FormErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "j7lE":
/*!*************************************************!*\
  !*** ./src/app/services/users/users.service.ts ***!
  \*************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");





class UsersService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/users/list', params);
        });
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UsersService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "oZWX":
/*!*********************************************!*\
  !*** ./src/app/services/api/api.service.ts ***!
  \*********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localstorage/localstorage.service */ "WF9o");








class ApiService {
    constructor(http, router, localstorage) {
        this.http = http;
        this.router = router;
        this.localstorage = localstorage;
    }
    put(url, endpoint, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            payload.header = {
                appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appId,
                email: this.localstorage.get('email'),
                userId: parseInt(this.localstorage.get('userId'))
            };
            return yield this.http.put(url + endpoint, payload, options)
                .toPromise()
                .then(response => {
                return {
                    ok: true,
                    result: response
                };
            })
                .catch(error => {
                return this.error(error);
            });
        });
    }
    post(url, endpoint, payload) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const email = this.localstorage.get('email');
            const token = this.localstorage.get('token');
            const userId = this.localstorage.get('userId');
            if (!token || !email || !userId) {
                this.localstorage.clear();
                this.router.navigate(['/signin']);
            }
            const options = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    Authorization: token
                })
            };
            payload.header = {
                email,
                appId: src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].appId,
                userId: parseInt(userId)
            };
            return yield this.http.post(url + endpoint, payload, options)
                .toPromise()
                .then(response => {
                return {
                    ok: true,
                    result: response
                };
            })
                .catch(error => {
                return this.error(error);
            });
        });
    }
    error(error) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (error.error) {
                if (error.error.errors) {
                    error.error = error.error.errors[0];
                    if (error.code == 401) {
                        this.localstorage.clear();
                        this.router.navigate(['/signin']);
                    }
                    return error;
                }
                else {
                    return error;
                }
            }
            else {
                return error;
            }
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _localstorage_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["LocalstorageService"] }]; }, null); })();


/***/ }),

/***/ "pxzf":
/*!**********************************************!*\
  !*** ./src/app/libs/update/update.module.ts ***!
  \**********************************************/
/*! exports provided: UpdateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateModule", function() { return UpdateModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _update_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update.service */ "Eo5A");
/* harmony import */ var _update_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update.dialog */ "UATu");
/* --- MODULES --- */




/* --- SERVICES --- */

/* --- COMPONENTS --- */


class UpdateModule {
}
UpdateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UpdateModule });
UpdateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UpdateModule_Factory(t) { return new (t || UpdateModule)(); }, providers: [
        _update_service__WEBPACK_IMPORTED_MODULE_4__["UpdateService"]
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UpdateModule, { declarations: [_update_dialog__WEBPACK_IMPORTED_MODULE_5__["UpdateDialog"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"]
                ],
                providers: [
                    _update_service__WEBPACK_IMPORTED_MODULE_4__["UpdateService"]
                ],
                declarations: [
                    _update_dialog__WEBPACK_IMPORTED_MODULE_5__["UpdateDialog"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");





const routes = [
    {
        path: 'apps',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-apps-apps-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~b6ef4080"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~a26be911"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~d72942d8"), __webpack_require__.e("common"), __webpack_require__.e("pages-apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./pages/apps/apps.module */ "05Yv")).then(m => m.AppsModule)
    },
    {
        path: 'users',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-users-users-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~a26be911"), __webpack_require__.e("pages-users-users-module")]).then(__webpack_require__.bind(null, /*! ./pages/users/users.module */ "+P1L")).then(m => m.UsersModule)
    },
    {
        path: 'signin',
        loadChildren: () => Promise.all(/*! import() | pages-signin-signin-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-settings-settings-module~pages-signin-sig~0e94ab43"), __webpack_require__.e("pages-signin-signin-module")]).then(__webpack_require__.bind(null, /*! ./pages/signin/signin.module */ "9PJG")).then(m => m.SignInModule)
    },
    {
        path: 'signup',
        loadChildren: () => Promise.all(/*! import() | pages-signup-signup-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-settings-settings-module~pages-signin-sig~0e94ab43"), __webpack_require__.e("pages-signup-signup-module")]).then(__webpack_require__.bind(null, /*! ./pages/signup/signup.module */ "UUSl")).then(m => m.SignUpModule)
    },
    {
        path: 'scopes',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-scopes-scopes-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~b6ef4080"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~a26be911"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~d72942d8"), __webpack_require__.e("common"), __webpack_require__.e("pages-scopes-scopes-module")]).then(__webpack_require__.bind(null, /*! ./pages/scopes/scopes.module */ "4dGL")).then(m => m.ScopesModule)
    },
    {
        path: 'tokens',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-tokens-tokens-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~b6ef4080"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~a26be911"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~d72942d8"), __webpack_require__.e("common"), __webpack_require__.e("pages-tokens-tokens-module")]).then(__webpack_require__.bind(null, /*! ./pages/tokens/tokens.module */ "aDni")).then(m => m.TokensModule)
    },
    {
        path: 'account',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-account-account-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("common"), __webpack_require__.e("pages-account-account-module")]).then(__webpack_require__.bind(null, /*! ./pages/account/account.module */ "4+IK")).then(m => m.AccountModule)
    },
    {
        path: 'settings',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-settings-settings-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-settings-settings-module~pages-signin-sig~0e94ab43"), __webpack_require__.e("pages-settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./pages/settings/settings.module */ "yPrK")).then(m => m.SettingsModule)
    },
    {
        path: 'features',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-features-features-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-account-account-module~pages-apps-apps-module~pages-features-features-module~pages-sco~a898d783"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~b6ef4080"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~a26be911"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-token~d72942d8"), __webpack_require__.e("common"), __webpack_require__.e("pages-features-features-module")]).then(__webpack_require__.bind(null, /*! ./pages/features/features.module */ "4gMo")).then(m => m.FeaturesModule)
    },
    {
        path: 'subscribers',
        canActivate: [_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthManager"]],
        loadChildren: () => Promise.all(/*! import() | pages-subscribers-subscribers-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~38c2097b"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-scopes-scopes-module~pages-subsc~b6ef4080"), __webpack_require__.e("pages-subscribers-subscribers-module")]).then(__webpack_require__.bind(null, /*! ./pages/subscribers/subscribers.module */ "Pn0e")).then(m => m.SubscribersModule)
    },
    {
        path: 'allow-access',
        loadChildren: () => Promise.all(/*! import() | pages-allow-access-allow-access-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("common"), __webpack_require__.e("pages-allow-access-allow-access-module")]).then(__webpack_require__.bind(null, /*! ./pages/allow-access/allow-access.module */ "1Vod")).then(m => m.AllowAccessModule)
    },
    {
        path: 'request-access',
        loadChildren: () => Promise.all(/*! import() | pages-request-access-request-access-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("pages-request-access-request-access-module")]).then(__webpack_require__.bind(null, /*! ./pages/request-access/request-access.module */ "Gwy7")).then(m => m.RequestAccessModule)
    },
    {
        path: 'forgot-password',
        loadChildren: () => Promise.all(/*! import() | pages-forgot-password-forgot-password-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-settings-settings-module~pages-signin-sig~0e94ab43"), __webpack_require__.e("common"), __webpack_require__.e("pages-forgot-password-forgot-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/forgot-password/forgot-password.module */ "7CEM")).then(m => m.ForgotPasswordModule)
    },
    {
        path: 'privacy-policy',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-privacy-policy-privacy-policy-module */ "pages-privacy-policy-privacy-policy-module").then(__webpack_require__.bind(null, /*! ./pages/privacy-policy/privacy-policy.module */ "cjqQ")).then(m => m.PrivacyPolicyModule)
    },
    {
        path: 'reset-password',
        loadChildren: () => Promise.all(/*! import() | pages-reset-password-reset-password-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("common"), __webpack_require__.e("pages-reset-password-reset-password-module")]).then(__webpack_require__.bind(null, /*! ./pages/reset-password/reset-password.module */ "9nUT")).then(m => m.ResetPasswordModule)
    },
    {
        path: 'verify-account',
        loadChildren: () => Promise.all(/*! import() | pages-verify-account-verify-account-module */[__webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~426eab1c"), __webpack_require__.e("default~pages-account-account-module~pages-allow-access-allow-access-module~pages-apps-apps-module~p~69a0e2d0"), __webpack_require__.e("default~pages-apps-apps-module~pages-features-features-module~pages-forgot-password-forgot-password-~7f3d3f96"), __webpack_require__.e("default~pages-forgot-password-forgot-password-module~pages-settings-settings-module~pages-signin-sig~0e94ab43"), __webpack_require__.e("common"), __webpack_require__.e("pages-verify-account-verify-account-module")]).then(__webpack_require__.bind(null, /*! ./pages/verify-account/verify-account.module */ "Tw+5")).then(m => m.VerifyAccountModule)
    },
    {
        path: 'terms-and-conditions',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-terms-and-conditions-terms-and-conditions-module */ "pages-terms-and-conditions-terms-and-conditions-module").then(__webpack_require__.bind(null, /*! ./pages/terms-and-conditions/terms-and-conditions.module */ "cCjq")).then(m => m.TermsAndConditionsModule)
    },
    {
        path: '**',
        redirectTo: 'apps'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wJso":
/*!*******************************************************!*\
  !*** ./src/app/services/features/features.service.ts ***!
  \*******************************************************/
/*! exports provided: FeaturesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesService", function() { return FeaturesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");





class FeaturesService {
    constructor(api) {
        this.api = api;
    }
    add(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/features/add', params);
        });
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/features/get', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/features/list', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/features/update', params);
        });
    }
    delete(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/features/delete', params);
        });
    }
}
FeaturesService.ɵfac = function FeaturesService_Factory(t) { return new (t || FeaturesService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
FeaturesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FeaturesService, factory: FeaturesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FeaturesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "xyCQ":
/*!***********************************************!*\
  !*** ./src/app/services/apps/apps.service.ts ***!
  \***********************************************/
/*! exports provided: AppsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsService", function() { return AppsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/api.service */ "oZWX");





class AppsService {
    constructor(api) {
        this.api = api;
        this.data = [];
    }
    add(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/add', params);
        });
    }
    get(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/get', params);
        });
    }
    load(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/load', params);
        });
    }
    list(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/list', params);
        });
    }
    share(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/share', params);
        });
    }
    update(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/update', params);
        });
    }
    delete(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/delete', params);
        });
    }
    allowaccess(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/allow-access', params);
        });
    }
    unsubscribe(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/unsubscribe', params);
        });
    }
    requestaccess(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.put(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/request-access', params);
        });
    }
    updatesubscriber(params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.api.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].auth, '/apps/update-subscriber', params);
        });
    }
}
AppsService.ɵfac = function AppsService_Factory(t) { return new (t || AppsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
AppsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AppsService, factory: AppsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map