(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-accordion-list-accordion-list-module"],{

/***/ "./src/app/pages/accordion-list/accordion-list.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/accordion-list/accordion-list.module.ts ***!
  \***************************************************************/
/*! exports provided: AccordionListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListPageModule", function() { return AccordionListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _accordion_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accordion-list.page */ "./src/app/pages/accordion-list/accordion-list.page.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");








var routes = [
    {
        path: '',
        component: _accordion_list_page__WEBPACK_IMPORTED_MODULE_6__["AccordionListPage"]
    }
];
var AccordionListPageModule = /** @class */ (function () {
    function AccordionListPageModule() {
    }
    AccordionListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_accordion_list_page__WEBPACK_IMPORTED_MODULE_6__["AccordionListPage"]]
        })
    ], AccordionListPageModule);
    return AccordionListPageModule;
}());



/***/ }),

/***/ "./src/app/pages/accordion-list/accordion-list.page.html":
/*!***************************************************************!*\
  !*** ./src/app/pages/accordion-list/accordion-list.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Accordion List\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Accordion Menu</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list *ngFor=\"let item of information; let i = index;\" class=\"accordion-list\" lines=\"none\" detail=\"false\"\n    no-padding>\n    <ion-item tappable (click)=\"toggleSection(i)\" [ngClass]=\"{'section-active': item.open, 'section': !item.open}\">\n      <ion-icon slot=\"start\" name=\"arrow-forward\" *ngIf=\"!item.open\"></ion-icon>\n      <ion-icon slot=\"start\" name=\"arrow-down\" *ngIf=\"item.open\"></ion-icon>\n      <ion-label>\n        {{item.name}}\n      </ion-label>\n    </ion-item>\n\n    <div *ngIf=\"item.children && item.open\">\n      <ion-list class=\"child-list\" *ngFor=\"let child of item.children; let j = index;\" lines=\"none\">\n        <ion-item tappable (click)=\"toggleItem(i, j)\" *ngIf=\"child.children\"\n          [ngClass]=\"{'child-active': child.open, 'child': !child.open}\">\n          <ion-icon slot=\"start\" name=\"add\" *ngIf=\"!child.open\"></ion-icon>\n          <ion-icon slot=\"start\" name=\"close\" *ngIf=\"child.open\"></ion-icon>\n          <ion-label>\n            {{child.name}}\n          </ion-label>\n        </ion-item>\n\n        <app-accordion [product]=\"child\" *ngIf=\"!child.children\"></app-accordion>\n\n        <ion-list *ngIf=\"child.children && child.open\" class=\"product-list\" lines=\"none\">\n          <app-accordion [product]=\"product\" *ngFor=\"let product of child.children\"></app-accordion>\n        </ion-list>\n\n      </ion-list>\n    </div>\n\n    <p *ngIf=\"item.children.length == 0 && item.open\" text-center>Sorry, nothing in here!</p>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/accordion-list/accordion-list.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/accordion-list/accordion-list.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: var(--ion-color-light); }\n\n.accordion-list {\n  margin-bottom: 4px;\n  --ion-item-background: #fff; }\n\n.accordion-list .section, .accordion-list .section-active {\n    --min-height: 58px; }\n\n.section {\n  --ion-item-background: #fff;\n  --ion-item-color: #000; }\n\n.section-active {\n  --ion-item-background: #989aa2;\n  --ion-item-color: #fff;\n  font-weight: 600; }\n\n.section-active ion-icon {\n    color: #fff; }\n\n.child-list {\n  padding: 0;\n  margin: 0; }\n\n.child-list .child, .child-list .child-active {\n    margin-bottom: 2px; }\n\n.child {\n  --ion-item-background: #e8e7e6;\n  --ion-item-color: #000; }\n\n.child-active {\n  --ion-item-background: #989aa2;\n  --ion-item-color: #fff; }\n\n.child-active ion-icon {\n    color: #fff; }\n\n.product-list {\n  padding: 0;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9hY2NvcmRpb24tbGlzdC9hY2NvcmRpb24tbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxvQ0FBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLDJCQUFzQixFQUFBOztBQUZ4QjtJQUtJLGtCQUFhLEVBQUE7O0FBSWpCO0VBQ0UsMkJBQXNCO0VBQ3RCLHNCQUFpQixFQUFBOztBQUVuQjtFQUNFLDhCQUFzQjtFQUN0QixzQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBSGxCO0lBTUksV0FBVyxFQUFBOztBQUlmO0VBQ0UsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFGWDtJQUlJLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLDhCQUFzQjtFQUN0QixzQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSw4QkFBc0I7RUFDdEIsc0JBQWlCLEVBQUE7O0FBRm5CO0lBS0ksV0FBVyxFQUFBOztBQUlmO0VBQ0UsVUFBVTtFQUNWLFNBQVMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FjY29yZGlvbi1saXN0L2FjY29yZGlvbi1saXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi5hY2NvcmRpb24tbGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbiAgLS1pb24taXRlbS1iYWNrZ3JvdW5kOiAjZmZmO1xuXG4gIC5zZWN0aW9uLCAuc2VjdGlvbi1hY3RpdmUge1xuICAgIC0tbWluLWhlaWdodDogNThweDtcbiAgfVxufVxuXG4uc2VjdGlvbiB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2ZmZjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cbi5zZWN0aW9uLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLmNoaWxkLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIC5jaGlsZCwgLmNoaWxkLWFjdGl2ZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICB9XG59XG5cbi5jaGlsZCB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogI2U4ZTdlNjtcbiAgLS1pb24taXRlbS1jb2xvcjogIzAwMDtcbn1cblxuLmNoaWxkLWFjdGl2ZSB7XG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDogIzk4OWFhMjtcbiAgLS1pb24taXRlbS1jb2xvcjogI2ZmZjtcblxuICBpb24taWNvbiB7XG4gICAgY29sb3I6ICNmZmY7XG4gIH1cbn1cblxuLnByb2R1Y3QtbGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/accordion-list/accordion-list.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/accordion-list/accordion-list.page.ts ***!
  \*************************************************************/
/*! exports provided: AccordionListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionListPage", function() { return AccordionListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var AccordionListPage = /** @class */ (function () {
    function AccordionListPage(http) {
        var _this = this;
        this.http = http;
        this.automaticClose = false;
        this.http.get('assets/information.json').subscribe(function (res) {
            _this.information = res['items'];
            _this.information[0].open = true;
        });
    }
    AccordionListPage.prototype.toggleSection = function (index) {
        this.information[index].open = !this.information[index].open;
        if (this.automaticClose && this.information[index].open) {
            this.information
                .filter(function (item, itemIndex) { return itemIndex != index; })
                .map(function (item) { return item.open = false; });
        }
    };
    AccordionListPage.prototype.toggleItem = function (index, childIndex) {
        this.information[index].children[childIndex].open = !this.information[index].children[childIndex].open;
    };
    AccordionListPage.prototype.ngOnInit = function () {
    };
    AccordionListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-accordion-list',
            template: __webpack_require__(/*! ./accordion-list.page.html */ "./src/app/pages/accordion-list/accordion-list.page.html"),
            styles: [__webpack_require__(/*! ./accordion-list.page.scss */ "./src/app/pages/accordion-list/accordion-list.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AccordionListPage);
    return AccordionListPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-accordion-list-accordion-list-module.js.map