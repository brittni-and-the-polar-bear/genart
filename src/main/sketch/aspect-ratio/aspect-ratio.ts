/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's @batpb/genart algorithmic art library,
 * which is released under the GNU Affero General Public License, Version 3.0.
 * You may not use this file except in compliance with the license.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. See LICENSE or go to
 * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU Affero General Public License for more details.
 */

// TODO - release notes
// TODO - unit tests
// TODO canvas context or graphics context
// TODO - documentation
import { Discriminator } from 'discriminator';

import { AspectRatioConfig } from './aspect-ratio-config';

/**
 * Defines the width to height ratio of a canvas.
 *
 * @category Sketch
 * @category Sketch/Aspect Ratio
 */
export class AspectRatio {
    /**
     * The name of the aspect ratio.
     */
    readonly #NAME?: string;

    /**
     * The width ratio component.
     */
    readonly #WIDTH_RATIO: number;

    /**
     * The height ratio component.
     */
    readonly #HEIGHT_RATIO: number;

    constructor(width: number, height: number, name?: string);
    constructor(config: AspectRatioConfig);
    constructor(arg1: AspectRatioConfig | number, arg2?: number, arg3?: string) {
        if (Discriminator.isAspectRatioConfig(arg1)) {
            let widthRatio: number = arg1.WIDTH_RATIO;
            let heightRatio: number = arg1.HEIGHT_RATIO;

            if (widthRatio < 1) {
                widthRatio = 1;
            }

            if (heightRatio < 1) {
                heightRatio = 1;
            }

            this.#WIDTH_RATIO = widthRatio;
            this.#HEIGHT_RATIO = heightRatio;
            this.#NAME = arg1.NAME;
        } else if ((arg1 && arg1 > 0) && (arg2 && arg2 > 0)) {
            const width: number = arg1;
            const height: number = arg2;
            const minDim: number = Math.min(width, height);
            const widthRatioCalculated: number = width / minDim;
            const heightRatioCalculated: number = height / minDim;
            this.#WIDTH_RATIO = parseFloat(widthRatioCalculated.toFixed(2));
            this.#HEIGHT_RATIO = parseFloat(heightRatioCalculated.toFixed(2));
            this.#NAME = arg3;
        } else {
            this.#WIDTH_RATIO = 1;
            this.#HEIGHT_RATIO = 1;
        }
    }

    public get NAME(): string {
        if (this.#NAME) {
            return this.#NAME;
        } else {
            return `${this.#WIDTH_RATIO}:${this.#HEIGHT_RATIO}`;
        }
    }

    public get WIDTH_RATIO(): number {
        return this.#WIDTH_RATIO;
    }

    public get HEIGHT_RATIO(): number {
        return this.#HEIGHT_RATIO;
    }

    public getWidth(resolution: number): number {
        return Math.floor(this.calculateUnit(resolution) * this.#WIDTH_RATIO);
    }

    public getHeight(resolution: number): number {
        return Math.floor(this.calculateUnit(resolution) * this.#HEIGHT_RATIO);
    }

    /**
     * Calculates the base unit for the aspect ratio given the target resolution.
     *
     * @param resolution - The target resolution.
     */
    private calculateUnit(resolution: number): number {
        return resolution / Math.min(this.#WIDTH_RATIO, this.#HEIGHT_RATIO);
    }
}
