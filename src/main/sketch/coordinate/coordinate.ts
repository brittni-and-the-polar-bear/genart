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

import { Context } from '../context';

// TODO - documentation
// TODO - release notes
// TODO - unit tests
// TODO - copilot code review
export class Coordinate {
    readonly #RATIO_POS: P5Lib.Vector;

    public constructor(position?: P5Lib.Vector, context?: Context);
    public constructor(x: number, y: number, context?: Context);
    public constructor(x: number, y: number, z: number, context?: Context);
    public constructor(arg1?: P5Lib.Vector | number,
                       arg2?: number | Context,
                       arg3?: number | Context,
                       arg4?: Context) {
        this.#RATIO_POS = P5Context.p5.createVector();
        this.#setRatio(arg1, arg2, arg3, arg4);
    }

    public clone(): Coordinate {
        return new Coordinate(this.#RATIO_POS);
    }

    public getX(context: Context): number {
        return context.coordinateMapper.mapRatioToCoordinateX(this.#RATIO_POS.x);
    }

    public getY(context: Context): number {
        return context.coordinateMapper.mapRatioToCoordinateY(this.#RATIO_POS.y);
    }

    public getPosition(context: Context): P5Lib.Vector {
        return context.coordinateMapper.mapRatioToCoordinate(this.#RATIO_POS);
    }

    public get ratioX(): number {
        return this.#RATIO_POS.x;
    }

    public set ratioX(value: number) {
        this.#RATIO_POS.x = value;
    }

    public get ratioY(): number {
        return this.#RATIO_POS.y;
    }

    public set ratioY(value: number) {
        this.#RATIO_POS.y = value;
    }

    public get ratio(): P5Lib.Vector {
        return this.#RATIO_POS;
    }

    public set ratio(value: P5Lib.Vector) {
        this.#RATIO_POS.set(value);
    }

    public equals(other: Coordinate): boolean {
        return this.#RATIO_POS.equals(other.#RATIO_POS);
    }

    public setX(value: number, context?: Context): void {
        if (context) {
            this.#RATIO_POS.x = context.coordinateMapper.mapCoordinateToRatioX(value);
        } else {
            this.#RATIO_POS.x = value;
        }
    }

    public setY(value: number, context?: Context): void {
        if (context) {
            this.#RATIO_POS.y = context.coordinateMapper.mapCoordinateToRatioY(value);
        } else {
            this.#RATIO_POS.y = value;
        }
    }

    public set(position: P5Lib.Vector, context?: Context): void;
    public set(x: number, y: number, context?: Context): void;
    public set(x: number, y: number, z: number, context?: Context): void;
    public set(arg1: P5Lib.Vector | number,
               arg2?: number | Context,
               arg3?: number | Context,
               arg4?: Context): void {
        this.#setRatio(arg1, arg2, arg3, arg4);
    }

    #setRatio(arg1?: P5Lib.Vector | number,
              arg2?: number | Context,
              arg3?: number | Context,
              arg4?: Context): void {
        const p5: P5Lib = P5Context.p5;

        if (arg1 instanceof P5Lib.Vector) {
            const position: P5Lib.Vector = arg1;

            if (arg2 && arg2 instanceof Context) {
                const ratio: P5Lib.Vector = arg2.coordinateMapper.mapCoordinateToRatio(position);
                this.#RATIO_POS.set(ratio);
            } else {
                this.#RATIO_POS.set(position);
            }
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number' &&
            typeof arg3 === 'number') {
            const position: P5Lib.Vector = p5.createVector(arg1, arg2, arg3);

            if (arg4) {
                const ratio: P5Lib.Vector = arg4.coordinateMapper.mapCoordinateToRatio(position);
                this.#RATIO_POS.set(ratio);
            } else {
                this.#RATIO_POS.set(position);
            }
        } else if (typeof arg1 === 'number' &&
            typeof arg2 === 'number') {
            const position: P5Lib.Vector = p5.createVector(arg1, arg2);

            if (arg3 && arg3 instanceof Context) {
                const ratio: P5Lib.Vector = arg3.coordinateMapper.mapCoordinateToRatio(position);
                this.#RATIO_POS.set(ratio);
            } else {
                this.#RATIO_POS.set(position);
            }
        }
    }
}
