'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var require$$0 = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __third_party$javascript$safevalues$builders$safe_url_builders_fromBlob(
    e
) {
    return URL.createObjectURL(e);
}
function __third_party$javascript$safevalues$compat$index_unwrapSafeUrl(e) {
    return e;
}
function __math_utils_signum(e) {
    return 0 > e ? -1 : 0 === e ? 0 : 1;
}
function __math_utils_clamp(e, t) {
    return Math.min(Math.max(t, 0), e);
}
function __math_utils_sanitizeDegrees(e) {
    return 0 > e ? (e % 360) + 360 : 360 <= e ? e % 360 : e;
}
var __$WHITE_POINT_D65 = [95.047, 100, 108.883],
    __$lstarFromInt = (e) => {
        let t =
            21.26 * __$linearized(((16711680 & e) >> 16) / 255) +
            71.52 * __$linearized(((65280 & e) >> 8) / 255) +
            7.22 * __$linearized((255 & e) / 255);
        return (t /= 100) <= 216 / 24389
            ? (24389 / 27) * t
            : 116 * Math.pow(t, 1 / 3) - 16;
    },
    __$hexFromInt = (e) => {
        const t = (65280 & e) >> 8,
            n = 255 & e,
            r = [
                ((16711680 & e) >> 16).toString(16),
                t.toString(16),
                n.toString(16),
            ];
        for (const [e, t] of r.entries()) {
            const n = e,
                o = t;
            1 === o.length && (r[n] = "0" + o);
        }
        return "#" + r.join("");
    },
    __$intFromRgb = (e) =>
        (-16777216 |
            ((255 & e[0]) << 16) |
            ((255 & e[1]) << 8) |
            (255 & e[2])) >>>
        0,
    __$labFromInt = (e) => {
        const t = 216 / 24389,
            n = 100 * __$linearized(((16711680 & e) >> 16) / 255),
            r = 100 * __$linearized(((65280 & e) >> 8) / 255),
            o = 100 * __$linearized((255 & e) / 255),
            a = (0.2126 * n + 0.7152 * r + 0.0722 * o) / __$WHITE_POINT_D65[1];
        let i;
        i = a > t ? Math.pow(a, 1 / 3) : ((24389 / 27) * a + 16) / 116;
        const l =
                (0.41233895 * n + 0.35762064 * r + 0.18051042 * o) /
                __$WHITE_POINT_D65[0],
            _ =
                (0.01932141 * n + 0.11916382 * r + 0.95034478 * o) /
                __$WHITE_POINT_D65[2];
        return [
            116 * i - 16,
            500 *
                ((l > t ? Math.pow(l, 1 / 3) : ((24389 / 27) * l + 16) / 116) -
                    i),
            200 *
                (i -
                    (_ > t
                        ? Math.pow(_, 1 / 3)
                        : ((24389 / 27) * _ + 16) / 116)),
        ];
    },
    __$intFromXyzComponents = (e, t, n) => (
        (e /= 100),
        (t /= 100),
        (n /= 100),
        __$intFromRgb([
            Math.round(
                __math_utils_clamp(
                    255,
                    255 *
                        __$delinearized(3.2406 * e + -1.5372 * t + -0.4986 * n)
                )
            ),
            Math.round(
                __math_utils_clamp(
                    255,
                    255 * __$delinearized(-0.9689 * e + 1.8758 * t + 0.0415 * n)
                )
            ),
            Math.round(
                __math_utils_clamp(
                    255,
                    255 * __$delinearized(0.0557 * e + -0.204 * t + 1.057 * n)
                )
            ),
        ])
    ),
    __$intFromHex = (e) => {
        const t = 3 === (e = e.replace("#", "")).length,
            n = 6 === e.length,
            r = 8 === e.length;
        if (!t && !n && !r) throw Error("unexpected hex " + e);
        let o = 0,
            a = 0,
            i = 0;
        return (
            t
                ? ((o = parseInt(e.slice(0, 1).repeat(2), 16)),
                  (a = parseInt(e.slice(1, 2).repeat(2), 16)),
                  (i = parseInt(e.slice(2, 3).repeat(2), 16)))
                : n
                ? ((o = parseInt(e.slice(0, 2), 16)),
                  (a = parseInt(e.slice(2, 4), 16)),
                  (i = parseInt(e.slice(4, 6), 16)))
                : r &&
                  ((o = parseInt(e.slice(2, 4), 16)),
                  (a = parseInt(e.slice(4, 6), 16)),
                  (i = parseInt(e.slice(6, 8), 16))),
            (-16777216 | ((255 & o) << 16) | ((255 & a) << 8) | (255 & i)) >>> 0
        );
    },
    __$intFromLstar = (e) => {
        const t = (e + 16) / 116,
            n = t * t * t > 216 / 24389;
        var r = [
            (n ? t * t * t : (116 * t - 16) / (24389 / 27)) *
                __$WHITE_POINT_D65[0],
            (8 < e ? t * t * t : e / (24389 / 27)) * __$WHITE_POINT_D65[1],
            (n ? t * t * t : (116 * t - 16) / (24389 / 27)) *
                __$WHITE_POINT_D65[2],
        ];
        return __$intFromXyzComponents(r[0], r[1], r[2]);
    },
    __$linearized = (e) =>
        0.04045 >= e ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4),
    __$delinearized = (e) =>
        0.0031308 >= e ? 12.92 * e : 1.055 * Math.pow(e, 1 / 2.4) - 0.055,
    __$hct$viewing_conditions$ViewingConditions = class {
        constructor(e, t, n, r, o, a, i, l, _, s) {
            (this.n = e),
                (this.aw = t),
                (this.nbb = n),
                (this.ncb = r),
                (this.c = o),
                (this.nc = a),
                (this.rgbD = i),
                (this.fl = l),
                (this.fLRoot = _),
                (this.z = s);
        }
    },
    __$hct$viewing_conditions$ViewingConditions$DEFAULT = (function (
        e = __$WHITE_POINT_D65,
        t = ((200 / Math.PI) * 100 * Math.pow(66 / 116, 3)) / 100,
        n = 50,
        r = 2,
        o = !1
    ) {
        const a = 0.401288 * e[0] + 0.650173 * e[1] + -0.051461 * e[2],
            i = -0.250268 * e[0] + 1.204414 * e[1] + 0.045854 * e[2],
            l = -0.002079 * e[0] + 0.048952 * e[1] + 0.953127 * e[2],
            _ = 0.8 + r / 10;
        if (0.9 <= _)
            var s = 10 * (_ - 0.9),
                u = 0.59 * (1 - s) + 0.69 * s;
        else {
            var c = 10 * (_ - 0.8);
            u = 0.525 * (1 - c) + 0.59 * c;
        }
        let m = o ? 1 : _ * (1 - (1 / 3.6) * Math.exp((-t - 42) / 92));
        const $ = [
                (100 / a) * (m = 1 < m ? 1 : 0 > m ? 0 : m) + 1 - m,
                (100 / i) * m + 1 - m,
                (100 / l) * m + 1 - m,
            ],
            h = 1 / (5 * t + 1),
            g = h * h * h * h,
            d = 1 - g,
            p = g * t + 0.1 * d * d * Math.cbrt(5 * t),
            v =
                (8 < n
                    ? 100 * Math.pow((n + 16) / 116, 3)
                    : (n / (24389 / 27)) * 100) / e[1],
            f = 0.725 / Math.pow(v, 0.2),
            F = [
                Math.pow((p * $[0] * a) / 100, 0.42),
                Math.pow((p * $[1] * i) / 100, 0.42),
                Math.pow((p * $[2] * l) / 100, 0.42),
            ],
            x = [
                (400 * F[0]) / (F[0] + 27.13),
                (400 * F[1]) / (F[1] + 27.13),
                (400 * F[2]) / (F[2] + 27.13),
            ];
        return new __$hct$viewing_conditions$ViewingConditions(
            v,
            (2 * x[0] + x[1] + 0.05 * x[2]) * f,
            f,
            f,
            u,
            _,
            $,
            p,
            Math.pow(p, 0.25),
            1.48 + Math.sqrt(v)
        );
    })(),
    __$hct$cam16$CAM16$fromIntInViewingConditions = function (e) {
        const t = 100 * __$linearized(((16711680 & e) >> 16) / 255),
            n = 100 * __$linearized(((65280 & e) >> 8) / 255),
            r = 100 * __$linearized((255 & e) / 255),
            o = 0.41233895 * t + 0.35762064 * n + 0.18051042 * r,
            a = 0.2126 * t + 0.7152 * n + 0.0722 * r,
            i = 0.01932141 * t + 0.11916382 * n + 0.95034478 * r,
            l =
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[0] *
                (0.401288 * o + 0.650173 * a - 0.051461 * i),
            _ =
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[1] *
                (-0.250268 * o + 1.204414 * a + 0.045854 * i),
            s =
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[2] *
                (-0.002079 * o + 0.048952 * a + 0.953127 * i),
            u = Math.pow(
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.fl *
                    Math.abs(l)) /
                    100,
                0.42
            ),
            c = Math.pow(
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.fl *
                    Math.abs(_)) /
                    100,
                0.42
            ),
            m = Math.pow(
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.fl *
                    Math.abs(s)) /
                    100,
                0.42
            ),
            $ = (400 * __math_utils_signum(l) * u) / (u + 27.13),
            h = (400 * __math_utils_signum(_) * c) / (c + 27.13),
            g = (400 * __math_utils_signum(s) * m) / (m + 27.13),
            d = (11 * $ + -12 * h + g) / 11,
            p = ($ + h - 2 * g) / 9,
            v = (180 * Math.atan2(p, d)) / Math.PI,
            f = 0 > v ? v + 360 : 360 <= v ? v - 360 : v,
            F = (f * Math.PI) / 180,
            x =
                100 *
                Math.pow(
                    (((40 * $ + 20 * h + g) / 20) *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.nbb) /
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.aw,
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.c *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.z
                ),
            y =
                Math.pow(
                    ((5e4 / 13) *
                        0.25 *
                        (Math.cos(
                            ((20.14 > f ? f + 360 : f) * Math.PI) / 180 + 2
                        ) +
                            3.8) *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.nc *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.ncb *
                        Math.sqrt(d * d + p * p)) /
                        ((20 * $ + 20 * h + 21 * g) / 20 + 0.305),
                    0.9
                ) *
                Math.pow(
                    1.64 -
                        Math.pow(
                            0.29,
                            __$hct$viewing_conditions$ViewingConditions$DEFAULT.n
                        ),
                    0.73
                ),
            b = y * Math.sqrt(x / 100),
            S =
                (1 / 0.0228) *
                Math.log(
                    1 +
                        0.0228 *
                            b *
                            __$hct$viewing_conditions$ViewingConditions$DEFAULT.fLRoot
                );
        return new __$hct$cam16$CAM16(
            f,
            b,
            x,
            (4 / __$hct$viewing_conditions$ViewingConditions$DEFAULT.c) *
                Math.sqrt(x / 100) *
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.aw + 4) *
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.fLRoot,
            50 *
                Math.sqrt(
                    (y *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.c) /
                        (__$hct$viewing_conditions$ViewingConditions$DEFAULT.aw +
                            4)
                ),
            ((1 + 100 * 0.007) * x) / (1 + 0.007 * x),
            S * Math.cos(F),
            S * Math.sin(F)
        );
    },
    __$hct$cam16$CAM16$fromJchInViewingConditions = function (e, t, n) {
        const r = (n * Math.PI) / 180,
            o =
                (1 / 0.0228) *
                Math.log(
                    1 +
                        0.0228 *
                            t *
                            __$hct$viewing_conditions$ViewingConditions$DEFAULT.fLRoot
                );
        return new __$hct$cam16$CAM16(
            n,
            t,
            e,
            (4 / __$hct$viewing_conditions$ViewingConditions$DEFAULT.c) *
                Math.sqrt(e / 100) *
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.aw + 4) *
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.fLRoot,
            50 *
                Math.sqrt(
                    ((t / Math.sqrt(e / 100)) *
                        __$hct$viewing_conditions$ViewingConditions$DEFAULT.c) /
                        (__$hct$viewing_conditions$ViewingConditions$DEFAULT.aw +
                            4)
                ),
            ((1 + 100 * 0.007) * e) / (1 + 0.007 * e),
            o * Math.cos(r),
            o * Math.sin(r)
        );
    },
    _viewed = function (e) {
        const t = Math.pow(
                (0 === e.chroma || 0 === e.j
                    ? 0
                    : e.chroma / Math.sqrt(e.j / 100)) /
                    Math.pow(
                        1.64 -
                            Math.pow(
                                0.29,
                                __$hct$viewing_conditions$ViewingConditions$DEFAULT.n
                            ),
                        0.73
                    ),
                1 / 0.9
            ),
            n = (e.hue * Math.PI) / 180,
            r =
                (__$hct$viewing_conditions$ViewingConditions$DEFAULT.aw *
                    Math.pow(
                        e.j / 100,
                        1 /
                            __$hct$viewing_conditions$ViewingConditions$DEFAULT.c /
                            __$hct$viewing_conditions$ViewingConditions$DEFAULT.z
                    )) /
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.nbb,
            o = Math.sin(n),
            a = Math.cos(n),
            i =
                (23 * (r + 0.305) * t) /
                ((5e4 / 13) *
                    (Math.cos(n + 2) + 3.8) *
                    5.75 *
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.nc *
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.ncb +
                    11 * t * a +
                    108 * t * o),
            l = i * a,
            _ = i * o,
            s = (460 * r + 451 * l + 288 * _) / 1403,
            u = (460 * r - 891 * l - 261 * _) / 1403,
            c = (460 * r - 220 * l - 6300 * _) / 1403,
            m =
                ((100 /
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.fl) *
                    __math_utils_signum(s) *
                    Math.pow(
                        Math.max(
                            0,
                            (27.13 * Math.abs(s)) / (400 - Math.abs(s))
                        ),
                        1 / 0.42
                    )) /
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[0],
            $ =
                ((100 /
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.fl) *
                    __math_utils_signum(u) *
                    Math.pow(
                        Math.max(
                            0,
                            (27.13 * Math.abs(u)) / (400 - Math.abs(u))
                        ),
                        1 / 0.42
                    )) /
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[1],
            h =
                ((100 /
                    __$hct$viewing_conditions$ViewingConditions$DEFAULT.fl) *
                    __math_utils_signum(c) *
                    Math.pow(
                        Math.max(
                            0,
                            (27.13 * Math.abs(c)) / (400 - Math.abs(c))
                        ),
                        1 / 0.42
                    )) /
                __$hct$viewing_conditions$ViewingConditions$DEFAULT.rgbD[2];
        return __$intFromXyzComponents(
            1.86206786 * m - 1.01125463 * $ + 0.14918677 * h,
            0.38752654 * m + 0.62144744 * $ - 0.00897398 * h,
            -0.0158415 * m - 0.03412294 * $ + 1.04996444 * h
        );
    },
    __$hct$cam16$CAM16 = class {
        constructor(e, t, n, r, o, a, i, l) {
            (this.hue = e),
                (this.chroma = t),
                (this.j = n),
                (this.q = r),
                (this.s = o),
                (this.jstar = a),
                (this.astar = i),
                (this.bstar = l);
        }
        distance(e) {
            const t = this.jstar - e.jstar,
                n = this.astar - e.astar,
                r = this.bstar - e.bstar;
            return 1.41 * Math.pow(Math.sqrt(t * t + n * n + r * r), 0.63);
        }
    },
    __$hct$hct$HCT$fromInt = function (e) {
        const t = __$hct$cam16$CAM16$fromIntInViewingConditions(e);
        return new __$hct$hct$HCT(t.hue, t.chroma, __$lstarFromInt(e));
    },
    _setInternalState = function (e, t) {
        const n = __$hct$cam16$CAM16$fromIntInViewingConditions(t),
            r = __$lstarFromInt(t);
        (e.internalHue = n.hue),
            (e.internalChroma = n.chroma),
            (e.internalTone = r);
    },
    __$hct$hct$HCT = class {
        constructor(e, t, n) {
            (this.internalHue = e),
                (this.internalChroma = t),
                (this.internalTone = n),
                _setInternalState(this, this.toInt());
        }
        toInt() {
            return __ux$material$libmonet$typescript$hct$hct_getIntInViewingConditions(
                __math_utils_sanitizeDegrees(this.internalHue),
                this.internalChroma,
                __math_utils_clamp(100, this.internalTone)
            );
        }
        get hue() {
            return this.internalHue;
        }
        set hue(e) {
            _setInternalState(
                this,
                __ux$material$libmonet$typescript$hct$hct_getIntInViewingConditions(
                    __math_utils_sanitizeDegrees(
                        __math_utils_sanitizeDegrees(e)
                    ),
                    this.internalChroma,
                    __math_utils_clamp(100, this.internalTone)
                )
            );
        }
        get chroma() {
            return this.internalChroma;
        }
        set chroma(e) {
            _setInternalState(
                this,
                __ux$material$libmonet$typescript$hct$hct_getIntInViewingConditions(
                    __math_utils_sanitizeDegrees(this.internalHue),
                    e,
                    __math_utils_clamp(100, this.internalTone)
                )
            );
        }
        get tone() {
            return this.internalTone;
        }
        set tone(e) {
            _setInternalState(
                this,
                __ux$material$libmonet$typescript$hct$hct_getIntInViewingConditions(
                    __math_utils_sanitizeDegrees(this.internalHue),
                    this.internalChroma,
                    __math_utils_clamp(100, e)
                )
            );
        }
    };
