import { useState, useLayoutEffect, useRef, Children, useEffect } from 'react';
import { jsx, jsxs } from 'react/jsx-runtime';

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

/*
 Copyright 2020 Google Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

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
    return new Promise(async (resolve, reject) => {
        try {
            const t = __$theme_generator$src$theme$index$ThemeAdapter$fromColor(
                await __ux$material$theme_generator$src$theme$index_seedFromImage(
                    e
                )
            );
            resolve(t);
        } catch (e) {
            console.error(e);
            reject(e);
        }
    });
}

var core = __generatePalleteFromURL;

var darkShadow = {
    shadow1: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
    shadow2: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
    shadow3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
    shadow4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
    shadow5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
    disabled: "227, 227, 227",
};
var lightShadow = {
    shadow1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    shadow2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
    shadow3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
    shadow4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
    shadow5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
    disabled: "31, 31, 31",
};
var defaultTheme = {
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
};
function ThemeEngine(url) {
    return __awaiter(this, void 0, void 0, function () {
        var theme;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, core(url)];
                case 1:
                    theme = _a.sent();
                    return [2 /*return*/, theme];
            }
        });
    });
}

function useThemeEngine() {
    var _a = useState("dark"), active = _a[0], setActive = _a[1];
    var _b = useState(""), URL = _b[0], setURL = _b[1];
    var darkShadow = {
        shadow1: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)",
        shadow2: "0px 1px 2px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)",
        shadow3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        shadow4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        shadow5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        disabled: "227, 227, 227",
    };
    var lightShadow = {
        shadow1: "0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        shadow2: "0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px rgba(0, 0, 0, 0.3)",
        shadow3: "0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.3)",
        shadow4: "0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px rgba(0, 0, 0, 0.3)",
        shadow5: "0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px rgba(0, 0, 0, 0.3)",
        disabled: "31, 31, 31",
    };
    var _c = useState({
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
    useLayoutEffect(function () {
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
        if (URL !== "" && URL !== undefined) {
            console.log("URL", URL);
            changeTheTheme();
        }
    }, [URL]);
    function hexToRgb(hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result != null
            ? "".concat(parseInt(result[1], 16), ", ").concat(parseInt(result[2], 16), ", ").concat(parseInt(result[3], 16))
            : "0, 0, 0";
    }
    useLayoutEffect(function () {
        var root = document.querySelector(":root");
        Object.entries(active === "light" ? theme.light : theme.dark).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            root === null || root === void 0 ? void 0 : root.style.setProperty("--".concat(key), hexToRgb(val));
        });
        Object.entries(active === "light" ? lightShadow : darkShadow).forEach(function (_a) {
            var key = _a[0], val = _a[1];
            root === null || root === void 0 ? void 0 : root.style.setProperty("--".concat(key), val);
        });
    }, [theme, active]);
    return [setURL, setActive];
}

function ElevatedButton$1(_a) {
    var hasIcon = _a.hasIcon, children = _a.children, style = _a.style, rest = __rest(_a, ["hasIcon", "children", "style"]);
    return (jsx("button", __assign({ className: "cy-button cy-button-elevated", style: __assign(__assign({}, style), { paddingLeft: hasIcon ? "16px" : "24px" }) }, rest, { children: children }), void 0));
}

function FilledButton(_a) {
    var hasIcon = _a.hasIcon, children = _a.children, style = _a.style, rest = __rest(_a, ["hasIcon", "children", "style"]);
    var ref = useRef();
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    useLayoutEffect(function () {
        var _a;
        setWidth(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 80);
    }, [ref.current]);
    return (jsx("button", __assign({ className: "cy-button cy-button-filled", style: __assign(__assign({}, style), { width: width }) }, rest, { children: jsx("span", __assign({ className: "cy-state-layer", ref: ref }, { children: jsx("span", __assign({ className: "cy-padding-layer", style: { paddingLeft: hasIcon ? "16px" : "24px" } }, { children: children }), void 0) }), void 0) }), void 0));
}

