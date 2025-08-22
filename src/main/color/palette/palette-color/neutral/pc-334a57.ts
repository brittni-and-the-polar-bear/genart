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
import { PaletteColor } from '../palette-color';
import { ALL_PALETTE_COLORS, NEUTRAL_PALETTE_COLORS } from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #334A57;">
 *     <a href="https://coolors.co/334a57" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">sailor's coat (#334A57)</h2>
 *     </a>
 * </div>
 *
 * @category Color / Palette / Colors / All
 * @category Color / Palette / Colors / Neutral
 */
export const PC_334A57: PaletteColor = {
    HEX: '#334A57',
    RGB: { R: 51, G: 74, B: 87 },
    HSL: { H: 202, S: 26, L: 27 },
    NAME: "sailor's coat",
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_334A57.HEX, PC_334A57);
NEUTRAL_PALETTE_COLORS.setIfAbsent(PC_334A57.HEX, PC_334A57);
ColorNames.addColor(PC_334A57);
