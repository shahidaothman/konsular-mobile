(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-header-image-header-image-module"],{

/***/ "./src/app/directives/parallax-header.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/parallax-header.directive.ts ***!
  \*********************************************************/
/*! exports provided: ParallaxHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxHeaderDirective", function() { return ParallaxHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ParallaxHeaderDirective = /** @class */ (function () {
    function ParallaxHeaderDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
    }
    ParallaxHeaderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.headerHeight = this.parallaxHeight;
        this.mainContent = this.element.nativeElement.querySelector('.main-content');
        this.domCtrl.write(function () {
            _this.header = _this.renderer.createElement('div');
            _this.renderer.insertBefore(_this.element.nativeElement, _this.header, _this.element.nativeElement.firstChild);
            _this.renderer.setStyle(_this.header, 'background-image', 'url(' + _this.imagePath + ')');
            _this.renderer.setStyle(_this.header, 'height', _this.headerHeight + 'px');
            _this.renderer.setStyle(_this.header, 'background-size', 'cover');
        });
    };
    ParallaxHeaderDirective.prototype.onContentScroll = function (ev) {
        var _this = this;
        this.domCtrl.read(function () {
            var translateAmt, scaleAmt;
            // Already scrolled past the point at which the header image is visible
            if (ev.detail.scrollTop > _this.parallaxHeight) {
                return;
            }
            if (ev.detail.scrollTop >= 0) {
                translateAmt = -(ev.detail.scrollTop / 2);
                scaleAmt = 1;
            }
            else {
                translateAmt = 0;
                scaleAmt = -ev.detail.scrollTop / _this.headerHeight + 1;
            }
            _this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.header, 'transform', 'translate3d(0,' + translateAmt + 'px,0) scale(' + scaleAmt + ',' + scaleAmt + ')');
                _this.renderer.setStyle(_this.mainContent, 'transform', 'translate3d(0, ' + (-ev.detail.scrollTop) + 'px, 0');
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parallaxHeader'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ParallaxHeaderDirective.prototype, "imagePath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('parallaxHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ParallaxHeaderDirective.prototype, "parallaxHeight", void 0);
    ParallaxHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[parallaxHeader]',
            host: {
                '(ionScroll)': 'onContentScroll($event)'
            }
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
    ], ParallaxHeaderDirective);
    return ParallaxHeaderDirective;
}());



/***/ }),

/***/ "./src/app/pages/parallax/header-image/header-image.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/header-image/header-image.module.ts ***!
  \********************************************************************/
/*! exports provided: HeaderImagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImagePageModule", function() { return HeaderImagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _header_image_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header-image.page */ "./src/app/pages/parallax/header-image/header-image.page.ts");
/* harmony import */ var src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/parallax-header.directive */ "./src/app/directives/parallax-header.directive.ts");








var routes = [
    {
        path: '',
        component: _header_image_page__WEBPACK_IMPORTED_MODULE_6__["HeaderImagePage"]
    }
];
var HeaderImagePageModule = /** @class */ (function () {
    function HeaderImagePageModule() {
    }
    HeaderImagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_header_image_page__WEBPACK_IMPORTED_MODULE_6__["HeaderImagePage"], src_app_directives_parallax_header_directive__WEBPACK_IMPORTED_MODULE_7__["ParallaxHeaderDirective"]]
        })
    ], HeaderImagePageModule);
    return HeaderImagePageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/header-image/header-image.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/header-image/header-image.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Parallax With Header Image\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [scrollEvents]=\"true\" parallaxHeader=\"assets/images/photo_1.jpeg\" [parallaxHeight]=\"300\">\n  <div class=\"main-content\">\n    <ion-card *ngFor=\"let fruits of basicAlertCard\" (click)=\"showBasicAlert(fruits)\">\n      <ion-img [src]=\"fruits.image\"></ion-img>\n      <ion-card-content>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-label class=\"title\">{{fruits.name}}</ion-label>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <p class=\"descriptions\">{{fruits.descriptions}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/header-image/header-image.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/parallax/header-image/header-image.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n  background-color: #fff;\n  padding: 20px; }\n\n.title {\n  font-weight: bold; }\n\n.descriptions {\n  font-size: 10px;\n  color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXJhbGxheC9oZWFkZXItaW1hZ2UvaGVhZGVyLWltYWdlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHNCQUFzQjtFQUN0QixhQUFhLEVBQUE7O0FBRWQ7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFyYWxsYXgvaGVhZGVyLWltYWdlL2hlYWRlci1pbWFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1jb250ZW50IHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0cGFkZGluZzogMjBweDtcbn1cbi50aXRsZXtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kZXNjcmlwdGlvbnN7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiBncmF5O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/parallax/header-image/header-image.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/parallax/header-image/header-image.page.ts ***!
  \******************************************************************/
/*! exports provided: HeaderImagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImagePage", function() { return HeaderImagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HeaderImagePage = /** @class */ (function () {
    function HeaderImagePage(alertCtrl) {
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
    HeaderImagePage.prototype.ngOnInit = function () {
    };
    HeaderImagePage.prototype.showBasicAlert = function (fruits) {
        this.presentAlert(fruits.name, fruits.descriptions);
    };
    /*
     Show basic Alert Message
     param :header = header or title of alert message, msg = message to display
     Call this method to show basic Alert,
     */
    HeaderImagePage.prototype.presentAlert = function (header, msg) {
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
    HeaderImagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header-image',
            template: __webpack_require__(/*! ./header-image.page.html */ "./src/app/pages/parallax/header-image/header-image.page.html"),
            styles: [__webpack_require__(/*! ./header-image.page.scss */ "./src/app/pages/parallax/header-image/header-image.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])
    ], HeaderImagePage);
    return HeaderImagePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-header-image-header-image-module.js.map