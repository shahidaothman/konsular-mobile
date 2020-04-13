(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-video-backgroud-video-backgroud-module"],{

/***/ "./src/app/pages/login/video-backgroud/video-backgroud.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/video-backgroud/video-backgroud.module.ts ***!
  \***********************************************************************/
/*! exports provided: VideoBackgroudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBackgroudPageModule", function() { return VideoBackgroudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _video_backgroud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./video-backgroud.page */ "./src/app/pages/login/video-backgroud/video-backgroud.page.ts");







var routes = [
    {
        path: '',
        component: _video_backgroud_page__WEBPACK_IMPORTED_MODULE_6__["VideoBackgroudPage"]
    }
];
var VideoBackgroudPageModule = /** @class */ (function () {
    function VideoBackgroudPageModule() {
    }
    VideoBackgroudPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_video_backgroud_page__WEBPACK_IMPORTED_MODULE_6__["VideoBackgroudPage"]]
        })
    ], VideoBackgroudPageModule);
    return VideoBackgroudPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/video-backgroud/video-backgroud.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/video-backgroud/video-backgroud.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content force-overscroll=\"false\" has-bouncing='false'>\n\n  <div class=\"background-video\">\n    <video autoplay=\"autoplay\" class=\"video\" loop=\"\" muted=\"\" playsinline=\"1\" poster=\"assets/videos/background.png\"\n      preload=\"metadata\" src=\"assets/videos/login-bg.mp4\"></video>\n  </div>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"div_in\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Enter Your Email\" [(ngModel)]=\"email\" class=\"i\" type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Enter Your Password\" [(ngModel)]=\"password\" class=\"i\" type=\"password\"></ion-input>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"block\" (click)=\"goHome()\" class=\"btn_login\">\n        Login\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/video-backgroud/video-backgroud.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/video-backgroud/video-backgroud.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".background-video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n  .background-video .video {\n    z-index: -100;\n    min-width: 100%;\n    min-height: 100%; }\n  .backButton {\n  margin-top: 10px;\n  background: transparent; }\n  .div_in {\n  margin-top: 70%;\n  padding-left: 20px;\n  padding-right: 20px;\n  width: 100%; }\n  .div_in ion-item {\n    --background: white;\n    border-radius: 35px !important;\n    box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.14);\n    --border-color: transparent;\n    margin-top: 20px;\n    height: 40px; }\n  .div_in .i {\n    font-size: 10pt;\n    margin-left: 30px;\n    padding-left: 30px;\n    --highlight-color-focused: transparent !important; }\n  .div_in .img_user {\n    margin-left: 20px; }\n  .div_btn {\n  margin-top: 20px; }\n  .div_btn .btn_login {\n    --background: #0cd1e8 !important;\n    --border-radius:10px;\n    height: 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9sb2dpbi92aWRlby1iYWNrZ3JvdWQvdmlkZW8tYmFja2dyb3VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCLEVBQUE7RUFOcEI7SUFRUSxhQUFhO0lBQ2IsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBR3ZCO0VBQ08sZ0JBQWdCO0VBQ2hCLHVCQUNKLEVBQUE7RUFDSjtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtFQUpmO0lBTVEsbUJBQWM7SUFDZCw4QkFBOEI7SUFDOUIsaURBQWlEO0lBQ2pELDJCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBO0VBWHBCO0lBY1EsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaURBQTJCLEVBQUE7RUFqQm5DO0lBb0JRLGlCQUFpQixFQUFBO0VBR3pCO0VBQ0ksZ0JBQWdCLEVBQUE7RUFEcEI7SUFHUSxnQ0FBYTtJQUNiLG9CQUFpQjtJQUNqQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL3ZpZGVvLWJhY2tncm91ZC92aWRlby1iYWNrZ3JvdWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtdmlkZW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC52aWRlb3tcbiAgICAgICAgei1pbmRleDogLTEwMDtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIH1cbn1cbiAuYmFja0J1dHRvbntcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcbiAgICB9XG4uZGl2X2lue1xuICAgIG1hcmdpbi10b3A6IDcwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBpb24taXRlbXtcbiAgICAgICAgLS1iYWNrZ3JvdW5kIDogd2hpdGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDM1cHggIWltcG9ydGFudDtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCAycHggcmdiYSgwLCAwLCAwLCAwLjE0KTtcbiAgICAgICAgLS1ib3JkZXItY29sb3IgOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgIH1cbiAgICAuaXtcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgICAgXG4gICAgfVxuICAgIC5pbWdfdXNlcntcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgfVxufVxuLmRpdl9idG57XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAuYnRuX2xvZ2lue1xuICAgICAgICAtLWJhY2tncm91bmQ6ICMwY2QxZTggIWltcG9ydGFudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzIDoxMHB4O1xuICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/login/video-backgroud/video-backgroud.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/login/video-backgroud/video-backgroud.page.ts ***!
  \*********************************************************************/
/*! exports provided: VideoBackgroudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoBackgroudPage", function() { return VideoBackgroudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");



var VideoBackgroudPage = /** @class */ (function () {
    function VideoBackgroudPage(util) {
        this.util = util;
        this.email = '';
        this.password = '';
    }
    VideoBackgroudPage.prototype.ngOnInit = function () {
    };
    VideoBackgroudPage.prototype.goHome = function () {
        if (this.email == '' || this.password == '') {
            this.util.showWarningAlert('All Fields are Required');
        }
        else {
            this.util.showToast('Login Success', 'success', 'bottom');
        }
    };
    VideoBackgroudPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-backgroud',
            template: __webpack_require__(/*! ./video-backgroud.page.html */ "./src/app/pages/login/video-backgroud/video-backgroud.page.html"),
            styles: [__webpack_require__(/*! ./video-backgroud.page.scss */ "./src/app/pages/login/video-backgroud/video-backgroud.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], VideoBackgroudPage);
    return VideoBackgroudPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-video-backgroud-video-backgroud-module.js.map