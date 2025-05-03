/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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

import { ColorNames } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #007058;">
 *     <a href="https://coolors.co/007058" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">teal dark green (#007058)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS_PALETTE}
 *
 * @category Palette Colors (Green)
 * @category Palette Colors (All)
 */
export const PC_007058: PaletteColor = {
    HEX: '#007058',
    RGB: { R: 0, G: 112, B: 88 },
    HSL: { H: 167, S: 100, L: 22 },
    NAME: 'teal dark green',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

GREEN_PALETTE_COLORS.setUndefinedKey(PC_007058.HEX, PC_007058);
ALL_PALETTE_COLORS.setUndefinedKey(PC_007058.HEX, PC_007058);
ColorNameManager.addColor(PC_007058);
