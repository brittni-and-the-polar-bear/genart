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

// TODO - documentation
// TODO - release notes
// TODO - unit tests
import P5Lib from 'p5';

import { P5Context } from 'p5-context';

export class CoordinateRatioMapper {
    readonly #IS_WEB_GL: boolean;

    #width: number;
    #height: number;

    public constructor(width: number, height: number, isWebGL: boolean) {
        this.#width = width;
        this.#height = height;
        this.#IS_WEB_GL = isWebGL;
    }

    public get width(): number {
        return this.#width;
    }

    public set width(width: number) {
        this.#width = width;
    }

    public get height(): number {
        return this.#height;
    }

    public set height(height: number) {
        this.#height = height;
    }

    /**
     * The center x-axis value of the canvas.
     */
    public get centerX(): number {
        return this.mapRatioToCoordinateX(0.5);
    }

    /**
     * The center y-axis value of the canvas.
     */
    public get centerY(): number {
        return this.mapRatioToCoordinateY(0.5);
    }

    /**
     * The minimum visible x-axis value.
     */
    public get minX(): number {
        let min: number = 0;

        if (this.#IS_WEB_GL) {
            min = (this.#width / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The maximum visible x-axis value.
     */
    public get maxX(): number {
        let max: number = this.#width;

        if (this.#IS_WEB_GL) {
            max = (this.#width / 2.0);
        }

        return max;
    }

    /**
     * The minimum visible y-axis value.
     */
    public get minY(): number {
        let min: number = 0;

        if (this.#IS_WEB_GL) {
            min = (this.#height / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The maximum visible y-axis value.
     */
    public get maxY(): number {
        let max: number = this.#height;

        if (this.#IS_WEB_GL) {
            max = (this.#height / 2.0);
        }

        return max;
    }

    public mapRatioToCoordinate(ratioVector: P5Lib.Vector): P5Lib.Vector {
        const coordinateX: number = this.mapRatioToCoordinateX(ratioVector.x);
        const coordinateY: number = this.mapRatioToCoordinateY(ratioVector.y);
        return P5Context.p5.createVector(coordinateX, coordinateY);
    }

    /**
     * Map a percentage value to a value on the x-axis.
     * A percentage value of 0.5 will be exactly in the middle of the x-axis,
     * regardless of context resolution or aspect ratio.
     *
     * @param ratioX - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     */
    public mapRatioToCoordinateX(ratioX: number): number {
        return P5Context.p5.map(ratioX, 0, 1, this.minX, this.maxX);
    }

    /**
     * Map a percentage value to a value on the y-axis.
     * A percentage value of 0.5 will be exactly in the middle of the y-axis,
     * regardless of context resolution or aspect ratio.
     *
     * @param ratioY - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     */
    public mapRatioToCoordinateY(ratioY: number): number {
        return P5Context.p5.map(ratioY, 0, 1, this.minY, this.maxY);
    }

    public mapCoordinateToRatio(coordinateVector: P5Lib.Vector): P5Lib.Vector {
        const coordinateX: number = this.mapCoordinateToRatioX(coordinateVector.x);
        const coordinateY: number = this.mapCoordinateToRatioY(coordinateVector.y);
        return P5Context.p5.createVector(coordinateX, coordinateY);
    }

    // TODO - unit tests - are results constrained to 0 and 1?
    public mapCoordinateToRatioX(coordinateX: number): number {
        return P5Context.p5.map(coordinateX, this.minX, this.maxX, 0, 1);
    }

    // TODO - unit tests - are results constrained to 0 and 1?
    public mapCoordinateToRatioY(coordinateY: number): number {
        return P5Context.p5.map(coordinateY, this.minY, this.maxY, 0, 1);
    }
}
