(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jacop\Desktop\jack-site\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @amcharts/amcharts4/core */ "cclQ");
/* harmony import */ var _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @amcharts/amcharts4/charts */ "xJfa");
/* harmony import */ var _amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @amcharts/amcharts4/themes/animated */ "WlQZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/angular */ "UMfn");








const _c0 = ["typewriter"];
const _c1 = ["titletype"];
const _c2 = ["projectsIframe"];
function AppComponent_102_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r4.dateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r4.title, " ");
} }
function AppComponent_102_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_102_ng_template_0_Template, 6, 2, "ng-template", 44);
} }
const _c3 = function (a0, a1) { return { "color": a0, "cursor": a1 }; };
function AppComponent_p_125_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_125_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.scrollToPage(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c3, item_r7 === "|" ? "white" : "#6ba575", item_r7 === "|" ? "" : "pointer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7);
} }
const _c4 = function (a0) { return { "width": a0 }; };
// install Swiper modules
//SwiperCore.use([Pagination]);
class AppComponent {
    constructor() {
        this.config = {
            slidesPerView: 4,
            freeMode: true,
            //loop: true,
            speed: 1000,
            freeModeSticky: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false
            },
            breakpoints: {
                // when window width is <= 320px
                320: {
                    slidesPerView: 1,
                },
                // when window width is <= 480px
                480: {
                    slidesPerView: 2,
                },
                // when window width is <= 640px
                840: {
                    slidesPerView: 3,
                }
            }
        };
        this.ParticlesConfig = {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#000000"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.14204657549380909,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#000000",
                    "opacity": 0.12626362266116362,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "repulse"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 400,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        };
        this.title = 'jack-site';
        this.Scrolltutorialtext = "Scroll to explore my being";
        this.showVerticalLine = false;
        this.navbarItems = [
            "HOME", "|", "KNOWLEDGE", "|", "PROJECTS", "|", "ABOUT ME"
        ];
        // values to keep track of the number of letters typed, which quote to use. etc. Don't change these values.
        this.i = 0;
        this.a = 0;
        this.isBackspacing = false;
        this.isParagraph = false;
        // Typerwrite text content.  
        this.textArray = [
            "Jacopo",
            "Guitarist",
            "Handyman",
            "Friendly",
            "Artist",
            "Minimalist",
            "Creative",
            "Playful",
            "Thinker",
            "Hat lover",
        ];
        this.timeline = [
            { dateLabel: 'October 2000', title: String.fromCodePoint(0x2764, 0xFE0F) + 'My birth' + String.fromCodePoint(0x2764, 0xFE0F) },
            { dateLabel: 'September 2014', title: String.fromCodePoint(0x1F527) + 'High school, Mechanics' + String.fromCodePoint(0x1F527) },
            { dateLabel: 'Someday 2015', title: String.fromCodePoint(0x1F5A5, 0xFE0F) + 'Started coding on my own with some basic languages (HTML, CSS)' + String.fromCodePoint(0x1F5A5, 0xFE0F) },
            { dateLabel: 'June 2017', title: String.fromCodePoint(0x1F61E) + 'Worked as trainee in a factory, found out mechanics were not for me' + String.fromCodePoint(0x1F61E) },
            { dateLabel: 'June 2019', title: String.fromCodePoint(0x1F393) + 'Finally graduated' + String.fromCodePoint(0x1F393) },
            { dateLabel: 'October 2019', title: String.fromCodePoint(0x1F4DA) + 'Started studies at Its - Front-End & Ux Developer' + String.fromCodePoint(0x1F4DA) },
            { dateLabel: 'July 2020', title: String.fromCodePoint(0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BC) + 'Started working as trainee in Areakappa, I realize this is what I want to do in my life' + String.fromCodePoint(0x1F9D1, 0x1F3FB, 0x200D, 0x1F4BC) },
            { dateLabel: 'November 2020', title: String.fromCodePoint(0x1F680) + 'Started working on Salamoos, a website created mostly to improve my skills ' + String.fromCodePoint(0x1F680) },
            { dateLabel: 'Today 2021', title: String.fromCodePoint(0x1F604) + "Soon I'll graduate, I worked on multiple Areakappa's projects " + String.fromCodePoint(0x1F604) }
        ];
        // Speed (in milliseconds) of typing.
        this.speedForward = 100; //Typing Speed
        this.speedWait = 1000; // Wait between typing and backspacing
        this.speedBetweenLines = 1000; //Wait between first and second lines
        this.speedBackspace = 25; //Backspace Speed
        this.isSmallScreen = false;
        this.projectSvgFrame = "url(assets/prova_monitor.svg)";
        this.projectsIframeWidth = 0;
        this.projectsIframeHeight = 0;
        this.projectsIframeinnerwidth = 0;
        this.projectsIframeinnerheight = 0;
        let this_ = this;
        window.addEventListener('resize', function (event) {
            this_.resizeProjectsIframe();
        }, true);
    }
    ngAfterViewInit() {
        particlesJS('particles-js', this.ParticlesConfig, function () {
            console.log('callback - particles.js config loaded');
        });
        _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["useTheme"](_amcharts_amcharts4_themes_animated__WEBPACK_IMPORTED_MODULE_3__["default"]);
        let pippo = document.getElementById("chartdiv");
        let chart = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["create"](pippo, _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieChart"]);
        //chart.legend = new am4charts.Legend();
        let title = chart.titles.create();
        title.text = "Knowledge";
        title.fontSize = 25;
        title.tooltipText = "Technical knowledge ordered by how much I know every tools";
        chart.numberFormatter.numberFormat = "#";
        chart.responsive.enabled = true;
        chart.innerRadius = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["percent"](40);
        chart.data = [{
                "country": "Front-End",
                "litres": 40,
                "bottles": 0,
                "color": "#fff"
            }, {
                "country": "Back-end",
                "litres": 20,
                "bottles": 0
            }, {
                "country": "Design",
                "litres": 20,
                "bottles": 0
            }, {
                "country": "Other",
                "litres": 20,
                "bottles": 0
            }, {
                "country": "Angular",
                "litres": 0,
                "bottles": 30
            }, {
                "country": "Ionic",
                "litres": 0,
                "bottles": 10
            }, {
                "country": "MongoDB",
                "litres": 0,
                "bottles": 10
            }, {
                "country": "Socket.io",
                "litres": 0,
                "bottles": 10
            }, {
                "country": "Figma",
                "litres": 0,
                "bottles": 10
            }, {
                "country": "Adobe XD",
                "litres": 0,
                "bottles": 5
            }, {
                "country": "Adobe Photoshop",
                "litres": 0,
                "bottles": 5
            }, {
                "country": "Adobe Premiere Pro",
                "litres": 0,
                "bottles": 3
            }, {
                "country": "Adobe After Effects",
                "litres": 0,
                "bottles": 3
            }, {
                "country": "GitKraken",
                "litres": 0,
                "bottles": 9
            }, {
                "country": "Android Studio",
                "litres": 0,
                "bottles": 5
            }];
        // Add and configure Series
        let pieSeries = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
        pieSeries.colors.list = [
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#DC1C13'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#2EB62C'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#6194C2'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#431C52'),
        ];
        pieSeries.dataFields.value = "litres";
        pieSeries.dataFields.category = "country";
        pieSeries.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;
        pieSeries.labels.template.text = "{category}";
        pieSeries.slices.template.tooltipText = "{category}";
        // Disabling labels and ticks on inner circle
        pieSeries.labels.template.disabled = true;
        pieSeries.ticks.template.disabled = true;
        // Disable sliding out of slices
        pieSeries.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries.slices.template.states.getKey("hover").properties.scale = 0.9;
        // Add second series
        let pieSeries2 = chart.series.push(new _amcharts_amcharts4_charts__WEBPACK_IMPORTED_MODULE_2__["PieSeries"]());
        pieSeries2.colors.list = [
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#EA4C46'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F07470'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#57C84D'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#83D475'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#EA4C46'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#F07470'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#57C84D'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#83D475'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#78B1D5'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#8FCBDE'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#97D8E2'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#623C74'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#825B97'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#A17BB9'),
            _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]('#C09ADB') //11
        ];
        pieSeries2.dataFields.value = "bottles";
        pieSeries2.dataFields.category = "country";
        pieSeries2.slices.template.stroke = _amcharts_amcharts4_core__WEBPACK_IMPORTED_MODULE_1__["color"]("#fff");
        pieSeries2.slices.template.strokeWidth = 2;
        pieSeries2.slices.template.strokeOpacity = 1;
        pieSeries2.slices.template.states.getKey("hover").properties.shiftRadius = 0;
        pieSeries2.slices.template.states.getKey("hover").properties.scale = 1.1;
        // Disabling labels and ticks on inner circle
        pieSeries2.labels.template.disabled = false;
        pieSeries2.ticks.template.disabled = false;
        pieSeries2.labels.template.wrap = true;
        //pieSeries2.labels.template.disabled = false;
        pieSeries2.labels.template.text = "{category}";
        pieSeries2.slices.template.tooltipText = "{category}";
        pieSeries2.ticks.template.events.on("ready", hideSmall);
        pieSeries2.ticks.template.events.on("visibilitychanged", hideSmall);
        pieSeries2.labels.template.events.on("ready", hideSmall);
        pieSeries2.labels.template.events.on("visibilitychanged", hideSmall);
        function hideSmall(ev) {
            if (ev.target.dataItem && (ev.target.dataItem.values.value.percent < 3)) {
                ev.target.hide();
            }
            else {
                ev.target.show();
            }
        }
    }
    ngOnInit() {
        let typewriter = this.setupTypewriter(this.typer);
        typewriter.type();
        //Run the loop
        this.typeWriter("output", this.textArray);
        this.resizeProjectsIframe();
    }
    resizeProjectsIframe() {
        //style="width: 960px; height: 540px;" 
        if (window.innerWidth <= 650) {
            this.isSmallScreen = true;
            this.projectSvgFrame = "url(assets/mobile.svg)";
            //this.projectsIframeWidth = window.innerWidth * 0.8
            //this.projectsIframeHeight = this.projectsIframeWidth / 9 * 16
            this.projectsIframeinnerwidth = 95;
            this.projectsIframeinnerheight = 97;
            this.projectsIframeHeight = window.innerHeight * 0.8;
            this.projectsIframeWidth = this.projectsIframeHeight / 16 * 9;
        }
        else {
            this.isSmallScreen = false;
            this.projectSvgFrame = "url(assets/prova_monitor.svg)";
            this.projectsIframeinnerwidth = 97;
            this.projectsIframeinnerheight = 95;
            this.projectsIframeWidth = window.innerWidth * 0.5;
            this.projectsIframeHeight = this.projectsIframeWidth / 16 * 9;
        }
    }
    setupTypewriter(t) {
        let HTML = t.nativeElement.innerHTML;
        t.nativeElement.innerHTML = "";
        let cursorPosition = 0, tag = "", writingTag = false, tagOpen = false, typeSpeed = 5, tempTypeSpeed = 0;
        let type = function () {
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }
            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                }
                else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                }
                else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 5;
                }
                t.nativeElement.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 5;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.nativeElement.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }
            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }
        };
        return {
            type: type
        };
    }
    scrollToPage(page) {
        let number = 0;
        switch (page) {
            case "HOME":
                number = 0;
                break;
            case "KNOWLEDGE":
                number = 1;
                break;
            case "PROJECTS":
                number = 2;
                break;
            case "ABOUT ME":
                number = 3;
                break;
            default:
                return;
        }
        window.scrollTo(0, window.innerHeight * number);
    }
    typeWriter(id, ar) {
        let element = this.titletype, aString = ar[this.a], eHeader = element.nativeElement.children[0], //Header element
        eParagraph = element.nativeElement.children[1]; //Subheader element
        let this_ = this;
        // Determine if animation should be typing or backspacing
        if (!this.isBackspacing) {
            // If full string hasn't yet been typed out, continue typing
            if (this.i < aString.length) {
                // If character about to be typed is a pipe, switch to second line and continue.
                // Type header or subheader depending on whether pipe has been detected
                if (!this.isParagraph) {
                    eHeader.innerHTML = eHeader.innerHTML + aString.charAt(this.i);
                }
                else {
                    eHeader.eParagraph = eHeader.eParagraph + aString.charAt(this.i);
                }
                this.i++;
                setTimeout(function () { this_.typeWriter(id, ar); }, this.speedForward);
                // If full string has been typed, switch to backspace mode.
            }
            else if (this.i == aString.length) {
                this.isBackspacing = true;
                setTimeout(function () { this_.typeWriter(id, ar); }, this.speedWait);
            }
            // If backspacing is enabled
        }
        else {
            // If either the header or the paragraph still has text, continue backspacing
            if (eHeader.innerHTML.length > 0 || eParagraph.innerHTML.length > 0) {
                // If paragraph still has text, continue erasing, otherwise switch to the header.
                if (eParagraph.innerHTML.length > 0) {
                    eParagraph.innerHTML = eParagraph.innerHTML.substring(0, eParagraph.innerHTML.length - 1);
                }
                else if (eHeader.innerHTML.length > 0) {
                    eParagraph.classList.remove("cursor");
                    eHeader.classList.add("cursor");
                    eHeader.innerHTML = eHeader.innerHTML.substring(0, eHeader.innerHTML.length - 1);
                }
                setTimeout(function () { this_.typeWriter(id, ar); }, this.speedBackspace);
                // If neither head or paragraph still has text, switch to next quote in array and start typing.
            }
            else {
                this.isBackspacing = false;
                this.i = 0;
                this.isParagraph = false;
                this.a = (this.a + 1) % ar.length; //Moves to next position in array, always looping back to 0
                setTimeout(function () { this_.typeWriter(id, ar); }, 50);
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c2, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titletype = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.projectsIframe = _t.first);
    } }, decls: 126, vars: 8, consts: [[1, "section"], [1, "p", "fixed"], [1, "container", "py-5"], ["id", "output", 1, "output"], ["titletype", ""], [1, "cursor"], ["id", "typewriter"], ["typewriter", ""], [1, "var-highlight"], [1, "string-highlight"], ["target", "_blank", "href", "https://angular.io/", 1, "arraylink"], ["target", "_blank", "href", "https://www.mongodb.com/", 1, "arraylink"], ["target", "_blank", "href", "https://socket.io/", 1, "arraylink"], ["target", "_blank", "href", "https://ionicframework.com/", 1, "arraylink"], [1, "arraylink"], ["target", "_blank", "href", "https://salamoos.vercel.app/", 1, "arraylink"], ["target", "_blank", "href", "mailto:jacoposte@gmail.com", 1, "arraylink"], ["target", "_blank", "href", "https://www.linkedin.com/in/jacopo-stefanuto-237173200/", 1, "arraylink"], ["target", "_blank", "href", "https://www.instagram.com/jack_810s/", 1, "arraylink"], [2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%, -50%)", "background-color", "#ececec", "z-index", "100", "border-radius", "5px", "box-shadow", "0px 1px 12px 3px #888888", "padding", "50px"], ["id", "chartdiv", 1, "chartdiv", 2, "width", "50vw", "height", "50vh"], ["id", "particles-js", 2, "height", "100vh", "position", "absolute", "width", "100vw"], [2, "font-size", "40px", "font-family", "'Sintony', sans-serif"], ["alt", "Salamoos", 3, "src", "ngStyle"], [1, "p", "fixed", 2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "justify-content", "space-around", "width", "90vw", "height", "80vh", "position", "absolute"], [2, "margin", "auto", "width", "100%"], [2, "font-size", "40px", "margin-bottom", "0"], [2, "padding-bottom", "100px"], [2, "cursor", "grab", 3, "config"], [4, "ngFor", "ngForOf"], ["slot", "container-start"], ["slot", "container-end"], ["slot", "wrapper-start"], ["slot", "wrapper-end"], [1, "p", "fixed", 2, "position", "absolute"], [1, "contactext"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "justify-content", "space-around", "width", "70vw"], ["target", "_blank", "href", "https://www.instagram.com/jack_810s/", 1, "post", "insta"], [1, "post-title"], ["target", "_blank", "href", "https://www.facebook.com/jacopo.stefanuto/", 1, "post", "facebook"], ["target", "_blank", "href", "mailto:jacoposte@gmail.com", 1, "post", "email"], ["target", "_blank", "href", "https://www.linkedin.com/in/jacopo-stefanuto-237173200/", 1, "post", "link"], ["id", "navbarDiv"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["swiperSlide", "", "style", "margin: 0;"], [1, "timestamp"], [1, "date"], [1, "status"], [3, "ngStyle", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "pre", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "var");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Jack = {\n  name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "'Jacopo'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, ",\n  sector: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "'Front-End'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ",\n  location: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "'Pordenone'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, ",\n  knowledge:[\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Angular");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "MongoDB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Socket.io");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Ionic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Much more...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "];\n  projects:[\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Salamoos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "];\n  contacts:[\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "jacoposte@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Instagram/jack_810s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "];\n};\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Salamoos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "My life in a line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "swiper", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](102, AppComponent_102_Template, 1, 0, undefined, 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "span", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Want to know more 'bout me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "a", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "a", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](125, AppComponent_p_125_Template, 2, 5, "p", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isSmallScreen ? "assets/mobile1.png" : "assets/laptop1.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c4, ctx.isSmallScreen ? "120vw" : "70vw"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Scrolltutorialtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navbarItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Sintony';\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: #222;\n  padding: 0;\n  margin: 0;\n  font-family: \"Sintony\", sans-serif;\n  font-weight: 300;\n  font-size: 13px;\n  text-transform: uppercase;\n  color: #000;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0;\n  margin: 0;\n}\npre[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n#navbarDiv[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  width: 100vw;\n  background-color: black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  font-size: 25px;\n  font-family: \"Sintony\", sans-serif;\n  letter-spacing: 4px;\n  flex-wrap: wrap;\n}\n.section[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  letter-spacing: 4px;\n  overflow: hidden;\n  clip: rect(0, auto, auto, 0);\n}\n.section[_ngcontent-%COMP%]   .fixed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n}\n.section[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section[_ngcontent-%COMP%]:nth-child(2) {\n  z-index: 1;\n  background-color: #060606;\n  color: #fff;\n  top: 0;\n}\n.section[_ngcontent-%COMP%]:nth-child(2)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(3) {\n  z-index: 2;\n  background-color: #efefef;\n  color: #000;\n  top: 100vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(3)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(4) {\n  z-index: 3;\n  background: -webkit-radial-gradient(#205983, #0A2742);\n  background-attachment: fixed;\n  color: #fff;\n  top: 200vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(4)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(5) {\n  z-index: 4;\n  background-color: #efefef;\n  color: #000;\n  top: 300vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(5)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(6) {\n  z-index: 5;\n  background-color: #efefef;\n  color: #000;\n  top: 400vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(6)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.arraylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(253, 149, 90, 0.8);\n}\n.var-highlight[_ngcontent-%COMP%] {\n  color: #C0AD60;\n}\n.string-highlight[_ngcontent-%COMP%] {\n  color: rgba(253, 149, 90, 0.8);\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 140px;\n}\n#typewriter[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0;\n  font-family: \"Courier New\";\n}\n#typewriter[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  animation: blink 500ms linear infinite alternate;\n}\n.iframeProjects[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  z-index: 0;\n}\n.figureProjects[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: contain;\n  overflow: hidden;\n  z-index: 1;\n  margin: 0;\n  padding: 10px;\n}\n\n.output[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Source Code Pro\", monospace;\n  color: white;\n}\n.output[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: normal;\n}\n.cursor[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  margin-left: 3px;\n  background-color: white;\n  animation-name: blink;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n}\nh1.cursor[_ngcontent-%COMP%]::after {\n  height: 40px;\n  width: 13px;\n}\np.cursor[_ngcontent-%COMP%]::after {\n  height: 13px;\n  width: 6px;\n}\n.post[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-family: \"DM Sans\", sans-serif;\n  text-decoration: none;\n  color: inherit;\n  min-width: 250px;\n  width: 20%;\n  text-align: center;\n  position: relative;\n  padding: 2rem;\n  box-shadow: inset 0 0 0 4px #000, inset -4px -4px 0 6px #CCC;\n  background-color: #FFF;\n  cursor: pointer;\n}\n.post[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  transform-origin: 0 bottom 0;\n  transform: scaleY(0);\n  transition: 0.4s ease-out;\n}\n.post[_ngcontent-%COMP%]:hover   .post-title[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.post[_ngcontent-%COMP%]:hover:before {\n  transform: scaleY(1);\n}\n.post-title[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.333;\n  transition: 0.4s ease-out;\n}\n.insta[_ngcontent-%COMP%]:before {\n  background-color: #df3f74;\n}\n.facebook[_ngcontent-%COMP%]:before {\n  background-color: #3b5998;\n}\n.email[_ngcontent-%COMP%]:before {\n  background-color: #EA4335;\n}\n.link[_ngcontent-%COMP%]:before {\n  background-color: #0e76a8;\n}\n.contactext[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 150px;\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .contactext[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 45px;\n  }\n\n  #typewriter[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n\n  #navbarDiv[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .output[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .output[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  h1.cursor[_ngcontent-%COMP%]::after {\n    height: 24px;\n    width: 10px;\n  }\n\n  .post[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n.timestamp[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 0px 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: 100;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 0px 40px;\n  display: flex;\n  justify-content: center;\n  border-top: 4px solid #3e70ff;\n  position: relative;\n  transition: all 200ms ease-in;\n}\n.status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding-top: 20px;\n}\n.status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  background-color: #e8eeff;\n  border-radius: 25px;\n  border: 4px solid #3e70ff;\n  position: absolute;\n  top: -15px;\n  left: calc(50% - 12px);\n  transition: all 200ms ease-in;\n}\n.swiper-control[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px 0;\n  overflow: hidden;\n  padding: 0 20px 30px 20px;\n  font-family: \"Roboto\", sans-serif;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  font-size: 18px;\n}\n.swiper-slide[_ngcontent-%COMP%]:nth-child(2n) {\n  width: 40%;\n}\n.swiper-slide[_ngcontent-%COMP%]:nth-child(3n) {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxzd2lwZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5REFBQTtBQXdWQSxvRkFBQTtBQXZWUjtFQUNDLHNCQUFBO0FBRUQ7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUVEO0FBQ0E7RUFDQyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUQ7QUFDQTtFQUNDLGlCQUFBO0FBRUQ7QUFDQTs7R0FBQTtBQUlBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNEO0FBRUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRDtBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFRjtBQUFDO0VBQ0MsV0FBQTtBQUVGO0FBR0M7RUFDQyxVQUFBO0VBRUMseUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQURIO0FBeUJFO0VBQ0MsZ0NBQUE7QUF2Qkg7QUFQQztFQUNDLFVBQUE7RUFPQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSUg7QUFlRTtFQUNDLGdDQUFBO0FBYkg7QUFqQkM7RUFDQyxVQUFBO0VBWUMscURBQUE7RUFDQSw0QkFBQTtFQUVBLFdBQUE7RUFDQSxVQUFBO0FBUUg7QUFJRTtFQUNDLGdDQUFBO0FBRkg7QUE1QkM7RUFDQyxVQUFBO0VBbUJDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7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QUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQTBKRDtBQXhKQTtFQUNDLGlCQUFBO0FBMkpEO0FBeEpBO0VBQ0MsV0FBQTtFQUVBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUNBQUE7QUEwSkQ7QUF0SkE7RUFDQyxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBeUpEO0FBdkpBO0VBQ0MsVUFBQTtBQTBKRDtBQXhKQTtFQUNDLFVBQUE7QUEySkQiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNpbnRvbnknO1xyXG4qIHtcclxuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuXHRiYWNrZ3JvdW5kOiAjMjIyO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG5cdGZvbnQtZmFtaWx5OiAnU2ludG9ueScsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC13ZWlnaHQ6IDMwMDtcclxuXHRmb250LXNpemU6IDEzcHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRjb2xvcjogIzAwMDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0bWFyZ2luOiAwO1xyXG59XHJcblxyXG5wcmV7XHJcblx0dGV4dC1hbGlnbjogc3RhcnQ7XHJcbn1cclxuXHJcbi8qIHNwYW57XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn0gKi9cclxuXHJcbiNuYXZiYXJEaXZ7XHJcblx0cG9zaXRpb246IGZpeGVkOyBcclxuXHR6LWluZGV4OiAxMDA7IFxyXG5cdHdpZHRoOiAxMDB2dzsgXHJcblx0YmFja2dyb3VuZC1jb2xvcjogYmxhY2s7IFxyXG5cdGRpc3BsYXk6IGZsZXg7IFxyXG5cdGZsZXgtZGlyZWN0aW9uOiByb3c7IFxyXG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5OyBcclxuXHRmb250LXNpemU6IDI1cHg7IFxyXG5cdGZvbnQtZmFtaWx5OiAnU2ludG9ueScsIHNhbnMtc2VyaWY7IFxyXG5cdGxldHRlci1zcGFjaW5nOiA0cHg7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGxldHRlci1zcGFjaW5nOiA0cHg7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRjbGlwOiByZWN0KDAsIGF1dG8sIGF1dG8sIDApO1xyXG5cdC5maXhlZCB7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiA1MCU7XHJcblx0XHRsZWZ0OiA1MCU7XHJcblx0fVxyXG5cdC53aGl0ZSB7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHR9XHJcbn1cclxuXHJcbkBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNSB7XHJcblx0LnNlY3Rpb246bnRoLWNoaWxkKCN7JGkgKyAxfSkge1xyXG5cdFx0ei1pbmRleDogKCRpKTtcclxuXHRcdEBpZigkaT09MSkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDYwNjA2O1xyXG5cdFx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdFx0dG9wOiAwO1xyXG5cdFx0fVxyXG5cdFx0QGVsc2UgaWYoJGk9PTIpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xyXG5cdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0dG9wOiAoMTAwdmggKiAoJGkgLSAxKSk7XHJcblx0XHR9XHJcblx0XHRAZWxzZSBpZigkaT09Mykge1xyXG5cdFx0XHRiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMjA1OTgzLCAjMEEyNzQyKTtcclxuXHRcdFx0YmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuXHRcdFx0Ly9iYWNrZ3JvdW5kOi13ZWJraXQtcmFkaWFsLWdyYWRpZW50KCMyMDU5ODMsICMwQTI3NDIpOyBiYWNrZ3JvdW5kOnJhZGlhbC1ncmFkaWVudCgjMjA1OTgzLCAjMEEyNzQyKTsgb3ZlcmZsb3c6aGlkZGVuOyBcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHRvcDogKDEwMHZoICogKCRpIC0gMSkpO1xyXG5cdFx0fVxyXG5cdFx0QGVsc2UgaWYoJGk9PTQpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xyXG5cdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0dG9wOiAoMTAwdmggKiAoJGkgLSAxKSk7XHJcblx0XHR9XHJcblx0XHRAZWxzZSBpZigkaT09NSkge1xyXG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM5LCAyMzksIDIzOSk7XHJcblx0XHRcdGNvbG9yOiAjMDAwO1xyXG5cdFx0XHR0b3A6ICgxMDB2aCAqICgkaSAtIDEpKTtcclxuXHRcdH1cclxuXHRcdC5maXhlZCB7XHJcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLmFycmF5bGlua3tcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG5cdGNvbG9yOiByZ2JhKDI1MywgMTQ5LCA5MCwgMC44KTtcclxufVxyXG5cclxuLnZhci1oaWdobGlnaHR7XHJcblx0Y29sb3I6ICNDMEFENjA7XHJcbn1cclxuXHJcbi5zdHJpbmctaGlnaGxpZ2h0e1xyXG5cdGNvbG9yOiByZ2JhKDI1MywgMTQ5LCA5MCwgMC44KTtcclxufVxyXG5cclxuaDF7XHJcblx0bWFyZ2luLXRvcDogMDtcclxuXHRmb250LXNpemU6MTQwcHg7XHJcbn1cclxuXHJcbiN0eXBld3JpdGVye1xyXG5cdGZvbnQtc2l6ZTogMmVtO1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LWZhbWlseTogXCJDb3VyaWVyIE5ld1wiO1xyXG5cclxuXHQmOmFmdGVye1xyXG5cdGNvbnRlbnQ6IFwifFwiO1xyXG5cdGFuaW1hdGlvbjogYmxpbmsgNTAwbXMgbGluZWFyIGluZmluaXRlIGFsdGVybmF0ZTtcclxuXHR9XHJcbn1cclxuXHJcbi5pZnJhbWVQcm9qZWN0c3tcclxuXHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgXHJcblx0bGVmdDogNTAlOyBcclxuXHR0b3A6IDUwJTsgXHJcblx0cG9zaXRpb246IGFic29sdXRlOyBcclxuXHR6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZmlndXJlUHJvamVjdHN7XHJcblx0aGVpZ2h0OiAxMDAlOyBcclxuXHR3aWR0aDogMTAwJTsgXHJcblx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDsgXHJcblx0cG9zaXRpb246IHJlbGF0aXZlOyBcclxuXHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IFxyXG5cdG92ZXJmbG93OiBoaWRkZW47IFxyXG5cdHotaW5kZXg6IDE7IFxyXG5cdG1hcmdpbjogMDsgXHJcblx0cGFkZGluZzogMTBweDtcclxufVxyXG5cclxuIC8qIEN1cnNvciBTdHlsaW5nICovXHJcblxyXG4gLm91dHB1dCB7XHJcblx0dGV4dC1hbGlnbjpjZW50ZXI7XHJcblx0Zm9udC1mYW1pbHk6ICdTb3VyY2UgQ29kZSBQcm8nLCBtb25vc3BhY2U7XHJcblx0Y29sb3I6d2hpdGU7XHJcblx0aDEge1xyXG5cdCAgZm9udC1zaXplOjYwcHg7XHJcblx0ICBmb250LXdlaWdodDogbm9ybWFsO1xyXG5cdH1cclxuICB9XHJcblxyXG4uY3Vyc29yOjphZnRlciB7XHJcblx0Y29udGVudDonJztcclxuXHRkaXNwbGF5OmlubGluZS1ibG9jaztcclxuXHRtYXJnaW4tbGVmdDozcHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHRhbmltYXRpb24tbmFtZTpibGluaztcclxuXHRhbmltYXRpb24tZHVyYXRpb246MC41cztcclxuXHRhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuaDEuY3Vyc29yOjphZnRlciB7XHJcblx0aGVpZ2h0OjQwcHg7XHJcblx0d2lkdGg6MTNweDtcclxufVxyXG5wLmN1cnNvcjo6YWZ0ZXIge1xyXG5cdGhlaWdodDoxM3B4O1xyXG5cdHdpZHRoOjZweDtcclxufSBcclxuXHJcbi5wb3N0IHtcclxuXHRtYXJnaW46IDIwcHg7XHJcblx0Zm9udC1mYW1pbHk6IFwiRE0gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG5cdC8vZGlzcGxheTogZmxleDtcclxuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0Y29sb3I6IGluaGVyaXQ7XHJcblx0Ly9tYXgtd2lkdGg6IDQwMHB4O1xyXG5cdG1pbi13aWR0aDogMjUwcHg7XHJcblx0d2lkdGg6IDIwJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHBhZGRpbmc6IDJyZW07XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICMwMDAsIGluc2V0IC00cHggLTRweCAwIDZweCAjQ0NDO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0Y3Vyc29yOiBwb2ludGVyOyBcclxuXHQmOmJlZm9yZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMCBib3R0b20gMDtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG5cdFx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG5cdH1cclxuXHRcclxuXHQmOmhvdmVyIHtcclxuXHRcdC5wb3N0LXRpdGxlIHtcclxuXHRcdFx0Y29sb3I6ICNGRkY7XHJcblx0XHR9XHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnBvc3QtdGl0bGUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMS4zMzM7XHJcblx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uaW5zdGEge1xyXG5cdCY6YmVmb3JlIHtcdFx0XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGYzZjc0O1xyXG5cdH1cclxufVxyXG5cclxuLmZhY2Vib29rIHtcclxuXHQmOmJlZm9yZSB7XHRcdFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuXHR9XHJcbn1cclxuXHJcbi5lbWFpbCB7XHJcblx0JjpiZWZvcmUge1x0XHRcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFQTQzMzU7XHJcblx0fVxyXG59XHJcblxyXG4ubGluayB7XHJcblx0JjpiZWZvcmUge1x0XHRcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XHJcblx0fVxyXG59XHJcblxyXG4uY29udGFjdGV4dCB7XHJcblx0Zm9udC1zaXplOiA0MHB4OyBcclxuXHRtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBibGlua3tcclxuXHQwJXtvcGFjaXR5OiAwO31cclxuXHQxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5ALW1vei1rZXlmcmFtZXMgYmxpbmt7XHJcblx0MCV7b3BhY2l0eTogMDt9XHJcblx0MTAwJXtvcGFjaXR5OiAxO31cclxufVxyXG5cclxuQGtleWZyYW1lcyBibGlua3tcclxuXHQwJXtvcGFjaXR5OiAwO31cclxuXHQxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblx0LmNvbnRhY3RleHQge1xyXG5cdFx0Zm9udC1zaXplOiAzMHB4OyBcclxuXHRcdG1hcmdpbi1ib3R0b206IDQ1cHg7XHJcblx0fVxyXG5cdCN0eXBld3JpdGVyIHtcclxuXHRcdGZvbnQtc2l6ZTogMC45ZW07XHJcblx0fVxyXG5cdGgxe1xyXG5cdFx0Zm9udC1zaXplOiA3MHB4O1xyXG5cdH1cclxuXHQjbmF2YmFyRGl2e1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdH1cclxuXHQub3V0cHV0IHtcclxuXHRcdGgxIHtcclxuXHRcdCAgZm9udC1zaXplOjMwcHg7XHJcblx0XHR9XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG5cdH1cclxuXHRoMS5jdXJzb3I6OmFmdGVyIHtcclxuXHRcdGhlaWdodDoyNHB4O1xyXG5cdFx0d2lkdGg6MTBweDtcclxuXHR9XHJcblx0LnBvc3Qge1xyXG5cdFx0cGFkZGluZzogMDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuQGltcG9ydCBcIn5zd2lwZXIvc3dpcGVyXCI7XHJcbi8vQGltcG9ydCBcIn5zd2lwZXIvY29tcG9uZW50cy9wYWdpbmF0aW9uL3BhZ2luYXRpb25cIjtcclxuLnRpbWVzdGFtcCB7XHJcblx0d2lkdGg6IDEwMCU7IC8vIGZvciBmbGV4aWJsZSB3aWR0aFxyXG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblx0cGFkZGluZzogMHB4IDQwcHg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0Zm9udC13ZWlnaHQ6IDEwMDsgXHJcbiAgfVxyXG4uc3RhdHVzIHtcclxuXHRwYWRkaW5nOiAwcHggNDBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGJvcmRlci10b3A6IDRweCBzb2xpZCAjM2U3MGZmO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbiA7XHJcbn1cclxuXHJcbi5zdGF0dXMgc3BhbiB7XHJcblx0Zm9udC13ZWlnaHQ6IDYwMDtcclxuXHRwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4uc3RhdHVzIHNwYW46YmVmb3JlIHtcclxuXHRjb250ZW50OiAnJztcclxuXHR3aWR0aDogMjVweDtcclxuXHRoZWlnaHQ6IDI1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2U4ZWVmZjtcclxuXHRib3JkZXItcmFkaXVzOiAyNXB4O1xyXG5cdGJvcmRlcjogNHB4IHNvbGlkICMzZTcwZmY7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTE1cHg7XHJcblx0bGVmdDogY2FsYyg1MCUgLSAxMnB4KTsgLy8gYWxpZ24gY2lyY2xlIHRvIGNlbnRlclxyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG59XHJcbi5zd2lwZXItY29udHJvbCB7XHJcblx0dGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xyXG4uc3dpcGVyLWNvbnRhaW5lciB7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0Ly9oZWlnaHQ6IDI1MHB4O1xyXG5cdG1hcmdpbjogNTBweCAwO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cGFkZGluZzogMCAyMHB4IDMwcHggMjBweDtcclxuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XHJcblx0Ly9mb250LXdlaWdodDogYm9sZGVyO1xyXG5cdC8vZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG4uc3dpcGVyLXNsaWRlIHtcclxuXHR3aWR0aDogMjAwcHg7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgybikge1xyXG5cdHdpZHRoOiA0MCU7XHJcbn1cclxuLnN3aXBlci1zbGlkZTpudGgtY2hpbGQoM24pIHtcclxuXHR3aWR0aDogMjAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBcclxuIiwiQGltcG9ydCAnc3dpcGVyLXZhcnMuc2Nzcyc7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpXG4gICAgZm9ybWF0KCd3b2ZmJyk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuOnJvb3Qge1xuICAtLXN3aXBlci10aGVtZS1jb2xvcjogI3skdGhlbWVDb2xvcn07XG59XG4uc3dpcGVyLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgLyogRml4IG9mIFdlYmtpdCBmbGlja2VyaW5nICovXG4gIHotaW5kZXg6IDE7XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1hbmRyb2lkIC5zd2lwZXItc2xpZGUsXG4uc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMCwgMCk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdyA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93LWNvbHVtbiA+IC5zd2lwZXItd3JhcHBlciB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZyZWUtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1wb2ludGVyLWV2ZW50cyB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXk7XG4gICYuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCB7XG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcbiAgfVxufVxuLnN3aXBlci1zbGlkZSB7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cbi5zd2lwZXItc2xpZGUtaW52aXNpYmxlLWJsYW5rIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLyogQXV0byBIZWlnaHQgKi9cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQge1xuICAmLFxuICAuc3dpcGVyLXNsaWRlIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cblxuICAuc3dpcGVyLXdyYXBwZXIge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xuICB9XG59XG5cbi8qIDNEIEVmZmVjdHMgKi9cbi5zd2lwZXItY29udGFpbmVyLTNkIHtcbiAgcGVyc3BlY3RpdmU6IDEyMDBweDtcbiAgLnN3aXBlci13cmFwcGVyLFxuICAuc3dpcGVyLXNsaWRlLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4gIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHotaW5kZXg6IDEwO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxufVxuXG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUge1xuICA+IC5zd2lwZXItd3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lOyAvKiBGb3IgRmlyZWZveCAqL1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgLyogRm9yIEludGVybmV0IEV4cGxvcmVyIGFuZCBFZGdlICovXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbiAgPiAuc3dpcGVyLXdyYXBwZXIgPiAuc3dpcGVyLXNsaWRlIHtcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogc3RhcnQgc3RhcnQ7XG4gIH1cbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB4IG1hbmRhdG9yeTtcbiAgfVxufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBzY3JvbGwtc25hcC10eXBlOiB5IG1hbmRhdG9yeTtcbiAgfVxufVxuXG5cblxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, { typer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['typewriter', { static: true }]
        }], titletype: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['titletype', { static: true }]
        }], projectsIframe: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['projectsIframe', { static: true }]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/angular */ "UMfn");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    swiper_angular__WEBPACK_IMPORTED_MODULE_4__["SwiperModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map