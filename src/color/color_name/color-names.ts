/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import nearestColor from 'nearest-color';

import { Discriminator } from '../../discriminator';
import { StringMap } from '../../map';
import { PaletteColor } from '../../palette_color';
import { StringValidator } from '../../string';

interface NearestColorMatch {
    name: string;
    value: string;
    rgb: { r: number; g: number; b: number; };
    distance: number;
}

/**
 * Manager to store and retrieve the names of colors based on their
 * hex string value. When a name has not yet been stored or found,
 * the nearest color algorithm will be applied to find the name of the next
 * closest color.
 *
 * @since 2.0.0
 *
 * @category ColorNames
 */
export class ColorNames {
    /**
     * A map of colors whose names have already been retrieved from the nearest-color library or set by the {@link addColor} method.
     *
     * @private
     * @readonly
     */
    static readonly #MATCHED_COLORS: StringMap<string> = new StringMap<string>();

    /**
     * The method used in the {@link getColorName} function to find the nearest color.
     * If the method is `null`, the nearest-color library will use its list of default colors;
     *
     * @private
     */
    static #nearestColor: ((hex: string) => NearestColorMatch | null) | null = null;

    /**
     * @throws {Error} - ColorNames is a static class and cannot be instantiated.
     *
     * @since 2.0.0
     */
    public constructor() {
        throw new Error('ColorNames is a static class and cannot be instantiated.');
    }

    /**
     * Set the color names that could be selected when searching for the nearest color match in {@link getColorName}.
     *
     * @param colorNames - An array of color objects with the properties `name` and `hex`.
     *
     * @since 2.0.0
     */
    public static setColors(colorNames: { name: string; hex: string; }[]): void {
        const colors = colorNames.reduce((o, { name, hex }) => Object.assign(o, { [name]: hex }), {});
        ColorNames.#nearestColor = nearestColor.from(colors);
    }

    /**
     * Retrieves the name of the color represented by the given colorHex.
     * If the colorHex string is not well formatted or the nearest color function encounters an error, the method will return undefined.
     *
     * @param colorHex - The hex string representation of the color (format: `#RRGGBB`).
     *
     * @since 2.0.0
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
     * Does the given hex string already have a color name match?
     *
     * @param hex - the hex string to check.
     *
     * @return `true` if the hex has a direct color name match in the manager, `false` if it does not.
     *
     * @since 2.0.0
     */
    public static hasMatch(hex: string): boolean {
        return ColorNames.#MATCHED_COLORS.hasKey(hex);
    }

    /**
     * Map the given hex to the given name.
     *
     * @param hex - The hex string to map.
     * @param name - The name to map the hex string to.
     *
     * @since 2.0.0
     */
    public static addColor(hex: string, name: string): void;
    /**
     * Map the given {@link PaletteColor.HEX} to the given {@link PaletteColor.NAME}.
     *
     * @param color - The {@link PaletteColor} to map.
     *
     * @since 2.0.0
     */
    public static addColor(color: PaletteColor): void;
    public static addColor(color: PaletteColor | string, name?: string): void {
        let hexColor: string = '';
        let hexName: string = '';

        if (typeof color === 'string' && name) {
            hexColor = ColorNames.#formatHex(color);
            hexName = name.toLowerCase();
        } else if (Discriminator.isPaletteColor(color)) {
            hexColor = ColorNames.#formatHex(color.HEX);
            hexName = color.NAME.toLowerCase();
        }

        if (StringValidator.isHex(hexColor) && hexName) {
            ColorNames.#MATCHED_COLORS.set(hexColor, hexName);
        }
    }

    /**
     * Adds a hash symbol (#) to the beginning of the given string
     * if one is missing and returns the result with all uppercase
     * characters.
     *
     * @param original - The string to format.
     *
     * @private
     */
    static #formatHex(original: string): string {
        let hex: string = original;

        if (!hex.startsWith('#')) {
            hex = '#' + hex;
        }

        return hex.toUpperCase();
    }
}
