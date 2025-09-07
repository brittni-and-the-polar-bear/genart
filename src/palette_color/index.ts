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

import { StringMap } from '../map';

import { PaletteColor } from './palette-color';

export * from './black';

export * from './palette-color';

/**
 * @category Namespace
 *
 * @since 2.0.0
 */
export * as black from './black';

/**
 * A map of hex values to {@link PaletteColor} objects for all palette colors.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/genart/colors/colors.html" target="_blank" rel="noopener noreferrer">See the Colors.</a>
 *
 * @since 2.0.0
 *
 * @category PaletteColor Collections
 */
export const ALL_PALETTE_COLORS: StringMap<PaletteColor> = new StringMap<PaletteColor>();
