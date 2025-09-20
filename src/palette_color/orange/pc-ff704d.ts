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
import { CALIFORNIA_WINE_SUNSET_PALETTE } from '../../palette';

import { ALL_PALETTE_COLORS } from '../all-colors';
import { PaletteColor } from '../palette-color';

import { ORANGE_PALETTE_COLORS } from './orange-colors';

/**
 * <div class="color-block" style="background: #FF704D;">
 *     <a href="https://coolors.co/ff704d" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block black-pass">often orange (#FF704D)</h2>
 *     </a>
 * </div>
 *
 * @see {@link CALIFORNIA_WINE_SUNSET_PALETTE}
 *
 * @since 2.0.0
 *
 * @category Orange
 */
export const PC_FF704D: PaletteColor = {
    HEX: '#FF704D',
    HSL: { H: 12, S: 100, L: 65 },
    RGB: { R: 255, G: 112, B: 77 },
    NAME: 'often orange',
    LUMINANCE: 0.3338416291,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_FF704D.HEX, PC_FF704D);
ORANGE_PALETTE_COLORS.setIfAbsent(PC_FF704D.HEX, PC_FF704D);
ColorNames.addColor(PC_FF704D);
