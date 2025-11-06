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

import { GRAY_PALETTE_COLORS } from './gray-colors';

/**
 * <div class="color-block" style="background: #3A3E40;">
 *     <a href="https://coolors.co/3a3e40" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">seaplane gray (#3A3E40)</h2>
 *     </a>
 * </div>
 *
 * @since 2.0.0
 *
 * @category Gray
 */
export const PC_3A3E40: PaletteColor = {
    HEX: '#3A3E40',
    RGB: { R: 58, G: 62, B: 64 },
    HSL: { H: 200, S: 5, L: 24 },
    NAME: 'seaplane gray',
    LUMINANCE: 0.0471495495,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_3A3E40.HEX, PC_3A3E40);
GRAY_PALETTE_COLORS.setIfAbsent(PC_3A3E40.HEX, PC_3A3E40);
ColorNames.addColor(PC_3A3E40);
