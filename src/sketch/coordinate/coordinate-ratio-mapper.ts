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

import p5 from 'p5';

import { P5Context } from '../p5_context';

/**
 * Utility class for mapping coordinates between a ratio and a coordinate system.
 *
 * @since 2.0.0
 *
 * @category Coordinate
 */
export class CoordinateRatioMapper {
    readonly #IS_WEBGL: boolean;

    #width: number;
    #height: number;

    /**
     * Constructor for the CoordinateRatioMapper class.
     *
     * @since 2.0.0
     */
    public constructor();
    /**
     * Constructor for the CoordinateRatioMapper class.
     *
     * @param width - The width of the coordinate system.
     * @param height - The height of the coordinate system.
     * @param isWebGL - Is the coordinate system in WebGL mode?
     *
     * @since 2.0.0
     */
    public constructor(width: number, height: number, isWebGL: boolean);
    public constructor(width?: number, height?: number, isWebGL?: boolean) {
        this.#width = width ?? 720;
        this.#height = height ?? 720;
        this.#IS_WEBGL = isWebGL ?? false;
    }

    /**
     * The center of the coordinate system.
     *
     * @since 2.0.0
     */
    public get center(): p5.Vector {
        return P5Context.instance.createVector(this.centerX, this.centerY);
    }

    /**
     * The center x-axis value of the coordinate system.
     *
     * @since 2.0.0
     */
    public get centerX(): number {
        return this.mapRatioToCoordinateX(0.5);
    }

    /**
     * The center y-axis value of the coordinate system.
     *
     * @since 2.0.0
     */
    public get centerY(): number {
        return this.mapRatioToCoordinateY(0.5);
    }

    /**
     * Is the coordinate system in WebGL mode?
     *
     * @since 2.0.0
     */
    public get isWebGL(): boolean {
        return this.#IS_WEBGL;
    }

    /**
     * The minimum visible x-axis value.
     *
     * @since 2.0.0
     */
    public get minX(): number {
        let min: number = 0;

        if (this.isWebGL) {
            min = (this.width / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The maximum visible x-axis value.
     *
     * @since 2.0.0
     */
    public get maxX(): number {
        let max: number = this.width;

        if (this.isWebGL) {
            max = (this.width / 2.0);
        }

        return max;
    }

    /**
     * The minimum visible y-axis value.
     *
     * @since 2.0.0
     */
    public get minY(): number {
        let min: number = 0;

        if (this.isWebGL) {
            min = (this.height / 2.0) * -1.0;
        }

        return min;
    }

    /**
     * The maximum visible y-axis value.
     *
     * @since 2.0.0
     */
    public get maxY(): number {
        let max: number = this.height;

        if (this.isWebGL) {
            max = (this.height / 2.0);
        }

        return max;
    }

    /**
     * The width of the coordinate system.
     *
     * @since 2.0.0
     */
    public get width(): number {
        return this.#width;
    }

    /**
     * Set the width of the coordinate system.
     *
     * @param width - The width of the coordinate system.
     */
    public set width(width: number) {
        this.#width = width;
    }

    /**
     * The height of the coordinate system.
     *
     * @since 2.0.0
     */
    public get height(): number {
        return this.#height;
    }

    /**
     * Set the height of the coordinate system.
     *
     * @param height - The height of the coordinate system.
     *
     * @since 2.0.0
     */
    public set height(height: number) {
        this.#height = height;
    }

    /**
     * Map a percentage vector to values on the x-axis and y-axis.
     * A percentage value of 0.5 will be exactly in the middle of the respective axis,
     * regardless of context resolution or aspect ratio.
     *
     * @param ratioVector - The percentage vector expressed as decimal numbers (e.g. 50% = 0.5)
     *
     * @since 2.0.0
     */
    public mapRatioToCoordinate(ratioVector: p5.Vector): p5.Vector {
        const coordinateX: number = this.mapRatioToCoordinateX(ratioVector.x);
        const coordinateY: number = this.mapRatioToCoordinateY(ratioVector.y);
        return P5Context.instance.createVector(coordinateX, coordinateY);
    }

    /**
     * Map a percentage value to a value on the x-axis.
     * A percentage value of 0.5 will be exactly in the middle of the x-axis,
     * regardless of context resolution or aspect ratio.
     *
     * @param ratioX - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     *
     * @since 2.0.0
     */
    public mapRatioToCoordinateX(ratioX: number): number {
        return P5Context.instance.map(ratioX, 0, 1, this.minX, this.maxX);
    }

    /**
     * Map a percentage value to a value on the y-axis.
     * A percentage value of 0.5 will be exactly in the middle of the y-axis,
     * regardless of context resolution or aspect ratio.
     *
     * @param ratioY - The percentage expressed as a decimal number (e.g. 50% = 0.5)
     *
     * @since 2.0.0
     */
    public mapRatioToCoordinateY(ratioY: number): number {
        return P5Context.instance.map(ratioY, 0, 1, this.minY, this.maxY);
    }

    /**
     * Map a coordinate vector to percentage values relative to the minimum and maximum x-axis and y-axis values.
     *
     * @param coordinateVector - The coordinate vector.
     */
    public mapCoordinateToRatio(coordinateVector: p5.Vector): p5.Vector {
        const coordinateX: number = this.mapCoordinateToRatioX(coordinateVector.x);
        const coordinateY: number = this.mapCoordinateToRatioY(coordinateVector.y);
        return P5Context.instance.createVector(coordinateX, coordinateY);
    }

    /**
     * Map a coordinate value on the x-axis to a percentage value relative to the minimum and maximum x-axis values.
     *
     * @param coordinateX - The coordinate value on the x-axis.
     */
    public mapCoordinateToRatioX(coordinateX: number): number {
        return P5Context.instance.map(coordinateX, this.minX, this.maxX, 0, 1);
    }

    /**
     * Map a coordinate value on the y-axis to a percentage value relative to the minimum and maximum y-axis values.
     *
     * @param coordinateY - The coordinate value on the y-axis.
     */
    public mapCoordinateToRatioY(coordinateY: number): number {
        return P5Context.instance.map(coordinateY, this.minY, this.maxY, 0, 1);
    }
}
