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

import { PURPLE_PALETTE_COLORS } from './purple-colors';

/**
 * <div class="color-block" style="background: #29263B;">
 *     <a href="https://coolors.co/29263b" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">space indigo (#29263B)</h2>
 *     </a>
 * </div>
 *
 * @since 2.0.0
 *
 * @category Purple
 */
export const PC_29263B: PaletteColor = {
    HEX: '#29263B',
    HSL: { H: 249, S: 22, L: 19 },
    RGB: { R: 41, G: 38, B: 59 },
    NAME: 'space indigo',
    LUMINANCE: 0.0217341016,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_29263B.HEX, PC_29263B);
PURPLE_PALETTE_COLORS.setIfAbsent(PC_29263B.HEX, PC_29263B);
ColorNames.addColor(PC_29263B);
