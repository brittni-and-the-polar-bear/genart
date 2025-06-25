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

import { Palette, PaletteColor, PC_E13762 } from 'color';
import { Discriminator, Discriminators } from 'discriminator';
import { WeightedElement } from 'random';
import { AspectRatioConfig } from 'sketch';

// TODO - complete unit tests
describe('Discriminator', (): void => {
    const testAspectRatioConfig: AspectRatioConfig = {
        WIDTH_RATIO: 3,
        HEIGHT_RATIO: 4,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    };

    const testPalette: Palette = {
        NAME: 'test fake palette',
        COLORS: [],
        IS_GRADIENT: false,
        DISCRIMINATOR: Discriminators.PALETTE
    };

    const testPaletteColor: PaletteColor = {
        HEX: '#ABCDEF',
        NAME: 'test palette color',
        DISCRIMINATOR: Discriminators.PALETTE_COLOR
    }

    const testWeightedElement: WeightedElement<number> = {
        WEIGHT: 1,
        VALUE: 50,
        DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT
    };

    describe('Discriminator.isAspectRatioConfig();', (): void => {
        test.each([
            // value types
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: (): 5 => { return 5; }, expected: false },

            // generic objects
            { object: { KEY: 'the key' }, expected: false },

            // discriminators only
            { object: { DISCRIMINATOR: 'other' }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: true },
            { object: { DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },

            // aspect ratio config
            { object: { WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: true },
            { object: { NAME: '4:5', WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: true },
            { object: testAspectRatioConfig, expected: true },

            // palette
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: testPalette, expected: false },

            // palette color
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: testPaletteColor, expected: false },
            { object: PC_E13762, expected: false },

            // weighted element
            { object: { WEIGHT: 0.5, VALUE: 45, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },
            { object: testWeightedElement, expected: false }
        ])('Discriminator.isAspectRatioConfig($object)', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isAspectRatioConfig(object)).toBe(expected);
        });
    });

    describe('Discriminator.isPalette();', (): void => {
        test.each([
            // value types
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: (): 5 => { return 5; }, expected: false },

            // generic objects
            { object: { KEY: 'the key' }, expected: false },

            // discriminators only
            { object: { DISCRIMINATOR: 'other' }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE }, expected: true },
            { object: { DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },

            // aspect ratio config
            { object: { WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { NAME: '4:5', WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: testAspectRatioConfig, expected: false },

            // palette
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: true },
            { object: testPalette, expected: true },

            // palette color
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: testPaletteColor, expected: false },
            { object: PC_E13762, expected: false },

            // weighted element
            { object: { WEIGHT: 0.5, VALUE: 45, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },
            { object: testWeightedElement, expected: false }
        ])('Discriminator.isPalette($object)', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isPalette(object)).toBe(expected);
        });

        // TODO - add test for existing palette
        test.todo('Discriminator.isPalette(); - existing palette');
    });

    describe('Discriminator.isPaletteColor();', (): void => {
        test.each([
            // value types
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: (): 5 => { return 5; }, expected: false },

            // generic objects
            { object: { KEY: 'the key' }, expected: false },

            // discriminators only
            { object: { DISCRIMINATOR: 'other' }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: true },
            { object: { DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },

            // aspect ratio config
            { object: { WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { NAME: '4:5', WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: testAspectRatioConfig, expected: false },

            // palette
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: testPalette, expected: false },

            // palette color
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: true },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: true },
            { object: testPaletteColor, expected: true },
            { object: PC_E13762, expected: true },

            // weighted element
            { object: { WEIGHT: 0.5, VALUE: 45, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: false },
            { object: testWeightedElement, expected: false }
        ])('Discriminator.isPaletteColor($object);', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isPaletteColor(object)).toBe(expected);
        });
    });

    describe('Discriminator.isWeightedElement();', (): void => {
        test.each([
            // value types
            { object: null, expected: false },
            { object: undefined, expected: false },
            { object: 10, expected: false },
            { object: 'my test string', expected: false },
            { object: true, expected: false },
            { object: (): 5 => { return 5; }, expected: false },

            // generic objects
            { object: { KEY: 'the key' }, expected: false },

            // discriminators only
            { object: { DISCRIMINATOR: 'other' }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: true },

            // aspect ratio config
            { object: { WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: { NAME: '4:5', WIDTH_RATIO: 4, HEIGHT_RATIO: 5, DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG }, expected: false },
            { object: testAspectRatioConfig, expected: false },

            // palette
            { object: { NAME: 'test fake palette', COLORS: [], IS_GRADIENT: false, DISCRIMINATOR: Discriminators.PALETTE }, expected: false },
            { object: testPalette, expected: false },

            // palette color
            { object: { KEY: 'the key', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: { HEX: '#000000', NAME: 'test fake color', DISCRIMINATOR: Discriminators.PALETTE_COLOR }, expected: false },
            { object: testPaletteColor, expected: false },
            { object: PC_E13762, expected: false },

            // weighted element
            { object: { WEIGHT: 0.5, VALUE: 45, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }, expected: true },
            { object: testWeightedElement, expected: true }
        ])('Discriminator.isWeightedElement($object);', ({ object, expected }: { object: unknown, expected: boolean}): void => {
            expect(Discriminator.isWeightedElement(object)).toBe(expected);
        });
    });
});
