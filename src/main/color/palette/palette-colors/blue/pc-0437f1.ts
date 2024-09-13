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

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #0437F1;">
 *     <a href="https://coolors.co/0437f1" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">blue bouquet (#0437F1)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI_PALETTE}
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_0437F1: PaletteColor = {
    HEX: '#0437F1',
    RGB: { R: 4, G: 55, B: 241 },
    HSL: { H: 227, S: 97, L: 48 },
    NAME: 'blue bouquet',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(PC_0437F1.HEX, PC_0437F1);
ALL_PALETTE_COLORS.setUndefinedKey(PC_0437F1.HEX, PC_0437F1);
ColorNameManager.addColor(PC_0437F1);
