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

//
// import P5Lib from 'p5';
//
// import { ScreenHandler } from 'screen';
//
// import { P5Context } from '../p5-context';
// import { ASPECT_RATIOS, AspectRatio, AspectRatioHandler } from './aspect-ratio';

// TODO - Canvas provides static access to a singleton CanvasContext instance.

/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Sketch
 * @category Sketch/Canvas
 */
export class Canvas {
    /**
     * When true, {@link buildCanvas} will not create a new canvas.
     *
     * @defaultValue false
     */
    static #lockedCanvas: boolean = false;

//     // TODO - update release notes
//     /**
//      * Build a p5 canvas with the given aspect ratio, resolution, and canvas type.
//      * If {@link lockedCanvas} is `true`, no canvas will be built.
//      *
//      * @param aspectRatio
//      * @param resolution
//      * @param lockCanvas - When `true`, the canvas will be locked after it has been created.
//      * @param CANVAS_TYPE - Can be WEBGL ("webgl") or P2D ("p2d").
//      */
//     public static buildCanvas(aspectRatio: AspectRatio,
//                               resolution: number,
//                               CANVAS_TYPE?: string,
//                               lockCanvas?: boolean): void {
//         if (!CanvasContext.lockedCanvas) {
//             CanvasContext._resolution = resolution;
//             CanvasContext.aspectRatio = aspectRatio;
//
//             const ratioHandler: AspectRatioHandler =
//                 new AspectRatioHandler(CanvasContext._aspectRatio, CanvasContext._resolution);
//             const p5: P5Lib = P5Context.p5;
//
//             if (CANVAS_TYPE && CANVAS_TYPE === p5.WEBGL) {
//                 p5.createCanvas(ratioHandler.width, ratioHandler.height, p5.WEBGL);
//                 CanvasContext._isWebGL = true;
//             } else {
//                 p5.createCanvas(ratioHandler.width, ratioHandler.height);
//                 CanvasContext._isWebGL = false;
//             }
//
//             CanvasContext.decorateCanvas();
//
//             if (lockCanvas) {
//                 CanvasContext.lockCanvas();
//             }
//         }
//     }

//     /**
//      * When true, {@link buildCanvas} will not create a new canvas.
//      */
//     public static get lockedCanvas(): boolean {
//         return CanvasContext._lockedCanvas;
//     }
//
//     /**
//      * Locks the canvas. After this is called, {@link buildCanvas} will not create a new canvas.
//      */
//     public static lockCanvas(): void {
//         CanvasContext._lockedCanvas = true;
//     }
//
//     /**
//      * Unlocks the canvas. After this is called, {@link buildCanvas} will create a new canvas.
//      */
//     public static unlockCanvas(): void {
//         CanvasContext._lockedCanvas = false;
//     }
//
//     /**
//      * Resizes the canvas and decorates the canvas with the appropriate
//      * updated attributes.
//      */
//     public static resizeCanvas(): void {
//         if (CanvasContext._matchingWindowRatio) {
//             CanvasContext.updateAspectRatio(ASPECT_RATIOS.MATCH);
//         } else {
//             CanvasContext.updateCanvas();
//         }
//     }
//
//     // TODO - unit test -> initial aspect ratio
//     /**
//      * Update the current aspect ratio of the canvas to the given aspect ratio.
//      * This method will resize the canvas and decorate it with the appropriate
//      * updated attributes.
//      *
//      * @param aspectRatio
//      */
//     public static updateAspectRatio(aspectRatio: AspectRatio): void {
//         CanvasContext.aspectRatio = aspectRatio;
//
//         const ratioHandler: AspectRatioHandler =
//             new AspectRatioHandler(CanvasContext._aspectRatio, CanvasContext._resolution);
//         const p5: P5Lib = P5Context.p5;
//
//         p5.resizeCanvas(ratioHandler.width, ratioHandler.height);
//         CanvasContext.updateCanvas();
//     }
//
//     /**
//      * Update the current resolution of the canvas to the given resolution.
//      * This method will resize the canvas and decorate it with the appropriate
//      * updated attributes.
//      *
//      * @param resolution
//      */
//     public static updateResolution(resolution: number): void {
//         CanvasContext._resolution = resolution;
//
//         const p5: P5Lib = P5Context.p5;
//         const ratioHandler: AspectRatioHandler =
//             new AspectRatioHandler(CanvasContext._aspectRatio,
//                 CanvasContext._resolution);
//         const width: number = ratioHandler.width;
//         const height: number = ratioHandler.height;
//
//         p5.resizeCanvas(width, height);
//         CanvasContext.updateCanvas();
//     }
//
//     // TODO - documentation
//     // TODO - unit test coverage
//     private static set aspectRatio(aspectRatio: AspectRatio) {
//         if (aspectRatio === ASPECT_RATIOS.INITIAL || aspectRatio === ASPECT_RATIOS.MATCH) {
//             CanvasContext._aspectRatio = CanvasContext.getWindowAspectRatio();
//         } else {
//             CanvasContext._aspectRatio = aspectRatio;
//         }
//
//         CanvasContext._matchingWindowRatio = (aspectRatio === ASPECT_RATIOS.MATCH);
//     }
//
//     /**
//      * Decorates the canvas with the proper attributes according to current canvas
//      * size and aspect ratio and current browser window size.
//      */
//     private static decorateCanvas(): void {
//         const p5: P5Lib = P5Context.p5;
//         const canvas: P5Lib.Element | null = p5.select('canvas');
//
//         if (canvas) {
//             const goalRatio: number = CanvasContext._aspectRatio.WIDTH_RATIO / CanvasContext._aspectRatio.HEIGHT_RATIO;
//             const actualRatio: number = p5.windowWidth / p5.windowHeight;
//
//             if (goalRatio < actualRatio) {
//                 canvas.attribute('style', 'height: 100vh;');
//             } else {
//                 canvas.attribute('style', 'width: 100vw;');
//             }
//         }
//     }
//
//     // TODO - docs
//     // TODO - unit test
//     private static updateCanvas(): void {
//         CanvasContext.decorateCanvas();
//         ScreenHandler.publishRedraw();
//     }
//
//     // TODO - docs
//     // TODO - check unit tests coverage
//     private static getWindowAspectRatio(): AspectRatio {
//         const windowWidth: number = P5Context.p5.windowWidth;
//         const windowHeight: number = P5Context.p5.windowHeight;
//         const windowAspectRatio: AspectRatio | undefined =
//             AspectRatioHandler.buildAspectRatioFromDimensions(windowWidth, windowHeight, 'window');
//
//         return (windowAspectRatio ?? ASPECT_RATIOS.SQUARE);
//     }
}
