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

/**
 * A color to be used in a {@link Palette}.
 *
 * @category Palette
 */
export interface PaletteColor extends Discriminable {
    /**
     * The hex string representation of the color (format: `#RRGGBB`).
     */
    readonly HEX: string;

    /**
     * The name of the color.
     */
    readonly NAME: string;

    /**
     * The RGB (red, green, blue) components of the color.
     */
    readonly RGB?: {
        /**
         * The red component (0-255).
         */
        readonly R: number;

        /**
         * The green component (0-255).
         */
        readonly G: number;

        /**
         * The blue component (0-255).
         */
        readonly B: number;
    };

    /**
     * The HSL (hue, saturation, lightness) components of the color.
     */
    readonly HSL?: {
        /**
         * The hue component (0-360).
         */
        readonly H: number;

        /**
         * The saturation component (0-100).
         */
        readonly S: number;

        /**
         * The lightness component (0-100).
         */
        readonly L: number;
    };

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.PALETTE_COLOR;
}
