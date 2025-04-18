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

import { P5Context } from 'p5-context';
import { Context, Coordinate, GraphicsContext } from 'sketch';

import { Geometry, GeometryConfig } from './geometry';

export interface CircleConfig extends GeometryConfig {
    readonly POSITION:
        {
            POSITION_A: Coordinate;
            POSITION_B: Coordinate;
        } | {
            CENTER: Coordinate;
            DIAMETER: number;
        }
}

export class Circle extends Geometry {
    #POSITION_A: Coordinate;
    #POSITION_B: Coordinate;

    public constructor(config: CircleConfig) {
        super(config);
        if ('POSITION_A' in config.POSITION && 'POSITION_B' in config.POSITION) {
            this.#POSITION_A = config.POSITION.POSITION_A;
            this.#POSITION_B = config.POSITION.POSITION_B;
        } else {
            this.#POSITION_A = new Coordinate();
            this.#POSITION_B = new Coordinate();
            this.#setPositionCoordinates(config.POSITION.CENTER.getPosition(config.CONTEXT), config.POSITION.DIAMETER, config.CONTEXT);
        }
    }

    public override getPosition(context: Context): P5Lib.Vector {
        return this.#getCenter(context);
    }

    public override setPosition(position: P5Lib.Vector, context: Context): void {
        this.#setPositionCoordinates(position, this.getDiameter(context), context);
    }

    public override getX(context: Context): number {
        return this.#getCenter(context).x;
    }

    public override setX(x: number, context: Context): void {
        const center: P5Lib.Vector = this.#getCenter(context);
        this.setPosition(P5Context.p5.createVector(x, center.y), context);
    }

    public override getY(context: Context): number {
        return this.#getCenter(context).y;
    }

    public override setY(y: number, context: Context): void {
        const center: P5Lib.Vector = this.#getCenter(context);
        this.setPosition(P5Context.p5.createVector(center.x, y), context);
    }

    public getDiameter(context: Context): number {
        const a: P5Lib.Vector = this.#POSITION_A.getPosition(context);
        const b: P5Lib.Vector = this.#POSITION_B.getPosition(context);
        return P5Context.p5.dist(a.x, a.y, b.x, b.y);
    }

    public override render(context: GraphicsContext): void {
        this.style.applyStyle(context);
        const center: P5Lib.Vector = this.#getCenter(context);
        const diameter: number = this.getDiameter(context);
        context.GRAPHICS.circle(center.x, center.y, diameter);
    }

    public override redraw(): void {
        /* empty */
    }

    #getCenter(context: Context): P5Lib.Vector {
        const a: P5Lib.Vector = this.#POSITION_A.getPosition(context);
        const b: P5Lib.Vector = this.#POSITION_B.getPosition(context);
        const centerX: number = (a.x + b.x) / 2;
        const centerY: number = (a.y + b.y) / 2;
        return P5Context.p5.createVector(centerX, centerY);
    }

    #setPositionCoordinates(center: P5Lib.Vector, diameter: number, context: Context): void {
        this.#POSITION_A.setX(center.x + (Math.cos(0) * (diameter / 2.0)), context);
        this.#POSITION_A.setY(center.y + (Math.sin(0) * (diameter / 2.0)), context);
        this.#POSITION_B.setX(center.x + (Math.cos(Math.PI) * (diameter / 2.0)), context);
        this.#POSITION_B.setY(center.y + (Math.sin(Math.PI) * (diameter / 2.0)), context);
    }
}
