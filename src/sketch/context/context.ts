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

import { ASPECT_RATIOS, AspectRatio } from '../aspect_ratio';
import { CoordinateRatioMapper } from '../coordinate';
import { P5Context } from '../p5_context';

import { ContextConfig } from './context-config';
import { RenderType } from './render-type';

/**
 * Abstract base class for managing rendering contexts in generative art sketches.
 * Provides configuration for {@link RenderType}, {@link AspectRatio}, resolution, and {@link CoordinateRatioMapper}, supporting both 2D and WebGL modes with responsive resizing and aspect ratio control.
 *
 * @since 2.0.0
 *
 * @category Context
 */
export abstract class Context {
    /**
     * The {@link RenderType} of the context.
     *
     * @private
     */
    readonly #RENDER_TYPE: RenderType;

    /**
     * The name of the context.
     *
     * @private
     */
    readonly #NAME: string;

    /**
     * The {@link CoordinateRatioMapper} for the context.
     *
     * @private
     */
    readonly #COORDINATE_MAPPER: CoordinateRatioMapper;

    /**
     * The {@link AspectRatio} of the context.
     *
     * @private
     */
    #aspectRatio: AspectRatio;

    /**
     * Should the aspect ratio of the context match the aspect ratio of its container?
     *
     * @private
     */
    #matchContainerRatio: boolean;

    /**
     * The resolution of the context.
     *
     * @private
     */
    #resolution: number;

    /**
     * The constructor for the Context class.
     *
     * @param config - The configuration for the context.
     *
     * @protected
     */
    protected constructor(config: ContextConfig) {
        this.#RENDER_TYPE = config.RENDER_TYPE ?? P5Context.instance.P2D;
        this.#NAME = config.NAME;
        this.#aspectRatio = config.ASPECT_RATIO ?? new AspectRatio(ASPECT_RATIOS.SQUARE);
        this.#resolution = config.RESOLUTION ?? Context.MIN_RESOLUTION;
        this.#matchContainerRatio = config.MATCH_CONTAINER_RATIO ?? false;

        if (this.#resolution < Context.MIN_RESOLUTION) {
            this.#resolution = Context.MIN_RESOLUTION;
        }

        const width: number = this.aspectRatio.getWidth(this.resolution, true);
        const height: number = this.aspectRatio.getHeight(this.resolution, true);
        this.#COORDINATE_MAPPER = new CoordinateRatioMapper(width, height, this.IS_WEBGL);
    }

    /**
     * Minimum resolution for a context.
     *
     * @since 2.0.0
     */
    public static get MIN_RESOLUTION(): number {
        return 100;
    }

    /**
     * The {@link CoordinateRatioMapper} for the context.
     *
     * @since 2.0.0
     */
    public get COORDINATE_MAPPER(): CoordinateRatioMapper {
        return this.#COORDINATE_MAPPER;
    }

    /**
     * Is the context in WebGL mode?
     *
     * @return true if the context is in WebGL mode, false otherwise.
     *
     * @since 2.0.0
     */
    public get IS_WEBGL(): boolean {
        return this.#RENDER_TYPE === P5Context.instance.WEBGL;
    }

    /**
     * The name of the context.
     *
     * @since 2.0.0
     */
    public get NAME(): string {
        return this.#NAME;
    }

    /**
     * The {@link RenderType} of the context.
     *
     * @since 2.0.0
     */
    public get RENDER_TYPE(): RenderType {
        return this.#RENDER_TYPE;
    }

    /**
     * The {@link AspectRatio} of the context.
     *
     * @since 2.0.0
     */
    public get aspectRatio(): AspectRatio {
        return this.#aspectRatio;
    }

    /**
     * Set the {@link AspectRatio} of the context.
     *
     * @param aspectRatio - The new {@link AspectRatio} of the context.
     *
     * @protected
     */
    protected set aspectRatio(aspectRatio: AspectRatio) {
        this.#aspectRatio = aspectRatio;
        this.COORDINATE_MAPPER.width = aspectRatio.getWidth(this.resolution, true);
        this.COORDINATE_MAPPER.height = aspectRatio.getHeight(this.resolution, true);
    }

    /**
     * The default stroke weight for the context.
     * Equivalent to a stroke of 1 in a 500x500 sketch.
     *
     * @since 2.0.0
     */
    public get defaultStrokeWeight(): number {
        return this.resolution * 0.002;
    }

    /**
     * Should the aspect ratio of the context match the aspect ratio of its container?
     *
     * @since 2.0.0
     */
    public get matchContainerRatio(): boolean {
        return this.#matchContainerRatio;
    }

    /**
     * Should the aspect ratio of the context match the aspect ratio of its container?
     *
     * @param matchContainerRatio - The new value for the matchContainerRatio property.
     *
     * @since 2.0.0
     */
    public set matchContainerRatio(matchContainerRatio: boolean) {
        this.#matchContainerRatio = matchContainerRatio;
    }

    /**
     * The resolution of the context.
     *
     * @since 2.0.0
     */
    public get resolution(): number {
        return this.#resolution;
    }

    /**
     * Set the resolution of the context.
     *
     * @param resolution - The new resolution of the context.
     *
     * @protected
     */
    protected set resolution(resolution: number) {
        this.#resolution = resolution;
        this.COORDINATE_MAPPER.width = this.aspectRatio.getWidth(resolution, true);
        this.COORDINATE_MAPPER.height = this.aspectRatio.getHeight(resolution, true);
    }

    /**
     * @return The width of the context.
     */
    public get width(): number {
        return this.COORDINATE_MAPPER.width;
    }

    /**
     * @return The height of the context.
     */
    public get height(): number {
        return this.COORDINATE_MAPPER.height;
    }

    /**
     * @return The center of the context.
     */
    public get center(): p5.Vector {
        return this.COORDINATE_MAPPER.center;
    }

    /**
     * Resize the context.
     *
     * @since 2.0.0
     */
    public abstract resize(): void;

    /**
     * Update the {@link AspectRatio} of the context.
     *
     * @param aspectRatio - The new {@link AspectRatio} of the context.
     *
     * @since 2.0.0
     */
    public abstract updateAspectRatio(aspectRatio: AspectRatio): void;

    /**
     * Update the resolution of the context.
     *
     * @param resolution - The new resolution of the context.
     *
     * @since 2.0.0
     */
    public abstract updateResolution(resolution: number): void;
}
