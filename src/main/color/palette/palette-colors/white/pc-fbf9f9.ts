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
import { ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FBF9F9;">
 *     <a href="https://coolors.co/fbf9f9" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">doctor white (#FBF9F9)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / White
 */
export const PC_FBF9F9: PaletteColor = {
    HEX: '#FBF9F9',
    RGB: { R: 251, G: 249, B: 249 },
    HSL: { H: 0, S: 20, L: 98 },
    NAME: 'doctor white',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

WHITE_PALETTE_COLORS.setUndefinedKey(PC_FBF9F9.HEX, PC_FBF9F9);
ALL_PALETTE_COLORS.setUndefinedKey(PC_FBF9F9.HEX, PC_FBF9F9);
ColorNames.addColor(PC_FBF9F9);
