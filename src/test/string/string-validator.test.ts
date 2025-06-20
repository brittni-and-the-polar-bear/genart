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

    const validHex_lowercase_noAlpha: string[] = [
        '#aabbcc',
        '#000000',
        '#ffffff',
        '#ff0000',
        '#00ff00',
        '#0000ff',
        '#ffff00',
        '#ff00ff',
        '#00ffff'
    ];

    describe('StringValidator.isHex(hex)', (): void => {
        test.each(
            validHex_noAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        )('StringValidator.isHex(validHex) - $hex', ({ hex }: { hex: string }): void => {
            expect(StringValidator.isHex(hex)).toBe(true);
        });

        test.each([
            validHex_lowercase_noAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        ])('StringValidator.isHex(lowercaseHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: '#aaBBcc' },
            { hex: '#aabbCc' },
            { hex: '#AaBBCC' },
            { hex: '#fFfFfF' },
            { hex: '#Ff0000' },
            { hex: '#00Ff00' },
            { hex: '#0000fF' }
        ])('StringValidator.isHex(mixedCaseHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: 'AABBCC' },
            { hex: '112233' },
            { hex: '000000' },
            { hex: 'FFFFFF' },
            { hex: 'FF0000' },
            { hex: '00FF00' },
            { hex: '0000FF' },
            { hex: 'aabbcc' },
            { hex: 'ffffff' },
            { hex: 'ff0000' },
            { hex: '00ff00' },
            { hex: '0000ff' },
            { hex: 'aaBBcc' },
            { hex: 'aabbCc' },
            { hex: 'AaBBCC' },
            { hex: 'fFfFfF' },
            { hex: 'Ff0000' },
            { hex: '00Ff00' },
            { hex: '0000fF' }
        ])('StringValidator.isHex(noHashHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: '#FGFGFG' },
            { hex: 'FGFGFG' },
            { hex: 'fgfgfg' },
            { hex: 'fGfgFg' },
            { hex: 'cat' },
            { hex: 'fat cat' },
            { hex: '' }
        ])('StringValidator.isHex(invalidHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: '#AABBCCDD' },
            { hex: '#11223344' }
        ])('StringValidator.isHex(validHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: '#aabbccdd' }
        ])('StringValidator.isHex(lowercaseHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: '#AaBbCcDd' }
        ])('StringValidator.isHex(mixedCaseHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: 'AABBCCDD' },
            { hex: '11223344' }
        ])('StringValidator.isHex(noHashHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            { hex: 'FGFGFGFG' },
            { hex: '#FGFGFGFG' }
        ])('StringValidator.isHex(invalidHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test('StringValidator.isHex(invalidHex, false)', () => {
            expect(StringValidator.isHex('AABBCC', false)).toBe(false);
            expect(StringValidator.isHex('112233', false)).toBe(false);
            expect(StringValidator.isHex('FGFGFG', false)).toBe(false);
            expect(StringValidator.isHex('#FGFGFG', false)).toBe(false);
        });

        test('StringValidator.isHex(validHexWithAlpha, false)', () => {
            expect(StringValidator.isHex('#AABBCCDD', false)).toBe(false);
            expect(StringValidator.isHex('#11223344', false)).toBe(false);
        });

        test('StringValidator.isHex(invalidHexWithAlpha, false)', () => {
            expect(StringValidator.isHex('AABBCCDD', false)).toBe(false);
            expect(StringValidator.isHex('11223344', false)).toBe(false);
            expect(StringValidator.isHex('FGFGFGFG', false)).toBe(false);
            expect(StringValidator.isHex('#FGFGFGFG', false)).toBe(false);
        });

        test('StringValidator.isHex(validHex, true)', () => {
            expect(StringValidator.isHex('#AABBCC', true)).toBe(false);
            expect(StringValidator.isHex('#112233', true)).toBe(false);
        });

        test('StringValidator.isHex(invalidHex, true)', () => {
            expect(StringValidator.isHex('AABBCC', true)).toBe(false);
            expect(StringValidator.isHex('112233', true)).toBe(false);
            expect(StringValidator.isHex('FGFGFG', true)).toBe(false);
            expect(StringValidator.isHex('#FGFGFG', true)).toBe(false);
        });

        test('StringValidator.isHex(validHexWithAlpha, true)', () => {
            expect(StringValidator.isHex('#AABBCCDD', true)).toBe(true);
            expect(StringValidator.isHex('#11223344', true)).toBe(true);
        });

        test('StringValidator.isHex(invalidHexWithAlpha, true)', () => {
            expect(StringValidator.isHex('AABBCCDD', true)).toBe(false);
            expect(StringValidator.isHex('11223344', true)).toBe(false);
            expect(StringValidator.isHex('FGFGFGFG', true)).toBe(false);
            expect(StringValidator.isHex('#FGFGFGFG', true)).toBe(false);
        });
    });

    describe('StringValidator.isHex(hex, withAlpha)', (): void => {
        test.each([
            { hex: '#AABBCC' },
            { hex: '#112233' },
            { hex: '#000000' },
            { hex: '#FFFFFF' },
            { hex: '#FF0000' },
            { hex: '#00FF00' },
            { hex: '#0000FF' }
        ])('StringValidator.isHex(validHex, false) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex, false)).toBe(true);
        });
    });

    describe('StringValidator.isHexWithAlpha()', () => {
        test('StringValidator.isHexWithAlpha(validHex)', () => {
            expect(StringValidator.isHexWithAlpha('#AABBCC')).toBe(false);
            expect(StringValidator.isHexWithAlpha('#112233')).toBe(false);
        });

        test('StringValidator.isHexWithAlpha(invalidHex)', () => {
            expect(StringValidator.isHexWithAlpha('AABBCC')).toBe(false);
            expect(StringValidator.isHexWithAlpha('112233')).toBe(false);
            expect(StringValidator.isHexWithAlpha('FGFGFG')).toBe(false);
            expect(StringValidator.isHexWithAlpha('#FGFGFG')).toBe(false);
        });

        test('StringValidator.isHexWithAlpha(validHexWithAlpha)', () => {
            expect(StringValidator.isHexWithAlpha('#AABBCCDD')).toBe(true);
            expect(StringValidator.isHexWithAlpha('#11223344')).toBe(true);
        });

        test('StringValidator.isHexWithAlpha(invalidHexWithAlpha)', () => {
            expect(StringValidator.isHexWithAlpha('AABBCCDD')).toBe(false);
            expect(StringValidator.isHexWithAlpha('11223344')).toBe(false);
            expect(StringValidator.isHexWithAlpha('FGFGFGFG')).toBe(false);
            expect(StringValidator.isHexWithAlpha('#FGFGFGFG')).toBe(false);
        });
    });
});
