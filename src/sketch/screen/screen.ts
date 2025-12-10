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

import { GraphicsContext, GraphicsContextHandler } from '../graphics';
import { P5Context } from '../p5_context';

import { ScreenConfig } from './screen-config';

// TODO - Complete Canvas class implementation.

// TODO - documentation
export abstract class Screen {
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

    #saveCount: number = 0;

    /**
     * The constructor for the Screen class.
     *
     * @param config - The configuration for the screen.
     *
     * @protected
     */
    protected constructor(config: ScreenConfig) {
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

    static get #TIMEOUT_MS(): number {
        return 1_000;
    }

    // TODO - complete
    // public draw(): void {
    //     if (this.isActive) {
    //         const p5Ctx: p5 = P5Context.instance;
    //         this.drawToActiveGraphics();
    //         p5Ctx.imageMode(p5Ctx.CENTER);
    //         const canvasCenter: p5.Vector = Canvas.center;
    //         const { width, height } = this.#calculateGraphicsDimensions();
    //
    //         p5Ctx.image(
    //             this.#GRAPHICS_HANDLER.activeGraphics,
    //             canvasCenter.x,
    //             canvasCenter.y,
    //             width,
    //             height
    //         );
    //     }
    // }

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

    public saveActiveGraphics(): void {
        this.#saveGraphics(this.#GRAPHICS_HANDLER.activeContext, Screen.#TIMEOUT_MS)
            .then(
                (filename: string): void => {
                    console.log(`Saved file: ${filename}.`);
                },
                (error: unknown): void => {
                    console.error(error);
                }
            );
    }

    public saveAllGraphics(): void {
        this.#saveAllGraphics()
            .then((): void => {
                console.log('All graphics saved.');
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

    // TODO - complete
    // #calculateGraphicsDimensions(): { width: number; height: number; } {
    //     const graphicsContext: GraphicsContext = this.#GRAPHICS_HANDLER.activeContext;
    //     const graphicsRatio: AspectRatio = graphicsContext.aspectRatio;
    //
    //     let width: number = graphicsRatio.getWidth(Canvas.resolution, true);
    //     let height: number = graphicsRatio.getHeight(Canvas.resolution, true);
    //
    //     if (width > Canvas.width) {
    //         width = graphicsRatio.getWidth(Canvas.width, true);
    //         height = graphicsRatio.getHeight(Canvas.width, true);
    //     }
    //
    //     if (height > Canvas.height) {
    //         width = graphicsRatio.getWidth(Canvas.height, true);
    //         height = graphicsRatio.getHeight(Canvas.height, true);
    //     }
    //
    //     return { width: width, height: height };
    // }

    private get saveCount(): number {
        return this.#saveCount++;
    }

    #buildFileName(graphicsContext: GraphicsContext): string {
        const saveCount: string = this.saveCount.toString().padStart(3, '0');
        return `${this.NAME}_${saveCount}_${graphicsContext.NAME}.png`;
    }

    async #saveGraphics(graphicsContext: GraphicsContext, timeout: number): Promise<string> {
        this.drawToGraphics(graphicsContext);
        await this.#timeout(timeout);
        const filename: string = this.#buildFileName(graphicsContext);
        P5Context.instance.save(graphicsContext.GRAPHICS, filename);
        await this.#timeout(timeout);
        return filename;
    }

    async #timeout(milliseconds: number): Promise<void> {
        await new Promise<void>((): void => {
            setTimeout((): void => {}, milliseconds);
        });
    }

    // TODO - Does this work?
    // TODO - Do all graphics save with the correct size and elements?
    // TODO - Do all graphics save in parallel?
    async #saveAllGraphics(): Promise<void> {
        const promises: Promise<void>[] = [];

        for (const context of this.#GRAPHICS_HANDLER.contexts) {
            promises.push(
                this.#saveGraphics(context, Screen.#TIMEOUT_MS)
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
