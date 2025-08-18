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

import { StringMap } from 'map';

import { CanvasScreen } from './canvas-screen';

// TODO - documentation
// TODO - unit tests
// TODO - release notes
/**
 * @category Sketch
 * @category Sketch / Screen
 */
export class ScreenHandler {
    readonly #SCREENS: StringMap<CanvasScreen> = new StringMap<CanvasScreen>();

    #currentScreen: CanvasScreen | undefined = undefined;

    public get currentScreen(): string {
        return this.#currentScreen?.NAME ?? '';
    }

    public set currentScreen(name: string) {
        const screen: CanvasScreen | undefined = this.#SCREENS.get(name);

        if (screen) {
            this.#currentScreen?.deactivate();
            this.#currentScreen = screen;
            this.#currentScreen.activate();
        }
    }

    public addScreen(screen: CanvasScreen): boolean {
        return this.#SCREENS.setIfAbsent(screen.NAME, screen);
    }

    public draw(): void {
        this.#currentScreen?.render();
    }

    public keyPressed(): void {
        this.#currentScreen?.keyPressed();
    }

    public mousePressed(): void {
        this.#currentScreen?.mousePressed();
    }

    public publishRedraw(): void {
        this.#currentScreen?.publishRedraw();
    }
}
