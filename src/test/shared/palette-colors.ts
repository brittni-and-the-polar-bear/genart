/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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

import {PaletteColor} from 'palette';

import {checkForValidHexColorString} from './color';

type HexCollection = {hexString: string}[];

export const BLACK_HEXES: HexCollection = [
    {hexString: '#121212'}
];

export const BLUE_HEXES: HexCollection = [
    {hexString: '#0437F2'},
    {hexString: '#1D90AF'},
    {hexString: '#7DCED8'}
];

export const GREEN_HEXES: HexCollection = [
    {hexString: '#006F57'},
    {hexString: '#0FFF4F'},
    {hexString: '#23856D'}
];

export const PINK_HEXES: HexCollection = [
    {hexString: '#EC407A'},
    {hexString: '#F06090'},
    {hexString: '#F48FB1'},
    {hexString: '#F8BACF'},
    {hexString: '#FF6BB5'}
];

export const PURPLE_HEXES: HexCollection = [
    {hexString: '#7A00F5'}
];

export const RED_HEXES: HexCollection = [
    {hexString: '#BC010A'}
];

export function checkForValidPaletteColor(pc: PaletteColor): void {
    expect(pc.RGB).toBeTruthy();
    expect(pc.HSL).toBeTruthy();

    expect(pc.HEX).toBeTruthy();
    checkForValidHexColorString(pc.HEX);
    expect(pc.HEX.toUpperCase()).toBe(pc.HEX);

    expect(pc.NAME).toBeTruthy();
    expect(pc.NAME.toLowerCase()).toBe(pc.NAME);
}
