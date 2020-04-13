(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-gradient-gradient-module"],{

/***/ "./src/app/pages/login/gradient/gradient.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/gradient/gradient.module.ts ***!
  \*********************************************************/
/*! exports provided: GradientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPageModule", function() { return GradientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gradient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gradient.page */ "./src/app/pages/login/gradient/gradient.page.ts");







var routes = [
    {
        path: '',
        component: _gradient_page__WEBPACK_IMPORTED_MODULE_6__["GradientPage"]
    }
];
var GradientPageModule = /** @class */ (function () {
    function GradientPageModule() {
    }
    GradientPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gradient_page__WEBPACK_IMPORTED_MODULE_6__["GradientPage"]]
        })
    ], GradientPageModule);
    return GradientPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/gradient/gradient.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/gradient/gradient.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"login-logo\">\n    <img src=\"assets/images/insta.png\" alt=\"Ionic logo\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.email\" class=\"userinput\" placeholder=\"Email\" name=\"email\" type=\"email\"\n          #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n        </ion-input>\n\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"login.password\" class=\"userinput\" placeholder=\"Password\" name=\"password\"\n          [type]=\"passwordType\" #password=\"ngModel\" required>\n        </ion-input>\n        <ion-icon [name]=\"passwordIcon\" slot=\"end\" (click)='hideShowPassword()'></ion-icon>\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" class=\"btn\" expand=\"block\">Login</ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <div class=\"login-button\">\n    <span>Don't have an account? <strong>Sign up here</strong>.</span>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/gradient/gradient.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/gradient/gradient.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .backButton {\n  margin-top: 10px;\n  background: transparent; }\n\n:host ion-content {\n  --background: #f09433;\n  --background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);\n  --background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);\n  --background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n:host .login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center; }\n\n:host .login-logo img {\n  max-width: 150px; }\n\n:host .list {\n  margin-bottom: 0; }\n\n:host ion-list {\n  --ion-background-color:transparent; }\n\n:host ion-item {\n  --ion-background-color:rgba(255, 255, 255, 0.15);\n  border-radius: 35px !important;\n  padding: 10px;\n  --border-color: transparent; }\n\n:host ion-item .userinput {\n    --ion-background-color:rgba(255, 255, 255, 0.15);\n    font-size: 10pt;\n    margin-left: 30px;\n    padding-left: 30px;\n    --highlight-color-focused: transparent !important; }\n\n:host ion-item ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host ion-item ::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host .btn {\n  --background:#0000004a;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: rgba(255, 255, 255, 0.45);\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .3px;\n  transition: all .3s ease;\n  height: 50px; }\n\n:host .strike {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap; }\n\n:host .strike > span {\n  position: relative;\n  display: inline-block;\n  font-weight: bold; }\n\n:host .strike > span:before,\n:host .strike > span:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: white; }\n\n:host .strike > span:before {\n  right: 100%;\n  margin-right: 15px; }\n\n:host .strike > span:after {\n  left: 100%;\n  margin-left: 15px; }\n\n:host .login-button {\n  text-transform: none;\n  text-align: center;\n  color: white;\n  border-radius: 3px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9ncmFkaWVudC9ncmFkaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFUSxnQkFBZ0I7RUFDaEIsdUJBQ0osRUFBQTs7QUFKSjtFQVFRLHFCQUFhO0VBQ2IsMEdBQWE7RUFDYix5R0FBYTtFQUNiLGlHQUFhO0VBQ2IsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQWI5QjtFQWdCUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQWxCMUI7RUFxQlMsZ0JBQWdCLEVBQUE7O0FBckJ6QjtFQXdCUSxnQkFBZ0IsRUFBQTs7QUF4QnhCO0VBNEJRLGtDQUF1QixFQUFBOztBQTVCL0I7RUErQlMsZ0RBQXVCO0VBQ3hCLDhCQUE4QjtFQUM5QixhQUFhO0VBRVgsMkJBQWdCLEVBQUE7O0FBbkMxQjtJQXVDWSxnREFBdUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaURBQTJCLEVBQUE7O0FBM0MzQztJQThDZ0IsZ0NBQWdDLEVBQUE7O0FBOUNoRDtJQWlEZ0IsZ0NBQWdDLEVBQUE7O0FBakRoRDtFQXFEUSxzQkFBYTtFQUNiLDJDQUEyQztFQUMzQyxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBN0RwQjtFQWdFWSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUFuRS9CO0VBc0VZLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBeEU3Qjs7RUE0RVksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFqRjdCO0VBb0ZZLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUFyRjlCO0VBd0ZZLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUF6RjdCO0VBNEZRLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vZ3JhZGllbnQvZ3JhZGllbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5iYWNrQnV0dG9ue1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICAgIH1cbiAgICBpb24tY29udGVudCB7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxNmRlZywgI2ZmMjQwMCwgI2U4MWQxZCwgI2U4YjcxZCwgI2UzZTgxZCwgIzFkZTg0MCwgIzFkZGRlOCwgIzJiMWRlOCwgI2RkMDBmMywgI2RkMDBmMyk7XG4gICAgICAgIFxuICAgICAgICAtLWJhY2tncm91bmQ6ICNmMDk0MzM7IFxuICAgICAgICAtLWJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDQ1ZGVnLCAjZjA5NDMzIDAlLCAjZTY2ODNjIDI1JSwgI2RjMjc0MyA1MCUsICNjYzIzNjYgNzUlLCAjYmMxODg4IDEwMCUpOyBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg0NWRlZywgI2YwOTQzMyAwJSwjZTY2ODNjIDI1JSwjZGMyNzQzIDUwJSwjY2MyMzY2IDc1JSwjYmMxODg4IDEwMCUpOyBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsICNmMDk0MzMgMCUsI2U2NjgzYyAyNSUsI2RjMjc0MyA1MCUsI2NjMjM2NiA3NSUsI2JjMTg4OCAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgICAtLWJvcmRlci1jb2xvciA6IHRyYW5zcGFyZW50O1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgIFxuICAgICAgICAudXNlcmlucHV0e1xuICAgICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAuYnRue1xuICAgICAgICAtLWJhY2tncm91bmQ6IzAwMDAwMDRhO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7ICBcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAuc3RyaWtlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0cmlrZT5zcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpa2U+c3BhbjpiZWZvcmUsXG4gICAgICAgIC5zdHJpa2U+c3BhbjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogOTk5OXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuc3RyaWtlPnNwYW46YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpa2U+c3BhbjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/login/gradient/gradient.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/gradient/gradient.page.ts ***!
  \*******************************************************/
/*! exports provided: GradientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientPage", function() { return GradientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");



var GradientPage = /** @class */ (function () {
    function GradientPage(util) {
        this.util = util;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    GradientPage.prototype.ngOnInit = function () {
    };
    GradientPage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.util.showToast('Successfully Login', 'success', 'bottom');
        }
    };
    GradientPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    GradientPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gradient',
            template: __webpack_require__(/*! ./gradient.page.html */ "./src/app/pages/login/gradient/gradient.page.html"),
            styles: [__webpack_require__(/*! ./gradient.page.scss */ "./src/app/pages/login/gradient/gradient.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], GradientPage);
    return GradientPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-gradient-gradient-module.js.map