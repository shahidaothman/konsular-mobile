(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-fireimage-create-fireimage-create-module"],{

/***/ "./src/app/pages/firebase/fireimage-create/fireimage-create.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-create/fireimage-create.module.ts ***!
  \****************************************************************************/
/*! exports provided: FireimageCreatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimageCreatePageModule", function() { return FireimageCreatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fireimage_create_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fireimage-create.page */ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.ts");







var routes = [
    {
        path: '',
        component: _fireimage_create_page__WEBPACK_IMPORTED_MODULE_6__["FireimageCreatePage"]
    }
];
var FireimageCreatePageModule = /** @class */ (function () {
    function FireimageCreatePageModule() {
    }
    FireimageCreatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_fireimage_create_page__WEBPACK_IMPORTED_MODULE_6__["FireimageCreatePage"]]
        })
    ], FireimageCreatePageModule);
    return FireimageCreatePageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-create/fireimage-create.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Add New Image List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <div class=\"div_img\" (click)=\"addImage()\">\n    <img src=\"assets/images/camera1.png\" *ngIf=\"image ==''\" class=\"img_logo\" />\n    <ion-spinner name=\"circles\" *ngIf=\"uploading\" class=\"my_spin\"></ion-spinner>\n    <img [src]=\"image\" *ngIf=\"image != ''\" class=\"img_logo\" />\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Title</ion-label>\n    <ion-input [(ngModel)]=\"title\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label position=\"floating\">Description</ion-label>\n    <ion-textarea [(ngModel)]=\"description\"></ion-textarea>\n  </ion-item>\n\n  <ion-button expand=\"block\" color=\"secondary\" margin-top (click)=\"addList()\" [disabled]=\"isCreate\">\n    <span *ngIf=\"!isCreate\">\n      Add List\n    </span>\n    <ion-spinner name=\"dots\" *ngIf=\"isCreate\"></ion-spinner>\n  </ion-button>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-create/fireimage-create.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".div_img {\n  width: 250px;\n  height: 250px;\n  background-color: lightgray;\n  position: relative;\n  display: block;\n  margin: auto;\n  background-size: cover;\n  background-position: center; }\n  .div_img .my_spin {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%); }\n  .div_img .img_logo {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlaW1hZ2UtY3JlYXRlL2ZpcmVpbWFnZS1jcmVhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLDJCQUEyQixFQUFBO0VBUi9CO0lBVVEsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxRQUFPO0lBQ1AsZ0NBQStCLEVBQUE7RUFidkM7SUFnQlEsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBK0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpcmViYXNlL2ZpcmVpbWFnZS1jcmVhdGUvZmlyZWltYWdlLWNyZWF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4uZGl2X2ltZ3tcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAubXlfc3BpbntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRvcDo1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxuICAgIC5pbWdfbG9nb3sgICAgICBcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/firebase/fireimage-create/fireimage-create.page.ts ***!
  \**************************************************************************/
/*! exports provided: FireimageCreatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FireimageCreatePage", function() { return FireimageCreatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");









var FireimageCreatePage = /** @class */ (function () {
    function FireimageCreatePage(util, adb, navCtrl, actionSheetController, cameraCtrl, afStorage) {
        this.util = util;
        this.adb = adb;
        this.navCtrl = navCtrl;
        this.actionSheetController = actionSheetController;
        this.cameraCtrl = cameraCtrl;
        this.afStorage = afStorage;
        this.title = '';
        this.description = '';
        this.image = '';
        this.url = '';
    }
    FireimageCreatePage.prototype.ngOnInit = function () {
        this.isCreate = false;
        this.uploading = false;
    };
    FireimageCreatePage.prototype.addList = function () {
        var _this = this;
        if (this.title == '') {
            this.util.showWarningAlert('Please Add Title');
            return false;
        }
        if (this.description == '') {
            this.util.showWarningAlert('Please add Description');
            return false;
        }
        if (this.image == '') {
            this.util.showWarningAlert('Please Add Image');
            return false;
        }
        if (this.url != '' && !this.uploading) {
            this.isCreate = true;
            var id = this.makeid(10);
            this.adb.collection('fireimage').doc(localStorage.getItem('uid')).collection('list').doc(id).set({
                id: id,
                title: this.title,
                description: this.description,
                image: this.url,
                timestamp: new Date().toISOString(),
            }).then(function () {
                console.log('added');
                _this.isCreate = false;
                _this.navCtrl.back();
                _this.util.showToast('List Added', 'success', 'bottom');
            }).catch(function (error) {
                console.log('error', error);
                _this.isCreate = false;
                _this.util.showErrorAlert("Something went Wrong");
            });
        }
    };
    FireimageCreatePage.prototype.makeid = function (length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < length; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    FireimageCreatePage.prototype.addImage = function () {
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
    FireimageCreatePage.prototype.gallery = function () {
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
                        this.image = "data:image/png;base64," + result;
                        this.uploadimage();
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
    FireimageCreatePage.prototype.takePhoto = function () {
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
                        this.image = "data:image/png;base64," + result;
                        this.uploadimage();
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
    FireimageCreatePage.prototype.uploadimage = function () {
        var _this = this;
        var id = this.makeid(30);
        this.uploading = true;
        this.ref = this.afStorage.ref("images/" + id);
        this.task = this.ref.putString(this.image, 'data_url');
        this.uploadState = this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (s) { return s.state; }));
        this.uploadProgress = this.task.percentageChanges();
        console.log('upload progress', this.uploadProgress);
        this.task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
            _this.downloadURL = _this.ref.getDownloadURL();
            _this.downloadURL.subscribe(function (url) {
                console.log('download uril', url);
                _this.url = url;
                _this.uploading = false;
            });
        }))
            .subscribe();
    };
    FireimageCreatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fireimage-create',
            template: __webpack_require__(/*! ./fireimage-create.page.html */ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.html"),
            styles: [__webpack_require__(/*! ./fireimage-create.page.scss */ "./src/app/pages/firebase/fireimage-create/fireimage-create.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], FireimageCreatePage);
    return FireimageCreatePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-fireimage-create-fireimage-create-module.js.map