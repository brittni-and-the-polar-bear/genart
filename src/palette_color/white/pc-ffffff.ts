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

import { WHITE_PALETTE_COLORS } from './white-colors';

/**
 * <div class="color-block" style="background: #FFFFFF;">
 *     <a href="https://coolors.co/ffffff" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">white (#FFFFFF)</h2>
 *     </a>
 * </div>
 *
 * @see {@link ASEXUAL_PRIDE_PALETTE}
 *
 * @since 2.0.0
 *
 * @category White
 */
export const PC_FFFFFF: PaletteColor = {
    HEX: '#FFFFFF',
    RGB: { R: 255, G: 255, B: 255 },
    HSL: { H: 0, S: 0, L: 100 },
    NAME: 'white',
    LUMINANCE: 1.00,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_FFFFFF.HEX, PC_FFFFFF);
WHITE_PALETTE_COLORS.setIfAbsent(PC_FFFFFF.HEX, PC_FFFFFF);
ColorNames.addColor(PC_FFFFFF);