function ElevatedButton(_a) {
    var hasIcon = _a.hasIcon, children = _a.children, style = _a.style, rest = __rest(_a, ["hasIcon", "children", "style"]);
    var ref = useRef();
    var _b = useState(0), width = _b[0], setWidth = _b[1];
    useLayoutEffect(function () {
        var _a;
        setWidth(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 80);
    }, [ref.current]);
    return (jsx("button", __assign({ className: "cy-button cy-button-tonal", style: __assign(__assign({}, style), { width: width }) }, rest, { children: jsx("span", __assign({ className: "cy-state-layer", ref: ref }, { children: jsx("span", __assign({ className: "cy-padding-layer", style: { paddingLeft: hasIcon ? "16px" : "24px" } }, { children: children }), void 0) }), void 0) }), void 0));
}

function OutlinedButton(_a) {
    var hasIcon = _a.hasIcon, children = _a.children, style = _a.style, rest = __rest(_a, ["hasIcon", "children", "style"]);
    return (jsx("button", __assign({ className: "cy-button cy-button-outlined", style: __assign(__assign({}, style), { paddingLeft: hasIcon ? "16px" : "24px" }) }, rest, { children: children }), void 0));
}

function TextButton(_a) {
    var hasIcon = _a.hasIcon, children = _a.children, style = _a.style, rest = __rest(_a, ["hasIcon", "children", "style"]);
    return (jsx("button", __assign({ className: "cy-button cy-button-text", style: __assign(__assign({}, style), { paddingLeft: hasIcon ? "12px" : "16px" }) }, rest, { children: children }), void 0));
}

var Card = function (_a) {
    var _b = _a.type, type = _b === void 0 ? "outlined" : _b, children = _a.children, style = _a.style, _c = _a.animated, animated = _c === void 0 ? false : _c;
    return (jsx("div", __assign({ className: "cy-card ".concat(type === "elevated"
            ? "cy-bg-elevated cy-card-elevated"
            : type === "filled"
                ? "cy-card-filled"
                : "cy-card-outlined", " ").concat(animated ? "cy-no-animate" : ""), style: __assign({}, style) }, { children: jsx("span", __assign({ className: "cy-state-layer" }, { children: jsx("span", __assign({ className: "cy-padding-layer" }, { children: children }), void 0) }), void 0) }), void 0));
};
Card.Flyover = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-flyover" }, rest, { children: children }), void 0));
};
Card.Image = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-image" }, rest, { children: children }), void 0));
};
Card.Headline = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-headline" }, rest, { children: children }), void 0));
};
Card.Subhead = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-subhead" }, rest, { children: children }), void 0));
};
Card.Body = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-body" }, rest, { children: children }), void 0));
};
Card.Action = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-card-action" }, rest, { children: children }), void 0));
};

function FAB(_a) {
    var _b = _a.size, size = _b === void 0 ? "md" : _b, children = _a.children, _c = _a.type, type = _c === void 0 ? "surface" : _c, rest = __rest(_a, ["size", "children", "type"]);
    if (!children || !children.type || children.type !== "svg") {
        throw new Error("ComponentYou: FAB Children must be an svg element. Please check your markup.");
    }
    return (jsx("button", __assign({ className: "cy-fab ".concat(size === "sm"
            ? "cy-fab-sm"
            : size === "md"
                ? "cy-fab-md"
                : "cy-fab-lg", " ").concat(type === "surface"
            ? "cy-bg-primary"
            : type === "secondary"
                ? "cy-bg-secondary"
                : "cy-bg-tertiary") }, rest, { children: jsx("span", __assign({ className: "cy-state-layer" }, { children: jsx("span", __assign({ className: "cy-padding-layer" }, { children: children }), void 0) }), void 0) }), void 0));
}

