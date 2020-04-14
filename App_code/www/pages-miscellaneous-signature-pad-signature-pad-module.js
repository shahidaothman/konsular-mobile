(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscellaneous-signature-pad-signature-pad-module"],{

/***/ "./src/app/pages/miscellaneous/signature-pad/signature-pad.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/signature-pad/signature-pad.module.ts ***!
  \***************************************************************************/
/*! exports provided: SignaturePadPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturePadPageModule", function() { return SignaturePadPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _signature_pad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signature-pad.page */ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.ts");







var routes = [
    {
        path: '',
        component: _signature_pad_page__WEBPACK_IMPORTED_MODULE_6__["SignaturePadPage"]
    }
];
var SignaturePadPageModule = /** @class */ (function () {
    function SignaturePadPageModule() {
    }
    SignaturePadPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signature_pad_page__WEBPACK_IMPORTED_MODULE_6__["SignaturePadPage"]]
        })
    ], SignaturePadPageModule);
    return SignaturePadPageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.html":
/*!***************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/signature-pad/signature-pad.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Signature</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"sign_block\">\n    <img *ngIf=\"signature !=''\" [src]=\"signature\" class=\"sign\">\n  </div>\n  <ion-button (click)=\"open()\" expand=\"block\">\n    Create Signature\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.scss":
/*!***************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/signature-pad/signature-pad.page.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sign_block {\n  height: 200px;\n  width: 100%;\n  border: 1px dashed lightgray; }\n  .sign_block .sign {\n    height: 150px;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9taXNjZWxsYW5lb3VzL3NpZ25hdHVyZS1wYWQvc2lnbmF0dXJlLXBhZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLDRCQUE0QixFQUFBO0VBSGhDO0lBS1EsYUFBYTtJQUNiLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21pc2NlbGxhbmVvdXMvc2lnbmF0dXJlLXBhZC9zaWduYXR1cmUtcGFkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWduX2Jsb2Nre1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAuc2lnbntcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.ts":
/*!*************************************************************************!*\
  !*** ./src/app/pages/miscellaneous/signature-pad/signature-pad.page.ts ***!
  \*************************************************************************/
/*! exports provided: SignaturePadPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignaturePadPage", function() { return SignaturePadPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_modals_signature_picker_signature_picker_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modals/signature-picker/signature-picker.page */ "./src/app/modals/signature-picker/signature-picker.page.ts");




var SignaturePadPage = /** @class */ (function () {
    function SignaturePadPage(modalCtrl) {
        this.modalCtrl = modalCtrl;
        this.signature = '';
    }
    SignaturePadPage.prototype.ngOnInit = function () {
    };
    SignaturePadPage.prototype.open = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalCtrl.create({
                            component: src_app_modals_signature_picker_signature_picker_page__WEBPACK_IMPORTED_MODULE_3__["SignaturePickerPage"],
                            showBackdrop: true,
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (signature) {
                            var signatures = localStorage.getItem('signature');
                            if (signatures && signatures != null && signatures != 'null') {
                                _this.signature = signatures;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SignaturePadPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signature-pad',
            template: __webpack_require__(/*! ./signature-pad.page.html */ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.html"),
            styles: [__webpack_require__(/*! ./signature-pad.page.scss */ "./src/app/pages/miscellaneous/signature-pad/signature-pad.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
    ], SignaturePadPage);
    return SignaturePadPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-miscellaneous-signature-pad-signature-pad-module.js.map