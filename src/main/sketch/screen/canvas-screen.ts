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

// TODO - click event handler
// TODO - hover handler
// TODO - keyboard event handler
// TODO - keyboard mapper

// TODO - documentation
// TODO - unit tests
// TODO - release notes

/**
 * @category Sketch
 * @category Sketch / Screen
 */
export abstract class CanvasScreen {
    // TODO - CanvasRedrawEvent
//     private readonly _CANVAS_REDRAW_EVENT: CanvasRedrawEvent = new CanvasRedrawEvent();
    readonly #NAME: string;

    #isActive: boolean = false;

    protected constructor(name: string) {
        this.#NAME = name;
    }

    public get isActive(): boolean {
        return this.#isActive;
    }

    public activate(): void {
        this.#isActive = true;
        // this.publishRedraw();
    }

    public deactivate(): void {
        this.#isActive = false;
    }

    public get NAME(): string {
        return this.#NAME;
    }

    public abstract draw(): void;

    public mousePressed(): void {
        /* empty */
    }

    public keyPressed(): void {
        /* empty */
    }

//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public publishRedraw(): void {
//         this._CANVAS_REDRAW_EVENT.publishRedraw();
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public addRedrawListener(listener: CanvasRedrawListener): void {
//         this._CANVAS_REDRAW_EVENT.addListener(listener);
//     }
}
