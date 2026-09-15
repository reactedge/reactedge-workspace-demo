import { createContext as e, useCallback as t, useContext as n, useEffect as r, useLayoutEffect as i, useMemo as a, useRef as o, useState as s } from "react";
import { Fragment as c, jsx as l, jsxs as u } from "react/jsx-runtime";
import { createRoot as d, hydrateRoot as f } from "react-dom/client";
//#region ../../node_modules/zod/v4/core/core.js
var p;
function m(e, t, n) {
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
var h = class extends Error {
	constructor() {
		super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
	}
}, g = class extends Error {
	constructor(e) {
		super(`Encountered unidirectional transform during encode: ${e}`), this.name = "ZodEncodeError";
	}
};
(p = globalThis).__zod_globalConfig ?? (p.__zod_globalConfig = {});
var _ = globalThis.__zod_globalConfig;
function v(e) {
	return e && Object.assign(_, e), _;
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
function ie(e) {
	let t = +!!e.startsWith("^"), n = e.endsWith("$") ? e.length - 1 : e.length;
	return e.slice(t, n);
}
function ae(e, t) {
	let n = e / t, r = Math.round(n), i = 2 ** -52 * Math.max(Math.abs(n), 1);
	return Math.abs(n - r) < i ? 0 : n - r;
}
var oe = /* @__PURE__*/ Symbol("evaluating");
function y(e, t, n) {
	let r;
	Object.defineProperty(e, t, {
		get() {
			if (r !== oe) return r === void 0 && (r = oe, r = n()), r;
		},
		set(n) {
			Object.defineProperty(e, t, { value: n });
		},
		configurable: !0
	});
}
function b(e, t, n) {
	Object.defineProperty(e, t, {
		value: n,
		writable: !0,
		enumerable: !0,
		configurable: !0
	});
}
function x(...e) {
	let t = {};
	for (let n of e) {
		let e = Object.getOwnPropertyDescriptors(n);
		Object.assign(t, e);
	}
	return Object.defineProperties({}, t);
}
function se(e) {
	return JSON.stringify(e);
}
function ce(e) {
	return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
var le = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
function ue(e) {
	return typeof e == "object" && !!e && !Array.isArray(e);
}
var de = /* @__PURE__*/ ne(() => {
	if (_.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare")) return !1;
	try {
		return Function(""), !0;
	} catch {
		return !1;
	}
});
function S(e) {
	if (ue(e) === !1) return !1;
	let t = e.constructor;
	if (t === void 0 || typeof t != "function") return !0;
	let n = t.prototype;
	return ue(n) !== !1 && Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") !== !1;
}
function fe(e) {
	return S(e) ? { ...e } : Array.isArray(e) ? [...e] : e instanceof Map ? new Map(e) : e instanceof Set ? new Set(e) : e;
}
var pe = /* @__PURE__*/ new Set([
	"string",
	"number",
	"symbol"
]);
function me(e) {
	return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function C(e, t, n) {
	let r = new e._zod.constr(t ?? e._zod.def);
	return (!t || n?.parent) && (r._zod.parent = e), r;
}
function w(e) {
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
function he(e) {
	return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
}
var ge = {
	safeint: [-(2 ** 53 - 1), 2 ** 53 - 1],
	int32: [-2147483648, 2147483647],
	uint32: [0, 4294967295],
	float32: [-34028234663852886e22, 34028234663852886e22],
	float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function _e(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".pick() cannot be used on object schemas containing refinements");
	return C(e, x(e._zod.def, {
		get shape() {
			let e = {};
			for (let r in t) {
				if (!(r in n.shape)) throw Error(`Unrecognized key: "${r}"`);
				t[r] && (e[r] = n.shape[r]);
			}
			return b(this, "shape", e), e;
		},
		checks: []
	}));
}
function ve(e, t) {
	let n = e._zod.def, r = n.checks;
	if (r && r.length > 0) throw Error(".omit() cannot be used on object schemas containing refinements");
	return C(e, x(e._zod.def, {
		get shape() {
			let r = { ...e._zod.def.shape };
			for (let e in t) {
				if (!(e in n.shape)) throw Error(`Unrecognized key: "${e}"`);
				t[e] && delete r[e];
			}
			return b(this, "shape", r), r;
		},
		checks: []
	}));
}
function ye(e, t) {
	if (!S(t)) throw Error("Invalid input to extend: expected a plain object");
	let n = e._zod.def.checks;
	if (n && n.length > 0) {
		let n = e._zod.def.shape;
		for (let e in t) if (Object.getOwnPropertyDescriptor(n, e) !== void 0) throw Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
	}
	return C(e, x(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return b(this, "shape", n), n;
	} }));
}
function be(e, t) {
	if (!S(t)) throw Error("Invalid input to safeExtend: expected a plain object");
	return C(e, x(e._zod.def, { get shape() {
		let n = {
			...e._zod.def.shape,
			...t
		};
		return b(this, "shape", n), n;
	} }));
}
function xe(e, t) {
	if (e._zod.def.checks?.length) throw Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
	return C(e, x(e._zod.def, {
		get shape() {
			let n = {
				...e._zod.def.shape,
				...t._zod.def.shape
			};
			return b(this, "shape", n), n;
		},
		get catchall() {
			return t._zod.def.catchall;
		},
		checks: t._zod.def.checks ?? []
	}));
}
function Se(e, t, n) {
	let r = t._zod.def.checks;
	if (r && r.length > 0) throw Error(".partial() cannot be used on object schemas containing refinements");
	return C(t, x(t._zod.def, {
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
			return b(this, "shape", i), i;
		},
		checks: []
	}));
}
function Ce(e, t, n) {
	return C(t, x(t._zod.def, { get shape() {
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
		return b(this, "shape", i), i;
	} }));
}
function T(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue !== !0) return !0;
	return !1;
}
function we(e, t = 0) {
	if (e.aborted === !0) return !0;
	for (let n = t; n < e.issues.length; n++) if (e.issues[n]?.continue === !1) return !0;
	return !1;
}
function E(e, t) {
	return t.map((t) => {
		var n;
		return (n = t).path ?? (n.path = []), t.path.unshift(e), t;
	});
}
function Te(e) {
	return typeof e == "string" ? e : e?.message;
}
function D(e, t, n) {
	let r = e.message ? e.message : Te(e.inst?._zod.def?.error?.(e)) ?? Te(t?.error?.(e)) ?? Te(n.customError?.(e)) ?? Te(n.localeError?.(e)) ?? "Invalid input", { inst: i, continue: a, input: o, ...s } = e;
	return s.path ??= [], s.message = r, t?.reportInput && (s.input = o), s;
}
function Ee(e) {
	return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
}
function De(...e) {
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
var Oe = (e, t) => {
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
}, ke = m("$ZodError", Oe), Ae = m("$ZodError", Oe, { Parent: Error });
function je(e, t = (e) => e.message) {
	let n = {}, r = [];
	for (let i of e.issues) i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
	return {
		formErrors: r,
		fieldErrors: n
	};
}
function Me(e, t = (e) => e.message) {
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
var Ne = (e) => (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !1
	} : { async: !1 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise) throw new h();
	if (o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => D(e, a, v())));
		throw le(t, i?.callee), t;
	}
	return o.value;
}, Pe = (e) => async (t, n, r, i) => {
	let a = r ? {
		...r,
		async: !0
	} : { async: !0 }, o = t._zod.run({
		value: n,
		issues: []
	}, a);
	if (o instanceof Promise && (o = await o), o.issues.length) {
		let t = new ((i?.Err) ?? e)(o.issues.map((e) => D(e, a, v())));
		throw le(t, i?.callee), t;
	}
	return o.value;
}, Fe = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		async: !1
	} : { async: !1 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	if (a instanceof Promise) throw new h();
	return a.issues.length ? {
		success: !1,
		error: new (e ?? ke)(a.issues.map((e) => D(e, i, v())))
	} : {
		success: !0,
		data: a.value
	};
}, Ie = /* @__PURE__*/ Fe(Ae), Le = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		async: !0
	} : { async: !0 }, a = t._zod.run({
		value: n,
		issues: []
	}, i);
	return a instanceof Promise && (a = await a), a.issues.length ? {
		success: !1,
		error: new e(a.issues.map((e) => D(e, i, v())))
	} : {
		success: !0,
		data: a.value
	};
}, Re = /* @__PURE__*/ Le(Ae), ze = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Ne(e)(t, n, i);
}, Be = (e) => (t, n, r) => Ne(e)(t, n, r), Ve = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Pe(e)(t, n, i);
}, He = (e) => async (t, n, r) => Pe(e)(t, n, r), Ue = (e) => (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Fe(e)(t, n, i);
}, We = (e) => (t, n, r) => Fe(e)(t, n, r), Ge = (e) => async (t, n, r) => {
	let i = r ? {
		...r,
		direction: "backward"
	} : { direction: "backward" };
	return Le(e)(t, n, i);
}, Ke = (e) => async (t, n, r) => Le(e)(t, n, r), qe = /^[cC][0-9a-z]{6,}$/, Je = /^[0-9a-z]+$/, Ye = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, Xe = /^[0-9a-vA-V]{20}$/, Ze = /^[A-Za-z0-9]{27}$/, Qe = /^[a-zA-Z0-9_-]{21}$/, $e = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, et = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, tt = (e) => e ? RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, nt = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, rt = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function it() {
	return new RegExp(rt, "u");
}
var at = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, ot = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, st = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, ct = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, lt = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, ut = /^[A-Za-z0-9_-]*$/, dt = /^https?$/, ft = /^\+[1-9]\d{6,14}$/, pt = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", mt = /*@__PURE__*/ RegExp(`^${pt}$`);
function ht(e) {
	let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
	return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function gt(e) {
	return RegExp(`^${ht(e)}$`);
}
function _t(e) {
	let t = ht({ precision: e.precision }), n = ["Z"];
	e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
	let r = `${t}(?:${n.join("|")})`;
	return RegExp(`^${pt}T(?:${r})$`);
}
var vt = (e) => {
	let t = e ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}` : "[\\s\\S]*";
	return RegExp(`^${t}$`);
}, yt = /^-?\d+$/, bt = /^-?\d+(?:\.\d+)?$/, xt = /^(?:true|false)$/i, St = /^[^A-Z]*$/, Ct = /^[^a-z]*$/, O = /*@__PURE__*/ m("$ZodCheck", (e, t) => {
	var n;
	e._zod ??= {}, e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
}), wt = {
	number: "number",
	bigint: "bigint",
	object: "date"
}, Tt = /*@__PURE__*/ m("$ZodCheckLessThan", (e, t) => {
	O.init(e, t);
	let n = wt[typeof t.value];
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
}), Et = /*@__PURE__*/ m("$ZodCheckGreaterThan", (e, t) => {
	O.init(e, t);
	let n = wt[typeof t.value];
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
}), Dt = /*@__PURE__*/ m("$ZodCheckMultipleOf", (e, t) => {
	O.init(e, t), e._zod.onattach.push((e) => {
		var n;
		(n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
	}), e._zod.check = (n) => {
		if (typeof n.value != typeof t.value) throw Error("Cannot mix number and bigint in multiple_of check.");
		(typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : ae(n.value, t.value) === 0) || n.issues.push({
			origin: typeof n.value,
			code: "not_multiple_of",
			divisor: t.value,
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), Ot = /*@__PURE__*/ m("$ZodCheckNumberFormat", (e, t) => {
	O.init(e, t), t.format = t.format || "float64";
	let n = t.format?.includes("int"), r = n ? "int" : "number", [i, a] = ge[t.format];
	e._zod.onattach.push((e) => {
		let r = e._zod.bag;
		r.format = t.format, r.minimum = i, r.maximum = a, n && (r.pattern = yt);
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
}), kt = /*@__PURE__*/ m("$ZodCheckMaxLength", (e, t) => {
	var n;
	O.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.maximum ?? Infinity;
		t.maximum < n && (e._zod.bag.maximum = t.maximum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length <= t.maximum) return;
		let i = Ee(r);
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
}), At = /*@__PURE__*/ m("$ZodCheckMinLength", (e, t) => {
	var n;
	O.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag.minimum ?? -Infinity;
		t.minimum > n && (e._zod.bag.minimum = t.minimum);
	}), e._zod.check = (n) => {
		let r = n.value;
		if (r.length >= t.minimum) return;
		let i = Ee(r);
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
}), jt = /*@__PURE__*/ m("$ZodCheckLengthEquals", (e, t) => {
	var n;
	O.init(e, t), (n = e._zod.def).when ?? (n.when = (e) => {
		let t = e.value;
		return !re(t) && t.length !== void 0;
	}), e._zod.onattach.push((e) => {
		let n = e._zod.bag;
		n.minimum = t.length, n.maximum = t.length, n.length = t.length;
	}), e._zod.check = (n) => {
		let r = n.value, i = r.length;
		if (i === t.length) return;
		let a = Ee(r), o = i > t.length;
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
}), Mt = /*@__PURE__*/ m("$ZodCheckStringFormat", (e, t) => {
	var n, r;
	O.init(e, t), e._zod.onattach.push((e) => {
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
}), Nt = /*@__PURE__*/ m("$ZodCheckRegex", (e, t) => {
	Mt.init(e, t), e._zod.check = (n) => {
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
}), Pt = /*@__PURE__*/ m("$ZodCheckLowerCase", (e, t) => {
	t.pattern ??= St, Mt.init(e, t);
}), Ft = /*@__PURE__*/ m("$ZodCheckUpperCase", (e, t) => {
	t.pattern ??= Ct, Mt.init(e, t);
}), It = /*@__PURE__*/ m("$ZodCheckIncludes", (e, t) => {
	O.init(e, t);
	let n = me(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
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
}), Lt = /*@__PURE__*/ m("$ZodCheckStartsWith", (e, t) => {
	O.init(e, t);
	let n = RegExp(`^${me(t.prefix)}.*`);
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
}), Rt = /*@__PURE__*/ m("$ZodCheckEndsWith", (e, t) => {
	O.init(e, t);
	let n = RegExp(`.*${me(t.suffix)}$`);
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
}), zt = /*@__PURE__*/ m("$ZodCheckOverwrite", (e, t) => {
	O.init(e, t), e._zod.check = (e) => {
		e.value = t.tx(e.value);
	};
}), Bt = class {
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
}, Vt = {
	major: 4,
	minor: 4,
	patch: 3
}, k = /*@__PURE__*/ m("$ZodType", (e, t) => {
	var n;
	e ??= {}, e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Vt;
	let r = [...e._zod.def.checks ?? []];
	e._zod.traits.has("$ZodCheck") && r.unshift(e);
	for (let t of r) for (let n of t._zod.onattach) n(e);
	if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), e._zod.deferred?.push(() => {
		e._zod.run = e._zod.parse;
	});
	else {
		let t = (e, t, n) => {
			let r = T(e), i;
			for (let a of t) {
				if (a._zod.def.when) {
					if (we(e) || !a._zod.def.when(e)) continue;
				} else if (r) continue;
				let t = e.issues.length, o = a._zod.check(e);
				if (o instanceof Promise && n?.async === !1) throw new h();
				if (i || o instanceof Promise) i = (i ?? Promise.resolve()).then(async () => {
					await o, e.issues.length !== t && (r ||= T(e, t));
				});
				else {
					if (e.issues.length === t) continue;
					r ||= T(e, t);
				}
			}
			return i ? i.then(() => e) : e;
		}, n = (n, i, a) => {
			if (T(n)) return n.aborted = !0, n;
			let o = t(i, r, a);
			if (o instanceof Promise) {
				if (a.async === !1) throw new h();
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
				if (a.async === !1) throw new h();
				return o.then((e) => t(e, r, a));
			}
			return t(o, r, a);
		};
	}
	y(e, "~standard", () => ({
		validate: (t) => {
			try {
				let n = Ie(e, t);
				return n.success ? { value: n.data } : { issues: n.error?.issues };
			} catch {
				return Re(e, t).then((e) => e.success ? { value: e.data } : { issues: e.error?.issues });
			}
		},
		vendor: "zod",
		version: 1
	}));
}), Ht = /*@__PURE__*/ m("$ZodString", (e, t) => {
	k.init(e, t), e._zod.pattern = [...e?._zod.bag?.patterns ?? []].pop() ?? vt(e._zod.bag), e._zod.parse = (n, r) => {
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
}), A = /*@__PURE__*/ m("$ZodStringFormat", (e, t) => {
	Mt.init(e, t), Ht.init(e, t);
}), Ut = /*@__PURE__*/ m("$ZodGUID", (e, t) => {
	t.pattern ??= et, A.init(e, t);
}), Wt = /*@__PURE__*/ m("$ZodUUID", (e, t) => {
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
		t.pattern ??= tt(e);
	} else t.pattern ??= tt();
	A.init(e, t);
}), Gt = /*@__PURE__*/ m("$ZodEmail", (e, t) => {
	t.pattern ??= nt, A.init(e, t);
}), Kt = /*@__PURE__*/ m("$ZodURL", (e, t) => {
	A.init(e, t), e._zod.check = (n) => {
		try {
			let r = n.value.trim();
			if (!t.normalize && t.protocol?.source === dt.source && !/^https?:\/\//i.test(r)) {
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
}), qt = /*@__PURE__*/ m("$ZodEmoji", (e, t) => {
	t.pattern ??= it(), A.init(e, t);
}), Jt = /*@__PURE__*/ m("$ZodNanoID", (e, t) => {
	t.pattern ??= Qe, A.init(e, t);
}), Yt = /*@__PURE__*/ m("$ZodCUID", (e, t) => {
	t.pattern ??= qe, A.init(e, t);
}), Xt = /*@__PURE__*/ m("$ZodCUID2", (e, t) => {
	t.pattern ??= Je, A.init(e, t);
}), Zt = /*@__PURE__*/ m("$ZodULID", (e, t) => {
	t.pattern ??= Ye, A.init(e, t);
}), Qt = /*@__PURE__*/ m("$ZodXID", (e, t) => {
	t.pattern ??= Xe, A.init(e, t);
}), $t = /*@__PURE__*/ m("$ZodKSUID", (e, t) => {
	t.pattern ??= Ze, A.init(e, t);
}), en = /*@__PURE__*/ m("$ZodISODateTime", (e, t) => {
	t.pattern ??= _t(t), A.init(e, t);
}), tn = /*@__PURE__*/ m("$ZodISODate", (e, t) => {
	t.pattern ??= mt, A.init(e, t);
}), nn = /*@__PURE__*/ m("$ZodISOTime", (e, t) => {
	t.pattern ??= gt(t), A.init(e, t);
}), rn = /*@__PURE__*/ m("$ZodISODuration", (e, t) => {
	t.pattern ??= $e, A.init(e, t);
}), an = /*@__PURE__*/ m("$ZodIPv4", (e, t) => {
	t.pattern ??= at, A.init(e, t), e._zod.bag.format = "ipv4";
}), on = /*@__PURE__*/ m("$ZodIPv6", (e, t) => {
	t.pattern ??= ot, A.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
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
}), sn = /*@__PURE__*/ m("$ZodCIDRv4", (e, t) => {
	t.pattern ??= st, A.init(e, t);
}), cn = /*@__PURE__*/ m("$ZodCIDRv6", (e, t) => {
	t.pattern ??= ct, A.init(e, t), e._zod.check = (n) => {
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
function ln(e) {
	if (e === "") return !0;
	if (/\s/.test(e) || e.length % 4 != 0) return !1;
	try {
		return atob(e), !0;
	} catch {
		return !1;
	}
}
var un = /*@__PURE__*/ m("$ZodBase64", (e, t) => {
	t.pattern ??= lt, A.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
		ln(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
});
function dn(e) {
	if (!ut.test(e)) return !1;
	let t = e.replace(/[-_]/g, (e) => e === "-" ? "+" : "/");
	return ln(t.padEnd(Math.ceil(t.length / 4) * 4, "="));
}
var fn = /*@__PURE__*/ m("$ZodBase64URL", (e, t) => {
	t.pattern ??= ut, A.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
		dn(n.value) || n.issues.push({
			code: "invalid_format",
			format: "base64url",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), pn = /*@__PURE__*/ m("$ZodE164", (e, t) => {
	t.pattern ??= ft, A.init(e, t);
});
function mn(e, t = null) {
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
var hn = /*@__PURE__*/ m("$ZodJWT", (e, t) => {
	A.init(e, t), e._zod.check = (n) => {
		mn(n.value, t.alg) || n.issues.push({
			code: "invalid_format",
			format: "jwt",
			input: n.value,
			inst: e,
			continue: !t.abort
		});
	};
}), gn = /*@__PURE__*/ m("$ZodNumber", (e, t) => {
	k.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? bt, e._zod.parse = (n, r) => {
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
}), _n = /*@__PURE__*/ m("$ZodNumberFormat", (e, t) => {
	Ot.init(e, t), gn.init(e, t);
}), vn = /*@__PURE__*/ m("$ZodBoolean", (e, t) => {
	k.init(e, t), e._zod.pattern = xt, e._zod.parse = (n, r) => {
		if (t.coerce) try {
			n.value = !!n.value;
		} catch {}
		let i = n.value;
		return typeof i == "boolean" || n.issues.push({
			expected: "boolean",
			code: "invalid_type",
			input: i,
			inst: e
		}), n;
	};
}), yn = /*@__PURE__*/ m("$ZodUnknown", (e, t) => {
	k.init(e, t), e._zod.parse = (e) => e;
}), bn = /*@__PURE__*/ m("$ZodNever", (e, t) => {
	k.init(e, t), e._zod.parse = (t, n) => (t.issues.push({
		expected: "never",
		code: "invalid_type",
		input: t.value,
		inst: e
	}), t);
});
function xn(e, t, n) {
	e.issues.length && t.issues.push(...E(n, e.issues)), t.value[n] = e.value;
}
var Sn = /*@__PURE__*/ m("$ZodArray", (e, t) => {
	k.init(e, t), e._zod.parse = (n, r) => {
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
			s instanceof Promise ? a.push(s.then((t) => xn(t, n, e))) : xn(s, n, e);
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
});
function Cn(e, t, n, r, i, a) {
	let o = n in r;
	if (e.issues.length) {
		if (i && a && !o) return;
		t.issues.push(...E(n, e.issues));
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
function wn(e) {
	let t = Object.keys(e.shape);
	for (let n of t) if (!e.shape?.[n]?._zod?.traits?.has("$ZodType")) throw Error(`Invalid element at key "${n}": expected a Zod schema`);
	let n = he(e.shape);
	return {
		...e,
		keys: t,
		keySet: new Set(t),
		numKeys: t.length,
		optionalKeys: new Set(n)
	};
}
function Tn(e, t, n, r, i, a) {
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
		a instanceof Promise ? e.push(a.then((e) => Cn(e, n, i, t, u, d))) : Cn(a, n, i, t, u, d);
	}
	return o.length && n.issues.push({
		code: "unrecognized_keys",
		keys: o,
		input: t,
		inst: a
	}), e.length ? Promise.all(e).then(() => n) : n;
}
var En = /*@__PURE__*/ m("$ZodObject", (e, t) => {
	if (k.init(e, t), !Object.getOwnPropertyDescriptor(t, "shape")?.get) {
		let e = t.shape;
		Object.defineProperty(t, "shape", { get: () => {
			let n = { ...e };
			return Object.defineProperty(t, "shape", { value: n }), n;
		} });
	}
	let n = ne(() => wn(t));
	y(e._zod, "propValues", () => {
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
	let r = ue, i = t.catchall, a;
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
			a instanceof Promise ? c.push(a.then((n) => Cn(n, t, e, s, r, i))) : Cn(a, t, e, s, r, i);
		}
		return i ? Tn(c, s, t, o, n.value, e) : c.length ? Promise.all(c).then(() => t) : t;
	};
}), Dn = /*@__PURE__*/ m("$ZodObjectJIT", (e, t) => {
	En.init(e, t);
	let n = e._zod.parse, r = ne(() => wn(t)), i = (e) => {
		let t = new Bt([
			"shape",
			"payload",
			"ctx"
		]), n = r.value, i = (e) => {
			let t = se(e);
			return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
		};
		t.write("const input = payload.value;");
		let a = Object.create(null), o = 0;
		for (let e of n.keys) a[e] = `key_${o++}`;
		t.write("const newResult = {};");
		for (let r of n.keys) {
			let n = a[r], o = se(r), s = e[r], c = s?._zod?.optin === "optional", l = s?._zod?.optout === "optional";
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
	}, a, o = ue, s = !_.jitless, c = s && de.value, l = t.catchall, u;
	e._zod.parse = (d, f) => {
		u ??= r.value;
		let p = d.value;
		return o(p) ? s && c && f?.async === !1 && f.jitless !== !0 ? (a ||= i(t.shape), d = a(d, f), l ? Tn([], p, d, f, u, e) : d) : n(d, f) : (d.issues.push({
			expected: "object",
			code: "invalid_type",
			input: p,
			inst: e
		}), d);
	};
});
function On(e, t, n, r) {
	for (let n of e) if (n.issues.length === 0) return t.value = n.value, t;
	let i = e.filter((e) => !T(e));
	return i.length === 1 ? (t.value = i[0].value, i[0]) : (t.issues.push({
		code: "invalid_union",
		input: t.value,
		inst: n,
		errors: e.map((e) => e.issues.map((e) => D(e, r, v())))
	}), t);
}
var kn = /*@__PURE__*/ m("$ZodUnion", (e, t) => {
	k.init(e, t), y(e._zod, "optin", () => t.options.some((e) => e._zod.optin === "optional") ? "optional" : void 0), y(e._zod, "optout", () => t.options.some((e) => e._zod.optout === "optional") ? "optional" : void 0), y(e._zod, "values", () => {
		if (t.options.every((e) => e._zod.values)) return new Set(t.options.flatMap((e) => Array.from(e._zod.values)));
	}), y(e._zod, "pattern", () => {
		if (t.options.every((e) => e._zod.pattern)) {
			let e = t.options.map((e) => e._zod.pattern);
			return RegExp(`^(${e.map((e) => ie(e.source)).join("|")})$`);
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
		return a ? Promise.all(o).then((t) => On(t, r, e, i)) : On(o, r, e, i);
	};
}), An = /*@__PURE__*/ m("$ZodIntersection", (e, t) => {
	k.init(e, t), e._zod.parse = (e, n) => {
		let r = e.value, i = t.left._zod.run({
			value: r,
			issues: []
		}, n), a = t.right._zod.run({
			value: r,
			issues: []
		}, n);
		return i instanceof Promise || a instanceof Promise ? Promise.all([i, a]).then(([t, n]) => Mn(e, t, n)) : Mn(e, i, a);
	};
});
function jn(e, t) {
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
			let r = jn(e[n], t[n]);
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
			let i = e[r], a = t[r], o = jn(i, a);
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
function Mn(e, t, n) {
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
	}), T(e)) return e;
	let o = jn(t.value, n.value);
	if (!o.valid) throw Error(`Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`);
	return e.value = o.data, e;
}
var Nn = /*@__PURE__*/ m("$ZodRecord", (e, t) => {
	k.init(e, t), e._zod.parse = (n, r) => {
		let i = n.value;
		if (!S(i)) return n.issues.push({
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
						issues: o.issues.map((e) => D(e, r, v())),
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
					e.issues.length && n.issues.push(...E(c, e.issues)), n.value[l] = e.value;
				})) : (u.issues.length && n.issues.push(...E(c, u.issues)), n.value[l] = u.value);
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
				if (typeof o == "string" && bt.test(o) && s.issues.length) {
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
						issues: s.issues.map((e) => D(e, r, v())),
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
					e.issues.length && n.issues.push(...E(o, e.issues)), n.value[s.value] = e.value;
				})) : (c.issues.length && n.issues.push(...E(o, c.issues)), n.value[s.value] = c.value);
			}
		}
		return a.length ? Promise.all(a).then(() => n) : n;
	};
}), Pn = /*@__PURE__*/ m("$ZodEnum", (e, t) => {
	k.init(e, t);
	let n = ee(t.entries), r = new Set(n);
	e._zod.values = r, e._zod.pattern = RegExp(`^(${n.filter((e) => pe.has(typeof e)).map((e) => typeof e == "string" ? me(e) : e.toString()).join("|")})$`), e._zod.parse = (t, i) => {
		let a = t.value;
		return r.has(a) || t.issues.push({
			code: "invalid_value",
			values: n,
			input: a,
			inst: e
		}), t;
	};
}), Fn = /*@__PURE__*/ m("$ZodTransform", (e, t) => {
	k.init(e, t), e._zod.optin = "optional", e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new g(e.constructor.name);
		let i = t.transform(n.value, n);
		if (r.async) return (i instanceof Promise ? i : Promise.resolve(i)).then((e) => (n.value = e, n.fallback = !0, n));
		if (i instanceof Promise) throw new h();
		return n.value = i, n.fallback = !0, n;
	};
});
function In(e, t) {
	return t === void 0 && (e.issues.length || e.fallback) ? {
		issues: [],
		value: void 0
	} : e;
}
var Ln = /*@__PURE__*/ m("$ZodOptional", (e, t) => {
	k.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", y(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, void 0]) : void 0), y(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ie(e.source)})?$`) : void 0;
	}), e._zod.parse = (e, n) => {
		if (t.innerType._zod.optin === "optional") {
			let r = e.value, i = t.innerType._zod.run(e, n);
			return i instanceof Promise ? i.then((e) => In(e, r)) : In(i, r);
		}
		return e.value === void 0 ? e : t.innerType._zod.run(e, n);
	};
}), Rn = /*@__PURE__*/ m("$ZodExactOptional", (e, t) => {
	Ln.init(e, t), y(e._zod, "values", () => t.innerType._zod.values), y(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (e, n) => t.innerType._zod.run(e, n);
}), zn = /*@__PURE__*/ m("$ZodNullable", (e, t) => {
	k.init(e, t), y(e._zod, "optin", () => t.innerType._zod.optin), y(e._zod, "optout", () => t.innerType._zod.optout), y(e._zod, "pattern", () => {
		let e = t.innerType._zod.pattern;
		return e ? RegExp(`^(${ie(e.source)}|null)$`) : void 0;
	}), y(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([...t.innerType._zod.values, null]) : void 0), e._zod.parse = (e, n) => e.value === null ? e : t.innerType._zod.run(e, n);
}), Bn = /*@__PURE__*/ m("$ZodDefault", (e, t) => {
	k.init(e, t), e._zod.optin = "optional", y(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		if (e.value === void 0) return e.value = t.defaultValue, e;
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => Vn(e, t)) : Vn(r, t);
	};
});
function Vn(e, t) {
	return e.value === void 0 && (e.value = t.defaultValue), e;
}
var Hn = /*@__PURE__*/ m("$ZodPrefault", (e, t) => {
	k.init(e, t), e._zod.optin = "optional", y(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => (n.direction === "backward" || e.value === void 0 && (e.value = t.defaultValue), t.innerType._zod.run(e, n));
}), Un = /*@__PURE__*/ m("$ZodNonOptional", (e, t) => {
	k.init(e, t), y(e._zod, "values", () => {
		let e = t.innerType._zod.values;
		return e ? new Set([...e].filter((e) => e !== void 0)) : void 0;
	}), e._zod.parse = (n, r) => {
		let i = t.innerType._zod.run(n, r);
		return i instanceof Promise ? i.then((t) => Wn(t, e)) : Wn(i, e);
	};
});
function Wn(e, t) {
	return !e.issues.length && e.value === void 0 && e.issues.push({
		code: "invalid_type",
		expected: "nonoptional",
		input: e.value,
		inst: t
	}), e;
}
var Gn = /*@__PURE__*/ m("$ZodCatch", (e, t) => {
	k.init(e, t), e._zod.optin = "optional", y(e._zod, "optout", () => t.innerType._zod.optout), y(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then((r) => (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => D(e, n, v())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e)) : (e.value = r.value, r.issues.length && (e.value = t.catchValue({
			...e,
			error: { issues: r.issues.map((e) => D(e, n, v())) },
			input: e.value
		}), e.issues = [], e.fallback = !0), e);
	};
}), Kn = /*@__PURE__*/ m("$ZodPipe", (e, t) => {
	k.init(e, t), y(e._zod, "values", () => t.in._zod.values), y(e._zod, "optin", () => t.in._zod.optin), y(e._zod, "optout", () => t.out._zod.optout), y(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (e, n) => {
		if (n.direction === "backward") {
			let r = t.out._zod.run(e, n);
			return r instanceof Promise ? r.then((e) => qn(e, t.in, n)) : qn(r, t.in, n);
		}
		let r = t.in._zod.run(e, n);
		return r instanceof Promise ? r.then((e) => qn(e, t.out, n)) : qn(r, t.out, n);
	};
});
function qn(e, t, n) {
	return e.issues.length ? (e.aborted = !0, e) : t._zod.run({
		value: e.value,
		issues: e.issues,
		fallback: e.fallback
	}, n);
}
var Jn = /*@__PURE__*/ m("$ZodReadonly", (e, t) => {
	k.init(e, t), y(e._zod, "propValues", () => t.innerType._zod.propValues), y(e._zod, "values", () => t.innerType._zod.values), y(e._zod, "optin", () => t.innerType?._zod?.optin), y(e._zod, "optout", () => t.innerType?._zod?.optout), e._zod.parse = (e, n) => {
		if (n.direction === "backward") return t.innerType._zod.run(e, n);
		let r = t.innerType._zod.run(e, n);
		return r instanceof Promise ? r.then(Yn) : Yn(r);
	};
});
function Yn(e) {
	return e.value = Object.freeze(e.value), e;
}
var Xn = /*@__PURE__*/ m("$ZodCustom", (e, t) => {
	O.init(e, t), k.init(e, t), e._zod.parse = (e, t) => e, e._zod.check = (n) => {
		let r = n.value, i = t.fn(r);
		if (i instanceof Promise) return i.then((t) => Zn(t, n, r, e));
		Zn(i, n, r, e);
	};
});
function Zn(e, t, n, r) {
	if (!e) {
		let e = {
			code: "custom",
			input: n,
			inst: r,
			path: [...r._zod.def.path ?? []],
			continue: !r._zod.def.abort
		};
		r._zod.def.params && (e.params = r._zod.def.params), t.issues.push(De(e));
	}
}
//#endregion
//#region ../../node_modules/zod/v4/core/registries.js
var Qn, $n = class {
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
function er() {
	return new $n();
}
(Qn = globalThis).__zod_globalRegistry ?? (Qn.__zod_globalRegistry = er());
var tr = globalThis.__zod_globalRegistry;
//#endregion
//#region ../../node_modules/zod/v4/core/api.js
// @__NO_SIDE_EFFECTS__
function nr(e, t) {
	return new e({
		type: "string",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function rr(e, t) {
	return new e({
		type: "string",
		format: "email",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ir(e, t) {
	return new e({
		type: "string",
		format: "guid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ar(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function or(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v4",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function sr(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v6",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function cr(e, t) {
	return new e({
		type: "string",
		format: "uuid",
		check: "string_format",
		abort: !1,
		version: "v7",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function lr(e, t) {
	return new e({
		type: "string",
		format: "url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function ur(e, t) {
	return new e({
		type: "string",
		format: "emoji",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function dr(e, t) {
	return new e({
		type: "string",
		format: "nanoid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function fr(e, t) {
	return new e({
		type: "string",
		format: "cuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function pr(e, t) {
	return new e({
		type: "string",
		format: "cuid2",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function mr(e, t) {
	return new e({
		type: "string",
		format: "ulid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function hr(e, t) {
	return new e({
		type: "string",
		format: "xid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function gr(e, t) {
	return new e({
		type: "string",
		format: "ksuid",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function _r(e, t) {
	return new e({
		type: "string",
		format: "ipv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function vr(e, t) {
	return new e({
		type: "string",
		format: "ipv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function yr(e, t) {
	return new e({
		type: "string",
		format: "cidrv4",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function br(e, t) {
	return new e({
		type: "string",
		format: "cidrv6",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function xr(e, t) {
	return new e({
		type: "string",
		format: "base64",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Sr(e, t) {
	return new e({
		type: "string",
		format: "base64url",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t) {
	return new e({
		type: "string",
		format: "e164",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function wr(e, t) {
	return new e({
		type: "string",
		format: "jwt",
		check: "string_format",
		abort: !1,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t) {
	return new e({
		type: "string",
		format: "datetime",
		check: "string_format",
		offset: !1,
		local: !1,
		precision: null,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Er(e, t) {
	return new e({
		type: "string",
		format: "date",
		check: "string_format",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Dr(e, t) {
	return new e({
		type: "string",
		format: "time",
		check: "string_format",
		precision: null,
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Or(e, t) {
	return new e({
		type: "string",
		format: "duration",
		check: "string_format",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function kr(e, t) {
	return new e({
		type: "number",
		checks: [],
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Ar(e, t) {
	return new e({
		type: "number",
		check: "number_format",
		abort: !1,
		format: "safeint",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function jr(e, t) {
	return new e({
		type: "boolean",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
	return new e({ type: "unknown" });
}
// @__NO_SIDE_EFFECTS__
function Nr(e, t) {
	return new e({
		type: "never",
		...w(t)
	});
}
// @__NO_SIDE_EFFECTS__
function Pr(e, t) {
	return new Tt({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Fr(e, t) {
	return new Tt({
		check: "less_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t) {
	return new Et({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !1
	});
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t) {
	return new Et({
		check: "greater_than",
		...w(t),
		value: e,
		inclusive: !0
	});
}
// @__NO_SIDE_EFFECTS__
function Rr(e, t) {
	return new Dt({
		check: "multiple_of",
		...w(t),
		value: e
	});
}
// @__NO_SIDE_EFFECTS__
function zr(e, t) {
	return new kt({
		check: "max_length",
		...w(t),
		maximum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Br(e, t) {
	return new At({
		check: "min_length",
		...w(t),
		minimum: e
	});
}
// @__NO_SIDE_EFFECTS__
function Vr(e, t) {
	return new jt({
		check: "length_equals",
		...w(t),
		length: e
	});
}
// @__NO_SIDE_EFFECTS__
function Hr(e, t) {
	return new Nt({
		check: "string_format",
		format: "regex",
		...w(t),
		pattern: e
	});
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
	return new Pt({
		check: "string_format",
		format: "lowercase",
		...w(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Wr(e) {
	return new Ft({
		check: "string_format",
		format: "uppercase",
		...w(e)
	});
}
// @__NO_SIDE_EFFECTS__
function Gr(e, t) {
	return new It({
		check: "string_format",
		format: "includes",
		...w(t),
		includes: e
	});
}
// @__NO_SIDE_EFFECTS__
function Kr(e, t) {
	return new Lt({
		check: "string_format",
		format: "starts_with",
		...w(t),
		prefix: e
	});
}
// @__NO_SIDE_EFFECTS__
function qr(e, t) {
	return new Rt({
		check: "string_format",
		format: "ends_with",
		...w(t),
		suffix: e
	});
}
// @__NO_SIDE_EFFECTS__
function j(e) {
	return new zt({
		check: "overwrite",
		tx: e
	});
}
// @__NO_SIDE_EFFECTS__
function Jr(e) {
	return /* @__PURE__ */ j((t) => t.normalize(e));
}
// @__NO_SIDE_EFFECTS__
function Yr() {
	return /* @__PURE__ */ j((e) => e.trim());
}
// @__NO_SIDE_EFFECTS__
function Xr() {
	return /* @__PURE__ */ j((e) => e.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Zr() {
	return /* @__PURE__ */ j((e) => e.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Qr() {
	return /* @__PURE__ */ j((e) => ce(e));
}
// @__NO_SIDE_EFFECTS__
function $r(e, t, n) {
	return new e({
		type: "array",
		element: t,
		...w(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ei(e, t, n) {
	return new e({
		type: "custom",
		check: "custom",
		fn: t,
		...w(n)
	});
}
// @__NO_SIDE_EFFECTS__
function ti(e, t) {
	let n = /* @__PURE__ */ ni((t) => (t.addIssue = (e) => {
		if (typeof e == "string") t.issues.push(De(e, t.value, n._zod.def));
		else {
			let r = e;
			r.fatal && (r.continue = !1), r.code ??= "custom", r.input ??= t.value, r.inst ??= n, r.continue ??= !n._zod.def.abort, t.issues.push(De(r));
		}
	}, e(t.value, t)), t);
	return n;
}
// @__NO_SIDE_EFFECTS__
function ni(e, t) {
	let n = new O({
		check: "custom",
		...w(t)
	});
	return n._zod.check = e, n;
}
//#endregion
//#region ../../node_modules/zod/v4/core/to-json-schema.js
function ri(e) {
	let t = e?.target ?? "draft-2020-12";
	return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
		processors: e.processors ?? {},
		metadataRegistry: e?.metadata ?? tr,
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
function M(e, t, n = {
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
		a && (o.ref ||= a, M(a, t, r), t.seen.get(a).isParent = !0);
	}
	let c = t.metadataRegistry.get(e);
	return c && Object.assign(o.schema, c), t.io === "input" && N(e) && (delete o.schema.examples, delete o.schema.default), t.io === "input" && "_prefault" in o.schema && ((r = o.schema).default ?? (r.default = o.schema._prefault)), delete o.schema._prefault, t.seen.get(e).schema;
}
function ii(e, t) {
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
function ai(e, t) {
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
					input: si(t, "input", e.processors),
					output: si(t, "output", e.processors)
				}
			},
			enumerable: !1,
			writable: !1
		}), n;
	} catch {
		throw Error("Error converting schema to JSON.");
	}
}
function N(e, t) {
	let n = t ?? { seen: /* @__PURE__ */ new Set() };
	if (n.seen.has(e)) return !1;
	n.seen.add(e);
	let r = e._zod.def;
	if (r.type === "transform") return !0;
	if (r.type === "array") return N(r.element, n);
	if (r.type === "set") return N(r.valueType, n);
	if (r.type === "lazy") return N(r.getter(), n);
	if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return N(r.innerType, n);
	if (r.type === "intersection") return N(r.left, n) || N(r.right, n);
	if (r.type === "record" || r.type === "map") return N(r.keyType, n) || N(r.valueType, n);
	if (r.type === "pipe") return e._zod.traits.has("$ZodCodec") ? !0 : N(r.in, n) || N(r.out, n);
	if (r.type === "object") {
		for (let e in r.shape) if (N(r.shape[e], n)) return !0;
		return !1;
	}
	if (r.type === "union") {
		for (let e of r.options) if (N(e, n)) return !0;
		return !1;
	}
	if (r.type === "tuple") {
		for (let e of r.items) if (N(e, n)) return !0;
		return !!(r.rest && N(r.rest, n));
	}
	return !1;
}
var oi = (e, t = {}) => (n) => {
	let r = ri({
		...n,
		processors: t
	});
	return M(e, r), ii(r, e), ai(r, e);
}, si = (e, t, n = {}) => (r) => {
	let { libraryOptions: i, target: a } = r ?? {}, o = ri({
		...i ?? {},
		target: a,
		io: t,
		processors: n
	});
	return M(e, o), ii(o, e), ai(o, e);
}, ci = {
	guid: "uuid",
	url: "uri",
	datetime: "date-time",
	json_string: "json-string",
	regex: ""
}, li = (e, t, n, r) => {
	let i = n;
	i.type = "string";
	let { minimum: a, maximum: o, format: s, patterns: c, contentEncoding: l } = e._zod.bag;
	if (typeof a == "number" && (i.minLength = a), typeof o == "number" && (i.maxLength = o), s && (i.format = ci[s] ?? s, i.format === "" && delete i.format, s === "time" && delete i.format), l && (i.contentEncoding = l), c && c.size > 0) {
		let e = [...c];
		e.length === 1 ? i.pattern = e[0].source : e.length > 1 && (i.allOf = [...e.map((e) => ({
			...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? { type: "string" } : {},
			pattern: e.source
		}))]);
	}
}, ui = (e, t, n, r) => {
	let i = n, { minimum: a, maximum: o, format: s, multipleOf: c, exclusiveMaximum: l, exclusiveMinimum: u } = e._zod.bag;
	i.type = typeof s == "string" && s.includes("int") ? "integer" : "number";
	let d = typeof u == "number" && u >= (a ?? -Infinity), f = typeof l == "number" && l <= (o ?? Infinity), p = t.target === "draft-04" || t.target === "openapi-3.0";
	d ? p ? (i.minimum = u, i.exclusiveMinimum = !0) : i.exclusiveMinimum = u : typeof a == "number" && (i.minimum = a), f ? p ? (i.maximum = l, i.exclusiveMaximum = !0) : i.exclusiveMaximum = l : typeof o == "number" && (i.maximum = o), typeof c == "number" && (i.multipleOf = c);
}, di = (e, t, n, r) => {
	n.type = "boolean";
}, fi = (e, t, n, r) => {
	n.not = {};
}, pi = (e, t, n, r) => {
	let i = e._zod.def, a = ee(i.entries);
	a.every((e) => typeof e == "number") && (n.type = "number"), a.every((e) => typeof e == "string") && (n.type = "string"), n.enum = a;
}, mi = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Custom types cannot be represented in JSON Schema");
}, hi = (e, t, n, r) => {
	if (t.unrepresentable === "throw") throw Error("Transforms cannot be represented in JSON Schema");
}, gi = (e, t, n, r) => {
	let i = n, a = e._zod.def, { minimum: o, maximum: s } = e._zod.bag;
	typeof o == "number" && (i.minItems = o), typeof s == "number" && (i.maxItems = s), i.type = "array", i.items = M(a.element, t, {
		...r,
		path: [...r.path, "items"]
	});
}, _i = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object", i.properties = {};
	let o = a.shape;
	for (let e in o) i.properties[e] = M(o[e], t, {
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
	c.size > 0 && (i.required = Array.from(c)), a.catchall?._zod.def.type === "never" ? i.additionalProperties = !1 : a.catchall ? a.catchall && (i.additionalProperties = M(a.catchall, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	})) : t.io === "output" && (i.additionalProperties = !1);
}, vi = (e, t, n, r) => {
	let i = e._zod.def, a = i.inclusive === !1, o = i.options.map((e, n) => M(e, t, {
		...r,
		path: [
			...r.path,
			a ? "oneOf" : "anyOf",
			n
		]
	}));
	a ? n.oneOf = o : n.anyOf = o;
}, yi = (e, t, n, r) => {
	let i = e._zod.def, a = M(i.left, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			0
		]
	}), o = M(i.right, t, {
		...r,
		path: [
			...r.path,
			"allOf",
			1
		]
	}), s = (e) => "allOf" in e && Object.keys(e).length === 1;
	n.allOf = [...s(a) ? a.allOf : [a], ...s(o) ? o.allOf : [o]];
}, bi = (e, t, n, r) => {
	let i = n, a = e._zod.def;
	i.type = "object";
	let o = a.keyType, s = o._zod.bag?.patterns;
	if (a.mode === "loose" && s && s.size > 0) {
		let e = M(a.valueType, t, {
			...r,
			path: [
				...r.path,
				"patternProperties",
				"*"
			]
		});
		i.patternProperties = {};
		for (let t of s) i.patternProperties[t.source] = e;
	} else (t.target === "draft-07" || t.target === "draft-2020-12") && (i.propertyNames = M(a.keyType, t, {
		...r,
		path: [...r.path, "propertyNames"]
	})), i.additionalProperties = M(a.valueType, t, {
		...r,
		path: [...r.path, "additionalProperties"]
	});
	let c = o._zod.values;
	if (c) {
		let e = [...c].filter((e) => typeof e == "string" || typeof e == "number");
		e.length > 0 && (i.required = e);
	}
}, xi = (e, t, n, r) => {
	let i = e._zod.def, a = M(i.innerType, t, r), o = t.seen.get(e);
	t.target === "openapi-3.0" ? (o.ref = i.innerType, n.nullable = !0) : n.anyOf = [a, { type: "null" }];
}, Si = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, Ci = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.default = JSON.parse(JSON.stringify(i.defaultValue));
}, wi = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
}, Ti = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
	let o;
	try {
		o = i.catchValue(void 0);
	} catch {
		throw Error("Dynamic catch values are not supported in JSON Schema");
	}
	n.default = o;
}, Ei = (e, t, n, r) => {
	let i = e._zod.def, a = i.in._zod.traits.has("$ZodTransform"), o = t.io === "input" ? a ? i.out : i.in : i.out;
	M(o, t, r);
	let s = t.seen.get(e);
	s.ref = o;
}, Di = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType, n.readOnly = !0;
}, Oi = (e, t, n, r) => {
	let i = e._zod.def;
	M(i.innerType, t, r);
	let a = t.seen.get(e);
	a.ref = i.innerType;
}, ki = /*@__PURE__*/ m("ZodISODateTime", (e, t) => {
	en.init(e, t), L.init(e, t);
});
function Ai(e) {
	return /* @__PURE__ */ Tr(ki, e);
}
var ji = /*@__PURE__*/ m("ZodISODate", (e, t) => {
	tn.init(e, t), L.init(e, t);
});
function Mi(e) {
	return /* @__PURE__ */ Er(ji, e);
}
var Ni = /*@__PURE__*/ m("ZodISOTime", (e, t) => {
	nn.init(e, t), L.init(e, t);
});
function Pi(e) {
	return /* @__PURE__ */ Dr(Ni, e);
}
var Fi = /*@__PURE__*/ m("ZodISODuration", (e, t) => {
	rn.init(e, t), L.init(e, t);
});
function Ii(e) {
	return /* @__PURE__ */ Or(Fi, e);
}
var P = /*@__PURE__*/ m("ZodError", (e, t) => {
	ke.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
		format: { value: (t) => Me(e, t) },
		flatten: { value: (t) => je(e, t) },
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
}, { Parent: Error }), Li = /* @__PURE__ */ Ne(P), Ri = /* @__PURE__ */ Pe(P), zi = /* @__PURE__ */ Fe(P), Bi = /* @__PURE__ */ Le(P), Vi = /* @__PURE__ */ ze(P), Hi = /* @__PURE__ */ Be(P), Ui = /* @__PURE__ */ Ve(P), Wi = /* @__PURE__ */ He(P), Gi = /* @__PURE__ */ Ue(P), Ki = /* @__PURE__ */ We(P), qi = /* @__PURE__ */ Ge(P), Ji = /* @__PURE__ */ Ke(P), Yi = /* @__PURE__ */ new WeakMap();
function Xi(e, t, n) {
	let r = Object.getPrototypeOf(e), i = Yi.get(r);
	if (i || (i = /* @__PURE__ */ new Set(), Yi.set(r, i)), !i.has(t)) {
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
var F = /*@__PURE__*/ m("ZodType", (e, t) => (k.init(e, t), Object.assign(e["~standard"], { jsonSchema: {
	input: si(e, "input"),
	output: si(e, "output")
} }), e.toJSONSchema = oi(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", { value: t }), e.parse = (t, n) => Li(e, t, n, { callee: e.parse }), e.safeParse = (t, n) => zi(e, t, n), e.parseAsync = async (t, n) => Ri(e, t, n, { callee: e.parseAsync }), e.safeParseAsync = async (t, n) => Bi(e, t, n), e.spa = e.safeParseAsync, e.encode = (t, n) => Vi(e, t, n), e.decode = (t, n) => Hi(e, t, n), e.encodeAsync = async (t, n) => Ui(e, t, n), e.decodeAsync = async (t, n) => Wi(e, t, n), e.safeEncode = (t, n) => Gi(e, t, n), e.safeDecode = (t, n) => Ki(e, t, n), e.safeEncodeAsync = async (t, n) => qi(e, t, n), e.safeDecodeAsync = async (t, n) => Ji(e, t, n), Xi(e, "ZodType", {
	check(...e) {
		let t = this.def;
		return this.clone(x(t, { checks: [...t.checks ?? [], ...e.map((e) => typeof e == "function" ? { _zod: {
			check: e,
			def: { check: "custom" },
			onattach: []
		} } : e)] }), { parent: !0 });
	},
	with(...e) {
		return this.check(...e);
	},
	clone(e, t) {
		return C(this, e, t);
	},
	brand() {
		return this;
	},
	register(e, t) {
		return e.add(this, t), this;
	},
	refine(e, t) {
		return this.check(ao(e, t));
	},
	superRefine(e, t) {
		return this.check(oo(e, t));
	},
	overwrite(e) {
		return this.check(/* @__PURE__ */ j(e));
	},
	optional() {
		return Va(this);
	},
	exactOptional() {
		return Ua(this);
	},
	nullable() {
		return Ga(this);
	},
	nullish() {
		return Va(Ga(this));
	},
	nonoptional(e) {
		return Za(this, e);
	},
	array() {
		return R(this);
	},
	or(e) {
		return ja([this, e]);
	},
	and(e) {
		return Na(this, e);
	},
	transform(e) {
		return to(this, za(e));
	},
	default(e) {
		return qa(this, e);
	},
	prefault(e) {
		return Ya(this, e);
	},
	catch(e) {
		return $a(this, e);
	},
	pipe(e) {
		return to(this, e);
	},
	readonly() {
		return ro(this);
	},
	describe(e) {
		let t = this.clone();
		return tr.add(t, { description: e }), t;
	},
	meta(...e) {
		if (e.length === 0) return tr.get(this);
		let t = this.clone();
		return tr.add(t, e[0]), t;
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
		return tr.get(e)?.description;
	},
	configurable: !0
}), e)), Zi = /*@__PURE__*/ m("_ZodString", (e, t) => {
	Ht.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => li(e, t, n, r);
	let n = e._zod.bag;
	e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, Xi(e, "_ZodString", {
		regex(...e) {
			return this.check(/* @__PURE__ */ Hr(...e));
		},
		includes(...e) {
			return this.check(/* @__PURE__ */ Gr(...e));
		},
		startsWith(...e) {
			return this.check(/* @__PURE__ */ Kr(...e));
		},
		endsWith(...e) {
			return this.check(/* @__PURE__ */ qr(...e));
		},
		min(...e) {
			return this.check(/* @__PURE__ */ Br(...e));
		},
		max(...e) {
			return this.check(/* @__PURE__ */ zr(...e));
		},
		length(...e) {
			return this.check(/* @__PURE__ */ Vr(...e));
		},
		nonempty(...e) {
			return this.check(/* @__PURE__ */ Br(1, ...e));
		},
		lowercase(e) {
			return this.check(/* @__PURE__ */ Ur(e));
		},
		uppercase(e) {
			return this.check(/* @__PURE__ */ Wr(e));
		},
		trim() {
			return this.check(/* @__PURE__ */ Yr());
		},
		normalize(...e) {
			return this.check(/* @__PURE__ */ Jr(...e));
		},
		toLowerCase() {
			return this.check(/* @__PURE__ */ Xr());
		},
		toUpperCase() {
			return this.check(/* @__PURE__ */ Zr());
		},
		slugify() {
			return this.check(/* @__PURE__ */ Qr());
		}
	});
}), Qi = /*@__PURE__*/ m("ZodString", (e, t) => {
	Ht.init(e, t), Zi.init(e, t), e.email = (t) => e.check(/* @__PURE__ */ rr($i, t)), e.url = (t) => e.check(/* @__PURE__ */ lr(na, t)), e.jwt = (t) => e.check(/* @__PURE__ */ wr(_a, t)), e.emoji = (t) => e.check(/* @__PURE__ */ ur(ra, t)), e.guid = (t) => e.check(/* @__PURE__ */ ir(ea, t)), e.uuid = (t) => e.check(/* @__PURE__ */ ar(ta, t)), e.uuidv4 = (t) => e.check(/* @__PURE__ */ or(ta, t)), e.uuidv6 = (t) => e.check(/* @__PURE__ */ sr(ta, t)), e.uuidv7 = (t) => e.check(/* @__PURE__ */ cr(ta, t)), e.nanoid = (t) => e.check(/* @__PURE__ */ dr(ia, t)), e.guid = (t) => e.check(/* @__PURE__ */ ir(ea, t)), e.cuid = (t) => e.check(/* @__PURE__ */ fr(aa, t)), e.cuid2 = (t) => e.check(/* @__PURE__ */ pr(oa, t)), e.ulid = (t) => e.check(/* @__PURE__ */ mr(sa, t)), e.base64 = (t) => e.check(/* @__PURE__ */ xr(ma, t)), e.base64url = (t) => e.check(/* @__PURE__ */ Sr(ha, t)), e.xid = (t) => e.check(/* @__PURE__ */ hr(ca, t)), e.ksuid = (t) => e.check(/* @__PURE__ */ gr(la, t)), e.ipv4 = (t) => e.check(/* @__PURE__ */ _r(ua, t)), e.ipv6 = (t) => e.check(/* @__PURE__ */ vr(da, t)), e.cidrv4 = (t) => e.check(/* @__PURE__ */ yr(fa, t)), e.cidrv6 = (t) => e.check(/* @__PURE__ */ br(pa, t)), e.e164 = (t) => e.check(/* @__PURE__ */ Cr(ga, t)), e.datetime = (t) => e.check(Ai(t)), e.date = (t) => e.check(Mi(t)), e.time = (t) => e.check(Pi(t)), e.duration = (t) => e.check(Ii(t));
});
function I(e) {
	return /* @__PURE__ */ nr(Qi, e);
}
var L = /*@__PURE__*/ m("ZodStringFormat", (e, t) => {
	A.init(e, t), Zi.init(e, t);
}), $i = /*@__PURE__*/ m("ZodEmail", (e, t) => {
	Gt.init(e, t), L.init(e, t);
}), ea = /*@__PURE__*/ m("ZodGUID", (e, t) => {
	Ut.init(e, t), L.init(e, t);
}), ta = /*@__PURE__*/ m("ZodUUID", (e, t) => {
	Wt.init(e, t), L.init(e, t);
}), na = /*@__PURE__*/ m("ZodURL", (e, t) => {
	Kt.init(e, t), L.init(e, t);
}), ra = /*@__PURE__*/ m("ZodEmoji", (e, t) => {
	qt.init(e, t), L.init(e, t);
}), ia = /*@__PURE__*/ m("ZodNanoID", (e, t) => {
	Jt.init(e, t), L.init(e, t);
}), aa = /*@__PURE__*/ m("ZodCUID", (e, t) => {
	Yt.init(e, t), L.init(e, t);
}), oa = /*@__PURE__*/ m("ZodCUID2", (e, t) => {
	Xt.init(e, t), L.init(e, t);
}), sa = /*@__PURE__*/ m("ZodULID", (e, t) => {
	Zt.init(e, t), L.init(e, t);
}), ca = /*@__PURE__*/ m("ZodXID", (e, t) => {
	Qt.init(e, t), L.init(e, t);
}), la = /*@__PURE__*/ m("ZodKSUID", (e, t) => {
	$t.init(e, t), L.init(e, t);
}), ua = /*@__PURE__*/ m("ZodIPv4", (e, t) => {
	an.init(e, t), L.init(e, t);
}), da = /*@__PURE__*/ m("ZodIPv6", (e, t) => {
	on.init(e, t), L.init(e, t);
}), fa = /*@__PURE__*/ m("ZodCIDRv4", (e, t) => {
	sn.init(e, t), L.init(e, t);
}), pa = /*@__PURE__*/ m("ZodCIDRv6", (e, t) => {
	cn.init(e, t), L.init(e, t);
}), ma = /*@__PURE__*/ m("ZodBase64", (e, t) => {
	un.init(e, t), L.init(e, t);
}), ha = /*@__PURE__*/ m("ZodBase64URL", (e, t) => {
	fn.init(e, t), L.init(e, t);
}), ga = /*@__PURE__*/ m("ZodE164", (e, t) => {
	pn.init(e, t), L.init(e, t);
}), _a = /*@__PURE__*/ m("ZodJWT", (e, t) => {
	hn.init(e, t), L.init(e, t);
}), va = /*@__PURE__*/ m("ZodNumber", (e, t) => {
	gn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => ui(e, t, n, r), Xi(e, "ZodNumber", {
		gt(e, t) {
			return this.check(/* @__PURE__ */ Ir(e, t));
		},
		gte(e, t) {
			return this.check(/* @__PURE__ */ Lr(e, t));
		},
		min(e, t) {
			return this.check(/* @__PURE__ */ Lr(e, t));
		},
		lt(e, t) {
			return this.check(/* @__PURE__ */ Pr(e, t));
		},
		lte(e, t) {
			return this.check(/* @__PURE__ */ Fr(e, t));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ Fr(e, t));
		},
		int(e) {
			return this.check(xa(e));
		},
		safe(e) {
			return this.check(xa(e));
		},
		positive(e) {
			return this.check(/* @__PURE__ */ Ir(0, e));
		},
		nonnegative(e) {
			return this.check(/* @__PURE__ */ Lr(0, e));
		},
		negative(e) {
			return this.check(/* @__PURE__ */ Pr(0, e));
		},
		nonpositive(e) {
			return this.check(/* @__PURE__ */ Fr(0, e));
		},
		multipleOf(e, t) {
			return this.check(/* @__PURE__ */ Rr(e, t));
		},
		step(e, t) {
			return this.check(/* @__PURE__ */ Rr(e, t));
		},
		finite() {
			return this;
		}
	});
	let n = e._zod.bag;
	e.minValue = Math.max(n.minimum ?? -Infinity, n.exclusiveMinimum ?? -Infinity) ?? null, e.maxValue = Math.min(n.maximum ?? Infinity, n.exclusiveMaximum ?? Infinity) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? .5), e.isFinite = !0, e.format = n.format ?? null;
});
function ya(e) {
	return /* @__PURE__ */ kr(va, e);
}
var ba = /*@__PURE__*/ m("ZodNumberFormat", (e, t) => {
	_n.init(e, t), va.init(e, t);
});
function xa(e) {
	return /* @__PURE__ */ Ar(ba, e);
}
var Sa = /*@__PURE__*/ m("ZodBoolean", (e, t) => {
	vn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => di(e, t, n, r);
});
function Ca(e) {
	return /* @__PURE__ */ jr(Sa, e);
}
var wa = /*@__PURE__*/ m("ZodUnknown", (e, t) => {
	yn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (e, t, n) => void 0;
});
function Ta() {
	return /* @__PURE__ */ Mr(wa);
}
var Ea = /*@__PURE__*/ m("ZodNever", (e, t) => {
	bn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => fi(e, t, n, r);
});
function Da(e) {
	return /* @__PURE__ */ Nr(Ea, e);
}
var Oa = /*@__PURE__*/ m("ZodArray", (e, t) => {
	Sn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => gi(e, t, n, r), e.element = t.element, Xi(e, "ZodArray", {
		min(e, t) {
			return this.check(/* @__PURE__ */ Br(e, t));
		},
		nonempty(e) {
			return this.check(/* @__PURE__ */ Br(1, e));
		},
		max(e, t) {
			return this.check(/* @__PURE__ */ zr(e, t));
		},
		length(e, t) {
			return this.check(/* @__PURE__ */ Vr(e, t));
		},
		unwrap() {
			return this.element;
		}
	});
});
function R(e, t) {
	return /* @__PURE__ */ $r(Oa, e, t);
}
var ka = /*@__PURE__*/ m("ZodObject", (e, t) => {
	Dn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => _i(e, t, n, r), y(e, "shape", () => t.shape), Xi(e, "ZodObject", {
		keyof() {
			return La(Object.keys(this._zod.def.shape));
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
				catchall: Ta()
			});
		},
		loose() {
			return this.clone({
				...this._zod.def,
				catchall: Ta()
			});
		},
		strict() {
			return this.clone({
				...this._zod.def,
				catchall: Da()
			});
		},
		strip() {
			return this.clone({
				...this._zod.def,
				catchall: void 0
			});
		},
		extend(e) {
			return ye(this, e);
		},
		safeExtend(e) {
			return be(this, e);
		},
		merge(e) {
			return xe(this, e);
		},
		pick(e) {
			return _e(this, e);
		},
		omit(e) {
			return ve(this, e);
		},
		partial(...e) {
			return Se(Ba, this, e[0]);
		},
		required(...e) {
			return Ce(Xa, this, e[0]);
		}
	});
});
function z(e, t) {
	return new ka({
		type: "object",
		shape: e ?? {},
		...w(t)
	});
}
var Aa = /*@__PURE__*/ m("ZodUnion", (e, t) => {
	kn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => vi(e, t, n, r), e.options = t.options;
});
function ja(e, t) {
	return new Aa({
		type: "union",
		options: e,
		...w(t)
	});
}
var Ma = /*@__PURE__*/ m("ZodIntersection", (e, t) => {
	An.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => yi(e, t, n, r);
});
function Na(e, t) {
	return new Ma({
		type: "intersection",
		left: e,
		right: t
	});
}
var Pa = /*@__PURE__*/ m("ZodRecord", (e, t) => {
	Nn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => bi(e, t, n, r), e.keyType = t.keyType, e.valueType = t.valueType;
});
function Fa(e, t, n) {
	return !t || !t._zod ? new Pa({
		type: "record",
		keyType: I(),
		valueType: e,
		...w(t)
	}) : new Pa({
		type: "record",
		keyType: e,
		valueType: t,
		...w(n)
	});
}
var Ia = /*@__PURE__*/ m("ZodEnum", (e, t) => {
	Pn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => pi(e, t, n, r), e.enum = t.entries, e.options = Object.values(t.entries);
	let n = new Set(Object.keys(t.entries));
	e.extract = (e, r) => {
		let i = {};
		for (let r of e) if (n.has(r)) i[r] = t.entries[r];
		else throw Error(`Key ${r} not found in enum`);
		return new Ia({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	}, e.exclude = (e, r) => {
		let i = { ...t.entries };
		for (let t of e) if (n.has(t)) delete i[t];
		else throw Error(`Key ${t} not found in enum`);
		return new Ia({
			...t,
			checks: [],
			...w(r),
			entries: i
		});
	};
});
function La(e, t) {
	return new Ia({
		type: "enum",
		entries: Array.isArray(e) ? Object.fromEntries(e.map((e) => [e, e])) : e,
		...w(t)
	});
}
var Ra = /*@__PURE__*/ m("ZodTransform", (e, t) => {
	Fn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => hi(e, t, n, r), e._zod.parse = (n, r) => {
		if (r.direction === "backward") throw new g(e.constructor.name);
		n.addIssue = (r) => {
			if (typeof r == "string") n.issues.push(De(r, n.value, t));
			else {
				let t = r;
				t.fatal && (t.continue = !1), t.code ??= "custom", t.input ??= n.value, t.inst ??= e, n.issues.push(De(t));
			}
		};
		let i = t.transform(n.value, n);
		return i instanceof Promise ? i.then((e) => (n.value = e, n.fallback = !0, n)) : (n.value = i, n.fallback = !0, n);
	};
});
function za(e) {
	return new Ra({
		type: "transform",
		transform: e
	});
}
var Ba = /*@__PURE__*/ m("ZodOptional", (e, t) => {
	Ln.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Va(e) {
	return new Ba({
		type: "optional",
		innerType: e
	});
}
var Ha = /*@__PURE__*/ m("ZodExactOptional", (e, t) => {
	Rn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Oi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ua(e) {
	return new Ha({
		type: "optional",
		innerType: e
	});
}
var Wa = /*@__PURE__*/ m("ZodNullable", (e, t) => {
	zn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => xi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ga(e) {
	return new Wa({
		type: "nullable",
		innerType: e
	});
}
var Ka = /*@__PURE__*/ m("ZodDefault", (e, t) => {
	Bn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ci(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
});
function qa(e, t) {
	return new Ka({
		type: "default",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : fe(t);
		}
	});
}
var Ja = /*@__PURE__*/ m("ZodPrefault", (e, t) => {
	Hn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => wi(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Ya(e, t) {
	return new Ja({
		type: "prefault",
		innerType: e,
		get defaultValue() {
			return typeof t == "function" ? t() : fe(t);
		}
	});
}
var Xa = /*@__PURE__*/ m("ZodNonOptional", (e, t) => {
	Un.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Si(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function Za(e, t) {
	return new Xa({
		type: "nonoptional",
		innerType: e,
		...w(t)
	});
}
var Qa = /*@__PURE__*/ m("ZodCatch", (e, t) => {
	Gn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ti(e, t, n, r), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
});
function $a(e, t) {
	return new Qa({
		type: "catch",
		innerType: e,
		catchValue: typeof t == "function" ? t : () => t
	});
}
var eo = /*@__PURE__*/ m("ZodPipe", (e, t) => {
	Kn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Ei(e, t, n, r), e.in = t.in, e.out = t.out;
});
function to(e, t) {
	return new eo({
		type: "pipe",
		in: e,
		out: t
	});
}
var no = /*@__PURE__*/ m("ZodReadonly", (e, t) => {
	Jn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => Di(e, t, n, r), e.unwrap = () => e._zod.def.innerType;
});
function ro(e) {
	return new no({
		type: "readonly",
		innerType: e
	});
}
var io = /*@__PURE__*/ m("ZodCustom", (e, t) => {
	Xn.init(e, t), F.init(e, t), e._zod.processJSONSchema = (t, n, r) => mi(e, t, n, r);
});
function ao(e, t = {}) {
	return /* @__PURE__ */ ei(io, e, t);
}
function oo(e, t) {
	return /* @__PURE__ */ ti(e, t);
}
//#endregion
//#region src/ConfigSchema.ts
var so = La(["magentoGraphql", "intentApi"]), co = z({
	data: z({
		enabledCategories: R(I()),
		minProductCount: ya().int().nonnegative(),
		attributeExcludedInLayer: R(I()),
		attributeOrder: R(I()),
		labelMap: Fa(I(), I()),
		ai: z({
			enabled: Ca(),
			activationThreshold: ya().int().nonnegative(),
			matchThreshold: ya().int().nonnegative(),
			minIntentScore: ya().int().nonnegative(),
			maxProductsForAnalysis: ya().int().positive()
		})
	}),
	translations: Fa(I(), I()).default({}).optional(),
	integration: z({ requires: R(so) }).optional()
}).strict();
function lo(e) {
	return co.parse(e);
}
//#endregion
//#region src/ConfigSchemaRuntime.ts
var uo = z({
	integrations: z({
		magentoGraphql: z({ api: I().url() }),
		intentApi: z({ baseUrl: I().url() })
	}),
	context: z({
		storeCode: I(),
		category: I()
	})
});
function fo(e) {
	return uo.parse(e);
}
//#endregion
//#region src/Config.ts
var po = "intentdiscovery";
function mo(e, t, n) {
	try {
		let r = ho(lo(e), fo(t));
		return n?.log("bootstrap", "Config resolved", r), Object.freeze(r);
	} catch (e) {
		throw n?.log("bootstrap", "Invalid widget contract", e instanceof Error ? e.message : e, "error"), e;
	}
}
function ho(e, t) {
	return {
		data: e.data,
		runtime: {
			storeCode: t.context.storeCode,
			category: t.context.category
		},
		integrations: {
			magentoGraphql: t.integrations?.magentoGraphql,
			intentApi: t.integrations?.intentApi
		}
	};
}
//#endregion
//#region src/activity/Context/ActivityContext.tsx
var go = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/activity.guard.ts
function _o() {
	if (typeof window > "u") return [];
	let e = new URLSearchParams(window.location.search).get("reactedge_debug");
	return e ? e === "1" || e === "all" ? ["all"] : e.split(",").map((e) => e.trim().toLowerCase()) : null;
}
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/activity/index.ts
var vo = class {
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
		let e = _o();
		return e !== null && (e.includes("all") || e.includes(this.widgetId.toLowerCase()));
	}
	setCorrelationId(e) {
		this.correlationId = e;
	}
	getCorrelationId() {
		return this.correlationId;
	}
}, yo = go.Provider, bo = ({ children: e, hostElement: t }) => {
	let n = new vo(po, (t ?? document.documentElement).dataset.instance);
	return /* @__PURE__ */ l(yo, {
		value: n,
		children: e
	});
};
//#endregion
//#region src/activity/Context/useActivityContext.ts
function B() {
	let e = n(go);
	if (!e) throw Error("useInstanceState must be used within InstanceStateProvider");
	return e;
}
//#endregion
//#region src/state/System/SystemState.tsx
var xo = e(void 0);
//#endregion
//#region ../../packages/widget-build/shared-resources/framework/graphql/graphqlResponseNormalizer.ts
function So(e, t) {
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
function Co(e, t, n) {
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
			}), s = So(o, n), n?.log("graphql-invalid-json", "GraphQL failed raw text", {
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
var wo = 36e5, To = class {
	ttl;
	constructor(e = wo) {
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
function Eo(e, t, n) {
	let r = Co(e, t, n), i = /* @__PURE__ */ new Map();
	return async function(e, n, a = {
		cache: !0,
		ttl: 6e4
	}) {
		if (!a.cache) return r(e, n);
		let o = new To(a.ttl), s = o.getKey(e, n, t), c = o.get(s);
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
//#region src/integration/intent/IntentEngine.ts
var Do = class {
	state = {
		intentText: "",
		categoryScore: {},
		attributeScore: {},
		productScore: {},
		priceAffinity: {},
		recommendations: [],
		resultCount: 0,
		status: "idle",
		intentInterpreted: !1,
		intentInterpretationReady: !1,
		searchReady: !1
	};
	intentApiClient;
	listeners = /* @__PURE__ */ new Set();
	constructor(e) {
		this.intentApiClient = e, this.resolveUrl();
	}
	resolveUrl() {
		if (typeof window > "u") return;
		let e = window.location.pathname.split("/").filter(Boolean), t = e[e.length - 1];
		t?.endsWith(".html") && (t = t.replace(".html", "")), this.state.currentUrl = t || "";
	}
	applySignals(e) {
		this.state.attributeScore = {}, this.state.categoryScore = {}, this.state.productScore = {};
		for (let t in e) for (let n in e[t]) this.handle({
			type: "filter_select",
			attribute: t,
			value: n
		});
	}
	subscribe(e) {
		return this.listeners.add(e), () => this.listeners.delete(e);
	}
	notify() {
		let e = structuredClone(this.state);
		for (let t of this.listeners) t(e);
	}
	handle(e) {
		switch (e.type) {
			case "status_updated":
				this.state.status = e.status;
				break;
			case "text_updated":
				this.state.intentText = e.text;
				break;
			case "category_view":
				this.bump(this.state.categoryScore, e.id);
				break;
			case "filter_toggle": {
				let { attribute: t, value: n } = e;
				this.state.attributeScore?.[t]?.[n] ? this.handle({
					type: "filter_deselect",
					attribute: t,
					value: n
				}) : this.handle({
					type: "filter_select",
					attribute: t,
					value: n
				});
				break;
			}
			case "filter_select":
				this.state.attributeScore[e.attribute] = {}, this.bump(this.state.attributeScore[e.attribute], e.value);
				break;
			case "filter_deselect":
				this.state.attributeScore[e.attribute] || (this.state.attributeScore[e.attribute] = {}), this.lower(this.state.attributeScore[e.attribute], e.value);
				break;
			case "product_view":
				this.bump(this.state.productScore, e.sku);
				break;
			case "add_to_cart": this.bump(this.state.productScore, e.sku), this.updatePriceAffinity(e.price);
		}
		this.notify();
	}
	hydrateFromFilters(e) {
		this.state.attributeScore = e, this.notify();
	}
	registerUrl() {
		let e = window.location.pathname, t = e.split("/").filter(Boolean);
		return {
			path: e,
			lastSegment: t[t.length - 1]
		};
	}
	getState() {
		return this.state;
	}
	getApiClient() {
		return this.intentApiClient;
	}
	bump(e, t) {
		e[t] = (e[t] || 0) + 1;
	}
	lower(e, t) {
		let n = (e[t] || 0) - 1;
		n <= 0 ? delete e[t] : e[t] = n;
	}
	updatePriceAffinity(e) {
		let { min: t, max: n, avg: r } = this.state.priceAffinity;
		this.state.priceAffinity.min = t === void 0 ? e : Math.min(t, e), this.state.priceAffinity.max = n === void 0 ? e : Math.max(n, e), this.state.priceAffinity.avg = r === void 0 ? e : (r + e) / 2;
	}
}, Oo = ({ intentApiClient: e }) => new Do(e), ko = (e, t) => {
	let { baseUrl: n, store: r } = e, i = async (e, i) => {
		t?.log("ai-engine", "AI Engine payload", i);
		let a = await fetch(`${n}${e}`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Store: r,
				"X-Correlation-Id": t?.getCorrelationId() || ""
			},
			body: JSON.stringify(i)
		});
		if (!a.ok) throw t?.log("ai-engine", "AI Engine failed", null, "error"), Error(`Intent API request failed: ${e}`);
		return a.json();
	};
	return {
		suggest: (e) => i("/intent/suggest", e),
		interpret: (e) => i("/intent/interpret", e),
		dummy: (e) => i("/intent/dummy", e)
	};
}, Ao = xo.Provider, jo = ({ children: e, config: t, runtime: n, activity: r, bootstrap: i }) => {
	if (!t?.magentoGraphql?.api) throw Error("GraphQL client cannot be created without API endpoint");
	let o = a(() => Eo(t.magentoGraphql.api, n.storeCode, r), [
		t.magentoGraphql?.api,
		n.storeCode,
		r
	]), s = t.intentApi;
	if (!s?.baseUrl) throw Error("intentApi endpoint is required");
	let c = a(() => ko({
		baseUrl: s.baseUrl,
		store: n.storeCode
	}, r), [
		s.baseUrl,
		n.storeCode,
		r
	]), u = a(() => Oo({ intentApiClient: c }), [c]);
	return /* @__PURE__ */ l(Ao, {
		value: {
			graphqlClient: o,
			intentEngine: u,
			bootstrap: i
		},
		children: e
	});
}, Mo = e(void 0);
//#endregion
//#region src/lib/translate.ts
function No(e) {
	return (t, ...n) => {
		let r = e?.[t] ?? t;
		n.forEach((e, t) => {
			let n = t + 1;
			r = r.replace(RegExp(`%${n}`, "g"), String(e));
		});
		let i = 0;
		return r = r.replace(/%s/g, () => i < n.length ? String(n[i++]) : "%s"), r;
	};
}
//#endregion
//#region src/state/Translation/TranslationStateProvider.tsx
var Po = Mo.Provider, Fo = ({ children: e, translations: t }) => {
	let n = a(() => No(t), [t]);
	return /* @__PURE__ */ l(Po, {
		value: { t: n },
		children: e
	});
};
//#endregion
//#region src/components/global/SearchOverlay/Circle.tsx
function Io({ size: e = 40 }) {
	return /* @__PURE__ */ l("svg", {
		width: e,
		height: e,
		viewBox: "0 0 50 50",
		"aria-hidden": "true",
		children: /* @__PURE__ */ l("circle", {
			cx: "25",
			cy: "25",
			r: "20",
			fill: "none",
			stroke: "#d3cdcd",
			strokeWidth: "2",
			strokeDasharray: "20 80",
			strokeLinecap: "round",
			children: /* @__PURE__ */ l("animateTransform", {
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
//#region src/components/global/SearchOverlay/StandardSpinner.tsx
function Lo({ size: e = 40 }) {
	return /* @__PURE__ */ l("div", {
		className: "standard-widget-loader-wrapper",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ l(Io, { size: e })
	});
}
//#endregion
//#region src/components/global/SpinnerOverlay.tsx
var Ro = () => /* @__PURE__ */ l(Lo, {});
//#endregion
//#region src/state/System/useSystemState.ts
function V() {
	let e = n(xo);
	if (!e) throw Error("useSystemState must be used within SystemStateProvider");
	return e;
}
//#endregion
//#region src/lib/error.ts
function zo(e) {
	return e instanceof Error ? e : {
		name: "unknonw",
		message: e
	};
}
//#endregion
//#region src/services/magento/fetchMagentoCategory.ts
var Bo = "\n  query MagentoCategories($filter: CategoryFilterInput!) {\n      categories(\n        filters: $filter\n      ) {\n        items {\n          id        \n          name        \n          children {\n            id           \n          }\n        }\n      }\n    }\n";
async function Vo(e, t) {
	let n = (await e(Bo, { filter: { url_key: { eq: t } } })).categories.items[0];
	if (!n) throw Error(`Magento category not found for url_key: ${t}`);
	return n;
}
//#endregion
//#region src/hooks/infra/useMagentoCategory.tsx
function Ho(e, n) {
	let [i, a] = s(), [o, c] = s(!1), [l, u] = s(null), { graphqlClient: d } = V(), f = t(async (e) => {
		if (e) {
			c(!0), u(null);
			try {
				let t = await Vo(d, e);
				a(t);
			} catch (e) {
				u(zo(e));
			} finally {
				c(!1);
			}
		}
	}, [d]);
	return r(() => {
		e && f(n);
	}, [
		n,
		e,
		d,
		f
	]), {
		magentoCategory: i,
		loading: o,
		error: l,
		refetch: f
	};
}
//#endregion
//#region src/hooks/domain/useCategory.tsx
function Uo(e) {
	let { bootstrap: t } = V(), n = t?.categoryData, r = !n, { magentoCategory: i, loading: a, error: o, refetch: s } = Ho(r, e);
	return {
		categoryData: n ?? i,
		categoryLoading: r ? a : !1,
		categoryError: r ? o : null,
		refetch: s
	};
}
//#endregion
//#region src/components/global/ErrorState.tsx
function Wo({ error: e }) {
	let t = B();
	return r(() => {
		t.log("intentdiscovery", "Intent Discovery Failure", e, "error");
	}, [t, e]), /* @__PURE__ */ l(c, { children: "error" });
}
//#endregion
//#region src/hooks/useDebounce.tsx
function Go(e, t = 500) {
	let [n, i] = s(e);
	return r(() => {
		let n = setTimeout(() => {
			i(e);
		}, t);
		return () => {
			clearTimeout(n);
		};
	}, [e, t]), n;
}
//#endregion
//#region src/hooks/domain/useIntentDecision.tsx
var Ko = 50, qo = (e, t) => ({ remainingChars: (e.ai?.activationThreshold ?? Ko) - Go(t, 400).trim().length }), Jo = (e) => {
	let [t, n] = s(""), { remainingChars: r } = qo(e, t);
	return { intent: {
		text: t,
		setIntent: n,
		remainingChars: r
	} };
}, Yo = "intent-discovery-state", H = {
	intentText: "",
	categoryScore: {},
	attributeScore: {},
	productScore: {},
	priceAffinity: {},
	status: "idle",
	recommendations: [],
	resultCount: 0,
	intentInterpreted: !1,
	intentInterpretationReady: !1,
	searchReady: !1
};
function Xo() {
	if (typeof window > "u") return H;
	try {
		let e = localStorage.getItem(Yo);
		return e ? {
			...H,
			...JSON.parse(e)
		} : H;
	} catch {
		return H;
	}
}
function Zo() {
	Qo(H);
}
function Qo(e) {
	typeof window > "u" || localStorage.setItem(Yo, JSON.stringify({
		intentText: e.intentText,
		categoryScore: e.categoryScore,
		attributeScore: e.attributeScore,
		priceAffinity: e.priceAffinity
	}));
}
var $o = e(void 0);
//#endregion
//#region src/state/Intent/useIntentState.ts
function U() {
	let e = n($o);
	if (!e) throw Error("useIntentState must be used within IntentStateProvider");
	return e;
}
//#endregion
//#region src/components/global/SearchOverlay/Spinner.tsx
function es({ size: e = 40 }) {
	return /* @__PURE__ */ l("div", {
		className: "widget-loader-wrapper",
		role: "status",
		"aria-label": "Loading",
		children: /* @__PURE__ */ l(Io, { size: e })
	});
}
//#endregion
//#region src/state/Translation/useTranslationState.ts
function W() {
	let e = n(Mo);
	if (!e) throw Error("useTranslationState must be used within TranslationStateProvider");
	return e;
}
//#endregion
//#region src/components/global/SearchOverlay/Sparkle.tsx
var ts = () => /* @__PURE__ */ l("div", {
	className: "sparkles",
	children: [
		{
			left: -40,
			top: 0,
			color: "#6366f1"
		},
		{
			left: 30,
			top: -10,
			color: "#ec4899"
		},
		{
			left: 60,
			top: 20,
			color: "#22c55e"
		},
		{
			left: -20,
			top: 25,
			color: "#f59e0b"
		}
	].map((e, t) => /* @__PURE__ */ l("div", {
		className: "sparkle",
		style: {
			left: e.left,
			top: e.top,
			background: e.color
		}
	}, t))
}), ns = () => {
	let { t: e } = W();
	return /* @__PURE__ */ u("div", {
		className: "intent-search-overlay",
		children: [
			/* @__PURE__ */ l(es, {}),
			/* @__PURE__ */ l("div", {
				className: "search-overlay-text",
				children: e("Searching your best match…")
			}),
			/* @__PURE__ */ l(ts, {})
		]
	});
}, rs = "intent:v1", is = 864e5, as = {
	save(e) {
		let t = {
			v: 1,
			attributeScore: e.attributeScore,
			categoryScore: e.categoryScore,
			ts: Date.now()
		};
		try {
			localStorage.setItem(rs, JSON.stringify(t));
		} catch {}
	},
	isEmpty() {
		try {
			let e = localStorage.getItem(rs);
			if (!e) return !0;
			let t = JSON.parse(e);
			return t.v !== 1 || Date.now() - t.ts > is;
		} catch {
			return !0;
		}
	},
	load() {
		try {
			let e = localStorage.getItem(rs);
			if (!e) return null;
			let t = JSON.parse(e);
			return t.v !== 1 || Date.now() - t.ts > is ? null : t;
		} catch {
			return null;
		}
	},
	clear() {
		try {
			localStorage.removeItem(rs);
		} catch {}
	}
}, os = (e) => {
	let t = document.createElement("div");
	return t.innerHTML = e, t.innerText;
}, ss = (e) => {
	let t = document.createElement("textarea");
	return t.innerHTML = e, t.value;
};
function cs(e) {
	return e?.replace(/<[^>]+>/g, "");
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/IntentMessage/PreviousIntent/PreviousFilters.tsx
var ls = ({ attributesDisplay: e }) => e.length === 0 ? null : /* @__PURE__ */ l("div", {
	className: "intent-resume__filters",
	children: e.map((e) => /* @__PURE__ */ l("span", {
		className: "intent-resume__chip",
		children: os(e.optionLabel)
	}, `${e.attributeCode}-${e.optionValue}`))
});
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/IntentMessage/PreviousIntent/mapIntentToDisplay.ts
function us(e, t, n) {
	return e ? Object.entries(e).flatMap(([e, r]) => Object.keys(r).map((r) => {
		let i = t[e], a = n?.get(e)?.get(r);
		return !i || !a ? null : {
			label: i.label,
			attributeCode: e,
			optionValue: r,
			optionLabel: a
		};
	})).filter((e) => e !== null) : [];
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/IntentMessage/PreviousIntent/resolvePersistedIntentFilters.ts
function ds(e, t, n) {
	let r = Object.fromEntries(e.map((e) => [e.code, e]));
	return us(t?.attributeScore, r, n);
}
//#endregion
//#region src/hooks/domain/useOptionLabelMap.ts
function fs(e) {
	return a(() => {
		if (!e) return /* @__PURE__ */ new Map();
		let t = /* @__PURE__ */ new Map();
		for (let n of e) {
			let e = /* @__PURE__ */ new Map();
			for (let t of n.options) e.set(t.value, t.label);
			t.set(n.code, e);
		}
		return t;
	}, [e]);
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/IntentMessage/PreviousIntent.tsx
var ps = ({ attributes: e }) => {
	let { dispatch: t } = U(), { t: n } = W(), r = fs(e), i = as.load();
	if (!i) return null;
	let a = ds(e, i, r);
	if (a.length === 0) return null;
	function o() {
		t({
			type: "BOOTSTRAP_FROM_PERSISTED_INTENT",
			payload: i
		});
	}
	return /* @__PURE__ */ u("div", {
		className: "intent-resume",
		children: [/* @__PURE__ */ u("div", {
			className: "intent-resume__title",
			children: [/* @__PURE__ */ l("span", { children: n("Reuse your previous filters in this category") }), /* @__PURE__ */ l("button", {
				className: "intent-resume__button",
				onClick: o,
				children: n("Apply")
			})]
		}), /* @__PURE__ */ l(ls, { attributesDisplay: a })]
	});
}, ms = ({ direction: e }) => /* @__PURE__ */ u("svg", {
	width: "16",
	height: "16",
	viewBox: "0 0 24 24",
	children: [e === "right" && /* @__PURE__ */ l("path", {
		d: "M9 6l6 6-6 6",
		stroke: "currentColor",
		fill: "none",
		strokeWidth: "2"
	}), e === "down" && /* @__PURE__ */ l("path", {
		d: "M6 9l6 6 6-6",
		stroke: "currentColor",
		fill: "none",
		strokeWidth: "2"
	})]
}), hs = ({ intent: e, attributeLayerData: t }) => {
	let { t: n } = W(), { intentState: r } = U(), [i, a] = s(!1), o = (t) => {
		e.setIntent(t.target.value);
	};
	return r.status === "suggestionProcessing" || r.status === "readyToRecommend" ? null : /* @__PURE__ */ u("div", {
		className: "finder",
		children: [
			/* @__PURE__ */ l("h2", {
				className: "finder__title",
				children: n("May I ask why you came here to shop?")
			}),
			/* @__PURE__ */ l("div", {
				className: `intent-drawer ${i ? "open" : ""}`,
				children: t.attributes && /* @__PURE__ */ l(ps, { attributes: t.attributes })
			}),
			/* @__PURE__ */ u("div", {
				className: "intent-input-wrapper",
				children: [!as.isEmpty() && /* @__PURE__ */ l("button", {
					className: "intent-apply-left",
					onClick: () => a((e) => !e),
					children: /* @__PURE__ */ l(ms, { direction: i ? "down" : "right" })
				}), /* @__PURE__ */ l("input", {
					type: "text",
					placeholder: n("Tell us what matters most for your purchase"),
					value: e.text,
					onChange: (e) => o(e),
					className: "intent-input"
				})]
			})
		]
	});
}, gs = () => {
	let { t: e } = W();
	return /* @__PURE__ */ l("div", {
		className: "intent-banner empty",
		children: e("No match products found")
	});
}, _s = () => {
	let { t: e } = W(), { intentState: t } = U();
	return /* @__PURE__ */ l("div", {
		className: "intent-banner success",
		"data-state": "success",
		children: e("%s matching products found", t.recommendations.length)
	});
}, vs = ({ attributeLayerData: e, intentStarted: t, remainingChars: n, resetClick: r }) => {
	let { t: i } = W(), { intentState: a, getAiReadiness: o } = U(), s = o(e);
	return a.status === "suggestionSent" || a.status === "suggestionProcessing" || a.status === "readyToRecommend" ? null : /* @__PURE__ */ u("div", {
		className: `intent-ai-threshold ${s === 100 ? "ready" : ""}`,
		"data-state": "warning",
		children: [/* @__PURE__ */ u("div", {
			className: "intent-ai-left",
			children: [/* @__PURE__ */ l("div", {
				className: "confidence",
				children: i("Ready to suggest")
			}), /* @__PURE__ */ l("div", { children: /* @__PURE__ */ l("button", {
				className: "intent-reset",
				onClick: r,
				children: i("Reset Filters")
			}) })]
		}), /* @__PURE__ */ l("div", {
			className: "help",
			"data-readiness-hint": !0,
			children: i(t ? "Add %s+ characters or refine your preferences" : `${e.totalCount} matches, Target < 30`, n, s)
		})]
	});
}, ys = ({ attributeLayerData: e, resetClick: t }) => {
	let { t: n } = W();
	return /* @__PURE__ */ u("div", {
		className: "intent-ai-threshold ready",
		"data-state": "warning",
		children: [/* @__PURE__ */ u("div", {
			className: "intent-ai-left",
			children: [/* @__PURE__ */ l("div", {
				className: "confidence",
				children: n("Ready to suggest")
			}), /* @__PURE__ */ l("button", {
				className: "intent-reset",
				onClick: t,
				children: n("Reset Filters")
			})]
		}), /* @__PURE__ */ l("div", {
			className: "help",
			"data-readiness-hint": !0,
			children: n(`${e.totalCount} matches - AI ready to interpret your request`)
		})]
	});
}, bs = ({ attributeLayerData: e, intentStarted: t, canInterpretOrSuggest: n, remainingChars: r }) => {
	let { intentState: i, resetIntent: a } = U(), o = () => {
		a();
	};
	return i.status === "noSuggestionFound" ? /* @__PURE__ */ l(gs, {}) : i.status === "suggestionSent" ? /* @__PURE__ */ l(_s, {}) : n ? /* @__PURE__ */ l(ys, {
		attributeLayerData: e,
		resetClick: o
	}) : /* @__PURE__ */ l(vs, {
		attributeLayerData: e,
		intentStarted: t,
		remainingChars: r,
		resetClick: o
	});
}, xs = ({ attributeLayerData: e, intent: t, remainingChars: n, onAsk: r }) => {
	let { t: i } = W(), { intentState: a, getAiReadiness: o } = U(), s = o(e), d = a.intentInterpretationReady || s === 100, f = !!t?.text?.trim();
	return /* @__PURE__ */ u(c, { children: [/* @__PURE__ */ u("div", {
		className: "intent-explanations",
		children: [/* @__PURE__ */ l("button", {
			onClick: r,
			className: "filter-apply-button",
			disabled: !d,
			children: i("Suggest Products")
		}), /* @__PURE__ */ l("label", {
			className: "intent-subtitle",
			children: i("Describe what you're looking for")
		})]
	}), /* @__PURE__ */ l(bs, {
		attributeLayerData: e,
		intentStarted: f,
		remainingChars: n,
		canInterpretOrSuggest: d
	})] });
}, Ss = ({ attribute_code: e, size: t }) => (t === void 0 && (t = 25), /* @__PURE__ */ l("img", {
	className: "intent-icon",
	width: `${t}px`,
	src: `/media/icons/${e}.svg`
})), Cs = ({ attr: e, isSelected: t, value: n, onClick: r }) => {
	let i = n && n.slice(0, 1) || [], a = n && i && n?.length - i.length || 0;
	return /* @__PURE__ */ u("div", {
		className: "choice-tile",
		"data-intent-card": e.code,
		"data-intent-active": t,
		"data-intent-activated": n && n?.length > 0,
		onClick: r,
		children: [
			/* @__PURE__ */ l("span", {
				className: `choice-tile__label ${t ? "choice-tile__label--selected" : ""}`,
				children: e.label
			}),
			n && /* @__PURE__ */ u("span", {
				className: "choice-tile__info",
				children: [i.map((e) => /* @__PURE__ */ l("span", {
					className: "badge",
					children: ss(e)
				}, e)), a > 0 && /* @__PURE__ */ u("span", {
					className: "badge badge--more",
					children: ["+", a]
				})]
			}),
			/* @__PURE__ */ l(Ss, { attribute_code: e.code })
		]
	});
}, ws = "intent-discovery-interaction", Ts = {
	navigation: { activeAttribute: null },
	selection: { selectedOptions: [] }
}, Es = () => {
	if (typeof window > "u") return Ts;
	try {
		let e = localStorage.getItem(ws);
		return {
			navigation: { activeAttribute: (e ? JSON.parse(e) : null)?.activeAttribute ?? null },
			selection: { selectedOptions: [] }
		};
	} catch {
		return Ts;
	}
}, Ds = e(void 0);
//#endregion
//#region src/state/Interaction/useInteractionState.ts
function Os() {
	let e = n(Ds);
	if (!e) throw Error("useInteractionState must be used within InteractionStateProvider");
	return e;
}
//#endregion
//#region src/lib/attributes.ts
function ks(e, t) {
	let n = new Set(t.attributeExcludedInLayer || []), r = t.attributeOrder || [], i = t.labelMap || {}, a = e.filter((e) => !n.has(e.code)).map((e) => ({
		...e,
		label: i[e.code] ?? e.label
	})), o = [], s = new Map(a.map((e) => [e.code, e]));
	for (let e of r) {
		let t = s.get(e);
		t && (o.push(t), s.delete(e));
	}
	return [...o, ...s.values()];
}
function As(e) {
	return JSON.stringify(Object.entries(e).sort());
}
//#endregion
//#region src/hooks/domain/useIntentAttributes.tsx
function js(e, t) {
	return a(() => ks(e, t), [e, t]);
}
//#endregion
//#region src/hooks/domain/useSelectedPreference.ts
function Ms(e, t) {
	return !!(t?.attributeScore && e in t.attributeScore || e === "price" && t?.priceAffinity && Object.keys(t.priceAffinity).length > 0);
}
function Ns(e, t, n) {
	let r = n?.attributeScore?.[e];
	if (!r) return [];
	let i = t.find((t) => t.code === e);
	return Object.entries(r).map(([e]) => i?.options.find((t) => String(t.value) === String(e))?.label ?? e);
}
function Ps(e, t) {
	return e?.filter((e) => Ms(e.code, t)) || [];
}
function Fs(e, t) {
	return {
		selected: Ps(e, t),
		valueFor: (n) => {
			let r = t?.attributeScore?.[n];
			if (!r) return null;
			let [i] = Object.entries(r).sort((e, t) => t[1] - e[1])[0] || [];
			if (!i) return null;
			let a = e.find((e) => e.code === n);
			if (!a) return null;
			let o = a.options.find((e) => String(e.value) === String(i));
			return o ? String(o.value) : null;
		},
		displayFor: (n) => Ns(n, e, t)
	};
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/AttributeLayer/AttributeSelectorLayer.tsx
var Is = ({ attributeLayerData: e, config: t }) => {
	let { setActiveAttribute: n } = Os(), [r, i] = s(!1), { intentState: a } = U(), { interactionState: o } = Os(), c = js(e.attributes, t), d = r ? c : c.slice(0, 3), { displayFor: f } = Fs(e.attributes, a), { t: p } = W(), m = (e) => o?.navigation.activeAttribute === e, h = a.status === "suggestionProcessing";
	return /* @__PURE__ */ u("div", {
		className: `step-finder ${h ? "step-finder--disabled" : ""}`,
		children: [d.map((e) => {
			let t = e.code, r = m(t);
			return /* @__PURE__ */ l(Cs, {
				attr: e,
				isSelected: r,
				value: f(t),
				onClick: () => n(t)
			}, t);
		}), c.length > 4 && /* @__PURE__ */ l("button", {
			className: "choice-tile choice-tile--view-all",
			onClick: () => i((e) => !e),
			children: p(r ? "Show less" : "View all")
		})]
	});
};
//#endregion
//#region src/lib/ai-recommendations.ts
function Ls(e, t, n) {
	let r = zs(e, n), i = Object.keys(r), a = t.map((e) => ({
		sku: e.sku,
		title: e.name,
		...e.short_description?.html !== void 0 && { shortDescription: e.short_description.html },
		attributes: Bs(e, i, n)
	}));
	return {
		intent: { signals: r },
		products: a
	};
}
function Rs(e, t, n, r, i) {
	let a = zs(e.attributeScore ?? {}, r), o = t.filter((e) => !i.attributeExcludedInLayer?.includes(e.code)).map((e) => ({
		code: e.code,
		label: e.label,
		options: e.options.map((e) => ({
			label: e.label,
			value: e.value,
			count: e.filteredCount
		}))
	}));
	return {
		intent: {
			text: n,
			signals: a
		},
		attributes: o
	};
}
function zs(e, t) {
	let n = {};
	for (let [r, i] of Object.entries(e)) {
		let e = t.get(r);
		if (!e) continue;
		let a = {};
		for (let [t, n] of Object.entries(i)) {
			let r = e.get(t);
			r && (a[r] = n);
		}
		Object.keys(a).length > 0 && (n[r] = a);
	}
	return n;
}
function Bs(e, t, n) {
	let r = {};
	for (let i of t) {
		let t = e[i];
		if (!t || typeof t != "string") continue;
		let a = n.get(i);
		if (!a) continue;
		let o = t.split(",").map((e) => a.get(e)).filter((e) => !!e);
		o.length && (r[i] = o);
	}
	return r;
}
//#endregion
//#region src/services/message-interpret.ts
async function Vs({ payload: e, intentApiClient: t, onSuccess: n, onError: r, setLoading: i, activity: a }) {
	try {
		i(!0);
		let r = await t.interpret(e);
		a.setCorrelationId(r?.correlation_id), a.log("ai-engine", "AI Engine Interpretation", r), n(r);
	} catch (e) {
		a.log("intent-error", "Intent evaluation failed", { error: e }), r && r(e);
	} finally {
		i(!1);
	}
}
//#endregion
//#region src/hooks/domain/useAiInterpretation.tsx
var Hs = ({ intent: e, attributeLayerData: t, config: n, setLoading: r }) => {
	let i = fs(t.attributes), { intentEngine: a } = V(), { intentState: o, setIntentText: s, setPreference: c, resetPreference: l } = U(), u = a.getApiClient(), { dispatch: d } = U(), f = B();
	return async () => {
		let a = Rs(o, t.attributes, e.text, i, n);
		d({ type: "INTERPRETATION_PROCESSING" }), await Vs({
			payload: a,
			intentApiClient: u,
			activity: f,
			setLoading: r,
			onSuccess: (t) => {
				if (d({ type: "INTERPRETATION_DONE" }), l(), !t?.filters?.length && a.intent.text !== "") {
					d({ type: "SUGGESTION_EMPTY" });
					return;
				}
				s(e.text);
				for (let e of t?.filters || []) e.attribute && e.value && c(e.attribute, e.value);
			}
		});
	};
};
//#endregion
//#region src/services/mappers/suggestions/mapSuggestion.ts
function Us(e, t) {
	return {
		sku: e.sku,
		match: e.match,
		reason: e.reason,
		product: t
	};
}
//#endregion
//#region src/hooks/mappers/product.ts
function Ws(e, t) {
	if (!e.small_image.url || !e.price_range) return null;
	let n = cs(e.short_description?.html);
	return {
		sku: e.sku,
		title: e.name,
		...n !== void 0 && { description: n },
		url: `/${Gs(e)}`,
		imageUrl: e.matched_variant_image?.url ?? e.small_image.url,
		price: e.price_range.minimum_price.final_price,
		attributes: Ks(e, t)
	};
}
var Gs = (e) => e.url_rewrites?.length ? e.url_rewrites.find((e) => !e.url.includes("/"))?.url || e.url_rewrites[0].url : null;
function Ks(e, t) {
	let n = {};
	for (let [r, i] of t.entries()) {
		let t = e[r];
		if (!t) continue;
		let a = qs(t).map((e) => i.get(e)).filter(Boolean);
		a.length > 0 && (n[r] = a);
	}
	return n;
}
function qs(e) {
	return e ? Array.isArray(e) ? e.map((e) => String(e)) : typeof e == "string" ? e.split(",").map((e) => e.trim()).filter(Boolean) : [String(e)] : [];
}
//#endregion
//#region src/services/mappers/suggestions/enrichSuggestions.ts
function Js(e, t, n) {
	let r = new Map(t.map((e) => [e.sku, e]));
	return e.map((e) => {
		let t = r.get(e.sku);
		if (!t) return null;
		let i = Ws(t, n);
		return i ? Us(e, i) : null;
	}).filter((e) => e !== null);
}
//#endregion
//#region src/services/recommendations/fetchRecommendations.ts
async function Ys({ attributeScore: e, attributes: t, products: n, optionLabelMap: r, intentApiClient: i }) {
	if (!e || Object.keys(e).length === 0 || !t?.length || !n?.length) return { suggestions: [] };
	let a = Ls(e, n, r);
	return { suggestions: Js((await i.suggest(a)).suggestions ?? [], n, r) };
}
//#endregion
//#region src/hooks/infra/useMagentoProducts.tsx
function Xs(e) {
	return `
      query GetIntentProducts($filter: ProductAttributeFilterInput!) {
          products(filter: $filter) {           
            items {
              id
              sku
              name    
              small_image {
                url
              }
              url_rewrites {
                url 
              }             
              ... on ConfigurableProduct {
                matched_variant_image {  
                   url              
                }   
                variants {
                  attributes {
                    code
                    value_index
                  }                 
                }
              }
              price_range {
                minimum_price {
                  final_price {
                    value
                    currency
                  }
                }
              }
              short_description {
                html
              }  
              ${e}       
            }
          }
        }
    `;
}
//#endregion
//#region src/services/recommendations/buildFilter.ts
function Zs(e) {
	return Object.keys(e.attributeScore).join("\n");
}
//#endregion
//#region src/services/recommendations/fetchProducts.ts
async function Qs({ filter: e, intentState: t, graphqlClient: n }) {
	let r = await n(Xs(Zs(t)), { filter: e });
	if (!r?.products) throw Error("Failed to fetch products");
	return r.products.items;
}
//#endregion
//#region src/services/recommendations/analysesearch.service.ts
async function $s(e) {
	let t = await Qs(e);
	return {
		products: t,
		ai: await Ys({
			...e,
			products: t
		})
	};
}
//#endregion
//#region src/lib/category.ts
var ec = (e) => {
	let t = e?.children.map((e) => String(e.id)) ?? [];
	return e?.id && t.push(String(e.id)), t;
}, tc = (e, t) => !e || t && !t.includes(e) ? null : e;
//#endregion
//#region src/lib/option-match.ts
function nc(e, t) {
	let n = t?.attributeScore?.[e.code] || {};
	return {
		...e,
		options: e.options.map((e) => {
			let t = n[e.value] || 0;
			return {
				...e,
				intentScore: t,
				isBoosted: t > 0
			};
		})
	};
}
function rc(e) {
	if (e === void 0) return {};
	let { attributeScore: t } = e, n = {};
	for (let [e, r] of Object.entries(t)) {
		if (!r) continue;
		let t = Object.entries(r).filter(([, e]) => e > 0).map(([e]) => e);
		t.length > 0 && (n[e] = t);
	}
	return n;
}
//#endregion
//#region src/hooks/domain/useOptionSelectionFilter.tsx
function ic(e) {
	let { intentState: t } = U(), n = a(() => ec(e), [e]), r = a(() => rc(t), [t]);
	return a(() => {
		let e = { category_id: { in: n } };
		return Object.entries(r).forEach(([t, n]) => {
			if (!Array.isArray(n)) {
				e[t] = { eq: n };
				return;
			}
			if (n.length !== 0) {
				if (n.length === 1) {
					let [r] = n;
					r !== void 0 && (e[t] = { eq: r });
					return;
				}
				e[t] = { in: n };
			}
		}), e;
	}, [n, r]);
}
//#endregion
//#region src/hooks/domain/useAnalyseSearch.tsx
function ac({ attributeLayerData: e, categoryData: t, intentState: n }) {
	let r = B(), { graphqlClient: i, intentEngine: a } = V(), { dispatch: o } = U(), s = ic(t), c = fs(e.attributes), l = a.getApiClient(), { attributeScore: u } = n;
	return async () => {
		let t = await $s({
			graphqlClient: i,
			intentApiClient: l,
			filter: s,
			attributeScore: u,
			attributes: e.attributes ?? [],
			optionLabelMap: c,
			intentState: n
		});
		r.log("recommendations", "Recommendations Received", t.ai.suggestions), o(t.ai?.suggestions?.length ? {
			type: "SUGGESTION_SUCCESS",
			recommendations: t.ai.suggestions,
			filters: n.attributeScore,
			intent: n.intentText
		} : { type: "SUGGESTION_EMPTY" });
	};
}
//#endregion
//#region src/domain/intent/snapshotMatcher.ts
function oc(e, t) {
	if (!e || !e.recommendations || e.recommendations.length === 0) return !1;
	let n = As(t.attributeScore);
	return e.filtersHash === n || e.intentText !== "";
}
//#endregion
//#region src/domain/intent/readinessTransition.ts
function sc(e, t, n) {
	return e === null ? null : e > 0 && t <= 0 ? {
		type: "INTERPRETATION_READY",
		payload: { intent: n }
	} : e <= 0 && t > 0 ? { type: "INTERPRETATION_STARTED" } : null;
}
//#endregion
//#region src/services/intentPersistence/intentSnapshot.service.ts
var cc = "reactedge:suggestions", lc = {
	load() {
		let e = sessionStorage.getItem(cc);
		return e ? JSON.parse(e) : null;
	},
	merge(e) {
		let t = {
			...this.load() ?? {
				intentText: "",
				filtersHash: "",
				recommendations: []
			},
			...e
		};
		return sessionStorage.setItem(cc, JSON.stringify(t)), t;
	},
	save(e) {
		sessionStorage.setItem(cc, JSON.stringify(e));
	},
	clear() {
		sessionStorage.removeItem(cc);
	}
};
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/AttributeLayer/AttributeLayer.controller.ts
function uc({ intent: e, attributeLayerData: t, categoryData: n, config: i }) {
	let [a, c] = s(!1), { dispatch: l, intentState: u } = U(), d = Hs({
		intent: e,
		attributeLayerData: t,
		config: i,
		setLoading: c
	}), f = ac({
		attributeLayerData: t,
		categoryData: n,
		intentState: u
	});
	r(() => {
		u.status === "readyToRecommend" && f();
	}, [u.status, f]);
	let p = o(!1);
	r(() => {
		function e() {
			let e = lc.load();
			e && e.recommendations?.length && window.dispatchEvent(new CustomEvent("reactedge:recommendations", { detail: { recommendations: e.recommendations } }));
		}
		return window.addEventListener("reactedge:request-recommendations", e), () => {
			window.removeEventListener("reactedge:request-recommendations", e);
		};
	}, [u.recommendations]), r(() => {
		if (!p.current) try {
			let e = lc.load();
			if (!e) return;
			oc(e, u) && (l({
				type: "SUGGESTION_PROPAGATE",
				recommendations: e.recommendations,
				filters: JSON.parse(e.filtersHash),
				intent: e.intentText
			}), p.current = !0);
		} catch {}
	}, [
		u.attributeScore,
		l,
		u
	]);
	let m = o(null);
	return r(() => {
		let t = m.current, n = e.remainingChars, r = sc(t, n, e.text);
		r && l(r), m.current = n;
	}, [
		e.remainingChars,
		l,
		e.text
	]), {
		handleAsk: () => {
			l({
				type: "INTERPRETATION_READY",
				payload: { intent: e.text }
			}), d();
		},
		shouldHide: a || u.status === "suggestionProcessing" || u.status === "readyToRecommend",
		intentState: u
	};
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/AttributeLayer.tsx
var dc = (e) => {
	let { handleAsk: t, shouldHide: n } = uc(e);
	return n ? null : /* @__PURE__ */ u("div", {
		className: "finder",
		children: [/* @__PURE__ */ l(xs, {
			attributeLayerData: e.attributeLayerData,
			intent: e.intent,
			remainingChars: e.intent.remainingChars,
			onAsk: t
		}), /* @__PURE__ */ l(Is, {
			attributeLayerData: e.attributeLayerData,
			config: e.config
		})]
	});
}, fc = ({ children: e, className: t = "" }) => /* @__PURE__ */ l("section", {
	className: `event-row ${t}`,
	children: e
}), pc = (e, t) => {
	let { intentState: n } = U(), r = t?.attributes?.filter((t) => t.code === e).map((e) => nc(e, n));
	return {
		totalCount: t?.totalCount,
		attributeData: r && r?.length > 0 ? r[0] : null
	};
}, mc = (e = 0) => new Intl.NumberFormat("en-GB", {
	style: "currency",
	currency: "GBP",
	minimumFractionDigits: 2
}).format(e), hc = (e) => {
	let t = e.split("-");
	if (t.length < 2) return mc(parseInt(t[0] ?? "0"));
	let [n, r] = t;
	return n === void 0 || r === void 0 ? "" : `${mc(parseInt(n))} - ${mc(parseInt(r))}`;
};
function gc(e, t) {
	try {
		return new Intl.NumberFormat(void 0, {
			style: "currency",
			currency: t,
			maximumFractionDigits: 0
		}).format(e);
	} catch {
		return `${e} ${t}`;
	}
}
//#endregion
//#region src/components/IntentDiscovery/IntentDiscoveryLayout/IntentDiscoveryOptions/FinderWidget/StepPriceFinder.tsx
var _c = ({ attributeLayerData: e }) => {
	let { attributeData: t } = pc("price", e), n = () => {};
	return /* @__PURE__ */ l("div", {
		className: "step-finder",
		children: t?.options.map((e) => /* @__PURE__ */ u("label", {
			className: "choice-tile",
			children: [/* @__PURE__ */ l("input", {
				type: "radio",
				name: "preference",
				value: e.value,
				onChange: n
			}), /* @__PURE__ */ l("span", {
				className: "choice-tile__label",
				children: hc(e.label)
			})]
		}, e.value))
	});
}, vc = ({ optionCode: e, attributeLayerData: t }) => {
	let { setActiveAttribute: n, setFocusedOption: r } = Os(), { attributeData: i } = pc(e, t), { setPreference: a, intentState: o, dispatch: s } = U(), c = B(), d = async (t) => {
		n(e), a(e, t.value), r(t.value), s({
			type: "FILTER_CHANGED",
			attributeCode: e,
			optionValue: t.value
		}), c.log("intent-discovery-option", "Intent Option Selection", {
			intentState: o,
			optionCode: e,
			value: t.value
		});
	}, f = o.attributeScore?.[e] || {}, p = (e) => e in f, m = (e) => {
		if (!e.visual) return null;
		let { type: t, value: n } = e.visual;
		return t === "color" ? /* @__PURE__ */ l("span", {
			className: "swatch swatch--color",
			style: { backgroundColor: n }
		}) : null;
	};
	return /* @__PURE__ */ l("div", {
		className: "step-finder",
		children: i?.options.map((e) => /* @__PURE__ */ u("label", {
			className: "choice-tile",
			"data-intent-option": e.label,
			"data-intent-selected": p(e.value),
			"data-intent-count": e.filteredCount,
			children: [
				/* @__PURE__ */ l("input", {
					type: "radio",
					name: "preference",
					checked: p(e.value),
					value: e.value,
					onClick: () => d(e),
					readOnly: !0
				}),
				m(e),
				/* @__PURE__ */ u("span", {
					className: `choice-tile__label ${p(e.value) ? "choice-tile__label--active" : ""}`,
					children: [
						os(e.label),
						" (",
						e.filteredCount,
						")"
					]
				})
			]
		}, e.value))
	});
}, yc = ({ attributeLayerData: e }) => {
	let { navigation: t } = Os().interactionState, n = t.activeAttribute, { intentState: i } = U(), a = i.status === "suggestionProcessing", o = B();
	if (r(() => {
		n !== null && o.log("intent-discovery", "Intent Discover Step", n);
	}, [n, o]), !e || n === null) return null;
	let s;
	return s = n === "price" ? /* @__PURE__ */ l(_c, { attributeLayerData: e }) : /* @__PURE__ */ l(vc, {
		optionCode: n,
		attributeLayerData: e
	}), a ? null : /* @__PURE__ */ l("div", {
		className: "finder",
		children: /* @__PURE__ */ u(fc, { children: [/* @__PURE__ */ l(Ss, {
			attribute_code: n,
			size: 70
		}), s] })
	});
}, bc = ({ suggestion: e }) => {
	let t = /* @__PURE__ */ u("div", {
		"data-role": "recommendation",
		children: [e.product.imageUrl && /* @__PURE__ */ l("img", {
			src: e.product.imageUrl,
			alt: e.product.title,
			loading: "lazy",
			className: "re-intent-image"
		}), /* @__PURE__ */ u("div", {
			className: "re-intent-card-body",
			children: [
				/* @__PURE__ */ l("div", {
					className: "re-intent-product-title",
					children: e.product.title
				}),
				/* @__PURE__ */ l("div", {
					className: "rec-attributes",
					children: Object.entries(e.product?.attributes || {}).flatMap(([e, t]) => t?.map((t) => ({
						attr: e,
						value: t
					}))).slice(0, 4).map(({ attr: e, value: t }) => /* @__PURE__ */ l("span", { children: os(t) }, `${e}-${t}`))
				}),
				/* @__PURE__ */ u("div", {
					className: "re-intent-meta-row",
					children: [/* @__PURE__ */ u("span", {
						className: "re-intent-pill",
						children: [e.match, "% match"]
					}), e.product.price && /* @__PURE__ */ l("span", {
						className: "re-intent-price",
						children: gc(e.product.price.value, e.product.price.currency)
					})]
				}),
				/* @__PURE__ */ l("div", {
					className: "re-intent-reason",
					children: e.reason
				})
			]
		})]
	});
	return e.product.url ? /* @__PURE__ */ l("a", {
		href: e.product.url,
		className: "re-intent-card-item",
		"aria-label": e.product.title,
		children: t
	}) : /* @__PURE__ */ l("div", {
		className: "re-intent-card-item",
		children: t
	});
}, xc = ({ recommendations: e, onClose: t, title: n = "Suggestions" }) => {
	let [r, i] = s(!1), { t: a } = W();
	if (!e?.length) return null;
	let o = r ? e : e.slice(0, 1);
	return /* @__PURE__ */ u("section", {
		className: "re-intent-card",
		children: [/* @__PURE__ */ u("header", {
			className: "re-intent-header",
			children: [/* @__PURE__ */ l("div", {
				className: "re-intent-header-left",
				children: /* @__PURE__ */ l("div", {
					className: "re-intent-title",
					children: n
				})
			}), t && /* @__PURE__ */ l("button", {
				type: "button",
				onClick: t,
				className: "re-intent-close-btn",
				children: "×"
			})]
		}), /* @__PURE__ */ u("div", {
			className: "re-intent-grid",
			children: [o.map((e) => /* @__PURE__ */ l(bc, { suggestion: e }, e.sku)), e.length > 1 && /* @__PURE__ */ l("button", {
				className: "choice-tile choice-tile--view-all",
				onClick: () => i((e) => !e),
				children: a(r ? "Show less" : "View all")
			})]
		})]
	});
}, Sc = () => {
	let { intentState: e } = U(), { t } = W();
	return e.status === "suggestionSent" ? /* @__PURE__ */ l(xc, {
		recommendations: e.recommendations,
		title: t("AI suggestions")
	}) : null;
}, Cc = "\n  query MagentoProducts($filter: ProductAttributeFilterInput!) {\n      products(filter: $filter) {\n        total_count\n        aggregations{\n          attribute_code\n          label\n          count\n          options{\n            count\n            label\n            value\n            swatch_data {\n                value\n                type\n            }\n          }\n        }\n      }\n    }\n", wc = (e) => ({ category_id: { in: e } }), Tc = (e, t) => {
	let n = wc(e), r = rc(t);
	return Object.entries(r).forEach(([e, t]) => {
		if (!Array.isArray(t)) {
			n[e] = { eq: t };
			return;
		}
		if (t.length !== 0) {
			if (t.length === 1) {
				let [r] = t;
				r !== void 0 && (n[e] = { eq: r });
				return;
			}
			n[e] = { in: t };
		}
	}), n;
}, Ec = /* @__PURE__ */ new Map();
async function Dc(e, t, n) {
	let r = JSON.stringify({
		categoryIds: e,
		filters: Tc(e, n)
	});
	if (Ec.has(r)) return Ec.get(r);
	let i = await t(Cc, { filter: Tc(e, n) });
	return Ec.set(r, structuredClone(i?.products)), i?.products;
}
//#endregion
//#region src/services/layeredNavigation/layeredNavigation.service.ts
async function Oc(e, t, n, r, i) {
	let a = await Dc(ec(e), t, i);
	return {
		attributes: ks(kc(r, a), n),
		totalCount: a.total_count,
		baseTotalCount: r.totalCount
	};
}
function kc(e, t) {
	let n = e?.attributes ?? [], r = t?.aggregations ?? [], i = new Map(r.map((e) => [e.attribute_code, e]));
	return n.map((e) => {
		let t = i.get(e.code), n = new Map((t?.options || []).map((e) => [e.value, e]));
		return {
			code: e.code,
			label: e.label,
			options: e.options.map((e) => {
				let t = n.get(e.value)?.count ?? 0;
				return {
					value: e.value,
					label: e.label,
					totalCount: e.filteredCount,
					filteredCount: t,
					isAvailable: t > 0
				};
			})
		};
	});
}
//#endregion
//#region src/hooks/domain/useLayeredNavigation.tsx
var Ac = (e, n, i) => {
	let { graphqlClient: a, bootstrap: o } = V(), c = o?.layeredData, { configuredLayeredAttributes: l } = U(), u = !c, [d, f] = s(null), [p, m] = s(!1), [h, g] = s(null), _ = t(async (t) => {
		try {
			m(!0), g(null);
			let r = await Oc(e, a, i, l, n);
			if (t?.()) return;
			f(r);
		} catch (e) {
			if (t?.()) return;
			f(null), g(zo(e));
		} finally {
			m(!1);
		}
	}, [
		e,
		a,
		i,
		l,
		n
	]);
	return r(() => {
		let e = !1;
		if (u && l) return (async () => {
			await _(() => e);
		})(), () => {
			e = !0;
		};
	}, [
		e,
		n,
		a,
		u,
		i,
		l,
		_
	]), {
		attributeLayerData: c ?? d,
		attributeLayerLoading: p,
		attributeLayerError: h,
		refetch: () => _()
	};
}, jc = ({ config: e, categoryData: t }) => {
	let n = B(), { intent: r } = Jo(e), { intentState: i } = U(), { attributeLayerData: a, attributeLayerError: o } = Ac(t, i, e);
	if (o) return /* @__PURE__ */ l(Wo, { error: o });
	if (!a) return null;
	n.log("attribute-layer", "Filtered Attribute Layer", a);
	let s = i.status === "suggestionProcessing" || i.status === "readyToRecommend";
	return /* @__PURE__ */ u("div", {
		className: "intent-widget",
		children: [s && /* @__PURE__ */ l(ns, {}), /* @__PURE__ */ u("div", {
			className: i.status === "suggestionSent" ? "re-intent-layout re-intent-layout--two" : "re-intent-layout",
			children: [/* @__PURE__ */ u("div", {
				className: "re-intent-col re-intent-col--left",
				children: [
					/* @__PURE__ */ l(hs, {
						intent: r,
						attributeLayerData: a
					}),
					/* @__PURE__ */ l(dc, {
						config: e,
						intent: r,
						attributeLayerData: a,
						categoryData: t
					}),
					/* @__PURE__ */ l(yc, {
						categoryData: t,
						attributeLayerData: a
					})
				]
			}), /* @__PURE__ */ l("div", {
				className: "re-intent-col re-intent-col--right",
				children: /* @__PURE__ */ l(Sc, {})
			})]
		})]
	});
}, Mc = Symbol.for("immer-nothing"), Nc = Symbol.for("immer-draftable"), G = Symbol.for("immer-state"), Pc = process.env.NODE_ENV === "production" ? [] : [
	function(e) {
		return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
	},
	function(e) {
		return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
	},
	"This object has been frozen and should not be mutated",
	function(e) {
		return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
	},
	"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
	"Immer forbids circular references",
	"The first or second argument to `produce` must be a function",
	"The third argument to `produce` must be a function or undefined",
	"First argument to `createDraft` must be a plain object, an array, or an immerable object",
	"First argument to `finishDraft` must be a draft returned by `createDraft`",
	function(e) {
		return `'current' expects a draft, got: ${e}`;
	},
	"Object.defineProperty() cannot be used on an Immer draft",
	"Object.setPrototypeOf() cannot be used on an Immer draft",
	"Immer only supports deleting array indices",
	"Immer only supports setting array indices and the 'length' property",
	function(e) {
		return `'original' expects a draft, got: ${e}`;
	}
];
function K(e, ...t) {
	if (process.env.NODE_ENV !== "production") {
		let n = Pc[e], r = Z(n) ? n.apply(null, t) : n;
		throw Error(`[Immer] ${r}`);
	}
	throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
}
var q = Object, J = q.getPrototypeOf, Fc = "constructor", Ic = "prototype", Lc = "configurable", Rc = "enumerable", zc = "writable", Bc = "value", Y = (e) => !!e && !!e[G];
function X(e) {
	return e ? Uc(e) || Xc(e) || !!e[Nc] || !!e[Fc]?.[Nc] || Zc(e) || Qc(e) : !1;
}
var Vc = q[Ic][Fc].toString(), Hc = /* @__PURE__ */ new WeakMap();
function Uc(e) {
	if (!e || !$c(e)) return !1;
	let t = J(e);
	if (t === null || t === q[Ic]) return !0;
	let n = q.hasOwnProperty.call(t, Fc) && t[Fc];
	if (n === Object) return !0;
	if (!Z(n)) return !1;
	let r = Hc.get(n);
	return r === void 0 && (r = Function.toString.call(n), Hc.set(n, r)), r === Vc;
}
function Wc(e, t, n = !0) {
	Gc(e) === 0 ? (n ? Reflect.ownKeys(e) : q.keys(e)).forEach((n) => {
		t(n, e[n], e);
	}) : e.forEach((n, r) => t(r, n, e));
}
function Gc(e) {
	let t = e[G];
	return t ? t.type_ : Xc(e) ? 1 : Zc(e) ? 2 : Qc(e) ? 3 : 0;
}
var Kc = (e, t, n = Gc(e)) => n === 2 ? e.has(t) : q[Ic].hasOwnProperty.call(e, t), qc = (e, t, n = Gc(e)) => n === 2 ? e.get(t) : e[t], Jc = (e, t, n, r = Gc(e)) => {
	r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
};
function Yc(e, t) {
	return e === t ? e !== 0 || 1 / e == 1 / t : e !== e && t !== t;
}
var Xc = Array.isArray, Zc = (e) => e instanceof Map, Qc = (e) => e instanceof Set, $c = (e) => typeof e == "object", Z = (e) => typeof e == "function", el = (e) => typeof e == "boolean";
function tl(e) {
	let t = +e;
	return Number.isInteger(t) && String(t) === e;
}
var Q = (e) => e.copy_ || e.base_, nl = (e) => e.modified_ ? e.copy_ : e.base_;
function rl(e, t) {
	if (Zc(e)) return new Map(e);
	if (Qc(e)) return new Set(e);
	if (Xc(e)) return Array[Ic].slice.call(e);
	let n = Uc(e);
	if (t === !0 || t === "class_only" && !n) {
		let t = q.getOwnPropertyDescriptors(e);
		delete t[G];
		let n = Reflect.ownKeys(t);
		for (let r = 0; r < n.length; r++) {
			let i = n[r], a = t[i];
			a[zc] === !1 && (a[zc] = !0, a[Lc] = !0), (a.get || a.set) && (t[i] = {
				[Lc]: !0,
				[zc]: !0,
				[Rc]: a[Rc],
				[Bc]: e[i]
			});
		}
		return q.create(J(e), t);
	}
	{
		let t = J(e);
		if (t !== null && n) return { ...e };
		let r = q.create(t);
		return q.assign(r, e);
	}
}
function il(e, t = !1) {
	return sl(e) || Y(e) || !X(e) ? e : (Gc(e) > 1 && q.defineProperties(e, {
		set: ol,
		add: ol,
		clear: ol,
		delete: ol
	}), q.freeze(e), t && Wc(e, (e, t) => {
		il(t, !0);
	}, !1), e);
}
function al() {
	K(2);
}
var ol = { [Bc]: al };
function sl(e) {
	return e === null || !$c(e) || q.isFrozen(e);
}
var cl = "MapSet", ll = "Patches", ul = "ArrayMethods", dl = {};
function $(e) {
	let t = dl[e];
	return t || K(0, e), t;
}
var fl = (e) => !!dl[e], pl, ml = () => pl, hl = (e, t) => ({
	drafts_: [],
	parent_: e,
	immer_: t,
	canAutoFreeze_: !0,
	unfinalizedDrafts_: 0,
	handledSet_: /* @__PURE__ */ new Set(),
	processedForPatches_: /* @__PURE__ */ new Set(),
	mapSetPlugin_: fl(cl) ? $(cl) : void 0,
	arrayMethodsPlugin_: fl(ul) ? $(ul) : void 0
});
function gl(e, t) {
	t && (e.patchPlugin_ = $(ll), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function _l(e) {
	vl(e), e.drafts_.forEach(bl), e.drafts_ = null;
}
function vl(e) {
	e === pl && (pl = e.parent_);
}
var yl = (e) => pl = hl(pl, e);
function bl(e) {
	let t = e[G];
	t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function xl(e, t) {
	t.unfinalizedDrafts_ = t.drafts_.length;
	let n = t.drafts_[0];
	if (e !== void 0 && e !== n) {
		n[G].modified_ && (_l(t), K(4)), X(e) && (e = Sl(t, e));
		let { patchPlugin_: r } = t;
		r && r.generateReplacementPatches_(n[G].base_, e, t);
	} else e = Sl(t, n);
	return Cl(t, e, !0), _l(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e === Mc ? void 0 : e;
}
function Sl(e, t) {
	if (sl(t)) return t;
	let n = t[G];
	if (!n) return jl(t, e.handledSet_, e);
	if (!Tl(n, e)) return t;
	if (!n.modified_) return n.base_;
	if (!n.finalized_) {
		let { callbacks_: t } = n;
		if (t) for (; t.length > 0;) t.pop()(e);
		kl(n, e);
	}
	return n.copy_;
}
function Cl(e, t, n = !1) {
	!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && il(t, n);
}
function wl(e) {
	e.finalized_ = !0, e.scope_.unfinalizedDrafts_--;
}
var Tl = (e, t) => e.scope_ === t, El = [];
function Dl(e, t, n, r) {
	let i = Q(e), a = e.type_;
	if (r !== void 0 && qc(i, r, a) === t) {
		Jc(i, r, n, a);
		return;
	}
	if (!e.draftLocations_) {
		let t = e.draftLocations_ = /* @__PURE__ */ new Map();
		Wc(i, (e, n) => {
			if (Y(n)) {
				let r = t.get(n) || [];
				r.push(e), t.set(n, r);
			}
		});
	}
	let o = e.draftLocations_.get(t) ?? El;
	for (let e of o) Jc(i, e, n, a);
}
function Ol(e, t, n) {
	e.callbacks_.push(function(r) {
		let i = t;
		if (!i || !Tl(i, r)) return;
		r.mapSetPlugin_?.fixSetContents(i);
		let a = nl(i);
		Dl(e, i.draft_ ?? i, a, n), kl(i, r);
	});
}
function kl(e, t) {
	if (e.modified_ && !e.finalized_ && (e.type_ === 3 || e.type_ === 1 && e.allIndicesReassigned_ || (e.assigned_?.size ?? 0) > 0)) {
		let { patchPlugin_: n } = t;
		if (n) {
			let r = n.getPath(e);
			r && n.generatePatches_(e, r, t);
		}
		wl(e);
	}
}
function Al(e, t, n) {
	let { scope_: r } = e;
	if (Y(n)) {
		let i = n[G];
		Tl(i, r) && i.callbacks_.push(function() {
			Bl(e), Dl(e, n, nl(i), t);
		});
	} else X(n) && e.callbacks_.push(function() {
		let i = Q(e);
		e.type_ === 3 ? i.has(n) && jl(n, r.handledSet_, r) : qc(i, t, e.type_) === n && r.drafts_.length > 1 && (e.assigned_.get(t) ?? !1) === !0 && e.copy_ && jl(qc(e.copy_, t, e.type_), r.handledSet_, r);
	});
}
function jl(e, t, n) {
	return !n.immer_.autoFreeze_ && n.unfinalizedDrafts_ < 1 || Y(e) || t.has(e) || !X(e) || sl(e) ? e : (t.add(e), Wc(e, (r, i) => {
		if (Y(i)) {
			let t = i[G];
			Tl(t, n) && (Jc(e, r, nl(t), e.type_), wl(t));
		} else X(i) && jl(i, t, n);
	}), e);
}
function Ml(e, t) {
	let n = Xc(e), r = {
		type_: +!!n,
		scope_: t ? t.scope_ : ml(),
		modified_: !1,
		finalized_: !1,
		assigned_: void 0,
		parent_: t,
		base_: e,
		draft_: null,
		copy_: null,
		revoke_: null,
		isManual_: !1,
		callbacks_: void 0
	}, i = r, a = Nl;
	n && (i = [r], a = Pl);
	let { revoke: o, proxy: s } = Proxy.revocable(i, a);
	return r.draft_ = s, r.revoke_ = o, [s, r];
}
var Nl = {
	get(e, t) {
		if (t === G) return e;
		let n = e.scope_.arrayMethodsPlugin_, r = e.type_ === 1 && typeof t == "string";
		if (r && n?.isArrayOperationMethod(t)) return n.createMethodInterceptor(e, t);
		let i = Q(e);
		if (!Kc(i, t, e.type_)) return Ll(e, i, t);
		let a = i[t];
		if (e.finalized_ || !X(a) || r && e.operationMethod && n?.isMutatingArrayMethod(e.operationMethod) && tl(t)) return a;
		if (a === Fl(e.base_, t) || Il(e, t, a)) {
			Bl(e);
			let n = e.type_ === 1 ? +t : t, r = Hl(e.scope_, a, e, n);
			return e.copy_[n] = r;
		}
		return a;
	},
	has(e, t) {
		return t in Q(e);
	},
	ownKeys(e) {
		return Reflect.ownKeys(Q(e));
	},
	set(e, t, n) {
		let r = Rl(Q(e), t);
		if (r?.set) return r.set.call(e.draft_, n), !0;
		if (!e.modified_) {
			let r = Fl(Q(e), t), i = r?.[G];
			if (i && i.base_ === n) return e.copy_[t] = n, e.assigned_.set(t, !1), !0;
			if (Yc(n, r) && (n !== void 0 || Kc(e.base_, t, e.type_))) return !0;
			Bl(e), zl(e);
		}
		return e.copy_[t] === n && (n !== void 0 || Kc(e.copy_, t, e.type_)) || Number.isNaN(n) && Number.isNaN(e.copy_[t]) ? !0 : (e.copy_[t] = n, e.assigned_.set(t, !0), Al(e, t, n), !0);
	},
	deleteProperty(e, t) {
		return Bl(e), Fl(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_.set(t, !1), zl(e)) : e.assigned_.delete(t), e.copy_ && delete e.copy_[t], !0;
	},
	getOwnPropertyDescriptor(e, t) {
		let n = Q(e), r = Reflect.getOwnPropertyDescriptor(n, t);
		return r && {
			[zc]: !0,
			[Lc]: e.type_ !== 1 || t !== "length",
			[Rc]: r[Rc],
			[Bc]: n[t]
		};
	},
	defineProperty() {
		K(11);
	},
	getPrototypeOf(e) {
		return J(e.base_);
	},
	setPrototypeOf() {
		K(12);
	}
}, Pl = {};
for (let e in Nl) {
	let t = Nl[e];
	Pl[e] = function() {
		let e = arguments;
		return e[0] = e[0][0], t.apply(this, e);
	};
}
Pl.deleteProperty = function(e, t) {
	return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && K(13), Pl.set.call(this, e, t, void 0);
}, Pl.set = function(e, t, n) {
	return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && K(14), Nl.set.call(this, e[0], t, n, e[0]);
};
function Fl(e, t) {
	let n = e[G];
	return (n ? Q(n) : e)[t];
}
function Il(e, t, n) {
	return e.type_ !== 1 || !e.allIndicesReassigned_ || e.assigned_?.get(t) || !X(n) || n[G] ? !1 : e.baseRefs_.has(n);
}
function Ll(e, t, n) {
	let r = Rl(t, n);
	return r ? Bc in r ? r[Bc] : r.get?.call(e.draft_) : void 0;
}
function Rl(e, t) {
	if (!(t in e)) return;
	let n = J(e);
	for (; n;) {
		let e = Object.getOwnPropertyDescriptor(n, t);
		if (e) return e;
		n = J(n);
	}
}
function zl(e) {
	e.modified_ || (e.modified_ = !0, e.parent_ && zl(e.parent_));
}
function Bl(e) {
	e.copy_ ||= (e.assigned_ = /* @__PURE__ */ new Map(), rl(e.base_, e.scope_.immer_.useStrictShallowCopy_));
}
var Vl = class {
	constructor(e) {
		this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.useStrictIteration_ = !1, this.produce = (e, t, n) => {
			if (Z(e) && !Z(t)) {
				let n = t;
				t = e;
				let r = this;
				return function(e = n, ...i) {
					return r.produce(e, (e) => t.call(this, e, ...i));
				};
			}
			Z(t) || K(6), n !== void 0 && !Z(n) && K(7);
			let r;
			if (X(e)) {
				let i = yl(this), a = Hl(i, e, void 0), o = !0;
				try {
					r = t(a), o = !1;
				} finally {
					o ? _l(i) : vl(i);
				}
				return gl(i, n), xl(r, i);
			}
			if (!e || !$c(e)) {
				if (r = t(e), r === void 0 && (r = e), r === Mc && (r = void 0), this.autoFreeze_ && il(r, !0), n) {
					let t = [], i = [];
					$(ll).generateReplacementPatches_(e, r, {
						patches_: t,
						inversePatches_: i
					}), n(t, i);
				}
				return r;
			}
			K(1, e);
		}, this.produceWithPatches = (e, t) => {
			if (Z(e)) return (t, ...n) => this.produceWithPatches(t, (t) => e(t, ...n));
			let n, r;
			return [
				this.produce(e, t, (e, t) => {
					n = e, r = t;
				}),
				n,
				r
			];
		}, el(e?.autoFreeze) && this.setAutoFreeze(e.autoFreeze), el(e?.useStrictShallowCopy) && this.setUseStrictShallowCopy(e.useStrictShallowCopy), el(e?.useStrictIteration) && this.setUseStrictIteration(e.useStrictIteration);
	}
	createDraft(e) {
		X(e) || K(8), Y(e) && (e = Ul(e));
		let t = yl(this), n = Hl(t, e, void 0);
		return n[G].isManual_ = !0, vl(t), n;
	}
	finishDraft(e, t) {
		let n = e && e[G];
		(!n || !n.isManual_) && K(9);
		let { scope_: r } = n;
		return gl(r, t), xl(void 0, r);
	}
	setAutoFreeze(e) {
		this.autoFreeze_ = e;
	}
	setUseStrictShallowCopy(e) {
		this.useStrictShallowCopy_ = e;
	}
	setUseStrictIteration(e) {
		this.useStrictIteration_ = e;
	}
	shouldUseStrictIteration() {
		return this.useStrictIteration_;
	}
	applyPatches(e, t) {
		let n;
		for (n = t.length - 1; n >= 0; n--) {
			let r = t[n];
			if (r.path.length === 0 && r.op === "replace") {
				e = r.value;
				break;
			}
		}
		n > -1 && (t = t.slice(n + 1));
		let r = $(ll).applyPatches_;
		return Y(e) ? r(e, t) : this.produce(e, (e) => r(e, t));
	}
};
function Hl(e, t, n, r) {
	let [i, a] = Zc(t) ? $(cl).proxyMap_(t, n) : Qc(t) ? $(cl).proxySet_(t, n) : Ml(t, n);
	return (n?.scope_ ?? ml()).drafts_.push(i), a.callbacks_ = n?.callbacks_ ?? [], a.key_ = r, n && r !== void 0 ? Ol(n, a, r) : a.callbacks_.push(function(e) {
		e.mapSetPlugin_?.fixSetContents(a);
		let { patchPlugin_: t } = e;
		a.modified_ && t && t.generatePatches_(a, [], e);
	}), i;
}
function Ul(e) {
	return Y(e) || K(10, e), Wl(e);
}
function Wl(e) {
	if (!X(e) || sl(e)) return e;
	let t = e[G], n, r = !0;
	if (t) {
		if (!t.modified_) return t.base_;
		t.finalized_ = !0, n = rl(e, t.scope_.immer_.useStrictShallowCopy_), r = t.scope_.immer_.shouldUseStrictIteration();
	} else n = rl(e, !0);
	return Wc(n, (e, t) => {
		Jc(n, e, Wl(t));
	}, r), t && (t.finalized_ = !1), n;
}
globalThis.Iterator?.from;
var Gl = new Vl().produce;
//#endregion
//#region ../../node_modules/use-immer/dist/use-immer.module.mjs
function Kl(e) {
	var n = s(function() {
		return il(typeof e == "function" ? e() : e, !0);
	}), r = n[1];
	return [n[0], t(function(e) {
		r(typeof e == "function" ? Gl(e) : il(e));
	}, [])];
}
//#endregion
//#region src/state/Interaction/InteractionStateProvider.tsx
var ql = Ds.Provider, Jl = ({ children: e }) => {
	let [t, n] = Kl(Es());
	return /* @__PURE__ */ l(ql, {
		value: {
			interactionState: t,
			setActiveAttribute: (e) => {
				n((t) => {
					t.navigation.activeAttribute = e;
				}), localStorage.setItem(ws, JSON.stringify({ activeAttribute: e }));
			},
			setFocusedOption: (e) => {
				n((t) => {
					t.selection.focusedOptionCode = e;
				});
			}
		},
		children: e
	});
};
//#endregion
//#region src/state/Intent/parseIntentFiltersFromUrl.ts
function Yl(e, t) {
	let n = new URLSearchParams(e), r = {};
	return n.forEach((e, n) => {
		if (!t.includes(n)) return;
		let i = {};
		e.split(",").forEach((e) => {
			i[parseInt(e, 10)] = 1;
		}), r[n] = i;
	}), r;
}
//#endregion
//#region src/domain/intent/readiness.ts
function Xl(e, t, n) {
	if (e === void 0) return 100;
	let r = e.totalCount ?? 0, i = t.totalCount ?? 0;
	if (!r || !i || r === i) return 0;
	let a = r - n, o = i - n;
	if (o < 0) return 100;
	let s = o / a;
	return Math.round(s * 100);
}
//#endregion
//#region src/state/Intent/intent.reducer.ts
function Zl(e, t) {
	switch (t.type) {
		case "INTERPRETATION_STARTED": return {
			...e,
			intentInterpretationReady: !1,
			status: "idle"
		};
		case "INTERPRETATION_READY": return {
			...e,
			intentInterpretationReady: !0,
			status: "canBeInterpreted"
		};
		case "INTERPRETATION_PROCESSING": return {
			...e,
			intentInterpreted: !0,
			status: "suggestionProcessing"
		};
		case "INTERPRETATION_DONE": return {
			...e,
			intentInterpreted: !0,
			status: "readyToRecommend"
		};
		case "FILTER_CHANGED": return {
			...e,
			status: "filterChanged"
		};
		case "FILTER_RESET": return {
			...e,
			status: "filterReset"
		};
		case "SUGGEST_CLICKED": return e.resultCount === 0 ? e : {
			...e,
			status: "suggestionProcessing"
		};
		case "SUGGESTION_SUCCESS": return {
			...e,
			recommendations: t.recommendations,
			status: "suggestionSent"
		};
		case "SUGGESTION_PROPAGATE": return { ...e };
		case "BOOTSTRAP_FROM_PERSISTED_INTENT": return {
			...e,
			attributeScore: t.payload.attributeScore,
			categoryScore: t.payload.categoryScore,
			intentInterpreted: !0,
			intentInterpretationReady: !0,
			searchReady: !0,
			status: "readyToApplyFilters"
		};
		case "SEARCH_PROCESSING": return {
			...e,
			status: "suggestionProcessing",
			recommendations: []
		};
		case "SUGGESTION_EMPTY": return {
			...e,
			status: "noSuggestionFound",
			recommendations: []
		};
		default: return e;
	}
}
//#endregion
//#region src/state/Intent/intent.effects.ts
function Ql(e) {
	switch (e.type) {
		case "INTERPRETATION_READY":
			lc.merge({ intentText: e.payload.intent });
			break;
		case "FILTER_CHANGED":
			window.dispatchEvent(new CustomEvent("reactedge:filter", { detail: e }));
			break;
		case "SUGGESTION_SUCCESS":
			window.dispatchEvent(new CustomEvent("reactedge:syncfilters", { detail: e })), lc.merge({
				filtersHash: As(e.filters),
				recommendations: e.recommendations
			});
			break;
		case "SUGGESTION_PROPAGATE": window.dispatchEvent(new CustomEvent("reactedge:recommendations", { detail: { recommendations: e.recommendations } }));
	}
}
//#endregion
//#region src/state/Intent/IntentStateProvider.tsx
var $l = 50, eu = $o.Provider, tu = ({ children: e, config: n, configuredLayeredAttributes: i, activity: o }) => {
	let [c, u] = s(Xo()), { intentEngine: d } = V();
	if (i === void 0) throw Error("Configured Layered Attributes cannot be empty");
	let f = i, p = a(() => i?.attributes ?? [], [i]), m = a(() => p.map(({ code: e }) => e), [p]);
	function h(e) {
		let t = n.ai?.matchThreshold ?? $l;
		return Xl(f, e, t);
	}
	let g = (e, t) => {
		u((n) => {
			let r = { ...n.attributeScore ?? {} }, i = { ...r[e] ?? {} };
			return i[t] ? (delete i[t], Object.keys(i).length === 0 ? delete r[e] : r[e] = i) : (i[t] = 1, r[e] = i), {
				...n,
				attributeScore: r
			};
		});
	}, _ = () => {
		u((e) => ({
			...e,
			attributeScore: {}
		}));
	}, v = (e) => {
		u((t) => ({
			...t,
			status: e
		}));
	}, ee = () => {
		Zo(), u(H);
	}, te = (e) => {
		u((t) => ({
			...t,
			intentText: e
		}));
	}, ne = t((e) => {
		u((t) => {
			let n = Zl(t, e);
			return Ql(e), n;
		});
	}, []);
	return r(() => {
		let e = Yl(window.location.search, m);
		Object.keys(e).length > 0 && (d.hydrateFromFilters(e), Object.entries(e).forEach(([e, t]) => {
			Object.keys(t).forEach((t) => {
				g(e, t);
			});
		}));
		let t = (e) => {
			let t = e.detail;
			d.handle(t), u({ ...d.getState() });
			let n = d.getState();
			as.save({
				categoryScore: n.categoryScore,
				attributeScore: n.attributeScore
			});
		};
		return window.addEventListener("reactedge:intent", t), () => {
			window.removeEventListener("reactedge:intent", t);
		};
	}, [d, m]), r(() => {
		function e() {
			c.recommendations?.length && window.dispatchEvent(new CustomEvent("reactedge:recommendations", { detail: { recommendations: c.recommendations } }));
		}
		return window.addEventListener("reactedge:refresh", e), () => {
			window.removeEventListener("reactedge:refresh", e);
		};
	}, [c.recommendations]), r(() => {
		o?.log("intent-state", "Intent State Update", c);
	}, [
		c.status,
		o,
		c
	]), r(() => {
		Qo(c);
	}, [
		c.intentText,
		c.attributeScore,
		c.categoryScore,
		c
	]), /* @__PURE__ */ l(eu, {
		value: {
			dispatch: ne,
			intentState: c,
			getAiReadiness: h,
			setIntentText: te,
			setIntentStatus: v,
			setPreference: g,
			resetPreference: _,
			resetIntent: ee,
			configuredLayeredAttributes: i
		},
		children: e
	});
}, nu = /* @__PURE__ */ new Map();
async function ru(e, t) {
	let n = e.join(",");
	if (nu.has(n)) return nu.get(n);
	let r = await t(Cc, { filter: wc(e) });
	return nu.set(n, structuredClone(r?.products)), r?.products;
}
//#endregion
//#region src/services/layeredNavigation/configuredLayeredNavigation.service.ts
async function iu(e, t) {
	let n = await ru(ec(e), t);
	return {
		attributes: au(n) ?? [],
		totalCount: n.total_count,
		baseTotalCount: 0
	};
}
function au(e) {
	return (e?.aggregations ?? []).map((e) => ({
		code: e.attribute_code,
		label: e.label,
		options: e.options.map((e) => ({
			value: e.value,
			label: e.label,
			totalCount: e.count,
			isAvailable: !1,
			filteredCount: 0,
			...e.swatch_data && { visual: {
				type: e.swatch_data.type === "ColorSwatchData" ? "color" : "image",
				value: e.swatch_data.value
			} }
		}))
	}));
}
//#endregion
//#region src/hooks/domain/useConfiguredLayeredAttributes.tsx
var ou = (e) => {
	let { graphqlClient: n, bootstrap: i } = V(), a = i?.layeredData, o = !a, [c, l] = s(null), [u, d] = s(!1), [f, p] = s(null), m = t(async (t) => {
		try {
			d(!0), p(null);
			let r = await iu(e, n);
			if (t?.()) return;
			l(r);
		} catch (e) {
			if (t?.()) return;
			l(null), p(zo(e));
		} finally {
			d(!1);
		}
	}, [e, n]);
	return r(() => {
		let e = !1;
		if (o) return (async () => {
			await m(() => e);
		})(), () => {
			e = !0;
		};
	}, [
		e,
		n,
		m,
		o
	]), {
		attributeLayerData: a ?? c,
		attributeLayerLoading: u,
		attributeLayerError: f,
		refetch: () => m()
	};
}, su = ({ config: e, categoryData: t }) => {
	let n = B(), { attributeLayerData: r, attributeLayerError: i } = ou(t);
	return i ? /* @__PURE__ */ l(Wo, { error: i }) : r ? (n.log("attribute-layer", "Configured Attribute Layer", r), /* @__PURE__ */ l(tu, {
		config: e,
		configuredLayeredAttributes: r,
		activity: n,
		children: /* @__PURE__ */ l(Jl, { children: /* @__PURE__ */ l(jc, {
			config: e,
			categoryData: t
		}) })
	})) : null;
}, cu = ({ config: e, categoryUrlKey: t }) => {
	let n = B(), { categoryData: i, categoryError: a, categoryLoading: o } = Uo(t);
	return r(() => {
		i && n.log("intent-discovery", "Intent category data loaded", {
			categoryUrlKey: t,
			categoryData: i
		});
	}, [
		n,
		t,
		i
	]), o ? /* @__PURE__ */ l(Ro, {}) : a || !i ? null : /* @__PURE__ */ l(su, {
		config: e.data,
		categoryData: i
	});
}, lu = ({ config: e }) => {
	let t = B(), n = tc(e.runtime.category, e.data.enabledCategories);
	return t.log("intent-discovery", "Intent category resolved", {
		runtimeCategory: e.runtime.category,
		enabledCategories: e.data.enabledCategories,
		resolvedCategory: n
	}), i(() => {
		n && window.dispatchEvent(new CustomEvent("reactedge:widget-rendered", { detail: { widget: "intentdiscovery" } }));
	}, [n]), n ? /* @__PURE__ */ l(cu, {
		config: e,
		categoryUrlKey: n
	}) : null;
};
//#endregion
//#region src/bootstrap/WidgetWrapper.tsx
function uu({ contract: e, runtime: t }) {
	let n = B(), [i, a] = s(!1), o = mo(e, t, n);
	return r(() => {
		o && requestAnimationFrame(() => {
			a(!0);
		});
	}, [o]), o ? /* @__PURE__ */ l(jo, {
		config: o.integrations,
		runtime: o.runtime,
		activity: n,
		children: /* @__PURE__ */ l(Fo, {
			translations: o.translations,
			children: /* @__PURE__ */ l("div", {
				className: "intent-widget-container",
				children: i ? /* @__PURE__ */ l(lu, { config: o }) : /* @__PURE__ */ l(Ro, {})
			})
		})
	}) : null;
}
//#endregion
//#region src/bootstrap/widget-root.tsx
function du({ contract: e, runtime: t, hostElement: n }) {
	return /* @__PURE__ */ l("div", {
		className: `reactedge-${po}`,
		children: /* @__PURE__ */ l(bo, {
			...n ? { hostElement: n } : {},
			children: /* @__PURE__ */ l(uu, {
				contract: e,
				runtime: t
			})
		})
	});
}
//#endregion
//#region src/Widget.tsx
function fu({ container: e, contract: t, runtime: n, hydrate: r = !1 }) {
	let i = /* @__PURE__ */ l(du, {
		contract: t,
		runtime: n
	});
	r ? f(e, i) : d(e).render(i);
}
//#endregion
export { fu as Widget };
