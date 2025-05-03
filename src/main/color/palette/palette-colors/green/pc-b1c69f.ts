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
import { ALL_PALETTE_COLORS, GREEN_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #B1C69F;">
 *     <a href="https://coolors.co/b1c69f" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">wasabi peanut (#B1C69F)</h2>
 *     </a>
 * </div>
 *
 * @see {@link WHITE_LILY_PALETTE}
 *
 * @category Palette Colors (Green)
 * @category Palette Colors (All)
 */
export const PC_B1C69F: PaletteColor = {
    HEX: '#B1C69F',
    RGB: { R: 177, G: 198, B: 159 },
    HSL: { H: 92, S: 25, L: 70 },
    NAME: 'wasabi peanut',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_B1C69F.HEX, PC_B1C69F);
GREEN_PALETTE_COLORS.setUndefinedKey(PC_B1C69F.HEX, PC_B1C69F);
ColorNames.addColor(PC_B1C69F);
