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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"colorlib-page\">\n  <div class=\"container-wrap\">\n  <a href=\"#\" class=\"js-colorlib-nav-toggle colorlib-nav-toggle\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\"><i></i></a>\n  <aside id=\"colorlib-aside\" role=\"complementary\" class=\"border js-fullheight\">\n    <div class=\"text-center\">\n      <div class=\"author-img\" style=\"background-image: url(/assets/images/about.jpg);\"></div>\n      <h1 id=\"colorlib-logo\"><a href=\"/index.html\">Lewis Florez Renza </a></h1>\n      <span class=\"position\"><a href=\"#\">Software Developer</a> in Colombia</span>\n    </div>\n    <nav id=\"colorlib-main-menu\" role=\"navigation\" class=\"navbar\">\n      <div id=\"navbar\" class=\"collapse\">\n        <ul>\n          <li class=\"active\"><a href=\"#\" data-nav-section=\"home\">Home</a></li>\n          <li><a href=\"#\" data-nav-section=\"about\">About</a></li>\n          <li><a href=\"#\" data-nav-section=\"services\">Services</a></li>\n          <li><a href=\"#\" data-nav-section=\"skills\">Skills</a></li>\n          <li><a href=\"#\" data-nav-section=\"education\">Education</a></li>\n          <li><a href=\"#\" data-nav-section=\"experience\">Experience</a></li>\n          <li><a href=\"#\" data-nav-section=\"work\">Work</a></li>\n          <li><a href=\"#\" data-nav-section=\"contact\">Contact</a></li>\n        </ul>\n      </div>\n    </nav>\n\n    <div class=\"colorlib-footer\">      \n      <ul>\n        <li><a href=\"https://www.facebook.com/lewis.florezr\" target=\"_blank\"><i class=\"icon-facebook2\"></i></a></li>\n        <li><a href=\"https://twitter.com/gasper_lf\" target=\"_blank\"><i class=\"icon-twitter2\"></i></a></li>\n        <li><a href=\"https://www.instagram.com/lewisflorezr/\" target=\"_blank\"><i class=\"icon-instagram\"></i></a></li>\n        <li><a href=\"https://www.linkedin.com/in/lewis-florez-renza-40858664/\" target=\"_blank\"><i class=\"icon-linkedin2\"></i></a></li>\n      </ul>\n    </div>\n\n  </aside>\n\n  <div id=\"colorlib-main\">\n    \n    <app-home></app-home>\n\n\n    <section class=\"colorlib-about\" data-section=\"about\">\n      <div class=\"colorlib-narrow-content\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n              <div class=\"col-md-12\">\n                <div class=\"about-desc\">\n                  <span class=\"heading-meta\">About Me</span>\n                  <h2 class=\"colorlib-heading\">Who Am I?</h2>\n                  <p>Hi, I'm<strong> Lewis Florez Renza</strong>\n                    I’m passionate and enthusiast for new technologies and building high-performance data structures, algorithms and systems, I have almost six years of experience as software developer under java and other technologies, and Also I have competence in development and implementation solutions using design patterns. I have good relations with colleagues and customers, ability to listen and to explain clearly. Patience with customers and superiors, responsible, honest and I enjoy to work like as single as a team. I also have solid experience with OO design and building web services. I’m always willing to learn new skills. \n                  </p>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n                <div class=\"services color-1\">\n                  <span class=\"icon2\"><i class=\"icon-bulb\"></i></span>\n                  <h3>Graphic Design</h3>\n                </div>\n              </div>\n              <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInRight\">\n                <div class=\"services color-2\">\n                  <span class=\"icon2\"><i class=\"icon-globe-outline\"></i></span>\n                  <h3>Web Design</h3>\n                </div>\n              </div>\n              <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInTop\">\n                <div class=\"services color-3\">\n                  <span class=\"icon2\"><i class=\"icon-data\"></i></span>\n                  <h3>Software</h3>\n                </div>\n              </div>\n              <div class=\"col-md-3 animate-box\" data-animate-effect=\"fadeInBottom\">\n                <div class=\"services color-4\">\n                  <span class=\"icon2\"><i class=\"icon-phone3\"></i></span>\n                  <h3>Application</h3>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n                <div class=\"hire\">\n                  <h2>I am happy to know you <br>that 300+ projects done sucessfully!</h2>\n                  <a href=\"#\" class=\"btn-hire\">Hire me</a>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n\n    \n    <section class=\"colorlib-services\" data-section=\"services\">\n      <div class=\"colorlib-narrow-content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <span class=\"heading-meta\">What I do?</span>\n            <h2 class=\"colorlib-heading\">Here are some of my expertise</h2>\n          </div>\n        </div>\n        <div class=\"row row-pt-md\">\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-1\">\n              <span class=\"icon\">\n                <i class=\"icon-bulb\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Innovative Ideas</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-2\">\n              <span class=\"icon\">\n                <i class=\"icon-data\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Software</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-3\">\n              <span class=\"icon\">\n                <i class=\"icon-phone3\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Application</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-4\">\n              <span class=\"icon\">\n                <i class=\"icon-layers2\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Graphic Design</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-5\">\n              <span class=\"icon\">\n                <i class=\"icon-data\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Software</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 text-center animate-box\">\n            <div class=\"services color-6\">\n              <span class=\"icon\">\n                <i class=\"icon-phone3\"></i>\n              </span>\n              <div class=\"desc\">\n                <h3>Application</h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    \n    <div id=\"colorlib-counter\" class=\"colorlib-counters\" style=\"background-image: url(/assets/images/cover_bg_1.jpg);\" data-stellar-background-ratio=\"0.5\">\n      <div class=\"overlay\"></div>\n      <div class=\"colorlib-narrow-content\">\n        <div class=\"row\">\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-3 text-center animate-box\">\n            <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"309\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n            <span class=\"colorlib-counter-label\">Cups of coffee</span>\n          </div>\n          <div class=\"col-md-3 text-center animate-box\">\n            <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"356\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n            <span class=\"colorlib-counter-label\">Projects</span>\n          </div>\n          <div class=\"col-md-3 text-center animate-box\">\n            <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"30\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n            <span class=\"colorlib-counter-label\">Clients</span>\n          </div>\n          <div class=\"col-md-3 text-center animate-box\">\n            <span class=\"colorlib-counter js-counter\" data-from=\"0\" data-to=\"10\" data-speed=\"5000\" data-refresh-interval=\"50\"></span>\n            <span class=\"colorlib-counter-label\">Partners</span>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <app-skills></app-skills>\n    \n    <app-education></app-education>\n\n    <app-experience></app-experience>\n\n    <app-work></app-work>\n\n    <section class=\"colorlib-blog\" data-section=\"blog\">\n      <div class=\"colorlib-narrow-content\">\n        <div class=\"row\">\n          <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <span class=\"heading-meta\">Read</span>\n            <h2 class=\"colorlib-heading\">Recent Blog</h2>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"blog-entry\">\n              <a href=\"blog.html\" class=\"blog-img\"><img src=\"/assets/images/blog-1.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n              <div class=\"desc\">\n                <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class=\"icon-bubble3\"></i> 4</small></span>\n                <h3><a href=\"blog.html\">Renovating National Gallery</a></h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInRight\">\n            <div class=\"blog-entry\">\n              <a href=\"blog.html\" class=\"blog-img\"><img src=\"/assets/images/blog-2.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n              <div class=\"desc\">\n                <span><small>April 14, 2018 </small> | <small> Web Design </small> | <small> <i class=\"icon-bubble3\"></i> 4</small></span>\n                <h3><a href=\"blog.html\">Wordpress for a Beginner</a></h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-4 col-sm-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"blog-entry\">\n              <a href=\"blog.html\" class=\"blog-img\"><img src=\"/assets/images/blog-3.jpg\" class=\"img-responsive\" alt=\"HTML5 Bootstrap Template by colorlib.com\"></a>\n              <div class=\"desc\">\n                <span><small>April 14, 2018 </small> | <small> Inspiration </small> | <small> <i class=\"icon-bubble3\"></i> 4</small></span>\n                <h3><a href=\"blog.html\">Make website from scratch</a></h3>\n                <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12 animate-box\">\n            <p><a href=\"#\" class=\"btn btn-primary btn-lg btn-load-more\">Load more <i class=\"icon-reload\"></i></a></p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  <app-contact></app-contact>    \n\n  </div><!-- end:colorlib-main -->\n</div><!-- end:container-wrap -->\n</div><!-- end:colorlib-page -->\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'my-cv';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_shared_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/shared/components/skills/skills.component */ "./src/app/core/shared/components/skills/skills.component.ts");
/* harmony import */ var _core_shared_components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/shared/components/experience/experience.component */ "./src/app/core/shared/components/experience/experience.component.ts");
/* harmony import */ var _core_shared_components_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/shared/components/education/education.component */ "./src/app/core/shared/components/education/education.component.ts");
/* harmony import */ var _core_shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/shared/components/home/home.component */ "./src/app/core/shared/components/home/home.component.ts");
/* harmony import */ var _core_shared_components_work_work_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/shared/components/work/work.component */ "./src/app/core/shared/components/work/work.component.ts");
/* harmony import */ var _core_shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/shared/components/contact/contact.component */ "./src/app/core/shared/components/contact/contact.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _core_shared_components_skills_skills_component__WEBPACK_IMPORTED_MODULE_6__["SkillsComponent"],
                _core_shared_components_experience_experience_component__WEBPACK_IMPORTED_MODULE_7__["ExperienceComponent"],
                _core_shared_components_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"],
                _core_shared_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _core_shared_components_work_work_component__WEBPACK_IMPORTED_MODULE_10__["WorkComponent"],
                _core_shared_components_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/services/education.service.ts":
