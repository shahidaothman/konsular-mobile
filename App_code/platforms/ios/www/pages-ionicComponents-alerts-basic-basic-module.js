(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-alerts-basic-basic-module"],{

/***/ "./src/app/pages/ionicComponents/alerts/basic/basic.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/basic/basic.module.ts ***!
  \********************************************************************/
/*! exports provided: BasicPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPageModule", function() { return BasicPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _basic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./basic.page */ "./src/app/pages/ionicComponents/alerts/basic/basic.page.ts");







var routes = [
    {
        path: '',
        component: _basic_page__WEBPACK_IMPORTED_MODULE_6__["BasicPage"]
    }
];
var BasicPageModule = /** @class */ (function () {
    function BasicPageModule() {
    }
    BasicPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_basic_page__WEBPACK_IMPORTED_MODULE_6__["BasicPage"]]
        })
    ], BasicPageModule);
    return BasicPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/basic/basic.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/basic/basic.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Basic Alerts\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n    <ion-img [src]=\"fruits.image\"></ion-img>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"title\">{{fruits.name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=\"descriptions\">{{fruits.descriptions}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/basic/basic.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/basic/basic.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold; }\n\n.descriptions {\n  font-size: 10px;\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvYWxlcnRzL2Jhc2ljL2Jhc2ljLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvYWxlcnRzL2Jhc2ljL2Jhc2ljLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbnN7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/alerts/basic/basic.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/alerts/basic/basic.page.ts ***!
  \******************************************************************/
/*! exports provided: BasicPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicPage", function() { return BasicPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var BasicPage = /** @class */ (function () {
    function BasicPage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.basicAlertCard = [
            {
                name: 'Apple',
                descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n        specimen\n        book.It has survived not only five centuries,",
                image: 'assets/images/fruits/apple.jpeg'
            },
            {
                name: 'Oranges',
                descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n        specimen\n        book.It has survived not only five centuries,",
                image: 'assets/images/fruits/orange.jpg'
            },
            {
                name: 'Cherrys',
                descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n        specimen\n        book.It has survived not only five centuries,",
                image: 'assets/images/fruits/chrerry.jpg'
            },
            {
                name: 'Bananas',
                descriptions: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type\n        specimen\n        book.It has survived not only five centuries,",
                image: 'assets/images/fruits/bananas.jpg'
            }
        ];
    }
    BasicPage.prototype.ngOnInit = function () {
    };
    BasicPage.prototype.showBasicAlert = function (fruits) {
        this.presentAlert(fruits.name, fruits.descriptions);
    };
    /*
      Show basic Alert Message
      param :header = header or title of alert message, msg = message to display
      Call this method to show basic Alert,
      */
    BasicPage.prototype.presentAlert = function (header, msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: header,
                            message: msg,
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (Cancle) {
                                        console.log('Cancle Button');
                                    }
                                }, {
                                    text: 'OK',
                                    handler: function () {
                                        console.log('Confirm Ok');
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
    BasicPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basic',
            template: __webpack_require__(/*! ./basic.page.html */ "./src/app/pages/ionicComponents/alerts/basic/basic.page.html"),
            styles: [__webpack_require__(/*! ./basic.page.scss */ "./src/app/pages/ionicComponents/alerts/basic/basic.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], BasicPage);
    return BasicPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-alerts-basic-basic-module.js.map