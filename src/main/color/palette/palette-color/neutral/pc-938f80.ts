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
import { PaletteColor } from '../palette-color';
import { ALL_PALETTE_COLORS, NEUTRAL_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #938F80;">
 *     <a href="https://coolors.co/938f80" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">muted sage (#938F80)</h2>
 *     </a>
 * </div>
 *
 * @category Color/Palette/Colors/All
 * @category Color/Palette/Colors/Neutral
 */
export const PC_938F80: PaletteColor = {
    HEX: '#938F80',
    RGB: { R: 147, G: 143, B: 128 },
    HSL: { H: 47, S: 8, L: 54 },
    NAME: 'muted sage',
    LUMINANCE: 0.2740647818,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_938F80.HEX, PC_938F80);
NEUTRAL_PALETTE_COLORS.setIfAbsent(PC_938F80.HEX, PC_938F80);
ColorNames.addColor(PC_938F80);
