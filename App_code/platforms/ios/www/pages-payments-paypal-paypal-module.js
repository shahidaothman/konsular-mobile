(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-paypal-paypal-module"],{

/***/ "./src/app/pages/payments/paypal/paypal.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/paypal/paypal.module.ts ***!
  \********************************************************/
/*! exports provided: PaypalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPageModule", function() { return PaypalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _paypal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paypal.page */ "./src/app/pages/payments/paypal/paypal.page.ts");







var routes = [
    {
        path: '',
        component: _paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]
    }
];
var PaypalPageModule = /** @class */ (function () {
    function PaypalPageModule() {
    }
    PaypalPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_paypal_page__WEBPACK_IMPORTED_MODULE_6__["PaypalPage"]]
        })
    ], PaypalPageModule);
    return PaypalPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payments/paypal/paypal.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/paypal/paypal.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Paypal for App\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-card class=\"welcome-card\">\n    <ion-img src=\"/assets/images/paypal.jpg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title>PayPal Sample</ion-card-title>\n      <ion-row>\n        <ion-col>\n          Total Payment\n        </ion-col>\n        <ion-col>\n          {{currencyIcon}}{{paymentAmount}}\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content>\n      <ion-button expand=\"full\" color=\"success\" (click)=\"payWithPaypal()\">Pay with PayPal App</ion-button>\n    </ion-card-content>\n  </ion-card>\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n    </ion-list-header>\n    <ion-item href=\"https://ionicframework.com/docs/native/paypal\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n      <ion-label>Paypal Plugin Documentation</ion-label>\n    </ion-item>\n    <ion-item href=\"https://github.com/paypal/PayPal-Cordova-Plugin\">\n      <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n      <ion-label>Paypal Plugin Repository</ion-label>\n    </ion-item>\n\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/payments/paypal/paypal.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/paypal/paypal.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXltZW50cy9wYXlwYWwvcGF5cGFsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnRzL3BheXBhbC9wYXlwYWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/payments/paypal/paypal.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/payments/paypal/paypal.page.ts ***!
  \******************************************************/
/*! exports provided: PaypalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaypalPage", function() { return PaypalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ "./node_modules/@ionic-native/paypal/ngx/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");




var PaypalPage = /** @class */ (function () {
    function PaypalPage(payPal, util) {
        this.payPal = payPal;
        this.util = util;
        this.paymentAmount = '3.33';
        this.currency = 'USD';
        this.currencyIcon = '$';
    }
    PaypalPage.prototype.ngOnInit = function () {
    };
    PaypalPage.prototype.payWithPaypal = function () {
        var _this = this;
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'AQ9rF4VKkHkfnS1IzUDTliE201-NxOTzdVuVbBhEY1rPp4gQbbWuo7X5Dve8fdDMHp6tPr5JMnT8J9iI'
        }).then(function () {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            _this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalConfiguration"]({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(function () {
                var payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPalPayment"](_this.paymentAmount, _this.currency, 'Description', 'sale');
                _this.payPal.renderSinglePaymentUI(payment).then(function (res) {
                    console.log(res);
                    // Successfully paid
                }, function (error) {
                    console.log('error', error);
                    _this.util.showToast(error, 'danger', 'bottom');
                    // Error or render dialog closed without being successful
                });
            }, function (error) {
                console.log('error', error);
                _this.util.showToast(error, 'danger', 'bottom');
                // Error in configuration
            });
        }, function (error) {
            console.log('error', error);
            _this.util.showToast(error, 'danger', 'bottom');
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    };
    PaypalPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-paypal',
            template: __webpack_require__(/*! ./paypal.page.html */ "./src/app/pages/payments/paypal/paypal.page.html"),
            styles: [__webpack_require__(/*! ./paypal.page.scss */ "./src/app/pages/payments/paypal/paypal.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__["PayPal"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], PaypalPage);
    return PaypalPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payments-paypal-paypal-module.js.map