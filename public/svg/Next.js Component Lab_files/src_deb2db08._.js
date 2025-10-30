(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/beginner/accordian/accordianItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const AccordianItem = (param)=>{
    let { title, content } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "border-2 p-2 mb-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-full text-left cursor-pointer focus:outline-none",
                "aria-expanded": isOpen,
                onClick: ()=>setIsOpen(!isOpen),
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/accordian/accordianItem.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "content-".concat(title),
                className: "overflow-hidden transition-all duration-300 ease-in-out",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-2",
                    children: content
                }, void 0, false, {
                    fileName: "[project]/src/components/beginner/accordian/accordianItem.tsx",
                    lineNumber: 22,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/accordian/accordianItem.tsx",
                lineNumber: 18,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/accordian/accordianItem.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(AccordianItem, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = AccordianItem;
const __TURBOPACK__default__export__ = AccordianItem;
var _c;
__turbopack_context__.k.register(_c, "AccordianItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/counter/counter.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "counterStyles",
    ()=>counterStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const counterStyles = {
    wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "w-80 p-8 rounded-lg shadow-lg text-center bg-primary mx-auto"
    }),
    value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "text-4xl font-bold mb-6 text-white"
    }),
    button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "px-5 py-2 rounded-md font-semibold transition-colors duration-200 cursor-pointer",
        variants: {
            intent: {
                increment: "bg-white text-blue-800 hover:bg-blue-100",
                decrement: "bg-white text-blue-800 hover:bg-blue-100",
                reset: "bg-white text-blue-800 hover:bg-blue-100"
            }
        }
    })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/counter/counter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/counter/counter.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Counter = (param)=>{
    let { initialValue = 0, step = 1 } = param;
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialValue);
    // increment handler
    const handleIncrement = ()=>{
        setCount((prevCount)=>{
            const newCount = prevCount + step;
            return newCount <= 0 ? 0 : newCount;
        });
    };
    // decrement handler
    const handleDecrement = ()=>{
        setCount((prevCount)=>{
            const newCount = prevCount - step;
            return newCount <= 0 ? 0 : newCount;
        });
    };
    // reset handler
    const handleReset = ()=>{
        setCount(initialValue);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["counterStyles"].wrapper(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["counterStyles"].value(),
                children: count
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/counter/counter.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-x-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["counterStyles"].button({
                            intent: "increment"
                        }),
                        onClick: handleIncrement,
                        children: "+"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/counter/counter.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["counterStyles"].button({
                            intent: "decrement"
                        }),
                        onClick: handleDecrement,
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/counter/counter.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$counter$2f$counter$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["counterStyles"].button({
                            intent: "reset"
                        }),
                        onClick: handleReset,
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/counter/counter.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/counter/counter.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/counter/counter.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Counter, "anQBWt8gm5Alpw27Xf2pPZffWFg=");
_c = Counter;
const __TURBOPACK__default__export__ = Counter;
var _c;
__turbopack_context__.k.register(_c, "Counter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/modal/modal-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ModalContent = (param)=>{
    let { onClose } = param;
    _s();
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // focus on first element on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ModalContent.useEffect": ()=>{
            const element = elementRef.current;
            if (element) element.focus();
        }
    }["ModalContent.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/50",
        role: "dialog",
        "aria-modal": "true",
        onClick: (e)=>{
            if (e.target === e.currentTarget) onClose();
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-lg shadow-xl w-full max-w-md p-6 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    className: "mb-4",
                    children: "Sample Modal Content"
                }, void 0, false, {
                    fileName: "[project]/src/components/beginner/modal/modal-content.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    ref: elementRef,
                    className: "h-8 w-auto border-2 px-2 py-4 mb-4 rounded-md focus:outline-2",
                    type: "text",
                    placeholder: "Sample text field"
                }, void 0, false, {
                    fileName: "[project]/src/components/beginner/modal/modal-content.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    className: "bg-red-500 hover:bg-red-700 text-white rounded-md h-auto w-auto p-2 font-semibold cursor-pointer",
                    onClick: onClose,
                    children: "Close"
                }, void 0, false, {
                    fileName: "[project]/src/components/beginner/modal/modal-content.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/beginner/modal/modal-content.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/modal/modal-content.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ModalContent, "CKe/C9l/PZDcdMrjDfTWxieUegY=");
_c = ModalContent;
const __TURBOPACK__default__export__ = ModalContent;
var _c;
__turbopack_context__.k.register(_c, "ModalContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/modal/modal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$modal$2f$modal$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/modal/modal-content.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Modal = (param)=>{
    let {} = param;
    _s();
    const [showModal, setShowModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const elementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const previousActiveElementRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // modal root ref
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            const element = document.getElementById("modal-root");
            elementRef.current = element;
            return ({
                "Modal.useEffect": ()=>{
                    elementRef.current = null;
                }
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], []);
    // keydown event handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Modal.useEffect": ()=>{
            if (!showModal) return;
            const onKeyDown = {
                "Modal.useEffect.onKeyDown": (event)=>{
                    if (event.key === "Escape") {
                        setShowModal(false);
                    }
                }
            }["Modal.useEffect.onKeyDown"];
            document.addEventListener("keydown", onKeyDown);
            return ({
                "Modal.useEffect": ()=>document.removeEventListener("keydown", onKeyDown)
            })["Modal.useEffect"];
        }
    }["Modal.useEffect"], [
        showModal,
        setShowModal
    ]);
    // focus on previous active element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Modal.useLayoutEffect": ()=>{
            if (!showModal) return;
            previousActiveElementRef.current = document.activeElement;
            return ({
                "Modal.useLayoutEffect": ()=>{
                    try {
                        var _previousActiveElementRef_current;
                        (_previousActiveElementRef_current = previousActiveElementRef.current) === null || _previousActiveElementRef_current === void 0 ? void 0 : _previousActiveElementRef_current.focus();
                    } catch (e) {
                    /* ignore if focus fails */ }
                }
            })["Modal.useLayoutEffect"];
        }
    }["Modal.useLayoutEffect"], [
        showModal
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl h-[400px] p-12 mx-auto flex justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "bg-blue-500 hover:bg-blue-700 text-white h-auto w-auto px-3 py-2 rounded-md font-semibold cursor-pointer border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2",
                type: "button",
                onClick: ()=>setShowModal(true),
                children: "Open Modal"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/modal/modal.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            showModal && elementRef.current ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$modal$2f$modal$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: ()=>setShowModal(false)
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/modal/modal.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)), elementRef.current) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/modal/modal.tsx",
        lineNumber: 59,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Modal, "6eOvNppOqgPhYlFw0dvHLOzw/NM=");
