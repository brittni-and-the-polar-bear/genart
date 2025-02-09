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
    static readonly #SCREENS: StringMap<CanvasScreen> = new StringMap<CanvasScreen>();

    static #currentScreen: CanvasScreen;

    public static set currentScreen(name: string) {
        const screen: CanvasScreen | undefined = ScreenHandler.#SCREENS.get(name);

        if (screen) {
            ScreenHandler.#currentScreen.deactivate();
            ScreenHandler.#currentScreen = screen;
            ScreenHandler.#currentScreen.activate();
        }
    }

    public static addScreen(screen: CanvasScreen): boolean {
        return ScreenHandler.#SCREENS.setUndefinedKey(screen.NAME, screen);
    }

    public static draw(): void {
        ScreenHandler.#currentScreen.render();
    }

    public static mousePressed(): void {
        ScreenHandler.#currentScreen.mousePressed();
    }

    public static keyPressed(): void {
        ScreenHandler.#currentScreen.keyPressed();
    }

    public static publishRedraw(): void {
        ScreenHandler.#currentScreen.publishRedraw();
    }
}
