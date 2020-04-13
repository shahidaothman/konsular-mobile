(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firebase-module"],{

/***/ "./src/app/pages/firebase/firebase.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/firebase/firebase.module.ts ***!
  \***************************************************/
/*! exports provided: FirebasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasePageModule", function() { return FirebasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firebase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase.page */ "./src/app/pages/firebase/firebase.page.ts");







var routes = [
    {
        path: '',
        component: _firebase_page__WEBPACK_IMPORTED_MODULE_6__["FirebasePage"]
    }
];
var FirebasePageModule = /** @class */ (function () {
    function FirebasePageModule() {
    }
    FirebasePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firebase_page__WEBPACK_IMPORTED_MODULE_6__["FirebasePage"]]
        })
    ], FirebasePageModule);
    return FirebasePageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/firebase.page.html":
/*!***************************************************!*\
  !*** ./src/app/pages/firebase/firebase.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase CRUD\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"firebaseLogin()\">\n      <p>Firebase Login</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"firebaseSignup()\">\n      <p>Firebase Signup</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"firebaseList()\">\n      <p>Firebase List</p>\n    </div>\n\n    <div class=\"box\" id=\"g4\" (click)=\"firebaseimageUpload()\">\n      <p>Firebase Image Upload</p>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/firebase.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/firebase/firebase.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmViYXNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/firebase/firebase.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/firebase/firebase.page.ts ***!
  \*************************************************/
/*! exports provided: FirebasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebasePage", function() { return FirebasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var FirebasePage = /** @class */ (function () {
    function FirebasePage(router) {
        this.router = router;
    }
    FirebasePage.prototype.ngOnInit = function () {
    };
    FirebasePage.prototype.firebaseLogin = function () {
        this.router.navigate(['firebase-auth']);
    };
    FirebasePage.prototype.firebaseSignup = function () {
        this.router.navigate(['firebase-sign-up']);
    };
    FirebasePage.prototype.firebaseList = function () {
        this.router.navigate(['firebaselist']);
    };
    FirebasePage.prototype.firebaseimageUpload = function () {
        this.router.navigate(['fireimage']);
    };
    FirebasePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firebase',
            template: __webpack_require__(/*! ./firebase.page.html */ "./src/app/pages/firebase/firebase.page.html"),
            styles: [__webpack_require__(/*! ./firebase.page.scss */ "./src/app/pages/firebase/firebase.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FirebasePage);
    return FirebasePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-firebase-module.js.map