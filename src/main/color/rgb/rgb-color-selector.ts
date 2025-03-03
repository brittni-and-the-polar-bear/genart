/*
 * Copyright (C) 2022-2025 brittni and the polar bear LLC.
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

// TODO - documentation
// TODO - release notes
// TODO - unit tests

import { Range } from 'math';
import { Random } from 'random';

import { Color } from '../color';
import { ColorSelector } from '../color-selector';
import {ColorSelectorType} from "../color-selector-type";

export interface RGBColorSelectorConfig {
    readonly NAME: string;
    readonly RED_RANGE: Range;
    readonly GREEN_RANGE: Range;
    readonly BLUE_RANGE: Range;
    readonly ALPHA_RANGE?: Range;
}

export abstract class RGBColorSelector extends ColorSelector {
    readonly #RED_RANGE: Range;
    readonly #GREEN_RANGE: Range;
    readonly #BLUE_RANGE: Range;
    readonly #ALPHA_RANGE: Range | undefined;

    protected constructor(config: RGBColorSelectorConfig) {
        super(config.NAME, true);
        this.#RED_RANGE = config.RED_RANGE;
        this.#GREEN_RANGE = config.GREEN_RANGE;
        this.#BLUE_RANGE = config.BLUE_RANGE;
        this.#ALPHA_RANGE = config.ALPHA_RANGE;
    }

    public override getColor(): Color {
        const r: number = Random.randomFloatInRange(this.#RED_RANGE);
        const g: number = Random.randomFloatInRange(this.#GREEN_RANGE);
        const b: number = Random.randomFloatInRange(this.#BLUE_RANGE);
        let a: number = 255;

        if (this.#ALPHA_RANGE) {
            a = Random.randomFloatInRange(this.#ALPHA_RANGE);
        }
        return new Color(r, g, b, a);
    }

    public override get type(): ColorSelectorType {
        return ColorSelectorType.RGB;
    }
}
