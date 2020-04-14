(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-landing-page-landing-page-module"],{

/***/ "./src/app/pages/ionicComponents/landing-page/landing-page.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/landing-page/landing-page.module.ts ***!
  \***************************************************************************/
/*! exports provided: LandingPagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function() { return LandingPagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page.page */ "./src/app/pages/ionicComponents/landing-page/landing-page.page.ts");







var routes = [
    {
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]
    }
];
var LandingPagePageModule = /** @class */ (function () {
    function LandingPagePageModule() {
    }
    LandingPagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
        })
    ], LandingPagePageModule);
    return LandingPagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/landing-page/landing-page.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/landing-page/landing-page.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"login-logo\">\n    <img src=\"assets/images/logo_white.png\" alt=\"Ionic logo\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <!-- <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\n        <ion-input [(ngModel)]=\"login.email\" name=\"email\" type=\"email\" #email=\"ngModel\" spellcheck=\"false\"\n          autocapitalize=\"off\" required>\n        </ion-input>\n\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text> \n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [type]=\"passwordType\" #password=\"ngModel\" required>\n        </ion-input>\n        <ion-icon [name]=\"passwordIcon\" slot=\"end\" (click)='hideShowPassword()'></ion-icon>\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list> -->\n\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btn_class\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"login()\">Login\n        </ion-button>\n        <br>\n        <ion-button class=\"btn_class\" fill=\"outline\" type=\"submit\" expand=\"block\" (click)=\"register()\">SignUp\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/landing-page/landing-page.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/landing-page/landing-page.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: url('loginbg.jpeg') no-repeat 100% 100%  linear-gradient(-230deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n  background-image: linear-gradient(-230deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.2));\n  background-color: #2850a3;\n  background-size: cover;\n  position: absolute; }\n\n:host .backButton {\n  margin-top: 10px;\n  background: transparent; }\n\n:host .login-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center; }\n\n:host .btn_class {\n  height: 50px; }\n\n:host .login-logo img {\n  max-width: 300px; }\n\n:host .list {\n  margin-bottom: 0; }\n\n:host ion-list {\n  --ion-background-color:transparent; }\n\n:host ion-item {\n  --ion-background-color:#f4f5f8;\n  border-radius: 35px !important;\n  padding: 10px;\n  box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.14);\n  --border-color: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxxSEFBYTtFQUNiLGdGQUFnRjtFQUNoRix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGtCQUFrQixFQUFBOztBQU4xQjtFQVdRLGdCQUFnQjtFQUNoQix1QkFDSixFQUFBOztBQWJKO0VBZVEsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFqQjFCO0VBb0JRLFlBQVksRUFBQTs7QUFwQnBCO0VBdUJTLGdCQUFnQixFQUFBOztBQXZCekI7RUEwQlEsZ0JBQWdCLEVBQUE7O0FBMUJ4QjtFQTZCUSxrQ0FBdUIsRUFBQTs7QUE3Qi9CO0VBZ0NTLDhCQUF1QjtFQUN4Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLGlEQUFpRDtFQUMvQywyQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2xvZ2luYmcuanBlZycpIG5vLXJlcGVhdCAxMDAlIDEwMCUgIGxpbmVhci1ncmFkaWVudCgtMjMwZGVnLCByZ2JhKDAsIDAsIDAsIDApLCByZ2JhKDAsIDAsIDAsIDAuMikpO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTIzMGRlZywgcmdiYSgwLCAwLCAwLCAwKSwgcmdiYSgwLCAwLCAwLCAwLjIpKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMjg1MGEzIDsgXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLmJhY2tCdXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgcGFkZGluZzogMjBweCAwO1xuICAgICAgICBtaW4taGVpZ2h0OiAyMDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgIGlvbi1saXN0e1xuICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICAgIH1cbiAgICBpb24taXRlbXtcbiAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2Y0ZjVmODtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzVweCAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMTBweCAyNXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpO1xuICAgICAgICAgIC0tYm9yZGVyLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/landing-page/landing-page.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/landing-page/landing-page.page.ts ***!
  \*************************************************************************/
/*! exports provided: LandingPagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPagePage", function() { return LandingPagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");




var LandingPagePage = /** @class */ (function () {
    function LandingPagePage(util, router) {
        this.util = util;
        this.router = router;
    }
    LandingPagePage.prototype.ngOnInit = function () {
    };
    LandingPagePage.prototype.login = function () {
        console.log('simple login');
        this.router.navigate(['simple']);
    };
    LandingPagePage.prototype.register = function () {
        console.log('simple login');
        this.router.navigate(['register-user']);
    };
    LandingPagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.page.html */ "./src/app/pages/ionicComponents/landing-page/landing-page.page.html"),
            styles: [__webpack_require__(/*! ./landing-page.page.scss */ "./src/app/pages/ionicComponents/landing-page/landing-page.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LandingPagePage);
    return LandingPagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-landing-page-landing-page-module.js.map