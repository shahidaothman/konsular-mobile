(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-advanced-advanced-module"],{

/***/ "./src/app/pages/login/advanced/advanced.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/advanced/advanced.module.ts ***!
  \*********************************************************/
/*! exports provided: AdvancedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPageModule", function() { return AdvancedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _advanced_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./advanced.page */ "./src/app/pages/login/advanced/advanced.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _advanced_page__WEBPACK_IMPORTED_MODULE_6__["AdvancedPage"]
    }
];
var AdvancedPageModule = /** @class */ (function () {
    function AdvancedPageModule() {
    }
    AdvancedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_advanced_page__WEBPACK_IMPORTED_MODULE_6__["AdvancedPage"]]
        })
    ], AdvancedPageModule);
    return AdvancedPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/advanced/advanced.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/advanced/advanced.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <ion-slides class=\"mainSlide\" #slidePrincipal [options]=\"slideOpts\">\n    <ion-slide>\n      <form #fLogin=\"ngForm\">\n        <ion-grid fixed>\n          <ion-row>\n            <ion-col>\n              <img src=\"/assets/avatars/1.jpg\">\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-label>Email</ion-label>\n                  <ion-input [(ngModel)]=\"loginUser.email\" name=\"email\" type=\"email\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Password</ion-label>\n                  <ion-input [(ngModel)]=\"loginUser.password\" name=\"password\" type=\"password\" required></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                Login\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </form>\n    </ion-slide>\n    <ion-slide>\n      <ion-grid fixed>\n        <!-- avatar selector -->\n        <app-avatar-selector (avatarSel)=\"registerUser.avatar = $event\"></app-avatar-selector>\n        <form #fRegistro=\"ngForm\">\n          <ion-row>\n            <ion-col>\n              <ion-list>\n                <ion-item>\n                  <ion-label>Email</ion-label>\n                  <ion-input [(ngModel)]=\"registerUser.email\" name=\"email\" type=\"email\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Name</ion-label>\n                  <ion-input [(ngModel)]=\"registerUser.name\" name=\"name\" type=\"text\" required></ion-input>\n                </ion-item>\n                <ion-item>\n                  <ion-label>Password</ion-label>\n                  <ion-input [(ngModel)]=\"registerUser.password\" name=\"password\" type=\"password\" required></ion-input>\n                </ion-item>\n              </ion-list>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-button type=\"submit\" color=\"tertiary\" shape=\"round\">\n                Crear Account\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </form>\n      </ion-grid>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"mostrarRegistro()\" shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\"\n          color=\"tertiary\">\n          Login\n        </ion-button>\n      </ion-col>\n      <ion-col>\n        <ion-button (click)=\"mostrarLogin()\" shape=\"round\" expand=\"full\" size=\"small\" fill=\"outline\" color=\"tertiary\">\n          Register\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/login/advanced/advanced.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/login/advanced/advanced.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backButton {\n  margin-top: 20px;\n  background: transparent; }\n\n.mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%; }\n\nimg {\n  width: 120px;\n  height: 120px;\n  border-radius: 50%; }\n\n.pick-avatar {\n  width: 80px;\n  opacity: 0.3; }\n\n.pick-avatar-seleccionado {\n  transition: opacity 0.5s linear;\n  opacity: 1 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9hZHZhbmNlZC9hZHZhbmNlZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUM7RUFDTyxnQkFBZ0I7RUFDaEIsdUJBQ0osRUFBQTs7QUFDSjs7RUFFSSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksV0FBVztFQUNYLFlBQVksRUFBQTs7QUFHaEI7RUFDSSwrQkFBK0I7RUFDL0IscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9hZHZhbmNlZC9hZHZhbmNlZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgLmJhY2tCdXR0b257XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XG4gICAgfVxuLm1haW5TbGlkZSxcbi5tYWluU2xpZGUgaW9uLXNsaWRlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbmltZyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xufVxuXG4ucGljay1hdmF0YXIge1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIG9wYWNpdHk6IDAuMztcbn1cblxuLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzIGxpbmVhcjtcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/advanced/advanced.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/advanced/advanced.page.ts ***!
  \*******************************************************/
/*! exports provided: AdvancedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvancedPage", function() { return AdvancedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var AdvancedPage = /** @class */ (function () {
    function AdvancedPage() {
        this.loginUser = {
            email: 'test1@gmail.com',
            password: '123456'
        };
        this.registerUser = {
            email: 'test',
            password: '123456',
            name: 'Rcap Designs',
            avatar: 'av-1.png'
        };
        this.slideOpts = {
            zoom: false
        };
    }
    AdvancedPage.prototype.ngOnInit = function () {
        this.slides.lockSwipes(true);
    };
    AdvancedPage.prototype.mostrarRegistro = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(0);
        this.slides.lockSwipes(true);
    };
    AdvancedPage.prototype.mostrarLogin = function () {
        this.slides.lockSwipes(false);
        this.slides.slideTo(1);
        this.slides.lockSwipes(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], AdvancedPage.prototype, "slides", void 0);
    AdvancedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-advanced',
            template: __webpack_require__(/*! ./advanced.page.html */ "./src/app/pages/login/advanced/advanced.page.html"),
            styles: [__webpack_require__(/*! ./advanced.page.scss */ "./src/app/pages/login/advanced/advanced.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdvancedPage);
    return AdvancedPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-advanced-advanced-module.js.map