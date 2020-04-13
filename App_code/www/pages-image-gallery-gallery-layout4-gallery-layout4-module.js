(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-gallery-gallery-layout4-gallery-layout4-module"],{

/***/ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GalleryLayout4PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout4PageModule", function() { return GalleryLayout4PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_layout4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-layout4.page */ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");








var routes = [
    {
        path: '',
        component: _gallery_layout4_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout4Page"]
    }
];
var GalleryLayout4PageModule = /** @class */ (function () {
    function GalleryLayout4PageModule() {
    }
    GalleryLayout4PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivGalleryModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivLoadingSpinnerModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_7__["FivCenterModule"]
            ],
            declarations: [_gallery_layout4_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout4Page"]]
        })
    ], GalleryLayout4PageModule);
    return GalleryLayout4PageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 4\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <fiv-gallery>\n    <fiv-gallery-toolbar [position]=\"'top'\">\n      <fiv-gallery-toolbar-content></fiv-gallery-toolbar-content>\n    </fiv-gallery-toolbar>\n    <ion-grid fixed no-padding>\n      <ion-row class=\"big\">\n        <ion-col size=\"6\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_2.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"6\">\n          <fiv-gallery-image>\n            <div [fivCenter]>\n              <fiv-loading-spinner [circleRadius]=\"8\" [diameter]=\"40\" [strokeWidth]=\"2\"></fiv-loading-spinner>\n            </div>\n          </fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"large\">\n        <ion-col size=\"4\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_3.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"4\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_4.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"4\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_5.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"small\">\n        <ion-col size=\"3\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_6.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"3\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_7.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"3\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_8.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n        <ion-col size=\"3\">\n          <fiv-gallery-image [src]=\"'assets/images/photo_9.jpeg'\"></fiv-gallery-image>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <fiv-gallery-toolbar [position]=\"'bottom'\">\n      <ion-toolbar color=\"transparent\">\n        <ion-title>RCAP Designs</ion-title>\n\n      </ion-toolbar>\n    </fiv-gallery-toolbar>\n\n  </fiv-gallery>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLWdhbGxlcnkvZ2FsbGVyeS1sYXlvdXQ0L2dhbGxlcnktbGF5b3V0NC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.ts ***!
  \*****************************************************************************/
/*! exports provided: GalleryLayout4Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout4Page", function() { return GalleryLayout4Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryLayout4Page = /** @class */ (function () {
    function GalleryLayout4Page() {
    }
    GalleryLayout4Page.prototype.ngOnInit = function () {
    };
    GalleryLayout4Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-layout4',
            template: __webpack_require__(/*! ./gallery-layout4.page.html */ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.html"),
            styles: [__webpack_require__(/*! ./gallery-layout4.page.scss */ "./src/app/pages/image-gallery/gallery-layout4/gallery-layout4.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryLayout4Page);
    return GalleryLayout4Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-gallery-gallery-layout4-gallery-layout4-module.js.map