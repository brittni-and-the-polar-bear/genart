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

import { NEUTRAL_PALETTE_COLORS } from './neutral-colors';

/**
 * <div class="color-block" style="background: #223944;">
 *     <a href="https://coolors.co/223944" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">astral nomad (#223944)</h2>
 *     </a>
 * </div>
 *
 * @since 2.0.0
 *
 * @category Neutral
 */
export const PC_223944: PaletteColor = {
    HEX: '#223944',
    HSL: { H: 199, S: 33, L: 20 },
    RGB: { R: 34, G: 57, B: 68 },
    NAME: 'astral nomad',
    LUMINANCE: 0.0368369129,
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
};

ALL_PALETTE_COLORS.setIfAbsent(PC_223944.HEX, PC_223944);
NEUTRAL_PALETTE_COLORS.setIfAbsent(PC_223944.HEX, PC_223944);
ColorNames.addColor(PC_223944);
