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

import { Color } from 'color';
import { P5Context } from 'p5-context';
import { Context } from 'sketch';

// TODO - release notes
// TODO - documentation
// TODO - unit tests
export class GeometryStyle {
    public fill: Color | null = new Color(255, 255, 255);
    public stroke: Color | null = new Color(0, 0, 0);

    #strokeMultiplier: number = 1;

    public constructor(fill?: Color | null, stroke?: Color | null) {
        this.fill = fill ?? null;
        this.stroke = stroke ?? null;
    }

    public get strokeMultiplier(): number {
        return this.#strokeMultiplier;
    }

    public set strokeMultiplier(multiplier: number) {
        this.#strokeMultiplier = Math.abs(multiplier);
    }

    public applyStyle(context: Context): void {
        this.applyFill();
        this.applyStroke(context);
    }

    public applyFill(): void {
        const p5: P5Lib = P5Context.p5;

        if (this.fill) {
            p5.fill(this.fill.color);
        } else {
            p5.noFill();
        }
    }

    public applyStroke(context: Context): void {
        const p5: P5Lib = P5Context.p5;

        if (this.stroke) {
            p5.strokeWeight(context.defaultStrokeWeight * this.#strokeMultiplier);
            p5.stroke(this.stroke.color);
        } else {
            p5.noStroke();
        }
    }
}
