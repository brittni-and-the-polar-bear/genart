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
import { ContextConfig } from '../context';
import { P5Context } from '../p5_context';
import { CanvasScreen } from '../screen';

import { CanvasContext } from './canvas-context';

/**
 * This class is a static utility for managing a singleton {@link CanvasContext} instance in a p5.js environment.
 *
 * @since 2.0.0
 *
 * @category Canvas
 */
export class Canvas {
    /**
     * When `true`, calling {@link buildCanvas} will not create a new canvas.
     *
     * @defaultValue false
     *
     * @private
     */
    static #isLocked: boolean = false;

    /**
     * The underlying {@link CanvasContext} object.
     *
     * @private
     */
    static #canvasContext: CanvasContext | null = null;

    /**
     * @returns {CanvasContext | null} The underlying {@link CanvasContext} object.
     * `null` if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @since 2.0.0
     */
    public static get context(): CanvasContext | null {
        return Canvas.#canvasContext;
    }

    /**
     * @returns {string} The name of the current screen.
     * An empty string if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.currentScreen}
     *
     * @since 2.0.0
     */
    public static get currentScreen(): string {
        return Canvas.#canvasContext?.currentScreen ?? '';
    }

    /**
     * Sets the current screen to the screen with the given name.
     *
     * @remarks This method will only have an effect if the canvas has been built.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @param name {string} - The name of the screen to set as the current screen.
     *
     * @see {@link CanvasContext.currentScreen}
     *
     * @since 2.0.0
     */
    public static set currentScreen(name: string) {
        if (Canvas.#canvasContext) {
            Canvas.#canvasContext.currentScreen = name;
        }
    }

    /**
     * @returns {number} The default stroke weight of the canvas.
     *
     * @see {@link CanvasContext.defaultStrokeWeight}
     *
     * @since 2.0.0
     */
    public static get defaultStrokeWeight(): number {
        return Canvas.#canvasContext?.defaultStrokeWeight ?? 1;
    }

    /**
     * When `true`, calling {@link buildCanvas} will not create a new canvas.
     *
     * @returns {boolean} The lock state of the canvas.
     *
     * @since 2.0.0
     */
    public static get isLocked(): boolean {
        return Canvas.#isLocked;
    }

    /**
     * @returns {boolean} - `true` if the canvas aspect ratio matches the container aspect ratio.
     * `false` if the canvas aspect ratio does not match the container aspect ratio.
     *
     * @remarks The effective container for the canvas is the browser window.
     *
     * @see {@link Canvas.matchWindowRatio}
     *
     * @since 2.0.0
     */
    public static get matchContainerRatio(): boolean {
        return Canvas.#canvasContext?.matchContainerRatio ?? false;
    }

    /**
     * Sets the matchContainerRatio property of the canvas context.
     *
     * @param match {boolean} - The new value for the matchContainerRatio property.
     *
     * @see {@link Canvas.matchWindowRatio}
     *
     * @since 2.0.0
     */
    public static set matchContainerRatio(match: boolean) {
        if (Canvas.#canvasContext) {
            Canvas.#canvasContext.matchContainerRatio = match;
        }
    }

    /**
     * @returns {boolean} `true` if the canvas aspect ratio matches the browser window aspect ratio.
     * `false` if the canvas aspect ratio does not match the browser window aspect ratio.
     *
     * @see {@link Canvas.matchContainerRatio}
     *
     * @since 2.0.0
     */
    public static get matchWindowRatio(): boolean {
        return Canvas.matchContainerRatio;
    }

    /**
     * Sets the matchWindowRatio property of the canvas context.
     *
     * @param match {boolean} - The new value for the matchWindowRatio property.
     *
     * @see {@link Canvas.matchContainerRatio}
     *
     * @since 2.0.0
     */
    public static set matchWindowRatio(match: boolean) {
        Canvas.matchContainerRatio = match;
    }

    /**
     * @returns {string} The name of the canvas.
     * An empty string if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.NAME}
     *
     * @since 2.0.0
     */
    public static get name(): string {
        return Canvas.#canvasContext?.NAME ?? '';
    }

    /**
     * @returns {number} The current resolution of the canvas.
     * {@link CanvasContext.MIN_RESOLUTION} if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.resolution}
     *
     * @since 2.0.0
     */
    public static get resolution(): number {
        return Canvas.#canvasContext?.resolution ?? CanvasContext.MIN_RESOLUTION;
    }

