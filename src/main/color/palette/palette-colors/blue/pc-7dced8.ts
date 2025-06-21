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
import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #7DCED8;">
 *     <a href="https://coolors.co/7dced8" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">spray (#7DCED8)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BLUE_LILY_PALETTE}
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_7DCED8: PaletteColor = {
    HEX: '#7DCED8',
    RGB: { R: 125, G: 206, B: 216 },
    HSL: { H: 187, S: 54, L: 67 },
    NAME: 'spray',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_7DCED8.HEX, PC_7DCED8);
BLUE_PALETTE_COLORS.setIfAbsent(PC_7DCED8.HEX, PC_7DCED8);
ColorNames.addColor(PC_7DCED8);