function __ux$material$libmonet$typescript$hct$hct_getIntInViewingConditions(
    e,
    t,
    n
) {
    if (1 > t || 0 >= Math.round(n) || 100 <= Math.round(n))
        return __$intFromLstar(n);
    e = __math_utils_sanitizeDegrees(e);
    let r = t,
        o = t,
        a = 0,
        i = !0,
        l = null;
    for (; 0.4 <= Math.abs(a - r); ) {
        var _ = e,
            s = o,
            u = n;
        let t,
            c = 0,
            m = 100,
            $ = 1e3,
            h = 1e3,
            g = null;
        for (; 0.01 < Math.abs(c - m); ) {
            const e = _viewed(
                    __$hct$cam16$CAM16$fromJchInViewingConditions(
                        (t = c + (m - c) / 2),
                        s,
                        _
                    )
                ),
                n = __$lstarFromInt(e),
                r = Math.abs(u - n);
            if (0.2 > r) {
                const t = __$hct$cam16$CAM16$fromIntInViewingConditions(e),
                    n = t.distance(
                        __$hct$cam16$CAM16$fromJchInViewingConditions(
                            t.j,
                            t.chroma,
                            _
                        )
                    );
                1 >= n && n <= h && (($ = r), (h = n), (g = t));
            }
            if (0 === $ && 0 === h) break;
            n < u ? (c = t) : (m = t);
        }
        const d = g;
        if (i) {
            if (null != d) return _viewed(d);
            i = !1;
        } else null === d ? (r = o) : ((l = d), (a = o));
        o = a + (r - a) / 2;
    }
    return null === l ? __$intFromLstar(n) : _viewed(l);
}
var __$palettes$tonal_palette$TonalPalette = class {
        constructor(e, t) {
            (this.hue = e), (this.chroma = t), (this.cache = new Map());
        }
        tone(e) {
            let t = this.cache.get(e);
            return (
                void 0 === t &&
                    ((t = new __$hct$hct$HCT(this.hue, this.chroma, e).toInt()),
                    this.cache.set(e, t)),
                t
            );
        }
    },
    __$palettes$core_palette$CorePalette = class {
        constructor(e) {
            const t = __$hct$hct$HCT$fromInt(e),
                n = t.hue;
            (this.a1 = new __$palettes$tonal_palette$TonalPalette(
                n,
                Math.max(48, t.chroma)
            )),
                (this.a2 = new __$palettes$tonal_palette$TonalPalette(n, 16)),
                (this.a3 = new __$palettes$tonal_palette$TonalPalette(
                    n + 60,
                    24
                )),
                (this.n1 = new __$palettes$tonal_palette$TonalPalette(n, 4)),
                (this.n2 = new __$palettes$tonal_palette$TonalPalette(n, 8)),
                (this.error = new __$palettes$tonal_palette$TonalPalette(
                    25,
                    84
                ));
        }
    },
    __$quantize$lab_point_provider$LabPointProvider = class {
        toInt(e) {
            var t = e[0];
            const n = 216 / 24389,
                r = (t + 16) / 116,
                o = e[1] / 500 + r,
                a = r - e[2] / 200,
                i = o * o * o,
                l = a * a * a;
            var _ = [
                (i > n ? i : (116 * o - 16) / (24389 / 27)) *
                    __$WHITE_POINT_D65[0],
                (8 < t ? r * r * r : t / (24389 / 27)) * __$WHITE_POINT_D65[1],
                (l > n ? l : (116 * a - 16) / (24389 / 27)) *
                    __$WHITE_POINT_D65[2],
            ];
            return __$intFromXyzComponents(_[0], _[1], _[2]);
        }
        distance(e, t) {
            const n = e[0] - t[0],
                r = e[1] - t[1],
                o = e[2] - t[2];
            return n * n + r * r + o * o;
        }
    };
