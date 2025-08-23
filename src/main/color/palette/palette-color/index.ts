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

import {PaletteColor} from "./palette-color";

// export * from './black';
export * from './blue';
export * from './brown';
export * from './gray';
export * from './green';
export * from './neutral';
export * from './orange';
export * from './pink';
export * from './purple';
export * from './red';
export * from './white';

import * as black from './black';
// import * as blue from './blue';
// import * as brown from './brown';
// import * as gray from './gray';
// import * as green from './green';
// import * as neutral from './neutral';
// import * as orange from './orange';
// import * as pink from './pink';
// import * as purple from './purple';
// import * as red from './red';
// import * as white from './white';

export namespace PaletteColors {
    /**
     * <div class="color-block" style="background: #000000;">
     *     <a href="https://coolors.co/000000" target="_blank" rel="noopener noreferrer">
     *         <h2 class="color-block white-pass">black (#000000)</h2>
     *     </a>
     * </div>
     *
     * @see {@link ASEXUAL_FLAG_PALETTE}
     *
     * @category All
     * @category Black
     */
    export const PC_000000: PaletteColor = black.PC_000000;
    export const PC_121212: PaletteColor = black.PC_121212;
}

export * from './palette-color';
export * from './palette-color-maps';
