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

/**
 * The collection of discriminator values for library interfaces.
 * All values should be unique.
 *
 * @since 2.0.0
 *
 * @category Utility / Discriminator
 */
export enum Discriminators {
    /**
     * Discriminator for the {@link AspectRatioConfig} interface.
     *
     * @since 2.0.0
     */
    ASPECT_RATIO_CONFIG = 'I_ASPECT-RATIO-CONFIG',

    /**
     * Discriminator for the {@link Palette} interface.
     *
     * @since 2.0.0
     */
    PALETTE = 'I_PALETTE',

    /**
     * Discriminator for the {@link PaletteColor} interface.
     *
     * @since 2.0.0
     */
    PALETTE_COLOR = 'I_PALETTE-COLOR',

    /**
     * Discriminator for the {@link WeightedElement} interface.
     *
     * @since 2.0.0
     */
    WEIGHTED_ELEMENT = 'I_WEIGHTED-ELEMENT'
}
