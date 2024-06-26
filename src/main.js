(() => {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  function e(t, e) {
    if (e.length < t)
      throw new TypeError(
        t +
          " argument" +
          (t > 1 ? "s" : "") +
          " required, but only " +
          e.length +
          " present"
      );
  }
  function n(n) {
    e(1, arguments);
    var a = Object.prototype.toString.call(n);
    return n instanceof Date || ("object" === t(n) && "[object Date]" === a)
      ? new Date(n.getTime())
      : "number" == typeof n || "[object Number]" === a
      ? new Date(n)
      : (("string" != typeof n && "[object String]" !== a) ||
          "undefined" == typeof console ||
          (console.warn(
            "Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"
          ),
          console.warn(new Error().stack)),
        new Date(NaN));
  }
  function a(t) {
    if (null === t || !0 === t || !1 === t) return NaN;
    var e = Number(t);
    return isNaN(e) ? e : e < 0 ? Math.ceil(e) : Math.floor(e);
  }
  function i(t) {
    e(1, arguments);
    var a = n(t),
      i = a.getUTCDay(),
      r = (i < 1 ? 7 : 0) + i - 1;
    return a.setUTCDate(a.getUTCDate() - r), a.setUTCHours(0, 0, 0, 0), a;
  }
  function r(t) {
    e(1, arguments);
    var a = n(t),
      r = a.getUTCFullYear(),
      o = new Date(0);
    o.setUTCFullYear(r + 1, 0, 4), o.setUTCHours(0, 0, 0, 0);
    var s = i(o),
      u = new Date(0);
    u.setUTCFullYear(r, 0, 4), u.setUTCHours(0, 0, 0, 0);
    var d = i(u);
    return a.getTime() >= s.getTime()
      ? r + 1
      : a.getTime() >= d.getTime()
      ? r
      : r - 1;
  }

  var o = {};
  function s() {
    return o;
  }
  function u(t, i) {
    var r, o, u, d, c, l, h, m;
    e(1, arguments);
    var g = s(),
      w = a(
        null !==
          (r =
            null !==
              (o =
                null !==
                  (u =
                    null !== (d = null == i ? void 0 : i.weekStartsOn) &&
                    void 0 !== d
                      ? d
                      : null == i ||
                        null === (c = i.locale) ||
                        void 0 === c ||
                        null === (l = c.options) ||
                        void 0 === l
                      ? void 0
                      : l.weekStartsOn) && void 0 !== u
                  ? u
                  : g.weekStartsOn) && void 0 !== o
              ? o
              : null === (h = g.locale) ||
                void 0 === h ||
                null === (m = h.options) ||
                void 0 === m
              ? void 0
              : m.weekStartsOn) && void 0 !== r
          ? r
          : 0
      );
    if (!(w >= 0 && w <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = n(t),
      y = f.getUTCDay(),
      p = (y < w ? 7 : 0) + y - w;
    return f.setUTCDate(f.getUTCDate() - p), f.setUTCHours(0, 0, 0, 0), f;
  }
  function d(t, i) {
    var r, o, d, c, l, h, m, g;
    e(1, arguments);
    var w = n(t),
      f = w.getUTCFullYear(),
      y = s(),
      p = a(
        null !==
          (r =
            null !==
              (o =
                null !==
                  (d =
                    null !==
                      (c = null == i ? void 0 : i.firstWeekContainsDate) &&
                    void 0 !== c
                      ? c
                      : null == i ||
                        null === (l = i.locale) ||
                        void 0 === l ||
                        null === (h = l.options) ||
                        void 0 === h
                      ? void 0
                      : h.firstWeekContainsDate) && void 0 !== d
                  ? d
                  : y.firstWeekContainsDate) && void 0 !== o
              ? o
              : null === (m = y.locale) ||
                void 0 === m ||
                null === (g = m.options) ||
                void 0 === g
              ? void 0
              : g.firstWeekContainsDate) && void 0 !== r
          ? r
          : 1
      );
    if (!(p >= 1 && p <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
    var v = new Date(0);
    v.setUTCFullYear(f + 1, 0, p), v.setUTCHours(0, 0, 0, 0);
    var b = u(v, i),
      S = new Date(0);
    S.setUTCFullYear(f, 0, p), S.setUTCHours(0, 0, 0, 0);
    var T = u(S, i);
    return w.getTime() >= b.getTime()
      ? f + 1
      : w.getTime() >= T.getTime()
      ? f
      : f - 1;
  }
  function c(t, e) {
    for (var n = t < 0 ? "-" : "", a = Math.abs(t).toString(); a.length < e; )
      a = "0" + a;
    return n + a;
  }

  const l = function (t, e) {
      var n = t.getUTCFullYear(),
        a = n > 0 ? n : 1 - n;
      return c("yy" === e ? a % 100 : a, e.length);
    },
    h = function (t, e) {
      var n = t.getUTCMonth();
      return "M" === e ? String(n + 1) : c(n + 1, 2);
    },
    m = function (t, e) {
      return c(t.getUTCDate(), e.length);
    },
    g = function (t, e) {
      return c(t.getUTCHours() % 12 || 12, e.length);
    },
    w = function (t, e) {
      return c(t.getUTCHours(), e.length);
    },
    f = function (t, e) {
      return c(t.getUTCMinutes(), e.length);
    },
    y = function (t, e) {
      return c(t.getUTCSeconds(), e.length);
    },
    p = function (t, e) {
      var n = e.length,
        a = t.getUTCMilliseconds();
      return c(Math.floor(a * Math.pow(10, n - 3)), e.length);
    };
  var v = {
    G: function (t, e, n) {
      var a = t.getUTCFullYear() > 0 ? 1 : 0;
      switch (e) {
        case "G":
        case "GG":
        case "GGG":
          return n.era(a, { width: "abbreviated" });
        case "GGGGG":
          return n.era(a, { width: "narrow" });
        default:
          return n.era(a, { width: "wide" });
      }
    },
    y: function (t, e, n) {
      if ("yo" === e) {
        var a = t.getUTCFullYear(),
          i = a > 0 ? a : 1 - a;
        return n.ordinalNumber(i, { unit: "year" });
      }
      return l(t, e);
    },
    Y: function (t, e, n, a) {
      var i = d(t, a),
        r = i > 0 ? i : 1 - i;
      return "YY" === e
        ? c(r % 100, 2)
        : "Yo" === e
        ? n.ordinalNumber(r, { unit: "year" })
        : c(r, e.length);
    },
    R: function (t, e) {
      return c(r(t), e.length);
    },
    u: function (t, e) {
      return c(t.getUTCFullYear(), e.length);
    },
    Q: function (t, e, n) {
      var a = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (e) {
        case "Q":
          return String(a);
        case "QQ":
          return c(a, 2);
        case "Qo":
          return n.ordinalNumber(a, { unit: "quarter" });
        case "QQQ":
          return n.quarter(a, { width: "abbreviated", context: "formatting" });
        case "QQQQQ":
          return n.quarter(a, { width: "narrow", context: "formatting" });
        default:
          return n.quarter(a, { width: "wide", context: "formatting" });
      }
    },
    q: function (t, e, n) {
      var a = Math.ceil((t.getUTCMonth() + 1) / 3);
      switch (e) {
        case "q":
          return String(a);
        case "qq":
          return c(a, 2);
        case "qo":
          return n.ordinalNumber(a, { unit: "quarter" });
        case "qqq":
          return n.quarter(a, { width: "abbreviated", context: "standalone" });
        case "qqqqq":
          return n.quarter(a, { width: "narrow", context: "standalone" });
        default:
          return n.quarter(a, { width: "wide", context: "standalone" });
      }
    },
    M: function (t, e, n) {
      var a = t.getUTCMonth();
      switch (e) {
        case "M":
        case "MM":
          return h(t, e);
        case "Mo":
          return n.ordinalNumber(a + 1, { unit: "month" });
        case "MMM":
          return n.month(a, { width: "abbreviated", context: "formatting" });
        case "MMMMM":
          return n.month(a, { width: "narrow", context: "formatting" });
        default:
          return n.month(a, { width: "wide", context: "formatting" });
      }
    },
    L: function (t, e, n) {
      var a = t.getUTCMonth();
      switch (e) {
        case "L":
          return String(a + 1);
        case "LL":
          return c(a + 1, 2);
        case "Lo":
          return n.ordinalNumber(a + 1, { unit: "month" });
        case "LLL":
          return n.month(a, { width: "abbreviated", context: "standalone" });
        case "LLLLL":
          return n.month(a, { width: "narrow", context: "standalone" });
        default:
          return n.month(a, { width: "wide", context: "standalone" });
      }
    },
    w: function (t, i, r, o) {
      var l = (function (t, i) {
        e(1, arguments);
        var r = n(t),
          o =
            u(r, i).getTime() -
            (function (t, n) {
              var i, r, o, c, l, h, m, g;
              e(1, arguments);
              var w = s(),
                f = a(
                  null !==
                    (i =
                      null !==
                        (r =
                          null !==
                            (o =
                              null !==
                                (c =
                                  null == n
                                    ? void 0
                                    : n.firstWeekContainsDate) && void 0 !== c
                                ? c
                                : null == n ||
                                  null === (l = n.locale) ||
                                  void 0 === l ||
                                  null === (h = l.options) ||
                                  void 0 === h
                                ? void 0
                                : h.firstWeekContainsDate) && void 0 !== o
                            ? o
                            : w.firstWeekContainsDate) && void 0 !== r
                        ? r
                        : null === (m = w.locale) ||
                          void 0 === m ||
                          null === (g = m.options) ||
                          void 0 === g
                        ? void 0
                        : g.firstWeekContainsDate) && void 0 !== i
                    ? i
                    : 1
                ),
                y = d(t, n),
                p = new Date(0);
              return (
                p.setUTCFullYear(y, 0, f), p.setUTCHours(0, 0, 0, 0), u(p, n)
              );
            })(r, i).getTime();
        return Math.round(o / 6048e5) + 1;
      })(t, o);
      return "wo" === i ? r.ordinalNumber(l, { unit: "week" }) : c(l, i.length);
    },
    I: function (t, a, o) {
      var s = (function (t) {
        e(1, arguments);
        var a = n(t),
          o =
            i(a).getTime() -
            (function (t) {
              e(1, arguments);
              var n = r(t),
                a = new Date(0);
              return a.setUTCFullYear(n, 0, 4), a.setUTCHours(0, 0, 0, 0), i(a);
            })(a).getTime();
        return Math.round(o / 6048e5) + 1;
      })(t);
      return "Io" === a ? o.ordinalNumber(s, { unit: "week" }) : c(s, a.length);
    },
    d: function (t, e, n) {
      return "do" === e
        ? n.ordinalNumber(t.getUTCDate(), { unit: "date" })
        : m(t, e);
    },
    D: function (t, a, i) {
      var r = (function (t) {
        e(1, arguments);
        var a = n(t),
          i = a.getTime();
        a.setUTCMonth(0, 1), a.setUTCHours(0, 0, 0, 0);
        var r = i - a.getTime();
        return Math.floor(r / 864e5) + 1;
      })(t);
      return "Do" === a
        ? i.ordinalNumber(r, { unit: "dayOfYear" })
        : c(r, a.length);
    },
    E: function (t, e, n) {
      var a = t.getUTCDay();
      switch (e) {
        case "E":
        case "EE":
        case "EEE":
          return n.day(a, { width: "abbreviated", context: "formatting" });
        case "EEEEE":
          return n.day(a, { width: "narrow", context: "formatting" });
        case "EEEEEE":
          return n.day(a, { width: "short", context: "formatting" });
        default:
          return n.day(a, { width: "wide", context: "formatting" });
      }
    },
    e: function (t, e, n, a) {
      var i = t.getUTCDay(),
        r = (i - a.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "e":
          return String(r);
        case "ee":
          return c(r, 2);
        case "eo":
          return n.ordinalNumber(r, { unit: "day" });
        case "eee":
          return n.day(i, { width: "abbreviated", context: "formatting" });
        case "eeeee":
          return n.day(i, { width: "narrow", context: "formatting" });
        case "eeeeee":
          return n.day(i, { width: "short", context: "formatting" });
        default:
          return n.day(i, { width: "wide", context: "formatting" });
      }
    },
    c: function (t, e, n, a) {
      var i = t.getUTCDay(),
        r = (i - a.weekStartsOn + 8) % 7 || 7;
      switch (e) {
        case "c":
          return String(r);
        case "cc":
          return c(r, e.length);
        case "co":
          return n.ordinalNumber(r, { unit: "day" });
        case "ccc":
          return n.day(i, { width: "abbreviated", context: "standalone" });
        case "ccccc":
          return n.day(i, { width: "narrow", context: "standalone" });
        case "cccccc":
          return n.day(i, { width: "short", context: "standalone" });
        default:
          return n.day(i, { width: "wide", context: "standalone" });
      }
    },
    i: function (t, e, n) {
      var a = t.getUTCDay(),
        i = 0 === a ? 7 : a;
      switch (e) {
        case "i":
          return String(i);
        case "ii":
          return c(i, e.length);
        case "io":
          return n.ordinalNumber(i, { unit: "day" });
        case "iii":
          return n.day(a, { width: "abbreviated", context: "formatting" });
        case "iiiii":
          return n.day(a, { width: "narrow", context: "formatting" });
        case "iiiiii":
          return n.day(a, { width: "short", context: "formatting" });
        default:
          return n.day(a, { width: "wide", context: "formatting" });
      }
    },
    a: function (t, e, n) {
      var a = t.getUTCHours() / 12 >= 1 ? "pm" : "am";
      switch (e) {
        case "a":
        case "aa":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "aaa":
          return n
            .dayPeriod(a, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "aaaaa":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    b: function (t, e, n) {
      var a,
        i = t.getUTCHours();
      switch (
        ((a =
          12 === i ? "noon" : 0 === i ? "midnight" : i / 12 >= 1 ? "pm" : "am"),
        e)
      ) {
        case "b":
        case "bb":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "bbb":
          return n
            .dayPeriod(a, { width: "abbreviated", context: "formatting" })
            .toLowerCase();
        case "bbbbb":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    B: function (t, e, n) {
      var a,
        i = t.getUTCHours();
      switch (
        ((a =
          i >= 17
            ? "evening"
            : i >= 12
            ? "afternoon"
            : i >= 4
            ? "morning"
            : "night"),
        e)
      ) {
        case "B":
        case "BB":
        case "BBB":
          return n.dayPeriod(a, {
            width: "abbreviated",
            context: "formatting",
          });
        case "BBBBB":
          return n.dayPeriod(a, { width: "narrow", context: "formatting" });
        default:
          return n.dayPeriod(a, { width: "wide", context: "formatting" });
      }
    },
    h: function (t, e, n) {
      if ("ho" === e) {
        var a = t.getUTCHours() % 12;
        return 0 === a && (a = 12), n.ordinalNumber(a, { unit: "hour" });
      }
      return g(t, e);
    },
    H: function (t, e, n) {
      return "Ho" === e
        ? n.ordinalNumber(t.getUTCHours(), { unit: "hour" })
        : w(t, e);
    },
    K: function (t, e, n) {
      var a = t.getUTCHours() % 12;
      return "Ko" === e ? n.ordinalNumber(a, { unit: "hour" }) : c(a, e.length);
    },
    k: function (t, e, n) {
      var a = t.getUTCHours();
      return (
        0 === a && (a = 24),
        "ko" === e ? n.ordinalNumber(a, { unit: "hour" }) : c(a, e.length)
      );
    },
    m: function (t, e, n) {
      return "mo" === e
        ? n.ordinalNumber(t.getUTCMinutes(), { unit: "minute" })
        : f(t, e);
    },
    s: function (t, e, n) {
      return "so" === e
        ? n.ordinalNumber(t.getUTCSeconds(), { unit: "second" })
        : y(t, e);
    },
    S: function (t, e) {
      return p(t, e);
    },
    X: function (t, e, n, a) {
      var i = (a._originalDate || t).getTimezoneOffset();
      if (0 === i) return "Z";
      switch (e) {
        case "X":
          return S(i);
        case "XXXX":
        case "XX":
          return T(i);
        default:
          return T(i, ":");
      }
    },
    x: function (t, e, n, a) {
      var i = (a._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "x":
          return S(i);
        case "xxxx":
        case "xx":
          return T(i);
        default:
          return T(i, ":");
      }
    },
    O: function (t, e, n, a) {
      var i = (a._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "O":
        case "OO":
        case "OOO":
          return "GMT" + b(i, ":");
        default:
          return "GMT" + T(i, ":");
      }
    },
    z: function (t, e, n, a) {
      var i = (a._originalDate || t).getTimezoneOffset();
      switch (e) {
        case "z":
        case "zz":
        case "zzz":
          return "GMT" + b(i, ":");
        default:
          return "GMT" + T(i, ":");
      }
    },
    t: function (t, e, n, a) {
      var i = a._originalDate || t;
      return c(Math.floor(i.getTime() / 1e3), e.length);
    },
    T: function (t, e, n, a) {
      return c((a._originalDate || t).getTime(), e.length);
    },
  };
  function b(t, e) {
    var n = t > 0 ? "-" : "+",
      a = Math.abs(t),
      i = Math.floor(a / 60),
      r = a % 60;
    if (0 === r) return n + String(i);
    var o = e || "";
    return n + String(i) + o + c(r, 2);
  }
  function S(t, e) {
    return t % 60 == 0 ? (t > 0 ? "-" : "+") + c(Math.abs(t) / 60, 2) : T(t, e);
  }
  function T(t, e) {
    var n = e || "",
      a = t > 0 ? "-" : "+",
      i = Math.abs(t);
    return a + c(Math.floor(i / 60), 2) + n + c(i % 60, 2);
  }
  const x = v;
  var C = function (t, e) {
      switch (t) {
        case "P":
          return e.date({ width: "short" });
        case "PP":
          return e.date({ width: "medium" });
        case "PPP":
          return e.date({ width: "long" });
        default:
          return e.date({ width: "full" });
      }
    },
    M = function (t, e) {
      switch (t) {
        case "p":
          return e.time({ width: "short" });
        case "pp":
          return e.time({ width: "medium" });
        case "ppp":
          return e.time({ width: "long" });
        default:
          return e.time({ width: "full" });
      }
    },
    k = {
      p: M,
      P: function (t, e) {
        var n,
          a = t.match(/(P+)(p+)?/) || [],
          i = a[1],
          r = a[2];
        if (!r) return C(t, e);
        switch (i) {
          case "P":
            n = e.dateTime({ width: "short" });
            break;
          case "PP":
            n = e.dateTime({ width: "medium" });
            break;
          case "PPP":
            n = e.dateTime({ width: "long" });
            break;
          default:
            n = e.dateTime({ width: "full" });
        }
        return n.replace("{{date}}", C(i, e)).replace("{{time}}", M(r, e));
      },
    };
  const _ = k;
  var D = ["D", "DD"],
    P = ["YY", "YYYY"];

  function U(t, e, n) {
    if ("YYYY" === t)
      throw new RangeError(
        "Use `yyyy` instead of `YYYY` (in `"
          .concat(e, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if ("YY" === t)
      throw new RangeError(
        "Use `yy` instead of `YY` (in `"
          .concat(e, "`) for formatting years to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if ("D" === t)
      throw new RangeError(
        "Use `d` instead of `D` (in `"
          .concat(e, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
    if ("DD" === t)
      throw new RangeError(
        "Use `dd` instead of `DD` (in `"
          .concat(e, "`) for formatting days of the month to the input `")
          .concat(
            n,
            "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"
          )
      );
  }

  var L = {
    lessThanXSeconds: {
      one: "less than a second",
      other: "less than {{count}} seconds",
    },
    xSeconds: { one: "1 second", other: "{{count}} seconds" },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
      one: "less than a minute",
      other: "less than {{count}} minutes",
    },
    xMinutes: { one: "1 minute", other: "{{count}} minutes" },
    aboutXHours: { one: "about 1 hour", other: "about {{count}} hours" },
    xHours: { one: "1 hour", other: "{{count}} hours" },
    xDays: { one: "1 day", other: "{{count}} days" },
    aboutXWeeks: { one: "about 1 week", other: "about {{count}} weeks" },
    xWeeks: { one: "1 week", other: "{{count}} weeks" },
    aboutXMonths: { one: "about 1 month", other: "about {{count}} months" },
    xMonths: { one: "1 month", other: "{{count}} months" },
    aboutXYears: { one: "about 1 year", other: "about {{count}} years" },
    xYears: { one: "1 year", other: "{{count}} years" },
    overXYears: { one: "over 1 year", other: "over {{count}} years" },
    almostXYears: { one: "almost 1 year", other: "almost {{count}} years" },
  };
  function W(t) {
    return function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = e.width ? String(e.width) : t.defaultWidth;
      return t.formats[n] || t.formats[t.defaultWidth];
    };
  }
  var E,
    q = {
      date: W({
        formats: {
          full: "EEEE, MMMM do, y",
          long: "MMMM do, y",
          medium: "MMM d, y",
          short: "MM/dd/yyyy",
        },
        defaultWidth: "full",
      }),
      time: W({
        formats: {
          full: "h:mm:ss a zzzz",
          long: "h:mm:ss a z",
          medium: "h:mm:ss a",
          short: "h:mm a",
        },
        defaultWidth: "full",
      }),
      dateTime: W({
        formats: {
          full: "{{date}} 'at' {{time}}",
          long: "{{date}} 'at' {{time}}",
          medium: "{{date}}, {{time}}",
          short: "{{date}}, {{time}}",
        },
        defaultWidth: "full",
      }),
    },
    $ = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P",
    };
  function F(t) {
    return function (e, n) {
      var a;
      if (
        "formatting" ===
          (null != n && n.context ? String(n.context) : "standalone") &&
        t.formattingValues
      ) {
        var i = t.defaultFormattingWidth || t.defaultWidth,
          r = null != n && n.width ? String(n.width) : i;
        a = t.formattingValues[r] || t.formattingValues[i];
      } else {
        var o = t.defaultWidth,
          s = null != n && n.width ? String(n.width) : t.defaultWidth;
        a = t.values[s] || t.values[o];
      }
      return a[t.argumentCallback ? t.argumentCallback(e) : e];
    };
  }
  function N(t) {
    return function (e) {
      var n =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = n.width,
        i = (a && t.matchPatterns[a]) || t.matchPatterns[t.defaultMatchWidth],
        r = e.match(i);
      if (!r) return null;
      var o,
        s = r[0],
        u = (a && t.parsePatterns[a]) || t.parsePatterns[t.defaultParseWidth],
        d = Array.isArray(u)
          ? (function (t, e) {
              for (var n = 0; n < t.length; n++) if (t[n].test(s)) return n;
            })(u)
          : (function (t, e) {
              for (var n in t)
                if (t.hasOwnProperty(n) && t[n].test(s)) return n;
            })(u);
      return (
        (o = t.valueCallback ? t.valueCallback(d) : d),
        {
          value: (o = n.valueCallback ? n.valueCallback(o) : o),
          rest: e.slice(s.length),
        }
      );
    };
  }
  const O = {
    code: "en-US",
    formatDistance: function (t, e, n) {
      var a,
        i = L[t];
      return (
        (a =
          "string" == typeof i
            ? i
            : 1 === e
            ? i.one
            : i.other.replace("{{count}}", e.toString())),
        null != n && n.addSuffix
          ? n.comparison && n.comparison > 0
            ? "in " + a
            : a + " ago"
          : a
      );
    },
    formatLong: q,
    formatRelative: function (t, e, n, a) {
      return $[t];
    },
    localize: {
      ordinalNumber: function (t, e) {
        var n = Number(t),
          a = n % 100;
        if (a > 20 || a < 10)
          switch (a % 10) {
            case 1:
              return n + "st";
            case 2:
              return n + "nd";
            case 3:
              return n + "rd";
          }
        return n + "th";
      },
      era: F({
        values: {
          narrow: ["B", "A"],
          abbreviated: ["BC", "AD"],
          wide: ["Before Christ", "Anno Domini"],
        },
        defaultWidth: "wide",
      }),
      quarter: F({
        values: {
          narrow: ["1", "2", "3", "4"],
          abbreviated: ["Q1", "Q2", "Q3", "Q4"],
          wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
        },
        defaultWidth: "wide",
        argumentCallback: function (t) {
          return t - 1;
        },
      }),
      month: F({
        values: {
          narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          abbreviated: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          wide: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        },
        defaultWidth: "wide",
      }),
      day: F({
        values: {
          narrow: ["S", "M", "T", "W", "T", "F", "S"],
          short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
          abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          wide: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
        },
        defaultWidth: "wide",
      }),
      dayPeriod: F({
        values: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "morning",
            afternoon: "afternoon",
            evening: "evening",
            night: "night",
          },
        },
        defaultWidth: "wide",
        formattingValues: {
          narrow: {
            am: "a",
            pm: "p",
            midnight: "mi",
            noon: "n",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          abbreviated: {
            am: "AM",
            pm: "PM",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
          wide: {
            am: "a.m.",
            pm: "p.m.",
            midnight: "midnight",
            noon: "noon",
            morning: "in the morning",
            afternoon: "in the afternoon",
            evening: "in the evening",
            night: "at night",
          },
        },
        defaultFormattingWidth: "wide",
      }),
    },
    match: {
      ordinalNumber:
        ((E = {
          matchPattern: /^(\d+)(th|st|nd|rd)?/i,
          parsePattern: /\d+/i,
          valueCallback: function (t) {
            return parseInt(t, 10);
          },
        }),
        function (t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            n = t.match(E.matchPattern);
          if (!n) return null;
          var a = n[0],
            i = t.match(E.parsePattern);
          if (!i) return null;
          var r = E.valueCallback ? E.valueCallback(i[0]) : i[0];
          return {
            value: (r = e.valueCallback ? e.valueCallback(r) : r),
            rest: t.slice(a.length),
          };
        }),
      era: N({
        matchPatterns: {
          narrow: /^(b|a)/i,
          abbreviated:
            /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
          wide: /^(before christ|before common era|anno domini|common era)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/^b/i, /^(a|c)/i] },
        defaultParseWidth: "any",
      }),
      quarter: N({
        matchPatterns: {
          narrow: /^[1234]/i,
          abbreviated: /^q[1234]/i,
          wide: /^[1234](th|st|nd|rd)? quarter/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: { any: [/1/i, /2/i, /3/i, /4/i] },
        defaultParseWidth: "any",
        valueCallback: function (t) {
          return t + 1;
        },
      }),
      month: N({
        matchPatterns: {
          narrow: /^[jfmasond]/i,
          abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
          wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [
            /^j/i,
            /^f/i,
            /^m/i,
            /^a/i,
            /^m/i,
            /^j/i,
            /^j/i,
            /^a/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
          any: [
            /^ja/i,
            /^f/i,
            /^mar/i,
            /^ap/i,
            /^may/i,
            /^jun/i,
            /^jul/i,
            /^au/i,
            /^s/i,
            /^o/i,
            /^n/i,
            /^d/i,
          ],
        },
        defaultParseWidth: "any",
      }),
      day: N({
        matchPatterns: {
          narrow: /^[smtwf]/i,
          short: /^(su|mo|tu|we|th|fr|sa)/i,
          abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
          wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
        },
        defaultMatchWidth: "wide",
        parsePatterns: {
          narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
          any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
        },
        defaultParseWidth: "any",
      }),
      dayPeriod: N({
        matchPatterns: {
          narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
          any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
        },
        defaultMatchWidth: "any",
        parsePatterns: {
          any: {
            am: /^a/i,
            pm: /^p/i,
            midnight: /^mi/i,
            noon: /^no/i,
            morning: /morning/i,
            afternoon: /afternoon/i,
            evening: /evening/i,
            night: /night/i,
          },
        },
        defaultParseWidth: "any",
      }),
    },
    options: { weekStartsOn: 0, firstWeekContainsDate: 1 },
  };

  var Y = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
    z = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
    R = /^'([^]*?)'?$/,
    H = /''/g,
    j = /[a-zA-Z]/;

  function A(i, r, o) {
    var u, d, c, l, h, m, g, w, f, y, p, v, b, S, T, C, M, k;
    e(2, arguments);
    var L = String(r),
      W = s(),
      E =
        null !==
          (u =
            null !== (d = null == o ? void 0 : o.locale) && void 0 !== d
              ? d
              : W.locale) && void 0 !== u
          ? u
          : O,
      q = a(
        null !==
          (c =
            null !==
              (l =
                null !==
                  (h =
                    null !==
                      (m = null == o ? void 0 : o.firstWeekContainsDate) &&
                    void 0 !== m
                      ? m
                      : null == o ||
                        null === (g = o.locale) ||
                        void 0 === g ||
                        null === (w = g.options) ||
                        void 0 === w
                      ? void 0
                      : w.firstWeekContainsDate) && void 0 !== h
                  ? h
                  : W.firstWeekContainsDate) && void 0 !== l
              ? l
              : null === (f = W.locale) ||
                void 0 === f ||
                null === (y = f.options) ||
                void 0 === y
              ? void 0
              : y.firstWeekContainsDate) && void 0 !== c
          ? c
          : 1
      );
    if (!(q >= 1 && q <= 7))
      throw new RangeError(
        "firstWeekContainsDate must be between 1 and 7 inclusively"
      );
    var $ = a(
      null !==
        (p =
          null !==
            (v =
              null !==
                (b =
                  null !== (S = null == o ? void 0 : o.weekStartsOn) &&
                  void 0 !== S
                    ? S
                    : null == o ||
                      null === (T = o.locale) ||
                      void 0 === T ||
                      null === (C = T.options) ||
                      void 0 === C
                    ? void 0
                    : C.weekStartsOn) && void 0 !== b
                ? b
                : W.weekStartsOn) && void 0 !== v
            ? v
            : null === (M = W.locale) ||
              void 0 === M ||
              null === (k = M.options) ||
              void 0 === k
            ? void 0
            : k.weekStartsOn) && void 0 !== p
        ? p
        : 0
    );
    if (!($ >= 0 && $ <= 6))
      throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!E.localize)
      throw new RangeError("locale must contain localize property");
    if (!E.formatLong)
      throw new RangeError("locale must contain formatLong property");
    var F = n(i);
    if (
      !(function (a) {
        if (
          (e(1, arguments),
          !(function (n) {
            return (
              e(1, arguments),
              n instanceof Date ||
                ("object" === t(n) &&
                  "[object Date]" === Object.prototype.toString.call(n))
            );
          })(a) && "number" != typeof a)
        )
          return !1;
        var i = n(a);
        return !isNaN(Number(i));
      })(F)
    )
      throw new RangeError("Invalid time value");
    var N = (function (t) {
        var e = new Date(
          Date.UTC(
            t.getFullYear(),
            t.getMonth(),
            t.getDate(),
            t.getHours(),
            t.getMinutes(),
            t.getSeconds(),
            t.getMilliseconds()
          )
        );
        return e.setUTCFullYear(t.getFullYear()), t.getTime() - e.getTime();
      })(F),
      A = (function (t, i) {
        return (
          e(2, arguments),
          (function (t, i) {
            e(2, arguments);
            var r = n(t).getTime(),
              o = a(i);
            return new Date(r + o);
          })(t, -a(i))
        );
      })(F, N),
      B = {
        firstWeekContainsDate: q,
        weekStartsOn: $,
        locale: E,
        _originalDate: F,
      };
    return L.match(z)
      .map(function (t) {
        var e = t[0];
        return "p" === e || "P" === e ? (0, _[e])(t, E.formatLong) : t;
      })
      .join("")
      .match(Y)
      .map(function (t) {
        if ("''" === t) return "'";
        var e,
          n,
          a = t[0];
        if ("'" === a) return (n = (e = t).match(R)) ? n[1].replace(H, "'") : e;
        var s,
          u = x[a];
        if (u)
          return (
            (null != o && o.useAdditionalWeekYearTokens) ||
              ((s = t), -1 === P.indexOf(s)) ||
              U(t, r, String(i)),
            (null != o && o.useAdditionalDayOfYearTokens) ||
              !(function (t) {
                return -1 !== D.indexOf(t);
              })(t) ||
              U(t, r, String(i)),
            u(A, t, E.localize, B)
          );
        if (a.match(j))
          throw new RangeError(
            "Format string contains an unescaped latin alphabet character `" +
              a +
              "`"
          );
        return t;
      })
      .join("");
  }

  const B = [
      {
        codes: [1e3, 0],
        text: { day: "Sunny", night: "Clear Skies" },
        icon: { day: "wi-day-sunny", night: "wi-night-clear" },
      },
      {
        codes: [1003, 1],
        text: { day: "Partly Cloudy", night: "Partly Cloudy" },
        icon: {
          day: "wi-day-sunny-overcast",
          night: "wi-night-alt-partly-cloudy",
        },
      },
      {
        codes: [1006, 2],
        text: { day: "Cloudy", night: "Cloudy" },
        icon: { day: "wi-day-cloudy", night: "wi-night-alt-cloudy" },
      },
      {
        codes: [1009, 3],
        text: { day: "Overcast", night: "Overcast" },
        icon: { day: "wi-cloudy", night: "wi-cloudy" },
      },
      {
        codes: [1030],
        text: { day: "Mist", night: "Mist" },
        icon: { day: "wi-day-fog", night: "wi-night-fog" },
      },
      {
        codes: [1087],
        text: { day: "Thunder", night: "Thunder" },
        icon: { day: "wi-day-lightning", night: "wi-night-alt-lightning" },
      },
      {
        codes: [1135, 45, 48],
        text: { day: "Fog", night: "Fog" },
        icon: { day: "wi-day-fog", night: "wi-night-fog" },
      },
      {
        codes: [1147],
        text: { day: "Freezing Fog", night: "Freezing Fog" },
        icon: { day: "wi-day-fog", night: "wi-night-fog" },
      },
      {
        codes: [1150, 1153, 51, 53, 55, 56, 57],
        text: { day: "Drizzle", night: "Drizzle" },
        icon: { day: "wi-day-sprinkle", night: "wi-night-alt-sprinkle" },
      },
      {
        codes: [1072, 1168, 1171],
        text: { day: "Freezing Drizzle", night: "Freezing Drizzle" },
        icon: { day: "wi-day-sprinkle", night: "wi-night-alt-sprinkle" },
      },
      {
        codes: [1180],
        text: { day: "Patchy Light Rain", night: "Patchy Light Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1183, 61, 66],
        text: { day: "Light Rain", night: "Light Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1063],
        text: { day: "Patchy Rain", night: "Patchy Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1186, 1189, 63],
        text: { day: "Rain", night: "Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1192, 1195, 65, 67],
        text: { day: "Heavy Rain", night: "Heavy Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1198],
        text: { day: "Light Freezing Rain", night: "Light Freezing Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1201],
        text: { day: "Freezing Rain", night: "Freezing Rain" },
        icon: { day: "wi-day-rain", night: "wi-night-alt-rain" },
      },
      {
        codes: [1204],
        text: { day: "Light Sleet", night: "Light Sleet" },
        icon: { day: "wi-day-sleet", night: "wi-night-alt-sleet" },
      },
      {
        codes: [1069],
        text: { day: "Patchy Sleet", night: "Patchy Sleet" },
        icon: { day: "wi-day-sleet", night: "wi-night-alt-sleet" },
      },
      {
        codes: [1207, 1237],
        text: { day: "Sleet", night: "Sleet" },
        icon: { day: "wi-day-sleet", night: "wi-night-alt-sleet" },
      },
      {
        codes: [1249, 1261],
        text: { day: "Light Sleet Showers", night: "Light Sleet Showers" },
        icon: { day: "wi-day-sleet", night: "wi-night-alt-sleet" },
      },
      {
        codes: [1252, 1264],
        text: { day: "Sleet Showers", night: "Sleet Showers" },
        icon: { day: "wi-day-sleet", night: "wi-night-alt-sleet" },
      },
      {
        codes: [1210],
        text: { day: "Patchy Light Snow", night: "Patchy Light Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1213, 71],
        text: { day: "Light Snow", night: "Light Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1066, 1216],
        text: { day: "Patchy Snow", night: "Patchy Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1219, 73, 77],
        text: { day: "Snow", night: "Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1222],
        text: { day: "Patchy Heavy Snow", night: "Patchy Heavy Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1225, 75],
        text: { day: "Heavy Snow", night: "Heavy Snow" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1255],
        text: { day: "Light Snow Showers", night: "Light Snow Showers" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1258, 85, 86],
        text: { day: "Snow Showers", night: "Snow Showers" },
        icon: { day: "wi-day-snow", night: "wi-night-alt-snow" },
      },
      {
        codes: [1114],
        text: { day: "Blowing Snow", night: "Blowing Snow" },
        icon: { day: "wi-day-snow-wind", night: "wi-night-alt-snow-wind" },
      },
      {
        codes: [1117],
        text: { day: "Blizzard", night: "Blizzard" },
        icon: { day: "wi-day-snow-wind", night: "wi-night-alt-snow-wind" },
      },
      {
        codes: [1240],
        text: { day: "Light Rain Showers", night: "Light Rain Showers" },
        icon: { day: "wi-day-showers", night: "wi-night-alt-showers" },
      },
      {
        codes: [1243, 80, 81, 82],
        text: { day: "Rain Showers", night: "Rain Showers" },
        icon: { day: "wi-day-showers", night: "wi-night-alt-showers" },
      },
      {
        codes: [1246],
        text: {
          day: "Torrential Rain Showers",
          night: "Torrential Rain Showers",
        },
        icon: { day: "wi-day-showers", night: "wi-night-alt-showers" },
      },
      {
        codes: [1273],
        text: { day: "Light Thunderstorm", night: "Light Thunderstorm" },
        icon: {
          day: "wi-day-thunderstorm",
          night: "wi-night-alt-thunderstorm",
        },
      },
      {
        codes: [1276, 95, 96, 99],
        text: { day: "Thunderstorm", night: "Thunderstorm" },
        icon: {
          day: "wi-day-thunderstorm",
          night: "wi-night-alt-thunderstorm",
        },
      },
      {
        codes: [1279],
        text: {
          day: "Light Thundersnow Storm",
          night: "Light Thundersnow Storm",
        },
        icon: {
          day: "wi-day-snow-thunderstorm",
          night: "wi-night-alt-snow-thunderstorm",
        },
      },
      {
        codes: [1282],
        text: { day: "Thundersnow Storm", night: "Thundersnow Storm" },
        icon: {
          day: "wi-day-snow-thunderstorm",
          night: "wi-night-alt-snow-thunderstorm",
        },
      },
    ],
    Q = [
      "Good",
      "Moderate",
      "Unhealthy",
      "Unhealthy",
      "Unhealthy",
      "Hazardous",
    ],
    G = [
      { name: "New York", lat: 40.71, lon: -74.01 },
      { name: "London", lat: 51.51, lon: -0.13 },
      { name: "Beijing", lat: 39.91, lon: 116.4 },
      { name: "Rome", lat: 41.89, lon: 12.51 },
      { name: "Moscow", lat: 55.75, lon: 37.62 },
      { name: "Buenos Aires", lat: -34.59, lon: -58.67 },
      { name: "Cairo", lat: 30.06, lon: 31.25 },
      { name: "Paris", lat: 48.85, lon: 2.35 },
      { name: "New Delhi", lat: 28.64, lon: 77.22 },
      { name: "Jakarta", lat: -6.21, lon: 106.85 },
      { name: "Berlin", lat: 52.52, lon: 13.41 },
      { name: "Tokyo", lat: 35.69, lon: 139.69 },
      { name: "Amsterdam", lat: 52.37, lon: 4.89 },
      { name: "Bangkok", lat: 13.75, lon: 100.5 },
    ];
  class I {
    static #t = "5ae9fa65694a492eaf864510231410";
    static #e = B;
    static #n = Q;
    static #a = G;
    static #i(t) {
      return this.#e.find((e) => e.codes.includes(t));
    }
    static #r(t) {
      const e = new Date(t[0].location.localtime),
        n = t[0].current.is_day ? "day" : "night",
        a = this.#i(t[0].current.condition.code);
      return {
        date: A(e, "E, MMM d, yyyy"),
        time: A(e, "h:mm a"),
        sunrise: t[0].forecast.forecastday[0].astro.sunrise,
        sunset: t[0].forecast.forecastday[0].astro.sunset,
        condition: { text: a.text[n], icon: a.icon[n] },
        temp_c: Math.round(t[0].current.temp_c),
        temp_f: Math.round(t[0].current.temp_f),
        feelslike_c: Math.round(t[0].current.feelslike_c),
        feelslike_f: Math.round(t[0].current.feelslike_f),
        rain_chance:
          t[0].forecast.forecastday[0].hour[+A(e, "H")].chance_of_rain,
        uv_index: t[0].current.uv,
        aqi: this.#n[t[0].current.air_quality["us-epa-index"] - 1],
        wind_kph: Math.round(t[0].current.wind_kph),
        wind_mph: Math.round(t[0].current.wind_mph),
        pressure_hpa: t[0].current.pressure_mb,
        pressure_in: t[0].current.pressure_in,
        humidity: t[0].current.humidity,
      };
    }
    static #o(t) {
      const e = +A(new Date(t[0].location.localtime), "H"),
        n = [];
      for (let a = e + 1; a <= e + 24; a++) {
        const e = t[1].hourly.is_day[a] ? "day" : "night",
          i = this.#i(t[1].hourly.weather_code[a]);
        n.push({
          time: A(new Date(t[1].hourly.time[a]), "h:mm a"),
          condition_icon: i.icon[e],
          temp_c: Math.round(t[1].hourly.temperature_2m[a]),
          temp_f: Math.round(t[2].hourly.temperature_2m[a]),
        });
      }
      return n;
    }
    static #s(t) {
      const e = [];
      for (let n = 1; n <= 7; n++) {
        const a = this.#i(t[1].daily.weather_code[n]);
        e.push({
          day: A(new Date(t[1].daily.time[n]), "EEEE"),
          condition: { text: a.text.night, icon: a.icon.day },
          temp_min_c: Math.round(t[1].daily.temperature_2m_min[n]),
          temp_min_f: Math.round(t[2].daily.temperature_2m_min[n]),
          temp_max_c: Math.round(t[1].daily.temperature_2m_max[n]),
          temp_max_f: Math.round(t[2].daily.temperature_2m_max[n]),
        });
      }
      return e;
    }

    // get prviose location
    static async getUserLocation() {
      const t = localStorage.getItem("location");
      if (null !== t) return JSON.parse(t);
      try {
        const { coords: t } = await new Promise((t, e) => {
          navigator.geolocation.getCurrentPosition(t, e);
        });
        return { lat: t.latitude, lon: t.longitude };
      } catch {
        return this.#a[Math.floor(Math.random() * this.#a.length)];
      }
    }

    // Change Setting Based on User =>
    static getUserSettings() {
      const t = localStorage.getItem("settings");
      return null !== t
        ? JSON.parse(t)
        : { tempUnit: "celsius", windUnit: "kph", pressureUnit: "hpa" };
    }

    // Fetch Wether Data From wether api =>
    static async fetchSearchResults(t) {
      try {
        if ("" === t) throw new Error("Empty search query.");
        const e = await fetch(
          `https://api.weatherapi.com/v1/search.json?key=${this.#t}&q=${t}`
        );
        if (!e.ok) throw new Error("Could not fetch resources.");
        const n = await e.json();
        if (0 === n.length) throw new Error("No location found.");
        return n;
      } catch (t) {
        return null;
      }
    }

    // Fetch wether relative data =>
    static async fetchWeather(t) {
      let { name: e, lat: n, lon: a } = t;
      try {
        const t = await Promise.all([
          fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${this.#t}&q=${
              e || `${n},${a}`
            }&aqi=yes&days=1`
          ),
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${a}&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=auto&forecast_days=8`
          ),
          fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${n}&longitude=${a}&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&temperature_unit=fahrenheit&timezone=auto&forecast_days=8`
          ),
        ]);
        if (t.some((t) => !t.ok)) throw new Error("Could not fetch resources.");
        const i = await Promise.all(t.map((t) => t.json()));
        return {
          location: {
            name: i[0].location.name,
            country: i[0].location.country,
          },
          current: this.#r(i),
          day_forecast: this.#o(i),
          week_forecast: this.#s(i),
        };
      } catch (t) {
        return null;
      }
    }
  }

  //  Here will use class Here
  class X {
    static #u(t, e) {
      let { name: n, country: a } = t;
      (document.querySelector(
        ".current-weather-card"
      ).innerHTML = `\n            <section class="main-info">\n                <header>\n                    <h1 class="location">\n                        <i class="fa-solid fa-location-dot"></i>\n                        <span class="name">${n}</span>,\n                        <span class="country">${a}</span>\n                    </h1>\n                    <p class="date-time">\n                        <i class="fa-regular fa-calendar"></i>\n                        <span class="date" data-key="date">${e.date}</span>\n                        <i class="fa-regular fa-clock"></i>\n                        <span class="time" data-key="time">${e.time}</span>\n                    </p>\n                </header>\n\n                <section class="current-condition">\n                    <i class="wi ${e.condition.icon} wi-fw"></i>\n                    <p class="temp temp-celsius">\n                        <span class="temp-value">${e.temp_c}</span>\n                        <sup class="temp-unit">°C</sup>\n                    </p>\n                    <p class="temp temp-fahrenheit">\n                        <span class="temp-value">${e.temp_f}</span>\n                        <sup class="temp-unit">°F</sup>\n                    </p>\n                    <p class="condition-text">${e.condition.text}</p>\n                </section>\n            </section>\n\n            <hr />\n\n            <section class="weather-details">\n                <h2>Details</h2>\n\n                <div class="weather-detail">\n                    <i class="wi wi-thermometer"></i>\n                    <h3>Feels Like</h3>\n                    <p class="weather-detail-value temp temp-celsius">\n                        <span class="temp-value">${e.feelslike_c}</span>\n                        <sup class="temp-unit">°C</sup>\n                    </p>\n                    <p class="weather-detail-value temp temp-fahrenheit">\n                        <span class="temp-value">${e.feelslike_f}</span>\n                        <sup class="temp-unit">°F</sup>\n                    </p>\n                </div>\n\n                <div class="weather-detail">\n                    <i class="wi wi-rain"></i>\n                    <h3>Chance of Rain</h3>\n                    <p class="weather-detail-value">${e.rain_chance}%</p>\n                </div>\n\n                <div class="weather-detail">\n                    <i class="wi wi-day-sunny"></i>\n                    <h3>UV Index</h3>\n                    <p class="weather-detail-value">${e.uv_index}</p>\n                </div>\n\n                <div class="weather-detail">\n                    <i class="wi wi-strong-wind"></i>\n                    <h3>Wind Speed</h3>\n                    <p class="weather-detail-value wind-kph">${e.wind_kph} km/h</p>\n                    <p class="weather-detail-value wind-mph">${e.wind_mph} mph</p>\n                </div>\n            </section>\n        `),
        (document.querySelector(
          ".additional-details-card"
        ).innerHTML = `\n<h2>Additional Details</h2>\n\n<div class="weather-detail">\n                <i class="wi wi-humidity"></i>\n                <h3>Humidity</h3>\n                <p class="weather-detail-value">${
          e.humidity
        }%</p>\n</div>\n\n<div class="weather-detail">\n<i class="wi wi-barometer"></i>\n                <h3>Pressure</h3>\n                <p class="weather-detail-value pressure-hpa">${
          e.pressure_hpa
        } hPa</p>\n<p class="weather-detail-value pressure-in">${
          e.pressure_in
        } in</p>\n</div>\n\n<div class="weather-detail">\n<i class="wi wi-windy"></i>\n                <h3>Air Quality</h3>\n                <p class="weather-detail-value">${
          e.aqi
        }</p>\n</div>\n\n<div class="weather-detail">\n<i class="wi wi-horizon-alt"></i>\n                <h3>Sunrise / Sunset</h3>\n                <p class="weather-detail-value sunrise-sunset">\n                    <span class="sunrise">${e.sunrise.replace(
          /^0+/,
          ""
        )}</span> /\n <span class="sunset">${e.sunset.replace(
          /^0+/,
          ""
        )}</span>\n</p>\n</div>\n`);
    }
    static #d(t) {
      let e = "";
      t.forEach((t) => {
        e += `\n                <div class="forecast-hour">\n                    <p class="hour">${t.time}</p>\n                    <i class="wi ${t.condition_icon} wi-fw"></i>\n                    <p class="temp temp-celsius">\n                        <span class="temp-value">${t.temp_c}</span>\n                        <sup class="temp-unit">°C</sup>\n                    </p>\n                    <p class="temp temp-fahrenheit">\n                        <span class="temp-value">${t.temp_f}</span>\n                        <sup class="temp-unit">°F</sup>\n                    </p>\n                </div>\n            `;
      }),
        (document.querySelector(".forecast-hours").innerHTML = e);
    }
    static #c(t) {
      let e = "";
      t.forEach((t) => {
        e += `\n                <div class="forecast-day">\n                    <h3 class="day-of-week">${t.day}</h3>\n\n                    <div class="condition">\n                        <i class="wi ${t.condition.icon}"></i>\n                        <p class="condition-text">${t.condition.text}</p>\n                    </div>\n\n                    <div class="temp-range">\n                        <p class="temp temp-celsius temp-max">\n                            <span class="temp-value">${t.temp_max_c}</span>\n                            <sup class="temp-unit">°C</sup>\n                        </p>\n                        <p class="temp temp-fahrenheit temp-max">\n                            <span class="temp-value">${t.temp_max_f}</span>\n                            <sup class="temp-unit">°F</sup>\n                        </p>\n                        <p class="temp temp-celsius temp-min">\n                            <span class="temp-value">${t.temp_min_c}</span>\n                            <sup class="temp-unit">°C</sup>\n                        </p>\n                        <p class="temp temp-fahrenheit temp-min">\n                            <span class="temp-value">${t.temp_min_f}</span>\n                            <sup class="temp-unit">°F</sup>\n                        </p>\n                    </div>\n                </div>  \n            `;
      }),
        (document.querySelector(".forecast-days").innerHTML = e);
    }

    // Show data in dom
    static showSearchResults(t) {
      const e = document.querySelector(".search-bar input"),
        n = document.querySelector(".search-results-card"),
        a = document.querySelector(".search-results");
      if (null === t)
        return (
          (e.dataset.name = ""),
          (e.dataset.lat = ""),
          (e.dataset.lon = ""),
          void (e.value.length < 1
            ? n.classList.add("hidden")
            : (n.classList.remove("hidden"),
              (a.innerHTML =
                '<p class="search-result error">No location found.</p>')))
        );
      let i = "";
      t.forEach((t, n) => {
        let { name: a, region: r, country: o, lat: s, lon: u } = t;
        0 === n &&
          ((e.dataset.name = `${a}, ${r}, ${o}`),
          (e.dataset.lat = s),
          (e.dataset.lon = u)),
          (i += `\n                <p\n                    class="search-result"\n                    data-name="${a}, ${r}, ${o}"\n                    data-lat="${s}" data-lon="${u}"\n                >\n                    <i class="fa-solid fa-location-dot"></i>\n                    <span class="name">${a}</span>,\n                    <span class="country">${o}</span>\n                </p>\n            `);
      }),
        n.classList.remove("hidden"),
        (a.innerHTML = i);
    }

    static getSearchResult(t) {
      const e = document.querySelector(".search-bar input");
      Object.keys(t.dataset).forEach((n) => {
        e.dataset[n] = t.dataset[n];
      }),
        (e.value = t.dataset.name);
    }

    // Show data after update setting
    static updateSettings(t) {
      const e = [];
      Object.values(t).forEach((t) => {
        (document.querySelector(`input[value='${t}']`).checked = !0),
          e.push(`unit-${t}`);
      }),
        (document.documentElement.className = e.join(" "));
    }

    static toggleLoader(t) {
      document.querySelector(".loader").classList.toggle("hidden", !t);
    }

    static toggleDropdown(t) {
      document.querySelector(".dropdown").classList.toggle("hidden", !t),
        document.querySelector(".overlay").classList.toggle("hidden", !t);
    }

    // Show updated wether Here =>
    static updateWeather(t) {
      (document.querySelector(".search-bar input").value = ""),
        document.querySelector(".search-results-card").classList.add("hidden"),
        this.#u(t.location, t.current),
        this.#d(t.day_forecast),
        this.#c(t.week_forecast);
    }
  }

  // Let's create class Here =>
  new (class {
    #l;
    #h;
    async #m() {
      X.toggleLoader(!0);
      const t = await I.fetchWeather(this.#l);
      null !== t && (X.updateWeather(t), X.toggleLoader(!1));
    }
    async init() {
      (this.#l = await I.getUserLocation()),
        (this.#h = I.getUserSettings()),
        this.#m(),
        X.updateSettings(this.#h);
      const t = document.querySelector(".search-bar"),
        e = document.querySelector(".search-bar input"),
        n = document.querySelector(".search-results"),
        a = document.querySelector(".btn-open-settings"),
        i = document.querySelector(".settings .dropdown"),
        r = document.querySelector(".overlay");
      e.addEventListener("input", async () => {
        const t = await I.fetchSearchResults(e.value);
        X.showSearchResults(t);
      }),
        n.addEventListener("click", (t) => {
          let { target: e } = t;
          e.matches(".search-result") && X.getSearchResult(e);
        }),
        t.addEventListener("submit", async (t) => {
          t.preventDefault(),
            "" !== e.dataset.name &&
              ((this.#l = { ...e.dataset }),
              localStorage.setItem("location", JSON.stringify(this.#l)),
              this.#m());
        }),
        a.addEventListener("click", () => {
          X.toggleDropdown(!0);
        }),
        r.addEventListener("click", () => {
          X.toggleDropdown(!1);
        }),
        i.addEventListener("change", () => {
          document.querySelectorAll(".settings input:checked").forEach((t) => {
            this.#h[`${t.name}Unit`] = t.value;
          }),
            localStorage.setItem("settings", JSON.stringify(this.#h)),
            X.updateSettings(this.#h);
        });
    }
  })().init();
})();
