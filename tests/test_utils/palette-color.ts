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

import { test, expect } from 'vitest';

import { discriminator, map, palette_color, string } from '../../src';

import { testStringMap } from './map';
import { HexCollection } from './palette-colors';

const { Discriminator, Discriminators } = discriminator;
const { StringValidator } = string;

type StringMap<Type> = map.StringMap<Type>;
type PaletteColor = palette_color.PaletteColor;

const MIN_COLOR_COMPONENT = 0;
const MAX_COLOR_COMPONENT = 255;

const MAX_HUE = 360;
const MAX_SATURATION = 100;
const MAX_LIGHTNESS = 100;

const MIN_LUMINANCE = 0;
const MAX_LUMINANCE = 1;

export function testPaletteColor(pc: PaletteColor): void {
    expect(pc).toBeTruthy();
    expect(pc.HEX).toBeTruthy();
    expect(StringValidator.isHex(pc.HEX)).toBeTruthy();
    expect(pc.HEX.toUpperCase()).toBe(pc.HEX);

    expect(pc.NAME).toBeTruthy();
    expect(pc.NAME.toLowerCase()).toBe(pc.NAME);

    expect(pc.DISCRIMINATOR).toBe(Discriminators.PALETTE_COLOR);
    expect(Discriminator.isPaletteColor(pc)).toBeTruthy();

    if (pc.LUMINANCE) {
        expect(pc.LUMINANCE).toBeGreaterThanOrEqual(MIN_LUMINANCE);
        expect(pc.LUMINANCE).toBeLessThanOrEqual(MAX_LUMINANCE);
    }

    if (pc.RGB) {
        expect(pc.RGB.R).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.RGB.R).toBeLessThanOrEqual(MAX_COLOR_COMPONENT);
        expect(pc.RGB.G).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.RGB.G).toBeLessThanOrEqual(MAX_COLOR_COMPONENT);
        expect(pc.RGB.B).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.RGB.B).toBeLessThanOrEqual(MAX_COLOR_COMPONENT);
    }

    if (pc.HSL) {
        expect(pc.HSL.H).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.HSL.H).toBeLessThan(MAX_HUE);
        expect(pc.HSL.S).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.HSL.S).toBeLessThanOrEqual(MAX_SATURATION);
        expect(pc.HSL.L).toBeGreaterThanOrEqual(MIN_COLOR_COMPONENT);
        expect(pc.HSL.L).toBeLessThanOrEqual(MAX_LIGHTNESS);
    }
}

export function testPaletteColorMap(colorMap: StringMap<PaletteColor>, mapName: string, hexes: HexCollection): void {
    test(`testStringMap(${mapName})`, () => {
        testStringMap(colorMap, hexes.length);
    });

    test.each(
        hexes
    )(`${mapName}.get($hexString)`, ({ hexString }: { hexString: string; }): void => {
        expect(hexString).toBeTruthy();
        expect(StringValidator.isHex(hexString)).toBeTruthy();

        const pc: PaletteColor | undefined = colorMap.get(hexString);
        expect(pc).toBeTruthy();

        if (pc) {
            expect(pc.HEX).toBe(hexString);
        }
    });

    test.each(
        hexes
    )(`testPaletteColor(${mapName}.get($hexString))`, ({ hexString }: { hexString: string; }): void => {
        expect(hexString).toBeTruthy();
        expect(StringValidator.isHex(hexString)).toBeTruthy();

        const pc: PaletteColor | undefined = colorMap.get(hexString);
        expect(pc).toBeTruthy();

        if (pc) {
            testPaletteColor(pc);
        }
    });
}
