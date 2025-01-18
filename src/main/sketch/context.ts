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

import { ASPECT_RATIOS, AspectRatio, AspectRatioConfig } from './aspect-ratio';

export interface ContextConfig {
    readonly CANVAS_TYPE: 'p2d' | 'webgl';
    readonly ASPECT_RATIO?: AspectRatio;
    readonly RESOLUTION?: number;
    readonly MATCHING_CONTAINER_RATIO: boolean;
}

export abstract class Context {
    /**
     * Is the context rendering mode set to WebGL?
     *
     * @defaultValue false
     */
    #isWebGL: boolean = false;

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
    #matchingContainerRatio: boolean = false;

    protected constructor(config: ContextConfig) {
        const p5: P5Lib = P5Context.p5;
        this.#isWebGL = config.CANVAS_TYPE === p5.WEBGL;

        if (config.ASPECT_RATIO) {
            this.#aspectRatio = config.ASPECT_RATIO;
        }

        if (config.RESOLUTION) {
            this.#resolution = config.RESOLUTION;
        }

        if (config.MATCHING_CONTAINER_RATIO) {
            this.#matchingContainerRatio = config.MATCHING_CONTAINER_RATIO;
        }
    }

    public abstract get minX(): number;

    public abstract get maxX(): number;

    public abstract get minY(): number;

    public abstract get maxY(): number;

    public abstract get width(): number;

    public abstract get height(): number;

    public get aspectRatio(): AspectRatio {
        return this.#aspectRatio;
    }

    public get isWebGL(): boolean {
        return this.#isWebGL;
    }

    public get resolution(): number {
        return this.#resolution;
    }

    protected get matchingContainerRatio(): boolean {
        return this.#matchingContainerRatio;
    }

    public abstract resize(): void;

    protected abstract updateAspectRatio(config: AspectRatioConfig): void;

    protected abstract updateResolution(resolution: number): void;
}
