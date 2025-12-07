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

import { Palette } from '../palette';
import { PaletteColor } from '../palette_color';
import { AspectRatioConfig } from '../sketch';

import { Discriminable } from './discriminable';
import { Discriminators } from './discriminators';

/**
 * Static class methods for evaluating if objects implement various interfaces for type safety.
 *
 * @since 2.0.0
 *
 * @category Discriminator
 */
export class Discriminator {
    /**
     * @throws {Error} - Discriminator is a static class and cannot be instantiated.
     *
     * @constructor
     *
     * @since 2.0.0
     */
    public constructor() {
        throw new Error('Discriminator is a static class and cannot be instantiated.');
    }

    /**
     * Does the given object implement the {@link AspectRatioConfig} interface?
     *
     * @param object {unknown} - The object to check
     *
     * @returns {object is AspectRatioConfig} `true` if the given object implements the {@link AspectRatioConfig} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isAspectRatioConfig(object: unknown): object is AspectRatioConfig {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.ASPECT_RATIO_CONFIG);
    }

    /**
     * Does the given object implement the {@link Palette} interface?
     *
     * @param object {unknown} - The object to check
     *
     * @returns {object is Palette} `true` if the given object implements the {@link Palette} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isPalette(object: unknown): object is Palette {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.PALETTE);
    }

    /**
     * Does the given object implement the {@link PaletteColor} interface?
     *
     * @param object {unknown} - The object to check
     *
     * @returns {object is PaletteColor} `true` if the given object implements the {@link PaletteColor} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isPaletteColor(object: unknown): object is PaletteColor {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.PALETTE_COLOR);
    }

    /**
     * Does the given object implement the {@link Discriminable} interface, and does the object's {@link Discriminable.DISCRIMINATOR} value match the given discriminator?
     *
     * @param object {unknown} - The object to check
     * @param discriminator {Discriminators} - The discriminator value to check against
     *
     * @returns {boolean} `true` if the object implements {@link Discriminable} and has a matching discriminator value, `false` otherwise.
     *
     * @private
     */
    static #hasDiscriminatorMatch(object: unknown, discriminator: Discriminators): boolean {
        if (object && typeof object === 'object') {
            return (object as Discriminable).DISCRIMINATOR === discriminator;
        }

        return false;
    }
}
