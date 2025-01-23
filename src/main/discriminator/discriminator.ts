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

import { Palette, PaletteColor } from 'color';
import { WeightedElement } from 'random';
import { AspectRatioConfig } from 'sketch';

import { Discriminable } from './discriminable';
import { Discriminators } from './discriminators';

// TODO - release notes
// TODO - unit tests
/**
 * Methods for evaluating if objects implement various interfaces.
 *
 * @category Discriminator
 */
export class Discriminator {
    /**
     * Determines if the given object is an {@link AspectRatioConfig}.
     * (i.e. implements the AspectRatioConfig interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link AspectRatioConfig} interface, `false` if it does not.
     */
    public static isAspectRatioConfig(object: unknown): object is AspectRatioConfig {
        let hasMatch: boolean = false;

        if (object && typeof object === 'object') {
            hasMatch = (object as Discriminable).DISCRIMINATOR === Discriminators.ASPECT_RATIO_CONFIG;
        }

        return hasMatch;
    }

    /**
     * Determines if the given object is a {@link PaletteColor}
     * (i.e. implements the PaletteColor interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link PaletteColor} interface, `false` if it does not.
     */
    public static isPaletteColor(object: unknown): object is PaletteColor {
        let hasMatch: boolean = false;

        if (object && typeof object === 'object') {
            hasMatch = (object as Discriminable).DISCRIMINATOR === Discriminators.PALETTE_COLOR;
        }

        return hasMatch;
    }

    /**
     * Determines if the given object is a {@link Palette}
     * (i.e. implements the Palette interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link Palette} interface, `false` if it does not.
     */
    public static isPalette(object: unknown): object is Palette {
        let hasMatch: boolean = false;

        if (object && typeof object === 'object') {
            hasMatch = (object as Discriminable).DISCRIMINATOR === Discriminators.PALETTE;
        }

        return hasMatch;
    }

    /**
     * Determines if the given object is a {@link WeightedElement}
     * (i.e. implements the WeightedElement interface).
     *
     * @param object
     *
     * @returns `true` if the given object implements
     * the {@link WeightedElement} interface, `false` if it does not.
     */
    public static isWeightedElement(object: unknown): object is WeightedElement<unknown> {
        let hasMatch: boolean = false;

        if (object && typeof object === 'object') {
            hasMatch = (object as Discriminable).DISCRIMINATOR === Discriminators.WEIGHTED_ELEMENT;
        }

        return hasMatch;
    }
}
