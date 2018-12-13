(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  background-color: grey;\r\n  width: 100%;\r\n}\r\n\r\n.content {\r\n  clear: both;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "./src/app/components/blog-item/blog-item.component.ts");
/* harmony import */ var _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog-item-image/blog-item-image.component */ "./src/app/components/blog-item-image/blog-item-image.component.ts");
/* harmony import */ var _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/blog-item-text/blog-item-text.component */ "./src/app/components/blog-item-text/blog-item-text.component.ts");
/* harmony import */ var _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/blog-item-detail/blog-item-detail.component */ "./src/app/components/blog-item-detail/blog-item-detail.component.ts");
/* harmony import */ var _summary_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./summary.pipe */ "./src/app/summary.pipe.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/app/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/blog-home/blog-home.component */ "./src/app/components/blog-home/blog-home.component.ts");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var appRoutes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
    },
    {
        path: 'quiz',
        component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
    },
    {
        path: 'blog',
        component: _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_19__["BlogHomeComponent"],
    },
    {
        path: 'blog/detail/:id',
        component: _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["BlogItemDetailComponent"],
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_8__["BlogComponent"],
                _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__["BlogItemComponent"],
                _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_10__["BlogItemImageComponent"],
                _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_11__["BlogItemTextComponent"],
                _components_blog_item_detail_blog_item_detail_component__WEBPACK_IMPORTED_MODULE_12__["BlogItemDetailComponent"],
                _summary_pipe__WEBPACK_IMPORTED_MODULE_13__["SummaryPipe"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_15__["FilterPipe"],
                _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_18__["SearchBarComponent"],
                _components_blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_19__["BlogHomeComponent"],
                _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_20__["TextFormatDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_16__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" appTextFormat>\n<app-search-bar (name)=\"getName($event)\"></app-search-bar>\n<app-blog [filterText]=\"filterText\"></app-blog>\n"

/***/ }),

/***/ "./src/app/components/blog-home/blog-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-home/blog-home.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHomeComponent", function() { return BlogHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogHomeComponent = /** @class */ (function () {
    function BlogHomeComponent() {
    }
    BlogHomeComponent.prototype.ngOnInit = function () {
    };
    BlogHomeComponent.prototype.getName = function ($event) {
        this.filterText = $event;
    };
    BlogHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-home',
            template: __webpack_require__(/*! ./blog-home.component.html */ "./src/app/components/blog-home/blog-home.component.html"),
            styles: [__webpack_require__(/*! ./blog-home.component.css */ "./src/app/components/blog-home/blog-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogHomeComponent);
    return BlogHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-blog-item-image [image]=\"image\"></app-blog-item-image>\n<app-blog-item-text [text]=\"text\"></app-blog-item-text>\n"

/***/ }),

/***/ "./src/app/components/blog-item-detail/blog-item-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-item-detail/blog-item-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: BlogItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemDetailComponent", function() { return BlogItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogItemDetailComponent = /** @class */ (function () {
    function BlogItemDetailComponent(data) {
        this.data = data;
    }
    BlogItemDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentText.subscribe(function (text) { return _this.text = text; });
        this.data.currentImage.subscribe(function (image) { return _this.image = image; });
    };
    BlogItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-detail',
            template: __webpack_require__(/*! ./blog-item-detail.component.html */ "./src/app/components/blog-item-detail/blog-item-detail.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-detail.component.css */ "./src/app/components/blog-item-detail/blog-item-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BlogItemDetailComponent);
    return BlogItemDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{image}}\">\n"

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlogItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemImageComponent", function() { return BlogItemImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemImageComponent = /** @class */ (function () {
    function BlogItemImageComponent() {
    }
    BlogItemImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemImageComponent.prototype, "image", void 0);
    BlogItemImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-image',
            template: __webpack_require__(/*! ./blog-item-image.component.html */ "./src/app/components/blog-item-image/blog-item-image.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-image.component.css */ "./src/app/components/blog-item-image/blog-item-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemImageComponent);
    return BlogItemImageComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p> {{ text }} </p>\n"

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogItemTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemTextComponent", function() { return BlogItemTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemTextComponent = /** @class */ (function () {
    function BlogItemTextComponent() {
    }
    BlogItemTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemTextComponent.prototype, "text", void 0);
    BlogItemTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item-text',
            template: __webpack_require__(/*! ./blog-item-text.component.html */ "./src/app/components/blog-item-text/blog-item-text.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-text.component.css */ "./src/app/components/blog-item-text/blog-item-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemTextComponent);
    return BlogItemTextComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-blog-item-image [image]=\"image\"></app-blog-item-image>\n<app-blog-item-text [text]=\"text\"></app-blog-item-text>\n"

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemComponent = /** @class */ (function () {
    function BlogItemComponent() {
    }
    BlogItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "text", void 0);
    BlogItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-item',
            template: __webpack_require__(/*! ./blog-item.component.html */ "./src/app/components/blog-item/blog-item.component.html"),
            styles: [__webpack_require__(/*! ./blog-item.component.css */ "./src/app/components/blog-item/blog-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemComponent);
    return BlogItemComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let it of items | filter:filterText\">\n  <app-blog-item [image]=\"it.url\" [text]=\"it.title | summary:35\" (click)=\"newValues(it.title, it.url, items.indexOf(it))\"></app-blog-item>\n</div>\n"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data-service.service */ "./src/app/services/data-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BlogComponent = /** @class */ (function () {
    function BlogComponent(data, router, dataServ, route) {
        this.data = data;
        this.router = router;
        this.dataServ = dataServ;
        this.route = route;
    }
    BlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) { return _this.filterText = params['title']; });
        // this.filterText = this.route.snapshot.queryParamMap.get("title");
        this.dataServ.getAll().subscribe(function (result) {
            _this.items = result;
            console.log(_this.items);
        });
        // this.dataServ.get(10).subscribe(result => {
        //   this.value = result;
        //   console.log(this.value);
        // };
    };
    BlogComponent.prototype.setQuery = function (text) {
        this.router.navigate(['/blog'], {
            queryParams: { title: text }
        });
    };
    BlogComponent.prototype.newValues = function (text, image, id) {
        this.data.changeImage(image);
        this.data.changeText(text);
        this.router.navigate(['/blog/detail/', id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogComponent.prototype, "filterText", void 0);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_data_service_service__WEBPACK_IMPORTED_MODULE_3__["DataServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <form [formGroup]=\"form\">\r\n    <fieldset>\r\n      <div class=\"container-fluid\">\r\n        <legend>Uzupełnij dane</legend>\r\n        <label for=\"name\">Imię: </label>\r\n        <input formControlName=\"name\" id=\"name\" name=\"name\" placeholder=\"Podaj imie\">\r\n        <div *ngIf=\"form.get('name').touched && form.get('name').invalid\" class=\"alert alert-danger\"\r\n             required=\"\"> \"Nie podano imienia lub wprowadzono błędny format (proszę prowadzić tylko litery)\" </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"surname\">Nazwisko: </label>\r\n          <input formControlName=\"surname\" id=\"surname\" name=\"surname\" placeholder=\"Podaj nazwisko\">\r\n          <div *ngIf=\"form.get('surname').touched && form.get('surname').invalid\" class=\"alert alert-danger\"\r\n               required=\"\"> \"Nie podano nazwiska lub wprowadzono błędny format (proszę prowadzić tylko litery)\" </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label>Email: </label>\r\n          <input formControlName=\"email\" placeholder=\"Podaj email\">\r\n          <div *ngIf=\"form.get('email').touched && form.get('email').invalid\" class=\"alert alert-danger\"\r\n               required=\"\"> \"Nie podano emaila\" </div>\r\n        </div>\r\n        <div class=\"checkbox\">\r\n          <label>Płeć: </label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\" checked>Mężczyzna</label>\r\n          <label class=\"radio-inline\"><input type=\"radio\" name=\"optradio\">Kobieta</label>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label for=\"description\">Opis: </label>\r\n          <textarea id=\"description\" name=\"description\" cols=\"20\" rows=\"3\" required></textarea>\r\n        </div>\r\n        <label for=\"age\">Wiek: </label>\r\n        <input formControlName=\"age\" type=\"number\" name=\"age\" id=\"age\" min=\"18\">\r\n        <div *ngIf=\"form.get('age').touched && form.get('age').invalid\" class=\"alert alert-danger\"\r\n             required=\"\"> \"Nie wprowadzono wieku\" </div>\r\n        <div class=\"form-group\">\r\n          <label>Stan cywilny: </label>\r\n          <select>\r\n            <option>Panna/Kawaler</option>\r\n            <option>Mężatka/Żonaty</option>\r\n            <option>Wdowa/Wdowiec</option>\r\n          </select>\r\n        </div>\r\n        <input type=\"reset\" value=\"Wyczyść\">\r\n        <input type=\"submit\" value=\"Wyślij\">\r\n      </div>\r\n    </fieldset>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z]+")]),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z]+")]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            age: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<p class=\"col-sm-9\">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum\n  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul{\r\n  background-color: lightcoral;\r\n  width: 100%;\r\n}\r\n\r\nli {\r\n  color: white;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li><a class=\"nav-link\" [routerLink]=\"['home']\">\n        <img src=\"https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg\" width=\"25\" height=\"25\"></a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['blog']\">Blog</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['quiz']\">Quiz</a></li>\n      <li class=\"nav-item\"><a class=\"nav-link\" [routerLink]=\"['contact']\">Kontakt</a></li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"quiz-content text-center\">\r\n  <div class=\"progress\">\r\n    <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\"\r\n         style=\"width:10%\">\r\n    </div>\r\n  </div>\r\n\r\n  <form>\r\n    <h2 id=\"question\" align=\"center\">pytanie</h2>\r\n    <div class=\"form-group\">\r\n      <button id=\"answerA\" align=\"center\" onclick=\"chooseAnswer(id)\" type=\"button\" class=\"btn btn-default\">\r\n        Odpowiedź\r\n        pierwsza\r\n      </button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button id=\"answerB\" align=\"center\" onclick=\"chooseAnswer(id)\" type=\"button\" class=\"btn btn-default\">\r\n        Odpowiedź\r\n        druga\r\n      </button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button id=\"answerC\" align=\"center\" onclick=\"chooseAnswer(id)\" type=\"button\" class=\"btn btn-default\">\r\n        Odpowiedź\r\n        trzecia\r\n      </button>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <button id=\"answerD\" align=\"center\" onclick=\"chooseAnswer(id)\" type=\"button\" class=\"btn btn-default\">\r\n        Odpowiedź\r\n        trzecia\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div class=\"result-content text-center\" style=\"display: none\">\r\n  <form>\r\n    <div style=\"display: inline-block\">\r\n      <h2>Twój wynik: </h2>\r\n      <h2>Średni wynik: </h2>\r\n    </div>\r\n\r\n    <div style=\"display: inline-block\">\r\n      <h2 id=\"result-p\">asd</h2>\r\n      <h2 id=\"avereageresult-p\">asd2</h2>\r\n    </div>\r\n  </form>\r\n  <button id=\"resetbtn\" align=\"center\" onclick=\"resetQuiz()\" type=\"button\" class=\"btn btn-default\">Zagraj jeszcze\r\n    raz!\r\n  </button>\r\n\r\n</div>\r\n\r\n<script>\r\n  var list = [];\r\n  var points = 0;\r\n  var count = 0;\r\n  var questionList = [\r\n    {\r\n      \"question\": \"P1\",\r\n      \"answerA\": \"A1\",\r\n      \"answerB\": \"B1\",\r\n      \"answerC\": \"C1\",\r\n      \"answerD\": \"D1\",\r\n      \"correctAnswer\": \"A1\"\r\n    },\r\n    {\r\n      \"question\": \"P2\",\r\n      \"answerA\": \"A2\",\r\n      \"answerB\": \"B2\",\r\n      \"answerC\": \"C2\",\r\n      \"answerD\": \"D2\",\r\n      \"correctAnswer\": \"A2\"\r\n    }, {\r\n      \"question\": \"P3\",\r\n      \"answerA\": \"A3\",\r\n      \"answerB\": \"B3\",\r\n      \"answerC\": \"C3\",\r\n      \"answerD\": \"D3\",\r\n      \"correctAnswer\": \"A3\"\r\n    }, {\r\n      \"question\": \"P4\",\r\n      \"answerA\": \"A4\",\r\n      \"answerB\": \"B4\",\r\n      \"answerC\": \"C4\",\r\n      \"answerD\": \"D4\",\r\n      \"correctAnswer\": \"A4\"\r\n    }, {\r\n      \"question\": \"P5\",\r\n      \"answerA\": \"A5\",\r\n      \"answerB\": \"B5\",\r\n      \"answerC\": \"C5\",\r\n      \"answerD\": \"D5\",\r\n      \"correctAnswer\": \"A5\"\r\n    }, {\r\n      \"question\": \"P6\",\r\n      \"answerA\": \"A6\",\r\n      \"answerB\": \"B6\",\r\n      \"answerC\": \"C6\",\r\n      \"answerD\": \"D6\",\r\n      \"correctAnswer\": \"A6\"\r\n    }, {\r\n      \"question\": \"P7\",\r\n      \"answerA\": \"A7\",\r\n      \"answerB\": \"B7\",\r\n      \"answerC\": \"C7\",\r\n      \"answerD\": \"D7\",\r\n      \"correctAnswer\": \"A7\"\r\n    }, {\r\n      \"question\": \"P8\",\r\n      \"answerA\": \"A8\",\r\n      \"answerB\": \"B8\",\r\n      \"answerC\": \"C8\",\r\n      \"answerD\": \"D8\",\r\n      \"correctAnswer\": \"A8\"\r\n    }, {\r\n      \"question\": \"P9\",\r\n      \"answerA\": \"A9\",\r\n      \"answerB\": \"B9\",\r\n      \"answerC\": \"C9\",\r\n      \"answerD\": \"D9\",\r\n      \"correctAnswer\": \"A9\"\r\n    }, {\r\n      \"question\": \"P10\",\r\n      \"answerA\": \"A10\",\r\n      \"answerB\": \"B10\",\r\n      \"answerC\": \"C10\",\r\n      \"answerD\": \"D10\",\r\n      \"correctAnswer\": \"A10\"\r\n    },\r\n  ];\r\n  var answerAHandler = document.getElementById(\"answerA\");\r\n  var answerBHandler = document.getElementById(\"answerB\");\r\n  var answerCHandler = document.getElementById(\"answerC\");\r\n  var answerDHandler = document.getElementById(\"answerD\");\r\n  var questionHandler = document.getElementById(\"question\");\r\n  var progressBar = document.querySelector(\".progress-bar\");\r\n  var quizContent = document.querySelector(\".quiz-content\");\r\n  var resultContent = document.querySelector(\".result-content\");\r\n  var result = document.getElementById(\"result-p\");\r\n  var averageResult = document.getElementById(\"avereageresult-p\");\r\n  if (localStorage.length !== 0) {\r\n    JSON.parse(localStorage.getItem('results')).forEach(item => {\r\n      list.push(item);\r\n    });\r\n  }\r\n  setAnswerAndQuestion();\r\n  function setAnswerAndQuestion() {\r\n    answerAHandler.textContent = questionList[count].answerA;\r\n    answerBHandler.textContent = questionList[count].answerB;\r\n    answerCHandler.textContent = questionList[count].answerC;\r\n    answerDHandler.textContent = questionList[count].answerD;\r\n    questionHandler.textContent = questionList[count].question;\r\n  }\r\n  function chooseAnswer(id) {\r\n    if (document.getElementById(id).textContent === questionList[count].correctAnswer) {\r\n      points++;\r\n    }\r\n    if (count === 9) {\r\n      list.push(points);\r\n      localStorage.setItem(\"results\", JSON.stringify(list));\r\n      result.textContent = this.points;\r\n      let resultValue = 0;\r\n      let resultList = JSON.parse(localStorage.getItem('results'));\r\n      resultList.forEach(item => {\r\n        resultValue += item;\r\n      })\r\n      averageResult.textContent = resultValue / resultList.length;\r\n      quizContent.style.display = \"none\";\r\n      resultContent.style.display = \"block\"\r\n    }\r\n    else {\r\n      count++;\r\n      progressBar.style.width = (count + 1) * 10 + \"%\";\r\n      setAnswerAndQuestion();\r\n    }\r\n  }\r\n  function resetQuiz() {\r\n    quizContent.style.display = \"block\";\r\n    resultContent.style.display = \"none\";\r\n    count = 0;\r\n    points = 0;\r\n    progressBar.style.width = (count + 1) * 10 + \"%\";\r\n    setAnswerAndQuestion();\r\n  }\r\n</script>\r\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"filterText\" (ngModelChange)=\"sendFilter($event)\" placeholder=\"Wpisz nazwę...\" id=\"search\" type=\"search\" class=\"form-control\">\n"

/***/ }),

