/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import { Palette, PaletteColor } from '../palette';
import { Color } from '../color';

import { ColorSelectorType } from './color-selector-type';
import { ListColorSelector } from './list-color-selector';

export interface PaletteColorSelectorConfig {
    readonly PALETTE: Palette;
    readonly RANDOM_ORDER?: boolean;
    readonly BUILD_IN_ORDER?: boolean;
    readonly COLOR_COUNT?: number;
}

export class PaletteColorSelector extends ListColorSelector<PaletteColor> {
    public constructor(config: PaletteColorSelectorConfig) {
        super({
            NAME: PaletteColorSelector.#buildName(config.PALETTE),
            RANDOM_ORDER: config.RANDOM_ORDER,
            BUILD_IN_ORDER: config.BUILD_IN_ORDER,
            COLOR_COUNT: config.COLOR_COUNT,
            COLORS: config.PALETTE.COLORS
        })
    }

    static #buildName(palette: Palette): string {
        let paletteName: string = palette.NAME.toLowerCase();

        if (!paletteName.endsWith(' palette')) {
            paletteName += ' palette';
        }

        paletteName += ' color selector';
        return paletteName;
    }

    public override get type(): ColorSelectorType {
        return ColorSelectorType.PALETTE;
    }

    protected override convertColor(color: PaletteColor): Color {
        return (new Color(color));
    }
}
