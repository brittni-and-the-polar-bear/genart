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
import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #3A3E40;">
 *     <a href="https://coolors.co/3a3e40" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">seaplane gray (#3A3E40)</h2>
 *     </a>
 * </div>
 *
 * @category Color/Palette/Colors/All
 * @category Color/Palette/Colors/Gray
 */
export const PC_3A3E40: PaletteColor = {
    HEX: '#3A3E40',
    RGB: { R: 58, G: 62, B: 64 },
    HSL: { H: 200, S: 5, L: 24 },
    NAME: 'seaplane gray',
    LUMINANCE: 0.0471495495,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_3A3E40.HEX, PC_3A3E40);
GRAY_PALETTE_COLORS.setIfAbsent(PC_3A3E40.HEX, PC_3A3E40);
ColorNames.addColor(PC_3A3E40);
