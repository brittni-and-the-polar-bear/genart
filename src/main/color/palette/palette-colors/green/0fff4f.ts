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

import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #0FFF4F;">
 *     <h2 class="color-block black-pass">cathode green (#0FFF4F)</h2>
 * </div>
 *
 * @category Palette Color (All)
 * @category Palette Color (Green)
 *
 * @source
 */
export const _0FFF4F: PaletteColor = {
    HEX: '#0FFF4F',
    RGB: {R: 15, G: 255, B: 79},
    HSL: {H: 136, S: 100, L: 53},
    NAME: 'cathode green'
};

GREEN_PALETTE_COLORS.setUndefinedKey(_0FFF4F.HEX, _0FFF4F);
ALL_PALETTE_COLORS.setUndefinedKey(_0FFF4F.HEX, _0FFF4F);