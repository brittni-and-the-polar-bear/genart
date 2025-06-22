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

import { StringMap } from 'map';

interface KeyValuePair {
    readonly key: string;
    readonly value: number;
}

function verifyEmptyMap<Type>(map: StringMap<Type>, originalMap: StringMap<Type> | Map<string, Type>): void {
    expect(map.size).toBe(0);
    verifyMapEntries(map, originalMap);
}

function verifyMapEntries<Type>(map: StringMap<Type>, originalMap: StringMap<Type> | Map<string, Type>): void {
    expect(map.size).toBe(originalMap.size);
    expect(Array.from(map.entries())).toEqual(Array.from(originalMap.entries()));
}

function verifyMapValues<Type>(map: StringMap<Type>, originalMap: StringMap<Type> | Map<string, Type>): void {
    expect(map.size).toBe(originalMap.size);
    expect(Array.from(map.values())).toEqual(Array.from(originalMap.values()));
}

function verifyMapKeys<Type>(map: StringMap<Type>, originalMap: StringMap<Type> | Map<string, Type>): void {
    expect(map.size).toBe(originalMap.size);
    expect(Array.from(map.keys())).toEqual(Array.from(originalMap.keys()));
}

function verifyIndependentMaps<Type>(map: StringMap<Type>,
                                     originalMap: StringMap<Type> | Map<string, Type>,
                                     originalKey: string,
                                     originalValue: Type,
                                     newValue: Type): void {
    map.set(originalKey, newValue);
    expect(originalMap.get(originalKey)).toBe(originalValue);
}

function buildMap<Type>(pairs: [string, Type][]): Map<string, Type> {
    return new Map<string, Type>(pairs);
}

function buildStringMap<Type>(pairs: [string, Type][]): StringMap<Type> {
    const map: StringMap<Type> = new StringMap<Type>();
    pairs.forEach((pair: [string, Type]): void => map.set(pair[0], pair[1]));
    return map;
}

