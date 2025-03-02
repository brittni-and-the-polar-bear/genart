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

import P5Lib from 'p5';

import { P5Context } from 'p5-context';

import { GraphicsContext } from '../graphics';

export class Coordinate {
    readonly #CONTEXT_POS: P5Lib.Vector;
    readonly #RATIO_POS: P5Lib.Vector;

    public constructor(x: number, y: number, z: number, context: GraphicsContext);
    public constructor(x: number, y: number, context: GraphicsContext);
    public constructor(position: P5Lib.Vector, context: GraphicsContext);
    public constructor(arg1: P5Lib.Vector | number,
                       arg2: number | GraphicsContext,
                       arg3?: number | GraphicsContext,
                       arg4?: GraphicsContext) {
        const p5: P5Lib = P5Context.p5;
        this.#CONTEXT_POS = p5.createVector();
        this.#RATIO_POS = p5.createVector();

        if (arg1 instanceof P5Lib.Vector && arg2 instanceof GraphicsContext) {
            const position: P5Lib.Vector = arg1;
            const context: GraphicsContext = arg2;
            this.#CONTEXT_POS = position.copy();
            this.#remapRatio(context);
        } else if (typeof arg1 === 'number' &&
                    typeof arg2 === 'number' &&
                    arg3 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const context: GraphicsContext = arg3;
            this.#CONTEXT_POS = p5.createVector(x, y);
            this.#remapRatio(context);
        } else if (typeof arg1 === 'number' &&
                    typeof arg2 === 'number' &&
                    typeof arg3 === 'number' &&
                    arg4 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const z: number = arg3;
            const context: GraphicsContext = arg4;
            this.#CONTEXT_POS = p5.createVector(x, y, z);
            this.#remapRatio(context);
        }
    }

    public copy(context: GraphicsContext): Coordinate {
        return new Coordinate(this.#CONTEXT_POS, context);
    }

    public get x(): number {
        return this.#CONTEXT_POS.x;
    }

    public get y(): number {
        return this.#CONTEXT_POS.y;
    }

    public get z(): number {
        return this.#CONTEXT_POS.z;
    }

    public get position(): P5Lib.Vector {
        return this.#CONTEXT_POS.copy();
    }

    public get ratioX(): number {
        return this.#RATIO_POS.x;
    }

    public get ratioY(): number {
        return this.#RATIO_POS.y;
    }

    public get ratioZ(): number {
        return this.#RATIO_POS.z;
    }

    public get ratio(): P5Lib.Vector {
        return this.#RATIO_POS.copy();
    }

    public setX(value: number, context: GraphicsContext): void {
        this.#CONTEXT_POS.x = value;
        this.#remapRatio(context);
    }

    public setY(value: number, context: GraphicsContext): void {
        this.#CONTEXT_POS.y = value;
        this.#remapRatio(context);
    }

    public setZ(value: number, context: GraphicsContext): void {
        this.#CONTEXT_POS.z = value;
        this.#remapRatio(context);
    }

    public set(x: number, y: number, z: number, context: GraphicsContext): void;
    public set(x: number, y: number, context: GraphicsContext): void;
    public set(position: P5Lib.Vector, context: GraphicsContext): void;
    public set(arg1: P5Lib.Vector | number,
               arg2?: number | GraphicsContext,
               arg3?: number | GraphicsContext,
               arg4?: GraphicsContext): void {
        if (arg1 instanceof P5Lib.Vector && arg2 instanceof GraphicsContext) {
            const position: P5Lib.Vector = arg1;
            const context: GraphicsContext = arg2;
            this.#CONTEXT_POS.set(position);
            this.#remapRatio(context);
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number' &&
            arg3 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const context: GraphicsContext = arg3;
            this.#CONTEXT_POS.set(x, y);
            this.#remapRatio(context);
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number' &&
            typeof arg3 === 'number' &&
            arg4 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const z: number = arg3;
            const context: GraphicsContext = arg4;
            this.#CONTEXT_POS.set(x, y, z);
            this.#remapRatio(context);
        }
    }

    public setRatioX(value: number, context: GraphicsContext): void {
        this.#RATIO_POS.x = value;
        this.remap(context);
    }

    public setRatioY(value: number, context: GraphicsContext): void {
        this.#RATIO_POS.y = value;
        this.remap(context);
    }

    public setRatioZ(value: number, context: GraphicsContext): void {
        this.#RATIO_POS.z = value;
        this.remap(context);
    }

    public setRatio(x: number, y: number, z: number, context: GraphicsContext): void;
    public setRatio(x: number, y: number, context: GraphicsContext): void;
    public setRatio(position: P5Lib.Vector, context: GraphicsContext): void;
    public setRatio(arg1: P5Lib.Vector | number,
               arg2?: number | GraphicsContext,
               arg3?: number | GraphicsContext,
               arg4?: GraphicsContext): void {
        if (arg1 instanceof P5Lib.Vector && arg2 instanceof GraphicsContext) {
            const position: P5Lib.Vector = arg1;
            const context: GraphicsContext = arg2;
            this.#RATIO_POS.set(position);
            this.remap(context);
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number' &&
            arg3 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const context: GraphicsContext = arg3;
            this.#RATIO_POS.set(x, y);
            this.remap(context);
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number' &&
            typeof arg3 === 'number' &&
            arg4 instanceof GraphicsContext) {
            const x: number = arg1;
            const y: number = arg2;
            const z: number = arg3;
            const context: GraphicsContext = arg4;
            this.#RATIO_POS.set(x, y, z);
            this.remap(context);
        }
    }

    public remap(context: GraphicsContext): void {
        this.#CONTEXT_POS.set(context.coordinateMapper.mapRatioToCoordinate(this.#RATIO_POS));
    }

    #remapRatio(context: GraphicsContext): void {
        this.#RATIO_POS.set(context.coordinateMapper.mapCoordinateToRatio(this.#CONTEXT_POS));
    }
}
