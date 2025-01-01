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

export interface ContextConfig {
    isWebGL: boolean;
}

export abstract class Context {
    #isWebGL: boolean;

    protected constructor(config: ContextConfig) {
        this.#isWebGL = config.isWebGL;
    }

    // #resolution: number;

    // TODO - AspectRatio object
    // #aspectRatio: number;

    // TODO - return AspectRatio object
    // public abstract get aspectRatio(): void;

    // public abstract get resolution(): number;

    public abstract get minX(): number;

    public abstract get maxX(): number;

    public abstract get minY(): number;

    public abstract get maxY(): number;

    public abstract get width(): number;

    public abstract get height(): number;

    // TODO - accepts an AspectRatio object
    // public setAspectRatio(aspectRatio: number): void {
    //     this.updateAspectRatio(aspectRatio);
    //     this.#aspectRatio = aspectRatio;
    // }

    // public setResolution(resolution: number): void {
    //     this.updateResolution(resolution);
    //     this.#resolution = resolution;
    // }

    // protected abstract updateResolution(resolution: number): void;

    // TODO - accepts an AspectRatio object
    // protected abstract updateAspectRatio(aspectRatio: number): void;

    public get isWebGL(): boolean {
        return this.#isWebGL;
    }
}
