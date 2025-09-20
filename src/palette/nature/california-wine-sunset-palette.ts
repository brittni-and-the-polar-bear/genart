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

import { Discriminators } from '../../discriminator';
import { PC_1E1A75, PC_9F1475, PC_E13762, PC_FF704D, PC_FFA852 } from '../../palette_color';

import { Palette } from '../palette';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="046205065636918297">new CoolorsPaletteWidget("046205065636918297", ["ffa852","ff704d","e13762","9f1475","1e1a75"], "california wine sunset"); </script>
 *
 * @see {@link PC_FFA852}
 * @see {@link PC_FF704D}
 * @see {@link PC_E13762}
 * @see {@link PC_9F1475}
 * @see {@link PC_1E1A75}
 *
 * @since 2.0.0
 *
 * @category Nature
 */
export const CALIFORNIA_WINE_SUNSET_PALETTE: Palette = {
    NAME: 'california wine sunset',
    SOURCE: 'color-hex, from user jenner8675309',
    SOURCE_URL: 'https://www.color-hex.com/color-palette/107525',
    IS_GRADIENT: true,
    DISCRIMINATOR: Discriminators.PALETTE,

    COLORS: [
        PC_FFA852,
        PC_FF704D,
        PC_E13762,
        PC_9F1475,
        PC_1E1A75
    ],

    CONTRAST_MAP: {
        '#000000': ['#FFA852', '#FF704D', '#E13762'],
        '#FFFFFF': ['#9F1475', '#1E1A75'],
        '#FFA852': ['#1E1A75', '#000000'],
        '#FF704D': ['#1E1A75', '#000000'],
        '#E13762': ['#000000'],
        '#9F1475': ['#FFFFFF'],
        '#1E1A75': ['#FFA852', '#FF704D', '#FFFFFF']
    }
};
