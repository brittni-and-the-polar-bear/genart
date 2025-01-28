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

import { AspectRatio } from '../aspect-ratio';
import {Context, ContextConfig} from '../context';

// TODO - GraphicsContext - register as CanvasUpdateListener on screen
// TODO - on screen canvas update - if matching, update ratio.
// TODO - canvas updates hanled by screen handler

// TODO - GraphicsContextBuilder???
export class GraphicsContext extends Context {
    readonly #GRAPHICS: P5Lib.Graphics;

    public constructor(config: ContextConfig) {
        super(config);
        // TODO - fix width and height and renderer.
        this.#GRAPHICS = P5Context.p5.createGraphics(100, 100);
    }

    public get NAME(): string {
        return 'name';
    }

    public get GRAPHICS(): P5Lib.Graphics {
        return this.#GRAPHICS;
    }

    resize(): void {
        console.log('resize');
    }

    public updateAspectRatio(aspectRatio: AspectRatio): void {
        console.log(aspectRatio);
    }

    public updateResolution(resolution: number): void {
        console.log(resolution);
    }
    // TODO - container mapper to parent
    // TODO - container mapper to Canvas
}
