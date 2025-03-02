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

import { Context, GraphicsContext, RedrawListener, Renderable } from 'sketch';

import { GeometryStyle } from '../style';

export interface GeometryConfig {
    readonly CONTEXT: Context;
    readonly STYLE?: GeometryStyle;
}

export abstract class Geometry implements RedrawListener, Renderable {
    #style: GeometryStyle;

    protected constructor(config: GeometryConfig) {
        this.#style = config.STYLE ?? (new GeometryStyle());
    }

    public abstract get position(): P5Lib.Vector;

    public abstract setPosition(position: P5Lib.Vector, context: Context): void;

    public abstract get x(): number;

    public abstract setX(x: number, context: Context): void;

    public abstract get y(): number;

    public abstract setY(y: number, context: Context): void;

    public abstract get z(): number;

    public abstract setZ(z: number, context: Context): void;

    public abstract render(context: Context): void;

    public abstract redraw(context: GraphicsContext): void;

    public get style(): GeometryStyle {
        return this.#style;
    }

    public set style(style: GeometryStyle) {
        this.#style = style;
    }
}
