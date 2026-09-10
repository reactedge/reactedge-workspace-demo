import { jsx as p, jsxs as P, Fragment as Ke } from "react/jsx-runtime";
import { createContext as Ge, useContext as qe, useState as G, useEffect as Xe } from "react";
import { hydrateRoot as Nt, createRoot as Rt } from "react-dom/client";
var Ze;
function l(e, t, n) {
  function r(c, a) {
    if (c._zod || Object.defineProperty(c, "_zod", {
      value: {
        def: a,
        constr: s,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), c._zod.traits.has(e))
      return;
    c._zod.traits.add(e), t(c, a);
    const u = s.prototype, d = Object.keys(u);
    for (let f = 0; f < d.length; f++) {
      const m = d[f];
      m in c || (c[m] = u[m].bind(c));
    }
  }
  const o = n?.Parent ?? Object;
  class i extends o {
  }
  Object.defineProperty(i, "name", { value: e });
  function s(c) {
    var a;
    const u = n?.Parent ? new i() : this;
    r(u, c), (a = u._zod).deferred ?? (a.deferred = []);
    for (const d of u._zod.deferred)
      d();
    return u;
  }
  return Object.defineProperty(s, "init", { value: r }), Object.defineProperty(s, Symbol.hasInstance, {
    value: (c) => n?.Parent && c instanceof n.Parent ? !0 : c?._zod?.traits?.has(e)
  }), Object.defineProperty(s, "name", { value: e }), s;
}
class x extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class He extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(Ze = globalThis).__zod_globalConfig ?? (Ze.__zod_globalConfig = {});
const fe = globalThis.__zod_globalConfig;
function j(e) {
  return fe;
}
function Ye(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function ue(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function pe(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function he(e) {
  return e == null;
}
function me(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
const Se = /* @__PURE__ */ Symbol("evaluating");
function _(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Se)
        return r === void 0 && (r = Se, r = n()), r;
    },
    set(o) {
      Object.defineProperty(e, t, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function D(e, t, n) {
  Object.defineProperty(e, t, {
    value: n,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function C(...e) {
  const t = {};
  for (const n of e) {
    const r = Object.getOwnPropertyDescriptors(n);
    Object.assign(t, r);
  }
  return Object.defineProperties({}, t);
}
function Oe(e) {
  return JSON.stringify(e);
}
function Dt(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const Qe = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function Y(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Lt = /* @__PURE__ */ pe(() => {
  if (fe.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function F(e) {
  if (Y(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(Y(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function et(e) {
  return F(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Ut = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function re(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function N(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
}
function g(e) {
  const t = e;
  if (!t)
    return {};
  if (typeof t == "string")
    return { error: () => t };
  if (t?.message !== void 0) {
    if (t?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    t.error = t.message;
  }
  return delete t.message, typeof t.error == "string" ? { ...t, error: () => t.error } : t;
}
function xt(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
function Jt(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const i = C(e._zod.def, {
    get shape() {
      const s = {};
      for (const c in t) {
        if (!(c in n.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        t[c] && (s[c] = n.shape[c]);
      }
      return D(this, "shape", s), s;
    },
    checks: []
  });
  return N(e, i);
}
function Ft(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const i = C(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape };
      for (const c in t) {
        if (!(c in n.shape))
          throw new Error(`Unrecognized key: "${c}"`);
        t[c] && delete s[c];
      }
      return D(this, "shape", s), s;
    },
    checks: []
  });
  return N(e, i);
}
function Mt(e, t) {
  if (!F(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const i = e._zod.def.shape;
    for (const s in t)
      if (Object.getOwnPropertyDescriptor(i, s) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = C(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape, ...t };
      return D(this, "shape", i), i;
    }
  });
  return N(e, o);
}
function Wt(e, t) {
  if (!F(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = C(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return D(this, "shape", r), r;
    }
  });
  return N(e, n);
}
function Vt(e, t) {
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = C(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return D(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return N(e, n);
}
function Bt(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const s = C(t._zod.def, {
    get shape() {
      const c = t._zod.def.shape, a = { ...c };
      if (n)
        for (const u in n) {
          if (!(u in c))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (a[u] = e ? new e({
            type: "optional",
            innerType: c[u]
          }) : c[u]);
        }
      else
        for (const u in c)
          a[u] = e ? new e({
            type: "optional",
            innerType: c[u]
          }) : c[u];
      return D(this, "shape", a), a;
    },
    checks: []
  });
  return N(t, s);
}
function Kt(e, t, n) {
  const r = C(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, i = { ...o };
      if (n)
        for (const s in n) {
          if (!(s in i))
            throw new Error(`Unrecognized key: "${s}"`);
          n[s] && (i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          }));
        }
      else
        for (const s in o)
          i[s] = new e({
            type: "nonoptional",
            innerType: o[s]
          });
      return D(this, "shape", i), i;
    }
  });
  return N(t, r);
}
function L(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function Gt(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1)
      return !0;
  return !1;
}
function U(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function q(e) {
  return typeof e == "string" ? e : e?.message;
}
function A(e, t, n) {
  const r = e.message ? e.message : q(e.inst?._zod.def?.error?.(e)) ?? q(t?.error?.(e)) ?? q(n.customError?.(e)) ?? q(n.localeError?.(e)) ?? "Invalid input", { inst: o, continue: i, input: s, ...c } = e;
  return c.path ?? (c.path = []), c.message = r, t?.reportInput && (c.input = s), c;
}
function ge(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function B(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const tt = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, ue, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, nt = l("$ZodError", tt), rt = l("$ZodError", tt, { Parent: Error });
function qt(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function Xt(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o, i = []) => {
    for (const s of o.issues)
      if (s.code === "invalid_union" && s.errors.length)
        s.errors.map((c) => r({ issues: c }, [...i, ...s.path]));
      else if (s.code === "invalid_key")
        r({ issues: s.issues }, [...i, ...s.path]);
      else if (s.code === "invalid_element")
        r({ issues: s.issues }, [...i, ...s.path]);
      else {
        const c = [...i, ...s.path];
        if (c.length === 0)
          n._errors.push(t(s));
        else {
          let a = n, u = 0;
          for (; u < c.length; ) {
            const d = c[u];
            u === c.length - 1 ? (a[d] = a[d] || { _errors: [] }, a[d]._errors.push(t(s))) : a[d] = a[d] || { _errors: [] }, a = a[d], u++;
          }
        }
      }
  };
  return r(e), n;
}
const _e = (e) => (t, n, r, o) => {
  const i = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise)
    throw new x();
  if (s.issues.length) {
    const c = new (o?.Err ?? e)(s.issues.map((a) => A(a, i, j())));
    throw Qe(c, o?.callee), c;
  }
  return s.value;
}, ve = (e) => async (t, n, r, o) => {
  const i = r ? { ...r, async: !0 } : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, i);
  if (s instanceof Promise && (s = await s), s.issues.length) {
    const c = new (o?.Err ?? e)(s.issues.map((a) => A(a, i, j())));
    throw Qe(c, o?.callee), c;
  }
  return s.value;
}, oe = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, o);
  if (i instanceof Promise)
    throw new x();
  return i.issues.length ? {
    success: !1,
    error: new (e ?? nt)(i.issues.map((s) => A(s, o, j())))
  } : { success: !0, data: i.value };
}, Ht = /* @__PURE__ */ oe(rt), se = (e) => async (t, n, r) => {
  const o = r ? { ...r, async: !0 } : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, o);
  return i instanceof Promise && (i = await i), i.issues.length ? {
    success: !1,
    error: new e(i.issues.map((s) => A(s, o, j())))
  } : { success: !0, data: i.value };
}, Yt = /* @__PURE__ */ se(rt), Qt = (e) => (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return _e(e)(t, n, o);
}, en = (e) => (t, n, r) => _e(e)(t, n, r), tn = (e) => async (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return ve(e)(t, n, o);
}, nn = (e) => async (t, n, r) => ve(e)(t, n, r), rn = (e) => (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return oe(e)(t, n, o);
}, on = (e) => (t, n, r) => oe(e)(t, n, r), sn = (e) => async (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return se(e)(t, n, o);
}, cn = (e) => async (t, n, r) => se(e)(t, n, r), an = /^[cC][0-9a-z]{6,}$/, un = /^[0-9a-z]+$/, ln = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, dn = /^[0-9a-vA-V]{20}$/, fn = /^[A-Za-z0-9]{27}$/, pn = /^[a-zA-Z0-9_-]{21}$/, hn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, mn = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Pe = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, gn = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, _n = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function vn() {
  return new RegExp(_n, "u");
}
const yn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, wn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, zn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, bn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, kn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ot = /^[A-Za-z0-9_-]*$/, $n = /^https?$/, Zn = /^\+[1-9]\d{6,14}$/, st = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Sn = /* @__PURE__ */ new RegExp(`^${st}$`);
function it(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function On(e) {
  return new RegExp(`^${it(e)}$`);
}
function Pn(e) {
  const t = it({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${st}T(?:${r})$`);
}
const En = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, In = /^-?\d+(?:\.\d+)?$/, Tn = /^[^A-Z]*$/, jn = /^[^a-z]*$/, T = /* @__PURE__ */ l("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), An = /* @__PURE__ */ l("$ZodCheckMaxLength", (e, t) => {
  var n;
  T.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !he(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const s = ge(o);
    r.issues.push({
      origin: s,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Cn = /* @__PURE__ */ l("$ZodCheckMinLength", (e, t) => {
  var n;
  T.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !he(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const s = ge(o);
    r.issues.push({
      origin: s,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Nn = /* @__PURE__ */ l("$ZodCheckLengthEquals", (e, t) => {
  var n;
  T.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !he(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, i = o.length;
    if (i === t.length)
      return;
    const s = ge(o), c = i > t.length;
    r.issues.push({
      origin: s,
      ...c ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), ie = /* @__PURE__ */ l("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  T.init(e, t), e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.format = t.format, t.pattern && (i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(t.pattern));
  }), t.pattern ? (n = e._zod).check ?? (n.check = (o) => {
    t.pattern.lastIndex = 0, !t.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: t.format,
      input: o.value,
      ...t.pattern ? { pattern: t.pattern.toString() } : {},
      inst: e,
      continue: !t.abort
    });
  }) : (r = e._zod).check ?? (r.check = () => {
  });
}), Rn = /* @__PURE__ */ l("$ZodCheckRegex", (e, t) => {
  ie.init(e, t), e._zod.check = (n) => {
    t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: n.value,
      pattern: t.pattern.toString(),
      inst: e,
      continue: !t.abort
    });
  };
}), Dn = /* @__PURE__ */ l("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Tn), ie.init(e, t);
}), Ln = /* @__PURE__ */ l("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = jn), ie.init(e, t);
}), Un = /* @__PURE__ */ l("$ZodCheckIncludes", (e, t) => {
  T.init(e, t);
  const n = re(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const i = o._zod.bag;
    i.patterns ?? (i.patterns = /* @__PURE__ */ new Set()), i.patterns.add(r);
  }), e._zod.check = (o) => {
    o.value.includes(t.includes, t.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: t.includes,
      input: o.value,
      inst: e,
      continue: !t.abort
    });
  };
}), xn = /* @__PURE__ */ l("$ZodCheckStartsWith", (e, t) => {
  T.init(e, t);
  const n = new RegExp(`^${re(t.prefix)}.*`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.startsWith(t.prefix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: t.prefix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Jn = /* @__PURE__ */ l("$ZodCheckEndsWith", (e, t) => {
  T.init(e, t);
  const n = new RegExp(`.*${re(t.suffix)}$`);
  t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(n);
  }), e._zod.check = (r) => {
    r.value.endsWith(t.suffix) || r.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: t.suffix,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Fn = /* @__PURE__ */ l("$ZodCheckOverwrite", (e, t) => {
  T.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class Mn {
  constructor(t = []) {
    this.content = [], this.indent = 0, this && (this.args = t);
  }
  indented(t) {
    this.indent += 1, t(this), this.indent -= 1;
  }
  write(t) {
    if (typeof t == "function") {
      t(this, { execution: "sync" }), t(this, { execution: "async" });
      return;
    }
    const r = t.split(`
`).filter((s) => s), o = Math.min(...r.map((s) => s.length - s.trimStart().length)), i = r.map((s) => s.slice(o)).map((s) => " ".repeat(this.indent * 2) + s);
    for (const s of i)
      this.content.push(s);
  }
  compile() {
    const t = Function, n = this?.args, o = [...(this?.content ?? [""]).map((i) => `  ${i}`)];
    return new t(...n, o.join(`
`));
  }
}
const Wn = {
  major: 4,
  minor: 4,
  patch: 3
}, k = /* @__PURE__ */ l("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Wn;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const i of o._zod.onattach)
      i(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (s, c, a) => {
      let u = L(s), d;
      for (const f of c) {
        if (f._zod.def.when) {
          if (Gt(s) || !f._zod.def.when(s))
            continue;
        } else if (u)
          continue;
        const m = s.issues.length, h = f._zod.check(s);
        if (h instanceof Promise && a?.async === !1)
          throw new x();
        if (d || h instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await h, s.issues.length !== m && (u || (u = L(s, m)));
          });
        else {
          if (s.issues.length === m)
            continue;
          u || (u = L(s, m));
        }
      }
      return d ? d.then(() => s) : s;
    }, i = (s, c, a) => {
      if (L(s))
        return s.aborted = !0, s;
      const u = o(c, r, a);
      if (u instanceof Promise) {
        if (a.async === !1)
          throw new x();
        return u.then((d) => e._zod.parse(d, a));
      }
      return e._zod.parse(u, a);
    };
    e._zod.run = (s, c) => {
      if (c.skipChecks)
        return e._zod.parse(s, c);
      if (c.direction === "backward") {
        const u = e._zod.parse({ value: s.value, issues: [] }, { ...c, skipChecks: !0 });
        return u instanceof Promise ? u.then((d) => i(d, s, c)) : i(u, s, c);
      }
      const a = e._zod.parse(s, c);
      if (a instanceof Promise) {
        if (c.async === !1)
          throw new x();
        return a.then((u) => o(u, r, c));
      }
      return o(a, r, c);
    };
  }
  _(e, "~standard", () => ({
    validate: (o) => {
      try {
        const i = Ht(e, o);
        return i.success ? { value: i.data } : { issues: i.error?.issues };
      } catch {
        return Yt(e, o).then((s) => s.success ? { value: s.data } : { issues: s.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), ye = /* @__PURE__ */ l("$ZodString", (e, t) => {
  k.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? En(e._zod.bag), e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = String(n.value);
      } catch {
      }
    return typeof n.value == "string" || n.issues.push({
      expected: "string",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n;
  };
}), y = /* @__PURE__ */ l("$ZodStringFormat", (e, t) => {
  ie.init(e, t), ye.init(e, t);
}), Vn = /* @__PURE__ */ l("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = mn), y.init(e, t);
}), Bn = /* @__PURE__ */ l("$ZodUUID", (e, t) => {
  if (t.version) {
    const r = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[t.version];
    if (r === void 0)
      throw new Error(`Invalid UUID version: "${t.version}"`);
    t.pattern ?? (t.pattern = Pe(r));
  } else
    t.pattern ?? (t.pattern = Pe());
  y.init(e, t);
}), Kn = /* @__PURE__ */ l("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = gn), y.init(e, t);
}), Gn = /* @__PURE__ */ l("$ZodURL", (e, t) => {
  y.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim();
      if (!t.normalize && t.protocol?.source === $n.source && !/^https?:\/\//i.test(r)) {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
        return;
      }
      const o = new URL(r);
      t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(o.hostname) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: t.hostname.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || n.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: t.protocol.source,
        input: n.value,
        inst: e,
        continue: !t.abort
      })), t.normalize ? n.value = o.href : n.value = r;
      return;
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), qn = /* @__PURE__ */ l("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = vn()), y.init(e, t);
}), Xn = /* @__PURE__ */ l("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = pn), y.init(e, t);
}), Hn = /* @__PURE__ */ l("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = an), y.init(e, t);
}), Yn = /* @__PURE__ */ l("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = un), y.init(e, t);
}), Qn = /* @__PURE__ */ l("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = ln), y.init(e, t);
}), er = /* @__PURE__ */ l("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = dn), y.init(e, t);
}), tr = /* @__PURE__ */ l("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = fn), y.init(e, t);
}), nr = /* @__PURE__ */ l("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Pn(t)), y.init(e, t);
}), rr = /* @__PURE__ */ l("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Sn), y.init(e, t);
}), or = /* @__PURE__ */ l("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = On(t)), y.init(e, t);
}), sr = /* @__PURE__ */ l("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = hn), y.init(e, t);
}), ir = /* @__PURE__ */ l("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = yn), y.init(e, t), e._zod.bag.format = "ipv4";
}), cr = /* @__PURE__ */ l("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = wn), y.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
    try {
      new URL(`http://[${n.value}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
}), ar = /* @__PURE__ */ l("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = zn), y.init(e, t);
}), ur = /* @__PURE__ */ l("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = bn), y.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, i] = r;
      if (!i)
        throw new Error();
      const s = Number(i);
      if (`${s}` !== i)
        throw new Error();
      if (s < 0 || s > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      n.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    }
  };
});
function ct(e) {
  if (e === "")
    return !0;
  if (/\s/.test(e) || e.length % 4 !== 0)
    return !1;
  try {
    return atob(e), !0;
  } catch {
    return !1;
  }
}
const lr = /* @__PURE__ */ l("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = kn), y.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    ct(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function dr(e) {
  if (!ot.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ct(n);
}
const fr = /* @__PURE__ */ l("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ot), y.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    dr(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), pr = /* @__PURE__ */ l("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = Zn), y.init(e, t);
});
function hr(e, t = null) {
  try {
    const n = e.split(".");
    if (n.length !== 3)
      return !1;
    const [r] = n;
    if (!r)
      return !1;
    const o = JSON.parse(atob(r));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || t && (!("alg" in o) || o.alg !== t));
  } catch {
    return !1;
  }
}
const mr = /* @__PURE__ */ l("$ZodJWT", (e, t) => {
  y.init(e, t), e._zod.check = (n) => {
    hr(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), gr = /* @__PURE__ */ l("$ZodUnknown", (e, t) => {
  k.init(e, t), e._zod.parse = (n) => n;
}), _r = /* @__PURE__ */ l("$ZodNever", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Ee(e, t, n) {
  e.issues.length && t.issues.push(...U(n, e.issues)), t.value[n] = e.value;
}
const vr = /* @__PURE__ */ l("$ZodArray", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const i = [];
    for (let s = 0; s < o.length; s++) {
      const c = o[s], a = t.element._zod.run({
        value: c,
        issues: []
      }, r);
      a instanceof Promise ? i.push(a.then((u) => Ee(u, n, s))) : Ee(a, n, s);
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
});
function Q(e, t, n, r, o, i) {
  const s = n in r;
  if (e.issues.length) {
    if (o && i && !s)
      return;
    t.issues.push(...U(n, e.issues));
  }
  if (!s && !o) {
    e.issues.length || t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [n]
    });
    return;
  }
  e.value === void 0 ? s && (t.value[n] = void 0) : t.value[n] = e.value;
}
function at(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = xt(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function ut(e, t, n, r, o, i) {
  const s = [], c = o.keySet, a = o.catchall._zod, u = a.def.type, d = a.optin === "optional", f = a.optout === "optional";
  for (const m in t) {
    if (m === "__proto__" || c.has(m))
      continue;
    if (u === "never") {
      s.push(m);
      continue;
    }
    const h = a.run({ value: t[m], issues: [] }, r);
    h instanceof Promise ? e.push(h.then((v) => Q(v, n, m, t, d, f))) : Q(h, n, m, t, d, f);
  }
  return s.length && n.issues.push({
    code: "unrecognized_keys",
    keys: s,
    input: t,
    inst: i
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const yr = /* @__PURE__ */ l("$ZodObject", (e, t) => {
  if (k.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const c = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const a = { ...c };
        return Object.defineProperty(t, "shape", {
          value: a
        }), a;
      }
    });
  }
  const r = pe(() => at(t));
  _(e._zod, "propValues", () => {
    const c = t.shape, a = {};
    for (const u in c) {
      const d = c[u]._zod;
      if (d.values) {
        a[u] ?? (a[u] = /* @__PURE__ */ new Set());
        for (const f of d.values)
          a[u].add(f);
      }
    }
    return a;
  });
  const o = Y, i = t.catchall;
  let s;
  e._zod.parse = (c, a) => {
    s ?? (s = r.value);
    const u = c.value;
    if (!o(u))
      return c.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), c;
    c.value = {};
    const d = [], f = s.shape;
    for (const m of s.keys) {
      const h = f[m], v = h._zod.optin === "optional", W = h._zod.optout === "optional", Z = h._zod.run({ value: u[m], issues: [] }, a);
      Z instanceof Promise ? d.push(Z.then((ae) => Q(ae, c, m, u, v, W))) : Q(Z, c, m, u, v, W);
    }
    return i ? ut(d, u, c, a, r.value, e) : d.length ? Promise.all(d).then(() => c) : c;
  };
}), wr = /* @__PURE__ */ l("$ZodObjectJIT", (e, t) => {
  yr.init(e, t);
  const n = e._zod.parse, r = pe(() => at(t)), o = (m) => {
    const h = new Mn(["shape", "payload", "ctx"]), v = r.value, W = (I) => {
      const z = Oe(I);
      return `shape[${z}]._zod.run({ value: input[${z}], issues: [] }, ctx)`;
    };
    h.write("const input = payload.value;");
    const Z = /* @__PURE__ */ Object.create(null);
    let ae = 0;
    for (const I of v.keys)
      Z[I] = `key_${ae++}`;
    h.write("const newResult = {};");
    for (const I of v.keys) {
      const z = Z[I], S = Oe(I), ke = m[I], $e = ke?._zod?.optin === "optional", Ct = ke?._zod?.optout === "optional";
      h.write(`const ${z} = ${W(I)};`), $e && Ct ? h.write(`
        if (${z}.issues.length) {
          if (${S} in input) {
            payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${S}, ...iss.path] : [${S}]
            })));
          }
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `) : $e ? h.write(`
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        
        if (${z}.value === undefined) {
          if (${S} in input) {
            newResult[${S}] = undefined;
          }
        } else {
          newResult[${S}] = ${z}.value;
        }
        
      `) : h.write(`
        const ${z}_present = ${S} in input;
        if (${z}.issues.length) {
          payload.issues = payload.issues.concat(${z}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${S}, ...iss.path] : [${S}]
          })));
        }
        if (!${z}_present && !${z}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${S}]
          });
        }

        if (${z}_present) {
          if (${z}.value === undefined) {
            newResult[${S}] = undefined;
          } else {
            newResult[${S}] = ${z}.value;
          }
        }

      `);
    }
    h.write("payload.value = newResult;"), h.write("return payload;");
    const At = h.compile();
    return (I, z) => At(m, I, z);
  };
  let i;
  const s = Y, c = !fe.jitless, u = c && Lt.value, d = t.catchall;
  let f;
  e._zod.parse = (m, h) => {
    f ?? (f = r.value);
    const v = m.value;
    return s(v) ? c && u && h?.async === !1 && h.jitless !== !0 ? (i || (i = o(t.shape)), m = i(m, h), d ? ut([], v, m, h, f, e) : m) : n(m, h) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: v,
      inst: e
    }), m);
  };
});
function Ie(e, t, n, r) {
  for (const i of e)
    if (i.issues.length === 0)
      return t.value = i.value, t;
  const o = e.filter((i) => !L(i));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((i) => i.issues.map((s) => A(s, r, j())))
  }), t);
}
const zr = /* @__PURE__ */ l("$ZodUnion", (e, t) => {
  k.init(e, t), _(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), _(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), _(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), _(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${r.map((o) => me(o.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (r, o) => {
    if (n)
      return n(r, o);
    let i = !1;
    const s = [];
    for (const c of t.options) {
      const a = c._zod.run({
        value: r.value,
        issues: []
      }, o);
      if (a instanceof Promise)
        s.push(a), i = !0;
      else {
        if (a.issues.length === 0)
          return a;
        s.push(a);
      }
    }
    return i ? Promise.all(s).then((c) => Ie(c, r, e, o)) : Ie(s, r, e, o);
  };
}), br = /* @__PURE__ */ l("$ZodIntersection", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, i = t.left._zod.run({ value: o, issues: [] }, r), s = t.right._zod.run({ value: o, issues: [] }, r);
    return i instanceof Promise || s instanceof Promise ? Promise.all([i, s]).then(([a, u]) => Te(n, a, u)) : Te(n, i, s);
  };
});
function le(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (F(e) && F(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((i) => n.indexOf(i) !== -1), o = { ...e, ...t };
    for (const i of r) {
      const s = le(e[i], t[i]);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [i, ...s.mergeErrorPath]
        };
      o[i] = s.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], i = t[r], s = le(o, i);
      if (!s.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...s.mergeErrorPath]
        };
      n.push(s.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Te(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const c of t.issues)
    if (c.code === "unrecognized_keys") {
      o ?? (o = c);
      for (const a of c.keys)
        r.has(a) || r.set(a, {}), r.get(a).l = !0;
    } else
      e.issues.push(c);
  for (const c of n.issues)
    if (c.code === "unrecognized_keys")
      for (const a of c.keys)
        r.has(a) || r.set(a, {}), r.get(a).r = !0;
    else
      e.issues.push(c);
  const i = [...r].filter(([, c]) => c.l && c.r).map(([c]) => c);
  if (i.length && o && e.issues.push({ ...o, keys: i }), L(e))
    return e;
  const s = le(t.value, n.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return e.value = s.data, e;
}
const kr = /* @__PURE__ */ l("$ZodRecord", (e, t) => {
  k.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!F(o))
      return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    const i = [], s = t.keyType._zod.values;
    if (s) {
      n.value = {};
      const c = /* @__PURE__ */ new Set();
      for (const u of s)
        if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          c.add(typeof u == "number" ? u.toString() : u);
          const d = t.keyType._zod.run({ value: u, issues: [] }, r);
          if (d instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          if (d.issues.length) {
            n.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: d.issues.map((h) => A(h, r, j())),
              input: u,
              path: [u],
              inst: e
            });
            continue;
          }
          const f = d.value, m = t.valueType._zod.run({ value: o[u], issues: [] }, r);
          m instanceof Promise ? i.push(m.then((h) => {
            h.issues.length && n.issues.push(...U(u, h.issues)), n.value[f] = h.value;
          })) : (m.issues.length && n.issues.push(...U(u, m.issues)), n.value[f] = m.value);
        }
      let a;
      for (const u in o)
        c.has(u) || (a = a ?? [], a.push(u));
      a && a.length > 0 && n.issues.push({
        code: "unrecognized_keys",
        input: o,
        inst: e,
        keys: a
      });
    } else {
      n.value = {};
      for (const c of Reflect.ownKeys(o)) {
        if (c === "__proto__" || !Object.prototype.propertyIsEnumerable.call(o, c))
          continue;
        let a = t.keyType._zod.run({ value: c, issues: [] }, r);
        if (a instanceof Promise)
          throw new Error("Async schemas not supported in object keys currently");
        if (typeof c == "string" && In.test(c) && a.issues.length) {
          const f = t.keyType._zod.run({ value: Number(c), issues: [] }, r);
          if (f instanceof Promise)
            throw new Error("Async schemas not supported in object keys currently");
          f.issues.length === 0 && (a = f);
        }
        if (a.issues.length) {
          t.mode === "loose" ? n.value[c] = o[c] : n.issues.push({
            code: "invalid_key",
            origin: "record",
            issues: a.issues.map((f) => A(f, r, j())),
            input: c,
            path: [c],
            inst: e
          });
          continue;
        }
        const d = t.valueType._zod.run({ value: o[c], issues: [] }, r);
        d instanceof Promise ? i.push(d.then((f) => {
          f.issues.length && n.issues.push(...U(c, f.issues)), n.value[a.value] = f.value;
        })) : (d.issues.length && n.issues.push(...U(c, d.issues)), n.value[a.value] = d.value);
      }
    }
    return i.length ? Promise.all(i).then(() => n) : n;
  };
}), $r = /* @__PURE__ */ l("$ZodEnum", (e, t) => {
  k.init(e, t);
  const n = Ye(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Ut.has(typeof o)).map((o) => typeof o == "string" ? re(o) : o.toString()).join("|")})$`), e._zod.parse = (o, i) => {
    const s = o.value;
    return r.has(s) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: s,
      inst: e
    }), o;
  };
}), Zr = /* @__PURE__ */ l("$ZodTransform", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new He(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((s) => (n.value = s, n.fallback = !0, n));
    if (o instanceof Promise)
      throw new x();
    return n.value = o, n.fallback = !0, n;
  };
});
function je(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const lt = /* @__PURE__ */ l("$ZodOptional", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${me(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = n.value, i = t.innerType._zod.run(n, r);
      return i instanceof Promise ? i.then((s) => je(s, o)) : je(i, o);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Sr = /* @__PURE__ */ l("$ZodExactOptional", (e, t) => {
  lt.init(e, t), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Or = /* @__PURE__ */ l("$ZodNullable", (e, t) => {
  k.init(e, t), _(e._zod, "optin", () => t.innerType._zod.optin), _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${me(n.source)}|null)$`) : void 0;
  }), _(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Pr = /* @__PURE__ */ l("$ZodDefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => Ae(i, t)) : Ae(o, t);
  };
});
function Ae(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Er = /* @__PURE__ */ l("$ZodPrefault", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), Ir = /* @__PURE__ */ l("$ZodNonOptional", (e, t) => {
  k.init(e, t), _(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => Ce(i, e)) : Ce(o, e);
  };
});
function Ce(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Tr = /* @__PURE__ */ l("$ZodCatch", (e, t) => {
  k.init(e, t), e._zod.optin = "optional", _(e._zod, "optout", () => t.innerType._zod.optout), _(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => (n.value = i.value, i.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: i.issues.map((s) => A(s, r, j()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((i) => A(i, r, j()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n);
  };
}), jr = /* @__PURE__ */ l("$ZodPipe", (e, t) => {
  k.init(e, t), _(e._zod, "values", () => t.in._zod.values), _(e._zod, "optin", () => t.in._zod.optin), _(e._zod, "optout", () => t.out._zod.optout), _(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const i = t.out._zod.run(n, r);
      return i instanceof Promise ? i.then((s) => X(s, t.in, r)) : X(i, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((i) => X(i, t.out, r)) : X(o, t.out, r);
  };
});
function X(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
const Ar = /* @__PURE__ */ l("$ZodReadonly", (e, t) => {
  k.init(e, t), _(e._zod, "propValues", () => t.innerType._zod.propValues), _(e._zod, "values", () => t.innerType._zod.values), _(e._zod, "optin", () => t.innerType?._zod?.optin), _(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Ne) : Ne(o);
  };
});
function Ne(e) {
  return e.value = Object.freeze(e.value), e;
}
const Cr = /* @__PURE__ */ l("$ZodLazy", (e, t) => {
  k.init(e, t), _(e._zod, "innerType", () => {
    const n = t;
    return n._cachedInner || (n._cachedInner = t.getter()), n._cachedInner;
  }), _(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), _(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), _(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), _(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
}), Nr = /* @__PURE__ */ l("$ZodCustom", (e, t) => {
  T.init(e, t), k.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((i) => Re(i, n, r, e));
    Re(o, n, r, e);
  };
});
function Re(e, t, n, r) {
  if (!e) {
    const o = {
      code: "custom",
      input: n,
      inst: r,
      // incorporates params.error into issue reporting
      path: [...r._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !r._zod.def.abort
      // params: inst._zod.def.params,
    };
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(B(o));
  }
}
var De;
class Rr {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(t, ...n) {
    const r = n[0];
    return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(t) {
    const n = this._map.get(t);
    return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
  }
  get(t) {
    const n = t._zod.parent;
    if (n) {
      const r = { ...this.get(n) ?? {} };
      delete r.id;
      const o = { ...r, ...this._map.get(t) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(t);
  }
  has(t) {
    return this._map.has(t);
  }
}
function Dr() {
  return new Rr();
}
(De = globalThis).__zod_globalRegistry ?? (De.__zod_globalRegistry = Dr());
const V = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
  return new e({
    type: "string",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Ur(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Jr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Wr(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Xr(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Yr(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Qr(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lo(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
  return new e({
    type: "never",
    ...g(t)
  });
}
// @__NO_SIDE_EFFECTS__
function dt(e, t) {
  return new An({
    check: "max_length",
    ...g(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function ee(e, t) {
  return new Cn({
    check: "min_length",
    ...g(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function ft(e, t) {
  return new Nn({
    check: "length_equals",
    ...g(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
  return new Rn({
    check: "string_format",
    format: "regex",
    ...g(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function ho(e) {
  return new Dn({
    check: "string_format",
    format: "lowercase",
    ...g(e)
  });
}
// @__NO_SIDE_EFFECTS__
function mo(e) {
  return new Ln({
    check: "string_format",
    format: "uppercase",
    ...g(e)
  });
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
  return new Un({
    check: "string_format",
    format: "includes",
    ...g(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
  return new xn({
    check: "string_format",
    format: "starts_with",
    ...g(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
  return new Jn({
    check: "string_format",
    format: "ends_with",
    ...g(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function M(e) {
  return new Fn({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function yo(e) {
  return /* @__PURE__ */ M((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function wo() {
  return /* @__PURE__ */ M((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function zo() {
  return /* @__PURE__ */ M((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function bo() {
  return /* @__PURE__ */ M((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function ko() {
  return /* @__PURE__ */ M((e) => Dt(e));
}
// @__NO_SIDE_EFFECTS__
function $o(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...g(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Zo(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...g(n)
  });
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
  const n = /* @__PURE__ */ Oo((r) => (r.addIssue = (o) => {
    if (typeof o == "string")
      r.issues.push(B(o, r.value, n._zod.def));
    else {
      const i = o;
      i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = r.value), i.inst ?? (i.inst = n), i.continue ?? (i.continue = !n._zod.def.abort), r.issues.push(B(i));
    }
  }, e(r.value, r)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function Oo(e, t) {
  const n = new T({
    check: "custom",
    ...g(t)
  });
  return n._zod.check = e, n;
}
function pt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? V,
    target: t,
    unrepresentable: e?.unrepresentable ?? "throw",
    override: e?.override ?? (() => {
    }),
    io: e?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    cycles: e?.cycles ?? "ref",
    reused: e?.reused ?? "inline",
    external: e?.external ?? void 0
  };
}
function b(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  const o = e._zod.def, i = t.seen.get(e);
  if (i)
    return i.count++, n.schemaPath.includes(e) && (i.cycle = n.path), i.schema;
  const s = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, s);
  const c = e._zod.toJSONSchema?.();
  if (c)
    s.schema = c;
  else {
    const d = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, s.schema, d);
    else {
      const m = s.schema, h = t.processors[o.type];
      if (!h)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      h(e, t, m, d);
    }
    const f = e._zod.parent;
    f && (s.ref || (s.ref = f), b(f, t, d), t.seen.get(f).isParent = !0);
  }
  const a = t.metadataRegistry.get(e);
  return a && Object.assign(s.schema, a), t.io === "input" && O(e) && (delete s.schema.examples, delete s.schema.default), t.io === "input" && "_prefault" in s.schema && ((r = s.schema).default ?? (r.default = s.schema._prefault)), delete s.schema._prefault, t.seen.get(e).schema;
}
function ht(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const s of e.seen.entries()) {
    const c = e.metadataRegistry.get(s[0])?.id;
    if (c) {
      const a = r.get(c);
      if (a && a !== s[0])
        throw new Error(`Duplicate schema id "${c}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(c, s[0]);
    }
  }
  const o = (s) => {
    const c = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const f = e.external.registry.get(s[0])?.id, m = e.external.uri ?? ((v) => v);
      if (f)
        return { ref: m(f) };
      const h = s[1].defId ?? s[1].schema.id ?? `schema${e.counter++}`;
      return s[1].defId = h, { defId: h, ref: `${m("__shared")}#/${c}/${h}` };
    }
    if (s[1] === n)
      return { ref: "#" };
    const u = `#/${c}/`, d = s[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: d, ref: u + d };
  }, i = (s) => {
    if (s[1].schema.$ref)
      return;
    const c = s[1], { ref: a, defId: u } = o(s);
    c.def = { ...c.schema }, u && (c.defId = u);
    const d = c.schema;
    for (const f in d)
      delete d[f];
    d.$ref = a;
  };
  if (e.cycles === "throw")
    for (const s of e.seen.entries()) {
      const c = s[1];
      if (c.cycle)
        throw new Error(`Cycle detected: #/${c.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const s of e.seen.entries()) {
    const c = s[1];
    if (t === s[0]) {
      i(s);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(s[0])?.id;
      if (t !== s[0] && u) {
        i(s);
        continue;
      }
    }
    if (e.metadataRegistry.get(s[0])?.id) {
      i(s);
      continue;
    }
    if (c.cycle) {
      i(s);
      continue;
    }
    if (c.count > 1 && e.reused === "ref") {
      i(s);
      continue;
    }
  }
}
function mt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (c) => {
    const a = e.seen.get(c);
    if (a.ref === null)
      return;
    const u = a.def ?? a.schema, d = { ...u }, f = a.ref;
    if (a.ref = null, f) {
      r(f);
      const h = e.seen.get(f), v = h.schema;
      if (v.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(v)) : Object.assign(u, v), Object.assign(u, d), c._zod.parent === f)
        for (const Z in u)
          Z === "$ref" || Z === "allOf" || Z in d || delete u[Z];
      if (v.$ref && h.def)
        for (const Z in u)
          Z === "$ref" || Z === "allOf" || Z in h.def && JSON.stringify(u[Z]) === JSON.stringify(h.def[Z]) && delete u[Z];
    }
    const m = c._zod.parent;
    if (m && m !== f) {
      r(m);
      const h = e.seen.get(m);
      if (h?.schema.$ref && (u.$ref = h.schema.$ref, h.def))
        for (const v in u)
          v === "$ref" || v === "allOf" || v in h.def && JSON.stringify(u[v]) === JSON.stringify(h.def[v]) && delete u[v];
    }
    e.override({
      zodSchema: c,
      jsonSchema: u,
      path: a.path ?? []
    });
  };
  for (const c of [...e.seen.entries()].reverse())
    r(c[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const c = e.external.registry.get(t)?.id;
    if (!c)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(c);
  }
  Object.assign(o, n.def ?? n.schema);
  const i = e.metadataRegistry.get(t)?.id;
  i !== void 0 && o.id === i && delete o.id;
  const s = e.external?.defs ?? {};
  for (const c of e.seen.entries()) {
    const a = c[1];
    a.def && a.defId && (a.def.id === a.defId && delete a.def.id, s[a.defId] = a.def);
  }
  e.external || Object.keys(s).length > 0 && (e.target === "draft-2020-12" ? o.$defs = s : o.definitions = s);
  try {
    const c = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(c, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: te(t, "input", e.processors),
          output: te(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), c;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function O(e, t) {
  const n = t ?? { seen: /* @__PURE__ */ new Set() };
  if (n.seen.has(e))
    return !1;
  n.seen.add(e);
  const r = e._zod.def;
  if (r.type === "transform")
    return !0;
  if (r.type === "array")
    return O(r.element, n);
  if (r.type === "set")
    return O(r.valueType, n);
  if (r.type === "lazy")
    return O(r.getter(), n);
  if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault")
    return O(r.innerType, n);
  if (r.type === "intersection")
    return O(r.left, n) || O(r.right, n);
  if (r.type === "record" || r.type === "map")
    return O(r.keyType, n) || O(r.valueType, n);
  if (r.type === "pipe")
    return e._zod.traits.has("$ZodCodec") ? !0 : O(r.in, n) || O(r.out, n);
  if (r.type === "object") {
    for (const o in r.shape)
      if (O(r.shape[o], n))
        return !0;
    return !1;
  }
  if (r.type === "union") {
    for (const o of r.options)
      if (O(o, n))
        return !0;
    return !1;
  }
  if (r.type === "tuple") {
    for (const o of r.items)
      if (O(o, n))
        return !0;
    return !!(r.rest && O(r.rest, n));
  }
  return !1;
}
const Po = (e, t = {}) => (n) => {
  const r = pt({ ...n, processors: t });
  return b(e, r), ht(r, e), mt(r, e);
}, te = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: i } = r ?? {}, s = pt({ ...o ?? {}, target: i, io: t, processors: n });
  return b(e, s), ht(s, e), mt(s, e);
}, Eo = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Io = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: i, maximum: s, format: c, patterns: a, contentEncoding: u } = e._zod.bag;
  if (typeof i == "number" && (o.minLength = i), typeof s == "number" && (o.maxLength = s), c && (o.format = Eo[c] ?? c, o.format === "" && delete o.format, c === "time" && delete o.format), u && (o.contentEncoding = u), a && a.size > 0) {
    const d = [...a];
    d.length === 1 ? o.pattern = d[0].source : d.length > 1 && (o.allOf = [
      ...d.map((f) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: f.source
      }))
    ]);
  }
}, To = (e, t, n, r) => {
  n.not = {};
}, jo = (e, t, n, r) => {
}, Ao = (e, t, n, r) => {
  const o = e._zod.def, i = Ye(o.entries);
  i.every((s) => typeof s == "number") && (n.type = "number"), i.every((s) => typeof s == "string") && (n.type = "string"), n.enum = i;
}, Co = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, No = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, Ro = (e, t, n, r) => {
  const o = n, i = e._zod.def, { minimum: s, maximum: c } = e._zod.bag;
  typeof s == "number" && (o.minItems = s), typeof c == "number" && (o.maxItems = c), o.type = "array", o.items = b(i.element, t, {
    ...r,
    path: [...r.path, "items"]
  });
}, Do = (e, t, n, r) => {
  const o = n, i = e._zod.def;
  o.type = "object", o.properties = {};
  const s = i.shape;
  for (const u in s)
    o.properties[u] = b(s[u], t, {
      ...r,
      path: [...r.path, "properties", u]
    });
  const c = new Set(Object.keys(s)), a = new Set([...c].filter((u) => {
    const d = i.shape[u]._zod;
    return t.io === "input" ? d.optin === void 0 : d.optout === void 0;
  }));
  a.size > 0 && (o.required = Array.from(a)), i.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : i.catchall ? i.catchall && (o.additionalProperties = b(i.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, Lo = (e, t, n, r) => {
  const o = e._zod.def, i = o.inclusive === !1, s = o.options.map((c, a) => b(c, t, {
    ...r,
    path: [...r.path, i ? "oneOf" : "anyOf", a]
  }));
  i ? n.oneOf = s : n.anyOf = s;
}, Uo = (e, t, n, r) => {
  const o = e._zod.def, i = b(o.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), s = b(o.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), c = (u) => "allOf" in u && Object.keys(u).length === 1, a = [
    ...c(i) ? i.allOf : [i],
    ...c(s) ? s.allOf : [s]
  ];
  n.allOf = a;
}, xo = (e, t, n, r) => {
  const o = n, i = e._zod.def;
  o.type = "object";
  const s = i.keyType, a = s._zod.bag?.patterns;
  if (i.mode === "loose" && a && a.size > 0) {
    const d = b(i.valueType, t, {
      ...r,
      path: [...r.path, "patternProperties", "*"]
    });
    o.patternProperties = {};
    for (const f of a)
      o.patternProperties[f.source] = d;
  } else
    (t.target === "draft-07" || t.target === "draft-2020-12") && (o.propertyNames = b(i.keyType, t, {
      ...r,
      path: [...r.path, "propertyNames"]
    })), o.additionalProperties = b(i.valueType, t, {
      ...r,
      path: [...r.path, "additionalProperties"]
    });
  const u = s._zod.values;
  if (u) {
    const d = [...u].filter((f) => typeof f == "string" || typeof f == "number");
    d.length > 0 && (o.required = d);
  }
}, Jo = (e, t, n, r) => {
  const o = e._zod.def, i = b(o.innerType, t, r), s = t.seen.get(e);
  t.target === "openapi-3.0" ? (s.ref = o.innerType, n.nullable = !0) : n.anyOf = [i, { type: "null" }];
}, Fo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
}, Mo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, Wo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, Vo = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
  let s;
  try {
    s = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = s;
}, Bo = (e, t, n, r) => {
  const o = e._zod.def, i = o.in._zod.traits.has("$ZodTransform"), s = t.io === "input" ? i ? o.out : o.in : o.out;
  b(s, t, r);
  const c = t.seen.get(e);
  c.ref = s;
}, Ko = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType, n.readOnly = !0;
}, gt = (e, t, n, r) => {
  const o = e._zod.def;
  b(o.innerType, t, r);
  const i = t.seen.get(e);
  i.ref = o.innerType;
}, Go = (e, t, n, r) => {
  const o = e._zod.innerType;
  b(o, t, r);
  const i = t.seen.get(e);
  i.ref = o;
}, qo = /* @__PURE__ */ l("ZodISODateTime", (e, t) => {
  nr.init(e, t), w.init(e, t);
});
function Xo(e) {
  return /* @__PURE__ */ io(qo, e);
}
const Ho = /* @__PURE__ */ l("ZodISODate", (e, t) => {
  rr.init(e, t), w.init(e, t);
});
function Yo(e) {
  return /* @__PURE__ */ co(Ho, e);
}
const Qo = /* @__PURE__ */ l("ZodISOTime", (e, t) => {
  or.init(e, t), w.init(e, t);
});
function es(e) {
  return /* @__PURE__ */ ao(Qo, e);
}
const ts = /* @__PURE__ */ l("ZodISODuration", (e, t) => {
  sr.init(e, t), w.init(e, t);
});
function ns(e) {
  return /* @__PURE__ */ uo(ts, e);
}
const rs = (e, t) => {
  nt.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => Xt(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => qt(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, ue, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, ue, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return e.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, E = /* @__PURE__ */ l("ZodError", rs, {
  Parent: Error
}), os = /* @__PURE__ */ _e(E), ss = /* @__PURE__ */ ve(E), is = /* @__PURE__ */ oe(E), cs = /* @__PURE__ */ se(E), as = /* @__PURE__ */ Qt(E), us = /* @__PURE__ */ en(E), ls = /* @__PURE__ */ tn(E), ds = /* @__PURE__ */ nn(E), fs = /* @__PURE__ */ rn(E), ps = /* @__PURE__ */ on(E), hs = /* @__PURE__ */ sn(E), ms = /* @__PURE__ */ cn(E), Ue = /* @__PURE__ */ new WeakMap();
function ce(e, t, n) {
  const r = Object.getPrototypeOf(e);
  let o = Ue.get(r);
  if (o || (o = /* @__PURE__ */ new Set(), Ue.set(r, o)), !o.has(t)) {
    o.add(t);
    for (const i in n) {
      const s = n[i];
      Object.defineProperty(r, i, {
        configurable: !0,
        enumerable: !1,
        get() {
          const c = s.bind(this);
          return Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: c
          }), c;
        },
        set(c) {
          Object.defineProperty(this, i, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: c
          });
        }
      });
    }
  }
}
const $ = /* @__PURE__ */ l("ZodType", (e, t) => (k.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: te(e, "input"),
    output: te(e, "output")
  }
}), e.toJSONSchema = Po(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (n, r) => os(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => is(e, n, r), e.parseAsync = async (n, r) => ss(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => cs(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => as(e, n, r), e.decode = (n, r) => us(e, n, r), e.encodeAsync = async (n, r) => ls(e, n, r), e.decodeAsync = async (n, r) => ds(e, n, r), e.safeEncode = (n, r) => fs(e, n, r), e.safeDecode = (n, r) => ps(e, n, r), e.safeEncodeAsync = async (n, r) => hs(e, n, r), e.safeDecodeAsync = async (n, r) => ms(e, n, r), ce(e, "ZodType", {
  check(...n) {
    const r = this.def;
    return this.clone(C(r, {
      checks: [
        ...r.checks ?? [],
        ...n.map((o) => typeof o == "function" ? { _zod: { check: o, def: { check: "custom" }, onattach: [] } } : o)
      ]
    }), { parent: !0 });
  },
  with(...n) {
    return this.check(...n);
  },
  clone(n, r) {
    return N(this, n, r);
  },
  brand() {
    return this;
  },
  register(n, r) {
    return n.add(this, r), this;
  },
  refine(n, r) {
    return this.check(ai(n, r));
  },
  superRefine(n, r) {
    return this.check(ui(n, r));
  },
  overwrite(n) {
    return this.check(/* @__PURE__ */ M(n));
  },
  optional() {
    return Me(this);
  },
  exactOptional() {
    return Ks(this);
  },
  nullable() {
    return We(this);
  },
  nullish() {
    return Me(We(this));
  },
  nonoptional(n) {
    return Qs(this, n);
  },
  array() {
    return we(this);
  },
  or(n) {
    return xs([this, n]);
  },
  and(n) {
    return Fs(this, n);
  },
  transform(n) {
    return Ve(this, Vs(n));
  },
  default(n) {
    return Xs(this, n);
  },
  prefault(n) {
    return Ys(this, n);
  },
  catch(n) {
    return ti(this, n);
  },
  pipe(n) {
    return Ve(this, n);
  },
  readonly() {
    return oi(this);
  },
  describe(n) {
    const r = this.clone();
    return V.add(r, { description: n }), r;
  },
  meta(...n) {
    if (n.length === 0)
      return V.get(this);
    const r = this.clone();
    return V.add(r, n[0]), r;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(n) {
    return n(this);
  }
}), Object.defineProperty(e, "description", {
  get() {
    return V.get(e)?.description;
  },
  configurable: !0
}), e)), _t = /* @__PURE__ */ l("_ZodString", (e, t) => {
  ye.init(e, t), $.init(e, t), e._zod.processJSONSchema = (r, o, i) => Io(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, ce(e, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ po(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ go(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ _o(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ vo(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ ee(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ dt(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ ft(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ ee(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ ho(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ mo(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ wo());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ yo(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ zo());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ bo());
    },
    slugify() {
      return this.check(/* @__PURE__ */ ko());
    }
  });
}), gs = /* @__PURE__ */ l("ZodString", (e, t) => {
  ye.init(e, t), _t.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ Ur(_s, n)), e.url = (n) => e.check(/* @__PURE__ */ Wr(vs, n)), e.jwt = (n) => e.check(/* @__PURE__ */ so(As, n)), e.emoji = (n) => e.check(/* @__PURE__ */ Vr(ys, n)), e.guid = (n) => e.check(/* @__PURE__ */ Le(xe, n)), e.uuid = (n) => e.check(/* @__PURE__ */ xr(H, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ Jr(H, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ Fr(H, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ Mr(H, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ Br(ws, n)), e.guid = (n) => e.check(/* @__PURE__ */ Le(xe, n)), e.cuid = (n) => e.check(/* @__PURE__ */ Kr(zs, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ Gr(bs, n)), e.ulid = (n) => e.check(/* @__PURE__ */ qr(ks, n)), e.base64 = (n) => e.check(/* @__PURE__ */ no(Is, n)), e.base64url = (n) => e.check(/* @__PURE__ */ ro(Ts, n)), e.xid = (n) => e.check(/* @__PURE__ */ Xr($s, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ Hr(Zs, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ Yr(Ss, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ Qr(Os, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ eo(Ps, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ to(Es, n)), e.e164 = (n) => e.check(/* @__PURE__ */ oo(js, n)), e.datetime = (n) => e.check(Xo(n)), e.date = (n) => e.check(Yo(n)), e.time = (n) => e.check(es(n)), e.duration = (n) => e.check(ns(n));
});
function R(e) {
  return /* @__PURE__ */ Lr(gs, e);
}
const w = /* @__PURE__ */ l("ZodStringFormat", (e, t) => {
  y.init(e, t), _t.init(e, t);
}), _s = /* @__PURE__ */ l("ZodEmail", (e, t) => {
  Kn.init(e, t), w.init(e, t);
}), xe = /* @__PURE__ */ l("ZodGUID", (e, t) => {
  Vn.init(e, t), w.init(e, t);
}), H = /* @__PURE__ */ l("ZodUUID", (e, t) => {
  Bn.init(e, t), w.init(e, t);
}), vs = /* @__PURE__ */ l("ZodURL", (e, t) => {
  Gn.init(e, t), w.init(e, t);
}), ys = /* @__PURE__ */ l("ZodEmoji", (e, t) => {
  qn.init(e, t), w.init(e, t);
}), ws = /* @__PURE__ */ l("ZodNanoID", (e, t) => {
  Xn.init(e, t), w.init(e, t);
}), zs = /* @__PURE__ */ l("ZodCUID", (e, t) => {
  Hn.init(e, t), w.init(e, t);
}), bs = /* @__PURE__ */ l("ZodCUID2", (e, t) => {
  Yn.init(e, t), w.init(e, t);
}), ks = /* @__PURE__ */ l("ZodULID", (e, t) => {
  Qn.init(e, t), w.init(e, t);
}), $s = /* @__PURE__ */ l("ZodXID", (e, t) => {
  er.init(e, t), w.init(e, t);
}), Zs = /* @__PURE__ */ l("ZodKSUID", (e, t) => {
  tr.init(e, t), w.init(e, t);
}), Ss = /* @__PURE__ */ l("ZodIPv4", (e, t) => {
  ir.init(e, t), w.init(e, t);
}), Os = /* @__PURE__ */ l("ZodIPv6", (e, t) => {
  cr.init(e, t), w.init(e, t);
}), Ps = /* @__PURE__ */ l("ZodCIDRv4", (e, t) => {
  ar.init(e, t), w.init(e, t);
}), Es = /* @__PURE__ */ l("ZodCIDRv6", (e, t) => {
  ur.init(e, t), w.init(e, t);
}), Is = /* @__PURE__ */ l("ZodBase64", (e, t) => {
  lr.init(e, t), w.init(e, t);
}), Ts = /* @__PURE__ */ l("ZodBase64URL", (e, t) => {
  fr.init(e, t), w.init(e, t);
}), js = /* @__PURE__ */ l("ZodE164", (e, t) => {
  pr.init(e, t), w.init(e, t);
}), As = /* @__PURE__ */ l("ZodJWT", (e, t) => {
  mr.init(e, t), w.init(e, t);
}), Cs = /* @__PURE__ */ l("ZodUnknown", (e, t) => {
  gr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => jo();
});
function Je() {
  return /* @__PURE__ */ lo(Cs);
}
const Ns = /* @__PURE__ */ l("ZodNever", (e, t) => {
  _r.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => To(e, n, r);
});
function Rs(e) {
  return /* @__PURE__ */ fo(Ns, e);
}
const Ds = /* @__PURE__ */ l("ZodArray", (e, t) => {
  vr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ro(e, n, r, o), e.element = t.element, ce(e, "ZodArray", {
    min(n, r) {
      return this.check(/* @__PURE__ */ ee(n, r));
    },
    nonempty(n) {
      return this.check(/* @__PURE__ */ ee(1, n));
    },
    max(n, r) {
      return this.check(/* @__PURE__ */ dt(n, r));
    },
    length(n, r) {
      return this.check(/* @__PURE__ */ ft(n, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function we(e, t) {
  return /* @__PURE__ */ $o(Ds, e, t);
}
const Ls = /* @__PURE__ */ l("ZodObject", (e, t) => {
  wr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Do(e, n, r, o), _(e, "shape", () => t.shape), ce(e, "ZodObject", {
    keyof() {
      return ne(Object.keys(this._zod.def.shape));
    },
    catchall(n) {
      return this.clone({ ...this._zod.def, catchall: n });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Je() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Je() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: Rs() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(n) {
      return Mt(this, n);
    },
    safeExtend(n) {
      return Wt(this, n);
    },
    merge(n) {
      return Vt(this, n);
    },
    pick(n) {
      return Jt(this, n);
    },
    omit(n) {
      return Ft(this, n);
    },
    partial(...n) {
      return Bt(vt, this, n[0]);
    },
    required(...n) {
      return Kt(yt, this, n[0]);
    }
  });
});
function J(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...g(t)
  };
  return new Ls(n);
}
const Us = /* @__PURE__ */ l("ZodUnion", (e, t) => {
  zr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Lo(e, n, r, o), e.options = t.options;
});
function xs(e, t) {
  return new Us({
    type: "union",
    options: e,
    ...g(t)
  });
}
const Js = /* @__PURE__ */ l("ZodIntersection", (e, t) => {
  br.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Uo(e, n, r, o);
});
function Fs(e, t) {
  return new Js({
    type: "intersection",
    left: e,
    right: t
  });
}
const Fe = /* @__PURE__ */ l("ZodRecord", (e, t) => {
  kr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => xo(e, n, r, o), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Ms(e, t, n) {
  return !t || !t._zod ? new Fe({
    type: "record",
    keyType: R(),
    valueType: e,
    ...g(t)
  }) : new Fe({
    type: "record",
    keyType: e,
    valueType: t,
    ...g(n)
  });
}
const de = /* @__PURE__ */ l("ZodEnum", (e, t) => {
  $r.init(e, t), $.init(e, t), e._zod.processJSONSchema = (r, o, i) => Ao(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const i = {};
    for (const s of r)
      if (n.has(s))
        i[s] = t.entries[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new de({
      ...t,
      checks: [],
      ...g(o),
      entries: i
    });
  }, e.exclude = (r, o) => {
    const i = { ...t.entries };
    for (const s of r)
      if (n.has(s))
        delete i[s];
      else
        throw new Error(`Key ${s} not found in enum`);
    return new de({
      ...t,
      checks: [],
      ...g(o),
      entries: i
    });
  };
});
function ne(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new de({
    type: "enum",
    entries: n,
    ...g(t)
  });
}
const Ws = /* @__PURE__ */ l("ZodTransform", (e, t) => {
  Zr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => No(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new He(e.constructor.name);
    n.addIssue = (i) => {
      if (typeof i == "string")
        n.issues.push(B(i, n.value, t));
      else {
        const s = i;
        s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = e), n.issues.push(B(s));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((i) => (n.value = i, n.fallback = !0, n)) : (n.value = o, n.fallback = !0, n);
  };
});
function Vs(e) {
  return new Ws({
    type: "transform",
    transform: e
  });
}
const vt = /* @__PURE__ */ l("ZodOptional", (e, t) => {
  lt.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => gt(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Me(e) {
  return new vt({
    type: "optional",
    innerType: e
  });
}
const Bs = /* @__PURE__ */ l("ZodExactOptional", (e, t) => {
  Sr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => gt(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ks(e) {
  return new Bs({
    type: "optional",
    innerType: e
  });
}
const Gs = /* @__PURE__ */ l("ZodNullable", (e, t) => {
  Or.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Jo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function We(e) {
  return new Gs({
    type: "nullable",
    innerType: e
  });
}
const qs = /* @__PURE__ */ l("ZodDefault", (e, t) => {
  Pr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Mo(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Xs(e, t) {
  return new qs({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : et(t);
    }
  });
}
const Hs = /* @__PURE__ */ l("ZodPrefault", (e, t) => {
  Er.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Wo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ys(e, t) {
  return new Hs({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : et(t);
    }
  });
}
const yt = /* @__PURE__ */ l("ZodNonOptional", (e, t) => {
  Ir.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Fo(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Qs(e, t) {
  return new yt({
    type: "nonoptional",
    innerType: e,
    ...g(t)
  });
}
const ei = /* @__PURE__ */ l("ZodCatch", (e, t) => {
  Tr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Vo(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ti(e, t) {
  return new ei({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const ni = /* @__PURE__ */ l("ZodPipe", (e, t) => {
  jr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Bo(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Ve(e, t) {
  return new ni({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const ri = /* @__PURE__ */ l("ZodReadonly", (e, t) => {
  Ar.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ko(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function oi(e) {
  return new ri({
    type: "readonly",
    innerType: e
  });
}
const si = /* @__PURE__ */ l("ZodLazy", (e, t) => {
  Cr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Go(e, n, r, o), e.unwrap = () => e._zod.def.getter();
});
function ii(e) {
  return new si({
    type: "lazy",
    getter: e
  });
}
const ci = /* @__PURE__ */ l("ZodCustom", (e, t) => {
  Nr.init(e, t), $.init(e, t), e._zod.processJSONSchema = (n, r, o) => Co(e, n);
});
function ai(e, t = {}) {
  return /* @__PURE__ */ Zo(ci, e, t);
}
function ui(e, t) {
  return /* @__PURE__ */ So(e, t);
}
const li = J({
  urlSuffix: R().optional().default(".html"),
  dropdownLayouts: Ms(
    R(),
    ne([
      "tiles",
      "list"
    ])
  ).optional()
}).strict(), wt = ii(
  () => J({
    id: R(),
    label: R(),
    url: R(),
    image: R().nullable().optional().default(null),
    children: we(
      wt
    ),
    meta: J({
      type: ne(["link", "cta", "banner"]).optional(),
      icon: ne(["arrow", "external"]).optional()
    }).optional().default({})
  }).strict()
), di = J({
  data: J({
    items: we(
      wt
    )
  }).strict(),
  settings: J({
    theme: li
  }).strict()
}).strict();
function fi(e) {
  return di.parse(e);
}
const ze = "megamenu";
function zt(e, t) {
  try {
    const n = fi(e), r = pi(n);
    return t?.log(
      "bootstrap",
      "Config resolved",
      r
    ), Object.freeze(r);
  } catch (n) {
    throw t?.log(
      "bootstrap",
      "Invalid widget contract",
      n instanceof Error ? n.message : n,
      "error"
    ), n;
  }
}
function pi(e) {
  return {
    data: e.data,
    settings: {
      ...e.settings,
      theme: {
        ...e.settings.theme,
        dropdownLayouts: e.settings.theme.dropdownLayouts !== void 0 ? e.settings.theme.dropdownLayouts : {}
      }
    }
  };
}
const bt = Ge(void 0);
function hi() {
  if (typeof window > "u")
    return [];
  const t = new URLSearchParams(window.location.search).get("re-debug");
  return t ? t === "1" || t === "all" ? ["all"] : t.split(",").map((n) => n.trim().toLowerCase()) : null;
}
class mi {
  widgetId;
  instance;
  correlationId;
  constructor(t, n) {
    this.widgetId = t, n !== void 0 && (this.instance = n);
  }
  log(t, n, r, o = "info") {
    const i = {
      widget: this.widgetId,
      instance: this.instance ?? this.widgetId,
      phase: t,
      message: n,
      level: o,
      data: r,
      ts: Date.now()
    };
    if (this.isEnabled()) {
      const s = `[${this.widgetId}] ${t}`;
      o === "error" ? console.error(s, i) : o === "warn" ? console.warn(s, i) : console.log(s, i), this.dispatchActivityEvent(i);
    }
  }
  group(t, n) {
    if (this.isEnabled()) {
      if (console.group(`[ReactEdge] ${t}`), n)
        for (const [r, o] of Object.entries(n))
          console.log(`${r}:`, o);
      console.groupEnd();
    }
  }
  debug(t, n) {
    if (this.isEnabled() && (console.group(`[ReactEdge] ${t}`), n))
      for (const [r, o] of Object.entries(n))
        console.debug(`${r}:`, o);
  }
  dispatchActivityEvent(t) {
    typeof window > "u" || window.dispatchEvent(
      new CustomEvent(
        "reactedge:activity",
        {
          detail: t
        }
      )
    );
  }
  isEnabled() {
    const t = hi();
    return t !== null && (t.includes("all") || t.includes(this.widgetId.toLowerCase()));
  }
  setCorrelationId(t) {
    this.correlationId = t;
  }
  getCorrelationId() {
    return this.correlationId;
  }
}
const gi = bt.Provider, _i = ({
  children: e,
  hostElement: t
}) => {
  const n = t ?? document.documentElement, r = new mi(ze, n.dataset.instance);
  return /* @__PURE__ */ p(
    gi,
    {
      value: r,
      children: e
    }
  );
};
function vi() {
  const e = qe(bt);
  if (!e)
    throw new Error("useInstanceState must be used within InstanceStateProvider");
  return e;
}
function yi(e) {
  const [t, n] = G(
    () => typeof window < "u" ? window.matchMedia(e).matches : !1
  );
  return Xe(() => {
    const r = window.matchMedia(e), o = () => n(r.matches);
    return r.addEventListener("change", o), () => r.removeEventListener("change", o);
  }, [e]), t;
}
const kt = Ge(void 0), wi = kt.Provider, $t = ({ children: e, settings: t }) => {
  const [n] = G({
    settings: t
  });
  return /* @__PURE__ */ p(
    wi,
    {
      value: {
        settings: n.settings
      },
      children: e
    }
  );
}, zi = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px"
}, bi = {
  width: "26px",
  height: "26px",
  border: "3px solid #ccc",
  borderRadius: "50%",
  animation: "spin 0.8s linear infinite"
};
function be() {
  return /* @__PURE__ */ p("div", { style: zi, children: /* @__PURE__ */ p("div", { style: bi }) });
}
function Zt(e, t) {
  if (!e || t === void 0) return "list";
  try {
    const r = new URL(e).pathname.split("/").filter(Boolean), o = r[r.length - 1] || "", i = t?.urlSuffix ?? ".html", c = `/${o.endsWith(i) ? o.slice(0, -i.length) : o}`;
    return t?.dropdownLayouts?.[c] ?? "list";
  } catch {
    return "list";
  }
}
function St(e, t) {
  return !e.children?.length ? "none" : e.children.some(
    (o) => o.children && o.children.length > 0
  ) ? "complex" : t === "tiles" ? "simple-tiles" : "simple-list";
}
function Be(e, t) {
  try {
    const n = t ?? "http://localhost", r = new URL(e, n);
    return t && r.origin, /^https?:/.test(e) ? e : (r.pathname.replace(/\/+$/, "") || "/") + r.search + r.hash;
  } catch {
    return e.replace(/\/+$/, "") || "/";
  }
}
function Ot(e, t) {
  return !e || e === "#" || e.startsWith("#") ? !1 : Be(e) === Be("http://localhost");
}
function Pt(e) {
  return e.children.some(
    (t) => Ot(t.url) || Pt(t)
  );
}
function Et(e) {
  return Ot(e.url) || Pt(e);
}
function ki({
  item: e,
  isActive: t,
  hasSubmenu: n
}) {
  const r = Et(e), o = /* @__PURE__ */ P(
    "span",
    {
      className: [
        "mw-parent-label",
        t && "is-active",
        r && "is-breadcrumb",
        n && "has-submenu"
      ].filter(Boolean).join(" "),
      children: [
        e.label,
        n && /* @__PURE__ */ p("span", { className: "mw-parent-arrow", "aria-hidden": "true", children: "▼" })
      ]
    }
  );
  return !n && e.url ? /* @__PURE__ */ p(
    "a",
    {
      href: e.url,
      className: "mw-parent-link",
      children: o
    }
  ) : /* @__PURE__ */ p("div", { className: "mw-parent-item", children: o });
}
const $i = ({ url: e, label: t, isInBreadcrumb: n }) => /* @__PURE__ */ p(
  "a",
  {
    href: e,
    className: `mw-link ${n ? "in-breadcrumb" : ""}`,
    children: t
  }
);
function Zi(e) {
  return e ? e === "arrow" ? /* @__PURE__ */ P(
    "svg",
    {
      width: "14",
      height: "14",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ p("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
        /* @__PURE__ */ p("polyline", { points: "12 5 19 12 12 19" })
      ]
    }
  ) : e === "external" ? /* @__PURE__ */ p("svg", {}) : null : null;
}
function Si({ url: e, label: t, icon: n }) {
  return /* @__PURE__ */ P(
    "a",
    {
      href: e,
      className: "mw-cta-link",
      children: [
        /* @__PURE__ */ p("span", { className: "mw-cta-link__label", children: t }),
        n && /* @__PURE__ */ p(
          "span",
          {
            className: "mw-cta-link__icon",
            "aria-hidden": "true",
            children: n && Zi(n)
          }
        )
      ]
    }
  );
}
function K(e) {
  const { item: t, isActive: n, isParent: r, hasSubmenu: o } = e;
  return t.url ? t.meta?.type === "cta" ? /* @__PURE__ */ p(Si, { url: t.url, label: t.label, icon: t.meta?.icon }) : r ? /* @__PURE__ */ p(ki, { item: t, isActive: n || !1, hasSubmenu: o || !1 }) : /* @__PURE__ */ p($i, { url: t.url, label: t.label, isInBreadcrumb: Et(t) }) : null;
}
function It({ item: e }) {
  return /* @__PURE__ */ P(
    "a",
    {
      href: e.url,
      className: "mw-menu-tile",
      children: [
        e.image && /* @__PURE__ */ p(
          "img",
          {
            src: e.image,
            alt: e.label,
            className: "mw-menu-tile__image"
          }
        ),
        /* @__PURE__ */ p("span", { className: "mw-menu-tile__label", children: e.label })
      ]
    }
  );
}
function Tt({ label: e, children: t }) {
  return t?.length ? /* @__PURE__ */ P("div", { className: "megamenu-col", children: [
    /* @__PURE__ */ p("div", { className: "megamenu-col__title", children: e }),
    /* @__PURE__ */ p("ul", { className: "megamenu-col__list", children: t.map((n) => /* @__PURE__ */ p(
      "li",
      {
        className: "megamenu-col__item",
        children: /* @__PURE__ */ p(K, { item: n })
      },
      n.id
    )) })
  ] }) : null;
}
function Oi({ items: e, loading: t = !1, theme: n }) {
  const [r, o] = G(null);
  return t ? /* @__PURE__ */ p(be, {}) : /* @__PURE__ */ p("div", { className: "megamenu", children: e && e.map((i) => {
    const s = r === i.id, c = Zt(i.url, n), a = St(i, c), u = a !== "none";
    return /* @__PURE__ */ P(
      "div",
      {
        className: [
          "megamenu-item",
          s && "is-active",
          `menu-${a}`
        ].filter(Boolean).join(" "),
        onMouseEnter: () => o(i.id),
        onMouseLeave: () => o(null),
        children: [
          /* @__PURE__ */ p(
            K,
            {
              item: i,
              isActive: s,
              isParent: !0,
              hasSubmenu: u
            }
          ),
          a !== "none" && /* @__PURE__ */ P("div", { className: "megamenu-dropdown", children: [
            a === "simple-list" && i.children.map((d) => /* @__PURE__ */ p(K, { item: d }, d.id)),
            a === "simple-tiles" && /* @__PURE__ */ p("div", { className: "megamenu-tiles", children: i.children?.map((d) => /* @__PURE__ */ p(It, { item: d }, d.id)) }),
            a === "complex" && i.children.map((d) => /* @__PURE__ */ p(
              Tt,
              {
                label: d.label,
                children: d.children
              },
              d.id
            ))
          ] })
        ]
      },
      i.id
    );
  }) });
}
const Pi = ({
  isOpen: e,
  onClose: t,
  children: n
}) => (Xe(() => {
  const r = (o) => {
    o.key === "Escape" && t();
  };
  return e && document.addEventListener("keydown", r), () => {
    document.removeEventListener("keydown", r);
  };
}, [e, t]), /* @__PURE__ */ P(Ke, { children: [
  /* @__PURE__ */ p(
    "div",
    {
      className: `drawer-overlay ${e ? "is-open" : ""}`,
      onClick: t
    }
  ),
  /* @__PURE__ */ p(
    "aside",
    {
      className: `drawer drawer ${e ? "is-open" : ""}`,
      children: n
    }
  )
] }));
function Ei() {
  const e = qe(kt);
  if (!e)
    throw new Error("useConfigState must be used within ConfigStateProvider");
  return e;
}
function jt({ items: e, loading: t = !1 }) {
  const [n, r] = G(null), { settings: o } = Ei();
  return t || e && !e.length ? /* @__PURE__ */ p(be, {}) : /* @__PURE__ */ p("div", { className: "megamenu", children: e && e.map((i) => {
    const s = n === i.id, c = Zt(i.url, o), a = St(i, c), u = a !== "none";
    return /* @__PURE__ */ P(
      "div",
      {
        className: [
          "megamenu-item",
          s && "is-active",
          `menu-${a}`
        ].filter(Boolean).join(" "),
        onClick: () => r(i.id),
        children: [
          /* @__PURE__ */ p(
            K,
            {
              item: i,
              isActive: s,
              isParent: !0,
              hasSubmenu: u
            }
          ),
          a !== "none" && /* @__PURE__ */ P("div", { className: "megamenu-dropdown", children: [
            a === "simple-list" && i.children.map((d) => /* @__PURE__ */ p(K, { item: d }, d.id)),
            a === "simple-tiles" && /* @__PURE__ */ p("div", { className: "megamenu-tiles", children: i.children?.map((d) => /* @__PURE__ */ p(It, { item: d }, d.id)) }),
            a === "complex" && i.children.map((d) => /* @__PURE__ */ p(
              Tt,
              {
                label: d.label,
                children: d.children
              },
              d.id
            ))
          ] })
        ]
      },
      i.id
    );
  }) });
}
function Ii({ items: e, loading: t = !1, theme: n }) {
  const [r, o] = G(!1);
  return t || e && !e.length ? /* @__PURE__ */ p(be, {}) : /* @__PURE__ */ P(Ke, { children: [
    /* @__PURE__ */ p(
      "button",
      {
        className: "menu-toggle",
        "aria-expanded": r,
        "aria-controls": "mobile-menu",
        onClick: () => o(!0),
        children: "☰"
      }
    ),
    /* @__PURE__ */ p(
      Pi,
      {
        isOpen: r,
        onClose: () => o(!1),
        children: /* @__PURE__ */ p(jt, { items: e, theme: n })
      }
    )
  ] });
}
function Ti({ contract: e }) {
  const t = vi(), n = zt(e, t), r = yi("(max-width: 768px)");
  return n ? /* @__PURE__ */ P($t, { settings: n?.settings?.theme, children: [
    !r && /* @__PURE__ */ p(Oi, { items: n?.data.items, theme: n.settings?.theme }),
    r && /* @__PURE__ */ p(Ii, { items: n?.data.items, theme: n.settings?.theme })
  ] }) : null;
}
function ji({
  contract: e,
  hostElement: t
}) {
  return /* @__PURE__ */ p("div", { className: `reactedge-${ze}`, children: /* @__PURE__ */ p(
    _i,
    {
      ...t ? { hostElement: t } : {},
      children: /* @__PURE__ */ p(Ti, { contract: e })
    }
  ) });
}
function Di({
  container: e,
  contract: t,
  hydrate: n = !1
}) {
  const r = /* @__PURE__ */ p(ji, { contract: t });
  n ? Nt(e, r) : Rt(e).render(r);
}
const Ai = ({ contract: e }) => {
  const t = zt(e);
  return t ? /* @__PURE__ */ p($t, { settings: t?.settings?.theme, children: /* @__PURE__ */ p(jt, { items: t?.data.items, theme: t.settings?.theme }) }) : null;
};
function Li({
  contract: e
}) {
  return /* @__PURE__ */ p("div", { className: `reactedge-${ze}`, children: /* @__PURE__ */ p(Ai, { contract: e }) });
}
export {
  Di as Widget,
  Li as WidgetComponent
};
