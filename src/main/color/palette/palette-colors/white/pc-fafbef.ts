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
import { ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FAFBEF;">
 *     <a href="https://coolors.co/fafbef" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">enoki (#FAFBEF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link WHITE_LILY_PALETTE}
 *
 * @category Palette Colors (White)
 * @category Palette Colors (All)
 */
export const PC_FAFBEF: PaletteColor = {
    HEX: '#FAFBEF',
    RGB: { R: 250, G: 251, B: 239 },
    HSL: { H: 65, S: 60, L: 96 },
    NAME: 'enoki',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

WHITE_PALETTE_COLORS.setUndefinedKey(PC_FAFBEF.HEX, PC_FAFBEF);
ALL_PALETTE_COLORS.setUndefinedKey(PC_FAFBEF.HEX, PC_FAFBEF);
ColorNames.addColor(PC_FAFBEF);
