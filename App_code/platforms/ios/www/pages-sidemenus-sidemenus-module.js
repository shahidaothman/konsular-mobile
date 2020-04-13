(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sidemenus-sidemenus-module"],{

/***/ "./src/app/pages/sidemenus/sidemenus.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/sidemenus/sidemenus.module.ts ***!
  \*****************************************************/
/*! exports provided: SidemenusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenusPageModule", function() { return SidemenusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sidemenus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenus.page */ "./src/app/pages/sidemenus/sidemenus.page.ts");







var routes = [
    {
        path: '',
        component: _sidemenus_page__WEBPACK_IMPORTED_MODULE_6__["SidemenusPage"]
    }
];
var SidemenusPageModule = /** @class */ (function () {
    function SidemenusPageModule() {
    }
    SidemenusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sidemenus_page__WEBPACK_IMPORTED_MODULE_6__["SidemenusPage"]]
        })
    ], SidemenusPageModule);
    return SidemenusPageModule;
}());



/***/ }),

/***/ "./src/app/pages/sidemenus/sidemenus.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/sidemenus/sidemenus.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Side Menus\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list lines=\"none\">\n    <ion-item>\n      <ion-label text-center>Resources</ion-label>\n    </ion-item>\n    <div class=\"box\" id=\"g1\" (click)=\"example('1')\">\n      <p>Sidemenu 1</p>\n    </div>\n    <div class=\"box\" id=\"g2\" (click)=\"example('2')\">\n      <p>Sidemenu 2</p>\n    </div>\n    <div class=\"box\" id=\"g3\" (click)=\"example('3')\">\n      <p>Sidemenu 3</p>\n    </div>\n    <div class=\"box\" id=\"g4\" (click)=\"example('4')\">\n      <p>Sidemenu 4</p>\n    </div>\n    <div class=\"box\" id=\"g5\" (click)=\"example('5')\">\n      <p>Sidemenu 5</p>\n    </div>\n\n  </ion-list>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/sidemenus/sidemenus.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/sidemenus/sidemenus.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#app {\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.phone-outline {\n  border-radius: 15px;\n  position: relative; }\n\n.screen-outline {\n  height: 96%;\n  width: 94%;\n  position: absolute;\n  border-radius: 8px;\n  top: 2%;\n  left: 3%;\n  background-color: #fff; }\n\n.pop-menu--wrapper {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  transform: translateX(-50%); }\n\n.pop-menu--listener {\n  -webkit-appearance: none;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  background-color: #6483ca;\n  border-radius: 50%;\n  height: 50px;\n  width: 50px;\n  border: 1px solid #6483ca;\n  border-bottom: 2px solid #4e6aab;\n  box-shadow: inset 0px 1px 4px rgba(255, 255, 255, 0.4), 0 2px 7px rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  transition: all .1s ease-in-out;\n  position: relative;\n  outline: none; }\n\n.pop-menu--listener:active {\n  box-shadow: inset 0px 1px 2px rgba(255, 255, 255, 0.2), 0 3px 5px rgba(0, 0, 0, 0.3); }\n\n.pop-menu--listener ~ i {\n  position: absolute;\n  color: #fff;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 20px;\n  pointer-events: none; }\n\n.pop-menu--button {\n  height: 30px;\n  width: 30px;\n  display: block;\n  border-radius: 50%;\n  background-color: #7c9add;\n  color: #fff;\n  position: absolute;\n  border: 1px solid #6483ca;\n  border-bottom: 2px solid #4e6aab;\n  box-shadow: inset 0px 1px 4px rgba(255, 255, 255, 0.4), 0 2px 7px rgba(0, 0, 0, 0.3);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  opacity: 0;\n  pointer-events: none;\n  transition: all 0.3s cubic-bezier(0.58, 0.04, 0.1, 0.54); }\n\n.pop-menu--button i {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.pop-menu--button:nth-of-type(1) {\n  transition-delay: .6s; }\n\n.pop-menu--button:nth-of-type(2) {\n  transition-delay: .2s; }\n\n.pop-menu--button:nth-of-type(3) {\n  transition-delay: .3s; }\n\n.pop-menu--listener:checked ~ .pop-menu--button {\n  pointer-events: all;\n  opacity: 1; }\n\n.pop-menu--listener:checked ~ .pop-menu--button:nth-of-type(1) {\n  top: -6px;\n  left: -18px; }\n\n.pop-menu--listener:checked ~ .pop-menu--button:nth-of-type(2) {\n  top: -30px; }\n\n.pop-menu--listener:checked ~ .pop-menu--button:nth-of-type(3) {\n  top: -6px;\n  left: calc(100% + 18px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9zaWRlbWVudXMvc2lkZW1lbnVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLGtCQUFrQjtFQUVmLFNBQVM7RUFDWixnQ0FBZ0MsRUFBQTs7QUFHakM7RUFJQyxtQkFBbUI7RUFDbkIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0MsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLE9BQU87RUFBRSxRQUFRO0VBQ2pCLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLGtCQUFrQjtFQUNsQixZQUFZO0VBQUUsU0FBUztFQUN2QiwyQkFBMkIsRUFBQTs7QUFHNUI7RUFDQyx3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLE1BQU07RUFBRSxPQUFPO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixnQ0FBZ0M7RUFDaEMsb0ZBQTRFO0VBQzVFLGVBQWU7RUFDZiwrQkFBK0I7RUFDL0Isa0JBQWtCO0VBQ2xCLGFBQWEsRUFBQTs7QUFHZDtFQUNDLG9GQUE0RSxFQUFBOztBQUc3RTtFQUNDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUFFLFNBQVM7RUFDbkIsZ0NBQStCO0VBQy9CLGVBQWU7RUFDZixvQkFBb0IsRUFBQTs7QUFHckI7RUFDQyxZQUFZO0VBQ1osV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdDQUFnQztFQUNoQyxvRkFBNEU7RUFDNUUsUUFBUTtFQUFFLFNBQVM7RUFDbkIsZ0NBQWdDO0VBQ2hDLFVBQVU7RUFDVixvQkFBb0I7RUFDcEIsd0RBQXVELEVBQUE7O0FBR3hEO0VBQ0Msa0JBQWtCO0VBQ2xCLFFBQVE7RUFBRSxTQUFTO0VBQ25CLGdDQUErQixFQUFBOztBQUdoQztFQUNDLHFCQUFxQixFQUFBOztBQUd0QjtFQUNDLHFCQUFxQixFQUFBOztBQUd0QjtFQUNDLHFCQUFxQixFQUFBOztBQUd0QjtFQUNDLG1CQUFtQjtFQUNuQixVQUFVLEVBQUE7O0FBR1g7RUFDQyxTQUFTO0VBQUUsV0FBVyxFQUFBOztBQUd2QjtFQUNDLFVBQVUsRUFBQTs7QUFHWDtFQUNDLFNBQVM7RUFBRSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NpZGVtZW51cy9zaWRlbWVudXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4jYXBwIHtcblx0cG9zaXRpb246IGFic29sdXRlO1xuICAgIC8vIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5waG9uZS1vdXRsaW5lIHtcblx0Ly8gaGVpZ2h0OiA1NzBweDtcblx0Ly8gd2lkdGg6IDMwMHB4O1xuXHQvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VjZWNlO1xuXHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zY3JlZW4tb3V0bGluZSB7XG5cdGhlaWdodDogOTYlO1xuXHR3aWR0aDogOTQlO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0dG9wOiAyJTsgbGVmdDogMyU7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5wb3AtbWVudS0td3JhcHBlciB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0Ym90dG9tOiAxMHB4OyBsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLnBvcC1tZW51LS1saXN0ZW5lciB7XG5cdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7IGxlZnQ6IDA7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdG1hcmdpbjogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzY0ODNjYTtcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRoZWlnaHQ6IDUwcHg7XG5cdHdpZHRoOiA1MHB4O1xuXHRib3JkZXI6IDFweCBzb2xpZCAjNjQ4M2NhO1xuXHRib3JkZXItYm90dG9tOiAycHggc29saWQgIzRlNmFhYjtcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCA0cHggcmdiYSgyNTUsMjU1LDI1NSwuNCksIDAgMnB4IDdweCByZ2JhKDAsMCwwLC4zKTtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjFzIGVhc2UtaW4tb3V0O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdG91dGxpbmU6IG5vbmU7XG59XG5cbi5wb3AtbWVudS0tbGlzdGVuZXI6YWN0aXZlIHtcblx0Ym94LXNoYWRvdzogaW5zZXQgMHB4IDFweCAycHggcmdiYSgyNTUsMjU1LDI1NSwuMiksIDAgM3B4IDVweCByZ2JhKDAsMCwwLC4zKTtcbn1cblxuLnBvcC1tZW51LS1saXN0ZW5lciB+IGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGNvbG9yOiAjZmZmO1xuXHR0b3A6IDUwJTsgbGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xuXHRmb250LXNpemU6IDIwcHg7XG5cdHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucG9wLW1lbnUtLWJ1dHRvbiB7XG5cdGhlaWdodDogMzBweDtcblx0d2lkdGg6IDMwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdGJhY2tncm91bmQtY29sb3I6ICM3YzlhZGQ7XG5cdGNvbG9yOiAjZmZmO1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGJvcmRlcjogMXB4IHNvbGlkICM2NDgzY2E7XG5cdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjNGU2YWFiO1xuXHRib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDRweCByZ2JhKDI1NSwyNTUsMjU1LC40KSwgMCAycHggN3B4IHJnYmEoMCwwLDAsLjMpO1xuXHR0b3A6IDUwJTsgbGVmdDogNTAlO1xuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0b3BhY2l0eTogMDtcblx0cG9pbnRlci1ldmVudHM6IG5vbmU7XG5cdHRyYW5zaXRpb246IGFsbCAuM3MgY3ViaWMtYmV6aWVyKDAuNTgsIDAuMDQsIDAuMSwgMC41NCk7XG59XG5cbi5wb3AtbWVudS0tYnV0dG9uIGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogNTAlOyBsZWZ0OiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG5cbi5wb3AtbWVudS0tYnV0dG9uOm50aC1vZi10eXBlKDEpIHtcblx0dHJhbnNpdGlvbi1kZWxheTogLjZzO1xufVxuXG4ucG9wLW1lbnUtLWJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XG5cdHRyYW5zaXRpb24tZGVsYXk6IC4ycztcbn1cblxuLnBvcC1tZW51LS1idXR0b246bnRoLW9mLXR5cGUoMykge1xuXHR0cmFuc2l0aW9uLWRlbGF5OiAuM3M7XG59XG5cbi5wb3AtbWVudS0tbGlzdGVuZXI6Y2hlY2tlZCB+IC5wb3AtbWVudS0tYnV0dG9uIHtcblx0cG9pbnRlci1ldmVudHM6IGFsbDtcblx0b3BhY2l0eTogMTtcbn1cblxuLnBvcC1tZW51LS1saXN0ZW5lcjpjaGVja2VkIH4gLnBvcC1tZW51LS1idXR0b246bnRoLW9mLXR5cGUoMSkge1xuXHR0b3A6IC02cHg7IGxlZnQ6IC0xOHB4O1xufVxuXG4ucG9wLW1lbnUtLWxpc3RlbmVyOmNoZWNrZWQgfiAucG9wLW1lbnUtLWJ1dHRvbjpudGgtb2YtdHlwZSgyKSB7XG5cdHRvcDogLTMwcHg7XG59XG5cbi5wb3AtbWVudS0tbGlzdGVuZXI6Y2hlY2tlZCB+IC5wb3AtbWVudS0tYnV0dG9uOm50aC1vZi10eXBlKDMpIHtcblx0dG9wOiAtNnB4OyBsZWZ0OiBjYWxjKDEwMCUgKyAxOHB4KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/sidemenus/sidemenus.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/sidemenus/sidemenus.page.ts ***!
  \***************************************************/
