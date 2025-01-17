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

import {Random, WeightedElement} from 'random';
import {Range} from 'math';

import {RANDOM_TEST_TRIES} from 'unit-test/shared';
import {Discriminators} from "discriminator";

describe('random tests', (): void => {
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
    ])('$# random float test: randomFloat($min, $max)',
        ({ min, max, expectMin, expectMax }): void => {
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomFloat(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
            }
        }
    );

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
    ])('$# random float in range test: randomFloatInRange(new Range($min, $max))',
        ({ min, max, expectMin, expectMax }): void => {
            const range: Range = new Range(min, max);
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomFloatInRange(range);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
            }
        }
    );

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
    ])('$# random int test: randomInt($min, $max)',
        ({ min, max, expectMin, expectMax }): void => {
            for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
                const r: number = Random.randomInt(min, max);
                expect(r).toBeGreaterThanOrEqual(expectMin);
                expect(r).toBeLessThan(expectMax);
                expect(Math.floor(r)).toBe(r);
            }
        }
    );

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
    ])('$# random int in range test: randomIntInRange(new Range($min, $max))',
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

    test('test randomBoolean without weight', (): void => {
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

    test('test randomBoolean with weight', (): void => {
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

    test('test randomListElement with number type', (): void => {
        const list: number[] = [10, 68, 24.5, -3];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: number | undefined = Random.randomElement(list);
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('test randomListElement with string type', (): void => {
        const list: string[] = ['hello', 'goodbye', 'jack', 'sally', 'george'];

        for (let i: number = 0; i < RANDOM_TEST_TRIES; i++) {
            const choice: string | undefined = Random.randomElement(list);
            expect(choice).toBeTruthy();
            expect(list).toContain(choice);
        }
    });

    test('test randomListElement with empty number list', (): void => {
        const empty: number[] = [];
        const choice: number | undefined = Random.randomElement(empty);
        expect(choice).toBeUndefined();
    });

    test('test randomListElement with empty string list', (): void => {
        const empty: string[] = [];
        const choice: string | undefined = Random.randomElement(empty);
        expect(choice).toBeUndefined();
    });

    test('test randomWeightedElement with number type', (): void => {
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

    test('test randomWeightedElement with strings', (): void => {
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

    test('test randomWeightedElement with empty number list', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const numbers: WeightedElement<number>[] = [];

        const result: number | undefined = Random.randomWeightedElement(numbers);
        expect(result).toBeUndefined();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('test randomWeightedElement with empty string list', (): void => {
        const logSpy = jest.spyOn(global.console, 'warn');
        const strings: WeightedElement<string>[] = [];
        const result: string | undefined = Random.randomWeightedElement(strings);
        expect(result).toBeUndefined();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockRestore();
    });

    test('test randomWeighedElement with numbers and weight sum < 1', (): void => {
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

    test('test randomWeighedElement with strings and weight sum < 1', (): void => {
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

    test('test randomWeighedElement with numbers and weight sum > 1', (): void => {
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

    test('test randomWeighedElement with strings and weight sum > 1', (): void => {
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

    test('test set random method', (): void => {
        Random.randomMethod = (): number => {
            return 1;
        };
        const min: number = 10;
        const max: number = 100;
        expect(Random.randomFloat(min, max)).toBe(max);
    });
});
