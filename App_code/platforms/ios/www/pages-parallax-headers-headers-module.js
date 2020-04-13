(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-parallax-headers-headers-module"],{

/***/ "./src/app/directives/shrinking-header.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/directives/shrinking-header.directive.ts ***!
  \**********************************************************/
/*! exports provided: ShrinkingHeaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShrinkingHeaderDirective", function() { return ShrinkingHeaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var ShrinkingHeaderDirective = /** @class */ (function () {
    function ShrinkingHeaderDirective(element, renderer, domCtrl) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.minHeaderHeight = 100;
        this.headerShow = true;
        this.headerHeight = 350;
    }
    ShrinkingHeaderDirective.prototype.ngOnInit = function () {
        this.initStyles();
    };
    ShrinkingHeaderDirective.prototype.initStyles = function () {
        var _this = this;
        this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.element.nativeElement, "transition", "0.2s linear");
            _this.renderer.setStyle(_this.element.nativeElement, "height", _this.headerHeight + "px");
        });
        this.scrollArea.ionScroll.subscribe(function (scrollEvent) {
            _this.resizeHeader(scrollEvent);
        });
    };
    ShrinkingHeaderDirective.prototype.resizeHeader = function (scrollEvent) {
        var _this = this;
        this.domCtrl.write(function () {
            // Calculate suitable header height
            _this.newHeaderHeight = _this.headerHeight - scrollEvent.detail.scrollTop;
            // Avoid scolling up to the top, set second nav header to have 100px height
            if (_this.newHeaderHeight < _this.minHeaderHeight) {
                _this.newHeaderHeight = _this.minHeaderHeight;
            }
            console.log('newHeaderHeight', _this.newHeaderHeight);
            // Resize header height
            _this.renderer.setStyle(_this.element.nativeElement, 'height', _this.newHeaderHeight + 'px');
            // Keep track of the header height to determine opacity transition speed
            var headerChangeProgress = (_this.newHeaderHeight - _this.minHeaderHeight) / (_this.headerHeight - _this.minHeaderHeight);
            // Do transitioning animation to show/hide header content
            _this.changeHeaderContent(headerChangeProgress, 1 - headerChangeProgress);
        });
    };
    // Change header content on scroll
    ShrinkingHeaderDirective.prototype.changeHeaderContent = function (bgOpacityPercent, navOpacityPercent) {
        // Apply styles to header elements
        for (var _i = 0, _a = this.element.nativeElement.children; _i < _a.length; _i++) {
            var headerElement = _a[_i];
            switch (headerElement.className) {
                // Background img from bg header hide on shrink, show on expand
                case 'bg-img':
                    this.renderer.setStyle(headerElement, 'opacity', bgOpacityPercent);
                    break;
                // Background img from nav header show on shrink, hide on expand
                case 'nav-img':
                case 'nav-layer':
                    this.renderer.setStyle(headerElement, 'opacity', navOpacityPercent);
                    break;
                // Control header content element vibility
                // case 'bg-content':
                // 	let totalHeight = headerElement.offsetTop + headerElement.clientHeight;
                // 	let navContentElement = this.element.nativeElement.querySelector('.nav-content');
                // 	if(totalHeight > this.newHeaderHeight && !headerElement.isHidden){
                // 		headerElement.isHidden = true;
                // 		this.events.publish('header:expanded', false);
                // 		this.renderer.setElementStyle(headerElement, 'opacity', '0');
                // 		this.renderer.setElementStyle(navContentElement, 'opacity', '1');
                // 	} else if (totalHeight <= this.newHeaderHeight && headerElement.isHidden) {
                // 		headerElement.isHidden = false;
                // 		this.events.publish('header:expanded', true);
                // 		this.renderer.setElementStyle(headerElement, 'opacity', '1');
                // 		this.renderer.setElementStyle(navContentElement, 'opacity', '0');
                // 	}
                // 	break;
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("shrinkingHeader"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShrinkingHeaderDirective.prototype, "scrollArea", void 0);
    ShrinkingHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[shrinkingHeader]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])
    ], ShrinkingHeaderDirective);
    return ShrinkingHeaderDirective;
}());



/***/ }),

/***/ "./src/app/pages/parallax/headers/headers.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/parallax/headers/headers.module.ts ***!
  \**********************************************************/
/*! exports provided: HeadersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersPageModule", function() { return HeadersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _headers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./headers.page */ "./src/app/pages/parallax/headers/headers.page.ts");
/* harmony import */ var src_app_directives_shrinking_header_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shrinking-header.directive */ "./src/app/directives/shrinking-header.directive.ts");








var routes = [
    {
        path: '',
        component: _headers_page__WEBPACK_IMPORTED_MODULE_6__["HeadersPage"]
    }
];
var HeadersPageModule = /** @class */ (function () {
    function HeadersPageModule() {
    }
    HeadersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_headers_page__WEBPACK_IMPORTED_MODULE_6__["HeadersPage"], src_app_directives_shrinking_header_directive__WEBPACK_IMPORTED_MODULE_7__["ShrinkingHeaderDirective"]]
        })
    ], HeadersPageModule);
    return HeadersPageModule;
}());



