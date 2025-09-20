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

import { Discriminable, Discriminators } from '../../discriminator';

/**
 * A configuration for an aspect ratio.
 *
 * @since 2.0.0
 *
 * @category Aspect Ratio
 */
export interface AspectRatioConfig extends Discriminable {
    /**
     * The name of the aspect ratio.
     *
     * @since 2.0.0
     */
    readonly NAME?: string;

    /**
     * The width component of the aspect ratio.
     *
     * @since 2.0.0
     */
    readonly WIDTH_RATIO: number;

    /**
     * The height component of the aspect ratio.
     *
     * @since 2.0.0
     */
    readonly HEIGHT_RATIO: number;

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG;
}
