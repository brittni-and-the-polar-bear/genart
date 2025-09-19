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

import { describe, test, expect, beforeAll } from 'vitest';

import { colornames } from 'color-name-list';

import { color, discriminator, palette_color } from '../../../src';

const { ColorNames } = color;
const { ALL_PALETTE_COLORS } = palette_color;
const { Discriminators } = discriminator;

describe('ColorNames', (): void => {
    beforeAll((): void => {
        ColorNames.setPossibleColors(colornames as ({ name: string; hex: string; }[]));
    });

    describe('ColorNames constructor', (): void => {
        test('new ColorNames()', (): void => {
            expect(() => new ColorNames()).toThrow('ColorNames is a static class and cannot be instantiated.');
        });
    });

    describe('ColorNames.getColorName()', () => {
        test.each([
            { hex: 'this is not a hex', expected: undefined },
            { hex: '#FF0000FF', expected: undefined },
            { hex: '#FF000000', expected: undefined },
            { hex: '000000', expected: 'black' },
            { hex: '#000000', expected: 'black' },
            { hex: 'A32B2A', expected: 'harissa red' },
            { hex: '#A32B2A', expected: 'harissa red' },
            { hex: 'a32b2a', expected: 'harissa red' },
            { hex: '#a32b2a', expected: 'harissa red' },
            { hex: '6E47C5', expected: 'purple rain' },
            { hex: '#6E47C5', expected: 'purple rain' },
            { hex: '6e47c5', expected: 'purple rain' },
            { hex: '#6e47c5', expected: 'purple rain' },
            { hex: '#4BCCAB', expected: 'disc jockey' },
            { hex: '#4bccab', expected: 'disc jockey' },
            { hex: '#4BcCaB', expected: 'disc jockey' },
            { hex: '4BCCAB', expected: 'disc jockey' },
            { hex: '4bccab', expected: 'disc jockey' },
            { hex: '4BcCaB', expected: 'disc jockey' }
        ])('ColorNames.getColorName($hex)', ({ hex, expected }: { hex: string; expected: unknown; }): void => {
            expect(ColorNames.getColorName(hex)).toBe(expected);
        });

        test.each(
            Array.from(ALL_PALETTE_COLORS.values()).map((pc: palette_color.PaletteColor): { hex: string; expected: string; } => {
                return { hex: pc.HEX, expected: pc.NAME };
            })
        )('ColorNames.getColorName($hex)', ({ hex, expected }: { hex: string; expected: string; }): void => {
            expect(ColorNames.getColorName(hex)).toBe(expected);
        });
    });

    describe('ColorNames.addColor()', () => {
        test('ColorNames.addColor()', (): void => {
            const fakeColor: palette_color.PaletteColor = {
                RGB: { R: 0, G: 0, B: 0 },
                HSL: { H: 0, S: 0, L: 0 },
                HEX: '#000000',
                NAME: 'test fake color',
                LUMINANCE: 0.00,
                DISCRIMINATOR: Discriminators.PALETTE_COLOR
            };

            const hex: string = fakeColor.HEX;
            const expectedOriginalName: string = 'black';
            const expectedNewName: string = fakeColor.NAME;

            const originalName: string | undefined = ColorNames.getColorName(hex);
            expect(originalName).toBe(expectedOriginalName);

            ColorNames.addColor(fakeColor);

            const newName: string | undefined = ColorNames.getColorName(hex);
            expect(newName).toBe(expectedNewName);
        });
    });
});
