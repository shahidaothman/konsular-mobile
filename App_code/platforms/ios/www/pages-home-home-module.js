(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");








var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_7__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Home\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card class=\"welcome-card\" id=\"g1\" (click)=\"register()\">\n    <ion-img class=\"header_img\" src=\"assets/images/home_icon.png\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Good conduct</ion-card-subtitle>\n      <ion-card-title>Permohonan Sijil Kelakuan Baik</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <ion-card class=\"welcome-card\" id=\"g1\" (click)=\"simple()\">\n    <ion-img class=\"header_img\" src=\"assets/images/home_icon.png\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Registration Of Malaysia Abroad</ion-card-subtitle>\n      <ion-card-title>Pendaftaran Rakyat Malaysia Di Luar Negara</ion-card-title>\n    </ion-card-header>\n  </ion-card>\n  <!-- <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n    </ion-list-header>\n\n    <ion-grid>\n      <ion-row>\n     \n        <ion-col size=\"6\" *ngFor=\"let page of resources\">\n          <div class=\"box\" id=\"g8\">\n            <p text-wrap>\n              <fa-icon [icon]=\"['fas', page.icon]\" slot=\"start\" style=\"color: #292a6d !important;\"></fa-icon>\n              {{page.title}}\n            </p>\n          </div>\n          <ion-item>\n            <fa-icon [icon]=\"['fas', page.icon]\" slot=\"start\" style=\"color: #989aa2 !important;\"></fa-icon>\n            <ion-label>{{page.title}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n  </ion-list> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.header_img {\n  height: 200px;\n  background-position: center;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-color: #0cd1e8; }\n\n.box {\n  height: 60px !important; }\n\n.box p {\n    color: #292a6d !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9ob21lL2hvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNJLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLDRCQUE0QjtFQUM1Qix5QkFBeUIsRUFBQTs7QUFFN0I7RUFDRSx1QkFBdUIsRUFBQTs7QUFEekI7SUFHSSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXG4ud2VsY29tZS1jYXJkIGlvbi1pbWcge1xuICBtYXgtaGVpZ2h0OiAzNXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmhlYWRlcl9pbWd7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjZDFlODtcbn1cbi5ib3h7XG4gIGhlaWdodDogNjBweCAhaW1wb3J0YW50O1xuICBwe1xuICAgIGNvbG9yOiAjMjkyYTZkICFpbXBvcnRhbnQ7XG4gIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomePage = /** @class */ (function () {
    // resources = [
    //   {
    //     title: 'Login Pages',
    //     icon: 'sign-in-alt'
    //   },
    //   {
    //     title: 'Profiles Pages',
    //     icon: 'user-circle'
    //   },
    //   {
    //     title: 'Accordion-List',
    //     icon: 'poll-h'
    //   },
    //   {
    //     title: 'Ionic Components',
    //     icon: 'check-circle'
    //   },
    //   {
    //     title: 'Dialog Alert',
    //     icon: 'exclamation-circle'
    //   },
    //   {
    //     title: 'Firebase CRUD',
    //     icon: 'fire'
    //   },
    //   {
    //     title: 'Expandable',
    //     icon: 'file-invoice'
    //   },
    //   {
    //     title: 'Image Gallery',
    //     icon: 'images'
    //   },
    //   {
    //     title: 'Steppers',
    //     icon: 'outdent'
    //   },
    //   {
    //     title: 'App Tour',
    //     icon: 'flag-usa'
    //   },
    //   {
    //     title: 'Charts',
    //     icon: 'chart-pie'
    //   },
    //   {
    //     title: 'Parallax',
    //     icon: 'stream'
    //   },
    //   {
    //     title: 'Timeline',
    //     icon: 'list-ul'
    //   },
    //   {
    //     title: 'Item-Ribbon',
    //     icon: 'award'
    //   },
    //   {
    //     title: 'Payments',
    //     icon: 'money-bill-alt'
    //   },
    //   {
    //     title: 'Forms',
    //     icon: 'archive'
    //   },
    //   {
    //     title: 'Side Menus',
    //     icon: 'bars'
    //   },
    //   {
    //     title: 'Miscellaneous',
    //     icon: 'folder'
    //   },
    //   {
    //     title: 'Native APIs',
    //     icon: 'mobile'
    //   }
    // ];
    function HomePage(router) {
        this.router = router;
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.simple = function () {
        console.log('simple login');
        this.router.navigate(['abroad']);
    };
    HomePage.prototype.register = function () {
        console.log('register');
        this.router.navigate(['register']);
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map