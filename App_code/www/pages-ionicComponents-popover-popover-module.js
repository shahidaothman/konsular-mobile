(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-popover-popover-module"],{

/***/ "./src/app/pages/ionicComponents/popover/popover.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/popover/popover.module.ts ***!
  \*****************************************************************/
/*! exports provided: PopoverPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPageModule", function() { return PopoverPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _popover_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./popover.page */ "./src/app/pages/ionicComponents/popover/popover.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");









var routes = [
    {
        path: '',
        component: _popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]
    }
];
var PopoverPageModule = /** @class */ (function () {
    function PopoverPageModule() {
    }
    PopoverPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [
                _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_8__["PopinfoComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_popover_page__WEBPACK_IMPORTED_MODULE_6__["PopoverPage"]]
        })
    ], PopoverPageModule);
    return PopoverPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/popover/popover.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/popover/popover.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref='/'></ion-back-button>\n        </ion-buttons>\n        <ion-title>Popover</ion-title>\n        <ion-buttons slot=\"end\">\n            <ion-button (click)=\"show( $event )\">\n                <ion-icon name=\"contact\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </ion-toolbar>\n</ion-header>\n<ion-content padding>\n    <ion-button expand=\"full\" color=\"secondary\" (click)=\"show( $event )\">\n        <ion-icon name=\"contact\" slot=\"start\"></ion-icon>\n        <ion-label>Popover</ion-label>\n    </ion-button>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar color=\"secondary\">\n        <ion-buttons slot=\"start\">\n            <ion-button (click)=\"show( $event )\">\n                <ion-icon name=\"contact\" slot=\"icon-only\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Footer</ion-title>\n    </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/popover/popover.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/popover/popover.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9wb3BvdmVyL3BvcG92ZXIucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/popover/popover.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/popover/popover.page.ts ***!
  \***************************************************************/
/*! exports provided: PopoverPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverPage", function() { return PopoverPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/popinfo/popinfo.component */ "./src/app/components/popinfo/popinfo.component.ts");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");





var PopoverPage = /** @class */ (function () {
    function PopoverPage(popoverController, util) {
        this.popoverController = popoverController;
        this.util = util;
    }
    PopoverPage.prototype.ngOnInit = function () {
    };
    PopoverPage.prototype.show = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover, data;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _components_popinfo_popinfo_component__WEBPACK_IMPORTED_MODULE_3__["PopinfoComponent"],
                            event: event,
                            mode: 'ios',
                            backdropDismiss: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, popover.onWillDismiss()];
                    case 3:
                        data = (_a.sent()).data;
                        console.log('data: ', data);
                        this.util.showToast(data.item, 'success', 'bottom');
                        return [2 /*return*/];
                }
            });
        });
    };
    PopoverPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__(/*! ./popover.page.html */ "./src/app/pages/ionicComponents/popover/popover.page.html"),
            styles: [__webpack_require__(/*! ./popover.page.scss */ "./src/app/pages/ionicComponents/popover/popover.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"], src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])
    ], PopoverPage);
    return PopoverPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-popover-popover-module.js.map