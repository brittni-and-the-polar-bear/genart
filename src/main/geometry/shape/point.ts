/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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

import { Random } from 'random';
import { Coordinate, CoordinateMode, P5Context } from 'sketch-context';

import { Geometry, GeometryConfig } from './geometry';

// TODO - unit tests
// TODO - documentation
export interface PointConfig extends GeometryConfig {
    readonly position?: P5Lib.Vector | { x: number; y: number; };
}

// TODO - unit tests
// TODO - documentation
export class Point extends Geometry {
    readonly #COORDINATE: Coordinate = new Coordinate();

    public constructor(config: PointConfig) {
        super(config);

        if (config.position) {
            if (config.position instanceof P5Lib.Vector) {
                this.#COORDINATE.setPosition(config.position, config.coordinateMode);
            } else {
                this.#COORDINATE.setX(config.position.x, config.coordinateMode);
                this.#COORDINATE.setY(config.position.y, config.coordinateMode);
            }
        } else {
            this.#COORDINATE.setX(Random.randomFloat(0, 1), CoordinateMode.RATIO);
            this.#COORDINATE.setY(Random.randomFloat(0, 1), CoordinateMode.RATIO);
        }
    }

    public override setPosition(position: P5Lib.Vector, mode: CoordinateMode): void {
        this.#COORDINATE.setPosition(position, mode);
    }

    public override getX(mode: CoordinateMode): number {
        return this.#COORDINATE.getX(mode);
    }

    public override setX(x: number, mode: CoordinateMode): void {
        this.#COORDINATE.setX(x, mode);
    }

    public override getY(mode: CoordinateMode): number {
        return this.#COORDINATE.getY(mode);
    }

    public override setY(y: number, mode: CoordinateMode): void {
        this.#COORDINATE.setY(y, mode);
    }

    public override canvasRedraw(): void {
        this.#COORDINATE.remap();
    }

    public override draw(): void {
        const p5: P5Lib = P5Context.p5;
        this.style.applyStyle();
        const x = this.#COORDINATE.getX(CoordinateMode.CANVAS);
        const y: number = this.#COORDINATE.getY(CoordinateMode.CANVAS);
        p5.point(x, y);
    }
}
