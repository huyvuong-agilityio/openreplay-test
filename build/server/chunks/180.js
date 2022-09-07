"use strict";
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 180:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _openReplay__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   "w": () => (/* reexport safe */ _openReplay__WEBPACK_IMPORTED_MODULE_0__.w)
/* harmony export */ });
/* harmony import */ var _openReplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(925);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_openReplay__WEBPACK_IMPORTED_MODULE_0__]);
_openReplay__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
// Libraries

const TrackerContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    startTracking: ()=>{},
    initTracker: ()=>{},
    logEvent: ()=>{},
    logIssue: ()=>{},
    reportError: ()=>{}
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackerContext);


/***/ }),

/***/ 925:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* reexport safe */ _context__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "w": () => (/* reexport safe */ _provider__WEBPACK_IMPORTED_MODULE_1__.Z)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);
/* harmony import */ var _provider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(181);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_provider__WEBPACK_IMPORTED_MODULE_1__, _reducer__WEBPACK_IMPORTED_MODULE_2__]);
([_provider__WEBPACK_IMPORTED_MODULE_1__, _reducer__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(327);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(202);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_reducer__WEBPACK_IMPORTED_MODULE_3__]);
_reducer__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// Libraries


// OpenReplay


const TrackerProvider = ({ children , config ={}  })=>{
    const { 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(_reducer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        tracker: null,
        config
    });
    const value = {
        startTracking: ()=>dispatch({
                type: "start"
            }),
        initTracker: ()=>dispatch({
                type: "init"
            }),
        logEvent: (evnt)=>dispatch({
                type: "logEvent",
                payload: evnt
            }),
        logIssue: (evnt)=>dispatch({
                type: "logIssue",
                payload: evnt
            }),
        reportError: (error)=>dispatch({
                type: "reportError",
                payload: error
            })
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_context__WEBPACK_IMPORTED_MODULE_2__/* ["default"].Provider */ .Z.Provider, {
        value: value,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TrackerProvider);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 202:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _openreplay_tracker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(777);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_openreplay_tracker__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__]);
([_openreplay_tracker__WEBPACK_IMPORTED_MODULE_0__, uuid__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Libraries


const userId = (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)();
const newTracker = (config)=>{
    const tracker = new _openreplay_tracker__WEBPACK_IMPORTED_MODULE_0__["default"](config);
    tracker.setUserID(userId);
    Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 58)).then(({ default: trackerAssist  })=>{
        tracker.use(trackerAssist({
            callConfirm: {
                text: "Our support team wants to help you",
                confirmBtn: {
                    innerHTML: "\uD83D\uDC4D Accept"
                },
                declineBtn: {
                    innerHTML: "❌ Not at this moment"
                }
            },
            controlConfirm: {
                text: "Would you mind letting us control your application?",
                confirmBtn: {
                    innerHTML: "\uD83D\uDC4D Accept"
                },
                declineBtn: {
                    innerHTML: "❌ Not at this moment"
                }
            }
        }));
    });
    return tracker;
};
const openReplayReducer = (state, action)=>{
    switch(action.type){
        case "init":
            {
                if (!state.tracker) {
                    return {
                        ...state,
                        tracker: newTracker(state.config)
                    };
                }
                return state;
            }
        case "start":
            {
                state.tracker.start();
                return state;
            }
        case "logEvent":
            {
                const { name , data  } = action.payload;
                state.tracker?.event(name, data);
                return state;
            }
        case "logIssue":
            {
                const { name: name1 , data: data1  } = action.payload;
                state.tracker?.issue(name1, data1);
                return state;
            }
        case "reportError":
            {
                const error = action.payload;
                state.tracker?.handleError(error);
                return state;
            }
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (openReplayReducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;