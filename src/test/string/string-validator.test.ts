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

import { StringValidator } from 'string';

describe('StringValidator', () => {
    const validHex_noAlpha: string[] = [
        '#AABBCC',
        '#112233',
        '#000000',
        '#FFFFFF',
        '#FF0000',
        '#00FF00',
        '#0000FF',
        '#FFFF00',
        '#FF00FF',
        '#00FFFF'
    ];

    const validHex_withAlpha: string[] = [
        '#AABBCCDD',
        '#11223344',
        '#00000000',
        '#FFFFFFFF',
        '#FF0000FF',
        '#00FF00FF',
        '#0000FFFF',
        '#FFFF00FF',
        '#FF00FFFF',
        '#00FFFFFF',
        '#FF000000',
        '#00FF0000',
        '#0000FF00',
        '#FFFF0000',
        '#FF00FF00',
        '#00FFFF00'
    ];

    const validHex_lowercase_noAlpha: string[] = [
        '#aabbcc',
        '#ffffff',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#ff00ff',
        '#00ffff'
    ];

    const validHex_lowercase_withAlpha: string[] = [
        '#aabbccdd',
        '#ffffffff',
        '#ff0000ff',
        '#00ff00ff',
        '#0000ffff',
        '#ffff00ff',
        '#ff00ffff',
        '#00ffffff',
        '#ff000000',
        '#00ff0000',
        '#0000ff00',
        '#ffff0000',
        '#ff00ff00',
        '#00ffff00'
    ];

    const validHex_mixedCase_noAlpha: string[] = [
        '#aaBBcc',
        '#aAbBcC',
        '#FfFfFf',
        '#fF0000',
        '#00Ff00',
        '#0000Ff',
        '#FffF00',
        '#fF00Ff',
        '#00Ffff'
    ];

    const validHex_mixedCase_withAlpha: string[] = [
        '#AaBbDcDd',
        '#ffFFffFF',
        '#FF0000ff',
        '#00ff00FF',
        '#0000fFfF',
        '#FfFf00Ff',
        '#fF00ffff',
        '#00ffFffF',
        '#Ff000000',
        '#00fF0000',
        '#0000Ff00',
        '#Ffff0000',
        '#ff00Ff00',
        '#00ffFF00'
    ];

    const noHashHex_noAlpha: string[] = [
        'AABBCC',
        '112233',
        '000000',
        'FFFFFF',
        'FF0000',
        '00FF00',
        '0000FF',
        'FFFF00',
        'FF00FF',
        '00FFFF',
        'aabbcc',
        'ffffff',
        'ff0000',
        '00ff00',
        '0000ff',
        'ffff00',
        'ff00ff',
        '00ffff',
        'aaBBcc',
        'aAbBcC',
        'FfFfFf',
        'fF0000',
        '00Ff00',
        '0000Ff',
        'FffF00',
        'fF00Ff',
        '00Ffff'
    ];

    const noHashHex_withAlpha: string[] = [
        'AABBCCDD',
        '11223344',
        '00000000',
        'FFFFFFFF',
        'FF0000FF',
        '00FF00FF',
        '0000FFFF',
        'FFFF00FF',
        'FF00FFFF',
        '00FFFFFF',
        'FF000000',
        '00FF0000',
        '0000FF00',
        'FFFF0000',
        'FF00FF00',
        '00FFFF00',
        'aabbccdd',
        'ffffffff',
        'ff0000ff',
        '00ff00ff',
        '0000ffff',
        'ffff00ff',
        'ff00ffff',
        '00ffffff',
        'ff000000',
        '00ff0000',
        '0000ff00',
        'ffff0000',
        'ff00ff00',
        '00ffff00',
        'AaBbDcDd',
        'ffFFffFF',
        'FF0000ff',
        '00ff00FF',
        '0000fFfF',
        'FfFf00Ff',
        'fF00ffff',
        '00ffFffF',
        'Ff000000',
        '00fF0000',
        '0000Ff00',
        'Ffff0000',
        'ff00Ff00',
        '00ffFF00'
    ];

    const invalidHex_noAlpha: string[] = [
        '#FGFGFG',
        'FGFGFG',
        'fgfgfg',
        'fGfgFg',
        'cat',
        'fat cat',
        '',
        'aab|cc',
        'AAB|CC'
    ];

    const invalidHex_withAlpha: string[] = [
        '#FGFGFGFG',
        'FGFGFGFG',
        'fgfgfgfg',
        'fGfgFgfG',
        'cat',
        'fat cat',
        '',
        'aabbcc|d',
        'AABBCC|D'
    ];

    const invalidTypes: unknown[] = [
        null,
        undefined,
        123,
        123.456,
        true,
        false,
        [],
        {},
        new Date(),
        BigInt(12345678901234567890n)
    ];

    const invalidLengths: string[] = [
        '#',
        '#123',
        '#12345',
        '#1234567',
        '#123456789',
    ];

    const specialCharacters: string[] = [
        '#\u0000AABBCC',
        '#AAB BCC',
        '##AABBCC',
        ' #AABBCC',
        '#AABBCC ',
        '\t#AABBCC',
        '#AABBCC\n'
    ];

    describe.each([
        { name: 'validHex', inputs: validHex_noAlpha, expected: true },
        { name: 'lowercaseHex', inputs: validHex_lowercase_noAlpha, expected: true },
        { name: 'mixedCaseHex', inputs: validHex_mixedCase_noAlpha, expected: false },
        { name: 'noHashHex', inputs: noHashHex_noAlpha, expected: false },
        { name: 'invalidHex', inputs: invalidHex_noAlpha, expected: false },
        { name: 'validHexWithAlpha', inputs: validHex_withAlpha, expected: false },
        { name: 'lowercaseHexWithAlpha', inputs: validHex_lowercase_withAlpha, expected: false },
        { name: 'mixedCaseHexWithAlpha', inputs: validHex_mixedCase_withAlpha, expected: false },
        { name: 'noHashHexWithAlpha', inputs: noHashHex_withAlpha, expected: false },
        { name: 'invalidHexWithAlpha', inputs: invalidHex_withAlpha, expected: false },
        { name: 'specialCharacters', inputs: specialCharacters, expected: false },
        { name: 'invalidLength', inputs: invalidLengths, expected: false }
    ])('StringValidator.isHex(hex)', ({ name, inputs, expected }: {name: string, inputs: string[], expected: boolean}): void => {
        test.each(
            inputs.map((hex: string): { hex: string } => ({ hex: hex }))
        )(`StringValidator.isHex(${name}) - $hex`, ({ hex }: { hex: string }): void => {
            expect(StringValidator.isHex(hex)).toBe(expected);
        });
    });

    describe.each([
        { name: 'validHex', inputs: validHex_noAlpha, withAlpha: true, expected: false },
        { name: 'validHex', inputs: validHex_noAlpha, withAlpha: false, expected: true },
        { name: 'lowercaseHex', inputs: validHex_lowercase_noAlpha, withAlpha: true, expected: false },
        { name: 'lowercaseHex', inputs: validHex_lowercase_noAlpha, withAlpha: false, expected: true },
        { name: 'mixedCaseHex', inputs: validHex_mixedCase_noAlpha, withAlpha: true, expected: false },
        { name: 'mixedCaseHex', inputs: validHex_mixedCase_noAlpha, withAlpha: false, expected: false },
        { name: 'noHashHex', inputs: noHashHex_noAlpha, withAlpha: true, expected: false },
        { name: 'noHashHex', inputs: noHashHex_noAlpha, withAlpha: false, expected: false },
        { name: 'invalidHex', inputs: invalidHex_noAlpha, withAlpha: true, expected: false },
        { name: 'invalidHex', inputs: invalidHex_noAlpha, withAlpha: false, expected: false },
        { name: 'validHexWithAlpha', inputs: validHex_withAlpha, withAlpha: true, expected: true },
        { name: 'validHexWithAlpha', inputs: validHex_withAlpha, withAlpha: false, expected: false },
        { name: 'lowercaseHexWithAlpha', inputs: validHex_lowercase_withAlpha, withAlpha: true, expected: true },
        { name: 'lowercaseHexWithAlpha', inputs: validHex_lowercase_withAlpha, withAlpha: false, expected: false },
        { name: 'mixedCaseHexWithAlpha', inputs: validHex_mixedCase_withAlpha, withAlpha: true, expected: false },
        { name: 'mixedCaseHexWithAlpha', inputs: validHex_mixedCase_withAlpha, withAlpha: false, expected: false },
        { name: 'noHashHexWithAlpha', inputs: noHashHex_withAlpha, withAlpha: true, expected: false },
        { name: 'noHashHexWithAlpha', inputs: noHashHex_withAlpha, withAlpha: false, expected: false },
        { name: 'invalidHexWithAlpha', inputs: invalidHex_withAlpha, withAlpha: true, expected: false },
        { name: 'invalidHexWithAlpha', inputs: invalidHex_withAlpha, withAlpha: false, expected: false },
        { name: 'specialCharacters', inputs: specialCharacters, withAlpha: true, expected: false },
        { name: 'specialCharacters', inputs: specialCharacters, withAlpha: false, expected: false },
        { name: 'invalidLength', inputs: invalidLengths, withAlpha: true, expected: false },
        { name: 'invalidLength', inputs: invalidLengths, withAlpha: false, expected: false }
    ])('StringValidator.isHex(hex, $withAlpha)', ({ name, inputs, withAlpha, expected }: {name: string, inputs: string[], withAlpha: boolean, expected: boolean}): void => {
        test.each(
            inputs.map((hex: string): { hex: string } => ({ hex: hex }))
        )(`StringValidator.isHex(${name}, ${withAlpha}) - $hex`, ({ hex }: { hex: string }): void => {
            expect(StringValidator.isHex(hex, withAlpha)).toBe(expected);
        });
    });

    describe.each([
        { name: 'validHex', inputs: validHex_noAlpha, expected: false },
        { name: 'lowercaseHex', inputs: validHex_lowercase_noAlpha, expected: false },
        { name: 'mixedCaseHex', inputs: validHex_mixedCase_noAlpha, expected: false },
        { name: 'noHashHex', inputs: noHashHex_noAlpha, expected: false },
        { name: 'invalidHex', inputs: invalidHex_noAlpha, expected: false },
        { name: 'validHexWithAlpha', inputs: validHex_withAlpha, expected: true },
        { name: 'lowercaseHexWithAlpha', inputs: validHex_lowercase_withAlpha, expected: true },
        { name: 'mixedCaseHexWithAlpha', inputs: validHex_mixedCase_withAlpha, expected: false },
        { name: 'noHashHexWithAlpha', inputs: noHashHex_withAlpha, expected: false },
        { name: 'invalidHexWithAlpha', inputs: invalidHex_withAlpha, expected: false },
        { name: 'specialCharacters', inputs: specialCharacters, expected: false },
        { name: 'invalidLength', inputs: invalidLengths, expected: false }
    ])('StringValidator.isHexWithAlpha(hex)', ({ name, inputs, expected }: {name: string, inputs: string[], expected: boolean}): void => {
        test.each(
            inputs.map((hex: string): { hex: string } => ({ hex: hex }))
        )(`StringValidator.isHexWithAlpha(${name}) - $hex`, ({ hex }: { hex: string }): void => {
            expect(StringValidator.isHexWithAlpha(hex)).toBe(expected);
        });
    });

    describe('StringValidator.isHex() - error cases', (): void => {
        test.each(
            invalidTypes.map((input: unknown): { input: unknown } => ({ input: input }))
        )(`StringValidator.isHex(invalidType) - $input`, ({ input }: { input: unknown }): void => {
            expect(StringValidator.isHex(input as any)).toBe(false);
            expect(StringValidator.isHex((input as any), true)).toBe(false);
            expect(StringValidator.isHex((input as any), false)).toBe(false);
            expect(StringValidator.isHexWithAlpha(input as any)).toBe(false);
        });
    });
});
