/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
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
import { Canvas } from '../canvas';
import { GraphicsContext, GraphicsContextHandler } from '../graphics';
import { P5Context } from '../p5_context';

import { CanvasScreenConfig } from './canvas-screen-config';

/**
 * The abstract base class for screens that draw to a {@link GraphicsContext}.
 *
 * @since 2.0.0
 *
 * @category Screen
 */
export abstract class CanvasScreen {
    /**
     * The {@link GraphicsContextHandler} for the screen.
     *
     * @private
     * @readonly
     */
    readonly #GRAPHICS_HANDLER: GraphicsContextHandler;

    /**
     * The name of the screen.
     *
     * @private
     * @readonly
     */
    readonly #NAME: string;

    /**
     * Is the screen active?
     *
     * @default false
     * @private
     */
    #isActive: boolean = false;

    /**
     * The constructor for the Screen class.
     *
     * @param config - The configuration for the screen.
     *
     * @protected
     */
    protected constructor(config: CanvasScreenConfig) {
        this.#NAME = config.NAME;
        this.#GRAPHICS_HANDLER = new GraphicsContextHandler(config.ACTIVE_GRAPHICS, config.OTHER_GRAPHICS);
    }

    /**
     * @returns {string} The name of the screen.
     *
     * @since 2.0.0
     */
    public get NAME(): string {
        return this.#NAME;
    }

    /**
     * @returns {boolean} `true` if the screen is active, `false` otherwise.
     *
     * @since 2.0.0
     */
    public get isActive(): boolean {
        return this.#isActive;
    }

    /**
     * @returns {number} The minimum visible x-axis coordinate on the screen.
     *
     * @since 2.0.0
     */
    public get minX(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.minX;
    }

    /**
     * @returns {number} The minimum visible y-axis coordinate on the screen.
     *
     * @since 2.0.0
     */
    public get minY(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.minY;
    }

    /**
     * @returns {number} The maximum visible x-axis coordinate on the screen.
     *
     * @since 2.0.0
     */
    public get maxX(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.maxX;
    }

    /**
     * @returns {number} The maximum visible y-axis coordinate on the screen.
     *
     * @since 2.0.0
     */
    public get maxY(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.maxY;
    }

    /**
     * @returns {GraphicsContextHandler} The {@link GraphicsContextHandler} for the screen.
     *
     * @protected
     */
    protected get GRAPHICS_HANDLER(): GraphicsContextHandler {
        return this.#GRAPHICS_HANDLER;
    }

