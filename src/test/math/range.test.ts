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

import { Range } from 'math';

describe('Range', (): void => {
    describe('constructor', (): void => {
        test.each([
            { min: 10, max: 100, expectedMin: 10, expectedMax: 100, warning: false },
            { min: 100, max: 10, expectedMin: 10, expectedMax: 100, warning: true },
            { min: 10, max: 10, expectedMin: 10, expectedMax: 10, warning: false },
            { min: 0, max: 100, expectedMin: 0, expectedMax: 100, warning: false },
            { min: 100, max: 0, expectedMin: 0, expectedMax: 100, warning: true },
            { min: 0, max: 0, expectedMin: 0, expectedMax: 0, warning: false },
            { min: Number.MIN_SAFE_INTEGER, max: Number.MAX_SAFE_INTEGER, expectedMin: Number.MIN_SAFE_INTEGER, expectedMax: Number.MAX_SAFE_INTEGER, warning: false },
            { min: Number.MAX_SAFE_INTEGER, max: Number.MIN_SAFE_INTEGER, expectedMin: Number.MIN_SAFE_INTEGER, expectedMax: Number.MAX_SAFE_INTEGER, warning: true },
            { min: -Infinity, max: Infinity, expectedMin: -Infinity, expectedMax: Infinity, warning: false },
            { min: Infinity, max: -Infinity, expectedMin: -Infinity, expectedMax: Infinity, warning: true },
            { min: -20, max: 20, expectedMin: -20, expectedMax: 20, warning: false },
            { min: 20, max: -20, expectedMin: -20, expectedMax: 20, warning: true },
            { min: -20, max: 0, expectedMin: -20, expectedMax: 0, warning: false },
            { min: 0, max: -20, expectedMin: -20, expectedMax: 0, warning: true }
        ])('new Range($min, $max);', ({ min, max, expectedMin, expectedMax, warning }: { min: unknown, max: unknown, expectedMin: unknown, expectedMax: unknown, warning: boolean }): void => {
            const logSpy = jest.spyOn(global.console, 'warn');
            const range: Range = new Range(min as number, max as number);
            expect(range.min).toBe(expectedMin);
            expect(range.max).toBe(expectedMax);

            if (warning) {
                expect(logSpy).toHaveBeenCalled();
            } else {
                expect(logSpy).not.toHaveBeenCalled();
            }

            logSpy.mockRestore();
        });
    });

    describe('Range.min', (): void => {
        test.each([
            { originalMin: 10, originalMax: 100, newMin: 0, expectedMin: 0, expectedMax: 100, warning: false, warningCount: 0 },
            { originalMin: 10, originalMax: 100, newMin: 200, expectedMin: 100, expectedMax: 200, warning: true, warningCount: 1 },
            { originalMin: 10, originalMax: 100, newMin: 100, expectedMin: 100, expectedMax: 100, warning: false, warningCount: 0 },
            { originalMin: 10, originalMax: 100, newMin: -100, expectedMin: -100, expectedMax: 100, warning: false, warningCount: 0 },
            { originalMin: 10, originalMax: 100, newMin: -Infinity, expectedMin: -Infinity, expectedMax: 100, warning: false, warningCount: 0 },
            { originalMin: 10, originalMax: 100, newMin: Infinity, expectedMin: 100, expectedMax: Infinity, warning: true, warningCount: 1 },
            { originalMin: 10, originalMax: 100, newMin: Number.MIN_SAFE_INTEGER, expectedMin: Number.MIN_SAFE_INTEGER, expectedMax: 100, warning: false, warningCount: 0 },
            { originalMin: 10, originalMax: 100, newMin: Number.MAX_SAFE_INTEGER, expectedMin: 100, expectedMax: Number.MAX_SAFE_INTEGER, warning: true, warningCount: 1 },
            { originalMin: 100, originalMax: 10, newMin: 0, expectedMin: 0, expectedMax: 100, warning: true, warningCount: 1 },
            { originalMin: 100, originalMax: 10, newMin: 200, expectedMin: 100, expectedMax: 200, warning: true, warningCount: 2 },
            { originalMin: 100, originalMax: 10, newMin: 100, expectedMin: 100, expectedMax: 100, warning: true, warningCount: 1 },
            { originalMin: 10, originalMax: 10, newMin: 0, expectedMin: 0, expectedMax: 10, warning: true, warningCount: 1 },
            { originalMin: 10, originalMax: 10, newMin: 200, expectedMin: 100, expectedMax: 200, warning: true, warningCount: 2 },
            { originalMin: 100, originalMax: 10, newMin: 100, expectedMin: 100, expectedMax: 100, warning: true, warningCount: 1 },
        ])('new Range($originalMin, $originalMax); range.min = $newMin;', (
            {
                originalMin,
                originalMax,
                newMin,
                expectedMin,
                expectedMax,
                warning,
                warningCount
            }: {
                originalMin: number,
                originalMax: number,
                newMin: number,
                expectedMin: number,
                expectedMax: number,
                warning: boolean,
                warningCount: number
            }): void => {
                const logSpy = jest.spyOn(global.console, 'warn');
                const range: Range = new Range(originalMin, originalMax);

                range.min = newMin;

                expect(range.min).toBe(expectedMin);
                expect(range.max).toBe(expectedMax);

                if (warning) {
                    expect(logSpy).toHaveBeenCalled();
                    expect(logSpy).toHaveBeenCalledTimes(warningCount);
                } else {
                    expect(logSpy).not.toHaveBeenCalled();
                }

                logSpy.mockRestore();
            }
        );
    });
});

describe('Range tests', (): void => {
    test('Range.max setter', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const min: number = 10;
        const max: number = 100;
        const newMax: number = 200;
        const range: Range = new Range(min, max);

        range.max = newMax;

        expect(range.min).toBe(min);
        expect(range.max).toBe(newMax);

        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Range.max setter with bad value', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const min: number = 10;
        const max: number = 100;
        const newMax: number = 0;
        const range: Range = new Range(min, max);

        range.max = newMax;

        expect(range.min).toBe(newMax);
        expect(range.max).toBe(min);

        expect(logSpy).toHaveBeenCalled();
        logSpy.mockRestore();
    });
});
