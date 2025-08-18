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
import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #1E1A75;">
 *     <a href="https://coolors.co/1e1a75" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">20000 leagues under the sea (#1E1A75)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_1E1A75: PaletteColor = {
    HEX: '#1E1A75',
    RGB: { R: 30, G: 26, B: 117 },
    HSL: { H: 243, S: 64, L: 28 },
    NAME: '20000 leagues under the sea',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_1E1A75.HEX, PC_1E1A75);
BLUE_PALETTE_COLORS.setIfAbsent(PC_1E1A75.HEX, PC_1E1A75);
ColorNames.addColor(PC_1E1A75);
