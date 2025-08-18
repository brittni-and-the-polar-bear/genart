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

import nearestColor from 'nearest-color';

import { Discriminator } from 'discriminator';
import { StringMap } from 'map';
import { StringValidator } from 'string';

import { PaletteColor } from '../palette';

interface NearestColorMatch {
    name: string;
    value: string;
    rgb: { r: number; g: number; b: number; };
    distance: number;
}

// TODO - test building nearest color match in project
// TODO - if successful, remove color-name-list dependency and add to project

// TODO - release notes
// TODO - docs
// TODO - unit tests

/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value. When a name has not yet been stored or found,
 * the nearest color algorithm will be applied to find the name of the next
 * closest color.
 */
export class ColorNames {
    /**
     * A map of colors whose names have already been retrieved from the
     * nearest-color library or set by the {@link addColor} method.
     */
    static readonly #MATCHED_COLORS: StringMap<string> = new StringMap<string>();

    /**
     * The method used in the {@link getColorName} function to find the nearest color.
     * If the method is `null`, the nearest-color library will use its list of default colors;
     */
    static #nearestColor: ((hex: string) => NearestColorMatch | null) | null = null;

    /**
     * Set the color names that could possibly be selected when searching for the nearest
     * color match in {@link getColorName}.
     *
     * @param colorNames -
     */
    public static setPossibleColors(colorNames: { name: string; hex: string; }[]): void {
        const colors = colorNames.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
        ColorNames.#nearestColor = nearestColor.from(colors);
    }

    /**
     * Retrieves the name of the color represented by the given {@link colorHex}.
     * If the {@link colorHex} string is not well formatted or the nearest color function
     * encounters an error, the method will return undefined.
     *
     * @param colorHex - The hex string representation of the color (format: `#RRGGBB`).
     */
    public static getColorName(colorHex: string): string | undefined {
        colorHex = ColorNames.#formatHex(colorHex);
        let match: string | undefined = undefined;

        if (ColorNames.hasMatch(colorHex)) {
            match = ColorNames.#MATCHED_COLORS.get(colorHex);
        } else {
            try {
                let result: NearestColorMatch | string | null;

                if (ColorNames.#nearestColor) {
                    result = ColorNames.#nearestColor(colorHex);
                } else {
                    result = nearestColor(colorHex);
                }

                if (result) {
                    if (typeof result === 'string') {
                        match = result;
                    } else {
                        match = result.name;
                    }
                }

                if (match) {
                    ColorNames.#MATCHED_COLORS.setIfAbsent(colorHex, match);
                }
            } catch {
                match = undefined;
            }
        }

        if (match) {
            match = match.toLowerCase();
        }

        return match;
    }

    /**
     * Does the given {@link hex} string already have a color name match?
     *
     * @param hex
     *
     * @return `true` if the {@link hex} has a direct color name match in the manager,
     * `false` if it does not.
     */
    public static hasMatch(hex: string): boolean {
        return ColorNames.#MATCHED_COLORS.hasKey(hex);
    }

    /**
     * Map the given hex to the given name.
     *
     * @param hex
     * @param name
     */
    public static addColor(hex: string, name: string): void;
    /**
     * Map the given {@link PaletteColor.HEX} to the given {@link PaletteColor.NAME}.
     *
     * @param color
     */
    public static addColor(color: PaletteColor): void;
    public static addColor(color: PaletteColor | string, name?: string): void {
        if (typeof color === 'string' && name) {
            const hexColor: string = ColorNames.#formatHex(color);

            if (StringValidator.isHex(hexColor) && name) {
                ColorNames.#MATCHED_COLORS.set(hexColor, name);
            }
        } else if (Discriminator.isPaletteColor(color)) {
            const hex: string = ColorNames.#formatHex(color.HEX);
            ColorNames.#MATCHED_COLORS.set(hex, color.NAME);
        }
    }

    /**
     * Adds a hash symbol (#) to the beginning of the given string
     * if one is missing and returns the result with all uppercase
     * characters.
     *
     * @param original
     */
    static #formatHex(original: string): string {
        let hex: string = original;

        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }

        return hex.toUpperCase();
    }
}
