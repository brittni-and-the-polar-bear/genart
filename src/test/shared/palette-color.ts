/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import { PaletteColor } from 'color';
import { Discriminators } from 'discriminator';
import { StringValidator } from 'string';

import { ColorComponents, COLOR_TOLERANCE } from './color';
import { checkNumberWithinAmount } from './math';

const MIN_COLOR_COMPONENT = 0;
const MAX_COLOR_COMPONENT = 255;

const MAX_HUE = 360;
const MAX_SATURATION = 100;
const MAX_LIGHTNESS = 100;

const MIN_LUMINANCE = 0;
const MAX_LUMINANCE = 1;

export function checkForValidPaletteColor(pc: PaletteColor): void {
    expect(pc.HEX).toBeTruthy();
    expect(StringValidator.isHex(pc.HEX)).toBeTruthy();
    expect(pc.HEX.toUpperCase()).toBe(pc.HEX);

    expect(pc.NAME).toBeTruthy();
    expect(pc.NAME.toLowerCase()).toBe(pc.NAME);

    expect(pc.DISCRIMINATOR).toBe(Discriminators.PALETTE_COLOR);

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

export function checkRGBComponents(components: ColorComponents, pc: PaletteColor): void {
    if (pc.RGB) {
        checkNumberWithinAmount(components.r, pc.RGB.R, COLOR_TOLERANCE);
        checkNumberWithinAmount(components.g, pc.RGB.G, COLOR_TOLERANCE);
        checkNumberWithinAmount(components.b, pc.RGB.B, COLOR_TOLERANCE);
    } else {
        fail('PaletteColor does not have RGB components');
    }
}