class __ux$material$libmonet$typescript$quantize$quantizer_wsmeans_DistanceAndIndex {
    constructor() {
        this.index = this.distance = -1;
    }
}
var _createBoxes = function (e) {
        e.cubes = Array.from({ length: 256 })
            .fill(0)
            .map(
                () =>
                    new __ux$material$libmonet$typescript$quantize$quantizer_wu_Box()
            );
        const t = Array.from({ length: 256 }).fill(0);
        (e.cubes[0].r0 = 0),
            (e.cubes[0].g0 = 0),
            (e.cubes[0].b0 = 0),
            (e.cubes[0].r1 = 32),
            (e.cubes[0].g1 = 32),
            (e.cubes[0].b1 = 32);
        let n = 256,
            r = 0;
        for (let o = 1; 256 > o; o++) {
            _cut(e, e.cubes[r], e.cubes[o])
                ? ((t[r] = 1 < e.cubes[r].vol ? _variance(e, e.cubes[r]) : 0),
                  (t[o] = 1 < e.cubes[o].vol ? _variance(e, e.cubes[o]) : 0))
                : ((t[r] = 0), o--),
                (r = 0);
            let a = t[0];
            for (let e = 1; e <= o; e++) t[e] > a && ((a = t[e]), (r = e));
            if (0 >= a) {
                n = o + 1;
                break;
            }
        }
        return new __ux$material$libmonet$typescript$quantize$quantizer_wu_CreateBoxesResult(
            n
        );
    },
    _getIndex = function (e, t, n) {
        return (e << 10) + (e << 6) + e + (t << 5) + t + n;
    },
    _cut = function (e, t, n) {
        const r = e.volume(t, e.momentsR),
            o = e.volume(t, e.momentsG),
            a = e.volume(t, e.momentsB),
            i = e.volume(t, e.weights),
            l = _maximize(e, t, "red", t.r0 + 1, t.r1, r, o, a, i),
            _ = _maximize(e, t, "green", t.g0 + 1, t.g1, r, o, a, i),
            s = _maximize(e, t, "blue", t.b0 + 1, t.b1, r, o, a, i);
        let u;
        const c = l.maximum,
            m = _.maximum,
            $ = s.maximum;
        if (c >= m && c >= $) {
            if (0 > l.cutLocation) return !1;
            u = "red";
        } else u = m >= c && m >= $ ? "green" : "blue";
        switch (((n.r1 = t.r1), (n.g1 = t.g1), (n.b1 = t.b1), u)) {
            case "red":
                (t.r1 = l.cutLocation),
                    (n.r0 = t.r1),
                    (n.g0 = t.g0),
                    (n.b0 = t.b0);
                break;
            case "green":
                (t.g1 = _.cutLocation),
                    (n.r0 = t.r0),
                    (n.g0 = t.g1),
                    (n.b0 = t.b0);
                break;
            case "blue":
                (t.b1 = s.cutLocation),
                    (n.r0 = t.r0),
                    (n.g0 = t.g0),
                    (n.b0 = t.b1);
                break;
            default:
                throw Error("unexpected direction " + u);
        }
        return (
            (t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0)),
            (n.vol = (n.r1 - n.r0) * (n.g1 - n.g0) * (n.b1 - n.b0)),
            !0
        );
    },
    _variance = function (e, t) {
        const n = e.volume(t, e.momentsR),
            r = e.volume(t, e.momentsG),
            o = e.volume(t, e.momentsB);
        return (
            e.moments[_getIndex(t.r1, t.g1, t.b1)] -
            e.moments[_getIndex(t.r1, t.g1, t.b0)] -
            e.moments[_getIndex(t.r1, t.g0, t.b1)] +
            e.moments[_getIndex(t.r1, t.g0, t.b0)] -
            e.moments[_getIndex(t.r0, t.g1, t.b1)] +
            e.moments[_getIndex(t.r0, t.g1, t.b0)] +
            e.moments[_getIndex(t.r0, t.g0, t.b1)] -
            e.moments[_getIndex(t.r0, t.g0, t.b0)] -
            (n * n + r * r + o * o) / e.volume(t, e.weights)
        );
    },
    _maximize = function (e, t, n, r, o, a, i, l, _) {
        const s = e.bottom(t, n, e.momentsR),
            u = e.bottom(t, n, e.momentsG),
            c = e.bottom(t, n, e.momentsB),
            m = e.bottom(t, n, e.weights);
        let $,
            h,
            g,
            d,
            p = 0,
            v = -1;
        for (let f = r; f < o; f++) {
            if (
                (($ = s + e.top(t, n, f, e.momentsR)),
                (h = u + e.top(t, n, f, e.momentsG)),
                (g = c + e.top(t, n, f, e.momentsB)),
                0 === (d = m + e.top(t, n, f, e.weights)))
            )
                continue;
            let r = $ * $ + h * h + g * g,
                o = 1 * d,
                F = r / o;
            ($ = a - $),
                (h = i - h),
                (g = l - g),
                0 !== (d = _ - d) &&
                    (F += (r = $ * $ + h * h + g * g) / (o = 1 * d)) > p &&
                    ((p = F), (v = f));
        }
        return new __ux$material$libmonet$typescript$quantize$quantizer_wu_MaximizeResult(
            v,
            p
        );
    },
    __$quantize$quantizer_wu$QuantizerWu = class {
        constructor() {
            (this.weights = []),
                (this.momentsR = []),
                (this.momentsG = []),
                (this.momentsB = []),
                (this.moments = []),
                (this.cubes = []);
        }
        volume(e, t) {
            return (
                t[_getIndex(e.r1, e.g1, e.b1)] -
                t[_getIndex(e.r1, e.g1, e.b0)] -
                t[_getIndex(e.r1, e.g0, e.b1)] +
                t[_getIndex(e.r1, e.g0, e.b0)] -
                t[_getIndex(e.r0, e.g1, e.b1)] +
                t[_getIndex(e.r0, e.g1, e.b0)] +
                t[_getIndex(e.r0, e.g0, e.b1)] -
                t[_getIndex(e.r0, e.g0, e.b0)]
            );
        }
        bottom(e, t, n) {
            switch (t) {
                case "red":
                    return (
                        -n[_getIndex(e.r0, e.g1, e.b1)] +
                        n[_getIndex(e.r0, e.g1, e.b0)] +
                        n[_getIndex(e.r0, e.g0, e.b1)] -
                        n[_getIndex(e.r0, e.g0, e.b0)]
                    );
                case "green":
                    return (
                        -n[_getIndex(e.r1, e.g0, e.b1)] +
                        n[_getIndex(e.r1, e.g0, e.b0)] +
                        n[_getIndex(e.r0, e.g0, e.b1)] -
                        n[_getIndex(e.r0, e.g0, e.b0)]
                    );
                case "blue":
                    return (
                        -n[_getIndex(e.r1, e.g1, e.b0)] +
                        n[_getIndex(e.r1, e.g0, e.b0)] +
                        n[_getIndex(e.r0, e.g1, e.b0)] -
                        n[_getIndex(e.r0, e.g0, e.b0)]
                    );
                default:
                    throw Error("unexpected direction $direction");
            }
        }
        top(e, t, n, r) {
            switch (t) {
                case "red":
                    return (
                        r[_getIndex(n, e.g1, e.b1)] -
                        r[_getIndex(n, e.g1, e.b0)] -
                        r[_getIndex(n, e.g0, e.b1)] +
                        r[_getIndex(n, e.g0, e.b0)]
                    );
                case "green":
                    return (
                        r[_getIndex(e.r1, n, e.b1)] -
                        r[_getIndex(e.r1, n, e.b0)] -
                        r[_getIndex(e.r0, n, e.b1)] +
                        r[_getIndex(e.r0, n, e.b0)]
                    );
                case "blue":
                    return (
                        r[_getIndex(e.r1, e.g1, n)] -
                        r[_getIndex(e.r1, e.g0, n)] -
                        r[_getIndex(e.r0, e.g1, n)] +
                        r[_getIndex(e.r0, e.g0, n)]
                    );
                default:
                    throw Error("unexpected direction $direction");
            }
        }
    };
class __ux$material$libmonet$typescript$quantize$quantizer_wu_Box {
    constructor() {
        this.vol =
            this.b1 =
            this.b0 =
            this.g1 =
            this.g0 =
            this.r1 =
            this.r0 =
                0;
    }
}
class __ux$material$libmonet$typescript$quantize$quantizer_wu_CreateBoxesResult {
    constructor(e) {
        this.resultCount = e;
    }
}
class __ux$material$libmonet$typescript$quantize$quantizer_wu_MaximizeResult {
    constructor(e, t) {
        (this.cutLocation = e), (this.maximum = t);
    }
}
var __$score$score$Score$score = function (e) {
        let t = 0;
        for (const n of e.values()) t += n;
        const n = new Map(),
            r = new Map(),
            o = Array(360).fill(0);
        for (const [a, i] of e.entries()) {
            const e = a,
                l = i / t;
            n.set(e, l);
            const _ = __$hct$cam16$CAM16$fromIntInViewingConditions(e);
            r.set(e, _), (o[Math.round(_.hue)] += l);
        }
        const a = new Map();
        for (const [e, t] of r.entries()) {
            const n = e,
                r = Math.round(t.hue);
            let i = 0;
            for (let e = r - 15; e < r + 15; e++)
                i += o[__math_utils_sanitizeDegrees(e)];
            a.set(n, i);
        }
        const i = new Map();
        for (const [e, t] of r.entries()) {
            const n = e,
                r = t,
                o = 70 * a.get(n);
            i.set(n, o + (r.chroma - 48) * (48 > r.chroma ? 0.1 : 0.3));
        }
        const l = __$score$score$Score$filter(a, r),
            _ = new Map();
        for (const e of l) {
            let t = !1;
            const n = r.get(e).hue;
            for (const [e] of _) {
                const o = r.get(e).hue;
                if (15 > 180 - Math.abs(Math.abs(n - o) - 180)) {
                    t = !0;
                    break;
                }
            }
            t || _.set(e, i.get(e));
        }
        const s = Array.from(_.entries());
        s.sort((e, t) => t[1] - e[1]);
        const u = s.map((e) => e[0]);
        return 0 === u.length && u.push(4282549748), u;
    },
    __$score$score$Score$filter = function (e, t) {
        const n = [];
        for (const [r, o] of t.entries()) {
            const t = r,
                a = o,
                i = e.get(t);
            15 <= a.chroma &&
                10 <= __$lstarFromInt(t) &&
                0.01 <= i &&
                n.push(t);
        }
        return n;
    };