_c = Modal;
const __TURBOPACK__default__export__ = Modal;
var _c;
__turbopack_context__.k.register(_c, "Modal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/pagination/pagination.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PaginationButtonControls",
    ()=>PaginationButtonControls,
    "PaginationNavContainer",
    ()=>PaginationNavContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const PaginationNavContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "flex items-center justify-center gap-2"
});
const PaginationButtonControls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "\n    min-w-[32px] h-8 p-2\n    flex items-center justify-center\n    text-sm font-semibold text-black\n    rounded-md cursor-pointer\n    transition-colors duration-200\n    hover:bg-gray-200 active:bg-gray-300\n  ",
    variants: {
        isActive: {
            true: "bg-[#2F80ED] text-white hover:bg-[#2F80ED] active:bg-[#2563EB]"
        },
        disabled: {
            true: "\n        opacity-50 cursor-not-allowed\n        hover:bg-transparent active:bg-transparent\n      "
        }
    },
    defaultVariants: {
        isActive: false,
        disabled: false
    }
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/pagination/helpers/getVisiblePages.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
const getVisiblePages = function(totalPages, activePage) {
    let visibleCount = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;
    let pages = [];
    if (totalPages <= visibleCount + 2) {
        return Array.from({
            length: totalPages
        }, (_, i)=>i + 1);
    }
    if (activePage <= visibleCount) {
        for(let i = 1; i <= visibleCount; i++){
            pages.push(i);
        }
        pages.push("...", totalPages);
    } else if (activePage >= totalPages - visibleCount + 1) {
        pages.push(1, "...");
        for(let i = totalPages - visibleCount; i <= totalPages; i++){
            pages.push(i);
        }
    } else {
        pages.push(1, "...");
        for(let i = activePage - 1; i <= activePage + 1; i++){
            pages.push(i);
        }
        pages.push("...", totalPages);
    }
    return pages;
};
const __TURBOPACK__default__export__ = getVisiblePages;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/pagination/pagination.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/pagination/pagination.styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$helpers$2f$getVisiblePages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/pagination/helpers/getVisiblePages.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Pagination = (param)=>{
    let { totalItems, pageSize = 10, currentPage, defaultPage, onPageChange } = param;
    _s();
    var _ref;
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((_ref = currentPage !== null && currentPage !== void 0 ? currentPage : defaultPage) !== null && _ref !== void 0 ? _ref : 1);
    const totalPages = Math.max(1, Math.ceil((totalItems !== null && totalItems !== void 0 ? totalItems : 0) / pageSize));
    const pages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$helpers$2f$getVisiblePages$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(totalPages, activePage, 3);
    const handlePrevPage = ()=>{
        setActivePage((prev)=>{
            const prevPage = typeof prev === "number" ? prev : 1;
            return Math.max(1, prevPage - 1);
        });
    };
    const handleNextPage = ()=>{
        setActivePage((prev)=>{
            const prevPage = typeof prev === "number" ? prev : 1;
            return Math.min(totalPages, prevPage + 1);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Pagination.useEffect": ()=>{
            onPageChange === null || onPageChange === void 0 ? void 0 : onPageChange(activePage);
        }
    }["Pagination.useEffect"], [
        activePage
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationNavContainer"])(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationButtonControls"])({
                    disabled: activePage <= 1
                }),
                onClick: handlePrevPage,
                "aria-label": "Prev Page",
                disabled: activePage <= 1,
                children: [
                    "<",
                    " Prev"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/pagination/pagination.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            pages.map((page, i)=>page === "..." ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-2 select-none text-gray-400",
                    children: "..."
                }, "dots-".concat(i), false, {
                    fileName: "[project]/src/components/beginner/pagination/pagination.tsx",
                    lineNumber: 57,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>setActivePage(page),
                    "aria-label": "Page ".concat(page),
                    "aria-current": page === activePage ? "page" : undefined,
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationButtonControls"])({
                        isActive: page === activePage
                    }),
                    children: page
                }, page, false, {
                    fileName: "[project]/src/components/beginner/pagination/pagination.tsx",
                    lineNumber: 61,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaginationButtonControls"])({
                    disabled: activePage === totalPages
                }),
                onClick: handleNextPage,
                "aria-label": "Next Page",
                disabled: activePage === totalPages,
                children: [
                    "Next ",
                    ">"
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/pagination/pagination.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/pagination/pagination.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Pagination, "epxs4sIQfbJvlqtkUVH9XU413M0=");
_c = Pagination;
const __TURBOPACK__default__export__ = Pagination;
var _c;
__turbopack_context__.k.register(_c, "Pagination");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/pagination/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/pagination/pagination.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PaginationWithProps = ()=>{
    _s();
    const [activePage, setActivePage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    const handlePageChange = (page)=>{
        setActivePage(page);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col my-50 justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "font-semibold mb-10",
                children: [
                    "Current Page: ",
                    activePage
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/pagination/index.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$pagination$2f$pagination$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                totalItems: 200,
                pageSize: 10,
                defaultPage: 1,
                onPageChange: handlePageChange
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/pagination/index.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/pagination/index.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(PaginationWithProps, "1V5FWp8UouhHPM1hVYVqcnKvGgM=");
_c = PaginationWithProps;
const __TURBOPACK__default__export__ = PaginationWithProps;
var _c;
__turbopack_context__.k.register(_c, "PaginationWithProps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/star-rating/star-rating.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarRatingButton",
    ()=>StarRatingButton,
    "StarRatingClearButton",
    ()=>StarRatingClearButton,
    "StarRatingContainer",
    ()=>StarRatingContainer,
    "StarRatingIcon",
    ()=>StarRatingIcon,
    "StarRatingTitle",
    ()=>StarRatingTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const StarRatingContainer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "flex flex-col gap-2"
});
const StarRatingTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "font-semibold text-md mb-2"
});
const StarRatingButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "cursor-pointer p-1 focus:outline-none disabled:cursor-not-allowed mb-8"
});
const StarRatingIcon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "block",
    variants: {
        size: {
            sm: "w-4 h-4",
            md: "w-6 h-6",
            lg: "w-8 h-8"
        }
    },
    defaultVariants: {
        size: "md"
    }
});
const StarRatingClearButton = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: "\n    w-fit h-auto px-4 py-2\n    rounded-md font-semibold\n    cursor-pointer \n    disabled:cursor-not-allowed disabled:bg-gray-400\n    ",
    variants: {
        intent: {
            primary: "bg-blue-600 hover:bg-blue-400 text-white",
            danger: "bg-red-600 hover:bg-red-400 text-white"
        }
    },
    defaultVariants: {
        intent: "danger"
    }
});
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/star-rating/star-rating.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/star-rating/star-rating.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const StarRating = (param)=>{
    let { id, name, className, title, defaultValue, onChange, step, readOnly, clearable, size } = param;
    _s();
    const [rating, setRating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 0);
    const [hover, setHover] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const getStarType = (starValue)=>{
        const current = hover || rating;
        if (starValue <= current) return "full";
        if (step === 0.5 && current + 0.5 === starValue) return "half";
        return "empty";
    };
    const handleClick = (e, starValue)=>{
        if (readOnly) return;
        let newRating = starValue;
        if (step === 0.5) {
            const { left, width } = e.currentTarget.getBoundingClientRect();
            const hoverX = e.clientX - left;
            const isHalf = hoverX < width / 2;
            if (isHalf) {
                newRating = newRating - 0.5;
            }
        }
        setRating(newRating);
        onChange === null || onChange === void 0 ? void 0 : onChange(newRating);
    };
    const handleMouseMove = (e, starValue)=>{
        if (step === 0.5) {
            const { left, width } = e.currentTarget.getBoundingClientRect();
            const hoverX = e.clientX - left;
            const isHalf = hoverX < width / 2;
            setHover(isHalf ? starValue - 0.5 : starValue);
        } else {
            setHover(starValue);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2 ".concat(className),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-semibold text-md mb-2",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                lineNumber: 69,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row gap-2",
                children: Array.from({
                    length: 5
                }, (_, i)=>{
                    const starValue = i + 1;
                    const type = getStarType(starValue);
                    const starSrc = type === "full" ? "/svg/star-filled.svg" : type === "half" ? "/svg/star-half-filled.svg" : "/svg/star-outline.svg";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: (e)=>handleClick(e, starValue),
                        onMouseMove: (e)=>handleMouseMove(e, starValue),
                        onMouseLeave: ()=>setHover(0),
                        disabled: readOnly,
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRatingButton"])(),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: starSrc,
                            alt: "star",
                            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRatingIcon"])({
                                size
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                            lineNumber: 92,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, starValue, false, {
                        fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            clearable && !readOnly && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StarRatingClearButton"])(),
                onClick: ()=>setRating(0),
                disabled: rating === 0,
                children: "Clear All"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                lineNumber: 98,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "hidden",
                id: id,
                name: name,
                value: rating,
                readOnly: true
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
                lineNumber: 108,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/star-rating/star-rating.tsx",
        lineNumber: 68,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StarRating, "yDbir+E5R6RstShO7g/FvmKQ3C8=");
_c = StarRating;
const __TURBOPACK__default__export__ = StarRating;
var _c;
__turbopack_context__.k.register(_c, "StarRating");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/star-rating/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/star-rating/star-rating.tsx [app-client] (ecmascript)");
'use client';
;
;
const StarRatingWithProps = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$star$2d$rating$2f$star$2d$rating$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: "How's your experience?",
            defaultValue: 3,
            step: 0.5,
            clearable: true,
            size: "lg"
        }, void 0, false, {
            fileName: "[project]/src/components/beginner/star-rating/index.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/star-rating/index.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = StarRatingWithProps;
const __TURBOPACK__default__export__ = StarRatingWithProps;
var _c;
__turbopack_context__.k.register(_c, "StarRatingWithProps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/stopwatch/stopwatch.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stopwatchStyles",
    ()=>stopwatchStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const stopwatchStyles = {
    wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "w-90 max-w-md p-8 rounded-lg shadow-lg text-center bg-primary mx-auto"
    }),
    timeDisplay: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "text-4xl font-mono text-white tracking-wider"
    }),
    buttonContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "flex flex-row justify-center items-center gap-4 mt-6"
    }),
    button: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "px-4 py-2 rounded text-lg font-semibold shadow transition-colors duration-200 cursor-pointer rounded-md",
        variants: {
            variant: {
                start: "bg-green-500 hover:bg-green-600 text-white",
                pause: "bg-yellow-500 hover:bg-yellow-600 text-white",
                reset: "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }
        }
    })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/stopwatch/stopwatch.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/stopwatch/stopwatch.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const formatTime = (ms)=>{
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor(ms % 3600000 / 60000);
    const seconds = Math.floor(ms % 60000 / 1000);
    return "".concat(String(hours).padStart(2, "0"), ":").concat(String(minutes).padStart(2, "0"), ":").concat(String(seconds).padStart(2, "0"));
};
const Stopwatch = ()=>{
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isRunning, setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const startRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const handleStartPause = ()=>{
        if (isRunning) {
            if (intervalRef.current !== null) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            setIsRunning(false);
        } else {
            startRef.current = Date.now() - time;
            console.log("start time: ", startRef.current);
            intervalRef.current = window.setInterval(()=>{
                setTime(Date.now() - startRef.current);
            }, 10);
            setIsRunning(true);
        }
    };
    const handleReset = ()=>{
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setIsRunning(false);
        setTime(0);
        startRef.current = 0;
    };
    // clear Interval
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Stopwatch.useEffect": ()=>{
            return ({
                "Stopwatch.useEffect": ()=>{
                    if (intervalRef.current !== null) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                }
            })["Stopwatch.useEffect"];
        }
    }["Stopwatch.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopwatchStyles"].wrapper(),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopwatchStyles"].timeDisplay(),
                children: formatTime(time)
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/stopwatch/stopwatch.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopwatchStyles"].buttonContainer(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleStartPause,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopwatchStyles"].button({
                            variant: isRunning ? "pause" : "start"
                        }),
                        children: isRunning ? "Pause" : "Start"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/stopwatch/stopwatch.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleReset,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$stopwatch$2f$stopwatch$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopwatchStyles"].button({
                            variant: "reset"
                        }),
                        children: "Reset"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/stopwatch/stopwatch.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/stopwatch/stopwatch.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/stopwatch/stopwatch.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Stopwatch, "6Uk/xCm5bMqiq1Aw8G88caHYB1Y=");
