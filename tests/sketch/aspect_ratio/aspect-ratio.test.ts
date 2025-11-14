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

import { describe, test, expect } from 'vitest';

import { AspectRatio } from '../../../src';

describe('AspectRatio', (): void => {
    describe('AspectRatio constructor', (): void => {
        describe('new AspectRatio(width, height)', (): void => {
            test.each([
                { width: 720, height: 720, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 1080, expectedWidthRatio: 1, expectedHeightRatio: 1.5, expectedName: '1:1.5' },
                { width: 1080, height: 720, expectedWidthRatio: 1.5, expectedHeightRatio: 1, expectedName: '1.5:1' },
                { width: 250, height: 500, expectedWidthRatio: 1, expectedHeightRatio: 2, expectedName: '1:2' },
                { width: 500, height: 250, expectedWidthRatio: 2, expectedHeightRatio: 1, expectedName: '2:1' },
                { width: 100, height: 100, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 0, height: 0, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: -100, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: 720, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: -100, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 0, height: 720, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 0, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' }
            ])('new AspectRatio($width, $height)', ({ width, height, expectedWidthRatio, expectedHeightRatio, expectedName}: { width: number; height: number; expectedWidthRatio: number; expectedHeightRatio: number; expectedName: string; }): void => {
                const aspectRatio = new AspectRatio(width, height);
                expect(aspectRatio.WIDTH_RATIO).toBe(expectedWidthRatio);
                expect(aspectRatio.HEIGHT_RATIO).toBe(expectedHeightRatio);
                expect(aspectRatio.NAME).toBe(expectedName);
            });
        });

        describe('new AspectRatio(width, height, name)', (): void => {
            test.each([
                { width: 720, height: 720, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: 'test name' },
                { width: 720, height: 1080, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1.5, expectedName: 'test name' },
                { width: 1080, height: 720, name: 'test name', expectedWidthRatio: 1.5, expectedHeightRatio: 1, expectedName: 'test name' },
                { width: 250, height: 500, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 2, expectedName: 'test name' },
                { width: 500, height: 250, name: 'test name', expectedWidthRatio: 2, expectedHeightRatio: 1, expectedName: 'test name' },
                { width: 100, height: 100, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: 'test name' },
                { width: 0, height: 0, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: -100, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: 720, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: -100, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 0, height: 720, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 0, name: 'test name', expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 720, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 1080, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1.5, expectedName: '1:1.5' },
                { width: 1080, height: 720, name: undefined, expectedWidthRatio: 1.5, expectedHeightRatio: 1, expectedName: '1.5:1' },
                { width: 250, height: 500, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 2, expectedName: '1:2' },
                { width: 500, height: 250, name: undefined, expectedWidthRatio: 2, expectedHeightRatio: 1, expectedName: '2:1' },
                { width: 100, height: 100, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 0, height: 0, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: -100, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: -100, height: 720, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: -100, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 0, height: 720, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' },
                { width: 720, height: 0, name: undefined, expectedWidthRatio: 1, expectedHeightRatio: 1, expectedName: '1:1' }
            ])('new AspectRatio($width, $height, $name)', ({ width, height, name, expectedWidthRatio, expectedHeightRatio, expectedName}: { width: number; height: number; name: string | undefined; expectedWidthRatio: number; expectedHeightRatio: number; expectedName: string; }): void => {
                const aspectRatio = new AspectRatio(width, height, name);
                expect(aspectRatio.WIDTH_RATIO).toBe(expectedWidthRatio);
                expect(aspectRatio.HEIGHT_RATIO).toBe(expectedHeightRatio);
                expect(aspectRatio.NAME).toBe(expectedName);
            });
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

    describe('aspectRatio.WIDTH_RATIO', (): void => {
        test.todo('aspectRatio.WIDTH_RATIO');
    });
});
