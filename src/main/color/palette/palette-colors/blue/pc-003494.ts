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

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #003494;">
 *     <a href="https://coolors.co/003494" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">smalt (#003494)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_003494: PaletteColor = {
    HEX: '#003494',
    RGB: { R: 0, G: 52, B: 148 },
    HSL: { H: 219, S: 100, L: 29 },
    NAME: 'smalt',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(PC_003494.HEX, PC_003494);
ALL_PALETTE_COLORS.setUndefinedKey(PC_003494.HEX, PC_003494);
ColorNameManager.addColor(PC_003494);
