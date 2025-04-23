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

import { ColorNames } from "../../../color-name";
import { PaletteColor } from "../../palette-color";
import { ALL_PALETTE_COLORS, PINK_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FF6BB5;">
 *     <a href="https://coolors.co/ff6bb5" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">fen hong pink (#FF6BB5)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BRITTNI_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Pink
 */
export const PC_FF6BB5: PaletteColor = {
    HEX: '#FF6BB5',
    RGB: { R: 255, G: 107, B: 181 },
    HSL: { H: 330, S: 100, L: 71 },
    NAME: 'fen hong pink',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PINK_PALETTE_COLORS.setUndefinedKey(PC_FF6BB5.HEX, PC_FF6BB5);
ALL_PALETTE_COLORS.setUndefinedKey(PC_FF6BB5.HEX, PC_FF6BB5);
ColorNames.addColor(PC_FF6BB5);