var ExtendedFAB = function (_a) {
    var children = _a.children, _b = _a.type, type = _b === void 0 ? "surface" : _b, style = _a.style, rest = __rest(_a, ["children", "type", "style"]);
    var ref = useRef();
    var _c = useState(0), width = _c[0], setWidth = _c[1];
    useLayoutEffect(function () {
        var _a;
        setWidth(((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) || 80);
    }, [ref.current]);
    return (jsx("button", __assign({ className: "cy-fab cy-fab-extended ".concat(type === "surface"
            ? "cy-bg-primary"
            : type === "secondary"
                ? "cy-bg-secondary"
                : "cy-bg-tertiary"), style: __assign(__assign({}, style), { width: width }) }, rest, { children: jsx("span", __assign({ className: "cy-state-layer", ref: ref }, { children: jsx("span", __assign({ className: "cy-padding-layer" }, { children: children }), void 0) }), void 0) }), void 0));
};
ExtendedFAB.Icon = function (_a) {
    var children = _a.children;
    return (jsx("span", __assign({ className: "cy-fab-icon" }, { children: children }), void 0));
};
ExtendedFAB.Label = function (_a) {
    var children = _a.children;
    return (jsx("span", __assign({ className: "cy-fab-label" }, { children: children }), void 0));
};

var NavBar = function (_a) {
    var children = _a.children, style = _a.style, rest = __rest(_a, ["children", "style"]);
    return (jsx("div", __assign({ className: "cy-nav-bottom" }, rest, { style: __assign(__assign({}, style), { gridTemplateColumns: "repeat(".concat(Children.count(children), ", minmax(0px, 1fr))") }) }, { children: children }), void 0));
};
NavBar.Item = function (_a) {
    var children = _a.children, _b = _a.active, active = _b === void 0 ? false : _b, rest = __rest(_a, ["children", "active"]);
    return (jsx("div", __assign({ className: "cy-nav-bottom-item ".concat(active ? "cy-nav-bottom-item-active" : "") }, rest, { tabIndex: 0 }, { children: children }), void 0));
};
NavBar.Label = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("span", __assign({ className: "cy-nav-bottom-label" }, rest, { children: children }), void 0));
};

var NavRail = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    var body = document.body;
    useEffect(function () {
        body.style.marginLeft = "80px";
        body.style.width = "calc(100% - 80px)";
        return function () {
            body.style.marginLeft = "0px";
            body.style.width = "100%";
        };
    }, []);
    return (jsx("div", __assign({ className: "cy-nav-rail" }, rest, { children: children }), void 0));
};
NavRail.PrimaryButtons = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-nav-rail-primary-buttons" }, rest, { children: children }), void 0));
};
NavRail.SecondaryButtons = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-nav-rail-secondary-buttons" }, rest, { children: children }), void 0));
};
NavRail.Button = function (_a) {
    var children = _a.children, label = _a.label, _b = _a.active, active = _b === void 0 ? false : _b, rest = __rest(_a, ["children", "label", "active"]);
    return (jsxs("div", __assign({ className: "cy-nav-rail-button ".concat(active ? "active" : "") }, rest, { children: [jsx("div", __assign({ className: "cy-nav-rail-button-icon", tabIndex: 0, style: {
                    height: "".concat(label ? "28px" : "100%"),
                    borderRadius: "".concat(label ? "16px" : "50%"),
                } }, { children: children }), void 0), jsx("div", __assign({ className: "cy-nav-rail-label" }, { children: label }), void 0)] }), void 0));
};

var NavDrawer = function (_a) {
    var isFlyOver = _a.isFlyOver, children = _a.children, rest = __rest(_a, ["isFlyOver", "children"]);
    var body = document.body;
    useEffect(function () {
        if (!isFlyOver) {
            body.style.marginLeft = "300px";
            body.style.width = "calc(100% - 300px)";
        }
        return function () {
            if (!isFlyOver) {
                body.style.marginLeft = "0px";
                body.style.width = "100%";
            }
        };
    });
    return (jsx("nav", __assign({ className: "".concat(isFlyOver ? "cy-nav-flyover" : "") }, rest, { children: jsx("div", __assign({ className: "cy-nav-drawer" }, { children: jsx("div", { children: children }, void 0) }), void 0) }), void 0));
};
NavDrawer.Title = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-nav-drawer-title" }, rest, { children: children }), void 0));
};
NavDrawer.Label = function (_a) {
    var children = _a.children, rest = __rest(_a, ["children"]);
    return (jsx("div", __assign({ className: "cy-nav-drawer-label" }, rest, { children: children }), void 0));
};
NavDrawer.Item = function (_a) {
    var children = _a.children, _b = _a.active, active = _b === void 0 ? false : _b; __rest(_a, ["children", "active"]);
    return (jsx("div", __assign({ className: "cy-nav-drawer-item ".concat(active ? "active" : ""), tabIndex: 0 }, { children: children }), void 0));
};
NavDrawer.Divider = function () {
    return jsx("hr", { className: "cy-divider" }, void 0);
};