describe('StringMap', (): void => {
    const numberPairs: [string, number][] = [
        ['alice', 1],
        ['bob', 2],
        ['dave', 3],
        ['jane', 4],
        ['harry', 1],
    ];

    const stringPairs: [string, string][] = [
        ['alice', 'dog'],
        ['bob', 'cat'],
        ['dave', 'bird'],
        ['jane', 'ferret'],
        ['peter', 'cat'],
    ];

    const emptyMapTestCases = [
        { originalMap: new Map<string, number>(), originalKey: 'alice', originalValue: undefined, newValue: 10 },
        { originalMap: new StringMap<number>(), originalKey: 'alice', originalValue: undefined, newValue: 10 },
        { originalMap: new Map<string, string>(), originalKey: 'alice', originalValue: undefined, newValue: 'hello' },
        { originalMap: new StringMap<string>(), originalKey: 'alice', originalValue: undefined, newValue: 'hello' },
        { originalMap: new Map<string, (() => number)>(), originalKey: 'random', originalValue: undefined, newValue: Math.random },
        { originalMap: new StringMap<(() => number)>(), originalKey: 'random', originalValue: undefined, newValue: Math.random }
    ];

    const mapTestCases = [
        { originalMap: buildMap(numberPairs), originalKey: 'charlie', originalValue: 5, newValue: 50 },
        { originalMap: buildStringMap(numberPairs), originalKey: 'charlie', originalValue: 5, newValue: 50 },
        { originalMap: buildMap(stringPairs), originalKey: 'charlie', originalValue: 'dog', newValue: 'chinchilla'},
        { originalMap: buildStringMap(stringPairs), originalKey: 'charlie', originalValue: 'dog', newValue: 'chinchilla'}
    ];

    const keyValueTestCases = [
        { key: 'alice', value: 10 },
        { key: 'bob', value: 'blue' },
        { key: 'random', value: ((): number => {return 3;})},
        { key: 'isHot', value: false }
    ];

    const keyValueTestCasesWithNewValue = [
        { key: 'alice', value: 10, newValue: 100 },
        { key: 'bob', value: 'blue', newValue: 'red' },
        { key: 'random', value: ((): number => {return 3;}), newValue: ((): number => {return 17})},
        { key: 'isHot', value: false, newValue: true },
        { key: 'alice', value: undefined, newValue: 50 },
        { key: 'alice', value: 10, newValue: undefined }
    ];

    describe('constructor', (): void => {
        test('new StringMap<ValueType>();', (): void => {
            const map: StringMap<number> = new StringMap<number>();
            expect(map.size).toBe(0);
        });

        test.each(
            mapTestCases
        )('new StringMap<ValueType>(map); $#', ({ originalMap, originalKey, originalValue, newValue }: { originalMap: StringMap<unknown> | Map<string, unknown>; originalValue: unknown; originalKey: string; newValue: unknown}): void => {
            originalMap.set(originalKey, originalValue);
            const map: StringMap<unknown> = new StringMap<unknown>(originalMap);

            verifyMapEntries(map, originalMap);
            verifyIndependentMaps(map, originalMap, originalKey, originalValue, newValue);
        });

        test.each(
            emptyMapTestCases
        )('new StringMap<ValueType>(StringMap); - empty map $#', ({ originalMap, originalKey, originalValue, newValue }: { originalMap: StringMap<unknown> | Map<string, unknown>; originalValue: undefined; originalKey: string; newValue: unknown}): void => {
            const map: StringMap<unknown> = new StringMap<unknown>(originalMap);

            verifyEmptyMap(map, originalMap);
            verifyIndependentMaps(map, originalMap, originalKey, originalValue, newValue);
        });
    });

    describe('StringMap.copy();', (): void => {
        test('StringMap.copy(StringMap);', (): void => {
            const originalMap: StringMap<number> = new StringMap<number>();
            const originalKey: string = 'alice';
            const originalValue: number = 1;
            const newValue: number = 10;
            originalMap.set(originalKey, originalValue);
            originalMap.set('bob', 2);
            originalMap.set('charlie', 3);

            const map: StringMap<number> = StringMap.copy(originalMap);

            expect(map.size).toBe(originalMap.size);
            expect(Array.from(map.entries())).toEqual(Array.from(originalMap.entries()));

            // Verify independent copies
            map.set(originalKey, newValue);
            expect(originalMap.get(originalKey)).toBe(originalValue);
        });

        test.each(
            emptyMapTestCases
        )('StringMap.copy(map); - empty map $#', ({ originalMap, originalKey, originalValue, newValue }: { originalMap: StringMap<unknown> | Map<string, unknown>; originalValue: undefined; originalKey: string; newValue: unknown}): void => {
            const map: StringMap<unknown> = StringMap.copy(originalMap);

            verifyEmptyMap(map, originalMap);
            verifyIndependentMaps(map, originalMap, originalKey, originalValue, newValue);
        });

        test.each(
            mapTestCases
        )('StringMap.copy(map); $#', ({ originalMap, originalKey, originalValue, newValue }: { originalMap: StringMap<unknown> | Map<string, unknown>; originalValue: unknown; originalKey: string; newValue: unknown}): void => {
            originalMap.set(originalKey, originalValue);
            const map: StringMap<unknown> = StringMap.copy(originalMap);

            verifyMapEntries(map, originalMap);
            verifyIndependentMaps(map, originalMap, originalKey, originalValue, newValue);
        });
    });

    describe('StringMap.get();', (): void => {
        test.each(
            keyValueTestCases
        )('StringMap.get(key) $#', ( {key, value }: { key: string; value: unknown }): void => {
            const map: StringMap<unknown> = new StringMap<unknown>();
            map.set(key, value);
            expect(map.get(key)).toEqual(value);
        });
    });

    describe('StringMap.set()', (): void => {
        test.each(
            keyValueTestCasesWithNewValue
        )('StringMap.set($key, $value); StringMap.set($key, $newValue);', ({key, value, newValue }: { key: string, value: unknown, newValue: unknown }): void => {
            expect(value).not.toEqual(newValue);

            const map: StringMap<unknown> = new StringMap<unknown>();
            map.set(key, value);

            expect(map.get(key)).toEqual(value);

            map.set(key, newValue);

            expect(map.get(key)).toEqual(newValue);
        });
    });

    describe('StringMap.setIfAbsent()', (): void => {
        test.each(
            keyValueTestCasesWithNewValue
        )('StringMap.setIfAbsent($key, $value); StringMap.setIfAbsent($key, $newValue);', ({key, value, newValue }: { key: string, value: unknown, newValue: unknown }): void => {
            expect(value).not.toEqual(newValue);

            const map: StringMap<unknown> = new StringMap<unknown>();
            let success: boolean = map.setIfAbsent(key, value);

            expect(success).toBeTruthy();
            expect(map.get(key)).toEqual(value);

            success = map.setIfAbsent(key, newValue);

            expect(success).toBeFalsy();
            expect(map.get(key)).toEqual(value);
        });

        test.each(
            keyValueTestCasesWithNewValue
        )('StringMap.set($key, $value); StringMap.setIfAbsent($key, $newValue); StringMap.delete($key); StringMap.setIfAbsent($key, $newValue);', ({key, value, newValue }: { key: string, value: unknown, newValue: unknown }): void => {
            expect(value).not.toEqual(newValue);

            const map: StringMap<unknown> = new StringMap<unknown>();
            map.set(key, value);

            expect(map.get(key)).toEqual(value);

            let success: boolean = map.setIfAbsent(key, newValue);

            expect(success).toBeFalsy();
            expect(map.get(key)).toEqual(value);

            success = map.delete(key);

            expect(success).toBeTruthy();

            success = map.setIfAbsent(key, newValue);

            expect(success).toBeTruthy();
            expect(map.get(key)).toEqual(newValue);
        });

        test.each(
            keyValueTestCasesWithNewValue
        )('StringMap.setIfAbsent($key, $value); StringMap.setIfAbsent($key, $newValue); - console warnings', ({key, value, newValue }: { key: string, value: unknown, newValue: unknown }): void => {
            const logSpy = jest.spyOn(global.console, 'warn');
            const message: string = 'warning: key already present in map';
            expect(value).not.toEqual(newValue);

            const map: StringMap<unknown> = new StringMap<unknown>();
            let success: boolean = map.setIfAbsent(key, value, message);

            expect(success).toBeTruthy();
            expect(map.get(key)).toEqual(value);
            expect(logSpy).not.toHaveBeenCalled();
            logSpy.mockClear();

            success = map.setIfAbsent(key, newValue, message);

            expect(success).toBeFalsy();
            expect(map.get(key)).toEqual(value);
            expect(logSpy).toHaveBeenCalled();
            expect(logSpy).toHaveBeenCalledWith(message);
            logSpy.mockClear();
            logSpy.mockRestore();
        });
    });

    describe('StringMap.hasKey()', (): void => {
        test.each(
            keyValueTestCases
        )('StringMap.hasKey($key)', ({key, value}: { key: string, value: unknown }): void => {
            const map: StringMap<unknown> = new StringMap<unknown>();
            map.set(key, value);
            expect(map.hasKey(key)).toBeTruthy();
            expect(map.hasKey('not a key')).toBeFalsy();
        });
    });

    describe('StringMap.values()', (): void => {
       test.each([
           { pairs: stringPairs },
           { pairs: numberPairs }
       ])('StringMap.values() $#', ({ pairs }: { pairs: [string, unknown][] }): void => {
           const comparisonMap: Map<string, unknown> = new Map<string, unknown>(pairs);
           const map = new StringMap<unknown>();
           pairs.forEach(pair => map.set(pair[0], pair[1]));
           verifyMapValues(map, comparisonMap);
       });
    });

    describe('StringMap.keys()', (): void => {
        test.each([
            { pairs: stringPairs },
            { pairs: numberPairs }
        ])('StringMap.keys() $#', ({ pairs }: { pairs: [string, unknown][] }): void => {
            const comparisonMap: Map<string, unknown> = new Map<string, unknown>(pairs);
            const map = new StringMap<unknown>();
            pairs.forEach(pair => map.set(pair[0], pair[1]));
            verifyMapKeys(map, comparisonMap);
        });
    });
});