    /**
     * @returns {number} The timeout in milliseconds to wait before saving a graphics context.
     *
     * @private
     */
    static get #TIMEOUT_MS(): number {
        return 1_000;
    }

    /**
     * Draw the current active graphics context to the canvas if the screen is active.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public draw(): void {
        if (this.isActive) {
            const p5Ctx: p5 = P5Context.instance;
            this.drawToActiveGraphics();
            p5Ctx.imageMode(p5Ctx.CENTER);
            const canvasCenter: p5.Vector = Canvas.center;
            const { width, height } = this.#calculateGraphicsDimensions();

            p5Ctx.image(
                this.#GRAPHICS_HANDLER.activeGraphics,
                canvasCenter.x,
                canvasCenter.y,
                width,
                height
            );
        }
    }

    /**
     * Override this method to implement custom behavior when a key is pressed.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public keyPressed(): void {
        /* empty */
    }

    /**
     * Override this method to implement custom behavior when the mouse is pressed.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public mousePressed(): void {
        /* empty */
    }

    /**
     * Override this method to implement custom behavior when the mouse is dragged.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public mouseDragged(): void {
        /* empty */
    }

    /**
     * Activate the screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public activate(): void {
        this.#isActive = true;
    }

    /**
     * Deactivate the screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public deactivate(): void {
        this.#isActive = false;
    }

    /**
     * Draw the screen to the active graphics context.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public drawToActiveGraphics(): void {
        this.drawToGraphics(this.#GRAPHICS_HANDLER.activeContext);
    }

    /**
     * Save the active graphics context to a file.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public saveActiveGraphics(): void {
        this.#saveGraphics(this.#GRAPHICS_HANDLER.activeContext, CanvasScreen.#TIMEOUT_MS)
            .then((filename: string): void => {
                    console.log(`Saved file: ${filename}.`);
            })
            .catch((error: unknown): void => {
                console.error('Error saving graphics: ', error);
            });
    }

    /**
     * Save all graphics contexts to files.
     * This method is asynchronous and returns immediately.
     * The graphics contexts are saved in parallel, and the results are logged to the console.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public saveAllGraphics(): void {
        this.#saveAllGraphics()
            .then((): void => {
                console.log('All graphics saved.');
            })
            .catch((error: unknown): void => {
                console.error('Error saving graphics: ', error);
            });
    }

    /**
     * Draw the elements of the screen to the specified graphics context.
     *
     * @param context {GraphicsContext} - The graphics context to draw to.
     *
     * @returns {void}
     *
     * @abstract
     *
     * @since 2.0.0
     */
    public abstract drawToGraphics(context: GraphicsContext): void;

    /**
     * Calculates the dimensions of the graphics context that will be drawn to the canvas.
     * The dimensions are calculated based on the aspect ratio of the graphics context and the canvas resolution.
     * The dimensions are scaled down to fit within the canvas dimensions.
     *
     * @returns {{ width: number; height: number; }} - The dimensions of the graphics context.
     *
     * @private
     */
    #calculateGraphicsDimensions(): { width: number; height: number; } {
        const graphicsContext: GraphicsContext = this.#GRAPHICS_HANDLER.activeContext;
        const graphicsRatio: AspectRatio = graphicsContext.aspectRatio;

        let width: number = graphicsRatio.getWidth(Canvas.resolution, true);
        let height: number = graphicsRatio.getHeight(Canvas.resolution, true);

        if (width > Canvas.width) {
            width = graphicsRatio.getWidth(Canvas.width, true);
            height = graphicsRatio.getHeight(Canvas.width, true);
        }

        if (height > Canvas.height) {
            width = graphicsRatio.getWidth(Canvas.height, true);
            height = graphicsRatio.getHeight(Canvas.height, true);
        }

        return { width: width, height: height };
    }

    /**
     * Builds a timestamp string in the format `YYYY-MM-DD_HH-MM-SS`.
     *
     * @returns {string} - The timestamp string.
     *
     * @private
     */
    #buildTimestamp(): string {
        const p5Ctx: p5 = P5Context.instance;
        const year: string = p5Ctx.year().toString();
        const month: string = p5Ctx.month().toString().padStart(2, '0');
        const day: string = p5Ctx.day().toString().padStart(2, '0');
        const hour: string = p5Ctx.hour().toString().padStart(2, '0');
        const minute: string = p5Ctx.minute().toString().padStart(2, '0');
        const second: string = p5Ctx.second().toString().padStart(2, '0');
        return `${year}-${month}-${day}_${hour}-${minute}-${second}`;
    }

    /**
     * Builds a filename for a graphics context based on the screen name and graphics context name.
     * The filename is in the format `{timestamp}_{screen_name}_{graphics_context_name}.png`.
     *
     * @param graphicsContext {GraphicsContext} - The graphics context to build the filename for.
     *
     * @returns {string} - The filename.
     *
     * @private
     */
    #buildFileName(graphicsContext: GraphicsContext): string {
        return `${this.#buildTimestamp()}_${this.NAME}_${graphicsContext.NAME}.png`;
    }

    /**
     * Saves a graphics context to a file.
     * The graphics context is saved after a short delay to allow the canvas to update.
     * The filename is built based on the screen name and graphics context name.
     * The filename is in the format `{timestamp}_{screen_name}_{graphics_context_name}.png`.
     *
     * @param graphicsContext {GraphicsContext} - The graphics context to save.
     * @param timeout {number} - The delay in milliseconds to wait before saving the graphics context.
     *
     * @returns {Promise<string>} - A promise that resolves with the filename of the saved graphics context.
     *
     * @private
     */
    async #saveGraphics(graphicsContext: GraphicsContext, timeout: number): Promise<string> {
        this.drawToGraphics(graphicsContext);
        await this.#timeout(timeout);
        const filename: string = this.#buildFileName(graphicsContext);
        P5Context.instance.save(graphicsContext.GRAPHICS, filename);
        await this.#timeout(timeout);
        return filename;
    }

    /**
     * Pauses execution for the specified number of milliseconds.
     *
     * @param milliseconds {number} - The number of milliseconds to pause execution for.
     *
     * @returns {Promise<void>} - A promise that resolves when the timeout has expired.
     *
     * @private
     */
    async #timeout(milliseconds: number): Promise<void> {
        await new Promise<void>((resolve: (value: void | PromiseLike<void>) => void): void => {
            setTimeout((): void => { resolve(); }, milliseconds);
        });
    }


    // TODO - Does this work? Do all graphics save with the correct size and elements? Do all graphics save in parallel?
    /**
     * Saves all graphics contexts to files.
     * This method is asynchronous and returns immediately.
     * The graphics contexts are saved in parallel, and the results are logged to the console.
     *
     * @returns {Promise<void>} - A promise that resolves when all graphics contexts have been saved.
     *
     * @private
     */
    async #saveAllGraphics(): Promise<void> {
        const promises: Promise<void>[] = [];

        for (const context of this.#GRAPHICS_HANDLER.contexts) {
            promises.push(
                this.#saveGraphics(context, CanvasScreen.#TIMEOUT_MS)
                    .then(
                        (filename: string): void => {
                            console.log(`Saved file: ${filename}.`);
                        },
                        (error: unknown): void => {
                            console.error(error);
                        })
            );
        }

        await Promise.all(promises);
    }
}
