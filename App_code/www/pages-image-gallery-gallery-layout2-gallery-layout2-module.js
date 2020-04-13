(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-image-gallery-gallery-layout2-gallery-layout2-module"],{

/***/ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.module.ts ***!
  \*******************************************************************************/
/*! exports provided: GalleryLayout2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout2PageModule", function() { return GalleryLayout2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gallery_layout2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gallery-layout2.page */ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _gallery_layout2_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout2Page"]
    }
];
var GalleryLayout2PageModule = /** @class */ (function () {
    function GalleryLayout2PageModule() {
    }
    GalleryLayout2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gallery_layout2_page__WEBPACK_IMPORTED_MODULE_6__["GalleryLayout2Page"]]
        })
    ], GalleryLayout2PageModule);
    return GalleryLayout2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 2\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <gallery-layout2></gallery-layout2>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ltYWdlLWdhbGxlcnkvZ2FsbGVyeS1sYXlvdXQyL2dhbGxlcnktbGF5b3V0Mi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.ts ***!
  \*****************************************************************************/
/*! exports provided: GalleryLayout2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLayout2Page", function() { return GalleryLayout2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GalleryLayout2Page = /** @class */ (function () {
    function GalleryLayout2Page() {
    }
    GalleryLayout2Page.prototype.ngOnInit = function () {
    };
    GalleryLayout2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gallery-layout2',
            template: __webpack_require__(/*! ./gallery-layout2.page.html */ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.html"),
            styles: [__webpack_require__(/*! ./gallery-layout2.page.scss */ "./src/app/pages/image-gallery/gallery-layout2/gallery-layout2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GalleryLayout2Page);
    return GalleryLayout2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-image-gallery-gallery-layout2-gallery-layout2-module.js.map