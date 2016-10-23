(function(e$$2, t) {
  function _(e$$0) {
    var t = M[e$$0] = {};
    return v.each(e$$0.split(y$$1), function(e, n) {
      t[n] = true;
    }), t;
  }
  function H(e, n, r) {
    if (r === t && e.nodeType === 1) {
      var i = "data-" + n.replace(P, "-$1").toLowerCase();
      r = e.getAttribute(i);
      if (typeof r == "string") {
        try {
          r = r === "true" ? true : r === "false" ? false : r === "null" ? null : +r + "" === r ? +r : D.test(r) ? v.parseJSON(r) : r;
        } catch (s) {
        }
        v.data(e, n, r);
      } else {
        r = t;
      }
    }
    return r;
  }
  function B(e) {
    var t;
    for (t in e) {
      if (t === "data" && v.isEmptyObject(e[t])) {
        continue;
      }
      if (t !== "toJSON") {
        return false;
      }
    }
    return true;
  }
  function et() {
    return false;
  }
  function tt() {
    return true;
  }
  function ut(e) {
    return!e || (!e.parentNode || e.parentNode.nodeType === 11);
  }
  function at(e, t) {
    do {
      e = e[t];
    } while (e && e.nodeType !== 1);
    return e;
  }
  function ft(e$$0, t, n) {
    t = t || 0;
    if (v.isFunction(t)) {
      return v.grep(e$$0, function(e, r) {
        var i = !!t.call(e, r, e);
        return i === n;
      });
    }
    if (t.nodeType) {
      return v.grep(e$$0, function(e, r) {
        return e === t === n;
      });
    }
    if (typeof t == "string") {
      var r$$0 = v.grep(e$$0, function(e) {
        return e.nodeType === 1;
      });
      if (it.test(t)) {
        return v.filter(t, r$$0, !n);
      }
      t = v.filter(t, r$$0);
    }
    return v.grep(e$$0, function(e, r) {
      return v.inArray(e, t) >= 0 === n;
    });
  }
  function lt(e) {
    var t = ct.split("|");
    var n = e.createDocumentFragment();
    if (n.createElement) {
      for (;t.length;) {
        n.createElement(t.pop());
      }
    }
    return n;
  }
  function Lt(e, t) {
    return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
  }
  function At(e, t) {
    if (t.nodeType !== 1 || !v.hasData(e)) {
      return;
    }
    var n;
    var r;
    var i;
    var s = v._data(e);
    var o = v._data(t, s);
    var u = s.events;
    if (u) {
      delete o.handle;
      o.events = {};
      for (n in u) {
        r = 0;
        i = u[n].length;
        for (;r < i;r++) {
          v.event.add(t, n, u[n][r]);
        }
      }
    }
    if (o.data) {
      o.data = v.extend({}, o.data);
    }
  }
  function Ot(e, t) {
    var n;
    if (t.nodeType !== 1) {
      return;
    }
    if (t.clearAttributes) {
      t.clearAttributes();
    }
    if (t.mergeAttributes) {
      t.mergeAttributes(e);
    }
    n = t.nodeName.toLowerCase();
    if (n === "object") {
      if (t.parentNode) {
        t.outerHTML = e.outerHTML;
      }
      if (v.support.html5Clone) {
        if (e.innerHTML) {
          if (!v.trim(t.innerHTML)) {
            t.innerHTML = e.innerHTML;
          }
        }
      }
    } else {
      if (n === "input" && Et.test(e.type)) {
        t.defaultChecked = t.checked = e.checked;
        if (t.value !== e.value) {
          t.value = e.value;
        }
      } else {
        if (n === "option") {
          t.selected = e.defaultSelected;
        } else {
          if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue;
          } else {
            if (n === "script") {
              if (t.text !== e.text) {
                t.text = e.text;
              }
            }
          }
        }
      }
    }
    t.removeAttribute(v.expando);
  }
  function Mt(e) {
    return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
  }
  function _t(e) {
    if (Et.test(e.type)) {
      e.defaultChecked = e.checked;
    }
  }
  function Qt(e, t) {
    if (t in e) {
      return t;
    }
    var n = t.charAt(0).toUpperCase() + t.slice(1);
    var r = t;
    var i = Jt.length;
    for (;i--;) {
      t = Jt[i] + n;
      if (t in e) {
        return t;
      }
    }
    return r;
  }
  function Gt(e, t) {
    return e = t || e, v.css(e, "display") === "none" || !v.contains(e.ownerDocument, e);
  }
  function Yt(e, t) {
    var n;
    var r;
    var i = [];
    var s = 0;
    var o = e.length;
    for (;s < o;s++) {
      n = e[s];
      if (!n.style) {
        continue;
      }
      i[s] = v._data(n, "olddisplay");
      if (t) {
        if (!i[s]) {
          if (n.style.display === "none") {
            n.style.display = "";
          }
        }
        if (n.style.display === "") {
          if (Gt(n)) {
            i[s] = v._data(n, "olddisplay", nn(n.nodeName));
          }
        }
      } else {
        r = Dt(n, "display");
        if (!i[s]) {
          if (r !== "none") {
            v._data(n, "olddisplay", r);
          }
        }
      }
    }
    s = 0;
    for (;s < o;s++) {
      n = e[s];
      if (!n.style) {
        continue;
      }
      if (!t || (n.style.display === "none" || n.style.display === "")) {
        n.style.display = t ? i[s] || "" : "none";
      }
    }
    return e;
  }
  function Zt(e, t, n) {
    var r = Rt.exec(t);
    return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }
  function en(e, t, n, r) {
    var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0;
    var s = 0;
    for (;i < 4;i += 2) {
      if (n === "margin") {
        s += v.css(e, n + $t[i], true);
      }
      if (r) {
        if (n === "content") {
          s -= parseFloat(Dt(e, "padding" + $t[i])) || 0;
        }
        if (n !== "margin") {
          s -= parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0;
        }
      } else {
        s += parseFloat(Dt(e, "padding" + $t[i])) || 0;
        if (n !== "padding") {
          s += parseFloat(Dt(e, "border" + $t[i] + "Width")) || 0;
        }
      }
    }
    return s;
  }
  function tn(e, t, n) {
    var r = t === "width" ? e.offsetWidth : e.offsetHeight;
    var i = true;
    var s = v.support.boxSizing && v.css(e, "boxSizing") === "border-box";
    if (r <= 0 || r == null) {
      r = Dt(e, t);
      if (r < 0 || r == null) {
        r = e.style[t];
      }
      if (Ut.test(r)) {
        return r;
      }
      i = s && (v.support.boxSizingReliable || r === e.style[t]);
      r = parseFloat(r) || 0;
    }
    return r + en(e, t, n || (s ? "border" : "content"), i) + "px";
  }
  function nn(e) {
    if (Wt[e]) {
      return Wt[e];
    }
    var t = v("<" + e + ">").appendTo(i$$2.body);
    var n = t.css("display");
    t.remove();
    if (n === "none" || n === "") {
      Pt = i$$2.body.appendChild(Pt || v.extend(i$$2.createElement("iframe"), {
        frameBorder : 0,
        width : 0,
        height : 0
      }));
      if (!Ht || !Pt.createElement) {
        Ht = (Pt.contentWindow || Pt.contentDocument).document;
        Ht.write("<!doctype html><html><body>");
        Ht.close();
      }
      t = Ht.body.appendChild(Ht.createElement(e));
      n = Dt(t, "display");
      i$$2.body.removeChild(Pt);
    }
    return Wt[e] = n, n;
  }
  function fn(e, t$$0, n, r) {
    var i$$0;
    if (v.isArray(t$$0)) {
      v.each(t$$0, function(t, i) {
        if (n || sn.test(e)) {
          r(e, i);
        } else {
          fn(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
        }
      });
    } else {
      if (!n && v.type(t$$0) === "object") {
        for (i$$0 in t$$0) {
          fn(e + "[" + i$$0 + "]", t$$0[i$$0], n, r);
        }
      } else {
        r(e, t$$0);
      }
    }
  }
  function Cn(e) {
    return function(t, n) {
      if (typeof t != "string") {
        n = t;
        t = "*";
      }
      var r;
      var i;
      var s;
      var o = t.toLowerCase().split(y$$1);
      var u = 0;
      var a = o.length;
      if (v.isFunction(n)) {
        for (;u < a;u++) {
          r = o[u];
          s = /^\+/.test(r);
          if (s) {
            r = r.substr(1) || "*";
          }
          i = e[r] = e[r] || [];
          i[s ? "unshift" : "push"](n);
        }
      }
    };
  }
  function kn(e, n, r, i, s, o) {
    s = s || n.dataTypes[0];
    o = o || {};
    o[s] = true;
    var u;
    var a = e[s];
    var f = 0;
    var l = a ? a.length : 0;
    var c = e === Sn;
    for (;f < l && (c || !u);f++) {
      u = a[f](n, r, i);
      if (typeof u == "string") {
        if (!c || o[u]) {
          u = t;
        } else {
          n.dataTypes.unshift(u);
          u = kn(e, n, r, i, u, o);
        }
      }
    }
    return(c || !u) && (!o["*"] && (u = kn(e, n, r, i, "*", o))), u;
  }
  function Ln(e, n) {
    var r;
    var i;
    var s = v.ajaxSettings.flatOptions || {};
    for (r in n) {
      if (n[r] !== t) {
        (s[r] ? e : i || (i = {}))[r] = n[r];
      }
    }
    if (i) {
      v.extend(true, e, i);
    }
  }
  function An(e, n, r) {
    var i;
    var s;
    var o;
    var u;
    var a = e.contents;
    var f = e.dataTypes;
    var l = e.responseFields;
    for (s in l) {
      if (s in r) {
        n[l[s]] = r[s];
      }
    }
    for (;f[0] === "*";) {
      f.shift();
      if (i === t) {
        i = e.mimeType || n.getResponseHeader("content-type");
      }
    }
    if (i) {
      for (s in a) {
        if (a[s] && a[s].test(i)) {
          f.unshift(s);
          break;
        }
      }
    }
    if (f[0] in r) {
      o = f[0];
    } else {
      for (s in r) {
        if (!f[0] || e.converters[s + " " + f[0]]) {
          o = s;
          break;
        }
        if (!u) {
          u = s;
        }
      }
      o = o || u;
    }
    if (o) {
      return o !== f[0] && f.unshift(o), r[o];
    }
  }
  function On(e, t) {
    var n;
    var r;
    var i;
    var s;
    var o = e.dataTypes.slice();
    var u = o[0];
    var a = {};
    var f = 0;
    if (e.dataFilter) {
      t = e.dataFilter(t, e.dataType);
    }
    if (o[1]) {
      for (n in e.converters) {
        a[n.toLowerCase()] = e.converters[n];
      }
    }
    for (;i = o[++f];) {
      if (i !== "*") {
        if (u !== "*" && u !== i) {
          n = a[u + " " + i] || a["* " + i];
          if (!n) {
            for (r in a) {
              s = r.split(" ");
              if (s[1] === i) {
                n = a[u + " " + s[0]] || a["* " + s[0]];
                if (n) {
                  if (n === true) {
                    n = a[r];
                  } else {
                    if (a[r] !== true) {
                      i = s[0];
                      o.splice(f--, 0, i);
                    }
                  }
                  break;
                }
              }
            }
          }
          if (n !== true) {
            if (n && e["throws"]) {
              t = n(t);
            } else {
              try {
                t = n(t);
              } catch (l) {
                return{
                  state : "parsererror",
                  error : n ? l : "No conversion from " + u + " to " + i
                };
              }
            }
          }
        }
        u = i;
      }
    }
    return{
      state : "success",
      data : t
    };
  }
  function Fn() {
    try {
      return new e$$2.XMLHttpRequest;
    } catch (t) {
    }
  }
  function In() {
    try {
      return new e$$2.ActiveXObject("Microsoft.XMLHTTP");
    } catch (t) {
    }
  }
  function $n() {
    return setTimeout(function() {
      qn = t;
    }, 0), qn = v.now();
  }
  function Jn(e, t$$0) {
    v.each(t$$0, function(t, n) {
      var r = (Vn[t] || []).concat(Vn["*"]);
      var i = 0;
      var s = r.length;
      for (;i < s;i++) {
        if (r[i].call(e, t, n)) {
          return;
        }
      }
    });
  }
  function Kn(e, t$$0, n$$0) {
    var r$$0;
    var i$$0 = 0;
    var s$$0 = 0;
    var o$$0 = Xn.length;
    var u = v.Deferred().always(function() {
      delete a.elem;
    });
    var a = function() {
      var t = qn || $n();
      var n = Math.max(0, f.startTime + f.duration - t);
      var r = n / f.duration || 0;
      var i = 1 - r;
      var s = 0;
      var o = f.tweens.length;
      for (;s < o;s++) {
        f.tweens[s].run(i);
      }
      return u.notifyWith(e, [f, i, n]), i < 1 && o ? n : (u.resolveWith(e, [f]), false);
    };
    var f = u.promise({
      elem : e,
      props : v.extend({}, t$$0),
      opts : v.extend(true, {
        specialEasing : {}
      }, n$$0),
      originalProperties : t$$0,
      originalOptions : n$$0,
      startTime : qn || $n(),
      duration : n$$0.duration,
      tweens : [],
      createTween : function(t, n, r) {
        var i = v.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
        return f.tweens.push(i), i;
      },
      stop : function(t) {
        var n = 0;
        var r = t ? f.tweens.length : 0;
        for (;n < r;n++) {
          f.tweens[n].run(1);
        }
        return t ? u.resolveWith(e, [f, t]) : u.rejectWith(e, [f, t]), this;
      }
    });
    var l = f.props;
    Qn(l, f.opts.specialEasing);
    for (;i$$0 < o$$0;i$$0++) {
      r$$0 = Xn[i$$0].call(f, e, l, f.opts);
      if (r$$0) {
        return r$$0;
      }
    }
    return Jn(f, l), v.isFunction(f.opts.start) && f.opts.start.call(e, f), v.fx.timer(v.extend(a, {
      anim : f,
      queue : f.opts.queue,
      elem : e
    })), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
  }
  function Qn(e, t) {
    var n;
    var r;
    var i;
    var s;
    var o;
    for (n in e) {
      r = v.camelCase(n);
      i = t[r];
      s = e[n];
      if (v.isArray(s)) {
        i = s[1];
        s = e[n] = s[0];
      }
      if (n !== r) {
        e[r] = s;
        delete e[n];
      }
      o = v.cssHooks[r];
      if (o && "expand" in o) {
        s = o.expand(s);
        delete e[r];
        for (n in s) {
          if (!(n in e)) {
            e[n] = s[n];
            t[n] = i;
          }
        }
      } else {
        t[r] = i;
      }
    }
  }
  function Gn(e, t$$0, n) {
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f;
    var l;
    var c;
    var h = this;
    var p = e.style;
    var d = {};
    var m = [];
    var g = e.nodeType && Gt(e);
    if (!n.queue) {
      l = v._queueHooks(e, "fx");
      if (l.unqueued == null) {
        l.unqueued = 0;
        c = l.empty.fire;
        l.empty.fire = function() {
          if (!l.unqueued) {
            c();
          }
        };
      }
      l.unqueued++;
      h.always(function() {
        h.always(function() {
          l.unqueued--;
          if (!v.queue(e, "fx").length) {
            l.empty.fire();
          }
        });
      });
    }
    if (e.nodeType === 1) {
      if ("height" in t$$0 || "width" in t$$0) {
        n.overflow = [p.overflow, p.overflowX, p.overflowY];
        if (v.css(e, "display") === "inline") {
          if (v.css(e, "float") === "none") {
            if (!v.support.inlineBlockNeedsLayout || nn(e.nodeName) === "inline") {
              p.display = "inline-block";
            } else {
              p.zoom = 1;
            }
          }
        }
      }
    }
    if (n.overflow) {
      p.overflow = "hidden";
      if (!v.support.shrinkWrapBlocks) {
        h.done(function() {
          p.overflow = n.overflow[0];
          p.overflowX = n.overflow[1];
          p.overflowY = n.overflow[2];
        });
      }
    }
    for (r in t$$0) {
      s = t$$0[r];
      if (Un.exec(s)) {
        delete t$$0[r];
        a = a || s === "toggle";
        if (s === (g ? "hide" : "show")) {
          continue;
        }
        m.push(r);
      }
    }
    o = m.length;
    if (o) {
      u = v._data(e, "fxshow") || v._data(e, "fxshow", {});
      if ("hidden" in u) {
        g = u.hidden;
      }
      if (a) {
        u.hidden = !g;
      }
      if (g) {
        v(e).show();
      } else {
        h.done(function() {
          v(e).hide();
        });
      }
      h.done(function() {
        var t;
        v.removeData(e, "fxshow", true);
        for (t in d) {
          v.style(e, t, d[t]);
        }
      });
      r = 0;
      for (;r < o;r++) {
        i = m[r];
        f = h.createTween(i, g ? u[i] : 0);
        d[i] = u[i] || v.style(e, i);
        if (!(i in u)) {
          u[i] = f.start;
          if (g) {
            f.end = f.start;
            f.start = i === "width" || i === "height" ? 1 : 0;
          }
        }
      }
    }
  }
  function Yn(e, t, n, r, i) {
    return new Yn.prototype.init(e, t, n, r, i);
  }
  function Zn(e, t) {
    var n;
    var r = {
      height : e
    };
    var i = 0;
    t = t ? 1 : 0;
    for (;i < 4;i += 2 - t) {
      n = $t[i];
      r["margin" + n] = r["padding" + n] = e;
    }
    return t && (r.opacity = r.width = e), r;
  }
  function tr(e) {
    return v.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : false;
  }
  var n$$3;
  var r;
  var i$$2 = e$$2.document;
  var s$$2 = e$$2.location;
  var o = e$$2.navigator;
  var u = e$$2.jQuery;
  var a = e$$2.$;
  var f = Array.prototype.push;
  var l = Array.prototype.slice;
  var c = Array.prototype.indexOf;
  var h$$1 = Object.prototype.toString;
  var p = Object.prototype.hasOwnProperty;
  var d = String.prototype.trim;
  var v = function(e, t) {
    return new v.fn.init(e, t, n$$3);
  };
  var m = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
  var g = /\S/;
  var y$$1 = /\s+/;
  var b = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  var w$$1 = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/;
  var E = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var S = /^[\],:{}\s]*$/;
  var x$$1 = /(?:^|:|,)(?:\s*\[)+/g;
  var T = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g;
  var N = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;
  var C = /^-ms-/;
  var k = /-([\da-z])/gi;
  var L = function(e, t) {
    return(t + "").toUpperCase();
  };
  var A = function() {
    if (i$$2.addEventListener) {
      i$$2.removeEventListener("DOMContentLoaded", A, false);
      v.ready();
    } else {
      if (i$$2.readyState === "complete") {
        i$$2.detachEvent("onreadystatechange", A);
        v.ready();
      }
    }
  };
  var O = {};
  v.fn = v.prototype = {
    constructor : v,
    init : function(e, n, r) {
      var s;
      var o;
      var u;
      var a;
      if (!e) {
        return this;
      }
      if (e.nodeType) {
        return this.context = this[0] = e, this.length = 1, this;
      }
      if (typeof e == "string") {
        if (e.charAt(0) === "<" && (e.charAt(e.length - 1) === ">" && e.length >= 3)) {
          s = [null, e, null];
        } else {
          s = w$$1.exec(e);
        }
        if (s && (s[1] || !n)) {
          if (s[1]) {
            return n = n instanceof v ? n[0] : n, a = n && n.nodeType ? n.ownerDocument || n : i$$2, e = v.parseHTML(s[1], a, true), E.test(s[1]) && (v.isPlainObject(n) && this.attr.call(e, n, true)), v.merge(this, e);
          }
          o = i$$2.getElementById(s[2]);
          if (o && o.parentNode) {
            if (o.id !== s[2]) {
              return r.find(e);
            }
            this.length = 1;
            this[0] = o;
          }
          return this.context = i$$2, this.selector = e, this;
        }
        return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
      }
      return v.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), v.makeArray(e, this));
    },
    selector : "",
    jquery : "1.8.3",
    length : 0,
    size : function() {
      return this.length;
    },
    toArray : function() {
      return l.call(this);
    },
    get : function(e) {
      return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
    },
    pushStack : function(e, t, n) {
      var r = v.merge(this.constructor(), e);
      return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
    },
    each : function(e, t) {
      return v.each(this, e, t);
    },
    ready : function(e) {
      return v.ready.promise().done(e), this;
    },
    eq : function(e) {
      return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
    },
    first : function() {
      return this.eq(0);
    },
    last : function() {
      return this.eq(-1);
    },
    slice : function() {
      return this.pushStack(l.apply(this, arguments), "slice", l.call(arguments).join(","));
    },
    map : function(e) {
      return this.pushStack(v.map(this, function(t, n) {
        return e.call(t, n, t);
      }));
    },
    end : function() {
      return this.prevObject || this.constructor(null);
    },
    push : f,
    sort : [].sort,
    splice : [].splice
  };
  v.fn.init.prototype = v.fn;
  v.extend = v.fn.extend = function() {
    var e;
    var n;
    var r;
    var i;
    var s;
    var o;
    var u = arguments[0] || {};
    var a = 1;
    var f = arguments.length;
    var l = false;
    if (typeof u == "boolean") {
      l = u;
      u = arguments[1] || {};
      a = 2;
    }
    if (typeof u != "object") {
      if (!v.isFunction(u)) {
        u = {};
      }
    }
    if (f === a) {
      u = this;
      --a;
    }
    for (;a < f;a++) {
      if ((e = arguments[a]) != null) {
        for (n in e) {
          r = u[n];
          i = e[n];
          if (u === i) {
            continue;
          }
          if (l && (i && (v.isPlainObject(i) || (s = v.isArray(i))))) {
            if (s) {
              s = false;
              o = r && v.isArray(r) ? r : [];
            } else {
              o = r && v.isPlainObject(r) ? r : {};
            }
            u[n] = v.extend(l, o, i);
          } else {
            if (i !== t) {
              u[n] = i;
            }
          }
        }
      }
    }
    return u;
  };
  v.extend({
    noConflict : function(t) {
      return e$$2.$ === v && (e$$2.$ = a), t && (e$$2.jQuery === v && (e$$2.jQuery = u)), v;
    },
    isReady : false,
    readyWait : 1,
    holdReady : function(e) {
      if (e) {
        v.readyWait++;
      } else {
        v.ready(true);
      }
    },
    ready : function(e) {
      if (e === true ? --v.readyWait : v.isReady) {
        return;
      }
      if (!i$$2.body) {
        return setTimeout(v.ready, 1);
      }
      v.isReady = true;
      if (e !== true && --v.readyWait > 0) {
        return;
      }
      r.resolveWith(i$$2, [v]);
      if (v.fn.trigger) {
        v(i$$2).trigger("ready").off("ready");
      }
    },
    isFunction : function(e) {
      return v.type(e) === "function";
    },
    isArray : Array.isArray || function(e) {
      return v.type(e) === "array";
    },
    isWindow : function(e) {
      return e != null && e == e.window;
    },
    isNumeric : function(e) {
      return!isNaN(parseFloat(e)) && isFinite(e);
    },
    type : function(e) {
      return e == null ? String(e) : O[h$$1.call(e)] || "object";
    },
    isPlainObject : function(e) {
      if (!e || (v.type(e) !== "object" || (e.nodeType || v.isWindow(e)))) {
        return false;
      }
      try {
        if (e.constructor && (!p.call(e, "constructor") && !p.call(e.constructor.prototype, "isPrototypeOf"))) {
          return false;
        }
      } catch (n) {
        return false;
      }
      var r;
      for (r in e) {
      }
      return r === t || p.call(e, r);
    },
    isEmptyObject : function(e) {
      var t;
      for (t in e) {
        return false;
      }
      return true;
    },
    error : function(e) {
      throw new Error(e);
    },
    parseHTML : function(e, t, n) {
      var r;
      return!e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || i$$2, (r = E.exec(e)) ? [t.createElement(r[1])] : (r = v.buildFragment([e], t, n ? null : []), v.merge([], (r.cacheable ? v.clone(r.fragment) : r.fragment).childNodes)));
    },
    parseJSON : function(t) {
      if (!t || typeof t != "string") {
        return null;
      }
      t = v.trim(t);
      if (e$$2.JSON && e$$2.JSON.parse) {
        return e$$2.JSON.parse(t);
      }
      if (S.test(t.replace(T, "@").replace(N, "]").replace(x$$1, ""))) {
        return(new Function("return " + t))();
      }
      v.error("Invalid JSON: " + t);
    },
    parseXML : function(n) {
      var r;
      var i;
      if (!n || typeof n != "string") {
        return null;
      }
      try {
        if (e$$2.DOMParser) {
          i = new DOMParser;
          r = i.parseFromString(n, "text/xml");
        } else {
          r = new ActiveXObject("Microsoft.XMLDOM");
          r.async = "false";
          r.loadXML(n);
        }
      } catch (s) {
        r = t;
      }
      return(!r || (!r.documentElement || r.getElementsByTagName("parsererror").length)) && v.error("Invalid XML: " + n), r;
    },
    noop : function() {
    },
    globalEval : function(t$$0) {
      if (t$$0) {
        if (g.test(t$$0)) {
          (e$$2.execScript || function(t) {
            e$$2.eval.call(e$$2, t);
          })(t$$0);
        }
      }
    },
    camelCase : function(e) {
      return e.replace(C, "ms-").replace(k, L);
    },
    nodeName : function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    },
    each : function(e, n, r) {
      var i;
      var s = 0;
      var o = e.length;
      var u = o === t || v.isFunction(e);
      if (r) {
        if (u) {
          for (i in e) {
            if (n.apply(e[i], r) === false) {
              break;
            }
          }
        } else {
          for (;s < o;) {
            if (n.apply(e[s++], r) === false) {
              break;
            }
          }
        }
      } else {
        if (u) {
          for (i in e) {
            if (n.call(e[i], i, e[i]) === false) {
              break;
            }
          }
        } else {
          for (;s < o;) {
            if (n.call(e[s], s, e[s++]) === false) {
              break;
            }
          }
        }
      }
      return e;
    },
    trim : d && !d.call("\ufeff\u00a0") ? function(e) {
      return e == null ? "" : d.call(e);
    } : function(e) {
      return e == null ? "" : (e + "").replace(b, "");
    },
    makeArray : function(e, t) {
      var n;
      var r = t || [];
      return e != null && (n = v.type(e), e.length == null || (n === "string" || (n === "function" || (n === "regexp" || v.isWindow(e)))) ? f.call(r, e) : v.merge(r, e)), r;
    },
    inArray : function(e, t, n) {
      var r;
      if (t) {
        if (c) {
          return c.call(t, e, n);
        }
        r = t.length;
        n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
        for (;n < r;n++) {
          if (n in t && t[n] === e) {
            return n;
          }
        }
      }
      return-1;
    },
    merge : function(e, n) {
      var r = n.length;
      var i = e.length;
      var s = 0;
      if (typeof r == "number") {
        for (;s < r;s++) {
          e[i++] = n[s];
        }
      } else {
        for (;n[s] !== t;) {
          e[i++] = n[s++];
        }
      }
      return e.length = i, e;
    },
    grep : function(e, t, n) {
      var r;
      var i = [];
      var s = 0;
      var o = e.length;
      n = !!n;
      for (;s < o;s++) {
        r = !!t(e[s], s);
        if (n !== r) {
          i.push(e[s]);
        }
      }
      return i;
    },
    map : function(e, n, r) {
      var i;
      var s;
      var o = [];
      var u = 0;
      var a = e.length;
      var f = e instanceof v || a !== t && (typeof a == "number" && (a > 0 && (e[0] && e[a - 1]) || (a === 0 || v.isArray(e))));
      if (f) {
        for (;u < a;u++) {
          i = n(e[u], u, r);
          if (i != null) {
            o[o.length] = i;
          }
        }
      } else {
        for (s in e) {
          i = n(e[s], s, r);
          if (i != null) {
            o[o.length] = i;
          }
        }
      }
      return o.concat.apply([], o);
    },
    guid : 1,
    proxy : function(e, n) {
      var r;
      var i;
      var s;
      return typeof n == "string" && (r = e[n], n = e, e = r), v.isFunction(e) ? (i = l.call(arguments, 2), s = function() {
        return e.apply(n, i.concat(l.call(arguments)));
      }, s.guid = e.guid = e.guid || v.guid++, s) : t;
    },
    access : function(e$$0, n$$0, r, i, s, o, u) {
      var a;
      var f = r == null;
      var l = 0;
      var c = e$$0.length;
      if (r && typeof r == "object") {
        for (l in r) {
          v.access(e$$0, n$$0, l, r[l], 1, o, i);
        }
        s = 1;
      } else {
        if (i !== t) {
          a = u === t && v.isFunction(i);
          if (f) {
            if (a) {
              a = n$$0;
              n$$0 = function(e, t, n) {
                return a.call(v(e), n);
              };
            } else {
              n$$0.call(e$$0, i);
              n$$0 = null;
            }
          }
          if (n$$0) {
            for (;l < c;l++) {
              n$$0(e$$0[l], r, a ? i.call(e$$0[l], l, n$$0(e$$0[l], r)) : i, u);
            }
          }
          s = 1;
        }
      }
      return s ? e$$0 : f ? n$$0.call(e$$0) : c ? n$$0(e$$0[0], r) : o;
    },
    now : function() {
      return(new Date).getTime();
    }
  });
  v.ready.promise = function(t) {
    if (!r) {
      r = v.Deferred();
      if (i$$2.readyState === "complete") {
        setTimeout(v.ready, 1);
      } else {
        if (i$$2.addEventListener) {
          i$$2.addEventListener("DOMContentLoaded", A, false);
          e$$2.addEventListener("load", v.ready, false);
        } else {
          i$$2.attachEvent("onreadystatechange", A);
          e$$2.attachEvent("onload", v.ready);
          var n = false;
          try {
            n = e$$2.frameElement == null && i$$2.documentElement;
          } catch (s) {
          }
          if (n) {
            if (n.doScroll) {
              (function o() {
                if (!v.isReady) {
                  try {
                    n.doScroll("left");
                  } catch (e) {
                    return setTimeout(o, 50);
                  }
                  v.ready();
                }
              })();
            }
          }
        }
      }
    }
    return r.promise(t);
  };
  v.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
    O["[object " + t + "]"] = t.toLowerCase();
  });
  n$$3 = v(i$$2);
  var M = {};
  v.Callbacks = function(e$$0) {
    e$$0 = typeof e$$0 == "string" ? M[e$$0] || _(e$$0) : v.extend({}, e$$0);
    var n$$0;
    var r$$0;
    var i$$0;
    var s;
    var o;
    var u;
    var a = [];
    var f = !e$$0.once && [];
    var l = function(t) {
      n$$0 = e$$0.memory && t;
      r$$0 = true;
      u = s || 0;
      s = 0;
      o = a.length;
      i$$0 = true;
      for (;a && u < o;u++) {
        if (a[u].apply(t[0], t[1]) === false && e$$0.stopOnFalse) {
          n$$0 = false;
          break;
        }
      }
      i$$0 = false;
      if (a) {
        if (f) {
          if (f.length) {
            l(f.shift());
          }
        } else {
          if (n$$0) {
            a = [];
          } else {
            c.disable();
          }
        }
      }
    };
    var c = {
      add : function() {
        if (a) {
          var t$$1 = a.length;
          (function r(t$$0) {
            v.each(t$$0, function(t, n) {
              var i = v.type(n);
              if (i === "function") {
                if (!e$$0.unique || !c.has(n)) {
                  a.push(n);
                }
              } else {
                if (n) {
                  if (n.length) {
                    if (i !== "string") {
                      r(n);
                    }
                  }
                }
              }
            });
          })(arguments);
          if (i$$0) {
            o = a.length;
          } else {
            if (n$$0) {
              s = t$$1;
              l(n$$0);
            }
          }
        }
        return this;
      },
      remove : function() {
        return a && v.each(arguments, function(e, t) {
          var n;
          for (;(n = v.inArray(t, a, n)) > -1;) {
            a.splice(n, 1);
            if (i$$0) {
              if (n <= o) {
                o--;
              }
              if (n <= u) {
                u--;
              }
            }
          }
        }), this;
      },
      has : function(e) {
        return v.inArray(e, a) > -1;
      },
      empty : function() {
        return a = [], this;
      },
      disable : function() {
        return a = f = n$$0 = t, this;
      },
      disabled : function() {
        return!a;
      },
      lock : function() {
        return f = t, n$$0 || c.disable(), this;
      },
      locked : function() {
        return!f;
      },
      fireWith : function(e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], a && ((!r$$0 || f) && (i$$0 ? f.push(t) : l(t))), this;
      },
      fire : function() {
        return c.fireWith(this, arguments), this;
      },
      fired : function() {
        return!!r$$0;
      }
    };
    return c;
  };
  v.extend({
    Deferred : function(e$$1) {
      var t$$0 = [["resolve", "done", v.Callbacks("once memory"), "resolved"], ["reject", "fail", v.Callbacks("once memory"), "rejected"], ["notify", "progress", v.Callbacks("memory")]];
      var n$$0 = "pending";
      var r$$0 = {
        state : function() {
          return n$$0;
        },
        always : function() {
          return i.done(arguments).fail(arguments), this;
        },
        then : function() {
          var e$$0 = arguments;
          return v.Deferred(function(n) {
            v.each(t$$0, function(t, r) {
              var s = r[0];
              var o = e$$0[t];
              i[r[1]](v.isFunction(o) ? function() {
                var e = o.apply(this, arguments);
                if (e && v.isFunction(e.promise)) {
                  e.promise().done(n.resolve).fail(n.reject).progress(n.notify);
                } else {
                  n[s + "With"](this === i ? n : this, [e]);
                }
              } : n[s]);
            });
            e$$0 = null;
          }).promise();
        },
        promise : function(e) {
          return e != null ? v.extend(e, r$$0) : r$$0;
        }
      };
      var i = {};
      return r$$0.pipe = r$$0.then, v.each(t$$0, function(e, s) {
        var o = s[2];
        var u = s[3];
        r$$0[s[1]] = o.add;
        if (u) {
          o.add(function() {
            n$$0 = u;
          }, t$$0[e ^ 1][2].disable, t$$0[2][2].lock);
        }
        i[s[0]] = o.fire;
        i[s[0] + "With"] = o.fireWith;
      }), r$$0.promise(i), e$$1 && e$$1.call(i, i), i;
    },
    when : function(e$$0) {
      var t$$0 = 0;
      var n$$0 = l.call(arguments);
      var r$$0 = n$$0.length;
      var i = r$$0 !== 1 || e$$0 && v.isFunction(e$$0.promise) ? r$$0 : 0;
      var s = i === 1 ? e$$0 : v.Deferred();
      var o = function(e, t, n) {
        return function(r) {
          t[e] = this;
          n[e] = arguments.length > 1 ? l.call(arguments) : r;
          if (n === u) {
            s.notifyWith(t, n);
          } else {
            if (!--i) {
              s.resolveWith(t, n);
            }
          }
        };
      };
      var u;
      var a;
      var f;
      if (r$$0 > 1) {
        u = new Array(r$$0);
        a = new Array(r$$0);
        f = new Array(r$$0);
        for (;t$$0 < r$$0;t$$0++) {
          if (n$$0[t$$0] && v.isFunction(n$$0[t$$0].promise)) {
            n$$0[t$$0].promise().done(o(t$$0, f, n$$0)).fail(s.reject).progress(o(t$$0, a, u));
          } else {
            --i;
          }
        }
      }
      return i || s.resolveWith(f, n$$0), s.promise();
    }
  });
  v.support = function() {
    var t;
    var n$$0;
    var r$$0;
    var s$$0;
    var o$$0;
    var u$$0;
    var a$$0;
    var f;
    var l;
    var c;
    var h;
    var p = i$$2.createElement("div");
    p.setAttribute("className", "t");
    p.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
    n$$0 = p.getElementsByTagName("*");
    r$$0 = p.getElementsByTagName("a")[0];
    if (!n$$0 || (!r$$0 || !n$$0.length)) {
      return{};
    }
    s$$0 = i$$2.createElement("select");
    o$$0 = s$$0.appendChild(i$$2.createElement("option"));
    u$$0 = p.getElementsByTagName("input")[0];
    r$$0.style.cssText = "top:1px;float:left;opacity:.5";
    t = {
      leadingWhitespace : p.firstChild.nodeType === 3,
      tbody : !p.getElementsByTagName("tbody").length,
      htmlSerialize : !!p.getElementsByTagName("link").length,
      style : /top/.test(r$$0.getAttribute("style")),
      hrefNormalized : r$$0.getAttribute("href") === "/a",
      opacity : /^0.5/.test(r$$0.style.opacity),
      cssFloat : !!r$$0.style.cssFloat,
      checkOn : u$$0.value === "on",
      optSelected : o$$0.selected,
      getSetAttribute : p.className !== "t",
      enctype : !!i$$2.createElement("form").enctype,
      html5Clone : i$$2.createElement("nav").cloneNode(true).outerHTML !== "<:nav></:nav>",
      boxModel : i$$2.compatMode === "CSS1Compat",
      submitBubbles : true,
      changeBubbles : true,
      focusinBubbles : false,
      deleteExpando : true,
      noCloneEvent : true,
      inlineBlockNeedsLayout : false,
      shrinkWrapBlocks : false,
      reliableMarginRight : true,
      boxSizingReliable : true,
      pixelPosition : false
    };
    u$$0.checked = true;
    t.noCloneChecked = u$$0.cloneNode(true).checked;
    s$$0.disabled = true;
    t.optDisabled = !o$$0.disabled;
    try {
      delete p.test;
    } catch (d) {
      t.deleteExpando = false;
    }
    if (!p.addEventListener) {
      if (p.attachEvent) {
        if (p.fireEvent) {
          p.attachEvent("onclick", h = function() {
            t.noCloneEvent = false;
          });
          p.cloneNode(true).fireEvent("onclick");
          p.detachEvent("onclick", h);
        }
      }
    }
    u$$0 = i$$2.createElement("input");
    u$$0.value = "t";
    u$$0.setAttribute("type", "radio");
    t.radioValue = u$$0.value === "t";
    u$$0.setAttribute("checked", "checked");
    u$$0.setAttribute("name", "t");
    p.appendChild(u$$0);
    a$$0 = i$$2.createDocumentFragment();
    a$$0.appendChild(p.lastChild);
    t.checkClone = a$$0.cloneNode(true).cloneNode(true).lastChild.checked;
    t.appendChecked = u$$0.checked;
    a$$0.removeChild(u$$0);
    a$$0.appendChild(p);
    if (p.attachEvent) {
      for (l in{
        submit : true,
        change : true,
        focusin : true
      }) {
        f = "on" + l;
        c = f in p;
        if (!c) {
          p.setAttribute(f, "return;");
          c = typeof p[f] == "function";
        }
        t[l + "Bubbles"] = c;
      }
    }
    return v(function() {
      var n;
      var r;
      var s;
      var o;
      var u = "padding:0;margin:0;border:0;display:block;overflow:hidden;";
      var a = i$$2.getElementsByTagName("body")[0];
      if (!a) {
        return;
      }
      n = i$$2.createElement("div");
      n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";
      a.insertBefore(n, a.firstChild);
      r = i$$2.createElement("div");
      n.appendChild(r);
      r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
      s = r.getElementsByTagName("td");
      s[0].style.cssText = "padding:0;margin:0;border:0;display:none";
      c = s[0].offsetHeight === 0;
      s[0].style.display = "";
      s[1].style.display = "none";
      t.reliableHiddenOffsets = c && s[0].offsetHeight === 0;
      r.innerHTML = "";
      r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
      t.boxSizing = r.offsetWidth === 4;
      t.doesNotIncludeMarginInBodyOffset = a.offsetTop !== 1;
      if (e$$2.getComputedStyle) {
        t.pixelPosition = (e$$2.getComputedStyle(r, null) || {}).top !== "1%";
        t.boxSizingReliable = (e$$2.getComputedStyle(r, null) || {
          width : "4px"
        }).width === "4px";
        o = i$$2.createElement("div");
        o.style.cssText = r.style.cssText = u;
        o.style.marginRight = o.style.width = "0";
        r.style.width = "1px";
        r.appendChild(o);
        t.reliableMarginRight = !parseFloat((e$$2.getComputedStyle(o, null) || {}).marginRight);
      }
      if (typeof r.style.zoom != "undefined") {
        r.innerHTML = "";
        r.style.cssText = u + "width:1px;padding:1px;display:inline;zoom:1";
        t.inlineBlockNeedsLayout = r.offsetWidth === 3;
        r.style.display = "block";
        r.style.overflow = "visible";
        r.innerHTML = "<div></div>";
        r.firstChild.style.width = "5px";
        t.shrinkWrapBlocks = r.offsetWidth !== 3;
        n.style.zoom = 1;
      }
      a.removeChild(n);
      n = r = s = o = null;
    }), a$$0.removeChild(p), n$$0 = r$$0 = s$$0 = o$$0 = u$$0 = a$$0 = p = null, t;
  }();
  var D = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/;
  var P = /([A-Z])/g;
  v.extend({
    cache : {},
    deletedIds : [],
    uuid : 0,
    expando : "jQuery" + (v.fn.jquery + Math.random()).replace(/\D/g, ""),
    noData : {
      embed : true,
      object : "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
      applet : true
    },
    hasData : function(e) {
      return e = e.nodeType ? v.cache[e[v.expando]] : e[v.expando], !!e && !B(e);
    },
    data : function(e, n, r, i) {
      if (!v.acceptData(e)) {
        return;
      }
      var s;
      var o;
      var u = v.expando;
      var a = typeof n == "string";
      var f = e.nodeType;
      var l = f ? v.cache : e;
      var c = f ? e[u] : e[u] && u;
      if ((!c || (!l[c] || !i && !l[c].data)) && (a && r === t)) {
        return;
      }
      if (!c) {
        if (f) {
          e[u] = c = v.deletedIds.pop() || v.guid++;
        } else {
          c = u;
        }
      }
      if (!l[c]) {
        l[c] = {};
        if (!f) {
          l[c].toJSON = v.noop;
        }
      }
      if (typeof n == "object" || typeof n == "function") {
        if (i) {
          l[c] = v.extend(l[c], n);
        } else {
          l[c].data = v.extend(l[c].data, n);
        }
      }
      return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[v.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[v.camelCase(n)])) : o = s, o;
    },
    removeData : function(e, t, n) {
      if (!v.acceptData(e)) {
        return;
      }
      var r;
      var i;
      var s;
      var o = e.nodeType;
      var u = o ? v.cache : e;
      var a = o ? e[v.expando] : v.expando;
      if (!u[a]) {
        return;
      }
      if (t) {
        r = n ? u[a] : u[a].data;
        if (r) {
          if (!v.isArray(t)) {
            if (t in r) {
              t = [t];
            } else {
              t = v.camelCase(t);
              if (t in r) {
                t = [t];
              } else {
                t = t.split(" ");
              }
            }
          }
          i = 0;
          s = t.length;
          for (;i < s;i++) {
            delete r[t[i]];
          }
          if (!(n ? B : v.isEmptyObject)(r)) {
            return;
          }
        }
      }
      if (!n) {
        delete u[a].data;
        if (!B(u[a])) {
          return;
        }
      }
      if (o) {
        v.cleanData([e], true);
      } else {
        if (v.support.deleteExpando || u != u.window) {
          delete u[a];
        } else {
          u[a] = null;
        }
      }
    },
    _data : function(e, t, n) {
      return v.data(e, t, n, true);
    },
    acceptData : function(e) {
      var t = e.nodeName && v.noData[e.nodeName.toLowerCase()];
      return!t || t !== true && e.getAttribute("classid") === t;
    }
  });
  v.fn.extend({
    data : function(e, n$$0) {
      var r;
      var i;
      var s;
      var o;
      var u;
      var a = this[0];
      var f = 0;
      var l = null;
      if (e === t) {
        if (this.length) {
          l = v.data(a);
          if (a.nodeType === 1 && !v._data(a, "parsedAttrs")) {
            s = a.attributes;
            u = s.length;
            for (;f < u;f++) {
              o = s[f].name;
              if (!o.indexOf("data-")) {
                o = v.camelCase(o.substring(5));
                H(a, o, l[o]);
              }
            }
            v._data(a, "parsedAttrs", true);
          }
        }
        return l;
      }
      return typeof e == "object" ? this.each(function() {
        v.data(this, e);
      }) : (r = e.split(".", 2), r[1] = r[1] ? "." + r[1] : "", i = r[1] + "!", v.access(this, function(n) {
        if (n === t) {
          return l = this.triggerHandler("getData" + i, [r[0]]), l === t && (a && (l = v.data(a, e), l = H(a, e, l))), l === t && r[1] ? this.data(r[0]) : l;
        }
        r[1] = n;
        this.each(function() {
          var t = v(this);
          t.triggerHandler("setData" + i, r);
          v.data(this, e, n);
          t.triggerHandler("changeData" + i, r);
        });
      }, null, n$$0, arguments.length > 1, null, false));
    },
    removeData : function(e) {
      return this.each(function() {
        v.removeData(this, e);
      });
    }
  });
  v.extend({
    queue : function(e, t, n) {
      var r;
      if (e) {
        return t = (t || "fx") + "queue", r = v._data(e, t), n && (!r || v.isArray(n) ? r = v._data(e, t, v.makeArray(n)) : r.push(n)), r || [];
      }
    },
    dequeue : function(e, t) {
      t = t || "fx";
      var n = v.queue(e, t);
      var r = n.length;
      var i = n.shift();
      var s = v._queueHooks(e, t);
      var o = function() {
        v.dequeue(e, t);
      };
      if (i === "inprogress") {
        i = n.shift();
        r--;
      }
      if (i) {
        if (t === "fx") {
          n.unshift("inprogress");
        }
        delete s.stop;
        i.call(e, o, s);
      }
      if (!r) {
        if (s) {
          s.empty.fire();
        }
      }
    },
    _queueHooks : function(e, t) {
      var n = t + "queueHooks";
      return v._data(e, n) || v._data(e, n, {
        empty : v.Callbacks("once memory").add(function() {
          v.removeData(e, t + "queue", true);
          v.removeData(e, n, true);
        })
      });
    }
  });
  v.fn.extend({
    queue : function(e, n) {
      var r = 2;
      return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? v.queue(this[0], e) : n === t ? this : this.each(function() {
        var t = v.queue(this, e, n);
        v._queueHooks(this, e);
        if (e === "fx") {
          if (t[0] !== "inprogress") {
            v.dequeue(this, e);
          }
        }
      });
    },
    dequeue : function(e) {
      return this.each(function() {
        v.dequeue(this, e);
      });
    },
    delay : function(e, t$$0) {
      return e = v.fx ? v.fx.speeds[e] || e : e, t$$0 = t$$0 || "fx", this.queue(t$$0, function(t, n) {
        var r = setTimeout(t, e);
        n.stop = function() {
          clearTimeout(r);
        };
      });
    },
    clearQueue : function(e) {
      return this.queue(e || "fx", []);
    },
    promise : function(e, n) {
      var r;
      var i = 1;
      var s = v.Deferred();
      var o = this;
      var u = this.length;
      var a = function() {
        if (!--i) {
          s.resolveWith(o, [o]);
        }
      };
      if (typeof e != "string") {
        n = e;
        e = t;
      }
      e = e || "fx";
      for (;u--;) {
        r = v._data(o[u], e + "queueHooks");
        if (r) {
          if (r.empty) {
            i++;
            r.empty.add(a);
          }
        }
      }
      return a(), s.promise(n);
    }
  });
  var j;
  var F;
  var I;
  var q = /[\t\r\n]/g;
  var R = /\r/g;
  var U = /^(?:button|input)$/i;
  var z$$0 = /^(?:button|input|object|select|textarea)$/i;
  var W = /^a(?:rea|)$/i;
  var X = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
  var V = v.support.getSetAttribute;
  v.fn.extend({
    attr : function(e, t) {
      return v.access(this, v.attr, e, t, arguments.length > 1);
    },
    removeAttr : function(e) {
      return this.each(function() {
        v.removeAttr(this, e);
      });
    },
    prop : function(e, t) {
      return v.access(this, v.prop, e, t, arguments.length > 1);
    },
    removeProp : function(e) {
      return e = v.propFix[e] || e, this.each(function() {
        try {
          this[e] = t;
          delete this[e];
        } catch (n) {
        }
      });
    },
    addClass : function(e) {
      var t$$0;
      var n;
      var r;
      var i;
      var s;
      var o;
      var u;
      if (v.isFunction(e)) {
        return this.each(function(t) {
          v(this).addClass(e.call(this, t, this.className));
        });
      }
      if (e && typeof e == "string") {
        t$$0 = e.split(y$$1);
        n = 0;
        r = this.length;
        for (;n < r;n++) {
          i = this[n];
          if (i.nodeType === 1) {
            if (!i.className && t$$0.length === 1) {
              i.className = e;
            } else {
              s = " " + i.className + " ";
              o = 0;
              u = t$$0.length;
              for (;o < u;o++) {
                if (s.indexOf(" " + t$$0[o] + " ") < 0) {
                  s += t$$0[o] + " ";
                }
              }
              i.className = v.trim(s);
            }
          }
        }
      }
      return this;
    },
    removeClass : function(e) {
      var n;
      var r;
      var i;
      var s;
      var o;
      var u;
      var a;
      if (v.isFunction(e)) {
        return this.each(function(t) {
          v(this).removeClass(e.call(this, t, this.className));
        });
      }
      if (e && typeof e == "string" || e === t) {
        n = (e || "").split(y$$1);
        u = 0;
        a = this.length;
        for (;u < a;u++) {
          i = this[u];
          if (i.nodeType === 1 && i.className) {
            r = (" " + i.className + " ").replace(q, " ");
            s = 0;
            o = n.length;
            for (;s < o;s++) {
              for (;r.indexOf(" " + n[s] + " ") >= 0;) {
                r = r.replace(" " + n[s] + " ", " ");
              }
            }
            i.className = e ? v.trim(r) : "";
          }
        }
      }
      return this;
    },
    toggleClass : function(e, t) {
      var n$$0 = typeof e;
      var r = typeof t == "boolean";
      return v.isFunction(e) ? this.each(function(n) {
        v(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function() {
        if (n$$0 === "string") {
          var i;
          var s = 0;
          var o = v(this);
          var u = t;
          var a = e.split(y$$1);
          for (;i = a[s++];) {
            u = r ? u : !o.hasClass(i);
            o[u ? "addClass" : "removeClass"](i);
          }
        } else {
          if (n$$0 === "undefined" || n$$0 === "boolean") {
            if (this.className) {
              v._data(this, "__className__", this.className);
            }
            this.className = this.className || e === false ? "" : v._data(this, "__className__") || "";
          }
        }
      });
    },
    hasClass : function(e) {
      var t = " " + e + " ";
      var n = 0;
      var r = this.length;
      for (;n < r;n++) {
        if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(q, " ").indexOf(t) >= 0) {
          return true;
        }
      }
      return false;
    },
    val : function(e$$0) {
      var n;
      var r$$0;
      var i;
      var s$$0 = this[0];
      if (!arguments.length) {
        if (s$$0) {
          return n = v.valHooks[s$$0.type] || v.valHooks[s$$0.nodeName.toLowerCase()], n && ("get" in n && (r$$0 = n.get(s$$0, "value")) !== t) ? r$$0 : (r$$0 = s$$0.value, typeof r$$0 == "string" ? r$$0.replace(R, "") : r$$0 == null ? "" : r$$0);
        }
        return;
      }
      return i = v.isFunction(e$$0), this.each(function(r) {
        var s;
        var o = v(this);
        if (this.nodeType !== 1) {
          return;
        }
        if (i) {
          s = e$$0.call(this, r, o.val());
        } else {
          s = e$$0;
        }
        if (s == null) {
          s = "";
        } else {
          if (typeof s == "number") {
            s += "";
          } else {
            if (v.isArray(s)) {
              s = v.map(s, function(e) {
                return e == null ? "" : e + "";
              });
            }
          }
        }
        n = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()];
        if (!n || (!("set" in n) || n.set(this, s, "value") === t)) {
          this.value = s;
        }
      });
    }
  });
  v.extend({
    valHooks : {
      option : {
        get : function(e) {
          var t = e.attributes.value;
          return!t || t.specified ? e.value : e.text;
        }
      },
      select : {
        get : function(e) {
          var t;
          var n;
          var r = e.options;
          var i = e.selectedIndex;
          var s = e.type === "select-one" || i < 0;
          var o = s ? null : [];
          var u = s ? i + 1 : r.length;
          var a = i < 0 ? u : s ? i : 0;
          for (;a < u;a++) {
            n = r[a];
            if ((n.selected || a === i) && ((v.support.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !v.nodeName(n.parentNode, "optgroup")))) {
              t = v(n).val();
              if (s) {
                return t;
              }
              o.push(t);
            }
          }
          return o;
        },
        set : function(e, t) {
          var n = v.makeArray(t);
          return v(e).find("option").each(function() {
            this.selected = v.inArray(v(this).val(), n) >= 0;
          }), n.length || (e.selectedIndex = -1), n;
        }
      }
    },
    attrFn : {},
    attr : function(e, n, r, i) {
      var s;
      var o;
      var u;
      var a = e.nodeType;
      if (!e || (a === 3 || (a === 8 || a === 2))) {
        return;
      }
      if (i && v.isFunction(v.fn[n])) {
        return v(e)[n](r);
      }
      if (typeof e.getAttribute == "undefined") {
        return v.prop(e, n, r);
      }
      u = a !== 1 || !v.isXMLDoc(e);
      if (u) {
        n = n.toLowerCase();
        o = v.attrHooks[n] || (X.test(n) ? F : j);
      }
      if (r !== t) {
        if (r === null) {
          v.removeAttr(e, n);
          return;
        }
        return o && ("set" in o && (u && (s = o.set(e, r, n)) !== t)) ? s : (e.setAttribute(n, r + ""), r);
      }
      return o && ("get" in o && (u && (s = o.get(e, n)) !== null)) ? s : (s = e.getAttribute(n), s === null ? t : s);
    },
    removeAttr : function(e, t) {
      var n;
      var r;
      var i;
      var s;
      var o = 0;
      if (t && e.nodeType === 1) {
        r = t.split(y$$1);
        for (;o < r.length;o++) {
          i = r[o];
          if (i) {
            n = v.propFix[i] || i;
            s = X.test(i);
            if (!s) {
              v.attr(e, i, "");
            }
            e.removeAttribute(V ? i : n);
            if (s) {
              if (n in e) {
                e[n] = false;
              }
            }
          }
        }
      }
    },
    attrHooks : {
      type : {
        set : function(e, t) {
          if (U.test(e.nodeName) && e.parentNode) {
            v.error("type property can't be changed");
          } else {
            if (!v.support.radioValue && (t === "radio" && v.nodeName(e, "input"))) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          }
        }
      },
      value : {
        get : function(e, t) {
          return j && v.nodeName(e, "button") ? j.get(e, t) : t in e ? e.value : null;
        },
        set : function(e, t, n) {
          if (j && v.nodeName(e, "button")) {
            return j.set(e, t, n);
          }
          e.value = t;
        }
      }
    },
    propFix : {
      tabindex : "tabIndex",
      readonly : "readOnly",
      "for" : "htmlFor",
      "class" : "className",
      maxlength : "maxLength",
      cellspacing : "cellSpacing",
      cellpadding : "cellPadding",
      rowspan : "rowSpan",
      colspan : "colSpan",
      usemap : "useMap",
      frameborder : "frameBorder",
      contenteditable : "contentEditable"
    },
    prop : function(e, n, r) {
      var i;
      var s;
      var o;
      var u = e.nodeType;
      if (!e || (u === 3 || (u === 8 || u === 2))) {
        return;
      }
      return o = u !== 1 || !v.isXMLDoc(e), o && (n = v.propFix[n] || n, s = v.propHooks[n]), r !== t ? s && ("set" in s && (i = s.set(e, r, n)) !== t) ? i : e[n] = r : s && ("get" in s && (i = s.get(e, n)) !== null) ? i : e[n];
    },
    propHooks : {
      tabIndex : {
        get : function(e) {
          var n = e.getAttributeNode("tabindex");
          return n && n.specified ? parseInt(n.value, 10) : z$$0.test(e.nodeName) || W.test(e.nodeName) && e.href ? 0 : t;
        }
      }
    }
  });
  F = {
    get : function(e, n) {
      var r;
      var i = v.prop(e, n);
      return i === true || typeof i != "boolean" && ((r = e.getAttributeNode(n)) && r.nodeValue !== false) ? n.toLowerCase() : t;
    },
    set : function(e, t, n) {
      var r;
      return t === false ? v.removeAttr(e, n) : (r = v.propFix[n] || n, r in e && (e[r] = true), e.setAttribute(n, n.toLowerCase())), n;
    }
  };
  if (!V) {
    I = {
      name : true,
      id : true,
      coords : true
    };
    j = v.valHooks.button = {
      get : function(e, n) {
        var r;
        return r = e.getAttributeNode(n), r && (I[n] ? r.value !== "" : r.specified) ? r.value : t;
      },
      set : function(e, t, n) {
        var r = e.getAttributeNode(n);
        return r || (r = i$$2.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
      }
    };
    v.each(["width", "height"], function(e$$0, t) {
      v.attrHooks[t] = v.extend(v.attrHooks[t], {
        set : function(e, n) {
          if (n === "") {
            return e.setAttribute(t, "auto"), n;
          }
        }
      });
    });
    v.attrHooks.contenteditable = {
      get : j.get,
      set : function(e, t, n) {
        if (t === "") {
          t = "false";
        }
        j.set(e, t, n);
      }
    };
  }
  if (!v.support.hrefNormalized) {
    v.each(["href", "src", "width", "height"], function(e$$0, n) {
      v.attrHooks[n] = v.extend(v.attrHooks[n], {
        get : function(e) {
          var r = e.getAttribute(n, 2);
          return r === null ? t : r;
        }
      });
    });
  }
  if (!v.support.style) {
    v.attrHooks.style = {
      get : function(e) {
        return e.style.cssText.toLowerCase() || t;
      },
      set : function(e, t) {
        return e.style.cssText = t + "";
      }
    };
  }
  if (!v.support.optSelected) {
    v.propHooks.selected = v.extend(v.propHooks.selected, {
      get : function(e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
      }
    });
  }
  if (!v.support.enctype) {
    v.propFix.enctype = "encoding";
  }
  if (!v.support.checkOn) {
    v.each(["radio", "checkbox"], function() {
      v.valHooks[this] = {
        get : function(e) {
          return e.getAttribute("value") === null ? "on" : e.value;
        }
      };
    });
  }
  v.each(["radio", "checkbox"], function() {
    v.valHooks[this] = v.extend(v.valHooks[this], {
      set : function(e, t) {
        if (v.isArray(t)) {
          return e.checked = v.inArray(v(e).val(), t) >= 0;
        }
      }
    });
  });
  var $ = /^(?:textarea|input|select)$/i;
  var J = /^([^\.]*|)(?:\.(.+)|)$/;
  var K = /(?:^|\s)hover(\.\S+|)\b/;
  var Q = /^key/;
  var G = /^(?:mouse|contextmenu)|click/;
  var Y = /^(?:focusinfocus|focusoutblur)$/;
  var Z = function(e) {
    return v.event.special.hover ? e : e.replace(K, "mouseenter$1 mouseleave$1");
  };
  v.event = {
    add : function(e$$0, n, r, i, s) {
      var o;
      var u;
      var a;
      var f;
      var l;
      var c;
      var h;
      var p;
      var d;
      var m;
      var g;
      if (e$$0.nodeType === 3 || (e$$0.nodeType === 8 || (!n || (!r || !(o = v._data(e$$0)))))) {
        return;
      }
      if (r.handler) {
        d = r;
        r = d.handler;
        s = d.selector;
      }
      if (!r.guid) {
        r.guid = v.guid++;
      }
      a = o.events;
      if (!a) {
        o.events = a = {};
      }
      u = o.handle;
      if (!u) {
        o.handle = u = function(e) {
          return typeof v == "undefined" || !!e && v.event.triggered === e.type ? t : v.event.dispatch.apply(u.elem, arguments);
        };
        u.elem = e$$0;
      }
      n = v.trim(Z(n)).split(" ");
      f = 0;
      for (;f < n.length;f++) {
        l = J.exec(n[f]) || [];
        c = l[1];
        h = (l[2] || "").split(".").sort();
        g = v.event.special[c] || {};
        c = (s ? g.delegateType : g.bindType) || c;
        g = v.event.special[c] || {};
        p = v.extend({
          type : c,
          origType : l[1],
          data : i,
          handler : r,
          guid : r.guid,
          selector : s,
          needsContext : s && v.expr.match.needsContext.test(s),
          namespace : h.join(".")
        }, d);
        m = a[c];
        if (!m) {
          m = a[c] = [];
          m.delegateCount = 0;
          if (!g.setup || g.setup.call(e$$0, i, h, u) === false) {
            if (e$$0.addEventListener) {
              e$$0.addEventListener(c, u, false);
            } else {
              if (e$$0.attachEvent) {
                e$$0.attachEvent("on" + c, u);
              }
            }
          }
        }
        if (g.add) {
          g.add.call(e$$0, p);
          if (!p.handler.guid) {
            p.handler.guid = r.guid;
          }
        }
        if (s) {
          m.splice(m.delegateCount++, 0, p);
        } else {
          m.push(p);
        }
        v.event.global[c] = true;
      }
      e$$0 = null;
    },
    global : {},
    remove : function(e, t, n, r, i) {
      var s;
      var o;
      var u;
      var a;
      var f;
      var l;
      var c;
      var h;
      var p;
      var d;
      var m;
      var g = v.hasData(e) && v._data(e);
      if (!g || !(h = g.events)) {
        return;
      }
      t = v.trim(Z(t || "")).split(" ");
      s = 0;
      for (;s < t.length;s++) {
        o = J.exec(t[s]) || [];
        u = a = o[1];
        f = o[2];
        if (!u) {
          for (u in h) {
            v.event.remove(e, u + t[s], n, r, true);
          }
          continue;
        }
        p = v.event.special[u] || {};
        u = (r ? p.delegateType : p.bindType) || u;
        d = h[u] || [];
        l = d.length;
        f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        c = 0;
        for (;c < d.length;c++) {
          m = d[c];
          if (i || a === m.origType) {
            if (!n || n.guid === m.guid) {
              if (!f || f.test(m.namespace)) {
                if (!r || (r === m.selector || r === "**" && m.selector)) {
                  d.splice(c--, 1);
                  if (m.selector) {
                    d.delegateCount--;
                  }
                  if (p.remove) {
                    p.remove.call(e, m);
                  }
                }
              }
            }
          }
        }
        if (d.length === 0) {
          if (l !== d.length) {
            if (!p.teardown || p.teardown.call(e, f, g.handle) === false) {
              v.removeEvent(e, u, g.handle);
            }
            delete h[u];
          }
        }
      }
      if (v.isEmptyObject(h)) {
        delete g.handle;
        v.removeData(e, "events", true);
      }
    },
    customEvent : {
      getData : true,
      setData : true,
      changeData : true
    },
    trigger : function(n, r, s, o) {
      if (!s || s.nodeType !== 3 && s.nodeType !== 8) {
        var u;
        var a;
        var f;
        var l;
        var c;
        var h;
        var p;
        var d;
        var m;
        var g;
        var y = n.type || n;
        var b = [];
        if (Y.test(y + v.event.triggered)) {
          return;
        }
        if (y.indexOf("!") >= 0) {
          y = y.slice(0, -1);
          a = true;
        }
        if (y.indexOf(".") >= 0) {
          b = y.split(".");
          y = b.shift();
          b.sort();
        }
        if ((!s || v.event.customEvent[y]) && !v.event.global[y]) {
          return;
        }
        n = typeof n == "object" ? n[v.expando] ? n : new v.Event(y, n) : new v.Event(y);
        n.type = y;
        n.isTrigger = true;
        n.exclusive = a;
        n.namespace = b.join(".");
        n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        h = y.indexOf(":") < 0 ? "on" + y : "";
        if (!s) {
          u = v.cache;
          for (f in u) {
            if (u[f].events) {
              if (u[f].events[y]) {
                v.event.trigger(n, r, u[f].handle.elem, true);
              }
            }
          }
          return;
        }
        n.result = t;
        if (!n.target) {
          n.target = s;
        }
        r = r != null ? v.makeArray(r) : [];
        r.unshift(n);
        p = v.event.special[y] || {};
        if (p.trigger && p.trigger.apply(s, r) === false) {
          return;
        }
        m = [[s, p.bindType || y]];
        if (!o && (!p.noBubble && !v.isWindow(s))) {
          g = p.delegateType || y;
          l = Y.test(g + y) ? s : s.parentNode;
          c = s;
          for (;l;l = l.parentNode) {
            m.push([l, g]);
            c = l;
          }
          if (c === (s.ownerDocument || i$$2)) {
            m.push([c.defaultView || (c.parentWindow || e$$2), g]);
          }
        }
        f = 0;
        for (;f < m.length && !n.isPropagationStopped();f++) {
          l = m[f][0];
          n.type = m[f][1];
          d = (v._data(l, "events") || {})[n.type] && v._data(l, "handle");
          if (d) {
            d.apply(l, r);
          }
          d = h && l[h];
          if (d) {
            if (v.acceptData(l)) {
              if (d.apply) {
                if (d.apply(l, r) === false) {
                  n.preventDefault();
                }
              }
            }
          }
        }
        return n.type = y, !o && (!n.isDefaultPrevented() && ((!p._default || p._default.apply(s.ownerDocument, r) === false) && ((y !== "click" || !v.nodeName(s, "a")) && (v.acceptData(s) && (h && (s[y] && ((y !== "focus" && y !== "blur" || n.target.offsetWidth !== 0) && (!v.isWindow(s) && (c = s[h], c && (s[h] = null), v.event.triggered = y, s[y](), v.event.triggered = t, c && (s[h] = c)))))))))), n.result;
      }
      return;
    },
    dispatch : function(n) {
      n = v.event.fix(n || e$$2.event);
      var r;
      var i;
      var s;
      var o;
      var u;
      var a;
      var f;
      var c;
      var h;
      var p;
      var d = (v._data(this, "events") || {})[n.type] || [];
      var m = d.delegateCount;
      var g = l.call(arguments);
      var y = !n.exclusive && !n.namespace;
      var b = v.event.special[n.type] || {};
      var w = [];
      g[0] = n;
      n.delegateTarget = this;
      if (b.preDispatch && b.preDispatch.call(this, n) === false) {
        return;
      }
      if (m && (!n.button || n.type !== "click")) {
        s = n.target;
        for (;s != this;s = s.parentNode || this) {
          if (s.disabled !== true || n.type !== "click") {
            u = {};
            f = [];
            r = 0;
            for (;r < m;r++) {
              c = d[r];
              h = c.selector;
              if (u[h] === t) {
                u[h] = c.needsContext ? v(h, this).index(s) >= 0 : v.find(h, this, null, [s]).length;
              }
              if (u[h]) {
                f.push(c);
              }
            }
            if (f.length) {
              w.push({
                elem : s,
                matches : f
              });
            }
          }
        }
      }
      if (d.length > m) {
        w.push({
          elem : this,
          matches : d.slice(m)
        });
      }
      r = 0;
      for (;r < w.length && !n.isPropagationStopped();r++) {
        a = w[r];
        n.currentTarget = a.elem;
        i = 0;
        for (;i < a.matches.length && !n.isImmediatePropagationStopped();i++) {
          c = a.matches[i];
          if (y || (!n.namespace && !c.namespace || n.namespace_re && n.namespace_re.test(c.namespace))) {
            n.data = c.data;
            n.handleObj = c;
            o = ((v.event.special[c.origType] || {}).handle || c.handler).apply(a.elem, g);
            if (o !== t) {
              n.result = o;
              if (o === false) {
                n.preventDefault();
                n.stopPropagation();
              }
            }
          }
        }
      }
      return b.postDispatch && b.postDispatch.call(this, n), n.result;
    },
    props : "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks : {},
    keyHooks : {
      props : "char charCode key keyCode".split(" "),
      filter : function(e, t) {
        return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
      }
    },
    mouseHooks : {
      props : "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter : function(e, n) {
        var r;
        var s;
        var o;
        var u = n.button;
        var a = n.fromElement;
        return e.pageX == null && (n.clientX != null && (r = e.target.ownerDocument || i$$2, s = r.documentElement, o = r.body, e.pageX = n.clientX + (s && s.scrollLeft || (o && o.scrollLeft || 0)) - (s && s.clientLeft || (o && o.clientLeft || 0)), e.pageY = n.clientY + (s && s.scrollTop || (o && o.scrollTop || 0)) - (s && s.clientTop || (o && o.clientTop || 0)))), !e.relatedTarget && (a && (e.relatedTarget = a === e.target ? n.toElement : a)), !e.which && (u !== t && (e.which = u & 1 ? 1 : u & 2 ? 
        3 : u & 4 ? 2 : 0)), e;
      }
    },
    fix : function(e) {
      if (e[v.expando]) {
        return e;
      }
      var t;
      var n;
      var r = e;
      var s = v.event.fixHooks[e.type] || {};
      var o = s.props ? this.props.concat(s.props) : this.props;
      e = v.Event(r);
      t = o.length;
      for (;t;) {
        n = o[--t];
        e[n] = r[n];
      }
      return e.target || (e.target = r.srcElement || i$$2), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, r) : e;
    },
    special : {
      load : {
        noBubble : true
      },
      focus : {
        delegateType : "focusin"
      },
      blur : {
        delegateType : "focusout"
      },
      beforeunload : {
        setup : function(e, t, n) {
          if (v.isWindow(this)) {
            this.onbeforeunload = n;
          }
        },
        teardown : function(e, t) {
          if (this.onbeforeunload === t) {
            this.onbeforeunload = null;
          }
        }
      }
    },
    simulate : function(e, t, n, r) {
      var i = v.extend(new v.Event, n, {
        type : e,
        isSimulated : true,
        originalEvent : {}
      });
      if (r) {
        v.event.trigger(i, null, t);
      } else {
        v.event.dispatch.call(t, i);
      }
      if (i.isDefaultPrevented()) {
        n.preventDefault();
      }
    }
  };
  v.event.handle = v.event.dispatch;
  v.removeEvent = i$$2.removeEventListener ? function(e, t, n) {
    if (e.removeEventListener) {
      e.removeEventListener(t, n, false);
    }
  } : function(e, t, n) {
    var r = "on" + t;
    if (e.detachEvent) {
      if (typeof e[r] == "undefined") {
        e[r] = null;
      }
      e.detachEvent(r, n);
    }
  };
  v.Event = function(e, t) {
    if (!(this instanceof v.Event)) {
      return new v.Event(e, t);
    }
    if (e && e.type) {
      this.originalEvent = e;
      this.type = e.type;
      this.isDefaultPrevented = e.defaultPrevented || (e.returnValue === false || e.getPreventDefault && e.getPreventDefault()) ? tt : et;
    } else {
      this.type = e;
    }
    if (t) {
      v.extend(this, t);
    }
    this.timeStamp = e && e.timeStamp || v.now();
    this[v.expando] = true;
  };
  v.Event.prototype = {
    preventDefault : function() {
      this.isDefaultPrevented = tt;
      var e = this.originalEvent;
      if (!e) {
        return;
      }
      if (e.preventDefault) {
        e.preventDefault();
      } else {
        e.returnValue = false;
      }
    },
    stopPropagation : function() {
      this.isPropagationStopped = tt;
      var e = this.originalEvent;
      if (!e) {
        return;
      }
      if (e.stopPropagation) {
        e.stopPropagation();
      }
      e.cancelBubble = true;
    },
    stopImmediatePropagation : function() {
      this.isImmediatePropagationStopped = tt;
      this.stopPropagation();
    },
    isDefaultPrevented : et,
    isPropagationStopped : et,
    isImmediatePropagationStopped : et
  };
  v.each({
    mouseenter : "mouseover",
    mouseleave : "mouseout"
  }, function(e$$0, t) {
    v.event.special[e$$0] = {
      delegateType : t,
      bindType : t,
      handle : function(e) {
        var n;
        var r = this;
        var i = e.relatedTarget;
        var s = e.handleObj;
        var o = s.selector;
        if (!i || i !== r && !v.contains(r, i)) {
          e.type = s.origType;
          n = s.handler.apply(this, arguments);
          e.type = t;
        }
        return n;
      }
    };
  });
  if (!v.support.submitBubbles) {
    v.event.special.submit = {
      setup : function() {
        if (v.nodeName(this, "form")) {
          return false;
        }
        v.event.add(this, "click._submit keypress._submit", function(e$$0) {
          var n = e$$0.target;
          var r = v.nodeName(n, "input") || v.nodeName(n, "button") ? n.form : t;
          if (r) {
            if (!v._data(r, "_submit_attached")) {
              v.event.add(r, "submit._submit", function(e) {
                e._submit_bubble = true;
              });
              v._data(r, "_submit_attached", true);
            }
          }
        });
      },
      postDispatch : function(e) {
        if (e._submit_bubble) {
          delete e._submit_bubble;
          if (this.parentNode) {
            if (!e.isTrigger) {
              v.event.simulate("submit", this.parentNode, e, true);
            }
          }
        }
      },
      teardown : function() {
        if (v.nodeName(this, "form")) {
          return false;
        }
        v.event.remove(this, "._submit");
      }
    };
  }
  if (!v.support.changeBubbles) {
    v.event.special.change = {
      setup : function() {
        if ($.test(this.nodeName)) {
          if (this.type === "checkbox" || this.type === "radio") {
            v.event.add(this, "propertychange._change", function(e) {
              if (e.originalEvent.propertyName === "checked") {
                this._just_changed = true;
              }
            });
            v.event.add(this, "click._change", function(e) {
              if (this._just_changed) {
                if (!e.isTrigger) {
                  this._just_changed = false;
                }
              }
              v.event.simulate("change", this, e, true);
            });
          }
          return false;
        }
        v.event.add(this, "beforeactivate._change", function(e$$0) {
          var t = e$$0.target;
          if ($.test(t.nodeName)) {
            if (!v._data(t, "_change_attached")) {
              v.event.add(t, "change._change", function(e) {
                if (this.parentNode) {
                  if (!e.isSimulated) {
                    if (!e.isTrigger) {
                      v.event.simulate("change", this.parentNode, e, true);
                    }
                  }
                }
              });
              v._data(t, "_change_attached", true);
            }
          }
        });
      },
      handle : function(e) {
        var t = e.target;
        if (this !== t || (e.isSimulated || (e.isTrigger || t.type !== "radio" && t.type !== "checkbox"))) {
          return e.handleObj.handler.apply(this, arguments);
        }
      },
      teardown : function() {
        return v.event.remove(this, "._change"), !$.test(this.nodeName);
      }
    };
  }
  if (!v.support.focusinBubbles) {
    v.each({
      focus : "focusin",
      blur : "focusout"
    }, function(e$$0, t) {
      var n = 0;
      var r = function(e) {
        v.event.simulate(t, e.target, v.event.fix(e), true);
      };
      v.event.special[t] = {
        setup : function() {
          if (n++ === 0) {
            i$$2.addEventListener(e$$0, r, true);
          }
        },
        teardown : function() {
          if (--n === 0) {
            i$$2.removeEventListener(e$$0, r, true);
          }
        }
      };
    });
  }
  v.fn.extend({
    on : function(e$$0, n, r, i, s) {
      var o;
      var u;
      if (typeof e$$0 == "object") {
        if (typeof n != "string") {
          r = r || n;
          n = t;
        }
        for (u in e$$0) {
          this.on(u, n, r, e$$0[u], s);
        }
        return this;
      }
      if (r == null && i == null) {
        i = n;
        r = n = t;
      } else {
        if (i == null) {
          if (typeof n == "string") {
            i = r;
            r = t;
          } else {
            i = r;
            r = n;
            n = t;
          }
        }
      }
      if (i === false) {
        i = et;
      } else {
        if (!i) {
          return this;
        }
      }
      return s === 1 && (o = i, i = function(e) {
        return v().off(e), o.apply(this, arguments);
      }, i.guid = o.guid || (o.guid = v.guid++)), this.each(function() {
        v.event.add(this, e$$0, i, r, n);
      });
    },
    one : function(e, t, n, r) {
      return this.on(e, t, n, r, 1);
    },
    off : function(e, n, r) {
      var i;
      var s;
      if (e && (e.preventDefault && e.handleObj)) {
        return i = e.handleObj, v(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
      }
      if (typeof e == "object") {
        for (s in e) {
          this.off(s, n, e[s]);
        }
        return this;
      }
      if (n === false || typeof n == "function") {
        r = n;
        n = t;
      }
      return r === false && (r = et), this.each(function() {
        v.event.remove(this, e, r, n);
      });
    },
    bind : function(e, t, n) {
      return this.on(e, null, t, n);
    },
    unbind : function(e, t) {
      return this.off(e, null, t);
    },
    live : function(e, t, n) {
      return v(this.context).on(e, this.selector, t, n), this;
    },
    die : function(e, t) {
      return v(this.context).off(e, this.selector || "**", t), this;
    },
    delegate : function(e, t, n, r) {
      return this.on(t, e, n, r);
    },
    undelegate : function(e, t, n) {
      return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
    },
    trigger : function(e, t) {
      return this.each(function() {
        v.event.trigger(e, t, this);
      });
    },
    triggerHandler : function(e, t) {
      if (this[0]) {
        return v.event.trigger(e, t, this[0], true);
      }
    },
    toggle : function(e) {
      var t = arguments;
      var n$$0 = e.guid || v.guid++;
      var r = 0;
      var i$$0 = function(n) {
        var i = (v._data(this, "lastToggle" + e.guid) || 0) % r;
        return v._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || false;
      };
      i$$0.guid = n$$0;
      for (;r < t.length;) {
        t[r++].guid = n$$0;
      }
      return this.click(i$$0);
    },
    hover : function(e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }
  });
  v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e$$0, t) {
    v.fn[t] = function(e, n) {
      return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
    if (Q.test(t)) {
      v.event.fixHooks[t] = v.event.keyHooks;
    }
    if (G.test(t)) {
      v.event.fixHooks[t] = v.event.mouseHooks;
    }
  });
  (function(e$$1, t$$1) {
    function nt(e, t, n, r) {
      n = n || [];
      t = t || g$$0;
      var i;
      var s;
      var a;
      var f;
      var l = t.nodeType;
      if (!e || typeof e != "string") {
        return n;
      }
      if (l !== 1 && l !== 9) {
        return[];
      }
      a = o$$0(t);
      if (!a && !r) {
        if (i = R.exec(e)) {
          if (f = i[1]) {
            if (l === 9) {
              s = t.getElementById(f);
              if (!s || !s.parentNode) {
                return n;
              }
              if (s.id === f) {
                return n.push(s), n;
              }
            } else {
              if (t.ownerDocument && ((s = t.ownerDocument.getElementById(f)) && (u$$1(t, s) && s.id === f))) {
                return n.push(s), n;
              }
            }
          } else {
            if (i[2]) {
              return S.apply(n, x$$0.call(t.getElementsByTagName(e), 0)), n;
            }
            if ((f = i[3]) && (Z && t.getElementsByClassName)) {
              return S.apply(n, x$$0.call(t.getElementsByClassName(f), 0)), n;
            }
          }
        }
      }
      return vt(e.replace(j, "$1"), t, n, r, a);
    }
    function rt(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return n === "input" && t.type === e;
      };
    }
    function it(e) {
      return function(t) {
        var n = t.nodeName.toLowerCase();
        return(n === "input" || n === "button") && t.type === e;
      };
    }
    function st(e) {
      return N$$0(function(t) {
        return t = +t, N$$0(function(n, r) {
          var i;
          var s = e([], n.length, t);
          var o = s.length;
          for (;o--;) {
            if (n[i = s[o]]) {
              n[i] = !(r[i] = n[i]);
            }
          }
        });
      });
    }
    function ot(e, t, n) {
      if (e === t) {
        return n;
      }
      var r = e.nextSibling;
      for (;r;) {
        if (r === t) {
          return-1;
        }
        r = r.nextSibling;
      }
      return 1;
    }
    function ut(e, t) {
      var n;
      var r;
      var s;
      var o;
      var u;
      var a;
      var f;
      var l = L[d$$0][e + " "];
      if (l) {
        return t ? 0 : l.slice(0);
      }
      u = e;
      a = [];
      f = i$$0.preFilter;
      for (;u;) {
        if (!n || (r = F.exec(u))) {
          if (r) {
            u = u.slice(r[0].length) || u;
          }
          a.push(s = []);
        }
        n = false;
        if (r = I.exec(u)) {
          s.push(n = new m$$0(r.shift()));
          u = u.slice(n.length);
          n.type = r[0].replace(j, " ");
        }
        for (o in i$$0.filter) {
          if (r = J[o].exec(u)) {
            if (!f[o] || (r = f[o](r))) {
              s.push(n = new m$$0(r.shift()));
              u = u.slice(n.length);
              n.type = o;
              n.matches = r;
            }
          }
        }
        if (!n) {
          break;
        }
      }
      return t ? u.length : u ? nt.error(e) : L(e, a).slice(0);
    }
    function at(e, t$$0, r$$0) {
      var i = t$$0.dir;
      var s = r$$0 && t$$0.dir === "parentNode";
      var o = w$$0++;
      return t$$0.first ? function(t, n, r) {
        for (;t = t[i];) {
          if (s || t.nodeType === 1) {
            return e(t, n, r);
          }
        }
      } : function(t, r, u) {
        if (!u) {
          var a;
          var f = b + " " + o + " ";
          var l = f + n$$1;
          for (;t = t[i];) {
            if (s || t.nodeType === 1) {
              if ((a = t[d$$0]) === l) {
                return t.sizset;
              }
              if (typeof a == "string" && a.indexOf(f) === 0) {
                if (t.sizset) {
                  return t;
                }
              } else {
                t[d$$0] = l;
                if (e(t, r, u)) {
                  return t.sizset = true, t;
                }
                t.sizset = false;
              }
            }
          }
        } else {
          for (;t = t[i];) {
            if (s || t.nodeType === 1) {
              if (e(t, r, u)) {
                return t;
              }
            }
          }
        }
      };
    }
    function ft(e) {
      return e.length > 1 ? function(t, n, r) {
        var i = e.length;
        for (;i--;) {
          if (!e[i](t, n, r)) {
            return false;
          }
        }
        return true;
      } : e[0];
    }
    function lt(e, t, n, r, i) {
      var s;
      var o = [];
      var u = 0;
      var a = e.length;
      var f = t != null;
      for (;u < a;u++) {
        if (s = e[u]) {
          if (!n || n(s, r, i)) {
            o.push(s);
            if (f) {
              t.push(u);
            }
          }
        }
      }
      return o;
    }
    function ct(e, t, n, r, i, s$$0) {
      return r && (!r[d$$0] && (r = ct(r))), i && (!i[d$$0] && (i = ct(i, s$$0))), N$$0(function(s, o, u, a) {
        var f;
        var l;
        var c;
        var h = [];
        var p = [];
        var d = o.length;
        var v = s || dt(t || "*", u.nodeType ? [u] : u, []);
        var m = e && (s || !t) ? lt(v, h, e, u, a) : v;
        var g = n ? i || (s ? e : d || r) ? [] : o : m;
        if (n) {
          n(m, g, u, a);
        }
        if (r) {
          f = lt(g, p);
          r(f, [], u, a);
          l = f.length;
          for (;l--;) {
            if (c = f[l]) {
              g[p[l]] = !(m[p[l]] = c);
            }
          }
        }
        if (s) {
          if (i || e) {
            if (i) {
              f = [];
              l = g.length;
              for (;l--;) {
                if (c = g[l]) {
                  f.push(m[l] = c);
                }
              }
              i(null, g = [], f, a);
            }
            l = g.length;
            for (;l--;) {
              if (c = g[l]) {
                if ((f = i ? T$$0.call(s, c) : h[l]) > -1) {
                  s[f] = !(o[f] = c);
                }
              }
            }
          }
        } else {
          g = lt(g === o ? g.splice(d, g.length) : g);
          if (i) {
            i(null, o, g, a);
          } else {
            S.apply(o, g);
          }
        }
      });
    }
    function ht(e$$0) {
      var t;
      var n$$0;
      var r$$0;
      var s = e$$0.length;
      var o = i$$0.relative[e$$0[0].type];
      var u = o || i$$0.relative[" "];
      var a = o ? 1 : 0;
      var f = at(function(e) {
        return e === t;
      }, u, true);
      var l = at(function(e) {
        return T$$0.call(t, e) > -1;
      }, u, true);
      var h = [function(e, n, r) {
        return!o && (r || n !== c$$0) || ((t = n).nodeType ? f(e, n, r) : l(e, n, r));
      }];
      for (;a < s;a++) {
        if (n$$0 = i$$0.relative[e$$0[a].type]) {
          h = [at(ft(h), n$$0)];
        } else {
          n$$0 = i$$0.filter[e$$0[a].type].apply(null, e$$0[a].matches);
          if (n$$0[d$$0]) {
            r$$0 = ++a;
            for (;r$$0 < s;r$$0++) {
              if (i$$0.relative[e$$0[r$$0].type]) {
                break;
              }
            }
            return ct(a > 1 && ft(h), a > 1 && e$$0.slice(0, a - 1).join("").replace(j, "$1"), n$$0, a < r$$0 && ht(e$$0.slice(a, r$$0)), r$$0 < s && ht(e$$0 = e$$0.slice(r$$0)), r$$0 < s && e$$0.join(""));
          }
          h.push(n$$0);
        }
      }
      return ft(h);
    }
    function pt(e, t) {
      var r = t.length > 0;
      var s = e.length > 0;
      var o = function(u, a, f, l, h) {
        var p;
        var d;
        var v;
        var m = [];
        var y = 0;
        var w = "0";
        var x = u && [];
        var T = h != null;
        var N = c$$0;
        var C = u || s && i$$0.find.TAG("*", h && a.parentNode || a);
        var k = b += N == null ? 1 : Math.E;
        if (T) {
          c$$0 = a !== g$$0 && a;
          n$$1 = o.el;
        }
        for (;(p = C[w]) != null;w++) {
          if (s && p) {
            d = 0;
            for (;v = e[d];d++) {
              if (v(p, a, f)) {
                l.push(p);
                break;
              }
            }
            if (T) {
              b = k;
              n$$1 = ++o.el;
            }
          }
          if (r) {
            if (p = !v && p) {
              y--;
            }
            if (u) {
              x.push(p);
            }
          }
        }
        y += w;
        if (r && w !== y) {
          d = 0;
          for (;v = t[d];d++) {
            v(x, m, a, f);
          }
          if (u) {
            if (y > 0) {
              for (;w--;) {
                if (!x[w]) {
                  if (!m[w]) {
                    m[w] = E.call(l);
                  }
                }
              }
            }
            m = lt(m);
          }
          S.apply(l, m);
          if (T) {
            if (!u) {
              if (m.length > 0) {
                if (y + t.length > 1) {
                  nt.uniqueSort(l);
                }
              }
            }
          }
        }
        return T && (b = k, c$$0 = N), x;
      };
      return o.el = 0, r ? N$$0(o) : o;
    }
    function dt(e, t, n) {
      var r = 0;
      var i = t.length;
      for (;r < i;r++) {
        nt(e, t[r], n);
      }
      return n;
    }
    function vt(e, t, n, r, s) {
      var o;
      var u;
      var f;
      var l;
      var c;
      var h = ut(e);
      var p = h.length;
      if (!r && h.length === 1) {
        u = h[0] = h[0].slice(0);
        if (u.length > 2 && ((f = u[0]).type === "ID" && (t.nodeType === 9 && (!s && i$$0.relative[u[1].type])))) {
          t = i$$0.find.ID(f.matches[0].replace($, ""), t, s)[0];
          if (!t) {
            return n;
          }
          e = e.slice(u.shift().length);
        }
        o = J.POS.test(e) ? -1 : u.length - 1;
        for (;o >= 0;o--) {
          f = u[o];
          if (i$$0.relative[l = f.type]) {
            break;
          }
          if (c = i$$0.find[l]) {
            if (r = c(f.matches[0].replace($, ""), z.test(u[0].type) && t.parentNode || t, s)) {
              u.splice(o, 1);
              e = r.length && u.join("");
              if (!e) {
                return S.apply(n, x$$0.call(r, 0)), n;
              }
              break;
            }
          }
        }
      }
      return a$$0(e, h)(r, t, s, n, z.test(e)), n;
    }
    function mt() {
    }
    var n$$1;
    var r$$1;
    var i$$0;
    var s$$1;
    var o$$0;
    var u$$1;
    var a$$0;
    var f$$0;
    var l$$0;
    var c$$0;
    var h$$0 = true;
    var p$$0 = "undefined";
    var d$$0 = ("sizcache" + Math.random()).replace(".", "");
    var m$$0 = String;
    var g$$0 = e$$1.document;
    var y$$0 = g$$0.documentElement;
    var b = 0;
    var w$$0 = 0;
    var E = [].pop;
    var S = [].push;
    var x$$0 = [].slice;
    var T$$0 = [].indexOf || function(e) {
      var t = 0;
      var n = this.length;
      for (;t < n;t++) {
        if (this[t] === e) {
          return t;
        }
      }
      return-1;
    };
    var N$$0 = function(e, t) {
      return e[d$$0] = t == null || t, e;
    };
    var C$$0 = function() {
      var e = {};
      var t = [];
      return N$$0(function(n, r) {
        return t.push(n) > i$$0.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }, e);
    };
    var k$$0 = C$$0();
    var L = C$$0();
    var A = C$$0();
    var O = "[\\x20\\t\\r\\n\\f]";
    var M = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+";
    var _ = M.replace("w", "w#");
    var D = "([*^$|!~]?=)";
    var P = "\\[" + O + "*(" + M + ")" + O + "*(?:" + D + O + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + _ + ")|)|)" + O + "*\\]";
    var H = ":(" + M + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + P + ")|[^:]|\\\\.)*|.*))\\)|)";
    var B = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + O + "*((?:-\\d)?\\d*)" + O + "*\\)|)(?=[^-]|$)";
    var j = new RegExp("^" + O + "+|((?:^|[^\\\\])(?:\\\\.)*)" + O + "+$", "g");
    var F = new RegExp("^" + O + "*," + O + "*");
    var I = new RegExp("^" + O + "*([\\x20\\t\\r\\n\\f>+~])" + O + "*");
    var q = new RegExp(H);
    var R = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/;
    var U = /^:not/;
    var z = /[\x20\t\r\n\f]*[+~]/;
    var W = /:not\($/;
    var X = /h\d/i;
    var V = /input|select|textarea|button/i;
    var $ = /\\(?!\\)/g;
    var J = {
      ID : new RegExp("^#(" + M + ")"),
      CLASS : new RegExp("^\\.(" + M + ")"),
      NAME : new RegExp("^\\[name=['\"]?(" + M + ")['\"]?\\]"),
      TAG : new RegExp("^(" + M.replace("w", "w*") + ")"),
      ATTR : new RegExp("^" + P),
      PSEUDO : new RegExp("^" + H),
      POS : new RegExp(B, "i"),
      CHILD : new RegExp("^:(only|nth|first|last)-child(?:\\(" + O + "*(even|odd|(([+-]|)(\\d*)n|)" + O + "*(?:([+-]|)" + O + "*(\\d+)|))" + O + "*\\)|)", "i"),
      needsContext : new RegExp("^" + O + "*[>+~]|" + B, "i")
    };
    var K = function(e) {
      var t = g$$0.createElement("div");
      try {
        return e(t);
      } catch (n) {
        return false;
      } finally {
        t = null;
      }
    };
    var Q = K(function(e) {
      return e.appendChild(g$$0.createComment("")), !e.getElementsByTagName("*").length;
    });
    var G = K(function(e) {
      return e.innerHTML = "<a href='#'></a>", e.firstChild && (typeof e.firstChild.getAttribute !== p$$0 && e.firstChild.getAttribute("href") === "#");
    });
    var Y = K(function(e) {
      e.innerHTML = "<select></select>";
      var t = typeof e.lastChild.getAttribute("multiple");
      return t !== "boolean" && t !== "string";
    });
    var Z = K(function(e) {
      return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? false : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
    });
    var et = K(function(e) {
      e.id = d$$0 + 0;
      e.innerHTML = "<a name='" + d$$0 + "'></a><div name='" + d$$0 + "'></div>";
      y$$0.insertBefore(e, y$$0.firstChild);
      var t = g$$0.getElementsByName && g$$0.getElementsByName(d$$0).length === 2 + g$$0.getElementsByName(d$$0 + 0).length;
      return r$$1 = !g$$0.getElementById(d$$0), y$$0.removeChild(e), t;
    });
    try {
      x$$0.call(y$$0.childNodes, 0)[0].nodeType;
    } catch (tt) {
      x$$0 = function(e) {
        var t;
        var n = [];
        for (;t = this[e];e++) {
          n.push(t);
        }
        return n;
      };
    }
    nt.matches = function(e, t) {
      return nt(e, null, null, t);
    };
    nt.matchesSelector = function(e, t) {
      return nt(t, null, null, [e]).length > 0;
    };
    s$$1 = nt.getText = function(e) {
      var t;
      var n = "";
      var r = 0;
      var i = e.nodeType;
      if (i) {
        if (i === 1 || (i === 9 || i === 11)) {
          if (typeof e.textContent == "string") {
            return e.textContent;
          }
          e = e.firstChild;
          for (;e;e = e.nextSibling) {
            n += s$$1(e);
          }
        } else {
          if (i === 3 || i === 4) {
            return e.nodeValue;
          }
        }
      } else {
        for (;t = e[r];r++) {
          n += s$$1(t);
        }
      }
      return n;
    };
    o$$0 = nt.isXML = function(e) {
      var t = e && (e.ownerDocument || e).documentElement;
      return t ? t.nodeName !== "HTML" : false;
    };
    u$$1 = nt.contains = y$$0.contains ? function(e, t) {
      var n = e.nodeType === 9 ? e.documentElement : e;
      var r = t && t.parentNode;
      return e === r || !!(r && (r.nodeType === 1 && (n.contains && n.contains(r))));
    } : y$$0.compareDocumentPosition ? function(e, t) {
      return t && !!(e.compareDocumentPosition(t) & 16);
    } : function(e, t) {
      for (;t = t.parentNode;) {
        if (t === e) {
          return true;
        }
      }
      return false;
    };
    nt.attr = function(e, t) {
      var n;
      var r = o$$0(e);
      return r || (t = t.toLowerCase()), (n = i$$0.attrHandle[t]) ? n(e) : r || Y ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null);
    };
    i$$0 = nt.selectors = {
      cacheLength : 50,
      createPseudo : N$$0,
      match : J,
      attrHandle : G ? {} : {
        href : function(e) {
          return e.getAttribute("href", 2);
        },
        type : function(e) {
          return e.getAttribute("type");
        }
      },
      find : {
        ID : r$$1 ? function(e, t, n) {
          if (typeof t.getElementById !== p$$0 && !n) {
            var r = t.getElementById(e);
            return r && r.parentNode ? [r] : [];
          }
        } : function(e, n, r) {
          if (typeof n.getElementById !== p$$0 && !r) {
            var i = n.getElementById(e);
            return i ? i.id === e || typeof i.getAttributeNode !== p$$0 && i.getAttributeNode("id").value === e ? [i] : t$$1 : [];
          }
        },
        TAG : Q ? function(e, t) {
          if (typeof t.getElementsByTagName !== p$$0) {
            return t.getElementsByTagName(e);
          }
        } : function(e, t) {
          var n = t.getElementsByTagName(e);
          if (e === "*") {
            var r;
            var i = [];
            var s = 0;
            for (;r = n[s];s++) {
              if (r.nodeType === 1) {
                i.push(r);
              }
            }
            return i;
          }
          return n;
        },
        NAME : et && function(e, t) {
          if (typeof t.getElementsByName !== p$$0) {
            return t.getElementsByName(name);
          }
        },
        CLASS : Z && function(e, t, n) {
          if (typeof t.getElementsByClassName !== p$$0 && !n) {
            return t.getElementsByClassName(e);
          }
        }
      },
      relative : {
        ">" : {
          dir : "parentNode",
          first : true
        },
        " " : {
          dir : "parentNode"
        },
        "+" : {
          dir : "previousSibling",
          first : true
        },
        "~" : {
          dir : "previousSibling"
        }
      },
      preFilter : {
        ATTR : function(e) {
          return e[1] = e[1].replace($, ""), e[3] = (e[4] || (e[5] || "")).replace($, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        },
        CHILD : function(e) {
          return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || nt.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && nt.error(e[0]), e;
        },
        PSEUDO : function(e) {
          var t;
          var n;
          if (J.CHILD.test(e[0])) {
            return null;
          }
          if (e[3]) {
            e[2] = e[3];
          } else {
            if (t = e[4]) {
              if (q.test(t)) {
                if (n = ut(t, true)) {
                  if (n = t.indexOf(")", t.length - n) - t.length) {
                    t = t.slice(0, n);
                    e[0] = e[0].slice(0, n);
                  }
                }
              }
              e[2] = t;
            }
          }
          return e.slice(0, 3);
        }
      },
      filter : {
        ID : r$$1 ? function(e) {
          return e = e.replace($, ""), function(t) {
            return t.getAttribute("id") === e;
          };
        } : function(e) {
          return e = e.replace($, ""), function(t) {
            var n = typeof t.getAttributeNode !== p$$0 && t.getAttributeNode("id");
            return n && n.value === e;
          };
        },
        TAG : function(e) {
          return e === "*" ? function() {
            return true;
          } : (e = e.replace($, "").toLowerCase(), function(t) {
            return t.nodeName && t.nodeName.toLowerCase() === e;
          });
        },
        CLASS : function(e$$0) {
          var t = k$$0[d$$0][e$$0 + " "];
          return t || (t = new RegExp("(^|" + O + ")" + e$$0 + "(" + O + "|$)")) && k$$0(e$$0, function(e) {
            return t.test(e.className || (typeof e.getAttribute !== p$$0 && e.getAttribute("class") || ""));
          });
        },
        ATTR : function(e, t, n) {
          return function(r, i) {
            var s = nt.attr(r, e);
            return s == null ? t === "!=" : t ? (s += "", t === "=" ? s === n : t === "!=" ? s !== n : t === "^=" ? n && s.indexOf(n) === 0 : t === "*=" ? n && s.indexOf(n) > -1 : t === "$=" ? n && s.substr(s.length - n.length) === n : t === "~=" ? (" " + s + " ").indexOf(n) > -1 : t === "|=" ? s === n || s.substr(0, n.length + 1) === n + "-" : false) : true;
          };
        },
        CHILD : function(e$$0, t$$0, n$$0, r) {
          return e$$0 === "nth" ? function(e) {
            var t;
            var i;
            var s = e.parentNode;
            if (n$$0 === 1 && r === 0) {
              return true;
            }
            if (s) {
              i = 0;
              t = s.firstChild;
              for (;t;t = t.nextSibling) {
                if (t.nodeType === 1) {
                  i++;
                  if (e === t) {
                    break;
                  }
                }
              }
            }
            return i -= r, i === n$$0 || i % n$$0 === 0 && i / n$$0 >= 0;
          } : function(t) {
            var n = t;
            switch(e$$0) {
              case "only":
              ;
              case "first":
                for (;n = n.previousSibling;) {
                  if (n.nodeType === 1) {
                    return false;
                  }
                }
                if (e$$0 === "first") {
                  return true;
                }
                n = t;
              case "last":
                for (;n = n.nextSibling;) {
                  if (n.nodeType === 1) {
                    return false;
                  }
                }
                return true;
            }
          };
        },
        PSEUDO : function(e$$0, t) {
          var n$$0;
          var r = i$$0.pseudos[e$$0] || (i$$0.setFilters[e$$0.toLowerCase()] || nt.error("unsupported pseudo: " + e$$0));
          return r[d$$0] ? r(t) : r.length > 1 ? (n$$0 = [e$$0, e$$0, "", t], i$$0.setFilters.hasOwnProperty(e$$0.toLowerCase()) ? N$$0(function(e, n) {
            var i;
            var s = r(e, t);
            var o = s.length;
            for (;o--;) {
              i = T$$0.call(e, s[o]);
              e[i] = !(n[i] = s[o]);
            }
          }) : function(e) {
            return r(e, 0, n$$0);
          }) : r;
        }
      },
      pseudos : {
        not : N$$0(function(e$$0) {
          var t$$0 = [];
          var n$$0 = [];
          var r = a$$0(e$$0.replace(j, "$1"));
          return r[d$$0] ? N$$0(function(e, t, n, i) {
            var s;
            var o = r(e, null, i, []);
            var u = e.length;
            for (;u--;) {
              if (s = o[u]) {
                e[u] = !(t[u] = s);
              }
            }
          }) : function(e, i, s) {
            return t$$0[0] = e, r(t$$0, null, s, n$$0), !n$$0.pop();
          };
        }),
        has : N$$0(function(e) {
          return function(t) {
            return nt(e, t).length > 0;
          };
        }),
        contains : N$$0(function(e) {
          return function(t) {
            return(t.textContent || (t.innerText || s$$1(t))).indexOf(e) > -1;
          };
        }),
        enabled : function(e) {
          return e.disabled === false;
        },
        disabled : function(e) {
          return e.disabled === true;
        },
        checked : function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && !!e.checked || t === "option" && !!e.selected;
        },
        selected : function(e) {
          return e.parentNode && e.parentNode.selectedIndex, e.selected === true;
        },
        parent : function(e) {
          return!i$$0.pseudos.empty(e);
        },
        empty : function(e) {
          var t;
          e = e.firstChild;
          for (;e;) {
            if (e.nodeName > "@" || ((t = e.nodeType) === 3 || t === 4)) {
              return false;
            }
            e = e.nextSibling;
          }
          return true;
        },
        header : function(e) {
          return X.test(e.nodeName);
        },
        text : function(e) {
          var t;
          var n;
          return e.nodeName.toLowerCase() === "input" && ((t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t));
        },
        radio : rt("radio"),
        checkbox : rt("checkbox"),
        file : rt("file"),
        password : rt("password"),
        image : rt("image"),
        submit : it("submit"),
        reset : it("reset"),
        button : function(e) {
          var t = e.nodeName.toLowerCase();
          return t === "input" && e.type === "button" || t === "button";
        },
        input : function(e) {
          return V.test(e.nodeName);
        },
        focus : function(e) {
          var t = e.ownerDocument;
          return e === t.activeElement && ((!t.hasFocus || t.hasFocus()) && !!(e.type || (e.href || ~e.tabIndex)));
        },
        active : function(e) {
          return e === e.ownerDocument.activeElement;
        },
        first : st(function() {
          return[0];
        }),
        last : st(function(e, t) {
          return[t - 1];
        }),
        eq : st(function(e, t, n) {
          return[n < 0 ? n + t : n];
        }),
        even : st(function(e, t) {
          var n = 0;
          for (;n < t;n += 2) {
            e.push(n);
          }
          return e;
        }),
        odd : st(function(e, t) {
          var n = 1;
          for (;n < t;n += 2) {
            e.push(n);
          }
          return e;
        }),
        lt : st(function(e, t, n) {
          var r = n < 0 ? n + t : n;
          for (;--r >= 0;) {
            e.push(r);
          }
          return e;
        }),
        gt : st(function(e, t, n) {
          var r = n < 0 ? n + t : n;
          for (;++r < t;) {
            e.push(r);
          }
          return e;
        })
      }
    };
    f$$0 = y$$0.compareDocumentPosition ? function(e, t) {
      return e === t ? (l$$0 = true, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
    } : function(e, t) {
      if (e === t) {
        return l$$0 = true, 0;
      }
      if (e.sourceIndex && t.sourceIndex) {
        return e.sourceIndex - t.sourceIndex;
      }
      var n;
      var r;
      var i = [];
      var s = [];
      var o = e.parentNode;
      var u = t.parentNode;
      var a = o;
      if (o === u) {
        return ot(e, t);
      }
      if (!o) {
        return-1;
      }
      if (!u) {
        return 1;
      }
      for (;a;) {
        i.unshift(a);
        a = a.parentNode;
      }
      a = u;
      for (;a;) {
        s.unshift(a);
        a = a.parentNode;
      }
      n = i.length;
      r = s.length;
      var f = 0;
      for (;f < n && f < r;f++) {
        if (i[f] !== s[f]) {
          return ot(i[f], s[f]);
        }
      }
      return f === n ? ot(e, s[f], -1) : ot(i[f], t, 1);
    };
    [0, 0].sort(f$$0);
    h$$0 = !l$$0;
    nt.uniqueSort = function(e) {
      var t;
      var n = [];
      var r = 1;
      var i = 0;
      l$$0 = h$$0;
      e.sort(f$$0);
      if (l$$0) {
        for (;t = e[r];r++) {
          if (t === e[r - 1]) {
            i = n.push(r);
          }
        }
        for (;i--;) {
          e.splice(n[i], 1);
        }
      }
      return e;
    };
    nt.error = function(e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    };
    a$$0 = nt.compile = function(e, t) {
      var n;
      var r = [];
      var i = [];
      var s = A[d$$0][e + " "];
      if (!s) {
        if (!t) {
          t = ut(e);
        }
        n = t.length;
        for (;n--;) {
          s = ht(t[n]);
          if (s[d$$0]) {
            r.push(s);
          } else {
            i.push(s);
          }
        }
        s = A(e, pt(i, r));
      }
      return s;
    };
    if (g$$0.querySelectorAll) {
      (function() {
        var e$$0;
        var t$$0 = vt;
        var n$$0 = /'|\\/g;
        var r$$0 = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g;
        var i = [":focus"];
        var s$$0 = [":active"];
        var u$$0 = y$$0.matchesSelector || (y$$0.mozMatchesSelector || (y$$0.webkitMatchesSelector || (y$$0.oMatchesSelector || y$$0.msMatchesSelector)));
        K(function(e) {
          e.innerHTML = "<select><option selected=''></option></select>";
          if (!e.querySelectorAll("[selected]").length) {
            i.push("\\[" + O + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)");
          }
          if (!e.querySelectorAll(":checked").length) {
            i.push(":checked");
          }
        });
        K(function(e) {
          e.innerHTML = "<p test=''></p>";
          if (e.querySelectorAll("[test^='']").length) {
            i.push("[*^$]=" + O + "*(?:\"\"|'')");
          }
          e.innerHTML = "<input type='hidden'/>";
          if (!e.querySelectorAll(":enabled").length) {
            i.push(":enabled", ":disabled");
          }
        });
        i = new RegExp(i.join("|"));
        vt = function(e, r, s, o, u) {
          if (!o && (!u && !i.test(e))) {
            var a;
            var f;
            var l = true;
            var c = d$$0;
            var h = r;
            var p = r.nodeType === 9 && e;
            if (r.nodeType === 1 && r.nodeName.toLowerCase() !== "object") {
              a = ut(e);
              if (l = r.getAttribute("id")) {
                c = l.replace(n$$0, "\\$&");
              } else {
                r.setAttribute("id", c);
              }
              c = "[id='" + c + "'] ";
              f = a.length;
              for (;f--;) {
                a[f] = c + a[f].join("");
              }
              h = z.test(e) && r.parentNode || r;
              p = a.join(",");
            }
            if (p) {
              try {
                return S.apply(s, x$$0.call(h.querySelectorAll(p), 0)), s;
              } catch (v) {
              } finally {
                if (!l) {
                  r.removeAttribute("id");
                }
              }
            }
          }
          return t$$0(e, r, s, o, u);
        };
        if (u$$0) {
          K(function(t) {
            e$$0 = u$$0.call(t, "div");
            try {
              u$$0.call(t, "[test!='']:sizzle");
              s$$0.push("!=", H);
            } catch (n) {
            }
          });
          s$$0 = new RegExp(s$$0.join("|"));
          nt.matchesSelector = function(t, n) {
            n = n.replace(r$$0, "='$1']");
            if (!o$$0(t) && (!s$$0.test(n) && !i.test(n))) {
              try {
                var a = u$$0.call(t, n);
                if (a || (e$$0 || t.document && t.document.nodeType !== 11)) {
                  return a;
                }
              } catch (f) {
              }
            }
            return nt(n, null, null, [t]).length > 0;
          };
        }
      })();
    }
    i$$0.pseudos.nth = i$$0.pseudos.eq;
    i$$0.filters = mt.prototype = i$$0.pseudos;
    i$$0.setFilters = new mt;
    nt.attr = v.attr;
    v.find = nt;
    v.expr = nt.selectors;
    v.expr[":"] = v.expr.pseudos;
    v.unique = nt.uniqueSort;
    v.text = nt.getText;
    v.isXMLDoc = nt.isXML;
    v.contains = nt.contains;
  })(e$$2);
  var nt = /Until$/;
  var rt = /^(?:parents|prev(?:Until|All))/;
  var it = /^.[^:#\[\.,]*$/;
  var st = v.expr.match.needsContext;
  var ot = {
    children : true,
    contents : true,
    next : true,
    prev : true
  };
  v.fn.extend({
    find : function(e) {
      var t;
      var n;
      var r;
      var i;
      var s;
      var o;
      var u = this;
      if (typeof e != "string") {
        return v(e).filter(function() {
          t = 0;
          n = u.length;
          for (;t < n;t++) {
            if (v.contains(u[t], this)) {
              return true;
            }
          }
        });
      }
      o = this.pushStack("", "find", e);
      t = 0;
      n = this.length;
      for (;t < n;t++) {
        r = o.length;
        v.find(e, this[t], o);
        if (t > 0) {
          i = r;
          for (;i < o.length;i++) {
            s = 0;
            for (;s < r;s++) {
              if (o[s] === o[i]) {
                o.splice(i--, 1);
                break;
              }
            }
          }
        }
      }
      return o;
    },
    has : function(e) {
      var t;
      var n = v(e, this);
      var r = n.length;
      return this.filter(function() {
        t = 0;
        for (;t < r;t++) {
          if (v.contains(this, n[t])) {
            return true;
          }
        }
      });
    },
    not : function(e) {
      return this.pushStack(ft(this, e, false), "not", e);
    },
    filter : function(e) {
      return this.pushStack(ft(this, e, true), "filter", e);
    },
    is : function(e) {
      return!!e && (typeof e == "string" ? st.test(e) ? v(e, this.context).index(this[0]) >= 0 : v.filter(e, this).length > 0 : this.filter(e).length > 0);
    },
    closest : function(e, t) {
      var n;
      var r = 0;
      var i = this.length;
      var s = [];
      var o = st.test(e) || typeof e != "string" ? v(e, t || this.context) : 0;
      for (;r < i;r++) {
        n = this[r];
        for (;n && (n.ownerDocument && (n !== t && n.nodeType !== 11));) {
          if (o ? o.index(n) > -1 : v.find.matchesSelector(n, e)) {
            s.push(n);
            break;
          }
          n = n.parentNode;
        }
      }
      return s = s.length > 1 ? v.unique(s) : s, this.pushStack(s, "closest", e);
    },
    index : function(e) {
      return e ? typeof e == "string" ? v.inArray(this[0], v(e)) : v.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
    },
    add : function(e, t) {
      var n = typeof e == "string" ? v(e, t) : v.makeArray(e && e.nodeType ? [e] : e);
      var r = v.merge(this.get(), n);
      return this.pushStack(ut(n[0]) || ut(r[0]) ? r : v.unique(r));
    },
    addBack : function(e) {
      return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
    }
  });
  v.fn.andSelf = v.fn.addBack;
  v.each({
    parent : function(e) {
      var t = e.parentNode;
      return t && t.nodeType !== 11 ? t : null;
    },
    parents : function(e) {
      return v.dir(e, "parentNode");
    },
    parentsUntil : function(e, t, n) {
      return v.dir(e, "parentNode", n);
    },
    next : function(e) {
      return at(e, "nextSibling");
    },
    prev : function(e) {
      return at(e, "previousSibling");
    },
    nextAll : function(e) {
      return v.dir(e, "nextSibling");
    },
    prevAll : function(e) {
      return v.dir(e, "previousSibling");
    },
    nextUntil : function(e, t, n) {
      return v.dir(e, "nextSibling", n);
    },
    prevUntil : function(e, t, n) {
      return v.dir(e, "previousSibling", n);
    },
    siblings : function(e) {
      return v.sibling((e.parentNode || {}).firstChild, e);
    },
    children : function(e) {
      return v.sibling(e.firstChild);
    },
    contents : function(e) {
      return v.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : v.merge([], e.childNodes);
    }
  }, function(e, t) {
    v.fn[e] = function(n, r) {
      var i = v.map(this, t, n);
      return nt.test(e) || (r = n), r && (typeof r == "string" && (i = v.filter(r, i))), i = this.length > 1 && !ot[e] ? v.unique(i) : i, this.length > 1 && (rt.test(e) && (i = i.reverse())), this.pushStack(i, e, l.call(arguments).join(","));
    };
  });
  v.extend({
    filter : function(e, t, n) {
      return n && (e = ":not(" + e + ")"), t.length === 1 ? v.find.matchesSelector(t[0], e) ? [t[0]] : [] : v.find.matches(e, t);
    },
    dir : function(e, n, r) {
      var i = [];
      var s = e[n];
      for (;s && (s.nodeType !== 9 && (r === t || (s.nodeType !== 1 || !v(s).is(r))));) {
        if (s.nodeType === 1) {
          i.push(s);
        }
        s = s[n];
      }
      return i;
    },
    sibling : function(e, t) {
      var n = [];
      for (;e;e = e.nextSibling) {
        if (e.nodeType === 1) {
          if (e !== t) {
            n.push(e);
          }
        }
      }
      return n;
    }
  });
  var ct = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video";
  var ht = / jQuery\d+="(?:null|\d+)"/g;
  var pt = /^\s+/;
  var dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi;
  var vt = /<([\w:]+)/;
  var mt = /<tbody/i;
  var gt = /<|&#?\w+;/;
  var yt = /<(?:script|style|link)/i;
  var bt = /<(?:script|object|embed|option|style)/i;
  var wt = new RegExp("<(?:" + ct + ")[\\s/>]", "i");
  var Et = /^(?:checkbox|radio)$/;
  var St = /checked\s*(?:[^=]|=\s*.checked.)/i;
  var xt = /\/(java|ecma)script/i;
  var Tt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g;
  var Nt = {
    option : [1, "<select multiple='multiple'>", "</select>"],
    legend : [1, "<fieldset>", "</fieldset>"],
    thead : [1, "<table>", "</table>"],
    tr : [2, "<table><tbody>", "</tbody></table>"],
    td : [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    col : [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
    area : [1, "<map>", "</map>"],
    _default : [0, "", ""]
  };
  var Ct = lt(i$$2);
  var kt = Ct.appendChild(i$$2.createElement("div"));
  Nt.optgroup = Nt.option;
  Nt.tbody = Nt.tfoot = Nt.colgroup = Nt.caption = Nt.thead;
  Nt.th = Nt.td;
  if (!v.support.htmlSerialize) {
    Nt._default = [1, "X<div>", "</div>"];
  }
  v.fn.extend({
    text : function(e$$0) {
      return v.access(this, function(e) {
        return e === t ? v.text(this) : this.empty().append((this[0] && this[0].ownerDocument || i$$2).createTextNode(e));
      }, null, e$$0, arguments.length);
    },
    wrapAll : function(e$$0) {
      if (v.isFunction(e$$0)) {
        return this.each(function(t) {
          v(this).wrapAll(e$$0.call(this, t));
        });
      }
      if (this[0]) {
        var t$$0 = v(e$$0, this[0].ownerDocument).eq(0).clone(true);
        if (this[0].parentNode) {
          t$$0.insertBefore(this[0]);
        }
        t$$0.map(function() {
          var e = this;
          for (;e.firstChild && e.firstChild.nodeType === 1;) {
            e = e.firstChild;
          }
          return e;
        }).append(this);
      }
      return this;
    },
    wrapInner : function(e) {
      return v.isFunction(e) ? this.each(function(t) {
        v(this).wrapInner(e.call(this, t));
      }) : this.each(function() {
        var t = v(this);
        var n = t.contents();
        if (n.length) {
          n.wrapAll(e);
        } else {
          t.append(e);
        }
      });
    },
    wrap : function(e) {
      var t = v.isFunction(e);
      return this.each(function(n) {
        v(this).wrapAll(t ? e.call(this, n) : e);
      });
    },
    unwrap : function() {
      return this.parent().each(function() {
        if (!v.nodeName(this, "body")) {
          v(this).replaceWith(this.childNodes);
        }
      }).end();
    },
    append : function() {
      return this.domManip(arguments, true, function(e) {
        if (this.nodeType === 1 || this.nodeType === 11) {
          this.appendChild(e);
        }
      });
    },
    prepend : function() {
      return this.domManip(arguments, true, function(e) {
        if (this.nodeType === 1 || this.nodeType === 11) {
          this.insertBefore(e, this.firstChild);
        }
      });
    },
    before : function() {
      if (!ut(this[0])) {
        return this.domManip(arguments, false, function(e) {
          this.parentNode.insertBefore(e, this);
        });
      }
      if (arguments.length) {
        var e$$0 = v.clean(arguments);
        return this.pushStack(v.merge(e$$0, this), "before", this.selector);
      }
    },
    after : function() {
      if (!ut(this[0])) {
        return this.domManip(arguments, false, function(e) {
          this.parentNode.insertBefore(e, this.nextSibling);
        });
      }
      if (arguments.length) {
        var e$$0 = v.clean(arguments);
        return this.pushStack(v.merge(this, e$$0), "after", this.selector);
      }
    },
    remove : function(e, t) {
      var n;
      var r = 0;
      for (;(n = this[r]) != null;r++) {
        if (!e || v.filter(e, [n]).length) {
          if (!t) {
            if (n.nodeType === 1) {
              v.cleanData(n.getElementsByTagName("*"));
              v.cleanData([n]);
            }
          }
          if (n.parentNode) {
            n.parentNode.removeChild(n);
          }
        }
      }
      return this;
    },
    empty : function() {
      var e;
      var t = 0;
      for (;(e = this[t]) != null;t++) {
        if (e.nodeType === 1) {
          v.cleanData(e.getElementsByTagName("*"));
        }
        for (;e.firstChild;) {
          e.removeChild(e.firstChild);
        }
      }
      return this;
    },
    clone : function(e, t) {
      return e = e == null ? false : e, t = t == null ? e : t, this.map(function() {
        return v.clone(this, e, t);
      });
    },
    html : function(e$$0) {
      return v.access(this, function(e) {
        var n = this[0] || {};
        var r = 0;
        var i = this.length;
        if (e === t) {
          return n.nodeType === 1 ? n.innerHTML.replace(ht, "") : t;
        }
        if (typeof e == "string" && (!yt.test(e) && ((v.support.htmlSerialize || !wt.test(e)) && ((v.support.leadingWhitespace || !pt.test(e)) && !Nt[(vt.exec(e) || ["", ""])[1].toLowerCase()])))) {
          e = e.replace(dt, "<$1></$2>");
          try {
            for (;r < i;r++) {
              n = this[r] || {};
              if (n.nodeType === 1) {
                v.cleanData(n.getElementsByTagName("*"));
                n.innerHTML = e;
              }
            }
            n = 0;
          } catch (s) {
          }
        }
        if (n) {
          this.empty().append(e);
        }
      }, null, e$$0, arguments.length);
    },
    replaceWith : function(e) {
      return ut(this[0]) ? this.length ? this.pushStack(v(v.isFunction(e) ? e() : e), "replaceWith", e) : this : v.isFunction(e) ? this.each(function(t) {
        var n = v(this);
        var r = n.html();
        n.replaceWith(e.call(this, t, r));
      }) : (typeof e != "string" && (e = v(e).detach()), this.each(function() {
        var t = this.nextSibling;
        var n = this.parentNode;
        v(this).remove();
        if (t) {
          v(t).before(e);
        } else {
          v(n).append(e);
        }
      }));
    },
    detach : function(e) {
      return this.remove(e, true);
    },
    domManip : function(e$$0, n, r) {
      e$$0 = [].concat.apply([], e$$0);
      var i$$0;
      var s$$0;
      var o;
      var u;
      var a = 0;
      var f = e$$0[0];
      var l = [];
      var c = this.length;
      if (!v.support.checkClone && (c > 1 && (typeof f == "string" && St.test(f)))) {
        return this.each(function() {
          v(this).domManip(e$$0, n, r);
        });
      }
      if (v.isFunction(f)) {
        return this.each(function(i) {
          var s = v(this);
          e$$0[0] = f.call(this, i, n ? s.html() : t);
          s.domManip(e$$0, n, r);
        });
      }
      if (this[0]) {
        i$$0 = v.buildFragment(e$$0, this, l);
        o = i$$0.fragment;
        s$$0 = o.firstChild;
        if (o.childNodes.length === 1) {
          o = s$$0;
        }
        if (s$$0) {
          n = n && v.nodeName(s$$0, "tr");
          u = i$$0.cacheable || c - 1;
          for (;a < c;a++) {
            r.call(n && v.nodeName(this[a], "table") ? Lt(this[a], "tbody") : this[a], a === u ? o : v.clone(o, true, true));
          }
        }
        o = s$$0 = null;
        if (l.length) {
          v.each(l, function(e, t) {
            if (t.src) {
              if (v.ajax) {
                v.ajax({
                  url : t.src,
                  type : "GET",
                  dataType : "script",
                  async : false,
                  global : false,
                  "throws" : true
                });
              } else {
                v.error("no ajax");
              }
            } else {
              v.globalEval((t.text || (t.textContent || (t.innerHTML || ""))).replace(Tt, ""));
            }
            if (t.parentNode) {
              t.parentNode.removeChild(t);
            }
          });
        }
      }
      return this;
    }
  });
  v.buildFragment = function(e, n, r) {
    var s;
    var o;
    var u;
    var a = e[0];
    return n = n || i$$2, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && (typeof a == "string" && (a.length < 512 && (n === i$$2 && (a.charAt(0) === "<" && (!bt.test(a) && ((v.support.checkClone || !St.test(a)) && ((v.support.html5Clone || !wt.test(a)) && (o = true, s = v.fragments[a], u = s !== t)))))))), s || (s = n.createDocumentFragment(), v.clean(e, n, s, r), o && (v.fragments[a] = u && s)), {
      fragment : s,
      cacheable : o
    };
  };
  v.fragments = {};
  v.each({
    appendTo : "append",
    prependTo : "prepend",
    insertBefore : "before",
    insertAfter : "after",
    replaceAll : "replaceWith"
  }, function(e, t) {
    v.fn[e] = function(n) {
      var r;
      var i = 0;
      var s = [];
      var o = v(n);
      var u = o.length;
      var a = this.length === 1 && this[0].parentNode;
      if ((a == null || a && (a.nodeType === 11 && a.childNodes.length === 1)) && u === 1) {
        return o[t](this[0]), this;
      }
      for (;i < u;i++) {
        r = (i > 0 ? this.clone(true) : this).get();
        v(o[i])[t](r);
        s = s.concat(r);
      }
      return this.pushStack(s, e, o.selector);
    };
  });
  v.extend({
    clone : function(e, t, n) {
      var r;
      var i;
      var s;
      var o;
      if (v.support.html5Clone || (v.isXMLDoc(e) || !wt.test("<" + e.nodeName + ">"))) {
        o = e.cloneNode(true);
      } else {
        kt.innerHTML = e.outerHTML;
        kt.removeChild(o = kt.firstChild);
      }
      if ((!v.support.noCloneEvent || !v.support.noCloneChecked) && ((e.nodeType === 1 || e.nodeType === 11) && !v.isXMLDoc(e))) {
        Ot(e, o);
        r = Mt(e);
        i = Mt(o);
        s = 0;
        for (;r[s];++s) {
          if (i[s]) {
            Ot(r[s], i[s]);
          }
        }
      }
      if (t) {
        At(e, o);
        if (n) {
          r = Mt(e);
          i = Mt(o);
          s = 0;
          for (;r[s];++s) {
            At(r[s], i[s]);
          }
        }
      }
      return r = i = null, o;
    },
    clean : function(e$$0, t, n, r) {
      var s;
      var o;
      var u;
      var a;
      var f;
      var l;
      var c;
      var h;
      var p;
      var d;
      var m;
      var g;
      var y = t === i$$2 && Ct;
      var b = [];
      if (!t || typeof t.createDocumentFragment == "undefined") {
        t = i$$2;
      }
      s = 0;
      for (;(u = e$$0[s]) != null;s++) {
        if (typeof u == "number") {
          u += "";
        }
        if (!u) {
          continue;
        }
        if (typeof u == "string") {
          if (!gt.test(u)) {
            u = t.createTextNode(u);
          } else {
            y = y || lt(t);
            c = t.createElement("div");
            y.appendChild(c);
            u = u.replace(dt, "<$1></$2>");
            a = (vt.exec(u) || ["", ""])[1].toLowerCase();
            f = Nt[a] || Nt._default;
            l = f[0];
            c.innerHTML = f[1] + u + f[2];
            for (;l--;) {
              c = c.lastChild;
            }
            if (!v.support.tbody) {
              h = mt.test(u);
              p = a === "table" && !h ? c.firstChild && c.firstChild.childNodes : f[1] === "<table>" && !h ? c.childNodes : [];
              o = p.length - 1;
              for (;o >= 0;--o) {
                if (v.nodeName(p[o], "tbody")) {
                  if (!p[o].childNodes.length) {
                    p[o].parentNode.removeChild(p[o]);
                  }
                }
              }
            }
            if (!v.support.leadingWhitespace) {
              if (pt.test(u)) {
                c.insertBefore(t.createTextNode(pt.exec(u)[0]), c.firstChild);
              }
            }
            u = c.childNodes;
            c.parentNode.removeChild(c);
          }
        }
        if (u.nodeType) {
          b.push(u);
        } else {
          v.merge(b, u);
        }
      }
      if (c) {
        u = c = y = null;
      }
      if (!v.support.appendChecked) {
        s = 0;
        for (;(u = b[s]) != null;s++) {
          if (v.nodeName(u, "input")) {
            _t(u);
          } else {
            if (typeof u.getElementsByTagName != "undefined") {
              v.grep(u.getElementsByTagName("input"), _t);
            }
          }
        }
      }
      if (n) {
        m = function(e) {
          if (!e.type || xt.test(e.type)) {
            return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
          }
        };
        s = 0;
        for (;(u = b[s]) != null;s++) {
          if (!v.nodeName(u, "script") || !m(u)) {
            n.appendChild(u);
            if (typeof u.getElementsByTagName != "undefined") {
              g = v.grep(v.merge([], u.getElementsByTagName("script")), m);
              b.splice.apply(b, [s + 1, 0].concat(g));
              s += g.length;
            }
          }
        }
      }
      return b;
    },
    cleanData : function(e, t) {
      var n;
      var r;
      var i;
      var s;
      var o = 0;
      var u = v.expando;
      var a = v.cache;
      var f = v.support.deleteExpando;
      var l = v.event.special;
      for (;(i = e[o]) != null;o++) {
        if (t || v.acceptData(i)) {
          r = i[u];
          n = r && a[r];
          if (n) {
            if (n.events) {
              for (s in n.events) {
                if (l[s]) {
                  v.event.remove(i, s);
                } else {
                  v.removeEvent(i, s, n.handle);
                }
              }
            }
            if (a[r]) {
              delete a[r];
              if (f) {
                delete i[u];
              } else {
                if (i.removeAttribute) {
                  i.removeAttribute(u);
                } else {
                  i[u] = null;
                }
              }
              v.deletedIds.push(r);
            }
          }
        }
      }
    }
  });
  (function() {
    var e$$0;
    var t$$1;
    v.uaMatch = function(e) {
      e = e.toLowerCase();
      var t = /(chrome)[ \/]([\w.]+)/.exec(e) || (/(webkit)[ \/]([\w.]+)/.exec(e) || (/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || (/(msie) ([\w.]+)/.exec(e) || (e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []))));
      return{
        browser : t[1] || "",
        version : t[2] || "0"
      };
    };
    e$$0 = v.uaMatch(o.userAgent);
    t$$1 = {};
    if (e$$0.browser) {
      t$$1[e$$0.browser] = true;
      t$$1.version = e$$0.version;
    }
    if (t$$1.chrome) {
      t$$1.webkit = true;
    } else {
      if (t$$1.webkit) {
        t$$1.safari = true;
      }
    }
    v.browser = t$$1;
    v.sub = function() {
      function e(t, n) {
        return new e.fn.init(t, n);
      }
      v.extend(true, e, this);
      e.superclass = this;
      e.fn = e.prototype = this();
      e.fn.constructor = e;
      e.sub = this.sub;
      e.fn.init = function(r, i) {
        return i && (i instanceof v && (!(i instanceof e) && (i = e(i)))), v.fn.init.call(this, r, i, t$$0);
      };
      e.fn.init.prototype = e.fn;
      var t$$0 = e(i$$2);
      return e;
    };
  })();
  var Dt;
  var Pt;
  var Ht;
  var Bt = /alpha\([^)]*\)/i;
  var jt = /opacity=([^)]*)/;
  var Ft = /^(top|right|bottom|left)$/;
  var It = /^(none|table(?!-c[ea]).+)/;
  var qt = /^margin/;
  var Rt = new RegExp("^(" + m + ")(.*)$", "i");
  var Ut = new RegExp("^(" + m + ")(?!px)[a-z%]+$", "i");
  var zt = new RegExp("^([-+])=(" + m + ")", "i");
  var Wt = {
    BODY : "block"
  };
  var Xt = {
    position : "absolute",
    visibility : "hidden",
    display : "block"
  };
  var Vt = {
    letterSpacing : 0,
    fontWeight : 400
  };
  var $t = ["Top", "Right", "Bottom", "Left"];
  var Jt = ["Webkit", "O", "Moz", "ms"];
  var Kt = v.fn.toggle;
  v.fn.extend({
    css : function(e$$0, n$$0) {
      return v.access(this, function(e, n, r) {
        return r !== t ? v.style(e, n, r) : v.css(e, n);
      }, e$$0, n$$0, arguments.length > 1);
    },
    show : function() {
      return Yt(this, true);
    },
    hide : function() {
      return Yt(this);
    },
    toggle : function(e, t) {
      var n = typeof e == "boolean";
      return v.isFunction(e) && v.isFunction(t) ? Kt.apply(this, arguments) : this.each(function() {
        if (n ? e : Gt(this)) {
          v(this).show();
        } else {
          v(this).hide();
        }
      });
    }
  });
  v.extend({
    cssHooks : {
      opacity : {
        get : function(e, t) {
          if (t) {
            var n = Dt(e, "opacity");
            return n === "" ? "1" : n;
          }
        }
      }
    },
    cssNumber : {
      fillOpacity : true,
      fontWeight : true,
      lineHeight : true,
      opacity : true,
      orphans : true,
      widows : true,
      zIndex : true,
      zoom : true
    },
    cssProps : {
      "float" : v.support.cssFloat ? "cssFloat" : "styleFloat"
    },
    style : function(e, n, r, i) {
      if (!e || (e.nodeType === 3 || (e.nodeType === 8 || !e.style))) {
        return;
      }
      var s;
      var o;
      var u;
      var a = v.camelCase(n);
      var f = e.style;
      n = v.cssProps[a] || (v.cssProps[a] = Qt(f, a));
      u = v.cssHooks[n] || v.cssHooks[a];
      if (r === t) {
        return u && ("get" in u && (s = u.get(e, false, i)) !== t) ? s : f[n];
      }
      o = typeof r;
      if (o === "string") {
        if (s = zt.exec(r)) {
          r = (s[1] + 1) * s[2] + parseFloat(v.css(e, n));
          o = "number";
        }
      }
      if (r == null || o === "number" && isNaN(r)) {
        return;
      }
      if (o === "number") {
        if (!v.cssNumber[a]) {
          r += "px";
        }
      }
      if (!u || (!("set" in u) || (r = u.set(e, r, i)) !== t)) {
        try {
          f[n] = r;
        } catch (l) {
        }
      }
    },
    css : function(e, n, r, i) {
      var s;
      var o;
      var u;
      var a = v.camelCase(n);
      return n = v.cssProps[a] || (v.cssProps[a] = Qt(e.style, a)), u = v.cssHooks[n] || v.cssHooks[a], u && ("get" in u && (s = u.get(e, true, i))), s === t && (s = Dt(e, n)), s === "normal" && (n in Vt && (s = Vt[n])), r || i !== t ? (o = parseFloat(s), r || v.isNumeric(o) ? o || 0 : s) : s;
    },
    swap : function(e, t, n) {
      var r;
      var i;
      var s = {};
      for (i in t) {
        s[i] = e.style[i];
        e.style[i] = t[i];
      }
      r = n.call(e);
      for (i in t) {
        e.style[i] = s[i];
      }
      return r;
    }
  });
  if (e$$2.getComputedStyle) {
    Dt = function(t, n) {
      var r;
      var i;
      var s;
      var o;
      var u = e$$2.getComputedStyle(t, null);
      var a = t.style;
      return u && (r = u.getPropertyValue(n) || u[n], r === "" && (!v.contains(t.ownerDocument, t) && (r = v.style(t, n))), Ut.test(r) && (qt.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o))), r;
    };
  } else {
    if (i$$2.documentElement.currentStyle) {
      Dt = function(e, t) {
        var n;
        var r;
        var i = e.currentStyle && e.currentStyle[t];
        var s = e.style;
        return i == null && (s && (s[t] && (i = s[t]))), Ut.test(i) && (!Ft.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r))), i === "" ? "auto" : i;
      };
    }
  }
  v.each(["height", "width"], function(e$$0, t) {
    v.cssHooks[t] = {
      get : function(e, n, r) {
        if (n) {
          return e.offsetWidth === 0 && It.test(Dt(e, "display")) ? v.swap(e, Xt, function() {
            return tn(e, t, r);
          }) : tn(e, t, r);
        }
      },
      set : function(e, n, r) {
        return Zt(e, n, r ? en(e, t, r, v.support.boxSizing && v.css(e, "boxSizing") === "border-box") : 0);
      }
    };
  });
  if (!v.support.opacity) {
    v.cssHooks.opacity = {
      get : function(e, t) {
        return jt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? 0.01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
      },
      set : function(e, t) {
        var n = e.style;
        var r = e.currentStyle;
        var i = v.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "";
        var s = r && r.filter || (n.filter || "");
        n.zoom = 1;
        if (t >= 1 && (v.trim(s.replace(Bt, "")) === "" && n.removeAttribute)) {
          n.removeAttribute("filter");
          if (r && !r.filter) {
            return;
          }
        }
        n.filter = Bt.test(s) ? s.replace(Bt, i) : s + " " + i;
      }
    };
  }
  v(function() {
    if (!v.support.reliableMarginRight) {
      v.cssHooks.marginRight = {
        get : function(e, t) {
          return v.swap(e, {
            display : "inline-block"
          }, function() {
            if (t) {
              return Dt(e, "marginRight");
            }
          });
        }
      };
    }
    if (!v.support.pixelPosition) {
      if (v.fn.position) {
        v.each(["top", "left"], function(e$$0, t) {
          v.cssHooks[t] = {
            get : function(e, n) {
              if (n) {
                var r = Dt(e, t);
                return Ut.test(r) ? v(e).position()[t] + "px" : r;
              }
            }
          };
        });
      }
    }
  });
  if (v.expr) {
    if (v.expr.filters) {
      v.expr.filters.hidden = function(e) {
        return e.offsetWidth === 0 && e.offsetHeight === 0 || !v.support.reliableHiddenOffsets && (e.style && e.style.display || Dt(e, "display")) === "none";
      };
      v.expr.filters.visible = function(e) {
        return!v.expr.filters.hidden(e);
      };
    }
  }
  v.each({
    margin : "",
    padding : "",
    border : "Width"
  }, function(e, t) {
    v.cssHooks[e + t] = {
      expand : function(n) {
        var r;
        var i = typeof n == "string" ? n.split(" ") : [n];
        var s = {};
        r = 0;
        for (;r < 4;r++) {
          s[e + $t[r] + t] = i[r] || (i[r - 2] || i[0]);
        }
        return s;
      }
    };
    if (!qt.test(e)) {
      v.cssHooks[e + t].set = Zt;
    }
  });
  var rn = /%20/g;
  var sn = /\[\]$/;
  var on = /\r?\n/g;
  var un = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
  var an = /^(?:select|textarea)/i;
  v.fn.extend({
    serialize : function() {
      return v.param(this.serializeArray());
    },
    serializeArray : function() {
      return this.map(function() {
        return this.elements ? v.makeArray(this.elements) : this;
      }).filter(function() {
        return this.name && (!this.disabled && (this.checked || (an.test(this.nodeName) || un.test(this.type))));
      }).map(function(e$$0, t) {
        var n$$0 = v(this).val();
        return n$$0 == null ? null : v.isArray(n$$0) ? v.map(n$$0, function(e, n) {
          return{
            name : t.name,
            value : e.replace(on, "\r\n")
          };
        }) : {
          name : t.name,
          value : n$$0.replace(on, "\r\n")
        };
      }).get();
    }
  });
  v.param = function(e$$0, n) {
    var r;
    var i = [];
    var s = function(e, t) {
      t = v.isFunction(t) ? t() : t == null ? "" : t;
      i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };
    if (n === t) {
      n = v.ajaxSettings && v.ajaxSettings.traditional;
    }
    if (v.isArray(e$$0) || e$$0.jquery && !v.isPlainObject(e$$0)) {
      v.each(e$$0, function() {
        s(this.name, this.value);
      });
    } else {
      for (r in e$$0) {
        fn(r, e$$0[r], n, s);
      }
    }
    return i.join("&").replace(rn, "+");
  };
  var ln;
  var cn;
  var hn = /#.*$/;
  var pn = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg;
  var dn = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/;
  var vn = /^(?:GET|HEAD)$/;
  var mn = /^\/\//;
  var gn = /\?/;
  var yn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
  var bn = /([?&])_=[^&]*/;
  var wn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/;
  var En = v.fn.load;
  var Sn = {};
  var xn = {};
  var Tn = ["*/"] + ["*"];
  try {
    cn = s$$2.href;
  } catch (Nn) {
    cn = i$$2.createElement("a");
    cn.href = "";
    cn = cn.href;
  }
  ln = wn.exec(cn.toLowerCase()) || [];
  v.fn.load = function(e$$0, n, r) {
    if (typeof e$$0 != "string" && En) {
      return En.apply(this, arguments);
    }
    if (!this.length) {
      return this;
    }
    var i;
    var s;
    var o;
    var u = this;
    var a = e$$0.indexOf(" ");
    return a >= 0 && (i = e$$0.slice(a, e$$0.length), e$$0 = e$$0.slice(0, a)), v.isFunction(n) ? (r = n, n = t) : n && (typeof n == "object" && (s = "POST")), v.ajax({
      url : e$$0,
      type : s,
      dataType : "html",
      data : n,
      complete : function(e, t) {
        if (r) {
          u.each(r, o || [e.responseText, t, e]);
        }
      }
    }).done(function(e) {
      o = arguments;
      u.html(i ? v("<div>").append(e.replace(yn, "")).find(i) : e);
    }), this;
  };
  v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e$$0, t) {
    v.fn[t] = function(e) {
      return this.on(t, e);
    };
  });
  v.each(["get", "post"], function(e$$0, n) {
    v[n] = function(e, r, i, s) {
      return v.isFunction(r) && (s = s || i, i = r, r = t), v.ajax({
        type : n,
        url : e,
        data : r,
        success : i,
        dataType : s
      });
    };
  });
  v.extend({
    getScript : function(e, n) {
      return v.get(e, t, n, "script");
    },
    getJSON : function(e, t, n) {
      return v.get(e, t, n, "json");
    },
    ajaxSetup : function(e, t) {
      return t ? Ln(e, v.ajaxSettings) : (t = e, e = v.ajaxSettings), Ln(e, t), e;
    },
    ajaxSettings : {
      url : cn,
      isLocal : dn.test(ln[1]),
      global : true,
      type : "GET",
      contentType : "application/x-www-form-urlencoded; charset=UTF-8",
      processData : true,
      async : true,
      accepts : {
        xml : "application/xml, text/xml",
        html : "text/html",
        text : "text/plain",
        json : "application/json, text/javascript",
        "*" : Tn
      },
      contents : {
        xml : /xml/,
        html : /html/,
        json : /json/
      },
      responseFields : {
        xml : "responseXML",
        text : "responseText"
      },
      converters : {
        "* text" : e$$2.String,
        "text html" : true,
        "text json" : v.parseJSON,
        "text xml" : v.parseXML
      },
      flatOptions : {
        context : true,
        url : true
      }
    },
    ajaxPrefilter : Cn(Sn),
    ajaxTransport : Cn(xn),
    ajax : function(e$$0, n$$0) {
      function T$$0(e, n, s, a) {
        var l;
        var y;
        var b;
        var w;
        var S;
        var T = n;
        if (E === 2) {
          return;
        }
        E = 2;
        if (u) {
          clearTimeout(u);
        }
        o = t;
        i = a || "";
        x.readyState = e > 0 ? 4 : 0;
        if (s) {
          w = An(c, x, s);
        }
        if (e >= 200 && e < 300 || e === 304) {
          if (c.ifModified) {
            S = x.getResponseHeader("Last-Modified");
            if (S) {
              v.lastModified[r] = S;
            }
            S = x.getResponseHeader("Etag");
            if (S) {
              v.etag[r] = S;
            }
          }
          if (e === 304) {
            T = "notmodified";
            l = true;
          } else {
            l = On(c, w);
            T = l.state;
            y = l.data;
            b = l.error;
            l = !b;
          }
        } else {
          b = T;
          if (!T || e) {
            T = "error";
            if (e < 0) {
              e = 0;
            }
          }
        }
        x.status = e;
        x.statusText = (n || T) + "";
        if (l) {
          d.resolveWith(h, [y, T, x]);
        } else {
          d.rejectWith(h, [x, T, b]);
        }
        x.statusCode(g);
        g = t;
        if (f) {
          p.trigger("ajax" + (l ? "Success" : "Error"), [x, c, l ? y : b]);
        }
        m.fireWith(h, [x, T]);
        if (f) {
          p.trigger("ajaxComplete", [x, c]);
          if (!--v.active) {
            v.event.trigger("ajaxStop");
          }
        }
      }
      if (typeof e$$0 == "object") {
        n$$0 = e$$0;
        e$$0 = t;
      }
      n$$0 = n$$0 || {};
      var r;
      var i;
      var s$$0;
      var o;
      var u;
      var a$$0;
      var f;
      var l$$0;
      var c = v.ajaxSetup({}, n$$0);
      var h = c.context || c;
      var p = h !== c && (h.nodeType || h instanceof v) ? v(h) : v.event;
      var d = v.Deferred();
      var m = v.Callbacks("once memory");
      var g = c.statusCode || {};
      var b$$0 = {};
      var w$$0 = {};
      var E = 0;
      var S$$0 = "canceled";
      var x = {
        readyState : 0,
        setRequestHeader : function(e, t) {
          if (!E) {
            var n = e.toLowerCase();
            e = w$$0[n] = w$$0[n] || e;
            b$$0[e] = t;
          }
          return this;
        },
        getAllResponseHeaders : function() {
          return E === 2 ? i : null;
        },
        getResponseHeader : function(e) {
          var n;
          if (E === 2) {
            if (!s$$0) {
              s$$0 = {};
              for (;n = pn.exec(i);) {
                s$$0[n[1].toLowerCase()] = n[2];
              }
            }
            n = s$$0[e.toLowerCase()];
          }
          return n === t ? null : n;
        },
        overrideMimeType : function(e) {
          return E || (c.mimeType = e), this;
        },
        abort : function(e) {
          return e = e || S$$0, o && o.abort(e), T$$0(0, e), this;
        }
      };
      d.promise(x);
      x.success = x.done;
      x.error = x.fail;
      x.complete = m.add;
      x.statusCode = function(e) {
        if (e) {
          var t;
          if (E < 2) {
            for (t in e) {
              g[t] = [g[t], e[t]];
            }
          } else {
            t = e[x.status];
            x.always(t);
          }
        }
        return this;
      };
      c.url = ((e$$0 || c.url) + "").replace(hn, "").replace(mn, ln[1] + "//");
      c.dataTypes = v.trim(c.dataType || "*").toLowerCase().split(y$$1);
      if (c.crossDomain == null) {
        a$$0 = wn.exec(c.url.toLowerCase());
        c.crossDomain = !(!a$$0 || a$$0[1] === ln[1] && (a$$0[2] === ln[2] && (a$$0[3] || (a$$0[1] === "http:" ? 80 : 443)) == (ln[3] || (ln[1] === "http:" ? 80 : 443))));
      }
      if (c.data) {
        if (c.processData) {
          if (typeof c.data != "string") {
            c.data = v.param(c.data, c.traditional);
          }
        }
      }
      kn(Sn, c, n$$0, x);
      if (E === 2) {
        return x;
      }
      f = c.global;
      c.type = c.type.toUpperCase();
      c.hasContent = !vn.test(c.type);
      if (f) {
        if (v.active++ === 0) {
          v.event.trigger("ajaxStart");
        }
      }
      if (!c.hasContent) {
        if (c.data) {
          c.url += (gn.test(c.url) ? "&" : "?") + c.data;
          delete c.data;
        }
        r = c.url;
        if (c.cache === false) {
          var N = v.now();
          var C = c.url.replace(bn, "$1_=" + N);
          c.url = C + (C === c.url ? (gn.test(c.url) ? "&" : "?") + "_=" + N : "");
        }
      }
      if (c.data && (c.hasContent && c.contentType !== false) || n$$0.contentType) {
        x.setRequestHeader("Content-Type", c.contentType);
      }
      if (c.ifModified) {
        r = r || c.url;
        if (v.lastModified[r]) {
          x.setRequestHeader("If-Modified-Since", v.lastModified[r]);
        }
        if (v.etag[r]) {
          x.setRequestHeader("If-None-Match", v.etag[r]);
        }
      }
      x.setRequestHeader("Accept", c.dataTypes[0] && c.accepts[c.dataTypes[0]] ? c.accepts[c.dataTypes[0]] + (c.dataTypes[0] !== "*" ? ", " + Tn + "; q=0.01" : "") : c.accepts["*"]);
      for (l$$0 in c.headers) {
        x.setRequestHeader(l$$0, c.headers[l$$0]);
      }
      if (!c.beforeSend || c.beforeSend.call(h, x, c) !== false && E !== 2) {
        S$$0 = "abort";
        for (l$$0 in{
          success : 1,
          error : 1,
          complete : 1
        }) {
          x[l$$0](c[l$$0]);
        }
        o = kn(xn, c, n$$0, x);
        if (!o) {
          T$$0(-1, "No Transport");
        } else {
          x.readyState = 1;
          if (f) {
            p.trigger("ajaxSend", [x, c]);
          }
          if (c.async) {
            if (c.timeout > 0) {
              u = setTimeout(function() {
                x.abort("timeout");
              }, c.timeout);
            }
          }
          try {
            E = 1;
            o.send(b$$0, T$$0);
          } catch (k) {
            if (!(E < 2)) {
              throw k;
            }
            T$$0(-1, k);
          }
        }
        return x;
      }
      return x.abort();
    },
    active : 0,
    lastModified : {},
    etag : {}
  });
  var Mn = [];
  var _n = /\?/;
  var Dn = /(=)\?(?=&|$)|\?\?/;
  var Pn = v.now();
  v.ajaxSetup({
    jsonp : "callback",
    jsonpCallback : function() {
      var e = Mn.pop() || v.expando + "_" + Pn++;
      return this[e] = true, e;
    }
  });
  v.ajaxPrefilter("json jsonp", function(n, r, i) {
    var s;
    var o;
    var u;
    var a = n.data;
    var f = n.url;
    var l = n.jsonp !== false;
    var c = l && Dn.test(f);
    var h = l && (!c && (typeof a == "string" && (!(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Dn.test(a))));
    if (n.dataTypes[0] === "jsonp" || (c || h)) {
      return s = n.jsonpCallback = v.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e$$2[s], c ? n.url = f.replace(Dn, "$1" + s) : h ? n.data = a.replace(Dn, "$1" + s) : l && (n.url += (_n.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
        return u || v.error(s + " was not called"), u[0];
      }, n.dataTypes[0] = "json", e$$2[s] = function() {
        u = arguments;
      }, i.always(function() {
        e$$2[s] = o;
        if (n[s]) {
          n.jsonpCallback = r.jsonpCallback;
          Mn.push(s);
        }
        if (u) {
          if (v.isFunction(o)) {
            o(u[0]);
          }
        }
        u = o = t;
      }), "script";
    }
  });
  v.ajaxSetup({
    accepts : {
      script : "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents : {
      script : /javascript|ecmascript/
    },
    converters : {
      "text script" : function(e) {
        return v.globalEval(e), e;
      }
    }
  });
  v.ajaxPrefilter("script", function(e) {
    if (e.cache === t) {
      e.cache = false;
    }
    if (e.crossDomain) {
      e.type = "GET";
      e.global = false;
    }
  });
  v.ajaxTransport("script", function(e$$0) {
    if (e$$0.crossDomain) {
      var n;
      var r = i$$2.head || (i$$2.getElementsByTagName("head")[0] || i$$2.documentElement);
      return{
        send : function(s, o) {
          n = i$$2.createElement("script");
          n.async = "async";
          if (e$$0.scriptCharset) {
            n.charset = e$$0.scriptCharset;
          }
          n.src = e$$0.url;
          n.onload = n.onreadystatechange = function(e, i) {
            if (i || (!n.readyState || /loaded|complete/.test(n.readyState))) {
              n.onload = n.onreadystatechange = null;
              if (r) {
                if (n.parentNode) {
                  r.removeChild(n);
                }
              }
              n = t;
              if (!i) {
                o(200, "success");
              }
            }
          };
          r.insertBefore(n, r.firstChild);
        },
        abort : function() {
          if (n) {
            n.onload(0, 1);
          }
        }
      };
    }
  });
  var Hn;
  var Bn = e$$2.ActiveXObject ? function() {
    var e;
    for (e in Hn) {
      Hn[e](0, 1);
    }
  } : false;
  var jn = 0;
  v.ajaxSettings.xhr = e$$2.ActiveXObject ? function() {
    return!this.isLocal && Fn() || In();
  } : Fn;
  (function(e) {
    v.extend(v.support, {
      ajax : !!e,
      cors : !!e && "withCredentials" in e
    });
  })(v.ajaxSettings.xhr());
  if (v.support.ajax) {
    v.ajaxTransport(function(n) {
      if (!n.crossDomain || v.support.cors) {
        var r;
        return{
          send : function(i$$0, s) {
            var o;
            var u$$0;
            var a = n.xhr();
            if (n.username) {
              a.open(n.type, n.url, n.async, n.username, n.password);
            } else {
              a.open(n.type, n.url, n.async);
            }
            if (n.xhrFields) {
              for (u$$0 in n.xhrFields) {
                a[u$$0] = n.xhrFields[u$$0];
              }
            }
            if (n.mimeType) {
              if (a.overrideMimeType) {
                a.overrideMimeType(n.mimeType);
              }
            }
            if (!n.crossDomain) {
              if (!i$$0["X-Requested-With"]) {
                i$$0["X-Requested-With"] = "XMLHttpRequest";
              }
            }
            try {
              for (u$$0 in i$$0) {
                a.setRequestHeader(u$$0, i$$0[u$$0]);
              }
            } catch (f$$0) {
            }
            a.send(n.hasContent && n.data || null);
            r = function(e, i) {
              var u;
              var f;
              var l;
              var c;
              var h;
              try {
                if (r && (i || a.readyState === 4)) {
                  r = t;
                  if (o) {
                    a.onreadystatechange = v.noop;
                    if (Bn) {
                      delete Hn[o];
                    }
                  }
                  if (i) {
                    if (a.readyState !== 4) {
                      a.abort();
                    }
                  } else {
                    u = a.status;
                    l = a.getAllResponseHeaders();
                    c = {};
                    h = a.responseXML;
                    if (h) {
                      if (h.documentElement) {
                        c.xml = h;
                      }
                    }
                    try {
                      c.text = a.responseText;
                    } catch (p) {
                    }
                    try {
                      f = a.statusText;
                    } catch (p$$0) {
                      f = "";
                    }
                    if (!u && (n.isLocal && !n.crossDomain)) {
                      u = c.text ? 200 : 404;
                    } else {
                      if (u === 1223) {
                        u = 204;
                      }
                    }
                  }
                }
              } catch (d) {
                if (!i) {
                  s(-1, d);
                }
              }
              if (c) {
                s(u, f, c, l);
              }
            };
            if (n.async) {
              if (a.readyState === 4) {
                setTimeout(r, 0);
              } else {
                o = ++jn;
                if (Bn) {
                  if (!Hn) {
                    Hn = {};
                    v(e$$2).unload(Bn);
                  }
                  Hn[o] = r;
                }
                a.onreadystatechange = r;
              }
            } else {
              r();
            }
          },
          abort : function() {
            if (r) {
              r(0, 1);
            }
          }
        };
      }
    });
  }
  var qn;
  var Rn;
  var Un = /^(?:toggle|show|hide)$/;
  var zn = new RegExp("^(?:([-+])=|)(" + m + ")([a-z%]*)$", "i");
  var Wn = /queueHooks$/;
  var Xn = [Gn];
  var Vn = {
    "*" : [function(e, t) {
      var n;
      var r;
      var i = this.createTween(e, t);
      var s = zn.exec(t);
      var o = i.cur();
      var u = +o || 0;
      var a = 1;
      var f = 20;
      if (s) {
        n = +s[2];
        r = s[3] || (v.cssNumber[e] ? "" : "px");
        if (r !== "px" && u) {
          u = v.css(i.elem, e, true) || (n || 1);
          do {
            a = a || ".5";
            u /= a;
            v.style(i.elem, e, u + r);
          } while (a !== (a = i.cur() / o) && (a !== 1 && --f));
        }
        i.unit = r;
        i.start = u;
        i.end = s[1] ? u + (s[1] + 1) * n : n;
      }
      return i;
    }]
  };
  v.Animation = v.extend(Kn, {
    tweener : function(e, t) {
      if (v.isFunction(e)) {
        t = e;
        e = ["*"];
      } else {
        e = e.split(" ");
      }
      var n;
      var r = 0;
      var i = e.length;
      for (;r < i;r++) {
        n = e[r];
        Vn[n] = Vn[n] || [];
        Vn[n].unshift(t);
      }
    },
    prefilter : function(e, t) {
      if (t) {
        Xn.unshift(e);
      } else {
        Xn.push(e);
      }
    }
  });
  v.Tween = Yn;
  Yn.prototype = {
    constructor : Yn,
    init : function(e, t, n, r, i, s) {
      this.elem = e;
      this.prop = n;
      this.easing = i || "swing";
      this.options = t;
      this.start = this.now = this.cur();
      this.end = r;
      this.unit = s || (v.cssNumber[n] ? "" : "px");
    },
    cur : function() {
      var e = Yn.propHooks[this.prop];
      return e && e.get ? e.get(this) : Yn.propHooks._default.get(this);
    },
    run : function(e) {
      var t;
      var n = Yn.propHooks[this.prop];
      return this.options.duration ? this.pos = t = v.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Yn.propHooks._default.set(this), this;
    }
  };
  Yn.prototype.init.prototype = Yn.prototype;
  Yn.propHooks = {
    _default : {
      get : function(e) {
        var t;
        return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = v.css(e.elem, e.prop, false, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
      },
      set : function(e) {
        if (v.fx.step[e.prop]) {
          v.fx.step[e.prop](e);
        } else {
          if (e.elem.style && (e.elem.style[v.cssProps[e.prop]] != null || v.cssHooks[e.prop])) {
            v.style(e.elem, e.prop, e.now + e.unit);
          } else {
            e.elem[e.prop] = e.now;
          }
        }
      }
    }
  };
  Yn.propHooks.scrollTop = Yn.propHooks.scrollLeft = {
    set : function(e) {
      if (e.elem.nodeType) {
        if (e.elem.parentNode) {
          e.elem[e.prop] = e.now;
        }
      }
    }
  };
  v.each(["toggle", "show", "hide"], function(e, t) {
    var n = v.fn[t];
    v.fn[t] = function(r, i, s) {
      return r == null || (typeof r == "boolean" || !e && (v.isFunction(r) && v.isFunction(i))) ? n.apply(this, arguments) : this.animate(Zn(t, true), r, i, s);
    };
  });
  v.fn.extend({
    fadeTo : function(e, t, n, r) {
      return this.filter(Gt).css("opacity", 0).show().end().animate({
        opacity : t
      }, e, n, r);
    },
    animate : function(e, t$$0, n, r) {
      var i = v.isEmptyObject(e);
      var s = v.speed(t$$0, n, r);
      var o = function() {
        var t = Kn(this, v.extend({}, e), s);
        if (i) {
          t.stop(true);
        }
      };
      return i || s.queue === false ? this.each(o) : this.queue(s.queue, o);
    },
    stop : function(e$$0, n$$0, r) {
      var i = function(e) {
        var t = e.stop;
        delete e.stop;
        t(r);
      };
      return typeof e$$0 != "string" && (r = n$$0, n$$0 = e$$0, e$$0 = t), n$$0 && (e$$0 !== false && this.queue(e$$0 || "fx", [])), this.each(function() {
        var t = true;
        var n = e$$0 != null && e$$0 + "queueHooks";
        var s = v.timers;
        var o = v._data(this);
        if (n) {
          if (o[n]) {
            if (o[n].stop) {
              i(o[n]);
            }
          }
        } else {
          for (n in o) {
            if (o[n]) {
              if (o[n].stop) {
                if (Wn.test(n)) {
                  i(o[n]);
                }
              }
            }
          }
        }
        n = s.length;
        for (;n--;) {
          if (s[n].elem === this) {
            if (e$$0 == null || s[n].queue === e$$0) {
              s[n].anim.stop(r);
              t = false;
              s.splice(n, 1);
            }
          }
        }
        if (t || !r) {
          v.dequeue(this, e$$0);
        }
      });
    }
  });
  v.each({
    slideDown : Zn("show"),
    slideUp : Zn("hide"),
    slideToggle : Zn("toggle"),
    fadeIn : {
      opacity : "show"
    },
    fadeOut : {
      opacity : "hide"
    },
    fadeToggle : {
      opacity : "toggle"
    }
  }, function(e$$0, t) {
    v.fn[e$$0] = function(e, n, r) {
      return this.animate(t, e, n, r);
    };
  });
  v.speed = function(e, t, n) {
    var r = e && typeof e == "object" ? v.extend({}, e) : {
      complete : n || (!n && t || v.isFunction(e) && e),
      duration : e,
      easing : n && t || t && (!v.isFunction(t) && t)
    };
    r.duration = v.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in v.fx.speeds ? v.fx.speeds[r.duration] : v.fx.speeds._default;
    if (r.queue == null || r.queue === true) {
      r.queue = "fx";
    }
    return r.old = r.complete, r.complete = function() {
      if (v.isFunction(r.old)) {
        r.old.call(this);
      }
      if (r.queue) {
        v.dequeue(this, r.queue);
      }
    }, r;
  };
  v.easing = {
    linear : function(e) {
      return e;
    },
    swing : function(e) {
      return 0.5 - Math.cos(e * Math.PI) / 2;
    }
  };
  v.timers = [];
  v.fx = Yn.prototype.init;
  v.fx.tick = function() {
    var e;
    var n = v.timers;
    var r = 0;
    qn = v.now();
    for (;r < n.length;r++) {
      e = n[r];
      if (!e()) {
        if (n[r] === e) {
          n.splice(r--, 1);
        }
      }
    }
    if (!n.length) {
      v.fx.stop();
    }
    qn = t;
  };
  v.fx.timer = function(e) {
    if (e()) {
      if (v.timers.push(e)) {
        if (!Rn) {
          Rn = setInterval(v.fx.tick, v.fx.interval);
        }
      }
    }
  };
  v.fx.interval = 13;
  v.fx.stop = function() {
    clearInterval(Rn);
    Rn = null;
  };
  v.fx.speeds = {
    slow : 600,
    fast : 200,
    _default : 400
  };
  v.fx.step = {};
  if (v.expr) {
    if (v.expr.filters) {
      v.expr.filters.animated = function(e) {
        return v.grep(v.timers, function(t) {
          return e === t.elem;
        }).length;
      };
    }
  }
  var er = /^(?:body|html)$/i;
  v.fn.offset = function(e) {
    if (arguments.length) {
      return e === t ? this : this.each(function(t) {
        v.offset.setOffset(this, e, t);
      });
    }
    var n;
    var r;
    var i;
    var s;
    var o;
    var u;
    var a;
    var f = {
      top : 0,
      left : 0
    };
    var l = this[0];
    var c = l && l.ownerDocument;
    if (!c) {
      return;
    }
    return(r = c.body) === l ? v.offset.bodyOffset(l) : (n = c.documentElement, v.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = tr(c), s = n.clientTop || (r.clientTop || 0), o = n.clientLeft || (r.clientLeft || 0), u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
      top : f.top + u - s,
      left : f.left + a - o
    }) : f);
  };
  v.offset = {
    bodyOffset : function(e) {
      var t = e.offsetTop;
      var n = e.offsetLeft;
      return v.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(v.css(e, "marginTop")) || 0, n += parseFloat(v.css(e, "marginLeft")) || 0), {
        top : t,
        left : n
      };
    },
    setOffset : function(e, t, n) {
      var r = v.css(e, "position");
      if (r === "static") {
        e.style.position = "relative";
      }
      var i = v(e);
      var s = i.offset();
      var o = v.css(e, "top");
      var u = v.css(e, "left");
      var a = (r === "absolute" || r === "fixed") && v.inArray("auto", [o, u]) > -1;
      var f = {};
      var l = {};
      var c;
      var h;
      if (a) {
        l = i.position();
        c = l.top;
        h = l.left;
      } else {
        c = parseFloat(o) || 0;
        h = parseFloat(u) || 0;
      }
      if (v.isFunction(t)) {
        t = t.call(e, n, s);
      }
      if (t.top != null) {
        f.top = t.top - s.top + c;
      }
      if (t.left != null) {
        f.left = t.left - s.left + h;
      }
      if ("using" in t) {
        t.using.call(e, f);
      } else {
        i.css(f);
      }
    }
  };
  v.fn.extend({
    position : function() {
      if (!this[0]) {
        return;
      }
      var e = this[0];
      var t = this.offsetParent();
      var n = this.offset();
      var r = er.test(t[0].nodeName) ? {
        top : 0,
        left : 0
      } : t.offset();
      return n.top -= parseFloat(v.css(e, "marginTop")) || 0, n.left -= parseFloat(v.css(e, "marginLeft")) || 0, r.top += parseFloat(v.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(v.css(t[0], "borderLeftWidth")) || 0, {
        top : n.top - r.top,
        left : n.left - r.left
      };
    },
    offsetParent : function() {
      return this.map(function() {
        var e = this.offsetParent || i$$2.body;
        for (;e && (!er.test(e.nodeName) && v.css(e, "position") === "static");) {
          e = e.offsetParent;
        }
        return e || i$$2.body;
      });
    }
  });
  v.each({
    scrollLeft : "pageXOffset",
    scrollTop : "pageYOffset"
  }, function(e$$0, n) {
    var r = /Y/.test(n);
    v.fn[e$$0] = function(i$$0) {
      return v.access(this, function(e, i, s) {
        var o = tr(e);
        if (s === t) {
          return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
        }
        if (o) {
          o.scrollTo(r ? v(o).scrollLeft() : s, r ? s : v(o).scrollTop());
        } else {
          e[i] = s;
        }
      }, e$$0, i$$0, arguments.length, null);
    };
  });
  v.each({
    Height : "height",
    Width : "width"
  }, function(e, n$$0) {
    v.each({
      padding : "inner" + e,
      content : n$$0,
      "" : "outer" + e
    }, function(r$$0, i$$1) {
      v.fn[i$$1] = function(i$$0, s$$0) {
        var o = arguments.length && (r$$0 || typeof i$$0 != "boolean");
        var u = r$$0 || (i$$0 === true || s$$0 === true ? "margin" : "border");
        return v.access(this, function(n, r, i) {
          var s;
          return v.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? v.css(n, r, i, u) : v.style(n, r, i, u);
        }, n$$0, o ? i$$0 : t, o, null);
      };
    });
  });
  e$$2.jQuery = e$$2.$ = v;
  if (typeof define == "function") {
    if (define.amd) {
      if (define.amd.jQuery) {
        define("jquery", [], function() {
          return v;
        });
      }
    }
  }
})(window);

