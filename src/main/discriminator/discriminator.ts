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

// TODO - unit tests
/**
 * Static class methods for evaluating if objects implement various interfaces.
 *
 * @since 2.0.0
 *
 * @category Utility / Discriminator
 */
export class Discriminator {
    /**
     * Does the given object implement the {@link AspectRatioConfig} inferface?
     *
     * @param object - The object to check
     *
     * @returns `true` if the given object implements the {@link AspectRatioConfig} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isAspectRatioConfig(object: unknown): object is AspectRatioConfig {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.ASPECT_RATIO_CONFIG);
    }

    /**
     * Does the given object implement the {@link PaletteColor} interface?
     *
     * @param object - The object to check
     *
     * @returns `true` if the given object implements the {@link PaletteColor} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isPaletteColor(object: unknown): object is PaletteColor {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.PALETTE_COLOR);
    }

    /**
     * Does the given object implement the {@link Palette} interface?
     *
     * @param object - The object to check
     *
     * @returns `true` if the given object implements the {@link Palette} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isPalette(object: unknown): object is Palette {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.PALETTE);
    }

    /**
     * Does the given object implement the {@link WeightedElement} interface?
     *
     * @param object - The object to check
     *
     * @returns `true` if the given object implements the {@link WeightedElement} interface, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static isWeightedElement(object: unknown): object is WeightedElement<unknown> {
        return Discriminator.#hasDiscriminatorMatch(object, Discriminators.WEIGHTED_ELEMENT);
    }

    /**
     * Does the given object implement the {@link Discriminable} interface, and does the object's {@link Discriminable.DISCRIMINATOR DISCRIMINATOR} value match the given discriminator?
     *
     * @param object - The object to check
     * @param discriminator - The discriminator value to check against
     */
    static #hasDiscriminatorMatch(object: unknown, discriminator: Discriminators): boolean {
        if (object && typeof object === 'object') {
            return (object as Discriminable).DISCRIMINATOR === discriminator;
        }

        return false;
    }
}
