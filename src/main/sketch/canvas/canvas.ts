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

import P5Lib from 'p5';

import { P5Context } from 'p5-context';

import { AspectRatio, AspectRatioConfig } from '../aspect-ratio';
import { ContextConfig } from '../context';
import { RenderType } from '../render-type';
import { CanvasScreen } from '../screen';

import { CanvasContext } from './canvas-context';

// TODO - documentation
// TODO - relase notes
// TODO - unit tests

/**
 * The Canvas class provides static access to the {@link CanvasContext}
 * for the sketch.
 *
 * @category Sketch
 * @category Sketch/Canvas
 */
export class Canvas {
    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     *
     * @defaultValue false
     */
    static #isLocked: boolean = false;

    static #canvasContext: CanvasContext = new CanvasContext({});

    public static get context(): CanvasContext {
        return Canvas.#canvasContext;
    }

    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     */
    public static get isLocked(): boolean {
        return Canvas.#isLocked;
    }

    public static get currentScreen(): string {
        return Canvas.#canvasContext.currentScreen;
    }

    public static set currentScreen(name: string) {
        Canvas.#canvasContext.currentScreen = name;
    }

    public static draw(): void {
        Canvas.#canvasContext.draw();
    }

    public static keyPressed(): void {
        Canvas.#canvasContext.keyPressed();
    }

    public static mousePressed(): void {
        Canvas.#canvasContext.mousePressed();
    }

    public static buildCanvas(aspectRatio: AspectRatio | AspectRatioConfig,
                              resolution: number,
                              renderType?: RenderType,
                              matchWindowRatio?: boolean,
                              lockCanvas?: boolean): void {
        if (!Canvas.isLocked) {
            let configAspectRatio: AspectRatio;

            if (aspectRatio instanceof AspectRatio) {
                configAspectRatio = aspectRatio;
            } else {
                configAspectRatio = new AspectRatio(aspectRatio);
            }

            const config: ContextConfig = {
                ASPECT_RATIO: configAspectRatio,
                RENDER_TYPE: renderType ?? P5Context.p5.P2D,
                RESOLUTION: resolution,
                MATCH_CONTAINER_RATIO: matchWindowRatio ?? false
            };

            Canvas.#canvasContext = new CanvasContext(config);

            if (lockCanvas) {
                Canvas.lockCanvas();
            }
        }
    }

    public static addScreen(screen: CanvasScreen): void {
        Canvas.#canvasContext.addScreen(screen);
    }

    /**
     * Locks the canvas. After this is called, {@link buildCanvas} will not create a new canvas.
     */
    public static lockCanvas(): void {
        Canvas.#isLocked = true;
    }

    /**
     * Unlocks the canvas. After this is called, {@link buildCanvas} will create a new canvas.
     */
    public static unlockCanvas(): void {
        Canvas.#isLocked = false;
    }

    public static get matchWindowRatio(): boolean {
        return Canvas.#canvasContext.matchContainerRatio;
    }

    public static set matchWindowRatio(match: boolean) {
        Canvas.#canvasContext.matchContainerRatio = match;
    }

    /**
     * Resizes the canvas based on the current browser window size and aspect ratio.<br/>
     * NOTE: This method will not change the canvas resolution.
     */
    public static resize(): void {
        Canvas.#canvasContext.resize();
    }

    /**
     * Update the current {@link AspectRatio} of the canvas to the given {@link AspectRatio}.
     *
     * @param aspectRatio
     */
    public static updateAspectRatio(aspectRatio: AspectRatio): void {
        Canvas.#canvasContext.updateAspectRatio(aspectRatio);
    }

    /**
     * Update the current resolution of the canvas to the given resolution.
     *
     * @param resolution
     */
    public static updateResolution(resolution: number): void {
        Canvas.#canvasContext.updateResolution(resolution);
    }

    public static get width(): number {
        return Canvas.#canvasContext.width;
    }

    public static get height(): number {
        return Canvas.#canvasContext.height;
    }

    public static get center(): P5Lib.Vector {
        return Canvas.#canvasContext.center;
    }

    public static get defaultStrokeWeight(): number {
        return Canvas.#canvasContext.defaultStrokeWeight;
    }
}
