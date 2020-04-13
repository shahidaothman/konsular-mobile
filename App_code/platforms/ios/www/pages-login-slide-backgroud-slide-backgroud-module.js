(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-slide-backgroud-slide-backgroud-module"],{

/***/ "./src/app/pages/login/slide-backgroud/slide-backgroud.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/slide-backgroud/slide-backgroud.module.ts ***!
  \***********************************************************************/
/*! exports provided: SlideBackgroudPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideBackgroudPageModule", function() { return SlideBackgroudPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_backgroud_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide-backgroud.page */ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.ts");







var routes = [
    {
        path: '',
        component: _slide_backgroud_page__WEBPACK_IMPORTED_MODULE_6__["SlideBackgroudPage"]
    }
];
var SlideBackgroudPageModule = /** @class */ (function () {
    function SlideBackgroudPageModule() {
    }
    SlideBackgroudPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slide_backgroud_page__WEBPACK_IMPORTED_MODULE_6__["SlideBackgroudPage"]]
        })
    ], SlideBackgroudPageModule);
    return SlideBackgroudPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/slide-backgroud/slide-backgroud.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n  <ion-slides [options]=\"slideOpts\" #slidePrincipal class=\"mainSlide\">\n    <ion-slide *ngFor=\"let i of images\" [ngStyle]=\"{'background-image': 'url(' + i +')'}\">\n    </ion-slide>\n  </ion-slides>\n  <div class=\"backButton\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n  </div>\n  <div class=\"login-container\">\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Enter Your Email\" [(ngModel)]=\"email\" class=\"i\" type=\"email\"></ion-input>\n    </ion-item>\n\n    <ion-item lines=\"none\">\n      <ion-input placeholder=\"Enter Your Password\" [(ngModel)]=\"password\" class=\"i\" type=\"password\"></ion-input>\n    </ion-item>\n\n    <div class=\"div_btn\">\n      <ion-button expand=\"block\" (click)=\"goHome()\" class=\"btn_login\">\n        Login\n      </ion-button>\n    </div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/slide-backgroud/slide-backgroud.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainSlide,\n.mainSlide ion-slide {\n  width: 100%;\n  height: 100%;\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat; }\n\n.backButton {\n  margin-top: 10px;\n  background: transparent;\n  position: absolute;\n  top: 0;\n  text-align: center;\n  z-index: 2; }\n\n.login-container {\n  position: absolute;\n  top: 0;\n  padding: 10vw;\n  text-align: center;\n  width: 100%;\n  z-index: 2;\n  margin-top: 70%; }\n\n.login-container ion-item {\n    --background: white;\n    border-radius: 35px !important;\n    box-shadow: 0px 10px 25px 2px rgba(0, 0, 0, 0.14);\n    --border-color: transparent;\n    margin-top: 20px;\n    height: 40px; }\n\n.login-container .i {\n    font-size: 10pt;\n    margin-left: 30px;\n    padding-left: 30px;\n    --highlight-color-focused: transparent !important; }\n\n.login-container .img_user {\n    margin-left: 20px; }\n\n.div_btn {\n  margin-top: 20px; }\n\n.div_btn .btn_login {\n    --background: #0cd1e8 !important;\n    --border-radius:10px;\n    height: 50px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9sb2dpbi9zbGlkZS1iYWNrZ3JvdWQvc2xpZGUtYmFja2dyb3VkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixzQkFBc0I7RUFDdEIsNEJBQTRCLEVBQUE7O0FBRS9CO0VBQ0csZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGtCQUFrQjtFQUNsQixVQUFVLEVBQUE7O0FBRVo7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlLEVBQUE7O0FBUGpCO0lBU00sbUJBQWM7SUFDZCw4QkFBOEI7SUFDOUIsaURBQWlEO0lBQ2pELDJCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWSxFQUFBOztBQWRsQjtJQWlCTSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpREFBMkIsRUFBQTs7QUFwQmpDO0lBdUJNLGlCQUFpQixFQUFBOztBQUd6QjtFQUNJLGdCQUFnQixFQUFBOztBQURwQjtJQUdRLGdDQUFhO0lBQ2Isb0JBQWlCO0lBQ2pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vc2xpZGUtYmFja2dyb3VkL3NsaWRlLWJhY2tncm91ZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpblNsaWRlLFxuLm1haW5TbGlkZSBpb24tc2xpZGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufVxuIC5iYWNrQnV0dG9ue1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgei1pbmRleDogMjtcbiAgICB9XG4gIC5sb2dpbi1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZzogMTB2dztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMjtcbiAgICBtYXJnaW4tdG9wOiA3MCU7XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIC0tYmFja2dyb3VuZCA6IHdoaXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzNXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDI1cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xNCk7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICB9XG4gICAgLml7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICAgIFxuICAgIH1cbiAgICAuaW1nX3VzZXJ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIH1cbn1cbi5kaXZfYnRue1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgLmJ0bl9sb2dpbntcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjMGNkMWU4ICFpbXBvcnRhbnQ7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1cyA6MTBweDtcbiAgICAgICAgaGVpZ2h0OiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/login/slide-backgroud/slide-backgroud.page.ts ***!
  \*********************************************************************/
