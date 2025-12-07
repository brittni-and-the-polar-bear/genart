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

import { ContextConfig } from './context-config';
import { RenderType } from './render-type';
import { AspectRatio } from '../aspect_ratio';

/**
 * Builder for {@link ContextConfig} objects.
 *
 * @since 2.0.0
 *
 * @category Context
 */
export class ContextConfigBuilder {
    /**
     * The name of the context.
     *
     * @private
     */
    #name: string;

    /**
     * The {@link RenderType} of the context.
     *
     * @private
     */
    #renderType: RenderType | undefined;

    /**
     * The {@link AspectRatio} of the context.
     *
     * @private
     */
    #aspectRatio: AspectRatio | undefined;

    /**
     * The resolution of the context.
     *
     * @private
     */
    #resolution: number | undefined;

    /**
     * Should the aspect ratio of the context match the aspect ratio of its container?
     *
     * @private
     */
    #matchContainerRatio: boolean | undefined;

    /**
     * The constructor for the ContextConfigBuilder class.
     *
     * @constructor
     *
     * @since 2.0.0
     */
    public constructor() {
        this.#name = '';
        this.#renderType = undefined;
        this.#aspectRatio = undefined;
        this.#resolution = undefined;
        this.#matchContainerRatio = undefined;
    }

    /**
     * Set the name of the context.
     *
     * @param name {string} - The name of the context.
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
     * Set the {@link RenderType} of the context.
     *
     * @param renderType {RenderType} - The {@link RenderType} of the context.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setRenderType(renderType: RenderType): this {
        this.#renderType = renderType;
        return this;
    }

    /**
     * Set the {@link AspectRatio} of the context.
     *
     * @param aspectRatio {AspectRatio} - The {@link AspectRatio} of the context.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setAspectRatio(aspectRatio: AspectRatio): this {
        this.#aspectRatio = aspectRatio;
        return this;
    }

    /**
     * Set the resolution of the context.
     *
     * @param resolution {number} - The resolution of the context.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setResolution(resolution: number): this {
        this.#resolution = resolution;
        return this;
    }

    /**
     * Set whether the aspect ratio of the context should match the aspect ratio of its container.
     *
     * @param matchContainerRatio {boolean} - Whether the aspect ratio of the context should match the aspect ratio of its container.
     *
     * @returns {this} This builder.
     *
     * @since 2.0.0
     */
    public setMatchContainerRatio(matchContainerRatio: boolean): this {
        this.#matchContainerRatio = matchContainerRatio;
        return this;
    }

    /**
     * Build a {@link ContextConfig} object from the builder's state.
     *
     * @returns {ContextConfig} A {@link ContextConfig} object.
     *
     * @throws {Error} If the name of the context is not set. The name field can be set using {@link setName}.
     *
     * @since 2.0.0
     */
    public build(): ContextConfig {
        if (!this.#name) {
            throw new Error('Error building ContextConfig: name must be set.');
        }

        return {
            NAME: this.#name,
            RENDER_TYPE: this.#renderType,
            ASPECT_RATIO: this.#aspectRatio,
            RESOLUTION: this.#resolution,
            MATCH_CONTAINER_RATIO: this.#matchContainerRatio
        };
    }
}
