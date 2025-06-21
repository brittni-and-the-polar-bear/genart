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
import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #F0F3F4;">
 *     <a href="https://coolors.co/f0f3f4" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">zappy zebra (#F0F3F4)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BLUE_LILY_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Gray
 */
export const PC_F0F3F4: PaletteColor = {
    HEX: '#F0F3F4',
    RGB: { R: 240, G: 243, B: 244 },
    HSL: { H: 195, S: 15, L: 95 },
    NAME: 'zappy zebra',
    LUMINANCE: 0.8915810279,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_F0F3F4.HEX, PC_F0F3F4);
GRAY_PALETTE_COLORS.setIfAbsent(PC_F0F3F4.HEX, PC_F0F3F4);
ColorNames.addColor(PC_F0F3F4);
