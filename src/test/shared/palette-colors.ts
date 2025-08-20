// /*
//  * Copyright (C) 2024 brittni and the polar bear LLC.
//  *
//  * This file is a part of brittni and the polar bear's generative art library,
//  * which is released under the GNU Affero General Public License, Version 3.0.
//  * You may not use this file except in compliance with the license.
//  *
//  * You should have received a copy of the GNU Affero General Public License
//  * along with this program. See LICENSE or go to
//  * https://www.gnu.org/licenses/agpl-3.0.en.html for full license details.
//  *
//  * This program is distributed in the hope that it will be useful,
//  * but WITHOUT ANY WARRANTY; without even the implied warranty of
//  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
//  * See the GNU Affero General Public License for more details.
//  */

import { Discriminators } from 'discriminator';
import { PaletteColor } from 'palette';

import { checkForValidHexColorString } from './color';

export type HexCollection = { hexString: string; }[];

export function checkForValidPaletteColor(pc: PaletteColor): void {
    expect(pc.RGB).toBeTruthy();
    expect(pc.HSL).toBeTruthy();

    expect(pc.HEX).toBeTruthy();
    checkForValidHexColorString(pc.HEX);
    expect(pc.HEX.toUpperCase()).toBe(pc.HEX);

    expect(pc.NAME).toBeTruthy();
    expect(pc.NAME.toLowerCase()).toBe(pc.NAME);

    expect(pc.DISCRIMINATOR).toBe(Discriminators.PALETTE_COLOR);
}

export const BLACK_HEXES: HexCollection = [
    { hexString: '#000000' },
    { hexString: '#121212' }
];

export const BLUE_HEXES: HexCollection = [
    { hexString: '#003494' },
    { hexString: '#041E43' },
    { hexString: '#0437F1' },
    { hexString: '#1D90AF' },
    { hexString: '#7DCED8' }
];

export const BROWN_HEXES: HexCollection = [
    { hexString: '#3B2212' }
];

export const GRAY_HEXES: HexCollection = [
    { hexString: '#7E9594' },
    { hexString: '#869498' },
    { hexString: '#A3A3A3' },
    { hexString: '#F0F3F4' }
];

export const GREEN_HEXES: HexCollection = [
    { hexString: '#007058' },
    { hexString: '#0FFF4F' },
    { hexString: '#23856D' },
    { hexString: '#5F8661' },
    { hexString: '#B1C69F' }

];

export const ORANGE_HEXES: HexCollection = [
    { hexString: '#FFA852' }
];

export const PINK_HEXES: HexCollection = [
    { hexString: '#EC417A' },
    { hexString: '#F06090' },
    { hexString: '#F490B1' },
    { hexString: '#F8B9CE' },
    { hexString: '#FCE3EC' },
    { hexString: '#FF6BB5' }
];

export const PURPLE_HEXES: HexCollection = [
    { hexString: '#7A00F5' },
    { hexString: '#80007F' },
    { hexString: '#AEAED6' },
    { hexString: '#D6D6FF' }
];

export const RED_HEXES: HexCollection = [
    { hexString: '#BC010A' },
    { hexString: '#D01625' }
];

export const WHITE_HEXES: HexCollection = [
    { hexString: '#FAFBEF' },
    { hexString: '#FAFEFF' },
    { hexString: '#FBF9F9' },
    { hexString: '#FFFFFF' }
];
