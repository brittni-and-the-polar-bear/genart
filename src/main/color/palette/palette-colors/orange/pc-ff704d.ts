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
import { ALL_PALETTE_COLORS, ORANGE_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #FF704D;">
 *     <a href="https://coolors.co/ff704d" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">often orange (#FF704D)</h2>
 *     </a>
 * </div>
 *
 * @category Color
 * @category Color / Palette
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Orange
 */
export const PC_FF704D: PaletteColor = {
    HEX: '#FF704D',
    RGB: { R: 255, G: 112, B: 77 },
    HSL: { H: 12, S: 100, L: 65 },
    NAME: 'often orange',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_FF704D.HEX, PC_FF704D);
ORANGE_PALETTE_COLORS.setIfAbsent(PC_FF704D.HEX, PC_FF704D);
ColorNames.addColor(PC_FF704D);
