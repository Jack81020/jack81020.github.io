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
const _c3 = ["salamoosIMG"];
const _c4 = ["angolodellosvarioneIMG"];
function AppComponent_111_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
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
function AppComponent_111_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_111_ng_template_0_Template, 6, 2, "ng-template", 45);
} }
const _c5 = function (a0, a1) { return { "color": a0, "cursor": a1 }; };
function AppComponent_p_134_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_p_134_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r7 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.scrollToPage(item_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c5, item_r7 === "|" ? "white" : "#6ba575", item_r7 === "|" ? "" : "pointer"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7);
} }
const _c6 = function (a0) { return { "font-size": a0 }; };
const _c7 = function (a0) { return { "width": a0 }; };
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
        this.currentproject = "Salamoos" || false;
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
        /*  let lastScrollTop = 0;
     
         // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
         window.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
           var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
           if (st > lastScrollTop){
               // downscroll code
               lastScrollTop++
               //window.scrollTo(0, window.innerHeight * lastScrollTop)
           } else {
               // upscroll code
               lastScrollTop--
               //window.scrollTo(0, window.innerHeight * lastScrollTop)
           }
           //lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
         }, false); */
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
    changepj() {
        switch (this.currentproject) {
            case "Salamoos":
                this.currentproject = "Angolodellosvarione";
                break;
            case "Angolodellosvarione":
                this.currentproject = "Salamoos";
                break;
            default:
                this.currentproject = "Salamoos";
                break;
        }
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c4, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.titletype = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.projectsIframe = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.salamoosIMG = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.angolodellosvarioneIMG = _t.first);
    } }, decls: 135, vars: 13, consts: [[1, "section"], [1, "p", "fixed"], [1, "container", "py-5"], ["id", "output", 1, "output"], ["titletype", ""], [1, "cursor"], ["id", "typewriter"], ["typewriter", ""], [1, "var-highlight"], [1, "string-highlight"], ["target", "_blank", "href", "https://angular.io/", 1, "arraylink"], ["target", "_blank", "href", "https://www.mongodb.com/", 1, "arraylink"], ["target", "_blank", "href", "https://socket.io/", 1, "arraylink"], ["target", "_blank", "href", "https://ionicframework.com/", 1, "arraylink"], [1, "arraylink"], ["target", "_blank", "href", "https://salamoos.vercel.app/", 1, "arraylink"], ["target", "_blank", "href", "mailto:jacoposte@gmail.com", 1, "arraylink"], ["target", "_blank", "href", "https://www.linkedin.com/in/jacopo-stefanuto-237173200/", 1, "arraylink"], ["target", "_blank", "href", "https://www.instagram.com/jack_810s/", 1, "arraylink"], [2, "position", "absolute", "left", "50%", "top", "50%", "transform", "translate(-50%, -50%)", "background-color", "#ececec", "z-index", "100", "border-radius", "5px", "box-shadow", "0px 1px 12px 3px #888888", "padding", "50px"], ["id", "chartdiv", 1, "chartdiv", 2, "width", "50vw", "height", "50vh"], ["id", "particles-js", 2, "height", "100vh", "position", "absolute", "width", "100vw"], [2, "font-family", "'Sintony', sans-serif", 3, "ngStyle"], [1, "show", 3, "src", "alt", "ngStyle"], [3, "click"], [1, "p", "fixed", 2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "justify-content", "space-around", "width", "90vw", "height", "80vh", "position", "absolute"], [2, "margin", "auto", "width", "100%"], [2, "font-size", "40px", "margin-bottom", "0"], [2, "padding-bottom", "100px"], [2, "cursor", "grab", 3, "config"], [4, "ngFor", "ngForOf"], ["slot", "container-start"], ["slot", "container-end"], ["slot", "wrapper-start"], ["slot", "wrapper-end"], [1, "p", "fixed", 2, "position", "absolute"], [1, "contactext"], [2, "display", "flex", "flex-direction", "row", "flex-wrap", "wrap", "justify-content", "space-around", "width", "70vw"], ["target", "_blank", "href", "https://www.instagram.com/jack_810s/", 1, "post", "insta"], [1, "post-title"], ["target", "_blank", "href", "https://www.facebook.com/jacopo.stefanuto/", 1, "post", "facebook"], ["target", "_blank", "href", "mailto:jacoposte@gmail.com", 1, "post", "email"], ["target", "_blank", "href", "https://www.linkedin.com/in/jacopo-stefanuto-237173200/", 1, "post", "link"], ["id", "navbarDiv"], [3, "ngStyle", "click", 4, "ngFor", "ngForOf"], ["swiperSlide", "", "style", "margin: 0;"], [1, "timestamp"], [1, "date"], [1, "status"], [3, "ngStyle", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Angolodellosvarione");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "];\n  contacts:[\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "jacoposte@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ",\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Instagram/jack_810s");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "];\n};\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_p_click_101_listener() { return ctx.changepj(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Next Project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "My life in a line");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "p", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "swiper", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](111, AppComponent_111_Template, 1, 0, undefined, 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "span", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "span", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "span", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "span", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Want to know more 'bout me?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "a", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Instagram");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "a", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "a", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h2", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "Linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](134, AppComponent_p_134_Template, 2, 5, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c6, ctx.isSmallScreen ? "27px" : "50px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentproject);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.isSmallScreen ? "assets/" + ctx.currentproject + "/mobile.png" : "assets/" + ctx.currentproject + "/laptop.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.currentproject)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, ctx.isSmallScreen ? "110vw" : "70vw"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.Scrolltutorialtext);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.timeline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.navbarItems);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_6__["SwiperSlideDirective"]], styles: ["@import 'https://fonts.googleapis.com/css?family=Sintony';\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap\");\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\nbody[_ngcontent-%COMP%] {\n  background: #222;\n  padding: 0;\n  margin: 0;\n  font-family: \"Sintony\", sans-serif;\n  font-weight: 300;\n  font-size: 13px;\n  text-transform: uppercase;\n  color: #000;\n}\nheader[_ngcontent-%COMP%] {\n  background-color: #fff;\n  padding: 0;\n  margin: 0;\n}\npre[_ngcontent-%COMP%] {\n  text-align: start;\n}\n\n#navbarDiv[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 100;\n  width: 100vw;\n  background-color: black;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  font-size: 25px;\n  font-family: \"Sintony\", sans-serif;\n  letter-spacing: 4px;\n  flex-wrap: wrap;\n}\n.section[_ngcontent-%COMP%] {\n  text-align: center;\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  letter-spacing: 4px;\n  overflow: hidden;\n  clip: rect(0, auto, auto, 0);\n}\n.section[_ngcontent-%COMP%]   .fixed[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n}\n.section[_ngcontent-%COMP%]   .white[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.section[_ngcontent-%COMP%]:nth-child(2) {\n  z-index: 1;\n  background-color: #060606;\n  color: #fff;\n  top: 0;\n}\n.section[_ngcontent-%COMP%]:nth-child(2)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(3) {\n  z-index: 2;\n  background-color: #efefef;\n  color: #000;\n  top: 100vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(3)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(4) {\n  z-index: 3;\n  background: -webkit-radial-gradient(#205983, #0A2742);\n  background-attachment: fixed;\n  color: #fff;\n  top: 200vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(4)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(5) {\n  z-index: 4;\n  background-color: #efefef;\n  color: #000;\n  top: 300vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(5)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.section[_ngcontent-%COMP%]:nth-child(6) {\n  z-index: 5;\n  background-color: #efefef;\n  color: #000;\n  top: 400vh;\n}\n.section[_ngcontent-%COMP%]:nth-child(6)   .fixed[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n}\n.arraylink[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: rgba(253, 149, 90, 0.8);\n}\n.var-highlight[_ngcontent-%COMP%] {\n  color: #C0AD60;\n}\n.string-highlight[_ngcontent-%COMP%] {\n  color: rgba(253, 149, 90, 0.8);\n}\nh1[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 140px;\n}\n#typewriter[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0;\n  font-family: \"Courier New\";\n}\n#typewriter[_ngcontent-%COMP%]:after {\n  content: \"|\";\n  animation: blink 500ms linear infinite alternate;\n}\n.iframeProjects[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%);\n  left: 50%;\n  top: 50%;\n  position: absolute;\n  z-index: 0;\n}\n.figureProjects[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-repeat: no-repeat;\n  position: relative;\n  background-size: contain;\n  overflow: hidden;\n  z-index: 1;\n  margin: 0;\n  padding: 10px;\n}\n\n.output[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Source Code Pro\", monospace;\n  color: white;\n}\n.output[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 60px;\n  font-weight: normal;\n}\n.cursor[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  margin-left: 3px;\n  background-color: white;\n  animation-name: blink;\n  animation-duration: 0.5s;\n  animation-iteration-count: infinite;\n}\nh1.cursor[_ngcontent-%COMP%]::after {\n  height: 40px;\n  width: 13px;\n}\np.cursor[_ngcontent-%COMP%]::after {\n  height: 13px;\n  width: 6px;\n}\n.post[_ngcontent-%COMP%] {\n  margin: 20px;\n  font-family: \"DM Sans\", sans-serif;\n  text-decoration: none;\n  color: inherit;\n  min-width: 250px;\n  width: 20%;\n  text-align: center;\n  position: relative;\n  padding: 1.5rem;\n  box-shadow: inset 0 0 0 4px #000, inset -4px -4px 0 6px #CCC;\n  background-color: #FFF;\n  cursor: pointer;\n}\n.post[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  content: \"\";\n  display: block;\n  width: 100%;\n  height: 100%;\n  transform-origin: 0 bottom 0;\n  transform: scaleY(0);\n  transition: 0.4s ease-out;\n}\n.post[_ngcontent-%COMP%]:hover   .post-title[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.post[_ngcontent-%COMP%]:hover:before {\n  transform: scaleY(1);\n}\n.post-title[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 2rem;\n  font-weight: 700;\n  line-height: 1.333;\n  transition: 0.4s ease-out;\n}\n.insta[_ngcontent-%COMP%]:before {\n  background-color: #df3f74;\n}\n.facebook[_ngcontent-%COMP%]:before {\n  background-color: #3b5998;\n}\n.email[_ngcontent-%COMP%]:before {\n  background-color: #EA4335;\n}\n.link[_ngcontent-%COMP%]:before {\n  background-color: #0e76a8;\n}\n.contactext[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 150px;\n}\n.hide[_ngcontent-%COMP%] {\n  animation: fade-out 1s ease-in-out forwards;\n}\n.show[_ngcontent-%COMP%] {\n  animation: fade-in 1s ease-in-out forwards;\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes blink {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@media only screen and (max-width: 1700px) and (min-width: 601px) {\n  #typewriter[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .output[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  #navbarDiv[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n\n  .contactext[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n}\n@media only screen and (max-width: 600px) {\n  .contactext[_ngcontent-%COMP%] {\n    font-size: 30px;\n    margin-bottom: 45px;\n  }\n\n  #typewriter[_ngcontent-%COMP%] {\n    font-size: 0.9em;\n  }\n\n  h1[_ngcontent-%COMP%] {\n    font-size: 70px;\n  }\n\n  #navbarDiv[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n\n  .output[_ngcontent-%COMP%] {\n    margin-bottom: 50px;\n  }\n  .output[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n\n  h1.cursor[_ngcontent-%COMP%]::after {\n    height: 24px;\n    width: 10px;\n  }\n\n  .post[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n@font-face {\n  font-family: \"swiper-icons\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64, 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\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal;\n}\n[_ngcontent-%COMP%]:root {\n  --swiper-theme-color: #007aff;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  \n  z-index: 1;\n}\n.swiper-container-vertical[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.swiper-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n.swiper-container-android[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-wrapper[_ngcontent-%COMP%] {\n  transform: translate3d(0px, 0, 0);\n}\n.swiper-container-multirow[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n.swiper-container-multirow-column[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.swiper-container-free-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n.swiper-container-pointer-events[_ngcontent-%COMP%] {\n  touch-action: pan-y;\n}\n.swiper-container-pointer-events.swiper-container-vertical[_ngcontent-%COMP%] {\n  touch-action: pan-x;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n.swiper-slide-invisible-blank[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.swiper-container-autoheight[_ngcontent-%COMP%], .swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%] {\n  height: auto;\n}\n.swiper-container-autoheight[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n.swiper-container-3d[_ngcontent-%COMP%] {\n  perspective: 1200px;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-wrapper[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-cube-shadow[_ngcontent-%COMP%] {\n  transform-style: preserve-3d;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%], .swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-left[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-right[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-top[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n.swiper-container-3d[_ngcontent-%COMP%]   .swiper-slide-shadow-bottom[_ngcontent-%COMP%] {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  overflow: auto;\n  scrollbar-width: none;\n  \n  -ms-overflow-style: none;\n  \n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%]    > .swiper-slide[_ngcontent-%COMP%] {\n  scroll-snap-align: start start;\n}\n.swiper-container-horizontal.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: x mandatory;\n}\n.swiper-container-vertical.swiper-container-css-mode[_ngcontent-%COMP%]    > .swiper-wrapper[_ngcontent-%COMP%] {\n  scroll-snap-type: y mandatory;\n}\n.timestamp[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 20px;\n  padding: 0px 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  font-weight: 100;\n}\n.status[_ngcontent-%COMP%] {\n  padding: 0px 40px;\n  display: flex;\n  justify-content: center;\n  border-top: 4px solid #3e70ff;\n  position: relative;\n  transition: all 200ms ease-in;\n}\n.status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding-top: 20px;\n}\n.status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:before {\n  content: \"\";\n  width: 25px;\n  height: 25px;\n  background-color: #e8eeff;\n  border-radius: 25px;\n  border: 4px solid #3e70ff;\n  position: absolute;\n  top: -15px;\n  left: calc(50% - 12px);\n  transition: all 200ms ease-in;\n}\n.swiper-control[_ngcontent-%COMP%] {\n  text-align: right;\n}\n.swiper-container[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 50px 0;\n  overflow: hidden;\n  padding: 0 20px 30px 20px;\n  font-family: \"Roboto\", sans-serif;\n}\n.swiper-slide[_ngcontent-%COMP%] {\n  width: 200px;\n  text-align: center;\n  font-size: 18px;\n}\n.swiper-slide[_ngcontent-%COMP%]:nth-child(2n) {\n  width: 40%;\n}\n.swiper-slide[_ngcontent-%COMP%]:nth-child(3n) {\n  width: 20%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXG5vZGVfbW9kdWxlc1xcc3dpcGVyXFxzd2lwZXIuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSx5REFBQTtBQTRYQSxvRkFBQTtBQTNYUjtFQUNDLHNCQUFBO0FBRUQ7QUFDQTtFQUNDLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUVEO0FBQ0E7RUFDQyxzQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUQ7QUFDQTtFQUNDLGlCQUFBO0FBRUQ7QUFDQTs7R0FBQTtBQUlBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNEO0FBRUE7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFDRDtBQUFDO0VBQ0MsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFFRjtBQUFDO0VBQ0MsV0FBQTtBQUVGO0FBR0M7RUFDQyxVQUFBO0VBRUMseUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtBQURIO0FBeUJFO0VBQ0MsZ0NBQUE7QUF2Qkg7QUFQQztFQUNDLFVBQUE7RUFPQyx5QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSUg7QUFlRTtFQUNDLGdDQUFBO0FBYkg7QUFqQkM7RUFDQyxVQUFBO0VBWUMscURBQUE7RUFDQSw0QkFBQTtFQUVBLFdBQUE7RUFDQSxVQUFBO0FBUUg7QUFJRTtFQUNDLGdDQUFBO0FBRkg7QUE1QkM7RUFDQyxVQUFBO0VBbUJDLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFhSDtBQU5FO0VBQ0MsZ0NBQUE7QUFRSDtBQXRDQztFQUNDLFVBQUE7RUF3QkMseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQWtCSDtBQWhCRTtFQUNDLGdDQUFBO0FBa0JIO0FBYkE7RUFDQyxxQkFBQTtFQUNBLDhCQUFBO0FBZ0JEO0FBYkE7RUFDQyxjQUFBO0FBZ0JEO0FBYkE7RUFDQyw4QkFBQTtBQWdCRDtBQWJBO0VBQ0MsYUFBQTtFQUNBLGdCQUFBO0FBZ0JEO0FBYkE7RUFDQyxjQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0FBZ0JEO0FBZEM7RUFDQSxZQUFBO0VBQ0EsZ0RBQUE7QUFnQkQ7QUFaQTtFQUNDLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFlRDtBQVpBO0VBQ0MsWUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQWVEO0FBWkMsbUJBQUE7QUFFQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxZQUFBO0FBY0Q7QUFiQztFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQWVIO0FBWEE7RUFDQyxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0FBY0Q7QUFYQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0FBY0Q7QUFaQTtFQUNDLFlBQUE7RUFDQSxVQUFBO0FBZUQ7QUFaQTtFQUNDLFlBQUE7RUFDQSxrQ0FBQTtFQUVBLHFCQUFBO0VBQ0EsY0FBQTtFQUVBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFhRDtBQVpDO0VBQ0Msa0JBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUFjRjtBQVZFO0VBQ0MsV0FBQTtBQVlIO0FBVkU7RUFDQyxvQkFBQTtBQVlIO0FBUEE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFVRDtBQU5DO0VBQ0MseUJBQUE7QUFTRjtBQUpDO0VBQ0MseUJBQUE7QUFPRjtBQUZDO0VBQ0MseUJBQUE7QUFLRjtBQUFDO0VBQ0MseUJBQUE7QUFHRjtBQUNBO0VBQ0MsZUFBQTtFQUNBLG9CQUFBO0FBRUQ7QUFHQTtFQUNJLDJDQUFBO0FBQUo7QUFFQTtFQUNJLDBDQUFBO0FBQ0o7QUFDQTtFQUNLO0lBQ0ssVUFBQTtFQUVSO0VBQ0U7SUFDTSxVQUFBO0VBQ1I7QUFDRjtBQWFBO0VBQ0M7SUFBRyxVQUFBO0VBTUY7RUFMRDtJQUFLLFVBQUE7RUFRSjtBQUNGO0FBTkE7RUFDSTtJQUNGLGNBQUE7RUFRQTs7RUFMQTtJQUNFLGVBQUE7RUFRRjs7RUFMRDtJQUNDLGVBQUE7RUFRQTs7RUFMRDtJQUNDLG1CQUFBO0VBUUE7QUFDRjtBQUxBO0VBQ0M7SUFDQyxlQUFBO0lBQ0EsbUJBQUE7RUFPQTs7RUFMRDtJQUNDLGdCQUFBO0VBUUE7O0VBTkQ7SUFDQyxlQUFBO0VBU0E7O0VBUEQ7SUFDQyxlQUFBO0VBVUE7O0VBUkQ7SUFJQyxtQkFBQTtFQVFBO0VBWEE7SUFDRSxlQUFBO0VBYUY7O0VBVEQ7SUFDQyxZQUFBO0lBQ0EsV0FBQTtFQVlBOztFQVZEO0lBQ0MsVUFBQTtFQWFBO0FBQ0Y7QUN2VkE7RUFDRSwyQkFBQTtFQUNBLDRzRUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7QUR3VkY7QUNyVkE7RUFDRSw2QkFBQTtBRHVWRjtBQ3JWQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkJBQUE7RUFDQSxVQUFBO0FEd1ZGO0FDdFZBO0VBQ0Usc0JBQUE7QUR5VkY7QUN2VkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FEMFZGO0FDeFZBOztFQUVFLGlDQUFBO0FEMlZGO0FDelZBO0VBQ0UsZUFBQTtBRDRWRjtBQzFWQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBRDZWRjtBQzNWQTtFQUNFLG9DQUFBO0VBQ0EsY0FBQTtBRDhWRjtBQzVWQTtFQUNFLG1CQUFBO0FEK1ZGO0FDOVZFO0VBQ0UsbUJBQUE7QURnV0o7QUM3VkE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDhCQUFBO0FEZ1dGO0FDOVZBO0VBQ0Usa0JBQUE7QURpV0Y7QUMvVkEsZ0JBQUE7QUFFRTs7RUFFRSxZQUFBO0FEaVdKO0FDOVZFO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtBRGdXSjtBQzVWQSxlQUFBO0FBQ0E7RUFDRSxtQkFBQTtBRCtWRjtBQzlWRTs7Ozs7OztFQU9FLDRCQUFBO0FEZ1dKO0FDOVZFOzs7O0VBSUUsa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxXQUFBO0FEZ1dKO0FDOVZFO0VBQ0UsZ0ZBQUE7QURnV0o7QUM5VkU7RUFDRSxpRkFBQTtBRGdXSjtBQzlWRTtFQUNFLCtFQUFBO0FEZ1dKO0FDOVZFO0VBQ0Usa0ZBQUE7QURnV0o7QUM1VkEsYUFBQTtBQUVFO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQXVCLGdCQUFBO0VBQ3ZCLHdCQUFBO0VBQTBCLG1DQUFBO0FEZ1c5QjtBQy9WSTtFQUNFLGFBQUE7QURpV047QUM5VkU7RUFDRSw4QkFBQTtBRGdXSjtBQzVWRTtFQUNFLDZCQUFBO0FEK1ZKO0FDM1ZFO0VBQ0UsNkJBQUE7QUQ4Vko7QUFsSkE7RUFDQyxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQXFKRDtBQW5KQTtFQUNDLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBc0pEO0FBbkpBO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtBQXNKRDtBQXBKQTtFQUNDLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUF1SkQ7QUFySkE7RUFDQyxpQkFBQTtBQXdKRDtBQXJKQTtFQUNDLFdBQUE7RUFFQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0FBdUpEO0FBbkpBO0VBQ0MsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXNKRDtBQXBKQTtFQUNDLFVBQUE7QUF1SkQ7QUFySkE7RUFDQyxVQUFBO0FBd0pEIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1TaW50b255JztcclxuKiB7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZDogIzIyMjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxuXHRmb250LWZhbWlseTogJ1NpbnRvbnknLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtd2VpZ2h0OiAzMDA7XHJcblx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdG1hcmdpbjogMDtcclxufVxyXG5cclxucHJle1xyXG5cdHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG4vKiBzcGFue1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG59ICovXHJcblxyXG4jbmF2YmFyRGl2e1xyXG5cdHBvc2l0aW9uOiBmaXhlZDsgXHJcblx0ei1pbmRleDogMTAwOyBcclxuXHR3aWR0aDogMTAwdnc7IFxyXG5cdGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyBcclxuXHRkaXNwbGF5OiBmbGV4OyBcclxuXHRmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTsgXHJcblx0Zm9udC1zaXplOiAyNXB4OyBcclxuXHRmb250LWZhbWlseTogJ1NpbnRvbnknLCBzYW5zLXNlcmlmOyBcclxuXHRsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cdGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLnNlY3Rpb24ge1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0d2lkdGg6IDEwMCU7XHJcblx0aGVpZ2h0OiAxMDB2aDtcclxuXHRsZXR0ZXItc3BhY2luZzogNHB4O1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0Y2xpcDogcmVjdCgwLCBhdXRvLCBhdXRvLCAwKTtcclxuXHQuZml4ZWQge1xyXG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogNTAlO1xyXG5cdFx0bGVmdDogNTAlO1xyXG5cdH1cclxuXHQud2hpdGUge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0fVxyXG59XHJcblxyXG5AZm9yICRpIGZyb20gMSB0aHJvdWdoIDUge1xyXG5cdC5zZWN0aW9uOm50aC1jaGlsZCgjeyRpICsgMX0pIHtcclxuXHRcdHotaW5kZXg6ICgkaSk7XHJcblx0XHRAaWYoJGk9PTEpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogIzA2MDYwNjtcclxuXHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdHRvcDogMDtcclxuXHRcdH1cclxuXHRcdEBlbHNlIGlmKCRpPT0yKSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdHRvcDogKDEwMHZoICogKCRpIC0gMSkpO1xyXG5cdFx0fVxyXG5cdFx0QGVsc2UgaWYoJGk9PTMpIHtcclxuXHRcdFx0YmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoIzIwNTk4MywgIzBBMjc0Mik7XHJcblx0XHRcdGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcblx0XHRcdC8vYmFja2dyb3VuZDotd2Via2l0LXJhZGlhbC1ncmFkaWVudCgjMjA1OTgzLCAjMEEyNzQyKTsgYmFja2dyb3VuZDpyYWRpYWwtZ3JhZGllbnQoIzIwNTk4MywgIzBBMjc0Mik7IG92ZXJmbG93OmhpZGRlbjsgXHJcblx0XHRcdGNvbG9yOiAjZmZmO1xyXG5cdFx0XHR0b3A6ICgxMDB2aCAqICgkaSAtIDEpKTtcclxuXHRcdH1cclxuXHRcdEBlbHNlIGlmKCRpPT00KSB7XHJcblx0XHRcdGJhY2tncm91bmQtY29sb3I6IHJnYigyMzksIDIzOSwgMjM5KTtcclxuXHRcdFx0Y29sb3I6ICMwMDA7XHJcblx0XHRcdHRvcDogKDEwMHZoICogKCRpIC0gMSkpO1xyXG5cdFx0fVxyXG5cdFx0QGVsc2UgaWYoJGk9PTUpIHtcclxuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOSwgMjM5LCAyMzkpO1xyXG5cdFx0XHRjb2xvcjogIzAwMDtcclxuXHRcdFx0dG9wOiAoMTAwdmggKiAoJGkgLSAxKSk7XHJcblx0XHR9XHJcblx0XHQuZml4ZWQge1xyXG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbi5hcnJheWxpbmt7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuXHRjb2xvcjogcmdiYSgyNTMsIDE0OSwgOTAsIDAuOCk7XHJcbn1cclxuXHJcbi52YXItaGlnaGxpZ2h0e1xyXG5cdGNvbG9yOiAjQzBBRDYwO1xyXG59XHJcblxyXG4uc3RyaW5nLWhpZ2hsaWdodHtcclxuXHRjb2xvcjogcmdiYSgyNTMsIDE0OSwgOTAsIDAuOCk7XHJcbn1cclxuXHJcbmgxe1xyXG5cdG1hcmdpbi10b3A6IDA7XHJcblx0Zm9udC1zaXplOjE0MHB4O1xyXG59XHJcblxyXG4jdHlwZXdyaXRlcntcclxuXHRmb250LXNpemU6IDJlbTtcclxuXHRtYXJnaW46IDA7XHJcblx0Zm9udC1mYW1pbHk6IFwiQ291cmllciBOZXdcIjtcclxuXHJcblx0JjphZnRlcntcclxuXHRjb250ZW50OiBcInxcIjtcclxuXHRhbmltYXRpb246IGJsaW5rIDUwMG1zIGxpbmVhciBpbmZpbml0ZSBhbHRlcm5hdGU7XHJcblx0fVxyXG59XHJcblxyXG4uaWZyYW1lUHJvamVjdHN7XHJcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IFxyXG5cdGxlZnQ6IDUwJTsgXHJcblx0dG9wOiA1MCU7IFxyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTsgXHJcblx0ei1pbmRleDogMDtcclxufVxyXG5cclxuLmZpZ3VyZVByb2plY3Rze1xyXG5cdGhlaWdodDogMTAwJTsgXHJcblx0d2lkdGg6IDEwMCU7IFxyXG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IFxyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTsgXHJcblx0YmFja2dyb3VuZC1zaXplOiBjb250YWluOyBcclxuXHRvdmVyZmxvdzogaGlkZGVuOyBcclxuXHR6LWluZGV4OiAxOyBcclxuXHRtYXJnaW46IDA7IFxyXG5cdHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiAvKiBDdXJzb3IgU3R5bGluZyAqL1xyXG5cclxuIC5vdXRwdXQge1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgbW9ub3NwYWNlO1xyXG5cdGNvbG9yOndoaXRlO1xyXG5cdGgxIHtcclxuXHQgIGZvbnQtc2l6ZTo2MHB4O1xyXG5cdCAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHR9XHJcbiAgfVxyXG5cclxuLmN1cnNvcjo6YWZ0ZXIge1xyXG5cdGNvbnRlbnQ6Jyc7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0bWFyZ2luLWxlZnQ6M3B4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblx0YW5pbWF0aW9uLW5hbWU6Ymxpbms7XHJcblx0YW5pbWF0aW9uLWR1cmF0aW9uOjAuNXM7XHJcblx0YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcbmgxLmN1cnNvcjo6YWZ0ZXIge1xyXG5cdGhlaWdodDo0MHB4O1xyXG5cdHdpZHRoOjEzcHg7XHJcbn1cclxucC5jdXJzb3I6OmFmdGVyIHtcclxuXHRoZWlnaHQ6MTNweDtcclxuXHR3aWR0aDo2cHg7XHJcbn0gXHJcblxyXG4ucG9zdCB7XHJcblx0bWFyZ2luOiAyMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiBcIkRNIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuXHQvL2Rpc3BsYXk6IGZsZXg7XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdGNvbG9yOiBpbmhlcml0O1xyXG5cdC8vbWF4LXdpZHRoOiA0MDBweDtcclxuXHRtaW4td2lkdGg6IDI1MHB4O1xyXG5cdHdpZHRoOiAyMCU7XHJcblx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRwYWRkaW5nOiAxLjVyZW07XHJcblx0Ym94LXNoYWRvdzogaW5zZXQgMCAwIDAgNHB4ICMwMDAsIGluc2V0IC00cHggLTRweCAwIDZweCAjQ0NDO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcblx0Y3Vyc29yOiBwb2ludGVyOyBcclxuXHQmOmJlZm9yZSB7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGNvbnRlbnQ6IFwiXCI7XHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0aGVpZ2h0OiAxMDAlO1xyXG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogMCBib3R0b20gMDtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGVZKDApO1xyXG5cdFx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG5cdH1cclxuXHRcclxuXHQmOmhvdmVyIHtcclxuXHRcdC5wb3N0LXRpdGxlIHtcclxuXHRcdFx0Y29sb3I6ICNGRkY7XHJcblx0XHR9XHJcblx0XHQmOmJlZm9yZSB7XHJcblx0XHRcdHRyYW5zZm9ybTogc2NhbGVZKDEpO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuLnBvc3QtdGl0bGUge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmb250LXNpemU6IDJyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDcwMDtcclxuXHRsaW5lLWhlaWdodDogMS4zMzM7XHJcblx0dHJhbnNpdGlvbjogLjRzIGVhc2Utb3V0O1xyXG59XHJcblxyXG4uaW5zdGEge1xyXG5cdCY6YmVmb3JlIHtcdFx0XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZGYzZjc0O1xyXG5cdH1cclxufVxyXG5cclxuLmZhY2Vib29rIHtcclxuXHQmOmJlZm9yZSB7XHRcdFxyXG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzNiNTk5ODtcclxuXHR9XHJcbn1cclxuXHJcbi5lbWFpbCB7XHJcblx0JjpiZWZvcmUge1x0XHRcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICNFQTQzMzU7XHJcblx0fVxyXG59XHJcblxyXG4ubGluayB7XHJcblx0JjpiZWZvcmUge1x0XHRcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICMwZTc2YTg7XHJcblx0fVxyXG59XHJcblxyXG4uY29udGFjdGV4dCB7XHJcblx0Zm9udC1zaXplOiA0MHB4OyBcclxuXHRtYXJnaW4tYm90dG9tOiAxNTBweDtcclxufVxyXG5cclxuXHJcblxyXG4uaGlkZSB7XHJcbiAgICBhbmltYXRpb246IGZhZGUtb3V0IDFzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xyXG59XHJcbi5zaG93IHtcclxuICAgIGFuaW1hdGlvbjogZmFkZS1pbiAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcclxufVxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW57XHJcbiAgICAgMCV7XHJcbiAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICBcclxuICAgICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICB9XHJcbiB9XHJcblxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5re1xyXG5cdDAle29wYWNpdHk6IDA7fVxyXG5cdDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkAtbW96LWtleWZyYW1lcyBibGlua3tcclxuXHQwJXtvcGFjaXR5OiAwO31cclxuXHQxMDAle29wYWNpdHk6IDE7fVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJsaW5re1xyXG5cdDAle29wYWNpdHk6IDA7fVxyXG5cdDEwMCV7b3BhY2l0eTogMTt9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTcwMHB4KSBhbmQgKG1pbi13aWR0aDogNjAxcHgpe1xyXG4gICAgI3R5cGV3cml0ZXJ7XHJcblx0XHRmb250LXNpemU6IDFlbTtcclxuXHR9XHJcblx0Lm91dHB1dCB7XHJcblx0XHRoMSB7XHJcblx0XHQgIGZvbnQtc2l6ZTozMHB4O1xyXG5cdFx0fVxyXG5cdH1cclxuXHQjbmF2YmFyRGl2e1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdH1cclxuXHJcblx0LmNvbnRhY3RleHQge1xyXG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHR9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuXHQuY29udGFjdGV4dCB7XHJcblx0XHRmb250LXNpemU6IDMwcHg7IFxyXG5cdFx0bWFyZ2luLWJvdHRvbTogNDVweDtcclxuXHR9XHJcblx0I3R5cGV3cml0ZXIge1xyXG5cdFx0Zm9udC1zaXplOiAwLjllbTtcclxuXHR9XHJcblx0aDF7XHJcblx0XHRmb250LXNpemU6IDcwcHg7XHJcblx0fVxyXG5cdCNuYXZiYXJEaXZ7XHJcblx0XHRmb250LXNpemU6IDEwcHg7XHJcblx0fVxyXG5cdC5vdXRwdXQge1xyXG5cdFx0aDEge1xyXG5cdFx0ICBmb250LXNpemU6MzBweDtcclxuXHRcdH1cclxuXHRcdG1hcmdpbi1ib3R0b206IDUwcHg7XHJcblx0fVxyXG5cdGgxLmN1cnNvcjo6YWZ0ZXIge1xyXG5cdFx0aGVpZ2h0OjI0cHg7XHJcblx0XHR3aWR0aDoxMHB4O1xyXG5cdH1cclxuXHQucG9zdCB7XHJcblx0XHRwYWRkaW5nOiAwO1xyXG5cdH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5AaW1wb3J0IFwifnN3aXBlci9zd2lwZXJcIjtcclxuLy9AaW1wb3J0IFwifnN3aXBlci9jb21wb25lbnRzL3BhZ2luYXRpb24vcGFnaW5hdGlvblwiO1xyXG4udGltZXN0YW1wIHtcclxuXHR3aWR0aDogMTAwJTsgLy8gZm9yIGZsZXhpYmxlIHdpZHRoXHJcblx0bWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHRwYWRkaW5nOiAwcHggNDBweDtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRmb250LXdlaWdodDogMTAwOyBcclxuICB9XHJcbi5zdGF0dXMge1xyXG5cdHBhZGRpbmc6IDBweCA0MHB4O1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0Ym9yZGVyLXRvcDogNHB4IHNvbGlkICMzZTcwZmY7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluIDtcclxufVxyXG5cclxuLnN0YXR1cyBzcGFuIHtcclxuXHRmb250LXdlaWdodDogNjAwO1xyXG5cdHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5zdGF0dXMgc3BhbjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICcnO1xyXG5cdHdpZHRoOiAyNXB4O1xyXG5cdGhlaWdodDogMjVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZThlZWZmO1xyXG5cdGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcblx0Ym9yZGVyOiA0cHggc29saWQgIzNlNzBmZjtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMTVweDtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDEycHgpOyAvLyBhbGlnbiBjaXJjbGUgdG8gY2VudGVyXHJcblx0dHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW47XHJcbn1cclxuLnN3aXBlci1jb250cm9sIHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHQvL2hlaWdodDogMjUwcHg7XHJcblx0bWFyZ2luOiA1MHB4IDA7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHRwYWRkaW5nOiAwIDIwcHggMzBweCAyMHB4O1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxuXHQvL2ZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcblx0Ly9mb250LXNpemU6IGxhcmdlO1xyXG59XHJcbi5zd2lwZXItc2xpZGUge1xyXG5cdHdpZHRoOiAyMDBweDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zd2lwZXItc2xpZGU6bnRoLWNoaWxkKDJuKSB7XHJcblx0d2lkdGg6IDQwJTtcclxufVxyXG4uc3dpcGVyLXNsaWRlOm50aC1jaGlsZCgzbikge1xyXG5cdHdpZHRoOiAyMCU7XHJcbn0iLCJAaW1wb3J0ICdzd2lwZXItdmFycy5zY3NzJztcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnc3dpcGVyLWljb25zJztcbiAgc3JjOiB1cmwoJ2RhdGE6YXBwbGljYXRpb24vZm9udC13b2ZmO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCBkMDlHUmdBQkFBQUFBQVpnQUJBQUFBQUFEQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkdSbFJOQUFBR1JBQUFBQm9BQUFBY2k2cUhrVWRFUlVZQUFBV2dBQUFBSXdBQUFDUUFZQUJYUjFCUFV3QUFCaFFBQUFBdUFBQUFOdUFZNyt4SFUxVkNBQUFGeEFBQUFGQUFBQUJtMmZQY3pVOVRMeklBQUFIY0FBQUFTZ0FBQUdCUDlWNVJZMjFoY0FBQUFrUUFBQUNJQUFBQll0NkYwY0JqZG5RZ0FBQUN6QUFBQUFRQUFBQUVBQkVCUkdkaGMzQUFBQVdZQUFBQUNBQUFBQWovL3dBRFoyeDVaZ0FBQXl3QUFBRE1BQUFEMk1IdHJ5Vm9aV0ZrQUFBQmJBQUFBREFBQUFBMkUyK2VvV2hvWldFQUFBR2NBQUFBSHdBQUFDUUM5Z0R6YUcxMGVBQUFBaWdBQUFBWkFBQUFyZ0prQUJGc2IyTmhBQUFDMEFBQUFGb0FBQUJhRlFBVUdHMWhlSEFBQUFHOEFBQUFId0FBQUNBQWNBQkFibUZ0WlFBQUEvZ0FBQUU1QUFBQ1h2RmRCd2x3YjNOMEFBQUZOQUFBQUdJQUFBQ0U1czc0aFhqYVkyQmtZR0FBWXBmNUh1L2orVzIrTW5Bek1ZREF6YVg2UWpENi80Ly9CeGo1R0E4QXVSd01ZR2tBUHl3TDEzamFZMkJrWUdBODhQOEFneDRqKy84ZlFEWWZBMUFFQldnREFJQjJCT29BZU5wallHUmdZTkJoNEdkZ1lnQUJFTW5JQUJKellOQURDUUFBQ1dnQXNRQjQybU5nWWZ6Q09JR0JsWUdCMFljeGpZR0J3UjFLZjJXUVpHaGhZR0JpWUdWbWdBRkdCaVFRa09hYXd0REFvTUJReFhqZy93RUdQY1lEREE0d05VQTJDQ2d3c0FBQU80RUw2Z0FBZU5wajJNMGd5QUFDcXhnR05XQmtaMkQ0L3dNQSt4a0RkZ0FBQUhqYVkyQmdZR2FBWUJrR1JnWVFpQUh5R01GOEZnWUhJTTNEd01IQUJHUXJNT2d5V0RMRU0xVDkvdzhVQmZFTWdMekUvLy8vUC81Ly9mL1YveHYrcjRlYUFBZU1iQXh3SVVZbUlNSEVnS1lBWWpVY3NEQXdzTEt4YzNCeWNmUHc4akVRQS9nWkJBU0ZoRVZFeGNRbEpLV2taV1RsNUJVVWxaUlZWTlhVTlRRWkJnTUFBTVIrRStnQUVRRkVBQUFBS2dBcUFDb0FOQUErQUVnQVVnQmNBR1lBY0FCNkFJUUFqZ0NZQUtJQXJBQzJBTUFBeWdEVUFONEE2QUR5QVB3QkJnRVFBUm9CSkFFdUFUZ0JRZ0ZNQVZZQllBRnFBWFFCZmdHSUFaSUJuQUdtQWJJQnpnSHNBQUI0MnUyTk1RNkNVQXlHVzU2OHg5QW5lWVlnbTRNSmJoS0ZhRXhJT0FWWDhBcGV3U3Q0QmljNEFmZUFpZDNWT0JpeER4ZlBZRXphNU8rWGZpMDRZQURnZ2lVSVVMQ3VFSks4VmhPNGJTdnBkbmt0SEk1UUNZdGRpMnNsOFpuWGFIbHFVck5LemRLY1Q4Y2pscStyd1pTdklWY3pOaWV6c2ZuUC91em5tZlBGQk5PRE0ySzdNVFE0NVlFQVpxR1A4MUFtR0djRjNpUHFPb3AwcjFTUFRhVGJWa2ZVZTRIWGo5N3dZRSt5TndXWXh3V3U0djF1Z1dIZ28zUzFYZFpFVnFXTTdFVDBjZm5MR3hXZmtnUjQybzJQdldyRE1CU0ZqL0lITGFGMHpLalJnZGlWTXdTY05SQW9XVW9INzhZMmljQi95SVkwOUFuNkFIMkJkdS9VQit5eG9wWXNoUWlFdm52dTBkVVJnRHQ4UWVDOFBEdzdGcGppM2ZFQTR6L1BFSjZZT0I1aEtoNGRqM0V2WGh4UHFIL1NLVVkzcko3c3JaNEZabmgxUE1BdFBod1A2ZmwyUE1KTVBEZ2VRNHJZOFlUNkd6YW8wZUFFQTQwOUR1Z2dtVG5Gbk9jU0NpRWlMTWd4Q2lUSTZDcTVEWlVkM1FtcDEwdk8wTGFMVGQyY2pONGZPdW1sYzdsVVliU1FjWkZrdXRSRzdnNkpLWkt5MFJtZExZNjgwQ0RuRUorVU1rcEZGZTFSTjdueGRWcFhyQzRhVHRuYXVyT25ZZXJjWmcyWVZtTE4vZC9nY3pmRWltckUvZnMvYk91cTI5Wm1uOHRsb09SYVhnWmdHYTc4eU85L2NuWG0yQnBhR3ZxMjVEdjlTNEU5KzVTSWM5UHF1cEpLaFlGU1NsNDcrUWNyMW1ZTkFBQUFlTnB0dzBjS3drQUFBTURaSkE4UTdPVUp2a0xzUGZaNnpGVkVSUHk4cUhoMllFUiszaS9CUDgzdklCTEx5U3NvS2ltcnFLcXBhMmhwNitqcTZSc1lHaG1ibUpxWlN5MHNyYXh0Yk8zc0hSeWRuRU1VNHVSNnl4N0pKWHZlUDdXckR5Y0FBQUFBQUFILy93QUNlTnBqWUdSZ1lPQUJZaGtnWmdKQ1pnWk5Ca1lHTFFadElKc0ZMTVlBQUF3M0FMZ0FlTm9saXpFS2dEQVFCQ2NoUmJDMnNGRVIwWUQ2cVZRaUJDdi9IOWV6R0k2WjVYQkF3OENCSy9tNWlRUVZhdVZiWExuT3JNWnYyb0xkS0ZhOFBqdXJ1MmhKekdhYm1PU0x6Tk16dnV0cEIzTjQybU5nWkdCZzRHS1FZekJoWU14SkxNbGo0R0JnQVlvdy9QL1BBSkpoTE02c1NvV0tmV0NBQXdEQWpnYlJBQUI0Mm1OZ1lHQmtBSUliQ1pvNUlQcm1VbjBoR0EwQU84RUZUUUFBJylcbiAgICBmb3JtYXQoJ3dvZmYnKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG46cm9vdCB7XG4gIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjeyR0aGVtZUNvbG9yfTtcbn1cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICAvKiBGaXggb2YgV2Via2l0IGZsaWNrZXJpbmcgKi9cbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5zd2lwZXItd3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgei1pbmRleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWFuZHJvaWQgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItd3JhcHBlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwLCAwKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLW11bHRpcm93ID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3ctY29sdW1uID4gLnN3aXBlci13cmFwcGVyIHtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci1jb250YWluZXItZnJlZS1tb2RlID4gLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2Utb3V0O1xuICBtYXJnaW46IDAgYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLXBvaW50ZXItZXZlbnRzIHtcbiAgdG91Y2gtYWN0aW9uOiBwYW4teTtcbiAgJi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsIHtcbiAgICB0b3VjaC1hY3Rpb246IHBhbi14O1xuICB9XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCB7XG4gICYsXG4gIC5zd2lwZXItc2xpZGUge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuXG4gIC5zd2lwZXItd3JhcHBlciB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBoZWlnaHQ7XG4gIH1cbn1cblxuLyogM0QgRWZmZWN0cyAqL1xuLnN3aXBlci1jb250YWluZXItM2Qge1xuICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xuICAuc3dpcGVyLXdyYXBwZXIsXG4gIC5zd2lwZXItc2xpZGUsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4gIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbiAgLnN3aXBlci1jdWJlLXNoYWRvdyB7XG4gICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1sZWZ0LFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTA7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbiAgfVxuICAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3Age1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG4gIH1cbiAgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xuICB9XG59XG5cbi8qIENTUyBNb2RlICovXG4uc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSB7XG4gID4gLnN3aXBlci13cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7IC8qIEZvciBGaXJlZm94ICovXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyAvKiBGb3IgSW50ZXJuZXQgRXhwbG9yZXIgYW5kIEVkZ2UgKi9cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuICA+IC5zd2lwZXItd3JhcHBlciA+IC5zd2lwZXItc2xpZGUge1xuICAgIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcbiAgfVxufVxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xuICB9XG59XG4uc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbC5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlIHtcbiAgPiAuc3dpcGVyLXdyYXBwZXIge1xuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xuICB9XG59XG5cblxuXG4iXX0= */"] });
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
        }], salamoosIMG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['salamoosIMG', { static: true }]
        }], angolodellosvarioneIMG: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['angolodellosvarioneIMG', { static: true }]
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