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

import { Context, Coordinate, GraphicsContext } from 'sketch';

import { Geometry, GeometryConfig } from './geometry';

// TODO - unit tests
// TODO - documentation
export interface PointConfig extends GeometryConfig {
    readonly COORDINATE?: Coordinate;
}

// TODO - unit tests
// TODO - documentation
export class Point extends Geometry {
    readonly #COORDINATE: Coordinate;

    public constructor(config: PointConfig) {
        super(config);
        if (config.COORDINATE) {
            this.#COORDINATE = config.COORDINATE.clone();
        } else {
            this.#COORDINATE = new Coordinate();
        }
    }

    public override getPosition(context: Context): P5Lib.Vector {
        return this.#COORDINATE.getPosition(context);
    }

    public override setPosition(position: P5Lib.Vector, context?: Context): void {
        this.#COORDINATE.set(position, context);
    }

    public override getX(context: Context): number {
        return this.#COORDINATE.getX(context);
    }

    public override setX(x: number, context?: Context): void {
        this.#COORDINATE.setX(x, context);
    }

    public override getY(context: Context): number {
        return this.#COORDINATE.getY(context);
    }

    public override setY(y: number, context?: Context): void {
        this.#COORDINATE.setY(y, context);
    }

    public override render(context: GraphicsContext): void {
        this.style.applyStyle(context);
        const position: P5Lib.Vector = this.#COORDINATE.getPosition(context);
        context.GRAPHICS.point(position.x, position.y);
    }

    public override redraw(): void {
        /* empty */
    }
}
