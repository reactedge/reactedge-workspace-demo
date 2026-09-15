import { createContext as e, useContext as t, useEffect as n, useState as r } from "react";
import { Fragment as i, jsx as a, jsxs as o } from "react/jsx-runtime";
import { createRoot as s, hydrateRoot as c } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/core.js
var l;
function u(e, t, n) {
	function r(n, r) {
		if (n._zod || Object.defineProperty(n, "_zod", {
			value: {
				def: r,
				constr: o,
				traits: /* @__PURE__ */ new Set()
			},
			enumerable: !1
		}), n._zod.traits.has(e)) return;
		n._zod.traits.add(e), t(n, r);
		let i = o.prototype, a = Object.keys(i);
		for (let e = 0; e < a.length; e++) {
			let t = a[e];
			t in n || (n[t] = i[t].bind(n));
		}
	}
	let i = n?.Parent ?? Object;
	class a extends i {}
	Object.defineProperty(a, "name", { value: e });
	function o(e) {
		var t;
		let i = n?.Parent ? new a() : this;
		r(i, e), (t = i._zod).deferred ?? (t.deferred = []);
		for (let e of i._zod.deferred) e();
		return i;
	}
	return Object.defineProperty(o, "init", { value: r }), Object.defineProperty(o, Symbol.hasInstance, { value: (t) => n?.Parent && t instanceof n.Parent ? !0 : t?._zod?.traits?.has(e) }), Object.defineProperty(o, "name", { value: e }), o;
}
var d = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, f = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(l = globalThis).__zod_globalConfig ?? (l.__zod_globalConfig = {});
var p = globalThis.__zod_globalConfig;
function m(e) {
	return e && Object.assign(p, e), p;
}
//#endregion
//#region ../../node_modules/zod/v4/core/util.js
function ee(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function te(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function ne(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function re(e) {
	return e == null;
}
function h(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
var ie = /* @__PURE__*/ Symbol("evaluating");
function g(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== ie) return r === void 0 && (r = ie, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function _(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function v(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function ae(e) {
	return JSON.stringify(e);
}
function oe(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var se = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function y(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var ce = /* @__PURE__*/ ne(() => {
	if (p.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function b(e) {
	if (y(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return y(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function le(e) {
	return b(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var ue = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function x(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function S(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function C(e) {
	let t = e;
	if (!t) return {};
	if (typeof t == "string") return { error: () => t };
	if (t?.message !== void 0) {
		if (t?.error !== void 0) throw Error("Cannot specify both `message` and `error` params");
		t.error = t.message;
	}
	return delete t.message, typeof t.error == "string" ? {
		...t,
		error: () => t.error
	} : t;
}
function de(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
-Number.MAX_VALUE, Number.MAX_VALUE;
function fe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return S(e, v(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return _(this, "shape", e), e;
		},
		checks: []
	}));
}
function pe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return S(e, v(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return _(this, "shape", r), r;
		},
		checks: []
	}));
}
function me(e, t) {
	if (!b(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return S(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function he(e, t) {
	if (!b(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return S(e, v(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return _(this, "shape", n), n;
	} }));
}
function ge(e, t) {
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return S(e, v(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return _(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function _e(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return S(t, v(t._zod.def, {
		get shape() {
			let r = t._zod.def.shape, i = { ...r };
			if (n) for (let t in n) {
				if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
				n[t] && (i[t] = e ? new e({
					type: "optional",
					innerType: r[t]
				}) : r[t]);
			}
			else for (let t in r) i[t] = e ? new e({
				type: "optional",
				innerType: r[t]
			}) : r[t];
			return _(this, "shape", i), i;
		},
		checks: []
	}));
}
function ve(e, t, n) {
	return S(t, v(t._zod.def, { get shape() {
		let r = t._zod.def.shape, i = { ...r };
		if (n) for (let t in n) {
			if (!(t in i)) throw Error(`Unrecognized key: "${t}"`);
			n[t] && (i[t] = new e({
				type: "nonoptional",
				innerType: r[t]
			}));
		}
		else for (let t in r) i[t] = new e({
			type: "nonoptional",
			innerType: r[t]
		});
		return _(this, "shape", i), i;
	} }));
}
function w(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function ye(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function T(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function E(e) {
	return typeof e == "string" ? e : e?.message;
}
function D(e, t, n) {
	let r = e.message ? e.message : E(e.inst?._zod.def?.error?.(e)) ?? E(t?.error?.(e)) ?? E(n.customError?.(e)) ?? E(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: a, input: o, ...s } = e;
	return s.path ??= [], s.message = r, t?.reportInput && (s.input = o), s;
}
function be(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function O(...e) {
	let [t, n, r] = e;
	return typeof t == "string" ? {
		message: t,
		code: "custom",
		input: n,
		inst: r
	} : { ...t };
}
//#endregion
//#region ../../node_modules/zod/v4/core/errors.js
var xe = (e, t) => {
	e.name = "$ZodError", Object.defineProperty(e, "_zod", {
		value: e._zod,
		enumerable: !1
	}), Object.defineProperty(e, "issues", {
		value: t,
		enumerable: !1
	}), e.message = JSON.stringify(t, te, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Se = u("$ZodError", xe), Ce = u("$ZodError", xe, { Parent: Error });
function we(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Te(e, t = (e) => e.message) {
	let n = { _errors: [] }, r = (e, i = []) => {
		for (let a of e.issues) if (a.code === "invalid_union" && a.errors.length) a.errors.map((e) => r({ issues: e }, [...i, ...a.path]));
		else if (a.code === "invalid_key") r({ issues: a.issues }, [...i, ...a.path]);
		else if (a.code === "invalid_element") r({ issues: a.issues }, [...i, ...a.path]);
		else {
			let e = [...i, ...a.path];
			if (e.length === 0) n._errors.push(t(a));
			else {
				let r = n, i = 0;
				for (; i < e.length;) {
					let n = e[i];
					i === e.length - 1 ? (r[n] = r[n] || { _errors: [] }, r[n]._errors.push(t(a))) : r[n] = r[n] || { _errors: [] }, r = r[n], i++;
				}
			}
		}
	};
	return r(e), n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/parse.js
var Ee = (e) => (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !1
	} : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new d();
	if (o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => D(e, a, m())));
		throw se(t, i?.callee), t;
	}
	return o.value;
}, k = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => D(e, a, m())));
		throw se(t, i?.callee), t;
	}
	return o.value;
}, A = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new d();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Se)(a.issues.map((e) => D(e, i, m())))
	} : {
		success: !0,
		data: a.value
	};
}, De = /* @__PURE__*/ A(Ce), j = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => D(e, i, m())))
	} : {
		success: !0,
		data: a.value
	};
}, Oe = /* @__PURE__*/ j(Ce), ke = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ee(e)(t, n, i);
}, Ae = (e) => (t, n, r) => Ee(e)(t, n, r), je = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return k(e)(t, n, i);
}, Me = (e) => async (t, n, r) => k(e)(t, n, r), Ne = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return A(e)(t, n, i);
}, Pe = (e) => (t, n, r) => A(e)(t, n, r), Fe = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return j(e)(t, n, i);
}, Ie = (e) => async (t, n, r) => j(e)(t, n, r), Le = /^[cC][0-9a-z]{6,}$/, Re = /^[0-9a-z]+$/, ze = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Be = /^[0-9a-vA-V]{20}$/, Ve = /^[A-Za-z0-9]{27}$/, He = /^[a-zA-Z0-9_-]{21}$/, Ue = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, We = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ge = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ke = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, qe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Je() {
	return new RegExp(qe, "u");
}
var Ye = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Xe = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Ze = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, Qe = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, $e = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, et = /^[A-Za-z0-9_-]*$/, tt = /^https?$/, nt = /^\+[1-9]\d{6,14}$/, rt = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", it = /*@__PURE__*/ RegExp(`^${rt}$`);
function at(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function ot(e) {
	return RegExp(`^${at(e)}$`);
}
function st(e) {
	let t = at({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${rt}T(?:${r})$`);
}
var ct = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, lt = /^-?\d+(?:\.\d+)?$/, ut = /^[^A-Z]*$/, dt = /^[^a-z]*$/, M = /*@__PURE__*/ u("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ft = /*@__PURE__*/ u("$ZodCheckMaxLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = be(r);
		n.issues.push({
			origin: i,
			code: "too_big",
			maximum: t.maximum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), pt = /*@__PURE__*/ u("$ZodCheckMinLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = be(r);
		n.issues.push({
			origin: i,
			code: "too_small",
			minimum: t.minimum,
			inclusive: !0,
			input: r,
			inst: e,
			continue: !t.abort
		});
	};
}), mt = /*@__PURE__*/ u("$ZodCheckLengthEquals", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = be(r), o = i > t.length;
		n.issues.push({
			origin: a,
			...o ? {
				code: "too_big",
				maximum: t.length
			} : {
				code: "too_small",
				minimum: t.length
			},
			inclusive: !0,
			exact: !0,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), N = /*@__PURE__*/ u("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	M.init(e, t), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.format = t.format, t.pattern && (n.patterns ??= /* @__PURE__ */ new Set(), n.patterns.add(t.pattern));
	}), t.pattern ? (n = e._zod).check ?? (n.check = (n) => {
		t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: t.format,
			input: n.value,
			...t.pattern ? { pattern: t.pattern.toString() } : {},
			inst: e,
			continue: !t.abort
		});
	}) : (r = e._zod).check ?? (r.check = () => {});
}), ht = /*@__PURE__*/ u("$ZodCheckRegex", (e, t) => {
	N.init(e, t), e._zod.check = (n) => {
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
}), gt = /*@__PURE__*/ u("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= ut, N.init(e, t);
}), _t = /*@__PURE__*/ u("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= dt, N.init(e, t);
}), vt = /*@__PURE__*/ u("$ZodCheckIncludes", (e, t) => {
	M.init(e, t);
	let n = x(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
	t.pattern = r, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(r);
	}), e._zod.check = (n) => {
		n.value.includes(t.includes, t.position) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "includes",
			includes: t.includes,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), yt = /*@__PURE__*/ u("$ZodCheckStartsWith", (e, t) => {
	M.init(e, t);
	let n = RegExp(`^${x(t.prefix)}.*`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.startsWith(t.prefix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "starts_with",
			prefix: t.prefix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bt = /*@__PURE__*/ u("$ZodCheckEndsWith", (e, t) => {
	M.init(e, t);
	let n = RegExp(`.*${x(t.suffix)}$`);
	t.pattern ??= n, e._zod.onattach.push((e) => {
		let t = e._zod.bag;
		t.patterns ??= /* @__PURE__ */ new Set(), t.patterns.add(n);
	}), e._zod.check = (n) => {
		n.value.endsWith(t.suffix) || n.issues.push({
			origin: "string",
			code: "invalid_format",
			format: "ends_with",
			suffix: t.suffix,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), xt = /*@__PURE__*/ u("$ZodCheckOverwrite", (e, t) => {
	M.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), St = class {
	constructor(e = []) {
		this.content = [], this.indent = 0, this && (this.args = e);
	}
	indented(e) {
		this.indent += 1, e(this), --this.indent;
	}
	write(e) {
		if (typeof e == "function") {
			e(this, { execution: "sync" }), e(this, { execution: "async" });
			return;
		}
		let t = e.split("\n").filter((e) => e), n = Math.min(...t.map((e) => e.length - e.trimStart().length)), r = t.map((e) => e.slice(n)).map((e) => " ".repeat(this.indent * 2) + e);
		for (let e of r) this.content.push(e);
	}
	compile() {
		let e = Function, t = this?.args, n = [...(this?.content ?? [""]).map((e) => `  ${e}`)];
		return new e(...t, n.join("\n"));
	}
}, Ct = {
	major: 4,
	minor: 4,
	patch: 3
}, P = /*@__PURE__*/ u("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Ct;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = w(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (ye(e) || !a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new d();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= w(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= w(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (w(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new d();
				return o.then((t) => e._zod.parse(t, a));
			}
			return e._zod.parse(o, a);
		};
		e._zod.run = (i, a) => {
			if (a.skipChecks) return e._zod.parse(i, a);
			if (a.direction === "backward") {
				let t = e._zod.parse({
					value: i.value,
					issues: []
				}, {
					...a,
					skipChecks: !0
				});
				return t instanceof Promise ? t.then((e) => n(e, i, a)) : n(t, i, a);
			}
			let o = e._zod.parse(i, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new d();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	g(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = De(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Oe(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), wt = /*@__PURE__*/ u("$ZodString", (e, t) => {
	P.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? ct(e._zod.bag), e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = String(n.value);
		} catch {}
		return typeof n.value == "string" || n.issues.push({
			expected: "string",
			code: "invalid_type",
			input: n.value,
			inst: e
		}), n;
	};
}), F = /*@__PURE__*/ u("$ZodStringFormat", (e, t) => {
	N.init(e, t), wt.init(e, t);
}), Tt = /*@__PURE__*/ u("$ZodGUID", (e, t) => {
	t.pattern ??= We, F.init(e, t);
}), Et = /*@__PURE__*/ u("$ZodUUID", (e, t) => {
	if (t.version) {
		let e = {
			v1: 1,
			v2: 2,
			v3: 3,
			v4: 4,
			v5: 5,
			v6: 6,
			v7: 7,
			v8: 8
		}[t.version];
		if (e === void 0) throw Error(`Invalid UUID version: "${t.version}"`);
		t.pattern ??= Ge(e);
	} else t.pattern ??= Ge();
	F.init(e, t);
}), Dt = /*@__PURE__*/ u("$ZodEmail", (e, t) => {
	t.pattern ??= Ke, F.init(e, t);
}), Ot = /*@__PURE__*/ u("$ZodURL", (e, t) => {
	F.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === tt.source && !/^https?:\/\//i.test(r)) {
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
			let i = new URL(r);
			t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(i.hostname) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid hostname",
				pattern: t.hostname.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(i.protocol.endsWith(":") ? i.protocol.slice(0, -1) : i.protocol) || n.issues.push({
				code: "invalid_format",
				format: "url",
				note: "Invalid protocol",
				pattern: t.protocol.source,
				input: n.value,
				inst: e,
				continue: !t.abort
			})), n.value = t.normalize ? i.href : r;
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
}), kt = /*@__PURE__*/ u("$ZodEmoji", (e, t) => {
	t.pattern ??= Je(), F.init(e, t);
}), At = /*@__PURE__*/ u("$ZodNanoID", (e, t) => {
	t.pattern ??= He, F.init(e, t);
}), jt = /*@__PURE__*/ u("$ZodCUID", (e, t) => {
	t.pattern ??= Le, F.init(e, t);
}), Mt = /*@__PURE__*/ u("$ZodCUID2", (e, t) => {
	t.pattern ??= Re, F.init(e, t);
}), Nt = /*@__PURE__*/ u("$ZodULID", (e, t) => {
	t.pattern ??= ze, F.init(e, t);
}), Pt = /*@__PURE__*/ u("$ZodXID", (e, t) => {
	t.pattern ??= Be, F.init(e, t);
}), Ft = /*@__PURE__*/ u("$ZodKSUID", (e, t) => {
	t.pattern ??= Ve, F.init(e, t);
}), It = /*@__PURE__*/ u("$ZodISODateTime", (e, t) => {
	t.pattern ??= st(t), F.init(e, t);
}), Lt = /*@__PURE__*/ u("$ZodISODate", (e, t) => {
	t.pattern ??= it, F.init(e, t);
}), Rt = /*@__PURE__*/ u("$ZodISOTime", (e, t) => {
	t.pattern ??= ot(t), F.init(e, t);
}), zt = /*@__PURE__*/ u("$ZodISODuration", (e, t) => {
	t.pattern ??= Ue, F.init(e, t);
}), Bt = /*@__PURE__*/ u("$ZodIPv4", (e, t) => {
	t.pattern ??= Ye, F.init(e, t), e._zod.bag.format = "ipv4";
}), Vt = /*@__PURE__*/ u("$ZodIPv6", (e, t) => {
	t.pattern ??= Xe, F.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Ht = /*@__PURE__*/ u("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Ze, F.init(e, t);
}), Ut = /*@__PURE__*/ u("$ZodCIDRv6", (e, t) => {
	t.pattern ??= Qe, F.init(e, t), e._zod.check = (n) => {
		let r = n.value.split("/");
		try {
			if (r.length !== 2) throw Error();
			let [e, t] = r;
			if (!t) throw Error();
			let n = Number(t);
			if (`${n}` !== t || n < 0 || n > 128) throw Error();
			new URL(`http://[${e}]`);
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
function Wt(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Gt = /*@__PURE__*/ u("$ZodBase64", (e, t) => {
	t.pattern ??= $e, F.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Wt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Kt(e) {
	if (!et.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Wt(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var qt = /*@__PURE__*/ u("$ZodBase64URL", (e, t) => {
	t.pattern ??= et, F.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Kt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Jt = /*@__PURE__*/ u("$ZodE164", (e, t) => {
	t.pattern ??= nt, F.init(e, t);
});
function Yt(e, t = null) {
	try {
		let n = e.split(".");
		if (n.length !== 3) return !1;
		let [r] = n;
		if (!r) return !1;
		let i = JSON.parse(atob(r));
		return !("typ" in i && i?.typ !== "JWT" || !i.alg || t && (!("alg" in i) || i.alg !== t));
	} catch {
		return !1;
	}
}
var Xt = /*@__PURE__*/ u("$ZodJWT", (e, t) => {
	F.init(e, t), e._zod.check = (n) => {
		Yt(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Zt = /*@__PURE__*/ u("$ZodUnknown", (e, t) => {
	P.init(e, t), e._zod.parse = (e) => e;
}), Qt = /*@__PURE__*/ u("$ZodNever", (e, t) => {
	P.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function $t(e, t, n) {
	e.issues.length && t.issues.push(...T(n, e.issues)), t.value[n] = e.value;
}
var en = /*@__PURE__*/ u("$ZodArray", (e, t) => {
	P.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!Array.isArray(i)) return n.issues.push({
			expected: "array",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		n.value = Array(i.length);
		let a = [];
		for (let e = 0; e < i.length; e++) {
			let o = i[e], s = t.element._zod.run({
				value: o,
				issues: []
			}, r);
			s instanceof Promise ? a.push(s.then((t) => $t(t, n, e))) : $t(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function I(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...T(n, e.issues));
	}
	if (!o && !i) {
		e.issues.length || t.issues.push({
			code: "invalid_type",
			expected: "nonoptional",
			input: void 0,
			path: [n]
		});
		return;
	}
	e.value === void 0 ? o && (t.value[n] = void 0) : t.value[n] = e.value;
}
function tn(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = de(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function nn(e, t, n, r, i, a) {
	let o = [], s = i.keySet, c = i.catchall._zod, l = c.def.type, u = c.optin === "optional", d = c.optout === "optional";
	for (let i in t) {
		if (i === "__proto__" || s.has(i)) continue;
		if (l === "never") {
			o.push(i);
			continue;
		}
		let a = c.run({
			value: t[i],
			issues: []
		}, r);
		a instanceof Promise ? e.push(a.then((e) => I(e, n, i, t, u, d))) : I(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var rn = /*@__PURE__*/ u("$ZodObject", (e, t) => {
	if (P.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = ne(() => tn(t));
	g(e._zod, "propValues", () => {
		let e = t.shape, n = {};
		for (let t in e) {
			let r = e[t]._zod;
			if (r.values) {
				n[t] ?? (n[t] = /* @__PURE__ */ new Set());
				for (let e of r.values) n[t].add(e);
			}
		}
		return n;
	});
	let r = y, i = t.catchall, a;
	e._zod.parse = (t, o) => {
		a ??= n.value;
		let s = t.value;
		if (!r(s)) return t.issues.push({
			expected: "object",
			code: "invalid_type",
			input: s,
			inst: e
		}), t;
		t.value = {};
		let c = [], l = a.shape;
		for (let e of a.keys) {
			let n = l[e], r = n._zod.optin === "optional", i = n._zod.optout === "optional", a = n._zod.run({
				value: s[e],
				issues: []
			}, o);
			a instanceof Promise ? c.push(a.then((n) => I(n, t, e, s, r, i))) : I(a, t, e, s, r, i);
		}
		return i ? nn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), an = /*@__PURE__*/ u("$ZodObjectJIT", (e, t) => {
	rn.init(e, t);
	let n = e._zod.parse, r = ne(() => tn(t)), i = (e) => {
		let t = new St([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = ae(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = ae(r), s = e[r], c = s?._zod?.optin === "optional", l = s?._zod?.optout === "optional";
			t.write(`const ${n} = ${i(r)};`), c && l ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : c ? t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `) : t.write(`
        const ${n}_present = ${o} in input;
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        if (!${n}_present && !${n}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${o}]
          });
        }

        if (${n}_present) {
          if (${n}.value === undefined) {
            newResult[${o}] = undefined;
          } else {
            newResult[${o}] = ${n}.value;
          }
        }

      `);
		}
		t.write("payload.value = newResult;"), t.write("return payload;");
		let s = t.compile();
		return (t, n) => s(e, t, n);
	}, a, o = y, s = !p.jitless, c = s && ce.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? nn([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function on(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !w(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => D(e, r, m())))
	}), t);
}
var sn = /*@__PURE__*/ u("$ZodUnion", (e, t) => {
	P.init(e, t), g(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), g(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), g(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), g(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => h(e.source)).join("|")})$`);
		}
	});
	let n = t.options.length === 1 ? t.options[0]._zod.run : null;
	e._zod.parse = (r, i) => {
		if (n) return n(r, i);
		let a = !1, o = [];
		for (let e of t.options) {
			let t = e._zod.run({
				value: r.value,
				issues: []
			}, i);
			if (t instanceof Promise) o.push(t), a = !0;
			else {
				if (t.issues.length === 0) return t;
				o.push(t);
			}
		}
		return a ? Promise.all(o).then((t) => on(t, r, e, i)) : on(o, r, e, i);
	};
}), cn = /*@__PURE__*/ u("$ZodIntersection", (e, t) => {
	P.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => ln(e, t, n)) : ln(e, i, a);
	};
});
function L(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (b(e) && b(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = L(e[n], t[n]);
			if (!r.valid) return {
				valid: !1,
				mergeErrorPath: [n, ...r.mergeErrorPath]
			};
			i[n] = r.data;
		}
		return {
			valid: !0,
			data: i
		};
	}
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return {
			valid: !1,
			mergeErrorPath: []
		};
		let n = [];
		for (let r = 0; r < e.length; r++) {
			let i = e[r], a = t[r], o = L(i, a);
			if (!o.valid) return {
				valid: !1,
				mergeErrorPath: [r, ...o.mergeErrorPath]
			};
			n.push(o.data);
		}
		return {
			valid: !0,
			data: n
		};
	}
	return {
		valid: !1,
		mergeErrorPath: []
	};
}
function ln(e, t, n) {
	let r = /* @__PURE__ */ new Map(), i;
	for (let n of t.issues) if (n.code === "unrecognized_keys") {
		i ??= n;
		for (let e of n.keys) r.has(e) || r.set(e, {}), r.get(e).l = !0;
	} else e.issues.push(n);
	for (let t of n.issues) if (t.code === "unrecognized_keys") for (let e of t.keys) r.has(e) || r.set(e, {}), r.get(e).r = !0;
	else e.issues.push(t);
	let a = [...r].filter(([, e]) => e.l && e.r).map(([e]) => e);
	if (a.length && i && e.issues.push({
		...i,
		keys: a
	}), w(e)) return e;
	let o = L(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var un = /*@__PURE__*/ u("$ZodRecord", (e, t) => {
	P.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!b(i)) return n.issues.push({
			expected: "record",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
		let a = [], o = t.keyType._zod.values;
		if (o) {
			n.value = {};
			let s = /* @__PURE__ */ new Set();
			for (let c of o) if (typeof c == "string" || typeof c == "number" || typeof c == "symbol") {
				s.add(typeof c == "number" ? c.toString() : c);
				let o = t.keyType._zod.run({
					value: c,
					issues: []
				}, r);
				if (o instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (o.issues.length) {
					n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: o.issues.map((e) => D(e, r, m())),
						input: c,
						path: [c],
						inst: e
					});
					continue;
				}
				let l = o.value, u = t.valueType._zod.run({
					value: i[c],
					issues: []
				}, r);
				u instanceof Promise ? a.push(u.then((e) => {
					e.issues.length && n.issues.push(...T(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...T(c, u.issues)), n.value[l] = u.value);
			}
			let c;
			for (let e in i) s.has(e) || (c ??= [], c.push(e));
			c && c.length > 0 && n.issues.push({
				code: "unrecognized_keys",
				input: i,
				inst: e,
				keys: c
			});
		} else {
			n.value = {};
			for (let o of Reflect.ownKeys(i)) {
				if (o === "__proto__" || !Object.prototype.propertyIsEnumerable.call(i, o)) continue;
				let s = t.keyType._zod.run({
					value: o,
					issues: []
				}, r);
				if (s instanceof Promise) throw Error("Async schemas not supported in object keys currently");
				if (typeof o == "string" && lt.test(o) && s.issues.length) {
					let e = t.keyType._zod.run({
						value: Number(o),
						issues: []
					}, r);
					if (e instanceof Promise) throw Error("Async schemas not supported in object keys currently");
					e.issues.length === 0 && (s = e);
				}
				if (s.issues.length) {
					t.mode === "loose" ? n.value[o] = i[o] : n.issues.push({
						code: "invalid_key",
						origin: "record",
						issues: s.issues.map((e) => D(e, r, m())),
						input: o,
						path: [o],
						inst: e
					});
					continue;
				}
				let c = t.valueType._zod.run({
					value: i[o],
					issues: []
				}, r);
				c instanceof Promise ? a.push(c.then((e) => {
					e.issues.length && n.issues.push(...T(o, e.issues)), n.value[s.value] = e.value;
				})) : (c.issues.length && n.issues.push(...T(o, c.issues)), n.value[s.value] = c.value);
			}
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
}), dn = /*@__PURE__*/ u("$ZodEnum", (e, t) => {
	P.init(e, t);
	let n = ee(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => ue.has(typeof e)).map((e) => typeof e == "string" ? x(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), fn = /*@__PURE__*/ u("$ZodTransform", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new f(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new d();
		return n.value = i, n.fallback = !0, n;
	};
});
function pn(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var mn = /*@__PURE__*/ u("$ZodOptional", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", g(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${h(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => pn(e, r)) : pn(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), hn = /*@__PURE__*/ u("$ZodExactOptional", (e, t) => {
	mn.init(e, t), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), gn = /*@__PURE__*/ u("$ZodNullable", (e, t) => {
	P.init(e, t), g(e._zod, "optin", () => t.innerType._zod.optin), g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${h(e.source)}|null)$`) : void 0;
	}), g(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), _n = /*@__PURE__*/ u("$ZodDefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => vn(e, t)) : vn(r, t);
	};
});
function vn(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var yn = /*@__PURE__*/ u("$ZodPrefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), bn = /*@__PURE__*/ u("$ZodNonOptional", (e, t) => {
	P.init(e, t), g(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => xn(t, e)) : xn(i, e);
	};
});
function xn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Sn = /*@__PURE__*/ u("$ZodCatch", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", g(e._zod, "optout", () => t.innerType._zod.optout), g(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => D(e, n, m())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => D(e, n, m())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), Cn = /*@__PURE__*/ u("$ZodPipe", (e, t) => {
	P.init(e, t), g(e._zod, "values", () => t.in._zod.values), g(e._zod, "optin", () => t.in._zod.optin), g(e._zod, "optout", () => t.out._zod.optout), g(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => R(e, t.in, n)) : R(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => R(e, t.out, n)) : R(r, t.out, n);
	};
});
function R(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
var wn = /*@__PURE__*/ u("$ZodReadonly", (e, t) => {
	P.init(e, t), g(e._zod, "propValues", () => t.innerType._zod.propValues), g(e._zod, "values", () => t.innerType._zod.values), g(e._zod, "optin", () => t.innerType?._zod?.optin), g(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Tn) : Tn(r);
	};
});
function Tn(e) {
	return e.value = Object.freeze(e.value), e;
}
var En = /*@__PURE__*/ u("$ZodLazy", (e, t) => {
	P.init(e, t), g(e._zod, "innerType", () => {
		let e = t;
		return e._cachedInner ||= t.getter(), e._cachedInner;
	}), g(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern), g(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues), g(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0), g(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0), e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n);
}), Dn = /*@__PURE__*/ u("$ZodCustom", (e, t) => {
	M.init(e, t), P.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => On(t, n, r, e));
		On(i, n, r, e);
	};
});
function On(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(O(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var kn, An = class {
	constructor() {
		this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
	}
	add(e, ...t) {
		let n = t[0];
		return this._map.set(e, n), n && typeof n == "object" && "id" in n && this._idmap.set(n.id, e), this;
	}
	clear() {
		return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
	}
	remove(e) {
		let t = this._map.get(e);
		return t && typeof t == "object" && "id" in t && this._idmap.delete(t.id), this._map.delete(e), this;
	}
	get(e) {
		let t = e._zod.parent;
		if (t) {
			let n = { ...this.get(t) ?? {} };
			delete n.id;
			let r = {
				...n,
				...this._map.get(e)
			};
			return Object.keys(r).length ? r : void 0;
		}
		return this._map.get(e);
	}
	has(e) {
		return this._map.has(e);
	}
};
function jn() {
	return new An();
}
(kn = globalThis).__zod_globalRegistry ?? (kn.__zod_globalRegistry = jn());
var z = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function Mn(e, t) {
	return new e({
		type: "string",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function In(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ln(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Un(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Jn(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Yn(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xn(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function tr(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function nr(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ar(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
	return new e({
		type: "never",
		...C(t)
	});
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
	return new ft({
		check: "max_length",
		...C(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
	return new pt({
		check: "min_length",
		...C(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
	return new mt({
		check: "length_equals",
		...C(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
	return new ht({
		check: "string_format",
		format: "regex",
		...C(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function ur(e) {
	return new gt({
		check: "string_format",
		format: "lowercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function dr(e) {
	return new _t({
		check: "string_format",
		format: "uppercase",
		...C(e)
	});
}
// @__NO_SIDE_EFFECTS__
function fr(e, t) {
	return new vt({
		check: "string_format",
		format: "includes",
		...C(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function pr(e, t) {
	return new yt({
		check: "string_format",
		format: "starts_with",
		...C(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
	return new bt({
		check: "string_format",
		format: "ends_with",
		...C(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	return new xt({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function hr(e) {
	return /* @__PURE__ */ V((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function gr() {
	return /* @__PURE__ */ V((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function _r() {
	return /* @__PURE__ */ V((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function vr() {
	return /* @__PURE__ */ V((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function yr() {
	return /* @__PURE__ */ V((e) => oe(e));
}
// @__NO_SIDE_EFFECTS__
function br(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function xr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...C(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
	let n = /* @__PURE__ */ Cr((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(O(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(O(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
	let n = new M({
		check: "custom",
		...C(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function wr(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? z,
		target: t,
		unrepresentable: e?.unrepresentable ?? "throw",
		override: e?.override ?? (() => {}),
		io: e?.io ?? "output",
		counter: 0,
		seen: /* @__PURE__ */ new Map(),
		cycles: e?.cycles ?? "ref",
		reused: e?.reused ?? "inline",
		external: e?.external ?? void 0
	};
}
function H(e, t, n = {
	path: [],
	schemaPath: []
}) {
	var r;
	let i = e._zod.def, a = t.seen.get(e);
	if (a) return a.count++, n.schemaPath.includes(e) && (a.cycle = n.path), a.schema;
	let o = {
		schema: {},
		count: 1,
		cycle: void 0,
		path: n.path
	};
	t.seen.set(e, o);
	let s = e._zod.toJSONSchema?.();
	if (s) o.schema = s;
	else {
		let r = {
			...n,
			schemaPath: [...n.schemaPath, e],
			path: n.path
		};
		if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, o.schema, r);
		else {
			let n = o.schema, a = t.processors[i.type];
			if (!a) throw Error(`[toJSONSchema]: Non-representable type encountered: ${i.type}`);
			a(e, t, n, r);
		}
		let a = e._zod.parent;
		a && (o.ref ||= a, H(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && U(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Tr(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = /* @__PURE__ */ new Map();
	for (let t of e.seen.entries()) {
		let n = e.metadataRegistry.get(t[0])?.id;
		if (n) {
			let e = r.get(n);
			if (e && e !== t[0]) throw Error(`Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
			r.set(n, t[0]);
		}
	}
	let i = (t) => {
		let r = e.target === "draft-2020-12" ? "$defs" : "definitions";
		if (e.external) {
			let n = e.external.registry.get(t[0])?.id, i = e.external.uri ?? ((e) => e);
			if (n) return { ref: i(n) };
			let a = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
			return t[1].defId = a, {
				defId: a,
				ref: `${i("__shared")}#/${r}/${a}`
			};
		}
		if (t[1] === n) return { ref: "#" };
		let i = `#/${r}/`, a = t[1].schema.id ?? `__schema${e.counter++}`;
		return {
			defId: a,
			ref: i + a
		};
	}, a = (e) => {
		if (e[1].schema.$ref) return;
		let t = e[1], { ref: n, defId: r } = i(e);
		t.def = { ...t.schema }, r && (t.defId = r);
		let a = t.schema;
		for (let e in a) delete a[e];
		a.$ref = n;
	};
	if (e.cycles === "throw") for (let t of e.seen.entries()) {
		let e = t[1];
		if (e.cycle) throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
	}
	for (let n of e.seen.entries()) {
		let r = n[1];
		if (t === n[0]) {
			a(n);
			continue;
		}
		if (e.external) {
			let r = e.external.registry.get(n[0])?.id;
			if (t !== n[0] && r) {
				a(n);
				continue;
			}
		}
		if (e.metadataRegistry.get(n[0])?.id) {
			a(n);
			continue;
		}
		if (r.cycle) {
			a(n);
			continue;
		}
		if (r.count > 1 && e.reused === "ref") {
			a(n);
			continue;
		}
	}
}
function Er(e, t) {
	let n = e.seen.get(t);
	if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
	let r = (t) => {
		let n = e.seen.get(t);
		if (n.ref === null) return;
		let i = n.def ?? n.schema, a = { ...i }, o = n.ref;
		if (n.ref = null, o) {
			r(o);
			let n = e.seen.get(o), s = n.schema;
			if (s.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (i.allOf = i.allOf ?? [], i.allOf.push(s)) : Object.assign(i, s), Object.assign(i, a), t._zod.parent === o) for (let e in i) e !== "$ref" && e !== "allOf" && (e in a || delete i[e]);
			if (s.$ref && n.def) for (let e in i) e !== "$ref" && e !== "allOf" && e in n.def && JSON.stringify(i[e]) === JSON.stringify(n.def[e]) && delete i[e];
		}
		let s = t._zod.parent;
		if (s && s !== o) {
			r(s);
			let t = e.seen.get(s);
			if (t?.schema.$ref && (i.$ref = t.schema.$ref, t.def)) for (let e in i) e !== "$ref" && e !== "allOf" && e in t.def && JSON.stringify(i[e]) === JSON.stringify(t.def[e]) && delete i[e];
		}
		e.override({
			zodSchema: t,
			jsonSchema: i,
			path: n.path ?? []
		});
	};
	for (let t of [...e.seen.entries()].reverse()) r(t[0]);
	let i = {};
	if (e.target === "draft-2020-12" ? i.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? i.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? i.$schema = "http://json-schema.org/draft-04/schema#" : e.target, e.external?.uri) {
		let n = e.external.registry.get(t)?.id;
		if (!n) throw Error("Schema is missing an `id` property");
		i.$id = e.external.uri(n);
	}
	Object.assign(i, n.def ?? n.schema);
	let a = e.metadataRegistry.get(t)?.id;
	a !== void 0 && i.id === a && delete i.id;
	let o = e.external?.defs ?? {};
	for (let t of e.seen.entries()) {
		let e = t[1];
		e.def && e.defId && (e.def.id === e.defId && delete e.def.id, o[e.defId] = e.def);
	}
	e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? i.$defs = o : i.definitions = o);
	try {
		let n = JSON.parse(JSON.stringify(i));
		return Object.defineProperty(n, "~standard", {
			value: {
				...t["~standard"],
				jsonSchema: {
					input: W(t, "input", e.processors),
					output: W(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function U(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return U(r.element, n);
	if (r.type === "set") return U(r.valueType, n);
	if (r.type === "lazy") return U(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return U(r.innerType, n);
	if (r.type === "intersection") return U(r.left, n) || U(r.right, n);
	if (r.type === "record" || r.type === "map") return U(r.keyType, n) || U(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : U(r.in, n) || U(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (U(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (U(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (U(e, n)) return !0;
		return !!(r.rest && U(r.rest, n));
	}
	return !1;
}
var Dr = (e, t = {}) => (n) => {
	let r = wr({
		...n,
		processors: t
	});
	return H(e, r), Tr(r, e), Er(r, e);
}, W = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = wr({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return H(e, o), Tr(o, e), Er(o, e);
}, Or = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, kr = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Or[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Ar = (e, t, n, r) => {
	n.not = {};
}, jr = (e, t, n, r) => {
	let i = e._zod.def, a = ee(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Mr = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, Nr = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, Pr = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = H(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, Fr = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = H(o[e], t, {
		...r,
		path: [
			...r.path,
			"properties",
			e
		]
	});
	let s = new Set(Object.keys(o)), c = new Set([...s].filter((e) => {
		let n = a.shape[e]._zod;
		return t.io === "input" ? n.optin === void 0 : n.optout === void 0;
	}));
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = H(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Ir = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => H(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Lr = (e, t, n, r) => {
	let i = e._zod.def, a = H(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = H(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, Rr = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = H(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) i.patternProperties[t.source] = e;
	} else (t.target === "draft-07" || t.target === "draft-2020-12") && (i.propertyNames = H(a.keyType, t, {
		...r,
		path: [...r.path, "propertyNames"]
	})), i.additionalProperties = H(a.valueType, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	});
	let c = o._zod.values;
	if (c) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e);
	}
}, zr = (e, t, n, r) => {
	let i = e._zod.def, a = H(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Br = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Vr = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Hr = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, Ur = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Wr = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	H(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Gr = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Kr = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, qr = (e, t, n, r) => {
	let i = e._zod.innerType;
	H(i, t, r);
	let a = t.seen.get(e);
	a.ref = i;
}, Jr = /*@__PURE__*/ u("ZodISODateTime", (e, t) => {
	It.init(e, t), Y.init(e, t);
});
function Yr(e) {
	return /* @__PURE__ */ tr(Jr, e);
}
var Xr = /*@__PURE__*/ u("ZodISODate", (e, t) => {
	Lt.init(e, t), Y.init(e, t);
});
function Zr(e) {
	return /* @__PURE__ */ nr(Xr, e);
}
var Qr = /*@__PURE__*/ u("ZodISOTime", (e, t) => {
	Rt.init(e, t), Y.init(e, t);
});
function $r(e) {
	return /* @__PURE__ */ rr(Qr, e);
}
var ei = /*@__PURE__*/ u("ZodISODuration", (e, t) => {
	zt.init(e, t), Y.init(e, t);
});
function ti(e) {
	return /* @__PURE__ */ ir(ei, e);
}
var G = /*@__PURE__*/ u("ZodError", (e, t) => {
	Se.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => Te(e, t) },
		flatten: { value: (t) => we(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, te, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, te, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
}, { Parent: Error }), ni = /* @__PURE__ */ Ee(G), ri = /* @__PURE__ */ k(G), ii = /* @__PURE__ */ A(G), ai = /* @__PURE__ */ j(G), oi = /* @__PURE__ */ ke(G), si = /* @__PURE__ */ Ae(G), ci = /* @__PURE__ */ je(G), li = /* @__PURE__ */ Me(G), ui = /* @__PURE__ */ Ne(G), di = /* @__PURE__ */ Pe(G), fi = /* @__PURE__ */ Fe(G), pi = /* @__PURE__ */ Ie(G), mi = /* @__PURE__ */ new WeakMap();
function K(e, t, n) {
	let r = Object.getPrototypeOf(e), i = mi.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), mi.set(r, i)), !i.has(t)) {
		i.add(t);
		for (let e in n) {
			let t = n[e];
			Object.defineProperty(r, e, {
				configurable: !0,
				enumerable: !1,
				get() {
					let n = t.bind(this);
					return Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: n
					}), n;
				},
				set(t) {
					Object.defineProperty(this, e, {
						configurable: !0,
						writable: !0,
						enumerable: !0,
						value: t
					});
				}
			});
		}
	}
}
var q = /*@__PURE__*/ u("ZodType", (e, t) => (P.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: W(e, "input"),
	output: W(e, "output")
} }), e.toJSONSchema = Dr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => ni(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => ii(e, t, n), e.parseAsync = async (t, n) => ri(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => ai(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => oi(e, t, n), e.decode = (t, n) => si(e, t, n), e.encodeAsync = async (t, n) => ci(e, t, n), e.decodeAsync = async (t, n) => li(e, t, n), e.safeEncode = (t, n) => ui(e, t, n), e.safeDecode = (t, n) => di(e, t, n), e.safeEncodeAsync = async (t, n) => fi(e, t, n), e.safeDecodeAsync = async (t, n) => pi(e, t, n), K(e, "ZodType", {
	check(...e) {
		let t = this.def;
		return this.clone(v(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return S(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(va(e, t));
	},
	superRefine(e, t) {
		return this.check(ya(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ V(e));
	},
	optional() {
		return Qi(this);
	},
	exactOptional() {
		return ea(this);
	},
	nullable() {
		return na(this);
	},
	nullish() {
		return Qi(na(this));
	},
	nonoptional(e) {
		return ca(this, e);
	},
	array() {
		return Bi(this);
	},
	or(e) {
		return Ui([this, e]);
	},
	and(e) {
		return Gi(this, e);
	},
	transform(e) {
		return fa(this, Xi(e));
	},
	default(e) {
		return ia(this, e);
	},
	prefault(e) {
		return oa(this, e);
	},
	catch(e) {
		return ua(this, e);
	},
	pipe(e) {
		return fa(this, e);
	},
	readonly() {
		return ma(this);
	},
	describe(e) {
		let t = this.clone();
		return z.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return z.get(this);
		let t = this.clone();
		return z.add(t, e[0]), t;
	},
	isOptional() {
		return this.safeParse(void 0).success;
	},
	isNullable() {
		return this.safeParse(null).success;
	},
	apply(e) {
		return e(this);
	}
}), Object.defineProperty(e, "description", {
	get() {
		return z.get(e)?.description;
	},
	configurable: !0
}), e)), hi = /*@__PURE__*/ u("_ZodString", (e, t) => {
	wt.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => kr(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, K(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ lr(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ fr(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ pr(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ mr(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ B(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ sr(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ cr(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ B(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ ur(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ dr(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ gr());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ hr(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ _r());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ vr());
		},
		slugify() {
			return this.check(/* @__PURE__ */ yr());
		}
	});
}), gi = /*@__PURE__*/ u("ZodString", (e, t) => {
	wt.init(e, t), hi.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Nn(_i, t)), e.url = (t) => e.check(/* @__PURE__ */ zn(yi, t)), e.jwt = (t) => e.check(/* @__PURE__ */ er(Pi, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Bn(bi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Pn(vi, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Fn(X, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ In(X, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Ln(X, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Rn(X, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ Vn(xi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Pn(vi, t)), e.cuid = (t) => e.check(/* @__PURE__ */ Hn(Si, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ Un(Ci, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Wn(wi, t)), e.base64 = (t) => e.check(/* @__PURE__ */ Zn(ji, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Qn(Mi, t)), e.xid = (t) => e.check(/* @__PURE__ */ Gn(Ti, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ Kn(Ei, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ qn(Di, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ Jn(Oi, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ Yn(ki, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ Xn(Ai, t)), e.e164 = (t) => e.check(/* @__PURE__ */ $n(Ni, t)), e.datetime = (t) => e.check(Yr(t)), e.date = (t) => e.check(Zr(t)), e.time = (t) => e.check($r(t)), e.duration = (t) => e.check(ti(t));
});
function J(e) {
	return /* @__PURE__ */ Mn(gi, e);
}
var Y = /*@__PURE__*/ u("ZodStringFormat", (e, t) => {
	F.init(e, t), hi.init(e, t);
}), _i = /*@__PURE__*/ u("ZodEmail", (e, t) => {
	Dt.init(e, t), Y.init(e, t);
}), vi = /*@__PURE__*/ u("ZodGUID", (e, t) => {
	Tt.init(e, t), Y.init(e, t);
}), X = /*@__PURE__*/ u("ZodUUID", (e, t) => {
	Et.init(e, t), Y.init(e, t);
}), yi = /*@__PURE__*/ u("ZodURL", (e, t) => {
	Ot.init(e, t), Y.init(e, t);
}), bi = /*@__PURE__*/ u("ZodEmoji", (e, t) => {
	kt.init(e, t), Y.init(e, t);
}), xi = /*@__PURE__*/ u("ZodNanoID", (e, t) => {
	At.init(e, t), Y.init(e, t);
}), Si = /*@__PURE__*/ u("ZodCUID", (e, t) => {
	jt.init(e, t), Y.init(e, t);
}), Ci = /*@__PURE__*/ u("ZodCUID2", (e, t) => {
	Mt.init(e, t), Y.init(e, t);
}), wi = /*@__PURE__*/ u("ZodULID", (e, t) => {
	Nt.init(e, t), Y.init(e, t);
}), Ti = /*@__PURE__*/ u("ZodXID", (e, t) => {
	Pt.init(e, t), Y.init(e, t);
}), Ei = /*@__PURE__*/ u("ZodKSUID", (e, t) => {
	Ft.init(e, t), Y.init(e, t);
}), Di = /*@__PURE__*/ u("ZodIPv4", (e, t) => {
	Bt.init(e, t), Y.init(e, t);
}), Oi = /*@__PURE__*/ u("ZodIPv6", (e, t) => {
	Vt.init(e, t), Y.init(e, t);
}), ki = /*@__PURE__*/ u("ZodCIDRv4", (e, t) => {
	Ht.init(e, t), Y.init(e, t);
}), Ai = /*@__PURE__*/ u("ZodCIDRv6", (e, t) => {
	Ut.init(e, t), Y.init(e, t);
}), ji = /*@__PURE__*/ u("ZodBase64", (e, t) => {
	Gt.init(e, t), Y.init(e, t);
}), Mi = /*@__PURE__*/ u("ZodBase64URL", (e, t) => {
	qt.init(e, t), Y.init(e, t);
}), Ni = /*@__PURE__*/ u("ZodE164", (e, t) => {
	Jt.init(e, t), Y.init(e, t);
}), Pi = /*@__PURE__*/ u("ZodJWT", (e, t) => {
	Xt.init(e, t), Y.init(e, t);
}), Fi = /*@__PURE__*/ u("ZodUnknown", (e, t) => {
	Zt.init(e, t), q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Ii() {
	return /* @__PURE__ */ ar(Fi);
}
var Li = /*@__PURE__*/ u("ZodNever", (e, t) => {
	Qt.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ar(e, t, n, r);
});
function Ri(e) {
	return /* @__PURE__ */ or(Li, e);
}
var zi = /*@__PURE__*/ u("ZodArray", (e, t) => {
	en.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pr(e, t, n, r), e.element = t.element, K(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ B(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ B(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ sr(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ cr(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Bi(e, t) {
	return /* @__PURE__ */ br(zi, e, t);
}
var Vi = /*@__PURE__*/ u("ZodObject", (e, t) => {
	an.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fr(e, t, n, r), g(e, "shape", () => t.shape), K(e, "ZodObject", {
		keyof() {
			return Q(Object.keys(this._zod.def.shape));
		},
		catchall(e) {
			return this.clone({
				...this._zod.def,
				catchall: e
			});
		},
		passthrough() {
			return this.clone({
				...this._zod.def,
				catchall: Ii()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Ii()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: Ri()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return me(this, e);
		},
		safeExtend(e) {
			return he(this, e);
		},
		merge(e) {
			return ge(this, e);
		},
		pick(e) {
			return fe(this, e);
		},
		omit(e) {
			return pe(this, e);
		},
		partial(...e) {
			return _e(Zi, this, e[0]);
		},
		required(...e) {
			return ve(sa, this, e[0]);
		}
	});
});
function Z(e, t) {
	return new Vi({
		type: "object",
		shape: e ?? {},
		...C(t)
	});
}
var Hi = /*@__PURE__*/ u("ZodUnion", (e, t) => {
	sn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ir(e, t, n, r), e.options = t.options;
});
function Ui(e, t) {
	return new Hi({
		type: "union",
		options: e,
		...C(t)
	});
}
var Wi = /*@__PURE__*/ u("ZodIntersection", (e, t) => {
	cn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lr(e, t, n, r);
});
function Gi(e, t) {
	return new Wi({
		type: "intersection",
		left: e,
		right: t
	});
}
var Ki = /*@__PURE__*/ u("ZodRecord", (e, t) => {
	un.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rr(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function qi(e, t, n) {
	return !t || !t._zod ? new Ki({
		type: "record",
		keyType: J(),
		valueType: e,
		...C(t)
	}) : new Ki({
		type: "record",
		keyType: e,
		valueType: t,
		...C(n)
	});
}
var Ji = /*@__PURE__*/ u("ZodEnum", (e, t) => {
	dn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => jr(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new Ji({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new Ji({
			...t,
			checks: [],
			...C(r),
			entries: i
		});
	};
});
function Q(e, t) {
	return new Ji({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...C(t)
	});
}
var Yi = /*@__PURE__*/ u("ZodTransform", (e, t) => {
	fn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Nr(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new f(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(O(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(O(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
});
function Xi(e) {
	return new Yi({
		type: "transform",
		transform: e
	});
}
var Zi = /*@__PURE__*/ u("ZodOptional", (e, t) => {
	mn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Qi(e) {
	return new Zi({
		type: "optional",
		innerType: e
	});
}
var $i = /*@__PURE__*/ u("ZodExactOptional", (e, t) => {
	hn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Kr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ea(e) {
	return new $i({
		type: "optional",
		innerType: e
	});
}
var ta = /*@__PURE__*/ u("ZodNullable", (e, t) => {
	gn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => zr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function na(e) {
	return new ta({
		type: "nullable",
		innerType: e
	});
}
var ra = /*@__PURE__*/ u("ZodDefault", (e, t) => {
	_n.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vr(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ia(e, t) {
	return new ra({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : le(t);
		}
	});
}
var aa = /*@__PURE__*/ u("ZodPrefault", (e, t) => {
	yn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function oa(e, t) {
	return new aa({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : le(t);
		}
	});
}
var sa = /*@__PURE__*/ u("ZodNonOptional", (e, t) => {
	bn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Br(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ca(e, t) {
	return new sa({
		type: "nonoptional",
		innerType: e,
		...C(t)
	});
}
var la = /*@__PURE__*/ u("ZodCatch", (e, t) => {
	Sn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ur(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ua(e, t) {
	return new la({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var da = /*@__PURE__*/ u("ZodPipe", (e, t) => {
	Cn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Wr(e, t, n, r), e.in = t.in, e.out = t.out;
});
function fa(e, t) {
	return new da({
		type: "pipe",
		in: e,
		out: t
	});
}
var pa = /*@__PURE__*/ u("ZodReadonly", (e, t) => {
	wn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Gr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ma(e) {
	return new pa({
		type: "readonly",
		innerType: e
	});
}
var ha = /*@__PURE__*/ u("ZodLazy", (e, t) => {
	En.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => qr(e, t, n, r), e.unwrap = () => e._zod.def.getter();
});
function ga(e) {
	return new ha({
		type: "lazy",
		getter: e
	});
}
var _a = /*@__PURE__*/ u("ZodCustom", (e, t) => {
	Dn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mr(e, t, n, r);
});
function va(e, t = {}) {
	return /* @__PURE__ */ xr(_a, e, t);
}
function ya(e, t) {
	return /* @__PURE__ */ Sr(e, t);
}
//#endregion
//#region src/ConfigSchema.ts
var ba = Z({
	urlSuffix: J().optional().default(".html"),
	dropdownLayouts: qi(J(), Q(["tiles", "list"])).optional()
}).strict(), xa = ga(() => Z({
	id: J(),
	label: J(),
	url: J(),
	image: J().nullable().optional().default(null),
	children: Bi(xa),
	meta: Z({
		type: Q([
			"link",
			"cta",
			"banner"
		]).optional(),
		icon: Q(["arrow", "external"]).optional()
	}).optional().default({})
}).strict()), Sa = Z({
	data: Z({ items: Bi(xa) }).strict(),
	settings: Z({ theme: ba }).strict()
}).strict();
function Ca(e) {
	return Sa.parse(e);
}
//#endregion
//#region src/Config.ts
var wa = "megamenu";
function Ta(e, t, n) {
	try {
		let r = Ea(Ca({
			...e,
			data: { items: t }
		}));
		return n?.log("bootstrap", "Config resolved", r), Object.freeze(r);
	} catch (e) {
		throw n?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
function Ea(e) {
	return {
		data: e.data,
		settings: {
			...e.settings,
			theme: {
				...e.settings.theme,
				dropdownLayouts: e.settings.theme.dropdownLayouts === void 0 ? {} : e.settings.theme.dropdownLayouts
			}
		}
	};
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var Da = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function Oa() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var ka = class {
	widgetId;
	instance;
	correlationId;
	constructor(e, t) {
		this.widgetId = e, t !== void 0 && (this.instance = t);
	}
	log(e, t, n, r = "info") {
		let i = {
			widget: this.widgetId,
			instance: this.instance ?? this.widgetId,
			phase: e,
			message: t,
			level: r,
			data: n,
			ts: Date.now()
		};
		if (this.isEnabled()) {
			let t = `[${this.widgetId}] ${e}`;
			r === "error" ? console.error(t, i) : r === "warn" ? console.warn(t, i) : console.log(t, i), this.dispatchActivityEvent(i);
		}
	}
	group(e, t) {
		if (this.isEnabled()) {
			if (console.group(`[ReactEdge] ${e}`), t) for (let [e, n] of Object.entries(t)) console.log(`${e}:`, n);
			console.groupEnd();
		}
	}
	debug(e, t) {
		if (this.isEnabled() && (console.group(`[ReactEdge] ${e}`), t)) for (let [e, n] of Object.entries(t)) console.debug(`${e}:`, n);
	}
	ready() {
		let e = "widget-ready", t = {
			widget: this.widgetId,
			instance: this.instance ?? this.widgetId,
			phase: e,
			message: "The widget is now ready to take over the SSR",
			level: "info",
			data: null,
			ts: Date.now()
		};
		if (this.isEnabled()) {
			let n = `[${this.widgetId}] ${e}`;
			console.log(n, t);
		}
		this.dispatchActivityEvent(t);
	}
	dispatchActivityEvent(e) {
		typeof window > "u" || window.dispatchEvent(new CustomEvent("reactedge:activity", { detail: e }));
	}
	isEnabled() {
		let e = Oa();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, Aa = Da.Provider, ja = ({ children: e, hostElement: t }) => {
	let n = new ka(wa, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ a(Aa, {
		value: n,
		children: e
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function Ma() {
	let e = t(Da);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/hooks/ui/useMediaQuery.tsx
function Na(e) {
	let [t, i] = r(() => typeof window < "u" && window.matchMedia(e).matches);
	return n(() => {
		let t = window.matchMedia(e), n = () => i(t.matches);
		return t.addEventListener("change", n), () => t.removeEventListener("change", n);
	}, [e]), t;
}
//#endregion
//#region src/state/Config/ConfigState.tsx
var Pa = e(void 0), Fa = Pa.Provider, Ia = ({ children: e, settings: t }) => {
	let [n] = r({ settings: t });
	return /* @__PURE__ */ a(Fa, {
		value: { settings: n.settings },
		children: e
	});
}, La = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	padding: "20px"
}, Ra = {
	width: "26px",
	height: "26px",
	border: "3px solid #ccc",
	borderRadius: "50%",
	animation: "spin 0.8s linear infinite"
};
//#endregion
//#region src/components/Loading.tsx
function za() {
	return /* @__PURE__ */ a("div", {
		style: La,
		children: /* @__PURE__ */ a("div", { style: Ra })
	});
}
//#endregion
//#region src/lib/layout-resolver.ts
function Ba(e, t) {
	if (!e || t === void 0) return "list";
	try {
		let n = new URL(e).pathname.split("/").filter(Boolean), r = n[n.length - 1] || "", i = t?.urlSuffix ?? ".html", a = `/${r.endsWith(i) ? r.slice(0, -i.length) : r}`;
		return t?.dropdownLayouts?.[a] ?? "list";
	} catch {
		return "list";
	}
}
function Va(e, t) {
	return e.children?.length ? e.children.some((e) => e.children && e.children.length > 0) ? "complex" : t === "tiles" ? "simple-tiles" : "simple-list" : "none";
}
//#endregion
//#region src/lib/url.ts
function Ha(e, t) {
	try {
		let n = new URL(e, t ?? "http://localhost");
		return t && n.origin === t || !/^https?:/.test(e) ? (n.pathname.replace(/\/+$/, "") || "/") + n.search + n.hash : e;
	} catch {
		return e.replace(/\/+$/, "") || "/";
	}
}
function Ua(e, t) {
	if (!e || e === "#" || e.startsWith("#")) return !1;
	let n = t ?? (typeof window < "u" ? window.location.href : void 0);
	return n !== void 0 && Ha(e) === Ha(n);
}
function Wa(e) {
	return e.children.some((e) => Ua(e.url) || Wa(e));
}
function Ga(e) {
	return Ua(e.url) || Wa(e);
}
//#endregion
//#region src/components/ParentMenuItem.tsx
function Ka({ item: e, isActive: t, hasSubmenu: n }) {
	let r = Ga(e), i = /* @__PURE__ */ o("span", {
		className: [
			"parent-label",
			t && "is-active",
			r && "is-breadcrumb",
			n && "has-submenu"
		].filter(Boolean).join(" "),
		children: [e.label, n && /* @__PURE__ */ a("span", {
			className: "parent-arrow",
			"aria-hidden": "true",
			children: "▼"
		})]
	});
	return !n && e.url ? /* @__PURE__ */ a("a", {
		href: e.url,
		className: "parent-link",
		children: i
	}) : /* @__PURE__ */ a("div", {
		className: "parent-item",
		children: i
	});
}
//#endregion
//#region src/components/Megamenu/ItemLink.tsx
var qa = ({ url: e, label: t, isInBreadcrumb: n }) => /* @__PURE__ */ a("a", {
	href: e,
	className: `link${n ? " in-breadcrumb" : ""}`,
	children: t
});
//#endregion
//#region src/components/Megamenu/Icon.tsx
function Ja(e) {
	return e ? e === "arrow" ? /* @__PURE__ */ o("svg", {
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "#fff",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ a("line", {
			x1: "5",
			y1: "12",
			x2: "19",
			y2: "12"
		}), /* @__PURE__ */ a("polyline", { points: "12 5 19 12 12 19" })]
	}) : e === "external" ? /* @__PURE__ */ a("svg", {}) : null : null;
}
//#endregion
//#region src/components/Megamenu/CtaItemLink.tsx
function Ya({ url: e, label: t, icon: n }) {
	return /* @__PURE__ */ o("a", {
		href: e,
		className: "cta-link",
		children: [/* @__PURE__ */ a("span", {
			className: "cta-link__label",
			children: t
		}), n && /* @__PURE__ */ a("span", {
			className: "cta-link__icon",
			"aria-hidden": "true",
			children: n && Ja(n)
		})]
	});
}
//#endregion
//#region src/components/MenuItem.tsx
function $(e) {
	let { item: t, isActive: n, isParent: r, hasSubmenu: i } = e;
	return t.url ? t.meta?.type === "cta" ? /* @__PURE__ */ a(Ya, {
		url: t.url,
		label: t.label,
		icon: t.meta?.icon
	}) : r ? /* @__PURE__ */ a(Ka, {
		item: t,
		isActive: n || !1,
		hasSubmenu: i || !1
	}) : /* @__PURE__ */ a(qa, {
		url: t.url,
		label: t.label,
		isInBreadcrumb: Ga(t)
	}) : null;
}
//#endregion
//#region src/components/Megamenu/MenuTile.tsx
function Xa({ item: e }) {
	return /* @__PURE__ */ o("a", {
		href: e.url,
		className: "menu-tile",
		children: [e.image && /* @__PURE__ */ a("img", {
			src: e.image,
			alt: e.label,
			className: "menu-tile__image"
		}), /* @__PURE__ */ a("span", {
			className: "menu-tile__label",
			children: e.label
		})]
	});
}
//#endregion
//#region src/components/Megamenu/MenuLevelTwo.tsx
function Za({ label: e, children: t }) {
	return t?.length ? /* @__PURE__ */ o("div", {
		className: "megamenu-col",
		children: [/* @__PURE__ */ a("div", {
			className: "megamenu-col__title",
			children: e
		}), /* @__PURE__ */ a("ul", {
			className: "megamenu-col__list",
			children: t.map((e) => /* @__PURE__ */ a("li", {
				className: "megamenu-col__item",
				children: /* @__PURE__ */ a($, { item: e })
			}, e.id))
		})]
	}) : null;
}
//#endregion
//#region src/components/MegamenuContent.tsx
function Qa({ items: e, loading: t = !1, theme: n }) {
	let [i, s] = r(null);
	return t ? /* @__PURE__ */ a(za, {}) : /* @__PURE__ */ a("div", {
		className: "megamenu",
		children: e && e.map((e) => {
			let t = i === e.id, r = Va(e, Ba(e.url, n)), c = r !== "none";
			return /* @__PURE__ */ o("div", {
				className: [
					"megamenu-item",
					t && "is-active",
					`menu-${r}`
				].filter(Boolean).join(" "),
				onMouseEnter: () => s(e.id),
				onMouseLeave: () => s(null),
				children: [/* @__PURE__ */ a($, {
					item: e,
					isActive: t,
					isParent: !0,
					hasSubmenu: c
				}), r !== "none" && /* @__PURE__ */ o("div", {
					className: "megamenu-dropdown",
					children: [
						r === "simple-list" && e.children.map((e) => /* @__PURE__ */ a($, { item: e }, e.id)),
						r === "simple-tiles" && /* @__PURE__ */ a("div", {
							className: "megamenu-tiles",
							children: e.children?.map((e) => /* @__PURE__ */ a(Xa, { item: e }, e.id))
						}),
						r === "complex" && e.children.map((e) => /* @__PURE__ */ a(Za, {
							label: e.label,
							children: e.children
						}, e.id))
					]
				})]
			}, e.id);
		})
	});
}
//#endregion
//#region src/components/Drawer/DrawerInline.tsx
var $a = ({ isOpen: e, onClose: t, children: r }) => (n(() => {
	let n = (e) => {
		e.key === "Escape" && t();
	};
	return e && document.addEventListener("keydown", n), () => {
		document.removeEventListener("keydown", n);
	};
}, [e, t]), /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("div", {
	className: `drawer-overlay ${e ? "is-open" : ""}`,
	onClick: t
}), /* @__PURE__ */ a("aside", {
	className: `drawer drawer ${e ? "is-open" : ""}`,
	children: r
})] }));
//#endregion
//#region src/state/Config/useConfigState.ts
function eo() {
	let e = t(Pa);
	if (!e) throw Error("useConfigState must be used within ConfigStateProvider");
	return e;
}
//#endregion
//#region src/components/MobileMegamenu/MenuContent.tsx
function to({ items: e, loading: t = !1 }) {
	let [n, i] = r(null), { settings: s } = eo();
	return t || e && !e.length ? /* @__PURE__ */ a(za, {}) : /* @__PURE__ */ a("div", {
		className: "megamenu",
		children: e && e.map((e) => {
			let t = n === e.id, r = Va(e, Ba(e.url, s)), c = r !== "none";
			return /* @__PURE__ */ o("div", {
				className: [
					"megamenu-item",
					t && "is-active",
					`menu-${r}`
				].filter(Boolean).join(" "),
				onClick: () => i(e.id),
				children: [/* @__PURE__ */ a($, {
					item: e,
					isActive: t,
					isParent: !0,
					hasSubmenu: c
				}), r !== "none" && /* @__PURE__ */ o("div", {
					className: "megamenu-dropdown",
					children: [
						r === "simple-list" && e.children.map((e) => /* @__PURE__ */ a($, { item: e }, e.id)),
						r === "simple-tiles" && /* @__PURE__ */ a("div", {
							className: "megamenu-tiles",
							children: e.children?.map((e) => /* @__PURE__ */ a(Xa, { item: e }, e.id))
						}),
						r === "complex" && e.children.map((e) => /* @__PURE__ */ a(Za, {
							label: e.label,
							children: e.children
						}, e.id))
					]
				})]
			}, e.id);
		})
	});
}
//#endregion
//#region src/components/MobileMegamenu.tsx
function no({ items: e, loading: t = !1, theme: n }) {
	let [s, c] = r(!1);
	return t || e && !e.length ? /* @__PURE__ */ a(za, {}) : /* @__PURE__ */ o(i, { children: [/* @__PURE__ */ a("button", {
		className: "menu-toggle",
		"aria-expanded": s,
		"aria-controls": "mobile-menu",
		onClick: () => c(!0),
		children: "☰"
	}), /* @__PURE__ */ a($a, {
		isOpen: s,
		onClose: () => c(!1),
		children: /* @__PURE__ */ a(to, {
			items: e,
			theme: n
		})
	})] });
}
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
function ro({ contract: e, bootstrap: t }) {
	let r = Ma(), i = Ta(e, t, r), s = Na("(max-width: 768px)");
	return n(() => {
		i && r.ready();
	}, [i, r]), i ? /* @__PURE__ */ o(Ia, {
		settings: i?.settings?.theme,
		children: [!s && /* @__PURE__ */ a(Qa, {
			items: i?.data.items,
			theme: i.settings?.theme
		}), s && /* @__PURE__ */ a(no, {
			items: i?.data.items,
			theme: i.settings?.theme
		})]
	}) : null;
}
//#endregion
//#region src/bootstrap/widget-root.tsx
function io({ contract: e, bootstrap: t, hostElement: n }) {
	return /* @__PURE__ */ a("div", {
		className: `reactedge-${wa}`,
		children: /* @__PURE__ */ a(ja, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ a(ro, {
				contract: e,
				bootstrap: t
			})
		})
	});
}
//#endregion
//#region src/Widget.tsx
function ao({ container: e, contract: t, bootstrap: n, hydrate: r = !1 }) {
	let i = /* @__PURE__ */ a(io, {
		contract: t,
		bootstrap: n
	});
	r ? c(e, i) : s(e).render(i);
}
//#endregion
//#region src/WidgetView.tsx
var oo = ({ contract: e, bootstrap: t }) => {
	let n = Ta(e, t);
	return n ? /* @__PURE__ */ a(Ia, {
		settings: n?.settings?.theme,
		children: /* @__PURE__ */ a(to, {
			items: n?.data.items,
			theme: n.settings?.theme
		})
	}) : null;
};
//#endregion
//#region src/bootstrap/widget-ssr-component.tsx
function so({ contract: e, bootstrap: t }) {
	return /* @__PURE__ */ a("div", {
		className: `reactedge-${wa}`,
		children: /* @__PURE__ */ a(oo, {
			contract: e,
			bootstrap: t
		})
	});
}
//#endregion
export { ao as Widget, so as WidgetComponent };
