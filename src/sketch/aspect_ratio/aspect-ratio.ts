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

import { Discriminator } from '../../discriminator';

import { AspectRatioConfig } from './aspect-ratio-config';

/**
 * Defines the width-to-height ratio of a canvas or graphic.
 *
 * @since 2.0.0
 *
 * @category Aspect Ratio
 */
export class AspectRatio {
    /**
     * The name of the aspect ratio.
     */
    readonly #NAME: string;

    /**
     * The width component of the aspect ratio.
     */
    readonly #WIDTH_RATIO: number;

    /**
     * The height component of the aspect ratio.
     */
    readonly #HEIGHT_RATIO: number;

    /**
     *  Create an aspect ratio using the given target width and height.
     *
     * @param width - The target width of the canvas or graphic.
     * @param height - The target height of the canvas or graphic.
     * @param name - Optional name to use.
     *
     * @since 2.0.0
     */
    constructor(width: number, height: number, name?: string);
    /**
     * Create an aspect ratio using the given {@link AspectRatioConfig}.
     *
     * @param config - The {@link AspectRatioConfig} to use.
     *
     * @since 2.0.0
     */
    constructor(config: AspectRatioConfig);
    constructor(arg1: AspectRatioConfig | number, arg2?: number, arg3?: string) {
        if (Discriminator.isAspectRatioConfig(arg1)) {
            const config: AspectRatioConfig = arg1;
            let widthRatio: number = config.WIDTH_RATIO;
            let heightRatio: number = config.HEIGHT_RATIO;

            if (widthRatio < 1) {
                widthRatio = 1;
            }

            if (heightRatio < 1) {
                heightRatio = 1;
            }

            this.#WIDTH_RATIO = widthRatio;
            this.#HEIGHT_RATIO = heightRatio;
            this.#NAME = this.#buildName(config.NAME);
        } else if ((arg1 && arg1 > 0) && (arg2 && arg2 > 0)) {
            const width: number = arg1;
            const height: number = arg2;
            const name: string | undefined = arg3;
            const minDim: number = Math.min(width, height);
            const widthRatioCalculated: number = width / minDim;
            const heightRatioCalculated: number = height / minDim;
            this.#WIDTH_RATIO = parseFloat(widthRatioCalculated.toFixed(2));
            this.#HEIGHT_RATIO = parseFloat(heightRatioCalculated.toFixed(2));
            this.#NAME = this.#buildName(name);
        } else {
            this.#WIDTH_RATIO = 1;
            this.#HEIGHT_RATIO = 1;
            this.#NAME = this.#buildName();
        }
    }

    /**
     * The name of the aspect ratio.
     */
    public get NAME(): string {
        return this.#NAME;
    }

    /**
     * The width component of the aspect ratio.
     */
    public get WIDTH_RATIO(): number {
        return this.#WIDTH_RATIO;
    }

    /**
     * The height component of the aspect ratio.
     */
    public get HEIGHT_RATIO(): number {
        return this.#HEIGHT_RATIO;
    }

    /**
     * Calculates the width of the canvas or graphic given the target resolution.
     * @param resolution - The target resolution.
     * @param applyToLongSide - When true, long side of the canvas or graphic will be equal to the target resolution.
     */
    public getWidth(resolution: number, applyToLongSide?: boolean): number {
        return Math.floor(this.#calculateUnit(resolution, applyToLongSide) * this.#WIDTH_RATIO);
    }

    /**
     * Calculates the height of the canvas or graphic given the target resolution.
     *
     * @param resolution - The target resolution.
     * @param applyToLongSide - When true, long side of the canvas or graphic will be equal to the target resolution.
     */
    public getHeight(resolution: number, applyToLongSide?: boolean): number {
        return Math.floor(this.#calculateUnit(resolution, applyToLongSide) * this.#HEIGHT_RATIO);
    }

    /**
     * Calculates the base unit for the aspect ratio given the target resolution.
     *
     * @param resolution - The target resolution.
     * @param applyToLongSide - When true, long side of the canvas or graphic will be equal to the target resolution.
     */
    #calculateUnit(resolution: number, applyToLongSide?: boolean): number {
        if (applyToLongSide) {
            return resolution / Math.max(this.#WIDTH_RATIO, this.#HEIGHT_RATIO);
        }

        return resolution / Math.min(this.#WIDTH_RATIO, this.#HEIGHT_RATIO);
    }

    /**
     * Builds the name of the aspect ratio.
     *
     * @param name - Optional name to use.
     *
     * @returns The given name or a name built from the width and height ratios.
     *
     * @private
     */
    #buildName(name?: string): string {
        if (name) {
            return name;
        }

        return `${this.#WIDTH_RATIO}:${this.#HEIGHT_RATIO}`;
    }
}
