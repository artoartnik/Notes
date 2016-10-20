(function() {
  var k = this;
  var y = k.Backbone;
  var h$$0 = [];
  var z = h$$0.push;
  var r = h$$0.slice;
  var A = h$$0.splice;
  var g;
  g = "undefined" !== typeof exports ? exports : k.Backbone = {};
  g.VERSION = "0.9.9";
  var e$$0 = k._;
  if (!e$$0) {
    if ("undefined" !== typeof require) {
      e$$0 = require("underscore");
    }
  }
  g.$ = k.jQuery || (k.Zepto || k.ender);
  g.noConflict = function() {
    k.Backbone = y;
    return this;
  };
  g.emulateHTTP = false;
  g.emulateJSON = false;
  var s = /\s+/;
  var n = function(a, b, c, d) {
    if (!c) {
      return true;
    }
    if ("object" === typeof c) {
      var f;
      for (f in c) {
        a[b].apply(a, [f, c[f]].concat(d));
      }
    } else {
      if (s.test(c)) {
        c = c.split(s);
        f = 0;
        var e = c.length;
        for (;f < e;f++) {
          a[b].apply(a, [c[f]].concat(d));
        }
      } else {
        return true;
      }
    }
  };
  var t = function(a, b, c) {
    var d;
    a = -1;
    var f = b.length;
    switch(c.length) {
      case 0:
        for (;++a < f;) {
          (d = b[a]).callback.call(d.ctx);
        }
        break;
      case 1:
        for (;++a < f;) {
          (d = b[a]).callback.call(d.ctx, c[0]);
        }
        break;
      case 2:
        for (;++a < f;) {
          (d = b[a]).callback.call(d.ctx, c[0], c[1]);
        }
        break;
      case 3:
        for (;++a < f;) {
          (d = b[a]).callback.call(d.ctx, c[0], c[1], c[2]);
        }
        break;
      default:
        for (;++a < f;) {
          (d = b[a]).callback.apply(d.ctx, c);
        }
      ;
    }
  };
  h$$0 = g.Events = {
    on : function(a, b, c) {
      if (!n(this, "on", a, [b, c]) || !b) {
        return this;
      }
      if (!this._events) {
        this._events = {};
      }
      (this._events[a] || (this._events[a] = [])).push({
        callback : b,
        context : c,
        ctx : c || this
      });
      return this;
    },
    once : function(a, b, c) {
      if (!n(this, "once", a, [b, c]) || !b) {
        return this;
      }
      var d = this;
      var f = e$$0.once(function() {
        d.off(a, f);
        b.apply(this, arguments);
      });
      f._callback = b;
      this.on(a, f, c);
      return this;
    },
    off : function(a, b, c) {
      var d;
      var f;
      var l;
      var g;
      var i;
      var m;
      var h;
      var j;
      if (!this._events || !n(this, "off", a, [b, c])) {
        return this;
      }
      if (!a && (!b && !c)) {
        return this._events = {}, this;
      }
      g = a ? [a] : e$$0.keys(this._events);
      i = 0;
      m = g.length;
      for (;i < m;i++) {
        if (a = g[i], d = this._events[a]) {
          l = [];
          if (b || c) {
            h = 0;
            j = d.length;
            for (;h < j;h++) {
              f = d[h];
              if (b && b !== (f.callback._callback || f.callback) || c && c !== f.context) {
                l.push(f);
              }
            }
          }
          this._events[a] = l;
        }
      }
      return this;
    },
    trigger : function(a) {
      if (!this._events) {
        return this;
      }
      var b = r.call(arguments, 1);
      if (!n(this, "trigger", a, b)) {
        return this;
      }
      var c = this._events[a];
      var d = this._events.all;
      if (c) {
        t(this, c, b);
      }
      if (d) {
        t(this, d, arguments);
      }
      return this;
    },
    listenTo : function(a, b, c) {
      var d = this._listeners || (this._listeners = {});
      var f = a._listenerId || (a._listenerId = e$$0.uniqueId("l"));
      d[f] = a;
      a.on(b, c || this, this);
      return this;
    },
    stopListening : function(a, b, c) {
      var d = this._listeners;
      if (d) {
        if (a) {
          a.off(b, c, this);
          if (!b) {
            if (!c) {
              delete d[a._listenerId];
            }
          }
        } else {
          var f;
          for (f in d) {
            d[f].off(null, null, this);
          }
          this._listeners = {};
        }
        return this;
      }
    }
  };
  h$$0.bind = h$$0.on;
  h$$0.unbind = h$$0.off;
  e$$0.extend(g, h$$0);
  var o = g.Model = function(a, b) {
    var c;
    var d = a || {};
    this.cid = e$$0.uniqueId("c");
    this.changed = {};
    this.attributes = {};
    this._changes = [];
    if (b) {
      if (b.collection) {
        this.collection = b.collection;
      }
    }
    if (b) {
      if (b.parse) {
        d = this.parse(d);
      }
    }
    if (c = e$$0.result(this, "defaults")) {
      e$$0.defaults(d, c);
    }
    this.set(d, {
      silent : true
    });
    this._currentAttributes = e$$0.clone(this.attributes);
    this._previousAttributes = e$$0.clone(this.attributes);
    this.initialize.apply(this, arguments);
  };
  e$$0.extend(o.prototype, h$$0, {
    changed : null,
    idAttribute : "id",
    initialize : function() {
    },
    toJSON : function() {
      return e$$0.clone(this.attributes);
    },
    sync : function() {
      return g.sync.apply(this, arguments);
    },
    get : function(a) {
      return this.attributes[a];
    },
    escape : function(a) {
      return e$$0.escape(this.get(a));
    },
    has : function(a) {
      return null != this.get(a);
    },
    set : function(a, b, c) {
      var d;
      var f;
      if (null == a) {
        return this;
      }
      if (e$$0.isObject(a)) {
        f = a;
        c = b;
      } else {
        (f = {})[a] = b;
      }
      a = c && c.silent;
      var l = c && c.unset;
      if (!this._validate(f, c)) {
        return false;
      }
      if (this.idAttribute in f) {
        this.id = f[this.idAttribute];
      }
      var g = this.attributes;
      for (d in f) {
        b = f[d];
        if (l) {
          delete g[d];
        } else {
          g[d] = b;
        }
        this._changes.push(d, b);
      }
      this._hasComputed = false;
      if (!a) {
        this.change(c);
      }
      return this;
    },
    unset : function(a, b) {
      return this.set(a, void 0, e$$0.extend({}, b, {
        unset : true
      }));
    },
    clear : function(a) {
      var b = {};
      var c;
      for (c in this.attributes) {
        b[c] = void 0;
      }
      return this.set(b, e$$0.extend({}, a, {
        unset : true
      }));
    },
    fetch : function(a) {
      a = a ? e$$0.clone(a) : {};
      if (void 0 === a.parse) {
        a.parse = true;
      }
      var b = this;
      var c = a.success;
      a.success = function(d) {
        if (!b.set(b.parse(d), a)) {
          return false;
        }
        if (c) {
          c(b, d, a);
        }
      };
      return this.sync("read", this, a);
    },
    save : function(a$$0, b$$0, c) {
      var d;
      var f;
      var g;
      if (null == a$$0 || e$$0.isObject(a$$0)) {
        d = a$$0;
        c = b$$0;
      } else {
        if (null != a$$0) {
          (d = {})[a$$0] = b$$0;
        }
      }
      c = c ? e$$0.clone(c) : {};
      if (c.wait) {
        if (d && !this._validate(d, c)) {
          return false;
        }
        f = e$$0.clone(this.attributes);
      }
      a$$0 = e$$0.extend({}, c, {
        silent : true
      });
      if (d && !this.set(d, c.wait ? a$$0 : c) || !d && !this._validate(null, c)) {
        return false;
      }
      var q = this;
      var i = c.success;
      c.success = function(a) {
        g = true;
        var b = q.parse(a);
        if (c.wait) {
          b = e$$0.extend(d || {}, b);
        }
        if (!q.set(b, c)) {
          return false;
        }
        if (i) {
          i(q, a, c);
        }
      };
      b$$0 = this.isNew() ? "create" : c.patch ? "patch" : "update";
      if ("patch" == b$$0) {
        c.attrs = d;
      }
      b$$0 = this.sync(b$$0, this, c);
      if (!g) {
        if (c.wait) {
          this.clear(a$$0);
          this.set(f, a$$0);
        }
      }
      return b$$0;
    },
    destroy : function(a) {
      a = a ? e$$0.clone(a) : {};
      var b = this;
      var c = a.success;
      var d = function() {
        b.trigger("destroy", b, b.collection, a);
      };
      a.success = function(f) {
        if (a.wait || b.isNew()) {
          d();
        }
        if (c) {
          c(b, f, a);
        }
      };
      if (this.isNew()) {
        return a.success(), false;
      }
      var f$$0 = this.sync("delete", this, a);
      if (!a.wait) {
        d();
      }
      return f$$0;
    },
    url : function() {
      var a = e$$0.result(this, "urlRoot") || (e$$0.result(this.collection, "url") || u());
      return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id);
    },
    parse : function(a) {
      return a;
    },
    clone : function() {
      return new this.constructor(this.attributes);
    },
    isNew : function() {
      return null == this.id;
    },
    change : function(a) {
      var b = this._changing;
      this._changing = true;
      var c = this._computeChanges(true);
      this._pending = !!c.length;
      var d = c.length - 2;
      for (;0 <= d;d -= 2) {
        this.trigger("change:" + c[d], this, c[d + 1], a);
      }
      if (b) {
        return this;
      }
      for (;this._pending;) {
        this._pending = false;
        this.trigger("change", this, a);
        this._previousAttributes = e$$0.clone(this.attributes);
      }
      this._changing = false;
      return this;
    },
    hasChanged : function(a) {
      if (!this._hasComputed) {
        this._computeChanges();
      }
      return null == a ? !e$$0.isEmpty(this.changed) : e$$0.has(this.changed, a);
    },
    changedAttributes : function(a) {
      if (!a) {
        return this.hasChanged() ? e$$0.clone(this.changed) : false;
      }
      var b;
      var c = false;
      var d = this._previousAttributes;
      var f;
      for (f in a) {
        if (!e$$0.isEqual(d[f], b = a[f])) {
          (c || (c = {}))[f] = b;
        }
      }
      return c;
    },
    _computeChanges : function(a) {
      this.changed = {};
      var b = {};
      var c = [];
      var d = this._currentAttributes;
      var f = this._changes;
      var e = f.length - 2;
      for (;0 <= e;e -= 2) {
        var g = f[e];
        var i = f[e + 1];
        if (!b[g]) {
          b[g] = true;
          if (d[g] !== i) {
            this.changed[g] = i;
            if (a) {
              c.push(g, i);
              d[g] = i;
            }
          }
        }
      }
      if (a) {
        this._changes = [];
      }
      this._hasComputed = true;
      return c;
    },
    previous : function(a) {
      return null == a || !this._previousAttributes ? null : this._previousAttributes[a];
    },
    previousAttributes : function() {
      return e$$0.clone(this._previousAttributes);
    },
    _validate : function(a, b) {
      if (!this.validate) {
        return true;
      }
      a = e$$0.extend({}, this.attributes, a);
      var c = this.validate(a, b);
      if (!c) {
        return true;
      }
      if (b) {
        if (b.error) {
          b.error(this, c, b);
        }
      }
      this.trigger("error", this, c, b);
      return false;
    }
  });
  var p = g.Collection = function(a, b) {
    if (!b) {
      b = {};
    }
    if (b.model) {
      this.model = b.model;
    }
    if (void 0 !== b.comparator) {
      this.comparator = b.comparator;
    }
    this._reset();
    this.initialize.apply(this, arguments);
    if (a) {
      this.reset(a, e$$0.extend({
        silent : true
      }, b));
    }
  };
  e$$0.extend(p.prototype, h$$0, {
    model : o,
    initialize : function() {
    },
    toJSON : function(a) {
      return this.map(function(b) {
        return b.toJSON(a);
      });
    },
    sync : function() {
      return g.sync.apply(this, arguments);
    },
    add : function(a, b) {
      var c;
      var d;
      var f;
      var g;
      var h = b && b.at;
      var i = null == (b && b.sort) ? true : b.sort;
      a = e$$0.isArray(a) ? a.slice() : [a];
      c = a.length - 1;
      for (;0 <= c;c--) {
        if (d = this._prepareModel(a[c], b)) {
          a[c] = d;
          if ((f = null != d.id && this._byId[d.id]) || this._byCid[d.cid]) {
            if (b) {
              if (b.merge && f) {
                f.set(d.attributes, b);
                g = i;
              }
            }
            a.splice(c, 1);
          } else {
            d.on("all", this._onModelEvent, this);
            this._byCid[d.cid] = d;
            if (null != d.id) {
              this._byId[d.id] = d;
            }
          }
        } else {
          this.trigger("error", this, a[c], b);
          a.splice(c, 1);
        }
      }
      if (a.length) {
        g = i;
      }
      this.length += a.length;
      c = [null != h ? h : this.models.length, 0];
      z.apply(c, a);
      A.apply(this.models, c);
      if (g) {
        if (this.comparator && null == h) {
          this.sort({
            silent : true
          });
        }
      }
      if (b && b.silent) {
        return this;
      }
      for (;d = a.shift();) {
        d.trigger("add", d, this, b);
      }
      return this;
    },
    remove : function(a, b) {
      var c;
      var d;
      var f;
      var g;
      if (!b) {
        b = {};
      }
      a = e$$0.isArray(a) ? a.slice() : [a];
      c = 0;
      d = a.length;
      for (;c < d;c++) {
        if (g = this.get(a[c])) {
          delete this._byId[g.id];
          delete this._byCid[g.cid];
          f = this.indexOf(g);
          this.models.splice(f, 1);
          this.length--;
          if (!b.silent) {
            b.index = f;
            g.trigger("remove", g, this, b);
          }
          this._removeReference(g);
        }
      }
      return this;
    },
    push : function(a, b) {
      a = this._prepareModel(a, b);
      this.add(a, e$$0.extend({
        at : this.length
      }, b));
      return a;
    },
    pop : function(a) {
      var b = this.at(this.length - 1);
      this.remove(b, a);
      return b;
    },
    unshift : function(a, b) {
      a = this._prepareModel(a, b);
      this.add(a, e$$0.extend({
        at : 0
      }, b));
      return a;
    },
    shift : function(a) {
      var b = this.at(0);
      this.remove(b, a);
      return b;
    },
    slice : function(a, b) {
      return this.models.slice(a, b);
    },
    get : function(a) {
      return null == a ? void 0 : this._byId[null != a.id ? a.id : a] || this._byCid[a.cid || a];
    },
    at : function(a) {
      return this.models[a];
    },
    where : function(a) {
      return e$$0.isEmpty(a) ? [] : this.filter(function(b) {
        var c;
        for (c in a) {
          if (a[c] !== b.get(c)) {
            return false;
          }
        }
        return true;
      });
    },
    sort : function(a) {
      if (!this.comparator) {
        throw Error("Cannot sort a set without a comparator");
      }
      if (e$$0.isString(this.comparator) || 1 === this.comparator.length) {
        this.models = this.sortBy(this.comparator, this);
      } else {
        this.models.sort(e$$0.bind(this.comparator, this));
      }
      if (!a || !a.silent) {
        this.trigger("sort", this, a);
      }
      return this;
    },
    pluck : function(a) {
      return e$$0.invoke(this.models, "get", a);
    },
    update : function(a, b) {
      var c;
      var d;
      var f;
      var g;
      var h = [];
      var i = [];
      var m = {};
      var j = this.model.prototype.idAttribute;
      b = e$$0.extend({
        add : true,
        merge : true,
        remove : true
      }, b);
      if (b.parse) {
        a = this.parse(a);
      }
      if (!e$$0.isArray(a)) {
        a = a ? [a] : [];
      }
      if (b.add && !b.remove) {
        return this.add(a, b);
      }
      d = 0;
      f = a.length;
      for (;d < f;d++) {
        c = a[d];
        g = this.get(c.id || (c.cid || c[j]));
        if (b.remove) {
          if (g) {
            m[g.cid] = true;
          }
        }
        if (b.add && !g || b.merge && g) {
          h.push(c);
        }
      }
      if (b.remove) {
        d = 0;
        f = this.models.length;
        for (;d < f;d++) {
          c = this.models[d];
          if (!m[c.cid]) {
            i.push(c);
          }
        }
      }
      if (i.length) {
        this.remove(i, b);
      }
      if (h.length) {
        this.add(h, b);
      }
      return this;
    },
    reset : function(a, b) {
      if (!b) {
        b = {};
      }
      if (b.parse) {
        a = this.parse(a);
      }
      var c = 0;
      var d = this.models.length;
      for (;c < d;c++) {
        this._removeReference(this.models[c]);
      }
      b.previousModels = this.models;
      this._reset();
      if (a) {
        this.add(a, e$$0.extend({
          silent : true
        }, b));
      }
      if (!b.silent) {
        this.trigger("reset", this, b);
      }
      return this;
    },
    fetch : function(a) {
      a = a ? e$$0.clone(a) : {};
      if (void 0 === a.parse) {
        a.parse = true;
      }
      var b = this;
      var c = a.success;
      a.success = function(d) {
        b[a.update ? "update" : "reset"](d, a);
        if (c) {
          c(b, d, a);
        }
      };
      return this.sync("read", this, a);
    },
    create : function(a$$0, b$$0) {
      var c = this;
      b$$0 = b$$0 ? e$$0.clone(b$$0) : {};
      a$$0 = this._prepareModel(a$$0, b$$0);
      if (!a$$0) {
        return false;
      }
      if (!b$$0.wait) {
        c.add(a$$0, b$$0);
      }
      var d = b$$0.success;
      b$$0.success = function(a, b, e) {
        if (e.wait) {
          c.add(a, e);
        }
        if (d) {
          d(a, b, e);
        }
      };
      a$$0.save(null, b$$0);
      return a$$0;
    },
    parse : function(a) {
      return a;
    },
    clone : function() {
      return new this.constructor(this.models);
    },
    chain : function() {
      return e$$0(this.models).chain();
    },
    _reset : function() {
      this.length = 0;
      this.models = [];
      this._byId = {};
      this._byCid = {};
    },
    _prepareModel : function(a, b) {
      if (a instanceof o) {
        return a.collection || (a.collection = this), a;
      }
      if (!b) {
        b = {};
      }
      b.collection = this;
      var c = new this.model(a, b);
      return!c._validate(a, b) ? false : c;
    },
    _removeReference : function(a) {
      if (this === a.collection) {
        delete a.collection;
      }
      a.off("all", this._onModelEvent, this);
    },
    _onModelEvent : function(a, b, c, d) {
      if (!(("add" === a || "remove" === a) && c !== this)) {
        if ("destroy" === a) {
          this.remove(b, d);
        }
        if (b) {
          if (a === "change:" + b.idAttribute) {
            delete this._byId[b.previous(b.idAttribute)];
            if (null != b.id) {
              this._byId[b.id] = b;
            }
          }
        }
        this.trigger.apply(this, arguments);
      }
    }
  });
  e$$0.each("forEach each map collect reduce foldl inject reduceRight foldr find detect filter select reject every all some any include contains invoke max min sortedIndex toArray size first head take initial rest tail last without indexOf shuffle lastIndexOf isEmpty".split(" "), function(a) {
    p.prototype[a] = function() {
      var b = r.call(arguments);
      b.unshift(this.models);
      return e$$0[a].apply(e$$0, b);
    };
  });
  e$$0.each(["groupBy", "countBy", "sortBy"], function(a$$0) {
    p.prototype[a$$0] = function(b, c) {
      var d = e$$0.isFunction(b) ? b : function(a) {
        return a.get(b);
      };
      return e$$0[a$$0](this.models, d, c);
    };
  });
  var v = g.Router = function(a) {
    if (!a) {
      a = {};
    }
    if (a.routes) {
      this.routes = a.routes;
    }
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };
  var B = /\((.*?)\)/g;
  var C = /:\w+/g;
  var D = /\*\w+/g;
  var E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
  e$$0.extend(v.prototype, h$$0, {
    initialize : function() {
    },
    route : function(a, b, c) {
      if (!e$$0.isRegExp(a)) {
        a = this._routeToRegExp(a);
      }
      if (!c) {
        c = this[b];
      }
      g.history.route(a, e$$0.bind(function(d) {
        d = this._extractParameters(a, d);
        if (c) {
          c.apply(this, d);
        }
        this.trigger.apply(this, ["route:" + b].concat(d));
        g.history.trigger("route", this, b, d);
      }, this));
      return this;
    },
    navigate : function(a, b) {
      g.history.navigate(a, b);
      return this;
    },
    _bindRoutes : function() {
      if (this.routes) {
        var a;
        var b = e$$0.keys(this.routes);
        for (;null != (a = b.pop());) {
          this.route(a, this.routes[a]);
        }
      }
    },
    _routeToRegExp : function(a) {
      a = a.replace(E, "\\$&").replace(B, "(?:$1)?").replace(C, "([^/]+)").replace(D, "(.*?)");
      return RegExp("^" + a + "$");
    },
    _extractParameters : function(a, b) {
      return a.exec(b).slice(1);
    }
  });
  var j = g.History = function() {
    this.handlers = [];
    e$$0.bindAll(this, "checkUrl");
    if ("undefined" !== typeof window) {
      this.location = window.location;
      this.history = window.history;
    }
  };
  var w = /^[#\/]|\s+$/g;
  var F = /^\/+|\/+$/g;
  var G = /msie [\w.]+/;
  var H = /\/$/;
  j.started = false;
  e$$0.extend(j.prototype, h$$0, {
    interval : 50,
    getHash : function(a) {
      return(a = (a || this).location.href.match(/#(.*)$/)) ? a[1] : "";
    },
    getFragment : function(a, b) {
      if (null == a) {
        if (this._hasPushState || (!this._wantsHashChange || b)) {
          a = this.location.pathname;
          var c = this.root.replace(H, "");
          if (!a.indexOf(c)) {
            a = a.substr(c.length);
          }
        } else {
          a = this.getHash();
        }
      }
      return a.replace(w, "");
    },
    start : function(a) {
      if (j.started) {
        throw Error("Backbone.history has already been started");
      }
      j.started = true;
      this.options = e$$0.extend({}, {
        root : "/"
      }, this.options, a);
      this.root = this.options.root;
      this._wantsHashChange = false !== this.options.hashChange;
      this._wantsPushState = !!this.options.pushState;
      this._hasPushState = !(!this.options.pushState || (!this.history || !this.history.pushState));
      a = this.getFragment();
      var b = document.documentMode;
      b = G.exec(navigator.userAgent.toLowerCase()) && (!b || 7 >= b);
      this.root = ("/" + this.root + "/").replace(F, "/");
      if (b) {
        if (this._wantsHashChange) {
          this.iframe = g.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow;
          this.navigate(a);
        }
      }
      if (this._hasPushState) {
        g.$(window).bind("popstate", this.checkUrl);
      } else {
        if (this._wantsHashChange && ("onhashchange" in window && !b)) {
          g.$(window).bind("hashchange", this.checkUrl);
        } else {
          if (this._wantsHashChange) {
            this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
          }
        }
      }
      this.fragment = a;
      a = this.location;
      b = a.pathname.replace(/[^\/]$/, "$&/") === this.root;
      if (this._wantsHashChange && (this._wantsPushState && (!this._hasPushState && !b))) {
        return this.fragment = this.getFragment(null, true), this.location.replace(this.root + this.location.search + "#" + this.fragment), true;
      }
      if (this._wantsPushState) {
        if (this._hasPushState && (b && a.hash)) {
          this.fragment = this.getHash().replace(w, "");
          this.history.replaceState({}, document.title, this.root + this.fragment + a.search);
        }
      }
      if (!this.options.silent) {
        return this.loadUrl();
      }
    },
    stop : function() {
      g.$(window).unbind("popstate", this.checkUrl).unbind("hashchange", this.checkUrl);
      clearInterval(this._checkUrlInterval);
      j.started = false;
    },
    route : function(a, b) {
      this.handlers.unshift({
        route : a,
        callback : b
      });
    },
    checkUrl : function() {
      var a = this.getFragment();
      if (a === this.fragment) {
        if (this.iframe) {
          a = this.getFragment(this.getHash(this.iframe));
        }
      }
      if (a === this.fragment) {
        return false;
      }
      if (this.iframe) {
        this.navigate(a);
      }
      if (!this.loadUrl()) {
        this.loadUrl(this.getHash());
      }
    },
    loadUrl : function(a$$0) {
      var b = this.fragment = this.getFragment(a$$0);
      return e$$0.any(this.handlers, function(a) {
        if (a.route.test(b)) {
          return a.callback(b), true;
        }
      });
    },
    navigate : function(a, b) {
      if (!j.started) {
        return false;
      }
      if (!b || true === b) {
        b = {
          trigger : b
        };
      }
      a = this.getFragment(a || "");
      if (this.fragment !== a) {
        this.fragment = a;
        var c = this.root + a;
        if (this._hasPushState) {
          this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
        } else {
          if (this._wantsHashChange) {
            this._updateHash(this.location, a, b.replace);
            if (this.iframe) {
              if (a !== this.getFragment(this.getHash(this.iframe))) {
                if (!b.replace) {
                  this.iframe.document.open().close();
                }
                this._updateHash(this.iframe.location, a, b.replace);
              }
            }
          } else {
            return this.location.assign(c);
          }
        }
        if (b.trigger) {
          this.loadUrl(a);
        }
      }
    },
    _updateHash : function(a, b, c) {
      if (c) {
        c = a.href.replace(/(javascript:|#).*$/, "");
        a.replace(c + "#" + b);
      } else {
        a.hash = "#" + b;
      }
    }
  });
  g.history = new j;
  var x = g.View = function(a) {
    this.cid = e$$0.uniqueId("view");
    this._configure(a || {});
    this._ensureElement();
    this.initialize.apply(this, arguments);
    this.delegateEvents();
  };
  var I = /^(\S+)\s*(.*)$/;
  var J = "model collection el id attributes className tagName events".split(" ");
  e$$0.extend(x.prototype, h$$0, {
    tagName : "div",
    $ : function(a) {
      return this.$el.find(a);
    },
    initialize : function() {
    },
    render : function() {
      return this;
    },
    remove : function() {
      this.$el.remove();
      this.stopListening();
      return this;
    },
    make : function(a, b, c) {
      a = document.createElement(a);
      if (b) {
        g.$(a).attr(b);
      }
      if (null != c) {
        g.$(a).html(c);
      }
      return a;
    },
    setElement : function(a, b) {
      if (this.$el) {
        this.undelegateEvents();
      }
      this.$el = a instanceof g.$ ? a : g.$(a);
      this.el = this.$el[0];
      if (false !== b) {
        this.delegateEvents();
      }
      return this;
    },
    delegateEvents : function(a) {
      if (a || (a = e$$0.result(this, "events"))) {
        this.undelegateEvents();
        var b;
        for (b in a) {
          var c = a[b];
          if (!e$$0.isFunction(c)) {
            c = this[a[b]];
          }
          if (!c) {
            throw Error('Method "' + a[b] + '" does not exist');
          }
          var d = b.match(I);
          var f = d[1];
          d = d[2];
          c = e$$0.bind(c, this);
          f = f + (".delegateEvents" + this.cid);
          if ("" === d) {
            this.$el.bind(f, c);
          } else {
            this.$el.delegate(d, f, c);
          }
        }
      }
    },
    undelegateEvents : function() {
      this.$el.unbind(".delegateEvents" + this.cid);
    },
    _configure : function(a) {
      if (this.options) {
        a = e$$0.extend({}, e$$0.result(this, "options"), a);
      }
      e$$0.extend(this, e$$0.pick(a, J));
      this.options = a;
    },
    _ensureElement : function() {
      if (this.el) {
        this.setElement(e$$0.result(this, "el"), false);
      } else {
        var a = e$$0.extend({}, e$$0.result(this, "attributes"));
        if (this.id) {
          a.id = e$$0.result(this, "id");
        }
        if (this.className) {
          a["class"] = e$$0.result(this, "className");
        }
        this.setElement(this.make(e$$0.result(this, "tagName"), a), false);
      }
    }
  });
  var K = {
    create : "POST",
    update : "PUT",
    patch : "PATCH",
    "delete" : "DELETE",
    read : "GET"
  };
  g.sync = function(a$$0, b, c) {
    var d$$0 = K[a$$0];
    e$$0.defaults(c || (c = {}), {
      emulateHTTP : g.emulateHTTP,
      emulateJSON : g.emulateJSON
    });
    var f = {
      type : d$$0,
      dataType : "json"
    };
    if (!c.url) {
      f.url = e$$0.result(b, "url") || u();
    }
    if (null == c.data && (b && ("create" === a$$0 || ("update" === a$$0 || "patch" === a$$0)))) {
      f.contentType = "application/json";
      f.data = JSON.stringify(c.attrs || b.toJSON(c));
    }
    if (c.emulateJSON) {
      f.contentType = "application/x-www-form-urlencoded";
      f.data = f.data ? {
        model : f.data
      } : {};
    }
    if (c.emulateHTTP && ("PUT" === d$$0 || ("DELETE" === d$$0 || "PATCH" === d$$0))) {
      f.type = "POST";
      if (c.emulateJSON) {
        f.data._method = d$$0;
      }
      var h = c.beforeSend;
      c.beforeSend = function(a) {
        a.setRequestHeader("X-HTTP-Method-Override", d$$0);
        if (h) {
          return h.apply(this, arguments);
        }
      };
    }
    if ("GET" !== f.type) {
      if (!c.emulateJSON) {
        f.processData = false;
      }
    }
    var j = c.success;
    c.success = function(a, d, e) {
      if (j) {
        j(a, d, e);
      }
      b.trigger("sync", b, a, c);
    };
    var i = c.error;
    c.error = function(a) {
      if (i) {
        i(b, a, c);
      }
      b.trigger("error", b, a, c);
    };
    a$$0 = g.ajax(e$$0.extend(f, c));
    b.trigger("request", b, a$$0, c);
    return a$$0;
  };
  g.ajax = function() {
    return g.$.ajax.apply(g.$, arguments);
  };
  o.extend = p.extend = v.extend = x.extend = j.extend = function(a, b) {
    var c = this;
    var d;
    d = a && e$$0.has(a, "constructor") ? a.constructor : function() {
      c.apply(this, arguments);
    };
    e$$0.extend(d, c, b);
    var f = function() {
      this.constructor = d;
    };
    f.prototype = c.prototype;
    d.prototype = new f;
    if (a) {
      e$$0.extend(d.prototype, a);
    }
    d.__super__ = c.prototype;
    return d;
  };
  var u = function() {
    throw Error('A "url" property or function must be specified');
  };
}).call(this);

