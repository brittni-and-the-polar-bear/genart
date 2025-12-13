/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import p5 from 'p5';

import { AspectRatio } from '../aspect_ratio';
import { Context, ContextConfig } from '../context';
import { P5Context } from '../p5_context';
import { CanvasScreen, CanvasScreenHandler } from '../screen';

/**
 * Context class for managing a p5.js canvas.
 *
 * @see {@link Context}
 *
 * @since 2.0.0
 *
 * @category Canvas
 */
export class CanvasContext extends Context {
    readonly #SCREEN_HANDLER: CanvasScreenHandler = new CanvasScreenHandler();

    /**
     * The constructor for the CanvasContext class.
     *
     * @param config {ContextConfig} - The configuration for the context.
     *
     * @since 2.0.0
     */
    public constructor(config: ContextConfig) {
        super(config);
        P5Context.instance.createCanvas(this.width, this.height, this.RENDER_TYPE);
        this.resize();
    }

    /**
     * @inheritDoc
     * @override
     */
    public override get NAME(): string {
        if (!super.NAME) {
            const p5Ctx: p5 = P5Context.instance;
            const canvas: p5.Element | null = p5Ctx.select('canvas');

            if (canvas) {
                return canvas.id();
            }
        }

        return super.NAME;
    }

    /**
     * @returns {string} The name of the currently active screen.
     *
     * @since 2.0.0
     */
    public get currentScreen(): string {
        return this.#SCREEN_HANDLER.currentScreen;
    }

    /**
     * Sets the active screen to the screen with the given name.
     *
     * @param name {string} - The name of the screen to activate.
     *
     * @see {@link CanvasScreenHandler.currentScreen}
     *
     * @since 2.0.0
     */
    public set currentScreen(name: string) {
        this.#SCREEN_HANDLER.currentScreen = name;
    }

    /**
     * Adds a {@link CanvasScreen} to the underlying {@link CanvasScreenHandler} object.
     *
     * @param screen {CanvasScreen} - The screen to add.
     *
     * @returns {boolean} - `true` if the screen was added, `false` if a screen with the same name already exists.
     *
     * @see {@link CanvasScreenHandler.addScreen}
     *
     * @since 2.0.0
     */
    public addScreen(screen: CanvasScreen): boolean {
        return this.#SCREEN_HANDLER.addScreen(screen);
    }

    /**
     * @inheritDoc
     * @override
     */
    public override resize(): void {
        if (this.matchContainerRatio) {
            this.updateAspectRatio(CanvasContext.#getWindowAspectRatio());
        }

        this.#decorateCanvas();
    }

    /**
     * @inheritDoc
     * @override
     */
    public override updateAspectRatio(aspectRatio: AspectRatio): void {
        this.aspectRatio = aspectRatio;
        this.#updateCanvas();
    }

    /**
     * @inheritDoc
     * @override
     */
    public override updateResolution(resolution: number): void {
        this.resolution = resolution;
        this.#updateCanvas();
    }

    /**
     * Draws the active screen.
     *
     * @returns {void}
     *
     * @see {@link CanvasScreenHandler.draw}
     *
     * @since 2.0.0
     */
    public draw(): void {
        this.#SCREEN_HANDLER.draw();
    }

    /**
     * Handles key presses for the active screen.
     *
     * @returns {void}
     *
     * @see {@link CanvasScreenHandler.keyPressed}
     *
     * @since 2.0.0
     */
    public keyPressed(): void {
        this.#SCREEN_HANDLER.keyPressed();
    }

    /**
     * Handles mouse presses for the active screen.
     *
     * @returns {void}
     *
     * @see {@link CanvasScreenHandler.mousePressed}
     *
     * @since 2.0.0
     */
    public mousePressed(): void {
        this.#SCREEN_HANDLER.mousePressed();
    }

    /**
     * Handles mouse drags for the active screen.
     *
     * @returns {void}
     *
     * @see {@link CanvasScreenHandler.mouseDragged}
     *
     * @since 2.0.0
     */
    public mouseDragged(): void {
        this.#SCREEN_HANDLER.mouseDragged();
    }

    /**
     * Returns the aspect ratio of the current browser window.
     *
     * @returns {AspectRatio} The aspect ratio of the current browser window.
     *
     * @private
     */
    static #getWindowAspectRatio(): AspectRatio {
        const windowWidth: number = P5Context.instance.windowWidth;
        const windowHeight: number = P5Context.instance.windowHeight;
        return (new AspectRatio(windowWidth, windowHeight, 'window'));
    }

    /**
     * Updates the canvas size and aspect ratio according to the current configuration.
     *
     * @returns {void}
     *
     * @private
     */
    #updateCanvas(): void {
        P5Context.instance.resizeCanvas(this.width, this.height);
        this.#decorateCanvas();
    }

    /**
     * Decorates the canvas with the proper attributes according to current canvas
     * size and aspect ratio and current browser window size.
     *
     * @returns {void}
     *
     * @private
     */
    #decorateCanvas(): void {
        const p5Ctx: p5 = P5Context.instance;
        const canvas: p5.Element | null = p5Ctx.select('canvas');

        if (canvas) {
            const goalRatio: number = this.aspectRatio.WIDTH_RATIO / this.aspectRatio.HEIGHT_RATIO;
            const actualRatio: number = p5Ctx.windowWidth / p5Ctx.windowHeight;

            if (goalRatio < actualRatio) {
                canvas.attribute('style', 'height: 100vh;');
            } else {
                canvas.attribute('style', 'width: 100vw;');
            }

            if (this.NAME) {
                canvas.attribute('id', this.NAME);
            }
        }
    }
}
