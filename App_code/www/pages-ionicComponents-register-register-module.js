(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ionicComponents-register-register-module"],{

/***/ "./src/app/pages/ionicComponents/register/register.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register/register.module.ts ***!
  \*******************************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../../../../projects/core/src/lib/center/center.module */ "./projects/core/src/lib/center/center.module.ts");
/* harmony import */ var _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../../../../projects/core/src/lib/ripple/ripple.module */ "./projects/core/src/lib/ripple/ripple.module.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register.page */ "./src/app/pages/ionicComponents/register/register.page.ts");
/* harmony import */ var _fivethree_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fivethree/core */ "./node_modules/@fivethree/core/fesm5/fivethree-core.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");














var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _fivethree_core__WEBPACK_IMPORTED_MODULE_9__["FivStepperModule"],
                src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _fivethree_core__WEBPACK_IMPORTED_MODULE_9__["FivExpandableModule"],
                _projects_core_src_lib_ripple_ripple_module__WEBPACK_IMPORTED_MODULE_6__["FivRippleModule"],
                _projects_core_src_lib_center_center_module__WEBPACK_IMPORTED_MODULE_5__["FivCenterModule"],
                _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_11__["MbscModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientJsonpModule"]
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_8__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ionicComponents/register/register.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register/register.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <div class=\"backButton\">\n      <ion-buttons slot=\"start\" color=\"light\">\n        <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n      </ion-buttons>\n    </div>\n    <!-- <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons> -->\n    <ion-title>\n      Good Conduct\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item-divider>\n    <ion-label></ion-label>\n  </ion-item-divider>\n  <!-- <ion-item line=\"none\">\n    Horizontal\n  </ion-item> -->\n  <div class=\"wrapper\">\n    <fiv-stepper #stepper [mode]=\"'horizontal'\" (fivClick)=\"stepper.open($event)\">\n      <fiv-step [subtitle]=\"'Step 1'\" [icon]=\"'md-person'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Details</ion-card-subtitle>\n            <ion-card-title>Butiran Diri</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n\n              <!-- SELECT START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"Title\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"name\" placeholder=\"Full name\" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- SELECT START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"Nationality\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Malaysia</ion-select-option>\n                    <ion-select-option value=\"m\">Non-Malaysia</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- SELECT START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"Gender\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- FIELD START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"vc_street1\" placeholder=\"Street 1\" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"vc_street2\" placeholder=\"Street 2\" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"vc_street3\" placeholder=\"Street 3\" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- SELECT START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <mbsc-select [options]=\"desktopFilterSettings\" class=\"userinput\" placeholder=\"Please Select...\">\n                  </mbsc-select>\n                </div>\n              </ion-item>\n              <!-- <ion-item lines=\"none\">\n                <mbsc-form-group>\n                  <mbsc-form-group-title>Use it on mobile</mbsc-form-group-title>\n                  <div class=\"mbsc-row\">\n                    <div class=\"mbsc-col-sm-12 mbsc-col-md-6\">\n                      <mbsc-select [(ngModel)]=\"desktopFilter\" [options]=\"desktopFilterSettings\"\n                        placeholder=\"Please Select...\">Filter</mbsc-select>\n                    </div>\n                    <div class=\"mbsc-col-sm-12 mbsc-col-md-6\">\n                      <mbsc-select [(ngModel)]=\"desktopGroup\" [options]=\"desktopGroupSettings\"\n                        placeholder=\"Please Select...\">Group select</mbsc-select>\n                    </div>\n                  </div>\n                </mbsc-form-group>\n              </ion-item> -->\n              <br />\n              <!-- SELECT END -->\n              <!-- SELECT START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"  State\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- SELECT START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"District\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- FIELD START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"ci_postcode\" placeholder=\"Postcode\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"ci_phone_nom\" placeholder=\"Phone No.\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"ci_phone_nom\" placeholder=\"Phone No.(Home/Office)\"\n                    class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"ic_new\" placeholder=\"Mycard No.\" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"ic_old\" placeholder=\"Mycard No.(Old)\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"ic_place\" placeholder=\"Place of Mycard Issue\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"ci_email\" placeholder=\"Email \" class=\"userinput\"></ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n\n                  <ion-input type=\"text\" [(ngModel)]=\"passport_no\" placeholder=\"Passport No.\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n\n\n              <ion-item lines=\"none\">\n                <ion-row class=\"item-inner\">\n                  <ion-col size=\"11\">\n                    <ion-datetime placeholder=\"Passport Issue Date\" display-format=\"YYYY MMMM DD\" [(ngModel)]=\"myDate\"\n                      class=\"userinput\">\n                    </ion-datetime>\n                  </ion-col>\n                  <ion-col size=\"1\">\n                    <ion-icon class=\"icon\" color=\"medium\" name=\"calendar\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n              <br>\n              <!-- DATE -->\n              <ion-item lines=\"none\">\n                <ion-row class=\"item-inner\">\n                  <ion-col size=\"11\">\n                    <ion-datetime placeholder=\"Passport Expired Date\" display-format=\"YYYY MMMM DD\" [(ngModel)]=\"myDate\"\n                      class=\"userinput\">\n                    </ion-datetime>\n                  </ion-col>\n                  <ion-col size=\"1\">\n                    <ion-icon class=\"icon\" color=\"medium\" name=\"calendar\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n              <br>\n              <!-- END DATE -->\n              <ion-item lines=\"none\">\n                <ion-row class=\"item-inner\">\n                  <ion-col size=\"11\">\n                    <ion-datetime placeholder=\"Birthday\" display-format=\"YYYY MMMM DD\" [(ngModel)]=\"myDate\"\n                      class=\"userinput\">\n                    </ion-datetime>\n                  </ion-col>\n                  <ion-col size=\"1\">\n                    <ion-icon class=\"icon\" color=\"medium\" name=\"calendar\"></ion-icon>\n                  </ion-col>\n                </ion-row>\n              </ion-item>\n              <br>\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"father_name\" placeholder=\"Father Name \" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- FIELD START -->\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"mother_name\" placeholder=\"Mother name \" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n            </ion-list>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\" class=\"nextbtn\">\n              <!-- <ion-button color=\"dark\" (click)=\"stepper.closeAll()\">\n                Close\n              </ion-button>\n              <ion-button color=\"dark\" (click)=\"stepper.reset(0)\">\n                reset\n              </ion-button>\n              <ion-button color=\"secondary\" (click)=\"stepper.completeStep(0)\">\n                Complete\n              </ion-button> -->\n              <ion-button color=\"primary\" fill=\"solid\" (click)=\"stepper.select(1)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <!-- SIJIL KELAKUAN BAIK SECTION -->\n      <fiv-step [subtitle]=\"'Step 2'\" [icon]=\"'md-document'\">\n        <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Good Conduct</ion-card-subtitle>\n            <ion-card-title>Sijil Kelakuan Baik</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <!-- <ion-button [disabled]=\"ex.isOpen\" (click)=\"ex.open()\">\n              Open\n            </ion-button>\n            <ion-button [disabled]=\"!ex.isOpen\" (click)=\"ex.close()\">\n              Close\n            </ion-button> -->\n\n            <fiv-expandable #ex>\n              <fiv-ripple [hover]=\"true\" header (fivClick)=\"ex.toggle()\">\n                <ion-item lines=\"none\">\n\n                  <ion-row class=\"item-expand\">\n                    <ion-col size=\"11\" class=\"ion-expand\">\n                      <ion-label color=\"primary\" class=\"expand-label\">Emploment Information</ion-label>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <fiv-expandable-indicator color=\"dark\"></fiv-expandable-indicator>\n                    </ion-col>\n                  </ion-row>\n\n                </ion-item>\n              </fiv-ripple>\n              <div content>\n                <ion-list>\n                  <br>\n                  <!-- FIELD START -->\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n\n                      <ion-input type=\"text\" [(ngModel)]=\"ci_occupation\" placeholder=\"Occupation\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"ci_position\" placeholder=\"Position\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n\n                      <ion-input type=\"text\" [(ngModel)]=\"ci_employer\" placeholder=\"Employer Name\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street1\" placeholder=\"Street 1\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street2\" placeholder=\"Street 2\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street3\" placeholder=\"Street 3\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"Country\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"State\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"District\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"ci_postcode\" placeholder=\"Postcode\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n\n                </ion-list>\n              </div>\n            </fiv-expandable>\n            <!-- EXPENDABLE START -->\n            <!-- <ion-button [disabled]=\"he.isOpen\" (click)=\"he.open()\">\n              Open\n            </ion-button>\n            <ion-button [disabled]=\"!he.isOpen\" (click)=\"he.close()\">\n              Close\n            </ion-button> -->\n            <br>\n            <fiv-expandable #he>\n              <fiv-ripple [hover]=\"true\" header (fivClick)=\"he.toggle()\">\n                <ion-item lines=\"none\">\n\n                  <ion-row class=\"item-expand\">\n                    <ion-col size=\"11\" class=\"ion-expand\">\n                      <ion-label color=\"primary\" class=\"expand-label\">Higher Education Information</ion-label>\n                    </ion-col>\n                    <ion-col size=\"1\">\n                      <fiv-expandable-indicator color=\"dark\"></fiv-expandable-indicator>\n                    </ion-col>\n                  </ion-row>\n\n                </ion-item>\n              </fiv-ripple>\n              <div content>\n                <ion-list>\n                  <br>\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"hei_institution\" placeholder=\"Institution Name\"\n                        class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- SELECT START -->\n                  <ion-item lines=\"none\">\n                    <ion-row class=\"item-inner\">\n                      <ion-col size=\"11\">\n                        <ion-datetime placeholder=\"Year Start Study\" display-format=\"YYYY\" [(ngModel)]=\"myDate\"\n                          class=\"userinput\">\n                        </ion-datetime>\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <ion-icon class=\"icon\" color=\"medium\" name=\"calendar\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <br>\n                  <!-- SELECT END -->\n                  <!-- SELECT START -->\n\n                  <ion-item lines=\"none\">\n                    <ion-row class=\"item-inner\">\n                      <ion-col size=\"11\">\n                        <ion-datetime placeholder=\"Year End Study\" display-format=\"YYYY\" [(ngModel)]=\"myDate\"\n                          class=\"userinput\">\n                        </ion-datetime>\n                      </ion-col>\n                      <ion-col size=\"1\">\n                        <ion-icon class=\"icon\" color=\"medium\" name=\"calendar\"></ion-icon>\n                      </ion-col>\n                    </ion-row>\n                  </ion-item>\n                  <br>\n                  <!-- SELECT END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street1\" placeholder=\"Street 1\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street2\" placeholder=\"Street 2\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"vc_street3\" placeholder=\"Street 3\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"Country\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"State\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- SELECT START -->\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-select placeholder=\"District\" class=\"userinput\">\n                        <ion-select-option value=\"f\">Female</ion-select-option>\n                        <ion-select-option value=\"m\">Male</ion-select-option>\n                      </ion-select>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- SELECT END -->\n                  <!-- FIELD START -->\n\n\n\n                  <ion-item lines=\"none\">\n                    <div class=\"item-inner\">\n                      <ion-input type=\"text\" [(ngModel)]=\"ci_postcode\" placeholder=\"Postcode\" class=\"userinput\">\n                      </ion-input>\n                    </div>\n                  </ion-item>\n                  <br />\n                  <!-- FIELD END -->\n                </ion-list>\n              </div>\n            </fiv-expandable>\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\" class=\"nextbtn\">\n              <ion-button color=\"primary\" (click)=\"stepper.select(0)\">\n                PREVIOUS\n              </ion-button>\n              <ion-button color=\"primary\" fill=\"solid\" (click)=\"stepper.select(2)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <!-- TUJUAN SECTION -->\n      <fiv-step [subtitle]=\"'Step 3'\" [icon]=\"'md-help'\">\n        <ion-card class=\"card-horizontal\">\n          <ion-card-header>\n            <ion-card-subtitle>Purpose</ion-card-subtitle>\n            <ion-card-title>Tujuan</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <!-- SELECT START -->\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"Purpose\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <!-- FIELD START -->\n\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-input type=\"text\" [(ngModel)]=\"app_purpose_other\" placeholder=\"Other\" class=\"userinput\">\n                  </ion-input>\n                </div>\n              </ion-item>\n              <br />\n              <!-- FIELD END -->\n              <!-- SELECT START -->\n\n              <ion-item lines=\"none\">\n                <div class=\"item-inner\">\n                  <ion-select placeholder=\"Country Need Certificate\" class=\"userinput\">\n                    <ion-select-option value=\"f\">Female</ion-select-option>\n                    <ion-select-option value=\"m\">Male</ion-select-option>\n                  </ion-select>\n                </div>\n              </ion-item>\n              <br />\n              <!-- SELECT END -->\n              <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"getDoc()\">Upload Document</ion-button>\n            </ion-list>\n\n          </ion-card-content>\n          <ion-toolbar>\n            <ion-buttons slot=\"end\" class=\"nextbtn\">\n              <ion-button color=\"primary\" (click)=\"stepper.select(1)\">\n                PREVIOUS\n              </ion-button>\n              <ion-button color=\"primary\" fill=\"solid\" (click)=\"stepper.select(3)\">\n                NEXT\n              </ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n      <!-- GAMBAR SECTION -->\n      <fiv-step [subtitle]=\"'Step 4'\" [icon]=\"'md-image'\">\n        <ion-card class=\"card-horizontal\">\n          <ion-card-header class=\"photo\">\n            <ion-card-subtitle>Passport Size Photo</ion-card-subtitle>\n            <ion-card-title>Gambar Berukuran Pasport</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item *ngIf=\"cap_img\">\n                <img [src]=\"cap_img\" class=\"img_selected\" />\n              </ion-item>\n\n\n\n            </ion-list>\n            <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"getImages()\">Upload Passport Size Photo\n            </ion-button>\n            <ion-text color=\"medium\">\n              <h5 class=\"photo\">Photo upload requirement:<br>\n                1. Max Size : 200Kb<br>\n                2. Format : *.jng, *.jpeg or *.png\n              </h5>\n            </ion-text>\n          </ion-card-content>\n          <br>\n          <ion-card-header class=\"photo\">\n            <ion-card-subtitle>Front Page Passport Photo</ion-card-subtitle>\n            <ion-card-title>Gambar Muka Depan Berukuran Pasport</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <ion-list>\n              <ion-item *ngIf=\"cap_img1\">\n                <img [src]=\"cap_img1\" class=\"img_selected\" />\n              </ion-item>\n\n            </ion-list>\n\n            <ion-button expand=\"block\" fill=\"outline\" color=\"primary\" (click)=\"getImages1()\">Upload Front Page\n              Passport Photo</ion-button>\n          </ion-card-content>\n          <ion-toolbar>\n\n            <ion-buttons slot=\"end\" class=\"nextbtn\">\n              <ion-button color=\"primary\" (click)=\"stepper.select(2)\">\n                PREVIOUS\n              </ion-button>\n              <ion-button expand=\"block\" color=\"primary\" fill=\"solid\" (click)=\"presentActionSheet()\">SUBMIT</ion-button>\n            </ion-buttons>\n          </ion-toolbar>\n        </ion-card>\n      </fiv-step>\n    </fiv-stepper>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ionicComponents/register/register.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register/register.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  display: flex;\n  flex-direction: column;\n  width: 100% !important;\n  margin: 0 !important; }\n\nion-select, bsc-select {\n  margin-right: 30px;\n  min-width: -webkit-fill-available;\n  background-color: transparent; }\n\nion-button {\n  width: -webkit-fill-available;\n  --border-radius: 15px !important;\n  margin-left: 30px;\n  margin-right: 30px; }\n\nion-col {\n  place-self: center;\n  padding: 0px; }\n\n.item-native {\n  background-color: crimson; }\n\n.fiveMargin {\n  margin-top: 16px; }\n\n.content {\n  color: var(--ion-color-primary); }\n\n.img_selected {\n  width: 100%;\n  height: 200px; }\n\n.footerContent {\n  margin-top: 10px; }\n\n.footerContent .infoFooter {\n    color: gray;\n    font-size: 10px; }\n\n.footerContent .footerImage {\n    height: 25px; }\n\n.footerContent .footerImageW {\n    height: 25px;\n    margin-left: 82%; }\n\n.sendBtn {\n  border-radius: 10px; }\n\n.nextbtn {\n  width: -webkit-fill-available; }\n\n.item-inner {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--inner-padding-start);\n  padding-inline-start: var(--inner-padding-start);\n  -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  border-radius: 30px !important;\n  padding: 6px;\n  border: solid;\n  border-color: #f0f8ffa1;\n  background-color: #dadada7a;\n  width: -webkit-fill-available; }\n\n.item-expand {\n  padding-left: unset;\n  padding-right: unset;\n  -webkit-padding-start: var(--inner-padding-start);\n  padding-inline-start: var(--inner-padding-start);\n  -webkit-padding-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  padding-inline-end: calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));\n  border-radius: 30px !important;\n  padding: 6px;\n  background-color: #e3ecf8;\n  --highlight-color-focused: transparent !important;\n  width: -webkit-fill-available; }\n\n.expand-label {\n  margin-left: 30px; }\n\n.userinput {\n  --ion-background-color:rgba(255, 255, 255, 0.15);\n  font-size: 10pt;\n  margin-left: 30px;\n  padding-left: 0px;\n  --highlight-color-focused: transparent !important; }\n\n.icon {\n  font-size: larger; }\n\n.ion-expand {\n  padding: 10px; }\n\n.photo {\n  text-align: initial;\n  margin-left: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9rb25zdWxhci1tb2JpbGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9pb25pY0NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsb0JBQW9CLEVBQUE7O0FBR3RCO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQyw2QkFBNkIsRUFBQTs7QUFFL0I7RUFDRSw2QkFBNkI7RUFDN0IsZ0NBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QixFQUFBOztBQUkvQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLCtCQUErQixFQUFBOztBQUduQztFQUNJLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBR2pCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBRHBCO0lBR1EsV0FBVztJQUNYLGVBQWUsRUFBQTs7QUFKdkI7SUFPUSxZQUFZLEVBQUE7O0FBUHBCO0lBVVEsWUFBWTtJQUNaLGdCQUFnQixFQUFBOztBQUl4QjtFQUNJLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLDZCQUE2QixFQUFBOztBQUdqQztFQUNJLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsaURBQWlEO0VBQ2pELGdEQUFnRDtFQUNoRCxxRkFBcUY7RUFDckYsb0ZBQW9GO0VBQ3BGLDhCQUE4QjtFQUM5QixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0IsNkJBQTZCLEVBQUE7O0FBR2pDO0VBQ0ksbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpREFBaUQ7RUFDakQsZ0RBQWdEO0VBQ2hELHFGQUFxRjtFQUNyRixvRkFBb0Y7RUFDcEYsOEJBQThCO0VBQzlCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsaURBQTJCO0VBQzNCLDZCQUE2QixFQUFBOztBQUlqQztFQUNJLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGdEQUF1QjtFQUNuQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpREFBMkIsRUFBQTs7QUFHbkM7RUFDSSxpQkFBaUIsRUFBQTs7QUFHckI7RUFFSSxhQUFhLEVBQUE7O0FBR2pCO0VBRUksbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW9uaWNDb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICB9XG5cbiAgaW9uLXNlbGVjdCwgYnNjLXNlbGVjdHtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgbWluLXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIGlvbi1idXR0b257XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IFxuICAgIC0tYm9yZGVyLXJhZGl1czogMTVweCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgfVxuXG4gIGlvbi1jb2x7XG4gICAgICBwbGFjZS1zZWxmOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiAwcHg7XG4gIH1cblxuICAuaXRlbS1uYXRpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcbiAgfVxuXG5cbi5maXZlTWFyZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuXG4uY29udGVudCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuLmltZ19zZWxlY3RlZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uZm9vdGVyQ29udGVudCB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAuaW5mb0Zvb3RlciB7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5mb290ZXJJbWFnZSB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICB9XG4gICAgLmZvb3RlckltYWdlVyB7XG4gICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDgyJTtcbiAgICB9XG59XG5cbi5zZW5kQnRuIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4ubmV4dGJ0biB7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5pdGVtLWlubmVyIHtcbiAgICBwYWRkaW5nLWxlZnQ6IHVuc2V0O1xuICAgIHBhZGRpbmctcmlnaHQ6IHVuc2V0O1xuICAgIC13ZWJraXQtcGFkZGluZy1zdGFydDogdmFyKC0taW5uZXItcGFkZGluZy1zdGFydCk7XG4gICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHZhcigtLWlubmVyLXBhZGRpbmctc3RhcnQpO1xuICAgIC13ZWJraXQtcGFkZGluZy1lbmQ6IGNhbGModmFyKC0taW9uLXNhZmUtYXJlYS1yaWdodCwgMHB4KSArIHZhcigtLWlubmVyLXBhZGRpbmctZW5kKSk7XG4gICAgcGFkZGluZy1pbmxpbmUtZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkgKyB2YXIoLS1pbm5lci1wYWRkaW5nLWVuZCkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgYm9yZGVyOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6ICNmMGY4ZmZhMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFkYWRhN2E7XG4gICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG59XG5cbi5pdGVtLWV4cGFuZCB7XG4gICAgcGFkZGluZy1sZWZ0OiB1bnNldDtcbiAgICBwYWRkaW5nLXJpZ2h0OiB1bnNldDtcbiAgICAtd2Via2l0LXBhZGRpbmctc3RhcnQ6IHZhcigtLWlubmVyLXBhZGRpbmctc3RhcnQpO1xuICAgIHBhZGRpbmctaW5saW5lLXN0YXJ0OiB2YXIoLS1pbm5lci1wYWRkaW5nLXN0YXJ0KTtcbiAgICAtd2Via2l0LXBhZGRpbmctZW5kOiBjYWxjKHZhcigtLWlvbi1zYWZlLWFyZWEtcmlnaHQsIDBweCkgKyB2YXIoLS1pbm5lci1wYWRkaW5nLWVuZCkpO1xuICAgIHBhZGRpbmctaW5saW5lLWVuZDogY2FsYyh2YXIoLS1pb24tc2FmZS1hcmVhLXJpZ2h0LCAwcHgpICsgdmFyKC0taW5uZXItcGFkZGluZy1lbmQpKTtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2VjZjg7XG4gICAgLS1oaWdobGlnaHQtY29sb3ItZm9jdXNlZCA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7ICBcbiAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICBcbn1cblxuLmV4cGFuZC1sYWJlbHtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnVzZXJpbnB1dHtcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBwdDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAtLWhpZ2hsaWdodC1jb2xvci1mb2N1c2VkIDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgICAgXG4gICAgfVxuXG4uaWNvbntcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbn1cblxuLmlvbi1leHBhbmRcbntcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4ucGhvdG9cbntcbiAgICB0ZXh0LWFsaWduOiBpbml0aWFsO1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/ionicComponents/register/register.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/ionicComponents/register/register.page.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/util.service */ "./src/app/providers/util.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mobiscroll/angular */ "./node_modules/@mobiscroll/angular/dist/esm5/mobiscroll.angular.min.js");







