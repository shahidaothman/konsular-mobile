(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-stepper-stepper-module"],{

/***/ "./src/app/pages/ionicComponents/stepper/stepper.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/stepper/stepper.module.ts ***!
  \*****************************************************************/
/*! exports provided: StepperPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPageModule", function() { return StepperPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper.page */ "./src/app/pages/ionicComponents/stepper/stepper.page.ts");







var routes = [
    {
        path: '',
        component: _stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]
    }
];
var StepperPageModule = /** @class */ (function () {
    function StepperPageModule() {
    }
    StepperPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]]
        })
    ], StepperPageModule);
    return StepperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/stepper/stepper.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/stepper/stepper.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>stepper</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/ionicComponents/stepper/stepper.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/stepper/stepper.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9zdGVwcGVyL3N0ZXBwZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/stepper/stepper.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/stepper/stepper.page.ts ***!
  \***************************************************************/
/*! exports provided: StepperPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperPage", function() { return StepperPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StepperPage = /** @class */ (function () {
    function StepperPage() {
    }
    StepperPage.prototype.ngOnInit = function () {
    };
    StepperPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stepper',
            template: __webpack_require__(/*! ./stepper.page.html */ "./src/app/pages/ionicComponents/stepper/stepper.page.html"),
            styles: [__webpack_require__(/*! ./stepper.page.scss */ "./src/app/pages/ionicComponents/stepper/stepper.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StepperPage);
    return StepperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-stepper-stepper-module.js.map