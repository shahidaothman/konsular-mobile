(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bottom-sheet-bottom-sheet-module"],{

/***/ "./projects/core/src/lib/if-platform/if-platform.directive.ts":
/*!********************************************************************!*\
  !*** ./projects/core/src/lib/if-platform/if-platform.directive.ts ***!
  \********************************************************************/
/*! exports provided: FivIfPlatform */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivIfPlatform", function() { return FivIfPlatform; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var FivIfPlatform = /** @class */ (function () {
    function FivIfPlatform(platform, viewContainer, templateRef) {
        this.platform = platform;
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
    }
    Object.defineProperty(FivIfPlatform.prototype, "fivIf", {
        set: function (platforms) {
            var _this = this;
            var show = true;
            platforms.forEach(function (p) {
                if (!_this.platform.is(p)) {
                    show = false;
                }
            });
            if (show) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.clear();
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], FivIfPlatform.prototype, "fivIf", null);
    FivIfPlatform = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[fivIf]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]])
    ], FivIfPlatform);
    return FivIfPlatform;
}());



/***/ }),

/***/ "./projects/core/src/lib/if-platform/if-platform.module.ts":
/*!*****************************************************************!*\
  !*** ./projects/core/src/lib/if-platform/if-platform.module.ts ***!
  \*****************************************************************/
/*! exports provided: FivIfModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FivIfModule", function() { return FivIfModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _if_platform_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./if-platform.directive */ "./projects/core/src/lib/if-platform/if-platform.directive.ts");




var FivIfModule = /** @class */ (function () {
    function FivIfModule() {
    }
    FivIfModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_if_platform_directive__WEBPACK_IMPORTED_MODULE_3__["FivIfPlatform"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
            exports: [_if_platform_directive__WEBPACK_IMPORTED_MODULE_3__["FivIfPlatform"]],
        })
    ], FivIfModule);
    return FivIfModule;
}());



/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.module.ts ***!
  \***********************************************************/
/*! exports provided: BottomSheetPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPageModule", function() { return BottomSheetPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _projects_core_src_lib_if_platform_if_platform_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../../projects/core/src/lib/if-platform/if-platform.module */ "./projects/core/src/lib/if-platform/if-platform.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bottom-sheet.page */ "./src/app/pages/bottom-sheet/bottom-sheet.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










var routes = [
    {
        path: '',
        component: _bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["BottomSheetPage"]
    }
];
var BottomSheetPageModule = /** @class */ (function () {
    function BottomSheetPageModule() {
    }
    BottomSheetPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_8__["FivBottomSheetModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_8__["FivIconModule"],
                _projects_core_src_lib_if_platform_if_platform_module__WEBPACK_IMPORTED_MODULE_1__["FivIfModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
            ],
            declarations: [_bottom_sheet_page__WEBPACK_IMPORTED_MODULE_7__["BottomSheetPage"]]
        })
    ], BottomSheetPageModule);
    return BottomSheetPageModule;
}());



