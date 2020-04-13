(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiles-profiles-module"],{

/***/ "./src/app/pages/profiles/profiles.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.module.ts ***!
  \***************************************************/
/*! exports provided: ProfilesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPageModule", function() { return ProfilesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profiles_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profiles.page */ "./src/app/pages/profiles/profiles.page.ts");







var routes = [
    {
        path: '',
        component: _profiles_page__WEBPACK_IMPORTED_MODULE_6__["ProfilesPage"]
    }
];
var ProfilesPageModule = /** @class */ (function () {
    function ProfilesPageModule() {
    }
    ProfilesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_profiles_page__WEBPACK_IMPORTED_MODULE_6__["ProfilesPage"]]
        })
    ], ProfilesPageModule);
    return ProfilesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Profile Pages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"example('1')\">\n      <p>Layout 1</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"example('2')\">\n      <p>Layout 2</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"example('3')\">\n      <p>Layout 3</p>\n    </div>\n    <!-- <div class=\"box\" id=\"g4\" (click)=\"example('4')\">\n      <p>Layout 4</p>\n    </div> -->\n    <div class=\"box\" id=\"g5\" (click)=\"example('5')\">\n      <p>Layout 4</p>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGVzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profiles/profiles.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profiles/profiles.page.ts ***!
  \*************************************************/
/*! exports provided: ProfilesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilesPage", function() { return ProfilesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfilesPage = /** @class */ (function () {
    function ProfilesPage(router) {
        this.router = router;
    }
    ProfilesPage.prototype.ngOnInit = function () {
    };
    ProfilesPage.prototype.example = function (id) {
        this.router.navigate(['profile-layout', id]);
    };
    ProfilesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profiles',
            template: __webpack_require__(/*! ./profiles.page.html */ "./src/app/pages/profiles/profiles.page.html"),
            styles: [__webpack_require__(/*! ./profiles.page.scss */ "./src/app/pages/profiles/profiles.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfilesPage);
    return ProfilesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profiles-profiles-module.js.map