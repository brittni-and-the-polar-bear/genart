/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
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

// TODO - documentation
// TODO - release notes
// TODO - unit tests

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
    static #p5: P5Lib | null = null;

    private constructor() {
        throw new Error('P5Context is a static class and cannot be instantiated.');
    }

    /**
     * The current p5.js context.<br/>
     * If no context has been initialized,
     * a default context will be created with an empty setup and draw method.
     */
    public static get p5(): P5Lib {
        if (!P5Context.#p5) {
            P5Context.#p5 = new P5Lib((p: P5Lib): void => {
                p.setup = (): void => {
                    /* empty */
                }

                p.draw = (): void => {
                    /* empty */
                }
            });
        }

        return P5Context.#p5;
    }

    public static reset(): void {
        console.warn('P5Context.reset() will create a new p5.js context.' +
            'This may cause unexpected behavior.' +
            'You will loose access to the current context and the current canvas.');
        P5Context.#p5?.noCanvas();
        P5Context.#p5?.remove();
        P5Context.#p5 = null;
    }
}
