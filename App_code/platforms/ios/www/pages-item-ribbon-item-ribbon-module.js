(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-item-ribbon-item-ribbon-module"],{

/***/ "./src/app/pages/item-ribbon/item-ribbon.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.module.ts ***!
  \*********************************************************/
/*! exports provided: ItemRibbonPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPageModule", function() { return ItemRibbonPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./item-ribbon.page */ "./src/app/pages/item-ribbon/item-ribbon.page.ts");







var routes = [
    {
        path: '',
        component: _item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__["ItemRibbonPage"]
    }
];
var ItemRibbonPageModule = /** @class */ (function () {
    function ItemRibbonPageModule() {
    }
    ItemRibbonPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_item_ribbon_page__WEBPACK_IMPORTED_MODULE_6__["ItemRibbonPage"]]
        })
    ], ItemRibbonPageModule);
    return ItemRibbonPageModule;
}());



/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Item Ribbon\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let item of thumbnails\">\n      <ion-thumbnail slot=\"start\" class=\"item-ribbon\">\n        <span class=\"ribbon \">\n          <span>{{ item.ribbonText }}</span>\n        </span>\n        <img [src]=\"item.image\">\n      </ion-thumbnail>\n      <div>\n        <p>{{ item.title }}</p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-ribbon\">\n      <span class=\"ribbon cruzeiro\">\n        <span>Ionic</span>\n      </span>\n      <ion-thumbnail item-left>\n        <img src=\"assets/ribbons/ionic.png\" alt=\"\">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome framework</p>\n      </div>\n    </ion-item>\n\n    <ion-item class=\"item-ribbon\">\n      <span class=\"ribbon javascript\">\n        <span>JS</span>\n      </span>\n      <ion-thumbnail item-left>\n        <img src=\"assets/ribbons/js.png\" alt=\"\">\n      </ion-thumbnail>\n      <div>\n        <p>Awesome language</p>\n      </div>\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-ribbon {\n  background-color: #fff;\n  position: relative;\n  -webkit-filter: none;\n          filter: none;\n  opacity: 1; }\n  .item-ribbon .ribbon {\n    position: absolute;\n    right: -5px;\n    top: -5px;\n    z-index: 2;\n    overflow: hidden;\n    width: 60px;\n    height: 60px;\n    text-align: right; }\n  .item-ribbon .ribbon span {\n      font-size: 10px;\n      font-weight: bold;\n      color: #fff;\n      text-transform: uppercase;\n      text-align: center;\n      line-height: 13px;\n      transform: rotate(45deg);\n      -webkit-transform: rotate(45deg);\n      width: 79px;\n      display: block;\n      background: #f53d3d;\n      position: absolute;\n      top: 18px;\n      right: -15px; }\n  .item-ribbon .ribbon span::before {\n        content: \"\";\n        position: absolute;\n        left: 0;\n        top: 100%;\n        z-index: -1;\n        border-left: 3px solid #f53d3d;\n        border-right: 3px solid transparent;\n        border-bottom: 3px solid transparent;\n        border-top: 3px solid #f53d3d; }\n  .item-ribbon .ribbon span::after {\n        content: \"\";\n        position: absolute;\n        right: 0;\n        top: 100%;\n        z-index: -1;\n        border-left: 3px solid transparent;\n        border-right: 3px solid #f53d3d;\n        border-bottom: 3px solid transparent;\n        border-top: 3px solid #f53d3d; }\n  .ribbon.cruzeiro span {\n  color: white;\n  background: #387ef5; }\n  .ribbon.cruzeiro span::before {\n    border-left: 3px solid #387ef5;\n    border-top: 3px solid #387ef5; }\n  .ribbon.cruzeiro span::after {\n    border-right: 3px solid #387ef5;\n    border-top: 3px solid #387ef5; }\n  .ribbon.atletico span {\n  color: white;\n  background: #818181; }\n  .ribbon.atletico span::before {\n    border-left: 3px solid #818181;\n    border-top: 3px solid #818181; }\n  .ribbon.atletico span::after {\n    border-right: 3px solid #818181;\n    border-top: 3px solid #818181; }\n  .ribbon.javascript span {\n  color: black;\n  background: #f7e023; }\n  .ribbon.javascript span::before {\n    border-left: 3px solid #f7e023;\n    border-top: 3px solid #f7e023; }\n  .ribbon.javascript span::after {\n    border-right: 3px solid #f7e023;\n    border-top: 3px solid #f7e023; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pdGVtLXJpYmJvbi9pdGVtLXJpYmJvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JFO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixvQkFBWTtVQUFaLFlBQVk7RUFDWixVQUFVLEVBQUE7RUFKWjtJQU1JLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUIsRUFBQTtFQWJyQjtNQWVNLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVztNQUNYLHlCQUF5QjtNQUN6QixrQkFBa0I7TUFDbEIsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixnQ0FBZ0M7TUFDaEMsV0FBVztNQUNYLGNBQWM7TUFDZCxtQkFBbUI7TUFDbkIsa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxZQUFZLEVBQUE7RUE1QmxCO1FBOEJRLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFNBQVM7UUFDVCxXQUFXO1FBQ1gsOEJBeENTO1FBeUNULG1DQUFtQztRQUNuQyxvQ0FBb0M7UUFDcEMsNkJBM0NTLEVBQUE7RUFLakI7UUF5Q1EsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsU0FBUztRQUNULFdBQVc7UUFDWCxrQ0FBa0M7UUFDbEMsK0JBcERTO1FBcURULG9DQUFvQztRQUNwQyw2QkF0RFMsRUFBQTtFQWRmO0VBQ0UsWUFGOEM7RUFHOUMsbUJBYWMsRUFBQTtFQVpkO0lBQ0UsOEJBV1k7SUFWWiw2QkFVWSxFQUFBO0VBUmQ7SUFDRSwrQkFPWTtJQU5aLDZCQU1ZLEVBQUE7RUFmaEI7RUFDRSxZQUY4QztFQUc5QyxtQkFjMkIsRUFBQTtFQWIzQjtJQUNFLDhCQVl5QjtJQVh6Qiw2QkFXeUIsRUFBQTtFQVQzQjtJQUNFLCtCQVF5QjtJQVB6Qiw2QkFPeUIsRUFBQTtFQWhCN0I7RUFDRSxZQWtGbUM7RUFqRm5DLG1CQWVnQixFQUFBO0VBZGhCO0lBQ0UsOEJBYWM7SUFaZCw2QkFZYyxFQUFBO0VBVmhCO0lBQ0UsK0JBU2M7SUFSZCw2QkFRYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXRlbS1yaWJib24vaXRlbS1yaWJib24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiIEBtaXhpbiByaWJib25pemUgKCRyaWJib24tY29sb3IsICR0ZXh0LWNvbG9yOiB3aGl0ZSwgJGJvcmRlci13aWR0aDogM3B4KSB7XG4gICAgc3BhbiB7XG4gICAgICBjb2xvcjogJHRleHQtY29sb3I7XG4gICAgICBiYWNrZ3JvdW5kOiAkcmliYm9uLWNvbG9yO1xuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBzb2xpZCAkcmliYm9uLWNvbG9yO1xuICAgICAgfVxuICAgICAgJjo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmlnaHQ6ICRib3JkZXItd2lkdGggc29saWQgJHJpYmJvbi1jb2xvcjtcbiAgICAgICAgYm9yZGVyLXRvcDogJGJvcmRlci13aWR0aCBzb2xpZCAkcmliYm9uLWNvbG9yO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICRkZWZhdWx0OiAjZjUzZDNkO1xuICAkY3J1emVpcm86ICMzODdlZjU7XG4gICRhdGxldGljbzogZGFya2VuKCNmNGY0ZjQsIDQ1JSk7XG4gICRqYXZhc2NyaXB0OiAjZjdlMDIzO1xuXG4gIC5pdGVtLXJpYmJvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmaWx0ZXI6IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgICAucmliYm9uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgdG9wOiAtNXB4O1xuICAgICAgei1pbmRleDogMjtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aWR0aDogNjBweDtcbiAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxM3B4O1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgICAgICB3aWR0aDogNzlweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNTNkM2Q7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxOHB4O1xuICAgICAgICByaWdodDogLTE1cHg7XG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkZGVmYXVsdDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICRkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICB0b3A6IDEwMCU7XG4gICAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDNweCBzb2xpZCAkZGVmYXVsdDtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICRkZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnJpYmJvbi5jcnV6ZWlybyB7XG4gICAgQGluY2x1ZGUgcmliYm9uaXplKCRjcnV6ZWlybyk7XG4gIH1cblxuICAucmliYm9uLmF0bGV0aWNvIHtcbiAgICBAaW5jbHVkZSByaWJib25pemUoJGF0bGV0aWNvKTtcbiAgfVxuXG4gIC5yaWJib24uamF2YXNjcmlwdCB7XG4gICAgQGluY2x1ZGUgcmliYm9uaXplKCRqYXZhc2NyaXB0LCBibGFjayk7XG4gIH1cbiAgIl19 */"

