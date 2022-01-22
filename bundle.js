var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
define("utils", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shuffle = exports.loadScript = void 0;
    var head = document.getElementsByTagName('head')[0];
    function loadScript(src) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
        var resolvefn = null;
        var result = new Promise(function (resolve, reject) {
            resolvefn = resolve;
        });
        script.onload = resolvefn;
        script.src = src;
        head.appendChild(script);
        return result;
    }
    exports.loadScript = loadScript;
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    exports.shuffle = shuffle;
});
define("aitools", ["require", "exports", "utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.startCapture = exports.bootstrap = void 0;
    var head = document.getElementsByTagName('head')[0];
    /* does not work otherwise */
    var meta = document.createElement('meta');
    meta.name = 'mphtools-feature';
    meta.content = 'compatibilityUI, cameraPrivacyPopup, compatibilityAutoCheck';
    head.append(meta);
    function bootstrap() {
        var v1 = utils_1.loadScript(window.SURVEY_EMOTIVA_M_URL_permtools);
        var v2 = utils_1.loadScript(window.SURVEY_EMOTIVA_M_URL_ia);
        return Promise.all([v1, v2]);
    }
    exports.bootstrap = bootstrap;
    function startCapture() {
    }
    exports.startCapture = startCapture;
});
define("api", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.postStart = exports.postEnd = exports.getStudy = exports.postError = exports.putCollect = void 0;
    function putFormData(url, data) {
        if (url === void 0) { url = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: 'PUT',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: data // body data type must match "Content-Type" header
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response]; // parses JSON response into native JavaScript objects
                }
            });
        });
    }
    function putData(url, data) {
        if (url === void 0) { url = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: 'PUT',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            redirect: 'follow',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            referrerPolicy: 'no-referrer',
                            body: JSON.stringify(data) // body data type must match "Content-Type" header
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response]; // parses JSON response into native JavaScript objects
                }
            });
        });
    }
    function getData(url, data) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(url, {
                            method: 'GET',
                            mode: 'cors',
                            cache: 'no-cache',
                            credentials: 'same-origin',
                            redirect: 'follow',
                            referrerPolicy: 'no-referrer',
                            body: data // body data type must match "Content-Type" header
                        })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response];
                }
            });
        });
    }
    function callApi(api, url, data) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, api(url, data)];
                    case 1:
                        res = _a.sent();
                        console.log(res);
                        if (res.ok) {
                            resolve(res.json());
                            // putFormData can return 409 if frame is already collected or 404 if the study is ended
                            // If we reject the response the client will try to call putFormData again, which is not needed
                        }
                        else if (api.name == 'putFormData' && (res.status == 409 || res.status == 404)) {
                            resolve(res.json());
                        }
                        else {
                            reject(res.json());
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    }
    function makeUrl(path) {
        if (API_URL.endsWith("/")) {
            path = path.substr(1);
        }
        var url = API_URL + path;
        console.log('URL', url, API_URL);
        return url;
    }
    function putCollect(endpoint, data) {
        // Added support to lambda, save function is deprecated
        return callApi(putFormData, 'https://j7yyaj32p6.execute-api.eu-west-1.amazonaws.com/dev/multipart', data);
    }
    exports.putCollect = putCollect;
    function postError(endpoint, data) {
        return callApi(putData, makeUrl("/study/collect/error"), data);
    }
    exports.postError = postError;
    function getStudy(id) {
        return callApi(getData, makeUrl("/study/live/" + id));
    }
    exports.getStudy = getStudy;
    function postEnd(endpoint, data) {
        return callApi(putData, endpoint + "/end", data);
    }
    exports.postEnd = postEnd;
    function postStart(endpoint, data) {
        return callApi(putData, endpoint + "/start", data);
    }
    exports.postStart = postStart;
});
define("survey", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getQuestionValueByUrl = exports.getSurveyInfo = void 0;
    function getSurveyInfo() {
        if (typeof SGAPI != null) {
            if (SGAPI.surveyData != null) {
                for (var key in SGAPI.surveyData) {
                    var survey = SGAPI.surveyData[key];
                    if (survey.id != null) {
                        return {
                            survey: survey.id, session: survey.session
                        };
                    }
                }
            }
        }
        return { survey: 'ERROR', session: 'ERROR' };
    }
    exports.getSurveyInfo = getSurveyInfo;
    function getQuestionValueByUrl(panelKey) {
        if (typeof SGAPI != null) {
            if (SGAPI.survey != null) {
                var pageid = SGAPI.survey.pageid;
                if (SGAPI.survey.surveyObject != null && SGAPI.survey.surveyObject.questions != null) {
                    for (var id in SGAPI.survey.surveyObject.questions) {
                        var item = SGAPI.survey.surveyObject.questions[id];
                        if (item.type != "HIDDEN" || item.properties == null || item.properties.defaulttext == null)
                            continue;
                        var text = item.properties.defaulttext;
                        for (var inside in text) {
                            if (text[inside] === "[url(\"" + panelKey + "\")]") {
                                //found!
                                var surveyid = getSurveyInfo().survey;
                                var elemid = "sgE-" + surveyid + "-" + pageid + "-" + id + "-element";
                                var elem = document.querySelector("#" + elemid);
                                if (elem != null && elem.value != null && elem.value != '') {
                                    return elem.value;
                                }
                            }
                        }
                    }
                }
            }
            if (SGAPI.surveyData != null) {
                for (var key in SGAPI.surveyData) {
                    var survey = SGAPI.surveyData[key];
                    if (survey.questions != null && survey.pages != null) {
                        for (var id in survey.questions) {
                            var item = survey.questions[id];
                            if (item.type != "HIDDEN" || item.properties == null || item.properties.defaulttext == null)
                                continue;
                            var text = item.properties.defaulttext;
                            for (var inside in text) {
                                if (text[inside] === "[url(\"" + panelKey + "\")]") {
                                    //found!
                                    if (survey.pages[item.page] == null)
                                        continue; // page does not exists?
                                    var pageid = survey.pages[item.page].id;
                                    var surveyid = getSurveyInfo().survey;
                                    var elemid = "sgE-" + surveyid + "-" + pageid + "-" + id + "-element";
                                    var elem = document.querySelector("#" + elemid);
                                    if (elem != null && elem.value != null && elem.value != '') {
                                        return elem.value;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
    exports.getQuestionValueByUrl = getQuestionValueByUrl;
});
define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
// multi part format
// json: string of the above interface, type application/json
// data: image/video part of the capture
define("stimulus", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.renderVideo = exports.renderHtml = exports.renderImage = exports.renderBlank = exports.renderTarget = void 0;
    function renderTarget(selector) {
        var target = document.createElement('div');
        var wrapper = document.querySelector(selector);
        if (!wrapper) {
            wrapper = document.body;
        }
        wrapper.appendChild(target);
        target.style.display = 'flex';
        target.style.justifyItems = 'center';
        target.style.alignItems = 'center';
        target.style.justifyContent = 'center';
        target.style.width = '100%';
        target.style.maxHeight = '70vh';
        target.style.height = '100vh';
        target.setAttribute("oncontextmenu", "return false;"); // Needed to disable right click context menu
        return target;
    }
    exports.renderTarget = renderTarget;
    function renderBlank(initCallback, consumeCallback, target, getData) {
        /*let text = document.createElement('h3')
        let button = document.createElement('button')
        button.innerText = 'continua'
        button.onclick = consumeCallback
        text.innerText = 'Premi il pulsante continua quando sei pronto per proseguire'
        target.append(text,button)
        return [text,button]*/
        initCallback();
    }
    exports.renderBlank = renderBlank;
    function renderImage(initCallback, consumeCallback, stimulus, target) {
        var src;
        var container = document.createElement('div');
        if (stimulus) {
            if (typeof stimulus === 'object' && "src" in stimulus) {
                if (typeof stimulus.src !== "string") {
                    src = stimulus.src.map(function (s) {
                        return {
                            type: s.mimeType,
                            src: s.url
                        };
                    });
                }
            }
        }
        console.log('image stimulus', src[0].src);
        container.innerHTML = "\n     <img id=\"image-stimulus\" src=\"" + src[0].src + "\" style=\"width: 100%;height: auto;object-fit: contain\">\n     ";
        var size = 100;
        var ww = document.documentElement.clientWidth;
        if (ww < 800) {
            size = 100;
        }
        container.style.maxWidth = IMAGE_MAX_SIZE + "px";
        container.style.width = size + "%";
        container.style.height = '100%';
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        target.append(container);
        document.getElementById('image-stimulus').onload = function () {
            initCallback();
        };
        return [container];
    }
    exports.renderImage = renderImage;
    function renderHtml(initCallback, consumeCallback, stimulus, target) {
        var src;
        var container = document.createElement('div');
        var isFile = false;
        var Fullscreen = false;
        if (stimulus) {
            if (stimulus["website"] && stimulus["website"].trim().length > 0) {
                src = stimulus["website"];
            }
            else {
                if (typeof stimulus === 'object' && "src" in stimulus) {
                    if (typeof stimulus.src !== "string") {
                        src = stimulus.src.map(function (s) {
                            return {
                                type: s.mimeType,
                                src: s.url
                            };
                        });
                        isFile = true;
                        if (!src[0].type.includes('text')) {
                            throw new Error();
                        }
                        src = src[0].src;
                    }
                }
            }
        }
        function getIframe() {
            return container.getElementsByClassName('html-stimulus').item(0);
        }
        function getFullScreenBtn() {
            return container.getElementsByClassName('html-fs-btn').item(0);
        }
        function getHtmlWrapper() {
            return document.getElementById('html-wrapper');
        }
        function setFullScreen() {
            var wrap = getHtmlWrapper();
            var btn = getFullScreenBtn();
            if (Fullscreen) {
                wrap.style.position = 'initial';
                btn.textContent = 'fullscreen';
                document.body.style.overflow = 'auto';
                Fullscreen = false;
            }
            else {
                wrap.style.position = 'absolute';
                wrap.style.left = '0px';
                wrap.style.top = '0px';
                btn.textContent = 'exit fullscreen';
                window.scrollTo(0, 0);
                document.body.style.overflow = 'hidden';
                Fullscreen = true;
            }
        }
        if (isFile) {
            fetch(src)
                .then(function (r) {
                if (r.ok) {
                    r.text().then(function (t) {
                        target.append(container);
                        container.innerHTML = "\n                        <div id=\"html-wrapper\" style=\"width: 100%;height: 100%;border: none\">\n                         <button type='button' class=\"html-fs-btn\">Fullscreen</button>\n                         <iframe class=\"html-stimulus\" style=\"width: 100%;height: 100%;border: none\"> \n                        </div>";
                        var iframe = container.getElementsByClassName('html-stimulus').item(0);
                        console.log('HTML stimulus', iframe);
                        var iframeDoc = iframe.contentDocument;
                        iframeDoc.open();
                        iframeDoc.write(t);
                        iframeDoc.close();
                        iframe.onload = function () {
                            initCallback();
                        };
                        container.style.width = "100%";
                        container.style.height = '100%';
                        getFullScreenBtn().onclick = setFullScreen;
                        setFullScreen();
                    });
                }
                else {
                    throw new Error();
                }
            }).catch(function () {
                throw new Error();
            });
        }
        else {
            target.append(container);
            container.innerHTML = "\n             <div id=\"html-wrapper\" style=\"width: 100%;height: 100%;border: none\">\n                <button type='button' class=\"html-fs-btn\">Fullscreen</button>\n                <iframe class=\"html-stimulus\" src=\"" + src + "\" style=\"width: 100%;height: 100%;border: none\">\n            </div>\n      \n             ";
            var iframe = getIframe();
            iframe.onload = function () {
                initCallback();
            };
            iframe.onerror = function () {
                consumeCallback();
            };
            container.style.width = "100%";
            container.style.height = '100%';
            getFullScreenBtn().onclick = setFullScreen;
            setFullScreen();
        }
        return [container];
    }
    exports.renderHtml = renderHtml;
    function renderVideo(initCallback, consumeCallback, stimulus, target, getData, onTimeUpdate, size, fakeDelay) {
        if (size === void 0) { size = 100; }
        if (fakeDelay === void 0) { fakeDelay = null; }
        try {
            videojs('video-player').dispose();
        }
        catch (_a) {
        }
        var ww = document.documentElement.clientWidth;
        console.log(ww, 'window width');
        if (ww < 800) {
            size = 100;
        }
        var container = document.createElement('div');
        container.style.maxWidth = VIDEO_MAX_SIZE + "px";
        container.style.width = size + "%";
        container.style.height = '100%';
        if (fakeDelay === true) {
            fakeDelay = 5000;
        }
        if (fakeDelay === 0) {
            fakeDelay = null;
        }
        // if (fakeDelay) {
        //     container.innerHTML = `
        //  <video id="video-player" preload="auto" class="video-js"></video>
        //  `
        // } else {
        container.innerHTML = "\n     <video id=\"video-player\" preload=\"auto\" class=\"video-js\" autoplay></video>\n     ";
        // }
        target.append(container);
        var src;
        if (stimulus) {
            if (typeof stimulus === 'object' && "src" in stimulus) {
                if (typeof stimulus.src !== "string") {
                    src = stimulus.src.map(function (s) {
                        return {
                            type: s.mimeType,
                            src: s.url
                        };
                    });
                }
            }
            if (typeof stimulus === 'string') {
                src = stimulus;
            }
        }
        var video = videojs('video-player');
        video.fluid(true);
        console.log('video player', video);
        if (src) {
            video.src(src);
        }
        if (fakeDelay != null)
            video.autoplay(true);
        video.on('play', function () {
            if (fakeDelay) {
                video.pause();
                video.addClass('vjs-waiting');
                return;
            }
            initCallback();
        });
        video.on('ended', function () {
            consumeCallback();
        });
        if (onTimeUpdate) {
            video.on('timeupdate', function () {
                if (fakeDelay) {
                    video.pause();
                    video.addClass('vjs-waiting');
                    return;
                }
                onTimeUpdate(video.currentTime());
            });
        }
        if (getData) {
            getData(function () {
                return {
                    currentTime: video.currentTime(),
                    video: video
                };
            });
        }
        if (fakeDelay) {
            video.addClass('vjs-waiting');
            var interval_1 = setInterval(function () {
                video.addClass('vjs-waiting');
            }, 100);
            setTimeout(function () {
                video.removeClass('vjs-waiting');
                video.autoplay(true);
                video.play();
                clearInterval(interval_1);
                fakeDelay = null;
            }, fakeDelay);
        }
        else {
            fakeDelay = null;
        }
        return [container];
    }
    exports.renderVideo = renderVideo;
});
define("fakeData", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fakeStudy = void 0;
    exports.fakeStudy = {
        creation_date: Date.now(),
        name: 'study',
        survey: '6052620',
        collect: {
            type: 'video',
            w: 500,
            h: 500,
            fps: 1,
            destination: 'http://127.0.0.1:5000/api/v1.0.0/study/collect'
        },
        quota: 10,
        pannel: {
            quota: {
                completed: '',
                deny: '',
            },
            key: 'm',
            production: {
                completed: '',
                deny: '',
            },
            test: {
                completed: '',
                deny: '',
            }
        },
        tutorial: {
            src: [
                {
                    mimeType: 'video/mp4',
                    url: 'https://www.whitelabel.it/maestria15.mp4',
                    w: 0,
                    h: 0,
                    id: 'id',
                }
            ],
            // used to show the permission input
            cameraPermissionTimeStart: 5000,
            cameraPermissionTimeEnd: 10000,
        },
        stimulusGroup: {
            group: 'name',
            playlistOrder: [1, 2, 3, 'second'],
            playlist: [
                {
                    type: "blank",
                    id: 1,
                    src: [
                        {
                            mimeType: 'video/mp4',
                            url: 'https://www.whitelabel.it/maestria15.mp4',
                            w: 0,
                            h: 0,
                            id: 'id',
                        }
                    ],
                    timer: 3000,
                    collectInterval: {
                        start: 4000,
                        stop: 0,
                    }
                },
                {
                    type: "video",
                    id: 2,
                    src: [
                        {
                            mimeType: 'video/mp4',
                            url: 'https://www.whitelabel.it/maestria15.mp4',
                            w: 0,
                            h: 0,
                            id: 'id',
                        }
                    ],
                    timer: 3000,
                    collectInterval: {
                        start: 0,
                        stop: 2000
                    }
                },
                {
                    type: "video",
                    id: 3,
                    src: [
                        {
                            mimeType: 'video/mp4',
                            url: 'https://www.whitelabel.it/maestria15.mp4',
                            w: 0,
                            h: 0,
                            id: 'id',
                        },
                        {
                            mimeType: 'video/mp4',
                            url: 'https://www.whitelabel.it/maestria15.mp4',
                            w: 0,
                            h: 0,
                            id: 'id',
                        }
                    ],
                    timer: 0,
                    collectInterval: {
                        start: 10000,
                        stop: 15000
                    }
                },
                {
                    group: 'second',
                    playlistOrder: [2, 1, 3],
                    playlist: [
                        {
                            type: "blank",
                            id: 1,
                            src: [
                                {
                                    mimeType: 'video/mp4',
                                    url: 'https://www.whitelabel.it/maestria15.mp4',
                                    w: 0,
                                    h: 0,
                                    id: 'id',
                                }
                            ],
                            timer: 3000,
                            collectInterval: {
                                start: 4000,
                                stop: 0,
                            }
                        },
                        {
                            type: "video",
                            id: 2,
                            src: [
                                {
                                    mimeType: 'video/mp4',
                                    url: 'https://www.whitelabel.it/maestria15.mp4',
                                    w: 0,
                                    h: 0,
                                    id: 'id',
                                }
                            ],
                            timer: 3000,
                            collectInterval: {
                                start: 0,
                                stop: 2000
                            }
                        },
                    ]
                }
            ]
        }
    };
});
define("storage", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Storage = void 0;
    var Storage = /** @class */ (function () {
        function Storage() {
        }
        Storage.isPersistent = function () {
            Storage.persistent = true;
            try {
                localStorage.setItem('_StorageTestPersistance', '_StorageTestPersistance');
                var value = localStorage.getItem('_StorageTestPersistance');
                localStorage.removeItem('_StorageTestPersistance');
                if (value === '_StorageTestPersistance') {
                    Storage.persistent = true;
                }
                else {
                    Storage.persistent = false;
                }
            }
            catch (e) {
                Storage.persistent = false;
            }
            return Storage.persistent;
        };
        Storage._rewriteAll = function () {
            for (var key in Storage.values) {
                try {
                    localStorage.setItem(key, Storage.values[key]);
                }
                catch (e) {
                    // ignore errors
                }
            }
        };
        Storage.setItem = function (key, value) {
            if (typeof value != 'string') {
                value = JSON.stringify(value);
            }
            Storage.values[key] = value;
            try {
                localStorage.setItem(key, value);
            }
            catch (e) {
                if (Storage.persistent) {
                    try {
                        localStorage.clear();
                    }
                    catch (e) {
                    }
                }
                Storage._rewriteAll(); // try sync local storage
            }
        };
        Storage.getItem = function (key) {
            var _a;
            var stored = null;
            try {
                stored = localStorage.getItem(key);
            }
            catch (e) {
            }
            if (stored != null) {
                if (Storage.values[key] !== stored) {
                    Storage.values[key] = stored;
                }
            }
            return (_a = stored !== null && stored !== void 0 ? stored : Storage.values[key]) !== null && _a !== void 0 ? _a : null;
        };
        Storage.values = {}; // memory caching
        Storage.persistent = true;
        return Storage;
    }());
    exports.Storage = Storage;
    // test if the navigation is anonymous
    Storage.isPersistent();
});
///<amd-module name='index'/>
define("index", ["require", "exports", "utils", "camera", "survey", "stimulus", "api", "fakeData", "storage"], function (require, exports, utils_2, camera_1, survey_1, stimulus_1, api_1, fakeData_1, storage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onStudyError = void 0;
    var storagePrefix = 'surveyIndex';
    var survey;
    //event that trigger the next stimulus.
    var onConsumedStimulus;
    //event that tels when the stimulus is ready.
    var onInitializedStimulus;
    var currentStimulus;
    var currentGroup;
    var stimulusData;
    var indexId = getIndex();
    var frameindex = 0; //
    var frameempty = 0;
    var ended = false;
    var currentTarget;
    var MAX_EMPTY_FRAMES = 4;
    if (!window.MediaRecorder) {
        //     document.write(
        //         decodeURI('%3Cscript defer src="/polyfill.js">%3C/script>')
        //         )
        console.log("AHUAFHIUEAHIUFEAQ");
    }
    function increaseIndex(retry) {
        if (!retry) {
            indexId = indexId + 1;
        }
        storage_1.Storage.setItem(storagePrefix + survey_1.getSurveyInfo().session, indexId.toString());
    }
    function getIndex() {
        console.log('get indexId key', storagePrefix + survey_1.getSurveyInfo().session);
        var i = storage_1.Storage.getItem(storagePrefix + survey_1.getSurveyInfo().session);
        console.log('got indexId', Number(i), i);
        if (i != null) {
            console.log('got indexId real', Number(i), i);
            return Number(i);
        }
        else {
            return 0;
        }
    }
    function retry(action, then, delay) {
        action()
            .then(then)
            .catch(function (e) {
            console.error(e);
            setTimeout(function () { return retry(action, then, delay); }, delay);
        });
    }
    function getSurvey() {
        return __awaiter(this, void 0, void 0, function () {
            var surveyId;
            return __generator(this, function (_a) {
                //mockup data
                if (DEBUG) {
                    return [2 /*return*/, fakeData_1.fakeStudy];
                }
                surveyId = survey_1.getSurveyInfo().survey;
                return [2 /*return*/, api_1.getStudy(surveyId)];
            });
        });
    }
    function createFpsInterval(callback, fps, initCall) {
        initCall ? callback() : null;
        if (fps === 0) {
            return;
        }
        return setInterval(callback, 1000 / fps);
    }
    //fetch data of the stimulus
    function getStimulusData() {
        console.log('stimulus data', stimulusData());
        return stimulusData();
    }
    function createDataSendInterval() {
        return setInterval(function () {
            if (dataList.length > 0) {
                //send data to server!
            }
        }, 100);
    }
    var dataList = [];
    var saveDataOnFlightRequests = 0;
    //this fuction will send data to the server and retry in case of errors
    function saveData(data) {
        return __awaiter(this, void 0, void 0, function () {
            var dataCopy, file, formdata;
            return __generator(this, function (_a) {
                console.log('save data', data);
                dataCopy = __assign({}, data);
                file = dataCopy.blob;
                delete dataCopy.blob;
                formdata = new FormData();
                formdata.append('json', JSON.stringify(dataCopy));
                formdata.append('data', file);
                saveDataOnFlightRequests++;
                retry(function () { return api_1.putCollect(survey.collect.destination, formdata); }, function (responce) {
                    console.log('save data response', responce);
                    saveDataOnFlightRequests--;
                }, 1000);
                return [2 /*return*/];
            });
        });
    }
    function getPanelId(key) {
        var finalPanelId = null;
        var storageKey = 'surveypanelid' + key + survey_1.getSurveyInfo().session;
        var panel = storage_1.Storage.getItem(storageKey);
        finalPanelId = panel;
        var panelinput = survey_1.getQuestionValueByUrl(key);
        var queryString = window.location.search;
        var urlParams = new URLSearchParams(queryString);
        var panelquery = urlParams.get(key);
        console.log('PREPANELID', key, panel, panelinput, panelquery);
        // wrong data?
        if (panel != null && panelinput != null && panel != panelinput) {
            storage_1.Storage.setItem(storageKey, panelinput); // save panelinput as safer!
            finalPanelId = panelinput;
        }
        if (panel == null && panelinput != null) {
            storage_1.Storage.setItem(storageKey, panelinput); // save panelinput as missing!
            finalPanelId = panelinput;
        }
        // we have no data, bug?
        if (panel == null && panelinput == null && panelquery != null) {
            storage_1.Storage.setItem(storageKey, panelquery); // save panelquery as missing!
            finalPanelId = panelquery;
        }
        console.log('PANELID', key, finalPanelId);
        return finalPanelId;
    }
    function debugVideo(blob) {
        var urlCreator = window.URL || window.webkitURL;
        var video = urlCreator.createObjectURL(blob);
        var videoTag = document.querySelector('video');
        videoTag.src = video;
    }
    function debugFrame(frame) {
        var urlCreator = window.URL || window.webkitURL;
        var image = urlCreator.createObjectURL(frame);
        var imgtag = document.getElementById('testImage');
        imgtag.src = image;
    }
    var getErrorDataObject = function (reason, native) {
        var _a;
        if (native === void 0) { native = ""; }
        return {
            timestamp: new Date().toISOString(),
            survey: survey_1.getSurveyInfo().survey,
            sessionId: survey_1.getSurveyInfo().session,
            pannelId: (_a = getPanelId(survey.pannel.key)) !== null && _a !== void 0 ? _a : undefined,
            reason: reason,
            native: native
        };
    };
    function getDataCollector(survey, stimulus) {
        return __awaiter(this, void 0, void 0, function () {
            var pannel, collect, getDataObject, start, stop;
            var _this = this;
            return __generator(this, function (_a) {
                pannel = survey.pannel, collect = survey.collect;
                getDataObject = function (blob, stimulus, time, id, index, type) {
                    var _a;
                    increaseIndex();
                    return {
                        blob: blob,
                        timestamp: new Date().toISOString(),
                        survey: survey.survey,
                        id: id,
                        type: survey.collect.type,
                        sessionId: survey_1.getSurveyInfo().session,
                        pannelId: (_a = getPanelId(pannel.key)) !== null && _a !== void 0 ? _a : undefined,
                        stimulus: {
                            group: currentGroup.group,
                            type: stimulus.type,
                            id: stimulus.id,
                            videoframe: time,
                        },
                        group: window.RUN_GROUP || null,
                        frameindex: index,
                        mimeType: blob.type
                    };
                };
                start = function () {
                };
                stop = function () {
                };
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var intervalID;
                        var timeStamp = 0;
                        var recorder = null;
                        var setRecorderEvent = function (recorder) {
                            recorder.ondataavailable = function (blobev) {
                                if (recorder.state !== 'recording') {
                                    return;
                                }
                                console.log('video blob', blobev.data, stimulus);
                                if (blobev.data.size === 0) {
                                    frameempty++;
                                    console.error('video blob empty', indexId, frameindex);
                                }
                                else {
                                    frameempty = 0;
                                }
                                if (blobev.data.size === 0 && frameempty > MAX_EMPTY_FRAMES) { // camera error
                                    return onStudyError('camera-error', "data is of size 0");
                                }
                                frameindex++;
                                saveData(getDataObject(blobev.data, stimulus, timeStamp, indexId, frameindex, 'video'));
                            };
                        };
                        var checkRecorderBlob = function (recorder) {
                            recorder.ondataavailable = function (blobev) {
                                console.log('video blob', blobev.data, stimulus);
                                if (blobev.data.size === 0) {
                                    frameempty++;
                                    console.error('video blob empty', indexId, frameindex);
                                }
                                else {
                                    frameempty = 0;
                                }
                                if (blobev.data.size === 0 && frameempty > MAX_EMPTY_FRAMES) { // camera error
                                    return onStudyError('camera-error', "data is of size 0");
                                }
                            };
                        };
                        switch (collect.type) {
                            case "video":
                                camera_1.initVideoStream().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, camera_1.getCameraRecorder()];
                                            case 1:
                                                recorder = _a.sent();
                                                setRecorderEvent(recorder);
                                                start = function () {
                                                    console.log('video stream start');
                                                    if (recorder.state === 'paused') {
                                                        recorder.resume();
                                                    }
                                                    else {
                                                        recorder.start();
                                                    }
                                                    intervalID = createFpsInterval(function () {
                                                        if (stimulus.type === 'video') {
                                                            timeStamp = getStimulusData().currentTime;
                                                        }
                                                        recorder.requestData();
                                                        //++indexId
                                                    }, collect.fps, false);
                                                };
                                                stop = function () { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                // if (recorder.state === "recording") {
                                                                //     recorder.pause();
                                                                // }
                                                                recorder.stop();
                                                                console.log('video stream stop');
                                                                clearInterval(intervalID);
                                                                return [4 /*yield*/, camera_1.getCameraRecorder()];
                                                            case 1:
                                                                recorder = _a.sent();
                                                                setRecorderEvent(recorder);
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); };
                                                resolve({
                                                    start: start,
                                                    stop: stop
                                                });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }).catch(function (e) {
                                    console.error('ERROR', e);
                                    onStudyError('camera-error', e);
                                });
                                break;
                            case "frame":
                                camera_1.initFrameStream().then(function () { return __awaiter(_this, void 0, void 0, function () {
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0: return [4 /*yield*/, camera_1.getCameraRecorder()];
                                            case 1:
                                                recorder = _a.sent();
                                                checkRecorderBlob(recorder);
                                                start = function () {
                                                    if (recorder.state === 'paused') {
                                                        recorder.resume();
                                                    }
                                                    else {
                                                        recorder.start();
                                                    }
                                                    intervalID = createFpsInterval(function () {
                                                        if (stimulus.type === 'video') {
                                                            timeStamp = getStimulusData().currentTime;
                                                        }
                                                        recorder.requestData();
                                                        console.log('FRAME ID', indexId);
                                                        var data = getDataObject({}, stimulus, timeStamp, indexId, frameindex, 'frame');
                                                        camera_1.getCameraFrame(collect.w, collect.h).then(function (frame) {
                                                            console.log('image frame', frame, timeStamp);
                                                            frameindex++;
                                                            data.blob = frame;
                                                            data.mimeType = frame.type;
                                                            saveData(data);
                                                            //++indexId
                                                            if (DEBUG) {
                                                                // debugFrame(frame)
                                                            }
                                                        }).catch(function (e) {
                                                            console.error(e);
                                                            onStudyError("camera-error", e);
                                                        });
                                                    }, collect.fps);
                                                };
                                                stop = function () { return __awaiter(_this, void 0, void 0, function () {
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                clearInterval(intervalID);
                                                                recorder.stop();
                                                                return [4 /*yield*/, camera_1.getCameraRecorder()];
                                                            case 1:
                                                                recorder = _a.sent();
                                                                checkRecorderBlob(recorder);
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); };
                                                resolve({
                                                    start: start,
                                                    stop: stop
                                                });
                                                return [2 /*return*/];
                                        }
                                    });
                                }); }).catch(function (e) {
                                    console.error('ERROR', e);
                                    onStudyError('camera-error', e);
                                });
                                break;
                        }
                    })];
            });
        });
    }
    function onStudyError(reason, nativeError) {
        if (nativeError === void 0) { nativeError = null; }
        if (ended) {
            return;
        }
        console.error('STUDY ERROR', reason, nativeError);
        // extract message from error
        if (nativeError && nativeError.message) {
            nativeError = nativeError.message;
        }
        setTimeout(function () {
            retry(function () { return api_1.postError(survey.collect.destination, getErrorDataObject(reason, nativeError)); }, function () {
                //redirect
                if (survey.pannel.production.deny && survey.pannel.production.deny !== '') {
                    console.error("redirecting to", survey.pannel.production.deny);
                    window.location.replace(survey.pannel.production.deny);
                }
                else {
                    console.error("no redirect for error", survey.pannel.production.deny);
                    window.location.replace('error');
                }
                enableNext();
            }, 1000);
        }, 2000);
    }
    exports.onStudyError = onStudyError;
    function renderStimulus(stimulus) {
        var target;
        if (currentTarget) {
            target = currentTarget;
            target.innerHTML = '';
        }
        else {
            target = stimulus_1.renderTarget('.sg-question-set');
            currentTarget = target;
        }
        frameindex = 0; // restart frame index
        frameempty = 0; // restart frame empty
        // Replacing the default s3 to cloudfront, this is needed to improve performance and access files
        var tmp = stimulus.src[0].url.replace("https://emotiva-dev-panel-provider-resource.s3.amazonaws.com", "https://d2t8v6e1gdqop2.cloudfront.net");
        stimulus.src[0].url = tmp;
        switch (stimulus.type) {
            case "blank":
                stimulus_1.renderBlank(initStimulus, consumeStimulus, target, setStimulusData);
                break;
            case "image":
                stimulus_1.renderImage(initStimulus, consumeStimulus, stimulus, target);
                break;
            case "html":
                stimulus_1.renderHtml(initStimulus, consumeStimulus, stimulus, target);
                break;
            case "video":
                stimulus_1.renderVideo(initStimulus, consumeStimulus, stimulus, target, setStimulusData, void 0, void 0, getVideoDelay(4000));
                break;
        }
    }
    function clearStimulus() {
        if (currentTarget) {
            currentTarget.innerHTML = '';
        }
    }
    //called when we are done with the current stimulus and we want to go to the next
    function consumeStimulus() {
        onConsumedStimulus();
    }
    //called when a stimulus is ready and we can collect data
    function initStimulus() {
        onInitializedStimulus();
    }
    function setStimulusData(f) {
        console.log('set stimulus data', f, f());
        stimulusData = f;
    }
    function manageStimulusCollection(stimulus, collector) {
        var start = stimulus.collectInterval.start;
        var stop = stimulus.collectInterval.stop;
        if (start && start > 0) {
            setTimeout(function () {
                if (currentStimulus.id === stimulus.id) {
                    collector.start();
                }
            }, start);
        }
        else {
            console.log('start collector', collector);
            collector.start();
        }
        if (stop && stop > 0) {
            setTimeout(function () {
                console.log('stop collector', collector);
                collector.stop();
                //add small margin to the stop to complete the data collection
            }, stop + (1000 / survey.collect.fps / 2));
        }
    }
    function manageStimulusExecution(stimulus) {
        var _this = this;
        console.log('STIMULUS', stimulus);
        //if there is a timer we will skip to the next stimulus when quested
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var t_1;
            return __generator(this, function (_a) {
                if (stimulus.timer) {
                    t_1 = setTimeout(function () {
                        console.log('stimulus timeout');
                        resolve();
                    }, stimulus.timer);
                    onConsumedStimulus = function () {
                        resolve();
                        clearTimeout(t_1);
                    };
                }
                else {
                    //if there is not.. we will wait an event to occur before going to the next stimulus
                    onConsumedStimulus = function () {
                        resolve();
                    };
                }
                return [2 /*return*/];
            });
        }); });
    }
    //handle initialization event from the stimulus
    function manageStimulusInitialization(stimulus) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                onInitializedStimulus = function () {
                    resolve();
                };
                //lets render the stimulus to the user
                try {
                    renderStimulus(stimulus);
                }
                catch (e) {
                    reject(e);
                }
                return [2 /*return*/];
            });
        }); });
    }
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
    function randomizePlaylist(playlist) {
        if (Array.isArray(playlist)) {
            var res = shuffle(playlist);
            for (var _i = 0, res_1 = res; _i < res_1.length; _i++) {
                var el = res_1[_i];
                randomizePlaylist(el);
            }
            return res;
        }
        if (playlist.playlistOrder != null && playlist.playlistOrder == 'random') {
            playlist.playlist = randomizePlaylist(playlist.playlist);
        }
        else if (playlist.playlistOrder != null && (Array.isArray(playlist.playlistOrder) || playlist.playlistOrder)) {
            if (Array.isArray(playlist.playlistOrder) === false) {
                playlist.playlistOrder = [playlist.playlistOrder];
            }
            var order = __spreadArrays(playlist.playlistOrder);
            for (var _a = 0, _b = playlist.playlist; _a < _b.length; _a++) {
                var el = _b[_a];
                var index = null;
                if (el.id)
                    index = order.indexOf(el.id);
                else
                    index = order.indexOf(el.group);
                if (index == null || index === -1) {
                    order.push(randomizePlaylist(el));
                }
                order[index] = randomizePlaylist(el);
            }
            order = order.filter(function (v) { return typeof v !== 'number'; });
            playlist.playlist = order;
        }
        return playlist;
    }
    function extractPlaylist(playlist, name) {
        if (Array.isArray(playlist)) {
            return playlist.find(function (v) { return extractPlaylist(v, name); });
        }
        if (playlist == null || playlist.type != null) {
            return null;
        }
        if (playlist.group === name) {
            return playlist;
        }
        return extractPlaylist(playlist.playlist, name);
    }
    // function sortPlaylist(group: stimulusGroup) {
    //     if (group.playlistOrder === 'random') {
    //         group.playlist = shuffle(group.playlist)
    //     } else {
    //         if (Array.isArray(group.playlistOrder)) {
    //             let playlist = []
    //             group.playlistOrder.forEach((id) => {
    //                 let element
    //                 if (typeof id === "number") {
    //                     //stimulus
    //                     element = group.playlist.find((element) => {
    //                         if ("id" in element && element.id && element.id === id) {
    //                             return element
    //                         }
    //                     })
    //                 }
    //                 if (typeof id === "string") {
    //                     //group
    //                     element = group.playlist.find((element) => {
    //                         if ("group" in element && element.group && element.group === id) {
    //                             return element
    //                         }
    //                     })
    //                 }
    //                 if (element) {
    //                     playlist.push(element)
    //                 }
    //             })
    //             group.playlist = playlist;
    //         }
    //     }
    // }
    function manageTutorialPermissions(data, video) {
    }
    function checkCameraPermissions() {
    }
    function addStyle(style) {
        var st = document.createElement('style');
        st.innerText = style;
        document.head.appendChild(st);
    }
    function isVideoSetup() {
        return (typeof VIDEO_SETUP !== 'undefined' && VIDEO_SETUP);
    }
    function isTutorial() {
        return (typeof TUTORIAL !== 'undefined' && TUTORIAL);
    }
    var nextButtonColor = '';
    var nextButtonDisabled = false;
    function disableNext() {
        if (nextButtonDisabled == true)
            return;
        var input = document.querySelector('.sg-next-button');
        if (!input)
            return;
        input.disabled = true;
        nextButtonColor = input.style['background-color'];
        input.style['background-color'] = '#888';
        nextButtonDisabled = true;
    }
    function enableNext() {
        if (nextButtonDisabled == false)
            return;
        var input = document.querySelector('.sg-next-button');
        if (!input)
            return;
        input.disabled = false;
        input.style['background-color'] = nextButtonColor;
        input.setAttribute('nextbuttonready', 'true');
        nextButtonDisabled = false;
    }
    function nextPage() {
        // wait for the request queue to become exausted
        function goToNextPage() {
            enableNext(); // reenable next button
            var input = document.querySelector('.sg-next-button');
            if (!input || input.getAttribute('nextbuttonready') != 'true')
                return;
            input.click();
        }
        var retry = 0;
        var token;
        var waittime = 100;
        token = setInterval(function () {
            if (retry * waittime > 120 * 1000) { // timeout 2 minute?
                // go to the next page
                console.error("nextPage() timeout on saveDataOnFlightRequests");
            }
            else if (saveDataOnFlightRequests > 0) {
                retry++;
                return; // wait
            }
            clearInterval(token);
            goToNextPage();
        }, waittime);
    }
    function getVideoDelay(def) {
        if (typeof VIDEO_DELAY === 'undefined') {
            window.VIDEO_DELAY = def;
        }
        if (window.VIDEO_DELAY == 0) {
            window.VIDEO_DELAY = null;
        }
        if (window.VIDEO_DELAY == false) {
            window.VIDEO_DELAY = null;
        }
        if (window.VIDEO_DELAY == 'false') {
            window.VIDEO_DELAY = null;
        }
        if (window.VIDEO_DELAY == 'False') {
            window.VIDEO_DELAY = null;
        }
        if (window.VIDEO_DELAY == true) {
            window.VIDEO_DELAY = true;
        }
        if (window.VIDEO_DELAY == 'true') {
            window.VIDEO_DELAY = true;
        }
        return window.VIDEO_DELAY;
    }
    function init() {
        var _this = this;
        if (typeof IMAGE_MAX_SIZE === 'undefined') {
            window.IMAGE_MAX_SIZE = 1200;
        }
        if (typeof RUN_GROUP === 'undefined') {
            window.RUN_GROUP = undefined;
        }
        if (typeof RUN_GROUP === 'number') {
            window.RUN_GROUP = window.RUN_GROUP.toString();
        }
        if (typeof RUN_GROUP !== "string") {
            window.RUN_GROUP = undefined;
        }
        if (typeof RUN_GROUP === 'string') {
            window.RUN_GROUP = window.RUN_GROUP.trim();
            if (RUN_GROUP == '') {
                window.RUN_GROUP = undefined;
            }
            // reset counters
            if (window.RUN_GROUP) {
                //resetIndex()
                console.log('RUN_GROUP', window.RUN_GROUP);
            }
        }
        if (typeof VIDEO_MAX_SIZE === 'undefined') {
            window.VIDEO_MAX_SIZE = 1200;
        }
        if (typeof VIDEO_SETUP_SIZE === 'undefined') {
            window.VIDEO_SETUP_SIZE = 100;
        }
        addStyle("\n        #video-player {\n            background-color: unset!important;\n            height: 100%!important;\n            padding-top: unset!important;\n        }\n    ");
        retry(function () {
            if (isTutorial() || isVideoSetup()) {
                return new Promise(function (resolve) {
                    resolve({});
                });
            }
            return getSurvey();
        }, function (data) { return __awaiter(_this, void 0, void 0, function () {
            var pId, data_1, pId, data_2, media, url, src, havePermissions_1, target_1, video, stream, target_2, video, onEnd_1, stimulusLoop_1, playlist;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        survey = data;
                        console.log('STUDY', survey);
                        if (!(typeof INIT !== 'undefined' && INIT)) return [3 /*break*/, 1];
                        pId = getPanelId(survey.pannel.key);
                        data_1 = {
                            timestamp: new Date().toISOString(),
                            survey: survey.survey,
                            sessionId: survey_1.getSurveyInfo().session,
                        };
                        if (pId) {
                            data_1.pannelId = pId;
                        }
                        retry(function () { return api_1.postStart(survey.collect.destination, data_1); }, function () {
                            //ended
                        }, 1000);
                        return [3 /*break*/, 6];
                    case 1:
                        if (!(typeof END !== 'undefined' && END)) return [3 /*break*/, 2];
                        pId = getPanelId(survey.pannel.key);
                        data_2 = {
                            timestamp: new Date().toISOString(),
                            survey: survey.survey,
                            sessionId: survey_1.getSurveyInfo().session,
                        };
                        if (pId) {
                            data_2.pannelId = pId;
                        }
                        retry(function () { return api_1.postEnd(survey.collect.destination, data_2); }, function () {
                            //ended
                        }, 1000);
                        return [3 /*break*/, 6];
                    case 2:
                        if (!isTutorial()) return [3 /*break*/, 3];
                        media = void 0;
                        url = survey.tutorial.url;
                        src = survey.tutorial.src;
                        if (!src[0] && url) {
                            media = url;
                        }
                        if (src[0]) {
                            media = {
                                src: src,
                                timer: null,
                                type: null,
                                id: null
                            };
                        }
                        havePermissions_1 = false;
                        target_1 = stimulus_1.renderTarget('.sg-question-set');
                        stimulus_1.renderVideo(function () {
                            var video = getStimulusData().video;
                            video.controls(false);
                        }, function () {
                            //tutorial ended
                            target_1.parentElement.removeChild(target_1);
                        }, media, target_1, setStimulusData, function (time) {
                            console.log(time);
                            if (time >= survey.tutorial.cameraPermissionTimeStart / 1000 && !havePermissions_1) {
                                var video_1 = getStimulusData().video;
                                video_1.pause();
                                camera_1.initVideoStream().then(function () {
                                    havePermissions_1 = true;
                                    video_1.currentTime(survey.tutorial.cameraPermissionTimeEnd / 1000);
                                    video_1.play();
                                }).catch(function (e) {
                                    onStudyError('camera-error', e);
                                });
                            }
                        });
                        video = getStimulusData().video;
                        video.controls(true);
                        return [3 /*break*/, 6];
                    case 3:
                        if (!isVideoSetup()) return [3 /*break*/, 5];
                        return [4 /*yield*/, camera_1.initVideoStream().catch(function (e) {
                                onStudyError('camera-error', e);
                            })];
                    case 4:
                        stream = _a.sent();
                        target_2 = stimulus_1.renderTarget('.sg-question-set');
                        stimulus_1.renderVideo(function () {
                            var video = getStimulusData().video;
                            video.controls(false);
                        }, function () {
                            //tutorial ended
                            target_2.parentElement.removeChild(target_2);
                        }, null, target_2, setStimulusData, null, VIDEO_SETUP_SIZE);
                        video = getStimulusData().video;
                        video.tech().el().srcObject = stream;
                        // flip
                        try {
                            video.tech().el().style['-webkit-transform'] = "scaleX(-1)";
                            video.tech().el().style['webkit-transform'] = "scaleX(-1)";
                            video.tech().el().style['transform'] = "scaleX(-1)";
                        }
                        catch (e) {
                        }
                        video.muted(true);
                        video.autoplay(true);
                        return [3 /*break*/, 6];
                    case 5:
                        //spawn stimulus
                        disableNext();
                        onEnd_1 = function () { return __awaiter(_this, void 0, void 0, function () {
                            var parent_1, stream, e_2, streamImage, e_3;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        console.log('end');
                                        //the end :)
                                        if (currentTarget) {
                                            parent_1 = currentTarget.parentElement;
                                            currentTarget.parentElement.removeChild(currentTarget);
                                            // wait message
                                            parent_1.insertAdjacentText("afterbegin", "Completamento in corso, attendere");
                                        }
                                        ended = true;
                                        if (!(survey.collect.type === 'video')) return [3 /*break*/, 4];
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, camera_1.initVideoStream()];
                                    case 2:
                                        stream = _a.sent();
                                        stream.getTracks().forEach(function (t) {
                                            t.stop();
                                        });
                                        return [3 /*break*/, 4];
                                    case 3:
                                        e_2 = _a.sent();
                                        return [3 /*break*/, 4];
                                    case 4:
                                        if (!(survey.collect.type === 'frame')) return [3 /*break*/, 8];
                                        _a.label = 5;
                                    case 5:
                                        _a.trys.push([5, 7, , 8]);
                                        return [4 /*yield*/, camera_1.initFrameStream()];
                                    case 6:
                                        streamImage = _a.sent();
                                        streamImage.getTracks().forEach(function (t) {
                                            t.stop();
                                        });
                                        return [3 /*break*/, 8];
                                    case 7:
                                        e_3 = _a.sent();
                                        return [3 /*break*/, 8];
                                    case 8:
                                        //enableNext() NO let next page handle the logic
                                        nextPage();
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        try {
                            stimulusLoop_1 = function (group) {
                                currentGroup = group;
                                return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                    var index, manageStimulus;
                                    var _this = this;
                                    return __generator(this, function (_a) {
                                        switch (_a.label) {
                                            case 0:
                                                console.log('group', group.playlist);
                                                index = 0;
                                                manageStimulus = function () { return __awaiter(_this, void 0, void 0, function () {
                                                    var element, stimulus, collector, renderError, e_4;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0:
                                                                element = group.playlist[index];
                                                                console.log('manage stimulus', index, element);
                                                                if (!element) {
                                                                    resolve();
                                                                    return [2 /*return*/];
                                                                }
                                                                if (!("group" in element && element.group)) return [3 /*break*/, 2];
                                                                //is a group, lets do some ricorsion
                                                                return [4 /*yield*/, stimulusLoop_1(element)
                                                                    //retun to this loop
                                                                ];
                                                            case 1:
                                                                //is a group, lets do some ricorsion
                                                                _a.sent();
                                                                //retun to this loop
                                                                currentGroup = group;
                                                                return [3 /*break*/, 12];
                                                            case 2:
                                                                if (!("type" in element && element.type)) return [3 /*break*/, 12];
                                                                stimulus = element;
                                                                currentStimulus = stimulus;
                                                                return [4 /*yield*/, getDataCollector(survey, element)
                                                                    //lets wait the stimulus to be ready
                                                                ];
                                                            case 3:
                                                                collector = _a.sent();
                                                                renderError = false;
                                                                _a.label = 4;
                                                            case 4:
                                                                _a.trys.push([4, 6, , 7]);
                                                                return [4 /*yield*/, manageStimulusInitialization(element)];
                                                            case 5:
                                                                _a.sent();
                                                                return [3 /*break*/, 7];
                                                            case 6:
                                                                e_4 = _a.sent();
                                                                console.error('ERROR', e_4);
                                                                onStudyError('render-error', e_4);
                                                                return [2 /*return*/];
                                                            case 7:
                                                                if (!!renderError) return [3 /*break*/, 10];
                                                                //now we have to check when to start and stop collecting the data
                                                                manageStimulusCollection(element, collector);
                                                                //now we have to check when to go to the next stimulus
                                                                return [4 /*yield*/, manageStimulusExecution(stimulus)
                                                                    //stop the collection of data
                                                                ];
                                                            case 8:
                                                                //now we have to check when to go to the next stimulus
                                                                _a.sent();
                                                                //stop the collection of data
                                                                return [4 /*yield*/, collector.stop()];
                                                            case 9:
                                                                //stop the collection of data
                                                                _a.sent();
                                                                return [3 /*break*/, 12];
                                                            case 10: return [4 /*yield*/, collector.stop()];
                                                            case 11:
                                                                _a.sent();
                                                                _a.label = 12;
                                                            case 12:
                                                                if (!group.playlist[index + 1]) return [3 /*break*/, 14];
                                                                index++;
                                                                //go to the next stimulus
                                                                return [4 /*yield*/, manageStimulus()];
                                                            case 13:
                                                                //go to the next stimulus
                                                                _a.sent();
                                                                return [3 /*break*/, 15];
                                                            case 14:
                                                                //await onEnd()
                                                                resolve();
                                                                return [2 /*return*/];
                                                            case 15: return [2 /*return*/];
                                                        }
                                                    });
                                                }); };
                                                return [4 /*yield*/, manageStimulus()];
                                            case 1:
                                                _a.sent();
                                                return [2 /*return*/];
                                        }
                                    });
                                }); });
                            };
                            if (RUN_GROUP) {
                                playlist = extractPlaylist(survey.stimulusGroup, RUN_GROUP);
                                if (playlist == null) {
                                    playlist = {
                                        group: "root",
                                        playlist: [],
                                        playlistOrder: "random",
                                    };
                                    console.error("playlist", RUN_GROUP, "not found");
                                }
                                else {
                                    console.log("playlist", playlist);
                                }
                                survey.stimulusGroup = playlist;
                            }
                            survey.stimulusGroup = randomizePlaylist(survey.stimulusGroup);
                            stimulusLoop_1(survey.stimulusGroup).then(function () {
                                onEnd_1();
                            });
                        }
                        catch (e) {
                            console.error('ERROR', e);
                            onStudyError('js-error', e);
                            //enableNext() no handled by onStudyError
                        }
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); }, 1000);
    }
    if (typeof $ === "undefined") {
        utils_2.loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.4/jquery.min.js').then(function () {
            init();
        });
    }
    else {
        init();
    }
    console.log('started');
});
define("camera", ["require", "exports", "index"], function (require, exports, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getCameraFrameRecorder = exports.getCameraRecorder = exports.getCameraFrame = exports.initVideoStream = exports.initFrameStream = exports.prompCameraPermission = void 0;
    function prompCameraPermission(custom) {
        /* prevent flikering */
        var token = setTimeout(function () {
            custom.show();
        }, 300);
        navigator.mediaDevices.getUserMedia({ audio: false, video: true })
            .then(function (stream) {
            clearTimeout(token);
            // ok
            custom.hide();
        }, function (e) {
            clearTimeout(token);
            // error
            custom.hide();
            custom.cameraDenied();
        });
    }
    exports.prompCameraPermission = prompCameraPermission;
    function getCamera(constraints) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('get camera stream');
                return [2 /*return*/, navigator.mediaDevices.getUserMedia(constraints)];
            });
        });
    }
    var fotoStream;
    var videoStream;
    var videoRecorder;
    function initFrameStream() {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('get camera stream frame');
                        if (!!fotoStream) return [3 /*break*/, 2];
                        return [4 /*yield*/, getCamera({ video: { facingMode: { ideal: 'user' } }, audio: false })];
                    case 1:
                        fotoStream = _a.sent();
                        _a.label = 2;
                    case 2:
                        if (fotoStream.getVideoTracks().length > 0) {
                            fotoStream.getVideoTracks()[0].addEventListener('ended', function (e) {
                                index_1.onStudyError('camera-error', e);
                            });
                        }
                        return [2 /*return*/, fotoStream];
                }
            });
        });
    }
    exports.initFrameStream = initFrameStream;
    function initVideoStream() {
        return __awaiter(this, void 0, void 0, function () {
            var e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('get camera stream video');
                        if (!!videoStream) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 5]);
                        return [4 /*yield*/, getCamera({ video: { facingMode: { ideal: 'user' } }, audio: true })];
                    case 2:
                        videoStream = _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        e_5 = _a.sent();
                        return [4 /*yield*/, getCamera({ video: { facingMode: { ideal: 'user' } }, audio: false })];
                    case 4:
                        videoStream = _a.sent();
                        return [3 /*break*/, 5];
                    case 5:
                        if (videoStream.getVideoTracks().length > 0) {
                            videoStream.getVideoTracks()[0].addEventListener('ended', function (e) {
                                index_1.onStudyError('camera-error', e);
                            });
                        }
                        return [2 /*return*/, videoStream];
                }
            });
        });
    }
    exports.initVideoStream = initVideoStream;
    function getCameraFrame(w, h) {
        return __awaiter(this, void 0, void 0, function () {
            var stream;
            return __generator(this, function (_a) {
                stream = fotoStream;
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var video = document.createElement('video');
                        var canvas = document.createElement('canvas');
                        video.style.position = 'fixed';
                        video.style.top = '9999px';
                        canvas.style.position = 'fixed';
                        canvas.style.top = '9999px';
                        document.body.appendChild(canvas);
                        document.body.appendChild(video);
                        var ctx = canvas.getContext('2d');
                        video.srcObject = stream;
                        video.play().then(function () {
                            if (!h || !w) {
                                w = video.videoWidth;
                                h = video.videoHeight;
                            }
                            canvas.width = w;
                            canvas.height = h;
                            ctx.drawImage(video, 0, 0, w, h);
                            canvas.toBlob(function (blob) {
                                video.pause();
                                video.srcObject = null;
                                canvas.remove();
                                video.remove();
                                canvas = undefined;
                                video = undefined;
                                resolve(blob);
                            }, 'image/jpeg', 1);
                        }).catch(function (e) {
                            video.pause();
                            video.srcObject = null;
                            canvas.remove();
                            video.remove();
                            canvas = undefined;
                            video = undefined;
                            reject(e);
                        });
                    })];
            });
        });
    }
    exports.getCameraFrame = getCameraFrame;
    function getCameraRecorder() {
        return __awaiter(this, void 0, void 0, function () {
            var stream, recorder;
            return __generator(this, function (_a) {
                stream = videoStream || fotoStream;
                if (stream) {
                    recorder = new MediaRecorder(stream);
                    videoRecorder = recorder;
                }
                return [2 /*return*/, videoRecorder];
            });
        });
    }
    exports.getCameraRecorder = getCameraRecorder;
    function getCameraFrameRecorder() {
        return __awaiter(this, void 0, void 0, function () {
            var stream, recorder;
            return __generator(this, function (_a) {
                stream = fotoStream;
                if (!videoRecorder) {
                    recorder = new MediaRecorder(stream);
                    videoRecorder = recorder;
                }
                return [2 /*return*/, videoRecorder];
            });
        });
    }
    exports.getCameraFrameRecorder = getCameraFrameRecorder;
});
define("dialogs", ["require", "exports"], function (require, exports) {
    "use strict";
    var _a, _b;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.hideDialog = exports.dialog = void 0;
    var modal = "\n  <div class=\"modal micromodal-slide\" id=\"modal-1\" aria-hidden=\"true\">\n    <div class=\"modal__overlay\" tabindex=\"-1\" data-micromodal-close>\n      <div class=\"modal__container\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"modal-1-title\">\n        <header class=\"modal__header\">\n          <h2 class=\"modal__title\" id=\"modal-1-title\">\n            " + ((_a = window.EMOTIVA_CAMERA_PERMISSION_TITLE) !== null && _a !== void 0 ? _a : 'Permesso camera') + "\n          </h2>\n          <button class=\"modal__close\" aria-label=\"Close modal\" data-micromodal-close></button>\n        </header>\n        <main class=\"modal__content\" id=\"modal-1-content\">\n          <p>\n            " + ((_b = window.EMOTIVA_CAMERA_PERMISSION_BODY) !== null && _b !== void 0 ? _b : '') + "\n          </p>\n        </main>\n        <footer class=\"modal__footer\">\n          <!-- <button class=\"modal__btn modal__btn-primary\">Ok</button> -->\n          <button class=\"modal__btn\" data-micromodal-close aria-label=\"Close this dialog window\">Chiudi</button>\n        </footer>\n      </div>\n    </div>\n  </div>\n";
    var style = document.createElement('style');
    style.innerHTML = "\n/**************************\\\n  Basic Modal Styles\n\\**************************/\n\n.modal {\n  font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif;\n}\n\n.modal__overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0,0,0,0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.modal__container {\n  background-color: #fff;\n  padding: 30px;\n  max-width: 500px;\n  max-height: 100vh;\n  border-radius: 4px;\n  overflow-y: auto;\n  box-sizing: border-box;\n}\n\n.modal__header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.modal__title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-weight: 600;\n  font-size: 1.25rem;\n  line-height: 1.25;\n  color: #00449e;\n  box-sizing: border-box;\n}\n\n.modal__close {\n  background: transparent;\n  border: 0;\n}\n\n.modal__header .modal__close:before { content: \"\\2715\"; }\n\n.modal__content {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n  line-height: 1.5;\n  color: rgba(0,0,0,.8);\n}\n\n.modal__btn {\n  font-size: .875rem;\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-top: .5rem;\n  padding-bottom: .5rem;\n  background-color: #e6e6e6;\n  color: rgba(0,0,0,.8);\n  border-radius: .25rem;\n  border-style: none;\n  border-width: 0;\n  cursor: pointer;\n  -webkit-appearance: button;\n  text-transform: none;\n  overflow: visible;\n  line-height: 1.15;\n  margin: 0;\n  will-change: transform;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  transition: -webkit-transform .25s ease-out;\n  transition: transform .25s ease-out;\n  transition: transform .25s ease-out,-webkit-transform .25s ease-out;\n}\n\n.modal__btn:focus, .modal__btn:hover {\n  -webkit-transform: scale(1.05);\n  transform: scale(1.05);\n}\n\n.modal__btn-primary {\n  background-color: #00449e;\n  color: #fff;\n}\n\n\n\n/**************************\\\n  Demo Animation Style\n\\**************************/\n@keyframes mmfadeIn {\n    from { opacity: 0; }\n      to { opacity: 1; }\n}\n\n@keyframes mmfadeOut {\n    from { opacity: 1; }\n      to { opacity: 0; }\n}\n\n@keyframes mmslideIn {\n  from { transform: translateY(15%); }\n    to { transform: translateY(0); }\n}\n\n@keyframes mmslideOut {\n    from { transform: translateY(0); }\n    to { transform: translateY(-10%); }\n}\n\n.micromodal-slide {\n  display: none;\n}\n\n.micromodal-slide.is-open {\n  display: block;\n}\n\n.micromodal-slide[aria-hidden=\"false\"] .modal__overlay {\n  animation: mmfadeIn .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"false\"] .modal__container {\n  animation: mmslideIn .3s cubic-bezier(0, 0, .2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"true\"] .modal__overlay {\n  animation: mmfadeOut .3s cubic-bezier(0.0, 0.0, 0.2, 1);\n}\n\n.micromodal-slide[aria-hidden=\"true\"] .modal__container {\n  animation: mmslideOut .3s cubic-bezier(0, 0, .2, 1);\n}\n\n.micromodal-slide .modal__container,\n.micromodal-slide .modal__overlay {\n  will-change: transform;\n}\n";
    document.getElementsByTagName('head')[0].append(style);
    var container = document.createElement('div');
    container.innerHTML = modal;
    document.getElementsByTagName('body')[0].append(container);
    MicroModal.init();
    var status = false;
    function dialog() {
        if (window.EMOTIVA_CAMERA_PERMISSION_SHOW !== true || status == true)
            return;
        console.log('showing permission dialog');
        MicroModal.show('modal-1');
        status = true;
    }
    exports.dialog = dialog;
    function hideDialog() {
        if (window.EMOTIVA_CAMERA_PERMISSION_SHOW !== true || status == false)
            return;
        console.log('showing permission dialog');
        MicroModal.close('modal-1');
        status = false;
    }
    exports.hideDialog = hideDialog;
});
