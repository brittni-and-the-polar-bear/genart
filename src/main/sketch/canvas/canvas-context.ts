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
import { CanvasScreen, ScreenHandler } from '../screen';

// TODO - documentation
// TODO - release notes
// TODO - unit tests

export class CanvasContext extends Context {
    // TODO - container mapper to Canvas

    readonly #SCREEN_HANDLER: ScreenHandler = new ScreenHandler();

    public constructor(config: ContextConfig) {
        super(config);
        P5Context.p5.createCanvas(this.width, this.height, this.RENDER_TYPE);
        this.resize();
    }

    public get currentScreen(): string {
        return this.#SCREEN_HANDLER.currentScreen;
    }

    public set currentScreen(name: string) {
        this.#SCREEN_HANDLER.currentScreen = name;
    }

    public override get name(): string {
        if (!super.name) {
            const p5: P5Lib = P5Context.p5;
            const canvas: P5Lib.Element | null = p5.select('canvas');

            if (canvas) {
                return canvas.id();
            }
        }

        return super.name;
    }

    public override set name(name: string) {
        super.name = name;
        this.#decorateCanvas();
    }

    public draw(): void {
        this.#SCREEN_HANDLER.draw();
    }

    public keyPressed(): void {
        this.#SCREEN_HANDLER.keyPressed();
    }

    public mousePressed(): void {
        this.#SCREEN_HANDLER.mousePressed();
    }

    public addScreen(screen: CanvasScreen): void {
        this.#SCREEN_HANDLER.addScreen(screen);
    }

    public override resize(): void {
        if (this.matchContainerRatio) {
            this.updateAspectRatio(CanvasContext.#getWindowAspectRatio());
        }

        this.#decorateCanvas();
        this.#SCREEN_HANDLER.publishRedraw();
    }

    public override updateAspectRatio(aspectRatio: AspectRatio): void {
        this.aspectRatio = aspectRatio;
        this.#updateCanvas();
    }

    public override updateResolution(resolution: number): void {
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

            if (this.name) {
                canvas.attribute('id', this.name);
            }
        }
    }

    #updateCanvas(): void {
        P5Context.p5.resizeCanvas(this.width, this.height);
        this.#decorateCanvas();
        this.#SCREEN_HANDLER.publishRedraw();
    }
}