/*!****************************************************!*\
  !*** ./src/app/core/services/education.service.ts ***!
  \****************************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var EducationService = /** @class */ (function () {
    function EducationService(http) {
        this.http = http;
    }
    EducationService.prototype.getJson = function () {
        return this.http.get("./assets/json/educations.json");
    };
    EducationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EducationService);
    return EducationService;
}());



/***/ }),

/***/ "./src/app/core/services/experience.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/services/experience.service.ts ***!
  \*****************************************************/
/*! exports provided: ExperienceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceService", function() { return ExperienceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ExperienceService = /** @class */ (function () {
    function ExperienceService(http) {
        this.http = http;
    }
    ExperienceService.prototype.getJSON = function () {
        return this.http.get("./assets/json/experiences.json");
    };
    ExperienceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ExperienceService);
    return ExperienceService;
}());



/***/ }),

/***/ "./src/app/core/services/skill.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/skill.service.ts ***!
  \************************************************/
/*! exports provided: SkillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillService", function() { return SkillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SkillService = /** @class */ (function () {
    function SkillService(http) {
        this.http = http;
    }
    SkillService.prototype.getJSON = function () {
        return this.http.get("./assets/json/skills.json");
    };
    SkillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SkillService);
    return SkillService;
}());



/***/ }),

/***/ "./src/app/core/shared/components/contact/contact.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/core/shared/components/contact/contact.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/shared/components/contact/contact.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/core/shared/components/contact/contact.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-contact\" data-section=\"contact\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n          <span class=\"heading-meta\">Get in Touch</span>\n          <h2 class=\"colorlib-heading\">Contact</h2>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-5\">\n          <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"colorlib-icon\">\n              <i class=\"icon-skype\"></i>\n            </div>\n            <div class=\"colorlib-text\">\n              <p><a href=\"#\">gasper_lf@hotmail.com</a></p>\n            </div>\n          </div>\n\n          <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"colorlib-icon\">\n              <i class=\"icon-map\"></i>\n            </div>\n            <div class=\"colorlib-text\">\n              <p>Medellín, Colombia</p>\n            </div>\n          </div>\n\n          <div class=\"colorlib-feature colorlib-feature-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n            <div class=\"colorlib-icon\">\n              <i class=\"icon-phone\"></i>\n            </div>\n            <div class=\"colorlib-text\">\n              <p><a href=\"tel://\">+57 3202333779</a></p>\n            </div>\n          </div>\n        </div>\n        \n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/core/shared/components/contact/contact.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/core/shared/components/contact/contact.component.ts ***!
  \*********************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/core/shared/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/core/shared/components/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/components/education/education.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/core/shared/components/education/education.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvZWR1Y2F0aW9uL2VkdWNhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/shared/components/education/education.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/core/shared/components/education/education.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-education\" data-section=\"education\">\n<div class=\"colorlib-narrow-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n      <span class=\"heading-meta\">Education</span>\n      <h2 class=\"colorlib-heading animate-box\">Education</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n      <div class=\"fancy-collapse-panel\">\n        <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingOne\">\n                  <h4 class=\"panel-title\">\n                      <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                        Master Degree Graphic Design\n                      </a>\n                  </h4>\n              </div>\n              <div id=\"collapseOne\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                   <div class=\"panel-body\">\n                      <div class=\"row\">\n                      <div class=\"col-md-6\">\n                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>\n                      </div>\n                      <div class=\"col-md-6\">\n                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n                      </div>\n                    </div>\n                   </div>\n              </div>\n          </div>\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingTwo\">\n                  <h4 class=\"panel-title\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">Bachelor Degree of Computer Science\n                      </a>\n                  </h4>\n              </div>\n              <div id=\"collapseTwo\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                  <div class=\"panel-body\">\n                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\n                  <ul>\n                    <li>Separated they live in Bookmarksgrove right</li>\n                    <li>Separated they live in Bookmarksgrove right</li>\n                  </ul>\n                  </div>\n              </div>\n          </div>\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingThree\">\n                  <h4 class=\"panel-title\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">Diploma in Information Technology\n                      </a>\n                  </h4>\n              </div>\n              <div id=\"collapseThree\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                  <div class=\"panel-body\">\n                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\t\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingFour\">\n                  <h4 class=\"panel-title\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFour\" aria-expanded=\"false\" aria-controls=\"collapseFour\">Diploma in Information Technology\n                      </a>\n                  </h4>\n              </div>\n              <div id=\"collapseFour\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFour\">\n                  <div class=\"panel-body\">\n                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\t\n                  </div>\n              </div>\n          </div>\n\n          <div class=\"panel panel-default\">\n              <div class=\"panel-heading\" role=\"tab\" id=\"headingFive\">\n                  <h4 class=\"panel-title\">\n                      <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFive\" aria-expanded=\"false\" aria-controls=\"collapseFive\">High School Secondary Education\n                      </a>\n                  </h4>\n              </div>\n              <div id=\"collapseFive\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingFive\">\n                  <div class=\"panel-body\">\n                      <p>Far far away, behind the word <strong>mountains</strong>, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>\t\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</section>"

