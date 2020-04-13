(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tutorials-tutorials-module"],{

/***/ "./src/app/pages/tutorials/tutorials.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tutorials/tutorials.module.ts ***!
  \*****************************************************/
/*! exports provided: TutorialsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsPageModule", function() { return TutorialsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tutorials_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tutorials.page */ "./src/app/pages/tutorials/tutorials.page.ts");







var routes = [
    {
        path: '',
        component: _tutorials_page__WEBPACK_IMPORTED_MODULE_6__["TutorialsPage"]
    }
];
var TutorialsPageModule = /** @class */ (function () {
    function TutorialsPageModule() {
    }
    TutorialsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tutorials_page__WEBPACK_IMPORTED_MODULE_6__["TutorialsPage"]]
        })
    ], TutorialsPageModule);
    return TutorialsPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tutorials/tutorials.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/tutorials/tutorials.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button color='dark' (click)=\"startApp()\" [hidden]=\"!showSkip\">Skip</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen class=\"bg\">\n  <ion-slides #slides (ionSlideWillChange)=\"onSlideChangeStart($event)\" pager=\"false\" [options]=\"slideOpts\">\n    <ion-slide>\n      <img src=\"assets/intro/1.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">\n        Welcome\n      </h2>\n      <p>\n        The\n        <b>Ionic4 Starter App</b> is a practical preview of the ionic framework version 4.+ in action, and a\n        demonstration of\n        proper code\n        use.\n      </p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/intro/2.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">What is Ionic4 Starter App</h2>\n      <p>\n        <b>All the code you need.</b> Templates, Parallax, Timelines, Login, Firebase</p>\n    </ion-slide>\n    <ion-slide>\n      <img src=\"assets/intro/4.png\" class=\"slide-image\" />\n      <h2 class=\"gslide-title\">Everything you need in one place.</h2>\n      <p>\n        <b>Ionic4 Starter App</b> is a powerful set of services and features built on top of Ionic Framework that brings\n        a\n        totally new\n        level of app development agility to mobile dev teams. Ready To use Components</p>\n    </ion-slide>\n\n    <ion-slide>\n      <img src=\"assets/intro/5.png\" class=\"slide-image\" />\n      <h2 class=\"slide-title\">Ready to Play?</h2>\n      <ion-button fill=\"clear\" color=\"dark\" (click)=\"startApp()\">\n        Continue\n        <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon>\n      </ion-button>\n    </ion-slide>\n  </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/tutorials/tutorials.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/tutorials/tutorials.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: transparent;\n  --border-color: transparent; }\n\n.bg {\n  --ion-background-color: white; }\n\n.swiper-slide {\n  display: block; }\n\n.slide-title {\n  margin-top: 2.8rem;\n  color: black;\n  font-size: 1rem; }\n\n.slide-image {\n  max-height: 80%;\n  max-width: 80%; }\n\nb {\n  font-weight: 500; }\n\np {\n  padding: 0 40px;\n  font-size: 0.8rem;\n  line-height: 1.5;\n  color: black; }\n\np b {\n    color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy90dXRvcmlhbHMvdHV0b3JpYWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLHlCQUFhO0VBQ2IsMkJBQWUsRUFBQTs7QUFFakI7RUFDRSw2QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsZUFBZTtFQUNmLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7O0FBSmQ7SUFPSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90dXRvcmlhbHMvdHV0b3JpYWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgLy8gVE9ETyB0ZXN0IHRyYW5zcGFyZW50IGFuZCBmdWxsc2NyZWVuXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbi5iZyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB9XG4uc3dpcGVyLXNsaWRlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zbGlkZS10aXRsZSB7XG4gIG1hcmdpbi10b3A6IDIuOHJlbTtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zbGlkZS1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDgwJTtcbiAgbWF4LXdpZHRoOiA4MCU7XG59XG5cbmIge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5wIHtcbiAgcGFkZGluZzogMCA0MHB4O1xuICBmb250LXNpemU6IDAuOHJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6IGJsYWNrO1xuXG4gIGIge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/tutorials/tutorials.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tutorials/tutorials.page.ts ***!
  \***************************************************/
/*! exports provided: TutorialsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialsPage", function() { return TutorialsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var TutorialsPage = /** @class */ (function () {
    function TutorialsPage(menu, navCtrl, router) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.router = router;
        this.showSkip = true;
        this.slideOpts = {
            zoom: false
        };
    }
    TutorialsPage.prototype.ngOnInit = function () {
    };
    TutorialsPage.prototype.onSlideChangeStart = function (event) {
        var _this = this;
        event.target.isEnd().then(function (isEnd) {
            _this.showSkip = !isEnd;
        });
    };
    TutorialsPage.prototype.startApp = function () {
        this.router.navigate(['/landing-page']);
        // this.router.navigate(['/simple'])
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slides'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonSlides"])
    ], TutorialsPage.prototype, "slides", void 0);
    TutorialsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorials',
            template: __webpack_require__(/*! ./tutorials.page.html */ "./src/app/pages/tutorials/tutorials.page.html"),
            styles: [__webpack_require__(/*! ./tutorials.page.scss */ "./src/app/pages/tutorials/tutorials.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TutorialsPage);
    return TutorialsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-tutorials-tutorials-module.js.map