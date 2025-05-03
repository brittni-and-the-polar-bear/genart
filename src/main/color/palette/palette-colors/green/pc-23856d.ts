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

import { Discriminators } from 'discriminator';

import { ColorNames } from '../../../color-name';
import { PaletteColor } from '../../palette-color';
import { ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #23856D;">
 *     <a href="https://coolors.co/23856d" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">accent green blue (#23856D)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS_PALETTE}
 *
 * @category Palette Colors (Green)
 * @category Palette Colors (All)
 */
export const PC_23856D: PaletteColor = {
    HEX: '#23856D',
    RGB: { R: 35, G: 133, B: 109 },
    HSL: { H: 165, S: 58, L: 33 },
    NAME: 'accent green blue',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_23856D.HEX, PC_23856D);
GREEN_PALETTE_COLORS.setUndefinedKey(PC_23856D.HEX, PC_23856D);
ColorNames.addColor(PC_23856D);
