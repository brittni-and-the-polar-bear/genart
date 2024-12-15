/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import { ColorNames } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #1D90AF;">
 *     <a href="https://coolors.co/1d90af" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">mediterranean sea (#1D90AF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BLUE_LILY_PALETTE}
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_1D90AF: PaletteColor = {
    HEX: '#1D90AF',
    RGB: { R: 29, G: 144, B: 175 },
    HSL: { H: 193, S: 72, L: 40 },
    NAME: 'mediterranean sea',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(PC_1D90AF.HEX, PC_1D90AF);
ALL_PALETTE_COLORS.setUndefinedKey(PC_1D90AF.HEX, PC_1D90AF);
ColorNameManager.addColor(PC_1D90AF);
