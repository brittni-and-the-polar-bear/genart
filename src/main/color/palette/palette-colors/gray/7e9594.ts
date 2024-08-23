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

// #7e9594
// #7E9594
// 177°, 10%, 54%
// 126, 149, 148
// green granite
// black-pass
// luminance: 0.2806863035

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #7E9594;">
 *     <a href="https://coolors.co/7e9594" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">green granite (#7E9594)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Gray)
 * @category Palette Colors (All)
 */
export const _7E9594: PaletteColor = {
    HEX: '#7E9594',
    RGB: { R: 126, G: 149, B: 148 },
    HSL: { H: 177, S: 10, L: 54 },
    NAME: 'green granite',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

GRAY_PALETTE_COLORS.setUndefinedKey(_7E9594.HEX, _7E9594);
ALL_PALETTE_COLORS.setUndefinedKey(_7E9594.HEX, _7E9594);
ColorNameManager.addColor(_7E9594);
