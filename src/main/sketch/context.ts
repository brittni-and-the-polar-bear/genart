/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
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

// TODO - release notes
// TODO - documentation
// TODO - unit tests

import { P5Context } from 'p5-context';

import { ASPECT_RATIOS, AspectRatio } from './aspect-ratio';
import { CoordinateRatioMapper } from './coordinate';
import { RenderType } from './render-type';

export interface ContextConfig {
    readonly RENDER_TYPE?: RenderType;
    readonly ASPECT_RATIO?: AspectRatio;
    readonly RESOLUTION?: number;
    readonly MATCH_CONTAINER_RATIO?: boolean;
}

export abstract class Context {
    /**
     * Is the context rendering mode set to WebGL?
     */
    #isWebGL: boolean;

    /**
     * Current {@link AspectRatio} of the context.
     *
     * @defaultValue {@link ASPECT_RATIOS.SQUARE}
     */
    #aspectRatio: AspectRatio = new AspectRatio(ASPECT_RATIOS.SQUARE);

    /**
     * Current resolution of the context.
     *
     * @defaultValue 720
     */
    #resolution: number = 720;

    /**
     * Should the aspect ratio of the context always
     * match the aspect ratio of the container?
     *
     * @defaultValue false
     */
    #matchContainerRatio: boolean = false;

    #coordinateMapper: CoordinateRatioMapper;

    protected constructor(config: ContextConfig) {
        const renderType: RenderType = config.RENDER_TYPE ?? P5Context.p5.P2D;
        this.#isWebGL = renderType === P5Context.p5.WEBGL;

        if (config.ASPECT_RATIO) {
            this.#aspectRatio = config.ASPECT_RATIO;
        }

        if (config.RESOLUTION) {
            if (config.RESOLUTION < Context.MIN_RESOLUTION) {
                this.#resolution = Context.MIN_RESOLUTION;
            } else {
                this.#resolution = config.RESOLUTION;
            }
        }

        if (config.MATCH_CONTAINER_RATIO) {
            this.#matchContainerRatio = config.MATCH_CONTAINER_RATIO;
        }

        const width: number = this.aspectRatio.getWidth(this.resolution);
        const height: number = this.aspectRatio.getHeight(this.resolution);
        this.#coordinateMapper = new CoordinateRatioMapper(width, height, this.isWebGL);

        this.resize();
    }

    public static get MIN_RESOLUTION(): number {
        return 100;
    }

    public get aspectRatio(): AspectRatio {
        return this.#aspectRatio;
    }

    public get coordinateMapper(): CoordinateRatioMapper {
        return this.#coordinateMapper;
    }

    /**
     * The default stroke weight of the sketch.
     * Equivalent to a stroke of 1 in a 500x500 sketch.
     */
    public get defaultStrokeWeight(): number {
        return this.resolution * 0.002;
    }

    public get isWebGL(): boolean {
        return this.#isWebGL;
    }

    public get matchContainerRatio(): boolean {
        return this.#matchContainerRatio;
    }

    public set matchContainerRatio(matchContainerRatio: boolean) {
        this.#matchContainerRatio = matchContainerRatio;
    }

    public get resolution(): number {
        return this.#resolution;
    }

    public get width(): number {
        return this.coordinateMapper.width;
    }

    public get height(): number {
        return this.coordinateMapper.height;
    }

    public abstract resize(): void;

    public abstract updateAspectRatio(aspectRatio: AspectRatio): void;

    public abstract updateResolution(resolution: number): void;

    protected set aspectRatio(aspectRatio: AspectRatio) {
        this.#aspectRatio = aspectRatio;
        this.coordinateMapper.width = aspectRatio.getWidth(this.resolution);
        this.coordinateMapper.height = aspectRatio.getHeight(this.resolution);
    }

    protected set resolution(resolution: number) {
        this.#resolution = resolution;
        this.coordinateMapper.width = this.aspectRatio.getWidth(resolution);
        this.coordinateMapper.height = this.aspectRatio.getHeight(resolution);
    }
}
