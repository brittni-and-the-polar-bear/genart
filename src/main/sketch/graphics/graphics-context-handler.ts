/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import { StringMap } from 'map';

import { GraphicsContext } from './graphics-context';

export class GraphicsContextHandler {
    readonly #CONTEXTS: StringMap<GraphicsContext> = new StringMap<GraphicsContext>();

    #activeContext: GraphicsContext;

    public constructor(activeContext: GraphicsContext, otherContexts?: GraphicsContext[]) {
        this.#activeContext = activeContext;
        this.addContext(activeContext);

        if (otherContexts) {
            this.addContexts(otherContexts);
        }
    }

    public get NAMES(): string[] {
        return Array.from(this.#CONTEXTS.keys);
    }

    public getActiveContext(): GraphicsContext {
        return this.#activeContext;
    }

    public setActiveContext(name: string): void {
        const context: GraphicsContext | undefined = this.#CONTEXTS.get(name);

        if (context) {
            this.#activeContext = context;
        } else {
            console.error(`GraphicsContext with name '${name}' not found.`);
        }
    }

    public getAllContexts(): GraphicsContext[] {
        return Array.from(this.#CONTEXTS.values);
    }

    public getActiveGraphics(): P5Lib.Graphics {
        return this.#activeContext.GRAPHICS;
    }

    public getAllGraphics(): P5Lib.Graphics[] {
        return this.getAllContexts().map((context: GraphicsContext): P5Lib.Graphics => context.GRAPHICS);
    }

    public addContext(context: GraphicsContext): boolean {
        return this.#CONTEXTS.setUndefinedKey(context.NAME, context);
    }

    public addContexts(contexts: GraphicsContext[]): boolean {
        let success: boolean = true;

        for (const context of contexts) {
            success = success && this.addContext(context);
        }

        return success;
    }
}
