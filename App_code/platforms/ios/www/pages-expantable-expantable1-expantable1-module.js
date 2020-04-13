(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-expantable-expantable1-expantable1-module"],{

/***/ "./src/app/pages/expantable/expantable1/expantable1.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable1/expantable1.module.ts ***!
  \********************************************************************/
/*! exports provided: Expantable1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable1PageModule", function() { return Expantable1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _expantable1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expantable1.page */ "./src/app/pages/expantable/expantable1/expantable1.page.ts");







var routes = [
    {
        path: '',
        component: _expantable1_page__WEBPACK_IMPORTED_MODULE_6__["Expantable1Page"]
    }
];
var Expantable1PageModule = /** @class */ (function () {
    function Expantable1PageModule() {
    }
    Expantable1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_expantable1_page__WEBPACK_IMPORTED_MODULE_6__["Expantable1Page"]]
        })
    ], Expantable1PageModule);
    return Expantable1PageModule;
}());



/***/ }),

/***/ "./src/app/pages/expantable/expantable1/expantable1.page.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable1/expantable1.page.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Layout 1\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid class=\"exandable_main\" no-padding no-margin>\n    <ion-row no-padding no-margin *ngFor=\"let item of list;let i = index\">\n      <ion-col size=\"6\" no-padding no-margin (click)=\"canOpen(item,i)\">\n        <img [src]=\"item.img\" class=\"main_imgs\">\n      </ion-col>\n      <ion-col size=\"6\" no-padding no-margin>\n        <p (click)=\"canOpen(item,i)\" class=\"user_title\">{{item.name}}</p>\n        <p (click)=\"canOpen(item,i)\" class=\"user_sub_title\">{{item.sub_title}}</p>\n        <div class=\"bottom_btn\">\n          <ion-buttons>\n            <ion-col>\n              <ion-button fill=\"clear\" expand=\"full\">\n                <ion-icon name=\"thumbs-up\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button icon-left fill=\"clear\" expand=\"full\" color=\"dark\">\n                <ion-icon name=\"chatboxes\"></ion-icon>\n              </ion-button>\n            </ion-col>\n            <ion-col>\n              <ion-button icon-left fill=\"clear\" expand=\"full\" color=\"dark\">\n                <ion-icon name=\"share\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-buttons>\n        </div>\n      </ion-col>\n      <div *ngIf=\"item.open\" class=\"animated fadeInDown\">\n        <ion-row class=\"sub_list \" *ngFor=\"let subItem of item.sub_list;let j = index\" (click)=\"subItemClick(subItem)\">\n          <ion-col size=\"4\">\n            <img [src]=\"subItem.img\" class=\"sub_imgs\">\n          </ion-col>\n          <ion-col size=\"8\" no-padding no-margin>\n            <p class=\"user_sub_title\">{{subItem.name}}</p>\n            <p class=\"user_sub_title\">{{subItem.sub_title}}</p>\n            <div class=\"bottom_btn\">\n              <ion-buttons>\n                <ion-col>\n                  <ion-button fill=\"clear\" expand=\"full\">\n                    <ion-icon name=\"thumbs-up\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button icon-left fill=\"clear\" expand=\"full\" color=\"dark\">\n                    <ion-icon name=\"chatboxes\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n                <ion-col>\n                  <ion-button icon-left fill=\"clear\" expand=\"full\" color=\"dark\">\n                    <ion-icon name=\"share\"></ion-icon>\n                  </ion-button>\n                </ion-col>\n              </ion-buttons>\n            </div>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-row>\n  </ion-grid>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/expantable/expantable1/expantable1.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/expantable/expantable1/expantable1.page.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".exandable_main .main_imgs {\n  width: 100%;\n  height: 100%; }\n\n.exandable_main .user_title {\n  margin: 10px;\n  text-align: left;\n  text-transform: capitalize;\n  font-size: .9rem;\n  font-weight: bold; }\n\n.exandable_main .user_sub_title {\n  margin: 10px;\n  margin: 10px;\n  text-align: left;\n  text-transform: capitalize;\n  font-size: .6rem; }\n\n.exandable_main .bottom_btn {\n  margin-top: 60px; }\n\n.exandable_main .sub_list {\n  background: var(--ion-color-secondary) !important;\n  padding: 10px;\n  transition: all 300ms;\n  overflow: hidden; }\n\n.exandable_main .sub_list .sub_imgs {\n    width: 100%;\n    height: 120px;\n    border-radius: 20px; }\n\n.exandable_main .sub_list .user_title {\n    margin: 10px;\n    color: white;\n    text-align: left;\n    text-transform: capitalize;\n    font-size: .9rem;\n    font-weight: bold; }\n\n.exandable_main .sub_list .user_sub_title {\n    margin: 10px;\n    color: white;\n    text-align: left;\n    text-transform: capitalize;\n    font-size: .6rem; }\n\n.exandable_main .sub_list .bottom_btn {\n    margin-top: 60px; }\n\n.exandable_main .sub_list .animated {\n    -webkit-animation-duration: 10s;\n    animation-duration: 10s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both; }\n\n@-webkit-keyframes fadeInDown {\n  0% {\n    opacity: 0;\n    -webkit-transform: translateY(-20px); }\n  100% {\n    opacity: 1;\n    -webkit-transform: translateY(0); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9leHBhbnRhYmxlL2V4cGFudGFibGUxL2V4cGFudGFibGUxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVRLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBSHBCO0VBTVEsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLGlCQUFpQixFQUFBOztBQVZ6QjtFQWFRLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixnQkFBZ0IsRUFBQTs7QUFqQnhCO0VBb0JRLGdCQUFnQixFQUFBOztBQXBCeEI7RUF1QlEsaURBQWlEO0VBQ2pELGFBQWE7RUFFYixxQkFBcUI7RUFDckIsZ0JBQWdCLEVBQUE7O0FBM0J4QjtJQTZCWSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUNMLEVBQUE7O0FBaENQO0lBa0NZLFlBQVk7SUFDWixZQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCLEVBQUE7O0FBdkM3QjtJQTBDWSxZQUFZO0lBQ1osWUFBVztJQUNYLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsZ0JBQWdCLEVBQUE7O0FBOUM1QjtJQWlEWSxnQkFBZ0IsRUFBQTs7QUFqRDVCO0lBb0RZLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLHlCQUF5QixFQUFBOztBQUdoQztFQUNPO0lBQ0csVUFBVTtJQUNWLG9DQUFvQyxFQUFBO0VBRXZDO0lBQ0csVUFBVTtJQUNWLGdDQUFnQyxFQUFBLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9leHBhbnRhYmxlL2V4cGFudGFibGUxL2V4cGFudGFibGUxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmV4YW5kYWJsZV9tYWlue1xuICAgIC5tYWluX2ltZ3N7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC51c2VyX3RpdGxle1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLnVzZXJfc3ViX3RpdGxle1xuICAgICAgICBtYXJnaW46IDEwcHg7IFxuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IC42cmVtO1xuICAgIH1cbiAgICAuYm90dG9tX2J0bntcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICB9XG4gICAgLnN1Yl9saXN0e1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50OyBcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAuc3ViX2ltZ3N7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4XG4gICAgICAgfVxuICAgICAgICAudXNlcl90aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcbiAgICAgICAgICAgIGNvbG9yOndoaXRlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICAgIC51c2VyX3N1Yl90aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDsgXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZyZW07XG4gICAgICAgIH1cbiAgICAgICAgIC5ib3R0b21fYnRue1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICAgICAgfVxuICAgICAgICAuYW5pbWF0ZWQge1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDEwcztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTBzO1xuICAgICAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgIH1cbiAgICB9XG4gICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgICAgICBcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/pages/expantable/expantable1/expantable1.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/expantable/expantable1/expantable1.page.ts ***!
  \******************************************************************/
/*! exports provided: Expantable1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expantable1Page", function() { return Expantable1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");



var Expantable1Page = /** @class */ (function () {
    function Expantable1Page(util) {
        this.util = util;
        this.list = [
            {
                open: false,
                name: 'rcap designs',
                sub_title: 'Ionic Expert',
                img: 'assets/avatars/1.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/4.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'fairy honey',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/3.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/1.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/4.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'lovely blossom',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/4.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/1.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'sweetie snowflake',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/5.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/8.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'rcap designs',
                sub_title: 'Ionic Expert',
                img: 'assets/avatars/1.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/4.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'fairy honey',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/3.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/1.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/4.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'lovely blossom',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/4.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/1.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                ]
            },
            {
                open: false,
                name: 'sweetie snowflake',
                sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                img: 'assets/avatars/5.jpg',
                sub_list: [
                    {
                        name: 'sparkly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/3.jpg',
                    },
                    {
                        name: 'glimmer',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/5.jpg',
                    },
                    {
                        name: 'dolly',
                        sub_title: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
                        img: 'assets/avatars/8.jpg',
                    },
                ]
            }
        ];
        console.log('list', this.list);
    }
    Expantable1Page.prototype.ngOnInit = function () {
    };
    Expantable1Page.prototype.canOpen = function (item, index) {
        if (this.list[index].open) {
            this.util.showToast('Clicked On ' + item.name, 'dark', 'bottom');
        }
        this.list[index].open = !this.list[index].open;
    };
    Expantable1Page.prototype.subItemClick = function (item) {
        this.util.showToast('Clicked On ' + item.name, 'dark', 'bottom');
    };
    Expantable1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-expantable1',
            template: __webpack_require__(/*! ./expantable1.page.html */ "./src/app/pages/expantable/expantable1/expantable1.page.html"),
            styles: [__webpack_require__(/*! ./expantable1.page.scss */ "./src/app/pages/expantable/expantable1/expantable1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], Expantable1Page);
    return Expantable1Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-expantable-expantable1-expantable1-module.js.map