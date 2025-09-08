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

// #000000
// #80007F
// #A3A3A3
// #FFFFFF

import { Discriminators } from '../../discriminator';
import { PC_000000 } from '../../palette_color';

import { Palette } from '../palette';

/**
 * <!-- Coolors Palette Widget -->
 * <script src="https://coolors.co/palette-widget/widget.js"></script>
 * <script data-id="08264250835324647">new CoolorsPaletteWidget("08264250835324647", ["000000","a3a3a3","ffffff","80007f"],"asexual pride"); </script>
 *
 * @see {@link PC_000000}
 *
 * @since 2.0.0
 *
 * @category Pride
 */
export const ASEXUAL_PRIDE_PALETTE: Palette = {
    NAME: 'asexual pride',
    SOURCE: 'flagcolorcodes: Asexual Flag Color Codes',
    SOURCE_URL: 'https://www.flagcolorcodes.com/asexual',
    IS_GRADIENT: false,
    DISCRIMINATOR: Discriminators.PALETTE,

    COLORS: [
        PC_000000
    ],

    CONTRAST_MAP: {
        '#000000': ['#A3A3A3', '#FFFFFF'],
        '#A3A3A3': ['#000000'],
        '#FFFFFF': ['#000000', '#80007F'],
        '#80007F': ['#FFFFFF']
    }
};
