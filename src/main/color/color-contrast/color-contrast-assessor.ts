/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import { getContrastRatios, ResponseObject } from 'cococh';

import { Color } from 'color';
import { Discriminator } from 'discriminator';
import { PaletteColor } from 'palette';

/**
 * Web Content Accessibility Guidelines (WCAG) color contrast categories.<br/>
 * To learn more about WCAG, visit
 * <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">https://www.w3.org/WAI/standards-guidelines/wcag/</a>.
 *
 * @category Color Contrast
 */
export enum ContrastStandard {
    /**
     * WCAG AA Standard (color contrast >= 4.5)
     */
    AA = 'AA',

    /**
     * WCAG AAA Standard (color contrast >= 7)
     */
    AAA = 'AAA'
}

/**
 * Font size category used to evaluate the accessibility standard.
 *
 * @category Color Contrast
 */
export enum ContrastFontSize {
    /**
     * Normal font size.
     */
    NORMAL = 'normal',

    /**
     * Large font size.
     */
    LARGE = 'large'
}

/**
 * Evaluates if two colors meet the AA or AAA contrast standard
 * of the Web Content Accessibility Guidelines (WCAG).<br/>
 * To learn more about WCAG, visit
 * <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer">https://www.w3.org/WAI/standards-guidelines/wcag/</a>.
 *
 * @category Color
 * @category Color Contrast
 */
export class ColorContrastAssessor {
    /**
     * Evaluates if two {@link Color} objects have an appropriate contrast ratio
     * for the {@link ContrastStandard.AA AA} contrast standard  and
     * {@link ContrastFontSize.NORMAL normal} font size.
     *
     * @param colorA
     * @param colorB
     */
    public static meetsContrastStandard(
        colorA: Color,
        colorB: Color): boolean;
    /**
     * Evaluates if two {@link PaletteColor} objects have an appropriate contrast ratio
     * for the {@link ContrastStandard.AA AA} contrast standard  and
     * {@link ContrastFontSize.NORMAL normal} font size.
     *
     * @param colorA
     * @param colorB
     */
    public static meetsContrastStandard(
        colorA: PaletteColor,
        colorB: PaletteColor): boolean;
    /**
     * Evaluates if two colors have an appropriate contrast ratio
     * for the {@link ContrastStandard.AA AA} contrast standard  and
     * {@link ContrastFontSize.NORMAL normal} font size.
     *
     * @param hexA
     * @param hexB
     */
    public static meetsContrastStandard(
        hexA: string,
        hexB: string): boolean;
    /**
     * Evaluates if two {@link Color} objects have an appropriate contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize}.
     *
     * @param colorA
     * @param colorB
     * @param standard
     * @param fontSize
     */
    public static meetsContrastStandard(
        colorA: Color,
        colorB: Color,
        standard: ContrastStandard,
        fontSize: ContrastFontSize): boolean;
    /**
     * Evaluates if two {@link PaletteColor} objects have an appropriate contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize}.
     *
     * @param colorA
     * @param colorB
     * @param standard
     * @param fontSize
     */
    public static meetsContrastStandard(
        colorA: PaletteColor,
        colorB: PaletteColor,
        standard: ContrastStandard,
        fontSize: ContrastFontSize): boolean;
    /**
     * Evaluates if two colors have an appropriate contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize}.
     *
     * @param hexA
     * @param hexB
     * @param standard
     * @param fontSize
     */
    public static meetsContrastStandard(
        hexA: string,
        hexB: string,
        standard: ContrastStandard,
        fontSize: ContrastFontSize): boolean;
    public static meetsContrastStandard(colorA: Color | PaletteColor | string,
                                        colorB: Color | PaletteColor | string,
                                        standard?: ContrastStandard,
                                        fontSize?: ContrastFontSize): boolean {
        let hexA: string = '#000000';
        let hexB: string = '#000000';

        if (colorA instanceof Color && colorB instanceof Color) {
            hexA = colorA.hex;
            hexB = colorB.hex;
        } else if (Discriminator.isPaletteColor(colorA) && Discriminator.isPaletteColor(colorB)) {
            hexA = colorA.HEX;
            hexB = colorB.HEX;
        } else if (typeof colorA === 'string' && typeof colorB === 'string') {
            hexA = colorA;
            hexB = colorB;
        }

        return ColorContrastAssessor.#haveAppropriateContrastRatio(
            hexA,
            hexB,
            standard ?? ContrastStandard.AA,
            fontSize ?? ContrastFontSize.NORMAL
        );
    }

    /**
     * Do the given colors conform to guidelines for the given standard and font size?
     *
     * @param hexA
     * @param hexB
     * @param standard
     * @param fontSize
     *
     * @returns `true` if the two colors have an acceptable contrast ratio
     * for the given {@link ContrastStandard} and {@link ContrastFontSize},
     * `false` if they do not have an acceptable ratio.
     */
    static #haveAppropriateContrastRatio(hexA: string,
                                                hexB: string,
                                                standard: ContrastStandard,
                                                fontSize: ContrastFontSize): boolean {
        const ratioResults: ResponseObject = getContrastRatios(hexA, hexB);
        return ratioResults[fontSize][standard];
    }
}
