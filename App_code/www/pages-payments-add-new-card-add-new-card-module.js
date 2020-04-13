(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payments-add-new-card-add-new-card-module"],{

/***/ "./src/app/pages/payments/add-new-card/add-new-card.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/payments/add-new-card/add-new-card.module.ts ***!
  \********************************************************************/
/*! exports provided: AddNewCardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCardPageModule", function() { return AddNewCardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_new_card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-new-card.page */ "./src/app/pages/payments/add-new-card/add-new-card.page.ts");







var routes = [
    {
        path: '',
        component: _add_new_card_page__WEBPACK_IMPORTED_MODULE_6__["AddNewCardPage"]
    }
];
var AddNewCardPageModule = /** @class */ (function () {
    function AddNewCardPageModule() {
    }
    AddNewCardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_new_card_page__WEBPACK_IMPORTED_MODULE_6__["AddNewCardPage"]]
        })
    ], AddNewCardPageModule);
    return AddNewCardPageModule;
}());



/***/ }),

/***/ "./src/app/pages/payments/add-new-card/add-new-card.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/payments/add-new-card/add-new-card.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header hidenav-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Card\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"div_content\">\n    <ion-label class=\"lbl_card\">Your Credit / Debit Card</ion-label>\n\n    <div class=\"div_card\">\n      <ion-row>\n        <ion-col size=\"12\">\n          <ion-input type=\"email\" placeholder=\"demo@gmail.com\" [(ngModel)]=\"email\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">Email Addresss</ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"number\" placeholder=\"424242*********4242\" [(ngModel)]=\"cnumber\" class=\"input_all\">\n          </ion-input>\n          <ion-label class=\"card_number\">Card Number</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <img src=\"assets/images/visa.png\" class=\"img_visa\" />\n        </ion-col>\n      </ion-row>\n\n\n      <ion-row style=\"margin-top : 20px;\">\n        <ion-col size=\"6\">\n          <ion-input type=\"text\" placeholder=\"Joe\" [(ngModel)]=\"cname\" class=\"input_all\"></ion-input>\n          <ion-label class=\"card_number\">Card Holder Name</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-datetime min=\"2019\" max=\"2030\" display-format=\"MMM, YYYY\" [(ngModel)]=\"date\" class=\"input_date\"\n            placeholder=\"Jan, 2019\">\n          </ion-datetime>\n          <ion-label class=\"card_number\">Expiration Date</ion-label>\n        </ion-col>\n      </ion-row>\n    </div>\n\n    <ion-label class=\"lbl_card\">CVC</ion-label>\n    <ion-input type=\"number\" [(ngModel)]=\"cvc\" class=\"in_cvc\"></ion-input>\n\n    <ion-button expand=\"full\" color=\"secondary\" class=\"btn_addcard\" (click)=\"addcard()\">ADD CARD</ion-button>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/payments/add-new-card/add-new-card.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/payments/add-new-card/add-new-card.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_content {\n  width: 100%;\n  padding-left: 25px;\n  padding-right: 25px; }\n  .div_content .lbl_card {\n    font-size: 16px;\n    display: block;\n    color: gray;\n    margin-top: 15px; }\n  .div_content .div_card {\n    margin-top: 20px;\n    width: 100%;\n    border: 1px solid gray;\n    border-radius: 5px;\n    padding: 20px; }\n  .div_content .div_card .input_all {\n      font-size: 10px; }\n  .div_content .div_card .input_date {\n      font-size: 10px;\n      padding: 0px !important;\n      color: black; }\n  .div_content .div_card /deep/ .native-input.sc-ion-input-md {\n      padding-bottom: 2px !important;\n      padding-left: 0px !important;\n      padding-top: 0px !important; }\n  .div_content .div_card /deep/ .native-input.sc-ion-input-ios {\n      padding-bottom: 2px !important;\n      padding-left: 0px !important;\n      padding-top: 0px !important; }\n  .div_content .div_card .card_number {\n      font-size: 10px;\n      color: gray; }\n  .div_content .div_card .img_visa {\n      float: right; }\n  .div_content .in_cvc {\n    border: 1px solid gray;\n    margin-top: 15px;\n    border-radius: 5px;\n    width: 135px;\n    text-align: center;\n    font-size: 10px; }\n  .div_content .btn_addcard {\n    margin-top: 30px;\n    --box-shadow: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXltZW50cy9hZGQtbmV3LWNhcmQvYWRkLW5ldy1jYXJkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7RUFIdkI7SUFNUSxlQUFlO0lBQ2YsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0IsRUFBQTtFQVR4QjtJQVlRLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixhQUFhLEVBQUE7RUFoQnJCO01BbUJZLGVBQWUsRUFBQTtFQW5CM0I7TUF1QlksZUFBZTtNQUNmLHVCQUF1QjtNQUN2QixZQUFZLEVBQUE7RUF6QnhCO01BNkJZLDhCQUE4QjtNQUM5Qiw0QkFBNEI7TUFDNUIsMkJBQ0osRUFBQTtFQWhDUjtNQWtDWSw4QkFBOEI7TUFDOUIsNEJBQTRCO01BQzVCLDJCQUNKLEVBQUE7RUFyQ1I7TUF1Q1ksZUFBZTtNQUNmLFdBQVcsRUFBQTtFQXhDdkI7TUEyQ1ksWUFBWSxFQUFBO0VBM0N4QjtJQWdEUSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWUsRUFBQTtFQXJEdkI7SUF5RFEsZ0JBQWdCO0lBQ2hCLDZCQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50cy9hZGQtbmV3LWNhcmQvYWRkLW5ldy1jYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXZfY29udGVudHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcblxuICAgIC5sYmxfY2FyZHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgXG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgIH1cbiAgICAuZGl2X2NhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG5cbiAgICAgICAgLmlucHV0X2FsbHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAzcHggIWltcG9ydGFudDsgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIC5pbnB1dF9kYXRle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAvLyBwYWRkaW5nLWJvdHRvbTogM3B4ICFpbXBvcnRhbnQ7ICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvZGVlcC8gLm5hdGl2ZS1pbnB1dC5zYy1pb24taW5wdXQtbWR7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50XG4gICAgICAgIH1cbiAgICAgICAgL2RlZXAvIC5uYXRpdmUtaW5wdXQuc2MtaW9uLWlucHV0LWlvc3tcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4ICFpbXBvcnRhbnRcbiAgICAgICAgfVxuICAgICAgICAuY2FyZF9udW1iZXJ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTsgIFxuICAgICAgICB9XG4gICAgICAgIC5pbWdfdmlzYXtcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbl9jdmN7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgd2lkdGg6IDEzNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG5cbiAgICAuYnRuX2FkZGNhcmR7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIC0tYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/payments/add-new-card/add-new-card.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/payments/add-new-card/add-new-card.page.ts ***!
  \******************************************************************/
