/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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
import { CALIFORNIA_WINE_SUNSET_PALETTE } from '../../palette';

import { ALL_PALETTE_COLORS } from '../all-colors';
import { PaletteColor } from '../palette-color';

import { PINK_PALETTE_COLORS } from './pink-colors';

/**
 * <div class="color-block" style="background: #E13762;">
 *     <a href="https://coolors.co/e13762" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">intense passion (#E13762)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CALIFORNIA_WINE_SUNSET_PALETTE}
 *
 * @since 2.0.0
 *
 * @category Pink
 */
export const PC_E13762: PaletteColor = {
    HEX: '#E13762',
    HSL: { H: 345, S: 74, L: 55 },
    RGB: { R: 225, G: 55, B: 98 },
    NAME: 'intense passion',
    LUMINANCE: 0.1962177012,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_E13762.HEX, PC_E13762);
PINK_PALETTE_COLORS.setIfAbsent(PC_E13762.HEX, PC_E13762);
ColorNames.addColor(PC_E13762);