/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.html":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Bottom Sheet</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <ion-grid class=\"page-content\" fixed>\n    <ion-row>\n      <ion-col sizeXl=\"10\" offsetXl=\"1\" sizeLg=\"10\" offsetLg=\"1\" sizeMd=\"12\" sizeXs=\"12\" offsetXs=\"0\" offsetSm=\"0\"\n        offsetMd=\"0\" sizeSm=\"12\" sizeMd=\"12\">\n        <app-example *fivIf=\"['mobile']\" [api]=\"'assets/docs/snippets/expandable/api.md'\"\n          [typescript]=\"'assets/docs/snippets/expandable/ts.md'\" [css]=\"'assets/docs/snippets/expandable/css.md'\"\n          [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Bottom Sheet Component'\"\n          [subtitle]=\"'Easy to use Bottom Sheet and Content Drawer (mobile only)'\">\n          <ion-list>\n            <ion-item>\n              <ion-label>Top</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Top\" (click)=\"drawerState = states.Top\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Docked</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Docked\" (click)=\"drawerState = states.Docked\"></ion-radio>\n            </ion-item>\n            <ion-item>\n              <ion-label>Bottom</ion-label>\n              <ion-radio [checked]=\"drawerState===states.Bottom\" (click)=\"drawerState = states.Bottom\"></ion-radio>\n            </ion-item>\n          </ion-list>\n          <ion-list>\n            <ion-item>\n              <ion-label>Bounce</ion-label>\n              <ion-checkbox [(ngModel)]=\"shouldBounce\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Docked height</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"dockedHeight\" value=\"150\"></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Top Distance</ion-label>\n              <ion-input type=\"number\" [(ngModel)]=\"distanceTop\" value=\"56\"></ion-input>\n            </ion-item>\n            <ion-item-divider>\n              <ion-label>Bottom Sheet Content</ion-label>\n            </ion-item-divider>\n            <ion-item>\n              <ion-label>Rounded</ion-label>\n              <ion-checkbox [(ngModel)]=\"rounded\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Handle</ion-label>\n              <ion-checkbox [(ngModel)]=\"handle\"></ion-checkbox>\n            </ion-item>\n            <ion-item>\n              <ion-label>Float</ion-label>\n              <ion-checkbox [(ngModel)]=\"float\"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n\n        </app-example>\n        <app-example *fivIf=\"['desktop']\" [api]=\"'assets/docs/snippets/expandable/api.md'\"\n          [typescript]=\"'assets/docs/snippets/expandable/ts.md'\" [css]=\"'assets/docs/snippets/expandable/css.md'\"\n          [html]=\"'assets/docs/snippets/expandable/html.md'\" [title]=\"'Bottom Sheet Component'\"\n          [subtitle]=\"'Easy to use Bottom Sheet and Content Drawer (mobile only)'\">\n\n          this component only works on mobile.\n\n        </app-example>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n\n<fiv-bottom-sheet #fbs *fivIf=\"['mobile']\" [(state)]=\"drawerState\" [dockedHeight]=\"dockedHeight\"\n  [shouldBounce]=\"shouldBounce\" [distanceTop]=\"distanceTop\">\n\n  <fiv-bottom-sheet-content [float]=\"float\" [rounded]=\"rounded\" [handle]=\"handle\">\n    <ion-item-divider padding sticky>\n      <ion-title color=\"primary\">Bottom Sheet</ion-title>\n      <ion-buttons slot=\"end\">\n        <ion-button fill=\"outline\" shape=\"round\" color=\"primary\">\n          Do Action\n        </ion-button>\n      </ion-buttons>\n    </ion-item-divider>\n    <ion-item-group>\n      <div class=\"flex-scroll\">\n        <ion-card *ngFor=\"let i of [1,2,3,4,5,6,7,8,9]\">\n          <ion-card-header>\n            <ion-card-subtitle>Awesome Flex</ion-card-subtitle>\n            <ion-card-title>Awesome Title</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            Awesome content\n          </ion-card-content>\n        </ion-card>\n      </div>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Label</ion-label>\n      </ion-item>\n    </ion-item-group>\n\n  </fiv-bottom-sheet-content>\n\n</fiv-bottom-sheet>"

/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drawer-content {\n  border-top: 0.5px solid #e5e5e5;\n  padding: 10px; }\n\n.flex-scroll {\n  display: flex;\n  overflow-x: scroll;\n  width: 100%; }\n\n.flex-scroll ion-card {\n    flex: 1 0 auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9ib3R0b20tc2hlZXQvYm90dG9tLXNoZWV0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTs7QUFIYjtJQUtJLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyYXdlci1jb250ZW50IHtcbiAgYm9yZGVyLXRvcDogMC41cHggc29saWQgI2U1ZTVlNTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmZsZXgtc2Nyb2xsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xuICB3aWR0aDogMTAwJTtcbiAgaW9uLWNhcmQge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/bottom-sheet/bottom-sheet.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/bottom-sheet/bottom-sheet.page.ts ***!
  \*********************************************************/
/*! exports provided: BottomSheetPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetPage", function() { return BottomSheetPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");



var BottomSheetPage = /** @class */ (function () {
    function BottomSheetPage() {
        this.shouldBounce = true;
        this.dockedHeight = 204;
        this.distanceTop = 0;
        this.drawerState = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"].Docked;
        this.states = _fivethree_core__WEBPACK_IMPORTED_MODULE_2__["DrawerState"];
        this.handle = true;
        this.float = true;
        this.rounded = true;
    }
    BottomSheetPage.prototype.ngOnInit = function () { };
    BottomSheetPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottom-sheet',
            template: __webpack_require__(/*! ./bottom-sheet.page.html */ "./src/app/pages/bottom-sheet/bottom-sheet.page.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.page.scss */ "./src/app/pages/bottom-sheet/bottom-sheet.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomSheetPage);
    return BottomSheetPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-bottom-sheet-bottom-sheet-module.js.map