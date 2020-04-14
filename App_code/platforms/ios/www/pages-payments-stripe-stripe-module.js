(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-stripe-stripe-module"],{

/***/ "./src/app/pages/payments/stripe/stripe.module.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/stripe/stripe.module.ts ***!
  \********************************************************/
/*! exports provided: StripePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePageModule", function() { return StripePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stripe_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stripe.page */ "./src/app/pages/payments/stripe/stripe.page.ts");







var routes = [
    {
        path: '',
        component: _stripe_page__WEBPACK_IMPORTED_MODULE_6__["StripePage"]
    }
];
var StripePageModule = /** @class */ (function () {
    function StripePageModule() {
    }
    StripePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stripe_page__WEBPACK_IMPORTED_MODULE_6__["StripePage"]]
        })
    ], StripePageModule);
    return StripePageModule;
}());



/***/ }),

/***/ "./src/app/pages/payments/stripe/stripe.page.html":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/stripe/stripe.page.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header hidenav-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" (click)=\"addNewCard()\">\n      <ion-icon slot=\"md-add-circle\" name=\"md-add\"></ion-icon>\n    </ion-buttons>\n    <ion-title>\n      Payment With Stripe\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div class=\"div_content\">\n    <div *ngIf=\"!cards?.length\">\n      <p text-center>No Card Found Please Add Card</p>\n    </div>\n    <ion-radio-group>\n      <ion-item class=\"div_inner\" no-lines *ngFor=\"let card of cards;let i = index\">\n        <ion-thumbnail slot=\"end\">\n          <img src=\"assets/images/visa.png\" class=\"img_visa\" />\n          <!-- <ion-label>{{card.brand}}</ion-label> -->\n        </ion-thumbnail>\n        <ion-radio checked=\"{{ i == 0 ? 'true' : 'false' }}\" (ionSelect)=\"changeMethod(card.id)\" [value]=\"card.id\"\n          slot=\"start\"></ion-radio>\n        <ion-label>XXXX{{card.last4}} <br> Expiry {{card.exp_month}} / {{card.exp_year}}</ion-label>\n      </ion-item>\n    </ion-radio-group>\n    <ion-button expand=\"block\" *ngIf=\"cards?.length\" class=\"btn_addcard\" (click)=\"payment()\">Pay $ {{price}}\n    </ion-button>\n\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/payments/stripe/stripe.page.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/payments/stripe/stripe.page.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn_right {\n  position: relative;\n  z-index: 999999; }\n\n.img_menu {\n  width: 17px;\n  position: absolute;\n  right: 20px; }\n\n.div_content {\n  width: 100%;\n  padding-left: 20px;\n  padding-right: 20px; }\n\n.div_content .div_inner {\n    width: 100%;\n    margin-top: 15px;\n    padding-bottom: 15px; }\n\n.div_content .div_inner .r {\n      position: absolute;\n      top: 50%;\n      transform: translateY(-50%); }\n\n.div_content .div_inner .lbl_number {\n      display: block;\n      font-family: amazon-bold;\n      font-size: 17px;\n      color: gray;\n      margin-left: 10px; }\n\n.div_content .div_inner .img_visa {\n      float: right;\n      position: absolute;\n      top: 50%;\n      display: block;\n      font-family: amazon-bold;\n      font-size: 17px;\n      color: gray;\n      margin-left: 10px;\n      transform: translateY(-50%);\n      height: 15px !important;\n      width: 50px !important; }\n\n.btn_addcard {\n  margin-top: 30px;\n  --box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXltZW50cy9zdHJpcGUvc3RyaXBlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUVsQixlQUFlLEVBQUE7O0FBRW5CO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBRWY7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUh2QjtJQU1RLFdBQVc7SUFFWCxnQkFBZ0I7SUFDaEIsb0JBQW9CLEVBQUE7O0FBVDVCO01BWVksa0JBQWtCO01BQ2xCLFFBQVE7TUFDUiwyQkFBMkIsRUFBQTs7QUFkdkM7TUFpQlksY0FBYztNQUNkLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsV0FBVztNQUNYLGlCQUFpQixFQUFBOztBQXJCN0I7TUF3QlksWUFBWTtNQUNaLGtCQUFrQjtNQUNsQixRQUFRO01BQ1AsY0FBYztNQUNmLHdCQUF3QjtNQUN4QixlQUFlO01BQ2YsV0FBVztNQUNYLGlCQUFpQjtNQUNqQiwyQkFBMkI7TUFDM0IsdUJBQXVCO01BQ3ZCLHNCQUFzQixFQUFBOztBQUlqQztFQUNPLGdCQUFnQjtFQUNoQiw2QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGF5bWVudHMvc3RyaXBlL3N0cmlwZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuX3JpZ2h0e1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvLyBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk5OTk5O1xufVxuLmltZ19tZW51e1xuICAgIHdpZHRoOiAxN3B4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMjBweDtcbn1cbi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC5kaXZfaW5uZXJ7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvLyBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGxpZ2h0Z3JheTtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAgICAgLnJ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgfVxuICAgICAgICAubGJsX251bWJlcntcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IGFtYXpvbi1ib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuaW1nX3Zpc2F7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBhbWF6b24tYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4gLmJ0bl9hZGRjYXJke1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAtLWJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/payments/stripe/stripe.page.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/payments/stripe/stripe.page.ts ***!
  \******************************************************/
