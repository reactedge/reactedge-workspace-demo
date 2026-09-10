import { jsx as g, jsxs as ge } from "react/jsx-runtime";
import { createContext as _e, useContext as ve, useMemo as Gt, useState as P, useEffect as W, useCallback as He } from "react";
import { hydrateRoot as Vt, createRoot as qt } from "react-dom/client";
var Ie;
function l(e, t, n) {
  function r(a, c) {
    if (a._zod || Object.defineProperty(a, "_zod", {
      value: {
        def: c,
        constr: i,
        traits: /* @__PURE__ */ new Set()
      },
      enumerable: !1
    }), a._zod.traits.has(e))
      return;
    a._zod.traits.add(e), t(a, c);
    const u = i.prototype, d = Object.keys(u);
    for (let m = 0; m < d.length; m++) {
      const p = d[m];
      p in a || (a[p] = u[p].bind(a));
    }
  }
  const o = n?.Parent ?? Object;
  class s extends o {
  }
  Object.defineProperty(s, "name", { value: e });
  function i(a) {
    var c;
    const u = n?.Parent ? new s() : this;
    r(u, a), (c = u._zod).deferred ?? (c.deferred = []);
    for (const d of u._zod.deferred)
      d();
    return u;
  }
  return Object.defineProperty(i, "init", { value: r }), Object.defineProperty(i, Symbol.hasInstance, {
    value: (a) => n?.Parent && a instanceof n.Parent ? !0 : a?._zod?.traits?.has(e)
  }), Object.defineProperty(i, "name", { value: e }), i;
}
class L extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class et extends Error {
  constructor(t) {
    super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
  }
}
(Ie = globalThis).__zod_globalConfig ?? (Ie.__zod_globalConfig = {});
const ye = globalThis.__zod_globalConfig;
function j(e) {
  return ye;
}
function tt(e) {
  const t = Object.values(e).filter((r) => typeof r == "number");
  return Object.entries(e).filter(([r, o]) => t.indexOf(+r) === -1).map(([r, o]) => o);
}
function de(e, t) {
  return typeof t == "bigint" ? t.toString() : t;
}
function re(e) {
  return {
    get value() {
      {
        const t = e();
        return Object.defineProperty(this, "value", { value: t }), t;
      }
    }
  };
}
function be(e) {
  return e == null;
}
function we(e) {
  const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
  return e.slice(t, n);
}
function Wt(e, t) {
  const n = e / t, r = Math.round(n), o = Number.EPSILON * Math.max(Math.abs(n), 1);
  return Math.abs(n - r) < o ? 0 : n - r;
}
const Ee = /* @__PURE__ */ Symbol("evaluating");
function v(e, t, n) {
  let r;
  Object.defineProperty(e, t, {
    get() {
      if (r !== Ee)
        return r === void 0 && (r = Ee, r = n()), r;
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
function x(e, t, n) {
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
function Pe(e) {
  return JSON.stringify(e);
}
function Bt(e) {
  return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const nt = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
};
function G(e) {
  return typeof e == "object" && e !== null && !Array.isArray(e);
}
const Kt = /* @__PURE__ */ re(() => {
  if (ye.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const e = Function;
    return new e(""), !0;
  } catch {
    return !1;
  }
});
function V(e) {
  if (G(e) === !1)
    return !1;
  const t = e.constructor;
  if (t === void 0 || typeof t != "function")
    return !0;
  const n = t.prototype;
  return !(G(n) === !1 || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === !1);
}
function rt(e) {
  return V(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
const Yt = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function U(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function A(e, t, n) {
  const r = new e._zod.constr(t ?? e._zod.def);
  return (!t || n?.parent) && (r._zod.parent = e), r;
}
function h(e) {
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
function Qt(e) {
  return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
const Xt = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function Ht(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const s = C(e._zod.def, {
    get shape() {
      const i = {};
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && (i[a] = n.shape[a]);
      }
      return x(this, "shape", i), i;
    },
    checks: []
  });
  return A(e, s);
}
function en(e, t) {
  const n = e._zod.def, r = n.checks;
  if (r && r.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const s = C(e._zod.def, {
    get shape() {
      const i = { ...e._zod.def.shape };
      for (const a in t) {
        if (!(a in n.shape))
          throw new Error(`Unrecognized key: "${a}"`);
        t[a] && delete i[a];
      }
      return x(this, "shape", i), i;
    },
    checks: []
  });
  return A(e, s);
}
function tn(e, t) {
  if (!V(t))
    throw new Error("Invalid input to extend: expected a plain object");
  const n = e._zod.def.checks;
  if (n && n.length > 0) {
    const s = e._zod.def.shape;
    for (const i in t)
      if (Object.getOwnPropertyDescriptor(s, i) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  const o = C(e._zod.def, {
    get shape() {
      const s = { ...e._zod.def.shape, ...t };
      return x(this, "shape", s), s;
    }
  });
  return A(e, o);
}
function nn(e, t) {
  if (!V(t))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const n = C(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t };
      return x(this, "shape", r), r;
    }
  });
  return A(e, n);
}
function rn(e, t) {
  if (e._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const n = C(e._zod.def, {
    get shape() {
      const r = { ...e._zod.def.shape, ...t._zod.def.shape };
      return x(this, "shape", r), r;
    },
    get catchall() {
      return t._zod.def.catchall;
    },
    checks: t._zod.def.checks ?? []
  });
  return A(e, n);
}
function on(e, t, n) {
  const o = t._zod.def.checks;
  if (o && o.length > 0)
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  const i = C(t._zod.def, {
    get shape() {
      const a = t._zod.def.shape, c = { ...a };
      if (n)
        for (const u in n) {
          if (!(u in a))
            throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u]);
        }
      else
        for (const u in a)
          c[u] = e ? new e({
            type: "optional",
            innerType: a[u]
          }) : a[u];
      return x(this, "shape", c), c;
    },
    checks: []
  });
  return A(t, i);
}
function sn(e, t, n) {
  const r = C(t._zod.def, {
    get shape() {
      const o = t._zod.def.shape, s = { ...o };
      if (n)
        for (const i in n) {
          if (!(i in s))
            throw new Error(`Unrecognized key: "${i}"`);
          n[i] && (s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          }));
        }
      else
        for (const i in o)
          s[i] = new e({
            type: "nonoptional",
            innerType: o[i]
          });
      return x(this, "shape", s), s;
    }
  });
  return A(t, r);
}
function R(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue !== !0)
      return !0;
  return !1;
}
function an(e, t = 0) {
  if (e.aborted === !0)
    return !0;
  for (let n = t; n < e.issues.length; n++)
    if (e.issues[n]?.continue === !1)
      return !0;
  return !1;
}
function ot(e, t) {
  return t.map((n) => {
    var r;
    return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
  });
}
function Y(e) {
  return typeof e == "string" ? e : e?.message;
}
function D(e, t, n) {
  const r = e.message ? e.message : Y(e.inst?._zod.def?.error?.(e)) ?? Y(t?.error?.(e)) ?? Y(n.customError?.(e)) ?? Y(n.localeError?.(e)) ?? "Invalid input", { inst: o, continue: s, input: i, ...a } = e;
  return a.path ?? (a.path = []), a.message = r, t?.reportInput && (a.input = i), a;
}
function ze(e) {
  return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function q(...e) {
  const [t, n, r] = e;
  return typeof t == "string" ? {
    message: t,
    code: "custom",
    input: n,
    inst: r
  } : { ...t };
}
const it = (e, t) => {
  e.name = "$ZodError", Object.defineProperty(e, "_zod", {
    value: e._zod,
    enumerable: !1
  }), Object.defineProperty(e, "issues", {
    value: t,
    enumerable: !1
  }), e.message = JSON.stringify(t, de, 2), Object.defineProperty(e, "toString", {
    value: () => e.message,
    enumerable: !1
  });
}, st = l("$ZodError", it), at = l("$ZodError", it, { Parent: Error });
function cn(e, t = (n) => n.message) {
  const n = {}, r = [];
  for (const o of e.issues)
    o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
  return { formErrors: r, fieldErrors: n };
}
function un(e, t = (n) => n.message) {
  const n = { _errors: [] }, r = (o, s = []) => {
    for (const i of o.issues)
      if (i.code === "invalid_union" && i.errors.length)
        i.errors.map((a) => r({ issues: a }, [...s, ...i.path]));
      else if (i.code === "invalid_key")
        r({ issues: i.issues }, [...s, ...i.path]);
      else if (i.code === "invalid_element")
        r({ issues: i.issues }, [...s, ...i.path]);
      else {
        const a = [...s, ...i.path];
        if (a.length === 0)
          n._errors.push(t(i));
        else {
          let c = n, u = 0;
          for (; u < a.length; ) {
            const d = a[u];
            u === a.length - 1 ? (c[d] = c[d] || { _errors: [] }, c[d]._errors.push(t(i))) : c[d] = c[d] || { _errors: [] }, c = c[d], u++;
          }
        }
      }
  };
  return r(e), n;
}
const ke = (e) => (t, n, r, o) => {
  const s = r ? { ...r, async: !1 } : { async: !1 }, i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise)
    throw new L();
  if (i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => D(c, s, j())));
    throw nt(a, o?.callee), a;
  }
  return i.value;
}, $e = (e) => async (t, n, r, o) => {
  const s = r ? { ...r, async: !0 } : { async: !0 };
  let i = t._zod.run({ value: n, issues: [] }, s);
  if (i instanceof Promise && (i = await i), i.issues.length) {
    const a = new (o?.Err ?? e)(i.issues.map((c) => D(c, s, j())));
    throw nt(a, o?.callee), a;
  }
  return i.value;
}, oe = (e) => (t, n, r) => {
  const o = r ? { ...r, async: !1 } : { async: !1 }, s = t._zod.run({ value: n, issues: [] }, o);
  if (s instanceof Promise)
    throw new L();
  return s.issues.length ? {
    success: !1,
    error: new (e ?? st)(s.issues.map((i) => D(i, o, j())))
  } : { success: !0, data: s.value };
}, ln = /* @__PURE__ */ oe(at), ie = (e) => async (t, n, r) => {
  const o = r ? { ...r, async: !0 } : { async: !0 };
  let s = t._zod.run({ value: n, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length ? {
    success: !1,
    error: new e(s.issues.map((i) => D(i, o, j())))
  } : { success: !0, data: s.value };
}, dn = /* @__PURE__ */ ie(at), fn = (e) => (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return ke(e)(t, n, o);
}, pn = (e) => (t, n, r) => ke(e)(t, n, r), hn = (e) => async (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return $e(e)(t, n, o);
}, mn = (e) => async (t, n, r) => $e(e)(t, n, r), gn = (e) => (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return oe(e)(t, n, o);
}, _n = (e) => (t, n, r) => oe(e)(t, n, r), vn = (e) => async (t, n, r) => {
  const o = r ? { ...r, direction: "backward" } : { direction: "backward" };
  return ie(e)(t, n, o);
}, yn = (e) => async (t, n, r) => ie(e)(t, n, r), bn = /^[cC][0-9a-z]{6,}$/, wn = /^[0-9a-z]+$/, zn = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, kn = /^[0-9a-vA-V]{20}$/, $n = /^[A-Za-z0-9]{27}$/, Zn = /^[a-zA-Z0-9_-]{21}$/, Sn = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, On = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ne = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, In = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, En = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Pn() {
  return new RegExp(En, "u");
}
const Nn = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Tn = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Cn = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, An = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, jn = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ct = /^[A-Za-z0-9_-]*$/, Dn = /^https?$/, xn = /^\+[1-9]\d{6,14}$/, ut = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Rn = /* @__PURE__ */ new RegExp(`^${ut}$`);
function lt(e) {
  const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function Ln(e) {
  return new RegExp(`^${lt(e)}$`);
}
function Un(e) {
  const t = lt({ precision: e.precision }), n = ["Z"];
  e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const r = `${t}(?:${n.join("|")})`;
  return new RegExp(`^${ut}T(?:${r})$`);
}
const Fn = (e) => {
  const t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${t}$`);
}, Mn = /^-?\d+$/, Jn = /^-?\d+(?:\.\d+)?$/, Gn = /^[^A-Z]*$/, Vn = /^[^a-z]*$/, I = /* @__PURE__ */ l("$ZodCheck", (e, t) => {
  var n;
  e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), dt = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, ft = /* @__PURE__ */ l("$ZodCheckLessThan", (e, t) => {
  I.init(e, t);
  const n = dt[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    t.value < s && (t.inclusive ? o.maximum = t.value : o.exclusiveMaximum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
      origin: n,
      code: "too_big",
      maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), pt = /* @__PURE__ */ l("$ZodCheckGreaterThan", (e, t) => {
  I.init(e, t);
  const n = dt[typeof t.value];
  e._zod.onattach.push((r) => {
    const o = r._zod.bag, s = (t.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    t.value > s && (t.inclusive ? o.minimum = t.value : o.exclusiveMinimum = t.value);
  }), e._zod.check = (r) => {
    (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
      origin: n,
      code: "too_small",
      minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
      input: r.value,
      inclusive: t.inclusive,
      inst: e,
      continue: !t.abort
    });
  };
}), qn = /* @__PURE__ */ l("$ZodCheckMultipleOf", (e, t) => {
  I.init(e, t), e._zod.onattach.push((n) => {
    var r;
    (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
  }), e._zod.check = (n) => {
    if (typeof n.value != typeof t.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Wt(n.value, t.value) === 0) || n.issues.push({
      origin: typeof n.value,
      code: "not_multiple_of",
      divisor: t.value,
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Wn = /* @__PURE__ */ l("$ZodCheckNumberFormat", (e, t) => {
  I.init(e, t), t.format = t.format || "float64";
  const n = t.format?.includes("int"), r = n ? "int" : "number", [o, s] = Xt[t.format];
  e._zod.onattach.push((i) => {
    const a = i._zod.bag;
    a.format = t.format, a.minimum = o, a.maximum = s, n && (a.pattern = Mn);
  }), e._zod.check = (i) => {
    const a = i.value;
    if (n) {
      if (!Number.isInteger(a)) {
        i.issues.push({
          expected: r,
          format: t.format,
          code: "invalid_type",
          continue: !1,
          input: a,
          inst: e
        });
        return;
      }
      if (!Number.isSafeInteger(a)) {
        a > 0 ? i.issues.push({
          input: a,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        }) : i.issues.push({
          input: a,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: e,
          origin: r,
          inclusive: !0,
          continue: !t.abort
        });
        return;
      }
    }
    a < o && i.issues.push({
      origin: "number",
      input: a,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    }), a > s && i.issues.push({
      origin: "number",
      input: a,
      code: "too_big",
      maximum: s,
      inclusive: !0,
      inst: e,
      continue: !t.abort
    });
  };
}), Bn = /* @__PURE__ */ l("$ZodCheckMaxLength", (e, t) => {
  var n;
  I.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !be(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    t.maximum < o && (r._zod.bag.maximum = t.maximum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length <= t.maximum)
      return;
    const i = ze(o);
    r.issues.push({
      origin: i,
      code: "too_big",
      maximum: t.maximum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Kn = /* @__PURE__ */ l("$ZodCheckMinLength", (e, t) => {
  var n;
  I.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !be(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    t.minimum > o && (r._zod.bag.minimum = t.minimum);
  }), e._zod.check = (r) => {
    const o = r.value;
    if (o.length >= t.minimum)
      return;
    const i = ze(o);
    r.issues.push({
      origin: i,
      code: "too_small",
      minimum: t.minimum,
      inclusive: !0,
      input: o,
      inst: e,
      continue: !t.abort
    });
  };
}), Yn = /* @__PURE__ */ l("$ZodCheckLengthEquals", (e, t) => {
  var n;
  I.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
    const o = r.value;
    return !be(o) && o.length !== void 0;
  }), e._zod.onattach.push((r) => {
    const o = r._zod.bag;
    o.minimum = t.length, o.maximum = t.length, o.length = t.length;
  }), e._zod.check = (r) => {
    const o = r.value, s = o.length;
    if (s === t.length)
      return;
    const i = ze(o), a = s > t.length;
    r.issues.push({
      origin: i,
      ...a ? { code: "too_big", maximum: t.length } : { code: "too_small", minimum: t.length },
      inclusive: !0,
      exact: !0,
      input: r.value,
      inst: e,
      continue: !t.abort
    });
  };
}), se = /* @__PURE__ */ l("$ZodCheckStringFormat", (e, t) => {
  var n, r;
  I.init(e, t), e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.format = t.format, t.pattern && (s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(t.pattern));
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
}), Qn = /* @__PURE__ */ l("$ZodCheckRegex", (e, t) => {
  se.init(e, t), e._zod.check = (n) => {
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
}), Xn = /* @__PURE__ */ l("$ZodCheckLowerCase", (e, t) => {
  t.pattern ?? (t.pattern = Gn), se.init(e, t);
}), Hn = /* @__PURE__ */ l("$ZodCheckUpperCase", (e, t) => {
  t.pattern ?? (t.pattern = Vn), se.init(e, t);
}), er = /* @__PURE__ */ l("$ZodCheckIncludes", (e, t) => {
  I.init(e, t);
  const n = U(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
  t.pattern = r, e._zod.onattach.push((o) => {
    const s = o._zod.bag;
    s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(r);
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
}), tr = /* @__PURE__ */ l("$ZodCheckStartsWith", (e, t) => {
  I.init(e, t);
  const n = new RegExp(`^${U(t.prefix)}.*`);
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
}), nr = /* @__PURE__ */ l("$ZodCheckEndsWith", (e, t) => {
  I.init(e, t);
  const n = new RegExp(`.*${U(t.suffix)}$`);
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
}), rr = /* @__PURE__ */ l("$ZodCheckOverwrite", (e, t) => {
  I.init(e, t), e._zod.check = (n) => {
    n.value = t.tx(n.value);
  };
});
class or {
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
`).filter((i) => i), o = Math.min(...r.map((i) => i.length - i.trimStart().length)), s = r.map((i) => i.slice(o)).map((i) => " ".repeat(this.indent * 2) + i);
    for (const i of s)
      this.content.push(i);
  }
  compile() {
    const t = Function, n = this?.args, o = [...(this?.content ?? [""]).map((s) => `  ${s}`)];
    return new t(...n, o.join(`
`));
  }
}
const ir = {
  major: 4,
  minor: 4,
  patch: 3
}, z = /* @__PURE__ */ l("$ZodType", (e, t) => {
  var n;
  e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = ir;
  const r = [...e._zod.def.checks ?? []];
  e._zod.traits.has("$ZodCheck") && r.unshift(e);
  for (const o of r)
    for (const s of o._zod.onattach)
      s(e);
  if (r.length === 0)
    (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
      e._zod.run = e._zod.parse;
    });
  else {
    const o = (i, a, c) => {
      let u = R(i), d;
      for (const m of a) {
        if (m._zod.def.when) {
          if (an(i) || !m._zod.def.when(i))
            continue;
        } else if (u)
          continue;
        const p = i.issues.length, f = m._zod.check(i);
        if (f instanceof Promise && c?.async === !1)
          throw new L();
        if (d || f instanceof Promise)
          d = (d ?? Promise.resolve()).then(async () => {
            await f, i.issues.length !== p && (u || (u = R(i, p)));
          });
        else {
          if (i.issues.length === p)
            continue;
          u || (u = R(i, p));
        }
      }
      return d ? d.then(() => i) : i;
    }, s = (i, a, c) => {
      if (R(i))
        return i.aborted = !0, i;
      const u = o(a, r, c);
      if (u instanceof Promise) {
        if (c.async === !1)
          throw new L();
        return u.then((d) => e._zod.parse(d, c));
      }
      return e._zod.parse(u, c);
    };
    e._zod.run = (i, a) => {
      if (a.skipChecks)
        return e._zod.parse(i, a);
      if (a.direction === "backward") {
        const u = e._zod.parse({ value: i.value, issues: [] }, { ...a, skipChecks: !0 });
        return u instanceof Promise ? u.then((d) => s(d, i, a)) : s(u, i, a);
      }
      const c = e._zod.parse(i, a);
      if (c instanceof Promise) {
        if (a.async === !1)
          throw new L();
        return c.then((u) => o(u, r, a));
      }
      return o(c, r, a);
    };
  }
  v(e, "~standard", () => ({
    validate: (o) => {
      try {
        const s = ln(e, o);
        return s.success ? { value: s.data } : { issues: s.error?.issues };
      } catch {
        return dn(e, o).then((i) => i.success ? { value: i.data } : { issues: i.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  }));
}), Ze = /* @__PURE__ */ l("$ZodString", (e, t) => {
  z.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? Fn(e._zod.bag), e._zod.parse = (n, r) => {
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
  se.init(e, t), Ze.init(e, t);
}), sr = /* @__PURE__ */ l("$ZodGUID", (e, t) => {
  t.pattern ?? (t.pattern = On), y.init(e, t);
}), ar = /* @__PURE__ */ l("$ZodUUID", (e, t) => {
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
    t.pattern ?? (t.pattern = Ne(r));
  } else
    t.pattern ?? (t.pattern = Ne());
  y.init(e, t);
}), cr = /* @__PURE__ */ l("$ZodEmail", (e, t) => {
  t.pattern ?? (t.pattern = In), y.init(e, t);
}), ur = /* @__PURE__ */ l("$ZodURL", (e, t) => {
  y.init(e, t), e._zod.check = (n) => {
    try {
      const r = n.value.trim();
      if (!t.normalize && t.protocol?.source === Dn.source && !/^https?:\/\//i.test(r)) {
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
}), lr = /* @__PURE__ */ l("$ZodEmoji", (e, t) => {
  t.pattern ?? (t.pattern = Pn()), y.init(e, t);
}), dr = /* @__PURE__ */ l("$ZodNanoID", (e, t) => {
  t.pattern ?? (t.pattern = Zn), y.init(e, t);
}), fr = /* @__PURE__ */ l("$ZodCUID", (e, t) => {
  t.pattern ?? (t.pattern = bn), y.init(e, t);
}), pr = /* @__PURE__ */ l("$ZodCUID2", (e, t) => {
  t.pattern ?? (t.pattern = wn), y.init(e, t);
}), hr = /* @__PURE__ */ l("$ZodULID", (e, t) => {
  t.pattern ?? (t.pattern = zn), y.init(e, t);
}), mr = /* @__PURE__ */ l("$ZodXID", (e, t) => {
  t.pattern ?? (t.pattern = kn), y.init(e, t);
}), gr = /* @__PURE__ */ l("$ZodKSUID", (e, t) => {
  t.pattern ?? (t.pattern = $n), y.init(e, t);
}), _r = /* @__PURE__ */ l("$ZodISODateTime", (e, t) => {
  t.pattern ?? (t.pattern = Un(t)), y.init(e, t);
}), vr = /* @__PURE__ */ l("$ZodISODate", (e, t) => {
  t.pattern ?? (t.pattern = Rn), y.init(e, t);
}), yr = /* @__PURE__ */ l("$ZodISOTime", (e, t) => {
  t.pattern ?? (t.pattern = Ln(t)), y.init(e, t);
}), br = /* @__PURE__ */ l("$ZodISODuration", (e, t) => {
  t.pattern ?? (t.pattern = Sn), y.init(e, t);
}), wr = /* @__PURE__ */ l("$ZodIPv4", (e, t) => {
  t.pattern ?? (t.pattern = Nn), y.init(e, t), e._zod.bag.format = "ipv4";
}), zr = /* @__PURE__ */ l("$ZodIPv6", (e, t) => {
  t.pattern ?? (t.pattern = Tn), y.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), kr = /* @__PURE__ */ l("$ZodCIDRv4", (e, t) => {
  t.pattern ?? (t.pattern = Cn), y.init(e, t);
}), $r = /* @__PURE__ */ l("$ZodCIDRv6", (e, t) => {
  t.pattern ?? (t.pattern = An), y.init(e, t), e._zod.check = (n) => {
    const r = n.value.split("/");
    try {
      if (r.length !== 2)
        throw new Error();
      const [o, s] = r;
      if (!s)
        throw new Error();
      const i = Number(s);
      if (`${i}` !== s)
        throw new Error();
      if (i < 0 || i > 128)
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
function ht(e) {
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
const Zr = /* @__PURE__ */ l("$ZodBase64", (e, t) => {
  t.pattern ?? (t.pattern = jn), y.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
    ht(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
});
function Sr(e) {
  if (!ct.test(e))
    return !1;
  const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
  return ht(n);
}
const Or = /* @__PURE__ */ l("$ZodBase64URL", (e, t) => {
  t.pattern ?? (t.pattern = ct), y.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
    Sr(n.value) || n.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), Ir = /* @__PURE__ */ l("$ZodE164", (e, t) => {
  t.pattern ?? (t.pattern = xn), y.init(e, t);
});
function Er(e, t = null) {
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
const Pr = /* @__PURE__ */ l("$ZodJWT", (e, t) => {
  y.init(e, t), e._zod.check = (n) => {
    Er(n.value, t.alg) || n.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: n.value,
      inst: e,
      continue: !t.abort
    });
  };
}), mt = /* @__PURE__ */ l("$ZodNumber", (e, t) => {
  z.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? Jn, e._zod.parse = (n, r) => {
    if (t.coerce)
      try {
        n.value = Number(n.value);
      } catch {
      }
    const o = n.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return n;
    const s = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return n.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: e,
      ...s ? { received: s } : {}
    }), n;
  };
}), Nr = /* @__PURE__ */ l("$ZodNumberFormat", (e, t) => {
  Wn.init(e, t), mt.init(e, t);
}), Tr = /* @__PURE__ */ l("$ZodUnknown", (e, t) => {
  z.init(e, t), e._zod.parse = (n) => n;
}), Cr = /* @__PURE__ */ l("$ZodNever", (e, t) => {
  z.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
    expected: "never",
    code: "invalid_type",
    input: n.value,
    inst: e
  }), n);
});
function Te(e, t, n) {
  e.issues.length && t.issues.push(...ot(n, e.issues)), t.value[n] = e.value;
}
const Ar = /* @__PURE__ */ l("$ZodArray", (e, t) => {
  z.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value;
    if (!Array.isArray(o))
      return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: e
      }), n;
    n.value = Array(o.length);
    const s = [];
    for (let i = 0; i < o.length; i++) {
      const a = o[i], c = t.element._zod.run({
        value: a,
        issues: []
      }, r);
      c instanceof Promise ? s.push(c.then((u) => Te(u, n, i))) : Te(c, n, i);
    }
    return s.length ? Promise.all(s).then(() => n) : n;
  };
});
function ee(e, t, n, r, o, s) {
  const i = n in r;
  if (e.issues.length) {
    if (o && s && !i)
      return;
    t.issues.push(...ot(n, e.issues));
  }
  if (!i && !o) {
    e.issues.length || t.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: void 0,
      path: [n]
    });
    return;
  }
  e.value === void 0 ? i && (t.value[n] = void 0) : t.value[n] = e.value;
}
function gt(e) {
  const t = Object.keys(e.shape);
  for (const r of t)
    if (!e.shape?.[r]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
  const n = Qt(e.shape);
  return {
    ...e,
    keys: t,
    keySet: new Set(t),
    numKeys: t.length,
    optionalKeys: new Set(n)
  };
}
function _t(e, t, n, r, o, s) {
  const i = [], a = o.keySet, c = o.catchall._zod, u = c.def.type, d = c.optin === "optional", m = c.optout === "optional";
  for (const p in t) {
    if (p === "__proto__" || a.has(p))
      continue;
    if (u === "never") {
      i.push(p);
      continue;
    }
    const f = c.run({ value: t[p], issues: [] }, r);
    f instanceof Promise ? e.push(f.then((_) => ee(_, n, p, t, d, m))) : ee(f, n, p, t, d, m);
  }
  return i.length && n.issues.push({
    code: "unrecognized_keys",
    keys: i,
    input: t,
    inst: s
  }), e.length ? Promise.all(e).then(() => n) : n;
}
const jr = /* @__PURE__ */ l("$ZodObject", (e, t) => {
  if (z.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
    const a = t.shape;
    Object.defineProperty(t, "shape", {
      get: () => {
        const c = { ...a };
        return Object.defineProperty(t, "shape", {
          value: c
        }), c;
      }
    });
  }
  const r = re(() => gt(t));
  v(e._zod, "propValues", () => {
    const a = t.shape, c = {};
    for (const u in a) {
      const d = a[u]._zod;
      if (d.values) {
        c[u] ?? (c[u] = /* @__PURE__ */ new Set());
        for (const m of d.values)
          c[u].add(m);
      }
    }
    return c;
  });
  const o = G, s = t.catchall;
  let i;
  e._zod.parse = (a, c) => {
    i ?? (i = r.value);
    const u = a.value;
    if (!o(u))
      return a.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), a;
    a.value = {};
    const d = [], m = i.shape;
    for (const p of i.keys) {
      const f = m[p], _ = f._zod.optin === "optional", M = f._zod.optout === "optional", $ = f._zod.run({ value: u[p], issues: [] }, c);
      $ instanceof Promise ? d.push($.then((ce) => ee(ce, a, p, u, _, M))) : ee($, a, p, u, _, M);
    }
    return s ? _t(d, u, a, c, r.value, e) : d.length ? Promise.all(d).then(() => a) : a;
  };
}), Dr = /* @__PURE__ */ l("$ZodObjectJIT", (e, t) => {
  jr.init(e, t);
  const n = e._zod.parse, r = re(() => gt(t)), o = (p) => {
    const f = new or(["shape", "payload", "ctx"]), _ = r.value, M = (N) => {
      const w = Pe(N);
      return `shape[${w}]._zod.run({ value: input[${w}], issues: [] }, ctx)`;
    };
    f.write("const input = payload.value;");
    const $ = /* @__PURE__ */ Object.create(null);
    let ce = 0;
    for (const N of _.keys)
      $[N] = `key_${ce++}`;
    f.write("const newResult = {};");
    for (const N of _.keys) {
      const w = $[N], Z = Pe(N), Se = p[N], Oe = Se?._zod?.optin === "optional", Jt = Se?._zod?.optout === "optional";
      f.write(`const ${w} = ${M(N)};`), Oe && Jt ? f.write(`
        if (${w}.issues.length) {
          if (${Z} in input) {
            payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${Z}, ...iss.path] : [${Z}]
            })));
          }
        }
        
        if (${w}.value === undefined) {
          if (${Z} in input) {
            newResult[${Z}] = undefined;
          }
        } else {
          newResult[${Z}] = ${w}.value;
        }
        
      `) : Oe ? f.write(`
        if (${w}.issues.length) {
          payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Z}, ...iss.path] : [${Z}]
          })));
        }
        
        if (${w}.value === undefined) {
          if (${Z} in input) {
            newResult[${Z}] = undefined;
          }
        } else {
          newResult[${Z}] = ${w}.value;
        }
        
      `) : f.write(`
        const ${w}_present = ${Z} in input;
        if (${w}.issues.length) {
          payload.issues = payload.issues.concat(${w}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Z}, ...iss.path] : [${Z}]
          })));
        }
        if (!${w}_present && !${w}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${Z}]
          });
        }

        if (${w}_present) {
          if (${w}.value === undefined) {
            newResult[${Z}] = undefined;
          } else {
            newResult[${Z}] = ${w}.value;
          }
        }

      `);
    }
    f.write("payload.value = newResult;"), f.write("return payload;");
    const Mt = f.compile();
    return (N, w) => Mt(p, N, w);
  };
  let s;
  const i = G, a = !ye.jitless, u = a && Kt.value, d = t.catchall;
  let m;
  e._zod.parse = (p, f) => {
    m ?? (m = r.value);
    const _ = p.value;
    return i(_) ? a && u && f?.async === !1 && f.jitless !== !0 ? (s || (s = o(t.shape)), p = s(p, f), d ? _t([], _, p, f, m, e) : p) : n(p, f) : (p.issues.push({
      expected: "object",
      code: "invalid_type",
      input: _,
      inst: e
    }), p);
  };
});
function Ce(e, t, n, r) {
  for (const s of e)
    if (s.issues.length === 0)
      return t.value = s.value, t;
  const o = e.filter((s) => !R(s));
  return o.length === 1 ? (t.value = o[0].value, o[0]) : (t.issues.push({
    code: "invalid_union",
    input: t.value,
    inst: n,
    errors: e.map((s) => s.issues.map((i) => D(i, r, j())))
  }), t);
}
const vt = /* @__PURE__ */ l("$ZodUnion", (e, t) => {
  z.init(e, t), v(e._zod, "optin", () => t.options.some((r) => r._zod.optin === "optional") ? "optional" : void 0), v(e._zod, "optout", () => t.options.some((r) => r._zod.optout === "optional") ? "optional" : void 0), v(e._zod, "values", () => {
    if (t.options.every((r) => r._zod.values))
      return new Set(t.options.flatMap((r) => Array.from(r._zod.values)));
  }), v(e._zod, "pattern", () => {
    if (t.options.every((r) => r._zod.pattern)) {
      const r = t.options.map((o) => o._zod.pattern);
      return new RegExp(`^(${r.map((o) => we(o.source)).join("|")})$`);
    }
  });
  const n = t.options.length === 1 ? t.options[0]._zod.run : null;
  e._zod.parse = (r, o) => {
    if (n)
      return n(r, o);
    let s = !1;
    const i = [];
    for (const a of t.options) {
      const c = a._zod.run({
        value: r.value,
        issues: []
      }, o);
      if (c instanceof Promise)
        i.push(c), s = !0;
      else {
        if (c.issues.length === 0)
          return c;
        i.push(c);
      }
    }
    return s ? Promise.all(i).then((a) => Ce(a, r, e, o)) : Ce(i, r, e, o);
  };
}), xr = /* @__PURE__ */ l("$ZodDiscriminatedUnion", (e, t) => {
  t.inclusive = !1, vt.init(e, t);
  const n = e._zod.parse;
  v(e._zod, "propValues", () => {
    const o = {};
    for (const s of t.options) {
      const i = s._zod.propValues;
      if (!i || Object.keys(i).length === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(s)}"`);
      for (const [a, c] of Object.entries(i)) {
        o[a] || (o[a] = /* @__PURE__ */ new Set());
        for (const u of c)
          o[a].add(u);
      }
    }
    return o;
  });
  const r = re(() => {
    const o = t.options, s = /* @__PURE__ */ new Map();
    for (const i of o) {
      const a = i._zod.propValues?.[t.discriminator];
      if (!a || a.size === 0)
        throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);
      for (const c of a) {
        if (s.has(c))
          throw new Error(`Duplicate discriminator value "${String(c)}"`);
        s.set(c, i);
      }
    }
    return s;
  });
  e._zod.parse = (o, s) => {
    const i = o.value;
    if (!G(i))
      return o.issues.push({
        code: "invalid_type",
        expected: "object",
        input: i,
        inst: e
      }), o;
    const a = r.value.get(i?.[t.discriminator]);
    return a ? a._zod.run(o, s) : t.unionFallback || s.direction === "backward" ? n(o, s) : (o.issues.push({
      code: "invalid_union",
      errors: [],
      note: "No matching discriminator",
      discriminator: t.discriminator,
      options: Array.from(r.value.keys()),
      input: i,
      path: [t.discriminator],
      inst: e
    }), o);
  };
}), Rr = /* @__PURE__ */ l("$ZodIntersection", (e, t) => {
  z.init(e, t), e._zod.parse = (n, r) => {
    const o = n.value, s = t.left._zod.run({ value: o, issues: [] }, r), i = t.right._zod.run({ value: o, issues: [] }, r);
    return s instanceof Promise || i instanceof Promise ? Promise.all([s, i]).then(([c, u]) => Ae(n, c, u)) : Ae(n, s, i);
  };
});
function fe(e, t) {
  if (e === t)
    return { valid: !0, data: e };
  if (e instanceof Date && t instanceof Date && +e == +t)
    return { valid: !0, data: e };
  if (V(e) && V(t)) {
    const n = Object.keys(t), r = Object.keys(e).filter((s) => n.indexOf(s) !== -1), o = { ...e, ...t };
    for (const s of r) {
      const i = fe(e[s], t[s]);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...i.mergeErrorPath]
        };
      o[s] = i.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(e) && Array.isArray(t)) {
    if (e.length !== t.length)
      return { valid: !1, mergeErrorPath: [] };
    const n = [];
    for (let r = 0; r < e.length; r++) {
      const o = e[r], s = t[r], i = fe(o, s);
      if (!i.valid)
        return {
          valid: !1,
          mergeErrorPath: [r, ...i.mergeErrorPath]
        };
      n.push(i.data);
    }
    return { valid: !0, data: n };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function Ae(e, t, n) {
  const r = /* @__PURE__ */ new Map();
  let o;
  for (const a of t.issues)
    if (a.code === "unrecognized_keys") {
      o ?? (o = a);
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).l = !0;
    } else
      e.issues.push(a);
  for (const a of n.issues)
    if (a.code === "unrecognized_keys")
      for (const c of a.keys)
        r.has(c) || r.set(c, {}), r.get(c).r = !0;
    else
      e.issues.push(a);
  const s = [...r].filter(([, a]) => a.l && a.r).map(([a]) => a);
  if (s.length && o && e.issues.push({ ...o, keys: s }), R(e))
    return e;
  const i = fe(t.value, n.value);
  if (!i.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(i.mergeErrorPath)}`);
  return e.value = i.data, e;
}
const Lr = /* @__PURE__ */ l("$ZodEnum", (e, t) => {
  z.init(e, t);
  const n = tt(t.entries), r = new Set(n);
  e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((o) => Yt.has(typeof o)).map((o) => typeof o == "string" ? U(o) : o.toString()).join("|")})$`), e._zod.parse = (o, s) => {
    const i = o.value;
    return r.has(i) || o.issues.push({
      code: "invalid_value",
      values: n,
      input: i,
      inst: e
    }), o;
  };
}), Ur = /* @__PURE__ */ l("$ZodLiteral", (e, t) => {
  if (z.init(e, t), t.values.length === 0)
    throw new Error("Cannot create literal schema with no valid values");
  const n = new Set(t.values);
  e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? U(r) : r ? U(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, o) => {
    const s = r.value;
    return n.has(s) || r.issues.push({
      code: "invalid_value",
      values: t.values,
      input: s,
      inst: e
    }), r;
  };
}), Fr = /* @__PURE__ */ l("$ZodTransform", (e, t) => {
  z.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new et(e.constructor.name);
    const o = t.transform(n.value, n);
    if (r.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((i) => (n.value = i, n.fallback = !0, n));
    if (o instanceof Promise)
      throw new L();
    return n.value = o, n.fallback = !0, n;
  };
});
function je(e, t) {
  return t === void 0 && (e.issues.length || e.fallback) ? { issues: [], value: void 0 } : e;
}
const yt = /* @__PURE__ */ l("$ZodOptional", (e, t) => {
  z.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), v(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${we(n.source)})?$`) : void 0;
  }), e._zod.parse = (n, r) => {
    if (t.innerType._zod.optin === "optional") {
      const o = n.value, s = t.innerType._zod.run(n, r);
      return s instanceof Promise ? s.then((i) => je(i, o)) : je(s, o);
    }
    return n.value === void 0 ? n : t.innerType._zod.run(n, r);
  };
}), Mr = /* @__PURE__ */ l("$ZodExactOptional", (e, t) => {
  yt.init(e, t), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
}), Jr = /* @__PURE__ */ l("$ZodNullable", (e, t) => {
  z.init(e, t), v(e._zod, "optin", () => t.innerType._zod.optin), v(e._zod, "optout", () => t.innerType._zod.optout), v(e._zod, "pattern", () => {
    const n = t.innerType._zod.pattern;
    return n ? new RegExp(`^(${we(n.source)}|null)$`) : void 0;
  }), v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
}), Gr = /* @__PURE__ */ l("$ZodDefault", (e, t) => {
  z.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    if (n.value === void 0)
      return n.value = t.defaultValue, n;
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => De(s, t)) : De(o, t);
  };
});
function De(e, t) {
  return e.value === void 0 && (e.value = t.defaultValue), e;
}
const Vr = /* @__PURE__ */ l("$ZodPrefault", (e, t) => {
  z.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
}), qr = /* @__PURE__ */ l("$ZodNonOptional", (e, t) => {
  z.init(e, t), v(e._zod, "values", () => {
    const n = t.innerType._zod.values;
    return n ? new Set([...n].filter((r) => r !== void 0)) : void 0;
  }), e._zod.parse = (n, r) => {
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => xe(s, e)) : xe(o, e);
  };
});
function xe(e, t) {
  return !e.issues.length && e.value === void 0 && e.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: e.value,
    inst: t
  }), e;
}
const Wr = /* @__PURE__ */ l("$ZodCatch", (e, t) => {
  z.init(e, t), e._zod.optin = "optional", v(e._zod, "optout", () => t.innerType._zod.optout), v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => (n.value = s.value, s.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: s.issues.map((i) => D(i, r, j()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n)) : (n.value = o.value, o.issues.length && (n.value = t.catchValue({
      ...n,
      error: {
        issues: o.issues.map((s) => D(s, r, j()))
      },
      input: n.value
    }), n.issues = [], n.fallback = !0), n);
  };
}), Br = /* @__PURE__ */ l("$ZodPipe", (e, t) => {
  z.init(e, t), v(e._zod, "values", () => t.in._zod.values), v(e._zod, "optin", () => t.in._zod.optin), v(e._zod, "optout", () => t.out._zod.optout), v(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
    if (r.direction === "backward") {
      const s = t.out._zod.run(n, r);
      return s instanceof Promise ? s.then((i) => Q(i, t.in, r)) : Q(s, t.in, r);
    }
    const o = t.in._zod.run(n, r);
    return o instanceof Promise ? o.then((s) => Q(s, t.out, r)) : Q(o, t.out, r);
  };
});
function Q(e, t, n) {
  return e.issues.length ? (e.aborted = !0, e) : t._zod.run({ value: e.value, issues: e.issues, fallback: e.fallback }, n);
}
const Kr = /* @__PURE__ */ l("$ZodReadonly", (e, t) => {
  z.init(e, t), v(e._zod, "propValues", () => t.innerType._zod.propValues), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "optin", () => t.innerType?._zod?.optin), v(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      return t.innerType._zod.run(n, r);
    const o = t.innerType._zod.run(n, r);
    return o instanceof Promise ? o.then(Re) : Re(o);
  };
});
function Re(e) {
  return e.value = Object.freeze(e.value), e;
}
const Yr = /* @__PURE__ */ l("$ZodCustom", (e, t) => {
  I.init(e, t), z.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
    const r = n.value, o = t.fn(r);
    if (o instanceof Promise)
      return o.then((s) => Le(s, n, r, e));
    Le(o, n, r, e);
  };
});
function Le(e, t, n, r) {
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
    r._zod.def.params && (o.params = r._zod.def.params), t.issues.push(q(o));
  }
}
var Ue;
class Qr {
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
function Xr() {
  return new Qr();
}
(Ue = globalThis).__zod_globalRegistry ?? (Ue.__zod_globalRegistry = Xr());
const J = globalThis.__zod_globalRegistry;
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
  return new e({
    type: "string",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function eo(e, t) {
  return new e({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Fe(e, t) {
  return new e({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function to(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function no(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ro(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function oo(e, t) {
  return new e({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bt(e, t) {
  return new e({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function io(e, t) {
  return new e({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function so(e, t) {
  return new e({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ao(e, t) {
  return new e({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function co(e, t) {
  return new e({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function uo(e, t) {
  return new e({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function lo(e, t) {
  return new e({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function fo(e, t) {
  return new e({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function po(e, t) {
  return new e({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ho(e, t) {
  return new e({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function mo(e, t) {
  return new e({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function go(e, t) {
  return new e({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _o(e, t) {
  return new e({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function vo(e, t) {
  return new e({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function yo(e, t) {
  return new e({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function bo(e, t) {
  return new e({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function wo(e, t) {
  return new e({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zo(e, t) {
  return new e({
    type: "string",
    format: "date",
    check: "string_format",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function ko(e, t) {
  return new e({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function $o(e, t) {
  return new e({
    type: "string",
    format: "duration",
    check: "string_format",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Zo(e, t) {
  return new e({
    type: "number",
    checks: [],
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function So(e, t) {
  return new e({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Oo(e) {
  return new e({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function Io(e, t) {
  return new e({
    type: "never",
    ...h(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Me(e, t) {
  return new ft({
    check: "less_than",
    ...h(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function ue(e, t) {
  return new ft({
    check: "less_than",
    ...h(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Je(e, t) {
  return new pt({
    check: "greater_than",
    ...h(t),
    value: e,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function le(e, t) {
  return new pt({
    check: "greater_than",
    ...h(t),
    value: e,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Ge(e, t) {
  return new qn({
    check: "multiple_of",
    ...h(t),
    value: e
  });
}
// @__NO_SIDE_EFFECTS__
function wt(e, t) {
  return new Bn({
    check: "max_length",
    ...h(t),
    maximum: e
  });
}
// @__NO_SIDE_EFFECTS__
function te(e, t) {
  return new Kn({
    check: "min_length",
    ...h(t),
    minimum: e
  });
}
// @__NO_SIDE_EFFECTS__
function zt(e, t) {
  return new Yn({
    check: "length_equals",
    ...h(t),
    length: e
  });
}
// @__NO_SIDE_EFFECTS__
function Eo(e, t) {
  return new Qn({
    check: "string_format",
    format: "regex",
    ...h(t),
    pattern: e
  });
}
// @__NO_SIDE_EFFECTS__
function Po(e) {
  return new Xn({
    check: "string_format",
    format: "lowercase",
    ...h(e)
  });
}
// @__NO_SIDE_EFFECTS__
function No(e) {
  return new Hn({
    check: "string_format",
    format: "uppercase",
    ...h(e)
  });
}
// @__NO_SIDE_EFFECTS__
function To(e, t) {
  return new er({
    check: "string_format",
    format: "includes",
    ...h(t),
    includes: e
  });
}
// @__NO_SIDE_EFFECTS__
function Co(e, t) {
  return new tr({
    check: "string_format",
    format: "starts_with",
    ...h(t),
    prefix: e
  });
}
// @__NO_SIDE_EFFECTS__
function Ao(e, t) {
  return new nr({
    check: "string_format",
    format: "ends_with",
    ...h(t),
    suffix: e
  });
}
// @__NO_SIDE_EFFECTS__
function F(e) {
  return new rr({
    check: "overwrite",
    tx: e
  });
}
// @__NO_SIDE_EFFECTS__
function jo(e) {
  return /* @__PURE__ */ F((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Do() {
  return /* @__PURE__ */ F((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function xo() {
  return /* @__PURE__ */ F((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Ro() {
  return /* @__PURE__ */ F((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Lo() {
  return /* @__PURE__ */ F((e) => Bt(e));
}
// @__NO_SIDE_EFFECTS__
function Uo(e, t, n) {
  return new e({
    type: "array",
    element: t,
    // get element() {
    //   return element;
    // },
    ...h(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Fo(e, t, n) {
  return new e({
    type: "custom",
    check: "custom",
    fn: t,
    ...h(n)
  });
}
// @__NO_SIDE_EFFECTS__
function Mo(e, t) {
  const n = /* @__PURE__ */ Jo((r) => (r.addIssue = (o) => {
    if (typeof o == "string")
      r.issues.push(q(o, r.value, n._zod.def));
    else {
      const s = o;
      s.fatal && (s.continue = !1), s.code ?? (s.code = "custom"), s.input ?? (s.input = r.value), s.inst ?? (s.inst = n), s.continue ?? (s.continue = !n._zod.def.abort), r.issues.push(q(s));
    }
  }, e(r.value, r)), t);
  return n;
}
// @__NO_SIDE_EFFECTS__
function Jo(e, t) {
  const n = new I({
    check: "custom",
    ...h(t)
  });
  return n._zod.check = e, n;
}
function kt(e) {
  let t = e?.target ?? "draft-2020-12";
  return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
    processors: e.processors ?? {},
    metadataRegistry: e?.metadata ?? J,
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
function S(e, t, n = { path: [], schemaPath: [] }) {
  var r;
  const o = e._zod.def, s = t.seen.get(e);
  if (s)
    return s.count++, n.schemaPath.includes(e) && (s.cycle = n.path), s.schema;
  const i = { schema: {}, count: 1, cycle: void 0, path: n.path };
  t.seen.set(e, i);
  const a = e._zod.toJSONSchema?.();
  if (a)
    i.schema = a;
  else {
    const d = {
      ...n,
      schemaPath: [...n.schemaPath, e],
      path: n.path
    };
    if (e._zod.processJSONSchema)
      e._zod.processJSONSchema(t, i.schema, d);
    else {
      const p = i.schema, f = t.processors[o.type];
      if (!f)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${o.type}`);
      f(e, t, p, d);
    }
    const m = e._zod.parent;
    m && (i.ref || (i.ref = m), S(m, t, d), t.seen.get(m).isParent = !0);
  }
  const c = t.metadataRegistry.get(e);
  return c && Object.assign(i.schema, c), t.io === "input" && O(e) && (delete i.schema.examples, delete i.schema.default), t.io === "input" && "_prefault" in i.schema && ((r = i.schema).default ?? (r.default = i.schema._prefault)), delete i.schema._prefault, t.seen.get(e).schema;
}
function $t(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = /* @__PURE__ */ new Map();
  for (const i of e.seen.entries()) {
    const a = e.metadataRegistry.get(i[0])?.id;
    if (a) {
      const c = r.get(a);
      if (c && c !== i[0])
        throw new Error(`Duplicate schema id "${a}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      r.set(a, i[0]);
    }
  }
  const o = (i) => {
    const a = e.target === "draft-2020-12" ? "$defs" : "definitions";
    if (e.external) {
      const m = e.external.registry.get(i[0])?.id, p = e.external.uri ?? ((_) => _);
      if (m)
        return { ref: p(m) };
      const f = i[1].defId ?? i[1].schema.id ?? `schema${e.counter++}`;
      return i[1].defId = f, { defId: f, ref: `${p("__shared")}#/${a}/${f}` };
    }
    if (i[1] === n)
      return { ref: "#" };
    const u = `#/${a}/`, d = i[1].schema.id ?? `__schema${e.counter++}`;
    return { defId: d, ref: u + d };
  }, s = (i) => {
    if (i[1].schema.$ref)
      return;
    const a = i[1], { ref: c, defId: u } = o(i);
    a.def = { ...a.schema }, u && (a.defId = u);
    const d = a.schema;
    for (const m in d)
      delete d[m];
    d.$ref = c;
  };
  if (e.cycles === "throw")
    for (const i of e.seen.entries()) {
      const a = i[1];
      if (a.cycle)
        throw new Error(`Cycle detected: #/${a.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const i of e.seen.entries()) {
    const a = i[1];
    if (t === i[0]) {
      s(i);
      continue;
    }
    if (e.external) {
      const u = e.external.registry.get(i[0])?.id;
      if (t !== i[0] && u) {
        s(i);
        continue;
      }
    }
    if (e.metadataRegistry.get(i[0])?.id) {
      s(i);
      continue;
    }
    if (a.cycle) {
      s(i);
      continue;
    }
    if (a.count > 1 && e.reused === "ref") {
      s(i);
      continue;
    }
  }
}
function Zt(e, t) {
  const n = e.seen.get(t);
  if (!n)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const r = (a) => {
    const c = e.seen.get(a);
    if (c.ref === null)
      return;
    const u = c.def ?? c.schema, d = { ...u }, m = c.ref;
    if (c.ref = null, m) {
      r(m);
      const f = e.seen.get(m), _ = f.schema;
      if (_.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (u.allOf = u.allOf ?? [], u.allOf.push(_)) : Object.assign(u, _), Object.assign(u, d), a._zod.parent === m)
        for (const $ in u)
          $ === "$ref" || $ === "allOf" || $ in d || delete u[$];
      if (_.$ref && f.def)
        for (const $ in u)
          $ === "$ref" || $ === "allOf" || $ in f.def && JSON.stringify(u[$]) === JSON.stringify(f.def[$]) && delete u[$];
    }
    const p = a._zod.parent;
    if (p && p !== m) {
      r(p);
      const f = e.seen.get(p);
      if (f?.schema.$ref && (u.$ref = f.schema.$ref, f.def))
        for (const _ in u)
          _ === "$ref" || _ === "allOf" || _ in f.def && JSON.stringify(u[_]) === JSON.stringify(f.def[_]) && delete u[_];
    }
    e.override({
      zodSchema: a,
      jsonSchema: u,
      path: c.path ?? []
    });
  };
  for (const a of [...e.seen.entries()].reverse())
    r(a[0]);
  const o = {};
  if (e.target === "draft-2020-12" ? o.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? o.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? o.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
    const a = e.external.registry.get(t)?.id;
    if (!a)
      throw new Error("Schema is missing an `id` property");
    o.$id = e.external.uri(a);
  }
  Object.assign(o, n.def ?? n.schema);
  const s = e.metadataRegistry.get(t)?.id;
  s !== void 0 && o.id === s && delete o.id;
  const i = e.external?.defs ?? {};
  for (const a of e.seen.entries()) {
    const c = a[1];
    c.def && c.defId && (c.def.id === c.defId && delete c.def.id, i[c.defId] = c.def);
  }
  e.external || Object.keys(i).length > 0 && (e.target === "draft-2020-12" ? o.$defs = i : o.definitions = i);
  try {
    const a = JSON.parse(JSON.stringify(o));
    return Object.defineProperty(a, "~standard", {
      value: {
        ...t["~standard"],
        jsonSchema: {
          input: ne(t, "input", e.processors),
          output: ne(t, "output", e.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), a;
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
const Go = (e, t = {}) => (n) => {
  const r = kt({ ...n, processors: t });
  return S(e, r), $t(r, e), Zt(r, e);
}, ne = (e, t, n = {}) => (r) => {
  const { libraryOptions: o, target: s } = r ?? {}, i = kt({ ...o ?? {}, target: s, io: t, processors: n });
  return S(e, i), $t(i, e), Zt(i, e);
}, Vo = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, qo = (e, t, n, r) => {
  const o = n;
  o.type = "string";
  const { minimum: s, maximum: i, format: a, patterns: c, contentEncoding: u } = e._zod.bag;
  if (typeof s == "number" && (o.minLength = s), typeof i == "number" && (o.maxLength = i), a && (o.format = Vo[a] ?? a, o.format === "" && delete o.format, a === "time" && delete o.format), u && (o.contentEncoding = u), c && c.size > 0) {
    const d = [...c];
    d.length === 1 ? o.pattern = d[0].source : d.length > 1 && (o.allOf = [
      ...d.map((m) => ({
        ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: m.source
      }))
    ]);
  }
}, Wo = (e, t, n, r) => {
  const o = n, { minimum: s, maximum: i, format: a, multipleOf: c, exclusiveMaximum: u, exclusiveMinimum: d } = e._zod.bag;
  typeof a == "string" && a.includes("int") ? o.type = "integer" : o.type = "number";
  const m = typeof d == "number" && d >= (s ?? Number.NEGATIVE_INFINITY), p = typeof u == "number" && u <= (i ?? Number.POSITIVE_INFINITY), f = t.target === "draft-04" || t.target === "openapi-3.0";
  m ? f ? (o.minimum = d, o.exclusiveMinimum = !0) : o.exclusiveMinimum = d : typeof s == "number" && (o.minimum = s), p ? f ? (o.maximum = u, o.exclusiveMaximum = !0) : o.exclusiveMaximum = u : typeof i == "number" && (o.maximum = i), typeof c == "number" && (o.multipleOf = c);
}, Bo = (e, t, n, r) => {
  n.not = {};
}, Ko = (e, t, n, r) => {
}, Yo = (e, t, n, r) => {
  const o = e._zod.def, s = tt(o.entries);
  s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), n.enum = s;
}, Qo = (e, t, n, r) => {
  const o = e._zod.def, s = [];
  for (const i of o.values)
    if (i === void 0) {
      if (t.unrepresentable === "throw")
        throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof i == "bigint") {
      if (t.unrepresentable === "throw")
        throw new Error("BigInt literals cannot be represented in JSON Schema");
      s.push(Number(i));
    } else
      s.push(i);
  if (s.length !== 0) if (s.length === 1) {
    const i = s[0];
    n.type = i === null ? "null" : typeof i, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [i] : n.const = i;
  } else
    s.every((i) => typeof i == "number") && (n.type = "number"), s.every((i) => typeof i == "string") && (n.type = "string"), s.every((i) => typeof i == "boolean") && (n.type = "boolean"), s.every((i) => i === null) && (n.type = "null"), n.enum = s;
}, Xo = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Custom types cannot be represented in JSON Schema");
}, Ho = (e, t, n, r) => {
  if (t.unrepresentable === "throw")
    throw new Error("Transforms cannot be represented in JSON Schema");
}, ei = (e, t, n, r) => {
  const o = n, s = e._zod.def, { minimum: i, maximum: a } = e._zod.bag;
  typeof i == "number" && (o.minItems = i), typeof a == "number" && (o.maxItems = a), o.type = "array", o.items = S(s.element, t, {
    ...r,
    path: [...r.path, "items"]
  });
}, ti = (e, t, n, r) => {
  const o = n, s = e._zod.def;
  o.type = "object", o.properties = {};
  const i = s.shape;
  for (const u in i)
    o.properties[u] = S(i[u], t, {
      ...r,
      path: [...r.path, "properties", u]
    });
  const a = new Set(Object.keys(i)), c = new Set([...a].filter((u) => {
    const d = s.shape[u]._zod;
    return t.io === "input" ? d.optin === void 0 : d.optout === void 0;
  }));
  c.size > 0 && (o.required = Array.from(c)), s.catchall?._zod.def.type === "never" ? o.additionalProperties = !1 : s.catchall ? s.catchall && (o.additionalProperties = S(s.catchall, t, {
    ...r,
    path: [...r.path, "additionalProperties"]
  })) : t.io === "output" && (o.additionalProperties = !1);
}, ni = (e, t, n, r) => {
  const o = e._zod.def, s = o.inclusive === !1, i = o.options.map((a, c) => S(a, t, {
    ...r,
    path: [...r.path, s ? "oneOf" : "anyOf", c]
  }));
  s ? n.oneOf = i : n.anyOf = i;
}, ri = (e, t, n, r) => {
  const o = e._zod.def, s = S(o.left, t, {
    ...r,
    path: [...r.path, "allOf", 0]
  }), i = S(o.right, t, {
    ...r,
    path: [...r.path, "allOf", 1]
  }), a = (u) => "allOf" in u && Object.keys(u).length === 1, c = [
    ...a(s) ? s.allOf : [s],
    ...a(i) ? i.allOf : [i]
  ];
  n.allOf = c;
}, oi = (e, t, n, r) => {
  const o = e._zod.def, s = S(o.innerType, t, r), i = t.seen.get(e);
  t.target === "openapi-3.0" ? (i.ref = o.innerType, n.nullable = !0) : n.anyOf = [s, { type: "null" }];
}, ii = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, si = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.default = JSON.parse(JSON.stringify(o.defaultValue));
}, ai = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
}, ci = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
  let i;
  try {
    i = o.catchValue(void 0);
  } catch {
    throw new Error("Dynamic catch values are not supported in JSON Schema");
  }
  n.default = i;
}, ui = (e, t, n, r) => {
  const o = e._zod.def, s = o.in._zod.traits.has("$ZodTransform"), i = t.io === "input" ? s ? o.out : o.in : o.out;
  S(i, t, r);
  const a = t.seen.get(e);
  a.ref = i;
}, li = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType, n.readOnly = !0;
}, St = (e, t, n, r) => {
  const o = e._zod.def;
  S(o.innerType, t, r);
  const s = t.seen.get(e);
  s.ref = o.innerType;
}, di = /* @__PURE__ */ l("ZodISODateTime", (e, t) => {
  _r.init(e, t), b.init(e, t);
});
function fi(e) {
  return /* @__PURE__ */ wo(di, e);
}
const pi = /* @__PURE__ */ l("ZodISODate", (e, t) => {
  vr.init(e, t), b.init(e, t);
});
function hi(e) {
  return /* @__PURE__ */ zo(pi, e);
}
const mi = /* @__PURE__ */ l("ZodISOTime", (e, t) => {
  yr.init(e, t), b.init(e, t);
});
function gi(e) {
  return /* @__PURE__ */ ko(mi, e);
}
const _i = /* @__PURE__ */ l("ZodISODuration", (e, t) => {
  br.init(e, t), b.init(e, t);
});
function vi(e) {
  return /* @__PURE__ */ $o(_i, e);
}
const yi = (e, t) => {
  st.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
    format: {
      value: (n) => un(e, n)
      // enumerable: false,
    },
    flatten: {
      value: (n) => cn(e, n)
      // enumerable: false,
    },
    addIssue: {
      value: (n) => {
        e.issues.push(n), e.message = JSON.stringify(e.issues, de, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (n) => {
        e.issues.push(...n), e.message = JSON.stringify(e.issues, de, 2);
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
}, E = /* @__PURE__ */ l("ZodError", yi, {
  Parent: Error
}), bi = /* @__PURE__ */ ke(E), wi = /* @__PURE__ */ $e(E), zi = /* @__PURE__ */ oe(E), ki = /* @__PURE__ */ ie(E), $i = /* @__PURE__ */ fn(E), Zi = /* @__PURE__ */ pn(E), Si = /* @__PURE__ */ hn(E), Oi = /* @__PURE__ */ mn(E), Ii = /* @__PURE__ */ gn(E), Ei = /* @__PURE__ */ _n(E), Pi = /* @__PURE__ */ vn(E), Ni = /* @__PURE__ */ yn(E), Ve = /* @__PURE__ */ new WeakMap();
function B(e, t, n) {
  const r = Object.getPrototypeOf(e);
  let o = Ve.get(r);
  if (o || (o = /* @__PURE__ */ new Set(), Ve.set(r, o)), !o.has(t)) {
    o.add(t);
    for (const s in n) {
      const i = n[s];
      Object.defineProperty(r, s, {
        configurable: !0,
        enumerable: !1,
        get() {
          const a = i.bind(this);
          return Object.defineProperty(this, s, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: a
          }), a;
        },
        set(a) {
          Object.defineProperty(this, s, {
            configurable: !0,
            writable: !0,
            enumerable: !0,
            value: a
          });
        }
      });
    }
  }
}
const k = /* @__PURE__ */ l("ZodType", (e, t) => (z.init(e, t), Object.assign(e["~standard"], {
  jsonSchema: {
    input: ne(e, "input"),
    output: ne(e, "output")
  }
}), e.toJSONSchema = Go(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (n, r) => bi(e, n, r, { callee: e.parse }), e.safeParse = (n, r) => zi(e, n, r), e.parseAsync = async (n, r) => wi(e, n, r, { callee: e.parseAsync }), e.safeParseAsync = async (n, r) => ki(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => $i(e, n, r), e.decode = (n, r) => Zi(e, n, r), e.encodeAsync = async (n, r) => Si(e, n, r), e.decodeAsync = async (n, r) => Oi(e, n, r), e.safeEncode = (n, r) => Ii(e, n, r), e.safeDecode = (n, r) => Ei(e, n, r), e.safeEncodeAsync = async (n, r) => Pi(e, n, r), e.safeDecodeAsync = async (n, r) => Ni(e, n, r), B(e, "ZodType", {
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
    return A(this, n, r);
  },
  brand() {
    return this;
  },
  register(n, r) {
    return n.add(this, r), this;
  },
  refine(n, r) {
    return this.check($s(n, r));
  },
  superRefine(n, r) {
    return this.check(Zs(n, r));
  },
  overwrite(n) {
    return this.check(/* @__PURE__ */ F(n));
  },
  optional() {
    return Ye(this);
  },
  exactOptional() {
    return ds(this);
  },
  nullable() {
    return Qe(this);
  },
  nullish() {
    return Ye(Qe(this));
  },
  nonoptional(n) {
    return _s(this, n);
  },
  array() {
    return he(this);
  },
  or(n) {
    return ns([this, n]);
  },
  and(n) {
    return ss(this, n);
  },
  transform(n) {
    return Xe(this, us(n));
  },
  default(n) {
    return hs(this, n);
  },
  prefault(n) {
    return gs(this, n);
  },
  catch(n) {
    return ys(this, n);
  },
  pipe(n) {
    return Xe(this, n);
  },
  readonly() {
    return zs(this);
  },
  describe(n) {
    const r = this.clone();
    return J.add(r, { description: n }), r;
  },
  meta(...n) {
    if (n.length === 0)
      return J.get(this);
    const r = this.clone();
    return J.add(r, n[0]), r;
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
    return J.get(e)?.description;
  },
  configurable: !0
}), e)), Ot = /* @__PURE__ */ l("_ZodString", (e, t) => {
  Ze.init(e, t), k.init(e, t), e._zod.processJSONSchema = (r, o, s) => qo(e, r, o);
  const n = e._zod.bag;
  e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, B(e, "_ZodString", {
    regex(...r) {
      return this.check(/* @__PURE__ */ Eo(...r));
    },
    includes(...r) {
      return this.check(/* @__PURE__ */ To(...r));
    },
    startsWith(...r) {
      return this.check(/* @__PURE__ */ Co(...r));
    },
    endsWith(...r) {
      return this.check(/* @__PURE__ */ Ao(...r));
    },
    min(...r) {
      return this.check(/* @__PURE__ */ te(...r));
    },
    max(...r) {
      return this.check(/* @__PURE__ */ wt(...r));
    },
    length(...r) {
      return this.check(/* @__PURE__ */ zt(...r));
    },
    nonempty(...r) {
      return this.check(/* @__PURE__ */ te(1, ...r));
    },
    lowercase(r) {
      return this.check(/* @__PURE__ */ Po(r));
    },
    uppercase(r) {
      return this.check(/* @__PURE__ */ No(r));
    },
    trim() {
      return this.check(/* @__PURE__ */ Do());
    },
    normalize(...r) {
      return this.check(/* @__PURE__ */ jo(...r));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ xo());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Ro());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Lo());
    }
  });
}), Ti = /* @__PURE__ */ l("ZodString", (e, t) => {
  Ze.init(e, t), Ot.init(e, t), e.email = (n) => e.check(/* @__PURE__ */ eo(Ci, n)), e.url = (n) => e.check(/* @__PURE__ */ bt(It, n)), e.jwt = (n) => e.check(/* @__PURE__ */ bo(Ki, n)), e.emoji = (n) => e.check(/* @__PURE__ */ io(ji, n)), e.guid = (n) => e.check(/* @__PURE__ */ Fe(qe, n)), e.uuid = (n) => e.check(/* @__PURE__ */ to(X, n)), e.uuidv4 = (n) => e.check(/* @__PURE__ */ no(X, n)), e.uuidv6 = (n) => e.check(/* @__PURE__ */ ro(X, n)), e.uuidv7 = (n) => e.check(/* @__PURE__ */ oo(X, n)), e.nanoid = (n) => e.check(/* @__PURE__ */ so(Di, n)), e.guid = (n) => e.check(/* @__PURE__ */ Fe(qe, n)), e.cuid = (n) => e.check(/* @__PURE__ */ ao(xi, n)), e.cuid2 = (n) => e.check(/* @__PURE__ */ co(Ri, n)), e.ulid = (n) => e.check(/* @__PURE__ */ uo(Li, n)), e.base64 = (n) => e.check(/* @__PURE__ */ _o(qi, n)), e.base64url = (n) => e.check(/* @__PURE__ */ vo(Wi, n)), e.xid = (n) => e.check(/* @__PURE__ */ lo(Ui, n)), e.ksuid = (n) => e.check(/* @__PURE__ */ fo(Fi, n)), e.ipv4 = (n) => e.check(/* @__PURE__ */ po(Mi, n)), e.ipv6 = (n) => e.check(/* @__PURE__ */ ho(Ji, n)), e.cidrv4 = (n) => e.check(/* @__PURE__ */ mo(Gi, n)), e.cidrv6 = (n) => e.check(/* @__PURE__ */ go(Vi, n)), e.e164 = (n) => e.check(/* @__PURE__ */ yo(Bi, n)), e.datetime = (n) => e.check(fi(n)), e.date = (n) => e.check(hi(n)), e.time = (n) => e.check(gi(n)), e.duration = (n) => e.check(vi(n));
});
function H(e) {
  return /* @__PURE__ */ Hr(Ti, e);
}
const b = /* @__PURE__ */ l("ZodStringFormat", (e, t) => {
  y.init(e, t), Ot.init(e, t);
}), Ci = /* @__PURE__ */ l("ZodEmail", (e, t) => {
  cr.init(e, t), b.init(e, t);
}), qe = /* @__PURE__ */ l("ZodGUID", (e, t) => {
  sr.init(e, t), b.init(e, t);
}), X = /* @__PURE__ */ l("ZodUUID", (e, t) => {
  ar.init(e, t), b.init(e, t);
}), It = /* @__PURE__ */ l("ZodURL", (e, t) => {
  ur.init(e, t), b.init(e, t);
});
function Ai(e) {
  return /* @__PURE__ */ bt(It, e);
}
const ji = /* @__PURE__ */ l("ZodEmoji", (e, t) => {
  lr.init(e, t), b.init(e, t);
}), Di = /* @__PURE__ */ l("ZodNanoID", (e, t) => {
  dr.init(e, t), b.init(e, t);
}), xi = /* @__PURE__ */ l("ZodCUID", (e, t) => {
  fr.init(e, t), b.init(e, t);
}), Ri = /* @__PURE__ */ l("ZodCUID2", (e, t) => {
  pr.init(e, t), b.init(e, t);
}), Li = /* @__PURE__ */ l("ZodULID", (e, t) => {
  hr.init(e, t), b.init(e, t);
}), Ui = /* @__PURE__ */ l("ZodXID", (e, t) => {
  mr.init(e, t), b.init(e, t);
}), Fi = /* @__PURE__ */ l("ZodKSUID", (e, t) => {
  gr.init(e, t), b.init(e, t);
}), Mi = /* @__PURE__ */ l("ZodIPv4", (e, t) => {
  wr.init(e, t), b.init(e, t);
}), Ji = /* @__PURE__ */ l("ZodIPv6", (e, t) => {
  zr.init(e, t), b.init(e, t);
}), Gi = /* @__PURE__ */ l("ZodCIDRv4", (e, t) => {
  kr.init(e, t), b.init(e, t);
}), Vi = /* @__PURE__ */ l("ZodCIDRv6", (e, t) => {
  $r.init(e, t), b.init(e, t);
}), qi = /* @__PURE__ */ l("ZodBase64", (e, t) => {
  Zr.init(e, t), b.init(e, t);
}), Wi = /* @__PURE__ */ l("ZodBase64URL", (e, t) => {
  Or.init(e, t), b.init(e, t);
}), Bi = /* @__PURE__ */ l("ZodE164", (e, t) => {
  Ir.init(e, t), b.init(e, t);
}), Ki = /* @__PURE__ */ l("ZodJWT", (e, t) => {
  Pr.init(e, t), b.init(e, t);
}), Et = /* @__PURE__ */ l("ZodNumber", (e, t) => {
  mt.init(e, t), k.init(e, t), e._zod.processJSONSchema = (r, o, s) => Wo(e, r, o), B(e, "ZodNumber", {
    gt(r, o) {
      return this.check(/* @__PURE__ */ Je(r, o));
    },
    gte(r, o) {
      return this.check(/* @__PURE__ */ le(r, o));
    },
    min(r, o) {
      return this.check(/* @__PURE__ */ le(r, o));
    },
    lt(r, o) {
      return this.check(/* @__PURE__ */ Me(r, o));
    },
    lte(r, o) {
      return this.check(/* @__PURE__ */ ue(r, o));
    },
    max(r, o) {
      return this.check(/* @__PURE__ */ ue(r, o));
    },
    int(r) {
      return this.check(We(r));
    },
    safe(r) {
      return this.check(We(r));
    },
    positive(r) {
      return this.check(/* @__PURE__ */ Je(0, r));
    },
    nonnegative(r) {
      return this.check(/* @__PURE__ */ le(0, r));
    },
    negative(r) {
      return this.check(/* @__PURE__ */ Me(0, r));
    },
    nonpositive(r) {
      return this.check(/* @__PURE__ */ ue(0, r));
    },
    multipleOf(r, o) {
      return this.check(/* @__PURE__ */ Ge(r, o));
    },
    step(r, o) {
      return this.check(/* @__PURE__ */ Ge(r, o));
    },
    finite() {
      return this;
    }
  });
  const n = e._zod.bag;
  e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = !0, e.format = n.format ?? null;
});
function pe(e) {
  return /* @__PURE__ */ Zo(Et, e);
}
const Yi = /* @__PURE__ */ l("ZodNumberFormat", (e, t) => {
  Nr.init(e, t), Et.init(e, t);
});
function We(e) {
  return /* @__PURE__ */ So(Yi, e);
}
const Qi = /* @__PURE__ */ l("ZodUnknown", (e, t) => {
  Tr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ko();
});
function Be() {
  return /* @__PURE__ */ Oo(Qi);
}
const Xi = /* @__PURE__ */ l("ZodNever", (e, t) => {
  Cr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => Bo(e, n, r);
});
function Hi(e) {
  return /* @__PURE__ */ Io(Xi, e);
}
const es = /* @__PURE__ */ l("ZodArray", (e, t) => {
  Ar.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ei(e, n, r, o), e.element = t.element, B(e, "ZodArray", {
    min(n, r) {
      return this.check(/* @__PURE__ */ te(n, r));
    },
    nonempty(n) {
      return this.check(/* @__PURE__ */ te(1, n));
    },
    max(n, r) {
      return this.check(/* @__PURE__ */ wt(n, r));
    },
    length(n, r) {
      return this.check(/* @__PURE__ */ zt(n, r));
    },
    unwrap() {
      return this.element;
    }
  });
});
function he(e, t) {
  return /* @__PURE__ */ Uo(es, e, t);
}
const ts = /* @__PURE__ */ l("ZodObject", (e, t) => {
  Dr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ti(e, n, r, o), v(e, "shape", () => t.shape), B(e, "ZodObject", {
    keyof() {
      return ae(Object.keys(this._zod.def.shape));
    },
    catchall(n) {
      return this.clone({ ...this._zod.def, catchall: n });
    },
    passthrough() {
      return this.clone({ ...this._zod.def, catchall: Be() });
    },
    loose() {
      return this.clone({ ...this._zod.def, catchall: Be() });
    },
    strict() {
      return this.clone({ ...this._zod.def, catchall: Hi() });
    },
    strip() {
      return this.clone({ ...this._zod.def, catchall: void 0 });
    },
    extend(n) {
      return tn(this, n);
    },
    safeExtend(n) {
      return nn(this, n);
    },
    merge(n) {
      return rn(this, n);
    },
    pick(n) {
      return Ht(this, n);
    },
    omit(n) {
      return en(this, n);
    },
    partial(...n) {
      return on(Nt, this, n[0]);
    },
    required(...n) {
      return sn(Tt, this, n[0]);
    }
  });
});
function T(e, t) {
  const n = {
    type: "object",
    shape: e ?? {},
    ...h(t)
  };
  return new ts(n);
}
const Pt = /* @__PURE__ */ l("ZodUnion", (e, t) => {
  vt.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ni(e, n, r, o), e.options = t.options;
});
function ns(e, t) {
  return new Pt({
    type: "union",
    options: e,
    ...h(t)
  });
}
const rs = /* @__PURE__ */ l("ZodDiscriminatedUnion", (e, t) => {
  Pt.init(e, t), xr.init(e, t);
});
function os(e, t, n) {
  return new rs({
    type: "union",
    options: t,
    discriminator: e,
    ...h(n)
  });
}
const is = /* @__PURE__ */ l("ZodIntersection", (e, t) => {
  Rr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ri(e, n, r, o);
});
function ss(e, t) {
  return new is({
    type: "intersection",
    left: e,
    right: t
  });
}
const me = /* @__PURE__ */ l("ZodEnum", (e, t) => {
  Lr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (r, o, s) => Yo(e, r, o), e.enum = t.entries, e.options = Object.values(t.entries);
  const n = new Set(Object.keys(t.entries));
  e.extract = (r, o) => {
    const s = {};
    for (const i of r)
      if (n.has(i))
        s[i] = t.entries[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...h(o),
      entries: s
    });
  }, e.exclude = (r, o) => {
    const s = { ...t.entries };
    for (const i of r)
      if (n.has(i))
        delete s[i];
      else
        throw new Error(`Key ${i} not found in enum`);
    return new me({
      ...t,
      checks: [],
      ...h(o),
      entries: s
    });
  };
});
function ae(e, t) {
  const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [r, r])) : e;
  return new me({
    type: "enum",
    entries: n,
    ...h(t)
  });
}
const as = /* @__PURE__ */ l("ZodLiteral", (e, t) => {
  Ur.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => Qo(e, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
    get() {
      if (t.values.length > 1)
        throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
      return t.values[0];
    }
  });
});
function Ke(e, t) {
  return new as({
    type: "literal",
    values: Array.isArray(e) ? e : [e],
    ...h(t)
  });
}
const cs = /* @__PURE__ */ l("ZodTransform", (e, t) => {
  Fr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => Ho(e, n), e._zod.parse = (n, r) => {
    if (r.direction === "backward")
      throw new et(e.constructor.name);
    n.addIssue = (s) => {
      if (typeof s == "string")
        n.issues.push(q(s, n.value, t));
      else {
        const i = s;
        i.fatal && (i.continue = !1), i.code ?? (i.code = "custom"), i.input ?? (i.input = n.value), i.inst ?? (i.inst = e), n.issues.push(q(i));
      }
    };
    const o = t.transform(n.value, n);
    return o instanceof Promise ? o.then((s) => (n.value = s, n.fallback = !0, n)) : (n.value = o, n.fallback = !0, n);
  };
});
function us(e) {
  return new cs({
    type: "transform",
    transform: e
  });
}
const Nt = /* @__PURE__ */ l("ZodOptional", (e, t) => {
  yt.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => St(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Ye(e) {
  return new Nt({
    type: "optional",
    innerType: e
  });
}
const ls = /* @__PURE__ */ l("ZodExactOptional", (e, t) => {
  Mr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => St(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function ds(e) {
  return new ls({
    type: "optional",
    innerType: e
  });
}
const fs = /* @__PURE__ */ l("ZodNullable", (e, t) => {
  Jr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => oi(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function Qe(e) {
  return new fs({
    type: "nullable",
    innerType: e
  });
}
const ps = /* @__PURE__ */ l("ZodDefault", (e, t) => {
  Gr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => si(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function hs(e, t) {
  return new ps({
    type: "default",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : rt(t);
    }
  });
}
const ms = /* @__PURE__ */ l("ZodPrefault", (e, t) => {
  Vr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ai(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function gs(e, t) {
  return new ms({
    type: "prefault",
    innerType: e,
    get defaultValue() {
      return typeof t == "function" ? t() : rt(t);
    }
  });
}
const Tt = /* @__PURE__ */ l("ZodNonOptional", (e, t) => {
  qr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ii(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function _s(e, t) {
  return new Tt({
    type: "nonoptional",
    innerType: e,
    ...h(t)
  });
}
const vs = /* @__PURE__ */ l("ZodCatch", (e, t) => {
  Wr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ci(e, n, r, o), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ys(e, t) {
  return new vs({
    type: "catch",
    innerType: e,
    catchValue: typeof t == "function" ? t : () => t
  });
}
const bs = /* @__PURE__ */ l("ZodPipe", (e, t) => {
  Br.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => ui(e, n, r, o), e.in = t.in, e.out = t.out;
});
function Xe(e, t) {
  return new bs({
    type: "pipe",
    in: e,
    out: t
    // ...util.normalizeParams(params),
  });
}
const ws = /* @__PURE__ */ l("ZodReadonly", (e, t) => {
  Kr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => li(e, n, r, o), e.unwrap = () => e._zod.def.innerType;
});
function zs(e) {
  return new ws({
    type: "readonly",
    innerType: e
  });
}
const ks = /* @__PURE__ */ l("ZodCustom", (e, t) => {
  Yr.init(e, t), k.init(e, t), e._zod.processJSONSchema = (n, r, o) => Xo(e, n);
});
function $s(e, t = {}) {
  return /* @__PURE__ */ Fo(ks, e, t);
}
function Zs(e, t) {
  return /* @__PURE__ */ Mo(e, t);
}
const Ss = ae([
  "magentoGraphql"
]);
ae([
  "tile",
  "gallery"
]);
const Os = T({
  src: Ai(),
  alt: H(),
  width: pe().optional(),
  height: pe().optional(),
  role: ae([
    "base",
    "thumbnail",
    "hover",
    "gallery"
  ]).optional()
}), Is = os("mode", [
  T({
    mode: Ke("gallery")
  }),
  T({
    mode: Ke("tile"),
    maxColumns: pe().int().min(1).max(2)
  })
]), Es = T({
  data: T({
    images: he(Os),
    settings: Is
  }),
  integration: T({
    requires: he(Ss)
  }).optional()
}).strict();
function Ps(e) {
  return Es.parse(e);
}
const Ns = T({
  integrations: T({
    magentoGraphql: T({
      api: H().url()
    })
  }),
  context: T({
    storeCode: H(),
    sku: H()
  })
});
function Ts(e) {
  return Ns.parse(e);
}
const Ct = "productgallery";
function Cs(e, t, n) {
  try {
    const r = Ps(e), o = Ts(t), s = As(r, o);
    return n?.log(
      "bootstrap",
      "Config resolved",
      s
    ), Object.freeze(s);
  } catch (r) {
    throw n?.log(
      "bootstrap",
      "Invalid widget contract",
      r instanceof Error ? r.message : r,
      "error"
    ), r;
  }
}
function As(e, t) {
  return {
    tiles: e.data.images,
    settings: e.data.settings,
    runtime: {
      storeCode: t.context.storeCode,
      sku: t.context.sku
    },
    integrations: {
      magentoGraphql: t.integrations?.magentoGraphql
    }
  };
}
const At = _e(void 0);
function js() {
  if (typeof window > "u")
    return [];
  const t = new URLSearchParams(window.location.search).get("re-debug");
  return t ? t === "1" || t === "all" ? ["all"] : t.split(",").map((n) => n.trim().toLowerCase()) : null;
}
class Ds {
  widgetId;
  instance;
  correlationId;
  constructor(t, n) {
    this.widgetId = t, n !== void 0 && (this.instance = n);
  }
  log(t, n, r, o = "info") {
    const s = {
      widget: this.widgetId,
      instance: this.instance ?? this.widgetId,
      phase: t,
      message: n,
      level: o,
      data: r,
      ts: Date.now()
    };
    if (this.isEnabled()) {
      const i = `[${this.widgetId}] ${t}`;
      o === "error" ? console.error(i, s) : o === "warn" ? console.warn(i, s) : console.log(i, s), this.dispatchActivityEvent(s);
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
    const t = js();
    return t !== null && (t.includes("all") || t.includes(this.widgetId.toLowerCase()));
  }
  setCorrelationId(t) {
    this.correlationId = t;
  }
  getCorrelationId() {
    return this.correlationId;
  }
}
const xs = At.Provider, Rs = ({
  children: e,
  hostElement: t
}) => {
  const n = t ?? document.documentElement, r = new Ds(Ct, n.dataset.instance);
  return /* @__PURE__ */ g(
    xs,
    {
      value: r,
      children: e
    }
  );
};
function Ls() {
  const e = ve(At);
  if (!e)
    throw new Error("useInstanceState must be used within InstanceStateProvider");
  return e;
}
const jt = _e(void 0);
function Us(e, t) {
  try {
    return JSON.parse(e);
  } catch {
    const r = e.indexOf('{"data"'), o = e.indexOf('{"errors"'), s = r !== -1 && o !== -1 ? Math.min(r, o) : r !== -1 ? r : o !== -1 ? o : -1;
    if (s === -1)
      throw new Error("GraphQL fallback failed: cannot find JSON payload start.");
    const i = e.slice(s);
    t?.log("graphql-invalid-json", "GraphQL normalised raw text", {
      candidate: i
    });
    try {
      const a = JSON.parse(i);
      return console.warn("⚠ DEMO PATCH ACTIVE: GraphQL response was polluted. Fallback parser used."), a;
    } catch {
      throw new Error("GraphQL fallback parsing failed.");
    }
  }
}
function Fs(e, t, n) {
  return async function(o, s) {
    const i = await fetch(e, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Store: t
      },
      body: JSON.stringify({ query: o, variables: s })
    });
    if (!i.ok)
      throw n?.log(
        "graphql",
        "GraphQL error",
        { api_endpoint: e, query: o, variables: s },
        "error"
      ), new Error(`Network error: ${i.status}`);
    const a = await i.text();
    let c;
    try {
      c = JSON.parse(a);
    } catch {
      n?.log("graphql-failed-query", "GraphQL Failed query", { api_endpoint: e, query: o, variables: s }, "error"), n?.log("graphql-invalid-json", "GraphQL returned non-JSON response", {
        endpoint: e,
        status: i.status,
        textSnippet: a.slice(0, 500)
      }), c = Us(a, n), n?.log("graphql-invalid-json", "GraphQL failed raw text", {
        endpoint: e,
        status: i.status,
        textSnippet: a
      }), n?.log("graphql-invalid-json", "GraphQL patched response", {
        endpoint: e,
        status: i.status,
        json: c
      });
    }
    return c?.data;
  };
}
const Ms = 3600 * 1e3;
class Js {
  ttl;
  constructor(t = Ms) {
    this.ttl = t;
  }
  get(t, n = this.ttl) {
    if (typeof sessionStorage > "u")
      return null;
    const r = sessionStorage.getItem(t);
    if (r === null)
      return null;
    const o = JSON.parse(r);
    return Date.now() - o.timestamp > n ? null : o.data;
  }
  set(t, n) {
    if (typeof sessionStorage > "u")
      return;
    const r = {
      data: n,
      timestamp: Date.now()
    };
    sessionStorage.setItem(
      t,
      JSON.stringify(r)
    );
  }
  getKey(t, n, r) {
    return `reactedge:gql:${r}:${btoa(t)}:${JSON.stringify(n)}`;
  }
}
function Gs(e, t, n) {
  const r = Fs(e, t, n), o = /* @__PURE__ */ new Map();
  return async function(s, i, a = { cache: !0, ttl: 6e4 }) {
    if (!a.cache)
      return r(s, i);
    const c = new Js(a.ttl), u = c.getKey(s, i, t), d = c.get(u);
    if (d)
      return d;
    if (o.has(u))
      return o.get(u);
    const m = r(s, i).then((p) => (c.set(u, p), o.delete(u), p)).catch((p) => {
      o.delete(u);
      const f = c.get(u, 1 / 0);
      if (f) return f;
      throw p;
    });
    return o.set(u, m), m;
  };
}
const Vs = jt.Provider, qs = ({
  children: e,
  config: t,
  runtime: n,
  activity: r
}) => {
  if (!t?.magentoGraphql?.api)
    throw new Error("GraphQL client cannot be created without API endpoint");
  const o = Gt(
    () => Gs(t.magentoGraphql.api, n.storeCode, r),
    [t.magentoGraphql?.api, n.storeCode, r]
  );
  return /* @__PURE__ */ g(
    Vs,
    {
      value: {
        graphqlClient: o
      },
      children: e
    }
  );
};
function Ws({ size: e = 40 }) {
  return /* @__PURE__ */ g(
    "svg",
    {
      width: e,
      height: e,
      viewBox: "0 0 50 50",
      "aria-hidden": "true",
      children: /* @__PURE__ */ g(
        "circle",
        {
          cx: "25",
          cy: "25",
          r: "20",
          fill: "none",
          stroke: "#d3cdcd",
          strokeWidth: "2",
          strokeDasharray: "20 80",
          strokeLinecap: "round",
          children: /* @__PURE__ */ g(
            "animateTransform",
            {
              attributeName: "transform",
              type: "rotate",
              from: "0 25 25",
              to: "360 25 25",
              dur: "0.8s",
              repeatCount: "indefinite"
            }
          )
        }
      )
    }
  );
}
function Dt({ size: e = 40 }) {
  return /* @__PURE__ */ g("div", { className: "standard-widget-loader-wrapper", role: "status", "aria-label": "Loading", children: /* @__PURE__ */ g(Ws, { size: e }) });
}
const xt = () => /* @__PURE__ */ g(Dt, {}), Bs = ({
  image: e,
  activeIndex: t,
  onClose: n,
  onPrevious: r,
  onNext: o
}) => /* @__PURE__ */ ge(
  "div",
  {
    className: "product-gallery__zoom",
    "data-gallery-zoom": !0,
    children: [
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: "product-gallery__zoom-minify",
          onClick: n,
          "aria-label": "Close zoom view",
          "data-gallery-minify": !0,
          children: "Minify ✕"
        }
      ),
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: "product-gallery__zoom-arrow product-gallery__zoom-arrow--previous",
          onClick: r,
          "aria-label": "Previous image",
          "data-gallery-prev": !0,
          children: "‹"
        }
      ),
      /* @__PURE__ */ g(
        "button",
        {
          type: "button",
          className: "product-gallery__zoom-arrow product-gallery__zoom-arrow--next",
          onClick: o,
          "aria-label": "Next image",
          "data-gallery-next": !0,
          children: "›"
        }
      ),
      /* @__PURE__ */ g(
        "img",
        {
          src: e.src,
          alt: e.alt,
          className: "product-gallery__zoom-image",
          "data-gallery-main": !0
        },
        t
      )
    ]
  }
);
function Rt(e, t) {
  const [n, r] = P(0), [o, s] = P(!1);
  return W(() => {
    t !== null && r(e.length - 1);
  }, [e, t]), {
    activeIndex: n,
    setActiveIndex: r,
    zoomed: o,
    setZoomed: s,
    previous: () => {
      r(
        (u) => u === 0 ? e.length - 1 : u - 1
      );
    },
    next: () => {
      r(
        (u) => u === e.length - 1 ? 0 : u + 1
      );
    },
    select: (u) => {
      r(u);
    },
    currentImage: e[n]
  };
}
const Ks = {
  code: null,
  value: null
}, Lt = _e(void 0);
function K() {
  const e = ve(Lt);
  if (!e)
    throw new Error(
      "useSelectionState must be used within SelectionStateProvider"
    );
  return e;
}
const Ys = ({ tiles: e, maxColumns: t, onSelect: n }) => {
  const { selectionLoading: r } = K();
  return /* @__PURE__ */ ge(
    "div",
    {
      className: "product-gallery__tile-grid",
      style: {
        "--gallery-max-columns": t
      },
      "data-gallery-tiled": !0,
      children: [
        e.map((o, s) => /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            className: "product-gallery__tile",
            onClick: () => n(s),
            children: /* @__PURE__ */ g(
              "img",
              {
                src: o.src,
                alt: o.alt,
                className: "product-gallery__tile-image",
                "data-gallery-tile": !0
              }
            )
          },
          s
        )),
        r && /* @__PURE__ */ g("div", { className: "product-gallery__loader", children: /* @__PURE__ */ g(Dt, {}) })
      ]
    }
  );
}, Qs = ({ tiles: e, maxColumns: t }) => {
  const { selection: n } = K(), r = Rt(e, n.value);
  return e.length === 0 || r.currentImage === void 0 ? null : r.zoomed ? /* @__PURE__ */ g(
    Bs,
    {
      image: r.currentImage,
      activeIndex: r.activeIndex,
      onClose: () => r.setZoomed(!1),
      onPrevious: r.previous,
      onNext: r.next
    }
  ) : /* @__PURE__ */ g(
    Ys,
    {
      tiles: e,
      maxColumns: t,
      onSelect: (o) => {
        r.setActiveIndex(o), r.setZoomed(!0);
      }
    }
  );
}, Xs = ({ tiles: e }) => {
  const { selection: t } = K(), n = Rt(e, t.value);
  return e.length === 0 || n.currentImage === void 0 ? null : /* @__PURE__ */ ge(
    "div",
    {
      className: "product-gallery__slider",
      "data-gallery-classic": !0,
      children: [
        /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            className: "product-gallery__slider-arrow product-gallery__slider-arrow--previous",
            onClick: n.previous,
            "aria-label": "Previous image",
            "data-gallery-prev": !0,
            children: "‹"
          }
        ),
        /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            className: "product-gallery__slider-arrow product-gallery__slider-arrow--next",
            onClick: n.next,
            "aria-label": "Next image",
            "data-gallery-next": !0,
            children: "›"
          }
        ),
        /* @__PURE__ */ g(
          "img",
          {
            src: n.currentImage.src,
            alt: n.currentImage.alt,
            className: "product-gallery__slider-main-image",
            "data-gallery-main": !0
          },
          n.activeIndex
        ),
        /* @__PURE__ */ g("div", { className: "product-gallery__slider-thumbnails", children: e.map((r, o) => /* @__PURE__ */ g(
          "button",
          {
            type: "button",
            className: [
              "product-gallery__slider-thumbnail",
              o === n.activeIndex ? "product-gallery__slider-thumbnail--active" : ""
            ].filter(Boolean).join(" "),
            onClick: () => n.select(o),
            "aria-label": `View image ${o + 1}`,
            "aria-current": o === n.activeIndex ? "true" : void 0,
            children: /* @__PURE__ */ g(
              "img",
              {
                src: r.src,
                alt: r.alt,
                "data-gallery-thumb": !0
              }
            )
          },
          o
        )) })
      ]
    }
  );
};
function Ut() {
  const e = ve(jt);
  if (!e)
    throw new Error("useSystemState must be used within SystemStateProvider");
  return e;
}
function Ft(e) {
  return e instanceof Error ? e : {
    name: "unknonw",
    message: e
  };
}
const Hs = `
  query GetProducts($filter: ProductAttributeFilterInput!) {
      products(filter: $filter) {           
        items {
          id
          sku  
          media_gallery {
            url    
            label            
          } 
        }
      }
    }
`;
async function ea(e, t) {
  const r = (await e(
    Hs,
    {
      filter: {
        sku: {
          eq: t
        }
      }
    }
  )).products.items[0];
  return r ? r.media_gallery.map((o) => ({
    src: o.url,
    ...o.label !== null ? { alt: o.label } : {}
  })) : [];
}
function ta(e, t) {
  const [n, r] = P(), [o, s] = P(!1), [i, a] = P(null), { graphqlClient: c } = Ut(), u = He(async () => {
    if (!(!e || t === void 0)) {
      s(!0), a(null);
      try {
        const d = await ea(c, t);
        r(d);
      } catch (d) {
        a(Ft(d));
      } finally {
        s(!1);
      }
    }
  }, [e, t, c]);
  return W(() => {
    u();
  }, [u]), {
    magentoGalleryData: n,
    loading: o,
    error: i,
    refetch: u
  };
}
const na = `
  query ProductGallery($sku: String!, $code: String!, $value: String!) {
    products(filter: { sku: { eq: $sku } }) {
        items {
            sku
            ... on ConfigurableProduct {
                galleryByAttribute(
                    code: $code
                    value: $value
                ) {
                    url
                    label
                    position
                    disabled
                }
            }
        }
    }
   }
`;
async function ra(e, t, n, r) {
  const s = (await e(
    na,
    {
      sku: t,
      code: n,
      value: r
    }
  )).products.items[0];
  return s?.galleryByAttribute ? s.galleryByAttribute.map((i) => ({
    src: i.url,
    ...i.label !== null ? { alt: i.label } : {}
  })) : [];
}
function oa(e, t, n, r) {
  const [o, s] = P(), [i, a] = P(!1), [c, u] = P(null), { setSelectionLoading: d } = K(), { graphqlClient: m } = Ut(), p = He(async () => {
    if (!(!e || t === void 0 || n === null || r === null)) {
      a(!0), d(!0), u(null), s(void 0);
      try {
        const f = await ra(m, t, n, r);
        s(f);
      } catch (f) {
        u(Ft(f));
      } finally {
        a(!1), d(!1);
      }
    }
  }, [e, t, m, n, r, d]);
  return W(() => {
    p();
  }, [p]), {
    magentoGalleryData: o,
    loading: i,
    error: c,
    refetch: p
  };
}
function ia(e, t) {
  const { selection: n } = K(), r = t?.galleryData, o = n.code !== null && n.value !== null, s = !r, {
    magentoGalleryData: i,
    loading: a,
    error: c,
    refetch: u
  } = ta(
    s,
    e
  ), {
    magentoGalleryData: d,
    loading: m,
    error: p
  } = oa(
    o,
    e,
    n.code,
    n.value
  );
  return {
    galleryData: sa(r ?? i, m ? [] : d),
    galleryLoading: s && a,
    galleryUpdating: o && m,
    galleryError: (s ? c : null) ?? (o ? p : null),
    refetch: u
  };
}
function sa(e = [], t = []) {
  const n = new Map(
    e.map((r) => [r.src, r])
  );
  for (const r of t)
    n.set(r.src, r);
  return [...n.values()];
}
const aa = ({ image: e }) => /* @__PURE__ */ g(
  "img",
  {
    src: e.src,
    alt: e.alt ?? "",
    className: "product-gallery__image",
    "data-gallery-main": !0,
    "data-gallery-thumb": !0
  }
), ca = ({ config: e, bootstrap: t }) => {
  const { galleryData: n, galleryError: r, galleryLoading: o } = ia(e.runtime.sku, t);
  return o ? /* @__PURE__ */ g(xt, {}) : r || !n ? null : n.length === 1 ? /* @__PURE__ */ g(aa, { image: n[0] }) : /* @__PURE__ */ g("div", { children: e.settings.mode === "tile" ? /* @__PURE__ */ g(
    Qs,
    {
      tiles: n,
      maxColumns: e.settings.maxColumns
    }
  ) : /* @__PURE__ */ g(Xs, { tiles: n }) });
}, ua = Lt.Provider, la = ({
  children: e,
  activity: t
}) => {
  const [n, r] = P(Ks), [o, s] = P(!1);
  return W(() => {
    const i = (a) => {
      const u = a.detail;
      t?.log(
        "product-selection",
        "Product Attribute Changed",
        u
      ), r(u);
    };
    return window.addEventListener(
      "reactedge:signal",
      i
    ), () => {
      window.removeEventListener(
        "reactedge:signal",
        i
      );
    };
  }, [t]), /* @__PURE__ */ g(
    ua,
    {
      value: {
        selection: n,
        selectionLoading: o,
        setSelectionLoading: s
      },
      children: e
    }
  );
};
function da({ contract: e, runtime: t }) {
  const n = Ls(), [r, o] = P(!1), s = Cs(e, t, n);
  return W(() => {
    s && requestAnimationFrame(() => {
      o(!0);
    });
  }, [s]), s ? /* @__PURE__ */ g(qs, { config: s.integrations, runtime: s.runtime, activity: n, children: /* @__PURE__ */ g(la, { activity: n, children: r ? /* @__PURE__ */ g(ca, { config: s }) : /* @__PURE__ */ g(xt, {}) }) }) : null;
}
function fa({
  contract: e,
  runtime: t,
  hostElement: n
}) {
  return /* @__PURE__ */ g("div", { className: `reactedge-${Ct}`, children: /* @__PURE__ */ g(
    Rs,
    {
      ...n ? { hostElement: n } : {},
      children: /* @__PURE__ */ g(da, { contract: e, runtime: t })
    }
  ) });
}
function ga({
  container: e,
  contract: t,
  runtime: n,
  hydrate: r = !1
}) {
  const o = /* @__PURE__ */ g(fa, { contract: t, runtime: n });
  r ? Vt(e, o) : qt(e).render(o);
}
export {
  ga as Widget
};
