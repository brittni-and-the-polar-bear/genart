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

import { ColorNames } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, BLUE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #041E43;">
 *     <a href="https://coolors.co/041e43" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">midnight mirage (#041E43)</h2>
 *     </a>
 * </div>
 *
 * @see {@link DALLAS_COWBOYS_PALETTE}
 *
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const PC_041E43: PaletteColor = {
    HEX: '#041E43',
    RGB: { R: 4, G: 30, B: 67 },
    HSL: { H: 215, S: 89, L: 14 },
    NAME: 'midnight mirage',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(PC_041E43.HEX, PC_041E43);
ALL_PALETTE_COLORS.setUndefinedKey(PC_041E43.HEX, PC_041E43);
ColorNameManager.addColor(PC_041E43);
