!(function () {
  "use strict";
  var e,
    t,
    n,
    r,
    l = { exports: {} },
    a = {},
    i =
      (t ||
        ((t = 1),
        (l.exports = (function () {
          if (e) return a;
          e = 1;
          var t = Symbol.for("react.transitional.element"),
            n = Symbol.for("react.fragment");
          function r(e, n, r) {
            var l = null;
            if (
              (void 0 !== r && (l = "" + r),
              void 0 !== n.key && (l = "" + n.key),
              "key" in n)
            )
              for (var a in ((r = {}), n)) "key" !== a && (r[a] = n[a]);
            else r = n;
            return (
              (n = r.ref),
              {
                $$typeof: t,
                type: e,
                key: l,
                ref: void 0 !== n ? n : null,
                props: r,
              }
            );
          }
          return ((a.Fragment = n), (a.jsx = r), (a.jsxs = r), a);
        })())),
      l.exports),
    s = { exports: {} },
    o = {};
  function c() {
    return (
      r ||
        ((r = 1),
        (s.exports = (function () {
          if (n) return o;
          n = 1;
          var e = Symbol.for("react.transitional.element"),
            t = Symbol.for("react.portal"),
            r = Symbol.for("react.fragment"),
            l = Symbol.for("react.strict_mode"),
            a = Symbol.for("react.profiler"),
            i = Symbol.for("react.consumer"),
            s = Symbol.for("react.context"),
            c = Symbol.for("react.forward_ref"),
            u = Symbol.for("react.suspense"),
            d = Symbol.for("react.memo"),
            f = Symbol.for("react.lazy"),
            p = Symbol.for("react.activity"),
            h = Symbol.iterator,
            m = {
              isMounted: function () {
                return !1;
              },
              enqueueForceUpdate: function () {},
              enqueueReplaceState: function () {},
              enqueueSetState: function () {},
            },
            g = Object.assign,
            b = {};
          function v(e, t, n) {
            ((this.props = e),
              (this.context = t),
              (this.refs = b),
              (this.updater = n || m));
          }
          function y() {}
          function x(e, t, n) {
            ((this.props = e),
              (this.context = t),
              (this.refs = b),
              (this.updater = n || m));
          }
          ((v.prototype.isReactComponent = {}),
            (v.prototype.setState = function (e, t) {
              if ("object" != typeof e && "function" != typeof e && null != e)
                throw Error(
                  "takes an object of state variables to update or a function which returns an object of state variables.",
                );
              this.updater.enqueueSetState(this, e, t, "setState");
            }),
            (v.prototype.forceUpdate = function (e) {
              this.updater.enqueueForceUpdate(this, e, "forceUpdate");
            }),
            (y.prototype = v.prototype));
          var k = (x.prototype = new y());
          ((k.constructor = x),
            g(k, v.prototype),
            (k.isPureReactComponent = !0));
          var w = Array.isArray;
          function j() {}
          var S = { H: null, A: null, T: null, S: null },
            N = Object.prototype.hasOwnProperty;
          function _(t, n, r) {
            var l = r.ref;
            return {
              $$typeof: e,
              type: t,
              key: n,
              ref: void 0 !== l ? l : null,
              props: r,
            };
          }
          function C(t) {
            return "object" == typeof t && null !== t && t.$$typeof === e;
          }
          var E = /\/+/g;
          function M(e, t) {
            return "object" == typeof e && null !== e && null != e.key
              ? (function (e) {
                  var t = { "=": "=0", ":": "=2" };
                  return (
                    "$" +
                    e.replace(/[=:]/g, function (e) {
                      return t[e];
                    })
                  );
                })("" + e.key)
              : t.toString(36);
          }
          function z(n, r, l, a, i) {
            var s = typeof n;
            ("undefined" === s || "boolean" === s) && (n = null);
            var o = !1;
            if (null === n) o = !0;
            else
              switch (s) {
                case "bigint":
                case "string":
                case "number":
                  o = !0;
                  break;
                case "object":
                  switch (n.$$typeof) {
                    case e:
                    case t:
                      o = !0;
                      break;
                    case f:
                      return z((o = n._init)(n._payload), r, l, a, i);
                  }
              }
            if (o)
              return (
                (i = i(n)),
                (o = "" === a ? "." + M(n, 0) : a),
                w(i)
                  ? ((l = ""),
                    null != o && (l = o.replace(E, "$&/") + "/"),
                    z(i, r, l, "", function (e) {
                      return e;
                    }))
                  : null != i &&
                    (C(i) &&
                      (i = (function (e, t) {
                        return _(e.type, t, e.props);
                      })(
                        i,
                        l +
                          (null == i.key || (n && n.key === i.key)
                            ? ""
                            : ("" + i.key).replace(E, "$&/") + "/") +
                          o,
                      )),
                    r.push(i)),
                1
              );
            o = 0;
            var c = "" === a ? "." : a + ":";
            if (w(n))
              for (var u = 0; u < n.length; u++)
                o += z((a = n[u]), r, l, (s = c + M(a, u)), i);
            else if (
              ((u = (function (e) {
                return null === e || "object" != typeof e
                  ? null
                  : "function" == typeof (e = (h && e[h]) || e["@@iterator"])
                    ? e
                    : null;
              })(n)),
              "function" == typeof u)
            )
              for (n = u.call(n), u = 0; !(a = n.next()).done; )
                o += z((a = a.value), r, l, (s = c + M(a, u++)), i);
            else if ("object" === s) {
              if ("function" == typeof n.then)
                return z(
                  (function (e) {
                    switch (e.status) {
                      case "fulfilled":
                        return e.value;
                      case "rejected":
                        throw e.reason;
                      default:
                        switch (
                          ("string" == typeof e.status
                            ? e.then(j, j)
                            : ((e.status = "pending"),
                              e.then(
                                function (t) {
                                  "pending" === e.status &&
                                    ((e.status = "fulfilled"), (e.value = t));
                                },
                                function (t) {
                                  "pending" === e.status &&
                                    ((e.status = "rejected"), (e.reason = t));
                                },
                              )),
                          e.status)
                        ) {
                          case "fulfilled":
                            return e.value;
                          case "rejected":
                            throw e.reason;
                        }
                    }
                    throw e;
                  })(n),
                  r,
                  l,
                  a,
                  i,
                );
              throw (
                (r = String(n)),
                Error(
                  "Objects are not valid as a React child (found: " +
                    ("[object Object]" === r
                      ? "object with keys {" + Object.keys(n).join(", ") + "}"
                      : r) +
                    "). If you meant to render a collection of children, use an array instead.",
                )
              );
            }
            return o;
          }
          function P(e, t, n) {
            if (null == e) return e;
            var r = [],
              l = 0;
            return (
              z(e, r, "", "", function (e) {
                return t.call(n, e, l++);
              }),
              r
            );
          }
          function A(e) {
            if (-1 === e._status) {
              var t = e._result;
              ((t = t()).then(
                function (t) {
                  (0 === e._status || -1 === e._status) &&
                    ((e._status = 1), (e._result = t));
                },
                function (t) {
                  (0 === e._status || -1 === e._status) &&
                    ((e._status = 2), (e._result = t));
                },
              ),
                -1 === e._status && ((e._status = 0), (e._result = t)));
            }
            if (1 === e._status) return e._result.default;
            throw e._result;
          }
          var T =
              "function" == typeof reportError
                ? reportError
                : function (e) {
                    if (
                      "object" == typeof window &&
                      "function" == typeof window.ErrorEvent
                    ) {
                      var t = new window.ErrorEvent("error", {
                        bubbles: !0,
                        cancelable: !0,
                        message:
                          "object" == typeof e &&
                          null !== e &&
                          "string" == typeof e.message
                            ? String(e.message)
                            : String(e),
                        error: e,
                      });
                      if (!window.dispatchEvent(t)) return;
                    } else if (
                      "object" == typeof process &&
                      "function" == typeof process.emit
                    )
                      return void process.emit("uncaughtException", e);
                    console.error(e);
                  },
            L = {
              map: P,
              forEach: function (e, t, n) {
                P(
                  e,
                  function () {
                    t.apply(this, arguments);
                  },
                  n,
                );
              },
              count: function (e) {
                var t = 0;
                return (
                  P(e, function () {
                    t++;
                  }),
                  t
                );
              },
              toArray: function (e) {
                return (
                  P(e, function (e) {
                    return e;
                  }) || []
                );
              },
              only: function (e) {
                if (!C(e))
                  throw Error(
                    "React.Children.only expected to receive a single React element child.",
                  );
                return e;
              },
            };
          return (
            (o.Activity = p),
            (o.Children = L),
            (o.Component = v),
            (o.Fragment = r),
            (o.Profiler = a),
            (o.PureComponent = x),
            (o.StrictMode = l),
            (o.Suspense = u),
            (o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
              S),
            (o.__COMPILER_RUNTIME = {
              __proto__: null,
              c: function (e) {
                return S.H.useMemoCache(e);
              },
            }),
            (o.cache = function (e) {
              return function () {
                return e.apply(null, arguments);
              };
            }),
            (o.cacheSignal = function () {
              return null;
            }),
            (o.cloneElement = function (e, t, n) {
              if (null == e)
                throw Error(
                  "The argument must be a React element, but you passed " +
                    e +
                    ".",
                );
              var r = g({}, e.props),
                l = e.key;
              if (null != t)
                for (a in (void 0 !== t.key && (l = "" + t.key), t))
                  !N.call(t, a) ||
                    "key" === a ||
                    "__self" === a ||
                    "__source" === a ||
                    ("ref" === a && void 0 === t.ref) ||
                    (r[a] = t[a]);
              var a = arguments.length - 2;
              if (1 === a) r.children = n;
              else if (1 < a) {
                for (var i = Array(a), s = 0; s < a; s++)
                  i[s] = arguments[s + 2];
                r.children = i;
              }
              return _(e.type, l, r);
            }),
            (o.createContext = function (e) {
              return (
                ((e = {
                  $$typeof: s,
                  _currentValue: e,
                  _currentValue2: e,
                  _threadCount: 0,
                  Provider: null,
                  Consumer: null,
                }).Provider = e),
                (e.Consumer = { $$typeof: i, _context: e }),
                e
              );
            }),
            (o.createElement = function (e, t, n) {
              var r,
                l = {},
                a = null;
              if (null != t)
                for (r in (void 0 !== t.key && (a = "" + t.key), t))
                  N.call(t, r) &&
                    "key" !== r &&
                    "__self" !== r &&
                    "__source" !== r &&
                    (l[r] = t[r]);
              var i = arguments.length - 2;
              if (1 === i) l.children = n;
              else if (1 < i) {
                for (var s = Array(i), o = 0; o < i; o++)
                  s[o] = arguments[o + 2];
                l.children = s;
              }
              if (e && e.defaultProps)
                for (r in (i = e.defaultProps))
                  void 0 === l[r] && (l[r] = i[r]);
              return _(e, a, l);
            }),
            (o.createRef = function () {
              return { current: null };
            }),
            (o.forwardRef = function (e) {
              return { $$typeof: c, render: e };
            }),
            (o.isValidElement = C),
            (o.lazy = function (e) {
              return {
                $$typeof: f,
                _payload: { _status: -1, _result: e },
                _init: A,
              };
            }),
            (o.memo = function (e, t) {
              return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
            }),
            (o.startTransition = function (e) {
              var t = S.T,
                n = {};
              S.T = n;
              try {
                var r = e(),
                  l = S.S;
                (null !== l && l(n, r),
                  "object" == typeof r &&
                    null !== r &&
                    "function" == typeof r.then &&
                    r.then(j, T));
              } catch (e) {
                T(e);
              } finally {
                (null !== t && null !== n.types && (t.types = n.types),
                  (S.T = t));
              }
            }),
            (o.unstable_useCacheRefresh = function () {
              return S.H.useCacheRefresh();
            }),
            (o.use = function (e) {
              return S.H.use(e);
            }),
            (o.useActionState = function (e, t, n) {
              return S.H.useActionState(e, t, n);
            }),
            (o.useCallback = function (e, t) {
              return S.H.useCallback(e, t);
            }),
            (o.useContext = function (e) {
              return S.H.useContext(e);
            }),
            (o.useDebugValue = function () {}),
            (o.useDeferredValue = function (e, t) {
              return S.H.useDeferredValue(e, t);
            }),
            (o.useEffect = function (e, t) {
              return S.H.useEffect(e, t);
            }),
            (o.useEffectEvent = function (e) {
              return S.H.useEffectEvent(e);
            }),
            (o.useId = function () {
              return S.H.useId();
            }),
            (o.useImperativeHandle = function (e, t, n) {
              return S.H.useImperativeHandle(e, t, n);
            }),
            (o.useInsertionEffect = function (e, t) {
              return S.H.useInsertionEffect(e, t);
            }),
            (o.useLayoutEffect = function (e, t) {
              return S.H.useLayoutEffect(e, t);
            }),
            (o.useMemo = function (e, t) {
              return S.H.useMemo(e, t);
            }),
            (o.useOptimistic = function (e, t) {
              return S.H.useOptimistic(e, t);
            }),
            (o.useReducer = function (e, t, n) {
              return S.H.useReducer(e, t, n);
            }),
            (o.useRef = function (e) {
              return S.H.useRef(e);
            }),
            (o.useState = function (e) {
              return S.H.useState(e);
            }),
            (o.useSyncExternalStore = function (e, t, n) {
              return S.H.useSyncExternalStore(e, t, n);
            }),
            (o.useTransition = function () {
              return S.H.useTransition();
            }),
            (o.version = "19.2.7"),
            o
          );
        })())),
      s.exports
    );
  }
  var u,
    d,
    f = c(),
    p = { exports: {} },
    h = {},
    m = { exports: {} },
    g = {};
  function b() {
    return (
      d ||
        ((d = 1),
        (m.exports =
          (u ||
            ((u = 1),
            (function (e) {
              function t(e, t) {
                var n = e.length;
                e.push(t);
                e: for (; 0 < n; ) {
                  var r = (n - 1) >>> 1,
                    a = e[r];
                  if (!(0 < l(a, t))) break e;
                  ((e[r] = t), (e[n] = a), (n = r));
                }
              }
              function n(e) {
                return 0 === e.length ? null : e[0];
              }
              function r(e) {
                if (0 === e.length) return null;
                var t = e[0],
                  n = e.pop();
                if (n !== t) {
                  e[0] = n;
                  e: for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
                    var s = 2 * (r + 1) - 1,
                      o = e[s],
                      c = s + 1,
                      u = e[c];
                    if (0 > l(o, n))
                      c < a && 0 > l(u, o)
                        ? ((e[r] = u), (e[c] = n), (r = c))
                        : ((e[r] = o), (e[s] = n), (r = s));
                    else {
                      if (!(c < a && 0 > l(u, n))) break e;
                      ((e[r] = u), (e[c] = n), (r = c));
                    }
                  }
                }
                return t;
              }
              function l(e, t) {
                var n = e.sortIndex - t.sortIndex;
                return 0 !== n ? n : e.id - t.id;
              }
              if (
                ((e.unstable_now = void 0),
                "object" == typeof performance &&
                  "function" == typeof performance.now)
              ) {
                var a = performance;
                e.unstable_now = function () {
                  return a.now();
                };
              } else {
                var i = Date,
                  s = i.now();
                e.unstable_now = function () {
                  return i.now() - s;
                };
              }
              var o = [],
                c = [],
                u = 1,
                d = null,
                f = 3,
                p = !1,
                h = !1,
                m = !1,
                g = !1,
                b = "function" == typeof setTimeout ? setTimeout : null,
                v = "function" == typeof clearTimeout ? clearTimeout : null,
                y = typeof setImmediate < "u" ? setImmediate : null;
              function x(e) {
                for (var l = n(c); null !== l; ) {
                  if (null === l.callback) r(c);
                  else {
                    if (!(l.startTime <= e)) break;
                    (r(c), (l.sortIndex = l.expirationTime), t(o, l));
                  }
                  l = n(c);
                }
              }
              function k(e) {
                if (((m = !1), x(e), !h))
                  if (null !== n(o)) ((h = !0), j || ((j = !0), w()));
                  else {
                    var t = n(c);
                    null !== t && P(k, t.startTime - e);
                  }
              }
              var w,
                j = !1,
                S = -1,
                N = 5,
                _ = -1;
              function C() {
                return !(!g && e.unstable_now() - _ < N);
              }
              function E() {
                if (((g = !1), j)) {
                  var t = e.unstable_now();
                  _ = t;
                  var l = !0;
                  try {
                    e: {
                      ((h = !1), m && ((m = !1), v(S), (S = -1)), (p = !0));
                      var a = f;
                      try {
                        t: {
                          for (
                            x(t), d = n(o);
                            null !== d && !(d.expirationTime > t && C());

                          ) {
                            var i = d.callback;
                            if ("function" == typeof i) {
                              ((d.callback = null), (f = d.priorityLevel));
                              var s = i(d.expirationTime <= t);
                              if (
                                ((t = e.unstable_now()), "function" == typeof s)
                              ) {
                                ((d.callback = s), x(t), (l = !0));
                                break t;
                              }
                              (d === n(o) && r(o), x(t));
                            } else r(o);
                            d = n(o);
                          }
                          if (null !== d) l = !0;
                          else {
                            var u = n(c);
                            (null !== u && P(k, u.startTime - t), (l = !1));
                          }
                        }
                        break e;
                      } finally {
                        ((d = null), (f = a), (p = !1));
                      }
                      l = void 0;
                    }
                  } finally {
                    l ? w() : (j = !1);
                  }
                }
              }
              if ("function" == typeof y)
                w = function () {
                  y(E);
                };
              else if (typeof MessageChannel < "u") {
                var M = new MessageChannel(),
                  z = M.port2;
                ((M.port1.onmessage = E),
                  (w = function () {
                    z.postMessage(null);
                  }));
              } else
                w = function () {
                  b(E, 0);
                };
              function P(t, n) {
                S = b(function () {
                  t(e.unstable_now());
                }, n);
              }
              ((e.unstable_IdlePriority = 5),
                (e.unstable_ImmediatePriority = 1),
                (e.unstable_LowPriority = 4),
                (e.unstable_NormalPriority = 3),
                (e.unstable_Profiling = null),
                (e.unstable_UserBlockingPriority = 2),
                (e.unstable_cancelCallback = function (e) {
                  e.callback = null;
                }),
                (e.unstable_forceFrameRate = function (e) {
                  0 > e || 125 < e
                    ? console.error(
                        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                      )
                    : (N = 0 < e ? Math.floor(1e3 / e) : 5);
                }),
                (e.unstable_getCurrentPriorityLevel = function () {
                  return f;
                }),
                (e.unstable_next = function (e) {
                  switch (f) {
                    case 1:
                    case 2:
                    case 3:
                      var t = 3;
                      break;
                    default:
                      t = f;
                  }
                  var n = f;
                  f = t;
                  try {
                    return e();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_requestPaint = function () {
                  g = !0;
                }),
                (e.unstable_runWithPriority = function (e, t) {
                  switch (e) {
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                      break;
                    default:
                      e = 3;
                  }
                  var n = f;
                  f = e;
                  try {
                    return t();
                  } finally {
                    f = n;
                  }
                }),
                (e.unstable_scheduleCallback = function (r, l, a) {
                  var i = e.unstable_now();
                  switch (
                    ((a =
                      "object" == typeof a &&
                      null !== a &&
                      "number" == typeof (a = a.delay) &&
                      0 < a
                        ? i + a
                        : i),
                    r)
                  ) {
                    case 1:
                      var s = -1;
                      break;
                    case 2:
                      s = 250;
                      break;
                    case 5:
                      s = 1073741823;
                      break;
                    case 4:
                      s = 1e4;
                      break;
                    default:
                      s = 5e3;
                  }
                  return (
                    (r = {
                      id: u++,
                      callback: l,
                      priorityLevel: r,
                      startTime: a,
                      expirationTime: (s = a + s),
                      sortIndex: -1,
                    }),
                    a > i
                      ? ((r.sortIndex = a),
                        t(c, r),
                        null === n(o) &&
                          r === n(c) &&
                          (m ? (v(S), (S = -1)) : (m = !0), P(k, a - i)))
                      : ((r.sortIndex = s),
                        t(o, r),
                        h || p || ((h = !0), j || ((j = !0), w()))),
                    r
                  );
                }),
                (e.unstable_shouldYield = C),
                (e.unstable_wrapCallback = function (e) {
                  var t = f;
                  return function () {
                    var n = f;
                    f = t;
                    try {
                      return e.apply(this, arguments);
                    } finally {
                      f = n;
                    }
                  };
                }));
            })(g)),
          g))),
      m.exports
    );
  }
  var v,
    y,
    x,
    k,
    w = { exports: {} },
    j = {};
  function S() {
    if (v) return j;
    v = 1;
    var e = c();
    function t(e) {
      var t = "https://react.dev/errors/" + e;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var n = 2; n < arguments.length; n++)
          t += "&args[]=" + encodeURIComponent(arguments[n]);
      }
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    function n() {}
    var r = {
        d: {
          f: n,
          r: function () {
            throw Error(t(522));
          },
          D: n,
          C: n,
          L: n,
          m: n,
          X: n,
          S: n,
          M: n,
        },
        p: 0,
        findDOMNode: null,
      },
      l = Symbol.for("react.portal"),
      a = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function i(e, t) {
      return "font" === e
        ? ""
        : "string" == typeof t
          ? "use-credentials" === t
            ? t
            : ""
          : void 0;
    }
    return (
      (j.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
      (j.createPortal = function (e, n) {
        var r =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!n || (1 !== n.nodeType && 9 !== n.nodeType && 11 !== n.nodeType))
          throw Error(t(299));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: l,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, n, null, r);
      }),
      (j.flushSync = function (e) {
        var t = a.T,
          n = r.p;
        try {
          if (((a.T = null), (r.p = 2), e)) return e();
        } finally {
          ((a.T = t), (r.p = n), r.d.f());
        }
      }),
      (j.preconnect = function (e, t) {
        "string" == typeof e &&
          ((t = t
            ? "string" == typeof (t = t.crossOrigin)
              ? "use-credentials" === t
                ? t
                : ""
              : void 0
            : null),
          r.d.C(e, t));
      }),
      (j.prefetchDNS = function (e) {
        "string" == typeof e && r.d.D(e);
      }),
      (j.preinit = function (e, t) {
        if ("string" == typeof e && t && "string" == typeof t.as) {
          var n = t.as,
            l = i(n, t.crossOrigin),
            a = "string" == typeof t.integrity ? t.integrity : void 0,
            s = "string" == typeof t.fetchPriority ? t.fetchPriority : void 0;
          "style" === n
            ? r.d.S(
                e,
                "string" == typeof t.precedence ? t.precedence : void 0,
                { crossOrigin: l, integrity: a, fetchPriority: s },
              )
            : "script" === n &&
              r.d.X(e, {
                crossOrigin: l,
                integrity: a,
                fetchPriority: s,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
        }
      }),
      (j.preinitModule = function (e, t) {
        if ("string" == typeof e)
          if ("object" == typeof t && null !== t) {
            if (null == t.as || "script" === t.as) {
              var n = i(t.as, t.crossOrigin);
              r.d.M(e, {
                crossOrigin: n,
                integrity:
                  "string" == typeof t.integrity ? t.integrity : void 0,
                nonce: "string" == typeof t.nonce ? t.nonce : void 0,
              });
            }
          } else null == t && r.d.M(e);
      }),
      (j.preload = function (e, t) {
        if (
          "string" == typeof e &&
          "object" == typeof t &&
          null !== t &&
          "string" == typeof t.as
        ) {
          var n = t.as,
            l = i(n, t.crossOrigin);
          r.d.L(e, n, {
            crossOrigin: l,
            integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            nonce: "string" == typeof t.nonce ? t.nonce : void 0,
            type: "string" == typeof t.type ? t.type : void 0,
            fetchPriority:
              "string" == typeof t.fetchPriority ? t.fetchPriority : void 0,
            referrerPolicy:
              "string" == typeof t.referrerPolicy ? t.referrerPolicy : void 0,
            imageSrcSet:
              "string" == typeof t.imageSrcSet ? t.imageSrcSet : void 0,
            imageSizes: "string" == typeof t.imageSizes ? t.imageSizes : void 0,
            media: "string" == typeof t.media ? t.media : void 0,
          });
        }
      }),
      (j.preloadModule = function (e, t) {
        if ("string" == typeof e)
          if (t) {
            var n = i(t.as, t.crossOrigin);
            r.d.m(e, {
              as: "string" == typeof t.as && "script" !== t.as ? t.as : void 0,
              crossOrigin: n,
              integrity: "string" == typeof t.integrity ? t.integrity : void 0,
            });
          } else r.d.m(e);
      }),
      (j.requestFormReset = function (e) {
        r.d.r(e);
      }),
      (j.unstable_batchedUpdates = function (e, t) {
        return e(t);
      }),
      (j.useFormState = function (e, t, n) {
        return a.H.useFormState(e, t, n);
      }),
      (j.useFormStatus = function () {
        return a.H.useHostTransitionStatus();
      }),
      (j.version = "19.2.7"),
      j
    );
  }
  var N =
    (k ||
      ((k = 1),
      (function e() {
        if (
          !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
            "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
          )
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (e) {
            console.error(e);
          }
      })(),
      (p.exports = (function () {
        if (x) return h;
        x = 1;
        var e = b(),
          t = c(),
          n =
            (y ||
              ((y = 1),
              (function e() {
                if (
                  !(
                    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
                    "function" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
                  )
                )
                  try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
                  } catch (e) {
                    console.error(e);
                  }
              })(),
              (w.exports = S())),
            w.exports);
        function r(e) {
          var t = "https://react.dev/errors/" + e;
          if (1 < arguments.length) {
            t += "?args[]=" + encodeURIComponent(arguments[1]);
            for (var n = 2; n < arguments.length; n++)
              t += "&args[]=" + encodeURIComponent(arguments[n]);
          }
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        function l(e) {
          return !(
            !e ||
            (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
          );
        }
        function a(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do {
              (!!(4098 & (t = e).flags) && (n = t.return), (e = t.return));
            } while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function i(e) {
          if (13 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function s(e) {
          if (31 === e.tag) {
            var t = e.memoizedState;
            if (
              (null === t &&
                null !== (e = e.alternate) &&
                (t = e.memoizedState),
              null !== t)
            )
              return t.dehydrated;
          }
          return null;
        }
        function o(e) {
          if (a(e) !== e) throw Error(r(188));
        }
        function u(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e;
          for (e = e.child; null !== e; ) {
            if (null !== (t = u(e))) return t;
            e = e.sibling;
          }
          return null;
        }
        var d = Object.assign,
          f = Symbol.for("react.element"),
          p = Symbol.for("react.transitional.element"),
          m = Symbol.for("react.portal"),
          g = Symbol.for("react.fragment"),
          v = Symbol.for("react.strict_mode"),
          k = Symbol.for("react.profiler"),
          j = Symbol.for("react.consumer"),
          N = Symbol.for("react.context"),
          _ = Symbol.for("react.forward_ref"),
          C = Symbol.for("react.suspense"),
          E = Symbol.for("react.suspense_list"),
          M = Symbol.for("react.memo"),
          z = Symbol.for("react.lazy"),
          P = Symbol.for("react.activity"),
          A = Symbol.for("react.memo_cache_sentinel"),
          T = Symbol.iterator;
        function L(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (T && e[T]) || e["@@iterator"])
              ? e
              : null;
        }
        var R = Symbol.for("react.client.reference");
        function O(e) {
          if (null == e) return null;
          if ("function" == typeof e)
            return e.$$typeof === R ? null : e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case g:
              return "Fragment";
            case k:
              return "Profiler";
            case v:
              return "StrictMode";
            case C:
              return "Suspense";
            case E:
              return "SuspenseList";
            case P:
              return "Activity";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case m:
                return "Portal";
              case N:
                return e.displayName || "Context";
              case j:
                return (e._context.displayName || "Context") + ".Consumer";
              case _:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case M:
                return null !== (t = e.displayName || null)
                  ? t
                  : O(e.type) || "Memo";
              case z:
                ((t = e._payload), (e = e._init));
                try {
                  return O(e(t));
                } catch {}
            }
          return null;
        }
        var D = Array.isArray,
          I = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          F = n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
          U = { pending: !1, data: null, method: null, action: null },
          $ = [],
          H = -1;
        function B(e) {
          return { current: e };
        }
        function V(e) {
          0 > H || ((e.current = $[H]), ($[H] = null), H--);
        }
        function W(e, t) {
          (H++, ($[H] = e.current), (e.current = t));
        }
        var q,
          Q,
          K = B(null),
          G = B(null),
          Y = B(null),
          X = B(null);
        function Z(e, t) {
          switch ((W(Y, t), W(G, e), W(K, null), t.nodeType)) {
            case 9:
            case 11:
              e = (e = t.documentElement) && (e = e.namespaceURI) ? kd(e) : 0;
              break;
            default:
              if (((e = t.tagName), (t = t.namespaceURI)))
                e = wd((t = kd(t)), e);
              else
                switch (e) {
                  case "svg":
                    e = 1;
                    break;
                  case "math":
                    e = 2;
                    break;
                  default:
                    e = 0;
                }
          }
          (V(K), W(K, e));
        }
        function J() {
          (V(K), V(G), V(Y));
        }
        function ee(e) {
          null !== e.memoizedState && W(X, e);
          var t = K.current,
            n = wd(t, e.type);
          t !== n && (W(G, e), W(K, n));
        }
        function te(e) {
          (G.current === e && (V(K), V(G)),
            X.current === e && (V(X), (mf._currentValue = U)));
        }
        function ne(e) {
          if (void 0 === q)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              ((q = (t && t[1]) || ""),
                (Q =
                  -1 < e.stack.indexOf("\n    at")
                    ? " (<anonymous>)"
                    : -1 < e.stack.indexOf("@")
                      ? "@unknown:0:0"
                      : ""));
            }
          return "\n" + q + e + Q;
        }
        var re = !1;
        function le(e, t) {
          if (!e || re) return "";
          re = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            var r = {
              DetermineComponentFrameRoot: function () {
                try {
                  if (t) {
                    var n = function () {
                      throw Error();
                    };
                    if (
                      (Object.defineProperty(n.prototype, "props", {
                        set: function () {
                          throw Error();
                        },
                      }),
                      "object" == typeof Reflect && Reflect.construct)
                    ) {
                      try {
                        Reflect.construct(n, []);
                      } catch (e) {
                        var r = e;
                      }
                      Reflect.construct(e, [], n);
                    } else {
                      try {
                        n.call();
                      } catch (e) {
                        r = e;
                      }
                      e.call(n.prototype);
                    }
                  } else {
                    try {
                      throw Error();
                    } catch (e) {
                      r = e;
                    }
                    (n = e()) &&
                      "function" == typeof n.catch &&
                      n.catch(function () {});
                  }
                } catch (e) {
                  if (e && r && "string" == typeof e.stack)
                    return [e.stack, r.stack];
                }
                return [null, null];
              },
            };
            r.DetermineComponentFrameRoot.displayName =
              "DetermineComponentFrameRoot";
            var l = Object.getOwnPropertyDescriptor(
              r.DetermineComponentFrameRoot,
              "name",
            );
            l &&
              l.configurable &&
              Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot",
              });
            var a = r.DetermineComponentFrameRoot(),
              i = a[0],
              s = a[1];
            if (i && s) {
              var o = i.split("\n"),
                c = s.split("\n");
              for (
                l = r = 0;
                r < o.length && !o[r].includes("DetermineComponentFrameRoot");

              )
                r++;
              for (
                ;
                l < c.length && !c[l].includes("DetermineComponentFrameRoot");

              )
                l++;
              if (r === o.length || l === c.length)
                for (
                  r = o.length - 1, l = c.length - 1;
                  1 <= r && 0 <= l && o[r] !== c[l];

                )
                  l--;
              for (; 1 <= r && 0 <= l; r--, l--)
                if (o[r] !== c[l]) {
                  if (1 !== r || 1 !== l)
                    do {
                      if ((r--, 0 > --l || o[r] !== c[l])) {
                        var u = "\n" + o[r].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    } while (1 <= r && 0 <= l);
                  break;
                }
            }
          } finally {
            ((re = !1), (Error.prepareStackTrace = n));
          }
          return (n = e ? e.displayName || e.name : "") ? ne(n) : "";
        }
        function ae(e, t) {
          switch (e.tag) {
            case 26:
            case 27:
            case 5:
              return ne(e.type);
            case 16:
              return ne("Lazy");
            case 13:
              return e.child !== t && null !== t
                ? ne("Suspense Fallback")
                : ne("Suspense");
            case 19:
              return ne("SuspenseList");
            case 0:
            case 15:
              return le(e.type, !1);
            case 11:
              return le(e.type.render, !1);
            case 1:
              return le(e.type, !0);
            case 31:
              return ne("Activity");
            default:
              return "";
          }
        }
        function ie(e) {
          try {
            var t = "",
              n = null;
            do {
              ((t += ae(e, n)), (n = e), (e = e.return));
            } while (e);
            return t;
          } catch (e) {
            return "\nError generating stack: " + e.message + "\n" + e.stack;
          }
        }
        var se = Object.prototype.hasOwnProperty,
          oe = e.unstable_scheduleCallback,
          ce = e.unstable_cancelCallback,
          ue = e.unstable_shouldYield,
          de = e.unstable_requestPaint,
          fe = e.unstable_now,
          pe = e.unstable_getCurrentPriorityLevel,
          he = e.unstable_ImmediatePriority,
          me = e.unstable_UserBlockingPriority,
          ge = e.unstable_NormalPriority,
          be = e.unstable_LowPriority,
          ve = e.unstable_IdlePriority,
          ye = e.log,
          xe = e.unstable_setDisableYieldValue,
          ke = null,
          we = null;
        function je(e) {
          if (
            ("function" == typeof ye && xe(e),
            we && "function" == typeof we.setStrictMode)
          )
            try {
              we.setStrictMode(ke, e);
            } catch {}
        }
        var Se = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((Ne(e) / _e) | 0)) | 0;
              },
          Ne = Math.log,
          _e = Math.LN2,
          Ce = 256,
          Ee = 262144,
          Me = 4194304;
        function ze(e) {
          var t = 42 & e;
          if (0 !== t) return t;
          switch (e & -e) {
            case 1:
              return 1;
            case 2:
              return 2;
            case 4:
              return 4;
            case 8:
              return 8;
            case 16:
              return 16;
            case 32:
              return 32;
            case 64:
              return 64;
            case 128:
              return 128;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
              return 261888 & e;
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return 3932160 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              return 62914560 & e;
            case 67108864:
              return 67108864;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 0;
            default:
              return e;
          }
        }
        function Pe(e, t, n) {
          var r = e.pendingLanes;
          if (0 === r) return 0;
          var l = 0,
            a = e.suspendedLanes,
            i = e.pingedLanes;
          e = e.warmLanes;
          var s = 134217727 & r;
          return (
            0 !== s
              ? 0 !== (r = s & ~a)
                ? (l = ze(r))
                : 0 !== (i &= s)
                  ? (l = ze(i))
                  : n || (0 !== (n = s & ~e) && (l = ze(n)))
              : 0 !== (s = r & ~a)
                ? (l = ze(s))
                : 0 !== i
                  ? (l = ze(i))
                  : n || (0 !== (n = r & ~e) && (l = ze(n))),
            0 === l
              ? 0
              : 0 !== t &&
                  t !== l &&
                  0 === (t & a) &&
                  ((a = l & -l) >= (n = t & -t) || (32 === a && 4194048 & n))
                ? t
                : l
          );
        }
        function Ae(e, t) {
          return (
            0 === (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t)
          );
        }
        function Te(e, t) {
          switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
            case 64:
              return t + 250;
            case 16:
            case 32:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
              return t + 5e3;
            default:
              return -1;
          }
        }
        function Le() {
          var e = Me;
          return (!(62914560 & (Me <<= 1)) && (Me = 4194304), e);
        }
        function Re(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function Oe(e, t) {
          ((e.pendingLanes |= t),
            268435456 !== t &&
              ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
        }
        function De(e, t, n) {
          ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
          var r = 31 - Se(t);
          ((e.entangledLanes |= t),
            (e.entanglements[r] =
              1073741824 | e.entanglements[r] | (261930 & n)));
        }
        function Ie(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - Se(n),
              l = 1 << r;
            ((l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l));
          }
        }
        function Fe(e, t) {
          var n = t & -t;
          return 0 !== ((n = 42 & n ? 1 : Ue(n)) & (e.suspendedLanes | t))
            ? 0
            : n;
        }
        function Ue(e) {
          switch (e) {
            case 2:
              e = 1;
              break;
            case 8:
              e = 4;
              break;
            case 32:
              e = 16;
              break;
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
              e = 128;
              break;
            case 268435456:
              e = 134217728;
              break;
            default:
              e = 0;
          }
          return e;
        }
        function $e(e) {
          return 2 < (e &= -e)
            ? 8 < e
              ? 134217727 & e
                ? 32
                : 268435456
              : 8
            : 2;
        }
        function He() {
          var e = F.p;
          return 0 !== e ? e : void 0 === (e = window.event) ? 32 : Pf(e.type);
        }
        function Be(e, t) {
          var n = F.p;
          try {
            return ((F.p = e), t());
          } finally {
            F.p = n;
          }
        }
        var Ve = Math.random().toString(36).slice(2),
          We = "__reactFiber$" + Ve,
          qe = "__reactProps$" + Ve,
          Qe = "__reactContainer$" + Ve,
          Ke = "__reactEvents$" + Ve,
          Ge = "__reactListeners$" + Ve,
          Ye = "__reactHandles$" + Ve,
          Xe = "__reactResources$" + Ve,
          Ze = "__reactMarker$" + Ve;
        function Je(e) {
          (delete e[We],
            delete e[qe],
            delete e[Ke],
            delete e[Ge],
            delete e[Ye]);
        }
        function et(e) {
          var t = e[We];
          if (t) return t;
          for (var n = e.parentNode; n; ) {
            if ((t = n[Qe] || n[We])) {
              if (
                ((n = t.alternate),
                null !== t.child || (null !== n && null !== n.child))
              )
                for (e = Ud(e); null !== e; ) {
                  if ((n = e[We])) return n;
                  e = Ud(e);
                }
              return t;
            }
            n = (e = n).parentNode;
          }
          return null;
        }
        function tt(e) {
          if ((e = e[We] || e[Qe])) {
            var t = e.tag;
            if (
              5 === t ||
              6 === t ||
              13 === t ||
              31 === t ||
              26 === t ||
              27 === t ||
              3 === t
            )
              return e;
          }
          return null;
        }
        function nt(e) {
          var t = e.tag;
          if (5 === t || 26 === t || 27 === t || 6 === t) return e.stateNode;
          throw Error(r(33));
        }
        function rt(e) {
          var t = e[Xe];
          return (
            t ||
              (t = e[Xe] =
                { hoistableStyles: new Map(), hoistableScripts: new Map() }),
            t
          );
        }
        function lt(e) {
          e[Ze] = !0;
        }
        var at = new Set(),
          it = {};
        function st(e, t) {
          (ot(e, t), ot(e + "Capture", t));
        }
        function ot(e, t) {
          for (it[e] = t, e = 0; e < t.length; e++) at.add(t[e]);
        }
        var ct = RegExp(
            "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
          ),
          ut = {},
          dt = {};
        function ft(e, t, n) {
          if (
            (function (e) {
              return (
                !!se.call(dt, e) ||
                (!se.call(ut, e) &&
                  (ct.test(e) ? (dt[e] = !0) : ((ut[e] = !0), !1)))
              );
            })(t)
          )
            if (null === n) e.removeAttribute(t);
            else {
              switch (typeof n) {
                case "undefined":
                case "function":
                case "symbol":
                  return void e.removeAttribute(t);
                case "boolean":
                  var r = t.toLowerCase().slice(0, 5);
                  if ("data-" !== r && "aria-" !== r)
                    return void e.removeAttribute(t);
              }
              e.setAttribute(t, "" + n);
            }
        }
        function pt(e, t, n) {
          if (null === n) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(t);
            }
            e.setAttribute(t, "" + n);
          }
        }
        function ht(e, t, n, r) {
          if (null === r) e.removeAttribute(n);
          else {
            switch (typeof r) {
              case "undefined":
              case "function":
              case "symbol":
              case "boolean":
                return void e.removeAttribute(n);
            }
            e.setAttributeNS(t, n, "" + r);
          }
        }
        function mt(e) {
          switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
            case "object":
              return e;
            default:
              return "";
          }
        }
        function gt(e) {
          var t = e.type;
          return (
            (e = e.nodeName) &&
            "input" === e.toLowerCase() &&
            ("checkbox" === t || "radio" === t)
          );
        }
        function bt(e) {
          if (!e._valueTracker) {
            var t = gt(e) ? "checked" : "value";
            e._valueTracker = (function (e, t, n) {
              var r = Object.getOwnPropertyDescriptor(
                e.constructor.prototype,
                t,
              );
              if (
                !e.hasOwnProperty(t) &&
                typeof r < "u" &&
                "function" == typeof r.get &&
                "function" == typeof r.set
              ) {
                var l = r.get,
                  a = r.set;
                return (
                  Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function () {
                      return l.call(this);
                    },
                    set: function (e) {
                      ((n = "" + e), a.call(this, e));
                    },
                  }),
                  Object.defineProperty(e, t, { enumerable: r.enumerable }),
                  {
                    getValue: function () {
                      return n;
                    },
                    setValue: function (e) {
                      n = "" + e;
                    },
                    stopTracking: function () {
                      ((e._valueTracker = null), delete e[t]);
                    },
                  }
                );
              }
            })(e, t, "" + e[t]);
          }
        }
        function vt(e) {
          if (!e) return !1;
          var t = e._valueTracker;
          if (!t) return !0;
          var n = t.getValue(),
            r = "";
          return (
            e && (r = gt(e) ? (e.checked ? "true" : "false") : e.value),
            (e = r) !== n && (t.setValue(e), !0)
          );
        }
        function yt(e) {
          if (
            typeof (e = e || (typeof document < "u" ? document : void 0)) > "u"
          )
            return null;
          try {
            return e.activeElement || e.body;
          } catch {
            return e.body;
          }
        }
        var xt = /[\n"\\]/g;
        function kt(e) {
          return e.replace(xt, function (e) {
            return "\\" + e.charCodeAt(0).toString(16) + " ";
          });
        }
        function wt(e, t, n, r, l, a, i, s) {
          ((e.name = ""),
            null != i &&
            "function" != typeof i &&
            "symbol" != typeof i &&
            "boolean" != typeof i
              ? (e.type = i)
              : e.removeAttribute("type"),
            null != t
              ? "number" === i
                ? ((0 === t && "" === e.value) || e.value != t) &&
                  (e.value = "" + mt(t))
                : e.value !== "" + mt(t) && (e.value = "" + mt(t))
              : ("submit" !== i && "reset" !== i) || e.removeAttribute("value"),
            null != t
              ? St(e, i, mt(t))
              : null != n
                ? St(e, i, mt(n))
                : null != r && e.removeAttribute("value"),
            null == l && null != a && (e.defaultChecked = !!a),
            null != l &&
              (e.checked = l && "function" != typeof l && "symbol" != typeof l),
            null != s &&
            "function" != typeof s &&
            "symbol" != typeof s &&
            "boolean" != typeof s
              ? (e.name = "" + mt(s))
              : e.removeAttribute("name"));
        }
        function jt(e, t, n, r, l, a, i, s) {
          if (
            (null != a &&
              "function" != typeof a &&
              "symbol" != typeof a &&
              "boolean" != typeof a &&
              (e.type = a),
            null != t || null != n)
          ) {
            if (("submit" === a || "reset" === a) && null == t)
              return void bt(e);
            ((n = null != n ? "" + mt(n) : ""),
              (t = null != t ? "" + mt(t) : n),
              s || t === e.value || (e.value = t),
              (e.defaultValue = t));
          }
          ((r =
            "function" != typeof (r = r ?? l) && "symbol" != typeof r && !!r),
            (e.checked = s ? e.checked : !!r),
            (e.defaultChecked = !!r),
            null != i &&
              "function" != typeof i &&
              "symbol" != typeof i &&
              "boolean" != typeof i &&
              (e.name = i),
            bt(e));
        }
        function St(e, t, n) {
          ("number" === t && yt(e.ownerDocument) === e) ||
            e.defaultValue === "" + n ||
            (e.defaultValue = "" + n);
        }
        function Nt(e, t, n, r) {
          if (((e = e.options), t)) {
            t = {};
            for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
            for (n = 0; n < e.length; n++)
              ((l = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== l && (e[n].selected = l),
                l && r && (e[n].defaultSelected = !0));
          } else {
            for (n = "" + mt(n), t = null, l = 0; l < e.length; l++) {
              if (e[l].value === n)
                return (
                  (e[l].selected = !0),
                  void (r && (e[l].defaultSelected = !0))
                );
              null !== t || e[l].disabled || (t = e[l]);
            }
            null !== t && (t.selected = !0);
          }
        }
        function _t(e, t, n) {
          null == t ||
          ((t = "" + mt(t)) !== e.value && (e.value = t), null != n)
            ? (e.defaultValue = null != n ? "" + mt(n) : "")
            : e.defaultValue !== t && (e.defaultValue = t);
        }
        function Ct(e, t, n, l) {
          if (null == t) {
            if (null != l) {
              if (null != n) throw Error(r(92));
              if (D(l)) {
                if (1 < l.length) throw Error(r(93));
                l = l[0];
              }
              n = l;
            }
            (null == n && (n = ""), (t = n));
          }
          ((n = mt(t)),
            (e.defaultValue = n),
            (l = e.textContent) === n &&
              "" !== l &&
              null !== l &&
              (e.value = l),
            bt(e));
        }
        function Et(e, t) {
          if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType)
              return void (n.nodeValue = t);
          }
          e.textContent = t;
        }
        var Mt = new Set(
          "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
            " ",
          ),
        );
        function zt(e, t, n) {
          var r = 0 === t.indexOf("--");
          null == n || "boolean" == typeof n || "" === n
            ? r
              ? e.setProperty(t, "")
              : "float" === t
                ? (e.cssFloat = "")
                : (e[t] = "")
            : r
              ? e.setProperty(t, n)
              : "number" != typeof n || 0 === n || Mt.has(t)
                ? "float" === t
                  ? (e.cssFloat = n)
                  : (e[t] = ("" + n).trim())
                : (e[t] = n + "px");
        }
        function Pt(e, t, n) {
          if (null != t && "object" != typeof t) throw Error(r(62));
          if (((e = e.style), null != n)) {
            for (var l in n)
              !n.hasOwnProperty(l) ||
                (null != t && t.hasOwnProperty(l)) ||
                (0 === l.indexOf("--")
                  ? e.setProperty(l, "")
                  : "float" === l
                    ? (e.cssFloat = "")
                    : (e[l] = ""));
            for (var a in t)
              ((l = t[a]), t.hasOwnProperty(a) && n[a] !== l && zt(e, a, l));
          } else for (var i in t) t.hasOwnProperty(i) && zt(e, i, t[i]);
        }
        function At(e) {
          if (-1 === e.indexOf("-")) return !1;
          switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
              return !1;
            default:
              return !0;
          }
        }
        var Tt = new Map([
            ["acceptCharset", "accept-charset"],
            ["htmlFor", "for"],
            ["httpEquiv", "http-equiv"],
            ["crossOrigin", "crossorigin"],
            ["accentHeight", "accent-height"],
            ["alignmentBaseline", "alignment-baseline"],
            ["arabicForm", "arabic-form"],
            ["baselineShift", "baseline-shift"],
            ["capHeight", "cap-height"],
            ["clipPath", "clip-path"],
            ["clipRule", "clip-rule"],
            ["colorInterpolation", "color-interpolation"],
            ["colorInterpolationFilters", "color-interpolation-filters"],
            ["colorProfile", "color-profile"],
            ["colorRendering", "color-rendering"],
            ["dominantBaseline", "dominant-baseline"],
            ["enableBackground", "enable-background"],
            ["fillOpacity", "fill-opacity"],
            ["fillRule", "fill-rule"],
            ["floodColor", "flood-color"],
            ["floodOpacity", "flood-opacity"],
            ["fontFamily", "font-family"],
            ["fontSize", "font-size"],
            ["fontSizeAdjust", "font-size-adjust"],
            ["fontStretch", "font-stretch"],
            ["fontStyle", "font-style"],
            ["fontVariant", "font-variant"],
            ["fontWeight", "font-weight"],
            ["glyphName", "glyph-name"],
            ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
            ["glyphOrientationVertical", "glyph-orientation-vertical"],
            ["horizAdvX", "horiz-adv-x"],
            ["horizOriginX", "horiz-origin-x"],
            ["imageRendering", "image-rendering"],
            ["letterSpacing", "letter-spacing"],
            ["lightingColor", "lighting-color"],
            ["markerEnd", "marker-end"],
            ["markerMid", "marker-mid"],
            ["markerStart", "marker-start"],
            ["overlinePosition", "overline-position"],
            ["overlineThickness", "overline-thickness"],
            ["paintOrder", "paint-order"],
            ["panose-1", "panose-1"],
            ["pointerEvents", "pointer-events"],
            ["renderingIntent", "rendering-intent"],
            ["shapeRendering", "shape-rendering"],
            ["stopColor", "stop-color"],
            ["stopOpacity", "stop-opacity"],
            ["strikethroughPosition", "strikethrough-position"],
            ["strikethroughThickness", "strikethrough-thickness"],
            ["strokeDasharray", "stroke-dasharray"],
            ["strokeDashoffset", "stroke-dashoffset"],
            ["strokeLinecap", "stroke-linecap"],
            ["strokeLinejoin", "stroke-linejoin"],
            ["strokeMiterlimit", "stroke-miterlimit"],
            ["strokeOpacity", "stroke-opacity"],
            ["strokeWidth", "stroke-width"],
            ["textAnchor", "text-anchor"],
            ["textDecoration", "text-decoration"],
            ["textRendering", "text-rendering"],
            ["transformOrigin", "transform-origin"],
            ["underlinePosition", "underline-position"],
            ["underlineThickness", "underline-thickness"],
            ["unicodeBidi", "unicode-bidi"],
            ["unicodeRange", "unicode-range"],
            ["unitsPerEm", "units-per-em"],
            ["vAlphabetic", "v-alphabetic"],
            ["vHanging", "v-hanging"],
            ["vIdeographic", "v-ideographic"],
            ["vMathematical", "v-mathematical"],
            ["vectorEffect", "vector-effect"],
            ["vertAdvY", "vert-adv-y"],
            ["vertOriginX", "vert-origin-x"],
            ["vertOriginY", "vert-origin-y"],
            ["wordSpacing", "word-spacing"],
            ["writingMode", "writing-mode"],
            ["xmlnsXlink", "xmlns:xlink"],
            ["xHeight", "x-height"],
          ]),
          Lt =
            /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Rt(e) {
          return Lt.test("" + e)
            ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
            : e;
        }
        function Ot() {}
        var Dt = null;
        function It(e) {
          return (
            (e = e.target || e.srcElement || window).correspondingUseElement &&
              (e = e.correspondingUseElement),
            3 === e.nodeType ? e.parentNode : e
          );
        }
        var Ft = null,
          Ut = null;
        function $t(e) {
          var t = tt(e);
          if (t && (e = t.stateNode)) {
            var n = e[qe] || null;
            e: switch (((e = t.stateNode), t.type)) {
              case "input":
                if (
                  (wt(
                    e,
                    n.value,
                    n.defaultValue,
                    n.defaultValue,
                    n.checked,
                    n.defaultChecked,
                    n.type,
                    n.name,
                  ),
                  (t = n.name),
                  "radio" === n.type && null != t)
                ) {
                  for (n = e; n.parentNode; ) n = n.parentNode;
                  for (
                    n = n.querySelectorAll(
                      'input[name="' + kt("" + t) + '"][type="radio"]',
                    ),
                      t = 0;
                    t < n.length;
                    t++
                  ) {
                    var l = n[t];
                    if (l !== e && l.form === e.form) {
                      var a = l[qe] || null;
                      if (!a) throw Error(r(90));
                      wt(
                        l,
                        a.value,
                        a.defaultValue,
                        a.defaultValue,
                        a.checked,
                        a.defaultChecked,
                        a.type,
                        a.name,
                      );
                    }
                  }
                  for (t = 0; t < n.length; t++)
                    (l = n[t]).form === e.form && vt(l);
                }
                break e;
              case "textarea":
                _t(e, n.value, n.defaultValue);
                break e;
              case "select":
                null != (t = n.value) && Nt(e, !!n.multiple, t, !1);
            }
          }
        }
        var Ht = !1;
        function Bt(e, t, n) {
          if (Ht) return e(t, n);
          Ht = !0;
          try {
            return e(t);
          } finally {
            if (
              ((Ht = !1),
              (null !== Ft || null !== Ut) &&
                (ru(), Ft && ((t = Ft), (e = Ut), (Ut = Ft = null), $t(t), e)))
            )
              for (t = 0; t < e.length; t++) $t(e[t]);
          }
        }
        function Vt(e, t) {
          var n = e.stateNode;
          if (null === n) return null;
          var l = n[qe] || null;
          if (null === l) return null;
          n = l[t];
          e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
              ((l = !l.disabled) ||
                (l = !(
                  "button" === (e = e.type) ||
                  "input" === e ||
                  "select" === e ||
                  "textarea" === e
                )),
                (e = !l));
              break e;
            default:
              e = !1;
          }
          if (e) return null;
          if (n && "function" != typeof n) throw Error(r(231, t, typeof n));
          return n;
        }
        var Wt = !(
            typeof window > "u" ||
            typeof window.document > "u" ||
            typeof window.document.createElement > "u"
          ),
          qt = !1;
        if (Wt)
          try {
            var Qt = {};
            (Object.defineProperty(Qt, "passive", {
              get: function () {
                qt = !0;
              },
            }),
              window.addEventListener("test", Qt, Qt),
              window.removeEventListener("test", Qt, Qt));
          } catch {
            qt = !1;
          }
        var Kt = null,
          Gt = null,
          Yt = null;
        function Xt() {
          if (Yt) return Yt;
          var e,
            t,
            n = Gt,
            r = n.length,
            l = "value" in Kt ? Kt.value : Kt.textContent,
            a = l.length;
          for (e = 0; e < r && n[e] === l[e]; e++);
          var i = r - e;
          for (t = 1; t <= i && n[r - t] === l[a - t]; t++);
          return (Yt = l.slice(e, 1 < t ? 1 - t : void 0));
        }
        function Zt(e) {
          var t = e.keyCode;
          return (
            "charCode" in e
              ? 0 === (e = e.charCode) && 13 === t && (e = 13)
              : (e = t),
            10 === e && (e = 13),
            32 <= e || 13 === e ? e : 0
          );
        }
        function Jt() {
          return !0;
        }
        function en() {
          return !1;
        }
        function tn(e) {
          function t(t, n, r, l, a) {
            for (var i in ((this._reactName = t),
            (this._targetInst = r),
            (this.type = n),
            (this.nativeEvent = l),
            (this.target = a),
            (this.currentTarget = null),
            e))
              e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(l) : l[i]));
            return (
              (this.isDefaultPrevented = (
                null != l.defaultPrevented
                  ? l.defaultPrevented
                  : !1 === l.returnValue
              )
                ? Jt
                : en),
              (this.isPropagationStopped = en),
              this
            );
          }
          return (
            d(t.prototype, {
              preventDefault: function () {
                this.defaultPrevented = !0;
                var e = this.nativeEvent;
                e &&
                  (e.preventDefault
                    ? e.preventDefault()
                    : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                  (this.isDefaultPrevented = Jt));
              },
              stopPropagation: function () {
                var e = this.nativeEvent;
                e &&
                  (e.stopPropagation
                    ? e.stopPropagation()
                    : "unknown" != typeof e.cancelBubble &&
                      (e.cancelBubble = !0),
                  (this.isPropagationStopped = Jt));
              },
              persist: function () {},
              isPersistent: Jt,
            }),
            t
          );
        }
        var nn,
          rn,
          ln,
          an = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function (e) {
              return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0,
          },
          sn = tn(an),
          on = d({}, an, { view: 0, detail: 0 }),
          cn = tn(on),
          un = d({}, on, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: kn,
            button: 0,
            buttons: 0,
            relatedTarget: function (e) {
              return void 0 === e.relatedTarget
                ? e.fromElement === e.srcElement
                  ? e.toElement
                  : e.fromElement
                : e.relatedTarget;
            },
            movementX: function (e) {
              return "movementX" in e
                ? e.movementX
                : (e !== ln &&
                    (ln && "mousemove" === e.type
                      ? ((nn = e.screenX - ln.screenX),
                        (rn = e.screenY - ln.screenY))
                      : (rn = nn = 0),
                    (ln = e)),
                  nn);
            },
            movementY: function (e) {
              return "movementY" in e ? e.movementY : rn;
            },
          }),
          dn = tn(un),
          fn = tn(d({}, un, { dataTransfer: 0 })),
          pn = tn(d({}, on, { relatedTarget: 0 })),
          hn = tn(
            d({}, an, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          mn = tn(
            d({}, an, {
              clipboardData: function (e) {
                return "clipboardData" in e
                  ? e.clipboardData
                  : window.clipboardData;
              },
            }),
          ),
          gn = tn(d({}, an, { data: 0 })),
          bn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified",
          },
          vn = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta",
          },
          yn = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey",
          };
        function xn(e) {
          var t = this.nativeEvent;
          return t.getModifierState
            ? t.getModifierState(e)
            : !!(e = yn[e]) && !!t[e];
        }
        function kn() {
          return xn;
        }
        var wn = tn(
            d({}, on, {
              key: function (e) {
                if (e.key) {
                  var t = bn[e.key] || e.key;
                  if ("Unidentified" !== t) return t;
                }
                return "keypress" === e.type
                  ? 13 === (e = Zt(e))
                    ? "Enter"
                    : String.fromCharCode(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? vn[e.keyCode] || "Unidentified"
                    : "";
              },
              code: 0,
              location: 0,
              ctrlKey: 0,
              shiftKey: 0,
              altKey: 0,
              metaKey: 0,
              repeat: 0,
              locale: 0,
              getModifierState: kn,
              charCode: function (e) {
                return "keypress" === e.type ? Zt(e) : 0;
              },
              keyCode: function (e) {
                return "keydown" === e.type || "keyup" === e.type
                  ? e.keyCode
                  : 0;
              },
              which: function (e) {
                return "keypress" === e.type
                  ? Zt(e)
                  : "keydown" === e.type || "keyup" === e.type
                    ? e.keyCode
                    : 0;
              },
            }),
          ),
          jn = tn(
            d({}, un, {
              pointerId: 0,
              width: 0,
              height: 0,
              pressure: 0,
              tangentialPressure: 0,
              tiltX: 0,
              tiltY: 0,
              twist: 0,
              pointerType: 0,
              isPrimary: 0,
            }),
          ),
          Sn = tn(
            d({}, on, {
              touches: 0,
              targetTouches: 0,
              changedTouches: 0,
              altKey: 0,
              metaKey: 0,
              ctrlKey: 0,
              shiftKey: 0,
              getModifierState: kn,
            }),
          ),
          Nn = tn(
            d({}, an, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
          ),
          _n = tn(
            d({}, un, {
              deltaX: function (e) {
                return "deltaX" in e
                  ? e.deltaX
                  : "wheelDeltaX" in e
                    ? -e.wheelDeltaX
                    : 0;
              },
              deltaY: function (e) {
                return "deltaY" in e
                  ? e.deltaY
                  : "wheelDeltaY" in e
                    ? -e.wheelDeltaY
                    : "wheelDelta" in e
                      ? -e.wheelDelta
                      : 0;
              },
              deltaZ: 0,
              deltaMode: 0,
            }),
          ),
          Cn = tn(d({}, an, { newState: 0, oldState: 0 })),
          En = [9, 13, 27, 32],
          Mn = Wt && "CompositionEvent" in window,
          zn = null;
        Wt && "documentMode" in document && (zn = document.documentMode);
        var Pn = Wt && "TextEvent" in window && !zn,
          An = Wt && (!Mn || (zn && 8 < zn && 11 >= zn)),
          Tn = " ",
          Ln = !1;
        function Rn(e, t) {
          switch (e) {
            case "keyup":
              return -1 !== En.indexOf(t.keyCode);
            case "keydown":
              return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "focusout":
              return !0;
            default:
              return !1;
          }
        }
        function On(e) {
          return "object" == typeof (e = e.detail) && "data" in e
            ? e.data
            : null;
        }
        var Dn = !1,
          In = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0,
          };
        function Fn(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return "input" === t ? !!In[e.type] : "textarea" === t;
        }
        function Un(e, t, n, r) {
          (Ft ? (Ut ? Ut.push(r) : (Ut = [r])) : (Ft = r),
            0 < (t = sd(t, "onChange")).length &&
              ((n = new sn("onChange", "change", null, n, r)),
              e.push({ event: n, listeners: t })));
        }
        var $n = null,
          Hn = null;
        function Bn(e) {
          Ju(e, 0);
        }
        function Vn(e) {
          if (vt(nt(e))) return e;
        }
        function Wn(e, t) {
          if ("change" === e) return t;
        }
        var qn = !1;
        if (Wt) {
          var Qn;
          if (Wt) {
            var Kn = "oninput" in document;
            if (!Kn) {
              var Gn = document.createElement("div");
              (Gn.setAttribute("oninput", "return;"),
                (Kn = "function" == typeof Gn.oninput));
            }
            Qn = Kn;
          } else Qn = !1;
          qn = Qn && (!document.documentMode || 9 < document.documentMode);
        }
        function Yn() {
          $n && ($n.detachEvent("onpropertychange", Xn), (Hn = $n = null));
        }
        function Xn(e) {
          if ("value" === e.propertyName && Vn(Hn)) {
            var t = [];
            (Un(t, Hn, e, It(e)), Bt(Bn, t));
          }
        }
        function Zn(e, t, n) {
          "focusin" === e
            ? (Yn(), (Hn = n), ($n = t).attachEvent("onpropertychange", Xn))
            : "focusout" === e && Yn();
        }
        function Jn(e) {
          if ("selectionchange" === e || "keyup" === e || "keydown" === e)
            return Vn(Hn);
        }
        function er(e, t) {
          if ("click" === e) return Vn(t);
        }
        function tr(e, t) {
          if ("input" === e || "change" === e) return Vn(t);
        }
        var nr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              };
        function rr(e, t) {
          if (nr(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var l = n[r];
            if (!se.call(t, l) || !nr(e[l], t[l])) return !1;
          }
          return !0;
        }
        function lr(e) {
          for (; e && e.firstChild; ) e = e.firstChild;
          return e;
        }
        function ar(e, t) {
          var n,
            r = lr(e);
          for (e = 0; r; ) {
            if (3 === r.nodeType) {
              if (((n = e + r.textContent.length), e <= t && n >= t))
                return { node: r, offset: t - e };
              e = n;
            }
            e: {
              for (; r; ) {
                if (r.nextSibling) {
                  r = r.nextSibling;
                  break e;
                }
                r = r.parentNode;
              }
              r = void 0;
            }
            r = lr(r);
          }
        }
        function ir(e, t) {
          return (
            !(!e || !t) &&
            (e === t ||
              ((!e || 3 !== e.nodeType) &&
                (t && 3 === t.nodeType
                  ? ir(e, t.parentNode)
                  : "contains" in e
                    ? e.contains(t)
                    : !!e.compareDocumentPosition &&
                      !!(16 & e.compareDocumentPosition(t)))))
          );
        }
        function sr(e) {
          for (
            var t = yt(
              (e =
                null != e &&
                null != e.ownerDocument &&
                null != e.ownerDocument.defaultView
                  ? e.ownerDocument.defaultView
                  : window).document,
            );
            t instanceof e.HTMLIFrameElement;

          ) {
            try {
              var n = "string" == typeof t.contentWindow.location.href;
            } catch {
              n = !1;
            }
            if (!n) break;
            t = yt((e = t.contentWindow).document);
          }
          return t;
        }
        function or(e) {
          var t = e && e.nodeName && e.nodeName.toLowerCase();
          return (
            t &&
            (("input" === t &&
              ("text" === e.type ||
                "search" === e.type ||
                "tel" === e.type ||
                "url" === e.type ||
                "password" === e.type)) ||
              "textarea" === t ||
              "true" === e.contentEditable)
          );
        }
        var cr =
            Wt && "documentMode" in document && 11 >= document.documentMode,
          ur = null,
          dr = null,
          fr = null,
          pr = !1;
        function hr(e, t, n) {
          var r =
            n.window === n
              ? n.document
              : 9 === n.nodeType
                ? n
                : n.ownerDocument;
          pr ||
            null == ur ||
            ur !== yt(r) ||
            ((r =
              "selectionStart" in (r = ur) && or(r)
                ? { start: r.selectionStart, end: r.selectionEnd }
                : {
                    anchorNode: (r = (
                      (r.ownerDocument && r.ownerDocument.defaultView) ||
                      window
                    ).getSelection()).anchorNode,
                    anchorOffset: r.anchorOffset,
                    focusNode: r.focusNode,
                    focusOffset: r.focusOffset,
                  }),
            (fr && rr(fr, r)) ||
              ((fr = r),
              0 < (r = sd(dr, "onSelect")).length &&
                ((t = new sn("onSelect", "select", null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = ur))));
        }
        function mr(e, t) {
          var n = {};
          return (
            (n[e.toLowerCase()] = t.toLowerCase()),
            (n["Webkit" + e] = "webkit" + t),
            (n["Moz" + e] = "moz" + t),
            n
          );
        }
        var gr = {
            animationend: mr("Animation", "AnimationEnd"),
            animationiteration: mr("Animation", "AnimationIteration"),
            animationstart: mr("Animation", "AnimationStart"),
            transitionrun: mr("Transition", "TransitionRun"),
            transitionstart: mr("Transition", "TransitionStart"),
            transitioncancel: mr("Transition", "TransitionCancel"),
            transitionend: mr("Transition", "TransitionEnd"),
          },
          br = {},
          vr = {};
        function yr(e) {
          if (br[e]) return br[e];
          if (!gr[e]) return e;
          var t,
            n = gr[e];
          for (t in n)
            if (n.hasOwnProperty(t) && t in vr) return (br[e] = n[t]);
          return e;
        }
        Wt &&
          ((vr = document.createElement("div").style),
          "AnimationEvent" in window ||
            (delete gr.animationend.animation,
            delete gr.animationiteration.animation,
            delete gr.animationstart.animation),
          "TransitionEvent" in window || delete gr.transitionend.transition);
        var xr = yr("animationend"),
          kr = yr("animationiteration"),
          wr = yr("animationstart"),
          jr = yr("transitionrun"),
          Sr = yr("transitionstart"),
          Nr = yr("transitioncancel"),
          _r = yr("transitionend"),
          Cr = new Map(),
          Er =
            "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
              " ",
            );
        function Mr(e, t) {
          (Cr.set(e, t), st(t, [e]));
        }
        Er.push("scrollEnd");
        var zr =
            "function" == typeof reportError
              ? reportError
              : function (e) {
                  if (
                    "object" == typeof window &&
                    "function" == typeof window.ErrorEvent
                  ) {
                    var t = new window.ErrorEvent("error", {
                      bubbles: !0,
                      cancelable: !0,
                      message:
                        "object" == typeof e &&
                        null !== e &&
                        "string" == typeof e.message
                          ? String(e.message)
                          : String(e),
                      error: e,
                    });
                    if (!window.dispatchEvent(t)) return;
                  } else if (
                    "object" == typeof process &&
                    "function" == typeof process.emit
                  )
                    return void process.emit("uncaughtException", e);
                  console.error(e);
                },
          Pr = [],
          Ar = 0,
          Tr = 0;
        function Lr() {
          for (var e = Ar, t = (Tr = Ar = 0); t < e; ) {
            var n = Pr[t];
            Pr[t++] = null;
            var r = Pr[t];
            Pr[t++] = null;
            var l = Pr[t];
            Pr[t++] = null;
            var a = Pr[t];
            if (((Pr[t++] = null), null !== r && null !== l)) {
              var i = r.pending;
              (null === i ? (l.next = l) : ((l.next = i.next), (i.next = l)),
                (r.pending = l));
            }
            0 !== a && Ir(n, l, a);
          }
        }
        function Rr(e, t, n, r) {
          ((Pr[Ar++] = e),
            (Pr[Ar++] = t),
            (Pr[Ar++] = n),
            (Pr[Ar++] = r),
            (Tr |= r),
            (e.lanes |= r),
            null !== (e = e.alternate) && (e.lanes |= r));
        }
        function Or(e, t, n, r) {
          return (Rr(e, t, n, r), Fr(e));
        }
        function Dr(e, t) {
          return (Rr(e, null, null, t), Fr(e));
        }
        function Ir(e, t, n) {
          e.lanes |= n;
          var r = e.alternate;
          null !== r && (r.lanes |= n);
          for (var l = !1, a = e.return; null !== a; )
            ((a.childLanes |= n),
              null !== (r = a.alternate) && (r.childLanes |= n),
              22 === a.tag &&
                (null === (e = a.stateNode) || 1 & e._visibility || (l = !0)),
              (e = a),
              (a = a.return));
          return 3 === e.tag
            ? ((a = e.stateNode),
              l &&
                null !== t &&
                ((l = 31 - Se(n)),
                null === (r = (e = a.hiddenUpdates)[l])
                  ? (e[l] = [t])
                  : r.push(t),
                (t.lane = 536870912 | n)),
              a)
            : null;
        }
        function Fr(e) {
          if (50 < Kc) throw ((Kc = 0), (Gc = null), Error(r(185)));
          for (var t = e.return; null !== t; ) t = (e = t).return;
          return 3 === e.tag ? e.stateNode : null;
        }
        var Ur = {};
        function $r(e, t, n, r) {
          ((this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.refCleanup = this.ref = null),
            (this.pendingProps = t),
            (this.dependencies =
              this.memoizedState =
              this.updateQueue =
              this.memoizedProps =
                null),
            (this.mode = r),
            (this.subtreeFlags = this.flags = 0),
            (this.deletions = null),
            (this.childLanes = this.lanes = 0),
            (this.alternate = null));
        }
        function Hr(e, t, n, r) {
          return new $r(e, t, n, r);
        }
        function Br(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function Vr(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = Hr(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 65011712 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            (n.refCleanup = e.refCleanup),
            n
          );
        }
        function Wr(e, t) {
          e.flags &= 65011714;
          var n = e.alternate;
          return (
            null === n
              ? ((e.childLanes = 0),
                (e.lanes = t),
                (e.child = null),
                (e.subtreeFlags = 0),
                (e.memoizedProps = null),
                (e.memoizedState = null),
                (e.updateQueue = null),
                (e.dependencies = null),
                (e.stateNode = null))
              : ((e.childLanes = n.childLanes),
                (e.lanes = n.lanes),
                (e.child = n.child),
                (e.subtreeFlags = 0),
                (e.deletions = null),
                (e.memoizedProps = n.memoizedProps),
                (e.memoizedState = n.memoizedState),
                (e.updateQueue = n.updateQueue),
                (e.type = n.type),
                (t = n.dependencies),
                (e.dependencies =
                  null === t
                    ? null
                    : { lanes: t.lanes, firstContext: t.firstContext })),
            e
          );
        }
        function qr(e, t, n, l, a, i) {
          var s = 0;
          if (((l = e), "function" == typeof e)) Br(e) && (s = 1);
          else if ("string" == typeof e)
            s = (function (e, t, n) {
              if (1 === n || null != t.itemProp) return !1;
              switch (e) {
                case "meta":
                case "title":
                  return !0;
                case "style":
                  if (
                    "string" != typeof t.precedence ||
                    "string" != typeof t.href ||
                    "" === t.href
                  )
                    break;
                  return !0;
                case "link":
                  if (
                    "string" != typeof t.rel ||
                    "string" != typeof t.href ||
                    "" === t.href ||
                    t.onLoad ||
                    t.onError
                  )
                    break;
                  return (
                    "stylesheet" !== t.rel ||
                    ((e = t.disabled),
                    "string" == typeof t.precedence && null == e)
                  );
                case "script":
                  if (
                    t.async &&
                    "function" != typeof t.async &&
                    "symbol" != typeof t.async &&
                    !t.onLoad &&
                    !t.onError &&
                    t.src &&
                    "string" == typeof t.src
                  )
                    return !0;
              }
              return !1;
            })(e, n, K.current)
              ? 26
              : "html" === e || "head" === e || "body" === e
                ? 27
                : 5;
          else
            e: switch (e) {
              case P:
                return (
                  ((e = Hr(31, n, t, a)).elementType = P),
                  (e.lanes = i),
                  e
                );
              case g:
                return Qr(n.children, a, i, t);
              case v:
                ((s = 8), (a |= 24));
                break;
              case k:
                return (
                  ((e = Hr(12, n, t, 2 | a)).elementType = k),
                  (e.lanes = i),
                  e
                );
              case C:
                return (
                  ((e = Hr(13, n, t, a)).elementType = C),
                  (e.lanes = i),
                  e
                );
              case E:
                return (
                  ((e = Hr(19, n, t, a)).elementType = E),
                  (e.lanes = i),
                  e
                );
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case N:
                      s = 10;
                      break e;
                    case j:
                      s = 9;
                      break e;
                    case _:
                      s = 11;
                      break e;
                    case M:
                      s = 14;
                      break e;
                    case z:
                      ((s = 16), (l = null));
                      break e;
                  }
                ((s = 29),
                  (n = Error(r(130, null === e ? "null" : typeof e, ""))),
                  (l = null));
            }
          return (
            ((t = Hr(s, n, t, a)).elementType = e),
            (t.type = l),
            (t.lanes = i),
            t
          );
        }
        function Qr(e, t, n, r) {
          return (((e = Hr(7, e, r, t)).lanes = n), e);
        }
        function Kr(e, t, n) {
          return (((e = Hr(6, e, null, t)).lanes = n), e);
        }
        function Gr(e) {
          var t = Hr(18, null, null, 0);
          return ((t.stateNode = e), t);
        }
        function Yr(e, t, n) {
          return (
            ((t = Hr(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t,
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        var Xr = new WeakMap();
        function Zr(e, t) {
          if ("object" == typeof e && null !== e) {
            var n = Xr.get(e);
            return void 0 !== n
              ? n
              : ((t = { value: e, source: t, stack: ie(t) }), Xr.set(e, t), t);
          }
          return { value: e, source: t, stack: ie(t) };
        }
        var Jr = [],
          el = 0,
          tl = null,
          nl = 0,
          rl = [],
          ll = 0,
          al = null,
          il = 1,
          sl = "";
        function ol(e, t) {
          ((Jr[el++] = nl), (Jr[el++] = tl), (tl = e), (nl = t));
        }
        function cl(e, t, n) {
          ((rl[ll++] = il), (rl[ll++] = sl), (rl[ll++] = al), (al = e));
          var r = il;
          e = sl;
          var l = 32 - Se(r) - 1;
          ((r &= ~(1 << l)), (n += 1));
          var a = 32 - Se(t) + l;
          if (30 < a) {
            var i = l - (l % 5);
            ((a = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (l -= i),
              (il = (1 << (32 - Se(t) + l)) | (n << l) | r),
              (sl = a + e));
          } else ((il = (1 << a) | (n << l) | r), (sl = e));
        }
        function ul(e) {
          null !== e.return && (ol(e, 1), cl(e, 1, 0));
        }
        function dl(e) {
          for (; e === tl; )
            ((tl = Jr[--el]),
              (Jr[el] = null),
              (nl = Jr[--el]),
              (Jr[el] = null));
          for (; e === al; )
            ((al = rl[--ll]),
              (rl[ll] = null),
              (sl = rl[--ll]),
              (rl[ll] = null),
              (il = rl[--ll]),
              (rl[ll] = null));
        }
        function fl(e, t) {
          ((rl[ll++] = il),
            (rl[ll++] = sl),
            (rl[ll++] = al),
            (il = t.id),
            (sl = t.overflow),
            (al = e));
        }
        var pl = null,
          hl = null,
          ml = !1,
          gl = null,
          bl = !1,
          vl = Error(r(519));
        function yl(e) {
          throw (
            Nl(
              Zr(
                Error(
                  r(
                    418,
                    1 < arguments.length &&
                      void 0 !== arguments[1] &&
                      arguments[1]
                      ? "text"
                      : "HTML",
                    "",
                  ),
                ),
                e,
              ),
            ),
            vl
          );
        }
        function xl(e) {
          var t = e.stateNode,
            n = e.type,
            r = e.memoizedProps;
          switch (((t[We] = e), (t[qe] = r), n)) {
            case "dialog":
              (ed("cancel", t), ed("close", t));
              break;
            case "iframe":
            case "object":
            case "embed":
              ed("load", t);
              break;
            case "video":
            case "audio":
              for (n = 0; n < Xu.length; n++) ed(Xu[n], t);
              break;
            case "source":
              ed("error", t);
              break;
            case "img":
            case "image":
            case "link":
              (ed("error", t), ed("load", t));
              break;
            case "details":
              ed("toggle", t);
              break;
            case "input":
              (ed("invalid", t),
                jt(
                  t,
                  r.value,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name,
                  !0,
                ));
              break;
            case "select":
              ed("invalid", t);
              break;
            case "textarea":
              (ed("invalid", t), Ct(t, r.value, r.defaultValue, r.children));
          }
          (("string" != typeof (n = r.children) &&
            "number" != typeof n &&
            "bigint" != typeof n) ||
          t.textContent === "" + n ||
          !0 === r.suppressHydrationWarning ||
          pd(t.textContent, n)
            ? (null != r.popover && (ed("beforetoggle", t), ed("toggle", t)),
              null != r.onScroll && ed("scroll", t),
              null != r.onScrollEnd && ed("scrollend", t),
              null != r.onClick && (t.onclick = Ot),
              (t = !0))
            : (t = !1),
            t || yl(e, !0));
        }
        function kl(e) {
          for (pl = e.return; pl; )
            switch (pl.tag) {
              case 5:
              case 31:
              case 13:
                return void (bl = !1);
              case 27:
              case 3:
                return void (bl = !0);
              default:
                pl = pl.return;
            }
        }
        function wl(e) {
          if (e !== pl) return !1;
          if (!ml) return (kl(e), (ml = !0), !1);
          var t,
            n = e.tag;
          if (
            ((t = 3 !== n && 27 !== n) &&
              ((t = 5 === n) &&
                (t =
                  !("form" !== (t = e.type) && "button" !== t) ||
                  jd(e.type, e.memoizedProps)),
              (t = !t)),
            t && hl && yl(e),
            kl(e),
            13 === n)
          ) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(r(317));
            hl = Fd(e);
          } else if (31 === n) {
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(r(317));
            hl = Fd(e);
          } else
            27 === n
              ? ((n = hl),
                zd(e.type) ? ((e = Id), (Id = null), (hl = e)) : (hl = n))
              : (hl = pl ? Dd(e.stateNode.nextSibling) : null);
          return !0;
        }
        function jl() {
          ((hl = pl = null), (ml = !1));
        }
        function Sl() {
          var e = gl;
          return (
            null !== e &&
              (null === Lc ? (Lc = e) : Lc.push.apply(Lc, e), (gl = null)),
            e
          );
        }
        function Nl(e) {
          null === gl ? (gl = [e]) : gl.push(e);
        }
        var _l = B(null),
          Cl = null,
          El = null;
        function Ml(e, t, n) {
          (W(_l, t._currentValue), (t._currentValue = n));
        }
        function zl(e) {
          ((e._currentValue = _l.current), V(_l));
        }
        function Pl(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function Al(e, t, n, l) {
          var a = e.child;
          for (null !== a && (a.return = e); null !== a; ) {
            var i = a.dependencies;
            if (null !== i) {
              var s = a.child;
              i = i.firstContext;
              e: for (; null !== i; ) {
                var o = i;
                i = a;
                for (var c = 0; c < t.length; c++)
                  if (o.context === t[c]) {
                    ((i.lanes |= n),
                      null !== (o = i.alternate) && (o.lanes |= n),
                      Pl(i.return, n, e),
                      l || (s = null));
                    break e;
                  }
                i = o.next;
              }
            } else if (18 === a.tag) {
              if (null === (s = a.return)) throw Error(r(341));
              ((s.lanes |= n),
                null !== (i = s.alternate) && (i.lanes |= n),
                Pl(s, n, e),
                (s = null));
            } else s = a.child;
            if (null !== s) s.return = a;
            else
              for (s = a; null !== s; ) {
                if (s === e) {
                  s = null;
                  break;
                }
                if (null !== (a = s.sibling)) {
                  ((a.return = s.return), (s = a));
                  break;
                }
                s = s.return;
              }
            a = s;
          }
        }
        function Tl(e, t, n, l) {
          e = null;
          for (var a = t, i = !1; null !== a; ) {
            if (!i)
              if (524288 & a.flags) i = !0;
              else if (262144 & a.flags) break;
            if (10 === a.tag) {
              var s = a.alternate;
              if (null === s) throw Error(r(387));
              if (null !== (s = s.memoizedProps)) {
                var o = a.type;
                nr(a.pendingProps.value, s.value) ||
                  (null !== e ? e.push(o) : (e = [o]));
              }
            } else if (a === X.current) {
              if (null === (s = a.alternate)) throw Error(r(387));
              s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
                (null !== e ? e.push(mf) : (e = [mf]));
            }
            a = a.return;
          }
          (null !== e && Al(t, e, n, l), (t.flags |= 262144));
        }
        function Ll(e) {
          for (e = e.firstContext; null !== e; ) {
            if (!nr(e.context._currentValue, e.memoizedValue)) return !0;
            e = e.next;
          }
          return !1;
        }
        function Rl(e) {
          ((Cl = e),
            (El = null),
            null !== (e = e.dependencies) && (e.firstContext = null));
        }
        function Ol(e) {
          return Il(Cl, e);
        }
        function Dl(e, t) {
          return (null === Cl && Rl(e), Il(e, t));
        }
        function Il(e, t) {
          var n = t._currentValue;
          if (
            ((t = { context: t, memoizedValue: n, next: null }), null === El)
          ) {
            if (null === e) throw Error(r(308));
            ((El = t),
              (e.dependencies = { lanes: 0, firstContext: t }),
              (e.flags |= 524288));
          } else El = El.next = t;
          return n;
        }
        var Fl =
            typeof AbortController < "u"
              ? AbortController
              : function () {
                  var e = [],
                    t = (this.signal = {
                      aborted: !1,
                      addEventListener: function (t, n) {
                        e.push(n);
                      },
                    });
                  this.abort = function () {
                    ((t.aborted = !0),
                      e.forEach(function (e) {
                        return e();
                      }));
                  };
                },
          Ul = e.unstable_scheduleCallback,
          $l = e.unstable_NormalPriority,
          Hl = {
            $$typeof: N,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0,
          };
        function Bl() {
          return { controller: new Fl(), data: new Map(), refCount: 0 };
        }
        function Vl(e) {
          (e.refCount--,
            0 === e.refCount &&
              Ul($l, function () {
                e.controller.abort();
              }));
        }
        var Wl = null,
          ql = 0,
          Ql = 0,
          Kl = null;
        function Gl() {
          if (0 === --ql && null !== Wl) {
            null !== Kl && (Kl.status = "fulfilled");
            var e = Wl;
            ((Wl = null), (Ql = 0), (Kl = null));
            for (var t = 0; t < e.length; t++) (0, e[t])();
          }
        }
        var Yl = I.S;
        I.S = function (e, t) {
          ((Dc = fe()),
            "object" == typeof t &&
              null !== t &&
              "function" == typeof t.then &&
              (function (e, t) {
                if (null === Wl) {
                  var n = (Wl = []);
                  ((ql = 0),
                    (Ql = qu()),
                    (Kl = {
                      status: "pending",
                      value: void 0,
                      then: function (e) {
                        n.push(e);
                      },
                    }));
                }
                (ql++, t.then(Gl, Gl));
              })(0, t),
            null !== Yl && Yl(e, t));
        };
        var Xl = B(null);
        function Zl() {
          var e = Xl.current;
          return null !== e ? e : vc.pooledCache;
        }
        function Jl(e, t) {
          W(Xl, null === t ? Xl.current : t.pool);
        }
        function ea() {
          var e = Zl();
          return null === e ? null : { parent: Hl._currentValue, pool: e };
        }
        var ta = Error(r(460)),
          na = Error(r(474)),
          ra = Error(r(542)),
          la = { then: function () {} };
        function aa(e) {
          return "fulfilled" === (e = e.status) || "rejected" === e;
        }
        function ia(e, t, n) {
          switch (
            (void 0 === (n = e[n])
              ? e.push(t)
              : n !== t && (t.then(Ot, Ot), (t = n)),
            t.status)
          ) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw (ua((e = t.reason)), e);
            default:
              if ("string" == typeof t.status) t.then(Ot, Ot);
              else {
                if (null !== (e = vc) && 100 < e.shellSuspendCounter)
                  throw Error(r(482));
                (((e = t).status = "pending"),
                  e.then(
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "fulfilled"), (n.value = e));
                      }
                    },
                    function (e) {
                      if ("pending" === t.status) {
                        var n = t;
                        ((n.status = "rejected"), (n.reason = e));
                      }
                    },
                  ));
              }
              switch (t.status) {
                case "fulfilled":
                  return t.value;
                case "rejected":
                  throw (ua((e = t.reason)), e);
              }
              throw ((oa = t), ta);
          }
        }
        function sa(e) {
          try {
            return (0, e._init)(e._payload);
          } catch (e) {
            throw null !== e &&
              "object" == typeof e &&
              "function" == typeof e.then
              ? ((oa = e), ta)
              : e;
          }
        }
        var oa = null;
        function ca() {
          if (null === oa) throw Error(r(459));
          var e = oa;
          return ((oa = null), e);
        }
        function ua(e) {
          if (e === ta || e === ra) throw Error(r(483));
        }
        var da = null,
          fa = 0;
        function pa(e) {
          var t = fa;
          return ((fa += 1), null === da && (da = []), ia(da, e, t));
        }
        function ha(e, t) {
          ((t = t.props.ref), (e.ref = void 0 !== t ? t : null));
        }
        function ma(e, t) {
          throw t.$$typeof === f
            ? Error(r(525))
            : ((e = Object.prototype.toString.call(t)),
              Error(
                r(
                  31,
                  "[object Object]" === e
                    ? "object with keys {" + Object.keys(t).join(", ") + "}"
                    : e,
                ),
              ));
        }
        function ga(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) (t(n, r), (r = r.sibling));
            return null;
          }
          function l(e) {
            for (var t = new Map(); null !== e; )
              (null !== e.key ? t.set(e.key, e) : t.set(e.index, e),
                (e = e.sibling));
            return t;
          }
          function a(e, t) {
            return (((e = Vr(e, t)).index = 0), (e.sibling = null), e);
          }
          function i(t, n, r) {
            return (
              (t.index = r),
              e
                ? null !== (r = t.alternate)
                  ? (r = r.index) < n
                    ? ((t.flags |= 67108866), n)
                    : r
                  : ((t.flags |= 67108866), n)
                : ((t.flags |= 1048576), n)
            );
          }
          function s(t) {
            return (e && null === t.alternate && (t.flags |= 67108866), t);
          }
          function o(e, t, n, r) {
            return null === t || 6 !== t.tag
              ? (((t = Kr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function c(e, t, n, r) {
            var l = n.type;
            return l === g
              ? d(e, t, n.props.children, r, n.key)
              : null !== t &&
                  (t.elementType === l ||
                    ("object" == typeof l &&
                      null !== l &&
                      l.$$typeof === z &&
                      sa(l) === t.type))
                ? (ha((t = a(t, n.props)), n), (t.return = e), t)
                : (ha((t = qr(n.type, n.key, n.props, null, e.mode, r)), n),
                  (t.return = e),
                  t);
          }
          function u(e, t, n, r) {
            return null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
              ? (((t = Yr(n, e.mode, r)).return = e), t)
              : (((t = a(t, n.children || [])).return = e), t);
          }
          function d(e, t, n, r, l) {
            return null === t || 7 !== t.tag
              ? (((t = Qr(n, e.mode, r, l)).return = e), t)
              : (((t = a(t, n)).return = e), t);
          }
          function f(e, t, n) {
            if (
              ("string" == typeof t && "" !== t) ||
              "number" == typeof t ||
              "bigint" == typeof t
            )
              return (((t = Kr("" + t, e.mode, n)).return = e), t);
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case p:
                  return (
                    ha((n = qr(t.type, t.key, t.props, null, e.mode, n)), t),
                    (n.return = e),
                    n
                  );
                case m:
                  return (((t = Yr(t, e.mode, n)).return = e), t);
                case z:
                  return f(e, (t = sa(t)), n);
              }
              if (D(t) || L(t))
                return (((t = Qr(t, e.mode, n, null)).return = e), t);
              if ("function" == typeof t.then) return f(e, pa(t), n);
              if (t.$$typeof === N) return f(e, Dl(e, t), n);
              ma(e, t);
            }
            return null;
          }
          function h(e, t, n, r) {
            var l = null !== t ? t.key : null;
            if (
              ("string" == typeof n && "" !== n) ||
              "number" == typeof n ||
              "bigint" == typeof n
            )
              return null !== l ? null : o(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case p:
                  return n.key === l ? c(e, t, n, r) : null;
                case m:
                  return n.key === l ? u(e, t, n, r) : null;
                case z:
                  return h(e, t, (n = sa(n)), r);
              }
              if (D(n) || L(n)) return null !== l ? null : d(e, t, n, r, null);
              if ("function" == typeof n.then) return h(e, t, pa(n), r);
              if (n.$$typeof === N) return h(e, t, Dl(e, n), r);
              ma(e, n);
            }
            return null;
          }
          function b(e, t, n, r, l) {
            if (
              ("string" == typeof r && "" !== r) ||
              "number" == typeof r ||
              "bigint" == typeof r
            )
              return o(t, (e = e.get(n) || null), "" + r, l);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case p:
                  return c(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    l,
                  );
                case m:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    l,
                  );
                case z:
                  return b(e, t, n, (r = sa(r)), l);
              }
              if (D(r) || L(r)) return d(t, (e = e.get(n) || null), r, l, null);
              if ("function" == typeof r.then) return b(e, t, n, pa(r), l);
              if (r.$$typeof === N) return b(e, t, n, Dl(t, r), l);
              ma(t, r);
            }
            return null;
          }
          function v(o, c, u, d) {
            if (
              ("object" == typeof u &&
                null !== u &&
                u.type === g &&
                null === u.key &&
                (u = u.props.children),
              "object" == typeof u && null !== u)
            ) {
              switch (u.$$typeof) {
                case p:
                  e: {
                    for (var y = u.key; null !== c; ) {
                      if (c.key === y) {
                        if ((y = u.type) === g) {
                          if (7 === c.tag) {
                            (n(o, c.sibling),
                              ((d = a(c, u.props.children)).return = o),
                              (o = d));
                            break e;
                          }
                        } else if (
                          c.elementType === y ||
                          ("object" == typeof y &&
                            null !== y &&
                            y.$$typeof === z &&
                            sa(y) === c.type)
                        ) {
                          (n(o, c.sibling),
                            ha((d = a(c, u.props)), u),
                            (d.return = o),
                            (o = d));
                          break e;
                        }
                        n(o, c);
                        break;
                      }
                      (t(o, c), (c = c.sibling));
                    }
                    u.type === g
                      ? (((d = Qr(u.props.children, o.mode, d, u.key)).return =
                          o),
                        (o = d))
                      : (ha(
                          (d = qr(u.type, u.key, u.props, null, o.mode, d)),
                          u,
                        ),
                        (d.return = o),
                        (o = d));
                  }
                  return s(o);
                case m:
                  e: {
                    for (y = u.key; null !== c; ) {
                      if (c.key === y) {
                        if (
                          4 === c.tag &&
                          c.stateNode.containerInfo === u.containerInfo &&
                          c.stateNode.implementation === u.implementation
                        ) {
                          (n(o, c.sibling),
                            ((d = a(c, u.children || [])).return = o),
                            (o = d));
                          break e;
                        }
                        n(o, c);
                        break;
                      }
                      (t(o, c), (c = c.sibling));
                    }
                    (((d = Yr(u, o.mode, d)).return = o), (o = d));
                  }
                  return s(o);
                case z:
                  return v(o, c, (u = sa(u)), d);
              }
              if (D(u))
                return (function (r, a, s, o) {
                  for (
                    var c = null, u = null, d = a, p = (a = 0), m = null;
                    null !== d && p < s.length;
                    p++
                  ) {
                    d.index > p ? ((m = d), (d = null)) : (m = d.sibling);
                    var g = h(r, d, s[p], o);
                    if (null === g) {
                      null === d && (d = m);
                      break;
                    }
                    (e && d && null === g.alternate && t(r, d),
                      (a = i(g, a, p)),
                      null === u ? (c = g) : (u.sibling = g),
                      (u = g),
                      (d = m));
                  }
                  if (p === s.length) return (n(r, d), ml && ol(r, p), c);
                  if (null === d) {
                    for (; p < s.length; p++)
                      null !== (d = f(r, s[p], o)) &&
                        ((a = i(d, a, p)),
                        null === u ? (c = d) : (u.sibling = d),
                        (u = d));
                    return (ml && ol(r, p), c);
                  }
                  for (d = l(d); p < s.length; p++)
                    null !== (m = b(d, r, p, s[p], o)) &&
                      (e &&
                        null !== m.alternate &&
                        d.delete(null === m.key ? p : m.key),
                      (a = i(m, a, p)),
                      null === u ? (c = m) : (u.sibling = m),
                      (u = m));
                  return (
                    e &&
                      d.forEach(function (e) {
                        return t(r, e);
                      }),
                    ml && ol(r, p),
                    c
                  );
                })(o, c, u, d);
              if (L(u)) {
                if ("function" != typeof (y = L(u))) throw Error(r(150));
                return (function (a, s, o, c) {
                  if (null == o) throw Error(r(151));
                  for (
                    var u = null,
                      d = null,
                      p = s,
                      m = (s = 0),
                      g = null,
                      v = o.next();
                    null !== p && !v.done;
                    m++, v = o.next()
                  ) {
                    p.index > m ? ((g = p), (p = null)) : (g = p.sibling);
                    var y = h(a, p, v.value, c);
                    if (null === y) {
                      null === p && (p = g);
                      break;
                    }
                    (e && p && null === y.alternate && t(a, p),
                      (s = i(y, s, m)),
                      null === d ? (u = y) : (d.sibling = y),
                      (d = y),
                      (p = g));
                  }
                  if (v.done) return (n(a, p), ml && ol(a, m), u);
                  if (null === p) {
                    for (; !v.done; m++, v = o.next())
                      null !== (v = f(a, v.value, c)) &&
                        ((s = i(v, s, m)),
                        null === d ? (u = v) : (d.sibling = v),
                        (d = v));
                    return (ml && ol(a, m), u);
                  }
                  for (p = l(p); !v.done; m++, v = o.next())
                    null !== (v = b(p, a, m, v.value, c)) &&
                      (e &&
                        null !== v.alternate &&
                        p.delete(null === v.key ? m : v.key),
                      (s = i(v, s, m)),
                      null === d ? (u = v) : (d.sibling = v),
                      (d = v));
                  return (
                    e &&
                      p.forEach(function (e) {
                        return t(a, e);
                      }),
                    ml && ol(a, m),
                    u
                  );
                })(o, c, (u = y.call(u)), d);
              }
              if ("function" == typeof u.then) return v(o, c, pa(u), d);
              if (u.$$typeof === N) return v(o, c, Dl(o, u), d);
              ma(o, u);
            }
            return ("string" == typeof u && "" !== u) ||
              "number" == typeof u ||
              "bigint" == typeof u
              ? ((u = "" + u),
                null !== c && 6 === c.tag
                  ? (n(o, c.sibling), ((d = a(c, u)).return = o), (o = d))
                  : (n(o, c), ((d = Kr(u, o.mode, d)).return = o), (o = d)),
                s(o))
              : n(o, c);
          }
          return function (e, t, n, r) {
            try {
              fa = 0;
              var l = v(e, t, n, r);
              return ((da = null), l);
            } catch (t) {
              if (t === ta || t === ra) throw t;
              var a = Hr(29, t, null, e.mode);
              return ((a.lanes = r), (a.return = e), a);
            }
          };
        }
        var ba = ga(!0),
          va = ga(!1),
          ya = !1;
        function xa(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, lanes: 0, hiddenCallbacks: null },
            callbacks: null,
          };
        }
        function ka(e, t) {
          ((e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null,
              }));
        }
        function wa(e) {
          return { lane: e, tag: 0, payload: null, callback: null, next: null };
        }
        function ja(e, t, n) {
          var r = e.updateQueue;
          if (null === r) return null;
          if (((r = r.shared), 2 & bc)) {
            var l = r.pending;
            return (
              null === l ? (t.next = t) : ((t.next = l.next), (l.next = t)),
              (r.pending = t),
              (t = Fr(e)),
              Ir(e, null, n),
              t
            );
          }
          return (Rr(e, r, t, n), Fr(e));
        }
        function Sa(e, t, n) {
          if (null !== (t = t.updateQueue) && ((t = t.shared), 4194048 & n)) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Ie(e, n));
          }
        }
        function Na(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var l = null,
              a = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: null,
                  next: null,
                };
                (null === a ? (l = a = i) : (a = a.next = i), (n = n.next));
              } while (null !== n);
              null === a ? (l = a = t) : (a = a.next = t);
            } else l = a = t;
            return (
              (n = {
                baseState: r.baseState,
                firstBaseUpdate: l,
                lastBaseUpdate: a,
                shared: r.shared,
                callbacks: r.callbacks,
              }),
              void (e.updateQueue = n)
            );
          }
          (null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t));
        }
        var _a = !1;
        function Ca() {
          if (_a && null !== Kl) throw Kl;
        }
        function Ea(e, t, n, r) {
          _a = !1;
          var l = e.updateQueue;
          ya = !1;
          var a = l.firstBaseUpdate,
            i = l.lastBaseUpdate,
            s = l.shared.pending;
          if (null !== s) {
            l.shared.pending = null;
            var o = s,
              c = o.next;
            ((o.next = null), null === i ? (a = c) : (i.next = c), (i = o));
            var u = e.alternate;
            null !== u &&
              (s = (u = u.updateQueue).lastBaseUpdate) !== i &&
              (null === s ? (u.firstBaseUpdate = c) : (s.next = c),
              (u.lastBaseUpdate = o));
          }
          if (null !== a) {
            var f = l.baseState;
            for (i = 0, u = c = o = null, s = a; ; ) {
              var p = -536870913 & s.lane,
                h = p !== s.lane;
              if (h ? (xc & p) === p : (r & p) === p) {
                (0 !== p && p === Ql && (_a = !0),
                  null !== u &&
                    (u = u.next =
                      {
                        lane: 0,
                        tag: s.tag,
                        payload: s.payload,
                        callback: null,
                        next: null,
                      }));
                e: {
                  var m = e,
                    g = s;
                  p = t;
                  var b = n;
                  switch (g.tag) {
                    case 1:
                      if ("function" == typeof (m = g.payload)) {
                        f = m.call(b, f, p);
                        break e;
                      }
                      f = m;
                      break e;
                    case 3:
                      m.flags = (-65537 & m.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (p =
                          "function" == typeof (m = g.payload)
                            ? m.call(b, f, p)
                            : m)
                      )
                        break e;
                      f = d({}, f, p);
                      break e;
                    case 2:
                      ya = !0;
                  }
                }
                null !== (p = s.callback) &&
                  ((e.flags |= 64),
                  h && (e.flags |= 8192),
                  null === (h = l.callbacks) ? (l.callbacks = [p]) : h.push(p));
              } else
                ((h = {
                  lane: p,
                  tag: s.tag,
                  payload: s.payload,
                  callback: s.callback,
                  next: null,
                }),
                  null === u ? ((c = u = h), (o = f)) : (u = u.next = h),
                  (i |= p));
              if (null === (s = s.next)) {
                if (null === (s = l.shared.pending)) break;
                ((s = (h = s).next),
                  (h.next = null),
                  (l.lastBaseUpdate = h),
                  (l.shared.pending = null));
              }
            }
            (null === u && (o = f),
              (l.baseState = o),
              (l.firstBaseUpdate = c),
              (l.lastBaseUpdate = u),
              null === a && (l.shared.lanes = 0),
              (Ec |= i),
              (e.lanes = i),
              (e.memoizedState = f));
          }
        }
        function Ma(e, t) {
          if ("function" != typeof e) throw Error(r(191, e));
          e.call(t);
        }
        function za(e, t) {
          var n = e.callbacks;
          if (null !== n)
            for (e.callbacks = null, e = 0; e < n.length; e++) Ma(n[e], t);
        }
        var Pa = B(null),
          Aa = B(0);
        function Ta(e, t) {
          (W(Aa, (e = _c)), W(Pa, t), (_c = e | t.baseLanes));
        }
        function La() {
          (W(Aa, _c), W(Pa, Pa.current));
        }
        function Ra() {
          ((_c = Aa.current), V(Pa), V(Aa));
        }
        var Oa = B(null),
          Da = null;
        function Ia(e) {
          var t = e.alternate;
          (W(Ba, 1 & Ba.current),
            W(Oa, e),
            null === Da &&
              (null === t || null !== Pa.current || null !== t.memoizedState) &&
              (Da = e));
        }
        function Fa(e) {
          (W(Ba, Ba.current), W(Oa, e), null === Da && (Da = e));
        }
        function Ua(e) {
          22 === e.tag
            ? (W(Ba, Ba.current), W(Oa, e), null === Da && (Da = e))
            : $a();
        }
        function $a() {
          (W(Ba, Ba.current), W(Oa, Oa.current));
        }
        function Ha(e) {
          (V(Oa), Da === e && (Da = null), V(Ba));
        }
        var Ba = B(0);
        function Va(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || Rd(n) || Od(n)))
                return t;
            } else if (
              19 !== t.tag ||
              ("forwards" !== t.memoizedProps.revealOrder &&
                "backwards" !== t.memoizedProps.revealOrder &&
                "unstable_legacy-backwards" !== t.memoizedProps.revealOrder &&
                "together" !== t.memoizedProps.revealOrder)
            ) {
              if (null !== t.child) {
                ((t.child.return = t), (t = t.child));
                continue;
              }
            } else if (128 & t.flags) return t;
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
          return null;
        }
        var Wa = 0,
          qa = null,
          Qa = null,
          Ka = null,
          Ga = !1,
          Ya = !1,
          Xa = !1,
          Za = 0,
          Ja = 0,
          ei = null,
          ti = 0;
        function ni() {
          throw Error(r(321));
        }
        function ri(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!nr(e[n], t[n])) return !1;
          return !0;
        }
        function li(e, t, n, r, l, a) {
          return (
            (Wa = a),
            (qa = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (I.H = null === e || null === e.memoizedState ? ys : xs),
            (Xa = !1),
            (a = n(r, l)),
            (Xa = !1),
            Ya && (a = ii(t, n, r, l)),
            ai(e),
            a
          );
        }
        function ai(e) {
          I.H = vs;
          var t = null !== Qa && null !== Qa.next;
          if (
            ((Wa = 0),
            (Ka = Qa = qa = null),
            (Ga = !1),
            (Ja = 0),
            (ei = null),
            t)
          )
            throw Error(r(300));
          null === e ||
            Os ||
            (null !== (e = e.dependencies) && Ll(e) && (Os = !0));
        }
        function ii(e, t, n, l) {
          qa = e;
          var a = 0;
          do {
            if ((Ya && (ei = null), (Ja = 0), (Ya = !1), 25 <= a))
              throw Error(r(301));
            if (((a += 1), (Ka = Qa = null), null != e.updateQueue)) {
              var i = e.updateQueue;
              ((i.lastEffect = null),
                (i.events = null),
                (i.stores = null),
                null != i.memoCache && (i.memoCache.index = 0));
            }
            ((I.H = ks), (i = t(n, l)));
          } while (Ya);
          return i;
        }
        function si() {
          var e = I.H,
            t = e.useState()[0];
          return (
            (t = "function" == typeof t.then ? pi(t) : t),
            (e = e.useState()[0]),
            (null !== Qa ? Qa.memoizedState : null) !== e && (qa.flags |= 1024),
            t
          );
        }
        function oi() {
          var e = 0 !== Za;
          return ((Za = 0), e);
        }
        function ci(e, t, n) {
          ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~n));
        }
        function ui(e) {
          if (Ga) {
            for (e = e.memoizedState; null !== e; ) {
              var t = e.queue;
              (null !== t && (t.pending = null), (e = e.next));
            }
            Ga = !1;
          }
          ((Wa = 0),
            (Ka = Qa = qa = null),
            (Ya = !1),
            (Ja = Za = 0),
            (ei = null));
        }
        function di() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === Ka ? (qa.memoizedState = Ka = e) : (Ka = Ka.next = e),
            Ka
          );
        }
        function fi() {
          if (null === Qa) {
            var e = qa.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = Qa.next;
          var t = null === Ka ? qa.memoizedState : Ka.next;
          if (null !== t) ((Ka = t), (Qa = e));
          else {
            if (null === e)
              throw null === qa.alternate ? Error(r(467)) : Error(r(310));
            ((e = {
              memoizedState: (Qa = e).memoizedState,
              baseState: Qa.baseState,
              baseQueue: Qa.baseQueue,
              queue: Qa.queue,
              next: null,
            }),
              null === Ka ? (qa.memoizedState = Ka = e) : (Ka = Ka.next = e));
          }
          return Ka;
        }
        function pi(e) {
          var t = Ja;
          return (
            (Ja += 1),
            null === ei && (ei = []),
            (e = ia(ei, e, t)),
            (t = qa),
            null === (null === Ka ? t.memoizedState : Ka.next) &&
              ((t = t.alternate),
              (I.H = null === t || null === t.memoizedState ? ys : xs)),
            e
          );
        }
        function hi(e) {
          if (null !== e && "object" == typeof e) {
            if ("function" == typeof e.then) return pi(e);
            if (e.$$typeof === N) return Ol(e);
          }
          throw Error(r(438, String(e)));
        }
        function mi(e) {
          var t = null,
            n = qa.updateQueue;
          if ((null !== n && (t = n.memoCache), null == t)) {
            var r = qa.alternate;
            null !== r &&
              null !== (r = r.updateQueue) &&
              null != (r = r.memoCache) &&
              (t = {
                data: r.data.map(function (e) {
                  return e.slice();
                }),
                index: 0,
              });
          }
          if (
            (null == t && (t = { data: [], index: 0 }),
            null === n &&
              ((n = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (qa.updateQueue = n)),
            (n.memoCache = t),
            void 0 === (n = t.data[t.index]))
          )
            for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = A;
          return (t.index++, n);
        }
        function gi(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function bi(e) {
          return vi(fi(), Qa, e);
        }
        function vi(e, t, n) {
          var l = e.queue;
          if (null === l) throw Error(r(311));
          l.lastRenderedReducer = n;
          var a = e.baseQueue,
            i = l.pending;
          if (null !== i) {
            if (null !== a) {
              var s = a.next;
              ((a.next = i.next), (i.next = s));
            }
            ((t.baseQueue = a = i), (l.pending = null));
          }
          if (((i = e.baseState), null === a)) e.memoizedState = i;
          else {
            var o = (s = null),
              c = null,
              u = (t = a.next),
              d = !1;
            do {
              var f = -536870913 & u.lane;
              if (f !== u.lane ? (xc & f) === f : (Wa & f) === f) {
                var p = u.revertLane;
                if (0 === p)
                  (null !== c &&
                    (c = c.next =
                      {
                        lane: 0,
                        revertLane: 0,
                        gesture: null,
                        action: u.action,
                        hasEagerState: u.hasEagerState,
                        eagerState: u.eagerState,
                        next: null,
                      }),
                    f === Ql && (d = !0));
                else {
                  if ((Wa & p) === p) {
                    ((u = u.next), p === Ql && (d = !0));
                    continue;
                  }
                  ((f = {
                    lane: 0,
                    revertLane: u.revertLane,
                    gesture: null,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                    null === c ? ((o = c = f), (s = i)) : (c = c.next = f),
                    (qa.lanes |= p),
                    (Ec |= p));
                }
                ((f = u.action),
                  Xa && n(i, f),
                  (i = u.hasEagerState ? u.eagerState : n(i, f)));
              } else
                ((p = {
                  lane: f,
                  revertLane: u.revertLane,
                  gesture: u.gesture,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
                  null === c ? ((o = c = p), (s = i)) : (c = c.next = p),
                  (qa.lanes |= f),
                  (Ec |= f));
              u = u.next;
            } while (null !== u && u !== t);
            if (
              (null === c ? (s = i) : (c.next = o),
              !nr(i, e.memoizedState) && ((Os = !0), d && null !== (n = Kl)))
            )
              throw n;
            ((e.memoizedState = i),
              (e.baseState = s),
              (e.baseQueue = c),
              (l.lastRenderedState = i));
          }
          return (null === a && (l.lanes = 0), [e.memoizedState, l.dispatch]);
        }
        function yi(e) {
          var t = fi(),
            n = t.queue;
          if (null === n) throw Error(r(311));
          n.lastRenderedReducer = e;
          var l = n.dispatch,
            a = n.pending,
            i = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var s = (a = a.next);
            do {
              ((i = e(i, s.action)), (s = s.next));
            } while (s !== a);
            (nr(i, t.memoizedState) || (Os = !0),
              (t.memoizedState = i),
              null === t.baseQueue && (t.baseState = i),
              (n.lastRenderedState = i));
          }
          return [i, l];
        }
        function xi(e, t, n) {
          var l = qa,
            a = fi(),
            i = ml;
          if (i) {
            if (void 0 === n) throw Error(r(407));
            n = n();
          } else n = t();
          var s = !nr((Qa || a).memoizedState, n);
          if (
            (s && ((a.memoizedState = n), (Os = !0)),
            (a = a.queue),
            Wi(ji.bind(null, l, a, e), [e]),
            a.getSnapshot !== t ||
              s ||
              (null !== Ka && 1 & Ka.memoizedState.tag))
          ) {
            if (
              ((l.flags |= 2048),
              Ui(9, { destroy: void 0 }, wi.bind(null, l, a, n, t), null),
              null === vc)
            )
              throw Error(r(349));
            i || 127 & Wa || ki(l, t, n);
          }
          return n;
        }
        function ki(e, t, n) {
          ((e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = qa.updateQueue)
              ? ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                (qa.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
                ? (t.stores = [e])
                : n.push(e));
        }
        function wi(e, t, n, r) {
          ((t.value = n), (t.getSnapshot = r), Si(t) && Ni(e));
        }
        function ji(e, t, n) {
          return n(function () {
            Si(t) && Ni(e);
          });
        }
        function Si(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !nr(e, n);
          } catch {
            return !0;
          }
        }
        function Ni(e) {
          var t = Dr(e, 2);
          null !== t && Zc(t, 0, 2);
        }
        function _i(e) {
          var t = di();
          if ("function" == typeof e) {
            var n = e;
            if (((e = n()), Xa)) {
              je(!0);
              try {
                n();
              } finally {
                je(!1);
              }
            }
          }
          return (
            (t.memoizedState = t.baseState = e),
            (t.queue = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: gi,
              lastRenderedState: e,
            }),
            t
          );
        }
        function Ci(e, t, n, r) {
          return (
            (e.baseState = n),
            vi(e, Qa, "function" == typeof r ? r : gi)
          );
        }
        function Ei(e, t, n, l, a) {
          if (ms(e)) throw Error(r(485));
          if (null !== (e = t.action)) {
            var i = {
              payload: a,
              action: e,
              next: null,
              isTransition: !0,
              status: "pending",
              value: null,
              reason: null,
              listeners: [],
              then: function (e) {
                i.listeners.push(e);
              },
            };
            (null !== I.T ? n(!0) : (i.isTransition = !1),
              l(i),
              null === (n = t.pending)
                ? ((i.next = t.pending = i), Mi(t, i))
                : ((i.next = n.next), (t.pending = n.next = i)));
          }
        }
        function Mi(e, t) {
          var n = t.action,
            r = t.payload,
            l = e.state;
          if (t.isTransition) {
            var a = I.T,
              i = {};
            I.T = i;
            try {
              var s = n(l, r),
                o = I.S;
              (null !== o && o(i, s), zi(e, t, s));
            } catch (n) {
              Ai(e, t, n);
            } finally {
              (null !== a && null !== i.types && (a.types = i.types),
                (I.T = a));
            }
          } else
            try {
              zi(e, t, (a = n(l, r)));
            } catch (n) {
              Ai(e, t, n);
            }
        }
        function zi(e, t, n) {
          null !== n && "object" == typeof n && "function" == typeof n.then
            ? n.then(
                function (n) {
                  Pi(e, t, n);
                },
                function (n) {
                  return Ai(e, t, n);
                },
              )
            : Pi(e, t, n);
        }
        function Pi(e, t, n) {
          ((t.status = "fulfilled"),
            (t.value = n),
            Ti(t),
            (e.state = n),
            null !== (t = e.pending) &&
              ((n = t.next) === t
                ? (e.pending = null)
                : ((n = n.next), (t.next = n), Mi(e, n))));
        }
        function Ai(e, t, n) {
          var r = e.pending;
          if (((e.pending = null), null !== r)) {
            r = r.next;
            do {
              ((t.status = "rejected"), (t.reason = n), Ti(t), (t = t.next));
            } while (t !== r);
          }
          e.action = null;
        }
        function Ti(e) {
          e = e.listeners;
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
        function Li(e, t) {
          return t;
        }
        function Ri(e, t) {
          if (ml) {
            var n = vc.formState;
            if (null !== n) {
              e: {
                var r = qa;
                if (ml) {
                  if (hl) {
                    t: {
                      for (var l = hl, a = bl; 8 !== l.nodeType; ) {
                        if (!a) {
                          l = null;
                          break t;
                        }
                        if (null === (l = Dd(l.nextSibling))) {
                          l = null;
                          break t;
                        }
                      }
                      l = "F!" === (a = l.data) || "F" === a ? l : null;
                    }
                    if (l) {
                      ((hl = Dd(l.nextSibling)), (r = "F!" === l.data));
                      break e;
                    }
                  }
                  yl(r);
                }
                r = !1;
              }
              r && (t = n[0]);
            }
          }
          return (
            ((n = di()).memoizedState = n.baseState = t),
            (r = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: Li,
              lastRenderedState: t,
            }),
            (n.queue = r),
            (n = fs.bind(null, qa, r)),
            (r.dispatch = n),
            (r = _i(!1)),
            (a = hs.bind(null, qa, !1, r.queue)),
            (l = { state: t, dispatch: null, action: e, pending: null }),
            ((r = di()).queue = l),
            (n = Ei.bind(null, qa, l, a, n)),
            (l.dispatch = n),
            (r.memoizedState = e),
            [t, n, !1]
          );
        }
        function Oi(e) {
          return Di(fi(), Qa, e);
        }
        function Di(e, t, n) {
          if (
            ((t = vi(e, t, Li)[0]),
            (e = bi(gi)[0]),
            "object" == typeof t && null !== t && "function" == typeof t.then)
          )
            try {
              var r = pi(t);
            } catch (e) {
              throw e === ta ? ra : e;
            }
          else r = t;
          var l = (t = fi()).queue,
            a = l.dispatch;
          return (
            n !== t.memoizedState &&
              ((qa.flags |= 2048),
              Ui(9, { destroy: void 0 }, Ii.bind(null, l, n), null)),
            [r, a, e]
          );
        }
        function Ii(e, t) {
          e.action = t;
        }
        function Fi(e) {
          var t = fi(),
            n = Qa;
          if (null !== n) return Di(t, n, e);
          (fi(), (t = t.memoizedState));
          var r = (n = fi()).queue.dispatch;
          return ((n.memoizedState = e), [t, r, !1]);
        }
        function Ui(e, t, n, r) {
          return (
            (e = { tag: e, create: n, deps: r, inst: t, next: null }),
            null === (t = qa.updateQueue) &&
              ((t = {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null,
              }),
              (qa.updateQueue = t)),
            null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function $i() {
          return fi().memoizedState;
        }
        function Hi(e, t, n, r) {
          var l = di();
          ((qa.flags |= e),
            (l.memoizedState = Ui(
              1 | t,
              { destroy: void 0 },
              n,
              void 0 === r ? null : r,
            )));
        }
        function Bi(e, t, n, r) {
          var l = fi();
          r = void 0 === r ? null : r;
          var a = l.memoizedState.inst;
          null !== Qa && null !== r && ri(r, Qa.memoizedState.deps)
            ? (l.memoizedState = Ui(t, a, n, r))
            : ((qa.flags |= e), (l.memoizedState = Ui(1 | t, a, n, r)));
        }
        function Vi(e, t) {
          Hi(8390656, 8, e, t);
        }
        function Wi(e, t) {
          Bi(2048, 8, e, t);
        }
        function qi(e) {
          var t = fi().memoizedState;
          return (
            (function (e) {
              qa.flags |= 4;
              var t = qa.updateQueue;
              if (null === t)
                ((t = {
                  lastEffect: null,
                  events: null,
                  stores: null,
                  memoCache: null,
                }),
                  (qa.updateQueue = t),
                  (t.events = [e]));
              else {
                var n = t.events;
                null === n ? (t.events = [e]) : n.push(e);
              }
            })({ ref: t, nextImpl: e }),
            function () {
              if (2 & bc) throw Error(r(440));
              return t.impl.apply(void 0, arguments);
            }
          );
        }
        function Qi(e, t) {
          return Bi(4, 2, e, t);
        }
        function Ki(e, t) {
          return Bi(4, 4, e, t);
        }
        function Gi(e, t) {
          if ("function" == typeof t) {
            e = e();
            var n = t(e);
            return function () {
              "function" == typeof n ? n() : t(null);
            };
          }
          if (null != t)
            return (
              (e = e()),
              (t.current = e),
              function () {
                t.current = null;
              }
            );
        }
        function Yi(e, t, n) {
          ((n = null != n ? n.concat([e]) : null),
            Bi(4, 4, Gi.bind(null, t, e), n));
        }
        function Xi() {}
        function Zi(e, t) {
          var n = fi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== t && ri(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function Ji(e, t) {
          var n = fi();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          if (null !== t && ri(t, r[1])) return r[0];
          if (((r = e()), Xa)) {
            je(!0);
            try {
              e();
            } finally {
              je(!1);
            }
          }
          return ((n.memoizedState = [r, t]), r);
        }
        function es(e, t, n) {
          return void 0 === n || (1073741824 & Wa && !(261930 & xc))
            ? (e.memoizedState = t)
            : ((e.memoizedState = n),
              (e = Xc()),
              (qa.lanes |= e),
              (Ec |= e),
              n);
        }
        function ts(e, t, n, r) {
          return nr(n, t)
            ? n
            : null !== Pa.current
              ? ((e = es(e, n, r)), nr(e, t) || (Os = !0), e)
              : 42 & Wa && (!(1073741824 & Wa) || 261930 & xc)
                ? ((e = Xc()), (qa.lanes |= e), (Ec |= e), t)
                : ((Os = !0), (e.memoizedState = n));
        }
        function ns(e, t, n, r, l) {
          var a = F.p;
          F.p = 0 !== a && 8 > a ? a : 8;
          var i = I.T,
            s = {};
          ((I.T = s), hs(e, !1, t, n));
          try {
            var o = l(),
              c = I.S;
            if (
              (null !== c && c(s, o),
              null !== o && "object" == typeof o && "function" == typeof o.then)
            ) {
              var u = (function (e, t) {
                var n = [],
                  r = {
                    status: "pending",
                    value: null,
                    reason: null,
                    then: function (e) {
                      n.push(e);
                    },
                  };
                return (
                  e.then(
                    function () {
                      ((r.status = "fulfilled"), (r.value = t));
                      for (var e = 0; e < n.length; e++) (0, n[e])(t);
                    },
                    function (e) {
                      for (
                        r.status = "rejected", r.reason = e, e = 0;
                        e < n.length;
                        e++
                      )
                        (0, n[e])(void 0);
                    },
                  ),
                  r
                );
              })(o, r);
              ps(e, t, u, Yc());
            } else ps(e, t, r, Yc());
          } catch (n) {
            ps(
              e,
              t,
              { then: function () {}, status: "rejected", reason: n },
              Yc(),
            );
          } finally {
            ((F.p = a),
              null !== i && null !== s.types && (i.types = s.types),
              (I.T = i));
          }
        }
        function rs() {}
        function ls(e, t, n, l) {
          if (5 !== e.tag) throw Error(r(476));
          var a = as(e).queue;
          ns(
            e,
            a,
            t,
            U,
            null === n
              ? rs
              : function () {
                  return (is(e), n(l));
                },
          );
        }
        function as(e) {
          var t = e.memoizedState;
          if (null !== t) return t;
          var n = {};
          return (
            ((t = {
              memoizedState: U,
              baseState: U,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: gi,
                lastRenderedState: U,
              },
              next: null,
            }).next = {
              memoizedState: n,
              baseState: n,
              baseQueue: null,
              queue: {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: gi,
                lastRenderedState: n,
              },
              next: null,
            }),
            (e.memoizedState = t),
            null !== (e = e.alternate) && (e.memoizedState = t),
            t
          );
        }
        function is(e) {
          var t = as(e);
          (null === t.next && (t = e.alternate.memoizedState),
            ps(e, t.next.queue, {}, Yc()));
        }
        function ss() {
          return Ol(mf);
        }
        function os() {
          return fi().memoizedState;
        }
        function cs() {
          return fi().memoizedState;
        }
        function us(e) {
          for (var t = e.return; null !== t; ) {
            switch (t.tag) {
              case 24:
              case 3:
                var n = Yc(),
                  r = ja(t, (e = wa(n)), n);
                return (
                  null !== r && (Zc(r, 0, n), Sa(r, t, n)),
                  (t = { cache: Bl() }),
                  void (e.payload = t)
                );
            }
            t = t.return;
          }
        }
        function ds(e, t, n) {
          var r = Yc();
          ((n = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            ms(e)
              ? gs(t, n)
              : null !== (n = Or(e, t, n, r)) && (Zc(n, 0, r), bs(n, t, r)));
        }
        function fs(e, t, n) {
          ps(e, t, n, Yc());
        }
        function ps(e, t, n, r) {
          var l = {
            lane: r,
            revertLane: 0,
            gesture: null,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
          if (ms(e)) gs(t, l);
          else {
            var a = e.alternate;
            if (
              0 === e.lanes &&
              (null === a || 0 === a.lanes) &&
              null !== (a = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  s = a(i, n);
                if (((l.hasEagerState = !0), (l.eagerState = s), nr(s, i)))
                  return (Rr(e, t, l, 0), null === vc && Lr(), !1);
              } catch {}
            if (null !== (n = Or(e, t, l, r)))
              return (Zc(n, 0, r), bs(n, t, r), !0);
          }
          return !1;
        }
        function hs(e, t, n, l) {
          if (
            ((l = {
              lane: 2,
              revertLane: qu(),
              gesture: null,
              action: l,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            }),
            ms(e))
          ) {
            if (t) throw Error(r(479));
          } else null !== (t = Or(e, n, l, 2)) && Zc(t, 0, 2);
        }
        function ms(e) {
          var t = e.alternate;
          return e === qa || (null !== t && t === qa);
        }
        function gs(e, t) {
          Ya = Ga = !0;
          var n = e.pending;
          (null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t));
        }
        function bs(e, t, n) {
          if (4194048 & n) {
            var r = t.lanes;
            ((n |= r &= e.pendingLanes), (t.lanes = n), Ie(e, n));
          }
        }
        var vs = {
          readContext: Ol,
          use: hi,
          useCallback: ni,
          useContext: ni,
          useEffect: ni,
          useImperativeHandle: ni,
          useLayoutEffect: ni,
          useInsertionEffect: ni,
          useMemo: ni,
          useReducer: ni,
          useRef: ni,
          useState: ni,
          useDebugValue: ni,
          useDeferredValue: ni,
          useTransition: ni,
          useSyncExternalStore: ni,
          useId: ni,
          useHostTransitionStatus: ni,
          useFormState: ni,
          useActionState: ni,
          useOptimistic: ni,
          useMemoCache: ni,
          useCacheRefresh: ni,
        };
        vs.useEffectEvent = ni;
        var ys = {
            readContext: Ol,
            use: hi,
            useCallback: function (e, t) {
              return ((di().memoizedState = [e, void 0 === t ? null : t]), e);
            },
            useContext: Ol,
            useEffect: Vi,
            useImperativeHandle: function (e, t, n) {
              ((n = null != n ? n.concat([e]) : null),
                Hi(4194308, 4, Gi.bind(null, t, e), n));
            },
            useLayoutEffect: function (e, t) {
              return Hi(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              Hi(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = di();
              t = void 0 === t ? null : t;
              var r = e();
              if (Xa) {
                je(!0);
                try {
                  e();
                } finally {
                  je(!1);
                }
              }
              return ((n.memoizedState = [r, t]), r);
            },
            useReducer: function (e, t, n) {
              var r = di();
              if (void 0 !== n) {
                var l = n(t);
                if (Xa) {
                  je(!0);
                  try {
                    n(t);
                  } finally {
                    je(!1);
                  }
                }
              } else l = t;
              return (
                (r.memoizedState = r.baseState = l),
                (e = {
                  pending: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: l,
                }),
                (r.queue = e),
                (e = e.dispatch = ds.bind(null, qa, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return ((e = { current: e }), (di().memoizedState = e));
            },
            useState: function (e) {
              var t = (e = _i(e)).queue,
                n = fs.bind(null, qa, t);
              return ((t.dispatch = n), [e.memoizedState, n]);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e, t) {
              return es(di(), e, t);
            },
            useTransition: function () {
              var e = _i(!1);
              return (
                (e = ns.bind(null, qa, e.queue, !0, !1)),
                (di().memoizedState = e),
                [!1, e]
              );
            },
            useSyncExternalStore: function (e, t, n) {
              var l = qa,
                a = di();
              if (ml) {
                if (void 0 === n) throw Error(r(407));
                n = n();
              } else {
                if (((n = t()), null === vc)) throw Error(r(349));
                127 & xc || ki(l, t, n);
              }
              a.memoizedState = n;
              var i = { value: n, getSnapshot: t };
              return (
                (a.queue = i),
                Vi(ji.bind(null, l, i, e), [e]),
                (l.flags |= 2048),
                Ui(9, { destroy: void 0 }, wi.bind(null, l, i, n, t), null),
                n
              );
            },
            useId: function () {
              var e = di(),
                t = vc.identifierPrefix;
              if (ml) {
                var n = sl;
                ((t =
                  "_" +
                  t +
                  "R_" +
                  (n = (il & ~(1 << (32 - Se(il) - 1))).toString(32) + n)),
                  0 < (n = Za++) && (t += "H" + n.toString(32)),
                  (t += "_"));
              } else t = "_" + t + "r_" + (n = ti++).toString(32) + "_";
              return (e.memoizedState = t);
            },
            useHostTransitionStatus: ss,
            useFormState: Ri,
            useActionState: Ri,
            useOptimistic: function (e) {
              var t = di();
              t.memoizedState = t.baseState = e;
              var n = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null,
              };
              return (
                (t.queue = n),
                (t = hs.bind(null, qa, !0, n)),
                (n.dispatch = t),
                [e, t]
              );
            },
            useMemoCache: mi,
            useCacheRefresh: function () {
              return (di().memoizedState = us.bind(null, qa));
            },
            useEffectEvent: function (e) {
              var t = di(),
                n = { impl: e };
              return (
                (t.memoizedState = n),
                function () {
                  if (2 & bc) throw Error(r(440));
                  return n.impl.apply(void 0, arguments);
                }
              );
            },
          },
          xs = {
            readContext: Ol,
            use: hi,
            useCallback: Zi,
            useContext: Ol,
            useEffect: Wi,
            useImperativeHandle: Yi,
            useInsertionEffect: Qi,
            useLayoutEffect: Ki,
            useMemo: Ji,
            useReducer: bi,
            useRef: $i,
            useState: function () {
              return bi(gi);
            },
            useDebugValue: Xi,
            useDeferredValue: function (e, t) {
              return ts(fi(), Qa.memoizedState, e, t);
            },
            useTransition: function () {
              var e = bi(gi)[0],
                t = fi().memoizedState;
              return ["boolean" == typeof e ? e : pi(e), t];
            },
            useSyncExternalStore: xi,
            useId: os,
            useHostTransitionStatus: ss,
            useFormState: Oi,
            useActionState: Oi,
            useOptimistic: function (e, t) {
              return Ci(fi(), 0, e, t);
            },
            useMemoCache: mi,
            useCacheRefresh: cs,
          };
        xs.useEffectEvent = qi;
        var ks = {
          readContext: Ol,
          use: hi,
          useCallback: Zi,
          useContext: Ol,
          useEffect: Wi,
          useImperativeHandle: Yi,
          useInsertionEffect: Qi,
          useLayoutEffect: Ki,
          useMemo: Ji,
          useReducer: yi,
          useRef: $i,
          useState: function () {
            return yi(gi);
          },
          useDebugValue: Xi,
          useDeferredValue: function (e, t) {
            var n = fi();
            return null === Qa ? es(n, e, t) : ts(n, Qa.memoizedState, e, t);
          },
          useTransition: function () {
            var e = yi(gi)[0],
              t = fi().memoizedState;
            return ["boolean" == typeof e ? e : pi(e), t];
          },
          useSyncExternalStore: xi,
          useId: os,
          useHostTransitionStatus: ss,
          useFormState: Fi,
          useActionState: Fi,
          useOptimistic: function (e, t) {
            var n = fi();
            return null !== Qa
              ? Ci(n, 0, e, t)
              : ((n.baseState = e), [e, n.queue.dispatch]);
          },
          useMemoCache: mi,
          useCacheRefresh: cs,
        };
        function ws(e, t, n, r) {
          ((n = null == (n = n(r, (t = e.memoizedState))) ? t : d({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n));
        }
        ks.useEffectEvent = qi;
        var js = {
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yc(),
              l = wa(r);
            ((l.payload = t),
              null != n && (l.callback = n),
              null !== (t = ja(e, l, r)) && (Zc(t, 0, r), Sa(t, e, r)));
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = Yc(),
              l = wa(r);
            ((l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              null !== (t = ja(e, l, r)) && (Zc(t, 0, r), Sa(t, e, r)));
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = Yc(),
              r = wa(n);
            ((r.tag = 2),
              null != t && (r.callback = t),
              null !== (t = ja(e, r, n)) && (Zc(t, 0, n), Sa(t, e, n)));
          },
        };
        function Ss(e, t, n, r, l, a, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, a, i)
            : !(
                t.prototype &&
                t.prototype.isPureReactComponent &&
                rr(n, r) &&
                rr(l, a)
              );
        }
        function Ns(e, t, n, r) {
          ((e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && js.enqueueReplaceState(t, t.state, null));
        }
        function _s(e, t) {
          var n = t;
          if ("ref" in t)
            for (var r in ((n = {}), t)) "ref" !== r && (n[r] = t[r]);
          if ((e = e.defaultProps))
            for (var l in (n === t && (n = d({}, n)), e))
              void 0 === n[l] && (n[l] = e[l]);
          return n;
        }
        function Cs(e) {
          zr(e);
        }
        function Es(e) {
          console.error(e);
        }
        function Ms(e) {
          zr(e);
        }
        function zs(e, t) {
          try {
            (0, e.onUncaughtError)(t.value, { componentStack: t.stack });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function Ps(e, t, n) {
          try {
            (0, e.onCaughtError)(n.value, {
              componentStack: n.stack,
              errorBoundary: 1 === t.tag ? t.stateNode : null,
            });
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        function As(e, t, n) {
          return (
            ((n = wa(n)).tag = 3),
            (n.payload = { element: null }),
            (n.callback = function () {
              zs(e, t);
            }),
            n
          );
        }
        function Ts(e) {
          return (((e = wa(e)).tag = 3), e);
        }
        function Ls(e, t, n, r) {
          var l = n.type.getDerivedStateFromError;
          if ("function" == typeof l) {
            var a = r.value;
            ((e.payload = function () {
              return l(a);
            }),
              (e.callback = function () {
                Ps(t, n, r);
              }));
          }
          var i = n.stateNode;
          null !== i &&
            "function" == typeof i.componentDidCatch &&
            (e.callback = function () {
              (Ps(t, n, r),
                "function" != typeof l &&
                  (null === Uc ? (Uc = new Set([this])) : Uc.add(this)));
              var e = r.stack;
              this.componentDidCatch(r.value, {
                componentStack: null !== e ? e : "",
              });
            });
        }
        var Rs = Error(r(461)),
          Os = !1;
        function Ds(e, t, n, r) {
          t.child = null === e ? va(t, null, n, r) : ba(t, e.child, n, r);
        }
        function Is(e, t, n, r, l) {
          n = n.render;
          var a = t.ref;
          if ("ref" in r) {
            var i = {};
            for (var s in r) "ref" !== s && (i[s] = r[s]);
          } else i = r;
          return (
            Rl(t),
            (r = li(e, t, n, i, a, l)),
            (s = oi()),
            null === e || Os
              ? (ml && s && ul(t), (t.flags |= 1), Ds(e, t, r, l), t.child)
              : (ci(e, t, l), so(e, t, l))
          );
        }
        function Fs(e, t, n, r, l) {
          if (null === e) {
            var a = n.type;
            return "function" != typeof a ||
              Br(a) ||
              void 0 !== a.defaultProps ||
              null !== n.compare
              ? (((e = qr(n.type, null, r, t, t.mode, l)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = a), Us(e, t, a, r, l));
          }
          if (((a = e.child), !oo(e, l))) {
            var i = a.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : rr)(i, r) &&
              e.ref === t.ref
            )
              return so(e, t, l);
          }
          return (
            (t.flags |= 1),
            ((e = Vr(a, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function Us(e, t, n, r, l) {
          if (null !== e) {
            var a = e.memoizedProps;
            if (rr(a, r) && e.ref === t.ref) {
              if (((Os = !1), (t.pendingProps = r = a), !oo(e, l)))
                return ((t.lanes = e.lanes), so(e, t, l));
              131072 & e.flags && (Os = !0);
            }
          }
          return Qs(e, t, n, r, l);
        }
        function $s(e, t, n, r) {
          var l = r.children,
            a = null !== e ? e.memoizedState : null;
          if (
            (null === e &&
              null === t.stateNode &&
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            "hidden" === r.mode)
          ) {
            if (128 & t.flags) {
              if (((a = null !== a ? a.baseLanes | n : n), null !== e)) {
                for (r = t.child = e.child, l = 0; null !== r; )
                  ((l = l | r.lanes | r.childLanes), (r = r.sibling));
                r = l & ~a;
              } else ((r = 0), (t.child = null));
              return Bs(e, t, a, n, r);
            }
            if (!(536870912 & n))
              return (
                (r = t.lanes = 536870912),
                Bs(e, t, null !== a ? a.baseLanes | n : n, n, r)
              );
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              null !== e && Jl(0, null !== a ? a.cachePool : null),
              null !== a ? Ta(t, a) : La(),
              Ua(t));
          } else
            null !== a
              ? (Jl(0, a.cachePool), Ta(t, a), $a(), (t.memoizedState = null))
              : (null !== e && Jl(0, null), La(), $a());
          return (Ds(e, t, l, n), t.child);
        }
        function Hs(e, t) {
          return (
            (null !== e && 22 === e.tag) ||
              null !== t.stateNode ||
              (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
              }),
            t.sibling
          );
        }
        function Bs(e, t, n, r, l) {
          var a = Zl();
          return (
            (a = null === a ? null : { parent: Hl._currentValue, pool: a }),
            (t.memoizedState = { baseLanes: n, cachePool: a }),
            null !== e && Jl(0, null),
            La(),
            Ua(t),
            null !== e && Tl(e, t, r, !0),
            (t.childLanes = l),
            null
          );
        }
        function Vs(e, t) {
          return (
            ((t = no({ mode: t.mode, children: t.children }, e.mode)).ref =
              e.ref),
            (e.child = t),
            (t.return = e),
            t
          );
        }
        function Ws(e, t, n) {
          return (
            ba(t, e.child, null, n),
            ((e = Vs(t, t.pendingProps)).flags |= 2),
            Ha(t),
            (t.memoizedState = null),
            e
          );
        }
        function qs(e, t) {
          var n = t.ref;
          if (null === n) null !== e && null !== e.ref && (t.flags |= 4194816);
          else {
            if ("function" != typeof n && "object" != typeof n)
              throw Error(r(284));
            (null === e || e.ref !== n) && (t.flags |= 4194816);
          }
        }
        function Qs(e, t, n, r, l) {
          return (
            Rl(t),
            (n = li(e, t, n, r, void 0, l)),
            (r = oi()),
            null === e || Os
              ? (ml && r && ul(t), (t.flags |= 1), Ds(e, t, n, l), t.child)
              : (ci(e, t, l), so(e, t, l))
          );
        }
        function Ks(e, t, n, r, l, a) {
          return (
            Rl(t),
            (t.updateQueue = null),
            (n = ii(t, r, n, l)),
            ai(e),
            (r = oi()),
            null === e || Os
              ? (ml && r && ul(t), (t.flags |= 1), Ds(e, t, n, a), t.child)
              : (ci(e, t, a), so(e, t, a))
          );
        }
        function Gs(e, t, n, r, l) {
          if ((Rl(t), null === t.stateNode)) {
            var a = Ur,
              i = n.contextType;
            ("object" == typeof i && null !== i && (a = Ol(i)),
              (a = new n(r, a)),
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
              (a.updater = js),
              (t.stateNode = a),
              (a._reactInternals = t),
              ((a = t.stateNode).props = r),
              (a.state = t.memoizedState),
              (a.refs = {}),
              xa(t),
              (i = n.contextType),
              (a.context = "object" == typeof i && null !== i ? Ol(i) : Ur),
              (a.state = t.memoizedState),
              "function" == typeof (i = n.getDerivedStateFromProps) &&
                (ws(t, n, i, r), (a.state = t.memoizedState)),
              "function" == typeof n.getDerivedStateFromProps ||
                "function" == typeof a.getSnapshotBeforeUpdate ||
                ("function" != typeof a.UNSAFE_componentWillMount &&
                  "function" != typeof a.componentWillMount) ||
                ((i = a.state),
                "function" == typeof a.componentWillMount &&
                  a.componentWillMount(),
                "function" == typeof a.UNSAFE_componentWillMount &&
                  a.UNSAFE_componentWillMount(),
                i !== a.state && js.enqueueReplaceState(a, a.state, null),
                Ea(t, r, a, l),
                Ca(),
                (a.state = t.memoizedState)),
              "function" == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !0));
          } else if (null === e) {
            a = t.stateNode;
            var s = t.memoizedProps,
              o = _s(n, s);
            a.props = o;
            var c = a.context,
              u = n.contextType;
            ((i = Ur), "object" == typeof u && null !== u && (i = Ol(u)));
            var d = n.getDerivedStateFromProps;
            ((u =
              "function" == typeof d ||
              "function" == typeof a.getSnapshotBeforeUpdate),
              (s = t.pendingProps !== s),
              u ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((s || c !== i) && Ns(t, a, r, i)),
              (ya = !1));
            var f = t.memoizedState;
            ((a.state = f),
              Ea(t, r, a, l),
              Ca(),
              (c = t.memoizedState),
              s || f !== c || ya
                ? ("function" == typeof d &&
                    (ws(t, n, d, r), (c = t.memoizedState)),
                  (o = ya || Ss(t, n, o, r, f, c, i))
                    ? (u ||
                        ("function" != typeof a.UNSAFE_componentWillMount &&
                          "function" != typeof a.componentWillMount) ||
                        ("function" == typeof a.componentWillMount &&
                          a.componentWillMount(),
                        "function" == typeof a.UNSAFE_componentWillMount &&
                          a.UNSAFE_componentWillMount()),
                      "function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof a.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = c)),
                  (a.props = r),
                  (a.state = c),
                  (a.context = i),
                  (r = o))
                : ("function" == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1)));
          } else {
            ((a = t.stateNode),
              ka(e, t),
              (u = _s(n, (i = t.memoizedProps))),
              (a.props = u),
              (d = t.pendingProps),
              (f = a.context),
              (c = n.contextType),
              (o = Ur),
              "object" == typeof c && null !== c && (o = Ol(c)),
              (c =
                "function" == typeof (s = n.getDerivedStateFromProps) ||
                "function" == typeof a.getSnapshotBeforeUpdate) ||
                ("function" != typeof a.UNSAFE_componentWillReceiveProps &&
                  "function" != typeof a.componentWillReceiveProps) ||
                ((i !== d || f !== o) && Ns(t, a, r, o)),
              (ya = !1),
              (f = t.memoizedState),
              (a.state = f),
              Ea(t, r, a, l),
              Ca());
            var p = t.memoizedState;
            i !== d ||
            f !== p ||
            ya ||
            (null !== e && null !== e.dependencies && Ll(e.dependencies))
              ? ("function" == typeof s &&
                  (ws(t, n, s, r), (p = t.memoizedState)),
                (u =
                  ya ||
                  Ss(t, n, u, r, f, p, o) ||
                  (null !== e && null !== e.dependencies && Ll(e.dependencies)))
                  ? (c ||
                      ("function" != typeof a.UNSAFE_componentWillUpdate &&
                        "function" != typeof a.componentWillUpdate) ||
                      ("function" == typeof a.componentWillUpdate &&
                        a.componentWillUpdate(r, p, o),
                      "function" == typeof a.UNSAFE_componentWillUpdate &&
                        a.UNSAFE_componentWillUpdate(r, p, o)),
                    "function" == typeof a.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof a.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof a.componentDidUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof a.getSnapshotBeforeUpdate ||
                      (i === e.memoizedProps && f === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = p)),
                (a.props = r),
                (a.state = p),
                (a.context = o),
                (r = u))
              : ("function" != typeof a.componentDidUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof a.getSnapshotBeforeUpdate ||
                  (i === e.memoizedProps && f === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return (
            (a = r),
            qs(e, t),
            (r = !!(128 & t.flags)),
            a || r
              ? ((a = t.stateNode),
                (n =
                  r && "function" != typeof n.getDerivedStateFromError
                    ? null
                    : a.render()),
                (t.flags |= 1),
                null !== e && r
                  ? ((t.child = ba(t, e.child, null, l)),
                    (t.child = ba(t, null, n, l)))
                  : Ds(e, t, n, l),
                (t.memoizedState = a.state),
                (e = t.child))
              : (e = so(e, t, l)),
            e
          );
        }
        function Ys(e, t, n, r) {
          return (jl(), (t.flags |= 256), Ds(e, t, n, r), t.child);
        }
        var Xs = {
          dehydrated: null,
          treeContext: null,
          retryLane: 0,
          hydrationErrors: null,
        };
        function Zs(e) {
          return { baseLanes: e, cachePool: ea() };
        }
        function Js(e, t, n) {
          return ((e = null !== e ? e.childLanes & ~n : 0), t && (e |= Pc), e);
        }
        function eo(e, t, n) {
          var l,
            a = t.pendingProps,
            i = !1,
            s = !!(128 & t.flags);
          if (
            ((l = s) ||
              (l =
                (null === e || null !== e.memoizedState) && !!(2 & Ba.current)),
            l && ((i = !0), (t.flags &= -129)),
            (l = !!(32 & t.flags)),
            (t.flags &= -33),
            null === e)
          ) {
            if (ml) {
              if (
                (i ? Ia(t) : $a(),
                (e = hl)
                  ? null !==
                      (e =
                        null !== (e = Ld(e, bl)) && "&" !== e.data
                          ? e
                          : null) &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        null !== al ? { id: il, overflow: sl } : null,
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    ((n = Gr(e)).return = t),
                    (t.child = n),
                    (pl = t),
                    (hl = null))
                  : (e = null),
                null === e)
              )
                throw yl(t);
              return (Od(e) ? (t.lanes = 32) : (t.lanes = 536870912), null);
            }
            var o = a.children;
            return (
              (a = a.fallback),
              i
                ? ($a(),
                  (o = no({ mode: "hidden", children: o }, (i = t.mode))),
                  (a = Qr(a, i, n, null)),
                  (o.return = t),
                  (a.return = t),
                  (o.sibling = a),
                  (t.child = o),
                  ((a = t.child).memoizedState = Zs(n)),
                  (a.childLanes = Js(e, l, n)),
                  (t.memoizedState = Xs),
                  Hs(null, a))
                : (Ia(t), to(t, o))
            );
          }
          var c = e.memoizedState;
          if (null !== c && null !== (o = c.dehydrated)) {
            if (s)
              256 & t.flags
                ? (Ia(t), (t.flags &= -257), (t = ro(e, t, n)))
                : null !== t.memoizedState
                  ? ($a(), (t.child = e.child), (t.flags |= 128), (t = null))
                  : ($a(),
                    (o = a.fallback),
                    (i = t.mode),
                    (a = no({ mode: "visible", children: a.children }, i)),
                    ((o = Qr(o, i, n, null)).flags |= 2),
                    (a.return = t),
                    (o.return = t),
                    (a.sibling = o),
                    (t.child = a),
                    ba(t, e.child, null, n),
                    ((a = t.child).memoizedState = Zs(n)),
                    (a.childLanes = Js(e, l, n)),
                    (t.memoizedState = Xs),
                    (t = Hs(null, a)));
            else if ((Ia(t), Od(o))) {
              if ((l = o.nextSibling && o.nextSibling.dataset)) var u = l.dgst;
              ((l = u),
                ((a = Error(r(419))).stack = ""),
                (a.digest = l),
                Nl({ value: a, source: null, stack: null }),
                (t = ro(e, t, n)));
            } else if (
              (Os || Tl(e, t, n, !1), (l = 0 !== (n & e.childLanes)), Os || l)
            ) {
              if (
                null !== (l = vc) &&
                0 !== (a = Fe(l, n)) &&
                a !== c.retryLane
              )
                throw ((c.retryLane = a), Dr(e, a), Zc(l, 0, a), Rs);
              (Rd(o) || uu(), (t = ro(e, t, n)));
            } else
              Rd(o)
                ? ((t.flags |= 192), (t.child = e.child), (t = null))
                : ((e = c.treeContext),
                  (hl = Dd(o.nextSibling)),
                  (pl = t),
                  (ml = !0),
                  (gl = null),
                  (bl = !1),
                  null !== e && fl(t, e),
                  ((t = to(t, a.children)).flags |= 4096));
            return t;
          }
          return i
            ? ($a(),
              (o = a.fallback),
              (i = t.mode),
              (u = (c = e.child).sibling),
              ((a = Vr(c, {
                mode: "hidden",
                children: a.children,
              })).subtreeFlags = 65011712 & c.subtreeFlags),
              null !== u
                ? (o = Vr(u, o))
                : ((o = Qr(o, i, n, null)).flags |= 2),
              (o.return = t),
              (a.return = t),
              (a.sibling = o),
              (t.child = a),
              Hs(null, a),
              (a = t.child),
              null === (o = e.child.memoizedState)
                ? (o = Zs(n))
                : (null !== (i = o.cachePool)
                    ? ((c = Hl._currentValue),
                      (i = i.parent !== c ? { parent: c, pool: c } : i))
                    : (i = ea()),
                  (o = { baseLanes: o.baseLanes | n, cachePool: i })),
              (a.memoizedState = o),
              (a.childLanes = Js(e, l, n)),
              (t.memoizedState = Xs),
              Hs(e.child, a))
            : (Ia(t),
              (e = (n = e.child).sibling),
              ((n = Vr(n, { mode: "visible", children: a.children })).return =
                t),
              (n.sibling = null),
              null !== e &&
                (null === (l = t.deletions)
                  ? ((t.deletions = [e]), (t.flags |= 16))
                  : l.push(e)),
              (t.child = n),
              (t.memoizedState = null),
              n);
        }
        function to(e, t) {
          return (
            ((t = no({ mode: "visible", children: t }, e.mode)).return = e),
            (e.child = t)
          );
        }
        function no(e, t) {
          return (((e = Hr(22, e, null, t)).lanes = 0), e);
        }
        function ro(e, t, n) {
          return (
            ba(t, e.child, null, n),
            ((e = to(t, t.pendingProps.children)).flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function lo(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          (null !== r && (r.lanes |= t), Pl(e.return, t, n));
        }
        function ao(e, t, n, r, l, a) {
          var i = e.memoizedState;
          null === i
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: l,
                treeForkCount: a,
              })
            : ((i.isBackwards = t),
              (i.rendering = null),
              (i.renderingStartTime = 0),
              (i.last = r),
              (i.tail = n),
              (i.tailMode = l),
              (i.treeForkCount = a));
        }
        function io(e, t, n) {
          var r = t.pendingProps,
            l = r.revealOrder,
            a = r.tail;
          r = r.children;
          var i = Ba.current,
            s = !!(2 & i);
          if (
            (s ? ((i = (1 & i) | 2), (t.flags |= 128)) : (i &= 1),
            W(Ba, i),
            Ds(e, t, r, n),
            (r = ml ? nl : 0),
            !s && null !== e && 128 & e.flags)
          )
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && lo(e, n, t);
              else if (19 === e.tag) lo(e, n, t);
              else if (null !== e.child) {
                ((e.child.return = e), (e = e.child));
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              ((e.sibling.return = e.return), (e = e.sibling));
            }
          switch (l) {
            case "forwards":
              for (n = t.child, l = null; null !== n; )
                (null !== (e = n.alternate) && null === Va(e) && (l = n),
                  (n = n.sibling));
              (null === (n = l)
                ? ((l = t.child), (t.child = null))
                : ((l = n.sibling), (n.sibling = null)),
                ao(t, !1, l, n, a, r));
              break;
            case "backwards":
            case "unstable_legacy-backwards":
              for (n = null, l = t.child, t.child = null; null !== l; ) {
                if (null !== (e = l.alternate) && null === Va(e)) {
                  t.child = l;
                  break;
                }
                ((e = l.sibling), (l.sibling = n), (n = l), (l = e));
              }
              ao(t, !0, n, null, a, r);
              break;
            case "together":
              ao(t, !1, null, null, void 0, r);
              break;
            default:
              t.memoizedState = null;
          }
          return t.child;
        }
        function so(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (Ec |= t.lanes),
            0 === (n & t.childLanes))
          ) {
            if (null === e) return null;
            if ((Tl(e, t, n, !1), 0 === (n & t.childLanes))) return null;
          }
          if (null !== e && t.child !== e.child) throw Error(r(153));
          if (null !== t.child) {
            for (
              n = Vr((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              ((e = e.sibling),
                ((n = n.sibling = Vr(e, e.pendingProps)).return = t));
            n.sibling = null;
          }
          return t.child;
        }
        function oo(e, t) {
          return (
            0 !== (e.lanes & t) || !(null === (e = e.dependencies) || !Ll(e))
          );
        }
        function co(e, t, n) {
          if (null !== e)
            if (e.memoizedProps !== t.pendingProps) Os = !0;
            else {
              if (!(oo(e, n) || 128 & t.flags))
                return (
                  (Os = !1),
                  (function (e, t, n) {
                    switch (t.tag) {
                      case 3:
                        (Z(t, t.stateNode.containerInfo),
                          Ml(0, Hl, e.memoizedState.cache),
                          jl());
                        break;
                      case 27:
                      case 5:
                        ee(t);
                        break;
                      case 4:
                        Z(t, t.stateNode.containerInfo);
                        break;
                      case 10:
                        Ml(0, t.type, t.memoizedProps.value);
                        break;
                      case 31:
                        if (null !== t.memoizedState)
                          return ((t.flags |= 128), Fa(t), null);
                        break;
                      case 13:
                        var r = t.memoizedState;
                        if (null !== r)
                          return null !== r.dehydrated
                            ? (Ia(t), (t.flags |= 128), null)
                            : 0 !== (n & t.child.childLanes)
                              ? eo(e, t, n)
                              : (Ia(t),
                                null !== (e = so(e, t, n)) ? e.sibling : null);
                        Ia(t);
                        break;
                      case 19:
                        var l = !!(128 & e.flags);
                        if (
                          ((r = 0 !== (n & t.childLanes)) ||
                            (Tl(e, t, n, !1), (r = 0 !== (n & t.childLanes))),
                          l)
                        ) {
                          if (r) return io(e, t, n);
                          t.flags |= 128;
                        }
                        if (
                          (null !== (l = t.memoizedState) &&
                            ((l.rendering = null),
                            (l.tail = null),
                            (l.lastEffect = null)),
                          W(Ba, Ba.current),
                          r)
                        )
                          break;
                        return null;
                      case 22:
                        return ((t.lanes = 0), $s(e, t, n, t.pendingProps));
                      case 24:
                        Ml(0, Hl, e.memoizedState.cache);
                    }
                    return so(e, t, n);
                  })(e, t, n)
                );
              Os = !!(131072 & e.flags);
            }
          else ((Os = !1), ml && 1048576 & t.flags && cl(t, nl, t.index));
          switch (((t.lanes = 0), t.tag)) {
            case 16:
              e: {
                var l = t.pendingProps;
                if (
                  ((e = sa(t.elementType)),
                  (t.type = e),
                  "function" != typeof e)
                ) {
                  if (null != e) {
                    var a = e.$$typeof;
                    if (a === _) {
                      ((t.tag = 11), (t = Is(null, t, e, l, n)));
                      break e;
                    }
                    if (a === M) {
                      ((t.tag = 14), (t = Fs(null, t, e, l, n)));
                      break e;
                    }
                  }
                  throw ((t = O(e) || e), Error(r(306, t, "")));
                }
                Br(e)
                  ? ((l = _s(e, l)), (t.tag = 1), (t = Gs(null, t, e, l, n)))
                  : ((t.tag = 0), (t = Qs(null, t, e, l, n)));
              }
              return t;
            case 0:
              return Qs(e, t, t.type, t.pendingProps, n);
            case 1:
              return Gs(e, t, (l = t.type), (a = _s(l, t.pendingProps)), n);
            case 3:
              e: {
                if ((Z(t, t.stateNode.containerInfo), null === e))
                  throw Error(r(387));
                l = t.pendingProps;
                var i = t.memoizedState;
                ((a = i.element), ka(e, t), Ea(t, l, null, n));
                var s = t.memoizedState;
                if (
                  ((l = s.cache),
                  Ml(0, Hl, l),
                  l !== i.cache && Al(t, [Hl], n, !0),
                  Ca(),
                  (l = s.element),
                  i.isDehydrated)
                ) {
                  if (
                    ((i = { element: l, isDehydrated: !1, cache: s.cache }),
                    (t.updateQueue.baseState = i),
                    (t.memoizedState = i),
                    256 & t.flags)
                  ) {
                    t = Ys(e, t, l, n);
                    break e;
                  }
                  if (l !== a) {
                    (Nl((a = Zr(Error(r(424)), t))), (t = Ys(e, t, l, n)));
                    break e;
                  }
                  for (
                    e =
                      9 === (e = t.stateNode.containerInfo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      hl = Dd(e.firstChild),
                      pl = t,
                      ml = !0,
                      gl = null,
                      bl = !0,
                      n = va(t, null, l, n),
                      t.child = n;
                    n;

                  )
                    ((n.flags = (-3 & n.flags) | 4096), (n = n.sibling));
                } else {
                  if ((jl(), l === a)) {
                    t = so(e, t, n);
                    break e;
                  }
                  Ds(e, t, l, n);
                }
                t = t.child;
              }
              return t;
            case 26:
              return (
                qs(e, t),
                null === e
                  ? (n = Gd(t.type, null, t.pendingProps, null))
                    ? (t.memoizedState = n)
                    : ml ||
                      ((n = t.type),
                      (e = t.pendingProps),
                      ((l = xd(Y.current).createElement(n))[We] = t),
                      (l[qe] = e),
                      gd(l, n, e),
                      lt(l),
                      (t.stateNode = l))
                  : (t.memoizedState = Gd(
                      t.type,
                      e.memoizedProps,
                      t.pendingProps,
                      e.memoizedState,
                    )),
                null
              );
            case 27:
              return (
                ee(t),
                null === e &&
                  ml &&
                  ((l = t.stateNode = $d(t.type, t.pendingProps, Y.current)),
                  (pl = t),
                  (bl = !0),
                  (a = hl),
                  zd(t.type) ? ((Id = a), (hl = Dd(l.firstChild))) : (hl = a)),
                Ds(e, t, t.pendingProps.children, n),
                qs(e, t),
                null === e && (t.flags |= 4194304),
                t.child
              );
            case 5:
              return (
                null === e &&
                  ml &&
                  ((a = l = hl) &&
                    ((l = (function (e, t, n, r) {
                      for (; 1 === e.nodeType; ) {
                        var l = n;
                        if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                          if (
                            !r &&
                            ("INPUT" !== e.nodeName || "hidden" !== e.type)
                          )
                            break;
                        } else if (r) {
                          if (!e[Ze])
                            switch (t) {
                              case "meta":
                                if (!e.hasAttribute("itemprop")) break;
                                return e;
                              case "link":
                                if (
                                  ("stylesheet" ===
                                    (a = e.getAttribute("rel")) &&
                                    e.hasAttribute("data-precedence")) ||
                                  a !== l.rel ||
                                  e.getAttribute("href") !==
                                    (null == l.href || "" === l.href
                                      ? null
                                      : l.href) ||
                                  e.getAttribute("crossorigin") !==
                                    (null == l.crossOrigin
                                      ? null
                                      : l.crossOrigin) ||
                                  e.getAttribute("title") !==
                                    (null == l.title ? null : l.title)
                                )
                                  break;
                                return e;
                              case "style":
                                if (e.hasAttribute("data-precedence")) break;
                                return e;
                              case "script":
                                if (
                                  ((a = e.getAttribute("src")) !==
                                    (null == l.src ? null : l.src) ||
                                    e.getAttribute("type") !==
                                      (null == l.type ? null : l.type) ||
                                    e.getAttribute("crossorigin") !==
                                      (null == l.crossOrigin
                                        ? null
                                        : l.crossOrigin)) &&
                                  a &&
                                  e.hasAttribute("async") &&
                                  !e.hasAttribute("itemprop")
                                )
                                  break;
                                return e;
                              default:
                                return e;
                            }
                        } else {
                          if ("input" !== t || "hidden" !== e.type) return e;
                          var a = null == l.name ? null : "" + l.name;
                          if (
                            "hidden" === l.type &&
                            e.getAttribute("name") === a
                          )
                            return e;
                        }
                        if (null === (e = Dd(e.nextSibling))) break;
                      }
                      return null;
                    })(l, t.type, t.pendingProps, bl)),
                    null !== l
                      ? ((t.stateNode = l),
                        (pl = t),
                        (hl = Dd(l.firstChild)),
                        (bl = !1),
                        (a = !0))
                      : (a = !1)),
                  a || yl(t)),
                ee(t),
                (a = t.type),
                (i = t.pendingProps),
                (s = null !== e ? e.memoizedProps : null),
                (l = i.children),
                jd(a, i)
                  ? (l = null)
                  : null !== s && jd(a, s) && (t.flags |= 32),
                null !== t.memoizedState &&
                  ((a = li(e, t, si, null, null, n)), (mf._currentValue = a)),
                qs(e, t),
                Ds(e, t, l, n),
                t.child
              );
            case 6:
              return (
                null === e &&
                  ml &&
                  ((e = n = hl) &&
                    ((n = (function (e, t, n) {
                      if ("" === t) return null;
                      for (; 3 !== e.nodeType; )
                        if (
                          ((1 !== e.nodeType ||
                            "INPUT" !== e.nodeName ||
                            "hidden" !== e.type) &&
                            !n) ||
                          null === (e = Dd(e.nextSibling))
                        )
                          return null;
                      return e;
                    })(n, t.pendingProps, bl)),
                    null !== n
                      ? ((t.stateNode = n), (pl = t), (hl = null), (e = !0))
                      : (e = !1)),
                  e || yl(t)),
                null
              );
            case 13:
              return eo(e, t, n);
            case 4:
              return (
                Z(t, t.stateNode.containerInfo),
                (l = t.pendingProps),
                null === e ? (t.child = ba(t, null, l, n)) : Ds(e, t, l, n),
                t.child
              );
            case 11:
              return Is(e, t, t.type, t.pendingProps, n);
            case 7:
              return (Ds(e, t, t.pendingProps, n), t.child);
            case 8:
            case 12:
              return (Ds(e, t, t.pendingProps.children, n), t.child);
            case 10:
              return (
                (l = t.pendingProps),
                Ml(0, t.type, l.value),
                Ds(e, t, l.children, n),
                t.child
              );
            case 9:
              return (
                (a = t.type._context),
                (l = t.pendingProps.children),
                Rl(t),
                (l = l((a = Ol(a)))),
                (t.flags |= 1),
                Ds(e, t, l, n),
                t.child
              );
            case 14:
              return Fs(e, t, t.type, t.pendingProps, n);
            case 15:
              return Us(e, t, t.type, t.pendingProps, n);
            case 19:
              return io(e, t, n);
            case 31:
              return (function (e, t, n) {
                var l = t.pendingProps,
                  a = !!(128 & t.flags);
                if (((t.flags &= -129), null === e)) {
                  if (ml) {
                    if ("hidden" === l.mode)
                      return (
                        (e = Vs(t, l)),
                        (t.lanes = 536870912),
                        Hs(null, e)
                      );
                    if (
                      (Fa(t),
                      (e = hl)
                        ? null !==
                            (e =
                              null !== (e = Ld(e, bl)) && "&" === e.data
                                ? e
                                : null) &&
                          ((t.memoizedState = {
                            dehydrated: e,
                            treeContext:
                              null !== al ? { id: il, overflow: sl } : null,
                            retryLane: 536870912,
                            hydrationErrors: null,
                          }),
                          ((n = Gr(e)).return = t),
                          (t.child = n),
                          (pl = t),
                          (hl = null))
                        : (e = null),
                      null === e)
                    )
                      throw yl(t);
                    return ((t.lanes = 536870912), null);
                  }
                  return Vs(t, l);
                }
                var i = e.memoizedState;
                if (null !== i) {
                  var s = i.dehydrated;
                  if ((Fa(t), a))
                    if (256 & t.flags) ((t.flags &= -257), (t = Ws(e, t, n)));
                    else {
                      if (null === t.memoizedState) throw Error(r(558));
                      ((t.child = e.child), (t.flags |= 128), (t = null));
                    }
                  else if (
                    (Os || Tl(e, t, n, !1),
                    (a = 0 !== (n & e.childLanes)),
                    Os || a)
                  ) {
                    if (
                      null !== (l = vc) &&
                      0 !== (s = Fe(l, n)) &&
                      s !== i.retryLane
                    )
                      throw ((i.retryLane = s), Dr(e, s), Zc(l, 0, s), Rs);
                    (uu(), (t = Ws(e, t, n)));
                  } else
                    ((e = i.treeContext),
                      (hl = Dd(s.nextSibling)),
                      (pl = t),
                      (ml = !0),
                      (gl = null),
                      (bl = !1),
                      null !== e && fl(t, e),
                      ((t = Vs(t, l)).flags |= 4096));
                  return t;
                }
                return (
                  ((e = Vr(e.child, {
                    mode: l.mode,
                    children: l.children,
                  })).ref = t.ref),
                  (t.child = e),
                  (e.return = t),
                  e
                );
              })(e, t, n);
            case 22:
              return $s(e, t, n, t.pendingProps);
            case 24:
              return (
                Rl(t),
                (l = Ol(Hl)),
                null === e
                  ? (null === (a = Zl()) &&
                      ((a = vc),
                      (i = Bl()),
                      (a.pooledCache = i),
                      i.refCount++,
                      null !== i && (a.pooledCacheLanes |= n),
                      (a = i)),
                    (t.memoizedState = { parent: l, cache: a }),
                    xa(t),
                    Ml(0, Hl, a))
                  : (0 !== (e.lanes & n) &&
                      (ka(e, t), Ea(t, null, null, n), Ca()),
                    (a = e.memoizedState),
                    (i = t.memoizedState),
                    a.parent !== l
                      ? ((a = { parent: l, cache: l }),
                        (t.memoizedState = a),
                        0 === t.lanes &&
                          (t.memoizedState = t.updateQueue.baseState = a),
                        Ml(0, Hl, l))
                      : ((l = i.cache),
                        Ml(0, Hl, l),
                        l !== a.cache && Al(t, [Hl], n, !0))),
                Ds(e, t, t.pendingProps.children, n),
                t.child
              );
            case 29:
              throw t.pendingProps;
          }
          throw Error(r(156, t.tag));
        }
        function uo(e) {
          e.flags |= 4;
        }
        function fo(e, t, n, r, l) {
          if (((t = !!(32 & e.mode)) && (t = !1), t)) {
            if (((e.flags |= 16777216), (335544128 & l) === l))
              if (e.stateNode.complete) e.flags |= 8192;
              else {
                if (!su()) throw ((oa = la), na);
                e.flags |= 8192;
              }
          } else e.flags &= -16777217;
        }
        function po(e, t) {
          if ("stylesheet" !== t.type || 4 & t.state.loading)
            e.flags &= -16777217;
          else if (((e.flags |= 16777216), !cf(t))) {
            if (!su()) throw ((oa = la), na);
            e.flags |= 8192;
          }
        }
        function ho(e, t) {
          (null !== t && (e.flags |= 4),
            16384 & e.flags &&
              ((t = 22 !== e.tag ? Le() : 536870912),
              (e.lanes |= t),
              (Ac |= t)));
        }
        function mo(e, t) {
          if (!ml)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  (null !== t.alternate && (n = t), (t = t.sibling));
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  (null !== n.alternate && (r = n), (n = n.sibling));
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function go(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var l = e.child; null !== l; )
              ((n |= l.lanes | l.childLanes),
                (r |= 65011712 & l.subtreeFlags),
                (r |= 65011712 & l.flags),
                (l.return = e),
                (l = l.sibling));
          else
            for (l = e.child; null !== l; )
              ((n |= l.lanes | l.childLanes),
                (r |= l.subtreeFlags),
                (r |= l.flags),
                (l.return = e),
                (l = l.sibling));
          return ((e.subtreeFlags |= r), (e.childLanes = n), t);
        }
        function bo(e, t, n) {
          var l = t.pendingProps;
          switch ((dl(t), t.tag)) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
            case 1:
              return (go(t), null);
            case 3:
              return (
                (n = t.stateNode),
                (l = null),
                null !== e && (l = e.memoizedState.cache),
                t.memoizedState.cache !== l && (t.flags |= 2048),
                zl(Hl),
                J(),
                n.pendingContext &&
                  ((n.context = n.pendingContext), (n.pendingContext = null)),
                (null === e || null === e.child) &&
                  (wl(t)
                    ? uo(t)
                    : null === e ||
                      (e.memoizedState.isDehydrated && !(256 & t.flags)) ||
                      ((t.flags |= 1024), Sl())),
                go(t),
                null
              );
            case 26:
              var a = t.type,
                i = t.memoizedState;
              return (
                null === e
                  ? (uo(t),
                    null !== i ? (go(t), po(t, i)) : (go(t), fo(t, a, 0, 0, n)))
                  : i
                    ? i !== e.memoizedState
                      ? (uo(t), go(t), po(t, i))
                      : (go(t), (t.flags &= -16777217))
                    : ((e = e.memoizedProps) !== l && uo(t),
                      go(t),
                      fo(t, a, 0, 0, n)),
                null
              );
            case 27:
              if (
                (te(t),
                (n = Y.current),
                (a = t.type),
                null !== e && null != t.stateNode)
              )
                e.memoizedProps !== l && uo(t);
              else {
                if (!l) {
                  if (null === t.stateNode) throw Error(r(166));
                  return (go(t), null);
                }
                ((e = K.current),
                  wl(t)
                    ? xl(t)
                    : ((e = $d(a, l, n)), (t.stateNode = e), uo(t)));
              }
              return (go(t), null);
            case 5:
              if ((te(t), (a = t.type), null !== e && null != t.stateNode))
                e.memoizedProps !== l && uo(t);
              else {
                if (!l) {
                  if (null === t.stateNode) throw Error(r(166));
                  return (go(t), null);
                }
                if (((i = K.current), wl(t))) xl(t);
                else {
                  var s = xd(Y.current);
                  switch (i) {
                    case 1:
                      i = s.createElementNS("http://www.w3.org/2000/svg", a);
                      break;
                    case 2:
                      i = s.createElementNS(
                        "http://www.w3.org/1998/Math/MathML",
                        a,
                      );
                      break;
                    default:
                      switch (a) {
                        case "svg":
                          i = s.createElementNS(
                            "http://www.w3.org/2000/svg",
                            a,
                          );
                          break;
                        case "math":
                          i = s.createElementNS(
                            "http://www.w3.org/1998/Math/MathML",
                            a,
                          );
                          break;
                        case "script":
                          (((i = s.createElement("div")).innerHTML =
                            "<script><\/script>"),
                            (i = i.removeChild(i.firstChild)));
                          break;
                        case "select":
                          ((i =
                            "string" == typeof l.is
                              ? s.createElement("select", { is: l.is })
                              : s.createElement("select")),
                            l.multiple
                              ? (i.multiple = !0)
                              : l.size && (i.size = l.size));
                          break;
                        default:
                          i =
                            "string" == typeof l.is
                              ? s.createElement(a, { is: l.is })
                              : s.createElement(a);
                      }
                  }
                  ((i[We] = t), (i[qe] = l));
                  e: for (s = t.child; null !== s; ) {
                    if (5 === s.tag || 6 === s.tag) i.appendChild(s.stateNode);
                    else if (4 !== s.tag && 27 !== s.tag && null !== s.child) {
                      ((s.child.return = s), (s = s.child));
                      continue;
                    }
                    if (s === t) break e;
                    for (; null === s.sibling; ) {
                      if (null === s.return || s.return === t) break e;
                      s = s.return;
                    }
                    ((s.sibling.return = s.return), (s = s.sibling));
                  }
                  t.stateNode = i;
                  e: switch ((gd(i, a, l), a)) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      l = !!l.autoFocus;
                      break e;
                    case "img":
                      l = !0;
                      break e;
                    default:
                      l = !1;
                  }
                  l && uo(t);
                }
              }
              return (
                go(t),
                fo(t, t.type, null === e || e.memoizedProps, t.pendingProps, n),
                null
              );
            case 6:
              if (e && null != t.stateNode) e.memoizedProps !== l && uo(t);
              else {
                if ("string" != typeof l && null === t.stateNode)
                  throw Error(r(166));
                if (((e = Y.current), wl(t))) {
                  if (
                    ((e = t.stateNode),
                    (n = t.memoizedProps),
                    (l = null),
                    null !== (a = pl))
                  )
                    switch (a.tag) {
                      case 27:
                      case 5:
                        l = a.memoizedProps;
                    }
                  ((e[We] = t),
                    (e = !!(
                      e.nodeValue === n ||
                      (null !== l && !0 === l.suppressHydrationWarning) ||
                      pd(e.nodeValue, n)
                    )) || yl(t, !0));
                } else
                  (((e = xd(e).createTextNode(l))[We] = t), (t.stateNode = e));
              }
              return (go(t), null);
            case 31:
              if (
                ((n = t.memoizedState), null === e || null !== e.memoizedState)
              ) {
                if (((l = wl(t)), null !== n)) {
                  if (null === e) {
                    if (!l) throw Error(r(318));
                    if (
                      !(e =
                        null !== (e = t.memoizedState) ? e.dehydrated : null)
                    )
                      throw Error(r(557));
                    e[We] = t;
                  } else
                    (jl(),
                      !(128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (go(t), (e = !1));
                } else
                  ((n = Sl()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = n),
                    (e = !0));
                if (!e) return 256 & t.flags ? (Ha(t), t) : (Ha(t), null);
                if (128 & t.flags) throw Error(r(558));
              }
              return (go(t), null);
            case 13:
              if (
                ((l = t.memoizedState),
                null === e ||
                  (null !== e.memoizedState &&
                    null !== e.memoizedState.dehydrated))
              ) {
                if (((a = wl(t)), null !== l && null !== l.dehydrated)) {
                  if (null === e) {
                    if (!a) throw Error(r(318));
                    if (
                      !(a =
                        null !== (a = t.memoizedState) ? a.dehydrated : null)
                    )
                      throw Error(r(317));
                    a[We] = t;
                  } else
                    (jl(),
                      !(128 & t.flags) && (t.memoizedState = null),
                      (t.flags |= 4));
                  (go(t), (a = !1));
                } else
                  ((a = Sl()),
                    null !== e &&
                      null !== e.memoizedState &&
                      (e.memoizedState.hydrationErrors = a),
                    (a = !0));
                if (!a) return 256 & t.flags ? (Ha(t), t) : (Ha(t), null);
              }
              return (
                Ha(t),
                128 & t.flags
                  ? ((t.lanes = n), t)
                  : ((n = null !== l),
                    (e = null !== e && null !== e.memoizedState),
                    n &&
                      ((a = null),
                      null !== (l = t.child).alternate &&
                        null !== l.alternate.memoizedState &&
                        null !== l.alternate.memoizedState.cachePool &&
                        (a = l.alternate.memoizedState.cachePool.pool),
                      (i = null),
                      null !== l.memoizedState &&
                        null !== l.memoizedState.cachePool &&
                        (i = l.memoizedState.cachePool.pool),
                      i !== a && (l.flags |= 2048)),
                    n !== e && n && (t.child.flags |= 8192),
                    ho(t, t.updateQueue),
                    go(t),
                    null)
              );
            case 4:
              return (
                J(),
                null === e && rd(t.stateNode.containerInfo),
                go(t),
                null
              );
            case 10:
              return (zl(t.type), go(t), null);
            case 19:
              if ((V(Ba), null === (l = t.memoizedState))) return (go(t), null);
              if (((a = !!(128 & t.flags)), null === (i = l.rendering)))
                if (a) mo(l, !1);
                else {
                  if (0 !== Cc || (null !== e && 128 & e.flags))
                    for (e = t.child; null !== e; ) {
                      if (null !== (i = Va(e))) {
                        for (
                          t.flags |= 128,
                            mo(l, !1),
                            e = i.updateQueue,
                            t.updateQueue = e,
                            ho(t, e),
                            t.subtreeFlags = 0,
                            e = n,
                            n = t.child;
                          null !== n;

                        )
                          (Wr(n, e), (n = n.sibling));
                        return (
                          W(Ba, (1 & Ba.current) | 2),
                          ml && ol(t, l.treeForkCount),
                          t.child
                        );
                      }
                      e = e.sibling;
                    }
                  null !== l.tail &&
                    fe() > Ic &&
                    ((t.flags |= 128),
                    (a = !0),
                    mo(l, !1),
                    (t.lanes = 4194304));
                }
              else {
                if (!a)
                  if (null !== (e = Va(i))) {
                    if (
                      ((t.flags |= 128),
                      (a = !0),
                      (e = e.updateQueue),
                      (t.updateQueue = e),
                      ho(t, e),
                      mo(l, !0),
                      null === l.tail &&
                        "hidden" === l.tailMode &&
                        !i.alternate &&
                        !ml)
                    )
                      return (go(t), null);
                  } else
                    2 * fe() - l.renderingStartTime > Ic &&
                      536870912 !== n &&
                      ((t.flags |= 128),
                      (a = !0),
                      mo(l, !1),
                      (t.lanes = 4194304));
                l.isBackwards
                  ? ((i.sibling = t.child), (t.child = i))
                  : (null !== (e = l.last) ? (e.sibling = i) : (t.child = i),
                    (l.last = i));
              }
              return null !== l.tail
                ? ((e = l.tail),
                  (l.rendering = e),
                  (l.tail = e.sibling),
                  (l.renderingStartTime = fe()),
                  (e.sibling = null),
                  (n = Ba.current),
                  W(Ba, a ? (1 & n) | 2 : 1 & n),
                  ml && ol(t, l.treeForkCount),
                  e)
                : (go(t), null);
            case 22:
            case 23:
              return (
                Ha(t),
                Ra(),
                (l = null !== t.memoizedState),
                null !== e
                  ? (null !== e.memoizedState) !== l && (t.flags |= 8192)
                  : l && (t.flags |= 8192),
                l
                  ? !!(536870912 & n) &&
                    !(128 & t.flags) &&
                    (go(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                  : go(t),
                null !== (n = t.updateQueue) && ho(t, n.retryQueue),
                (n = null),
                null !== e &&
                  null !== e.memoizedState &&
                  null !== e.memoizedState.cachePool &&
                  (n = e.memoizedState.cachePool.pool),
                (l = null),
                null !== t.memoizedState &&
                  null !== t.memoizedState.cachePool &&
                  (l = t.memoizedState.cachePool.pool),
                l !== n && (t.flags |= 2048),
                null !== e && V(Xl),
                null
              );
            case 24:
              return (
                (n = null),
                null !== e && (n = e.memoizedState.cache),
                t.memoizedState.cache !== n && (t.flags |= 2048),
                zl(Hl),
                go(t),
                null
              );
            case 25:
            case 30:
              return null;
          }
          throw Error(r(156, t.tag));
        }
        function vo(e, t) {
          switch ((dl(t), t.tag)) {
            case 1:
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 3:
              return (
                zl(Hl),
                J(),
                65536 & (e = t.flags) && !(128 & e)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 26:
            case 27:
            case 5:
              return (te(t), null);
            case 31:
              if (null !== t.memoizedState) {
                if ((Ha(t), null === t.alternate)) throw Error(r(340));
                jl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 13:
              if (
                (Ha(t), null !== (e = t.memoizedState) && null !== e.dehydrated)
              ) {
                if (null === t.alternate) throw Error(r(340));
                jl();
              }
              return 65536 & (e = t.flags)
                ? ((t.flags = (-65537 & e) | 128), t)
                : null;
            case 19:
              return (V(Ba), null);
            case 4:
              return (J(), null);
            case 10:
              return (zl(t.type), null);
            case 22:
            case 23:
              return (
                Ha(t),
                Ra(),
                null !== e && V(Xl),
                65536 & (e = t.flags)
                  ? ((t.flags = (-65537 & e) | 128), t)
                  : null
              );
            case 24:
              return (zl(Hl), null);
            default:
              return null;
          }
        }
        function yo(e, t) {
          switch ((dl(t), t.tag)) {
            case 3:
              (zl(Hl), J());
              break;
            case 26:
            case 27:
            case 5:
              te(t);
              break;
            case 4:
              J();
              break;
            case 31:
              null !== t.memoizedState && Ha(t);
              break;
            case 13:
              Ha(t);
              break;
            case 19:
              V(Ba);
              break;
            case 10:
              zl(t.type);
              break;
            case 22:
            case 23:
              (Ha(t), Ra(), null !== e && V(Xl));
              break;
            case 24:
              zl(Hl);
          }
        }
        function xo(e, t) {
          try {
            var n = t.updateQueue,
              r = null !== n ? n.lastEffect : null;
            if (null !== r) {
              var l = r.next;
              n = l;
              do {
                if ((n.tag & e) === e) {
                  r = void 0;
                  var a = n.create,
                    i = n.inst;
                  ((r = a()), (i.destroy = r));
                }
                n = n.next;
              } while (n !== l);
            }
          } catch (e) {
            Cu(t, t.return, e);
          }
        }
        function ko(e, t, n) {
          try {
            var r = t.updateQueue,
              l = null !== r ? r.lastEffect : null;
            if (null !== l) {
              var a = l.next;
              r = a;
              do {
                if ((r.tag & e) === e) {
                  var i = r.inst,
                    s = i.destroy;
                  if (void 0 !== s) {
                    ((i.destroy = void 0), (l = t));
                    var o = n,
                      c = s;
                    try {
                      c();
                    } catch (e) {
                      Cu(l, o, e);
                    }
                  }
                }
                r = r.next;
              } while (r !== a);
            }
          } catch (e) {
            Cu(t, t.return, e);
          }
        }
        function wo(e) {
          var t = e.updateQueue;
          if (null !== t) {
            var n = e.stateNode;
            try {
              za(t, n);
            } catch (t) {
              Cu(e, e.return, t);
            }
          }
        }
        function jo(e, t, n) {
          ((n.props = _s(e.type, e.memoizedProps)),
            (n.state = e.memoizedState));
          try {
            n.componentWillUnmount();
          } catch (n) {
            Cu(e, t, n);
          }
        }
        function So(e, t) {
          try {
            var n = e.ref;
            if (null !== n) {
              switch (e.tag) {
                case 26:
                case 27:
                case 5:
                  var r = e.stateNode;
                  break;
                default:
                  r = e.stateNode;
              }
              "function" == typeof n ? (e.refCleanup = n(r)) : (n.current = r);
            }
          } catch (n) {
            Cu(e, t, n);
          }
        }
        function No(e, t) {
          var n = e.ref,
            r = e.refCleanup;
          if (null !== n)
            if ("function" == typeof r)
              try {
                r();
              } catch (n) {
                Cu(e, t, n);
              } finally {
                ((e.refCleanup = null),
                  null != (e = e.alternate) && (e.refCleanup = null));
              }
            else if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                Cu(e, t, n);
              }
            else n.current = null;
        }
        function _o(e) {
          var t = e.type,
            n = e.memoizedProps,
            r = e.stateNode;
          try {
            e: switch (t) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n.autoFocus && r.focus();
                break e;
              case "img":
                n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
            }
          } catch (t) {
            Cu(e, e.return, t);
          }
        }
        function Co(e, t, n) {
          try {
            var l = e.stateNode;
            ((function (e, t, n, l) {
              switch (t) {
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                  break;
                case "input":
                  var a = null,
                    i = null,
                    s = null,
                    o = null,
                    c = null,
                    u = null,
                    d = null;
                  for (h in n) {
                    var f = n[h];
                    if (n.hasOwnProperty(h) && null != f)
                      switch (h) {
                        case "checked":
                        case "value":
                          break;
                        case "defaultValue":
                          c = f;
                        default:
                          l.hasOwnProperty(h) || hd(e, t, h, null, l, f);
                      }
                  }
                  for (var p in l) {
                    var h = l[p];
                    if (
                      ((f = n[p]),
                      l.hasOwnProperty(p) && (null != h || null != f))
                    )
                      switch (p) {
                        case "type":
                          i = h;
                          break;
                        case "name":
                          a = h;
                          break;
                        case "checked":
                          u = h;
                          break;
                        case "defaultChecked":
                          d = h;
                          break;
                        case "value":
                          s = h;
                          break;
                        case "defaultValue":
                          o = h;
                          break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != h) throw Error(r(137, t));
                          break;
                        default:
                          h !== f && hd(e, t, p, h, l, f);
                      }
                  }
                  return void wt(e, s, o, c, u, d, i, a);
                case "select":
                  for (i in ((h = s = o = p = null), n))
                    if (((c = n[i]), n.hasOwnProperty(i) && null != c))
                      switch (i) {
                        case "value":
                          break;
                        case "multiple":
                          h = c;
                        default:
                          l.hasOwnProperty(i) || hd(e, t, i, null, l, c);
                      }
                  for (a in l)
                    if (
                      ((i = l[a]),
                      (c = n[a]),
                      l.hasOwnProperty(a) && (null != i || null != c))
                    )
                      switch (a) {
                        case "value":
                          p = i;
                          break;
                        case "defaultValue":
                          o = i;
                          break;
                        case "multiple":
                          s = i;
                        default:
                          i !== c && hd(e, t, a, i, l, c);
                      }
                  return (
                    (t = o),
                    (n = s),
                    (l = h),
                    void (null != p
                      ? Nt(e, !!n, p, !1)
                      : !!l != !!n &&
                        (null != t
                          ? Nt(e, !!n, t, !0)
                          : Nt(e, !!n, n ? [] : "", !1)))
                  );
                case "textarea":
                  for (o in ((h = p = null), n))
                    if (
                      ((a = n[o]),
                      n.hasOwnProperty(o) && null != a && !l.hasOwnProperty(o))
                    )
                      switch (o) {
                        case "value":
                        case "children":
                          break;
                        default:
                          hd(e, t, o, null, l, a);
                      }
                  for (s in l)
                    if (
                      ((a = l[s]),
                      (i = n[s]),
                      l.hasOwnProperty(s) && (null != a || null != i))
                    )
                      switch (s) {
                        case "value":
                          p = a;
                          break;
                        case "defaultValue":
                          h = a;
                          break;
                        case "children":
                          break;
                        case "dangerouslySetInnerHTML":
                          if (null != a) throw Error(r(91));
                          break;
                        default:
                          a !== i && hd(e, t, s, a, l, i);
                      }
                  return void _t(e, p, h);
                case "option":
                  for (var m in n)
                    ((p = n[m]),
                      n.hasOwnProperty(m) &&
                        null != p &&
                        !l.hasOwnProperty(m) &&
                        ("selected" === m
                          ? (e.selected = !1)
                          : hd(e, t, m, null, l, p)));
                  for (c in l)
                    ((p = l[c]),
                      (h = n[c]),
                      !l.hasOwnProperty(c) ||
                        p === h ||
                        (null == p && null == h) ||
                        ("selected" === c
                          ? (e.selected =
                              p &&
                              "function" != typeof p &&
                              "symbol" != typeof p)
                          : hd(e, t, c, p, l, h)));
                  return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                  for (var g in n)
                    ((p = n[g]),
                      n.hasOwnProperty(g) &&
                        null != p &&
                        !l.hasOwnProperty(g) &&
                        hd(e, t, g, null, l, p));
                  for (u in l)
                    if (
                      ((p = l[u]),
                      (h = n[u]),
                      l.hasOwnProperty(u) &&
                        p !== h &&
                        (null != p || null != h))
                    )
                      switch (u) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                          if (null != p) throw Error(r(137, t));
                          break;
                        default:
                          hd(e, t, u, p, l, h);
                      }
                  return;
                default:
                  if (At(t)) {
                    for (var b in n)
                      ((p = n[b]),
                        n.hasOwnProperty(b) &&
                          void 0 !== p &&
                          !l.hasOwnProperty(b) &&
                          md(e, t, b, void 0, l, p));
                    for (d in l)
                      ((p = l[d]),
                        (h = n[d]),
                        !l.hasOwnProperty(d) ||
                          p === h ||
                          (void 0 === p && void 0 === h) ||
                          md(e, t, d, p, l, h));
                    return;
                  }
              }
              for (var v in n)
                ((p = n[v]),
                  n.hasOwnProperty(v) &&
                    null != p &&
                    !l.hasOwnProperty(v) &&
                    hd(e, t, v, null, l, p));
              for (f in l)
                ((p = l[f]),
                  (h = n[f]),
                  !l.hasOwnProperty(f) ||
                    p === h ||
                    (null == p && null == h) ||
                    hd(e, t, f, p, l, h));
            })(l, e.type, n, t),
              (l[qe] = t));
          } catch (t) {
            Cu(e, e.return, t);
          }
        }
        function Eo(e) {
          return (
            5 === e.tag ||
            3 === e.tag ||
            26 === e.tag ||
            (27 === e.tag && zd(e.type)) ||
            4 === e.tag
          );
        }
        function Mo(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || Eo(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (
                (27 === e.tag && zd(e.type)) ||
                2 & e.flags ||
                null === e.child ||
                4 === e.tag
              )
                continue e;
              ((e.child.return = e), (e = e.child));
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function zo(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode),
              t
                ? (9 === n.nodeType
                    ? n.body
                    : "HTML" === n.nodeName
                      ? n.ownerDocument.body
                      : n
                  ).insertBefore(e, t)
                : ((t =
                    9 === n.nodeType
                      ? n.body
                      : "HTML" === n.nodeName
                        ? n.ownerDocument.body
                        : n).appendChild(e),
                  null != (n = n._reactRootContainer) ||
                    null !== t.onclick ||
                    (t.onclick = Ot)));
          else if (
            4 !== r &&
            (27 === r && zd(e.type) && ((n = e.stateNode), (t = null)),
            null !== (e = e.child))
          )
            for (zo(e, t, n), e = e.sibling; null !== e; )
              (zo(e, t, n), (e = e.sibling));
        }
        function Po(e, t, n) {
          var r = e.tag;
          if (5 === r || 6 === r)
            ((e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e));
          else if (
            4 !== r &&
            (27 === r && zd(e.type) && (n = e.stateNode),
            null !== (e = e.child))
          )
            for (Po(e, t, n), e = e.sibling; null !== e; )
              (Po(e, t, n), (e = e.sibling));
        }
        function Ao(e) {
          var t = e.stateNode,
            n = e.memoizedProps;
          try {
            for (var r = e.type, l = t.attributes; l.length; )
              t.removeAttributeNode(l[0]);
            (gd(t, r, n), (t[We] = e), (t[qe] = n));
          } catch (t) {
            Cu(e, e.return, t);
          }
        }
        var To = !1,
          Lo = !1,
          Ro = !1,
          Oo = "function" == typeof WeakSet ? WeakSet : Set,
          Do = null;
        function Io(e, t, n) {
          var r = n.flags;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              (Zo(e, n), 4 & r && xo(5, n));
              break;
            case 1:
              if ((Zo(e, n), 4 & r))
                if (((e = n.stateNode), null === t))
                  try {
                    e.componentDidMount();
                  } catch (e) {
                    Cu(n, n.return, e);
                  }
                else {
                  var l = _s(n.type, t.memoizedProps);
                  t = t.memoizedState;
                  try {
                    e.componentDidUpdate(
                      l,
                      t,
                      e.__reactInternalSnapshotBeforeUpdate,
                    );
                  } catch (e) {
                    Cu(n, n.return, e);
                  }
                }
              (64 & r && wo(n), 512 & r && So(n, n.return));
              break;
            case 3:
              if ((Zo(e, n), 64 & r && null !== (e = n.updateQueue))) {
                if (((t = null), null !== n.child))
                  switch (n.child.tag) {
                    case 27:
                    case 5:
                    case 1:
                      t = n.child.stateNode;
                  }
                try {
                  za(e, t);
                } catch (e) {
                  Cu(n, n.return, e);
                }
              }
              break;
            case 27:
              null === t && 4 & r && Ao(n);
            case 26:
            case 5:
              (Zo(e, n),
                null === t && 4 & r && _o(n),
                512 & r && So(n, n.return));
              break;
            case 12:
              Zo(e, n);
              break;
            case 31:
              (Zo(e, n), 4 & r && Vo(e, n));
              break;
            case 13:
              (Zo(e, n),
                4 & r && Wo(e, n),
                64 & r &&
                  null !== (e = n.memoizedState) &&
                  null !== (e = e.dehydrated) &&
                  (function (e, t) {
                    var n = e.ownerDocument;
                    if ("$~" === e.data) e._reactRetry = t;
                    else if ("$?" !== e.data || "loading" !== n.readyState) t();
                    else {
                      var r = function () {
                        (t(), n.removeEventListener("DOMContentLoaded", r));
                      };
                      (n.addEventListener("DOMContentLoaded", r),
                        (e._reactRetry = r));
                    }
                  })(e, (n = Pu.bind(null, n))));
              break;
            case 22:
              if (!(r = null !== n.memoizedState || To)) {
                ((t = (null !== t && null !== t.memoizedState) || Lo),
                  (l = To));
                var a = Lo;
                ((To = r),
                  (Lo = t) && !a
                    ? ec(e, n, !!(8772 & n.subtreeFlags))
                    : Zo(e, n),
                  (To = l),
                  (Lo = a));
              }
              break;
            case 30:
              break;
            default:
              Zo(e, n);
          }
        }
        function Fo(e) {
          var t = e.alternate;
          (null !== t && ((e.alternate = null), Fo(t)),
            (e.child = null),
            (e.deletions = null),
            (e.sibling = null),
            5 === e.tag && null !== (t = e.stateNode) && Je(t),
            (e.stateNode = null),
            (e.return = null),
            (e.dependencies = null),
            (e.memoizedProps = null),
            (e.memoizedState = null),
            (e.pendingProps = null),
            (e.stateNode = null),
            (e.updateQueue = null));
        }
        var Uo = null,
          $o = !1;
        function Ho(e, t, n) {
          for (n = n.child; null !== n; ) (Bo(e, t, n), (n = n.sibling));
        }
        function Bo(e, t, n) {
          if (we && "function" == typeof we.onCommitFiberUnmount)
            try {
              we.onCommitFiberUnmount(ke, n);
            } catch {}
          switch (n.tag) {
            case 26:
              (Lo || No(n, t),
                Ho(e, t, n),
                n.memoizedState
                  ? n.memoizedState.count--
                  : n.stateNode && (n = n.stateNode).parentNode.removeChild(n));
              break;
            case 27:
              Lo || No(n, t);
              var r = Uo,
                l = $o;
              (zd(n.type) && ((Uo = n.stateNode), ($o = !1)),
                Ho(e, t, n),
                Hd(n.stateNode),
                (Uo = r),
                ($o = l));
              break;
            case 5:
              Lo || No(n, t);
            case 6:
              if (
                ((r = Uo),
                (l = $o),
                (Uo = null),
                Ho(e, t, n),
                ($o = l),
                null !== (Uo = r))
              )
                if ($o)
                  try {
                    (9 === Uo.nodeType
                      ? Uo.body
                      : "HTML" === Uo.nodeName
                        ? Uo.ownerDocument.body
                        : Uo
                    ).removeChild(n.stateNode);
                  } catch (e) {
                    Cu(n, t, e);
                  }
                else
                  try {
                    Uo.removeChild(n.stateNode);
                  } catch (e) {
                    Cu(n, t, e);
                  }
              break;
            case 18:
              null !== Uo &&
                ($o
                  ? (Pd(
                      9 === (e = Uo).nodeType
                        ? e.body
                        : "HTML" === e.nodeName
                          ? e.ownerDocument.body
                          : e,
                      n.stateNode,
                    ),
                    Gf(e))
                  : Pd(Uo, n.stateNode));
              break;
            case 4:
              ((r = Uo),
                (l = $o),
                (Uo = n.stateNode.containerInfo),
                ($o = !0),
                Ho(e, t, n),
                (Uo = r),
                ($o = l));
              break;
            case 0:
            case 11:
            case 14:
            case 15:
              (ko(2, n, t), Lo || ko(4, n, t), Ho(e, t, n));
              break;
            case 1:
              (Lo ||
                (No(n, t),
                "function" == typeof (r = n.stateNode).componentWillUnmount &&
                  jo(n, t, r)),
                Ho(e, t, n));
              break;
            case 21:
              Ho(e, t, n);
              break;
            case 22:
              ((Lo = (r = Lo) || null !== n.memoizedState),
                Ho(e, t, n),
                (Lo = r));
              break;
            default:
              Ho(e, t, n);
          }
        }
        function Vo(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState)
          ) {
            e = e.dehydrated;
            try {
              Gf(e);
            } catch (e) {
              Cu(t, t.return, e);
            }
          }
        }
        function Wo(e, t) {
          if (
            null === t.memoizedState &&
            null !== (e = t.alternate) &&
            null !== (e = e.memoizedState) &&
            null !== (e = e.dehydrated)
          )
            try {
              Gf(e);
            } catch (e) {
              Cu(t, t.return, e);
            }
        }
        function qo(e, t) {
          var n = (function (e) {
            switch (e.tag) {
              case 31:
              case 13:
              case 19:
                var t = e.stateNode;
                return (null === t && (t = e.stateNode = new Oo()), t);
              case 22:
                return (
                  null === (t = (e = e.stateNode)._retryCache) &&
                    (t = e._retryCache = new Oo()),
                  t
                );
              default:
                throw Error(r(435, e.tag));
            }
          })(e);
          t.forEach(function (t) {
            if (!n.has(t)) {
              n.add(t);
              var r = Au.bind(null, e, t);
              t.then(r, r);
            }
          });
        }
        function Qo(e, t) {
          var n = t.deletions;
          if (null !== n)
            for (var l = 0; l < n.length; l++) {
              var a = n[l],
                i = e,
                s = t,
                o = s;
              e: for (; null !== o; ) {
                switch (o.tag) {
                  case 27:
                    if (zd(o.type)) {
                      ((Uo = o.stateNode), ($o = !1));
                      break e;
                    }
                    break;
                  case 5:
                    ((Uo = o.stateNode), ($o = !1));
                    break e;
                  case 3:
                  case 4:
                    ((Uo = o.stateNode.containerInfo), ($o = !0));
                    break e;
                }
                o = o.return;
              }
              if (null === Uo) throw Error(r(160));
              (Bo(i, s, a),
                (Uo = null),
                ($o = !1),
                null !== (i = a.alternate) && (i.return = null),
                (a.return = null));
            }
          if (13886 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (Go(t, e), (t = t.sibling));
        }
        var Ko = null;
        function Go(e, t) {
          var n = e.alternate,
            l = e.flags;
          switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Qo(t, e),
                Yo(e),
                4 & l && (ko(3, e, e.return), xo(3, e), ko(5, e, e.return)));
              break;
            case 1:
              (Qo(t, e),
                Yo(e),
                512 & l && (Lo || null === n || No(n, n.return)),
                64 & l &&
                  To &&
                  null !== (e = e.updateQueue) &&
                  null !== (l = e.callbacks) &&
                  ((n = e.shared.hiddenCallbacks),
                  (e.shared.hiddenCallbacks = null === n ? l : n.concat(l))));
              break;
            case 26:
              var a = Ko;
              if (
                (Qo(t, e),
                Yo(e),
                512 & l && (Lo || null === n || No(n, n.return)),
                4 & l)
              ) {
                var i = null !== n ? n.memoizedState : null;
                if (((l = e.memoizedState), null === n))
                  if (null === l)
                    if (null === e.stateNode) {
                      e: {
                        ((l = e.type),
                          (n = e.memoizedProps),
                          (a = a.ownerDocument || a));
                        t: switch (l) {
                          case "title":
                            ((!(i = a.getElementsByTagName("title")[0]) ||
                              i[Ze] ||
                              i[We] ||
                              "http://www.w3.org/2000/svg" === i.namespaceURI ||
                              i.hasAttribute("itemprop")) &&
                              ((i = a.createElement(l)),
                              a.head.insertBefore(
                                i,
                                a.querySelector("head > title"),
                              )),
                              gd(i, l, n),
                              (i[We] = e),
                              lt(i),
                              (l = i));
                            break e;
                          case "link":
                            var s = sf("link", "href", a).get(
                              l + (n.href || ""),
                            );
                            if (s)
                              for (var o = 0; o < s.length; o++)
                                if (
                                  (i = s[o]).getAttribute("href") ===
                                    (null == n.href || "" === n.href
                                      ? null
                                      : n.href) &&
                                  i.getAttribute("rel") ===
                                    (null == n.rel ? null : n.rel) &&
                                  i.getAttribute("title") ===
                                    (null == n.title ? null : n.title) &&
                                  i.getAttribute("crossorigin") ===
                                    (null == n.crossOrigin
                                      ? null
                                      : n.crossOrigin)
                                ) {
                                  s.splice(o, 1);
                                  break t;
                                }
                            (gd((i = a.createElement(l)), l, n),
                              a.head.appendChild(i));
                            break;
                          case "meta":
                            if (
                              (s = sf("meta", "content", a).get(
                                l + (n.content || ""),
                              ))
                            )
                              for (o = 0; o < s.length; o++)
                                if (
                                  (i = s[o]).getAttribute("content") ===
                                    (null == n.content
                                      ? null
                                      : "" + n.content) &&
                                  i.getAttribute("name") ===
                                    (null == n.name ? null : n.name) &&
                                  i.getAttribute("property") ===
                                    (null == n.property ? null : n.property) &&
                                  i.getAttribute("http-equiv") ===
                                    (null == n.httpEquiv
                                      ? null
                                      : n.httpEquiv) &&
                                  i.getAttribute("charset") ===
                                    (null == n.charSet ? null : n.charSet)
                                ) {
                                  s.splice(o, 1);
                                  break t;
                                }
                            (gd((i = a.createElement(l)), l, n),
                              a.head.appendChild(i));
                            break;
                          default:
                            throw Error(r(468, l));
                        }
                        ((i[We] = e), lt(i), (l = i));
                      }
                      e.stateNode = l;
                    } else of(a, e.type, e.stateNode);
                  else e.stateNode = tf(a, l, e.memoizedProps);
                else
                  i !== l
                    ? (null === i
                        ? null !== n.stateNode &&
                          (n = n.stateNode).parentNode.removeChild(n)
                        : i.count--,
                      null === l
                        ? of(a, e.type, e.stateNode)
                        : tf(a, l, e.memoizedProps))
                    : null === l &&
                      null !== e.stateNode &&
                      Co(e, e.memoizedProps, n.memoizedProps);
              }
              break;
            case 27:
              (Qo(t, e),
                Yo(e),
                512 & l && (Lo || null === n || No(n, n.return)),
                null !== n && 4 & l && Co(e, e.memoizedProps, n.memoizedProps));
              break;
            case 5:
              if (
                (Qo(t, e),
                Yo(e),
                512 & l && (Lo || null === n || No(n, n.return)),
                32 & e.flags)
              ) {
                a = e.stateNode;
                try {
                  Et(a, "");
                } catch (t) {
                  Cu(e, e.return, t);
                }
              }
              (4 & l &&
                null != e.stateNode &&
                Co(e, (a = e.memoizedProps), null !== n ? n.memoizedProps : a),
                1024 & l && (Ro = !0));
              break;
            case 6:
              if ((Qo(t, e), Yo(e), 4 & l)) {
                if (null === e.stateNode) throw Error(r(162));
                ((l = e.memoizedProps), (n = e.stateNode));
                try {
                  n.nodeValue = l;
                } catch (t) {
                  Cu(e, e.return, t);
                }
              }
              break;
            case 3:
              if (
                ((af = null),
                (a = Ko),
                (Ko = Wd(t.containerInfo)),
                Qo(t, e),
                (Ko = a),
                Yo(e),
                4 & l && null !== n && n.memoizedState.isDehydrated)
              )
                try {
                  Gf(t.containerInfo);
                } catch (t) {
                  Cu(e, e.return, t);
                }
              Ro && ((Ro = !1), Xo(e));
              break;
            case 4:
              ((l = Ko),
                (Ko = Wd(e.stateNode.containerInfo)),
                Qo(t, e),
                Yo(e),
                (Ko = l));
              break;
            case 12:
            default:
              (Qo(t, e), Yo(e));
              break;
            case 31:
            case 19:
              (Qo(t, e),
                Yo(e),
                4 & l &&
                  null !== (l = e.updateQueue) &&
                  ((e.updateQueue = null), qo(e, l)));
              break;
            case 13:
              (Qo(t, e),
                Yo(e),
                8192 & e.child.flags &&
                  (null !== e.memoizedState) !=
                    (null !== n && null !== n.memoizedState) &&
                  (Oc = fe()),
                4 & l &&
                  null !== (l = e.updateQueue) &&
                  ((e.updateQueue = null), qo(e, l)));
              break;
            case 22:
              a = null !== e.memoizedState;
              var c = null !== n && null !== n.memoizedState,
                u = To,
                d = Lo;
              if (
                ((To = u || a),
                (Lo = d || c),
                Qo(t, e),
                (Lo = d),
                (To = u),
                Yo(e),
                8192 & l)
              )
                e: for (
                  t = e.stateNode,
                    t._visibility = a ? -2 & t._visibility : 1 | t._visibility,
                    a && (null === n || c || To || Lo || Jo(e)),
                    n = null,
                    t = e;
                  ;

                ) {
                  if (5 === t.tag || 26 === t.tag) {
                    if (null === n) {
                      c = n = t;
                      try {
                        if (((i = c.stateNode), a))
                          "function" == typeof (s = i.style).setProperty
                            ? s.setProperty("display", "none", "important")
                            : (s.display = "none");
                        else {
                          o = c.stateNode;
                          var f = c.memoizedProps.style,
                            p =
                              null != f && f.hasOwnProperty("display")
                                ? f.display
                                : null;
                          o.style.display =
                            null == p || "boolean" == typeof p
                              ? ""
                              : ("" + p).trim();
                        }
                      } catch (e) {
                        Cu(c, c.return, e);
                      }
                    }
                  } else if (6 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        c.stateNode.nodeValue = a ? "" : c.memoizedProps;
                      } catch (e) {
                        Cu(c, c.return, e);
                      }
                    }
                  } else if (18 === t.tag) {
                    if (null === n) {
                      c = t;
                      try {
                        var h = c.stateNode;
                        a ? Ad(h, !0) : Ad(c.stateNode, !1);
                      } catch (e) {
                        Cu(c, c.return, e);
                      }
                    }
                  } else if (
                    ((22 !== t.tag && 23 !== t.tag) ||
                      null === t.memoizedState ||
                      t === e) &&
                    null !== t.child
                  ) {
                    ((t.child.return = t), (t = t.child));
                    continue;
                  }
                  if (t === e) break e;
                  for (; null === t.sibling; ) {
                    if (null === t.return || t.return === e) break e;
                    (n === t && (n = null), (t = t.return));
                  }
                  (n === t && (n = null),
                    (t.sibling.return = t.return),
                    (t = t.sibling));
                }
              4 & l &&
                null !== (l = e.updateQueue) &&
                null !== (n = l.retryQueue) &&
                ((l.retryQueue = null), qo(e, n));
            case 30:
            case 21:
          }
        }
        function Yo(e) {
          var t = e.flags;
          if (2 & t) {
            try {
              for (var n, l = e.return; null !== l; ) {
                if (Eo(l)) {
                  n = l;
                  break;
                }
                l = l.return;
              }
              if (null == n) throw Error(r(160));
              switch (n.tag) {
                case 27:
                  var a = n.stateNode;
                  Po(e, Mo(e), a);
                  break;
                case 5:
                  var i = n.stateNode;
                  (32 & n.flags && (Et(i, ""), (n.flags &= -33)),
                    Po(e, Mo(e), i));
                  break;
                case 3:
                case 4:
                  var s = n.stateNode.containerInfo;
                  zo(e, Mo(e), s);
                  break;
                default:
                  throw Error(r(161));
              }
            } catch (t) {
              Cu(e, e.return, t);
            }
            e.flags &= -3;
          }
          4096 & t && (e.flags &= -4097);
        }
        function Xo(e) {
          if (1024 & e.subtreeFlags)
            for (e = e.child; null !== e; ) {
              var t = e;
              (Xo(t),
                5 === t.tag && 1024 & t.flags && t.stateNode.reset(),
                (e = e.sibling));
            }
        }
        function Zo(e, t) {
          if (8772 & t.subtreeFlags)
            for (t = t.child; null !== t; )
              (Io(e, t.alternate, t), (t = t.sibling));
        }
        function Jo(e) {
          for (e = e.child; null !== e; ) {
            var t = e;
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                (ko(4, t, t.return), Jo(t));
                break;
              case 1:
                No(t, t.return);
                var n = t.stateNode;
                ("function" == typeof n.componentWillUnmount &&
                  jo(t, t.return, n),
                  Jo(t));
                break;
              case 27:
                Hd(t.stateNode);
              case 26:
              case 5:
                (No(t, t.return), Jo(t));
                break;
              case 22:
                null === t.memoizedState && Jo(t);
                break;
              default:
                Jo(t);
            }
            e = e.sibling;
          }
        }
        function ec(e, t, n) {
          for (n = n && !!(8772 & t.subtreeFlags), t = t.child; null !== t; ) {
            var r = t.alternate,
              l = e,
              a = t,
              i = a.flags;
            switch (a.tag) {
              case 0:
              case 11:
              case 15:
                (ec(l, a, n), xo(4, a));
                break;
              case 1:
                if (
                  (ec(l, a, n),
                  "function" ==
                    typeof (l = (r = a).stateNode).componentDidMount)
                )
                  try {
                    l.componentDidMount();
                  } catch (e) {
                    Cu(r, r.return, e);
                  }
                if (null !== (l = (r = a).updateQueue)) {
                  var s = r.stateNode;
                  try {
                    var o = l.shared.hiddenCallbacks;
                    if (null !== o)
                      for (
                        l.shared.hiddenCallbacks = null, l = 0;
                        l < o.length;
                        l++
                      )
                        Ma(o[l], s);
                  } catch (e) {
                    Cu(r, r.return, e);
                  }
                }
                (n && 64 & i && wo(a), So(a, a.return));
                break;
              case 27:
                Ao(a);
              case 26:
              case 5:
                (ec(l, a, n),
                  n && null === r && 4 & i && _o(a),
                  So(a, a.return));
                break;
              case 12:
                ec(l, a, n);
                break;
              case 31:
                (ec(l, a, n), n && 4 & i && Vo(l, a));
                break;
              case 13:
                (ec(l, a, n), n && 4 & i && Wo(l, a));
                break;
              case 22:
                (null === a.memoizedState && ec(l, a, n), So(a, a.return));
                break;
              case 30:
                break;
              default:
                ec(l, a, n);
            }
            t = t.sibling;
          }
        }
        function tc(e, t) {
          var n = null;
          (null !== e &&
            null !== e.memoizedState &&
            null !== e.memoizedState.cachePool &&
            (n = e.memoizedState.cachePool.pool),
            (e = null),
            null !== t.memoizedState &&
              null !== t.memoizedState.cachePool &&
              (e = t.memoizedState.cachePool.pool),
            e !== n && (null != e && e.refCount++, null != n && Vl(n)));
        }
        function nc(e, t) {
          ((e = null),
            null !== t.alternate && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache) !== e &&
              (t.refCount++, null != e && Vl(e)));
        }
        function rc(e, t, n, r) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) (lc(e, t, n, r), (t = t.sibling));
        }
        function lc(e, t, n, r) {
          var l = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              (rc(e, t, n, r), 2048 & l && xo(9, t));
              break;
            case 1:
            case 31:
            case 13:
            default:
              rc(e, t, n, r);
              break;
            case 3:
              (rc(e, t, n, r),
                2048 & l &&
                  ((e = null),
                  null !== t.alternate && (e = t.alternate.memoizedState.cache),
                  (t = t.memoizedState.cache) !== e &&
                    (t.refCount++, null != e && Vl(e))));
              break;
            case 12:
              if (2048 & l) {
                (rc(e, t, n, r), (e = t.stateNode));
                try {
                  var a = t.memoizedProps,
                    i = a.id,
                    s = a.onPostCommit;
                  "function" == typeof s &&
                    s(
                      i,
                      null === t.alternate ? "mount" : "update",
                      e.passiveEffectDuration,
                      -0,
                    );
                } catch (e) {
                  Cu(t, t.return, e);
                }
              } else rc(e, t, n, r);
              break;
            case 23:
              break;
            case 22:
              ((a = t.stateNode),
                (i = t.alternate),
                null !== t.memoizedState
                  ? 2 & a._visibility
                    ? rc(e, t, n, r)
                    : ic(e, t)
                  : 2 & a._visibility
                    ? rc(e, t, n, r)
                    : ((a._visibility |= 2),
                      ac(e, t, n, r, !!(10256 & t.subtreeFlags) || !1)),
                2048 & l && tc(i, t));
              break;
            case 24:
              (rc(e, t, n, r), 2048 & l && nc(t.alternate, t));
          }
        }
        function ac(e, t, n, r, l) {
          for (
            l = l && (!!(10256 & t.subtreeFlags) || !1), t = t.child;
            null !== t;

          ) {
            var a = e,
              i = t,
              s = n,
              o = r,
              c = i.flags;
            switch (i.tag) {
              case 0:
              case 11:
              case 15:
                (ac(a, i, s, o, l), xo(8, i));
                break;
              case 23:
                break;
              case 22:
                var u = i.stateNode;
                (null !== i.memoizedState
                  ? 2 & u._visibility
                    ? ac(a, i, s, o, l)
                    : ic(a, i)
                  : ((u._visibility |= 2), ac(a, i, s, o, l)),
                  l && 2048 & c && tc(i.alternate, i));
                break;
              case 24:
                (ac(a, i, s, o, l), l && 2048 & c && nc(i.alternate, i));
                break;
              default:
                ac(a, i, s, o, l);
            }
            t = t.sibling;
          }
        }
        function ic(e, t) {
          if (10256 & t.subtreeFlags)
            for (t = t.child; null !== t; ) {
              var n = e,
                r = t,
                l = r.flags;
              switch (r.tag) {
                case 22:
                  (ic(n, r), 2048 & l && tc(r.alternate, r));
                  break;
                case 24:
                  (ic(n, r), 2048 & l && nc(r.alternate, r));
                  break;
                default:
                  ic(n, r);
              }
              t = t.sibling;
            }
        }
        var sc = 8192;
        function oc(e, t, n) {
          if (e.subtreeFlags & sc)
            for (e = e.child; null !== e; ) (cc(e, t, n), (e = e.sibling));
        }
        function cc(e, t, n) {
          switch (e.tag) {
            case 26:
              (oc(e, t, n),
                e.flags & sc &&
                  null !== e.memoizedState &&
                  (function (e, t, n, r) {
                    if (
                      !(
                        "stylesheet" !== n.type ||
                        ("string" == typeof r.media &&
                          !1 === matchMedia(r.media).matches) ||
                        4 & n.state.loading
                      )
                    ) {
                      if (null === n.instance) {
                        var l = Yd(r.href),
                          a = t.querySelector(Xd(l));
                        if (a)
                          return (
                            null !== (t = a._p) &&
                              "object" == typeof t &&
                              "function" == typeof t.then &&
                              (e.count++, (e = df.bind(e)), t.then(e, e)),
                            (n.state.loading |= 4),
                            (n.instance = a),
                            void lt(a)
                          );
                        ((a = t.ownerDocument || t),
                          (r = Zd(r)),
                          (l = Bd.get(l)) && rf(r, l),
                          lt((a = a.createElement("link"))));
                        var i = a;
                        ((i._p = new Promise(function (e, t) {
                          ((i.onload = e), (i.onerror = t));
                        })),
                          gd(a, "link", r),
                          (n.instance = a));
                      }
                      (null === e.stylesheets && (e.stylesheets = new Map()),
                        e.stylesheets.set(n, t),
                        (t = n.state.preload) &&
                          !(3 & n.state.loading) &&
                          (e.count++,
                          (n = df.bind(e)),
                          t.addEventListener("load", n),
                          t.addEventListener("error", n)));
                    }
                  })(n, Ko, e.memoizedState, e.memoizedProps));
              break;
            case 5:
            default:
              oc(e, t, n);
              break;
            case 3:
            case 4:
              var r = Ko;
              ((Ko = Wd(e.stateNode.containerInfo)), oc(e, t, n), (Ko = r));
              break;
            case 22:
              null === e.memoizedState &&
                (null !== (r = e.alternate) && null !== r.memoizedState
                  ? ((r = sc), (sc = 16777216), oc(e, t, n), (sc = r))
                  : oc(e, t, n));
          }
        }
        function uc(e) {
          var t = e.alternate;
          if (null !== t && null !== (e = t.child)) {
            t.child = null;
            do {
              ((t = e.sibling), (e.sibling = null), (e = t));
            } while (null !== e);
          }
        }
        function dc(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Do = r), hc(r, e));
              }
            uc(e);
          }
          if (10256 & e.subtreeFlags)
            for (e = e.child; null !== e; ) (fc(e), (e = e.sibling));
        }
        function fc(e) {
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              (dc(e), 2048 & e.flags && ko(9, e, e.return));
              break;
            case 3:
            case 12:
            default:
              dc(e);
              break;
            case 22:
              var t = e.stateNode;
              null !== e.memoizedState &&
              2 & t._visibility &&
              (null === e.return || 13 !== e.return.tag)
                ? ((t._visibility &= -3), pc(e))
                : dc(e);
          }
        }
        function pc(e) {
          var t = e.deletions;
          if (16 & e.flags) {
            if (null !== t)
              for (var n = 0; n < t.length; n++) {
                var r = t[n];
                ((Do = r), hc(r, e));
              }
            uc(e);
          }
          for (e = e.child; null !== e; ) {
            switch ((t = e).tag) {
              case 0:
              case 11:
              case 15:
                (ko(8, t, t.return), pc(t));
                break;
              case 22:
                2 & (n = t.stateNode)._visibility &&
                  ((n._visibility &= -3), pc(t));
                break;
              default:
                pc(t);
            }
            e = e.sibling;
          }
        }
        function hc(e, t) {
          for (; null !== Do; ) {
            var n = Do;
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                ko(8, n, t);
                break;
              case 23:
              case 22:
                if (
                  null !== n.memoizedState &&
                  null !== n.memoizedState.cachePool
                ) {
                  var r = n.memoizedState.cachePool.pool;
                  null != r && r.refCount++;
                }
                break;
              case 24:
                Vl(n.memoizedState.cache);
            }
            if (null !== (r = n.child)) ((r.return = n), (Do = r));
            else
              e: for (n = e; null !== Do; ) {
                var l = (r = Do).sibling,
                  a = r.return;
                if ((Fo(r), r === n)) {
                  Do = null;
                  break e;
                }
                if (null !== l) {
                  ((l.return = a), (Do = l));
                  break e;
                }
                Do = a;
              }
          }
        }
        var mc = {
            getCacheForType: function (e) {
              var t = Ol(Hl),
                n = t.data.get(e);
              return (void 0 === n && ((n = e()), t.data.set(e, n)), n);
            },
            cacheSignal: function () {
              return Ol(Hl).controller.signal;
            },
          },
          gc = "function" == typeof WeakMap ? WeakMap : Map,
          bc = 0,
          vc = null,
          yc = null,
          xc = 0,
          kc = 0,
          wc = null,
          jc = !1,
          Sc = !1,
          Nc = !1,
          _c = 0,
          Cc = 0,
          Ec = 0,
          Mc = 0,
          zc = 0,
          Pc = 0,
          Ac = 0,
          Tc = null,
          Lc = null,
          Rc = !1,
          Oc = 0,
          Dc = 0,
          Ic = 1 / 0,
          Fc = null,
          Uc = null,
          $c = 0,
          Hc = null,
          Bc = null,
          Vc = 0,
          Wc = 0,
          qc = null,
          Qc = null,
          Kc = 0,
          Gc = null;
        function Yc() {
          return 2 & bc && 0 !== xc ? xc & -xc : null !== I.T ? qu() : He();
        }
        function Xc() {
          if (0 === Pc)
            if (536870912 & xc && !ml) Pc = 536870912;
            else {
              var e = Ee;
              (!(3932160 & (Ee <<= 1)) && (Ee = 262144), (Pc = e));
            }
          return (null !== (e = Oa.current) && (e.flags |= 32), Pc);
        }
        function Zc(e, t, n) {
          (((e === vc && (2 === kc || 9 === kc)) ||
            null !== e.cancelPendingCommit) &&
            (au(e, 0), nu(e, xc, Pc, !1)),
            Oe(e, n),
            (!(2 & bc) || e !== vc) &&
              (e === vc &&
                (!(2 & bc) && (Mc |= n), 4 === Cc && nu(e, xc, Pc, !1)),
              Fu(e)));
        }
        function Jc(e, t, n) {
          if (6 & bc) throw Error(r(327));
          for (
            var l =
                (!n && !(127 & t) && 0 === (t & e.expiredLanes)) || Ae(e, t),
              a = l
                ? (function (e, t) {
                    var n = bc;
                    bc |= 2;
                    var l = ou(),
                      a = cu();
                    vc !== e || xc !== t
                      ? ((Fc = null), (Ic = fe() + 500), au(e, t))
                      : (Sc = Ae(e, t));
                    e: for (;;)
                      try {
                        if (0 !== kc && null !== yc) {
                          t = yc;
                          var i = wc;
                          t: switch (kc) {
                            case 1:
                              ((kc = 0), (wc = null), gu(e, t, i, 1));
                              break;
                            case 2:
                            case 9:
                              if (aa(i)) {
                                ((kc = 0), (wc = null), mu(t));
                                break;
                              }
                              ((t = function () {
                                ((2 !== kc && 9 !== kc) || vc !== e || (kc = 7),
                                  Fu(e));
                              }),
                                i.then(t, t));
                              break e;
                            case 3:
                              kc = 7;
                              break e;
                            case 4:
                              kc = 5;
                              break e;
                            case 7:
                              aa(i)
                                ? ((kc = 0), (wc = null), mu(t))
                                : ((kc = 0), (wc = null), gu(e, t, i, 7));
                              break;
                            case 5:
                              var s = null;
                              switch (yc.tag) {
                                case 26:
                                  s = yc.memoizedState;
                                case 5:
                                case 27:
                                  var o = yc;
                                  if (s ? cf(s) : o.stateNode.complete) {
                                    ((kc = 0), (wc = null));
                                    var c = o.sibling;
                                    if (null !== c) yc = c;
                                    else {
                                      var u = o.return;
                                      null !== u
                                        ? ((yc = u), bu(u))
                                        : (yc = null);
                                    }
                                    break t;
                                  }
                              }
                              ((kc = 0), (wc = null), gu(e, t, i, 5));
                              break;
                            case 6:
                              ((kc = 0), (wc = null), gu(e, t, i, 6));
                              break;
                            case 8:
                              (lu(), (Cc = 6));
                              break e;
                            default:
                              throw Error(r(462));
                          }
                        }
                        pu();
                        break;
                      } catch (t) {
                        iu(e, t);
                      }
                    return (
                      (El = Cl = null),
                      (I.H = l),
                      (I.A = a),
                      (bc = n),
                      null !== yc ? 0 : ((vc = null), (xc = 0), Lr(), Cc)
                    );
                  })(e, t)
                : du(e, t, !0),
              i = l;
            ;

          ) {
            if (0 === a) {
              Sc && !l && nu(e, t, 0, !1);
              break;
            }
            if (((n = e.current.alternate), !i || tu(n))) {
              if (2 === a) {
                if (((i = t), e.errorRecoveryDisabledLanes & i)) var s = 0;
                else
                  s =
                    0 != (s = -536870913 & e.pendingLanes)
                      ? s
                      : 536870912 & s
                        ? 536870912
                        : 0;
                if (0 !== s) {
                  t = s;
                  e: {
                    var o = e;
                    a = Tc;
                    var c = o.current.memoizedState.isDehydrated;
                    if (
                      (c && (au(o, s).flags |= 256), 2 !== (s = du(o, s, !1)))
                    ) {
                      if (Nc && !c) {
                        ((o.errorRecoveryDisabledLanes |= i),
                          (Mc |= i),
                          (a = 4));
                        break e;
                      }
                      ((i = Lc),
                        (Lc = a),
                        null !== i &&
                          (null === Lc ? (Lc = i) : Lc.push.apply(Lc, i)));
                    }
                    a = s;
                  }
                  if (((i = !1), 2 !== a)) continue;
                }
              }
              if (1 === a) {
                (au(e, 0), nu(e, t, 0, !0));
                break;
              }
              e: {
                switch (((l = e), (i = a))) {
                  case 0:
                  case 1:
                    throw Error(r(345));
                  case 4:
                    if ((4194048 & t) !== t) break;
                  case 6:
                    nu(l, t, Pc, !jc);
                    break e;
                  case 2:
                    Lc = null;
                    break;
                  case 3:
                  case 5:
                    break;
                  default:
                    throw Error(r(329));
                }
                if ((62914560 & t) === t && 10 < (a = Oc + 300 - fe())) {
                  if ((nu(l, t, Pc, !jc), 0 !== Pe(l, 0, !0))) break e;
                  ((Vc = t),
                    (l.timeoutHandle = Nd(
                      eu.bind(
                        null,
                        l,
                        n,
                        Lc,
                        Fc,
                        Rc,
                        t,
                        Pc,
                        Mc,
                        Ac,
                        jc,
                        i,
                        "Throttled",
                        -0,
                        0,
                      ),
                      a,
                    )));
                } else eu(l, n, Lc, Fc, Rc, t, Pc, Mc, Ac, jc, i, null, -0, 0);
              }
              break;
            }
            ((a = du(e, t, !1)), (i = !1));
          }
          Fu(e);
        }
        function eu(e, t, n, r, l, a, i, s, o, c, u, d, f, p) {
          if (
            ((e.timeoutHandle = -1),
            8192 & (d = t.subtreeFlags) || !(16785408 & ~d))
          ) {
            cc(
              t,
              a,
              (d = {
                stylesheets: null,
                count: 0,
                imgCount: 0,
                imgBytes: 0,
                suspenseyImages: [],
                waitingForImages: !0,
                waitingForViewTransition: !1,
                unsuspend: Ot,
              }),
            );
            var h =
              (62914560 & a) === a
                ? Oc - fe()
                : (4194048 & a) === a
                  ? Dc - fe()
                  : 0;
            if (
              ((h = (function (e, t) {
                return (
                  e.stylesheets && 0 === e.count && pf(e, e.stylesheets),
                  0 < e.count || 0 < e.imgCount
                    ? function (n) {
                        var r = setTimeout(function () {
                          if (
                            (e.stylesheets && pf(e, e.stylesheets), e.unsuspend)
                          ) {
                            var t = e.unsuspend;
                            ((e.unsuspend = null), t());
                          }
                        }, 6e4 + t);
                        0 < e.imgBytes &&
                          0 === uf &&
                          (uf =
                            62500 *
                            (function () {
                              if (
                                "function" ==
                                typeof performance.getEntriesByType
                              ) {
                                for (
                                  var e = 0,
                                    t = 0,
                                    n =
                                      performance.getEntriesByType("resource"),
                                    r = 0;
                                  r < n.length;
                                  r++
                                ) {
                                  var l = n[r],
                                    a = l.transferSize,
                                    i = l.initiatorType,
                                    s = l.duration;
                                  if (a && s && bd(i)) {
                                    for (
                                      i = 0, s = l.responseEnd, r += 1;
                                      r < n.length;
                                      r++
                                    ) {
                                      var o = n[r],
                                        c = o.startTime;
                                      if (c > s) break;
                                      var u = o.transferSize,
                                        d = o.initiatorType;
                                      u &&
                                        bd(d) &&
                                        (i +=
                                          u *
                                          ((o = o.responseEnd) < s
                                            ? 1
                                            : (s - c) / (o - c)));
                                    }
                                    if (
                                      (--r,
                                      (t += (8 * (a + i)) / (l.duration / 1e3)),
                                      10 < ++e)
                                    )
                                      break;
                                  }
                                }
                                if (0 < e) return t / e / 1e6;
                              }
                              return navigator.connection &&
                                "number" ==
                                  typeof (e = navigator.connection.downlink)
                                ? e
                                : 5;
                            })());
                        var l = setTimeout(
                          function () {
                            if (
                              ((e.waitingForImages = !1),
                              0 === e.count &&
                                (e.stylesheets && pf(e, e.stylesheets),
                                e.unsuspend))
                            ) {
                              var t = e.unsuspend;
                              ((e.unsuspend = null), t());
                            }
                          },
                          (e.imgBytes > uf ? 50 : 800) + t,
                        );
                        return (
                          (e.unsuspend = n),
                          function () {
                            ((e.unsuspend = null),
                              clearTimeout(r),
                              clearTimeout(l));
                          }
                        );
                      }
                    : null
                );
              })(d, h)),
              null !== h)
            )
              return (
                (Vc = a),
                (e.cancelPendingCommit = h(
                  yu.bind(null, e, t, a, n, r, l, i, s, o, u, d, null, f, p),
                )),
                void nu(e, a, i, !c)
              );
          }
          yu(e, t, a, n, r, l, i, s, o);
        }
        function tu(e) {
          for (var t = e; ; ) {
            var n = t.tag;
            if (
              (0 === n || 11 === n || 15 === n) &&
              16384 & t.flags &&
              null !== (n = t.updateQueue) &&
              null !== (n = n.stores)
            )
              for (var r = 0; r < n.length; r++) {
                var l = n[r],
                  a = l.getSnapshot;
                l = l.value;
                try {
                  if (!nr(a(), l)) return !1;
                } catch {
                  return !1;
                }
              }
            if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
              ((n.return = t), (t = n));
            else {
              if (t === e) break;
              for (; null === t.sibling; ) {
                if (null === t.return || t.return === e) return !0;
                t = t.return;
              }
              ((t.sibling.return = t.return), (t = t.sibling));
            }
          }
          return !0;
        }
        function nu(e, t, n, r) {
          ((t &= ~zc),
            (t &= ~Mc),
            (e.suspendedLanes |= t),
            (e.pingedLanes &= ~t),
            r && (e.warmLanes |= t),
            (r = e.expirationTimes));
          for (var l = t; 0 < l; ) {
            var a = 31 - Se(l),
              i = 1 << a;
            ((r[a] = -1), (l &= ~i));
          }
          0 !== n && De(e, n, t);
        }
        function ru() {
          return !!(6 & bc) || (Uu(0), !1);
        }
        function lu() {
          if (null !== yc) {
            if (0 === kc) var e = yc.return;
            else
              ((El = Cl = null), ui((e = yc)), (da = null), (fa = 0), (e = yc));
            for (; null !== e; ) (yo(e.alternate, e), (e = e.return));
            yc = null;
          }
        }
        function au(e, t) {
          var n = e.timeoutHandle;
          (-1 !== n && ((e.timeoutHandle = -1), _d(n)),
            null !== (n = e.cancelPendingCommit) &&
              ((e.cancelPendingCommit = null), n()),
            (Vc = 0),
            lu(),
            (vc = e),
            (yc = n = Vr(e.current, null)),
            (xc = t),
            (kc = 0),
            (wc = null),
            (jc = !1),
            (Sc = Ae(e, t)),
            (Nc = !1),
            (Ac = Pc = zc = Mc = Ec = Cc = 0),
            (Lc = Tc = null),
            (Rc = !1),
            8 & t && (t |= 32 & t));
          var r = e.entangledLanes;
          if (0 !== r)
            for (e = e.entanglements, r &= t; 0 < r; ) {
              var l = 31 - Se(r),
                a = 1 << l;
              ((t |= e[l]), (r &= ~a));
            }
          return ((_c = t), Lr(), n);
        }
        function iu(e, t) {
          ((qa = null),
            (I.H = vs),
            t === ta || t === ra
              ? ((t = ca()), (kc = 3))
              : t === na
                ? ((t = ca()), (kc = 4))
                : (kc =
                    t === Rs
                      ? 8
                      : null !== t &&
                          "object" == typeof t &&
                          "function" == typeof t.then
                        ? 6
                        : 1),
            (wc = t),
            null === yc && ((Cc = 1), zs(e, Zr(t, e.current))));
        }
        function su() {
          var e = Oa.current;
          return (
            null === e ||
            ((4194048 & xc) === xc
              ? null === Da
              : !!((62914560 & xc) === xc || 536870912 & xc) && e === Da)
          );
        }
        function ou() {
          var e = I.H;
          return ((I.H = vs), null === e ? vs : e);
        }
        function cu() {
          var e = I.A;
          return ((I.A = mc), e);
        }
        function uu() {
          ((Cc = 4),
            jc || ((4194048 & xc) !== xc && null !== Oa.current) || (Sc = !0),
            (!(134217727 & Ec) && !(134217727 & Mc)) ||
              null === vc ||
              nu(vc, xc, Pc, !1));
        }
        function du(e, t, n) {
          var r = bc;
          bc |= 2;
          var l = ou(),
            a = cu();
          ((vc !== e || xc !== t) && ((Fc = null), au(e, t)), (t = !1));
          var i = Cc;
          e: for (;;)
            try {
              if (0 !== kc && null !== yc) {
                var s = yc,
                  o = wc;
                switch (kc) {
                  case 8:
                    (lu(), (i = 6));
                    break e;
                  case 3:
                  case 2:
                  case 9:
                  case 6:
                    null === Oa.current && (t = !0);
                    var c = kc;
                    if (((kc = 0), (wc = null), gu(e, s, o, c), n && Sc)) {
                      i = 0;
                      break e;
                    }
                    break;
                  default:
                    ((c = kc), (kc = 0), (wc = null), gu(e, s, o, c));
                }
              }
              (fu(), (i = Cc));
              break;
            } catch (t) {
              iu(e, t);
            }
          return (
            t && e.shellSuspendCounter++,
            (El = Cl = null),
            (bc = r),
            (I.H = l),
            (I.A = a),
            null === yc && ((vc = null), (xc = 0), Lr()),
            i
          );
        }
        function fu() {
          for (; null !== yc; ) hu(yc);
        }
        function pu() {
          for (; null !== yc && !ue(); ) hu(yc);
        }
        function hu(e) {
          var t = co(e.alternate, e, _c);
          ((e.memoizedProps = e.pendingProps), null === t ? bu(e) : (yc = t));
        }
        function mu(e) {
          var t = e,
            n = t.alternate;
          switch (t.tag) {
            case 15:
            case 0:
              t = Ks(n, t, t.pendingProps, t.type, void 0, xc);
              break;
            case 11:
              t = Ks(n, t, t.pendingProps, t.type.render, t.ref, xc);
              break;
            case 5:
              ui(t);
            default:
              (yo(n, t), (t = co(n, (t = yc = Wr(t, _c)), _c)));
          }
          ((e.memoizedProps = e.pendingProps), null === t ? bu(e) : (yc = t));
        }
        function gu(e, t, n, l) {
          ((El = Cl = null), ui(t), (da = null), (fa = 0));
          var a = t.return;
          try {
            if (
              (function (e, t, n, l, a) {
                if (
                  ((n.flags |= 32768),
                  null !== l &&
                    "object" == typeof l &&
                    "function" == typeof l.then)
                ) {
                  if (
                    (null !== (t = n.alternate) && Tl(t, n, a, !0),
                    null !== (n = Oa.current))
                  ) {
                    switch (n.tag) {
                      case 31:
                      case 13:
                        return (
                          null === Da
                            ? uu()
                            : null === n.alternate && 0 === Cc && (Cc = 3),
                          (n.flags &= -257),
                          (n.flags |= 65536),
                          (n.lanes = a),
                          l === la
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? (n.updateQueue = new Set([l]))
                                : t.add(l),
                              Eu(e, l, a)),
                          !1
                        );
                      case 22:
                        return (
                          (n.flags |= 65536),
                          l === la
                            ? (n.flags |= 16384)
                            : (null === (t = n.updateQueue)
                                ? ((t = {
                                    transitions: null,
                                    markerInstances: null,
                                    retryQueue: new Set([l]),
                                  }),
                                  (n.updateQueue = t))
                                : null === (n = t.retryQueue)
                                  ? (t.retryQueue = new Set([l]))
                                  : n.add(l),
                              Eu(e, l, a)),
                          !1
                        );
                    }
                    throw Error(r(435, n.tag));
                  }
                  return (Eu(e, l, a), uu(), !1);
                }
                if (ml)
                  return (
                    null !== (t = Oa.current)
                      ? (!(65536 & t.flags) && (t.flags |= 256),
                        (t.flags |= 65536),
                        (t.lanes = a),
                        l !== vl &&
                          Nl(Zr((e = Error(r(422), { cause: l })), n)))
                      : (l !== vl &&
                          Nl(Zr((t = Error(r(423), { cause: l })), n)),
                        ((e = e.current.alternate).flags |= 65536),
                        (a &= -a),
                        (e.lanes |= a),
                        (l = Zr(l, n)),
                        Na(e, (a = As(e.stateNode, l, a))),
                        4 !== Cc && (Cc = 2)),
                    !1
                  );
                var i = Error(r(520), { cause: l });
                if (
                  ((i = Zr(i, n)),
                  null === Tc ? (Tc = [i]) : Tc.push(i),
                  4 !== Cc && (Cc = 2),
                  null === t)
                )
                  return !0;
                ((l = Zr(l, n)), (n = t));
                do {
                  switch (n.tag) {
                    case 3:
                      return (
                        (n.flags |= 65536),
                        (e = a & -a),
                        (n.lanes |= e),
                        Na(n, (e = As(n.stateNode, l, e))),
                        !1
                      );
                    case 1:
                      if (
                        ((t = n.type),
                        (i = n.stateNode),
                        !(
                          128 & n.flags ||
                          ("function" != typeof t.getDerivedStateFromError &&
                            (null === i ||
                              "function" != typeof i.componentDidCatch ||
                              (null !== Uc && Uc.has(i))))
                        ))
                      )
                        return (
                          (n.flags |= 65536),
                          (a &= -a),
                          (n.lanes |= a),
                          Ls((a = Ts(a)), e, n, l),
                          Na(n, a),
                          !1
                        );
                  }
                  n = n.return;
                } while (null !== n);
                return !1;
              })(e, a, t, n, xc)
            )
              return ((Cc = 1), zs(e, Zr(n, e.current)), void (yc = null));
          } catch (t) {
            if (null !== a) throw ((yc = a), t);
            return ((Cc = 1), zs(e, Zr(n, e.current)), void (yc = null));
          }
          32768 & t.flags
            ? (ml || 1 === l
                ? (e = !0)
                : Sc || 536870912 & xc
                  ? (e = !1)
                  : ((jc = e = !0),
                    (2 === l || 9 === l || 3 === l || 6 === l) &&
                      null !== (l = Oa.current) &&
                      13 === l.tag &&
                      (l.flags |= 16384)),
              vu(t, e))
            : bu(t);
        }
        function bu(e) {
          var t = e;
          do {
            if (32768 & t.flags) return void vu(t, jc);
            e = t.return;
            var n = bo(t.alternate, t, _c);
            if (null !== n) return void (yc = n);
            if (null !== (t = t.sibling)) return void (yc = t);
            yc = t = e;
          } while (null !== t);
          0 === Cc && (Cc = 5);
        }
        function vu(e, t) {
          do {
            var n = vo(e.alternate, e);
            if (null !== n) return ((n.flags &= 32767), void (yc = n));
            if (
              (null !== (n = e.return) &&
                ((n.flags |= 32768),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
              !t && null !== (e = e.sibling))
            )
              return void (yc = e);
            yc = e = n;
          } while (null !== e);
          ((Cc = 6), (yc = null));
        }
        function yu(e, t, n, l, a, i, s, o, c) {
          e.cancelPendingCommit = null;
          do {
            Su();
          } while (0 !== $c);
          if (6 & bc) throw Error(r(327));
          if (null !== t) {
            if (t === e.current) throw Error(r(177));
            if (
              ((i = t.lanes | t.childLanes),
              (function (e, t, n, r, l, a) {
                var i = e.pendingLanes;
                ((e.pendingLanes = n),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.warmLanes = 0),
                  (e.expiredLanes &= n),
                  (e.entangledLanes &= n),
                  (e.errorRecoveryDisabledLanes &= n),
                  (e.shellSuspendCounter = 0));
                var s = e.entanglements,
                  o = e.expirationTimes,
                  c = e.hiddenUpdates;
                for (n = i & ~n; 0 < n; ) {
                  var u = 31 - Se(n),
                    d = 1 << u;
                  ((s[u] = 0), (o[u] = -1));
                  var f = c[u];
                  if (null !== f)
                    for (c[u] = null, u = 0; u < f.length; u++) {
                      var p = f[u];
                      null !== p && (p.lane &= -536870913);
                    }
                  n &= ~d;
                }
                (0 !== r && De(e, r, 0),
                  0 !== a &&
                    0 === l &&
                    0 !== e.tag &&
                    (e.suspendedLanes |= a & ~(i & ~t)));
              })(e, n, (i |= Tr), s, o, c),
              e === vc && ((yc = vc = null), (xc = 0)),
              (Bc = t),
              (Hc = e),
              (Vc = n),
              (Wc = i),
              (qc = a),
              (Qc = l),
              10256 & t.subtreeFlags || 10256 & t.flags
                ? ((e.callbackNode = null),
                  (e.callbackPriority = 0),
                  (function (e) {
                    oe(e, function () {
                      return (Nu(), null);
                    });
                  })(ge))
                : ((e.callbackNode = null), (e.callbackPriority = 0)),
              (l = !!(13878 & t.flags)),
              13878 & t.subtreeFlags || l)
            ) {
              ((l = I.T),
                (I.T = null),
                (a = F.p),
                (F.p = 2),
                (s = bc),
                (bc |= 4));
              try {
                !(function (e, t) {
                  if (((e = e.containerInfo), (vd = Sf), or((e = sr(e))))) {
                    if ("selectionStart" in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd };
                    else
                      e: {
                        var l =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection();
                        if (l && 0 !== l.rangeCount) {
                          n = l.anchorNode;
                          var a = l.anchorOffset,
                            i = l.focusNode;
                          l = l.focusOffset;
                          try {
                            (n.nodeType, i.nodeType);
                          } catch {
                            n = null;
                            break e;
                          }
                          var s = 0,
                            o = -1,
                            c = -1,
                            u = 0,
                            d = 0,
                            f = e,
                            p = null;
                          t: for (;;) {
                            for (
                              var h;
                              f !== n ||
                                (0 !== a && 3 !== f.nodeType) ||
                                (o = s + a),
                                f !== i ||
                                  (0 !== l && 3 !== f.nodeType) ||
                                  (c = s + l),
                                3 === f.nodeType && (s += f.nodeValue.length),
                                null !== (h = f.firstChild);

                            )
                              ((p = f), (f = h));
                            for (;;) {
                              if (f === e) break t;
                              if (
                                (p === n && ++u === a && (o = s),
                                p === i && ++d === l && (c = s),
                                null !== (h = f.nextSibling))
                              )
                                break;
                              p = (f = p).parentNode;
                            }
                            f = h;
                          }
                          n =
                            -1 === o || -1 === c ? null : { start: o, end: c };
                        } else n = null;
                      }
                    n = n || { start: 0, end: 0 };
                  } else n = null;
                  for (
                    yd = { focusedElem: e, selectionRange: n }, Sf = !1, Do = t;
                    null !== Do;

                  )
                    if (
                      ((e = (t = Do).child),
                      1028 & t.subtreeFlags && null !== e)
                    )
                      ((e.return = t), (Do = e));
                    else
                      for (; null !== Do; ) {
                        switch (
                          ((i = (t = Do).alternate), (e = t.flags), t.tag)
                        ) {
                          case 0:
                            if (
                              4 & e &&
                              null !==
                                (e =
                                  null !== (e = t.updateQueue)
                                    ? e.events
                                    : null)
                            )
                              for (n = 0; n < e.length; n++)
                                (a = e[n]).ref.impl = a.nextImpl;
                            break;
                          case 11:
                          case 15:
                          case 5:
                          case 26:
                          case 27:
                          case 6:
                          case 4:
                          case 17:
                            break;
                          case 1:
                            if (1024 & e && null !== i) {
                              ((e = void 0),
                                (n = t),
                                (a = i.memoizedProps),
                                (i = i.memoizedState),
                                (l = n.stateNode));
                              try {
                                var m = _s(n.type, a);
                                ((e = l.getSnapshotBeforeUpdate(m, i)),
                                  (l.__reactInternalSnapshotBeforeUpdate = e));
                              } catch (e) {
                                Cu(n, n.return, e);
                              }
                            }
                            break;
                          case 3:
                            if (1024 & e)
                              if (
                                9 ===
                                (n = (e = t.stateNode.containerInfo).nodeType)
                              )
                                Td(e);
                              else if (1 === n)
                                switch (e.nodeName) {
                                  case "HEAD":
                                  case "HTML":
                                  case "BODY":
                                    Td(e);
                                    break;
                                  default:
                                    e.textContent = "";
                                }
                            break;
                          default:
                            if (1024 & e) throw Error(r(163));
                        }
                        if (null !== (e = t.sibling)) {
                          ((e.return = t.return), (Do = e));
                          break;
                        }
                        Do = t.return;
                      }
                })(e, t);
              } finally {
                ((bc = s), (F.p = a), (I.T = l));
              }
            }
            (($c = 1), xu(), ku(), wu());
          }
        }
        function xu() {
          if (1 === $c) {
            $c = 0;
            var e = Hc,
              t = Bc,
              n = !!(13878 & t.flags);
            if (13878 & t.subtreeFlags || n) {
              ((n = I.T), (I.T = null));
              var r = F.p;
              F.p = 2;
              var l = bc;
              bc |= 4;
              try {
                Go(t, e);
                var a = yd,
                  i = sr(e.containerInfo),
                  s = a.focusedElem,
                  o = a.selectionRange;
                if (
                  i !== s &&
                  s &&
                  s.ownerDocument &&
                  ir(s.ownerDocument.documentElement, s)
                ) {
                  if (null !== o && or(s)) {
                    var c = o.start,
                      u = o.end;
                    if ((void 0 === u && (u = c), "selectionStart" in s))
                      ((s.selectionStart = c),
                        (s.selectionEnd = Math.min(u, s.value.length)));
                    else {
                      var d = s.ownerDocument || document,
                        f = (d && d.defaultView) || window;
                      if (f.getSelection) {
                        var p = f.getSelection(),
                          h = s.textContent.length,
                          m = Math.min(o.start, h),
                          g = void 0 === o.end ? m : Math.min(o.end, h);
                        !p.extend && m > g && ((i = g), (g = m), (m = i));
                        var b = ar(s, m),
                          v = ar(s, g);
                        if (
                          b &&
                          v &&
                          (1 !== p.rangeCount ||
                            p.anchorNode !== b.node ||
                            p.anchorOffset !== b.offset ||
                            p.focusNode !== v.node ||
                            p.focusOffset !== v.offset)
                        ) {
                          var y = d.createRange();
                          (y.setStart(b.node, b.offset),
                            p.removeAllRanges(),
                            m > g
                              ? (p.addRange(y), p.extend(v.node, v.offset))
                              : (y.setEnd(v.node, v.offset), p.addRange(y)));
                        }
                      }
                    }
                  }
                  for (d = [], p = s; (p = p.parentNode); )
                    1 === p.nodeType &&
                      d.push({
                        element: p,
                        left: p.scrollLeft,
                        top: p.scrollTop,
                      });
                  for (
                    "function" == typeof s.focus && s.focus(), s = 0;
                    s < d.length;
                    s++
                  ) {
                    var x = d[s];
                    ((x.element.scrollLeft = x.left),
                      (x.element.scrollTop = x.top));
                  }
                }
                ((Sf = !!vd), (yd = vd = null));
              } finally {
                ((bc = l), (F.p = r), (I.T = n));
              }
            }
            ((e.current = t), ($c = 2));
          }
        }
        function ku() {
          if (2 === $c) {
            $c = 0;
            var e = Hc,
              t = Bc,
              n = !!(8772 & t.flags);
            if (8772 & t.subtreeFlags || n) {
              ((n = I.T), (I.T = null));
              var r = F.p;
              F.p = 2;
              var l = bc;
              bc |= 4;
              try {
                Io(e, t.alternate, t);
              } finally {
                ((bc = l), (F.p = r), (I.T = n));
              }
            }
            $c = 3;
          }
        }
        function wu() {
          if (4 === $c || 3 === $c) {
            (($c = 0), de());
            var e = Hc,
              t = Bc,
              n = Vc,
              r = Qc;
            10256 & t.subtreeFlags || 10256 & t.flags
              ? ($c = 5)
              : (($c = 0), (Bc = Hc = null), ju(e, e.pendingLanes));
            var l = e.pendingLanes;
            if (
              (0 === l && (Uc = null),
              $e(n),
              (t = t.stateNode),
              we && "function" == typeof we.onCommitFiberRoot)
            )
              try {
                we.onCommitFiberRoot(ke, t, void 0, !(128 & ~t.current.flags));
              } catch {}
            if (null !== r) {
              ((t = I.T), (l = F.p), (F.p = 2), (I.T = null));
              try {
                for (var a = e.onRecoverableError, i = 0; i < r.length; i++) {
                  var s = r[i];
                  a(s.value, { componentStack: s.stack });
                }
              } finally {
                ((I.T = t), (F.p = l));
              }
            }
            (!!(3 & Vc) && Su(),
              Fu(e),
              (l = e.pendingLanes),
              261930 & n && 42 & l
                ? e === Gc
                  ? Kc++
                  : ((Kc = 0), (Gc = e))
                : (Kc = 0),
              Uu(0));
          }
        }
        function ju(e, t) {
          0 === (e.pooledCacheLanes &= t) &&
            null != (t = e.pooledCache) &&
            ((e.pooledCache = null), Vl(t));
        }
        function Su() {
          return (xu(), ku(), wu(), Nu());
        }
        function Nu() {
          if (5 !== $c) return !1;
          var e = Hc,
            t = Wc;
          Wc = 0;
          var n = $e(Vc),
            l = I.T,
            a = F.p;
          try {
            ((F.p = 32 > n ? 32 : n), (I.T = null), (n = qc), (qc = null));
            var i = Hc,
              s = Vc;
            if ((($c = 0), (Bc = Hc = null), (Vc = 0), 6 & bc))
              throw Error(r(331));
            var o = bc;
            if (
              ((bc |= 4),
              fc(i.current),
              lc(i, i.current, s, n),
              (bc = o),
              Uu(0),
              we && "function" == typeof we.onPostCommitFiberRoot)
            )
              try {
                we.onPostCommitFiberRoot(ke, i);
              } catch {}
            return !0;
          } finally {
            ((F.p = a), (I.T = l), ju(e, t));
          }
        }
        function _u(e, t, n) {
          ((t = Zr(n, t)),
            null !== (e = ja(e, (t = As(e.stateNode, t, 2)), 2)) &&
              (Oe(e, 2), Fu(e)));
        }
        function Cu(e, t, n) {
          if (3 === e.tag) _u(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                _u(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === Uc || !Uc.has(r)))
                ) {
                  ((e = Zr(n, e)),
                    null !== (r = ja(t, (n = Ts(2)), 2)) &&
                      (Ls(n, r, t, e), Oe(r, 2), Fu(r)));
                  break;
                }
              }
              t = t.return;
            }
        }
        function Eu(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new gc();
            var l = new Set();
            r.set(t, l);
          } else void 0 === (l = r.get(t)) && ((l = new Set()), r.set(t, l));
          l.has(n) ||
            ((Nc = !0), l.add(n), (e = Mu.bind(null, e, t, n)), t.then(e, e));
        }
        function Mu(e, t, n) {
          var r = e.pingCache;
          (null !== r && r.delete(t),
            (e.pingedLanes |= e.suspendedLanes & n),
            (e.warmLanes &= ~n),
            vc === e &&
              (xc & n) === n &&
              (4 === Cc ||
              (3 === Cc && (62914560 & xc) === xc && 300 > fe() - Oc)
                ? !(2 & bc) && au(e, 0)
                : (zc |= n),
              Ac === xc && (Ac = 0)),
            Fu(e));
        }
        function zu(e, t) {
          (0 === t && (t = Le()), null !== (e = Dr(e, t)) && (Oe(e, t), Fu(e)));
        }
        function Pu(e) {
          var t = e.memoizedState,
            n = 0;
          (null !== t && (n = t.retryLane), zu(e, n));
        }
        function Au(e, t) {
          var n = 0;
          switch (e.tag) {
            case 31:
            case 13:
              var l = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              l = e.stateNode;
              break;
            case 22:
              l = e.stateNode._retryCache;
              break;
            default:
              throw Error(r(314));
          }
          (null !== l && l.delete(t), zu(e, n));
        }
        var Tu = null,
          Lu = null,
          Ru = !1,
          Ou = !1,
          Du = !1,
          Iu = 0;
        function Fu(e) {
          (e !== Lu &&
            null === e.next &&
            (null === Lu ? (Tu = Lu = e) : (Lu = Lu.next = e)),
            (Ou = !0),
            Ru ||
              ((Ru = !0),
              Ed(function () {
                6 & bc ? oe(he, $u) : Hu();
              })));
        }
        function Uu(e, t) {
          if (!Du && Ou) {
            Du = !0;
            do {
              for (var n = !1, r = Tu; null !== r; ) {
                if (0 !== e) {
                  var l = r.pendingLanes;
                  if (0 === l) var a = 0;
                  else {
                    var i = r.suspendedLanes,
                      s = r.pingedLanes;
                    ((a = (1 << (31 - Se(42 | e) + 1)) - 1),
                      (a =
                        201326741 & (a &= l & ~(i & ~s))
                          ? (201326741 & a) | 1
                          : a
                            ? 2 | a
                            : 0));
                  }
                  0 !== a && ((n = !0), Wu(r, a));
                } else
                  ((a = xc),
                    !(
                      3 &
                      (a = Pe(
                        r,
                        r === vc ? a : 0,
                        null !== r.cancelPendingCommit ||
                          -1 !== r.timeoutHandle,
                      ))
                    ) ||
                      Ae(r, a) ||
                      ((n = !0), Wu(r, a)));
                r = r.next;
              }
            } while (n);
            Du = !1;
          }
        }
        function $u() {
          Hu();
        }
        function Hu() {
          Ou = Ru = !1;
          var e = 0;
          0 !== Iu &&
            (function () {
              var e = window.event;
              return e && "popstate" === e.type
                ? e !== Sd && ((Sd = e), !0)
                : ((Sd = null), !1);
            })() &&
            (e = Iu);
          for (var t = fe(), n = null, r = Tu; null !== r; ) {
            var l = r.next,
              a = Bu(r, t);
            (0 === a
              ? ((r.next = null),
                null === n ? (Tu = l) : (n.next = l),
                null === l && (Lu = n))
              : ((n = r), (0 !== e || !!(3 & a)) && (Ou = !0)),
              (r = l));
          }
          ((0 !== $c && 5 !== $c) || Uu(e), 0 !== Iu && (Iu = 0));
        }
        function Bu(e, t) {
          for (
            var n = e.suspendedLanes,
              r = e.pingedLanes,
              l = e.expirationTimes,
              a = -62914561 & e.pendingLanes;
            0 < a;

          ) {
            var i = 31 - Se(a),
              s = 1 << i,
              o = l[i];
            (-1 === o
              ? (0 === (s & n) || 0 !== (s & r)) && (l[i] = Te(s, t))
              : o <= t && (e.expiredLanes |= s),
              (a &= ~s));
          }
          if (
            ((n = xc),
            (n = Pe(
              e,
              e === (t = vc) ? n : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            )),
            (r = e.callbackNode),
            0 === n ||
              (e === t && (2 === kc || 9 === kc)) ||
              null !== e.cancelPendingCommit)
          )
            return (
              null !== r && null !== r && ce(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0)
            );
          if (!(3 & n) || Ae(e, n)) {
            if ((t = n & -n) === e.callbackPriority) return t;
            switch ((null !== r && ce(r), $e(n))) {
              case 2:
              case 8:
                n = me;
                break;
              case 32:
              default:
                n = ge;
                break;
              case 268435456:
                n = ve;
            }
            return (
              (r = Vu.bind(null, e)),
              (n = oe(n, r)),
              (e.callbackPriority = t),
              (e.callbackNode = n),
              t
            );
          }
          return (
            null !== r && null !== r && ce(r),
            (e.callbackPriority = 2),
            (e.callbackNode = null),
            2
          );
        }
        function Vu(e, t) {
          if (0 !== $c && 5 !== $c)
            return ((e.callbackNode = null), (e.callbackPriority = 0), null);
          var n = e.callbackNode;
          if (Su() && e.callbackNode !== n) return null;
          var r = xc;
          return 0 ===
            (r = Pe(
              e,
              e === vc ? r : 0,
              null !== e.cancelPendingCommit || -1 !== e.timeoutHandle,
            ))
            ? null
            : (Jc(e, r, t),
              Bu(e, fe()),
              null != e.callbackNode && e.callbackNode === n
                ? Vu.bind(null, e)
                : null);
        }
        function Wu(e, t) {
          if (Su()) return null;
          Jc(e, t, !0);
        }
        function qu() {
          if (0 === Iu) {
            var e = Ql;
            (0 === e && ((e = Ce), !(261888 & (Ce <<= 1)) && (Ce = 256)),
              (Iu = e));
          }
          return Iu;
        }
        function Qu(e) {
          return null == e || "symbol" == typeof e || "boolean" == typeof e
            ? null
            : "function" == typeof e
              ? e
              : Rt("" + e);
        }
        function Ku(e, t) {
          var n = t.ownerDocument.createElement("input");
          return (
            (n.name = t.name),
            (n.value = t.value),
            e.id && n.setAttribute("form", e.id),
            t.parentNode.insertBefore(n, t),
            (e = new FormData(e)),
            n.parentNode.removeChild(n),
            e
          );
        }
        for (var Gu = 0; Gu < Er.length; Gu++) {
          var Yu = Er[Gu];
          Mr(Yu.toLowerCase(), "on" + (Yu[0].toUpperCase() + Yu.slice(1)));
        }
        (Mr(xr, "onAnimationEnd"),
          Mr(kr, "onAnimationIteration"),
          Mr(wr, "onAnimationStart"),
          Mr("dblclick", "onDoubleClick"),
          Mr("focusin", "onFocus"),
          Mr("focusout", "onBlur"),
          Mr(jr, "onTransitionRun"),
          Mr(Sr, "onTransitionStart"),
          Mr(Nr, "onTransitionCancel"),
          Mr(_r, "onTransitionEnd"),
          ot("onMouseEnter", ["mouseout", "mouseover"]),
          ot("onMouseLeave", ["mouseout", "mouseover"]),
          ot("onPointerEnter", ["pointerout", "pointerover"]),
          ot("onPointerLeave", ["pointerout", "pointerover"]),
          st(
            "onChange",
            "change click focusin focusout input keydown keyup selectionchange".split(
              " ",
            ),
          ),
          st(
            "onSelect",
            "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
              " ",
            ),
          ),
          st("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste",
          ]),
          st(
            "onCompositionEnd",
            "compositionend focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          st(
            "onCompositionStart",
            "compositionstart focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ),
          st(
            "onCompositionUpdate",
            "compositionupdate focusout keydown keypress keyup mousedown".split(
              " ",
            ),
          ));
        var Xu =
            "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
              " ",
            ),
          Zu = new Set(
            "beforetoggle cancel close invalid load scroll scrollend toggle"
              .split(" ")
              .concat(Xu),
          );
        function Ju(e, t) {
          t = !!(4 & t);
          for (var n = 0; n < e.length; n++) {
            var r = e[n],
              l = r.event;
            r = r.listeners;
            e: {
              var a = void 0;
              if (t)
                for (var i = r.length - 1; 0 <= i; i--) {
                  var s = r[i],
                    o = s.instance,
                    c = s.currentTarget;
                  if (((s = s.listener), o !== a && l.isPropagationStopped()))
                    break e;
                  ((a = s), (l.currentTarget = c));
                  try {
                    a(l);
                  } catch (e) {
                    zr(e);
                  }
                  ((l.currentTarget = null), (a = o));
                }
              else
                for (i = 0; i < r.length; i++) {
                  if (
                    ((o = (s = r[i]).instance),
                    (c = s.currentTarget),
                    (s = s.listener),
                    o !== a && l.isPropagationStopped())
                  )
                    break e;
                  ((a = s), (l.currentTarget = c));
                  try {
                    a(l);
                  } catch (e) {
                    zr(e);
                  }
                  ((l.currentTarget = null), (a = o));
                }
            }
          }
        }
        function ed(e, t) {
          var n = t[Ke];
          void 0 === n && (n = t[Ke] = new Set());
          var r = e + "__bubble";
          n.has(r) || (ld(t, e, 2, !1), n.add(r));
        }
        function td(e, t, n) {
          var r = 0;
          (t && (r |= 4), ld(n, e, r, t));
        }
        var nd = "_reactListening" + Math.random().toString(36).slice(2);
        function rd(e) {
          if (!e[nd]) {
            ((e[nd] = !0),
              at.forEach(function (t) {
                "selectionchange" !== t &&
                  (Zu.has(t) || td(t, !1, e), td(t, !0, e));
              }));
            var t = 9 === e.nodeType ? e : e.ownerDocument;
            null === t || t[nd] || ((t[nd] = !0), td("selectionchange", !1, t));
          }
        }
        function ld(e, t, n, r) {
          switch (Pf(t)) {
            case 2:
              var l = Nf;
              break;
            case 8:
              l = _f;
              break;
            default:
              l = Cf;
          }
          ((n = l.bind(null, t, n, e)),
            (l = void 0),
            !qt ||
              ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
              (l = !0),
            r
              ? void 0 !== l
                ? e.addEventListener(t, n, { capture: !0, passive: l })
                : e.addEventListener(t, n, !0)
              : void 0 !== l
                ? e.addEventListener(t, n, { passive: l })
                : e.addEventListener(t, n, !1));
        }
        function ad(e, t, n, r, l) {
          var i = r;
          if (!(1 & t || 2 & t || null === r))
            e: for (;;) {
              if (null === r) return;
              var s = r.tag;
              if (3 === s || 4 === s) {
                var o = r.stateNode.containerInfo;
                if (o === l) break;
                if (4 === s)
                  for (s = r.return; null !== s; ) {
                    var c = s.tag;
                    if ((3 === c || 4 === c) && s.stateNode.containerInfo === l)
                      return;
                    s = s.return;
                  }
                for (; null !== o; ) {
                  if (null === (s = et(o))) return;
                  if (5 === (c = s.tag) || 6 === c || 26 === c || 27 === c) {
                    r = i = s;
                    continue e;
                  }
                  o = o.parentNode;
                }
              }
              r = r.return;
            }
          Bt(function () {
            var r = i,
              l = It(n),
              s = [];
            e: {
              var o = Cr.get(e);
              if (void 0 !== o) {
                var c = sn,
                  u = e;
                switch (e) {
                  case "keypress":
                    if (0 === Zt(n)) break e;
                  case "keydown":
                  case "keyup":
                    c = wn;
                    break;
                  case "focusin":
                    ((u = "focus"), (c = pn));
                    break;
                  case "focusout":
                    ((u = "blur"), (c = pn));
                    break;
                  case "beforeblur":
                  case "afterblur":
                    c = pn;
                    break;
                  case "click":
                    if (2 === n.button) break e;
                  case "auxclick":
                  case "dblclick":
                  case "mousedown":
                  case "mousemove":
                  case "mouseup":
                  case "mouseout":
                  case "mouseover":
                  case "contextmenu":
                    c = dn;
                    break;
                  case "drag":
                  case "dragend":
                  case "dragenter":
                  case "dragexit":
                  case "dragleave":
                  case "dragover":
                  case "dragstart":
                  case "drop":
                    c = fn;
                    break;
                  case "touchcancel":
                  case "touchend":
                  case "touchmove":
                  case "touchstart":
                    c = Sn;
                    break;
                  case xr:
                  case kr:
                  case wr:
                    c = hn;
                    break;
                  case _r:
                    c = Nn;
                    break;
                  case "scroll":
                  case "scrollend":
                    c = cn;
                    break;
                  case "wheel":
                    c = _n;
                    break;
                  case "copy":
                  case "cut":
                  case "paste":
                    c = mn;
                    break;
                  case "gotpointercapture":
                  case "lostpointercapture":
                  case "pointercancel":
                  case "pointerdown":
                  case "pointermove":
                  case "pointerout":
                  case "pointerover":
                  case "pointerup":
                    c = jn;
                    break;
                  case "toggle":
                  case "beforetoggle":
                    c = Cn;
                }
                var d = !!(4 & t),
                  f = !d && ("scroll" === e || "scrollend" === e),
                  p = d ? (null !== o ? o + "Capture" : null) : o;
                d = [];
                for (var h, m = r; null !== m; ) {
                  var g = m;
                  if (
                    ((h = g.stateNode),
                    (5 !== (g = g.tag) && 26 !== g && 27 !== g) ||
                      null === h ||
                      null === p ||
                      (null != (g = Vt(m, p)) && d.push(id(m, g, h))),
                    f)
                  )
                    break;
                  m = m.return;
                }
                0 < d.length &&
                  ((o = new c(o, u, null, n, l)),
                  s.push({ event: o, listeners: d }));
              }
            }
            if (!(7 & t)) {
              if (
                ((c = "mouseout" === e || "pointerout" === e),
                (!(o = "mouseover" === e || "pointerover" === e) ||
                  n === Dt ||
                  !(u = n.relatedTarget || n.fromElement) ||
                  (!et(u) && !u[Qe])) &&
                  (c || o) &&
                  ((o =
                    l.window === l
                      ? l
                      : (o = l.ownerDocument)
                        ? o.defaultView || o.parentWindow
                        : window),
                  c
                    ? ((c = r),
                      null !==
                        (u = (u = n.relatedTarget || n.toElement)
                          ? et(u)
                          : null) &&
                        ((f = a(u)),
                        (d = u.tag),
                        u !== f || (5 !== d && 27 !== d && 6 !== d)) &&
                        (u = null))
                    : ((c = null), (u = r)),
                  c !== u))
              ) {
                if (
                  ((d = dn),
                  (g = "onMouseLeave"),
                  (p = "onMouseEnter"),
                  (m = "mouse"),
                  ("pointerout" === e || "pointerover" === e) &&
                    ((d = jn),
                    (g = "onPointerLeave"),
                    (p = "onPointerEnter"),
                    (m = "pointer")),
                  (f = null == c ? o : nt(c)),
                  (h = null == u ? o : nt(u)),
                  ((o = new d(g, m + "leave", c, n, l)).target = f),
                  (o.relatedTarget = h),
                  (g = null),
                  et(l) === r &&
                    (((d = new d(p, m + "enter", u, n, l)).target = h),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  c && u)
                )
                  e: {
                    for (d = od, m = u, h = 0, g = p = c; g; g = d(g)) h++;
                    g = 0;
                    for (var b = m; b; b = d(b)) g++;
                    for (; 0 < h - g; ) ((p = d(p)), h--);
                    for (; 0 < g - h; ) ((m = d(m)), g--);
                    for (; h--; ) {
                      if (p === m || (null !== m && p === m.alternate)) {
                        d = p;
                        break e;
                      }
                      ((p = d(p)), (m = d(m)));
                    }
                    d = null;
                  }
                else d = null;
                (null !== c && cd(s, o, c, d, !1),
                  null !== u && null !== f && cd(s, f, u, d, !0));
              }
              if (
                "select" ===
                  (c =
                    (o = r ? nt(r) : window).nodeName &&
                    o.nodeName.toLowerCase()) ||
                ("input" === c && "file" === o.type)
              )
                var v = Wn;
              else if (Fn(o))
                if (qn) v = tr;
                else {
                  v = Jn;
                  var y = Zn;
                }
              else
                !(c = o.nodeName) ||
                "input" !== c.toLowerCase() ||
                ("checkbox" !== o.type && "radio" !== o.type)
                  ? r && At(r.elementType) && (v = Wn)
                  : (v = er);
              switch (
                (v && (v = v(e, r))
                  ? Un(s, v, n, l)
                  : (y && y(e, o, r),
                    "focusout" === e &&
                      r &&
                      "number" === o.type &&
                      null != r.memoizedProps.value &&
                      St(o, "number", o.value)),
                (y = r ? nt(r) : window),
                e)
              ) {
                case "focusin":
                  (Fn(y) || "true" === y.contentEditable) &&
                    ((ur = y), (dr = r), (fr = null));
                  break;
                case "focusout":
                  fr = dr = ur = null;
                  break;
                case "mousedown":
                  pr = !0;
                  break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                  ((pr = !1), hr(s, n, l));
                  break;
                case "selectionchange":
                  if (cr) break;
                case "keydown":
                case "keyup":
                  hr(s, n, l);
              }
              var x;
              if (Mn)
                e: {
                  switch (e) {
                    case "compositionstart":
                      var k = "onCompositionStart";
                      break e;
                    case "compositionend":
                      k = "onCompositionEnd";
                      break e;
                    case "compositionupdate":
                      k = "onCompositionUpdate";
                      break e;
                  }
                  k = void 0;
                }
              else
                Dn
                  ? Rn(e, n) && (k = "onCompositionEnd")
                  : "keydown" === e &&
                    229 === n.keyCode &&
                    (k = "onCompositionStart");
              (k &&
                (An &&
                  "ko" !== n.locale &&
                  (Dn || "onCompositionStart" !== k
                    ? "onCompositionEnd" === k && Dn && (x = Xt())
                    : ((Gt = "value" in (Kt = l) ? Kt.value : Kt.textContent),
                      (Dn = !0))),
                0 < (y = sd(r, k)).length &&
                  ((k = new gn(k, e, null, n, l)),
                  s.push({ event: k, listeners: y }),
                  (x || null !== (x = On(n))) && (k.data = x))),
                (x = Pn
                  ? (function (e, t) {
                      switch (e) {
                        case "compositionend":
                          return On(t);
                        case "keypress":
                          return 32 !== t.which ? null : ((Ln = !0), Tn);
                        case "textInput":
                          return (e = t.data) === Tn && Ln ? null : e;
                        default:
                          return null;
                      }
                    })(e, n)
                  : (function (e, t) {
                      if (Dn)
                        return "compositionend" === e || (!Mn && Rn(e, t))
                          ? ((e = Xt()), (Yt = Gt = Kt = null), (Dn = !1), e)
                          : null;
                      switch (e) {
                        case "paste":
                        default:
                          return null;
                        case "keypress":
                          if (
                            !(t.ctrlKey || t.altKey || t.metaKey) ||
                            (t.ctrlKey && t.altKey)
                          ) {
                            if (t.char && 1 < t.char.length) return t.char;
                            if (t.which) return String.fromCharCode(t.which);
                          }
                          return null;
                        case "compositionend":
                          return An && "ko" !== t.locale ? null : t.data;
                      }
                    })(e, n)) &&
                  0 < (k = sd(r, "onBeforeInput")).length &&
                  ((y = new gn("onBeforeInput", "beforeinput", null, n, l)),
                  s.push({ event: y, listeners: k }),
                  (y.data = x)),
                (function (e, t, n, r, l) {
                  if ("submit" === t && n && n.stateNode === l) {
                    var a = Qu((l[qe] || null).action),
                      i = r.submitter;
                    i &&
                      null !==
                        (t = (t = i[qe] || null)
                          ? Qu(t.formAction)
                          : i.getAttribute("formAction")) &&
                      ((a = t), (i = null));
                    var s = new sn("action", "action", null, r, l);
                    e.push({
                      event: s,
                      listeners: [
                        {
                          instance: null,
                          listener: function () {
                            if (r.defaultPrevented) {
                              if (0 !== Iu) {
                                var e = i ? Ku(l, i) : new FormData(l);
                                ls(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: l.method,
                                    action: a,
                                  },
                                  null,
                                  e,
                                );
                              }
                            } else
                              "function" == typeof a &&
                                (s.preventDefault(),
                                (e = i ? Ku(l, i) : new FormData(l)),
                                ls(
                                  n,
                                  {
                                    pending: !0,
                                    data: e,
                                    method: l.method,
                                    action: a,
                                  },
                                  a,
                                  e,
                                ));
                          },
                          currentTarget: l,
                        },
                      ],
                    });
                  }
                })(s, e, r, n, l));
            }
            Ju(s, t);
          });
        }
        function id(e, t, n) {
          return { instance: e, listener: t, currentTarget: n };
        }
        function sd(e, t) {
          for (var n = t + "Capture", r = []; null !== e; ) {
            var l = e,
              a = l.stateNode;
            if (
              ((5 !== (l = l.tag) && 26 !== l && 27 !== l) ||
                null === a ||
                (null != (l = Vt(e, n)) && r.unshift(id(e, l, a)),
                null != (l = Vt(e, t)) && r.push(id(e, l, a))),
              3 === e.tag)
            )
              return r;
            e = e.return;
          }
          return [];
        }
        function od(e) {
          if (null === e) return null;
          do {
            e = e.return;
          } while (e && 5 !== e.tag && 27 !== e.tag);
          return e || null;
        }
        function cd(e, t, n, r, l) {
          for (var a = t._reactName, i = []; null !== n && n !== r; ) {
            var s = n,
              o = s.alternate,
              c = s.stateNode;
            if (((s = s.tag), null !== o && o === r)) break;
            ((5 !== s && 26 !== s && 27 !== s) ||
              null === c ||
              ((o = c),
              l
                ? null != (c = Vt(n, a)) && i.unshift(id(n, c, o))
                : l || (null != (c = Vt(n, a)) && i.push(id(n, c, o)))),
              (n = n.return));
          }
          0 !== i.length && e.push({ event: t, listeners: i });
        }
        var ud = /\r\n?/g,
          dd = /\u0000|\uFFFD/g;
        function fd(e) {
          return ("string" == typeof e ? e : "" + e)
            .replace(ud, "\n")
            .replace(dd, "");
        }
        function pd(e, t) {
          return ((t = fd(t)), fd(e) === t);
        }
        function hd(e, t, n, l, a, i) {
          switch (n) {
            case "children":
              "string" == typeof l
                ? "body" === t || ("textarea" === t && "" === l) || Et(e, l)
                : ("number" == typeof l || "bigint" == typeof l) &&
                  "body" !== t &&
                  Et(e, "" + l);
              break;
            case "className":
              pt(e, "class", l);
              break;
            case "tabIndex":
              pt(e, "tabindex", l);
              break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
              pt(e, n, l);
              break;
            case "style":
              Pt(e, l, i);
              break;
            case "data":
              if ("object" !== t) {
                pt(e, "data", l);
                break;
              }
            case "src":
            case "href":
              if ("" === l && ("a" !== t || "href" !== n)) {
                e.removeAttribute(n);
                break;
              }
              if (
                null == l ||
                "function" == typeof l ||
                "symbol" == typeof l ||
                "boolean" == typeof l
              ) {
                e.removeAttribute(n);
                break;
              }
              ((l = Rt("" + l)), e.setAttribute(n, l));
              break;
            case "action":
            case "formAction":
              if ("function" == typeof l) {
                e.setAttribute(
                  n,
                  "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
                );
                break;
              }
              if (
                ("function" == typeof i &&
                  ("formAction" === n
                    ? ("input" !== t && hd(e, t, "name", a.name, a, null),
                      hd(e, t, "formEncType", a.formEncType, a, null),
                      hd(e, t, "formMethod", a.formMethod, a, null),
                      hd(e, t, "formTarget", a.formTarget, a, null))
                    : (hd(e, t, "encType", a.encType, a, null),
                      hd(e, t, "method", a.method, a, null),
                      hd(e, t, "target", a.target, a, null))),
                null == l || "symbol" == typeof l || "boolean" == typeof l)
              ) {
                e.removeAttribute(n);
                break;
              }
              ((l = Rt("" + l)), e.setAttribute(n, l));
              break;
            case "onClick":
              null != l && (e.onclick = Ot);
              break;
            case "onScroll":
              null != l && ed("scroll", e);
              break;
            case "onScrollEnd":
              null != l && ed("scrollend", e);
              break;
            case "dangerouslySetInnerHTML":
              if (null != l) {
                if ("object" != typeof l || !("__html" in l))
                  throw Error(r(61));
                if (null != (n = l.__html)) {
                  if (null != a.children) throw Error(r(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "multiple":
              e.multiple = l && "function" != typeof l && "symbol" != typeof l;
              break;
            case "muted":
              e.muted = l && "function" != typeof l && "symbol" != typeof l;
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
            case "autoFocus":
              break;
            case "xlinkHref":
              if (
                null == l ||
                "function" == typeof l ||
                "boolean" == typeof l ||
                "symbol" == typeof l
              ) {
                e.removeAttribute("xlink:href");
                break;
              }
              ((n = Rt("" + l)),
                e.setAttributeNS(
                  "http://www.w3.org/1999/xlink",
                  "xlink:href",
                  n,
                ));
              break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
              null != l && "function" != typeof l && "symbol" != typeof l
                ? e.setAttribute(n, "" + l)
                : e.removeAttribute(n);
              break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
              l && "function" != typeof l && "symbol" != typeof l
                ? e.setAttribute(n, "")
                : e.removeAttribute(n);
              break;
            case "capture":
            case "download":
              !0 === l
                ? e.setAttribute(n, "")
                : !1 !== l &&
                    null != l &&
                    "function" != typeof l &&
                    "symbol" != typeof l
                  ? e.setAttribute(n, l)
                  : e.removeAttribute(n);
              break;
            case "cols":
            case "rows":
            case "size":
            case "span":
              null != l &&
              "function" != typeof l &&
              "symbol" != typeof l &&
              !isNaN(l) &&
              1 <= l
                ? e.setAttribute(n, l)
                : e.removeAttribute(n);
              break;
            case "rowSpan":
            case "start":
              null == l ||
              "function" == typeof l ||
              "symbol" == typeof l ||
              isNaN(l)
                ? e.removeAttribute(n)
                : e.setAttribute(n, l);
              break;
            case "popover":
              (ed("beforetoggle", e), ed("toggle", e), ft(e, "popover", l));
              break;
            case "xlinkActuate":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:actuate", l);
              break;
            case "xlinkArcrole":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", l);
              break;
            case "xlinkRole":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:role", l);
              break;
            case "xlinkShow":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:show", l);
              break;
            case "xlinkTitle":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:title", l);
              break;
            case "xlinkType":
              ht(e, "http://www.w3.org/1999/xlink", "xlink:type", l);
              break;
            case "xmlBase":
              ht(e, "http://www.w3.org/XML/1998/namespace", "xml:base", l);
              break;
            case "xmlLang":
              ht(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", l);
              break;
            case "xmlSpace":
              ht(e, "http://www.w3.org/XML/1998/namespace", "xml:space", l);
              break;
            case "is":
              ft(e, "is", l);
              break;
            case "innerText":
            case "textContent":
              break;
            default:
              (!(2 < n.length) ||
                ("o" !== n[0] && "O" !== n[0]) ||
                ("n" !== n[1] && "N" !== n[1])) &&
                ft(e, (n = Tt.get(n) || n), l);
          }
        }
        function md(e, t, n, l, a, i) {
          switch (n) {
            case "style":
              Pt(e, l, i);
              break;
            case "dangerouslySetInnerHTML":
              if (null != l) {
                if ("object" != typeof l || !("__html" in l))
                  throw Error(r(61));
                if (null != (n = l.__html)) {
                  if (null != a.children) throw Error(r(60));
                  e.innerHTML = n;
                }
              }
              break;
            case "children":
              "string" == typeof l
                ? Et(e, l)
                : ("number" == typeof l || "bigint" == typeof l) &&
                  Et(e, "" + l);
              break;
            case "onScroll":
              null != l && ed("scroll", e);
              break;
            case "onScrollEnd":
              null != l && ed("scrollend", e);
              break;
            case "onClick":
              null != l && (e.onclick = Ot);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
            case "innerText":
            case "textContent":
              break;
            default:
              it.hasOwnProperty(n) ||
                ("o" !== n[0] ||
                "n" !== n[1] ||
                ((a = n.endsWith("Capture")),
                (t = n.slice(2, a ? n.length - 7 : void 0)),
                "function" ==
                  typeof (i = null != (i = e[qe] || null) ? i[n] : null) &&
                  e.removeEventListener(t, i, a),
                "function" != typeof l)
                  ? n in e
                    ? (e[n] = l)
                    : !0 === l
                      ? e.setAttribute(n, "")
                      : ft(e, n, l)
                  : ("function" != typeof i &&
                      null !== i &&
                      (n in e
                        ? (e[n] = null)
                        : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(t, l, a)));
          }
        }
        function gd(e, t, n) {
          switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
              break;
            case "img":
              (ed("error", e), ed("load", e));
              var l,
                a = !1,
                i = !1;
              for (l in n)
                if (n.hasOwnProperty(l)) {
                  var s = n[l];
                  if (null != s)
                    switch (l) {
                      case "src":
                        a = !0;
                        break;
                      case "srcSet":
                        i = !0;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        throw Error(r(137, t));
                      default:
                        hd(e, t, l, s, n, null);
                    }
                }
              return (
                i && hd(e, t, "srcSet", n.srcSet, n, null),
                void (a && hd(e, t, "src", n.src, n, null))
              );
            case "input":
              ed("invalid", e);
              var o = (l = s = i = null),
                c = null,
                u = null;
              for (a in n)
                if (n.hasOwnProperty(a)) {
                  var d = n[a];
                  if (null != d)
                    switch (a) {
                      case "name":
                        i = d;
                        break;
                      case "type":
                        s = d;
                        break;
                      case "checked":
                        c = d;
                        break;
                      case "defaultChecked":
                        u = d;
                        break;
                      case "value":
                        l = d;
                        break;
                      case "defaultValue":
                        o = d;
                        break;
                      case "children":
                      case "dangerouslySetInnerHTML":
                        if (null != d) throw Error(r(137, t));
                        break;
                      default:
                        hd(e, t, a, d, n, null);
                    }
                }
              return void jt(e, l, o, c, u, s, i, !1);
            case "select":
              for (i in (ed("invalid", e), (a = s = l = null), n))
                if (n.hasOwnProperty(i) && null != (o = n[i]))
                  switch (i) {
                    case "value":
                      l = o;
                      break;
                    case "defaultValue":
                      s = o;
                      break;
                    case "multiple":
                      a = o;
                    default:
                      hd(e, t, i, o, n, null);
                  }
              return (
                (t = l),
                (n = s),
                (e.multiple = !!a),
                void (null != t
                  ? Nt(e, !!a, t, !1)
                  : null != n && Nt(e, !!a, n, !0))
              );
            case "textarea":
              for (s in (ed("invalid", e), (l = i = a = null), n))
                if (n.hasOwnProperty(s) && null != (o = n[s]))
                  switch (s) {
                    case "value":
                      a = o;
                      break;
                    case "defaultValue":
                      i = o;
                      break;
                    case "children":
                      l = o;
                      break;
                    case "dangerouslySetInnerHTML":
                      if (null != o) throw Error(r(91));
                      break;
                    default:
                      hd(e, t, s, o, n, null);
                  }
              return void Ct(e, a, i, l);
            case "option":
              for (c in n)
                n.hasOwnProperty(c) &&
                  null != (a = n[c]) &&
                  ("selected" === c
                    ? (e.selected =
                        a && "function" != typeof a && "symbol" != typeof a)
                    : hd(e, t, c, a, n, null));
              return;
            case "dialog":
              (ed("beforetoggle", e),
                ed("toggle", e),
                ed("cancel", e),
                ed("close", e));
              break;
            case "iframe":
            case "object":
              ed("load", e);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Xu.length; a++) ed(Xu[a], e);
              break;
            case "image":
              (ed("error", e), ed("load", e));
              break;
            case "details":
              ed("toggle", e);
              break;
            case "embed":
            case "source":
            case "link":
              (ed("error", e), ed("load", e));
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
              for (u in n)
                if (n.hasOwnProperty(u) && null != (a = n[u]))
                  switch (u) {
                    case "children":
                    case "dangerouslySetInnerHTML":
                      throw Error(r(137, t));
                    default:
                      hd(e, t, u, a, n, null);
                  }
              return;
            default:
              if (At(t)) {
                for (d in n)
                  n.hasOwnProperty(d) &&
                    void 0 !== (a = n[d]) &&
                    md(e, t, d, a, n, void 0);
                return;
              }
          }
          for (o in n)
            n.hasOwnProperty(o) &&
              null != (a = n[o]) &&
              hd(e, t, o, a, n, null);
        }
        function bd(e) {
          switch (e) {
            case "css":
            case "script":
            case "font":
            case "img":
            case "image":
            case "input":
            case "link":
              return !0;
            default:
              return !1;
          }
        }
        var vd = null,
          yd = null;
        function xd(e) {
          return 9 === e.nodeType ? e : e.ownerDocument;
        }
        function kd(e) {
          switch (e) {
            case "http://www.w3.org/2000/svg":
              return 1;
            case "http://www.w3.org/1998/Math/MathML":
              return 2;
            default:
              return 0;
          }
        }
        function wd(e, t) {
          if (0 === e)
            switch (t) {
              case "svg":
                return 1;
              case "math":
                return 2;
              default:
                return 0;
            }
          return 1 === e && "foreignObject" === t ? 0 : e;
        }
        function jd(e, t) {
          return (
            "textarea" === e ||
            "noscript" === e ||
            "string" == typeof t.children ||
            "number" == typeof t.children ||
            "bigint" == typeof t.children ||
            ("object" == typeof t.dangerouslySetInnerHTML &&
              null !== t.dangerouslySetInnerHTML &&
              null != t.dangerouslySetInnerHTML.__html)
          );
        }
        var Sd = null,
          Nd = "function" == typeof setTimeout ? setTimeout : void 0,
          _d = "function" == typeof clearTimeout ? clearTimeout : void 0,
          Cd = "function" == typeof Promise ? Promise : void 0,
          Ed =
            "function" == typeof queueMicrotask
              ? queueMicrotask
              : typeof Cd < "u"
                ? function (e) {
                    return Cd.resolve(null).then(e).catch(Md);
                  }
                : Nd;
        function Md(e) {
          setTimeout(function () {
            throw e;
          });
        }
        function zd(e) {
          return "head" === e;
        }
        function Pd(e, t) {
          var n = t,
            r = 0;
          do {
            var l = n.nextSibling;
            if ((e.removeChild(n), l && 8 === l.nodeType))
              if ("/$" === (n = l.data) || "/&" === n) {
                if (0 === r) return (e.removeChild(l), void Gf(t));
                r--;
              } else if (
                "$" === n ||
                "$?" === n ||
                "$~" === n ||
                "$!" === n ||
                "&" === n
              )
                r++;
              else if ("html" === n) Hd(e.ownerDocument.documentElement);
              else if ("head" === n) {
                Hd((n = e.ownerDocument.head));
                for (var a = n.firstChild; a; ) {
                  var i = a.nextSibling,
                    s = a.nodeName;
                  (a[Ze] ||
                    "SCRIPT" === s ||
                    "STYLE" === s ||
                    ("LINK" === s && "stylesheet" === a.rel.toLowerCase()) ||
                    n.removeChild(a),
                    (a = i));
                }
              } else "body" === n && Hd(e.ownerDocument.body);
            n = l;
          } while (n);
          Gf(t);
        }
        function Ad(e, t) {
          var n = e;
          e = 0;
          do {
            var r = n.nextSibling;
            if (
              (1 === n.nodeType
                ? t
                  ? ((n._stashedDisplay = n.style.display),
                    (n.style.display = "none"))
                  : ((n.style.display = n._stashedDisplay || ""),
                    "" === n.getAttribute("style") &&
                      n.removeAttribute("style"))
                : 3 === n.nodeType &&
                  (t
                    ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
                    : (n.nodeValue = n._stashedText || "")),
              r && 8 === r.nodeType)
            )
              if ("/$" === (n = r.data)) {
                if (0 === e) break;
                e--;
              } else
                ("$" !== n && "$?" !== n && "$~" !== n && "$!" !== n) || e++;
            n = r;
          } while (n);
        }
        function Td(e) {
          var t = e.firstChild;
          for (t && 10 === t.nodeType && (t = t.nextSibling); t; ) {
            var n = t;
            switch (((t = t.nextSibling), n.nodeName)) {
              case "HTML":
              case "HEAD":
              case "BODY":
                (Td(n), Je(n));
                continue;
              case "SCRIPT":
              case "STYLE":
                continue;
              case "LINK":
                if ("stylesheet" === n.rel.toLowerCase()) continue;
            }
            e.removeChild(n);
          }
        }
        function Ld(e, t) {
          for (; 8 !== e.nodeType; )
            if (
              ((1 !== e.nodeType ||
                "INPUT" !== e.nodeName ||
                "hidden" !== e.type) &&
                !t) ||
              null === (e = Dd(e.nextSibling))
            )
              return null;
          return e;
        }
        function Rd(e) {
          return "$?" === e.data || "$~" === e.data;
        }
        function Od(e) {
          return (
            "$!" === e.data ||
            ("$?" === e.data && "loading" !== e.ownerDocument.readyState)
          );
        }
        function Dd(e) {
          for (; null != e; e = e.nextSibling) {
            var t = e.nodeType;
            if (1 === t || 3 === t) break;
            if (8 === t) {
              if (
                "$" === (t = e.data) ||
                "$!" === t ||
                "$?" === t ||
                "$~" === t ||
                "&" === t ||
                "F!" === t ||
                "F" === t
              )
                break;
              if ("/$" === t || "/&" === t) return null;
            }
          }
          return e;
        }
        var Id = null;
        function Fd(e) {
          e = e.nextSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if ("/$" === n || "/&" === n) {
                if (0 === t) return Dd(e.nextSibling);
                t--;
              } else
                ("$" !== n &&
                  "$!" !== n &&
                  "$?" !== n &&
                  "$~" !== n &&
                  "&" !== n) ||
                  t++;
            }
            e = e.nextSibling;
          }
          return null;
        }
        function Ud(e) {
          e = e.previousSibling;
          for (var t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data;
              if (
                "$" === n ||
                "$!" === n ||
                "$?" === n ||
                "$~" === n ||
                "&" === n
              ) {
                if (0 === t) return e;
                t--;
              } else ("/$" !== n && "/&" !== n) || t++;
            }
            e = e.previousSibling;
          }
          return null;
        }
        function $d(e, t, n) {
          switch (((t = xd(n)), e)) {
            case "html":
              if (!(e = t.documentElement)) throw Error(r(452));
              return e;
            case "head":
              if (!(e = t.head)) throw Error(r(453));
              return e;
            case "body":
              if (!(e = t.body)) throw Error(r(454));
              return e;
            default:
              throw Error(r(451));
          }
        }
        function Hd(e) {
          for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
          Je(e);
        }
        var Bd = new Map(),
          Vd = new Set();
        function Wd(e) {
          return "function" == typeof e.getRootNode
            ? e.getRootNode()
            : 9 === e.nodeType
              ? e
              : e.ownerDocument;
        }
        var qd = F.d;
        F.d = {
          f: function () {
            var e = qd.f(),
              t = ru();
            return e || t;
          },
          r: function (e) {
            var t = tt(e);
            null !== t && 5 === t.tag && "form" === t.type ? is(t) : qd.r(e);
          },
          D: function (e) {
            (qd.D(e), Kd("dns-prefetch", e, null));
          },
          C: function (e, t) {
            (qd.C(e, t), Kd("preconnect", e, t));
          },
          L: function (e, t, n) {
            qd.L(e, t, n);
            var r = Qd;
            if (r && e && t) {
              var l = 'link[rel="preload"][as="' + kt(t) + '"]';
              "image" === t && n && n.imageSrcSet
                ? ((l += '[imagesrcset="' + kt(n.imageSrcSet) + '"]'),
                  "string" == typeof n.imageSizes &&
                    (l += '[imagesizes="' + kt(n.imageSizes) + '"]'))
                : (l += '[href="' + kt(e) + '"]');
              var a = l;
              switch (t) {
                case "style":
                  a = Yd(e);
                  break;
                case "script":
                  a = Jd(e);
              }
              Bd.has(a) ||
                ((e = d(
                  {
                    rel: "preload",
                    href: "image" === t && n && n.imageSrcSet ? void 0 : e,
                    as: t,
                  },
                  n,
                )),
                Bd.set(a, e),
                null !== r.querySelector(l) ||
                  ("style" === t && r.querySelector(Xd(a))) ||
                  ("script" === t && r.querySelector(ef(a))) ||
                  (gd((t = r.createElement("link")), "link", e),
                  lt(t),
                  r.head.appendChild(t)));
            }
          },
          m: function (e, t) {
            qd.m(e, t);
            var n = Qd;
            if (n && e) {
              var r = t && "string" == typeof t.as ? t.as : "script",
                l =
                  'link[rel="modulepreload"][as="' +
                  kt(r) +
                  '"][href="' +
                  kt(e) +
                  '"]',
                a = l;
              switch (r) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                  a = Jd(e);
              }
              if (
                !Bd.has(a) &&
                ((e = d({ rel: "modulepreload", href: e }, t)),
                Bd.set(a, e),
                null === n.querySelector(l))
              ) {
                switch (r) {
                  case "audioworklet":
                  case "paintworklet":
                  case "serviceworker":
                  case "sharedworker":
                  case "worker":
                  case "script":
                    if (n.querySelector(ef(a))) return;
                }
                (gd((r = n.createElement("link")), "link", e),
                  lt(r),
                  n.head.appendChild(r));
              }
            }
          },
          X: function (e, t) {
            qd.X(e, t);
            var n = Qd;
            if (n && e) {
              var r = rt(n).hoistableScripts,
                l = Jd(e),
                a = r.get(l);
              a ||
                ((a = n.querySelector(ef(l))) ||
                  ((e = d({ src: e, async: !0 }, t)),
                  (t = Bd.get(l)) && lf(e, t),
                  lt((a = n.createElement("script"))),
                  gd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(l, a));
            }
          },
          S: function (e, t, n) {
            qd.S(e, t, n);
            var r = Qd;
            if (r && e) {
              var l = rt(r).hoistableStyles,
                a = Yd(e);
              t = t || "default";
              var i = l.get(a);
              if (!i) {
                var s = { loading: 0, preload: null };
                if ((i = r.querySelector(Xd(a)))) s.loading = 5;
                else {
                  ((e = d(
                    { rel: "stylesheet", href: e, "data-precedence": t },
                    n,
                  )),
                    (n = Bd.get(a)) && rf(e, n));
                  var o = (i = r.createElement("link"));
                  (lt(o),
                    gd(o, "link", e),
                    (o._p = new Promise(function (e, t) {
                      ((o.onload = e), (o.onerror = t));
                    })),
                    o.addEventListener("load", function () {
                      s.loading |= 1;
                    }),
                    o.addEventListener("error", function () {
                      s.loading |= 2;
                    }),
                    (s.loading |= 4),
                    nf(i, t, r));
                }
                ((i = { type: "stylesheet", instance: i, count: 1, state: s }),
                  l.set(a, i));
              }
            }
          },
          M: function (e, t) {
            qd.M(e, t);
            var n = Qd;
            if (n && e) {
              var r = rt(n).hoistableScripts,
                l = Jd(e),
                a = r.get(l);
              a ||
                ((a = n.querySelector(ef(l))) ||
                  ((e = d({ src: e, async: !0, type: "module" }, t)),
                  (t = Bd.get(l)) && lf(e, t),
                  lt((a = n.createElement("script"))),
                  gd(a, "link", e),
                  n.head.appendChild(a)),
                (a = { type: "script", instance: a, count: 1, state: null }),
                r.set(l, a));
            }
          },
        };
        var Qd = typeof document > "u" ? null : document;
        function Kd(e, t, n) {
          var r = Qd;
          if (r && "string" == typeof t && t) {
            var l = kt(t);
            ((l = 'link[rel="' + e + '"][href="' + l + '"]'),
              "string" == typeof n && (l += '[crossorigin="' + n + '"]'),
              Vd.has(l) ||
                (Vd.add(l),
                (e = { rel: e, crossOrigin: n, href: t }),
                null === r.querySelector(l) &&
                  (gd((t = r.createElement("link")), "link", e),
                  lt(t),
                  r.head.appendChild(t))));
          }
        }
        function Gd(e, t, n, l) {
          var a = (a = Y.current) ? Wd(a) : null;
          if (!a) throw Error(r(446));
          switch (e) {
            case "meta":
            case "title":
              return null;
            case "style":
              return "string" == typeof n.precedence &&
                "string" == typeof n.href
                ? ((t = Yd(n.href)),
                  (l = (n = rt(a).hoistableStyles).get(t)) ||
                    ((l = {
                      type: "style",
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    n.set(t, l)),
                  l)
                : { type: "void", instance: null, count: 0, state: null };
            case "link":
              if (
                "stylesheet" === n.rel &&
                "string" == typeof n.href &&
                "string" == typeof n.precedence
              ) {
                e = Yd(n.href);
                var i = rt(a).hoistableStyles,
                  s = i.get(e);
                if (
                  (s ||
                    ((a = a.ownerDocument || a),
                    (s = {
                      type: "stylesheet",
                      instance: null,
                      count: 0,
                      state: { loading: 0, preload: null },
                    }),
                    i.set(e, s),
                    (i = a.querySelector(Xd(e))) &&
                      !i._p &&
                      ((s.instance = i), (s.state.loading = 5)),
                    Bd.has(e) ||
                      ((n = {
                        rel: "preload",
                        as: "style",
                        href: n.href,
                        crossOrigin: n.crossOrigin,
                        integrity: n.integrity,
                        media: n.media,
                        hrefLang: n.hrefLang,
                        referrerPolicy: n.referrerPolicy,
                      }),
                      Bd.set(e, n),
                      i ||
                        (function (e, t, n, r) {
                          e.querySelector(
                            'link[rel="preload"][as="style"][' + t + "]",
                          )
                            ? (r.loading = 1)
                            : ((t = e.createElement("link")),
                              (r.preload = t),
                              t.addEventListener("load", function () {
                                return (r.loading |= 1);
                              }),
                              t.addEventListener("error", function () {
                                return (r.loading |= 2);
                              }),
                              gd(t, "link", n),
                              lt(t),
                              e.head.appendChild(t));
                        })(a, e, n, s.state))),
                  t && null === l)
                )
                  throw Error(r(528, ""));
                return s;
              }
              if (t && null !== l) throw Error(r(529, ""));
              return null;
            case "script":
              return (
                (t = n.async),
                "string" == typeof (n = n.src) &&
                t &&
                "function" != typeof t &&
                "symbol" != typeof t
                  ? ((t = Jd(n)),
                    (l = (n = rt(a).hoistableScripts).get(t)) ||
                      ((l = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null,
                      }),
                      n.set(t, l)),
                    l)
                  : { type: "void", instance: null, count: 0, state: null }
              );
            default:
              throw Error(r(444, e));
          }
        }
        function Yd(e) {
          return 'href="' + kt(e) + '"';
        }
        function Xd(e) {
          return 'link[rel="stylesheet"][' + e + "]";
        }
        function Zd(e) {
          return d({}, e, {
            "data-precedence": e.precedence,
            precedence: null,
          });
        }
        function Jd(e) {
          return '[src="' + kt(e) + '"]';
        }
        function ef(e) {
          return "script[async]" + e;
        }
        function tf(e, t, n) {
          if ((t.count++, null === t.instance))
            switch (t.type) {
              case "style":
                var l = e.querySelector(
                  'style[data-href~="' + kt(n.href) + '"]',
                );
                if (l) return ((t.instance = l), lt(l), l);
                var a = d({}, n, {
                  "data-href": n.href,
                  "data-precedence": n.precedence,
                  href: null,
                  precedence: null,
                });
                return (
                  lt((l = (e.ownerDocument || e).createElement("style"))),
                  gd(l, "style", a),
                  nf(l, n.precedence, e),
                  (t.instance = l)
                );
              case "stylesheet":
                a = Yd(n.href);
                var i = e.querySelector(Xd(a));
                if (i)
                  return ((t.state.loading |= 4), (t.instance = i), lt(i), i);
                ((l = Zd(n)),
                  (a = Bd.get(a)) && rf(l, a),
                  lt((i = (e.ownerDocument || e).createElement("link"))));
                var s = i;
                return (
                  (s._p = new Promise(function (e, t) {
                    ((s.onload = e), (s.onerror = t));
                  })),
                  gd(i, "link", l),
                  (t.state.loading |= 4),
                  nf(i, n.precedence, e),
                  (t.instance = i)
                );
              case "script":
                return (
                  (i = Jd(n.src)),
                  (a = e.querySelector(ef(i)))
                    ? ((t.instance = a), lt(a), a)
                    : ((l = n),
                      (a = Bd.get(i)) && lf((l = d({}, n)), a),
                      lt(
                        (a = (e = e.ownerDocument || e).createElement(
                          "script",
                        )),
                      ),
                      gd(a, "link", l),
                      e.head.appendChild(a),
                      (t.instance = a))
                );
              case "void":
                return null;
              default:
                throw Error(r(443, t.type));
            }
          else
            "stylesheet" === t.type &&
              !(4 & t.state.loading) &&
              ((l = t.instance),
              (t.state.loading |= 4),
              nf(l, n.precedence, e));
          return t.instance;
        }
        function nf(e, t, n) {
          for (
            var r = n.querySelectorAll(
                'link[rel="stylesheet"][data-precedence],style[data-precedence]',
              ),
              l = r.length ? r[r.length - 1] : null,
              a = l,
              i = 0;
            i < r.length;
            i++
          ) {
            var s = r[i];
            if (s.dataset.precedence === t) a = s;
            else if (a !== l) break;
          }
          a
            ? a.parentNode.insertBefore(e, a.nextSibling)
            : (t = 9 === n.nodeType ? n.head : n).insertBefore(e, t.firstChild);
        }
        function rf(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.title && (e.title = t.title));
        }
        function lf(e, t) {
          (null == e.crossOrigin && (e.crossOrigin = t.crossOrigin),
            null == e.referrerPolicy && (e.referrerPolicy = t.referrerPolicy),
            null == e.integrity && (e.integrity = t.integrity));
        }
        var af = null;
        function sf(e, t, n) {
          if (null === af) {
            var r = new Map(),
              l = (af = new Map());
            l.set(n, r);
          } else (r = (l = af).get(n)) || ((r = new Map()), l.set(n, r));
          if (r.has(e)) return r;
          for (
            r.set(e, null), n = n.getElementsByTagName(e), l = 0;
            l < n.length;
            l++
          ) {
            var a = n[l];
            if (
              !(
                a[Ze] ||
                a[We] ||
                ("link" === e && "stylesheet" === a.getAttribute("rel"))
              ) &&
              "http://www.w3.org/2000/svg" !== a.namespaceURI
            ) {
              var i = a.getAttribute(t) || "";
              i = e + i;
              var s = r.get(i);
              s ? s.push(a) : r.set(i, [a]);
            }
          }
          return r;
        }
        function of(e, t, n) {
          (e = e.ownerDocument || e).head.insertBefore(
            n,
            "title" === t ? e.querySelector("head > title") : null,
          );
        }
        function cf(e) {
          return !("stylesheet" === e.type && !(3 & e.state.loading));
        }
        var uf = 0;
        function df() {
          if (
            (this.count--,
            0 === this.count && (0 === this.imgCount || !this.waitingForImages))
          )
            if (this.stylesheets) pf(this, this.stylesheets);
            else if (this.unsuspend) {
              var e = this.unsuspend;
              ((this.unsuspend = null), e());
            }
        }
        var ff = null;
        function pf(e, t) {
          ((e.stylesheets = null),
            null !== e.unsuspend &&
              (e.count++,
              (ff = new Map()),
              t.forEach(hf, e),
              (ff = null),
              df.call(e)));
        }
        function hf(e, t) {
          if (!(4 & t.state.loading)) {
            var n = ff.get(e);
            if (n) var r = n.get(null);
            else {
              ((n = new Map()), ff.set(e, n));
              for (
                var l = e.querySelectorAll(
                    "link[data-precedence],style[data-precedence]",
                  ),
                  a = 0;
                a < l.length;
                a++
              ) {
                var i = l[a];
                ("LINK" === i.nodeName ||
                  "not all" !== i.getAttribute("media")) &&
                  (n.set(i.dataset.precedence, i), (r = i));
              }
              r && n.set(null, r);
            }
            ((i = (l = t.instance).getAttribute("data-precedence")),
              (a = n.get(i) || r) === r && n.set(null, l),
              n.set(i, l),
              this.count++,
              (r = df.bind(this)),
              l.addEventListener("load", r),
              l.addEventListener("error", r),
              a
                ? a.parentNode.insertBefore(l, a.nextSibling)
                : (e = 9 === e.nodeType ? e.head : e).insertBefore(
                    l,
                    e.firstChild,
                  ),
              (t.state.loading |= 4));
          }
        }
        var mf = {
          $$typeof: N,
          Provider: null,
          Consumer: null,
          _currentValue: U,
          _currentValue2: U,
          _threadCount: 0,
        };
        function gf(e, t, n, r, l, a, i, s, o) {
          ((this.tag = 1),
            (this.containerInfo = e),
            (this.pingCache = this.current = this.pendingChildren = null),
            (this.timeoutHandle = -1),
            (this.callbackNode =
              this.next =
              this.pendingContext =
              this.context =
              this.cancelPendingCommit =
                null),
            (this.callbackPriority = 0),
            (this.expirationTimes = Re(-1)),
            (this.entangledLanes =
              this.shellSuspendCounter =
              this.errorRecoveryDisabledLanes =
              this.expiredLanes =
              this.warmLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = Re(0)),
            (this.hiddenUpdates = Re(null)),
            (this.identifierPrefix = r),
            (this.onUncaughtError = l),
            (this.onCaughtError = a),
            (this.onRecoverableError = i),
            (this.pooledCache = null),
            (this.pooledCacheLanes = 0),
            (this.formState = o),
            (this.incompleteTransitions = new Map()));
        }
        function bf(e, t, n, r, l, a, i, s, o, c, u, d) {
          return (
            (e = new gf(e, t, n, i, o, c, u, d, s)),
            (t = 1),
            !0 === a && (t |= 24),
            (a = Hr(3, null, null, t)),
            (e.current = a),
            (a.stateNode = e),
            (t = Bl()).refCount++,
            (e.pooledCache = t),
            t.refCount++,
            (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
            xa(a),
            e
          );
        }
        function vf(e) {
          return e ? (e = Ur) : Ur;
        }
        function yf(e, t, n, r, l, a) {
          ((l = vf(l)),
            null === r.context ? (r.context = l) : (r.pendingContext = l),
            ((r = wa(t)).payload = { element: n }),
            null !== (a = void 0 === a ? null : a) && (r.callback = a),
            null !== (n = ja(e, r, t)) && (Zc(n, 0, t), Sa(n, e, t)));
        }
        function xf(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function kf(e, t) {
          (xf(e, t), (e = e.alternate) && xf(e, t));
        }
        function wf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Dr(e, 67108864);
            (null !== t && Zc(t, 0, 67108864), kf(e, 67108864));
          }
        }
        function jf(e) {
          if (13 === e.tag || 31 === e.tag) {
            var t = Yc(),
              n = Dr(e, (t = Ue(t)));
            (null !== n && Zc(n, 0, t), kf(e, t));
          }
        }
        var Sf = !0;
        function Nf(e, t, n, r) {
          var l = I.T;
          I.T = null;
          var a = F.p;
          try {
            ((F.p = 2), Cf(e, t, n, r));
          } finally {
            ((F.p = a), (I.T = l));
          }
        }
        function _f(e, t, n, r) {
          var l = I.T;
          I.T = null;
          var a = F.p;
          try {
            ((F.p = 8), Cf(e, t, n, r));
          } finally {
            ((F.p = a), (I.T = l));
          }
        }
        function Cf(e, t, n, r) {
          if (Sf) {
            var l = Ef(r);
            if (null === l) (ad(e, t, r, Mf, n), Uf(e, r));
            else if (
              (function (e, t, n, r, l) {
                switch (t) {
                  case "focusin":
                    return ((Tf = $f(Tf, e, t, n, r, l)), !0);
                  case "dragenter":
                    return ((Lf = $f(Lf, e, t, n, r, l)), !0);
                  case "mouseover":
                    return ((Rf = $f(Rf, e, t, n, r, l)), !0);
                  case "pointerover":
                    var a = l.pointerId;
                    return (
                      Of.set(a, $f(Of.get(a) || null, e, t, n, r, l)),
                      !0
                    );
                  case "gotpointercapture":
                    return (
                      (a = l.pointerId),
                      Df.set(a, $f(Df.get(a) || null, e, t, n, r, l)),
                      !0
                    );
                }
                return !1;
              })(l, e, t, n, r)
            )
              r.stopPropagation();
            else if ((Uf(e, r), 4 & t && -1 < Ff.indexOf(e))) {
              for (; null !== l; ) {
                var a = tt(l);
                if (null !== a)
                  switch (a.tag) {
                    case 3:
                      if (
                        (a = a.stateNode).current.memoizedState.isDehydrated
                      ) {
                        var i = ze(a.pendingLanes);
                        if (0 !== i) {
                          var s = a;
                          for (
                            s.pendingLanes |= 2, s.entangledLanes |= 2;
                            i;

                          ) {
                            var o = 1 << (31 - Se(i));
                            ((s.entanglements[1] |= o), (i &= ~o));
                          }
                          (Fu(a), !(6 & bc) && ((Ic = fe() + 500), Uu(0)));
                        }
                      }
                      break;
                    case 31:
                    case 13:
                      (null !== (s = Dr(a, 2)) && Zc(s, 0, 2), ru(), kf(a, 2));
                  }
                if ((null === (a = Ef(r)) && ad(e, t, r, Mf, n), a === l))
                  break;
                l = a;
              }
              null !== l && r.stopPropagation();
            } else ad(e, t, r, null, n);
          }
        }
        function Ef(e) {
          return zf((e = It(e)));
        }
        var Mf = null;
        function zf(e) {
          if (((Mf = null), null !== (e = et(e)))) {
            var t = a(e);
            if (null === t) e = null;
            else {
              var n = t.tag;
              if (13 === n) {
                if (null !== (e = i(t))) return e;
                e = null;
              } else if (31 === n) {
                if (null !== (e = s(t))) return e;
                e = null;
              } else if (3 === n) {
                if (t.stateNode.current.memoizedState.isDehydrated)
                  return 3 === t.tag ? t.stateNode.containerInfo : null;
                e = null;
              } else t !== e && (e = null);
            }
          }
          return ((Mf = e), null);
        }
        function Pf(e) {
          switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
              return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
              return 8;
            case "message":
              switch (pe()) {
                case he:
                  return 2;
                case me:
                  return 8;
                case ge:
                case be:
                  return 32;
                case ve:
                  return 268435456;
                default:
                  return 32;
              }
            default:
              return 32;
          }
        }
        var Af = !1,
          Tf = null,
          Lf = null,
          Rf = null,
          Of = new Map(),
          Df = new Map(),
          If = [],
          Ff =
            "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
              " ",
            );
        function Uf(e, t) {
          switch (e) {
            case "focusin":
            case "focusout":
              Tf = null;
              break;
            case "dragenter":
            case "dragleave":
              Lf = null;
              break;
            case "mouseover":
            case "mouseout":
              Rf = null;
              break;
            case "pointerover":
            case "pointerout":
              Of.delete(t.pointerId);
              break;
            case "gotpointercapture":
            case "lostpointercapture":
              Df.delete(t.pointerId);
          }
        }
        function $f(e, t, n, r, l, a) {
          return null === e || e.nativeEvent !== a
            ? ((e = {
                blockedOn: t,
                domEventName: n,
                eventSystemFlags: r,
                nativeEvent: a,
                targetContainers: [l],
              }),
              null !== t && null !== (t = tt(t)) && wf(t),
              e)
            : ((e.eventSystemFlags |= r),
              (t = e.targetContainers),
              null !== l && -1 === t.indexOf(l) && t.push(l),
              e);
        }
        function Hf(e) {
          var t = et(e.target);
          if (null !== t) {
            var n = a(t);
            if (null !== n)
              if (13 === (t = n.tag)) {
                if (null !== (t = i(n)))
                  return (
                    (e.blockedOn = t),
                    void Be(e.priority, function () {
                      jf(n);
                    })
                  );
              } else if (31 === t) {
                if (null !== (t = s(n)))
                  return (
                    (e.blockedOn = t),
                    void Be(e.priority, function () {
                      jf(n);
                    })
                  );
              } else if (
                3 === t &&
                n.stateNode.current.memoizedState.isDehydrated
              )
                return void (e.blockedOn =
                  3 === n.tag ? n.stateNode.containerInfo : null);
          }
          e.blockedOn = null;
        }
        function Bf(e) {
          if (null !== e.blockedOn) return !1;
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Ef(e.nativeEvent);
            if (null !== n)
              return (null !== (t = tt(n)) && wf(t), (e.blockedOn = n), !1);
            var r = new (n = e.nativeEvent).constructor(n.type, n);
            ((Dt = r), n.target.dispatchEvent(r), (Dt = null), t.shift());
          }
          return !0;
        }
        function Vf(e, t, n) {
          Bf(e) && n.delete(t);
        }
        function Wf() {
          ((Af = !1),
            null !== Tf && Bf(Tf) && (Tf = null),
            null !== Lf && Bf(Lf) && (Lf = null),
            null !== Rf && Bf(Rf) && (Rf = null),
            Of.forEach(Vf),
            Df.forEach(Vf));
        }
        function qf(t, n) {
          t.blockedOn === n &&
            ((t.blockedOn = null),
            Af ||
              ((Af = !0),
              e.unstable_scheduleCallback(e.unstable_NormalPriority, Wf)));
        }
        var Qf = null;
        function Kf(t) {
          Qf !== t &&
            ((Qf = t),
            e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
              Qf === t && (Qf = null);
              for (var e = 0; e < t.length; e += 3) {
                var n = t[e],
                  r = t[e + 1],
                  l = t[e + 2];
                if ("function" != typeof r) {
                  if (null === zf(r || n)) continue;
                  break;
                }
                var a = tt(n);
                null !== a &&
                  (t.splice(e, 3),
                  (e -= 3),
                  ls(
                    a,
                    { pending: !0, data: l, method: n.method, action: r },
                    r,
                    l,
                  ));
              }
            }));
        }
        function Gf(e) {
          function t(t) {
            return qf(t, e);
          }
          (null !== Tf && qf(Tf, e),
            null !== Lf && qf(Lf, e),
            null !== Rf && qf(Rf, e),
            Of.forEach(t),
            Df.forEach(t));
          for (var n = 0; n < If.length; n++) {
            var r = If[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
          for (; 0 < If.length && null === (n = If[0]).blockedOn; )
            (Hf(n), null === n.blockedOn && If.shift());
          if (null != (n = (e.ownerDocument || e).$$reactFormReplay))
            for (r = 0; r < n.length; r += 3) {
              var l = n[r],
                a = n[r + 1],
                i = l[qe] || null;
              if ("function" == typeof a) i || Kf(n);
              else if (i) {
                var s = null;
                if (a && a.hasAttribute("formAction")) {
                  if (((l = a), (i = a[qe] || null))) s = i.formAction;
                  else if (null !== zf(l)) continue;
                } else s = i.action;
                ("function" == typeof s
                  ? (n[r + 1] = s)
                  : (n.splice(r, 3), (r -= 3)),
                  Kf(n));
              }
            }
        }
        function Yf() {
          function e(e) {
            e.canIntercept &&
              "react-transition" === e.info &&
              e.intercept({
                handler: function () {
                  return new Promise(function (e) {
                    return (l = e);
                  });
                },
                focusReset: "manual",
                scroll: "manual",
              });
          }
          function t() {
            (null !== l && (l(), (l = null)), r || setTimeout(n, 20));
          }
          function n() {
            if (!r && !navigation.transition) {
              var e = navigation.currentEntry;
              e &&
                null != e.url &&
                navigation.navigate(e.url, {
                  state: e.getState(),
                  info: "react-transition",
                  history: "replace",
                });
            }
          }
          if ("object" == typeof navigation) {
            var r = !1,
              l = null;
            return (
              navigation.addEventListener("navigate", e),
              navigation.addEventListener("navigatesuccess", t),
              navigation.addEventListener("navigateerror", t),
              setTimeout(n, 100),
              function () {
                ((r = !0),
                  navigation.removeEventListener("navigate", e),
                  navigation.removeEventListener("navigatesuccess", t),
                  navigation.removeEventListener("navigateerror", t),
                  null !== l && (l(), (l = null)));
              }
            );
          }
        }
        function Xf(e) {
          this._internalRoot = e;
        }
        function Zf(e) {
          this._internalRoot = e;
        }
        ((Zf.prototype.render = Xf.prototype.render =
          function (e) {
            var t = this._internalRoot;
            if (null === t) throw Error(r(409));
            yf(t.current, Yc(), e, t, null, null);
          }),
          (Zf.prototype.unmount = Xf.prototype.unmount =
            function () {
              var e = this._internalRoot;
              if (null !== e) {
                this._internalRoot = null;
                var t = e.containerInfo;
                (yf(e.current, 2, null, e, null, null), ru(), (t[Qe] = null));
              }
            }),
          (Zf.prototype.unstable_scheduleHydration = function (e) {
            if (e) {
              var t = He();
              e = { blockedOn: null, target: e, priority: t };
              for (
                var n = 0;
                n < If.length && 0 !== t && t < If[n].priority;
                n++
              );
              (If.splice(n, 0, e), 0 === n && Hf(e));
            }
          }));
        var Jf = t.version;
        if ("19.2.7" !== Jf) throw Error(r(527, Jf, "19.2.7"));
        F.findDOMNode = function (e) {
          var t = e._reactInternals;
          if (void 0 === t)
            throw "function" == typeof e.render
              ? Error(r(188))
              : ((e = Object.keys(e).join(",")), Error(r(268, e)));
          return (
            (e = (function (e) {
              var t = e.alternate;
              if (!t) {
                if (null === (t = a(e))) throw Error(r(188));
                return t !== e ? null : e;
              }
              for (var n = e, l = t; ; ) {
                var i = n.return;
                if (null === i) break;
                var s = i.alternate;
                if (null === s) {
                  if (null !== (l = i.return)) {
                    n = l;
                    continue;
                  }
                  break;
                }
                if (i.child === s.child) {
                  for (s = i.child; s; ) {
                    if (s === n) return (o(i), e);
                    if (s === l) return (o(i), t);
                    s = s.sibling;
                  }
                  throw Error(r(188));
                }
                if (n.return !== l.return) ((n = i), (l = s));
                else {
                  for (var c = !1, u = i.child; u; ) {
                    if (u === n) {
                      ((c = !0), (n = i), (l = s));
                      break;
                    }
                    if (u === l) {
                      ((c = !0), (l = i), (n = s));
                      break;
                    }
                    u = u.sibling;
                  }
                  if (!c) {
                    for (u = s.child; u; ) {
                      if (u === n) {
                        ((c = !0), (n = s), (l = i));
                        break;
                      }
                      if (u === l) {
                        ((c = !0), (l = s), (n = i));
                        break;
                      }
                      u = u.sibling;
                    }
                    if (!c) throw Error(r(189));
                  }
                }
                if (n.alternate !== l) throw Error(r(190));
              }
              if (3 !== n.tag) throw Error(r(188));
              return n.stateNode.current === n ? e : t;
            })(t)),
            null === (e = null !== e ? u(e) : null) ? null : e.stateNode
          );
        };
        var ep = {
          bundleType: 0,
          version: "19.2.7",
          rendererPackageName: "react-dom",
          currentDispatcherRef: I,
          reconcilerVersion: "19.2.7",
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
          var tp = __REACT_DEVTOOLS_GLOBAL_HOOK__;
          if (!tp.isDisabled && tp.supportsFiber)
            try {
              ((ke = tp.inject(ep)), (we = tp));
            } catch {}
        }
        return (
          (h.createRoot = function (e, t) {
            if (!l(e)) throw Error(r(299));
            var n = !1,
              a = "",
              i = Cs,
              s = Es,
              o = Ms;
            return (
              null != t &&
                (!0 === t.unstable_strictMode && (n = !0),
                void 0 !== t.identifierPrefix && (a = t.identifierPrefix),
                void 0 !== t.onUncaughtError && (i = t.onUncaughtError),
                void 0 !== t.onCaughtError && (s = t.onCaughtError),
                void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
              (t = bf(e, 1, !1, null, 0, n, a, null, i, s, o, Yf)),
              (e[Qe] = t.current),
              rd(e),
              new Xf(t)
            );
          }),
          (h.hydrateRoot = function (e, t, n) {
            if (!l(e)) throw Error(r(299));
            var a = !1,
              i = "",
              s = Cs,
              o = Es,
              c = Ms,
              u = null;
            return (
              null != n &&
                (!0 === n.unstable_strictMode && (a = !0),
                void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
                void 0 !== n.onUncaughtError && (s = n.onUncaughtError),
                void 0 !== n.onCaughtError && (o = n.onCaughtError),
                void 0 !== n.onRecoverableError && (c = n.onRecoverableError),
                void 0 !== n.formState && (u = n.formState)),
              ((t = bf(e, 1, !0, t, 0, a, i, u, s, o, c, Yf)).context =
                vf(null)),
              (n = t.current),
              ((i = wa((a = Ue((a = Yc()))))).callback = null),
              ja(n, i, a),
              (n = a),
              (t.current.lanes = n),
              Oe(t, n),
              Fu(t),
              (e[Qe] = t.current),
              rd(e),
              new Zf(t)
            );
          }),
          (h.version = "19.2.7"),
          h
        );
      })())),
    p.exports);
  const _ = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    C = (e) => {
      const t = ((e) =>
        e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
          n ? n.toUpperCase() : t.toLowerCase(),
        ))(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    E = (...e) =>
      e
        .filter((e, t, n) => !!e && "" !== e.trim() && n.indexOf(e) === t)
        .join(" ")
        .trim(),
    M = (e) => {
      for (const t in e)
        if (t.startsWith("aria-") || "role" === t || "title" === t) return !0;
    };
  var z = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  const P = f.forwardRef(
      (
        {
          color: e = "currentColor",
          size: t = 24,
          strokeWidth: n = 2,
          absoluteStrokeWidth: r,
          className: l = "",
          children: a,
          iconNode: i,
          ...s
        },
        o,
      ) =>
        f.createElement(
          "svg",
          {
            ref: o,
            ...z,
            width: t,
            height: t,
            stroke: e,
            strokeWidth: r ? (24 * Number(n)) / Number(t) : n,
            className: E("lucide", l),
            ...(!a && !M(s) && { "aria-hidden": "true" }),
            ...s,
          },
          [
            ...i.map(([e, t]) => f.createElement(e, t)),
            ...(Array.isArray(a) ? a : [a]),
          ],
        ),
    ),
    A = (e, t) => {
      const n = f.forwardRef(({ className: n, ...r }, l) =>
        f.createElement(P, {
          ref: l,
          iconNode: t,
          className: E(`lucide-${_(C(e))}`, `lucide-${e}`, n),
          ...r,
        }),
      );
      return ((n.displayName = C(e)), n);
    },
    T = A("arrow-right", [
      ["path", { d: "M5 12h14", key: "1ays0h" }],
      ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
    ]),
    L = A("award", [
      [
        "path",
        {
          d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
          key: "1yiouv",
        },
      ],
      ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
    ]),
    R = A("calendar", [
      ["path", { d: "M8 2v4", key: "1cmpym" }],
      ["path", { d: "M16 2v4", key: "4m81vk" }],
      [
        "rect",
        { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
      ],
      ["path", { d: "M3 10h18", key: "8toen8" }],
    ]),
    O = A("chevron-down", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]),
    D = A("chevron-up", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]),
    I =
      (A("circle-check-big", [
        ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
        ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
      ]),
      A("cpu", [
        ["path", { d: "M12 20v2", key: "1lh1kg" }],
        ["path", { d: "M12 2v2", key: "tus03m" }],
        ["path", { d: "M17 20v2", key: "1rnc9c" }],
        ["path", { d: "M17 2v2", key: "11trls" }],
        ["path", { d: "M2 12h2", key: "1t8f8n" }],
        ["path", { d: "M2 17h2", key: "7oei6x" }],
        ["path", { d: "M2 7h2", key: "asdhe0" }],
        ["path", { d: "M20 12h2", key: "1q8mjw" }],
        ["path", { d: "M20 17h2", key: "1fpfkl" }],
        ["path", { d: "M20 7h2", key: "1o8tra" }],
        ["path", { d: "M7 20v2", key: "4gnj0m" }],
        ["path", { d: "M7 2v2", key: "1i4yhu" }],
        [
          "rect",
          { x: "4", y: "4", width: "16", height: "16", rx: "2", key: "1vbyd7" },
        ],
        [
          "rect",
          { x: "8", y: "8", width: "8", height: "8", rx: "1", key: "z9xiuo" },
        ],
      ])),
    F =
      (A("database", [
        ["ellipse", { cx: "12", cy: "5", rx: "9", ry: "3", key: "msslwz" }],
        ["path", { d: "M3 5V19A9 3 0 0 0 21 19V5", key: "1wlel7" }],
        ["path", { d: "M3 12A9 3 0 0 0 21 12", key: "mv7ke4" }],
      ]),
      A("info", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M12 16v-4", key: "1dtifu" }],
        ["path", { d: "M12 8h.01", key: "e9boi3" }],
      ]),
      A("layers", [
        [
          "path",
          {
            d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
            key: "zw3jo",
          },
        ],
        [
          "path",
          {
            d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
            key: "1wduqc",
          },
        ],
        [
          "path",
          {
            d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
            key: "kqbvx6",
          },
        ],
      ])),
    U = A("search", [
      ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
      ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
    ]),
    $ =
      (A("shield-check", [
        [
          "path",
          {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y",
          },
        ],
        ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
      ]),
      A("target", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
        ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }],
      ])),
    H = A("users", [
      [
        "path",
        { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" },
      ],
      ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
      ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
      ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
    ]),
    B = A("x", [
      ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
      ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    V = [
      {
        id: "mission",
        number: "01",
        label: "Миссия CRM-стратегии",
        shortLabel: "Миссия",
      },
      {
        id: "transformation",
        number: "02",
        label: "Место CRM в цифровой трансформации",
        shortLabel: "Трансформация",
      },
      {
        id: "problems",
        number: "03",
        label: "Текущее состояние: 8 проблем",
        shortLabel: "8 проблем",
      },
      {
        id: "goals",
        number: "04",
        label: "Цели CRM-стратегии",
        shortLabel: "5 целей",
      },
      {
        id: "metrics",
        number: "05",
        label: "Ключевые метрики",
        shortLabel: "Метрики",
      },
      {
        id: "business-case",
        number: "06",
        label: "Бизнес-кейс CRM",
        shortLabel: "Бизнес-кейс",
      },
    ],
    W = [
      {
        id: "crm",
        number: "01",
        title: "CRM как подход к ведению бизнеса",
        text: "Переосмысление процессов, мотивации, ролей и коммерческой дисциплины. Это бизнес-инициатива, а не просто ИТ-система.",
        contour: "Клиентский опыт и философия бизнеса",
      },
      {
        id: "fronts",
        number: "02",
        title: "Цифровые фронты",
        text: "Развитие каналов взаимодействия с клиентом и сквозной бесшовный опыт в мобильных и веб-каналах.",
        contour: "Клиентский опыт и философия бизнеса",
      },
      {
        id: "service",
        number: "03",
        title: "Единая сервисная модель",
        text: "Стандартизация обслуживания на всех уровнях отношений с клиентами.",
        contour: "Клиентский опыт и философия бизнеса",
      },
      {
        id: "operations",
        number: "04",
        title: "Операционная эффективность",
        text: "Автоматизация рутины, оптимизация регламентов, ускорение запуска продуктов и сокращение времени зачисления средств.",
        contour: "Данные, аналитика и инфраструктура",
      },
      {
        id: "data",
        number: "05",
        title: "Управление данными",
        text: "Качество данных, единый ID, Клиент 360 и консолидированный Портфель 360.",
        contour: "Данные, аналитика и инфраструктура",
      },
      {
        id: "analytics",
        number: "06",
        title: "Аналитические инструменты",
        text: "Управленческая отчётность, сквозная бизнес-аналитика, расчёт ROI и дерево метрик.",
        contour: "Данные, аналитика и инфраструктура",
      },
    ],
    q = [
      {
        title: "Нет целостного представления о клиенте",
        text: "CRM хранит не клиента, а набор разрозненных сущностей: лид, контакт, клиент. При переходе между статусами теряется история коммуникаций. Карточка клиента не содержит ключевой информации: портфель, продукты, связи с другими лицами, история касаний. Нет единого ID — возникают дубли, разрывы, потеря контекста и «рваная» аналитика.",
      },
      {
        title: "Продукт не работает как коммерческая сущность",
        text: "В CRM нет управляемого каталога и связи продукта с клиентом, портфелем, воронкой, кампанией и следующим действием. ФС не видит в одном контуре доступность, срок, валюту, риск, целевой профиль и ограничения продукта. Это блокирует событийные сценарии и аналитику продуктовой воронки.",
      },
      {
        title: "Портфель клиента не читается как рабочий инструмент",
        text: "ФС видит номера счетов и регуляторные отчёты вместо клиентского взгляда на портфель. Не хватает показателей эффективности, текущих свободных средств и прогноза поступлений по купонам, дивидендам и погашениям. Нет клиентского представления портфеля, сопоставимого с тем, что клиент видит в Цифровом фронте.",
      },
      {
        title: "CRM не помогает продавать проактивно",
        text: "Нет достаточного объёма структурированных событийных данных и продуктового слоя, который превращает сигнал в действие. ФС узнаёт о пополнениях, выводах, купонах, дивидендах и погашениях постфактум. CRM не связывает ожидаемый денежный поток, подходящий продукт, задачу ФС и коммуникационный сценарий.",
      },
      {
        title: "Эффективность ФС ограничена инструментально",
        text: "Для получения клиентских данных, брокерского отчёта, справок и операционных документов ФС переключается из CRM в Солид-Финанс и другие системы. Нет единого контура Outlook, календаря, шаблонов и задач от ситуации клиента. Поиск информации и ручная подготовка сокращают время на работу с клиентом.",
      },
      {
        title: "Нет сегментации по ценности клиента",
        text: "VIP-клиенты, развивающиеся клиенты и массовый сегмент сопровождаются одинаково. Нет различий в частоте контактов, формате участия ФС, уровне персонализации и приоритизации ресурса руководителей. Ресурс распыляется вместо концентрации на наиболее ценных клиентах. Компания опирается исключительно на AUM, а не на потенциал клиента.",
      },
      {
        title: "Сервисный процесс не замкнут в единый контур",
        text: "С 6 июля 2026 года ЕКЦ принимает обращения из мобильного приложения и личного кабинета, регистрирует их в CRM и накапливает операционную статистику. Это действующий фундамент, но остальные каналы, единая классификация, матрица маршрутизации, SLA, взаимодействие первой, второй и третьей линий и сквозная аналитика ещё находятся в развитии.",
      },
      {
        title: "Контроль и правила работы с данными отсутствуют",
        text: "Нет формализованной модели прав и владения данными, журнала аудита изменений и контролируемых выгрузок. Часть нужных данных нельзя получить даже в обезличенном виде, при этом отсутствуют встроенные целевые отчёты, которые закрывали бы потребность без ручных выгрузок в Excel.",
      },
    ],
    Q = [
      {
        title: "Управляемый рост клиентской базы и AUM",
        purpose:
          "CRM должна превратить рост клиентской базы и AUM из набора разрозненных коммерческих действий в управляемый процесс жизненного цикла клиента: от привлечения и первого фондирования до повторных продаж и развития действующей базы.",
        transition:
          "От разрозненных коммерческих действий и отсутствия сквозного клиентского цикла → к управляемой воронке от привлечения и первого фондирования до повторных продаж и развития действующей базы.",
        shift:
          "Продажи переходят от индивидуальной памяти ФС и ручного контроля к единой воронке, событийным триггерам, регулярному управлению воронкой и системной работе с потенциалом клиента.",
      },
      {
        title: "Увеличение продуктивности коммерческой команды",
        purpose:
          "CRM должна стать рабочим местом ФС, которое помогает быстрее понять клиента, выбрать следующий шаг, снизить ручную операционную нагрузку и освободить время для работы с клиентами.",
        transition:
          "От ручных операций, переключений между системами и зависимости от памяти ФС → к единому рабочему месту, автоматизации рутины и понятному следующему действию.",
        shift:
          "ФС работает не вокруг CRM ради фиксации активности, а через CRM как через инструмент ежедневного клиентского действия: подготовка, контакт, последующее действие, развитие отношений. Новый ФС выходит на рабочий ритм за дни, а не за месяцы.",
      },
      {
        title: "Удержание и развитие клиентов",
        purpose:
          "CRM должна обеспечить системную работу с действующей базой: покрытие отношениями, раннее выявление риска оттока, развитие портфеля, сегментную модель сопровождения и сквозное управление сервисными обращениями.",
        transition:
          "От одинаковой реактивной работы и разрозненной обработки запросов → к дифференцированной проактивной модели отношений и единому управляемому сервисному процессу с учётом ценности, потенциала, потребностей, жизненного цикла и значимых событий клиента.",
        shift:
          "Компания переходит к двум связанным контурам: проактивному управлению отношениями и единой сервисной модели. Сегмент определяет формат сопровождения, частоту контактов и уровень персонализации; конкретное обращение управляется как кейс с владельцем, маршрутом, SLA и контролируемым результатом.",
        serviceModel: {
          title: "Единая сервисная модель в составе цели 3",
          description:
            "Клиент и ФС взаимодействуют с единым контуром, даже если для решения требуется участие нескольких подразделений.",
          roles: [
            ["ЕКЦ", "контролирует движение обращения до результата"],
            ["Профильные линии", "предоставляют экспертное решение"],
            ["CRM", "сохраняет историю, маршрут, SLA и результат"],
            ["ФС", "видит кейс в общем клиентском контексте"],
          ],
        },
      },
      {
        title: "Единое информационное пространство о клиенте",
        purpose:
          "CRM должна собрать клиента как единую управляемую сущность: профиль, портфель, продукты, история взаимодействий, связи, ответственные и статус жизненного цикла. Клиент 360, Портфель 360 и уникальный сквозной ID — фундамент, без которого цели 1–3 не работают.",
        transition:
          "От разрозненных данных о клиенте, продуктах и портфеле и потери истории → к Клиенту 360, Портфелю 360, единому ID и сохраняемой истории отношений.",
        shift:
          "Ответственность за клиента становится управляемым процессом компании: фиксируются основной ФС, роли совместного ведения, правила доступа, передачи, замещения и ротации клиента. Это снижает конфликты между ФС, сохраняет историю отношений при смене ответственного и защищает клиентскую базу как актив компании.",
      },
      {
        title: "Управленческая прозрачность и решения на данных",
        purpose:
          "CRM должна дать руководителям видимость коммерческого и сервисного процесса: воронка, покрытие базы, продуктивность ФС, риски оттока, качество данных, своевременность коммерческих действий и выполнение SLA сервисных кейсов.",
        transition:
          "От ручных Excel-срезов и ограниченной управленческой видимости → к регулярному управлению на основе процессных данных CRM и финансовых показателей КХД.",
        shift:
          "Управление переходит от ручных Excel-срезов и обсуждения факта к регулярному управленческому ритму на основе процессных данных. CRM поставляет операционные данные и целевые процессные отчёты, минимизирует ручные выгрузки и сбор данных, а финальная управленческая и финансовая отчётность собирается в КХД.",
      },
    ],
    K = [
      [1, 1, 1, 2, 1],
      [2, 1, 2, 2, 1],
      [1, 1, 2, 2, 1],
      [2, 1, 1, 1, 1],
      [1, 1, 2, 1, 1],
      [0, 1, 2, 1, 1],
      [1, 2, 1, 0, 0],
      [0, 0, 1, 2, 2],
    ],
    G = [
      "Нет единого клиентского слоя: раздельные сущности, дубли, неполная статусная модель, потеря истории и связей",
      "Продукт не управляется как сущность и не связан с клиентом, портфелем, продажей и риск-профилем",
      "Нет клиентского взгляда на портфель и достоверных портфельных данных для подготовки предложений",
      "Жизненный цикл привлечения и продаж неуправляем: поиск и захват лида, открытие счёта, воронка, следующий шаг, событийные возможности",
      "Нет сегментации по ценности и потенциалу клиента, дифференцированной модели сопровождения и приоритизации ресурса",
      "Сервисные обращения не управляются end-to-end: каналы, категории, владельцы, маршруты, SLA, линии поддержки и результаты пока не объединены в промышленный контур",
      "Рабочее место ФС и коммуникационный контур не поддерживают ежедневную работу: Outlook, календарь, шаблоны, логика задач, быстрый лид, телефония и каналы связи",
      "Нет модели управления данными, доступом и процессной отчётностью: владельцы, права, контролируемые выгрузки, качество данных, аудит изменений",
    ];
  function Y({ eyebrow: e, title: t, children: n }) {
    return i.jsxs("div", {
      className: "heart-intro",
      children: [
        i.jsx("span", { className: "heart-intro__eyebrow", children: e }),
        i.jsx("h3", { children: t }),
        i.jsx("div", { className: "heart-intro__copy", children: n }),
      ],
    });
  }
  function X({
    active: e,
    sectionRef: t,
    activeTab: n,
    setActiveTab: r,
    referencePanel: l,
    setReferencePanel: a,
  }) {
    const businessCaseData = window.CRM_BUSINESS_CASE,
      [s, o] = f.useState(0),
      [c, u] = f.useState(0),
      d = (e, t, n, r, l) => {
        const a = e.key;
        let i = t;
        (("ArrowRight" === a || "ArrowDown" === a) && (i = (t + 1) % n.length),
          ("ArrowLeft" === a || "ArrowUp" === a) &&
            (i = (t - 1 + n.length) % n.length),
          "Home" === a && (i = 0),
          "End" === a && (i = n.length - 1),
          i !== t &&
            (e.preventDefault(),
            r(i),
            requestAnimationFrame(() =>
              document.getElementById(`${l}-${i + 1}`)?.focus(),
            )));
      },
      p = (e) => {
        (r(e), a(null));
      };
    return i.jsxs("section", {
      id: "core",
      ref: t,
      className: "heart-section scroll-mt-24 " + (e ? "is-active-section" : ""),
      "aria-labelledby": "heart-title",
      children: [
        i.jsxs("div", {
          className: "heart-hero",
          children: [
            i.jsxs("div", {
              className: "heart-hero__plane",
              "aria-hidden": "true",
              children: [
                i.jsx("span", {
                  className: "heart-hero__orbit heart-hero__orbit--one",
                }),
                i.jsx("span", {
                  className: "heart-hero__orbit heart-hero__orbit--two",
                }),
                i.jsx("span", { className: "heart-hero__signal" }),
              ],
            }),
            i.jsxs("div", {
              className: "heart-hero__meta",
              children: [
                i.jsx("span", { children: "Уровень 01" }),
                i.jsx("span", { children: "Стратегическое ядро" }),
              ],
            }),
            i.jsx("p", {
              className: "heart-hero__eyebrow",
              children: "Сердце CRM-стратегии",
            }),
            i.jsxs("h2", {
              id: "heart-title",
              children: ["CRM — это", i.jsx("br", {}), "бизнес-инициатива"],
            }),
            i.jsx("p", {
              className: "heart-hero__lead",
              children:
                "Не локальная доработка системы, а переосмысление процессов, методологии продаж, мотивации, ролей и дисциплины работы с клиентом на всём жизненном цикле.",
            }),
          ],
        }),
        i.jsxs("div", {
          className: "heart-layout",
          children: [
            i.jsx("div", {
              className: "heart-tabs",
              role: "tablist",
              "aria-label": "Подразделы Сердца CRM-стратегии",
              id: "heart-subtabs",
              children: V.map((e) =>
                i.jsxs(
                  "button",
                  {
                    type: "button",
                    id: `heart-tab-${e.id}`,
                    role: "tab",
                    "aria-selected": n === e.id,
                    "aria-controls": `panel-${e.id}`,
                    tabIndex: n === e.id ? 0 : -1,
                    className: n === e.id ? "is-active" : "",
                    onClick: () => p(e.id),
                    onKeyDown: (t) =>
                      ((e, t) => {
                        var n;
                        const r = V.findIndex((e) => e.id === t);
                        let l = r;
                        ("ArrowRight" === e.key && (l = (r + 1) % V.length),
                          "ArrowLeft" === e.key &&
                            (l = (r - 1 + V.length) % V.length),
                          "Home" === e.key && (l = 0),
                          "End" === e.key && (l = V.length - 1),
                          l !== r &&
                            (e.preventDefault(),
                            p(V[l].id),
                            null ==
                              (n = document.getElementById(
                                `heart-tab-${V[l].id}`,
                              )) || n.focus()));
                      })(t, e.id),
                    children: [
                      i.jsx("span", { children: e.number }),
                      i.jsx("strong", { children: e.shortLabel }),
                    ],
                  },
                  e.id,
                ),
              ),
            }),
            i.jsxs("div", {
              className: "heart-panels",
              id: "heart-tab-panels",
              children: [
                "mission" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-mission",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-mission",
                    children: [
                      i.jsx(Y, {
                        eyebrow: "Миссия стратегии",
                        title:
                          "От фиксации контактов — к управлению отношениями",
                        children: i.jsx("p", {
                          children:
                            "Миссия CRM-стратегии — перевести компанию от CRM как системы планирования и фиксации клиентских контактов к модели управления клиентской ценностью на всём жизненном цикле отношений. CRM помогает компании приоритизировать и концентрировать усилия на тех клиентах и действиях, которые создают наибольший вклад в достижение целей бизнеса.",
                        }),
                      }),
                      i.jsxs("div", {
                        className: "mission-flow",
                        "aria-label": "Эволюция CRM-подхода",
                        children: [
                          i.jsxs("div", {
                            children: [
                              i.jsx("span", { children: "Сегодня" }),
                              i.jsx("strong", {
                                children: "Задачи, контакты и история касаний",
                              }),
                            ],
                          }),
                          i.jsx("svg", {
                            viewBox: "0 0 120 24",
                            "aria-hidden": "true",
                            children: i.jsx("path", {
                              d: "M2 12h108M98 3l12 9-12 9",
                            }),
                          }),
                          i.jsxs("div", {
                            children: [
                              i.jsx("span", { children: "Целевое состояние" }),
                              i.jsx("strong", {
                                children:
                                  "Отношения и клиентская ценность на всём жизненном цикле",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                "transformation" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-transformation",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-transformation",
                    children: [
                      i.jsx(Y, {
                        eyebrow: "Шесть направлений",
                        title: "Место CRM в контуре цифровой трансформации",
                        children: i.jsx("p", {
                          children:
                            "CRM становится основой клиентского контура цифровой трансформации, объединяя процессы, каналы, сервис, данные и аналитику вокруг единой модели работы с клиентом.",
                        }),
                      }),
                      i.jsxs("div", {
                        className: "transformation-map",
                        "aria-label":
                          "Схема шести направлений цифровой трансформации",
                        children: [
                          i.jsx("div", {
                            className:
                              "transformation-map__contour transformation-map__contour--top",
                            children: i.jsx("span", {
                              children: "Клиентский опыт и философия бизнеса",
                            }),
                          }),
                          i.jsx("div", {
                            className:
                              "transformation-map__nodes transformation-map__nodes--top",
                            children: W.slice(0, 3).map((e) =>
                              i.jsxs(
                                "article",
                                {
                                  className: "crm" === e.id ? "is-crm" : "",
                                  children: [
                                    i.jsx("span", { children: e.number }),
                                    i.jsx("h4", { children: e.title }),
                                    i.jsx("p", { children: e.text }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                          i.jsxs("div", {
                            className: "transformation-map__core",
                            children: [
                              i.jsx("span", { children: "Единый контур" }),
                              i.jsx("strong", {
                                children: "Цифровая трансформация",
                              }),
                              i.jsx("svg", {
                                viewBox: "0 0 180 36",
                                "aria-hidden": "true",
                                children: i.jsx("path", {
                                  d: "M1 18h178M28 2v32M90 2v32M152 2v32",
                                }),
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className:
                              "transformation-map__nodes transformation-map__nodes--bottom",
                            children: W.slice(3).map((e) =>
                              i.jsxs(
                                "article",
                                {
                                  children: [
                                    i.jsx("span", { children: e.number }),
                                    i.jsx("h4", { children: e.title }),
                                    i.jsx("p", { children: e.text }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          }),
                          i.jsx("div", {
                            className:
                              "transformation-map__contour transformation-map__contour--bottom",
                            children: i.jsx("span", {
                              children: "Данные, аналитика и инфраструктура",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                "problems" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-problems",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-problems",
                    children: [
                      i.jsxs(Y, {
                        eyebrow: "Текущее состояние",
                        title:
                          "CRM — контур фиксации, а не система управления клиентской ценностью и продажами",
                        children: [
                          i.jsx("p", {
                            children:
                              "Текущий CRM-контур уже выполняет важную операционную роль, но его потенциал раскрыт не полностью. Развитие шло хаотично, через разрозненные пользовательские запросы, без комплексного подхода к управлению клиентской ценностью.",
                          }),
                          i.jsx("p", {
                            children:
                              "Ключевая проблема — не в отдельных недостающих функциях, а в разрозненности данных и процессов: клиент, продукты и портфель не связаны в единый контур с продажами, сервисом и аналитикой.",
                          }),
                        ],
                      }),
                      i.jsx("p", {
                        className: "evidence-note",
                        children:
                          "Основание: 5 команд и 7 инициатив стратсессии; сервисный разрыв дополнен по discovery и запуску ЕКЦ",
                      }),
                      i.jsxs("div", {
                        className: "compact-browser compact-browser--problems",
                        children: [
                          i.jsx("div", {
                            className: "compact-browser__tabs",
                            role: "tablist",
                            "aria-label": "Восемь системных проблем",
                            children: q.map((e, t) =>
                              i.jsxs(
                                "button",
                                {
                                  type: "button",
                                  id: `problem-tab-${t + 1}`,
                                  role: "tab",
                                  "aria-selected": s === t,
                                  "aria-controls": "problem-detail",
                                  tabIndex: s === t ? 0 : -1,
                                  className: s === t ? "is-active" : "",
                                  onClick: () => o(t),
                                  onKeyDown: (e) =>
                                    d(e, t, q, o, "problem-tab"),
                                  children: [
                                    i.jsx("span", {
                                      children: String(t + 1).padStart(2, "0"),
                                    }),
                                    i.jsx("strong", { children: e.title }),
                                  ],
                                },
                                e.title,
                              ),
                            ),
                          }),
                          i.jsxs("article", {
                            className: "compact-browser__detail",
                            id: "problem-detail",
                            role: "tabpanel",
                            "aria-labelledby": `problem-tab-${s + 1}`,
                            children: [
                              i.jsxs("div", {
                                className: "compact-browser__meta",
                                children: [
                                  i.jsx("span", {
                                    children: `Проблема ${String(s + 1).padStart(2, "0")}`,
                                  }),
                                  i.jsx("span", {
                                    children: `${s + 1} / ${q.length}`,
                                  }),
                                ],
                              }),
                              i.jsx("h4", { children: q[s].title }),
                              i.jsx("p", { children: q[s].text }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                "goals" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-goals",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-goals",
                    children: [
                      i.jsxs("div", {
                        className: "goal-model",
                        children: [
                          i.jsxs("section", {
                            className: "goal-model__statement",
                            "aria-labelledby": "goal-model-title",
                            children: [
                              i.jsx("span", {
                                className: "goal-model__eyebrow",
                                children: "ПРИНЦИП ЦЕЛЕВОЙ МОДЕЛИ",
                              }),
                              i.jsx("h3", {
                                id: "goal-model-title",
                                children:
                                  "CRM не делает работу с клиентом массовой — она делает персональную работу системной.",
                              }),
                              i.jsx("p", {
                                children:
                                  "Для «Солида» CRM — способ расти без потери глубины отношений: видеть клиента, его портфель, потенциал и историю взаимодействия целиком, концентрировать внимание ФС на значимых событиях и действовать вовремя.",
                              }),
                            ],
                          }),
                          i.jsxs("section", {
                            className: "goal-model__how",
                            "aria-labelledby": "goal-model-how-title",
                            children: [
                              i.jsx("span", {
                                id: "goal-model-how-title",
                                children: "КАК ЭТА МОДЕЛЬ РАБОТАЕТ",
                              }),
                              i.jsxs("div", {
                                className: "goal-model__pillars",
                                children: [
                                  i.jsxs("article", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Клиентский контекст собран и обогащается",
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "В едином профиле объединяются портфель и движения средств, продукты, история коммуникаций и сервисных обращений, риск-профиль, KYC-статус, договорённости и значимые события. Данные дополняются из внутренних систем, государственных реестров и управляемых внешних источников — с контролем качества и актуальности.",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("article", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Клиентская база покрыта отношениями",
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "CRM выявляет клиентов без актуального взаимодействия или следующего шага и отслеживает значимые события: пополнения и выводы, купоны, дивиденды, погашения, изменение риск-профиля и длительную неактивность. С учётом ценности, потенциала и жизненного цикла клиента релевантный сигнал превращается в своевременное действие ФС — без потока формальных задач и массовых коммуникаций.",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("article", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Клиентское обращение ведётся как единый сервисный кейс",
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "Независимо от входного канала запрос связывается с клиентом, получает категорию, владельца, статус, маршрут и SLA. ЕКЦ контролирует движение кейса между линиями поддержки, а ФС видит обращение, договорённости и результат в общем клиентском контексте.",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("article", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Коммерческий и сервисный процессы становятся измеримыми",
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "CRM фиксирует воронку, покрытие базы, своевременность коммерческих действий, SLA сервисных кейсов и результаты. Вместе с финансовыми данными в КХД это позволяет оценивать качество коммерческой функции, стоимость привлечения, стоимость обслуживания и экономику клиентских сегментов.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "goals-heading",
                        children: [
                          i.jsx("span", {
                            children: "ПЯТЬ ЦЕЛЕЙ CRM-СТРАТЕГИИ",
                          }),
                          i.jsx("p", {
                            children:
                              "Каждая цель описывает конкретный переход от текущего состояния к целевой модели работы.",
                          }),
                          i.jsx("p", {
                            className: "goals-heading__reference",
                            children:
                              "Связь целей с проблемами, подтверждёнными стратсессией, приведена в справочном приложении ниже.",
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "compact-browser compact-browser--goals",
                        children: [
                          i.jsx("div", {
                            className: "compact-browser__tabs",
                            role: "tablist",
                            "aria-label": "Пять целей CRM-стратегии",
                            children: Q.map((e, t) =>
                              i.jsxs(
                                "button",
                                {
                                  type: "button",
                                  id: `goal-tab-${t + 1}`,
                                  role: "tab",
                                  "aria-selected": c === t,
                                  "aria-controls": "goal-detail",
                                  tabIndex: c === t ? 0 : -1,
                                  className: c === t ? "is-active" : "",
                                  onClick: () => u(t),
                                  onKeyDown: (e) => d(e, t, Q, u, "goal-tab"),
                                  children: [
                                    i.jsx("span", {
                                      children: `Цель ${t + 1}`,
                                    }),
                                    i.jsx("strong", { children: e.title }),
                                  ],
                                },
                                e.title,
                              ),
                            ),
                          }),
                          i.jsxs("article", {
                            className:
                              "compact-browser__detail compact-browser__detail--goal",
                            id: "goal-detail",
                            role: "tabpanel",
                            "aria-labelledby": `goal-tab-${c + 1}`,
                            children: [
                              i.jsxs("div", {
                                className: "compact-browser__meta",
                                children: [
                                  i.jsx("span", {
                                    children: `Цель ${String(c + 1).padStart(2, "0")}`,
                                  }),
                                  i.jsx("span", {
                                    children: `${c + 1} / ${Q.length}`,
                                  }),
                                ],
                              }),
                              i.jsx("h4", { children: Q[c].title }),
                              i.jsxs("div", {
                                className: "goal-transition",
                                children: [
                                  i.jsx("span", { children: "ПЕРЕХОД" }),
                                  i.jsx("p", { children: Q[c].transition }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "compact-browser__goal-copy",
                                children: [
                                  i.jsx("p", { children: Q[c].purpose }),
                                  i.jsxs("aside", {
                                    children: [
                                      i.jsx("span", {
                                        children:
                                          "Ключевое изменение операционной модели",
                                      }),
                                      i.jsx("p", { children: Q[c].shift }),
                                    ],
                                  }),
                                ],
                              }),
                              Q[c].serviceModel &&
                                i.jsxs("section", {
                                  className: "goal-service-model",
                                  "aria-label": Q[c].serviceModel.title,
                                  children: [
                                    i.jsxs("header", {
                                      children: [
                                        i.jsx("span", {
                                          children: "СЕРВИСНЫЙ КОНТУР",
                                        }),
                                        i.jsx("h5", {
                                          children: Q[c].serviceModel.title,
                                        }),
                                        i.jsx("p", {
                                          children: Q[c].serviceModel.description,
                                        }),
                                      ],
                                    }),
                                    i.jsx("ul", {
                                      children: Q[c].serviceModel.roles.map(
                                        (e) =>
                                          i.jsxs(
                                            "li",
                                            {
                                              children: [
                                                i.jsx("strong", {
                                                  children: e[0],
                                                }),
                                                i.jsx("span", {
                                                  children: e[1],
                                                }),
                                              ],
                                            },
                                            e[0],
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("button", {
                        type: "button",
                        className: "reference-trigger",
                        "aria-expanded": "mapping" === l,
                        "aria-controls": "reference-mapping",
                        onClick: () => a("mapping" === l ? null : "mapping"),
                        children: [
                          i.jsx("span", { children: "Справочное приложение" }),
                          i.jsx("strong", {
                            children: "Открыть маппинг «цели ↔ проблемы»",
                          }),
                          i.jsx("i", {
                            "aria-hidden": "true",
                            children: "mapping" === l ? "−" : "+",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className:
                          "reference-disclosure " +
                          ("mapping" === l ? "is-open" : ""),
                        id: "reference-mapping",
                        children: i.jsx("div", {
                          children: i.jsxs("div", {
                            className: "reference-disclosure__inner",
                            children: [
                              i.jsx("h4", {
                                children:
                                  "Маппинг: стратегические цели ↔ проблемы, подтверждённые стратсессией",
                              }),
                              i.jsx("p", {
                                children:
                                  "В таблице сведены восемь стратегических проблем. Семь синтезированы из повторяющихся болей пяти команд стратсессии; сервисный разрыв дополнен по материалам discovery и запуска ЕКЦ. Проблемы сгруппированы так, чтобы показать связь с целями CRM-стратегии и не смешивать разные источники подтверждения.",
                              }),
                              i.jsx("div", {
                                className: "mapping-table-wrap",
                                children: i.jsxs("table", {
                                  className: "mapping-table",
                                  children: [
                                    i.jsx("thead", {
                                      children: i.jsxs("tr", {
                                        children: [
                                          i.jsx("th", {
                                            children:
                                              "Проблема, подтверждённая стратсессией",
                                          }),
                                          i.jsx("th", { children: "Рост" }),
                                          i.jsx("th", {
                                            children: "Продуктивность",
                                          }),
                                          i.jsx("th", {
                                            children: "Удержание",
                                          }),
                                          i.jsx("th", {
                                            children: "Клиент 360",
                                          }),
                                          i.jsx("th", {
                                            children: "Прозрачность",
                                          }),
                                        ],
                                      }),
                                    }),
                                    i.jsx("tbody", {
                                      children: G.map((e, t) =>
                                        i.jsxs(
                                          "tr",
                                          {
                                            children: [
                                              i.jsxs("td", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: t + 1,
                                                  }),
                                                  e,
                                                ],
                                              }),
                                              K[t].map((e, n) =>
                                                i.jsx(
                                                  "td",
                                                  {
                                                    "aria-label":
                                                      2 === e
                                                        ? "Прямое решение"
                                                        : 1 === e
                                                          ? "Косвенное влияние"
                                                          : "Нет связи",
                                                    children:
                                                      2 === e
                                                        ? i.jsx("strong", {
                                                            children: "◉",
                                                          })
                                                        : 1 === e
                                                          ? "●"
                                                          : "—",
                                                  },
                                                  `${t}-${n}`,
                                                ),
                                              ),
                                            ],
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              i.jsxs("p", {
                                className: "mapping-legend",
                                children: [
                                  i.jsx("strong", { children: "◉" }),
                                  " — прямое решение проблемы   ",
                                  i.jsx("b", { children: "●" }),
                                  " — косвенное влияние",
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                "metrics" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-metrics",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-metrics",
                    children: [
                      i.jsx(Y, {
                        eyebrow: "Executive summary",
                        title: "Две ключевые метрики CRM-стратегии",
                        children: i.jsx("p", {
                          children:
                            "NNA показывает, насколько успешно компания привлекает, развивает и удерживает клиентские активы. Маржинальная доходность существующего AUM отражает эффективность использования уже привлечённого капитала.",
                        }),
                      }),
                      i.jsxs("div", {
                        className: "metric-duo",
                        children: [
                          i.jsxs("article", {
                            children: [
                              i.jsx("span", { children: "01 / Рост активов" }),
                              i.jsx("h4", { children: "NNA" }),
                              i.jsx("p", {
                                children:
                                  "Net New Assets — чистый внешний приток активов новых и действующих клиентов за вычетом внешнего оттока.",
                              }),
                              i.jsx("code", {
                                children:
                                  "NNA = внешний приток − внешний отток",
                              }),
                              i.jsxs("ul", {
                                className: "metric-duo__drivers",
                                children: [
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", { children: "Новые клиенты" }),
                                      i.jsx("span", {
                                        children:
                                          "Внешний приток от первого и последующих фондирований",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", {
                                        children: "Действующая база",
                                      }),
                                      i.jsx("span", {
                                        children:
                                          "Внешние пополнения действующих клиентов",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", { children: "Удержание" }),
                                      i.jsx("span", {
                                        children:
                                          "Снижение внешнего оттока клиентских активов",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          i.jsxs("article", {
                            children: [
                              i.jsx("span", {
                                children: "02 / Экономика базы",
                              }),
                              i.jsx("h4", {
                                children: "Маржинальная доходность AUM",
                              }),
                              i.jsx("p", {
                                children:
                                  "Повышение эффективности использования уже привлечённых активов без подмены соответствия продукта потребностям клиента.",
                              }),
                              i.jsx("code", {
                                children:
                                  "Маржинальный доход базы / средний AUM",
                              }),
                              i.jsxs("ul", {
                                className: "metric-duo__drivers",
                                children: [
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", {
                                        children: "Реинвестирование",
                                      }),
                                      i.jsx("span", {
                                        children:
                                          "Погашения, купоны и дивиденды остаются в клиентском контуре",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", { children: "Ликвидность" }),
                                      i.jsx("span", {
                                        children:
                                          "Снижается доля незадействованных средств",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", {
                                        children: "Продуктовый охват",
                                      }),
                                      i.jsx("span", {
                                        children:
                                          "Растут проникновение и качество продуктового микса",
                                      }),
                                    ],
                                  }),
                                  i.jsxs("li", {
                                    children: [
                                      i.jsx("b", { children: "Каналы" }),
                                      i.jsx("span", {
                                        children:
                                          "Измеряется результативность ФС и цифровых фронтов",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("p", {
                        className: "metric-linkage",
                        children:
                          "CRM объединяет клиентский контекст, события, канал ФС и цифровые фронты в единый процесс — от выявления возможности до предложения и фиксации результата.",
                      }),
                      i.jsxs("button", {
                        type: "button",
                        className: "reference-trigger",
                        "aria-expanded": "metric-detail" === l,
                        "aria-controls": "reference-metric-detail",
                        onClick: () =>
                          a("metric-detail" === l ? null : "metric-detail"),
                        children: [
                          i.jsx("span", { children: "Справочное приложение" }),
                          i.jsx("strong", {
                            children: "Открыть детализацию системы метрик",
                          }),
                          i.jsx("i", {
                            "aria-hidden": "true",
                            children: "metric-detail" === l ? "−" : "+",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className:
                          "reference-disclosure " +
                          ("metric-detail" === l ? "is-open" : ""),
                        id: "reference-metric-detail",
                        children: i.jsx("div", {
                          children: i.jsxs("div", {
                            className:
                              "reference-disclosure__inner metric-reference",
                            children: [
                              i.jsxs("section", {
                                children: [
                                  i.jsx("span", { children: "01" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "NNA — чистый внешний приток активов",
                                      }),
                                      i.jsxs("p", {
                                        children: [
                                          i.jsx("strong", {
                                            children: "NNA (Net New Assets)",
                                          }),
                                          " — чистый внешний приток клиентских активов за период.",
                                        ],
                                      }),
                                      i.jsxs("pre", {
                                        children: [
                                          "NNA = внешний приток от новых клиентов",
                                          "\n",
                                          "    + внешний приток от действующих клиентов",
                                          "\n",
                                          "    − внешний отток клиентских активов",
                                        ],
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "NNA измеряется в рублях. В показатель не входят рыночная и валютная переоценка, внутреннее перемещение активов между продуктами, а также начисление купонов и дивидендов внутри клиентского портфеля. Эти события не увеличивают NNA, но создают возможности для удержания средств, реинвестирования и развития клиента.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsxs("section", {
                                children: [
                                  i.jsx("span", { children: "02" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Декомпозиция NNA и метрики направлений",
                                      }),
                                      i.jsx("p", {
                                        className: "metric-scope-note",
                                        children:
                                          "Показатели ниже измеряют вклад трёх направлений NNA: привлечения, развития действующей базы и удержания. Целевые значения утверждаются после расчёта baseline; для каждого показателя фиксируются формула, источник, периодичность и владелец.",
                                      }),
                                      i.jsxs("div", {
                                        className: "metric-tree",
                                        "aria-label": "Дерево декомпозиции NNA",
                                        children: [
                                          i.jsx("strong", {
                                            children:
                                              "NNA — чистый внешний приток клиентских активов",
                                          }),
                                          i.jsxs("div", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "01. Привлечение новых активов",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Генерация качественного спроса → конверсия в клиента → конверсия в первое фондирование",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "02. Развитие действующих клиентов",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Выявление возможностей → конверсия предложения в фондирование → внешние пополнения",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "03. Удержание и снижение оттока",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Покрытие отношениями → клиентский опыт → раннее выявление и своевременная отработка риска",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      i.jsxs("div", {
                                        className: "metric-branch-table",
                                        children: [
                                          i.jsxs("article", {
                                            children: [
                                              i.jsxs("header", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "01",
                                                  }),
                                                  i.jsx("strong", {
                                                    children: "Привлечение",
                                                  }),
                                                  i.jsx("small", {
                                                    children: "Новые клиенты",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("ul", {
                                                children: [
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Квалифицированные лиды",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Количество за месяц; источник — CRM и маркетинговые каналы.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Конверсия в открытие счёта",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Открытые счета / квалифицированные лиды, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Конверсия в первое фондирование",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Впервые фондированные счета / открытые счета, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Внешний приток новых клиентов",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Рубли за период; источник — Солид-Финанс / КХД.",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            children: [
                                              i.jsxs("header", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "02",
                                                  }),
                                                  i.jsx("strong", {
                                                    children: "Развитие базы",
                                                  }),
                                                  i.jsx("small", {
                                                    children:
                                                      "Действующие клиенты",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("ul", {
                                                children: [
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Возможности развития",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Количество и потенциальный AUM возможностей в CRM.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Сигнал → контакт → предложение",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Конверсия этапов и доля контактов, выполненных в SLA, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Предложение → фондирование",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Фондированные предложения / сделанные предложения, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Внешние пополнения базы",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Рубли за период от действующих клиентов.",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            children: [
                                              i.jsxs("header", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "03",
                                                  }),
                                                  i.jsx("strong", {
                                                    children: "Удержание",
                                                  }),
                                                  i.jsx("small", {
                                                    children: "Риск и отток",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("ul", {
                                                children: [
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Внешний отток",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Рубли за период и доля от AUM на начало периода.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Покрытие отношениями",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Доля клиентов и AUM с владельцем и запланированным следующим контактом, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Отработка риска в SLA",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Закрытые в срок сигналы риска / все сигналы риска, %.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("li", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "Сохранённый AUM под риском",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "AUM, оставшийся после отработки сигнала риска, %. CSI и NPS — защитные метрики качества.",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsxs("section", {
                                className:
                                  "metric-reference__section metric-reference__section--service",
                                children: [
                                  i.jsx("span", { children: "03" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Единая сервисная модель — операционные защитные метрики",
                                      }),
                                      i.jsx("p", {
                                        className: "metric-scope-note",
                                        children:
                                          "Сервисные показатели не становятся третьей ключевой бизнес-метрикой. Они используются как драйверы и guardrails удержания, NNA и стоимости обслуживания. Целевые значения утверждаются после фиксации baseline, периметра каналов и правил учёта.",
                                      }),
                                      i.jsx("div", {
                                        className: "service-metrics-grid",
                                        children: [
                                          [
                                            "Охват регистрацией",
                                            "Доля обращений подключённых каналов, зарегистрированных в CRM как сервисные кейсы.",
                                          ],
                                          [
                                            "Решение первой линией",
                                            "Доля кейсов, решённых ЕКЦ без эскалации в профильные подразделения.",
                                          ],
                                          [
                                            "Время первого ответа",
                                            "Медиана, P90 и доля содержательных ответов в установленном SLA.",
                                          ],
                                          [
                                            "Time to Resolution",
                                            "Медиана, P90 и доля кейсов, решённых в установленном SLA.",
                                          ],
                                          [
                                            "Просроченный backlog",
                                            "Количество и доля открытых кейсов с нарушенным сроком решения.",
                                          ],
                                          [
                                            "Эскалации",
                                            "Доля и причины передачи кейсов на вторую и третью линии.",
                                          ],
                                          [
                                            "CSI по обращению",
                                            "Оценка решения кейса и доля низких оценок с корректирующим действием.",
                                          ],
                                        ].map((e) =>
                                          i.jsxs(
                                            "article",
                                            {
                                              children: [
                                                i.jsx("strong", {
                                                  children: e[0],
                                                }),
                                                i.jsx("p", {
                                                  children: e[1],
                                                }),
                                              ],
                                            },
                                            e[0],
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsxs("section", {
                                className:
                                  "metric-reference__section metric-reference__section--income",
                                children: [
                                  i.jsx("span", { children: "04" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Маржинальная доходность существующего AUM",
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "Дополнительный экономический эффект CRM оценивается через повышение эффективности использования уже привлечённых активов.",
                                      }),
                                      i.jsxs("ul", {
                                        className: "metric-driver-list",
                                        children: [
                                          i.jsx("li", {
                                            children:
                                              "Реинвестирование погашений, купонов и дивидендов",
                                          }),
                                          i.jsx("li", {
                                            children:
                                              "Сокращение незадействованной ликвидности",
                                          }),
                                          i.jsx("li", {
                                            children:
                                              "Рост продуктового проникновения",
                                          }),
                                          i.jsx("li", {
                                            children:
                                              "Улучшение продуктового микса",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("pre", {
                                        children: [
                                          "Маржинальная доходность AUM",
                                          "\n",
                                          "= маржинальный доход клиентской базы / средний AUM",
                                        ],
                                      }),
                                      i.jsxs("div", {
                                        className: "metric-formula-guide",
                                        children: [
                                          i.jsx("h5", {
                                            children: "Как работает формула",
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "metric-formula-guide__terms",
                                            children: [
                                              i.jsxs("article", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "Числитель",
                                                  }),
                                                  i.jsx("b", {
                                                    children:
                                                      "Маржинальный доход базы",
                                                  }),
                                                  i.jsx("p", {
                                                    children:
                                                      "Доход по действующей клиентской базе за период после вычета прямо относимых переменных расходов. Состав доходов и расходов фиксирует Финансовый блок в единой методике.",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("article", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "Знаменатель",
                                                  }),
                                                  i.jsx("b", {
                                                    children: "Средний AUM",
                                                  }),
                                                  i.jsx("p", {
                                                    children:
                                                      "Средний объём активов той же клиентской базы за тот же период. Предпочтительно среднее ежедневных остатков; временное приближение — (AUM на начало + AUM на конец) / 2.",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("p", {
                                            className:
                                              "metric-formula-guide__result",
                                            children: [
                                              i.jsx("strong", {
                                                children: "Результат",
                                              }),
                                              " Доходность за месяц = доход / средний AUM. Для управленческого run-rate: месячная доходность × 12; в базисных пунктах: годовая доля × 10 000.",
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "metric-formula-examples",
                                            children: [
                                              i.jsxs("article", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "Пример 01",
                                                  }),
                                                  i.jsx("h6", {
                                                    children:
                                                      "Доходность текущей базы",
                                                  }),
                                                  i.jsx("p", {
                                                    children:
                                                      "Средний AUM — 10 млрд ₽, маржинальный доход за месяц — 8 млн ₽.",
                                                  }),
                                                  i.jsx("code", {
                                                    children:
                                                      "8 млн / 10 млрд = 0,08% в месяц ≈ 0,96% годовых = 96 б.п.",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("article", {
                                                children: [
                                                  i.jsx("span", {
                                                    children: "Пример 02",
                                                  }),
                                                  i.jsx("h6", {
                                                    children:
                                                      "Почему важен знаменатель",
                                                  }),
                                                  i.jsx("p", {
                                                    children:
                                                      "При доходе 12 млн ₽ и AUM 12 млрд ₽ получаем 120 б.п. годовых. Если AUM вырастет до 15 млрд ₽, а доход останется 12 млн ₽, доходность снизится до 96 б.п.",
                                                  }),
                                                  i.jsx("code", {
                                                    children:
                                                      "12 млн / 15 млрд × 12 × 10 000 = 96 б.п.",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsx("p", {
                                            className:
                                              "metric-formula-guide__caveat",
                                            children:
                                              "Сравнивать периоды можно только в одном периметре клиентов, продуктов, доходов и расходов. Умножение на 12 — управленческая годовая экстраполяция, а не инвестиционная доходность с капитализацией.",
                                          }),
                                        ],
                                      }),
                                      i.jsx("p", {
                                        className: "metric-scope-note",
                                        children:
                                          "Метрики этого направления связывают клиентские действия CRM с экономикой действующей базы. Финальный финансовый показатель рассчитывается в КХД на подтверждённых данных.",
                                      }),
                                      i.jsxs("div", {
                                        className: "metric-spec-grid",
                                        children: [
                                          i.jsxs("article", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "Экономический результат",
                                              }),
                                              i.jsx("span", {
                                                children:
                                                  "Маржинальный доход базы, ₽/месяц; маржинальный доход / средний AUM, годовые б.п.",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            children: [
                                              i.jsx("b", {
                                                children: "Реинвестирование",
                                              }),
                                              i.jsx("span", {
                                                children:
                                                  "Реинвестированные погашения, купоны и дивиденды / доступные к реинвестированию события, % и ₽.",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "Использование активов",
                                              }),
                                              i.jsx("span", {
                                                children:
                                                  "Доля незадействованной ликвидности в AUM, %; продуктового проникновения — продуктов на активного клиента.",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            children: [
                                              i.jsx("b", {
                                                children:
                                                  "Результативность предложений",
                                              }),
                                              i.jsx("span", {
                                                children:
                                                  "Фондированные целевые предложения / сделанные предложения, %; фондированный объём и маржинальный доход по каналам.",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsxs("section", {
                                className:
                                  "metric-reference__section metric-reference__section--channels",
                                children: [
                                  i.jsx("span", { children: "05" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("h4", {
                                        children:
                                          "Каналы достижения результата",
                                      }),
                                      i.jsxs("p", {
                                        children: [
                                          i.jsx("strong", { children: "ФС" }),
                                          " остаётся основным консультационным каналом. CRM повышает его результативность за счёт единого клиентского контекста, своевременных сигналов и подсказок следующего действия.",
                                        ],
                                      }),
                                      i.jsxs("p", {
                                        children: [
                                          i.jsx("strong", {
                                            children: "Цифровой фронт",
                                          }),
                                          " становятся двусторонним клиентским каналом: доставляют коммерческие и сервисные сообщения, принимают обращения в ЕКЦ и возвращают статусы решения сервисного кейса.",
                                        ],
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "CRM объединяет каналы в единый процесс: определяет контекст и повод, направляет действие в подходящий канал, регистрирует обращение и сохраняет результат коммуникации или сервиса.",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                "business-case" === n &&
                  i.jsxs("div", {
                    className: "heart-panel",
                    id: "panel-business-case",
                    role: "tabpanel",
                    "aria-labelledby": "heart-tab-business-case",
                    children: [
                      i.jsx(Y, {
                        eyebrow: `Base-сценарий · ${businessCaseData.horizon}`,
                        title: `${businessCaseData.revenue} дополнительной выручки при бюджете команды ${businessCaseData.teamBudget}`,
                        children: i.jsx("p", {
                          children:
                            "Экономический эффект формируется за счёт удержания активов, дополнительного притока и роста монетизации существующей клиентской базы.",
                        }),
                      }),
                      i.jsxs("div", {
                        className: "full-bc-ledger",
                        children: [
                          i.jsxs("aside", {
                            className: "full-bc-roi",
                            children: [
                              i.jsx("span", {
                                children: "ROI по дополнительной выручке",
                              }),
                              i.jsx("strong", {
                                children: businessCaseData.roi,
                              }),
                              i.jsx("code", {
                                children: businessCaseData.roiFormula,
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "full-bc-ledger__body",
                            children: [
                              i.jsxs("div", {
                                className: "full-bc-equation",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", {
                                        children: "Дополнительная выручка",
                                      }),
                                      i.jsx("strong", {
                                        children: businessCaseData.revenue,
                                      }),
                                    ],
                                  }),
                                  i.jsx("i", { children: "−" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", {
                                        children: "Бюджет команды",
                                      }),
                                      i.jsx("strong", {
                                        children: businessCaseData.teamBudget,
                                      }),
                                    ],
                                  }),
                                  i.jsx("i", { children: "=" }),
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", {
                                        children: "Расчётная разница",
                                      }),
                                      i.jsx("strong", {
                                        children:
                                          businessCaseData.revenueLessTeamBudget,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              i.jsx("div", {
                                className: "full-bc-facts",
                                children: [
                                  ["Выручка / бюджет", businessCaseData.efficiency],
                                  ["Окупаемость", businessCaseData.payback],
                                  ["Адресуемый AUM", businessCaseData.addressableAum],
                                  ["Горизонт", businessCaseData.horizon],
                                ].map((e) =>
                                  i.jsxs(
                                    "div",
                                    {
                                      children: [
                                        i.jsx("span", { children: e[0] }),
                                        i.jsx("strong", { children: e[1] }),
                                      ],
                                    },
                                    e[0],
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "full-bc-drivers",
                        "aria-label": "Драйверы дополнительной выручки",
                        children: businessCaseData.drivers.map((e, t) =>
                          i.jsxs(
                            "article",
                            {
                              style: { "--bc-driver": `${e.shareValue}%` },
                              children: [
                                i.jsx("span", { children: `0${t + 1}` }),
                                i.jsx("h4", { children: e.label }),
                                i.jsx("strong", { children: e.value }),
                                i.jsx("small", { children: e.share }),
                                i.jsx("i", { "aria-hidden": "true" }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                      i.jsxs("section", {
                        className: "full-bc-detail-grid",
                        children: [
                          i.jsxs("div", {
                            className: "full-bc-assumptions",
                            children: [
                              i.jsx("h4", {
                                children: "Ключевые допущения Base-сценария",
                              }),
                              i.jsx("div", {
                                children: businessCaseData.assumptions.map((e) =>
                                  i.jsxs(
                                    "article",
                                    {
                                      children: [
                                        i.jsx("strong", { children: e.value }),
                                        i.jsx("span", { children: e.label }),
                                      ],
                                    },
                                    e.label,
                                  ),
                                ),
                              }),
                            ],
                          }),
                          i.jsxs("div", {
                            className: "full-bc-ramp",
                            children: [
                              i.jsx("h4", {
                                children:
                                  "Нарастание дополнительной выручки, млн ₽ за квартал",
                              }),
                              i.jsx("div", {
                                children: businessCaseData.ramp.map((e) =>
                                  i.jsxs(
                                    "article",
                                    {
                                      style: { "--bc-ramp": `${e.share}%` },
                                      children: [
                                        i.jsx("i", { "aria-hidden": "true" }),
                                        i.jsx("strong", { children: e.value }),
                                        i.jsx("span", { children: e.period }),
                                      ],
                                    },
                                    e.period,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                      i.jsxs("section", {
                        className: "full-bc-resources",
                        children: [
                          i.jsxs("header", {
                            children: [
                              i.jsx("span", {
                                children: "Бюджет и ресурсная модель",
                              }),
                              i.jsx("h4", {
                                children: `${businessCaseData.teamBudgetExact} и ${businessCaseData.totalEffort} на три волны`,
                              }),
                            ],
                          }),
                          i.jsx("div", {
                            className: "full-bc-waves",
                            children: businessCaseData.waves.map((e) =>
                              i.jsxs(
                                "article",
                                {
                                  children: [
                                    i.jsx("span", { children: e.number }),
                                    i.jsx("small", { children: e.period }),
                                    i.jsx("strong", { children: e.budget }),
                                    i.jsx("p", {
                                      children: `${e.share} бюджета · ${e.fte}`,
                                    }),
                                  ],
                                },
                                e.number,
                              ),
                            ),
                          }),
                          i.jsxs("div", {
                            className: "full-bc-team",
                            children: [
                              i.jsxs("div", {
                                children: [
                                  i.jsx("span", {
                                    children: "Действующие роли",
                                  }),
                                  i.jsx("strong", {
                                    children: businessCaseData.coreTeam.join(" · "),
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "full-bc-team__hire",
                                children: [
                                  i.jsx("span", {
                                    children: "Нужно утвердить две вакансии",
                                  }),
                                  i.jsx("strong", {
                                    children:
                                      businessCaseData.vacancies.join(" + "),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function Z() {
    const e = [
        ["High", "> 30 млн ₽"],
        ["Middle", "1–30 млн ₽"],
        ["Low", "до 1 млн ₽"],
        ["Zero", "0 ₽"],
      ],
      t = [
        ["Zero", "не подтверждён"],
        ["Low", "до 1 млн ₽"],
        ["Middle", "1–30 млн ₽"],
        ["High", "> 30 млн ₽"],
      ];
    return i.jsxs("details", {
      className: "segmentation-reference",
      id: "segmentation-reference",
      children: [
        i.jsxs("summary", {
          className: "reference-trigger segmentation-reference__trigger",
          children: [
            i.jsx("span", { children: "Справочное приложение" }),
            i.jsx("strong", {
              children: "Открыть модель «AUM × потенциал клиента»",
            }),
            i.jsx("i", { "aria-hidden": "true", children: "+" }),
          ],
        }),
        i.jsx("div", {
          className: "segmentation-reference__disclosure",
          children: i.jsxs("div", {
            className: "segmentation-reference__inner",
            children: [
              i.jsxs("header", {
                className: "segmentation-reference__header",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("span", {
                        children: "СЕГМЕНТАЦИЯ И ПОТЕНЦИАЛ КЛИЕНТА",
                      }),
                      i.jsx("h4", {
                        children:
                          "От оценки текущего AUM — к управлению ценностью отношений",
                      }),
                      i.jsx("p", {
                        children:
                          "Текущий AUM показывает ценность клиента сегодня. Потенциал отражает возможность развития отношений и концентрации капитала в «Солиде» в будущем.",
                      }),
                    ],
                  }),
                  i.jsxs("aside", {
                    children: [
                      i.jsx("span", { children: "Статус модели" }),
                      i.jsx("strong", {
                        children:
                          "Рабочая модель для методологической проработки",
                      }),
                      i.jsx("p", {
                        children:
                          "Коммерческие режимы сформулированы как рабочая гипотеза. Пороговые значения, SLA и правила исключений требуют утверждения.",
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("section", {
                className: "segmentation-stage segmentation-stage--matrix",
                children: [
                  i.jsxs("header", {
                    className: "segmentation-stage__header",
                    children: [
                      i.jsx("span", { children: "01" }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h5", {
                            children: "Две координаты клиентской ценности",
                          }),
                          i.jsx("p", {
                            children:
                              "Сохраняем понятную оценку текущих активов и добавляем независимую оценку потенциала фондирования.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "segmentation-shift",
                    children: [
                      i.jsxs("article", {
                        className: "segmentation-current",
                        children: [
                          i.jsx("span", { children: "СЕГОДНЯ" }),
                          i.jsx("h6", { children: "Сегмент по текущему AUM" }),
                          i.jsx("ol", {
                            children: e.map((e, t) =>
                              i.jsxs(
                                "li",
                                {
                                  children: [
                                    i.jsx("span", {
                                      children: String(t + 1).padStart(2, "0"),
                                    }),
                                    i.jsx("strong", { children: e[0] }),
                                    i.jsx("small", { children: e[1] }),
                                  ],
                                },
                                e[0],
                              ),
                            ),
                          }),
                        ],
                      }),
                      i.jsxs("div", {
                        className: "segmentation-shift__bridge",
                        children: [
                          i.jsx("p", {
                            children: "AUM: сколько активов уже с нами?",
                          }),
                          i.jsx("b", { "aria-hidden": "true", children: "→" }),
                          i.jsx("p", {
                            children:
                              "Потенциал: какую долю капитала реально можно привлечь?",
                          }),
                        ],
                      }),
                      i.jsxs("article", {
                        className: "segmentation-target",
                        children: [
                          i.jsx("span", { children: "ЦЕЛЕВАЯ МОДЕЛЬ" }),
                          i.jsx("h6", { children: "Матрица AUM × потенциал" }),
                          i.jsxs("div", {
                            className: "segmentation-matrix",
                            children: [
                              i.jsx("span", {
                                className: "segmentation-matrix__y-axis",
                                children: "Текущий AUM",
                              }),
                              i.jsxs("table", {
                                "aria-label":
                                  "Концептуальная матрица текущего AUM и потенциала клиента",
                                children: [
                                  i.jsx("thead", {
                                    children: i.jsxs("tr", {
                                      children: [
                                        i.jsx("th", {
                                          children: i.jsx("span", {
                                            className: "sr-only",
                                            children: "Текущий AUM",
                                          }),
                                        }),
                                        t.map((e) =>
                                          i.jsxs(
                                            "th",
                                            {
                                              scope: "col",
                                              children: [
                                                i.jsx("b", { children: e[0] }),
                                                i.jsx("small", {
                                                  children: e[1],
                                                }),
                                              ],
                                            },
                                            e[0],
                                          ),
                                        ),
                                      ],
                                    }),
                                  }),
                                  i.jsx("tbody", {
                                    children: e.map((e, n) =>
                                      i.jsxs(
                                        "tr",
                                        {
                                          children: [
                                            i.jsxs("th", {
                                              scope: "row",
                                              children: [
                                                i.jsx("b", { children: e[0] }),
                                                i.jsx("small", {
                                                  children: e[1],
                                                }),
                                              ],
                                            }),
                                            t.map((e, t) => {
                                              const r = ((e, t) =>
                                                0 === e && 3 === t
                                                  ? [
                                                      "protect-growth",
                                                      "Защита и рост",
                                                    ]
                                                  : e <= 1 && t <= 2
                                                    ? ["protect", "Защита AUM"]
                                                    : (1 === e && 3 === t) ||
                                                        (e >= 2 && t >= 2)
                                                      ? [
                                                          "growth",
                                                          "Рост доли капитала",
                                                        ]
                                                      : [
                                                          "base",
                                                          "Базовое покрытие",
                                                        ])(n, t);
                                              return i.jsx(
                                                "td",
                                                {
                                                  className: `mode-${r[0]}`,
                                                  children: r[1],
                                                },
                                                e[0],
                                              );
                                            }),
                                          ],
                                        },
                                        e[0],
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              i.jsx("span", {
                                className: "segmentation-matrix__x-axis",
                                children: "Потенциал клиента →",
                              }),
                            ],
                          }),
                          i.jsx("p", {
                            className: "segmentation-matrix__note",
                            children:
                              "Цвет закрепляет четыре коммерческих режима работы. Детальные SLA и правила исключений определяются в методологии обслуживания.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsxs("div", {
                    className: "commercial-approaches",
                    children: [
                      i.jsxs("header", {
                        children: [
                          i.jsx("span", { children: "ЛОГИКА РАБОТЫ В CRM" }),
                          i.jsx("strong", {
                            children:
                              "Как коммерческий режим превращается в конкретные действия",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        children: [
                          {
                            key: "base",
                            title: "Базовое покрытие",
                            items: [
                              "Стандартные коммуникации и цифровые сервисные сценарии.",
                              "Общий контур без персональной модели сопровождения.",
                              "CRM фиксирует отклики и значимые события; при появлении потенциала запускает повторную квалификацию.",
                            ],
                          },
                          {
                            key: "growth",
                            title: "Рост доли капитала",
                            items: [
                              "В CRM фиксируются внешние активы, целевой объём фондирования и основания потенциала.",
                              "Формируется план развития: следующий шаг, срок и ожидаемый результат.",
                              "События ликвидности и портфеля создают задачи ФС; движение капитала ведётся как коммерческая возможность.",
                            ],
                          },
                          {
                            key: "protect",
                            title: "Защита AUM",
                            items: [
                              "CRM отслеживает снижение активности, выводы средств, погашения и другие признаки риска.",
                              "Риск оттока создаёт задачу ФС с установленным сроком реакции.",
                              "Фиксируются план удержания, договорённости, результат и регулярное ревью портфеля.",
                            ],
                          },
                          {
                            key: "protect-growth",
                            title: "Защита и рост",
                            items: [
                              "В CRM ведётся стратегический план по клиенту и связанному капиталу.",
                              "Объединяются текущий портфель, внешние активы, цели, связи и значимые события.",
                              "Координируются действия ФС и экспертов; одновременно контролируются сохранение AUM и реализация потенциала.",
                            ],
                          },
                        ].map((e, t) =>
                          i.jsxs(
                            "article",
                            {
                              className: `commercial-approach commercial-approach--${e.key}`,
                              children: [
                                i.jsx("span", {
                                  children: String(t + 1).padStart(2, "0"),
                                }),
                                i.jsx("h6", { children: e.title }),
                                i.jsx("ul", {
                                  children: e.items.map((e) =>
                                    i.jsx("li", { children: e }, e),
                                  ),
                                }),
                              ],
                            },
                            e.key,
                          ),
                        ),
                      }),
                    ],
                  }),
                  i.jsxs("section", {
                    className: "potential-evidence",
                    children: [
                      i.jsxs("header", {
                        className: "potential-evidence__header",
                        children: [
                          i.jsx("span", {
                            children: "ОСНОВАНИЯ ОЦЕНКИ ПОТЕНЦИАЛА",
                          }),
                          i.jsx("strong", {
                            children:
                              "Потенциал подтверждается совокупностью капитала, события и готовности клиента",
                          }),
                          i.jsx("p", {
                            children:
                              "Каждый вывод должен опираться на наблюдаемые факторы и иметь проверяемый источник.",
                          }),
                        ],
                      }),
                      i.jsx("div", {
                        className: "potential-evidence__groups",
                        children: [
                          {
                            key: "capital",
                            number: "01",
                            title: "Доступный капитал",
                            description:
                              "Какой объём капитала существует вне текущего AUM и откуда он может поступить.",
                            criteria: [
                              {
                                title: "Оценка внешних активов",
                                factors: [
                                  "Портфели и средства в других банках и брокерах",
                                  "Депозиты, свободная ликвидность и валютные остатки",
                                  "Доли в бизнесе, зарубежные и иные монетизируемые активы",
                                ],
                                action:
                                  "Диапазон внешних активов, доля капитала в «Солиде», дата и уверенность оценки.",
                                sources: [
                                  "Интервью клиента",
                                  "Выписки и отчёты",
                                  "СПАРК / ЕГРЮЛ",
                                  "Оценка ФС",
                                ],
                              },
                              {
                                title: "Источники капитала",
                                factors: [
                                  "Предпринимательский доход и дивиденды",
                                  "Заработная плата и регулярные бонусы",
                                  "Продажа бизнеса, недвижимости или иных активов",
                                ],
                                action:
                                  "Источник, регулярность поступлений, ликвидность и реалистичный объём доступного капитала.",
                                sources: [
                                  "Финансовая анкета",
                                  "KYC-профиль",
                                  "История поступлений",
                                  "Саммари встреч",
                                ],
                              },
                            ],
                          },
                          {
                            key: "trigger",
                            number: "02",
                            title: "Повод и потребность",
                            description:
                              "Что может высвободить капитал и какую клиентскую задачу он должен решить.",
                            criteria: [
                              {
                                title: "Ожидаемые события ликвидности",
                                factors: [
                                  "Продажа бизнеса, доли или недвижимости",
                                  "Крупные дивиденды, бонусы и распределение прибыли",
                                  "Погашение депозитов, облигаций и инвестиционных продуктов",
                                ],
                                action:
                                  "Тип события, ожидаемая сумма, предполагаемая дата и вероятность наступления.",
                                sources: [
                                  "Клиент",
                                  "CRM-коммуникации",
                                  "Календарь погашений",
                                  "Публичное раскрытие",
                                ],
                              },
                              {
                                title: "Финансовые цели",
                                factors: [
                                  "Сохранение и долгосрочный рост капитала",
                                  "Регулярный денежный поток или крупная покупка",
                                  "Наследственное планирование и семейный капитал",
                                ],
                                action:
                                  "Цель, горизонт, целевая сумма, приоритет и связанный следующий шаг ФС.",
                                sources: [
                                  "Интервью",
                                  "Риск-профиль",
                                  "Саммари встреч",
                                  "Портфельные ревью",
                                ],
                                note: "Цель подтверждает потребность, но сама по себе не доказывает наличие капитала.",
                              },
                            ],
                          },
                          {
                            key: "conversion",
                            number: "03",
                            title: "Конвертируемость",
                            description:
                              "Насколько реально перевести выявленный капитал в «Солид» и что этому мешает.",
                            criteria: [
                              {
                                title:
                                  "Отношения с другими банками и брокерами",
                                factors: [
                                  "Количество провайдеров и распределение активов",
                                  "Продукты и сервисы, получаемые у конкурентов",
                                  "Незакрытые потребности и ограничения на перевод",
                                ],
                                action:
                                  "Текущие провайдеры, примерная доля капитала, причины сохранения отношений и условия перевода.",
                                sources: [
                                  "Клиент",
                                  "Предоставленные выписки",
                                  "История переводов",
                                  "CRM-коммуникации",
                                ],
                              },
                              {
                                title: "Готовность перевести активы",
                                factors: [
                                  "Клиент назвал сумму и предполагаемый срок",
                                  "Открыт счёт и пройдены необходимые проверки",
                                  "Согласован следующий шаг или выполнено первое фондирование",
                                ],
                                action:
                                  "Вероятность фондирования, сумма, срок, ответственный, следующий шаг и блокеры.",
                                sources: [
                                  "Коммерческая возможность",
                                  "Статус счёта и проверок",
                                  "Задачи и документы",
                                  "Фактические операции",
                                ],
                              },
                            ],
                          },
                        ].map((e) =>
                          i.jsxs(
                            "article",
                            {
                              className: `potential-group potential-group--${e.key}`,
                              children: [
                                i.jsxs("header", {
                                  className: "potential-group__header",
                                  children: [
                                    i.jsx("span", { children: e.number }),
                                    i.jsx("h6", { children: e.title }),
                                    i.jsx("p", { children: e.description }),
                                  ],
                                }),
                                i.jsx("div", {
                                  className: "potential-group__criteria",
                                  children: e.criteria.map((t, n) =>
                                    i.jsxs(
                                      "section",
                                      {
                                        className: "potential-criterion",
                                        children: [
                                          i.jsxs("header", {
                                            children: [
                                              i.jsx("span", {
                                                children: `${e.number}.${n + 1}`,
                                              }),
                                              i.jsx("h6", {
                                                children: t.title,
                                              }),
                                            ],
                                          }),
                                          i.jsx("ul", {
                                            className:
                                              "potential-criterion__factors",
                                            children: t.factors.map((e) =>
                                              i.jsx("li", { children: e }, e),
                                            ),
                                          }),
                                          t.note &&
                                            i.jsx("p", {
                                              className:
                                                "potential-criterion__note",
                                              children: t.note,
                                            }),
                                          i.jsxs("div", {
                                            className:
                                              "potential-criterion__action",
                                            children: [
                                              i.jsx("strong", {
                                                children: "Фиксируем в CRM",
                                              }),
                                              i.jsx("p", {
                                                children: t.action,
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "potential-criterion__sources",
                                            children: [
                                              i.jsx("strong", {
                                                children: "Источники",
                                              }),
                                              i.jsx("ul", {
                                                children: t.sources.map((e) =>
                                                  i.jsx(
                                                    "li",
                                                    { children: e },
                                                    e,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      },
                                      t.title,
                                    ),
                                  ),
                                }),
                              ],
                            },
                            e.key,
                          ),
                        ),
                      }),
                      i.jsxs("aside", {
                        className: "potential-evidence__standard",
                        children: [
                          i.jsxs("div", {
                            children: [
                              i.jsx("span", {
                                children: "СТАНДАРТ ДОКАЗАТЕЛЬНОСТИ",
                              }),
                              i.jsx("strong", {
                                children:
                                  "Оценка потенциала не должна превращаться в субъективное мнение ФС",
                              }),
                            ],
                          }),
                          i.jsx("ul", {
                            children: [
                              "Значение или диапазон",
                              "Источник информации",
                              "Дата получения",
                              "Кто зафиксировал",
                              "Уровень уверенности",
                              "Дата пересмотра",
                            ].map((e) => i.jsx("li", { children: e }, e)),
                          }),
                          i.jsxs("p", {
                            children: [
                              i.jsx("b", { children: "Подтверждено" }),
                              i.jsx("b", { children: "Вероятно" }),
                              i.jsx("b", { children: "Гипотеза" }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              i.jsxs("section", {
                className: "segmentation-stage segmentation-stage--service",
                children: [
                  i.jsxs("header", {
                    className: "segmentation-stage__header",
                    children: [
                      i.jsx("span", { children: "02" }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h5", {
                            children:
                              "Модель обслуживания следует за ценностью",
                          }),
                          i.jsx("p", {
                            children:
                              "Две координаты определяют приоритет внимания, глубину персонализации и стандарт взаимодействия.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "service-levels",
                    children: [
                      [
                        "Стратегический private",
                        "Персональный контур для высокой текущей ценности и подтверждённого потенциала развития отношений.",
                      ],
                      [
                        "Standard",
                        "Регулярное сопровождение по сегментному стандарту, событиям клиента и согласованной частоте контактов.",
                      ],
                      [
                        "Service",
                        "Надёжный базовый сервис и цифровые сценарии без избыточной нагрузки на персональный канал ФС.",
                      ],
                    ].map((e, t) =>
                      i.jsxs(
                        "article",
                        {
                          className: `service-levels__item service-levels__item--${t + 1}`,
                          children: [
                            i.jsx("span", {
                              children: String(t + 1).padStart(2, "0"),
                            }),
                            i.jsx("strong", { children: e[0] }),
                            i.jsx("p", { children: e[1] }),
                          ],
                        },
                        e[0],
                      ),
                    ),
                  }),
                  i.jsxs("div", {
                    className: "service-rules",
                    children: [
                      i.jsxs("article", {
                        children: [
                          i.jsx("span", { children: "Правило развития" }),
                          i.jsx("p", {
                            children:
                              "Подтверждённый высокий потенциал может повысить уровень обслуживания ещё до фактического фондирования.",
                          }),
                        ],
                      }),
                      i.jsxs("article", {
                        children: [
                          i.jsx("span", { children: "Правило удержания" }),
                          i.jsx("p", {
                            children:
                              "Высокий текущий AUM сохраняет приоритет даже при ограниченном потенциале роста: ключевая задача — удержание активов.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("p", {
                    className: "service-levels__note",
                    children:
                      "Критерии переходов, SLA и частота контактов утверждаются как отдельная методологическая политика.",
                  }),
                ],
              }),
              i.jsxs("section", {
                className: "segmentation-stage segmentation-stage--cycle",
                children: [
                  i.jsxs("header", {
                    className: "segmentation-stage__header",
                    children: [
                      i.jsx("span", { children: "03" }),
                      i.jsxs("div", {
                        children: [
                          i.jsx("h5", {
                            children:
                              "CRM превращает оценку в управляемый цикл",
                          }),
                          i.jsx("p", {
                            children:
                              "Сегмент не становится постоянным ярлыком: он пересматривается по расписанию и при значимых событиях.",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("ol", {
                    className: "segmentation-cycle",
                    children: [
                      ["Первичная оценка", "При привлечении или онбординге"],
                      [
                        "Основания потенциала",
                        "Факты, гипотеза и вероятность фондирования",
                      ],
                      ["Сегмент и уровень", "Выбор стандарта обслуживания"],
                      [
                        "Следующее действие ФС",
                        "Конкретный шаг, срок и результат",
                      ],
                      ["Пересмотр", "Ежегодно или по триггерному событию"],
                    ].map((e, t) =>
                      i.jsxs(
                        "li",
                        {
                          children: [
                            i.jsx("span", {
                              children: String(t + 1).padStart(2, "0"),
                            }),
                            i.jsx("strong", { children: e[0] }),
                            i.jsx("p", { children: e[1] }),
                          ],
                        },
                        e[0],
                      ),
                    ),
                  }),
                  i.jsx("p", {
                    className: "segmentation-outcome",
                    children:
                      "Результат: ресурс ФС распределяется с учётом текущих активов и реального потенциала развития клиентской ценности.",
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  function J({ className: e = "" }) {
    return i.jsxs("svg", {
      viewBox: "0 0 1058.46 289.76",
      className: e,
      role: "img",
      "aria-label": "Солид",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        i.jsx("path", {
          d: "M285.82 137.54c-5.97-10.54-8.95-22.65-8.95-36.31s2.98-25.5 8.95-36.05c12.21-21.58 34.59-33.46 60.83-33.46 28.01 0 48.18 12.49 60.44 30.09l-25.42 20.23c-6.71-9.9-17.49-16.86-32.42-16.86-30.71 0-34.5 27.07-34.5 36.05 0 29.78 22.75 36.31 34.5 36.31 13.82 0 26.11-6.48 33.98-19.71l25.94 19.71C396.22 159 373.78 171 346.92 171c-29 0-49.97-13.81-61.08-33.46ZM430.62 137.28c-6.23-10.55-9.34-22.48-9.34-35.79s3.11-25.5 9.34-36.05c12.37-20.96 35.46-33.72 64.07-33.72 31.27 0 53.11 15.16 64.07 33.72 6.23 10.55 9.34 22.57 9.34 36.05s-3.11 25.25-9.34 35.79C545.39 159.93 520.57 171 494.69 171c-28.3 0-51.51-12.45-64.07-33.72Zm82.62-4.41c10.6-6.06 17.25-17.09 17.25-31.64 0-15.4-7.8-25.99-17.25-31.39-5.45-3.11-11.63-4.67-18.55-4.67s-13.1 1.56-18.55 4.67c-10.33 5.91-17.25 16.74-17.25 31.39s7.03 25.81 17.25 31.64c5.45 3.11 11.63 4.67 18.55 4.67s13.1-1.56 18.55-4.67ZM607.37 34.82l-5.45 79.63c-.52 7.26-2.12 12.24-4.8 14.92s-7.65 4.02-14.91 4.02h-2.15c-2.76-.04-4.91-.2-5.48-.25l7.96 34.74c12.64-.03 22.83-1.49 30.54-4.4 7.78-2.94 13.83-8.13 18.16-15.56 4.32-7.43 6.91-17.81 7.78-31.13l3.54-49.8h35.5v100.9h37.87V34.82H607.37ZM1035.9 132.61V34.82H928l-5.45 75.74c-.69 8.3-2.81 14.14-6.35 17.51-3.55 3.37-9.38 5.06-17.51 5.06h-3.37v59.82h36.31v-25.06h90.52v25.06h36.31v-60.34h-22.57Zm-80.02-7c1.64-4.15 2.72-9.42 3.24-15.82l3-42.8h36.94v67.44H950.1c2.44-2.4 4.38-5.31 5.77-8.82ZM818.59 34.82l-26.2 75.74-11.63 34.05.94-38.98V34.82h-36.31v133.07h59.19l27.3-75.74 11.89-34.13-.94 38.8v71.07h36.06V34.82h-60.3zM207.21 147.61v-32.77s-37.07 25.11-88.42 25.11c-42.77 0-83.58-16.48-118.43-47.17-.21 2.79-.36 5.6-.36 8.49v.15c0 4.56.29 8.99.82 13.3 34.36 29.4 76 47.37 121.37 49.19 29.75 1.2 58.45-4.66 85.02-16.31Z",
        }),
        i.jsx("path", {
          d: "M76.24 101.43v-.15c0-11.82 4.51-19.87 12.49-25.61 8.77-6.3 23.34-10.86 44.28-10.78 17.8.2 43.39 4.42 73.82 22.76l.37.22V12.41C178.44 2.79 153.47 0 131.28 0 94.84 0 62.4 7.51 38.51 24.47 20.28 37.4 8.07 55.17 2.86 76.66c23.65 22.56 50.98 38.43 80.5 45.55-4.6-5.23-7.12-11.96-7.12-20.79ZM129.91 177.57c-2.75 0-5.5-.06-8.26-.17-41.72-1.68-81.28-15.98-115.72-41.24 6.25 16.99 17.3 31.23 32.59 42.07 23.89 16.96 56.34 24.47 92.77 24.47 22.19 0 47.16-2.79 75.92-12.41v-27.9c-24.68 9.99-50.71 15.17-77.3 15.17ZM521.64 235.82c-3.84-9.32-12.74-17.02-26.43-17.02-10.97 0-20.09 5.02-24.96 13.96-2.41 4.42-3.61 9.51-3.61 15.27s1.22 10.86 3.67 15.27c4.5 8.12 12.97 13.96 25.78 13.96 10.15 0 19.72-4.14 24.96-10.84l-8.32-7.44c-1.97 2.26-4.38 3.98-7.22 5.15-2.85 1.17-5.95 1.75-9.3 1.75s-6.02-.56-8.43-1.7c-4.08-1.92-7.13-5.42-8.25-11.11h44.04c.88-6.28.24-12.02-1.92-17.24Zm-40.28 2.35c1.35-2.63 3.25-4.61 5.69-5.97 2.44-1.35 5.38-2.03 8.81-2.03s6.37.69 8.81 2.08c2.44 1.39 4.27 3.39 5.47 6.02.62 1.35 1.07 2.84 1.37 4.48h-31.75c.36-1.68.88-3.21 1.59-4.59ZM534.34 263.18c-2.45-4.41-3.67-9.47-3.67-15.16s1.24-10.74 3.72-15.16c3.92-6.98 12.48-14.06 25.17-14.06 10.94 0 19.68 4.91 25.28 13.24l-9.3 6.9c-1.61-2.63-3.76-4.67-6.46-6.13s-5.69-2.19-8.98-2.19-6.17.73-8.65 2.19c-2.48 1.46-4.42 3.5-5.8 6.13-1.39 2.63-2.08 5.66-2.08 9.08s.71 6.46 2.13 9.09 3.37 4.67 5.86 6.13c2.48 1.46 5.33 2.19 8.54 2.19s6.44-.82 9.25-2.46c2.81-1.64 5.05-3.96 6.73-6.95l9.52 6.57c-5.19 9.37-14.7 14.67-26.05 14.67s-20.29-5.16-25.23-14.07ZM874.12 220.11l-21.53 44.76.4-13.95v-30.81h-12.91v55.82h19.21l21.52-44.76-.4 13.95v30.81h12.92v-55.82h-19.21zM809.36 220.11l-21.53 44.76.4-13.95v-30.81h-12.91v55.82h19.21l21.53-44.76-.41 13.95v30.81h12.92v-55.82h-19.21zM677.56 220.11l-21.53 44.76.4-13.95v-30.81h-12.91v55.82h19.21l21.52-44.76-.4 13.95v30.81h12.92v-55.82h-19.21zM759.06 263.89v-43.78h-12.92v44h-24.08v-44h-12.91v55.82h47.06v13.83h12.48v-25.87h-9.63zM636.29 220.11h-47.94v11.82h17.51v44h12.92v-44h17.51v-11.82zM451.37 248.24c-1.25-.6-2.63-1.07-4.12-1.41 2.04-.69 3.8-1.66 5.26-2.91 2.85-2.44 4.27-5.67 4.27-9.69 0-6.84-4.14-10.56-8.15-12.37-2.59-1.17-5.64-1.75-9.14-1.75h-30.04v55.82h31.47c13.8 0 18.5-8.02 18.5-15 0-5.76-2.84-10.21-8.04-12.7Zm-8.97-16.69c1.42 1.13 2.13 2.76 2.13 4.87s-.73 3.65-2.19 4.82c-1.46 1.17-3.47 1.75-6.02 1.75h-14.17v-13.13h14.17c2.63 0 4.65.57 6.07 1.7Zm1.91 32.67c-1.46 1.17-3.58 1.75-6.35 1.75h-15.82v-13.68h15.82c2.77 0 4.89.59 6.35 1.75 1.46 1.17 2.19 2.88 2.19 5.14s-.73 3.87-2.19 5.04ZM383.18 220.11v21.48h-25.45v-21.48h-12.91v55.82h12.91v-22.96h25.45v22.96h12.92v-55.82h-12.92zM313.63 220.11l-21.53 44.76.4-13.95v-30.81h-12.91v55.82h19.21l21.52-44.76-.4 13.95v30.81h12.91v-55.82h-19.2z",
        }),
      ],
    });
  }
  const ee = [
    {
      id: "heart-mission",
      label: "CRM как бизнес-инициатива и миссия",
      context: "Сердце стратегии",
      section: "core",
      heartTab: "mission",
      keywords:
        "миссия бизнес инициатива жизненный цикл отношения клиентская ценность контакты задачи эволюция",
    },
    {
      id: "heart-transformation",
      label: "Место CRM в цифровой трансформации",
      context: "Сердце стратегии",
      section: "core",
      heartTab: "transformation",
      keywords:
        "цифровые фронты сервисная модель операционная эффективность управление данными аналитические инструменты ROI",
    },
    {
      id: "heart-problems",
      label: "Текущее состояние и восемь проблем",
      context: "Сердце стратегии",
      section: "core",
      heartTab: "problems",
      keywords:
        "дубли продукт портфель проактивные продажи Outlook календарь Солид-Финанс брокерский отчёт свободные средства прогноз денежного потока купоны дивиденды погашения клиентский вид Цифровой фронт сегментация VIP ЕКЦ сервисный кейс Service Case маршрутизация линии поддержки SLA права аудит Excel проблемы контур фиксации",
    },
    {
      id: "heart-goals",
      label: "Пять целей CRM-стратегии",
      context: "Сердце стратегии",
      section: "core",
      heartTab: "goals",
      keywords:
        "рост база AUM продуктивность удержание клиент 360 прозрачность операционная модель цели что меняем сегодня целевое состояние от чего к чему персональная работа клиентский контекст покрытие базы отношения спящая база ЕКЦ сервисный кейс Service Case SLA маршрутизация линии поддержки внешние источники государственные реестры триггерные события пополнения выводы купоны дивиденды погашения риск-профиль стоимость привлечения стоимость обслуживания коммерческая функция",
    },
    {
      id: "heart-mapping",
      label: "Маппинг целей и проблем",
      context: "Справочное приложение",
      section: "core",
      heartTab: "goals",
      reference: "mapping",
      keywords:
        "таблица матрица связь прямое решение косвенное влияние стратегическая сессия",
    },
    {
      id: "heart-metrics",
      label: "NNA и маржинальная доходность AUM",
      context: "Executive summary",
      section: "core",
      heartTab: "metrics",
      keywords:
        "NNA Net New Assets чистый внешний приток отток маржинальная доходность AUM экономика базы",
    },
    {
      id: "heart-business-case",
      label: "Base-сценарий и экономика CRM-программы",
      context: "Executive summary",
      section: "core",
      heartTab: "business-case",
      keywords:
        "бизнес-кейс Base ROI дополнительная выручка бюджет команды окупаемость FTE разработчик тестировщик Dev QA удержание AUM приток монетизация",
    },
    {
      id: "heart-metric-detail",
      label: "Детализация дерева метрик",
      context: "Справочное приложение",
      section: "core",
      heartTab: "metrics",
      reference: "metric-detail",
      keywords:
        "декомпозиция NNA лиды фондирование развитие удержание CSI NPS сервисный кейс Service Case ЕКЦ SLA Time to Resolution TTR backlog эскалации первая линия погашения купоны дивиденды реинвестирование цифровые фронты",
    },
    {
      id: "capabilities",
      label: "Как CRM помогает достичь бизнес-целей",
      context: "Уровень 02",
      section: "capabilities",
      keywords: "возможности CRM способности wave волна 1 волна 2 волна 3 функциональность рабочее место ФС брокерский отчёт свободные средства прогноз денежного потока",
    },
    {
      id: "role-benefits",
      label: "Кому и что даст CRM-стратегия",
      context: "Уровень 02 · Практический эффект",
      section: "capabilities",
      targetId: "role-benefits",
      keywords:
        "маркетинг контроль качества финансовые советники ФС UHNW агенты агентский канал ЛК агента Цифровые фронты портфель коммуникации ЕКЦ операционные подразделения обращения SLA sales force руководители продаж топ-менеджмент финансы CSI ROMI",
    },
    {
      id: "methodology",
      label: "Процессы и методология CRM-отношений",
      context: "Уровень 03",
      section: "methodology",
      keywords:
        "жизненный цикл воронка сегментация модель сопровождения агентский канал агент клиент ФС ЛК агента права доступа аудит проактивная модель владение клиентом ЕКЦ сервисный кейс Service Case каталог сервисов маршрутизация первая вторая третья линия SLA Time to Resolution мотивация брокерский отчёт свободные средства прогноз денежного потока купоны дивиденды погашения Цифровой фронт",
    },
    {
      id: "methodology-segmentation-reference",
      label: "Модель «AUM × потенциал клиента»",
      context: "Справочное приложение",
      section: "methodology",
      methodologyPillar: 1,
      appendix: "segmentation-reference",
      keywords:
        "сегментация потенциал AUM внешние активы события ликвидности источники капитала финансовые цели банки брокеры готовность перевести активы вероятность фондирования базовое покрытие рост доли капитала защита AUM защита и рост массовый контур матрица следующий шаг ФС пересмотр источники информации СПАРК ЕГРЮЛ KYC выписки CRM доказательность подтверждено вероятно гипотеза",
    },
    {
      id: "tech",
      label: "Технологии и данные",
      context: "Уровень 04",
      section: "tech",
      keywords:
        "Bitrix платформа GAP интеграции Outlook календарь бэк-офис Core КХД DWH AI ИИ речевая аналитика звонки адаптация AI-инструменты кастомизация архитектура данные мастер-система CRM ID дедупликация клиентские отношения коммерческий процесс сервис SLA покрытие базы рабочее пространство ФС офис поля мобильный доступ Солид-Финанс брокерский отчёт операционные документы свободные средства прогноз денежного потока купоны дивиденды погашения Цифровой фронт клиентский вид тестовый контур DEV TEST бизнес-приёмка PROD go no-go процессные данные финансовые транзакционные данные внешние источники внешние базы данных государственные сервисы официальные сервисы открытые источники физические лица внешние данные сигналы встроенные отчёты КХД",
    },
    {
      id: "organization",
      label: "Организационная модель и бэклог изменений",
      context: "Уровень 05 · В проработке",
      section: "organization",
      keywords:
        "спонсор владелец продукта бизнес ИТ бэклог релизы обучение поддержка adoption change management команда",
    },
    {
      id: "roadmap",
      label: "Дорожная карта реализации проекта",
      context: "Три волны",
      section: "roadmap",
      keywords:
        "roadmap дорожная карта три волны внедрение этапы фаза 2026 2027",
    },
    {
      id: "roadmap-functional-map",
      label: "Функциональная карта развития CRM",
      context: "Дорожная карта · Срез зрелости",
      section: "roadmap",
      keywords:
        "функциональная карта сейчас as is волна 1 волна 2 волна 3 зрелость отсутствует слабо средне высоко агентский канал ЛК агента Цифровой фронт клиентский вид портфеля продажи клиент портфель продукты рабочее место ФС сервис данные аналитика",
    },
    {
      id: "roadmap-wave-1",
      label: "Волна 1 — управляемые воронки и единый профиль",
      context: "Дорожная карта · Волна 1",
      section: "roadmap",
      keywords:
        "волна 1 воронка первичных продаж профиль клиента продуктовый справочник рабочее место ФС брокерский отчёт свободные средства Солид-Финанс операционные документы повторные кросс продажи аналитика агентский канал CRM-контур агента карточка агента статусы связи агент клиент ФС задачи документы модель владения клиентом Outlook Dasha Mail 2026",
    },
    {
      id: "roadmap-wave-2",
      label: "Волна 2 — Портфель 360 и развитие действующей базы",
      context: "Дорожная карта · Волна 2",
      section: "roadmap",
      keywords:
        "волна 2 портфель 360 прогноз денежного потока свободные средства купоны дивиденды погашения продуктовый каталог повторные продажи событийная активация следующий лучший шаг NBA сегментная модель удержание ротация автоматизация рутины мобильные сценарии NPS CSI подготовка интеграции ЛК агента Цифровые фронты права согласия контракт обмена 2027",
    },
    {
      id: "roadmap-wave-3",
      label: "Волна 3 — зрелая модель управления клиентской ценностью",
      context: "Дорожная карта · Волна 3",
      section: "roadmap",
      keywords:
        "волна 3 предиктивная аналитика оттока прогноз AUM выручки капитал 360 омниканальные коммуникации NMAG LTV аудит NBA контактная политика ЛК агента Цифровые фронты Цифровой фронт клиентский вид портфеля только чтение без имперсонации ЕКЦ разрешённый портфельный контекст коммуникации агента 2027",
    },
  ];
  N.createRoot(document.getElementById("root")).render(
    i.jsx(f.StrictMode, {
      children: i.jsx(function () {
        var e;
        const t = [
            {
              id: "core",
              title:
                "Сердце CRM-стратегии: миссия, трансформация, проблемы, цели, метрики и бизнес-кейс",
              shortTitle: "Сердце стратегии",
              icon: $,
              color: "bg-slate-900 border-slate-850 text-white",
              darkColor: "#251618",
              description:
                "CRM как бизнес-инициатива: миссия, целевая модель, проблемы, цели, NNA, маржинальная доходность AUM и Base-сценарий экономики программы.",
            },
            {
              id: "capabilities",
              title: "Как CRM помогает достичь бизнес-целей",
              shortTitle: "CRM и бизнес-цели",
              icon: L,
              color: "bg-indigo-50 border-indigo-100 text-indigo-900",
              darkColor: "#3767d6",
              description:
                "Пять стратегических целей, функциональный контур и практический эффект для ключевых бизнес-ролей.",
            },
            {
              id: "methodology",
              title: "Процессы и методология CRM-отношений",
              shortTitle: "Процессы и методология",
              icon: F,
              color: "bg-blue-50 border-blue-100 text-blue-900",
              darkColor: "#2563eb",
              description:
                "7 фундаментальных блоков построения жизненного цикла, сегментации, сервисной и проактивной моделей, владения клиентом и мотивации.",
            },
            {
              id: "tech",
              title: "Технологии и данные",
              shortTitle: "Технологии и данные",
              icon: I,
              color: "bg-emerald-50 border-emerald-100 text-emerald-900",
              darkColor: "#059669",
              description:
                "Развитие Bitrix-платформы, интеграции, мастер-данные клиентских отношений, разделение ролей систем и последовательное подключение ИИ.",
            },
            {
              id: "organization",
              title: "Организационная модель и бэклог изменений",
              shortTitle: "Оргмодель и процессы",
              icon: H,
              color: "bg-amber-50 border-amber-100 text-amber-905",
              darkColor: "#d97706",
              description:
                "Правила управления бэклогом, бизнес-роли владельцев процессов, планирование релизов и адаптация коммерческой команды.",
            },
          ],
          headerNav = [
            { id: "core", label: "Ядро" },
            { id: "capabilities", label: "Цели" },
            { id: "methodology", label: "Процессы" },
            { id: "tech", label: "Технологии" },
            { id: "organization", label: "Оргмодель" },
            { id: "roadmap", label: "Волны" },
          ],
          [n, r] = f.useState(""),
          [l, a] = f.useState("core"),
          [s, o] = f.useState({
            core: !0,
            capabilities: !0,
            methodology: !1,
            tech: !1,
            organization: !1,
          }),
          [c, u] = f.useState(null),
          [d, p] = f.useState("mission"),
          [h, m] = f.useState(null),
          g = {
            core: f.useRef(null),
            capabilities: f.useRef(null),
            methodology: f.useRef(null),
            tech: f.useRef(null),
            organization: f.useRef(null),
            roadmap: f.useRef(null),
          };
        (f.useEffect(() => {
          const e = () => {
            var e;
            const n =
              window.scrollY +
              (document.getElementById("strategy-header")?.offsetHeight ?? 0) +
              64;
            let r = "core";
            for (const l of headerNav) {
              const t = null == (e = g[l.id]) ? void 0 : e.current;
              t &&
                n >= t.getBoundingClientRect().top + window.scrollY &&
                (r = l.id);
            }
            a(r);
          };
          return (
            window.addEventListener("scroll", e, { passive: !0 }),
            () => window.removeEventListener("scroll", e)
          );
        }, []),
          f.useEffect(() => {
            const e = Array.from(
              document.querySelectorAll(
                "#strategy-content-viewport > section, #roadmap",
              ),
            );
            if (
              window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
              !("IntersectionObserver" in window)
            )
              return void e.forEach((e) => e.classList.add("is-revealed"));
            const t = new IntersectionObserver(
              (e) => {
                e.forEach((e) => {
                  e.isIntersecting &&
                    (e.target.classList.add("is-revealed"),
                    t.unobserve(e.target));
                });
              },
              { threshold: 0.08, rootMargin: "0px 0px -8% 0px" },
            );
            return (
              e.forEach((e) => {
                (e.classList.add("reveal-section"), t.observe(e));
              }),
              () => t.disconnect()
            );
          }, []),
          f.useEffect(() => {
            const e = document.querySelector(".strategy-primary-nav"),
              t = document.querySelector(
                `[data-strategy-nav="${l}"]`,
              );
            if (!e || !t || e.scrollWidth <= e.clientWidth) return;
            e.scrollTo({
              left:
                t.offsetLeft - e.clientWidth / 2 + t.offsetWidth / 2,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                .matches
                ? "auto"
                : "smooth",
            });
          }, [l]),
          f.useEffect(() => {
            const e = (e) => {
              var t, n;
              ((e.ctrlKey || e.metaKey) &&
                "k" === e.key.toLowerCase() &&
                (e.preventDefault(),
                null == (t = document.getElementById("global-search-input")) ||
                  t.focus()),
                "Escape" === e.key &&
                  "global-search-input" ===
                    (null == (n = document.activeElement) ? void 0 : n.id) &&
                  (r(""), document.activeElement.blur()));
            };
            return (
              window.addEventListener("keydown", e),
              () => window.removeEventListener("keydown", e)
            );
          }, []));
        const b = (e) => {
            var t;
            o((t) => ({ ...t, [e]: !0 }));
            const n = null == (t = g[e]) ? void 0 : t.current;
            n &&
              (window.scrollTo({
                top:
                  n.getBoundingClientRect().top +
                  window.scrollY -
                  (document.getElementById("strategy-header")?.offsetHeight ??
                    0) -
                  42,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "auto"
                  : "smooth",
              }),
              a(e));
          },
          v = [
            {
              goalId: 0,
              goalTitle: "Управляемый рост клиентской базы и AUM",
              description:
                "Функциональный контур охватывает поиск и каналы привлечения, ведение лида до фондирования, продуктовый каталог, событийные повторные продажи, персональные предложения и сквозную аналитику.",
              items: [
                "Воронка продаж полного цикла (Лид → Квалификация → Сделка → Фондирование счёта)",
                "Прогнозирование и планирование продаж (воронка, прогнозы)",
                "Сегментация клиентов с учётом потенциала, AUM, стадии жизненного цикла",
                "Кросс-продажи и допродажи: системная работа по развитию и расширению портфеля действующих клиентов",
                "Воронка повторных продаж с событийными триггерами (погашение ноты, высвобождение средств на счёте, ребалансировка портфеля) и другие триггеры и предложения по лучшему следующему взаимодействию",
                "Каталог продуктов как коммерческий слой: доступность, срок, валюта, риск, целевой профиль и ограничения связаны с клиентом, портфелем, воронкой, кампанией и следующим действием; мастер-система определяется отдельно",
                "Система следующего лучшего предложения на основе профиля, риск-аппетита и текущего портфеля клиента",
                "Сквозная аналитика воронки для маркетинга и CSO (от первого касания до зафондированной сделки)",
                "Целевой поиск и ранжирование состоятельных клиентов (воронка привлечения)",
                "Мероприятия как канал воронки: регистрация → последующее касание → конверсия",
                "Агентский канал: CRM-контур агента, статусы, связи «агент — клиент — ФС», задачи, документы, аналитика и последующая интеграция с ЛК агента",
              ],
              agentModel: {
                title: "Агентский канал: CRM-контур → ЛК агента",
                description:
                  "Сначала управляем агентским каналом внутри CRM, затем согласуем внешний контур и только после запуска «Цифровых фронтов» подключаем ЛК агента.",
                stages: [
                  {
                    wave: "Волна 1",
                    title: "CRM-контур агента",
                    description:
                      "Карточка, статусы, подтверждённые связи «агент — клиент — ФС», задачи, документы и базовая аналитика.",
                  },
                  {
                    wave: "Волна 2",
                    title: "Подготовка интеграции",
                    description:
                      "Права, согласия, состав данных, сценарии коммуникаций и контракт обмена с «Цифровыми фронтами».",
                  },
                  {
                    wave: "Волна 3",
                    title: "ЛК агента",
                    description:
                      "Разрешённый портфельный контекст, статусы и коммуникации по подтверждённым клиентам.",
                  },
                ],
                note: "Запуск ЛК агента зависит от готовности цифрового фронта, запланированной на сентябрь 2027 года.",
              },
            },
            {
              goalId: 1,
              goalTitle: "Увеличение продуктивности коммерческой команды",
              description:
                "Рабочее место ФС объединяет необходимый клиентский контекст, коммуникации, мобильный доступ, оперативные сигналы, автоматизацию рутины и управление результативностью команды, продаж и маркетинга.",
              items: [
                "Сфокусированное рабочее место ФС только с необходимой для работы информацией, без «портального шума»",
                "Управление эффективностью работы ФС: метрики активности, конверсии, покрытия базы",
                "Интеграция с рабочими инструментами: почта Outlook, календарь, шаблоны коммуникаций",
                "Автоматизация рутины: автоматическое последующее действие по итогам звонка, авто-задачи, ИИ-саммаризация переговоров",
                "Формирование многопараметровой модели коммуникаций (этап отношений, события в портфеле, сегмент и уровень обслуживания, регион и пр.)",
                "Оперативные данные из Core-систем: свободные средства, позиции, операции и значимые события — без прямого входа ФС в Солид-Финанс",
                "Фактические свободные средства и прогноз купонов, дивидендов и погашений показаны раздельно — с датой, суммой, источником и актуальностью",
                "Запрос, просмотр и передача брокерских отчётов, справок и операционных документов из CRM",
                "Оценка эффективности маркетинга: атрибуция каналов привлечения, окупаемость инвестиций (ROMI)",
                "Оценка эффективности продаж: скорость движения по воронке, конверсия в успешные сделки, время до пополнения счёта",
                "Мобильный доступ к CRM для полевых встреч с состоятельными клиентами",
                "Поддержка системы мотивации, переориентированная с «галочки в CRM» на качество ведения клиентского цикла и бизнес-результат",
              ],
              productivityModel: {
                title: "Продуктивность на практике",
                description:
                  "ФС получает необходимый клиентский контекст, данные и документы в CRM — без прямой работы в Core-системах.",
                zones: [
                  {
                    title: "Один интерфейс",
                    description:
                      "Профиль, портфель, задачи, коммуникации и следующий шаг собраны в рабочем месте ФС.",
                  },
                  {
                    title: "Данные и прогнозы",
                    description:
                      "Свободные средства, позиции, операции и ожидаемые купоны, дивиденды и погашения показаны с датой, суммой, источником и актуальностью.",
                  },
                  {
                    title: "Документы без переходов",
                    description:
                      "Брокерский отчёт, справки и операционные документы запрашиваются, просматриваются и передаются из CRM.",
                  },
                ],
              },
            },
            {
              goalId: 2,
              goalTitle: "Удержание и развитие клиентов",
              description:
                "Контур удержания объединяет раннее выявление риска оттока, событийные проактивные контакты, сегментную модель сопровождения, управляемые сервисные обращения и обратную связь клиентов.",
              items: [
                "Работа с оттоком: раннее предупреждение → план действий → сохранение активов",
                "Покрытие отношениями: проактивное взаимодействие, регулярные обзоры портфеля и профиля клиента",
                "Фокусировка на ключевых сегментах: формат сопровождения, частота контактов, уровень персонализации и приоритет ресурса с учётом AUM и потенциала",
                "Алерты о событиях клиента (следующее лучшее действие, персональные поводы для контакта, триггеры снижения активности)",
                "Свободные клиентские события: личные даты, замещение ФС, сервисные напоминания",
                "Удовлетворённость клиентов: NPS/CSI, системная обратная связь и опросы по точкам касания",
              ],
              serviceModel: {
                title: "Единая сервисная модель и управление обращениями",
                description:
                  "Объединяет входные каналы, ЕКЦ, профильные линии и ФС вокруг одного сервисного кейса, чтобы обращение не терялось между подразделениями, управлялось по SLA и сохранялось в единой истории клиента.",
                items: [
                  "Единый Service Case с уникальным ID, клиентом, каналом, категорией, срочностью, владельцем, статусом, SLA и результатом закрытия",
                  "Автоматическая или ручная регистрация обращений из цифровых каналов, e-mail, формы сайта, телефонии и через ФС",
                  "Единая статусная модель, очереди, матрица маршрутизации, уведомления и контролируемая эскалация на вторую и третью линии",
                  "ЕКЦ сохраняет ответственность за движение кейса до результата при подключении профильных подразделений",
                  "Обращение, договорённости, текущий статус и результат видны в профиле клиента и рабочем месте ФС",
                  "База знаний и сценарии первой линии развиваются по результатам закрытых кейсов, повторных запросов и эскалаций",
                  "Операционная аналитика причин обращений, просрочек, повторных запросов, эскалаций и загрузки линий",
                  "SLA сервисного кейса определяется типом, срочностью и регуляторным риском; сегмент может влиять на сопровождение и допустимую приоритизацию, но не снижает базовый стандарт сервиса",
                ],
              },
            },
            {
              goalId: 3,
              goalTitle: "Единое информационное пространство о клиенте",
              description:
                "Единые профили клиента и портфеля на общем ID объединяют историю отношений, статусы, связи, продукты, показатели и структуру капитала без потери контекста.",
              items: [
                "Единый профиль клиента (Клиент 360): карточка клиента, история, статусная модель, связи с другими карточками и событиями (звонки, письма, встречи и т.д.)",
                "Единый портфель (Портфель 360): клиентский взгляд на портфель, продукты, показатели доходности, динамика AUM, сборка предложения",
                "Управление потенциалом клиента",
                "Обогащение данных о клиентах из внешних источников",
                "Единая сущность клиента и единый ID (устранение дублирования сущностей лидов/контактов/клиентов)",
                "Полная переносимость истории коммуникаций между статусами без потери контекста",
                "Интегрированная модель «Капитал 360»: объединение данных о капитале, семейных и деловых связях, внешних активах и общей структуре состояния клиента",
              ],
            },
            {
              goalId: 4,
              goalTitle:
                "Управленческая прозрачность и решения на основе данных",
              description:
                "Управленческий контур включает дашборды, прогнозы и операционную отчётность CRM, правила качества и доступа к данным, интеграции, передачу процессных данных в КХД и модель владения клиентом.",
              items: [
                "Управленческая видимость: информационные панели (дашборды), прогнозы, анализ воронки продаж в реальном времени",
                "Управление качеством и правилами данных: стандарт определения качества данных, гибкая модель прав доступа без прямой привязки к оргструктуре, определение владельцев данных, журнал аудита изменений",
                "Контролируемые выгрузки и встроенные целевые отчёты (уход от ручной сборки в Excel)",
                "Интеграция CRM → КХД (DWH): CRM поставляет процессные данные, КХД — единственный источник финальной отчетности. Операционная отчётность в CRM, аналитическая в КХД",
                "Предиктивная аналитика оттока и прогноз выручки на базе воронки продаж",
                "Интеграции: бэк-офис (Солид-Финанс), КХД, внешние источники данных",
                "Модель владения клиентом: в едином профиле фиксируются основной ФС, участники совместного обслуживания, определяются подходы к ротации и замещению ответственного",
              ],
            },
          ],
          roleBenefits = [
            {
              group: "Управление бизнесом",
              roles: [
                {
                  title: "Руководители sales force / руководители продаж",
                  summary:
                    "Увидят состояние продаж и клиентской базы без ручного сбора статусов.",
                  items: [
                    "Воронка и прогноз первичных и повторных продаж.",
                    "Клиенты без следующего шага и риски оттока.",
                    "Оценка эффективности работы своей команды.",
                    "Аналитическая и операционная отчётность.",
                  ],
                },
                {
                  title: "Топ-менеджмент",
                  summary:
                    "Увидит, за счёт чего растут или снижаются приток активов и доходность клиентской базы.",
                  items: [
                    "Прогноз пополнений и выручки до поступления денег на счета.",
                    "Сравнение команд, каналов и клиентских сегментов.",
                    "Риски оттока и проблемы сервиса видны заранее.",
                    "История отношений остаётся в компании, а не у отдельного ФС.",
                  ],
                },
                {
                  title: "Финансы",
                  summary: "Свяжут план продаж с фактическими деньгами и доходом.",
                  items: [
                    "План-факт по притоку и оттоку клиентских активов.",
                    "Стоимость привлечения, обслуживания и результат маркетинга.",
                    "Меньше ручной сверки; итоговые цифры остаются в КХД.",
                  ],
                },
              ],
            },
            {
              group: "Работа с клиентом",
              roles: [
                {
                  title: "Маркетинг",
                  summary:
                    "Увидит, какие каналы и кампании приводят реальные деньги, а не только заявки, и сможет точнее считать ROMI.",
                  items: [
                    "Путь клиента от первого контакта до пополнения счёта.",
                    "Конверсия и финансовый результат по каналам, кампаниям и мероприятиям.",
                    "Более точный расчёт стоимости привлечения и окупаемости маркетинговых активностей.",
                    "Готовые сегменты для точных предложений.",
                    "Единая политика коммуникации: согласия, частота, каналы и правила общения с клиентами.",
                  ],
                },
                {
                  title: "Финансовые советники",
                  summary:
                    "Увидят клиента целиком и получат данные, документы и следующий шаг в одном рабочем пространстве.",
                  items: [
                    "Профиль, портфель, оценка потенциала, история, сервисные обращения и внешние данные — на одном экране.",
                    "Текущие свободные средства и ожидаемые купоны, дивиденды и погашения — с датой, суммой, источником и актуальностью.",
                    "Брокерский отчёт, справки и операционные документы доступны из CRM без прямой работы в Солид-Финанс.",
                    "Сигналы о пополнениях, выводах, погашениях, снижении активности и проблемах в обслуживании превращаются в следующий шаг.",
                    "Почта, календарь, итоги звонков и задачи — без двойного ввода; с системой можно работать прямо в полях.",
                    "Меньше нерелевантных задач и «шума» — только нужные функции и действия по ситуации клиента.",
                  ],
                },
                {
                  title: "Сотрудники, работающие с UHNW-клиентами",
                  summary:
                    "Получат полную картину клиента, его семьи и капитала без потери важных деталей.",
                  items: [
                    "Клиент, семья, компании и связи — всё в одном профиле.",
                    "Портфель, внешние активы и важные события — на одном экране.",
                    "Индивидуальная настройка контактной политики.",
                    "Гибкое разграничение прав доступа к данным клиентов.",
                  ],
                },
                {
                  title: "Агенты",
                  summary:
                    "Получат в ЛК агента целевой контур работы с клиентами, связь с которыми подтверждена.",
                  items: [
                    "В Волне 1 CRM фиксирует карточку и статус агента, связь с клиентом или лидом, ответственного ФС, задачи, документы и историю действий.",
                    "В Волне 3 ЛК агента показывает разрешённый портфельный контекст по подтверждённым клиентам.",
                    "Коммуникации с клиентами ведутся в согласованных каналах; в CRM фиксируются участники, дата и результат взаимодействия.",
                    "Состав данных, доступы и сценарии ЛК согласуются с «Цифровыми фронтами», требованиями информационной безопасности и клиентскими согласиями.",
                  ],
                },
              ],
            },
            {
              group: "Операционная работа",
              roles: [
                {
                  title: "Отдел контроля качества",
                  summary:
                    "Получит единое место для проверки работы с клиентами и качества данных, с минимальным объёмом ручной работы.",
                  items: [
                    "Звонки, итоги и договорённости автоматически фиксируются в карточке клиента — без повторного ручного ввода.",
                    "Обратная связь от клиентов собирается автоматически, включая регулярный замер удовлетворённости (CSI).",
                    "Проблемные звонки, жалобы и низкие оценки собираются в одной выборке.",
                    "Качество работы ФС и данных контролируется на одном экране с помощью готовых отчётов и аналитики.",
                    "Повторяющиеся ошибки выявляются автоматически и становятся основой для обучения и исправления процессов.",
                  ],
                },
                {
                  title: "ЕКЦ и операционные подразделения",
                  summary:
                    "Получат единый процесс работы с обращением: ЕКЦ ведёт его до результата, а профильные подразделения получают полную информацию и понятные сроки.",
                  items: [
                    "Обращение регистрируется один раз.",
                    "Владелец, статус, приоритет и SLA видны всем участникам.",
                    "Типовые вопросы решает ЕКЦ, сложные — профильные подразделения.",
                    "Данные, документы и договорённости передаются вместе с обращением.",
                    "Просрочки, нагрузка и повторные проблемы видны в отчётах.",
                    "Решённые вопросы пополняют базу знаний.",
                  ],
                },
              ],
            },
          ],
          y = [
            {
              title: "Управление жизненным циклом клиента и воронкой продаж",
              description:
                "Формализует путь клиента от привлечения до возврата, закрепляя этапы, критерии переходов, ответственность, отдельные воронки и правила регулярного управления продажами.",
              items: [
                "Формализованные этапы: привлечение → онбординг → развитие → удержание → возврат",
                "Каждый этап имеет измеримые критерии перехода (триггеры), ответственного и целевые метрики",
                "CRM фиксирует текущую стадию клиента и направляет действия команды в соответствии с ней",
                "Разные стадии = разные KPI, коммуникации и SLA",
                "Воронка как инструмент прогнозирования: объём, конверсия, скорость, средний чек",
                "Дисциплина ведения воронки: обязательная фиксация возможностей, регулярные обзоры воронки, правила «гигиены» (закрытие неактивных сделок)",
                "Разделение первичных продаж новым для компании клиентам и повторных / кросс-продаж действующим клиентам — разные воронки, метрики и ответственные",
                "Отдельный жизненный цикл агентского канала: агент → договор и статус → подтверждение связи с клиентом → назначение ФС → совместная работа → аналитика",
              ],
            },
            {
              title: "Сегментация и модель сопровождения",
              description:
                "Определяет сегменты и формат сопровождения, чтобы распределять ресурс ФС по ценности клиента и обеспечивать соответствие предложений его профилю.",
              items: [
                "Клиентская база делится на сегменты по ценности (AUM), потенциалу и поведению",
                "Каждому сегменту соответствует модель сопровождения: частота контактов, каналы, уровень персонализации и участие ФС",
                "Ресурс ФС и руководителей распределяется пропорционально ценности сегмента, а не количеству клиентов",
                "Правила перехода между сегментами (повышение / понижение сегмента) формализованы и автоматизированы",
                "Стандарты сбора данных и обогащения профиля: жёсткий регламент фиксации нефинансовых характеристик (связи, бенефициары, хобби, жизненные цели) и обязательное заполнение саммари встреч в течение 24 часов",
                "Соответствие продуктов профилю клиента: CRM учитывает риск-профиль клиента и помогает предлагать только подходящие ему продукты.",
              ],
            },
            {
              title: "Единая сервисная модель и управление обращениями",
              description:
                "Задаёт единый процесс от регистрации клиентского запроса до подтверждённого решения: роли линий поддержки, правила классификации и маршрутизации, SLA, контроль результата и использование накопленных знаний.",
              items: [
                "Каждый клиентский запрос в подключённом периметре каналов регистрируется как отдельный сервисный кейс, связанный с единым профилем клиента",
                "Каталог сервисов и классификатор обращений определяют категорию, срочность, регуляторный риск, требуемую линию поддержки и правила закрытия",
                "ЕКЦ владеет движением кейса до результата; первая линия решает типовые вопросы, профильные подразделения отвечают за экспертное решение, ФС сохраняет видимость",
                "Статусная модель, очереди и матрица маршрутизации задают ответственного, следующий шаг, контроль ожидания и правила эскалации",
                "SLA первого ответа и решения определяется типом, срочностью и регуляторным риском; сегмент не отменяет обязательный базовый стандарт сервиса",
                "Кейс закрывается после фиксации результата, причины решения и последующих действий; повторное обращение связывается с предыдущей историей",
                "База знаний и сценарии первой линии обновляются по результатам обращений, эскалаций, продуктовых запусков и изменений процессов",
                "Управление нагрузкой учитывает состав очередей и пиковые периоды, включая всплески при маркетинговых и продуктовых запусках",
              ],
            },
            {
              title:
                "Событийная модель, проактивные контакты и политика коммуникаций",
              description:
                "Переводит работу с клиентом в проактивную событийную модель: от выявления триггера до выбора следующего действия, предложения, канала и контроля коммуникационной нагрузки.",
              items: [
                "Переход от реактивной модели («клиент позвонил — ответили») к проактивной («система обнаружила событие — инициировала действие»)",
                "Триггеры: движение средств, погашение продукта, изменение рыночных условий, приближение срока ревью портфеля, персональные даты",
                "Каждый триггер запускает сценарий: задача → коммуникация → контроль результата",
                "Лучшее следующее действие / предложение: системная рекомендация следующего шага для ФС на основе профиля, портфеля и истории клиента",
                "Политика контактов и ограничение частоты коммуникаций: жёсткие лимиты на частоту коммуникаций (особенно в HNWI) для предотвращения спама и выгорания базы",
                "Приоритизация сообщений и иерархия офферов: правила разрешения конфликтов при одновременном срабатывании нескольких триггеров (какое предложение приоритетнее)",
                "Маршрутизация по каналам: правила выбора оптимального канала связи (уведомление → мессенджер → личный звонок ФС) в зависимости от критичности события и сегмента клиента",
                "Управление согласиями и предпочтениями: учёт юридических согласий на маркетинг и персональных настроек каналов связи в профиле клиента",
              ],
              scenarios: {
                sales: [
                  {
                    signal: "Прогноз свободных средств",
                    action: "Задача ФС до поступления",
                    result: "Подбор продукта и персональный контакт",
                  },
                  {
                    signal: "Купон, дивиденд или погашение",
                    action: "Сценарий реинвестирования",
                    result: "Контакт до или в момент поступления",
                  },
                  {
                    signal: "Подходящий новый продукт",
                    action: "Выборка из продуктового каталога",
                    result: "Целевая коммуникация по контактной политике",
                  },
                ],
                service: [
                  {
                    signal: "Готов брокерский отчёт",
                    action: "Документ связан с клиентом в CRM",
                    result: "Уведомление через Цифровой фронт",
                  },
                  {
                    signal: "Запрос из приложения или ЛК",
                    action: "Service Case и очередь ЕКЦ",
                    result: "Статусы решения возвращаются в ЦФ",
                  },
                  {
                    signal: "Сбой выплаты, повтор или риск SLA",
                    action: "Кейс и контролируемая эскалация",
                    result: "Уведомление ФС и контроль результата",
                  },
                ],
              },
            },
            {
              title: "Модель владения данными и правила маршрутизации лидов",
              description:
                "Задаёт правила распределения лидов и клиентов, смены и замещения ответственного, чтобы сохранять клиентскую базу, историю отношений и непрерывность обслуживания.",
              items: [
                "Правила аллокации лидов: распределение новых потенциальных клиентов на основе специализации советника, AUM лида и текущей загрузки ФС",
                "Защита базы компании при уходе ФС: регламент и процесс бесшовного перевода клиентов и всей истории взаимодействий при увольнении ФС с целью удержания активов в периметре компании",
                "Правила ротации: автоматический возврат клиента в общую базу или переаллокация на другого советника в случае отсутствия активности со стороны текущего ФС (например, если нет содержательного контакта > 90 дней)",
                "Связь агента с лидом, сделкой или клиентом подтверждается по правилам источника; спорные случаи проходят ручную проверку, а история не перезаписывается",
                "Ролевые права определяют, какой клиентский и портфельный контекст доступен в CRM и ЛК агента; изменения и доступы доступны для аудита",
              ],
            },
            {
              title: "Управление клиентской ценностью и измерение эффекта",
              description:
                "Связывает стратегические цели с показателями подразделений, команд и ФС, формируя регулярный управленческий ритм и измеримый вклад CRM в бизнес-результат.",
              items: [
                "Дерево метрик от стратегической NSM (NMAG) до операционных KPI каждого ФС",
                "Каскадирование целей: стратегия → подразделение → команда → индивидуальный план",
                "Регулярный ритм управления: еженедельный обзор воронки, ежемесячный бизнес-обзор, квартальный стратегический пересмотр",
                "Метрики качества данных и дисциплины ведения CRM как обязательный элемент оценки (не «заполняй карточку», а «качество данных влияет на решения»)",
                "Фокус на опережающих метриках (активность, покрытие, воронка), а не только на запаздывающих показателях (AUM, выручка)",
              ],
            },
            {
              title: "Компетенции, внедрение и адаптация пользователей",
              description:
                "Обеспечивает практическое внедрение CRM через обучение, онбординг, CRM-чемпионов, мотивацию и регулярное измерение использования ключевых сценариев.",
              items: [
                "Обучать ФС, руководителей и поддерживающие роли по их рабочим сценариям: жизненный цикл клиента, возможность, следующее действие, сервисный кейс, портфельный обзор, агентский контур и работа с данными",
                "Встроить CRM в онбординг новых ФС как основной способ освоения базы, воронки и стандартов взаимодействия, а не передавать практику только «в полях»",
                "Развивать сеть CRM-чемпионов в коммерческих командах для первичной поддержки, сбора обратной связи и проверки применимости изменений",
                "Связать KPI и мотивацию не с формальным заполнением CRM, а с качеством клиентского цикла, покрытием базы, своевременностью действий, качеством данных и бизнес-результатом",
                "Регулярно измерять использование ключевых сценариев, причины обхода CRM и эффект обучения; результаты использовать для доработки процессов и интерфейсов",
              ],
            },
          ],
          x = (e) => e.toLocaleLowerCase("ru-RU").replaceAll("ё", "е").trim(),
          k = x(n),
          w = v.flatMap((e, t) =>
            [
              ...e.items.map((n, r) => ({
                id: `capability-${t}-${r}`,
                label: n,
                context: `Целевые способности · ${e.goalTitle}`,
                section: "capabilities",
                capabilityGoal: t,
                keywords: `${e.goalTitle} ${e.description} ${n}`,
              })),
              ...(e.serviceModel
                ? e.serviceModel.items.map((n, r) => ({
                    id: `capability-service-${t}-${r}`,
                    label: n,
                    context: `Единая сервисная модель · ${e.goalTitle}`,
                    section: "capabilities",
                    capabilityGoal: t,
                    keywords: `${e.serviceModel.title} ${e.serviceModel.description} ${n} ЕКЦ Service Case SLA Time to Resolution маршрутизация`,
                  }))
                : []),
              ...(e.productivityModel
                ? [
                    {
                      id: `capability-productivity-${t}`,
                      label: e.productivityModel.title,
                      context: `Рабочее место ФС · ${e.goalTitle}`,
                      section: "capabilities",
                      capabilityGoal: t,
                      targetId: `capability-productivity-${t + 1}`,
                      keywords: `${e.productivityModel.title} ${e.productivityModel.description} ${e.productivityModel.zones.map((e) => `${e.title} ${e.description}`).join(" ")} брокерский отчёт свободные средства прогноз денежного потока купоны дивиденды погашения Солид-Финанс`,
                    },
                  ]
                : []),
              ...(e.agentModel
                ? [
                    {
                      id: `capability-agent-model-${t}`,
                      label: e.agentModel.title,
                      context: `Агентский канал · ${e.goalTitle}`,
                      section: "capabilities",
                      capabilityGoal: t,
                      targetId: `capability-agent-model-${t + 1}`,
                      keywords: `${e.agentModel.title} ${e.agentModel.description} ${e.agentModel.stages.map((e) => `${e.wave} ${e.title} ${e.description}`).join(" ")} ${e.agentModel.note} агент ЛК агента Цифровые фронты портфель коммуникации`,
                    },
                  ]
                : []),
            ],
          ),
          roleSearchResults = roleBenefits.flatMap((e, t) =>
            e.roles.map((n, r) => ({
              id: `role-benefit-search-${t}-${r}`,
              label: n.title,
              context: `Практический эффект · ${e.group}`,
              section: "capabilities",
              targetId: `role-benefit-${t}-${r}`,
              roleBenefit: `role-benefit-${t}-${r}`,
              keywords: `${n.title} ${n.summary} ${n.items.join(" ")}`,
            })),
          ),
          j = y.flatMap((e, t) => [
            ...e.items.map((n, r) => ({
              id: `methodology-${t}-${r}`,
              label: n,
              context: `Методология · ${e.title}`,
              section: "methodology",
              methodologyPillar: t,
              keywords: `${e.title} ${e.description} ${n}`,
            })),
            ...(e.scenarios
              ? [...e.scenarios.sales, ...e.scenarios.service].map((n, r) => ({
                  id: `methodology-scenario-${t}-${r}`,
                  label: n.signal,
                  context: `Сигнал → действие CRM · ${e.title}`,
                  section: "methodology",
                  methodologyPillar: t,
                  keywords: `${n.signal} ${n.action} ${n.result} брокерский отчёт свободные средства купоны дивиденды погашения Цифровой фронт Service Case ЕКЦ SLA`,
                }))
              : []),
          ]),
          S = k
            ? [...ee, ...w, ...roleSearchResults, ...j]
                .filter((e) =>
                  x(`${e.label} ${e.context} ${e.keywords}`).includes(k),
                )
                .slice(0, 10)
            : [];
        return i.jsxs("div", {
          className:
            "strategy-shell min-h-screen text-slate-800 font-sans flex flex-col selection:bg-indigo-100 selection:text-indigo-900",
          children: [
            i.jsx("header", {
              className: "strategy-header",
              id: "strategy-header",
              children: i.jsxs("div", {
                className: "strategy-header__inner",
                children: [
                  i.jsxs("button", {
                    type: "button",
                    className: "strategy-brand",
                    onClick: () => b("core"),
                    "aria-label": "Перейти к началу CRM-стратегии",
                    children: [
                      i.jsx(J, { className: "strategy-brand__logo" }),
                      i.jsx("span", {
                        className: "strategy-brand__divider",
                        "aria-hidden": "true",
                      }),
                      i.jsxs("span", {
                        className: "strategy-brand__title",
                        children: [
                          i.jsx("strong", { children: "CRM-стратегия" }),
                          i.jsx("small", {
                            children: "Управление клиентскими отношениями",
                          }),
                        ],
                      }),
                    ],
                  }),
                  i.jsx("nav", {
                    className: "strategy-primary-nav",
                    "aria-label": "Навигация по разделам стратегии",
                    children: headerNav.map((e) =>
                      i.jsx(
                        "button",
                        {
                          type: "button",
                          className:
                            "strategy-primary-nav__item " +
                            (l === e.id ? "is-active" : ""),
                          onClick: () => b(e.id),
                          "aria-current": l === e.id ? "location" : void 0,
                          "data-strategy-nav": e.id,
                          children: e.label,
                        },
                        e.id,
                      ),
                    ),
                  }),
                  i.jsxs("label", {
                    className: "strategy-search",
                    htmlFor: "global-search-input",
                    children: [
                      i.jsx(U, {
                        className: "strategy-search__icon",
                        "aria-hidden": "true",
                      }),
                      i.jsx("span", {
                        className: "sr-only",
                        children: "Поиск по CRM-стратегии",
                      }),
                      i.jsx("input", {
                        type: "search",
                        placeholder: "Найти NNA, Bitrix, Outlook, SLA…",
                        value: n,
                        onChange: (e) => r(e.target.value),
                        id: "global-search-input",
                        autoComplete: "off",
                      }),
                      i.jsx("kbd", { children: "⌘ K" }),
                      n &&
                        i.jsx("button", {
                          type: "button",
                          onClick: () => r(""),
                          id: "clear-search-btn",
                          "aria-label": "Очистить поиск",
                          children: i.jsx(B, { "aria-hidden": "true" }),
                        }),
                    ],
                  }),
                ],
              }),
            }),
            i.jsxs("main", {
              className:
                "strategy-main flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8",
              id: "strategy-main",
              children: [
                n &&
                  i.jsxs("section", {
                    className: "search-results",
                    id: "search-alert-banner",
                    "aria-live": "polite",
                    "aria-label": "Результаты поиска",
                    children: [
                      i.jsxs("div", {
                        className: "search-results__summary",
                        children: [
                          i.jsx("span", {
                            children: "Поиск по всей стратегии",
                          }),
                          i.jsx("strong", {
                            children: S.length
                              ? `Найдено: ${S.length}`
                              : "Совпадений нет",
                          }),
                          i.jsxs("p", { children: ["«", n, "»"] }),
                        ],
                      }),
                      S.length > 0
                        ? i.jsx("div", {
                            className: "search-results__list",
                            children: S.map((e) =>
                              i.jsxs(
                                "button",
                                {
                                  type: "button",
                                  onClick: () =>
                                    ((e) => {
                                      (o((t) => ({ ...t, [e.section]: !0 })),
                                        e.heartTab && p(e.heartTab),
                                        m(e.reference ?? null),
                                        "capabilities" === e.section &&
                                          Number.isInteger(e.capabilityGoal) &&
                                          document
                                            .getElementById(
                                              `capability-goal-${e.capabilityGoal + 1}`,
                                            )
                                            ?.setAttribute("open", ""),
                                        e.roleBenefit &&
                                          document
                                            .getElementById(e.roleBenefit)
                                            ?.setAttribute("open", ""),
                                        "methodology" === e.section &&
                                          Number.isInteger(
                                            e.methodologyPillar,
                                          ) &&
                                          document
                                            .getElementById(
                                              `methodology-pillar-${e.methodologyPillar + 1}`,
                                            )
                                            ?.setAttribute("open", ""),
                                        e.appendix &&
                                          document
                                            .getElementById(e.appendix)
                                            ?.setAttribute("open", ""),
                                        "data" === e.section &&
                                          Number.isInteger(e.dataPrinciple) &&
                                          document
                                            .getElementById(
                                              `data-principle-${e.dataPrinciple + 1}`,
                                            )
                                            ?.setAttribute("open", ""),
                                        window.requestAnimationFrame(() => {
                                          const t = e.targetId
                                            ? document.getElementById(
                                                e.targetId,
                                              )
                                            : null;
                                          t
                                            ? (window.scrollTo({
                                                top:
                                                  t.getBoundingClientRect()
                                                    .top +
                                                  window.scrollY -
                                                  96,
                                                behavior: window.matchMedia(
                                                  "(prefers-reduced-motion: reduce)",
                                                ).matches
                                                  ? "auto"
                                                  : "smooth",
                                              }),
                                              a(e.section))
                                            : b(e.section);
                                        }),
                                        r(""));
                                    })(e),
                                  children: [
                                    i.jsx("span", { children: e.context }),
                                    i.jsx("strong", { children: e.label }),
                                    i.jsx(T, { "aria-hidden": "true" }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                          })
                        : i.jsx("p", {
                            className: "search-results__empty",
                            children:
                              "Попробуйте название раздела, метрики, системы или процесса.",
                          }),
                    ],
                  }),
                i.jsxs("div", {
                  className:
                    "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
                  children: [
                    i.jsxs("aside", {
                      className:
                        "lg:col-span-5 xl:col-span-4 lg:sticky lg:top-24 flex flex-col items-center gap-6",
                      id: "sticky-sidebar",
                      children: [
                        i.jsxs("div", {
                          className:
                            "w-full bg-white border border-slate-100 rounded-3xl p-6 shadow-premium hover:shadow-premium-lg transition-all-custom text-center",
                          children: [
                            i.jsx("span", {
                              className:
                                "text-xs font-mono font-semibold tracking-widest text-indigo-605 uppercase bg-indigo-50 px-3 py-1.5 rounded-full inline-block mb-3",
                              children: "Интерактивная карта",
                            }),
                            i.jsx("h2", {
                              className:
                                "text-lg font-bold font-brand text-slate-900 mb-1",
                              children: "Стратегический навигатор",
                            }),
                            i.jsx("p", {
                              className:
                                "text-xs text-slate-500 mb-6 max-w-xs mx-auto",
                              children:
                                "Отражает 5 внешних архитектурных пластов и центральное ядро. Кликните, чтобы перейти.",
                            }),
                            i.jsxs("div", {
                              className: "relative flex justify-center mb-6",
                              children: [
                                i.jsxs("svg", {
                                  viewBox: "0 0 360 360",
                                  className:
                                    "w-full max-w-[320px] h-auto select-none overflow-visible drop-shadow-sm font-brand",
                                  "aria-label":
                                    "Навигационное кольцо CRM-стратегии",
                                  id: "navigation-svg-wheel",
                                  children: [
                                    i.jsxs("defs", {
                                      children: [
                                        i.jsx("filter", {
                                          id: "glow",
                                          x: "-10%",
                                          y: "-10%",
                                          width: "120%",
                                          height: "120%",
                                          children: i.jsx("feDropShadow", {
                                            dx: "0",
                                            dy: "8",
                                            stdDeviation: "12",
                                            floodColor: "#4f46e5",
                                            floodOpacity: "0.15",
                                          }),
                                        }),
                                        i.jsx("filter", {
                                          id: "glow-emerald",
                                          x: "-10%",
                                          y: "-10%",
                                          width: "120%",
                                          height: "120%",
                                          children: i.jsx("feDropShadow", {
                                            dx: "0",
                                            dy: "8",
                                            stdDeviation: "12",
                                            floodColor: "#059669",
                                            floodOpacity: "0.15",
                                          }),
                                        }),
                                      ],
                                    }),
                                    [
                                      {
                                        id: "capabilities",
                                        startAngle: -133,
                                        endAngle: -47,
                                        label: "Возможности",
                                        label2: "CRM",
                                        color: "#3767d6",
                                        hoverColor: "#2b55b6",
                                        num: "01",
                                      },
                                      {
                                        id: "methodology",
                                        startAngle: -43,
                                        endAngle: 43,
                                        label: "Процессы и",
                                        label2: "методология",
                                        color: "#5478bb",
                                        hoverColor: "#3f619f",
                                        num: "02",
                                      },
                                      {
                                        id: "tech",
                                        startAngle: 47,
                                        endAngle: 133,
                                        label: "Технологии и",
                                        label2: "данные",
                                        color: "#397b80",
                                        hoverColor: "#2d656a",
                                        num: "03",
                                      },
                                      {
                                        id: "organization",
                                        startAngle: 137,
                                        endAngle: 223,
                                        label: "Оргмодель &",
                                        label2: "производство",
                                        color: "#a66b42",
                                        hoverColor: "#885536",
                                        num: "04",
                                      },
                                    ].map((e) => {
                                      var n;
                                      const r = l === e.id,
                                        a = c === e.id,
                                        s = ((e, t, n, r, l, a) => {
                                          const i = Math.PI / 180,
                                            s = e + 68 * Math.cos(l * i),
                                            o = t + 68 * Math.sin(l * i),
                                            c = e + 68 * Math.cos(a * i),
                                            u = t + 68 * Math.sin(a * i),
                                            d = e + r * Math.cos(l * i),
                                            f = t + r * Math.sin(l * i),
                                            p = e + r * Math.cos(a * i),
                                            h = t + r * Math.sin(a * i),
                                            m = Math.abs(a - l) >= 180 ? 1 : 0;
                                          return `M ${s} ${o} L ${d} ${f} A 160 160 0 ${m} 1 ${p} ${h} L ${c} ${u} A 68 68 0 ${m} 0 ${s} ${o} Z`;
                                        })(
                                          180,
                                          180,
                                          0,
                                          160,
                                          e.startAngle,
                                          e.endAngle,
                                        ),
                                        o = (e.startAngle + e.endAngle) / 2,
                                        d = Math.PI / 180,
                                        f = 180 + 114 * Math.cos(o * d),
                                        p = 180 + 114 * Math.sin(o * d);
                                      return i.jsxs(
                                        "g",
                                        {
                                          onClick: () => b(e.id),
                                          onKeyDown: (t) => {
                                            ("Enter" === t.key ||
                                              " " === t.key) &&
                                              (t.preventDefault(), b(e.id));
                                          },
                                          role: "button",
                                          tabIndex: 0,
                                          "aria-label": `Перейти: ${null == (n = t.find((t) => t.id === e.id)) ? void 0 : n.shortTitle}`,
                                          onMouseEnter: () => u(e.id),
                                          onMouseLeave: () => u(null),
                                          className: "cursor-pointer group",
                                          id: `wheel-wedge-${e.id}`,
                                          children: [
                                            r &&
                                              i.jsx("path", {
                                                d: s,
                                                fill: e.color,
                                                opacity: "0.25",
                                                className: "animate-pulse",
                                                style: {
                                                  transformOrigin:
                                                    "180px 180px",
                                                  transform: "scale(1.035)",
                                                },
                                              }),
                                            i.jsx("path", {
                                              d: s,
                                              fill: r
                                                ? e.color
                                                : a
                                                  ? `${e.color}15`
                                                  : "white",
                                              stroke: r
                                                ? "transparent"
                                                : "rgba(226, 232, 240, 0.95)",
                                              strokeWidth: r ? 0 : 1,
                                              className:
                                                "transition-all duration-300",
                                              style: {
                                                transformOrigin: "180px 180px",
                                                transform:
                                                  r || a
                                                    ? "scale(1.025)"
                                                    : "scale(1)",
                                              },
                                            }),
                                            i.jsx("text", {
                                              x: f,
                                              y: p - 5,
                                              fill: r
                                                ? "white"
                                                : "rgba(15, 23, 42, 0.9)",
                                              fontSize:
                                                "organization" === e.id
                                                  ? "9"
                                                  : "10",
                                              fontWeight: "700",
                                              textAnchor: "middle",
                                              dominantBaseline: "middle",
                                              className:
                                                "pointer-events-none font-sans",
                                              children: e.label,
                                            }),
                                            e.label2 &&
                                              i.jsx("text", {
                                                x: f,
                                                y: p + 7,
                                                fill: r
                                                  ? "rgba(255, 255, 255, 0.9)"
                                                  : "rgba(71, 85, 105, 0.8)",
                                                fontSize:
                                                  "organization" === e.id
                                                    ? "9"
                                                    : "10",
                                                fontWeight: "500",
                                                textAnchor: "middle",
                                                dominantBaseline: "middle",
                                                className:
                                                  "pointer-events-none font-sans",
                                              }),
                                            i.jsx("text", {
                                              x: f,
                                              y: p + 7,
                                              fill: r
                                                ? "white"
                                                : "rgba(71, 85, 105, 0.9)",
                                              fontSize:
                                                "organization" === e.id
                                                  ? "9"
                                                  : "10",
                                              fontWeight: "600",
                                              textAnchor: "middle",
                                              dominantBaseline: "middle",
                                              className:
                                                "pointer-events-none font-sans text-xs",
                                              children: e.label2,
                                            }),
                                          ],
                                        },
                                        e.id,
                                      );
                                    }),
                                    i.jsxs("g", {
                                      onClick: () => b("core"),
                                      onKeyDown: (e) => {
                                        ("Enter" === e.key || " " === e.key) &&
                                          (e.preventDefault(), b("core"));
                                      },
                                      role: "button",
                                      tabIndex: 0,
                                      "aria-label":
                                        "Перейти: Сердце CRM-стратегии",
                                      onMouseEnter: () => u("core"),
                                      onMouseLeave: () => u(null),
                                      className: "cursor-pointer",
                                      id: "wheel-core",
                                      children: [
                                        i.jsx("circle", {
                                          cx: "180",
                                          cy: "180",
                                          r: "60",
                                          fill:
                                            "core" === l
                                              ? "#251618"
                                              : "core" === c
                                                ? "#1e293b"
                                                : "#ffffff",
                                          stroke:
                                            "core" === l
                                              ? "#3767d6"
                                              : "#cbd5e1",
                                          strokeWidth:
                                            "core" === l ? "3" : "1.5",
                                          className:
                                            "transition-all duration-300",
                                          style: {
                                            transformOrigin: "180px 180px",
                                            transform:
                                              "core" === l || "core" === c
                                                ? "scale(1.05)"
                                                : "scale(1)",
                                          },
                                        }),
                                        "core" === l &&
                                          i.jsx("circle", {
                                            cx: "180",
                                            cy: "180",
                                            r: "63",
                                            fill: "none",
                                            stroke: "#818cf8",
                                            strokeWidth: "1.5",
                                            opacity: "0.4",
                                            className: "animate-ping",
                                          }),
                                        i.jsx("text", {
                                          x: "180",
                                          y: "165",
                                          fill:
                                            "core" === l
                                              ? "#cbd5e1"
                                              : "#64748b",
                                          fontSize: "9",
                                          fontWeight: "700",
                                          textAnchor: "middle",
                                          className:
                                            "font-mono tracking-widest pointer-events-none uppercase",
                                          children: "ЭВОЛЮЦИЯ",
                                        }),
                                        i.jsx("text", {
                                          x: "180",
                                          y: "183",
                                          fill:
                                            "core" === l
                                              ? "#ffffff"
                                              : "#251618",
                                          fontSize: "14",
                                          fontWeight: "800",
                                          textAnchor: "middle",
                                          className:
                                            "font-brand pointer-events-none tracking-tight",
                                          children: "CRM",
                                        }),
                                        i.jsx("text", {
                                          x: "180",
                                          y: "200",
                                          fill:
                                            "core" === l
                                              ? "#8fb6ff"
                                              : "#3767d6",
                                          fontSize: "9",
                                          fontWeight: "700",
                                          textAnchor: "middle",
                                          className:
                                            "font-mono tracking-tight pointer-events-none",
                                          children: "СЕРДЦЕ СТРАТЕГИИ",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                c &&
                                  i.jsxs("div", {
                                    className:
                                      "absolute bottom-2 bg-slate-800 text-white text-[11px] px-3 py-1 rounded-full shadow-lg font-medium animate-fade-in pointer-events-none",
                                    children: [
                                      "Переход: ",
                                      (null == (e = t.find((e) => e.id === c))
                                        ? void 0
                                        : e.shortTitle) || "Сердце стратегии",
                                    ],
                                  }),
                              ],
                            }),
                            i.jsxs("div", {
                              className:
                                "space-y-2 text-left text-xs border-t border-slate-100 pt-4",
                              id: "navigation-legend-list",
                              children: [
                                i.jsx("span", {
                                  className:
                                    "font-semibold text-slate-400 block mb-2 uppercase font-mono tracking-wider",
                                  children: "СОДЕРЖАНИЕ СЕГМЕНТОВ",
                                }),
                                t.map((e) => {
                                  const t = e.icon,
                                    n = l === e.id;
                                  return i.jsxs(
                                    "button",
                                    {
                                      onClick: () => b(e.id),
                                      className:
                                        "w-full flex items-center justify-between p-2 rounded-xl transition-all-custom " +
                                        (n
                                          ? "bg-slate-900 text-white font-medium shadow-sm"
                                          : "hover:bg-slate-50 text-slate-700"),
                                      id: `legend-btn-${e.id}`,
                                      children: [
                                        i.jsxs("div", {
                                          className:
                                            "flex items-center gap-2.5 truncate",
                                          children: [
                                            i.jsx("span", {
                                              className:
                                                "w-2 h-2 rounded-full " +
                                                ("core" === e.id
                                                  ? "bg-slate-900"
                                                  : "capabilities" === e.id
                                                    ? "bg-indigo-500"
                                                    : "methodology" === e.id
                                                      ? "bg-blue-500"
                                                      : "tech" === e.id
                                                        ? "bg-emerald-500"
                                                        : "organization" ===
                                                            e.id
                                                          ? "bg-amber-500"
                                                          : "bg-teal-500"),
                                            }),
                                            i.jsx(t, {
                                              className:
                                                "w-4 h-4 shrink-0 opacity-75",
                                            }),
                                            i.jsx("span", {
                                              className: "truncate",
                                              children: e.shortTitle,
                                            }),
                                          ],
                                        }),
                                        i.jsx(T, {
                                          className:
                                            "w-3 h-3 transition-transform " +
                                            (n
                                              ? "translate-x-0.5 opacity-100"
                                              : "opacity-0"),
                                        }),
                                      ],
                                    },
                                    e.id,
                                  );
                                }),
                              ],
                            }),
                          ],
                        }),
                        i.jsxs("div", {
                          className: "quick-metrics",
                          id: "quick-metrics-block",
                          children: [
                            i.jsxs("div", {
                              className: "quick-metrics__signal",
                              "aria-hidden": "true",
                              children: [
                                i.jsx("span", {}),
                                i.jsx("span", {}),
                                i.jsx("span", {}),
                              ],
                            }),
                            i.jsx("span", {
                              className: "quick-metrics__eyebrow",
                              children: "Ключевые бизнес-результаты",
                            }),
                            i.jsxs("h3", {
                              children: [
                                "Net New Assets ",
                                i.jsx("small", { children: "(NNA)" }),
                                i.jsx("i", { children: "+" }),
                                i.jsx("br", {}),
                                "маржинальная доходность AUM",
                              ],
                            }),
                            i.jsx("p", {
                              children:
                                "Рост внешнего притока и эффективность использования уже привлечённых активов.",
                            }),
                          ],
                        }),
                      ],
                    }),
                    i.jsxs("div", {
                      className: "lg:col-span-7 xl:col-span-8 space-y-8",
                      id: "strategy-content-viewport",
                      children: [
                        i.jsx(X, {
                          active: "core" === l,
                          sectionRef: g.core,
                          activeTab: d,
                          setActiveTab: p,
                          referencePanel: h,
                          setReferencePanel: m,
                        }),
                        i.jsx("section", {
                          id: "capabilities",
                          ref: g.capabilities,
                          className:
                            "capabilities-section scroll-mt-24 " +
                            ("capabilities" === l ? "is-active-section" : ""),
                          "aria-labelledby": "capabilities-title",
                          children: i.jsxs("div", {
                            className: "capabilities-ledger",
                            children: [
                              i.jsxs("header", {
                                className: "capabilities-ledger__header",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", {
                                        className:
                                          "capabilities-ledger__eyebrow",
                                        children: "Уровень 02",
                                      }),
                                      i.jsx("h3", {
                                        id: "capabilities-title",
                                        children:
                                          "Как CRM помогает достичь бизнес-целей",
                                      }),
                                    ],
                                  }),
                                  i.jsx("p", {
                                    className:
                                      "capabilities-ledger__instruction",
                                    children:
                                      "Раскройте цель, чтобы увидеть функциональный контур",
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "capabilities-ledger__intro",
                                children: [
                                  i.jsx("span", { children: "Принцип" }),
                                  i.jsx("p", {
                                    children:
                                      "Функционал CRM не создаёт эффект сам по себе. Большинство способностей решения должны сопровождаться изменением процесса, ролей, правил работы, данных и модели ответственности.",
                                  }),
                                ],
                              }),
                              i.jsx("div", {
                                className: "capabilities-ledger__list",
                                children: v.map((e, t) =>
                                  i.jsxs(
                                    "details",
                                    {
                                      className: "capability-goal",
                                      id: `capability-goal-${t + 1}`,
                                      children: [
                                        i.jsxs("summary", {
                                          children: [
                                            i.jsx("span", {
                                              className:
                                                "capability-goal__number",
                                              children: String(t + 1).padStart(
                                                2,
                                                "0",
                                              ),
                                            }),
                                            i.jsxs("div", {
                                              className:
                                                "capability-goal__overview",
                                              children: [
                                                i.jsx("span", {
                                                  children: `Цель ${String(t + 1).padStart(2, "0")}`,
                                                }),
                                                i.jsx("h4", {
                                                  children: e.goalTitle,
                                                }),
                                                i.jsx("p", {
                                                  children: e.description,
                                                }),
                                              ],
                                            }),
                                            i.jsxs("span", {
                                              className:
                                                "capability-goal__control",
                                              "aria-hidden": "true",
                                              children: [
                                                "Функционал",
                                                i.jsx("i", { children: "+" }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        i.jsx("div", {
                                          className:
                                            "capability-goal__disclosure",
                                          children: i.jsxs("div", {
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "capability-goal__disclosure-head",
                                                children: [
                                                  i.jsx("span", {
                                                    children:
                                                      "Функциональный контур",
                                                  }),
                                                  i.jsx("strong", {
                                                    children: `${e.items.length} возможностей`,
                                                  }),
                                                ],
                                              }),
                                               i.jsx("ul", {
                                                 children: e.items.map((e, t) =>
                                                  i.jsxs(
                                                    "li",
                                                    {
                                                      children: [
                                                        i.jsx("span", {
                                                          children: String(
                                                            t + 1,
                                                          ).padStart(2, "0"),
                                                        }),
                                                        i.jsx("p", {
                                                          children: e,
                                                        }),
                                                      ],
                                                    },
                                                    e,
                                                  ),
                                                 ),
                                               }),
                                               e.productivityModel &&
                                                 i.jsxs("section", {
                                                   className:
                                                     "capability-productivity",
                                                   id: `capability-productivity-${t + 1}`,
                                                   children: [
                                                     i.jsxs("header", {
                                                       children: [
                                                         i.jsx("span", {
                                                           children:
                                                             "РАБОЧЕЕ МЕСТО ФС",
                                                         }),
                                                         i.jsx("h5", {
                                                           children:
                                                             e.productivityModel
                                                               .title,
                                                         }),
                                                         i.jsx("p", {
                                                           children:
                                                             e.productivityModel
                                                               .description,
                                                         }),
                                                       ],
                                                     }),
                                                     i.jsx("div", {
                                                       className:
                                                         "capability-productivity__zones",
                                                       children:
                                                         e.productivityModel.zones.map(
                                                           (n, r) =>
                                                             i.jsxs(
                                                               "article",
                                                               {
                                                                 children: [
                                                                   i.jsx(
                                                                     "span",
                                                                     {
                                                                       children:
                                                                         String(
                                                                           r + 1,
                                                                         ).padStart(
                                                                           2,
                                                                           "0",
                                                                         ),
                                                                     },
                                                                   ),
                                                                   i.jsx(
                                                                     "strong",
                                                                     {
                                                                       children:
                                                                         n.title,
                                                                     },
                                                                   ),
                                                                   i.jsx("p", {
                                                                     children:
                                                                       n.description,
                                                                   }),
                                                                 ],
                                                               },
                                                               n.title,
                                                             ),
                                                         ),
                                                     }),
                                                   ],
                                                 }),
                                               e.serviceModel &&
                                                i.jsxs("section", {
                                                  className:
                                                    "capability-service-model",
                                                  children: [
                                                    i.jsxs("header", {
                                                      children: [
                                                        i.jsx("span", {
                                                          children:
                                                            "СЕРВИСНЫЙ КОНТУР",
                                                        }),
                                                        i.jsx("h5", {
                                                          children:
                                                            e.serviceModel
                                                              .title,
                                                        }),
                                                        i.jsx("p", {
                                                          children:
                                                            e.serviceModel
                                                              .description,
                                                        }),
                                                      ],
                                                    }),
                                                    i.jsx("ul", {
                                                      children:
                                                        e.serviceModel.items.map(
                                                          (e, t) =>
                                                            i.jsxs(
                                                              "li",
                                                              {
                                                                children: [
                                                                  i.jsx(
                                                                    "span",
                                                                    {
                                                                      children:
                                                                        String(
                                                                          t +
                                                                            1,
                                                                        ).padStart(
                                                                          2,
                                                                          "0",
                                                                        ),
                                                                    },
                                                                  ),
                                                                  i.jsx("p", {
                                                                    children: e,
                                                                  }),
                                                                ],
                                                              },
                                                              e,
                                                            ),
                                                        ),
                                                    }),
                                                  ],
                                                }),
                                              e.agentModel &&
                                                i.jsxs("section", {
                                                  className:
                                                    "capability-agent-model",
                                                  id: `capability-agent-model-${t + 1}`,
                                                  children: [
                                                    i.jsxs("header", {
                                                      children: [
                                                        i.jsx("span", {
                                                          children:
                                                            "АГЕНТСКИЙ КАНАЛ",
                                                        }),
                                                        i.jsx("h5", {
                                                          children:
                                                            e.agentModel.title,
                                                        }),
                                                        i.jsx("p", {
                                                          children:
                                                            e.agentModel
                                                              .description,
                                                        }),
                                                      ],
                                                    }),
                                                    i.jsx("ol", {
                                                      className:
                                                        "capability-agent-model__flow",
                                                      children:
                                                        e.agentModel.stages.map(
                                                          (n) =>
                                                            i.jsxs(
                                                              "li",
                                                              {
                                                                children: [
                                                                  i.jsx(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        "capability-agent-model__wave",
                                                                      children:
                                                                        n.wave,
                                                                    },
                                                                  ),
                                                                  i.jsx(
                                                                    "strong",
                                                                    {
                                                                      children:
                                                                        n.title,
                                                                    },
                                                                  ),
                                                                  i.jsx("p", {
                                                                    children:
                                                                      n.description,
                                                                  }),
                                                                ],
                                                              },
                                                              n.wave,
                                                            ),
                                                        ),
                                                    }),
                                                    i.jsxs("p", {
                                                      className:
                                                        "capability-agent-model__note",
                                                      children: [
                                                        i.jsx("strong", {
                                                          children:
                                                            "Зависимость",
                                                        }),
                                                        e.agentModel.note,
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    e.goalTitle,
                                  ),
                                ),
                              }),
                              i.jsxs("section", {
                                id: "role-benefits",
                                className: "role-benefits",
                                "aria-labelledby": "role-benefits-title",
                                children: [
                                  i.jsxs("header", {
                                    className: "role-benefits__header",
                                    children: [
                                      i.jsxs("div", {
                                        children: [
                                          i.jsx("span", {
                                            children: "Практический эффект",
                                          }),
                                          i.jsx("h4", {
                                            id: "role-benefits-title",
                                            children:
                                              "Кому и что даст CRM-стратегия",
                                          }),
                                        ],
                                      }),
                                      i.jsx("p", {
                                        children:
                                          "Результат создаёт не только настройка Bitrix, но и новые процессы, правила работы и качественные данные.",
                                      }),
                                    ],
                                  }),
                                  i.jsx("div", {
                                    className: "role-benefits__groups",
                                    children: roleBenefits.map((e, t) =>
                                      i.jsxs(
                                        "section",
                                        {
                                          className: "role-benefits__group",
                                          children: [
                                            i.jsx("h5", {
                                              children: e.group,
                                            }),
                                            i.jsx("div", {
                                              className:
                                                "role-benefits__list",
                                              children: e.roles.map((e, n) =>
                                                i.jsxs(
                                                  "details",
                                                  {
                                                    className: "role-benefit",
                                                    id: `role-benefit-${t}-${n}`,
                                                    children: [
                                                      i.jsxs("summary", {
                                                        children: [
                                                          i.jsxs("div", {
                                                            className:
                                                              "role-benefit__overview",
                                                            children: [
                                                              i.jsx("span", {
                                                                children:
                                                                  "Роль",
                                                              }),
                                                              i.jsx("h6", {
                                                                children:
                                                                  e.title,
                                                              }),
                                                              i.jsx("p", {
                                                                children:
                                                                  e.summary,
                                                              }),
                                                            ],
                                                          }),
                                                          i.jsxs("span", {
                                                            className:
                                                              "role-benefit__control",
                                                            "aria-hidden":
                                                              "true",
                                                            children: [
                                                              "Подробнее",
                                                              i.jsx("i", {
                                                                children: "+",
                                                              }),
                                                            ],
                                                          }),
                                                        ],
                                                      }),
                                                      i.jsx("div", {
                                                        className:
                                                          "role-benefit__disclosure",
                                                        children: i.jsx(
                                                          "div",
                                                          {
                                                            children: i.jsx(
                                                              "ul",
                                                              {
                                                                children:
                                                                  e.items.map(
                                                                    (e) =>
                                                                      i.jsx(
                                                                        "li",
                                                                        {
                                                                          children:
                                                                            e,
                                                                        },
                                                                        e,
                                                                      ),
                                                                  ),
                                                              },
                                                            ),
                                                          },
                                                        ),
                                                      }),
                                                    ],
                                                  },
                                                  e.title,
                                                ),
                                              ),
                                            }),
                                          ],
                                        },
                                        e.group,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        i.jsx("section", {
                          id: "methodology",
                          ref: g.methodology,
                          className:
                            "methodology-section scroll-mt-24 " +
                            ("methodology" === l ? "is-active-section" : ""),
                          "aria-labelledby": "methodology-title",
                          children: i.jsxs("div", {
                            className: "methodology-atlas",
                            children: [
                              i.jsxs("header", {
                                className: "methodology-atlas__header",
                                children: [
                                  i.jsxs("div", {
                                    children: [
                                      i.jsx("span", {
                                        className: "methodology-atlas__eyebrow",
                                        children: "Уровень 03",
                                      }),
                                      i.jsx("h3", {
                                        id: "methodology-title",
                                        children:
                                          "Методология и бизнес-процессы",
                                      }),
                                    ],
                                  }),
                                  i.jsx("p", {
                                    children:
                                      "Семь опор, которые превращают возможности CRM в воспроизводимый способ работы.",
                                  }),
                                ],
                              }),
                              i.jsxs("div", {
                                className: "methodology-atlas__principle",
                                children: [
                                  i.jsx("span", {
                                    children: "Принцип исполнения",
                                  }),
                                  i.jsx("p", {
                                    children:
                                      "Целевая модель CRM строится на взаимосвязи функциональных возможностей системы, бизнес-процессов и методологии работы: функционал поддерживает процессы, а процессы и методология определяют роли, правила и метрики его применения.",
                                  }),
                                ],
                              }),
                              i.jsx("div", {
                                className: "methodology-atlas__rail",
                                children: y.map((e, t) =>
                                  i.jsxs(
                                    i.Fragment,
                                    {
                                      children: [
                                        i.jsxs(
                                          "details",
                                          {
                                            className: "methodology-pillar",
                                            id: `methodology-pillar-${t + 1}`,
                                            children: [
                                              i.jsxs("summary", {
                                                children: [
                                                  i.jsx("span", {
                                                    className:
                                                      "methodology-pillar__number",
                                                    children: String(
                                                      t + 1,
                                                    ).padStart(2, "0"),
                                                  }),
                                                  i.jsxs("div", {
                                                    className:
                                                      "methodology-pillar__overview",
                                                    children: [
                                                      i.jsx("span", {
                                                        children: `Опора ${String(t + 1).padStart(2, "0")}`,
                                                      }),
                                                      i.jsx("h4", {
                                                        children: e.title,
                                                      }),
                                                      i.jsx("p", {
                                                        children: e.description,
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("span", {
                                                    className:
                                                      "methodology-pillar__control",
                                                    "aria-hidden": "true",
                                                    children: [
                                                      "Правила и практики",
                                                      i.jsx("i", {
                                                        children: "+",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              i.jsx("div", {
                                                className:
                                                  "methodology-pillar__disclosure",
                                                children: i.jsxs("div", {
                                                  children: [
                                                    i.jsxs("div", {
                                                      className:
                                                        "methodology-pillar__disclosure-head",
                                                      children: [
                                                        i.jsx("span", {
                                                          children:
                                                            "Что закрепляем в работе",
                                                        }),
                                                        i.jsx("strong", {
                                                          children: `${e.items.length} правил`,
                                                        }),
                                                      ],
                                                    }),
                                                     i.jsx("ul", {
                                                       children: e.items.map(
                                                        (e, t) =>
                                                          i.jsxs(
                                                            "li",
                                                            {
                                                              children: [
                                                                i.jsx("span", {
                                                                  children:
                                                                    String(
                                                                      t + 1,
                                                                    ).padStart(
                                                                      2,
                                                                      "0",
                                                                    ),
                                                                }),
                                                                i.jsx("p", {
                                                                  children: e,
                                                                }),
                                                              ],
                                                            },
                                                            e,
                                                          ),
                                                         ),
                                                     }),
                                                     e.scenarios &&
                                                       i.jsxs("section", {
                                                         className:
                                                           "methodology-scenarios",
                                                         children: [
                                                           i.jsxs("header", {
                                                             children: [
                                                               i.jsx("span", {
                                                                 children:
                                                                   "ПРИМЕРЫ В CRM",
                                                               }),
                                                               i.jsx("h5", {
                                                                 children:
                                                                   "Сигнал → действие → канал / результат",
                                                               }),
                                                               i.jsx("p", {
                                                                 children:
                                                                   "Две линии показывают, как данные превращаются в конкретный продажный или сервисный сценарий.",
                                                               }),
                                                             ],
                                                           }),
                                                           i.jsx("div", {
                                                             className:
                                                               "methodology-scenarios__grid",
                                                             children: [
                                                               [
                                                                 "Продажные сценарии",
                                                                 e.scenarios
                                                                   .sales,
                                                                 "sales",
                                                               ],
                                                               [
                                                                 "Сервисные сценарии",
                                                                 e.scenarios
                                                                   .service,
                                                                 "service",
                                                               ],
                                                             ].map(
                                                               ([n, r, l]) =>
                                                                 i.jsxs(
                                                                   "article",
                                                                   {
                                                                     className: `methodology-scenarios__lane methodology-scenarios__lane--${l}`,
                                                                     children: [
                                                                       i.jsx(
                                                                         "h6",
                                                                         {
                                                                           children:
                                                                             n,
                                                                         },
                                                                       ),
                                                                       i.jsx(
                                                                         "ol",
                                                                         {
                                                                           children:
                                                                             r.map(
                                                                               (
                                                                                 e,
                                                                                 t,
                                                                               ) =>
                                                                                 i.jsxs(
                                                                                   "li",
                                                                                   {
                                                                                     children:
                                                                                       [
                                                                                         i.jsx(
                                                                                           "span",
                                                                                           {
                                                                                             children:
                                                                                               String(
                                                                                                 t +
                                                                                                   1,
                                                                                               ).padStart(
                                                                                                 2,
                                                                                                 "0",
                                                                                               ),
                                                                                           },
                                                                                         ),
                                                                                         i.jsxs(
                                                                                           "div",
                                                                                           {
                                                                                             children:
                                                                                               [
                                                                                                 i.jsx(
                                                                                                   "strong",
                                                                                                   {
                                                                                                     children:
                                                                                                       e.signal,
                                                                                                   },
                                                                                                 ),
                                                                                                 i.jsx(
                                                                                                   "i",
                                                                                                   {
                                                                                                     "aria-hidden":
                                                                                                       "true",
                                                                                                     children:
                                                                                                       "→",
                                                                                                   },
                                                                                                 ),
                                                                                                 i.jsx(
                                                                                                   "b",
                                                                                                   {
                                                                                                     children:
                                                                                                       e.action,
                                                                                                   },
                                                                                                 ),
                                                                                                 i.jsx(
                                                                                                   "i",
                                                                                                   {
                                                                                                     "aria-hidden":
                                                                                                       "true",
                                                                                                     children:
                                                                                                       "→",
                                                                                                   },
                                                                                                 ),
                                                                                                 i.jsx(
                                                                                                   "em",
                                                                                                   {
                                                                                                     children:
                                                                                                       e.result,
                                                                                                   },
                                                                                                 ),
                                                                                               ],
                                                                                           },
                                                                                         ),
                                                                                       ],
                                                                                   },
                                                                                   e.signal,
                                                                                 ),
                                                                             ),
                                                                         },
                                                                       ),
                                                                     ],
                                                                   },
                                                                   l,
                                                                 ),
                                                             ),
                                                           }),
                                                         ],
                                                       }),
                                                   ],
                                                }),
                                              }),
                                            ],
                                          },
                                          e.title,
                                        ),
                                        1 === t && i.jsx(Z, {}),
                                      ],
                                    },
                                    e.title,
                                  ),
                                ),
                              }),
                            ],
                          }),
                        }),
                        i.jsxs("section", {
                          id: "tech",
                          ref: g.tech,
                          className:
                            "scroll-mt-24 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium transition-all duration-300 " +
                            ("tech" === l
                              ? "ring-2 ring-emerald-600 border-transparent"
                              : ""),
                          children: [
                            i.jsxs("div", {
                              onClick: () =>
                                ((e) => {
                                  o((t) => ({ ...t, [e]: !t[e] }));
                                })("tech"),
                              className:
                                "p-6 sm:p-8 flex items-center justify-between cursor-pointer hover:bg-slate-50/50 transition-all duration-300 border-b border-slate-50",
                              id: "toggle-header-tech",
                              children: [
                                i.jsxs("div", {
                                  className: "flex items-center gap-2.5",
                                  children: [
                                    i.jsx("span", {
                                      className:
                                        "p-1.5 bg-emerald-50 text-emerald-600 rounded-lg",
                                      children: i.jsx(I, {
                                        className: "w-5 h-5",
                                      }),
                                    }),
                                    i.jsxs("div", {
                                      children: [
                                        i.jsx("h3", {
                                          className:
                                            "text-xl font-bold font-brand text-slate-900 tracking-tight",
                                          children: "Технологии и данные",
                                        }),
                                        i.jsx("p", {
                                          className: "text-xs text-slate-500",
                                          children:
                                            "Развиваем платформу, закрепляем мастер-данные CRM, разделяем роли систем и подключаем ИИ",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                s.tech
                                  ? i.jsx(D, {
                                      className: "w-5 h-5 text-slate-400",
                                    })
                                  : i.jsx(O, {
                                      className: "w-5 h-5 text-slate-400",
                                    }),
                              ],
                            }),
                            s.tech &&
                              i.jsxs("div", {
                                className: "tech-strategy animate-slide-in",
                                id: "panel-tech",
                                children: [
                                  i.jsxs("div", {
                                    className: "tech-strategy__hero",
                                    children: [
                                      i.jsxs("div", {
                                        children: [
                                          i.jsx("span", {
                                            className: "tech-strategy__kicker",
                                            children:
                                              "КЛЮЧЕВОЕ ТЕХНОЛОГИЧЕСКОЕ РЕШЕНИЕ",
                                          }),
                                          i.jsx("h4", {
                                            children:
                                              "Развиваем Bitrix — платформу на текущем горизонте не меняем",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "GAP-анализ подтвердил: ключевые потребности стратегии можно закрыть развитием текущего решения. Используем уже созданный интеграционный и CRM-фундамент, избегая замены платформы ради самой замены.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsxs("div", {
                                    className: "tech-principles",
                                    children: [
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--platform",
                                        children: [
                                          i.jsx("span", { children: "01" }),
                                          i.jsx("h5", {
                                            children:
                                              "Текущая платформа достаточна",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "Bitrix имеет ограничения, но GAP-анализ подтверждает возможность закрыть ключевые потребности без замены платформы.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--build",
                                        children: [
                                          i.jsx("span", { children: "02" }),
                                          i.jsx("h5", {
                                            children:
                                              "Развиваем существующий фундамент",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "Используем уже созданные интеграции и базовую CRM-логику, усиливая их под целевые процессы и подтверждённые потребности.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--ai",
                                        children: [
                                          i.jsx("span", { children: "03" }),
                                          i.jsx("h5", {
                                            children:
                                              "Сначала фундамент, затем ИИ",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "Приоритет — устойчивые процессы, единый ID, качество данных, интеграции и безопасность. ИИ адаптируем только поверх стабильной основы.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--connected",
                                        children: [
                                          i.jsx("span", { children: "04" }),
                                          i.jsx("h5", {
                                            children: "Связанная платформа",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "CRM обменивается данными с бэк-офисом, КХД, почтой, календарём и каналами коммуникаций, сохраняя единый клиентский контекст.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--roles",
                                        children: [
                                          i.jsx("span", { children: "05" }),
                                          i.jsx("h5", {
                                            children: "Разделяем роли систем",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "CRM — клиентский процесс и оперативный контекст; бэк-офис — операции и счета; КХД — аналитическая и финансовая отчётность.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("article", {
                                        className:
                                          "tech-principle tech-principle--custom",
                                        children: [
                                          i.jsx("span", { children: "06" }),
                                          i.jsx("h5", {
                                            children:
                                              "Ограничиваем кастомизацию",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "Сначала стандартные возможности Bitrix и настройки. Собственная разработка — только для подтверждённых GAP, которые нельзя закрыть иначе.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  i.jsxs("section", {
                                    className: "tech-test-contour",
                                    "aria-labelledby":
                                      "tech-test-contour-title",
                                    children: [
                                      i.jsxs("header", {
                                        children: [
                                          i.jsxs("div", {
                                            children: [
                                              i.jsx("span", {
                                                children:
                                                  "НАДЁЖНОСТЬ ПОСТАВКИ",
                                              }),
                                              i.jsx("h4", {
                                                id: "tech-test-contour-title",
                                                children:
                                                  "Развитие тестового контура",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Технологическая зависимость всех волн: изменения проходят отдельный TEST-контур и формальное решение о выпуске в production.",
                                              }),
                                            ],
                                          }),
                                          i.jsx("b", {
                                            children: "ПРИОРИТЕТ ВОЛНЫ 1",
                                          }),
                                        ],
                                      }),
                                      i.jsx("ol", {
                                        className: "tech-test-contour__flow",
                                        children: [
                                          ["DEV", "Разработка"],
                                          [
                                            "TEST",
                                            "Проверка контура и сценариев",
                                          ],
                                          ["PROD", "Контролируемый выпуск"],
                                        ].map((e, t) =>
                                          i.jsxs(
                                            "li",
                                            {
                                              children: [
                                                i.jsx("span", {
                                                  children: String(
                                                    t + 1,
                                                  ).padStart(2, "0"),
                                                }),
                                                i.jsx("strong", {
                                                  children: e[0],
                                                }),
                                                i.jsx("p", {
                                                  children: e[1],
                                                }),
                                              ],
                                            },
                                            e[0],
                                          ),
                                        ),
                                      }),
                                      i.jsx("div", {
                                        className:
                                          "tech-test-contour__requirements",
                                        children: [
                                          [
                                            "Production-like",
                                            "Близкие настройки, роли и маршруты",
                                          ],
                                          [
                                            "Безопасные данные",
                                            "Обезличенные или синтетические наборы",
                                          ],
                                          [
                                            "Тестовые интеграции",
                                            "Core, КХД и Цифровой фронт",
                                          ],
                                          [
                                            "Контроль выпуска",
                                            "Регресс критичных сценариев и go / no-go",
                                          ],
                                        ].map((e) =>
                                          i.jsxs(
                                            "article",
                                            {
                                              children: [
                                                i.jsx("strong", {
                                                  children: e[0],
                                                }),
                                                i.jsx("p", {
                                                  children: e[1],
                                                }),
                                              ],
                                            },
                                            e[0],
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("section", {
                                    className: "tech-workplace-map",
                                    "aria-labelledby":
                                      "tech-workplace-map-title",
                                    children: [
                                      i.jsxs("header", {
                                        className: "tech-workplace-map__header",
                                        children: [
                                          i.jsx("span", {
                                            children:
                                              "ЦЕЛЕВАЯ РОЛЬ CRM В ЛАНДШАФТЕ",
                                          }),
                                          i.jsx("h4", {
                                            id: "tech-workplace-map-title",
                                            children:
                                              "CRM — основное рабочее пространство ФС",
                                          }),
                                          i.jsx("p", {
                                            children:
                                              "В офисе и в полях ФС работает в CRM. Core-системы сохраняют финансовую истину, внешние источники обогащают клиентский контекст, КХД формирует и возвращает аналитику, а Цифровой фронт связывает CRM с клиентом и ЕКЦ.",
                                          }),
                                        ],
                                      }),
                                      i.jsxs("div", {
                                        className: "tech-workplace-map__canvas",
                                        children: [
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__advisor",
                                            children: [
                                              i.jsx("span", {
                                                children: "ФИНАНСОВЫЙ СОВЕТНИК",
                                              }),
                                              i.jsx("strong", {
                                                children: "В офисе и в полях",
                                              }),
                                              i.jsxs("div", {
                                                children: [
                                                  i.jsx("b", {
                                                    children: "Офис",
                                                  }),
                                                  i.jsx("b", {
                                                    children:
                                                      "Мобильный доступ",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__crm",
                                            children: [
                                              i.jsx("span", {
                                                children: "ОСНОВНОЙ ИНТЕРФЕЙС",
                                              }),
                                              i.jsx("strong", {
                                                children: "CRM / Bitrix",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Единое пространство ежедневной работы с клиентом.",
                                              }),
                                              i.jsxs("ul", {
                                                children: [
                                                  i.jsx("li", {
                                                    children:
                                                      "Клиент 360 и Портфель 360",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Воронки и следующий шаг",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Коммуникации и сервис",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Запрос брокерских отчётов и операционных документов",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Реактивные и проактивные событийные триггеры",
                                                  }),
                                                  i.jsxs("li", {
                                                    className:
                                                      "tech-workplace-map__external-context",
                                                    children: [
                                                      i.jsx("strong", {
                                                        children:
                                                          "Внешние данные о клиенте",
                                                      }),
                                                      i.jsx("span", {
                                                        children:
                                                          "Официальные сведения, деловые связи, публичные и рыночные события",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "tech-workplace-map__ai",
                                                children: [
                                                  i.jsx("span", {
                                                    children:
                                                      "AI-СЛОЙ В BITRIX",
                                                  }),
                                                  i.jsxs("div", {
                                                    className:
                                                      "tech-workplace-map__ai-row tech-workplace-map__ai-row--active",
                                                    children: [
                                                      i.jsxs("div", {
                                                        children: [
                                                          i.jsx("strong", {
                                                            children:
                                                              "Речевая аналитика",
                                                          }),
                                                          i.jsx("em", {
                                                            children:
                                                              "УЖЕ ИСПОЛЬЗУЕТСЯ",
                                                          }),
                                                        ],
                                                      }),
                                                      i.jsx("p", {
                                                        children:
                                                          "Развиваем адаптацию сценариев к процессам продаж и сервиса.",
                                                      }),
                                                    ],
                                                  }),
                                                  i.jsxs("div", {
                                                    className:
                                                      "tech-workplace-map__ai-row tech-workplace-map__ai-row--planned",
                                                    children: [
                                                      i.jsxs("div", {
                                                        children: [
                                                          i.jsx("strong", {
                                                            children:
                                                              "Другие AI-инструменты",
                                                          }),
                                                          i.jsx("em", {
                                                            children:
                                                              "ПОЭТАПНО",
                                                          }),
                                                        ],
                                                      }),
                                                      i.jsx("p", {
                                                        children:
                                                          "Внедряем по мере готовности данных, процессов и планируемого функционала CRM.",
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "tech-workplace-map__integrations",
                                                children: [
                                                  i.jsx("b", {
                                                    children: "Outlook",
                                                  }),
                                                  i.jsx("b", {
                                                    children: "Календарь",
                                                  }),
                                                  i.jsx("b", {
                                                    children:
                                                      "Каналы коммуникаций",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__sources",
                                            children: [
                                              i.jsx("span", {
                                                children:
                                                  "ОПЕРАЦИОННЫЕ ИСТОЧНИКИ",
                                              }),
                                              i.jsx("strong", {
                                                children:
                                                  "Солид-Финанс и back-системы",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Передают в CRM оперативные данные и документы через интеграции.",
                                              }),
                                              i.jsxs("ul", {
                                                className:
                                                  "tech-workplace-map__side-list",
                                                children: [
                                                  i.jsx("li", {
                                                    children:
                                                      "Счета, позиции и движения денежных средств",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Текущие свободные средства и ожидаемые события",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Операции и клиентские события",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Брокерские отчёты, справки и документы",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__external",
                                            children: [
                                              i.jsx("span", {
                                                children: "ВНЕШНИЕ ИСТОЧНИКИ",
                                              }),
                                              i.jsx("strong", {
                                                children:
                                                  "Данные о клиенте и внешние сигналы",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Доступные на законных основаниях сведения о физических лицах, их деловом контексте и связанных событиях.",
                                              }),
                                              i.jsxs("ul", {
                                                className:
                                                  "tech-workplace-map__side-list",
                                                children: [
                                                  i.jsx("li", {
                                                    children:
                                                      "Государственные и официальные сервисы: идентификационные и статусные сведения",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Специализированные базы: деловые связи, участие в компаниях и внешние риск-сигналы",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Открытые источники: публичные профессиональные и деловые события",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Информационные провайдеры: рыночные события, значимые для клиента и портфеля",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__dwh",
                                            children: [
                                              i.jsx("span", {
                                                children: "АНАЛИТИКА И ФИНАНСЫ",
                                              }),
                                              i.jsx("strong", {
                                                children: "КХД",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Объединяет клиентский и процессный контекст с финансовыми фактами и возвращает аналитику в CRM.",
                                              }),
                                              i.jsxs("ul", {
                                                className:
                                                  "tech-workplace-map__side-list",
                                                children: [
                                                  i.jsx("li", {
                                                    children:
                                                      "Процессные и клиентские данные CRM",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Финансовые и транзакционные данные",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Аналитическая и финансовая отчётность",
                                                  }),
                                                  i.jsx("li", {
                                                    children:
                                                      "Отчёты и показатели, встроенные в CRM",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("article", {
                                            className:
                                              "tech-workplace-map__front",
                                            children: [
                                              i.jsx("span", {
                                                children: "КЛИЕНТСКИЙ КАНАЛ",
                                              }),
                                              i.jsx("strong", {
                                                children: "Цифровой фронт",
                                              }),
                                              i.jsx("p", {
                                                children:
                                                  "Клиентский веб- и мобильный контур, связанный с CRM и ЕКЦ.",
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "tech-workplace-map__front-flows",
                                                children: [
                                                  i.jsxs("p", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children: "CRM → ЦФ",
                                                      }),
                                                      " предложения, сервисные сообщения и статусы кейсов",
                                                    ],
                                                  }),
                                                  i.jsxs("p", {
                                                    children: [
                                                      i.jsx("b", {
                                                        children:
                                                          "ЦФ → CRM / ЕКЦ",
                                                      }),
                                                      " обращения, цифровые события и клиентский вид портфеля",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              i.jsx("em", {
                                                children:
                                                  "Клиентский вид — только для чтения, без имперсонации",
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "tech-workplace-map__flow tech-workplace-map__flow--front",
                                            "aria-hidden": "true",
                                            children: [
                                              i.jsx("span", {
                                                children:
                                                  "Коммуникации и сервис",
                                              }),
                                              i.jsxs("b", {
                                                className:
                                                  "tech-workplace-map__exchange",
                                                children: [
                                                  i.jsx("i", { children: "→" }),
                                                  i.jsx("i", { children: "→" }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "tech-workplace-map__flow tech-workplace-map__flow--advisor",
                                            "aria-hidden": "true",
                                            children: [
                                              i.jsx("span", {
                                                children: "Рабочее место",
                                              }),
                                              i.jsx("b", { children: "→" }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "tech-workplace-map__flow tech-workplace-map__flow--in",
                                            "aria-hidden": "true",
                                            children: [
                                              i.jsx("span", {
                                                children: "Данные и документы",
                                              }),
                                              i.jsx("b", { children: "→" }),
                                            ],
                                          }),
                                          i.jsxs("div", {
                                            className:
                                              "tech-workplace-map__flow tech-workplace-map__flow--out tech-workplace-map__flow--dwh",
                                            "aria-hidden": "true",
                                            children: [
                                              i.jsxs("div", {
                                                className:
                                                  "tech-workplace-map__flow-lane",
                                                children: [
                                                  i.jsx("span", {
                                                    children:
                                                      "Процессные данные",
                                                  }),
                                                  i.jsx("b", {
                                                    children: "→",
                                                  }),
                                                ],
                                              }),
                                              i.jsxs("div", {
                                                className:
                                                  "tech-workplace-map__flow-lane",
                                                children: [
                                                  i.jsx("span", {
                                                    children:
                                                      "Отчёты и показатели",
                                                  }),
                                                  i.jsx("b", {
                                                    children: "←",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      i.jsx("div", {
                                        className:
                                          "tech-workplace-map__contracts",
                                        children: [
                                          [
                                            "Core → CRM",
                                            "оперативные данные и документы",
                                          ],
                                          [
                                            "Внешние источники → CRM",
                                            "клиентский контекст и внешние сигналы",
                                          ],
                                          [
                                            "Core → КХД",
                                            "финансовые и транзакционные факты",
                                          ],
                                          [
                                            "CRM ↔ КХД",
                                            "процессные данные, отчёты и показатели",
                                          ],
                                          [
                                            "CRM ↔ ЦФ",
                                            "коммуникации, сервис и клиентский вид",
                                          ],
                                        ].map((e) =>
                                          i.jsxs(
                                            "span",
                                            {
                                              children: [
                                                i.jsx("strong", {
                                                  children: e[0],
                                                }),
                                                e[1],
                                              ],
                                            },
                                            e[0],
                                          ),
                                        ),
                                      }),
                                    ],
                                  }),
                                  i.jsxs("section", {
                                    className: "tech-master-data",
                                    "aria-labelledby": "tech-master-data-title",
                                    children: [
                                      i.jsxs("header", {
                                        className: "tech-master-data__header",
                                        children: [
                                          i.jsx("span", {
                                            children: "ГРАНИЦЫ МАСТЕР-ДАННЫХ",
                                          }),
                                          i.jsx("h4", {
                                            id: "tech-master-data-title",
                                            children:
                                              "CRM как мастер-система клиентских отношений",
                                          }),
                                          i.jsxs("p", {
                                            children: [
                                              i.jsx("strong", {
                                                children:
                                                  "CRM — мастер-система данных о клиентских отношениях, коммерческих и сервисных процессах.",
                                              }),
                                              " Учётные и финансовые факты остаются в системах-источниках, итоговая аналитика — в КХД.",
                                            ],
                                          }),
                                        ],
                                      }),
                                      i.jsxs("div", {
                                        className: "tech-master-data__layout",
                                        children: [
                                          i.jsx("ol", {
                                            className:
                                              "tech-master-data__domains",
                                            children: [
                                              [
                                                "Идентичность клиента в CRM-контуре",
                                                "Единый CRM ID, дедупликация карточек, переход от лида к клиенту и связи между физлицами, организациями и связанными клиентами.",
                                              ],
                                              [
                                                "Ответственность за отношения и покрытие",
                                                "Ответственный ФС или команда, статус покрытия, актуальность отношений, уровень обслуживания и плановая частота контактов.",
                                              ],
                                              [
                                                "Коммерческий процесс",
                                                "Лиды, возможности, первичные и повторные продажи, стадии воронок, следующий шаг, сроки, ответственные и результаты действий.",
                                              ],
                                              [
                                                "История взаимодействия",
                                                "Встречи, звонки, переписка, договорённости, результаты контактов и выводы речевой аналитики.",
                                              ],
                                              [
                                                "Сервисные процессы",
                                                "Обращения и кейсы, категории запросов, ответственные, статусы, SLA, история обработки и результат решения.",
                                              ],
                                              [
                                                "Коммерческий профиль клиента",
                                                "Потребности, интересы, потенциал, рабочий сегмент, уровень обслуживания, предпочтительные каналы и значимые события.",
                                              ],
                                            ].map((e, t) =>
                                              i.jsxs(
                                                "li",
                                                {
                                                  children: [
                                                    i.jsx("span", {
                                                      children: String(
                                                        t + 1,
                                                      ).padStart(2, "0"),
                                                    }),
                                                    i.jsxs("div", {
                                                      children: [
                                                        i.jsx("strong", {
                                                          children: e[0],
                                                        }),
                                                        i.jsx("p", {
                                                          children: e[1],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                e[0],
                                              ),
                                            ),
                                          }),
                                          i.jsxs("aside", {
                                            className:
                                              "tech-master-data__boundary",
                                            children: [
                                              i.jsx("span", {
                                                children:
                                                  "CRM НЕ ЯВЛЯЕТСЯ МАСТЕР-СИСТЕМОЙ ДЛЯ",
                                              }),
                                              i.jsx("ul", {
                                                children: [
                                                  "Счета, позиции, операции и движения средств — Солид-Финанс и учётные системы",
                                                  "Юридические и KYC-данные — профильные системы-источники",
                                                  "Финансовые показатели и итоговая управленческая аналитика — КХД",
                                                  "Продуктовый каталог — после отдельного решения о мастер-системе",
                                                ].map((e) =>
                                                  i.jsx(
                                                    "li",
                                                    { children: e },
                                                    e,
                                                  ),
                                                ),
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        i.jsxs("section", {
                          id: "organization",
                          ref: g.organization,
                          className:
                            "organization-locked scroll-mt-24 bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-premium transition-all duration-300 " +
                            ("organization" === l
                              ? "ring-2 ring-amber-500 border-transparent"
                              : ""),
                          children: [
                            i.jsxs("div", {
                              "aria-disabled": "true",
                              title: "Раздел находится в проработке",
                              className:
                                "organization-locked__header p-6 sm:p-8 flex items-center justify-between transition-all duration-300 border-b border-slate-50",
                              id: "toggle-header-organization",
                              children: [
                                i.jsxs("div", {
                                  className: "flex items-center gap-2.5",
                                  children: [
                                    i.jsx("span", {
                                      className:
                                        "w-8 h-8 grid place-items-center rounded-lg bg-amber-50 text-amber-700 font-bold text-xs",
                                      children: "◌",
                                    }),
                                    i.jsxs("div", {
                                      children: [
                                        i.jsx("h3", {
                                          className:
                                            "text-xl font-bold font-brand text-slate-900 tracking-tight",
                                          children:
                                            "Организационная модель и бэклог изменений",
                                        }),
                                        i.jsx("p", {
                                          className: "text-xs text-slate-500",
                                          children:
                                            "Управление разработкой, выпуском изменений и внедрением",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                i.jsxs("span", {
                                  className: "organization-locked__status",
                                  children: [
                                    i.jsx("i", { "aria-hidden": "true" }),
                                    "В проработке",
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              hidden: !0,
                              "aria-hidden": "true",
                              className:
                                "organization-locked__content p-6 sm:p-8 space-y-6",
                              id: "panel-organization",
                              children: [
                                i.jsx("p", {
                                  className:
                                    "text-xs text-slate-600 leading-relaxed",
                                  children:
                                    "CRM требует дисциплины не только от финансовых советников, но и от команды развития. Управление изменениями строится вокруг четырёх взаимосвязанных фаз.",
                                }),
                                i.jsx("div", {
                                  className: "space-y-4",
                                  children: [
                                    [
                                      "Выделение бизнес-владельцев процессов",
                                      "Каждое направление — воронка, продуктовый каталог, удержание клиентской базы — закрепляется за бизнес-владельцем. Изменения проходят скоринг по ценности для роста активов.",
                                    ],
                                    [
                                      "Управление спросом и бэклогом",
                                      "Единый канал сбора запросов. Каждый запрос квалифицируется по ценности, влиянию на качество, сложности интеграций и окупаемости трудозатрат команды ИТ.",
                                    ],
                                    [
                                      "Планирование, разработка и приёмка",
                                      "Короткие циклы разработки и пилотирование существенных изменений на ограниченной группе ФС до масштабирования.",
                                    ],
                                    [
                                      "Поддержка и аудит эффекта",
                                      "Оценка использования и эффекта после релиза, сбор обратной связи и устранение обходных ручных процессов.",
                                    ],
                                  ].map((e, t) =>
                                    i.jsxs(
                                      "div",
                                      {
                                        className: "flex gap-4",
                                        children: [
                                          i.jsx("div", {
                                            className:
                                              "w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0",
                                            children: String(t + 1),
                                          }),
                                          i.jsxs("div", {
                                            className: "text-xs",
                                            children: [
                                              i.jsx("strong", {
                                                className:
                                                  "text-slate-900 block font-brand",
                                                children: e[0],
                                              }),
                                              e[1],
                                            ],
                                          }),
                                        ],
                                      },
                                      e[0],
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        !1,
                        i.jsxs("div", {
                          id: "roadmap",
                          ref: g.roadmap,
                          className: "scroll-mt-24 space-y-6",
                          children: [
                            i.jsxs("div", {
                              className: "flex items-center gap-3",
                              children: [
                                i.jsx("span", {
                                  className:
                                    "p-1.5 bg-indigo-650 text-indigo-600 bg-indigo-100 rounded-lg",
                                  children: i.jsx(R, {
                                    className: "w-5 h-5 text-indigo-600",
                                  }),
                                }),
                                i.jsxs("div", {
                                  children: [
                                    i.jsx("h3", {
                                      className:
                                        "text-xl font-bold font-brand text-slate-900 tracking-tight",
                                      children:
                                        "Дорожная карта реализации проекта",
                                    }),
                                    i.jsx("p", {
                                      className: "text-xs text-slate-500",
                                      children:
                                        "Пошаговое наращивание целевых способностей по 3 волнам",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            i.jsxs("div", {
                              className: "space-y-6",
                              children: [
                                i.jsxs("div", {
                                  className:
                                    "bg-white border border-slate-100 rounded-3xl p-6 shadow-premium relative hover:border-slate-300 transition-all-custom",
                                  children: [
                                    i.jsx("div", {
                                      className:
                                        "absolute -left-3 top-6 w-6 h-6 rounded-full bg-indigo-600 text-white text-[11px] font-bold font-mono flex items-center justify-center shadow-md",
                                      children: "1",
                                    }),
                                    i.jsxs("div", {
                                      className: "pl-6",
                                      children: [
                                        i.jsxs("div", {
                                          className:
                                            "flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3",
                                          children: [
                                            i.jsx("h4", {
                                              className:
                                                "font-bold text-slate-900 text-sm tracking-tight uppercase font-brand",
                                              children:
                                                "Волна 1. Фундамент управляемого воронки привлечения",
                                            }),
                                            i.jsx("span", {
                                              className:
                                                "text-[10px] font-bold font-mono tracking-wider text-indigo-750 uppercase bg-indigo-50 px-2.5 py-1 rounded inline-block",
                                              children: "ВТОРАЯ ПОЛОВИНА 2026",
                                            }),
                                          ],
                                        }),
                                        i.jsxs("p", {
                                          className:
                                            "text-slate-550 text-xs leading-relaxed mb-4",
                                          children: [
                                            i.jsx("strong", {
                                              children: "Главный фокус:",
                                            }),
                                            " Навести порядок в первичном привлечении. Собрать единый сквозной воронкообразный контур у ФС, внедрить золотую запись клиента.",
                                          ],
                                        }),
                                        i.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",
                                          children: [
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-slate-900 block mb-1",
                                                  children: "CRM Доработки:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        "Лид ➔ квалификация ➔ открытие ➔ фондирование.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Базовый справочник продуктов в CRM.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Единый базовый профиль со связями воронки.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Интеграция с Outlook (задачи, встречи).",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-indigo-950 block mb-1",
                                                  children:
                                                    "Бизнес-методология:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        "Правила фиксации комплаенс-возможностей.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Процесс аллокации лидов ФС.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Еженедельный обзор воронки руководителями.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Регламент обязательности следующего шага.",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                i.jsxs("div", {
                                  className:
                                    "bg-white border border-slate-100 rounded-3xl p-6 shadow-premium relative hover:border-slate-300 transition-all-custom",
                                  children: [
                                    i.jsx("div", {
                                      className:
                                        "absolute -left-3 top-6 w-6 h-6 rounded-full bg-blue-600 text-white text-[11px] font-bold font-mono flex items-center justify-center shadow-md",
                                      children: "2",
                                    }),
                                    i.jsxs("div", {
                                      className: "pl-6",
                                      children: [
                                        i.jsxs("div", {
                                          className:
                                            "flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3",
                                          children: [
                                            i.jsx("h4", {
                                              className:
                                                "font-bold text-slate-900 text-sm tracking-tight uppercase font-brand",
                                              children:
                                                "Волна 2. Развитие действующей базы, Портфель 360-SLA",
                                            }),
                                            i.jsx("span", {
                                              className:
                                                "text-[10px] font-bold font-mono tracking-wider text-blue-750 uppercase bg-blue-50 px-2.5 py-1 rounded inline-block",
                                              children: "ГОРИЗОНТ НА 2027 ГОД",
                                            }),
                                          ],
                                        }),
                                        i.jsxs("p", {
                                          className:
                                            "text-slate-550 text-xs leading-relaxed mb-4",
                                          children: [
                                            i.jsx("strong", {
                                              children: "Главный фокус:",
                                            }),
                                            " Монетизация действующей базы, проактивные контакты и автоматизация сервисных SLA тикетов.",
                                          ],
                                        }),
                                        i.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",
                                          children: [
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-slate-900 block mb-1",
                                                  children: "CRM Доработки:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        "Портфель 360 (балансы, динамика из Солид).",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Триггеры изменений активности и ввода средств.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Единый тикетный контур сервисных обращений.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Мобильное рабочее место для выездов ФС.",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-indigo-950 block mb-1",
                                                  children:
                                                    "Бизнес-методология:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        "Сегментация по AUM со строгим SLA контактов.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Регламенты удержания при признаках оттока.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Процесс замещения и со-владения VIP клиентами.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Опросы CSI/NPS, привязанные к системе.",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                i.jsxs("div", {
                                  className:
                                    "bg-white border border-slate-100 rounded-3xl p-6 shadow-premium relative hover:border-slate-300 transition-all-custom",
                                  children: [
                                    i.jsx("div", {
                                      className:
                                        "absolute -left-3 top-6 w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-bold font-mono flex items-center justify-center shadow-md",
                                      children: "3",
                                    }),
                                    i.jsxs("div", {
                                      className: "pl-6",
                                      children: [
                                        i.jsxs("div", {
                                          className:
                                            "flex flex-col sm:flex-row justify-between sm:items-center gap-2 mb-3",
                                          children: [
                                            i.jsx("h4", {
                                              className:
                                                "font-bold text-slate-900 text-sm tracking-tight uppercase font-brand",
                                              children:
                                                "Волна 3. Зрелая модель управления клиентской ценностью и прогнозирование LTV",
                                            }),
                                            i.jsx("span", {
                                              className:
                                                "text-[10px] font-bold font-mono tracking-wider text-emerald-750 uppercase bg-emerald-50 px-2.5 py-1 rounded inline-block",
                                              children: "С 2028 ГОДА И ДАЛЕЕ",
                                            }),
                                          ],
                                        }),
                                        i.jsxs("p", {
                                          className:
                                            "text-slate-550 text-xs leading-relaxed mb-4",
                                          children: [
                                            i.jsx("strong", {
                                              children: "Главный фокус:",
                                            }),
                                            " Переход к долгосрочному сбору клиентской ценности, предиктивной комплаенс-модели и прогнозам на базе данных ИИ.",
                                          ],
                                        }),
                                        i.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",
                                          children: [
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-slate-900 block mb-1",
                                                  children: "CRM Доработки:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        '"Next Best Action" на базе глубокого скоринга.',
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Авто-модель Капитал 360 (бизнес-семья).",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Предиктивная аналитика закрытия следующих сделок.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Аналитическое прогнозирование оттоков.",
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            i.jsxs("div", {
                                              className:
                                                "bg-slate-50 p-3.5 rounded-xl border border-slate-100",
                                              children: [
                                                i.jsx("strong", {
                                                  className:
                                                    "text-indigo-950 block mb-1",
                                                  children:
                                                    "Бизнес-методология:",
                                                }),
                                                i.jsxs("ul", {
                                                  className:
                                                    "list-disc pl-4 space-y-1 text-slate-600 text-[11px]",
                                                  children: [
                                                    i.jsx("li", {
                                                      children:
                                                        "Строгая ограничительная политика спам-контактов.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Принятие решений на основе LTV доходности.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        "Внедрение сквозной ротации клиентов.",
                                                    }),
                                                    i.jsx("li", {
                                                      children:
                                                        'Управление потенциалом "Доли кошелька".',
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            i.jsx("footer", {
              className:
                "bg-slate-900 text-slate-400 text-xs py-8 border-t border-slate-800 mt-16",
              children: i.jsxs("div", {
                className:
                  "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4",
                children: [
                  i.jsxs("div", {
                    children: [
                      i.jsx("p", {
                        className: "font-bold text-slate-300 font-brand",
                        children: "CRM-СТРАТЕГИЯ • СТРАТЕГИЧЕСКИЙ РЕЛИЗ 2026",
                      }),
                      i.jsx("p", {
                        className: "mt-1",
                        children:
                          "Для коммерческого, технологического и операционного контуров финансовой организации.",
                      }),
                    ],
                  }),
                  i.jsx("div", {
                    className: "flex gap-4",
                    children: i.jsx("span", {
                      className:
                        "text-[10px] bg-slate-800 text-indigo-400 px-3 py-1 rounded-full font-mono tracking-widest uppercase",
                      children: "CONFIDENTIAL • INTERNAL USE ONLY",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      }, {}),
    }),
  );
})();
