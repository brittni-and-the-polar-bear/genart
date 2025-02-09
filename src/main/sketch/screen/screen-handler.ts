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

// import { StringMap } from 'map';
//
// import { CanvasScreen } from './canvas-screen';
//
// // TODO - documentation
// // TODO - unit tests
// // TODO - release notes
// /**
//  * @category Canvas Screen
//  */
// export class ScreenHandler {
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     private static readonly _SCREENS: StringMap<CanvasScreen> = new StringMap<CanvasScreen>();
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     private static _currentScreen: CanvasScreen;
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static set currentScreen(name: string) {
//         const screen: CanvasScreen | undefined = ScreenHandler._SCREENS.get(name);
//
//         if (screen) {
//             // ScreenHandler._currentScreen.deactivate();
//             ScreenHandler._currentScreen = screen;
//             ScreenHandler._currentScreen.activate();
//         }
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static addScreen(screen: CanvasScreen): boolean {
//         return ScreenHandler._SCREENS.setUndefinedKey(screen.NAME, screen);
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static draw(): void {
//         ScreenHandler._currentScreen.draw();
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static mousePressed(): void {
//         ScreenHandler._currentScreen.mousePressed();
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static keyPressed(): void {
//         ScreenHandler._currentScreen.keyPressed();
//     }
//
//     // TODO - documentation
//     // TODO - unit tests
//     // TODO - release notes
//     public static publishRedraw(): void {
//         ScreenHandler._currentScreen.publishRedraw();
//     }
// }
