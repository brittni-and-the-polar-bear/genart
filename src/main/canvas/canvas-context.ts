/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import { SketchContext } from 'context';

import { ASPECT_RATIOS, AspectRatio, AspectRatioHandler } from './aspect-ratio';

/**
 * The CanvasContext provides static access to information and methods
 * for the running p5.js sketch canvas.
 *
 * @category Canvas Context
 */
export class CanvasContext {
    private static _activeCanvas: boolean = false;
    private static _isWebGL: boolean = false;
    private static _aspectRatio: AspectRatio = ASPECT_RATIOS.SQUARE;
    private static _resolution: number = 1080;

    // TODO - unit test
    // TODO - documentation
    public static buildCanvas(aspectRatio: AspectRatio, resolution: number, canvasType?: string) {
        if (!CanvasContext._activeCanvas) {
            CanvasContext._aspectRatio = aspectRatio;
            CanvasContext._resolution = resolution;

            const p5: P5Lib = SketchContext.p5;
            const ratioHandler: AspectRatioHandler = new AspectRatioHandler(CanvasContext._aspectRatio, CanvasContext._resolution);
            const width: number = ratioHandler.width;
            const height: number = ratioHandler.height;

            if (canvasType && canvasType === p5.WEBGL) {
                p5.createCanvas(width, height, p5.WEBGL);
                CanvasContext._isWebGL = true;
            } else {
                p5.createCanvas(width, height);
                CanvasContext._isWebGL = false;
            }

            CanvasContext.decorateCanvas();
            CanvasContext._activeCanvas = true;
        }
    }

    /**
     * Is the canvas rendering mode set to WebGL?
     */
    public static get isWebGL(): boolean {
        return CanvasContext._isWebGL;
    }

    // TODO - docs
    // TODO - unit test
    public static get maxHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.height;

        if (CanvasContext.isWebGL) {
            max = (p5.height / 2.0);
        }

        return max;
    }

    // TODO - docs
    // TODO - unit tests
    public static get maxWidth(): number {
        const p5: P5Lib = SketchContext.p5;
        let max: number = p5.width;

        if (CanvasContext.isWebGL) {
            max = (p5.width / 2.0);
        }

        return max;
    }

    // TODO - docs
    // TODO - unit tests
    public static get minHeight(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.height / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - docs
    // TODO - unit tests
    public static get minWidth(): number {
        const p5: P5Lib = SketchContext.p5;
        let min: number = 0;

        if (CanvasContext.isWebGL) {
            min = (p5.width / 2.0) * -1.0;
        }

        return min;
    }

    // TODO - unit test
    // TODO - docs
    public static get defaultStroke(): number {
        const { p5 } = SketchContext;
        const maxDimension: number = Math.max(p5.width, p5.height);
        return maxDimension * 0.002;
    }

    // TODO - documentation
    // TODO - unit test?
    public static resizeCanvas(): void {
        CanvasContext.decorateCanvas();
    }

    // TODO - documentation
    // TODO - unit test
    public static updateAspectRatio(aspectRatio: AspectRatio): void {
        CanvasContext._aspectRatio = aspectRatio;

        const { p5 } = SketchContext;
        const ratioHandler: AspectRatioHandler = new AspectRatioHandler(CanvasContext._aspectRatio, CanvasContext._resolution);
        const width: number = ratioHandler.width;
        const height: number = ratioHandler.height;

        p5.resizeCanvas(width, height);
        CanvasContext.decorateCanvas();
    }

    // public static updateResolution(resolution: number): void {
    //     // TODO - implement method
    // }

    // TODO - documentation
    // TODO - unit test
    private static decorateCanvas(): void {
        const { p5 } = SketchContext;
        const canvas: P5Lib.Element | null = p5.select('canvas');

        if (canvas) {
            const goalRatio: number = CanvasContext._aspectRatio.WIDTH_RATIO / CanvasContext._aspectRatio.HEIGHT_RATIO;
            const actualRatio: number = p5.windowWidth / p5.windowHeight;

            if (goalRatio < actualRatio) {
                canvas.attribute('style', 'height: 100vh;');
            } else {
                canvas.attribute('style', 'width: 100vw;');
            }
        }
    }
}
