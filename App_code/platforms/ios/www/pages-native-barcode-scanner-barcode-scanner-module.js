(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-native-barcode-scanner-barcode-scanner-module"],{

/***/ "./src/app/pages/native/barcode-scanner/barcode-scanner.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/native/barcode-scanner/barcode-scanner.module.ts ***!
  \************************************************************************/
/*! exports provided: BarcodeScannerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPageModule", function() { return BarcodeScannerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./barcode-scanner.page */ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.ts");







var routes = [
    {
        path: '',
        component: _barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeScannerPage"]
    }
];
var BarcodeScannerPageModule = /** @class */ (function () {
    function BarcodeScannerPageModule() {
    }
    BarcodeScannerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_barcode_scanner_page__WEBPACK_IMPORTED_MODULE_6__["BarcodeScannerPage"]]
        })
    ], BarcodeScannerPageModule);
    return BarcodeScannerPageModule;
}());



/***/ }),

/***/ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/native/barcode-scanner/barcode-scanner.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Barcode</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"scan()\">\n      <p>Scan</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"generate()\">\n      <p>Generate</p>\n    </div>\n  </ion-list>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/native/barcode-scanner/barcode-scanner.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25hdGl2ZS9iYXJjb2RlLXNjYW5uZXIvYmFyY29kZS1zY2FubmVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/native/barcode-scanner/barcode-scanner.page.ts ***!
  \**********************************************************************/
/*! exports provided: BarcodeScannerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarcodeScannerPage", function() { return BarcodeScannerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");




var BarcodeScannerPage = /** @class */ (function () {
    function BarcodeScannerPage(barcodeScanner, util) {
        this.barcodeScanner = barcodeScanner;
        this.util = util;
    }
    BarcodeScannerPage.prototype.ngOnInit = function () {
    };
    BarcodeScannerPage.prototype.scan = function () {
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            console.log('Barcode data', barcodeData);
            _this.util.showToast(barcodeData.text, 'success', 'bottom');
        }).catch(function (err) {
            console.log('Error', err);
        });
    };
    BarcodeScannerPage.prototype.generate = function () {
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, 'https://play.google.com/store/apps/details?id=io.ionic4.app').then(function (data) {
            console.log('generated', data);
        }).catch(function (error) {
            console.log('error', error);
        });
    };
    BarcodeScannerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-barcode-scanner',
            template: __webpack_require__(/*! ./barcode-scanner.page.html */ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.html"),
            styles: [__webpack_require__(/*! ./barcode-scanner.page.scss */ "./src/app/pages/native/barcode-scanner/barcode-scanner.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], BarcodeScannerPage);
    return BarcodeScannerPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-native-barcode-scanner-barcode-scanner-module.js.map