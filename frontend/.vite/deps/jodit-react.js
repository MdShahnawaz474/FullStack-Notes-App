import {
  __commonJS,
  require_react
} from "./chunk-UTEJFLXC.js";

// node_modules/jodit-react/build/jodit-react.js
var require_jodit_react = __commonJS({
  "node_modules/jodit-react/build/jodit-react.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e(require_react()) : "function" == typeof define && define.amd ? define(["react"], e) : "object" == typeof exports ? exports.JoditEditor = e(require_react()) : (t.JoditEditor = t.JoditEditor || {}, t.JoditEditor.Jodit = e(t.React));
    }(self, (t) => (() => {
      var e = { 922: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = [];
          return e2.toString = function() {
            return this.map(function(e3) {
              var i2 = "", o2 = void 0 !== e3[5];
              return e3[4] && (i2 += "@supports (".concat(e3[4], ") {")), e3[2] && (i2 += "@media ".concat(e3[2], " {")), o2 && (i2 += "@layer".concat(e3[5].length > 0 ? " ".concat(e3[5]) : "", " {")), i2 += t3(e3), o2 && (i2 += "}"), e3[2] && (i2 += "}"), e3[4] && (i2 += "}"), i2;
            }).join("");
          }, e2.i = function(t4, i2, o2, n2, r) {
            "string" == typeof t4 && (t4 = [[null, t4, void 0]]);
            var s = {};
            if (o2) for (var a = 0; a < this.length; a++) {
              var l = this[a][0];
              null != l && (s[l] = true);
            }
            for (var c = 0; c < t4.length; c++) {
              var d = [].concat(t4[c]);
              o2 && s[d[0]] || (void 0 !== r && (void 0 === d[5] || (d[1] = "@layer".concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {").concat(d[1], "}")), d[5] = r), i2 && (d[2] ? (d[1] = "@media ".concat(d[2], " {").concat(d[1], "}"), d[2] = i2) : d[2] = i2), n2 && (d[4] ? (d[1] = "@supports (".concat(d[4], ") {").concat(d[1], "}"), d[4] = n2) : d[4] = "".concat(n2)), e2.push(d));
            }
          }, e2;
        };
      }, 155: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          return e2 || (e2 = {}), t3 ? (t3 = String(t3.__esModule ? t3.default : t3), /^['"].*['"]$/.test(t3) && (t3 = t3.slice(1, -1)), e2.hash && (t3 += e2.hash), /["'() \t\n]|(%20)/.test(t3) || e2.needQuotes ? '"'.concat(t3.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t3) : t3;
        };
      }, 499: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          return t3[1];
        };
      }, 714: (t2) => {
        self, t2.exports = function() {
          var t3 = { 26318: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return o3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t6) {
                return typeof t6;
              } : function(t6) {
                return t6 && "function" == typeof Symbol && t6.constructor === Symbol && t6 !== Symbol.prototype ? "symbol" : typeof t6;
              }, o3(t5);
            }
            function n2(t5, e4, i4) {
              var n3 = i4.value;
              if ("function" != typeof n3) throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(o3(n3)));
              var r2 = false;
              return { configurable: true, get: function() {
                if (r2 || this === t5.prototype || this.hasOwnProperty(e4) || "function" != typeof n3) return n3;
                var i5 = n3.bind(this);
                return r2 = true, Object.defineProperty(this, e4, { configurable: true, get: function() {
                  return i5;
                }, set: function(t6) {
                  n3 = t6, delete this[e4];
                } }), r2 = false, i5;
              }, set: function(t6) {
                n3 = t6;
              } };
            }
            function r(t5) {
              var e4;
              return "undefined" != typeof Reflect && "function" == typeof Reflect.ownKeys ? e4 = Reflect.ownKeys(t5.prototype) : (e4 = Object.getOwnPropertyNames(t5.prototype), "function" == typeof Object.getOwnPropertySymbols && (e4 = e4.concat(Object.getOwnPropertySymbols(t5.prototype)))), e4.forEach(function(e5) {
                if ("constructor" !== e5) {
                  var i4 = Object.getOwnPropertyDescriptor(t5.prototype, e5);
                  "function" == typeof i4.value && Object.defineProperty(t5.prototype, e5, n2(t5, e5, i4));
                }
              }), t5;
            }
            function s() {
              return 1 === arguments.length ? r.apply(void 0, arguments) : n2.apply(void 0, arguments);
            }
            i3.d(e3, { Ay: function() {
              return s;
            } });
          }, 36115: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { T: function() {
              return n2;
            } });
            var o3 = i3(17352);
            class n2 {
              constructor() {
                this.cache = true, this.defaultTimeout = 100, this.namespace = "", this.safeMode = false, this.width = "auto", this.height = "auto", this.safePluginsList = ["about", "enter", "backspace", "size", "bold", "hotkeys"], this.license = "", this.preset = "custom", this.presets = { inline: { inline: true, toolbar: false, toolbarInline: true, toolbarInlineForSelection: true, showXPathInStatusbar: false, showCharsCounter: false, showWordsCounter: false, showPlaceholder: false } }, this.ownerDocument = "undefined" != typeof document ? document : null, this.ownerWindow = "undefined" != typeof window ? window : null, this.shadowRoot = null, this.zIndex = 0, this.readonly = false, this.disabled = false, this.activeButtonsInReadOnly = ["source", "fullsize", "print", "about", "dots", "selectall"], this.allowCommandsInReadOnly = ["selectall", "preview", "print"], this.toolbarButtonSize = "middle", this.allowTabNavigation = false, this.inline = false, this.theme = "default", this.saveModeInStorage = false, this.editorClassName = false, this.className = false, this.style = false, this.containerStyle = false, this.styleValues = {}, this.triggerChangeEvent = true, this.direction = "", this.language = "auto", this.debugLanguage = false, this.i18n = false, this.tabIndex = -1, this.toolbar = true, this.statusbar = true, this.showTooltip = true, this.showTooltipDelay = 200, this.useNativeTooltip = false, this.defaultActionOnPaste = o3.INSERT_AS_HTML, this.enter = o3.PARAGRAPH, this.iframe = false, this.editHTMLDocumentMode = false, this.enterBlock = "br" !== this.enter ? this.enter : o3.PARAGRAPH, this.defaultMode = o3.MODE_WYSIWYG, this.useSplitMode = false, this.colors = { greyscale: ["#000000", "#434343", "#666666", "#999999", "#B7B7B7", "#CCCCCC", "#D9D9D9", "#EFEFEF", "#F3F3F3", "#FFFFFF"], palette: ["#980000", "#FF0000", "#FF9900", "#FFFF00", "#00F0F0", "#00FFFF", "#4A86E8", "#0000FF", "#9900FF", "#FF00FF"], full: ["#E6B8AF", "#F4CCCC", "#FCE5CD", "#FFF2CC", "#D9EAD3", "#D0E0E3", "#C9DAF8", "#CFE2F3", "#D9D2E9", "#EAD1DC", "#DD7E6B", "#EA9999", "#F9CB9C", "#FFE599", "#B6D7A8", "#A2C4C9", "#A4C2F4", "#9FC5E8", "#B4A7D6", "#D5A6BD", "#CC4125", "#E06666", "#F6B26B", "#FFD966", "#93C47D", "#76A5AF", "#6D9EEB", "#6FA8DC", "#8E7CC3", "#C27BA0", "#A61C00", "#CC0000", "#E69138", "#F1C232", "#6AA84F", "#45818E", "#3C78D8", "#3D85C6", "#674EA7", "#A64D79", "#85200C", "#990000", "#B45F06", "#BF9000", "#38761D", "#134F5C", "#1155CC", "#0B5394", "#351C75", "#733554", "#5B0F00", "#660000", "#783F04", "#7F6000", "#274E13", "#0C343D", "#1C4587", "#073763", "#20124D", "#4C1130"] }, this.colorPickerDefaultTab = "background", this.imageDefaultWidth = 300, this.removeButtons = [], this.disablePlugins = [], this.extraPlugins = [], this.extraButtons = [], this.extraIcons = {}, this.createAttributes = { table: { style: "border-collapse:collapse;width: 100%;" } }, this.sizeLG = 900, this.sizeMD = 700, this.sizeSM = 400, this.buttons = [{ group: "font-style", buttons: [] }, { group: "list", buttons: [] }, { group: "font", buttons: [] }, "---", { group: "script", buttons: [] }, { group: "media", buttons: [] }, "\n", { group: "state", buttons: [] }, { group: "clipboard", buttons: [] }, { group: "insert", buttons: [] }, { group: "indent", buttons: [] }, { group: "color", buttons: [] }, { group: "form", buttons: [] }, "---", { group: "history", buttons: [] }, { group: "search", buttons: [] }, { group: "source", buttons: [] }, { group: "other", buttons: [] }, { group: "info", buttons: [] }], this.events = {}, this.textIcons = false, this.showBrowserColorPicker = true;
              }
              static get defaultOptions() {
                return n2.__defaultOptions || (n2.__defaultOptions = new n2()), n2.__defaultOptions;
              }
            }
            n2.prototype.controls = {};
          }, 86302: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { j: function() {
              return p;
            } });
            var o3 = i3(17352), n2 = i3(59146), r = i3(99951), s = i3(69052), a = i3(2461), l = i3(25376), c = i3(92039), d = i3(98253), u = i3(35642), h = (i3(28712), i3(21567));
            class p {
              constructor() {
                var t5, e4, i4, o4, n3;
                this.timers = /* @__PURE__ */ new Map(), this.__callbacks = /* @__PURE__ */ new Map(), this.__queueMicrotaskNative = null !== (t5 = null === queueMicrotask || void 0 === queueMicrotask ? void 0 : queueMicrotask.bind(window)) && void 0 !== t5 ? t5 : Promise.resolve().then.bind(Promise.resolve()), this.promisesRejections = /* @__PURE__ */ new Set(), this.requestsIdle = /* @__PURE__ */ new Set(), this.requestsRaf = /* @__PURE__ */ new Set(), this.requestIdleCallbackNative = null !== (i4 = null === (e4 = window.requestIdleCallback) || void 0 === e4 ? void 0 : e4.bind(window)) && void 0 !== i4 ? i4 : (t6, e5) => {
                  var i5;
                  const o5 = Date.now();
                  return this.setTimeout(() => {
                    t6({ didTimeout: false, timeRemaining: () => Math.max(0, 50 - (Date.now() - o5)) });
                  }, null !== (i5 = null == e5 ? void 0 : e5.timeout) && void 0 !== i5 ? i5 : 1);
                }, this.__cancelIdleCallbackNative = null !== (n3 = null === (o4 = window.cancelIdleCallback) || void 0 === o4 ? void 0 : o4.bind(window)) && void 0 !== n3 ? n3 : (t6) => {
                  this.clearTimeout(t6);
                }, this.isDestructed = false;
              }
              delay(t5) {
                return this.promise((e4) => this.setTimeout(e4, t5));
              }
              setTimeout(t5, e4, ...i4) {
                if (this.isDestructed) return 0;
                let o4 = {};
                (0, u.R)(e4) && (e4 = 0), (0, a.E)(e4) || (o4 = e4, e4 = o4.timeout || 0), o4.label && this.clearLabel(o4.label);
                const r2 = (0, n2.w)(t5, e4, ...i4), s2 = o4.label || r2;
                return this.timers.set(s2, r2), this.__callbacks.set(s2, t5), r2;
              }
              updateTimeout(t5, e4) {
                if (!t5 || !this.timers.has(t5)) return null;
                const i4 = this.__callbacks.get(t5);
                return this.setTimeout(i4, { label: t5, timeout: e4 });
              }
              clearLabel(t5) {
                t5 && this.timers.has(t5) && ((0, n2.D)(this.timers.get(t5)), this.timers.delete(t5), this.__callbacks.delete(t5));
              }
              clearTimeout(t5) {
                if ((0, d.K)(t5)) return this.clearLabel(t5);
                (0, n2.D)(t5), this.timers.delete(t5), this.__callbacks.delete(t5);
              }
              debounce(t5, e4, i4 = false) {
                let o4 = 0, a2 = false;
                const d2 = [], u2 = (...e5) => {
                  if (!a2) {
                    o4 = 0;
                    const i5 = t5(...e5);
                    if (a2 = true, d2.length) {
                      const t6 = () => {
                        d2.forEach((t7) => t7()), d2.length = 0;
                      };
                      (0, c.y)(i5) ? i5.finally(t6) : t6();
                    }
                  }
                }, h2 = (...r2) => {
                  a2 = false, e4 ? (!o4 && i4 && u2(...r2), (0, n2.D)(o4), o4 = this.setTimeout(() => u2(...r2), (0, s.T)(e4) ? e4() : e4), this.timers.set(t5, o4)) : u2(...r2);
                };
                return (0, l.Q)(e4) && e4.promisify ? (...t6) => {
                  const e5 = this.promise((t7) => {
                    d2.push(t7);
                  }).catch((t7) => {
                    if ((0, r.z)(t7)) return null;
                    throw t7;
                  });
                  return h2(...t6), e5;
                } : h2;
              }
              microDebounce(t5, e4 = false) {
                let i4, o4 = false, n3 = true;
                return (...r2) => {
                  i4 = r2, o4 ? n3 = true : (n3 = true, e4 && (n3 = false, t5(...i4)), o4 = true, this.__queueMicrotaskNative(() => {
                    o4 = false, this.isDestructed || n3 && t5(...i4);
                  }));
                };
              }
              throttle(t5, e4, i4 = false) {
                let o4, n3, r2, a2 = null;
                return (...i5) => {
                  o4 = true, r2 = i5, e4 ? a2 || (n3 = () => {
                    o4 ? (t5(...r2), o4 = false, a2 = this.setTimeout(n3, (0, s.T)(e4) ? e4() : e4), this.timers.set(n3, a2)) : a2 = null;
                  }, n3()) : t5(...r2);
                };
              }
              promise(t5) {
                let e4 = () => {
                };
                const i4 = new Promise((i5, o4) => {
                  e4 = () => o4((0, h.h)("Abort async")), this.promisesRejections.add(e4), t5(i5, o4);
                });
                return i4.finally || "undefined" == typeof process || o3.IS_ES_NEXT || (i4.finally = (t6) => (i4.then(t6).catch(t6), i4)), i4.finally(() => {
                  this.promisesRejections.delete(e4);
                }).catch(() => null), i4.rejectCallback = e4, i4;
              }
              promiseState(t5) {
                if (t5.status) return t5.status;
                if (!Promise.race) return new Promise((e5) => {
                  t5.then((t6) => (e5("fulfilled"), t6), (t6) => {
                    throw e5("rejected"), t6;
                  }), this.setTimeout(() => {
                    e5("pending");
                  }, 100);
                });
                const e4 = {};
                return Promise.race([t5, e4]).then((t6) => t6 === e4 ? "pending" : "fulfilled", () => "rejected");
              }
              requestIdleCallback(t5, e4) {
                const i4 = this.requestIdleCallbackNative(t5, e4);
                return this.requestsIdle.add(i4), i4;
              }
              requestIdlePromise(t5) {
                return this.promise((e4) => {
                  const i4 = this.requestIdleCallback(() => e4(i4), t5);
                });
              }
              cancelIdleCallback(t5) {
                return this.requestsIdle.delete(t5), this.__cancelIdleCallbackNative(t5);
              }
              requestAnimationFrame(t5) {
                const e4 = requestAnimationFrame(t5);
                return this.requestsRaf.add(e4), e4;
              }
              cancelAnimationFrame(t5) {
                this.requestsRaf.delete(t5), cancelAnimationFrame(t5);
              }
              clear() {
                this.requestsIdle.forEach((t5) => this.cancelIdleCallback(t5)), this.requestsRaf.forEach((t5) => this.cancelAnimationFrame(t5)), this.timers.forEach((t5) => (0, n2.D)(this.timers.get(t5))), this.timers.clear(), this.promisesRejections.forEach((t5) => t5()), this.promisesRejections.clear();
              }
              destruct() {
                this.clear(), this.isDestructed = true;
              }
            }
          }, 64890: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { j: function() {
              return o3.j;
            } });
            var o3 = i3(86302);
          }, 37474: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return l;
            } });
            var o3 = i3(64890), n2 = i3(64567), r = i3(56298), s = i3(65147);
            const a = /* @__PURE__ */ new Map();
            class l {
              get componentName() {
                return this.__componentName || (this.__componentName = "jodit-" + (0, s.kebabCase)(((0, s.isFunction)(this.className) ? this.className() : "") || (0, s.getClassName)(this))), this.__componentName;
              }
              getFullElName(t5, e4, i4) {
                const o4 = [this.componentName];
                return t5 && (t5 = t5.replace(/[^a-z0-9-]/gi, "-"), o4.push(`__${t5}`)), e4 && (o4.push("_", e4), o4.push("_", (0, s.isVoid)(i4) ? "true" : i4.toString())), o4.join("");
              }
              get ownerDocument() {
                return this.ow.document;
              }
              get od() {
                return this.ownerDocument;
              }
              get ow() {
                return this.ownerWindow;
              }
              get(t5, e4) {
                return (0, s.get)(t5, e4 || this);
              }
              get isReady() {
                return this.componentStatus === n2.f.ready;
              }
              get isDestructed() {
                return this.componentStatus === n2.f.destructed;
              }
              get isInDestruct() {
                return n2.f.beforeDestruct === this.componentStatus || n2.f.destructed === this.componentStatus;
              }
              bindDestruct(t5) {
                return t5.hookStatus(n2.f.beforeDestruct, () => !this.isInDestruct && this.destruct()), this;
              }
              constructor() {
                this.async = new o3.j(), this.ownerWindow = window, this.__componentStatus = n2.f.beforeInit, this.uid = "jodit-uid-" + (0, r.w9)();
              }
              destruct() {
                this.setStatus(n2.f.destructed), this.async && (this.async.destruct(), this.async = void 0), a.get(this) && a.delete(this), this.ownerWindow = void 0;
              }
              get componentStatus() {
                return this.__componentStatus;
              }
              set componentStatus(t5) {
                this.setStatus(t5);
              }
              setStatus(t5) {
                return this.setStatusComponent(t5, this);
              }
              setStatusComponent(t5, e4) {
                if (t5 === this.__componentStatus) return;
                e4 === this && (this.__componentStatus = t5);
                const i4 = Object.getPrototypeOf(this);
                i4 && (0, s.isFunction)(i4.setStatusComponent) && i4.setStatusComponent(t5, e4);
                const o4 = a.get(this), n3 = null == o4 ? void 0 : o4[t5];
                n3 && n3.length && n3.forEach((t6) => t6(e4));
              }
              hookStatus(t5, e4) {
                let i4 = a.get(this);
                i4 || (i4 = {}, a.set(this, i4)), i4[t5] || (i4[t5] = []), i4[t5].push(e4);
              }
              static isInstanceOf(t5, e4) {
                return t5 instanceof e4;
              }
            }
            l.STATUSES = n2.f;
          }, 77753: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return n2.f;
            }, uA: function() {
              return o3.u;
            }, vG: function() {
              return r.v;
            } });
            var o3 = i3(37474), n2 = i3(64567), r = i3(7982);
          }, 64567: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return o3;
            } });
            const o3 = { beforeInit: "beforeInit", ready: "ready", beforeDestruct: "beforeDestruct", destructed: "destructed" };
          }, 7982: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { v: function() {
              return n2;
            } });
            var o3 = i3(37474);
            class n2 extends o3.u {
              get j() {
                return this.jodit;
              }
              get defaultTimeout() {
                return this.j.defaultTimeout;
              }
              i18n(t5, ...e4) {
                return this.j.i18n(t5, ...e4);
              }
              setParentView(t5) {
                return this.jodit = t5, t5.components.add(this), this;
              }
              constructor(t5) {
                super(), this.setParentView(t5);
              }
              destruct() {
                return this.j.components.delete(this), super.destruct();
              }
            }
          }, 17352: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ACCURACY: function() {
              return J;
            }, APP_VERSION: function() {
              return o3;
            }, BASE_PATH: function() {
              return at;
            }, BR: function() {
              return F;
            }, CLIPBOARD_ID: function() {
              return dt;
            }, COMMAND_KEYS: function() {
              return H;
            }, EMULATE_DBLCLICK_TIMEOUT: function() {
              return Q;
            }, ES: function() {
              return n2;
            }, FAT_MODE: function() {
              return c;
            }, HOMEPAGE: function() {
              return d;
            }, INSEPARABLE_TAGS: function() {
              return C;
            }, INSERT_AS_HTML: function() {
              return tt;
            }, INSERT_AS_TEXT: function() {
              return it;
            }, INSERT_CLEAR_HTML: function() {
              return et;
            }, INSERT_ONLY_TEXT: function() {
              return ot;
            }, INVISIBLE_SPACE: function() {
              return p;
            }, INVISIBLE_SPACE_REG_EXP: function() {
              return g;
            }, INVISIBLE_SPACE_REG_EXP_END: function() {
              return m;
            }, INVISIBLE_SPACE_REG_EXP_START: function() {
              return b;
            }, IS_BLOCK: function() {
              return w;
            }, IS_ES_MODERN: function() {
              return r;
            }, IS_ES_NEXT: function() {
              return s;
            }, IS_IE: function() {
              return Y;
            }, IS_INLINE: function() {
              return y;
            }, IS_MAC: function() {
              return rt;
            }, IS_PROD: function() {
              return a;
            }, IS_TEST: function() {
              return l;
            }, KEY_ALIASES: function() {
              return st;
            }, KEY_ALT: function() {
              return L;
            }, KEY_BACKSPACE: function() {
              return T;
            }, KEY_DELETE: function() {
              return D;
            }, KEY_DOWN: function() {
              return N;
            }, KEY_ENTER: function() {
              return I;
            }, KEY_ESC: function() {
              return A;
            }, KEY_F3: function() {
              return q;
            }, KEY_LEFT: function() {
              return M;
            }, KEY_META: function() {
              return z;
            }, KEY_RIGHT: function() {
              return R;
            }, KEY_SPACE: function() {
              return B;
            }, KEY_TAB: function() {
              return E;
            }, KEY_UP: function() {
              return P;
            }, LIST_TAGS: function() {
              return j;
            }, MARKER_CLASS: function() {
              return Z;
            }, MODE_SOURCE: function() {
              return U;
            }, MODE_SPLIT: function() {
              return $;
            }, MODE_WYSIWYG: function() {
              return W;
            }, NBSP_SPACE: function() {
              return f;
            }, NEARBY: function() {
              return O;
            }, NO_EMPTY_TAGS: function() {
              return S;
            }, PARAGRAPH: function() {
              return V;
            }, PASSIVE_EVENTS: function() {
              return ht;
            }, SAFE_COUNT_CHANGE_CALL: function() {
              return nt;
            }, SET_TEST: function() {
              return u;
            }, SOURCE_CONSUMER: function() {
              return ut;
            }, SPACE_REG_EXP: function() {
              return _;
            }, SPACE_REG_EXP_END: function() {
              return x;
            }, SPACE_REG_EXP_START: function() {
              return v;
            }, TEMP_ATTR: function() {
              return lt;
            }, TEXT_HTML: function() {
              return G;
            }, TEXT_PLAIN: function() {
              return K;
            }, TEXT_RTF: function() {
              return X;
            }, TOKENS: function() {
              return h;
            }, lang: function() {
              return ct;
            } });
            const o3 = "4.2.10", n2 = "es2018", r = true, s = false, a = true;
            let l = false;
            const c = true, d = "https://xdsoft.net/jodit/", u = () => l = true, h = {}, p = "\uFEFF", f = " ", g = () => /[\uFEFF]/g, m = () => /[\uFEFF]+$/g, b = () => /^[\uFEFF]+/g, _ = () => /[\s\n\t\r\uFEFF\u200b]+/g, v = () => /^[\s\n\t\r\uFEFF\u200b]+/g, x = () => /[\s\n\t\r\uFEFF\u200b]+$/g, w = /^(ADDRESS|ARTICLE|ASIDE|BLOCKQUOTE|CANVAS|DD|DFN|DIV|DL|DT|FIELDSET|FIGCAPTION|FIGURE|FOOTER|FORM|H[1-6]|HEADER|HGROUP|HR|LI|MAIN|NAV|NOSCRIPT|OUTPUT|P|PRE|RUBY|SCRIPT|STYLE|OBJECT|OL|SECTION|IFRAME|JODIT|JODIT-MEDIA|UL|TR|TD|TH|TBODY|THEAD|TFOOT|TABLE|BODY|HTML|VIDEO)$/i, y = /^(STRONG|SPAN|I|EM|B|SUP|SUB|A|U)$/i, j = /* @__PURE__ */ new Set(["ul", "ol"]), k = ["img", "video", "svg", "iframe", "script", "input", "textarea", "link", "jodit", "jodit-media"], C = /* @__PURE__ */ new Set([...k, "br", "hr"]), S = new Set(k), z = "Meta", T = "Backspace", E = "Tab", I = "Enter", A = "Escape", L = "Alt", M = "ArrowLeft", P = "ArrowUp", R = "ArrowRight", N = "ArrowDown", B = "Space", D = "Delete", q = "F3", O = 5, J = 10, H = [z, T, D, P, N, R, M, I, A, q, E], F = "br", V = "p", W = 1, U = 2, $ = 3, Y = "undefined" != typeof navigator && (-1 !== navigator.userAgent.indexOf("MSIE") || /rv:11.0/i.test(navigator.userAgent)), K = Y ? "text" : "text/plain", G = Y ? "html" : "text/html", X = Y ? "rtf" : "text/rtf", Z = "jodit-selection_marker", Q = 300, tt = "insert_as_html", et = "insert_clear_html", it = "insert_as_text", ot = "insert_only_text", nt = 10, rt = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), st = { add: "+", break: "pause", cmd: "meta", command: "meta", ctl: "control", ctrl: "control", del: "delete", down: "arrowdown", esc: "escape", ins: "insert", left: "arrowleft", mod: rt ? "meta" : "control", opt: "alt", option: "alt", return: "enter", right: "arrowright", space: " ", spacebar: " ", up: "arrowup", win: "meta", windows: "meta" }, at = (() => {
              if ("undefined" == typeof document) return "";
              const t5 = document.currentScript, e4 = (t6) => {
                const e5 = t6.split("/");
                return /\.js/.test(e5[e5.length - 1]) ? e5.slice(0, e5.length - 1).join("/") + "/" : t6;
              };
              if (t5) return e4(t5.src);
              const i4 = document.querySelectorAll("script[src]");
              return i4 && i4.length ? e4(i4[i4.length - 1].src) : window.location.href;
            })(), lt = "data-jodit-temp", ct = {}, dt = "clipboard", ut = "source-consumer", ht = /* @__PURE__ */ new Set(["touchstart", "touchend", "scroll", "mousewheel", "mousemove", "touchmove"]);
          }, 92852: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(65147);
            i3(28712);
            class s {
              get doc() {
                return (0, r.isFunction)(this.document) ? this.document() : this.document;
              }
              constructor(t5, e4) {
                this.document = t5, this.createAttributes = e4;
              }
              element(t5, e4, i4) {
                const o4 = this.doc.createElement(t5.toLowerCase());
                return this.applyCreateAttributes(o4), e4 && ((0, r.isPlainObject)(e4) ? (0, r.attr)(o4, e4) : i4 = e4), i4 && (0, r.asArray)(i4).forEach((t6) => o4.appendChild((0, r.isString)(t6) ? this.fromHTML(t6) : t6)), o4;
              }
              div(t5, e4, i4) {
                const o4 = this.element("div", e4, i4);
                return t5 && (o4.className = t5), o4;
              }
              sandbox() {
                var t5;
                const e4 = this.element("iframe", { sandbox: "allow-same-origin" });
                this.doc.body.appendChild(e4);
                const i4 = null === (t5 = e4.contentWindow) || void 0 === t5 ? void 0 : t5.document;
                if (!i4) throw Error("Iframe error");
                return i4.open(), i4.write("<!DOCTYPE html><html><head></head><body></body></html>"), i4.close(), [i4.body, e4];
              }
              span(t5, e4, i4) {
                const o4 = this.element("span", e4, i4);
                return t5 && (o4.className = t5), o4;
              }
              a(t5, e4, i4) {
                const o4 = this.element("a", e4, i4);
                return t5 && (o4.className = t5), o4;
              }
              text(t5) {
                return this.doc.createTextNode(t5);
              }
              fake() {
                return this.text(o3.INVISIBLE_SPACE);
              }
              fragment() {
                return this.doc.createDocumentFragment();
              }
              fromHTML(t5, e4) {
                const i4 = this.div();
                i4.innerHTML = t5.toString();
                const o4 = i4.firstChild === i4.lastChild && i4.firstChild ? i4.firstChild : i4;
                if (n2.J.safeRemove(o4), e4) {
                  const t6 = (0, r.refs)(o4);
                  Object.keys(e4).forEach((i5) => {
                    const o5 = t6[i5];
                    o5 && false === e4[i5] && n2.J.hide(o5);
                  });
                }
                return o4;
              }
              applyCreateAttributes(t5) {
                if (this.createAttributes) {
                  const e4 = this.createAttributes;
                  if (e4 && e4[t5.tagName.toLowerCase()]) {
                    const i4 = e4[t5.tagName.toLowerCase()];
                    (0, r.isFunction)(i4) ? i4(t5) : (0, r.isPlainObject)(i4) && (0, r.attr)(t5, i4);
                  }
                }
              }
            }
          }, 40594: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return o3.X;
            } });
            var o3 = i3(92852);
          }, 11961: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { d: function() {
              return o3.Ay;
            } });
            var o3 = i3(26318);
          }, 87875: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { OK: function() {
              return c;
            }, PO: function() {
              return a;
            }, PP: function() {
              return l;
            } });
            var o3 = i3(64567), n2 = i3(55186), r = i3(9823), s = i3(76166);
            function a(t5, e4) {
              const i4 = Object.getOwnPropertyDescriptor(t5, e4);
              return !i4 || (0, r.Tn)(i4.get) ? null : i4.value;
            }
            function l(t5, e4, i4) {
              const o4 = i4.get;
              if (!o4) throw (0, s.z3)("Getter property descriptor expected");
              i4.get = function() {
                const t6 = o4.call(this);
                return t6 && true === t6.noCache || Object.defineProperty(this, e4, { configurable: i4.configurable, enumerable: i4.enumerable, writable: false, value: t6 }), t6;
              };
            }
            function c(t5, e4, i4) {
              const a2 = i4.value;
              if (!(0, r.Tn)(a2)) throw (0, s.z3)("Handler must be a Function");
              let l2 = true;
              const c2 = /* @__PURE__ */ new WeakMap();
              i4.value = function(...t6) {
                var e5;
                if (l2 && c2.has(this.constructor)) return null === (e5 = c2.get(this.constructor)) || void 0 === e5 ? void 0 : e5.cloneNode(true);
                const i5 = a2.apply(this, t6);
                return l2 && n2.J.isElement(i5) && c2.set(this.constructor, i5), l2 ? i5.cloneNode(true) : i5;
              }, t5.hookStatus(o3.f.ready, (t6) => {
                const e5 = (0, r.hH)(t6) ? t6 : t6.jodit;
                l2 = Boolean(e5.options.cache);
              });
            }
          }, 24767: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              class e4 extends t5 {
                constructor(...t6) {
                  super(...t6), this.constructor === e4 && (this instanceof e4 || Object.setPrototypeOf(this, e4.prototype), this.setStatus("ready"));
                }
              }
              return e4;
            }
            i3.d(e3, { s: function() {
              return o3;
            } });
          }, 37075: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { n: function() {
              return a;
            }, s: function() {
              return s;
            } });
            var o3 = i3(77753), n2 = i3(9823), r = (i3(28712), i3(50156));
            function s(t5, e4 = false, i4 = "debounce") {
              return (s2, a2) => {
                const l = s2[a2];
                if (!(0, n2.Tn)(l)) throw (0, r.z3)("Handler must be a Function");
                return s2.hookStatus(o3.f.ready, (o4) => {
                  const { async: r2 } = o4, s3 = (0, n2.Tn)(t5) ? t5(o4) : t5, l2 = (0, n2.Et)(s3) || (0, n2.Qd)(s3) ? s3 : o4.defaultTimeout;
                  Object.defineProperty(o4, a2, { configurable: true, value: r2[i4](o4[a2].bind(o4), l2, e4) });
                }), { configurable: true, get() {
                  return l.bind(this);
                } };
              };
            }
            function a(t5, e4 = false) {
              return s(t5, e4, "throttle");
            }
          }, 1963: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return n2;
            } });
            var o3 = i3(69052);
            function n2(...t5) {
              return (e4) => {
                const i4 = e4.prototype;
                for (let e5 = 0; t5.length > e5; e5++) {
                  const n3 = t5[e5], r = Object.getOwnPropertyNames(n3.prototype);
                  for (let t6 = 0; r.length > t6; t6++) {
                    const e6 = r[t6], s = Object.getOwnPropertyDescriptor(n3.prototype, e6);
                    null != s && (0, o3.T)(s.value) && !(0, o3.T)(i4[e6]) && Object.defineProperty(i4, e6, { enumerable: true, configurable: true, writable: true, value: function(...t7) {
                      return s.value.call(this, ...t7);
                    } });
                  }
                }
              };
            }
          }, 71151: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { A: function() {
              return r;
            } });
            var o3 = i3(69052), n2 = i3(50156);
            function r(t5) {
              return (e4, i4) => {
                if (!(0, o3.T)(e4[i4])) throw (0, n2.z3)("Handler must be a Function");
                e4.hookStatus(t5, (t6) => {
                  t6[i4].call(t6);
                });
              };
            }
          }, 86285: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return s;
            } });
            var o3 = i3(77753), n2 = i3(69052), r = i3(50156);
            function s() {
              return (t5, e4) => {
                if (!(0, n2.T)(t5[e4])) throw (0, r.z3)("Handler must be a Function");
                t5.hookStatus(o3.f.ready, (t6) => {
                  const { async: i4 } = t6, o4 = t6[e4];
                  t6[e4] = (...e5) => i4.requestIdleCallback(o4.bind(t6, ...e5));
                });
              };
            }
          }, 22664: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { autobind: function() {
              return o3.d;
            }, cache: function() {
              return n2.PP;
            }, cacheHTML: function() {
              return n2.OK;
            }, cached: function() {
              return n2.PO;
            }, component: function() {
              return r.s;
            }, debounce: function() {
              return s.s;
            }, derive: function() {
              return a.C;
            }, getPropertyDescriptor: function() {
              return p.N;
            }, hook: function() {
              return l.A;
            }, idle: function() {
              return c.N;
            }, nonenumerable: function() {
              return d.m;
            }, persistent: function() {
              return u.y;
            }, throttle: function() {
              return s.n;
            }, wait: function() {
              return h.u;
            }, watch: function() {
              return p.w;
            } });
            var o3 = i3(11961), n2 = i3(87875), r = i3(24767), s = i3(37075), a = i3(1963), l = i3(71151), c = i3(86285), d = i3(48791), u = i3(33087), h = i3(48647), p = i3(66927);
          }, 48791: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return o3;
            } });
            const o3 = (t5, e4) => {
              false !== (Object.getOwnPropertyDescriptor(t5, e4) || {}).enumerable && Object.defineProperty(t5, e4, { enumerable: false, set(t6) {
                Object.defineProperty(this, e4, { enumerable: false, writable: true, value: t6 });
              } });
            };
          }, 33087: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { y: function() {
              return r;
            } });
            var o3 = i3(64567), n2 = i3(12041);
            function r(t5, e4) {
              t5.hookStatus(o3.f.ready, (t6) => {
                const i4 = (0, n2.h)(t6) ? t6 : t6.jodit, o4 = `${i4.options.namespace}${t6.componentName}_prop_${e4}`, r2 = t6[e4];
                Object.defineProperty(t6, e4, { get() {
                  var t7;
                  return null !== (t7 = i4.storage.get(o4)) && void 0 !== t7 ? t7 : r2;
                }, set(t7) {
                  i4.storage.set(o4, t7);
                } });
              });
            }
          }, 48647: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return s;
            } });
            var o3 = i3(64567), n2 = i3(69052), r = i3(50156);
            function s(t5) {
              return (e4, i4) => {
                if (!(0, n2.T)(e4[i4])) throw (0, r.z3)("Handler must be a Function");
                e4.hookStatus(o3.f.ready, (e5) => {
                  const { async: o4 } = e5, n3 = e5[i4];
                  let r2 = 0;
                  Object.defineProperty(e5, i4, { configurable: true, value: function i5(...s2) {
                    o4.clearTimeout(r2), t5(e5) ? n3.apply(e5, s2) : r2 = o4.setTimeout(() => i5(...s2), 10);
                  } });
                });
              };
            }
          }, 66927: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return d;
            }, w: function() {
              return u;
            } });
            var o3 = i3(64567), n2 = i3(32332), r = i3(42589), s = i3(69052), a = i3(25376), l = i3(12041), c = i3(50156);
            function d(t5, e4) {
              let i4;
              do {
                i4 = Object.getOwnPropertyDescriptor(t5, e4), t5 = Object.getPrototypeOf(t5);
              } while (!i4 && t5);
              return i4;
            }
            function u(t5, e4) {
              return (i4, u2) => {
                var h;
                if (!(0, s.T)(i4[u2])) throw (0, c.z3)("Handler must be a Function");
                const p = null === (h = null == e4 ? void 0 : e4.immediately) || void 0 === h || h, f = null == e4 ? void 0 : e4.context, g = (e5) => {
                  const o4 = (0, l.h)(e5) ? e5 : e5.jodit;
                  let c2 = (t6, ...i5) => {
                    if (!e5.isInDestruct) return e5[u2](t6, ...i5);
                  };
                  p || (c2 = e5.async.microDebounce(c2, true)), (0, r.u)(t5).forEach((t6) => {
                    if (/:/.test(t6)) {
                      const [i5, n3] = t6.split(":");
                      let r3 = f;
                      return i5.length && (r3 = e5.get(i5)), (0, s.T)(r3) && (r3 = r3(e5)), o4.events.on(r3 || e5, n3, c2), r3 || o4.events.on(n3, c2), void e5.hookStatus("beforeDestruct", () => {
                        o4.events.off(r3 || e5, n3, c2).off(n3, c2);
                      });
                    }
                    const r2 = t6.split("."), [l2] = r2, u3 = r2.slice(1);
                    let h2 = e5[l2];
                    (0, a.Q)(h2) && (0, n2.s)(h2).on(`change.${u3.join(".")}`, c2);
                    const p2 = d(i4, l2);
                    Object.defineProperty(e5, l2, { configurable: true, set(t7) {
                      const i5 = h2;
                      i5 !== t7 && (h2 = t7, p2 && p2.set && p2.set.call(e5, t7), (0, a.Q)(h2) && (h2 = (0, n2.s)(h2), h2.on(`change.${u3.join(".")}`, c2)), c2(l2, i5, h2));
                    }, get: () => p2 && p2.get ? p2.get.call(e5) : h2 });
                  });
                };
                (0, s.T)(i4.hookStatus) ? i4.hookStatus(o3.f.ready, g) : g(i4);
              };
            }
          }, 55186: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { J: function() {
              return l;
            } });
            var o3 = i3(17352), n2 = i3(42448), r = i3(9823), s = i3(59101), a = i3(97369);
            class l {
              constructor() {
                throw new Error("Dom is static module");
              }
              static detach(t5) {
                for (; t5 && t5.firstChild; ) t5.removeChild(t5.firstChild);
              }
              static wrapInline(t5, e4, i4) {
                let o4, n3 = t5, s2 = t5;
                i4.s.save();
                let a2 = false;
                do {
                  a2 = false, o4 = n3.previousSibling, o4 && !l.isBlock(o4) && (a2 = true, n3 = o4);
                } while (a2);
                do {
                  a2 = false, o4 = s2.nextSibling, o4 && !l.isBlock(o4) && (a2 = true, s2 = o4);
                } while (a2);
                const c = (0, r.Kg)(e4) ? i4.createInside.element(e4) : e4;
                n3.parentNode && n3.parentNode.insertBefore(c, n3);
                let d = n3;
                for (; d && (d = n3.nextSibling, c.appendChild(n3), n3 !== s2 && d); ) n3 = d;
                return i4.s.restore(), c;
              }
              static wrap(t5, e4, i4) {
                const o4 = (0, r.Kg)(e4) ? i4.element(e4) : e4;
                if (l.isNode(t5)) {
                  if (!t5.parentNode) throw (0, a.error)("Element should be in DOM");
                  t5.parentNode.insertBefore(o4, t5), o4.appendChild(t5);
                } else {
                  const e5 = t5.extractContents();
                  t5.insertNode(o4), o4.appendChild(e5);
                }
                return o4;
              }
              static unwrap(t5) {
                const e4 = t5.parentNode;
                if (e4) {
                  for (; t5.firstChild; ) e4.insertBefore(t5.firstChild, t5);
                  l.safeRemove(t5);
                }
              }
              static between(t5, e4, i4) {
                let o4 = t5;
                for (; o4 && o4 !== e4 && (t5 === o4 || !i4(o4)); ) {
                  let t6 = o4.firstChild || o4.nextSibling;
                  if (!t6) {
                    for (; o4 && !o4.nextSibling; ) o4 = o4.parentNode;
                    t6 = null == o4 ? void 0 : o4.nextSibling;
                  }
                  o4 = t6;
                }
              }
              static replace(t5, e4, i4, o4 = false, s2 = false) {
                (0, r.AH)(e4) && (e4 = i4.fromHTML(e4));
                const a2 = (0, r.Kg)(e4) ? i4.element(e4) : e4;
                if (!s2) for (; t5.firstChild; ) a2.appendChild(t5.firstChild);
                return o4 && l.isElement(t5) && l.isElement(a2) && (0, n2.$)(t5.attributes).forEach((t6) => {
                  a2.setAttribute(t6.name, t6.value);
                }), t5.parentNode && t5.parentNode.replaceChild(a2, t5), a2;
              }
              static isEmptyTextNode(t5) {
                return l.isText(t5) && (!t5.nodeValue || 0 === t5.nodeValue.replace(o3.INVISIBLE_SPACE_REG_EXP(), "").trim().length);
              }
              static isEmptyContent(t5) {
                return l.each(t5, (t6) => l.isEmptyTextNode(t6));
              }
              static isContentEditable(t5, e4) {
                return l.isNode(t5) && !l.closest(t5, (t6) => l.isElement(t6) && "false" === t6.getAttribute("contenteditable"), e4);
              }
              static isEmpty(t5, e4 = o3.NO_EMPTY_TAGS) {
                if (!t5) return true;
                let i4;
                i4 = (0, r.Tn)(e4) ? e4 : (t6) => e4.has(t6.nodeName.toLowerCase());
                const n3 = (t6) => null == t6.nodeValue || 0 === (0, s.Bq)(t6.nodeValue).length;
                return l.isText(t5) ? n3(t5) : !(l.isElement(t5) && i4(t5)) && l.each(t5, (t6) => {
                  if (l.isText(t6) && !n3(t6) || l.isElement(t6) && i4(t6)) return false;
                });
              }
              static isNode(t5) {
                return Boolean(t5 && (0, r.Kg)(t5.nodeName) && "number" == typeof t5.nodeType && t5.childNodes && (0, r.Tn)(t5.appendChild));
              }
              static isCell(t5) {
                return l.isNode(t5) && ("TD" === t5.nodeName || "TH" === t5.nodeName);
              }
              static isList(t5) {
                return l.isTag(t5, o3.LIST_TAGS);
              }
              static isLeaf(t5) {
                return l.isTag(t5, "li");
              }
              static isImage(t5) {
                return l.isNode(t5) && /^(img|svg|picture|canvas)$/i.test(t5.nodeName);
              }
              static isBlock(t5) {
                return !(0, r.Rd)(t5) && "object" == typeof t5 && l.isNode(t5) && o3.IS_BLOCK.test(t5.nodeName);
              }
              static isText(t5) {
                return Boolean(t5 && t5.nodeType === Node.TEXT_NODE);
              }
              static isComment(t5) {
                return Boolean(t5 && t5.nodeType === Node.COMMENT_NODE);
              }
              static isElement(t5) {
                var e4;
                if (!l.isNode(t5)) return false;
                const i4 = null === (e4 = t5.ownerDocument) || void 0 === e4 ? void 0 : e4.defaultView;
                return Boolean(i4 && t5.nodeType === Node.ELEMENT_NODE);
              }
              static isFragment(t5) {
                var e4;
                if (!l.isNode(t5)) return false;
                const i4 = null === (e4 = t5.ownerDocument) || void 0 === e4 ? void 0 : e4.defaultView;
                return Boolean(i4 && t5.nodeType === Node.DOCUMENT_FRAGMENT_NODE);
              }
              static isHTMLElement(t5) {
                var e4;
                if (!l.isNode(t5)) return false;
                const i4 = null === (e4 = t5.ownerDocument) || void 0 === e4 ? void 0 : e4.defaultView;
                return Boolean(i4 && t5 instanceof i4.HTMLElement);
              }
              static isInlineBlock(t5) {
                return l.isElement(t5) && !/^(BR|HR)$/i.test(t5.tagName) && -1 !== ["inline", "inline-block"].indexOf((0, a.css)(t5, "display").toString());
              }
              static canSplitBlock(t5) {
                return !(0, r.Rd)(t5) && l.isHTMLElement(t5) && l.isBlock(t5) && !/^(TD|TH|CAPTION|FORM)$/.test(t5.nodeName) && void 0 !== t5.style && !/^(fixed|absolute)/i.test(t5.style.position);
              }
              static last(t5, e4) {
                let i4 = null == t5 ? void 0 : t5.lastChild;
                if (!i4) return null;
                do {
                  if (e4(i4)) return i4;
                  let o4 = i4.lastChild;
                  if (o4 || (o4 = i4.previousSibling), !o4 && i4.parentNode !== t5) {
                    do {
                      i4 = i4.parentNode;
                    } while (i4 && !(null == i4 ? void 0 : i4.previousSibling) && i4.parentNode !== t5);
                    o4 = null == i4 ? void 0 : i4.previousSibling;
                  }
                  i4 = o4;
                } while (i4);
                return null;
              }
              static prev(t5, e4, i4, o4 = true) {
                return l.find(t5, e4, i4, false, o4);
              }
              static next(t5, e4, i4, o4 = true) {
                return l.find(t5, e4, i4, true, o4);
              }
              static prevWithClass(t5, e4) {
                return l.prev(t5, (t6) => l.isElement(t6) && t6.classList.contains(e4), t5.parentNode);
              }
              static nextWithClass(t5, e4) {
                return l.next(t5, (t6) => l.isElement(t6) && t6.classList.contains(e4), t5.parentNode);
              }
              static find(t5, e4, i4, o4 = true, n3 = true) {
                const r2 = this.nextGen(t5, i4, o4, n3);
                let s2 = r2.next();
                for (; !s2.done; ) {
                  if (e4(s2.value)) return s2.value;
                  s2 = r2.next();
                }
                return null;
              }
              static *nextGen(t5, e4, i4 = true, o4 = true) {
                const n3 = [];
                let r2 = t5;
                do {
                  let e5 = i4 ? r2.nextSibling : r2.previousSibling;
                  for (; e5; ) n3.unshift(e5), e5 = i4 ? e5.nextSibling : e5.previousSibling;
                  yield* this.runInStack(t5, n3, i4, o4), r2 = r2.parentNode;
                } while (r2 && r2 !== e4);
                return null;
              }
              static each(t5, e4, i4 = true) {
                const o4 = this.eachGen(t5, i4);
                let n3 = o4.next();
                for (; !n3.done; ) {
                  if (false === e4(n3.value)) return false;
                  n3 = o4.next();
                }
                return true;
              }
              static eachGen(t5, e4 = true) {
                return this.runInStack(t5, [t5], e4);
              }
              static *runInStack(t5, e4, i4, o4 = true) {
                for (; e4.length; ) {
                  const n3 = e4.pop();
                  if (o4) {
                    let t6 = i4 ? n3.lastChild : n3.firstChild;
                    for (; t6; ) e4.push(t6), t6 = i4 ? t6.previousSibling : t6.nextSibling;
                  }
                  t5 !== n3 && (yield n3);
                }
              }
              static findWithCurrent(t5, e4, i4, o4 = "nextSibling", n3 = "firstChild") {
                let r2 = t5;
                do {
                  if (e4(r2)) return r2 || null;
                  if (n3 && r2 && r2[n3]) {
                    const t6 = l.findWithCurrent(r2[n3], e4, r2, o4, n3);
                    if (t6) return t6;
                  }
                  for (; r2 && !r2[o4] && r2 !== i4; ) r2 = r2.parentNode;
                  r2 && r2[o4] && r2 !== i4 && (r2 = r2[o4]);
                } while (r2 && r2 !== i4);
                return null;
              }
              static findSibling(t5, e4 = true, i4 = (t6) => !l.isEmptyTextNode(t6)) {
                let o4 = l.sibling(t5, e4);
                for (; o4 && !i4(o4); ) o4 = l.sibling(o4, e4);
                return o4 && i4(o4) ? o4 : null;
              }
              static findNotEmptySibling(t5, e4) {
                return l.findSibling(t5, e4, (t6) => {
                  var e5;
                  return !l.isEmptyTextNode(t6) && Boolean(!l.isText(t6) || (null === (e5 = t6.nodeValue) || void 0 === e5 ? void 0 : e5.length) && (0, s.Bq)(t6.nodeValue));
                });
              }
              static findNotEmptyNeighbor(t5, e4, i4) {
                return (0, a.call)(e4 ? l.prev : l.next, t5, (t6) => Boolean(t6 && (!(l.isText(t6) || l.isComment(t6)) || (0, s.Bq)((null == t6 ? void 0 : t6.nodeValue) || "").length)), i4);
              }
              static sibling(t5, e4) {
                return e4 ? t5.previousSibling : t5.nextSibling;
              }
              static up(t5, e4, i4, o4 = false) {
                let n3 = t5;
                if (!n3) return null;
                do {
                  if (e4(n3)) return n3;
                  if (n3 === i4 || !n3.parentNode) break;
                  n3 = n3.parentNode;
                } while (n3 && n3 !== i4);
                return n3 === i4 && o4 && e4(n3) ? n3 : null;
              }
              static closest(t5, e4, i4) {
                let o4;
                const n3 = (t6) => t6.toLowerCase();
                if ((0, r.Tn)(e4)) o4 = e4;
                else if ((0, r.cy)(e4) || (0, r.vM)(e4)) {
                  const t6 = (0, r.vM)(e4) ? e4 : new Set(e4.map(n3));
                  o4 = (e5) => Boolean(e5 && t6.has(n3(e5.nodeName)));
                } else o4 = (t6) => Boolean(t6 && n3(e4) === n3(t6.nodeName));
                return l.up(t5, o4, i4);
              }
              static furthest(t5, e4, i4) {
                let o4 = null, n3 = null == t5 ? void 0 : t5.parentElement;
                for (; n3 && n3 !== i4; ) e4(n3) && (o4 = n3), n3 = null == n3 ? void 0 : n3.parentElement;
                return o4;
              }
              static appendChildFirst(t5, e4) {
                const i4 = t5.firstChild;
                i4 ? i4 !== e4 && t5.insertBefore(e4, i4) : t5.appendChild(e4);
              }
              static after(t5, e4) {
                const { parentNode: i4 } = t5;
                i4 && (i4.lastChild === t5 ? i4.appendChild(e4) : i4.insertBefore(e4, t5.nextSibling));
              }
              static before(t5, e4) {
                const { parentNode: i4 } = t5;
                i4 && i4.insertBefore(e4, t5);
              }
              static prepend(t5, e4) {
                t5.insertBefore(e4, t5.firstChild);
              }
              static append(t5, e4) {
                (0, r.cy)(e4) ? e4.forEach((e5) => {
                  this.append(t5, e5);
                }) : t5.appendChild(e4);
              }
              static moveContent(t5, e4, i4 = false, o4 = () => true) {
                const r2 = (t5.ownerDocument || document).createDocumentFragment();
                (0, n2.$)(t5.childNodes).filter((t6) => !!o4(t6) || (l.safeRemove(t6), false)).forEach((t6) => {
                  r2.appendChild(t6);
                }), i4 && e4.firstChild ? e4.insertBefore(r2, e4.firstChild) : e4.appendChild(r2);
              }
              static isOrContains(t5, e4, i4 = false) {
                return t5 === e4 ? !i4 : Boolean(e4 && t5 && this.up(e4, (e5) => e5 === t5, t5, true));
              }
              static safeRemove(...t5) {
                t5.forEach((t6) => l.isNode(t6) && t6.parentNode && t6.parentNode.removeChild(t6));
              }
              static safeInsertNode(t5, e4) {
                t5.collapsed || t5.deleteContents();
                const i4 = l.isFragment(e4) ? e4.lastChild : e4;
                t5.startContainer === t5.endContainer && t5.collapsed && l.isTag(t5.startContainer, o3.INSEPARABLE_TAGS) ? l.after(t5.startContainer, e4) : (t5.insertNode(e4), i4 && t5.setStartBefore(i4)), t5.collapse(true), [e4.nextSibling, e4.previousSibling].forEach((t6) => l.isText(t6) && !t6.nodeValue && l.safeRemove(t6));
              }
              static hide(t5) {
                t5 && ((0, a.dataBind)(t5, "__old_display", t5.style.display), t5.style.display = "none");
              }
              static show(t5) {
                if (!t5) return;
                const e4 = (0, a.dataBind)(t5, "__old_display");
                "none" === t5.style.display && (t5.style.display = e4 || "");
              }
              static isTag(t5, e4) {
                if (!this.isElement(t5)) return false;
                const i4 = t5.tagName.toLowerCase(), o4 = t5.tagName.toUpperCase();
                if (e4 instanceof Set) return e4.has(i4) || e4.has(o4);
                if (Array.isArray(e4)) throw new TypeError("Dom.isTag does not support array");
                return i4 === e4 || o4 === e4;
              }
              static markTemporary(t5, e4) {
                return e4 && (0, a.attr)(t5, e4), (0, a.attr)(t5, o3.TEMP_ATTR, true), t5;
              }
              static isTemporary(t5) {
                return !!l.isElement(t5) && ((0, r.rg)(t5) || "true" === (0, a.attr)(t5, o3.TEMP_ATTR));
              }
              static replaceTemporaryFromString(t5) {
                return t5.replace(/<([a-z]+)[^>]+data-jodit-temp[^>]+>(.+?)<\/\1>/gi, "$2");
              }
              static temporaryList(t5) {
                return (0, a.$$)(`[${o3.TEMP_ATTR}]`, t5);
              }
            }
          }, 71842: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { J: function() {
              return o3.J;
            }, p: function() {
              return n2.p;
            } });
            var o3 = i3(55186), n2 = i3(8453);
          }, 8453: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { p: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(22664), r = i3(55186), s = i3(43431);
            class a extends s.h {
              setWork(t5) {
                return this.isWorked && this.break(), this.workNodes = r.J.eachGen(t5, !this.options.reverse), this.isFinished = false, this.startIdleRequest(), this;
              }
              constructor(t5, e4 = {}) {
                super(), this.async = t5, this.options = e4, this.workNodes = null, this.hadAffect = false, this.isWorked = false, this.isFinished = false, this.idleId = 0;
              }
              startIdleRequest() {
                var t5;
                this.idleId = this.async.requestIdleCallback(this.workPerform, { timeout: null !== (t5 = this.options.timeout) && void 0 !== t5 ? t5 : 10 });
              }
              break(t5) {
                this.isWorked && (this.stop(), this.emit("break", t5));
              }
              end() {
                this.isWorked && (this.stop(), this.emit("end", this.hadAffect), this.hadAffect = false);
              }
              stop() {
                this.isWorked = false, this.isFinished = true, this.workNodes = null, this.async.cancelIdleCallback(this.idleId);
              }
              destruct() {
                super.destruct(), this.stop();
              }
              workPerform(t5) {
                var e4;
                if (this.workNodes) {
                  this.isWorked = true;
                  let i4 = 0;
                  const o4 = null !== (e4 = this.options.timeoutChunkSize) && void 0 !== e4 ? e4 : 50;
                  for (; !this.isFinished && (t5.timeRemaining() > 0 || t5.didTimeout && o4 >= i4); ) {
                    const t6 = this.workNodes.next();
                    if (i4 += 1, this.visitNode(t6.value) && (this.hadAffect = true), t6.done) return void this.end();
                  }
                } else this.end();
                this.isFinished || this.startIdleRequest();
              }
              visitNode(t5) {
                var e4;
                return !(!t5 || void 0 !== this.options.whatToShow && t5.nodeType !== this.options.whatToShow) && null !== (e4 = this.emit("visit", t5)) && void 0 !== e4 && e4;
              }
            }
            (0, o3.Cg)([n2.autobind], a.prototype, "workPerform", null);
          }, 50658: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return d;
            } });
            var o3 = i3(17352), n2 = i3(42589), r = i3(37923), s = i3(69052), a = i3(98253), l = i3(50156), c = i3(10004);
            class d {
              mute(t5) {
                return this.__mutedEvents.add(null != t5 ? t5 : "*"), this;
              }
              isMuted(t5) {
                return !(!t5 || !this.__mutedEvents.has(t5)) || this.__mutedEvents.has("*");
              }
              unmute(t5) {
                return this.__mutedEvents.delete(null != t5 ? t5 : "*"), this;
              }
              __eachEvent(t5, e4) {
                (0, n2.u)(t5).map((t6) => t6.trim()).forEach((t6) => {
                  const i4 = t6.split(".");
                  e4.call(this, i4[0], i4[1] || c.X);
                });
              }
              __getStore(t5) {
                if (!t5) throw (0, l.z3)("Need subject");
                if (void 0 === t5[this.__key]) {
                  const e4 = new c.d();
                  Object.defineProperty(t5, this.__key, { enumerable: false, configurable: true, writable: true, value: e4 });
                }
                return t5[this.__key];
              }
              __removeStoreFromSubject(t5) {
                void 0 !== t5[this.__key] && Object.defineProperty(t5, this.__key, { enumerable: false, configurable: true, writable: true, value: void 0 });
              }
              __triggerNativeEvent(t5, e4) {
                const i4 = this.__doc.createEvent("HTMLEvents");
                (0, a.K)(e4) ? i4.initEvent(e4, true, true) : (i4.initEvent(e4.type, e4.bubbles, e4.cancelable), ["screenX", "screenY", "clientX", "clientY", "target", "srcElement", "currentTarget", "timeStamp", "which", "keyCode"].forEach((t6) => {
                  Object.defineProperty(i4, t6, { value: e4[t6], enumerable: true });
                }), Object.defineProperty(i4, "originalEvent", { value: e4, enumerable: true })), t5.dispatchEvent(i4);
              }
              get current() {
                return this.currents[this.currents.length - 1];
              }
              on(t5, e4, i4, n3) {
                let c2, d2, h, p;
                if ((0, a.K)(t5) || (0, a.B)(t5) ? (c2 = this, d2 = t5, h = e4, p = i4) : (c2 = t5, d2 = e4, h = i4, p = n3), !(0, a.K)(d2) && !(0, a.B)(d2) || 0 === d2.length) throw (0, l.z3)("Need events names");
                if (!(0, s.T)(h)) throw (0, l.z3)("Need event handler");
                if ((0, r.c)(c2)) return c2.forEach((t6) => {
                  this.on(t6, d2, h, p);
                }), this;
                const f = c2, g = this.__getStore(f), m = this;
                let b = function(t6, ...e5) {
                  if (!m.isMuted(t6)) return h && h.call(this, ...e5);
                };
                return u(f) && (b = function(t6) {
                  if (!m.isMuted(t6.type)) return m.__prepareEvent(t6), h && false === h.call(this, t6) ? (t6.preventDefault(), t6.stopImmediatePropagation(), false) : void 0;
                }), this.__eachEvent(d2, (t6, e5) => {
                  var i5, n4;
                  if (0 === t6.length) throw (0, l.z3)("Need event name");
                  if (false === g.indexOf(t6, e5, h) && (g.set(t6, e5, { event: t6, originalCallback: h, syntheticCallback: b }, null == p ? void 0 : p.top), u(f))) {
                    const e6 = o3.PASSIVE_EVENTS.has(t6) ? { passive: true, capture: null !== (i5 = null == p ? void 0 : p.capture) && void 0 !== i5 && i5 } : null !== (n4 = null == p ? void 0 : p.capture) && void 0 !== n4 && n4;
                    b.options = e6, f.addEventListener(t6, b, e6), this.__memoryDOMSubjectToHandler(f, b);
                  }
                }), this;
              }
              __memoryDOMSubjectToHandler(t5, e4) {
                const i4 = this.__domEventsMap.get(t5) || /* @__PURE__ */ new Set();
                i4.add(e4), this.__domEventsMap.set(t5, i4);
              }
              __unmemoryDOMSubjectToHandler(t5, e4) {
                const i4 = this.__domEventsMap, o4 = i4.get(t5) || /* @__PURE__ */ new Set();
                o4.delete(e4), o4.size ? i4.set(t5, o4) : i4.delete(t5);
              }
              one(t5, e4, i4, o4) {
                let n3, r2, s2, l2;
                (0, a.K)(t5) || (0, a.B)(t5) ? (n3 = this, r2 = t5, s2 = e4, l2 = i4) : (n3 = t5, r2 = e4, s2 = i4, l2 = o4);
                const c2 = (...t6) => (this.off(n3, r2, c2), s2(...t6));
                return this.on(n3, r2, c2, l2), this;
              }
              off(t5, e4, i4) {
                let o4, n3, l2;
                if ((0, a.K)(t5) || (0, a.B)(t5) ? (o4 = this, n3 = t5, l2 = e4) : (o4 = t5, n3 = e4, l2 = i4), (0, r.c)(o4)) return o4.forEach((t6) => {
                  this.off(t6, n3, l2);
                }), this;
                const d2 = o4, h = this.__getStore(d2);
                if (!(0, a.K)(n3) && !(0, a.B)(n3) || 0 === n3.length) return h.namespaces().forEach((t6) => {
                  this.off(d2, "." + t6);
                }), this.__removeStoreFromSubject(d2), this;
                const p = (t6) => {
                  var e5;
                  u(d2) && (d2.removeEventListener(t6.event, t6.syntheticCallback, null !== (e5 = t6.syntheticCallback.options) && void 0 !== e5 && e5), this.__unmemoryDOMSubjectToHandler(d2, t6.syntheticCallback));
                }, f = (t6, e5) => {
                  if ("" === t6) return void h.events(e5).forEach((t7) => {
                    "" !== t7 && f(t7, e5);
                  });
                  const i5 = h.get(t6, e5);
                  if (i5 && i5.length) if ((0, s.T)(l2)) {
                    const o5 = h.indexOf(t6, e5, l2);
                    false !== o5 && (p(i5[o5]), i5.splice(o5, 1), i5.length || h.clearEvents(e5, t6));
                  } else i5.forEach(p), i5.length = 0, h.clearEvents(e5, t6);
                };
                return this.__eachEvent(n3, (t6, e5) => {
                  e5 === c.X ? h.namespaces().forEach((e6) => {
                    f(t6, e6);
                  }) : f(t6, e5);
                }), h.isEmpty() && this.__removeStoreFromSubject(d2), this;
              }
              stopPropagation(t5, e4) {
                const i4 = (0, a.K)(t5) ? this : t5, o4 = (0, a.K)(t5) ? t5 : e4;
                if ("string" != typeof o4) throw (0, l.z3)("Need event names");
                const n3 = this.__getStore(i4);
                this.__eachEvent(o4, (t6, e5) => {
                  const o5 = n3.get(t6, e5);
                  o5 && this.__stopped.push(o5), e5 === c.X && n3.namespaces(true).forEach((e6) => this.stopPropagation(i4, t6 + "." + e6));
                });
              }
              __removeStop(t5) {
                if (t5) {
                  const e4 = this.__stopped.indexOf(t5);
                  -1 !== e4 && this.__stopped.splice(0, e4 + 1);
                }
              }
              __isStopped(t5) {
                return void 0 !== t5 && -1 !== this.__stopped.indexOf(t5);
              }
              fire(t5, e4, ...i4) {
                let o4, n3;
                const r2 = (0, a.K)(t5) ? this : t5, s2 = (0, a.K)(t5) ? t5 : e4, d2 = (0, a.K)(t5) ? [e4, ...i4] : i4;
                if (!u(r2) && !(0, a.K)(s2)) throw (0, l.z3)("Need events names");
                const h = this.__getStore(r2);
                return !(0, a.K)(s2) && u(r2) ? this.__triggerNativeEvent(r2, e4) : this.__eachEvent(s2, (t6, e5) => {
                  if (u(r2)) this.__triggerNativeEvent(r2, t6);
                  else {
                    const i5 = h.get(t6, e5);
                    if (i5) try {
                      [...i5].every((e6) => !this.__isStopped(i5) && (this.currents.push(t6), n3 = e6.syntheticCallback.call(r2, t6, ...d2), this.currents.pop(), void 0 !== n3 && (o4 = n3), true));
                    } finally {
                      this.__removeStop(i5);
                    }
                    e5 !== c.X || u(r2) || h.namespaces().filter((t7) => t7 !== e5).forEach((e6) => {
                      const i6 = this.fire.apply(this, [r2, t6 + "." + e6, ...d2]);
                      void 0 !== i6 && (o4 = i6);
                    });
                  }
                }), o4;
              }
              constructor(t5) {
                this.__domEventsMap = /* @__PURE__ */ new Map(), this.__mutedEvents = /* @__PURE__ */ new Set(), this.__key = "__JoditEventEmitterNamespaces", this.__doc = document, this.__prepareEvent = (t6) => {
                  t6.cancelBubble || (t6.composed && (0, s.T)(t6.composedPath) && t6.composedPath()[0] && Object.defineProperty(t6, "target", { value: t6.composedPath()[0], configurable: true, enumerable: true }), t6.type.match(/^touch/) && t6.changedTouches && t6.changedTouches.length && ["clientX", "clientY", "pageX", "pageY"].forEach((e4) => {
                    Object.defineProperty(t6, e4, { value: t6.changedTouches[0][e4], configurable: true, enumerable: true });
                  }), t6.originalEvent || (t6.originalEvent = t6), "paste" === t6.type && void 0 === t6.clipboardData && this.__doc.defaultView.clipboardData && Object.defineProperty(t6, "clipboardData", { get: () => this.__doc.defaultView.clipboardData, configurable: true, enumerable: true }));
                }, this.currents = [], this.__stopped = [], this.__isDestructed = false, t5 && (this.__doc = t5), this.__key += (/* @__PURE__ */ new Date()).getTime();
              }
              destruct() {
                this.__isDestructed || (this.__isDestructed = true, this.__domEventsMap.forEach((t5, e4) => {
                  this.off(e4);
                }), this.__domEventsMap.clear(), this.__mutedEvents.clear(), this.currents.length = 0, this.__stopped.length = 0, this.off(this), this.__getStore(this).clear(), this.__removeStoreFromSubject(this));
              }
            }
            function u(t5) {
              return (0, s.T)(t5.addEventListener);
            }
          }, 43431: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { h: function() {
              return o3;
            } });
            class o3 {
              constructor() {
                this.__map = /* @__PURE__ */ new Map();
              }
              on(t5, e4) {
                var i4;
                return this.__map.has(t5) || this.__map.set(t5, /* @__PURE__ */ new Set()), null === (i4 = this.__map.get(t5)) || void 0 === i4 || i4.add(e4), this;
              }
              off(t5, e4) {
                var i4;
                return this.__map.has(t5) && (null === (i4 = this.__map.get(t5)) || void 0 === i4 || i4.delete(e4)), this;
              }
              destruct() {
                this.__map.clear();
              }
              emit(t5, ...e4) {
                var i4;
                let o4;
                return this.__map.has(t5) && (null === (i4 = this.__map.get(t5)) || void 0 === i4 || i4.forEach((t6) => {
                  o4 = t6(...e4);
                })), o4;
              }
            }
          }, 50025: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Xr: function() {
              return s.X;
            }, bk: function() {
              return o3.b;
            }, d$: function() {
              return s.d;
            }, h5: function() {
              return n2.h;
            }, sH: function() {
              return r.s;
            } });
            var o3 = i3(50658), n2 = i3(43431), r = i3(32332), s = i3(10004);
          }, 32332: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { s: function() {
              return c;
            } });
            var o3 = i3(66927), n2 = i3(37923), r = i3(69810), s = i3(25376);
            const a = Symbol("observable-object");
            function l(t5) {
              return void 0 !== t5[a];
            }
            function c(t5) {
              if (l(t5)) return t5;
              const e4 = {}, i4 = {}, c2 = (e5, o4) => (0, n2.c)(e5) ? (e5.map((t6) => c2(t6, o4)), t5) : (i4[e5] || (i4[e5] = []), i4[e5].push(o4), t5), d = (o4, ...r2) => {
                if ((0, n2.c)(o4)) o4.map((t6) => d(t6, ...r2));
                else try {
                  !e4[o4] && i4[o4] && (e4[o4] = true, i4[o4].forEach((e5) => e5.call(t5, ...r2)));
                } finally {
                  e4[o4] = false;
                }
              }, u = (e5, i5 = []) => {
                const n3 = {};
                l(e5) || (Object.defineProperty(e5, a, { enumerable: false, value: true }), Object.keys(e5).forEach((a2) => {
                  const l2 = a2, c3 = i5.concat(l2).filter((t6) => t6.length);
                  n3[l2] = e5[l2];
                  const h = (0, o3.N)(e5, l2);
                  Object.defineProperty(e5, l2, { set: (e6) => {
                    const i6 = n3[l2];
                    if (!(0, r.P)(n3[l2], e6)) {
                      d(["beforeChange", `beforeChange.${c3.join(".")}`], l2, e6), (0, s.Q)(e6) && u(e6, c3), h && h.set ? h.set.call(t5, e6) : n3[l2] = e6;
                      const o4 = [];
                      d(["change", ...c3.reduce((t6, e7) => (o4.push(e7), t6.push(`change.${o4.join(".")}`), t6), [])], c3.join("."), i6, (null == e6 ? void 0 : e6.valueOf) ? e6.valueOf() : e6);
                    }
                  }, get: () => h && h.get ? h.get.call(t5) : n3[l2], enumerable: true, configurable: true }), (0, s.Q)(n3[l2]) && u(n3[l2], c3);
                }), Object.defineProperty(t5, "on", { value: c2 }));
              };
              return u(t5), t5;
            }
          }, 10004: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return n2;
            }, d: function() {
              return r;
            } });
            var o3 = i3(42448);
            i3(28712);
            const n2 = "JoditEventDefaultNamespace";
            class r {
              constructor() {
                this.__store = /* @__PURE__ */ new Map();
              }
              get(t5, e4) {
                if (this.__store.has(e4)) return this.__store.get(e4)[t5];
              }
              indexOf(t5, e4, i4) {
                const o4 = this.get(t5, e4);
                if (o4) {
                  for (let t6 = 0; o4.length > t6; t6 += 1) if (o4[t6].originalCallback === i4) return t6;
                }
                return false;
              }
              namespaces(t5 = false) {
                const e4 = (0, o3.$)(this.__store.keys());
                return t5 ? e4.filter((t6) => t6 !== n2) : e4;
              }
              events(t5) {
                const e4 = this.__store.get(t5);
                return e4 ? Object.keys(e4) : [];
              }
              set(t5, e4, i4, o4 = false) {
                let n3 = this.__store.get(e4);
                n3 || (n3 = {}, this.__store.set(e4, n3)), void 0 === n3[t5] && (n3[t5] = []), o4 ? n3[t5].unshift(i4) : n3[t5].push(i4);
              }
              clear() {
                this.__store.clear();
              }
              clearEvents(t5, e4) {
                const i4 = this.__store.get(t5);
                i4 && i4[e4] && (delete i4[e4], Object.keys(i4).length || this.__store.delete(t5));
              }
              isEmpty() {
                return 0 === this.__store.size;
              }
            }
          }, 56298: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { JW: function() {
              return _;
            }, My: function() {
              return x;
            }, RR: function() {
              return w;
            }, VF: function() {
              return h;
            }, av: function() {
              return b;
            }, fg: function() {
              return m;
            }, w9: function() {
              return g;
            } });
            var o3 = i3(83044), n2 = i3(98253), r = i3(12041), s = i3(449), a = i3(75766), l = i3(77402), c = i3(17352), d = i3(71842), u = i3(50025);
            const h = {};
            let p = 1;
            const f = /* @__PURE__ */ new Set();
            function g() {
              function t5() {
                return p += 10 * (Math.random() + 1), Math.round(p).toString(16);
              }
              let e4 = t5();
              for (; f.has(e4); ) e4 = t5();
              return f.add(e4), e4;
            }
            const m = new l.$(), b = {}, _ = (t5) => {
              Object.keys(t5).forEach((e4) => {
                c.lang[e4] ? Object.assign(c.lang[e4], t5[e4]) : c.lang[e4] = t5[e4];
              });
            }, v = /* @__PURE__ */ new WeakMap();
            function x(t5, e4, i4 = "div", l2 = false) {
              const c2 = (0, n2.K)(e4) ? e4 : e4 ? (0, a.u)(e4.prototype) : "jodit-utils", u2 = v.get(t5) || {}, h2 = c2 + i4, p2 = (0, r.h)(t5) ? t5 : t5.j;
              if (!u2[h2]) {
                let e5 = p2.c, n3 = (0, o3.y)(t5) && t5.o.shadowRoot ? t5.o.shadowRoot : t5.od.body;
                if (l2 && (0, o3.y)(t5) && t5.od !== t5.ed) {
                  e5 = t5.createInside;
                  const r3 = "style" === i4 ? t5.ed.head : t5.ed.body;
                  n3 = (0, o3.y)(t5) && t5.o.shadowRoot ? t5.o.shadowRoot : r3;
                }
                const r2 = e5.element(i4, { className: `jodit jodit-${(0, s.k)(c2)}-container jodit-box` });
                r2.classList.add(`jodit_theme_${p2.o.theme || "default"}`), n3.appendChild(r2), u2[h2] = r2, t5.hookStatus("beforeDestruct", () => {
                  d.J.safeRemove(r2), delete u2[h2], Object.keys(u2).length && v.delete(t5);
                }), v.set(t5, u2);
              }
              return u2[h2].classList.remove("jodit_theme_default", "jodit_theme_dark"), u2[h2].classList.add(`jodit_theme_${p2.o.theme || "default"}`), u2[h2];
            }
            const w = new u.bk();
          }, 82317: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { _: function() {
              return n2;
            } });
            var o3 = i3(37923);
            const n2 = (t5) => (0, o3.c)(t5) ? t5 : [t5];
          }, 32709: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $r: function() {
              return r.$;
            }, _j: function() {
              return o3._;
            }, uM: function() {
              return n2.u;
            } });
            var o3 = i3(82317), n2 = i3(42589), r = i3(42448);
          }, 42589: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return Array.isArray(t5) ? t5 : t5.split(/[,\s]+/);
            }
            i3.d(e3, { u: function() {
              return o3;
            } });
          }, 42448: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return r;
            } });
            var o3 = i3(34796), n2 = i3(44210);
            const r = function(...t5) {
              var e4;
              return ((0, o3.a)(Array.from) ? Array.from : null !== (e4 = (0, n2.c)("Array.from")) && void 0 !== e4 ? e4 : Array.from).apply(Array, t5);
            };
          }, 89044: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { D: function() {
              return o3.D;
            }, w: function() {
              return o3.w;
            } });
            var o3 = i3(59146);
          }, 59146: function(t4, e3, i3) {
            "use strict";
            function o3(t5, e4, ...i4) {
              return e4 ? window.setTimeout(t5, e4, ...i4) : (t5.call(null, ...i4), 0);
            }
            function n2(t5) {
              window.clearTimeout(t5);
            }
            i3.d(e3, { D: function() {
              return n2;
            }, w: function() {
              return o3;
            } });
          }, 78479: function(t4, e3, i3) {
            "use strict";
            function o3() {
              let t5 = true;
              try {
                const e4 = document.createElement("input");
                e4.type = "color", e4.value = "!", t5 = "color" === e4.type && "!" !== e4.value;
              } catch (e4) {
                t5 = false;
              }
              return t5;
            }
            i3.d(e3, { k: function() {
              return o3;
            } });
          }, 9823: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { AH: function() {
              return c.A;
            }, Bo: function() {
              return y.B;
            }, CE: function() {
              return d.C;
            }, E6: function() {
              return h.E;
            }, Et: function() {
              return b.E;
            }, Gp: function() {
              return u.n4;
            }, Kg: function() {
              return y.K;
            }, Lm: function() {
              return s.L;
            }, Mj: function() {
              return f.M;
            }, P5: function() {
              return a.P;
            }, Qd: function() {
              return v.Q;
            }, Rd: function() {
              return S.R;
            }, Tn: function() {
              return l.T;
            }, a3: function() {
              return m.a;
            }, cy: function() {
              return r.c;
            }, hH: function() {
              return C.h;
            }, kC: function() {
              return o3.k;
            }, kO: function() {
              return u.kO;
            }, kf: function() {
              return _.k;
            }, l6: function() {
              return z.l;
            }, mv: function() {
              return j.m;
            }, n4: function() {
              return a.n;
            }, pV: function() {
              return u.pV;
            }, rg: function() {
              return g.r;
            }, uV: function() {
              return k.u;
            }, vM: function() {
              return w.v;
            }, y0: function() {
              return p.y;
            }, yL: function() {
              return x.y;
            }, zf: function() {
              return n2.z;
            } });
            var o3 = i3(78479), n2 = i3(99951), r = i3(37923), s = i3(9810), a = i3(69810), l = i3(69052), c = i3(53701), d = i3(21811), u = i3(10058), h = i3(3947), p = i3(83044), f = i3(82201), g = i3(71274), m = i3(34796), b = i3(2461), _ = i3(12461), v = i3(25376), x = i3(92039), w = i3(53470), y = i3(98253), j = i3(6939), k = i3(59082), C = i3(12041), S = i3(35642), z = i3(76776);
          }, 99951: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return Boolean(t5) && t5 instanceof DOMException && "AbortError" === t5.name;
            }
            i3.d(e3, { z: function() {
              return o3;
            } });
          }, 37923: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return Array.isArray(t5);
            }
            i3.d(e3, { c: function() {
              return o3;
            } });
          }, 9810: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return "boolean" == typeof t5;
            }
            i3.d(e3, { L: function() {
              return o3;
            } });
          }, 69810: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { P: function() {
              return r;
            }, n: function() {
              return n2;
            } });
            var o3 = i3(28616);
            function n2(t5, e4) {
              return t5 === e4 || (0, o3.A)(t5) === (0, o3.A)(e4);
            }
            function r(t5, e4) {
              return t5 === e4;
            }
          }, 69052: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return "function" == typeof t5;
            }
            i3.d(e3, { T: function() {
              return o3;
            } });
          }, 21811: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return -1 !== t5.search(/<meta.*?Microsoft Excel\s[\d].*?>/) || -1 !== t5.search(/<meta.*?Microsoft Word\s[\d].*?>/) || -1 !== t5.search(/style="[^"]*mso-/) && -1 !== t5.search(/<font/);
            }
            i3.d(e3, { C: function() {
              return o3;
            } });
          }, 53701: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { A: function() {
              return n2;
            } });
            var o3 = i3(98253);
            const n2 = (t5) => (0, o3.K)(t5) && /<([A-Za-z][A-Za-z0-9]*)\b[^>]*>(.*?)<\/\1>/m.test(t5.replace(/[\r\n]/g, ""));
          }, 10058: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { kO: function() {
              return l;
            }, n4: function() {
              return s;
            }, pV: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(69052), r = i3(35642);
            function s(t5) {
              return !(0, r.R)(t5) && (0, n2.T)(t5.init);
            }
            function a(t5) {
              return !(0, r.R)(t5) && (0, n2.T)(t5.destruct);
            }
            function l(t5) {
              return !(0, r.R)(t5) && o3.J.isElement(t5.container);
            }
          }, 3947: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { E: function() {
              return r;
            } });
            var o3 = i3(12461), n2 = i3(98253);
            function r(t5) {
              return (0, n2.K)(t5) && (0, o3.k)(t5) && (t5 = parseFloat(t5)), "number" == typeof t5 && Number.isFinite(t5) && !(t5 % 1);
            }
          }, 83044: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { y: function() {
              return n2;
            } });
            var o3 = i3(69052);
            function n2(t5) {
              return Boolean(t5 && t5 instanceof Object && (0, o3.T)(t5.constructor) && ("undefined" != typeof Jodit && t5 instanceof Jodit || t5.isJodit));
            }
          }, 82201: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return n2;
            } });
            var o3 = i3(98253);
            const n2 = (t5) => (0, o3.K)(t5) && 23 === t5.length && /^[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}-[a-z0-9]{5}$/i.test(t5);
          }, 71274: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { r: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5) {
              return n2.J.isNode(t5) && n2.J.isTag(t5, "span") && t5.hasAttribute("data-" + o3.MARKER_CLASS);
            }
          }, 34796: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return Boolean(t5) && "function" === (typeof t5).toLowerCase() && (t5 === Function.prototype || /^\s*function\s*(\b[a-z$_][a-z0-9$_]*\b)*\s*\((|([a-z$_][a-z0-9$_]*)(\s*,[a-z$_][a-z0-9$_]*)*)\)\s*{\s*\[native code]\s*}\s*$/i.test(String(t5)));
            }
            i3.d(e3, { a: function() {
              return o3;
            } });
          }, 2461: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return "number" == typeof t5 && !isNaN(t5) && isFinite(t5);
            }
            i3.d(e3, { E: function() {
              return o3;
            } });
          }, 12461: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return n2;
            } });
            var o3 = i3(98253);
            function n2(t5) {
              if ((0, o3.K)(t5)) {
                if (!t5.match(/^([+-])?[0-9]+(\.?)([0-9]+)?(e[0-9]+)?$/)) return false;
                t5 = parseFloat(t5);
              }
              return "number" == typeof t5 && !isNaN(t5) && isFinite(t5);
            }
          }, 25376: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return n2;
            } });
            var o3 = i3(76776);
            function n2(t5) {
              return !(!t5 || "object" != typeof t5 || t5.nodeType || (0, o3.l)(t5) || t5.constructor && !{}.hasOwnProperty.call(t5.constructor.prototype, "isPrototypeOf"));
            }
          }, 92039: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return t5 && "function" == typeof t5.then;
            }
            i3.d(e3, { y: function() {
              return o3;
            } });
          }, 53470: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { v: function() {
              return n2;
            } });
            var o3 = i3(69052);
            function n2(t5) {
              return Boolean(t5) && (0, o3.T)(t5.has) && (0, o3.T)(t5.add) && (0, o3.T)(t5.delete);
            }
          }, 98253: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return r;
            }, K: function() {
              return n2;
            } });
            var o3 = i3(37923);
            function n2(t5) {
              return "string" == typeof t5;
            }
            function r(t5) {
              return (0, o3.c)(t5) && n2(t5[0]);
            }
          }, 6939: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              if (t5.includes(" ")) return false;
              if ("undefined" != typeof URL) try {
                const e5 = new URL(t5);
                return ["https:", "http:", "ftp:", "file:", "rtmp:"].includes(e5.protocol);
              } catch (t6) {
                return false;
              }
              const e4 = document.createElement("a");
              return e4.href = t5, Boolean(e4.hostname);
            }
            i3.d(e3, { m: function() {
              return o3;
            } });
          }, 59082: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return !!t5.length && !/[^0-9A-Za-zа-яА-ЯЁё\w\-_. ]/.test(t5) && t5.trim().length > 0;
            }
            i3.d(e3, { u: function() {
              return o3;
            } });
          }, 12041: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { h: function() {
              return n2;
            } });
            var o3 = i3(69052);
            function n2(t5) {
              return Boolean(t5 && t5 instanceof Object && (0, o3.T)(t5.constructor) && t5.isView);
            }
          }, 35642: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return null == t5;
            }
            i3.d(e3, { R: function() {
              return o3;
            } });
          }, 76776: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return null != t5 && t5 === t5.window;
            }
            i3.d(e3, { l: function() {
              return o3;
            } });
          }, 96768: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { s: function() {
              return o3;
            } });
            const o3 = (t5) => {
              if ("rgba(0, 0, 0, 0)" === t5 || "" === t5) return false;
              if (!t5) return "#000000";
              if ("#" === t5.substr(0, 1)) return t5;
              const e4 = /([\s\n\t\r]*?)rgb\((\d+), (\d+), (\d+)\)/.exec(t5) || /([\s\n\t\r]*?)rgba\((\d+), (\d+), (\d+), ([\d.]+)\)/.exec(t5);
              if (!e4) return "#000000";
              const i4 = parseInt(e4[2], 10), o4 = parseInt(e4[3], 10);
              let n2 = (parseInt(e4[4], 10) | o4 << 8 | i4 << 16).toString(16).toUpperCase();
              for (; 6 > n2.length; ) n2 = "0" + n2;
              return e4[1] + "#" + n2;
            };
          }, 93495: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { s: function() {
              return o3.s;
            } });
            var o3 = i3(96768);
          }, 56176: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return l;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(59101), s = i3(58720);
            function a(t5) {
              return t5.replace(/mso-[a-z-]+:[\s]*[^;]+;/gi, "").replace(/mso-[a-z-]+:[\s]*[^";']+$/gi, "").replace(/border[a-z-]*:[\s]*[^;]+;/gi, "").replace(/([0-9.]+)(pt|cm)/gi, (t6, e4, i4) => {
                switch (i4.toLowerCase()) {
                  case "pt":
                    return (1.328 * parseFloat(e4)).toFixed(0) + "px";
                  case "cm":
                    return (0.02645833 * parseFloat(e4)).toFixed(0) + "px";
                }
                return t6;
              });
            }
            function l(t5) {
              if (-1 === t5.indexOf("<html ")) return t5;
              t5 = (t5 = t5.substring(t5.indexOf("<html "), t5.length)).substring(0, t5.lastIndexOf("</html>") + 7);
              const e4 = document.createElement("iframe");
              e4.style.display = "none", document.body.appendChild(e4);
              let i4 = "", l2 = [];
              try {
                const c = e4.contentDocument || (e4.contentWindow ? e4.contentWindow.document : null);
                if (c) {
                  c.open(), c.write(t5), c.close();
                  try {
                    for (let t6 = 0; c.styleSheets.length > t6; t6 += 1) {
                      const e5 = c.styleSheets[t6].cssRules;
                      for (let t7 = 0; e5.length > t7; t7 += 1) "" !== e5[t7].selectorText && (l2 = (0, s.$$)(e5[t7].selectorText, c.body), l2.forEach((i5) => {
                        i5.style.cssText = a(e5[t7].style.cssText + ";" + i5.style.cssText);
                      }));
                    }
                  } catch (t6) {
                    if (!o3.IS_PROD) throw t6;
                  }
                  n2.J.each(c.body, (t6) => {
                    if (n2.J.isElement(t6)) {
                      const e5 = t6, i5 = e5.getAttribute("style");
                      i5 && (e5.style.cssText = a(i5)), e5.hasAttribute("style") && !e5.getAttribute("style") && e5.removeAttribute("style");
                    }
                  }), i4 = c.firstChild ? (0, r.Bq)(c.body.innerHTML) : "";
                }
              } catch (t6) {
              } finally {
                n2.J.safeRemove(e4);
              }
              return i4 && (t5 = i4), (0, r.Bq)(t5.replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, ""));
            }
          }, 94450: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { w: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(42448), r = i3(59101);
            function s(t5) {
              -1 !== t5.indexOf("<html ") && (t5 = (t5 = t5.substring(t5.indexOf("<html "), t5.length)).substring(0, t5.lastIndexOf("</html>") + 7));
              let e4 = "";
              try {
                const i4 = document.createElement("div");
                i4.innerHTML = t5;
                const r2 = [];
                i4.firstChild && o3.J.each(i4, (t6) => {
                  if (t6) switch (t6.nodeType) {
                    case Node.ELEMENT_NODE:
                      switch (t6.nodeName) {
                        case "STYLE":
                        case "LINK":
                        case "META":
                          r2.push(t6);
                          break;
                        case "W:SDT":
                        case "W:SDTPR":
                        case "FONT":
                          o3.J.unwrap(t6);
                          break;
                        default:
                          (0, n2.$)(t6.attributes).forEach((e5) => {
                            -1 === ["src", "href", "rel", "content"].indexOf(e5.name.toLowerCase()) && t6.removeAttribute(e5.name);
                          });
                      }
                      break;
                    case Node.TEXT_NODE:
                      break;
                    default:
                      r2.push(t6);
                  }
                }), o3.J.safeRemove.apply(null, r2), e4 = i4.innerHTML;
              } catch (t6) {
              }
              return e4 && (t5 = e4), (t5 = t5.split(/(\n)/).filter(r.Bq).join("\n")).replace(/<(\/)?(html|colgroup|col|o:p)[^>]*>/g, "").replace(/<!--[^>]*>/g, "");
            }
          }, 4960: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              const e4 = document.createElement("div");
              return e4.textContent = t5, e4.innerHTML;
            }
            i3.d(e3, { G: function() {
              return o3;
            } });
          }, 16113: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Gq: function() {
              return r.G;
            }, HA: function() {
              return s.H;
            }, Kq: function() {
              return l.K;
            }, ZM: function() {
              return o3.Z;
            }, t_: function() {
              return a.t;
            }, vn: function() {
              return a.v;
            }, wE: function() {
              return n2.w;
            } });
            var o3 = i3(56176), n2 = i3(94450), r = i3(4960), s = i3(10025), a = i3(26328), l = i3(61793);
          }, 10025: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return t5.replace(/\r\n|\r|\n/g, "<br/>");
            }
            i3.d(e3, { H: function() {
              return o3;
            } });
          }, 26328: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { t: function() {
              return r;
            }, v: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(97369);
            function r(t5, e4) {
              (o3.J.isElement(t5) || o3.J.isFragment(t5)) && (e4.removeOnError && (s(t5), (0, n2.$$)("[onerror]", t5).forEach((t6) => s(t6, e4))), e4.safeJavaScriptLink && (s(t5), (0, n2.$$)('a[href^="javascript"]', t5).forEach((t6) => s(t6, e4))));
            }
            function s(t5, { safeJavaScriptLink: e4, removeOnError: i4 } = { safeJavaScriptLink: true, removeOnError: true }) {
              if (!o3.J.isElement(t5)) return false;
              let r2 = false;
              i4 && t5.hasAttribute("onerror") && ((0, n2.attr)(t5, "onerror", null), r2 = true);
              const s2 = t5.getAttribute("href");
              return e4 && s2 && 0 === s2.trim().indexOf("javascript") && ((0, n2.attr)(t5, "href", location.protocol + "//" + s2), r2 = true), r2;
            }
          }, 61793: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { K: function() {
              return d;
            } });
            var o3 = i3(55186), n2 = i3(98253), r = i3(59101), s = i3(97369);
            const a = /* @__PURE__ */ new Set(["div", "p", "br", "h1", "h2", "h3", "h4", "h5", "h6", "hr"]), l = /* @__PURE__ */ new Set(["script", "style"]), c = /* @__PURE__ */ new Set(["br", "hr", "input"]);
            function d(t5, e4 = document, i4 = null) {
              const u = e4.createElement("div");
              return (0, n2.K)(t5) ? u.innerHTML = t5 : u.appendChild(t5), (0, s.$$)("*", u).forEach((t6) => {
                const n3 = t6.parentNode;
                if (!n3) return;
                if (i4 && o3.J.isTag(t6, i4)) {
                  const n4 = t6.nodeName.toLowerCase(), r3 = o3.J.isTag(t6, c) ? `%%%jodit-single-${n4}%%%` : `%%%jodit-${n4}%%%${d(t6.innerHTML, e4, i4)}%%%/jodit-${n4}%%%`;
                  return o3.J.before(t6, e4.createTextNode(r3)), void o3.J.safeRemove(t6);
                }
                if (o3.J.isTag(t6, l)) return void o3.J.safeRemove(t6);
                if (!o3.J.isTag(t6, a)) return;
                const r2 = t6.nextSibling;
                o3.J.isText(r2) && /^\s/.test(r2.nodeValue || "") || r2 && n3.insertBefore(e4.createTextNode(" "), r2);
              }), (0, r.Bq)(u.innerText).replace(/%%%(\/)?jodit(-single)?-([\w\n]+)%%%/g, (t6, e5, i5, o4) => `<${e5 ? "/" : ""}${o4}>`);
            }
          }, 65147: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { CamelCaseToKebabCase: function() {
              return d.N;
            }, NUMBER_FIELDS_REG: function() {
              return l.b$;
            }, applyStyles: function() {
              return a.ZM;
            }, asArray: function() {
              return o3._j;
            }, camelCase: function() {
              return d.xQ;
            }, cleanFromWord: function() {
              return a.wE;
            }, clearTimeout: function() {
              return n2.D;
            }, colorToHex: function() {
              return s.s;
            }, fuzzySearchIndex: function() {
              return d.Hp;
            }, getContentWidth: function() {
              return c.y6;
            }, getScrollParent: function() {
              return c.mH;
            }, hasBrowserColorPicker: function() {
              return r.kC;
            }, hasContainer: function() {
              return r.kO;
            }, htmlspecialchars: function() {
              return a.Gq;
            }, i18n: function() {
              return d.Ru;
            }, innerWidth: function() {
              return c.xM;
            }, isAbortError: function() {
              return r.zf;
            }, isArray: function() {
              return r.cy;
            }, isBoolean: function() {
              return r.Lm;
            }, isDestructable: function() {
              return r.pV;
            }, isEqual: function() {
              return r.n4;
            }, isFastEqual: function() {
              return r.P5;
            }, isFunction: function() {
              return r.Tn;
            }, isHTML: function() {
              return r.AH;
            }, isHtmlFromWord: function() {
              return r.CE;
            }, isInitable: function() {
              return r.Gp;
            }, isInt: function() {
              return r.E6;
            }, isJoditObject: function() {
              return r.y0;
            }, isLicense: function() {
              return r.Mj;
            }, isMarker: function() {
              return r.rg;
            }, isNativeFunction: function() {
              return r.a3;
            }, isNumber: function() {
              return r.Et;
            }, isNumeric: function() {
              return r.kf;
            }, isPlainObject: function() {
              return r.Qd;
            }, isPromise: function() {
              return r.yL;
            }, isSet: function() {
              return r.vM;
            }, isString: function() {
              return r.Kg;
            }, isStringArray: function() {
              return r.Bo;
            }, isURL: function() {
              return r.mv;
            }, isValidName: function() {
              return r.uV;
            }, isViewObject: function() {
              return r.hH;
            }, isVoid: function() {
              return r.Rd;
            }, isWindow: function() {
              return r.l6;
            }, kebabCase: function() {
              return d.kW;
            }, nl2br: function() {
              return a.HA;
            }, normalizeColor: function() {
              return l.$2;
            }, normalizeCssNumericValue: function() {
              return l.n8;
            }, normalizeCssValue: function() {
              return l.iy;
            }, normalizeKeyAliases: function() {
              return l.jB;
            }, normalizeLicense: function() {
              return l.f;
            }, normalizePath: function() {
              return l.Fd;
            }, normalizeRelativePath: function() {
              return l.Vd;
            }, normalizeSize: function() {
              return l.rn;
            }, normalizeUrl: function() {
              return l.l2;
            }, offset: function() {
              return c.cY;
            }, position: function() {
              return c.G1;
            }, safeHTML: function() {
              return a.t_;
            }, sanitizeHTMLElement: function() {
              return a.vn;
            }, setTimeout: function() {
              return n2.w;
            }, size: function() {
              return c.Ej;
            }, splitArray: function() {
              return o3.uM;
            }, sprintf: function() {
              return d.nv;
            }, stringify: function() {
              return d.As;
            }, stripTags: function() {
              return a.Kq;
            }, toArray: function() {
              return o3.$r;
            }, trim: function() {
              return d.Bq;
            }, trimChars: function() {
              return d.Gd;
            }, trimInv: function() {
              return d.gj;
            }, ucfirst: function() {
              return d.Z2;
            } });
            var o3 = i3(32709), n2 = i3(89044), r = i3(9823), s = i3(93495), a = i3(16113), l = i3(65499), c = i3(34125), d = i3(6589), u = i3(97369), h = {};
            for (var p in u) 0 > ["default", "asArray", "splitArray", "toArray", "clearTimeout", "setTimeout", "hasBrowserColorPicker", "hasContainer", "isAbortError", "isArray", "isBoolean", "isDestructable", "isEqual", "isFastEqual", "isFunction", "isHTML", "isHtmlFromWord", "isInitable", "isInt", "isJoditObject", "isLicense", "isMarker", "isNativeFunction", "isNumber", "isNumeric", "isPlainObject", "isPromise", "isSet", "isString", "isStringArray", "isURL", "isValidName", "isViewObject", "isVoid", "isWindow", "colorToHex", "applyStyles", "cleanFromWord", "htmlspecialchars", "nl2br", "safeHTML", "sanitizeHTMLElement", "stripTags", "NUMBER_FIELDS_REG", "normalizeColor", "normalizeCssNumericValue", "normalizeCssValue", "normalizeKeyAliases", "normalizeLicense", "normalizePath", "normalizeRelativePath", "normalizeSize", "normalizeUrl", "getContentWidth", "getScrollParent", "innerWidth", "offset", "position", "size", "CamelCaseToKebabCase", "camelCase", "fuzzySearchIndex", "i18n", "kebabCase", "sprintf", "stringify", "trim", "trimChars", "trimInv", "ucfirst"].indexOf(p) && (h[p] = (function(t5) {
              return u[t5];
            }).bind(0, p));
            i3.d(e3, h);
          }, 65499: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $2: function() {
              return o3.$;
            }, Fd: function() {
              return a.F;
            }, Vd: function() {
              return l.V;
            }, b$: function() {
              return n2.b$;
            }, f: function() {
              return s.f;
            }, iy: function() {
              return n2.iy;
            }, jB: function() {
              return r.j;
            }, l2: function() {
              return d.l;
            }, n8: function() {
              return n2.n8;
            }, rn: function() {
              return c.r;
            } });
            var o3 = i3(73446), n2 = i3(59678), r = i3(74995), s = i3(31138), a = i3(92998), l = i3(13265), c = i3(7920), d = i3(39344);
          }, 73446: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return r;
            } });
            var o3 = i3(96768), n2 = i3(59101);
            const r = (t5) => {
              const e4 = ["#"];
              let i4 = (0, o3.s)(t5);
              if (!i4) return false;
              if (i4 = (0, n2.Bq)(i4.toUpperCase()), i4 = i4.substring(1), 3 === i4.length) {
                for (let t6 = 0; 3 > t6; t6 += 1) e4.push(i4[t6]), e4.push(i4[t6]);
                return e4.join("");
              }
              return i4.length > 6 && (i4 = i4.slice(0, 6)), "#" + i4;
            };
          }, 59678: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b$: function() {
              return a;
            }, iy: function() {
              return c;
            }, n8: function() {
              return l;
            } });
            var o3 = i3(12461), n2 = i3(35642), r = i3(96768), s = i3(449);
            const a = /^(left|top|bottom|right|width|min|max|height|margin|padding|fontsize|font-size)/i;
            function l(t5, e4) {
              return !(0, n2.R)(e4) && a.test(t5) && (0, o3.k)(e4.toString()) ? parseInt(e4.toString(), 10) + "px" : e4;
            }
            function c(t5, e4) {
              if ("font-weight" === (0, s.k)(t5)) {
                switch (e4.toString().toLowerCase()) {
                  case "700":
                  case "bold":
                    return 700;
                  case "400":
                  case "normal":
                    return 400;
                  case "900":
                  case "heavy":
                    return 900;
                }
                return (0, o3.k)(e4) ? Number(e4) : e4;
              }
              return /color/i.test(t5) && /^rgb/i.test(e4.toString()) && (0, r.s)(e4.toString()) || e4;
            }
          }, 74995: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { j: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(59101);
            function r(t5) {
              const e4 = {}, i4 = { meta: 1, ctrl: 2, control: 2, alt: 3, shift: 4 };
              return t5.replace(/\+\+/g, "+add").split(/[\s]*\+[\s]*/).map((t6) => (0, n2.Bq)(t6.toLowerCase())).map((t6) => o3.KEY_ALIASES[t6] || t6).sort((t6, e5) => i4[t6] && !i4[e5] ? -1 : !i4[t6] && i4[e5] ? 1 : i4[t6] && i4[e5] ? i4[t6] - i4[e5] : t6 > e5 ? 1 : -1).filter((t6) => !e4[t6] && "" !== t6 && (e4[t6] = true)).join("+");
            }
          }, 31138: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return o3;
            } });
            const o3 = (t5, e4 = 8) => {
              const i4 = [];
              for (; t5.length; ) i4.push(t5.substr(0, e4)), t5 = t5.substr(e4);
              return i4[1] = i4[1].replace(/./g, "*"), i4[2] = i4[2].replace(/./g, "*"), i4.join("-");
            };
          }, 92998: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return n2;
            } });
            var o3 = i3(59101);
            const n2 = (...t5) => t5.filter((t6) => (0, o3.Bq)(t6).length).map((e4, i4) => (e4 = e4.replace(/([^:])[\\/]+/g, "$1/"), i4 && (e4 = e4.replace(/^\//, "")), i4 !== t5.length - 1 && (e4 = e4.replace(/\/$/, "")), e4)).join("/");
          }, 13265: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return o3;
            } });
            const o3 = (t5) => t5.split("/").reduce((t6, e4) => {
              switch (e4) {
                case "":
                case ".":
                  break;
                case "..":
                  t6.pop();
                  break;
                default:
                  t6.push(e4);
              }
              return t6;
            }, []).join("/") + (t5.endsWith("/") ? "/" : "");
          }, 7920: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { r: function() {
              return o3;
            } });
            const o3 = (t5, e4) => /^[0-9]+$/.test(t5.toString()) ? t5 + e4 : t5.toString();
          }, 39344: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { l: function() {
              return o3;
            } });
            const o3 = (...t5) => t5.filter((t6) => t6.length).map((t6) => t6.replace(/\/$/, "")).join("/").replace(/([^:])[\\/]+/g, "$1/");
          }, 73780: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { y: function() {
              return o3;
            } });
            const o3 = (t5, e4) => {
              const i4 = (t6) => parseInt(t6, 10), o4 = e4.getComputedStyle(t5);
              return t5.offsetWidth - i4(o4.getPropertyValue("padding-left") || "0") - i4(o4.getPropertyValue("padding-right") || "0");
            };
          }, 98228: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(97369);
            function r(t5) {
              if (!t5) return null;
              const e4 = o3.J.isHTMLElement(t5), i4 = e4 && (0, n2.css)(t5, "overflowY");
              return e4 && "visible" !== i4 && "hidden" !== i4 && t5.scrollHeight >= t5.clientHeight ? t5 : r(t5.parentNode) || document.scrollingElement || document.body;
            }
          }, 34125: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Ej: function() {
              return s.E;
            }, G1: function() {
              return l.G;
            }, cY: function() {
              return a.c;
            }, mH: function() {
              return n2.m;
            }, xM: function() {
              return r.x;
            }, y6: function() {
              return o3.y;
            } });
            var o3 = i3(73780), n2 = i3(98228), r = i3(49744), s = i3(95350), a = i3(91594), l = i3(27594);
          }, 49744: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { x: function() {
              return o3;
            } });
            const o3 = (t5, e4) => {
              const i4 = e4.getComputedStyle(t5);
              let o4 = t5.clientWidth;
              return o4 -= parseFloat(i4.paddingLeft || "0") + parseFloat(i4.paddingRight || "0"), o4;
            };
          }, 95350: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { E: function() {
              return n2;
            } });
            var o3 = i3(9823);
            function n2(t5) {
              return (0, o3.Kg)(t5) || (0, o3.cy)(t5) ? t5.length : (0, o3.Qd)(t5) ? Object.keys(t5).length : 0;
            }
          }, 91594: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { c: function() {
              return o3;
            } });
            const o3 = (t5, e4, i4, n2 = false) => {
              let r;
              try {
                r = t5.getBoundingClientRect();
              } catch (t6) {
                r = { top: 0, bottom: 0, left: 0, right: 0, width: 0, height: 0 };
              }
              const s = i4.body, a = i4.documentElement || { clientTop: 0, clientLeft: 0, scrollTop: 0, scrollLeft: 0 }, l = i4.defaultView || i4.parentWindow, c = l.pageYOffset || a.scrollTop || s.scrollTop, d = l.pageXOffset || a.scrollLeft || s.scrollLeft, u = a.clientTop || s.clientTop || 0, h = a.clientLeft || s.clientLeft || 0;
              let p, f;
              const g = e4.iframe;
              if (!n2 && e4 && e4.options && e4.o.iframe && g) {
                const { top: t6, left: i5 } = o3(g, e4, e4.od, true);
                p = r.top + t6, f = r.left + i5;
              } else p = r.top + c - u, f = r.left + d - h;
              return { top: Math.round(p), left: Math.round(f), width: r.width, height: r.height };
            };
          }, 27594: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { G: function() {
              return n2;
            } });
            var o3 = i3(83044);
            function n2(t5, e4, i4 = false) {
              var r, s;
              const a = t5.getBoundingClientRect();
              let l = a.left, c = a.top;
              if ((0, o3.y)(e4) && e4.iframe && e4.ed.body.contains(t5) && !i4) {
                const { left: t6, top: i5 } = n2(e4.iframe, e4, true);
                l += t6, c += i5;
              }
              return { left: Math.round(l), top: Math.round(c), width: Math.round(null !== (r = t5.offsetWidth) && void 0 !== r ? r : a.width), height: Math.round(null !== (s = t5.offsetHeight) && void 0 !== s ? s : a.height) };
            }
          }, 83260: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { x: function() {
              return o3;
            } });
            const o3 = (t5) => t5.replace(/([-_])(.)/g, (t6, e4, i4) => i4.toUpperCase());
          }, 67975: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { H: function() {
              return n2;
            } });
            var o3 = i3(17352);
            function n2(t5, e4, i4 = 0, n3 = 1) {
              let r = 0, s = 0, a = -1, l = 0, c = 0;
              for (s = i4; t5.length > r && e4.length > s; ) t5[r].toLowerCase() === e4[s].toLowerCase() ? (r++, l++, c = 0, -1 === a && (a = s)) : r > 0 && (n3 > c || e4[s] === o3.INVISIBLE_SPACE ? (c++, l++) : (r = 0, a = -1, l = 0, c = 0, s--)), s++;
              return r === t5.length ? [a, l] : [-1, 0];
            }
          }, 91093: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { R: function() {
              return c;
            }, n: function() {
              return l;
            } });
            var o3 = i3(17352), n2 = i3(98253), r = i3(10467), s = i3(97369), a = i3(36115);
            const l = (t5, e4) => {
              if (!e4 || !e4.length) return t5;
              const i4 = /%([sd])/g;
              let o4 = i4.exec(t5), n3 = t5, r2 = 0;
              for (; o4 && void 0 !== e4[r2]; ) n3 = n3.replace(o4[0], e4[r2].toString()), r2 += 1, o4 = i4.exec(t5);
              return n3;
            };
            function c(t5, e4, i4) {
              if (!(0, n2.K)(t5)) throw (0, s.error)("i18n: Need string in first argument");
              if (!t5.length) return t5;
              const c2 = Boolean(null == i4 ? void 0 : i4.debugLanguage);
              let d = {};
              const u = (t6) => e4 && e4.length ? l(t6, e4) : t6, h = (0, s.defaultLanguage)(a.T.defaultOptions.language, a.T.defaultOptions.language), p = (0, s.defaultLanguage)(null == i4 ? void 0 : i4.language, h), f = (e5) => {
                if (!e5) return;
                if ((0, n2.K)(e5[t5])) return u(e5[t5]);
                const i5 = t5.toLowerCase();
                if ((0, n2.K)(e5[i5])) return u(e5[i5]);
                const o4 = (0, r.Z)(t5);
                return (0, n2.K)(e5[o4]) ? u(e5[o4]) : void 0;
              };
              void 0 !== o3.lang[p] ? d = o3.lang[p] : c2 || (d = void 0 !== o3.lang[h] ? o3.lang[h] : o3.lang.en);
              const g = null == i4 ? void 0 : i4.i18n;
              if (g && g[p]) {
                const t6 = f(g[p]);
                if (t6) return t6;
              }
              return f(d) || (!c2 && o3.lang.en && (0, n2.K)(o3.lang.en[t5]) && o3.lang.en[t5] ? u(o3.lang.en[t5]) : c2 ? "{" + t5 + "}" : u(t5));
            }
          }, 6589: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { As: function() {
              return a.A;
            }, Bq: function() {
              return l.Bq;
            }, Gd: function() {
              return l.Gd;
            }, Hp: function() {
              return n2.H;
            }, N: function() {
              return s.N;
            }, Ru: function() {
              return r.R;
            }, Z2: function() {
              return c.Z;
            }, gj: function() {
              return l.gj;
            }, kW: function() {
              return s.k;
            }, nv: function() {
              return r.n;
            }, xQ: function() {
              return o3.x;
            } });
            var o3 = i3(83260), n2 = i3(67975), r = i3(91093), s = i3(449), a = i3(28616), l = i3(59101), c = i3(10467);
          }, 449: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return n2;
            }, k: function() {
              return o3;
            } });
            const o3 = (t5) => t5.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[\s_]+/g, "-").toLowerCase(), n2 = (t5) => t5.replace(/([A-Z])([A-Z])([a-z])/g, "$1-$2$3").replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
          }, 28616: function(t4, e3, i3) {
            "use strict";
            function o3(t5, e4 = {}) {
              if ("object" != typeof t5) return String(t5);
              const i4 = new Set(e4.excludeKeys), o4 = /* @__PURE__ */ new WeakMap();
              return JSON.stringify(t5, (t6, e5) => {
                if (!i4.has(t6)) {
                  if ("object" == typeof e5 && null != e5) {
                    if (o4.get(e5)) return "[refObject]";
                    o4.set(e5, true);
                  }
                  return e5;
                }
              }, e4.prettify);
            }
            i3.d(e3, { A: function() {
              return o3;
            } });
          }, 59101: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Bq: function() {
              return n2;
            }, Gd: function() {
              return r;
            }, gj: function() {
              return s;
            } });
            var o3 = i3(17352);
            function n2(t5) {
              return t5.replace((0, o3.SPACE_REG_EXP_END)(), "").replace((0, o3.SPACE_REG_EXP_START)(), "");
            }
            function r(t5, e4) {
              return t5.replace(RegExp(`[${e4}]+$`), "").replace(RegExp(`^[${e4}]+`), "");
            }
            function s(t5) {
              return t5.replace((0, o3.INVISIBLE_SPACE_REG_EXP_END)(), "").replace((0, o3.INVISIBLE_SPACE_REG_EXP_START)(), "");
            }
          }, 10467: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return t5.length ? t5[0].toUpperCase() + t5.substring(1) : "";
            }
            i3.d(e3, { Z: function() {
              return o3;
            } });
          }, 40080: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Mr: function() {
              return r;
            }, Op: function() {
              return a;
            }, Xm: function() {
              return s;
            } });
            var o3 = i3(71842), n2 = i3(38322);
            function r(t5, e4) {
              e4 && "normal" !== e4 ? "center" !== e4 ? ((0, n2.A)(t5, "float", e4), (0, n2.a)(t5)) : (0, n2.A)(t5, { float: "", display: "block", marginLeft: "auto", marginRight: "auto" }) : ((0, n2.A)(t5, "float") && -1 !== ["right", "left"].indexOf((0, n2.A)(t5, "float").toString().toLowerCase()) && (0, n2.A)(t5, "float", ""), (0, n2.a)(t5));
            }
            function s(t5) {
              o3.J.each(t5, (t6) => {
                o3.J.isHTMLElement(t6) && t6.style.textAlign && (t6.style.textAlign = "", t6.style.cssText.trim().length || t6.removeAttribute("style"));
              });
            }
            function a(t5, e4) {
              if (o3.J.isNode(e4) && o3.J.isElement(e4)) switch (s(e4), t5.toLowerCase()) {
                case "justifyfull":
                  e4.style.textAlign = "justify";
                  break;
                case "justifyright":
                  e4.style.textAlign = "right";
                  break;
                case "justifyleft":
                  e4.style.textAlign = "left";
                  break;
                case "justifycenter":
                  e4.style.textAlign = "center";
              }
            }
          }, 27301: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Qt: function() {
              return c;
            }, S5: function() {
              return l;
            }, w4: function() {
              return a;
            }, x_: function() {
              return d;
            } });
            var o3 = i3(98253), n2 = i3(60346);
            const r = /* @__PURE__ */ new Map(), s = (t5) => async (e4, i4) => {
              if (r.has(i4)) return r.get(i4);
              const o4 = t5(e4, i4);
              return r.set(i4, o4), o4;
            }, a = s((t5, e4) => t5.async.promise((i4, o4) => {
              if (t5.isInDestruct) return o4();
              const r2 = t5.c.element("script", { type: "text/javascript", async: true, src: (0, n2.X)(e4) });
              t5.od.body.appendChild(r2), t5.e.on(r2, "error", o4).on(r2, "load", i4);
            })), l = s((t5, e4) => t5.async.promise((i4, o4) => {
              if (t5.isInDestruct) return o4();
              const r2 = t5.c.element("link");
              r2.rel = "stylesheet", r2.media = "all", r2.crossOrigin = "anonymous", !t5.isInDestruct && t5.e.on(r2, "load", () => i4(r2)).on(r2, "error", o4), r2.href = (0, n2.X)(e4), t5.o.shadowRoot ? t5.o.shadowRoot.appendChild(r2) : t5.od.body.appendChild(r2);
            }));
            function c(t5, e4, i4 = 0) {
              return (0, o3.K)(e4[i4]) ? a(t5, e4[i4]).then(() => c(t5, e4, i4 + 1)) : Promise.resolve();
            }
            function d(t5, e4, i4 = 0) {
              return (0, o3.K)(e4[i4]) ? l(t5, e4[i4]).then(() => d(t5, e4, i4 + 1)) : Promise.resolve();
            }
          }, 26150: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return s;
            } });
            var o3 = i3(9823), n2 = i3(449), r = i3(38322);
            function s(t5, e4, i4) {
              if (!t5 || !(0, o3.Tn)(t5.getAttribute)) return null;
              if (!(0, o3.Kg)(e4)) return Object.keys(e4).forEach((i5) => {
                const n3 = e4[i5];
                (0, o3.Qd)(n3) && "style" === i5 ? (0, r.A)(t5, n3) : ("className" === i5 && (i5 = "class"), s(t5, i5, n3));
              }), null;
              let a = (0, n2.N)(e4);
              if (/^-/.test(a)) {
                const e5 = s(t5, `data${a}`);
                if (e5) return e5;
                a = a.substr(1);
              }
              if (void 0 !== i4) {
                if (null != i4) {
                  let e5 = i4.toString();
                  return "IMG" !== t5.nodeName || "width" !== a && "height" !== a || (e5 = e5.replace("px", "")), t5.setAttribute(a, e5), e5;
                }
                t5.hasAttribute(a) && t5.removeAttribute(a);
              }
              return t5.getAttribute(a);
            }
          }, 65717: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { T: function() {
              return o3;
            } });
            const o3 = (t5) => {
              const e4 = navigator.userAgent.toLowerCase(), i4 = /(firefox)[\s/]([\w.]+)/.exec(e4) || /(chrome)[\s/]([\w.]+)/.exec(e4) || /(webkit)[\s/]([\w.]+)/.exec(e4) || /(opera)(?:.*version)[\s/]([\w.]+)/.exec(e4) || /(msie)[\s]([\w.]+)/.exec(e4) || /(trident)\/([\w.]+)/.exec(e4) || 0 > e4.indexOf("compatible") || [];
              return "version" === t5 ? i4[2] : "webkit" === t5 ? "chrome" === i4[1] || "webkit" === i4[1] : "ff" === t5 ? "firefox" === i4[1] : "msie" === t5 ? "trident" === i4[1] || "msie" === i4[1] : i4[1] === t5;
            };
          }, 76104: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return n2;
            } });
            var o3 = i3(25376);
            const n2 = (t5, e4) => {
              const i4 = [], r = encodeURIComponent;
              for (const s in t5) if (Object.prototype.hasOwnProperty.call(t5, s)) {
                const a = e4 ? e4 + "[" + s + "]" : s, l = t5[s];
                i4.push((0, o3.Q)(l) ? n2(l, a) : r(a) + "=" + r(l));
              }
              return i4.join("&");
            };
          }, 60346: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return o3;
            } });
            const o3 = (t5) => ("file:" === window.location.protocol && /^\/\//.test(t5) && (t5 = "https:" + t5), t5);
          }, 86248: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return u;
            }, t: function() {
              return d;
            } });
            var o3 = i3(37923), n2 = i3(25376), r = i3(98253), s = i3(35642), a = i3(49429), l = i3(84976), c = i3(36115);
            function d(t5, e4, i4 = 0) {
              if (Object.getPrototypeOf(t5) !== Object.prototype) return t5;
              const l2 = c.T.defaultOptions;
              if ((0, r.K)(t5.preset)) {
                if (void 0 !== l2.presets[t5.preset]) {
                  const e5 = l2.presets[t5.preset];
                  Object.keys(e5).forEach((i5) => {
                    (0, s.R)(t5[i5]) && (t5[i5] = e5[i5]);
                  });
                }
                delete t5.preset;
              }
              const u2 = {};
              return Object.keys(t5).forEach((r2) => {
                const s2 = t5[r2], l3 = e4 ? e4[r2] : null;
                u2[r2] = (0, n2.Q)(s2) && (0, n2.Q)(l3) && !(0, a.mA)(s2) ? d(s2, l3, i4 + 1) : 0 !== i4 && (0, o3.c)(s2) && !(0, a.mA)(s2) && (0, o3.c)(l3) ? [...s2, ...l3.slice(s2.length)] : s2;
              }), Object.setPrototypeOf(u2, e4), u2;
            }
            function u(t5) {
              return (0, l.HP)(t5, false).reduce((e4, i4) => (e4[i4] = t5[i4], e4), {});
            }
          }, 82807: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return r;
            } });
            var o3 = i3(6939), n2 = i3(70807);
            const r = (t5, e4 = 400, i4 = 345) => {
              if (!(0, o3.m)(t5)) return t5;
              const r2 = document.createElement("a"), s = /(?:http?s?:\/\/)?(?:www\.)?(?:vimeo\.com)\/?(.+)/g;
              r2.href = t5, e4 || (e4 = 400), i4 || (i4 = 345);
              const a = r2.protocol || "";
              switch (r2.hostname) {
                case "www.vimeo.com":
                case "vimeo.com":
                  return s.test(t5) ? t5.replace(s, '<iframe width="' + e4 + '" height="' + i4 + '" src="' + a + '//player.vimeo.com/video/$1" frameborder="0" allowfullscreen></iframe>') : t5;
                case "youtube.com":
                case "www.youtube.com":
                case "youtu.be":
                case "www.youtu.be": {
                  const o4 = r2.search ? (0, n2.m)(r2.search) : { v: r2.pathname.substr(1) };
                  return o4.v ? '<iframe width="' + e4 + '" height="' + i4 + '" src="' + a + "//www.youtube.com/embed/" + o4.v + '" frameborder="0" allowfullscreen></iframe>' : t5;
                }
              }
              return t5;
            };
          }, 38322: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { A: function() {
              return l;
            }, a: function() {
              return c;
            } });
            var o3 = i3(9810), n2 = i3(25376), r = i3(59678), s = i3(83260), a = i3(449);
            function l(t5, e4, i4, c2 = false) {
              if ((0, o3.L)(i4) && (c2 = i4, i4 = void 0), (0, n2.Q)(e4) || void 0 !== i4) {
                const o4 = (t6, e5, i5) => {
                  void 0 === (i5 = (0, r.n8)(e5, i5)) || null != i5 && l(t6, e5, true) === (0, r.iy)(e5, i5) || (t6.style[e5] = i5);
                };
                if ((0, n2.Q)(e4)) {
                  const i5 = Object.keys(e4);
                  for (let n3 = 0; i5.length > n3; n3 += 1) o4(t5, (0, s.x)(i5[n3]), e4[i5[n3]]);
                } else o4(t5, (0, s.x)(e4), i4);
                return "";
              }
              const d = (0, a.k)(e4), u = t5.ownerDocument || document, h = !!u && (u.defaultView || u.parentWindow), p = t5.style[e4];
              let f = "";
              return void 0 !== p && "" !== p ? f = p : h && !c2 && (f = h.getComputedStyle(t5).getPropertyValue(d)), r.b$.test(e4) && /^[-+]?[0-9.]+px$/.test(f.toString()) && (f = parseInt(f.toString(), 10)), (0, r.iy)(e4, f);
            }
            const c = (t5) => {
              "block" === l(t5, "display") && l(t5, "display", "");
              const { style: e4 } = t5;
              "auto" === e4.marginLeft && "auto" === e4.marginRight && (e4.marginLeft = "", e4.marginRight = "");
            };
          }, 34446: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return o3;
            } });
            const o3 = (t5) => {
              if ("undefined" != typeof navigator && -1 !== navigator.userAgent.indexOf("Mac OS X")) {
                if (t5.metaKey && !t5.altKey) return true;
              } else if (t5.ctrlKey && !t5.altKey) return true;
              return false;
            };
          }, 72197: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return r;
            } });
            var o3 = i3(12041);
            const n2 = /* @__PURE__ */ new WeakMap(), r = (t5, e4, i4) => {
              let r2 = n2.get(t5);
              if (!r2) {
                r2 = {}, n2.set(t5, r2);
                let e5 = null;
                (0, o3.h)(t5.j) && (e5 = t5.j.e), (0, o3.h)(t5) && (e5 = t5.e), e5 && e5.on("beforeDestruct", () => {
                  n2.delete(t5);
                });
              }
              return void 0 === i4 ? r2[e4] : (r2[e4] = i4, i4);
            };
          }, 17527: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { e: function() {
              return n2;
            } });
            var o3 = i3(98253);
            const n2 = (t5, e4 = "en") => "auto" !== t5 && (0, o3.K)(t5) ? t5 : document.documentElement && document.documentElement.lang ? document.documentElement.lang : navigator.language ? navigator.language.substring(0, 2) : e4;
          }, 76166: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { FI: function() {
              return r;
            }, fF: function() {
              return s;
            }, z3: function() {
              return n2;
            } });
            var o3 = i3(20222);
            function n2(t5) {
              return new TypeError(t5);
            }
            function r(t5) {
              return new o3.Rc(t5);
            }
            function s(t5) {
              return new o3.ZW(t5);
            }
          }, 21567: function(t4, e3, i3) {
            "use strict";
            function o3(t5 = "Aborted") {
              return new DOMException(t5, "AbortError");
            }
            i3.d(e3, { h: function() {
              return o3;
            }, r: function() {
              return n2;
            } });
            const n2 = i3(99951).z;
          }, 30495: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { R: function() {
              return o3;
            } });
            class o3 extends Error {
              constructor(t5) {
                super(t5), Object.setPrototypeOf(this, o3.prototype);
              }
            }
          }, 20222: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Rc: function() {
              return n2.R;
            }, ZW: function() {
              return r.Z;
            }, h2: function() {
              return o3.h;
            }, rV: function() {
              return o3.r;
            } });
            var o3 = i3(21567), n2 = i3(30495), r = i3(34899);
          }, 34899: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return o3;
            } });
            class o3 extends TypeError {
              constructor(t5) {
                super(t5), Object.setPrototypeOf(this, o3.prototype);
              }
            }
          }, 50156: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { FI: function() {
              return o3.FI;
            }, Rc: function() {
              return n2.Rc;
            }, ZW: function() {
              return n2.ZW;
            }, fF: function() {
              return o3.fF;
            }, h2: function() {
              return n2.h2;
            }, rV: function() {
              return n2.rV;
            }, z3: function() {
              return o3.z3;
            } });
            var o3 = i3(76166), n2 = i3(20222);
          }, 49429: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Hp: function() {
              return r;
            }, mA: function() {
              return n2;
            }, y6: function() {
              return s;
            } });
            var o3 = i3(28616);
            function n2(t5) {
              return t5 && t5.isAtom;
            }
            function r(t5) {
              return Object.defineProperty(t5, "isAtom", { enumerable: false, value: true, configurable: false }), t5;
            }
            function s(t5) {
              return JSON.parse((0, o3.A)(t5));
            }
          }, 75766: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return n2;
            }, u: function() {
              return r;
            } });
            var o3 = i3(69052);
            const n2 = /* @__PURE__ */ new Map(), r = (t5) => {
              var e4;
              if ((0, o3.T)(t5.className)) return t5.className();
              const i4 = (null === (e4 = t5.constructor) || void 0 === e4 ? void 0 : e4.originalConstructor) || t5.constructor;
              if (n2.has(i4)) return n2.get(i4);
              if (i4.name) return i4.name;
              const r2 = new RegExp(/^\s*function\s*(\S*)\s*\(/), s = i4.toString().match(r2);
              return s ? s[1] : "";
            };
          }, 16841: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { J: function() {
              return r;
            } });
            var o3 = i3(98253), n2 = i3(35642);
            function r(t5, e4) {
              if (!(0, o3.K)(t5) || !t5.length) return null;
              const i4 = t5.split(".");
              let r2 = e4;
              try {
                for (const t6 of i4) {
                  if ((0, n2.R)(r2[t6])) return null;
                  r2 = r2[t6];
                }
              } catch (t6) {
                return null;
              }
              return (0, n2.R)(r2) ? null : r2;
            }
          }, 99898: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return o3;
            } });
            const o3 = (t5) => {
              if (/^[0-9.]+$/.test(t5.toString())) return parseFloat(t5);
              const e4 = t5.substr(-2, 2).toUpperCase(), i4 = ["KB", "MB", "GB", "TB"], o4 = parseFloat(t5.substr(0, t5.length - 2));
              return -1 !== i4.indexOf(e4) ? o4 * Math.pow(1024, i4.indexOf(e4) + 1) : parseInt(t5, 10);
            };
          }, 97369: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { $$: function() {
              return T.$$;
            }, ConfigFlatten: function() {
              return h.V;
            }, ConfigProto: function() {
              return h.t;
            }, ConnectionError: function() {
              return _.Rc;
            }, LimitedStack: function() {
              return I.d;
            }, OptionsError: function() {
              return _.ZW;
            }, abort: function() {
              return _.h2;
            }, alignElement: function() {
              return o3.Op;
            }, appendScriptAsync: function() {
              return n2.w4;
            }, appendStyleAsync: function() {
              return n2.S5;
            }, attr: function() {
              return l.C;
            }, browser: function() {
              return c.T;
            }, buildQuery: function() {
              return d.Z;
            }, call: function() {
              return A.T1;
            }, callPromise: function() {
              return A.o_;
            }, clearAlign: function() {
              return o3.Xm;
            }, clearCenterAlign: function() {
              return f.a;
            }, cns: function() {
              return j.f;
            }, completeUrl: function() {
              return u.X;
            }, connection: function() {
              return _.FI;
            }, convertMediaUrlToVideoEmbed: function() {
              return p.m;
            }, css: function() {
              return f.A;
            }, cssPath: function() {
              return T.bE;
            }, ctrlKey: function() {
              return g.X;
            }, dataBind: function() {
              return m.m;
            }, defaultLanguage: function() {
              return b.e;
            }, error: function() {
              return _.z3;
            }, fastClone: function() {
              return v.y6;
            }, get: function() {
              return x.J;
            }, getClassName: function() {
              return w.u;
            }, getDataTransfer: function() {
              return A.my;
            }, getXPathByElement: function() {
              return T.fz;
            }, hAlignElement: function() {
              return o3.Mr;
            }, humanSizeToBytes: function() {
              return y.z;
            }, inView: function() {
              return z.l;
            }, isAbort: function() {
              return _.rV;
            }, isAtom: function() {
              return v.mA;
            }, keepNames: function() {
              return w.M;
            }, keys: function() {
              return A.HP;
            }, loadImage: function() {
              return A.yt;
            }, loadNext: function() {
              return n2.Qt;
            }, loadNextStyle: function() {
              return n2.x_;
            }, markAsAtomic: function() {
              return v.Hp;
            }, markDeprecated: function() {
              return j.B;
            }, markOwner: function() {
              return A.b_;
            }, memorizeExec: function() {
              return A.qN;
            }, options: function() {
              return _.fF;
            }, parseQuery: function() {
              return k.m;
            }, previewBox: function() {
              return C.u;
            }, refs: function() {
              return T.DY;
            }, reset: function() {
              return S.c;
            }, resolveElement: function() {
              return T.tI;
            }, scrollIntoViewIfNeeded: function() {
              return z.$;
            }, set: function() {
              return E.h;
            } });
            var o3 = i3(40080), n2 = i3(27301), r = i3(28712), s = {};
            for (var a in r) 0 > ["default", "alignElement", "clearAlign", "hAlignElement", "appendScriptAsync", "appendStyleAsync", "loadNext", "loadNextStyle"].indexOf(a) && (s[a] = (function(t5) {
              return r[t5];
            }).bind(0, a));
            i3.d(e3, s);
            var l = i3(26150), c = i3(65717), d = i3(76104), u = i3(60346), h = i3(86248), p = i3(82807), f = i3(38322), g = i3(34446), m = i3(72197), b = i3(17527), _ = i3(50156), v = i3(49429), x = i3(16841), w = i3(75766), y = i3(99898), j = i3(67400), k = i3(70807), C = i3(98434), S = i3(44210), z = i3(641), T = i3(58720), E = i3(40677), I = i3(70069), A = i3(84976);
          }, 67400: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return n2;
            }, f: function() {
              return o3;
            } });
            const o3 = console;
            function n2(t5, e4 = [""], i4 = null) {
              return (...n3) => (o3.warn(`Method "${e4[0]}" deprecated.` + (e4[1] ? ` Use "${e4[1]}" instead` : "")), t5.call(i4, ...n3));
            }
          }, 70807: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return o3;
            } });
            const o3 = (t5) => {
              const e4 = {}, i4 = t5.substring(1).split("&");
              for (let t6 = 0; i4.length > t6; t6 += 1) {
                const o4 = i4[t6].split("=");
                e4[decodeURIComponent(o4[0])] = decodeURIComponent(o4[1] || "");
              }
              return e4;
            };
          }, 98434: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return l;
            } });
            var o3 = i3(55186), n2 = i3(98253), r = i3(26150), s = i3(38322), a = i3(58720);
            function l(t5, e4, i4 = "px", l2 = null) {
              const c = [], d = function(t6, e5) {
                const i5 = [];
                try {
                  (0, a.$$)("img", t6.editor).forEach((n3) => {
                    const s2 = [(0, r.C)(n3, "width"), (0, r.C)(n3, "height"), n3.src];
                    (0, r.C)(n3, { width: n3.offsetWidth + e5, height: n3.offsetHeight + e5 });
                    const a2 = t6.createInside.a();
                    t6.ed.body.appendChild(a2), a2.href = n3.src, n3.src = a2.href, o3.J.safeRemove(a2), i5.push(() => {
                      var t7;
                      n3.src = null !== (t7 = s2[2]) && void 0 !== t7 ? t7 : "", (0, r.C)(n3, { width: s2[0] || null, height: s2[1] || null });
                    });
                  });
                } catch (t7) {
                  throw i5.forEach((t8) => t8()), i5.length = 0, t7;
                }
                return i5;
              }(t5, i4);
              try {
                const a2 = t5.e.fire("beforePreviewBox", e4, i4);
                if (null != a2) return a2;
                let d2 = t5.c.div("jodit__preview-box jodit-context");
                l2 && l2.appendChild(d2), (0, s.A)(d2, { position: "relative", padding: 16 });
                const u = t5.value || `<div style='position: absolute;left:50%;top:50%;transform: translateX(-50%) translateY(-50%);color:#ccc;'>${t5.i18n("Empty")}</div>`;
                if (t5.iframe) {
                  const e5 = t5.create.element("iframe");
                  (0, s.A)(e5, { minWidth: 800, minHeight: 600, border: 0 }), d2.appendChild(e5);
                  const i5 = e5.contentWindow;
                  if (i5 && (t5.e.fire("generateDocumentStructure.iframe", i5.document, t5), d2 = i5.document.body, "function" == typeof ResizeObserver)) {
                    let o4 = false;
                    const n3 = i5.document.body, r2 = new ResizeObserver(t5.async.debounce(() => {
                      r2.unobserve(n3), e5.style.height = `${n3.offsetHeight + 20}px`, t5.async.requestAnimationFrame(() => {
                        !o4 && r2.observe(n3);
                      });
                    }, 100)), s2 = () => {
                      o4 = true, r2.unobserve(n3), r2.disconnect(), t5.e.off("beforeDestruct", s2);
                    };
                    c.push(s2), t5.e.on("beforeDestruct", s2);
                  }
                } else (0, s.A)(d2, { minWidth: 1024, minHeight: 600, border: 0 });
                const h = (e5, i5) => {
                  const s2 = (0, n2.K)(i5) ? t5.c.div() : i5;
                  (0, n2.K)(i5) && (s2.innerHTML = i5);
                  for (let t6 = 0; s2.childNodes.length > t6; t6 += 1) {
                    const i6 = s2.childNodes[t6];
                    if (o3.J.isElement(i6)) {
                      const t7 = e5.ownerDocument.createElement(i6.nodeName);
                      for (let e6 = 0; i6.attributes.length > e6; e6 += 1) (0, r.C)(t7, i6.attributes[e6].nodeName, i6.attributes[e6].nodeValue);
                      0 === i6.childNodes.length || o3.J.isTag(i6, "table") ? "SCRIPT" === i6.nodeName ? i6.textContent && (t7.textContent = i6.textContent) : i6.innerHTML && (t7.innerHTML = i6.innerHTML) : h(t7, i6);
                      try {
                        e5.appendChild(t7);
                      } catch (t8) {
                      }
                    } else try {
                      e5.appendChild(i6.cloneNode(true));
                    } catch (t7) {
                    }
                  }
                };
                return h(d2, u), t5.e.fire("afterPreviewBox", d2), [d2, () => {
                  c.forEach((t6) => t6());
                }];
              } finally {
                d.forEach((t6) => t6());
              }
            }
          }, 44210: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { c: function() {
              return a;
            } });
            var o3 = i3(17352), n2 = i3(69052), r = i3(16841);
            const s = {};
            function a(t5) {
              var e4, i4;
              if (!(t5 in s)) {
                const i5 = document.createElement("iframe");
                try {
                  if (i5.src = "about:blank", document.body.appendChild(i5), !i5.contentWindow) return null;
                  const e5 = (0, r.J)(t5, i5.contentWindow), o4 = (0, r.J)(t5.split(".").slice(0, -1).join("."), i5.contentWindow);
                  (0, n2.T)(e5) && (s[t5] = e5.bind(o4));
                } catch (t6) {
                  if (!o3.IS_PROD) throw t6;
                } finally {
                  null === (e4 = i5.parentNode) || void 0 === e4 || e4.removeChild(i5);
                }
              }
              return null !== (i4 = s[t5]) && void 0 !== i4 ? i4 : null;
            }
          }, 641: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return r;
            }, l: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              let o4 = t5.getBoundingClientRect(), n3 = t5;
              const r2 = o4.top, s = o4.height;
              for (; n3 && n3 !== e4 && n3.parentNode; ) {
                if (n3 = n3.parentNode, o4 = n3.getBoundingClientRect(), r2 > o4.bottom) return false;
                if (o4.top >= r2 + s) return false;
              }
              return (i4.documentElement && i4.documentElement.clientHeight || 0) >= r2;
            }
            function r(t5, e4, i4) {
              o3.J.isHTMLElement(t5) && !n2(t5, e4, i4) && (e4.clientHeight !== e4.scrollHeight && (e4.scrollTop = t5.offsetTop), n2(t5, e4, i4) || t5.scrollIntoView());
            }
          }, 58720: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $$: function() {
              return u;
            }, DY: function() {
              return p;
            }, bE: function() {
              return f;
            }, fz: function() {
              return h;
            }, tI: function() {
              return g;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(42448), s = i3(98253), a = i3(83260), l = i3(97369);
            let c = 1;
            const d = () => (c++, c);
            function u(t5, e4) {
              let i4;
              if (o3.IS_ES_NEXT || !/:scope/.test(t5) || !o3.IS_IE || e4 && e4.nodeType === Node.DOCUMENT_NODE) i4 = e4.querySelectorAll(t5);
              else {
                const o4 = e4.id, n3 = o4 || "_selector_id_" + String(Math.random()).slice(2) + d();
                t5 = t5.replace(/:scope/g, "#" + n3), !o4 && e4.setAttribute("id", n3), i4 = e4.parentNode.querySelectorAll(t5), o4 || e4.removeAttribute("id");
              }
              return [].slice.call(i4);
            }
            const h = (t5, e4) => {
              if (!t5 || t5.nodeType !== Node.ELEMENT_NODE) return "";
              if (!t5.parentNode || e4 === t5) return "";
              if (t5.id) return "//*[@id='" + t5.id + "']";
              const i4 = [].filter.call(t5.parentNode.childNodes, (e5) => e5.nodeName === t5.nodeName);
              return h(t5.parentNode, e4) + "/" + t5.nodeName.toLowerCase() + (i4.length > 1 ? "[" + ((0, r.$)(i4).indexOf(t5) + 1) + "]" : "");
            }, p = (t5) => ("container" in t5 && (t5 = t5.container), u("[ref],[data-ref]", t5).reduce((t6, e4) => {
              const i4 = (0, l.attr)(e4, "-ref");
              return i4 && (0, s.K)(i4) && (t6[(0, a.x)(i4)] = e4, t6[i4] = e4), t6;
            }, {})), f = (t5) => {
              if (!n2.J.isElement(t5)) return null;
              const e4 = [];
              let i4 = t5;
              for (; i4 && i4.nodeType === Node.ELEMENT_NODE; ) {
                let t6 = i4.nodeName.toLowerCase();
                if (i4.id) {
                  t6 += "#" + i4.id, e4.unshift(t6);
                  break;
                }
                {
                  let e5 = i4, o4 = 1;
                  do {
                    e5 = e5.previousElementSibling, e5 && e5.nodeName.toLowerCase() === t6 && o4++;
                  } while (e5);
                  t6 += ":nth-of-type(" + o4 + ")";
                }
                e4.unshift(t6), i4 = i4.parentNode;
              }
              return e4.join(" > ");
            };
            function g(t5, e4) {
              let i4 = t5;
              if ((0, s.K)(t5)) try {
                i4 = e4.querySelector(t5);
              } catch (e5) {
                throw (0, l.error)('String "' + t5 + '" should be valid HTML selector');
              }
              if (!i4 || "object" != typeof i4 || !n2.J.isElement(i4) || !i4.cloneNode) throw (0, l.error)('Element "' + t5 + '" should be string or HTMLElement instance');
              return i4;
            }
          }, 40677: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { h: function() {
              return a;
            } });
            var o3 = i3(37923), n2 = i3(12461), r = i3(25376), s = i3(98253);
            function a(t5, e4, i4) {
              if (!(0, s.K)(t5) || !t5.length) return;
              const a2 = t5.split(".");
              let l = i4, c = a2[0];
              for (let t6 = 0; a2.length - 1 > t6; t6 += 1) c = a2[t6], (0, o3.c)(l[c]) || (0, r.Q)(l[c]) || (l[c] = (0, n2.k)(a2[t6 + 1]) ? [] : {}), l = l[c];
              l && (l[a2[a2.length - 1]] = e4);
            }
          }, 70069: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { d: function() {
              return o3;
            } });
            class o3 {
              constructor(t5) {
                this.limit = t5, this.stack = [];
              }
              push(t5) {
                return this.stack.push(t5), this.stack.length > this.limit && this.stack.shift(), this;
              }
              pop() {
                return this.stack.pop();
              }
              find(t5) {
                return this.stack.find(t5);
              }
            }
          }, 84976: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { HP: function() {
              return u;
            }, T1: function() {
              return a;
            }, b_: function() {
              return l;
            }, my: function() {
              return p;
            }, o_: function() {
              return c;
            }, qN: function() {
              return h;
            }, yt: function() {
              return d;
            } });
            var o3 = i3(92039), n2 = i3(35642), r = i3(26150), s = i3(72197);
            function a(t5, ...e4) {
              return t5(...e4);
            }
            function l(t5, e4) {
              (0, r.C)(e4, "data-editor_id", t5.id), !e4.component && Object.defineProperty(e4, "jodit", { value: t5 });
            }
            function c(t5, e4) {
              return (0, o3.y)(t5) ? t5.then((t6) => t6, () => null).finally(e4) : null == e4 ? void 0 : e4();
            }
            const d = (t5, e4) => e4.async.promise((i4, o4) => {
              const n3 = new Image(), r2 = () => {
                e4.e.off(n3), null == o4 || o4();
              }, s2 = () => {
                e4.e.off(n3), i4(n3);
              };
              e4.e.one(n3, "load", s2).one(n3, "error", r2).one(n3, "abort", r2), n3.src = t5, n3.complete && s2();
            }), u = (t5, e4 = true) => {
              if (e4) return Object.keys(t5);
              const i4 = [];
              for (const e5 in t5) i4.push(e5);
              return i4;
            }, h = (t5, e4, { control: i4 }, o4) => {
              var r2;
              const a2 = `button${i4.command}`;
              let l2 = null !== (r2 = i4.args && i4.args[0]) && void 0 !== r2 ? r2 : (0, s.m)(t5, a2);
              if ((0, n2.R)(l2)) return false;
              (0, s.m)(t5, a2, l2), o4 && (l2 = o4(l2)), t5.execCommand(i4.command, false, null != l2 ? l2 : void 0);
            }, p = (t5) => {
              if (t5.clipboardData) return t5.clipboardData;
              try {
                return t5.dataTransfer || new DataTransfer();
              } catch (t6) {
                return null;
              }
            };
          }, 58269: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { T: function() {
              return a;
            } });
            var o3 = i3(17352), n2 = i3(56298), r = i3(9823), s = i3(32291);
            function a(t5, e4, i4, a2, l, c) {
              if ((0, r.Gp)(a2)) try {
                a2.init(t5);
              } catch (t6) {
                if (!o3.IS_PROD) throw t6;
              }
              l.set(e4, a2), c.delete(e4), a2.hasStyle && (0, s.M)(t5, e4).catch((t6) => {
              }), a2.styles && ((0, n2.My)(t5, e4, "style").innerHTML = a2.styles);
            }
          }, 32291: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return l;
            }, o: function() {
              return d;
            } });
            var o3 = i3(17352), n2 = i3(449), r = i3(27301), s = i3(96134);
            const a = /* @__PURE__ */ new Set();
            async function l(t5, e4) {
              const i4 = c(t5, e4, false);
              if (!a.has(i4)) return a.add(i4), (0, r.S5)(t5, i4);
            }
            function c(t5, e4, i4) {
              return e4 = (0, n2.k)(e4), t5.basePath + "plugins/" + e4 + "/" + e4 + "." + (i4 ? "js" : "css");
            }
            function d(t5, e4, i4, n3) {
              try {
                const o4 = i4.filter((e5) => !t5.has((0, s.P)(e5.name)));
                o4.length && function(t6, e5, i5) {
                  e5.map((e6) => {
                    const o5 = e6.url || c(t6, e6.name, true);
                    return (0, r.w4)(t6, o5).then(i5).catch(() => null);
                  });
                }(e4, o4, n3);
              } catch (t6) {
                if (!o3.IS_PROD) throw t6;
              }
            }
          }, 58157: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(69052);
            function r(t5, e4) {
              try {
                try {
                  return (0, n2.T)(e4) ? new e4(t5) : e4;
                } catch (i4) {
                  if ((0, n2.T)(e4) && !e4.prototype) return e4(t5);
                }
              } catch (t6) {
                if (!o3.IS_PROD) throw t6;
              }
              return null;
            }
          }, 96134: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { P: function() {
              return n2;
            } });
            var o3 = i3(449);
            function n2(t5) {
              return (0, o3.k)(t5).toLowerCase();
            }
          }, 71005: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return o3.k;
            } });
            var o3 = i3(29866);
            i3(77402);
          }, 77402: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return d;
            } }), i3(17352);
            var o3 = i3(56298), n2 = i3(32709), r = i3(9823), s = i3(58269), a = i3(32291), l = i3(58157), c = i3(96134);
            class d {
              constructor() {
                this.__items = /* @__PURE__ */ new Map();
              }
              add(t5, e4) {
                this.__items.set((0, c.P)(t5), e4), o3.RR.fire(`plugin:${t5}:ready`);
              }
              get(t5) {
                return this.__items.get((0, c.P)(t5));
              }
              remove(t5) {
                this.__items.delete((0, c.P)(t5));
              }
              __getFullPluginsList(t5) {
                const e4 = [];
                return this.__items.forEach((i4, o4) => {
                  t5 && !t5.has(o4) || e4.push([o4, i4]);
                }), e4;
              }
              __init(t5) {
                const { extraList: e4, disableList: i4, filter: o4 } = function(t6) {
                  return { extraList: t6.o.extraPlugins.map((t7) => (0, r.Kg)(t7) ? { name: t7 } : t7), disableList: new Set((0, n2.uM)(t6.o.disablePlugins).map(c.P)), filter: t6.o.safeMode ? new Set(t6.o.safePluginsList) : null };
                }(t5), d2 = /* @__PURE__ */ new Map(), u = {}, h = /* @__PURE__ */ new Set();
                t5.__plugins = u;
                const p = () => {
                  if (t5.isInDestruct) return;
                  let e5 = false;
                  this.__getFullPluginsList(o4).forEach(([o5, n3]) => {
                    if (i4.has(o5) || d2.has(o5)) return;
                    const a2 = null == n3 ? void 0 : n3.requires;
                    if (a2 && (0, r.cy)(a2) && a2.length) {
                      if (a2.some((t6) => i4.has(t6))) return;
                      if (!a2.every((t6) => d2.has(t6))) return void h.add(o5);
                    }
                    e5 = true;
                    const c2 = (0, l.k)(t5, n3);
                    if (!c2) return d2.set(o5, null), void h.delete(o5);
                    (0, s.T)(t5, o5, n3, c2, d2, h), u[o5] = c2;
                  }), e5 && (t5.e.fire("updatePlugins"), p());
                };
                e4 && e4.length && (0, a.o)(this.__items, t5, e4, p), p(), function(t6, e5) {
                  t6.e.on("beforeDestruct", () => {
                    Object.keys(e5).forEach((i5) => {
                      const o5 = e5[i5];
                      (0, r.pV)(o5) && o5.destruct(t6), delete e5[i5];
                    }), delete t6.__plugins;
                  });
                }(t5, u);
              }
              wait(t5) {
                return new Promise((e4) => {
                  if (this.get(t5)) return e4();
                  const i4 = () => {
                    e4(), o3.RR.off(`plugin:${t5}:ready`, i4);
                  };
                  o3.RR.on(`plugin:${t5}:ready`, i4);
                });
              }
            }
          }, 29866: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(77753), r = i3(22664), s = i3(83044);
            class a extends n2.vG {
              className() {
                return "Plugin";
              }
              constructor(t5) {
                super(t5), this.buttons = [], this.hasStyle = false, this.__inited = false, t5.e.on("afterPluginSystemInit", this.__afterPluginSystemInit).on("afterInit", this.__afterInit).on("beforeDestruct", this.__beforeDestruct);
              }
              __afterPluginSystemInit() {
                const { j: t5, buttons: e4 } = this;
                e4 && (0, s.y)(t5) && e4.forEach((e5) => {
                  t5.registerButton(e5);
                });
              }
              __afterInit() {
                this.__inited = true, this.setStatus(n2.f.ready), this.afterInit(this.jodit);
              }
              init(t5) {
                this.jodit.isReady && (this.afterInit(this.jodit), this.__afterPluginSystemInit(), this.jodit.e.fire("rebuildToolbar"));
              }
              __beforeDestruct() {
                var t5;
                if (this.isInDestruct) return;
                const { j: e4 } = this;
                if (e4.e.off("afterPluginSystemInit", this.__afterPluginSystemInit).off("afterInit", this.__afterInit).off("beforeDestruct", this.destruct), this.setStatus(n2.f.beforeDestruct), !this.__inited) return super.destruct();
                (0, s.y)(e4) && (null === (t5 = this.buttons) || void 0 === t5 || t5.forEach((t6) => {
                  null == e4 || e4.unregisterButton(t6);
                })), this.beforeDestruct(this.j), super.destruct();
              }
            }
            a.requires = [], (0, o3.Cg)([r.autobind], a.prototype, "__afterPluginSystemInit", null), (0, o3.Cg)([r.autobind], a.prototype, "__afterInit", null), (0, o3.Cg)([r.autobind], a.prototype, "__beforeDestruct", null);
          }, 49853: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { d: function() {
              return d;
            } });
            var o3 = i3(31635), n2 = i3(64890), r = i3(26318), s = i3(65147), a = i3(50156), l = (i3(27337), i3(91672)), c = i3(36115);
            class d {
              className() {
                return "Ajax";
              }
              constructor(t5, e4 = c.T.prototype.defaultAjaxOptions) {
                this.__async = new n2.j(), this.__isFulfilled = false, this.__activated = false, this.__isDestructed = false, this.options = (0, s.ConfigProto)(t5 || {}, e4), this.xhr = this.o.xhr ? this.o.xhr() : new XMLHttpRequest();
              }
              __buildParams(t5, e4) {
                return (0, s.isPlainObject)(t5) && this.options.contentType && this.options.contentType.includes("application/json") ? JSON.stringify(t5) : (0, s.isFunction)(this.o.queryBuild) ? this.o.queryBuild.call(this, t5, e4) : (0, s.isString)(t5) || t5 instanceof window.FormData || "object" == typeof t5 && null != t5 && (0, s.isFunction)(t5.append) ? t5 : (0, s.buildQuery)(t5);
              }
              get o() {
                return this.options;
              }
              abort() {
                if (this.__isFulfilled) return this;
                try {
                  this.__isFulfilled = true, this.xhr.abort();
                } catch (t5) {
                }
                return this;
              }
              send() {
                this.__activated = true;
                const { xhr: t5, o: e4 } = this, i4 = this.prepareRequest();
                return this.__async.promise(async (o4, n3) => {
                  var r2;
                  const c2 = () => {
                    this.__isFulfilled = true, n3(a.FI("Connection error"));
                  }, d2 = () => {
                    this.__isFulfilled = true, o4(new l.Y(i4, t5.status, t5.statusText, t5.responseType ? t5.response : t5.responseText));
                  };
                  t5.onload = d2, t5.onabort = () => {
                    this.__isFulfilled = true, n3(a.h2("Abort connection"));
                  }, t5.onerror = c2, t5.ontimeout = c2, e4.responseType && (t5.responseType = e4.responseType), t5.onprogress = (t6) => {
                    var e5, i5;
                    let o5 = 0;
                    t6.lengthComputable && (o5 = t6.loaded / t6.total * 100), null === (i5 = (e5 = this.options).onProgress) || void 0 === i5 || i5.call(e5, o5);
                  }, t5.onreadystatechange = () => {
                    var i5, o5;
                    null === (o5 = (i5 = this.options).onProgress) || void 0 === o5 || o5.call(i5, 10), t5.readyState === XMLHttpRequest.DONE && (e4.successStatuses.includes(t5.status) ? d2() : t5.statusText && (this.__isFulfilled = true, n3(a.FI(t5.statusText))));
                  }, t5.withCredentials = null !== (r2 = e4.withCredentials) && void 0 !== r2 && r2;
                  const { url: u, data: h, method: p } = i4;
                  t5.open(p, u, true), e4.contentType && t5.setRequestHeader && t5.setRequestHeader("Content-type", e4.contentType);
                  let { headers: f } = e4;
                  (0, s.isFunction)(f) && (f = await f.call(this)), f && t5.setRequestHeader && Object.keys(f).forEach((e5) => {
                    t5.setRequestHeader(e5, f[e5]);
                  }), this.__async.setTimeout(() => {
                    t5.send(h ? this.__buildParams(h) : void 0);
                  }, 0);
                });
              }
              prepareRequest() {
                if (!this.o.url) throw a.z3("Need URL for AJAX request");
                let t5 = this.o.url;
                const e4 = this.o.data, i4 = (this.o.method || "get").toLowerCase();
                if ("get" === i4 && e4 && (0, s.isPlainObject)(e4)) {
                  const i5 = t5.indexOf("?");
                  if (-1 !== i5) {
                    const o5 = (0, s.parseQuery)(t5);
                    t5 = t5.substring(0, i5) + "?" + (0, s.buildQuery)({ ...o5, ...e4 });
                  } else t5 += "?" + (0, s.buildQuery)(this.o.data);
                }
                const o4 = { url: t5, method: i4, data: e4 };
                return d.log.splice(100), d.log.push(o4), o4;
              }
              destruct() {
                this.__isDestructed || (this.__isDestructed = true, this.__activated && !this.__isFulfilled && (this.abort(), this.__isFulfilled = true), this.__async.destruct());
              }
            }
            d.log = [], (0, o3.Cg)([r.Ay], d.prototype, "destruct", null);
          }, 27337: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.defaultAjaxOptions = { successStatuses: [200, 201, 202], method: "GET", url: "", data: null, contentType: "application/x-www-form-urlencoded; charset=UTF-8", headers: { "X-REQUESTED-WITH": "XMLHttpRequest" }, withCredentials: false, xhr: () => new XMLHttpRequest() };
          }, 53883: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return n2.Y;
            }, d: function() {
              return o3.d;
            } });
            var o3 = i3(49853), n2 = i3(91672);
          }, 91672: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return o3;
            } });
            class o3 {
              get url() {
                return this.request.url;
              }
              constructor(t5, e4, i4, o4) {
                this.request = t5, this.status = e4, this.statusText = i4, this.body = o4;
              }
              async json() {
                return JSON.parse(this.body);
              }
              text() {
                return Promise.resolve(this.body);
              }
              async blob() {
                return this.body;
              }
            }
          }, 46602: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { W: function() {
              return o3.W;
            } });
            var o3 = i3(5298);
            i3(83541);
          }, 5298: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { W: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5, e4, i4) {
              let r2 = n2.J.findSibling(e4, i4), s = n2.J.findSibling(e4, !i4);
              for (; n2.J.isElement(r2) && !n2.J.isTag(r2, o3.INSEPARABLE_TAGS) && n2.J.isContentEditable(r2, t5.editor) && (!s || !n2.J.closest(e4, n2.J.isElement, t5.editor)); ) i4 || !r2.firstChild ? r2.appendChild(e4) : n2.J.before(r2.firstChild, e4), r2 = n2.J.sibling(e4, i4), s = n2.J.sibling(e4, !i4);
            }
          }, 83541: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { G: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              let n3 = t5;
              for (; n3 && n3 !== i4; ) {
                if (o3.J.findSibling(n3, e4)) return;
                if (o3.J.isBlock(n3.parentElement)) break;
                n3 = n3.parentElement, n3 && n3 !== i4 && (e4 ? o3.J.before(n3, t5) : o3.J.after(n3, t5));
              }
            }
          }, 87332: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Ag: function() {
              return n2.Ag;
            }, DI: function() {
              return n2.DI;
            }, LN: function() {
              return o3.L;
            }, OJ: function() {
              return n2.OJ;
            }, Zk: function() {
              return n2.Zk;
            }, dj: function() {
              return n2.dj;
            }, xk: function() {
              return n2.xk;
            } });
            var o3 = i3(84602), n2 = i3(8757);
          }, 84602: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { L: function() {
              return u;
            } });
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(65147), l = i3(9823), c = (i3(28712), i3(83541)), d = i3(8757);
            class u {
              constructor(t5) {
                this.jodit = t5, t5.e.on("removeMarkers", () => {
                  this.removeMarkers();
                });
              }
              get j() {
                return this.jodit;
              }
              errorNode(t5) {
                if (!s.J.isNode(t5)) throw (0, a.error)("Parameter node must be instance of Node");
              }
              get area() {
                return this.j.editor;
              }
              get win() {
                return this.j.ew;
              }
              get doc() {
                return this.j.ed;
              }
              get sel() {
                return this.j.o.shadowRoot && (0, l.Tn)(this.j.o.shadowRoot.getSelection) ? this.j.o.shadowRoot.getSelection() : this.win.getSelection();
              }
              get range() {
                const t5 = this.sel;
                return t5 && t5.rangeCount ? t5.getRangeAt(0) : this.createRange();
              }
              get isInsideArea() {
                const { sel: t5 } = this, e4 = (null == t5 ? void 0 : t5.rangeCount) ? t5.getRangeAt(0) : null;
                return !(!e4 || !s.J.isOrContains(this.area, e4.startContainer));
              }
              createRange(t5 = false) {
                const e4 = this.doc.createRange();
                return t5 && this.selectRange(e4), e4;
              }
              remove() {
                const t5 = this.sel, e4 = this.current();
                if (t5 && e4) for (let e5 = 0; t5.rangeCount > e5; e5 += 1) t5.getRangeAt(e5).deleteContents(), t5.getRangeAt(e5).collapse(true);
              }
              clear() {
                var t5, e4;
                (null === (t5 = this.sel) || void 0 === t5 ? void 0 : t5.rangeCount) && (null === (e4 = this.sel) || void 0 === e4 || e4.removeAllRanges());
              }
              removeNode(t5) {
                if (!s.J.isOrContains(this.j.editor, t5, true)) throw (0, a.error)("Selection.removeNode can remove only editor's children");
                s.J.safeRemove(t5), this.j.e.fire("afterRemoveNode", t5);
              }
              insertCursorAtPoint(t5, e4) {
                this.removeMarkers();
                try {
                  const i4 = this.createRange();
                  return (() => {
                    if (this.doc.caretPositionFromPoint) {
                      const o4 = this.doc.caretPositionFromPoint(t5, e4);
                      if (o4) return void i4.setStart(o4.offsetNode, o4.offset);
                    }
                    if (this.doc.caretRangeFromPoint) {
                      const o4 = this.doc.caretRangeFromPoint(t5, e4);
                      i4.setStart(o4.startContainer, o4.startOffset);
                    }
                  })(), i4.collapse(true), this.selectRange(i4), true;
                } catch (t6) {
                }
                return false;
              }
              get hasMarkers() {
                return Boolean(this.markers.length);
              }
              get markers() {
                return (0, a.$$)("span[data-" + n2.MARKER_CLASS + "]", this.area);
              }
              removeMarkers() {
                s.J.safeRemove.apply(null, this.markers);
              }
              marker(t5 = false, e4) {
                let i4 = null;
                e4 && (i4 = e4.cloneRange(), i4.collapse(t5));
                const o4 = this.j.createInside.span();
                return o4.id = n2.MARKER_CLASS + "_" + Number(/* @__PURE__ */ new Date()) + "_" + String(Math.random()).slice(2), o4.style.lineHeight = "0", o4.style.display = "none", s.J.markTemporary(o4), (0, a.attr)(o4, "data-" + n2.MARKER_CLASS, t5 ? "start" : "end"), o4.appendChild(this.j.createInside.text(n2.INVISIBLE_SPACE)), i4 && s.J.isOrContains(this.area, t5 ? i4.startContainer : i4.endContainer) && i4.insertNode(o4), o4;
              }
              restore() {
                let t5 = false;
                const e4 = (t6) => `span[data-${n2.MARKER_CLASS}=${t6 ? "start" : "end"}]`, i4 = this.area.querySelector(e4(true)), o4 = this.area.querySelector(e4(false));
                if (i4) {
                  if (t5 = this.createRange(), o4) t5.setStartAfter(i4), s.J.safeRemove(i4), t5.setEndBefore(o4), s.J.safeRemove(o4);
                  else {
                    const e5 = i4.previousSibling;
                    s.J.isText(e5) ? t5.setStart(e5, e5.nodeValue ? e5.nodeValue.length : 0) : t5.setStartBefore(i4), s.J.safeRemove(i4), t5.collapse(true);
                  }
                  t5 && this.selectRange(t5);
                }
              }
              fakes() {
                const t5 = this.sel;
                if (!t5 || !t5.rangeCount) return [];
                const e4 = t5.getRangeAt(0), i4 = e4.cloneRange();
                i4.collapse(true);
                const o4 = this.j.createInside.fake();
                s.J.safeInsertNode(i4, o4), e4.setStartBefore(o4);
                const n3 = [o4];
                if (!e4.collapsed) {
                  const t6 = e4.cloneRange();
                  t6.collapse(false);
                  const i5 = this.j.createInside.fake();
                  s.J.safeInsertNode(t6, i5), e4.setEndAfter(i5), n3.push(i5);
                }
                return this.selectRange(e4), n3;
              }
              restoreFakes(t5) {
                var e4, i4, o4, n3;
                const r2 = t5.filter((t6) => t6.isConnected);
                if (!r2.length) return;
                const [a2, l2] = r2, c2 = this.createRange();
                c2.setStartAfter(a2), l2 && c2.setEndBefore(l2), this.selectRange(c2), (null === (e4 = a2.parentNode) || void 0 === e4 ? void 0 : e4.firstChild) !== (null === (i4 = a2.parentNode) || void 0 === i4 ? void 0 : i4.lastChild) && s.J.safeRemove(a2), (null === (o4 = null == l2 ? void 0 : l2.parentNode) || void 0 === o4 ? void 0 : o4.firstChild) !== (null === (n3 = null == l2 ? void 0 : l2.parentNode) || void 0 === n3 ? void 0 : n3.lastChild) && s.J.safeRemove(l2);
              }
              save(t5 = false) {
                if (this.hasMarkers) return [];
                const e4 = this.sel;
                if (!e4 || !e4.rangeCount) return [];
                const i4 = [], o4 = e4.rangeCount, n3 = [];
                for (let t6 = 0; o4 > t6; t6 += 1) if (n3[t6] = e4.getRangeAt(t6), n3[t6].collapsed) {
                  const e5 = this.marker(true, n3[t6]);
                  i4[t6] = { startId: e5.id, collapsed: true, startMarker: e5.outerHTML };
                } else {
                  const e5 = this.marker(true, n3[t6]), o5 = this.marker(false, n3[t6]);
                  i4[t6] = { startId: e5.id, endId: o5.id, collapsed: false, startMarker: e5.outerHTML, endMarker: o5.outerHTML };
                }
                if (!t5) {
                  e4.removeAllRanges();
                  for (let r2 = o4 - 1; r2 >= 0; --r2) {
                    const o5 = this.doc.getElementById(i4[r2].startId);
                    if (o5) {
                      if (i4[r2].collapsed) n3[r2].setStartAfter(o5), n3[r2].collapse(true);
                      else if (n3[r2].setStartBefore(o5), i4[r2].endId) {
                        const t6 = this.doc.getElementById(i4[r2].endId);
                        t6 && n3[r2].setEndAfter(t6);
                      }
                      try {
                        e4.addRange(n3[r2].cloneRange());
                      } catch (t6) {
                      }
                    }
                  }
                }
                return i4;
              }
              focus(t5 = { preventScroll: true }) {
                var e4, i4;
                if (!this.isFocused()) {
                  const o4 = (0, a.getScrollParent)(this.j.container), n3 = null == o4 ? void 0 : o4.scrollTop;
                  this.j.iframe && "complete" === this.doc.readyState && this.j.iframe.focus(t5), this.win.focus(), this.area.focus(t5), n3 && (null == o4 ? void 0 : o4.scrollTo) && o4.scrollTo(0, n3);
                  const r2 = this.sel, l2 = (null == r2 ? void 0 : r2.rangeCount) ? null == r2 ? void 0 : r2.getRangeAt(0) : null;
                  if (!l2 || !s.J.isOrContains(this.area, l2.startContainer)) {
                    const t6 = this.createRange();
                    t6.setStart(this.area, 0), t6.collapse(true), this.selectRange(t6, false);
                  }
                  return this.j.editorIsActive || null === (i4 = null === (e4 = this.j) || void 0 === e4 ? void 0 : e4.events) || void 0 === i4 || i4.fire("focus"), true;
                }
                return false;
              }
              isCollapsed() {
                const t5 = this.sel;
                for (let e4 = 0; t5 && t5.rangeCount > e4; e4 += 1) if (!t5.getRangeAt(e4).collapsed) return false;
                return true;
              }
              isFocused() {
                return this.doc.hasFocus && this.doc.hasFocus() && this.area === this.doc.activeElement;
              }
              current(t5 = true) {
                if (this.j.getRealMode() === n2.MODE_WYSIWYG) {
                  const e4 = this.sel;
                  if (!e4 || 0 === e4.rangeCount) return null;
                  const i4 = e4.getRangeAt(0);
                  let o4 = i4.startContainer, n3 = false;
                  const r2 = (t6) => n3 ? t6.lastChild : t6.firstChild;
                  if (s.J.isTag(o4, "br") && e4.isCollapsed) return o4;
                  if (!s.J.isText(o4)) {
                    if (o4 = i4.startContainer.childNodes[i4.startOffset], o4 || (o4 = i4.startContainer.childNodes[i4.startOffset - 1], n3 = true), o4 && e4.isCollapsed && !s.J.isText(o4)) {
                      if (!n3 && s.J.isText(o4.previousSibling)) o4 = o4.previousSibling;
                      else if (t5) {
                        let t6 = r2(o4);
                        for (; t6; ) {
                          if (t6 && s.J.isText(t6)) {
                            o4 = t6;
                            break;
                          }
                          t6 = r2(t6);
                        }
                      }
                    }
                    if (o4 && !e4.isCollapsed && !s.J.isText(o4)) {
                      let t6 = o4, e5 = o4;
                      do {
                        t6 = t6.firstChild, e5 = e5.lastChild;
                      } while (t6 && e5 && !s.J.isText(t6));
                      t6 === e5 && t6 && s.J.isText(t6) && (o4 = t6);
                    }
                  }
                  if (o4 && s.J.isOrContains(this.area, o4)) return o4;
                }
                return null;
              }
              insertNode(t5, e4 = true, i4 = true) {
                this.errorNode(t5);
                const o4 = s.J.isFragment(t5) ? t5.lastChild : t5;
                this.j.e.fire("safeHTML", t5), !this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore());
                const n3 = this.sel;
                this.j.history.snapshot.transaction(() => {
                  if (this.isCollapsed() || this.j.execCommand("Delete"), this.j.e.fire("beforeInsertNode", t5), n3 && n3.rangeCount) {
                    const e5 = n3.getRangeAt(0);
                    s.J.isOrContains(this.area, e5.commonAncestorContainer) ? s.J.safeInsertNode(e5, t5) : this.area.appendChild(t5);
                  } else this.area.appendChild(t5);
                  const i5 = (t6) => {
                    if (s.J.isBlock(t6)) {
                      const e5 = t6.lastChild;
                      if (e5) return i5(e5);
                    }
                    this.setCursorAfter(t6);
                  };
                  e4 && (s.J.isFragment(t5) ? o4 && i5(o4) : i5(t5)), this.j.o.scrollToPastedContent && (0, a.scrollIntoViewIfNeeded)(null != o4 ? o4 : t5, this.j.editor, this.doc);
                }), i4 && this.j.events && this.j.__imdSynchronizeValues(), this.j.events && this.j.e.fire("afterInsertNode", s.J.isFragment(t5) ? o4 : t5);
              }
              insertHTML(t5, e4 = true) {
                if ("" === t5) return;
                const i4 = this.j.createInside.div(), o4 = this.j.createInside.fragment();
                let n3;
                if (!this.isFocused() && this.j.isEditorMode() && (this.focus(), this.restore()), s.J.isNode(t5) ? i4.appendChild(t5) : i4.innerHTML = t5.toString(), (this.j.isEditorMode() || false !== this.j.e.fire("insertHTML", i4.innerHTML)) && (n3 = i4.lastChild, n3)) {
                  for (; i4.firstChild; ) n3 = i4.firstChild, o4.appendChild(i4.firstChild);
                  this.insertNode(o4, e4, false), this.j.__imdSynchronizeValues();
                }
              }
              insertImage(t5, e4 = null, i4 = null) {
                const o4 = (0, l.Kg)(t5) ? this.j.createInside.element("img") : t5;
                if ((0, l.Kg)(t5) && o4.setAttribute("src", t5), null != i4) {
                  let t6 = i4.toString();
                  t6 && "auto" !== t6 && 0 > String(t6).indexOf("px") && 0 > String(t6).indexOf("%") && (t6 += "px"), (0, a.call)(this.j.o.resizer.forImageChangeAttributes ? a.attr : a.css, o4, "width", t6);
                }
                e4 && "object" == typeof e4 && (0, a.css)(o4, e4);
                const n3 = () => {
                  (o4.offsetHeight > o4.naturalHeight || o4.offsetWidth > o4.naturalWidth) && (o4.style.width = "", o4.style.height = ""), o4.removeEventListener("load", n3);
                };
                this.j.e.on(o4, "load", n3), o4.complete && n3(), this.insertNode(o4), this.j.e.fire("afterInsertImage", o4);
              }
              eachSelection(t5) {
                var e4;
                const i4 = this.sel;
                if (i4 && i4.rangeCount) {
                  const o4 = i4.getRangeAt(0);
                  let r2 = o4.commonAncestorContainer;
                  s.J.isHTMLElement(r2) || (r2 = r2.parentElement);
                  const c2 = [], d2 = o4.startOffset, u2 = r2.childNodes.length;
                  let h = o4.startContainer === this.area ? r2.childNodes[u2 > d2 ? d2 : u2 - 1] : o4.startContainer, p = o4.endContainer === this.area ? r2.childNodes[o4.endOffset - 1] : o4.endContainer;
                  s.J.isText(h) && h === o4.startContainer && o4.startOffset === (null === (e4 = h.nodeValue) || void 0 === e4 ? void 0 : e4.length) && h.nextSibling && (h = h.nextSibling), s.J.isText(p) && p === o4.endContainer && 0 === o4.endOffset && p.previousSibling && (p = p.previousSibling);
                  const f = (t6) => {
                    !t6 || t6 === r2 || s.J.isEmptyTextNode(t6) || (0, l.rg)(t6) || c2.push(t6);
                  };
                  f(h), h !== p && s.J.isOrContains(r2, h, true) && s.J.find(h, (t6) => (f(t6), t6 === p || t6 && t6.contains && t6.contains(p)), r2, true, false);
                  const g = (e5) => {
                    if (s.J.isOrContains(this.j.editor, e5, true)) {
                      if (e5.nodeName.match(/^(UL|OL)$/)) return (0, a.toArray)(e5.childNodes).forEach(g);
                      if (s.J.isTag(e5, "li")) if (e5.firstChild) e5 = e5.firstChild;
                      else {
                        const t6 = this.j.createInside.text(n2.INVISIBLE_SPACE);
                        e5.appendChild(t6), e5 = t6;
                      }
                      t5(e5);
                    }
                  };
                  0 === c2.length && s.J.isEmptyTextNode(h) && c2.push(h), 0 === c2.length && h.firstChild && c2.push(h.firstChild), c2.forEach(g);
                }
              }
              cursorInTheEdge(t5, e4, i4 = null) {
                var o4, r2;
                const l2 = !t5, c2 = null === (o4 = this.sel) || void 0 === o4 ? void 0 : o4.getRangeAt(0);
                if (null != i4 || (i4 = this.current(false)), !c2 || !i4 || !s.J.isOrContains(e4, i4, true)) return null;
                const d2 = t5 ? c2.startContainer : c2.endContainer, u2 = t5 ? c2.startOffset : c2.endOffset, h = (t6) => Boolean(t6 && !s.J.isTag(t6, "br") && !s.J.isEmptyTextNode(t6) && !s.J.isTemporary(t6) && !(s.J.isElement(t6) && true === this.j.e.fire("isInvisibleForCursor", t6)));
                if (s.J.isText(d2)) {
                  const e5 = (null === (r2 = d2.nodeValue) || void 0 === r2 ? void 0 : r2.length) ? d2.nodeValue : "";
                  if (l2 && e5.replace((0, n2.INVISIBLE_SPACE_REG_EXP_END)(), "").length > u2) return false;
                  const i5 = (0, n2.INVISIBLE_SPACE_REG_EXP_START)().exec(e5);
                  if (t5 && (i5 && u2 > i5[0].length || !i5 && u2 > 0)) return false;
                } else {
                  const t6 = (0, a.toArray)(d2.childNodes);
                  if (l2) {
                    if (t6.slice(u2).some(h)) return false;
                  } else if (t6.slice(0, u2).some(h)) return false;
                }
                let p = i4;
                for (; p && p !== e4; ) {
                  const e5 = s.J.sibling(p, t5);
                  if (e5) {
                    if (p = e5, p && h(p)) return false;
                  } else p = p.parentNode;
                }
                return true;
              }
              cursorOnTheLeft(t5, e4) {
                return this.cursorInTheEdge(true, t5, e4);
              }
              cursorOnTheRight(t5, e4) {
                return this.cursorInTheEdge(false, t5, e4);
              }
              setCursorAfter(t5) {
                return this.setCursorNearWith(t5, false);
              }
              setCursorBefore(t5) {
                return this.setCursorNearWith(t5, true);
              }
              setCursorNearWith(t5, e4) {
                var i4, o4;
                if (this.errorNode(t5), !s.J.up(t5, (t6) => t6 === this.area || t6 && t6.parentNode === this.area, this.area)) throw (0, a.error)("Node element must be in editor");
                const n3 = this.createRange();
                let r2 = null;
                return s.J.isText(t5) ? e4 ? n3.setStart(t5, 0) : n3.setEnd(t5, null !== (o4 = null === (i4 = t5.nodeValue) || void 0 === i4 ? void 0 : i4.length) && void 0 !== o4 ? o4 : 0) : (r2 = this.j.createInside.fake(), e4 ? n3.setStartBefore(t5) : n3.setEndAfter(t5), n3.collapse(e4), s.J.safeInsertNode(n3, r2), n3.selectNode(r2)), n3.collapse(e4), this.selectRange(n3), r2;
              }
              setCursorIn(t5, e4 = false) {
                if (this.errorNode(t5), !s.J.up(t5, (t6) => t6 === this.area || t6 && t6.parentNode === this.area, this.area)) throw (0, a.error)("Node element must be in editor");
                const i4 = this.createRange();
                let o4 = t5, r2 = t5;
                do {
                  if (s.J.isText(o4) || s.J.isTag(o4, n2.INSEPARABLE_TAGS)) break;
                  r2 = o4, o4 = e4 ? o4.firstChild : o4.lastChild;
                } while (o4);
                if (!o4) {
                  const t6 = this.j.createInside.text(n2.INVISIBLE_SPACE);
                  s.J.isTag(r2, n2.INSEPARABLE_TAGS) ? o4 = r2 : (r2.appendChild(t6), r2 = t6);
                }
                const l2 = o4 || r2;
                return s.J.isTag(l2, n2.INSEPARABLE_TAGS) ? (e4 || s.J.isTag(l2, "br") ? i4.setStartBefore(l2) : i4.setEndAfter(l2), i4.collapse(e4)) : (i4.selectNodeContents(l2), i4.collapse(e4)), this.selectRange(i4), r2;
              }
              selectRange(t5, e4 = true) {
                const i4 = this.sel;
                return e4 && !this.isFocused() && this.focus(), i4 && (i4.removeAllRanges(), i4.addRange(t5)), this.j.e.fire("changeSelection"), this;
              }
              select(t5, e4 = false) {
                if (this.errorNode(t5), !s.J.up(t5, (t6) => t6 === this.area || t6 && t6.parentNode === this.area, this.area)) throw (0, a.error)("Node element must be in editor");
                const i4 = this.createRange();
                return i4[e4 ? "selectNodeContents" : "selectNode"](t5), this.selectRange(i4);
              }
              get html() {
                const t5 = this.sel;
                if (t5 && t5.rangeCount > 0) {
                  const e4 = t5.getRangeAt(0).cloneContents(), i4 = this.j.createInside.div();
                  return i4.appendChild(e4), i4.innerHTML;
                }
                return "";
              }
              *wrapInTagGen(t5) {
                if (this.isCollapsed()) {
                  const e5 = this.jodit.createInside.element("font", n2.INVISIBLE_SPACE);
                  return this.insertNode(e5, false, false), t5 && t5[0] && e5.appendChild(t5[0]), yield e5, void s.J.unwrap(e5);
                }
                (0, a.$$)("*[style*=font-size]", this.area).forEach((t6) => {
                  (0, a.attr)(t6, "data-font-size", t6.style.fontSize.toString()), t6.style.removeProperty("font-size");
                }), this.j.nativeExecCommand("fontsize", false, "7"), (0, a.$$)("*[data-font-size]", this.area).forEach((t6) => {
                  const e5 = (0, a.attr)(t6, "data-font-size");
                  e5 && (t6.style.fontSize = e5, (0, a.attr)(t6, "data-font-size", null));
                });
                const e4 = (0, a.$$)('font[size="7"]', this.area);
                for (const t6 of e4) {
                  const { firstChild: e5, lastChild: i4 } = t6;
                  e5 && e5 === i4 && (0, l.rg)(e5) || (e5 && (0, l.rg)(e5) && s.J.before(t6, e5), i4 && (0, l.rg)(i4) && s.J.after(t6, i4), yield t6), s.J.unwrap(t6);
                }
              }
              wrapInTag(t5) {
                const e4 = [];
                for (const i4 of this.wrapInTagGen()) try {
                  if (i4.firstChild && i4.firstChild === i4.lastChild && (0, l.rg)(i4.firstChild)) continue;
                  (0, l.Tn)(t5) ? t5(i4) : e4.push(s.J.replace(i4, t5, this.j.createInside));
                } finally {
                  const t6 = i4.parentNode;
                  t6 && (s.J.unwrap(i4), s.J.isEmpty(t6) && s.J.unwrap(t6));
                }
                return e4;
              }
              commitStyle(t5) {
                new d.xk(t5).apply(this.j);
              }
              splitSelection(t5, e4) {
                if (!this.isCollapsed()) return null;
                const i4 = this.createRange(), o4 = this.range;
                i4.setStartBefore(t5);
                const r2 = this.cursorOnTheRight(t5, e4), a2 = this.cursorOnTheLeft(t5, e4), l2 = this.j.createInside.element("br"), c2 = this.j.createInside.fake(), d2 = c2.cloneNode();
                try {
                  if (r2 || a2) {
                    e4 ? s.J.before(e4, l2) : s.J.safeInsertNode(o4, l2);
                    const t6 = (t7, e5) => {
                      let i5 = e5(t7);
                      for (; i5; ) {
                        const t8 = e5(i5);
                        if (!i5 || !s.J.isTag(i5, "br") && !s.J.isEmptyTextNode(i5)) break;
                        s.J.safeRemove(i5), i5 = t8;
                      }
                    };
                    t6(l2, (t7) => t7.nextSibling), t6(l2, (t7) => t7.previousSibling), s.J.after(l2, d2), s.J.before(l2, c2), r2 ? (i4.setEndBefore(l2), o4.setEndBefore(l2)) : (i4.setEndAfter(l2), o4.setEndAfter(l2));
                  } else i4.setEnd(o4.startContainer, o4.startOffset);
                  const u2 = i4.extractContents(), h = (t6) => s.J.each(t6, (t7) => s.J.isEmptyTextNode(t7) && s.J.safeRemove(t7));
                  try {
                    if (h(u2), h(t5), t5.parentNode.insertBefore(u2, t5), !e4 && r2 && (null == l2 ? void 0 : l2.parentNode)) {
                      const t6 = this.createRange();
                      t6.setStartBefore(l2), this.selectRange(t6);
                    }
                  } catch (t6) {
                    if (!n2.IS_PROD) throw t6;
                  }
                  const p = (t6) => {
                    var e5, i5, o5;
                    (null === (e5 = null == t6 ? void 0 : t6.parentNode) || void 0 === e5 ? void 0 : e5.firstChild) === (null === (i5 = null == t6 ? void 0 : t6.parentNode) || void 0 === i5 ? void 0 : i5.lastChild) && (null === (o5 = null == t6 ? void 0 : t6.parentNode) || void 0 === o5 || o5.appendChild(l2.cloneNode()));
                  };
                  p(c2), p(d2);
                } finally {
                  s.J.safeRemove(c2), s.J.safeRemove(d2);
                }
                return t5.previousElementSibling;
              }
              expandSelection() {
                if (this.isCollapsed()) return this;
                const { range: t5 } = this, e4 = t5.cloneRange();
                if (!s.J.isOrContains(this.j.editor, t5.commonAncestorContainer, true)) return this;
                const i4 = (e5) => {
                  const i5 = this.j.createInside.fake(), o5 = t5.cloneRange();
                  return o5.collapse(e5), s.J.safeInsertNode(o5, i5), (0, c.G)(i5, e5, this.j.editor), i5;
                }, o4 = i4(true), n3 = i4(false);
                e4.setStartAfter(o4), e4.setEndBefore(n3);
                const r2 = s.J.findSibling(o4, false), l2 = s.J.findSibling(n3, true);
                if (r2 !== l2) {
                  const t6 = s.J.isElement(r2) && s.J.isOrContains(r2, n3), i5 = !t6 && s.J.isElement(l2) && s.J.isOrContains(l2, o4);
                  if (t6 || i5) {
                    let i6 = t6 ? r2 : l2, a2 = i6;
                    for (; s.J.isElement(i6); ) i6 = t6 ? i6.firstElementChild : i6.lastElementChild, i6 && s.J.isOrContains(i6, t6 ? n3 : o4) && (a2 = i6);
                    t6 ? e4.setStart(a2, 0) : e4.setEnd(a2, a2.childNodes.length);
                  }
                }
                if (this.selectRange(e4), s.J.safeRemove(o4, n3), this.isCollapsed()) throw (0, a.error)("Selection is collapsed");
                return this;
              }
            }
            (0, o3.Cg)([r.autobind], u.prototype, "createRange", null), (0, o3.Cg)([r.autobind], u.prototype, "focus", null), (0, o3.Cg)([r.autobind], u.prototype, "setCursorAfter", null), (0, o3.Cg)([r.autobind], u.prototype, "setCursorBefore", null), (0, o3.Cg)([r.autobind], u.prototype, "setCursorIn", null);
          }, 20384: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { y: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(71274), r = i3(59101), s = i3(84976);
            function a(t5, e4, i4) {
              const o4 = i4.s.createRange(), r2 = (0, n2.r)(e4.previousSibling) ? e4.previousSibling : e4;
              o4.setStartBefore(t5), o4.setEndBefore(r2), l(t5, o4, true);
              const s2 = (0, n2.r)(e4.nextSibling) ? e4.nextSibling : e4;
              o4.setStartAfter(s2), o4.setEndAfter(t5), l(t5, o4, false);
            }
            function l(t5, e4, i4) {
              const n3 = e4.extractContents();
              n3.textContent && (0, r.Bq)(n3.textContent).length || !n3.firstChild || o3.J.unwrap(n3.firstChild), t5.parentNode && (0, s.T1)(i4 ? o3.J.before : o3.J.after, t5, n3);
            }
          }, 10466: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { E: function() {
              return o3;
            } }), i3(17352), i3(28712);
            class o3 {
              setState(t5) {
                this.__previewsStates.add(t5), this.__state = t5;
              }
              getState() {
                return this.__state;
              }
              disableSilent() {
                this.silent = false;
              }
              constructor(t5, e4) {
                this.transitions = e4, this.silent = true, this.__previewsStates = /* @__PURE__ */ new Set(), this.setState(t5);
              }
              dispatch(t5, e4) {
                const i4 = this.transitions[this.getState()][t5];
                if (i4) {
                  const t6 = i4.call(this, e4);
                  return this.setState(t6.next), t6;
                }
                throw new Error(`invalid action: ${this.getState()}.${t5.toString()}`);
              }
            }
          }, 75220: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { G: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(38046), r = i3(95274);
            function s(t5, e4) {
              let { firstChild: i4 } = e4;
              for (; i4 && !(0, n2._)(i4); ) if (i4 = i4.nextSibling, !i4) return null;
              return i4 && !o3.J.next(i4, n2._, e4) && (0, r.sz)(t5, i4, false) ? i4 : null;
            }
          }, 52052: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { A: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(38046), r = i3(95274);
            function s(t5, e4, i4) {
              const { parentNode: a } = e4;
              return a === i4 || !o3.J.isHTMLElement(a) || o3.J.next(e4, n2._, a) || o3.J.prev(e4, n2._, a) ? null : t5.isElementCommit && t5.elementIsBlock && !o3.J.isBlock(a) ? s(t5, a, i4) : !(0, r.sz)(t5, a, false) || o3.J.isBlock(a) && !t5.elementIsBlock ? t5.isElementCommit && !o3.J.isBlock(a) ? s(t5, a, i4) : null : a;
            }
          }, 70592: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return l;
            }, g: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(35642), r = i3(59678), s = (i3(28712), i3(38322));
            function a(t5, e4) {
              return Boolean(!o3.J.isTag(t5, "font") && o3.J.isHTMLElement(t5) && Object.keys(e4).every((i4) => {
                const o4 = (0, s.A)(t5, i4, true);
                return "" === o4 && ("" === e4[i4] || null == e4[i4]) || !(0, n2.R)(o4) && "" !== o4 && !(0, n2.R)(e4[i4]) && (0, r.iy)(i4, e4[i4]).toString().toLowerCase() === o4.toString().toLowerCase();
              }));
            }
            function l(t5, e4) {
              return Boolean(!o3.J.isTag(t5, "font") && o3.J.isHTMLElement(t5) && Object.keys(e4).every((e5) => "" !== (0, s.A)(t5, e5, true)));
            }
            document.createElement("div").style.color = "red", document.createElement("div").style.color = "red";
          }, 97621: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $s: function() {
              return c.$s;
            }, AS: function() {
              return s.A;
            }, Dd: function() {
              return l.D;
            }, EF: function() {
              return n2.E;
            }, G6: function() {
              return r.G;
            }, LV: function() {
              return p.L;
            }, M6: function() {
              return l.M;
            }, Yx: function() {
              return u.Y;
            }, iu: function() {
              return a.i;
            }, ks: function() {
              return d.k;
            }, tm: function() {
              return h.t;
            }, yP: function() {
              return o3.y;
            } });
            var o3 = i3(20384), n2 = i3(10466), r = i3(75220), s = i3(52052), a = (i3(70592), i3(78777)), l = (i3(38046), i3(13676)), c = i3(95274), d = i3(90325), u = (i3(61001), i3(38271)), h = i3(86500), p = i3(3101);
            i3(80394);
          }, 78777: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { i: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4) {
              return Boolean(o3.J.closest(t5, ["style", "script"], e4));
            }
          }, 38046: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { _: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(71274);
            function r(t5) {
              return Boolean(t5 && !o3.J.isEmptyTextNode(t5) && !o3.J.isTemporary(t5) && !(0, n2.r)(t5));
            }
          }, 13676: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { D: function() {
              return a;
            }, M: function() {
              return s;
            } });
            var o3 = i3(95350), n2 = i3(97369), r = (i3(28712), i3(70592));
            function s(t5, e4) {
              return !t5.attributes.length && !(0, o3.E)(e4) || !(0, o3.E)(e4) || Object.keys(e4).every((i4) => "class" === i4 || "className" === i4 ? t5.classList.contains(e4[i4]) : "style" === i4 ? (0, r.g)(t5, e4[i4]) : (0, n2.attr)(t5, i4) === e4[i4]);
            }
            function a(t5, e4) {
              return t5.attributes.length === e4.attributes.length && Array.from(t5.attributes).every((t6) => e4.hasAttribute(t6.name) && e4.getAttribute(t6.name) === t6.value);
            }
          }, 95274: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $s: function() {
              return a;
            }, Wv: function() {
              return l;
            }, sz: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(70592), r = i3(38046);
            function s(t5, e4, i4, s2 = true) {
              var a2;
              if (!e4 || !(0, r._)(e4)) return false;
              const { element: l2, elementIsDefault: c, options: d } = t5;
              if (o3.J.isList(e4) && t5.elementIsList) return true;
              const u = o3.J.isTag(e4, l2);
              return !(!u || c && i4) || !(!Boolean((null === (a2 = d.attributes) || void 0 === a2 ? void 0 : a2.style) && (s2 ? (0, n2.g)(e4, d.attributes.style) : (0, n2.Y)(e4, d.attributes.style))) || t5.elementIsList) || !u && !i4 && c && o3.J.isInlineBlock(e4);
            }
            function a(t5, e4, i4) {
              return o3.J.closest(e4, (e5) => s(t5, e5, true, false), i4);
            }
            function l(t5, e4) {
              var i4, o4;
              const { element: s2, options: a2 } = t5;
              if (!e4 || !(0, r._)(e4)) return false;
              const l2 = e4.nodeName.toLowerCase() === s2, c = Boolean((null === (i4 = a2.attributes) || void 0 === i4 ? void 0 : i4.style) && (0, n2.Y)(e4, null === (o4 = a2.attributes) || void 0 === o4 ? void 0 : o4.style));
              return l2 && c;
            }
          }, 90325: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return l;
            } });
            var o3 = i3(55186), n2 = (i3(28712), i3(20384)), r = i3(38271), s = i3(8757), a = i3(61001);
            function l(t5, e4, i4, o4) {
              if (!e4) return o4;
              const n3 = e4.parentElement;
              if (!n3) return o4;
              const l2 = i4.e.fire(`${s.ar}BeforeToggleList`, o4, t5, n3);
              if (void 0 !== l2) return l2;
              const d = i4.e.fire.bind(i4.e, `${s.ar}AfterToggleList`);
              if (o4 !== s.OJ) {
                const l3 = (0, r.Y)(t5, e4.parentElement, i4, s.DI, true) === s.PL;
                if (o4 === s.dj || l3 || n3.tagName.toLowerCase() !== t5.element) {
                  const o5 = c(s.dj, n3, e4, i4, t5), r2 = (0, a.z)(t5, o5, i4);
                  return d(s.dj, r2, t5), s.dj;
                }
              }
              const u = c(s.OJ, n3, e4, i4, t5);
              return d(s.OJ, u, t5), s.OJ;
            }
            function c(t5, e4, i4, r2, a2) {
              return r2.e.fire(`${s.ar}BeforeUnwrapList`, t5, e4, a2) || ((0, n2.y)(e4, i4, r2), o3.J.unwrap(i4.parentElement), o3.J.replace(i4, r2.o.enter, r2.createInside));
            }
          }, 61001: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return s;
            } });
            var o3 = i3(71842), n2 = i3(97621), r = i3(8757);
            function s(t5, e4, i4) {
              const s2 = i4.e.fire(`${r.ar}BeforeWrapList`, r.dj, e4, t5), a = null != s2 ? s2 : o3.J.replace(e4, "li", i4.createInside), l = a.previousElementSibling, c = a.nextElementSibling;
              let d = o3.J.isTag(l, t5.element) ? l : null;
              return null != d || (d = o3.J.isTag(c, t5.element) ? c : null), o3.J.isList(d) && (0, n2.M6)(d, t5.options.attributes) || (d = i4.createInside.element(t5.element), (0, n2.Yx)(t5, d, i4, r.DI), o3.J.before(a, d)), l === d ? o3.J.append(d, a) : o3.J.prepend(d, a), o3.J.isTag(d.nextElementSibling, t5.element) && (0, n2.Dd)(d, d.nextElementSibling) && (o3.J.append(d, Array.from(d.nextElementSibling.childNodes)), o3.J.safeRemove(d.nextElementSibling)), i4.e.fire(`${r.ar}AfterWrapList`, r.Zk, d, t5), d;
            }
          }, 38271: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return p;
            } });
            var o3 = i3(55186), n2 = i3(56298), r = (i3(9823), i3(59678)), s = i3(95350), a = i3(449), l = i3(97369), c = i3(38322), d = i3(72197), u = i3(8757);
            const h = "toggleAttributes";
            function p(t5, e4, i4, p2, g = false) {
              if (!g && t5.isApplied(e4, h)) return p2;
              !g && t5.setApplied(e4, h);
              const { attributes: m } = t5.options;
              return m && (0, s.E)(m) > 0 && Object.keys(m).forEach((s2) => {
                const h2 = m[s2];
                switch (s2) {
                  case "style":
                    p2 = function(t6, e5, i5, s3, l2, h3) {
                      return Object.keys(i5).forEach((p3) => {
                        const g2 = s3.style.getPropertyValue((0, a.k)(p3)), m2 = i5[p3];
                        if ("" !== g2 || null != m2) {
                          if (function(t7, e6, i6) {
                            const r2 = t7.create.element(e6.tagName.toLowerCase());
                            r2.style.cssText = e6.style.cssText;
                            const s4 = function(t8) {
                              var e7;
                              if (void 0 !== (0, d.m)(t8, "shadowRoot")) return (0, d.m)(t8, "shadowRoot");
                              const i7 = (0, n2.My)(t8), o4 = document.createElement("iframe");
                              (0, c.A)(o4, { width: 0, height: 0, position: "absolute", border: 0 }), o4.src = "about:blank", i7.appendChild(o4);
                              const r3 = null === (e7 = o4.contentWindow) || void 0 === e7 ? void 0 : e7.document, s5 = r3 ? r3.body : t8.od.body;
                              return (0, d.m)(t8, "shadowRoot", s5), s5;
                            }(t7);
                            s4.appendChild(r2);
                            const a2 = (0, c.A)(r2, i6);
                            return o3.J.safeRemove(r2), a2;
                          }(e5, s3, p3) === (0, r.iy)(p3, m2)) {
                            if (!g2) return;
                            return !l2 && (0, c.A)(s3, p3, null), void (h3 = f(t6, s3, h3 = u.Ag));
                          }
                          h3 = u.PL, l2 || ((0, c.A)(s3, p3, m2), h3 = f(t6, s3, h3));
                        }
                      }), h3;
                    }(t5, i4, h2, e4, g, p2);
                    break;
                  case "className":
                  case "class":
                    p2 = function(t6, e5, i5, o4, n3) {
                      const r2 = t6.e.fire.bind(t6.e, `${u.ar}AfterToggleAttribute`);
                      return i5.classList.contains(e5.toString()) ? (o4 = u.Ag, n3 || (i5.classList.remove(e5), 0 === i5.classList.length && ((0, l.attr)(i5, "class", null), r2(o4, i5, "class", null)))) : (o4 = u.PL, n3 || (i5.classList.add(e5), r2(o4, i5, "class", e5))), o4;
                    }(i4, h2, e4, p2, g);
                    break;
                  default:
                    p2 = function(t6, e5, i5, o4, n3, r2) {
                      const s3 = t6.e.fire.bind(t6.e, `${u.ar}AfterToggleAttribute`);
                      return (0, l.attr)(i5, o4) === e5 ? (!n3 && (0, l.attr)(i5, o4, null), r2 = u.Ag, !n3 && s3(r2, i5, o4, e5), r2) : (r2 = u.PL, n3 || ((0, l.attr)(i5, o4, e5), s3(r2, i5, o4, e5)), r2);
                    }(i4, h2, e4, s2, g, p2);
                }
              }), p2;
            }
            function f(t5, e4, i4) {
              return (0, l.attr)(e4, "style") || ((0, l.attr)(e4, "style", null), e4.tagName.toLowerCase() === t5.defaultTag && (o3.J.unwrap(e4), i4 = u.OJ)), i4;
            }
          }, 86500: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { t: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(97369), r = i3(70592), s = i3(95274);
            function a(t5, e4) {
              var i4;
              const a2 = [], l = [];
              let c;
              const d = null === (i4 = t5.options.attributes) || void 0 === i4 ? void 0 : i4.style;
              if (e4.firstChild) {
                const i5 = o3.J.eachGen(e4);
                let u = i5.next();
                for (; !u.done; ) {
                  const e5 = u.value;
                  !(0, s.sz)(t5, e5, true) || d && !(0, r.Y)(e5, d) ? d && (0, s.Wv)(t5, e5) ? (void 0 === c && (c = false), l.push(() => {
                    (0, n2.css)(e5, Object.keys(d).reduce((t6, e6) => (t6[e6] = null, t6), {})), (0, n2.attr)(e5, "style") || (0, n2.attr)(e5, "style", null), (0, n2.attr)(e5, "style") || e5.nodeName.toLowerCase() !== t5.element || a2.push(e5);
                  })) : o3.J.isEmptyTextNode(e5) || void 0 === c && (c = false) : (void 0 === c && (c = true), a2.push(e5)), u = i5.next();
                }
              }
              return l.forEach((t6) => t6()), a2.forEach(o3.J.unwrap), Boolean(c);
            }
          }, 80394: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(71274);
            function r(t5, e4, i4) {
              const r2 = i4.editor, s = i4.createInside, a = (t6, e5 = "previousSibling") => {
                let s2 = t6, a2 = t6;
                for (; a2 && !(0, n2.r)(a2) && !o3.J.isTag(a2, i4.o.enter) && (s2 = a2, a2 = a2[e5] ? a2[e5] : a2.parentNode && !o3.J.isBlock(a2.parentNode) && a2.parentNode !== r2 ? a2.parentNode : null, !o3.J.isBlock(a2)); ) ;
                return s2;
              }, l = a(e4), c = a(e4, "nextSibling"), d = i4.s.createRange();
              d.setStartBefore(l), d.setEndAfter(c);
              const u = d.extractContents(), h = s.element(t5.element);
              return h.appendChild(u), o3.J.safeInsertNode(d, h), t5.elementIsBlock && o3.J.isEmpty(h) && !o3.J.isTag(h.firstElementChild, "br") && h.appendChild(s.element("br")), h;
            }
          }, 3101: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { L: function() {
              return a;
            } });
            var o3 = i3(71842), n2 = i3(26150), r = i3(61001), s = i3(80394);
            function a(t5, e4, i4) {
              const a2 = function(t6, e5, i5) {
                return t6.elementIsBlock ? o3.J.up(e5, (t7) => o3.J.isBlock(t7) && !o3.J.isTag(t7, l), i5.editor) || (0, s.Y)(t6, e5, i5) : ((0, n2.C)(e5, "size", null), e5);
              }(t5, e4, i4);
              return t5.elementIsList ? (0, r.z)(t5, a2, i4) : o3.J.replace(a2, t5.element, i4.createInside, true);
            }
            const l = /* @__PURE__ */ new Set(["td", "th", "tr", "tbody", "table", "li", "ul", "ol"]);
          }, 10494: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { O: function() {
              return s;
            } });
            var o3 = i3(97621), n2 = i3(8757), r = i3(37649);
            function s(t5, e4) {
              var i4;
              const { s: s2, editor: a } = t5;
              null === (i4 = a.firstChild) || void 0 === i4 || i4.normalize();
              const l = s2.fakes(), c = t5.s.wrapInTagGen(l);
              let d = c.next();
              if (d.done) return;
              let u = { collapsed: s2.isCollapsed(), mode: n2.DI, element: d.value, next: r.x.START, jodit: t5, style: e4 };
              for (; d && !d.done; ) {
                const t6 = new o3.EF(r.x.START, r.g);
                for (u.element = d.value; t6.getState() !== r.x.END; ) u = t6.dispatch("exec", u);
                d = c.next();
              }
              s2.restoreFakes(l);
            }
          }, 8757: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Ag: function() {
              return c;
            }, DI: function() {
              return d;
            }, OJ: function() {
              return a;
            }, PL: function() {
              return l;
            }, Zk: function() {
              return s;
            }, ar: function() {
              return h;
            }, dj: function() {
              return u;
            }, xk: function() {
              return p;
            } });
            var o3 = i3(17352), n2 = i3(83260), r = i3(10494);
            const s = "wrap", a = "unwrap", l = "change", c = "unset", d = "initial", u = "replace", h = "commitStyle";
            class p {
              isApplied(t5, e4) {
                const i4 = this.__applyMap.get(t5);
                return !!i4 && i4[e4];
              }
              setApplied(t5, e4) {
                var i4;
                const o4 = null !== (i4 = this.__applyMap.get(t5)) && void 0 !== i4 ? i4 : {};
                o4[e4] = true, this.__applyMap.set(t5, o4);
              }
              get elementIsList() {
                return Boolean(this.options.element && o3.LIST_TAGS.has(this.options.element));
              }
              get element() {
                return this.options.element || this.defaultTag;
              }
              get elementIsBlock() {
                return Boolean(this.options.element && o3.IS_BLOCK.test(this.options.element));
              }
              get isElementCommit() {
                return Boolean(this.options.element && this.options.element !== this.options.defaultTag);
              }
              get defaultTag() {
                return this.options.defaultTag ? this.options.defaultTag : this.elementIsBlock ? "p" : "span";
              }
              get elementIsDefault() {
                return this.element === this.defaultTag;
              }
              constructor(t5) {
                this.options = t5, this.__applyMap = /* @__PURE__ */ new WeakMap();
              }
              apply(t5) {
                const { hooks: e4 } = this.options;
                try {
                  e4 && Object.keys(e4).forEach((i4) => {
                    t5.e.on((0, n2.x)(h + "_" + i4), e4[i4]);
                  }), (0, r.O)(t5, this);
                } finally {
                  e4 && Object.keys(e4).forEach((i4) => {
                    t5.e.off((0, n2.x)(h + "_" + i4), e4[i4]);
                  }), this.__applyMap = /* @__PURE__ */ new WeakMap();
                }
                t5.synchronizeValues(), t5.e.fire("afterCommitStyle", this);
              }
            }
          }, 37649: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { g: function() {
              return l;
            }, x: function() {
              return a;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = (i3(28712), i3(87332)), s = i3(97621);
            const a = { START: "START", ELEMENT: "ELEMENT", UNWRAP: "UNWRAP", UNWRAP_CHILDREN: "UNWRAP_CHILDREN", CHANGE: "CHANGE", REPLACE_DEFAULT: "REPLACE_DEFAULT", LIST: "LIST", TOGGLE_LIST: "TOGGLE_LIST", WRAP: "WRAP", EXTRACT: "EXTRACT", END: "END" }, l = { [a.START]: { exec(t5) {
              const { element: e4, jodit: i4, style: o4, mode: l2, collapsed: c } = t5;
              if ((0, s.iu)(e4, i4.editor) || !c && n2.J.isEmptyContent(e4)) return { ...t5, next: a.END };
              const d = (0, s.AS)(o4, e4, i4.editor) || (0, s.G6)(o4, e4);
              if (d) return { ...t5, next: a.ELEMENT, element: d };
              const u = (0, s.$s)(o4, e4, i4.editor);
              return o4.elementIsList && n2.J.isList(u) ? { ...t5, next: a.LIST } : u ? { ...t5, next: a.EXTRACT } : { ...t5, next: l2 !== r.OJ ? a.UNWRAP_CHILDREN : a.END };
            } }, [a.LIST]: { exec(t5) {
              const { element: e4, jodit: i4, mode: s2 } = t5;
              if (s2 !== r.DI && s2 !== r.OJ && s2 !== r.dj) return { ...t5, next: a.END };
              const l2 = n2.J.closest(e4, "li", i4.editor);
              return l2 && n2.J.closest(e4, o3.LIST_TAGS, i4.editor) ? { ...t5, element: l2, next: a.TOGGLE_LIST } : { ...t5, next: a.END };
            } }, [a.TOGGLE_LIST]: { exec: (t5) => ({ ...t5, mode: (0, s.ks)(t5.style, t5.element, t5.jodit, t5.mode), next: a.END }) }, [a.EXTRACT]: { exec(t5) {
              const { element: e4, jodit: i4, style: o4 } = t5, n3 = (0, s.$s)(o4, e4, i4.editor);
              return o4.elementIsBlock || (0, s.yP)(n3, e4, i4), { ...t5, element: n3, next: a.ELEMENT };
            } }, [a.UNWRAP_CHILDREN]: { exec(t5) {
              const { element: e4, style: i4 } = t5;
              return (0, s.tm)(i4, e4) ? { ...t5, mode: r.OJ, next: a.END } : { ...t5, next: a.WRAP };
            } }, [a.WRAP]: { exec(t5) {
              const { element: e4, jodit: i4, style: o4 } = t5, n3 = (0, s.LV)(o4, e4, i4);
              return { ...t5, next: o4.elementIsList ? a.END : a.CHANGE, mode: r.Zk, element: n3 };
            } }, [a.ELEMENT]: { exec(t5) {
              const { style: e4, element: i4, jodit: o4 } = t5;
              return (0, s.Yx)(e4, i4, o4, r.DI, true) !== r.DI ? { ...t5, next: a.CHANGE } : n2.J.isTag(i4, e4.element) ? { ...t5, next: a.UNWRAP } : { ...t5, next: a.END };
            } }, [a.CHANGE]: { exec(t5) {
              const { style: e4, element: i4, jodit: o4, mode: l2 } = t5, c = (0, s.Yx)(e4, i4, o4, t5.mode);
              return l2 !== r.Zk && c === r.Ag && !i4.attributes.length && n2.J.isTag(i4, e4.element) ? { ...t5, next: a.UNWRAP } : { ...t5, mode: c, next: a.END };
            } }, [a.UNWRAP]: { exec: (t5) => t5.element.attributes.length && n2.J.isTag(t5.element, t5.style.element) ? { ...t5, next: a.REPLACE_DEFAULT } : (n2.J.unwrap(t5.element), { ...t5, mode: r.OJ, next: a.END }) }, [a.REPLACE_DEFAULT]: { exec: (t5) => (n2.J.replace(t5.element, t5.style.defaultTag, t5.jodit.createInside, true), { ...t5, mode: r.dj, next: a.END }) }, [a.END]: { exec: (t5) => t5 } };
          }, 17800: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { I: function() {
              return o3;
            }, O: function() {
              return n2;
            } });
            const o3 = /* @__PURE__ */ (() => {
              let t5;
              return () => (void 0 === t5 && (t5 = (() => {
                const t6 = "___Jodit___" + Math.random().toString();
                try {
                  localStorage.setItem(t6, "1");
                  const e4 = "1" === localStorage.getItem(t6);
                  return localStorage.removeItem(t6), e4;
                } catch (t7) {
                }
                return false;
              })()), t5);
            })();
            class n2 {
              set(t5, e4) {
                try {
                  const i4 = localStorage.getItem(this.rootKey), o4 = i4 ? JSON.parse(i4) : {};
                  o4[t5] = e4, localStorage.setItem(this.rootKey, JSON.stringify(o4));
                } catch (t6) {
                }
                return this;
              }
              delete(t5) {
                try {
                  localStorage.removeItem(this.rootKey);
                } catch (t6) {
                }
                return this;
              }
              get(t5) {
                try {
                  const e4 = localStorage.getItem(this.rootKey), i4 = e4 ? JSON.parse(e4) : {};
                  return void 0 !== i4[t5] ? i4[t5] : null;
                } catch (t6) {
                }
              }
              exists(t5) {
                return null != this.get(t5);
              }
              constructor(t5) {
                this.rootKey = t5;
              }
              clear() {
                try {
                  localStorage.removeItem(this.rootKey);
                } catch (t5) {
                }
                return this;
              }
            }
          }, 2788: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return o3;
            } });
            class o3 {
              constructor() {
                this.data = /* @__PURE__ */ new Map();
              }
              set(t5, e4) {
                return this.data.set(t5, e4), this;
              }
              delete(t5) {
                return this.data.delete(t5), this;
              }
              get(t5) {
                return this.data.get(t5);
              }
              exists(t5) {
                return this.data.has(t5);
              }
              clear() {
                return this.data.clear(), this;
              }
            }
          }, 63915: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { wc: function() {
              return o3.w;
            } }), i3(17800);
            var o3 = i3(24834);
          }, 24834: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { w: function() {
              return a;
            } });
            var o3 = i3(83260), n2 = i3(17800), r = i3(2788);
            const s = "Jodit_";
            class a {
              set(t5, e4) {
                return this.provider.set((0, o3.x)(this.prefix + t5), e4), this;
              }
              delete(t5) {
                return this.provider.delete((0, o3.x)(this.prefix + t5)), this;
              }
              get(t5) {
                return this.provider.get((0, o3.x)(this.prefix + t5));
              }
              exists(t5) {
                return this.provider.exists((0, o3.x)(this.prefix + t5));
              }
              clear() {
                return this.provider.clear(), this;
              }
              constructor(t5, e4) {
                this.provider = t5, this.prefix = s, e4 && (this.prefix += e4);
              }
              static makeStorage(t5 = false, e4) {
                let i4;
                return t5 && (0, n2.I)() && (i4 = new n2.O(s + e4)), i4 || (i4 = new r.M()), new a(i4, e4);
              }
            }
          }, 58597: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return s;
            } });
            var o3 = i3(9823), n2 = i3(84976), r = i3(34256);
            class s {
              dlg(t5) {
                const e4 = new r.lG({ language: this.o.language, shadowRoot: this.o.shadowRoot, ownerWindow: this.o.ownerWindow, defaultTimeout: this.o.defaultTimeout, theme: this.o.theme, globalFullSize: this.o.globalFullSize, ...t5 });
                return (0, n2.b_)(this, e4.container), e4.parent = this, e4.bindDestruct(this);
              }
              confirm(t5, e4, i4) {
                return t5 = a(t5, this), e4 = a(e4, this), r.pT.call(this.dlg({ closeOnClickOverlay: true }), t5, e4, i4);
              }
              prompt(t5, e4, i4, o4, n3) {
                return t5 = a(t5, this), e4 = a(e4, this), o4 = a(o4, this), r.XG.call(this.dlg({ closeOnClickOverlay: true }), t5, e4, i4, o4, n3);
              }
              alert(t5, e4, i4, o4) {
                return t5 = a(t5, this), e4 = a(e4, this), r.Fc.call(this.dlg({ closeOnClickOverlay: true }), t5, e4, i4, o4);
              }
            }
            function a(t5, e4) {
              return (0, o3.Kg)(t5) && !(0, o3.AH)(t5) && (t5 = e4.i18n(t5)), t5;
            }
          }, 87906: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { O: function() {
              return n2;
            } });
            var o3 = i3(42448);
            class n2 {
              getElm(t5) {
                return this.container.querySelector(`.${this.getFullElName(t5)}`);
              }
              getElms(t5) {
                return (0, o3.$)(this.container.querySelectorAll(`.${this.getFullElName(t5)}`));
              }
            }
          }, 75758: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { K: function() {
              return n2;
            } });
            var o3 = i3(35642);
            class n2 {
              afterSetMod(t5, e4) {
              }
              setMod(t5, e4, i4) {
                t5 = t5.toLowerCase();
                const n3 = this.mods[t5];
                if (n3 === e4) return this;
                const r = `${this.componentName}_${t5}_`, s = (i4 || this.container).classList;
                return null != n3 && s.remove(`${r}${n3.toString().toLowerCase()}`), !(0, o3.R)(e4) && "" !== e4 && s.add(`${r}${e4.toString().toLowerCase()}`), this.mods[t5] = e4, this.afterSetMod(t5, e4), this;
              }
              getMod(t5) {
                var e4;
                return null !== (e4 = this.mods[t5]) && void 0 !== e4 ? e4 : null;
              }
            }
          }, 92032: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $n: function() {
              return g;
            }, lD: function() {
              return f;
            }, ue: function() {
              return p;
            } });
            var o3 = i3(31635), n2 = i3(64567), r = i3(22664), s = i3(55186), a = i3(69052), l = i3(98253), c = i3(97369), d = i3(29780), u = i3(94070), h = i3(931);
            const p = () => ({ size: "middle", type: "button", name: "", value: "", variant: "initial", disabled: false, activated: false, icon: { name: "empty", fill: "", iconURL: "" }, tooltip: "", text: "", tabIndex: void 0 });
            let f = class extends d.D {
              className() {
                return "UIButton";
              }
              setState(t5) {
                return Object.assign(this.state, t5), this;
              }
              get text() {
                return this.getElm("text");
              }
              get icon() {
                return this.getElm("icon");
              }
              onChangeSize() {
                this.setMod("size", this.state.size);
              }
              onChangeType() {
                (0, c.attr)(this.container, "type", this.state.type);
              }
              updateSize() {
                const t5 = this.closest(u.z);
                t5 && (this.state.size = t5.buttonSize);
              }
              onChangeStatus() {
                this.setMod("variant", this.state.variant);
              }
              onChangeText() {
                this.text.textContent = this.jodit.i18n(this.state.text);
              }
              onChangeTextSetMode() {
                this.setMod("text-icons", Boolean(this.state.text.trim().length));
              }
              onChangeDisabled() {
                (0, c.attr)(this.container, "disabled", this.state.disabled || null);
              }
              onChangeActivated() {
                (0, c.attr)(this.container, "aria-pressed", this.state.activated);
              }
              onChangeName() {
                this.container.classList.add(`${this.componentName}_${this.clearName(this.state.name)}`), this.name = this.state.name, (0, c.attr)(this.container, "data-ref", this.state.name), (0, c.attr)(this.container, "ref", this.state.name);
              }
              onChangeTooltip() {
                this.get("j.o.useNativeTooltip") && (0, c.attr)(this.container, "title", this.state.tooltip), (0, c.attr)(this.container, "aria-label", this.state.tooltip);
              }
              onChangeTabIndex() {
                (0, c.attr)(this.container, "tabindex", this.state.tabIndex);
              }
              onChangeIcon() {
                const t5 = this.get("j.o.textIcons");
                if (true === t5 || (0, a.T)(t5) && t5(this.state.name)) return;
                s.J.detach(this.icon);
                const e4 = h.I.makeIcon(this.j, this.state.icon);
                e4 && this.icon.appendChild(e4);
              }
              focus() {
                this.container.focus();
              }
              isFocused() {
                const { activeElement: t5 } = this.od;
                return Boolean(t5 && s.J.isOrContains(this.container, t5));
              }
              createContainer() {
                const t5 = this.componentName, e4 = this.j.c.element("button", { class: t5, type: "button", role: "button", ariaPressed: false }), i4 = this.j.c.span(t5 + "__icon"), o4 = this.j.c.span(t5 + "__text");
                return e4.appendChild(i4), e4.appendChild(o4), e4;
              }
              constructor(t5, e4) {
                super(t5), this.isButton = true, this.state = p(), this.actionHandlers = [], this.button = this.container, this.updateSize(), this.onChangeSize(), this.onChangeStatus(), e4 && this.hookStatus(n2.f.ready, () => {
                  this.setState(e4);
                });
              }
              destruct() {
                return this.j.e.off(this.container), super.destruct();
              }
              onAction(t5) {
                return this.actionHandlers.push(t5), this;
              }
              __onActionFire(t5) {
                t5.buffer = { actionTrigger: this }, this.actionHandlers.forEach((e4) => e4.call(this, t5));
              }
            };
            function g(t5, e4, i4, o4) {
              const n3 = new f(t5);
              return n3.state.tabIndex = t5.o.allowTabNavigation ? 0 : -1, (0, l.K)(e4) ? (n3.state.icon.name = e4, n3.state.name = e4, o4 && (n3.state.variant = o4), i4 && (n3.state.text = i4)) : n3.setState(e4), n3;
            }
            (0, o3.Cg)([r.cache], f.prototype, "text", null), (0, o3.Cg)([r.cache], f.prototype, "icon", null), (0, o3.Cg)([(0, r.watch)("state.size", { immediately: false })], f.prototype, "onChangeSize", null), (0, o3.Cg)([(0, r.watch)("state.type", { immediately: false })], f.prototype, "onChangeType", null), (0, o3.Cg)([(0, r.watch)("parentElement")], f.prototype, "updateSize", null), (0, o3.Cg)([(0, r.watch)("state.variant", { immediately: false })], f.prototype, "onChangeStatus", null), (0, o3.Cg)([(0, r.watch)("state.text", { immediately: false })], f.prototype, "onChangeText", null), (0, o3.Cg)([(0, r.watch)("state.text", { immediately: false })], f.prototype, "onChangeTextSetMode", null), (0, o3.Cg)([(0, r.watch)("state.disabled")], f.prototype, "onChangeDisabled", null), (0, o3.Cg)([(0, r.watch)("state.activated")], f.prototype, "onChangeActivated", null), (0, o3.Cg)([(0, r.watch)("state.name", { immediately: false })], f.prototype, "onChangeName", null), (0, o3.Cg)([(0, r.watch)("state.tooltip", { immediately: false })], f.prototype, "onChangeTooltip", null), (0, o3.Cg)([(0, r.watch)("state.tabIndex", { immediately: false })], f.prototype, "onChangeTabIndex", null), (0, o3.Cg)([(0, r.watch)("state.icon", { immediately: false })], f.prototype, "onChangeIcon", null), (0, o3.Cg)([r.cacheHTML], f.prototype, "createContainer", null), (0, o3.Cg)([(0, r.watch)("button:click")], f.prototype, "__onActionFire", null), f = (0, o3.Cg)([r.component], f);
          }, 31202: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { s: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = (i3(28712), i3(92032)), s = i3(6455);
            let a = class extends s.U {
              className() {
                return "UIButtonGroup";
              }
              render(t5) {
                return `<div>
			<div class="&__label">~${t5.label}~</div>
			<div class="&__options"></div>
		</div>`;
              }
              appendChildToContainer(t5) {
                this.getElm("options").appendChild(t5);
              }
              constructor(t5, e4 = { radio: true }) {
                var i4, o4;
                super(t5, null === (i4 = e4.options) || void 0 === i4 ? void 0 : i4.map((e5) => {
                  const i5 = new r.lD(t5, { text: e5.text, value: e5.value, variant: "primary" });
                  return i5.onAction(() => {
                    this.select(e5.value);
                  }), i5;
                }), e4), this.options = e4, this.select(null !== (o4 = e4.value) && void 0 !== o4 ? o4 : 0);
              }
              select(t5) {
                var e4, i4;
                this.elements.forEach((e5, i5) => {
                  i5 === t5 || e5.state.value === t5 ? e5.state.activated = true : this.options.radio && (e5.state.activated = false);
                });
                const o4 = this.elements.filter((t6) => t6.state.activated).map((t6) => ({ text: t6.state.text, value: t6.state.value }));
                this.jodit.e.fire(this, "select", o4), null === (i4 = (e4 = this.options).onChange) || void 0 === i4 || i4.call(e4, o4);
              }
            };
            a = (0, o3.Cg)([n2.s], a);
          }, 35265: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $n: function() {
              return o3.$n;
            }, SB: function() {
              return r.S;
            }, lD: function() {
              return o3.lD;
            }, ss: function() {
              return n2.s;
            }, ue: function() {
              return o3.ue;
            } });
            var o3 = i3(92032), n2 = i3(31202), r = i3(36434);
          }, 36434: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { S: function() {
              return h;
            } });
            var o3, n2 = i3(31635), r = i3(77753), s = i3(22664), a = i3(71842), l = i3(56298), c = i3(27594), d = i3(97369), u = i3(29780);
            let h = o3 = class extends u.D {
              className() {
                return "UITooltip";
              }
              render() {
                return '<div><div class="&__content"></div></div>';
              }
              constructor(t5) {
                super(t5), this.__isOpened = false, this.__listenClose = false, this.__currentTarget = null, this.__delayShowTimeout = 0, this.__hideTimeout = 0, t5.o.textIcons || !t5.o.showTooltip || t5.o.useNativeTooltip || t5.hookStatus(r.f.ready, () => {
                  (0, l.My)(this.j, o3).appendChild(this.container), t5.e.on(t5.container, "mouseenter.tooltip", this.__onMouseEnter, { capture: true });
                });
              }
              __addListenersOnClose() {
                if (this.__listenClose) return;
                this.__listenClose = true;
                const t5 = this.j;
                t5.e.on(t5.ow, "scroll.tooltip", this.__hide).on(t5.ow, "joditCloseDialog", this.__hide).on(t5.container, "mouseleave.tooltip", this.__hide).on(["escape.tooltip", "change.tooltip", "changePlace.tooltip", "afterOpenPopup.tooltip", "hidePopup.tooltip", "closeAllPopups.tooltip"], this.__hide).on(t5.container, "mouseleave", this.__onMouseLeave, { capture: true });
              }
              __removeListenersOnClose() {
                if (!this.__listenClose) return;
                this.__listenClose = false;
                const t5 = this.j;
                t5.e.off(t5.ow, "scroll.tooltip", this.__hide).off(["escape.tooltip", "change.tooltip", "changePlace.tooltip", "afterOpenPopup.tooltip", "hidePopup.tooltip", "closeAllPopups.tooltip"], this.__hide).off(t5.container, "mouseleave.tooltip", this.__onMouseLeave);
              }
              __onMouseLeave(t5) {
                this.__currentTarget === t5.target && (this.__hideDelay(), this.__currentTarget = null);
              }
              __onMouseEnter(t5) {
                if (!a.J.isHTMLElement(t5.target)) return;
                const e4 = (0, d.attr)(t5.target, "aria-label");
                if (!e4) return;
                if (Boolean((0, d.attr)(t5.target, "disabled"))) return;
                if (!t5.target.className.includes("jodit")) return;
                this.__currentTarget = t5.target;
                const i4 = (0, c.G)(t5.target);
                this.__addListenersOnClose(), this.__delayOpen(() => ({ x: i4.left + i4.width / 2, y: i4.top + i4.height }), e4);
              }
              __delayOpen(t5, e4) {
                const i4 = this.j.o.showTooltipDelay || this.j.defaultTimeout;
                this.j.async.clearTimeout(this.__hideTimeout), this.j.async.clearTimeout(this.__delayShowTimeout), this.__delayShowTimeout = this.j.async.setTimeout(() => this.__open(t5, e4), { timeout: i4, label: "tooltip" });
              }
              __open(t5, e4) {
                this.setMod("visible", true), this.getElm("content").innerHTML = e4, this.__isOpened = true, this.__setPosition(t5);
              }
              __setPosition(t5) {
                const e4 = t5();
                (0, d.css)(this.container, { left: e4.x, top: e4.y });
              }
              __hide() {
                this.j.async.clearTimeout(this.__delayShowTimeout), this.j.async.clearTimeout(this.__hideTimeout), this.__removeListenersOnClose(), this.__isOpened && (this.__isOpened = false, this.setMod("visible", false), (0, d.css)(this.container, { left: -5e3 }));
              }
              __hideDelay() {
                this.__isOpened && (this.j.async.clearTimeout(this.__delayShowTimeout), this.__hideTimeout = this.async.setTimeout(this.__hide, this.j.defaultTimeout));
              }
              destruct() {
                this.j.e.off(this.j.container, "mouseenter", this.__onMouseEnter), this.__hide(), super.destruct();
              }
            };
            (0, n2.Cg)([s.autobind], h.prototype, "__onMouseLeave", null), (0, n2.Cg)([s.autobind], h.prototype, "__onMouseEnter", null), (0, n2.Cg)([s.autobind], h.prototype, "__hide", null), (0, n2.Cg)([s.autobind], h.prototype, "__hideDelay", null), h = o3 = (0, n2.Cg)([s.component], h);
          }, 29780: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { D: function() {
              return h;
            } });
            var o3, n2 = i3(31635), r = i3(77753), s = i3(1963), a = i3(55186), l = i3(98253), c = i3(87906), d = i3(75758), u = i3(931);
            let h = o3 = class extends r.vG {
              get parentElement() {
                return this.__parentElement;
              }
              set parentElement(t5) {
                this.__parentElement = t5, t5 && t5.hookStatus("beforeDestruct", () => this.destruct()), this.updateParentElement(this);
              }
              bubble(t5) {
                let e4 = this.parentElement;
                for (; e4; ) t5(e4), e4 = e4.parentElement;
                return this;
              }
              updateParentElement(t5) {
                var e4;
                return null === (e4 = this.__parentElement) || void 0 === e4 || e4.updateParentElement(t5), this;
              }
              get(t5, e4) {
                return super.get(t5, e4) || this.getElm(t5);
              }
              closest(t5) {
                const e4 = "object" == typeof t5 ? (e5) => e5 === t5 : (e5) => r.uA.isInstanceOf(e5, t5);
                let i4 = this.__parentElement;
                for (; i4; ) {
                  if (e4(i4)) return i4;
                  i4 = !i4.parentElement && i4.container.parentElement ? o3.closestElement(i4.container.parentElement, o3) : i4.parentElement;
                }
                return null;
              }
              static closestElement(t5, e4) {
                const i4 = a.J.up(t5, (t6) => {
                  if (t6) {
                    const { component: i5 } = t6;
                    return i5 && r.uA.isInstanceOf(i5, e4);
                  }
                  return false;
                });
                return i4 ? null == i4 ? void 0 : i4.component : null;
              }
              update() {
              }
              appendTo(t5) {
                return t5.appendChild(this.container), this;
              }
              clearName(t5) {
                return t5.replace(/[^a-zA-Z0-9]/g, "_");
              }
              render(t5) {
                return this.j.c.div(this.componentName);
              }
              createContainer(t5) {
                const e4 = this.render(t5);
                if ((0, l.K)(e4)) {
                  const t6 = this.parseTemplate(e4);
                  return t6.classList.add(this.componentName), t6;
                }
                return e4;
              }
              parseTemplate(t5) {
                return this.j.c.fromHTML(t5.replace(/\*([^*]+?)\*/g, (t6, e4) => u.I.get(e4) || "").replace(/&_/g, this.componentName + "_").replace(/~([^~]+?)~/g, (t6, e4) => this.i18n(e4)));
              }
              constructor(t5, e4) {
                super(t5), this.name = "", this.__parentElement = null, this.mods = {}, this.container = this.createContainer(e4), Object.defineProperty(this.container, "component", { value: this, configurable: true });
              }
              destruct() {
                return a.J.safeRemove(this.container), this.parentElement = null, super.destruct();
              }
            };
            h = o3 = (0, n2.Cg)([(0, s.C)(d.K, c.O)], h);
          }, 68752: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(97369), s = i3(6455);
            let a = class extends s.U {
              className() {
                return "UIBlock";
              }
              constructor(t5, e4, i4 = { align: "left" }) {
                super(t5, e4), this.options = i4, this.setMod("align", this.options.align || "left"), this.setMod("width", this.options.width || ""), this.options.mod && this.setMod(this.options.mod, true), this.options.className && this.container.classList.add(this.options.className), (0, r.attr)(this.container, "data-ref", i4.ref), (0, r.attr)(this.container, "ref", i4.ref);
              }
            };
            a = (0, o3.Cg)([n2.s], a);
          }, 28709: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return d;
            } });
            var o3 = i3(31635), n2 = i3(37474), r = i3(24767), s = i3(97369), a = i3(69198), l = i3(1540), c = i3(6455);
            let d = class extends c.U {
              className() {
                return "UIForm";
              }
              submit() {
                this.j.e.fire(this.container, "submit");
              }
              validate() {
                const t5 = this.allChildren.filter((t6) => n2.u.isInstanceOf(t6, a.t));
                for (const e5 of t5) if (!e5.validate()) return false;
                const e4 = this.allChildren.filter((t6) => n2.u.isInstanceOf(t6, l.$));
                for (const t6 of e4) if (!t6.validate()) return false;
                return true;
              }
              onSubmit(t5) {
                return this.j.e.on(this.container, "submit", () => {
                  const e4 = this.allChildren.filter((t6) => n2.u.isInstanceOf(t6, a.t));
                  return !!this.validate() && (t5(e4.reduce((t6, e5) => (t6[e5.state.name] = e5.value, t6), {})), false);
                }), this;
              }
              createContainer() {
                const t5 = this.j.c.element("form");
                return t5.classList.add(this.componentName), (0, s.attr)(t5, "dir", this.j.o.direction || "auto"), t5;
              }
              constructor(...t5) {
                var e4, i4;
                super(...t5), (null === (e4 = this.options) || void 0 === e4 ? void 0 : e4.className) && this.container.classList.add(null === (i4 = this.options) || void 0 === i4 ? void 0 : i4.className);
              }
            };
            d = (0, o3.Cg)([r.s], d);
          }, 20703: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $6: function() {
              return r.$6;
            }, F0: function() {
              return r.F0;
            }, XV: function() {
              return n2.X;
            }, Yh: function() {
              return o3.Y;
            }, cY: function() {
              return r.cY;
            }, nE: function() {
              return r.nE;
            }, tS: function() {
              return r.tS;
            } });
            var o3 = i3(68752), n2 = i3(28709), r = i3(47165);
          }, 5454: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return l;
            } });
            var o3, n2 = i3(31635), r = i3(22664), s = i3(24767), a = i3(69198);
            let l = o3 = class extends a.t {
              className() {
                return "UITextArea";
              }
              createNativeInput(t5) {
                return this.j.create.element("textarea");
              }
              constructor(t5, e4) {
                super(t5, e4), this.state = { ...o3.defaultState }, Object.assign(this.state, e4), false === this.state.resizable && (this.nativeInput.style.resize = "none");
              }
              onChangeStateSize() {
                const { size: t5, resizable: e4 } = this.state;
                this.nativeInput.style.resize = e4 ? "auto" : "none", this.nativeInput.rows = null != t5 ? t5 : 5;
              }
            };
            l.defaultState = { ...a.t.defaultState, size: 5, resizable: true }, (0, n2.Cg)([(0, r.watch)(["state.size", "state.resizable"])], l.prototype, "onChangeStateSize", null), l = o3 = (0, n2.Cg)([s.s], l);
          }, 3006: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { c: function() {
              return l;
            } });
            var o3, n2 = i3(31635), r = i3(22664), s = i3(55186), a = i3(69198);
            let l = o3 = class extends a.t {
              className() {
                return "UICheckbox";
              }
              render() {
                return this.j.c.element("label", { className: this.componentName });
              }
              constructor(t5, e4) {
                super(t5, { ...e4, type: "checkbox" }), this.state = { ...o3.defaultState }, Object.assign(this.state, e4);
              }
              onChangeChecked() {
                this.value = this.state.checked.toString(), this.nativeInput.checked = this.state.checked, this.setMod("checked", this.state.checked);
              }
              onChangeNativeCheckBox() {
                this.state.checked = this.nativeInput.checked;
              }
              onChangeSwitch() {
                this.setMod("switch", this.state.switch);
                let t5 = this.getElm("switch-slider");
                this.state.switch ? (t5 || (t5 = this.j.c.div(this.getFullElName("switch-slider"))), s.J.after(this.nativeInput, t5)) : s.J.safeRemove(t5);
              }
            };
            l.defaultState = { ...a.t.defaultState, checked: false, switch: false }, (0, n2.Cg)([(0, r.watch)("state.checked"), (0, r.hook)("ready")], l.prototype, "onChangeChecked", null), (0, n2.Cg)([(0, r.watch)("nativeInput:change")], l.prototype, "onChangeNativeCheckBox", null), (0, n2.Cg)([(0, r.watch)("state.switch"), (0, r.hook)("ready")], l.prototype, "onChangeSwitch", null), l = o3 = (0, n2.Cg)([r.component], l);
          }, 47964: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { n: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(92032), s = i3(69198);
            let a = class extends s.t {
              className() {
                return "UIFileInput";
              }
              createContainer(t5) {
                this.button = new r.lD(this.j, { icon: { name: "plus" } });
                const { container: e4 } = this.button;
                this.nativeInput || (this.nativeInput = this.createNativeInput(t5));
                const { nativeInput: i4 } = this;
                return i4.classList.add(this.getFullElName("input")), e4.classList.add(this.componentName), e4.appendChild(i4), e4;
              }
              createNativeInput(t5) {
                return this.j.create.fromHTML(`<input
			type="file"
			accept="${t5.onlyImages ? "image/*" : "*"}"
			tabindex="-1"
			dir="auto"
			multiple=""
		/>`);
              }
              constructor(t5, e4) {
                super(t5, { type: "file", ...e4 }), this.state = { ...s.t.defaultState, type: "file", onlyImages: true };
              }
            };
            a = (0, o3.Cg)([n2.s], a);
          }, 47165: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $6: function() {
              return a.$;
            }, F0: function() {
              return o3.F;
            }, cY: function() {
              return n2.c;
            }, nE: function() {
              return r.n;
            }, tS: function() {
              return s.t;
            } });
            var o3 = i3(5454), n2 = i3(3006), r = i3(47964), s = i3(69198), a = i3(1540);
          }, 69198: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { t: function() {
              return h;
            } });
            var o3, n2 = i3(31635), r = i3(22664), s = i3(55186), a = i3(42448), l = i3(97369), c = i3(29780), d = i3(84103), u = i3(931);
            let h = o3 = class extends c.D {
              className() {
                return "UIInput";
              }
              onChangeClear() {
                this.state.clearButton ? s.J.after(this.nativeInput, this.clearButton) : s.J.safeRemove(this.clearButton);
              }
              onChangeClassName(t5, e4) {
                e4 && this.container.classList.remove(e4), this.state.className && this.container.classList.add(this.state.className);
              }
              onChangeState() {
                this.name = this.state.name;
                const t5 = this.nativeInput, { name: e4, icon: i4, type: o4, ref: n3, required: r2, placeholder: a2, autocomplete: c2, label: d2 } = this.state;
                (0, l.attr)(t5, "name", e4), (0, l.attr)(t5, "type", o4), (0, l.attr)(t5, "data-ref", n3 || e4), (0, l.attr)(t5, "ref", n3 || e4), (0, l.attr)(t5, "required", r2 || null), (0, l.attr)(t5, "autocomplete", c2 ? null : "off"), (0, l.attr)(t5, "placeholder", a2 ? this.j.i18n(a2) : ""), i4 && u.I.exists(i4) ? (s.J.before(t5, this.icon), this.icon.innerHTML = u.I.get(i4)) : s.J.safeRemove(this.icon), d2 ? (s.J.before(this.wrapper, this.label), this.label.innerText = this.j.i18n(d2)) : s.J.safeRemove(this.label), this.updateValidators();
              }
              updateValidators() {
                var t5;
                this.validators.clear(), this.state.required && this.validators.add(d.O.required), null === (t5 = this.state.validators) || void 0 === t5 || t5.forEach((t6) => {
                  const e4 = d.O[t6];
                  e4 && this.validators.add(e4);
                });
              }
              set error(t5) {
                this.setMod("has-error", Boolean(t5)), t5 ? (this.__errorBox.innerText = this.j.i18n(t5, this.j.i18n(this.state.label || "")), this.container.appendChild(this.__errorBox)) : s.J.safeRemove(this.__errorBox);
              }
              get value() {
                return this.nativeInput.value;
              }
              set value(t5) {
                this.value !== t5 && (this.nativeInput.value = t5, this.onChangeValue());
              }
              onChangeStateValue() {
                const t5 = this.state.value.toString();
                t5 !== this.value && (this.value = t5);
              }
              onChangeValue() {
                var t5, e4;
                const { value: i4 } = this;
                this.state.value !== i4 && (this.state.value = i4, this.j.e.fire(this, "change", i4), null === (e4 = (t5 = this.state).onChange) || void 0 === e4 || e4.call(t5, i4));
              }
              validate() {
                return this.error = "", (0, a.$)(this.validators).every((t5) => t5(this));
              }
              createContainer(t5) {
                const e4 = super.createContainer();
                this.wrapper = this.j.c.div(this.getFullElName("wrapper")), this.nativeInput || (this.nativeInput = this.createNativeInput());
                const { nativeInput: i4 } = this;
                return i4.classList.add(this.getFullElName("input")), this.wrapper.appendChild(i4), e4.appendChild(this.wrapper), (0, l.attr)(i4, "dir", this.j.o.direction || "auto"), e4;
              }
              createNativeInput(t5) {
                return this.j.create.element("input");
              }
              constructor(t5, e4) {
                super(t5, e4), this.label = this.j.c.span(this.getFullElName("label")), this.icon = this.j.c.span(this.getFullElName("icon")), this.clearButton = this.j.c.span(this.getFullElName("clear"), u.I.get("cancel")), this.state = { ...o3.defaultState }, this.__errorBox = this.j.c.span(this.getFullElName("error")), this.validators = /* @__PURE__ */ new Set([]), void 0 !== (null == e4 ? void 0 : e4.value) && (e4.value = e4.value.toString()), Object.assign(this.state, e4), void 0 !== this.state.clearButton && (this.j.e.on(this.clearButton, "click", (t6) => {
                  t6.preventDefault(), this.nativeInput.value = "", this.j.e.fire(this.nativeInput, "input"), this.focus();
                }).on(this.nativeInput, "input", () => {
                  this.state.clearButton = Boolean(this.value.length);
                }), this.state.clearButton = Boolean(this.value.length)), this.j.e.on(this.nativeInput, "focus blur", () => {
                  this.onChangeFocus();
                }).on(this.nativeInput, "input change", this.onChangeValue), this.onChangeState(), this.onChangeClassName(), this.onChangeStateValue();
              }
              focus() {
                this.nativeInput.focus();
              }
              get isFocused() {
                return this.nativeInput === this.j.od.activeElement;
              }
              onChangeFocus() {
                this.setMod("focused", this.isFocused);
              }
            };
            h.defaultState = { className: "", autocomplete: true, name: "", value: "", icon: "", label: "", ref: "", type: "text", placeholder: "", required: false, validators: [] }, (0, n2.Cg)([(0, r.watch)("state.clearButton")], h.prototype, "onChangeClear", null), (0, n2.Cg)([(0, r.watch)("state.className")], h.prototype, "onChangeClassName", null), (0, n2.Cg)([(0, r.watch)(["state.name", "state.type", "state.label", "state.placeholder", "state.autocomplete", "state.icon"], { immediately: false }), (0, r.debounce)()], h.prototype, "onChangeState", null), (0, n2.Cg)([(0, r.watch)("state.value")], h.prototype, "onChangeStateValue", null), (0, n2.Cg)([r.autobind], h.prototype, "onChangeValue", null), h = o3 = (0, n2.Cg)([r.component], h);
          }, 1540: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return c;
            } });
            var o3, n2 = i3(31635), r = i3(24767), s = i3(26150), a = i3(69198), l = i3(84103);
            let c = o3 = class extends a.t {
              className() {
                return "UISelect";
              }
              createContainer(t5) {
                var e4;
                const i4 = super.createContainer(t5), { j: o4 } = this, { nativeInput: n3 } = this, r2 = () => o4.create.element("option");
                if (void 0 !== t5.placeholder) {
                  const e5 = r2();
                  e5.value = "", e5.text = o4.i18n(t5.placeholder), n3.add(e5);
                }
                return null === (e4 = t5.options) || void 0 === e4 || e4.forEach((t6) => {
                  const e5 = r2();
                  e5.value = t6.value.toString(), e5.text = o4.i18n(t6.text), n3.add(e5);
                }), t5.size && t5.size > 0 && (0, s.C)(n3, "size", t5.size), t5.multiple && (0, s.C)(n3, "multiple", ""), i4;
              }
              createNativeInput() {
                return this.j.create.element("select");
              }
              updateValidators() {
                super.updateValidators(), this.state.required && (this.validators.delete(l.O.required), this.validators.add(l.U.m));
              }
              constructor(t5, e4) {
                super(t5, e4), this.state = { ...o3.defaultState }, Object.assign(this.state, e4);
              }
            };
            c.defaultState = { ...a.t.defaultState, options: [], size: 1, multiple: false }, c = o3 = (0, n2.Cg)([r.s], c);
          }, 84103: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { O: function() {
              return o3;
            }, U: function() {
              return n2;
            } });
            var o3 = i3(51271), n2 = i3(36795);
          }, 51271: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { required: function() {
              return r;
            }, url: function() {
              return s;
            } });
            var o3 = i3(6939), n2 = i3(59101);
            const r = function(t5) {
              return !!(0, n2.Bq)(t5.value).length || (t5.error = "Please fill out this field", false);
            }, s = function(t5) {
              return !!(0, o3.m)((0, n2.Bq)(t5.value)) || (t5.error = "Please enter a web address", false);
            };
          }, 36795: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { m: function() {
              return n2;
            } });
            var o3 = i3(59101);
            const n2 = function(t5) {
              return !!(0, o3.Bq)(t5.value).length || (t5.error = "Please fill out this field", false);
            };
          }, 6455: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { U: function() {
              return d;
            } });
            var o3, n2 = i3(31635), r = i3(37474), s = i3(22664), a = i3(55186), l = i3(65147), c = (i3(28712), i3(29780));
            let d = o3 = class extends c.D {
              className() {
                return "UIGroup";
              }
              get allChildren() {
                const t5 = [], e4 = [...this.elements];
                for (; e4.length; ) {
                  const i4 = e4.shift();
                  (0, l.isArray)(i4) ? e4.push(...i4) : r.u.isInstanceOf(i4, o3) ? e4.push(...i4.elements) : i4 && t5.push(i4);
                }
                return t5;
              }
              update() {
                this.elements.forEach((t5) => t5.update()), this.setMod("size", this.buttonSize);
              }
              append(t5, e4) {
                return (0, l.isArray)(t5) ? (t5.forEach((t6) => this.append(t6, e4)), this) : (this.elements.push(t5), t5.name && t5.container.classList.add(this.getFullElName(t5.name)), e4 ? this.getElm(e4).appendChild(t5.container) : this.appendChildToContainer(t5.container), t5.parentElement = this, this);
              }
              afterSetMod(t5, e4) {
                this.syncMod && this.elements.forEach((i4) => i4.setMod(t5, e4));
              }
              appendChildToContainer(t5) {
                this.container.appendChild(t5);
              }
              remove(t5) {
                const e4 = this.elements.indexOf(t5);
                return -1 !== e4 && (this.elements.splice(e4, 1), a.J.safeRemove(t5.container), t5.parentElement = null), this;
              }
              clear() {
                return this.elements.forEach((t5) => t5.destruct()), this.elements.length = 0, this;
              }
              constructor(t5, e4, i4) {
                super(t5, i4), this.options = i4, this.syncMod = false, this.elements = [], this.buttonSize = "middle", null == e4 || e4.forEach((t6) => t6 && this.append(t6)), (null == i4 ? void 0 : i4.name) && (this.name = i4.name);
              }
              destruct() {
                return this.clear(), super.destruct();
              }
            };
            (0, n2.Cg)([(0, s.watch)("buttonSize")], d.prototype, "update", null), d = o3 = (0, n2.Cg)([s.component], d);
          }, 29012: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { CP: function() {
              return r.C;
            }, Ue: function() {
              return o3.U;
            }, bk: function() {
              return s.b;
            }, z4: function() {
              return n2.z;
            } });
            var o3 = i3(6455), n2 = i3(94070), r = i3(86283), s = i3(13642);
          }, 94070: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return f;
            } });
            var o3 = i3(31635), n2 = i3(37474), r = i3(22664), s = i3(42589), a = i3(92032), l = i3(6455), c = i3(86283), d = i3(13642), u = i3(39611), h = i3(57023), p = i3(37424);
            let f = class extends l.U {
              className() {
                return "UIList";
              }
              __onChangeMode() {
                this.setMod("mode", this.mode);
              }
              constructor(t5) {
                super(t5), this.mode = "horizontal", this.removeButtons = [];
              }
              makeGroup() {
                return new l.U(this.jodit);
              }
              get buttons() {
                return this.allChildren.filter((t5) => n2.u.isInstanceOf(t5, a.lD));
              }
              getButtonsNames() {
                return this.buttons.map((t5) => t5 instanceof a.lD && t5.state.name || "").filter((t5) => "" !== t5);
              }
              setRemoveButtons(t5) {
                return this.removeButtons = t5 || [], this;
              }
              build(t5, e4 = null) {
                t5 = (0, s.u)(t5), this.clear();
                let i4, o4 = false, n3 = this.makeGroup();
                this.append(n3), n3.setMod("line", true);
                const r2 = (t6) => {
                  let r3 = null;
                  switch (t6.name) {
                    case "\n":
                      n3 = this.makeGroup(), n3.setMod("line", true), i4 = this.makeGroup(), n3.append(i4), this.append(n3);
                      break;
                    case "|":
                      o4 || (o4 = true, r3 = new c.C(this.j));
                      break;
                    case "---": {
                      i4.setMod("before-spacer", true);
                      const t7 = new d.b(this.j);
                      n3.append(t7), i4 = this.makeGroup(), n3.append(i4), o4 = false;
                      break;
                    }
                    default:
                      o4 = false, r3 = "select" === t6.component ? this.makeSelect(t6, e4) : this.makeButton(t6, e4);
                  }
                  r3 && (i4 || (i4 = this.makeGroup(), n3.append(i4)), i4.append(r3));
                }, a2 = (t6) => {
                  var e5;
                  return !this.removeButtons.includes(t6.name) && (!t6.isVisible || (null === (e5 = t6.isVisible) || void 0 === e5 ? void 0 : e5.call(t6, this.j, t6)));
                };
                return t5.forEach((t6) => {
                  if ((0, u.i)(t6)) {
                    const e5 = t6.buttons.filter((t7) => t7);
                    e5.length && (i4 = this.makeGroup(), i4.setMod("separated", true).setMod("group", t6.group), n3.append(i4), (0, p.Q)(e5, this.j.o.controls).filter(a2).forEach(r2));
                  } else {
                    i4 || (i4 = this.makeGroup(), n3.append(i4));
                    const e5 = (0, h.U)(t6, this.j.o.controls);
                    a2(e5) && r2(e5);
                  }
                }), this.update(), this;
              }
              makeSelect(t5, e4) {
                throw new Error("Not implemented behaviour");
              }
              makeButton(t5, e4) {
                return new a.lD(this.j, { name: t5.name });
              }
            };
            (0, o3.Cg)([(0, r.watch)("mode"), (0, r.hook)("ready")], f.prototype, "__onChangeMode", null), f = (0, o3.Cg)([r.component], f);
          }, 86283: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return s;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(29780);
            let s = class extends r.D {
              className() {
                return "UISeparator";
              }
            };
            s = (0, o3.Cg)([n2.s], s);
          }, 13642: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return s;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(29780);
            let s = class extends r.D {
              className() {
                return "UISpacer";
              }
            };
            s = (0, o3.Cg)([n2.s], s);
          }, 39611: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return r;
            }, i: function() {
              return n2;
            } });
            var o3 = i3(37923);
            const n2 = (t5) => (0, o3.c)(t5.buttons);
            function r(t5, e4) {
              const i4 = e4.getRegisteredButtonGroups();
              return new Set(t5.reduce((t6, e5) => {
                var o4;
                return n2(e5) ? t6 = t6.concat([...e5.buttons, ...null !== (o4 = i4[e5.group]) && void 0 !== o4 ? o4 : []]) : t6.push(e5), t6;
              }, []));
            }
          }, 57023: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { U: function() {
              return r;
            }, x: function() {
              return s;
            } });
            var o3 = i3(65147), n2 = i3(36115);
            function r(t5, e4) {
              let i4;
              return e4 || (e4 = n2.T.defaultOptions.controls), (0, o3.isString)(t5) ? i4 = s(t5, e4) || { name: t5, command: t5, tooltip: t5 } : (i4 = { name: "empty", ...(0, o3.ConfigFlatten)(t5) }, void 0 !== e4[i4.name] && (i4 = { ...(0, o3.ConfigFlatten)(e4[i4.name]), ...(0, o3.ConfigFlatten)(i4) })), i4;
            }
            function s(t5, e4) {
              var i4;
              let [n3, r2] = t5.split(/\./), s2 = e4;
              null != r2 ? void 0 !== e4[n3] && (s2 = e4[n3]) : r2 = n3;
              const a = null === (i4 = s2[r2]) || void 0 === i4 ? void 0 : i4.list;
              return s2[r2] ? { name: r2, ...(0, o3.ConfigFlatten)(s2[r2]), list: (0, o3.isArray)(a) ? a.reduce((t6, e5) => (t6[e5] = e5, t6), {}) : a } : void 0;
            }
          }, 37424: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return a;
            } });
            var o3 = i3(37923), n2 = i3(97369), r = i3(57023), s = i3(36115);
            function a(t5, e4) {
              return ((0, o3.c)(t5) ? t5 : (0, n2.keys)(t5, false).map((e5) => (0, n2.ConfigProto)({ name: e5 }, t5[e5] || {}))).map((t6) => (0, r.U)(t6, e4 || s.T.defaultOptions.controls));
            }
          }, 931: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { I: function() {
              return r;
            } }), i3(17352);
            var o3 = i3(65147), n2 = i3(38322);
            class r {
              static getIcon(t5) {
                return /<svg/i.test(t5) ? t5 : r.icons[t5] || r.icons[t5.replace(/-/g, "_")] || r.icons[t5.replace(/_/g, "-")] || r.icons[(0, o3.camelCase)(t5)] || r.icons[(0, o3.kebabCase)(t5)] || r.icons[t5.toLowerCase()];
              }
              static exists(t5) {
                return void 0 !== this.getIcon(t5);
              }
              static get(t5, e4 = "<span></span>") {
                return this.getIcon(t5) || e4;
              }
              static set(t5, e4) {
                return this.icons[t5.replace("_", "-")] = e4, this;
              }
              static makeIcon(t5, e4) {
                var i4, o4, s, a;
                if (!e4) return;
                let l;
                const { name: c, iconURL: d, fill: u } = e4, h = c.replace(/[^a-zA-Z0-9]/g, "_");
                let p;
                /<svg/.test(c) || (p = null === (o4 = (i4 = t5.o).getIcon) || void 0 === o4 ? void 0 : o4.call(i4, c, h));
                const f = `${c}${d}${u}${null != p ? p : ""}`;
                if (t5.o.cache && this.__cache.has(f)) return null === (s = this.__cache.get(f)) || void 0 === s ? void 0 : s.cloneNode(true);
                if (d) l = t5.c.span(), (0, n2.A)(l, "backgroundImage", "url(" + d.replace("{basePath}", (null == t5 ? void 0 : t5.basePath) || "") + ")");
                else {
                  const e5 = p || r.get(c, "") || (null === (a = t5.o.extraIcons) || void 0 === a ? void 0 : a[c]);
                  e5 && (l = t5.c.fromHTML(e5.trim()), /^<svg/i.test(c) || l.classList.add("jodit-icon_" + h));
                }
                return l && (l.classList.add("jodit-icon"), l.style.fill = u, t5.o.cache && this.__cache.set(f, l.cloneNode(true))), l;
              }
            }
            r.icons = {}, r.__cache = /* @__PURE__ */ new Map();
          }, 53048: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $6: function() {
              return r.$6;
            }, $n: function() {
              return o3.$n;
            }, CP: function() {
              return s.CP;
            }, D$: function() {
              return n2.D;
            }, F0: function() {
              return r.F0;
            }, In: function() {
              return a.I;
            }, SB: function() {
              return o3.SB;
            }, Ue: function() {
              return s.Ue;
            }, XV: function() {
              return r.XV;
            }, Yh: function() {
              return r.Yh;
            }, bk: function() {
              return s.bk;
            }, cY: function() {
              return r.cY;
            }, lD: function() {
              return o3.lD;
            }, nE: function() {
              return r.nE;
            }, ss: function() {
              return o3.ss;
            }, tS: function() {
              return r.tS;
            }, ue: function() {
              return o3.ue;
            }, z2: function() {
              return c.z;
            }, z4: function() {
              return s.z4;
            }, zD: function() {
              return l.z;
            } });
            var o3 = i3(35265), n2 = i3(29780), r = i3(20703), s = i3(29012), a = i3(931), l = i3(96369), c = i3(92227);
          }, 96369: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return o3.z;
            } });
            var o3 = i3(80071);
          }, 80071: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return h;
            } });
            var o3 = i3(31635), n2 = i3(37474), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = (i3(28712), i3(29780)), d = i3(6455);
            const u = ["escape", "cut", "delete", "backSpaceAfterDelete", "beforeCommandDelete"];
            class h extends d.U {
              className() {
                return "Popup";
              }
              appendChildToContainer(t5) {
                this.getElm("content").appendChild(t5);
              }
              updateParentElement(t5) {
                return t5 !== this && n2.u.isInstanceOf(t5, h) && (this.__childrenPopups.forEach((e4) => {
                  !t5.closest(e4) && e4.isOpened && e4.close();
                }), this.__childrenPopups.has(t5) || this.j.e.on(t5, "beforeClose", () => {
                  this.__childrenPopups.delete(t5);
                }), this.__childrenPopups.add(t5)), super.updateParentElement(t5);
              }
              setContent(t5) {
                if (this.allChildren.length) throw new Error("Remove children");
                if (n2.u.isInstanceOf(t5, c.D)) this.append(t5);
                else {
                  const e4 = (0, l.isString)(t5) ? this.j.c.fromHTML(t5) : t5;
                  this.appendChildToContainer(e4);
                }
                return this.updatePosition(), this;
              }
              open(t5, e4 = false, i4) {
                if ((0, l.markOwner)(this.jodit, this.container), this.container.classList.add(`jodit_theme_${this.jodit.o.theme}`), this.__calculateZIndex(), this.isOpened = true, this.__addGlobalListeners(), this.__targetBound = e4 ? this.getKeepBound(t5) : t5, i4) i4.appendChild(this.container);
                else {
                  const t6 = (0, a.My)(this.jodit, h);
                  i4 !== this.container.parentElement && t6.appendChild(this.container);
                }
                return this.updatePosition(), this.j.e.fire(this, "afterOpen"), this.j.e.fire("afterOpenPopup", this), this;
              }
              __calculateZIndex() {
                if (this.container.style.zIndex) return;
                const t5 = (t6) => {
                  const e5 = t6.container.style.zIndex || t6.o.zIndex;
                  return !!e5 && (this.setZIndex(1 + parseInt(e5.toString(), 10)), true);
                }, { j: e4 } = this;
                if (t5(e4)) return;
                let i4 = this.parentElement;
                for (; i4; ) {
                  if (t5(i4.j)) return;
                  if (i4.container.style.zIndex) return void this.setZIndex(1 + parseInt(i4.container.style.zIndex.toString(), 10));
                  if (!i4.parentElement && i4.container.parentElement) {
                    const t6 = c.D.closestElement(i4.container.parentElement, c.D);
                    if (t6) {
                      i4 = t6;
                      continue;
                    }
                  }
                  i4 = i4.parentElement;
                }
              }
              getKeepBound(t5) {
                const e4 = t5(), i4 = this.od.elementFromPoint(e4.left, e4.top);
                if (!i4) return t5;
                const o4 = s.J.isHTMLElement(i4) ? i4 : i4.parentElement, n3 = (0, l.position)(o4, this.j);
                return () => {
                  const e5 = t5(), i5 = (0, l.position)(o4, this.j);
                  return { ...e5, top: e5.top + (i5.top - n3.top), left: e5.left + (i5.left - n3.left) };
                };
              }
              updatePosition() {
                if (!this.isOpened) return this;
                const [t5, e4] = this.__calculatePosition(this.__targetBound(), this.viewBound(), (0, l.position)(this.container, this.j));
                return this.setMod("strategy", e4), (0, l.css)(this.container, { left: t5.left, top: t5.top }), this.__childrenPopups.forEach((t6) => t6.updatePosition()), this;
              }
              __throttleUpdatePosition() {
                this.updatePosition();
              }
              __calculatePosition(t5, e4, i4, o4 = this.strategy) {
                const n3 = { left: t5.left, right: t5.left - (i4.width - t5.width) }, r2 = { bottom: t5.top + t5.height, top: t5.top - i4.height }, s2 = Object.keys(n3).reduce((t6, e5) => t6.concat(Object.keys(r2).map((t7) => `${e5}${(0, l.ucfirst)(t7)}`)), []), a2 = (t6) => {
                  const [e5, o5] = (0, l.kebabCase)(t6).split("-");
                  return { left: n3[e5], top: r2[o5], width: i4.width, height: i4.height };
                }, c2 = (t6) => {
                  let e5 = null;
                  return e5 = h.boxInView(a2(o4), t6) ? o4 : s2.find((e6) => {
                    if (h.boxInView(a2(e6), t6)) return e6;
                  }) || null, e5;
                };
                let d2 = c2((0, l.position)(this.j.container, this.j));
                return d2 && h.boxInView(a2(d2), e4) || (d2 = c2(e4) || d2 || o4), [a2(d2), d2];
              }
              static boxInView(t5, e4) {
                return !(-2 > t5.top - e4.top || -2 > t5.left - e4.left || -2 > e4.top + e4.height - (t5.top + t5.height) || -2 > e4.left + e4.width - (t5.left + t5.width));
              }
              close() {
                return this.isOpened ? (this.isOpened = false, this.__childrenPopups.forEach((t5) => t5.close()), this.j.e.fire(this, "beforeClose"), this.j.e.fire("beforePopupClose", this), this.__removeGlobalListeners(), s.J.safeRemove(this.container), this) : this;
              }
              __closeOnOutsideClick(t5) {
                this.isOpened && !this.isOwnClick(t5) && this.close();
              }
              isOwnClick(t5) {
                if (!t5.target) return false;
                const e4 = c.D.closestElement(t5.target, h);
                return Boolean(e4 && (this === e4 || e4.closest(this)));
              }
              __addGlobalListeners() {
                const t5 = this.__throttleUpdatePosition, e4 = this.ow;
                a.RR.on("closeAllPopups", this.close), this.smart && this.j.e.on(u, this.close).on("mousedown touchstart", this.__closeOnOutsideClick).on(e4, "mousedown touchstart", this.__closeOnOutsideClick), this.j.e.on("closeAllPopups", this.close).on("resize", t5).on(this.container, "scroll mousewheel", t5).on(e4, "scroll", t5).on(e4, "resize", t5), s.J.up(this.j.container, (e5) => {
                  e5 && this.j.e.on(e5, "scroll mousewheel", t5);
                });
              }
              __removeGlobalListeners() {
                const t5 = this.__throttleUpdatePosition, e4 = this.ow;
                a.RR.off("closeAllPopups", this.close), this.smart && this.j.e.off(u, this.close).off("mousedown touchstart", this.__closeOnOutsideClick).off(e4, "mousedown touchstart", this.__closeOnOutsideClick), this.j.e.off("closeAllPopups", this.close).off("resize", t5).off(this.container, "scroll mousewheel", t5).off(e4, "scroll", t5).off(e4, "resize", t5), this.j.container.isConnected && s.J.up(this.j.container, (e5) => {
                  e5 && this.j.e.off(e5, "scroll mousewheel", t5);
                });
              }
              setZIndex(t5) {
                this.container.style.zIndex = t5.toString();
              }
              constructor(t5, e4 = true) {
                super(t5), this.smart = e4, this.isOpened = false, this.strategy = "leftBottom", this.viewBound = () => ({ left: 0, top: 0, width: this.ow.innerWidth, height: this.ow.innerHeight }), this.__childrenPopups = /* @__PURE__ */ new Set(), (0, l.attr)(this.container, "role", "popup");
              }
              render() {
                return '<div>\n			<div class="&__content"></div>\n		</div>';
              }
              destruct() {
                return this.close(), super.destruct();
              }
            }
            (0, o3.Cg)([r.autobind], h.prototype, "updatePosition", null), (0, o3.Cg)([(0, r.throttle)(10), r.autobind], h.prototype, "__throttleUpdatePosition", null), (0, o3.Cg)([r.autobind], h.prototype, "close", null), (0, o3.Cg)([r.autobind], h.prototype, "__closeOnOutsideClick", null);
          }, 92227: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(29780);
            class r extends n2.D {
              className() {
                return "ProgressBar";
              }
              render() {
                return "<div><div></div></div>";
              }
              show() {
                return (this.j.workplace || this.j.container).appendChild(this.container), this;
              }
              hide() {
                return o3.J.safeRemove(this.container), this;
              }
              progress(t5) {
                return this.container.style.width = t5.toFixed(2) + "%", this;
              }
              destruct() {
                return this.hide(), super.destruct();
              }
            }
          }, 14961: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { T: function() {
              return f;
            } });
            var o3 = i3(31635), n2 = i3(64567), r = i3(26318), s = i3(66927), a = i3(55186), l = i3(32709), c = i3(98253), d = i3(58720), u = i3(39611), h = i3(77782), p = i3(8809);
            class f extends h.S {
              get toolbarContainer() {
                return this.o.fullsize || !(0, c.K)(this.o.toolbar) && !a.J.isHTMLElement(this.o.toolbar) ? (this.o.toolbar && a.J.appendChildFirst(this.container, this.__defaultToolbarContainer), this.__defaultToolbarContainer) : (0, d.tI)(this.o.toolbar, this.o.shadowRoot || this.od);
              }
              setPanel(t5) {
                this.o.toolbar = t5, this.buildToolbar();
              }
              buildToolbar() {
                var t5;
                if (!this.o.toolbar) return;
                const e4 = this.o.buttons ? (0, l.uM)(this.o.buttons) : [];
                null === (t5 = this.toolbar) || void 0 === t5 || t5.setRemoveButtons(this.o.removeButtons).build(e4.concat(this.o.extraButtons || [])).appendTo(this.toolbarContainer);
              }
              getRegisteredButtonGroups() {
                return this.groupToButtons;
              }
              registerButton(t5) {
                var e4;
                this.registeredButtons.add(t5);
                const i4 = null !== (e4 = t5.group) && void 0 !== e4 ? e4 : "other";
                return this.groupToButtons[i4] || (this.groupToButtons[i4] = []), null != t5.position ? this.groupToButtons[i4][t5.position] = t5.name : this.groupToButtons[i4].push(t5.name), this;
              }
              unregisterButton(t5) {
                var e4;
                this.registeredButtons.delete(t5);
                const i4 = null !== (e4 = t5.group) && void 0 !== e4 ? e4 : "other", o4 = this.groupToButtons[i4];
                if (o4) {
                  const e5 = o4.indexOf(t5.name);
                  -1 !== e5 && o4.splice(e5, 1), 0 === o4.length && delete this.groupToButtons[i4];
                }
                return this;
              }
              beforeToolbarBuild(t5) {
                if (Object.keys(this.groupToButtons).length) return t5.map((t6) => (0, u.i)(t6) && t6.group && this.groupToButtons[t6.group] ? { group: t6.group, buttons: [...t6.buttons, ...this.groupToButtons[t6.group]] } : t6);
              }
              constructor(t5, e4 = false) {
                super(t5, e4), this.toolbar = (0, p.$K)(this), this.__defaultToolbarContainer = this.c.div("jodit-toolbar__box"), this.registeredButtons = /* @__PURE__ */ new Set(), this.groupToButtons = {}, this.isJodit = false, this.isJodit = e4, this.e.on("beforeToolbarBuild", this.beforeToolbarBuild);
              }
              destruct() {
                this.isDestructed || (this.setStatus(n2.f.beforeDestruct), this.e.off("beforeToolbarBuild", this.beforeToolbarBuild), this.toolbar.destruct(), this.toolbar = void 0, super.destruct());
              }
            }
            (0, o3.Cg)([(0, s.w)(":rebuildToolbar")], f.prototype, "buildToolbar", null), (0, o3.Cg)([r.Ay], f.prototype, "beforeToolbarBuild", null);
          }, 77782: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { S: function() {
              return y;
            } });
            var o3, n2 = i3(31635), r = i3(77753), s = i3(37474), a = i3(64567), l = i3(17352), c = i3(92852), d = i3(87875), u = i3(1963), h = i3(71151), p = i3(71842), f = i3(50025), g = i3(56298), m = i3(65147), b = i3(24834), _ = i3(87906), v = i3(75758), x = i3(92227), w = i3(91902);
            let y = o3 = class extends s.u {
              get basePath() {
                return this.o.basePath ? this.o.basePath : l.BASE_PATH;
              }
              get defaultTimeout() {
                return (0, m.isVoid)(this.o.defaultTimeout) ? 100 : this.o.defaultTimeout;
              }
              get buffer() {
                return b.w.makeStorage();
              }
              get message() {
                return this.getMessageModule(this.container);
              }
              getMessageModule(t5) {
                return new w.N(this, t5);
              }
              get storage() {
                return b.w.makeStorage(true, this.id);
              }
              get c() {
                return this.create;
              }
              get container() {
                return this.__container;
              }
              set container(t5) {
                this.__container = t5;
              }
              get e() {
                return this.events;
              }
              get progressbar() {
                return new x.z(this);
              }
              get options() {
                return this.__options;
              }
              set options(t5) {
                this.__options = t5;
              }
              get o() {
                return this.options;
              }
              i18n(t5, ...e4) {
                return (0, m.i18n)(t5, e4, this.options);
              }
              toggleFullSize(t5) {
                void 0 === t5 && (t5 = !this.__isFullSize), t5 !== this.__isFullSize && (this.__isFullSize = t5, this.e.fire("toggleFullSize", t5));
              }
              get isLocked() {
                return "" !== this.__whoLocked;
              }
              lock(t5 = "any") {
                return !this.isLocked && (this.__whoLocked = t5, true);
              }
              unlock() {
                return !!this.isLocked && (this.__whoLocked = "", true);
              }
              get isFullSize() {
                return this.__isFullSize;
              }
              getVersion() {
                return o3.version;
              }
              static getVersion() {
                return o3.version;
              }
              initOptions(t5) {
                this.options = (0, m.ConfigProto)(t5 || {}, (0, m.ConfigProto)(this.options || {}, o3.defaultOptions));
              }
              initOwners() {
                var t5;
                this.ownerWindow = null !== (t5 = this.o.ownerWindow) && void 0 !== t5 ? t5 : window;
              }
              attachEvents(t5) {
                if (!t5) return;
                const e4 = null == t5 ? void 0 : t5.events;
                e4 && Object.keys(e4).forEach((t6) => this.e.on(t6, e4[t6]));
              }
              constructor(t5, e4 = false) {
                super(), this.isJodit = e4, this.isView = true, this.parent = null, this.mods = {}, this.components = /* @__PURE__ */ new Set(), this.OPTIONS = o3.defaultOptions, this.__isFullSize = false, this.__whoLocked = "", this.isLockedNotBy = (t6) => this.isLocked && this.__whoLocked !== t6, this.__modulesInstances = /* @__PURE__ */ new Map(), this.id = (/* @__PURE__ */ new Date()).getTime().toString(), this.initOptions(t5), this.initOwners(), this.events = new f.bk(this.od), this.create = new c.X(this.od), this.container = this.c.div(`jodit ${this.componentName}`);
              }
              getInstance(t5, e4) {
                const i4 = (0, m.isFunction)(t5) ? t5.prototype.className() : t5, o4 = this.e.fire((0, m.camelCase)("getInstance_" + i4), e4);
                if (o4) return o4;
                const n3 = (0, m.isFunction)(t5) ? t5 : g.av[i4], s2 = this.__modulesInstances;
                if (!(0, m.isFunction)(n3)) throw (0, m.error)("Need real module name");
                if (!s2.has(i4)) {
                  const t6 = n3.prototype instanceof r.vG ? new n3(this, e4) : new n3(e4);
                  this.components.add(t6), s2.set(i4, t6);
                }
                return s2.get(i4);
              }
              addDisclaimer(t5) {
                this.container.appendChild(t5);
              }
              beforeDestruct() {
                this.e.fire(a.f.beforeDestruct, this), this.components.forEach((t5) => {
                  (0, m.isDestructable)(t5) && !t5.isInDestruct && t5.destruct();
                }), this.components.clear();
              }
              destruct() {
                this.isDestructed || (this.progressbar.destruct(), this.message.destruct(), this.events && (this.events.destruct(), this.events = void 0), this.buffer && this.buffer.clear(), p.J.safeRemove(this.container), super.destruct());
              }
            };
            y.ES = l.ES, y.version = l.APP_VERSION, y.esNext = l.IS_ES_NEXT, y.esModern = l.IS_ES_MODERN, (0, n2.Cg)([d.PP], y.prototype, "buffer", null), (0, n2.Cg)([d.PP], y.prototype, "message", null), (0, n2.Cg)([d.PP], y.prototype, "storage", null), (0, n2.Cg)([d.PP], y.prototype, "c", null), (0, n2.Cg)([d.PP], y.prototype, "e", null), (0, n2.Cg)([d.PP], y.prototype, "progressbar", null), (0, n2.Cg)([(0, h.A)(a.f.beforeDestruct)], y.prototype, "beforeDestruct", null), y = o3 = (0, n2.Cg)([(0, u.C)(v.K, _.O)], y), y.defaultOptions = { extraButtons: [], cache: true, textIcons: false, namespace: "", removeButtons: [], zIndex: 100002, defaultTimeout: 100, fullsize: false, showTooltip: true, useNativeTooltip: false, buttons: [], globalFullSize: true, language: "auto" };
          }, 46173: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { x: function() {
              return g;
            } });
            var o3, n2 = i3(31635), r = i3(17352), s = i3(22664), a = i3(56298), l = i3(65147), c = i3(53883), d = i3(58597), u = i3(37435), h = i3(36115);
            const p = "data-jodit-default-style-display", f = "data-jodit-default-classes";
            let g = o3 = class extends u.ViewWithToolbar {
              className() {
                return "Jodit";
              }
              waitForReady() {
                return this.isReady ? Promise.resolve(this) : this.async.promise((t5) => {
                  this.hookStatus("ready", () => t5(this));
                });
              }
              static get ready() {
                return new Promise((t5) => {
                  a.RR.on("oditready", t5);
                });
              }
              get text() {
                if (this.editor) return this.editor.innerText || "";
                const t5 = this.createInside.div();
                return t5.innerHTML = this.getElementValue(), t5.innerText || "";
              }
              get defaultTimeout() {
                return (0, l.isNumber)(this.o.defaultTimeout) ? this.o.defaultTimeout : h.T.defaultOptions.defaultTimeout;
              }
              static atom(t5) {
                return (0, l.markAsAtomic)(t5);
              }
              static make(t5, e4) {
                return new this(t5, e4);
              }
              static isJoditAssigned(t5) {
                return t5 && (0, l.isJoditObject)(t5.component) && !t5.component.isInDestruct;
              }
              static get defaultOptions() {
                return h.T.defaultOptions;
              }
              get createInside() {
                return new u.Create(() => this.ed, this.o.createAttributes);
              }
              __setPlaceField(t5, e4) {
                this.currentPlace || (this.currentPlace = {}, this.places = [this.currentPlace]), this.currentPlace[t5] = e4;
              }
              get element() {
                return this.currentPlace.element;
              }
              get editor() {
                return this.currentPlace.editor;
              }
              set editor(t5) {
                this.__setPlaceField("editor", t5);
              }
              get container() {
                return this.currentPlace.container;
              }
              set container(t5) {
                this.__setPlaceField("container", t5);
              }
              get workplace() {
                return this.currentPlace.workplace;
              }
              get message() {
                return this.getMessageModule(this.workplace);
              }
              get statusbar() {
                return this.currentPlace.statusbar;
              }
              get iframe() {
                return this.currentPlace.iframe;
              }
              set iframe(t5) {
                this.__setPlaceField("iframe", t5);
              }
              get history() {
                return this.currentPlace.history;
              }
              get editorWindow() {
                return this.currentPlace.editorWindow;
              }
              set editorWindow(t5) {
                this.__setPlaceField("editorWindow", t5);
              }
              get ew() {
                return this.editorWindow;
              }
              get editorDocument() {
                return this.currentPlace.editorWindow.document;
              }
              get ed() {
                return this.editorDocument;
              }
              get options() {
                return this.currentPlace.options;
              }
              set options(t5) {
                this.__setPlaceField("options", t5);
              }
              get s() {
                return this.selection;
              }
              get uploader() {
                return this.getInstance("Uploader", this.o.uploader);
              }
              get filebrowser() {
                const t5 = this, e4 = (0, l.ConfigProto)({ defaultTimeout: t5.defaultTimeout, uploader: t5.o.uploader, language: t5.o.language, license: t5.o.license, theme: t5.o.theme, shadowRoot: t5.o.shadowRoot, defaultCallback(e5) {
                  e5.files && e5.files.length && e5.files.forEach((i4, o4) => {
                    const n3 = e5.baseurl + i4;
                    e5.isImages && e5.isImages[o4] ? t5.s.insertImage(n3, null, t5.o.imageDefaultWidth) : t5.s.insertNode(t5.createInside.fromHTML(`<a href='${n3}' title='${n3}'>${n3}</a>`));
                  });
                } }, this.o.filebrowser);
                return t5.getInstance("FileBrowser", e4);
              }
              get mode() {
                return this.__mode;
              }
              set mode(t5) {
                this.setMode(t5);
              }
              getNativeEditorValue() {
                const t5 = this.e.fire("beforeGetNativeEditorValue");
                return (0, l.isString)(t5) ? t5 : this.editor ? this.editor.innerHTML : this.getElementValue();
              }
              setNativeEditorValue(t5) {
                const e4 = { value: t5 };
                this.e.fire("beforeSetNativeEditorValue", e4) || this.editor && (this.editor.innerHTML = e4.value);
              }
              get value() {
                return this.getEditorValue();
              }
              set value(t5) {
                this.setEditorValue(t5), this.history.__processChanges();
              }
              synchronizeValues() {
                this.__imdSynchronizeValues();
              }
              __imdSynchronizeValues() {
                this.setEditorValue();
              }
              getEditorValue(t5 = true, e4) {
                let i4;
                if (i4 = this.e.fire("beforeGetValueFromEditor", e4), void 0 !== i4) return i4;
                i4 = this.getNativeEditorValue().replace(r.INVISIBLE_SPACE_REG_EXP(), ""), t5 && (i4 = i4.replace(/<span[^>]+id="jodit-selection_marker_[^>]+><\/span>/g, "")), "<br>" === i4 && (i4 = "");
                const o4 = { value: i4 };
                return this.e.fire("afterGetValueFromEditor", o4, e4), o4.value;
              }
              setEditorValue(t5) {
                const e4 = this.e.fire("beforeSetValueToEditor", t5);
                if (false === e4) return;
                if ((0, l.isString)(e4) && (t5 = e4), !this.editor) return void (void 0 !== t5 && this.__setElementValue(t5));
                if (!(0, l.isString)(t5) && !(0, l.isVoid)(t5)) throw (0, l.error)("value must be string");
                (0, l.isVoid)(t5) || this.getNativeEditorValue() === t5 || this.setNativeEditorValue(t5), this.e.fire("postProcessSetEditorValue");
                const i4 = this.getElementValue(), o4 = this.getEditorValue();
                if (!this.__isSilentChange && i4 !== o4 && r.SAFE_COUNT_CHANGE_CALL > this.__callChangeCount) {
                  this.__setElementValue(o4), this.__callChangeCount += 1;
                  try {
                    this.history.__upTick(), this.e.fire("change", o4, i4), this.e.fire(this.history, "change", o4, i4);
                  } finally {
                    this.__callChangeCount = 0;
                  }
                }
              }
              updateElementValue() {
                this.__setElementValue(this.getEditorValue());
              }
              getElementValue() {
                return void 0 !== this.element.value ? this.element.value : this.element.innerHTML;
              }
              __setElementValue(t5) {
                if (!(0, l.isString)(t5)) throw (0, l.error)("value must be string");
                if (this.element !== this.container && t5 !== this.getElementValue()) {
                  const e4 = { value: t5 }, i4 = this.e.fire("beforeSetElementValue", e4);
                  (0, l.callPromise)(i4, () => {
                    void 0 !== this.element.value ? this.element.value = e4.value : this.element.innerHTML = e4.value, this.e.fire("afterSetElementValue", e4);
                  });
                }
              }
              registerCommand(t5, e4, i4) {
                const o4 = t5.toLowerCase();
                let n3 = this.commands.get(o4);
                if (void 0 === n3 && (n3 = [], this.commands.set(o4, n3)), n3.push(e4), !(0, l.isFunction)(e4)) {
                  const n4 = this.o.commandToHotkeys[o4] || this.o.commandToHotkeys[t5] || e4.hotkeys;
                  n4 && this.registerHotkeyToCommand(n4, o4, null == i4 ? void 0 : i4.stopPropagation);
                }
                return this;
              }
              registerHotkeyToCommand(t5, e4, i4 = true) {
                const o4 = (0, l.asArray)(t5).map(l.normalizeKeyAliases).map((t6) => t6 + ".hotkey").join(" ");
                this.e.off(o4).on(o4, (t6, o5) => (o5 && (o5.shouldStop = null == i4 || i4), this.execCommand(e4)));
              }
              execCommand(t5, e4, i4, ...o4) {
                if (this.s.isFocused() || this.s.focus(), this.o.readonly && !this.o.allowCommandsInReadOnly.includes(t5)) return;
                let n3;
                if (t5 = t5.toLowerCase(), n3 = this.e.fire(`beforeCommand${(0, l.ucfirst)(t5)}`, e4, i4, ...o4), false !== n3 && (n3 = this.e.fire("beforeCommand", t5, e4, i4, ...o4)), false !== n3 && (n3 = this.__execCustomCommands(t5, e4, i4, ...o4)), false !== n3) {
                  this.s.focus();
                  try {
                    n3 = this.nativeExecCommand(t5, e4, i4);
                  } catch (t6) {
                    if (!r.IS_PROD) throw t6;
                  }
                }
                return this.e.fire("afterCommand", t5, e4, i4), this.__imdSynchronizeValues(), n3;
              }
              nativeExecCommand(t5, e4, i4) {
                this.__isSilentChange = true;
                try {
                  return this.ed.execCommand(t5, e4, i4);
                } finally {
                  this.__isSilentChange = false;
                }
              }
              __execCustomCommands(t5, e4, i4, ...o4) {
                t5 = t5.toLowerCase();
                const n3 = this.commands.get(t5);
                if (void 0 !== n3) {
                  let r2;
                  return n3.forEach((n4) => {
                    let s2;
                    s2 = (0, l.isFunction)(n4) ? n4 : n4.exec;
                    const a2 = s2.call(this, t5, e4, i4, ...o4);
                    void 0 !== a2 && (r2 = a2);
                  }), r2;
                }
              }
              lock(t5 = "any") {
                return !!super.lock(t5) && (this.__selectionLocked = this.s.save(), this.s.clear(), this.editor.classList.add("jodit_lock"), this.e.fire("lock", true), true);
              }
              unlock() {
                return !!super.unlock() && (this.editor.classList.remove("jodit_lock"), this.__selectionLocked && this.s.restore(), this.e.fire("lock", false), true);
              }
              getMode() {
                return this.mode;
              }
              isEditorMode() {
                return this.getRealMode() === r.MODE_WYSIWYG;
              }
              getRealMode() {
                if (this.getMode() !== r.MODE_SPLIT) return this.getMode();
                const t5 = this.od.activeElement;
                return t5 && (t5 === this.iframe || u.Dom.isOrContains(this.editor, t5) || u.Dom.isOrContains(this.toolbar.container, t5)) ? r.MODE_WYSIWYG : r.MODE_SOURCE;
              }
              setMode(t5) {
                const e4 = this.getMode(), i4 = { mode: parseInt(t5.toString(), 10) }, o4 = ["jodit-wysiwyg_mode", "jodit-source__mode", "jodit_split_mode"];
                false !== this.e.fire("beforeSetMode", i4) && (this.__mode = [r.MODE_SOURCE, r.MODE_WYSIWYG, r.MODE_SPLIT].includes(i4.mode) ? i4.mode : r.MODE_WYSIWYG, this.o.saveModeInStorage && this.storage.set("jodit_default_mode", this.mode), o4.forEach((t6) => {
                  this.container.classList.remove(t6);
                }), this.container.classList.add(o4[this.mode - 1]), e4 !== this.getMode() && this.e.fire("afterSetMode"));
              }
              toggleMode() {
                let t5 = this.getMode();
                [r.MODE_SOURCE, r.MODE_WYSIWYG, this.o.useSplitMode ? r.MODE_SPLIT : 9].includes(t5 + 1) ? t5 += 1 : t5 = r.MODE_WYSIWYG, this.setMode(t5);
              }
              setDisabled(t5) {
                this.o.disabled = t5;
                const e4 = this.__wasReadOnly;
                this.setReadOnly(t5 || e4), this.__wasReadOnly = e4, this.editor && (this.editor.setAttribute("aria-disabled", t5.toString()), this.container.classList.toggle("jodit_disabled", t5), this.e.fire("disabled", t5));
              }
              getDisabled() {
                return this.o.disabled;
              }
              setReadOnly(t5) {
                this.__wasReadOnly !== t5 && (this.__wasReadOnly = t5, this.o.readonly = t5, t5 ? this.editor && this.editor.removeAttribute("contenteditable") : this.editor && this.editor.setAttribute("contenteditable", "true"), this.e && this.e.fire("readonly", t5));
              }
              getReadOnly() {
                return this.o.readonly;
              }
              focus() {
                this.getMode() !== r.MODE_SOURCE && this.s.focus();
              }
              get isFocused() {
                return this.s.isFocused();
              }
              beforeInitHook() {
              }
              afterInitHook() {
              }
              initOptions(t5) {
                this.options = (0, l.ConfigProto)(t5 || {}, h.T.defaultOptions);
              }
              initOwners() {
                this.editorWindow = this.o.ownerWindow, this.ownerWindow = this.o.ownerWindow;
              }
              constructor(t5, e4) {
                super(e4, true), this.isJodit = true, this.commands = /* @__PURE__ */ new Map(), this.__selectionLocked = null, this.__wasReadOnly = false, this.editorIsActive = false, this.__mode = r.MODE_WYSIWYG, this.__callChangeCount = 0, this.__isSilentChange = false, this.__elementToPlace = /* @__PURE__ */ new Map();
                try {
                  const e5 = (0, l.resolveElement)(t5, this.o.shadowRoot || this.od);
                  if (o3.isJoditAssigned(e5)) return e5.component;
                } catch (t6) {
                  throw this.destruct(), t6;
                }
                this.setStatus(u.STATUSES.beforeInit), this.id = (0, l.attr)((0, l.resolveElement)(t5, this.o.shadowRoot || this.od), "id") || (/* @__PURE__ */ new Date()).getTime().toString(), a.VF[this.id] = this, this.attachEvents(e4), this.e.on(this.ow, "resize", () => {
                  this.e && this.e.fire("resize");
                }), this.e.on("prepareWYSIWYGEditor", this.__prepareWYSIWYGEditor), this.selection = new u.Selection(this);
                const i4 = this.beforeInitHook();
                (0, l.callPromise)(i4, () => {
                  if (this.isInDestruct) return;
                  this.e.fire("beforeInit", this), a.fg.__init(this), this.e.fire("afterPluginSystemInit", this), this.e.on("changePlace", () => {
                    this.setReadOnly(this.o.readonly), this.setDisabled(this.o.disabled);
                  }), this.places.length = 0;
                  const i5 = this.addPlace(t5, e4);
                  a.VF[this.id] = this, (0, l.callPromise)(i5, () => {
                    this.isInDestruct || (this.e && this.e.fire("afterInit", this), (0, l.callPromise)(this.afterInitHook()), this.setStatus(u.STATUSES.ready), this.e.fire("afterConstructor", this));
                  });
                });
              }
              addPlace(t5, e4) {
                const i4 = (0, l.resolveElement)(t5, this.o.shadowRoot || this.od);
                this.attachEvents(e4), i4.attributes && (0, l.toArray)(i4.attributes).forEach((t6) => {
                  const i5 = t6.name;
                  let o5 = t6.value;
                  void 0 === h.T.defaultOptions[i5] || e4 && void 0 !== e4[i5] || (-1 !== ["readonly", "disabled"].indexOf(i5) && (o5 = "" === o5 || "true" === o5), /^[0-9]+(\.)?([0-9]+)?$/.test(o5.toString()) && (o5 = Number(o5)), this.options[i5] = o5);
                });
                let o4 = this.c.div("jodit-container");
                o4.classList.add("jodit"), o4.classList.add("jodit-container"), o4.classList.add(`jodit_theme_${this.o.theme || "default"}`), m(this.o.className, o4), this.o.containerStyle && (0, l.css)(o4, this.o.containerStyle);
                const { styleValues: n3 } = this.o;
                Object.keys(n3).forEach((t6) => {
                  const e5 = (0, l.kebabCase)(t6);
                  o4.style.setProperty(`--jd-${e5}`, n3[t6]);
                }), o4.setAttribute("contenteditable", "false");
                let r2 = null;
                this.o.inline && (-1 === ["TEXTAREA", "INPUT"].indexOf(i4.nodeName) && (o4 = i4, i4.setAttribute(f, i4.className.toString()), r2 = o4.innerHTML, o4.innerHTML = ""), o4.classList.add("jodit_inline"), o4.classList.add("jodit-container")), i4 !== o4 && (i4.style.display && i4.setAttribute(p, i4.style.display), i4.style.display = "none");
                const s2 = this.c.div("jodit-workplace", { contenteditable: false });
                o4.appendChild(s2), i4.parentNode && i4 !== o4 && i4.parentNode.insertBefore(o4, i4), Object.defineProperty(i4, "component", { enumerable: false, configurable: true, value: this });
                const a2 = this.c.div("jodit-wysiwyg", { contenteditable: true, "aria-disabled": false, tabindex: this.o.tabIndex });
                s2.appendChild(a2);
                const c2 = { editor: a2, element: i4, container: o4, workplace: s2, statusbar: new u.StatusBar(this, o4), options: this.isReady ? (0, l.ConfigProto)(e4 || {}, h.T.defaultOptions) : this.options, history: new u.History(this), editorWindow: this.ow };
                this.__elementToPlace.set(a2, c2), this.setCurrentPlace(c2), this.places.push(c2), this.setNativeEditorValue(this.getElementValue());
                const d2 = this.__initEditor(r2), g2 = this.options;
                return (0, l.callPromise)(d2, () => {
                  g2.enableDragAndDropFileToEditor && g2.uploader && (g2.uploader.url || g2.uploader.insertImageAsBase64URI) && this.uploader.bind(this.editor), this.__elementToPlace.get(this.editor) || this.__elementToPlace.set(this.editor, c2), this.e.fire("afterAddPlace", c2);
                });
              }
              addDisclaimer(t5) {
                this.workplace.appendChild(t5);
              }
              setCurrentPlace(t5) {
                this.currentPlace !== t5 && (this.isEditorMode() || this.setMode(r.MODE_WYSIWYG), this.currentPlace = t5, this.buildToolbar(), this.isReady && this.e.fire("changePlace", t5));
              }
              __initEditor(t5) {
                const e4 = this.__createEditor();
                return (0, l.callPromise)(e4, () => {
                  if (this.isInDestruct) return;
                  if (this.element !== this.container) {
                    const t6 = this.getElementValue();
                    t6 !== this.getEditorValue() && this.setEditorValue(t6);
                  } else null != t5 && this.setEditorValue(t5);
                  let e5 = this.o.defaultMode;
                  if (this.o.saveModeInStorage) {
                    const t6 = this.storage.get("jodit_default_mode");
                    "string" == typeof t6 && (e5 = parseInt(t6, 10));
                  }
                  this.setMode(e5), this.o.readonly && (this.__wasReadOnly = false, this.setReadOnly(true)), this.o.disabled && this.setDisabled(true);
                  try {
                    this.ed.execCommand("defaultParagraphSeparator", false, this.o.enter.toLowerCase());
                  } catch (t6) {
                  }
                });
              }
              __createEditor() {
                const t5 = this.editor, e4 = this.e.fire("createEditor", this);
                return (0, l.callPromise)(e4, () => {
                  if (!this.isInDestruct) {
                    if ((false === e4 || (0, l.isPromise)(e4)) && u.Dom.safeRemove(t5), m(this.o.editorClassName, this.editor), this.o.style && (0, l.css)(this.editor, this.o.style), this.e.on("synchro", () => {
                      this.setEditorValue();
                    }).on("focus", () => {
                      this.editorIsActive = true;
                    }).on("blur", () => this.editorIsActive = false), this.__prepareWYSIWYGEditor(), this.o.direction) {
                      const t6 = "rtl" === this.o.direction.toLowerCase() ? "rtl" : "ltr";
                      this.container.style.direction = t6, this.container.setAttribute("dir", t6), this.toolbar.setDirection(t6);
                    }
                    this.o.triggerChangeEvent && this.e.on("change", this.async.debounce(() => {
                      this.e && this.e.fire(this.element, "change");
                    }, this.defaultTimeout));
                  }
                });
              }
              __prepareWYSIWYGEditor() {
                const { editor: t5 } = this;
                if (this.o.direction) {
                  const t6 = "rtl" === this.o.direction.toLowerCase() ? "rtl" : "ltr";
                  this.editor.style.direction = t6, this.editor.setAttribute("dir", t6);
                }
                this.e.on(t5, "mousedown touchstart focus", () => {
                  const e4 = this.__elementToPlace.get(t5);
                  e4 && this.setCurrentPlace(e4);
                }).on(t5, "compositionend", this.synchronizeValues).on(t5, "selectionchange selectionstart keydown keyup input keypress dblclick mousedown mouseup click copy cut dragstart drop dragover paste resize touchstart touchend focus blur", (t6) => {
                  if (!this.o.readonly && !this.__isSilentChange && !(t6 instanceof this.ew.KeyboardEvent && t6.isComposing) && this.e && this.e.fire) {
                    if (false === this.e.fire(t6.type, t6)) return false;
                    this.synchronizeValues();
                  }
                });
              }
              fetch(t5, e4) {
                const i4 = new c.d({ url: t5, ...e4 }, this.o.defaultAjaxOptions), o4 = () => {
                  this.e.off("beforeDestruct", o4), this.progressbar.progress(100).hide(), i4.destruct();
                };
                this.e.one("beforeDestruct", o4), this.progressbar.show().progress(30);
                const n3 = i4.send();
                return n3.finally(o4).catch(() => null), n3;
              }
              destruct() {
                if (this.isInDestruct) return;
                this.setStatus(u.STATUSES.beforeDestruct), this.__elementToPlace.clear(), this.storage.clear(), this.buffer.clear(), this.commands.clear(), this.__selectionLocked = null, this.e.off(this.ow, "resize"), this.e.off(this.ow), this.e.off(this.od), this.e.off(this.od.body);
                const t5 = this.editor ? this.getEditorValue() : "";
                this.places.forEach(({ container: e4, workplace: i4, statusbar: o4, element: n3, iframe: r2, editor: s2, history: a2 }) => {
                  if (n3) {
                    if (n3 !== e4) if (n3.hasAttribute(p)) {
                      const t6 = (0, l.attr)(n3, p);
                      t6 && (n3.style.display = t6, n3.removeAttribute(p));
                    } else n3.style.display = "";
                    else n3.hasAttribute(f) && (n3.className = (0, l.attr)(n3, f) || "", n3.removeAttribute(f));
                    n3.hasAttribute("style") && !(0, l.attr)(n3, "style") && n3.removeAttribute("style"), o4.destruct(), this.e.off(e4), this.e.off(n3), this.e.off(s2), u.Dom.safeRemove(i4), u.Dom.safeRemove(s2), e4 !== n3 && u.Dom.safeRemove(e4), Object.defineProperty(n3, "component", { enumerable: false, configurable: true, value: null }), u.Dom.safeRemove(r2), e4 === n3 && (n3.innerHTML = t5), a2.destruct();
                  }
                }), this.places.length = 0, this.currentPlace = {}, delete a.VF[this.id], super.destruct();
              }
            };
            function m(t5, e4) {
              t5 && t5.split(/\s+/).forEach((t6) => e4.classList.add(t6));
            }
            g.fatMode = r.FAT_MODE, g.plugins = a.fg, g.modules = a.av, g.ns = a.av, g.decorators = {}, g.constants = r, g.instances = a.VF, g.lang = r.lang, g.core = { Plugin: u.Plugin }, (0, n2.Cg)([s.cache], g.prototype, "createInside", null), (0, n2.Cg)([s.cache], g.prototype, "message", null), (0, n2.Cg)([s.cache], g.prototype, "s", null), (0, n2.Cg)([s.cache], g.prototype, "uploader", null), (0, n2.Cg)([s.cache], g.prototype, "filebrowser", null), (0, n2.Cg)([(0, s.throttle)()], g.prototype, "synchronizeValues", null), (0, n2.Cg)([(0, s.watch)(":internalChange")], g.prototype, "updateElementValue", null), (0, n2.Cg)([s.autobind], g.prototype, "__prepareWYSIWYGEditor", null), g = o3 = (0, n2.Cg)([(0, s.derive)(d.z)], g);
          }, 74470: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(37923), n2 = i3(57741), r = i3(56014), s = i3(95461), a = i3(63837), l = i3(39386), c = i3(62327), d = i3(25090), u = i3(53113), h = i3(81321), p = i3(4679), f = i3(31927), g = i3(21195), m = i3(53414), b = i3(11012), _ = i3(87061), v = i3(3268), x = i3(97834), w = i3(86433), y = i3(28359), j = i3(68368), k = i3(25182), C = i3(44906);
            let S = {};
            S = { ar: n2, cs_cz: r, de: s, en: a, es: l, fi: c, fr: d, he: u, hu: h, id: p, it: f, ja: g, ko: b, mn: _, nl: v, pl: x, pt_br: w, ru: y, tr: j, zh_cn: k, zh_tw: C };
            const z = (t5) => t5 ? t5.default || t5 : {}, T = {};
            (0, o3.c)(z(m)) && z(m).forEach((t5, e4) => {
              T[e4] = t5;
            }), Object.keys(S).forEach((t5) => {
              const e4 = z(S[t5]);
              (0, o3.c)(e4) ? (S[t5] = {}, e4.forEach((e5, i4) => {
                S[t5][T[i4]] = e5;
              })) : S[t5] = e4;
            }), e3.A = S;
          }, 34248: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { t: function() {
              return l;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(37923), s = i3(92032), a = i3(80071);
            let l = class extends a.z {
              className() {
                return "ContextMenu";
              }
              show(t5, e4, i4) {
                const o4 = this;
                o4.clear(), (0, r.c)(i4) && (i4.forEach((t6) => {
                  if (!t6) return;
                  const e5 = (0, s.$n)(this.jodit, t6.icon || "empty", t6.title);
                  this.jodit && e5.setParentView(this.jodit), e5.setMod("context", "menu"), e5.onAction((e6) => {
                    var i5;
                    return null === (i5 = t6.exec) || void 0 === i5 || i5.call(o4, e6), o4.clear(), o4.close(), false;
                  }), this.append(e5);
                }), this.open(() => ({ left: t5, top: e4, width: 0, height: 0 }), true));
              }
            };
            l = (0, o3.Cg)([n2.s], l);
          }, 5854: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return l;
            } });
            var o3 = i3(55186), n2 = i3(82317), r = i3(69052), s = i3(92032), a = i3(58006);
            function l(t5, e4, i4, l2 = "jodit-dialog_alert") {
              (0, r.T)(e4) && (i4 = e4, e4 = void 0);
              const c = this instanceof a.l ? this : new a.l({ closeOnClickOverlay: true }), d = c.c.div(l2), u = (0, s.$n)(c, "ok", "Ok");
              return (0, n2._)(t5).forEach((t6) => {
                d.appendChild(o3.J.isNode(t6) ? t6 : c.c.fromHTML(t6));
              }), u.onAction(() => {
                i4 && (0, r.T)(i4) && false === i4(c) || c.close();
              }), c.setFooter([u]), c.open(d, e4 || "&nbsp;", true, true), u.focus(), c;
            }
          }, 23132: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { p: function() {
              return s;
            } });
            var o3 = i3(69052), n2 = i3(92032), r = i3(58006);
            function s(t5, e4, i4) {
              const s2 = this instanceof r.l ? this : new r.l({ closeOnClickOverlay: true }), a = s2.c.fromHTML('<form class="jodit-dialog_prompt"></form>'), l = s2.c.element("label");
              (0, o3.T)(e4) && (i4 = e4, e4 = void 0), l.appendChild(s2.c.fromHTML(t5)), a.appendChild(l);
              const c = (t6) => () => {
                i4 && false === i4(t6) || s2.close();
              }, d = (0, n2.$n)(s2, "cancel", "Cancel"), u = (0, n2.$n)(s2, "ok", "Yes");
              return d.onAction(c(false)), u.onAction(c(true)), s2.e.on(a, "submit", () => (c(true)(), false)), s2.setFooter([u, d]), s2.open(a, e4 || "&nbsp;", true, true), u.focus(), s2;
            }
          }, 58006: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { l: function() {
              return b;
            } });
            var o3, n2 = i3(31635), r = i3(77753), s = i3(17352), a = i3(22664), l = i3(55186), c = i3(56298), d = i3(32709), u = i3(9823), h = i3(97369), p = (i3(28712), i3(53048)), f = i3(77782), g = i3(14961), m = i3(36115);
            m.T.prototype.dialog = { namespace: "", extraButtons: [], resizable: true, draggable: true, buttons: ["dialog.close"], removeButtons: [], toolbarButtonSize: "middle", zIndex: "inherit" }, m.T.prototype.controls.dialog = { close: { icon: "cancel", exec: (t5) => {
              t5.close();
            } } };
            let b = o3 = class extends g.T {
              className() {
                return "Dialog";
              }
              get destination() {
                var t5;
                return null !== (t5 = this.o.shadowRoot) && void 0 !== t5 ? t5 : this.od.body;
              }
              setElements(t5, e4) {
                const i4 = [];
                (0, d._j)(e4).forEach((e5) => {
                  if ((0, u.cy)(e5)) {
                    const o5 = this.c.div(this.getFullElName("column"));
                    return i4.push(o5), t5.appendChild(o5), this.setElements(o5, e5);
                  }
                  let o4;
                  o4 = (0, u.Kg)(e5) ? this.c.fromHTML(e5) : (0, u.kO)(e5) ? e5.container : e5, i4.push(o4), o4.parentNode !== t5 && t5.appendChild(o4);
                }), (0, d.$r)(t5.childNodes).forEach((e5) => {
                  -1 === i4.indexOf(e5) && t5.removeChild(e5);
                });
              }
              onMouseUp() {
                (this.draggable || this.resizable) && (this.removeGlobalResizeListeners(), this.draggable = false, this.resizable = false, this.unlockSelect(), this.e && (this.removeGlobalResizeListeners(), this.e.fire(this, "endResize endMove")));
              }
              onHeaderMouseDown(t5) {
                const e4 = t5.target;
                !this.o.draggable || e4 && e4.nodeName.match(/^(INPUT|SELECT)$/) || (this.draggable = true, this.startX = t5.clientX, this.startY = t5.clientY, this.startPoint.x = (0, h.css)(this.dialog, "left"), this.startPoint.y = (0, h.css)(this.dialog, "top"), this.setMaxZIndex(), t5.cancelable && t5.preventDefault(), this.lockSelect(), this.addGlobalResizeListeners(), this.e && (this.e.fire(this, "startMove"), this.e.fire("closeAllPopups")));
              }
              onMouseMove(t5) {
                this.draggable && this.o.draggable && (this.setPosition(this.startPoint.x + t5.clientX - this.startX, this.startPoint.y + t5.clientY - this.startY), this.e && this.e.fire(this, "move", t5.clientX - this.startX, t5.clientY - this.startY), t5.stopImmediatePropagation()), this.resizable && this.o.resizable && (this.setSize(this.startPoint.w + t5.clientX - this.startX, this.startPoint.h + t5.clientY - this.startY), this.e && this.e.fire(this, "resizeDialog", t5.clientX - this.startX, t5.clientY - this.startY));
              }
              onEsc(t5) {
                if (this.o.closeOnEsc && this.isOpened && t5.key === s.KEY_ESC && true !== this.getMod("static")) {
                  const e4 = this.getMaxZIndexDialog();
                  e4 ? e4.close() : this.close(), t5.stopImmediatePropagation();
                }
              }
              onResizerMouseDown(t5) {
                this.resizable = true, this.startX = t5.clientX, this.startY = t5.clientY, this.startPoint.w = this.dialog.offsetWidth, this.startPoint.h = this.dialog.offsetHeight, this.lockSelect(), this.addGlobalResizeListeners(), this.e && this.e.fire(this, "startResize");
              }
              addGlobalResizeListeners() {
                const t5 = this;
                t5.e.on(t5.ow, "pointermove touchmove", t5.onMouseMove).on(t5.ow, "pointerup touchend", t5.onMouseUp);
              }
              removeGlobalResizeListeners() {
                const t5 = this;
                t5.e.off(t5.ow, "mousemove pointermove", t5.onMouseMove).off(t5.ow, "mouseup pointerup", t5.onMouseUp);
              }
              setSize(t5, e4) {
                return null == t5 && (t5 = this.dialog.offsetWidth), null == e4 && (e4 = this.dialog.offsetHeight), (0, h.css)(this.dialog, { width: t5, height: e4 }), this;
              }
              calcAutoSize() {
                return this.setSize("auto", "auto"), this.setSize(), this;
              }
              setPosition(t5, e4) {
                let i4 = this.ow.innerWidth / 2 - this.dialog.offsetWidth / 2, o4 = this.ow.innerHeight / 2 - this.dialog.offsetHeight / 2;
                return 0 > i4 && (i4 = 0), 0 > o4 && (o4 = 0), void 0 !== t5 && void 0 !== e4 && (this.offsetX = t5, this.offsetY = e4, this.moved = Math.abs(t5 - i4) > 100 || Math.abs(e4 - o4) > 100), this.dialog.style.left = (t5 || i4) + "px", this.dialog.style.top = (e4 || o4) + "px", this;
              }
              setHeader(t5) {
                return this.setElements(this.dialogbox_header, t5), this;
              }
              setContent(t5) {
                return this.setElements(this.dialogbox_content, t5), this;
              }
              setFooter(t5) {
                return this.setElements(this.dialogbox_footer, t5), this.setMod("footer", Boolean(t5)), this;
              }
              getZIndex() {
                return parseInt((0, h.css)(this.container, "zIndex"), 10) || 0;
              }
              getMaxZIndexDialog() {
                let t5, e4, i4 = 0, o4 = this;
                return (0, h.$$)(".jodit-dialog", this.destination).forEach((n3) => {
                  t5 = n3.component, e4 = parseInt((0, h.css)(n3, "zIndex"), 10), t5.isOpened && !isNaN(e4) && e4 > i4 && (o4 = t5, i4 = e4);
                }), o4;
              }
              setMaxZIndex() {
                if (this.getMod("static")) return;
                let t5 = 20000004, e4 = 0;
                (0, h.$$)(".jodit-dialog", this.destination).forEach((i4) => {
                  e4 = parseInt((0, h.css)(i4, "zIndex"), 10), t5 = Math.max(isNaN(e4) ? 0 : e4, t5);
                }), this.container.style.zIndex = (t5 + 1).toString();
              }
              toggleFullSize(t5) {
                (0, u.Rd)(t5) && (t5 = !this.getMod("fullsize")), this.setMod("fullsize", t5), super.toggleFullSize(t5);
              }
              open(t5, e4, i4, o4) {
                if (c.RR.fire("closeAllPopups hideHelpers"), false === this.e.fire(this, "beforeOpen")) return this;
                (0, u.Lm)(t5) && (i4 = t5), (0, u.Lm)(e4) && (o4 = e4), this.destroyAfterClose = true === i4;
                const n3 = (0, u.Lm)(t5) ? void 0 : t5, r2 = (0, u.Lm)(e4) ? void 0 : e4;
                return void 0 !== r2 && this.setHeader(r2), n3 && this.setContent(n3), this.setMod("active", true), this.isOpened = true, this.setModal(o4), this.destination.appendChild(this.container), true !== this.getMod("static") ? (this.setPosition(this.offsetX, this.offsetY), this.setMaxZIndex()) : this.container.style.removeProperty("z-index"), this.o.fullsize && this.toggleFullSize(true), this.e.fire("afterOpen", this), this;
              }
              setModal(t5) {
                return this.isModal = Boolean(t5), this.setMod("modal", this.isModal), this;
              }
              close() {
                if (this.isDestructed || !this.isOpened || true === this.getMod("static")) return this;
                const { e: t5 } = this;
                return false === t5.fire(this, "beforeClose") || false === t5.fire("beforeClose", this) || (this.setMod("active", false), this.isOpened = false, this.isFullSize && this.toggleFullSize(false), l.J.safeRemove(this.container), this.removeGlobalResizeListeners(), t5.fire(this, "afterClose"), t5.fire(this.ow, "joditCloseDialog"), this.destroyAfterClose && this.destruct()), this;
              }
              constructor(t5 = {}) {
                super(t5), this.destroyAfterClose = false, this.moved = false, this.resizable = false, this.draggable = false, this.startX = 0, this.startY = 0, this.startPoint = { x: 0, y: 0, w: 0, h: 0 }, this.lockSelect = () => {
                  this.setMod("moved", true);
                }, this.unlockSelect = () => {
                  this.setMod("moved", false);
                }, this.onResize = () => {
                  this.options && this.o.resizable && !this.moved && this.isOpened && !this.offsetX && !this.offsetY && this.setPosition();
                }, this.isModal = false, this.isOpened = false;
                const e4 = this;
                e4.options = (0, h.ConfigProto)(t5, (0, h.ConfigProto)(m.T.prototype.dialog, o3.defaultOptions)), l.J.safeRemove(e4.container);
                const i4 = this.getFullElName.bind(this);
                e4.container = this.c.fromHTML(`<div class="jodit jodit-dialog ${this.componentName}">
				<div class="${i4("overlay")}"></div>
				<div class="${this.getFullElName("panel")}">
					<div class="${i4("header")}">
						<div class="${i4("header-title")}"></div>
						<div class="${i4("header-toolbar")}"></div>
					</div>
					<div class="${i4("content")}"></div>
					<div class="${i4("footer")}"></div>
					<div class="${i4("resizer")}">${p.In.get("resize_handler")}</div>
				</div>
			</div>`), this.o.zIndex && (this.container.style.zIndex = this.o.zIndex.toString()), (0, h.attr)(e4.container, "role", "dialog"), Object.defineProperty(e4.container, "component", { value: this }), e4.setMod("theme", e4.o.theme || "default").setMod("resizable", Boolean(e4.o.resizable));
                const n3 = e4.getElm("panel"), r2 = e4.getElm("resizer"), s2 = e4.getElm("header-title"), a2 = e4.getElm("content"), d2 = e4.getElm("footer"), f2 = e4.getElm("header-toolbar");
                this.dialog = n3, this.resizer = r2, this.dialogbox_header = s2, this.dialogbox_content = a2, this.dialogbox_footer = d2, this.dialogbox_toolbar = f2, (0, h.css)(e4.dialog, { maxWidth: e4.options.maxWidth, minHeight: e4.options.minHeight, minWidth: e4.options.minWidth });
                const g2 = e4.getElm("header");
                g2 && e4.e.on(g2, "pointerdown touchstart", e4.onHeaderMouseDown), e4.e.on(e4.resizer, "mousedown touchstart", e4.onResizerMouseDown);
                const b2 = c.fg.get("fullsize");
                if ((0, u.Tn)(b2) && b2(e4), this.e.on(e4.container, "close_dialog", e4.close).on(this.ow, "keydown", this.onEsc).on(this.ow, "resize", this.onResize), this.o.closeOnClickOverlay) {
                  const t6 = e4.getElm("overlay");
                  this.e.on(t6, "click", e4.close);
                }
              }
              buildToolbar() {
                this.o.buttons && this.toolbar.build((0, d.uM)(this.o.buttons)).setMod("mode", "header").appendTo(this.dialogbox_toolbar);
              }
              destruct() {
                this.isInDestruct || (this.setStatus(r.f.beforeDestruct), this.isOpened && this.close(), this.events && (this.removeGlobalResizeListeners(), this.events.off(this.container, "close_dialog", self.close).off(this.ow, "keydown", this.onEsc).off(this.ow, "resize", this.onResize)), super.destruct());
              }
            };
            (0, n2.Cg)([a.autobind], b.prototype, "onMouseUp", null), (0, n2.Cg)([a.autobind], b.prototype, "onHeaderMouseDown", null), (0, n2.Cg)([a.autobind], b.prototype, "onMouseMove", null), (0, n2.Cg)([a.autobind], b.prototype, "onEsc", null), (0, n2.Cg)([a.autobind], b.prototype, "onResizerMouseDown", null), (0, n2.Cg)([a.autobind], b.prototype, "close", null), (0, n2.Cg)([(0, a.hook)("ready")], b.prototype, "buildToolbar", null), b = o3 = (0, n2.Cg)([a.component], b), b.defaultOptions = { ...f.S.defaultOptions, closeOnClickOverlay: false, closeOnEsc: true };
          }, 34256: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Fc: function() {
              return o3.F;
            }, XG: function() {
              return s.X;
            }, lG: function() {
              return r.l;
            }, pT: function() {
              return n2.p;
            } });
            var o3 = i3(5854), n2 = i3(23132), r = i3(58006), s = i3(91560);
          }, 91560: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return a;
            } });
            var o3 = i3(69052), n2 = i3(26150), r = i3(92032), s = i3(58006);
            function a(t5, e4, i4, a2, l) {
              const c = this instanceof s.l ? this : new s.l({ closeOnClickOverlay: true }), d = (0, r.$n)(c, "cancel", "Cancel"), u = (0, r.$n)(c, "ok", "Ok"), h = c.c.element("form", { class: "jodit-dialog_prompt" }), p = c.c.element("input", { autofocus: true, class: "jodit-input" }), f = c.c.element("label");
              (0, o3.T)(e4) && (i4 = e4, e4 = void 0), a2 && (0, n2.C)(p, "placeholder", a2), f.appendChild(c.c.text(t5)), h.appendChild(f), h.appendChild(p), d.onAction(c.close);
              const g = () => {
                i4 && (0, o3.T)(i4) && false === i4(p.value) || c.close();
              };
              return u.onAction(g), c.e.on(h, "submit", () => (g(), false)), c.setFooter([u, d]), c.open(h, e4 || "&nbsp;", true, true), p.focus(), void 0 !== l && l.length && (p.value = l, p.select()), c;
            }
          }, 49931: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(97369), r = i3(931), s = i3(77112), a = i3(83797), l = i3(97324), c = i3(31859), d = i3(62994), u = i3(53804);
            const h = "jodit-file-browser-preview", p = (t5 = "next", e4 = "right") => `<div class="${h}__navigation ${h}__navigation_arrow_${t5}">` + r.I.get("angle-" + e4) + "</a>";
            e3.A = (t5) => {
              if (!t5.o.contextMenu) return () => {
              };
              const e4 = (0, a.V)(t5);
              return (i4) => {
                const r2 = (0, d.Gq)(i4.target, t5.container);
                if (!r2) return;
                let a2 = r2;
                const f = t5.options, g = (t6) => (0, n2.attr)(a2, t6) || "";
                return t5.async.setTimeout(() => {
                  const m = (0, d.PZ)(r2, (0, s.a)(t5));
                  m && (t5.state.activeElements = [m], e4.show(i4.clientX, i4.clientY, [!("1" === g("data-is-file") || !f.editImage || !t5.dataProvider.canI("ImageResize") && !t5.dataProvider.canI("ImageCrop")) && { icon: "pencil", title: "Edit", exec: () => u.B.call(t5, g("href"), g("data-name"), g("data-path"), g("data-source")) }, !!t5.dataProvider.canI("FileRename") && { icon: "italic", title: "Rename", exec: () => {
                    t5.e.fire("fileRename.filebrowser", g("data-name"), g("data-path"), g("data-source"));
                  } }, !!t5.dataProvider.canI("FileRemove") && { icon: "bin", title: "Delete", exec: async () => {
                    try {
                      await (0, l.W)(t5, g("data-name"), g("data-source"));
                    } catch (e5) {
                      return t5.status(e5);
                    }
                    return t5.state.activeElements = [], (0, c.r)(t5).catch(t5.status);
                  } }, !!f.preview && { icon: "eye", title: "Preview", exec: () => {
                    const e5 = t5.dlg({ buttons: ["fullsize", "dialog.close"] }), i5 = t5.c.div(h, '<div class="jodit-icon_loader"></div>'), r3 = t5.c.div(h + "__box"), s2 = t5.c.fromHTML(p()), l2 = t5.c.fromHTML(p("prev", "left")), c2 = (n3) => {
                      const c3 = t5.c.element("img");
                      c3.setAttribute("src", n3);
                      const d2 = () => {
                        var n4;
                        t5.isInDestruct || (t5.e.off(c3, "load"), o3.J.detach(i5), f.showPreviewNavigation && (o3.J.prevWithClass(a2, t5.files.getFullElName("item")) && i5.appendChild(l2), o3.J.nextWithClass(a2, t5.files.getFullElName("item")) && i5.appendChild(s2)), i5.appendChild(r3), r3.appendChild(c3), e5.setPosition(), null === (n4 = null == t5 ? void 0 : t5.events) || void 0 === n4 || n4.fire("previewOpenedAndLoaded"));
                      };
                      t5.e.on(c3, "load", d2), c3.complete && d2();
                    };
                    t5.e.on([s2, l2], "click", function() {
                      if (a2 = this === s2 ? o3.J.nextWithClass(a2, t5.files.getFullElName("item")) : o3.J.prevWithClass(a2, t5.files.getFullElName("item")), !a2) throw (0, n2.error)("Need element");
                      o3.J.detach(i5), o3.J.detach(r3), i5.innerHTML = '<div class="jodit-icon_loader"></div>', c2(g("href"));
                    }), t5.e.on("beforeDestruct", () => {
                      e5.destruct();
                    }), e5.container.classList.add(h + "__dialog"), e5.setContent(i5), e5.setPosition(), e5.open(), c2(g("href")), t5.events.on("beforeDestruct", () => {
                      e5.destruct();
                    }).fire("previewOpened");
                  } }, { icon: "upload", title: "Download", exec: () => {
                    const e5 = g("href");
                    e5 && t5.ow.open(e5);
                  } }]));
                }, t5.defaultTimeout), t5.e.on("beforeClose", () => {
                  e4.close();
                }).on("beforeDestruct", () => e4.destruct()), i4.stopPropagation(), i4.preventDefault(), false;
              };
            };
          }, 77112: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { a: function() {
              return n2;
            } });
            const o3 = /* @__PURE__ */ new WeakMap(), n2 = (t5) => {
              let e4 = o3.get(t5);
              return e4 || (e4 = {}, o3.set(t5, e4)), e4;
            };
          }, 11133: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return n2;
            } });
            var o3 = i3(65147);
            class n2 {
              constructor(t5) {
                this.data = t5, Object.keys(t5).forEach((e4) => {
                  this[e4] = t5[e4];
                });
              }
              static create(t5) {
                return t5 instanceof n2 ? t5 : new n2(t5);
              }
              get path() {
                return (0, o3.normalizePath)(this.data.source.path ? this.data.source.path + "/" : "/");
              }
              get imageURL() {
                const t5 = this.time || (/* @__PURE__ */ new Date()).getTime().toString(), { thumbIsAbsolute: e4, source: i4, thumb: n3, file: r } = this.data, s = n3 || r;
                return e4 && s ? s : (0, o3.normalizeUrl)(i4.baseurl, i4.path, s || "") + "?_tmst=" + encodeURIComponent(t5);
              }
              get fileURL() {
                let { name: t5 } = this.data;
                const { file: e4, fileIsAbsolute: i4, source: n3 } = this.data;
                return void 0 !== e4 && (t5 = e4), i4 && t5 ? t5 : (0, o3.normalizeUrl)(n3.baseurl, n3.path, t5 || "");
              }
              get time() {
                const { changed: t5 } = this.data;
                return t5 && ("number" == typeof t5 ? new Date(t5).toLocaleString() : t5) || "";
              }
              get uniqueHashKey() {
                const t5 = this.data;
                let e4 = [t5.sourceName, t5.name, t5.file, this.time, t5.thumb].join("_");
                return e4 = e4.toLowerCase().replace(/[^0-9a-z\-.]/g, "-"), e4;
              }
              toJSON() {
                return this.data;
              }
            }
          }, 70265: function(t4, e3, i3) {
            "use strict";
            i3(27337);
            var o3 = i3(9823), n2 = i3(99898), r = i3(47964), s = i3(36115);
            s.T.prototype.filebrowser = { namespace: "", cache: true, extraButtons: [], filter: (t5, e4) => (e4 = e4.toLowerCase(), (0, o3.Kg)(t5) ? -1 !== t5.toLowerCase().indexOf(e4) : (0, o3.Kg)(t5.name) ? -1 !== t5.name.toLowerCase().indexOf(e4) : !(0, o3.Kg)(t5.file) || -1 !== t5.file.toLowerCase().indexOf(e4)), sortBy: "changed-desc", sort(t5, e4, i4) {
              const [r2, s2] = i4.toLowerCase().split("-"), a = "asc" === s2, l = (t6, e5) => e5 > t6 ? a ? -1 : 1 : t6 > e5 ? a ? 1 : -1 : 0;
              if ((0, o3.Kg)(t5)) return l(t5.toLowerCase(), e4.toLowerCase());
              if (void 0 === t5[r2] || "name" === r2) return (0, o3.Kg)(t5.name) ? l(t5.name.toLowerCase(), e4.name.toLowerCase()) : (0, o3.Kg)(t5.file) ? l(t5.file.toLowerCase(), e4.file.toLowerCase()) : 0;
              switch (r2) {
                case "changed": {
                  const i5 = new Date(t5.changed).getTime(), o4 = new Date(e4.changed).getTime();
                  return a ? i5 - o4 : o4 - i5;
                }
                case "size": {
                  const i5 = (0, n2.z)(t5.size), o4 = (0, n2.z)(e4.size);
                  return a ? i5 - o4 : o4 - i5;
                }
              }
              return 0;
            }, editImage: true, preview: true, showPreviewNavigation: true, showSelectButtonInPreview: true, contextMenu: true, howLongShowMsg: 3e3, createNewFolder: true, deleteFolder: true, renameFolder: true, moveFolder: true, moveFile: true, permissionsPresets: { allowFileDownload: void 0, allowFileMove: void 0, allowFileRemove: void 0, allowFileRename: void 0, allowFileUpload: void 0, allowFileUploadRemote: void 0, allowFiles: void 0, allowFolderCreate: void 0, allowFolderMove: void 0, allowFolderRemove: void 0, allowFolderRename: void 0, allowFolderTree: void 0, allowFolders: void 0, allowGeneratePdf: void 0, allowImageCrop: void 0, allowImageResize: void 0 }, showFoldersPanel: true, storeLastOpenedFolder: true, width: 859, height: 400, buttons: ["filebrowser.upload", "filebrowser.remove", "filebrowser.update", "filebrowser.select", "filebrowser.edit", "|", "filebrowser.tiles", "filebrowser.list", "|", "filebrowser.filter", "|", "filebrowser.sort"], removeButtons: [], fullsize: false, showTooltip: true, view: null, isSuccess: (t5) => t5.success, getMessage: (t5) => void 0 !== t5.data.messages && (0, o3.cy)(t5.data.messages) ? t5.data.messages.join(" ") : "", showFileName: true, showFileSize: true, showFileChangeTime: true, saveStateInStorage: { storeLastOpenedFolder: true, storeView: true, storeSortBy: true }, pixelOffsetLoadNewChunk: 200, getThumbTemplate(t5, e4, i4) {
              const o4 = this.options, n3 = this.files.getFullElName("item"), r2 = o4.showFileName, s2 = o4.showFileSize && t5.size, a = o4.showFileChangeTime && t5.time;
              let l = "";
              return void 0 !== t5.file && (l = t5.file), `<a
			data-jodit-file-browser-item="true"
			data-is-file="${t5.isImage ? 0 : 1}"
			draggable="true"
			class="${n3}"
			href="${t5.fileURL}"
			data-source="${i4}"
			data-path="${t5.path}"
			data-name="${l}"
			title="${l}"
			data-url="${t5.fileURL}">
				<img
					data-is-file="${t5.isImage ? 0 : 1}"
					data-src="${t5.fileURL}"
					src="${t5.imageURL}"
					alt="${l}"
					loading="lazy"
				/>
				${r2 || s2 || a ? `<div class="${n3}-info">${r2 ? `<span class="${n3}-info-filename">${l}</span>` : ""}${s2 ? `<span class="${n3}-info-filesize">${t5.size}</span>` : ""}${a ? `<span class="${n3}-info-filechanged">${a}</span>` : ""}</div>` : ""}
			</a>`;
            }, ajax: { ...s.T.prototype.defaultAjaxOptions, url: "", data: {}, cache: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", method: "POST", processData: true, headers: {}, prepareData: (t5) => t5, process: (t5) => t5 }, create: { data: { action: "folderCreate" } }, getLocalFileByUrl: { data: { action: "getLocalFileByUrl" } }, resize: { data: { action: "imageResize" } }, crop: { data: { action: "imageCrop" } }, fileMove: { data: { action: "fileMove" } }, folderMove: { data: { action: "folderMove" } }, fileRename: { data: { action: "fileRename" } }, folderRename: { data: { action: "folderRename" } }, fileRemove: { data: { action: "fileRemove" } }, folderRemove: { data: { action: "folderRemove" } }, items: { data: { action: "files" } }, folder: { data: { action: "folders" } }, permissions: { data: { action: "permissions" } } }, s.T.prototype.controls.filebrowser = { upload: { icon: "plus", isInput: true, isDisabled: (t5) => !t5.dataProvider.canI("FileUpload"), getContent: (t5) => {
              const e4 = new r.n(t5, { onlyImages: t5.state.onlyImages });
              return t5.e.fire("bindUploader.filebrowser", e4.container), e4.container;
            } }, remove: { icon: "bin", isDisabled: (t5) => !t5.state.activeElements.length || !t5.dataProvider.canI("FileRemove"), exec: (t5) => {
              t5.e.fire("fileRemove.filebrowser");
            } }, update: { exec: (t5) => {
              t5.e.fire("update.filebrowser");
            } }, select: { icon: "check", isDisabled: (t5) => !t5.state.activeElements.length, exec: (t5) => {
              t5.e.fire("select.filebrowser");
            } }, edit: { icon: "pencil", isDisabled: (t5) => {
              const e4 = t5.state.activeElements;
              return 1 !== e4.length || !e4[0].isImage || !(t5.dataProvider.canI("ImageCrop") || t5.dataProvider.canI("ImageResize"));
            }, exec: (t5) => {
              t5.e.fire("edit.filebrowser");
            } }, tiles: { icon: "th", isActive: (t5) => "tiles" === t5.state.view, exec: (t5) => {
              t5.e.fire("view.filebrowser", "tiles");
            } }, list: { icon: "th-list", isActive: (t5) => "list" === t5.state.view, exec: (t5) => {
              t5.e.fire("view.filebrowser", "list");
            } }, filter: { isInput: true, getContent: (t5, e4) => {
              const i4 = e4.container.querySelector(".jodit-input");
              if (i4) return i4;
              const o4 = t5.c.element("input", { class: "jodit-input", placeholder: t5.i18n("Filter") });
              return o4.value = t5.state.filterWord, t5.e.on(o4, "keydown mousedown", t5.async.debounce(() => {
                t5.e.fire("filter.filebrowser", o4.value);
              }, t5.defaultTimeout)), o4;
            } }, sort: { isInput: true, getContent: (t5) => {
              const e4 = t5.c.fromHTML(`<select class="jodit-input jodit-select"><option value="changed-asc">${t5.i18n("Sort by changed")} (⬆)</option><option value="changed-desc">${t5.i18n("Sort by changed")} (⬇)</option><option value="name-asc">${t5.i18n("Sort by name")} (⬆)</option><option value="name-desc">${t5.i18n("Sort by name")} (⬇)</option><option value="size-asc">${t5.i18n("Sort by size")} (⬆)</option><option value="size-desc">${t5.i18n("Sort by size")} (⬇)</option></select>`);
              return e4.value = t5.state.sortBy, t5.e.on("sort.filebrowser", (t6) => {
                e4.value !== t6 && (e4.value = t6);
              }).on(e4, "change", () => {
                t5.e.fire("sort.filebrowser", e4.value);
              }), e4;
            } } };
          }, 75889: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { o: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(65147), a = i3(53883), l = i3(11133);
            const c = "default", d = /* @__PURE__ */ new Set(["allowFiles", "allowFileMove", "allowFileUpload", "allowFileUploadRemote", "allowFileRemove", "allowFileRename", "allowFolders", "allowFolderMove", "allowFolderCreate", "allowFolderRemove", "allowFolderRename", "allowImageResize", "allowImageCrop"]);
            let u = class {
              constructor(t5, e4) {
                this.parent = t5, this.options = e4, this.__currentPermissions = null, this.__ajaxInstances = /* @__PURE__ */ new Map(), this.progressHandler = (t6) => {
                };
              }
              get o() {
                return this.options;
              }
              get(t5) {
                const e4 = this.__ajaxInstances;
                if (e4.has(t5)) {
                  const i5 = e4.get(t5);
                  null == i5 || i5.abort(), e4.delete(t5);
                }
                const i4 = (0, s.ConfigProto)(void 0 !== this.options[t5] ? this.options[t5] : {}, (0, s.ConfigProto)({ onProgress: this.progressHandler }, this.o.ajax));
                i4.prepareData && (i4.data = i4.prepareData.call(this, i4.data));
                const o4 = new a.d(i4);
                e4.set(t5, o4);
                const n3 = o4.send();
                return n3.finally(() => {
                  o4.destruct(), e4.delete(t5), this.progressHandler(100);
                }).catch(() => null), n3.then((t6) => t6.json()).then((t6) => {
                  if (t6 && !this.isSuccess(t6)) throw new Error(this.getMessage(t6));
                  return t6;
                });
              }
              onProgress(t5) {
                this.progressHandler = t5;
              }
              async permissions(t5, e4) {
                return this.o.permissions ? (this.o.permissions.data.path = t5, this.o.permissions.data.source = e4, this.o.permissions.url ? this.get("permissions").then((t6) => {
                  if (this.parent.isInDestruct) throw (0, s.abort)();
                  let e5 = this.o.permissions.process;
                  if (e5 || (e5 = this.o.ajax.process), e5) {
                    const i4 = e5.call(self, t6);
                    i4.data.permissions && (this.parent.events.fire(this, "changePermissions", this.__currentPermissions, i4.data.permissions), this.__currentPermissions = i4.data.permissions);
                  }
                  return this.__currentPermissions;
                }) : null) : null;
              }
              canI(t5) {
                const e4 = "allow" + t5;
                if (!n2.IS_PROD && !d.has(e4)) throw (0, s.error)("Wrong action " + t5);
                const i4 = this.o.permissionsPresets[e4];
                return void 0 !== i4 ? i4 : null == this.__currentPermissions || void 0 === this.__currentPermissions[e4] || this.__currentPermissions[e4];
              }
              __items(t5, e4, i4, o4) {
                const n3 = this.options;
                return n3.items ? (n3.items.data.path = t5, n3.items.data.source = e4, n3.items.data.mods = i4, this.get("items").then((t6) => {
                  let e5 = this.o.items.process;
                  return e5 || (e5 = this.o.ajax.process), e5 && (t6 = e5.call(self, t6)), o4(t6);
                })) : Promise.reject(Error("Set Items api options"));
              }
              items(t5, e4, i4 = {}) {
                return this.__items(t5, e4, i4, (t6) => this.generateItemsList(t6.data.sources, i4));
              }
              itemsEx(t5, e4, i4 = {}) {
                return this.__items(t5, e4, i4, (t6) => {
                  return { items: this.generateItemsList(t6.data.sources, i4), loadedTotal: (e5 = t6.data.sources, e5.reduce((t7, e6) => t7 + e6.files.length, 0)) };
                  var e5;
                });
              }
              generateItemsList(t5, e4 = {}) {
                const i4 = [], o4 = (t6) => {
                  var i5;
                  return !(null === (i5 = e4.filterWord) || void 0 === i5 ? void 0 : i5.length) || void 0 === this.o.filter || this.o.filter(t6, e4.filterWord);
                };
                return t5.forEach((t6) => {
                  if (t6.files && t6.files.length) {
                    const { sort: n3 } = this.o;
                    (0, s.isFunction)(n3) && e4.sortBy && t6.files.sort((t7, i5) => n3(t7, i5, e4.sortBy)), t6.files.forEach((n4) => {
                      o4(n4) && ((t7) => "folder" === t7.type || !e4.onlyImages || void 0 === t7.isImage || t7.isImage)(n4) && i4.push(l.u.create({ ...n4, sourceName: t6.name, source: t6 }));
                    });
                  }
                }), i4;
              }
              async tree(t5, e4) {
                return t5 = (0, s.normalizeRelativePath)(t5), this.o.folder ? (await this.permissions(t5, e4), this.o.folder.data.path = t5, this.o.folder.data.source = e4, this.get("folder").then((t6) => {
                  let e5 = this.o.folder.process;
                  return e5 || (e5 = this.o.ajax.process), e5 && (t6 = e5.call(self, t6)), t6.data.sources;
                })) : Promise.reject(Error("Set Folder Api options"));
              }
              getPathByUrl(t5) {
                return (0, s.set)("options.getLocalFileByUrl.data.url", t5, this), this.get("getLocalFileByUrl").then((t6) => {
                  if (this.isSuccess(t6)) return t6.data;
                  throw (0, s.error)(this.getMessage(t6));
                });
              }
              createFolder(t5, e4, i4) {
                const { create: o4 } = this.o;
                if (!o4) throw (0, s.error)("Set Create api options");
                return o4.data.source = i4, o4.data.path = e4, o4.data.name = t5, this.get("create").then((t6) => {
                  if (this.isSuccess(t6)) return true;
                  throw (0, s.error)(this.getMessage(t6));
                });
              }
              move(t5, e4, i4, o4) {
                const n3 = o4 ? "fileMove" : "folderMove", r2 = this.options[n3];
                if (!r2) throw (0, s.error)("Set Move api options");
                return r2.data.from = t5, r2.data.path = e4, r2.data.source = i4, this.get(n3).then((t6) => {
                  if (this.isSuccess(t6)) return true;
                  throw (0, s.error)(this.getMessage(t6));
                });
              }
              remove(t5, e4, i4, o4) {
                const n3 = this.o[t5];
                if (!n3) throw (0, s.error)(`Set "${t5}" api options`);
                return n3.data.path = e4, n3.data.name = i4, n3.data.source = o4, this.get(t5).then((t6) => (n3.process && (t6 = n3.process.call(this, t6)), this.getMessage(t6)));
              }
              fileRemove(t5, e4, i4) {
                return this.remove("fileRemove", t5, e4, i4);
              }
              folderRemove(t5, e4, i4) {
                return this.remove("folderRemove", t5, e4, i4);
              }
              rename(t5, e4, i4, o4, n3) {
                const r2 = this.o[t5];
                if (!r2) throw (0, s.error)(`Set "${t5}" api options`);
                return r2.data.path = e4, r2.data.name = i4, r2.data.newname = o4, r2.data.source = n3, this.get(t5).then((t6) => (r2.process && (t6 = r2.process.call(self, t6)), this.getMessage(t6)));
              }
              folderRename(t5, e4, i4, o4) {
                return this.rename("folderRename", t5, e4, i4, o4);
              }
              fileRename(t5, e4, i4, o4) {
                return this.rename("fileRename", t5, e4, i4, o4);
              }
              changeImage(t5, e4, i4, o4, n3, r2) {
                this.o[t5] || (this.o[t5] = { data: {} });
                const s2 = this.o[t5];
                return void 0 === s2.data && (s2.data = { action: t5 }), s2.data.newname = n3 || o4, r2 && (s2.data.box = r2), s2.data.path = e4, s2.data.name = o4, s2.data.source = i4, this.get(t5).then(() => true);
              }
              crop(t5, e4, i4, o4, n3) {
                return this.changeImage("crop", t5, e4, i4, o4, n3);
              }
              resize(t5, e4, i4, o4, n3) {
                return this.changeImage("resize", t5, e4, i4, o4, n3);
              }
              getMessage(t5) {
                return this.options.getMessage(t5);
              }
              isSuccess(t5) {
                return this.options.isSuccess(t5);
              }
              destruct() {
                this.__ajaxInstances.forEach((t5) => t5.destruct()), this.__ajaxInstances.clear();
              }
            };
            u = (0, o3.Cg)([r.autobind], u), e3.A = u;
          }, 83797: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { S: function() {
              return r;
            }, V: function() {
              return s;
            } });
            var o3 = i3(34248), n2 = i3(75889);
            function r(t5, e4) {
              return new n2.A(t5, e4);
            }
            function s(t5) {
              return new o3.t(t5);
            }
          }, 97324: function(t4, e3, i3) {
            "use strict";
            function o3(t5, e4, i4) {
              return t5.dataProvider.fileRemove(t5.state.currentPath, e4, i4).then((i5) => {
                t5.status(i5 || t5.i18n('File "%s" was deleted', e4), true);
              }).catch(t5.status);
            }
            i3.d(e3, { W: function() {
              return o3;
            } });
          }, 9979: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return t5.files.setMod("active", true), t5.files.setMod("loading", true), t5.dataProvider.items(t5.state.currentPath, t5.state.currentSource, { sortBy: t5.state.sortBy, onlyImages: t5.state.onlyImages, filterWord: t5.state.filterWord }).then((e4) => {
                e4 && (t5.state.elements = e4, t5.state.activeElements = []);
              }).catch(t5.status).finally(() => t5.files.setMod("loading", false));
            }
            i3.d(e3, { f: function() {
              return o3;
            } });
          }, 31859: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { r: function() {
              return r;
            } });
            var o3 = i3(71842), n2 = i3(9979);
            async function r(t5) {
              t5.tree.setMod("active", true), o3.J.detach(t5.tree.container);
              const e4 = (0, n2.f)(t5);
              if (t5.o.showFoldersPanel) {
                t5.tree.setMod("loading", true);
                const i4 = t5.dataProvider.tree(t5.state.currentPath, t5.state.currentSource).then((e5) => {
                  t5.state.sources = e5;
                }).catch(t5.status).finally(() => t5.tree.setMod("loading", false));
                return Promise.all([i4, e4]);
              }
              return t5.tree.setMod("active", false), e4;
            }
          }, 140: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return y;
            } });
            var o3 = i3(31635), n2 = i3(77753), r = i3(17352), s = i3(22664), a = i3(66927), l = i3(50025), c = i3(65147), d = i3(63915), u = i3(58597), h = i3(14961), p = (i3(70265), i3(9979)), f = i3(31859), g = i3(62994), m = i3(18043), b = i3(80004), _ = i3(75889), v = i3(83797), x = i3(10274), w = i3(36115);
            let y = class extends h.T {
              className() {
                return "FileBrowser";
              }
              get dataProvider() {
                return (0, v.S)(this, this.options);
              }
              onSelect(t5) {
                return () => {
                  if (this.state.activeElements.length) {
                    const e4 = [], i4 = [];
                    this.state.activeElements.forEach((t6) => {
                      const o5 = t6.fileURL;
                      o5 && (e4.push(o5), i4.push(t6.isImage || false));
                    }), this.close();
                    const o4 = { baseurl: "", files: e4, isImages: i4 };
                    (0, c.isFunction)(t5) && t5(o4), this.close();
                  }
                  return false;
                };
              }
              get _dialog() {
                var t5;
                const e4 = this.dlg({ minWidth: Math.min(700, screen.width), minHeight: 300, buttons: null !== (t5 = this.o.headerButtons) && void 0 !== t5 ? t5 : ["fullsize", "dialog.close"] });
                return ["beforeClose", "afterClose", "beforeOpen"].forEach((t6) => e4.events.on(e4, t6, () => this.e.fire(t6))), e4.setSize(this.o.width, this.o.height), e4;
              }
              get storage() {
                return d.wc.makeStorage(Boolean(this.o.saveStateInStorage), this.componentName);
              }
              get isOpened() {
                return this._dialog.isOpened && "none" !== this.browser.style.display;
              }
              status(t5, e4) {
                t5 && !(0, c.isAbortError)(t5) && ((0, c.isString)(t5) || (t5 = t5.message), (0, c.isString)(t5) && (0, c.trim)(t5).length && this.message.message(t5, e4 ? "success" : "error", this.o.howLongShowMsg));
              }
              open(t5 = this.o.defaultCallback, e4 = false) {
                return this.state.onlyImages = e4, this.async.promise((e5, i4) => {
                  var o4;
                  if (!this.o.items || !this.o.items.url) throw (0, c.error)("Need set options.filebrowser.ajax.url");
                  let n3 = 0;
                  this.e.off(this.files.container, "dblclick").on(this.files.container, "dblclick", this.onSelect(t5)).on(this.files.container, "touchstart", () => {
                    const e6 = (/* @__PURE__ */ new Date()).getTime();
                    r.EMULATE_DBLCLICK_TIMEOUT > e6 - n3 && this.onSelect(t5)(), n3 = e6;
                  }).off("select.filebrowser").on("select.filebrowser", this.onSelect(t5));
                  const s2 = this.c.div();
                  null === (o4 = this.toolbar) || void 0 === o4 || o4.appendTo(s2), this.__updateToolbarButtons(), this._dialog.open(this.browser, s2), this.e.fire("sort.filebrowser", this.state.sortBy), (0, f.r)(this).then(e5, i4).finally(() => {
                    var t6;
                    this.isInDestruct || null === (t6 = null == this ? void 0 : this.e) || void 0 === t6 || t6.fire("fileBrowserReady.filebrowser");
                  });
                }).catch((t6) => {
                  if (!(0, c.isAbortError)(t6) && !r.IS_PROD) throw t6;
                });
              }
              __getButtons() {
                var t5;
                return (null !== (t5 = this.o.buttons) && void 0 !== t5 ? t5 : []).filter((t6) => {
                  if (!(0, c.isString)(t6)) return true;
                  switch (t6) {
                    case "filebrowser.upload":
                      return this.dataProvider.canI("FileUpload");
                    case "filebrowser.edit":
                      return this.dataProvider.canI("ImageResize") || this.dataProvider.canI("ImageCrop");
                    case "filebrowser.remove":
                      return this.dataProvider.canI("FileRemove");
                  }
                  return true;
                });
              }
              initUploader(t5) {
                var e4;
                const i4 = this, o4 = null === (e4 = null == t5 ? void 0 : t5.options) || void 0 === e4 ? void 0 : e4.uploader, n3 = (0, c.ConfigProto)(o4 || {}, w.T.defaultOptions.uploader), r2 = () => (0, p.f)(this);
                i4.uploader = i4.getInstance("Uploader", n3), i4.uploader.setPath(i4.state.currentPath).setSource(i4.state.currentSource).bind(i4.browser, r2, i4.errorHandler), this.state.on(["change.currentPath", "change.currentSource"], () => {
                  this.uploader.setPath(this.state.currentPath).setSource(this.state.currentSource);
                }), i4.e.on("bindUploader.filebrowser", (t6) => {
                  i4.uploader.bind(t6, r2, i4.errorHandler);
                });
              }
              constructor(t5) {
                super(t5), this.browser = this.c.div(this.componentName), this.status_line = this.c.div(this.getFullElName("status")), this.tree = new x.V(this), this.files = new x.Q(this), this.state = (0, l.sH)({ currentPath: "", currentSource: _.o, currentBaseUrl: "", activeElements: [], elements: [], sources: [], view: "tiles", sortBy: "changed-desc", filterWord: "", onlyImages: false }), this.errorHandler = (t6) => {
                  (0, c.isAbortError)(t6) || (t6 instanceof Error ? this.status(this.i18n(t6.message)) : this.status(this.dataProvider.getMessage(t6)));
                }, this.close = () => {
                  this._dialog.close();
                }, this.__prevButtons = [], this.attachEvents(t5);
                const e4 = this;
                e4.options = (0, c.ConfigProto)(t5 || {}, w.T.defaultOptions.filebrowser), e4.browser.component = this, e4.container = e4.browser, e4.o.showFoldersPanel && e4.browser.appendChild(e4.tree.container), e4.browser.appendChild(e4.files.container), e4.browser.appendChild(e4.status_line), m.c.call(e4), g.nW.call(e4), b.r.call(e4), ["getLocalFileByUrl", "crop", "resize", "create", "fileMove", "folderMove", "fileRename", "folderRename", "fileRemove", "folderRemove", "folder", "items", "permissions"].forEach((t6) => {
                  null != this.options[t6] && (this.options[t6] = (0, c.ConfigProto)(this.options[t6], this.o.ajax));
                });
                const { storeView: i4, storeSortBy: o4, storeLastOpenedFolder: r2 } = this.o.saveStateInStorage || { storeLastOpenedFolder: false, storeView: false, storeSortBy: false }, s2 = i4 && this.storage.get("view");
                e4.state.view = s2 && null == this.o.view ? "list" === s2 ? "list" : "tiles" : "list" === e4.o.view ? "list" : "tiles", e4.files.setMod("view", e4.state.view);
                const a2 = o4 && e4.storage.get("sortBy");
                if (a2) {
                  const t6 = a2.split("-");
                  e4.state.sortBy = ["changed", "name", "size"].includes(t6[0]) ? a2 : "changed-desc";
                } else e4.state.sortBy = e4.o.sortBy || "changed-desc";
                if (r2) {
                  const t6 = e4.storage.get("currentPath"), i5 = e4.storage.get("currentSource");
                  e4.state.currentPath = null != t6 ? t6 : "", e4.state.currentSource = null != i5 ? i5 : "";
                }
                e4.initUploader(e4), e4.setStatus(n2.f.ready);
              }
              destruct() {
                this.isInDestruct || (super.destruct(), this._dialog.destruct(), this.events && this.e.off(".filebrowser"), this.uploader && this.uploader.destruct());
              }
              __updateToolbarButtons() {
                var t5;
                const e4 = this.__getButtons();
                (function(t6, e5) {
                  if (t6.length !== e5.length) return false;
                  for (let i4 = 0; t6.length > i4; i4++) if (t6[i4] !== e5[i4]) return false;
                  return true;
                })(this.__prevButtons, e4) || (this.__prevButtons = e4, null === (t5 = this.toolbar) || void 0 === t5 || t5.build(e4));
              }
            };
            (0, o3.Cg)([s.cache], y.prototype, "dataProvider", null), (0, o3.Cg)([s.cache], y.prototype, "_dialog", null), (0, o3.Cg)([s.cache], y.prototype, "storage", null), (0, o3.Cg)([s.autobind], y.prototype, "status", null), (0, o3.Cg)([s.autobind], y.prototype, "open", null), (0, o3.Cg)([(0, a.w)("dataProvider:changePermissions")], y.prototype, "__updateToolbarButtons", null), y = (0, o3.Cg)([(0, s.derive)(u.z)], y);
          }, 19627: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return o3.V;
            } });
            var o3 = i3(140);
          }, 62994: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Gq: function() {
              return l;
            }, PZ: function() {
              return c;
            }, nW: function() {
              return d;
            } });
            var o3 = i3(71842), n2 = i3(65147), r = i3(49931), s = i3(77112), a = i3(31859);
            const l = (t5, e4, i4 = "a") => o3.J.closest(t5, (t6) => o3.J.isTag(t6, i4), e4), c = (t5, e4) => {
              const { key: i4 } = t5.dataset, { item: o4 } = e4[i4 || ""];
              return o4;
            };
            function d() {
              let t5 = false;
              const e4 = (0, s.a)(this), i4 = this;
              i4.e.on(i4.tree.container, "dragstart", (e5) => {
                const o4 = l(e5.target, i4.container);
                o4 && i4.o.moveFolder && (t5 = o4);
              }).on(i4.tree.container, "drop", (e5) => {
                if ((i4.o.moveFile || i4.o.moveFolder) && t5) {
                  let o4 = (0, n2.attr)(t5, "-path") || "";
                  if (!i4.o.moveFolder && t5.classList.contains(this.tree.getFullElName("item"))) return false;
                  if (t5.classList.contains(this.files.getFullElName("item")) && (o4 += (0, n2.attr)(t5, "-name"), !i4.o.moveFile)) return false;
                  const r2 = l(e5.target, i4.container);
                  if (!r2) return;
                  i4.dataProvider.move(o4, (0, n2.attr)(r2, "-path") || "", (0, n2.attr)(r2, "-source") || "", t5.classList.contains(this.files.getFullElName("item"))).then(() => (0, a.r)(this)).catch(i4.status), t5 = false;
                }
              }).on(i4.files.container, "contextmenu", (0, r.A)(i4)).on(i4.files.container, "click", (t6) => {
                (0, n2.ctrlKey)(t6) || (this.state.activeElements = []);
              }).on(i4.files.container, "click", (t6) => {
                const o4 = l(t6.target, i4.container);
                if (!o4) return;
                const r2 = c(o4, e4);
                return r2 ? (i4.state.activeElements = (0, n2.ctrlKey)(t6) ? [...i4.state.activeElements, r2] : [r2], t6.stopPropagation(), false) : void 0;
              }).on(i4.files.container, "dragstart", (e5) => {
                if (i4.o.moveFile) {
                  const o4 = l(e5.target, i4.container);
                  if (!o4) return;
                  t5 = o4;
                }
              }).on(i4.container, "drop", (t6) => t6.preventDefault());
            }
          }, 18043: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { c: function() {
              return d;
            } });
            var o3 = i3(65147), n2 = i3(9823), r = i3(75889), s = i3(97324), a = i3(9979), l = i3(31859), c = i3(53804);
            function d() {
              const t5 = this.state, e4 = this.dataProvider, i4 = this;
              i4.e.on("view.filebrowser", (e5) => {
                e5 !== t5.view && (t5.view = e5);
              }).on("sort.filebrowser", (e5) => {
                e5 !== t5.sortBy && (t5.sortBy = e5, (0, a.f)(i4));
              }).on("filter.filebrowser", (e5) => {
                e5 !== t5.filterWord && (t5.filterWord = e5, (0, a.f)(i4));
              }).on("openFolder.filebrowser", (t6) => {
                let e5;
                e5 = ".." === t6.name ? t6.path.split("/").filter((t7) => t7.length).slice(0, -1).join("/") : (0, o3.normalizePath)(t6.path, t6.name), i4.state.currentPath = e5, i4.state.currentSource = "." === t6.name ? r.o : t6.source;
              }).on("removeFolder.filebrowser", (t6) => {
                i4.confirm("Are you sure?", "Delete", (o4) => {
                  o4 && e4.folderRemove(t6.path, t6.name, t6.source).then((t7) => (i4.status(t7, true), (0, l.r)(i4))).catch(i4.status);
                });
              }).on("renameFolder.filebrowser", (t6) => {
                i4.prompt("Enter new name", "Rename", (o4) => {
                  if (!(0, n2.uV)(o4)) return i4.status(i4.i18n("Enter new name")), false;
                  e4.folderRename(t6.path, t6.name, o4, t6.source).then((t7) => (i4.state.activeElements = [], i4.status(t7, true), (0, l.r)(i4))).catch(i4.status);
                }, "type name", t6.name);
              }).on("addFolder.filebrowser", (t6) => {
                i4.prompt("Enter Directory name", "Create directory", (o4) => {
                  e4.createFolder(o4, t6.path, t6.source).then(() => (0, l.r)(i4)).catch(i4.status);
                }, "type name");
              }).on("fileRemove.filebrowser", () => {
                i4.state.activeElements.length && i4.confirm("Are you sure?", "", (t6) => {
                  if (t6) {
                    const t7 = [];
                    i4.state.activeElements.forEach((e5) => {
                      t7.push((0, s.W)(i4, e5.file || e5.name || "", e5.sourceName));
                    }), i4.state.activeElements = [], Promise.all(t7).then(() => (0, l.r)(i4).catch(i4.status), i4.status);
                  }
                });
              }).on("edit.filebrowser", () => {
                if (1 === i4.state.activeElements.length) {
                  const [t6] = this.state.activeElements;
                  c.B.call(i4, t6.fileURL, t6.file || "", t6.path, t6.sourceName);
                }
              }).on("fileRename.filebrowser", (t6, o4, r2) => {
                1 === i4.state.activeElements.length && i4.prompt("Enter new name", "Rename", (s2) => {
                  if (!(0, n2.uV)(s2)) return i4.status(i4.i18n("Enter new name")), false;
                  e4.fileRename(o4, t6, s2, r2).then((t7) => {
                    i4.state.activeElements = [], i4.status(t7, true), (0, a.f)(i4);
                  }).catch(i4.status);
                }, "type name", t6);
              }).on("update.filebrowser", () => {
                (0, l.r)(this).then(this.status, this.status);
              });
            }
          }, 80004: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { r: function() {
              return c;
            } });
            var o3 = i3(71842), n2 = i3(65499), r = i3(92032), s = i3(77112), a = i3(31859);
            const l = "default";
            function c() {
              const t5 = (0, s.a)(this), { state: e4, files: i4, create: c2, options: d } = this, u = (e5) => {
                const i5 = e5.uniqueHashKey;
                if (t5[i5]) return t5[i5].elm;
                const o4 = c2.fromHTML(d.getThumbTemplate.call(this, e5, e5.source, e5.sourceName.toString()));
                return o4.dataset.key = i5, t5[i5] = { item: e5, elm: o4 }, t5[i5].elm;
              };
              e4.on(["change.currentPath", "change.currentSource"], this.async.debounce(() => {
                this.o.saveStateInStorage && this.o.saveStateInStorage.storeLastOpenedFolder && this.storage.set("currentPath", this.state.currentPath).set("currentSource", this.state.currentSource), (0, a.r)(this).catch(this.status);
              }, this.defaultTimeout)).on("beforeChange.activeElements", () => {
                e4.activeElements.forEach((e5) => {
                  const o4 = e5.uniqueHashKey, { elm: n3 } = t5[o4];
                  n3 && n3.classList.remove(i4.getFullElName("item", "active", true));
                });
              }).on("change.activeElements", () => {
                this.e.fire("changeSelection"), e4.activeElements.forEach((e5) => {
                  const o4 = e5.uniqueHashKey, { elm: n3 } = t5[o4];
                  n3 && n3.classList.add(i4.getFullElName("item", "active", true));
                });
              }).on("change.view", () => {
                i4.setMod("view", e4.view), this.o.saveStateInStorage && this.o.saveStateInStorage.storeView && this.storage.set("view", e4.view);
              }).on("change.sortBy", () => {
                this.o.saveStateInStorage && this.o.saveStateInStorage.storeSortBy && this.storage.set("sortBy", e4.sortBy);
              }).on("change.elements", this.async.debounce(() => {
                o3.J.detach(i4.container), e4.elements.length ? e4.elements.forEach((t6) => {
                  this.files.container.appendChild(u(t6));
                }) : i4.container.appendChild(c2.div(this.componentName + "_no-files_true", this.i18n("There are no files")));
              }, this.defaultTimeout)).on("change.sources", this.async.debounce(() => {
                o3.J.detach(this.tree.container), e4.sources.forEach((t6) => {
                  const e5 = t6.name;
                  if (e5 && e5 !== l && this.tree.container.appendChild(c2.div(this.tree.getFullElName("source-title"), e5)), t6.folders.forEach((i5) => {
                    const o4 = c2.a(this.tree.getFullElName("item"), { draggable: "draggable", href: "#", "data-path": (0, n2.Fd)(t6.path, i5 + "/"), "data-name": i5, "data-source": e5, "data-source-path": t6.path }, c2.span(this.tree.getFullElName("item-title"), i5)), s2 = (o5) => (r2) => {
                      this.e.fire(`${o5}.filebrowser`, { name: i5, path: (0, n2.Fd)(t6.path + "/"), source: e5 }), r2.stopPropagation(), r2.preventDefault();
                    };
                    if (this.e.on(o4, "click", s2("openFolder")), this.tree.container.appendChild(o4), ".." !== i5 && "." !== i5) {
                      if (d.renameFolder && this.dataProvider.canI("FolderRename")) {
                        const t7 = (0, r.$n)(this, { icon: { name: "pencil" }, name: "rename", tooltip: "Rename", size: "tiny" });
                        t7.onAction(s2("renameFolder")), o4.appendChild(t7.container);
                      }
                      if (d.deleteFolder && this.dataProvider.canI("FolderRemove")) {
                        const t7 = (0, r.$n)(this, { icon: { name: "cancel" }, name: "remove", tooltip: "Delete", size: "tiny" });
                        t7.onAction(s2("removeFolder")), o4.appendChild(t7.container);
                      }
                    }
                  }), d.createNewFolder && this.dataProvider.canI("FolderCreate")) {
                    const i5 = (0, r.$n)(this, "plus", "Add folder", "secondary");
                    i5.onAction(() => {
                      this.e.fire("addFolder", { path: (0, n2.Fd)(t6.path + "/"), source: e5 });
                    }), this.tree.append(i5);
                  }
                });
              }, this.defaultTimeout));
            }
          }, 96025: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return n2;
            } });
            var o3 = i3(53048);
            class n2 extends o3.Ue {
              className() {
                return "FileBrowserFiles";
              }
            }
          }, 10274: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return o3.Q;
            }, V: function() {
              return n2.V;
            } });
            var o3 = i3(96025), n2 = i3(73307);
          }, 73307: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return n2;
            } });
            var o3 = i3(53048);
            class n2 extends o3.Ue {
              className() {
                return "FileBrowserTree";
              }
            }
          }, 84345: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return o3;
            } });
            class o3 {
              undo() {
                this.history.snapshot.restore(this.oldValue);
              }
              redo() {
                this.history.snapshot.restore(this.newValue);
              }
              constructor(t5, e4, i4, o4) {
                this.oldValue = t5, this.newValue = e4, this.history = i4, this.tick = o4;
              }
            }
          }, 69996: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(77753), r = i3(22664), s = i3(84345), a = i3(58770), l = i3(66180);
            i3(36115).T.prototype.history = { enable: true, maxHistoryLength: 1 / 0, timeout: 1e3 };
            class c extends n2.vG {
              className() {
                return "History";
              }
              redo() {
                this.__stack.redo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
              }
              canRedo() {
                return this.__stack.canRedo();
              }
              undo() {
                this.__stack.undo() && (this.startValue = this.snapshot.make(), this.fireChangeStack());
              }
              canUndo() {
                return this.__stack.canUndo();
              }
              clear() {
                this.startValue = this.snapshot.make(), this.__stack.clear(), this.fireChangeStack();
              }
              get length() {
                return this.__stack.length;
              }
              get startValue() {
                return this.__startValue;
              }
              set startValue(t5) {
                this.__startValue = t5;
              }
              constructor(t5, e4 = new l.B(t5.o.history.maxHistoryLength), i4 = new a.F(t5)) {
                super(t5), this.updateTick = 0, this.__stack = e4, this.snapshot = i4, t5.o.history.enable && t5.e.on("afterAddPlace.history", () => {
                  this.isInDestruct || (this.startValue = this.snapshot.make(), t5.events.on("internalChange internalUpdate", () => {
                    this.startValue = this.snapshot.make();
                  }).on(t5.editor, ["changeSelection", "selectionstart", "selectionchange", "mousedown", "mouseup", "keydown", "keyup"].map((t6) => t6 + ".history").join(" "), () => {
                    this.startValue.html === this.j.getNativeEditorValue() && (this.startValue = this.snapshot.make());
                  }).on(this, "change.history", this.onChange));
                });
              }
              __upTick() {
                this.updateTick += 1;
              }
              onChange() {
                this.__processChanges();
              }
              __processChanges() {
                !this.snapshot.isBlocked && this.j.o.history.enable && this.updateStack();
              }
              updateStack(t5 = false) {
                const e4 = this.snapshot.make();
                if (!a.F.equal(e4, this.startValue)) {
                  const i4 = new s.u(this.startValue, e4, this, this.updateTick);
                  if (t5) {
                    const t6 = this.__stack.current();
                    t6 && this.updateTick === t6.tick && this.__stack.replace(i4);
                  } else this.__stack.push(i4);
                  this.startValue = e4, this.fireChangeStack();
                }
              }
              fireChangeStack() {
                var t5;
                this.j && !this.j.isInDestruct && (null === (t5 = this.j.events) || void 0 === t5 || t5.fire("changeStack"));
              }
              destruct() {
                this.isInDestruct || (this.j.events && this.j.e.off(".history"), this.snapshot.destruct(), super.destruct());
              }
            }
            (0, o3.Cg)([(0, r.debounce)()], c.prototype, "onChange", null);
          }, 58770: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return s;
            } });
            var o3 = i3(77753), n2 = i3(17352), r = i3(71842);
            class s extends o3.vG {
              constructor() {
                super(...arguments), this.__isBlocked = false;
              }
              className() {
                return "Snapshot";
              }
              static equal(t5, e4) {
                return t5.html === e4.html && JSON.stringify(t5.range) === JSON.stringify(e4.range);
              }
              static countNodesBeforeInParent(t5) {
                if (!t5.parentNode) return 0;
                const e4 = t5.parentNode.childNodes;
                let i4 = 0, o4 = null;
                for (let n3 = 0; e4.length > n3; n3 += 1) {
                  if (!o4 || this.isIgnoredNode(e4[n3]) || r.J.isText(o4) && r.J.isText(e4[n3]) || (i4 += 1), e4[n3] === t5) return i4;
                  o4 = e4[n3];
                }
                return 0;
              }
              static strokeOffset(t5, e4) {
                for (; r.J.isText(t5); ) r.J.isText(t5 = t5.previousSibling) && t5.nodeValue && (e4 += t5.nodeValue.length);
                return e4;
              }
              calcHierarchyLadder(t5) {
                const e4 = [];
                if (!t5 || !t5.parentNode || !r.J.isOrContains(this.j.editor, t5)) return [];
                for (; t5 && t5 !== this.j.editor; ) t5 && !s.isIgnoredNode(t5) && e4.push(s.countNodesBeforeInParent(t5)), t5 = t5.parentNode;
                return e4.reverse();
              }
              getElementByLadder(t5) {
                let e4, i4 = this.j.editor;
                for (e4 = 0; i4 && t5.length > e4; e4 += 1) i4 = i4.childNodes[t5[e4]];
                return i4;
              }
              get isBlocked() {
                return this.__isBlocked;
              }
              __block(t5) {
                this.__isBlocked = t5;
              }
              transaction(t5) {
                this.__block(true);
                try {
                  t5();
                } catch (t6) {
                  if (!n2.IS_PROD) throw t6;
                }
                this.__block(false);
              }
              make() {
                const t5 = { html: "", range: { startContainer: [], startOffset: 0, endContainer: [], endOffset: 0 } };
                t5.html = this.removeJoditSelection(this.j.editor);
                const e4 = this.j.s.sel;
                if (e4 && e4.rangeCount) {
                  const i4 = e4.getRangeAt(0), o4 = this.calcHierarchyLadder(i4.startContainer), n3 = this.calcHierarchyLadder(i4.endContainer);
                  let r2 = s.strokeOffset(i4.startContainer, i4.startOffset), a = s.strokeOffset(i4.endContainer, i4.endOffset);
                  o4.length || i4.startContainer === this.j.editor || (r2 = 0), n3.length || i4.endContainer === this.j.editor || (a = 0), t5.range = { startContainer: o4, startOffset: r2, endContainer: n3, endOffset: a };
                }
                return t5;
              }
              restore(t5) {
                this.transaction(() => {
                  const e4 = this.storeScrollState();
                  this.j.getNativeEditorValue() !== t5.html && (this.j.value = t5.html), this.restoreOnlySelection(t5), this.restoreScrollState(e4);
                });
              }
              storeScrollState() {
                return [this.j.ow.scrollY, this.j.editor.scrollTop];
              }
              restoreScrollState(t5) {
                const { j: e4 } = this, { ow: i4 } = e4;
                i4.scrollTo(i4.scrollX, t5[0]), e4.editor.scrollTop = t5[1];
              }
              restoreOnlySelection(t5) {
                try {
                  if (t5.range) {
                    const e4 = this.j.ed.createRange();
                    e4.setStart(this.getElementByLadder(t5.range.startContainer), t5.range.startOffset), e4.setEnd(this.getElementByLadder(t5.range.endContainer), t5.range.endOffset), this.j.s.selectRange(e4);
                  }
                } catch (t6) {
                  this.j.editor.lastChild && this.j.s.setCursorAfter(this.j.editor.lastChild);
                }
              }
              destruct() {
                this.__block(false), super.destruct();
              }
              static isIgnoredNode(t5) {
                return r.J.isText(t5) && !t5.nodeValue || r.J.isTemporary(t5);
              }
              removeJoditSelection(t5) {
                const e4 = t5.cloneNode(true);
                return e4.querySelectorAll(`[${n2.TEMP_ATTR}]`).forEach(r.J.unwrap), e4.innerHTML;
              }
            }
          }, 66180: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return o3;
            } });
            class o3 {
              constructor(t5) {
                this.size = t5, this.commands = [], this.stackPosition = -1;
              }
              get length() {
                return this.commands.length;
              }
              clearRedo() {
                this.commands.length = this.stackPosition + 1;
              }
              clear() {
                this.commands.length = 0, this.stackPosition = -1;
              }
              push(t5) {
                this.clearRedo(), this.commands.push(t5), this.stackPosition += 1, this.commands.length > this.size && (this.commands.shift(), this.stackPosition -= 1);
              }
              replace(t5) {
                this.commands[this.stackPosition] = t5;
              }
              current() {
                return this.commands[this.stackPosition];
              }
              undo() {
                return !!this.canUndo() && (this.commands[this.stackPosition] && this.commands[this.stackPosition].undo(), this.stackPosition -= 1, true);
              }
              redo() {
                return !!this.canRedo() && (this.stackPosition += 1, this.commands[this.stackPosition] && this.commands[this.stackPosition].redo(), true);
              }
              canUndo() {
                return this.stackPosition >= 0;
              }
              canRedo() {
                return this.commands.length - 1 > this.stackPosition;
              }
            }
          }, 93027: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(928), r = i3.n(n2), s = i3(31230), a = i3.n(s);
            i3(36115).T.prototype.imageeditor = { min_width: 20, min_height: 20, closeAfterSave: false, width: "85%", height: "85%", crop: true, resize: true, resizeUseRatio: true, resizeMinWidth: 20, resizeMinHeight: 20, cropUseRatio: true, cropDefaultWidth: "70%", cropDefaultHeight: "70%" }, o3.I.set("crop", r()).set("resize", a());
          }, 53804: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return m;
            }, n: function() {
              return g;
            } });
            var o3, n2 = i3(31635), r = i3(77753), s = i3(22664), a = i3(71842), l = i3(65147), c = i3(35265), d = (i3(93027), i3(24863)), u = i3(36115);
            const h = "jodit-image-editor", p = "resize", f = "crop";
            let g = o3 = class extends r.vG {
              className() {
                return "ImageEditor";
              }
              get o() {
                return this.options;
              }
              hide() {
                this._dialog.close();
              }
              open(t5, e4) {
                return this.j.async.promise((i4) => {
                  const o4 = (/* @__PURE__ */ new Date()).getTime();
                  this.image = this.j.c.element("img"), (0, l.$$)("img,.jodit-icon_loader", this.resize_box).forEach(a.J.safeRemove), (0, l.$$)("img,.jodit-icon_loader", this.crop_box).forEach(a.J.safeRemove), (0, l.css)(this.cropHandler, "background", "transparent"), this.onSave = e4, this.resize_box.appendChild(this.j.c.element("i", { class: "jodit-icon_loader" })), this.crop_box.appendChild(this.j.c.element("i", { class: "jodit-icon_loader" })), /\?/.test(t5) ? t5 += "&_tst=" + o4 : t5 += "?_tst=" + o4, this.image.setAttribute("src", t5), this._dialog.open();
                  const { widthInput: n3, heightInput: r2 } = (0, l.refs)(this.editor), s2 = () => {
                    this.isDestructed || (this.image.removeEventListener("load", s2), this.naturalWidth = this.image.naturalWidth, this.naturalHeight = this.image.naturalHeight, n3.value = this.naturalWidth.toString(), r2.value = this.naturalHeight.toString(), this.ratio = this.naturalWidth / this.naturalHeight, this.resize_box.appendChild(this.image), this.cropImage = this.image.cloneNode(true), this.crop_box.appendChild(this.cropImage), a.J.safeRemove.apply(null, (0, l.$$)(".jodit-icon_loader", this.editor)), this.activeTab === f && this.showCrop(), this.j.e.fire(this.resizeHandler, "updatesize"), this.j.e.fire(this.cropHandler, "updatesize"), this._dialog.setPosition(), this.j.e.fire("afterImageEditor"), i4(this._dialog));
                  };
                  this.image.addEventListener("load", s2), this.image.complete && s2();
                });
              }
              onTitleModeClick(t5) {
                const e4 = this, i4 = t5.target, o4 = null == i4 ? void 0 : i4.parentElement;
                if (!o4) return;
                (0, l.$$)(`.${h}__slider,.${h}__area`, e4.editor).forEach((t6) => t6.classList.remove(`${h}_active`)), o4.classList.add(`${h}_active`), this.activeTab = (0, l.attr)(o4, "-area") || p;
                const n3 = e4.editor.querySelector(`.${h}__area.${h}__area_` + e4.activeTab);
                n3 && n3.classList.add(`${h}_active`), e4.activeTab === f && e4.showCrop();
              }
              onChangeSizeInput(t5) {
                const e4 = this, i4 = t5.target, { widthInput: o4, heightInput: n3 } = (0, l.refs)(this.editor), r2 = "widthInput" === (0, l.attr)(i4, "data-ref"), s2 = parseInt(i4.value, 10), a2 = r2 ? e4.o.min_height : e4.o.min_width;
                let c2;
                s2 > (r2 ? e4.o.min_width : e4.o.min_height) && ((0, l.css)(e4.image, r2 ? "width" : "height", s2), e4.resizeUseRatio && (c2 = r2 ? Math.round(s2 / e4.ratio) : Math.round(s2 * e4.ratio), c2 > a2 && ((0, l.css)(e4.image, r2 ? "height" : "width", c2), r2 ? n3.value = c2.toString() : o4.value = c2.toString()))), this.j.e.fire(e4.resizeHandler, "updatesize");
              }
              onResizeHandleMouseDown(t5) {
                const e4 = this;
                e4.target = t5.target, t5.preventDefault(), t5.stopImmediatePropagation(), e4.clicked = true, e4.start_x = t5.clientX, e4.start_y = t5.clientY, e4.activeTab === f ? (e4.top_x = (0, l.css)(e4.cropHandler, "left"), e4.top_y = (0, l.css)(e4.cropHandler, "top"), e4.width = e4.cropHandler.offsetWidth, e4.height = e4.cropHandler.offsetHeight) : (e4.width = e4.image.offsetWidth, e4.height = e4.image.offsetHeight), e4.j.e.on(this.j.ow, "mousemove", this.onGlobalMouseMove).one(this.j.ow, "mouseup", this.onGlobalMouseUp);
              }
              onGlobalMouseUp(t5) {
                this.clicked && (this.clicked = false, t5.stopImmediatePropagation(), this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove));
              }
              onGlobalMouseMove(t5) {
                const e4 = this;
                if (!e4.clicked) return;
                const { widthInput: i4, heightInput: o4 } = (0, l.refs)(this.editor);
                e4.diff_x = t5.clientX - e4.start_x, e4.diff_y = t5.clientY - e4.start_y, e4.activeTab === p && e4.resizeUseRatio || e4.activeTab === f && e4.cropUseRatio ? e4.diff_x ? (e4.new_w = e4.width + e4.diff_x, e4.new_h = Math.round(e4.new_w / e4.ratio)) : (e4.new_h = e4.height + e4.diff_y, e4.new_w = Math.round(e4.new_h * e4.ratio)) : (e4.new_w = e4.width + e4.diff_x, e4.new_h = e4.height + e4.diff_y), e4.activeTab === p ? (e4.new_w > e4.o.resizeMinWidth && ((0, l.css)(e4.image, "width", e4.new_w + "px"), i4.value = e4.new_w.toString()), e4.new_h > e4.o.resizeMinHeight && ((0, l.css)(e4.image, "height", e4.new_h + "px"), o4.value = e4.new_h.toString()), this.j.e.fire(e4.resizeHandler, "updatesize")) : (e4.target !== e4.cropHandler ? (e4.top_x + e4.new_w > e4.cropImage.offsetWidth && (e4.new_w = e4.cropImage.offsetWidth - e4.top_x), e4.top_y + e4.new_h > e4.cropImage.offsetHeight && (e4.new_h = e4.cropImage.offsetHeight - e4.top_y), (0, l.css)(e4.cropHandler, { width: e4.new_w, height: e4.new_h })) : (e4.top_x + e4.diff_x + e4.cropHandler.offsetWidth > e4.cropImage.offsetWidth && (e4.diff_x = e4.cropImage.offsetWidth - e4.top_x - e4.cropHandler.offsetWidth), (0, l.css)(e4.cropHandler, "left", e4.top_x + e4.diff_x), e4.top_y + e4.diff_y + e4.cropHandler.offsetHeight > e4.cropImage.offsetHeight && (e4.diff_y = e4.cropImage.offsetHeight - e4.top_y - e4.cropHandler.offsetHeight), (0, l.css)(e4.cropHandler, "top", e4.top_y + e4.diff_y)), this.j.e.fire(e4.cropHandler, "updatesize"));
              }
              constructor(t5) {
                super(t5), this.resizeUseRatio = true, this.cropUseRatio = true, this.clicked = false, this.start_x = 0, this.start_y = 0, this.top_x = 0, this.top_y = 0, this.width = 0, this.height = 0, this.activeTab = p, this.naturalWidth = 0, this.naturalHeight = 0, this.ratio = 0, this.new_h = 0, this.new_w = 0, this.diff_x = 0, this.diff_y = 0, this.cropBox = { x: 0, y: 0, w: 0, h: 0 }, this.resizeBox = { w: 0, h: 0 }, this.calcCropBox = () => {
                  const t6 = this.crop_box.parentNode, e5 = 0.8 * t6.offsetWidth, i5 = 0.8 * t6.offsetHeight;
                  let o4 = e5, n4 = i5;
                  const { naturalWidth: r2, naturalHeight: s2 } = this;
                  e5 > r2 && i5 > s2 ? (o4 = r2, n4 = s2) : this.ratio > e5 / i5 ? (o4 = e5, n4 = s2 * (e5 / r2)) : (o4 = r2 * (i5 / s2), n4 = i5), (0, l.css)(this.crop_box, { width: o4, height: n4 });
                }, this.showCrop = () => {
                  if (!this.cropImage) return;
                  this.calcCropBox();
                  const t6 = this.cropImage.offsetWidth || this.image.offsetWidth || this.image.naturalWidth;
                  this.new_w = o3.calcValueByPercent(t6, this.o.cropDefaultWidth);
                  const e5 = this.cropImage.offsetHeight || this.image.offsetHeight || this.image.naturalHeight;
                  this.new_h = this.cropUseRatio ? this.new_w / this.ratio : o3.calcValueByPercent(e5, this.o.cropDefaultHeight), (0, l.css)(this.cropHandler, { backgroundImage: "url(" + (0, l.attr)(this.cropImage, "src") + ")", width: this.new_w, height: this.new_h, left: t6 / 2 - this.new_w / 2, top: e5 / 2 - this.new_h / 2 }), this.j.e.fire(this.cropHandler, "updatesize");
                }, this.updateCropBox = () => {
                  if (!this.cropImage) return;
                  const t6 = this.cropImage.offsetWidth / this.naturalWidth, e5 = this.cropImage.offsetHeight / this.naturalHeight;
                  this.cropBox.x = (0, l.css)(this.cropHandler, "left") / t6, this.cropBox.y = (0, l.css)(this.cropHandler, "top") / e5, this.cropBox.w = this.cropHandler.offsetWidth / t6, this.cropBox.h = this.cropHandler.offsetHeight / e5, this.sizes.textContent = this.cropBox.w.toFixed(0) + "x" + this.cropBox.h.toFixed(0);
                }, this.updateResizeBox = () => {
                  this.resizeBox.w = this.image.offsetWidth || this.naturalWidth, this.resizeBox.h = this.image.offsetHeight || this.naturalHeight;
                }, this.setHandlers = () => {
                  const t6 = this, { widthInput: e5, heightInput: i5 } = (0, l.refs)(this.editor);
                  t6.j.e.on([t6.editor.querySelector(".jodit_bottomright"), t6.cropHandler], `mousedown.${h}`, this.onResizeHandleMouseDown).on(this.j.ow, `resize.${h}`, () => {
                    this.j.e.fire(t6.resizeHandler, "updatesize"), t6.showCrop(), this.j.e.fire(t6.cropHandler, "updatesize");
                  }), t6.j.e.on((0, l.toArray)(this.editor.querySelectorAll(`.${h}__slider-title`)), "click", this.onTitleModeClick).on([e5, i5], "input", this.onChangeSizeInput);
                  const { keepAspectRatioResize: o4, keepAspectRatioCrop: n4 } = (0, l.refs)(this.editor);
                  o4 && o4.addEventListener("change", () => {
                    this.resizeUseRatio = o4.checked;
                  }), n4 && n4.addEventListener("change", () => {
                    this.cropUseRatio = n4.checked;
                  }), t6.j.e.on(t6.resizeHandler, "updatesize", () => {
                    (0, l.css)(t6.resizeHandler, { top: 0, left: 0, width: t6.image.offsetWidth || t6.naturalWidth, height: t6.image.offsetHeight || t6.naturalHeight }), this.updateResizeBox();
                  }).on(t6.cropHandler, "updatesize", () => {
                    if (!t6.cropImage) return;
                    let e6 = (0, l.css)(t6.cropHandler, "left"), i6 = (0, l.css)(t6.cropHandler, "top"), o5 = t6.cropHandler.offsetWidth, n5 = t6.cropHandler.offsetHeight;
                    0 > e6 && (e6 = 0), 0 > i6 && (i6 = 0), e6 + o5 > t6.cropImage.offsetWidth && (o5 = t6.cropImage.offsetWidth - e6, t6.cropUseRatio && (n5 = o5 / t6.ratio)), i6 + n5 > t6.cropImage.offsetHeight && (n5 = t6.cropImage.offsetHeight - i6, t6.cropUseRatio && (o5 = n5 * t6.ratio)), (0, l.css)(t6.cropHandler, { width: o5, height: n5, left: e6, top: i6, backgroundPosition: -e6 - 1 + "px " + (-i6 - 1) + "px", backgroundSize: t6.cropImage.offsetWidth + "px " + t6.cropImage.offsetHeight + "px" }), t6.updateCropBox();
                  }), Object.values(t6.buttons).forEach((o5) => {
                    o5.onAction(() => {
                      const n5 = { action: t6.activeTab, box: t6.activeTab === p ? t6.resizeBox : t6.cropBox };
                      switch (o5) {
                        case t6.buttons.saveas:
                          t6.j.prompt("Enter new name", "Save in new file", (e6) => {
                            if (!(0, l.trim)(e6)) return t6.j.alert("The name should not be empty"), false;
                            t6.onSave(e6, n5, t6.hide, (e7) => {
                              t6.j.alert(e7.message);
                            });
                          });
                          break;
                        case t6.buttons.save:
                          t6.onSave(void 0, n5, t6.hide, (e6) => {
                            t6.j.alert(e6.message);
                          });
                          break;
                        case t6.buttons.reset:
                          t6.activeTab === p ? ((0, l.css)(t6.image, { width: null, height: null }), e5.value = t6.naturalWidth.toString(), i5.value = t6.naturalHeight.toString(), t6.j.e.fire(t6.resizeHandler, "updatesize")) : t6.showCrop();
                      }
                    });
                  });
                }, this.options = t5 && t5.o && t5.o.imageeditor ? t5.o.imageeditor : u.T.defaultOptions.imageeditor;
                const e4 = this.options;
                this.resizeUseRatio = e4.resizeUseRatio, this.cropUseRatio = e4.cropUseRatio, this.buttons = { reset: (0, c.$n)(this.j, "update", "Reset"), save: (0, c.$n)(this.j, "save", "Save"), saveas: (0, c.$n)(this.j, "save", "Save as ...") }, this.activeTab = e4.resize ? p : f, this.editor = (0, d.Z)(this.j, this.options);
                const { resizeBox: i4, cropBox: n3 } = (0, l.refs)(this.editor);
                this.resize_box = i4, this.crop_box = n3, this.sizes = this.editor.querySelector(`.${h}__area.${h}__area_crop .jodit-image-editor__sizes`), this.resizeHandler = this.editor.querySelector(`.${h}__resizer`), this.cropHandler = this.editor.querySelector(`.${h}__croper`), this._dialog = this.j.dlg({ buttons: ["fullsize", "dialog.close"] }), this._dialog.setContent(this.editor), this._dialog.setSize(this.o.width, this.o.height), this._dialog.setHeader([this.buttons.reset, this.buttons.save, this.buttons.saveas]), this.setHandlers();
              }
              destruct() {
                this.isDestructed || (this._dialog && !this._dialog.isInDestruct && this._dialog.destruct(), a.J.safeRemove(this.editor), this.j.e && this.j.e.off(this.j.ow, "mousemove", this.onGlobalMouseMove).off(this.j.ow, "mouseup", this.onGlobalMouseUp).off(this.ow, `.${h}`).off(`.${h}`), super.destruct());
              }
            };
            function m(t5, e4, i4, o4, n3, r2) {
              return this.getInstance("ImageEditor", this.o).open(t5, (t6, s2, a2, c2) => (0, l.call)("resize" === s2.action ? this.dataProvider.resize : this.dataProvider.crop, i4, o4, e4, t6, s2.box).then((t7) => {
                t7 && (a2(), n3 && n3());
              }).catch((t7) => {
                c2(t7), r2 && r2(t7);
              }));
            }
            g.calcValueByPercent = (t5, e4) => {
              const i4 = e4.toString(), o4 = parseFloat(t5.toString());
              let n3;
              return n3 = /^[-+]?[0-9]+(px)?$/.exec(i4), n3 ? parseInt(i4, 10) : (n3 = /^([-+]?[0-9.]+)%$/.exec(i4), n3 ? Math.round(o4 * (parseFloat(n3[1]) / 100)) : o4 || 0);
            }, (0, n2.Cg)([s.autobind], g.prototype, "hide", null), (0, n2.Cg)([s.autobind], g.prototype, "open", null), (0, n2.Cg)([s.autobind], g.prototype, "onTitleModeClick", null), (0, n2.Cg)([(0, s.debounce)(), s.autobind], g.prototype, "onChangeSizeInput", null), (0, n2.Cg)([s.autobind], g.prototype, "onResizeHandleMouseDown", null), (0, n2.Cg)([s.autobind], g.prototype, "onGlobalMouseUp", null), (0, n2.Cg)([(0, s.throttle)(10)], g.prototype, "onGlobalMouseMove", null), g = o3 = (0, n2.Cg)([s.component], g);
          }, 24863: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return a;
            } });
            var o3 = i3(53048);
            const n2 = "jodit-image-editor", r = o3.In.get.bind(o3.In), s = (t5, e4 = "jodti-image-editor_active") => t5 ? e4 : "", a = (t5, e4) => {
              const i4 = t5.i18n.bind(t5), o4 = (t6, e5, o5 = true) => `<div class="jodit-form__group">
			<label class="jodit-switcher-wrapper">
				<span class='jodit-switcher'>
					<input ${s(o5, "checked")} data-ref="${e5}" type="checkbox"/>
					<span class="jodit-switcher__slider"></span>
				</span>
				<span>${i4(t6)}</span>
			</label>
	</div>`;
              return t5.create.fromHTML(`<form class="${n2} jodit-properties">
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-3-4 jodit_col-sm-5-5">
			${e4.resize ? `<div class="${n2}__area ${n2}__area_resize ${n2}_active">
							<div data-ref="resizeBox" class="${n2}__box"></div>
							<div class="${n2}__resizer">
								<i class="jodit_bottomright"></i>
							</div>
						</div>` : ""}
			${e4.crop ? `<div class="${n2}__area ${n2}__area_crop ${s(!e4.resize)}">
							<div data-ref="cropBox" class="${n2}__box">
								<div class="${n2}__croper">
									<i class="jodit_bottomright"></i>
									<i class="${n2}__sizes"></i>
								</div>
							</div>
						</div>` : ""}
			</div>
			<div class="jodit_col-lg-1-4 jodit_col-sm-5-5">
			${e4.resize ? `<div data-area="resize" class="${n2}__slider ${n2}_active">
							<div class="${n2}__slider-title">
								${r("resize")}
								${i4("Resize")}
							</div>
							<div class="${n2}__slider-content">
								<div class="jodit-form__group">
									<label>
										${i4("Width")}
									</label>
									<input type="number" data-ref="widthInput" class="jodit-input"/>
								</div>
								<div class="jodit-form__group">
									<label>
										${i4("Height")}
									</label>
									<input type="number" data-ref="heightInput" class="jodit-input"/>
								</div>
								${o4("Keep Aspect Ratio", "keepAspectRatioResize")}
							</div>
						</div>` : ""}
			${e4.crop ? `<div data-area="crop" class="${n2}__slider ${s(!e4.resize)}'">
							<div class="${n2}__slider-title">
								${r("crop")}
								${i4("Crop")}
							</div>
							<div class="${n2}__slider-content">
								${o4("Keep Aspect Ratio", "keepAspectRatioCrop")}
							</div>
						</div>` : ""}
			</div>
		</div>
	</form>`);
            };
          }, 37435: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { Ajax: function() {
              return p.d;
            }, Alert: function() {
              return s.Fc;
            }, Async: function() {
              return l.j;
            }, Button: function() {
              return f.$n;
            }, CommitStyle: function() {
              return T.xk;
            }, Component: function() {
              return o3.uA;
            }, Confirm: function() {
              return s.pT;
            }, ContextMenu: function() {
              return r.t;
            }, Create: function() {
              return c.X;
            }, Dialog: function() {
              return s.lG;
            }, Dom: function() {
              return d.J;
            }, EventEmitter: function() {
              return u.bk;
            }, EventHandlersStore: function() {
              return u.d$;
            }, Eventify: function() {
              return u.h5;
            }, FileBrowser: function() {
              return a.V;
            }, Helpers: function() {
              return n2;
            }, History: function() {
              return b.B;
            }, Icon: function() {
              return f.In;
            }, ImageEditor: function() {
              return v.n;
            }, LazyWalker: function() {
              return d.p;
            }, Plugin: function() {
              return h.k;
            }, PluginSystem: function() {
              return z.$;
            }, Popup: function() {
              return f.zD;
            }, ProgressBar: function() {
              return f.z2;
            }, Prompt: function() {
              return s.XG;
            }, Response: function() {
              return p.Y;
            }, STATUSES: function() {
              return o3.f;
            }, Selection: function() {
              return T.LN;
            }, Snapshot: function() {
              return _.F;
            }, StatusBar: function() {
              return w.e;
            }, Table: function() {
              return y.X;
            }, ToolbarButton: function() {
              return j.IB;
            }, ToolbarCollection: function() {
              return k.Q;
            }, ToolbarContent: function() {
              return j.P1;
            }, ToolbarEditorCollection: function() {
              return C.b;
            }, ToolbarSelect: function() {
              return j.q4;
            }, UIBlock: function() {
              return f.Yh;
            }, UIButton: function() {
              return f.lD;
            }, UIButtonGroup: function() {
              return f.ss;
            }, UIButtonState: function() {
              return f.ue;
            }, UICheckbox: function() {
              return f.cY;
            }, UIElement: function() {
              return f.D$;
            }, UIFileInput: function() {
              return f.nE;
            }, UIForm: function() {
              return f.XV;
            }, UIGroup: function() {
              return f.Ue;
            }, UIInput: function() {
              return f.tS;
            }, UIList: function() {
              return f.z4;
            }, UIMessages: function() {
              return x.N;
            }, UISelect: function() {
              return f.$6;
            }, UISeparator: function() {
              return f.CP;
            }, UISpacer: function() {
              return f.bk;
            }, UITextArea: function() {
              return f.F0;
            }, UITooltip: function() {
              return f.SB;
            }, Uploader: function() {
              return S.d;
            }, View: function() {
              return g.S;
            }, ViewComponent: function() {
              return o3.vG;
            }, ViewWithToolbar: function() {
              return m.T;
            }, defaultNameSpace: function() {
              return u.Xr;
            }, observable: function() {
              return u.sH;
            } });
            var o3 = i3(77753), n2 = i3(65147), r = i3(34248), s = i3(34256), a = i3(19627), l = i3(64890), c = i3(40594), d = i3(71842), u = i3(50025), h = i3(71005), p = i3(53883), f = i3(53048), g = i3(77782), m = i3(14961), b = i3(69996), _ = i3(58770), v = i3(53804), x = i3(91902), w = i3(62870), y = i3(11648), j = i3(5832), k = i3(97394), C = i3(90428), S = i3(26538), z = i3(77402), T = i3(87332);
          }, 91479: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return s;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(53048);
            let s = class extends r.D$ {
              className() {
                return "UIMessage";
              }
              constructor(t5, e4) {
                super(t5), this.setMod("active", true), this.setMod("variant", e4.variant), this.container.textContent = e4.text;
              }
            };
            s = (0, o3.Cg)([n2.s], s);
          }, 91902: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return l;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(38322), s = i3(6455), a = i3(91479);
            let l = class extends s.U {
              className() {
                return "UIMessages";
              }
              constructor(t5, e4, i4 = { defaultTimeout: 3e3, defaultOffset: 5 }) {
                super(t5), this.__box = e4, this.options = i4, this.__messages = /* @__PURE__ */ new Set();
              }
              info(t5, e4) {
                this.__message(t5, "info", e4);
              }
              success(t5, e4) {
                this.__message(t5, "success", e4);
              }
              error(t5, e4) {
                this.__message(t5, "error", e4);
              }
              message(t5, e4, i4) {
                this.__message(t5, e4, i4);
              }
              __message(t5, e4 = "info", i4) {
                const o4 = t5 + ":" + e4;
                if (this.__messages.has(o4)) return void this.async.updateTimeout(o4, i4 || this.options.defaultTimeout);
                if (!this.__box) throw new Error("Container is not defined: " + o4);
                this.__box.appendChild(this.container);
                const n3 = new a.C(this.j, { text: t5, variant: e4 });
                this.append(n3), this.__calcOffsets(), this.__messages.add(o4);
                const r2 = this.__getRemoveCallback(n3, o4);
                this.j.e.on(n3.container, "pointerdown", r2), this.async.setTimeout(r2, { label: o4, timeout: i4 || this.options.defaultTimeout });
              }
              __getRemoveCallback(t5, e4) {
                const i4 = (o4) => {
                  o4 && o4.preventDefault(), t5.isInDestruct || (this.async.clearTimeout(e4), this.j.e.off(t5.container, "pointerdown", i4), this.__messages.delete(e4), t5.setMod("active", false), this.async.setTimeout(() => {
                    this.remove(t5), t5.destruct(), this.__calcOffsets();
                  }, 300));
                };
                return i4;
              }
              __calcOffsets() {
                let t5 = 5;
                this.elements.forEach((e4) => {
                  (0, r.A)(e4.container, "bottom", t5 + "px"), t5 += e4.container.offsetHeight + this.options.defaultOffset;
                });
              }
            };
            l = (0, o3.Cg)([n2.s], l);
          }, 62870: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { e: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(77753), r = i3(22664), s = i3(55186), a = i3(87906), l = i3(75758);
            let c = class extends n2.vG {
              className() {
                return "StatusBar";
              }
              hide() {
                this.container.classList.add("jodit_hidden");
              }
              show() {
                this.container.classList.remove("jodit_hidden");
              }
              get isShown() {
                return !this.container.classList.contains("jodit_hidden");
              }
              getHeight() {
                var t5, e4;
                return null !== (e4 = null === (t5 = this.container) || void 0 === t5 ? void 0 : t5.offsetHeight) && void 0 !== e4 ? e4 : 0;
              }
              findEmpty(t5 = false) {
                const e4 = this.getElms(t5 ? "item-right" : "item");
                for (let t6 = 0; e4.length > t6; t6 += 1) if (!e4[t6].innerHTML.trim().length) return e4[t6];
              }
              append(t5, e4 = false) {
                var i4;
                const o4 = this.findEmpty(e4) || this.j.c.div(this.getFullElName("item"));
                e4 && o4.classList.add(this.getFullElName("item-right")), o4.appendChild(t5), null === (i4 = this.container) || void 0 === i4 || i4.appendChild(o4), this.j.o.statusbar && this.show(), this.j.e.fire("resize");
              }
              constructor(t5, e4) {
                super(t5), this.target = e4, this.mods = {}, this.container = t5.c.div("jodit-status-bar"), e4.appendChild(this.container), this.hide();
              }
              destruct() {
                this.isInDestruct || (this.setStatus(n2.f.beforeDestruct), s.J.safeRemove(this.container), super.destruct());
              }
            };
            c = (0, o3.Cg)([r.component, (0, r.derive)(l.K, a.O)], c);
          }, 11648: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return u;
            } });
            var o3 = i3(31635), n2 = i3(77753), r = i3(17352), s = i3(22664), a = i3(71842), l = i3(56298), c = i3(65147);
            const d = /* @__PURE__ */ new WeakMap();
            class u extends n2.vG {
              constructor() {
                super(...arguments), this.selected = /* @__PURE__ */ new Set();
              }
              className() {
                return "Table";
              }
              __recalculateStyles() {
                const t5 = (0, l.My)(this.j, u, "style", true), e4 = [];
                this.selected.forEach((t6) => {
                  const i4 = (0, c.cssPath)(t6);
                  i4 && e4.push(i4);
                }), t5.innerHTML = e4.length ? e4.join(",") + `{${this.jodit.options.table.selectionCellStyle}}` : "";
              }
              addSelection(t5) {
                this.selected.add(t5), this.__recalculateStyles();
                const e4 = a.J.closest(t5, "table", this.j.editor);
                if (e4) {
                  const i4 = u.__selectedByTable.get(e4) || /* @__PURE__ */ new Set();
                  i4.add(t5), u.__selectedByTable.set(e4, i4);
                }
              }
              removeSelection(t5) {
                this.selected.delete(t5), this.__recalculateStyles();
                const e4 = a.J.closest(t5, "table", this.j.editor);
                if (e4) {
                  const i4 = u.__selectedByTable.get(e4);
                  i4 && (i4.delete(t5), i4.size || u.__selectedByTable.delete(e4));
                }
              }
              getAllSelectedCells() {
                return (0, c.toArray)(this.selected);
              }
              static __getSelectedCellsByTable(t5) {
                const e4 = u.__selectedByTable.get(t5);
                return e4 ? (0, c.toArray)(e4) : [];
              }
              destruct() {
                return this.selected.clear(), super.destruct();
              }
              static __getRowsCount(t5) {
                return t5.rows.length;
              }
              getRowsCount(t5) {
                return u.__getRowsCount(t5);
              }
              static __getColumnsCount(t5) {
                return u.__formalMatrix(t5).reduce((t6, e4) => Math.max(t6, e4.length), 0);
              }
              getColumnsCount(t5) {
                return u.__getColumnsCount(t5);
              }
              static __formalMatrix(t5, e4) {
                const i4 = [[]], o4 = (0, c.toArray)(t5.rows), n3 = (t6, o5) => {
                  void 0 === i4[o5] && (i4[o5] = []);
                  const n4 = t6.colSpan, r2 = t6.rowSpan;
                  let s2, a2, l2 = 0;
                  for (; i4[o5][l2]; ) l2 += 1;
                  for (a2 = 0; r2 > a2; a2 += 1) for (s2 = 0; n4 > s2; s2 += 1) {
                    if (void 0 === i4[o5 + a2] && (i4[o5 + a2] = []), e4 && false === e4(t6, o5 + a2, l2 + s2, n4, r2)) return false;
                    i4[o5 + a2][l2 + s2] = t6;
                  }
                };
                for (let t6 = 0; o4.length > t6; t6 += 1) {
                  const e5 = (0, c.toArray)(o4[t6].cells);
                  for (let o5 = 0; e5.length > o5; o5 += 1) if (false === n3(e5[o5], t6)) return i4;
                }
                return i4;
              }
              formalMatrix(t5, e4) {
                return u.__formalMatrix(t5, e4);
              }
              static __formalCoordinate(t5, e4, i4 = false) {
                let o4 = 0, n3 = 0, r2 = 1, s2 = 1;
                return u.__formalMatrix(t5, (t6, a2, l2, c2, d2) => {
                  if (e4 === t6) return o4 = a2, n3 = l2, r2 = c2 || 1, s2 = d2 || 1, i4 && (n3 += (c2 || 1) - 1, o4 += (d2 || 1) - 1), false;
                }), [o4, n3, r2, s2];
              }
              formalCoordinate(t5, e4, i4 = false) {
                return u.__formalCoordinate(t5, e4, i4);
              }
              static __appendRow(t5, e4, i4, o4) {
                var n3;
                let r2;
                if (e4) r2 = e4.cloneNode(true), (0, c.$$)("td,th", e4).forEach((t6) => {
                  const e5 = (0, c.attr)(t6, "rowspan");
                  if (e5 && parseInt(e5, 10) > 1) {
                    const i5 = parseInt(e5, 10) - 1;
                    (0, c.attr)(t6, "rowspan", i5 > 1 ? i5 : null);
                  }
                }), (0, c.$$)("td,th", r2).forEach((t6) => {
                  t6.innerHTML = "";
                });
                else {
                  const e5 = u.__getColumnsCount(t5);
                  r2 = o4.element("tr");
                  for (let t6 = 0; e5 > t6; t6 += 1) r2.appendChild(o4.element("td"));
                }
                i4 && e4 && e4.nextSibling ? e4.parentNode && e4.parentNode.insertBefore(r2, e4.nextSibling) : !i4 && e4 ? e4.parentNode && e4.parentNode.insertBefore(r2, e4) : ((null === (n3 = t5.getElementsByTagName("tbody")) || void 0 === n3 ? void 0 : n3[0]) || t5).appendChild(r2);
              }
              appendRow(t5, e4, i4) {
                return u.__appendRow(t5, e4, i4, this.j.createInside);
              }
              static __removeRow(t5, e4) {
                const i4 = u.__formalMatrix(t5);
                let o4;
                const n3 = t5.rows[e4];
                i4[e4].forEach((r2, s2) => {
                  if (o4 = false, 0 > e4 - 1 || i4[e4 - 1][s2] !== r2) if (i4[e4 + 1] && i4[e4 + 1][s2] === r2) {
                    if (r2.parentNode === n3 && r2.parentNode.nextSibling) {
                      o4 = true;
                      let n4 = s2 + 1;
                      for (; i4[e4 + 1][n4] === r2; ) n4 += 1;
                      const l2 = a.J.next(r2.parentNode, (t6) => a.J.isTag(t6, "tr"), t5);
                      l2 && (i4[e4 + 1][n4] ? l2.insertBefore(r2, i4[e4 + 1][n4]) : l2.appendChild(r2));
                    }
                  } else a.J.safeRemove(r2);
                  else o4 = true;
                  if (o4 && (r2.parentNode === n3 || r2 !== i4[e4][s2 - 1])) {
                    const t6 = r2.rowSpan;
                    (0, c.attr)(r2, "rowspan", t6 - 1 > 1 ? t6 - 1 : null);
                  }
                }), a.J.safeRemove(n3);
              }
              removeRow(t5, e4) {
                return u.__removeRow(t5, e4);
              }
              static __appendColumn(t5, e4, i4, o4) {
                const n3 = u.__formalMatrix(t5);
                let r2;
                for ((void 0 === e4 || 0 > e4) && (e4 = u.__getColumnsCount(t5) - 1), r2 = 0; n3.length > r2; r2 += 1) {
                  const t6 = o4.element("td"), s2 = n3[r2][e4];
                  let l2 = false;
                  i4 ? (n3[r2] && s2 && e4 + 1 >= n3[r2].length || s2 !== n3[r2][e4 + 1]) && (s2.nextSibling ? a.J.before(s2.nextSibling, t6) : s2.parentNode && s2.parentNode.appendChild(t6), l2 = true) : (0 > e4 - 1 || n3[r2][e4] !== n3[r2][e4 - 1] && n3[r2][e4].parentNode) && (a.J.before(n3[r2][e4], t6), l2 = true), l2 || (0, c.attr)(n3[r2][e4], "colspan", parseInt((0, c.attr)(n3[r2][e4], "colspan") || "1", 10) + 1);
                }
              }
              appendColumn(t5, e4, i4) {
                return u.__appendColumn(t5, e4, i4, this.j.createInside);
              }
              static __removeColumn(t5, e4) {
                const i4 = u.__formalMatrix(t5);
                let o4;
                i4.forEach((t6, n3) => {
                  const r2 = t6[e4];
                  if (o4 = false, 0 > e4 - 1 || i4[n3][e4 - 1] !== r2 ? t6.length > e4 + 1 && i4[n3][e4 + 1] === r2 ? o4 = true : a.J.safeRemove(r2) : o4 = true, o4 && (0 > n3 - 1 || r2 !== i4[n3 - 1][e4])) {
                    const t7 = r2.colSpan;
                    (0, c.attr)(r2, "colspan", t7 - 1 > 1 ? (t7 - 1).toString() : null);
                  }
                });
              }
              removeColumn(t5, e4) {
                return u.__removeColumn(t5, e4);
              }
              static __getSelectedBound(t5, e4) {
                const i4 = [[1 / 0, 1 / 0], [0, 0]], o4 = u.__formalMatrix(t5);
                let n3, r2, s2;
                for (n3 = 0; o4.length > n3; n3 += 1) for (r2 = 0; o4[n3] && o4[n3].length > r2; r2 += 1) e4.includes(o4[n3][r2]) && (i4[0][0] = Math.min(n3, i4[0][0]), i4[0][1] = Math.min(r2, i4[0][1]), i4[1][0] = Math.max(n3, i4[1][0]), i4[1][1] = Math.max(r2, i4[1][1]));
                for (n3 = i4[0][0]; i4[1][0] >= n3; n3 += 1) for (s2 = 1, r2 = i4[0][1]; i4[1][1] >= r2; r2 += 1) {
                  for (; o4[n3] && o4[n3][r2 - s2] && o4[n3][r2] === o4[n3][r2 - s2]; ) i4[0][1] = Math.min(r2 - s2, i4[0][1]), i4[1][1] = Math.max(r2 - s2, i4[1][1]), s2 += 1;
                  for (s2 = 1; o4[n3] && o4[n3][r2 + s2] && o4[n3][r2] === o4[n3][r2 + s2]; ) i4[0][1] = Math.min(r2 + s2, i4[0][1]), i4[1][1] = Math.max(r2 + s2, i4[1][1]), s2 += 1;
                  for (s2 = 1; o4[n3 - s2] && o4[n3][r2] === o4[n3 - s2][r2]; ) i4[0][0] = Math.min(n3 - s2, i4[0][0]), i4[1][0] = Math.max(n3 - s2, i4[1][0]), s2 += 1;
                  for (s2 = 1; o4[n3 + s2] && o4[n3][r2] === o4[n3 + s2][r2]; ) i4[0][0] = Math.min(n3 + s2, i4[0][0]), i4[1][0] = Math.max(n3 + s2, i4[1][0]), s2 += 1;
                }
                return i4;
              }
              getSelectedBound(t5, e4) {
                return u.__getSelectedBound(t5, e4);
              }
              static __normalizeTable(t5) {
                let e4, i4, o4, n3;
                const r2 = [], s2 = u.__formalMatrix(t5);
                for (i4 = 0; s2[0].length > i4; i4 += 1) {
                  for (o4 = 1e6, n3 = false, e4 = 0; s2.length > e4; e4 += 1) if (void 0 !== s2[e4][i4]) {
                    if (2 > s2[e4][i4].colSpan) {
                      n3 = true;
                      break;
                    }
                    o4 = Math.min(o4, s2[e4][i4].colSpan);
                  }
                  if (!n3) for (e4 = 0; s2.length > e4; e4 += 1) void 0 !== s2[e4][i4] && u.__mark(s2[e4][i4], "colspan", s2[e4][i4].colSpan - o4 + 1, r2);
                }
                for (e4 = 0; s2.length > e4; e4 += 1) {
                  for (o4 = 1e6, n3 = false, i4 = 0; s2[e4].length > i4; i4 += 1) if (void 0 !== s2[e4][i4]) {
                    if (2 > s2[e4][i4].rowSpan) {
                      n3 = true;
                      break;
                    }
                    o4 = Math.min(o4, s2[e4][i4].rowSpan);
                  }
                  if (!n3) for (i4 = 0; s2[e4].length > i4; i4 += 1) void 0 !== s2[e4][i4] && u.__mark(s2[e4][i4], "rowspan", s2[e4][i4].rowSpan - o4 + 1, r2);
                }
                for (e4 = 0; s2.length > e4; e4 += 1) for (i4 = 0; s2[e4].length > i4; i4 += 1) void 0 !== s2[e4][i4] && (s2[e4][i4].hasAttribute("rowspan") && 1 === s2[e4][i4].rowSpan && (0, c.attr)(s2[e4][i4], "rowspan", null), s2[e4][i4].hasAttribute("colspan") && 1 === s2[e4][i4].colSpan && (0, c.attr)(s2[e4][i4], "colspan", null), s2[e4][i4].hasAttribute("class") && !(0, c.attr)(s2[e4][i4], "class") && (0, c.attr)(s2[e4][i4], "class", null));
                u.__unmark(r2);
              }
              normalizeTable(t5) {
                return u.__normalizeTable(t5);
              }
              static __mergeSelected(t5, e4) {
                const i4 = [], o4 = u.__getSelectedBound(t5, u.__getSelectedCellsByTable(t5));
                let n3, s2 = 0, l2 = null, d2 = 0, p = 0, f = 0;
                const g = /* @__PURE__ */ new Set(), m = [];
                o4 && (o4[0][0] - o4[1][0] || o4[0][1] - o4[1][1]) && (u.__formalMatrix(t5, (t6, r2, a2, b, _) => {
                  if (!(o4[0][0] > r2 || r2 > o4[1][0] || o4[0][1] > a2 || a2 > o4[1][1])) {
                    if (n3 = t6, g.has(n3)) return;
                    g.add(n3), r2 === o4[0][0] && n3.style.width && (s2 += n3.offsetWidth), "" !== (0, c.trim)(t6.innerHTML.replace(/<br(\/)?>/g, "")) && i4.push(t6.innerHTML), b > 1 && (p += b - 1), _ > 1 && (f += _ - 1), l2 ? (u.__mark(n3, "remove", 1, m), h(e4).removeSelection(n3)) : (l2 = t6, d2 = a2);
                  }
                }), p = o4[1][1] - o4[0][1] + 1, f = o4[1][0] - o4[0][0] + 1, l2 && (p > 1 && u.__mark(l2, "colspan", p, m), f > 1 && u.__mark(l2, "rowspan", f, m), s2 && (u.__mark(l2, "width", (s2 / t5.offsetWidth * 100).toFixed(r.ACCURACY) + "%", m), d2 && u.__setColumnWidthByDelta(t5, d2, 0, true, m)), l2.innerHTML = i4.join("<br/>"), h(e4).addSelection(l2), g.delete(l2), u.__unmark(m), u.__normalizeTable(t5), (0, c.toArray)(t5.rows).forEach((t6, e5) => {
                  t6.cells.length || a.J.safeRemove(t6);
                })));
              }
              mergeSelected(t5) {
                return u.__mergeSelected(t5, this.j);
              }
              static __splitHorizontal(t5, e4) {
                let i4, o4, n3, r2, s2;
                const l2 = [];
                u.__getSelectedCellsByTable(t5).forEach((c2) => {
                  o4 = e4.createInside.element("td"), o4.appendChild(e4.createInside.element("br")), n3 = e4.createInside.element("tr"), i4 = u.__formalCoordinate(t5, c2), 2 > c2.rowSpan ? (u.__formalMatrix(t5, (t6, e5, o5) => {
                    i4[0] === e5 && i4[1] !== o5 && t6 !== c2 && u.__mark(t6, "rowspan", t6.rowSpan + 1, l2);
                  }), a.J.after(a.J.closest(c2, "tr", t5), n3), n3.appendChild(o4)) : (u.__mark(c2, "rowspan", c2.rowSpan - 1, l2), u.__formalMatrix(t5, (e5, o5, n4) => {
                    o5 > i4[0] && i4[0] + c2.rowSpan > o5 && i4[1] > n4 && e5.parentNode.rowIndex === o5 && (s2 = e5), o5 > i4[0] && e5 === c2 && (r2 = t5.rows[o5]);
                  }), s2 ? a.J.after(s2, o4) : r2.insertBefore(o4, r2.firstChild)), c2.colSpan > 1 && u.__mark(o4, "colspan", c2.colSpan, l2), u.__unmark(l2), h(e4).removeSelection(c2);
                }), this.__normalizeTable(t5);
              }
              splitHorizontal(t5) {
                return u.__splitHorizontal(t5, this.j);
              }
              static __splitVertical(t5, e4) {
                let i4, o4, n3;
                const s2 = [];
                u.__getSelectedCellsByTable(t5).forEach((l2) => {
                  i4 = u.__formalCoordinate(t5, l2), 2 > l2.colSpan ? u.__formalMatrix(t5, (t6, e5, o5) => {
                    i4[1] === o5 && i4[0] !== e5 && t6 !== l2 && u.__mark(t6, "colspan", t6.colSpan + 1, s2);
                  }) : u.__mark(l2, "colspan", l2.colSpan - 1, s2), o4 = e4.createInside.element("td"), o4.appendChild(e4.createInside.element("br")), l2.rowSpan > 1 && u.__mark(o4, "rowspan", l2.rowSpan, s2);
                  const c2 = l2.offsetWidth;
                  a.J.after(l2, o4), n3 = c2 / t5.offsetWidth / 2, u.__mark(l2, "width", (100 * n3).toFixed(r.ACCURACY) + "%", s2), u.__mark(o4, "width", (100 * n3).toFixed(r.ACCURACY) + "%", s2), u.__unmark(s2), h(e4).removeSelection(l2);
                }), u.__normalizeTable(t5);
              }
              splitVertical(t5) {
                return u.__splitVertical(t5, this.j);
              }
              static __setColumnWidthByDelta(t5, e4, i4, o4, n3) {
                const s2 = u.__formalMatrix(t5);
                let a2 = 0;
                for (let o5 = 0; s2.length > o5; o5 += 1) {
                  const l2 = s2[o5][e4];
                  if (1 >= l2.colSpan || 1 >= s2.length) {
                    u.__mark(l2, "width", ((l2.offsetWidth + i4) / t5.offsetWidth * 100).toFixed(r.ACCURACY) + "%", n3), a2 = o5;
                    break;
                  }
                }
                for (let t6 = a2 + 1; s2.length > t6; t6 += 1) u.__mark(s2[t6][e4], "width", null, n3);
                o4 || u.__unmark(n3);
              }
              setColumnWidthByDelta(t5, e4, i4, o4, n3) {
                return u.__setColumnWidthByDelta(t5, e4, i4, o4, n3);
              }
              static __mark(t5, e4, i4, o4) {
                var n3;
                o4.push(t5);
                const r2 = null !== (n3 = d.get(t5)) && void 0 !== n3 ? n3 : {};
                r2[e4] = void 0 === i4 ? 1 : i4, d.set(t5, r2);
              }
              static __unmark(t5) {
                t5.forEach((t6) => {
                  const e4 = d.get(t6);
                  e4 && (Object.keys(e4).forEach((i4) => {
                    const o4 = e4[i4];
                    switch (i4) {
                      case "remove":
                        a.J.safeRemove(t6);
                        break;
                      case "rowspan":
                        (0, c.attr)(t6, "rowspan", (0, c.isNumber)(o4) && o4 > 1 ? o4 : null);
                        break;
                      case "colspan":
                        (0, c.attr)(t6, "colspan", (0, c.isNumber)(o4) && o4 > 1 ? o4 : null);
                        break;
                      case "width":
                        null == o4 ? (t6.style.removeProperty("width"), (0, c.attr)(t6, "style") || (0, c.attr)(t6, "style", null)) : t6.style.width = o4.toString();
                    }
                    delete e4[i4];
                  }), d.delete(t6));
                });
              }
            }
            u.__selectedByTable = /* @__PURE__ */ new WeakMap(), (0, o3.Cg)([(0, s.debounce)()], u.prototype, "__recalculateStyles", null);
            const h = (t5) => t5.getInstance("Table", t5.o);
          }, 3258: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { I: function() {
              return f;
            } });
            var o3 = i3(31635), n2 = i3(64567), r = i3(22664), s = i3(71842), a = i3(65147), l = i3(35265), c = i3(57023), d = i3(931), u = i3(80071), h = i3(97394), p = i3(8809);
            let f = class extends l.lD {
              className() {
                return "ToolbarButton";
              }
              get toolbar() {
                return this.closest(h.Q);
              }
              update() {
                var t5, e4;
                const { control: i4, state: o4 } = this, n3 = this.closest(h.Q);
                if (!n3) return;
                const r2 = null === (t5 = i4.value) || void 0 === t5 ? void 0 : t5.call(i4, n3.jodit, this);
                void 0 !== r2 && (o4.value = r2), o4.disabled = this.__calculateDisabledStatus(n3), o4.activated = this.__calculateActivatedStatus(n3), null === (e4 = i4.update) || void 0 === e4 || e4.call(i4, n3.jodit, this);
              }
              __calculateActivatedStatus(t5) {
                var e4, i4;
                return !((0, a.isJoditObject)(this.j) && !this.j.editorIsActive) && (!!(null === (i4 = (e4 = this.control).isActive) || void 0 === i4 ? void 0 : i4.call(e4, this.j, this)) || Boolean(t5 && t5.shouldBeActive(this)));
              }
              __calculateDisabledStatus(t5) {
                var e4, i4;
                return !!this.j.o.disabled || !(!this.j.o.readonly || this.j.o.activeButtonsInReadOnly && this.j.o.activeButtonsInReadOnly.includes(this.control.name)) || !!(null === (i4 = (e4 = this.control).isDisabled) || void 0 === i4 ? void 0 : i4.call(e4, this.j, this)) || Boolean(t5 && t5.shouldBeDisabled(this));
              }
              onChangeActivated() {
                (0, a.attr)(this.button, "aria-pressed", this.state.activated), super.onChangeActivated();
              }
              onChangeText() {
                (0, a.isFunction)(this.control.template) ? this.text.innerHTML = this.control.template(this.j, this.control.name, this.j.i18n(this.state.text)) : super.onChangeText(), this.setMod("text-icons", Boolean(this.text.innerText.trim().length));
              }
              onChangeTabIndex() {
                (0, a.attr)(this.button, "tabindex", this.state.tabIndex);
              }
              createContainer() {
                const t5 = this.componentName, e4 = this.j.c.span(t5), i4 = super.createContainer();
                (0, a.attr)(e4, "role", "listitem"), i4.classList.remove(t5), i4.classList.add(t5 + "__button"), Object.defineProperty(i4, "component", { value: this }), e4.appendChild(i4);
                const o4 = this.j.c.fromHTML(`<span role="trigger" class="${t5}__trigger">${d.I.get("chevron")}</span>`);
                return i4.appendChild(o4), e4;
              }
              focus() {
                var t5;
                null === (t5 = this.container.querySelector("button")) || void 0 === t5 || t5.focus();
              }
              onChangeHasTrigger() {
                this.state.hasTrigger ? this.container.appendChild(this.trigger) : s.J.safeRemove(this.trigger), this.setMod("with-trigger", this.state.hasTrigger || null);
              }
              onChangeDisabled() {
                const t5 = this.state.disabled ? "disabled" : null;
                (0, a.attr)(this.trigger, "disabled", t5), (0, a.attr)(this.button, "disabled", t5), (0, a.attr)(this.container, "disabled", t5);
              }
              constructor(t5, e4, i4 = null) {
                super(t5), this.control = e4, this.target = i4, this.state = { ...(0, l.ue)(), theme: "toolbar", currentValue: "", hasTrigger: false }, this.openedPopup = null;
                const o4 = this.getElm("button");
                this.button = o4, Object.defineProperty(o4, "component", { value: this, configurable: true });
                const r2 = this.getElm("trigger");
                this.trigger = r2, r2.remove(), t5.e.on([this.button, this.trigger], "mousedown", (t6) => t6.preventDefault()), this.onAction(this.onClick), this.hookStatus(n2.f.ready, () => {
                  this.__initFromControl(), this.update();
                }), e4.mods && Object.keys(e4.mods).forEach((t6) => {
                  e4.mods && this.setMod(t6, e4.mods[t6]);
                });
              }
              __initFromControl() {
                var t5;
                const { control: e4, state: i4 } = this;
                this.updateSize(), i4.name = e4.name;
                const { textIcons: o4 } = this.j.o;
                if (true === o4 || (0, a.isFunction)(o4) && o4(e4.name) || e4.template) i4.icon = (0, l.ue)().icon, i4.text = e4.text || e4.name;
                else {
                  if (e4.iconURL) i4.icon.iconURL = e4.iconURL;
                  else {
                    const o5 = e4.icon || e4.name;
                    i4.icon.name = d.I.exists(o5) || (null === (t5 = this.j.o.extraIcons) || void 0 === t5 ? void 0 : t5[o5]) ? o5 : "";
                  }
                  e4.iconURL || i4.icon.name || (i4.text = e4.text || e4.name);
                }
                e4.tooltip && (i4.tooltip = this.j.i18n((0, a.isFunction)(e4.tooltip) ? e4.tooltip(this.j, e4, this) : e4.tooltip)), i4.hasTrigger = Boolean(e4.list || e4.popup && e4.exec);
              }
              onTriggerClick(t5) {
                var e4, i4, o4;
                if (this.openedPopup) return void this.__closePopup();
                const { control: n3 } = this;
                if (t5.buffer = { actionTrigger: this }, n3.list) return this.__openControlList(n3);
                if ((0, a.isFunction)(n3.popup)) {
                  const t6 = this.openPopup();
                  if (t6.parentElement = this, false !== this.j.e.fire((0, a.camelCase)(`before-${n3.name}-open-popup`), this.target, n3, t6)) {
                    const r2 = null !== (o4 = null !== (i4 = null === (e4 = this.toolbar) || void 0 === e4 ? void 0 : e4.getTarget(this)) && void 0 !== i4 ? i4 : this.target) && void 0 !== o4 ? o4 : null, s2 = n3.popup(this.j, r2, this.__closePopup, this);
                    s2 && t6.setContent((0, a.isString)(s2) ? this.j.c.fromHTML(s2) : s2).open(() => (0, a.position)(this.container), false, this.j.o.allowTabNavigation ? this.container : void 0);
                  }
                  this.j.e.fire((0, a.camelCase)(`after-${n3.name}-open-popup`), t6.container);
                }
              }
              __openControlList(t5) {
                var e4;
                const i4 = null !== (e4 = this.jodit.options.controls) && void 0 !== e4 ? e4 : {}, o4 = (t6) => (0, c.x)(t6, i4), n3 = t5.list, r2 = this.openPopup(), s2 = (0, p.$K)(this.j);
                r2.parentElement = this, s2.parentElement = r2, s2.mode = "vertical";
                const l2 = (e5, i5) => {
                  if ((0, a.isString)(i5) && o4(i5)) return { name: i5.toString(), ...o4(i5) };
                  if ((0, a.isString)(e5) && o4(e5)) return { name: e5.toString(), ...o4(e5), ..."object" == typeof i5 ? i5 : {} };
                  ((t6) => (0, a.isPlainObject)(t6) && "title" in t6 && "value" in t6)(e5) && (i5 = e5.value, e5 = e5.title);
                  const { childTemplate: n4 } = t5, r3 = { name: e5.toString(), template: n4 && ((t6, e6, i6) => n4(t6, e6, i6, this)), exec: t5.childExec ? (e6, i6, o5) => {
                    var n5;
                    return null === (n5 = t5.childExec) || void 0 === n5 ? void 0 : n5.call(t5, e6, i6, { ...o5, parentControl: t5 });
                  } : t5.exec, data: t5.data, command: t5.command, isActive: t5.isChildActive, value: t5.value, isDisabled: t5.isChildDisabled, mode: t5.mode, args: [...t5.args ? t5.args : [], e5, i5] };
                  return (0, a.isString)(i5) && (r3.text = i5), r3;
                };
                s2.build((0, a.isArray)(n3) ? n3.map(l2) : (0, a.keys)(n3, false).map((t6) => l2(t6, n3[t6])), this.target), r2.setContent(s2).open(() => (0, a.position)(this.container), false, this.j.o.allowTabNavigation ? this.container : void 0), this.state.activated = true;
              }
              onOutsideClick(t5) {
                this.openedPopup && (t5 && s.J.isNode(t5.target) && (s.J.isOrContains(this.container, t5.target) || this.openedPopup.isOwnClick(t5)) || this.__closePopup());
              }
              openPopup() {
                return this.__closePopup(), this.openedPopup = new u.z(this.j, false), this.j.e.on(this.ow, "mousedown touchstart", this.onOutsideClick).on("escape closeAllPopups", this.onOutsideClick), this.openedPopup;
              }
              __closePopup() {
                this.openedPopup && (this.j.e.off(this.ow, "mousedown touchstart", this.onOutsideClick).off("escape closeAllPopups", this.onOutsideClick), this.state.activated = false, this.openedPopup.close(), this.openedPopup.destruct(), this.openedPopup = null);
              }
              onClick(t5) {
                var e4, i4, o4, n3, r2, s2, l2;
                const { control: c2 } = this;
                if ((0, a.isFunction)(c2.exec)) {
                  const a2 = null !== (o4 = null !== (i4 = null === (e4 = this.toolbar) || void 0 === e4 ? void 0 : e4.getTarget(this)) && void 0 !== i4 ? i4 : this.target) && void 0 !== o4 ? o4 : null, d2 = c2.exec(this.j, a2, { control: c2, originalEvent: t5, button: this });
                  if (false !== d2 && true !== d2 && (null === (r2 = null === (n3 = this.j) || void 0 === n3 ? void 0 : n3.e) || void 0 === r2 || r2.fire("synchro"), this.parentElement && this.parentElement.update(), null === (l2 = null === (s2 = this.j) || void 0 === s2 ? void 0 : s2.e) || void 0 === l2 || l2.fire("closeAllPopups afterExec")), false !== d2) return;
                }
                return c2.list ? this.__openControlList(c2) : (0, a.isFunction)(c2.popup) ? this.onTriggerClick(t5) : void ((c2.command || c2.name) && ((0, a.call)((0, a.isJoditObject)(this.j) ? this.j.execCommand.bind(this.j) : this.j.od.execCommand.bind(this.j.od), c2.command || c2.name, false, c2.args && c2.args[0]), this.j.e.fire("closeAllPopups")));
              }
              destruct() {
                return this.__closePopup(), super.destruct();
              }
            };
            (0, o3.Cg)([r.cacheHTML], f.prototype, "createContainer", null), (0, o3.Cg)([(0, r.watch)("state.hasTrigger", { immediately: false })], f.prototype, "onChangeHasTrigger", null), (0, o3.Cg)([(0, r.watch)("trigger:click")], f.prototype, "onTriggerClick", null), (0, o3.Cg)([r.autobind], f.prototype, "onOutsideClick", null), (0, o3.Cg)([r.autobind], f.prototype, "__closePopup", null), f = (0, o3.Cg)([r.component], f);
          }, 49405: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { P: function() {
              return l;
            } });
            var o3 = i3(31635), n2 = i3(22664), r = i3(71842), s = i3(65147), a = i3(35265);
            let l = class extends a.lD {
              className() {
                return "ToolbarContent";
              }
              update() {
                const t5 = this.control.getContent(this.j, this);
                ((0, s.isString)(t5) || t5.parentNode !== this.container) && (r.J.detach(this.container), this.container.appendChild((0, s.isString)(t5) ? this.j.create.fromHTML(t5) : t5)), super.update();
              }
              createContainer() {
                return this.j.c.span(this.componentName);
              }
              constructor(t5, e4, i4 = null) {
                super(t5), this.control = e4, this.target = i4, this.container.classList.add(`${this.componentName}_${this.clearName(e4.name)}`), (0, s.attr)(this.container, "role", "content");
              }
            };
            l = (0, o3.Cg)([n2.component], l);
          }, 5832: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { IB: function() {
              return o3.I;
            }, P1: function() {
              return n2.P;
            }, q4: function() {
              return r.q;
            } });
            var o3 = i3(3258), n2 = i3(49405), r = i3(48053);
          }, 48053: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { q: function() {
              return a;
            } });
            var o3 = i3(31635), n2 = i3(22664), r = i3(98253), s = i3(3258);
            let a = class extends s.I {
              className() {
                return "ToolbarSelect";
              }
              update() {
                var t5, e4, i4;
                super.update(), this.state.icon.name = "";
                const { list: o4, data: n3 } = this.control;
                if (o4) {
                  let s2 = this.state.value || (n3 && (0, r.K)(n3.currentValue) ? n3.currentValue : void 0);
                  s2 || (s2 = Object.keys(o4)[0]);
                  const a2 = (o4[s2.toString()] || s2).toString();
                  this.state.text = null !== (i4 = null === (e4 = (t5 = this.control).textTemplate) || void 0 === e4 ? void 0 : e4.call(t5, this.jodit, a2)) && void 0 !== i4 ? i4 : a2;
                }
              }
            };
            a = (0, o3.Cg)([n2.component], a);
          }, 97394: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return l;
            } });
            var o3 = i3(31635), n2 = i3(22664), r = i3(76166), s = i3(53048), a = i3(8809);
            let l = class extends s.z4 {
              className() {
                return "ToolbarCollection";
              }
              get firstButton() {
                const [t5] = this.buttons;
                return t5 || null;
              }
              makeButton(t5, e4 = null) {
                return (0, a.BJ)(this.j, t5, e4);
              }
              makeSelect(t5, e4 = null) {
                return (0, a.RR)(this.j, t5, e4);
              }
              shouldBeActive(t5) {
              }
              shouldBeDisabled(t5) {
              }
              getTarget(t5) {
                return t5.target || null;
              }
              __immediateUpdate() {
                this.isDestructed || this.j.isLocked || (super.update(), this.j.e.fire("afterUpdateToolbar", this));
              }
              update() {
                this.__immediateUpdate();
              }
              setDirection(t5) {
                this.container.style.direction = t5, this.container.setAttribute("dir", t5);
              }
              constructor(t5) {
                super(t5), this.__listenEvents = "updatePlugins updateToolbar changeStack mousedown mouseup keydown change afterInit readonly afterResize selectionchange changeSelection focus afterSetMode touchstart focus blur", this.__tooltip = new s.SB(this.jodit);
              }
              __initEvents() {
                this.j.e.on(this.__listenEvents, this.update).on("afterSetMode focus", this.__immediateUpdate);
              }
              hide() {
                this.container.remove();
              }
              show() {
                this.appendTo(this.j.toolbarContainer);
              }
              showInline(t5) {
                throw (0, r.z3)("The method is not implemented for this class.");
              }
              build(t5, e4 = null) {
                const i4 = this.j.e.fire("beforeToolbarBuild", t5);
                return i4 && (t5 = i4), super.build(t5, e4), this;
              }
              destruct() {
                var t5;
                this.isDestructed || (null === (t5 = this.__tooltip) || void 0 === t5 || t5.destruct(), this.__tooltip = null, this.j.e.off(this.__listenEvents, this.update).off("afterSetMode focus", this.__immediateUpdate), super.destruct());
              }
            };
            (0, o3.Cg)([n2.autobind], l.prototype, "__immediateUpdate", null), (0, o3.Cg)([(0, n2.debounce)()], l.prototype, "update", null), (0, o3.Cg)([(0, n2.hook)("ready")], l.prototype, "__initEvents", null), l = (0, o3.Cg)([n2.component], l);
          }, 90428: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(71842), a = i3(65147), l = i3(97394);
            let c = class extends l.Q {
              className() {
                return "ToolbarEditorCollection";
              }
              shouldBeDisabled(t5) {
                const e4 = super.shouldBeDisabled(t5);
                if (void 0 !== e4) return e4;
                const i4 = void 0 === t5.control.mode ? n2.MODE_WYSIWYG : t5.control.mode;
                return !(i4 === n2.MODE_SPLIT || i4 === this.j.getRealMode());
              }
              shouldBeActive(t5) {
                const e4 = super.shouldBeActive(t5);
                if (void 0 !== e4) return e4;
                const i4 = this.j.selection ? this.j.s.current() : null;
                if (!i4) return false;
                let o4;
                if (t5.control.tags) {
                  const e5 = t5.control.tags;
                  if (o4 = i4, s.J.up(o4, (t6) => {
                    if (t6 && -1 !== e5.indexOf(t6.nodeName.toLowerCase())) return true;
                  }, this.j.editor)) return true;
                }
                if (t5.control.css) {
                  const e5 = t5.control.css;
                  if (o4 = i4, s.J.up(o4, (t6) => {
                    if (t6 && !s.J.isText(t6) && !s.J.isComment(t6)) return this.checkActiveStatus(e5, t6);
                  }, this.j.editor)) return true;
                }
                return false;
              }
              getTarget(t5) {
                return t5.target || this.j.s.current() || null;
              }
              constructor(t5) {
                super(t5), this.checkActiveStatus = (t6, e4) => {
                  let i4 = 0, o4 = 0;
                  return Object.keys(t6).forEach((n3) => {
                    const r2 = t6[n3];
                    (0, a.isFunction)(r2) ? r2(this.j, (0, a.css)(e4, n3).toString()) && (i4 += 1) : -1 !== r2.indexOf((0, a.css)(e4, n3).toString()) && (i4 += 1), o4 += 1;
                  }), o4 === i4;
                }, this.prependInvisibleInput(this.container);
              }
              prependInvisibleInput(t5) {
                const e4 = this.j.create.element("input", { tabIndex: -1, disabled: true, style: "width: 0; height:0; position: absolute; visibility: hidden;" });
                s.J.appendChildFirst(t5, e4);
              }
              showInline(t5) {
                this.jodit.e.fire("showInlineToolbar", t5);
              }
              hide() {
                this.jodit.e.fire("hidePopup"), super.hide(), this.jodit.e.fire("toggleToolbar");
              }
              show() {
                super.show(), this.jodit.e.fire("toggleToolbar");
              }
            };
            c = (0, o3.Cg)([r.component], c);
          }, 8809: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $K: function() {
              return c;
            }, BJ: function() {
              return d;
            }, RR: function() {
              return u;
            } });
            var o3 = i3(65147), n2 = i3(3258), r = i3(49405), s = i3(48053), a = i3(97394), l = i3(90428);
            function c(t5, e4) {
              const i4 = (0, o3.isJoditObject)(t5) ? new l.b(t5) : new a.Q(t5);
              return t5.o.textIcons && i4.container.classList.add("jodit_text_icons"), e4 && (i4.parentElement = e4), t5.o.toolbarButtonSize && (i4.buttonSize = t5.o.toolbarButtonSize), i4;
            }
            function d(t5, e4, i4 = null) {
              if ((0, o3.isFunction)(e4.getContent)) return new r.P(t5, e4, i4);
              const s2 = new n2.I(t5, e4, i4);
              return s2.state.tabIndex = t5.o.allowTabNavigation ? 0 : -1, s2;
            }
            function u(t5, e4, i4 = null) {
              return new s.q(t5, e4, i4);
            }
          }, 77334: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(37923), n2 = i3(83044), r = i3(36115);
            r.T.prototype.enableDragAndDropFileToEditor = true, r.T.prototype.uploader = { url: "", insertImageAsBase64URI: false, imagesExtensions: ["jpg", "png", "jpeg", "gif"], headers: null, data: null, filesVariableName: (t5) => `files[${t5}]`, withCredentials: false, pathVariableName: "path", format: "json", method: "POST", prepareData: (t5) => t5, isSuccess: (t5) => t5.success, getMessage: (t5) => void 0 !== t5.data.messages && (0, o3.c)(t5.data.messages) ? t5.data.messages.join(" ") : "", processFileName: (t5, e4, i4) => [t5, e4, i4], process: (t5) => t5.data, error(t5) {
              this.j.message.error(t5.message, 4e3);
            }, getDisplayName: (t5, e4) => t5 + e4, defaultHandlerSuccess(t5) {
              const e4 = this.j || this;
              (0, n2.y)(e4) && t5.files && t5.files.length && t5.files.forEach((i4, o4) => {
                const [n3, r2] = t5.isImages && t5.isImages[o4] ? ["img", "src"] : ["a", "href"], s = e4.createInside.element(n3);
                s.setAttribute(r2, t5.baseurl + i4), "a" === n3 && (s.textContent = e4.o.uploader.getDisplayName.call(this, t5.baseurl, i4)), "img" === n3 ? e4.s.insertImage(s, null, e4.o.imageDefaultWidth) : e4.s.insertNode(s);
              });
            }, defaultHandlerError(t5) {
              this.j.message.error(t5.message);
            }, contentType(t5) {
              return (void 0 === this.ow.FormData || "string" == typeof t5) && "application/x-www-form-urlencoded; charset=UTF-8";
            } };
          }, 89929: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return n2;
            } });
            var o3 = i3(65147);
            function n2(t5, e4) {
              if ((0, o3.isFunction)(t5.o.buildData)) return t5.o.buildData.call(t5, e4);
              const i4 = t5.ow.FormData;
              if (void 0 !== i4) {
                if (e4 instanceof i4) return e4;
                if ((0, o3.isString)(e4)) return e4;
                const t6 = new i4(), n3 = e4;
                return Object.keys(n3).forEach((e5) => {
                  t6.append(e5, n3[e5]);
                }), t6;
              }
              return e4;
            }
          }, 51923: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              const e4 = atob(t5.split(",")[1]), i4 = t5.split(",")[0].split(":")[1].split(";")[0], o4 = new ArrayBuffer(e4.length), n2 = new Uint8Array(o4);
              for (let t6 = 0; e4.length > t6; t6 += 1) n2[t6] = e4.charCodeAt(t6);
              return new Blob([n2], { type: i4 });
            }
            i3.d(e3, { z: function() {
              return o3;
            } });
          }, 74340: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $j: function() {
              return r.$;
            }, Pb: function() {
              return l;
            }, YQ: function() {
              return a;
            }, _9: function() {
              return s._;
            }, dT: function() {
              return n2.d;
            }, tN: function() {
              return r.t;
            }, zM: function() {
              return o3.z;
            } }), i3(89929);
            var o3 = i3(51923), n2 = i3(84759), r = i3(27912), s = i3(74714);
            function a(t5) {
              return Boolean(t5 && t5.files && t5.files.length > 0);
            }
            function l(t5) {
              return Boolean(t5 && t5.items && t5.items.length > 0);
            }
          }, 84759: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { d: function() {
              return l;
            } });
            var o3 = i3(17352), n2 = i3(71842), r = i3(56298), s = i3(65147), a = i3(74340);
            function l(t5, e4, i4, l2, c) {
              if (e4 && (!e4.types.length || e4.types[0] !== o3.TEXT_PLAIN)) {
                const e5 = t5.j.c.div("", { tabindex: -1, style: "left: -9999px; top: 0; width: 0; height: 100%;line-height: 140%; overflow: hidden; position: fixed; z-index: 2147483647; word-break: break-all;", contenteditable: true });
                (0, r.My)(t5.j, t5.constructor).appendChild(e5);
                const o4 = (0, s.isJoditObject)(t5.j) ? t5.j.s.save() : null, d = () => o4 && (0, s.isJoditObject)(t5.j) && t5.j.s.restore();
                e5.focus(), t5.j.async.setTimeout(() => {
                  const o5 = e5.firstChild;
                  if (n2.J.safeRemove(e5), o5 && o5.hasAttribute("src")) {
                    const e6 = (0, s.attr)(o5, "src") || "";
                    d(), (0, a._9)(t5, [(0, a.zM)(e6)], i4, l2).finally(c);
                  }
                }, t5.j.defaultTimeout);
              }
            }
          }, 74714: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { _: function() {
              return r;
            } });
            var o3 = i3(65147), n2 = i3(27912);
            function r(t5, e4, i4, r2, s) {
              if (!e4) return Promise.reject((0, o3.error)("Need files"));
              const { o: a } = t5;
              let l = (0, o3.toArray)(e4);
              if (!l.length) return Promise.reject((0, o3.error)("Need files"));
              const c = [];
              if (a.insertImageAsBase64URI) {
                let e5, n3;
                for (n3 = 0; l.length > n3; n3 += 1) if (e5 = l[n3], e5 && e5.type) {
                  const r3 = e5.type.match(/\/([a-z0-9]+)/i), s2 = r3[1] ? r3[1].toLowerCase() : "";
                  if (a.imagesExtensions.includes(s2)) {
                    const r4 = new FileReader();
                    c.push(t5.j.async.promise((n4, s3) => {
                      r4.onerror = s3, r4.onloadend = () => {
                        const e6 = { baseurl: "", files: [r4.result], isImages: [true] };
                        ((0, o3.isFunction)(i4) ? i4 : a.defaultHandlerSuccess).call(t5, e6), n4(e6);
                      }, r4.readAsDataURL(e5);
                    })), l[n3] = null;
                  }
                }
              }
              if (l = l.filter((t6) => t6), l.length) {
                const e5 = new FormData();
                let d;
                e5.append(a.pathVariableName, t5.path), e5.append("source", t5.source);
                for (let i5 = 0; l.length > i5; i5 += 1) if (d = l[i5], d) {
                  const o4 = /\.[\d\w]+$/.test(d.name), n3 = d.type.match(/\/([a-z0-9]+)/i), r3 = n3 && n3[1] ? n3[1].toLowerCase() : "";
                  let s2 = l[i5].name || Math.random().toString().replace(".", "");
                  if (!o4 && r3) {
                    let t6 = r3;
                    ["jpeg", "jpg"].includes(t6) && (t6 = "jpeg|jpg"), new RegExp(".(" + t6 + ")$", "i").test(s2) || (s2 += "." + r3);
                  }
                  const [c2, u, h] = a.processFileName.call(t5, a.filesVariableName(i5), l[i5], s2);
                  e5.append(c2, u, h);
                }
                s && s(e5), a.data && (0, o3.isPlainObject)(a.data) && Object.keys(a.data).forEach((t6) => {
                  e5.append(t6, a.data[t6]);
                }), a.prepareData.call(t5, e5), c.push((0, n2.t)(t5, e5).then((e6) => a.isSuccess.call(t5, e6) ? (((0, o3.isFunction)(i4) ? i4 : a.defaultHandlerSuccess).call(t5, a.process.call(t5, e6)), e6) : (((0, o3.isFunction)(r2) ? r2 : a.defaultHandlerError).call(t5, (0, o3.error)(a.getMessage.call(t5, e6))), e6)).then(() => {
                  t5.j.events && t5.j.e.fire("filesWereUploaded");
                }));
              }
              return Promise.all(c);
            }
          }, 27912: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { $: function() {
              return s;
            }, t: function() {
              return a;
            } });
            var o3 = i3(65147), n2 = i3(53883), r = i3(89929);
            const s = /* @__PURE__ */ new WeakMap();
            function a(t5, e4) {
              const i4 = (0, r.$)(t5, e4), a2 = (e5) => {
                const i5 = new n2.d({ xhr: () => {
                  const e6 = new XMLHttpRequest();
                  return void 0 !== t5.j.ow.FormData && e6.upload ? (t5.j.progressbar.show().progress(10), e6.upload.addEventListener("progress", (e7) => {
                    if (e7.lengthComputable) {
                      let i6 = e7.loaded / e7.total;
                      i6 *= 100, t5.j.progressbar.show().progress(i6), 100 > i6 || t5.j.progressbar.hide();
                    }
                  }, false)) : t5.j.progressbar.hide(), e6;
                }, method: t5.o.method || "POST", data: e5, url: (0, o3.isFunction)(t5.o.url) ? t5.o.url(e5) : t5.o.url, headers: t5.o.headers, queryBuild: t5.o.queryBuild, contentType: t5.o.contentType.call(t5, e5), withCredentials: t5.o.withCredentials || false });
                let r2 = s.get(t5);
                return r2 || (r2 = /* @__PURE__ */ new Set(), s.set(t5, r2)), r2.add(i5), t5.j.e.one("beforeDestruct", i5.destruct), i5.send().then((t6) => t6.json()).catch((t6) => ({ success: false, data: { messages: [t6] } })).finally(() => {
                  i5.destruct(), null == r2 || r2.delete(i5);
                });
              };
              return (0, o3.isPromise)(i4) ? i4.then(a2).catch((e5) => {
                t5.o.error.call(t5, e5);
              }) : a2(i4);
            }
          }, 26538: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { d: function() {
              return l;
            } });
            var o3 = i3(77753), n2 = i3(17352), r = i3(65147), s = i3(74340), a = (i3(77334), i3(36115));
            class l extends o3.vG {
              get j() {
                return this.jodit;
              }
              className() {
                return "Uploader";
              }
              get o() {
                return this.options;
              }
              setPath(t5) {
                return this.path = t5, this;
              }
              setSource(t5) {
                return this.source = t5, this;
              }
              bind(t5, e4, i4) {
                const o4 = () => {
                  t5.classList.remove("jodit_drag_hover");
                }, r2 = this, a2 = (t6) => {
                  let a3, l2, c;
                  const d = t6.clipboardData, u = (t7) => {
                    l2 && (t7.append("extension", c), t7.append("mimetype", l2.type));
                  };
                  if (!n2.IS_IE && (0, s.YQ)(d)) return (0, s._9)(r2, d.files, e4, i4).finally(o4), false;
                  if (n2.IS_IE && !n2.IS_ES_NEXT) return (0, s.dT)(r2, d, e4, i4, o4);
                  if ((0, s.Pb)(d)) {
                    const { items: n3 } = d;
                    for (a3 = 0; n3.length > a3; a3 += 1) if ("file" === n3[a3].kind && "image/png" === n3[a3].type) {
                      if (l2 = n3[a3].getAsFile(), l2) {
                        const t7 = l2.type.match(/\/([a-z0-9]+)/i);
                        c = t7[1] ? t7[1].toLowerCase() : "", (0, s._9)(r2, [l2], e4, i4, u).finally(o4);
                      }
                      t6.preventDefault();
                      break;
                    }
                  }
                };
                r2.j && r2.j.editor !== t5 ? r2.j.e.on(t5, "paste", a2) : r2.j.e.on("beforePaste", a2), this.attachEvents(t5, e4, i4, o4);
              }
              attachEvents(t5, e4, i4, o4) {
                const n3 = this;
                n3.j.e.on(t5, "dragend dragover dragenter dragleave drop", (t6) => {
                  t6.preventDefault();
                }).on(t5, "dragover", (e5) => {
                  ((0, s.YQ)(e5.dataTransfer) || (0, s.Pb)(e5.dataTransfer)) && (t5.classList.add("jodit_drag_hover"), e5.preventDefault());
                }).on(t5, "dragend dragleave", (e5) => {
                  t5.classList.remove("jodit_drag_hover"), (0, s.YQ)(e5.dataTransfer) && e5.preventDefault();
                }).on(t5, "drop", (r3) => {
                  t5.classList.remove("jodit_drag_hover"), (0, s.YQ)(r3.dataTransfer) && (r3.preventDefault(), r3.stopImmediatePropagation(), (0, s._9)(n3, r3.dataTransfer.files, e4, i4).finally(o4));
                });
                const r2 = t5.querySelector("input[type=file]");
                r2 && n3.j.e.on(r2, "change", () => {
                  (0, s._9)(n3, r2.files, e4, i4).then(() => {
                    r2.value = "", /safari/i.test(navigator.userAgent) || (r2.type = "", r2.type = "file");
                  }).finally(o4);
                });
              }
              uploadRemoteImage(t5, e4, i4) {
                const o4 = this, { o: n3 } = o4, a2 = (0, r.isFunction)(i4) ? i4 : n3.defaultHandlerError;
                (0, s.tN)(o4, { action: "fileUploadRemote", url: t5 }).then((t6) => {
                  n3.isSuccess.call(o4, t6) ? ((0, r.isFunction)(e4) ? e4 : n3.defaultHandlerSuccess).call(o4, n3.process.call(o4, t6)) : a2.call(o4, (0, r.error)(n3.getMessage.call(o4, t6)));
                }).catch((t6) => a2.call(o4, t6));
              }
              constructor(t5, e4) {
                super(t5), this.path = "", this.source = "default", this.options = (0, r.ConfigProto)(e4 || {}, (0, r.ConfigProto)(a.T.defaultOptions.uploader, (0, r.isJoditObject)(t5) ? t5.o.uploader : {}));
              }
              destruct() {
                this.setStatus(o3.f.beforeDestruct);
                const t5 = s.$j.get(this);
                t5 && (t5.forEach((t6) => {
                  try {
                    t6.destruct();
                  } catch (t7) {
                  }
                }), t5.clear()), super.destruct();
              }
            }
          }, 19633: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { K: function() {
              return a;
            } });
            var o3 = i3(71842), n2 = i3(65147), r = i3(53048), s = i3(54522);
            r.In.set("palette", i3.n(s)());
            const a = (t5, e4, i4) => {
              const s2 = "jodit-color-picker", a2 = (0, n2.normalizeColor)(i4), l = t5.c.div(s2), c = t5.o.textIcons ? `<span>${t5.i18n("palette")}</span>` : r.In.get("palette"), d = (t6) => {
                const e5 = [];
                return (0, n2.isPlainObject)(t6) ? Object.keys(t6).forEach((i5) => {
                  e5.push(`<div class="${s2}__group ${s2}__group-${i5}">`), e5.push(d(t6[i5])), e5.push("</div>");
                }) : (0, n2.isArray)(t6) && t6.forEach((t7) => {
                  e5.push(`<span class='${s2}__color-item ${a2 === t7 ? s2 + "__color-item_active_true" : ""}' title="${t7}" style="background-color:${t7}" data-color="${t7}"></span>`);
                }), e5.join("");
              };
              l.appendChild(t5.c.fromHTML(`<div class="${s2}__groups">${d(t5.o.colors)}</div>`)), l.appendChild(t5.c.fromHTML(`<div data-ref="extra" class="${s2}__extra"></div>`));
              const { extra: u } = (0, n2.refs)(l);
              return t5.o.showBrowserColorPicker && (0, n2.hasBrowserColorPicker)() && (u.appendChild(t5.c.fromHTML(`<div class="${s2}__native">${c}<input type="color" value="#ffffff"/></div>`)), t5.e.on(l, "change", (t6) => {
                t6.stopPropagation();
                const i5 = t6.target;
                if (!i5 || !i5.tagName || !o3.J.isTag(i5, "input")) return;
                const r2 = i5.value || "";
                (0, n2.isFunction)(e4) && e4(r2), t6.preventDefault();
              })), t5.e.on(l, "mousedown touchend", (i5) => {
                i5.stopPropagation(), i5.preventDefault();
                let r2 = i5.target;
                if (r2 && r2.tagName && !o3.J.isTag(r2, "svg") && !o3.J.isTag(r2, "path") || !r2.parentNode || (r2 = o3.J.closest(r2.parentNode, "span", t5.editor)), !o3.J.isTag(r2, "span") || !r2.classList.contains(s2 + "__color-item")) return;
                const a3 = (0, n2.attr)(r2, "-color") || "";
                e4 && (0, n2.isFunction)(e4) && e4(a3);
              }), t5.e.fire("afterGenerateColorPicker", l, u, e4, a2), l;
            };
          }, 10067: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(65147), r = i3(53048), s = i3(4909);
            const a = (t5, e4, i4, a2, c = true) => {
              let d;
              const u = [];
              if (e4.upload && t5.o.uploader && (t5.o.uploader.url || t5.o.uploader.insertImageAsBase64URI)) {
                const i5 = t5.c.fromHTML(`<div class="jodit-drag-and-drop__file-box"><strong>${t5.i18n(c ? "Drop image" : "Drop file")}</strong><span><br>${t5.i18n("or click")}</span><input type="file" accept="${c ? "image/*" : "*"}" tabindex="-1" dir="auto" multiple=""/></div>`);
                t5.uploader.bind(i5, (i6) => {
                  const o4 = (0, n2.isFunction)(e4.upload) ? e4.upload : t5.o.uploader.defaultHandlerSuccess;
                  (0, n2.isFunction)(o4) && o4.call(t5, i6), t5.e.fire("closeAllPopups");
                }, (e5) => {
                  t5.message.error(e5.message), t5.e.fire("closeAllPopups");
                }), u.push({ icon: "upload", name: "Upload", content: i5 });
              }
              if (e4.filebrowser && (t5.o.filebrowser.ajax.url || t5.o.filebrowser.items.url) && u.push({ icon: "folder", name: "Browse", content: () => {
                a2 && a2(), e4.filebrowser && t5.filebrowser.open(e4.filebrowser, c);
              } }), e4.url) {
                const s2 = new r.lD(t5, { type: "submit", variant: "primary", text: "Insert" }), a3 = new r.XV(t5, [new r.tS(t5, { required: true, label: "URL", name: "url", type: "text", placeholder: "https://" }), new r.tS(t5, { name: "text", label: "Alternative text" }), new r.Yh(t5, [s2])]);
                d = null, !i4 || o3.J.isText(i4) || o3.J.isComment(i4) || !o3.J.isTag(i4, "img") && !(0, n2.$$)("img", i4).length || (d = "IMG" === i4.tagName ? i4 : (0, n2.$$)("img", i4)[0], l(a3.container, "input[name=url]", (0, n2.attr)(d, "src")), l(a3.container, "input[name=text]", (0, n2.attr)(d, "alt")), s2.state.text = "Update"), i4 && o3.J.isTag(i4, "a") && (l(a3.container, "input[name=url]", (0, n2.attr)(i4, "href")), l(a3.container, "input[name=text]", (0, n2.attr)(i4, "title")), s2.state.text = "Update"), a3.onSubmit((i5) => {
                  (0, n2.isFunction)(e4.url) && e4.url.call(t5, i5.url, i5.text);
                }), u.push({ icon: "link", name: "URL", content: a3.container });
              }
              return (0, s.Z)(t5, u);
            };
            function l(t5, e4, i4) {
              const o4 = t5.querySelector(e4);
              return o4 ? (i4 && (o4.value = i4), o4.value) : "";
            }
          }, 16116: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Kn: function() {
              return o3.K;
            }, Zg: function() {
              return r.Z;
            }, kG: function() {
              return n2.k;
            } });
            var o3 = i3(19633), n2 = i3(10067), r = i3(4909);
          }, 4909: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return l;
            } });
            var o3 = i3(77753), n2 = i3(55186), r = i3(65147), s = i3(69052), a = i3(53048);
            const l = (t5, e4, i4) => {
              const l2 = t5.c.div("jodit-tabs"), c = t5.c.div("jodit-tabs__wrapper"), d = t5.c.div("jodit-tabs__buttons"), u = {}, h = [];
              let p = "", f = 0;
              l2.appendChild(d), l2.appendChild(c);
              const g = (t6) => {
                u[t6] && (h.forEach((t7) => {
                  t7.state.variant = "initial", t7.state.activated = false;
                }), (0, r.$$)(".jodit-tab", c).forEach((t7) => {
                  t7.classList.remove("jodit-tab_active");
                }), u[t6].button.state.variant = "outline", u[t6].button.state.activated = true, u[t6].tab.classList.add("jodit-tab_active"));
              };
              if (e4.forEach(({ icon: r2, name: l3, content: m }) => {
                const b = t5.c.div("jodit-tab"), _ = (0, a.$n)(t5, r2 || l3, l3);
                t5.e.on(_.container, "mousedown", (t6) => t6.preventDefault()), p || (p = l3), d.appendChild(_.container), h.push(_), _.container.classList.add("jodit-tabs__button", "jodit-tabs__button_columns_" + e4.length), (0, s.T)(m) ? b.appendChild(t5.c.div("jodit-tab_empty")) : b.appendChild(o3.uA.isInstanceOf(m, a.D$) ? m.container : m), c.appendChild(b), _.onAction(() => (g(l3), (0, s.T)(m) && !n2.J.isElement(m) && m.call(t5), i4 && (i4.activeTab = l3), false)), u[l3] = { button: _, tab: b }, f += 1;
              }), !f) return l2;
              if ((0, r.$$)("a", d).forEach((t6) => {
                t6.style.width = (100 / f).toFixed(10) + "%";
              }), g(i4 && i4.activeTab && u[i4.activeTab] ? i4.activeTab : p), i4) {
                let t6 = i4.activeTab;
                Object.defineProperty(i4, "activeTab", { configurable: true, enumerable: false, get: () => t6, set(e5) {
                  t6 = e5, g(e5);
                } });
              }
              return l2;
            };
          }, 14221: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(65147), s = i3(931), a = i3(17995), l = i3.n(a);
            i3(36115).T.prototype.controls.about = { exec: (t5) => {
              const e4 = t5.dlg({ closeOnClickOverlay: true }), i4 = t5.i18n.bind(t5);
              e4.setMod("theme", t5.o.theme).setHeader(i4("About Jodit")).setContent(`<div class="jodit-about">
					<div>${i4("Jodit Editor")} v.${t5.getVersion()}</div>
					<div>${i4("License: %s", (0, r.isLicense)(t5.o.license) ? (0, r.normalizeLicense)(t5.o.license) : "MIT")}</div>
					<div>
						<a href="${o3.HOMEPAGE}" target="_blank">${o3.HOMEPAGE}</a>
					</div>
					<div>
						<a href="https://xdsoft.net/jodit/docs/" target="_blank">${i4("Jodit User's Guide")}</a>
						${i4("contains detailed help for using")}
					</div>
					<div>${i4("Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.")}</div>
				</div>`), (0, r.css)(e4.dialog, { minHeight: 200, minWidth: 420 }), e4.open(true, true);
            }, tooltip: "About Jodit", mode: o3.MODE_SOURCE + o3.MODE_WYSIWYG }, n2.fg.add("about", function(t5) {
              t5.registerButton({ name: "about", group: "info" });
            }), s.I.set("about", l());
          }, 55989: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(56298), s = i3(65147), a = i3(37435);
            i3(84018);
            const l = "addnewline";
            class c extends a.Plugin {
              constructor() {
                super(...arguments), this.__line = this.j.c.fromHTML(`<div role="button" tabindex="-1" title="${this.j.i18n("Break")}" class="jodit-add-new-line"><span>${a.Icon.get("enter")}</span></div>`), this.__isMatchedTag = (t5) => Boolean(t5 && this.j.o.addNewLineTagsTriggers.includes(t5.nodeName.toLowerCase())), this.__isBeforeContent = false, this.__lineInFocus = false, this.__isShown = false, this.__hideForce = () => {
                  this.__isShown && (this.__isShown = false, this.j.async.clearTimeout(this.__timeout), this.__lineInFocus = false, a.Dom.safeRemove(this.__line), this.__line.style.setProperty("--jd-anl-handle-offset", "0"));
                }, this.__canGetFocus = (t5) => null != t5 && a.Dom.isBlock(t5) && !/^(img|table|iframe|hr)$/i.test(t5.nodeName), this.__onClickLine = (t5) => {
                  const e4 = this.j, i4 = e4.createInside.element(e4.o.enter);
                  this.__isBeforeContent && this.__current && this.__current.parentNode ? this.__current === e4.editor ? a.Dom.prepend(e4.editor, i4) : this.__current.parentNode.insertBefore(i4, this.__current) : e4.editor.appendChild(i4), e4.s.setCursorIn(i4), (0, s.scrollIntoViewIfNeeded)(i4, e4.editor, e4.ed), e4.synchronizeValues(), this.__hideForce(), t5.preventDefault();
                };
              }
              __show() {
                this.j.o.readonly || this.j.isLocked || (this.j.async.clearTimeout(this.__timeout), this.__isShown || (this.__isShown = true, this.j.container.appendChild(this.__line), this.__line.style.width = this.j.container.clientWidth + "px"));
              }
              onLock(t5) {
                t5 && this.__isShown && this.__hideForce();
              }
              __hide() {
                this.__isShown && !this.__lineInFocus && (this.__timeout = this.j.async.setTimeout(this.__hideForce, { timeout: 500, label: "add-new-line-hide" }));
              }
              afterInit(t5) {
                t5.o.addNewLine && (t5.e.on(this.__line, "mousemove", (t6) => {
                  t6.stopPropagation();
                }).on(this.__line, "mousedown touchstart", this.__onClickLine).on("change", this.__hideForce).on(this.__line, "mouseenter", () => {
                  this.j.async.clearTimeout(this.__timeout), this.__lineInFocus = true;
                }).on(this.__line, "mouseleave", () => {
                  this.__lineInFocus = false;
                }).on("changePlace", this.__addEventListeners.bind(this)), this.__addEventListeners());
              }
              __addEventListeners() {
                const t5 = this.j;
                t5.e.off(t5.editor, "." + l).off(t5.container, "." + l).on([t5.ow, t5.ew, t5.editor], "scroll." + l, this.__hideForce).on(t5.editor, "click." + l, this.__hide).on(t5.container, "mouseleave." + l, this.__hide).on(t5.editor, "mousemove." + l, this.__onMouseMove);
              }
              onDblClickEditor(t5) {
                const e4 = this.j;
                if (!e4.o.readonly && e4.o.addNewLineOnDBLClick && t5.target === e4.editor && e4.s.isCollapsed()) {
                  const i4 = (0, s.offset)(e4.editor, e4, e4.ed), o4 = t5.pageY - e4.ew.scrollX, n3 = e4.createInside.element(e4.o.enter);
                  Math.abs(o4 - i4.top) < Math.abs(o4 - (i4.height + i4.top)) && e4.editor.firstChild ? e4.editor.insertBefore(n3, e4.editor.firstChild) : e4.editor.appendChild(n3), e4.s.setCursorIn(n3), e4.synchronizeValues(), this.__hideForce(), t5.preventDefault();
                }
              }
              __onMouseMove(t5) {
                const e4 = this.j;
                let i4 = e4.ed.elementFromPoint(t5.clientX, t5.clientY);
                if (!a.Dom.isHTMLElement(i4) || !a.Dom.isOrContains(e4.editor, i4)) return;
                if (e4.editor === i4 || this.__isMatchedTag(i4) || (i4 = a.Dom.closest(i4, this.__isMatchedTag, e4.editor)), !i4) return void this.__hide();
                if (this.__isMatchedTag(i4)) {
                  const t6 = a.Dom.up(i4, a.Dom.isBlock, e4.editor);
                  t6 && t6 !== e4.editor && (i4 = t6);
                }
                const o4 = (0, s.position)(i4, this.j);
                let n3 = false, { clientY: r2, clientX: l2 } = t5;
                if (this.j.iframe) {
                  const { top: t6, left: e5 } = (0, s.position)(this.j.iframe, this.j, true);
                  r2 += t6, l2 += e5;
                }
                const c2 = this.j.o.addNewLineDeltaShow;
                Math.abs(r2 - o4.top) > c2 ? Math.abs(r2 - (o4.top + o4.height)) > c2 || (n3 = o4.top + o4.height, this.__isBeforeContent = false) : (n3 = o4.top, this.__isBeforeContent = true);
                const d = e4.editor === i4;
                false !== n3 && (d && !this.__isBeforeContent || !d && !(0, s.call)(this.__isBeforeContent ? a.Dom.prev : a.Dom.next, i4, this.__canGetFocus, e4.editor)) ? (this.__line.style.top = n3 + "px", this.__current = i4, this.__show(), this.__line.style.setProperty("--jd-anl-handle-offset", l2 - o4.left - 10 + "px")) : (this.__current = false, this.__hide());
              }
              beforeDestruct() {
                this.j.async.clearTimeout(this.__timeout), this.j.e.off(this.__line).off("changePlace", this.__addEventListeners), a.Dom.safeRemove(this.__line), this.j.e.off([this.j.ow, this.j.ew, this.j.editor], "." + l).off(this.j.container, "." + l);
              }
            }
            (0, o3.Cg)([(0, n2.watch)(":lock")], c.prototype, "onLock", null), (0, o3.Cg)([n2.autobind], c.prototype, "__hide", null), (0, o3.Cg)([(0, n2.watch)(":dblclick")], c.prototype, "onDblClickEditor", null), (0, o3.Cg)([(0, n2.throttle)((t5) => t5.defaultTimeout)], c.prototype, "__onMouseMove", null), r.fg.add("addNewLine", c);
          }, 84018: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(86634), r = i3.n(n2), s = i3(36115);
            s.T.prototype.addNewLine = true, s.T.prototype.addNewLineOnDBLClick = true, s.T.prototype.addNewLineTagsTriggers = ["table", "iframe", "img", "hr", "pre", "jodit"], s.T.prototype.addNewLineDeltaShow = 20, o3.I.set("enter", r());
          }, 64241: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(87875), r = i3(66927), s = i3(56298), a = i3(99951), l = i3(29866), c = (i3(66888), i3(20785)), d = i3(81026);
            class u extends l.k {
              get __dialog() {
                return this.jodit.dlg({ buttons: ["fullsize", "dialog.close"], closeOnClickOverlay: true, closeOnEsc: true, resizable: false, draggable: true, minHeight: 160 });
              }
              get __container() {
                const { jodit: t5, __dialog: e4 } = this;
                return new c.b(t5, { onInsertAfter(i4) {
                  t5.s.focus(), t5.s.setCursorAfter(t5.s.current()), t5.s.insertHTML(i4), e4.close();
                }, onInsert(i4) {
                  t5.s.focus(), t5.s.insertHTML(i4), e4.close();
                } });
              }
              constructor(t5) {
                super(t5), this.buttons = [{ name: "ai-commands", group: "insert" }, { name: "ai-assistant", group: "insert" }], (0, s.JW)(d);
              }
              afterInit() {
              }
              onGenerateAiAssistantForm(t5) {
                this.__dialog.open(this.__container, "AI Assistant"), this.__container.setPrompt(t5);
              }
              onInvokeAiAssistant(t5) {
                const { jodit: e4 } = this;
                e4.s.focus();
                const i4 = e4.s.html;
                e4.async.promise(async (o4, n3) => {
                  try {
                    o4(await e4.o.aiAssistant.aiAssistantCallback(t5, i4));
                  } catch (t6) {
                    n3(t6);
                  }
                }).then((t6) => {
                  e4.e.fire("ai-assistant-response", t6);
                }).catch((t6) => {
                  (0, a.z)(t6) || (e4.message.error(t6.message), e4.e.fire("ai-assistant-error", t6.message));
                });
              }
              beforeDestruct(t5) {
                var e4, i4;
                null === (e4 = (0, n2.PO)(this, "__container")) || void 0 === e4 || e4.destruct(), null === (i4 = (0, n2.PO)(this, "__dialog")) || void 0 === i4 || i4.destruct();
              }
            }
            (0, o3.Cg)([n2.PP], u.prototype, "__dialog", null), (0, o3.Cg)([n2.PP], u.prototype, "__container", null), (0, o3.Cg)([(0, r.w)(":generateAiAssistantForm.ai-assistant")], u.prototype, "onGenerateAiAssistantForm", null), (0, o3.Cg)([(0, r.w)(":invokeAiAssistant")], u.prototype, "onInvokeAiAssistant", null), s.fg.add("ai-assistant", u);
          }, 66888: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(91115), r = i3.n(n2), s = i3(1916), a = i3.n(s), l = i3(36115);
            l.T.prototype.aiAssistant = { aiCommonPrefixPrompt: "", aiCommonSuffixPrompt: "", aiImproveWritingPrompt: "It needs to be refined for better clarity, coherence, and overall quality. Please enhance the writing style while keeping the original meaning and language intact.", aiMakeShorterPrompt: "Please condense this content to make it more concise, while preserving the key messages, language and information.", aiMakeLongerPrompt: "Expand on this content to provide more detail, depth, and richness, without diverging from the original message and language.", aiSimplifyLanguagePrompt: "The language used here needs to be simplified for easier understanding, without altering the core information and the original language.", aiSummarizePrompt: "Provide a brief summary of this content, capturing the essential points in a concise manner. Preserve the original language and meaning.", aiContinuePrompt: "Continue the narrative or discussion from this content seamlessly, maintaining the same language, tone and style.", aiChangeToneProfessionalPrompt: "Adjust the tone to be professional, suitable for a formal business or academic setting, while retaining the original message and language.", aiChangeToneFriendlyPrompt: "It needs to be rewritten in a friendly tone while maintaining the original message and language. Please modify this content to be warm, approachable, and engaging.", aiChangeToneFormalPrompt: "Transform this content to have a formal tone, appropriate for official or serious contexts, without changing the main points and language.", aiChangeToneCasualPrompt: "Revise this content to have a casual, relaxed tone, making it feel more personal and less formal, without changing the original meaning and language.", aiChangeToneDirectPrompt: "Make the tone more direct, with straightforward language and a clear, assertive approach, without changing the original meaning and language.", aiChangeToneConfidentPrompt: "Infuse this content with a confident tone, showcasing assurance and decisiveness, without changing the original meaning and language.", aiChangeStyleBusinessPrompt: "Rewrite this content with a business-oriented style, focusing on clarity, efficiency, and professionalism, without changing the original meaning and language.", aiChangeStyleLegalPrompt: "Adapt this content to a legal style, incorporating appropriate terminology and formality typical of legal documents, without changing the original meaning and language.", aiChangeStyleJournalismPrompt: "Convert this content into a journalistic style, emphasizing factual accuracy, objectivity, and informative reporting, without changing the original meaning and language.", aiChangeStylePoeticPrompt: "Recreate this content with a poetic style, using expressive language, rhythm, and imagery to convey the message, without changing the original meaning and language.", aiTranslateToSpanishPrompt: "Translate this content into Spanish, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToFrenchPrompt: "Translate this content into French, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToGermanPrompt: "Translate this content into German, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToItalianPrompt: "Translate this content into Italian, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToPortuguesePrompt: "Translate this content into Portuguese, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToEnglishPrompt: "Translate this content into English, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToChinesePrompt: "Translate this content into Chinese, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToJapanesePrompt: "Translate this content into Japanese, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToKoreanPrompt: "Translate this content into Korean, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToRussianPrompt: "Translate this content into Russian, ensuring the translation is accurate and maintains the original meaning.", aiTranslateToArabicPrompt: "Translate this content into Arabic, ensuring the translation is accurate and maintains the original meaning." }, o3.I.set("ai-assistant", a()), o3.I.set("ai-commands", r()), l.T.prototype.controls["ai-commands"] = { isDisabled: (t5) => !t5.o.aiAssistant.aiAssistantCallback, tooltip: "AI Commands", list: { aiImproveWritingPrompt: "Improve writing", aiMakeShorterPrompt: "Make shorter", aiMakeLongerPrompt: "Make longer", aiSimplifyLanguagePrompt: "Simplify language", aiSummarizePrompt: "Summarize", aiContinuePrompt: "Continue", aiChangeToneProfessionalPrompt: "Change tone to professional", aiChangeToneFriendlyPrompt: "Change tone to friendly", aiChangeToneFormalPrompt: "Change tone to formal", aiChangeToneCasualPrompt: "Change tone to casual", aiChangeToneDirectPrompt: "Change tone to direct", aiChangeToneConfidentPrompt: "Change tone to confident", aiChangeStyleBusinessPrompt: "Change style to business", aiChangeStyleLegalPrompt: "Change style to legal", aiChangeStyleJournalismPrompt: "Change style of journalism", aiChangeStylePoeticPrompt: "Change style to poetic", aiTranslateToSpanishPrompt: "Translate to Spanish", aiTranslateToFrenchPrompt: "Translate to French", aiTranslateToGermanPrompt: "Translate to German", aiTranslateToItalianPrompt: "Translate to Italian", aiTranslateToPortuguesePrompt: "Translate to Portuguese", aiTranslateToEnglishPrompt: "Translate to English", aiTranslateToChinesePrompt: "Translate to Chinese", aiTranslateToJapanesePrompt: "Translate to Japanese", aiTranslateToKoreanPrompt: "Translate to Korean", aiTranslateToRussianPrompt: "Translate to Russian", aiTranslateToArabicPrompt: "Translate to Arabic" }, exec: (t5, e4, { control: i4 }) => {
              t5.e.fire("generateAiAssistantForm.ai-assistant", i4.name);
            } }, l.T.prototype.controls["ai-assistant"] = { isDisabled: (t5) => !t5.o.aiAssistant.aiAssistantCallback, hotkeys: ["ctrl+a+i", "cmd+a+i"], tooltip: "AI Assistant", exec: (t5, e4, i4) => {
              t5.e.fire("generateAiAssistantForm.ai-assistant");
            } };
          }, 82585: function(t4) {
            "use strict";
            t4.exports = { aiAssistant: "AI Assistant", aiCommands: "AI Commands", "AI Assistant": "AI Assistant", Prompt: "Prompt", "Ask AI to improve generated text": "Ask AI to improve generated text", Submit: "Submit" };
          }, 68942: function(t4) {
            "use strict";
            t4.exports = { aiAssistant: "Asistente de IA", aiCommands: "Comandos de IA", "AI Assistant": "Asistente de IA", "AI Commands": "Comandos de IA", "Improve writing": "Mejorar escritura", "Make shorter": "Hacer más corto", "Make longer": "Hacer más largo", "Simplify language": "Simplificar lenguaje", Summarize: "Resumir", Continue: "Continuar", Prompt: "Solicitud", Insert: "Insertar", "Insert After": "Insertar después", "Try Again": "Intentar de nuevo", "Ask AI to improve generated text": "Pida a la IA que mejore el texto generado", "Change tone to professional": "Cambiar tono a profesional", "Change tone to friendly": "Cambiar tono a amigable", "Change tone to formal": "Cambiar tono a formal", "Change tone to casual": "Cambiar tono a casual", "Change tone to direct": "Cambiar tono a directo", "Change tone to confident": "Cambiar tono a confiado", "Change tone to business": "Cambiar tono a empresarial", "Change style to legal": "Cambiar estilo a legal", "Change style to journalism": "Cambiar estilo a periodístico", "Change style to poetic": "Cambiar estilo a poético", "Translate to Spanish": "Traducir al español", "Translate to French": "Traducir al francés", "Translate to German": "Traducir al alemán", "Translate to Italian": "Traducir al italiano", "Translate to Portuguese": "Traducir al portugués", "Translate to English": "Traducir al inglés", "Translate to Chinese": "Traducir al chino", "Translate to Japanese": "Traducid al japonés", "Translate to Korean": "Traducir al coreano", "Translate to Russian": "Traducir al ruso", "Translate to Arabic": "Traducir al árabe", Submit: "Enviar" };
          }, 81026: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { en: function() {
              return o3;
            }, es: function() {
              return n2;
            } });
            var o3 = i3(82585), n2 = i3(68942);
          }, 20785: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return d;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(66927), s = i3(55186), a = i3(98253), l = i3(53048), c = i3(29780);
            let d = class extends c.D {
              className() {
                return "UIAiAssistant";
              }
              constructor(t5, { onInsert: e4, onInsertAfter: i4 }) {
                super(t5), this.__aiResult = "", this.__error = this.getElm("error"), this.__body = this.getElm("body"), this.__buttons = this.getElm("buttons"), this.__results = this.getElm("results"), this.__spinner = this.getElm("spinner"), this.__insertButton = (0, l.$n)(t5, "", "Insert", "primary").onAction(() => e4(this.__aiResult)), this.__insertAfterButton = (0, l.$n)(t5, "", "Insert After", "initial").onAction(() => i4(this.__aiResult));
                const o4 = () => {
                  this.__formAiAssistant.validate() && (this.__formAiAssistant.submit(), this.__toggleInsertButton(true), this.__toggleSubmitButton(true));
                };
                this.__submitButton = (0, l.$n)(t5, "ai-assistant", "").onAction(o4), this.__tryAgainButton = (0, l.$n)(t5, "update", "", "initial").onAction(o4), this.promptInput = new l.F0(t5, { name: "prompt", required: true, label: "Prompt", placeholder: "Ask AI to improve generated text", className: this.getFullElName("prompt-row-input") });
                const n3 = new l.Yh(t5, [this.__insertButton, this.__insertAfterButton, this.__tryAgainButton], { className: this.getFullElName("prompt-row") });
                this.__formAiAssistant = new l.XV(t5, [new l.Yh(t5, [this.promptInput, this.__submitButton], { className: this.getFullElName("prompt-row") })]).onSubmit((e5) => {
                  this.__error.textContent = "", this.setMod("loading", true), t5.e.fire("invokeAiAssistant", e5.prompt);
                  const i5 = this.getFullElName("", "hide", "true");
                  this.__results.classList.remove(i5), this.__buttons.classList.remove(i5), s.J.detach(this.__results), this.__results.appendChild(this.__spinner), this.__insertButton.focus();
                }), this.__buttons.appendChild(n3.container), this.__body.appendChild(this.__formAiAssistant.container), this.onChangePromptValue();
              }
              render() {
                return '<div>\n				<div class="&__container">\n						<div class="&__error"></div>\n						<div class="&__body"></div>\n						<div class="&__buttons &_hide_true"></div>\n						<div class="&__results &_hide_true">\n								<div class="&__spinner"></div>\n						</div>\n				</div>\n		</div>';
              }
              setPrompt(t5) {
                if (t5) {
                  const { jodit: e4 } = this, i4 = e4.o.aiAssistant[t5], { aiCommonPrefixPrompt: o4, aiCommonSuffixPrompt: n3 } = e4.o.aiAssistant;
                  this.promptInput.value = [o4, (0, a.K)(i4) ? i4 : "", n3].filter(Boolean).join(" "), this.__toggleInsertButton(true), this.promptInput.value && (this.__formAiAssistant.submit(), this.__toggleSubmitButton(true));
                }
                this.promptInput.focus();
              }
              onAiAssistentResponse(t5) {
                this.setMod("loading", false), s.J.detach(this.__results), this.__aiResult = t5, this.__results.appendChild(this.jodit.c.fromHTML(t5)), this.__toggleSubmitButton(false), this.__toggleInsertButton(false);
              }
              onAiAssistentError(t5) {
                this.__aiResult = "", this.setMod("loading", false), this.__error.textContent = t5, s.J.detach(this.__results), this.__toggleSubmitButton(false);
                const e4 = this.getFullElName("", "hide", "true");
                this.__results.classList.add(e4), this.__toggleInsertButton(true);
              }
              onChangePromptValue() {
                this.__toggleSubmitButton(!this.promptInput.value);
              }
              __toggleSubmitButton(t5) {
                this.__submitButton.state.disabled = t5, this.__tryAgainButton.state.disabled = t5;
              }
              __toggleInsertButton(t5) {
                this.__insertButton.state.disabled = t5, this.__insertAfterButton.state.disabled = t5;
              }
            };
            (0, o3.Cg)([(0, r.w)(":ai-assistant-response")], d.prototype, "onAiAssistentResponse", null), (0, o3.Cg)([(0, r.w)(":ai-assistant-error")], d.prototype, "onAiAssistentError", null), (0, o3.Cg)([(0, r.w)("promptInput:change")], d.prototype, "onChangePromptValue", null), d = (0, o3.Cg)([n2.s], d);
          }, 13917: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(71842), r = i3(56298), s = i3(69052), a = i3(71005), l = i3(46602), c = (i3(81982), i3(90084)), d = i3(89832);
            class u extends a.k {
              afterInit(t5) {
                t5.registerCommand("deleteButton", { exec: () => this.onDelete(false), hotkeys: t5.o.delete.hotkeys.delete }, { stopPropagation: false }).registerCommand("backspaceButton", { exec: () => this.onDelete(true), hotkeys: t5.o.delete.hotkeys.backspace }, { stopPropagation: false }).registerCommand("deleteWordButton", { exec: () => this.onDelete(false, "word"), hotkeys: t5.o.delete.hotkeys.deleteWord }).registerCommand("backspaceWordButton", { exec: () => this.onDelete(true, "word"), hotkeys: t5.o.delete.hotkeys.backspaceWord }).registerCommand("deleteSentenceButton", { exec: () => this.onDelete(false, "sentence"), hotkeys: t5.o.delete.hotkeys.deleteSentence }).registerCommand("backspaceSentenceButton", { exec: () => this.onDelete(true, "sentence"), hotkeys: t5.o.delete.hotkeys.backspaceSentence });
              }
              beforeDestruct(t5) {
                t5.e.off("afterCommand.delete");
              }
              onDelete(t5, e4 = "char") {
                const i4 = this.j, r2 = i4.selection;
                if (r2.isFocused() || r2.focus(), (0, c.L)(i4)) return false;
                const a2 = r2.range, u2 = i4.createInside.text(o3.INVISIBLE_SPACE);
                try {
                  if (n2.J.safeInsertNode(a2, u2), !n2.J.isOrContains(i4.editor, u2)) return;
                  if (i4.e.fire("backSpaceBeforeCases", t5, u2)) return false;
                  if ((0, l.W)(i4, u2, t5), d.C.some((o4) => {
                    if ((0, s.T)(o4) && o4(i4, u2, t5, e4)) return true;
                  })) return false;
                } catch (t6) {
                  throw t6;
                } finally {
                  i4.e.fire("backSpaceAfterDelete", t5, u2), this.safeRemoveEmptyNode(u2);
                }
                return false;
              }
              safeRemoveEmptyNode(t5) {
                var e4, i4;
                const { range: o4 } = this.j.s;
                o4.startContainer === t5 && (t5.previousSibling ? n2.J.isText(t5.previousSibling) ? o4.setStart(t5.previousSibling, null !== (i4 = null === (e4 = t5.previousSibling.nodeValue) || void 0 === e4 ? void 0 : e4.length) && void 0 !== i4 ? i4 : 0) : o4.setStartAfter(t5.previousSibling) : t5.nextSibling && (n2.J.isText(t5.nextSibling) ? o4.setStart(t5.nextSibling, 0) : o4.setStartBefore(t5.nextSibling)), o4.collapse(true), this.j.s.selectRange(o4)), n2.J.safeRemove(t5);
              }
            }
            u.requires = ["hotkeys"], r.fg.add("backspace", u);
          }, 43327: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { E: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(81779);
            function s(t5, e4, i4) {
              let r2 = e4, s2 = r2;
              for (; r2 && !n2.J.findNotEmptySibling(r2, i4) && r2.parentElement !== t5.editor; ) r2 = r2.parentElement, s2 = r2;
              if (n2.J.isElement(s2) && n2.J.isContentEditable(s2, t5.editor)) {
                const r3 = n2.J.findNotEmptySibling(s2, i4);
                if (r3 && (function(t6, e5, i5, r4) {
                  const s3 = n2.J.isTag(i5, o3.LIST_TAGS), l = n2.J.isTag(e5, o3.LIST_TAGS), c = (t7, e6) => e6 ? t7.firstElementChild : t7.lastElementChild;
                  return l ? (i5 = t6.createInside.element(t6.o.enterBlock), n2.J.before(e5, i5), a(t6, c(e5, r4), i5, r4)) : !(!i5 || !s3 || l) && a(t6, e5, c(i5, !r4), r4);
                }(t5, s2, r3, i4) || a(t5, s2, r3, i4))) return t5.s.setCursorBefore(e4), true;
              }
              return false;
            }
            function a(t5, e4, i4, o4) {
              if (e4 && n2.J.isElement(i4)) {
                n2.J.moveContent(e4, i4, !o4, (0, r.g)(t5));
                let s2 = e4;
                for (; s2 && s2 !== t5.editor && n2.J.isEmpty(s2); ) {
                  const t6 = s2.parentElement;
                  n2.J.safeRemove(s2), s2 = t6;
                }
                return true;
              }
              return false;
            }
          }, 72874: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { a: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(84976), r = i3(81779);
            function s(t5, e4, i4) {
              const s2 = o3.J.findSibling(e4, i4), a = o3.J.findSibling(e4, !i4);
              if (!o3.J.closest(e4, o3.J.isElement, t5.editor) && o3.J.isList(s2) && o3.J.isList(a) && o3.J.isTag(s2.lastElementChild, "li") && o3.J.isTag(a.firstElementChild, "li")) {
                const { setCursorBefore: l, setCursorAfter: c } = t5.s, d = s2.lastElementChild;
                return (0, n2.T1)(i4 ? o3.J.prepend : o3.J.append, a.firstElementChild, e4), o3.J.moveContent(a, s2, !i4, (0, r.g)(t5)), o3.J.safeRemove(a), (0, n2.T1)(i4 ? o3.J.append : o3.J.prepend, d, e4), (0, n2.T1)(i4 ? l : c, e4), true;
              }
              return false;
            }
          }, 90084: function(t4, e3, i3) {
            "use strict";
            function o3(t5) {
              return !t5.s.isCollapsed() && (t5.execCommand("Delete"), true);
            }
            i3.d(e3, { L: function() {
              return o3;
            } });
          }, 81486: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { H: function() {
              return a;
            } });
            var o3 = i3(17352), n2 = i3(71842), r = i3(65147), s = i3(81779);
            function a(t5, e4, i4, l) {
              var c, d, u;
              const h = i4 ? -1 : 1, p = n2.J.sibling(e4, !i4);
              let f, g = n2.J.sibling(e4, i4), m = null, b = false;
              const _ = (e5) => {
                let o4 = n2.J.sibling(e5, i4);
                return !o4 && e5.parentNode && e5.parentNode !== t5.editor && (o4 = (0, s.s)(e5, !i4, t5.editor, true)), o4;
              };
              for (g || (g = _(e4)); g && (n2.J.isText(g) || n2.J.isInlineBlock(g)); ) {
                for (; n2.J.isInlineBlock(g); ) g = i4 ? null == g ? void 0 : g.lastChild : null == g ? void 0 : g.firstChild;
                if (!g) break;
                if (null === (c = g.nodeValue) || void 0 === c ? void 0 : c.length) {
                  let t6 = (0, r.toArray)(g.nodeValue);
                  const e5 = t6.length;
                  let s3 = i4 ? e5 - 1 : 0;
                  if (t6[s3] === o3.INVISIBLE_SPACE) for (; t6[s3] === o3.INVISIBLE_SPACE; ) s3 += h;
                  if (f = t6[s3], t6[s3 + h] === o3.INVISIBLE_SPACE) {
                    for (s3 += h; t6[s3] === o3.INVISIBLE_SPACE; ) s3 += h;
                    s3 += i4 ? 1 : -1;
                  }
                  if (t6 = i4 && 0 > s3 ? [] : t6.slice(i4 ? 0 : s3 + 1, i4 ? s3 : e5), !p || !n2.J.isText(p) || (i4 ? /^ / : / $/).test(null !== (d = p.nodeValue) && void 0 !== d ? d : "") || !(0, r.trimInv)(p.nodeValue || "").length) for (let e6 = i4 ? t6.length - 1 : 0; (i4 ? e6 >= 0 : t6.length > e6) && " " === t6[e6]; e6 += i4 ? -1 : 1) t6[e6] = o3.NBSP_SPACE;
                  g.nodeValue = t6.join("");
                }
                if ((null === (u = g.nodeValue) || void 0 === u ? void 0 : u.length) || (m = g), !(0, r.isVoid)(f) && f !== o3.INVISIBLE_SPACE) {
                  b = true, (0, r.call)(i4 ? n2.J.after : n2.J.before, g, e4), ("sentence" === l || "word" === l && " " !== f && f !== o3.NBSP_SPACE) && a(t5, e4, i4, l);
                  break;
                }
                const s2 = _(g);
                m && (n2.J.safeRemove(m), m = null), g = s2;
              }
              return m && (n2.J.safeRemove(m), m = null), b && (function(t6, e5) {
                let i5 = t6.parentElement;
                for (; i5 && n2.J.isInlineBlock(i5) && n2.J.isTag(i5, "a"); ) {
                  const e6 = i5.parentElement;
                  n2.J.isEmpty(i5) && (n2.J.after(i5, t6), n2.J.safeRemove(i5)), i5 = e6;
                }
              }(e4), function(t6, e5) {
                e5.parentElement !== t6.editor && n2.J.isBlock(e5.parentElement) && n2.J.each(e5.parentElement, n2.J.isEmptyTextNode) && n2.J.after(e5, t6.createInside.element("br"));
              }(t5, e4), t5.s.setCursorBefore(e4), n2.J.isTag(e4.previousSibling, "br") && !n2.J.findNotEmptySibling(e4, false) && n2.J.after(e4, t5.createInside.element("br"))), b;
            }
          }, 29822: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { V: function() {
              return s;
            } });
            var o3 = i3(71842), n2 = i3(65147), r = i3(46602);
            function s(t5, e4, i4) {
              let s2 = o3.J.findSibling(e4, i4);
              return !s2 && e4.parentElement && e4.parentElement !== t5.editor && (s2 = o3.J.findSibling(e4.parentElement, i4)), !(!o3.J.isElement(s2) || o3.J.isContentEditable(s2, t5.editor) || ((0, n2.call)(i4 ? o3.J.before : o3.J.after, s2, e4), o3.J.safeRemove(s2), (0, r.W)(t5, e4, i4), (0, n2.call)(i4 ? t5.s.setCursorBefore : t5.s.setCursorAfter, e4), 0));
            }
          }, 59988: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { _: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              const n3 = o3.J.closest(e4, o3.J.isElement, t5.editor);
              if (!n3) return false;
              const r = o3.J.findNotEmptySibling(n3, i4);
              return !(!r || !o3.J.isEmpty(r) || (o3.J.safeRemove(r), t5.s.setCursorBefore(e4), 0));
            }
          }, 42898: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(71842), r = i3(72874);
            function s(t5, e4, i4) {
              let s2 = false;
              const { setCursorBefore: a, setCursorIn: l } = t5.s;
              let c = n2.J.closest(e4, n2.J.isElement, t5.editor);
              if (!c || !n2.J.isEmpty(c)) return false;
              const d = n2.J.findNotEmptyNeighbor(e4, i4, t5.editor);
              do {
                if (!c || !n2.J.isEmpty(c) || n2.J.isCell(c)) break;
                {
                  n2.J.after(c, e4);
                  const i5 = n2.J.closest(c, (t6) => n2.J.isElement(t6) && t6 !== c, t5.editor);
                  n2.J.safeRemove(c), s2 = true, c = i5;
                }
              } while (c);
              return !(!s2 || !(0, r.a)(t5, e4, i4)) || (!d || n2.J.isText(d) || n2.J.isTag(d, o3.INSEPARABLE_TAGS) ? a(e4) : l(d, !i4), s2);
            }
          }, 84323: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(42898);
            function s(t5, e4, i4) {
              const s2 = n2.J.findSibling(e4, i4);
              return !(!n2.J.isElement(s2) || !n2.J.isTag(s2, o3.INSEPARABLE_TAGS) && !n2.J.isEmpty(s2) || (n2.J.safeRemove(s2), n2.J.isTag(s2, "br") && !n2.J.findNotEmptySibling(e4, false) && n2.J.after(e4, t5.createInside.element("br")), t5.s.setCursorBefore(e4), n2.J.isTag(s2, "br") && (0, r.C)(t5, e4, i4), 0));
            }
          }, 94766: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { R: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4) {
              return !!o3.J.isCell(e4.parentElement);
            }
          }, 89708: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(97369);
            function r(t5, e4, i4) {
              var r2;
              const s = o3.J.closest(e4, o3.J.isElement, t5.editor), { s: a } = t5;
              if (o3.J.isLeaf(s) && (null === (r2 = null == s ? void 0 : s.parentElement) || void 0 === r2 ? void 0 : r2[i4 ? "firstElementChild" : "lastElementChild"]) === s && a.cursorInTheEdge(i4, s)) {
                const r3 = s.parentElement, l = t5.createInside.element(t5.o.enterBlock);
                return (0, n2.call)(i4 ? o3.J.before : o3.J.after, r3, l), o3.J.moveContent(s, l), o3.J.safeRemove(s), o3.J.isEmpty(r3) && o3.J.safeRemove(r3), (0, n2.call)(i4 ? a.setCursorBefore : a.setCursorAfter, e4), true;
              }
              return false;
            }
          }, 89832: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return h;
            } });
            var o3 = i3(43327), n2 = i3(72874), r = i3(81486), s = i3(29822), a = i3(59988), l = i3(42898), c = i3(84323), d = i3(94766), u = i3(89708);
            const h = [c.f, s.V, r.H, d.R, l.C, a._, n2.a, o3.E, u.B];
          }, 81982: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.delete = { hotkeys: { delete: ["delete", "cmd+backspace"], deleteWord: ["ctrl+delete", "cmd+alt+backspace", "ctrl+alt+backspace"], deleteSentence: ["ctrl+shift+delete", "cmd+shift+delete"], backspace: ["backspace"], backspaceWord: ["ctrl+backspace"], backspaceSentence: ["ctrl+shift+backspace", "cmd+shift+backspace"] } };
          }, 81779: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { g: function() {
              return r;
            }, s: function() {
              return n2;
            } });
            var o3 = i3(71842);
            function n2(t5, e4, i4, n3 = false) {
              const r2 = (t6) => e4 ? t6.firstChild : t6.lastChild;
              let s = o3.J.findNotEmptyNeighbor(t5, !e4, i4);
              if (n3 && o3.J.isElement(s) && !o3.J.isInlineBlock(s)) return null;
              if (s) do {
                if (!r2(s)) return s;
                s = r2(s);
              } while (s);
              return null;
            }
            function r(t5) {
              return (e4) => true !== t5.e.fire("backSpaceIsMovedIgnore", e4);
            }
          }, 49289: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298), n2 = i3(65147), r = i3(931), s = (i3(73124), i3(52450)), a = i3.n(s), l = i3(41111), c = i3.n(l), d = i3(49972), u = i3.n(d), h = i3(45062), p = i3.n(h), f = i3(18605), g = i3.n(f), m = i3(83389), b = i3.n(m), _ = i3(36115);
            o3.fg.add("bold", function(t5) {
              const e4 = (e5) => {
                const i4 = _.T.defaultOptions.controls[e5], o4 = { ...i4.css };
                let r2;
                return Object.keys(o4).forEach((t6) => {
                  r2 || (r2 = {}), r2[t6] = (0, n2.isArray)(o4[t6]) ? o4[t6][0] : o4[t6];
                }), t5.s.commitStyle({ element: i4.tags ? i4.tags[0] : void 0 }), t5.synchronizeValues(), false;
              };
              ["bold", "italic", "underline", "strikethrough"].forEach((e5) => {
                t5.registerButton({ name: e5, group: "font-style" });
              }), ["superscript", "subscript"].forEach((e5) => {
                t5.registerButton({ name: e5, group: "script" });
              }), t5.registerCommand("bold", { exec: e4, hotkeys: ["ctrl+b", "cmd+b"] }).registerCommand("italic", { exec: e4, hotkeys: ["ctrl+i", "cmd+i"] }).registerCommand("underline", { exec: e4, hotkeys: ["ctrl+u", "cmd+u"] }).registerCommand("strikethrough", { exec: e4 }).registerCommand("subscript", { exec: e4 }).registerCommand("superscript", { exec: e4 });
            }), r.I.set("bold", a()).set("italic", c()).set("strikethrough", u()).set("subscript", p()).set("superscript", g()).set("underline", b());
          }, 73124: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.controls.subscript = { tags: ["sub"], tooltip: "subscript" }, o3.T.prototype.controls.superscript = { tags: ["sup"], tooltip: "superscript" }, o3.T.prototype.controls.bold = { tagRegExp: /^(strong|b)$/i, tags: ["strong", "b"], css: { "font-weight": ["bold", "700"] }, tooltip: "Bold" }, o3.T.prototype.controls.italic = { tagRegExp: /^(em|i)$/i, tags: ["em", "i"], css: { "font-style": "italic" }, tooltip: "Italic" }, o3.T.prototype.controls.underline = { tagRegExp: /^(u)$/i, tags: ["u"], css: { "text-decoration-line": "underline" }, tooltip: "Underline" }, o3.T.prototype.controls.strikethrough = { tagRegExp: /^(s)$/i, tags: ["s"], css: { "text-decoration-line": "line-through" }, tooltip: "Strike through" };
          }, 98341: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(56298), r = i3(84976), s = i3(71005), a = i3(931), l = i3(93267), c = i3.n(l);
            i3(36115).T.prototype.controls.classSpan = { command: "applyClassName", exec: r.qN, list: ["enabled", "disabled", "activated", "text-left", "text-center", "text-right", "warning", "error"], isChildActive: (t5, e4) => {
              const i4 = t5.s.current();
              if (i4) {
                const n3 = o3.J.closest(i4, o3.J.isElement, t5.editor) || t5.editor;
                return Boolean(e4.control.args && n3.classList.contains(e4.control.args[0].toString()));
              }
              return false;
            }, isActive: (t5, e4) => {
              const i4 = t5.s.current();
              if (i4) {
                const n3 = o3.J.closest(i4, o3.J.isElement, t5.editor) || t5.editor;
                let r2 = false;
                return e4.control.list && Object.keys(e4.control.list).forEach((t6) => {
                  n3.classList.contains(t6) && (r2 = true);
                }), Boolean(n3 && n3 !== t5.editor && void 0 !== e4.control.list && r2);
              }
              return false;
            }, childTemplate: (t5, e4, i4) => `<span class="${e4}">${t5.i18n(i4)}</span>`, tooltip: "Insert className" }, n2.fg.add("classSpan", class extends s.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "classSpan", group: "script" }];
              }
              afterInit(t5) {
                t5.registerCommand("applyClassName", (e4, i4, o4) => (t5.s.commitStyle({ attributes: { class: o4 } }), false));
              }
              beforeDestruct() {
              }
            }), a.I.set("class-span", c());
          }, 38101: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(55186), s = i3(8453), a = i3(56298), l = i3(26328), c = i3(29866), d = (i3(74646), i3(15396));
            class u extends c.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "eraser", group: "font-style" }], this.currentSelectionNode = null, this.walker = new s.p(this.j.async, { timeout: this.j.o.cleanHTML.timeout });
              }
              afterInit(t5) {
              }
              get isEditMode() {
                return !(this.j.isInDestruct || !this.j.isEditorMode() || this.j.getReadOnly());
              }
              onChangeCleanHTML() {
                if (!this.isEditMode) return;
                const t5 = this.j;
                this.walker.setWork(t5.editor), this.currentSelectionNode = t5.s.current();
              }
              startWalker() {
                const { jodit: t5 } = this, e4 = (0, d.Zd)(this.j.o.cleanHTML.allowTags), i4 = (0, d.Zd)(this.j.o.cleanHTML.denyTags);
                this.walker.on("visit", (o4) => (0, d.eZ)(t5, o4, e4, i4, this.currentSelectionNode)).on("end", (t6) => {
                  this.j.e.fire(t6 ? "internalChange finishedCleanHTMLWorker" : "finishedCleanHTMLWorker");
                });
              }
              beforeCommand(t5) {
                if ("removeformat" === t5.toLowerCase()) return this.j.s.isCollapsed() ? (0, d.w5)(this.j) : (0, d.hk)(this.j), false;
              }
              onBeforeSetNativeEditorValue(t5) {
                const [e4, i4] = this.j.o.cleanHTML.useIframeSandbox ? this.j.createInside.sandbox() : [this.j.createInside.div()];
                return e4.innerHTML = t5.value, this.onSafeHTML(e4), t5.value = e4.innerHTML, (0, l.t)(e4, { safeJavaScriptLink: true, removeOnError: true }), r.J.safeRemove(i4), false;
              }
              onSafeHTML(t5) {
                (0, l.t)(t5, this.j.o.cleanHTML);
              }
              beforeDestruct() {
                this.walker.destruct();
              }
            }
            (0, o3.Cg)([(0, n2.watch)([":change", ":afterSetMode", ":afterInit", ":mousedown", ":keydown"])], u.prototype, "onChangeCleanHTML", null), (0, o3.Cg)([(0, n2.hook)("ready")], u.prototype, "startWalker", null), (0, o3.Cg)([(0, n2.watch)(":beforeCommand")], u.prototype, "beforeCommand", null), (0, o3.Cg)([(0, n2.watch)(":beforeSetNativeEditorValue")], u.prototype, "onBeforeSetNativeEditorValue", null), (0, o3.Cg)([(0, n2.watch)(":safeHTML")], u.prototype, "onSafeHTML", null), a.fg.add("cleanHtml", u);
          }, 74646: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(71948), r = i3.n(n2), s = i3(36115);
            s.T.prototype.cleanHTML = { timeout: 300, removeEmptyElements: true, fillEmptyParagraph: true, replaceNBSP: true, replaceOldTags: { i: "em", b: "strong" }, allowTags: false, denyTags: "script", useIframeSandbox: false, removeOnError: true, safeJavaScriptLink: true, disableCleanFilter: null }, s.T.prototype.controls.eraser = { command: "removeFormat", tooltip: "Clear Formatting" }, o3.I.set("eraser", r());
          }, 60549: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Z: function() {
              return r;
            } });
            var o3 = i3(98253), n2 = i3(59101);
            function r(t5) {
              const e4 = /([^[]*)\[([^\]]+)]/, i4 = /[\s]*,[\s]*/, r2 = /^(.*)[\s]*=[\s]*(.*)$/, s = {};
              return (0, o3.K)(t5) ? (t5.split(i4).map((t6) => {
                t6 = (0, n2.Bq)(t6);
                const o4 = e4.exec(t6), a = {}, l = (t7) => {
                  t7 = (0, n2.Bq)(t7);
                  const e5 = r2.exec(t7);
                  e5 ? a[e5[1]] = e5[2] : a[t7] = true;
                };
                if (o4) {
                  const t7 = o4[2].split(i4);
                  o4[1] && (t7.forEach(l), s[o4[1].toUpperCase()] = a);
                } else s[t6.toUpperCase()] = true;
              }), s) : !!t5 && (Object.keys(t5).forEach((e5) => {
                s[e5.toUpperCase()] = t5[e5];
              }), s);
            }
          }, 15396: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Zd: function() {
              return o3.Z;
            }, eZ: function() {
              return s.e;
            }, hk: function() {
              return r.h;
            }, w5: function() {
              return n2.w;
            } });
            var o3 = i3(60549), n2 = i3(30526), r = i3(20646), s = i3(52306);
          }, 30526: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { D: function() {
              return s;
            }, w: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5, e4) {
              const { s: i4 } = t5;
              let o4 = e4;
              if (!o4) {
                o4 = t5.createInside.fake();
                const { range: e5 } = i4;
                n2.J.safeInsertNode(e5, o4), e5.collapse();
              }
              const r2 = n2.J.furthest(o4, s, t5.editor);
              if (r2) if (i4.cursorOnTheLeft(r2)) n2.J.before(r2, o4);
              else if (i4.cursorOnTheRight(r2)) n2.J.after(r2, o4);
              else {
                const t6 = i4.splitSelection(r2);
                t6 && n2.J.after(t6, o4);
              }
              e4 || (i4.setCursorBefore(o4), n2.J.safeRemove(o4));
            }
            function s(t5) {
              return n2.J.isInlineBlock(t5) && !n2.J.isTag(t5, o3.INSEPARABLE_TAGS);
            }
          }, 20646: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { h: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(97369), r = i3(30526);
            function s(t5) {
              const { s: e4, editor: i4, createInside: s2 } = t5, { range: a } = e4, l = a.cloneRange(), c = a.cloneRange(), d = s2.fake(), u = s2.fake();
              l.collapse(true), c.collapse(false), o3.J.safeInsertNode(l, d), o3.J.safeInsertNode(c, u), a.setStartBefore(d), a.collapse(true), e4.selectRange(a), (0, r.w)(t5, d), a.setEndAfter(u), a.collapse(false), e4.selectRange(a), (0, r.w)(t5, u);
              const h = [];
              o3.J.between(d, u, (t6) => {
                (0, r.D)(t6) && !o3.J.isTag(t6, "a") && h.push(t6), o3.J.isElement(t6) && (0, n2.attr)(t6, "style") && (0, n2.attr)(t6, "style", null);
              }), h.forEach((t6) => o3.J.unwrap(t6));
              const p = (t6, e5) => {
                if (!o3.J.findNotEmptySibling(t6, e5)) {
                  const o4 = t6.parentNode;
                  if (o4 && o4 !== i4 && (0, n2.attr)(o4, "style")) return (0, n2.attr)(o4, "style", null), p(o4, e5), true;
                }
              };
              p(d, true) && p(u, false), a.setStartAfter(d), a.setEndBefore(u), e4.selectRange(a), o3.J.safeRemove(d), o3.J.safeRemove(u);
            }
          }, 5232: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4, n3) {
              if (n3 && o3.J.isElement(e4) && true !== n3[e4.nodeName]) {
                const t6 = e4.attributes;
                if (t6 && t6.length) {
                  const o4 = [];
                  for (let i5 = 0; t6.length > i5; i5 += 1) {
                    const r = n3[e4.nodeName][t6[i5].name];
                    (!r || true !== r && r !== t6[i5].value) && o4.push(t6[i5].name);
                  }
                  o4.length && (i4 = true), o4.forEach((t7) => {
                    e4.removeAttribute(t7);
                  });
                }
              }
              return i4;
            }
          }, 63443: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { f: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5, e4, i4) {
              if (t5.o.cleanHTML.fillEmptyParagraph && n2.J.isBlock(e4) && n2.J.isEmpty(e4, o3.INSEPARABLE_TAGS)) {
                const i5 = t5.createInside.element("br");
                return e4.appendChild(i5), true;
              }
              return i4;
            }
          }, 3593: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { allowAttributes: function() {
              return o3.f;
            }, fillEmptyParagraph: function() {
              return n2.f;
            }, removeEmptyTextNode: function() {
              return r.r;
            }, removeInvTextNodes: function() {
              return s.u;
            }, replaceOldTags: function() {
              return a.H;
            }, sanitizeAttributes: function() {
              return l.L;
            }, tryRemoveNode: function() {
              return c.k;
            } });
            var o3 = i3(5232), n2 = i3(63443), r = i3(926), s = i3(67431), a = i3(81199), l = i3(32782), c = i3(32014);
          }, 926: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { r: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4, n3, r, s) {
              return o3.J.isText(e4) && !e4.nodeValue ? (e4 === s && t5.s.isCollapsed() && t5.s.setCursorAfter(e4), o3.J.safeRemove(e4), true) : i4;
            }
          }, 67431: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { u: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5, e4, i4, r2, s, a) {
              if (a === e4 || !n2.J.isText(e4) || null == e4.nodeValue) return i4;
              if (!(0, o3.INVISIBLE_SPACE_REG_EXP)().test(e4.nodeValue)) return i4;
              const l = n2.J.furthest(a, n2.J.isBlock, t5.editor);
              return !l || n2.J.isOrContains(l, e4) ? i4 : (e4.nodeValue = e4.nodeValue.replace((0, o3.INVISIBLE_SPACE_REG_EXP)(), ""), e4 === a && t5.s.isCollapsed() && t5.s.setCursorAfter(e4), e4.nodeValue || n2.J.safeRemove(e4), true);
            }
          }, 81199: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { H: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              const n3 = function(t6, e5, i5) {
                if (!i5 || !o3.J.isHTMLElement(e5)) return e5;
                const n4 = i5[e5.nodeName.toLowerCase()] || i5[e5.nodeName];
                return n4 ? o3.J.replace(e5, n4, t6.createInside, true, false) : e5;
              }(t5, e4, t5.o.cleanHTML.replaceOldTags);
              return e4 !== n3 ? (e4 = n3, true) : i4;
            }
          }, 32782: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { L: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(65147);
            function r(t5, e4, i4) {
              return !(!o3.J.isElement(e4) || !(0, n2.sanitizeHTMLElement)(e4, { safeJavaScriptLink: t5.options.cleanHTML.safeJavaScriptLink, removeOnError: t5.options.cleanHTML.removeOnError })) || i4;
            }
          }, 32014: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(59101);
            function s(t5, e4, i4, s2, a, l) {
              return function(t6, e5, i5, s3, a2) {
                return !(n2.J.isText(e5) || !(s3 && !s3[e5.nodeName] || a2 && a2[e5.nodeName])) || t6.o.cleanHTML.removeEmptyElements && n2.J.isElement(e5) && null != e5.nodeName.match(o3.IS_INLINE) && !n2.J.isTemporary(e5) && 0 === (0, r.Bq)(e5.innerHTML).length && (null == i5 || !n2.J.isOrContains(e5, i5));
              }(t5, e4, l, s2, a) ? (n2.J.safeRemove(e4), true) : i4;
            }
          }, 52306: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { e: function() {
              return r;
            } }), i3(17352);
            var o3 = i3(3593);
            const n2 = Object.keys(o3);
            function r(t5, e4, i4, r2, s) {
              let a = false;
              const l = t5.o.cleanHTML.disableCleanFilter;
              for (const c of n2) if (!(l && l.has(c) || (a = (0, o3[c])(t5, e4, a, i4, r2, s), e4.isConnected))) return true;
              return a;
            }
          }, 24593: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(65147);
            i3(51329), n2.fg.add("clipboard", class {
              constructor() {
                this.buttons = [{ name: "cut", group: "clipboard" }, { name: "copy", group: "clipboard" }, { name: "paste", group: "clipboard" }, { name: "selectall", group: "clipboard" }];
              }
              init(t5) {
                var e4;
                null === (e4 = this.buttons) || void 0 === e4 || e4.forEach((e5) => t5.registerButton(e5)), t5.e.off(`copy.${o3.CLIPBOARD_ID} cut.${o3.CLIPBOARD_ID}`).on(`copy.${o3.CLIPBOARD_ID} cut.${o3.CLIPBOARD_ID}`, (e5) => {
                  var i4;
                  const n3 = t5.s.html, s = (0, r.getDataTransfer)(e5) || (0, r.getDataTransfer)(t5.ew) || (0, r.getDataTransfer)(e5.originalEvent);
                  s && (s.setData(o3.TEXT_PLAIN, (0, r.stripTags)(n3)), s.setData(o3.TEXT_HTML, n3)), t5.buffer.set(o3.CLIPBOARD_ID, n3), t5.e.fire("pasteStack", { html: n3, action: t5.o.defaultActionOnPaste || o3.INSERT_AS_HTML }), "cut" === e5.type && (t5.s.remove(), t5.s.focus()), e5.preventDefault(), null === (i4 = null == t5 ? void 0 : t5.events) || void 0 === i4 || i4.fire("afterCopy", n3);
                });
              }
              destruct(t5) {
                var e4, i4;
                null === (e4 = null == t5 ? void 0 : t5.buffer) || void 0 === e4 || e4.set(o3.CLIPBOARD_ID, ""), null === (i4 = null == t5 ? void 0 : t5.events) || void 0 === i4 || i4.off("." + o3.CLIPBOARD_ID);
              }
            });
          }, 51329: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(51457), r = i3.n(n2), s = i3(23602), a = i3.n(s), l = i3(86899), c = i3.n(l), d = i3(95320), u = i3.n(d), h = i3(36115);
            h.T.prototype.controls.cut = { command: "cut", isDisabled: (t5) => t5.s.isCollapsed(), tooltip: "Cut selection" }, h.T.prototype.controls.copy = { command: "copy", isDisabled: (t5) => t5.s.isCollapsed(), tooltip: "Copy selection" }, h.T.prototype.controls.selectall = { icon: "select-all", command: "selectall", tooltip: "Select all" }, o3.I.set("copy", r()).set("cut", a()).set("paste", c()).set("select-all", u());
          }, 36293: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298), n2 = i3(65147);
            i3(39626), o3.fg.add("color", function(t5) {
              t5.registerButton({ name: "brush", group: "color" });
              const e4 = (e5, i4, o4) => {
                const r = (0, n2.normalizeColor)(o4);
                switch (e5) {
                  case "background":
                    t5.s.commitStyle({ attributes: { style: { backgroundColor: r || "" } } });
                    break;
                  case "forecolor":
                    t5.s.commitStyle({ attributes: { style: { color: r || "" } } });
                }
                return t5.synchronizeValues(), false;
              };
              t5.registerCommand("forecolor", e4).registerCommand("background", e4);
            });
          }, 39626: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(65147), r = i3(931), s = i3(16116), a = i3(45674), l = i3.n(a), c = i3(36115);
            r.I.set("brush", l()), c.T.prototype.controls.brushCell = { isVisible: (t5) => !t5.o.disablePlugins.includes("color"), icon: "brush", popup: (t5, e4, i4) => {
              if (!(0, n2.isJoditObject)(t5)) return;
              const o4 = t5.getInstance("Table", t5.o).getAllSelectedCells();
              if (!o4.length) return false;
              const r2 = (e5) => (0, s.Kn)(t5, (r3) => {
                o4.forEach((t6) => {
                  (0, n2.css)(t6, e5, r3);
                }), t5.lock(), t5.synchronizeValues(), i4(), t5.unlock();
              }, (0, n2.css)(o4[0], e5));
              return (0, s.Zg)(t5, [{ name: "Background", content: r2("background-color") }, { name: "Text", content: r2("color") }, { name: "Border", content: r2("border-color") }]);
            }, tooltip: "Background" }, c.T.prototype.controls.brush = { isVisible: (t5) => !t5.o.disablePlugins.includes("color"), update(t5, e4) {
              const i4 = (0, n2.dataBind)(e4, "color"), r2 = (i5, o4) => {
                o4 && o4 !== (0, n2.css)(t5.editor, i5).toString() && (e4.state.icon.fill = o4);
              };
              if (i4) {
                const t6 = (0, n2.dataBind)(e4, "color");
                return void r2("color" === t6 ? t6 : "background-color", i4);
              }
              const s2 = t5.s.current();
              if (s2 && !e4.state.disabled) {
                const e5 = o3.J.closest(s2, o3.J.isElement, t5.editor) || t5.editor;
                r2("color", (0, n2.css)(e5, "color").toString()), r2("background-color", (0, n2.css)(e5, "background-color").toString());
              }
              e4.state.icon.fill = "", e4.state.activated = false;
            }, popup: (t5, e4, i4, r2) => {
              let a2 = "", l2 = "", c2 = [], d = null;
              return e4 && e4 !== t5.editor && o3.J.isNode(e4) && (o3.J.isElement(e4) && t5.s.isCollapsed() && !o3.J.isTag(e4, /* @__PURE__ */ new Set(["br", "hr"])) && (d = e4), o3.J.up(e4, (t6) => {
                if (o3.J.isHTMLElement(t6)) {
                  const e5 = (0, n2.css)(t6, "color", true), i5 = (0, n2.css)(t6, "background-color", true);
                  if (e5) return a2 = e5.toString(), true;
                  if (i5) return l2 = i5.toString(), true;
                }
              }, t5.editor)), c2 = [{ name: "Background", content: (0, s.Kn)(t5, (e5) => {
                d ? d.style.backgroundColor = e5 : t5.execCommand("background", false, e5), (0, n2.dataBind)(r2, "color", e5), (0, n2.dataBind)(r2, "color-mode", "background"), i4();
              }, l2) }, { name: "Text", content: (0, s.Kn)(t5, (e5) => {
                d ? d.style.color = e5 : t5.execCommand("forecolor", false, e5), (0, n2.dataBind)(r2, "color", e5), (0, n2.dataBind)(r2, "color-mode", "color"), i4();
              }, a2) }], "background" !== t5.o.colorPickerDefaultTab && (c2 = c2.reverse()), (0, s.Zg)(t5, c2, d);
            }, exec(t5, e4, { button: i4 }) {
              const r2 = (0, n2.dataBind)(i4, "color-mode"), s2 = (0, n2.dataBind)(i4, "color");
              if (!r2) return false;
              if (e4 && e4 !== t5.editor && o3.J.isNode(e4) && o3.J.isElement(e4)) switch (r2) {
                case "color":
                  e4.style.color = s2;
                  break;
                case "background":
                  e4.style.backgroundColor = s2;
              }
              else t5.execCommand("background" === r2 ? r2 : "forecolor", false, s2);
            }, tooltip: "Fill color or set the text color" };
          }, 38373: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(56298), r = i3(38322), s = i3(931), a = i3(3843), l = i3.n(a), c = i3(94628), d = i3(36115);
            const u = "copy-format", h = ["fontWeight", "fontStyle", "fontSize", "color", "margin", "padding", "borderWidth", "borderStyle", "borderColor", "borderRadius", "backgroundColor", "textDecorationLine", "fontFamily"], p = (t5, e4, i4, o4) => {
              let n3 = (0, r.A)(i4, e4);
              return n3 === o4[e4] && (n3 = i4.parentNode && i4 !== t5.editor && i4.parentNode !== t5.editor ? p(t5, e4, i4.parentNode, o4) : void 0), n3;
            };
            d.T.prototype.controls.copyformat = { exec: (t5, e4, { button: i4 }) => {
              if (e4) {
                if (t5.buffer.exists(u)) t5.buffer.delete(u), t5.e.off(t5.editor, "mouseup." + u);
                else {
                  const i5 = {}, n3 = o3.J.up(e4, (t6) => t6 && !o3.J.isText(t6), t5.editor) || t5.editor, s2 = t5.createInside.span();
                  t5.editor.appendChild(s2), h.forEach((t6) => {
                    i5[t6] = (0, r.A)(s2, t6);
                  }), s2 !== t5.editor && o3.J.safeRemove(s2);
                  const a2 = ((t6, e5, i6) => {
                    const o4 = {};
                    return e5 && h.forEach((n4) => {
                      o4[n4] = p(t6, n4, e5, i6), n4.match(/border(Style|Color)/) && !o4.borderWidth && (o4[n4] = void 0);
                    }), o4;
                  })(t5, n3, i5), l2 = () => {
                    t5.buffer.delete(u);
                    const e5 = t5.s.current();
                    e5 && (o3.J.isTag(e5, "img") ? (0, r.A)(e5, a2) : t5.s.commitStyle({ attributes: { style: a2 } })), t5.e.off(t5.editor, "mouseup." + u);
                  };
                  t5.e.on(t5.editor, "mouseup." + u, l2), t5.buffer.set(u, true);
                }
                i4.update();
              }
            }, isActive: (t5) => t5.buffer.exists(u), tooltip: "Paint format" }, n2.fg.add("copyformat", function(t5) {
              t5.registerButton({ name: "copyformat", group: "clipboard" }), (0, n2.JW)(c);
            }), s.I.set("copyformat", l());
          }, 60843: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "نسخ التنسيق" };
          }, 66504: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Kopírovat formát" };
          }, 11095: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Format kopierenт" };
          }, 57032: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Copiar formato" };
          }, 83997: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "کپی کردن قالب" };
          }, 49717: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Kopioi muotoilu" };
          }, 32164: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Format de copie" };
          }, 25459: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "העתק עיצוב" };
          }, 11395: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Formátum másolás" };
          }, 76073: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "salin format" };
          }, 94628: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ar: function() {
              return n2.a;
            }, cs_cz: function() {
              return s.a;
            }, de: function() {
              return l.a;
            }, es: function() {
              return d.a;
            }, fa: function() {
              return h.a;
            }, fi: function() {
              return f.a;
            }, fr: function() {
              return m.a;
            }, he: function() {
              return _.a;
            }, hu: function() {
              return x.a;
            }, id: function() {
              return y.a;
            }, it: function() {
              return k.a;
            }, ja: function() {
              return S.a;
            }, ko: function() {
              return T.a;
            }, mn: function() {
              return I.a;
            }, nl: function() {
              return L.a;
            }, pl: function() {
              return P.a;
            }, pt_br: function() {
              return N.a;
            }, ru: function() {
              return D.a;
            }, tr: function() {
              return O.a;
            }, zh_cn: function() {
              return H.a;
            }, zh_tw: function() {
              return V.a;
            } });
            var o3 = i3(60843), n2 = i3.n(o3), r = i3(66504), s = i3.n(r), a = i3(11095), l = i3.n(a), c = i3(57032), d = i3.n(c), u = i3(83997), h = i3.n(u), p = i3(49717), f = i3.n(p), g = i3(32164), m = i3.n(g), b = i3(25459), _ = i3.n(b), v = i3(11395), x = i3.n(v), w = i3(76073), y = i3.n(w), j = i3(90393), k = i3.n(j), C = i3(99457), S = i3.n(C), z = i3(55142), T = i3.n(z), E = i3(27835), I = i3.n(E), A = i3(51170), L = i3.n(A), M = i3(63884), P = i3.n(M), R = i3(64139), N = i3.n(R), B = i3(98229), D = i3.n(B), q = i3(5878), O = i3.n(q), J = i3(87444), H = i3.n(J), F = i3(60580), V = i3.n(F);
          }, 90393: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Copia il formato" };
          }, 99457: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "copyformat" };
          }, 55142: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "복사 형식" };
          }, 27835: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Формат хуулах" };
          }, 51170: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "opmaak kopiëren" };
          }, 63884: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "format kopii" };
          }, 64139: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Copiar formato" };
          }, 98229: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Копировать формат" };
          }, 5878: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "Kopyalama Biçimi" };
          }, 87444: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "复制格式" };
          }, 60580: function(t4) {
            "use strict";
            t4.exports = { "copy-format": "複製格式" };
          }, 5929: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(56298), r = i3(65147), s = i3(59101), a = i3(71005);
            class l extends a.k {
              afterInit(t5) {
                t5.e.on("afterCommand.delete", (t6) => {
                  "delete" === t6 && this.__afterDeleteCommand();
                }), t5.registerCommand("delete", { exec: this.__onDeleteCommand.bind(this) }, { stopPropagation: false });
              }
              beforeDestruct(t5) {
                t5.e.off("afterCommand.delete");
              }
              __afterDeleteCommand() {
                const t5 = this.j, e4 = t5.s.current();
                if (e4 && o3.J.isTag(e4.firstChild, "br") && t5.s.removeNode(e4.firstChild), !((0, s.Bq)(t5.editor.textContent || "") || t5.editor.querySelector("img,table,jodit,iframe,hr") || e4 && o3.J.closest(e4, "table", t5.editor))) {
                  t5.editor.innerHTML = "";
                  const e5 = t5.s.setCursorIn(t5.editor);
                  t5.s.removeNode(e5);
                }
              }
              __onDeleteCommand() {
                const { jodit: t5 } = this;
                if (t5.s.isCollapsed()) return;
                t5.s.expandSelection();
                const e4 = t5.s.range;
                e4.deleteContents();
                const i4 = t5.createInside.fake();
                e4.insertNode(i4);
                const n3 = o3.J.findSibling(i4, true), r2 = o3.J.findSibling(i4, false);
                return this.__moveContentInLeftSibling(i4, n3, r2), e4.setStartBefore(i4), e4.collapse(true), this.__moveCursorInEditableSibling(t5, n3, i4, e4), this.__addBrInEmptyBlock(i4, r2, e4), o3.J.safeRemove(i4), t5.s.selectRange(e4), false;
              }
              __moveContentInLeftSibling(t5, e4, i4) {
                e4 = this.__defineRightLeftBox(e4), !o3.J.isList(i4) && !o3.J.isTag(i4, "table") && o3.J.isBlock(i4) && o3.J.isBlock(e4) && (o3.J.append(e4, t5), o3.J.moveContent(i4, e4), o3.J.safeRemove(i4)), o3.J.isList(i4) && o3.J.isLeaf(i4.firstElementChild) && o3.J.isEmpty(i4.firstElementChild) && o3.J.safeRemove(i4.firstElementChild);
              }
              __defineRightLeftBox(t5) {
                if (!o3.J.isList(t5)) return t5;
                let e4 = t5.lastElementChild;
                return o3.J.isLeaf(e4) || (e4 = this.j.createInside.element("li"), o3.J.append(t5, e4)), e4;
              }
              __addBrInEmptyBlock(t5, e4, i4) {
                const n3 = this.j;
                if (t5.isConnected && o3.J.isBlock(t5.parentNode) && !t5.nextSibling && !t5.previousSibling) {
                  const e5 = n3.createInside.element("br");
                  o3.J.after(t5, e5), i4.setStartBefore(e5), i4.collapse(true);
                }
                if (o3.J.isTag(e4, "table")) {
                  const t6 = (0, r.$$)("td,th", e4).shift();
                  o3.J.isCell(t6) && o3.J.isEmpty(t6) && o3.J.append(t6, n3.createInside.element("br"));
                }
              }
              __moveCursorInEditableSibling(t5, e4, i4, n3) {
                var r2;
                if (!e4 || !o3.J.isText(e4)) {
                  const e5 = null !== (r2 = o3.J.closest(i4, o3.J.isBlock, t5.editor)) && void 0 !== r2 ? r2 : t5.editor, s2 = o3.J.prev(i4, o3.J.isText, e5);
                  s2 && (n3.setStartAfter(s2), n3.collapse(true), o3.J.safeRemove(i4));
                }
              }
            }
            l.requires = ["backspace"], n2.fg.add("deleteCommand", l);
          }, 96900: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.draggableTags = ["img", "jodit-media", "jodit"];
          }, 27509: function(t4, e3, i3) {
            "use strict";
            var o3, n2 = i3(31635), r = i3(22664), s = i3(71842), a = i3(56298), l = i3(65147), c = i3(71005);
            i3(96900), function(t5) {
              t5[t5.IDLE = 0] = "IDLE", t5[t5.WAIT_DRAGGING = 1] = "WAIT_DRAGGING", t5[t5.DRAGGING = 2] = "DRAGGING";
            }(o3 || (o3 = {}));
            class d extends c.k {
              constructor() {
                super(...arguments), this.dragList = [], this.draggable = null, this.isCopyMode = false, this.diffStep = 10, this.startX = 0, this.startY = 0, this.state = o3.IDLE;
              }
              afterInit() {
                this.dragList = this.j.o.draggableTags ? (0, l.splitArray)(this.j.o.draggableTags).filter(Boolean).map((t5) => t5.toLowerCase()) : [], this.dragList.length && this.j.e.on("mousedown dragstart", this.onDragStart);
              }
              onDragStart(t5) {
                if ("dragstart" === t5.type && this.draggable) return false;
                if (this.state > o3.IDLE) return;
                const e4 = t5.target;
                if (!this.dragList.length || !e4) return;
                const i4 = (t6) => Boolean(t6 && this.dragList.includes(t6.nodeName.toLowerCase()));
                let n3 = s.J.furthest(e4, i4, this.j.editor) || (i4(e4) ? e4 : null);
                n3 && (s.J.isTag(n3.parentElement, "a") && n3.parentElement.firstChild === n3 && n3.parentElement.lastChild === n3 && (n3 = n3.parentElement), this.startX = t5.clientX, this.startY = t5.clientY, this.isCopyMode = (0, l.ctrlKey)(t5), this.draggable = n3.cloneNode(true), (0, l.dataBind)(this.draggable, "target", n3), this.state = o3.WAIT_DRAGGING, this.addDragListeners());
              }
              onDrag(t5) {
                var e4, i4;
                if (!this.draggable || this.state === o3.IDLE) return;
                const n3 = t5.clientY;
                if (this.state !== o3.WAIT_DRAGGING || Math.sqrt(Math.pow(t5.clientX - this.startX, 2) + Math.pow(n3 - this.startY, 2)) >= this.diffStep) {
                  if (this.state === o3.WAIT_DRAGGING && (this.j.lock("drag-and-drop-element"), this.state = o3.DRAGGING), this.j.e.fire("hidePopup hideResizer"), !this.draggable.parentNode) {
                    const o4 = (0, l.dataBind)(this.draggable, "target");
                    (0, l.css)(this.draggable, { zIndex: 1e13, pointerEvents: "none", pointer: "drag", position: "fixed", opacity: 0.7, display: "inline-block", left: t5.clientX, top: t5.clientY, width: null !== (e4 = null == o4 ? void 0 : o4.offsetWidth) && void 0 !== e4 ? e4 : 100, height: null !== (i4 = null == o4 ? void 0 : o4.offsetHeight) && void 0 !== i4 ? i4 : 100 }), (0, a.My)(this.j, d).appendChild(this.draggable);
                  }
                  (0, l.css)(this.draggable, { left: t5.clientX, top: t5.clientY }), this.j.s.insertCursorAtPoint(t5.clientX, t5.clientY);
                }
              }
              onDragEnd() {
                this.isInDestruct || (this.removeDragListeners(), this.j.unlock(), this.state = o3.IDLE, this.draggable && (s.J.safeRemove(this.draggable), this.draggable = null));
              }
              onDrop() {
                if (!this.draggable || o3.DRAGGING > this.state) return void this.onDragEnd();
                let t5 = (0, l.dataBind)(this.draggable, "target");
                this.onDragEnd(), this.isCopyMode && (t5 = t5.cloneNode(true));
                const { parentElement: e4 } = t5;
                this.j.s.insertNode(t5, true, false), e4 && s.J.isEmpty(e4) && !s.J.isCell(e4) && s.J.safeRemove(e4), s.J.isTag(t5, "img") && this.j.e && this.j.e.fire("afterInsertImage", t5), this.j.e.fire("synchro");
              }
              addDragListeners() {
                this.j.e.on(this.j.editor, "mousemove", this.onDrag).on("mouseup", this.onDrop).on([this.j.ew, this.ow], "mouseup", this.onDragEnd);
              }
              removeDragListeners() {
                this.j.e.off(this.j.editor, "mousemove", this.onDrag).off("mouseup", this.onDrop).off([this.j.ew, this.ow], "mouseup", this.onDragEnd);
              }
              beforeDestruct() {
                this.onDragEnd(), this.j.e.off("mousedown dragstart", this.onDragStart), this.removeDragListeners();
              }
            }
            (0, n2.Cg)([r.autobind], d.prototype, "onDragStart", null), (0, n2.Cg)([(0, r.throttle)((t5) => t5.defaultTimeout / 10)], d.prototype, "onDrag", null), (0, n2.Cg)([r.autobind], d.prototype, "onDragEnd", null), (0, n2.Cg)([r.autobind], d.prototype, "onDrop", null), a.fg.add("dragAndDropElement", d);
          }, 64565: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(71005), d = i3(10274);
            class u extends c.k {
              constructor() {
                super(...arguments), this.isFragmentFromEditor = false, this.isCopyMode = false, this.startDragPoint = { x: 0, y: 0 }, this.draggable = null, this.bufferRange = null, this.getText = (t5) => {
                  const e4 = (0, l.getDataTransfer)(t5);
                  return e4 ? e4.getData(n2.TEXT_HTML) || e4.getData(n2.TEXT_PLAIN) : null;
                };
              }
              afterInit() {
                this.j.e.on([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart);
              }
              onDragStart(t5) {
                let e4 = t5.target;
                if (this.onDragEnd(), this.isFragmentFromEditor = s.J.isOrContains(this.j.editor, e4, true), this.isCopyMode = !this.isFragmentFromEditor || (0, l.ctrlKey)(t5), this.isFragmentFromEditor) {
                  const t6 = this.j.s.sel, e5 = t6 && t6.rangeCount ? t6.getRangeAt(0) : null;
                  e5 && (this.bufferRange = e5.cloneRange());
                } else this.bufferRange = null;
                this.startDragPoint.x = t5.clientX, this.startDragPoint.y = t5.clientY, function(t6) {
                  return s.J.isElement(t6) && t6.classList.contains(d.Q.prototype.getFullElName("item"));
                }(e4) && (e4 = e4.querySelector("img")), s.J.isTag(e4, "img") && (this.draggable = e4.cloneNode(true), (0, l.dataBind)(this.draggable, "target", e4)), this.addDragListeners();
              }
              addDragListeners() {
                this.j.e.on("dragover", this.onDrag).on("drop.DragAndDrop", this.onDrop).on(window, "dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop", this.onDragEnd);
              }
              removeDragListeners() {
                this.j.e.off("dragover", this.onDrag).off("drop.DragAndDrop", this.onDrop).off(window, "dragend.DragAndDrop drop.DragAndDrop mouseup.DragAndDrop", this.onDragEnd);
              }
              onDrag(t5) {
                this.draggable && (this.j.e.fire("hidePopup"), this.j.s.insertCursorAtPoint(t5.clientX, t5.clientY), t5.preventDefault(), t5.stopPropagation());
              }
              onDragEnd() {
                this.draggable && (s.J.safeRemove(this.draggable), this.draggable = null), this.isCopyMode = false, this.removeDragListeners();
              }
              onDrop(t5) {
                if (!t5.dataTransfer || !t5.dataTransfer.files || !t5.dataTransfer.files.length) {
                  if (!this.isFragmentFromEditor && !this.draggable) return this.j.e.fire("paste", t5), t5.preventDefault(), t5.stopPropagation(), false;
                  const e4 = this.j.s.sel, i4 = this.bufferRange || (e4 && e4.rangeCount ? e4.getRangeAt(0) : null);
                  let o4 = null;
                  if (!this.draggable && i4) o4 = this.isCopyMode ? i4.cloneContents() : i4.extractContents();
                  else if (this.draggable) if (this.isCopyMode) {
                    const [t6, e5] = "1" === (0, l.attr)(this.draggable, "-is-file") ? ["a", "href"] : ["img", "src"];
                    o4 = this.j.createInside.element(t6), o4.setAttribute(e5, (0, l.attr)(this.draggable, "data-src") || (0, l.attr)(this.draggable, "src") || ""), "a" === t6 && (o4.textContent = (0, l.attr)(o4, e5) || "");
                  } else o4 = (0, l.dataBind)(this.draggable, "target");
                  else this.getText(t5) && (o4 = this.j.createInside.fromHTML(this.getText(t5)));
                  e4 && e4.removeAllRanges(), this.j.s.insertCursorAtPoint(t5.clientX, t5.clientY), o4 && (this.j.s.insertNode(o4, false, false), i4 && o4.firstChild && o4.lastChild && (i4.setStartBefore(o4.firstChild), i4.setEndAfter(o4.lastChild), this.j.s.selectRange(i4), this.j.e.fire("synchro")), s.J.isTag(o4, "img") && this.j.events && this.j.e.fire("afterInsertImage", o4)), t5.preventDefault(), t5.stopPropagation();
                }
                this.isFragmentFromEditor = false, this.removeDragListeners();
              }
              beforeDestruct() {
                this.onDragEnd(), this.j.e.off(window, ".DragAndDrop").off(".DragAndDrop").off([window, this.j.ed, this.j.editor], "dragstart.DragAndDrop", this.onDragStart);
              }
            }
            (0, o3.Cg)([r.autobind], u.prototype, "onDragStart", null), (0, o3.Cg)([(0, r.throttle)((t5) => t5.defaultTimeout / 10)], u.prototype, "onDrag", null), (0, o3.Cg)([r.autobind], u.prototype, "onDragEnd", null), (0, o3.Cg)([r.autobind], u.prototype, "onDrop", null), a.fg.add("dragAndDrop", u);
          }, 69122: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { removeExtraBr: function() {
              return o3.z;
            } });
            var o3 = i3(72984);
          }, 72984: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { z: function() {
              return r;
            } });
            var o3 = i3(55186);
            const n2 = /* @__PURE__ */ new Set(["table", "pre", "blockquote", "code"]);
            function r(t5, e4) {
              if (!t5.o.dtd.removeExtraBr || o3.J.isTag(e4, "br")) return;
              const i4 = o3.J.furthest(e4, o3.J.isBlock, t5.editor);
              if (i4 && !o3.J.isTag(i4, n2)) {
                const i5 = o3.J.isTag(e4, "br") ? e4 : o3.J.findNotEmptySibling(e4, false);
                if (!o3.J.isTag(i5, "br")) return;
                t5.s.setCursorBefore(i5), o3.J.safeRemove(i5);
              }
            }
          }, 30958: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { o: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4) {
              if (o3.J.isFragment(e4) && (e4 = e4.firstChild), t5.o.dtd.checkBlockNesting && o3.J.isBlock(e4)) {
                const e5 = o3.J.furthest(t5.s.current(), o3.J.isBlock, t5.editor);
                e5 && !t5.o.dtd.blockLimits[e5.tagName.toLowerCase()] && (t5.s.setCursorAfter(e5), o3.J.isEmpty(e5) && o3.J.safeRemove(e5));
              }
            }
          }, 28313: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { checkBlockNesting: function() {
              return o3.o;
            } });
            var o3 = i3(30958);
          }, 43655: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.dtd = { removeExtraBr: true, checkBlockNesting: true, blockLimits: { article: 1, aside: 1, audio: 1, body: 1, caption: 1, details: 1, dir: 1, div: 1, dl: 1, fieldset: 1, figcaption: 1, figure: 1, footer: 1, form: 1, header: 1, hgroup: 1, main: 1, menu: 1, nav: 1, ol: 1, section: 1, table: 1, td: 1, th: 1, tr: 1, ul: 1, video: 1 } };
          }, 61589: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(66927), r = i3(56298), s = i3(71005), a = (i3(43655), i3(69122)), l = i3(28313);
            class c extends s.k {
              afterInit(t5) {
              }
              beforeDestruct(t5) {
              }
              __onBeforeInsertNode(t5) {
                Object.keys(l).forEach((e4) => {
                  l[e4](this.j, t5);
                });
              }
              __onAfterInsertNode(t5) {
                Object.keys(a).forEach((e4) => {
                  a[e4](this.j, t5);
                });
              }
            }
            (0, o3.Cg)([(0, n2.w)(":beforeInsertNode")], c.prototype, "__onBeforeInsertNode", null), (0, o3.Cg)([(0, n2.w)(":afterInsertNode")], c.prototype, "__onAfterInsertNode", null), r.fg.add("dtd", c);
          }, 13405: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(9810), c = i3(29866), d = i3(81781);
            class u extends c.k {
              afterInit(t5) {
                const e4 = t5.o.enter.toLowerCase(), i4 = e4 === n2.BR.toLowerCase();
                t5.o.enterBlock || (t5.o.enterBlock = i4 ? n2.PARAGRAPH : e4), t5.registerCommand("enter", (t6, e5, i5 = {}) => this.onEnter(i5));
              }
              onEnterKeyDown(t5) {
                if (t5.key === n2.KEY_ENTER) {
                  const e4 = this.j, i4 = e4.e.fire("beforeEnter", t5);
                  return void 0 !== i4 ? i4 : (e4.s.isCollapsed() || e4.execCommand("Delete"), e4.s.focus(), this.onEnter(t5), e4.e.fire("afterEnter", t5), e4.synchronizeValues(), false);
                }
              }
              onEnter(t5) {
                const { jodit: e4 } = this, i4 = e4.createInside.fake();
                try {
                  s.J.safeInsertNode(e4.s.range, i4), (0, d.Mt)(e4, i4, ["a"]);
                  let o4 = (0, d.Dk)(i4, e4);
                  const n3 = s.J.isLeaf(o4);
                  if ((!n3 || (null == t5 ? void 0 : t5.shiftKey)) && (0, d.lN)(i4, e4, null == t5 ? void 0 : t5.shiftKey)) return false;
                  if (o4 || (0, d.tX)(i4, e4) || (o4 = (0, d.C1)(i4, e4)), !o4) return (0, d.yh)(i4, e4, n3 ? "li" : e4.o.enter), false;
                  if (!(0, d.bD)(i4, e4, o4)) return false;
                  if (n3 && this.__isEmptyListLeaf(o4)) return (0, d.cf)(i4, e4, o4), false;
                  (0, d.HS)(i4, e4, o4);
                } finally {
                  i4.isConnected && e4.s.setCursorBefore(i4), s.J.safeRemove(i4);
                }
              }
              __isEmptyListLeaf(t5) {
                const e4 = this.j.e.fire("enterIsEmptyListLeaf", t5);
                return (0, l.L)(e4) ? e4 : s.J.isEmpty(t5);
              }
              beforeDestruct(t5) {
                t5.e.off("keydown.enter");
              }
            }
            (0, o3.Cg)([(0, r.watch)(":keydown.enter")], u.prototype, "onEnterKeyDown", null), a.fg.add("enter", u);
          }, 6110: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { l: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(641);
            function s(t5, e4, i4) {
              const s2 = Boolean(n2.J.closest(t5, ["pre", "blockquote"], e4.editor));
              if (e4.o.enter.toLowerCase() === o3.BR.toLowerCase() || i4 && !s2 || !i4 && s2) {
                if (s2 && function(t6) {
                  const e5 = a(a(t6));
                  return !!e5 && (n2.J.safeRemove(a(t6)), n2.J.safeRemove(e5), true);
                }(t5)) return false;
                const i5 = e4.createInside.element("br");
                if (n2.J.before(t5, i5), !n2.J.findNotEmptySibling(i5, false)) {
                  const e5 = i5.cloneNode();
                  n2.J.after(i5, e5), n2.J.before(e5, t5);
                }
                return (0, r.$)(i5, e4.editor, e4.ed), true;
              }
              return false;
            }
            function a(t5) {
              if (!t5) return false;
              const e4 = n2.J.findSibling(t5, true);
              return !(!e4 || !n2.J.isTag(e4, "br")) && e4;
            }
          }, 47317: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              return !!o3.J.canSplitBlock(i4) || (o3.J.before(t5, e4.createInside.element("br")), false);
            }
          }, 36291: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { D: function() {
              return r;
            } });
            var o3 = i3(17352), n2 = i3(55186);
            function r(t5, e4, i4 = o3.IS_BLOCK) {
              let s = t5;
              const a = e4.editor;
              do {
                if (!s || s === a) break;
                if (i4.test(s.nodeName)) return n2.J.isLeaf(s) ? s : r(s.parentNode, e4, /^li$/i) || s;
                s = s.parentNode;
              } while (s && s !== a);
              return null;
            }
          }, 64107: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { t: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4) {
              return Boolean(o3.J.prev(t5, (t6) => o3.J.isBlock(t6) || o3.J.isImage(t6), e4.editor));
            }
          }, 81781: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C1: function() {
              return u.C;
            }, Dk: function() {
              return r.D;
            }, HS: function() {
              return d.H;
            }, Mt: function() {
              return l.M;
            }, bD: function() {
              return n2.b;
            }, cf: function() {
              return c.c;
            }, lN: function() {
              return o3.l;
            }, tX: function() {
              return s.t;
            }, yh: function() {
              return a.y;
            } });
            var o3 = i3(6110), n2 = i3(47317), r = i3(36291), s = i3(64107), a = i3(41159), l = i3(63634), c = i3(30687), d = i3(70214), u = i3(62453);
          }, 41159: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { y: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(641);
            function r(t5, e4, i4, r2) {
              const s = "br" === i4.toLowerCase(), { createInside: a } = e4, l = a.element(i4), c = a.element("br");
              return s || l.appendChild(c), r2 && r2.cssText && l.setAttribute("style", r2.cssText), o3.J.after(t5, l), o3.J.before(s ? l : c, t5), (0, n2.$)(l, e4.editor, e4.ed), l;
            }
          }, 63634: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4, i4) {
              const { s: n3 } = t5, r = o3.J.closest(e4, i4, t5.editor);
              r && (n3.cursorOnTheRight(r, e4) ? o3.J.after(r, e4) : n3.cursorOnTheLeft(r, e4) && o3.J.before(r, e4));
            }
          }, 30687: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { c: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(58720), r = i3(41159);
            function s(t5, e4, i4) {
              const s2 = o3.J.closest(i4, ["ol", "ul"], e4.editor);
              if (!s2) return;
              const a = s2.parentElement, l = o3.J.isLeaf(a), c = l ? a : s2, d = e4.s.createRange();
              d.setStartAfter(i4), d.setEndAfter(s2);
              const u = d.extractContents();
              o3.J.after(c, t5), o3.J.safeRemove(i4), (0, n2.$$)("li", s2).length || o3.J.safeRemove(s2);
              const h = (0, r.y)(t5, e4, l ? "li" : e4.o.enter);
              u.querySelector("li") && (l ? h.appendChild(u) : o3.J.after(h, u));
            }
          }, 70214: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { H: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(641), r = i3(41159);
            function s(t5, e4, i4) {
              const s2 = e4.s, { enter: a } = e4.o, l = a.toLowerCase(), c = o3.J.isLeaf(i4), d = i4.tagName.toLowerCase() === l || c, u = s2.cursorOnTheRight(i4, t5), h = s2.cursorOnTheLeft(i4, t5);
              if (!d && (u || h)) return u ? o3.J.after(i4, t5) : o3.J.before(i4, t5), (0, r.y)(t5, e4, l), void (h && !u && o3.J.prepend(i4, t5));
              const p = s2.splitSelection(i4, t5);
              (0, n2.$)(p, e4.editor, e4.ed);
            }
          }, 62453: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { C: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4) {
              let i4 = t5;
              o3.J.up(i4, (t6) => {
                t6 && t6.hasChildNodes() && t6 !== e4.editor && (i4 = t6);
              }, e4.editor);
              const n3 = o3.J.wrapInline(i4, e4.o.enter, e4);
              if (o3.J.isEmpty(n3)) {
                const i5 = e4.createInside.element("br");
                n3.appendChild(i5), o3.J.before(i5, t5);
              }
              return n3;
            }
          }, 67335: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(56298), r = i3(16116);
            i3(36115).T.prototype.controls.file = { popup: (t5, e4, i4) => {
              const n3 = (e5, i5 = "") => {
                t5.s.insertNode(t5.createInside.fromHTML(`<a href="${e5}" title="${i5}">${i5 || e5}</a>`));
              };
              let s = null;
              return e4 && (o3.J.isTag(e4, "a") || o3.J.closest(e4, "a", t5.editor)) && (s = o3.J.isTag(e4, "a") ? e4 : o3.J.closest(e4, "a", t5.editor)), (0, r.kG)(t5, { filebrowser: (t6) => {
                t6.files && t6.files.forEach((e5) => n3(t6.baseurl + e5)), i4();
              }, upload: true, url: (t6, e5) => {
                s ? (s.setAttribute("href", t6), s.setAttribute("title", e5)) : n3(t6, e5), i4();
              } }, s, i4, false);
            }, tags: ["a"], tooltip: "Insert file" }, n2.fg.add("file", function(t5) {
              t5.registerButton({ name: "file", group: "media" });
            });
          }, 92553: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(56298), r = i3(36115);
            r.T.prototype.autofocus = false, r.T.prototype.cursorAfterAutofocus = "end", r.T.prototype.saveSelectionOnBlur = true, n2.fg.add("focus", function(t5) {
              t5.o.saveSelectionOnBlur && t5.e.on("blur", () => {
                t5.isEditorMode() && t5.s.save(true);
              }).on("focus", () => {
                t5.s.restore();
              });
              const e4 = () => {
                if (t5.s.focus(), "end" === t5.o.cursorAfterAutofocus) {
                  const e5 = o3.J.last(t5.editor, (t6) => o3.J.isText(t6));
                  e5 && t5.s.setCursorIn(e5, false);
                }
              };
              t5.e.on("afterInit", () => {
                t5.o.autofocus && (t5.defaultTimeout ? t5.async.setTimeout(e4, 300) : e4());
              }), t5.e.on("afterInit afterAddPlace", () => {
                t5.e.off(t5.editor, "mousedown.autofocus").on(t5.editor, "mousedown.autofocus", (e5) => {
                  t5.isEditorMode() && e5.target && o3.J.isBlock(e5.target) && !e5.target.childNodes.length && (t5.editor === e5.target ? t5.s.focus() : t5.s.setCursorIn(e5.target));
                });
              });
            });
          }, 67986: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(59101), r = i3(38322), s = i3(931), a = i3(48842), l = i3.n(a), c = i3(25501), d = i3.n(c), u = i3(36115);
            u.T.prototype.defaultFontSizePoints = "px", s.I.set("font", l()).set("fontsize", d()), u.T.prototype.controls.fontsize = { command: "fontsize", data: { cssRule: "font-size", normalise: (t5, e4) => /pt$/i.test(t5) && "pt" === e4.o.defaultFontSizePoints ? t5.replace(/pt$/i, "") : t5 }, list: [8, 9, 10, 11, 12, 14, 16, 18, 24, 30, 32, 34, 36, 48, 60, 72, 96], textTemplate: (t5, e4) => e4 + t5.o.defaultFontSizePoints, childTemplate: (t5, e4, i4) => `${i4}${t5.o.defaultFontSizePoints}`, tooltip: "Font size", value: (t5, e4) => {
              var i4;
              const n3 = t5.s.current();
              if (!n3) return;
              const s2 = o3.J.closest(n3, o3.J.isElement, t5.editor);
              if (!s2) return;
              const a2 = (null === (i4 = e4.control.data) || void 0 === i4 ? void 0 : i4.cssRule) || "font-size";
              return (0, r.A)(s2, a2).toString();
            }, isChildActive: (t5, e4) => {
              var i4, o4;
              const n3 = e4.state.value, r2 = null !== (o4 = null === (i4 = e4.control.data) || void 0 === i4 ? void 0 : i4.normalize) && void 0 !== o4 ? o4 : (t6) => t6;
              return Boolean(n3 && e4.control.args && r2(e4.control.args[0].toString()) === r2(n3.toString()));
            }, isActive: (t5, e4) => {
              var i4, o4;
              const n3 = e4.state.value;
              if (!n3) return false;
              const r2 = null !== (o4 = null === (i4 = e4.control.data) || void 0 === i4 ? void 0 : i4.normalize) && void 0 !== o4 ? o4 : (t6) => t6;
              let s2 = e4.control.data.cacheListSet;
              if (!s2) {
                const t6 = Object.keys(e4.control.list).map(r2);
                s2 = new Set(t6), e4.control.data.cacheListSet = s2;
              }
              return s2.has(r2(n3.toString()));
            } }, u.T.prototype.controls.font = { ...u.T.prototype.controls.fontsize, command: "fontname", textTemplate: (t5, e4) => {
              const [i4] = e4.split(",");
              return (0, n2.Gd)(i4, `"'`);
            }, list: { "": "Default", "Arial, Helvetica, sans-serif": "Arial", "'Courier New', Courier, monospace": "Courier New", "Georgia, Palatino, serif": "Georgia", "'Lucida Sans Unicode', 'Lucida Grande', sans-serif": "Lucida Sans Unicode", "Tahoma, Geneva, sans-serif": "Tahoma", "'Times New Roman', Times, serif": "Times New Roman", "'Trebuchet MS', Helvetica, sans-serif": "Trebuchet MS", "Helvetica, sans-serif": "Helvetica", "Impact, Charcoal, sans-serif": "Impact", "Verdana, Geneva, sans-serif": "Verdana" }, childTemplate: (t5, e4, i4) => {
              let o4 = false;
              try {
                o4 = -1 === e4.indexOf("dings") && document.fonts.check(`16px ${e4}`, i4);
              } catch (t6) {
              }
              return `<span data-style="${e4}" style="${o4 ? `font-family: ${e4}!important;` : ""}">${i4}</span>`;
            }, data: { cssRule: "font-family", normalize: (t5) => t5.toLowerCase().replace(/['"]+/g, "").replace(/[^a-z0-9-]+/g, ",") }, tooltip: "Font family" };
          }, 73077: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298), n2 = i3(65147);
            i3(67986), o3.fg.add("font", function(t5) {
              t5.registerButton({ name: "font", group: "font" }).registerButton({ name: "fontsize", group: "font" });
              const e4 = (e5, i4, o4) => {
                switch (e5) {
                  case "fontsize":
                    t5.s.commitStyle({ attributes: { style: { fontSize: (0, n2.normalizeSize)(o4, t5.o.defaultFontSizePoints) } } });
                    break;
                  case "fontname":
                    t5.s.commitStyle({ attributes: { style: { fontFamily: o4 } } });
                }
                return t5.synchronizeValues(), false;
              };
              t5.registerCommand("fontsize", e4).registerCommand("fontname", e4);
            });
          }, 71576: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(931), r = i3(29348), s = i3.n(r), a = i3(36115);
            n2.I.set("paragraph", s()), a.T.prototype.controls.paragraph = { command: "formatBlock", value(t5, e4) {
              var i4, n3;
              const r2 = e4.control, s2 = t5.s.current(), a2 = o3.J.closest(s2, o3.J.isBlock, t5.editor);
              return null !== (i4 = null == a2 ? void 0 : a2.nodeName.toLowerCase()) && void 0 !== i4 ? i4 : null === (n3 = r2.data) || void 0 === n3 ? void 0 : n3.currentValue;
            }, update(t5, e4) {
              const i4 = e4.control;
              if (!t5.s.current()) return false;
              const o4 = e4.state.value, n3 = i4.list;
              return n3 && n3[o4.toString()] && t5.o.textIcons && (e4.state.text = n3[o4.toString()].toString()), false;
            }, data: { currentValue: "p" }, list: { p: "Paragraph", h1: "Heading 1", h2: "Heading 2", h3: "Heading 3", h4: "Heading 4", blockquote: "Quote", pre: "Code" }, isChildActive: (t5, e4) => {
              var i4, o4;
              return Boolean(e4.state.value === (null === (o4 = null === (i4 = e4.control) || void 0 === i4 ? void 0 : i4.args) || void 0 === o4 ? void 0 : o4[0]));
            }, isActive: (t5, e4) => {
              var i4;
              return e4.state.value !== t5.o.enter && Boolean(null === (i4 = e4.control.list) || void 0 === i4 ? void 0 : i4[e4.state.value]);
            }, childTemplate: (t5, e4, i4) => `<${e4} style="margin:0;padding:0"><span>${t5.i18n(i4)}</span></${e4}>`, tooltip: "Insert format block" };
          }, 88429: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298);
            i3(71576), o3.fg.add("formatBlock", function(t5) {
              t5.registerButton({ name: "paragraph", group: "font" }), t5.registerCommand("formatblock", (e4, i4, o4) => (t5.s.commitStyle({ element: o4 }), t5.synchronizeValues(), false));
            });
          }, 70061: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(931), r = i3(24772), s = i3.n(r), a = i3(66547), l = i3.n(a), c = i3(36115);
            c.T.prototype.fullsize = false, c.T.prototype.globalFullSize = true, n2.I.set("fullsize", s()).set("shrink", l()), c.T.prototype.controls.fullsize = { exec: (t5) => {
              t5.toggleFullSize();
            }, update(t5, e4) {
              const i4 = t5.isFullSize ? "shrink" : "fullsize";
              e4.state.activated = t5.isFullSize, t5.o.textIcons ? e4.state.text = i4 : e4.state.icon.name = i4;
            }, tooltip: "Open in fullsize", mode: o3.MODE_SOURCE + o3.MODE_WYSIWYG };
          }, 9443: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298), n2 = i3(83044), r = i3(38322);
            i3(70061);
            const s = /* @__PURE__ */ new Set();
            o3.fg.add("fullsize", function(t5) {
              t5.registerButton({ name: "fullsize" });
              let e4 = false, i4 = 0, o4 = 0, a = false;
              const l = () => {
                const { container: n3, events: s2 } = t5;
                s2 && (e4 ? (i4 = (0, r.A)(n3, "height", true), o4 = (0, r.A)(n3, "width", true), (0, r.A)(n3, { height: t5.ow.innerHeight, width: t5.ow.innerWidth }), a = true) : a && (0, r.A)(n3, { height: i4 || "auto", width: o4 || "auto" }));
              }, c = (i5) => {
                var o5;
                const { container: a2, events: c2 } = t5;
                if (a2) {
                  if (void 0 === i5 && (i5 = !a2.classList.contains("jodit_fullsize")), t5.setMod("fullsize", i5), t5.o.fullsize = i5, e4 = i5, a2.classList.toggle("jodit_fullsize", i5), t5.toolbar && ((0, n2.y)(t5) && (null === (o5 = t5.toolbarContainer) || void 0 === o5 || o5.appendChild(t5.toolbar.container)), (0, r.A)(t5.toolbar.container, "width", "auto")), i5 ? s.add(a2) : s.delete(a2), t5.o.globalFullSize && (1 === s.size && i5 || 0 === s.size && !i5)) {
                    let t6 = a2.parentNode;
                    for (; t6 && t6.nodeType !== Node.DOCUMENT_NODE && t6.nodeType !== Node.DOCUMENT_FRAGMENT_NODE; ) t6.classList.toggle("jodit_fullsize-box_true", i5), t6 = t6.parentNode;
                    l();
                  }
                  c2.fire("afterResize");
                }
              };
              t5.o.globalFullSize && t5.e.on(t5.ow, "resize", l), t5.e.on("afterInit afterOpen", () => {
                var e5;
                t5.toggleFullSize(null === (e5 = null == t5 ? void 0 : t5.options) || void 0 === e5 ? void 0 : e5.fullsize);
              }).on("toggleFullSize", c).on("beforeDestruct", () => {
                e4 && c(false);
              }).on("beforeDestruct", () => {
                t5.events && t5.e.off(t5.ow, "resize", l);
              });
            });
          }, 81522: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.commandToHotkeys = { removeFormat: ["ctrl+shift+m", "cmd+shift+m"], insertOrderedList: ["ctrl+shift+7", "cmd+shift+7"], insertUnorderedList: ["ctrl+shift+8, cmd+shift+8"], selectall: ["ctrl+a", "cmd+a"] };
          }, 30405: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(65147), s = i3(71005);
            i3(81522), n2.fg.add("hotkeys", class extends s.k {
              constructor() {
                super(...arguments), this.onKeyPress = (t5) => {
                  const e4 = this.specialKeys[t5.which], i4 = (t5.key || String.fromCharCode(t5.which)).toLowerCase(), o4 = [e4 || i4];
                  return ["alt", "ctrl", "shift", "meta"].forEach((i5) => {
                    t5[i5 + "Key"] && e4 !== i5 && o4.push(i5);
                  }), (0, r.normalizeKeyAliases)(o4.join("+"));
                }, this.specialKeys = { 8: "backspace", 9: "tab", 10: "return", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause", 20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 59: ";", 61: "=", 91: "meta", 96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7", 104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111: "/", 112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 173: "-", 186: ";", 187: "=", 188: ",", 189: "-", 190: ".", 191: "/", 192: "`", 219: "[", 220: "\\", 221: "]", 222: "'" };
              }
              afterInit(t5) {
                (0, r.keys)(t5.o.commandToHotkeys, false).forEach((e5) => {
                  const i4 = t5.o.commandToHotkeys[e5];
                  i4 && ((0, r.isArray)(i4) || (0, r.isString)(i4)) && t5.registerHotkeyToCommand(i4, e5);
                });
                let e4 = false;
                t5.e.off(".hotkeys").on([t5.ow, t5.ew], "keydown.hotkeys", (t6) => {
                  if (t6.key === o3.KEY_ESC) return this.j.e.fire("escape", t6);
                }).on("keydown.hotkeys", (i4) => {
                  const o4 = this.onKeyPress(i4), n3 = { shouldStop: true };
                  if (false === this.j.e.fire(o4 + ".hotkey", i4.type, n3)) {
                    if (n3.shouldStop) return e4 = true, t5.e.stopPropagation("keydown"), false;
                    i4.preventDefault();
                  }
                }, { top: true }).on("keyup.hotkeys", () => {
                  if (e4) return e4 = false, t5.e.stopPropagation("keyup"), false;
                }, { top: true });
              }
              beforeDestruct(t5) {
                t5.events && t5.e.off(".hotkeys");
              }
            });
          }, 89651: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(56298), r = i3(931), s = i3(89097), a = i3.n(s), l = i3(36115);
            r.I.set("hr", a()), l.T.prototype.controls.hr = { command: "insertHorizontalRule", tags: ["hr"], tooltip: "Insert Horizontal Line" }, n2.fg.add("hr", function(t5) {
              t5.registerButton({ name: "hr", group: "insert" }), t5.registerCommand("insertHorizontalRule", () => {
                const e4 = t5.createInside.element("hr");
                t5.s.insertNode(e4, false, false);
                const i4 = o3.J.closest(e4.parentElement, o3.J.isBlock, t5.editor);
                i4 && o3.J.isEmpty(i4) && i4 !== t5.editor && (o3.J.after(i4, e4), o3.J.safeRemove(i4));
                let n3 = o3.J.next(e4, o3.J.isBlock, t5.editor, false);
                return n3 || (n3 = t5.createInside.element(t5.o.enter), o3.J.after(e4, n3)), t5.s.setCursorIn(n3), false;
              });
            });
          }, 99689: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.iframeBaseUrl = "", o3.T.prototype.iframeTitle = "Jodit Editor", o3.T.prototype.iframeDoctype = "<!DOCTYPE html>", o3.T.prototype.iframeDefaultSrc = "about:blank", o3.T.prototype.iframeStyle = 'html{margin:0;padding:0;min-height: 100%;}body{box-sizing:border-box;font-size:13px;line-height:1.6;padding:10px;margin:0;background:transparent;color:#000;position:relative;z-index:2;user-select:auto;margin:0px;overflow:auto;outline:none;}table{width:100%;border:none;border-collapse:collapse;empty-cells: show;max-width: 100%;}th,td{padding: 2px 5px;border:1px solid #ccc;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}p{margin-top:0;}.jodit_editor .jodit_iframe_wrapper{display: block;clear: both;user-select: none;position: relative;}.jodit_editor .jodit_iframe_wrapper:after {position:absolute;content:"";z-index:1;top:0;left:0;right: 0;bottom: 0;cursor: pointer;display: block;background: rgba(0, 0, 0, 0);} .jodit_disabled{user-select: none;-o-user-select: none;-moz-user-select: none;-khtml-user-select: none;-webkit-user-select: none;-ms-user-select: none}', o3.T.prototype.iframeCSSLinks = [];
          }, 26495: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(65147);
            i3(99689), n2.fg.add("iframe", function(t5) {
              const e4 = t5.options;
              t5.e.on("afterSetMode", () => {
                t5.isEditorMode() && t5.s.focus();
              }).on("generateDocumentStructure.iframe", (t6, i4) => {
                const o4 = t6 || i4.iframe.contentWindow.document;
                if (o4.open(), o4.write(e4.iframeDoctype + `<html dir="${e4.direction}" class="jodit" lang="${(0, r.defaultLanguage)(e4.language)}"><head><title>${e4.iframeTitle}</title>` + (e4.iframeBaseUrl ? `<base href="${e4.iframeBaseUrl}"/>` : "") + '</head><body class="jodit-wysiwyg"></body></html>'), o4.close(), e4.iframeCSSLinks && e4.iframeCSSLinks.forEach((t7) => {
                  const e5 = o4.createElement("link");
                  e5.setAttribute("rel", "stylesheet"), e5.setAttribute("href", t7), o4.head && o4.head.appendChild(e5);
                }), e4.iframeStyle) {
                  const t7 = o4.createElement("style");
                  t7.innerHTML = e4.iframeStyle, o4.head && o4.head.appendChild(t7);
                }
              }).on("createEditor", () => {
                if (!e4.iframe) return;
                const i4 = t5.c.element("iframe");
                i4.style.display = "block", i4.src = "about:blank", i4.className = "jodit-wysiwyg_iframe", i4.setAttribute("allowtransparency", "true"), i4.setAttribute("tabindex", e4.tabIndex.toString()), i4.setAttribute("frameborder", "0"), t5.workplace.appendChild(i4), t5.iframe = i4;
                const n3 = t5.e.fire("generateDocumentStructure.iframe", null, t5);
                return (0, r.callPromise)(n3, () => {
                  if (!t5.iframe) return false;
                  const i5 = t5.iframe.contentWindow.document;
                  t5.editorWindow = t5.iframe.contentWindow;
                  const n4 = () => {
                    (0, r.attr)(i5.body, "contenteditable", t5.getMode() !== o3.MODE_SOURCE && !t5.getReadOnly() || null);
                  }, s = (t6) => {
                    const e5 = /<body.*<\/body>/im, i6 = "{%%BODY%%}", o4 = e5.exec(t6);
                    return o4 && (t6 = t6.replace(e5, i6).replace(/<span([^>]*?)>(.*?)<\/span>/gim, "").replace(/&lt;span([^&]*?)&gt;(.*?)&lt;\/span&gt;/gim, "").replace(i6, o4[0].replace(/(<body[^>]+?)min-height["'\s]*:[\s"']*[0-9]+(px|%)/im, "$1").replace(/(<body[^>]+?)([\s]*["'])?contenteditable["'\s]*=[\s"']*true["']?/im, "$1").replace(/<(style|script|span)[^>]+jodit[^>]+>.*?<\/\1>/g, "")).replace(/(class\s*=\s*)(['"])([^"']*)(jodit-wysiwyg|jodit)([^"']*\2)/g, "$1$2$3$5").replace(/(<[^<]+?)\sclass="[\s]*"/gim, "$1").replace(/(<[^<]+?)\sstyle="[\s;]*"/gim, "$1").replace(/(<[^<]+?)\sdir="[\s]*"/gim, "$1")), t6;
                  };
                  if (e4.editHTMLDocumentMode) {
                    const e5 = t5.element.tagName;
                    if ("TEXTAREA" !== e5 && "INPUT" !== e5) throw (0, r.error)("If enable `editHTMLDocumentMode` - source element should be INPUT or TEXTAREA");
                    t5.e.on("beforeGetNativeEditorValue", () => s(t5.o.iframeDoctype + i5.documentElement.outerHTML)).on("beforeSetNativeEditorValue", ({ value: e6 }) => !t5.isLocked && (/<(html|body)/i.test(e6) ? s(i5.documentElement.outerHTML) !== s(e6) && (i5.open(), i5.write(t5.o.iframeDoctype + s(e6)), i5.close(), t5.editor = i5.body, t5.e.fire("safeHTML", t5.editor), n4(), t5.e.fire("prepareWYSIWYGEditor"), t5.e.stopPropagation("beforeSetNativeEditorValue")) : i5.body.innerHTML = e6, true), { top: true });
                  }
                  if (t5.editor = i5.body, t5.e.on("afterSetMode afterInit afterAddPlace", n4), "auto" === e4.height) {
                    i5.documentElement && (i5.documentElement.style.overflowY = "hidden");
                    const o4 = t5.async.throttle((...i6) => {
                      t5.async.requestAnimationFrame(() => {
                        if (t5.editor && t5.iframe && "auto" === e4.height) {
                          const e5 = t5.ew.getComputedStyle(t5.editor), i7 = parseInt(e5.marginTop || "0", 10) + parseInt(e5.marginBottom || "0", 10);
                          (0, r.css)(t5.iframe, "height", t5.editor.offsetHeight + i7);
                        }
                      });
                    }, t5.defaultTimeout / 2);
                    if (t5.e.on("change afterInit afterSetMode resize", o4).on([t5.iframe, t5.ew, i5.documentElement], "load", o4).on(i5, "readystatechange DOMContentLoaded", o4), "function" == typeof ResizeObserver) {
                      const e5 = new ResizeObserver(o4);
                      e5.observe(i5.body), t5.e.on("beforeDestruct", () => {
                        e5.disconnect();
                      });
                    }
                  }
                  return i5.documentElement && t5.e.on(i5.documentElement, "mousedown touchend", () => {
                    t5.s.isFocused() || (t5.s.focus(), t5.editor === i5.body && t5.s.setCursorIn(i5.body));
                  }).on(t5.ew, "mousedown touchstart keydown keyup touchend click mouseup mousemove scroll", (e5) => {
                    var i6;
                    null === (i6 = t5.events) || void 0 === i6 || i6.fire(t5.ow, e5);
                  }), false;
                });
              });
            });
          }, 67915: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.imageProcessor = { replaceDataURIToBlobIdInView: true };
          }, 92097: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(56298), a = i3(65147), l = i3(71005);
            i3(67915);
            const c = "__jodit_imageprocessor_binded", d = c + "blob-id";
            class u extends l.k {
              afterInit(t5) {
              }
              beforeDestruct(t5) {
                const e4 = t5.buffer.get(d);
                if (e4) {
                  const i4 = Object.keys(e4);
                  for (const t6 of i4) URL.revokeObjectURL(t6);
                  t5.buffer.delete(d);
                }
              }
              onAfterGetValueFromEditor(t5, e4) {
                if (e4 !== n2.SOURCE_CONSUMER) return this.onBeforeSetElementValue(t5);
              }
              onBeforeSetElementValue(t5) {
                const { jodit: e4 } = this;
                if (!e4.o.imageProcessor.replaceDataURIToBlobIdInView) return;
                const i4 = e4.buffer.get(d);
                if (i4) {
                  const e5 = Object.keys(i4);
                  for (const o4 of e5) for (; t5.value.includes(o4); ) t5.value = t5.value.replace(o4, i4[o4]);
                }
              }
              async afterChange(t5) {
                const { jodit: e4 } = this;
                e4.editor && (0, a.$$)("img", e4.editor).forEach((t6) => {
                  (0, a.dataBind)(t6, c) || ((0, a.dataBind)(t6, c, true), t6.complete || e4.e.on(t6, "load", function i4() {
                    var o4;
                    !e4.isInDestruct && (null === (o4 = e4.e) || void 0 === o4 || o4.fire("resize")), e4.e.off(t6, "load", i4);
                  }), t6.src && /^data:/.test(t6.src) && function(t7, e5) {
                    if (!t7.o.imageProcessor.replaceDataURIToBlobIdInView) return;
                    if ("undefined" == typeof ArrayBuffer || "undefined" == typeof URL) return;
                    const i4 = e5.src, o4 = function(t8) {
                      const e6 = atob(t8.split(",")[1]), i5 = t8.split(",")[0].split(":")[1].split(";")[0], o5 = new ArrayBuffer(e6.length), n4 = new Uint8Array(o5);
                      for (let t9 = 0; e6.length > t9; t9++) n4[t9] = e6.charCodeAt(t9);
                      return new Blob([o5], { type: i5 });
                    }(i4);
                    e5.src = URL.createObjectURL(o4), t7.e.fire("internalUpdate");
                    const { buffer: n3 } = t7, r2 = n3.get(d) || {};
                    r2[e5.src] = i4, t7.buffer.set(d, r2);
                  }(e4, t6), e4.e.on(t6, "mousedown touchstart", () => {
                    e4.s.select(t6);
                  }));
                });
              }
            }
            (0, o3.Cg)([(0, r.watch)(":afterGetValueFromEditor")], u.prototype, "onAfterGetValueFromEditor", null), (0, o3.Cg)([(0, r.watch)(":beforeSetElementValue")], u.prototype, "onBeforeSetElementValue", null), (0, o3.Cg)([(0, r.watch)([":change", ":afterInit", ":changePlace"]), (0, r.debounce)()], u.prototype, "afterChange", null), s.fg.add("imageProcessor", u);
          }, 24654: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.image = { dialogWidth: 600, openOnDblClick: true, editSrc: true, useImageEditor: true, editTitle: true, editAlt: true, editLink: true, editSize: true, editBorderRadius: true, editMargins: true, editClass: true, availableClasses: [], editStyle: true, editId: true, editAlign: true, showPreview: true, selectImageAfterClose: true };
          }, 19085: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(55186), s = i3(56298), a = i3(65147), l = i3(29866), c = i3(35265), d = (i3(24654), i3(31970)), u = i3(80778), h = i3(33733), p = i3(5549), f = i3(30393);
            class g extends l.k {
              constructor() {
                super(...arguments), this.state = { image: new Image(), sourceImage: new Image(), get ratio() {
                  const { naturalWidth: t5, naturalHeight: e4 } = this.image;
                  return t5 / e4 || 1;
                }, sizeIsLocked: true, marginIsLocked: true, values: { style: "", imageSrc: "", borderRadius: 0, imageTitle: "", imageAlt: "", imageLink: "", imageLinkOpenInNewTab: false, imageWidth: 0, imageHeight: 0, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, classes: "", id: "", align: "" } }, this.activeTabState = { activeTab: "Image" };
              }
              get form() {
                return new d.l(this.j, this.state, this.activeTabState, { openImageEditor: () => (0, u.v)(this.j, this.state), openImagePopup: (t5) => (0, h.q)(this.j, this.dialog, this.state, t5) });
              }
              get dialog() {
                const { j: t5 } = this, e4 = t5.dlg({ minWidth: Math.min(400, screen.width), minHeight: 590, buttons: ["fullsize", "dialog.close"] }), i4 = this.__buttons;
                return i4.check.onAction(() => {
                  (0, f.j)(t5, this.state, this.state.sourceImage), t5.synchronizeValues(), e4.close();
                }), i4.remove.onAction(() => {
                  t5.s.removeNode(this.state.sourceImage), e4.close();
                }), i4.cancel.onAction(() => {
                  e4.close();
                }), e4.setHeader(t5.i18n("Image properties")), e4.setContent(this.form), e4.setFooter([[i4.cancel, i4.remove], i4.check]), t5.e.on(e4, "afterClose", () => {
                  this.state.image.parentNode && t5.o.image.selectImageAfterClose && t5.s.select(this.state.sourceImage);
                }), e4.setSize(t5.o.image.dialogWidth), (0, a.markOwner)(t5, e4.container), e4;
              }
              get __buttons() {
                const { j: t5 } = this;
                return { check: (0, c.$n)(t5, "ok", "Apply", "primary"), remove: (0, c.$n)(t5, "bin", "Delete"), cancel: (0, c.$n)(t5, "cancel", "Cancel") };
              }
              open() {
                return this.activeTabState.activeTab = "Image", this.__lock(), this.dialog.open().setModal(true).setPosition(), this.async.promise((t5, e4) => (0, p.U)(this.j, this.state).then(t5, e4)).catch((t5) => {
                  (0, a.isAbortError)(t5) || this.dialog.message.error(t5.message);
                }).finally(() => this.__unlock()), false;
              }
              __lock() {
                this.dialog.lock(), this.form.setMod("lock", true), Object.values(this.__buttons).forEach((t5) => t5.state.disabled = true);
              }
              __unlock() {
                this.dialog.unlock(), this.form.setMod("lock", false), Object.values(this.__buttons).forEach((t5) => t5.state.disabled = false);
              }
              afterInit(t5) {
                const e4 = this;
                t5.e.on("afterConstructor changePlace", () => {
                  t5.e.off(t5.editor, ".imageproperties").on(t5.editor, "dblclick.imageproperties", (i4) => {
                    const o4 = i4.target;
                    if (r.J.isTag(o4, "img")) if (t5.o.image.openOnDblClick) {
                      if (false === this.j.e.fire("openOnDblClick", o4)) return;
                      e4.state.sourceImage = o4, e4.state.image = o4.cloneNode(true), t5.o.readonly || (i4.stopImmediatePropagation(), i4.preventDefault(), e4.open());
                    } else i4.stopImmediatePropagation(), t5.s.select(o4);
                  });
                }).on("openImageProperties.imageproperties", (t6) => {
                  e4.state.sourceImage = t6, this.state.image = t6.cloneNode(true), this.open();
                });
              }
              async onStateValuesImageSrcChange() {
                const { image: t5, values: e4 } = this.state;
                if (t5.src) try {
                  if (this.__lock(), await t5.decode(), this.state.sizeIsLocked && (0, a.isNumeric)(e4.imageWidth)) {
                    const t6 = parseFloat(e4.imageWidth.toString());
                    e4.imageHeight = Math.round(t6 / this.state.ratio);
                  }
                  this.j.e.fire("updateImageProperties.imageproperties", t5);
                } catch (t6) {
                  this.j.alert(t6.message);
                } finally {
                  this.__unlock();
                }
              }
              beforeDestruct(t5) {
                var e4, i4, o4;
                Object.values(null !== (e4 = (0, n2.cached)(this, "__buttons")) && void 0 !== e4 ? e4 : {}).forEach((t6) => t6.destruct()), null === (i4 = (0, n2.cached)(this, "dialog")) || void 0 === i4 || i4.destruct(), null === (o4 = (0, n2.cached)(this, "form")) || void 0 === o4 || o4.destruct(), t5.e.off(t5.editor, ".imageproperties").off(".imageproperties");
              }
            }
            (0, o3.Cg)([n2.cache], g.prototype, "form", null), (0, o3.Cg)([n2.cache], g.prototype, "dialog", null), (0, o3.Cg)([n2.cache], g.prototype, "__buttons", null), (0, o3.Cg)([(0, n2.watch)("state.image")], g.prototype, "onStateValuesImageSrcChange", null), s.fg.add("imageProperties", g);
          }, 74260: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { g: function() {
              return n2;
            } });
            var o3 = i3(38322);
            function n2(t5, e4) {
              e4.align = t5.style.cssFloat && -1 !== ["left", "right"].indexOf(t5.style.cssFloat.toLowerCase()) ? (0, o3.A)(t5, "float") : "block" === (0, o3.A)(t5, "display") && "auto" === t5.style.marginLeft && "auto" === t5.style.marginRight ? "center" : "";
            }
          }, 5549: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { U: function() {
              return l;
            } });
            var o3 = i3(26150), n2 = i3(74260), r = i3(33201), s = i3(85079), a = i3(17880);
            async function l(t5, e4) {
              const { sourceImage: i4, values: l2 } = e4;
              return (0, n2.g)(i4, l2), l2.borderRadius = parseInt(i4.style.borderRadius || "0", 10) || 0, l2.id = (0, o3.C)(i4, "id") || "", l2.imageTitle = (0, o3.C)(i4, "title") || "", l2.imageAlt = (0, o3.C)(i4, "alt") || "", l2.style = (0, o3.C)(i4, "style") || "", l2.classes = ((0, o3.C)(i4, "class") || "").replace(/jodit_focused_image[\s]*/, ""), (0, s.E)(i4, l2, e4), (0, r.X)(e4, t5, l2), l2.imageSrc = (0, o3.C)(i4, "src") || "", (0, a.P)(i4, l2, e4);
            }
          }, 33201: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { X: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(26150);
            function r(t5, e4, i4) {
              const r2 = o3.J.closest(t5.sourceImage, "a", e4.editor);
              r2 ? (i4.imageLink = (0, n2.C)(r2, "href") || "", i4.imageLinkOpenInNewTab = "_blank" === (0, n2.C)(r2, "target")) : (i4.imageLink = "", i4.imageLinkOpenInNewTab = false);
            }
          }, 85079: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { E: function() {
              return n2;
            } });
            var o3 = i3(449);
            function n2(t5, e4, i4) {
              let n3 = true, r = false;
              ["marginTop", "marginRight", "marginBottom", "marginLeft"].forEach((i5) => {
                let s = t5.style.getPropertyValue((0, o3.k)(i5));
                if (!s) return r = true, void (e4[i5] = 0);
                /^[0-9]+(px)?$/.test(s) && (s = parseInt(s, 10)), e4[i5] = s, (r && e4[i5] || n3 && "marginTop" !== i5 && e4[i5] !== e4.marginTop) && (n3 = false);
              }), i4.marginIsLocked = n3;
            }
          }, 17880: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { P: function() {
              return a;
            } });
            var o3 = i3(12461), n2 = i3(26150), r = i3(38322), s = i3(9645);
            async function a(t5, e4, i4) {
              await t5.decode();
              const a2 = (0, r.A)(t5, "width", true) || (0, n2.C)(t5, "width") || false, l = (0, r.A)(t5, "height", true) || (0, n2.C)(t5, "height") || false;
              e4.imageWidth = false !== a2 ? (0, s.G)(a2) : t5.offsetWidth || t5.naturalWidth, e4.imageHeight = (0, o3.k)(e4.imageWidth) ? false !== l ? (0, s.G)(l) : t5.offsetHeight || t5.naturalHeight : l || "";
              const { imageWidth: c, imageHeight: d } = e4, u = parseFloat(c.toString());
              if (!(0, o3.k)(c) || !(0, o3.k)(d)) return void (i4.sizeIsLocked = false);
              if (false === l) return e4.imageHeight = Math.round(u / i4.ratio), void (i4.sizeIsLocked = true);
              const h = parseFloat(d.toString());
              i4.sizeIsLocked = 1 > Math.abs(u - h * i4.ratio);
            }
          }, 31970: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { l: function() {
              return h;
            } });
            var o3 = i3(31635), n2 = i3(22664), r = i3(24767), s = i3(65147), a = i3(6455), l = i3(931), c = i3(16116), d = i3(33403), u = i3(46681);
            let h = class extends a.U {
              className() {
                return "UIImagePropertiesForm";
              }
              appendChildToContainer() {
              }
              getElm(t5) {
                const e4 = super.getElm(t5);
                if (e4) return e4;
                for (const e5 of this.elements) {
                  const i4 = e5.getElm(t5);
                  if (i4) return i4;
                }
                return null;
              }
              constructor(t5, e4, i4, o4) {
                super(t5), this.state = e4, this.handlers = o4, this.__mainTab = new d.k(this.jodit, this.state, this.handlers), this.__positionTab = new u._(this.jodit, this.state, this.handlers), this.getElm("tabsBox").appendChild((0, c.Zg)(t5, [{ name: "Image", content: this.__mainTab }, { name: "Advanced", content: this.__positionTab }], i4)), this.setMod("lock-size", this.state.sizeIsLocked), this.append(this.__mainTab).append(this.__positionTab);
              }
              render() {
                return `<form>
		<div class="jodit-grid jodit-grid_xs-column">
			<div class="jodit_col-lg-2-5 jodit_col-xs-5-5">
				<div class="&__view-box">
					<div class="&__imageView">
						<img class="&__imageViewSrc" src="" alt=""/>
					</div>
					<div class="jodit-form__group &__imageSizes">
						<input type="text" class="jodit-input &__imageWidth"/>
						<a class="&__lockSize">${l.I.get("lock")}</a>
						<input type="text" class="&__imageHeight jodit-input"/>
					</div>
				</div>
			</div>
			<div class="jodit_col-lg-3-5 jodit_col-xs-5-5 &__tabsBox"></div>
		</div>
	</form>`;
              }
              onChangeSizeIsLocked() {
                const t5 = this.getElm("lockSize"), e4 = this.getElm("imageWidth");
                t5.innerHTML = l.I.get(this.state.sizeIsLocked ? "lock" : "unlock"), this.setMod("lock-size", this.state.sizeIsLocked), this.j.e.fire(e4, "change");
              }
              onLockSizeClick() {
                this.state.sizeIsLocked = !this.state.sizeIsLocked;
              }
              onStateValuesSizeChange() {
                const t5 = this.getElm("imageWidth"), e4 = this.getElm("imageHeight");
                t5 !== this.j.od.activeElement && (t5.value = this.state.values.imageWidth.toString()), e4 !== this.j.od.activeElement && (e4.value = this.state.values.imageHeight.toString());
              }
              onImageWidthChange(t5) {
                const e4 = this.getElm("imageWidth"), i4 = this.getElm("imageHeight");
                if (!this.state.sizeIsLocked || !(0, s.isNumeric)(e4.value) || !(0, s.isNumeric)(i4.value)) return this.state.values.imageWidth = e4.value, void (this.state.values.imageHeight = i4.value);
                const o4 = parseFloat(e4.value), n3 = parseFloat(i4.value);
                t5.target === e4 ? (this.state.values.imageWidth = o4, this.state.values.imageHeight = Math.round(o4 / this.state.ratio)) : (this.state.values.imageWidth = Math.round(n3 * this.state.ratio), this.state.values.imageHeight = n3);
              }
              onStateValuesImageSrcChange() {
                const { imageSrc: t5 } = this.state.values;
                if (!t5) return;
                const e4 = this.getElm("imageViewSrc");
                (0, s.attr)(e4, "src", t5);
                const i4 = new Image();
                i4.src = t5, this.state.image = i4;
              }
              hideFieldByOptions() {
                const t5 = this.j.o.image;
                [["editSize", "imageSizes"], ["showPreview", "imageView"]].forEach(([e4, i4]) => {
                  const o4 = this.getElm(i4);
                  (0, s.css)(o4, "display", t5[e4] ? null : "none");
                });
              }
            };
            (0, o3.Cg)([(0, n2.hook)("ready"), (0, n2.watch)("state.sizeIsLocked")], h.prototype, "onChangeSizeIsLocked", null), (0, o3.Cg)([(0, n2.watch)("lockSize:click")], h.prototype, "onLockSizeClick", null), (0, o3.Cg)([(0, n2.hook)("ready"), (0, n2.watch)(["state.values.imageWidth", "state.values.imageHeight"])], h.prototype, "onStateValuesSizeChange", null), (0, o3.Cg)([(0, n2.watch)(["imageWidth:change", "imageHeight:change", "imageWidth:keydown", "imageHeight:keydown", "imageWidth:mousedown", "imageHeight:mousedown", "imageWidth:paste", "imageHeight:paste"]), (0, n2.debounce)()], h.prototype, "onImageWidthChange", null), (0, o3.Cg)([(0, n2.hook)("ready"), (0, n2.watch)("state.values.imageSrc")], h.prototype, "onStateValuesImageSrcChange", null), (0, o3.Cg)([(0, n2.hook)("ready")], h.prototype, "hideFieldByOptions", null), h = (0, o3.Cg)([r.s], h);
          }, 33403: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { k: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(71151), s = i3(66927), a = i3(65147), l = i3(6455);
            let c = class extends l.U {
              className() {
                return "UIImageMainTab";
              }
              appendChildToContainer() {
              }
              constructor(t5, e4, i4) {
                super(t5), this.state = e4, this.handlers = i4;
              }
              render() {
                return '<div class="jodit-form__group &__editSrc">\n			<label>~Src~</label>\n			<div class="jodit-input_group">\n				<input class="jodit-input &__imageSrc" type="text"/>\n				<div class="jodit-input_group-buttons &__fixImage">\n						<a class="jodit-button &__changeImage">*image*</a>\n						<a class="jodit-button &__editImage">*crop*</a>\n				</div>\n			</div>\n		</div>\n		<div class="jodit-form__group &__editTitle">\n			<label>~Title~</label>\n			<input type="text" class="jodit-input &__imageTitle"/>\n		</div>\n		<div class="jodit-form__group &__editAlt">\n			<label>~Alternative~</label>\n			<input type="text" class="jodit-input &__imageAlt"/>\n		</div>\n		<div class="jodit-form__group &__editLink">\n			<label>~Link~</label>\n			<input type="text" class="jodit-input &__imageLink"/>\n		</div>\n		<div class="jodit-form__group &__editLinkTarget">\n			<label class="jodit_vertical_middle">\n				<input type="checkbox" class="jodit-checkbox &__imageLinkOpenInNewTab"/>\n				<span>~Open link in new tab~</span>\n			</label>\n		</div>';
              }
              async onStateImageSrcChange() {
                this.getElm("imageSrc").value = this.state.values.imageSrc;
              }
              onImageSrcChange() {
                this.state.values.imageSrc = this.getElm("imageSrc").value;
              }
              onEditImageClick(t5) {
                this.handlers.openImageEditor(), t5.stopPropagation();
              }
              onChangeImageClick(t5) {
                this.handlers.openImagePopup(this.getElm("changeImage")), t5.stopPropagation();
              }
              onStateTitleChange() {
                this.getElm("imageTitle").value = this.state.values.imageTitle;
              }
              onTitleChange() {
                this.state.values.imageTitle = this.getElm("imageTitle").value;
              }
              onStateAltChange() {
                this.getElm("imageAlt").value = this.state.values.imageAlt;
              }
              onAltChange() {
                this.state.values.imageAlt = this.getElm("imageAlt").value;
              }
              onStateImageLinkChange() {
                this.getElm("imageLink").value = this.state.values.imageLink;
              }
              onImageLinkChange() {
                this.state.values.imageLink = this.getElm("imageLink").value;
              }
              onStateImageLinkOpenInNewTabChange() {
                this.getElm("imageLinkOpenInNewTab").checked = this.state.values.imageLinkOpenInNewTab;
              }
              onImageLinkOpenInNewTabChange() {
                this.state.values.imageLinkOpenInNewTab = this.getElm("imageLinkOpenInNewTab").checked;
              }
              hideFieldByOptions() {
                const t5 = this.j.o, e4 = t5.image;
                [["editSrc", "editSrc"], ["editTitle", "editTitle"], ["editAlt", "editAlt"], ["editLink", "editLink"], ["editLink", "editLinkTarget"], ["useImageEditor", "editImage"]].forEach(([t6, i5]) => {
                  const o5 = this.getElm(i5);
                  (0, a.css)(o5, "display", e4[t6] ? null : "none");
                });
                const i4 = this.getElm("changeImage"), o4 = Boolean(t5.filebrowser.ajax.url || t5.uploader.url);
                (0, a.css)(i4, "display", o4 ? null : "none");
                const n3 = this.getElm("editImage"), r2 = Boolean(t5.filebrowser.ajax.url) && e4.useImageEditor;
                (0, a.css)(n3, "display", r2 ? null : "none");
                const s2 = this.getElm("fixImage");
                (0, a.css)(s2, "display", o4 || r2 ? null : "none");
              }
            };
            (0, o3.Cg)([(0, s.w)("state.values.imageSrc")], c.prototype, "onStateImageSrcChange", null), (0, o3.Cg)([(0, s.w)("imageSrc:change")], c.prototype, "onImageSrcChange", null), (0, o3.Cg)([(0, s.w)("editImage:click")], c.prototype, "onEditImageClick", null), (0, o3.Cg)([(0, s.w)("changeImage:click")], c.prototype, "onChangeImageClick", null), (0, o3.Cg)([(0, s.w)("state.values.imageTitle")], c.prototype, "onStateTitleChange", null), (0, o3.Cg)([(0, s.w)("imageTitle:change")], c.prototype, "onTitleChange", null), (0, o3.Cg)([(0, s.w)("state.values.imageAlt")], c.prototype, "onStateAltChange", null), (0, o3.Cg)([(0, s.w)("imageAlt:change")], c.prototype, "onAltChange", null), (0, o3.Cg)([(0, s.w)("state.values.imageLink")], c.prototype, "onStateImageLinkChange", null), (0, o3.Cg)([(0, s.w)("imageLink:change")], c.prototype, "onImageLinkChange", null), (0, o3.Cg)([(0, s.w)("state.values.imageLinkOpenInNewTab")], c.prototype, "onStateImageLinkOpenInNewTabChange", null), (0, o3.Cg)([(0, s.w)("imageLinkOpenInNewTab:change")], c.prototype, "onImageLinkOpenInNewTabChange", null), (0, o3.Cg)([(0, r.A)("ready")], c.prototype, "hideFieldByOptions", null), c = (0, o3.Cg)([n2.s], c);
          }, 46681: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { _: function() {
              return p;
            } });
            var o3 = i3(31635), n2 = i3(24767), r = i3(71151), s = i3(66927), a = i3(65147), l = i3(98253), c = i3(26150), d = i3(29780), u = i3(931), h = i3(9645);
            let p = class extends d.D {
              className() {
                return "UIImagePositionTab";
              }
              constructor(t5, e4, i4) {
                super(t5, { availableClasses: t5.o.image.availableClasses }), this.state = e4, this.handlers = i4;
              }
              render({ availableClasses: t5 }) {
                return `<div class="jodit-form__group &__editMargins">
			<label>~Margins~</label>
			<div class="jodit-grid jodit_vertical_middle">
				<input class="jodit_col-lg-1-5 jodit-input &__marginTop" type="text" placeholder="~top~"/>
				<a style="text-align: center;" class="jodit-properties__lock jodit_col-lg-1-5 &__lockMargin">*lock*</a>
				<input disabled="disabled" class="jodit_col-lg-1-5 jodit-input &__marginRight" type="text" placeholder="~right~"/>
				<input disabled="disabled" class="jodit_col-lg-1-5 jodit-input &__marginBottom" type="text" placeholder="~bottom~"/>
				<input disabled="disabled" class="jodit_col-lg-1-5 jodit-input &__marginLeft" type="text" placeholder="~left~"/>
			</div>
		</div>
		<div class="jodit-form__group &__editAlign">
			<label>~Align~</label>
			<select class="jodit-select &__align">
				<option value="">~--Not Set--~</option>
				<option value="left">~Left~</option>
				<option value="center">~Center~</option>
				<option value="right">~Right~</option>
			</select>
		</div>
		<div class="jodit-form__group &__editStyle">
			<label>~Styles~</label>
			<input type="text" class="jodit-input &__style"/>
		</div>
		<div class="jodit-form__group &__editClass">
			<label>~Classes~</label>
			${(() => {
                  const e4 = [];
                  return t5 && t5.length > 0 ? (e4.push('<select class="jodit-input jodit-select &__classes">'), t5.forEach((t6) => {
                    (0, l.K)(t6) ? e4.push(`<option value="${t6}">${t6}</option>`) : e4.push(`<option value="${t6[0]}">${t6[1]}</option>`);
                  }), e4.push("</select>")) : e4.push('<input type="text" class="jodit-input &__classes"/>'), e4.join("");
                })()}
		</div>
		<div class="jodit-form__group &__editId">
			<label>Id</label>
			<input type="text" class="jodit-input &__id"/>
		</div>
		<div
			class="jodit-form__group &__editBorderRadius"
		>
			<label>~Border radius~</label>
			<input type="number" class="jodit-input &__borderRadius"/>
		</div>`;
              }
              onStateAlignChange() {
                this.getElm("align").value = this.state.values.align;
              }
              onChangeAlign() {
                const t5 = this.getElm("align");
                this.state.values.align = t5.value;
              }
              onStateValuesBorderRadiusChange() {
                this.getElm("borderRadius").value = this.state.values.borderRadius.toString();
              }
              onChangeBorderRadius() {
                const t5 = this.getElm("borderRadius");
                this.state.values.borderRadius = parseFloat(t5.value);
              }
              onStateValuesIdChange() {
                this.getElm("id").value = this.state.values.id;
              }
              onChangeId() {
                const t5 = this.getElm("id");
                this.state.values.id = t5.value;
              }
              onStateValuesStyleChange() {
                this.getElm("style").value = this.state.values.style;
              }
              onChangeStyle() {
                const t5 = this.getElm("style");
                this.state.values.style = t5.value;
              }
              onStateValuesClassesChange() {
                this.getElm("classes").value = this.state.values.classes;
              }
              onChangClasses() {
                const t5 = this.getElm("classes");
                this.state.values.classes = t5.value;
              }
              onLockMarginClick(t5) {
                this.state.marginIsLocked = !this.state.marginIsLocked, t5.preventDefault();
              }
              onChangeMarginIsLocked() {
                const t5 = this.getElm("marginBottom"), e4 = this.getElm("marginRight"), i4 = this.getElm("marginLeft"), o4 = this.getElm("lockMargin");
                if ([e4, t5, i4].forEach((t6) => {
                  (0, c.C)(t6, "disabled", this.state.marginIsLocked || null);
                }), o4.innerHTML = u.I.get(this.state.marginIsLocked ? "lock" : "unlock"), this.state.marginIsLocked) {
                  const t6 = this.state.values.marginTop;
                  this.state.values.marginRight = t6, this.state.values.marginBottom = t6, this.state.values.marginLeft = t6;
                }
              }
              onStateValuesMarginChange() {
                const t5 = this.getElm("marginTop"), e4 = this.getElm("marginRight"), i4 = this.getElm("marginBottom"), o4 = this.getElm("marginLeft");
                t5.value = this.state.values.marginTop.toString(), e4.value = this.state.values.marginRight.toString(), i4.value = this.state.values.marginBottom.toString(), o4.value = this.state.values.marginLeft.toString();
              }
              onChangeMargin() {
                const t5 = this.getElm("marginTop"), e4 = this.getElm("marginRight"), i4 = this.getElm("marginBottom"), o4 = this.getElm("marginLeft");
                this.state.values.marginTop = (0, h.G)(t5.value), this.state.marginIsLocked ? (this.state.values.marginRight = this.state.values.marginTop, this.state.values.marginBottom = this.state.values.marginTop, this.state.values.marginLeft = this.state.values.marginTop) : (this.state.values.marginRight = (0, h.G)(e4.value), this.state.values.marginBottom = (0, h.G)(i4.value), this.state.values.marginLeft = (0, h.G)(o4.value));
              }
              hideFieldByOptions() {
                const t5 = this.j.o.image;
                [["editMargins", "editMargins"], ["editAlign", "editAlign"], ["editStyle", "editStyle"], ["editClass", "editClass"], ["editId", "editId"], ["editBorderRadius", "editBorderRadius"]].forEach(([e4, i4]) => {
                  const o4 = this.getElm(i4);
                  (0, a.css)(o4, "display", t5[e4] ? null : "none");
                });
              }
            };
            (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.values.align")], p.prototype, "onStateAlignChange", null), (0, o3.Cg)([(0, s.w)("align:change")], p.prototype, "onChangeAlign", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.values.borderRadius")], p.prototype, "onStateValuesBorderRadiusChange", null), (0, o3.Cg)([(0, s.w)("borderRadius:change")], p.prototype, "onChangeBorderRadius", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.values.id")], p.prototype, "onStateValuesIdChange", null), (0, o3.Cg)([(0, s.w)("id:change")], p.prototype, "onChangeId", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.values.style")], p.prototype, "onStateValuesStyleChange", null), (0, o3.Cg)([(0, s.w)("style:change")], p.prototype, "onChangeStyle", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.values.classes")], p.prototype, "onStateValuesClassesChange", null), (0, o3.Cg)([(0, s.w)("classes:change")], p.prototype, "onChangClasses", null), (0, o3.Cg)([(0, s.w)("lockMargin:click")], p.prototype, "onLockMarginClick", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)("state.marginIsLocked")], p.prototype, "onChangeMarginIsLocked", null), (0, o3.Cg)([(0, r.A)("ready"), (0, s.w)(["state.values.marginTop", "state.values.marginRight", "state.values.marginBottom", "state.values.marginLeft"])], p.prototype, "onStateValuesMarginChange", null), (0, o3.Cg)([(0, s.w)(["marginTop:change", "marginRight:change", "marginBottom:change", "marginLeft:change"])], p.prototype, "onChangeMargin", null), (0, o3.Cg)([(0, r.A)("ready")], p.prototype, "hideFieldByOptions", null), p = (0, o3.Cg)([n2.s], p);
          }, 80778: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { v: function() {
              return s;
            } });
            var o3 = i3(98253), n2 = i3(26150), r = i3(53804);
            function s(t5, e4) {
              const i4 = (0, n2.C)(e4.image, "src") || "", s2 = t5.c.element("a"), a = () => {
                s2.host === location.host || t5.confirm("You can only edit your own images. Download this image on the host?", (i5) => {
                  i5 && t5.uploader && t5.uploader.uploadRemoteImage(s2.href.toString(), (i6) => {
                    t5.alert("The image has been successfully uploaded to the host!", () => {
                      (0, o3.K)(i6.newfilename) && (e4.values.imageSrc = i6.baseurl + i6.newfilename);
                    });
                  }, (e5) => {
                    t5.alert("There was an error loading %s", e5.message);
                  });
                });
              };
              s2.href = i4, t5.filebrowser.dataProvider.getPathByUrl(s2.href.toString()).then((o4) => {
                r.B.call(t5.filebrowser, s2.href, o4.name, o4.path, o4.source, () => {
                  const t6 = (/* @__PURE__ */ new Date()).getTime();
                  e4.values.imageSrc = i4 + (-1 !== i4.indexOf("?") ? "" : "?") + "&_tmp=" + t6.toString();
                }, (e5) => {
                  t5.alert(e5.message);
                });
              }).catch((e5) => {
                t5.alert(e5.message, a);
              });
            }
          }, 33733: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { q: function() {
              return a;
            } });
            var o3 = i3(37923), n2 = i3(27594), r = i3(80071), s = i3(10067);
            function a(t5, e4, i4, a2) {
              const l = new r.z(e4), c = () => {
                l.close(), l.destruct();
              };
              l.setContent((0, s.k)(t5, { upload: (t6) => {
                t6.files && t6.files.length && (i4.values.imageSrc = t6.baseurl + t6.files[0]), c();
              }, filebrowser: async (t6) => {
                t6 && (0, o3.c)(t6.files) && t6.files.length && (i4.values.imageSrc = t6.files[0], c());
              } }, i4.image, c)).open(() => (0, n2.G)(a2));
            }
          }, 9645: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { G: function() {
              return r;
            }, n: function() {
              return s;
            } });
            var o3 = i3(2461), n2 = i3(59101);
            const r = (t5) => /^[-+]?[0-9.]+(px)?$/.test(t5.toString()) ? parseFloat(t5.toString()) : t5, s = (t5) => (0, o3.E)(t5) ? t5 ? t5 + "px" : t5.toString() : (t5 = (0, n2.Bq)(t5), /^[0-9]+$/.test(t5) ? t5 + "px" : t5);
          }, 30393: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { j: function() {
              return l;
            } });
            var o3 = i3(55186), n2 = i3(97369), r = i3(88269), s = i3(78139), a = i3(58972);
            function l(t5, e4, i4) {
              const { style: l2, imageSrc: c, borderRadius: d, imageTitle: u, imageAlt: h, imageLink: p, imageWidth: f, imageHeight: g, marginTop: m, marginRight: b, marginBottom: _, marginLeft: v, imageLinkOpenInNewTab: x, align: w, classes: y, id: j } = e4.values, k = t5.o;
              k.image.editStyle && (0, n2.attr)(i4, "style", l2 || null), c ? ((0, n2.attr)(i4, "src", c), i4.style.borderRadius = d ? d + "px" : "", (0, n2.attr)(i4, "title", u || null), (0, n2.attr)(i4, "alt", h || null), (0, r.j)(t5, i4, p, x), (0, a.q)(i4, f, g, e4.sizeIsLocked), t5.o.image.editMargins && (0, s.N)(t5, m, b, _, v, i4, e4.marginIsLocked), k.image.editClass && (0, n2.attr)(i4, "class", y || null), k.image.editId && (0, n2.attr)(i4, "id", j || null), k.image.editAlign && (0, n2.hAlignElement)(i4, w)) : o3.J.safeRemove(i4);
            }
          }, 88269: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { j: function() {
              return r;
            } });
            var o3 = i3(55186), n2 = i3(26150);
            function r(t5, e4, i4, r2) {
              let s = o3.J.closest(e4, "a", t5.editor);
              i4 ? (s || (s = o3.J.wrap(e4, "a", t5.createInside)), (0, n2.C)(s, "href", i4), (0, n2.C)(s, "target", r2 ? "_blank" : null)) : s && s.parentNode && s.parentNode.replaceChild(e4, s);
            }
          }, 78139: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return r;
            } });
            var o3 = i3(38322), n2 = i3(9645);
            function r(t5, e4, i4, r2, s, a, l) {
              const c = [e4, i4, r2, s], d = (t6, e5) => {
                const i5 = (0, o3.A)(a, t6), r3 = (0, n2.n)(e5);
                i5.toString() !== r3.toString() && (0, o3.A)(a, t6, r3);
              };
              if (l) d("margin", e4);
              else {
                const t6 = ["margin-top", "margin-right", "margin-bottom", "margin-left"];
                c.forEach((e5, i5) => {
                  d(t6[i5], e5);
                });
              }
            }
          }, 58972: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { q: function() {
              return a;
            } });
            var o3 = i3(12461), n2 = i3(26150), r = i3(38322), s = i3(9645);
            function a(t5, e4, i4, a2) {
              if (e4 !== t5.offsetWidth || i4 !== t5.offsetHeight) {
                const l = e4 ? (0, s.n)(e4) : null;
                let c = i4 ? (0, s.n)(i4) : null;
                (0, r.A)(t5, { width: l, height: l && a2 ? null : c }), (0, n2.C)(t5, "width", l && (0, o3.k)(e4) && (0, n2.C)(t5, "width") ? l : null), (0, n2.C)(t5, "width") && !a2 || (c = null), (0, n2.C)(t5, "height", c);
              }
            }
          }, 49777: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(56298), r = i3(65147), s = i3(931), a = i3(16116), l = i3(64831), c = i3.n(l), d = i3(36115);
            s.I.set("image", c()), d.T.prototype.controls.image = { popup: (t5, e4, i4) => {
              let n3 = null;
              return e4 && !o3.J.isText(e4) && o3.J.isHTMLElement(e4) && (o3.J.isTag(e4, "img") || (0, r.$$)("img", e4).length) && (n3 = o3.J.isTag(e4, "img") ? e4 : (0, r.$$)("img", e4)[0]), t5.s.save(), (0, a.kG)(t5, { filebrowser: (e5) => {
                t5.s.restore(), e5.files && e5.files.forEach((i5) => t5.s.insertImage(e5.baseurl + i5, null, t5.o.imageDefaultWidth)), i4();
              }, upload: true, url: async (e5, o4) => {
                t5.s.restore(), /^[a-z\d_-]+(\.[a-z\d_-]+)+/i.test(e5) && (e5 = "//" + e5);
                const r2 = n3 || t5.createInside.element("img");
                r2.setAttribute("src", e5), r2.setAttribute("alt", o4), n3 || await t5.s.insertImage(r2, null, t5.o.imageDefaultWidth), i4();
              } }, n3, i4);
            }, tags: ["img"], tooltip: "Insert Image" }, n2.fg.add("image", function(t5) {
              t5.registerButton({ name: "image", group: "media" });
            });
          }, 97767: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(931), r = i3(67176), s = i3.n(r), a = i3(14017), l = i3.n(a), c = i3(3392), d = i3(36115);
            n2.I.set("indent", s()).set("outdent", l()), d.T.prototype.controls.indent = { tooltip: "Increase Indent" }, d.T.prototype.controls.outdent = { isDisabled: (t5) => {
              const e4 = t5.s.current();
              if (e4) {
                const i4 = o3.J.closest(e4, o3.J.isBlock, t5.editor);
                if (i4) {
                  const e5 = (0, c.i)(t5.o.direction, i4);
                  return !i4.style[e5] || 0 >= parseInt(i4.style[e5], 10);
                }
              }
              return true;
            }, tooltip: "Decrease Indent" }, d.T.prototype.indentMargin = 10;
          }, 3392: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { i: function() {
              return n2;
            } });
            var o3 = i3(55186);
            const n2 = (t5, e4) => `${o3.J.isCell(e4) ? "padding" : "margin"}${"rtl" === t5 ? "Right" : "Left"}`;
          }, 46079: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(71842), r = i3(56298), s = i3(65147), a = (i3(97767), i3(3392));
            r.fg.add("indent", function(t5) {
              t5.registerButton({ name: "indent", group: "indent" }).registerButton({ name: "outdent", group: "indent" });
              const e4 = (e5) => {
                const i4 = [];
                return t5.s.eachSelection((r2) => {
                  t5.s.save();
                  let l = !!r2 && n2.J.up(r2, n2.J.isBlock, t5.editor);
                  const { enter: c } = t5.o;
                  if (!l && r2 && (l = n2.J.wrapInline(r2, c !== o3.BR ? c : o3.PARAGRAPH, t5)), !l) return t5.s.restore(), false;
                  const d = i4.includes(l);
                  if (l && !d) {
                    const o4 = (0, a.i)(t5.o.direction, l);
                    i4.push(l);
                    let n3 = l.style[o4] ? parseInt(l.style[o4], 10) : 0;
                    n3 += t5.o.indentMargin * ("outdent" === e5 ? -1 : 1), l.style[o4] = n3 > 0 ? n3 + "px" : "", (0, s.attr)(l, "style") || (0, s.attr)(l, "style", null);
                  }
                  t5.s.restore();
                }), t5.synchronizeValues(), false;
              };
              t5.registerCommand("indent", { exec: e4, hotkeys: ["ctrl+]", "cmd+]"] }), t5.registerCommand("outdent", { exec: e4, hotkeys: ["ctrl+[", "cmd+["] });
            });
          }, 88222: function(t4, e3, i3) {
            "use strict";
            i3(14221), i3(55989), i3(13917), i3(5929), i3(49289), i3(98341), i3(38101), i3(24593), i3(36293), i3(38373), i3(64565), i3(27509), i3(13405), i3(67335), i3(92553), i3(73077), i3(88429), i3(9443), i3(30405), i3(89651), i3(26495), i3(49777), i3(92097), i3(19085), i3(46079), i3(3459), i3(99573), i3(92225), i3(9117), i3(83105), i3(47791), i3(26421), i3(76967), i3(1239), i3(13861), i3(36969), i3(56701), i3(225), i3(81089), i3(44921), i3(78757), i3(60189), i3(39147), i3(76693), i3(6857), i3(17343), i3(35523), i3(46939), i3(69077), i3(93669), i3(97179), i3(65199), i3(1677), i3(35541), i3(64241), i3(59965), i3(76385), i3(2533), i3(38309), i3(14367), i3(61589), i3(36133), i3(37873);
          }, 15776: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(97836), r = i3(82558), s = i3(6295), a = i3(26396), l = i3(58540), c = i3(36115), d = i3(38681), u = i3.n(d), h = i3(64637), p = i3.n(h), f = i3(94190), g = i3.n(f), m = i3(51957), b = i3.n(m), _ = i3(71940), v = i3.n(_), x = i3(43218), w = i3.n(x), y = i3(48007), j = i3.n(y);
            c.T.prototype.toolbarInline = true, c.T.prototype.toolbarInlineForSelection = false, c.T.prototype.toolbarInlineDisableFor = [], c.T.prototype.toolbarInlineDisabledButtons = ["source"], o3.I.set("addcolumn", u()).set("addrow", p()).set("merge", g()).set("th", w()).set("splitg", b()).set("splitv", v()).set("th-list", j()), c.T.prototype.popup = { a: n2.A, img: a.A, cells: r.A, toolbar: l.A, jodit: s.A, iframe: s.A, "jodit-media": s.A, selection: ["bold", "underline", "italic", "ul", "ol", "\n", "outdent", "indent", "fontsize", "brush", "cut", "\n", "paragraph", "link", "align", "dots"] };
          }, 97836: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(26150);
            e3.A = [{ name: "eye", tooltip: "Open link", exec: (t5, e4) => {
              const i4 = (0, o3.C)(e4, "href");
              e4 && i4 && t5.ow.open(i4);
            } }, { name: "link", tooltip: "Edit link", icon: "pencil" }, "unlink", "brush", "file"];
          }, 82558: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(9823), n2 = i3(38322);
            const r = (t5) => t5.args && (0, o3.Kg)(t5.args[0]) ? t5.args[0].toLowerCase() : "";
            e3.A = ["brushCell", { name: "valign", list: ["Top", "Middle", "Bottom", "Normal"], childTemplate: (t5, e4, i4) => i4, exec: (t5, e4, { control: i4 }) => {
              const o4 = r(i4);
              t5.getInstance("Table", t5.o).getAllSelectedCells().forEach((t6) => {
                (0, n2.A)(t6, "vertical-align", "normal" === o4 ? "" : o4);
              });
            }, tooltip: "Vertical align" }, { name: "splitv", list: { tablesplitv: "Split vertical", tablesplitg: "Split horizontal" }, tooltip: "Split" }, { name: "align", icon: "left" }, "\n", { name: "merge", command: "tablemerge", tooltip: "Merge" }, { name: "addcolumn", list: { tableaddcolumnbefore: "Insert column before", tableaddcolumnafter: "Insert column after" }, exec: (t5, e4, { control: i4 }) => {
              if (!(0, o3.y0)(t5)) return;
              const n3 = r(i4);
              t5.execCommand(n3, false, e4);
            }, tooltip: "Add column" }, { name: "addrow", list: { tableaddrowbefore: "Insert row above", tableaddrowafter: "Insert row below" }, exec: (t5, e4, { control: i4 }) => {
              if (!(0, o3.y0)(t5)) return;
              const n3 = r(i4);
              t5.execCommand(n3, false, e4);
            }, tooltip: "Add row" }, { name: "delete", icon: "bin", list: { tablebin: "Delete table", tablebinrow: "Delete row", tablebincolumn: "Delete column", tableempty: "Empty cell" }, exec: (t5, e4, { control: i4 }) => {
              if (!(0, o3.y0)(t5)) return;
              const n3 = r(i4);
              t5.execCommand(n3, false, e4), t5.e.fire("hidePopup");
            }, tooltip: "Delete" }];
          }, 6295: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(26396);
            e3.A = [{ name: "bin", tooltip: "Delete", exec: (t5, e4) => {
              e4 && t5.s.removeNode(e4);
            } }, o3.M];
          }, 26396: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { M: function() {
              return a;
            } });
            var o3 = i3(71842), n2 = i3(98253), r = i3(40080), s = i3(38322);
            const a = { name: "left", childTemplate: (t5, e4, i4) => i4, list: ["Left", "Right", "Center", "Normal"], exec: (t5, e4, { control: i4 }) => {
              if (!o3.J.isTag(e4, /* @__PURE__ */ new Set(["img", "jodit", "jodit-media"]))) return;
              const s2 = i4.args && (0, n2.K)(i4.args[0]) ? i4.args[0].toLowerCase() : "";
              if (!s2) return false;
              (0, r.Mr)(e4, s2), o3.J.isTag(e4, /* @__PURE__ */ new Set(["jodit", "jodit-media"])) && e4.firstElementChild && (0, r.Mr)(e4.firstElementChild, s2), t5.synchronizeValues(), t5.e.fire("recalcPositionPopup");
            }, tooltip: "Horizontal align" };
            e3.A = [{ name: "delete", icon: "bin", tooltip: "Delete", exec: (t5, e4) => {
              e4 && t5.s.removeNode(e4);
            } }, { name: "pencil", exec(t5, e4) {
              "img" === e4.tagName.toLowerCase() && t5.e.fire("openImageProperties", e4);
            }, tooltip: "Edit" }, { name: "valign", list: ["Top", "Middle", "Bottom", "Normal"], tooltip: "Vertical align", exec: (t5, e4, { control: i4 }) => {
              if (!o3.J.isTag(e4, "img")) return;
              const r2 = i4.args && (0, n2.K)(i4.args[0]) ? i4.args[0].toLowerCase() : "";
              if (!r2) return false;
              (0, s.A)(e4, "vertical-align", "normal" === r2 ? "" : r2), t5.e.fire("recalcPositionPopup");
            } }, a];
          }, 58540: function(t4, e3) {
            "use strict";
            e3.A = ["bold", "italic", "|", "ul", "ol", "eraser", "|", "fontsize", "brush", "paragraph", "---", "image", "table", "\n", "link", "|", "align", "|", "undo", "redo", "|", "copyformat", "fullsize", "---", "dots"];
          }, 3459: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(71842), s = i3(56298), a = i3(65147), l = i3(71005), c = i3(53048), d = i3(96369), u = i3(8809);
            i3(15776);
            class h extends l.k {
              constructor() {
                super(...arguments), this.type = null, this.snapRange = null, this.elmsList = (0, a.keys)(this.j.o.popup, false).filter((t5) => !this.isExcludedTarget(t5));
              }
              get popup() {
                return new d.z(this.jodit, false);
              }
              get toolbar() {
                return (0, u.$K)(this.jodit, this.popup);
              }
              onClick(t5) {
                const e4 = this.elmsList, i4 = r.J.isTag(t5, "img") ? t5 : r.J.closest(t5, e4, this.j.editor);
                if (i4 && this.canShowPopupForType(i4.nodeName.toLowerCase())) return this.showPopup(() => (0, a.position)(i4, this.j), i4.nodeName.toLowerCase(), i4), false;
              }
              showPopup(t5, e4, i4) {
                if (e4 = e4.toLowerCase(), !this.canShowPopupForType(e4)) return false;
                if (this.type !== e4 || i4 !== this.previousTarget) {
                  this.previousTarget = i4;
                  const t6 = this.j.o.popup[e4];
                  let o4;
                  o4 = (0, a.isFunction)(t6) ? t6(this.j, i4, this.popup.close) : t6, (0, a.isArray)(o4) && (this.toolbar.build(o4, i4), this.toolbar.buttonSize = this.j.o.toolbarButtonSize, o4 = this.toolbar.container), this.popup.setContent(o4), this.type = e4;
                }
                return this.popup.open(t5), true;
              }
              hidePopup(t5) {
                !this.popup.isOpened || (0, a.isString)(t5) && t5 !== this.type || this.popup.close();
              }
              onOutsideClick() {
                this.popup.close();
              }
              canShowPopupForType(t5) {
                const e4 = this.j.o.popup[t5.toLowerCase()];
                return !(this.j.o.readonly || !this.j.o.toolbarInline || !e4 || this.isExcludedTarget(t5));
              }
              isExcludedTarget(t5) {
                return (0, a.splitArray)(this.j.o.toolbarInlineDisableFor).map((t6) => t6.toLowerCase()).includes(t5.toLowerCase());
              }
              afterInit(t5) {
                this.j.e.on("getDiffButtons.mobile", (e4) => {
                  if (this.toolbar === e4) {
                    const e5 = this.toolbar.getButtonsNames();
                    return (0, a.toArray)(t5.registeredButtons).filter((t6) => !this.j.o.toolbarInlineDisabledButtons.includes(t6.name)).filter((t6) => {
                      const i4 = (0, a.isString)(t6) ? t6 : t6.name;
                      return i4 && "|" !== i4 && "\n" !== i4 && !e5.includes(i4);
                    });
                  }
                }).on("hidePopup", this.hidePopup).on("showInlineToolbar", this.showInlineToolbar).on("showPopup", (t6, e4, i4) => {
                  this.showPopup(e4, i4 || ((0, a.isString)(t6) ? t6 : t6.nodeName), (0, a.isString)(t6) ? void 0 : t6);
                }).on("mousedown keydown", this.onSelectionStart).on("change", () => {
                  this.popup.isOpened && this.previousTarget && !this.previousTarget.parentNode && (this.hidePopup(), this.previousTarget = void 0);
                }).on([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.addListenersForElements();
              }
              onSelectionStart() {
                this.snapRange = this.j.s.range.cloneRange();
              }
              onSelectionEnd(t5) {
                if (t5 && t5.target && c.D$.closestElement(t5.target, d.z)) return;
                const { snapRange: e4 } = this, { range: i4 } = this.j.s;
                e4 && !i4.collapsed && i4.startContainer === e4.startContainer && i4.startOffset === e4.startOffset && i4.endContainer === e4.endContainer && i4.endOffset === e4.endOffset || this.onSelectionChange();
              }
              onSelectionChange() {
                if (!this.j.o.toolbarInlineForSelection) return;
                const t5 = "selection", e4 = this.j.s.sel, i4 = this.j.s.range;
                (null == e4 ? void 0 : e4.isCollapsed) || this.isSelectedTarget(i4) || this.tableModule.getAllSelectedCells().length ? this.type === t5 && this.popup.isOpened && this.hidePopup() : this.j.s.current() && this.showPopup(() => i4.getBoundingClientRect(), t5);
              }
              isSelectedTarget(t5) {
                const e4 = t5.startContainer;
                return r.J.isElement(e4) && e4 === t5.endContainer && r.J.isTag(e4.childNodes[t5.startOffset], new Set((0, a.keys)(this.j.o.popup, false))) && t5.startOffset === t5.endOffset - 1;
              }
              get tableModule() {
                return this.j.getInstance("Table", this.j.o);
              }
              beforeDestruct(t5) {
                t5.e.off("showPopup").off([this.j.ew, this.j.ow], "mouseup keyup", this.onSelectionEnd), this.removeListenersForElements();
              }
              _eventsList() {
                const t5 = this.elmsList;
                return t5.map((t6) => (0, a.camelCase)(`click_${t6}`)).concat(t5.map((t6) => (0, a.camelCase)(`touchstart_${t6}`))).join(" ");
              }
              addListenersForElements() {
                this.j.e.on(this._eventsList(), this.onClick);
              }
              removeListenersForElements() {
                this.j.e.off(this._eventsList(), this.onClick);
              }
              showInlineToolbar(t5) {
                this.showPopup(() => {
                  if (t5) return t5;
                  const { range: e4 } = this.j.s;
                  return e4.getBoundingClientRect();
                }, "toolbar");
              }
            }
            h.requires = ["select"], (0, o3.Cg)([n2.cache], h.prototype, "popup", null), (0, o3.Cg)([n2.cache], h.prototype, "toolbar", null), (0, o3.Cg)([n2.autobind], h.prototype, "onClick", null), (0, o3.Cg)([(0, n2.wait)((t5) => !t5.j.isLocked)], h.prototype, "showPopup", null), (0, o3.Cg)([(0, n2.watch)([":clickEditor", ":beforeCommandDelete", ":backSpaceAfterDelete"]), n2.autobind], h.prototype, "hidePopup", null), (0, o3.Cg)([(0, n2.watch)(":outsideClick")], h.prototype, "onOutsideClick", null), (0, o3.Cg)([n2.autobind], h.prototype, "onSelectionStart", null), (0, o3.Cg)([n2.autobind], h.prototype, "onSelectionEnd", null), (0, o3.Cg)([(0, n2.debounce)((t5) => t5.defaultTimeout)], h.prototype, "onSelectionChange", null), (0, o3.Cg)([n2.autobind], h.prototype, "showInlineToolbar", null), s.fg.add("inlinePopup", h);
          }, 99573: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(56298), r = i3(40080), s = i3(38322), a = i3(931), l = i3(80515), c = i3.n(l), d = i3(36115);
            a.I.set("justify", c()), d.T.prototype.controls.align = { name: "left", tooltip: "Align", update(t5, e4) {
              const i4 = e4.control, n3 = t5.s.current();
              if (n3) {
                const r2 = o3.J.closest(n3, o3.J.isBlock, t5.editor) || t5.editor;
                let a2 = (0, s.A)(r2, "text-align").toString();
                i4.defaultValue && -1 !== i4.defaultValue.indexOf(a2) && (a2 = "left"), i4.data && i4.data.currentValue !== a2 && i4.list && i4.list[a2] && (t5.o.textIcons || "select" === i4.component ? e4.state.text = a2 : e4.state.icon.name = a2, i4.data.currentValue = a2);
              }
            }, isActive: (t5, e4) => {
              const i4 = t5.s.current();
              if (!i4 || !e4.control.defaultValue) return false;
              const n3 = o3.J.closest(i4, o3.J.isBlock, t5.editor) || t5.editor;
              return -1 === e4.control.defaultValue.indexOf((0, s.A)(n3, "text-align").toString());
            }, defaultValue: ["left", "start", "inherit"], data: { currentValue: "left" }, list: ["center", "left", "right", "justify"] }, d.T.prototype.controls.center = { command: "justifyCenter", css: { "text-align": "center" }, tooltip: "Align Center" }, d.T.prototype.controls.justify = { command: "justifyFull", css: { "text-align": "justify" }, tooltip: "Align Justify" }, d.T.prototype.controls.left = { command: "justifyLeft", css: { "text-align": "left" }, tooltip: "Align Left" }, d.T.prototype.controls.right = { command: "justifyRight", css: { "text-align": "right" }, tooltip: "Align Right" }, n2.fg.add("justify", function(t5) {
              t5.registerButton({ name: "align", group: "indent" });
              const e4 = (e5) => (t5.s.focus(), t5.s.eachSelection((i4) => {
                if (!i4) return;
                let n3 = o3.J.up(i4, o3.J.isBlock, t5.editor);
                n3 || (n3 = o3.J.wrapInline(i4, t5.o.enterBlock, t5)), (0, r.Op)(e5, n3);
              }), false);
              t5.registerCommand("justifyfull", e4), t5.registerCommand("justifyright", e4), t5.registerCommand("justifyleft", e4), t5.registerCommand("justifycenter", e4);
            });
          }, 92225: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(71005);
            class c extends l.k {
              afterInit(t5) {
              }
              beforeDestruct(t5) {
              }
              onKeyDownArrow(t5) {
                var e4;
                if (t5.key !== n2.KEY_RIGHT || !this.j.selection.isCollapsed()) return;
                const { endContainer: i4, endOffset: o4 } = this.j.selection.range;
                if (s.J.isText(i4) && (null === (e4 = i4.nodeValue) || void 0 === e4 ? void 0 : e4.length) === o4) {
                  const { parentNode: t6 } = i4;
                  s.J.isInlineBlock(t6) && !s.J.findNotEmptyNeighbor(t6, false, this.j.editor) && s.J.after(t6, this.j.createInside.text(n2.NBSP_SPACE));
                }
              }
            }
            (0, o3.Cg)([(0, r.watch)(":keydown")], c.prototype, "onKeyDownArrow", null), a.fg.add("keyArrowOutside", c);
          }, 87238: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.limitWords = false, o3.T.prototype.limitChars = false, o3.T.prototype.limitHTML = false;
          }, 9117: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(56298), a = i3(71005);
            i3(87238);
            class l extends a.k {
              afterInit(t5) {
                const { limitWords: e4, limitChars: i4 } = t5.o;
                if (t5 && (e4 || i4)) {
                  let e5 = null;
                  t5.e.off(".limit").on("beforePaste.limit", () => {
                    e5 = t5.history.snapshot.make();
                  }).on("keydown.limit keyup.limit beforeEnter.limit", this.checkPreventKeyPressOrPaste).on("change.limit", this.checkPreventChanging).on("afterPaste.limit", () => {
                    if (this.__shouldDenyInput(true) && e5) return t5.history.snapshot.restore(e5), t5.e.fire("denyPaste.limit"), false;
                  });
                }
              }
              shouldPreventInsertHTML(t5) {
                return (!t5 || !(n2.COMMAND_KEYS.includes(t5.key) || t5.ctrlKey || t5.metaKey)) && this.__shouldDenyInput(false);
              }
              __shouldDenyInput(t5) {
                const { jodit: e4 } = this, { limitWords: i4, limitChars: o4 } = e4.o, n3 = this.__splitWords(e4.o.limitHTML ? e4.value : e4.text);
                if (i4 && c(n3.length, i4, t5)) return e4.e.fire("denyWords.limit limit.limit"), true;
                const r2 = Boolean(o4 && c(n3.join("").length, o4, t5));
                return r2 && e4.e.fire("denyChars.limit limit.limit"), r2;
              }
              checkPreventKeyPressOrPaste(t5) {
                if (this.shouldPreventInsertHTML(t5)) return false;
              }
              checkPreventChanging(t5, e4) {
                const { jodit: i4 } = this;
                this.__shouldDenyInput(true) && (i4.value = e4);
              }
              __splitWords(t5) {
                return t5.replace((0, n2.INVISIBLE_SPACE_REG_EXP)(), "").split((0, n2.SPACE_REG_EXP)()).filter((t6) => t6.length);
              }
              beforeDestruct(t5) {
                t5.e.off(".limit");
              }
            }
            function c(t5, e4, i4) {
              return i4 ? t5 > e4 : t5 >= e4;
            }
            (0, o3.Cg)([r.autobind], l.prototype, "checkPreventKeyPressOrPaste", null), (0, o3.Cg)([r.autobind], l.prototype, "checkPreventChanging", null), s.fg.add("limit", l);
          }, 26725: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(65147), n2 = i3(931), r = i3(223), s = i3.n(r), a = i3(36115);
            a.T.prototype.defaultLineHeight = null, n2.I.set("line-height", s()), a.T.prototype.controls.lineHeight = { command: "applyLineHeight", tags: ["ol"], tooltip: "Line height", list: [1, 1.1, 1.2, 1.3, 1.4, 1.5, 2], exec: (t5, e4, { control: i4 }) => (0, o3.memorizeExec)(t5, e4, { control: i4 }, (t6) => t6) };
          }, 14100: function(t4) {
            "use strict";
            t4.exports = { "Line height": "ارتفاع الخط" };
          }, 10229: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Výška čáry" };
          }, 10572: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Zeilenhöhe" };
          }, 27671: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Altura de la línea" };
          }, 30382: function(t4) {
            "use strict";
            t4.exports = { "Line height": "ارتفاع خط" };
          }, 14950: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Rivin korkeus" };
          }, 85051: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Hauteur de ligne" };
          }, 2928: function(t4) {
            "use strict";
            t4.exports = { "Line height": "גובה שורה" };
          }, 29920: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Vonal magassága" };
          }, 65226: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Tinggi baris" };
          }, 39053: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ar: function() {
              return o3;
            }, cs_cz: function() {
              return n2;
            }, de: function() {
              return r;
            }, es: function() {
              return s;
            }, fa: function() {
              return a;
            }, fi: function() {
              return l;
            }, fr: function() {
              return c;
            }, he: function() {
              return d;
            }, hu: function() {
              return u;
            }, id: function() {
              return h;
            }, it: function() {
              return p;
            }, ja: function() {
              return f;
            }, ko: function() {
              return g;
            }, mn: function() {
              return m;
            }, nl: function() {
              return b;
            }, pl: function() {
              return _;
            }, pt_br: function() {
              return v;
            }, ru: function() {
              return x;
            }, tr: function() {
              return w;
            }, zh_cn: function() {
              return y;
            }, zh_tw: function() {
              return j;
            } });
            var o3 = i3(14100), n2 = i3(10229), r = i3(10572), s = i3(27671), a = i3(30382), l = i3(14950), c = i3(85051), d = i3(2928), u = i3(29920), h = i3(65226), p = i3(51162), f = i3(4410), g = i3(84777), m = i3(25884), b = i3(46433), _ = i3(42055), v = i3(70846), x = i3(15966), w = i3(41145), y = i3(76877), j = i3(83289);
          }, 51162: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Altezza linea" };
          }, 4410: function(t4) {
            "use strict";
            t4.exports = { "Line height": "ラインの高さ" };
          }, 84777: function(t4) {
            "use strict";
            t4.exports = { "Line height": "선 높이" };
          }, 25884: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Зураасны өндөр" };
          }, 46433: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Lijnhoogte" };
          }, 42055: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Wysokość linii" };
          }, 70846: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Altura da linha" };
          }, 15966: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Высота линии" };
          }, 41145: function(t4) {
            "use strict";
            t4.exports = { "Line height": "Çizgi yüksekliği" };
          }, 76877: function(t4) {
            "use strict";
            t4.exports = { "Line height": "线高" };
          }, 83289: function(t4) {
            "use strict";
            t4.exports = { "Line height": "行高" };
          }, 83105: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(55186), s = i3(56298), a = i3(65147), l = i3(71005), c = (i3(26725), i3(39053));
            class d extends l.k {
              constructor(t5) {
                super(t5), this.buttons = [{ name: "lineHeight", group: "font" }], (0, s.JW)(c);
              }
              afterInit(t5) {
                (0, a.css)(t5.editor, { lineHeight: t5.o.defaultLineHeight }), t5.registerCommand("applyLineHeight", this.applyLineHeight);
              }
              applyLineHeight(t5, e4, i4) {
                const { s: o4, createInside: n3, editor: s2, o: l2 } = this.j;
                let c2;
                o4.isFocused() || o4.focus(), o4.save();
                const d2 = (t6) => {
                  let e5 = r.J.closest(t6, r.J.isBlock, s2);
                  e5 || (e5 = r.J.wrap(t6, l2.enter, n3));
                  const o5 = (0, a.css)(e5, "lineHeight");
                  void 0 === c2 && (c2 = o5.toString() !== i4.toString()), (0, a.css)(e5, "lineHeight", c2 ? i4 : null);
                };
                try {
                  if (o4.isCollapsed()) {
                    const t6 = n3.fake();
                    o4.insertNode(t6, false, false), d2(t6), r.J.safeRemove(t6);
                  } else o4.eachSelection(d2);
                } finally {
                  o4.restore();
                }
              }
              beforeDestruct(t5) {
                (0, a.css)(t5.editor, { lineHeight: null });
              }
            }
            (0, o3.Cg)([n2.autobind], d.prototype, "applyLineHeight", null), s.fg.add("lineHeight", d);
          }, 64953: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(55186), n2 = i3(931), r = i3(95032), s = i3.n(r), a = i3(73533), l = i3.n(a), c = i3(21329), d = i3(36115);
            d.T.prototype.link = { formTemplate: c.B, followOnDblClick: false, processVideoLink: true, processPastedLink: true, noFollowCheckbox: true, openInNewTabCheckbox: true, modeClassName: "input", selectMultipleClassName: true, selectSizeClassName: 3, selectOptionsClassName: [], hotkeys: ["ctrl+k", "cmd+k"] }, n2.I.set("link", s()).set("unlink", l()), d.T.prototype.controls.unlink = { exec: (t5, e4) => {
              const i4 = o3.J.closest(e4, "a", t5.editor);
              i4 && o3.J.unwrap(i4), t5.synchronizeValues(), t5.e.fire("hidePopup");
            }, tooltip: "Unlink" }, d.T.prototype.controls.link = { isActive: (t5) => {
              const e4 = t5.s.current();
              return Boolean(e4 && o3.J.closest(e4, "a", t5.editor));
            }, popup: (t5, e4, i4) => t5.e.fire("generateLinkForm.link", e4, i4), tags: ["a"], tooltip: "Insert link" };
          }, 47791: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(71842), s = i3(56298), a = i3(65147), l = i3(71005);
            i3(64953);
            class c extends l.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "link", group: "insert" }];
              }
              afterInit(t5) {
                t5.o.link.followOnDblClick && t5.e.on("dblclick.link", this.onDblClickOnLink), t5.o.link.processPastedLink && t5.e.on("processPaste.link", this.onProcessPasteLink), t5.e.on("generateLinkForm.link", this.__generateForm), t5.registerCommand("openLinkDialog", { exec: () => {
                  const e4 = t5.dlg({ resizable: false }), i4 = this.__generateForm(t5.s.current(), () => {
                    e4.close();
                  });
                  i4.container.classList.add("jodit-dialog_alert"), e4.setContent(i4), e4.open(), t5.async.requestIdleCallback(() => {
                    const { url_input: t6 } = (0, a.refs)(i4.container);
                    null == t6 || t6.focus();
                  });
                }, hotkeys: t5.o.link.hotkeys });
              }
              onDblClickOnLink(t5) {
                if (!r.J.isTag(t5.target, "a")) return;
                const e4 = (0, a.attr)(t5.target, "href");
                e4 && (location.href = e4, t5.preventDefault());
              }
              onProcessPasteLink(t5, e4) {
                const { jodit: i4 } = this;
                if ((0, a.isURL)(e4) && i4.o.link.processPastedLink) {
                  if (i4.e.stopPropagation("processPaste"), i4.o.link.processVideoLink) {
                    const t6 = (0, a.convertMediaUrlToVideoEmbed)(e4);
                    if (t6 !== e4) return i4.createInside.fromHTML(t6);
                  }
                  if (i4.s.isCollapsed()) {
                    const t6 = i4.createInside.element("a");
                    return t6.setAttribute("href", e4), t6.textContent = e4, i4.e.fire("applyLink", i4, t6, null), t6;
                  }
                  return i4.s.commitStyle({ element: "a", attributes: { href: e4 } }), true;
                }
              }
              __generateForm(t5, e4) {
                const { jodit: i4 } = this, o4 = i4.i18n.bind(i4), { openInNewTabCheckbox: n3, noFollowCheckbox: s2, formTemplate: l2, formClassName: c2, modeClassName: d } = i4.o.link, u = l2(i4), h = (0, a.isString)(u) ? i4.c.fromHTML(u, { target_checkbox_box: n3, nofollow_checkbox_box: s2 }) : u, p = r.J.isElement(h) ? h : h.container, f = (0, a.refs)(p), { insert: g, unlink: m, content_input_box: b } = f, { target_checkbox: _, nofollow_checkbox: v, url_input: x } = f, w = r.J.isImage(t5);
                let { content_input: y } = f;
                const { className_input: j } = f, { className_select: k } = f;
                let C;
                y || (y = i4.c.element("input", { type: "hidden", ref: "content_input" })), c2 && p.classList.add(c2), w && r.J.hide(b);
                const S = () => C ? C.innerText : (0, a.stripTags)(i4.s.range.cloneContents(), i4.ed);
                if (C = !(!t5 || !r.J.closest(t5, "a", i4.editor)) && r.J.closest(t5, "a", i4.editor), !w && t5 && (y.value = S()), C) {
                  if (x.value = (0, a.attr)(C, "href") || "", d) switch (d) {
                    case "input":
                      j && (j.value = (0, a.attr)(C, "class") || "");
                      break;
                    case "select":
                      if (k) {
                        for (let t6 = 0; k.selectedOptions.length > t6; t6++) {
                          const e5 = k.options.item(t6);
                          e5 && (e5.selected = false);
                        }
                        ((0, a.attr)(C, "class") || "").split(" ").forEach((t6) => {
                          if (t6) for (let e5 = 0; k.options.length > e5; e5++) {
                            const i5 = k.options.item(e5);
                            (null == i5 ? void 0 : i5.value) && i5.value === t6 && (i5.selected = true);
                          }
                        });
                      }
                  }
                  n3 && _ && (_.checked = "_blank" === (0, a.attr)(C, "target")), s2 && v && (v.checked = "nofollow" === (0, a.attr)(C, "rel")), g.textContent = o4("Update");
                } else r.J.hide(m);
                i4.editor.normalize();
                const z = i4.history.snapshot.make();
                m && i4.e.on(m, "click", (t6) => {
                  i4.s.restore(), i4.history.snapshot.restore(z), C && r.J.unwrap(C), i4.synchronizeValues(), e4(), t6.preventDefault();
                });
                const T = () => {
                  if (!x.value.trim().length) return x.focus(), x.classList.add("jodit_error"), false;
                  let t6;
                  i4.s.restore(), i4.s.removeMarkers(), i4.editor.normalize(), i4.history.snapshot.restore(z);
                  const o5 = S() !== y.value.trim(), l3 = i4.createInside;
                  if (C) t6 = [C];
                  else {
                    if (i4.s.isCollapsed()) {
                      const e5 = l3.element("a");
                      i4.s.insertNode(e5, false, false), t6 = [e5];
                    } else {
                      const e5 = i4.s.current();
                      t6 = r.J.isTag(e5, "img") ? [r.J.wrap(e5, "a", l3)] : i4.s.wrapInTag("a");
                    }
                    t6.forEach((t7) => i4.s.select(t7));
                  }
                  return t6.forEach((t7) => {
                    var e5;
                    if ((0, a.attr)(t7, "href", x.value), d && (null != j ? j : k)) {
                      if ("input" === d) "" === j.value && t7.hasAttribute("class") && (0, a.attr)(t7, "class", null), "" !== j.value && (0, a.attr)(t7, "class", j.value);
                      else if ("select" === d) {
                        t7.hasAttribute("class") && (0, a.attr)(t7, "class", null);
                        for (let i5 = 0; k.selectedOptions.length > i5; i5++) {
                          const o6 = null === (e5 = k.selectedOptions.item(i5)) || void 0 === e5 ? void 0 : e5.value;
                          o6 && t7.classList.add(o6);
                        }
                      }
                    }
                    if (!w) {
                      let e6 = t7.textContent;
                      y.value.trim().length ? o5 && (e6 = y.value) : e6 = x.value, e6 !== t7.textContent && (t7.textContent = e6);
                    }
                    n3 && _ && (0, a.attr)(t7, "target", _.checked ? "_blank" : null), s2 && v && (0, a.attr)(t7, "rel", v.checked ? "nofollow" : null), i4.e.fire("applyLink", i4, t7, h);
                  }), i4.synchronizeValues(), e4(), false;
                };
                return r.J.isElement(h) ? i4.e.on(h, "submit", (t6) => (t6.preventDefault(), t6.stopImmediatePropagation(), T(), false)) : h.onSubmit(T), h;
              }
              beforeDestruct(t5) {
                t5.e.off("generateLinkForm.link", this.__generateForm).off("dblclick.link", this.onDblClickOnLink).off("processPaste.link", this.onProcessPasteLink);
              }
            }
            (0, o3.Cg)([n2.autobind], c.prototype, "onDblClickOnLink", null), (0, o3.Cg)([n2.autobind], c.prototype, "onProcessPasteLink", null), (0, o3.Cg)([n2.autobind], c.prototype, "__generateForm", null), s.fg.add("link", c);
          }, 21329: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { B: function() {
              return r;
            } });
            var o3 = i3(35265), n2 = i3(20703);
            const r = (t5) => {
              const { openInNewTabCheckbox: e4, noFollowCheckbox: i4, modeClassName: r2, selectSizeClassName: s, selectMultipleClassName: a, selectOptionsClassName: l } = t5.o.link;
              return new n2.XV(t5, [new n2.Yh(t5, [new n2.tS(t5, { name: "url", type: "text", ref: "url_input", label: "URL", placeholder: "http://", required: true })]), new n2.Yh(t5, [new n2.tS(t5, { name: "content", ref: "content_input", label: "Text" })], { ref: "content_input_box" }), r2 ? new n2.Yh(t5, ["input" === r2 ? new n2.tS(t5, { name: "className", ref: "className_input", label: "Class name" }) : "select" === r2 ? new n2.$6(t5, { name: "className", ref: "className_select", label: "Class name", size: s, multiple: a, options: l }) : null]) : null, e4 ? new n2.cY(t5, { name: "target", ref: "target_checkbox", label: "Open in new tab" }) : null, i4 ? new n2.cY(t5, { name: "nofollow", ref: "nofollow_checkbox", label: "No follow" }) : null, new n2.Yh(t5, [new o3.lD(t5, { name: "unlink", variant: "default", text: "Unlink" }), new o3.lD(t5, { name: "insert", type: "submit", variant: "primary", text: "Insert" })], { align: "full" })]);
            };
          }, 24103: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.mediaFakeTag = "jodit-media", o3.T.prototype.mediaInFakeBlock = true, o3.T.prototype.mediaBlocks = ["video", "audio"];
          }, 26421: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(97369);
            i3(24103), n2.fg.add("media", function(t5) {
              const e4 = "jodit_fake_wrapper", { mediaFakeTag: i4, mediaBlocks: n3, mediaInFakeBlock: s } = t5.options;
              s && t5.e.on("afterGetValueFromEditor", (t6) => {
                const o4 = new RegExp(`<${i4}[^>]+data-${e4}[^>]+>([^]+?)</${i4}>`, "ig");
                o4.test(t6.value) && (t6.value = t6.value.replace(o4, "$1"));
              }).on("change afterInit afterSetMode changePlace", t5.async.debounce(() => {
                t5.isDestructed || t5.getMode() === o3.MODE_SOURCE || (0, r.$$)(n3.join(","), t5.editor).forEach((o4) => {
                  (0, r.dataBind)(o4, e4) || ((0, r.dataBind)(o4, e4, true), ((o5) => {
                    if (o5.parentNode && (0, r.attr)(o5.parentNode, "data-jodit_iframe_wrapper")) o5 = o5.parentNode;
                    else {
                      const n4 = t5.createInside.element(i4, { "data-jodit-temp": 1, contenteditable: false, draggable: true, [`data-${e4}`]: 1 });
                      (0, r.attr)(n4, "style", (0, r.attr)(o5, "style")), n4.style.display = "inline-block" === o5.style.display ? "inline-block" : "block", n4.style.width = o5.offsetWidth + "px", n4.style.height = o5.offsetHeight + "px", o5.parentNode && o5.parentNode.insertBefore(n4, o5), n4.appendChild(o5), o5 = n4;
                    }
                    t5.e.off(o5, "mousedown.select touchstart.select").on(o5, "mousedown.select touchstart.select", () => {
                      t5.s.setCursorAfter(o5);
                    });
                  })(o4));
                });
              }, t5.defaultTimeout));
            });
          }, 88011: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(65147), r = i3(97394), s = i3(8809), a = i3(36115);
            a.T.prototype.mobileTapTimeout = 300, a.T.prototype.toolbarAdaptive = true, a.T.prototype.buttonsMD = [{ group: "font-style", buttons: [] }, { group: "list", buttons: [] }, { group: "font", buttons: [] }, "---", { group: "media", buttons: [] }, "\n", { group: "state", buttons: [] }, { group: "insert", buttons: [] }, { group: "indent", buttons: [] }, { group: "color", buttons: [] }, "---", { group: "history", buttons: [] }, { group: "other", buttons: [] }, "|", "dots"], a.T.prototype.buttonsSM = [{ group: "font-style", buttons: [] }, { group: "list", buttons: [] }, "---", { group: "font", buttons: [] }, "\n", { group: "state", buttons: [] }, { group: "indent", buttons: [] }, { group: "color", buttons: [] }, "---", { group: "history", buttons: [] }, "|", "dots"], a.T.prototype.buttonsXS = [{ group: "font-style", buttons: [] }, { group: "list", buttons: [] }, "---", { group: "font", buttons: [] }, { group: "color", buttons: [] }, "---", "dots"], a.T.prototype.controls.dots = { mode: o3.MODE_SOURCE + o3.MODE_WYSIWYG, popup: (t5, e4, i4, o4) => {
              let a2 = o4.control.data;
              return void 0 === a2 && (a2 = { toolbar: (0, s.$K)(t5), rebuild: () => {
                var e5, i5;
                if (o4) {
                  const s2 = t5.e.fire("getDiffButtons.mobile", o4.closest(r.Q));
                  if (s2 && a2) {
                    a2.toolbar.build((0, n2.splitArray)(s2));
                    const o5 = (null === (i5 = null === (e5 = t5.toolbar) || void 0 === e5 ? void 0 : e5.firstButton) || void 0 === i5 ? void 0 : i5.container.offsetWidth) || 36;
                    a2.toolbar.container.style.width = 3 * (o5 + 4) + "px";
                  }
                }
              } }, o4.control.data = a2), a2.rebuild(), a2.toolbar;
            }, tooltip: "Show all" };
          }, 76967: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298), n2 = i3(65147), r = i3(39611);
            i3(88011), o3.fg.add("mobile", function(t5) {
              let e4 = 0, i4 = (0, n2.splitArray)(t5.o.buttons);
              t5.o.mobileTapTimeout && t5.e.on("touchend", (i5) => {
                if (i5.changedTouches && i5.changedTouches.length) {
                  const o4 = (/* @__PURE__ */ new Date()).getTime(), n3 = o4 - e4;
                  n3 > t5.o.mobileTapTimeout && (e4 = o4, 1.5 * t5.o.mobileTapTimeout > n3 && t5.s.insertCursorAtPoint(i5.clientX, i5.clientY));
                }
              }), t5.e.on("getDiffButtons.mobile", (e5) => {
                if (e5 === t5.toolbar) {
                  const e6 = (0, r.V)((0, n2.splitArray)(t5.o.buttons), t5), o4 = (0, r.V)(i4, t5);
                  return (0, n2.toArray)(e6).reduce((t6, e7) => (o4.has(e7) || t6.push(e7), t6), []);
                }
              }), t5.o.toolbarAdaptive && t5.e.on("resize afterInit recalcAdaptive changePlace afterAddPlace", () => {
                var e5, o4;
                if (!t5.o.toolbar) return;
                const r2 = (null !== (e5 = t5.container.parentElement) && void 0 !== e5 ? e5 : t5.container).offsetWidth, s = (0, n2.splitArray)(t5.isFullSize || r2 >= t5.o.sizeLG ? t5.o.buttons : t5.o.sizeMD > r2 ? t5.o.sizeSM > r2 ? t5.o.buttonsXS : t5.o.buttonsSM : t5.o.buttonsMD);
                s.toString() !== i4.toString() && (i4 = s, t5.e.fire("closeAllPopups"), null === (o4 = t5.toolbar) || void 0 === o4 || o4.setRemoveButtons(t5.o.removeButtons).build(i4.concat(t5.o.extraButtons)));
              }).on(t5.ow, "load resize", () => t5.e.fire("recalcAdaptive"));
            });
          }, 20797: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(72197), n2 = i3(931), r = i3(40037), s = i3.n(r), a = i3(83207), l = i3.n(a), c = i3(36115);
            const d = (t5, e4, { control: i4 }) => {
              var n3;
              const r2 = `button${i4.command}`, s2 = null !== (n3 = i4.args && i4.args[0]) && void 0 !== n3 ? n3 : (0, o3.m)(t5, r2);
              (0, o3.m)(t5, r2, s2), t5.execCommand(i4.command, false, "default" === s2 ? null : s2);
            };
            n2.I.set("ol", s()).set("ul", l()), c.T.prototype.controls.ul = { command: "insertUnorderedList", tags: ["ul"], tooltip: "Insert Unordered List", list: { default: "Default", circle: "Circle", disc: "Dot", square: "Quadrate" }, exec: d }, c.T.prototype.controls.ol = { command: "insertOrderedList", tags: ["ol"], tooltip: "Insert Ordered List", list: { default: "Default", "lower-alpha": "Lower Alpha", "lower-greek": "Lower Greek", "lower-roman": "Lower Roman", "upper-alpha": "Upper Alpha", "upper-roman": "Upper Roman" }, exec: d };
          }, 1239: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(56298), s = i3(71005);
            i3(20797);
            class a extends s.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "ul", group: "list" }, { name: "ol", group: "list" }];
              }
              afterInit(t5) {
                t5.registerCommand("insertUnorderedList", this.onCommand).registerCommand("insertOrderedList", this.onCommand);
              }
              onCommand(t5, e4, i4) {
                return this.jodit.s.commitStyle({ element: "insertunorderedlist" === t5 ? "ul" : "ol", attributes: { style: { listStyleType: null != i4 ? i4 : null } } }), this.jodit.synchronizeValues(), false;
              }
              beforeDestruct(t5) {
              }
            }
            (0, o3.Cg)([n2.autobind], a.prototype, "onCommand", null), r.fg.add("orderedList", a);
          }, 93324: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(36115);
            n2.T.prototype.askBeforePasteFromWord = true, n2.T.prototype.processPasteFromWord = true, n2.T.prototype.defaultActionOnPasteFromWord = null, n2.T.prototype.pasteFromWordActionList = [{ value: o3.INSERT_AS_HTML, text: "Keep" }, { value: o3.INSERT_AS_TEXT, text: "Clean" }, { value: o3.INSERT_ONLY_TEXT, text: "Insert only Text" }];
          }, 36969: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(56298), a = i3(65147), l = i3(71005), c = (i3(93324), i3(90823));
            class d extends l.k {
              afterInit(t5) {
              }
              beforeDestruct(t5) {
              }
              processWordHTML(t5, e4, i4) {
                const { j: o4 } = this, { processPasteFromWord: n3, askBeforePasteFromWord: r2, defaultActionOnPasteFromWord: s2, defaultActionOnPaste: l2, pasteFromWordActionList: d2 } = o4.o;
                return !(!n3 || !(0, a.isHtmlFromWord)(e4) || (r2 ? (0, c.PU)(o4, "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "Word Paste Detected", (o5) => {
                  this.insertFromWordByType(t5, e4, o5, i4);
                }, d2) : this.insertFromWordByType(t5, e4, s2 || l2, i4), 0));
              }
              insertFromWordByType(t5, e4, i4, o4) {
                var r2;
                switch (i4) {
                  case n2.INSERT_AS_HTML: {
                    e4 = (0, a.applyStyles)(e4);
                    const t6 = null === (r2 = this.j.events) || void 0 === r2 ? void 0 : r2.fire("beautifyHTML", e4);
                    (0, a.isString)(t6) && (e4 = t6);
                    break;
                  }
                  case n2.INSERT_AS_TEXT:
                    e4 = (0, a.cleanFromWord)(e4);
                    break;
                  case n2.INSERT_ONLY_TEXT:
                    e4 = (0, a.stripTags)((0, a.cleanFromWord)(e4));
                }
                (0, c.sX)(t5, this.j, e4);
              }
            }
            d.requires = ["paste"], (0, o3.Cg)([(0, r.watch)(":processHTML")], d.prototype, "processWordHTML", null), s.fg.add("pasteFromWord", d);
          }, 56701: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(55186), r = i3(56298), s = i3(65147), a = i3(29866), l = i3(92032);
            r.fg.add("pasteStorage", class extends a.k {
              constructor() {
                super(...arguments), this.currentIndex = 0, this.list = [], this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.paste = () => {
                  if (this.j.s.focus(), this.j.s.insertHTML(this.list[this.currentIndex]), 0 !== this.currentIndex) {
                    const t5 = this.list[0];
                    this.list[0] = this.list[this.currentIndex], this.list[this.currentIndex] = t5;
                  }
                  this.dialog && this.dialog.close(), this.j.synchronizeValues(), this.j.e.fire("afterPaste");
                }, this.onKeyDown = (t5) => {
                  let e4 = this.currentIndex;
                  -1 !== [o3.KEY_UP, o3.KEY_DOWN, o3.KEY_ENTER].indexOf(t5.key) && (t5.key === o3.KEY_UP && (0 === e4 ? e4 = this.list.length - 1 : e4 -= 1), t5.key === o3.KEY_DOWN && (e4 === this.list.length - 1 ? e4 = 0 : e4 += 1), t5.key !== o3.KEY_ENTER ? (e4 !== this.currentIndex && this.selectIndex(e4), t5.stopImmediatePropagation(), t5.preventDefault()) : this.paste());
                }, this.selectIndex = (t5) => {
                  this.listBox && (0, s.toArray)(this.listBox.childNodes).forEach((e4, i4) => {
                    e4.classList.remove("jodit_active"), t5 === i4 && this.previewBox && (e4.classList.add("jodit_active"), this.previewBox.innerHTML = this.list[t5], e4.focus());
                  }), this.currentIndex = t5;
                }, this.showDialog = () => {
                  2 > this.list.length || (this.dialog || this.createDialog(), this.listBox && (this.listBox.innerHTML = ""), this.previewBox && (this.previewBox.innerHTML = ""), this.list.forEach((t5, e4) => {
                    const i4 = this.j.c.element("a");
                    i4.textContent = e4 + 1 + ". " + t5.replace((0, o3.SPACE_REG_EXP)(), ""), this.j.e.on(i4, "keydown", this.onKeyDown), (0, s.attr)(i4, "href", "#"), (0, s.attr)(i4, "data-index", e4.toString()), (0, s.attr)(i4, "tab-index", "-1"), this.listBox && this.listBox.appendChild(i4);
                  }), this.dialog && this.dialog.open(), this.j.async.setTimeout(() => {
                    this.selectIndex(0);
                  }, 100));
                };
              }
              createDialog() {
                this.dialog = this.j.dlg();
                const t5 = (0, l.$n)(this.j, "paste", "Paste", "primary");
                t5.onAction(this.paste);
                const e4 = (0, l.$n)(this.j, "", "Cancel");
                e4.onAction(this.dialog.close), this.container = this.j.c.div(), this.container.classList.add("jodit-paste-storage"), this.listBox = this.j.c.div(), this.previewBox = this.j.c.div(), this.container.appendChild(this.listBox), this.container.appendChild(this.previewBox), this.dialog.setHeader(this.j.i18n("Choose Content to Paste")), this.dialog.setContent(this.container), this.dialog.setFooter([t5, e4]), this.j.e.on(this.listBox, "click dblclick", (t6) => {
                  const e5 = t6.target;
                  return n2.J.isTag(e5, "a") && e5.hasAttribute("data-index") && this.selectIndex(parseInt((0, s.attr)(e5, "-index") || "0", 10)), "dblclick" === t6.type && this.paste(), false;
                });
              }
              afterInit() {
                this.j.e.off("afterCopy.paste-storage").on("pasteStorageList.paste-storage", () => this.list.length).on("afterCopy.paste-storage", (t5) => {
                  -1 !== this.list.indexOf(t5) && this.list.splice(this.list.indexOf(t5), 1), this.list.unshift(t5), this.list.length > 5 && (this.list.length = 5);
                }), this.j.registerCommand("showPasteStorage", { exec: this.showDialog, hotkeys: ["ctrl+shift+v", "cmd+shift+v"] });
              }
              beforeDestruct() {
                this.dialog && this.dialog.destruct(), this.j.e.off(".paste-storage"), n2.J.safeRemove(this.previewBox), n2.J.safeRemove(this.listBox), n2.J.safeRemove(this.container), this.container = null, this.listBox = null, this.previewBox = null, this.dialog = null, this.list = [];
              }
            });
          }, 70674: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(90823), r = i3(36115);
            r.T.prototype.askBeforePasteHTML = true, r.T.prototype.processPasteHTML = true, r.T.prototype.scrollToPastedContent = true, r.T.prototype.pasteExcludeStripTags = ["br", "hr"], r.T.prototype.pasteHTMLActionList = [{ value: o3.INSERT_AS_HTML, text: "Keep" }, { value: o3.INSERT_AS_TEXT, text: "Insert as Text" }, { value: o3.INSERT_ONLY_TEXT, text: "Insert only Text" }], r.T.prototype.memorizeChoiceWhenPasteFragment = false, r.T.prototype.nl2brInPlainText = true;
            const s = "pasteStorage";
            r.T.prototype.controls.paste = { tooltip: "Paste from clipboard", async exec(t5, e4, { control: i4 }) {
              if (i4.name === s) return void t5.execCommand("showPasteStorage");
              t5.s.focus();
              let r2 = "", a = true;
              if (navigator.clipboard) {
                try {
                  const t6 = await navigator.clipboard.read();
                  if (t6 && t6.length) {
                    const e5 = await t6[0].getType(o3.TEXT_PLAIN);
                    r2 = await new Response(e5).text();
                  }
                  a = false;
                } catch (t6) {
                }
                if (a) try {
                  r2 = await navigator.clipboard.readText(), a = false;
                } catch (t6) {
                }
              }
              a && (r2 = t5.buffer.get(o3.CLIPBOARD_ID) || "", a = 0 === r2.length);
              const l = t5.value;
              a ? (t5.ed.execCommand("paste"), a = l === t5.value, !a && t5.e.fire("afterPaste")) : r2.length ? ((0, n2.sX)(null, t5, r2), t5.e.fire("afterPaste")) : a && t5.alert("Your browser doesn't support direct access to the clipboard.", () => {
                t5.s.focus();
              });
            }, list: { [s]: "Paste Storage" }, isChildDisabled: (t5) => 2 > t5.e.fire("pasteStorageList") };
          }, 90823: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { DI: function() {
              return l;
            }, PU: function() {
              return c;
            }, sX: function() {
              return a;
            } });
            var o3 = i3(17352), n2 = i3(55186), r = i3(9823), s = i3(92032);
            function a(t5, e4, i4) {
              if (e4.isInDestruct) return;
              (function(t6) {
                return Boolean(t6 && "drop" === t6.type);
              })(t5) && e4.s.insertCursorAtPoint(t5.clientX, t5.clientY);
              const o4 = e4.e.fire("beforePasteInsert", i4);
              !(0, r.Rd)(o4) && ((0, r.Kg)(o4) || (0, r.Et)(o4) || n2.J.isNode(o4)) && (i4 = o4), (0, r.Kg)(i4) && (i4 = function(t6) {
                const e5 = (t6 = t6.replace(/<meta[^>]+?>/g, "")).search(/<!--StartFragment-->/i);
                -1 !== e5 && (t6 = t6.substring(e5 + 20));
                const i5 = t6.search(/<!--EndFragment-->/i);
                return -1 !== i5 && (t6 = t6.substring(0, i5)), t6;
              }(i4)), e4.s.insertHTML(i4);
            }
            function l(t5) {
              const e4 = t5.types;
              let i4 = "";
              if ((0, r.cy)(e4) || "[object DOMStringList]" === {}.toString.call(e4)) for (let t6 = 0; e4.length > t6; t6 += 1) i4 += e4[t6] + ";";
              else i4 = (e4 || o3.TEXT_PLAIN).toString() + ";";
              return i4;
            }
            function c(t5, e4, i4, o4, n3) {
              if (false === t5.e.fire("beforeOpenPasteDialog", e4, i4, o4, n3)) return;
              const r2 = t5.confirm(`<div style="word-break: normal; white-space: normal">${t5.i18n(e4)}</div>`, t5.i18n(i4)), a2 = n3.map(({ text: e5, value: i5 }) => (0, s.$n)(t5, { text: e5, name: e5.toLowerCase(), tabIndex: 0 }).onAction(() => {
                r2.close(), o4(i5);
              }));
              r2.e.one(r2, "afterClose", () => {
                t5.s.isFocused() || t5.s.focus();
              });
              const l2 = (0, s.$n)(t5, { text: "Cancel", tabIndex: 0 }).onAction(() => {
                r2.close();
              });
              return r2.setFooter([...a2, l2]), a2[0].focus(), a2[0].state.variant = "primary", t5.e.fire("afterOpenPasteDialog", r2, e4, i4, o4, n3), r2;
            }
          }, 13861: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(29866), d = (i3(70674), i3(90823));
            class u extends c.k {
              constructor() {
                super(...arguments), this.pasteStack = new l.LimitedStack(20), this._isDialogOpened = false;
              }
              afterInit(t5) {
                t5.e.on("paste.paste", this.onPaste).on("pasteStack.paste", (t6) => this.pasteStack.push(t6)), t5.o.nl2brInPlainText && this.j.e.on("processPaste.paste", this.onProcessPasteReplaceNl2Br);
              }
              beforeDestruct(t5) {
                t5.e.off("paste.paste", this.onPaste).off("processPaste.paste", this.onProcessPasteReplaceNl2Br).off(".paste");
              }
              onPaste(t5) {
                try {
                  if (false === this.customPasteProcess(t5) || false === this.j.e.fire("beforePaste", t5)) return t5.preventDefault(), false;
                  this.defaultPasteProcess(t5);
                } finally {
                  this.j.e.fire("afterPaste", t5);
                }
              }
              customPasteProcess(t5) {
                if (!this.j.o.processPasteHTML) return;
                const e4 = (0, l.getDataTransfer)(t5), i4 = [null == e4 ? void 0 : e4.getData(n2.TEXT_PLAIN), null == e4 ? void 0 : e4.getData(n2.TEXT_HTML), null == e4 ? void 0 : e4.getData(n2.TEXT_RTF)];
                for (const e5 of i4) if ((0, l.isHTML)(e5) && (this.j.e.fire("processHTML", t5, e5, { plain: i4[0], html: i4[1], rtf: i4[2] }) || this.processHTML(t5, e5))) return false;
              }
              defaultPasteProcess(t5) {
                const e4 = (0, l.getDataTransfer)(t5);
                let i4 = (null == e4 ? void 0 : e4.getData(n2.TEXT_HTML)) || (null == e4 ? void 0 : e4.getData(n2.TEXT_PLAIN));
                if (e4 && i4 && "" !== (0, l.trim)(i4)) {
                  const o4 = this.j.e.fire("processPaste", t5, i4, (0, d.DI)(e4));
                  void 0 !== o4 && (i4 = o4), ((0, l.isString)(i4) || s.J.isNode(i4)) && this.__insertByType(t5, i4, this.j.o.defaultActionOnPaste), t5.preventDefault(), t5.stopPropagation();
                }
              }
              processHTML(t5, e4) {
                if (!this.j.o.askBeforePasteHTML) return false;
                if (this.j.o.memorizeChoiceWhenPasteFragment) {
                  const i5 = this.pasteStack.find((t6) => t6.html === e4);
                  if (i5) return this.__insertByType(t5, e4, i5.action || this.j.o.defaultActionOnPaste), true;
                }
                if (this._isDialogOpened) return true;
                const i4 = (0, d.PU)(this.j, "Your code is similar to HTML. Keep as HTML?", "Paste as HTML", (i5) => {
                  this._isDialogOpened = false, this.__insertByType(t5, e4, i5);
                }, this.j.o.pasteHTMLActionList);
                return i4 && (this._isDialogOpened = true, i4.e.on("beforeClose", () => {
                  this._isDialogOpened = false;
                })), true;
              }
              __insertByType(t5, e4, i4) {
                if (this.pasteStack.push({ html: e4, action: i4 }), (0, l.isString)(e4)) switch (this.j.buffer.set(n2.CLIPBOARD_ID, e4), i4) {
                  case n2.INSERT_CLEAR_HTML:
                    e4 = (0, l.cleanFromWord)(e4);
                    break;
                  case n2.INSERT_ONLY_TEXT:
                    e4 = (0, l.stripTags)(e4, this.j.ed, new Set(this.j.o.pasteExcludeStripTags));
                    break;
                  case n2.INSERT_AS_TEXT:
                    e4 = (0, l.htmlspecialchars)(e4);
                }
                (0, d.sX)(t5, this.j, e4);
              }
              onProcessPasteReplaceNl2Br(t5, e4, i4) {
                if (i4 === n2.TEXT_PLAIN + ";" && !(0, l.isHTML)(e4)) return (0, l.nl2br)(e4);
              }
            }
            (0, o3.Cg)([r.autobind], u.prototype, "onPaste", null), (0, o3.Cg)([r.autobind], u.prototype, "onProcessPasteReplaceNl2Br", null), a.fg.add("paste", u);
          }, 50248: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.showPlaceholder = true, o3.T.prototype.placeholder = "Type something", o3.T.prototype.useInputsPlaceholder = true;
          }, 225: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(71274), c = i3(26150), d = i3(38322), u = i3(29866);
            i3(50248);
            class h extends u.k {
              constructor() {
                super(...arguments), this.addNativeListeners = () => {
                  this.j.e.off(this.j.editor, "input.placeholder keydown.placeholder").on(this.j.editor, "input.placeholder keydown.placeholder", this.toggle);
                }, this.addEvents = () => {
                  const t5 = this.j;
                  t5.o.useInputsPlaceholder && t5.element.hasAttribute("placeholder") && (this.placeholderElm.innerHTML = (0, c.C)(t5.element, "placeholder") || ""), t5.e.fire("placeholder", this.placeholderElm.innerHTML), t5.e.off(".placeholder").on("changePlace.placeholder", this.addNativeListeners).on("change.placeholder focus.placeholder keyup.placeholder mouseup.placeholder keydown.placeholder mousedown.placeholder afterSetMode.placeholder changePlace.placeholder", this.toggle).on(window, "load", this.toggle), this.addNativeListeners(), this.toggle();
                };
              }
              afterInit(t5) {
                t5.o.showPlaceholder && (this.placeholderElm = t5.c.fromHTML(`<span data-ref="placeholder" style="display: none;" class="jodit-placeholder">${t5.i18n(t5.o.placeholder)}</span>`), "rtl" === t5.o.direction && (this.placeholderElm.style.right = "0px", this.placeholderElm.style.direction = "rtl"), t5.e.on("readonly", (t6) => {
                  t6 ? this.hide() : this.toggle();
                }).on("changePlace", this.addEvents), this.addEvents());
              }
              show() {
                const t5 = this.j;
                if (t5.o.readonly) return;
                let e4 = 0, i4 = 0;
                const o4 = t5.s.current(), n3 = o4 && s.J.closest(o4, s.J.isBlock, t5.editor) || t5.editor, r2 = t5.ew.getComputedStyle(n3), a2 = t5.ew.getComputedStyle(t5.editor);
                t5.workplace.appendChild(this.placeholderElm);
                const { firstChild: c2 } = t5.editor;
                if (s.J.isElement(c2) && !(0, l.r)(c2)) {
                  const o5 = t5.ew.getComputedStyle(c2);
                  e4 = parseInt(o5.getPropertyValue("margin-top"), 10), i4 = parseInt(o5.getPropertyValue("margin-left"), 10), this.placeholderElm.style.fontSize = parseInt(o5.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = o5.getPropertyValue("line-height");
                } else this.placeholderElm.style.fontSize = parseInt(r2.getPropertyValue("font-size"), 10) + "px", this.placeholderElm.style.lineHeight = r2.getPropertyValue("line-height");
                (0, d.A)(this.placeholderElm, { display: "block", textAlign: r2.getPropertyValue("text-align"), paddingTop: parseInt(a2.paddingTop, 10) + "px", paddingLeft: parseInt(a2.paddingLeft, 10) + "px", paddingRight: parseInt(a2.paddingRight, 10) + "px", marginTop: Math.max(parseInt(r2.getPropertyValue("margin-top"), 10), e4), marginLeft: Math.max(parseInt(r2.getPropertyValue("margin-left"), 10), i4) });
              }
              hide() {
                s.J.safeRemove(this.placeholderElm);
              }
              toggle() {
                const t5 = this.j;
                t5.editor && !t5.isInDestruct && (t5.getRealMode() === n2.MODE_WYSIWYG && function(t6) {
                  var e4;
                  if (!t6.firstChild) return true;
                  const i4 = t6.firstChild;
                  if (n2.INSEPARABLE_TAGS.has(null === (e4 = i4.nodeName) || void 0 === e4 ? void 0 : e4.toLowerCase()) || /^(TABLE)$/i.test(i4.nodeName)) return false;
                  const o4 = s.J.next(i4, (t7) => t7 && !s.J.isEmptyTextNode(t7), t6);
                  return s.J.isText(i4) && !o4 ? s.J.isEmptyTextNode(i4) : !o4 && s.J.each(i4, (t7) => !(s.J.isLeaf(t7) || s.J.isList(t7)) && (s.J.isEmpty(t7) || s.J.isTag(t7, "br")));
                }(t5.editor) ? this.show() : this.hide());
              }
              beforeDestruct(t5) {
                this.hide(), t5.e.off(".placeholder").off(window, "load", this.toggle);
              }
            }
            (0, o3.Cg)([(0, r.debounce)((t5) => t5.defaultTimeout / 10, true)], h.prototype, "toggle", null), a.fg.add("placeholder", h);
          }, 81089: function(t4, e3, i3) {
            "use strict";
            i3(56298).fg.add("poweredByJodit", function(t5) {
              const { o: e4 } = t5;
              e4.hidePoweredByJodit || e4.inline || !(e4.showCharsCounter || e4.showWordsCounter || e4.showXPathInStatusbar) || t5.hookStatus("ready", () => {
                t5.statusbar.append(t5.create.fromHTML('<a\n						tabindex="-1"\n						style="text-transform: uppercase"\n						class="jodit-status-bar-link"\n						target="_blank"\n						href="https://xdsoft.net/jodit/">\n							Powered by Jodit\n						</a>'), true);
              });
            });
          }, 44921: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(98434);
            i3(36115).T.prototype.controls.preview = { icon: "eye", command: "preview", mode: o3.MODE_SOURCE + o3.MODE_WYSIWYG, tooltip: "Preview" }, n2.fg.add("preview", function(t5) {
              t5.registerButton({ name: "preview" }), t5.registerCommand("preview", (e4, i4, o4) => {
                const n3 = t5.dlg();
                n3.setSize(1024, 600).open("", t5.i18n("Preview")).setModal(true);
                const [, s] = (0, r.u)(t5, o4, "px", n3.getElm("content"));
                n3.e.on(n3, "afterClose", s);
              });
            });
          }, 11131: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Y: function() {
              return n2;
            } });
            var o3 = i3(42448);
            function n2(t5) {
              const e4 = (t6, e5 = t6.ownerDocument.styleSheets) => (0, o3.$)(e5).map((t7) => {
                try {
                  return (0, o3.$)(t7.cssRules);
                } catch (t8) {
                }
                return [];
              }).flat().filter((e6) => {
                try {
                  return Boolean(e6 && t6.matches(e6.selectorText));
                } catch (t7) {
                }
                return false;
              });
              class i4 {
                constructor(i5, o4, n3) {
                  this.css = {};
                  const r = n3 || {}, s = (e5) => {
                    const i6 = e5.selectorText.split(",").map((t6) => t6.trim()).sort().join(",");
                    false === Boolean(this.css[i6]) && (this.css[i6] = {});
                    const o5 = e5.style.cssText.split(/;(?![A-Za-z0-9])/);
                    for (let e6 = 0; o5.length > e6; e6++) {
                      if (!o5[e6]) continue;
                      const n4 = o5[e6].split(":");
                      n4[0] = n4[0].trim(), n4[1] = n4[1].trim(), this.css[i6][n4[0]] = n4[1].replace(/var\(([^)]+)\)/g, (e7, i7) => {
                        const [o6, n5] = i7.split(",");
                        return (t5.ew.getComputedStyle(t5.editor).getPropertyValue(o6.trim()) || n5 || e7).trim();
                      });
                    }
                  };
                  (() => {
                    const n4 = i5.innerHeight, a = o4.createTreeWalker(t5.editor, NodeFilter.SHOW_ELEMENT, () => NodeFilter.FILTER_ACCEPT);
                    for (; a.nextNode(); ) {
                      const t6 = a.currentNode;
                      if (n4 > t6.getBoundingClientRect().top || r.scanFullPage) {
                        const i6 = e4(t6);
                        if (i6) for (let t7 = 0; i6.length > t7; t7++) s(i6[t7]);
                      }
                    }
                  })();
                }
                generateCSS() {
                  let t6 = "";
                  for (const e5 in this.css) if (!/:not\(/.test(e5)) {
                    t6 += e5 + " { ";
                    for (const i5 in this.css[e5]) t6 += i5 + ": " + this.css[e5][i5] + "; ";
                    t6 += "}\n";
                  }
                  return t6;
                }
              }
              try {
                return new i4(t5.ew, t5.ed, { scanFullPage: true }).generateCSS();
              } catch (t6) {
              }
              return "";
            }
          }, 78757: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(71842), r = i3(56298), s = i3(17527), a = i3(98434), l = i3(931), c = i3(11131), d = i3(59827), u = i3.n(d), h = i3(36115);
            l.I.set("print", u()), h.T.prototype.controls.print = { exec: (t5) => {
              const e4 = t5.create.element("iframe");
              Object.assign(e4.style, { position: "fixed", right: 0, bottom: 0, width: 0, height: 0, border: 0 }), (0, r.My)(t5, h.T).appendChild(e4);
              const i4 = () => {
                t5.e.off(t5.ow, "mousemove", i4), n2.J.safeRemove(e4);
              }, o4 = e4.contentWindow;
              if (o4) {
                t5.e.on(o4, "onbeforeunload onafterprint", i4).on(t5.ow, "mousemove", i4), t5.o.iframe ? (t5.e.fire("generateDocumentStructure.iframe", o4.document, t5), o4.document.body.innerHTML = t5.value) : (o4.document.write('<!doctype html><html lang="' + (0, s.e)(t5.o.language) + '"><head><title></title></head><style>' + (0, c.Y)(t5) + "</style><body></body></html>"), o4.document.close(), (0, a.u)(t5, void 0, "px", o4.document.body));
                const e5 = o4.document.createElement("style");
                e5.innerHTML = "@media print {\n					body {\n							-webkit-print-color-adjust: exact;\n					}\n			}", o4.document.head.appendChild(e5), o4.focus(), o4.print();
              }
            }, mode: o3.MODE_SOURCE + o3.MODE_WYSIWYG, tooltip: "Print" }, r.fg.add("print", function(t5) {
              t5.registerButton({ name: "print" });
            });
          }, 60189: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(56298), r = i3(29866), s = i3(931), a = i3(34045), l = i3.n(a), c = i3(39199), d = i3.n(c), u = i3(36115);
            s.I.set("redo", l()).set("undo", d()), u.T.prototype.controls.redo = { mode: o3.MODE_SPLIT, isDisabled: (t5) => !t5.history.canRedo(), tooltip: "Redo" }, u.T.prototype.controls.undo = { mode: o3.MODE_SPLIT, isDisabled: (t5) => !t5.history.canUndo(), tooltip: "Undo" }, n2.fg.add("redoUndo", class extends r.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "undo", group: "history" }, { name: "redo", group: "history" }];
              }
              beforeDestruct() {
              }
              afterInit(t5) {
                const e4 = (e5) => (t5.history[e5](), false);
                t5.registerCommand("redo", { exec: e4, hotkeys: ["ctrl+y", "ctrl+shift+z", "cmd+y", "cmd+shift+z"] }), t5.registerCommand("undo", { exec: e4, hotkeys: ["ctrl+z", "cmd+z"] });
              }
            });
          }, 36001: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.tableAllowCellResize = true;
          }, 39147: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(37435);
            i3(36001);
            const d = "table_processor_observer-resize";
            class u extends c.Plugin {
              constructor() {
                super(...arguments), this.selectMode = false, this.resizeDelta = 0, this.createResizeHandle = () => {
                  this.resizeHandler || (this.resizeHandler = this.j.c.div("jodit-table-resizer"), this.j.e.on(this.resizeHandler, "mousedown.table touchstart.table", this.onHandleMouseDown).on(this.resizeHandler, "mouseenter.table", () => {
                    this.j.async.clearTimeout(this.hideTimeout);
                  }));
                }, this.hideTimeout = 0, this.drag = false, this.minX = 0, this.maxX = 0, this.startX = 0;
              }
              get module() {
                return this.j.getInstance("Table", this.j.o);
              }
              get isRTL() {
                return "rtl" === this.j.o.direction;
              }
              showResizeHandle() {
                this.j.async.clearTimeout(this.hideTimeout), this.j.workplace.appendChild(this.resizeHandler);
              }
              hideResizeHandle() {
                this.hideTimeout = this.j.async.setTimeout(() => {
                  s.J.safeRemove(this.resizeHandler);
                }, { timeout: this.j.defaultTimeout, label: "hideResizer" });
              }
              onHandleMouseDown(t5) {
                if (this.j.isLocked) return;
                this.drag = true, this.j.e.on(this.j.ow, "mouseup.resize-cells touchend.resize-cells", this.onMouseUp).on(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.startX = t5.clientX, this.j.lock(d), this.resizeHandler.classList.add("jodit-table-resizer_moved");
                let e4, i4 = this.workTable.getBoundingClientRect();
                if (this.minX = 0, this.maxX = 1e6, null != this.wholeTable) i4 = this.workTable.parentNode.getBoundingClientRect(), this.minX = i4.left, this.maxX = this.minX + i4.width;
                else {
                  const t6 = this.module.formalCoordinate(this.workTable, this.workCell, true);
                  this.module.formalMatrix(this.workTable, (i5, o4, r2) => {
                    t6[1] === r2 && (e4 = i5.getBoundingClientRect(), this.minX = Math.max(e4.left + n2.NEARBY / 2, this.minX)), t6[1] + (this.isRTL ? -1 : 1) === r2 && (e4 = i5.getBoundingClientRect(), this.maxX = Math.min(e4.left + e4.width - n2.NEARBY / 2, this.maxX));
                  });
                }
                return false;
              }
              onMouseMove(t5) {
                if (!this.drag) return;
                this.j.e.fire("closeAllPopups");
                let e4 = t5.clientX;
                const i4 = (0, l.offset)(this.resizeHandler.parentNode || this.j.od.documentElement, this.j, this.j.od, true);
                this.minX > e4 && (e4 = this.minX), e4 > this.maxX && (e4 = this.maxX), this.resizeDelta = e4 - this.startX + (this.j.o.iframe ? i4.left : 0), this.resizeHandler.style.left = e4 - (this.j.o.iframe ? 0 : i4.left) + "px";
                const o4 = this.j.s.sel;
                o4 && o4.removeAllRanges();
              }
              onMouseUp(t5) {
                (this.selectMode || this.drag) && (this.selectMode = false, this.j.unlock()), this.resizeHandler && this.drag && (this.drag = false, this.j.e.off(this.j.ew, "mousemove.table touchmove.table", this.onMouseMove), this.resizeHandler.classList.remove("jodit-table-resizer_moved"), this.startX !== t5.clientX && (null == this.wholeTable ? this.resizeColumns() : this.resizeTable()), this.j.synchronizeValues(), this.j.s.focus());
              }
              resizeColumns() {
                const t5 = this.resizeDelta, e4 = [], i4 = this.module;
                i4.setColumnWidthByDelta(this.workTable, i4.formalCoordinate(this.workTable, this.workCell, true)[1], t5, true, e4);
                const o4 = (0, l.call)(this.isRTL ? s.J.prev : s.J.next, this.workCell, s.J.isCell, this.workCell.parentNode);
                i4.setColumnWidthByDelta(this.workTable, i4.formalCoordinate(this.workTable, o4)[1], -t5, false, e4);
              }
              resizeTable() {
                const t5 = this.resizeDelta * (this.isRTL ? -1 : 1), e4 = this.workTable.offsetWidth, i4 = (0, l.getContentWidth)(this.workTable.parentNode, this.j.ew), o4 = !this.wholeTable;
                if (this.isRTL ? !o4 : o4) this.workTable.style.width = (e4 + t5) / i4 * 100 + "%";
                else {
                  const o5 = this.isRTL ? "marginRight" : "marginLeft", n3 = parseInt(this.j.ew.getComputedStyle(this.workTable)[o5] || "0", 10);
                  this.workTable.style.width = (e4 - t5) / i4 * 100 + "%", this.workTable.style[o5] = (n3 + t5) / i4 * 100 + "%";
                }
              }
              setWorkCell(t5, e4 = null) {
                this.wholeTable = e4, this.workCell = t5, this.workTable = s.J.up(t5, (t6) => s.J.isTag(t6, "table"), this.j.editor);
              }
              calcHandlePosition(t5, e4, i4 = 0, o4 = 0) {
                const r2 = (0, l.offset)(e4, this.j, this.j.ed);
                if (i4 > n2.NEARBY && r2.width - n2.NEARBY > i4) return void this.hideResizeHandle();
                const a2 = (0, l.offset)(this.j.workplace, this.j, this.j.od, true), c2 = (0, l.offset)(t5, this.j, this.j.ed);
                if (this.resizeHandler.style.left = (i4 > n2.NEARBY ? r2.left + r2.width : r2.left) - a2.left + o4 + "px", Object.assign(this.resizeHandler.style, { height: c2.height + "px", top: c2.top - a2.top + "px" }), this.showResizeHandle(), i4 > n2.NEARBY) {
                  const t6 = (0, l.call)(this.isRTL ? s.J.prev : s.J.next, e4, s.J.isCell, e4.parentNode);
                  this.setWorkCell(e4, !!t6 && null);
                } else {
                  const t6 = (0, l.call)(this.isRTL ? s.J.next : s.J.prev, e4, s.J.isCell, e4.parentNode);
                  this.setWorkCell(t6 || e4, !t6 || null);
                }
              }
              afterInit(t5) {
                t5.o.tableAllowCellResize && t5.e.off(this.j.ow, ".resize-cells").off(".resize-cells").on("change.resize-cells afterCommand.resize-cells afterSetMode.resize-cells", () => {
                  (0, l.$$)("table", t5.editor).forEach(this.observe);
                }).on(this.j.ow, "scroll.resize-cells", () => {
                  if (!this.drag) return;
                  const e4 = s.J.up(this.workCell, (t6) => s.J.isTag(t6, "table"), t5.editor);
                  if (e4) {
                    const t6 = e4.getBoundingClientRect();
                    this.resizeHandler.style.top = t6.top + "px";
                  }
                }).on("beforeSetMode.resize-cells", () => {
                  const e4 = this.module;
                  e4.getAllSelectedCells().forEach((i4) => {
                    e4.removeSelection(i4), e4.normalizeTable(s.J.closest(i4, "table", t5.editor));
                  });
                });
              }
              observe(t5) {
                (0, l.dataBind)(t5, d) || ((0, l.dataBind)(t5, d, true), this.j.e.on(t5, "mouseleave.resize-cells", (t6) => {
                  this.resizeHandler && this.resizeHandler !== t6.relatedTarget && this.hideResizeHandle();
                }).on(t5, "mousemove.resize-cells touchmove.resize-cells", this.j.async.throttle((e4) => {
                  if (this.j.isLocked) return;
                  const i4 = s.J.up(e4.target, s.J.isCell, t5);
                  i4 && this.calcHandlePosition(t5, i4, e4.offsetX);
                }, { timeout: this.j.defaultTimeout })), this.createResizeHandle());
              }
              beforeDestruct(t5) {
                t5.events && (t5.e.off(this.j.ow, ".resize-cells"), t5.e.off(".resize-cells"));
              }
            }
            (0, o3.Cg)([r.autobind], u.prototype, "onHandleMouseDown", null), (0, o3.Cg)([r.autobind], u.prototype, "onMouseMove", null), (0, o3.Cg)([r.autobind], u.prototype, "onMouseUp", null), (0, o3.Cg)([r.autobind], u.prototype, "observe", null), a.fg.add("resizeCells", u);
          }, 57362: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.allowResizeX = false, o3.T.prototype.allowResizeY = true;
          }, 76693: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(71842), s = i3(56298), a = i3(71005), l = i3(53048);
            i3(57362);
            let c = class extends a.k {
              constructor() {
                super(...arguments), this.isResized = false, this.start = { x: 0, y: 0, w: 0, h: 0 }, this.handle = this.j.c.div("jodit-editor__resize", l.In.get("resize_handler"));
              }
              afterInit(t5) {
                const { height: e4, width: i4, allowResizeX: o4 } = t5.o;
                let { allowResizeY: n3 } = t5.o;
                "auto" === e4 && "auto" !== i4 && (n3 = false), "auto" === e4 && "auto" === i4 || !o4 && !n3 || (t5.statusbar.setMod("resize-handle", true), t5.e.on("toggleFullSize.resizeHandler", () => {
                  this.handle.style.display = t5.isFullSize ? "none" : "block";
                }).on(this.handle, "mousedown touchstart", this.onHandleResizeStart).on(t5.ow, "mouseup touchend", this.onHandleResizeEnd), t5.container.appendChild(this.handle));
              }
              onHandleResizeStart(t5) {
                this.isResized = true, this.start.x = t5.clientX, this.start.y = t5.clientY, this.start.w = this.j.container.offsetWidth, this.start.h = this.j.container.offsetHeight, this.j.lock(), this.j.e.on(this.j.ow, "mousemove touchmove", this.onHandleResize), t5.preventDefault();
              }
              onHandleResize(t5) {
                this.isResized && (this.j.o.allowResizeY && this.j.e.fire("setHeight", this.start.h + t5.clientY - this.start.y), this.j.o.allowResizeX && this.j.e.fire("setWidth", this.start.w + t5.clientX - this.start.x), this.j.e.fire("resize"));
              }
              onHandleResizeEnd() {
                this.isResized && (this.isResized = false, this.j.e.off(this.j.ow, "mousemove touchmove", this.onHandleResize), this.j.unlock());
              }
              beforeDestruct() {
                r.J.safeRemove(this.handle), this.j.e.off(this.j.ow, "mouseup touchsend", this.onHandleResizeEnd);
              }
            };
            c.requires = ["size"], c = (0, o3.Cg)([n2.autobind], c), s.fg.add("resizeHandler", c);
          }, 69505: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.allowResizeTags = /* @__PURE__ */ new Set(["img", "iframe", "table", "jodit"]), o3.T.prototype.resizer = { showSize: true, hideSizeTimeout: 1e3, forImageChangeAttributes: true, min_width: 10, min_height: 10, useAspectRatio: /* @__PURE__ */ new Set(["img"]) };
          }, 6857: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(29866);
            i3(69505);
            const d = "__jodit-resizer_binded";
            class u extends c.k {
              constructor() {
                super(...arguments), this.LOCK_KEY = "resizer", this.element = null, this.isResizeMode = false, this.isShown = false, this.startX = 0, this.startY = 0, this.width = 0, this.height = 0, this.ratio = 0, this.rect = this.j.c.fromHTML(`<div title="${this.j.i18n("Press Alt for custom resizing")}" class="jodit-resizer">
				<div class="jodit-resizer__top-left"></div>
				<div class="jodit-resizer__top-right"></div>
				<div class="jodit-resizer__bottom-right"></div>
				<div class="jodit-resizer__bottom-left"></div>
				<span>100x100</span>
			</div>`), this.sizeViewer = this.rect.getElementsByTagName("span")[0], this.pointerX = 0, this.pointerY = 0, this.isAltMode = false, this.onClickElement = (t5) => {
                  this.isResizeMode || this.element === t5 && this.isShown || (this.element = t5, this.show(), s.J.isTag(this.element, "img") && !this.element.complete && this.j.e.one(this.element, "load", this.updateSize));
                }, this.updateSize = () => {
                  if (!this.isInDestruct && this.isShown && this.element && this.rect) {
                    const t5 = this.getWorkplacePosition(), e4 = (0, l.offset)(this.element, this.j, this.j.ed), i4 = parseInt(this.rect.style.left || "0", 10), o4 = parseInt(this.rect.style.top || "0", 10), n3 = e4.top - t5.top, r2 = e4.left - t5.left;
                    o4 === n3 && i4 === r2 && this.rect.offsetWidth === this.element.offsetWidth && this.rect.offsetHeight === this.element.offsetHeight || ((0, l.css)(this.rect, { top: n3, left: r2, width: this.element.offsetWidth, height: this.element.offsetHeight }), this.j.events && (this.j.e.fire(this.element, "changesize"), isNaN(i4) || this.j.e.fire("resize")));
                  }
                }, this.hideSizeViewer = () => {
                  this.sizeViewer.style.opacity = "0";
                };
              }
              afterInit(t5) {
                (0, l.$$)("div", this.rect).forEach((e4) => {
                  t5.e.on(e4, "mousedown.resizer touchstart.resizer", this.onStartResizing.bind(this, e4));
                }), a.RR.on("hideHelpers", this.hide), t5.e.on("readonly", (t6) => {
                  t6 && this.hide();
                }).on("afterInit changePlace", this.addEventListeners.bind(this)).on("afterGetValueFromEditor.resizer", (t6) => {
                  const e4 = /<jodit[^>]+data-jodit_iframe_wrapper[^>]+>(.*?<iframe[^>]*>.*?<\/iframe>.*?)<\/jodit>/gi;
                  e4.test(t6.value) && (t6.value = t6.value.replace(e4, "$1"));
                }), this.addEventListeners(), this.__onChangeEditor();
              }
              onEditorClick(t5) {
                let e4 = t5.target;
                const { editor: i4, options: { allowResizeTags: o4 } } = this.j;
                for (; e4 && e4 !== i4; ) {
                  if (s.J.isTag(e4, o4)) return this.__bind(e4), void this.onClickElement(e4);
                  e4 = e4.parentNode;
                }
              }
              addEventListeners() {
                const t5 = this.j;
                t5.e.off(t5.editor, ".resizer").off(t5.ow, ".resizer").on(t5.editor, "keydown.resizer", (t6) => {
                  this.isShown && t6.key === n2.KEY_DELETE && this.element && !s.J.isTag(this.element, "table") && this.onDelete(t6);
                }).on(t5.ow, "resize.resizer", this.updateSize).on("resize.resizer", this.updateSize).on([t5.ow, t5.editor], "scroll.resizer", () => {
                  this.isShown && !this.isResizeMode && this.hide();
                }).on(t5.ow, "keydown.resizer", this.onKeyDown).on(t5.ow, "keyup.resizer", this.onKeyUp).on(t5.ow, "mouseup.resizer touchend.resizer", this.onClickOutside);
              }
              onStartResizing(t5, e4) {
                if (!this.element || !this.element.parentNode) return this.hide(), false;
                this.handle = t5, e4.cancelable && e4.preventDefault(), e4.stopImmediatePropagation(), this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.ratio = this.width / this.height, this.isResizeMode = true, this.startX = e4.clientX, this.startY = e4.clientY, this.pointerX = e4.clientX, this.pointerY = e4.clientY;
                const { j: i4 } = this;
                i4.e.fire("hidePopup"), i4.lock(this.LOCK_KEY), i4.e.on(i4.ow, "mousemove.resizer touchmove.resizer", this.onResize);
              }
              onEndResizing() {
                const { j: t5 } = this;
                t5.unlock(), this.isResizeMode = false, this.isAltMode = false, t5.synchronizeValues(), t5.e.off(t5.ow, "mousemove.resizer touchmove.resizer", this.onResize);
              }
              onResize(t5) {
                if (this.isResizeMode) {
                  if (!this.element) return;
                  let e4, i4;
                  if (this.pointerX = t5.clientX, this.pointerY = t5.clientY, this.j.options.iframe) {
                    const o5 = this.getWorkplacePosition();
                    e4 = t5.clientX + o5.left - this.startX, i4 = t5.clientY + o5.top - this.startY;
                  } else e4 = this.pointerX - this.startX, i4 = this.pointerY - this.startY;
                  const o4 = this.handle.className;
                  let n3 = 0, r2 = 0;
                  const a2 = this.j.o.resizer.useAspectRatio;
                  !this.isAltMode && (true === a2 || a2 && s.J.isTag(this.element, a2)) ? (e4 ? (n3 = this.width + (o4.match(/left/) ? -1 : 1) * e4, r2 = Math.round(n3 / this.ratio)) : (r2 = this.height + (o4.match(/top/) ? -1 : 1) * i4, n3 = Math.round(r2 * this.ratio)), n3 > (0, l.innerWidth)(this.j.editor, this.j.ow) && (n3 = (0, l.innerWidth)(this.j.editor, this.j.ow), r2 = Math.round(n3 / this.ratio))) : (n3 = this.width + (o4.match(/left/) ? -1 : 1) * e4, r2 = this.height + (o4.match(/top/) ? -1 : 1) * i4), n3 > this.j.o.resizer.min_width && this.applySize(this.element, "width", this.rect.parentNode.offsetWidth > n3 ? n3 : "100%"), r2 > this.j.o.resizer.min_height && this.applySize(this.element, "height", r2), this.updateSize(), this.showSizeViewer(this.element.offsetWidth, this.element.offsetHeight), t5.stopImmediatePropagation();
                }
              }
              onKeyDown(t5) {
                this.isAltMode = t5.key === n2.KEY_ALT, !this.isAltMode && this.isResizeMode && this.onEndResizing();
              }
              onKeyUp() {
                this.isAltMode && this.isResizeMode && this.element && (this.width = this.element.offsetWidth, this.height = this.element.offsetHeight, this.ratio = this.width / this.height, this.startX = this.pointerX, this.startY = this.pointerY), this.isAltMode = false;
              }
              onClickOutside(t5) {
                if (this.isShown) {
                  if (!this.isResizeMode) return this.hide();
                  t5.stopImmediatePropagation(), this.onEndResizing();
                }
              }
              getWorkplacePosition() {
                return (0, l.offset)(this.rect.parentNode || this.j.od.documentElement, this.j, this.j.od, true);
              }
              applySize(t5, e4, i4) {
                const o4 = s.J.isImage(t5) && this.j.o.resizer.forImageChangeAttributes;
                o4 && (0, l.attr)(t5, e4, i4), o4 && !t5.style[e4] || (0, l.css)(t5, e4, i4);
              }
              onDelete(t5) {
                this.element && ("JODIT" !== this.element.tagName ? this.j.s.select(this.element) : (s.J.safeRemove(this.element), this.hide(), t5.preventDefault()));
              }
              __onChangeEditor() {
                this.isShown && (this.element && this.element.parentNode ? this.updateSize() : this.hide()), (0, l.$$)("iframe", this.j.editor).forEach(this.__bind);
              }
              __bind(t5) {
                if (!s.J.isHTMLElement(t5) || !this.j.o.allowResizeTags.has(t5.tagName.toLowerCase()) || (0, l.dataBind)(t5, d)) return;
                let e4;
                if ((0, l.dataBind)(t5, d, true), s.J.isTag(t5, "iframe")) {
                  const i4 = t5;
                  s.J.isHTMLElement(t5.parentNode) && (0, l.attr)(t5.parentNode, "-jodit_iframe_wrapper") ? t5 = t5.parentNode : (e4 = this.j.createInside.element("jodit", { "data-jodit-temp": 1, contenteditable: false, draggable: true, "data-jodit_iframe_wrapper": 1 }), (0, l.attr)(e4, "style", (0, l.attr)(t5, "style")), (0, l.css)(e4, { display: "inline-block" === t5.style.display ? "inline-block" : "block", width: t5.offsetWidth, height: t5.offsetHeight }), t5.parentNode && t5.parentNode.insertBefore(e4, t5), e4.appendChild(t5), this.j.e.on(e4, "click", () => {
                    (0, l.attr)(e4, "data-jodit-wrapper_active", true);
                  }), t5 = e4), this.j.e.off(t5, "mousedown.select touchstart.select").on(t5, "mousedown.select touchstart.select", () => {
                    this.j.s.select(t5);
                  }).off(t5, "changesize").on(t5, "changesize", () => {
                    i4.setAttribute("width", t5.offsetWidth + "px"), i4.setAttribute("height", t5.offsetHeight + "px");
                  });
                }
                this.j.e.on(t5, "dragstart", this.hide), !n2.IS_ES_NEXT && n2.IS_IE && this.j.e.on(t5, "mousedown", (e5) => {
                  s.J.isTag(t5, "img") && e5.preventDefault();
                });
              }
              showSizeViewer(t5, e4) {
                this.j.o.resizer.showSize && (this.sizeViewer.offsetWidth > t5 || this.sizeViewer.offsetHeight > e4 ? this.hideSizeViewer() : (this.sizeViewer.style.opacity = "1", this.sizeViewer.textContent = `${t5} x ${e4}`, this.j.async.setTimeout(this.hideSizeViewer, { timeout: this.j.o.resizer.hideSizeTimeout, label: "hideSizeViewer" })));
              }
              show() {
                this.j.o.readonly || this.isShown || (this.isShown = true, this.rect.parentNode || ((0, l.markOwner)(this.j, this.rect), this.j.workplace.appendChild(this.rect)), this.j.isFullSize && (this.rect.style.zIndex = (0, l.css)(this.j.container, "zIndex").toString()), this.updateSize());
              }
              hide() {
                this.isResizeMode || (this.isResizeMode = false, this.isShown = false, this.element = null, s.J.safeRemove(this.rect), (0, l.$$)("[data-jodit-wrapper_active='true']", this.j.editor).forEach((t5) => (0, l.attr)(t5, "data-jodit-wrapper_active", false)));
              }
              beforeDestruct(t5) {
                this.hide(), a.RR.off("hideHelpers", this.hide), t5.e.off(this.j.ow, ".resizer").off(".resizer");
              }
            }
            (0, o3.Cg)([(0, r.watch)(":click")], u.prototype, "onEditorClick", null), (0, o3.Cg)([r.autobind], u.prototype, "onStartResizing", null), (0, o3.Cg)([r.autobind], u.prototype, "onEndResizing", null), (0, o3.Cg)([r.autobind], u.prototype, "onResize", null), (0, o3.Cg)([r.autobind], u.prototype, "onKeyDown", null), (0, o3.Cg)([r.autobind], u.prototype, "onKeyUp", null), (0, o3.Cg)([r.autobind], u.prototype, "onClickOutside", null), (0, o3.Cg)([(0, r.watch)(":change")], u.prototype, "__onChangeEditor", null), (0, o3.Cg)([r.autobind], u.prototype, "__bind", null), (0, o3.Cg)([r.autobind, (0, r.watch)(":hideResizer")], u.prototype, "hide", null), a.fg.add("resizer", u);
          }, 78593: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(21917), r = i3.n(n2), s = i3(36115);
            s.T.prototype.useSearch = true, s.T.prototype.search = { lazyIdleTimeout: 0, useCustomHighlightAPI: void 0 !== window.Highlight }, o3.I.set("search", r()), s.T.prototype.controls.find = { tooltip: "Find", icon: "search", exec(t5, e4, { control: i4 }) {
              switch (i4.args && i4.args[0]) {
                case "findPrevious":
                  t5.e.fire("searchPrevious");
                  break;
                case "findNext":
                  t5.e.fire("searchNext");
                  break;
                case "replace":
                  t5.execCommand("openReplaceDialog");
                  break;
                default:
                  t5.execCommand("openSearchDialog");
              }
            }, list: { search: "Find", findNext: "Find Next", findPrevious: "Find Previous", replace: "Replace" }, childTemplate: (t5, e4, i4) => i4 };
          }, 89568: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { IJ: function() {
              return l;
            }, Tz: function() {
              return c;
            }, _B: function() {
              return s;
            }, zy: function() {
              return a;
            } });
            var o3 = i3(55186), n2 = i3(58720);
            const r = "jd-tmp-selection";
            function s(t5, e4, i4, n3, s2) {
              if (null == e4.startContainer.nodeValue || null == e4.endContainer.nodeValue) return;
              if (t5.o.search.useCustomHighlightAPI && void 0 !== window.Highlight) {
                const o4 = [e4, ...i4].map((e5) => {
                  const i5 = t5.selection.createRange();
                  return i5.setStart(e5.startContainer, e5.startOffset), i5.setEnd(e5.endContainer, e5.endOffset), i5;
                }), n4 = new Highlight(...o4);
                return CSS.highlights.clear(), CSS.highlights.set("jodit-search-result", n4), void (i4.length = 0);
              }
              const a2 = n3.element("span", { [r]: true });
              o3.J.markTemporary(a2);
              const l2 = e4.startContainer.nodeValue;
              let c2 = 0;
              if (0 !== e4.startOffset) {
                const t6 = n3.text(l2.substring(0, e4.startOffset));
                e4.startContainer.nodeValue = l2.substring(e4.startOffset), o3.J.before(e4.startContainer, t6), e4.startContainer === e4.endContainer && (c2 = e4.startOffset, e4.endOffset -= c2), e4.startOffset = 0;
              }
              const d = e4.endContainer.nodeValue;
              if (e4.endOffset !== d.length) {
                const t6 = n3.text(d.substring(e4.endOffset));
                e4.endContainer.nodeValue = d.substring(0, e4.endOffset), o3.J.after(e4.endContainer, t6);
                for (const o4 of i4) {
                  if (o4.startContainer !== e4.endContainer) break;
                  o4.startContainer = t6, o4.startOffset = o4.startOffset - e4.endOffset - c2, o4.endContainer === e4.endContainer && (o4.endContainer = t6, o4.endOffset = o4.endOffset - e4.endOffset - c2);
                }
                e4.endOffset = e4.endContainer.nodeValue.length;
              }
              let u = e4.startContainer;
              do {
                if (!u) break;
                if (!o3.J.isText(u) || o3.J.isElement(h = u.parentNode) && h.hasAttribute(r) || o3.J.wrap(u, a2.cloneNode(), n3), u === e4.endContainer) break;
                let t6 = u.firstChild || u.nextSibling;
                if (!t6) {
                  for (; u && !u.nextSibling && u !== s2; ) u = u.parentNode;
                  t6 = null == u ? void 0 : u.nextSibling;
                }
                u = t6;
              } while (u && u !== s2);
              var h;
            }
            function a(t5) {
              return (0, n2.$$)(`[${r}]`, t5);
            }
            function l(t5) {
              a(t5).forEach((t6) => o3.J.unwrap(t6));
            }
            function c(t5) {
              return t5.replace(RegExp(`<span[^>]+${r}[^>]+>(.*?)</span>`, "g"), "$1");
            }
          }, 78817: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { IJ: function() {
              return o3.IJ;
            }, QN: function() {
              return n2.Q;
            }, Tz: function() {
              return o3.Tz;
            }, _B: function() {
              return o3._B;
            }, zy: function() {
              return o3.zy;
            } });
            var o3 = i3(89568), n2 = i3(30621);
          }, 30621: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { Q: function() {
              return n2;
            } });
            var o3 = i3(67975);
            class n2 {
              constructor(t5 = o3.H) {
                this.searchIndex = t5, this.queue = [], this.value = "";
              }
              add(t5) {
                var e4;
                const i4 = (null !== (e4 = t5.nodeValue) && void 0 !== e4 ? e4 : "").toLowerCase();
                if (!i4.length) return;
                const o4 = this.value.length;
                this.queue.push({ startIndex: o4, endIndex: o4 + i4.length, node: t5 }), this.value += i4;
              }
              ranges(t5, e4 = 0) {
                const i4 = [];
                let o4 = e4, n3 = 0, r = 0;
                do {
                  if ([o4, n3] = this.searchIndex(t5, this.value, o4), -1 !== o4) {
                    let t6, e5, s = 0, a = 0;
                    for (let i5 = r; this.queue.length > i5; i5 += 1) if (!t6 && this.queue[i5].endIndex > o4 && (t6 = this.queue[i5].node, s = o4 - this.queue[i5].startIndex), t6 && this.queue[i5].endIndex >= o4 + n3) {
                      e5 = this.queue[i5].node, a = o4 + n3 - this.queue[i5].startIndex, r = i5;
                      break;
                    }
                    t6 && e5 && i4.push({ startContainer: t6, startOffset: s, endContainer: e5, endOffset: a }), o4 += n3;
                  }
                } while (-1 !== o4);
                return 0 === i4.length ? null : i4;
              }
            }
          }, 17343: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = (i3(17352), i3(22664)), r = i3(71842), s = i3(56298), a = i3(65147), l = i3(71005), c = (i3(78593), i3(78817)), d = i3(63064);
            class u extends l.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "find", group: "search" }], this.previousQuery = "", this.drawPromise = null, this.walker = null, this.walkerCount = null, this.cache = {}, this.wrapFrameRequest = 0;
              }
              get ui() {
                return new d.F(this.j);
              }
              async updateCounters() {
                this.ui.isOpened && (this.ui.count = await this.calcCounts(this.ui.query));
              }
              onPressReplaceButton() {
                this.findAndReplace(this.ui.query), this.updateCounters();
              }
              tryScrollToElement(t5) {
                let e4 = r.J.closest(t5, r.J.isElement, this.j.editor);
                e4 || (e4 = r.J.prev(t5, r.J.isElement, this.j.editor)), e4 && e4 !== this.j.editor && (0, a.scrollIntoViewIfNeeded)(e4, this.j.editor, this.j.ed);
              }
              async calcCounts(t5) {
                return (await this.findQueryBounds(t5, "walkerCount")).length;
              }
              async findQueryBounds(t5, e4) {
                let i4 = this[e4];
                return i4 && i4.break(), i4 = new r.p(this.j.async, { timeout: this.j.o.search.lazyIdleTimeout }), this[e4] = i4, this.find(i4, t5).catch((t6) => []);
              }
              async findAndReplace(t5) {
                const e4 = await this.findQueryBounds(t5, "walker");
                if (!e4.length) return false;
                let i4 = this.findCurrentIndexInRanges(e4, this.j.s.range);
                -1 === i4 && (i4 = 0);
                const o4 = e4[i4];
                if (o4) {
                  try {
                    const e5 = this.j.ed.createRange();
                    e5.setStart(o4.startContainer, o4.startOffset), e5.setEnd(o4.endContainer, o4.endOffset), e5.deleteContents();
                    const n3 = this.j.createInside.text(this.ui.replace);
                    r.J.safeInsertNode(e5, n3), (0, c.IJ)(this.j.editor), this.j.s.setCursorAfter(n3), this.tryScrollToElement(n3), this.cache = {}, this.ui.currentIndex = i4, await this.findAndSelect(t5, true).catch((t6) => null);
                  } finally {
                    this.j.synchronizeValues();
                  }
                  return this.j.e.fire("afterFindAndReplace"), true;
                }
                return false;
              }
              async findAndSelect(t5, e4) {
                var i4;
                const o4 = await this.findQueryBounds(t5, "walker");
                if (!o4.length) return false;
                this.previousQuery === t5 && (0, c.zy)(this.j.editor).length || (null === (i4 = this.drawPromise) || void 0 === i4 || i4.rejectCallback(), this.j.async.cancelAnimationFrame(this.wrapFrameRequest), (0, c.IJ)(this.j.editor), this.drawPromise = this.__drawSelectionRanges(o4)), this.previousQuery = t5;
                let n3 = this.ui.currentIndex - 1;
                n3 = -1 === n3 ? 0 : e4 ? n3 === o4.length - 1 ? 0 : n3 + 1 : 0 === n3 ? o4.length - 1 : n3 - 1, this.ui.currentIndex = n3 + 1;
                const r2 = o4[n3];
                if (r2) {
                  const e5 = this.j.ed.createRange();
                  try {
                    e5.setStart(r2.startContainer, r2.startOffset), e5.setEnd(r2.endContainer, r2.endOffset), this.j.s.selectRange(e5);
                  } catch (t6) {
                  }
                  return this.tryScrollToElement(r2.startContainer), await this.updateCounters(), await this.drawPromise, this.j.e.fire("afterFindAndSelect"), true;
                }
                return false;
              }
              findCurrentIndexInRanges(t5, e4) {
                return t5.findIndex((t6) => t6.startContainer === e4.startContainer && t6.startOffset === e4.startOffset && t6.endContainer === e4.startContainer && t6.endOffset === e4.endOffset);
              }
              async isValidCache(t5) {
                return (await t5).every((t6) => {
                  var e4, i4, o4, n3;
                  return t6.startContainer.isConnected && t6.startOffset <= (null !== (i4 = null === (e4 = t6.startContainer.nodeValue) || void 0 === e4 ? void 0 : e4.length) && void 0 !== i4 ? i4 : 0) && t6.endContainer.isConnected && t6.endOffset <= (null !== (n3 = null === (o4 = t6.endContainer.nodeValue) || void 0 === o4 ? void 0 : o4.length) && void 0 !== n3 ? n3 : 0);
                });
              }
              async find(t5, e4) {
                if (!e4.length) return [];
                const i4 = this.cache[e4];
                return i4 && await this.isValidCache(i4) ? i4 : (this.cache[e4] = this.j.async.promise((i5) => {
                  const o4 = new c.QN(this.j.o.search.fuzzySearch);
                  t5.on("break", () => {
                    i5([]);
                  }).on("visit", (t6) => (r.J.isText(t6) && o4.add(t6), false)).on("end", () => {
                    var t6;
                    i5(null !== (t6 = o4.ranges(e4)) && void 0 !== t6 ? t6 : []);
                  }).setWork(this.j.editor);
                }), this.cache[e4]);
              }
              __drawSelectionRanges(t5) {
                const { async: e4, createInside: i4, editor: o4 } = this.j;
                e4.cancelAnimationFrame(this.wrapFrameRequest);
                const n3 = [...t5];
                let r2, s2 = 0;
                return e4.promise((t6) => {
                  const a2 = () => {
                    do {
                      r2 = n3.shift(), r2 && (0, c._B)(this.j, r2, n3, i4, o4), s2 += 1;
                    } while (r2 && 5 >= s2);
                    n3.length ? this.wrapFrameRequest = e4.requestAnimationFrame(a2) : t6();
                  };
                  a2();
                });
              }
              onAfterGetValueFromEditor(t5) {
                t5.value = (0, c.Tz)(t5.value);
              }
              afterInit(t5) {
                if (t5.o.useSearch) {
                  const e4 = this;
                  t5.e.on("beforeSetMode.search", () => {
                    this.ui.close();
                  }).on(this.ui, "afterClose", () => {
                    (0, c.IJ)(t5.editor), this.ui.currentIndex = 0, this.ui.count = 0, this.cache = {};
                  }).on("click", () => {
                    this.ui.currentIndex = 0, (0, c.IJ)(t5.editor);
                  }).on("change.search", () => {
                    this.cache = {};
                  }).on("keydown.search mousedown.search", t5.async.debounce(() => {
                    this.ui.selInfo && (t5.s.removeMarkers(), this.ui.selInfo = null), this.ui.isOpened && this.updateCounters();
                  }, t5.defaultTimeout)).on("searchNext.search searchPrevious.search", () => (this.ui.isOpened || this.ui.open(), e4.findAndSelect(e4.ui.query, "searchNext" === t5.e.current).catch((t6) => {
                  }))).on("search.search", (t6, i4 = true) => (this.ui.currentIndex = 0, e4.findAndSelect(t6 || "", i4).catch((t7) => {
                  }))), t5.registerCommand("search", { exec: (t6, i4, o4 = true) => (i4 && e4.findAndSelect(i4, o4).catch((t7) => {
                  }), false) }).registerCommand("openSearchDialog", { exec: (t6, i4) => (e4.ui.open(i4), false), hotkeys: ["ctrl+f", "cmd+f"] }).registerCommand("openReplaceDialog", { exec: (i4, o4, n3) => (t5.o.readonly || e4.ui.open(o4, n3, true), false), hotkeys: ["ctrl+h", "cmd+h"] });
                }
              }
              beforeDestruct(t5) {
                this.ui.destruct(), t5.e.off(".search");
              }
            }
            (0, o3.Cg)([n2.cache], u.prototype, "ui", null), (0, o3.Cg)([(0, n2.watch)("ui:needUpdateCounters")], u.prototype, "updateCounters", null), (0, o3.Cg)([(0, n2.watch)("ui:pressReplaceButton")], u.prototype, "onPressReplaceButton", null), (0, o3.Cg)([n2.autobind], u.prototype, "findQueryBounds", null), (0, o3.Cg)([n2.autobind], u.prototype, "findAndReplace", null), (0, o3.Cg)([n2.autobind], u.prototype, "findAndSelect", null), (0, o3.Cg)([n2.autobind], u.prototype, "find", null), (0, o3.Cg)([(0, n2.watch)(":afterGetValueFromEditor")], u.prototype, "onAfterGetValueFromEditor", null), s.fg.add("search", u);
          }, 63064: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return c;
            } });
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(71842), a = i3(65147), l = i3(53048);
            let c = class extends l.D$ {
              className() {
                return "UISearch";
              }
              render() {
                return `<div>
			<div class="&__box">
				<div class="&__inputs">
					<input data-ref="query" tabindex="0" placeholder="~Search for~" type="text"/>
					<input data-ref="replace" tabindex="0" placeholder="~Replace with~" type="text"/>
				</div>
				<div class="&__counts">
					<span data-ref="counter-box">
						<span data-ref="current">0</span><span>/</span><span data-ref="count">0</span>
					</span>
				</div>
				<div class="&__buttons">
					<button data-ref="next" tabindex="0" type="button">${l.In.get("angle-down")}</button>
					<button data-ref="prev" tabindex="0" type="button">${l.In.get("angle-up")}</button>
					<button data-ref="cancel" tabindex="0" type="button">${l.In.get("cancel")}</button>
					<button data-ref="replace-btn" tabindex="0" type="button" class="jodit-ui-button">~Replace~</button>
				</div>
			</div>
		</div>`;
              }
              get currentIndex() {
                return this._currentIndex;
              }
              set currentIndex(t5) {
                this._currentIndex = t5, this.currentBox.innerText = t5.toString();
              }
              set count(t5) {
                this.countBox.innerText = t5.toString();
              }
              get query() {
                return this.queryInput.value;
              }
              get replace() {
                return this.replaceInput.value;
              }
              constructor(t5) {
                super(t5), this.selInfo = null, this._currentIndex = 0, this.isOpened = false;
                const { query: e4, replace: i4, cancel: o4, next: r2, prev: s2, replaceBtn: l2, current: c2, count: d } = (0, a.refs)(this.container);
                this.queryInput = e4, this.replaceInput = i4, this.closeButton = o4, this.replaceButton = l2, this.currentBox = c2, this.countBox = d, t5.e.on(this.closeButton, "pointerdown", () => (this.close(), false)).on(this.queryInput, "input", () => {
                  this.currentIndex = 0;
                }).on(this.queryInput, "pointerdown", () => {
                  t5.s.isFocused() && (t5.s.removeMarkers(), this.selInfo = t5.s.save());
                }).on(this.replaceButton, "pointerdown", () => (t5.e.fire(this, "pressReplaceButton"), false)).on(r2, "pointerdown", () => (t5.e.fire("searchNext"), false)).on(s2, "pointerdown", () => (t5.e.fire("searchPrevious"), false)).on(this.queryInput, "input", () => {
                  this.setMod("empty-query", !(0, a.trim)(this.queryInput.value).length);
                }).on(this.queryInput, "keydown", this.j.async.debounce((e5) => {
                  e5.key === n2.KEY_ENTER ? (e5.preventDefault(), e5.stopImmediatePropagation(), t5.e.fire("searchNext") && this.close()) : t5.e.fire(this, "needUpdateCounters");
                }, this.j.defaultTimeout));
              }
              onEditorKeyDown(t5) {
                if (!this.isOpened) return;
                const { j: e4 } = this;
                if (e4.getRealMode() === n2.MODE_WYSIWYG) switch (t5.key) {
                  case n2.KEY_ESC:
                    this.close();
                    break;
                  case n2.KEY_F3:
                    this.queryInput.value && (e4.e.fire(t5.shiftKey ? "searchPrevious" : "searchNext"), t5.preventDefault());
                }
              }
              open(t5, e4, i4 = false) {
                this.isOpened || (this.j.workplace.appendChild(this.container), this.isOpened = true), this.calcSticky(this.j.e.fire("getStickyState.sticky") || false), this.j.e.fire("hidePopup"), this.setMod("replace", i4);
                const o4 = null != t5 ? t5 : (this.j.s.sel || "").toString();
                o4 && (this.queryInput.value = o4), e4 && (this.replaceInput.value = e4), this.setMod("empty-query", !o4.length), this.j.e.fire(this, "needUpdateCounters"), o4 ? this.queryInput.select() : this.queryInput.focus();
              }
              close() {
                this.isOpened && (this.j.s.restore(), s.J.safeRemove(this.container), this.isOpened = false, this.j.e.fire(this, "afterClose"));
              }
              calcSticky(t5) {
                if (this.isOpened) if (this.setMod("sticky", t5), t5) {
                  const t6 = (0, a.position)(this.j.toolbarContainer);
                  (0, a.css)(this.container, { top: t6.top + t6.height, left: t6.left + t6.width });
                } else (0, a.css)(this.container, { top: null, left: null });
              }
            };
            (0, o3.Cg)([(0, r.watch)([":keydown", "queryInput:keydown"])], c.prototype, "onEditorKeyDown", null), (0, o3.Cg)([r.autobind], c.prototype, "open", null), (0, o3.Cg)([r.autobind], c.prototype, "close", null), (0, o3.Cg)([(0, r.watch)(":toggleSticky")], c.prototype, "calcSticky", null), c = (0, o3.Cg)([r.component], c);
          }, 29581: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.tableAllowCellSelection = true;
          }, 46939: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(71005), d = i3(11648);
            i3(29581);
            const u = "table_processor_observer", h = "onMoveTableSelectCell";
            class p extends c.k {
              constructor() {
                super(...arguments), this.__selectedCell = null, this.__isSelectionMode = false;
              }
              get __tableModule() {
                return this.j.getInstance(d.X, this.j.o);
              }
              afterInit(t5) {
                t5.o.tableAllowCellSelection && t5.e.on("keydown.select-cells", (t6) => {
                  t6.key === n2.KEY_TAB && this.unselectCells();
                }).on("beforeCommand.select-cells", this.onExecCommand).on("afterCommand.select-cells", this.onAfterCommand).on(["clickEditor", "mousedownTd", "mousedownTh", "touchstartTd", "touchstartTh"].map((t6) => t6 + ".select-cells").join(" "), this.onStartSelection).on("clickTr clickTbody", () => {
                  var t6;
                  const e4 = this.__tableModule.getAllSelectedCells().length;
                  if (e4) return e4 > 1 && (null === (t6 = this.j.s.sel) || void 0 === t6 || t6.removeAllRanges()), false;
                });
              }
              onStartSelection(t5) {
                if (this.j.o.readonly) return;
                if (this.unselectCells(), t5 === this.j.editor) return;
                const e4 = s.J.closest(t5, "table", this.j.editor);
                return t5 && e4 ? (t5.firstChild || t5.appendChild(this.j.createInside.element("br")), this.__isSelectionMode = true, this.__selectedCell = t5, this.__tableModule.addSelection(t5), this.j.e.on(e4, "mousemove.select-cells touchmove.select-cells", this.j.async.throttle(this.__onMove.bind(this, e4), { label: h, timeout: this.j.defaultTimeout / 2 })).on(e4, "mouseup.select-cells touchend.select-cells", this.__onStopSelection.bind(this, e4)), false) : void 0;
              }
              onOutsideClick() {
                this.__selectedCell = null, this.__onRemoveSelection();
              }
              onChange() {
                this.j.isLocked || this.__isSelectionMode || this.__onRemoveSelection();
              }
              __onMove(t5, e4) {
                var i4;
                if (this.j.o.readonly && !this.j.isLocked) return;
                if (this.j.isLockedNotBy(u)) return;
                const o4 = this.j.ed.elementFromPoint(e4.clientX, e4.clientY);
                if (!o4) return;
                const n3 = s.J.closest(o4, ["td", "th"], t5);
                if (!n3 || !this.__selectedCell) return;
                n3 !== this.__selectedCell && this.j.lock(u), this.unselectCells();
                const r2 = this.__tableModule.getSelectedBound(t5, [n3, this.__selectedCell]), a2 = this.__tableModule.formalMatrix(t5);
                for (let t6 = r2[0][0]; r2[1][0] >= t6; t6 += 1) for (let e5 = r2[0][1]; r2[1][1] >= e5; e5 += 1) this.__tableModule.addSelection(a2[t6][e5]);
                this.__tableModule.getAllSelectedCells().length > 1 && (null === (i4 = this.j.s.sel) || void 0 === i4 || i4.removeAllRanges()), this.j.e.fire("hidePopup"), e4.stopPropagation(), (() => {
                  const t6 = this.j.createInside.fromHTML('<div style="color:rgba(0,0,0,0.01);width:0;height:0">&nbsp;</div>');
                  n3.appendChild(t6), this.j.async.setTimeout(() => {
                    var e5;
                    null === (e5 = t6.parentNode) || void 0 === e5 || e5.removeChild(t6);
                  }, this.j.defaultTimeout / 5);
                })();
              }
              __onRemoveSelection(t5) {
                var e4;
                if (!(null === (e4 = null == t5 ? void 0 : t5.buffer) || void 0 === e4 ? void 0 : e4.actionTrigger) && !this.__selectedCell && this.__tableModule.getAllSelectedCells().length) return this.j.unlock(), this.unselectCells(), void this.j.e.fire("hidePopup", "cells");
                this.__isSelectionMode = false, this.__selectedCell = null;
              }
              __onStopSelection(t5, e4) {
                if (!this.__selectedCell) return;
                this.__isSelectionMode = false, this.j.unlock();
                const i4 = this.j.ed.elementFromPoint(e4.clientX, e4.clientY);
                if (!i4) return;
                const o4 = s.J.closest(i4, ["td", "th"], t5);
                if (!o4) return;
                const n3 = s.J.closest(o4, "table", t5);
                if (n3 && n3 !== t5) return;
                const r2 = this.__tableModule.getSelectedBound(t5, [o4, this.__selectedCell]), a2 = this.__tableModule.formalMatrix(t5), c2 = a2[r2[1][0]][r2[1][1]], d2 = a2[r2[0][0]][r2[0][1]];
                this.j.e.fire("showPopup", t5, () => {
                  const t6 = (0, l.position)(d2, this.j), e5 = (0, l.position)(c2, this.j);
                  return { left: t6.left, top: t6.top, width: e5.left - t6.left + e5.width, height: e5.top - t6.top + e5.height };
                }, "cells"), (0, l.$$)("table", this.j.editor).forEach((t6) => {
                  this.j.e.off(t6, "mousemove.select-cells touchmove.select-cells mouseup.select-cells touchend.select-cells");
                }), this.j.async.clearTimeout(h);
              }
              unselectCells(t5) {
                const e4 = this.__tableModule, i4 = e4.getAllSelectedCells();
                i4.length && i4.forEach((i5) => {
                  t5 && t5 === i5 || e4.removeSelection(i5);
                });
              }
              onExecCommand(t5) {
                if (/table(splitv|splitg|merge|empty|bin|binrow|bincolumn|addcolumn|addrow)/.test(t5)) {
                  t5 = t5.replace("table", "");
                  const e4 = this.__tableModule.getAllSelectedCells();
                  if (e4.length) {
                    const [i4] = e4;
                    if (!i4) return;
                    const o4 = s.J.closest(i4, "table", this.j.editor);
                    if (!o4) return;
                    switch (t5) {
                      case "splitv":
                        this.__tableModule.splitVertical(o4);
                        break;
                      case "splitg":
                        this.__tableModule.splitHorizontal(o4);
                        break;
                      case "merge":
                        this.__tableModule.mergeSelected(o4);
                        break;
                      case "empty":
                        e4.forEach((t6) => s.J.detach(t6));
                        break;
                      case "bin":
                        s.J.safeRemove(o4);
                        break;
                      case "binrow":
                        new Set(e4.map((t6) => t6.parentNode)).forEach((t6) => {
                          this.__tableModule.removeRow(o4, t6.rowIndex);
                        });
                        break;
                      case "bincolumn":
                        {
                          const t6 = /* @__PURE__ */ new Set();
                          e4.reduce((e5, i5) => (t6.has(i5.cellIndex) || (e5.push(i5), t6.add(i5.cellIndex)), e5), []).forEach((t7) => {
                            this.__tableModule.removeColumn(o4, t7.cellIndex);
                          });
                        }
                        break;
                      case "addcolumnafter":
                      case "addcolumnbefore":
                        this.__tableModule.appendColumn(o4, i4.cellIndex, "addcolumnafter" === t5);
                        break;
                      case "addrowafter":
                      case "addrowbefore":
                        this.__tableModule.appendRow(o4, i4.parentNode, "addrowafter" === t5);
                    }
                  }
                  return false;
                }
              }
              onAfterCommand(t5) {
                /^justify/.test(t5) && this.__tableModule.getAllSelectedCells().forEach((e4) => (0, l.alignElement)(t5, e4));
              }
              beforeDestruct(t5) {
                this.__onRemoveSelection(), t5.e.off(".select-cells");
              }
            }
            p.requires = ["select"], (0, o3.Cg)([r.autobind], p.prototype, "onStartSelection", null), (0, o3.Cg)([(0, r.watch)(":outsideClick")], p.prototype, "onOutsideClick", null), (0, o3.Cg)([(0, r.watch)(":change")], p.prototype, "onChange", null), (0, o3.Cg)([r.autobind], p.prototype, "__onRemoveSelection", null), (0, o3.Cg)([r.autobind], p.prototype, "__onStopSelection", null), (0, o3.Cg)([r.autobind], p.prototype, "onExecCommand", null), (0, o3.Cg)([r.autobind], p.prototype, "onAfterCommand", null), a.fg.add("selectCells", p);
          }, 41133: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.select = { normalizeSelectionBeforeCutAndCopy: false, normalizeTripleClick: true };
          }, 35523: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(55186), s = i3(56298), a = i3(83260), l = i3(71005), c = i3(53048);
            i3(41133);
            class d extends l.k {
              constructor() {
                super(...arguments), this.proxyEventsList = ["click", "mousedown", "touchstart", "mouseup", "touchend"];
              }
              afterInit(t5) {
                this.proxyEventsList.forEach((e4) => {
                  t5.e.on(e4 + ".select", this.onStartSelection);
                });
              }
              beforeDestruct(t5) {
                this.proxyEventsList.forEach((e4) => {
                  t5.e.on(e4 + ".select", this.onStartSelection);
                });
              }
              onStartSelection(t5) {
                const { j: e4 } = this;
                let i4, o4 = t5.target;
                for (; void 0 === i4 && o4 && o4 !== e4.editor; ) i4 = e4.e.fire((0, a.x)(t5.type + "_" + o4.nodeName.toLowerCase()), o4, t5), o4 = o4.parentElement;
                "click" === t5.type && void 0 === i4 && o4 === e4.editor && e4.e.fire(t5.type + "Editor", o4, t5);
              }
              onOutsideClick(t5) {
                const e4 = t5.target;
                r.J.up(e4, (t6) => t6 === this.j.editor) || c.D$.closestElement(e4, c.zD) || this.j.e.fire("outsideClick", t5);
              }
              beforeCommandCut() {
                const { s: t5 } = this.j;
                if (!t5.isCollapsed()) {
                  const e4 = t5.current();
                  e4 && r.J.isOrContains(this.j.editor, e4) && this.onCopyNormalizeSelectionBound();
                }
              }
              beforeCommandSelectAll() {
                const { s: t5 } = this.j;
                return t5.focus(), t5.select(this.j.editor, true), t5.expandSelection(), false;
              }
              onTripleClickNormalizeSelection(t5) {
                if (3 !== t5.detail || !this.j.o.select.normalizeTripleClick) return;
                const { s: e4 } = this.j, { startContainer: i4, startOffset: o4 } = e4.range;
                0 === o4 && r.J.isText(i4) && e4.select(r.J.closest(i4, r.J.isBlock, this.j.editor) || i4, true);
              }
              onCopyNormalizeSelectionBound(t5) {
                const { s: e4, editor: i4, o: o4 } = this.j;
                o4.select.normalizeSelectionBeforeCutAndCopy && !e4.isCollapsed() && (!t5 || t5.isTrusted && r.J.isNode(t5.target) && r.J.isOrContains(i4, t5.target)) && this.jodit.s.expandSelection();
              }
            }
            (0, o3.Cg)([n2.autobind], d.prototype, "onStartSelection", null), (0, o3.Cg)([(0, n2.watch)("ow:click")], d.prototype, "onOutsideClick", null), (0, o3.Cg)([(0, n2.watch)([":beforeCommandCut"])], d.prototype, "beforeCommandCut", null), (0, o3.Cg)([(0, n2.watch)([":beforeCommandSelectall"])], d.prototype, "beforeCommandSelectAll", null), (0, o3.Cg)([(0, n2.watch)([":click"])], d.prototype, "onTripleClickNormalizeSelection", null), (0, o3.Cg)([(0, n2.watch)([":copy", ":cut"])], d.prototype, "onCopyNormalizeSelectionBound", null), s.fg.add("select", d);
          }, 78134: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.minWidth = 200, o3.T.prototype.maxWidth = "100%", o3.T.prototype.minHeight = 200, o3.T.prototype.maxHeight = "auto", o3.T.prototype.saveHeightInStorage = false;
          }, 69077: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(56298), s = i3(2461), a = i3(38322), l = i3(29866);
            i3(78134);
            let c = class extends l.k {
              constructor() {
                super(...arguments), this.__resizeWorkspaces = this.j.async.debounce(this.__resizeWorkspaceImd, this.j.defaultTimeout, true);
              }
              afterInit(t5) {
                t5.e.on("setHeight.size", this.__setHeight).on("setWidth.size", this.__setWidth).on("afterInit.size changePlace.size", this.__initialize, { top: true }).on(t5.ow, "load.size", this.__resizeWorkspaces).on("afterInit.size resize.size afterUpdateToolbar.size scroll.size afterResize.size", this.__resizeWorkspaces).on("toggleFullSize.size toggleToolbar.size", this.__resizeWorkspaceImd), this.__initialize();
              }
              __initialize() {
                const { j: t5 } = this;
                if (t5.o.inline) return;
                let { height: e4 } = t5.o;
                if (t5.o.saveHeightInStorage && "auto" !== e4) {
                  const i4 = t5.storage.get("height");
                  i4 && (e4 = i4);
                }
                (0, a.A)(t5.editor, { minHeight: "100%" }), (0, a.A)(t5.container, { minHeight: t5.o.minHeight, maxHeight: t5.o.maxHeight, minWidth: t5.o.minWidth, maxWidth: t5.o.maxWidth }), t5.isFullSize || (this.__setHeight(e4), this.__setWidth(t5.o.width));
              }
              __setHeight(t5) {
                if ((0, s.E)(t5)) {
                  const { minHeight: e4, maxHeight: i4 } = this.j.o;
                  (0, s.E)(e4) && e4 > t5 && (t5 = e4), (0, s.E)(i4) && t5 > i4 && (t5 = i4);
                }
                (0, a.A)(this.j.container, "height", t5), this.j.o.saveHeightInStorage && this.j.storage.set("height", t5), this.__resizeWorkspaceImd();
              }
              __setWidth(t5) {
                if ((0, s.E)(t5)) {
                  const { minWidth: e4, maxWidth: i4 } = this.j.o;
                  (0, s.E)(e4) && e4 > t5 && (t5 = e4), (0, s.E)(i4) && t5 > i4 && (t5 = i4);
                }
                (0, a.A)(this.j.container, "width", t5), this.__resizeWorkspaceImd();
              }
              __getNotWorkHeight() {
                var t5, e4;
                return ((null === (t5 = this.j.toolbarContainer) || void 0 === t5 ? void 0 : t5.offsetHeight) || 0) + ((null === (e4 = this.j.statusbar) || void 0 === e4 ? void 0 : e4.getHeight()) || 0) + 2;
              }
              __resizeWorkspaceImd() {
                if (!this.j || this.j.isDestructed || !this.j.o || this.j.o.inline) return;
                if (!this.j.container || !this.j.container.parentNode) return;
                const t5 = ((0, a.A)(this.j.container, "minHeight") || 0) - this.__getNotWorkHeight();
                if ((0, s.E)(t5) && t5 > 0 && ([this.j.workplace, this.j.iframe, this.j.editor].map((e4) => {
                  e4 && (0, a.A)(e4, "minHeight", t5);
                }), this.j.e.fire("setMinHeight", t5)), (0, s.E)(this.j.o.maxHeight)) {
                  const t6 = this.j.o.maxHeight - this.__getNotWorkHeight();
                  [this.j.workplace, this.j.iframe, this.j.editor].map((e4) => {
                    e4 && (0, a.A)(e4, "maxHeight", t6);
                  }), this.j.e.fire("setMaxHeight", t6);
                }
                this.j.container && (0, a.A)(this.j.workplace, "height", "auto" !== this.j.o.height || this.j.isFullSize ? this.j.container.offsetHeight - this.__getNotWorkHeight() : "auto");
              }
              beforeDestruct(t5) {
                t5.e.off(t5.ow, "load.size", this.__resizeWorkspaces).off(".size");
              }
            };
            (0, o3.Cg)([(0, n2.throttle)()], c.prototype, "__initialize", null), (0, o3.Cg)([n2.autobind], c.prototype, "__resizeWorkspaceImd", null), c = (0, o3.Cg)([n2.autobind], c), r.fg.add("size", c);
          }, 90722: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(931), r = i3(9103), s = i3.n(r), a = i3(36115);
            a.T.prototype.beautifyHTML = !o3.IS_IE, a.T.prototype.sourceEditor = "ace", a.T.prototype.sourceEditorNativeOptions = { showGutter: true, theme: "ace/theme/idle_fingers", mode: "ace/mode/html", wrap: true, highlightActiveLine: true }, a.T.prototype.sourceEditorCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/ace/1.4.2/ace.js"], a.T.prototype.beautifyHTMLCDNUrlsJS = ["https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.4/beautify.min.js", "https://cdnjs.cloudflare.com/ajax/libs/js-beautify/1.14.4/beautify-html.min.js"], n2.I.set("source", s()), a.T.prototype.controls.source = { mode: o3.MODE_SPLIT, exec: (t5) => {
              t5.toggleMode();
            }, isActive: (t5) => t5.getRealMode() === o3.MODE_SOURCE, tooltip: "Change mode" };
          }, 5533: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { p: function() {
              return s;
            } });
            var o3 = i3(17352), n2 = i3(65147), r = i3(53380);
            class s extends r.F {
              constructor() {
                super(...arguments), this.className = "jodit_ace_editor", this.proxyOnBlur = (t5) => {
                  this.j.e.fire("blur", t5);
                }, this.proxyOnFocus = (t5) => {
                  this.j.e.fire("focus", t5);
                }, this.proxyOnMouseDown = (t5) => {
                  this.j.e.fire("mousedown", t5);
                };
              }
              aceExists() {
                return void 0 !== this.j.ow.ace;
              }
              getLastColumnIndex(t5) {
                return this.instance.session.getLine(t5).length;
              }
              getLastColumnIndices() {
                const t5 = this.instance.session.getLength(), e4 = [];
                let i4 = 0;
                for (let o4 = 0; t5 > o4; o4++) i4 += this.getLastColumnIndex(o4), o4 > 0 && (i4 += 1), e4[o4] = i4;
                return e4;
              }
              getRowColumnIndices(t5) {
                const e4 = this.getLastColumnIndices();
                if (e4[0] >= t5) return { row: 0, column: t5 };
                let i4 = 1;
                for (let o4 = 1; e4.length > o4; o4++) t5 > e4[o4] && (i4 = o4 + 1);
                return { row: i4, column: t5 - e4[i4 - 1] - 1 };
              }
              setSelectionRangeIndices(t5, e4) {
                const i4 = this.getRowColumnIndices(t5), o4 = this.getRowColumnIndices(e4);
                this.instance.getSelection().setSelectionRange({ start: i4, end: o4 });
              }
              getIndexByRowColumn(t5, e4) {
                return this.getLastColumnIndices()[t5] - this.getLastColumnIndex(t5) + e4;
              }
              init(t5) {
                const e4 = () => {
                  if (void 0 !== this.instance || !this.aceExists()) return;
                  const e5 = this.j.c.div("jodit-source__mirror-fake");
                  this.container.appendChild(e5), this.instance = t5.ow.ace.edit(e5), this.instance.setTheme(t5.o.sourceEditorNativeOptions.theme), this.instance.renderer.setShowGutter(t5.o.sourceEditorNativeOptions.showGutter), this.instance.getSession().setMode(t5.o.sourceEditorNativeOptions.mode), this.instance.setHighlightActiveLine(t5.o.sourceEditorNativeOptions.highlightActiveLine), this.instance.getSession().setUseWrapMode(true), this.instance.setOption("indentedSoftWrap", false), this.instance.setOption("wrap", t5.o.sourceEditorNativeOptions.wrap), this.instance.getSession().setUseWorker(false), this.instance.$blockScrolling = 1 / 0, this.instance.on("change", this.toWYSIWYG), this.instance.on("focus", this.proxyOnFocus), this.instance.on("mousedown", this.proxyOnMouseDown), this.instance.on("blur", this.proxyOnBlur), t5.getRealMode() !== o3.MODE_WYSIWYG && this.setValue(this.getValue());
                  const i4 = this.j.async.debounce(() => {
                    t5.isInDestruct || (this.instance.setOption("maxLines", "auto" !== t5.o.height ? t5.workplace.offsetHeight / this.instance.renderer.lineHeight : 1 / 0), this.instance.resize());
                  }, 2 * this.j.defaultTimeout);
                  t5.e.on("afterResize afterSetMode", i4), i4(), this.onReady();
                };
                t5.e.on("afterSetMode", () => {
                  t5.getRealMode() !== o3.MODE_SOURCE && t5.getMode() !== o3.MODE_SPLIT || (this.fromWYSIWYG(), e4());
                }), e4(), this.aceExists() || (0, n2.loadNext)(t5, t5.o.sourceEditorCDNUrlsJS).then(() => {
                  t5.isInDestruct || e4();
                }).catch(() => null);
              }
              destruct() {
                var t5, e4;
                this.instance.off("change", this.toWYSIWYG), this.instance.off("focus", this.proxyOnFocus), this.instance.off("mousedown", this.proxyOnMouseDown), this.instance.destroy(), null === (e4 = null === (t5 = this.j) || void 0 === t5 ? void 0 : t5.events) || void 0 === e4 || e4.off("aceInited.source");
              }
              setValue(t5) {
                if (!this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
                  const e4 = this.j.e.fire("beautifyHTML", t5);
                  (0, n2.isString)(e4) && (t5 = e4);
                }
                this.instance.setValue(t5), this.instance.clearSelection();
              }
              getValue() {
                return this.instance.getValue();
              }
              setReadOnly(t5) {
                this.instance.setReadOnly(t5);
              }
              get isFocused() {
                return this.instance.isFocused();
              }
              focus() {
                this.instance.focus();
              }
              blur() {
                this.instance.blur();
              }
              getSelectionStart() {
                const t5 = this.instance.selection.getRange();
                return this.getIndexByRowColumn(t5.start.row, t5.start.column);
              }
              getSelectionEnd() {
                const t5 = this.instance.selection.getRange();
                return this.getIndexByRowColumn(t5.end.row, t5.end.column);
              }
              selectAll() {
                this.instance.selection.selectAll();
              }
              insertRaw(t5) {
                const e4 = this.instance.selection.getCursor(), i4 = this.instance.session.insert(e4, t5);
                this.instance.selection.setRange({ start: e4, end: i4 }, false);
              }
              setSelectionRange(t5, e4) {
                this.setSelectionRangeIndices(t5, e4);
              }
              setPlaceHolder(t5) {
              }
              replaceUndoManager() {
                const { history: t5 } = this.jodit;
                this.instance.commands.addCommand({ name: "Undo", bindKey: { win: "Ctrl-Z", mac: "Command-Z" }, exec: () => {
                  t5.undo();
                } }), this.instance.commands.addCommand({ name: "Redo", bindKey: { win: "Ctrl-Shift-Z", mac: "Command-Shift-Z" }, exec: () => {
                  t5.redo();
                } });
              }
            }
          }, 55265: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { S: function() {
              return s;
            } });
            var o3 = i3(55186), n2 = i3(38322), r = i3(53380);
            class s extends r.F {
              constructor() {
                super(...arguments), this.autosize = this.j.async.debounce(() => {
                  this.instance.style.height = "auto", this.instance.style.height = this.instance.scrollHeight + "px";
                }, this.j.defaultTimeout);
              }
              init(t5) {
                this.instance = t5.c.element("textarea", { class: "jodit-source__mirror" }), this.container.appendChild(this.instance), t5.e.on(this.instance, "mousedown keydown touchstart input", t5.async.debounce(this.toWYSIWYG, t5.defaultTimeout)).on("setMinHeight.source", (t6) => {
                  (0, n2.A)(this.instance, "minHeight", t6);
                }).on(this.instance, "change keydown mousedown touchstart input", this.autosize).on("afterSetMode.source", this.autosize).on(this.instance, "mousedown focus", (e4) => {
                  t5.e.fire(e4.type, e4);
                }), this.autosize(), this.onReady();
              }
              destruct() {
                o3.J.safeRemove(this.instance);
              }
              getValue() {
                return this.instance.value;
              }
              setValue(t5) {
                this.instance.value = t5;
              }
              insertRaw(t5) {
                const e4 = this.getValue();
                if (0 > this.getSelectionStart()) this.setValue(e4 + t5);
                else {
                  const i4 = this.getSelectionStart(), o4 = this.getSelectionEnd();
                  this.setValue(e4.substring(0, i4) + t5 + e4.substring(o4, e4.length));
                }
              }
              getSelectionStart() {
                return this.instance.selectionStart;
              }
              getSelectionEnd() {
                return this.instance.selectionEnd;
              }
              setSelectionRange(t5, e4 = t5) {
                this.instance.setSelectionRange(t5, e4);
              }
              get isFocused() {
                return this.instance === this.j.od.activeElement;
              }
              focus() {
                this.instance.focus();
              }
              blur() {
                this.instance.blur();
              }
              setPlaceHolder(t5) {
                this.instance.setAttribute("placeholder", t5);
              }
              setReadOnly(t5) {
                t5 ? this.instance.setAttribute("readonly", "true") : this.instance.removeAttribute("readonly");
              }
              selectAll() {
                this.instance.select();
              }
              replaceUndoManager() {
                const { history: t5 } = this.jodit;
                this.j.e.on(this.instance, "keydown", (e4) => {
                  if ((e4.ctrlKey || e4.metaKey) && "z" === e4.key) return e4.shiftKey ? t5.redo() : t5.undo(), this.setSelectionRange(this.getValue().length), false;
                });
              }
            }
          }, 76134: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { S: function() {
              return n2.S;
            }, p: function() {
              return o3.p;
            } });
            var o3 = i3(5533), n2 = i3(55265);
          }, 1992: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { b: function() {
              return r;
            } });
            var o3 = i3(65147), n2 = i3(76134);
            function r(t5, e4, i4, r2, s) {
              let a;
              if ((0, o3.isFunction)(t5)) a = t5(e4);
              else switch (t5) {
                case "ace":
                  if (!e4.o.shadowRoot) {
                    a = new n2.p(e4, i4, r2, s);
                    break;
                  }
                default:
                  a = new n2.S(e4, i4, r2, s);
              }
              return a.init(e4), a.onReadyAlways(() => {
                a.setReadOnly(e4.o.readonly);
              }), a;
            }
          }, 53380: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { F: function() {
              return o3;
            } });
            class o3 {
              constructor(t5, e4, i4, o4) {
                this.jodit = t5, this.container = e4, this.toWYSIWYG = i4, this.fromWYSIWYG = o4, this.className = "", this.isReady = false;
              }
              get j() {
                return this.jodit;
              }
              onReady() {
                this.replaceUndoManager(), this.isReady = true, this.j.e.fire(this, "ready");
              }
              onReadyAlways(t5) {
                var e4;
                this.isReady ? t5() : null === (e4 = this.j.events) || void 0 === e4 || e4.on(this, "ready", t5);
              }
            }
          }, 93669: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(71005), d = (i3(90722), i3(1992));
            class u extends c.k {
              constructor() {
                super(...arguments), this.buttons = [{ name: "source", group: "source" }], this.__lock = false, this.__oldMirrorValue = "", this.tempMarkerStart = "{start-jodit-selection}", this.tempMarkerStartReg = /{start-jodit-selection}/g, this.tempMarkerEnd = "{end-jodit-selection}", this.tempMarkerEndReg = /{end-jodit-selection}/g, this.getSelectionStart = () => {
                  var t5, e4;
                  return null !== (e4 = null === (t5 = this.sourceEditor) || void 0 === t5 ? void 0 : t5.getSelectionStart()) && void 0 !== e4 ? e4 : 0;
                }, this.getSelectionEnd = () => {
                  var t5, e4;
                  return null !== (e4 = null === (t5 = this.sourceEditor) || void 0 === t5 ? void 0 : t5.getSelectionEnd()) && void 0 !== e4 ? e4 : 0;
                };
              }
              onInsertHTML(t5) {
                var e4;
                if (!this.j.o.readonly && !this.j.isEditorMode()) return null === (e4 = this.sourceEditor) || void 0 === e4 || e4.insertRaw(t5), this.toWYSIWYG(), false;
              }
              fromWYSIWYG(t5 = false) {
                if (!this.__lock || true === t5) {
                  this.__lock = true;
                  const t6 = this.j.getEditorValue(false, n2.SOURCE_CONSUMER);
                  t6 !== this.getMirrorValue() && this.setMirrorValue(t6), this.__lock = false;
                }
              }
              toWYSIWYG() {
                if (this.__lock) return;
                const t5 = this.getMirrorValue();
                t5 !== this.__oldMirrorValue && (this.__lock = true, this.j.value = t5, this.__lock = false, this.__oldMirrorValue = t5);
              }
              getNormalPosition(t5, e4) {
                for (e4 = e4.replace(/<(script|style|iframe)[^>]*>[^]*?<\/\1>/im, (t6) => {
                  let e5 = "";
                  for (let i5 = 0; t6.length > i5; i5 += 1) e5 += n2.INVISIBLE_SPACE;
                  return e5;
                }); t5 > 0 && e4[t5] === n2.INVISIBLE_SPACE; ) t5--;
                let i4 = t5;
                for (; i4 > 0; ) {
                  if (i4--, "<" === e4[i4] && void 0 !== e4[i4 + 1] && e4[i4 + 1].match(/[\w/]+/i)) return i4;
                  if (">" === e4[i4]) return t5;
                }
                return t5;
              }
              clnInv(t5) {
                return t5.replace(n2.INVISIBLE_SPACE_REG_EXP(), "");
              }
              onSelectAll(t5) {
                var e4;
                if ("selectall" === t5.toLowerCase() && this.j.getRealMode() === n2.MODE_SOURCE) return null === (e4 = this.sourceEditor) || void 0 === e4 || e4.selectAll(), false;
              }
              getMirrorValue() {
                var t5;
                return (null === (t5 = this.sourceEditor) || void 0 === t5 ? void 0 : t5.getValue()) || "";
              }
              setMirrorValue(t5) {
                var e4;
                null === (e4 = this.sourceEditor) || void 0 === e4 || e4.setValue(t5);
              }
              setFocusToMirror() {
                var t5;
                null === (t5 = this.sourceEditor) || void 0 === t5 || t5.focus();
              }
              saveSelection() {
                if (this.j.getRealMode() === n2.MODE_WYSIWYG) this.j.s.save(), this.j.synchronizeValues(), this.fromWYSIWYG(true);
                else {
                  if (this.j.o.editHTMLDocumentMode) return;
                  const t5 = this.getMirrorValue();
                  if (this.getSelectionStart() === this.getSelectionEnd()) {
                    const e4 = this.j.s.marker(true), i4 = this.getNormalPosition(this.getSelectionStart(), this.getMirrorValue());
                    this.setMirrorValue(t5.substring(0, i4) + this.clnInv(e4.outerHTML) + t5.substring(i4));
                  } else {
                    const e4 = this.j.s.marker(true), i4 = this.j.s.marker(false), o4 = this.getNormalPosition(this.getSelectionStart(), t5), n3 = this.getNormalPosition(this.getSelectionEnd(), t5);
                    this.setMirrorValue(t5.slice(0, o4) + this.clnInv(e4.outerHTML) + t5.slice(o4, n3) + this.clnInv(i4.outerHTML) + t5.slice(n3));
                  }
                  this.toWYSIWYG();
                }
              }
              removeSelection() {
                if (this.j.getRealMode() === n2.MODE_WYSIWYG) return this.__lock = true, this.j.s.restore(), void (this.__lock = false);
                let t5 = this.getMirrorValue(), e4 = 0, i4 = 0;
                try {
                  if (t5 = t5.replace(/<span[^>]+data-jodit-selection_marker=(["'])start\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerStart).replace(/<span[^>]+data-jodit-selection_marker=(["'])end\1[^>]*>[<>]*?<\/span>/gim, this.tempMarkerEnd), !this.j.o.editHTMLDocumentMode && this.j.o.beautifyHTML) {
                    const e5 = this.j.e.fire("beautifyHTML", t5);
                    (0, l.isString)(e5) && (t5 = e5);
                  }
                  if (e4 = t5.indexOf(this.tempMarkerStart), i4 = e4, t5 = t5.replace(this.tempMarkerStartReg, ""), -1 !== e4) {
                    const e5 = t5.indexOf(this.tempMarkerEnd);
                    -1 !== e5 && (i4 = e5);
                  }
                  t5 = t5.replace(this.tempMarkerEndReg, "");
                } finally {
                  t5 = t5.replace(this.tempMarkerEndReg, "").replace(this.tempMarkerStartReg, "");
                }
                this.setMirrorValue(t5), this.setMirrorSelectionRange(e4, i4), this.toWYSIWYG(), this.setFocusToMirror();
              }
              setMirrorSelectionRange(t5, e4) {
                var i4;
                null === (i4 = this.sourceEditor) || void 0 === i4 || i4.setSelectionRange(t5, e4);
              }
              onReadonlyReact() {
                var t5;
                null === (t5 = this.sourceEditor) || void 0 === t5 || t5.setReadOnly(this.j.o.readonly);
              }
              afterInit(t5) {
                if (this.mirrorContainer = t5.c.div("jodit-source"), t5.workplace.appendChild(this.mirrorContainer), t5.e.on("afterAddPlace changePlace afterInit", () => {
                  t5.workplace.appendChild(this.mirrorContainer);
                }), this.sourceEditor = (0, d.b)("area", t5, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG), t5.e.on(t5.ow, "keydown", (t6) => {
                  var e4;
                  t6.key === n2.KEY_ESC && (null === (e4 = this.sourceEditor) || void 0 === e4 ? void 0 : e4.isFocused) && this.sourceEditor.blur();
                }), this.onReadonlyReact(), t5.e.on("placeholder.source", (t6) => {
                  var e4;
                  null === (e4 = this.sourceEditor) || void 0 === e4 || e4.setPlaceHolder(t6);
                }).on("change.source", this.syncValueFromWYSIWYG).on("beautifyHTML", (t6) => t6), t5.o.beautifyHTML) {
                  const e4 = () => {
                    var e5;
                    if (t5.isInDestruct) return false;
                    const i4 = t5.ow.html_beautify;
                    return !(!i4 || t5.isInDestruct || (null === (e5 = t5.events) || void 0 === e5 || e5.off("beautifyHTML").on("beautifyHTML", (t6) => i4(t6)), 0));
                  };
                  e4() || (0, l.loadNext)(t5, t5.o.beautifyHTMLCDNUrlsJS).then(e4, () => null);
                }
                this.syncValueFromWYSIWYG(true), this.initSourceEditor(t5);
              }
              syncValueFromWYSIWYG(t5 = false) {
                const e4 = this.j;
                e4.getMode() !== n2.MODE_SPLIT && e4.getMode() !== n2.MODE_SOURCE || this.fromWYSIWYG(t5);
              }
              initSourceEditor(t5) {
                var e4;
                if ("area" !== t5.o.sourceEditor) {
                  const e5 = (0, d.b)(t5.o.sourceEditor, t5, this.mirrorContainer, this.toWYSIWYG, this.fromWYSIWYG);
                  e5.onReadyAlways(() => {
                    var i4, o4;
                    null === (i4 = this.sourceEditor) || void 0 === i4 || i4.destruct(), this.sourceEditor = e5, this.syncValueFromWYSIWYG(true), null === (o4 = t5.events) || void 0 === o4 || o4.fire("sourceEditorReady", t5);
                  });
                } else null === (e4 = this.sourceEditor) || void 0 === e4 || e4.onReadyAlways(() => {
                  var e5;
                  this.syncValueFromWYSIWYG(true), null === (e5 = t5.events) || void 0 === e5 || e5.fire("sourceEditorReady", t5);
                });
              }
              beforeDestruct() {
                this.sourceEditor && (this.sourceEditor.destruct(), delete this.sourceEditor), s.J.safeRemove(this.mirrorContainer);
              }
            }
            (0, o3.Cg)([(0, r.watch)(":insertHTML.source")], u.prototype, "onInsertHTML", null), (0, o3.Cg)([r.autobind], u.prototype, "fromWYSIWYG", null), (0, o3.Cg)([r.autobind], u.prototype, "toWYSIWYG", null), (0, o3.Cg)([r.autobind], u.prototype, "getNormalPosition", null), (0, o3.Cg)([(0, r.watch)(":beforeCommand.source")], u.prototype, "onSelectAll", null), (0, o3.Cg)([(0, r.watch)(":beforeSetMode.source")], u.prototype, "saveSelection", null), (0, o3.Cg)([(0, r.watch)(":afterSetMode.source")], u.prototype, "removeSelection", null), (0, o3.Cg)([r.autobind], u.prototype, "setMirrorSelectionRange", null), (0, o3.Cg)([(0, r.watch)(":readonly.source")], u.prototype, "onReadonlyReact", null), (0, o3.Cg)([r.autobind], u.prototype, "syncValueFromWYSIWYG", null), a.fg.add("source", u);
          }, 71096: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(9810), n2 = i3(72197), r = i3(931), s = i3(71722), a = i3(93676), l = i3(22227), c = i3.n(l), d = i3(36115);
            d.T.prototype.speechRecognize = { api: s.o, sound: true, continuous: true, interimResults: true, commands: { "newline|enter": "enter", "delete|remove word|delete word": "backspaceWordButton", comma: "inserthtml::,", underline: "inserthtml::_", hyphen: "inserthtml::-", space: "inserthtml:: ", question: "inserthtml::?", dot: "inserthtml::.", "quote|quotes|open quote": "inserthtml::'", "header|header h1": "formatblock::h1", "select all": "selectall" } }, r.I.set("speech-recognize", c()), d.T.prototype.controls.speechRecognize = { isActive(t5, e4) {
              const i4 = (0, n2.m)(t5, "speech");
              return Boolean(null == i4 ? void 0 : i4.isEnabled);
            }, isDisabled: (t5) => !t5.o.speechRecognize.api, exec(t5, e4, { button: i4, control: r2 }) {
              const { api: s2, lang: l2, continuous: c2, interimResults: d2, sound: u } = t5.o.speechRecognize;
              if (!s2) return void t5.alert("Speech recognize API unsupported in your browser");
              let h = (0, n2.m)(t5, "speech");
              if (!h) {
                const e5 = new s2();
                h = new a.g(t5.async, e5), h.lang = l2, h.continuous = c2, h.interimResults = d2, h.sound = u, (0, n2.m)(t5, "speech", h), h.on("pulse", (t6) => {
                  i4.setMod("pulse", t6);
                }), h.on("result", (e6) => t5.e.fire("speechRecognizeResult", e6)), h.on("progress", (e6) => t5.e.fire("speechRecognizeProgressResult", e6)), i4.hookStatus("beforeDestruct", () => {
                  h.destruct();
                });
              }
              if (r2.args) {
                const t6 = r2.args[0];
                if ((0, o3.L)(h[t6])) return h[t6] = !h[t6], void (h.isEnabled && h.restart());
              }
              h.toggle(), i4.state.activated = h.isEnabled;
            }, name: "speechRecognize", command: "toggleSpeechRecognize", tooltip: "Speech Recognize", list: { sound: "Sound", interimResults: "Interim Results" }, childTemplate(t5, e4, i4) {
              var o4;
              const r2 = (0, n2.m)(t5, "speech");
              return `<span class='jodit-speech-recognize__list-item'><input ${(null !== (o4 = null == r2 ? void 0 : r2[e4]) && void 0 !== o4 ? o4 : t5.o.speechRecognize[e4]) ? "checked" : ""} class='jodit-checkbox' type='checkbox'>&nbsp;${i4}</span>`;
            }, mods: { stroke: false } };
          }, 81629: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { N: function() {
              return o3;
            }, Z: function() {
              return n2;
            } });
            const o3 = 440, n2 = 940;
          }, 71722: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { o: function() {
              return o3;
            } });
            const o3 = window.SpeechRecognition || window.webkitSpeechRecognition;
          }, 50834: function(t4, e3, i3) {
            "use strict";
            function o3(t5, e4) {
              const [i4, o4] = e4.split("::");
              t5.execCommand(i4, null, o4);
            }
            i3.d(e3, { F: function() {
              return o3;
            } });
          }, 93676: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { g: function() {
              return c;
            } });
            var o3, n2 = i3(31635), r = i3(22664), s = i3(43431), a = i3(95473), l = i3(81629);
            let c = o3 = class extends s.h {
              set lang(t5) {
                this._lang = t5, this._api.lang = t5;
              }
              get lang() {
                return this._lang;
              }
              set continuous(t5) {
                this._continuous = t5, this._api.continuous = t5;
              }
              get continuous() {
                return this._continuous;
              }
              set interimResults(t5) {
                this._interimResults = t5, this._api.interimResults = t5;
              }
              get interimResults() {
                return this._interimResults;
              }
              constructor(t5, e4) {
                super(), this.async = t5, this._continuous = false, this._interimResults = false, this.sound = true, this._isEnabled = false, this._restartTimeout = 0, this._onSpeechStart = (t6) => {
                  this._isEnabled && (this.async.clearTimeout(this._restartTimeout), this._restartTimeout = this.async.setTimeout(() => {
                    this.restart(), this.emit("pulse", false), this._makeSound(l.Z);
                  }, 5e3), this.emit("pulse", true));
                }, this._progressTimeout = 0, this._api = e4, o3._instances.add(this);
              }
              destruct() {
                this.stop(), o3._instances.delete(this), super.destruct();
              }
              get isEnabled() {
                return this._isEnabled;
              }
              start() {
                this._isEnabled || (this._isEnabled = true, o3._instances.forEach((t5) => {
                  t5 !== this && t5.stop();
                }), this._api.start(), this.__on("speechstart", this._onSpeechStart).__on("error", this._onError).__on("result", this._onResult));
              }
              stop() {
                if (this._isEnabled) {
                  try {
                    this._api.abort(), this._api.stop();
                  } catch (t5) {
                  }
                  this.__off("speechstart", this._onSpeechStart).__off("error", this._onError).__off("result", this._onResult), this.async.clearTimeout(this._restartTimeout), this._isEnabled = false, this.emit("pulse", false);
                }
              }
              toggle() {
                this._isEnabled ? this.stop() : this.start();
              }
              restart() {
                this.stop(), this.start();
              }
              __on(t5, e4) {
                return this._api.addEventListener(t5, e4), this;
              }
              __off(t5, e4) {
                return this._api.removeEventListener(t5, e4), this;
              }
              _onResult(t5) {
                if (!this._isEnabled) return;
                this.async.clearTimeout(this._progressTimeout);
                const e4 = t5.results.item(t5.resultIndex), { transcript: i4 } = e4.item(0), o4 = () => {
                  try {
                    this.async.clearTimeout(this._restartTimeout), this.emit("result", i4);
                  } catch (t6) {
                  }
                  this.restart(), this.emit("pulse", false), this._makeSound(l.N);
                };
                if (false === e4.isFinal) return this.emit("progress", i4), void (this._progressTimeout = this.async.setTimeout(o4, 500));
                o4();
              }
              _onError() {
                this._isEnabled && (this._makeSound(l.Z), this.emit("pulse", false), this.restart());
              }
              _makeSound(t5) {
                this.sound && (0, a.s)({ frequency: t5 });
              }
            };
            c._instances = /* @__PURE__ */ new Set(), c = o3 = (0, n2.Cg)([r.autobind], c);
          }, 95473: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { s: function() {
              return n2;
            } });
            var o3 = i3(81629);
            function n2({ sec: t5 = 0.1, frequency: e4 = o3.N, gain: i4 = 0.1, type: n3 = "sine" } = {}) {
              if (void 0 === window.AudioContext && void 0 === window.webkitAudioContext) return;
              const r = new (window.AudioContext || window.webkitAudioContext)(), s = r.createGain(), a = r.createOscillator();
              a.type = n3, a.frequency.value = e4, a.connect(s), s.connect(r.destination), a.start(), a.stop(r.currentTime + t5), s.gain.value = i4;
            }
          }, 61593: function(t4) {
            "use strict";
            t4.exports = { newline: "الخط الجديد", delete: "حذف", space: "الفضاء", "Speech Recognize": "التعرف على الكلام", Sound: "الصوت", "Interim Results": "النتائج المؤقتة" };
          }, 64458: function(t4) {
            "use strict";
            t4.exports = { newline: "řádek", delete: "odstranit", space: "prostora", "Speech Recognize": "Rozpoznání Řeči", Sound: "Zvuk", "Interim Results": "Průběžné Výsledky" };
          }, 89601: function(t4) {
            "use strict";
            t4.exports = { newline: "Zeilenumbruch", delete: "löschen", space: "Raum", "Speech Recognize": "Sprache Erkennen", Sound: "Sound", "Interim Results": "Zwischenergebnis" };
          }, 87710: function(t4) {
            "use strict";
            t4.exports = { newline: "nueva línea", delete: "eliminar", space: "espacio", "Speech Recognize": "Reconocimiento de Voz", Sound: "Sonido", "Interim Results": "Resultados Provisionales" };
          }, 15603: function(t4) {
            "use strict";
            t4.exports = { newline: "خط جدید", delete: "حذف", space: "فضا", "Speech Recognize": "گفتار را تشخیص دهید", Sound: "صدا", "Interim Results": "نتایج موقت" };
          }, 84059: function(t4) {
            "use strict";
            t4.exports = { "Speech Recognize": "Puheentunnistus", newline: "uusi rivi", delete: "poistaa", space: "tilaa", Sound: "Ääni", "Interim Results": "Välitulokset" };
          }, 13958: function(t4) {
            "use strict";
            t4.exports = { newline: "nouvelle ligne", delete: "supprimer", space: "espace", "Speech Recognize": "Reconnaissance Vocale", Sound: "Son", "Interim Results": "Résultats Intermédiaires" };
          }, 18717: function(t4) {
            "use strict";
            t4.exports = { newline: "חדשות", delete: "מחק", space: "שטח", "Speech Recognize": "דיבור מזהה", Sound: "קול", "Interim Results": "תוצאות ביניים" };
          }, 14765: function(t4) {
            "use strict";
            t4.exports = { newline: "újsor", delete: "törlés", space: "tér", "Speech Recognize": "A Beszéd Felismeri", Sound: "Hang", "Interim Results": "Időközi Eredmények" };
          }, 77995: function(t4) {
            "use strict";
            t4.exports = { newline: "newline", delete: "Hapus", space: "ruang", "Speech Recognize": "Pidato Mengenali", Sound: "Suara", "Interim Results": "Hasil Sementara" };
          }, 25202: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ar: function() {
              return o3;
            }, cs_cz: function() {
              return n2;
            }, de: function() {
              return r;
            }, es: function() {
              return s;
            }, fa: function() {
              return a;
            }, fi: function() {
              return l;
            }, fr: function() {
              return c;
            }, he: function() {
              return d;
            }, hu: function() {
              return u;
            }, id: function() {
              return h;
            }, it: function() {
              return p;
            }, ja: function() {
              return f;
            }, ko: function() {
              return g;
            }, mn: function() {
              return m;
            }, nl: function() {
              return b;
            }, pl: function() {
              return _;
            }, pt_br: function() {
              return v;
            }, ru: function() {
              return x;
            }, tr: function() {
              return w;
            }, zh_cn: function() {
              return y;
            }, zh_tw: function() {
              return j;
            } });
            var o3 = i3(61593), n2 = i3(64458), r = i3(89601), s = i3(87710), a = i3(15603), l = i3(84059), c = i3(13958), d = i3(18717), u = i3(14765), h = i3(77995), p = i3(92315), f = i3(54711), g = i3(68632), m = i3(76769), b = i3(3424), _ = i3(85454), v = i3(64149), x = i3(16491), w = i3(48948), y = i3(84370), j = i3(56646);
          }, 92315: function(t4) {
            "use strict";
            t4.exports = { newline: "nuova riga", delete: "eliminare", space: "spazio", "Speech Recognize": "Discorso Riconoscere", Sound: "Suono", "Interim Results": "Risultati intermedi" };
          }, 54711: function(t4) {
            "use strict";
            t4.exports = { newline: "改行", delete: "削除", space: "スペース", "Speech Recognize": "音声認識", Sound: "音", "Interim Results": "中間結果" };
          }, 68632: function(t4) {
            "use strict";
            t4.exports = { newline: "줄 바꿈", delete: "삭제", space: "공간", "Speech Recognize": "음성 인식", Sound: "소리", "Interim Results": "중간 결과" };
          }, 76769: function(t4) {
            "use strict";
            t4.exports = { newline: "Шинэ мөр", delete: "Устгах", space: "Зай", "Speech Recognize": "Дуу хоолой таних", Sound: "Дуу", "Interim Results": "Түр зуурын үр дүн" };
          }, 3424: function(t4) {
            "use strict";
            t4.exports = { newline: "regel", delete: "verwijderen", space: "ruimte", "Speech Recognize": "Spraak Herkennen", Sound: "Geluid", "Interim Results": "Tussentijdse Resultaten" };
          }, 85454: function(t4) {
            "use strict";
            t4.exports = { newline: "newline", delete: "usunąć", space: "przestrzeń", "Speech Recognize": "Rozpoznawanie Mowy", Sound: "Dźwięk", "Interim Results": "Wyniki Okresowe" };
          }, 64149: function(t4) {
            "use strict";
            t4.exports = { newline: "linha", delete: "excluir", space: "espaco", "Speech Recognize": "Discurso Reconhecer", Sound: "Som", "Interim Results": "Resultados Provisórios" };
          }, 16491: function(t4) {
            "use strict";
            t4.exports = { newline: "новая строка|перенос|энтер", delete: "удалить", space: "пробел", "Speech Recognize": "Распознавание речи", Sound: "Звук", "Interim Results": "Промежуточные результаты" };
          }, 48948: function(t4) {
            "use strict";
            t4.exports = { newline: "yeni satır", delete: "silmek", space: "uzay", "Speech Recognize": "Konuşma Tanıma", Sound: "Ses", "Interim Results": "Ara Sonuçlar" };
          }, 84370: function(t4) {
            "use strict";
            t4.exports = { newline: "新行", delete: "删除", space: "空间", "Speech Recognize": "言语识别", Sound: "声音", "Interim Results": "中期业绩" };
          }, 56646: function(t4) {
            "use strict";
            t4.exports = { newline: "換行", delete: "刪除", space: "空白", "Speech Recognize": "語音辨識", Sound: "聲音", "Interim Results": "階段性辨識結果" };
          }, 37873: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(37075), r = i3(66927), s = i3(55186), a = i3(56298), l = i3(84976), c = i3(71005), d = (i3(71096), i3(46173)), u = i3(50834), h = i3(25202);
            class p extends c.k {
              constructor(t5) {
                super(t5), this._commandToWord = {}, t5.o.speechRecognize.api && t5.registerButton({ group: "state", name: "speechRecognize" });
              }
              afterInit(t5) {
                const { commands: e4 } = t5.o.speechRecognize;
                e4 && ((0, a.JW)(h), (0, l.HP)(e4, false).forEach((i4) => {
                  i4.split("|").forEach((o4) => {
                    o4 = o4.trim().toLowerCase(), this._commandToWord[o4] = e4[i4];
                    const n3 = t5.i18n(o4);
                    n3 !== o4 && n3.split("|").forEach((t6) => {
                      this._commandToWord[t6.trim().toLowerCase()] = e4[i4].trim();
                    });
                  });
                }));
              }
              beforeDestruct(t5) {
              }
              onSpeechRecognizeProgressResult(t5) {
                this.messagePopup || (this.messagePopup = this.j.create.div("jodit-speech-recognize__popup")), this.j.workplace.appendChild(this.messagePopup), this.j.async.setTimeout(() => {
                  s.J.safeRemove(this.messagePopup);
                }, { label: "onSpeechRecognizeProgressResult", timeout: 1e3 }), this.messagePopup.innerText = t5 + "|";
              }
              onSpeechRecognizeResult(t5) {
                const { j: e4 } = this, { s: i4 } = e4;
                if (s.J.safeRemove(this.messagePopup), !this._checkCommand(t5)) {
                  const { range: o4 } = i4, n3 = i4.current();
                  if (i4.isCollapsed() && s.J.isText(n3) && s.J.isOrContains(e4.editor, n3) && n3.nodeValue) {
                    const r2 = n3.nodeValue;
                    n3.nodeValue = r2 + (/[\u00A0 ]\uFEFF*$/.test(r2) ? "" : " ") + t5, o4.setStartAfter(n3), i4.selectRange(o4), e4.synchronizeValues();
                  } else i4.insertHTML(t5);
                }
              }
              _checkCommand(t5) {
                return t5 = t5.toLowerCase().replace(/\./g, ""), !!this._commandToWord[t5] && ((0, u.F)(this.j, this._commandToWord[t5]), true);
              }
            }
            (0, o3.Cg)([(0, r.w)(":speechRecognizeProgressResult"), (0, n2.s)()], p.prototype, "onSpeechRecognizeProgressResult", null), (0, o3.Cg)([(0, r.w)(":speechRecognizeResult")], p.prototype, "onSpeechRecognizeResult", null), d.x.plugins.add("speech-recognize", p);
          }, 78703: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(49989), r = i3.n(n2), s = i3(36115);
            s.T.prototype.spellcheck = false, o3.I.set("spellcheck", r()), s.T.prototype.controls.spellcheck = { isActive: (t5) => t5.o.spellcheck, icon: r(), name: "spellcheck", command: "toggleSpellcheck", tooltip: "Spellcheck" };
          }, 82602: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "التدقيق الإملائي" };
          }, 24575: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Kontrola pravopisu" };
          }, 37414: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Rechtschreibprüfung" };
          }, 82333: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Corrección ortográfica" };
          }, 80124: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "غلطیابی املایی" };
          }, 96516: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Oikeinkirjoituksen tarkistus" };
          }, 30965: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Vérification Orthographique" };
          }, 80194: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "בדיקת איות" };
          }, 49458: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Helyesírás-ellenőrzés" };
          }, 8916: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Spellchecking" };
          }, 11995: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ar: function() {
              return o3;
            }, cs_cz: function() {
              return n2;
            }, de: function() {
              return r;
            }, es: function() {
              return s;
            }, fa: function() {
              return a;
            }, fi: function() {
              return l;
            }, fr: function() {
              return c;
            }, he: function() {
              return d;
            }, hu: function() {
              return u;
            }, id: function() {
              return h;
            }, it: function() {
              return p;
            }, ja: function() {
              return f;
            }, ko: function() {
              return g;
            }, mn: function() {
              return m;
            }, nl: function() {
              return b;
            }, pl: function() {
              return _;
            }, pt_br: function() {
              return v;
            }, ru: function() {
              return x;
            }, tr: function() {
              return w;
            }, zh_cn: function() {
              return y;
            }, zh_tw: function() {
              return j;
            } });
            var o3 = i3(82602), n2 = i3(24575), r = i3(37414), s = i3(82333), a = i3(80124), l = i3(96516), c = i3(30965), d = i3(80194), u = i3(49458), h = i3(8916), p = i3(43268), f = i3(11968), g = i3(12715), m = i3(45698), b = i3(40119), _ = i3(92657), v = i3(68648), x = i3(70420), w = i3(98439), y = i3(55835), j = i3(34747);
          }, 43268: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Controllo ortografico" };
          }, 11968: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "スペルチェック" };
          }, 12715: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "맞춤법 검사" };
          }, 45698: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Дүрмийн алдаа шалгах" };
          }, 40119: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Spellingcontrole" };
          }, 92657: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Sprawdzanie pisowni" };
          }, 68648: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Verificação ortográfica" };
          }, 70420: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Проверка орфографии" };
          }, 98439: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "Yazım denetimi" };
          }, 55835: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "拼写检查" };
          }, 34747: function(t4) {
            "use strict";
            t4.exports = { Spellcheck: "拼字檢查" };
          }, 97179: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(56298), s = i3(26150), a = i3(71005), l = (i3(78703), i3(11995));
            class c extends a.k {
              constructor(t5) {
                super(t5), this.buttons = [{ group: "state", name: "spellcheck" }], (0, r.JW)(l);
              }
              afterInit(t5) {
                t5.e.on("afterInit afterAddPlace prepareWYSIWYGEditor", this.toggleSpellcheck), this.toggleSpellcheck(), t5.registerCommand("toggleSpellcheck", () => {
                  this.jodit.o.spellcheck = !this.jodit.o.spellcheck, this.toggleSpellcheck(), this.j.e.fire("updateToolbar");
                });
              }
              toggleSpellcheck() {
                (0, s.C)(this.jodit.editor, "spellcheck", this.jodit.o.spellcheck);
              }
              beforeDestruct(t5) {
              }
            }
            (0, o3.Cg)([n2.autobind], c.prototype, "toggleSpellcheck", null), r.fg.add("spellcheck", c);
          }, 27195: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.showCharsCounter = true, o3.T.prototype.countHTMLChars = false, o3.T.prototype.showWordsCounter = true;
          }, 65199: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(55186), r = i3(56298), s = i3(29866);
            i3(27195), r.fg.add("stat", class extends s.k {
              constructor() {
                super(...arguments), this.charCounter = null, this.wordCounter = null, this.reInit = () => {
                  this.j.o.showCharsCounter && this.charCounter && this.j.statusbar.append(this.charCounter, true), this.j.o.showWordsCounter && this.wordCounter && this.j.statusbar.append(this.wordCounter, true), this.j.e.off("change keyup", this.calc).on("change keyup", this.calc), this.calc();
                }, this.calc = this.j.async.throttle(() => {
                  const t5 = this.j.text;
                  if (this.j.o.showCharsCounter && this.charCounter) {
                    const e4 = this.j.o.countHTMLChars ? this.j.value : t5.replace((0, o3.SPACE_REG_EXP)(), "");
                    this.charCounter.textContent = this.j.i18n("Chars: %d", e4.length);
                  }
                  this.j.o.showWordsCounter && this.wordCounter && (this.wordCounter.textContent = this.j.i18n("Words: %d", t5.replace((0, o3.INVISIBLE_SPACE_REG_EXP)(), "").split((0, o3.SPACE_REG_EXP)()).filter((t6) => t6.length).length));
                }, this.j.defaultTimeout);
              }
              afterInit() {
                this.charCounter = this.j.c.span(), this.wordCounter = this.j.c.span(), this.j.e.on("afterInit changePlace afterAddPlace", this.reInit), this.reInit();
              }
              beforeDestruct() {
                n2.J.safeRemove(this.charCounter), n2.J.safeRemove(this.wordCounter), this.j.e.off("afterInit changePlace afterAddPlace", this.reInit), this.charCounter = null, this.wordCounter = null;
              }
            });
          }, 63400: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(36115);
            o3.T.prototype.toolbarSticky = true, o3.T.prototype.toolbarDisableStickyForMobile = true, o3.T.prototype.toolbarStickyOffset = 0;
          }, 1677: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(55186), a = i3(56298), l = i3(65147), c = i3(29866);
            i3(63400);
            const d = !n2.IS_ES_NEXT && n2.IS_IE;
            class u extends c.k {
              constructor() {
                super(...arguments), this.__isToolbarStuck = false, this.__createDummy = (t5) => {
                  this.__dummyBox = this.j.c.div(), this.__dummyBox.classList.add("jodit_sticky-dummy_toolbar"), this.j.container.insertBefore(this.__dummyBox, t5);
                }, this.addSticky = (t5) => {
                  this.__isToolbarStuck || (d && !this.__dummyBox && this.__createDummy(t5), this.j.container.classList.add("jodit_sticky"), this.__isToolbarStuck = true), (0, l.css)(t5, { top: this.j.o.toolbarStickyOffset || null, width: this.j.container.offsetWidth - 2 }), this.__dummyBox && (0, l.css)(this.__dummyBox, { height: t5.offsetHeight });
                }, this.removeSticky = (t5) => {
                  this.__isToolbarStuck && ((0, l.css)(t5, { width: "", top: "" }), this.j.container.classList.remove("jodit_sticky"), this.__isToolbarStuck = false);
                };
              }
              afterInit(t5) {
                t5.e.on(t5.ow, "scroll.sticky wheel.sticky mousewheel.sticky resize.sticky", this.__onScroll).on("getStickyState.sticky", () => this.__isToolbarStuck);
              }
              __onScroll() {
                const { jodit: t5 } = this;
                if (!t5.o.toolbarSticky || !t5.o.toolbar) return;
                const e4 = t5.ow.pageYOffset || t5.od.documentElement && t5.od.documentElement.scrollTop || 0, i4 = (0, l.offset)(t5.container, t5, t5.od, true), o4 = t5.getMode() === n2.MODE_WYSIWYG && e4 + t5.o.toolbarStickyOffset > i4.top && i4.top + i4.height > e4 + t5.o.toolbarStickyOffset && !(t5.o.toolbarDisableStickyForMobile && this.__isMobile());
                if (this.__isToolbarStuck === o4) return;
                const r2 = t5.toolbarContainer;
                r2 && (o4 ? this.addSticky(r2) : this.removeSticky(r2)), t5.e.fire("toggleSticky", o4);
              }
              __isMobile() {
                const { j: t5 } = this;
                return t5 && t5.options && t5.container && t5.options.sizeSM >= t5.container.offsetWidth;
              }
              beforeDestruct(t5) {
                s.J.safeRemove(this.__dummyBox), t5.e.off(t5.ow, "scroll.sticky wheel.sticky mousewheel.sticky resize.sticky", this.__onScroll).off(".sticky");
              }
            }
            (0, o3.Cg)([(0, r.throttle)()], u.prototype, "__onScroll", null), a.fg.add("sticky", u);
          }, 61964: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(931), n2 = i3(81875), r = i3.n(n2), s = i3(36115);
            s.T.prototype.usePopupForSpecialCharacters = false, s.T.prototype.specialCharacters = ["!", "&quot;", "#", "$", "%", "&amp;", "'", "(", ")", "*", "+", "-", ".", "/", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ":", ";", "&lt;", "=", "&gt;", "?", "@", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "[", "]", "^", "_", "`", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "{", "|", "}", "~", "&euro;", "&lsquo;", "&rsquo;", "&ldquo;", "&rdquo;", "&ndash;", "&mdash;", "&iexcl;", "&cent;", "&pound;", "&curren;", "&yen;", "&brvbar;", "&sect;", "&uml;", "&copy;", "&ordf;", "&laquo;", "&raquo;", "&not;", "&reg;", "&macr;", "&deg;", "&sup2;", "&sup3;", "&acute;", "&micro;", "&para;", "&middot;", "&cedil;", "&sup1;", "&ordm;", "&frac14;", "&frac12;", "&frac34;", "&iquest;", "&Agrave;", "&Aacute;", "&Acirc;", "&Atilde;", "&Auml;", "&Aring;", "&AElig;", "&Ccedil;", "&Egrave;", "&Eacute;", "&Ecirc;", "&Euml;", "&Igrave;", "&Iacute;", "&Icirc;", "&Iuml;", "&ETH;", "&Ntilde;", "&Ograve;", "&Oacute;", "&Ocirc;", "&Otilde;", "&Ouml;", "&times;", "&Oslash;", "&Ugrave;", "&Uacute;", "&Ucirc;", "&Uuml;", "&Yacute;", "&THORN;", "&szlig;", "&agrave;", "&aacute;", "&acirc;", "&atilde;", "&auml;", "&aring;", "&aelig;", "&ccedil;", "&egrave;", "&eacute;", "&ecirc;", "&euml;", "&igrave;", "&iacute;", "&icirc;", "&iuml;", "&eth;", "&ntilde;", "&ograve;", "&oacute;", "&ocirc;", "&otilde;", "&ouml;", "&divide;", "&oslash;", "&ugrave;", "&uacute;", "&ucirc;", "&uuml;", "&yacute;", "&thorn;", "&yuml;", "&OElig;", "&oelig;", "&#372;", "&#374", "&#373", "&#375;", "&sbquo;", "&#8219;", "&bdquo;", "&hellip;", "&trade;", "&#9658;", "&bull;", "&rarr;", "&rArr;", "&hArr;", "&diams;", "&asymp;"], o3.I.set("symbols", r()), s.T.prototype.controls.symbols = { hotkeys: ["ctrl+shift+i", "cmd+shift+i"], tooltip: "Insert Special Character", popup: (t5, e4, i4) => {
              const o4 = t5.e.fire("generateSpecialCharactersTable.symbols");
              if (o4) {
                if (t5.o.usePopupForSpecialCharacters) {
                  const e5 = t5.c.div();
                  return e5.classList.add("jodit-symbols"), e5.appendChild(o4), t5.e.on(o4, "close_dialog", i4), e5;
                }
                {
                  t5.alert(o4, "Select Special Character", void 0, "jodit-symbols").bindDestruct(t5);
                  const e5 = o4.querySelector("a");
                  e5 && e5.focus();
                }
              }
            } };
          }, 37605: function(t4) {
            "use strict";
            t4.exports = { symbols: "رمز" };
          }, 4726: function(t4) {
            "use strict";
            t4.exports = { symbols: "symbol" };
          }, 68349: function(t4) {
            "use strict";
            t4.exports = { symbols: "Symbol" };
          }, 88146: function(t4) {
            "use strict";
            t4.exports = { symbols: "Símbolo" };
          }, 11799: function(t4) {
            "use strict";
            t4.exports = { symbols: "سمبل" };
          }, 1311: function(t4) {
            "use strict";
            t4.exports = { symbols: "Symbolit" };
          }, 96282: function(t4) {
            "use strict";
            t4.exports = { symbols: "caractère" };
          }, 87809: function(t4) {
            "use strict";
            t4.exports = { symbols: "תו מיוחד" };
          }, 60817: function(t4) {
            "use strict";
            t4.exports = { symbols: "Szimbólum" };
          }, 48207: function(t4) {
            "use strict";
            t4.exports = { symbols: "simbol" };
          }, 84182: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { ar: function() {
              return o3;
            }, cs_cz: function() {
              return n2;
            }, de: function() {
              return r;
            }, es: function() {
              return s;
            }, fa: function() {
              return a;
            }, fi: function() {
              return l;
            }, fr: function() {
              return c;
            }, he: function() {
              return d;
            }, hu: function() {
              return u;
            }, id: function() {
              return h;
            }, it: function() {
              return p;
            }, ja: function() {
              return f;
            }, ko: function() {
              return g;
            }, mn: function() {
              return m;
            }, nl: function() {
              return b;
            }, pl: function() {
              return _;
            }, pt_br: function() {
              return v;
            }, ru: function() {
              return x;
            }, tr: function() {
              return w;
            }, zh_cn: function() {
              return y;
            }, zh_tw: function() {
              return j;
            } });
            var o3 = i3(37605), n2 = i3(4726), r = i3(68349), s = i3(88146), a = i3(11799), l = i3(1311), c = i3(96282), d = i3(87809), u = i3(60817), h = i3(48207), p = i3(1663), f = i3(37107), g = i3(73948), m = i3(12333), b = i3(82556), _ = i3(56114), v = i3(47321), x = i3(9407), w = i3(98376), y = i3(47238), j = i3(72386);
          }, 1663: function(t4) {
            "use strict";
            t4.exports = { symbols: "Simbolo" };
          }, 37107: function(t4) {
            "use strict";
            t4.exports = { symbols: "symbol" };
          }, 73948: function(t4) {
            "use strict";
            t4.exports = { symbols: "기호" };
          }, 12333: function(t4) {
            "use strict";
            t4.exports = { symbols: "тэмдэгт" };
          }, 82556: function(t4) {
            "use strict";
            t4.exports = { symbols: "symbool" };
          }, 56114: function(t4) {
            "use strict";
            t4.exports = { symbols: "symbol" };
          }, 47321: function(t4) {
            "use strict";
            t4.exports = { symbols: "Símbolo" };
          }, 9407: function(t4) {
            "use strict";
            t4.exports = { symbols: "символ" };
          }, 98376: function(t4) {
            "use strict";
            t4.exports = { symbols: "Sembol" };
          }, 47238: function(t4) {
            "use strict";
            t4.exports = { symbols: "符号" };
          }, 72386: function(t4) {
            "use strict";
            t4.exports = { symbols: "符號" };
          }, 35541: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(55186), r = i3(56298), s = i3(97369), a = i3(29866), l = (i3(61964), i3(84182));
            r.fg.add("symbols", class extends a.k {
              constructor(t5) {
                super(t5), this.buttons = [{ name: "symbols", group: "insert" }], this.countInRow = 17, (0, r.JW)(l);
              }
              afterInit(t5) {
                t5.e.on("generateSpecialCharactersTable.symbols", () => {
                  const e4 = t5.c.fromHTML('<div class="jodit-symbols__container">\n						<div class="jodit-symbols__container_table">\n							<table class="jodit-symbols__table"><tbody></tbody></table>\n						</div>\n						<div class="jodit-symbols__container_preview">\n							<div class="jodit-symbols__preview"></div>\n						</div>\n					</div>'), i4 = e4.querySelector(".jodit-symbols__preview"), r2 = e4.querySelector("table").tBodies[0], a2 = [];
                  for (let e5 = 0; t5.o.specialCharacters.length > e5; ) {
                    const i5 = t5.c.element("tr");
                    for (let o4 = 0; this.countInRow > o4 && t5.o.specialCharacters.length > e5; o4 += 1, e5 += 1) {
                      const n3 = t5.c.element("td"), r3 = t5.c.fromHTML(`<a
									data-index="${e5}"
									data-index-j="${o4}"
									role="option"
									tabindex="-1"
							>${t5.o.specialCharacters[e5]}</a>`);
                      a2.push(r3), n3.appendChild(r3), i5.appendChild(n3);
                    }
                    r2.appendChild(i5);
                  }
                  const l2 = this;
                  return t5.e.on(a2, "focus", function() {
                    i4.innerHTML = this.innerHTML;
                  }).on(a2, "mousedown", function(e5) {
                    n2.J.isTag(this, "a") && (t5.s.focus(), t5.s.insertHTML(this.innerHTML), t5.e.fire(this, "close_dialog"), e5 && e5.preventDefault(), e5 && e5.stopImmediatePropagation());
                  }).on(a2, "mouseenter", function() {
                    n2.J.isTag(this, "a") && this.focus();
                  }).on(a2, "keydown", (e5) => {
                    const i5 = e5.target;
                    if (n2.J.isTag(i5, "a")) {
                      const n3 = parseInt((0, s.attr)(i5, "-index") || "0", 10), r3 = parseInt((0, s.attr)(i5, "data-index-j") || "0", 10);
                      let c;
                      switch (e5.key) {
                        case o3.KEY_UP:
                        case o3.KEY_DOWN:
                          c = e5.key === o3.KEY_UP ? n3 - l2.countInRow : n3 + l2.countInRow, void 0 === a2[c] && (c = e5.key === o3.KEY_UP ? Math.floor(a2.length / l2.countInRow) * l2.countInRow + r3 : r3, c > a2.length - 1 && (c -= l2.countInRow)), a2[c] && a2[c].focus();
                          break;
                        case o3.KEY_RIGHT:
                        case o3.KEY_LEFT:
                          c = e5.key === o3.KEY_LEFT ? n3 - 1 : n3 + 1, void 0 === a2[c] && (c = e5.key === o3.KEY_LEFT ? a2.length - 1 : 0), a2[c] && a2[c].focus();
                          break;
                        case o3.KEY_ENTER:
                          t5.e.fire(i5, "mousedown"), e5.stopImmediatePropagation(), e5.preventDefault();
                      }
                    }
                  }), e4;
                });
              }
              beforeDestruct(t5) {
                t5.e.off("generateSpecialCharactersTable.symbols");
              }
            });
          }, 48840: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { O: function() {
              return o3.O;
            } });
            var o3 = i3(86572);
          }, 86572: function(t4, e3, i3) {
            "use strict";
            i3.d(e3, { O: function() {
              return n2;
            } });
            var o3 = i3(55186);
            function n2(t5, e4 = false) {
              if (!t5.o.tab.tabInsideLiInsertNewList) return false;
              const [i4, n3] = function(t6) {
                const e5 = t6.createInside.fake(), i5 = t6.createInside.fake(), o4 = t6.s.range.cloneRange();
                o4.collapse(true), o4.insertNode(e5);
                const n4 = t6.s.range.cloneRange();
                return n4.collapse(false), n4.insertNode(i5), [e5, i5];
              }(t5);
              try {
                const n4 = function(t6, e5, i5) {
                  const n5 = o3.J.closest(e5, "li", t6.editor);
                  return !!n5 && !(!i5 && !o3.J.isLeaf(n5.previousElementSibling)) && !(i5 && !o3.J.closest(n5, "li", t6.editor)) && n5;
                }(t5, i4, e4);
                if (!n4) return false;
                if (!function(t6, e5, i5) {
                  const n5 = o3.J.closest(i5, "li", e5.editor);
                  return !(!n5 || n5 !== t6 && !t6.contains(n5));
                }(n4, t5, i4)) return false;
                const r = o3.J.closest(n4, ["ol", "ul"], t5.editor);
                return !(!r || e4 && !o3.J.closest(r, "li", t5.editor) || (e4 ? function(t6, e5, i5) {
                  const n5 = o3.J.closest(e5, "li", t6.editor), r2 = Array.from(e5.children).filter((t7) => o3.J.isLeaf(t7));
                  o3.J.after(n5, i5);
                  const s = r2.indexOf(i5);
                  if (0 !== s && 1 !== r2.length || o3.J.safeRemove(e5), s !== r2.length - 1) {
                    const t7 = e5.cloneNode();
                    o3.J.append(i5, t7);
                    for (let e6 = s + 1; r2.length > e6; e6 += 1) o3.J.append(t7, r2[e6]);
                  }
                }(t5, r, n4) : function(t6, e5, i5) {
                  const n5 = i5.previousElementSibling, r2 = n5.lastElementChild, s = o3.J.isTag(r2, e5.tagName) ? r2 : t6.createInside.element(e5.tagName, Array.from(e5.attributes).reduce((t7, e6) => (t7[e6.name] = e6.value, t7), {}));
                  s.appendChild(i5), r2 !== s && n5.appendChild(s);
                }(t5, r, n4), 0));
              } finally {
                const e5 = t5.s.createRange();
                e5.setStartAfter(i4), e5.setEndBefore(n3), t5.s.selectRange(e5), o3.J.safeRemove(i4), o3.J.safeRemove(n3);
              }
              return false;
            }
            i3(28712);
          }, 50974: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.tab = { tabInsideLiInsertNewList: true };
          }, 59965: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(17352), r = i3(22664), s = i3(56298), a = i3(71005), l = (i3(50974), i3(48840));
            class c extends a.k {
              afterInit(t5) {
              }
              __onTab(t5) {
                if (t5.key === n2.KEY_TAB && this.__onShift(t5.shiftKey)) return false;
              }
              __onCommand(t5) {
                if (("indent" === t5 || "outdent" === t5) && this.__onShift("outdent" === t5)) return false;
              }
              __onShift(t5) {
                const e4 = (0, l.O)(this.j, t5);
                return e4 && this.j.e.fire("afterTab", t5), e4;
              }
              beforeDestruct(t5) {
              }
            }
            (0, o3.Cg)([(0, r.watch)(":keydown.tab")], c.prototype, "__onTab", null), (0, o3.Cg)([(0, r.watch)(":beforeCommand.tab")], c.prototype, "__onCommand", null), s.fg.add("tab", c);
          }, 2533: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(55186), r = i3(56298), s = i3(65147), a = i3(11648);
            const l = /* @__PURE__ */ new Set([o3.KEY_TAB, o3.KEY_LEFT, o3.KEY_RIGHT, o3.KEY_UP, o3.KEY_DOWN]);
            r.fg.add("tableKeyboardNavigation", function(t5) {
              t5.e.off(".tableKeyboardNavigation").on("keydown.tableKeyboardNavigation", (e4) => {
                const { key: i4 } = e4;
                if (!l.has(i4)) return;
                const r2 = t5.s.current();
                if (!r2) return;
                const c = n2.J.up(r2, n2.J.isCell, t5.editor);
                if (!c) return;
                const { range: d } = t5.s;
                if (i4 !== o3.KEY_TAB && r2 !== c) {
                  const t6 = i4 === o3.KEY_RIGHT || i4 === o3.KEY_DOWN, e5 = (0, s.call)(t6 ? n2.J.next : n2.J.prev, r2, (t7) => i4 === o3.KEY_UP || i4 === o3.KEY_DOWN ? n2.J.isTag(t7, "br") : Boolean(t7), c);
                  if (!t6 && (e5 || i4 !== o3.KEY_UP && n2.J.isText(r2) && 0 !== d.startOffset) || t6 && (e5 || i4 !== o3.KEY_DOWN && n2.J.isText(r2) && r2.nodeValue && d.startOffset !== r2.nodeValue.length)) return;
                }
                const u = t5.getInstance(a.X, t5.o), h = n2.J.closest(c, "table", t5.editor);
                let p = null;
                const f = i4 === o3.KEY_LEFT || e4.shiftKey, g = () => (0, s.call)(f ? n2.J.prev : n2.J.next, c, n2.J.isCell, h);
                switch (i4) {
                  case o3.KEY_TAB:
                  case o3.KEY_LEFT:
                    p = g(), p || (u.appendRow(h, !!f && h.querySelector("tr"), !f), p = g());
                    break;
                  case o3.KEY_UP:
                  case o3.KEY_DOWN: {
                    const t6 = u.formalMatrix(h), [e5, n3] = u.formalCoordinate(h, c);
                    i4 === o3.KEY_UP ? void 0 !== t6[e5 - 1] && (p = t6[e5 - 1][n3]) : void 0 !== t6[e5 + 1] && (p = t6[e5 + 1][n3]);
                  }
                }
                if (p) {
                  if (t5.e.fire("hidePopup hideResizer"), p.firstChild) i4 === o3.KEY_TAB ? t5.s.select(p, true) : t5.s.setCursorIn(p, i4 === o3.KEY_RIGHT || i4 === o3.KEY_DOWN);
                  else {
                    const e5 = t5.createInside.element("br");
                    p.appendChild(e5), t5.s.setCursorBefore(e5);
                  }
                  return t5.synchronizeValues(), false;
                }
              });
            });
          }, 94291: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(71842), n2 = i3(65147), r = i3(97369), s = i3(931), a = i3(67447), l = i3.n(a), c = i3(36115);
            c.T.prototype.table = { selectionCellStyle: "border: 1px double #1e88e5 !important;", useExtraClassesOptions: false }, s.I.set("table", l()), c.T.prototype.controls.table = { data: { cols: 10, rows: 10, classList: { "table table-bordered": "Bootstrap Bordered", "table table-striped": "Bootstrap Striped", "table table-dark": "Bootstrap Dark" } }, popup: (t5, e4, i4, s2) => {
              const a2 = s2.control, l2 = a2.data && a2.data.rows ? a2.data.rows : 10, c2 = a2.data && a2.data.cols ? a2.data.cols : 10, d = t5.c.fromHTML('<form class="jodit-form jodit-form__inserter"><div class="jodit-form__table-creator-box"><div class="jodit-form__container"></div><div class="jodit-form__options">' + (() => {
                if (!t5.o.table.useExtraClassesOptions) return "";
                const e5 = [];
                if (a2.data) {
                  const t6 = a2.data.classList;
                  Object.keys(t6).forEach((i5) => {
                    e5.push(`<label class="jodit_vertical_middle"><input class="jodit-checkbox" value="${i5}" type="checkbox"/>${t6[i5]}</label>`);
                  });
                }
                return e5.join("");
              })() + '</div></div><label class="jodit-form__center"><span>1</span> &times; <span>1</span></label></form>'), u = d.querySelectorAll("span")[0], h = d.querySelectorAll("span")[1], p = d.querySelector(".jodit-form__container"), f = d.querySelector(".jodit-form__options"), g = [], m = l2 * c2;
              for (let e5 = 0; m > e5; e5 += 1) g[e5] || g.push(t5.c.element("span", { dataIndex: e5 }));
              if (t5.e.on(p, "mousemove", (t6, e5) => {
                const i5 = t6.target;
                if (!o3.J.isTag(i5, "span")) return;
                const n3 = void 0 === e5 || isNaN(e5) ? parseInt((0, r.attr)(i5, "-index") || "0", 10) : e5 || 0, s3 = Math.ceil((n3 + 1) / c2), a3 = n3 % c2 + 1;
                for (let t7 = 0; g.length > t7; t7 += 1) g[t7].className = t7 % c2 + 1 > a3 || s3 < Math.ceil((t7 + 1) / c2) ? "" : "jodit_hovered";
                h.textContent = a3.toString(), u.textContent = s3.toString();
              }).on(p, "touchstart mousedown", (e5) => {
                const s3 = e5.target;
                if (e5.preventDefault(), e5.stopImmediatePropagation(), !o3.J.isTag(s3, "span")) return;
                const a3 = parseInt((0, r.attr)(s3, "-index") || "0", 10), l3 = Math.ceil((a3 + 1) / c2), d2 = a3 % c2 + 1, u2 = t5.createInside, h2 = u2.element("tbody"), p2 = u2.element("table");
                p2.appendChild(h2);
                let g2, m2, b = null;
                for (let t6 = 1; l3 >= t6; t6 += 1) {
                  g2 = u2.element("tr");
                  for (let t7 = 1; d2 >= t7; t7 += 1) m2 = u2.element("td"), b || (b = m2), (0, n2.css)(m2, "width", (100 / d2).toFixed(4) + "%"), m2.appendChild(u2.element("br")), g2.appendChild(u2.text("\n")), g2.appendChild(u2.text("	")), g2.appendChild(m2);
                  h2.appendChild(u2.text("\n")), h2.appendChild(g2);
                }
                (0, n2.$$)("input[type=checkbox]:checked", f).forEach((t6) => {
                  t6.value.split(/[\s]+/).forEach((t7) => {
                    p2.classList.add(t7);
                  });
                }), t5.editor.firstChild && t5.s.insertNode(u2.text("\n"), false, false), t5.s.insertNode(p2, false), b && (t5.s.setCursorIn(b), (0, n2.scrollIntoViewIfNeeded)(b, t5.editor, t5.ed)), i4();
              }), s2 && s2.parentElement) {
                for (let e5 = 0; l2 > e5; e5 += 1) {
                  const i5 = t5.c.div();
                  for (let t6 = 0; c2 > t6; t6 += 1) i5.appendChild(g[e5 * c2 + t6]);
                  p.appendChild(i5);
                }
                g[0] && (g[0].className = "hovered");
              }
              return d;
            }, tooltip: "Insert table" };
          }, 76385: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298);
            i3(94291), o3.fg.add("table", function(t5) {
              t5.registerButton({ name: "table", group: "insert" });
            });
          }, 31686: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(65147), n2 = i3(35265), r = i3(20703), s = i3(931), a = i3(16116), l = i3(36339), c = i3.n(l), d = i3(36115);
            s.I.set("video", c()), d.T.prototype.controls.video = { popup: (t5, e4, i4) => {
              const s2 = new r.XV(t5, [new r.Yh(t5, [new r.tS(t5, { name: "url", required: true, label: "URL", placeholder: "https://", validators: ["url"] })]), new r.Yh(t5, [(0, n2.$n)(t5, "", "Insert", "primary").onAction(() => s2.submit())])]), l2 = new r.XV(t5, [new r.Yh(t5, [new r.F0(t5, { name: "code", required: true, label: "Embed code" })]), new r.Yh(t5, [(0, n2.$n)(t5, "", "Insert", "primary").onAction(() => l2.submit())])]), c2 = [], d2 = (e5) => {
                t5.s.restore(), t5.s.insertHTML(e5), i4();
              };
              return t5.s.save(), c2.push({ icon: "link", name: "Link", content: s2.container }, { icon: "source", name: "Code", content: l2.container }), s2.onSubmit((t6) => {
                d2((0, o3.convertMediaUrlToVideoEmbed)(t6.url));
              }), l2.onSubmit((t6) => {
                d2(t6.code);
              }), (0, a.Zg)(t5, c2);
            }, tags: ["iframe"], tooltip: "Insert youtube/vimeo video" };
          }, 38309: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(56298);
            i3(31686), o3.fg.add("video", function(t5) {
              t5.registerButton({ name: "video", group: "media" });
            });
          }, 2805: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.wrapNodes = { exclude: /* @__PURE__ */ new Set(["hr", "style", "br"]), emptyBlockAfterInit: true };
          }, 14367: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(31635), n2 = i3(22664), r = i3(71842), s = i3(56298), a = i3(98253), l = i3(71005);
            i3(2805);
            class c extends l.k {
              constructor() {
                super(...arguments), this.isSuitableStart = (t5) => {
                  var e4;
                  return r.J.isText(t5) && (0, a.K)(t5.nodeValue) && (/[^\s]/.test(t5.nodeValue) || (null === (e4 = t5.parentNode) || void 0 === e4 ? void 0 : e4.firstChild) === t5 && this.isSuitable(t5.nextSibling)) || this.isNotWrapped(t5) && !r.J.isTemporary(t5);
                }, this.isSuitable = (t5) => r.J.isText(t5) || this.isNotWrapped(t5), this.isNotWrapped = (t5) => r.J.isElement(t5) && !(r.J.isBlock(t5) || r.J.isTag(t5, this.j.o.wrapNodes.exclude));
              }
              afterInit(t5) {
                "br" !== t5.o.enter.toLowerCase() && t5.e.on("drop.wtn focus.wtn keydown.wtn mousedown.wtn afterInit.wtn backSpaceAfterDelete.wtn", this.preprocessInput, { top: true }).on("afterInit.wtn postProcessSetEditorValue.wtn afterCommitStyle.wtn backSpaceAfterDelete.wtn", this.postProcessSetEditorValue);
              }
              beforeDestruct(t5) {
                t5.e.off(".wtn");
              }
              postProcessSetEditorValue() {
                const { jodit: t5 } = this;
                if (!t5.isEditorMode()) return;
                let e4 = t5.editor.firstChild, i4 = false;
                for (; e4; ) {
                  if (e4 = d(e4, t5), this.isSuitableStart(e4)) {
                    i4 || t5.s.save(), i4 = true;
                    const o4 = t5.createInside.element(t5.o.enter);
                    for (r.J.before(e4, o4); e4 && this.isSuitable(e4); ) {
                      const t6 = e4.nextSibling;
                      o4.appendChild(e4), e4 = t6;
                    }
                    o4.normalize(), e4 = o4;
                  }
                  e4 = e4 && e4.nextSibling;
                }
                i4 && (t5.s.restore(), "afterInit" === t5.e.current && t5.e.fire("internalChange"));
              }
              preprocessInput() {
                const { jodit: t5 } = this, e4 = "afterInit" === t5.e.current;
                if (!t5.isEditorMode() || t5.editor.firstChild || !t5.o.wrapNodes.emptyBlockAfterInit && e4) return;
                const i4 = t5.createInside.element(t5.o.enter), o4 = t5.createInside.element("br");
                r.J.append(i4, o4), r.J.append(t5.editor, i4), t5.s.isFocused() && t5.s.setCursorBefore(o4), t5.e.fire("internalChange");
              }
            }
            function d(t5, e4) {
              let i4 = t5, o4 = t5;
              do {
                if (!r.J.isElement(o4) || !r.J.isLeaf(o4) || r.J.isList(o4.parentElement)) break;
                {
                  const t6 = r.J.findNotEmptySibling(o4, false);
                  r.J.isTag(i4, "ul") ? i4.appendChild(o4) : i4 = r.J.wrap(o4, "ul", e4.createInside), o4 = t6;
                }
              } while (o4);
              return i4;
            }
            (0, o3.Cg)([n2.autobind], c.prototype, "postProcessSetEditorValue", null), (0, o3.Cg)([n2.autobind], c.prototype, "preprocessInput", null), s.fg.add("wrapNodes", c);
          }, 88850: function(t4, e3, i3) {
            "use strict";
            i3(36115).T.prototype.showXPathInStatusbar = true;
          }, 36133: function(t4, e3, i3) {
            "use strict";
            var o3 = i3(17352), n2 = i3(71842), r = i3(56298), s = i3(65147), a = i3(71005), l = i3(34248), c = i3(8809);
            i3(88850), r.fg.add("xpath", class extends a.k {
              constructor() {
                super(...arguments), this.onContext = (t5, e4) => (this.menu || (this.menu = new l.t(this.j)), this.menu.show(e4.clientX, e4.clientY, [{ icon: "bin", title: t5 === this.j.editor ? "Clear" : "Remove", exec: () => {
                  t5 !== this.j.editor ? n2.J.safeRemove(t5) : this.j.value = "", this.j.synchronizeValues();
                } }, { icon: "select-all", title: "Select", exec: () => {
                  this.j.s.select(t5);
                } }]), false), this.onSelectPath = (t5, e4) => {
                  this.j.s.focus();
                  const i4 = (0, s.attr)(e4.target, "-path") || "/";
                  if ("/" === i4) return this.j.execCommand("selectall"), false;
                  try {
                    const t6 = this.j.ed.evaluate(i4, this.j.editor, null, XPathResult.ANY_TYPE, null).iterateNext();
                    if (t6) return this.j.s.select(t6), false;
                  } catch (t6) {
                  }
                  return this.j.s.select(t5), false;
                }, this.tpl = (t5, e4, i4, o4) => {
                  const n3 = this.j.c.fromHTML(`<span class="jodit-xpath__item"><a role="button" data-path="${e4}" title="${o4}" tabindex="-1"'>${(0, s.trim)(i4)}</a></span>`), r2 = n3.firstChild;
                  return this.j.e.on(r2, "click", this.onSelectPath.bind(this, t5)).on(r2, "contextmenu", this.onContext.bind(this, t5)), n3;
                }, this.removeSelectAll = () => {
                  this.selectAllButton && (this.selectAllButton.destruct(), delete this.selectAllButton);
                }, this.appendSelectAll = () => {
                  this.removeSelectAll(), this.selectAllButton = (0, c.BJ)(this.j, { name: "selectall", ...this.j.o.controls.selectall }), this.selectAllButton.state.size = "tiny", this.container && this.container.insertBefore(this.selectAllButton.container, this.container.firstChild);
                }, this.calcPathImd = () => {
                  if (this.isDestructed) return;
                  const t5 = this.j.s.current();
                  if (this.container && (this.container.innerHTML = o3.INVISIBLE_SPACE), t5) {
                    let e4, i4, o4;
                    n2.J.up(t5, (t6) => {
                      !t6 || this.j.editor === t6 || n2.J.isText(t6) || n2.J.isComment(t6) || (e4 = t6.nodeName.toLowerCase(), i4 = (0, s.getXPathByElement)(t6, this.j.editor).replace(/^\//, ""), o4 = this.tpl(t6, i4, e4, this.j.i18n("Select %s", e4)), this.container && this.container.insertBefore(o4, this.container.firstChild));
                    }, this.j.editor);
                  }
                  this.appendSelectAll();
                }, this.calcPath = this.j.async.debounce(this.calcPathImd, 2 * this.j.defaultTimeout);
              }
              afterInit() {
                this.j.o.showXPathInStatusbar && (this.container = this.j.c.div("jodit-xpath"), this.j.e.off(".xpath").on("mouseup.xpath change.xpath keydown.xpath changeSelection.xpath", this.calcPath).on("afterSetMode.xpath afterInit.xpath changePlace.xpath", () => {
                  this.j.o.showXPathInStatusbar && this.container && (this.j.statusbar.append(this.container), this.j.getRealMode() === o3.MODE_WYSIWYG ? this.calcPath() : (this.container && (this.container.innerHTML = o3.INVISIBLE_SPACE), this.appendSelectAll()));
                }), this.calcPath());
              }
              beforeDestruct() {
                this.j && this.j.events && this.j.e.off(".xpath"), this.removeSelectAll(), this.menu && this.menu.destruct(), n2.J.safeRemove(this.container), delete this.menu, delete this.container;
              }
            });
          }, 79721: function(t4, e3, i3) {
            "use strict";
            i3.r(e3), i3.d(e3, { angle_down: function() {
              return n2.a;
            }, angle_left: function() {
              return s.a;
            }, angle_right: function() {
              return l.a;
            }, angle_up: function() {
              return d.a;
            }, bin: function() {
              return h.a;
            }, cancel: function() {
              return f.a;
            }, center: function() {
              return m.a;
            }, check: function() {
              return _.a;
            }, chevron: function() {
              return x.a;
            }, dots: function() {
              return y.a;
            }, eye: function() {
              return k.a;
            }, file: function() {
              return S.a;
            }, folder: function() {
              return T.a;
            }, info_circle: function() {
              return I.a;
            }, left: function() {
              return L.a;
            }, lock: function() {
              return P.a;
            }, ok: function() {
              return N.a;
            }, pencil: function() {
              return D.a;
            }, plus: function() {
              return O.a;
            }, resize_handler: function() {
              return H.a;
            }, right: function() {
              return V.a;
            }, save: function() {
              return U.a;
            }, settings: function() {
              return Y.a;
            }, unlock: function() {
              return G.a;
            }, update: function() {
              return Z.a;
            }, upload: function() {
              return tt.a;
            }, valign: function() {
              return it.a;
            } });
            var o3 = i3(88497), n2 = i3.n(o3), r = i3(91882), s = i3.n(r), a = i3(14305), l = i3.n(a), c = i3(58446), d = i3.n(c), u = i3(39858), h = i3.n(u), p = i3(70881), f = i3.n(p), g = i3(60636), m = i3.n(g), b = i3(32013), _ = i3.n(b), v = i3(45512), x = i3.n(v), w = i3(80347), y = i3.n(w), j = i3(95134), k = i3.n(j), C = i3(70697), S = i3.n(C), z = i3(49983), T = i3.n(z), E = i3(98964), I = i3.n(E), A = i3(8136), L = i3.n(A), M = i3(94806), P = i3.n(M), R = i3(31365), N = i3.n(R), B = i3(44636), D = i3.n(B), q = i3(36327), O = i3.n(q), J = i3(53328), H = i3.n(J), F = i3(98711), V = i3.n(F), W = i3(53808), U = i3.n(W), $ = i3(20784), Y = i3.n($), K = i3(70999), G = i3.n(K), X = i3(45244), Z = i3.n(X), Q = i3(99876), tt = i3.n(Q), et = i3(14006), it = i3.n(et);
          }, 57741: function(t4) {
            t4.exports.default = ["إبدأ في الكتابة...", "حول جوديت", "محرر جوديت", "دليل مستخدم جوديت", "يحتوي على مساعدة مفصلة للاستخدام", "للحصول على معلومات حول الترخيص، يرجى الذهاب لموقعنا:", "شراء النسخة الكاملة", "حقوق الطبع والنشر © XDSoft.net - Chupurnov Valeriy. كل الحقوق محفوظة.", "مِرْساة", "فتح في نافذة جديدة", "فتح المحرر في الحجم الكامل", "مسح التنسيق", "ملء اللون أو تعيين لون النص", "إعادة", "تراجع", "عريض", "مائل", "إدراج قائمة غير مرتبة", "إدراج قائمة مرتبة", "محاذاة للوسط", "محاذاة مثبتة", "محاذاة لليسار", "محاذاة لليمين", "إدراج خط أفقي", "إدراج صورة", "ادخال الملف", "إدراج فيديو يوتيوب/فيميو ", "إدراج رابط", "حجم الخط", "نوع الخط", "إدراج كتلة تنسيق", "عادي", "عنوان 1", "عنوان 2", "عنوان 3", "عنوان 4", "إقتباس", "كود", "إدراج", "إدراج جدول", "تقليل المسافة البادئة", "زيادة المسافة البادئة", "تحديد أحرف خاصة", "إدراج حرف خاص", "تنسيق الرسم", "تغيير الوضع", "هوامش", "أعلى", "يمين", "أسفل", "يسار", "الأنماط", "الطبقات", "محاذاة", "اليمين", "الوسط", "اليسار", "--غير مضبوط--", "Src", "العنوان", "العنوان البديل", "الرابط", "افتح الرابط في نافذة جديدة", "الصورة", "ملف", "متقدم", "خصائص الصورة", "إلغاء", "حسنا", "متصفح الملفات", "حدث خطأ في تحميل القائمة ", "حدث خطأ في تحميل المجلدات", "هل أنت واثق؟", "أدخل اسم المجلد", "إنشاء مجلد", "أكتب إسم", "إسقاط صورة", "إسقاط الملف", "أو أنقر", "النص البديل", "رفع", "تصفح", "الخلفية", "نص", "أعلى", "الوسط", "الأسفل", "إدراج عمود قبل", "إدراج عمود بعد", "إدراج صف أعلى", "إدراج صف أسفل", "حذف الجدول", "حذف الصف", "حذف العمود", "خلية فارغة", "%d حرف", "%d كلام", "اضرب من خلال", "أكد", "حرف فوقي", "مخطوطة", "قطع الاختيار", "اختر الكل", "استراحة", "البحث عن", "استبدل ب", "محل", "معجون", "اختر محتوى للصق", "مصدر", "بالخط العريض", "مائل", "شغل", "صلة", "إلغاء", "كرر", "طاولة", "صورة", "نظيف", "فقرة", "حجم الخط", "فيديو", "الخط", "حول المحرر", "طباعة", "أكد", "شطب", "المسافة البادئة", "نتوء", "ملء الشاشة", "الحجم التقليدي", "الخط", "قائمة", "قائمة مرقمة", "قطع", "اختر الكل", "قانون", "فتح الرابط", "تعديل الرابط", "سمة Nofollow", "إزالة الرابط", "تحديث", "لتحرير", "مراجعة", "URL", "تحرير", "محاذاة أفقية", "فلتر", "عن طريق التغيير", "بالاسم", "حسب الحجم", "إضافة مجلد", "إعادة", "احتفظ", "حفظ باسم", "تغيير الحجم", "حجم القطع", "عرض", "ارتفاع", "حافظ على النسب", "أن", "لا", "حذف", "تميز", "تميز %s", "محاذاة عمودية", "انشق، مزق", "اذهب", "أضف العمود", "اضف سطر", "رخصة %s", "حذف", "انقسام عمودي", "تقسيم أفقي", "الحدود", "يشبه الكود الخاص بك HTML. تبقي كما HTML؟", "الصق ك HTML", "احتفظ", "إدراج كنص", "إدراج النص فقط", "يمكنك فقط تحرير صورك الخاصة. تحميل هذه الصورة على المضيف؟", "تم تحميل الصورة بنجاح على الخادم!", "لوحة", "لا توجد ملفات في هذا الدليل.", "إعادة تسمية", "أدخل اسم جديد", "معاينة", "تحميل", "لصق من الحافظة", "متصفحك لا يدعم إمكانية الوصول المباشر إلى الحافظة.", "نسخ التحديد", "نسخ", "دائرة نصف قطرها الحدود", "عرض كل", "تطبيق", "يرجى ملء هذا المجال", "يرجى إدخال عنوان ويب", "الافتراضي", "دائرة", "نقطة", "المربعة", "البحث", "تجد السابقة", "تجد التالي", "للصق المحتوى قادم من Microsoft Word/Excel الوثيقة. هل تريد أن تبقي شكل أو تنظيفه ؟ ", "كلمة لصق الكشف عن", "نظيفة", "أدخل اسم الفصل", "اضغط البديل لتغيير حجم مخصص"];
          }, 56014: function(t4) {
            t4.exports.default = ["Napiš něco", "O Jodit", "Editor Jodit", "Jodit Uživatelská příručka", "obsahuje detailní nápovědu", "Pro informace o licenci, prosím, přejděte na naši stránku:", "Koupit plnou verzi", "Copyright © XDSoft.net - Chupurnov Valeriy. Všechna práva vyhrazena.", "Anchor", "Otevřít v nové záložce", "Otevřít v celoobrazovkovém režimu", "Vyčistit formátování", "Barva výplně a písma", "Vpřed", "Zpět", "Tučné", "Kurzíva", "Odrážky", "Číslovaný seznam", "Zarovnat na střed", "Zarovnat do bloku", "Zarovnat vlevo", "Zarovnat vpravo", "Vložit horizontální linku", "Vložit obrázek", "Vložit soubor", "Vložit video (YT/Vimeo)", "Vložit odkaz", "Velikost písma", "Typ písma", "Formátovat blok", "Normální text", "Nadpis 1", "Nadpis 2", "Nadpis 3", "Nadpis 4", "Citát", "Kód", "Vložit", "Vložit tabulku", "Zmenšit odsazení", "Zvětšit odsazení", "Vybrat speciální symbol", "Vložit speciální symbol", "Použít formát", "Změnit mód", "Okraje", "horní", "pravý", "spodní", "levý", "Styly", "Třídy", "Zarovnání", "Vpravo", "Na střed", "Vlevo", "--nenastaveno--", "src", "Titulek", "Alternativní text (alt)", "Link", "Otevřít link v nové záložce", "Obrázek", "soubor", "Rozšířené", "Vlastnosti obrázku", "Zpět", "Ok", "Prohlížeč souborů", "Chyba při načítání seznamu souborů", "Chyba při načítání složek", "Jste si jistý(á)?", "Název složky", "Vytvořit složku", "název", "Přetáhněte sem obrázek", "Přetáhněte sem soubor", "nebo klikněte", "Alternativní text", "Nahrát", "Server", "Pozadí", "Text", "Nahoru", "Na střed", "Dolu", "Vložit sloupec před", "Vložit sloupec za", "Vložit řádek nad", "Vložit řádek pod", "Vymazat tabulku", "Vymazat řádku", "Vymazat sloupec", "Vyčistit buňku", "Znaky: %d", "Slova: %d", "Přeškrtnuto", "Podtrženo", "Horní index", "Dolní index", "Vyjmout označené", "Označit vše", "Zalomení", "Najdi", "Nahradit za", "Vyměňte", "Vložit", "Vyber obsah pro vložení", "HTML", "tučně", "kurzíva", "štětec", "odkaz", "zpět", "vpřed", "tabulka", "obrázek", "guma", "odstavec", "velikost písma", "video", "písmo", "о editoru", "tisk", "podtrženo", "přeškrtnuto", "zvětšit odsazení", "zmenšit odsazení", "celoobrazovkový režim", "smrsknout", "Linka", "Odrážka", "Číslovaný seznam", "Vyjmout", "Označit vše", "Kód", "Otevřít odkaz", "Upravit odkaz", "Atribut no-follow", "Odstranit odkaz", "Aktualizovat", "Chcete-li upravit", "Zobrazit", "URL", "Editovat", "Horizontální zarovnání", "Filtr", "Dle poslední změny", "Dle názvu", "Dle velikosti", "Přidat složku", "Reset", "Uložit", "Uložit jako...", "Změnit rozměr", "Ořezat", "Šířka", "Výška", "Ponechat poměr", "Ano", "Ne", "Vyjmout", "Označit", "Označit %s", "Vertikální zarovnání", "Rozdělit", "Spojit", "Přidat sloupec", "Přidat řádek", "Licence: %s", "Vymazat", "Rozdělit vertikálně", "Rozdělit horizontálně", "Okraj", "Váš text se podobá HTML. Vložit ho jako HTML?", "Vložit jako HTML", "Ponechat originál", "Vložit jako TEXT", "Vložit pouze TEXT", "Můžete upravovat pouze své obrázky. Načíst obrázek?", "Obrázek byl úspěšně nahrán!", "paleta", "V tomto adresáři nejsou žádné soubory.", "přejmenovat", "Zadejte nový název", "náhled", "Stažení", "Vložit ze schránky", "Váš prohlížeč nepodporuje přímý přístup do schránky.", "Kopírovat výběr", "kopírování", "Border radius", "Zobrazit všechny", "Platí", "Prosím, vyplňte toto pole", "Prosím, zadejte webovou adresu", "Výchozí", "Kruh", "Dot", "Quadrate", "Najít", "Najít Předchozí", "Najít Další", "Obsah, který vkládáte, je pravděpodobně z Microsoft Word / Excel. Chcete ponechat formát nebo vložit pouze text?", "Detekován fragment z Wordu nebo Excelu", "Vyčistit", "Vložte název třídy", "Stiskněte Alt pro vlastní změnu velikosti"];
          }, 95461: function(t4) {
            t4.exports.default = ["Bitte geben Sie einen Text ein", "Über Jodit", "Jodit Editor", "Das Jodit Benutzerhandbuch", "beinhaltet ausführliche Informationen wie Sie den Editor verwenden können.", "Für Informationen zur Lizenz, besuchen Sie bitte unsere Web-Präsenz:", "Vollversion kaufen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle Rechte vorbehalten.", "Anker", "In neuer Registerkarte öffnen", "Editor in voller Größe öffnen", "Formatierung löschen", "Füllfarbe oder Textfarbe ändern", "Wiederholen", "Rückgängig machen", "Fett", "Kursiv", "Unsortierte Liste einfügen", "Nummerierte Liste einfügen", "Mittig ausrichten", "Blocksatz", "Links ausrichten", "Rechts ausrichten", "Horizontale Linie einfügen", "Bild einfügen", "Datei einfügen", "Youtube/vimeo Video einfügen", "Link einfügen", "Schriftgröße", "Schriftfamilie", "Formatblock einfügen", "Normal", "Überschrift 1", "Überschrift 2", "Überschrift 3", "Überschrift 4", "Zitat", "Code", "Einfügen", "Tabelle einfügen", "Einzug verkleinern", "Einzug vergrößern", "Sonderzeichen auswählen", "Sonderzeichen einfügen", "Format kopieren", "Änderungsmodus", "Ränder", "Oben", "Rechts", "Unten", "Links", "CSS Stil", "CSS Klassen", "Ausrichtung", "Rechts", "Zentriert", "Links", "Keine", "Pfad", "Titel", "Alternativer Text", "Link", "Link in neuem Tab öffnen", "Bild", "Datei", "Fortgeschritten", "Bildeigenschaften", "Abbrechen", "OK", "Dateibrowser", "Fehler beim Laden der Liste", "Fehler beim Laden der Ordner", "Sind Sie sicher?", "Geben Sie den Verzeichnisnamen ein", "Verzeichnis erstellen", "Typname", "Bild hier hinziehen", "Datei löschen", "oder hier klicken", "Alternativtext", "Hochladen", "Auswählen", "Hintergrund", "Text", "Oben", "Mittig", "Unten", "Spalte davor einfügen", "Spalte danach einfügen", "Zeile oberhalb einfügen", "Zeile unterhalb einfügen", "Tabelle löschen", "Zeile löschen", "Spalte löschen", "Zelle leeren", "Zeichen: %d", "Wörter: %d", "Durchstreichen", "Unterstreichen", "Hochstellen", "Tiefstellen", "Auswahl ausschneiden", "Alles markieren", "Pause", "Suche nach", "Ersetzen durch", "Ersetzen", "Einfügen", "Wählen Sie den Inhalt zum Einfügen aus", "HTML", "Fett gedruckt", "Kursiv", "Bürste", "Verknüpfung", "Rückgängig machen", "Wiederholen", "Tabelle", "Bild", "Radiergummi", "Absatz", "Schriftgröße", "Video", "Schriftart", "Über", "Drucken", "Unterstreichen", "Durchstreichen", "Einzug", "Herausstellen", "Vollgröße", "Schrumpfen", "die Linie", "Liste von", "Nummerierte Liste", "Schneiden", "Wählen Sie Alle aus", "Code einbetten", "Link öffnen", "Link bearbeiten", "Nofollow-Attribut", "Link entfernen", "Aktualisieren", "Bearbeiten", "Ansehen", "URL", "Bearbeiten", "Horizontale Ausrichtung", "Filter", "Sortieren nach geändert", "Nach Name sortieren", "Nach Größe sortiert", "Ordner hinzufügen", "Wiederherstellen", "Speichern", "Speichern als", "Größe ändern", "Größe anpassen", "Breite", "Höhe", "Seitenverhältnis beibehalten", "Ja", "Nein", "Entfernen", "Markieren", "Markieren: %s", "Vertikale Ausrichtung", "Unterteilen", "Vereinen", "Spalte hinzufügen", "Zeile hinzufügen", null, "Löschen", "Vertikal unterteilen", "Horizontal unterteilen", "Rand", "Ihr Text ähnelt HTML-Code. Als HTML beibehalten?", "Als HTML einfügen?", "Original speichern", "Als Text einfügen", "Nur Text einfügen", "Sie können nur Ihre eigenen Bilder bearbeiten. Dieses Bild auf den Host herunterladen?", "Das Bild wurde erfolgreich auf den Server hochgeladen!", "Palette", "In diesem Verzeichnis befinden sich keine Dateien.", "Umbenennen", "Geben Sie einen neuen Namen ein", "Vorschau", "Herunterladen", "Aus Zwischenablage einfügen", "Ihr Browser unterstützt keinen direkten Zugriff auf die Zwischenablage.", "Auswahl kopieren", "Kopieren", "Radius für abgerundete Ecken", "Alle anzeigen", "Anwenden", "Bitte füllen Sie dieses Feld aus", "Bitte geben Sie eine Web-Adresse ein", "Standard", "Kreis", "Punkte", "Quadrate", "Suchen", "Suche vorherige", "Weitersuchen", "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder bereinigen?", "In Word formatierter Text erkannt", "Säubern", "className (CSS) einfügen", "Drücken Sie Alt für benutzerdefinierte Größenanpassung"];
          }, 63837: function(t4) {
            t4.exports.default = { "Type something": "Start writing...", pencil: "Edit", Quadrate: "Square" };
          }, 39386: function(t4) {
            t4.exports.default = ["Escriba algo...", "Acerca de Jodit", "Jodit Editor", "Guía de usuario Jodit", "contiene ayuda detallada para el uso.", "Para información sobre la licencia, por favor visite nuestro sitio:", "Compre la versión completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos los derechos reservados.", "Anclar", "Abrir en nueva pestaña", "Abrir editor en pantalla completa", "Limpiar formato", "Color de relleno o de letra", "Rehacer", "Deshacer", "Negrita", "Cursiva", "Insertar lista no ordenada", "Insertar lista ordenada", "Alinear Centrado", "Alinear Justificado", "Alinear Izquierda", "Alinear Derecha", "Insertar línea horizontal", "Insertar imagen", "Insertar archivo", "Insertar video de Youtube/vimeo", "Insertar vínculo", "Tamaño de letra", "Familia de letra", "Insertar bloque", "Normal", "Encabezado 1", "Encabezado 2", "Encabezado 3", "Encabezado 4", "Cita", "Código", "Insertar", "Insertar tabla", "Disminuir sangría", "Aumentar sangría", "Seleccionar caracter especial", "Insertar caracter especial", "Copiar formato", "Cambiar modo", "Márgenes", "arriba", "derecha", "abajo", "izquierda", "Estilos CSS", "Clases CSS", "Alinear", "Derecha", "Centrado", "Izquierda", "--No Establecido--", "Fuente", "Título", "Texto Alternativo", "Vínculo", "Abrir vínculo en nueva pestaña", "Imagen", "Archivo", "Avanzado", "Propiedades de imagen", "Cancelar", "Aceptar", "Buscar archivo", "Error al cargar la lista", "Error al cargar las carpetas", "¿Está seguro?", "Entre nombre de carpeta", "Crear carpeta", "Entre el nombre", "Soltar imagen", "Soltar archivo", "o click", "Texto alternativo", "Subir", "Buscar", "Fondo", "Texto", "Arriba", "Centro", "Abajo", "Insertar columna antes", "Interar columna después", "Insertar fila arriba", "Insertar fila debajo", "Borrar tabla", "Borrar fila", "Borrar columna", "Vaciar celda", "Caracteres: %d", "Palabras: %d", "Tachado", "Subrayado", "superíndice", "subíndice", "Cortar selección", "Seleccionar todo", "Pausa", "Buscar", "Reemplazar con", "Reemplazar", "Pegar", "Seleccionar contenido para pegar", "HTML", "negrita", "cursiva", "Brocha", "Vínculo", "deshacer", "rehacer", "Tabla", "Imagen", "Borrar", "Párrafo", "Tamaño de letra", "Video", "Letra", "Acerca de", "Imprimir", "subrayar", "tachar", "sangría", "quitar sangría", "Tamaño completo", "encoger", "línea horizontal", "lista sin ordenar", "lista ordenada", "Cortar", "Seleccionar todo", "Incluir código", "Abrir vínculo", "Editar vínculo", "No seguir", "Desvincular", "Actualizar", "Para editar", "Ver", "URL", "Editar", "Alineación horizontal", "Filtrar", "Ordenar por fecha modificación", "Ordenar por nombre", "Ordenar por tamaño", "Agregar carpeta", "Resetear", "Guardar", "Guardar como...", "Redimensionar", "Recortar", "Ancho", "Alto", "Mantener relación de aspecto", "Si", "No", "Quitar", "Seleccionar", "Seleccionar: %s", "Alineación vertical", "Dividir", "Mezclar", "Agregar columna", "Agregar fila", null, "Borrar", "Dividir vertical", "Dividir horizontal", "Borde", "El código es similar a HTML. ¿Mantener como HTML?", "Pegar como HTML?", "Mantener", "Insertar como texto", "Insertar solo texto", "Solo puedes editar tus propias imágenes. ¿Descargar esta imagen en el servidor?", "¡La imagen se ha subido correctamente al servidor!", "paleta", "No hay archivos en este directorio.", "renombrar", "Ingresa un nuevo nombre", "avance", "Descargar", "Pegar desde el portapapeles", "Su navegador no soporta el acceso directo en el portapapeles.", "Selección de copia", "copia", "Radio frontera", "Mostrar todos los", "Aplicar", "Por favor, rellene este campo", "Por favor, introduzca una dirección web", "Predeterminado", "Círculo", "Punto", "Cuadro", "Encontrar", "Buscar Anterior", "Buscar Siguiente", "El contenido pegado proviene de un documento de Microsoft Word/Excel. ¿Desea mantener el formato o limpiarlo?", "Pegado desde Word detectado", "Limpiar", "Insertar nombre de clase", "Presione Alt para cambiar el tamaño personalizado"];
          }, 62327: function(t4) {
            t4.exports.default = ["Kirjoita jotain...", "Tietoja Jodit:ista", "Jodit Editor", "Jodit käyttäjän ohje", "sisältää tarkempaa tietoa käyttämiseen", "Tietoa lisensoinnista, vieraile verkkosivuillamme:", "Osta täysi versio", "Copyright © XDSoft.net - Chupurnov Valeriy. Kaikki oikeudet pidätetään.", "Ankkuri", "Avaa uudessa välilehdessä", "Avaa täysikokoisena", "Poista muotoilu", "Täytä värillä tai aseta tekstin väri", "Tee uudelleen", "Peruuta", "Lihavoitu", "Kursiivi", "Lisää järjestämätön lista", "Lisää järjestetty lista", "Asemoi keskelle", "Asemoi tasavälein", "Asemoi vasemmalle", "Asemoi oikealle", "Lisää vaakasuuntainen viiva", "Lisää kuva", "Lisää tiedosto", "Lisää Youtube-/vimeo- video", "Lisää linkki", "Kirjasimen koko", "Kirjasimen nimi", "Lisää muotoilualue", "Normaali", "Otsikko 1", "Otsikko 2", "Otsikko 3", "Otsikko 4", "Lainaus", "Koodi", "Lisää", "Lisää taulukko", "Pienennä sisennystä", "Lisää sisennystä", "Valitse erikoismerkki", "Lisää erikoismerkki", "Maalaa muotoilu", "Vaihda tilaa", "Marginaalit", "ylös", "oikealle", "alas", "vasemmalle", "CSS-tyylit", "CSS-luokat", "Asemointi", "Oikea", "Keskellä", "Vasen", "--Ei asetettu--", "Fuente", "Otsikko", "Vaihtoehtoinen teksti", "Linkki", "Avaa uudessa välilehdessä", "Kuva", "Tiedosto", "Avanzado", "Kuvan ominaisuudet", "Peruuta", "Ok", "Tiedostoselain", "Virhe listan latauksessa", "Virhe kansioiden latauksessa", "Oletko varma?", "Syötä hakemiston nimi", "Luo hakemisto", "Syötä nimi", "Pudota kuva", "Pudota tiedosto", "tai klikkaa", "Vaihtoehtoinen teksti", "Lataa", "Selaa", "Tausta", "Teksti", "Ylös", "Keskelle", "Alas", "Lisää sarake ennen", "Lisää sarake jälkeen", "Lisää rivi ylös", "Lisää rivi alle", "Poista taulukko", "Poista rivi", "Poista sarake", "Tyhjennä solu", "Merkit: %d", "Sanat: %d", "Yliviivaus", "Alleviivaus", "yläviite", "alaviite", "Leikkaa valinta", "Valitse kaikki", "Vaihto", "Etsi arvoa", "Korvaa arvolla", "Korvaa", "Liitä", "Valitse liitettävä sisältö", "HTML", "lihavoitu", "kursiivi", "sivellin", "linkki", "peruuta", "tee uudelleen", "taulukko", "kuva", "pyyhekumi", "kappale", "tekstin koko", "video", "kirjasin", "tietoja", "tulosta", "alleviivaa", "yliviivaa", "sisennä", "pienennä sisennystä", "täysikokoinen", "pienennä", "vaakaviiva", "järjestetty lista", "järjestämätön lista", "leikkaa", "valitse kaikki", "Sisällytä koodi", "Avaa linkki", "Muokkaa linkkiä", "Älä seuraa", "Pura linkki", "Päivitä", "Muokkaa", "Ver", "URL", "Muokkaa", "Vaaka-asemointi", "Suodatin", "Järjestä muuttuneilla", "Järjestä nimellä", "Järjestä koolla", "Lisää kansio", "Nollaa", "Tallenna", "Tallenna nimellä ...", "Muuta kokoa", "Rajaa", "Leveys", "Korkeus", "Säilytä kuvasuhde", "Kyllä", "Ei", "Poista", "Valitse", "Valitse: %s", "Pystyasemointi", "Jaa", "Yhdistä", "Lisää sarake", "Lisää rivi", null, "Poista", "Jaa pystysuuntaisesti", "Jaa vaakasuuntaisesti", "Reuna", "Koodi on HTML:n tapaista. Säilytetäänkö HTML?", "Liitä HTML:nä?", "Säilytä", "Lisää tekstinä", "Lisää vain teksti", "Voit muokata vain omia kuvia. Lataa tämä kuva palvelimelle?", "Kuva on onnistuneesti ladattu palvelimelle!", "paletti", "Tiedostoja ei ole", "Nimeä uudelleen", "Syötä uusi nimi", "esikatselu", "Lataa", "Liitä leikepöydältä", "Selaimesi ei tue suoraa pääsyä leikepöydälle.", "Kopioi valinta", "kopioi", "Reunan pyöristys", "Näytä kaikki", "Käytä", "Täytä tämä kenttä", "Annan web-osoite", "Oletus", "Ympyrä", "Piste", "Neliö", "Hae", "Hae edellinen", "Hae seuraava", "Liitetty sisältö tulee Microsoft Word-/Excel- tiedostosta. Haluatko säilyttää muotoilun vai poistaa sen?", "Word liittäminen havaittu", "Tyhjennä", "Lisää luokkanimi", "Paina Alt muokattuun koon muuttamiseen"];
          }, 25090: function(t4) {
            t4.exports.default = ["Ecrivez ici", "A propos de Jodit", "Editeur Jodit", "Guide de l'utilisateur", "Aide détaillée à l'utilisation", "Consulter la licence sur notre site web:", "Acheter la version complète", "Copyright © XDSoft.net - Chupurnov Valeriy. Tous droits réservés.", "Ancre", "Ouvrir dans un nouvel onglet", "Ouvrir l'éditeur en pleine page", "Supprimer le formattage", "Modifier la couleur du fond ou du texte", "Refaire", "Défaire", "Gras", "Italique", "Liste non ordonnée", "Liste ordonnée", "Centrer", "Justifier", "Aligner à gauche ", "Aligner à droite", "Insérer une ligne horizontale", "Insérer une image", "Insérer un fichier", "Insérer une vidéo", "Insérer un lien", "Taille des caractères", "Famille des caractères", "Bloc formatté", "Normal", "Titre 1", "Titre 2", "Titre 3", "Titre 4", "Citation", "Code", "Insérer", "Insérer un tableau", "Diminuer le retrait", "Retrait plus", "Sélectionnez un caractère spécial", "Insérer un caractère spécial", "Cloner le format", "Mode wysiwyg <-> code html", "Marges", "haut", "droite", "Bas", "gauche", "Styles", "Classes", "Alignement", "Droite", "Centre", "Gauche", "--Non disponible--", "Source", "Titre", "Alternative", "Lien", "Ouvrir le lien dans un nouvel onglet", "Image", "fichier", "Avancé", "Propriétés de l'image", "Annuler", "OK", "Explorateur de fichiers", "Erreur de liste de chargement", "Erreur de dossier de chargement", "Etes-vous sûrs ?", "Entrer le nom de dossier", "Créer un dossier", "type de fichier", "Coller une image", "Déposer un fichier", "ou cliquer", "Texte de remplacemement", "Charger", "Chercher", "Arrière-plan", "Texte", "Haut", "Milieu", "Bas", "Insérer une colonne avant", "Insérer une colonne après", "Insérer une ligne au dessus", "Insérer une ligne en dessous", "Supprimer le tableau", "Supprimer la ligne", "Supprimer la colonne", "Vider la cellule", "Symboles: %d", "Mots: %d", "Barrer", "Souligner", "exposant", "indice", "Couper la sélection", "Tout sélectionner", "Pause", "Rechercher", "Remplacer par", "Remplacer", "Coller", "Choisissez le contenu à coller", "la source", "gras", "italique", "pinceau", "lien", "annuler", "refaire", "tableau", "image", "gomme", "clause", "taille de police", "Video", "police", "à propos de l'éditeur", "impression", "souligné", "barré", "indentation", "retrait", "taille réelle", "taille conventionnelle", "la ligne", "Liste", "Liste numérotée", "Couper", "Sélectionner tout", null, "Ouvrir le lien", "Modifier le lien", "Attribut Nofollow", "Supprimer le lien", "Mettre à jour", "Pour éditer", "Voir", "URL", null, "Alignement horizontal", "Filtre", "Trier par modification", "Trier par nom", "Trier par taille", "Créer le dossier", "Restaurer", "Sauvegarder", "Enregistrer sous", "Changer la taille", "Taille de garniture", "Largeur", "Hauteur", "Garder les proportions", "Oui", "Non", "Supprimer", "Mettre en évidence", "Mettre en évidence: %s", "Alignement vertical", "Split", "aller", "Ajouter une colonne", "Ajouter une rangée", null, "Effacer", "Split vertical", "Split horizontal", "Bordure", "Votre texte que vous essayez de coller est similaire au HTML. Collez-le en HTML?", "Coller en HTML?", "Sauvegarder l'original", "Coller en tant que texte", "Coller le texte seulement", "Vous ne pouvez éditer que vos propres images. Téléchargez cette image sur l'hôte?", "L'image a été téléchargée avec succès sur le serveur!", "Palette", "Il n'y a aucun fichier dans ce répertoire.", "renommer", "Entrez un nouveau nom", "Aperçu", "Télécharger", "Coller à partir du presse-papiers", "Votre navigateur ne prend pas en charge l'accès direct au presse-papiers.", "Copier la sélection", "copie", "Rayon des bordures", "Afficher tous", "Appliquer", "Veuillez remplir ce champ", "Veuillez entrer une adresse web", "Par défaut", "Cercle", "Point", "Quadratique", "Trouver", "Précédent", "Suivant", "Le contenu que vous insérez provient d'un document Microsoft Word / Excel. Voulez-vous enregistrer le format ou l'effacer?", "C'est peut-être un fragment de Word ou Excel", "Nettoyer", "Insérer un nom de classe", "Appuyez sur Alt pour un redimensionnement personnalisé"];
          }, 53113: function(t4) {
            t4.exports.default = ["הקלד משהו...", "About Jodit", "Jodit Editor", "Jodit User's Guide", "contains detailed help for using.", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "מקום עיגון", "פתח בכרטיסיה חדשה", "פתח את העורך בחלון חדש", "נקה עיצוב", "שנה צבע טקסט או רקע", "בצע שוב", "בטל", "מודגש", "נטוי", "הכנס רשימת תבליטים", "הכנס רשימה ממוספרת", "מרכז", "ישר ", "ישר לשמאל", "ישר לימין", "הכנס קו אופקי", "הכנס תמונה", "הכנס קובץ", "הכנס סרטון וידאו מYouTube/Vimeo", "הכנס קישור", "גודל גופן", "גופן", "מעוצב מראש", "רגיל", "כותרת 1", "כותרת 2", "כותרת 3", "כותרת 4", "ציטוט", "קוד", "הכנס", "הכנס טבלה", "הקטן כניסה", "הגדל כניסה", "בחר תו מיוחד", "הכנס תו מיוחד", "העתק עיצוב", "החלף מצב", "ריווח", "עליון", "ימין", "תחתון", "שמאל", "עיצוב CSS", "מחלקת CSS", "יישור", "ימין", "מרכז", "שמאל", "--לא נקבע--", "מקור", "כותרת", "כיתוב חלופי", "קישור", "פתח בכרטיסיה חדשה", "תמונה", "קובץ", "מתקדם", "מאפייני תמונה", "ביטול", "אישור", "סייר הקבצים", "שגיאה  בזמן טעינת רשימה", "שגיאה בזמן טעינת תקיות", "האם אתה בטוח?", "הכנס שם תקיה", "צור תקיה", "סוג הקובץ", "הסר תמונה", "הסר קובץ", "או לחץ", "כיתוב חלופי", "העלה", "סייר", "רקע", "טקסט", "עליון", "מרכז", "תחתון", "הכנס עמודה לפני", "הכנס עמודה אחרי", "הכנס שורה מעל", "הכנס שורה מתחת", "מחק טבלה", "מחק שורה", "מחק עמודה", "רוקן תא", "תווים: %d", "מילים: %d", "קו חוצה", "קו תחתון", "superscript", "subscript", "גזור בחירה", "בחר הכל", "שבירת שורה", "חפש", "החלף ב", "להחליף", "הדבק", "בחר תוכן להדבקה", "HTML", "מודגש", "נטוי", "מברשת", "קישור", "בטל", "בצע שוב", "טבלה", "תמונה", "מחק", "פסקה", "גודל גופן", "וידאו", "גופן", "עלינו", "הדפס", "קו תחתון", "קו חוצה", "הגדל כניסה", "הקטן כניסה", "גודל מלא", "כווץ", "קו אופקי", "רשימת תבליטים", "רשימה ממוספרת", "חתוך", "בחר הכל", "הוסף קוד", "פתח קישור", "ערוך קישור", "ללא מעקב", "בטל קישור", "עדכן", "כדי לערוך", "הצג", "כתובת", "ערוך", "יישור אופקי", "סנן", "מין לפי שינוי", "מיין לפי שם", "מיין לפי גודל", "הוסף תקייה", "אפס", "שמור", "שמור בשם...", "שנה גודל", "חתוך", "רוחב", "גובה", "שמור יחס", "כן", "לא", "הסר", "בחר", "נבחר: %s", "יישור אנכי", "פיצול", "מזג", "הוסף עמודה", "הוסף שורה", null, "מחק", "פיצול אנכי", "פיצול אופקי", "מסגרת", "הקוד דומה לHTML, האם להשאיר כHTML", "הדבק כHTML", "השאר", "הכנס כטקסט", "הכנס טקסט בלבד", "רק קבצים המשוייכים שלך ניתנים לעריכה. האם להוריד את הקובץ?", "התמונה עלתה בהצלחה!", "לוח", "אין קבצים בספריה זו.", "הונגרית", "הזן שם חדש", "תצוגה מקדימה", "הורד", "להדביק מהלוח", "הדפדפן שלך לא תומך גישה ישירה ללוח.", "העתק בחירה", "העתק", "רדיוס הגבול", "הצג את כל", "החל", "נא למלא שדה זה", "אנא הזן כתובת אינטרנט", "ברירת המחדל", "מעגל", "נקודה", "הריבוע הזה", "למצוא", "מצא את הקודם", "חפש את הבא", "התוכן המודבק מגיע ממסמך וורד/אקסל. האם ברצונך להשאיר את העיצוב או לנקותו", 'זוהתה הדבקה מ"וורד"', "נקה", "הכנס את שם הכיתה", "לחץ על אלט לשינוי גודל מותאם אישית"];
          }, 81321: function(t4) {
            t4.exports.default = ["Írjon be valamit", "Joditról", "Jodit Editor", "Jodit útmutató", "további segítséget tartalmaz", "További licence információkért látogassa meg a weboldalunkat:", "Teljes verzió megvásárlása", "Copyright © XDSoft.net - Chupurnov Valeriy. Minden jog fenntartva.", "Horgony", "Megnyitás új lapon", "Megnyitás teljes méretben", "Formázás törlése", "Háttér/szöveg szín", "Újra", "Visszavon", "Félkövér", "Dőlt", "Pontozott lista", "Számozott lista", "Középre zárt", "Sorkizárt", "Balra zárt", "Jobbra zárt", "Vízszintes vonal beszúrása", "Kép beszúrás", "Fájl beszúrás", "Youtube videó beszúrása", "Link beszúrás", "Betűméret", "Betűtípus", "Formázott blokk beszúrása", "Normál", "Fejléc 1", "Fejléc 2", "Fejléc 3", "Fejléc 4", "Idézet", "Kód", "Beszúr", "Táblázat beszúrása", "Behúzás csökkentése", "Behúzás növelése", "Speciális karakter kiválasztása", "Speciális karakter beszúrása", "Kép formázása", "Nézet váltása", "Szegélyek", "felső", "jobb", "alsó", "bal", "CSS stílusok", "CSS osztályok", "Igazítás", "Jobbra", "Középre", "Balra", "Nincs", "Forrás", "Cím", "Helyettesítő szöveg", "Link", "Link megnyitása új lapon", "Kép", "Fájl", "Haladó", "Kép tulajdonságai", "Mégsem", "OK", "Fájl tallózó", "Hiba a lista betöltése közben", "Hiba a mappák betöltése közben", "Biztosan ezt szeretné?", "Írjon be egy mappanevet", "Mappa létrehozása", "írjon be bevet", "Húzza ide a képet", "Húzza ide a fájlt", "vagy kattintson", "Helyettesítő szöveg", "Feltölt", "Tallóz", "Háttér", "Szöveg", "Fent", "Középen", "Lent", "Oszlop beszúrás elé", "Oszlop beszúrás utána", "Sor beszúrás fölé", "Sor beszúrás alá", "Táblázat törlése", "Sor törlése", "Oszlop törlése", "Cella tartalmának törlése", "Karakterek száma: %d", "Szavak száma: %d", "Áthúzott", "Aláhúzott", "Felső index", "Alsó index", "Kivágás", "Összes kijelölése", "Szünet", "Keresés", "Csere erre", "Cserélje ki", "Beillesztés", "Válasszon tartalmat a beillesztéshez", "HTML", "Félkövér", "Dőlt", "Ecset", "Link", "Visszavon", "Újra", "Táblázat", "Kép", "Törlés", "Paragráfus", "Betűméret", "Videó", "Betű", "Rólunk", "Nyomtat", "Aláhúzott", "Áthúzott", "Behúzás", "Aussenseiter", "Teljes méret", "Összenyom", "Egyenes vonal", "Lista", "Számozott lista", "Kivág", "Összes kijelölése", "Beágyazott kód", "Link megnyitása", "Link szerkesztése", "Nincs követés", "Link leválasztása", "Frissít", "Szerkesztés", "felülvizsgálat", "URL", "Szerkeszt", "Vízszintes igazítás", "Szűrő", "Rendezés módosítás szerint", "Rendezés név szerint", "Rendezés méret szerint", "Mappa hozzáadás", "Visszaállít", "Mentés", "Mentés másként...", "Átméretezés", "Kivág", "Szélesség", "Magasság", "Képarány megtartása", "Igen", "Nem", "Eltávolít", "Kijelöl", "Kijelöl: %s", "Függőleges igazítás", "Felosztás", "Összevonás", "Oszlop hozzáadás", "Sor hozzáadás", null, "Törlés", "Függőleges felosztás", "Vízszintes felosztás", "Szegély", "A beillesztett szöveg HTML-nek tűnik. Megtartsuk HTML-ként?", "Beszúrás HTML-ként", "Megtartás", "Beszúrás szövegként", "Csak szöveg beillesztése", "Csak a saját képeit tudja szerkeszteni. Letölti ezt a képet?", "Kép sikeresen feltöltve!", "Palette", "Er zijn geen bestanden in deze map.", "átnevezés", "Adja meg az új nevet", "előnézet", "Letöltés", "Illessze be a vágólap", "A böngésző nem támogatja a közvetlen hozzáférést biztosít a vágólapra.", "Másolás kiválasztása", "másolás", "Határ sugár", "Összes", "Alkalmazni", "Kérjük, töltse ki ezt a mezőt,", "Kérjük, írja be a webcímet", "Alapértelmezett", "Kör", "Pont", "Quadrate", "Találni", "Megtalálja Előző", "Következő Keresése", "A beillesztett tartalom Microsoft Word/Excel dokumentumból származik. Meg szeretné tartani a formátumát?", "Word-ből másolt szöveg", "Elvetés", "Helyezze be az osztály nevét", "Nyomja meg az Alt egyéni átméretezés"];
          }, 4679: function(t4) {
            t4.exports.default = ["Ketik sesuatu", "Tentang Jodit", "Editor Jodit", "Panduan Pengguna Jodit", "mencakup detail bantuan penggunaan", "Untuk informasi tentang lisensi, silakan kunjungi website:", "Beli versi lengkap", "Hak Cipta © XDSoft.net - Chupurnov Valeriy. Hak cipta dilindungi undang-undang.", "Tautan", "Buka di tab baru", "Buka editor dalam ukuran penuh", "Hapus Pemformatan", "Isi warna atau atur warna teks", "Ulangi", "Batalkan", "Tebal", "Miring", "Sisipkan Daftar Tidak Berurut", "Sisipkan Daftar Berurut", "Tengah", "Penuh", "Kiri", "Kanan", "Sisipkan Garis Horizontal", "Sisipkan Gambar", "Sisipkan Berkas", "Sisipkan video youtube/vimeo", "Sisipkan tautan", "Ukuran font", "Keluarga font", "Sisipkan blok format", "Normal", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Kutip", "Kode", "Sisipkan", "Sisipkan tabel", "Kurangi Indentasi", "Tambah Indentasi", "Pilih Karakter Spesial", "Sisipkan Karakter Spesial", "Formar warna", "Ubah mode", "Batas", "atas", "kanan", "bawah", "kiri", "Gaya", "Class", "Rata", "Kanan", "Tengah", "Kiri", "--Tidak diset--", "Src", "Judul", "Teks alternatif", "Tautan", "Buka tautan di tab baru", "Gambar", "berkas", "Lanjutan", "Properti gambar", "Batal", "Ya", "Penjelajah Berkas", "Error ketika memuat list", "Error ketika memuat folder", "Apakah Anda yakin?", "Masukkan nama Direktori", "Buat direktori", "ketik nama", "Letakkan gambar", "Letakkan berkas", "atau klik", "Teks alternatif", "Unggah", "Jelajahi", "Latar Belakang", "Teks", "Atas", "Tengah", "Bawah", "Sisipkan kolom sebelumnya", "Sisipkan kolom setelahnya", "Sisipkan baris di atasnya", "Sisipkan baris di bawahnya", "Hapus tabel", "Hapus baris", "Hapus kolom", "Kosongkan cell", "Karakter: %d", "Kata: %d", "Coret", "Garis Bawah", "Superskrip", "Subskrip", "Potong pilihan", "Pilih semua", "Berhenti", "Mencari", "Ganti dengan", "Mengganti", "Paste", "Pilih konten untuk dipaste", "sumber", "tebal", "miring", "sikat", "tautan", "batalkan", "ulangi", "tabel", "gambar", "penghapus", "paragraf", "ukuran font", "video", "font", "tentang", "cetak", "garis bawah", "coret", "menjorok ke dalam", "menjorok ke luar", "ukuran penuh", "menyusut", "hr", "ul", "ol", "potong", "Pilih semua", "Kode embed", "Buka tautan", "Edit tautan", "No follow", "Hapus tautan", "Perbarui", "pensil", "Mata", "URL", "Edit", "Perataan horizontal", "Filter", "Urutkan berdasarkan perubahan", "Urutkan berdasarkan nama", "Urutkan berdasarkan ukuran", "Tambah folder", "Reset", "Simpan", "Simpan sebagai...", "Ubah ukuran", "Crop", "Lebar", "Tinggi", "Jaga aspek rasio", "Ya", "Tidak", "Copot", "Pilih", "Pilih %s", "Rata vertikal", "Bagi", "Gabungkan", "Tambah kolom", "tambah baris", "Lisensi: %s", "Hapus", "Bagi secara vertikal", "Bagi secara horizontal", "Bingkai", "Kode Anda cenderung ke HTML. Biarkan sebagai HTML?", "Paste sebagai HTML", "Jaga", "Sisipkan sebagai teks", "Sisipkan hanya teks", "Anda hanya dapat mengedit gambar Anda sendiri. Unduh gambar ini di host?", "Gambar telah sukses diunggah ke host!", "palet", "Tidak ada berkas", "ganti nama", "Masukkan nama baru", "pratinjau", "Unduh", "Paste dari clipboard", "Browser anda tidak mendukung akses langsung ke clipboard.", "Copy seleksi", "copy", "Border radius", "Tampilkan semua", "Menerapkan", "Silahkan mengisi kolom ini", "Silahkan masukkan alamat web", "Default", "Lingkaran", "Dot", "Kuadrat", "Menemukan", "Menemukan Sebelumnya", "Menemukan Berikutnya", "Konten dipaste dari dokumen Microsoft Word/Excel. Apakah Anda ingin tetap menjaga format atau membersihkannya?", "Terdeteksi paste dari Word", "Bersih", "Masukkan nama kelas", "Tekan Alt untuk mengubah ukuran kustom"];
          }, 31927: function(t4) {
            t4.exports.default = ["Scrivi qualcosa...", "A proposito di Jodit", "Jodit Editor", "Guida utente di Jodit", "contiene una guida dettagliata per l'uso.", "Per informazioni sulla licenza, si prega di visitare il nostro sito web:", "Acquista la versione completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Tutti i diritti riservati.", "Link", "Apri in una nuova scheda", "Apri l'editor a schermo intero", "Pulisci Formattazione", "Colore di sfondo o del testo", "Ripristina", "Annulla", "Grassetto", "Corsivo", "Inserisci lista non ordinata", "Inserisci lista ordinata", "Allinea al centro", "Allineamento Giustificato", "Allinea a Sinistra", "Allinea a Destra", "Inserisci una linea orizzontale", "Inserisci immagine", "Inserisci un file", "Inserisci video Youtube/Vimeo", "Inserisci link", "Dimensione carattere", "Tipo di font", "Inserisci blocco", "Normale", "Intestazione 1", "Intestazione 2", "Intestazione 3", "Intestazione 4", "Citazione", "Codice", "Inserisci", "Inserisci tabella", "Riduci il rientro", "Aumenta il rientro", "Seleziona un carattere speciale", "Inserisci un carattere speciale", "Copia formato", "Cambia modalita'", "Margini", "su", "destra", "giù", "sinistra", "Stili CSS", "Classi CSS", "Allinea", "Destra", "Centro", "Sinistra", "--Non Impostato--", "Fonte", "Titolo", "Testo Alternativo", "Link", "Apri il link in una nuova scheda", "Immagine", "Archivio", "Avanzato", "Proprietà dell'immagine", "Annulla", "Accetta", "Cerca file", "Errore durante il caricamento dell'elenco", "Errore durante il caricamento delle cartelle", "Sei sicuro?", "Inserisci il nome della cartella", "Crea cartella", "Digita il nome", "Cancella immagine", "Cancella file", "o clicca", "Testo alternativo", "Carica", "Sfoglia", "Sfondo", "Testo", "Su", "Centro", "Sotto", "Inserisci la colonna prima", "Inserisci la colonna dopo", "Inserisci la riga sopra", "Inserisci la riga sotto", "Elimina tabella", "Elimina riga", "Elimina colonna", "Cella vuota", "Caratteri: %d", "Parole: %d", "Barrato", "Sottolineato", "indice", "pedice", "Taglia selezione", "Seleziona tutto", "Pausa", "Cerca per", "Sostituisci con", "Sostituisci", "Incolla", "Seleziona il contenuto da incollare", "risorsa", "Grassetto", "Corsivo", "Pennello", "Link", "Annulla", "Ripristina", "Tabella", "Immagine", "Gomma", "Paragrafo", "Dimensione del carattere", "Video", "Font", "Approposito di", "Stampa", "Sottolineato", "Barrato", "aumenta rientro", "riduci rientro", "espandi", "comprimi", "linea orizzontale", "lista non ordinata", "lista ordinata", "Taglia", "Seleziona tutto", "Includi codice", "Apri link", "Modifica link", "Non seguire", "Rimuovi link", "Aggiorna", "Per modificare", "Recensione", " URL", "Modifica", "Allineamento orizzontale", "Filtro", "Ordina per data di modifica", "Ordina per nome", "Ordina per dimensione", "Aggiungi cartella", "Reset", "Salva", "Salva con nome...", "Ridimensiona", "Ritaglia", "Larghezza", "Altezza", "Mantieni le proporzioni", "Si", "No", "Rimuovi", "Seleziona", "Seleziona: %s", "Allineamento verticala", "Dividi", "Fondi", "Aggiungi colonna", "Aggiungi riga", null, "Cancella", "Dividi verticalmente", "Dividi orizzontale", "Bordo", "Il codice è simile all'HTML. Mantieni come HTML?", "Incolla come HTML", "Mantieni", "Inserisci come testo", "Inserisci solo il testo", "Puoi modificare solo le tue immagini. Vuoi scaricare questa immagine dal server?", "L'immagine è stata caricata correttamente sul server!", "tavolozza", "Non ci sono file in questa directory.", "Rinomina", "Inserisci un nuovo nome", "anteprima", "Scarica", "Incolla dagli appunti", "Il tuo browser non supporta l'accesso diretto agli appunti.", "Copia selezione", "copia", "Border radius", "Mostra tutti", "Applica", "Si prega di compilare questo campo", "Si prega di inserire un indirizzo web", "Default", "Cerchio", "Punto", "Quadrato", "Trova", "Trova Precedente", "Trova Successivo", "Il contenuto incollato proviene da un documento Microsoft Word / Excel. Vuoi mantenere il formato o pulirlo?", "Incolla testo da Word rilevato", "Pulisci", "Inserisci il nome della classe", "Premere Alt per il ridimensionamento personalizzato"];
          }, 21195: function(t4) {
            t4.exports.default = ["なにかタイプしてください", "Joditについて", "Jodit Editor", "Jodit ユーザーズ・ガイド", "詳しい使い方", "ライセンス詳細についてはJodit Webサイトを確認ください：", "フルバージョンを購入", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "新しいタブで開く", "エディターのサイズ（フル/ノーマル）", "書式をクリア", "テキストの色", "やり直し", "元に戻す", "太字", "斜体", "箇条書き", "番号付きリスト", "中央揃え", "両端揃え", "左揃え", "右揃え", "区切り線を挿入", "画像を挿入", "ファイルを挿入", "Youtube/Vimeo 動画", "リンクを挿入", "フォントサイズ", "フォント", "テキストのスタイル", "指定なし", "タイトル1", "タイトル2", "タイトル3", "タイトル4", "引用", "コード", "挿入", "表を挿入", "インデント減", "インデント増", "特殊文字を選択", "特殊文字を挿入", "書式を貼付け", "編集モード切替え", "マージン", "上", "右", "下", "左", "スタイル", "クラス", "配置", "右寄せ", "中央寄せ", "左寄せ", "指定なし", "ソース", "タイトル", "代替テキスト", "リンク", "新しいタブで開く", "画像", "ファイル", "高度な設定", "画像のプロパティー", "キャンセル", "確定", "File Browser", "Error on load list", "Error on load folders", "Are you sure?", "Enter Directory name", "Create directory", "type name", "ここに画像をドロップ", "ここにファイルをドロップ", "or クリック", "代替テキスト", "アップロード", "ブラウズ", "背景", "文字", "上", "中央", "下", "左に列を挿入", "右に列を挿入", "上に行を挿入", "下に行を挿入", "表を削除", "行を削除", "列を削除", "セルを空にする", "文字数: %d", "単語数: %d", "取り消し線", "下線", "上付き文字", "下付き文字", "切り取り", "すべて選択", "Pause", "検索", "置換", "交換", "貼付け", "選択した内容を貼付け", "source", "bold", "italic", "brush", "link", "undo", "redo", "table", "image", "eraser", "paragraph", "fontsize", "video", "font", "about", "print", "underline", "strikethrough", "indent", "outdent", "fullsize", "shrink", "分割線", "箇条書き", "番号付きリスト", "切り取り", "すべて選択", "埋め込みコード", "リンクを開く", "リンクを編集", "No follow", "リンク解除", "更新", "鉛筆", "サイトを確認", "URL", "編集", "水平方向の配置", "Filter", "Sort by changed", "Sort by name", "Sort by size", "Add folder", "リセット", "保存", "Save as ...", "リサイズ", "Crop", "幅", "高さ", "縦横比を保持", "はい", "いいえ", "移除", "選択", "選択: %s", "垂直方向の配置", "分割", "セルの結合", "列を追加", "行を追加", null, "削除", "セルの分割（垂直方向）", "セルの分割（水平方向）", "境界線", "HTMLコードを保持しますか？", "HTMLで貼付け", "HTMLを保持", "HTMLをテキストにする", "テキストだけ", "You can only edit your own images. Download this image on the host?", "The image has been successfully uploaded to the host!", "パレット", "There are no files", "Rename", "Enter new name", "プレビュー", "ダウンロード", "貼り付け", "お使いのブラウザはクリップボードを使用できません", "コピー", "copy", "角の丸み", "全て表示", "適用", "まだこの分野", "を入力してくださいウェブアドレス", "デフォルト", "白丸", "黒丸", "四角", "見", "探前", "由来", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "Word Paste Detected", "Clean", "クラス名を挿入", "カスタムサイズ変更のためのAltキーを押します"];
          }, 53414: function(t4) {
            t4.exports.default = ["Type something", "About Jodit", "Jodit Editor", "Jodit User's Guide", "contains detailed help for using", "For information about the license, please go to our website:", "Buy full version", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "Anchor", "Open in new tab", "Open in fullsize", "Clear Formatting", "Fill color or set the text color", "Redo", "Undo", "Bold", "Italic", "Insert Unordered List", "Insert Ordered List", "Align Center", "Align Justify", "Align Left", "Align Right", "Insert Horizontal Line", "Insert Image", "Insert file", "Insert youtube/vimeo video", "Insert link", "Font size", "Font family", "Insert format block", "Normal", "Heading 1", "Heading 2", "Heading 3", "Heading 4", "Quote", "Code", "Insert", "Insert table", "Decrease Indent", "Increase Indent", "Select Special Character", "Insert Special Character", "Paint format", "Change mode", "Margins", "top", "right", "bottom", "left", "Styles", "Classes", "Align", "Right", "Center", "Left", "--Not Set--", "Src", "Title", "Alternative", "Link", "Open link in new tab", "Image", "file", "Advanced", "Image properties", "Cancel", "Ok", "File Browser", "Error on load list", "Error on load folders", "Are you sure?", "Enter Directory name", "Create directory", "type name", "Drop image", "Drop file", "or click", "Alternative text", "Upload", "Browse", "Background", "Text", "Top", "Middle", "Bottom", "Insert column before", "Insert column after", "Insert row above", "Insert row below", "Delete table", "Delete row", "Delete column", "Empty cell", "Chars: %d", "Words: %d", "Strike through", "Underline", "superscript", "subscript", "Cut selection", "Select all", "Break", "Search for", "Replace with", "Replace", "Paste", "Choose Content to Paste", "source", "bold", "italic", "brush", "link", "undo", "redo", "table", "image", "eraser", "paragraph", "fontsize", "video", "font", "about", "print", "underline", "strikethrough", "indent", "outdent", "fullsize", "shrink", "hr", "ul", "ol", "cut", "selectall", "Embed code", "Open link", "Edit link", "No follow", "Unlink", "Update", "pencil", "Eye", " URL", "Edit", "Horizontal align", "Filter", "Sort by changed", "Sort by name", "Sort by size", "Add folder", "Reset", "Save", "Save as ...", "Resize", "Crop", "Width", "Height", "Keep Aspect Ratio", "Yes", "No", "Remove", "Select", "Select %s", "Vertical align", "Split", "Merge", "Add column", "Add row", "License: %s", "Delete", "Split vertical", "Split horizontal", "Border", "Your code is similar to HTML. Keep as HTML?", "Paste as HTML", "Keep", "Insert as Text", "Insert only Text", "You can only edit your own images. Download this image on the host?", "The image has been successfully uploaded to the host!", "palette", "There are no files", "Rename", "Enter new name", "preview", "download", "Paste from clipboard", "Your browser doesn't support direct access to the clipboard.", "Copy selection", "copy", "Border radius", "Show all", "Apply", "Please fill out this field", "Please enter a web address", "Default", "Circle", "Dot", "Quadrate", "Find", "Find Previous", "Find Next", "The pasted content is coming from a Microsoft Word/Excel document. Do you want to keep the format or clean it up?", "Word Paste Detected", "Clean", "Insert className", "Press Alt for custom resizing"];
          }, 11012: function(t4) {
            t4.exports.default = ["무엇이든 입력하세요", "Jodit에 대하여", "Jodit Editor", "Jodit 사용자 안내서", "자세한 도움말이 들어있어요", "라이센스에 관해서는 Jodit 웹 사이트를 방문해주세요：", "풀 버전 구입하기", "© XDSoft.net - Chupurnov Valeriy. 에게 저작권과 모든 권리가 있습니다.", "Anchor", "새 탭에서 열기", "전체 크기로 보기", "서식 지우기", "글씨 색상", "재실행", "실행 취소", "굵게", "기울임", "글머리 목록", "번호 목록", "가운데 정렬", "양쪽 정렬", "왼쪽 정렬", "오른쪽 정렬", "수평 구분선 넣기", "이미지 넣기", "파일 넣기", "Youtube/Vimeo 동영상", "링크 넣기", "글꼴 크기", "글꼴", "블록 요소 넣기", "일반 텍스트", "제목 1", "제목 2", "제목 3", "제목 4", "인용", "코드", "붙여 넣기", "테이블", "들여쓰기 감소", "들여쓰기 증가", "특수문자 선택", "특수문자 입력", "페인트 형식", "편집모드 변경", "마진", "위", "오른쪽", "아래", "왼쪽", "스타일", "클래스", "정렬", "오른쪽으로", "가운데로", "왼쪽으로", "--지정 안 함--", "경로(src)", "제목", "대체 텍스트(alt)", "링크", "새 탭에서 열기", null, "파일", "고급", "이미지 속성", "취소", "확인", "파일 탐색기", "목록 불러오기 에러", "폴더 불러오기", "정말 진행할까요?", "디렉토리 이름 입력", "디렉토리 생성", "이름 입력", "이미지 드래그", "파일 드래그", "혹은 클릭", "대체 텍스트", "업로드", "탐색", "배경", "텍스트", "위", "중앙", "아래", "이전 열에 삽입", "다음 열에 삽입", "위 행에 삽입", "아래 행에 삽입", "테이블 삭제", "행 삭제", "열 삭제", "빈 셀", "문자수: %d", "단어수: %d", "취소선", "밑줄", "윗첨자", "아래첨자", "선택 잘라내기", "모두 선택", "구분자", "검색", "대체하기", "대체", "붙여넣기", "붙여넣을 내용 선택", "HTML 소스", "볼드", "이탤릭", "브러시", "링크", "실행 취소", "재실행", "테이블", "이미지", "지우개", "문단", "글꼴 크기", "비디오", "글꼴", "편집기 정보", "프린트", "밑줄", "취소선", "들여쓰기", "내어쓰기", "전체 화면", "일반 화면", "구분선", "글머리 목록", "번호 목록", "잘라내기", "모두 선택", "Embed 코드", "링크 열기", "링크 편집", "No follow", "링크 제거", "갱신", "연필", "사이트 확인", "URL", "편집", "수평 정렬", "필터", "변경일 정렬", "이름 정렬", "크기 정렬", "새 폴더", "초기화", "저장", "새로 저장하기 ...", "리사이즈", "크롭", "가로 길이", "세로 높이", "비율 유지하기", "네", "아니오", "제거", "선택", "선택: %s", "수직 정렬", "분할", "셀 병합", "열 추가", "행 추가", "라이센스: %s", "삭제", "세로 셀 분할", "가로 셀 분할", "외곽선", "HTML 코드로 감지했어요. 코드인채로 붙여넣을까요?", "HTML로 붙여넣기", "원본 유지", "텍스트로 넣기", "텍스트만 넣기", "외부 이미지는 편집할 수 없어요. 외부 이미지를 다운로드 할까요?", "이미지를 무사히 업로드 했어요!", "팔레트", "파일이 없어요", "이름 변경", "새 이름 입력", "미리보기", "다운로드", "클립보드 붙여넣기", "사용중인 브라우저가 클립보드 접근을 지원하지 않아요.", "선택 복사", "복사", "둥근 테두리", "모두 보기", "적용", "이 항목을 입력해주세요!", "웹 URL을 입력해주세요.", "기본", "원", "점", "정사각형", "찾기", "이전 찾기", "다음 찾기", "Microsoft Word/Excel 문서로 감지했어요. 서식을 유지한채로 붙여넣을까요?", "Word 붙여넣기 감지", "지우기", "className 입력", "사용자 지정 크기 조정에 대 한 고도 누르십시오"];
          }, 87061: function(t4) {
            t4.exports.default = ["Бичээд үзээрэй", "Jodit-ын талаар ", "Jodit програм", "Jodit гарын авлага", "хэрэглээний талаар дэлгэрэнгүй мэдээллийг агуулна", "Лицензийн мэдээллийг манай вэб хуудаснаас авна уу:", "Бүрэн хувилбар худалдан авах", "Зохиогчийн эрх хамгаалагдсан © XDSoft.net - Chupurnov Valeriy. Бүх эрхийг эзэмшинэ.", "Холбоо барих", "Шинэ табаар нээх", "Бүтэн дэлгэцээр нээх", "Форматыг арилгах", "Өнгөөр будах эсвэл текстийн өнгө сонгох", "Дахих", "Буцаах", "Тод", "Налуу", "Тэмдэгт жагсаалт нэмэх", "Дугаарт жагсаалт нэмэх", "Голлож байрлуулах", "Тэгшитгэн байрлуулах", "Зүүнд байрлуулах", "Баруунд байрлуулах", "Хэвтээ зураас нэмэх", "Зураг нэмэх", "Файл нэмэх", "Youtube/Vimeo видео нэмэх", "Холбоос нэмэх", "Фонтын хэмжээ", "Фонтын бүл", "Блок нэмэх", "Хэвийн", "Гарчиг 1", "Гарчиг 2", "Гарчиг 3", "Гарчиг 4", "Ишлэл", "Код", "Оруулах", "Хүснэгт оруулах", "Доголын зай хасах", "Доголын зай нэмэх", "Тусгай тэмдэгт сонгох", "Тусгай тэмдэгт нэмэх", "Зургийн формат", "Горим өөрчлөх", "Цаасны зай", "Дээрээс", "Баруунаас", "Доороос", "Зүүнээс", "CSS стиль", "CSS анги", "Байрлуулах", "Баруун", "Төв", "Зүүн", "--Тодорхойгүй--", "Эх үүсвэр", "Гарчиг", "Алтернатив текст", "Холбоос", "Холбоосыг шинэ хавтсанд нээх", "Зураг", "Файл", "Дэвшилтэт", "Зургийн үзүүлэлт", "Цуцлах", "Ok", "Файлын цонх", "Жагсаалт татах үед алдаа гарлаа", "Хавтас татах үед алдаа гарлаа", "Итгэлтэй байна уу?", "Хавтсын нэр оруулах", "Хавтас үүсгэх", "Нэр бичих", "Зураг буулгах", "Файл буулгах", "эсвэл товш", "Алтернатив текст", "Байршуулах", "Үзэх", "Арын зураг", "Текст", "Дээр", "Дунд", "Доор", "Урд нь багана нэмэх", "Ард нь багана нэмэх", "Дээр нь мөр нэмэх", "Доор нь мөр нэмэх", "Хүснэгт устгах", "Мөр устгах", "Багана устгах", "Нүд цэвэрлэх", "Тэмдэгт: %d", "Үг: %d", "Дээгүүр зураас", "Доогуур зураас", "Дээд индекс", "Доод индекс", "Сонголтыг таслах", "Бүгдийг сонго", "Мөрийг таслах", "Хайх", "Үүгээр солих", "Солих", "Буулгах", "Буулгах агуулгаа сонгоно уу", "Эх үүсвэр", "Тод", "Налуу", "Будах", "Холбоос", "Буцаах", "Дахих", "Хүснэгт", "Зураг", "Баллуур", "Параграф", "Фонтын хэмжээ", "Видео", "Фонт", "Тухай", "Хэвлэх", "Доогуур зураас", "Дээгүүр зураас", "Догол нэмэх", "Догол багасгах", "Бүтэн дэлгэц", "Багасга", "Хаалт", "Тэмдэгт жагсаалт", "Дугаарласан жагсаалт", "Таслах", "Бүгдийг сонго", "Код оруулах", "Холбоос нээх", "Холбоос засах", "Nofollow özelliği", "Холбоос салгах", "Шинэчлэх", "Засах", "Нүд", "URL", "Засах", "Хэвтээ эгнүүлэх", "Шүүх", "Сүүлд өөрчлөгдсөнөөр жагсаах", "Нэрээр жагсаах", "Хэмжээгээр жагсаах", "Хавтас нэмэх", "Буцаах", "Хадгалах", "Өөрөөр хадгалах", "Хэмжээг өөрчил", "Тайрах", "Өргөн", "Өндөр", "Харьцааг хадгал", "Тийм", "Үгүй", "Арилга", "Сонго", "Сонго: %s", "Босоо эгнүүлэх", "Задлах", "Нэгтгэх", "Багана нэмэх", "Мөр нэмэх", null, "Устгах", "Баганаар задлах", "Мөрөөр задлах", "Хүрээ", "Таны код HTML кодтой адил байна. HTML форматаар үргэлжлүүлэх үү?", "HTML байдлаар буулгах", "Хадгалах", "Текст байдлаар нэмэх", "Зөвхөн текст оруулах", "Та зөвхөн өөрийн зургуудаа янзлах боломжтой. Энэ зургийг өөр лүүгээ татмаар байна уу?", "Зургийг хост руу амжилттай хадгалсан", "Палет", "Энд ямар нэг файл алга", "Шинээр нэрлэх", "Шинэ нэр оруулна уу", "Урьдчилан харах", "Татах", "Самбараас хуулах ", "Энэ вэб хөтчөөс самбарт хандах эрх алга.", "Сонголтыг хуул", "Хуулах", "Хүрээний радиус", "Бүгдийг харуулах", "Хэрэгжүүл", "Энэ талбарыг бөглөнө үү", "Вэб хаягаа оруулна уу", "Үндсэн", "Дугуй", "Цэг", "Дөрвөлжин", "Хайх", "Өмнөхийг ол", "Дараагийнхийг ол", "Буулгасан агуулга Microsoft Word/Excel форматтай байна. Энэ форматыг хэвээр хадгалах уу эсвэл арилгах уу?", "Word байдлаар буулгасан байна", "Цэвэрлэх", "Бүлгийн нэрээ оруулна уу", "Хэмжээсийг шинээр өөчрлөхийн тулд Alt товчин дээр дарна уу"];
          }, 3268: function(t4) {
            t4.exports.default = ["Begin met typen..", "Over Jodit", "Jodit Editor", "Jodit gebruikershandleiding", "bevat gedetailleerde informatie voor gebruik.", "Voor informatie over de licentie, ga naar onze website:", "Volledige versie kopen", "Copyright © XDSoft.net - Chupurnov Valeriy. Alle rechten voorbehouden.", "Anker", "Open in nieuwe tab", "Editor in volledig scherm openen", "Opmaak verwijderen", "Vulkleur of tekstkleur aanpassen", "Opnieuw", "Ongedaan maken", "Vet", "Cursief", "Geordende list invoegen", "Ongeordende lijst invoegen", "Centreren", "Uitlijnen op volledige breedte", "Links uitlijnen", "Rechts uitlijnen", "Horizontale lijn invoegen", "Afbeelding invoegen", "Bestand invoegen", "Youtube/Vimeo video invoegen", "Link toevoegen", "Tekstgrootte", "Lettertype", "Format blok invoegen", "Normaal", "Koptekst 1", "Koptekst 2", "Koptekst 3", "Koptekst 4", "Citaat", "Code", "Invoegen", "Tabel invoegen", "Inspringing verkleinen", "Inspringing vergroten", "Symbool selecteren", "Symbool invoegen", "Opmaak kopieren", "Modus veranderen", "Marges", "Boven", "Rechts", "Onder", "Links", "CSS styles", "CSS classes", "Uitlijning", "Rechts", "Gecentreerd", "Links", "--Leeg--", "Src", "Titel", "Alternatieve tekst", "Link", "Link in nieuwe tab openen", "Afbeelding", "Bestand", "Geavanceerd", "Afbeeldingseigenschappen", "Annuleren", "OK", "Bestandsbrowser", "Fout bij het laden van de lijst", "Fout bij het laden van de mappenlijst", "Weet je het zeker?", "Geef de map een naam", "Map aanmaken", "Type naam", "Sleep hier een afbeelding naartoe", "Sleep hier een bestand naartoe", "of klik", "Alternatieve tekst", "Uploaden", "Bladeren", "Achtergrond", "Tekst", "Boven", "Midden", "Onder", "Kolom invoegen (voor)", "Kolom invoegen (na)", "Rij invoegen (boven)", "Rij invoegen (onder)", "Tabel verwijderen", "Rij verwijderen", "Kolom verwijderen", "Cel leegmaken", "Tekens: %d", "Woorden: %d", "Doorstrepen", "Onderstrepen", "Superscript", "Subscript", "Selectie knippen", "Selecteer alles", "Enter", "Zoek naar", "Vervangen door", "Vervangen", "Plakken", "Kies content om te plakken", "Broncode", "vet", "cursief", "kwast", "link", "ongedaan maken", "opnieuw", "tabel", "afbeelding", "gum", "paragraaf", "lettergrootte", "video", "lettertype", "over", "afdrukken", "onderstreept", "doorgestreept", "inspringen", "minder inspringen", "volledige grootte", "kleiner maken", "horizontale lijn", "lijst", "genummerde lijst", "knip", "alles selecteren", "Embed code", "Link openen", "Link aanpassen", "Niet volgen", "link verwijderen", "Updaten", "Om te bewerken", "Recensie", " URL", "Bewerken", "Horizontaal uitlijnen", "Filteren", "Sorteren op wijzigingsdatum", "Sorteren op naam", "Sorteren op grootte", "Map toevoegen", "Herstellen", "Opslaan", "Opslaan als ...", "Grootte aanpassen", "Bijknippen", "Breedte", "Hoogte", "Verhouding behouden", "Ja", "Nee", "Verwijderen", "Selecteren", "Selecteer: %s", "Verticaal uitlijnen", "Splitsen", "Samenvoegen", "Kolom toevoegen", "Rij toevoegen", null, "Verwijderen", "Verticaal splitsen", "Horizontaal splitsen", "Rand", "Deze code lijkt op HTML. Als HTML behouden?", "Invoegen als HTML", "Origineel behouden", "Als tekst invoegen", "Als onopgemaakte tekst invoegen", "Je kunt alleen je eigen afbeeldingen aanpassen. Deze afbeelding downloaden?", "De afbeelding is succesvol geüploadet!", "Palette", "Er zijn geen bestanden in deze map.", "Hernoemen", "Voer een nieuwe naam in", "Voorvertoning", "Download", "Plakken van klembord", "Uw browser ondersteunt geen directe toegang tot het klembord.", "Selectie kopiëren", "kopiëren", "Border radius", "Toon alle", "Toepassen", "Vul dit veld in", "Voer een webadres in", "Standaard", "Cirkel", "Punt", "Kwadraat", "Zoeken", "Vorige Zoeken", "Volgende Zoeken", "De geplakte tekst is afkomstig van een Microsoft Word/Excel document. Wil je de opmaak behouden of opschonen?", "Word-tekst gedetecteerd", "Opschonen", "Voeg de klassenaam in", "Druk op Alt voor aangepaste grootte"];
          }, 97834: function(t4) {
            t4.exports.default = ["Napisz coś", "O Jodit", "Edytor Jodit", "Instrukcja Jodit", "zawiera szczegółowe informacje dotyczące użytkowania.", "Odwiedź naszą stronę, aby uzyskać więcej informacji na temat licencji:", "Zakup pełnej wersji", "Copyright © XDSoft.net - Chupurnov Valeriy. Wszystkie prawa zastrzeżone.", "Kotwica", "Otwórz w nowej zakładce", "Otwórz edytor w pełnym rozmiarze", "Wyczyść formatowanie", "Kolor wypełnienia lub ustaw kolor tekstu", "Ponów", "Cofnij", "Pogrubienie", "Kursywa", "Wstaw listę wypunktowaną", "Wstaw listę numeryczną", "Wyśrodkuj", "Wyjustuj", "Wyrównaj do lewej", "Wyrównaj do prawej", "Wstaw linię poziomą", "Wstaw grafikę", "Wstaw plik", "Wstaw film Youtube/vimeo", "Wstaw link", "Rozmiar tekstu", "Krój czcionki", "Wstaw formatowanie", "Normalne", "Nagłówek 1", "Nagłówek 2", "Nagłówek 3", "Nagłówek 4", "Cytat", "Kod", "Wstaw", "Wstaw tabelę", "Zmniejsz wcięcie", "Zwiększ wcięcie", "Wybierz znak specjalny", "Wstaw znak specjalny", "Malarz formatów", "Zmień tryb", "Marginesy", "Górny", "Prawy", "Dolny", "Levy", "Style CSS", "Klasy CSS", "Wyrównanie", "Prawa", "środek", "Lewa", "brak", "Źródło", "Tytuł", "Tekst alternatywny", "Link", "Otwórz w nowej zakładce", "Grafika", "Plik", "Zaawansowane", "Właściwości grafiki", "Anuluj", "OK", "Przeglądarka plików", "Błąd ładowania listy plików", "Błąd ładowania folderów", "Czy jesteś pewien?", "Wprowadź nazwę folderu", "Utwórz folder", "wprowadź nazwę", "Upuść plik graficzny", "Upuść plik", "lub kliknij tu", "Tekst alternatywny", "Wczytaj", "Przeglądaj", "Tło", "Treść", "Góra", "Środek", "Dół", "Wstaw kolumnę przed", "Wstaw kolumnę po", "Wstaw wiersz przed", "Wstaw wiersz po", "Usuń tabelę", "Usuń wiersz", "Usuń kolumnę", "Wyczyść komórkę", "Znaki: %d", "Słowa: %d", "Przekreślenie", "Podkreślenie", "indeks górny", "index dolny", "Wytnij zaznaczenie", "Wybierz wszystko", "Przerwa", "Szukaj", "Zamień na", "Wymienić", "Wklej", "Wybierz zawartość do wklejenia", "HTML", "pogrubienie", "kursywa", "pędzel", "link", "cofnij", "ponów", "tabela", "grafika", "wyczyść", "akapit", "rozmiar czcionki", "wideo", "czcionka", "O programie", "drukuj", "podkreślenie", "przekreślenie", "wcięcie", "wycięcie", "pełen rozmiar", "przytnij", "linia pozioma", "lista", "lista numerowana", "wytnij", "zaznacz wszystko", "Wstaw kod", "otwórz link", "edytuj link", "Atrybut no-follow", "Usuń link", "Aktualizuj", "edytuj", "szukaj", "URL", "Edytuj", "Wyrównywanie w poziomie", "Filtruj", "Sortuj wg zmiany", "Sortuj wg nazwy", "Sortuj wg rozmiaru", "Dodaj folder", "wyczyść", "zapisz", "zapisz jako", "Zmień rozmiar", "Przytnij", "Szerokość", "Wysokość", "Zachowaj proporcje", "Tak", "Nie", "Usuń", "Wybierz", "Wybierz: %s", "Wyrównywanie w pionie", "Podziel", "Scal", "Dodaj kolumnę", "Dodaj wiersz", null, "Usuń", "Podziel w pionie", "Podziel w poziomie", "Obramowanie", "Twój kod wygląda jak HTML. Zachować HTML?", "Wkleić jako HTML?", "Oryginalny tekst", "Wstaw jako tekst", "Wstaw tylko treść", "Możesz edytować tylko swoje grafiki. Czy chcesz pobrać tą grafikę?", "Grafika została pomyślnienie dodana na serwer", "Paleta", "Brak plików.", "zmień nazwę", "Wprowadź nową nazwę", "podgląd", "pobierz", "Wklej ze schowka", "Twoja przeglądarka nie obsługuje schowka", "Kopiuj zaznaczenie", "kopiuj", "Zaokrąglenie krawędzi", "Pokaż wszystkie", "Zastosuj", "Proszę wypełnić to pole", "Proszę, wpisz adres sieci web", "Domyślnie", "Koło", "Punkt", "Kwadrat", "Znaleźć", "Znaleźć Poprzednie", "Znajdź Dalej", "Wklejany tekst pochodzi z dokumentu Microsoft Word/Excel. Chcesz zachować ten format czy wyczyścić go? ", "Wykryto tekst w formacie Word", "Wyczyść", "Wstaw nazwę zajęć", "Naciśnij Alt, aby zmienić rozmiar"];
          }, 86433: function(t4) {
            t4.exports.default = ["Escreva algo...", "Sobre o Jodit", "Editor Jodit", "Guia de usuário Jodit", "contém ajuda detalhada para o uso.", "Para informação sobre a licença, por favor visite nosso site:", "Compre a versão completa", "Copyright © XDSoft.net - Chupurnov Valeriy. Todos os direitos reservados.", "Link", "Abrir em nova aba", "Abrir editor em tela cheia", "Limpar formatação", "Cor de preenchimento ou cor do texto", "Refazer", "Desfazer", "Negrito", "Itálico", "Inserir lista não ordenada", "Inserir lista ordenada", "Centralizar", "Justificar", "Alinhar à Esquerda", "Alinhar à Direita", "Inserir linha horizontal", "Inserir imagem", "Inserir arquivo", "Inserir vídeo do Youtube/vimeo", "Inserir link", "Tamanho da letra", "Fonte", "Inserir bloco", "Normal", "Cabeçalho 1", "Cabeçalho 2", "Cabeçalho 3", "Cabeçalho 4", "Citação", "Código", "Inserir", "Inserir tabela", "Diminuir recuo", "Aumentar recuo", "Selecionar caractere especial", "Inserir caractere especial", "Copiar formato", "Mudar modo", "Margens", "cima", "direta", "baixo", "esquerda", "Estilos CSS", "Classes CSS", "Alinhamento", "Direita", "Centro", "Esquerda", "--Não Estabelecido--", "Fonte", "Título", "Texto Alternativo", "Link", "Abrir link em nova aba", "Imagem", "Arquivo", "Avançado", "Propriedades da imagem", "Cancelar", "Ok", "Procurar arquivo", "Erro ao carregar a lista", "Erro ao carregar as pastas", "Você tem certeza?", "Escreva o nome da pasta", "Criar pasta", "Escreva seu nome", "Soltar imagem", "Soltar arquivo", "ou clique", "Texto alternativo", "Upload", "Explorar", "Fundo", "Texto", "Cima", "Meio", "Baixo", "Inserir coluna antes", "Inserir coluna depois", "Inserir linha acima", "Inserir linha abaixo", "Excluir tabela", "Excluir linha", "Excluir coluna", "Limpar célula", "Caracteres: %d", "Palavras: %d", "Tachado", "Sublinhar", "sobrescrito", "subscrito", "Cortar seleção", "Selecionar tudo", "Pausa", "Procurar por", "Substituir com", "Substituir", "Colar", "Escolher conteúdo para colar", "HTML", "negrito", "itálico", "pincel", "link", "desfazer", "refazer", "tabela", "imagem", "apagar", "parágrafo", "tamanho da letra", "vídeo", "fonte", "Sobre de", "Imprimir", "sublinhar", "tachado", "recuar", "diminuir recuo", "Tamanho completo", "diminuir", "linha horizontal", "lista não ordenada", "lista ordenada", "Cortar", "Selecionar tudo", "Incluir código", "Abrir link", "Editar link", "Não siga", "Remover link", "Atualizar", "Editar", "Visualizar", "URL", "Editar", "Alinhamento horizontal", "filtrar", "Ordenar por modificação", "Ordenar por nome", "Ordenar por tamanho", "Adicionar pasta", "Resetar", "Salvar", "Salvar como...", "Redimensionar", "Recortar", "Largura", "Altura", "Manter a proporção", "Sim", "Não", "Remover", "Selecionar", "Selecionar: %s", "Alinhamento vertical", "Dividir", "Mesclar", "Adicionar coluna", "Adicionar linha", null, "Excluir", "Dividir vertical", "Dividir horizontal", "Borda", "Seu código é similar ao HTML. Manter como HTML?", "Colar como HTML?", "Manter", "Inserir como Texto", "Inserir somente o Texto", "Você só pode editar suas próprias imagens. Baixar essa imagem pro servidor?", "A imagem foi enviada com sucesso para o servidor!", "Palette", "Não há arquivos nesse diretório.", "Húngara", "Digite um novo nome", "preview", "Baixar", "Colar da área de transferência", "O seu navegador não oferece suporte a acesso direto para a área de transferência.", "Selecção de cópia", "cópia", "Border radius", "Mostrar todos os", "Aplicar", "Por favor, preencha este campo", "Por favor introduza um endereço web", "Padrão", "Círculo", "Ponto", "Quadro", "Encontrar", "Encontrar Anteriores", "Localizar Próxima", "O conteúdo colado veio de um documento Microsoft Word/Excel. Você deseja manter o formato ou limpa-lo?", "Colado do Word Detectado", "Limpar", "Insira o nome da classe", "Pressione Alt para redimensionamento personalizado"];
          }, 28359: function(t4) {
            t4.exports.default = ["Напишите что-либо", "О Jodit", "Редактор Jodit", "Jodit Руководство пользователя", "содержит детальную информацию по использованию", "Для получения сведений о лицензии , пожалуйста, перейдите на наш сайт:", "Купить полную версию", "Авторские права © XDSoft.net - Чупурнов Валерий. Все права защищены.", "Анкор", "Открывать ссылку в новой вкладке", "Открыть редактор в полном размере", "Очистить форматирование", "Цвет заливки или цвет текста", "Повтор", "Отмена", "Жирный", "Наклонный", "Вставка маркированного списка", "Вставить нумерованный список", "Выровнять по центру", "Выровнять по ширине", "Выровнять по левому краю", "Выровнять по правому краю", "Вставить горизонтальную линию", "Вставить изображение", "Вставить файл", "Вставьте видео", "Вставить ссылку", "Размер шрифта", "Шрифт", "Вставить блочный элемент", "Нормальный текст", "Заголовок 1", "Заголовок 2", "Заголовок 3", "Заголовок 4", "Цитата", "Код", "Вставить", "Вставить таблицу", "Уменьшить отступ", "Увеличить отступ", "Выберите специальный символ", "Вставить специальный символ", "Формат краски", "Источник", "Отступы", "сверху", "справа", "снизу", "слева", "Стили", "Классы", "Выравнивание", "По правому краю", "По центру", "По левому краю", "--не устанавливать--", "src", "Заголовок", "Альтернативный текст (alt)", "Ссылка", "Открывать ссылку в новом окне", null, "Файл", "Расширенные", "Свойства изображения", "Отмена", "Ок", "Браузер файлов", "Ошибка при загрузке списка изображений", "Ошибка при загрузке списка директорий", "Вы уверены?", "Введите название директории", "Создать директорию", "введите название", "Перетащите сюда изображение", "Перетащите сюда файл", "или нажмите", "Альтернативный текст", "Загрузка", "Сервер", "Фон", "Текст", " К верху", "По середине", "К низу", "Вставить столбец до", "Вставить столбец после", "Вставить ряд выше", "Вставить ряд ниже", "Удалить таблицу", "Удалять ряд", "Удалить столбец", "Очистить ячейку", "Символов: %d", "Слов: %d", "Перечеркнуть", "Подчеркивание", "верхний индекс", "индекс", "Вырезать", "Выделить все", "Разделитель", "Найти", "Заменить на", "Заменить", "Вставить", "Выбрать контент для вставки", "HTML", "жирный", "курсив", "заливка", "ссылка", "отменить", "повторить", "таблица", "Изображение", "очистить", "параграф", "размер шрифта", "видео", "шрифт", "о редакторе", "печать", "подчеркнутый", "перечеркнутый", "отступ", "выступ", "во весь экран", "обычный размер", "линия", "Список", "Нумерованный список", "Вырезать", "Выделить все", "Код", "Открыть ссылку", "Редактировать ссылку", "Атрибут nofollow", "Убрать ссылку", "Обновить", "Редактировать", "Просмотр", "URL", "Редактировать", "Горизонтальное выравнивание", "Фильтр", "По изменению", "По имени", "По размеру", "Добавить папку", "Восстановить", "Сохранить", "Сохранить как", "Изменить размер", "Обрезать размер", "Ширина", "Высота", "Сохранять пропорции", "Да", "Нет", "Удалить", "Выделить", "Выделить: %s", "Вертикальное выравнивание", "Разделить", "Объединить в одну", "Добавить столбец", "Добавить строку", "Лицензия: %s", "Удалить", "Разделить по вертикали", "Разделить по горизонтали", "Рамка", "Ваш текст, который вы пытаетесь вставить похож на HTML. Вставить его как HTML?", "Вставить как HTML?", "Сохранить оригинал", "Вставить как текст", "Вставить только текст", "Вы можете редактировать только свои собственные изображения. Загрузить это изображение на ваш сервер?", "Изображение успешно загружено на сервер!", "палитра", "В данном каталоге нет файлов", "Переименовать", "Введите новое имя", "Предпросмотр", "Скачать", "Вставить из буфера обмена", "Ваш браузер не поддерживает прямой доступ к буферу обмена.", "Скопировать выделенное", "копия", "Радиус границы", "Показать все", "Применить", "Пожалуйста, заполните это поле", "Пожалуйста, введите веб-адрес", "По умолчанию", "Круг", "Точка", "Квадрат", "Найти", "Найти Предыдущие", "Найти Далее", "Контент который вы вставляете поступает из документа Microsoft Word / Excel. Вы хотите сохранить формат или очистить его?", "Возможно это фрагмент Word или Excel", "Почистить", "Вставить название класса", "Нажмите Alt для изменения пользовательского размера"];
          }, 68368: function(t4) {
            t4.exports.default = ["Bir şeyler yaz", "Jodit Hakkında", "Jodit Editor", "Jodit Kullanım Kılavuzu", "kullanım için detaylı bilgiler içerir", "Lisans hakkında bilgi için lütfen web sitemize gidin:", "Tam versiyonunu satın al", "Copyright © XDSoft.net - Chupurnov Valeriy. Tüm hakları saklıdır.", "Bağlantı", "Yeni sekmede aç", "Editörü tam ekranda aç", "Stili temizle", "Renk doldur veya yazı rengi seç", "Yinele", "Geri Al", "Kalın", "İtalik", "Sırasız Liste Ekle", "Sıralı Liste Ekle", "Ortala", "Kenarlara Yasla", "Sola Yasla", "Sağa Yasla", "Yatay Çizgi Ekle", "Resim Ekle", "Dosya Ekle", "Youtube/Vimeo Videosu Ekle", "Bağlantı Ekle", "Font Boyutu", "Font Ailesi", "Blok Ekle", "Normal", "Başlık 1", "Başlık 2", "Başlık 3", "Başlık 4", "Alıntı", "Kod", "Ekle", "Tablo Ekle", "Girintiyi Azalt", "Girintiyi Arttır", "Özel Karakter Seç", "Özel Karakter Ekle", "Resim Biçimi", "Mod Değiştir", "Boşluklar", "Üst", "Sağ", "Alt", "Sol", "CSS Stilleri", "CSS Sınıfları", "Hizalama", "Sağ", "Ortalı", "Sol", "Belirsiz", "Kaynak", "Başlık", "Alternatif Yazı", "Link", "Bağlantıyı yeni sekmede aç", "Resim", "Dosya", "Gelişmiş", "Resim özellikleri", "İptal", "Tamam", "Dosya Listeleyici", "Liste yüklenirken hata oluştu", "Klasörler yüklenirken hata oluştur", "Emin misiniz?", "Dizin yolu giriniz", "Dizin oluştur", "İsim yaz", "Resim bırak", "Dosya bırak", "veya tıkla", "Alternatif yazı", "Yükle", "Gözat", "Arka plan", "Yazı", "Üst", "Orta", "Aşağı", "Öncesine kolon ekle", "Sonrasına kolon ekle", "Üstüne satır ekle", "Altına satır ekle", "Tabloyu sil", "Satırı sil", "Kolonu sil", "Hücreyi temizle", "Harfler: %d", "Kelimeler: %d", "Üstü çizili", "Alt çizgi", "Üst yazı", "Alt yazı", "Seçilimi kes", "Tümünü seç", "Satır sonu", "Ara", "Şununla değiştir", "Değiştir", "Yapıştır", "Yapıştırılacak içerik seç", "Kaynak", "Kalın", "italik", "Fırça", "Bağlantı", "Geri al", "Yinele", "Tablo", "Resim", "Silgi", "Paragraf", "Font boyutu", "Video", "Font", "Hakkında", "Yazdır", "Alt çizgi", "Üstü çizili", "Girinti", "Çıkıntı", "Tam ekran", "Küçült", "Ayraç", "Sırasız liste", "Sıralı liste", "Kes", "Tümünü seç", "Kod ekle", "Bağlantıyı aç", "Bağlantıyı düzenle", "Nofollow özelliği", "Bağlantıyı kaldır", "Güncelle", "Düzenlemek için", "Yorumu", "URL", "Düzenle", "Yatay hizala", "Filtre", "Değişime göre sırala", "İsme göre sırala", "Boyuta göre sırala", "Klasör ekle", "Sıfırla", "Kaydet", "Farklı kaydet", "Boyutlandır", "Kırp", "Genişlik", "Yükseklik", "En boy oranını koru", "Evet", "Hayır", "Sil", "Seç", "Seç: %s", "Dikey hizala", "Ayır", "Birleştir", "Kolon ekle", "Satır ekle", null, "Sil", "Dikey ayır", "Yatay ayır", "Kenarlık", "Kodunuz HTML koduna benziyor. HTML olarak devam etmek ister misiniz?", "HTML olarak yapıştır", "Sakla", "Yazı olarak ekle", "Sadece yazıyı ekle", "Sadece kendi resimlerinizi düzenleyebilirsiniz. Bu görseli kendi hostunuza indirmek ister misiniz?", "Görsel başarıyla hostunuza yüklendi", "Palet", "Bu dizinde dosya yok", "Yeniden isimlendir", "Yeni isim girin", "Ön izleme", "İndir", "Panodan yapıştır ", "Tarayıcınız panoya doğrudan erişimi desteklemiyor.", "Seçimi kopyala", "Kopyala", "Sınır yarıçapı", "Tümünü Göster", "Uygula", "Lütfen bu alanı doldurun", "Lütfen bir web adresi girin", "Varsayılan", "Daire", "Nokta", "Kare", "Bul", "Öncekini Bul", "Sonrakini Bul", "Der Inhalt, den Sie einfügen, stammt aus einem Microsoft Word / Excel-Dokument. Möchten Sie das Format erhalten oder löschen?", "Word biçiminde yapıştırma algılandı", "Temizle", "Sınıf adı girin", "Özel yeniden boyutlandırma için Alt tuşuna basın"];
          }, 25182: function(t4) {
            t4.exports.default = ["输入一些内容", "关于Jodit", "Jodit Editor", "开发者指南", "使用帮助", "有关许可证的信息，请访问我们的网站：", "购买完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. 版权所有", "Anchor", "在新窗口打开", "全屏编辑", "清除样式", "颜色", "重做", "撤销", "粗体", "斜体", "符号列表", "编号", "居中", "对齐文本", "左对齐", "右对齐", "分割线", "图片", "文件", "视频", "链接", "字号", "字体", "格式块", "默认", "标题1", "标题2", "标题3", "标题4", "引用", "代码", "插入", "表格", "减少缩进", "增加缩进", "选择特殊符号", "特殊符号", "格式复制", "改变模式", "外边距（Margins）", "top", "right", "bottom", "left", "样式", "Classes", "对齐方式", "居右", "居中", "居左", "无", "Src", "Title", "Alternative", "Link", "在新窗口打开链接", "图片", "file", "高级", "图片属性", "取消", "确定", "文件管理", "加载list错误", "加载folders错误", "你确定吗？", "输入路径", "创建路径", "type name", "拖动图片到此", "拖动文件到此", "或点击", "Alternative text", "上传", "浏览", "背景色", "文字", "顶部", "中间", "底部", "在之前插入列", "在之后插入列", "在之前插入行", "在之后插入行", "删除表格", "删除行", "删除列", "清除内容", "字符数: %d", "单词数: %d", "删除线", "下划线", "上标", "下标", "剪切", "全选", "Break", "查找", "替换为", "替换", "粘贴", "选择内容并粘贴", "源码", "粗体", "斜体", "颜色", "链接", "撤销", "重做", "表格", "图片", "橡皮擦", "段落", "字号", "视频", "字体", "关于", "打印", "下划线", "上出现", "增加缩进", "减少缩进", "全屏", "收缩", "分割线", "无序列表", "顺序列表", "剪切", "全选", "嵌入代码", "打开链接", "编辑链接", "No follow", "取消链接", "更新", "铅笔", "预览", "URL", "编辑", "水平对齐", "筛选", "修改时间排序", "名称排序", "大小排序", "新建文件夹", "重置", "保存", "保存为", "调整大小", "剪切", "宽", "高", "保持长宽比", "是", "不", "移除", "选择", "选择: %s", "垂直对齐", "拆分", "合并", "添加列", "添加行", null, "删除", "垂直拆分", "水平拆分", "边框", "你粘贴的文本是一段html代码，是否保留源格式", "html粘贴", "保留源格式", "把html代码视为普通文本", "只保留文本", "你只能编辑你自己的图片。Download this image on the host?", "图片上传成功", "调色板", "此目录中沒有文件。", "重命名", "输入新名称", "预览", "下载", "粘贴从剪贴板", "你浏览器不支持直接访问的剪贴板。", "复制选中内容", "复制", "边界半径", "显示所有", "应用", "请填写这个字段", "请输入一个网址", "默认", "圆圈", "点", "方形", "搜索", "查找上一个", "查找下一个", "正在粘贴 Word/Excel 的文本，是否保留源格式？", "文本粘贴", "匹配目标格式", "插入班级名称", "按Alt自定义调整大小"];
          }, 44906: function(t4) {
            t4.exports.default = ["輸入一些內容", "關於Jodit", "Jodit Editor", "開發者指南", "使用幫助", "相關授權條款資訊，請造訪我們的網站：", "購買完整版本", "Copyright © XDSoft.net - Chupurnov Valeriy. All rights reserved.", "錨點", "在新分頁開啟", "全螢幕編輯", "清除樣式", "顏色", "取消復原", "復原", "粗體", "斜體", "項目符號清單", "編號清單", "置中", "文字對齊", "靠左", "靠右", "分割線", "圖片", "檔案", "插入 youtube/vimeo 影片", "插入連結", "文字大小", "字型", "格式化區塊", "內文", "標題1", "標題2", "標題3", "標題4", "引文", "程式碼", "插入", "表格", "減少縮排", "增加縮排", "選擇特殊符號", "特殊符號", "格式複製", "檢視原始碼", "邊距", "上", "右", "下", "左", "樣式", "Classes", "對齊方式", "靠右", "置中", "靠左", "無", "Src", "Title", "替代", "Link", "在新分頁開啟連結", "圖片", "檔案", "進階", "圖片屬性", "取消", "確定", "檔案瀏覽", "清單載入錯誤", "資料夾載入錯誤", "您確定嗎？", "輸入路徑", "創建路徑", "type name", "拖曳圖片至此", "拖曳檔案至此", "或點擊", "替代文字", "上傳", "瀏覽", "背景色", "文字", "頂部", "中間", "底部", "插入左方欄", "插入右方欄", "插入上方列", "插入下方列", "刪除表格", "刪除整列", "刪除整欄", "清除內容", "字元數: %d", "單字數: %d", "刪除線", "底線", "上標", "下標", "剪下", "全選", "斷行", "尋找", "取代為", "取代", "貼上", "選擇內容並貼上", "原始碼", "粗體", "斜體", "顏色", "連結", "復原", "取消復原", "表格", "圖片", "橡皮擦", "段落", "文字大小", "影片", "字型", "關於", "列印", "底線", "刪除線", "增加縮排", "減少縮排", "全螢幕", "縮減", "分隔線", "項目符號清單", "編號清單", "剪下", "全選", "嵌入程式碼", "打開連結", "編輯連結", "No follow", "取消連結", "更新", "鉛筆", "查看", "URL", null, "水平對齊", "篩選", "修改時間排序", "名稱排序", "大小排序", "新增資料夾", "重設", "儲存", "另存為...", "調整大小", "裁切", "寬", "高", "維持長寬比", "是", "否", "移除", "選擇", "選擇: %s", "垂直對齊", "分割", "合併", "新增欄", "新增列", null, "刪除", "垂直分割", "水平分割", "邊框", "您的程式碼與 HTML 類似，是否貼上 HTML 格式？", "貼上 HTML", "保留原始格式", "以純文字貼上", "僅貼上內文", "您只能編輯您自己的圖片。是否下載此圖片?", "圖片上傳成功", "調色盤", "沒有檔案", "重新命名", "輸入新名稱", "預覽", "下載", "從剪貼簿貼上", "瀏覽器無法存取剪貼簿。", "複製已選取項目", "複製", "邊框圓角", "顯示全部", "應用", "請輸入此欄位", "請輸入網址", "預設", "圓圈", "點", "方形", "尋找", "尋找上一個", "尋找下一個", "正在貼上 Word/Excel 文件的內容，是否保留原始格式？", "貼上 Word 格式", "清除格式", "插入 class 名稱", "按住 Alt 以調整自訂大小"];
          }, 928: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M621 1280h595v-595zm-45-45l595-595h-595v595zm1152 77v192q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-224h-864q-14 0-23-9t-9-23v-864h-224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h224v-224q0-14 9-23t23-9h192q14 0 23 9t9 23v224h851l246-247q10-9 23-9t23 9q9 10 9 23t-9 23l-247 246v851h224q14 0 23 9t9 23z"/> </svg>`;
          }, 31230: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <g transform="translate(-251.000000, -443.000000)"> <g transform="translate(215.000000, 119.000000)"/> <path d="M252,448 L256,448 L256,444 L252,444 L252,448 Z M257,448 L269,448 L269,446 L257,446 L257,448 Z M257,464 L269,464 L269,462 L257,462 L257,464 Z M270,444 L270,448 L274,448 L274,444 L270,444 Z M252,462 L252,466 L256,466 L256,462 L252,462 Z M270,462 L270,466 L274,466 L274,462 L270,462 Z M254,461 L256,461 L256,449 L254,449 L254,461 Z M270,461 L272,461 L272,449 L270,449 L270,461 Z"/> </g> </svg>`;
          }, 54522: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' x="0px" y="0px" viewBox="0 0 459 459"> <g> <path d="M229.5,0C102,0,0,102,0,229.5S102,459,229.5,459c20.4,0,38.25-17.85,38.25-38.25c0-10.2-2.55-17.85-10.2-25.5 c-5.1-7.65-10.2-15.3-10.2-25.5c0-20.4,17.851-38.25,38.25-38.25h45.9c71.4,0,127.5-56.1,127.5-127.5C459,91.8,357,0,229.5,0z M89.25,229.5c-20.4,0-38.25-17.85-38.25-38.25S68.85,153,89.25,153s38.25,17.85,38.25,38.25S109.65,229.5,89.25,229.5z M165.75,127.5c-20.4,0-38.25-17.85-38.25-38.25S145.35,51,165.75,51S204,68.85,204,89.25S186.15,127.5,165.75,127.5z M293.25,127.5c-20.4,0-38.25-17.85-38.25-38.25S272.85,51,293.25,51s38.25,17.85,38.25,38.25S313.65,127.5,293.25,127.5z M369.75,229.5c-20.4,0-38.25-17.85-38.25-38.25S349.35,153,369.75,153S408,170.85,408,191.25S390.15,229.5,369.75,229.5z" /> </g> </svg>`;
          }, 17995: function(t4) {
            t4.exports = '<svg viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"> <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"/> </svg>';
          }, 86634: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 128 128" xml:space="preserve"> <polygon points="112.4560547,23.3203125 112.4560547,75.8154297 31.4853516,75.8154297 31.4853516,61.953125 16.0131836,72.6357422 0.5410156,83.3164063 16.0131836,93.9990234 31.4853516,104.6796875 31.4853516,90.8183594 112.4560547,90.8183594 112.4560547,90.8339844 127.4589844,90.8339844 127.4589844,23.3203125"/> </svg>`;
          }, 91115: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 270 270"> <path d="M 255.9537,58.150081 237.69527,40.997278 c -1.49414,-1.375593 -3.43653,-2.077427 -5.37891,-2.077427 -1.94239,0 -3.88478,0.701834 -5.37892,2.077427 L 29.919751,226.1128 c -2.988286,2.77926 -2.988286,7.32714 0,10.13447 L 48.148295,253.372 c 1.46426,1.37559 3.406646,2.1055 5.378915,2.1055 1.972268,0 3.884771,-0.72991 5.378914,-2.1055 L 221.34935,100.73732 255.9537,68.284552 c 2.9584,-2.807333 2.9584,-7.355212 0,-10.134471 z M 251.17244,63.79282 221.34935,91.781927 201.89561,73.506191 231.68882,45.48901 c 0.20918,-0.140367 0.38847,-0.224587 0.62754,-0.224587 0.23906,0 0.44824,0.08422 0.59765,0.224587 l 18.25843,17.152803 c 0,0 0.23906,0.33688 0.23906,0.561467 0,0.224586 -0.0896,0.4211 -0.23906,0.58954 z" style="stroke-width:2.8964;stroke-opacity:1" /> <path d="m 48.626421,116.87948 10.578532,23.10435 c 0.83672,1.82477 3.615826,1.85284 4.452546,0 l 10.937126,-23.52545 c 2.629692,-5.69888 7.470715,-10.24676 13.536935,-12.71722 l 25.07172,-10.274833 c 1.94239,-0.786053 1.94239,-3.396873 0,-4.182926 L 88.13156,79.008563 C 82.06534,76.53811 77.224317,71.990231 74.594625,66.291346 L 63.657499,42.737824 c -0.83672,-1.824766 -3.615826,-1.824766 -4.452546,0 L 48.267826,66.291346 C 45.638135,71.990231 40.797112,76.53811 34.730891,79.008563 L 9.6292894,89.311474 c -1.9423859,0.786054 -1.9423859,3.3688 0,4.182926 l 25.5498446,10.61172 c 6.036338,2.49852 10.847478,7.07448 13.477169,12.77336 z" style="stroke-width:2.8964;fill-opacity:1;stroke-opacity:1" /> <path d="m 111.79878,33.136746 13.56682,5.642739 c 3.19747,1.319446 5.76739,3.761826 7.14201,6.793745 l 5.61797,12.268044 c 0.44825,0.982567 1.91251,0.982567 2.36075,0 l 5.79727,-12.492631 c 1.4045,-3.031919 3.97442,-5.446225 7.20177,-6.765672 l 13.29788,-5.446225 c 1.0459,-0.4211 1.0459,-1.796693 0,-2.217793 l -13.29788,-5.446225 c -3.22735,-1.319447 -5.79727,-3.733753 -7.20177,-6.765672 L 140.48633,6.2144248 c -0.44824,-0.9825664 -1.9125,-0.9825664 -2.36075,0 l -5.79727,12.4926312 c -1.4045,3.031919 -3.97442,5.446225 -7.20177,6.765672 l -13.32776,5.474298 c -1.01601,0.4211 -1.0459,1.796693 0,2.217793 z" style="stroke-width:2.8964;fill-opacity:1" /> <path d="m 233.09331,192.98627 -14.13459,-5.7831 c -3.40665,-1.40367 -6.12599,-3.95834 -7.62013,-7.1587 l -6.15587,-13.27868 c -0.47813,-1.03872 -2.03203,-1.03872 -2.51016,0 l -6.15587,13.27868 c -1.49414,3.20036 -4.21348,5.75503 -7.62013,7.1587 l -14.13459,5.81118 c -1.10567,0.44917 -1.10567,1.90898 0,2.35816 l 14.40354,5.97961 c 3.40664,1.40367 6.12598,3.98642 7.59024,7.21485 l 5.97658,13.02602 c 0.47812,1.03872 2.03203,1.03872 2.51016,0 l 6.15586,-13.25061 c 1.49415,-3.20036 4.21349,-5.75503 7.62013,-7.1587 l 14.1346,-5.7831 c 1.10566,-0.44917 1.10566,-1.90899 0,-2.35816 z" style="stroke-width:2.8964;stroke-opacity:1" /> </svg>`;
          }, 1916: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <g transform="scale(1.2 1.2) translate(-2 -0.5)"> <path d="M 22,12.5 A 1.49995,1.49995 0 0 0 20.50006,11 H 20 V 10 A 3,3 0 0 0 17,7 H 13 V 5.7226 a 2,2 0 1 0 -2,0 V 7 H 7 a 3,3 0 0 0 -3,3 v 1 H 3.49994 a 1.5,1.5 0 0 0 0,3 H 4 v 1 A 3.00128,3.00128 0 0 0 6.20251,17.89282 1.03113,1.03113 0 0 1 7,18.86975 v 0.716 a 0.99928,0.99928 0 0 0 1.00726,1.002 0.9792,0.9792 0 0 0 0.69983,-0.29486 l 2,-2 A 1,1 0 0 1 11.41425,18 H 17 a 3,3 0 0 0 3,-3 v -1 h 0.50006 A 1.49995,1.49995 0 0 0 22,12.5 Z M 19,15 a 2.00226,2.00226 0 0 1 -2,2 H 11.41425 A 1.987,1.987 0 0 0 10,17.58575 l -2,2 v -0.716 A 2.02082,2.02082 0 0 0 6.46771,16.92865 2.00439,2.00439 0 0 1 5,15 V 10 A 2.00226,2.00226 0 0 1 7,8 h 10 a 2.00222,2.00222 0 0 1 2,2 z M 10,12.5 A 1.5,1.5 0 1 1 8.5,11 1.5,1.5 0 0 1 10,12.5 Z m 7,0 A 1.5,1.5 0 1 1 15.5,11 1.5,1.5 0 0 1 17,12.5 Z"/> </g> </svg>`;
          }, 52450: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M747 1521q74 32 140 32 376 0 376-335 0-114-41-180-27-44-61.5-74t-67.5-46.5-80.5-25-84-10.5-94.5-2q-73 0-101 10 0 53-.5 159t-.5 158q0 8-1 67.5t-.5 96.5 4.5 83.5 12 66.5zm-14-746q42 7 109 7 82 0 143-13t110-44.5 74.5-89.5 25.5-142q0-70-29-122.5t-79-82-108-43.5-124-14q-50 0-130 13 0 50 4 151t4 152q0 27-.5 80t-.5 79q0 46 1 69zm-541 889l2-94q15-4 85-16t106-27q7-12 12.5-27t8.5-33.5 5.5-32.5 3-37.5.5-34v-65.5q0-982-22-1025-4-8-22-14.5t-44.5-11-49.5-7-48.5-4.5-30.5-3l-4-83q98-2 340-11.5t373-9.5q23 0 68.5.5t67.5.5q70 0 136.5 13t128.5 42 108 71 74 104.5 28 137.5q0 52-16.5 95.5t-39 72-64.5 57.5-73 45-84 40q154 35 256.5 134t102.5 248q0 100-35 179.5t-93.5 130.5-138 85.5-163.5 48.5-176 14q-44 0-132-3t-132-3q-106 0-307 11t-231 12z"/> </svg>`;
          }, 41111: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M384 1662l17-85q6-2 81.5-21.5t111.5-37.5q28-35 41-101 1-7 62-289t114-543.5 52-296.5v-25q-24-13-54.5-18.5t-69.5-8-58-5.5l19-103q33 2 120 6.5t149.5 7 120.5 2.5q48 0 98.5-2.5t121-7 98.5-6.5q-5 39-19 89-30 10-101.5 28.5t-108.5 33.5q-8 19-14 42.5t-9 40-7.5 45.5-6.5 42q-27 148-87.5 419.5t-77.5 355.5q-2 9-13 58t-20 90-16 83.5-6 57.5l1 18q17 4 185 31-3 44-16 99-11 0-32.5 1.5t-32.5 1.5q-29 0-87-10t-86-10q-138-2-206-2-51 0-143 9t-121 11z"/> </svg>`;
          }, 49972: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1760 896q14 0 23 9t9 23v64q0 14-9 23t-23 9h-1728q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h1728zm-1277-64q-28-35-51-80-48-97-48-188 0-181 134-309 133-127 393-127 50 0 167 19 66 12 177 48 10 38 21 118 14 123 14 183 0 18-5 45l-12 3-84-6-14-2q-50-149-103-205-88-91-210-91-114 0-182 59-67 58-67 146 0 73 66 140t279 129q69 20 173 66 58 28 95 52h-743zm507 256h411q7 39 7 92 0 111-41 212-23 55-71 104-37 35-109 81-80 48-153 66-80 21-203 21-114 0-195-23l-140-40q-57-16-72-28-8-8-8-22v-13q0-108-2-156-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56 12.5 27q35 57 80 94 43 36 105 57 59 22 132 22 64 0 139-27 77-26 122-86 47-61 47-129 0-84-81-157-34-29-137-71z"/> </svg>`;
          }, 45062: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm639 217v206h-514l-4-27q-3-45-3-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 80-65 188-65 110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86-99.5 62.5-87 63-41 73h232v-80h126z"/> </svg>`;
          }, 18605: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1025 1369v167h-248l-159-252-24-42q-8-9-11-21h-3l-9 21q-10 20-25 44l-155 250h-258v-167h128l197-291-185-272h-137v-168h276l139 228q2 4 23 42 8 9 11 21h3q3-9 11-21l25-42 140-228h257v168h-125l-184 267 204 296h109zm637-679v206h-514l-3-27q-4-28-4-46 0-64 26-117t65-86.5 84-65 84-54.5 65-54 26-64q0-38-29.5-62.5t-70.5-24.5q-51 0-97 39-14 11-36 38l-105-92q26-37 63-66 83-65 188-65 110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5-81.5 58.5-82 50.5-65.5 51.5-30.5 63h232v-80h126z"/> </svg>`;
          }, 83389: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M176 223q-37-2-45-4l-3-88q13-1 40-1 60 0 112 4 132 7 166 7 86 0 168-3 116-4 146-5 56 0 86-2l-1 14 2 64v9q-60 9-124 9-60 0-79 25-13 14-13 132 0 13 .5 32.5t.5 25.5l1 229 14 280q6 124 51 202 35 59 96 92 88 47 177 47 104 0 191-28 56-18 99-51 48-36 65-64 36-56 53-114 21-73 21-229 0-79-3.5-128t-11-122.5-13.5-159.5l-4-59q-5-67-24-88-34-35-77-34l-100 2-14-3 2-86h84l205 10q76 3 196-10l18 2q6 38 6 51 0 7-4 31-45 12-84 13-73 11-79 17-15 15-15 41 0 7 1.5 27t1.5 31q8 19 22 396 6 195-15 304-15 76-41 122-38 65-112 123-75 57-182 89-109 33-255 33-167 0-284-46-119-47-179-122-61-76-83-195-16-80-16-237v-333q0-188-17-213-25-36-147-39zm1488 1409v-64q0-14-9-23t-23-9h-1472q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23z"/> </svg>`;
          }, 93267: function(t4) {
            t4.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path d="M36 4h-24c-2.21 0-4 1.79-4 4v32c0 2.21 1.79 4 4 4h24c2.21 0 4-1.79 4-4v-32c0-2.21-1.79-4-4-4zm-24 4h10v16l-5-3-5 3v-16z"/> </svg>';
          }, 71948: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M832 1408l336-384h-768l-336 384h768zm1013-1077q15 34 9.5 71.5t-30.5 65.5l-896 1024q-38 44-96 44h-768q-38 0-69.5-20.5t-47.5-54.5q-15-34-9.5-71.5t30.5-65.5l896-1024q38-44 96-44h768q38 0 69.5 20.5t47.5 54.5z"/> </svg>`;
          }, 51457: function(t4) {
            t4.exports = '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89,6.61H22.31V4.47A2.47,2.47,0,0,0,19.84,2H6.78A2.47,2.47,0,0,0,4.31,4.47V22.92a2.47,2.47,0,0,0,2.47,2.47H9.69V27.2a2.8,2.8,0,0,0,2.8,2.8h12.4a2.8,2.8,0,0,0,2.8-2.8V9.41A2.8,2.8,0,0,0,24.89,6.61ZM6.78,23.52a.61.61,0,0,1-.61-.6V4.47a.61.61,0,0,1,.61-.6H19.84a.61.61,0,0,1,.61.6V6.61h-8a2.8,2.8,0,0,0-2.8,2.8V23.52Zm19,3.68a.94.94,0,0,1-.94.93H12.49a.94.94,0,0,1-.94-.93V9.41a.94.94,0,0,1,.94-.93h12.4a.94.94,0,0,1,.94.93Z"/> <path d="M23.49,13.53h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,17.37h-9.6a.94.94,0,1,0,0,1.87h9.6a.94.94,0,1,0,0-1.87Z"/> <path d="M23.49,21.22h-9.6a.93.93,0,1,0,0,1.86h9.6a.93.93,0,1,0,0-1.86Z"/> </svg>';
          }, 23602: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M960 896q26 0 45 19t19 45-19 45-45 19-45-19-19-45 19-45 45-19zm300 64l507 398q28 20 25 56-5 35-35 51l-128 64q-13 7-29 7-17 0-31-8l-690-387-110 66q-8 4-12 5 14 49 10 97-7 77-56 147.5t-132 123.5q-132 84-277 84-136 0-222-78-90-84-79-207 7-76 56-147t131-124q132-84 278-84 83 0 151 31 9-13 22-22l122-73-122-73q-13-9-22-22-68 31-151 31-146 0-278-84-82-53-131-124t-56-147q-5-59 15.5-113t63.5-93q85-79 222-79 145 0 277 84 83 52 132 123t56 148q4 48-10 97 4 1 12 5l110 66 690-387q14-8 31-8 16 0 29 7l128 64q30 16 35 51 3 36-25 56zm-681-260q46-42 21-108t-106-117q-92-59-192-59-74 0-113 36-46 42-21 108t106 117q92 59 192 59 74 0 113-36zm-85 745q81-51 106-117t-21-108q-39-36-113-36-100 0-192 59-81 51-106 117t21 108q39 36 113 36 100 0 192-59zm178-613l96 58v-11q0-36 33-56l14-8-79-47-26 26q-3 3-10 11t-12 12q-2 2-4 3.5t-3 2.5zm224 224l96 32 736-576-128-64-768 431v113l-160 96 9 8q2 2 7 6 4 4 11 12t11 12l26 26zm704 416l128-64-520-408-177 138q-2 3-13 7z"/> </svg>`;
          }, 86899: function(t4) {
            t4.exports = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> <path stroke-width="0" d="M10.5 20H2a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h1V3l2.03-.4a3 3 0 0 1 5.94 0L13 3v1h1a2 2 0 0 1 2 2v1h-2V6h-1v1H3V6H2v12h5v2h3.5zM8 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm2 4h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2zm0 2v8h8v-8h-8z"/> </svg>';
          }, 95320: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 18 18"> <g fill-rule="evenodd" stroke="none" stroke-width="1"> <g transform="translate(-381.000000, -381.000000)"> <g transform="translate(381.000000, 381.000000)"> <path d="M0,2 L2,2 L2,0 C0.9,0 0,0.9 0,2 L0,2 Z M0,10 L2,10 L2,8 L0,8 L0,10 L0,10 Z M4,18 L6,18 L6,16 L4,16 L4,18 L4,18 Z M0,6 L2,6 L2,4 L0,4 L0,6 L0,6 Z M10,0 L8,0 L8,2 L10,2 L10,0 L10,0 Z M16,0 L16,2 L18,2 C18,0.9 17.1,0 16,0 L16,0 Z M2,18 L2,16 L0,16 C0,17.1 0.9,18 2,18 L2,18 Z M0,14 L2,14 L2,12 L0,12 L0,14 L0,14 Z M6,0 L4,0 L4,2 L6,2 L6,0 L6,0 Z M8,18 L10,18 L10,16 L8,16 L8,18 L8,18 Z M16,10 L18,10 L18,8 L16,8 L16,10 L16,10 Z M16,18 C17.1,18 18,17.1 18,16 L16,16 L16,18 L16,18 Z M16,6 L18,6 L18,4 L16,4 L16,6 L16,6 Z M16,14 L18,14 L18,12 L16,12 L16,14 L16,14 Z M12,18 L14,18 L14,16 L12,16 L12,18 L12,18 Z M12,2 L14,2 L14,0 L12,0 L12,2 L12,2 Z M4,14 L14,14 L14,4 L4,4 L4,14 L4,14 Z M6,6 L12,6 L12,12 L6,12 L6,6 L6,6 Z"/> </g> </g> </g> </svg>`;
          }, 45674: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M896 1152q0-36-20-69-1-1-15.5-22.5t-25.5-38-25-44-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44-25.5 38-15.5 22.5q-20 33-20 69 0 53 37.5 90.5t90.5 37.5 90.5-37.5 37.5-90.5zm512-128q0 212-150 362t-362 150-362-150-150-362q0-145 81-275 6-9 62.5-90.5t101-151 99.5-178 83-201.5q9-30 34-47t51-17 51.5 17 33.5 47q28 93 83 201.5t99.5 178 101 151 62.5 90.5q81 127 81 275z"/> </svg>`;
          }, 3843: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 16 16"> <path stroke-width="0" d="M16 9v-6h-3v-1c0-0.55-0.45-1-1-1h-11c-0.55 0-1 0.45-1 1v3c0 0.55 0.45 1 1 1h11c0.55 0 1-0.45 1-1v-1h2v4h-9v2h-0.5c-0.276 0-0.5 0.224-0.5 0.5v5c0 0.276 0.224 0.5 0.5 0.5h2c0.276 0 0.5-0.224 0.5-0.5v-5c0-0.276-0.224-0.5-0.5-0.5h-0.5v-1h9zM12 3h-11v-1h11v1z"/> </svg>`;
          }, 48842: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M789 559l-170 450q33 0 136.5 2t160.5 2q19 0 57-2-87-253-184-452zm-725 1105l2-79q23-7 56-12.5t57-10.5 49.5-14.5 44.5-29 31-50.5l237-616 280-724h128q8 14 11 21l205 480q33 78 106 257.5t114 274.5q15 34 58 144.5t72 168.5q20 45 35 57 19 15 88 29.5t84 20.5q6 38 6 57 0 4-.5 13t-.5 13q-63 0-190-8t-191-8q-76 0-215 7t-178 8q0-43 4-78l131-28q1 0 12.5-2.5t15.5-3.5 14.5-4.5 15-6.5 11-8 9-11 2.5-14q0-16-31-96.5t-72-177.5-42-100l-450-2q-26 58-76.5 195.5t-50.5 162.5q0 22 14 37.5t43.5 24.5 48.5 13.5 57 8.5 41 4q1 19 1 58 0 9-2 27-58 0-174.5-10t-174.5-10q-8 0-26.5 4t-21.5 4q-80 14-188 14z"/> </svg>`;
          }, 25501: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1744 1408q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80v-1024h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024h80zm-1663-1279l54 27q12 5 211 5 44 0 132-2t132-2q36 0 107.5.5t107.5.5h293q6 0 21 .5t20.5 0 16-3 17.5-9 15-17.5l42-1q4 0 14 .5t14 .5q2 112 2 336 0 80-5 109-39 14-68 18-25-44-54-128-3-9-11-48t-14.5-73.5-7.5-35.5q-6-8-12-12.5t-15.5-6-13-2.5-18-.5-16.5.5q-17 0-66.5-.5t-74.5-.5-64 2-71 6q-9 81-8 136 0 94 2 388t2 455q0 16-2.5 71.5t0 91.5 12.5 69q40 21 124 42.5t120 37.5q5 40 5 50 0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29 78-27q19-42 19-383 0-101-3-303t-3-303v-117q0-2 .5-15.5t.5-25-1-25.5-3-24-5-14q-11-12-162-12-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111-42.5 53.5q-42-26-56-44v-383z"/> </svg>`;
          }, 29348: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1534 189v73q0 29-18.5 61t-42.5 32q-50 0-54 1-26 6-32 31-3 11-3 64v1152q0 25-18 43t-43 18h-108q-25 0-43-18t-18-43v-1218h-143v1218q0 25-17.5 43t-43.5 18h-108q-26 0-43.5-18t-17.5-43v-496q-147-12-245-59-126-58-192-179-64-117-64-259 0-166 88-286 88-118 209-159 111-37 417-37h479q25 0 43 18t18 43z"/></svg>`;
          }, 24772: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24"> <path stroke-width="0" d="M22,20.6L3.4,2H8V0H0v8h2V3.4L20.6,22H16v2h8v-8h-2V20.6z M16,0v2h4.7l-6.3,6.3l1.4,1.4L22,3.5V8h2V0H16z M8.3,14.3L2,20.6V16H0v8h8v-2H3.5l6.3-6.3L8.3,14.3z"/> </svg>`;
          }, 66547: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M896 960v448q0 26-19 45t-45 19-45-19l-144-144-332 332q-10 10-23 10t-23-10l-114-114q-10-10-10-23t10-23l332-332-144-144q-19-19-19-45t19-45 45-19h448q26 0 45 19t19 45zm755-672q0 13-10 23l-332 332 144 144q19 19 19 45t-19 45-45 19h-448q-26 0-45-19t-19-45v-448q0-26 19-45t45-19 45 19l144 144 332-332q10-10 23-10t23 10l114 114q10 10 10 23z"/> </svg>`;
          }, 89097: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1600 736v192q0 40-28 68t-68 28h-1216q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h1216q40 0 68 28t28 68z"/> </svg>`;
          }, 64831: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 576q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1024 384v448h-1408v-192l320-320 160 160 512-512zm96-704h-1600q-13 0-22.5 9.5t-9.5 22.5v1216q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5v-1216q0-13-9.5-22.5t-22.5-9.5zm160 32v1216q0 66-47 113t-113 47h-1600q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1600q66 0 113 47t47 113z"/> </svg>`;
          }, 67176: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M352 832q0 14-9 23l-288 288q-9 9-23 9-13 0-22.5-9.5t-9.5-22.5v-576q0-13 9.5-22.5t22.5-9.5q14 0 23 9l288 288q9 9 9 23zm1440 480v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
          }, 14017: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M384 544v576q0 13-9.5 22.5t-22.5 9.5q-14 0-23-9l-288-288q-9-9-9-23t9-23l288-288q9-9 23-9 13 0 22.5 9.5t9.5 22.5zm1408 768v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1088q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1088q13 0 22.5 9.5t9.5 22.5zm0-384v192q0 13-9.5 22.5t-22.5 9.5h-1728q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1728q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
          }, 38681: function(t4) {
            t4.exports = '<svg viewBox="0 0 18.151 18.151" xmlns="http://www.w3.org/2000/svg"> <g> <path stroke-width="0" d="M6.237,16.546H3.649V1.604h5.916v5.728c0.474-0.122,0.968-0.194,1.479-0.194 c0.042,0,0.083,0.006,0.125,0.006V0H2.044v18.15h5.934C7.295,17.736,6.704,17.19,6.237,16.546z"/> <path stroke-width="0" d="M11.169,8.275c-2.723,0-4.938,2.215-4.938,4.938s2.215,4.938,4.938,4.938s4.938-2.215,4.938-4.938 S13.892,8.275,11.169,8.275z M11.169,16.81c-1.983,0-3.598-1.612-3.598-3.598c0-1.983,1.614-3.597,3.598-3.597 s3.597,1.613,3.597,3.597C14.766,15.198,13.153,16.81,11.169,16.81z"/> <polygon stroke-width="0" points="11.792,11.073 10.502,11.073 10.502,12.578 9.03,12.578 9.03,13.868 10.502,13.868 10.502,15.352 11.792,15.352 11.792,13.868 13.309,13.868 13.309,12.578 11.792,12.578 "/> </g> </svg>';
          }, 64637: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 432 432"> <g> <polygon points="203.688,96 0,96 0,144 155.688,144 "/> <polygon points="155.719,288 0,288 0,336 203.719,336 "/> <path d="M97.844,230.125c-3.701-3.703-5.856-8.906-5.856-14.141s2.154-10.438,5.856-14.141l9.844-9.844H0v48h107.719 L97.844,230.125z"/> <polygon points="232,176 232,96 112,216 232,336 232,256 432,256 432,176"/> </g> </svg>`;
          }, 94190: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 312 312"> <g transform="translate(0.000000,312.000000) scale(0.100000,-0.100000)" stroke="none"> <path d="M50 3109 c0 -7 -11 -22 -25 -35 l-25 -23 0 -961 0 -961 32 -29 32 -30 501 -2 500 -3 3 -502 2 -502 31 -30 31 -31 958 0 958 0 23 25 c13 13 30 25 37 25 9 0 12 199 12 960 0 686 -3 960 -11 960 -6 0 -24 12 -40 28 l-29 27 -503 5 -502 5 -5 502 -5 503 -28 29 c-15 16 -27 34 -27 40 0 8 -274 11 -960 11 -710 0 -960 -3 -960 -11z m1738 -698 l2 -453 -40 -40 c-22 -22 -40 -43 -40 -47 0 -4 36 -42 79 -85 88 -87 82 -87 141 -23 l26 27 455 -2 454 -3 0 -775 0 -775 -775 0 -775 0 -3 450 -2 449 47 48 47 48 -82 80 c-44 44 -84 80 -87 80 -3 0 -25 -18 -48 -40 l-41 -40 -456 2 -455 3 -3 765 c-1 421 0 771 3 778 3 10 164 12 777 10 l773 -3 3 -454z"/> <path d="M607 2492 c-42 -42 -77 -82 -77 -87 0 -6 86 -96 190 -200 105 -104 190 -197 190 -205 0 -8 -41 -56 -92 -107 -65 -65 -87 -94 -77 -98 8 -3 138 -4 289 -3 l275 3 3 275 c1 151 0 281 -3 289 -4 10 -35 -14 -103 -82 -54 -53 -103 -97 -109 -97 -7 0 -99 88 -206 195 -107 107 -196 195 -198 195 -3 0 -39 -35 -82 -78z"/> <path d="M1470 1639 c-47 -49 -87 -91 -89 -94 -5 -6 149 -165 160 -165 9 0 189 179 189 188 0 12 -154 162 -165 161 -6 0 -48 -41 -95 -90z"/> <path d="M1797 1303 c-9 -8 -9 -568 0 -576 4 -4 50 36 103 88 54 52 101 95 106 95 5 0 95 -85 199 -190 104 -104 194 -190 200 -190 6 0 46 36 90 80 l79 79 -197 196 c-108 108 -197 199 -197 203 0 4 45 52 99 106 55 55 98 103 95 108 -6 10 -568 11 -577 1z"/> </g> </svg>`;
          }, 51957: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 42h4v-4h-4v4zm4-28h-4v4h4v-4zm-4 20h4v-4h-4v4zm8 8h4v-4h-4v4zm-4-36h-4v4h4v-4zm8 0h-4v4h4v-4zm16 0h-4v4h4v-4zm-8 8h-4v4h4v-4zm0-8h-4v4h4v-4zm12 28h4v-4h-4v4zm-16 8h4v-4h-4v4zm-16-16h36v-4h-36v4zm32-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-16 16h4v-4h-4v4zm8 8h4v-4h-4v4zm8 0h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg>`;
          }, 71940: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 48 48"> <path d="M6 18h4v-4h-4v4zm0-8h4v-4h-4v4zm8 32h4v-4h-4v4zm0-16h4v-4h-4v4zm-8 0h4v-4h-4v4zm0 16h4v-4h-4v4zm0-8h4v-4h-4v4zm8-24h4v-4h-4v4zm24 24h4v-4h-4v4zm-16 8h4v-36h-4v36zm16 0h4v-4h-4v4zm0-16h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4zm-8-8h4v-4h-4v4zm0 32h4v-4h-4v4zm0-16h4v-4h-4v4z"/> <path d="M0 0h48v48h-48z" fill="none"/> </svg>`;
          }, 48007: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm-1280-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm1280 512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68z"/> </svg>`;
          }, 43218: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1248v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm-640-1024v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68zm0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68z"/> </svg>`;
          }, 80515: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45z"/> </svg>`;
          }, 223: function(t4) {
            t4.exports = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path d="M5.09668 6.99707H7.17358L4.17358 3.99707L1.17358 6.99707H3.09668V17.0031H1.15881L4.15881 20.0031L7.15881 17.0031H5.09668V6.99707Z"/> <path d="M22.8412 7H8.84119V5H22.8412V7Z"/> <path d="M22.8412 11H8.84119V9H22.8412V11Z"/> <path d="M8.84119 15H22.8412V13H8.84119V15Z"/> <path d="M22.8412 19H8.84119V17H22.8412V19Z"/> </svg>';
          }, 95032: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/> </svg>`;
          }, 73533: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M503 1271l-256 256q-10 9-23 9-12 0-23-9-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23zm169 41v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm-224-224q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm1264 128q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-334-335q-21-21-42-56l239-18 273 274q27 27 68 27.5t68-26.5l147-146q28-28 28-67 0-40-28-68l-274-275 18-239q35 21 56 42l336 336q84 86 84 204zm-617-724l-239 18-273-274q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l274 274-18 240q-35-21-56-42l-336-336q-84-86-84-204 0-120 85-203l147-146q83-83 203-83 121 0 204 85l334 335q21 21 42 56zm633 84q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23 9-23 23-9h320q14 0 23 9t9 23zm-544-544v320q0 14-9 23t-23 9-23-9-9-23v-320q0-14 9-23t23-9 23 9 9 23zm407 151l-256 256q-11 9-23 9t-23-9q-9-10-9-23t9-23l256-256q10-9 23-9t23 9q9 10 9 23t-9 23z"/> </svg>`;
          }, 40037: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M381 1620q0 80-54.5 126t-135.5 46q-106 0-172-66l57-88q49 45 106 45 29 0 50.5-14.5t21.5-42.5q0-64-105-56l-26-56q8-10 32.5-43.5t42.5-54 37-38.5v-1q-16 0-48.5 1t-48.5 1v53h-106v-152h333v88l-95 115q51 12 81 49t30 88zm2-627v159h-362q-6-36-6-54 0-51 23.5-93t56.5-68 66-47.5 56.5-43.5 23.5-45q0-25-14.5-38.5t-39.5-13.5q-46 0-81 58l-85-59q24-51 71.5-79.5t105.5-28.5q73 0 123 41.5t50 112.5q0 50-34 91.5t-75 64.5-75.5 50.5-35.5 52.5h127v-60h105zm1409 319v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm-1408-899v99h-335v-99h107q0-41 .5-122t.5-121v-12h-2q-8 17-50 54l-71-76 136-127h106v404h108zm1408 387v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-14 9-23t23-9h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
          }, 83207: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path stroke-width="0" d="M384 1408q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm0-512q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm-1408-928q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm1408 416v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5zm0-512v192q0 13-9.5 22.5t-22.5 9.5h-1216q-13 0-22.5-9.5t-9.5-22.5v-192q0-13 9.5-22.5t22.5-9.5h1216q13 0 22.5 9.5t9.5 22.5z"/> </svg>`;
          }, 59827: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M448 1536h896v-256h-896v256zm0-640h896v-384h-160q-40 0-68-28t-28-68v-160h-640v640zm1152 64q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128 0v416q0 13-9.5 22.5t-22.5 9.5h-224v160q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-160h-224q-13 0-22.5-9.5t-9.5-22.5v-416q0-79 56.5-135.5t135.5-56.5h64v-544q0-40 28-68t68-28h672q40 0 88 20t76 48l152 152q28 28 48 76t20 88v256h64q79 0 135.5 56.5t56.5 135.5z"/> </svg>`;
          }, 34045: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 256v448q0 26-19 45t-45 19h-448q-42 0-59-40-17-39 14-69l138-138q-148-137-349-137-104 0-198.5 40.5t-163.5 109.5-109.5 163.5-40.5 198.5 40.5 198.5 109.5 163.5 163.5 109.5 198.5 40.5q119 0 225-52t179-147q7-10 23-12 14 0 25 9l137 138q9 8 9.5 20.5t-7.5 22.5q-109 132-264 204.5t-327 72.5q-156 0-298-61t-245-164-164-245-61-298 61-298 164-245 245-164 298-61q147 0 284.5 55.5t244.5 156.5l130-129q29-31 70-14 39 17 39 59z"/> </svg>`;
          }, 39199: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 896q0 156-61 298t-164 245-245 164-298 61q-172 0-327-72.5t-264-204.5q-7-10-6.5-22.5t8.5-20.5l137-138q10-9 25-9 16 2 23 12 73 95 179 147t225 52q104 0 198.5-40.5t163.5-109.5 109.5-163.5 40.5-198.5-40.5-198.5-109.5-163.5-163.5-109.5-198.5-40.5q-98 0-188 35.5t-160 101.5l137 138q31 30 14 69-17 40-59 40h-448q-26 0-45-19t-19-45v-448q0-42 40-59 39-17 69 14l130 129q107-101 244.5-156.5t284.5-55.5q156 0 298 61t245 164 164 245 61 298z"/> </svg>`;
          }, 21917: function(t4) {
            t4.exports = '<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"> <path clip-rule="evenodd" d="M306.39,154.09c19.628,4.543,35.244,21.259,39.787,39.523 c1.551,8.54,8.998,14.989,17.904,14.989c9.991,0,18.168-8.175,18.168-18.17c0-13.083-10.991-32.98-25.985-47.881 c-14.719-14.537-32.252-24.802-46.695-24.802c-9.991,0-18.172,8.45-18.172,18.446C291.396,145.094,297.847,152.546,306.39,154.09z M56.629,392.312c-14.09,14.08-14.09,36.979,0,51.059c14.08,14.092,36.981,14.092,50.965,0l104.392-104.303 c24.347,15.181,53.062,23.991,83.953,23.991c87.857,0,158.995-71.142,158.995-158.999c0-87.854-71.138-158.995-158.995-158.995 c-87.856,0-158.995,71.141-158.995,158.995c0,30.802,8.819,59.606,23.992,83.953L56.629,392.312z M182.371,204.06 c0-62.687,50.875-113.568,113.568-113.568s113.569,50.881,113.569,113.568c0,62.694-50.876,113.569-113.569,113.569 S182.371,266.754,182.371,204.06z" fill-rule="evenodd"/> </svg>';
          }, 9103: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z"/> </svg>`;
          }, 22227: function(t4) {
            t4.exports = '<svg viewBox="0 0 16 16" xml:space="preserve" xmlns="http://www.w3.org/2000/svg"> <path d="M8,11c1.657,0,3-1.343,3-3V3c0-1.657-1.343-3-3-3S5,1.343,5,3v5C5,9.657,6.343,11,8,11z"/> <path d="M13,8V6h-1l0,1.844c0,1.92-1.282,3.688-3.164,4.071C6.266,12.438,4,10.479,4,8V6H3v2c0,2.414,1.721,4.434,4,4.899V15H5v1h6 v-1H9v-2.101C11.279,12.434,13,10.414,13,8z"/> </svg>';
          }, 49989: function(t4) {
            t4.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path d="M24.89 32h4.18L18.86 6h-3.71L4.93 32h4.18l2.25-6h11.29l2.24 6zM12.86 22L17 10.95 21.14 22h-8.28zm30.31 1.17L27 39.34 19.66 32l-2.83 2.83L27 45l19-19-2.83-2.83z"/> </svg>';
          }, 81875: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 270 270"> <path d="m240.443652,220.45085l-47.410809,0l0,-10.342138c13.89973,-8.43655 25.752896,-19.844464 34.686646,-33.469923c11.445525,-17.455846 17.496072,-37.709239 17.496072,-58.570077c0,-59.589197 -49.208516,-108.068714 -109.693558,-108.068714s-109.69263,48.479517 -109.69263,108.069628c0,20.860839 6.050547,41.113316 17.497001,58.570077c8.93375,13.625459 20.787845,25.032458 34.686646,33.469008l0,10.342138l-47.412666,0c-10.256959,0 -18.571354,8.191376 -18.571354,18.296574c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.98402,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574l0,-39.496814c0,-7.073455 -4.137698,-13.51202 -10.626529,-16.537358c-25.24497,-11.772016 -41.557118,-37.145704 -41.557118,-64.643625c0,-39.411735 32.545369,-71.476481 72.549922,-71.476481c40.004553,0 72.550851,32.064746 72.550851,71.476481c0,27.497006 -16.312149,52.87161 -41.557118,64.643625c-6.487902,3.026253 -10.6256,9.464818 -10.6256,16.537358l0,39.496814c0,10.105198 8.314395,18.296574 18.571354,18.296574l65.982163,0c10.256959,0 18.571354,-8.191376 18.571354,-18.296574c0,-10.105198 -8.314395,-18.296574 -18.571354,-18.296574z"/> </svg>`;
          }, 67447: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M576 1376v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm-512-768v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm0-384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23zm128-320v1088q0 66-47 113t-113 47h-1344q-66 0-113-47t-47-113v-1088q0-66 47-113t113-47h1344q66 0 113 47t47 113z"/> </svg>`;
          }, 36339: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 352v1088q0 42-39 59-13 5-25 5-27 0-45-19l-403-403v166q0 119-84.5 203.5t-203.5 84.5h-704q-119 0-203.5-84.5t-84.5-203.5v-704q0-119 84.5-203.5t203.5-84.5h704q119 0 203.5 84.5t84.5 203.5v165l403-402q18-19 45-19 12 0 25 5 39 17 39 59z"/> </svg>`;
          }, 88497: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg>`;
          }, 91882: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1203 544q0 13-10 23l-393 393 393 393q10 10 10 23t-10 23l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23z"/> </svg>`;
          }, 14305: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1171 960q0 13-10 23l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg>`;
          }, 58446: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1395 1184q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/> </svg>`;
          }, 39858: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M704 1376v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm256 0v-704q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23zm-544-992h448l-48-117q-7-9-17-11h-317q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5h-832q-66 0-113-58.5t-47-141.5v-952h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23z"/> </svg>`;
          }, 70881: function(t4) {
            t4.exports = '<svg viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"> <g stroke="none" stroke-width="1"> <path d="M14,1.4 L12.6,0 L7,5.6 L1.4,0 L0,1.4 L5.6,7 L0,12.6 L1.4,14 L7,8.4 L12.6,14 L14,12.6 L8.4,7 L14,1.4 Z"/> </g> </svg>';
          }, 60636: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h896q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-640q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h640q26 0 45 19t19 45z"/> </svg>`;
          }, 32013: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1472 930v318q0 119-84.5 203.5t-203.5 84.5h-832q-119 0-203.5-84.5t-84.5-203.5v-832q0-119 84.5-203.5t203.5-84.5h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-10 10-23 10-3 0-9-2-23-6-45-6h-832q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-254q0-13 9-22l64-64q10-10 23-10 6 0 12 3 20 8 20 29zm231-489l-814 814q-24 24-57 24t-57-24l-430-430q-24-24-24-57t24-57l110-110q24-24 57-24t57 24l263 263 647-647q24-24 57-24t57 24l110 110q24 24 24 57t-24 57z"/> </svg>`;
          }, 45512: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 10 10"> <path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/> </svg>`;
          }, 80347: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 24 24" > <circle cx="12" cy="12" r="2.2"/> <circle cx="12" cy="5" r="2.2"/> <circle cx="12" cy="19" r="2.2"/> </svg>`;
          }, 95134: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1664 960q-152-236-381-353 61 104 61 225 0 185-131.5 316.5t-316.5 131.5-316.5-131.5-131.5-316.5q0-121 61-225-229 117-381 353 133 205 333.5 326.5t434.5 121.5 434.5-121.5 333.5-326.5zm-720-384q0-20-14-34t-34-14q-125 0-214.5 89.5t-89.5 214.5q0 20 14 34t34 14 34-14 14-34q0-86 61-147t147-61q20 0 34-14t14-34zm848 384q0 34-20 69-140 230-376.5 368.5t-499.5 138.5-499.5-139-376.5-368q-20-35-20-69t20-69q140-229 376.5-368t499.5-139 499.5 139 376.5 368q20 35 20 69z"/> </svg>`;
          }, 70697: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 512v-472q22 14 36 28l408 408q14 14 28 36h-472zm-128 32q0 40 28 68t68 28h544v1056q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1600q0-40 28-68t68-28h800v544z"/> </svg>`;
          }, 49983: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z"/> </svg>`;
          }, 98964: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1152 1376v-160q0-14-9-23t-23-9h-96v-512q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v160q0 14 9 23t23 9h96v320h-96q-14 0-23 9t-9 23v160q0 14 9 23t23 9h448q14 0 23-9t9-23zm-128-896v-160q0-14-9-23t-23-9h-192q-14 0-23 9t-9 23v160q0 14 9 23t23 9h192q14 0 23-9t9-23zm640 416q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/> </svg>`;
          }, 8136: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg>`;
          }, 94806: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M640 768h512v-192q0-106-75-181t-181-75-181 75-75 181v192zm832 96v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-192q0-184 132-316t316-132 316 132 132 316v192h32q40 0 68 28t28 68z"/></svg>`;
          }, 31365: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 32 32"> <path d="M27 4l-15 15-7-7-5 5 12 12 20-20z"/> </svg>`;
          }, 44636: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M491 1536l91-91-235-235-91 91v107h128v128h107zm523-928q0-22-22-22-10 0-17 7l-542 542q-7 7-7 17 0 22 22 22 10 0 17-7l542-542q7-7 7-17zm-54-192l416 416-832 832h-416v-416zm683 96q0 53-37 90l-166 166-416-416 166-165q36-38 90-38 53 0 91 38l235 234q37 39 37 91z"/></svg>`;
          }, 36327: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"><path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"/></svg>`;
          }, 53328: function(t4) {
            t4.exports = '<svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg"> <path d="M5.9814 11.8049C5.59087 11.4144 5.59087 10.7812 5.9814 10.3907L10.224 6.14806C10.6146 5.75754 11.2477 5.75754 11.6383 6.14806C12.0288 6.53859 12.0288 7.17175 11.6383 7.56228L7.39561 11.8049C7.00509 12.1954 6.37192 12.1954 5.9814 11.8049Z"/> <path d="M0.707107 12.0208C0.316582 11.6303 0.316582 10.9971 0.707107 10.6066L10.6066 0.707121C10.9971 0.316597 11.6303 0.316596 12.0208 0.707121C12.4113 1.09764 12.4113 1.73081 12.0208 2.12133L2.12132 12.0208C1.7308 12.4114 1.09763 12.4114 0.707107 12.0208Z"/> </svg>';
          }, 98711: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1792 1344v128q0 26-19 45t-45 19h-1664q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1280q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1280q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1536q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1536q26 0 45 19t19 45zm0-384v128q0 26-19 45t-45 19h-1152q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1152q26 0 45 19t19 45z"/> </svg>`;
          }, 53808: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M512 1536h768v-384h-768v384zm896 0h128v-896q0-14-10-38.5t-20-34.5l-281-281q-10-10-34-20t-39-10v416q0 40-28 68t-68 28h-576q-40 0-68-28t-28-68v-416h-128v1280h128v-416q0-40 28-68t68-28h832q40 0 68 28t28 68v416zm-384-928v-320q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm640 32v928q0 40-28 68t-68 28h-1344q-40 0-68-28t-28-68v-1344q0-40 28-68t68-28h928q40 0 88 20t76 48l280 280q28 28 48 76t20 88z"/> </svg>`;
          }, 20784: function(t4) {
            t4.exports = '<svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"> <path stroke="null" d="m42.276011,26.302547c0.098397,-0.76605 0.172194,-1.54407 0.172194,-2.33406s-0.073797,-1.56801 -0.172194,-2.33406l5.202718,-3.961917c0.467384,-0.359086 0.602679,-1.005441 0.29519,-1.532101l-4.919828,-8.29489c-0.307489,-0.51469 -0.947067,-0.730142 -1.500548,-0.51469l-6.125186,2.405877c-1.266856,-0.945594 -2.656707,-1.747553 -4.157255,-2.357999l-0.922468,-6.343855c-0.110696,-0.562568 -0.614979,-1.005441 -1.229957,-1.005441l-9.839656,0c-0.614979,0 -1.119261,0.442873 -1.217657,1.005441l-0.922468,6.343855c-1.500548,0.610446 -2.890399,1.400436 -4.157255,2.357999l-6.125186,-2.405877c-0.553481,-0.203482 -1.193058,0 -1.500548,0.51469l-4.919828,8.29489c-0.307489,0.51469 -0.172194,1.161045 0.29519,1.532101l5.190419,3.961917c-0.098397,0.76605 -0.172194,1.54407 -0.172194,2.33406s0.073797,1.56801 0.172194,2.33406l-5.190419,3.961917c-0.467384,0.359086 -0.602679,1.005441 -0.29519,1.532101l4.919828,8.29489c0.307489,0.51469 0.947067,0.730142 1.500548,0.51469l6.125186,-2.405877c1.266856,0.945594 2.656707,1.747553 4.157255,2.357999l0.922468,6.343855c0.098397,0.562568 0.602679,1.005441 1.217657,1.005441l9.839656,0c0.614979,0 1.119261,-0.442873 1.217657,-1.005441l0.922468,-6.343855c1.500548,-0.610446 2.890399,-1.400436 4.157255,-2.357999l6.125186,2.405877c0.553481,0.203482 1.193058,0 1.500548,-0.51469l4.919828,-8.29489c0.307489,-0.51469 0.172194,-1.161045 -0.29519,-1.532101l-5.190419,-3.961917zm-18.277162,6.044617c-4.759934,0 -8.609699,-3.746465 -8.609699,-8.378677s3.849766,-8.378677 8.609699,-8.378677s8.609699,3.746465 8.609699,8.378677s-3.849766,8.378677 -8.609699,8.378677z"/> </svg>';
          }, 70999: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1728 576v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45v-256q0-106-75-181t-181-75-181 75-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h672v-192q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5z"/> </svg>`;
          }, 45244: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1639 1056q0 5-1 7-64 268-268 434.5t-478 166.5q-146 0-282.5-55t-243.5-157l-129 129q-19 19-45 19t-45-19-19-45v-448q0-26 19-45t45-19h448q26 0 45 19t19 45-19 45l-137 137q71 66 161 102t187 36q134 0 250-65t186-179q11-17 53-117 8-23 30-23h192q13 0 22.5 9.5t9.5 22.5zm25-800v448q0 26-19 45t-45 19h-448q-26 0-45-19t-19-45 19-45l138-138q-148-137-349-137-134 0-250 65t-186 179q-11 17-53 117-8 23-30 23h-199q-13 0-22.5-9.5t-9.5-22.5v-7q65-268 270-434.5t480-166.5q146 0 284 55.5t245 156.5l130-129q19-19 45-19t45 19 19 45z"/> </svg>`;
          }, 99876: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1344 1472q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm256 0q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm128-224v320q0 40-28 68t-68 28h-1472q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68zm-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19h-256q-26 0-45-19t-19-45v-448h-256q-42 0-59-40-17-39 14-69l448-448q18-19 45-19t45 19l448 448q31 30 14 69z"/> </svg>`;
          }, 14006: function(t4) {
            t4.exports = `<svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 1792 1792"> <path d="M1216 320q0 26-19 45t-45 19h-128v1024h128q26 0 45 19t19 45-19 45l-256 256q-19 19-45 19t-45-19l-256-256q-19-19-19-45t19-45 45-19h128v-1024h-128q-26 0-45-19t-19-45 19-45l256-256q19-19 45-19t45 19l256 256q19 19 19 45z"/> </svg>`;
          }, 28712: function(t4) {
            "use strict";
            t4.exports = { assert() {
            } };
          }, 31635: function(t4, e3, i3) {
            "use strict";
            function o3(t5, e4, i4, o4) {
              var n2, r = arguments.length, s = 3 > r ? e4 : null === o4 ? o4 = Object.getOwnPropertyDescriptor(e4, i4) : o4;
              if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t5, e4, i4, o4);
              else for (var a = t5.length - 1; a >= 0; a--) (n2 = t5[a]) && (s = (3 > r ? n2(s) : r > 3 ? n2(e4, i4, s) : n2(e4, i4)) || s);
              return r > 3 && s && Object.defineProperty(e4, i4, s), s;
            }
            i3.d(e3, { Cg: function() {
              return o3;
            } }), "function" == typeof SuppressedError && SuppressedError;
          } }, e2 = {};
          function i2(o3) {
            var n2 = e2[o3];
            if (void 0 !== n2) return n2.exports;
            var r = e2[o3] = { exports: {} };
            return t3[o3](r, r.exports, i2), r.exports;
          }
          i2.n = function(t4) {
            var e3 = t4 && t4.__esModule ? function() {
              return t4.default;
            } : function() {
              return t4;
            };
            return i2.d(e3, { a: e3 }), e3;
          }, i2.d = function(t4, e3) {
            for (var o3 in e3) i2.o(e3, o3) && !i2.o(t4, o3) && Object.defineProperty(t4, o3, { enumerable: true, get: e3[o3] });
          }, i2.o = function(t4, e3) {
            return Object.prototype.hasOwnProperty.call(t4, e3);
          }, i2.r = function(t4) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t4, "__esModule", { value: true });
          };
          var o2 = {};
          return function() {
            "use strict";
            i2.r(o2), i2.d(o2, { CommitMode: function() {
              return d;
            }, Jodit: function() {
              return a.x;
            } });
            var t4 = i2(9823), e3 = (i2(88222), i2(17352)), n2 = i2(22664), r = i2(37435), s = i2(79721), a = i2(46173), l = i2(74470);
            Object.keys(e3).forEach((t5) => {
              a.x[t5] = e3[t5];
            });
            const c = (t5) => "__esModule" !== t5;
            Object.keys(s).filter(c).forEach((t5) => {
              r.Icon.set(t5.replace("_", "-"), s[t5]);
            }), Object.keys(r).filter(c).forEach((e4) => {
              var i3;
              const o3 = r[e4], n3 = (0, t4.Tn)(null === (i3 = o3.prototype) || void 0 === i3 ? void 0 : i3.className) ? o3.prototype.className() : e4;
              (0, t4.Kg)(n3) && (a.x.modules[n3] = o3);
            }), Object.keys(n2).filter(c).forEach((t5) => {
              a.x.decorators[t5] = n2[t5];
            }), ["Confirm", "Alert", "Prompt"].forEach((t5) => {
              a.x[t5] = r[t5];
            }), Object.keys(l.A).filter(c).forEach((t5) => {
              a.x.lang[t5] = l.A[t5];
            });
            class d {
            }
          }(), o2;
        }();
      }, 428: (t2, e2, i2) => {
        "use strict";
        var o2 = i2(134);
        function n2() {
        }
        function r() {
        }
        r.resetWarningCache = n2, t2.exports = function() {
          function t3(t4, e4, i4, n3, r2, s) {
            if (s !== o2) {
              var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
              throw a.name = "Invariant Violation", a;
            }
          }
          function e3() {
            return t3;
          }
          t3.isRequired = t3;
          var i3 = { array: t3, bigint: t3, bool: t3, func: t3, number: t3, object: t3, string: t3, symbol: t3, any: t3, arrayOf: e3, element: t3, elementType: t3, instanceOf: e3, node: t3, objectOf: e3, oneOf: e3, oneOfType: e3, shape: e3, exact: e3, checkPropTypes: r, resetWarningCache: n2 };
          return i3.PropTypes = i3, i3;
        };
      }, 526: (t2, e2, i2) => {
        t2.exports = i2(428)();
      }, 134: (t2) => {
        "use strict";
        t2.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      }, 78: (t2, e2, i2) => {
        "use strict";
        i2.d(e2, { Z: () => m });
        var o2 = i2(499), n2 = i2.n(o2), r = i2(922), s = i2.n(r), a = i2(155), l = i2.n(a), c = new URL(i2(683), i2.b), d = new URL(i2(963), i2.b), u = new URL(i2(98), i2.b), h = s()(n2()), p = l()(c), f = l()(d), g = l()(u);
        h.push([t2.id, `/*!
 * jodit - Jodit is an awesome and useful wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/jodit/)
 * Version: v4.2.10
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
	/*!
 * jodit - Jodit is an awesome and useful wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/jodit/)
 * Version: v4.2.10
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
        const m = h;
      }, 379: (t2) => {
        "use strict";
        var e2 = [];
        function i2(t3) {
          for (var i3 = -1, o3 = 0; o3 < e2.length; o3++) if (e2[o3].identifier === t3) {
            i3 = o3;
            break;
          }
          return i3;
        }
        function o2(t3, o3) {
          for (var r = {}, s = [], a = 0; a < t3.length; a++) {
            var l = t3[a], c = o3.base ? l[0] + o3.base : l[0], d = r[c] || 0, u = "".concat(c, " ").concat(d);
            r[c] = d + 1;
            var h = i2(u), p = { css: l[1], media: l[2], sourceMap: l[3], supports: l[4], layer: l[5] };
            if (-1 !== h) e2[h].references++, e2[h].updater(p);
            else {
              var f = n2(p, o3);
              o3.byIndex = a, e2.splice(a, 0, { identifier: u, updater: f, references: 1 });
            }
            s.push(u);
          }
          return s;
        }
        function n2(t3, e3) {
          var i3 = e3.domAPI(e3);
          return i3.update(t3), function(e4) {
            if (e4) {
              if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap && e4.supports === t3.supports && e4.layer === t3.layer) return;
              i3.update(t3 = e4);
            } else i3.remove();
          };
        }
        t2.exports = function(t3, n3) {
          var r = o2(t3 = t3 || [], n3 = n3 || {});
          return function(t4) {
            t4 = t4 || [];
            for (var s = 0; s < r.length; s++) {
              var a = i2(r[s]);
              e2[a].references--;
            }
            for (var l = o2(t4, n3), c = 0; c < r.length; c++) {
              var d = i2(r[c]);
              0 === e2[d].references && (e2[d].updater(), e2.splice(d, 1));
            }
            r = l;
          };
        };
      }, 569: (t2) => {
        "use strict";
        var e2 = {};
        t2.exports = function(t3, i2) {
          var o2 = function(t4) {
            if (void 0 === e2[t4]) {
              var i3 = document.querySelector(t4);
              if (window.HTMLIFrameElement && i3 instanceof window.HTMLIFrameElement) try {
                i3 = i3.contentDocument.head;
              } catch (t5) {
                i3 = null;
              }
              e2[t4] = i3;
            }
            return e2[t4];
          }(t3);
          if (!o2) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          o2.appendChild(i2);
        };
      }, 216: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          var e2 = document.createElement("style");
          return t3.setAttributes(e2, t3.attributes), t3.insert(e2, t3.options), e2;
        };
      }, 565: (t2, e2, i2) => {
        "use strict";
        t2.exports = function(t3) {
          var e3 = i2.nc;
          e3 && t3.setAttribute("nonce", e3);
        };
      }, 795: (t2) => {
        "use strict";
        t2.exports = function(t3) {
          if ("undefined" == typeof document) return { update: function() {
          }, remove: function() {
          } };
          var e2 = t3.insertStyleElement(t3);
          return { update: function(i2) {
            !function(t4, e3, i3) {
              var o2 = "";
              i3.supports && (o2 += "@supports (".concat(i3.supports, ") {")), i3.media && (o2 += "@media ".concat(i3.media, " {"));
              var n2 = void 0 !== i3.layer;
              n2 && (o2 += "@layer".concat(i3.layer.length > 0 ? " ".concat(i3.layer) : "", " {")), o2 += i3.css, n2 && (o2 += "}"), i3.media && (o2 += "}"), i3.supports && (o2 += "}");
              var r = i3.sourceMap;
              r && "undefined" != typeof btoa && (o2 += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e3.styleTagTransform(o2, t4, e3.options);
            }(e2, t3, i2);
          }, remove: function() {
            !function(t4) {
              if (null === t4.parentNode) return false;
              t4.parentNode.removeChild(t4);
            }(e2);
          } };
        };
      }, 589: (t2) => {
        "use strict";
        t2.exports = function(t3, e2) {
          if (e2.styleSheet) e2.styleSheet.cssText = t3;
          else {
            for (; e2.firstChild; ) e2.removeChild(e2.firstChild);
            e2.appendChild(document.createTextNode(t3));
          }
        };
      }, 963: (t2) => {
        "use strict";
        t2.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAABRsSURBVHja7F1/aJfVGn/33RgUg8FiNfK2WCykyS7GLoYyUbwYipZMumgLo+iPS9HlXhSHkRXdislESxMz0mapuaFo2myjkfnNlTQ2FJdTu8NvLVcrdbpcfGvxrfs823m/vXt3fjznvOedzr0PPJzzPe+7d+97Ps95nuc851fGAw884CD98ccfI1Jqmc3UpEyQz4FkMqRTgYshn8fymZ57SyGbzf5mENIOz9+ngE9Atg/SLkhPQHoWeEDn3SmpSZlJnvf7ypUrTpb7IyMjY+gGN6WWmaY84l2T3c+u58D1csjOgvwsyBdBvsDRo2zgMl/ZNM59vcAJ4Dj8nzikLa5QmBLv28YCfPd3li7gPHBMwKdcEwhCJgN6FoLOWJtUgiWovALG04FXsbI44xbgw8AplbaU/Q+ZQNgGf0gA/JWhC1aQyle1eN91rPRKKKuEsjzZvSph0m2RiutpIYRrfZC8B+l7kB6jgq0CnQIy9X39v2NYQW5FeUFQlQVN/aALyiYBPw/5M5B+Dvw02vMggqcDukEl57F3xHf9H747+4bA5oD6dzqaYEgAqIDbBl9RhvZ4H/B5yL+IDp3oXhmwNkm3lTLn80VIz+O3QFqm2/rHwgeI6QDOa006LZ3Q4lHNNwK3AVeYAD4WgmHQUivYNzWyb7xufICYaavXVbuKZ6MXfwRVJ+TnXW+Am/oMnNaO3/Y5pPitcyh/a6LqtXwAt+J01LVFEzAJ0jpIj7JunJYd1wHchnBQHUSC3Uan8WPgPVgHlBiBCcAkH4Da2i2DjwGZlcy5W0K17zLwVb9NgaY4iJpawJs+BCnWwUo3SKXT4oOAP8IHCFsIfMCguj8JaQ2kOaaA227d10ALuIR1gHVxErjctPtHBd8btSR3A4MIgSePAZxqVPeQlthq7ZRuZVABCVkLuGkJpGgKsY4ybfUEVO84qhsoAzSgrUfHZ1UQVe99B6o2oMYdwg7latAq5iROGoueQExW6UE0gCe/ANIh9SZ6jqkWsN3STZ0rHWEgpkNmEvILxqQbSAXaAPxqSBswQkbpbpo6fGPR0m3GBYjBIIwqNjCTEAr4wkBQUA0AjKNrdZCu0okAqgQhTKCDhFxV91BNgsDuYx3WQZptG3xtDUCJEDKvthGuLVEJlq4gUMyAylfQERadPrhKOHTmB3Ces4RFEXNsgW8UClbZcEhxqPQIpHOord2k1ZsAH4YvYNJXN3EgWX4Ocw4LbIEvDQSJfADJtULWxSuj+BBUP4DaC6D0DkyFg6JKTVo/5brvXqzbo2zSi3af3/9bGgrW1Ar5kH4MXEzVHEHVf5CuYZC4fti9AoI/gXX8Eda5Tp9f9I4xWWsnOoc5zNMv1okjmKp/vzay3epNJ4+YmALdoWBPWTHksc5zTU1AekqYt7LcWTruTYTZQdmQHoB0GuXv/de8L8e7xrsuA8kPNtx3AZIOxp3APc7wvD6kvi+//DLh3nvPPfegWs1jf4dBGGxpOA+hlOXzgw7VBjEBnDKcs4jzDOZDOmjqD2SJQFGBx9JaSOcQ7xVO2RIJhf86AfB+Z3huHs7Ra2pra+ugtubTp0+jMLgC0e6/ftddd6EgzMO5iGwSaq4NITCdLczy6GzXAj8KnDIxAaM0AKeViwCtgbRSNgGUJwQyDaACngO4w6S/CXgb8KEvvvgiFUaw59y5c64mWXvnnXdmsijdYxjpdP6cXh6oS0g1Bb48zpFEzValA3663pcuXaoleSzFltBIlWhRmWx+v6yMcQJ4PU7A/Oyzz/qca0R33HEHrjlAEJa73rns24JqA0keTUGTjglIJpNOxsMPP6wLfiGkx53hxRbcewwXc1BAx0u4gGMNcP2nn36acq4juv322ytZ5K7UlhBo5LER3AvcTXU60wKgYbsyWTCi3LTV6wLvKesGrvrkk0/qneucCgoKHoJkHbxvYRAhMMij/zMbVzZRTMAvv/wycj4AoRv4Mk7oII4HkLp+vC6drwxt/FrgKeMBfKTe3t69UMFTgPG9B3WcQdMeBsvjhJJqnYGqjMrKSmr/tZxNWAi87o9i+1l5O6SPNjc3dzrjlPLz83HyC/aWpqk0gWZUUHZtJvxuUZmAtAYgtHycr/a6qIXz2DQI5OH1UDRjPIOPdOHChU6o+JmQXW+68JYS4vUB/bozvN5RGAImdwPZA3AC51RKrMAfyBHFGCRBnz4oe7ypqemgc4PQxYsX0YytuOWWW3BRaa3DWd0U1A/w/Z4KvBx4jcoExAitE6dzPStr3RR/QKQ5fOUJ4PsaGxtvGPC9dOnSJfyu+7ALa9MJFPx+lkU05YNBBDVdg0uwKc4eAWCZ83cC8jM+/PDDLucGpr6+Pvy+GWz/ASs9AMFvd7ax1ATEFOBjmLdSBraN3gBwHHhmQ0NDrzMB6PLly73MUYubOs3EiB/GJebyTEB6QogCnGrV6KAFR7AVeP4HH3ww4EwgunLlCn7vfACi1UQDqMb5PWUvm5qAB3HESXNomKz2GaOHv/DAgQNJZwJSf38/fvdC3J5G1iPQnf3jK5sGvx80MQHP69hxHWZ/2wN8//vvv3/BmcD0008/XWCaoEcUJ6C0eoUWeFbXBOBCzTKKJ2/YExgEXrRv374eJyLn6tWrWA+LAJRBy+o/rQUQUx0TsFwzRKzLK/bu3dseQf8nDQwMYH2sCOL0ibx9Vr6cagIKmf0nxe8pguC7vn/Pnj2bIshH088//4z1st+m+veUI6ZFFBOwLGj/XqIh0O4/HkEtJgDmcZ4/EED9e69VKk0ACoDN1u/jqrq6uv4IZjElk0msnypbwPs0wTKVCUBnYbLuMC5REA7v3r37vQhikhBgPTWrTAEFeB9NZt3C0SbAr/6DdPM4jF7/PyNotUzBU26vgAo8x+7zri3jmgAgnOJdKYrVB9QEb+zcubMrgpVOv/76K9bXGzrACwTJfw1D+9k8EzAXOE8GviEPAK+JIDXSAlhvA7yWTWztvMfiXM65PBNQrgLfUBi2v/vuu70RnPo0ODjYC0BtN3D2VNfLR5gAz04eRn17yb0p4A0RlIEI6y+la/MV1xf4fYACSEtDiP031dbWRrY/AP32229dAGCTrs1XrHHEaesFXh+gXCfooyEM2yIIrdC2ADZ/1D1eM+CagHLJ5ExTxrl9hyLsrDiDWI99EjApgPvLRwhAmQh4HV/Axwe3bt06GMEXnFKpFK4tOBgQcH95WdoEAE01nc8Xi8VEArA3gs4q7VWpfsHaCpEg4GrnoeXhOEKUw3u4yZYqbGo4Lk2KR5hZpcOsXjO9GIm0AYFycTErmoDJVLWu0Tto3bJly0CEmT36/fffkzh/UKfVE3yLkix3Xx+v5FjYaaslgiwUZxDrdbrm38guF6EAFFKAF5kEwcFPrRFcoVCrIdAiKsSlYUWqFi/zBwTXOiKsQqGOIKe1cQRmSAPkmYIv0ADY9Yuif+GYgC5Wv9kB1L6X8lAA8k3BFwhB94YNG1IRXPYJutwpINwBpNjSI/O5AhDQGUxEUIVKCRMBEGiFIQG4yX+Daf+fPacvwihUM2Czfm/KcgMLtjZZhudEY//hks2VVJlZ7tJvi5SMMApVA9gMsOVkXYvDFiO6fggFACUqJ6qKcaMBbD5uAH2AlE0fIKJxRSnUAGizcykePtWzjOo1VA2gpa0V2CVRALBbURDwQV4qiGAKVQDyLZ571JfFum0lFqTJvScvgilUytPxAxSY9boawMbD3OtFEUahaoAinQap0gA4JSzhPswSFz733HOZEVT2KZlMYr0WesGV7KpOoQRqgG6DVi4rx5EqjFWfjSCz3vqLHd9IoGyYnoBjNwpAwhBoWXlpJAChCECpv66p5ycJBCSBcwI7daZ7E83FtAiuUGgaT/WLACaYhk4MBCVk0UDKWb2c3+URVqFogOm8OqccqMW5d+Dmm29OuGsDOyw7gmUvvfRSFBCySFevXsX6LBO1cIoG8NEQ5u7KoFbLi0Kz3fODI7JGeHbwTSJADcxCq1cAWnR39yYIQUWEmVX1X2G6SYTgnhavABwL0uoF91dUV1dnR9AFp/7+fjysq0IGvIEGODYkAOwa7t/XYXl3kDzgBRF8Vgg3eczT2SqGYP97vBoA83ELrd6/WPSJCDsr6v8Jw91BRdfS6za9ewQ1qVo9RQv47plXU1NTHEFoTpcvX8aTwueJgKdoAI4wpE8Y9e4SdtgdGLK4S1gm8L8jGAO1fqy/TNmiUE1hQIwPj9AADOQk7ugRdJ9ADj+2bt26aI6AAV26dAnr7THqnsFEYTgEnBRtFl0fwk6hOcCrIjiNaBXOAKIcuq3hG4w4fTXma+lNOEHEZFs4hcA8+eqrr0a+gAZdvHgRbf+TsrMDDMxBr2v/eT7A0L5+8HN7AKdPFhncHMGqZftfB84Wga0yBwKtsN1hk4B5PsCIrd0C2HwRz924cWNlBK2afvzxx0rX89c5Qo4gCNv85bwDI7r8XUKqynfL/KmHazZt2pQbQSymH374AffuqeEB7gWXCrzHFCCmXf5niE4NWxPkJFAJ41GmtRHMUtWP9TNJdYScgQZYo3NoFEYF21WmgAq8776KzZs3Px1BPZq+//57rJcKXhg3oClo90b/qCeHvqLjA2j6B+u2bNlSFkH+J3333XdlAMo6ntq3cJroK6K4gOzgyP2oBaj2nqIdPGXYKzjw5ptvToqgd5yenh5U+Qcgmy07UdxQA7QD7xfFClSnh68Oelag6H5n+Fj6j9566638iQz++fPn8wGMRq/dV4EviwVwrq0W9QpUJsAdINof5LRQxfNLgBu2bt06IaePffvttzjDp8EZ3r6dDL7sQEkfyAdVW82rjo9H/hdkB2y2ft89eEB149tvvz2hlqh/8803OazlTzMFX6ENcKLvU7LgEMUEuIc9vqLb+inBJE8ezyo+un379gkxaPT111/jdx4FEGbJwOd1A2VdQ9896Pj1qIJDMSJI6yHpNGnpGlHFqVgp77zzzg29tjCRSBQx8KfKWrmJBvDkO4HXU3oI7pQwFUDpc/8s9ABk14uB23bs2HFDTiU7d+7cAqj4NrbESxtojeAQYjWoOnyaqwF4AsFSnDm81lT1y2YZ+cpwLmHDzp07a3bt2nVDTCrt6urKBq5hDl8eBXCTHgGjtWxTaVK8IEYFjKWrvVPIdU8VE2kMgUCsBD6ye/fukvEM/ldffVUCFX4EsitVtl3UYjU0wDHg1dQIodQJFJShKXgE0j5dLaACn6MJkKcDH6+rq6uur68fV72EM2fO5Jw9e7YasseBp5u0cKoQsDxO9Vrqqn6R2hdGAjWEoBvSR03B9wPNA95HGDVcBXxqz549D40H8E+fPo3vecoZntGTreqzmwgBRyDw2Plu3TBxxmuvvcYFUQYwy+OQ5UoV6DITQzEJnGsdbLSyfvHixdfVptSnTp2qZMJaqtsVVtWbAiP0zap498ryt956q5OxYcMGyj/gpbhbxS5IlwSJBQQYYsZVzWtREBYtWnTN9ic+efIkOq1LmM9SZDKplioQgrJ6ZpZTVODd32kBIEoZL0UvvdFdCBoUfGo8gXM0/UHgHTireeHChaFrhePHj+N0dzxqdxnwg2xwS0vD6YIvwAOnd89nvhkZeJduu+02J2Pjxo0UKZO9GM7w+cjdFMIgCmiqAXj39bO5DPFYLNY8b948ayeXtLW1lbIT1mcxzjVZUGtqCjh44Bj/34H7ZXjJhCItAAHAd1Mc0fvcPYAqCPhBhIHDF5jP0MF2QkmwE02HTMjs2bPTpqOlpSXPVeHABSwoVcLsOebzTWZH2fADOClO7ZqB3yfDTWUSUACyiHZG9UJY0SiNH7PKIjsiqt6BooegIhTMOYxHUTweN3q26EAN/wkr3t+qvEaKczbvxzoXPcf7brL/a9oNFKXYPZzpnUpGlX6dbqHIDIRNlIWXsuibbjdQkGLdzoQ0YfJ/uJFAamsndllw19HZzDlxVGFmkcqilFnSEFotnnKNOlZPGQX0lWOdzoa01xR47nCwDtBEpwbHoedj94wy0KSKCOoIQhgaQrXZgkoYdMCXPAvrcr57WITuXEHlcLCu00cQGjza7BEcRjbRAFSNQAXXVAh0zuY1BV/Q2r3pekixnz+oGRomvVtMV9Vr3I/98RXAC73LzoM4grIWb1sIxgp8iSnAOlsIKdZhynB8QG8wiKIBDPyCQ5C9F0cRKY6gDFwZ2DaFIEzwCS3e3b/nXlzKras1dFr/KA2go/5FLVRwfzdzDtfodgupZoFqGohbqIYGPsH+Yx3NxF6V7D2omkXlmMZM1T8PDMXfoUl4BruKkHaaaANbtj2MnoEJ+L6/72RdvGe8Kt9kjqBOj4SsAUyvce7BCSV/Ba6C/EBYXcSg5oIKtqkj5ikbgLSKqfwWaheRWqZ6j1gIAFPuQW2AI3lTIN0b1CSonMSwYgCU6wqQ8NunsOHcQcozVKZIVwhiKjVuMEihY0YwevgPSDG0eUy3ezjWYOsEhRRAHWPf/A93Egc1MKTj+FGEIGZhIEgJiMzPYPlmHNxgjmLTtRSCsOw+o2YWzcNvbTYIBVsVgrQGsAW+6cCSJx9nUcS/QbrfVAjCDgQZ/P1+yOM33Q9pPMizqCaAKgSxsMCntk6B2sdVyYsh/QvwC7hriY4QhCkUGi0e3/kF/AYow29pJ8YArJkAihDEwgRfVyNw8rif7X+B74Y8qs03nOGNDq0IgQ3Afff0sXecAfm72bv3UFoxpdWbtH7V32cFcfgoLcyCEKQdJ9zVHNL/AM9ijOP808MYD/CP7UvuO8ZGP+OMB3nP4T1PNfYvey/KXAPKd2XpevA27iWYANk9g8yZamblOa5A4FQtZ/jEsjybWsBTaX1sQkbcA/iACAQd0E2EQgU8RUiyKC02qGnQjS6qwPP9LQJwiLFLuUwQcBuaIiYQuBjTPc8wk/32VtYJFq104xQnmLlJMPuNNr3fUEuQQtDUVm8DeNcc/F+AAQBKd8HaIWdjwQAAAABJRU5ErkJggg==";
      }, 683: (t2) => {
        "use strict";
        t2.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJMYXllcl8xIiBkYXRhLW5hbWU9IkxheWVyIDEiIHZpZXdCb3g9IjAgMCA0Ljk1IDEwIj48ZGVmcz48c3R5bGU+LmNscy0ye2ZpbGw6IzQ0NH08L3N0eWxlPjwvZGVmcz48cGF0aCBkPSJNMCAwaDQuOTV2MTBIMHoiIHN0eWxlPSJmaWxsOiNmZmYiLz48cGF0aCBkPSJtMS40MSA0LjY3IDEuMDctMS40OSAxLjA2IDEuNDl6TTMuNTQgNS4zMyAyLjQ4IDYuODIgMS40MSA1LjMzeiIgY2xhc3M9ImNscy0yIi8+PC9zdmc+";
      }, 98: (t2) => {
        "use strict";
        t2.exports = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 id=%27Layer_1%27 data-name=%27Layer 1%27 viewBox=%270 0 4.95 10%27%3E%3Cdefs%3E%3Cstyle%3E.cls-2{fill:%23444}%3C/style%3E%3C/defs%3E%3Cpath d=%27M0 0h4.95v10H0z%27 style=%27fill:%23fff%27/%3E%3Cpath d=%27m1.41 4.67 1.07-1.49 1.06 1.49zM3.54 5.33 2.48 6.82 1.41 5.33z%27 class=%27cls-2%27/%3E%3C/svg%3E";
      }, 787: (e2) => {
        "use strict";
        e2.exports = t;
      } }, i = {};
      function o(t2) {
        var n2 = i[t2];
        if (void 0 !== n2) return n2.exports;
        var r = i[t2] = { id: t2, exports: {} };
        return e[t2](r, r.exports, o), r.exports;
      }
      o.m = e, o.n = (t2) => {
        var e2 = t2 && t2.__esModule ? () => t2.default : () => t2;
        return o.d(e2, { a: e2 }), e2;
      }, o.d = (t2, e2) => {
        for (var i2 in e2) o.o(e2, i2) && !o.o(t2, i2) && Object.defineProperty(t2, i2, { enumerable: true, get: e2[i2] });
      }, o.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), o.r = (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, o.b = document.baseURI || self.location.href, o.nc = void 0;
      var n = {};
      return (() => {
        "use strict";
        o.r(n), o.d(n, { Jodit: () => r.Jodit, default: () => y });
        var t2 = o(787), e2 = o.n(t2), i2 = o(526), r = o(714), s = o(379), a = o.n(s), l = o(795), c = o.n(l), d = o(569), u = o.n(d), h = o(565), p = o.n(h), f = o(216), g = o.n(f), m = o(589), b = o.n(m), _ = o(78), v = {};
        v.styleTagTransform = b(), v.setAttributes = p(), v.insert = u().bind(null, "head"), v.domAPI = c(), v.insertStyleElement = g(), a()(_.Z, v), _.Z && _.Z.locals && _.Z.locals;
        var x = r.Jodit.modules.Helpers.isFunction, w = (0, t2.forwardRef)(function(i3, o2) {
          var n2 = i3.className, s2 = i3.config, a2 = i3.id, l2 = i3.name, c2 = i3.onBlur, d2 = i3.onChange, u2 = i3.tabIndex, h2 = i3.value, p2 = i3.editorRef, f2 = (0, t2.useRef)(null);
          (0, t2.useLayoutEffect)(function() {
            o2 && (x(o2) ? o2(f2.current) : o2.current = f2.current);
          }, [f2, o2]), (0, t2.useEffect)(function() {
            var t3 = f2.current, e3 = r.Jodit.make(t3, s2);
            return f2.current = e3, x(p2) && p2(e3), function() {
              e3 && e3.destruct(), f2.current = t3;
            };
          }, [s2, p2]);
          var g2 = function(e3) {
            var i4 = (0, t2.useRef)();
            return (0, t2.useEffect)(function() {
              i4.current = e3;
            }, [e3]), i4.current;
          }(n2);
          return (0, t2.useEffect)(function() {
            var t3, e3 = null === (t3 = f2.current) || void 0 === t3 || null === (t3 = t3.container) || void 0 === t3 ? void 0 : t3.classList;
            g2 !== n2 && "string" == typeof g2 && g2.split(/\s+/).forEach(function(t4) {
              return null == e3 ? void 0 : e3.remove(t4);
            }), n2 && "string" == typeof n2 && n2.split(/\s+/).forEach(function(t4) {
              return null == e3 ? void 0 : e3.add(t4);
            });
          }, [n2, g2]), (0, t2.useEffect)(function() {
            f2.current.workplace && (f2.current.workplace.tabIndex = u2 || -1);
          }, [u2]), (0, t2.useEffect)(function() {
            if (f2.current.events && (c2 || d2)) {
              var t3 = function(t4) {
                return c2 && c2(f2.current.value, t4);
              }, e3 = function(t4) {
                return d2 && d2(t4);
              };
              return f2.current.events.on("blur", t3).on("change", e3), function() {
                var i4;
                null === (i4 = f2.current) || void 0 === i4 || null === (i4 = i4.events) || void 0 === i4 || i4.off("blur", t3).off("change", e3);
              };
            }
          }, [c2, d2]), (0, t2.useEffect)(function() {
            var t3 = function() {
              var t4;
              f2.current && (null == f2 || null === (t4 = f2.current) || void 0 === t4 ? void 0 : t4.value) !== h2 && (f2.current.value = h2);
            };
            f2.current && (f2.current.isReady ? t3() : f2.current.waitForReady().then(t3));
          }, [h2]), e2().createElement("div", { className: "jodit-react-container" }, e2().createElement("textarea", { defaultValue: h2, name: l2, id: a2, ref: f2 }));
        });
        w.displayName = "JoditEditor", w.propTypes = { className: i2.string, config: i2.object, id: i2.string, name: i2.string, onBlur: i2.func, onChange: i2.func, editorRef: i2.func, tabIndex: i2.number, value: i2.string };
        const y = w;
      })(), n;
    })());
  }
});
export default require_jodit_react();
/*! Bundled license information:

jodit-react/build/jodit-react.js:
  (*! For license information please see jodit-react.js.LICENSE.txt *)
*/
//# sourceMappingURL=jodit-react.js.map