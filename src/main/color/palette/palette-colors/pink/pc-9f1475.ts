/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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
import { ALL_PALETTE_COLORS, PINK_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #9F1475;">
 *     <a href="https://coolors.co/9f1475" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">haunted pink (#9F1475)</h2>
 *     </a>
 * </div>
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Pink
 */
export const PC_9F1475: PaletteColor = {
    HEX: '#9F1475',
    RGB: { R: 159, G: 20, B: 117 },
    HSL: { H: 318, S: 78, L: 35 },
    NAME: 'haunted pink',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_9F1475.HEX, PC_9F1475);
PINK_PALETTE_COLORS.setIfAbsent(PC_9F1475.HEX, PC_9F1475);
ColorNames.addColor(PC_9F1475);
