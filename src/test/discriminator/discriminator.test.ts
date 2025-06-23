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

import { PC_E13762 } from 'color';
import { Discriminator, Discriminators } from 'discriminator';
import { WeightedElement } from 'random';

// TODO - complete unit tests
describe('Discriminator', (): void => {
    describe('Discriminator.isPaletteColor()', (): void => {
        test.each([
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: { KEY: 'the key' }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: 'other' }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: true },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: true},
            { object: PC_E13762, expected: true }
        ])('Discriminator.isPaletteColor($object)', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isPaletteColor(object)).toBe(expected);
        });
    });

    describe('Discriminator.isPalette()', (): void => {
        test.each([
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: { KEY: 'the key' }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: 'other' }, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false},
            { object: PC_E13762, expected: false },
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE }, expected: true },
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: true }
        ])('Discriminator.isPaletteColor($object)', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isPalette(object)).toBe(expected);
        });

        // TODO - add test for existing palette
        test.todo('Discriminator.isPalette() - existing palette');
    });

    // TODO - reformat WeightedElement tests
    describe('Discriminator.isWeightedElement() tests', (): void => {
        test('Discriminator.isWeightedElement(null)', (): void => {
            expect(Discriminator.isWeightedElement(null)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement(undefined)', (): void => {
            expect(Discriminator.isWeightedElement(undefined)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement(number)', (): void => {
            expect(Discriminator.isWeightedElement(439)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement(string)', (): void => {
            expect(Discriminator.isWeightedElement('weighted element test string')).toBeFalsy();
        });

        test('Discriminator.isWeightedElement(boolean)', (): void => {
            expect(Discriminator.isWeightedElement(true)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement(other object)', (): void => {
            const myObject: { KEY: string; } = {
                KEY: 'the key'
            };

            expect(Discriminator.isWeightedElement(myObject)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement() - other object with discriminator', (): void => {
            const myObject: { KEY: string; DISCRIMINATOR: 'other'; } = {
                KEY: 'the key',
                DISCRIMINATOR: 'other'
            };

            expect(Discriminator.isWeightedElement(myObject)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement() - other object with PaletteColor discriminator', (): void => {
            const myObject: { KEY: string; DISCRIMINATOR: string; } = {
                KEY: 'the key',
                DISCRIMINATOR: Discriminators.PALETTE_COLOR
            };

            expect(Discriminator.isWeightedElement(myObject)).toBeFalsy();
        });

        test('Discriminator.isWeightedElement() - new weighted element', (): void => {
            const fakeColor: WeightedElement<number> = {
                WEIGHT: 0.5,
                VALUE: 45,
                DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT
            };

            expect(Discriminator.isWeightedElement(fakeColor)).toBeTruthy();
        });
    });

    test.todo('Discriminators.isAspectRatioConfig() tests');
});