/***/ }),

/***/ "./src/app/pages/parallax/headers/headers.page.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/parallax/headers/headers.page.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <!-- Back Button -->\n  <ion-back-button mode=\"ios\" defaultHref=\"/home\"></ion-back-button>\n\n  <!-- Shrinking Header -->\n  <div class=\"shrinking-header\" [shrinkingHeader]=\"scrollContent\">\n    <div class=\"bg-img\" [ngStyle]=\"{'background-image': 'url(\\'assets/images/img_bg.jpg\\')'}\"></div>\n    <div class=\"bg-layer\"></div>\n    <div class=\"nav-layer\"></div>\n    <div class=\"nav-img\" [ngStyle]=\"{'background-image': 'url(\\'assets/images/header_pattern.png\\')'}\"></div>\n  </div>\n\n  <!-- Segment toolbar -->\n  <ion-toolbar mode=\"ios\">\n    <ion-segment mode=\"ios\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"selectedSegment\">\n      <ion-segment-button mode=\"ios\" checked value=\"about\">\n        <div class=\"segment-name\">About</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'about'}\"></div>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"top5spots\">\n        <div class=\"segment-name\">Top 5</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'top5spots'}\"></div>\n      </ion-segment-button>\n      <ion-segment-button mode=\"ios\" value=\"partners\">\n        <div class=\"segment-name\">Partners</div>\n        <div class=\"divider\" [ngClass]=\"{'selected': selectedSegment === 'partners'}\"></div>\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen #scrollContent scrollEvents=\"true\">\n  <div [ngSwitch]=\"selectedSegment\">\n    <!-- About Tab -->\n    <div *ngSwitchCase=\"'about'\" class=\"content-wrapper about-content\">\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n      The world is your oyster.\n      <p>If you get lost, the <a target=\"_blank\" rel=\"noopener\" href=\"https://ionicframework.com/docs/\">docs</a> will be\n        your guide.</p>\n\n    </div>\n\n    <!-- Top 5 Spots Tab -->\n    <div *ngSwitchCase=\"'top5spots'\" class=\"content-wrapper spots-content\">\n      <!-- Spots card list-->\n      <ion-card>Top5 spots</ion-card>\n    </div>\n\n    <!-- Partners Tab -->\n    <div *ngSwitchCase=\"'partners'\" class=\"content-wrapper partners-content\">\n      Partners\n    </div>\n  </div>\n\n  <!-- FAB -->\n  <!-- <ion-fab class=\"start-tour-fab\" #startTourFab (click)=\"openTourMapPage()\">\n\t\t<button ion-fab>\n\t\t\t<div class=\"label\">Start Tour</div>\n\t\t</button>\n\t</ion-fab> -->\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/parallax/headers/headers.page.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/parallax/headers/headers.page.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-back-button {\n  position: absolute;\n  top: 5px;\n  left: 5px;\n  z-index: 100;\n  color: #fff;\n  box-shadow: none;\n  padding: 10px !important;\n  height: 40px;\n  border-radius: 0;\n  font-size: 12px; }\n\nion-toolbar {\n  --padding-start: 0;\n  --padding-end: 0;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  --border-width: 0 !important; }\n\nion-toolbar ion-segment {\n    --border-width: 0; }\n\nion-toolbar ion-segment ion-segment-button {\n      --background: rgba(192,193,142,0.5);\n      --background-activated: rgba(192,193,142,0.5);\n      --background-checked: rgba(192,193,142,0.5);\n      --background-hover: rgba(192,193,142,0.5);\n      --border-radius: none;\n      --border-width: 0;\n      --indicator-color: transparent;\n      --indicator-color-checked: transparent;\n      --color: #554B4B;\n      --color-activated: #6D750E;\n      --color-checked: #6D750E;\n      --padding-top: 10px;\n      --padding-bottom: 10px;\n      text-transform: none;\n      font-size: 12px;\n      font-weight: 600;\n      max-width: unset; }\n\nion-toolbar ion-segment ion-segment-button .divider {\n        position: absolute;\n        bottom: 5px;\n        width: 30px;\n        height: 2px;\n        background: transparent; }\n\nion-toolbar ion-segment ion-segment-button .divider.selected {\n          background: #6D750E; }\n\n.shrinking-header {\n  color: #fff;\n  display: block;\n  text-align: center;\n  justify-content: center;\n  position: relative;\n  z-index: -1;\n  overflow: hidden;\n  background-color: #fff; }\n\n.shrinking-header .bg-img {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    opacity: 1; }\n\n.shrinking-header .nav-img {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-position: unset;\n    background-repeat: repeat;\n    background-size: 587px 801px;\n    opacity: 0; }\n\n.shrinking-header .bg-layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    background-color: #000;\n    opacity: 0.2; }\n\n.shrinking-header .nav-layer {\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    opacity: 0;\n    background-color: #6D750E; }\n\n.about-content {\n  padding: 20px;\n  font-size: 13px;\n  letter-spacing: 0.5px;\n  line-height: 18px;\n  color: #554B4B; }\n\n.about-content p {\n    padding: 0;\n    margin: 0;\n    padding-bottom: 5px; }\n\n.about-content img {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9wYXJhbGxheC9oZWFkZXJzL2hlYWRlcnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGtCQUFnQjtFQUNoQixnQkFBYztFQUNkLGdCQUFjO0VBQ2QsbUJBQWlCO0VBQ2pCLDRCQUFlLEVBQUE7O0FBTG5CO0lBT1EsaUJBQWUsRUFBQTs7QUFQdkI7TUFTWSxtQ0FBYTtNQUNiLDZDQUF1QjtNQUN2QiwyQ0FBcUI7TUFDckIseUNBQW1CO01BQ25CLHFCQUFnQjtNQUNoQixpQkFBZTtNQUNmLDhCQUFrQjtNQUNsQixzQ0FBMEI7TUFDMUIsZ0JBQVE7TUFDUiwwQkFBa0I7TUFDbEIsd0JBQWdCO01BQ2hCLG1CQUFjO01BQ2Qsc0JBQWlCO01BQ2pCLG9CQUFvQjtNQUNwQixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBOztBQXpCNUI7UUEyQmdCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCx1QkFBdUIsRUFBQTs7QUEvQnZDO1VBaUNvQixtQkFBbUIsRUFBQTs7QUFPdkM7RUFDSSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsc0JBQXNCLEVBQUE7O0FBUjFCO0lBV1Esa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsT0FBTztJQUNQLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QixVQUFVLEVBQUE7O0FBbkJsQjtJQXNCUSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixPQUFPO0lBQ1AsU0FBUztJQUNULDBCQUEwQjtJQUMxQix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLFVBQVUsRUFBQTs7QUE5QmxCO0lBaUNRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLFlBQVksRUFBQTs7QUF2Q3BCO0lBMENRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87SUFDUCxTQUFTO0lBQ1QsVUFBVTtJQUNWLHlCQUF5QixFQUFBOztBQUlqQztFQUNJLGFBQWE7RUFDYixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixjQUFjLEVBQUE7O0FBTGxCO0lBT1EsVUFBVTtJQUNWLFNBQVM7SUFDVCxtQkFBbUIsRUFBQTs7QUFUM0I7SUFhUSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXJhbGxheC9oZWFkZXJzL2hlYWRlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHNlZ21lbnQtYmFyLWhlaWdodDogNDRweDtcbiRzZWdtZW50LWJhci1iZzogcmdiYSgxOTIsMTkzLDE0MiwwLjUpO1xuJHNlZ21lbnQtYmFyLXRleHQ6ICM2RDc1MEU7XG5cbmlvbi1iYWNrLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuaW9uLXRvb2xiYXIge1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLXBhZGRpbmctZW5kOiAwO1xuICAgIC0tcGFkZGluZy10b3A6IDA7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMDtcbiAgICAtLWJvcmRlci13aWR0aDogMCAhaW1wb3J0YW50O1xuICAgIGlvbi1zZWdtZW50IHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIGlvbi1zZWdtZW50LWJ1dHRvbiB7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHJnYmEoMTkyLDE5MywxNDIsMC41KTs7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiByZ2JhKDE5MiwxOTMsMTQyLDAuNSk7O1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMTkyLDE5MywxNDIsMC41KTs7XG4gICAgICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMTkyLDE5MywxNDIsMC41KTs7XG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IG5vbmU7XG4gICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIC0taW5kaWNhdG9yLWNvbG9yLWNoZWNrZWQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1jb2xvcjogIzU1NEI0QjtcbiAgICAgICAgICAgIC0tY29sb3ItYWN0aXZhdGVkOiAjNkQ3NTBFO1xuICAgICAgICAgICAgLS1jb2xvci1jaGVja2VkOiAjNkQ3NTBFO1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICBib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzZENzUwRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zaHJpbmtpbmctaGVhZGVyIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IC0xO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIC5iZy1pbWcge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAubmF2LWltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB1bnNldDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA1ODdweCA4MDFweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gICAgLmJnLWxheWVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuMjtcbiAgICB9XG4gICAgLm5hdi1sYXllciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNkQ3NTBFO1xuICAgIH1cbn1cblxuLmFib3V0LWNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICBjb2xvcjogIzU1NEI0QjtcbiAgICBwIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/parallax/headers/headers.page.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/parallax/headers/headers.page.ts ***!
  \********************************************************/
/*! exports provided: HeadersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadersPage", function() { return HeadersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeadersPage = /** @class */ (function () {
    function HeadersPage() {
        this.selectedSegment = 'about';
    }
    HeadersPage.prototype.segmentChanged = function (event) {
        console.log('Segment changed', event);
    };
    HeadersPage.prototype.ngOnInit = function () {
    };
    HeadersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-headers',
            template: __webpack_require__(/*! ./headers.page.html */ "./src/app/pages/parallax/headers/headers.page.html"),
            styles: [__webpack_require__(/*! ./headers.page.scss */ "./src/app/pages/parallax/headers/headers.page.scss")]
        })
    ], HeadersPage);
    return HeadersPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-parallax-headers-headers-module.js.map