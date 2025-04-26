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
import { ALL_PALETTE_COLORS, ORANGE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FFA852;">
 *     <a href="https://coolors.co/ffa852" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">pumpkin vapour (#FFA852)</h2>
 *     </a>
 * </div>
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Orange
 */
export const PC_FFA852: PaletteColor = {
    HEX: '#FFA852',
    RGB: { R: 255, G: 168, B: 82 },
    HSL: { H: 30, S: 100, L: 66 },
    NAME: 'pumpkin vapour',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_FFA852.HEX, PC_FFA852);
ORANGE_PALETTE_COLORS.setUndefinedKey(PC_FFA852.HEX, PC_FFA852);
ColorNames.addColor(PC_FFA852);
