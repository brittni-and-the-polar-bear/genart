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

import { GraphicsContextHandler } from '../graphics';

import { ScreenConfig } from './screen-config';

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
     * The minimum visible x-axis coordinate on the screen.
     */
    public get minX(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.minX;
    }

    /**
     * The minimum visible y-axis coordinate on the screen.
     */
    public get minY(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.minY;
    }

    /**
     * The maximum visible x-axis coordinate on the screen.
     */
    public get maxX(): number {
        return this.GRAPHICS_HANDLER.activeContext.COORDINATE_MAPPER.maxX;
    }

    /**
     * The maximum visible y-axis coordinate on the screen.
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
}