_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_5__["mobiscroll"].settings = {
    theme: 'ios',
    themeVariant: 'light'
};
var remoteData = {
    url: 'https://trial.mobiscroll.com/content/countries.json',
    type: 'json'
};
var RegisterPage = /** @class */ (function () {
    function RegisterPage(alertCtrl, util, cameraCtrl, actionSheetController) {
        this.alertCtrl = alertCtrl;
        this.util = util;
        this.cameraCtrl = cameraCtrl;
        this.actionSheetController = actionSheetController;
        this.filterSettings = {
            display: 'bubble',
            data: remoteData,
            filter: true,
            group: {
                groupWheel: false,
                header: false
            },
            width: 400
        };
        this.groupSettings = {
            display: 'bubble',
            data: remoteData,
            group: true,
            width: [40, 240]
        };
        this.desktopFilterSettings = {
            display: 'bubble',
            touchUi: false,
            data: remoteData,
            filter: true,
            group: {
                groupWheel: false,
                header: false
            },
            width: 400
        };
        this.desktopGroupSettings = {
            display: 'bubble',
            touchUi: false,
            data: remoteData,
            group: true
        };
    }
    RegisterPage.prototype.ngOnInit = function () {
    };
    // async presentActionSheet() {
    //   const actionSheet = await this.actionSheetController.create({
    //     header: 'Submit your application ',
    //     backdropDismiss: false,
    //     buttons: [{
    //       text: 'Delete',
    //       role: 'destructive',
    //       icon: 'trash',
    //       cssClass: 'rojos',
    //       handler: () => {
    //         console.log('Delete clicked');
    //       }
    //     }, {
    //       text: 'Send',
    //       icon: 'share',
    //       handler: () => {
    //         console.log('Share clicked');
    //       }
    //     }, {
    //       text: 'Cancel',
    //       icon: 'close',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     }]
    //   });
    //   await actionSheet.present();
    // }
    RegisterPage.prototype.getImages = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Choose From',
                            buttons: [
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera clicked');
                                        _this.takePhoto();
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        console.log('gallery clicked');
                                        _this.gallery();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.getImages1 = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Choose From',
                            buttons: [
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        console.log('camera clicked');
                                        _this.takePhoto();
                                    }
                                }, {
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        console.log('gallery clicked');
                                        _this.gallery();
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                        console.log('Cancel clicked');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.gallery = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, result, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 100,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                            encodingType: this.cameraCtrl.EncodingType.JPEG,
                            mediaType: this.cameraCtrl.MediaType.PICTURE,
                            sourceType: this.cameraCtrl.PictureSourceType.PHOTOLIBRARY,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.cameraCtrl.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.cap_img = "data:image/png;base64," + result;
                        this.cap_img1 = "data:image/png;base64," + result;
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; // take Gallary
    RegisterPage.prototype.takePhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var options, result, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        options = {
                            quality: 100,
                            targetHeight: 500,
                            targetWidth: 500,
                            destinationType: this.cameraCtrl.DestinationType.DATA_URL,
                            encodingType: this.cameraCtrl.EncodingType.PNG,
                            mediaType: this.cameraCtrl.MediaType.PICTURE,
                            sourceType: this.cameraCtrl.PictureSourceType.CAMERA,
                            correctOrientation: true
                        };
                        return [4 /*yield*/, this.cameraCtrl.getPicture(options)];
                    case 1:
                        result = _a.sent();
                        this.cap_img = "data:image/png;base64," + result;
                        return [3 /*break*/, 3];
                    case 2:
                        e_2 = _a.sent();
                        console.error(e_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.presentActionSheet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Alert!',
                            message: 'You cant make any changes after proceed',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (blah) {
                                        console.log('Confirm Cancel: blah');
                                    }
                                }, {
                                    text: 'Proceed',
                                    handler: function () {
                                        console.log('Confirm Okay');
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/pages/ionicComponents/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/pages/ionicComponents/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_providers_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_3__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ionicComponents-register-register-module.js.map