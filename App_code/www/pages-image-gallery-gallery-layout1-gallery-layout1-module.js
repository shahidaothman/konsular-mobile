(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-gallery-gallery-layout1-gallery-layout1-module"],{

/***/ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GalleryLayout1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout1PageModule", function() { return GalleryLayout1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_layout1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-layout1.page */ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _gallery_layout1_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout1Page"]
    }
];
var GalleryLayout1PageModule = /** @class */ (function () {
    function GalleryLayout1PageModule() {
    }
    GalleryLayout1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            ],
            declarations: [_gallery_layout1_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout1Page"]]
        })
    ], GalleryLayout1PageModule);
    return GalleryLayout1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <gallery-layout1></gallery-layout1>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLWdhbGxlcnkvZ2FsbGVyeS1sYXlvdXQxL2dhbGxlcnktbGF5b3V0MS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.ts ***!
  \*****************************************************************************/
/*! exports provided: GalleryLayout1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout1Page", function() { return GalleryLayout1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryLayout1Page = /** @class */ (function () {
    function GalleryLayout1Page() {
    }
    GalleryLayout1Page.prototype.ngOnInit = function () {
    };
    GalleryLayout1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-layout1',
            template: __webpack_require__(/*! ./gallery-layout1.page.html */ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.html"),
            styles: [__webpack_require__(/*! ./gallery-layout1.page.scss */ "./src/app/pages/image-gallery/gallery-layout1/gallery-layout1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryLayout1Page);
    return GalleryLayout1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-gallery-gallery-layout1-gallery-layout1-module.js.map