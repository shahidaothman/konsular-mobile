(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-stepper-stepper-module"],{

/***/ "./src/app/pages/stepper/stepper.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.module.ts ***!
  \*************************************************/
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
/* harmony import */ var _stepper_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stepper.page */ "./src/app/pages/stepper/stepper.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








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
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivStepperModule"]
            ],
            declarations: [_stepper_page__WEBPACK_IMPORTED_MODULE_6__["StepperPage"]]
        })
    ], StepperPageModule);
    return StepperPageModule;
}());



/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.html":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Steppers\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label>Vertical Stepper</ion-label>\n  </ion-item-divider>\n  <ion-item line=\"none\">\n    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n  </ion-item>\n  <div class=\"wrapper\">\n    <fiv-stepper #stepperV [mode]=\"'vertical'\" (fivClick)=\"stepperV.open($event)\">\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"dark\" (click)=\"stepperV.closeAll()\">\n                Close\n              </ion-button>\n              <ion-button color=\"dark\" (click)=\"stepperV.reset(0)\">\n                reset\n              </ion-button>\n              <ion-button color=\"secondary\" (click)=\"stepperV.completeStep(0)\">\n                Complete\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"stepperV.select(1)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"dark\" (click)=\"stepperV.select(0)\">\n                Previous\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"stepperV.select(2)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"dark\" (click)=\"stepperV.select(1)\">\n                Previous\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"stepperV.select(0)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n    </fiv-stepper>\n  </div>\n  <ion-item-divider>\n    <ion-label>Horizontal Stepper</ion-label>\n  </ion-item-divider>\n  <ion-item line=\"none\">\n    Lorem ipsum dolor sit amet, consectetur adipisici elit, sed eiusmod tempor.\n  </ion-item>\n  <div class=\"wrapper\">\n    <fiv-stepper #stepper [mode]=\"'horizontal'\">\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n        <ion-card class=\"card-horizontal\">\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"primary\" (click)=\"stepper.select(1)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <fiv-step [title]=\"'Address'\" [subtitle]=\"'Please enter your adress'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"dark\" (click)=\"stepper.select(0)\">\n                Previous\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"stepper.select(2)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <fiv-step [title]=\"'Awesome Title'\" [subtitle]=\"'Awesome Subtitle'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Subtitle</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\">\n              <ion-button color=\"dark\" (click)=\"stepper.select(1)\">\n                Previous\n              </ion-button>\n              <ion-button color=\"primary\" (click)=\"stepper.select(0)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n    </fiv-stepper>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-item-divider {\n  border-bottom: 0; }\n\nion-item {\n  --border-style: none; }\n\n.card-horizontal {\n  min-width: 80%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9zdGVwcGVyL3N0ZXBwZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksb0JBQWUsRUFBQTs7QUFHbkI7RUFDSSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGVwcGVyL3N0ZXBwZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0tZGl2aWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4uY2FyZC1ob3Jpem9udGFse1xuICAgIG1pbi13aWR0aDogODAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/stepper/stepper.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/stepper/stepper.page.ts ***!
  \***********************************************/
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
            template: __webpack_require__(/*! ./stepper.page.html */ "./src/app/pages/stepper/stepper.page.html"),
            styles: [__webpack_require__(/*! ./stepper.page.scss */ "./src/app/pages/stepper/stepper.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StepperPage);
    return StepperPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-stepper-stepper-module.js.map