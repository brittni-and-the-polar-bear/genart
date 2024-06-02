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

import {SketchContext} from 'context';
import {Random, WeightedElement} from 'random';

import {Color} from './color';
import {ColorSelectorType} from './color-selector-type';

const p5: P5Lib = SketchContext.p5;

/**
 * ColorSelectors choose and return colors from some set list or criteria.
 *
 * @category Color
 */
export abstract class ColorSelector {
    /**
     * A set list of {@link Color} objects that the selector can choose from.
     */
    private readonly _COLOR_CHOICES: Color[] = [];

    /**
     * A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `true`, {@link selectColorFromChoices} will select colors
     * from {@link _COLOR_CHOICES} in a random order.<br/>
     * When `false`, {@link selectColorFromChoices} will select colors
     * list order.
     */
    private readonly _RANDOM_ORDER: boolean;

    /**
     * The current index of {@link _COLOR_CHOICES} being chosen
     * when colors are selected in list order (i.e. {@link _RANDOM_ORDER} is `false`).
     */
    private _currentIndex: number = 0;

    /**
     * @param randomOrder A flag that determines the color selection order
     * of {@link selectColorFromChoices}.
     *
     * @see {@link _RANDOM_ORDER}
     */
    protected constructor(randomOrder?: boolean) {
        this._RANDOM_ORDER = randomOrder ?? Random.randomBoolean();
    }

    /**
     * @returns A list of the names of the colors the selector
     * is choosing from.
     */
    public abstract get colorNames(): string[];

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     */
    public abstract get name(): string;

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     */
    public abstract get type(): ColorSelectorType;

    /**
     * Select and return a {@link Color} object.
     */
    public abstract getColor(): Color;

    /**
     * @returns The selected {@link Color} from the {@link _COLOR_CHOICES} list.<br/>
     * If {@link _COLOR_CHOICES} is empty, a default {@link Color}
     * object (black) will be returned.
     */
    public selectColorFromChoices(): Color {
        let col: Color = new Color();

        if (this._RANDOM_ORDER) {
            col = Random.randomElement(this._COLOR_CHOICES) ?? (new Color());
        } else {
            if (this._currentIndex < this._COLOR_CHOICES.length) {
                col = this._COLOR_CHOICES[this._currentIndex];
                this.incrementCurrentIndex();
            }
        }

        return col;
    }

    // TODO - unit test
    // TODO - documentation
    // TODO - update release notes
    public chooseBackgroundColor(chanceOfBlack: number,
                                 chanceOfWhite: number,
                                 chanceOfColor: number): Color {
        const weightedColors: WeightedElement<Color>[] = [
            {value: new Color(p5.color(0)), weight: chanceOfBlack},
            {value: new Color(p5.color(255)), weight: chanceOfWhite},
            {value: this.getColor(), weight: chanceOfColor}
        ];

        return Random.randomWeightedElement(weightedColors) ?? (new Color());
    }

    /**
     * Add a {@link Color} to the {@link _COLOR_CHOICES} list.
     * @param color -
     */
    protected addColorChoice(color: Color): void {
        this._COLOR_CHOICES.push(color);
    }

    /**
     * Increment {@link _currentIndex} to select the next
     * {@link Color} element in the {@link _COLOR_CHOICES} list.
     *
     * @see {@link _RANDOM_ORDER}
     */
    private incrementCurrentIndex(): void {
        const length: number = this._COLOR_CHOICES.length;

        if (length > 0) {
            this._currentIndex = (this._currentIndex + 1) % length;
        }
    }
}