/*! exports provided: SidemenusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenusPage", function() { return SidemenusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SidemenusPage = /** @class */ (function () {
    function SidemenusPage(menuCtrl) {
        this.menuCtrl = menuCtrl;
    }
    SidemenusPage.prototype.ngOnInit = function () {
    };
    SidemenusPage.prototype.example = function (id) {
        if (id === '1') {
            this.menuCtrl.enable(true, 'menu1');
            this.menuCtrl.open('menu1').then(function (res) {
                console.log('opende', res);
            });
            return true;
        }
        if (id === '2') {
            this.menuCtrl.enable(true, 'menu2');
            this.menuCtrl.open('menu2').then(function (res) {
                console.log('opende', res);
            });
            return true;
        }
        if (id === '3') {
            this.menuCtrl.enable(true, 'menu3');
            this.menuCtrl.open('menu3').then(function (res) {
                console.log('opende', res);
            });
            return true;
        }
        if (id === '4') {
            this.menuCtrl.enable(true, 'menu4');
            this.menuCtrl.open('menu4').then(function (res) {
                console.log('opende', res);
            });
            return true;
        }
        if (id === '5') {
            this.menuCtrl.enable(true, 'menu5');
            this.menuCtrl.open('menu5').then(function (res) {
                console.log('opende', res);
            });
            return true;
        }
    };
    SidemenusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenus',
            template: __webpack_require__(/*! ./sidemenus.page.html */ "./src/app/pages/sidemenus/sidemenus.page.html"),
            styles: [__webpack_require__(/*! ./sidemenus.page.scss */ "./src/app/pages/sidemenus/sidemenus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], SidemenusPage);
    return SidemenusPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-sidemenus-sidemenus-module.js.map