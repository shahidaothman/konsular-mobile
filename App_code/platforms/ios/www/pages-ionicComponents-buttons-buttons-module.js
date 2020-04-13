(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-buttons-buttons-module"],{

/***/ "./src/app/pages/ionicComponents/buttons/buttons.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/buttons/buttons.module.ts ***!
  \*****************************************************************/
/*! exports provided: ButtonsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPageModule", function() { return ButtonsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _buttons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./buttons.page */ "./src/app/pages/ionicComponents/buttons/buttons.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]
    }
];
var ButtonsPageModule = /** @class */ (function () {
    function ButtonsPageModule() {
    }
    ButtonsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_buttons_page__WEBPACK_IMPORTED_MODULE_6__["ButtonsPage"]]
        })
    ], ButtonsPageModule);
    return ButtonsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/buttons/buttons.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/buttons/buttons.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar color=\"secondary\">\n\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"> </ion-back-button>\n    </ion-buttons>\n\n\n\n    <ion-title>Buttons</ion-title>\n\n    <ion-buttons slot=\"end\">\n\n      <ion-button color=\"primary\">\n        <ion-icon name=\"heart\"></ion-icon>\n      </ion-button>\n\n      <ion-button color=\"danger\">\n        <ion-icon name=\"star\"></ion-icon>\n      </ion-button>\n\n    </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <!-- botones  normales -->\n\n  <ion-button size=\"small\" expand=\"full\">Small</ion-button>\n  <ion-button size=\"dafault\" expand=\"full\">Default</ion-button>\n  <ion-button size=\"large\" expand=\"full\">Large</ion-button>\n\n  <!-- anchor -->\n  <ion-button class=\"top-20\" expand=\"full\" [routerLink]=\"['/']\" color=\"tertiary\">\n    Home\n  </ion-button>\n\n  <!-- ion-row ion-col -->\n\n  <ion-row class=\"top-20\">\n    <ion-col>\n      <ion-button expand=\"full\" [routerLink]=\"['/alerts']\" color=\"tertiary\">\n        Alert\n      </ion-button>\n    </ion-col>\n    <ion-col>\n      <ion-button expand=\"full\" [routerLink]=\"['/']\" color=\"tertiary\">\n        home\n      </ion-button>\n    </ion-col>\n  </ion-row>\n\n  <!-- fill -->\n\n  <ion-button class=\"top-20\" fill=\"clear\">Clear</ion-button>\n  <ion-button class=\"top-20\" fill=\"outline\">Outline</ion-button>\n  <ion-button class=\"top-20\" fill=\"solid\">Solid</ion-button>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/buttons/buttons.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/buttons/buttons.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top-20 {\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvYnV0dG9ucy9idXR0b25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL2J1dHRvbnMvYnV0dG9ucy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wLTIwIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/buttons/buttons.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/buttons/buttons.page.ts ***!
  \***************************************************************/
/*! exports provided: ButtonsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonsPage", function() { return ButtonsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonsPage = /** @class */ (function () {
    function ButtonsPage() {
    }
    ButtonsPage.prototype.ngOnInit = function () {
    };
    ButtonsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__(/*! ./buttons.page.html */ "./src/app/pages/ionicComponents/buttons/buttons.page.html"),
            styles: [__webpack_require__(/*! ./buttons.page.scss */ "./src/app/pages/ionicComponents/buttons/buttons.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonsPage);
    return ButtonsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-buttons-buttons-module.js.map