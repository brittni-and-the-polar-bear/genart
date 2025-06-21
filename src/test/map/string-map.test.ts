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

describe('StringMap tests', (): void => {
    test('empty map', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        expect(map.size).toBe(0);
    });

    test('StringMap.keys', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const pairs: KeyValuePair[] = [
            { key: 'carl', value: 10 },
            { key: 'bobby', value: 10 },
            { key: 'harold', value: 10 }
        ];

        for (const pair of pairs) {
            map.setIfAbsent(pair.key, pair.value);
        }

        const keys: Set<string> = new Set<string>(map.keys);

        for (const pair of pairs) {
            expect(keys).toContain(pair.key);
        }
    });

    test('StringMap.values', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const pairs: KeyValuePair[] = [
            { key: 'carl', value: 10 },
            { key: 'bobby', value: 20 },
            { key: 'harold', value: 20 }
        ];

        for (const pair of pairs) {
            map.setIfAbsent(pair.key, pair.value);
        }

        const values: number[] = Array.from(map.values);

        expect(values.length).toBe(pairs.length);

        for (const pair of pairs) {
            expect(values).toContain(pair.value);
        }
    });

    test('StringMap.setKey() and StringMap.get()', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        map.set('molly', 10);
        expect(map.get('molly')).toBe(10);
        map.set('molly', 20);
        expect(map.get('molly')).toBe(20);
        expect(map.get('harry')).toBeUndefined();
    });

    test('StringMap.hasKey()', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        expect(map.hasKey('molly')).toBeFalsy();
        map.set('molly', 10);
        expect(map.hasKey('molly')).toBeTruthy();
        map.set('molly', 20);
        expect(map.hasKey('harry')).toBeFalsy();
    });

    test('StringMap.setUndefinedKey() - test map values', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const key: string = 'molly';
        const value: number = 10;

        expect(map.hasKey(key)).toBeFalsy();
        let success: boolean = map.setIfAbsent(key, value);
        expect(success).toBeTruthy();
        expect(map.hasKey(key)).toBeTruthy();
        expect(map.get(key)).toBe(value);

        const newValue: number = 20;
        expect(value).not.toBe(newValue);

        success = map.setIfAbsent('molly', newValue);
        expect(success).toBeFalsy();
        expect(map.get(key)).toBe(value);
    });

    test('StringMap.setUndefinedKey() - test error messages', (): void => {
        const map: StringMap<number> = new StringMap<number>();
        const logSpy = jest.spyOn(global.console, 'warn');

        const key1: string = 'red';
        let result: boolean = map.setIfAbsent(key1, 50);
        expect(result).toBeTruthy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setIfAbsent(key1, 50);
        expect(result).toBeFalsy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setIfAbsent(key1, 100);
        expect(result).toBeFalsy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        const key2: string = 'blue';
        const errorMessage: string = 'key already in map';
        result = map.setIfAbsent(key2, 50, errorMessage);
        expect(result).toBeTruthy();
        expect(logSpy).not.toHaveBeenCalled();
        logSpy.mockClear();

        result = map.setIfAbsent(key2, 50, 'key already in map');
        expect(result).toBeFalsy();
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith(errorMessage);
        logSpy.mockClear();

        result = map.setIfAbsent(key2, 100, 'key already in map');
        expect(result).toBeFalsy();
        expect(logSpy).toHaveBeenCalled();
        expect(logSpy).toHaveBeenCalledWith(errorMessage);
        logSpy.mockClear();

        expect(map.size).toBe(2);
        logSpy.mockRestore();
    });
});
