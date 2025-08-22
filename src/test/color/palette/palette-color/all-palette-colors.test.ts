/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's @batpb/genart algorithmic art library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

import P5Lib from 'p5';

import { ALL_PALETTE_COLORS, Color, PaletteColor } from 'color';
import { P5Context } from 'p5-context';
import { StringValidator } from 'string';

import {
    ColorComponents,
    BLACK_HEXES,
    BLUE_HEXES,
    BROWN_HEXES,
    GRAY_HEXES,
    GREEN_HEXES,
    NEUTRAL_HEXES,
    ORANGE_HEXES,
    PINK_HEXES,
    PURPLE_HEXES,
    RED_HEXES,
    WHITE_HEXES,
    checkRGBComponents,
    checkForValidStringMap,
    p5ColorToColorComponents,
    checkForEquivalentComponents,
    checkForValidPaletteColor
} from 'unit-test/shared';

const ALL_HEXES: { hexString: string; }[] = [];
ALL_HEXES.push(
    ...BLACK_HEXES,
    ...BLUE_HEXES,
    ...BROWN_HEXES,
    ...GRAY_HEXES,
    ...GREEN_HEXES,
    ...NEUTRAL_HEXES,
    ...ORANGE_HEXES,
    ...PINK_HEXES,
    ...PURPLE_HEXES,
    ...RED_HEXES,
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

describe('all palette colors', (): void => {
    describe('confirm all palette colors are valid and consistent', (): void => {
        test.each(
            ALL_HEXES
        )('$# - valid color: $hexString',
            ({ hexString }): void => {
                expect(hexString).toBeTruthy();
                expect(StringValidator.isHex(hexString)).toBeTruthy();

                const pc: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
                expect(pc).toBeTruthy();

                if (pc) {
                    checkForValidPaletteColor(pc);
                }
            }
        );

        test.each(
            ALL_HEXES
        )('$# - consistent color: $hexString',
            ({ hexString }): void => {
                const p5: P5Lib = P5Context.p5;
                const c: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
                expect(c).toBeTruthy();

                if (c) {
                    let hslComponents: ColorComponents | undefined;
                    let rgbComponents: ColorComponents | undefined;

                    const hex: P5Lib.Color = p5.color(c.HEX);
                    const hexComponents: ColorComponents = p5ColorToColorComponents(hex);
                    checkRGBComponents(hexComponents, c);

                    if (c.HSL) {
                        const hsl: P5Lib.Color = Color.getHSLColor(c.HSL.H, c.HSL.S, c.HSL.L);
                        hslComponents = p5ColorToColorComponents(hsl);
                        checkRGBComponents(hslComponents, c);
                        checkForEquivalentComponents(hslComponents, hexComponents);
                    }

                    if (c.RGB) {
                        const rgb: P5Lib.Color = p5.color(c.RGB.R, c.RGB.G, c.RGB.B);
                        rgbComponents = p5ColorToColorComponents(rgb);
                        checkRGBComponents(rgbComponents, c);
                        checkForEquivalentComponents(rgbComponents, hexComponents);
                    }

                    if (c.HSL && c.RGB) {
                        if (hslComponents && rgbComponents) {
                            checkForEquivalentComponents(hslComponents, rgbComponents);
                        } else {
                            throw new Error('HSL or RGB components are undefined');
                        }
                    }
                }
            }
        );
    });

    describe('confirm all palette colors are present', (): void => {
        test('valid string map: ALL_PALETTE_COLORS', (): void => {
            checkForValidStringMap(ALL_PALETTE_COLORS, ALL_HEXES.length);
        });

        test.each(
            ALL_HEXES
        )('$# - successful addition of color: $hexString',
            ({ hexString }): void => {
                expect(hexString).toBeTruthy();
                expect(StringValidator.isHex(hexString)).toBeTruthy();

                const pc: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
                expect(pc).toBeTruthy();

                if (pc) {
                    expect(pc.HEX).toBe(hexString);
                }
            }
        );
    });

    describe('confirm all palette colors are unique', (): void => {
        test('all colors are unique', (): void => {
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
