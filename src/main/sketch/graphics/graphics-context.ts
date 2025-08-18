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

import { Context, ContextConfig } from '../context';

// TODO - GraphicsContext - register as CanvasUpdateListener on screen
// TODO - on screen canvas update - if matching, update ratio.
// TODO - canvas updates hanled by screen handler

// TODO - GraphicsContextBuilder???
export class GraphicsContext extends Context {
    readonly #GRAPHICS: P5Lib.Graphics;

    public constructor(config: ContextConfig) {
        super(config);
        this.#GRAPHICS = P5Context.p5.createGraphics(this.width, this.height, this.RENDER_TYPE);
    }

    public override get NAME(): string {
        if (!super.NAME) {
            return this.#GRAPHICS.id();
        }

        return super.NAME;
    }

    public get GRAPHICS(): P5Lib.Graphics {
        return this.#GRAPHICS;
    }

    public override resize(): void {
        console.log('resize');
    }

    public override updateAspectRatio(): void {
        console.warn('The aspect ratio of a graphics context cannot be changed.');
    }

    public override updateResolution(): void {
        console.warn('The resolution of a graphics context cannot be changed.');
    }
}
