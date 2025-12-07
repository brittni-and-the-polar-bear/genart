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

/**
 * The StringValidator class provides static methods that can be used to verify that strings contain specified patterns.
 *
 * @since 2.0.0
 *
 * @category Utility
 */
export class StringValidator {
    /**
     * @throws {Error} - StringValidator is a static class and cannot be instantiated.
     */
    public constructor() {
        throw new Error('StringValidator is a static class and cannot be instantiated.');
    }

    /**
     * Is the given string a hex color string?
     *
     * @param hex {string} - string to check for the hex color pattern
     * @param withAlpha {boolean} - When `true` the string will be checked for a `#RRGGBBAA` pattern.
     * When `false`, the given string will be checked for a `#RRGGBB` pattern.
     *
     * @returns {boolean} - `true` if the given string is a hex color string, `false` otherwise.
     *
     * @since 2.0.0
     */
    public static isHex(hex: string, withAlpha?: boolean): boolean {
        if (withAlpha) {
            return StringValidator.isHexWithAlpha(hex);
        }

        if (hex) {
            return StringValidator.#HEX_PATTERN.test(hex) ||
                StringValidator.#HEX_PATTERN_LOWERCASE.test(hex);
        }

        return false;
    }

    /**
     * Is the given string a hex color string with an alpha component (`#RRGGBBAA`)?
     *
     * @param hex {string} - string to check for the hex color pattern.
     *
     * @returns {boolean} - `true` if the given string is a hex color string with an alpha component, `false` otherwise.
     *
     * @since 2.0.0
     */
    public static isHexWithAlpha(hex: string): boolean {
        if (hex) {
            return StringValidator.#HEX_ALPHA_PATTERN.test(hex) ||
                StringValidator.#HEX_ALPHA_PATTERN_LOWERCASE.test(hex);
        }

        return false;
    }

    /**
     * @returns {RegExp} The {@link RegExp} used to match hex color strings.
     *
     * @private
     */
    static get #HEX_PATTERN(): RegExp {
        return /^#[A-F0-9]{6}$/;
    }

    /**
     * @returns {RegExp} The {@link RegExp} used to match hex color strings in lowercase.
     *
     * @private
     */
    static get #HEX_PATTERN_LOWERCASE(): RegExp {
        return /^#[a-f0-9]{6}$/;
    }

    /**
     * @returns {RegExp} The {@link RegExp} used to match hex color strings with an alpha component.
     *
     * @private
     */
    static get #HEX_ALPHA_PATTERN(): RegExp {
        return /^#[A-F0-9]{8}$/;
    }

    /**
     * @returns {RegExp} The {@link RegExp} used to match hex color strings with an alpha component in lowercase.
     *
     * @private
     */
    static get #HEX_ALPHA_PATTERN_LOWERCASE(): RegExp {
        return /^#[a-f0-9]{8}$/;
    }
}
