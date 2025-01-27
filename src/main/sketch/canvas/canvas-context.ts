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

import { AspectRatio } from '../aspect-ratio';
import { Context, ContextConfig } from '../context';

export class CanvasContext extends Context {
    // TODO - container mapper to Canvas

    public constructor(config: ContextConfig) {
        super(config);
        this.#destroyCanvas();
        P5Context.p5.createCanvas(this.width, this.height, config.RENDER_TYPE);
        this.#decorateCanvas();
    }

    public resize(): void {
        if (this.matchContainerRatio) {
            this.updateAspectRatio(CanvasContext.#getWindowAspectRatio());
        }

        this.#decorateCanvas();
    }

    public updateAspectRatio(aspectRatio: AspectRatio): void {
        this.aspectRatio = aspectRatio;
        this.#updateCanvas();
    }

    public updateResolution(resolution: number): void {
        this.resolution = resolution;
        this.#updateCanvas();
    }

    static #getWindowAspectRatio(): AspectRatio {
        const windowWidth: number = P5Context.p5.windowWidth;
        const windowHeight: number = P5Context.p5.windowHeight;
        return (new AspectRatio(windowWidth, windowHeight, 'window'));
    }

    /**
     * Decorates the canvas with the proper attributes according to current canvas
     * size and aspect ratio and current browser window size.
     */
    #decorateCanvas(): void {
        const p5: P5Lib = P5Context.p5;
        const canvas: P5Lib.Element | null = p5.select('canvas');

        if (canvas) {
            const goalRatio: number = this.aspectRatio.WIDTH_RATIO / this.aspectRatio.HEIGHT_RATIO;
            const actualRatio: number = p5.windowWidth / p5.windowHeight;

            if (goalRatio < actualRatio) {
                canvas.attribute('style', 'height: 100vh;');
            } else {
                canvas.attribute('style', 'width: 100vw;');
            }
        }
    }

    #destroyCanvas(): void {
        const canvas: P5Lib.Element | null = P5Context.p5.select('canvas');
        canvas?.remove();
    }

    #updateCanvas(): void {
        P5Context.p5.resizeCanvas(this.width, this.height);
        this.#decorateCanvas();
    }
}
