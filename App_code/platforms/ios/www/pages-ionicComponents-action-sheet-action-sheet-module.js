(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-action-sheet-action-sheet-module"],{

/***/ "./src/app/pages/ionicComponents/action-sheet/action-sheet.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/action-sheet/action-sheet.module.ts ***!
  \***************************************************************************/
/*! exports provided: ActionSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPageModule", function() { return ActionSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _action_sheet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./action-sheet.page */ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _action_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPage"]
    }
];
var ActionSheetPageModule = /** @class */ (function () {
    function ActionSheetPageModule() {
    }
    ActionSheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_action_sheet_page__WEBPACK_IMPORTED_MODULE_6__["ActionSheetPage"]]
        })
    ], ActionSheetPageModule);
    return ActionSheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/action-sheet/action-sheet.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header title=\"ActionSheet\">\n</app-header>\n<ion-content padding>\n    <!-- <ion-button class=\"box\" id=\"g1\" (click)=\"presentActionSheet()\" expand=\"full\" color=\"primary\">\n        Show Action Sheet\n    </ion-button> -->\n\n    <ion-list lines=\"none\">\n        <ion-item>\n            <ion-label text-center>Resources</ion-label>\n        </ion-item>\n        <div class=\"box\" id=\"g1\" (click)=\"presentActionSheet()\">\n            <p>Show Action Sheet</p>\n        </div>\n    </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/action-sheet/action-sheet.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9hY3Rpb24tc2hlZXQvYWN0aW9uLXNoZWV0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/action-sheet/action-sheet.page.ts ***!
  \*************************************************************************/
/*! exports provided: ActionSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionSheetPage", function() { return ActionSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ActionSheetPage = /** @class */ (function () {
    function ActionSheetPage(actionSheetController) {
        this.actionSheetController = actionSheetController;
    }
    ActionSheetPage.prototype.ngOnInit = function () {
    };
    ActionSheetPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Albums',
                            backdropDismiss: false,
                            buttons: [{
                                    text: 'Delete',
                                    role: 'destructive',
                                    icon: 'trash',
                                    cssClass: 'rojos',
                                    handler: function () {
                                        console.log('Delete clicked');
                                    }
                                }, {
                                    text: 'Share',
                                    icon: 'share',
                                    handler: function () {
                                        console.log('Share clicked');
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ActionSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-action-sheet',
            template: __webpack_require__(/*! ./action-sheet.page.html */ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.html"),
            styles: [__webpack_require__(/*! ./action-sheet.page.scss */ "./src/app/pages/ionicComponents/action-sheet/action-sheet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]])
    ], ActionSheetPage);
    return ActionSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-action-sheet-action-sheet-module.js.map