class __ux$material$theme_generator$flags_Flags {
    get internal() {
        return !1;
    }
    get testing() {
        return !1;
    }
    get is3p() {
        return !this.internal;
    }
    get is1p() {
        return this.internal;
    }
    get enableDsp() {
        return !this.is1p;
    }
    get enableAndroid() {
        return this.is1p;
    }
    get enableWebExport() {
        return this.testing;
    }
    get enableExtendedColors() {
        return !0;
    }
    get enableColorShift() {
        return this.is1p;
    }
    get enableTonalOverride() {
        return this.is3p;
    }
    get enablePluginColorsUpdate() {
        return !0;
    }
    get enableLogging() {
        return this.testing;
    }
    get defaultThemeName() {
        return "material-theme";
    }
}
var __$theme_generator$flags$flags =
        new __ux$material$theme_generator$flags_Flags(),
    __$theme_generator$flags$IS_3P = __$theme_generator$flags$flags.is3p,
    __$theme_generator$flags$IS_1P = __$theme_generator$flags$flags.is1p;
    __$theme_generator$flags$flags.enableDsp;
    var __$theme_generator$flags$SHOW_ANDROID =
        __$theme_generator$flags$flags.enableAndroid;
    __$theme_generator$flags$flags.enableWebExport;
    __$theme_generator$flags$flags.enableExtendedColors;
    __$theme_generator$flags$flags.enableColorShift;
    __$theme_generator$flags$flags.enableTonalOverride;
    __$theme_generator$flags$flags.enablePluginColorsUpdate;
    __$theme_generator$flags$flags.enableLogging;
    __$theme_generator$flags$flags.defaultThemeName;
    var __$theme_generator$src$theme$baseline_1p$BASELINE_1P = {
        light: { background: "#FFFFFF", surface: "#FFFFFF" },
        dark: {},
        neutral: {
            luminance100: "#FFFFFF",
            luminance99: "#FDFCFB",
            luminance98: "#FAF9F9",
            luminance95: "#F2F2F2",
            luminance90: "#E3E3E3",
            luminance80: "#C7C7C7",
            luminance70: "#ABABAB",
            luminance60: "#8F8F8F",
            luminance50: "#757575",
            luminance40: "#5E5E5E",
            luminance35: "#525252",
            luminance30: "#474747",
            luminance25: "#3A3C3C",
            luminance20: "#303030",
            luminance10: "#1F1F1F",
            luminance0: "#000000",
        },
        neutralVariant: {
            luminance100: "#FFFFFF",
            luminance99: "#FAFDFB",
            luminance98: "#F8FAF8",
            luminance95: "#EFF2EF",
            luminance90: "#E1E3E1",
            luminance80: "#C4C7C5",
            luminance70: "#A9ACAA",
            luminance60: "#8E918F",
            luminance50: "#747775",
            luminance40: "#5C5F5E",
            luminance35: "#4F5351",
            luminance30: "#444746",
            luminance25: "#393C3B",
            luminance20: "#2D312F",
            luminance10: "#191D1C",
            luminance0: "#000000",
        },
        primary: {
            luminance100: "#FFFFFF",
            luminance99: "#FAFBFF",
            luminance98: "#F8F9FF",
            luminance95: "#ECF3FE",
            luminance90: "#D3E3FD",
            luminance80: "#A8C7FA",
            luminance70: "#7CACF8",
            luminance60: "#4C8DF6",
            luminance50: "#1B6EF3",
            luminance40: "#0B57D0",
            luminance35: "#155298",
            luminance30: "#0842A0",
            luminance25: "#003B77",
            luminance20: "#062E6F",
            luminance10: "#041E49",
            luminance0: "#000000",
        },
        secondary: {
            luminance100: "#FFFFFF",
            luminance99: "#F7FCFF",
            luminance98: "#E3FFF6",
            luminance95: "#DFF3FF",
            luminance90: "#C2E7FF",
            luminance80: "#7FCFFF",
            luminance70: "#5AB3F0",
            luminance60: "#3998D3",
            luminance50: "#047DB7",
            luminance40: "#00639B",
            luminance35: "#005E4E",
            luminance30: "#004A77",
            luminance25: "#004438",
            luminance20: "#003355",
            luminance10: "#001D35",
            luminance0: "#000000",
        },
        tertiary: {
            luminance100: "#FFFFFF",
            luminance99: "#F2FFEE",
            luminance98: "#E8FFE7",
            luminance95: "#E7F8ED",
            luminance90: "#C4EED0",
            luminance80: "#6DD58C",
            luminance70: "#37BE5F",
            luminance60: "#1EA446",
            luminance50: "#198639",
            luminance40: "#146C2E",
            luminance35: "#006024",
            luminance30: "#0F5223",
            luminance25: "#004618",
            luminance20: "#0A3818",
            luminance10: "#072711",
            luminance0: "#000000",
        },
        error: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBF9",
            luminance98: "#FFF8F6",
            luminance95: "#FCEEEE",
            luminance90: "#F9DEDC",
            luminance80: "#F2B8B5",
            luminance70: "#EC928E",
            luminance60: "#E46962",
            luminance50: "#DC362E",
            luminance40: "#B3261E",
            luminance35: "#833D3B",
            luminance30: "#8C1D18",
            luminance25: "#662726",
            luminance20: "#601410",
            luminance10: "#410E0B",
            luminance0: "#000000",
        },
        styles: {
            display1: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 64,
                lineHeight: 76,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            display2: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 57,
                lineHeight: 64,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            display3: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 45,
                lineHeight: 52,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline1: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 36,
                lineHeight: 44,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline2: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 32,
                lineHeight: 40,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline3: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 28,
                lineHeight: 36,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline4: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 24,
                lineHeight: 32,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline5: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 22,
                lineHeight: 28,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline6: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 18,
                lineHeight: 24,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            subhead1: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Medium",
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            subhead2: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Medium",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            button: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Medium",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            body1: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            body2: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            caption: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Regular",
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
            overline: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Medium",
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
            labelSmall: {
                fontFamilyName: "Google Sans Text",
                fontFamilyStyle: "Medium",
                fontSize: 11,
                lineHeight: 16,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
        },
    },
    __$theme_generator$src$theme$baseline_3p$BASELINE_3P = {
        light: {},
        dark: {},
        neutral: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBFE",
            luminance98: "#FDF8FC",
            luminance95: "#F4EFF4",
            luminance90: "#E6E1E5",
            luminance80: "#C9C5CA",
            luminance70: "#AEAAAE",
            luminance60: "#939094",
            luminance50: "#787579",
            luminance40: "#605D62",
            luminance35: "#545255",
            luminance30: "#484649",
            luminance25: "#3D3B3E",
            luminance20: "#313033",
            luminance10: "#1C1B1F",
            luminance0: "#000000",
        },
        neutralVariant: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBFE",
            luminance98: "#FEF7FF",
            luminance95: "#F5EEFA",
            luminance90: "#E7E0EC",
            luminance80: "#CAC4D0",
            luminance70: "#AEA9B4",
            luminance60: "#938F99",
            luminance50: "#79747E",
            luminance40: "#605D66",
            luminance35: "#54515A",
            luminance30: "#49454F",
            luminance25: "#3D3A43",
            luminance20: "#322F37",
            luminance10: "#1D1A22",
            luminance0: "#000000",
        },
        primary: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBFE",
            luminance98: "#FEF7FF",
            luminance95: "#F6EDFF",
            luminance90: "#EADDFF",
            luminance80: "#D0BCFF",
            luminance70: "#B69DF8",
            luminance60: "#9A82DB",
            luminance50: "#7F67BE",
            luminance40: "#6750A4",
            luminance35: "#5B4497",
            luminance30: "#4F378B",
            luminance25: "#432B7E",
            luminance20: "#381E72",
            luminance10: "#21005D",
            luminance0: "#000000",
        },
        secondary: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBFE",
            luminance98: "#FEF7FF",
            luminance95: "#F6EDFF",
            luminance90: "#E8DEF8",
            luminance80: "#CCC2DC",
            luminance70: "#B0A7C0",
            luminance60: "#958DA5",
            luminance50: "#7A7289",
            luminance40: "#625B71",
            luminance35: "#564F65",
            luminance30: "#4A4458",
            luminance25: "#3E384D",
            luminance20: "#332D41",
            luminance10: "#1D192B",
            luminance0: "#000000",
        },
        tertiary: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBFA",
            luminance98: "#FFF8F9",
            luminance95: "#FFECF1",
            luminance90: "#FFD8E4",
            luminance80: "#EFB8C8",
            luminance70: "#D29DAC",
            luminance60: "#B58392",
            luminance50: "#986977",
            luminance40: "#7D5260",
            luminance35: "#704653",
            luminance30: "#633B48",
            luminance25: "#57303D",
            luminance20: "#492532",
            luminance10: "#31111D",
            luminance0: "#000000",
        },
        error: {
            luminance100: "#FFFFFF",
            luminance99: "#FFFBF9",
            luminance98: "#FFF8F6",
            luminance95: "#FCEEEE",
            luminance90: "#F9DEDC",
            luminance80: "#F2B8B5",
            luminance70: "#EC928E",
            luminance60: "#E46962",
            luminance50: "#DC362E",
            luminance40: "#B3261E",
            luminance35: "#833D3B",
            luminance30: "#8C1D18",
            luminance25: "#662726",
            luminance20: "#601410",
            luminance10: "#410E0B",
            luminance0: "#000000",
        },
        styles: {
            display1: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 64,
                lineHeight: 76,
                letterSpacing: -0.5,
                paragraphSpacing: 0,
            },
            display2: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 57,
                lineHeight: 64,
                letterSpacing: -0.25,
                paragraphSpacing: 0,
            },
            display3: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 45,
                lineHeight: 52,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline1: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 36,
                lineHeight: 44,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline2: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 32,
                lineHeight: 40,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline3: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 28,
                lineHeight: 36,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline4: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 24,
                lineHeight: 32,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline5: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 22,
                lineHeight: 28,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            headline6: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 18,
                lineHeight: 24,
                letterSpacing: 0,
                paragraphSpacing: 0,
            },
            subhead1: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Medium",
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
            subhead2: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Medium",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
            button: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Medium",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.1,
                paragraphSpacing: 0,
            },
            body1: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 16,
                lineHeight: 24,
                letterSpacing: 0.5,
                paragraphSpacing: 0,
            },
            body2: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 14,
                lineHeight: 20,
                letterSpacing: 0.25,
                paragraphSpacing: 0,
            },
            caption: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Regular",
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: 0.4,
                paragraphSpacing: 0,
            },
            overline: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Medium",
                fontSize: 12,
                lineHeight: 16,
                letterSpacing: 0.5,
                paragraphSpacing: 0,
            },
            labelSmall: {
                fontFamilyName: "Roboto",
                fontFamilyStyle: "Medium",
                fontSize: 11,
                lineHeight: 16,
                letterSpacing: 0.5,
                paragraphSpacing: 0,
            },
        },
    };
