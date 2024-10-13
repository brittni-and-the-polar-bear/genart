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

import { ALL_PALETTE_COLORS, BLACK_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #000000;">
 *     <a href="https://coolors.co/000000" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">black (#000000)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Black)
 */
export const PC_000000: PaletteColor = {
    HEX: '#000000',
    HSL: { H: 0, S: 0, L: 0 },
    RGB: { R: 0, G: 0, B: 0 },
    NAME: 'black',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_000000.HEX, PC_000000);
BLACK_PALETTE_COLORS.setUndefinedKey(PC_000000.HEX, PC_000000);
ColorNameManager.addColor(PC_000000);
