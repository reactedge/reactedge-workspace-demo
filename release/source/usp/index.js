import { Fragment as e, createContext as t, useContext as n, useEffect as r, useRef as i, useState as a } from "react";
import { jsx as o, jsxs as s } from "react/jsx-runtime";
import { createRoot as c, hydrateRoot as l } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/core.js
var u;
function d(e, t, n) {
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
var f = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, p = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(u = globalThis).__zod_globalConfig ?? (u.__zod_globalConfig = {});
var m = globalThis.__zod_globalConfig;
function h(e) {
	return e && Object.assign(m, e), m;
}
//#endregion
//#region ../../node_modules/zod/v4/core/util.js
function ee(e) {
	let t = Object.values(e).filter((e) => typeof e == "number");
	return Object.entries(e).filter(([e, n]) => t.indexOf(+e) === -1).map(([e, t]) => t);
}
function g(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function _(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function te(e) {
	return e == null;
}
function ne(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
var re = /* @__PURE__*/ Symbol("evaluating");
function v(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== re) return r === void 0 && (r = re, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function y(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function b(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function ie(e) {
	return JSON.stringify(e);
}
function ae(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var oe = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function x(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var se = /* @__PURE__*/ _(() => {
	if (m.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function S(e) {
	if (x(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return x(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function ce(e) {
	return S(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var le = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function C(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function w(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function T(e) {
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
function ue(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
-Number.MAX_VALUE, Number.MAX_VALUE;
function de(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return w(e, b(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return y(this, "shape", e), e;
		},
		checks: []
	}));
}
function fe(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return w(e, b(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return y(this, "shape", r), r;
		},
		checks: []
	}));
}
function pe(e, t) {
	if (!S(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return w(e, b(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return y(this, "shape", n), n;
	} }));
}
function me(e, t) {
	if (!S(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return w(e, b(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return y(this, "shape", n), n;
	} }));
}
function he(e, t) {
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return w(e, b(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return y(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function ge(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return w(t, b(t._zod.def, {
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
			return y(this, "shape", i), i;
		},
		checks: []
	}));
}
function _e(e, t, n) {
	return w(t, b(t._zod.def, { get shape() {
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
		return y(this, "shape", i), i;
	} }));
}
function E(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function ve(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function ye(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function D(e) {
	return typeof e == "string" ? e : e?.message;
}
function O(e, t, n) {
	let r = e.message ? e.message : D(e.inst?._zod.def?.error?.(e)) ?? D(t?.error?.(e)) ?? D(n.customError?.(e)) ?? D(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: a, input: o, ...s } = e;
	return s.path ??= [], s.message = r, t?.reportInput && (s.input = o), s;
}
function be(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function k(...e) {
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
	}), e.message = JSON.stringify(t, g, 2), Object.defineProperty(e, "toString", {
		value: () => e.message,
		enumerable: !1
	});
}, Se = d("$ZodError", xe), Ce = d("$ZodError", xe, { Parent: Error });
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
	if (o instanceof Promise) throw new f();
	if (o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => O(e, a, h())));
		throw oe(t, i?.callee), t;
	}
	return o.value;
}, De = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => O(e, a, h())));
		throw oe(t, i?.callee), t;
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
	if (a instanceof Promise) throw new f();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? Se)(a.issues.map((e) => O(e, i, h())))
	} : {
		success: !0,
		data: a.value
	};
}, Oe = /* @__PURE__*/ A(Ce), j = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => O(e, i, h())))
	} : {
		success: !0,
		data: a.value
	};
}, ke = /* @__PURE__*/ j(Ce), Ae = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ee(e)(t, n, i);
}, je = (e) => (t, n, r) => Ee(e)(t, n, r), Me = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return De(e)(t, n, i);
}, Ne = (e) => async (t, n, r) => De(e)(t, n, r), Pe = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return A(e)(t, n, i);
}, Fe = (e) => (t, n, r) => A(e)(t, n, r), Ie = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return j(e)(t, n, i);
}, Le = (e) => async (t, n, r) => j(e)(t, n, r), Re = /^[cC][0-9a-z]{6,}$/, ze = /^[0-9a-z]+$/, Be = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ve = /^[0-9a-vA-V]{20}$/, He = /^[A-Za-z0-9]{27}$/, Ue = /^[a-zA-Z0-9_-]{21}$/, We = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Ge = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Ke = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, qe = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Je = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ye() {
	return new RegExp(Je, "u");
}
var Xe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, Ze = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, Qe = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, $e = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, et = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, tt = /^[A-Za-z0-9_-]*$/, nt = /^https?$/, rt = /^\+[1-9]\d{6,14}$/, it = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", at = /*@__PURE__*/ RegExp(`^${it}$`);
function ot(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function st(e) {
	return RegExp(`^${ot(e)}$`);
}
function ct(e) {
	let t = ot({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${it}T(?:${r})$`);
}
var lt = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, ut = /^[^A-Z]*$/, dt = /^[^a-z]*$/, M = /*@__PURE__*/ d("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), ft = /*@__PURE__*/ d("$ZodCheckMaxLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !te(t) && t.length !== void 0;
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
}), pt = /*@__PURE__*/ d("$ZodCheckMinLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !te(t) && t.length !== void 0;
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
}), mt = /*@__PURE__*/ d("$ZodCheckLengthEquals", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !te(t) && t.length !== void 0;
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
}), N = /*@__PURE__*/ d("$ZodCheckStringFormat", (e, t) => {
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
}), ht = /*@__PURE__*/ d("$ZodCheckRegex", (e, t) => {
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
}), gt = /*@__PURE__*/ d("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= ut, N.init(e, t);
}), _t = /*@__PURE__*/ d("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= dt, N.init(e, t);
}), vt = /*@__PURE__*/ d("$ZodCheckIncludes", (e, t) => {
	M.init(e, t);
	let n = C(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
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
}), yt = /*@__PURE__*/ d("$ZodCheckStartsWith", (e, t) => {
	M.init(e, t);
	let n = RegExp(`^${C(t.prefix)}.*`);
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
}), bt = /*@__PURE__*/ d("$ZodCheckEndsWith", (e, t) => {
	M.init(e, t);
	let n = RegExp(`.*${C(t.suffix)}$`);
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
}), xt = /*@__PURE__*/ d("$ZodCheckOverwrite", (e, t) => {
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
}, P = /*@__PURE__*/ d("$ZodType", (e, t) => {
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
			let r = E(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (ve(e) || !a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new f();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= E(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= E(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (E(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new f();
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
				if (a.async === !1) throw new f();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	v(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = Oe(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return ke(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), F = /*@__PURE__*/ d("$ZodString", (e, t) => {
	P.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? lt(e._zod.bag), e._zod.parse = (n, r) => {
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
}), I = /*@__PURE__*/ d("$ZodStringFormat", (e, t) => {
	N.init(e, t), F.init(e, t);
}), wt = /*@__PURE__*/ d("$ZodGUID", (e, t) => {
	t.pattern ??= Ge, I.init(e, t);
}), Tt = /*@__PURE__*/ d("$ZodUUID", (e, t) => {
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
		t.pattern ??= Ke(e);
	} else t.pattern ??= Ke();
	I.init(e, t);
}), Et = /*@__PURE__*/ d("$ZodEmail", (e, t) => {
	t.pattern ??= qe, I.init(e, t);
}), Dt = /*@__PURE__*/ d("$ZodURL", (e, t) => {
	I.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === nt.source && !/^https?:\/\//i.test(r)) {
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
}), Ot = /*@__PURE__*/ d("$ZodEmoji", (e, t) => {
	t.pattern ??= Ye(), I.init(e, t);
}), kt = /*@__PURE__*/ d("$ZodNanoID", (e, t) => {
	t.pattern ??= Ue, I.init(e, t);
}), At = /*@__PURE__*/ d("$ZodCUID", (e, t) => {
	t.pattern ??= Re, I.init(e, t);
}), jt = /*@__PURE__*/ d("$ZodCUID2", (e, t) => {
	t.pattern ??= ze, I.init(e, t);
}), Mt = /*@__PURE__*/ d("$ZodULID", (e, t) => {
	t.pattern ??= Be, I.init(e, t);
}), Nt = /*@__PURE__*/ d("$ZodXID", (e, t) => {
	t.pattern ??= Ve, I.init(e, t);
}), Pt = /*@__PURE__*/ d("$ZodKSUID", (e, t) => {
	t.pattern ??= He, I.init(e, t);
}), Ft = /*@__PURE__*/ d("$ZodISODateTime", (e, t) => {
	t.pattern ??= ct(t), I.init(e, t);
}), It = /*@__PURE__*/ d("$ZodISODate", (e, t) => {
	t.pattern ??= at, I.init(e, t);
}), Lt = /*@__PURE__*/ d("$ZodISOTime", (e, t) => {
	t.pattern ??= st(t), I.init(e, t);
}), Rt = /*@__PURE__*/ d("$ZodISODuration", (e, t) => {
	t.pattern ??= We, I.init(e, t);
}), zt = /*@__PURE__*/ d("$ZodIPv4", (e, t) => {
	t.pattern ??= Xe, I.init(e, t), e._zod.bag.format = "ipv4";
}), Bt = /*@__PURE__*/ d("$ZodIPv6", (e, t) => {
	t.pattern ??= Ze, I.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Vt = /*@__PURE__*/ d("$ZodCIDRv4", (e, t) => {
	t.pattern ??= Qe, I.init(e, t);
}), Ht = /*@__PURE__*/ d("$ZodCIDRv6", (e, t) => {
	t.pattern ??= $e, I.init(e, t), e._zod.check = (n) => {
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
function Ut(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var Wt = /*@__PURE__*/ d("$ZodBase64", (e, t) => {
	t.pattern ??= et, I.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		Ut(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function Gt(e) {
	if (!tt.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return Ut(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var Kt = /*@__PURE__*/ d("$ZodBase64URL", (e, t) => {
	t.pattern ??= tt, I.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		Gt(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), qt = /*@__PURE__*/ d("$ZodE164", (e, t) => {
	t.pattern ??= rt, I.init(e, t);
});
function Jt(e, t = null) {
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
var Yt = /*@__PURE__*/ d("$ZodJWT", (e, t) => {
	I.init(e, t), e._zod.check = (n) => {
		Jt(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Xt = /*@__PURE__*/ d("$ZodUnknown", (e, t) => {
	P.init(e, t), e._zod.parse = (e) => e;
}), Zt = /*@__PURE__*/ d("$ZodNever", (e, t) => {
	P.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function Qt(e, t, n) {
	e.issues.length && t.issues.push(...ye(n, e.issues)), t.value[n] = e.value;
}
var $t = /*@__PURE__*/ d("$ZodArray", (e, t) => {
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
			s instanceof Promise ? a.push(s.then((t) => Qt(t, n, e))) : Qt(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function L(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...ye(n, e.issues));
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
function en(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = ue(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function tn(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => L(e, n, i, t, u, d))) : L(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var nn = /*@__PURE__*/ d("$ZodObject", (e, t) => {
	if (P.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = _(() => en(t));
	v(e._zod, "propValues", () => {
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
	let r = x, i = t.catchall, a;
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
			a instanceof Promise ? c.push(a.then((n) => L(n, t, e, s, r, i))) : L(a, t, e, s, r, i);
		}
		return i ? tn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), rn = /*@__PURE__*/ d("$ZodObjectJIT", (e, t) => {
	nn.init(e, t);
	let n = e._zod.parse, r = _(() => en(t)), i = (e) => {
		let t = new St([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = ie(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = ie(r), s = e[r], c = s?._zod?.optin === "optional", l = s?._zod?.optout === "optional";
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
	}, a, o = x, s = !m.jitless, c = s && se.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? tn([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function an(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !E(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => O(e, r, h())))
	}), t);
}
var on = /*@__PURE__*/ d("$ZodUnion", (e, t) => {
	P.init(e, t), v(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), v(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), v(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), v(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => ne(e.source)).join("|")})$`);
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
		return a ? Promise.all(o).then((t) => an(t, r, e, i)) : an(o, r, e, i);
	};
}), sn = /*@__PURE__*/ d("$ZodIntersection", (e, t) => {
	P.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => cn(e, t, n)) : cn(e, i, a);
	};
});
function R(e, t) {
	if (e === t || e instanceof Date && t instanceof Date && +e == +t) return {
		valid: !0,
		data: e
	};
	if (S(e) && S(t)) {
		let n = Object.keys(t), r = Object.keys(e).filter((e) => n.indexOf(e) !== -1), i = {
			...e,
			...t
		};
		for (let n of r) {
			let r = R(e[n], t[n]);
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
			let i = e[r], a = t[r], o = R(i, a);
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
function cn(e, t, n) {
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
	}), E(e)) return e;
	let o = R(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var ln = /*@__PURE__*/ d("$ZodEnum", (e, t) => {
	P.init(e, t);
	let n = ee(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => le.has(typeof e)).map((e) => typeof e == "string" ? C(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), un = /*@__PURE__*/ d("$ZodTransform", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new p(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new f();
		return n.value = i, n.fallback = !0, n;
	};
});
function dn(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var fn = /*@__PURE__*/ d("$ZodOptional", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), v(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ne(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => dn(e, r)) : dn(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), pn = /*@__PURE__*/ d("$ZodExactOptional", (e, t) => {
	fn.init(e, t), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), mn = /*@__PURE__*/ d("$ZodNullable", (e, t) => {
	P.init(e, t), v(e._zod, "optin", () => t.innerType._zod.optin), v(e._zod, "optout", () => t.innerType._zod.optout), v(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ne(e.source)}|null)$`) : void 0;
	}), v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), hn = /*@__PURE__*/ d("$ZodDefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => gn(e, t)) : gn(r, t);
	};
});
function gn(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var _n = /*@__PURE__*/ d("$ZodPrefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), vn = /*@__PURE__*/ d("$ZodNonOptional", (e, t) => {
	P.init(e, t), v(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => yn(t, e)) : yn(i, e);
	};
});
function yn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var bn = /*@__PURE__*/ d("$ZodCatch", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", v(e._zod, "optout", () => t.innerType._zod.optout), v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => O(e, n, h())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => O(e, n, h())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), xn = /*@__PURE__*/ d("$ZodPipe", (e, t) => {
	P.init(e, t), v(e._zod, "values", () => t.in._zod.values), v(e._zod, "optin", () => t.in._zod.optin), v(e._zod, "optout", () => t.out._zod.optout), v(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => z(e, t.in, n)) : z(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => z(e, t.out, n)) : z(r, t.out, n);
	};
});
function z(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
var Sn = /*@__PURE__*/ d("$ZodReadonly", (e, t) => {
	P.init(e, t), v(e._zod, "propValues", () => t.innerType._zod.propValues), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "optin", () => t.innerType?._zod?.optin), v(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Cn) : Cn(r);
	};
});
function Cn(e) {
	return e.value = Object.freeze(e.value), e;
}
var wn = /*@__PURE__*/ d("$ZodCustom", (e, t) => {
	M.init(e, t), P.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Tn(t, n, r, e));
		Tn(i, n, r, e);
	};
});
function Tn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(k(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var En, Dn = class {
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
function On() {
	return new Dn();
}
(En = globalThis).__zod_globalRegistry ?? (En.__zod_globalRegistry = On());
var B = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function kn(e, t) {
	return new e({
		type: "string",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function An(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function jn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Nn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Fn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function In(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ln(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Rn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function zn(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Bn(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Vn(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Hn(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Un(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Jn(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Yn(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Xn(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function tr(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function nr(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
	return new e({
		type: "never",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return new ft({
		check: "max_length",
		...T(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function V(e, t) {
	return new pt({
		check: "min_length",
		...T(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
	return new mt({
		check: "length_equals",
		...T(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
	return new ht({
		check: "string_format",
		format: "regex",
		...T(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
	return new gt({
		check: "string_format",
		format: "lowercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
	return new _t({
		check: "string_format",
		format: "uppercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
	return new vt({
		check: "string_format",
		format: "includes",
		...T(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function ur(e, t) {
	return new yt({
		check: "string_format",
		format: "starts_with",
		...T(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
	return new bt({
		check: "string_format",
		format: "ends_with",
		...T(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function H(e) {
	return new xt({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
	return /* @__PURE__ */ H((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function pr() {
	return /* @__PURE__ */ H((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function mr() {
	return /* @__PURE__ */ H((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function hr() {
	return /* @__PURE__ */ H((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function gr() {
	return /* @__PURE__ */ H((e) => ae(e));
}
// @__NO_SIDE_EFFECTS__
function _r(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function vr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function yr(e, t) {
	let n = /* @__PURE__ */ br((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(k(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(k(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
	let n = new M({
		check: "custom",
		...T(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function xr(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? B,
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
function U(e, t, n = {
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
		a && (o.ref ||= a, U(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && W(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function Sr(e, t) {
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
function Cr(e, t) {
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
					input: G(t, "input", e.processors),
					output: G(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function W(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return W(r.element, n);
	if (r.type === "set") return W(r.valueType, n);
	if (r.type === "lazy") return W(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return W(r.innerType, n);
	if (r.type === "intersection") return W(r.left, n) || W(r.right, n);
	if (r.type === "record" || r.type === "map") return W(r.keyType, n) || W(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : W(r.in, n) || W(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (W(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (W(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (W(e, n)) return !0;
		return !!(r.rest && W(r.rest, n));
	}
	return !1;
}
var wr = (e, t = {}) => (n) => {
	let r = xr({
		...n,
		processors: t
	});
	return U(e, r), Sr(r, e), Cr(r, e);
}, G = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = xr({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return U(e, o), Sr(o, e), Cr(o, e);
}, Tr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, Er = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Tr[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Dr = (e, t, n, r) => {
	n.not = {};
}, Or = (e, t, n, r) => {
	let i = e._zod.def, a = ee(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, kr = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, Ar = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, jr = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = U(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, Mr = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = U(o[e], t, {
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
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = U(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, Nr = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => U(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, Pr = (e, t, n, r) => {
	let i = e._zod.def, a = U(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = U(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, Fr = (e, t, n, r) => {
	let i = e._zod.def, a = U(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Ir = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Lr = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, Rr = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, zr = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Br = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	U(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Vr = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Hr = (e, t, n, r) => {
	let i = e._zod.def;
	U(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ur = /*@__PURE__*/ d("ZodISODateTime", (e, t) => {
	Ft.init(e, t), Y.init(e, t);
});
function Wr(e) {
	return /* @__PURE__ */ Qn(Ur, e);
}
var Gr = /*@__PURE__*/ d("ZodISODate", (e, t) => {
	It.init(e, t), Y.init(e, t);
});
function Kr(e) {
	return /* @__PURE__ */ $n(Gr, e);
}
var qr = /*@__PURE__*/ d("ZodISOTime", (e, t) => {
	Lt.init(e, t), Y.init(e, t);
});
function Jr(e) {
	return /* @__PURE__ */ er(qr, e);
}
var Yr = /*@__PURE__*/ d("ZodISODuration", (e, t) => {
	Rt.init(e, t), Y.init(e, t);
});
function Xr(e) {
	return /* @__PURE__ */ tr(Yr, e);
}
var K = /*@__PURE__*/ d("ZodError", (e, t) => {
	Se.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => Te(e, t) },
		flatten: { value: (t) => we(e, t) },
		addIssue: { value: (t) => {
			e.issues.push(t), e.message = JSON.stringify(e.issues, g, 2);
		} },
		addIssues: { value: (t) => {
			e.issues.push(...t), e.message = JSON.stringify(e.issues, g, 2);
		} },
		isEmpty: { get() {
			return e.issues.length === 0;
		} }
	});
}, { Parent: Error }), Zr = /* @__PURE__ */ Ee(K), Qr = /* @__PURE__ */ De(K), $r = /* @__PURE__ */ A(K), ei = /* @__PURE__ */ j(K), ti = /* @__PURE__ */ Ae(K), ni = /* @__PURE__ */ je(K), ri = /* @__PURE__ */ Me(K), ii = /* @__PURE__ */ Ne(K), ai = /* @__PURE__ */ Pe(K), oi = /* @__PURE__ */ Fe(K), si = /* @__PURE__ */ Ie(K), ci = /* @__PURE__ */ Le(K), li = /* @__PURE__ */ new WeakMap();
function q(e, t, n) {
	let r = Object.getPrototypeOf(e), i = li.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), li.set(r, i)), !i.has(t)) {
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
var J = /*@__PURE__*/ d("ZodType", (e, t) => (P.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: G(e, "input"),
	output: G(e, "output")
} }), e.toJSONSchema = wr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Zr(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => $r(e, t, n), e.parseAsync = async (t, n) => Qr(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => ei(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => ti(e, t, n), e.decode = (t, n) => ni(e, t, n), e.encodeAsync = async (t, n) => ri(e, t, n), e.decodeAsync = async (t, n) => ii(e, t, n), e.safeEncode = (t, n) => ai(e, t, n), e.safeDecode = (t, n) => oi(e, t, n), e.safeEncodeAsync = async (t, n) => si(e, t, n), e.safeDecodeAsync = async (t, n) => ci(e, t, n), q(e, "ZodType", {
	check(...e) {
		let t = this.def;
		return this.clone(b(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return w(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(la(e, t));
	},
	superRefine(e, t) {
		return this.check(ua(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ H(e));
	},
	optional() {
		return Gi(this);
	},
	exactOptional() {
		return qi(this);
	},
	nullable() {
		return Yi(this);
	},
	nullish() {
		return Gi(Yi(this));
	},
	nonoptional(e) {
		return ta(this, e);
	},
	array() {
		return Ii(this);
	},
	or(e) {
		return zi([this, e]);
	},
	and(e) {
		return Vi(this, e);
	},
	transform(e) {
		return aa(this, Ui(e));
	},
	default(e) {
		return Zi(this, e);
	},
	prefault(e) {
		return $i(this, e);
	},
	catch(e) {
		return ra(this, e);
	},
	pipe(e) {
		return aa(this, e);
	},
	readonly() {
		return sa(this);
	},
	describe(e) {
		let t = this.clone();
		return B.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return B.get(this);
		let t = this.clone();
		return B.add(t, e[0]), t;
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
		return B.get(e)?.description;
	},
	configurable: !0
}), e)), ui = /*@__PURE__*/ d("_ZodString", (e, t) => {
	F.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Er(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, q(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ or(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ lr(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ ur(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ dr(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ V(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ ir(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ ar(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ V(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ sr(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ cr(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ pr());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ fr(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ mr());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ hr());
		},
		slugify() {
			return this.check(/* @__PURE__ */ gr());
		}
	});
}), di = /*@__PURE__*/ d("ZodString", (e, t) => {
	F.init(e, t), ui.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ An(pi, t)), e.url = (t) => e.check(/* @__PURE__ */ In(hi, t)), e.jwt = (t) => e.check(/* @__PURE__ */ Zn(Ai, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Ln(gi, t)), e.guid = (t) => e.check(/* @__PURE__ */ jn(mi, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Mn(X, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ Nn(X, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Pn(X, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Fn(X, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ Rn(_i, t)), e.guid = (t) => e.check(/* @__PURE__ */ jn(mi, t)), e.cuid = (t) => e.check(/* @__PURE__ */ zn(vi, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ Bn(yi, t)), e.ulid = (t) => e.check(/* @__PURE__ */ Vn(bi, t)), e.base64 = (t) => e.check(/* @__PURE__ */ Jn(Di, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Yn(Oi, t)), e.xid = (t) => e.check(/* @__PURE__ */ Hn(xi, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ Un(Si, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ Wn(Ci, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ Gn(wi, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ Kn(Ti, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ qn(Ei, t)), e.e164 = (t) => e.check(/* @__PURE__ */ Xn(ki, t)), e.datetime = (t) => e.check(Wr(t)), e.date = (t) => e.check(Kr(t)), e.time = (t) => e.check(Jr(t)), e.duration = (t) => e.check(Xr(t));
});
function fi(e) {
	return /* @__PURE__ */ kn(di, e);
}
var Y = /*@__PURE__*/ d("ZodStringFormat", (e, t) => {
	I.init(e, t), ui.init(e, t);
}), pi = /*@__PURE__*/ d("ZodEmail", (e, t) => {
	Et.init(e, t), Y.init(e, t);
}), mi = /*@__PURE__*/ d("ZodGUID", (e, t) => {
	wt.init(e, t), Y.init(e, t);
}), X = /*@__PURE__*/ d("ZodUUID", (e, t) => {
	Tt.init(e, t), Y.init(e, t);
}), hi = /*@__PURE__*/ d("ZodURL", (e, t) => {
	Dt.init(e, t), Y.init(e, t);
}), gi = /*@__PURE__*/ d("ZodEmoji", (e, t) => {
	Ot.init(e, t), Y.init(e, t);
}), _i = /*@__PURE__*/ d("ZodNanoID", (e, t) => {
	kt.init(e, t), Y.init(e, t);
}), vi = /*@__PURE__*/ d("ZodCUID", (e, t) => {
	At.init(e, t), Y.init(e, t);
}), yi = /*@__PURE__*/ d("ZodCUID2", (e, t) => {
	jt.init(e, t), Y.init(e, t);
}), bi = /*@__PURE__*/ d("ZodULID", (e, t) => {
	Mt.init(e, t), Y.init(e, t);
}), xi = /*@__PURE__*/ d("ZodXID", (e, t) => {
	Nt.init(e, t), Y.init(e, t);
}), Si = /*@__PURE__*/ d("ZodKSUID", (e, t) => {
	Pt.init(e, t), Y.init(e, t);
}), Ci = /*@__PURE__*/ d("ZodIPv4", (e, t) => {
	zt.init(e, t), Y.init(e, t);
}), wi = /*@__PURE__*/ d("ZodIPv6", (e, t) => {
	Bt.init(e, t), Y.init(e, t);
}), Ti = /*@__PURE__*/ d("ZodCIDRv4", (e, t) => {
	Vt.init(e, t), Y.init(e, t);
}), Ei = /*@__PURE__*/ d("ZodCIDRv6", (e, t) => {
	Ht.init(e, t), Y.init(e, t);
}), Di = /*@__PURE__*/ d("ZodBase64", (e, t) => {
	Wt.init(e, t), Y.init(e, t);
}), Oi = /*@__PURE__*/ d("ZodBase64URL", (e, t) => {
	Kt.init(e, t), Y.init(e, t);
}), ki = /*@__PURE__*/ d("ZodE164", (e, t) => {
	qt.init(e, t), Y.init(e, t);
}), Ai = /*@__PURE__*/ d("ZodJWT", (e, t) => {
	Yt.init(e, t), Y.init(e, t);
}), ji = /*@__PURE__*/ d("ZodUnknown", (e, t) => {
	Xt.init(e, t), J.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Mi() {
	return /* @__PURE__ */ nr(ji);
}
var Ni = /*@__PURE__*/ d("ZodNever", (e, t) => {
	Zt.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Dr(e, t, n, r);
});
function Pi(e) {
	return /* @__PURE__ */ rr(Ni, e);
}
var Fi = /*@__PURE__*/ d("ZodArray", (e, t) => {
	$t.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => jr(e, t, n, r), e.element = t.element, q(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ V(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ V(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ ir(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ ar(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function Ii(e, t) {
	return /* @__PURE__ */ _r(Fi, e, t);
}
var Li = /*@__PURE__*/ d("ZodObject", (e, t) => {
	rn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Mr(e, t, n, r), v(e, "shape", () => t.shape), q(e, "ZodObject", {
		keyof() {
			return $(Object.keys(this._zod.def.shape));
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
				catchall: Mi()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Mi()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: Pi()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return pe(this, e);
		},
		safeExtend(e) {
			return me(this, e);
		},
		merge(e) {
			return he(this, e);
		},
		pick(e) {
			return de(this, e);
		},
		omit(e) {
			return fe(this, e);
		},
		partial(...e) {
			return ge(Wi, this, e[0]);
		},
		required(...e) {
			return _e(ea, this, e[0]);
		}
	});
});
function Z(e, t) {
	return new Li({
		type: "object",
		shape: e ?? {},
		...T(t)
	});
}
var Ri = /*@__PURE__*/ d("ZodUnion", (e, t) => {
	on.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Nr(e, t, n, r), e.options = t.options;
});
function zi(e, t) {
	return new Ri({
		type: "union",
		options: e,
		...T(t)
	});
}
var Bi = /*@__PURE__*/ d("ZodIntersection", (e, t) => {
	sn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Pr(e, t, n, r);
});
function Vi(e, t) {
	return new Bi({
		type: "intersection",
		left: e,
		right: t
	});
}
var Q = /*@__PURE__*/ d("ZodEnum", (e, t) => {
	ln.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Or(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new Q({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new Q({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	};
});
function $(e, t) {
	return new Q({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...T(t)
	});
}
var Hi = /*@__PURE__*/ d("ZodTransform", (e, t) => {
	un.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ar(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new p(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(k(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(k(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
});
function Ui(e) {
	return new Hi({
		type: "transform",
		transform: e
	});
}
var Wi = /*@__PURE__*/ d("ZodOptional", (e, t) => {
	fn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Gi(e) {
	return new Wi({
		type: "optional",
		innerType: e
	});
}
var Ki = /*@__PURE__*/ d("ZodExactOptional", (e, t) => {
	pn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Hr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function qi(e) {
	return new Ki({
		type: "optional",
		innerType: e
	});
}
var Ji = /*@__PURE__*/ d("ZodNullable", (e, t) => {
	mn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Fr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Yi(e) {
	return new Ji({
		type: "nullable",
		innerType: e
	});
}
var Xi = /*@__PURE__*/ d("ZodDefault", (e, t) => {
	hn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Lr(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function Zi(e, t) {
	return new Xi({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ce(t);
		}
	});
}
var Qi = /*@__PURE__*/ d("ZodPrefault", (e, t) => {
	_n.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Rr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function $i(e, t) {
	return new Qi({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : ce(t);
		}
	});
}
var ea = /*@__PURE__*/ d("ZodNonOptional", (e, t) => {
	vn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ir(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ta(e, t) {
	return new ea({
		type: "nonoptional",
		innerType: e,
		...T(t)
	});
}
var na = /*@__PURE__*/ d("ZodCatch", (e, t) => {
	bn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => zr(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function ra(e, t) {
	return new na({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var ia = /*@__PURE__*/ d("ZodPipe", (e, t) => {
	xn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Br(e, t, n, r), e.in = t.in, e.out = t.out;
});
function aa(e, t) {
	return new ia({
		type: "pipe",
		in: e,
		out: t
	});
}
var oa = /*@__PURE__*/ d("ZodReadonly", (e, t) => {
	Sn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => Vr(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function sa(e) {
	return new oa({
		type: "readonly",
		innerType: e
	});
}
var ca = /*@__PURE__*/ d("ZodCustom", (e, t) => {
	wn.init(e, t), J.init(e, t), e._zod.processJSONSchema = (t, n, r) => kr(e, t, n, r);
});
function la(e, t = {}) {
	return /* @__PURE__ */ vr(ca, e, t);
}
function ua(e, t) {
	return /* @__PURE__ */ yr(e, t);
}
//#endregion
//#region src/ConfigSchema.ts
var da = Z({
	data: Z({ slides: Ii(Z({
		heading: fi().min(1).max(30).optional(),
		text: fi().min(1).max(30)
	}).strict()).min(1).max(3) }).strict(),
	settings: Z({
		mode: Z({
			desktop: $(["static", "slider"]),
			tablet: $(["static", "slider"]),
			mobile: $(["static", "slider"])
		}).strict(),
		theme: $([
			"light",
			"dark",
			"promo"
		]).default("light")
	}).strict()
}).strict();
function fa(e) {
	return da.parse(e);
}
//#endregion
//#region src/Config.ts
function pa(e, t) {
	try {
		let n = fa(e);
		return t?.log("bootstrap", "Config resolved", n), Object.freeze(n);
	} catch (e) {
		throw t?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var ma = t(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function ha() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var ga = class {
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
		let e = ha();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, _a = ma.Provider, va = ({ children: e, hostElement: t }) => {
	let n = new ga("usp", (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ o(_a, {
		value: n,
		children: e
	});
}, ya = ({ slide: e, isActive: t }) => {
	let { text: n, heading: r } = e;
	return /* @__PURE__ */ s("div", {
		"data-usp-slide": !0,
		"data-usp-active": t || void 0,
		children: [r && /* @__PURE__ */ o("h3", {
			className: "usp-slide__heading",
			children: r
		}), /* @__PURE__ */ o("p", {
			className: "usp-slide__text",
			children: n
		})]
	});
};
//#endregion
//#region src/components/SlideSeparator.tsx
function ba() {
	return /* @__PURE__ */ s("div", {
		className: "usp-separator",
		children: [
			/* @__PURE__ */ o("span", {}),
			/* @__PURE__ */ o("span", {}),
			/* @__PURE__ */ o("span", {})
		]
	});
}
//#endregion
//#region src/components/UspStatic.tsx
function xa({ slides: t, config: n }) {
	return /* @__PURE__ */ o("section", {
		className: `usp-static-bar ${n.theme || "light"}`,
		children: t.map((n, r) => /* @__PURE__ */ s(e, { children: [/* @__PURE__ */ o(ya, {
			slide: n,
			isActive: !1,
			tileMode: !0
		}), r < t.length - 1 && /* @__PURE__ */ o(ba, {})] }, r))
	});
}
//#endregion
//#region src/lib/keyboard.ts
function Sa(e, t, n = ["Enter", " "]) {
	n.includes(e.key) && (e.preventDefault(), t());
}
//#endregion
//#region src/components/NavigationArrows.tsx
function Ca({ current: e, total: t, onChange: n }) {
	let r = () => n(e === 0 ? t - 1 : e - 1), i = () => n(e === t - 1 ? 0 : e + 1);
	return /* @__PURE__ */ s("div", {
		className: "navigation-arrows",
		children: [/* @__PURE__ */ o("button", {
			className: "arrow-btn",
			onClick: r,
			onKeyDown: (e) => Sa(e, r, [
				"ArrowLeft",
				"Enter",
				" "
			]),
			"data-usp-prev": !0,
			children: "‹"
		}), /* @__PURE__ */ o("button", {
			className: "arrow-btn",
			onClick: i,
			onKeyDown: (e) => Sa(e, i, [
				"ArrowRight",
				"Enter",
				" "
			]),
			"data-usp-next": !0,
			children: "›"
		})]
	});
}
//#endregion
//#region src/components/UspSlider.tsx
function wa({ slides: e, config: t }) {
	let [n, r] = a(0);
	return /* @__PURE__ */ s("div", {
		className: `usp-slider-bar ${t.theme || "light"}`,
		children: [/* @__PURE__ */ o("div", {
			className: "usp-slider__inner",
			style: { transform: `translateX(-${n * 100}%)` },
			children: e.map((e, t) => /* @__PURE__ */ o(ya, {
				slide: e,
				isActive: t === n,
				tileMode: !1
			}, t))
		}), /* @__PURE__ */ o(Ca, {
			current: n,
			total: e.length,
			onChange: r
		})]
	});
}
//#endregion
//#region src/components/Spinner.tsx
function Ta() {
	return /* @__PURE__ */ o("div", {
		style: {
			height: "100%",
			display: "flex",
			alignItems: "center",
			justifyContent: "center"
		},
		children: /* @__PURE__ */ o("span", {
			style: { opacity: .6 },
			children: "Loading…"
		})
	});
}
//#endregion
//#region src/lib/media-queries.ts
function Ea(e, t) {
	return e <= 480 ? t.settings.mode.mobile : e <= 768 ? t.settings.mode.tablet : t.settings.mode.desktop;
}
//#endregion
//#region src/components/UspWidget.tsx
var Da = ({ config: e }) => {
	let t = i(null), [n, s] = a(e.settings.mode.desktop);
	if (r(() => {
		if (!t.current) return;
		let n = new ResizeObserver((t) => {
			let n = t[0];
			if (!n) return;
			let r = n.contentRect.width;
			s((t) => {
				let n = Ea(r, e);
				return t === n ? t : n;
			});
		});
		return n.observe(t.current), () => n.disconnect();
	}, [e]), e.data.slides.length === 0) return /* @__PURE__ */ o(Ta, {});
	let c = o(n === "slider" ? wa : xa, {
		slides: e.data.slides,
		config: e.settings
	});
	return /* @__PURE__ */ o("div", {
		ref: t,
		children: c
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function Oa() {
	let e = n(ma);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
var ka = ({ contract: e }) => {
	let t = pa(e, Oa());
	return t ? t.data.slides.length === 0 ? /* @__PURE__ */ o(Ta, {}) : /* @__PURE__ */ o(Da, { config: t }) : null;
};
//#endregion
//#region src/bootstrap/widget-root.tsx
function Aa({ contract: e, bootstrap: t, hostElement: n }) {
	return /* @__PURE__ */ o("div", {
		className: "reactedge-usp",
		children: /* @__PURE__ */ o(va, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ o(ka, {
				contract: e,
				bootstrap: t
			})
		})
	});
}
//#endregion
//#region src/Widget.tsx
function ja({ container: e, contract: t, bootstrap: n, hydrate: r = !1 }) {
	let i = /* @__PURE__ */ o(Aa, {
		contract: t,
		bootstrap: n
	});
	r ? l(e, i) : c(e).render(i);
}
//#endregion
//#region src/WidgetView.tsx
var Ma = ({ contract: e }) => {
	let t = pa(e);
	return t ? /* @__PURE__ */ o(Da, { config: t }) : null;
};
//#endregion
//#region src/bootstrap/widget-ssr-component.tsx
function Na({ contract: e }) {
	return /* @__PURE__ */ o("div", {
		className: "reactedge-usp",
		children: /* @__PURE__ */ o(Ma, { contract: e })
	});
}
//#endregion
export { ja as Widget, Na as WidgetComponent };
