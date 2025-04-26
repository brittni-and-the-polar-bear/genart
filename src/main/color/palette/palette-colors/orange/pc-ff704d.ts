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

// #ff704d
// #FF704D
// 12°, 100%, 65%
// 255, 112, 77
// often orange
// black-pass
// luminance: 0.3338416291

import { Discriminators } from 'discriminator';

import { ColorNames } from '../../../color-name';
import { PaletteColor } from '../../palette-color';
import { ALL_PALETTE_COLORS, ORANGE_PALETTE_COLORS } from '../palette-color-maps';

export const PC_FF704D: PaletteColor = {
    HEX: '#FF704D',
    RGB: { R: 255, G: 112, B: 77 },
    HSL: { H: 12, S: 100, L: 65 },
    NAME: 'often orange',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};
