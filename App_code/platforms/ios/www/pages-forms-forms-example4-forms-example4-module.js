(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-forms-example4-forms-example4-module"],{

/***/ "./src/app/pages/forms/forms-example4/forms-example4.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example4/forms-example4.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormsExample4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample4PageModule", function() { return FormsExample4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_example4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-example4.page */ "./src/app/pages/forms/forms-example4/forms-example4.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");







//Rating Module

var routes = [
    {
        path: '',
        component: _forms_example4_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample4Page"]
    }
];
var FormsExample4PageModule = /** @class */ (function () {
    function FormsExample4PageModule() {
    }
    FormsExample4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
            ],
            declarations: [_forms_example4_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample4Page"]]
        })
    ], FormsExample4PageModule);
    return FormsExample4PageModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms-example4/forms-example4.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example4/forms-example4.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Form with Images\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n\n  <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n    starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n\n  <ion-list lines=\"none\" class=\"contactFormList\">\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-input type=\"text\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"inputs-item\" lines=\"none\">\n      <ion-textarea placeholder=\"Message\" rows=\"6\"></ion-textarea>\n    </ion-item>\n\n    <ion-item *ngIf=\"cap_img\">\n      <img [src]=\"cap_img\" class=\"img_selected\" />\n    </ion-item>\n  </ion-list>\n\n  <ion-button expand=\"block\" fill=\"outline\" color=\"secondary\" (click)=\"getImages()\">Add Images</ion-button>\n  <ion-button expand=\"block\" color=\"secondary\" (click)=\"sendMessage()\">Send Messages</ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forms/forms-example4/forms-example4.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example4/forms-example4.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contactFormList {\n  margin-top: 20px; }\n  .contactFormList .inputs-item {\n    border: 1px solid lightcyan;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    margin: 10px; }\n  .sendBtn {\n  border-radius: 10px; }\n  .footerContent {\n  margin-top: 10px; }\n  .footerContent .infoFooter {\n    color: gray;\n    font-size: 10px; }\n  .footerContent .footerImage {\n    height: 25px; }\n  .footerContent .footerImageW {\n    height: 25px;\n    margin-left: 82%; }\n  .img_selected {\n  width: 100%;\n  height: 200px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3Jtcy1leGFtcGxlNC9mb3Jtcy1leGFtcGxlNC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxnQkFBZ0IsRUFBQTtFQURwQjtJQUdJLDJCQUEyQjtJQUMzQix1Q0FBdUM7SUFDdkMsWUFBWSxFQUFBO0VBR2hCO0VBQ0ksbUJBQW1CLEVBQUE7RUFFdkI7RUFDSSxnQkFBZ0IsRUFBQTtFQURwQjtJQUdRLFdBQVc7SUFDWCxlQUFlLEVBQUE7RUFKdkI7SUFPUSxZQUFZLEVBQUE7RUFQcEI7SUFVUSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7RUFJeEI7RUFDSSxXQUFXO0VBQ1gsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvZm9ybXMtZXhhbXBsZTQvZm9ybXMtZXhhbXBsZTQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC5jb250YWN0Rm9ybUxpc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAuaW5wdXRzLWl0ZW0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGN5YW47XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5zZW5kQnRuIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICB9XG4gICAgLmZvb3RlckNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAuaW5mb0Zvb3RlciB7XG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgICAuZm9vdGVySW1hZ2Uge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5mb290ZXJJbWFnZVcge1xuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDgyJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbWdfc2VsZWN0ZWR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/pages/forms/forms-example4/forms-example4.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/forms/forms-example4/forms-example4.page.ts ***!
  \*******************************************************************/
/*! exports provided: FormsExample4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample4Page", function() { return FormsExample4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var FormsExample4Page = /** @class */ (function () {
    function FormsExample4Page(util, cameraCtrl, actionSheetController) {
        this.util = util;
        this.cameraCtrl = cameraCtrl;
        this.actionSheetController = actionSheetController;
        this.rate = '2';
    }
    FormsExample4Page.prototype.ngOnInit = function () {
    };
    FormsExample4Page.prototype.onRatingChange = function (event) {
        console.log('event', event);
    };
    FormsExample4Page.prototype.sendMessage = function () {
        this.util.showToast('Message sent', 'success', 'bottom');
    };
    FormsExample4Page.prototype.getImages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Choose From',
                            buttons: [
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera clicked');
                                        _this.takePhoto();
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        console.log('gallery clicked');
                                        _this.gallery();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
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
    FormsExample4Page.prototype.gallery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, result, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 100,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                            encodingType: this.cameraCtrl.EncodingType.JPEG,
                            mediaType: this.cameraCtrl.MediaType.PICTURE,
                            sourceType: this.cameraCtrl.PictureSourceType.PHOTOLIBRARY,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.cameraCtrl.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.cap_img = "data:image/png;base64," + result;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; // take Gallary
    FormsExample4Page.prototype.takePhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, result, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 100,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                            encodingType: this.cameraCtrl.EncodingType.PNG,
                            mediaType: this.cameraCtrl.MediaType.PICTURE,
                            sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.cameraCtrl.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.cap_img = "data:image/png;base64," + result;
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    FormsExample4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-example4',
            template: __webpack_require__(/*! ./forms-example4.page.html */ "./src/app/pages/forms/forms-example4/forms-example4.page.html"),
            styles: [__webpack_require__(/*! ./forms-example4.page.scss */ "./src/app/pages/forms/forms-example4/forms-example4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], FormsExample4Page);
    return FormsExample4Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forms-forms-example4-forms-example4-module.js.map