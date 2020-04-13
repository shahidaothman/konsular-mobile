(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-miscellaneous-ck-editor-ck-editor-module"],{

/***/ "./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js":
/*!***********************************************************************!*\
  !*** ./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?e(exports,__webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js"),__webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js"),__webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js")):undefined}(this,function(t,e,n,o){"use strict";function i(t,e,n,o){var i,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,o);else for(var u=t.length-1;u>=0;u--)(i=t[u])&&(s=(r<3?i(s):r>3?i(e,n,s):i(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s}function r(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)}var s=function(){function t(){this.click=new e.EventEmitter}return t.prototype.initialize=function(t){var e=this;t.instance.addCommand(this.command,{exec:function(t){e.click.emit(t)}}),t.instance.ui.addButton(this.name,{label:this.label,command:this.command,toolbar:this.toolbar,icon:this.icon})},t.prototype.ngOnInit=function(){if(!this.name)throw new Error('Attribute "name" is required on <ckbutton>');if(!this.command)throw new Error('Attribute "command" is required on <ckbutton>')},i([e.Output(),r("design:type",Object)],t.prototype,"click",void 0),i([e.Input(),r("design:type",String)],t.prototype,"label",void 0),i([e.Input(),r("design:type",String)],t.prototype,"command",void 0),i([e.Input(),r("design:type",String)],t.prototype,"toolbar",void 0),i([e.Input(),r("design:type",String)],t.prototype,"name",void 0),i([e.Input(),r("design:type",String)],t.prototype,"icon",void 0),t=i([e.Directive({selector:"ckbutton"})],t)}(),u=function(){function t(){}return t.prototype.ngAfterContentInit=function(){var t=this;this.toolbarButtons.forEach(function(e){return e.toolbar=t.name})},t.prototype.initialize=function(t){t.instance.ui.addToolbarGroup(this.name,this.previous,this.subgroupOf),this.toolbarButtons.forEach(function(e){e.initialize(t)})},i([e.Input(),r("design:type",String)],t.prototype,"name",void 0),i([e.Input(),r("design:type",Object)],t.prototype,"previous",void 0),i([e.Input(),r("design:type",String)],t.prototype,"subgroupOf",void 0),i([e.ContentChildren(s),r("design:type",e.QueryList)],t.prototype,"toolbarButtons",void 0),t=i([e.Directive({selector:"ckgroup"})],t)}(),c=function(){function t(t){this.zone=t,this.change=new e.EventEmitter,this.editorChange=new e.EventEmitter,this.ready=new e.EventEmitter,this.blur=new e.EventEmitter,this.focus=new e.EventEmitter,this.contentDom=new e.EventEmitter,this.fileUploadRequest=new e.EventEmitter,this.fileUploadResponse=new e.EventEmitter,this.paste=new e.EventEmitter,this.drop=new e.EventEmitter,this._value=""}var n;return n=t,Object.defineProperty(t.prototype,"value",{get:function(){return this._value},set:function(t){t!==this._value&&(this._value=t,this.onChange(t))},enumerable:!0,configurable:!0}),t.prototype.ngOnChanges=function(t){t.readonly&&this.instance&&this.instance.setReadOnly(t.readonly.currentValue)},t.prototype.ngOnDestroy=function(){var t=this;this.instance&&setTimeout(function(){t.instance&&(t.instance.removeAllListeners(),CKEDITOR.instances[t.instance.name].destroy(),t.instance.destroy(),t.instance=null)})},t.prototype.ngAfterViewInit=function(){this.ckeditorInit(this.config||{})},t.prototype.ngAfterViewChecked=function(){this.ckeditorInit(this.config||{})},t.prototype.updateValue=function(t){var e=this;this.zone.run(function(){e.value=t,e.onChange(t),e.onTouched(),e.change.emit(t)})},t.prototype.ckeditorInit=function(t){var e=this;if("undefined"==typeof CKEDITOR)console.warn("CKEditor 4.x is missing (http://ckeditor.com/)");else{if(this.instance||!this.documentContains(this.host.nativeElement))return;this.readonly&&(t.readOnly=this.readonly),this.instance=CKEDITOR.replace(this.host.nativeElement,t),this.instance.setData(this.value),this.instance.on("instanceReady",function(t){e.instance.getData()!==e.value&&e.instance.setData(e.value),e.ready.emit(t)}),this.instance.on("change",function(t){e.onTouched();var n=e.instance.getData();e.value!==n&&(e.debounce?(e.debounceTimeout&&clearTimeout(e.debounceTimeout),e.debounceTimeout=setTimeout(function(){e.updateValue(n),e.debounceTimeout=null},parseInt(e.debounce))):e.updateValue(n)),e.editorChange.emit(t)}),this.instance.on("blur",function(t){e.blur.emit(t)}),this.instance.on("focus",function(t){e.focus.emit(t)}),this.instance.on("contentDom",function(t){e.contentDom.emit(t)}),this.instance.on("fileUploadRequest",function(t){e.fileUploadRequest.emit(t)}),this.instance.on("fileUploadResponse",function(t){e.fileUploadResponse.emit(t)}),this.instance.on("paste",function(t){e.paste.emit(t)}),this.instance.on("drop",function(t){e.drop.emit(t)}),this.toolbarGroups.forEach(function(t){t.initialize(e)}),this.toolbarButtons.forEach(function(t){t.initialize(e)})}},t.prototype.writeValue=function(t){this._value=t,this.instance&&this.instance.setData(t)},t.prototype.onChange=function(t){},t.prototype.onTouched=function(){},t.prototype.registerOnChange=function(t){this.onChange=t},t.prototype.registerOnTouched=function(t){this.onTouched=t},t.prototype.documentContains=function(t){return document.contains?document.contains(t):document.body.contains(t)},i([e.Input(),r("design:type",Object)],t.prototype,"config",void 0),i([e.Input(),r("design:type",Boolean)],t.prototype,"readonly",void 0),i([e.Input(),r("design:type",String)],t.prototype,"debounce",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"change",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"editorChange",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"ready",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"blur",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"focus",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"contentDom",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"fileUploadRequest",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"fileUploadResponse",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"paste",void 0),i([e.Output(),r("design:type",Object)],t.prototype,"drop",void 0),i([e.ViewChild("host"),r("design:type",Object)],t.prototype,"host",void 0),i([e.ContentChildren(s),r("design:type",e.QueryList)],t.prototype,"toolbarButtons",void 0),i([e.ContentChildren(u),r("design:type",e.QueryList)],t.prototype,"toolbarGroups",void 0),i([e.Input(),r("design:type",Object),r("design:paramtypes",[Object])],t.prototype,"value",null),t=n=i([e.Component({selector:"ckeditor",providers:[{provide:o.NG_VALUE_ACCESSOR,useExisting:e.forwardRef(function(){return n}),multi:!0}],template:"\n    <textarea #host></textarea>\n  "}),r("design:paramtypes",[e.NgZone])],t)}(),p=function(){function t(){}return t=i([e.NgModule({imports:[n.CommonModule],declarations:[c,s,u],exports:[c,s,u]})],t)}();t.CKEditorModule=p,t.ɵa=c,t.ɵb=s,t.ɵc=u,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=ng2-ckeditor.umd.min.js.map

/***/ }),

