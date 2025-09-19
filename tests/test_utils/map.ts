/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
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

import { expect } from 'vitest';

import { StringMap } from '../../src';

export function testStringMap<Type>(stringMap: StringMap<Type>, expectedSize?: number): void {
    expect(stringMap).toBeTruthy();

    const keys: string[] = Array.from(stringMap.keys());
    const values: Type[] = Array.from(stringMap.values());

    expect(values.length).toBe(keys.length);
    expect(keys.length).toBe(stringMap.size);

    if (expectedSize !== undefined) {
        if (expectedSize === 0) {
            expect(keys.length).toBe(0);
            expect(values.length).toBe(0);
            expect(stringMap.size).toBe(0);
        } else if (expectedSize > 0) {
            expect(keys.length).toBe(expectedSize);
            expect(values.length).toBe(expectedSize);
            expect(stringMap.size).toBe(expectedSize);
        } else if (expectedSize < 0) {
            throw new Error(`Expected size cannot be negative: ${expectedSize}`);
        }
    } else {
        expect(keys.length).toBeGreaterThan(0);
        expect(values.length).toBeGreaterThan(0);
        expect(stringMap.size).toBeGreaterThan(0);
    }
}
