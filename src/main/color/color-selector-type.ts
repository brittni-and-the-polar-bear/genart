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

// TODO - fix link to ColorSelector
// TODO - documentation
// TODO - release notes
// TODO - unit tests
/**
 * Enum for the different types of {@link ColorSelector} classes.
 *
 * @category Color
 */
export enum ColorSelectorType {
    /**
     * Color selector that chooses colors from a pre-selected palette.
     */
    PALETTE = 'palette color selector',

    /**
     * Color selector that chooses color randomly from a range of RGB(A) values.
     */
    RGB = 'RGB color selector',

    HSL = 'HSL color selector',

    MAPPABLE = 'mappable color selector',

    OTHER = 'other color selector',

    /**
     * Default color selector. Should only be used in {@link DefaultColorSelector}.
     */
    DEFAULT = 'default color selector'
}
