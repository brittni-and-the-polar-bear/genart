/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import {Context, Coordinate, GraphicsContext} from 'sketch';

import { Geometry, GeometryConfig } from './geometry';

export interface CircleConfig extends GeometryConfig {
    readonly POSITION_A: Coordinate;
    readonly POSITION_B: Coordinate;
}

export class Circle extends Geometry {
    #POSITION_A: Coordinate;
    #POSITION_B: Coordinate;

    public constructor(config: CircleConfig) {
        super(config);
    }

    public override get position(): P5Lib.Vector {
        return undefined;
    }

    public override redraw(context: GraphicsContext): void {
        this.#POSITION_A.remap(context);
        this.#POSITION_B.remap(context);
    }

    public override render(context: Context): void {
    }

    public override setPosition(position: P5Lib.Vector, context: Context): void {
    }

    public override setX(x: number, context: Context): void {
    }

    public override setY(y: number, context: Context): void {
    }

    public override setZ(z: number, context: Context): void {
    }

    public override get x(): number {
        return 0;
    }

    public override get y(): number {
        return 0;
    }

    public override get z(): number {
        return 0;
    }

    get #center(context: Context): P5Lib.Vector {
        const a: P5Lib.Vector = this.#POSITION_A.position;
    }
}