/***/ "./src/app/components/search-bar/search-bar.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/search-bar/search-bar.component.ts ***!
  \***************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent() {
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    SearchBarComponent.prototype.sendFilter = function () {
        this.name.emit(this.filterText);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "name", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/components/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/components/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this.textSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.imageSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default message');
        this.currentText = this.textSource.asObservable();
        this.currentImage = this.imageSource.asObservable();
    }
    DataService.prototype.changeText = function (text) {
        this.textSource.next(text);
    };
    DataService.prototype.changeImage = function (image) {
        this.imageSource.next(image);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/directives/text-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/text-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: TextFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatDirective", function() { return TextFormatDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextFormatDirective = /** @class */ (function () {
    function TextFormatDirective(el) {
        this.el = el;
    }
    TextFormatDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextFormatDirective.prototype, "onBlur", null);
    TextFormatDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appTextFormat]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TextFormatDirective);
    return TextFormatDirective;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterText) {
        if (!value) {
            return [];
        }
        if (!filterText) {
            return value;
        }
        filterText = filterText.toLowerCase();
        return value.filter(function (val) {
            return val.title.toLowerCase().includes(filterText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataServiceService", function() { return DataServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataServiceService = /** @class */ (function () {
    function DataServiceService(http) {
        this.http = http;
        this.url = "https://jsonplaceholder.typicode.com";
    }
    DataServiceService.prototype.get = function (id) {
        return this.http.get(this.url + '/photos/' + id)
            .pipe();
    };
    DataServiceService.prototype.getAll = function () {
        return this.http.get(this.url + '/photos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (x) { return x.slice(0, 20); }));
    };
    DataServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataServiceService);
    return DataServiceService;
}());



/***/ }),

/***/ "./src/app/summary.pipe.ts":
/*!*********************************!*\
  !*** ./src/app/summary.pipe.ts ***!
  \*********************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        return value.substr(0, limit) + '...';
    };
    SummaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Technologie\TAI_LAB4\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map