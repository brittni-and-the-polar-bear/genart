/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's Generative Art Library,
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

import {PaletteColor} from "./palette-color";

/**
 * A collection of {@link PaletteColor} objects.
 * @category Palette
 */
export interface Palette {
    /**
     * The name of the palette.
     */
    readonly name: string,

    /**
     * The source of the palette. May be the URL where the palette can be found.
     */
    readonly source: string,

    /**
     * A flag indicating if the palette is a gradient.
     */
    readonly isGradient: boolean,

    /**
     * The list of {@link PaletteColor} objects that compose the palette.
     */
    readonly colors: PaletteColor[]
}