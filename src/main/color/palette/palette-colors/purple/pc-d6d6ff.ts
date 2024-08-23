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

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, PURPLE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #D6D6FF;">
 *     <a href="https://coolors.co/d6d6ff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">pale lavender (#D6D6FF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link WHITE_LILY}
 *
 * @category Palette Colors (Purple)
 * @category Palette Colors (All)
 */
export const PC_D6D6FF: PaletteColor = {
    HEX: '#D6D6FF',
    RGB: { R: 214, G: 214, B: 255 },
    HSL: { H: 240, S: 100, L: 92 },
    NAME: 'pale lavender',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

PURPLE_PALETTE_COLORS.setUndefinedKey(PC_D6D6FF.HEX, PC_D6D6FF);
ALL_PALETTE_COLORS.setUndefinedKey(PC_D6D6FF.HEX, PC_D6D6FF);
ColorNameManager.addColor(PC_D6D6FF);
