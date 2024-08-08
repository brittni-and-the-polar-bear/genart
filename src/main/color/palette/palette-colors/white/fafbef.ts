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

// #fafbef
// #FAFBEF
// 65°, 60%, 96%
// 250, 251, 239
// enoki
// black pass
// luminance: 0.9555034902

import { ColorNameManager } from 'color';
import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { ALL_PALETTE_COLORS, WHITE_PALETTE_COLORS } from '../palette-color-maps';

export const _FAFBEF: PaletteColor = {
    HEX: '#FAFBEF',
    RGB: { R: 250, G: 251, B: 239 },
    HSL: { H: 65, S: 60, L: 96 },
    NAME: 'enoki',
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

WHITE_PALETTE_COLORS.setUndefinedKey(_FAFBEF.HEX, _FAFBEF);
ALL_PALETTE_COLORS.setUndefinedKey(_FAFBEF.HEX, _FAFBEF);
ColorNameManager.addColor(_FAFBEF);
