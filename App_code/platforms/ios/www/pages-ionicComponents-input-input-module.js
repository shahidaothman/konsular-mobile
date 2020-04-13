(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-input-input-module"],{

/***/ "./src/app/pages/ionicComponents/input/input.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ionicComponents/input/input.module.ts ***!
  \*************************************************************/
/*! exports provided: InputPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPageModule", function() { return InputPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _input_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input.page */ "./src/app/pages/ionicComponents/input/input.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]
    }
];
var InputPageModule = /** @class */ (function () {
    function InputPageModule() {
    }
    InputPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_input_page__WEBPACK_IMPORTED_MODULE_6__["InputPage"]]
        })
    ], InputPageModule);
    return InputPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/input/input.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/ionicComponents/input/input.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"Input\"></app-header>\n\n<ion-content>\n\n    <ion-list>\n\n        <ion-list-header>\n            <ion-label>First name: {{ fname || 'There is no name'}}</ion-label>\n        </ion-list-header>\n\n        <ion-item>\n            <ion-label position=\"floating\">First Name</ion-label>\n            <ion-input type=\"text\" [(ngModel)]=\"fname\"></ion-input>\n        </ion-item>\n\n    </ion-list>\n\n\n    <form #forms=\"ngForm\" (ngSubmit)=\"onSubmitTemplate()\">\n\n        <ion-list>\n\n\n            <ion-list-header>\n                <ion-label>Form Template: Valid {{ forms.valid}}</ion-label>\n            </ion-list-header>\n            <ion-item>\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input name=\"email\" type=\"email\"\n                    pattern=\"^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$\" [(ngModel)]=\"user.email\"\n                    required></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label position=\"floating\">Password</ion-label>\n                <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"user.password\" required></ion-input>\n            </ion-item>\n        </ion-list>\n\n        <ion-button expand=\"full\" type=\"submit\" [disabled]=\"forms.invalid\">Submit</ion-button>\n\n    </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/input/input.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/ionicComponents/input/input.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9pbnB1dC9pbnB1dC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/input/input.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/ionicComponents/input/input.page.ts ***!
  \***********************************************************/
/*! exports provided: InputPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputPage", function() { return InputPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");



var InputPage = /** @class */ (function () {
    function InputPage(util) {
        this.util = util;
        this.user = {
            email: '',
            password: ''
        };
    }
    InputPage.prototype.ngOnInit = function () {
    };
    InputPage.prototype.onSubmitTemplate = function () {
        console.log('onSubmitTemplate()');
        console.log(this.user);
        this.util.showToast('submitted', 'success', 'bottom');
    };
    InputPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: __webpack_require__(/*! ./input.page.html */ "./src/app/pages/ionicComponents/input/input.page.html"),
            styles: [__webpack_require__(/*! ./input.page.scss */ "./src/app/pages/ionicComponents/input/input.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], InputPage);
    return InputPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-input-input-module.js.map