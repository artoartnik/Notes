(function() {
  var n$$1 = this;
  var t = n$$1._;
  var r = {};
  var e$$1 = Array.prototype;
  var u = Object.prototype;
  var i$$0 = Function.prototype;
  var a = e$$1.push;
  var o = e$$1.slice;
  var c = e$$1.concat;
  var l = u.toString;
  var f = u.hasOwnProperty;
  var s$$0 = e$$1.forEach;
  var p = e$$1.map;
  var v = e$$1.reduce;
  var h = e$$1.reduceRight;
  var g = e$$1.filter;
  var d = e$$1.every;
  var m = e$$1.some;
  var y = e$$1.indexOf;
  var b = e$$1.lastIndexOf;
  var x = Array.isArray;
  var _ = Object.keys;
  var j = i$$0.bind;
  var w = function(n) {
    return n instanceof w ? n : this instanceof w ? (this._wrapped = n, void 0) : new w(n);
  };
  if ("undefined" != typeof exports) {
    if ("undefined" != typeof module) {
      if (module.exports) {
        exports = module.exports = w;
      }
    }
    exports._ = w;
  } else {
    n$$1._ = w;
  }
  w.VERSION = "1.4.3";
  var A = w.each = w.forEach = function(n, t, e) {
    if (null != n) {
      if (s$$0 && n.forEach === s$$0) {
        n.forEach(t, e);
      } else {
        if (n.length === +n.length) {
          var u = 0;
          var i = n.length;
          for (;i > u;u++) {
            if (t.call(e, n[u], u, n) === r) {
              return;
            }
          }
        } else {
          var a;
          for (a in n) {
            if (w.has(n, a) && t.call(e, n[a], a, n) === r) {
              return;
            }
          }
        }
      }
    }
  };
  w.map = w.collect = function(n$$0, t, r) {
    var e = [];
    return null == n$$0 ? e : p && n$$0.map === p ? n$$0.map(t, r) : (A(n$$0, function(n, u, i) {
      e[e.length] = t.call(r, n, u, i);
    }), e);
  };
  var O = "Reduce of empty array with no initial value";
  w.reduce = w.foldl = w.inject = function(n$$0, t, r, e) {
    var u = arguments.length > 2;
    if (null == n$$0 && (n$$0 = []), v && n$$0.reduce === v) {
      return e && (t = w.bind(t, e)), u ? n$$0.reduce(t, r) : n$$0.reduce(t);
    }
    if (A(n$$0, function(n, i, a) {
      if (u) {
        r = t.call(e, r, n, i, a);
      } else {
        r = n;
        u = true;
      }
    }), !u) {
      throw new TypeError(O);
    }
    return r;
  };
  w.reduceRight = w.foldr = function(n, t, r, e) {
    var u = arguments.length > 2;
    if (null == n && (n = []), h && n.reduceRight === h) {
      return e && (t = w.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t);
    }
    var i = n.length;
    if (i !== +i) {
      var a = w.keys(n);
      i = a.length;
    }
    if (A(n, function(o, c, l) {
      c = a ? a[--i] : --i;
      if (u) {
        r = t.call(e, r, n[c], c, l);
      } else {
        r = n[c];
        u = true;
      }
    }), !u) {
      throw new TypeError(O);
    }
    return r;
  };
  w.find = w.detect = function(n$$0, t, r) {
    var e;
    return E(n$$0, function(n, u, i) {
      return t.call(r, n, u, i) ? (e = n, true) : void 0;
    }), e;
  };
  w.filter = w.select = function(n$$0, t, r) {
    var e = [];
    return null == n$$0 ? e : g && n$$0.filter === g ? n$$0.filter(t, r) : (A(n$$0, function(n, u, i) {
      if (t.call(r, n, u, i)) {
        e[e.length] = n;
      }
    }), e);
  };
  w.reject = function(n$$0, t, r) {
    return w.filter(n$$0, function(n, e, u) {
      return!t.call(r, n, e, u);
    }, r);
  };
  w.every = w.all = function(n$$0, t, e) {
    if (!t) {
      t = w.identity;
    }
    var u = true;
    return null == n$$0 ? u : d && n$$0.every === d ? n$$0.every(t, e) : (A(n$$0, function(n, i, a) {
      return(u = u && t.call(e, n, i, a)) ? void 0 : r;
    }), !!u);
  };
  var E = w.some = w.any = function(n$$0, t, e) {
    if (!t) {
      t = w.identity;
    }
    var u = false;
    return null == n$$0 ? u : m && n$$0.some === m ? n$$0.some(t, e) : (A(n$$0, function(n, i, a) {
      return u || (u = t.call(e, n, i, a)) ? r : void 0;
    }), !!u);
  };
  w.contains = w.include = function(n$$0, t) {
    return null == n$$0 ? false : y && n$$0.indexOf === y ? -1 != n$$0.indexOf(t) : E(n$$0, function(n) {
      return n === t;
    });
  };
  w.invoke = function(n$$0, t) {
    var r = o.call(arguments, 2);
    return w.map(n$$0, function(n) {
      return(w.isFunction(t) ? t : n[t]).apply(n, r);
    });
  };
  w.pluck = function(n$$0, t) {
    return w.map(n$$0, function(n) {
      return n[t];
    });
  };
  w.where = function(n$$0, t) {
    return w.isEmpty(t) ? [] : w.filter(n$$0, function(n) {
      var r;
      for (r in t) {
        if (t[r] !== n[r]) {
          return false;
        }
      }
      return true;
    });
  };
  w.max = function(n$$0, t, r) {
    if (!t && (w.isArray(n$$0) && (n$$0[0] === +n$$0[0] && 65535 > n$$0.length))) {
      return Math.max.apply(Math, n$$0);
    }
    if (!t && w.isEmpty(n$$0)) {
      return-1 / 0;
    }
    var e = {
      computed : -1 / 0,
      value : -1 / 0
    };
    return A(n$$0, function(n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      if (a >= e.computed) {
        e = {
          value : n,
          computed : a
        };
      }
    }), e.value;
  };
  w.min = function(n$$0, t, r) {
    if (!t && (w.isArray(n$$0) && (n$$0[0] === +n$$0[0] && 65535 > n$$0.length))) {
      return Math.min.apply(Math, n$$0);
    }
    if (!t && w.isEmpty(n$$0)) {
      return 1 / 0;
    }
    var e = {
      computed : 1 / 0,
      value : 1 / 0
    };
    return A(n$$0, function(n, u, i) {
      var a = t ? t.call(r, n, u, i) : n;
      if (e.computed > a) {
        e = {
          value : n,
          computed : a
        };
      }
    }), e.value;
  };
  w.shuffle = function(n$$0) {
    var t;
    var r = 0;
    var e = [];
    return A(n$$0, function(n) {
      t = w.random(r++);
      e[r - 1] = e[t];
      e[t] = n;
    }), e;
  };
  var F = function(n) {
    return w.isFunction(n) ? n : function(t) {
      return t[n];
    };
  };
  w.sortBy = function(n$$0, t$$0, r$$0) {
    var e$$0 = F(t$$0);
    return w.pluck(w.map(n$$0, function(n, t, u) {
      return{
        value : n,
        index : t,
        criteria : e$$0.call(r$$0, n, t, u)
      };
    }).sort(function(n, t) {
      var r = n.criteria;
      var e = t.criteria;
      if (r !== e) {
        if (r > e || void 0 === r) {
          return 1;
        }
        if (e > r || void 0 === e) {
          return-1;
        }
      }
      return n.index < t.index ? -1 : 1;
    }), "value");
  };
  var k = function(n, t$$0, r, e) {
    var u = {};
    var i = F(t$$0 || w.identity);
    return A(n, function(t, a) {
      var o = i.call(r, t, a, n);
      e(u, o, t);
    }), u;
  };
  w.groupBy = function(n$$0, t$$0, r$$0) {
    return k(n$$0, t$$0, r$$0, function(n, t, r) {
      (w.has(n, t) ? n[t] : n[t] = []).push(r);
    });
  };
  w.countBy = function(n$$0, t$$0, r) {
    return k(n$$0, t$$0, r, function(n, t) {
      if (!w.has(n, t)) {
        n[t] = 0;
      }
      n[t]++;
    });
  };
  w.sortedIndex = function(n, t, r, e) {
    r = null == r ? w.identity : F(r);
    var u = r.call(e, t);
    var i = 0;
    var a = n.length;
    for (;a > i;) {
      var o = i + a >>> 1;
      if (u > r.call(e, n[o])) {
        i = o + 1;
      } else {
        a = o;
      }
    }
    return i;
  };
  w.toArray = function(n) {
    return n ? w.isArray(n) ? o.call(n) : n.length === +n.length ? w.map(n, w.identity) : w.values(n) : [];
  };
  w.size = function(n) {
    return null == n ? 0 : n.length === +n.length ? n.length : w.keys(n).length;
  };
  w.first = w.head = w.take = function(n, t, r) {
    return null == n ? void 0 : null == t || r ? n[0] : o.call(n, 0, t);
  };
  w.initial = function(n, t, r) {
    return o.call(n, 0, n.length - (null == t || r ? 1 : t));
  };
  w.last = function(n, t, r) {
    return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0));
  };
  w.rest = w.tail = w.drop = function(n, t, r) {
    return o.call(n, null == t || r ? 1 : t);
  };
  w.compact = function(n) {
    return w.filter(n, w.identity);
  };
  var R = function(n$$0, t, r) {
    return A(n$$0, function(n) {
      if (w.isArray(n)) {
        if (t) {
          a.apply(r, n);
        } else {
          R(n, t, r);
        }
      } else {
        r.push(n);
      }
    }), r;
  };
  w.flatten = function(n, t) {
    return R(n, t, []);
  };
  w.without = function(n) {
    return w.difference(n, o.call(arguments, 1));
  };
  w.uniq = w.unique = function(n, t, r$$0, e$$0) {
    if (w.isFunction(t)) {
      e$$0 = r$$0;
      r$$0 = t;
      t = false;
    }
    var u = r$$0 ? w.map(n, r$$0, e$$0) : n;
    var i = [];
    var a = [];
    return A(u, function(r, e) {
      if (!(t ? e && a[a.length - 1] === r : w.contains(a, r))) {
        a.push(r);
        i.push(n[e]);
      }
    }), i;
  };
  w.union = function() {
    return w.uniq(c.apply(e$$1, arguments));
  };
  w.intersection = function(n$$0) {
    var t$$0 = o.call(arguments, 1);
    return w.filter(w.uniq(n$$0), function(n) {
      return w.every(t$$0, function(t) {
        return w.indexOf(t, n) >= 0;
      });
    });
  };
  w.difference = function(n$$0) {
    var t = c.apply(e$$1, o.call(arguments, 1));
    return w.filter(n$$0, function(n) {
      return!w.contains(t, n);
    });
  };
  w.zip = function() {
    var n = o.call(arguments);
    var t = w.max(w.pluck(n, "length"));
    var r = Array(t);
    var e = 0;
    for (;t > e;e++) {
      r[e] = w.pluck(n, "" + e);
    }
    return r;
  };
  w.object = function(n, t) {
    if (null == n) {
      return{};
    }
    var r = {};
    var e = 0;
    var u = n.length;
    for (;u > e;e++) {
      if (t) {
        r[n[e]] = t[e];
      } else {
        r[n[e][0]] = n[e][1];
      }
    }
    return r;
  };
  w.indexOf = function(n, t, r) {
    if (null == n) {
      return-1;
    }
    var e = 0;
    var u = n.length;
    if (r) {
      if ("number" != typeof r) {
        return e = w.sortedIndex(n, t), n[e] === t ? e : -1;
      }
      e = 0 > r ? Math.max(0, u + r) : r;
    }
    if (y && n.indexOf === y) {
      return n.indexOf(t, r);
    }
    for (;u > e;e++) {
      if (n[e] === t) {
        return e;
      }
    }
    return-1;
  };
  w.lastIndexOf = function(n, t, r) {
    if (null == n) {
      return-1;
    }
    var e = null != r;
    if (b && n.lastIndexOf === b) {
      return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t);
    }
    var u = e ? r : n.length;
    for (;u--;) {
      if (n[u] === t) {
        return u;
      }
    }
    return-1;
  };
  w.range = function(n, t, r) {
    if (1 >= arguments.length) {
      t = n || 0;
      n = 0;
    }
    r = arguments[2] || 1;
    var e = Math.max(Math.ceil((t - n) / r), 0);
    var u = 0;
    var i = Array(e);
    for (;e > u;) {
      i[u++] = n;
      n += r;
    }
    return i;
  };
  var I = function() {
  };
  w.bind = function(n, t) {
    var r;
    var e;
    if (n.bind === j && j) {
      return j.apply(n, o.call(arguments, 1));
    }
    if (!w.isFunction(n)) {
      throw new TypeError;
    }
    return r = o.call(arguments, 2), e = function() {
      if (!(this instanceof e)) {
        return n.apply(t, r.concat(o.call(arguments)));
      }
      I.prototype = n.prototype;
      var u = new I;
      I.prototype = null;
      var i = n.apply(u, r.concat(o.call(arguments)));
      return Object(i) === i ? i : u;
    };
  };
  w.bindAll = function(n) {
    var t$$0 = o.call(arguments, 1);
    return 0 == t$$0.length && (t$$0 = w.functions(n)), A(t$$0, function(t) {
      n[t] = w.bind(n[t], n);
    }), n;
  };
  w.memoize = function(n, t) {
    var r = {};
    return t || (t = w.identity), function() {
      var e = t.apply(this, arguments);
      return w.has(r, e) ? r[e] : r[e] = n.apply(this, arguments);
    };
  };
  w.delay = function(n, t) {
    var r = o.call(arguments, 2);
    return setTimeout(function() {
      return n.apply(null, r);
    }, t);
  };
  w.defer = function(n) {
    return w.delay.apply(w, [n, 1].concat(o.call(arguments, 1)));
  };
  w.throttle = function(n, t) {
    var r;
    var e;
    var u;
    var i;
    var a = 0;
    var o = function() {
      a = new Date;
      u = null;
      i = n.apply(r, e);
    };
    return function() {
      var c = new Date;
      var l = t - (c - a);
      return r = this, e = arguments, 0 >= l ? (clearTimeout(u), u = null, a = c, i = n.apply(r, e)) : u || (u = setTimeout(o, l)), i;
    };
  };
  w.debounce = function(n, t, r) {
    var e;
    var u;
    return function() {
      var i = this;
      var a = arguments;
      var o = function() {
        e = null;
        if (!r) {
          u = n.apply(i, a);
        }
      };
      var c = r && !e;
      return clearTimeout(e), e = setTimeout(o, t), c && (u = n.apply(i, a)), u;
    };
  };
  w.once = function(n) {
    var t;
    var r = false;
    return function() {
      return r ? t : (r = true, t = n.apply(this, arguments), n = null, t);
    };
  };
  w.wrap = function(n, t) {
    return function() {
      var r = [n];
      return a.apply(r, arguments), t.apply(this, r);
    };
  };
  w.compose = function() {
    var n = arguments;
    return function() {
      var t = arguments;
      var r = n.length - 1;
      for (;r >= 0;r--) {
        t = [n[r].apply(this, t)];
      }
      return t[0];
    };
  };
  w.after = function(n, t) {
    return 0 >= n ? t() : function() {
      return 1 > --n ? t.apply(this, arguments) : void 0;
    };
  };
  w.keys = _ || function(n) {
    if (n !== Object(n)) {
      throw new TypeError("Invalid object");
    }
    var t = [];
    var r;
    for (r in n) {
      if (w.has(n, r)) {
        t[t.length] = r;
      }
    }
    return t;
  };
  w.values = function(n) {
    var t = [];
    var r;
    for (r in n) {
      if (w.has(n, r)) {
        t.push(n[r]);
      }
    }
    return t;
  };
  w.pairs = function(n) {
    var t = [];
    var r;
    for (r in n) {
      if (w.has(n, r)) {
        t.push([r, n[r]]);
      }
    }
    return t;
  };
  w.invert = function(n) {
    var t = {};
    var r;
    for (r in n) {
      if (w.has(n, r)) {
        t[n[r]] = r;
      }
    }
    return t;
  };
  w.functions = w.methods = function(n) {
    var t = [];
    var r;
    for (r in n) {
      if (w.isFunction(n[r])) {
        t.push(r);
      }
    }
    return t.sort();
  };
  w.extend = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) {
        var r;
        for (r in t) {
          n[r] = t[r];
        }
      }
    }), n;
  };
  w.pick = function(n) {
    var t = {};
    var r$$0 = c.apply(e$$1, o.call(arguments, 1));
    return A(r$$0, function(r) {
      if (r in n) {
        t[r] = n[r];
      }
    }), t;
  };
  w.omit = function(n) {
    var t = {};
    var r = c.apply(e$$1, o.call(arguments, 1));
    var u;
    for (u in n) {
      if (!w.contains(r, u)) {
        t[u] = n[u];
      }
    }
    return t;
  };
  w.defaults = function(n) {
    return A(o.call(arguments, 1), function(t) {
      if (t) {
        var r;
        for (r in t) {
          if (null == n[r]) {
            n[r] = t[r];
          }
        }
      }
    }), n;
  };
  w.clone = function(n) {
    return w.isObject(n) ? w.isArray(n) ? n.slice() : w.extend({}, n) : n;
  };
  w.tap = function(n, t) {
    return t(n), n;
  };
  var S = function(n, t, r, e) {
    if (n === t) {
      return 0 !== n || 1 / n == 1 / t;
    }
    if (null == n || null == t) {
      return n === t;
    }
    if (n instanceof w) {
      n = n._wrapped;
    }
    if (t instanceof w) {
      t = t._wrapped;
    }
    var u = l.call(n);
    if (u != l.call(t)) {
      return false;
    }
    switch(u) {
      case "[object String]":
        return n == t + "";
      case "[object Number]":
        return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t;
      case "[object Date]":
      ;
      case "[object Boolean]":
        return+n == +t;
      case "[object RegExp]":
        return n.source == t.source && (n.global == t.global && (n.multiline == t.multiline && n.ignoreCase == t.ignoreCase));
    }
    if ("object" != typeof n || "object" != typeof t) {
      return false;
    }
    var i = r.length;
    for (;i--;) {
      if (r[i] == n) {
        return e[i] == t;
      }
    }
    r.push(n);
    e.push(t);
    var a = 0;
    var o = true;
    if ("[object Array]" == u) {
      if (a = n.length, o = a == t.length) {
        for (;a-- && (o = S(n[a], t[a], r, e));) {
        }
      }
    } else {
      var c = n.constructor;
      var f = t.constructor;
      if (c !== f && !(w.isFunction(c) && (c instanceof c && (w.isFunction(f) && f instanceof f)))) {
        return false;
      }
      var s;
      for (s in n) {
        if (w.has(n, s) && (a++, !(o = w.has(t, s) && S(n[s], t[s], r, e)))) {
          break;
        }
      }
      if (o) {
        for (s in t) {
          if (w.has(t, s) && !a--) {
            break;
          }
        }
        o = !a;
      }
    }
    return r.pop(), e.pop(), o;
  };
  w.isEqual = function(n, t) {
    return S(n, t, [], []);
  };
  w.isEmpty = function(n) {
    if (null == n) {
      return true;
    }
    if (w.isArray(n) || w.isString(n)) {
      return 0 === n.length;
    }
    var t;
    for (t in n) {
      if (w.has(n, t)) {
        return false;
      }
    }
    return true;
  };
  w.isElement = function(n) {
    return!(!n || 1 !== n.nodeType);
  };
  w.isArray = x || function(n) {
    return "[object Array]" == l.call(n);
  };
  w.isObject = function(n) {
    return n === Object(n);
  };
  A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(n) {
    w["is" + n] = function(t) {
      return l.call(t) == "[object " + n + "]";
    };
  });
  if (!w.isArguments(arguments)) {
    w.isArguments = function(n) {
      return!(!n || !w.has(n, "callee"));
    };
  }
  w.isFunction = function(n) {
    return "function" == typeof n;
  };
  w.isFinite = function(n) {
    return isFinite(n) && !isNaN(parseFloat(n));
  };
  w.isNaN = function(n) {
    return w.isNumber(n) && n != +n;
  };
  w.isBoolean = function(n) {
    return n === true || (n === false || "[object Boolean]" == l.call(n));
  };
  w.isNull = function(n) {
    return null === n;
  };
  w.isUndefined = function(n) {
    return void 0 === n;
  };
  w.has = function(n, t) {
    return f.call(n, t);
  };
  w.noConflict = function() {
    return n$$1._ = t, this;
  };
  w.identity = function(n) {
    return n;
  };
  w.times = function(n, t, r) {
    var e = Array(n);
    var u = 0;
    for (;n > u;u++) {
      e[u] = t.call(r, u);
    }
    return e;
  };
  w.random = function(n, t) {
    return null == t && (t = n, n = 0), n + (0 | Math.random() * (t - n + 1));
  };
  var T = {
    escape : {
      "&" : "&amp;",
      "<" : "&lt;",
      ">" : "&gt;",
      '"' : "&quot;",
      "'" : "&#x27;",
      "/" : "&#x2F;"
    }
  };
  T.unescape = w.invert(T.escape);
  var M = {
    escape : RegExp("[" + w.keys(T.escape).join("") + "]", "g"),
    unescape : RegExp("(" + w.keys(T.unescape).join("|") + ")", "g")
  };
  w.each(["escape", "unescape"], function(n) {
    w[n] = function(t$$0) {
      return null == t$$0 ? "" : ("" + t$$0).replace(M[n], function(t) {
        return T[n][t];
      });
    };
  });
  w.result = function(n, t) {
    if (null == n) {
      return null;
    }
    var r = n[t];
    return w.isFunction(r) ? r.call(n) : r;
  };
  w.mixin = function(n$$0) {
    A(w.functions(n$$0), function(t) {
      var r = w[t] = n$$0[t];
      w.prototype[t] = function() {
        var n = [this._wrapped];
        return a.apply(n, arguments), z.call(this, r.apply(w, n));
      };
    });
  };
  var N = 0;
  w.uniqueId = function(n) {
    var t = "" + ++N;
    return n ? n + t : t;
  };
  w.templateSettings = {
    evaluate : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape : /<%-([\s\S]+?)%>/g
  };
  var q = /(.)^/;
  var B = {
    "'" : "'",
    "\\" : "\\",
    "\r" : "r",
    "\n" : "n",
    "\t" : "t",
    "\u2028" : "u2028",
    "\u2029" : "u2029"
  };
  var D = /\\|'|\r|\n|\t|\u2028|\u2029/g;
  w.template = function(n$$0, t$$0, r$$0) {
    r$$0 = w.defaults({}, r$$0, w.templateSettings);
    var e$$0 = RegExp([(r$$0.escape || q).source, (r$$0.interpolate || q).source, (r$$0.evaluate || q).source].join("|") + "|$", "g");
    var u = 0;
    var i = "__p+='";
    n$$0.replace(e$$0, function(t, r, e, a, o) {
      return i += n$$0.slice(u, o).replace(D, function(n) {
        return "\\" + B[n];
      }), r && (i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), a && (i += "';\n" + a + "\n__p+='"), u = o + t.length, t;
    });
    i += "';\n";
    if (!r$$0.variable) {
      i = "with(obj||{}){\n" + i + "}\n";
    }
    i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
    try {
      var a$$0 = Function(r$$0.variable || "obj", "_", i);
    } catch (o$$0) {
      throw o$$0.source = i, o$$0;
    }
    if (t$$0) {
      return a$$0(t$$0, w);
    }
    var c = function(n) {
      return a$$0.call(this, n, w);
    };
    return c.source = "function(" + (r$$0.variable || "obj") + "){\n" + i + "}", c;
  };
  w.chain = function(n) {
    return w(n).chain();
  };
  var z = function(n) {
    return this._chain ? w(n).chain() : n;
  };
  w.mixin(w);
  A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
    var t = e$$1[n];
    w.prototype[n] = function() {
      var r = this._wrapped;
      return t.apply(r, arguments), "shift" != n && "splice" != n || (0 !== r.length || delete r[0]), z.call(this, r);
    };
  });
  A(["concat", "join", "slice"], function(n) {
    var t = e$$1[n];
    w.prototype[n] = function() {
      return z.call(this, t.apply(this._wrapped, arguments));
    };
  });
  w.extend(w.prototype, {
    chain : function() {
      return this._chain = true, this;
    },
    value : function() {
      return this._wrapped;
    }
  });
}).call(this);

