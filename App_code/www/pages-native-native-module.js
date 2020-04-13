(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-native-module"],{

/***/ "./src/app/pages/native/native.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/native/native.module.ts ***!
  \***********************************************/
/*! exports provided: NativePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativePageModule", function() { return NativePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _native_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./native.page */ "./src/app/pages/native/native.page.ts");







var routes = [
    {
        path: '',
        component: _native_page__WEBPACK_IMPORTED_MODULE_6__["NativePage"]
    }
];
var NativePageModule = /** @class */ (function () {
    function NativePageModule() {
    }
    NativePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_native_page__WEBPACK_IMPORTED_MODULE_6__["NativePage"]]
        })
    ], NativePageModule);
    return NativePageModule;
}());



/***/ }),

/***/ "./src/app/pages/native/native.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/native/native.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Native API</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n\n    <div class=\"box\" id=\"g1\" (click)=\"scan()\">\n      <p>Barcode Scanner</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"maps()\">\n      <p>Google Maps</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"googelLogin()\">\n      <p>Google Login</p>\n    </div>\n    <!-- <div class=\"box\" id=\"g5\" (click)=\"fbLogin()\">\n      <p>Facebook Login</p>\n    </div> -->\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/native/native.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/native/native.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS9uYXRpdmUucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/native/native.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/native/native.page.ts ***!
  \*********************************************/
/*! exports provided: NativePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativePage", function() { return NativePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var NativePage = /** @class */ (function () {
    function NativePage(router) {
        this.router = router;
    }
    NativePage.prototype.ngOnInit = function () {
    };
    NativePage.prototype.scan = function () {
        this.router.navigate(['barcode-scanner']);
    };
    NativePage.prototype.maps = function () {
        this.router.navigate(['maps']);
    };
    NativePage.prototype.googelLogin = function () {
        this.router.navigate(['google-login']);
    };
    NativePage.prototype.fbLogin = function () {
        this.router.navigate(['facebook-login']);
    };
    NativePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-native',
            template: __webpack_require__(/*! ./native.page.html */ "./src/app/pages/native/native.page.html"),
            styles: [__webpack_require__(/*! ./native.page.scss */ "./src/app/pages/native/native.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NativePage);
    return NativePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-native-module.js.map