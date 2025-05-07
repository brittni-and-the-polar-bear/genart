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
 * <div class="color-block" style="background: #FCE3EC;">
 *     <a href="https://coolors.co/fce3ec" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">spun sugar (#FCE3EC)</h2>
 *     </a>
 * </div>
 *
 * @see {@link GLITTER_PALETTE}
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Pink
 */
export const PC_FCE3EC: PaletteColor = {
    HEX: '#FCE3EC',
    RGB: { R: 252, G: 227, B: 236 },
    HSL: { H: 338, S: 81, L: 94 },
    NAME: 'spun sugar',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_FCE3EC.HEX, PC_FCE3EC);
PINK_PALETTE_COLORS.setUndefinedKey(PC_FCE3EC.HEX, PC_FCE3EC);
ColorNames.addColor(PC_FCE3EC);