/*! exports provided: StripePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StripePage", function() { return StripePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");







var StripePage = /** @class */ (function () {
    function StripePage(stripe, router, http, iab, util) {
        this.stripe = stripe;
        this.router = router;
        this.http = http;
        this.iab = iab;
        this.util = util;
        this.card_token = "NA";
        this.price = 100;
    }
    StripePage.prototype.ngOnInit = function () {
    };
    StripePage.prototype.getCards = function () {
        //**************************************************************************************************************************** */
        //For Testing we have used localStorage, but you can use ionic native storage
        //**************************************************************************************************************************** */
        var _this = this;
        if (localStorage.getItem("scuid") != undefined && localStorage.getItem('scuid') != 'undefined') {
            var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
            header.set('access-control-allow-credentials', 'true');
            header.set('access-control-allow-methods', 'GET, POST, HEAD, OPTIONS, DELETE');
            header.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
            //Set your secret key here
            header.set('Authorization', 'Bearer sk_test_pChXbEkjJrFMu6nC80sqiIFP');
            var option = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: header });
            this.http.get('https://api.stripe.com/v1/customers/' + localStorage.getItem("scuid") + '/sources?object=card', option)
                .subscribe(function (datas) {
                var data = datas.json();
                console.log(data);
                _this.cards = data.data;
                _this.card_token = _this.cards[0].id;
                _this.isEnabled = false;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            this.isEnabled = true;
        }
    };
    StripePage.prototype.ionViewWillEnter = function () {
        this.getCards();
    };
    StripePage.prototype.addNewCard = function () {
        this.router.navigate(['add-new-card']);
    };
    StripePage.prototype.changeMethod = function (id) {
        console.log('change', id);
        this.card_token = id;
    };
    StripePage.prototype.payment = function () {
        //Charge API with Private Key and Secret key as Bearer Token
        this.stripe.setPublishableKey('pk_test_H3zJI5SaNFKCfB1VBNpEYHQ1');
        var url = 'https://api.stripe.com/v1/charges';
        var options = {
            amount: this.price * 100,
            currency: "usd",
            customer: localStorage.getItem("scuid"),
            card: this.card_token,
        };
        this.post(url, "sk_test_pChXbEkjJrFMu6nC80sqiIFP", options);
    };
    StripePage.prototype.post = function (url, key, options) {
        var _this = this;
        var data = new URLSearchParams(options);
        for (var i in options)
            data.set(i, options[i]);
        var header = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["Headers"]();
        header.set('access-control-allow-credentials', 'true');
        header.set('access-control-allow-methods', 'GET, POST, HEAD, OPTIONS, DELETE');
        header.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
        header.set('Authorization', 'Bearer ' + key);
        var option = new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ headers: header });
        var temp = data.toString().split("&");
        console.log(temp);
        this.http.post(url, temp.join("&"), option)
            .subscribe(function (res) {
            console.log(res);
            var data = res.json();
            console.log('datas', data);
            _this.util.showToast('Payment Success', 'success', 'bottom');
            // this.openReciepe(data.receipt_url);
        }, function (error) {
            console.log(error);
        });
    };
    StripePage.prototype.openReciepe = function (url) {
        try {
            var options = void 0;
            options = {
                location: 'no',
                clearcache: 'yes',
                zoom: 'yes',
                toolbar: 'yes',
                closebuttoncaption: 'close'
            };
            this.iab.create(url, '_blank', options);
        }
        catch (e) {
            console.log('error');
        }
    };
    StripePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stripe',
            template: __webpack_require__(/*! ./stripe.page.html */ "./src/app/pages/payments/stripe/stripe.page.html"),
            styles: [__webpack_require__(/*! ./stripe.page.scss */ "./src/app/pages/payments/stripe/stripe.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]])
    ], StripePage);
    return StripePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payments-stripe-stripe-module.js.map