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
import { Context, ContextConfig } from '../context';
import { P5Context } from '../p5_context';

/**
 * Graphics context for handling a p5.Graphics instance.
 *
 * @since 2.0.0
 *
 * @category Graphics
 */
export class GraphicsContext extends Context {
    /**
     * The p5.Graphics instance backing this context.
     *
     * @readonly
     * @private
     */
    readonly #GRAPHICS: p5.Graphics;

    /**
     * The constructor for the GraphicsContext class.
     *
     * @constructor
     *
     * @param config {ContextConfig} - The configuration for the context.
     *
     * @since 2.0.0
     */
    public constructor(config: ContextConfig) {
        super(config);
        this.#GRAPHICS = P5Context.instance.createGraphics(this.width, this.height, this.RENDER_TYPE);
    }

    /**
     * @inheritDoc
     * @override
     */
    public override get NAME(): string {
        if (!super.NAME) {
            return this.#GRAPHICS.id();
        }

        return super.NAME;
    }

    /**
     * @inheritDoc
     * @override
     */
    public override resize(): void {
        // TODO - resize graphics
        console.log('resize');
    }

    /**
     * @inheritDoc
     * @override
     */
    public override updateAspectRatio(aspectRatio: AspectRatio): void {
        // TODO - update aspect ratio of graphics
        console.log('updateAspectRatio', aspectRatio.NAME);
    }

    /**
     * @inheritDoc
     * @override
     */
    public override updateResolution(resolution: number): void {
        // TODO - update resolution of graphics
        console.log('updateResolution', resolution.toString());
    }

    /**
     * @returns {p5.Graphics} The p5.Graphics instance backing this context.
     *
     * @since 2.0.0
     */
    public get GRAPHICS(): p5.Graphics {
        return this.#GRAPHICS;
    }
}
