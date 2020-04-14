(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-hide-headers-hide-headers-module"],{

/***/ "./src/app/pages/parallax/hide-headers/hide-headers.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/hide-headers/hide-headers.module.ts ***!
  \********************************************************************/
/*! exports provided: HideHeadersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeadersPageModule", function() { return HideHeadersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _hide_headers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hide-headers.page */ "./src/app/pages/parallax/hide-headers/hide-headers.page.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");









var routes = [
    {
        path: '',
        component: _hide_headers_page__WEBPACK_IMPORTED_MODULE_6__["HideHeadersPage"]
    }
];
var HideHeadersPageModule = /** @class */ (function () {
    function HideHeadersPageModule() {
    }
    HideHeadersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"],
            ],
            declarations: [_hide_headers_page__WEBPACK_IMPORTED_MODULE_6__["HideHeadersPage"]]
        })
    ], HideHeadersPageModule);
    return HideHeadersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/hide-headers/hide-headers.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/hide-headers/hide-headers.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header hidenav-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Parallax With Header\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding hidenav-content>\n\n  <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n    <ion-img [src]=\"fruits.image\"></ion-img>\n    <ion-card-content>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-label class=\"title\">{{fruits.name}}</ion-label>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <p class=\"descriptions\">{{fruits.descriptions}}</p>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/hide-headers/hide-headers.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/hide-headers/hide-headers.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  font-weight: bold; }\n\n.descriptions {\n  font-size: 10px;\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXJhbGxheC9oaWRlLWhlYWRlcnMvaGlkZS1oZWFkZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9oaWRlLWhlYWRlcnMvaGlkZS1oZWFkZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbnN7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/parallax/hide-headers/hide-headers.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/parallax/hide-headers/hide-headers.page.ts ***!
  \******************************************************************/
/*! exports provided: HideHeadersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HideHeadersPage", function() { return HideHeadersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HideHeadersPage = /** @class */ (function () {
    function HideHeadersPage(alertCtrl) {
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
    HideHeadersPage.prototype.ngOnInit = function () {
    };
    HideHeadersPage.prototype.showBasicAlert = function (fruits) {
        this.presentAlert(fruits.name, fruits.descriptions);
    };
    /*
      Show basic Alert Message
      param :header = header or title of alert message, msg = message to display
      Call this method to show basic Alert,
      */
    HideHeadersPage.prototype.presentAlert = function (header, msg) {
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
    HideHeadersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hide-headers',
            template: __webpack_require__(/*! ./hide-headers.page.html */ "./src/app/pages/parallax/hide-headers/hide-headers.page.html"),
            styles: [__webpack_require__(/*! ./hide-headers.page.scss */ "./src/app/pages/parallax/hide-headers/hide-headers.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HideHeadersPage);
    return HideHeadersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-hide-headers-hide-headers-module.js.map