_c = Stopwatch;
const __TURBOPACK__default__export__ = Stopwatch;
var _c;
__turbopack_context__.k.register(_c, "Stopwatch");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/tab/Tab/Tab.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tabStyles",
    ()=>tabStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const tabStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: [
        "px-4 py-2 text-sm font-medium font-semibold transition-all duration-200 cursor-pointer",
        "border-b-4 border-transparent",
        "hover:text-blue-600 hover:border-blue-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible: ring-rounded-md",
        "disable:text-gray-400 disabled:cursor-not-allowed"
    ],
    variants: {
        isActive: {
            true: "text-blue-600 border-blue-600 hover:border-blue-600",
            false: "text-gray-600 border-transparent"
        }
    },
    defaultVariants: {
        isActive: false
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/tab/Tab/Tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$Tab$2f$Tab$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/tab/Tab/Tab.styles.ts [app-client] (ecmascript)");
;
;
const Tab = (param)=>{
    let { id, title, disabled, onTabChange, isActive, handleKeyDown, setRef } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        ref: setRef,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$Tab$2f$Tab$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabStyles"])({
            isActive
        }),
        id: id,
        disabled: disabled,
        onClick: ()=>!disabled && (onTabChange === null || onTabChange === void 0 ? void 0 : onTabChange(id)),
        onKeyDown: (e)=>!disabled && (handleKeyDown === null || handleKeyDown === void 0 ? void 0 : handleKeyDown(e, id)),
        role: "tab",
        "aria-selected": isActive,
        tabIndex: isActive ? 0 : -1,
        children: title
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/tab/Tab/Tab.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Tab;
const __TURBOPACK__default__export__ = Tab;
var _c;
__turbopack_context__.k.register(_c, "Tab");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/tab/TabPanel/TabPanel.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "tabPanelStyles",
    ()=>tabPanelStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const tabPanelStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
    base: [
        "p-4 bg-white rounded-xl shadow-sm",
        "transition-opacity duration-200 ease-in-out",
        "border border-gray-200",
        "focus:outline-none",
        "data-hidden:pointer-events-none"
    ]
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$TabPanel$2f$TabPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/tab/TabPanel/TabPanel.styles.ts [app-client] (ecmascript)");
;
;
;
const panelImports = {
    analytics: ()=>__turbopack_context__.A("[project]/src/components/beginner/tab/panels/AnalyticsPanel.tsx [app-client] (ecmascript, async loader)"),
    reports: ()=>__turbopack_context__.A("[project]/src/components/beginner/tab/panels/ReportsPanel.tsx [app-client] (ecmascript, async loader)")
};
const TabPanel = (param)=>{
    let { id, lazyLoad, content, contentId } = param;
    let LazyComponent = null;
    if (lazyLoad && contentId && panelImports[contentId]) {
        LazyComponent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["lazy"])(panelImports[contentId]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$TabPanel$2f$TabPanel$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tabPanelStyles"])(),
        id: id,
        children: lazyLoad && LazyComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4",
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx",
                lineNumber: 25,
                columnNumber: 29
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LazyComponent, {}, void 0, false, {
                fileName: "[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx",
                lineNumber: 26,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx",
            lineNumber: 25,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0)) : content
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = TabPanel;
const __TURBOPACK__default__export__ = TabPanel;
var _c;
__turbopack_context__.k.register(_c, "TabPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/tab/TabList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$Tab$2f$Tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/tab/Tab/Tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$TabPanel$2f$TabPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/tab/TabPanel/TabPanel.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const TabList = (param)=>{
    let { activeIndex, tabs } = param;
    _s();
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(activeIndex);
    const tabRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({});
    const onTabChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TabList.useCallback[onTabChange]": (id)=>{
            var _tabRefs_current_id;
            setCurrentIndex(id);
            (_tabRefs_current_id = tabRefs.current[id]) === null || _tabRefs_current_id === void 0 ? void 0 : _tabRefs_current_id.focus();
        }
    }["TabList.useCallback[onTabChange]"], []);
    const findNext = (startIndex, delta)=>{
        const len = tabs.length;
        if (len === 0) return null;
        let i = startIndex;
        for(let iter = 0; iter < len; iter++){
            i = (i + delta + len) % len;
            const candidate = tabs[i];
            if (!candidate.disabled) return candidate.id;
        }
        return null;
    };
    const focusById = (id)=>{
        if (!id) return;
        const el = tabRefs.current[id];
        if (el) el.focus();
    };
    const handleKeyDown = (e, id)=>{
        const currentIdx = tabs.findIndex((t)=>t.id === id);
        if (currentIdx === -1) return;
        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            const nextId = findNext(currentIdx, 1);
            if (nextId) {
                setCurrentIndex(nextId);
                focusById(nextId);
            }
            return;
        }
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            const nextId = findNext(currentIdx, -1);
            if (nextId) {
                setCurrentIndex(nextId);
                focusById(nextId);
            }
            return;
        }
    };
    const activeTab = tabs.find((tab)=>tab.id === currentIndex);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: " flex flex-row gap-2 bg-gray-100 rounded-xl shadow-inner w-fit border border-gray-200 ",
                role: "tablist",
                children: tabs.map((tab)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$Tab$2f$Tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        id: tab.id,
                        title: tab.title,
                        disabled: tab.disabled,
                        onTabChange: onTabChange,
                        isActive: currentIndex === tab.id,
                        handleKeyDown: handleKeyDown,
                        setRef: (el)=>{
                            tabRefs.current[tab.id] = el;
                        }
                    }, tab.id, false, {
                        fileName: "[project]/src/components/beginner/tab/TabList.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/tab/TabList.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            activeTab && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$tab$2f$TabPanel$2f$TabPanel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: activeTab.id,
                lazyLoad: activeTab === null || activeTab === void 0 ? void 0 : activeTab.lazyLoad,
                content: activeTab === null || activeTab === void 0 ? void 0 : activeTab.content,
                contentId: activeTab === null || activeTab === void 0 ? void 0 : activeTab.contentId
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/tab/TabList.tsx",
                lineNumber: 96,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/tab/TabList.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TabList, "D9m4Bulp5eDxq6TpGJYgFK6lUuM=");