/*! exports provided: AddNewCardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddNewCardPage", function() { return AddNewCardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/stripe/ngx */ "./node_modules/@ionic-native/stripe/ngx/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");






var AddNewCardPage = /** @class */ (function () {
    function AddNewCardPage(http, stripe, router, util) {
        this.http = http;
        this.stripe = stripe;
        this.router = router;
        this.util = util;
        this.email = '';
        this.cnumber = '';
        this.cname = '';
        this.cvc = '';
        this.date = '';
    }
    AddNewCardPage.prototype.ngOnInit = function () {
    };
    AddNewCardPage.prototype.addcard = function () {
        //**************************************************************************************************************************** */
        //For Testing we have used localStorage, but you can use ionic native storage
        //**************************************************************************************************************************** */
        var _this = this;
        if (this.email == '') {
            this.util.showErrorAlert('Please Add Email Address');
            return false;
        }
        else if (this.cnumber == '') {
            this.util.showErrorAlert('Please Add Card Number');
            return false;
        }
        else if (this.cname == '') {
            this.util.showErrorAlert('Please Add Card Holder Name');
            return false;
        }
        else if (this.cvc == '') {
            this.util.showErrorAlert('Please Enter CVC code');
            return false;
        }
        else if (this.date == '') {
            this.util.showErrorAlert('Please Add Expire Date');
            return false;
        }
        else {
            this.year = this.date.split("-")[0];
            this.month = this.date.split("-")[1];
            this.stripe.setPublishableKey('pk_test_H3zJI5SaNFKCfB1VBNpEYHQ1');
            var card_1 = {
                number: this.cnumber,
                expMonth: this.month,
                expYear: this.year,
                cvc: this.cvc
            };
            this.stripe.createCardToken(card_1)
                .then(function (token) {
                if (localStorage.getItem("CC") != "NO") {
                    var postParams = {
                        description: 'Ionic 4 Starter Users',
                        email: _this.email,
                        source: token.id
                    };
                    _this.post('https://api.stripe.com/v1/customers', 'sk_test_pChXbEkjJrFMu6nC80sqiIFP', postParams);
                }
                else {
                    _this.stripe.createCardToken(card_1)
                        .then(function (token) {
                        var temptoken = 'sk_test_pChXbEkjJrFMu6nC80sqiIFP';
                        var param = {
                            source: token.id
                        };
                        _this.postNewCard('https://api.stripe.com/v1/customers/' + localStorage.getItem('scuid') + '/sources', temptoken, param);
                    })
                        .catch(function (error) {
                        console.log('ads', error);
                        _this.util.showErrorAlert('Something is Wrong with Card Information Please Check Again');
                    });
                }
            })
                .catch(function (error) {
                console.log('dasd', error);
                _this.util.showErrorAlert("Something is Wrong with Card Information Please Check Again");
            });
        }
    };
    AddNewCardPage.prototype.postNewCard = function (url, key, options) {
        var _this = this;
        console.log('post new card' + key);
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
        // temp.shift();
        this.http.post(url, temp.join("&"), option)
            .subscribe(function (res) {
            var data = res.json();
            console.log('ress', data);
            // localStorage.setItem("scuid", data.id);
            // localStorage.setItem("CC", "NO");
            _this.router.navigate(['stripe']);
        }, function (error) {
            console.log('error ->', error);
        });
    };
    AddNewCardPage.prototype.post = function (url, key, options) {
        var _this = this;
        console.log('post card');
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
        // temp.shift();
        this.http.post(url, temp.join("&"), option)
            .subscribe(function (ress) {
            var c = ress.json();
            console.log('c', c);
            localStorage.setItem("scuid", c.id);
            localStorage.setItem("CC", "NO");
            _this.router.navigate(['stripe']);
        }, function (error) {
            console.log('error', error);
        });
    };
    AddNewCardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-new-card',
            template: __webpack_require__(/*! ./add-new-card.page.html */ "./src/app/pages/payments/add-new-card/add-new-card.page.html"),
            styles: [__webpack_require__(/*! ./add-new-card.page.scss */ "./src/app/pages/payments/add-new-card/add-new-card.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"],
            _ionic_native_stripe_ngx__WEBPACK_IMPORTED_MODULE_2__["Stripe"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
    ], AddNewCardPage);
    return AddNewCardPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-payments-add-new-card-add-new-card-module.js.map