/***/ "./src/app/pages/miscellaneous/ck-editor/ck-editor.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/ck-editor/ck-editor.module.ts ***!
  \*******************************************************************/
/*! exports provided: CkEditorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkEditorPageModule", function() { return CkEditorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ck_editor_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ck-editor.page */ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.ts");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/lib/bundles/ng2-ckeditor.umd.min.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__);







//Add Module Library here

var routes = [
    {
        path: '',
        component: _ck_editor_page__WEBPACK_IMPORTED_MODULE_6__["CkEditorPage"]
    }
];
var CkEditorPageModule = /** @class */ (function () {
    function CkEditorPageModule() {
    }
    CkEditorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                ng2_ckeditor__WEBPACK_IMPORTED_MODULE_7__["CKEditorModule"]
            ],
            declarations: [_ck_editor_page__WEBPACK_IMPORTED_MODULE_6__["CkEditorPage"]]
        })
    ], CkEditorPageModule);
    return CkEditorPageModule;
}());



/***/ }),

/***/ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/ck-editor/ck-editor.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\" color=\"light\">\n      <ion-back-button defaultHref=\"home\" color=\"light\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ck Editor</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"title\">CK Editor</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <div>\n    <ckeditor [(ngModel)]=\"ckeditorContent\"\n      [config]=\"{uiColor: '#0cd1e8',removeButtons:'Source,Copy,Cut,Paste,Undo,Redo,Print,Form,TextField,Textarea,Button,SelectAll,NumberedList,BulletedList,CreateDiv,Table,PasteText,PasteFromWord,Select,HiddenField',removePlugins:'elementspath,save,image,flash,iframe,link,smiley,find,pagebreak,templates,about,maximize,showblocks,newpage,language'}\"\n      [readonly]=\"false\" (change)=\"onChange($event)\" debounce=\"500\">\n    </ckeditor>\n  </div>\n\n  <ion-row>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n    <ion-col>\n      <p class=\"title\">Output</p>\n    </ion-col>\n    <ion-col size=\"3\">\n      <div class=\"center\">\n        <div class=\"seperator\"></div>\n      </div>\n    </ion-col>\n  </ion-row>\n  <div class=\"output\">\n    <div>{{ckeditorContent}}</div>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/miscellaneous/ck-editor/ck-editor.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".title {\n  text-align: center;\n  font-family: 'Avenir';\n  font-size: 18px;\n  margin: 0px;\n  margin-top: 10px; }\n\n.center {\n  width: 100%;\n  height: 100%; }\n\n.seperator {\n  width: 90%;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  height: 1px;\n  background-color: #ECF0F1;\n  display: flex;\n  justify-content: center; }\n\n.output {\n  padding: 10px; }\n\n/deep/ .cke_bottom {\n  display: none !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZWNobGFiL3Byb2plY3QvdW5pamF5YS9pb25pYy9BcHBfU291cmNlX0NvZGUvQXBwX2NvZGUvc3JjL2FwcC9wYWdlcy9taXNjZWxsYW5lb3VzL2NrLWVkaXRvci9jay1lZGl0b3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQixFQUFBOztBQUlsQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYix1QkFBdUIsRUFBQTs7QUFFekI7RUFDSSxhQUFhLEVBQUE7O0FBVWpCO0VBQ0Usd0JBQXdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9taXNjZWxsYW5lb3VzL2NrLWVkaXRvci9jay1lZGl0b3IucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxle1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyJztcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuXG4uY2VudGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNlcGVyYXRvcntcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFQ0YwRjE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm91dHB1dHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cblxuLy9UbyBoaWRlIEFsbCBDb250cm9sbGVyIFVuY29tbWVudCB0aGlzXG4vLyAvZGVlcC8gLmNrZV90b3B7XG4vLyAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbi8vIH1cblxuL2RlZXAvIC5ja2VfYm90dG9te1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8vVG8gaGlkZSBBbGwgQ29udHJvbGxlciBVbmNvbW1lbnQgdGhpc1xuLy8gL2RlZXAvIC5ja2Uge1xuLy8gICBib3JkZXItd2lkdGg6IDFweCAhaW1wb3J0YW50O1xuLy8gICBib3JkZXItc3R5bGU6IHNvbGlkICFpbXBvcnRhbnQ7XG4vLyAgIGJvcmRlci1jb2xvcjogI0UzRTNFMyAhaW1wb3J0YW50O1xuLy8gICBib3JkZXItcmFkaXVzOiA3cHggIWltcG9ydGFudDtcbi8vICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbi8vICAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG4vLyB9Il19 */"

/***/ }),

/***/ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/miscellaneous/ck-editor/ck-editor.page.ts ***!
  \*****************************************************************/
/*! exports provided: CkEditorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CkEditorPage", function() { return CkEditorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CkEditorPage = /** @class */ (function () {
    function CkEditorPage() {
        //Read More for CK Editor : https://www.npmjs.com/package/ng2-ckeditor
        this.ckeditorContent = '';
    }
    CkEditorPage.prototype.ngOnInit = function () {
    };
    CkEditorPage.prototype.onChange = function (event) {
        console.log('events', event);
    };
    CkEditorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ck-editor',
            template: __webpack_require__(/*! ./ck-editor.page.html */ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.html"),
            styles: [__webpack_require__(/*! ./ck-editor.page.scss */ "./src/app/pages/miscellaneous/ck-editor/ck-editor.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CkEditorPage);
    return CkEditorPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-miscellaneous-ck-editor-ck-editor-module.js.map