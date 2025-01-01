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
    describe('StringValidator.isHex()', () => {
        test('StringValidator.isHex(validHex)', () => {
            expect(StringValidator.isHex('#AABBCC')).toBe(true);
            expect(StringValidator.isHex('#112233')).toBe(true);
        });

        test('StringValidator.isHex(invalidHex)', () => {
            expect(StringValidator.isHex('AABBCC')).toBe(false);
            expect(StringValidator.isHex('112233')).toBe(false);
            expect(StringValidator.isHex('FGFGFG')).toBe(false);
            expect(StringValidator.isHex('#FGFGFG')).toBe(false);
        });

        test('StringValidator.isHex(validHexWithAlpha)', () => {
            expect(StringValidator.isHex('#AABBCCDD')).toBe(false);
            expect(StringValidator.isHex('#11223344')).toBe(false);
        });

        test('StringValidator.isHex(invalidHexWithAlpha)', () => {
            expect(StringValidator.isHex('AABBCCDD')).toBe(false);
            expect(StringValidator.isHex('11223344')).toBe(false);
            expect(StringValidator.isHex('FGFGFGFG')).toBe(false);
            expect(StringValidator.isHex('#FGFGFGFG')).toBe(false);
        });

        test('StringValidator.isHex(validHex, false)', () => {
            expect(StringValidator.isHex('#AABBCC', false)).toBe(true);
            expect(StringValidator.isHex('#112233', false)).toBe(true);
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
