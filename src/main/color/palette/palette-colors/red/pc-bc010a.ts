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
import { ALL_PALETTE_COLORS, RED_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #BC010A;">
 *     <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS_PALETTE}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 */
export const PC_BC010A: PaletteColor = {
    HEX: '#BC010A',
    RGB: { R: 188, G: 1, B: 10 },
    HSL: { H: 357, S: 99, L: 37 },
    NAME: "bird's eye",
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_BC010A.HEX, PC_BC010A);
RED_PALETTE_COLORS.setIfAbsent(PC_BC010A.HEX, PC_BC010A);
ColorNames.addColor(PC_BC010A);
