/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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

import {ColorNameManager} from 'color';
import {Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #23856D;">
 *     <a href="https://coolors.co/23856d" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">accent green blue (#23856D)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Green)
 */
export const _23856D: PaletteColor = {
    HEX: '#23856D',
    RGB: {
        R: 35,
        G: 133,
        B: 109
    },
    HSL: {
        H: 165,
        S: 58,
        L: 33
    },
    NAME: 'accent green blue',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(_23856D.HEX, _23856D);
GREEN_PALETTE_COLORS.setUndefinedKey(_23856D.HEX, _23856D);
ColorNameManager.addColor(_23856D);
