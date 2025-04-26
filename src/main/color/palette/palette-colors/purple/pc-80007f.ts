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
import { ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #80007F;">
 *     <a href="https://coolors.co/80007f" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">philippine violet (#80007F)</h2>
 *     </a>
 * </div>
 *
 * @see {@link ASEXUAL_FLAG_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Purple
 */
export const PC_80007F: PaletteColor = {
    HEX: '#80007F',
    HSL: { H: 300, S: 100, L: 25 },
    RGB: { R: 128, G: 0, B: 127 },
    NAME: 'philippine violet',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_80007F.HEX, PC_80007F);
PURPLE_PALETTE_COLORS.setUndefinedKey(PC_80007F.HEX, PC_80007F);
ColorNames.addColor(PC_80007F);
