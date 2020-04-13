(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forms-forms-example2-forms-example2-module"],{

/***/ "./src/app/pages/forms/forms-example2/forms-example2.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example2/forms-example2.module.ts ***!
  \*********************************************************************/
/*! exports provided: FormsExample2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample2PageModule", function() { return FormsExample2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _forms_example2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms-example2.page */ "./src/app/pages/forms/forms-example2/forms-example2.page.ts");
/* harmony import */ var ionic4_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic4-rating */ "./node_modules/ionic4-rating/dist/index.js");







//Rating Module

var routes = [
    {
        path: '',
        component: _forms_example2_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample2Page"]
    }
];
var FormsExample2PageModule = /** @class */ (function () {
    function FormsExample2PageModule() {
    }
    FormsExample2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ionic4_rating__WEBPACK_IMPORTED_MODULE_7__["IonicRatingModule"]
            ],
            declarations: [_forms_example2_page__WEBPACK_IMPORTED_MODULE_6__["FormsExample2Page"]]
        })
    ], FormsExample2PageModule);
    return FormsExample2PageModule;
}());



/***/ }),

/***/ "./src/app/pages/forms/forms-example2/forms-example2.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example2/forms-example2.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>\n      Rating Form\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <h3 class=\"title\">Your opinion</h3>\n  <div class=\"desc\">\n    <div class=\"howWas\">\n      <h2 class=\"howWasText\">So how was it?</h2>\n      <h2 class=\"about\">\n        Because at |Your Service| we are concerned about the satisfaction of our customers, we would find out how\n        your  delivery has passed. Promised, it will only take 2 minutes!\n      </h2>\n    </div>\n  </div>\n  <div class=\"ratingBox\">\n    <h2 class=\"gourmand\">Rate Now</h2>\n    <rating [(ngModel)]=\"rate\" readOnly=\"false\" max=\"5\" emptyStarIconName=\"star-outline\" halfStarIconName=\"star-half\"\n      starIconName=\"star\" nullable=\"false\" (ngModelChange)=\"onRatingChange($event)\"></rating>\n    <!-- <button ion-button full round class=\"sendBtn\" (click)=\"ratnow()\">Rate It</button> -->\n    <ion-button expand=\"full\" shape=\"round\" class=\"sendBtn\" (click)=\"ratnow()\">Rate It</ion-button>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/forms/forms-example2/forms-example2.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/forms/forms-example2/forms-example2.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-size: 20px;\n  color: #40405E;\n  font-weight: bold; }\n\n.desc .howWas {\n  text-align: center !important; }\n\n.desc .howWasText {\n  font-size: 1.2rem !important;\n  color: #40405E !important;\n  margin-top: 70px !important; }\n\n.desc .about {\n  text-align: center !important;\n  font-size: 1rem !important;\n  color: #8888A5 !important; }\n\n.ratingBox {\n  margin-top: 10% !important;\n  border: 2px solid #0cd1e8;\n  padding-left: 3% !important;\n  padding-right: 3% !important;\n  padding-top: 8% !important;\n  padding-bottom: 10% !important;\n  text-align: center !important;\n  border-radius: 40px; }\n\n.ratingBox .sendBtn {\n    position: absolute;\n    margin-top: 10% !important;\n    left: 50%;\n    width: 65%;\n    height: 50px !important;\n    transform: translate(-50%, -50%);\n    -ms-transform: translate(-50%, -50%); }\n\n.ratingBox .ion-ios-star-outline:before {\n    content: \"\\f4b2\";\n    color: gray; }\n\n.ratingBox ul {\n    padding: 0px; }\n\n.ratingBox ul.rating li {\n      padding: 5px 10px !important;\n      background: none;\n      color: #37DFA6; }\n\n.ratingBox ul.rating li ion-icon {\n        font-size: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9mb3Jtcy9mb3Jtcy1leGFtcGxlMi9mb3Jtcy1leGFtcGxlMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUk7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFFckI7RUFFUSw2QkFBNkIsRUFBQTs7QUFGckM7RUFLUSw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLDJCQUEyQixFQUFBOztBQVBuQztFQVVRLDZCQUE2QjtFQUM3QiwwQkFBMEI7RUFDMUIseUJBQXlCLEVBQUE7O0FBSWpDO0VBQ0ksMEJBQTBCO0VBQzFCLHlCQUF5QjtFQUN6QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDBCQUEwQjtFQUMxQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQixFQUFBOztBQVJ2QjtJQVVRLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsU0FBUztJQUNULFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLG9DQUFvQyxFQUFBOztBQWhCNUM7SUFvQlEsZ0JBQWdCO0lBQ2hCLFdBQVcsRUFBQTs7QUFyQm5CO0lBd0JRLFlBQVksRUFBQTs7QUF4QnBCO01BMkJVLDRCQUE0QjtNQUM1QixnQkFBZ0I7TUFDaEIsY0FBYyxFQUFBOztBQTdCeEI7UUFnQ1ksZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9ybXMvZm9ybXMtZXhhbXBsZTIvZm9ybXMtZXhhbXBsZTIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIC50aXRsZXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGNvbG9yOiAjNDA0MDVFO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmRlc2N7XG4gICAgICAgIC5ob3dXYXN7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuaG93V2FzVGV4dHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzQwNDA1RSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5hYm91dHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogIzg4ODhBNSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbiAgICAucmF0aW5nQm94e1xuICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgIzBjZDFlODtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzJSAhaW1wb3J0YW50O1xuICAgICAgICBwYWRkaW5nLXRvcDogOCUgIWltcG9ydGFudDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwJSAhaW1wb3J0YW50O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgICAgICAgLnNlbmRCdG57XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHdpZHRoOiA2NSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlvbi1pb3Mtc3Rhci1vdXRsaW5lOmJlZm9yZSB7XG4gICAgICAgICAgICBjb250ZW50OiBcIlxcZjRiMlwiO1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgIH1cbiAgICAgICAgdWwge1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgICBcbiAgICAgICAgICAgICYucmF0aW5nIGxpIHtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgICAgY29sb3I6ICMzN0RGQTY7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9Il19 */"

/***/ }),

/***/ "./src/app/pages/forms/forms-example2/forms-example2.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/forms/forms-example2/forms-example2.page.ts ***!
  \*******************************************************************/
/*! exports provided: FormsExample2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsExample2Page", function() { return FormsExample2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");



var FormsExample2Page = /** @class */ (function () {
    function FormsExample2Page(util) {
        this.util = util;
        this.rate = '2';
    }
    FormsExample2Page.prototype.ngOnInit = function () {
    };
    FormsExample2Page.prototype.onRatingChange = function (event) {
        console.log('event', event);
    };
    FormsExample2Page.prototype.ratnow = function () {
        this.util.showToast('Thanks For Ratting & your valuable time', 'success', 'topp');
    };
    FormsExample2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forms-example2',
            template: __webpack_require__(/*! ./forms-example2.page.html */ "./src/app/pages/forms/forms-example2/forms-example2.page.html"),
            styles: [__webpack_require__(/*! ./forms-example2.page.scss */ "./src/app/pages/forms/forms-example2/forms-example2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], FormsExample2Page);
    return FormsExample2Page;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forms-forms-example2-forms-example2-module.js.map