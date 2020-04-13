(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-progress-bar-progress-bar-module"],{

/***/ "./src/app/pages/ionicComponents/progress-bar/progress-bar.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/progress-bar/progress-bar.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProgressBarPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPageModule", function() { return ProgressBarPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress-bar.page */ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]
    }
];
var ProgressBarPageModule = /** @class */ (function () {
    function ProgressBarPageModule() {
    }
    ProgressBarPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_progress_bar_page__WEBPACK_IMPORTED_MODULE_6__["ProgressBarPage"]]
        })
    ], ProgressBarPageModule);
    return ProgressBarPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/progress-bar/progress-bar.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Progress Bar Range\"></app-header>\n\n<ion-content padding>\n\n    <ion-progress-bar [value]=\"porcentaje\"></ion-progress-bar>\n\n    <ion-list>\n        <ion-item>\n            <ion-range (ionChange)=\"cambioRango($event)\" min=\"1\" max=\"100\" pin=\"true\" color=\"tertiary\">\n                <ion-label slot=\"start\">0</ion-label>\n                <ion-label slot=\"end\">100</ion-label>\n            </ion-range>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/progress-bar/progress-bar.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9wcm9ncmVzcy1iYXIvcHJvZ3Jlc3MtYmFyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/progress-bar/progress-bar.page.ts ***!
  \*************************************************************************/
/*! exports provided: ProgressBarPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBarPage", function() { return ProgressBarPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressBarPage = /** @class */ (function () {
    function ProgressBarPage() {
        this.porcentaje = 0.05;
    }
    ProgressBarPage.prototype.ngOnInit = function () {
    };
    ProgressBarPage.prototype.cambioRango = function (event) {
        console.log(event);
        this.porcentaje = event.detail.value / 100;
    };
    ProgressBarPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress-bar',
            template: __webpack_require__(/*! ./progress-bar.page.html */ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.html"),
            styles: [__webpack_require__(/*! ./progress-bar.page.scss */ "./src/app/pages/ionicComponents/progress-bar/progress-bar.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressBarPage);
    return ProgressBarPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-progress-bar-progress-bar-module.js.map