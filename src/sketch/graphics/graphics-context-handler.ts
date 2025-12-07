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

import { StringMap } from '../../map';

import { GraphicsContext } from './graphics-context';

/**
 * A class for managing multiple {@link GraphicsContext} objects.
 *
 * @since 2.0.0
 *
 * @category Graphics
 */
export class GraphicsContextHandler {
    /**
     * A {@link StringMap} of {@link GraphicsContext} objects keyed by their unique names.
     *
     * @readonly
     * @private
     */
    readonly #CONTEXTS: StringMap<GraphicsContext> = new StringMap<GraphicsContext>();

    /**
     * The currently active {@link GraphicsContext}.
     *
     * @private
     */
    #activeContext: GraphicsContext;

    /**
     * The constructor for the {@link GraphicsContextHandler} class.
     *
     * @param activeContext {GraphicsContext} - The {@link GraphicsContext} to make active by default.
     * @param otherContexts {GraphicsContext[]} - An optional array of additional {@link GraphicsContext} objects to add to the handler.
     *
     * @constructor
     *
     * @since 2.0.0
     */
    public constructor(activeContext: GraphicsContext, otherContexts?: GraphicsContext[]) {
        this.#activeContext = activeContext;
        this.addContext(activeContext);

        if (otherContexts) {
            this.addContexts(otherContexts);
        }
    }

    /**
     * @returns {GraphicsContext} The currently active {@link GraphicsContext}.
     *
     * @since 2.0.0
     */
    public get activeContext(): GraphicsContext {
        return this.#activeContext;
    }

    /**
     * @returns {p5.Graphics} The p5.Graphics object associated with the active {@link GraphicsContext}.
     *
     * @since 2.0.0
     */
    public get activeGraphics(): p5.Graphics {
        return this.#activeContext.GRAPHICS;
    }

    /**
     * @returns {GraphicsContext[]} All {@link GraphicsContext} objects in the handler.
     *
     * @since 2.0.0
     */
    public get contexts(): GraphicsContext[] {
        return Array.from(this.#CONTEXTS.values());
    }

    /**
     * @returns {p5.Graphics[]} An array of the p5.Graphics objects associated with all {@link GraphicsContext} objects in the handler.
     *
     * @since 2.0.0
     */
    public get graphics(): p5.Graphics[] {
        return this.contexts.map((context: GraphicsContext): p5.Graphics => context.GRAPHICS);
    }

    /**
     * @returns {string[]} An array of the names of all {@link GraphicsContext} objects in the handler.
     *
     * @since 2.0.0
     */
    public get names(): string[] {
        return Array.from(this.#CONTEXTS.keys());
    }

    /**
     * Adds a {@link GraphicsContext} to the handler.
     *
     * @param context {GraphicsContext} - The {@link GraphicsContext} to add.
     *
     * @returns {boolean} `true` if the context was added successfully, `false` otherwise.
     *
     * @since 2.0.0
     */
    public addContext(context: GraphicsContext): boolean {
        return this.#CONTEXTS.setIfAbsent(context.NAME, context);
    }

    /**
     * Adds multiple {@link GraphicsContext} objects to the handler.
     *
     * @param contexts {GraphicsContext[]} - The {@link GraphicsContext} objects to add.
     *
     * @returns {boolean} `true` if all contexts were added successfully, `false` otherwise.
     *
     * @since 2.0.0
     */
    public addContexts(contexts: GraphicsContext[]): boolean {
        let success: boolean = true;

        for (const context of contexts) {
            success = success && this.addContext(context);
        }

        return success;
    }

    /**
     * Sets the active {@link GraphicsContext} to the context with the specified name.
     *
     * @param name {string} - The name of the {@link GraphicsContext} to set as active.
     *
     * @returns {void}
     *
     * @throws {Error} if the context with the specified name is not found.
     *
     * @since 2.0.0
     */
    public setActiveContext(name: string): void {
        const context: GraphicsContext | undefined = this.#CONTEXTS.get(name);

        if (!context) {
            throw new Error(`GraphicsContext with name '${name}' not found.`);
        }

        this.#activeContext = context;
    }
}
