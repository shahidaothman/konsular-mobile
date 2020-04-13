(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coming-coming-module"],{

/***/ "./src/app/pages/coming/coming.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/coming/coming.module.ts ***!
  \***********************************************/
/*! exports provided: ComingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingPageModule", function() { return ComingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _coming_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coming.page */ "./src/app/pages/coming/coming.page.ts");







var routes = [
    {
        path: '',
        component: _coming_page__WEBPACK_IMPORTED_MODULE_6__["ComingPage"]
    }
];
var ComingPageModule = /** @class */ (function () {
    function ComingPageModule() {
    }
    ComingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_coming_page__WEBPACK_IMPORTED_MODULE_6__["ComingPage"]]
        })
    ], ComingPageModule);
    return ComingPageModule;
}());



/***/ }),

/***/ "./src/app/pages/coming/coming.page.html":
/*!***********************************************!*\
  !*** ./src/app/pages/coming/coming.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Coming Soon.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"assets/images/coming.jpg\">\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/coming/coming.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/coming/coming.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbWluZy9jb21pbmcucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/coming/coming.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/coming/coming.page.ts ***!
  \*********************************************/
/*! exports provided: ComingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComingPage", function() { return ComingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ComingPage = /** @class */ (function () {
    function ComingPage() {
    }
    ComingPage.prototype.ngOnInit = function () {
    };
    ComingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coming',
            template: __webpack_require__(/*! ./coming.page.html */ "./src/app/pages/coming/coming.page.html"),
            styles: [__webpack_require__(/*! ./coming.page.scss */ "./src/app/pages/coming/coming.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ComingPage);
    return ComingPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-coming-coming-module.js.map