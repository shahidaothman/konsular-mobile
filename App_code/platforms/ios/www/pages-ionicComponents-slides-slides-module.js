(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-slides-slides-module"],{

/***/ "./src/app/pages/ionicComponents/slides/slides.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/slides/slides.module.ts ***!
  \***************************************************************/
/*! exports provided: SlidesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPageModule", function() { return SlidesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slides_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slides.page */ "./src/app/pages/ionicComponents/slides/slides.page.ts");







var routes = [
    {
        path: '',
        component: _slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]
    }
];
var SlidesPageModule = /** @class */ (function () {
    function SlidesPageModule() {
    }
    SlidesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slides_page__WEBPACK_IMPORTED_MODULE_6__["SlidesPage"]]
        })
    ], SlidesPageModule);
    return SlidesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/slides/slides.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/slides/slides.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border [ngClass]=\"ocultar\">\n    <ion-toolbar>\n        <img src=\"/assets/slides/user-6.svg\" class=\"avatar animated fadeIn\">\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-slides pager=\"true\" class=\"slide-full\">\n        <ion-slide *ngFor=\"let slide of slides\">\n            <ion-card mode=\"ios\">\n                <img [src]=\"slide.img\" class=\"slide-image\">\n                <ion-card-header>\n                    <ion-card-title>{{slide.title}}</ion-card-title>\n                </ion-card-header>\n                <ion-card-content>\n                    {{slide.desc}}\n                </ion-card-content>\n            </ion-card>\n        </ion-slide>\n        <ion-slide>\n            <ion-button expand=\"full\" color=\"primary\" fill=\"clear\" (click)=\"onClick()\">\n                Let's Start!!\n            </ion-button>\n        </ion-slide>\n    </ion-slides>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/slides/slides.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/ionicComponents/slides/slides.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slide-full {\n  height: 100% !important; }\n\nion-card {\n  overflow: unset !important; }\n\nion-card {\n  height: 200px;\n  width: 300px; }\n\n.slide-image {\n  width: 100px;\n  text-align: center;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  top: -50px; }\n\nion-card-header {\n  position: relative;\n  top: -50px; }\n\nion-card-content {\n  position: relative;\n  top: -50px; }\n\n.avatar {\n  width: 50px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSxhQUFhO0VBQ2IsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVztFQUNYLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvc2xpZGVzL3NsaWRlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGUtZnVsbCB7XG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1jYXJkIHtcbiAgICBvdmVyZmxvdzogdW5zZXQgIWltcG9ydGFudDtcbn1cblxuaW9uLWNhcmQge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xufVxuXG4uc2xpZGUtaW1hZ2Uge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IC01MHB4O1xufVxuXG5pb24tY2FyZC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNTBweDtcbn1cblxuLmF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/slides/slides.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/ionicComponents/slides/slides.page.ts ***!
  \*************************************************************/
/*! exports provided: SlidesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidesPage", function() { return SlidesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SlidesPage = /** @class */ (function () {
    function SlidesPage(navController) {
        this.navController = navController;
        this.ocultar = '';
        this.slides = [
            {
                img: '/assets/slides/photos.svg',
                title: 'Share Photos',
                desc: 'Watch and share amazing photos from around the world'
            },
            {
                img: '/assets/slides/music-player-2.svg',
                title: 'Listen to music',
                desc: 'All your favorite music is here'
            },
            {
                img: '/assets/slides/calendar.svg',
                title: 'Never forget anything',
                desc: 'The best calendar in the world at your disposal'
            },
            {
                img: '/assets/slides/placeholder-1.svg',
                title: 'Your location',
                desc: 'We will always know where you are!'
            }
        ];
    }
    SlidesPage.prototype.ngOnInit = function () {
    };
    SlidesPage.prototype.onClick = function () {
        this.ocultar = 'animated fadeOut fast';
        this.navController.navigateBack('/');
    };
    SlidesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slides',
            template: __webpack_require__(/*! ./slides.page.html */ "./src/app/pages/ionicComponents/slides/slides.page.html"),
            styles: [__webpack_require__(/*! ./slides.page.scss */ "./src/app/pages/ionicComponents/slides/slides.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SlidesPage);
    return SlidesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-slides-slides-module.js.map