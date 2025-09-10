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

/**
 * A color to be used in a Palette.
 *
 * @since 2.0.0
 *
 * @category PaletteColor
 */
export interface PaletteColor extends Discriminable {
    /**
     * The hex string representation of the color (format: `#RRGGBB`).
     *
     * @since 2.0.0
     */
    readonly HEX: string;

    /**
     * The name of the color.
     *
     * @since 2.0.0
     */
    readonly NAME: string;

    /**
     * The luminance of the color (0-1).
     *
     * @since 2.0.0
     */
    readonly LUMINANCE?: number;

    /**
     * The RGB (red, green, blue) components of the color.
     *
     * @since 2.0.0
     */
    readonly RGB?: {
        /**
         * The red component (0-255).
         *
         * @since 2.0.0
         */
        readonly R: number;

        /**
         * The green component (0-255).
         *
         * @since 2.0.0
         */
        readonly G: number;

        /**
         * The blue component (0-255).
         *
         * @since 2.0.0
         */
        readonly B: number;
    };

    /**
     * The HSL (hue, saturation, lightness) components of the color.
     *
     * @since 2.0.0
     */
    readonly HSL?: {
        /**
         * The hue component (0-360).
         *
         * @since 2.0.0
         */
        readonly H: number;

        /**
         * The saturation component (0-100).
         *
         * @since 2.0.0
         */
        readonly S: number;

        /**
         * The lightness component (0-100).
         *
         * @since 2.0.0
         */
        readonly L: number;
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE_COLOR;
}