/*! exports provided: SlideBackgroudPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideBackgroudPage", function() { return SlideBackgroudPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");




var SlideBackgroudPage = /** @class */ (function () {
    function SlideBackgroudPage(util) {
        this.util = util;
        this.slideOpts = {
            initialSlide: 0,
            speed: 2000,
            autoplay: true,
            on: {
                beforeInit: function () {
                    var swiper = this;
                    swiper.classNames.push(swiper.params.containerModifierClass + "fade");
                    var overwriteParams = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: true,
                        spaceBetween: 0,
                        virtualTranslate: true,
                    };
                    swiper.params = Object.assign(swiper.params, overwriteParams);
                    swiper.params = Object.assign(swiper.originalParams, overwriteParams);
                },
                setTranslate: function () {
                    var swiper = this;
                    var slides = swiper.slides;
                    for (var i = 0; i < slides.length; i += 1) {
                        var $slideEl = swiper.slides.eq(i);
                        var offset$$1 = $slideEl[0].swiperSlideOffset;
                        var tx = -offset$$1;
                        if (!swiper.params.virtualTranslate)
                            tx -= swiper.translate;
                        var ty = 0;
                        if (!swiper.isHorizontal()) {
                            ty = tx;
                            tx = 0;
                        }
                        var slideOpacity = swiper.params.fadeEffect.crossFade
                            ? Math.max(1 - Math.abs($slideEl[0].progress), 0)
                            : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
                        $slideEl
                            .css({
                            opacity: slideOpacity,
                        })
                            .transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
                    }
                },
                setTransition: function (duration) {
                    var swiper = this;
                    var slides = swiper.slides, $wrapperEl = swiper.$wrapperEl;
                    slides.transition(duration);
                    if (swiper.params.virtualTranslate && duration !== 0) {
                        var eventTriggered_1 = false;
                        slides.transitionEnd(function () {
                            if (eventTriggered_1)
                                return;
                            if (!swiper || swiper.destroyed)
                                return;
                            eventTriggered_1 = true;
                            swiper.animating = false;
                            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
                            for (var i = 0; i < triggerEvents.length; i += 1) {
                                $wrapperEl.trigger(triggerEvents[i]);
                            }
                        });
                    }
                },
            }
        };
        this.images = [
            "assets/sliders/1.jpg",
            "assets/sliders/2.jpg",
            "assets/sliders/3.jpg",
            "assets/sliders/4.jpg",
        ];
        this.email = '';
        this.password = '';
    }
    SlideBackgroudPage.prototype.ngOnInit = function () {
    };
    SlideBackgroudPage.prototype.goHome = function () {
        if (this.email == '' || this.password == '') {
            this.util.showWarningAlert('All Fields are Required');
        }
        else {
            this.util.showToast('Login Success', 'success', 'bottom');
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('slidePrincipal'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], SlideBackgroudPage.prototype, "slides", void 0);
    SlideBackgroudPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-slide-backgroud',
            template: __webpack_require__(/*! ./slide-backgroud.page.html */ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.html"),
            styles: [__webpack_require__(/*! ./slide-backgroud.page.scss */ "./src/app/pages/login/slide-backgroud/slide-backgroud.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], SlideBackgroudPage);
    return SlideBackgroudPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-slide-backgroud-slide-backgroud-module.js.map