(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-test-test-module"],{

/***/ "./src/app/pages/ionicComponents/test/test.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/test/test.module.ts ***!
  \***********************************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/ionicComponents/test/test.page.ts");







var routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"],
        children: [
            {
                path: 'abroad',
                loadChildren: '../abroad/abroad.module#AbroadPageModule'
            },
            {
                path: 'contact',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'register',
                loadChildren: '../profile-user/profile-user.module#ProfileUserPageModule'
            }
        ]
    }
];
var TestPageModule = /** @class */ (function () {
    function TestPageModule() {
    }
    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
        })
    ], TestPageModule);
    return TestPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/test/test.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/test/test.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar color=\"secondary\" slot=\"bottom\">\n    <ion-tab-button tab=\"abroad\">\n      <ion-icon name=\"person\"></ion-icon>\n      <ion-label>Abroad</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"contact\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-label>Contact</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"register\">\n      <ion-icon name=\"settings\"></ion-icon>\n      <ion-label>register</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/test/test.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/test/test.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy90ZXN0L3Rlc3QucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/test/test.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/test/test.page.ts ***!
  \*********************************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestPage = /** @class */ (function () {
    function TestPage() {
    }
    TestPage.prototype.ngOnInit = function () {
    };
    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.page.html */ "./src/app/pages/ionicComponents/test/test.page.html"),
            styles: [__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/ionicComponents/test/test.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestPage);
    return TestPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-test-test-module.js.map