    /**
     * @returns {number} The width of the canvas.
     * 0 if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.width}
     *
     * @since 2.0.0
     */
    public static get width(): number {
        return Canvas.#canvasContext?.width ?? 0;
    }

    /**
     * @returns {number} The height of the canvas.
     * 0 if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.height}
     *
     * @since 2.0.0
     */
    public static get height(): number {
        return Canvas.#canvasContext?.height ?? 0;
    }

    /**
     * @returns {p5.Vector} The center of the canvas.
     * A vector with x and y coordinates of 0 if the canvas has not been built yet.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @see {@link CanvasContext.center}
     *
     * @since 2.0.0
     */
    public static get center(): p5.Vector {
        return Canvas.#canvasContext?.center ?? P5Context.instance.createVector();
    }

    /**
     * Draws the canvas.
     *
     * @returns {void}
     *
     * @see {@link CanvasContext.draw}
     *
     * @since 2.0.0
     */
    public static draw(): void {
        Canvas.#canvasContext?.draw();
    }

    /**
     * Handles key press events for the canvas.
     *
     * @returns {void}
     *
     * @see {@link CanvasContext.keyPressed}
     *
     * @since 2.0.0
     */
    public static keyPressed(): void {
        Canvas.#canvasContext?.keyPressed();
    }

    /**
     * Handles mouse press events for the canvas.
     *
     * @returns {void}
     *
     * @see {@link CanvasContext.mousePressed}
     *
     * @since 2.0.0
     */
    public static mousePressed(): void {
        Canvas.#canvasContext?.mousePressed();
    }

    /**
     * Handles mouse drag events for the canvas.
     *
     * @returns {void}
     *
     * @see {@link CanvasContext.mouseDragged}
     *
     * @since 2.0.0
     */
    public static mouseDragged(): void {
        Canvas.#canvasContext?.mouseDragged();
    }

    /**
     * Add a screen to the canvas.
     * This method will only have an effect if the canvas has been built.
     * The canvas can be built by calling {@link buildCanvas}.
     *
     * @param screen {CanvasScreen} - The screen to add to the canvas.
     *
     * @see {@link CanvasContext.addScreen}
     *
     * @since 2.0.0
     */
    public static addScreen(screen: CanvasScreen): void {
        Canvas.#canvasContext?.addScreen(screen);
    }

    /**
     * Build the canvas.
     *
     * @param config {ContextConfig} - The configuration for the canvas context.
     * @param lockCanvas {boolean} - Optional parameter.
     * When `true`, the canvas will not be rebuilt after the first call.
     *
     * @since 2.0.0
     */
    public static buildCanvas(config: ContextConfig, lockCanvas?: boolean): void {
        if (!Canvas.isLocked) {
            Canvas.#canvasContext = new CanvasContext(config);

            if (lockCanvas) {
                Canvas.lock();
            }
        }
    }

    /**
     * Locks the canvas. After this is called, {@link buildCanvas} will not create a new canvas.
     *
     * @since 2.0.0
     */
    public static lock(): void {
        Canvas.#isLocked = true;
    }

    /**
     * Unlocks the canvas. After this is called, {@link buildCanvas} will create a new canvas.
     *
     * @since 2.0.0
     */
    public static unlock(): void {
        Canvas.#isLocked = false;
    }

    /**
     * Resizes the canvas based on the current browser window size and aspect ratio.
     *
     * @remarks This method will not change the canvas resolution.
     *
     * @see {@link CanvasContext.resize}
     *
     * @since 2.0.0
     */
    public static resize(): void {
        Canvas.#canvasContext?.resize();
    }

    /**
     * Update the current {@link AspectRatio} of the canvas to the given {@link AspectRatio}.
     *
     * @param aspectRatio {AspectRatio} - The new aspect ratio for the canvas.
     *
     * @remarks This method will not change the canvas resolution.
     *
     * @see {@link CanvasContext.updateAspectRatio}
     *
     * @since 2.0.0
     */
    public static updateAspectRatio(aspectRatio: AspectRatio): void {
        Canvas.#canvasContext?.updateAspectRatio(aspectRatio);
    }

    /**
     * Update the current resolution of the canvas to the given resolution.
     *
     * @param resolution {number} - The new resolution for the canvas.
     *
     * @see {@link CanvasContext.updateResolution}
     *
     * @since 2.0.0
     */
    public static updateResolution(resolution: number): void {
        Canvas.#canvasContext?.updateResolution(resolution);
    }
}
