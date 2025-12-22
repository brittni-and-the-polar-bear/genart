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

import { StringMap } from '../../map';

import { CanvasScreen } from './canvas-screen';

/**
 * The CanvasScreenHandler class manages a collection of {@link CanvasScreen} objects.
 *
 * @category Screen
 *
 * @since 2.0.0
 */
export class CanvasScreenHandler {
    /**
     * All {@link CanvasScreen} objects managed by this handler.
     *
     * @private
     * @readonly
     */
    readonly #SCREENS: StringMap<CanvasScreen> = new StringMap<CanvasScreen>();

    /**
     * The currently active {@link CanvasScreen}.
     *
     * @private
     */
    #activeScreen: CanvasScreen | undefined = undefined;

    /**
     * @return The name of the currently active screen.
     *
     * @since 2.0.0
     */
    public get activeScreen(): string {
        return this.#activeScreen?.NAME ?? '';
    }

    /**
     * Sets the active screen to the screen with the given name.
     *
     * @remarks If no screen with the given name exists, the active screen remains unchanged.
     *
     * @param name {string} - The name of the screen to activate.
     *
     * @since 2.0.0
     */
    public set activeScreen(name: string) {
        const screen: CanvasScreen | undefined = this.#SCREENS.get(name);

        if (screen) {
            this.#activeScreen?.deactivate();
            this.#activeScreen = screen;
            this.#activeScreen.activate();
        }
    }

    /**
     * Adds a {@link CanvasScreen} to the handler.
     *
     * @param screen {CanvasScreen} - The screen to add.
     *
     * @returns {boolean} - `true` if the screen was added, `false` if a screen with the same name already exists.
     *
     * @since 2.0.0
     */
    public addScreen(screen: CanvasScreen): boolean {
        return this.#SCREENS.setIfAbsent(screen.NAME, screen);
    }

    /**
     * Draws the active screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public draw(): void {
        this.#activeScreen?.draw();
    }

    /**
     * Handles key presses for the active screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public keyPressed(): void {
        this.#activeScreen?.keyPressed();
    }

    /**
     * Handles mouse presses for the active screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public mousePressed(): void {
        this.#activeScreen?.mousePressed();
    }

    /**
     * Handles mouse drags for the active screen.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public mouseDragged(): void {
        this.#activeScreen?.mouseDragged();
    }

    public resize(): void {
        this.#activeScreen?.resize();
    }
}
