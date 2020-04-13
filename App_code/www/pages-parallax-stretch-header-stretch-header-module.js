(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-stretch-header-stretch-header-module"],{

/***/ "./src/app/pages/parallax/stretch-header/stretch-header.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/stretch-header/stretch-header.module.ts ***!
  \************************************************************************/
/*! exports provided: StretchHeaderPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StretchHeaderPageModule", function() { return StretchHeaderPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _stretch_header_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./stretch-header.page */ "./src/app/pages/parallax/stretch-header/stretch-header.page.ts");
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared.module */ "./src/app/shared.module.ts");








var routes = [
    {
        path: '',
        component: _stretch_header_page__WEBPACK_IMPORTED_MODULE_6__["StretchHeaderPage"]
    }
];
var StretchHeaderPageModule = /** @class */ (function () {
    function StretchHeaderPageModule() {
    }
    StretchHeaderPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_stretch_header_page__WEBPACK_IMPORTED_MODULE_6__["StretchHeaderPage"]]
        })
    ], StretchHeaderPageModule);
    return StretchHeaderPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/stretch-header/stretch-header.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/stretch-header/stretch-header.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<hidenav-stretchheader header-height=\"50\" opacity-factor=\"7\" opacity-color=\"black\" init-expanded=\"false\">\n  <div #static>\n    <ion-toolbar [routerLink]=\"'..'\" color=\"white\" style=\"font-size: 46px\">\n      <ion-icon style=\"color: white;\" name=\"arrow-round-back\"></ion-icon>\n    </ion-toolbar>\n\n  </div>\n  <div #static #title style=\"width: 100%;\" (click)=\"expand()\">\n    <label style=\"left: 60px; top: 15px; position: relative; color: white; font-size: 20px; font-weight: bold;\">Moving\n      Title</label>\n  </div>\n  <div #shrinkexpand style=\"background: white; color: gold; height: 250px\" (click)=\"expand()\">\n    <img src=\"assets/avatars/1.jpg\" width=\"100%\" alt=\"\">\n  </div>\n</hidenav-stretchheader>\n\n<ion-content padding hidenav-sh-content>\n  <ion-card>\n    <img src=\"assets/avatars/4.jpg\">\n    <ion-card-header class=\"hydrated\">\n      <ion-card-subtitle role=\"heading\" aria-level=\"3\" class=\"hydrated\">Destination</ion-card-subtitle>\n      <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"card-content card-content-ios hydrated\">\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin\n      Territory in 1836.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <img src=\"assets/avatars/5.jpg\">\n    <ion-card-header class=\"hydrated\">\n      <ion-card-subtitle role=\"heading\" aria-level=\"3\" class=\"hydrated\">Destination</ion-card-subtitle>\n      <ion-card-title role=\"heading\" aria-level=\"2\" class=\"hydrated\">Madison, WI</ion-card-title>\n    </ion-card-header>\n    <ion-card-content class=\"card-content card-content-ios hydrated\">\n      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin\n      Territory in 1836.\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/stretch-header/stretch-header.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/parallax/stretch-header/stretch-header.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhcmFsbGF4L3N0cmV0Y2gtaGVhZGVyL3N0cmV0Y2gtaGVhZGVyLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/parallax/stretch-header/stretch-header.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/parallax/stretch-header/stretch-header.page.ts ***!
  \**********************************************************************/
/*! exports provided: StretchHeaderPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StretchHeaderPage", function() { return StretchHeaderPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/hidenav-stretchheader.component */ "./src/app/directives/hidenav-stretchheader.component.ts");




var StretchHeaderPage = /** @class */ (function () {
    function StretchHeaderPage() {
    }
    StretchHeaderPage.prototype.ngOnInit = function () {
        var _this = this;
        this.hidenav.scroll.subscribe(function (res) {
            _this.title.nativeElement.style.transform = 'translate3d(0, ' + (res - 50) + 'px, 0)';
        });
    };
    StretchHeaderPage.prototype.expand = function () {
        this.hidenav.toggle(300);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonContent"])
    ], StretchHeaderPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], StretchHeaderPage.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__["HidenavStretchheaderComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_directives_hidenav_stretchheader_component__WEBPACK_IMPORTED_MODULE_3__["HidenavStretchheaderComponent"])
    ], StretchHeaderPage.prototype, "hidenav", void 0);
    StretchHeaderPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stretch-header',
            template: __webpack_require__(/*! ./stretch-header.page.html */ "./src/app/pages/parallax/stretch-header/stretch-header.page.html"),
            styles: [__webpack_require__(/*! ./stretch-header.page.scss */ "./src/app/pages/parallax/stretch-header/stretch-header.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StretchHeaderPage);
    return StretchHeaderPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-stretch-header-stretch-header-module.js.map