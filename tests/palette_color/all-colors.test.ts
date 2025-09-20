/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { describe, test, expect } from 'vitest';

import { ALL_PALETTE_COLORS } from '../../src';

import {
    BLACK_HEXES,
    BLUE_HEXES,
    GRAY_HEXES,
    ORANGE_HEXES,
    PINK_HEXES,
    PURPLE_HEXES,
    WHITE_HEXES,
    HexCollection,
    testPaletteColorMap
} from '../test_utils';

const ALL_HEXES: HexCollection = [];
ALL_HEXES.push(
    ...BLACK_HEXES,
    ...BLUE_HEXES,
    ...GRAY_HEXES,
    ...ORANGE_HEXES,
    ...PINK_HEXES,
    ...PURPLE_HEXES,
    ...WHITE_HEXES
);

function makeHSLKey(HSL: { H: number; S: number; L: number; }): string {
    let key: string = '';
    key += HSL.H.toString() + '.';
    key += HSL.S.toString() + '.';
    key += HSL.L.toString();
    return key;
}

function makeRGBKey(RGB: { R: number; G: number; B: number; }): string {
    let key: string = '';
    key += RGB.R.toString() + '.';
    key += RGB.G.toString() + '.';
    key += RGB.B.toString();
    return key;
}

describe('ALL_PALETTE_COLORS', (): void => {
    testPaletteColorMap(ALL_PALETTE_COLORS, 'ALL_PALETTE_COLORS', ALL_HEXES);

    describe('Confirm all palette colors are unique', (): void => {
        test('Unique palette colors', (): void => {
            const hexValues: Set<string> = new Set<string>();
            const hslValues: Set<string> = new Set<string>();
            const rgbValues: Set<string> = new Set<string>();
            const names: Set<string> = new Set<string>();

            for (const c of ALL_PALETTE_COLORS.values()) {
                expect(c).toBeTruthy();
                const hex: string = c.HEX.toLowerCase();
                expect(hexValues).not.toContain(hex);
                hexValues.add(hex);

                const name: string = c.NAME.toLowerCase();
                expect(names).not.toContain(name);
                names.add(name);

                if (c.HSL) {
                    const hsl: string = makeHSLKey(c.HSL);
                    expect(hslValues).not.toContain(hsl);
                    hslValues.add(hsl);
                }

                if (c.RGB) {
                    const rgb: string = makeRGBKey(c.RGB);
                    expect(rgbValues).not.toContain(rgb);
                    rgbValues.add(rgb);
                }
            }
        });
    });
});
