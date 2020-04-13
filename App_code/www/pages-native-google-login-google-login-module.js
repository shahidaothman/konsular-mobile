(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-google-login-google-login-module"],{

/***/ "./src/app/pages/native/google-login/google-login.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/native/google-login/google-login.module.ts ***!
  \******************************************************************/
/*! exports provided: GoogleLoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPageModule", function() { return GoogleLoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _google_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-login.page */ "./src/app/pages/native/google-login/google-login.page.ts");







var routes = [
    {
        path: '',
        component: _google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]
    }
];
var GoogleLoginPageModule = /** @class */ (function () {
    function GoogleLoginPageModule() {
    }
    GoogleLoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_google_login_page__WEBPACK_IMPORTED_MODULE_6__["GoogleLoginPage"]]
        })
    ], GoogleLoginPageModule);
    return GoogleLoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/native/google-login/google-login.page.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/native/google-login/google-login.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Google Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"login()\">\n      <p>Login</p>\n    </div>\n\n  </ion-list>\n  <!-- <ion-button (click)=\"login()\" color=\"secondary\" expand=\"block\">\n    Login\n  </ion-button> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/native/google-login/google-login.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/native/google-login/google-login.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS9nb29nbGUtbG9naW4vZ29vZ2xlLWxvZ2luLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/native/google-login/google-login.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/native/google-login/google-login.page.ts ***!
  \****************************************************************/
/*! exports provided: GoogleLoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginPage", function() { return GoogleLoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");




var GoogleLoginPage = /** @class */ (function () {
    /**
     * Fore more https://ionicthemes.com/tutorials/about/ionic-google-login
     */
    function GoogleLoginPage(googlePlus, util) {
        this.googlePlus = googlePlus;
        this.util = util;
    }
    GoogleLoginPage.prototype.ngOnInit = function () {
    };
    GoogleLoginPage.prototype.login = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            _this.util.showToast('Successs ' + res.displayName, 'success', 'bottom');
        })
            .catch(function (err) {
            console.error(err);
            _this.util.showErrorAlert(err);
        });
    };
    GoogleLoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-google-login',
            template: __webpack_require__(/*! ./google-login.page.html */ "./src/app/pages/native/google-login/google-login.page.html"),
            styles: [__webpack_require__(/*! ./google-login.page.scss */ "./src/app/pages/native/google-login/google-login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_2__["GooglePlus"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], GoogleLoginPage);
    return GoogleLoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-google-login-google-login-module.js.map