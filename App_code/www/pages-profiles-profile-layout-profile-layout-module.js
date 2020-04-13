(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profiles-profile-layout-profile-layout-module"],{

/***/ "./src/app/pages/profiles/profile-layout/profile-layout.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/profiles/profile-layout/profile-layout.module.ts ***!
  \************************************************************************/
/*! exports provided: ProfileLayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayoutPageModule", function() { return ProfileLayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _profile_layout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-layout.page */ "./src/app/pages/profiles/profile-layout/profile-layout.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _profile_layout_page__WEBPACK_IMPORTED_MODULE_6__["ProfileLayoutPage"]
    }
];
var ProfileLayoutPageModule = /** @class */ (function () {
    function ProfileLayoutPageModule() {
    }
    ProfileLayoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
            ],
            declarations: [_profile_layout_page__WEBPACK_IMPORTED_MODULE_6__["ProfileLayoutPage"]]
        })
    ], ProfileLayoutPageModule);
    return ProfileLayoutPageModule;
}());



/***/ }),

/***/ "./src/app/pages/profiles/profile-layout/profile-layout.page.html":
/*!************************************************************************!*\
  !*** ./src/app/pages/profiles/profile-layout/profile-layout.page.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <app-profile-layout1 *ngIf=\"id == 1\"></app-profile-layout1>\n  <app-profile-layout2 *ngIf=\"id == 2\"></app-profile-layout2>\n  <app-profile-layout3 *ngIf=\"id == 3\"></app-profile-layout3>\n  <app-profile-layout5 *ngIf=\"id == 5\"></app-profile-layout5>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/profiles/profile-layout/profile-layout.page.scss":
/*!************************************************************************!*\
  !*** ./src/app/pages/profiles/profile-layout/profile-layout.page.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2ZpbGVzL3Byb2ZpbGUtbGF5b3V0L3Byb2ZpbGUtbGF5b3V0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/profiles/profile-layout/profile-layout.page.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/profiles/profile-layout/profile-layout.page.ts ***!
  \**********************************************************************/
/*! exports provided: ProfileLayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileLayoutPage", function() { return ProfileLayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ProfileLayoutPage = /** @class */ (function () {
    function ProfileLayoutPage(route) {
        this.route = route;
    }
    ProfileLayoutPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id']; // (+) converts string 
            console.log('id ', _this.id);
        });
    };
    ProfileLayoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile-layout',
            template: __webpack_require__(/*! ./profile-layout.page.html */ "./src/app/pages/profiles/profile-layout/profile-layout.page.html"),
            styles: [__webpack_require__(/*! ./profile-layout.page.scss */ "./src/app/pages/profiles/profile-layout/profile-layout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ProfileLayoutPage);
    return ProfileLayoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profiles-profile-layout-profile-layout-module.js.map