function __ux$material$theme_generator$src$theme$checks_isTheme3p(e) {
    var t, n;
    return (
        "Roboto" ===
        (null ===
            (n =
                null === (t = null == e ? void 0 : e.styles) || void 0 === t
                    ? void 0
                    : t.headline1) || void 0 === n
            ? void 0
            : n.fontFamilyName)
    );
}
function __ux$material$theme_generator$src$theme$checks_isThemeBaseline(e) {
    let t = !0;
    const n = __ux$material$theme_generator$src$theme$checks_isTheme3p(e)
            ? __$theme_generator$src$theme$baseline_3p$BASELINE_3P
            : __$theme_generator$src$theme$baseline_1p$BASELINE_1P,
        r = (e, n, r) => {
            if (t) {
                let e;
                (e = __ux$material$theme_generator$src$theme$checks_isSameColor(
                    n.luminance0,
                    r.luminance0
                )) &&
                    (e =
                        __ux$material$theme_generator$src$theme$checks_isSameColor(
                            n.luminance10,
                            r.luminance10
                        )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance20,
                                r.luminance20
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance30,
                                r.luminance30
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance40,
                                r.luminance40
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance50,
                                r.luminance50
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance60,
                                r.luminance60
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance70,
                                r.luminance70
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance80,
                                r.luminance80
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance90,
                                r.luminance90
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance95,
                                r.luminance95
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance98,
                                r.luminance98
                            )),
                    e &&
                        (e =
                            __ux$material$theme_generator$src$theme$checks_isSameColor(
                                n.luminance100,
                                r.luminance100
                            )),
                    (t = e);
            }
            t || console.log(`theme adapter ${e} group mismatch`, n, r);
        };
    return (
        r("primary", e.primary, n.primary),
        r("secondary", e.secondary, n.secondary),
        r("tertiary", e.tertiary, n.tertiary),
        r("neutral", e.neutral, n.neutral),
        r("neutralVariant", e.neutralVariant, n.neutralVariant),
        r("error", e.error, n.error),
        console.log(`theme adapter baseline match: ${t}`),
        t
    );
}
function __ux$material$theme_generator$src$theme$checks_isSameColor(e, t) {
    return (
        (null == e ? void 0 : e.toUpperCase()) ===
        (null == t ? void 0 : t.toUpperCase())
    );
}
function __ux$material$theme_generator$src$theme$color_utils_numberToHex(e) {
    try {
        return __$hexFromInt(e);
    } catch (t) {
        return console.log(`error converting [${e}] to hex`, t), "#000000";
    }
}
function __ux$material$theme_generator$src$theme$color_utils_hexToNumber(e) {
    try {
        return __$intFromHex(e);
    } catch (t) {
        return (
            console.log(`error converting [${e}] to number`, t),
            __$intFromHex("#000000")
        );
    }
}
function __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
    e
) {
    return {
        luminance100:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(100)
            ),
        luminance99:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(99)
            ),
        luminance98:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(98)
            ),
        luminance95:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(95)
            ),
        luminance90:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(90)
            ),
        luminance80:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(80)
            ),
        luminance70:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(70)
            ),
        luminance60:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(60)
            ),
        luminance50:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(50)
            ),
        luminance40:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(40)
            ),
        luminance35:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(35)
            ),
        luminance30:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(30)
            ),
        luminance25:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(25)
            ),
        luminance20:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(20)
            ),
        luminance10:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(10)
            ),
        luminance0:
            __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                e.tone(0)
            ),
    };
}
function __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
    e,
    t
) {
    const n = new Map();
    return (
        n.set(`${e}-100`, t.luminance100),
        n.set(`${e}-99`, t.luminance99),
        n.set(`${e}-98`, t.luminance98),
        n.set(`${e}-95`, t.luminance95),
        n.set(`${e}-90`, t.luminance90),
        n.set(`${e}-80`, t.luminance80),
        n.set(`${e}-70`, t.luminance70),
        n.set(`${e}-60`, t.luminance60),
        n.set(`${e}-50`, t.luminance50),
        n.set(`${e}-40`, t.luminance40),
        n.set(`${e}-35`, t.luminance35),
        n.set(`${e}-30`, t.luminance30),
        n.set(`${e}-25`, t.luminance25),
        n.set(`${e}-20`, t.luminance20),
        n.set(`${e}-10`, t.luminance10),
        n.set(`${e}-0`, t.luminance0),
        n
    );
}
var _getColorGroup = function (e, t, n) {
        var r;
        const o =
                null !== (r = e.props.overrides.tonalGroups) && void 0 !== r
                    ? r
                    : {},
            a = Object(o)[t];
        return (__$theme_generator$flags$IS_1P && !e.props.isBaseline) || !a
            ? __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                  n
              )
            : a;
    },
    _getPrimaryTonal = function (e, t, n) {
        return (null != n ? n : e.palettes).get(`${t}-40`);
    },
    __$theme_generator$src$theme$base$ThemeAdapterBase = class {
        constructor(e) {
            this.props = e;
        }
        get isBaseline() {
            return __ux$material$theme_generator$src$theme$checks_isThemeBaseline(
                this.save()
            );
        }
        get is3p() {
            return this.props.is3p;
        }
        setCustomColor(e, t) {
            var n, r, o, a;
            if (
                ((this.props.isBaseline = !1),
                (null !== (n = (o = this.props.overrides).source) &&
                    void 0 !== n) ||
                    (o.source = Object.assign({}, this.source)),
                (this.props.overrides.source[e] = t),
                __$theme_generator$src$theme$defaults$KEY_COLORS.includes(e))
            ) {
                (null !== (r = (a = this.props.overrides).tonalGroups) &&
                    void 0 !== r) ||
                    (a.tonalGroups = {});
                var i = new __$palettes$core_palette$CorePalette(
                    __ux$material$theme_generator$src$theme$color_utils_hexToNumber(
                        t
                    )
                );
                switch (e) {
                    case "primary":
                        this.props.overrides.tonalGroups.primary =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.a1
                            );
                        break;
                    case "secondary":
                        this.props.overrides.tonalGroups.secondary =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.a1
                            );
                        break;
                    case "tertiary":
                        this.props.overrides.tonalGroups.tertiary =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.a1
                            );
                        break;
                    case "error":
                        this.props.overrides.tonalGroups.error =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.error
                            );
                        break;
                    case "neutral":
                        this.props.overrides.tonalGroups.neutral =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.n1
                            );
                        break;
                    case "neutralVariant":
                        this.props.overrides.tonalGroups.neutralVariant =
                            __ux$material$theme_generator$src$theme$tonal_group_tonesToTonalGroup(
                                i.n2
                            );
                }
            }
        }
        get styles() {
            return this.props.is3p
                ? __$theme_generator$src$theme$baseline_3p$BASELINE_3P.styles
                : __$theme_generator$src$theme$baseline_1p$BASELINE_1P.styles;
        }
        get imageUrl() {
            return this.props.imageUrl;
        }
        get light() {
            var e, t, n;
            const r = this.props.isBaseline
                ? null ===
                      (e = __$theme_generator$flags$IS_1P
                          ? __$theme_generator$src$theme$baseline_1p$BASELINE_1P
                          : __$theme_generator$src$theme$baseline_3p$BASELINE_3P) ||
                  void 0 === e
                    ? void 0
                    : e.light
                : null !==
                      (n =
                          null === (t = this.props.overrides) || void 0 === t
                              ? void 0
                              : t.light) && void 0 !== n
                ? n
                : {};
            var o,
                a,
                i,
                l,
                _,
                s,
                u,
                c,
                m,
                $,
                h,
                g,
                d,
                p,
                v,
                f,
                F,
                x,
                y,
                b,
                S,
                T,
                C,
                E,
                w,
                A = this.palettes;
            return {
                primary:
                    null !== (o = null == r ? void 0 : r.primary) &&
                    void 0 !== o
                        ? o
                        : A.get("P-40"),
                onPrimary:
                    null !== (a = null == r ? void 0 : r.onPrimary) &&
                    void 0 !== a
                        ? a
                        : A.get("P-100"),
                primaryContainer:
                    null !== (i = null == r ? void 0 : r.primaryContainer) &&
                    void 0 !== i
                        ? i
                        : A.get("P-90"),
                onPrimaryContainer:
                    null !== (l = null == r ? void 0 : r.onPrimaryContainer) &&
                    void 0 !== l
                        ? l
                        : A.get("P-10"),
                secondary:
                    null !== (_ = null == r ? void 0 : r.secondary) &&
                    void 0 !== _
                        ? _
                        : A.get("S-40"),
                onSecondary:
                    null !== (s = null == r ? void 0 : r.onSecondary) &&
                    void 0 !== s
                        ? s
                        : A.get("S-100"),
                secondaryContainer:
                    null !== (u = null == r ? void 0 : r.secondaryContainer) &&
                    void 0 !== u
                        ? u
                        : A.get("S-90"),
                onSecondaryContainer:
                    null !==
                        (c = null == r ? void 0 : r.onSecondaryContainer) &&
                    void 0 !== c
                        ? c
                        : A.get("S-10"),
                tertiary:
                    null !== (m = null == r ? void 0 : r.tertiary) &&
                    void 0 !== m
                        ? m
                        : A.get("T-40"),
                onTertiary:
                    null !== ($ = null == r ? void 0 : r.onTertiary) &&
                    void 0 !== $
                        ? $
                        : A.get("T-100"),
                tertiaryContainer:
                    null !== (h = null == r ? void 0 : r.tertiaryContainer) &&
                    void 0 !== h
                        ? h
                        : A.get("T-90"),
                onTertiaryContainer:
                    null !== (g = null == r ? void 0 : r.onTertiaryContainer) &&
                    void 0 !== g
                        ? g
                        : A.get("T-10"),
                error:
                    null !== (d = null == r ? void 0 : r.error) && void 0 !== d
                        ? d
                        : A.get("E-40"),
                errorContainer:
                    null !== (p = null == r ? void 0 : r.errorContainer) &&
                    void 0 !== p
                        ? p
                        : A.get("E-90"),
                onError:
                    null !== (v = null == r ? void 0 : r.onError) &&
                    void 0 !== v
                        ? v
                        : A.get("E-100"),
                onErrorContainer:
                    null !== (f = null == r ? void 0 : r.onErrorContainer) &&
                    void 0 !== f
                        ? f
                        : A.get("E-10"),
                background:
                    null !== (F = null == r ? void 0 : r.background) &&
                    void 0 !== F
                        ? F
                        : A.get("N-99"),
                onBackground:
                    null !== (x = null == r ? void 0 : r.onBackground) &&
                    void 0 !== x
                        ? x
                        : A.get("N-10"),
                surface:
                    null !== (y = null == r ? void 0 : r.surface) &&
                    void 0 !== y
                        ? y
                        : A.get("N-99"),
                onSurface:
                    null !== (b = null == r ? void 0 : r.onSurface) &&
                    void 0 !== b
                        ? b
                        : A.get("N-10"),
                surfaceVariant:
                    null !== (S = null == r ? void 0 : r.surfaceVariant) &&
                    void 0 !== S
                        ? S
                        : A.get("NV-90"),
                onSurfaceVariant:
                    null !== (T = null == r ? void 0 : r.onSurfaceVariant) &&
                    void 0 !== T
                        ? T
                        : A.get("NV-30"),
                outline:
                    null !== (C = null == r ? void 0 : r.outline) &&
                    void 0 !== C
                        ? C
                        : A.get("NV-50"),
                inverseOnSurface:
                    null !== (E = null == r ? void 0 : r.inverseOnSurface) &&
                    void 0 !== E
                        ? E
                        : A.get("N-95"),
                inverseSurface:
                    null !== (w = null == r ? void 0 : r.inverseSurface) &&
                    void 0 !== w
                        ? w
                        : A.get("N-20"),
            };
        }
        get dark() {
            var e, t, n;
            const r = this.props.isBaseline
                ? null ===
                      (e = __$theme_generator$flags$IS_1P
                          ? __$theme_generator$src$theme$baseline_1p$BASELINE_1P
                          : __$theme_generator$src$theme$baseline_3p$BASELINE_3P) ||
                  void 0 === e
                    ? void 0
                    : e.dark
                : null !==
                      (n =
                          null === (t = this.props.overrides) || void 0 === t
                              ? void 0
                              : t.dark) && void 0 !== n
                ? n
                : {};
            var o,
                a,
                i,
                l,
                _,
                s,
                u,
                c,
                m,
                $,
                h,
                g,
                d,
                p,
                v,
                f,
                F,
                x,
                y,
                b,
                S,
                T,
                C,
                E,
                w,
                A = this.palettes;
            return {
                primary:
                    null !== (o = null == r ? void 0 : r.primary) &&
                    void 0 !== o
                        ? o
                        : A.get("P-80"),
                onPrimary:
                    null !== (a = null == r ? void 0 : r.onPrimary) &&
                    void 0 !== a
                        ? a
                        : A.get("P-20"),
                primaryContainer:
                    null !== (i = null == r ? void 0 : r.primaryContainer) &&
                    void 0 !== i
                        ? i
                        : A.get("P-30"),
                onPrimaryContainer:
                    null !== (l = null == r ? void 0 : r.onPrimaryContainer) &&
                    void 0 !== l
                        ? l
                        : A.get("P-90"),
                secondary:
                    null !== (_ = null == r ? void 0 : r.secondary) &&
                    void 0 !== _
                        ? _
                        : A.get("S-80"),
                onSecondary:
                    null !== (s = null == r ? void 0 : r.onSecondary) &&
                    void 0 !== s
                        ? s
                        : A.get("S-20"),
                secondaryContainer:
                    null !== (u = null == r ? void 0 : r.secondaryContainer) &&
                    void 0 !== u
                        ? u
                        : A.get("S-30"),
                onSecondaryContainer:
                    null !==
                        (c = null == r ? void 0 : r.onSecondaryContainer) &&
                    void 0 !== c
                        ? c
                        : A.get("S-90"),
                tertiary:
                    null !== (m = null == r ? void 0 : r.tertiary) &&
                    void 0 !== m
                        ? m
                        : A.get("T-80"),
                onTertiary:
                    null !== ($ = null == r ? void 0 : r.onTertiary) &&
                    void 0 !== $
                        ? $
                        : A.get("T-20"),
                tertiaryContainer:
                    null !== (h = null == r ? void 0 : r.tertiaryContainer) &&
                    void 0 !== h
                        ? h
                        : A.get("T-30"),
                onTertiaryContainer:
                    null !== (g = null == r ? void 0 : r.onTertiaryContainer) &&
                    void 0 !== g
                        ? g
                        : A.get("T-90"),
                error:
                    null !== (d = null == r ? void 0 : r.error) && void 0 !== d
                        ? d
                        : A.get("E-80"),
                errorContainer:
                    null !== (p = null == r ? void 0 : r.errorContainer) &&
                    void 0 !== p
                        ? p
                        : A.get("E-30"),
                onError:
                    null !== (v = null == r ? void 0 : r.onError) &&
                    void 0 !== v
                        ? v
                        : A.get("E-20"),
                onErrorContainer:
                    null !== (f = null == r ? void 0 : r.onErrorContainer) &&
                    void 0 !== f
                        ? f
                        : A.get("E-90"),
                background:
                    null !== (F = null == r ? void 0 : r.background) &&
                    void 0 !== F
                        ? F
                        : A.get("N-10"),
                onBackground:
                    null !== (x = null == r ? void 0 : r.onBackground) &&
                    void 0 !== x
                        ? x
                        : A.get("N-90"),
                surface:
                    null !== (y = null == r ? void 0 : r.surface) &&
                    void 0 !== y
                        ? y
                        : A.get("N-10"),
                onSurface:
                    null !== (b = null == r ? void 0 : r.onSurface) &&
                    void 0 !== b
                        ? b
                        : A.get("N-90"),
                surfaceVariant:
                    null !== (S = null == r ? void 0 : r.surfaceVariant) &&
                    void 0 !== S
                        ? S
                        : A.get("NV-30"),
                onSurfaceVariant:
                    null !== (T = null == r ? void 0 : r.onSurfaceVariant) &&
                    void 0 !== T
                        ? T
                        : A.get("NV-80"),
                outline:
                    null !== (C = null == r ? void 0 : r.outline) &&
                    void 0 !== C
                        ? C
                        : A.get("NV-60"),
                inverseOnSurface:
                    null !== (E = null == r ? void 0 : r.inverseOnSurface) &&
                    void 0 !== E
                        ? E
                        : A.get("N-10"),
                inverseSurface:
                    null !== (w = null == r ? void 0 : r.inverseSurface) &&
                    void 0 !== w
                        ? w
                        : A.get("N-90"),
            };
        }
        get androidLight() {
            var e,
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                _,
                s,
                u,
                c,
                m,
                $,
                h,
                g,
                d,
                p,
                v,
                f,
                F,
                x,
                y,
                b,
                S,
                T,
                C,
                E,
                w,
                A,
                I,
                H,
                N,
                D,
                M,
                P,
                V,
                B,
                L,
                z,
                G,
                R,
                k,
                U,
                O,
                q,
                j,
                W,
                X,
                J,
                K,
                Q = this.palettes,
                Y = this.props.tones,
                Z =
                    null === (e = this.props.overrides) || void 0 === e
                        ? void 0
                        : e.androidLight;
            return {
                colorAccentPrimary:
                    null !==
                        (n =
                            null !==
                                (t =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentPrimary) && void 0 !== t
                                ? t
                                : Q.get("P-90")) && void 0 !== n
                        ? n
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a1.tone(90)
                          ),
                colorAccentPrimaryVariant:
                    null !==
                        (o =
                            null !==
                                (r =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentPrimaryVariant) &&
                            void 0 !== r
                                ? r
                                : Q.get("P-40")) && void 0 !== o
                        ? o
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a1.tone(40)
                          ),
                colorAccentSecondary:
                    null !==
                        (i =
                            null !==
                                (a =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentSecondary) &&
                            void 0 !== a
                                ? a
                                : Q.get("S-90")) && void 0 !== i
                        ? i
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(90)
                          ),
                colorAccentSecondaryVariant:
                    null !==
                        (_ =
                            null !==
                                (l =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentSecondaryVariant) &&
                            void 0 !== l
                                ? l
                                : Q.get("S-40")) && void 0 !== _
                        ? _
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(40)
                          ),
                colorAccentTertiary:
                    null !==
                        (u =
                            null !==
                                (s =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentTertiary) && void 0 !== s
                                ? s
                                : Q.get("T-90")) && void 0 !== u
                        ? u
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a3.tone(90)
                          ),
                colorAccentTertiaryVariant:
                    null !==
                        (m =
                            null !==
                                (c =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentTertiaryVariant) &&
                            void 0 !== c
                                ? c
                                : Q.get("T-40")) && void 0 !== m
                        ? m
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a3.tone(40)
                          ),
                textColorPrimary:
                    null !==
                        (h =
                            null !==
                                ($ = null == Z ? void 0 : Z.textColorPrimary) &&
                            void 0 !== $
                                ? $
                                : Q.get("N-10")) && void 0 !== h
                        ? h
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                textColorSecondary:
                    null !==
                        (d =
                            null !==
                                (g =
                                    null == Z
                                        ? void 0
                                        : Z.textColorSecondary) && void 0 !== g
                                ? g
                                : Q.get("NV-30")) && void 0 !== d
                        ? d
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(30)
                          ),
                textColorTertiary:
                    null !==
                        (v =
                            null !==
                                (p =
                                    null == Z ? void 0 : Z.textColorTertiary) &&
                            void 0 !== p
                                ? p
                                : Q.get("NV-50")) && void 0 !== v
                        ? v
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(50)
                          ),
                textColorPrimaryInverse:
                    null !==
                        (F =
                            null !==
                                (f =
                                    null == Z
                                        ? void 0
                                        : Z.textColorPrimaryInverse) &&
                            void 0 !== f
                                ? f
                                : Q.get("N-95")) && void 0 !== F
                        ? F
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(95)
                          ),
                textColorSecondaryInverse:
                    null !==
                        (y =
                            null !==
                                (x =
                                    null == Z
                                        ? void 0
                                        : Z.textColorSecondaryInverse) &&
                            void 0 !== x
                                ? x
                                : Q.get("N-80")) && void 0 !== y
                        ? y
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(80)
                          ),
                textColorTertiaryInverse:
                    null !==
                        (S =
                            null !==
                                (b =
                                    null == Z
                                        ? void 0
                                        : Z.textColorTertiaryInverse) &&
                            void 0 !== b
                                ? b
                                : Q.get("N-60")) && void 0 !== S
                        ? S
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(60)
                          ),
                colorBackground:
                    null !==
                        (C =
                            null !==
                                (T = null == Z ? void 0 : Z.colorBackground) &&
                            void 0 !== T
                                ? T
                                : Q.get("N-95")) && void 0 !== C
                        ? C
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(95)
                          ),
                colorBackgroundFloating:
                    null !==
                        (w =
                            null !==
                                (E =
                                    null == Z
                                        ? void 0
                                        : Z.colorBackgroundFloating) &&
                            void 0 !== E
                                ? E
                                : Q.get("N-98")) && void 0 !== w
                        ? w
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(98)
                          ),
                colorSurface:
                    null !==
                        (I =
                            null !==
                                (A = null == Z ? void 0 : Z.colorSurface) &&
                            void 0 !== A
                                ? A
                                : Q.get("N-98")) && void 0 !== I
                        ? I
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(98)
                          ),
                colorSurfaceVariant:
                    null !==
                        (N =
                            null !==
                                (H =
                                    null == Z
                                        ? void 0
                                        : Z.colorSurfaceVariant) && void 0 !== H
                                ? H
                                : Q.get("N-90")) && void 0 !== N
                        ? N
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(90)
                          ),
                colorSurfaceHighlight:
                    null !==
                        (M =
                            null !==
                                (D =
                                    null == Z
                                        ? void 0
                                        : Z.colorSurfaceHighlight) &&
                            void 0 !== D
                                ? D
                                : Q.get("N-100")) && void 0 !== M
                        ? M
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(100)
                          ),
                surfaceHeader:
                    null !==
                        (V =
                            null !==
                                (P = null == Z ? void 0 : Z.surfaceHeader) &&
                            void 0 !== P
                                ? P
                                : Q.get("N-90")) && void 0 !== V
                        ? V
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(90)
                          ),
                underSurface:
                    null !==
                        (L =
                            null !==
                                (B = null == Z ? void 0 : Z.underSurface) &&
                            void 0 !== B
                                ? B
                                : Q.get("N-0")) && void 0 !== L
                        ? L
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(0)
                          ),
                offState:
                    null !==
                        (G =
                            null !== (z = null == Z ? void 0 : Z.offState) &&
                            void 0 !== z
                                ? z
                                : Q.get("N-20")) && void 0 !== G
                        ? G
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(20)
                          ),
                accentSurface:
                    null !==
                        (k =
                            null !==
                                (R = null == Z ? void 0 : Z.accentSurface) &&
                            void 0 !== R
                                ? R
                                : Q.get("NV-95")) && void 0 !== k
                        ? k
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(95)
                          ),
                textPrimaryOnAccent:
                    null !==
                        (O =
                            null !==
                                (U =
                                    null == Z
                                        ? void 0
                                        : Z.textPrimaryOnAccent) && void 0 !== U
                                ? U
                                : Q.get("N-10")) && void 0 !== O
                        ? O
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                textSecondaryOnAccent:
                    null !==
                        (j =
                            null !==
                                (q =
                                    null == Z
                                        ? void 0
                                        : Z.textSecondaryOnAccent) &&
                            void 0 !== q
                                ? q
                                : Q.get("NV-30")) && void 0 !== j
                        ? j
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(30)
                          ),
                volumeBackground:
                    null !==
                        (X =
                            null !==
                                (W = null == Z ? void 0 : Z.volumeBackground) &&
                            void 0 !== W
                                ? W
                                : Q.get("N-25")) && void 0 !== X
                        ? X
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(25)
                          ),
                scrim:
                    null !==
                        (K =
                            null !== (J = null == Z ? void 0 : Z.scrim) &&
                            void 0 !== J
                                ? J
                                : Q.get("N-80")) && void 0 !== K
                        ? K
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(80)
                          ),
            };
        }
        get androidDark() {
            var e,
                t,
                n,
                r,
                o,
                a,
                i,
                l,
                _,
                s,
                u,
                c,
                m,
                $,
                h,
                g,
                d,
                p,
                v,
                f,
                F,
                x,
                y,
                b,
                S,
                T,
                C,
                E,
                w,
                A,
                I,
                H,
                N,
                D,
                M,
                P,
                V,
                B,
                L,
                z,
                G,
                R,
                k,
                U,
                O,
                q,
                j,
                W,
                X,
                J,
                K,
                Q = this.palettes,
                Y = this.props.tones,
                Z =
                    null === (e = this.props.overrides) || void 0 === e
                        ? void 0
                        : e.androidDark;
            return {
                colorAccentPrimary:
                    null !==
                        (n =
                            null !==
                                (t =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentPrimary) && void 0 !== t
                                ? t
                                : Q.get("P-90")) && void 0 !== n
                        ? n
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a1.tone(90)
                          ),
                colorAccentPrimaryVariant:
                    null !==
                        (o =
                            null !==
                                (r =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentPrimaryVariant) &&
                            void 0 !== r
                                ? r
                                : Q.get("P-70")) && void 0 !== o
                        ? o
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a1.tone(70)
                          ),
                colorAccentSecondary:
                    null !==
                        (i =
                            null !==
                                (a =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentSecondary) &&
                            void 0 !== a
                                ? a
                                : Q.get("S-90")) && void 0 !== i
                        ? i
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(90)
                          ),
                colorAccentSecondaryVariant:
                    null !==
                        (_ =
                            null !==
                                (l =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentSecondaryVariant) &&
                            void 0 !== l
                                ? l
                                : Q.get("S-70")) && void 0 !== _
                        ? _
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(70)
                          ),
                colorAccentTertiary:
                    null !==
                        (u =
                            null !==
                                (s =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentTertiary) && void 0 !== s
                                ? s
                                : Q.get("T-90")) && void 0 !== u
                        ? u
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a3.tone(90)
                          ),
                colorAccentTertiaryVariant:
                    null !==
                        (m =
                            null !==
                                (c =
                                    null == Z
                                        ? void 0
                                        : Z.colorAccentTertiaryVariant) &&
                            void 0 !== c
                                ? c
                                : Q.get("T-70")) && void 0 !== m
                        ? m
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a3.tone(70)
                          ),
                textColorPrimary:
                    null !==
                        (h =
                            null !==
                                ($ = null == Z ? void 0 : Z.textColorPrimary) &&
                            void 0 !== $
                                ? $
                                : Q.get("N-95")) && void 0 !== h
                        ? h
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(95)
                          ),
                textColorSecondary:
                    null !==
                        (d =
                            null !==
                                (g =
                                    null == Z
                                        ? void 0
                                        : Z.textColorSecondary) && void 0 !== g
                                ? g
                                : Q.get("NV-80")) && void 0 !== d
                        ? d
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(80)
                          ),
                textColorTertiary:
                    null !==
                        (v =
                            null !==
                                (p =
                                    null == Z ? void 0 : Z.textColorTertiary) &&
                            void 0 !== p
                                ? p
                                : Q.get("NV-60")) && void 0 !== v
                        ? v
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(60)
                          ),
                textColorPrimaryInverse:
                    null !==
                        (F =
                            null !==
                                (f =
                                    null == Z
                                        ? void 0
                                        : Z.textColorPrimaryInverse) &&
                            void 0 !== f
                                ? f
                                : Q.get("N-10")) && void 0 !== F
                        ? F
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                textColorSecondaryInverse:
                    null !==
                        (y =
                            null !==
                                (x =
                                    null == Z
                                        ? void 0
                                        : Z.textColorSecondaryInverse) &&
                            void 0 !== x
                                ? x
                                : Q.get("N-30")) && void 0 !== y
                        ? y
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(30)
                          ),
                textColorTertiaryInverse:
                    null !==
                        (S =
                            null !==
                                (b =
                                    null == Z
                                        ? void 0
                                        : Z.textColorTertiaryInverse) &&
                            void 0 !== b
                                ? b
                                : Q.get("N-50")) && void 0 !== S
                        ? S
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(50)
                          ),
                colorBackground:
                    null !==
                        (C =
                            null !==
                                (T = null == Z ? void 0 : Z.colorBackground) &&
                            void 0 !== T
                                ? T
                                : Q.get("N-10")) && void 0 !== C
                        ? C
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                colorBackgroundFloating:
                    null !==
                        (w =
                            null !==
                                (E =
                                    null == Z
                                        ? void 0
                                        : Z.colorBackgroundFloating) &&
                            void 0 !== E
                                ? E
                                : Q.get("N-10")) && void 0 !== w
                        ? w
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                colorSurface:
                    null !==
                        (I =
                            null !==
                                (A = null == Z ? void 0 : Z.colorSurface) &&
                            void 0 !== A
                                ? A
                                : Q.get("N-20")) && void 0 !== I
                        ? I
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(20)
                          ),
                colorSurfaceVariant:
                    null !==
                        (N =
                            null !==
                                (H =
                                    null == Z
                                        ? void 0
                                        : Z.colorSurfaceVariant) && void 0 !== H
                                ? H
                                : Q.get("N-30")) && void 0 !== N
                        ? N
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(30)
                          ),
                colorSurfaceHighlight:
                    null !==
                        (M =
                            null !==
                                (D =
                                    null == Z
                                        ? void 0
                                        : Z.colorSurfaceHighlight) &&
                            void 0 !== D
                                ? D
                                : Q.get("N-35")) && void 0 !== M
                        ? M
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(35)
                          ),
                surfaceHeader:
                    null !==
                        (V =
                            null !==
                                (P = null == Z ? void 0 : Z.surfaceHeader) &&
                            void 0 !== P
                                ? P
                                : Q.get("N-30")) && void 0 !== V
                        ? V
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(30)
                          ),
                underSurface:
                    null !==
                        (L =
                            null !==
                                (B = null == Z ? void 0 : Z.underSurface) &&
                            void 0 !== B
                                ? B
                                : Q.get("N-0")) && void 0 !== L
                        ? L
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(0)
                          ),
                offState:
                    null !==
                        (G =
                            null !== (z = null == Z ? void 0 : Z.offState) &&
                            void 0 !== z
                                ? z
                                : Q.get("N-20")) && void 0 !== G
                        ? G
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(20)
                          ),
                accentSurface:
                    null !==
                        (k =
                            null !==
                                (R = null == Z ? void 0 : Z.accentSurface) &&
                            void 0 !== R
                                ? R
                                : Q.get("NV-95")) && void 0 !== k
                        ? k
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.a2.tone(95)
                          ),
                textPrimaryOnAccent:
                    null !==
                        (O =
                            null !==
                                (U =
                                    null == Z
                                        ? void 0
                                        : Z.textPrimaryOnAccent) && void 0 !== U
                                ? U
                                : Q.get("N-10")) && void 0 !== O
                        ? O
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(10)
                          ),
                textSecondaryOnAccent:
                    null !==
                        (j =
                            null !==
                                (q =
                                    null == Z
                                        ? void 0
                                        : Z.textSecondaryOnAccent) &&
                            void 0 !== q
                                ? q
                                : Q.get("NV-30")) && void 0 !== j
                        ? j
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n2.tone(30)
                          ),
                volumeBackground:
                    null !==
                        (X =
                            null !==
                                (W = null == Z ? void 0 : Z.volumeBackground) &&
                            void 0 !== W
                                ? W
                                : Q.get("N-25")) && void 0 !== X
                        ? X
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(25)
                          ),
                scrim:
                    null !==
                        (K =
                            null !== (J = null == Z ? void 0 : Z.scrim) &&
                            void 0 !== J
                                ? J
                                : Q.get("N-80")) && void 0 !== K
                        ? K
                        : __ux$material$theme_generator$src$theme$color_utils_numberToHex(
                              Y.n1.tone(80)
                          ),
            };
        }
        get tonalGroups() {
            return Object.assign(
                {
                    primary: this.primaryGroup,
                    secondary: this.secondaryGroup,
                    tertiary: this.tertiaryGroup,
                    neutral: this.neutralGroup,
                    neutralVariant: this.neutralVariantGroup,
                    error: this.errorGroup,
                },
                this.props.overrides.tonalGroups
            );
        }
        get primaryGroup() {
            return _getColorGroup(this, "primary", this.props.tones.a1);
        }
        get secondaryGroup() {
            return _getColorGroup(this, "secondary", this.props.tones.a2);
        }
        get tertiaryGroup() {
            return _getColorGroup(this, "tertiary", this.props.tones.a3);
        }
        get neutralGroup() {
            return _getColorGroup(this, "neutral", this.props.tones.n1);
        }
        get neutralVariantGroup() {
            return _getColorGroup(this, "neutralVariant", this.props.tones.n2);
        }
        get errorGroup() {
            return _getColorGroup(this, "error", this.props.tones.error);
        }
        get primary() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "P",
                this.primaryGroup
            );
        }
        get secondary() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "S",
                this.secondaryGroup
            );
        }
        get tertiary() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "T",
                this.tertiaryGroup
            );
        }
        get neutral() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "N",
                this.neutralGroup
            );
        }
        get neutralVariant() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "NV",
                this.neutralVariantGroup
            );
        }
        get error() {
            return __ux$material$theme_generator$src$theme$tonal_group_convertTonalGroupToMap(
                "E",
                this.errorGroup
            );
        }
        get palettes() {
            let e = [];
            return (
                (e = (e = (e = (e = (e = (e = e.concat(
                    Array.from(this.primary.entries())
                )).concat(Array.from(this.secondary.entries()))).concat(
                    Array.from(this.tertiary.entries())
                )).concat(Array.from(this.neutral.entries()))).concat(
                    Array.from(this.neutralVariant.entries())
                )).concat(Array.from(this.error.entries()))),
                new Map(e)
            );
        }
        get primaryValue() {
            return _getPrimaryTonal(this, "P");
        }
        get seedValue() {
            return this.props.seed;
        }
        get source() {
            var e, t, n, r, o, a;
            const i = this.palettes,
                l = this.props.overrides.source;
            return Object.assign(Object.assign({}, l), {
                seed: this.seedValue,
                imageUrl: this.imageUrl,
                primary:
                    null !== (e = null == l ? void 0 : l.primary) &&
                    void 0 !== e
                        ? e
                        : _getPrimaryTonal(this, "P", i),
                secondary:
                    null !== (t = null == l ? void 0 : l.secondary) &&
                    void 0 !== t
                        ? t
                        : _getPrimaryTonal(this, "S", i),
                tertiary:
                    null !== (n = null == l ? void 0 : l.tertiary) &&
                    void 0 !== n
                        ? n
                        : _getPrimaryTonal(this, "T", i),
                neutral:
                    null !== (r = null == l ? void 0 : l.neutral) &&
                    void 0 !== r
                        ? r
                        : _getPrimaryTonal(this, "N", i),
                neutralVariant:
                    null !== (o = null == l ? void 0 : l.neutralVariant) &&
                    void 0 !== o
                        ? o
                        : _getPrimaryTonal(this, "NV", i),
                error:
                    null !== (a = null == l ? void 0 : l.error) && void 0 !== a
                        ? a
                        : _getPrimaryTonal(this, "E", i),
            });
        }
        save() {
            const e = {
                light: this.light,
                dark: this.dark,
                androidLight: __$theme_generator$flags$SHOW_ANDROID
                    ? this.androidLight
                    : void 0,
                androidDark: __$theme_generator$flags$SHOW_ANDROID
                    ? this.androidDark
                    : void 0,
                primary: this.primaryGroup,
                secondary: this.secondaryGroup,
                tertiary: this.tertiaryGroup,
                neutral: this.neutralGroup,
                neutralVariant: this.neutralVariantGroup,
                error: this.errorGroup,
                styles: this.styles,
                source: this.source,
            };
            return console.log("saved theme", e), e;
        }
    };
