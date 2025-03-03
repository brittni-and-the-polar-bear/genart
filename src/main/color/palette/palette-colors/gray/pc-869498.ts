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

import { Discriminators } from 'discriminator';

import { ColorNames } from '../../../color-name';
import { PaletteColor } from '../../palette-color';
import { ALL_PALETTE_COLORS, GRAY_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #869498;">
 *     <a href="https://coolors.co/869498" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">carrier pigeon blue (#869498)</h2>
 *     </a>
 * </div>
 *
 * @see {@link DALLAS_COWBOYS_PALETTE}
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Gray)
 */
export const PC_869498: PaletteColor = {
    HEX: '#869498',
    RGB: { R: 134, G: 148, B: 152 },
    HSL: { H: 193, S: 8, L: 56 },
    NAME: 'carrier pigeon blue',
    LUMINANCE: 0.2851514006,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setUndefinedKey(PC_869498.HEX, PC_869498);
GRAY_PALETTE_COLORS.setUndefinedKey(PC_869498.HEX, PC_869498);
ColorNames.addColor(PC_869498);
