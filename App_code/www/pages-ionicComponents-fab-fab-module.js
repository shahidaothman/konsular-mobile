(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-fab-fab-module"],{

/***/ "./src/app/pages/ionicComponents/fab/fab.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/fab/fab.module.ts ***!
  \*********************************************************/
/*! exports provided: FabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPageModule", function() { return FabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fab.page */ "./src/app/pages/ionicComponents/fab/fab.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]
    }
];
var FabPageModule = /** @class */ (function () {
    function FabPageModule() {
    }
    FabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fab_page__WEBPACK_IMPORTED_MODULE_6__["FabPage"]]
        })
    ], FabPageModule);
    return FabPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/fab/fab.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/fab/fab.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Fab Page\"></app-header>\n<ion-content>\n\n    <ion-fab slot=\"fixed\" vertical=\"bottom\" horizontal=\"end\">\n\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n\n        <ion-fab-list side=\"top\">\n            <ion-fab-button color=\"facebook\">\n                <ion-icon name=\"logo-facebook\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"twitter\">\n                <ion-icon name=\"logo-twitter\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"youtube\">\n                <ion-icon name=\"logo-youtube\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab-list>\n\n        <ion-fab-list side=\"start\">\n            <ion-fab-button color=\"vimeo\">\n                <ion-icon name=\"logo-vimeo\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"google\">\n                <ion-icon name=\"logo-google\"></ion-icon>\n            </ion-fab-button>\n            <ion-fab-button color=\"github\">\n                <ion-icon name=\"logo-github\"></ion-icon>\n            </ion-fab-button>\n\n        </ion-fab-list>\n\n    </ion-fab>\n\n    <ion-list>\n        <ion-item *ngFor=\"let i of data; let index = index\">\n            Item {{ index + 1}}\n        </ion-item>\n\n    </ion-list>\n\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <ion-title>My Footer</ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/fab/fab.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/ionicComponents/fab/fab.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9mYWIvZmFiLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/fab/fab.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/ionicComponents/fab/fab.page.ts ***!
  \*******************************************************/
/*! exports provided: FabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FabPage", function() { return FabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FabPage = /** @class */ (function () {
    function FabPage() {
        this.data = Array(100);
    }
    FabPage.prototype.ngOnInit = function () {
    };
    FabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fab',
            template: __webpack_require__(/*! ./fab.page.html */ "./src/app/pages/ionicComponents/fab/fab.page.html"),
            styles: [__webpack_require__(/*! ./fab.page.scss */ "./src/app/pages/ionicComponents/fab/fab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FabPage);
    return FabPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-fab-fab-module.js.map