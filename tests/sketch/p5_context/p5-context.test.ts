/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
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

import p5 from 'p5';

import { describe, test, expect, afterAll, afterEach } from 'vitest';

import { P5Context } from '../../../src';

describe('P5Context', (): void => {
    afterEach((): void => {
        P5Context.reset();
    });

    afterAll((): void => {
        P5Context.reset();
    });

    describe('P5Context constructor', (): void => {
        test('new P5Context()', (): void => {
            expect(() => new P5Context()).toThrow('P5Context is a static class and cannot be instantiated.');
        });
    });

    describe('P5Context.instance', (): void => {
        test('P5Context.instance default', (): void => {
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance.width).toBe(0);
            expect(P5Context.instance.height).toBe(0);
            expect(P5Context.instance.color(255, 0, 0)).toBeTruthy();
        });

        test('P5Context.instance', (): void => {
            expect(P5Context.instance).toBeTruthy();

            const expectedWidth: number = 250;
            const expectedHeight: number = 250;

            P5Context.instance.createCanvas(expectedWidth, expectedHeight);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 255, 0)).toBeTruthy();
        });
    });

    describe('P5Context.init()', (): void => {
        test('P5Context.init(new p5())', (): void => {
            const expectedWidth: number = 500;
            const expectedHeight: number = 250;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(expectedWidth, expectedHeight);
                    p.noLoop();
                };
            });

            const result: boolean = P5Context.init(testInstance);
            expect(result).toBeTruthy();
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });

        test('P5Context.init(new p5(), replace = true) - no existing context', (): void => {
            const expectedWidth: number = 500;
            const expectedHeight: number = 500;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(expectedWidth, expectedHeight);
                    p.noLoop();
                };
            });

            const result: boolean = P5Context.init(testInstance, true);
            expect(result).toBeTruthy();
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });

        test('P5Context.init(new p5(), replace = false) - no existing context', (): void => {
            const expectedWidth: number = 720;
            const expectedHeight: number = 500;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(expectedWidth, expectedHeight);
                    p.noLoop();
                };
            });

            const result: boolean = P5Context.init(testInstance, false);
            expect(result).toBeTruthy();
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });

        test('P5Context.init(new p5(), replace = true) - existing context', (): void => {
            expect(P5Context.instance).toBeTruthy();

            const expectedWidth: number = 720;
            const expectedHeight: number = 720;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(expectedWidth, expectedHeight);
                    p.noLoop();
                };
            });

            const result: boolean = P5Context.init(testInstance, true);
            expect(result).toBeTruthy();
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });

        test('P5Context.init(new p5(), replace = false) - existing context', (): void => {
            expect(P5Context.instance).toBeTruthy();

            const expectedWidth: number = 0;
            const expectedHeight: number = 0;

            const width: number = 1080;
            const height: number = 720;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(width, height);
                    p.noLoop();
                };
            });

            const result: boolean = P5Context.init(testInstance, false);
            expect(result).toBeFalsy();
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).not.toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });
    });

    describe('P5Context.hasInstance()', (): void => {
        test('P5Context.hasInstance() - default context', (): void => {
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.hasInstance()).toBeTruthy();
        });

        test('P5Context.hasInstance() - no existing context', (): void => {
            expect(P5Context.hasInstance()).toBeFalsy();
        });

        test('P5Context.hasInstance() - after reset', (): void => {
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.hasInstance()).toBeTruthy();

            P5Context.reset();

            expect(P5Context.hasInstance()).toBeFalsy();
        });
    });

    describe('P5Context.reset()', (): void => {
        test('P5Context.reset()', (): void => {
            let expectedWidth: number = 1080;
            let expectedHeight: number = 2160;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(expectedWidth, expectedHeight);
                    p.noLoop();
                };
            });

            P5Context.init(testInstance, true);
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();

            P5Context.reset();

            expect(P5Context.hasInstance()).toBeFalsy();

            expectedHeight = 0;
            expectedWidth = 0;
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).not.toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });

        test('P5Context.reset() with P5Context.init(new p5(), replace = false)', (): void => {
            let expectedHeight: number = 0;
            let expectedWidth: number = 0;

            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();

            const width: number = 1080;
            const height: number = 2160;

            const testInstance = new p5((p: p5): void => {
                p.setup = (): void => {
                    p.createCanvas(width, height);
                    p.noLoop();
                };
            });

            P5Context.init(testInstance, false);
            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).not.toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);

            P5Context.reset();
            P5Context.init(testInstance, false);

            expectedWidth = width;
            expectedHeight = height;

            expect(P5Context.instance).toBeTruthy();
            expect(P5Context.instance).toBe(testInstance);
            expect(P5Context.instance.width).toBe(expectedWidth);
            expect(P5Context.instance.height).toBe(expectedHeight);
            expect(P5Context.instance.color(255, 0, 255)).toBeTruthy();
        });
    });
});
