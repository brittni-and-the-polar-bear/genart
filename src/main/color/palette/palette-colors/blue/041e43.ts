/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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

// #041e43
// #041E43
// 215°, 89%, 14%
// 4, 30, 67
// midnight mirage
// white-pass
// luminance: 0.0135960611

import { ColorNameManager } from 'color';
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
 * @category Palette Colors (Blue)
 * @category Palette Colors (All)
 */
export const _041E43: PaletteColor = {
    HEX: '#041E43',
    RGB: { R: 4, G: 30, B: 67 },
    HSL: { H: 215, S: 89, L: 14 },
    NAME: 'midnight mirage',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

BLUE_PALETTE_COLORS.setUndefinedKey(_041E43.HEX, _041E43);
ALL_PALETTE_COLORS.setUndefinedKey(_041E43.HEX, _041E43);
ColorNameManager.addColor(_041E43);
