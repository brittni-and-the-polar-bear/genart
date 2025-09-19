/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { ColorNames } from '../../color';
import { Discriminators } from '../../discriminator';
import { ASEXUAL_PRIDE_PALETTE } from '../../palette';

import { ALL_PALETTE_COLORS } from '../all-colors';
import { PaletteColor } from '../palette-color';

import { BLACK_PALETTE_COLORS } from './black-colors';

/**
 * <div class="color-block" style="background: #000000;">
 *     <a href="https://coolors.co/000000" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">black (#000000)</h2>
 *     </a>
 * </div>
 *
 * @see {@link ASEXUAL_PRIDE_PALETTE}
 *
 * @since 2.0.0
 *
 * @category Black
 */
export const PC_000000: PaletteColor = {
    HEX: '#000000',
    HSL: { H: 0, S: 0, L: 0 },
    RGB: { R: 0, G: 0, B: 0 },
    NAME: 'black',
    LUMINANCE: 0.00,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_000000.HEX, PC_000000);
BLACK_PALETTE_COLORS.setIfAbsent(PC_000000.HEX, PC_000000);
ColorNames.addColor(PC_000000);
