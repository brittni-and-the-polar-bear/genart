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

import { GraphicsContext } from 'sketch';

import { Geometry } from './geometry';

export class Circle extends Geometry {
    get position(): P5Lib.Vector {
        return undefined;
    }

    redraw(context: GraphicsContext): void {
    }

    render(context: Context): void {
    }

    setPosition(position: P5Lib.Vector, context: Context): void {
    }

    setX(x: number, context: Context): void {
    }

    setY(y: number, context: Context): void {
    }

    setZ(z: number, context: Context): void {
    }

    get x(): number {
        return 0;
    }

    get y(): number {
        return 0;
    }

    get z(): number {
        return 0;
    }
}