/***/ }),

/***/ "./src/app/pages/item-ribbon/item-ribbon.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/item-ribbon/item-ribbon.page.ts ***!
  \*******************************************************/
/*! exports provided: ItemRibbonPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemRibbonPage", function() { return ItemRibbonPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ItemRibbonPage = /** @class */ (function () {
    function ItemRibbonPage() {
        this.thumbnails = [
            { title: 'Awesome Shoes - $9', image: 'assets/ribbons/shoes.jpg', ribbonText: 'sale', class: 'sale' },
            { title: 'Awesome Team', image: 'assets/ribbons/cruzeiro.jpg', ribbonText: 'awesome', class: 'cruzeiro' },
            { title: 'Bad team', image: 'assets/ribbons/atletico.jpg', ribbonText: 'bad', class: 'atletico' }
        ];
    }
    ItemRibbonPage.prototype.ngOnInit = function () {
    };
    ItemRibbonPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-item-ribbon',
            template: __webpack_require__(/*! ./item-ribbon.page.html */ "./src/app/pages/item-ribbon/item-ribbon.page.html"),
            styles: [__webpack_require__(/*! ./item-ribbon.page.scss */ "./src/app/pages/item-ribbon/item-ribbon.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ItemRibbonPage);
    return ItemRibbonPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-item-ribbon-item-ribbon-module.js.map