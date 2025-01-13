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

const noP5: P5Lib = new P5Lib((): void => { /* empty */ });
noP5.noCanvas();

/**
 * P5Context provides static access to the p5.js context.
 * This context allows access to all methods and variables of the p5.js library.
 *
 * @category Sketch
 * @category Sketch / P5 Context
 */
export class P5Context {
    /**
     * The underlying p5.js context object.
     */
    static #p5?: P5Lib | null = null;

    /**
     * Initializes the context to allow other accessors to have
     * accurate canvas, environment, and runtime information.
     *
     * @param p5 - The sketch context of the running p5.js script.
     */
    public static initialize(p5: P5Lib): void {
        if (!this.#p5) {
            this.#p5 = p5;
        }
    }

    /**
     * The current p5.js context.<br/>
     * If no context has been initialized with {@link P5Context.initialize},
     * the method will return an "empty" sketch context (0x0 canvas; no loop).
     */
    public static get p5(): P5Lib {
        return this.#p5 ?? noP5;
    }

    /**
     * Resets the p5.js context to null.
     * This will allow the context to be re-initialized
     * using the {@link P5Context.initialize} method.
     */
    public static reset(): void {
        this.#p5?.noCanvas();
        this.#p5 = null;
    }
}
