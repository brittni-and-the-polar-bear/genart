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
 * StringValidator provides static methods that can be used
 * to verify that strings contain specified patterns.
 *
 * @category Utility
 */
export class StringValidator {
    /**
     * Is the given string a hex color string?
     *
     * @param hex - string to check for the hex color pattern
     * @param withAlpha - When `true` the string will be checked for a `#RRGGBBAA` pattern.
     * When `false`, the given string will be checked for a `#RRGGBB` pattern.
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
     * @param hex - string to check for the hex color pattern.
     */
    public static isHexWithAlpha(hex: string): boolean {
        if (hex) {
            return StringValidator.#HEX_ALPHA_PATTERN.test(hex) ||
                StringValidator.#HEX_ALPHA_PATTERN_LOWERCASE.test(hex);
        }

        return false;
    }

    /**
     * The {@link RegExp} used to match hex color strings.
     */
    static get #HEX_PATTERN(): RegExp {
        return /^#[A-F0-9]{6}$/;
    }

    /**
     * The {@link RegExp} used to match hex color strings in lowercase.
     */
    static get #HEX_PATTERN_LOWERCASE(): RegExp {
        return /^#[a-f0-9]{6}$/;
    }

    /**
     * The {@link RegExp} used to match hex color strings with an alpha component.
     */
    static get #HEX_ALPHA_PATTERN(): RegExp {
        return /^#[A-F0-9]{8}$/;
    }

    /**
     * The {@link RegExp} used to match hex color strings with an alpha component in lowercase.
     */
    static get #HEX_ALPHA_PATTERN_LOWERCASE(): RegExp {
        return /^#[a-f0-9]{8}$/;
    }
}
