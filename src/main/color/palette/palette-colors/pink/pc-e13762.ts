/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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
 * <div class="color-block" style="background: #E13762;">
 *     <a href="https://coolors.co/e13762" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">intense passion (#E13762)</h2>
 *     </a>
 * </div>
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Pink
 */
export const PC_E13762: PaletteColor = {
    HEX: '#E13762',
    RGB: { R: 225, G: 55, B: 98 },
    HSL: { H: 345, S: 74, L: 55 },
    NAME: 'intense passion',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_E13762.HEX, PC_E13762);
PINK_PALETTE_COLORS.setIfAbsent(PC_E13762.HEX, PC_E13762);
ColorNames.addColor(PC_E13762);