async function __ux$material$theme_generator$src$theme$image_utils_decodeToImageData(
    e
) {
    const t =
            __third_party$javascript$safevalues$builders$safe_url_builders_fromBlob(
                new Blob([e], { type: "image/png" })
            ),
        n = await new Promise((e, n) => {
            const r = new Image();
            (r.onload = () => {
                e(r);
            }),
                (r.onerror = () => {
                    n();
                }),
                (r.src =
                    __third_party$javascript$safevalues$compat$index_unwrapSafeUrl(
                        t
                    ));
        }),
        r = document.createElement("canvas").getContext("2d");
    return (
        (r.canvas.width = 112),
        (r.canvas.height = 112),
        r.drawImage(
            n,
            0,
            0,
            n.width,
            n.height,
            0,
            0,
            r.canvas.width,
            r.canvas.height
        ),
        r.getImageData(0, 0, n.width, n.height)
    );
}
async function __ux$material$theme_generator$src$theme$image_utils_bufferToPixels(
    e
) {
    const t = new Uint8Array(e),
        n =
            await __ux$material$theme_generator$src$theme$image_utils_decodeToImageData(
                t
            ),
        r = [];
    for (let e = 0; e < n.data.length; e += 4)
        255 > n.data[e + 3] ||
            r.push(__$intFromRgb([n.data[e], n.data[e + 1], n.data[e + 2]]));
    return r;
}
var __$theme_generator$src$theme$index$ThemeAdapter$fromColor = function (e) {
        console.log("theme adapter from color");
        const t = new __$palettes$core_palette$CorePalette(__$intFromHex(e));
        return new __$theme_generator$src$theme$index$ThemeAdapter({
            tones: t,
            seed: e,
            is3p: __$theme_generator$flags$IS_3P,
            overrides: {},
            blend: !1,
            isBaseline: !1,
        });
    },
    __$theme_generator$src$theme$index$ThemeAdapter = class extends __$theme_generator$src$theme$base$ThemeAdapterBase {};
