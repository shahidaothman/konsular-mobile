(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-firebase-firebase-sign-up-firebase-sign-up-module"],{

/***/ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.module.ts ***!
  \****************************************************************************/
/*! exports provided: FirebaseSignUpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPageModule", function() { return FirebaseSignUpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./firebase-sign-up.page */ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.ts");







var routes = [
    {
        path: '',
        component: _firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["FirebaseSignUpPage"]
    }
];
var FirebaseSignUpPageModule = /** @class */ (function () {
    function FirebaseSignUpPageModule() {
    }
    FirebaseSignUpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_firebase_sign_up_page__WEBPACK_IMPORTED_MODULE_6__["FirebaseSignUpPage"]]
        })
    ], FirebaseSignUpPageModule);
    return FirebaseSignUpPageModule;
}());



/***/ }),

/***/ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Firebase Signup\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div class=\"header\">\n\n  </div>\n\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"title\">Register</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n\n  <form #loginForm=\"ngForm\" (submit)=\"onSubmit(loginForm)\" class=\"signup-form\" no-lines>\n    <div class=\"item\">\n      <input class=\"input\" placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"email\" required />\n    </div>\n    <div class=\"item-white-space\"></div>\n    <div class=\"item\">\n      <input class=\"input\" placeholder=\"Password\" type=\"password\" name=\"password\" [(ngModel)]=\"password\" required />\n    </div>\n    <div class=\"button-white-space\"></div>\n    <div class=\"button-item\" no-lines>\n      <input class=\"call-to-action\" type=\"submit\" value=\"Register\">\n    </div>\n  </form>\n\n  <div class=\"button-white-space\"></div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --overflow: hidden; }\n\n.title {\n  text-align: center;\n  font-family: 'Avenir';\n  font-size: 18px;\n  margin: 0px;\n  margin-top: -10px; }\n\n.center {\n  width: 100%;\n  height: 100%; }\n\n.seperator {\n  width: 90%;\n  margin-top: 20px;\n  height: 1px;\n  background-color: #ECF0F1;\n  margin: auto;\n  display: flex;\n  justify-content: center; }\n\n.signup-form {\n  margin-top: 50px;\n  width: 100%;\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  width: 90%;\n  height: 45px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  border-width: 2px;\n  border-style: solid;\n  border-color: #ECF0F1;\n  margin: auto;\n  display: flex;\n  justify-content: center; }\n\n.input {\n  border-width: 1px;\n  border-color: transparent;\n  background-color: transparent;\n  width: 90%;\n  padding: 5px;\n  height: 42px;\n  margin: auto;\n  display: flex;\n  justify-content: center; }\n\n.button-item {\n  width: 100%; }\n\n.call-to-action {\n  height: 50px;\n  width: 90%;\n  background-color: #0cd1e8;\n  border-radius: 0px;\n  margin: auto;\n  display: flex;\n  color: white;\n  justify-content: center;\n  border-width: 0px;\n  border-color: transparent; }\n\n.button-white-space {\n  height: 75px; }\n\n.item-white-space {\n  height: 10px; }\n\n.title-options {\n  text-align: center;\n  font-family: 'Avenir';\n  font-size: 16px;\n  margin-top: 10px; }\n\n.span {\n  color: #0A64FD; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9maXJlYmFzZS9maXJlYmFzZS1zaWduLXVwL2ZpcmViYXNlLXNpZ24tdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQVcsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFVbkI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixXQUFXO0VBRVgseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBS3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUtwQjtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3pCO0VBRUUsV0FBVyxFQUFBOztBQUdiO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIseUJBQXlCLEVBQUE7O0FBSTNCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsY0FDRixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmlyZWJhc2UvZmlyZWJhc2Utc2lnbi11cC9maXJlYmFzZS1zaWduLXVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnR7XG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGV7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLy8gLmhlYWRlcntcbi8vICAgLy9tYXJnaW4tdG9wOiA0MHB4O1xuLy8gICBoZWlnaHQ6IDUwcHg7XG4vLyAgIG1hcmdpbjogMjBweDtcbi8vICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4vLyB9XG5cbi5jZW50ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uc2VwZXJhdG9ye1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBoZWlnaHQ6IDFweDtcbiAgLy9tYXJnaW46IDEwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjE7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuXG4uc2lnbnVwLWZvcm0ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cblxuXG4uaXRlbXtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjRUNGMEYxO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaW5wdXR7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgd2lkdGg6IDkwJTtcbiAgcGFkZGluZzogNXB4O1xuICBoZWlnaHQ6IDQycHg7XG4gIG1hcmdpbjogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b24taXRlbXtcblxuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhbGwtdG8tYWN0aW9ue1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwY2QxZTg7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogd2hpdGU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItd2lkdGg6IDBweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgLy9ib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5idXR0b24td2hpdGUtc3BhY2V7XG4gIGhlaWdodDogNzVweDtcbn1cblxuLml0ZW0td2hpdGUtc3BhY2V7XG4gIGhlaWdodDogMTBweDtcbn1cblxuLnRpdGxlLW9wdGlvbnN7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXInO1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5zcGFue1xuICBjb2xvcjogIzBBNjRGRFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.ts ***!
  \**************************************************************************/
