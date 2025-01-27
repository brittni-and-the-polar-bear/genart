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

// // TODO - click event handler
// // TODO - hover handler
// // TODO - keyboard event handler
// // TODO - keyboard mapper
//
// import { CanvasRedrawEvent, CanvasRedrawListener } from 'sketch-context';
//
// // TODO - documentation
// // TODO - unit tests
// // TODO - release notes
// /**
//  * @category Canvas Screen
//  */
// export abstract class CanvasScreen {
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     private readonly _CANVAS_REDRAW_EVENT: CanvasRedrawEvent = new CanvasRedrawEvent();
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     private readonly _NAME: string;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     // private _isActive: boolean = false;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public abstract draw(): void;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public abstract mousePressed(): void;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public abstract keyPressed(): void;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     protected constructor(name: string) {
//         this._NAME = name;
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public get NAME(): string {
//         return this._NAME;
//     }
//
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
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public activate(): void {
//         // this._isActive = true;
//         this.publishRedraw();
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     // public deactivate(): void {
//     //     this._isActive = false;
//     // }
// }
