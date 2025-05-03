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

import { ALL_PALETTE_COLORS, RED_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #D01625;">
 *     <a href="https://coolors.co/d01625" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">cartoon violence (#D01625)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CLASSIC_CHRISTMAS_PALETTE}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 */
export const PC_D01625: PaletteColor = {
    HEX: '#D01625',
    RGB: { R: 208, G: 22, B: 37 },
    HSL: { H: 355, S: 81, L: 45 },
    NAME: 'cartoon violence',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

RED_PALETTE_COLORS.setUndefinedKey(PC_D01625.HEX, PC_D01625);
ALL_PALETTE_COLORS.setUndefinedKey(PC_D01625.HEX, PC_D01625);
ColorNameManager.addColor(PC_D01625);
