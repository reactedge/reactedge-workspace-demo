import { createContext as e, useCallback as t, useContext as n, useEffect as r, useMemo as i, useState as a } from "react";
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
function te(e, t) {
	return typeof t == "bigint" ? t.toString() : t;
}
function g(e) {
	return { get value() {
		{
			let t = e();
			return Object.defineProperty(this, "value", { value: t }), t;
		}
	} };
}
function _(e) {
	return e == null;
}
function ne(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function re(e, t) {
	let n = e / t, r = Math.round(n), i = 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
var ie = /* @__PURE__*/ Symbol("evaluating");
function v(e, t, n) {
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
function ae(e) {
	return JSON.stringify(e);
}
function oe(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var se = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function x(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var ce = /* @__PURE__*/ g(() => {
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
function le(e) {
	return S(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var ue = /* @__PURE__*/ new Set([
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
function de(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var fe = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function pe(e, t) {
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
function me(e, t) {
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
function he(e, t) {
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
function ge(e, t) {
	if (!S(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return w(e, b(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return y(this, "shape", n), n;
	} }));
}
function _e(e, t) {
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
function ve(e, t, n) {
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
function ye(e, t, n) {
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
function be(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function xe(e, t) {
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
function Se(e) {
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
var Ce = (e, t) => {
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
}, we = d("$ZodError", Ce), Te = d("$ZodError", Ce, { Parent: Error });
function Ee(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function De(e, t = (e) => e.message) {
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
var Oe = (e) => (t, n, r, i) => {
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
		throw se(t, i?.callee), t;
	}
	return o.value;
}, ke = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => O(e, a, h())));
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
	if (a instanceof Promise) throw new f();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? we)(a.issues.map((e) => O(e, i, h())))
	} : {
		success: !0,
		data: a.value
	};
}, Ae = /* @__PURE__*/ A(Te), j = (e) => async (t, n, r) => {
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
}, je = /* @__PURE__*/ j(Te), Me = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Oe(e)(t, n, i);
}, Ne = (e) => (t, n, r) => Oe(e)(t, n, r), Pe = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return ke(e)(t, n, i);
}, Fe = (e) => async (t, n, r) => ke(e)(t, n, r), Ie = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return A(e)(t, n, i);
}, Le = (e) => (t, n, r) => A(e)(t, n, r), Re = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return j(e)(t, n, i);
}, ze = (e) => async (t, n, r) => j(e)(t, n, r), Be = /^[cC][0-9a-z]{6,}$/, Ve = /^[0-9a-z]+$/, He = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Ue = /^[0-9a-vA-V]{20}$/, We = /^[A-Za-z0-9]{27}$/, Ge = /^[a-zA-Z0-9_-]{21}$/, Ke = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, qe = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Je = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Ye = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Xe = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function Ze() {
	return new RegExp(Xe, "u");
}
var Qe = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, $e = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, et = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, tt = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, nt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, rt = /^[A-Za-z0-9_-]*$/, it = /^https?$/, at = /^\+[1-9]\d{6,14}$/, ot = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", st = /*@__PURE__*/ RegExp(`^${ot}$`);
function ct(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function lt(e) {
	return RegExp(`^${ct(e)}$`);
}
function ut(e) {
	let t = ct({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${ot}T(?:${r})$`);
}
var dt = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, ft = /^-?\d+$/, pt = /^-?\d+(?:\.\d+)?$/, mt = /^[^A-Z]*$/, ht = /^[^a-z]*$/, M = /*@__PURE__*/ d("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), gt = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, _t = /*@__PURE__*/ d("$ZodCheckLessThan", (e, t) => {
	M.init(e, t);
	let n = gt[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? Infinity;
		t.value < r && (t.inclusive ? n.maximum = t.value : n.exclusiveMaximum = t.value);
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
}), vt = /*@__PURE__*/ d("$ZodCheckGreaterThan", (e, t) => {
	M.init(e, t);
	let n = gt[typeof t.value];
	e._zod.onattach.push((e) => {
		let n = e._zod.bag, r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -Infinity;
		t.value > r && (t.inclusive ? n.minimum = t.value : n.exclusiveMinimum = t.value);
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
}), yt = /*@__PURE__*/ d("$ZodCheckMultipleOf", (e, t) => {
	M.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : re(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), bt = /*@__PURE__*/ d("$ZodCheckNumberFormat", (e, t) => {
	M.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = fe[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = ft);
	}), e._zod.check = (o) => {
		let s = o.value;
		if (n) {
			if (!Number.isInteger(s)) {
				o.issues.push({
					expected: r,
					format: t.format,
					code: "invalid_type",
					continue: !1,
					input: s,
					inst: e
				});
				return;
			}
			if (!Number.isSafeInteger(s)) {
				s > 0 ? o.issues.push({
					input: s,
					code: "too_big",
					maximum: 2 ** 53 - 1,
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				}) : o.issues.push({
					input: s,
					code: "too_small",
					minimum: -(2 ** 53 - 1),
					note: "Integers must be within the safe integer range.",
					inst: e,
					origin: r,
					inclusive: !0,
					continue: !t.abort
				});
				return;
			}
		}
		s < i && o.issues.push({
			origin: "number",
			input: s,
			code: "too_small",
			minimum: i,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		}), s > a && o.issues.push({
			origin: "number",
			input: s,
			code: "too_big",
			maximum: a,
			inclusive: !0,
			inst: e,
			continue: !t.abort
		});
	};
}), xt = /*@__PURE__*/ d("$ZodCheckMaxLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !_(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = Se(r);
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
}), St = /*@__PURE__*/ d("$ZodCheckMinLength", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !_(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = Se(r);
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
}), Ct = /*@__PURE__*/ d("$ZodCheckLengthEquals", (e, t) => {
	var n;
	M.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !_(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = Se(r), o = i > t.length;
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
}), wt = /*@__PURE__*/ d("$ZodCheckRegex", (e, t) => {
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
}), Tt = /*@__PURE__*/ d("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= mt, N.init(e, t);
}), Et = /*@__PURE__*/ d("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= ht, N.init(e, t);
}), Dt = /*@__PURE__*/ d("$ZodCheckIncludes", (e, t) => {
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
}), Ot = /*@__PURE__*/ d("$ZodCheckStartsWith", (e, t) => {
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
}), kt = /*@__PURE__*/ d("$ZodCheckEndsWith", (e, t) => {
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
}), At = /*@__PURE__*/ d("$ZodCheckOverwrite", (e, t) => {
	M.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), jt = class {
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
}, Mt = {
	major: 4,
	minor: 4,
	patch: 3
}, P = /*@__PURE__*/ d("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Mt;
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
					if (be(e) || !a._zod.def.when(e)) continue;
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
				let n = Ae(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return je(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Nt = /*@__PURE__*/ d("$ZodString", (e, t) => {
	P.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? dt(e._zod.bag), e._zod.parse = (n, r) => {
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
}), F = /*@__PURE__*/ d("$ZodStringFormat", (e, t) => {
	N.init(e, t), Nt.init(e, t);
}), Pt = /*@__PURE__*/ d("$ZodGUID", (e, t) => {
	t.pattern ??= qe, F.init(e, t);
}), Ft = /*@__PURE__*/ d("$ZodUUID", (e, t) => {
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
		t.pattern ??= Je(e);
	} else t.pattern ??= Je();
	F.init(e, t);
}), It = /*@__PURE__*/ d("$ZodEmail", (e, t) => {
	t.pattern ??= Ye, F.init(e, t);
}), Lt = /*@__PURE__*/ d("$ZodURL", (e, t) => {
	F.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === it.source && !/^https?:\/\//i.test(r)) {
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
}), Rt = /*@__PURE__*/ d("$ZodEmoji", (e, t) => {
	t.pattern ??= Ze(), F.init(e, t);
}), zt = /*@__PURE__*/ d("$ZodNanoID", (e, t) => {
	t.pattern ??= Ge, F.init(e, t);
}), Bt = /*@__PURE__*/ d("$ZodCUID", (e, t) => {
	t.pattern ??= Be, F.init(e, t);
}), Vt = /*@__PURE__*/ d("$ZodCUID2", (e, t) => {
	t.pattern ??= Ve, F.init(e, t);
}), Ht = /*@__PURE__*/ d("$ZodULID", (e, t) => {
	t.pattern ??= He, F.init(e, t);
}), Ut = /*@__PURE__*/ d("$ZodXID", (e, t) => {
	t.pattern ??= Ue, F.init(e, t);
}), Wt = /*@__PURE__*/ d("$ZodKSUID", (e, t) => {
	t.pattern ??= We, F.init(e, t);
}), Gt = /*@__PURE__*/ d("$ZodISODateTime", (e, t) => {
	t.pattern ??= ut(t), F.init(e, t);
}), Kt = /*@__PURE__*/ d("$ZodISODate", (e, t) => {
	t.pattern ??= st, F.init(e, t);
}), qt = /*@__PURE__*/ d("$ZodISOTime", (e, t) => {
	t.pattern ??= lt(t), F.init(e, t);
}), Jt = /*@__PURE__*/ d("$ZodISODuration", (e, t) => {
	t.pattern ??= Ke, F.init(e, t);
}), Yt = /*@__PURE__*/ d("$ZodIPv4", (e, t) => {
	t.pattern ??= Qe, F.init(e, t), e._zod.bag.format = "ipv4";
}), Xt = /*@__PURE__*/ d("$ZodIPv6", (e, t) => {
	t.pattern ??= $e, F.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), Zt = /*@__PURE__*/ d("$ZodCIDRv4", (e, t) => {
	t.pattern ??= et, F.init(e, t);
}), Qt = /*@__PURE__*/ d("$ZodCIDRv6", (e, t) => {
	t.pattern ??= tt, F.init(e, t), e._zod.check = (n) => {
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
function $t(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var en = /*@__PURE__*/ d("$ZodBase64", (e, t) => {
	t.pattern ??= nt, F.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		$t(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function tn(e) {
	if (!rt.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return $t(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var nn = /*@__PURE__*/ d("$ZodBase64URL", (e, t) => {
	t.pattern ??= rt, F.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		tn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), rn = /*@__PURE__*/ d("$ZodE164", (e, t) => {
	t.pattern ??= at, F.init(e, t);
});
function an(e, t = null) {
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
var on = /*@__PURE__*/ d("$ZodJWT", (e, t) => {
	F.init(e, t), e._zod.check = (n) => {
		an(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), sn = /*@__PURE__*/ d("$ZodNumber", (e, t) => {
	P.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? pt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = Number(n.value);
		} catch {}
		let i = n.value;
		if (typeof i == "number" && !Number.isNaN(i) && Number.isFinite(i)) return n;
		let a = typeof i == "number" ? Number.isNaN(i) ? "NaN" : Number.isFinite(i) ? void 0 : "Infinity" : void 0;
		return n.issues.push({
			expected: "number",
			code: "invalid_type",
			input: i,
			inst: e,
			...a ? { received: a } : {}
		}), n;
	};
}), cn = /*@__PURE__*/ d("$ZodNumberFormat", (e, t) => {
	bt.init(e, t), sn.init(e, t);
}), ln = /*@__PURE__*/ d("$ZodUnknown", (e, t) => {
	P.init(e, t), e._zod.parse = (e) => e;
}), un = /*@__PURE__*/ d("$ZodNever", (e, t) => {
	P.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function dn(e, t, n) {
	e.issues.length && t.issues.push(...xe(n, e.issues)), t.value[n] = e.value;
}
var fn = /*@__PURE__*/ d("$ZodArray", (e, t) => {
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
			s instanceof Promise ? a.push(s.then((t) => dn(t, n, e))) : dn(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function I(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...xe(n, e.issues));
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
function pn(e) {
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
function mn(e, t, n, r, i, a) {
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
var hn = /*@__PURE__*/ d("$ZodObject", (e, t) => {
	if (P.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = g(() => pn(t));
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
			a instanceof Promise ? c.push(a.then((n) => I(n, t, e, s, r, i))) : I(a, t, e, s, r, i);
		}
		return i ? mn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), gn = /*@__PURE__*/ d("$ZodObjectJIT", (e, t) => {
	hn.init(e, t);
	let n = e._zod.parse, r = g(() => pn(t)), i = (e) => {
		let t = new jt([
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
	}, a, o = x, s = !m.jitless, c = s && ce.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? mn([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function _n(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !E(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => O(e, r, h())))
	}), t);
}
var vn = /*@__PURE__*/ d("$ZodUnion", (e, t) => {
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
		return a ? Promise.all(o).then((t) => _n(t, r, e, i)) : _n(o, r, e, i);
	};
}), yn = /*@__PURE__*/ d("$ZodDiscriminatedUnion", (e, t) => {
	t.inclusive = !1, vn.init(e, t);
	let n = e._zod.parse;
	v(e._zod, "propValues", () => {
		let e = {};
		for (let n of t.options) {
			let r = n._zod.propValues;
			if (!r || Object.keys(r).length === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(n)}"`);
			for (let [t, n] of Object.entries(r)) {
				e[t] || (e[t] = /* @__PURE__ */ new Set());
				for (let r of n) e[t].add(r);
			}
		}
		return e;
	});
	let r = g(() => {
		let e = t.options, n = /* @__PURE__ */ new Map();
		for (let r of e) {
			let e = r._zod.propValues?.[t.discriminator];
			if (!e || e.size === 0) throw Error(`Invalid discriminated union option at index "${t.options.indexOf(r)}"`);
			for (let t of e) {
				if (n.has(t)) throw Error(`Duplicate discriminator value "${String(t)}"`);
				n.set(t, r);
			}
		}
		return n;
	});
	e._zod.parse = (i, a) => {
		let o = i.value;
		if (!x(o)) return i.issues.push({
			code: "invalid_type",
			expected: "object",
			input: o,
			inst: e
		}), i;
		let s = r.value.get(o?.[t.discriminator]);
		return s ? s._zod.run(i, a) : t.unionFallback || a.direction === "backward" ? n(i, a) : (i.issues.push({
			code: "invalid_union",
			errors: [],
			note: "No matching discriminator",
			discriminator: t.discriminator,
			options: Array.from(r.value.keys()),
			input: o,
			path: [t.discriminator],
			inst: e
		}), i);
	};
}), bn = /*@__PURE__*/ d("$ZodIntersection", (e, t) => {
	P.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => xn(e, t, n)) : xn(e, i, a);
	};
});
function L(e, t) {
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
function xn(e, t, n) {
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
	let o = L(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var Sn = /*@__PURE__*/ d("$ZodEnum", (e, t) => {
	P.init(e, t);
	let n = ee(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => ue.has(typeof e)).map((e) => typeof e == "string" ? C(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Cn = /*@__PURE__*/ d("$ZodLiteral", (e, t) => {
	if (P.init(e, t), t.values.length === 0) throw Error("Cannot create literal schema with no valid values");
	let n = new Set(t.values);
	e._zod.values = n, e._zod.pattern = RegExp(`^(${t.values.map((e) => typeof e == "string" ? C(e) : e ? C(e.toString()) : String(e)).join("|")})$`), e._zod.parse = (r, i) => {
		let a = r.value;
		return n.has(a) || r.issues.push({
			code: "invalid_value",
			values: t.values,
			input: a,
			inst: e
		}), r;
	};
}), wn = /*@__PURE__*/ d("$ZodTransform", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new p(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new f();
		return n.value = i, n.fallback = !0, n;
	};
});
function Tn(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var En = /*@__PURE__*/ d("$ZodOptional", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), v(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ne(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => Tn(e, r)) : Tn(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), Dn = /*@__PURE__*/ d("$ZodExactOptional", (e, t) => {
	En.init(e, t), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), On = /*@__PURE__*/ d("$ZodNullable", (e, t) => {
	P.init(e, t), v(e._zod, "optin", () => t.innerType._zod.optin), v(e._zod, "optout", () => t.innerType._zod.optout), v(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ne(e.source)}|null)$`) : void 0;
	}), v(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), kn = /*@__PURE__*/ d("$ZodDefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => An(e, t)) : An(r, t);
	};
});
function An(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var jn = /*@__PURE__*/ d("$ZodPrefault", (e, t) => {
	P.init(e, t), e._zod.optin = "optional", v(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Mn = /*@__PURE__*/ d("$ZodNonOptional", (e, t) => {
	P.init(e, t), v(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Nn(t, e)) : Nn(i, e);
	};
});
function Nn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Pn = /*@__PURE__*/ d("$ZodCatch", (e, t) => {
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
}), Fn = /*@__PURE__*/ d("$ZodPipe", (e, t) => {
	P.init(e, t), v(e._zod, "values", () => t.in._zod.values), v(e._zod, "optin", () => t.in._zod.optin), v(e._zod, "optout", () => t.out._zod.optout), v(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
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
var In = /*@__PURE__*/ d("$ZodReadonly", (e, t) => {
	P.init(e, t), v(e._zod, "propValues", () => t.innerType._zod.propValues), v(e._zod, "values", () => t.innerType._zod.values), v(e._zod, "optin", () => t.innerType?._zod?.optin), v(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Ln) : Ln(r);
	};
});
function Ln(e) {
	return e.value = Object.freeze(e.value), e;
}
var Rn = /*@__PURE__*/ d("$ZodCustom", (e, t) => {
	M.init(e, t), P.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => zn(t, n, r, e));
		zn(i, n, r, e);
	};
});
function zn(e, t, n, r) {
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
var Bn, Vn = class {
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
function Hn() {
	return new Vn();
}
(Bn = globalThis).__zod_globalRegistry ?? (Bn.__zod_globalRegistry = Hn());
var z = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function Un(e, t) {
	return new e({
		type: "string",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Wn(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Gn(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Kn(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function qn(e, t) {
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
function Jn(e, t) {
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
function Yn(e, t) {
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
function Xn(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Zn(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Qn(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function $n(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function er(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function tr(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function nr(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ur(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fr(e, t) {
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
function pr(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gr(e, t) {
	return new e({
		type: "number",
		checks: [],
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _r(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vr(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function yr(e, t) {
	return new e({
		type: "never",
		...T(t)
	});
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
	return new _t({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
	return new _t({
		check: "less_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
	return new vt({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
	return new vt({
		check: "greater_than",
		...T(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function wr(e, t) {
	return new yt({
		check: "multiple_of",
		...T(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t) {
	return new xt({
		check: "max_length",
		...T(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function B(e, t) {
	return new St({
		check: "min_length",
		...T(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
	return new Ct({
		check: "length_equals",
		...T(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
	return new wt({
		check: "string_format",
		format: "regex",
		...T(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Or(e) {
	return new Tt({
		check: "string_format",
		format: "lowercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function kr(e) {
	return new Et({
		check: "string_format",
		format: "uppercase",
		...T(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
	return new Dt({
		check: "string_format",
		format: "includes",
		...T(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
	return new Ot({
		check: "string_format",
		format: "starts_with",
		...T(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t) {
	return new kt({
		check: "string_format",
		format: "ends_with",
		...T(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function V(e) {
	return new At({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Nr(e) {
	return /* @__PURE__ */ V((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Pr() {
	return /* @__PURE__ */ V((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Fr() {
	return /* @__PURE__ */ V((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Ir() {
	return /* @__PURE__ */ V((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Lr() {
	return /* @__PURE__ */ V((e) => oe(e));
}
// @__NO_SIDE_EFFECTS__
function Rr(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function zr(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...T(n)
	});
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
	let n = /* @__PURE__ */ Vr((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(k(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(k(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
	let n = new M({
		check: "custom",
		...T(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function Hr(e) {
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
function Ur(e, t) {
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
function Wr(e, t) {
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
var Gr = (e, t = {}) => (n) => {
	let r = Hr({
		...n,
		processors: t
	});
	return H(e, r), Ur(r, e), Wr(r, e);
}, W = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = Hr({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return H(e, o), Ur(o, e), Wr(o, e);
}, Kr = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, qr = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = Kr[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, Jr = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
	let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (i.multipleOf = c);
}, Yr = (e, t, n, r) => {
	n.not = {};
}, Xr = (e, t, n, r) => {
	let i = e._zod.def, a = ee(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, Zr = (e, t, n, r) => {
	let i = e._zod.def, a = [];
	for (let e of i.values) if (e === void 0) {
		if (t.unrepresentable === "throw") throw Error("Literal `undefined` cannot be represented in JSON Schema");
	} else if (typeof e == "bigint") {
		if (t.unrepresentable === "throw") throw Error("BigInt literals cannot be represented in JSON Schema");
		a.push(Number(e));
	} else a.push(e);
	if (a.length !== 0) {
		if (a.length === 1) {
			let e = a[0];
			n.type = e === null ? "null" : typeof e, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [e] : n.const = e;
		} else a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), a.every((e) => typeof e == "boolean") && (n.type = "boolean"), a.every((e) => e === null) && (n.type = "null"), n.enum = a;
	}
}, Qr = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, $r = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, ei = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = H(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, ti = (e, t, n, r) => {
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
}, ni = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => H(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, ri = (e, t, n, r) => {
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
}, ii = (e, t, n, r) => {
	let i = e._zod.def, a = H(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, ai = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, oi = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, si = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, ci = (e, t, n, r) => {
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
}, li = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	H(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, ui = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, di = (e, t, n, r) => {
	let i = e._zod.def;
	H(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, fi = /*@__PURE__*/ d("ZodISODateTime", (e, t) => {
	Gt.init(e, t), Y.init(e, t);
});
function pi(e) {
	return /* @__PURE__ */ fr(fi, e);
}
var mi = /*@__PURE__*/ d("ZodISODate", (e, t) => {
	Kt.init(e, t), Y.init(e, t);
});
function hi(e) {
	return /* @__PURE__ */ pr(mi, e);
}
var gi = /*@__PURE__*/ d("ZodISOTime", (e, t) => {
	qt.init(e, t), Y.init(e, t);
});
function _i(e) {
	return /* @__PURE__ */ mr(gi, e);
}
var vi = /*@__PURE__*/ d("ZodISODuration", (e, t) => {
	Jt.init(e, t), Y.init(e, t);
});
function yi(e) {
	return /* @__PURE__ */ hr(vi, e);
}
var G = /*@__PURE__*/ d("ZodError", (e, t) => {
	we.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => De(e, t) },
		flatten: { value: (t) => Ee(e, t) },
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
}, { Parent: Error }), bi = /* @__PURE__ */ Oe(G), xi = /* @__PURE__ */ ke(G), Si = /* @__PURE__ */ A(G), Ci = /* @__PURE__ */ j(G), wi = /* @__PURE__ */ Me(G), Ti = /* @__PURE__ */ Ne(G), Ei = /* @__PURE__ */ Pe(G), Di = /* @__PURE__ */ Fe(G), Oi = /* @__PURE__ */ Ie(G), ki = /* @__PURE__ */ Le(G), Ai = /* @__PURE__ */ Re(G), ji = /* @__PURE__ */ ze(G), Mi = /* @__PURE__ */ new WeakMap();
function K(e, t, n) {
	let r = Object.getPrototypeOf(e), i = Mi.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), Mi.set(r, i)), !i.has(t)) {
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
var q = /*@__PURE__*/ d("ZodType", (e, t) => (P.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: W(e, "input"),
	output: W(e, "output")
} }), e.toJSONSchema = Gr(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => bi(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => Si(e, t, n), e.parseAsync = async (t, n) => xi(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Ci(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => wi(e, t, n), e.decode = (t, n) => Ti(e, t, n), e.encodeAsync = async (t, n) => Ei(e, t, n), e.decodeAsync = async (t, n) => Di(e, t, n), e.safeEncode = (t, n) => Oi(e, t, n), e.safeDecode = (t, n) => ki(e, t, n), e.safeEncodeAsync = async (t, n) => Ai(e, t, n), e.safeDecodeAsync = async (t, n) => ji(e, t, n), K(e, "ZodType", {
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
		return this.check(Va(e, t));
	},
	superRefine(e, t) {
		return this.check(Ha(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ V(e));
	},
	optional() {
		return Ca(this);
	},
	exactOptional() {
		return Ta(this);
	},
	nullable() {
		return Da(this);
	},
	nullish() {
		return Ca(Da(this));
	},
	nonoptional(e) {
		return Na(this, e);
	},
	array() {
		return la(this);
	},
	or(e) {
		return fa([this, e]);
	},
	and(e) {
		return ga(this, e);
	},
	transform(e) {
		return La(this, xa(e));
	},
	default(e) {
		return ka(this, e);
	},
	prefault(e) {
		return ja(this, e);
	},
	catch(e) {
		return Fa(this, e);
	},
	pipe(e) {
		return La(this, e);
	},
	readonly() {
		return za(this);
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
}), e)), Ni = /*@__PURE__*/ d("_ZodString", (e, t) => {
	Nt.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => qr(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, K(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ Dr(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ Ar(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ jr(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ Mr(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ B(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ Tr(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ Er(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ B(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ Or(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ kr(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ Pr());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ Nr(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ Fr());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ Ir());
		},
		slugify() {
			return this.check(/* @__PURE__ */ Lr());
		}
	});
}), Pi = /*@__PURE__*/ d("ZodString", (e, t) => {
	Nt.init(e, t), Ni.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ Wn(Fi, t)), e.url = (t) => e.check(/* @__PURE__ */ Xn(Li, t)), e.jwt = (t) => e.check(/* @__PURE__ */ dr($i, t)), e.emoji = (t) => e.check(/* @__PURE__ */ Zn(zi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Gn(Ii, t)), e.uuid = (t) => e.check(/* @__PURE__ */ Kn(X, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ qn(X, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ Jn(X, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ Yn(X, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ Qn(Bi, t)), e.guid = (t) => e.check(/* @__PURE__ */ Gn(Ii, t)), e.cuid = (t) => e.check(/* @__PURE__ */ $n(Vi, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ er(Hi, t)), e.ulid = (t) => e.check(/* @__PURE__ */ tr(Ui, t)), e.base64 = (t) => e.check(/* @__PURE__ */ cr(Xi, t)), e.base64url = (t) => e.check(/* @__PURE__ */ lr(Zi, t)), e.xid = (t) => e.check(/* @__PURE__ */ nr(Wi, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ rr(Gi, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ ir(Ki, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ ar(qi, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ or(Ji, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ sr(Yi, t)), e.e164 = (t) => e.check(/* @__PURE__ */ ur(Qi, t)), e.datetime = (t) => e.check(pi(t)), e.date = (t) => e.check(hi(t)), e.time = (t) => e.check(_i(t)), e.duration = (t) => e.check(yi(t));
});
function J(e) {
	return /* @__PURE__ */ Un(Pi, e);
}
var Y = /*@__PURE__*/ d("ZodStringFormat", (e, t) => {
	F.init(e, t), Ni.init(e, t);
}), Fi = /*@__PURE__*/ d("ZodEmail", (e, t) => {
	It.init(e, t), Y.init(e, t);
}), Ii = /*@__PURE__*/ d("ZodGUID", (e, t) => {
	Pt.init(e, t), Y.init(e, t);
}), X = /*@__PURE__*/ d("ZodUUID", (e, t) => {
	Ft.init(e, t), Y.init(e, t);
}), Li = /*@__PURE__*/ d("ZodURL", (e, t) => {
	Lt.init(e, t), Y.init(e, t);
});
function Ri(e) {
	return /* @__PURE__ */ Xn(Li, e);
}
var zi = /*@__PURE__*/ d("ZodEmoji", (e, t) => {
	Rt.init(e, t), Y.init(e, t);
}), Bi = /*@__PURE__*/ d("ZodNanoID", (e, t) => {
	zt.init(e, t), Y.init(e, t);
}), Vi = /*@__PURE__*/ d("ZodCUID", (e, t) => {
	Bt.init(e, t), Y.init(e, t);
}), Hi = /*@__PURE__*/ d("ZodCUID2", (e, t) => {
	Vt.init(e, t), Y.init(e, t);
}), Ui = /*@__PURE__*/ d("ZodULID", (e, t) => {
	Ht.init(e, t), Y.init(e, t);
}), Wi = /*@__PURE__*/ d("ZodXID", (e, t) => {
	Ut.init(e, t), Y.init(e, t);
}), Gi = /*@__PURE__*/ d("ZodKSUID", (e, t) => {
	Wt.init(e, t), Y.init(e, t);
}), Ki = /*@__PURE__*/ d("ZodIPv4", (e, t) => {
	Yt.init(e, t), Y.init(e, t);
}), qi = /*@__PURE__*/ d("ZodIPv6", (e, t) => {
	Xt.init(e, t), Y.init(e, t);
}), Ji = /*@__PURE__*/ d("ZodCIDRv4", (e, t) => {
	Zt.init(e, t), Y.init(e, t);
}), Yi = /*@__PURE__*/ d("ZodCIDRv6", (e, t) => {
	Qt.init(e, t), Y.init(e, t);
}), Xi = /*@__PURE__*/ d("ZodBase64", (e, t) => {
	en.init(e, t), Y.init(e, t);
}), Zi = /*@__PURE__*/ d("ZodBase64URL", (e, t) => {
	nn.init(e, t), Y.init(e, t);
}), Qi = /*@__PURE__*/ d("ZodE164", (e, t) => {
	rn.init(e, t), Y.init(e, t);
}), $i = /*@__PURE__*/ d("ZodJWT", (e, t) => {
	on.init(e, t), Y.init(e, t);
}), ea = /*@__PURE__*/ d("ZodNumber", (e, t) => {
	sn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Jr(e, t, n, r), K(e, "ZodNumber", {
		gt(e, t) {
			return this.check(/* @__PURE__ */ Sr(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ Cr(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ Cr(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ br(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ xr(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ xr(e, t));
		},
		int(e) {
			return this.check(ra(e));
		},
		safe(e) {
			return this.check(ra(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ Sr(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ Cr(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ br(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ xr(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ wr(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ wr(e, t));
		},
		finite() {
			return this;
		}
	});
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function ta(e) {
	return /* @__PURE__ */ gr(ea, e);
}
var na = /*@__PURE__*/ d("ZodNumberFormat", (e, t) => {
	cn.init(e, t), ea.init(e, t);
});
function ra(e) {
	return /* @__PURE__ */ _r(na, e);
}
var ia = /*@__PURE__*/ d("ZodUnknown", (e, t) => {
	ln.init(e, t), q.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function aa() {
	return /* @__PURE__ */ vr(ia);
}
var oa = /*@__PURE__*/ d("ZodNever", (e, t) => {
	un.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Yr(e, t, n, r);
});
function sa(e) {
	return /* @__PURE__ */ yr(oa, e);
}
var ca = /*@__PURE__*/ d("ZodArray", (e, t) => {
	fn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ei(e, t, n, r), e.element = t.element, K(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ B(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ B(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ Tr(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ Er(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function la(e, t) {
	return /* @__PURE__ */ Rr(ca, e, t);
}
var ua = /*@__PURE__*/ d("ZodObject", (e, t) => {
	gn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ti(e, t, n, r), v(e, "shape", () => t.shape), K(e, "ZodObject", {
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
				catchall: aa()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: aa()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: sa()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return he(this, e);
		},
		safeExtend(e) {
			return ge(this, e);
		},
		merge(e) {
			return _e(this, e);
		},
		pick(e) {
			return pe(this, e);
		},
		omit(e) {
			return me(this, e);
		},
		partial(...e) {
			return ve(Sa, this, e[0]);
		},
		required(...e) {
			return ye(Ma, this, e[0]);
		}
	});
});
function Z(e, t) {
	return new ua({
		type: "object",
		shape: e ?? {},
		...T(t)
	});
}
var da = /*@__PURE__*/ d("ZodUnion", (e, t) => {
	vn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ni(e, t, n, r), e.options = t.options;
});
function fa(e, t) {
	return new da({
		type: "union",
		options: e,
		...T(t)
	});
}
var pa = /*@__PURE__*/ d("ZodDiscriminatedUnion", (e, t) => {
	da.init(e, t), yn.init(e, t);
});
function ma(e, t, n) {
	return new pa({
		type: "union",
		options: t,
		discriminator: e,
		...T(n)
	});
}
var ha = /*@__PURE__*/ d("ZodIntersection", (e, t) => {
	bn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ri(e, t, n, r);
});
function ga(e, t) {
	return new ha({
		type: "intersection",
		left: e,
		right: t
	});
}
var _a = /*@__PURE__*/ d("ZodEnum", (e, t) => {
	Sn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Xr(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new _a({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new _a({
			...t,
			checks: [],
			...T(r),
			entries: i
		});
	};
});
function Q(e, t) {
	return new _a({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...T(t)
	});
}
var va = /*@__PURE__*/ d("ZodLiteral", (e, t) => {
	Cn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Zr(e, t, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", { get() {
		if (t.values.length > 1) throw Error("This schema contains multiple valid literal values. Use `.values` instead.");
		return t.values[0];
	} });
});
function ya(e, t) {
	return new va({
		type: "literal",
		values: Array.isArray(e) ? e : [e],
		...T(t)
	});
}
var ba = /*@__PURE__*/ d("ZodTransform", (e, t) => {
	wn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => $r(e, t, n, r), e._zod.parse = (n, r) => {
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
function xa(e) {
	return new ba({
		type: "transform",
		transform: e
	});
}
var Sa = /*@__PURE__*/ d("ZodOptional", (e, t) => {
	En.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ca(e) {
	return new Sa({
		type: "optional",
		innerType: e
	});
}
var wa = /*@__PURE__*/ d("ZodExactOptional", (e, t) => {
	Dn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ta(e) {
	return new wa({
		type: "optional",
		innerType: e
	});
}
var Ea = /*@__PURE__*/ d("ZodNullable", (e, t) => {
	On.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ii(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Da(e) {
	return new Ea({
		type: "nullable",
		innerType: e
	});
}
var Oa = /*@__PURE__*/ d("ZodDefault", (e, t) => {
	kn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => oi(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function ka(e, t) {
	return new Oa({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : le(t);
		}
	});
}
var Aa = /*@__PURE__*/ d("ZodPrefault", (e, t) => {
	jn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => si(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ja(e, t) {
	return new Aa({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : le(t);
		}
	});
}
var Ma = /*@__PURE__*/ d("ZodNonOptional", (e, t) => {
	Mn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ai(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Na(e, t) {
	return new Ma({
		type: "nonoptional",
		innerType: e,
		...T(t)
	});
}
var Pa = /*@__PURE__*/ d("ZodCatch", (e, t) => {
	Pn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ci(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function Fa(e, t) {
	return new Pa({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var Ia = /*@__PURE__*/ d("ZodPipe", (e, t) => {
	Fn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => li(e, t, n, r), e.in = t.in, e.out = t.out;
});
function La(e, t) {
	return new Ia({
		type: "pipe",
		in: e,
		out: t
	});
}
var Ra = /*@__PURE__*/ d("ZodReadonly", (e, t) => {
	In.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => ui(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function za(e) {
	return new Ra({
		type: "readonly",
		innerType: e
	});
}
var Ba = /*@__PURE__*/ d("ZodCustom", (e, t) => {
	Rn.init(e, t), q.init(e, t), e._zod.processJSONSchema = (t, n, r) => Qr(e, t, n, r);
});
function Va(e, t = {}) {
	return /* @__PURE__ */ zr(Ba, e, t);
}
function Ha(e, t) {
	return /* @__PURE__ */ Br(e, t);
}
//#endregion
//#region src/ConfigSchema.ts
var Ua = Q(["magentoGraphql"]);
Q(["tile", "gallery"]);
var Wa = Z({
	src: Ri(),
	alt: J(),
	width: ta().optional(),
	height: ta().optional(),
	role: Q([
		"base",
		"thumbnail",
		"hover",
		"gallery"
	]).optional()
}), Ga = ma("mode", [Z({ mode: ya("gallery") }), Z({
	mode: ya("tile"),
	maxColumns: ta().int().min(1).max(2)
})]), Ka = Z({
	data: Z({ images: la(Wa) }),
	settings: Ga,
	integration: Z({ requires: la(Ua) }).optional()
}).strict();
function qa(e) {
	return Ka.parse(e);
}
//#endregion
//#region src/ConfigSchemaRuntime.ts
var Ja = Z({
	integrations: Z({ magentoGraphql: Z({ api: J().url() }) }),
	context: Z({
		storeCode: J(),
		sku: J()
	})
});
function Ya(e) {
	return Ja.parse(e);
}
//#endregion
//#region src/Config.ts
var Xa = "productgallery";
function Za(e, t, n, r) {
	try {
		let i = Qa(qa({
			...e,
			data: { images: t }
		}), Ya(n));
		return r?.log("bootstrap", "Config resolved", i), Object.freeze(i);
	} catch (e) {
		throw r?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
function Qa(e, t) {
	return {
		tiles: e.data.images,
		settings: e.settings,
		runtime: {
			storeCode: t.context.storeCode,
			sku: t.context.sku
		},
		integrations: { magentoGraphql: t.integrations?.magentoGraphql }
	};
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var $a = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function eo() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var to = class {
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
		let e = eo();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, no = $a.Provider, ro = ({ children: e, hostElement: t }) => {
	let n = new to(Xa, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ o(no, {
		value: n,
		children: e
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function io() {
	let e = n($a);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/state/System/SystemState.tsx
var ao = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/graphql/graphqlResponseNormalizer.ts
function oo(e, t) {
	try {
		return JSON.parse(e);
	} catch {
		let n = e.indexOf("{\"data\""), r = e.indexOf("{\"errors\""), i = n !== -1 && r !== -1 ? Math.min(n, r) : n === -1 ? r === -1 ? -1 : r : n;
		if (i === -1) throw Error("GraphQL fallback failed: cannot find JSON payload start.");
		let a = e.slice(i);
		t?.log("graphql-invalid-json", "GraphQL normalised raw text", { candidate: a });
		try {
			let e = JSON.parse(a);
			return console.warn("⚠ DEMO PATCH ACTIVE: GraphQL response was polluted. Fallback parser used."), e;
		} catch {
			throw Error("GraphQL fallback parsing failed.");
		}
	}
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/graphql/graphqlClient.ts
function so(e, t, n) {
	return async function(r, i) {
		let a = await fetch(e, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Store: t
			},
			body: JSON.stringify({
				query: r,
				variables: i
			})
		});
		if (!a.ok) throw n?.log("graphql", "GraphQL error", {
			api_endpoint: e,
			query: r,
			variables: i
		}, "error"), Error(`Network error: ${a.status}`);
		let o = await a.text(), s;
		try {
			s = JSON.parse(o);
		} catch {
			n?.log("graphql-failed-query", "GraphQL Failed query", {
				api_endpoint: e,
				query: r,
				variables: i
			}, "error"), n?.log("graphql-invalid-json", "GraphQL returned non-JSON response", {
				endpoint: e,
				status: a.status,
				textSnippet: o.slice(0, 500)
			}), s = oo(o, n), n?.log("graphql-invalid-json", "GraphQL failed raw text", {
				endpoint: e,
				status: a.status,
				textSnippet: o
			}), n?.log("graphql-invalid-json", "GraphQL patched response", {
				endpoint: e,
				status: a.status,
				json: s
			});
		}
		return s?.data;
	};
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/graphql/graphqlCache.ts
var co = 36e5, lo = class {
	ttl;
	constructor(e = co) {
		this.ttl = e;
	}
	get(e, t = this.ttl) {
		if (typeof sessionStorage > "u") return null;
		let n = sessionStorage.getItem(e);
		if (n === null) return null;
		let r = JSON.parse(n);
		return Date.now() - r.timestamp > t ? null : r.data;
	}
	set(e, t) {
		if (typeof sessionStorage > "u") return;
		let n = {
			data: t,
			timestamp: Date.now()
		};
		sessionStorage.setItem(e, JSON.stringify(n));
	}
	getKey(e, t, n) {
		return `reactedge:gql:${n}:${btoa(e)}:${JSON.stringify(t)}`;
	}
};
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/graphql/graphql.service.ts
function uo(e, t, n) {
	let r = so(e, t, n), i = /* @__PURE__ */ new Map();
	return async function(e, n, a = {
		cache: !0,
		ttl: 6e4
	}) {
		if (!a.cache) return r(e, n);
		let o = new lo(a.ttl), s = o.getKey(e, n, t), c = o.get(s);
		if (c) return c;
		if (i.has(s)) return i.get(s);
		let l = r(e, n).then((e) => (o.set(s, e), i.delete(s), e)).catch((e) => {
			i.delete(s);
			let t = o.get(s, Infinity);
			if (t) return t;
			throw e;
		});
		return i.set(s, l), l;
	};
}
//#endregion
//#region src/state/System/SystemStateProvider.tsx
var fo = ao.Provider, po = ({ children: e, config: t, runtime: n, activity: r }) => {
	if (!t?.magentoGraphql?.api) throw Error("GraphQL client cannot be created without API endpoint");
	let a = i(() => uo(t.magentoGraphql.api, n.storeCode, r), [
		t.magentoGraphql?.api,
		n.storeCode,
		r
	]);
	return /* @__PURE__ */ o(fo, {
		value: { graphqlClient: a },
		children: e
	});
}, mo = ({ image: e, activeIndex: t, onClose: n, onPrevious: r, onNext: i }) => /* @__PURE__ */ s("div", {
	className: "product-gallery__zoom",
	"data-gallery-zoom": !0,
	children: [
		/* @__PURE__ */ o("button", {
			type: "button",
			className: "product-gallery__zoom-minify",
			onClick: n,
			"aria-label": "Close zoom view",
			"data-gallery-minify": !0,
			children: "Minify ✕"
		}),
		/* @__PURE__ */ o("button", {
			type: "button",
			className: "product-gallery__zoom-arrow product-gallery__zoom-arrow--previous",
			onClick: r,
			"aria-label": "Previous image",
			"data-gallery-prev": !0,
			children: "‹"
		}),
		/* @__PURE__ */ o("button", {
			type: "button",
			className: "product-gallery__zoom-arrow product-gallery__zoom-arrow--next",
			onClick: i,
			"aria-label": "Next image",
			"data-gallery-next": !0,
			children: "›"
		}),
		/* @__PURE__ */ o("img", {
			src: e.src,
			alt: e.alt,
			className: "product-gallery__zoom-image",
			"data-gallery-main": !0
		}, t)
	]
});
//#endregion
//#region src/hooks/useGallery.tsx
function ho(e) {
	let [t, n] = a(0), [i, o] = a(!1);
	return r(() => {
		e.length !== 0 && n(e.length - 1);
	}, [e]), {
		activeIndex: t,
		setActiveIndex: n,
		zoomed: i,
		setZoomed: o,
		previous: () => {
			n((t) => t === 0 ? e.length - 1 : t - 1);
		},
		next: () => {
			n((t) => t === e.length - 1 ? 0 : t + 1);
		},
		select: (e) => {
			n(e);
		},
		currentImage: e[t]
	};
}
//#endregion
//#region src/components/global/Circle.tsx
function go({ size: e = 40 }) {
	return /* @__PURE__ */ o("svg", {
		width: e,
		height: e,
		viewBox: "0 0 50 50",
		"aria-hidden": "true",
		children: /* @__PURE__ */ o("circle", {
			cx: "25",
			cy: "25",
			r: "20",
			fill: "none",
			stroke: "#d3cdcd",
			strokeWidth: "2",
			strokeDasharray: "20 80",
			strokeLinecap: "round",
			children: /* @__PURE__ */ o("animateTransform", {
				attributeName: "transform",
				type: "rotate",
				from: "0 25 25",
				to: "360 25 25",
				dur: "0.8s",
				repeatCount: "indefinite"
			})
		})
	});
}
//#endregion
//#region src/components/global/StandardSpinner.tsx
function _o({ size: e = 100 }) {
	return /* @__PURE__ */ o("div", {
		className: "standard-widget-loader-wrapper",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ o(go, { size: e })
	});
}
//#endregion
//#region src/state/Selection/SelectionState.tsx
var vo = {
	code: null,
	value: null
}, yo = e(void 0);
//#endregion
//#region src/state/Selection/useSelectionState.tsx
function $() {
	let e = n(yo);
	if (!e) throw Error("useSelectionState must be used within SelectionStateProvider");
	return e;
}
//#endregion
//#region src/components/ProductTiledGallery/TileGrid.tsx
var bo = ({ tiles: e, maxColumns: t, onSelect: n }) => {
	let { selectionLoading: r, selectionImage: i } = $();
	return /* @__PURE__ */ o("div", {
		className: "product-gallery__tile-grid",
		style: { "--gallery-max-columns": t },
		"data-gallery-tiled": !0,
		children: e.map((e, t) => /* @__PURE__ */ s("button", {
			type: "button",
			className: "product-gallery__tile",
			onClick: () => n(t),
			children: [/* @__PURE__ */ o("img", {
				src: e.src,
				alt: e.alt,
				className: "product-gallery__tile-image",
				"data-gallery-tile": !0
			}), r && e.src === i?.src && /* @__PURE__ */ o("div", {
				className: "product-gallery__loader",
				children: /* @__PURE__ */ o(_o, {})
			})]
		}, t))
	});
}, xo = ({ tiles: e, maxColumns: t }) => {
	let n = ho(e);
	return e.length === 0 || n.currentImage === void 0 ? null : n.zoomed ? /* @__PURE__ */ o(mo, {
		image: n.currentImage,
		activeIndex: n.activeIndex,
		onClose: () => n.setZoomed(!1),
		onPrevious: n.previous,
		onNext: n.next
	}) : /* @__PURE__ */ o(bo, {
		tiles: e,
		maxColumns: t,
		onSelect: (e) => {
			n.setActiveIndex(e), n.setZoomed(!0);
		}
	});
}, So = () => /* @__PURE__ */ o(_o, {}), Co = ({ tiles: e }) => {
	let t = ho(e), { selectionLoading: n, selectionImage: r } = $();
	return e.length === 0 || t.currentImage === void 0 ? null : /* @__PURE__ */ s("div", {
		className: "product-gallery__slider",
		"data-gallery-classic": !0,
		children: [
			/* @__PURE__ */ o("button", {
				type: "button",
				className: "product-gallery__slider-arrow product-gallery__slider-arrow--previous",
				onClick: t.previous,
				"aria-label": "Previous image",
				"data-gallery-prev": !0,
				children: "‹"
			}),
			/* @__PURE__ */ o("button", {
				type: "button",
				className: "product-gallery__slider-arrow product-gallery__slider-arrow--next",
				onClick: t.next,
				"aria-label": "Next image",
				"data-gallery-next": !0,
				children: "›"
			}),
			/* @__PURE__ */ s("div", {
				className: "product-gallery__slider-main",
				children: [/* @__PURE__ */ o("img", {
					src: t.currentImage.src,
					alt: t.currentImage.alt,
					className: "product-gallery__slider-main-image",
					"data-gallery-main": !0
				}), n && /* @__PURE__ */ o(So, {})]
			}),
			/* @__PURE__ */ o("div", {
				className: "product-gallery__slider-thumbnails",
				children: e.map((e, i) => /* @__PURE__ */ s("button", {
					type: "button",
					className: ["product-gallery__slider-thumbnail", i === t.activeIndex ? "product-gallery__slider-thumbnail--active" : ""].filter(Boolean).join(" "),
					onClick: () => t.select(i),
					"aria-label": `View image ${i + 1}`,
					"aria-current": i === t.activeIndex ? "true" : void 0,
					children: [/* @__PURE__ */ o("img", {
						src: e.src,
						alt: e.alt,
						"data-gallery-thumb": !0
					}), n && e.src === r?.src && /* @__PURE__ */ o(So, {})]
				}, i))
			})
		]
	});
};
//#endregion
//#region src/state/System/useSystemState.ts
function wo() {
	let e = n(ao);
	if (!e) throw Error("useSystemState must be used within SystemStateProvider");
	return e;
}
//#endregion
//#region src/lib/error.ts
function To(e) {
	return e instanceof Error ? e : {
		name: "unknonw",
		message: e
	};
}
//#endregion
//#region src/services/magento/fetchMagentoGalleryByAttributeData.tsx
var Eo = "\n  query ProductGallery($sku: String!, $code: String!, $value: String!) {\n    products(filter: { sku: { eq: $sku } }) {\n        items {\n            sku\n            ... on ConfigurableProduct {\n                galleryByAttribute(\n                    code: $code\n                    value: $value\n                ) {\n                    url\n                    label\n                    position\n                    disabled\n                }\n            }\n        }\n    }\n   }\n";
async function Do(e, t, n, r) {
	let i = (await e(Eo, {
		sku: t,
		code: n,
		value: r
	})).products.items[0];
	return i?.galleryByAttribute ? i.galleryByAttribute.map((e) => ({
		src: e.url,
		...e.label === null ? {} : { alt: e.label }
	})) : [];
}
//#endregion
//#region src/hooks/infra/useMagentoGalleryByAttribute.tsx
function Oo(e, n, i, o) {
	let [s, c] = a(null), { selectionImage: l, setSelectionImage: u, setSelectionLoading: d } = $(), { graphqlClient: f } = wo(), p = t(async () => {
		if (e && n !== void 0 && i !== null && o !== null) {
			d(!0), c(null);
			try {
				let e = await Do(f, n, i, o);
				e.length > 0 && u(e[0]);
			} catch (e) {
				c(To(e));
			} finally {
				d(!1);
			}
		}
	}, [
		e,
		n,
		f,
		i,
		o,
		u,
		d
	]);
	return r(() => {
		p();
	}, [p]), {
		selectionImage: l,
		error: s,
		refetch: p
	};
}
//#endregion
//#region src/hooks/domain/useGalleryData.tsx
function ko(e) {
	let { selection: t } = $();
	Oo(t.code !== null && t.value !== null, e, t.code, t.value);
}
//#endregion
//#region src/components/ProductImage.tsx
var Ao = ({ image: e }) => /* @__PURE__ */ o("img", {
	src: e.src,
	alt: e.alt ?? "",
	className: "product-gallery__image",
	"data-gallery-main": !0,
	"data-gallery-thumb": !0
}), jo = ({ config: e, bootstrap: t }) => {
	ko(e.runtime.sku);
	let { selectionImage: n } = $(), r = i(() => [...t, ...n ? [n] : []], [t, n]);
	return r.length === 1 ? /* @__PURE__ */ o(Ao, { image: r[0] }) : /* @__PURE__ */ o("div", { children: e.settings.mode === "tile" ? /* @__PURE__ */ o(xo, {
		tiles: r,
		maxColumns: e.settings.maxColumns
	}) : /* @__PURE__ */ o(Co, { tiles: r }) });
}, Mo = yo.Provider, No = ({ children: e, activity: t }) => {
	let [n, i] = a(vo), [s, c] = a(!1), [l, u] = a();
	return r(() => {
		let e = (e) => {
			let n = e.detail;
			t?.log("product-selection", "Product Attribute Changed", n), i(n);
		};
		return window.addEventListener("reactedge:signal", e), () => {
			window.removeEventListener("reactedge:signal", e);
		};
	}, [t]), /* @__PURE__ */ o(Mo, {
		value: {
			selection: n,
			selectionLoading: s,
			setSelectionLoading: c,
			selectionImage: l,
			setSelectionImage: u
		},
		children: e
	});
};
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
function Po({ contract: e, bootstrap: t, runtime: n }) {
	let r = io(), i = Za(e, t, n, r);
	return i ? /* @__PURE__ */ o(po, {
		config: i.integrations,
		runtime: i.runtime,
		activity: r,
		children: /* @__PURE__ */ o(No, {
			activity: r,
			children: /* @__PURE__ */ o(jo, {
				config: i,
				bootstrap: i.tiles
			})
		})
	}) : null;
}
//#endregion
//#region src/bootstrap/widget-root.tsx
function Fo({ contract: e, bootstrap: t, runtime: n, hostElement: r }) {
	return /* @__PURE__ */ o("div", {
		className: `reactedge-${Xa}`,
		children: /* @__PURE__ */ o(ro, {
			...r ? { hostElement: r } : {},
			children: /* @__PURE__ */ o(Po, {
				contract: e,
				bootstrap: t,
				runtime: n
			})
		})
	});
}
//#endregion
//#region src/Widget.tsx
function Io({ container: e, contract: t, bootstrap: n, runtime: r, hydrate: i = !1 }) {
	let a = /* @__PURE__ */ o(Fo, {
		contract: t,
		bootstrap: n,
		runtime: r
	});
	i ? l(e, a) : c(e).render(a);
}
//#endregion
export { Io as Widget };
