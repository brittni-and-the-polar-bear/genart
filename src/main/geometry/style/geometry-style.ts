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

import P5Lib from "p5";

import { Color } from 'color';
import { GraphicsContext } from 'sketch';

// TODO - release notes
// TODO - documentation
// TODO - unit tests
export class GeometryStyle {
    public fill: Color | null = new Color(255, 255, 255);
    public stroke: Color | null = new Color(0, 0, 0);

    #strokeMultiplier: number = 1;

    public constructor(fill?: Color | null,
                       stroke?: Color | null,
                       strokeMultiplier?: number) {
        this.fill = fill ?? null;
        this.stroke = stroke ?? null;
        this.strokeMultiplier = strokeMultiplier ?? 1;
    }

    public get strokeMultiplier(): number {
        return this.#strokeMultiplier;
    }

    public set strokeMultiplier(multiplier: number) {
        this.#strokeMultiplier = Math.abs(multiplier);
    }

    public applyStyle(context: GraphicsContext): void {
        this.applyFill(context);
        this.applyStroke(context);
    }

    public applyFill(context: GraphicsContext): void {
        const graphics: P5Lib.Graphics = context.GRAPHICS;

        if (this.fill) {
            graphics.fill(this.fill.color);
        } else {
            graphics.noFill();
        }
    }

    public applyStroke(context: GraphicsContext): void {
        const graphics: P5Lib.Graphics = context.GRAPHICS;

        if (this.stroke) {
            graphics.strokeWeight(context.defaultStrokeWeight * this.#strokeMultiplier);
            graphics.stroke(this.stroke.color);
        } else {
            graphics.noStroke();
        }
    }
}
