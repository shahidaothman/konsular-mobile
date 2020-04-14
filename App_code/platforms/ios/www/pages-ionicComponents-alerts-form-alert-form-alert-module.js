(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-alerts-form-alert-form-alert-module"],{

/***/ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/form-alert/form-alert.module.ts ***!
  \******************************************************************************/
/*! exports provided: FormAlertPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlertPageModule", function() { return FormAlertPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_alert_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form-alert.page */ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.ts");







var routes = [
    {
        path: '',
        component: _form_alert_page__WEBPACK_IMPORTED_MODULE_6__["FormAlertPage"]
    }
];
var FormAlertPageModule = /** @class */ (function () {
    function FormAlertPageModule() {
    }
    FormAlertPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_form_alert_page__WEBPACK_IMPORTED_MODULE_6__["FormAlertPage"]]
        })
    ], FormAlertPageModule);
    return FormAlertPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.html":
/*!******************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Form Alerts\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"presentAlertPrompt()\">\n      <p>Prompt Alert</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"presentAlertRadio()\">\n      <p>Radio Alert</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"presentAlertCheckbox()\">\n      <p>Checkbox Alert</p>\n    </div>\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.scss":
/*!******************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.box {\n  height: 50px;\n  margin-bottom: 20px;\n  border-radius: 15px; }\n\n.box p {\n  line-height: 50px;\n  font-size: 1em;\n  color: white;\n  text-align: center;\n  font-weight: bold; }\n\n/* Gradient 1 */\n\n#g1 {\n  background: linear-gradient(90deg, #69b7eb, #b3dbd3, #f4d6db); }\n\n/* Gradient 2 */\n\n#g2 {\n  background: linear-gradient(90deg, #cfecd0, #ffc5ca); }\n\n/* Gradient 3 */\n\n#g3 {\n  background: linear-gradient(90deg, #f598a8, #f6edb2); }\n\n/* Gradient 4 */\n\n#g4 {\n  background: linear-gradient(90deg, #ee5c87, #f1a4b5, #d587b3); }\n\n/* Gradient 5 */\n\n#g5 {\n  background: linear-gradient(90deg, #b9deed, #efefef); }\n\n/* Gradient 6 */\n\n#g6 {\n  background: linear-gradient(90deg, #aea4e3, #d3ffe8); }\n\n/* Gradient 7 */\n\n#g7 {\n  background: linear-gradient(90deg, #faf0cd, #fab397); }\n\n/* Gradient 8 */\n\n#g8 {\n  background: linear-gradient(90deg, #cfecd0, #a0cea7, #9ec0db); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvYWxlcnRzL2Zvcm0tYWxlcnQvZm9ybS1hbGVydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7O0FBR25CLGVBQUE7O0FBQ0E7RUFDRSw2REFBNkQsRUFBQTs7QUFHL0QsZUFBQTs7QUFDQTtFQUNFLG9EQUFvRCxFQUFBOztBQUd0RCxlQUFBOztBQUNBO0VBQ0Usb0RBQW9ELEVBQUE7O0FBR3RELGVBQUE7O0FBQ0E7RUFDRSw2REFBNkQsRUFBQTs7QUFHL0QsZUFBQTs7QUFDQTtFQUNFLG9EQUFvRCxFQUFBOztBQUd0RCxlQUFBOztBQUNBO0VBQ0Usb0RBQW9ELEVBQUE7O0FBR3RELGVBQUE7O0FBQ0E7RUFDRSxvREFBb0QsRUFBQTs7QUFHdEQsZUFBQTs7QUFDQTtFQUNFLDZEQUE2RCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL2FsZXJ0cy9mb3JtLWFsZXJ0L2Zvcm0tYWxlcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmJveCB7XG4gIGhlaWdodDogNTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcbn1cblxuLmJveCBwIHtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIEdyYWRpZW50IDEgKi9cbiNnMSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzY5YjdlYiwgI2IzZGJkMywgI2Y0ZDZkYik7XG59XG5cbi8qIEdyYWRpZW50IDIgKi9cbiNnMiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NmZWNkMCwgI2ZmYzVjYSk7XG59XG5cbi8qIEdyYWRpZW50IDMgKi9cbiNnMyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y1OThhOCwgI2Y2ZWRiMik7XG59XG5cbi8qIEdyYWRpZW50IDQgKi9cbiNnNCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2VlNWM4NywgI2YxYTRiNSwgI2Q1ODdiMyk7XG59XG5cbi8qIEdyYWRpZW50IDUgKi9cbiNnNSB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2I5ZGVlZCwgI2VmZWZlZik7XG59XG5cbi8qIEdyYWRpZW50IDYgKi9cbiNnNiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2FlYTRlMywgI2QzZmZlOCk7XG59XG5cbi8qIEdyYWRpZW50IDcgKi9cbiNnNyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhZjBjZCwgI2ZhYjM5Nyk7XG59XG5cbi8qIEdyYWRpZW50IDggKi9cbiNnOCB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2NmZWNkMCwgI2EwY2VhNywgIzllYzBkYik7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.ts ***!
  \****************************************************************************/
