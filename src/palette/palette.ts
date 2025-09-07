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

import { Discriminable, Discriminators } from '../discriminator';
import { PaletteColor } from '../palette-color';

/**
 * A collection of {@link PaletteColor} objects.
 *
 * @since 2.0.0
 *
 * @category Palette
 */
export interface Palette extends Discriminable {
    /**
     * The name of the palette.
     *
     * @since 2.0.0
     */
    readonly NAME: string;

    /**
     * The source of the palette.
     *
     * @since 2.0.0
     */
    readonly SOURCE?: string;

    /**
     * The source URL of the palette.
     *
     * @since 2.0.0
     */
    readonly SOURCE_URL?: string;

    /**
     * A flag indicating if the palette is a gradient.
     *
     * @since 2.0.0
     */
    readonly IS_GRADIENT: boolean;

    /**
     * The list of {@link PaletteColor} objects that compose the palette.
     *
     * @since 2.0.0
     */
    readonly COLORS: PaletteColor[];

    /**
     * A map of hex color strings to arrays of hex colors,
     * where each color in the array passes the WCAG AA standard
     * with normal and large size text when compared to the key.<br/>
     * The only colors listed in this map should be the colors of the
     * palette, black (#000000), and white (#FFFFFF).
     *
     * @since 2.0.0
     */
    readonly CONTRAST_MAP?: {
        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to black (#000000). This list should NOT contain
         * white (#FFFFFF) unless it is a color listed in the palette.
         *
         * @since 2.0.0
         */
        readonly '#000000': string[];

        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to white (#FFFFFF). This list should NOT contain
         * black (#000000) unless it is a color listed in the palette.
         *
         * @since 2.0.0
         */
        readonly '#FFFFFF': string[];

        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to any other color in the palette.
         *
         * @since 2.0.0
         */
        readonly [HEX: string]: string[];
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE;
}
