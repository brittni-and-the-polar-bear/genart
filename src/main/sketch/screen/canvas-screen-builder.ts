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

import { CanvasScreenConfig } from './canvas-screen';
import { ContextConfig } from '../context';
import { GraphicsContext } from '../graphics';

// TODO - release notes
// TODO - unit tests
// TODO - documentation
export class ScreenConfigBuilder {
    #name: string | undefined;
    #activeGraphics: GraphicsContext | undefined;
    #otherGraphics: GraphicsContext[] | undefined;

    public setName(name: string): ScreenConfigBuilder {
        this.#name = name;
        return this;
    }

    public setActiveGraphics(config: ContextConfig): ScreenConfigBuilder {
        this.#activeGraphics = new GraphicsContext(config);
        return this;
    }

    public addGraphics(config: ContextConfig): ScreenConfigBuilder {
        if (this.#otherGraphics === undefined) {
            this.#otherGraphics = [];
        }

        this.#otherGraphics.push(new GraphicsContext(config));
        return this;
    }

    public build(): CanvasScreenConfig | undefined {
        if (this.#name === undefined || this.#activeGraphics === undefined) {
            return undefined;
        }

        return {
            NAME: this.#name,
            ACTIVE_GRAPHICS: this.#activeGraphics,
            OTHER_GRAPHICS: this.#otherGraphics
        };
    }
}
