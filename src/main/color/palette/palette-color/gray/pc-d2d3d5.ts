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

// #d2d3d5
// 220°, 3%, 83%
// 210, 211, 213
// rapunzel silver
// black-pass
// luminance: 0.6509426552

import { Discriminators } from 'discriminator';

import { ColorNames } from '../../../color-name';
import { PaletteColor } from '../palette-color';
import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #D2D3D5;">
 *     <a href="https://coolors.co/d2d3d5" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">rapunzel silver (#D2D3D5)</h2>
 *     </a>
 * </div>
 *
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Gray
 */
export const PC_D2D3D5: PaletteColor = {
    HEX: '#D2D3D5',
    RGB: { R: 210, G: 211, B: 213 },
    HSL: { H: 220, S: 3, L: 83 },
    NAME: 'rapunzel silver',
    LUMINANCE: 0.6509426552,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
}

ALL_PALETTE_COLORS.setIfAbsent(PC_D2D3D5.HEX, PC_D2D3D5);
GRAY_PALETTE_COLORS.setIfAbsent(PC_D2D3D5.HEX, PC_D2D3D5);
ColorNames.addColor(PC_D2D3D5);