/*! exports provided: FormAlertPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAlertPage", function() { return FormAlertPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../providers/util.service */ "./src/app/providers/util.service.ts");




var FormAlertPage = /** @class */ (function () {
    function FormAlertPage(alertController, utilProvider) {
        this.alertController = alertController;
        this.utilProvider = utilProvider;
    }
    FormAlertPage.prototype.ngOnInit = function () {
    };
    FormAlertPage.prototype.presentAlertPrompt = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Prompt!',
                            inputs: [
                                {
                                    name: 'name1',
                                    type: 'text',
                                    placeholder: 'Placeholder 1'
                                },
                                {
                                    name: 'name2',
                                    type: 'text',
                                    id: 'name2-id',
                                    value: 'hello',
                                    placeholder: 'Placeholder 2'
                                },
                                {
                                    name: 'name3',
                                    value: 'http://ionicframework.com',
                                    type: 'url',
                                    placeholder: 'Favorite site ever'
                                },
                                // input date with min & max
                                {
                                    name: 'name4',
                                    type: 'date',
                                    min: '2017-03-01',
                                    max: '2018-01-12'
                                },
                                // input date without min nor max
                                {
                                    name: 'name5',
                                    type: 'date'
                                },
                                {
                                    name: 'name6',
                                    type: 'number',
                                    min: -5,
                                    max: 10
                                },
                                {
                                    name: 'name7',
                                    type: 'number'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                        console.log('Confirm Cancel', data);
                                        _this.utilProvider.showToast('No Data', 'danger', 'bottom');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data);
                                        _this.utilProvider.showToast(JSON.stringify(data), 'success', 'bottom');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormAlertPage.prototype.presentAlertRadio = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Radio',
                            inputs: [
                                {
                                    name: 'radio1',
                                    type: 'radio',
                                    label: 'Radio 1',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'radio2',
                                    type: 'radio',
                                    label: 'Radio 2',
                                    value: 'value2'
                                },
                                {
                                    name: 'radio3',
                                    type: 'radio',
                                    label: 'Radio 3',
                                    value: 'value3'
                                },
                                {
                                    name: 'radio4',
                                    type: 'radio',
                                    label: 'Radio 4',
                                    value: 'value4'
                                },
                                {
                                    name: 'radio5',
                                    type: 'radio',
                                    label: 'Radio 5',
                                    value: 'value5'
                                },
                                {
                                    name: 'radio6',
                                    type: 'radio',
                                    label: 'Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 Radio 6 ',
                                    value: 'value6'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                        console.log('Confirm Cancel', data);
                                        _this.utilProvider.showToast('No Data', 'danger', 'bottom');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data);
                                        _this.utilProvider.showToast(data, 'success', 'bottom');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormAlertPage.prototype.presentAlertCheckbox = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Checkbox',
                            inputs: [
                                {
                                    name: 'checkbox1',
                                    type: 'checkbox',
                                    label: 'Checkbox 1',
                                    value: 'value1',
                                    checked: true
                                },
                                {
                                    name: 'checkbox2',
                                    type: 'checkbox',
                                    label: 'Checkbox 2',
                                    value: 'value2'
                                },
                                {
                                    name: 'checkbox3',
                                    type: 'checkbox',
                                    label: 'Checkbox 3',
                                    value: 'value3'
                                },
                                {
                                    name: 'checkbox4',
                                    type: 'checkbox',
                                    label: 'Checkbox 4',
                                    value: 'value4'
                                },
                                {
                                    name: 'checkbox5',
                                    type: 'checkbox',
                                    label: 'Checkbox 5',
                                    value: 'value5'
                                },
                                {
                                    name: 'checkbox6',
                                    type: 'checkbox',
                                    label: 'Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6 Checkbox 6',
                                    value: 'value6'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (data) {
                                        console.log('Confirm Cancel', data);
                                        _this.utilProvider.showToast('No Data', 'danger', 'bottom');
                                    }
                                }, {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log('Confirm Ok', data);
                                        _this.utilProvider.showToast(data, 'success', 'bottom');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormAlertPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form-alert',
            template: __webpack_require__(/*! ./form-alert.page.html */ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.html"),
            styles: [__webpack_require__(/*! ./form-alert.page.scss */ "./src/app/pages/ionicComponents/alerts/form-alert/form-alert.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], FormAlertPage);
    return FormAlertPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-alerts-form-alert-form-alert-module.js.map