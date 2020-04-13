(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-simple-simple-module"],{

/***/ "./src/app/pages/login/simple/simple.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/simple/simple.module.ts ***!
  \*****************************************************/
/*! exports provided: SimplePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePageModule", function() { return SimplePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _simple_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simple.page */ "./src/app/pages/login/simple/simple.page.ts");







var routes = [
    {
        path: '',
        component: _simple_page__WEBPACK_IMPORTED_MODULE_6__["SimplePage"]
    }
];
var SimplePageModule = /** @class */ (function () {
    function SimplePageModule() {
    }
    SimplePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_simple_page__WEBPACK_IMPORTED_MODULE_6__["SimplePage"]]
        })
    ], SimplePageModule);
    return SimplePageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/simple/simple.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/simple/simple.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-content padding>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"login-logo\">\n    <img src=\"assets/images/icon.png\" alt=\"Ionic logo\">\n  </div>\n\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" color=\"primary\">Email</ion-label>\n        <ion-input [(ngModel)]=\"login.email\" name=\"email\" type=\"email\" #email=\"ngModel\" spellcheck=\"false\"\n          autocapitalize=\"off\" required>\n        </ion-input>\n\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <ion-label position=\"stacked\" color=\"primary\">Password</ion-label>\n        <ion-input [(ngModel)]=\"login.password\" name=\"password\" [type]=\"passwordType\" #password=\"ngModel\" required>\n        </ion-input>\n        <ion-icon [name]=\"passwordIcon\" slot=\"end\" (click)='hideShowPassword()'></ion-icon>\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button class=\"btn_class\" (click)=\"onLogin(loginForm)\" type=\"submit\" expand=\"block\" (click)=\"home()\">Login\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n</ion-content> -->\n\n<ion-content padding>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"login-logo\">\n    <img src=\"assets/images/logo_white.png\" alt=\"Ionic logo\">\n  </div>\n  <div class=\"ion-text-center\">\n    <h1>LOGIN</h1>\n\n  </div>\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input [(ngModel)]=\"login.email\" class=\"userinput\" placeholder=\"MyKad/Passport No.\" name=\"email\"\n            type=\"email\" #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n\n      <br>\n      <ion-text color=\"light\">\n        <p [hidden]=\"email.valid || submitted == false\" class=\"ion-padding-start\">\n          Email is required\n        </p>\n      </ion-text>\n\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input [(ngModel)]=\"login.password\" class=\"userinput\" placeholder=\"Password\" name=\"password\"\n            [type]=\"passwordType\" #password=\"ngModel\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n\n      <ion-text color=\"light\">\n        <p [hidden]=\"password.valid || submitted == false\" class=\"ion-padding-start\">\n          Password is required\n        </p>\n      </ion-text>\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" class=\"btn\" expand=\"block\" (click)=\"home()\">LOGIN\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n  <div class=\"login-button\">\n    <span>Forgot Password?</span>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/simple/simple.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/login/simple/simple.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .backButton {\n  margin-top: 10px;\n  background: transparent; }\n\n:host ion-content {\n  --background: white;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n:host .item-inner {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--inner-padding-start);\n  padding-inline-start: var(--inner-padding-start);\n  -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  border-radius: 30px !important;\n  padding: 3px;\n  border: solid;\n  border-color: #f0f8ffa1;\n  background-color: #e0e0e059; }\n\n:host .login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center; }\n\n:host .login-logo img {\n  max-width: 300px; }\n\n:host .list {\n  margin-bottom: 0; }\n\n:host ion-list {\n  --ion-background-color:transparent; }\n\n:host ion-item {\n  /* --ion-background-color: rgba(255, 255, 255, 0.15); */ }\n\n:host ion-item .item-inner {\n    border-radius: 30px !important;\n    padding: 6px;\n    border: solid;\n    border-color: #f0f8ffa1;\n    background-color: #dadada7a;\n    width: -webkit-fill-available; }\n\n:host ion-item .userinput {\n    --ion-background-color:rgba(255, 255, 255, 0.15);\n    font-size: 10pt;\n    margin-left: 30px;\n    padding-left: 30px;\n    --highlight-color-focused: transparent !important; }\n\n:host ion-item ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host ion-item ::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host .ion-text-center {\n  color: #274da1; }\n\n:host .btn {\n  background-color: #274da1 !important;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: white;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .3px;\n  transition: all .3s ease;\n  height: 50px; }\n\n:host .strike {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap; }\n\n:host .strike > span {\n  position: relative;\n  display: inline-block;\n  font-weight: bold; }\n\n:host .strike > span:before,\n:host .strike > span:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: white; }\n\n:host .strike > span:before {\n  right: 100%;\n  margin-right: 15px; }\n\n:host .strike > span:after {\n  left: 100%;\n  margin-left: 15px; }\n\n:host .login-button {\n  text-transform: none;\n  text-align: center;\n  color: #274da1;\n  border-radius: 3px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9zaW1wbGUvc2ltcGxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0E7RUFFUSxnQkFBZ0I7RUFDaEIsdUJBQ0osRUFBQTs7QUFKSjtFQVFRLG1CQUFhO0VBSWIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQWI5QjtFQWdCUSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlEQUFpRDtFQUNqRCxnREFBZ0Q7RUFDaEQscUZBQXFGO0VBQ3JGLG9GQUFvRjtFQUNwRiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCLEVBQUE7O0FBMUJuQztFQTZCUSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQS9CMUI7RUFrQ1MsZ0JBQWdCLEVBQUE7O0FBbEN6QjtFQXFDUSxnQkFBZ0IsRUFBQTs7QUFyQ3hCO0VBeUNRLGtDQUF1QixFQUFBOztBQXpDL0I7RUE0Q0ksdURBQUEsRUFBd0Q7O0FBNUM1RDtJQXFEWSw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLDZCQUE2QixFQUFBOztBQTFEekM7SUE2RFksZ0RBQXVCO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlEQUEyQixFQUFBOztBQWpFM0M7SUFvRWdCLGdDQUFnQyxFQUFBOztBQXBFaEQ7SUF1RWdCLGdDQUFnQyxFQUFBOztBQXZFaEQ7RUEyRVEsY0FBYyxFQUFBOztBQTNFdEI7RUErRVEsb0NBQW9DO0VBQ3BDLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBdkZwQjtFQTBGWSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUE3Ri9CO0VBZ0dZLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBbEc3Qjs7RUFzR1ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUEzRzdCO0VBOEdZLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUEvRzlCO0VBa0hZLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUFuSDdCO0VBc0hRLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vc2ltcGxlL3NpbXBsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCB7XG4vLyAgICAgaW9uLWNvbnRlbnQge1xuLy8gICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbmJnLmpwZWcnKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgOyBcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIH1cbi8vICAgICAuYmFja0J1dHRvbntcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbi8vICAgICB9XG4vLyAgICAgLmxvZ2luLWxvZ28ge1xuLy8gICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4vLyAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgfVxuLy8gICAgIC5idG5fY2xhc3N7XG4vLyAgICAgICAgIGhlaWdodDogNTBweDtcbi8vICAgICB9XG4vLyAgICAgLmxvZ2luLWxvZ28gaW1nIHtcbi8vICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4vLyAgICAgfVxuLy8gICAgIC5saXN0IHtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgICB9XG4vLyAgICAgaW9uLWxpc3R7XG4vLyAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4vLyAgICAgfVxuLy8gICAgIGlvbi1pdGVte1xuLy8gICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjRmNWY4O1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4vLyAgICAgICAgICAgLS1ib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICB9XG4vLyB9XG5cbjpob3N0IHtcbiAgICAuYmFja0J1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xuICAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjcsNDMsODgsMSkgMCUsIHJnYmEoNDUsMTIyLDE1OSwxKSAyNSUsIHJnYmEoNjMsMTYzLDIxNSwxKSA2MiUsIHJnYmEoOTgsMjAxLDI1NSwxKSA4MiUsIHJnYmEoMTQ5LDIxOCwyNTUsMSkgMTAwJSk7IFxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTsgXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pbm5lci1wYWRkaW5nLXN0YXJ0KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlubmVyLXBhZGRpbmctc3RhcnQpO1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkgKyB2YXIoLS1pbm5lci1wYWRkaW5nLWVuZCkpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSArIHZhcigtLWlubmVyLXBhZGRpbmctZW5kKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogM3B4O1xuICAgICAgICBib3JkZXI6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmMGY4ZmZhMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDU5O1xuICAgIH1cbiAgICAubG9naW4tbG9nbyB7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMDtcbiAgICAgICAgbWluLWhlaWdodDogMTAwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28gaW1nIHtcbiAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICBcbiAgICBpb24tbGlzdHtcbiAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgLyogLS1pb24tYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTsgKi9cbiAgICAvLyBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgLy8gcGFkZGluZzogM3B4O1xuICAgIFxuICAgIC8vIGJvcmRlcjogc29saWQ7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAjZjBmOGZmYTE7XG4gICAgICAgIC8vIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgXG4gICAgICAgICAuaXRlbS1pbm5lciB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICBib3JkZXI6IHNvbGlkO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjZjBmOGZmYTE7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhN2E7XG4gICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB9XG4gICAgICAgIC51c2VyaW5wdXR7XG4gICAgICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgICAgICAgICB9XG4gICAgfVxuICAgIC5pb24tdGV4dC1jZW50ZXJ7XG4gICAgICAgIGNvbG9yOiAjMjc0ZGExO1xuICAgIH1cblxuICAgIC5idG57XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzRkYTEgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTsgIFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgfVxuICAgIC5zdHJpa2Uge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICAuc3RyaWtlPnNwYW4ge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLnN0cmlrZT5zcGFuOmJlZm9yZSxcbiAgICAgICAgLnN0cmlrZT5zcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiA5OTk5cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpa2U+c3BhbjpiZWZvcmUge1xuICAgICAgICAgICAgcmlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0cmlrZT5zcGFuOmFmdGVyIHtcbiAgICAgICAgICAgIGxlZnQ6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICB9XG4gICAgLmxvZ2luLWJ1dHRvbiB7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMjc0ZGExO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggIWltcG9ydGFudDtcbiAgICB9XG4gICAgXG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/simple/simple.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/login/simple/simple.page.ts ***!
  \***************************************************/
/*! exports provided: SimplePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplePage", function() { return SimplePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SimplePage = /** @class */ (function () {
    function SimplePage(util, router) {
        this.util = util;
        this.router = router;
        this.login = { email: '', password: '' };
        this.submitted = false;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
    }
    SimplePage.prototype.ngOnInit = function () {
    };
    SimplePage.prototype.home = function () {
        console.log('simple login');
        this.router.navigate(['new-home']);
    };
    SimplePage.prototype.onLogin = function (form) {
        this.submitted = true;
        if (form.valid) {
            this.util.showToast('Successfully Login', 'success', 'bottom');
        }
    };
    SimplePage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SimplePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-simple',
            template: __webpack_require__(/*! ./simple.page.html */ "./src/app/pages/login/simple/simple.page.html"),
            styles: [__webpack_require__(/*! ./simple.page.scss */ "./src/app/pages/login/simple/simple.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SimplePage);
    return SimplePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-simple-simple-module.js.map