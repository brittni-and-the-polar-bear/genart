/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
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

/**
 * P5Context provides static access to the p5.js context.
 * This context allows access to all methods and variables of the p5.js library.
 *
 * @since 2.0.0
 *
 * @category P5Context
 */
export class P5Context {
    /**
     * The p5.js instance.
     *
     * @private
     * @static
     */
    static #p5Instance: p5 | null = null;

    /**
     * @throws {Error} - P5Context is a static class and cannot be instantiated.
     *
     * @constructor
     *
     * @since 2.0.0
     */
    public constructor() {
        throw new Error('P5Context is a static class and cannot be instantiated.');
    }

    /**
     * @returns {p5} The p5.js context instance.
     * If no context has been initialized, a default context will be created.
     *
     * @static
     *
     * @since 2.0.0
     */
    public static get instance(): p5 {
        if (!P5Context.#p5Instance) {
            P5Context.#p5Instance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(0, 0);
                    p.noLoop();
                    p.noCanvas();
                };
            });
        }

        return P5Context.#p5Instance;
    }

    /**
     * Set the p5.js context.
     * This will reset the current context with
     * {@link P5Context.reset}.
     *
     * @param p5Instance {p5} - The p5.js context instance to use.
     * @param replace {boolean} - If `true`, the current context will be replaced.
     * If `false`, the given p5Instance will only be used if no context has been initialized.
     * This parameter defaults to false.
     *
     * @returns {boolean} `true` if the given p5Instance was successfully applied, `false` otherwise.
     *
     * @static
     *
     * @since 2.0.0
     */
    public static init(p5Instance: p5, replace: boolean = false): boolean {
        if (replace) {
            P5Context.reset();
            P5Context.#p5Instance = p5Instance;
            return true;
        } else if (!P5Context.hasInstance()) {
            P5Context.#p5Instance = p5Instance;
            return true;
        }

        return false;
    }

    /**
     * Does P5Context have an initialized p5.js context?
     *
     * @returns {boolean} `true` if P5Context has an initialized p5.js context, `false` otherwise.
     *
     * @static
     *
     * @since 2.0.0
     */
    public static hasInstance(): boolean {
        return P5Context.#p5Instance !== null;
    }

    /**
     * Resets the p5.js context.
     *
     * @remarks This removes the p5.js context.
     * This may cause unexpected behavior.
     * You will lose access to the current context and the current canvas.
     *
     * @returns {void}
     *
     * @static
     *
     * @since 2.0.0
     */
    public static reset(): void {
        P5Context.#p5Instance?.remove();
        P5Context.#p5Instance = null;
    }
}
