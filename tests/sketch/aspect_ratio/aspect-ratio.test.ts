/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { describe, test } from 'vitest';

describe('AspectRatio', (): void => {
    describe('AspectRatio constructor', (): void => {
        describe('new AspectRatio(width, height)', (): void => {
            test.todo('new AspectRatio(width, height)');

            test.todo('new AspectRatio(width, height) - negative width and/or height');
        });

        describe('new AspectRatio(width, height, name)', (): void => {
            test.todo('new AspectRatio(width, height, name)');

            test.todo('new AspectRatio(width, height, name) - name undefined');

            test.todo('new AspectRatio(width, height, name) - negative width and/or height');

            test.todo('new AspectRatio(width, height, name) - negative width and/or height with undefined name');
        });

        describe('new AspectRatio(AspectRatioConfig)', (): void => {
            test.todo('new AspectRatio(AspectRatioConfig)');

            test.todo('new AspectRatio(AspectRatioConfig) - undefined name');

            test.todo('new AspectRatio(AspectRatioConfig) - negative width ratio and/or height ratio');

            test.todo('new AspectRatio(AspectRatioConfig) - negative width ratio and/or height ratio with undefined name');
        });
    });

    describe('aspectRatio.getWidth()', (): void => {
        describe('aspectRatio.getWidth(resolution)', (): void => {
            test.todo('aspectRatio.getWidth(resolution)');

            test.todo('aspectRatio.getWidth(resolution) - negative resolution');
        });

        describe('aspectRatio.getWidth(resolution, applyToLongSide)', (): void => {
            test.todo('aspectRatio.getWidth(resolution, applyToLongSide)');

            test.todo('aspectRatio.getWidth(resolution, applyToLongSide) - negative resolution');

            test.todo('aspectRatio.getWidth(resolution, applyToLongSide) - apply to long side undefined');

            test.todo('aspectRatio.getWidth(resolution, applyToLongSide) - negative resolution and apply to long side undefined');
        });
    });

    describe('aspectRatio.getHeight()', (): void => {
        describe('aspectRatio.getHeight(resolution)', (): void => {
            test.todo('aspectRatio.getHeight(resolution)');

            test.todo('aspectRatio.getHeight(resolution) - negative resolution');
        });

        describe('aspectRatio.getHeight(resolution, applyToLongSide)', (): void => {
            test.todo('aspectRatio.getHeight(resolution, applyToLongSide)');

            test.todo('aspectRatio.getHeight(resolution, applyToLongSide) - negative resolution');

            test.todo('aspectRatio.getHeight(resolution, applyToLongSide) - apply to long side undefined');

            test.todo('aspectRatio.getHeight(resolution, applyToLongSide) - negative resolution and apply to long side undefined');
        });
    });
});