async function __ux$material$theme_generator$src$theme$index_seedFromImage(e) {
    const t = "string" == typeof e ? await (await fetch(e)).arrayBuffer() : e;
    var n,
        r,
        o =
            await __ux$material$theme_generator$src$theme$image_utils_bufferToPixels(
                t
            ),
        a = new __$quantize$quantizer_wu$QuantizerWu();
    (a.weights = Array.from({ length: 35937 }).fill(0)),
        (a.momentsR = Array.from({ length: 35937 }).fill(0)),
        (a.momentsG = Array.from({ length: 35937 }).fill(0)),
        (a.momentsB = Array.from({ length: 35937 }).fill(0)),
        (a.moments = Array.from({ length: 35937 }).fill(0));
    const i = new Map();
    for (let e = 0; e < o.length; e++) {
        const t = o[e];
        255 > ((4278190080 & t) >> 24) >>> 0 ||
            i.set(t, (null !== (r = i.get(t)) && void 0 !== r ? r : 0) + 1);
    }
    for (const [e, t] of i.entries()) {
        const r = t,
            o = (16711680 & e) >> 16,
            i = (65280 & e) >> 8,
            l = 255 & e,
            _ = _getIndex(1 + (o >> 3), 1 + (i >> 3), 1 + (l >> 3));
        (a.weights[_] =
            (null !== (n = a.weights[_]) && void 0 !== n ? n : 0) + r),
            (a.momentsR[_] += r * o),
            (a.momentsG[_] += r * i),
            (a.momentsB[_] += r * l),
            (a.moments[_] += r * (o * o + i * i + l * l));
    }
    for (let e = 1; 33 > e; e++) {
        const t = Array.from({ length: 33 }).fill(0),
            n = Array.from({ length: 33 }).fill(0),
            r = Array.from({ length: 33 }).fill(0),
            o = Array.from({ length: 33 }).fill(0),
            i = Array.from({ length: 33 }).fill(0);
        for (let l = 1; 33 > l; l++) {
            let _ = 0,
                s = 0,
                u = 0,
                c = 0,
                m = 0;
            for (let $ = 1; 33 > $; $++) {
                const h = _getIndex(e, l, $);
                (_ += a.weights[h]),
                    (s += a.momentsR[h]),
                    (u += a.momentsG[h]),
                    (c += a.momentsB[h]),
                    (m += a.moments[h]),
                    (t[$] += _),
                    (n[$] += s),
                    (r[$] += u),
                    (o[$] += c),
                    (i[$] += m);
                const g = _getIndex(e - 1, l, $);
                (a.weights[h] = a.weights[g] + t[$]),
                    (a.momentsR[h] = a.momentsR[g] + n[$]),
                    (a.momentsG[h] = a.momentsG[g] + r[$]),
                    (a.momentsB[h] = a.momentsB[g] + o[$]),
                    (a.moments[h] = a.moments[g] + i[$]);
            }
        }
    }
    var l = _createBoxes(a).resultCount;
    const _ = [];
    for (let e = 0; e < l; ++e) {
        const t = a.cubes[e],
            n = a.volume(t, a.weights);
        if (0 < n) {
            const e = Math.round(a.volume(t, a.momentsR) / n),
                r = Math.round(a.volume(t, a.momentsG) / n),
                o = Math.round(a.volume(t, a.momentsB) / n);
            _.push(
                -16777216 | ((255 & e) << 16) | ((255 & r) << 8) | (255 & o)
            );
        }
    }
    const s = new Map(),
        u = [],
        c = [],
        m = new __$quantize$lab_point_provider$LabPointProvider();
    let $ = 0;
    for (let e = 0; e < o.length; e++) {
        const t = o[e],
            n = s.get(t);
        void 0 === n
            ? ($++, u.push(__$labFromInt(t)), c.push(t), s.set(t, 1))
            : s.set(t, n + 1);
    }
    const h = [];
    for (let e = 0; e < $; e++) {
        const t = s.get(c[e]);
        void 0 !== t && (h[e] = t);
    }
    let g = Math.min(256, $);
    0 < _.length && (g = Math.min(g, _.length));
    const d = [];
    for (let e = 0; e < _.length; e++) d.push(__$labFromInt(_[e]));
    const p = g - d.length;
    if (0 === _.length && 0 < p)
        for (let e = 0; e < p; e++)
            d.push([
                100 * Math.random(),
                201 * Math.random() - 100,
                201 * Math.random() - 100,
            ]);
    const v = [];
    for (let e = 0; e < $; e++) v.push(Math.floor(Math.random() * g));
    const f = [];
    for (let e = 0; e < g; e++) {
        f.push([]);
        for (let t = 0; t < g; t++) f[e].push(0);
    }
    const F = [];
    for (let e = 0; e < g; e++) {
        F.push([]);
        for (let t = 0; t < g; t++)
            F[e].push(
                new __ux$material$libmonet$typescript$quantize$quantizer_wsmeans_DistanceAndIndex()
            );
    }
    const x = [];
    for (let e = 0; e < g; e++) x.push(0);
    for (let e = 0; 10 > e; e++) {
        for (let e = 0; e < g; e++) {
            for (let t = e + 1; t < g; t++) {
                const n = m.distance(d[e], d[t]);
                (F[t][e].distance = n),
                    (F[t][e].index = e),
                    (F[e][t].distance = n),
                    (F[e][t].index = t);
            }
            F[e].sort();
            for (let t = 0; t < g; t++) f[e][t] = F[e][t].index;
        }
        let t = 0;
        for (let e = 0; e < $; e++) {
            const n = u[e],
                r = v[e],
                o = m.distance(n, d[r]);
            let a = o,
                i = -1;
            for (let e = 0; e < g; e++) {
                if (F[r][e].distance >= 4 * o) continue;
                const t = m.distance(n, d[e]);
                t < a && ((a = t), (i = e));
            }
            -1 !== i &&
                3 < Math.abs(Math.sqrt(a) - Math.sqrt(o)) &&
                (t++, (v[e] = i));
        }
        if (0 === t && 0 !== e) break;
        const n = Array(g).fill(0),
            r = Array(g).fill(0),
            o = Array(g).fill(0);
        for (let e = 0; e < g; e++) x[e] = 0;
        for (let e = 0; e < $; e++) {
            const t = v[e],
                a = u[e],
                i = h[e];
            (x[t] += i),
                (n[t] += a[0] * i),
                (r[t] += a[1] * i),
                (o[t] += a[2] * i);
        }
        for (let e = 0; e < g; e++) {
            const t = x[e];
            d[e] = 0 === t ? [0, 0, 0] : [n[e] / t, r[e] / t, o[e] / t];
        }
    }
    const y = new Map();
    for (let e = 0; e < g; e++) {
        const t = x[e];
        if (0 === t) continue;
        const n = m.toInt(d[e]);
        y.has(n) || y.set(n, t);
    }
    const b = __$score$score$Score$score(y);
    return __$hexFromInt(b[0]);
}
function __generatePalleteFromURL(e) {
    return new Promise(async (t) => {
        t(
            __$theme_generator$src$theme$index$ThemeAdapter$fromColor(
                await __ux$material$theme_generator$src$theme$index_seedFromImage(
                    e
                )
            )
        );
    });
}

