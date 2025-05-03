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

import { Color } from '../color';
import { ColorSelector, ColorSelectorConfig } from './color-selector';

export interface ListColorSelectorConfig<ColorType> extends ColorSelectorConfig {
    readonly COLORS: ColorType[];
}

// TODO - implement list color selector
export abstract class ListColorSelector<ColorType> extends ColorSelector {
    protected constructor(config: ListColorSelectorConfig<ColorType>) {
        super(config.NAME, config.RANDOM_ORDER);
        this.addColorChoices(config.COLORS);
    }

    protected abstract addColorChoices(colors: ColorType[]): void;

    public override getColor(): Color {
        return this.selectColorFromChoices();
    }
}
