// /*
//  * Copyright (C) 2024 brittni and the polar bear LLC.
//  *
//  * This file is a part of brittni and the polar bear's generative art library,
//  * which is released under the GNU Affero General Public License, Version 3.0.
//  * You may not use this file except in compliance with the license.
//  *
//  * You should have received a copy of the GNU Affero General Public License
//  * along with this program. See LICENSE or go to
//  * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//  * See the GNU Affero General Public License for more details.
//  */

import P5Lib from 'p5';

import { Color } from 'color';
import { PaletteColor } from 'palette';
import { ALL_PALETTE_COLORS } from 'palette-colors';
import { P5Context } from 'sketch-context';

import {
    ColorComponents,
    BLACK_HEXES,
    BLUE_HEXES,
    BROWN_HEXES,
    GRAY_HEXES,
    GREEN_HEXES,
    ORANGE_HEXES,
    PINK_HEXES,
    PURPLE_HEXES,
    RED_HEXES,
    WHITE_HEXES,
    checkComponents,
    checkForValidStringMap,
    p5ColorToColorComponents,
    checkForValidHexColorString,
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
    test('valid string map: ALL_PALETTE_COLORS', (): void => {
        checkForValidStringMap(ALL_PALETTE_COLORS, ALL_HEXES.length);
    });

    test.each(
        ALL_HEXES
    )('$# - successful addition of color: $hexString',
        ({ hexString }): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                expect(pc.HEX).toBe(hexString);
            }
        }
    );

    test.each(
        ALL_HEXES
    )('$# - valid color: $hexString',
        ({ hexString }): void => {
            expect(hexString).toBeTruthy();
            checkForValidHexColorString(hexString);

            const pc: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
            expect(pc).toBeTruthy();

            if (pc) {
                checkForValidPaletteColor(pc);
            }
        }
    );

    test('all colors are unique', (): void => {
        const hexValues: Set<string> = new Set<string>();
        const hslValues: Set<string> = new Set<string>();
        const rgbValues: Set<string> = new Set<string>();
        const names: Set<string> = new Set<string>();

        for (const c of ALL_PALETTE_COLORS.values) {
            const hex: string = c.HEX.toLowerCase();
            expect(hexValues).not.toContain(hex);
            hexValues.add(hex);

            const hsl: string = makeHSLKey(c.HSL);
            expect(hslValues).not.toContain(hsl);
            hslValues.add(hsl);

            const rgb: string = makeRGBKey(c.RGB);
            expect(rgbValues).not.toContain(rgb);
            rgbValues.add(rgb);

            const name: string = c.NAME.toLowerCase();
            expect(names).not.toContain(name);
            names.add(name);
        }
    });

    test.each(
        ALL_HEXES
    )('$# - consistent color: $hexString',
        ({ hexString }): void => {
            const p5: P5Lib = P5Context.p5;
            const c: PaletteColor | undefined = ALL_PALETTE_COLORS.get(hexString);
            expect(c).toBeTruthy();

            if (c) {
                const hsl: P5Lib.Color = Color.getHSLColor(c.HSL.H, c.HSL.S, c.HSL.L);
                const hslComponents: ColorComponents = p5ColorToColorComponents(hsl);
                checkComponents(hslComponents, c);

                const hex: P5Lib.Color = p5.color(c.HEX);
                const hexComponents: ColorComponents = p5ColorToColorComponents(hex);
                checkComponents(hexComponents, c);

                const rgb: P5Lib.Color = p5.color(c.RGB.R, c.RGB.G, c.RGB.B);
                const rgbComponents: ColorComponents = p5ColorToColorComponents(rgb);
                checkComponents(rgbComponents, c);

                checkForEquivalentComponents(hslComponents, hexComponents);
                checkForEquivalentComponents(hslComponents, rgbComponents);
                checkForEquivalentComponents(rgbComponents, hexComponents);
            }
        }
    );
});
