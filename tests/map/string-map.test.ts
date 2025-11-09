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

import { describe, test, expect, beforeAll } from 'vitest';

import { StringMap } from '../../src';

import { testStringMap } from '../test_utils';

describe('StringMap', (): void => {
    describe('StringMap constructor', (): void => {
        test('new StringMap()', (): void => {
            const map: StringMap<string> = new StringMap<string>();
            testStringMap(map, 0);
        });

        test('new StringMap(StringMap)', (): void => {
            const originalMap = new StringMap<string>();
            originalMap.set('a', 'b');
            originalMap.set('c', 'd');

            const map: StringMap<string> = new StringMap<string>(originalMap);
            testStringMap(map, 2);
            expect(map).toEqual(originalMap);
        });

        test('new StringMap(Map)', (): void => {
            const originalMap = new Map<string, string>();
            originalMap.set('a', 'b');
            originalMap.set('c', 'd');
            originalMap.set('e', 'f');

            const map: StringMap<string> = new StringMap<string>(originalMap);
            testStringMap(map, 3);
            expect(map.keys()).toEqual(originalMap.keys());
            expect(map.values()).toEqual(originalMap.values());
            expect(map.entries()).toEqual(originalMap.entries());
        });
    });

    describe('StringMap.copy()', (): void => {
        test('StringMap.copy(StringMap)', (): void => {
            const originalMap = new StringMap<number>();
            originalMap.set('a', 1);
            originalMap.set('c', 2);

            const map: StringMap<number> = StringMap.copy(originalMap);
            testStringMap(map, 2);
            expect(map).toEqual(originalMap);
        });

        test('StringMap.copy(Map)', (): void => {
            const originalMap = new Map<string, number>();
            originalMap.set('a', 1);
            originalMap.set('c', 2);
            originalMap.set('e', 3);

            const map: StringMap<number> = StringMap.copy(originalMap);
            testStringMap(map, 3);
            expect(map.keys()).toEqual(originalMap.keys());
            expect(map.values()).toEqual(originalMap.values());
            expect(map.entries()).toEqual(originalMap.entries());
        });
    });

    describe('stringMap.size', (): void => {
        const map: StringMap<number> = new StringMap<number>();

        beforeAll((): void => {
            map.set('a', 1);
            map.set('b', 2);
            map.set('c', 3);
        });

        test('stringMap.size', (): void => {
            expect(map.size).toBe(3);
        });
    });

    describe('stringMap.get()', (): void => {
        const map: StringMap<number> = new StringMap<number>();

        beforeAll((): void => {
            map.set('a', 1);
            map.set('b', 2);
            map.set('c', 3);
        });

        test.each([
            { key: 'a', expectedValue: 1 },
            { key: 'b', expectedValue: 2 },
            { key: 'c', expectedValue: 3 },
            { key: 'd', expectedValue: undefined },
            { key: '', expectedValue: undefined }
        ])('stringMap.get($key)', ({ key, expectedValue }: { key: string; expectedValue: number | undefined; }): void => {
            expect(map.get(key)).toBe(expectedValue);
        });
    });

    describe('stringMap.set()', (): void => {
        const map: StringMap<number> = new StringMap<number>();

        beforeAll((): void => {
            map.set('a', 1);
            map.set('b', 2);
            map.set('c', 3);
        });

        test.each([
            { key: 'a', originalValue: 1, newValue: 100 },
            { key: 'b', originalValue: 2, newValue: 200 },
            { key: 'c', originalValue: 3, newValue: 300 },
            { key: 'd', originalValue: undefined, newValue: 400 },
            { key: '', originalValue: undefined, newValue: 500 }
        ])('stringMap.set($key, $newValue)', ({ key, originalValue, newValue }: { key: string; originalValue: number | undefined; newValue: number; }): void => {
            expect(map.get(key)).toBe(originalValue);
            map.set(key, newValue);
            expect(map.get(key)).toBe(newValue);
        });
    });

    describe('stringMap.setIfAbsent()', (): void => {
        test.todo('stringMap.setIfAbsent()');
    });

    describe('stringMap.hasKey()', (): void => {
        test.todo('stringMap.hasKey()');
    });

    describe('stringMap.values()', (): void => {
        test.todo('stringMap.values()');
    });

    describe('stringMap.keys()', (): void => {
        test.todo('stringMap.keys()');
    });

    describe('stringMap.entries()', (): void => {
        test.todo('stringMap.entries()');
    });

    describe('stringMap.clear()', (): void => {
        test.todo('stringMap.clear()');
    });

    describe('stringMap.delete()', (): void => {
        test.todo('stringMap.delete()');
    });
});
