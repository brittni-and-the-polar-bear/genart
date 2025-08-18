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
import { ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #D6D6FF;">
 *     <a href="https://coolors.co/d6d6ff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">pale lavender (#D6D6FF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link WHITE_LILY_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Purple
 */
export const PC_D6D6FF: PaletteColor = {
    HEX: '#D6D6FF',
    RGB: { R: 214, G: 214, B: 255 },
    HSL: { H: 240, S: 100, L: 92 },
    NAME: 'pale lavender',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_D6D6FF.HEX, PC_D6D6FF);
PURPLE_PALETTE_COLORS.setIfAbsent(PC_D6D6FF.HEX, PC_D6D6FF);
ColorNames.addColor(PC_D6D6FF);
