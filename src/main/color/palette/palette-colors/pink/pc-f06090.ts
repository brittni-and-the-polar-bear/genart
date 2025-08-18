/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
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
import { ALL_PALETTE_COLORS, PINK_PALETTE_COLORS } from '../palette-color-maps';
/**
 * <div class="color-block" style="background: #F06090;">
 *     <a href="https://coolors.co/f06090" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">medium pink (#F06090)</h2>
 *     </a>
 * </div>
 *
 * @see {@link GLITTER_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Pink
 */
export const PC_F06090: PaletteColor = {
    HEX: '#F06090',
    RGB: { R: 240, G: 96, B: 144 },
    HSL: { H: 340, S: 83, L: 66 },
    NAME: 'medium pink',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_F06090.HEX, PC_F06090);
PINK_PALETTE_COLORS.setIfAbsent(PC_F06090.HEX, PC_F06090);
ColorNames.addColor(PC_F06090);
