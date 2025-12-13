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

import { ContextConfig } from '../context';
import { GraphicsContext } from '../graphics';

import { CanvasScreenConfig } from './canvas-screen-config';

/**
 * Builder for {@link CanvasScreenConfig} objects.
 *
 * @since 2.0.0
 *
 * @category Screen
 */
export class CanvasScreenConfigBuilder {
    /**
     * The name of the screen.
     *
     * @private
     */
    #name: string;

    /**
     * The {@link GraphicsContext} that is active on the screen.
     *
     * @private
     */
    #activeGraphics: GraphicsContext | null;

    /**
     * The {@link GraphicsContext} objects that are available on the screen.
     *
     * @private
     */
    #otherGraphics: GraphicsContext[];

    /**
     * The constructor for the CanvasScreenConfigBuilder class.
     *
     * @since 2.0.0
     */
    public constructor() {
        this.#name = '';
        this.#activeGraphics = null;
        this.#otherGraphics = [];
    }

    /**
     * Sets the name of the screen.
     *
     * @param name {string} - The name of the screen.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setName(name: string): this {
        this.#name = name;
        return this;
    }

    /**
     * Sets the {@link GraphicsContext} that is active on the screen.
     *
     * @param config {ContextConfig} - The {@link ContextConfig} of the {@link GraphicsContext} that is active on the screen.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setActiveGraphics(config: ContextConfig): this {
        this.#activeGraphics = new GraphicsContext(config);
        return this;
    }

    /**
     * Adds a {@link GraphicsContext} to the list of {@link GraphicsContext} objects that are available on the screen.
     *
     * @param config {ContextConfig} - The {@link ContextConfig} of the {@link GraphicsContext} to add.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public addGraphics(config: ContextConfig): this {
        this.#otherGraphics.push(new GraphicsContext(config));
        return this;
    }

    /**
     * Build a {@link CanvasScreenConfig} object from the builder's state.
     *
     * @returns {CanvasScreenConfig} A {@link CanvasScreenConfig} object.
     *
     * @throws {Error} If the name of the screen is not set. The name field can be set using {@link setName}.
     * @throws {Error} If the {@link GraphicsContext} that is active on the screen is not set. The activeGraphics field can be set using {@link setActiveGraphics}.
     *
     * @since 2.0.0
     */
    public build(): CanvasScreenConfig {
        if (!this.#name) {
            throw new Error('Error building CanvasScreenConfig: name must be set.');
        }

        if (!this.#activeGraphics) {
            throw new Error('Error building CanvasScreenConfig: activeGraphics must be set.');
        }

        return {
            NAME: this.#name,
            ACTIVE_GRAPHICS: this.#activeGraphics,
            OTHER_GRAPHICS: this.#otherGraphics
        };
    }
}
