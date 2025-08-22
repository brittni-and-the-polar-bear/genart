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

import { Discriminators } from 'discriminator';

import { Palette } from '../../../palette';
import { PC_007058, PC_23856D, PC_BC010A, PC_D01625, PC_FBF9F9 } from '../../../palette-color';
import { ALL_PALETTES, CHRISTMAS_PALETTES, HOLIDAYS_PALETTES } from '../../../palette-maps';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="048851888975141655">new CoolorsPaletteWidget("048851888975141655", ["bc010a","d01625","007058","23856d","fbf9f9"],"classic christmas"); </script>
 *
 * @see {@link PC_BC010A}
 * @see {@link PC_D01625}
 * @see {@link PC_007058}
 * @see {@link PC_23856D}
 * @see {@link PC_FBF9F9}
 *
 * @category Color/Palette/Palettes/All
 * @category Color/Palette/Palettes/Holidays
 * @category Color/Palette/Palettes/Holidays/Christmas
 */
export const CLASSIC_CHRISTMAS_PALETTE: Palette = {
    NAME: 'classic christmas',

    SOURCE: 'coolors',

    SOURCE_URL: 'https://coolors.co/palette/bb010b-cd1624-006f57-23856d-faf8f8',

    IS_GRADIENT: false,

    COLORS: [
        PC_BC010A,
        PC_D01625,
        PC_007058,
        PC_23856D,
        PC_FBF9F9
    ],

    CONTRAST_MAP: {
        '#000000': [
            '#23856D',
            '#FBF9F9'
        ],
        '#FFFFFF': [
            '#BC010A',
            '#D01625',
            '#007058',
            '#23856D'
        ],
        '#007058': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#23856D': [
            '#FFFFFF',
            '#000000'
        ],
        '#BC010A': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#D01625': [
            '#FBF9F9',
            '#FFFFFF'
        ],
        '#FBF9F9': [
            '#BC010A',
            '#D01625',
            '#007058',
            '#000000'
        ]
    },

    DISCRIMINATOR: Discriminators.PALETTE
};

ALL_PALETTES.setIfAbsent(CLASSIC_CHRISTMAS_PALETTE.NAME, CLASSIC_CHRISTMAS_PALETTE);
HOLIDAYS_PALETTES.setIfAbsent(CLASSIC_CHRISTMAS_PALETTE.NAME, CLASSIC_CHRISTMAS_PALETTE);
CHRISTMAS_PALETTES.setIfAbsent(CLASSIC_CHRISTMAS_PALETTE.NAME, CLASSIC_CHRISTMAS_PALETTE);
