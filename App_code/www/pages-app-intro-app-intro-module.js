(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-app-intro-app-intro-module"],{

/***/ "./src/app/pages/app-intro/app-intro.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/app-intro/app-intro.module.ts ***!
  \*****************************************************/
/*! exports provided: AppIntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIntroPageModule", function() { return AppIntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _app_intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-intro.page */ "./src/app/pages/app-intro/app-intro.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








var routes = [
    {
        path: '',
        component: _app_intro_page__WEBPACK_IMPORTED_MODULE_6__["AppIntroPage"]
    }
];
var AppIntroPageModule = /** @class */ (function () {
    function AppIntroPageModule() {
    }
    AppIntroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivFeatureDiscoveryModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivIconModule"]
            ],
            declarations: [_app_intro_page__WEBPACK_IMPORTED_MODULE_6__["AppIntroPage"]]
        })
    ], AppIntroPageModule);
    return AppIntroPageModule;
}());



/***/ }),

/***/ "./src/app/pages/app-intro/app-intro.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/app-intro/app-intro.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button>\n        <fiv-icon #back=\"fivFeature\" [fivFeature]=\"backContent\" [featurePadding]=\"fp\" [contentOffset]=\"co\"\n          slot=\"icon-only\" [name]=\"'arrow-back'\" (click)=\"navigateBack()\">\n        </fiv-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button fill=\"outline\" shape=\"round\" color=\"light\" #tour=\"fivFeature\" [fivFeature]=\"tourContent\"\n        [featurePadding]=\"fp\" [contentOffset]=\"co\" (click)=\"fab.show()\">\n        TOUR\n      </ion-button>\n    </ion-buttons>\n    <ion-title>App Tour</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-grid fixed>\n    <ion-row>\n      <ion-col sizeXl=\"10\" offsetXl=\"1\" sizeLg=\"10\" offsetLg=\"1\" sizeMd=\"12\" sizeXs=\"12\" offsetXs=\"0\" offsetSm=\"0\"\n        offsetMd=\"0\" sizeSm=\"12\" sizeMd=\"12\">\n        <ion-item-divider>\n          <ion-label>Example</ion-label>\n        </ion-item-divider>\n        <ion-button shape=\"round\" color=\"secondary\" (click)=\"tour.show()\">\n          Open Feature\n        </ion-button>\n        <ion-list>\n          <ion-item>\n            <ion-label>Feature Radius</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-range [(ngModel)]=\"fp\" min=\"0\" max=\"200\" color=\"secondary\">\n              <ion-label slot=\"start\">small</ion-label>\n              <ion-label slot=\"end\">big</ion-label>\n            </ion-range>\n          </ion-item>\n          <ion-item>\n            <ion-label>Content</ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-range [(ngModel)]=\"co\" min=\"-50\" max=\"50\" color=\"secondary\">\n              <ion-label slot=\"start\">narrow</ion-label>\n              <ion-label slot=\"end\">wide</ion-label>\n            </ion-range>\n          </ion-item>\n        </ion-list>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button color=\"primary\" (click)=\"log('FAB Clicked')\">\n      <!-- use the fiv-icon for cool icon effect -->\n      <fiv-icon #fab=\"fivFeature\" [fivFeature]=\"fabContent\" [featurePadding]=\"fp\" [contentOffset]=\"co\" name=\"add\"\n        (fivFeatureClick)=\"log('feature click')\" (fivWillOpen)=\"log('fiv will open')\" (fivOpen)=\"log('fiv open')\"\n        (fivWillClose)=\"log('fiv will close')\" (fivClose)=\"log('fiv close')\">\n      </fiv-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n\n<ng-template #backContent>\n  <div padding>\n    <ion-text color=\"light\">\n      <h1>Go Back</h1>\n      <p>Leave this page by clicking the back arrow.</p>\n    </ion-text>\n    <ion-buttons>\n      <ion-button (click)=\"back.hide(); fab.show()\" color=\"light\" shape=\"round\" fill=\"outline\">\n        <ion-icon slot=\"start\" name=\"arrow-back\"></ion-icon>\n        PREVIOUS\n      </ion-button>\n      <ion-button color=\"light\" shape=\"round\" fill=\"outline\" (click)=\"back.hide()\">\n        FINISH\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ng-template>\n\n<ng-template #fabContent>\n  <div padding>\n    <ion-text color=\"light\">\n      <h1>This is a FAB</h1>\n      <p>Click this Button to do some cool stuff.</p>\n    </ion-text>\n    <ion-buttons>\n      <ion-button color=\"light\" shape=\"round\" fill=\"outline\" (click)=\"fab.hide(); back.show()\">\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n        NEXT\n      </ion-button>\n    </ion-buttons>\n  </div>\n</ng-template>\n\n<ng-template #tourContent>\n  <div padding>\n    <ion-text color=\"light\">\n      <h1>Take the Tour</h1>\n      <p>You can also build a little feature tour.</p>\n    </ion-text>\n  </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/pages/app-intro/app-intro.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/app-intro/app-intro.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FwcC1pbnRyby9hcHAtaW50cm8ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/app-intro/app-intro.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/app-intro/app-intro.page.ts ***!
  \***************************************************/
/*! exports provided: AppIntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppIntroPage", function() { return AppIntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AppIntroPage = /** @class */ (function () {
    function AppIntroPage(navController) {
        this.navController = navController;
        this.fp = 20;
        this.co = 20;
    }
    AppIntroPage.prototype.ngOnInit = function () {
    };
    AppIntroPage.prototype.log = function (s) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    AppIntroPage.prototype.navigateBack = function () {
        this.navController.back();
    };
    AppIntroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-app-intro',
            template: __webpack_require__(/*! ./app-intro.page.html */ "./src/app/pages/app-intro/app-intro.page.html"),
            styles: [__webpack_require__(/*! ./app-intro.page.scss */ "./src/app/pages/app-intro/app-intro.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], AppIntroPage);
    return AppIntroPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-app-intro-app-intro-module.js.map