/*! exports provided: FirebaseSignUpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseSignUpPage", function() { return FirebaseSignUpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_firebase_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/firebase.service */ "./src/app/providers/firebase.service.ts");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var FirebaseSignUpPage = /** @class */ (function () {
    function FirebaseSignUpPage(toastController, firebaseService, util, router) {
        this.toastController = toastController;
        this.firebaseService = firebaseService;
        this.util = util;
        this.router = router;
    }
    FirebaseSignUpPage.prototype.ionViewWillEnter = function () {
    };
    FirebaseSignUpPage.prototype.ngOnInit = function () {
    };
    FirebaseSignUpPage.prototype.onSubmit = function (_a) {
        var _this = this;
        var valid = _a.valid, value = _a.value;
        if (!valid) {
            this.ErrorPresentToast();
        }
        else {
            this.firebaseService.createUserWithEmailAndPass(this.email, this.password).then(function (data) {
                console.log('data', data);
                localStorage.setItem('uid', data.user.uid);
                _this.firebaseService.isAuthorized = true;
                _this.router.navigate[('firebaselist')];
                _this.util.showToast('Register Success', 'success', 'bottom');
            }).catch(function (error) {
                console.log("errr", error);
                _this.util.showToast(error.message, 'danger', 'bottom');
            });
        }
    };
    FirebaseSignUpPage.prototype.ErrorPresentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Sorry we could not log you in, check signup details and try again',
                            duration: 3000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseSignUpPage.prototype.SuccessPresentToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'You have succesfully created an account, welcome to Ionic Starter App 😁',
                            duration: 3000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseSignUpPage.prototype.FailErrPresentToast = function (err) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: "" + err,
                            duration: 3000,
                            position: 'top',
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FirebaseSignUpPage.prototype.registerUser = function (value) {
        value = {
            email: this.email,
            step: 0,
            type: 'user',
            stage: 1,
        };
        // this.authService.getAuth().subscribe(auth => {
        //   if (auth) {
        //     this.id = auth.uid
        //     this.userService.newClient(value, this.id);
        //     this.router.navigate(['home']);
        //   } else {
        //   }
        // });
    };
    FirebaseSignUpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-firebase-sign-up',
            template: __webpack_require__(/*! ./firebase-sign-up.page.html */ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.html"),
            styles: [__webpack_require__(/*! ./firebase-sign-up.page.scss */ "./src/app/pages/firebase/firebase-sign-up/firebase-sign-up.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            src_app_providers_firebase_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseService"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], FirebaseSignUpPage);
    return FirebaseSignUpPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-firebase-firebase-sign-up-firebase-sign-up-module.js.map