/***/ }),

/***/ "./src/app/core/shared/components/education/education.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/core/shared/components/education/education.component.ts ***!
  \*************************************************************************/
/*! exports provided: EducationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationComponent", function() { return EducationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_education_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/education.service */ "./src/app/core/services/education.service.ts");



var EducationComponent = /** @class */ (function () {
    function EducationComponent(educationService) {
        this.educationService = educationService;
    }
    EducationComponent.prototype.ngOnInit = function () {
        this.getEducations();
    };
    EducationComponent.prototype.getEducations = function () {
        var _this = this;
        this.educationService.getJson().subscribe(function (data) { return _this.educations = data; });
    };
    EducationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-education',
            template: __webpack_require__(/*! ./education.component.html */ "./src/app/core/shared/components/education/education.component.html"),
            styles: [__webpack_require__(/*! ./education.component.css */ "./src/app/core/shared/components/education/education.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_education_service__WEBPACK_IMPORTED_MODULE_2__["EducationService"]])
    ], EducationComponent);
    return EducationComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/components/experience/experience.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/core/shared/components/experience/experience.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/shared/components/experience/experience.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/core/shared/components/experience/experience.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-experience\" data-section=\"experience\">\n<div class=\"colorlib-narrow-content\">\n   <div class=\"row\">\n     <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n       <span class=\"heading-meta\">Experience</span>\n       <h2 class=\"colorlib-heading animate-box\">Work Experience</h2>\n     </div>\n   </div>\n   <div class=\"row\">\n     <div class=\"col-md-12\">\n          <div class=\"timeline-centered\">               \n            <article *ngFor=\"let experience of experiences\" class=\"timeline-entry animate-box\" attr.data-animate-effect=\"{{experience.effect}}\">\n               <div class=\"timeline-entry-inner\">\n                  <div class=\"{{experience.className}}\">\n                     <i class=\"{{experience.iconClass}}\"></i>\n                  </div>\n                  <div class=\"timeline-label\">\n                     <h2><a href=\"#\">{{experience.title}} </a> <span>{{experience.startYear}}-{{experience.endYear}}</span></h2>\n                     <p style=\" text-align: justify; text-justify: inter-word;\">{{experience.description}}</p>\n                  </div>\n               </div>\n             </article>            \n            <article class=\"timeline-entry begin animate-box\" data-animate-effect=\"fadeInBottom\">\n               <div class=\"timeline-entry-inner\">\n                  <div class=\"timeline-icon color-none\">\n                  </div>\n               </div>\n            </article>\n         </div>\n      </div>\n    </div>\n </div>\n</section>"

/***/ }),

