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
 * <div class="color-block" style="background: #0FFF4F;">
 *     <a href="https://coolors.co/0fff4f" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">cathode green (#0FFF4F)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI_PALETTE}
 *
 * @category Palette Colors (Green)
 * @category Palette Colors (All)
 */
export const PC_0FFF4F: PaletteColor = {
    HEX: '#0FFF4F',
    RGB: { R: 15, G: 255, B: 79 },
    HSL: { H: 136, S: 100, L: 53 },
    NAME: 'cathode green',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_0FFF4F.HEX, PC_0FFF4F);
GREEN_PALETTE_COLORS.setUndefinedKey(PC_0FFF4F.HEX, PC_0FFF4F);
ColorNames.addColor(PC_0FFF4F);
