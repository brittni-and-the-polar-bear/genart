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
            { min: 0, max: 0, expectedMin: 0, expectedMax: 0, warning: false }
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
});

describe('Range tests', (): void => {
    // todo - test each
    // - 10, 100
    // - 100, 10
    // - 10, 10
    // - undefined, undefined
    // - null, null
    // - string, string
    test('new Range(min, max)', (): void => {
        const min: number = 10;
        const max: number = 100;
        const expectedMin: number = min;
        const expectedMax: number = max;
        const range: Range = new Range(min, max);

        expect(range.min).toBe(expectedMin);
        expect(range.max).toBe(expectedMax);
    });



    test('new Range(min, max) with bad min and max', (): void => {
        const min: number = 100;
        const max: number = 10;
        const expectedMin: number = max;
        const expectedMax: number = min;
        const range: Range = new Range(min, max);

        expect(range.min).toBe(expectedMin);
        expect(range.max).toBe(expectedMax);
    });

    test('Range.min setter', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const min: number = 10;
        const max: number = 100;
        const newMin: number = 0;
        const range: Range = new Range(min, max);

        range.min = newMin;

        expect(range.min).toBe(newMin);
        expect(range.max).toBe(max);

        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Range.min setter with bad value', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const min: number = 10;
        const max: number = 100;
        const newMin: number = 200;
        const range: Range = new Range(min, max);

        range.min = newMin;

        expect(range.min).toBe(max);
        expect(range.max).toBe(newMin);

        expect(logSpy).toHaveBeenCalled();
        logSpy.mockRestore();
    });

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
