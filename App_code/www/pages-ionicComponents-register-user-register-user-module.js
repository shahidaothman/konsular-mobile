(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-register-user-register-user-module"],{

/***/ "./src/app/pages/ionicComponents/register-user/register-user.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register-user/register-user.module.ts ***!
  \*****************************************************************************/
/*! exports provided: RegisterUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPageModule", function() { return RegisterUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_user_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register-user.page */ "./src/app/pages/ionicComponents/register-user/register-user.page.ts");







var routes = [
    {
        path: '',
        component: _register_user_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]
    }
];
var RegisterUserPageModule = /** @class */ (function () {
    function RegisterUserPageModule() {
    }
    RegisterUserPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_user_page__WEBPACK_IMPORTED_MODULE_6__["RegisterUserPage"]]
        })
    ], RegisterUserPageModule);
    return RegisterUserPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/register-user/register-user.page.html":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register-user/register-user.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content padding>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"dark\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"ion-text-center\">\n    <h1>REGISTER</h1>\n\n  </div>\n  <form #loginForm=\"ngForm\" novalidate>\n    <ion-list lines=\"none\">\n\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input placeholder=\"First Name\" name=\"fname\" class=\"userinput\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n\n      <br>\n\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input placeholder=\"Last Name\" name=\"lname\" class=\"userinput\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n      <br>\n      <ion-list-header>\n        <ion-label>\n          Indentification type :\n        </ion-label>\n      </ion-list-header>\n      <ion-item>\n        <div class=\"item-inner\">\n          <ion-label></ion-label>\n          <ion-select placeholder=\"Select One\" class=\"userinput\">\n            <ion-select-option value=\"f\">Female</ion-select-option>\n            <ion-select-option value=\"m\">Male</ion-select-option>\n          </ion-select>\n        </div>\n      </ion-item>\n      <br>\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input placeholder=\"MyKad/Passport No.\" name=\"MyKad/Passport\" class=\"userinput\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n\n      <br>\n\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input [(ngModel)]=\"login.password\" class=\"userinput\" placeholder=\"Password\" name=\"password\"\n            [type]=\"passwordType\" #password=\"ngModel\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n      <br>\n      <ion-item lines=\"none\">\n        <div class=\"item-inner\">\n          <ion-input [(ngModel)]=\"login.password\" class=\"userinput\" placeholder=\"Confirm Password\" name=\"password\"\n            [type]=\"passwordType\" #password=\"ngModel\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n      <br>\n      <ion-item>\n        <div class=\"item-inner\">\n          <ion-input [(ngModel)]=\"login.email\" class=\"userinput\" placeholder=\"Email\" name=\"email\" type=\"email\"\n            #email=\"ngModel\" spellcheck=\"false\" autocapitalize=\"off\" required>\n          </ion-input>\n        </div>\n      </ion-item>\n\n    </ion-list>\n\n    <ion-row>\n      <ion-col>\n        <ion-button (click)=\"onLogin(loginForm)\" type=\"submit\" class=\"btn\" expand=\"block\" (click)=\"home()\">Register\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/register-user/register-user.page.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register-user/register-user.page.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .backButton {\n  margin-top: 10px;\n  background: transparent; }\n\n:host ion-content {\n  --background: white;\n  background-repeat: no-repeat;\n  background-size: cover; }\n\n:host .item-inner {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--inner-padding-start);\n  padding-inline-start: var(--inner-padding-start);\n  -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  border-radius: 30px !important;\n  padding: 6px;\n  border: solid;\n  border-color: #f0f8ffa1;\n  background-color: #dadada7a;\n  width: -webkit-fill-available; }\n\n:host .login-logo {\n  padding: 20px 0;\n  min-height: 100px;\n  text-align: center; }\n\n:host .login-logo img {\n  max-width: 300px; }\n\n:host .list {\n  margin-bottom: 0; }\n\n:host ion-list {\n  --ion-background-color:transparent; }\n\n:host ion-item {\n  /* --ion-background-color: rgba(255, 255, 255, 0.15); */ }\n\n:host ion-item .userinput {\n    --ion-background-color:rgba(255, 255, 255, 0.15);\n    font-size: 10pt;\n    margin-left: 30px;\n    padding-left: 30px;\n    --highlight-color-focused: transparent !important; }\n\n:host ion-item ::-webkit-input-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host ion-item ::-moz-placeholder {\n    color: rgba(255, 255, 255, 0.45); }\n\n:host .ion-text-center {\n  color: #274da1; }\n\n:host .btn {\n  background-color: #274da1 !important;\n  border: 1px solid rgba(255, 255, 255, 0.15);\n  color: white;\n  border-radius: 4px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: .3px;\n  transition: all .3s ease;\n  height: 50px; }\n\n:host .strike {\n  display: block;\n  text-align: center;\n  overflow: hidden;\n  white-space: nowrap; }\n\n:host .strike > span {\n  position: relative;\n  display: inline-block;\n  font-weight: bold; }\n\n:host .strike > span:before,\n:host .strike > span:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  width: 9999px;\n  height: 1px;\n  background: white; }\n\n:host .strike > span:before {\n  right: 100%;\n  margin-right: 15px; }\n\n:host .strike > span:after {\n  left: 100%;\n  margin-left: 15px; }\n\n:host .login-button {\n  text-transform: none;\n  text-align: center;\n  color: #274da1;\n  border-radius: 3px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvcmVnaXN0ZXItdXNlci9yZWdpc3Rlci11c2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQ0E7RUFFUSxnQkFBZ0I7RUFDaEIsdUJBQ0osRUFBQTs7QUFKSjtFQVFRLG1CQUFhO0VBSWIsNEJBQTRCO0VBQzVCLHNCQUFzQixFQUFBOztBQWI5QjtFQWdCUSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGlEQUFpRDtFQUNqRCxnREFBZ0Q7RUFDaEQscUZBQXFGO0VBQ3JGLG9GQUFvRjtFQUNwRiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsMkJBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQTNCckM7RUE4QlEsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFoQzFCO0VBbUNTLGdCQUFnQixFQUFBOztBQW5DekI7RUFzQ1EsZ0JBQWdCLEVBQUE7O0FBdEN4QjtFQTBDUSxrQ0FBdUIsRUFBQTs7QUExQy9CO0VBNkNJLHVEQUFBLEVBQXdEOztBQTdDNUQ7SUFzRFksZ0RBQXVCO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlEQUEyQixFQUFBOztBQTFEM0M7SUE2RGdCLGdDQUFnQyxFQUFBOztBQTdEaEQ7SUFnRWdCLGdDQUFnQyxFQUFBOztBQWhFaEQ7RUFvRVEsY0FBYyxFQUFBOztBQXBFdEI7RUF3RVEsb0NBQW9DO0VBQ3BDLDJDQUEyQztFQUMzQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHdCQUF3QjtFQUN4QixZQUFZLEVBQUE7O0FBaEZwQjtFQW1GWSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUIsRUFBQTs7QUF0Ri9CO0VBeUZZLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCLEVBQUE7O0FBM0Y3Qjs7RUErRlksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFwRzdCO0VBdUdZLFdBQVc7RUFDWCxrQkFBa0IsRUFBQTs7QUF4RzlCO0VBMkdZLFVBQVU7RUFDVixpQkFBaUIsRUFBQTs7QUE1RzdCO0VBK0dRLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDZCQUE2QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL3JlZ2lzdGVyLXVzZXIvcmVnaXN0ZXItdXNlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA6aG9zdCB7XG4vLyAgICAgaW9uLWNvbnRlbnQge1xuLy8gICAgICAgICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dpbmJnLmpwZWcnKSBuby1yZXBlYXQgMTAwJSAxMDAlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQgOyBcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIH1cbi8vICAgICAuYmFja0J1dHRvbntcbi8vICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbi8vICAgICB9XG4vLyAgICAgLmxvZ2luLWxvZ28ge1xuLy8gICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4vLyAgICAgICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuLy8gICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyAgICAgfVxuLy8gICAgIC5idG5fY2xhc3N7XG4vLyAgICAgICAgIGhlaWdodDogNTBweDtcbi8vICAgICB9XG4vLyAgICAgLmxvZ2luLWxvZ28gaW1nIHtcbi8vICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4vLyAgICAgfVxuLy8gICAgIC5saXN0IHtcbi8vICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgICB9XG4vLyAgICAgaW9uLWxpc3R7XG4vLyAgICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4vLyAgICAgfVxuLy8gICAgIGlvbi1pdGVte1xuLy8gICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZjRmNWY4O1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4vLyAgICAgICAgICAgLS1ib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgLy8gbWFyZ2luLXRvcDogMjBweDtcbi8vICAgICB9XG4vLyB9XG5cbjpob3N0IHtcbiAgICAuYmFja0J1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICB9XG4gICAgaW9uLWNvbnRlbnQge1xuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTZkZWcsICNmZjI0MDAsICNlODFkMWQsICNlOGI3MWQsICNlM2U4MWQsICMxZGU4NDAsICMxZGRkZTgsICMyYjFkZTgsICNkZDAwZjMsICNkZDAwZjMpO1xuICAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgLy8gLS1iYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoMjcsNDMsODgsMSkgMCUsIHJnYmEoNDUsMTIyLDE1OSwxKSAyNSUsIHJnYmEoNjMsMTYzLDIxNSwxKSA2MiUsIHJnYmEoOTgsMjAxLDI1NSwxKSA4MiUsIHJnYmEoMTQ5LDIxOCwyNTUsMSkgMTAwJSk7IFxuICAgICAgICAvLyAtLWJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTsgXG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyNyw0Myw4OCwxKSAwJSwgcmdiYSg0NSwxMjIsMTU5LDEpIDI1JSwgcmdiYSg2MywxNjMsMjE1LDEpIDYyJSwgcmdiYSg5OCwyMDEsMjU1LDEpIDgyJSwgcmdiYSgxNDksMjE4LDI1NSwxKSAxMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgIFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyBcbiAgICB9XG4gICAgLml0ZW0taW5uZXIge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAgICAgLXdlYmtpdC1wYWRkaW5nLXN0YXJ0OiB2YXIoLS1pbm5lci1wYWRkaW5nLXN0YXJ0KTtcbiAgICAgICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlubmVyLXBhZGRpbmctc3RhcnQpO1xuICAgICAgICAtd2Via2l0LXBhZGRpbmctZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkgKyB2YXIoLS1pbm5lci1wYWRkaW5nLWVuZCkpO1xuICAgICAgICBwYWRkaW5nLWlubGluZS1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSArIHZhcigtLWlubmVyLXBhZGRpbmctZW5kKSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICBib3JkZXI6IHNvbGlkO1xuICAgICAgICBib3JkZXItY29sb3I6ICNmMGY4ZmZhMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RhZGFkYTdhO1xuICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICB9XG4gICAgLmxvZ2luLWxvZ28ge1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5sb2dpbi1sb2dvIGltZyB7XG4gICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIH1cbiAgICAubGlzdCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuICAgXG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgIC8qIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7ICovXG4gICAgLy8gYm9yZGVyLXJhZGl1czogMzBweCAhaW1wb3J0YW50O1xuICAgIC8vIHBhZGRpbmc6IDNweDtcbiAgICBcbiAgICAvLyBib3JkZXI6IHNvbGlkO1xuICAgIC8vIGJvcmRlci1jb2xvcjogI2YwZjhmZmExO1xuICAgICAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIFxuICAgICAgICAudXNlcmlucHV0e1xuICAgICAgICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICAgICAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNDUpO1xuICAgICAgICAgICAgfVxuICAgIH1cbiAgICAuaW9uLXRleHQtY2VudGVye1xuICAgICAgICBjb2xvcjogIzI3NGRhMTtcbiAgICB9XG5cbiAgICAuYnRue1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjc0ZGExICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAuM3B4O1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7ICBcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgIH1cbiAgICAuc3RyaWtlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgICAgLnN0cmlrZT5zcGFuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpa2U+c3BhbjpiZWZvcmUsXG4gICAgICAgIC5zdHJpa2U+c3BhbjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICB3aWR0aDogOTk5OXB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICAuc3RyaWtlPnNwYW46YmVmb3JlIHtcbiAgICAgICAgICAgIHJpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdHJpa2U+c3BhbjphZnRlciB7XG4gICAgICAgICAgICBsZWZ0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgfVxuICAgIC5sb2dpbi1idXR0b24ge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogIzI3NGRhMTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/register-user/register-user.page.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register-user/register-user.page.ts ***!
  \***************************************************************************/
/*! exports provided: RegisterUserPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserPage", function() { return RegisterUserPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterUserPage = /** @class */ (function () {
    function RegisterUserPage() {
    }
    RegisterUserPage.prototype.ngOnInit = function () {
    };
    RegisterUserPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.page.html */ "./src/app/pages/ionicComponents/register-user/register-user.page.html"),
            styles: [__webpack_require__(/*! ./register-user.page.scss */ "./src/app/pages/ionicComponents/register-user/register-user.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegisterUserPage);
    return RegisterUserPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-register-user-register-user-module.js.map