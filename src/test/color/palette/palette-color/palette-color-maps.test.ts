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

import {
    PaletteColor,
    BLACK_PALETTE_COLORS,
    BLUE_PALETTE_COLORS,
    BROWN_PALETTE_COLORS,
    GRAY_PALETTE_COLORS,
    GREEN_PALETTE_COLORS,
    NEUTRAL_PALETTE_COLORS,
    ORANGE_PALETTE_COLORS,
    PINK_PALETTE_COLORS,
    PURPLE_PALETTE_COLORS,
    RED_PALETTE_COLORS,
    WHITE_PALETTE_COLORS
} from 'color';
import { StringMap } from 'map';
import { StringValidator } from 'string';

import {
    HexCollection,
    checkForValidPaletteColor,
    checkForValidStringMap,
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
    WHITE_HEXES
} from 'unit-test/shared';

const COLOR_CATEGORIES: { category: string; colorsMap: StringMap<PaletteColor>; hexes: HexCollection; }[] =
    [
        { category: 'black', colorsMap: BLACK_PALETTE_COLORS, hexes: BLACK_HEXES },
        { category: 'blue', colorsMap: BLUE_PALETTE_COLORS, hexes: BLUE_HEXES },
        { category: 'brown', colorsMap: BROWN_PALETTE_COLORS, hexes: BROWN_HEXES },
        { category: 'gray', colorsMap: GRAY_PALETTE_COLORS, hexes: GRAY_HEXES },
        { category: 'green', colorsMap: GREEN_PALETTE_COLORS, hexes: GREEN_HEXES },
        { category: 'neutral', colorsMap: NEUTRAL_PALETTE_COLORS, hexes: NEUTRAL_HEXES },
        { category: 'orange', colorsMap: ORANGE_PALETTE_COLORS, hexes: ORANGE_HEXES },
        { category: 'pink', colorsMap: PINK_PALETTE_COLORS, hexes: PINK_HEXES },
        { category: 'purple', colorsMap: PURPLE_PALETTE_COLORS, hexes: PURPLE_HEXES },
        { category: 'red', colorsMap: RED_PALETTE_COLORS, hexes: RED_HEXES },
        { category: 'white', colorsMap: WHITE_PALETTE_COLORS, hexes: WHITE_HEXES }
    ];

describe.each(
    COLOR_CATEGORIES
)('$# - $category palette colors',
    ({ category, colorsMap, hexes }): void => {
        const PALETTE_MAP_NAME: string = category.toUpperCase() + '_PALETTE_COLORS';
        const CATEGORY_HEXES: { hexString: string; }[] = hexes;

        test(`valid string map: ${PALETTE_MAP_NAME}`, (): void => {
            checkForValidStringMap(colorsMap, hexes.length);
        });

        test.each(
            CATEGORY_HEXES
        )(`$# - successful addition of ${category} color: $hexString`,
            ({ hexString }): void => {
                expect(hexString).toBeTruthy();
                expect(StringValidator.isHex(hexString)).toBeTruthy();

                const pc: PaletteColor | undefined = colorsMap.get(hexString);
                expect(pc).toBeTruthy();

                if (pc) {
                    expect(pc.HEX).toBe(hexString);
                }
            }
        );

        test.each(
            CATEGORY_HEXES
        )(`$# - valid ${category} color: $hexString`,
            ({ hexString }): void => {
                expect(hexString).toBeTruthy();
                expect(StringValidator.isHex(hexString)).toBeTruthy();

                const pc: PaletteColor | undefined = colorsMap.get(hexString);
                expect(pc).toBeTruthy();

                if (pc) {
                    checkForValidPaletteColor(pc);
                }
            }
        );
    }
);
