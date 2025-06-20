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

    const invalidHex_noAlpha: string[] = [
        '#FGFGFG',
        'FGFGFG',
        'fgfgfg',
        'fGfgFg',
        'cat',
        'fat cat',
        ''
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
            validHex_mixedCase_noAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        ])('StringValidator.isHex(mixedCaseHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            noHashHex_noAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        ])('StringValidator.isHex(noHashHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            invalidHex_noAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        ])('StringValidator.isHex(invalidHex) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            validHex_withAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
        ])('StringValidator.isHex(validHexWithAlpha) - $hex', ({ hex }: { hex: string }): void=> {
            expect(StringValidator.isHex(hex)).toBe(false);
        });

        test.each([
            validHex_lowercase_withAlpha.map((hex: string): { hex: string } => ({ hex: hex }))
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
