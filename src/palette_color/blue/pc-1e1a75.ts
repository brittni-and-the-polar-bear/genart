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

import { ALL_PALETTE_COLORS } from '../all-colors';
import { PaletteColor } from '../palette-color';

import { BLUE_PALETTE_COLORS } from './blue-colors';

/**
 * <div class="color-block" style="background: #1E1A75;">
 *     <a href="https://coolors.co/1e1a75" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">20000 leagues under the sea (#1E1A75)</h2>
 *     </a>
 * </div>
 *
 * @since 2.0.0
 *
 * @category Blue
 */
export const PC_1E1A75: PaletteColor = {
    HEX: '#1E1A75',
    HSL: { H: 243, S: 64, L: 28 },
    RGB: { R: 30, G: 26, B: 117 },
    NAME: '20000 leagues under the sea',
    LUMINANCE: 0.0229916257,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_1E1A75.HEX, PC_1E1A75);
BLUE_PALETTE_COLORS.setIfAbsent(PC_1E1A75.HEX, PC_1E1A75);
ColorNames.addColor(PC_1E1A75);
