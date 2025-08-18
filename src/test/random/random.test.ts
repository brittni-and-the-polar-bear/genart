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

import { Discriminators } from 'discriminator';
import { Range } from 'math';
import { Random, WeightedElement } from 'random';

import { RANDOM_TEST_TRIES } from 'unit-test/shared';

describe('Random tests', (): void => {
    test.each([
        { min: 0, max: 100, expectMin: 0, expectMax: 100 },
        { min: -50, max: 50, expectMin: -50, expectMax: 50 },
        { min: -200, max: -45, expectMin: -200, expectMax: -45 },
        { min: 400, max: 600, expectMin: 400, expectMax: 600 },
        { min: 7_500, max: 0, expectMin: 0, expectMax: 7_500 },
        { min: 83, max: -189, expectMin: -189, expectMax: 83 },
        { min: -25, max: -710, expectMin: -710, expectMax: -25 },
        { min: 1_500, max: 1_000, expectMin: 1_000, expectMax: 1_500 },
        { min: 0, max: 1, expectMin: 0, expectMax: 1 },
        { min: 0.25, max: 0.8, expectMin: 0.25, expectMax: 0.8 },
        { min: -0.9, max: 0.75, expectMin: -0.9, expectMax: 0.75 }
    ])('$# Random.randomFloat($min, $max)',
        ({ min, max, expectMin, expectMax }): void => {
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomFloat(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
            }
        }
    );

    test('Random.randomFloat(min == max)', (): void => {
        const num: number = 5;
        const value: number = Random.randomFloat(num, num);
        expect(value).toBe(num);
    });

    test.each([
        { min: 0, max: 250, expectMin: 0, expectMax: 250 },
        { min: -65, max: 65, expectMin: -65, expectMax: 65 },
        { min: -270, max: -85, expectMin: -270, expectMax: -85 },
        { min: 500, max: 550, expectMin: 500, expectMax: 550 },
        { min: 6_000, max: 0, expectMin: 0, expectMax: 6_000 },
        { min: 99, max: -90, expectMin: -90, expectMax: 99 },
        { min: -30, max: -60, expectMin: -60, expectMax: -30 },
        { min: 1_750, max: 800, expectMin: 800, expectMax: 1_750 },
        { min: 0, max: 1, expectMin: 0, expectMax: 1 },
        { min: 0, max: 2, expectMin: 0, expectMax: 2 }
    ])('$# Random.randomFloatInRange(new Range($min, $max))',
        ({ min, max, expectMin, expectMax }): void => {
            const range: Range = new Range(min, max);
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomFloatInRange(range);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
            }
        }
    );

    test('Random.randomFloatInRange(range with min == max)', (): void => {
        const num: number = 10;
        const range: Range = new Range(num, num);
        const value: number = Random.randomFloatInRange(range);
        expect(value).toBe(num);
    });

    test.each([
        { min: 0, max: 250, expectMin: 0, expectMax: 250 },
        { min: -65, max: 65, expectMin: -65, expectMax: 65 },
        { min: -270, max: -85, expectMin: -270, expectMax: -85 },
        { min: 500, max: 550, expectMin: 500, expectMax: 550 },
        { min: 6_000, max: 0, expectMin: 0, expectMax: 6_000 },
        { min: 99, max: -90, expectMin: -90, expectMax: 99 },
        { min: -30, max: -60, expectMin: -60, expectMax: -30 },
        { min: 1_750, max: 800, expectMin: 800, expectMax: 1_750 },
        { min: 0, max: 1, expectMin: 0, expectMax: 1 },
        { min: 0, max: 2, expectMin: 0, expectMax: 2 }
    ])('$# Random.randomInt($min, $max)',
        ({ min, max, expectMin, expectMax }): void => {
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomInt(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
                expect(Math.floor(r)).toBe(r);
            }
        }
    );

    test('Random.randomInt(min == max)', (): void => {
        const num: number = -20;
        const value: number = Random.randomInt(num, num);
        expect(value).toBe(num);
    });

    test.each([
        { min: 0, max: 250, expectMin: 0, expectMax: 250 },
        { min: -65, max: 65, expectMin: -65, expectMax: 65 },
        { min: -270, max: -85, expectMin: -270, expectMax: -85 },
        { min: 500, max: 550, expectMin: 500, expectMax: 550 },
        { min: 6_000, max: 0, expectMin: 0, expectMax: 6_000 },
        { min: 99, max: -90, expectMin: -90, expectMax: 99 },
        { min: -30, max: -60, expectMin: -60, expectMax: -30 },
        { min: 1_750, max: 800, expectMin: 800, expectMax: 1_750 },
        { min: 0, max: 1, expectMin: 0, expectMax: 1 },
        { min: 0, max: 2, expectMin: 0, expectMax: 2 }
    ])('$# Random.randomIntInRange(new Range($min, $max))',
        ({ min, max, expectMin, expectMax }): void => {
            const range: Range = new Range(min, max);
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomIntInRange(range);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
                expect(Math.floor(r)).toBe(r);
            }
        }
    );

    test('Random.randomIntInRange(range with min == max)', (): void => {
        const num: number = 1_456;
        const range: Range = new Range(num, num);
        const value: number = Random.randomIntInRange(range);
        expect(value).toBe(num);
    });

    test('Random.randomBoolean()', (): void => {
        let trueResult: boolean = false;
        let falseResult: boolean = false;

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const b: boolean = Random.randomBoolean();

            if (!trueResult && b) {
                trueResult = true;
            }

            if (!falseResult && !b) {
                falseResult = true;
            }

            if (trueResult && falseResult) {
                break;
            }
        }

        expect(trueResult).toBeTruthy();
        expect(falseResult).toBeTruthy();
    });

    test('Random.randomBoolean(weight)', (): void => {
        let trueResult: boolean = false;
        let falseResult: boolean = false;

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const b: boolean = Random.randomBoolean(0.6);

            if (!trueResult && b) {
                trueResult = true;
            }

            if (!falseResult && !b) {
                falseResult = true;
            }

            if (trueResult && falseResult) {
                break;
            }
        }

        expect(trueResult).toBeTruthy();
        expect(falseResult).toBeTruthy();
    });

    test('Random.randomBoolean(0)', (): void => {
        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomBoolean(0)).toBe(false);
        }
    });

    test('Random.randomBoolean(1)', (): void => {
        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomBoolean(1)).toBe(true);
        }
    });

    test('Random.randomElement(numbers)', (): void => {
        const list: number[] = [10, 68, 24.5, -3];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: number | undefined = Random.randomElement(list);
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('Random.randomElement(strings)', (): void => {
        const list: string[] = ['hello', 'goodbye', 'jack', 'sally', 'george'];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: string | undefined = Random.randomElement(list);
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('Random.randomElement(empty number list)', (): void => {
        const empty: number[] = [];
        const choice: number | undefined = Random.randomElement(empty);
        expect(choice).toBeUndefined();
    });

    test('Random.randomElement(empty string list)', (): void => {
        const empty: string[] = [];
        const choice: string | undefined = Random.randomElement(empty);
        expect(choice).toBeUndefined();
    });

    test('Random.randomElement(single element number list)', (): void => {
        const num: number = 42;
        const list: number[] = [num];
        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomElement(list)).toBe(num);
        }
    });

    test('Random.randomElement(single element string list)', (): void => {
        const word: string = 'chocolate';
        const list: string[] = [word];
        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomElement(list)).toBe(word);
        }
    });

    test('Random.randomWeightedElement(numbers)', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedNums: WeightedElement<number>[] = [
            { VALUE: 48, WEIGHT: 0.2, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 23.96, WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 10.445, WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 11, WEIGHT: 0.1, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const expectedValues: number[] = weightedNums.map((e: WeightedElement<number>) => e.VALUE);
        const actualValues: Set<number> = new Set<number>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const result: number | undefined = Random.randomWeightedElement(weightedNums);

            if (result) {
                actualValues.add(result);
            }

            if (actualValues.size === expectedValues.length) {
                break;
            }
        }

        for (const s of actualValues) {
            expect(expectedValues).toContain(s);
        }

        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(strings)', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedStrings: WeightedElement<string>[] = [
            { VALUE: 'hello', WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'goodbye', WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'howdy!', WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const expectedValues: string[] = weightedStrings.map((e: WeightedElement<string>) => e.VALUE);
        const actualValues: Set<string> = new Set<string>();

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const result: string | undefined = Random.randomWeightedElement(weightedStrings);

            if (result) {
                actualValues.add(result);
            }

            if (actualValues.size === expectedValues.length) {
                break;
            }
        }

        for (const s of actualValues) {
            expect(expectedValues).toContain(s);
        }

        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(empty numbers list)', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const numbers: WeightedElement<number>[] = [];

        const result: number | undefined = Random.randomWeightedElement(numbers);
        expect(result).toBeUndefined();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(empty string list)', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const strings: WeightedElement<string>[] = [];
        const result: string | undefined = Random.randomWeightedElement(strings);
        expect(result).toBeUndefined();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(numbers) - weight sum < 1', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedNums: WeightedElement<number>[] = [
            { VALUE: 48, WEIGHT: 0.2, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 23.96, WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 10.445, WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const result: number | undefined = Random.randomWeightedElement(weightedNums);
        expect(result).toBeUndefined();
        expect(logSpy).toHaveBeenCalledTimes(1);
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(strings) - weight sum < 1', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedStrings: WeightedElement<string>[] = [
            { VALUE: 'hello', WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'goodbye', WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'howdy!', WEIGHT: 0.29, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const result: string | undefined = Random.randomWeightedElement(weightedStrings);
        expect(result).toBeUndefined();
        expect(logSpy).toHaveBeenCalledTimes(1);
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(numbers) - weight sum > 1', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedNums: WeightedElement<number>[] = [
            { VALUE: 48, WEIGHT: 0.2, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 23.96, WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 10.445, WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 11, WEIGHT: 0.2, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const expectedValues: number[] = weightedNums.map((e: WeightedElement<number>) => e.VALUE);
        const result: number | undefined = Random.randomWeightedElement(weightedNums);
        expect(result).toBeTruthy();

        if (result) {
            expect(expectedValues).toContain(result);
        }

        expect(logSpy).toHaveBeenCalledTimes(1);
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(strings) - weight sum > 1', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const weightedStrings: WeightedElement<string>[] = [
            { VALUE: 'hello', WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'goodbye', WEIGHT: 0.3, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: 'howdy!', WEIGHT: 0.4, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const expectedValues: string[] = weightedStrings.map((e: WeightedElement<string>) => e.VALUE);
        const result: string | undefined = Random.randomWeightedElement(weightedStrings);
        expect(result).toBeTruthy();

        if (result) {
            expect(expectedValues).toContain(result);
        }

        expect(logSpy).toHaveBeenCalledTimes(1);
        logSpy.mockRestore();
    });

    test('Random.randomWeightedElement(single element number list)', (): void => {
        const num: number = 50;
        const weightedList: WeightedElement<number>[] = [{ VALUE: num, WEIGHT: 1, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomWeightedElement(weightedList)).toBe(num);
        }
    });

    test('Random.randomWeightedElement(single element string list)', (): void => {
        const word: string = 'feather';
        const weightedList: WeightedElement<string>[] = [{ VALUE: word, WEIGHT: 1, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            expect(Random.randomWeightedElement(weightedList)).toBe(word);
        }
    });

    test('Random.randomMethod setter', (): void => {
        Random.randomMethod = (): number => {
            return 1;
        };
        const min: number = 10;
        const max: number = 100;
        expect(Random.randomFloat(min, max)).toBe(max);
    });
});