_c = TabList;
const __TURBOPACK__default__export__ = TabList;
var _c;
__turbopack_context__.k.register(_c, "TabList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/theme-mode/theme-mode.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$theme$2d$mode$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/theme-mode/hooks/useTheme.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const ThemeMode = ()=>{
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$theme$2d$mode$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "darkMode h-120 w-full flex justify-center items-center border-2 rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            onClick: toggleTheme,
            className: "px-4 py-2 rounded-md bg-black text-white cursor-pointer font-medium shadow-sm hover:shadow-md transition-colors",
            children: theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"
        }, void 0, false, {
            fileName: "[project]/src/components/beginner/theme-mode/theme-mode.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/theme-mode/theme-mode.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ThemeMode, "Q4eAjrIZ0CuRuhycs6byifK2KBk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$theme$2d$mode$2f$hooks$2f$useTheme$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeMode;
const __TURBOPACK__default__export__ = ThemeMode;
var _c;
__turbopack_context__.k.register(_c, "ThemeMode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/timer/hooks/useCurrentTime.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCurrentTime",
    ()=>useCurrentTime
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
const useCurrentTime = ()=>{
    _s();
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Date());
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCurrentTime.useEffect": ()=>{
            const timeInterval = setInterval({
                "useCurrentTime.useEffect.timeInterval": ()=>{
                    setCurrentTime(new Date());
                }
            }["useCurrentTime.useEffect.timeInterval"], 1000);
            return ({
                "useCurrentTime.useEffect": ()=>clearInterval(timeInterval)
            })["useCurrentTime.useEffect"];
        }
    }["useCurrentTime.useEffect"], [
        currentTime
    ]);
    return {
        currentTime
    };
};
_s(useCurrentTime, "f3elDUct5ap4W3FuLtGG73aMsLc=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/timer/timer.styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "timerStyles",
    ()=>timerStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/tailwind-variants/dist/index.js [app-client] (ecmascript) <locals>");
;
const timerStyles = {
    wrapper: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "w-90 p-8 rounded-lg shadow-lg text-center bg-primary mx-auto"
    }),
    listContainer: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "flex flex-row justify-center items-center gap-4"
    }),
    listItems: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$variants$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tv"])({
        base: "flex flex-col justify-center items-center text-primary text-3xl font-bold w-20 h-20 bg-white rounded-md shadow"
    })
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/timer/timer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$hooks$2f$useCurrentTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/timer/hooks/useCurrentTime.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$timer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/timer/timer.styles.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Timer = ()=>{
    _s();
    const { currentTime } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$hooks$2f$useCurrentTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"])();
    const labels = [
        "Hours",
        "Minutes",
        "Seconds"
    ];
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$timer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timerStyles"].wrapper(),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
            "aria-label": "timer",
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$timer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timerStyles"].listContainer(),
            children: [
                hours,
                minutes,
                seconds
            ].map((item, index)=>{
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                    "aria-label": "Current ".concat(labels[index], ": ").concat(item),
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$timer$2e$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timerStyles"].listItems(),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item
                        }, void 0, false, {
                            fileName: "[project]/src/components/beginner/timer/timer.tsx",
                            lineNumber: 23,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            children: labels[index]
                        }, void 0, false, {
                            fileName: "[project]/src/components/beginner/timer/timer.tsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/components/beginner/timer/timer.tsx",
                    lineNumber: 18,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            })
        }, void 0, false, {
            fileName: "[project]/src/components/beginner/timer/timer.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/beginner/timer/timer.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Timer, "19l2HgriFi7ASJ/r0yIeeLQJqXg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$timer$2f$hooks$2f$useCurrentTime$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCurrentTime"]
    ];
});
_c = Timer;
const __TURBOPACK__default__export__ = Timer;
var _c;
__turbopack_context__.k.register(_c, "Timer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/toast/index.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$toast$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/toast/ToastProvider.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
// sample toast
const Toasts = [
    {
        id: 1,
        title: "Important Info",
        message: "success",
        type: "info",
        duration: 10000
    },
    {
        id: 2,
        title: "Important Info",
        message: "Sorry, There's some issue from our side.",
        type: "success"
    },
    {
        id: 3,
        title: "Important Info",
        message: "Hello there!",
        type: "error"
    }
];
const ToastProviderWithProps = ()=>{
    _s();
    const { show, clear } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$toast$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-3 items-center justify-center w-300 mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md",
                onClick: ()=>show(Toasts[0]),
                children: "Show Toast 1"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/toast/index.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md",
                onClick: ()=>show(Toasts[1]),
                children: "Show Toast 2"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/toast/index.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md",
                onClick: ()=>show(Toasts[2]),
                children: "Show Toast 3"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/toast/index.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "w-auto h-10 px-2 py-2 bg-blue-500 text-white cursor-pointer font-semibold rounded-md",
                onClick: ()=>clear(),
                children: "Clear All Toasts"
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/toast/index.tsx",
                lineNumber: 51,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/toast/index.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ToastProviderWithProps, "sycTzwu2BSHOwsTKKDviHrZG3hA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$toast$2f$ToastProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = ToastProviderWithProps;
const __TURBOPACK__default__export__ = ToastProviderWithProps;
var _c;
__turbopack_context__.k.register(_c, "ToastProviderWithProps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/utils/useFetchClient.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFetchClient",
    ()=>useFetchClient
]);
const DEFAULT_BASE_URL = "";
/**
 * Generic request handler using Fetch API
 * @template T - Expected response type
 * @param url - API endpoint
 * @param options - Request options (method, headers, body, etc.)
 * @returns Parsed JSON response of type T
 */ const request = async function(url) {
    let options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const baseUrl = url || DEFAULT_BASE_URL;
    const response = await fetch(baseUrl, options);
    if (!response.ok) {
        throw new Error("Error ".concat(response.status, ": ").concat(response.statusText || response.text));
    }
    return response.json();
};
const useFetchClient = ()=>{
    /**
   * GET request → Fetches data from the server.
   * Example: get<User[]>('/api/users')
   */ const get = async (url, options)=>{
        return await request(url, {
            ...options,
            method: "GET"
        });
    };
    /**
   * POST request → Sends new data to the server (creates a resource).
   * Example: post<User>('/api/users', { name: "John" })
   */ const post = async (url, body, options)=>{
        return await request(url, {
            ...options,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                ...(options === null || options === void 0 ? void 0 : options.headers) || {}
            },
            body: JSON.stringify(body)
        });
    };
    /**
   * PUT request → Updates/replaces an existing resource entirely.
   * Example: put<User>('/api/users/1', { id: 1, name: "Jane" })
   */ const put = async (url, body, options)=>{
        return await request(url, {
            ...options,
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                ...(options === null || options === void 0 ? void 0 : options.headers) || {}
            },
            body: JSON.stringify(body)
        });
    };
    /**
   * PATCH request → Partially updates an existing resource.
   * Example: patch<User>('/api/users/1', { name: "Jane" })
   */ const patch = async (url, body, options)=>{
        return await request(url, {
            ...options,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                ...(options === null || options === void 0 ? void 0 : options.headers) || {}
            },
            body: JSON.stringify(body)
        });
    };
    /**
   * DELETE request → Removes a resource from the server.
   * Example: deleteReq<void>('/api/users/1')
   */ const deleteReq = async (url, options)=>{
        return await request(url, {
            ...options,
            method: "DELETE"
        });
    };
    return {
        get,
        post,
        put,
        patch,
        deleteReq
    };
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/todo/todo.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFetchClient.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const Todo = ()=>{
    _s();
    const { get, post, patch, deleteReq } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"])();
    const [todos, setTodos] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [newTodo, setNewTodo] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [updatingId, setUpdatingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [deletingId, setDeletingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Add Todo
    const handleAddTodo = async (title)=>{
        if (!title.trim()) return;
        try {
            const createdTodo = await post("https://jsonplaceholder.typicode.com/todos", {
                userId: 1,
                title,
                completed: false
            }, {});
            setTodos((prev)=>[
                    ...prev,
                    createdTodo
                ]);
            setNewTodo("");
        } catch (e) {
            setError("Failed to add todo.");
        }
    };
    // Update Todo
    const handleUpdateTodo = async (id, completed)=>{
        setUpdatingId(id);
        const prevTodos = [
            ...todos
        ];
        setTodos((prev)=>prev.map((todo)=>todo.id === id ? {
                    ...todo,
                    completed
                } : todo));
        try {
            await patch("https://jsonplaceholder.typicode.com/todos/".concat(id), {
                completed
            }, {});
        } catch (e) {
            setTodos(prevTodos);
            setError("Failed to update todo.");
        } finally{
            setUpdatingId(null);
        }
    };
    // Delete Todo
    const handleDeleteTodo = async (id)=>{
        setDeletingId(id);
        const prevTodos = [
            ...todos
        ];
        setTodos((prev)=>prev.filter((todo)=>todo.id !== id));
        try {
            await deleteReq("https://jsonplaceholder.typicode.com/todos/".concat(id), {});
        } catch (e) {
            setTodos(prevTodos); // rollback
            setError("Failed to delete todo.");
        } finally{
            setDeletingId(null);
        }
    };
    // Fetch todos on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Todo.useEffect": ()=>{
            setLoading(true);
            get("https://jsonplaceholder.typicode.com/todos?_limit=5", {}).then({
                "Todo.useEffect": (result)=>setTodos(result)
            }["Todo.useEffect"]).catch({
                "Todo.useEffect": ()=>setError("Failed to fetch todos.")
            }["Todo.useEffect"]).finally({
                "Todo.useEffect": ()=>setLoading(false)
            }["Todo.useEffect"]);
        }
    }["Todo.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto w-140 p-4",
        children: [
            loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                lineNumber: 84,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500",
                children: error
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                lineNumber: 85,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0)),
            !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        className: "mb-4 flex flex-row items-center",
                        onSubmit: (e)=>{
                            e.preventDefault();
                            handleAddTodo(newTodo);
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "border mr-2 h-10 p-2 flex-1 rounded",
                                placeholder: "Enter todo",
                                type: "text",
                                value: newTodo,
                                onChange: (e)=>setNewTodo(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                lineNumber: 96,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !newTodo.trim(),
                                className: "flex flex-row items-center font-bold text-lg border-2 px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50",
                                children: [
                                    "Add ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaPlus"], {
                                        className: "ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                        lineNumber: 108,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                lineNumber: 103,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-bold mb-2",
                        children: "Todos"
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                        lineNumber: 112,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2",
                        children: todos.map((todo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex flex-row items-center justify-between border-b py-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "flex items-center gap-2 flex-1 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "checkbox",
                                                checked: todo.completed,
                                                disabled: updatingId === todo.id,
                                                onChange: (e)=>handleUpdateTodo(todo.id, e.target.checked)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                                lineNumber: 120,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "ml-2 ".concat(todo.completed ? "line-through text-gray-500" : ""),
                                                children: todo.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                                lineNumber: 128,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                        lineNumber: 119,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        "aria-label": "Delete ".concat(todo.title),
                                        disabled: deletingId === todo.id,
                                        onClick: ()=>handleDeleteTodo(todo.id),
                                        className: "ml-2 text-red-500 hover:text-red-700",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTimesCircle"], {}, void 0, false, {
                                            fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                            lineNumber: 142,
                                            columnNumber: 19
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                        lineNumber: 136,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, todo.id, true, {
                                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                                lineNumber: 115,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/beginner/todo/todo.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/todo/todo.tsx",
                lineNumber: 88,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/todo/todo.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Todo, "yIx56Ab2/rwh58vdu3O9YjVy35w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"]
    ];
});
_c = Todo;
const __TURBOPACK__default__export__ = Todo;
var _c;
__turbopack_context__.k.register(_c, "Todo");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/traffic-light/traffic-light.config.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config
]);
const config = {
    red: {
        backgroundColor: "red",
        duration: 4000,
        next: "green"
    },
    yellow: {
        backgroundColor: "yellow",
        duration: 2000,
        next: "red"
    },
    green: {
        backgroundColor: "green",
        duration: 3000,
        next: "yellow"
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/beginner/traffic-light/traffic-light.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$traffic$2d$light$2f$traffic$2d$light$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/beginner/traffic-light/traffic-light.config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const TrafficLight = ()=>{
    _s();
    const [current, setCurrent] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("green");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrafficLight.useEffect": ()=>{
            const currentConfig = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$traffic$2d$light$2f$traffic$2d$light$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"][current];
            const timer = setTimeout({
                "TrafficLight.useEffect.timer": ()=>{
                    setCurrent(currentConfig.next);
                }
            }["TrafficLight.useEffect.timer"], currentConfig.duration);
            return ({
                "TrafficLight.useEffect": ()=>clearTimeout(timer)
            })["TrafficLight.useEffect"];
        }
    }["TrafficLight.useEffect"], [
        current
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col items-center mt-10",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-900 p-4 rounded-xl flex flex-col gap-4",
                children: Object.keys(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$traffic$2d$light$2f$traffic$2d$light$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"]).map((light)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 rounded-full transition-all duration-300",
                        style: {
                            backgroundColor: current === light ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$beginner$2f$traffic$2d$light$2f$traffic$2d$light$2e$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["config"][light].backgroundColor : "gray"
                        }
                    }, light, false, {
                        fileName: "[project]/src/components/beginner/traffic-light/traffic-light.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/beginner/traffic-light/traffic-light.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-lg font-semibold capitalize",
                children: [
                    "Current: ",
                    current
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/beginner/traffic-light/traffic-light.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/beginner/traffic-light/traffic-light.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TrafficLight, "nki2tV+yXAWHNMb6Y5f5J/n1QP0=");
_c = TrafficLight;
const __TURBOPACK__default__export__ = TrafficLight;
var _c;
__turbopack_context__.k.register(_c, "TrafficLight");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/carousel/carousel.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "imageData",
    ()=>imageData
]);
const imageData = [
    "https://picsum.photos/id/1018/600/400",
    "https://picsum.photos/id/1015/600/400",
    "https://picsum.photos/id/1019/600/400"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/carousel/carousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$carousel$2f$carousel$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intermediate/carousel/carousel.data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const Carousel = (param)=>{
    let { images = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$carousel$2f$carousel$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["imageData"], width = 600, height = 400, autoPlay = true, autoPlayInterval = 10000 } = param;
    _s();
    const [currentImageIndex, setCurrentImageIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Carousel.useEffect": ()=>{
            if (!autoPlay) return;
            const handler = setInterval({
                "Carousel.useEffect.handler": ()=>{
                    setCurrentImageIndex({
                        "Carousel.useEffect.handler": (prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1
                    }["Carousel.useEffect.handler"]);
                }
            }["Carousel.useEffect.handler"], autoPlayInterval);
            return ({
                "Carousel.useEffect": ()=>clearInterval(handler)
            })["Carousel.useEffect"];
        }
    }["Carousel.useEffect"], [
        autoPlay,
        autoPlayInterval,
        images.length,
        currentImageIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex align-center justify-center relative overflow-hidden mx-auto",
        style: {
            width: "".concat(width, "px"),
            height: "".concat(height, "px")
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Previous Slide",
                className: "absolute cursor-pointer top-1/2 left-2 -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl p-3 rounded-full z-10 hover:bg-opacity-70 flex items-center justify-center shadow-lg transition",
                onClick: ()=>setCurrentImageIndex(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1),
                children: "←"
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex transition-transform duration-500",
                style: {
                    transform: "translateX(-".concat(currentImageIndex * 100, "%)")
                },
                children: images.map((img, index)=>{
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: img,
                        className: "object-cover",
                        style: {
                            width: "".concat(width, "px"),
                            height: "".concat(height, "px")
                        },
                        alt: "Slide ".concat(index)
                    }, index, false, {
                        fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                        lineNumber: 49,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                "aria-label": "Next Slide",
                className: "absolute cursor-pointer top-1/2 right-2 -translate-y-1/2 bg-white bg-opacity-50 text-black text-2xl p-3 rounded-full z-10 hover:bg-opacity-70 flex items-center justify-center shadow-lg transition",
                onClick: ()=>setCurrentImageIndex(currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1),
                children: "→"
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-11/12 text-black font-bold bg-white px-2 rounded-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "".concat(currentImageIndex + 1, " / ").concat(images.length)
                }, void 0, false, {
                    fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
                lineNumber: 71,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/intermediate/carousel/carousel.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Carousel, "iwdYV/csWqs0gMEM0R8yiwCHnVs=");
_c = Carousel;
const __TURBOPACK__default__export__ = Carousel;
var _c;
__turbopack_context__.k.register(_c, "Carousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/folder/tree-node.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const TreeNode = (param)=>{
    let { node } = param;
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    if (node.isFolder) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "ml-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cursor-pointer font-medium flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-100 transition",
                    onClick: ()=>setIsOpen(!isOpen),
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-blue-600",
                            children: isOpen ? "📂" : "📁"
                        }, void 0, false, {
                            fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                            lineNumber: 15,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: node.name
                        }, void 0, false, {
                            fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                    lineNumber: 11,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                isOpen && node.children && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "ml-6 border-l border-gray-300 pl-3",
                    children: node.children.map((child, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreeNode, {
                            node: child
                        }, index, false, {
                            fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                            lineNumber: 22,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "ml-10 flex items-center space-x-2 px-2 py-1 rounded-md hover:bg-gray-50 transition",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: "📄"
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-gray-700",
                children: node.name
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/intermediate/folder/tree-node.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(TreeNode, "+sus0Lb0ewKHdwiUhiTAJFoFyQ0=");
_c = TreeNode;
const __TURBOPACK__default__export__ = TreeNode;
var _c;
__turbopack_context__.k.register(_c, "TreeNode");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/infinite-scroll/hooks/useIntersectionObserver.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFetchClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const useIntersectionObserver = ()=>{
    _s();
    const markerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [page, setPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasMore, setHasMore] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const { get } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"])();
    const fetchDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useIntersectionObserver.useCallback[fetchDetails]": async (param)=>{
            let { page, limit } = param;
            if (isLoading || !hasMore) return;
            setIsLoading(true);
            const skip = limit * page;
            try {
                const url = "https://dummyjson.com/products?limit=".concat(limit, "&skip=").concat(skip);
                const response = await get(url, {});
                const products = Array.isArray(response === null || response === void 0 ? void 0 : response.products) ? response.products : [];
                const total = typeof (response === null || response === void 0 ? void 0 : response.total) === "number" ? response.total : -1;
                if (products.length > 0) {
                    setItems({
                        "useIntersectionObserver.useCallback[fetchDetails]": (prev)=>[
                                ...prev,
                                ...products
                            ]
                    }["useIntersectionObserver.useCallback[fetchDetails]"]);
                }
                if (total >= 0) {
                    const loaded = (page + 1) * limit;
                    setHasMore(loaded < total);
                } else {
                    if (products.length < limit) setHasMore(false);
                }
            } catch (error) {
                console.log(error);
            } finally{
                setIsLoading(false);
            }
        }
    }["useIntersectionObserver.useCallback[fetchDetails]"], [
        get,
        hasMore,
        isLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            if (!hasMore) return;
            fetchDetails({
                page,
                limit: 5
            });
        }
    }["useIntersectionObserver.useEffect"], [
        page
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useIntersectionObserver.useEffect": ()=>{
            const node = markerRef.current;
            if (!node) return;
            const observer = new IntersectionObserver({
                "useIntersectionObserver.useEffect": (entries)=>{
                    if (entries[0].isIntersecting && !isLoading && hasMore) {
                        setPage({
                            "useIntersectionObserver.useEffect": (prev)=>prev + 1
                        }["useIntersectionObserver.useEffect"]);
                    }
                }
            }["useIntersectionObserver.useEffect"], {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            });
            observer.observe(node);
            return ({
                "useIntersectionObserver.useEffect": ()=>observer.disconnect()
            })["useIntersectionObserver.useEffect"];
        }
    }["useIntersectionObserver.useEffect"], [
        isLoading,
        hasMore
    ]);
    return {
        markerRef,
        items,
        isLoading,
        hasMore
    };
};
_s(useIntersectionObserver, "RqsjAf8EB41IShQZKHZ9uPOOSaw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"]
    ];
});
const __TURBOPACK__default__export__ = useIntersectionObserver;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InfiniteScroll",
    ()=>InfiniteScroll,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$infinite$2d$scroll$2f$hooks$2f$useIntersectionObserver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intermediate/infinite-scroll/hooks/useIntersectionObserver.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const InfiniteScroll = ()=>{
    _s();
    const { markerRef, items, isLoading, hasMore } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$infinite$2d$scroll$2f$hooks$2f$useIntersectionObserver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-[900px] mx-auto p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-3 text-xl text-bold",
                children: "Products"
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-4",
                children: items.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-sm p-3 flex flex-col gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full aspect-[16/10] overflow-hidden rounded-md bg-gray-100 flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: item.thumbnail,
                                    alt: item.title,
                                    className: "w-full h-full object-cover",
                                    loading: "lazy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                                lineNumber: 18,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-semibold",
                                children: item.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                                lineNumber: 27,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-gray-600",
                                children: item.price
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                                lineNumber: 28,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                        lineNumber: 14,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: markerRef,
                className: "h-1"
            }, void 0, false, {
                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-3 text-center",
                children: [
                    isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "font-bold",
                        children: "Loading more…"
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                        lineNumber: 36,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0)),
                    !isLoading && !hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: "No more items"
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                        lineNumber: 37,
                        columnNumber: 36
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/intermediate/infinite-scroll/infinite-scroll.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(InfiniteScroll, "g/jdXZnZJyvNhypKERi2SaESvJ8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$infinite$2d$scroll$2f$hooks$2f$useIntersectionObserver$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = InfiniteScroll;
const __TURBOPACK__default__export__ = InfiniteScroll;
var _c;
__turbopack_context__.k.register(_c, "InfiniteScroll");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "checkboxData",
    ()=>checkboxData
]);
const checkboxData = [
    {
        id: "1",
        label: "Fruits",
        children: [
            {
                id: "1-1",
                label: "Banana"
            },
            {
                id: "1-2",
                label: "Apple"
            },
            {
                id: "1-3",
                label: "Orange"
            }
        ]
    },
    {
        id: "2",
        label: "Electronics",
        children: [
            {
                id: "2-1",
                label: "Laptop"
            },
            {
                id: "2-2",
                label: "Tablet"
            },
            {
                id: "2-3",
                label: "Phone"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$select$2d$checkbox$2f$multi$2d$select$2d$checkbox$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MultiSelectCheckbox = ()=>{
    _s();
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(new Set(""));
    // gets all child nodes ids
    const getAllNodeIds = (node)=>{
        let ids = [
            node.id
        ];
        if (node.children) {
            node.children.forEach((child)=>{
                ids = ids.concat(getAllNodeIds(child));
            });
        }
        return ids;
    };
    // update parent selection
    const updateParentSelection = (node, selected)=>{
        if (!node.children) return;
        const allChildrenSelected = node.children.every((child)=>selected.has(child.id));
        if (allChildrenSelected) {
            selected.add(node.id);
        } else {
            selected.delete(node.id);
        }
    };
    // handle checkbox change
    const handleCheckboxChange = (node, isChecked)=>{
        const newSelected = new Set(selectedIds);
        const allNodeIds = getAllNodeIds(node);
        if (isChecked) {
            allNodeIds.forEach((id)=>newSelected.add(id));
        } else {
            allNodeIds.forEach((id)=>newSelected.delete(id));
        }
        const updateParents = (nodes)=>{
            nodes.forEach((node)=>{
                if (node.children) {
                    updateParents(node.children);
                    updateParentSelection(node, newSelected);
                }
            });
        };
        updateParents(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$select$2d$checkbox$2f$multi$2d$select$2d$checkbox$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkboxData"]);
        setSelectedIds(newSelected);
    };
    const renderCheckbox = (data)=>{
        return data.map((node)=>{
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "ml-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: selectedIds.has(node.id),
                                onChange: (e)=>handleCheckboxChange(node, e.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx",
                                lineNumber: 66,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            node.label
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    node.children && renderCheckbox(node.children)
                ]
            }, node.id, true, {
                fileName: "[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx",
                lineNumber: 64,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto",
            children: renderCheckbox(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$select$2d$checkbox$2f$multi$2d$select$2d$checkbox$2e$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["checkboxData"])
        }, void 0, false, {
            fileName: "[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx",
            lineNumber: 81,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/intermediate/multi-select-checkbox/multi-select-checkbox.tsx",
        lineNumber: 80,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MultiSelectCheckbox, "UKkUk1VY3eA382OpgOYCWIzneUA=");
_c = MultiSelectCheckbox;
const __TURBOPACK__default__export__ = MultiSelectCheckbox;
var _c;
__turbopack_context__.k.register(_c, "MultiSelectCheckbox");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/multi-step-form/multi-step-form.config.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "stepConfig",
    ()=>stepConfig
]);
const stepConfig = [
    {
        id: 1,
        title: "Personal Details",
        fields: [
            {
                name: "firstName",
                label: "First Name",
                placeholder: "Ex: John",
                type: 'text',
                required: true
            },
            {
                name: "lastName",
                label: "Last Name",
                placeholder: "Ex: John",
                type: 'text',
                required: true
            }
        ]
    },
    {
        id: 2,
        title: "Address",
        fields: [
            {
                name: "address",
                label: "Address",
                placeholder: "123 Baker Street",
                type: 'text',
                required: true
            },
            {
                name: "city",
                label: "City",
                placeholder: "London",
                type: 'text',
                required: true
            },
            {
                name: "zip",
                label: "ZIP / Postal code",
                placeholder: "NW1 6XE",
                type: 'text',
                required: true
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intermediate/multi-step-form/multi-step-form.config.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const MultiStepForm = ()=>{
    _s();
    // initial form values
    const initialFormData = ()=>{
        let obj = {};
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].forEach((step)=>{
            step.fields.forEach((field)=>{
                if (field.type === "checkbox") {
                    obj[field.name] = false;
                } else {
                    obj[field.name] = "";
                }
            });
        });
        return obj;
    };
    const [stepIndex, setStepIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "MultiStepForm.useState": ()=>initialFormData()
    }["MultiStepForm.useState"]);
    const [submitting, setSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const currentStep = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"][stepIndex];
    // validate current step fields
    const validateStepByConfig = (currentStepConfig)=>{
        if (!currentStepConfig) return true;
        for (const field of currentStepConfig.fields){
            const value = form[field.name];
            if (field.required) {
                if (String(value).trim() === "") {
                    return false;
                }
            }
        }
        return true;
    };
    // update field handler
    const updateField = (name, value)=>{
        setForm((prevForm)=>({
                ...prevForm,
                [name]: value
            }));
    };
    // Move back handler
    const handleBack = ()=>{
        setStepIndex((prev)=>Math.max(0, prev - 1));
    };
    // Move next handler
    const handleNext = ()=>{
        if (!validateStepByConfig(currentStep)) return;
        setStepIndex((prev)=>Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].length - 1, prev + 1));
    };
    // form submission handler
    const handleFormSubmit = async (e)=>{
        e.preventDefault();
        setSubmitting(true);
        try {
            await new Promise((res)=>setTimeout(res, 2000));
            console.log("Submitted payload:", form);
            alert("Submitted! Check console for payload.");
            setForm(()=>initialFormData());
            setStepIndex(0);
        } catch (err) {
            throw new Error("Form submission failed");
        } finally{
            setSubmitting(false);
        }
    };
    // field mapper handler
    const fieldMapper = (field, index)=>{
        switch(field.type){
            case "text":
                {
                    var _form_field_name;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "mb-1",
                                htmlFor: field.name,
                                children: field.label
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 81,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                className: "h-8 px-2 border-1",
                                type: "text",
                                placeholder: field.placeholder,
                                name: field.name,
                                required: field.required,
                                value: (_form_field_name = form[field.name]) !== null && _form_field_name !== void 0 ? _form_field_name : "",
                                onChange: (e)=>updateField(field.name, e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, index, true, {
                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0));
                }
            default:
                {
                    return null;
                }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto p-12 bg-white rounded-xl shadow-md",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 justify-between",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].map((step, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-8 w-8 rounded-md flex items-center justify-center border-2 ".concat(index === stepIndex ? "border-blue-500 bg-blue-500 text-white" : index < stepIndex ? "border-green-500 bg-green-500 text-white" : "border-gray-300 bg-gray-300"),
                                        children: step.id
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                        lineNumber: 109,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm font-semibold",
                                        children: step.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, step.id, true, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 108,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-3 h-2 bg-gray-200 rounded-full overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-full bg-blue-600",
                            style: {
                                width: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].length > 1 ? stepIndex / (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].length - 1) * 100 : 100, "%")
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleFormSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col",
                        children: currentStep.fields.map((field, index)=>{
                            return fieldMapper(field, index);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-6 flex items-center justify-between gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "bg-blue-500 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300 cursor-pointer text-white h-10 w-20 font-bold rounded-sm",
                                disabled: stepIndex === 0,
                                onClick: handleBack,
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            stepIndex < __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleNext,
                                className: "bg-blue-500 hover:bg-blue-700 cursor-pointer text-white h-10 w-20 font-bold rounded-sm",
                                children: "Next"
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 156,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            stepIndex === __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$multi$2d$step$2d$form$2f$multi$2d$step$2d$form$2e$config$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stepConfig"].length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: submitting,
                                className: "px-4 py-2 rounded cursor-pointer ".concat(submitting ? "bg-gray-200 text-gray-500" : "bg-green-600 text-white"),
                                children: submitting ? "Submitting..." : "Submit"
                            }, void 0, false, {
                                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                                lineNumber: 166,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
                lineNumber: 138,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/intermediate/multi-step-form/multi-step-form.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(MultiStepForm, "d4Bl6PYdAu61IHdi4YkVvb0WFsk=");
_c = MultiStepForm;
const __TURBOPACK__default__export__ = MultiStepForm;
var _c;
__turbopack_context__.k.register(_c, "MultiStepForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/search-autocomplete/hooks/useDebounce.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 *
 * @param value value to be debounced
 * @param delay delay in ms
 * @returns Debounced value
 */ const useDebounce = function(value) {
    let delay = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 500;
    _s();
    const [debounceValue, setDebounceValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useDebounce.useEffect": ()=>{
            const handler = setTimeout({
                "useDebounce.useEffect.handler": ()=>{
                    setDebounceValue(value);
                }
            }["useDebounce.useEffect.handler"], delay);
            return ({
                "useDebounce.useEffect": ()=>{
                    clearTimeout(handler);
                }
            })["useDebounce.useEffect"];
        }
    }["useDebounce.useEffect"], [
        value,
        delay
    ]);
    return debounceValue;
};
_s(useDebounce, "M2sN0VLbDyklZTfjqPUnIiYotXI=");
const __TURBOPACK__default__export__ = useDebounce;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/utils/useFetchClient.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$search$2d$autocomplete$2f$hooks$2f$useDebounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/intermediate/search-autocomplete/hooks/useDebounce.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const SearchAutoComplete = ()=>{
    _s();
    const { get } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"])();
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [searchResults, setSearchResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const debouncedSearchTerm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$search$2d$autocomplete$2f$hooks$2f$useDebounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(searchTerm, 500);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchAutoComplete.useEffect": ()=>{
            if (!debouncedSearchTerm.trim()) {
                setSearchResults([]);
                return;
            }
            const fetchData = {
                "SearchAutoComplete.useEffect.fetchData": async ()=>{
                    try {
                        const response = await get("https://dummyjson.com/products/search?q=".concat(debouncedSearchTerm), {});
                        if (response.products.length > 0) {
                            const mapped = response.products.map({
                                "SearchAutoComplete.useEffect.fetchData.mapped": (p)=>({
                                        id: p.id,
                                        title: p.title,
                                        price: p.price,
                                        thumbnail: p.thumbnail
                                    })
                            }["SearchAutoComplete.useEffect.fetchData.mapped"]);
                            setSearchResults(mapped);
                        } else {
                            setSearchResults([]);
                        }
                    } catch (error) {
                        console.error("Failed to fetch products.", error);
                        setSearchResults([]);
                    }
                }
            }["SearchAutoComplete.useEffect.fetchData"];
            fetchData();
        }
    }["SearchAutoComplete.useEffect"], [
        debouncedSearchTerm
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex justify-center items-center bg-gray-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-120",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    className: "w-full h-12 border-2 px-2 rounded-md mb-4",
                    name: "search-term",
                    type: "text",
                    placeholder: "Search for products",
                    onChange: (e)=>setSearchTerm(e.target.value),
                    "data-testid": "search-term"
                }, void 0, false, {
                    fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "space-y-2",
                    children: searchResults.length > 0 ? searchResults.map((product)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "p-2 border rounded-md hover:bg-gray-100 cursor-pointer",
                            children: product.title
                        }, product.id, false, {
                            fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
                            lineNumber: 61,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-gray-500",
                        children: "No search results found."
                    }, void 0, false, {
                        fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
                        lineNumber: 69,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/intermediate/search-autocomplete/search-autocomplete.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(SearchAutoComplete, "/yflrpdDRSDGMyHHebziAj0HeOU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$utils$2f$useFetchClient$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFetchClient"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$intermediate$2f$search$2d$autocomplete$2f$hooks$2f$useDebounce$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = SearchAutoComplete;
const __TURBOPACK__default__export__ = SearchAutoComplete;
var _c;
__turbopack_context__.k.register(_c, "SearchAutoComplete");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_deb2db08._.js.map