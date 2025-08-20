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

import { ColorComponents } from './color';
import { checkNumberWithinAmount } from './math';

export function checkForValidPaletteColor(pc: PaletteColor): void {
    expect(pc.HEX).toBeTruthy();
    expect(StringValidator.isHex(pc.HEX)).toBeTruthy();
    expect(pc.HEX.toUpperCase()).toBe(pc.HEX);

    expect(pc.NAME).toBeTruthy();
    expect(pc.NAME.toLowerCase()).toBe(pc.NAME);

    expect(pc.DISCRIMINATOR).toBe(Discriminators.PALETTE_COLOR);

    if (pc.LUMINANCE) {
        expect(pc.LUMINANCE).toBeGreaterThanOrEqual(0);
        expect(pc.LUMINANCE).toBeLessThanOrEqual(1);
    }

    if (pc.RGB) {
        expect(pc.RGB.R).toBeGreaterThanOrEqual(0);
        expect(pc.RGB.R).toBeLessThanOrEqual(255);
        expect(pc.RGB.G).toBeGreaterThanOrEqual(0);
        expect(pc.RGB.G).toBeLessThanOrEqual(255);
        expect(pc.RGB.B).toBeGreaterThanOrEqual(0);
        expect(pc.RGB.B).toBeLessThanOrEqual(255);
    }

    if (pc.HSL) {
        expect(pc.HSL.H).toBeGreaterThanOrEqual(0);
        expect(pc.HSL.H).toBeLessThan(360);
        expect(pc.HSL.S).toBeGreaterThanOrEqual(0);
        expect(pc.HSL.S).toBeLessThanOrEqual(100);
        expect(pc.HSL.L).toBeGreaterThanOrEqual(0);
        expect(pc.HSL.L).toBeLessThanOrEqual(100);
    }
}

export function checkComponents(components: ColorComponents, pc: PaletteColor): void {
    if (pc.RGB) {
        checkNumberWithinAmount(components.r, pc.RGB.R, 1);
        checkNumberWithinAmount(components.g, pc.RGB.G, 1);
        checkNumberWithinAmount(components.b, pc.RGB.B, 1);
    } else {
        fail('PaletteColor does not have RGB components');
    }
}
