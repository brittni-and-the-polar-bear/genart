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

import { ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FAFEFF;">
 *     <a href="https://coolors.co/fafeff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">polar bear in a blizzard (#FAFEFF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link BLUE_LILY}
 *
 * @category Palette Colors (White)
 * @category Palette Colors (All)
 */
export const _FAFEFF: PaletteColor = {
    HEX: '#FAFEFF',
    RGB: { R: 250, G: 254, B: 255 },
    HSL: { H: 192, S: 100, L: 99 },
    NAME: 'polar bear in a blizzard',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

WHITE_PALETTE_COLORS.setUndefinedKey(_FAFEFF.HEX, _FAFEFF);
ALL_PALETTE_COLORS.setUndefinedKey(_FAFEFF.HEX, _FAFEFF);
ColorNameManager.addColor(_FAFEFF);