/***/ "./src/app/core/shared/components/experience/experience.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/core/shared/components/experience/experience.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExperienceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function() { return ExperienceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_experience_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../services/experience.service */ "./src/app/core/services/experience.service.ts");



var ExperienceComponent = /** @class */ (function () {
    function ExperienceComponent(experienceService) {
        this.experienceService = experienceService;
    }
    ExperienceComponent.prototype.ngOnInit = function () {
        this.getExperiences();
    };
    ExperienceComponent.prototype.getExperiences = function () {
        var _this = this;
        this.experienceService.getJSON().subscribe(function (data) { return _this.experiences = data; });
    };
    ExperienceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-experience',
            template: __webpack_require__(/*! ./experience.component.html */ "./src/app/core/shared/components/experience/experience.component.html"),
            styles: [__webpack_require__(/*! ./experience.component.css */ "./src/app/core/shared/components/experience/experience.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_experience_service__WEBPACK_IMPORTED_MODULE_2__["ExperienceService"]])
    ], ExperienceComponent);
    return ExperienceComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/components/home/home.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/shared/components/home/home.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/shared/components/home/home.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/shared/components/home/home.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"colorlib-hero\" class=\"js-fullheight\" data-section=\"home\">\n<div class=\"flexslider js-fullheight\">\n    <ul class=\"slides\">\n       <li style=\"background-image: url(/assets/images/img_bg_1.jpg);\">\n         <div class=\"overlay\"></div>\n         <div class=\"container-fluid\">\n           <div class=\"row\">\n             <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text\">\n               <div class=\"slider-text-inner js-fullheight\">\n                 <div class=\"desc\">\n                   <h1>Hi! <br>I'm Lewis Florez Renza</h1>\n                   <h2>I invite to you to see my code repo</h2>\n                  <p><a class=\"btn btn-primary btn-learn\" href=\"https://github.com/gasperlf\" target=\"_blank\">Repository <i class=\"icon-database4\"></i></a></p>\n                </div>\n               </div>\n             </div>\n           </div>\n         </div>\n       </li>\n       <li style=\"background-image: url(/assets/images/img_home_back_2.jpg);\">\n         <div class=\"overlay\"></div>\n         <div class=\"container-fluid\">\n           <div class=\"row\">\n             <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text\">\n               <div class=\"slider-text-inner\">\n                 <div class=\"desc\">\n                   <h1 style=\"color:white\">I am <br>a Systems Engineer</h1>\n                  <h2 style=\"color:white\">I’m <strong>passionate and enthusiast</strong></h2>\n                  <p><a class=\"btn btn-primary btn-learn\">View Portfolio <i class=\"icon-briefcase3\"></i></a></p>\n                </div>\n               </div>\n             </div>\n           </div>\n         </div>\n       </li>\n       <li style=\"background-image: url(/assets/images/img_home_back_3.jpg);\">\n        <div class=\"overlay\"></div>\n        <div class=\"container-fluid\">\n          <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text\">\n              <div class=\"slider-text-inner\">\n                <div class=\"desc\">\n                  <h1>I am <br>traveler and adventurer</h1>\n                 <h2>I’m <strong>passionate and enthusiast</strong></h2>\n                 <p><a class=\"btn btn-primary btn-learn\">View Portfolio <i class=\"icon-briefcase3\"></i></a></p>\n               </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </li>\n      </ul>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/core/shared/components/home/home.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/shared/components/home/home.component.ts ***!
  \***************************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/core/shared/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/core/shared/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/components/skills/skills.component.css":
/*!********************************************************************!*\
  !*** ./src/app/core/shared/components/skills/skills.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvc2tpbGxzL3NraWxscy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/core/shared/components/skills/skills.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/core/shared/components/skills/skills.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-skills\" data-section=\"skills\">            \n<div class=\"colorlib-narrow-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n      <span class=\"heading-meta\">My Specialty</span>\n      <h2 class=\"colorlib-heading animate-box\">My Skills</h2>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-12 animate-box\" data-animate-effect=\"fadeInLeft\">\n      <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>\n    </div>\n    \n    <div *ngFor=\"let skill of skills\"  class=\"col-md-6 animate-box\" attr.data-animate-effect=\"{{skill.effect}}\">\n       <div class=\"progress-wrap\">\n         <h3> {{skill.name}}</h3>\n         <div class=\"progress\">\n            <div class=\"{{skill.className}}\" role=\"progressbar\"  attr.aria-valuenow=\"{{skill.percentage}}\"\n             aria-valuemin=\"0\" aria-valuemax=\"100\" [style]=\"sanitize(skill.styleName)\">\n             <span>{{skill.percentage}}%</span>\n             </div>\n         </div>\n       </div>\n    </div>  \n    \n  </div>\n</div>\n</section>\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/core/shared/components/skills/skills.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/core/shared/components/skills/skills.component.ts ***!
  \*******************************************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_services_skill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/skill.service */ "./src/app/core/services/skill.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skillService, sanitizer) {
        this.skillService = skillService;
        this.sanitizer = sanitizer;
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.getSkills();
    };
    SkillsComponent.prototype.getSkills = function () {
        var _this = this;
        this.skillService.getJSON().subscribe(function (data) { return _this.skills = data; });
    };
    SkillsComponent.prototype.sanitize = function (style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    };
    SkillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! ./skills.component.html */ "./src/app/core/shared/components/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.css */ "./src/app/core/shared/components/skills/skills.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_services_skill_service__WEBPACK_IMPORTED_MODULE_2__["SkillService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/core/shared/components/work/work.component.css":
/*!****************************************************************!*\
  !*** ./src/app/core/shared/components/work/work.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvc2hhcmVkL2NvbXBvbmVudHMvd29yay93b3JrLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/core/shared/components/work/work.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/core/shared/components/work/work.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"colorlib-work\" data-section=\"work\">\n    <div class=\"colorlib-narrow-content\">\n      <div class=\"row\">\n        <div class=\"col-md-6 col-md-offset-3 col-md-pull-3 animate-box\" data-animate-effect=\"fadeInLeft\">\n          <span class=\"heading-meta\">My Work</span>\n          <h2 class=\"colorlib-heading animate-box\">Recent Work</h2>\n        </div>\n      </div>\n      <div class=\"row row-bottom-padded-sm animate-box\" data-animate-effect=\"fadeInLeft\">\n        <div class=\"col-md-12\">\n          <p class=\"work-menu\"><span><a href=\"#\" class=\"active\">Graphic Design</a></span> <span><a href=\"#\">Web Design</a></span> <span><a href=\"#\">Software</a></span> <span><a href=\"#\">Apps</a></span></p>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-1.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 01</a></h3>\n                <span>Website</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-2.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 02</a></h3>\n                <span>Animation</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInTop\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-3.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 03</a></h3>\n                <span>Illustration</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInBottom\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-4.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 04</a></h3>\n                <span>Application</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInLeft\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-5.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 05</a></h3>\n                <span>Graphic, Logo</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-6 animate-box\" data-animate-effect=\"fadeInRight\">\n          <div class=\"project\" style=\"background-image: url(/assets/images/img-6.jpg);\">\n            <div class=\"desc\">\n              <div class=\"con\">\n                <h3><a href=\"work.html\">Work 06</a></h3>\n                <span>Web Design</span>\n                <p class=\"icon\">\n                  <span><a href=\"#\"><i class=\"icon-share3\"></i></a></span>\n                  <span><a href=\"#\"><i class=\"icon-eye\"></i> 100</a></span>\n                  <span><a href=\"#\"><i class=\"icon-heart\"></i> 49</a></span>\n                </p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12 animate-box\">\n          <p><a href=\"#\" class=\"btn btn-primary btn-lg btn-load-more\">Load more <i class=\"icon-reload\"></i></a></p>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/core/shared/components/work/work.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/shared/components/work/work.component.ts ***!
  \***************************************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WorkComponent = /** @class */ (function () {
    function WorkComponent() {
    }
    WorkComponent.prototype.ngOnInit = function () {
    };
    WorkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/core/shared/components/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/core/shared/components/work/work.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WorkComponent);
    return WorkComponent;
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

module.exports = __webpack_require__(/*! C:\angular\my-cv\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map