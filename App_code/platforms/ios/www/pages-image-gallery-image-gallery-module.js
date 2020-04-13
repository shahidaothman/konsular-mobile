(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-gallery-image-gallery-module"],{

/***/ "./src/app/pages/image-gallery/image-gallery.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-gallery/image-gallery.module.ts ***!
  \*************************************************************/
/*! exports provided: ImageGalleryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPageModule", function() { return ImageGalleryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_gallery_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-gallery.page */ "./src/app/pages/image-gallery/image-gallery.page.ts");







var routes = [
    {
        path: '',
        component: _image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryPage"]
    }
];
var ImageGalleryPageModule = /** @class */ (function () {
    function ImageGalleryPageModule() {
    }
    ImageGalleryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_image_gallery_page__WEBPACK_IMPORTED_MODULE_6__["ImageGalleryPage"]]
        })
    ], ImageGalleryPageModule);
    return ImageGalleryPageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-gallery/image-gallery.page.html":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-gallery/image-gallery.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Image Gallery\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"layout1()\">\n      <p>Layout 1</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"layout2()\">\n      <p>Layout 2</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"layout3()\">\n      <p>Layout 3</p>\n    </div>\n    <div class=\"box\" id=\"g4\" (click)=\"layout4()\">\n      <p>Layout 4</p>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image-gallery/image-gallery.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/image-gallery/image-gallery.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLWdhbGxlcnkvaW1hZ2UtZ2FsbGVyeS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/image-gallery/image-gallery.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/image-gallery/image-gallery.page.ts ***!
  \***********************************************************/
/*! exports provided: ImageGalleryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryPage", function() { return ImageGalleryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ImageGalleryPage = /** @class */ (function () {
    function ImageGalleryPage(router) {
        this.router = router;
    }
    ImageGalleryPage.prototype.ngOnInit = function () {
    };
    ImageGalleryPage.prototype.layout1 = function () {
        this.router.navigate(['gallery-layout1']);
    };
    ImageGalleryPage.prototype.layout2 = function () {
        this.router.navigate(['gallery-layout2']);
    };
    ImageGalleryPage.prototype.layout3 = function () {
        this.router.navigate(['gallery-layout3']);
    };
    ImageGalleryPage.prototype.layout4 = function () {
        this.router.navigate(['gallery-layout4']);
    };
    ImageGalleryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-gallery',
            template: __webpack_require__(/*! ./image-gallery.page.html */ "./src/app/pages/image-gallery/image-gallery.page.html"),
            styles: [__webpack_require__(/*! ./image-gallery.page.scss */ "./src/app/pages/image-gallery/image-gallery.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ImageGalleryPage);
    return ImageGalleryPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-gallery-image-gallery-module.js.map