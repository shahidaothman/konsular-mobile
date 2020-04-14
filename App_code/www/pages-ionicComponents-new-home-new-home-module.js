(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-new-home-new-home-module"],{

/***/ "./src/app/pages/ionicComponents/new-home/new-home.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/new-home/new-home.module.ts ***!
  \*******************************************************************/
/*! exports provided: NewHomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHomePageModule", function() { return NewHomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-home.page */ "./src/app/pages/ionicComponents/new-home/new-home.page.ts");







var routes = [
    {
        path: '',
        redirectTo: 'home'
    },
    {
        path: '',
        component: _new_home_page__WEBPACK_IMPORTED_MODULE_6__["NewHomePage"],
        children: [
            {
                path: 'home',
                loadChildren: '../../home/home.module#HomePageModule'
            },
            {
                path: 'geo',
                loadChildren: '../geolocation/geolocation.module#GeolocationPageModule'
            },
            {
                path: 'profile',
                loadChildren: '../profile-user/profile-user.module#ProfileUserPageModule'
            }
        ]
    }
];
var NewHomePageModule = /** @class */ (function () {
    function NewHomePageModule() {
    }
    NewHomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_home_page__WEBPACK_IMPORTED_MODULE_6__["NewHomePage"]]
        })
    ], NewHomePageModule);
    return NewHomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/new-home/new-home.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/new-home/new-home.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon name=\"home\"></ion-icon>\n      <!-- <ion-label>Home</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"geo\">\n      <ion-icon name=\"pin\"></ion-icon>\n      <!-- <ion-label>Contact</ion-label> -->\n    </ion-tab-button>\n    <ion-tab-button tab=\"profile\">\n      <ion-icon name=\"person\"></ion-icon>\n      <!-- <ion-label>register</ion-label> -->\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/new-home/new-home.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/new-home/new-home.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ion-color-secondary {\n  --ion-color-base: #63bbe4 !important;\n  --ion-color-base-rgb: var(--ion-color-secondary-rgb, 12,209,232) !important;\n  --ion-color-contrast: var(--ion-color-secondary-contrast, #fff) !important;\n  --ion-color-contrast-rgb: var(--ion-color-secondary-contrast-rgb, 255,255,255) !important;\n  --ion-color-shade: var(--ion-color-secondary-shade, #63bbe4) !important;\n  --ion-color-tint: var(--ion-color-secondary-tint, #24d6ea) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvbmV3LWhvbWUvbmV3LWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQWlCO0VBQ2pCLDJFQUFxQjtFQUNyQiwwRUFBcUI7RUFDckIseUZBQXlCO0VBQ3pCLHVFQUFrQjtFQUNsQixxRUFBaUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2lvbmljQ29tcG9uZW50cy9uZXctaG9tZS9uZXctaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW9uLWNvbG9yLXNlY29uZGFyeSB7XG4gICAgLS1pb24tY29sb3ItYmFzZTogIzYzYmJlNCAhaW1wb3J0YW50O1xuICAgIC0taW9uLWNvbG9yLWJhc2UtcmdiOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiwgMTIsMjA5LDIzMikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCwgI2ZmZikgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1jb250cmFzdC1yZ2I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QtcmdiLCAyNTUsMjU1LDI1NSkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci1zaGFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1zaGFkZSwgIzYzYmJlNCkgIWltcG9ydGFudDtcbiAgICAtLWlvbi1jb2xvci10aW50OiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQsICMyNGQ2ZWEpICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/new-home/new-home.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/new-home/new-home.page.ts ***!
  \*****************************************************************/
/*! exports provided: NewHomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHomePage", function() { return NewHomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewHomePage = /** @class */ (function () {
    function NewHomePage() {
    }
    NewHomePage.prototype.ngOnInit = function () {
    };
    NewHomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-home',
            template: __webpack_require__(/*! ./new-home.page.html */ "./src/app/pages/ionicComponents/new-home/new-home.page.html"),
            styles: [__webpack_require__(/*! ./new-home.page.scss */ "./src/app/pages/ionicComponents/new-home/new-home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewHomePage);
    return NewHomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-new-home-new-home-module.js.map