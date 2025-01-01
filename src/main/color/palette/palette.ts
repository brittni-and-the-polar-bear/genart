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

import { Discriminable, Discriminators } from 'discriminator';

import { PaletteColor } from './palette-color';

/**
 * A collection of {@link PaletteColor} objects.
 *
 * @category Palette
 */
export interface Palette extends Discriminable {
    /**
     * The name of the palette.
     */
    readonly NAME: string;

    /**
     * The source of the palette.
     */
    readonly SOURCE?: string;

    /**
     * The source URL of the palette.
     */
    readonly SOURCE_URL?: string;

    /**
     * A flag indicating if the palette is a gradient.
     */
    readonly IS_GRADIENT: boolean;

    /**
     * The list of {@link PaletteColor} objects that compose the palette.
     */
    readonly COLORS: PaletteColor[];

    /**
     * A map of hex color strings to arrays of hex colors,
     * where each color in the array passes the WCAG AA standard
     * with normal and large size text when compared to the key.<br/>
     * The only colors listed in this map should be the colors of the
     * palette, black (#000000), and white (#FFFFFF).
     */
    readonly CONTRAST_MAP?: {
        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to black (#000000). This list should NOT contain
         * white (#FFFFFF) unless it is a color listed in the palette.
         */
        readonly '#000000': string[];

        /**
         * The colors in the palette that pass the WCAG AA standard when
         * compared to white (#FFFFFF). This list should NOT contain
         * black (#000000) unless it is a color listed in the palette.
         */
        readonly '#FFFFFF': string[];

        readonly [HEX: string]: string[];
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE;
}