var lastID = 0;
function newID(prefix) {
    if (prefix === void 0) { prefix = "cy"; }
    return "".concat(prefix, "-").concat(lastID++);
}

function Bobble(_a) {
    var children = _a.children, width = _a.width, height = _a.height;
    var ID = newID("cy-shape-bobble");
    return (jsxs("div", __assign({ className: "cy-shape-wrapper" }, { children: [jsx("svg", { children: jsx("defs", { children: jsx("clipPath", __assign({ id: ID, clipPathUnits: "objectBoundingBox", transform: "scale(0.0115966667, 0.0115966667)" }, { children: jsx("path", { d: "M51.6328 5.16348L48.5229 2.89491C44.836 0.205461 39.834 0.205461 36.1471 2.89491L33.0371 5.16348C31.4063 6.35307 29.439 6.99229 27.4205 6.98844L23.571 6.98111C19.0074 6.97243 14.9607 9.9125 13.5588 14.2554L12.3762 17.9187C11.7561 19.8397 10.5402 21.5132 8.90492 22.6965L5.78635 24.9533C2.08921 27.6287 0.543524 32.3858 1.96202 36.7234L3.15853 40.3821C3.78595 42.3007 3.78595 44.3693 3.15853 46.2878L1.96202 49.9466C0.543525 54.2842 2.08921 59.0413 5.78636 61.7167L8.90492 63.9734C10.5402 65.1568 11.7561 66.8303 12.3762 68.7512L13.5588 72.4145C14.9607 76.7574 19.0074 79.6975 23.571 79.6888L27.4205 79.6815C29.439 79.6777 31.4063 80.3169 33.0371 81.5065L36.1471 83.775C39.834 86.4645 44.836 86.4645 48.5229 83.775L51.6328 81.5065C53.2636 80.3169 55.2309 79.6777 57.2495 79.6815L61.0989 79.6888C65.6625 79.6975 69.7092 76.7574 71.1112 72.4145L72.2937 68.7512C72.9139 66.8303 74.1297 65.1568 75.765 63.9734L78.8836 61.7167C82.5807 59.0413 84.1264 54.2842 82.7079 49.9466L81.5114 46.2878C80.884 44.3693 80.884 42.3007 81.5114 40.3821L82.7079 36.7234C84.1264 32.3858 82.5807 27.6287 78.8836 24.9533L75.765 22.6965C74.1297 21.5132 72.9138 19.8397 72.2937 17.9187L71.1112 14.2554C69.7092 9.9125 65.6625 6.97243 61.0989 6.98111L57.2495 6.98844C55.2309 6.99229 53.2636 6.35307 51.6328 5.16348Z" }, void 0) }), void 0) }, void 0) }, void 0), jsx("div", __assign({ className: "cy-shape", style: {
                    clipPath: "url(#".concat(ID, ")"),
                    maxWidth: width,
                    maxHeight: height,
                } }, { children: children }), void 0)] }), void 0));
}

function Teardrop(_a) {
    var children = _a.children, width = _a.width, height = _a.height;
    return (jsx("div", __assign({ className: "cy-shape-wrapper" }, { children: jsx("div", __assign({ className: "cy-shape", style: {
                borderRadius: "15% 50% 50% 50%",
                width: width,
                height: height,
            } }, { children: children }), void 0) }), void 0));
}

export { Bobble, Card, ElevatedButton$1 as ElevatedButton, ExtendedFAB, FAB, FilledButton, NavBar, NavDrawer, NavRail, OutlinedButton, Teardrop, TextButton, ThemeEngine, ElevatedButton as TonalButton, darkShadow, defaultTheme, lightShadow, useThemeEngine };
//# sourceMappingURL=index.js.map
