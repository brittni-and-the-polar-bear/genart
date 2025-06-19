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

import P5Lib from 'p5';

import { P5Context } from 'p5-context';
import { Random, RandomListSelector } from 'random';

import { Color } from '../color';
import { ColorSelector, ColorSelectorConfig } from './color-selector';

export interface ListColorSelectorConfig<ColorType> extends ColorSelectorConfig {
    readonly COLORS: ColorType[];
    readonly BUILD_IN_ORDER?: boolean;
    readonly COLOR_COUNT?: number;
}

// TODO - documentation
// TODO - unit tests
// TODO - release notes
export abstract class ListColorSelector<ColorType> extends ColorSelector {
    protected constructor(config: ListColorSelectorConfig<ColorType>) {
        super(config.NAME, config.RANDOM_ORDER);
        this.#selectColors(config.COLORS, config.COLOR_COUNT, config.BUILD_IN_ORDER);
    }

    static get #MIN_COLOR_COUNT(): number {
        return 2;
    }

    protected abstract convertColor(color: ColorType): Color;

    public override getColor(): Color {
        return this.selectColorFromChoices();
    }

    #selectColors(colors: ColorType[],
                  colorCount?: number,
                  buildInOrder?: boolean): void {
        const p5: P5Lib = P5Context.p5;

        let count: number = colorCount ?? Random.randomInt(ListColorSelector.#MIN_COLOR_COUNT, colors.length + 1);
        count = p5.constrain(
            count,
            ListColorSelector.#MIN_COLOR_COUNT,
            colors.length
        );

        buildInOrder = buildInOrder ?? Random.randomBoolean();

        if (colors.length > 0) {
            if (buildInOrder) {
                for (let i: number = 0; i < count; i++) {
                    const choice: ColorType = colors[i];
                    this.addColorChoice(this.convertColor(choice));
                }
            } else {
                const selector: RandomListSelector<ColorType> = new RandomListSelector<ColorType>(colors);

                for (let i: number = 0; i < count; i++) {
                    const choice: ColorType | undefined = selector.getRandomElementAndRemove();

                    if (choice) {
                        this.addColorChoice(this.convertColor(choice));
                    } else {
                        console.error('ListColorSelector.#selectColors(): choice is undefined');
                    }
                }
            }
        }
    }
}