var core = __generatePalleteFromURL;

function useThemeEngine() {
    var _a = require$$0.useState("light"), active = _a[0], setActive = _a[1];
    var _b = require$$0.useState("https://source.unsplash.com/random"), URL = _b[0], setURL = _b[1];
    var _c = require$$0.useState({
        light: {
            primary: "#6750a4",
            onPrimary: "#ffffff",
            primaryContainer: "#eaddff",
            onPrimaryContainer: "#21005d",
            secondary: "#625b71",
            onSecondary: "#ffffff",
            secondaryContainer: "#e8def8",
            onSecondaryContainer: "#1d192b",
            tertiary: "#7d5260",
            onTertiary: "#ffffff",
            tertiaryContainer: "#ffd8e4",
            onTertiaryContainer: "#31111d",
            error: "#b3261e",
            errorContainer: "#f9dedc",
            onError: "#ffffff",
            onErrorContainer: "#410e0b",
            background: "#fffbfe",
            onBackground: "#1c1b1f",
            surface: "#fffbfe",
            onSurface: "#1c1b1f",
            surfaceVariant: "#e7e0ec",
            onSurfaceVariant: "#49454f",
            outline: "#79747e",
            inverseOnSurface: "#f4eff4",
            inverseSurface: "#313033",
        },
        dark: {
            primary: "#d0bcff",
            onPrimary: "#381e72",
            primaryContainer: "#4f378b",
            onPrimaryContainer: "#eaddff",
            secondary: "#ccc2dc",
            onSecondary: "#332d41",
            secondaryContainer: "#4a4458",
            onSecondaryContainer: "#e8def8",
            tertiary: "#efb8c8",
            onTertiary: "#492532",
            tertiaryContainer: "#633b48",
            onTertiaryContainer: "#ffd8e4",
            error: "#f2b8b5",
            errorContainer: "#8c1d18",
            onError: "#601410",
            onErrorContainer: "#f9dedc",
            background: "#1c1b1f",
            onBackground: "#e6e1e5",
            surface: "#1c1b1f",
            onSurface: "#e6e1e5",
            surfaceVariant: "#49454f",
            onSurfaceVariant: "#cac4d0",
            outline: "#938f99",
            inverseOnSurface: "#1c1b1f",
            inverseSurface: "#e6e1e5",
        },
    }), theme = _c[0], setTheme = _c[1];
    require$$0.useEffect(function () {
        function changeTheTheme() {
            return __awaiter(this, void 0, void 0, function () {
                var newTheme;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, core(URL)];
                        case 1:
                            newTheme = _a.sent();
                            setTheme(newTheme);
                            return [2 /*return*/];
                    }
                });
            });
        }
        changeTheTheme();
    }, [URL]);
    require$$0.useEffect(function () {
        var root = document.querySelector(":root");
        Object.entries(active === "light" ? theme.light : theme.dark).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            root === null || root === void 0 ? void 0 : root.style.setProperty("--".concat(key), val);
        });
    }, [theme, active]);
    return [setURL, setActive];
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=require$$0__default["default"],g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

var reactJsxRuntime_development = {};

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React = require$$0__default["default"];
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
}(reactJsxRuntime_development));

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

function Button(_a) {
    var children = _a.children, _b = _a.size, size = _b === void 0 ? "md" : _b, _c = _a.type, type = _c === void 0 ? "primary" : _c, _d = _a.variant, variant = _d === void 0 ? "filled" : _d, rest = __rest(_a, ["children", "size", "type", "variant"]);
    return (jsxRuntime.exports.jsx("button", __assign({ className: "cy-button ".concat(type === "primary"
            ? variant === "filled"
                ? "cy-button-primary"
                : "cy-button-outline-primary"
            : type === "secondary"
                ? variant === "filled"
                    ? "cy-button-secondary"
                    : "cy-button-outline-secondary"
                : type === "tertiary"
                    ? variant === "filled"
                        ? "cy-button-tertiary"
                        : "cy-button-outline-tertiary"
                    : variant === "filled"
                        ? "cy-button-error"
                        : "cy-button-outline-error", " ").concat(size === "sm"
            ? "cy-button-sm"
            : size === "lg"
                ? "cy-button-lg"
                : "cy-button-md") }, rest, { children: children }), void 0));
}

exports.Button = Button;
exports.useThemeEngine = useThemeEngine;
//# sourceMappingURL=index.js.map
