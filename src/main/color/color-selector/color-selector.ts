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

import { Discriminators } from 'discriminator';
import { P5Context } from 'p5-context';
import { Random, WeightedElement } from 'random';

import { Color } from '../color';
import { ColorSelectorType } from './color-selector-type';

// TODO - unit tests

export interface ColorSelectorConfig {
    readonly NAME: string,
    readonly RANDOM_ORDER: boolean
}

/**
 * ColorSelectors choose and return colors from some list or criteria.
 *
 * @category Color
 * @category Color Selector
 */
export abstract class ColorSelector {
    /**
     * A list of {@link Color} objects that the selector can choose from.
     */
    readonly #COLOR_CHOICES: Color[] = [];

    /**
     * A set of the names of the colors that can be
     * or have been chosen by the color selector.
     */
    readonly #COLOR_NAMES: Set<string> = new Set<string>();

    /**
     * The name of the color selector.
     */
    readonly #NAME: string;

    /**
     * A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `true`, {@link selectColorFromChoices} will select colors in a random order.<br/>
     * When `false`, {@link selectColorFromChoices} will select colors in list order.
     */
    readonly #RANDOM_ORDER: boolean;

    /**
     * The current index of the color being chosen when colors are selected in list order.
     */
    #currentIndex: number = 0;

    /**
     * @param name - The name of the color selector.
     * @param randomOrder - A flag that determines the color selection order
     * of {@link selectColorFromChoices}.<br/>
     * When `randomOrder` is `true`, {@link selectColorFromChoices} will select colors in a random order.<br/>
     * When `randomOrder` is `false`, {@link selectColorFromChoices} will select colors in list order.
     */
    protected constructor(name: string, randomOrder?: boolean) {
        this.#RANDOM_ORDER = randomOrder ?? Random.randomBoolean();
        this.#NAME = name;
    }

    /**
     * @returns The {@link ColorSelectorType} of the selector.
     */
    public abstract get type(): ColorSelectorType;

    /**
     * Select and return a {@link Color} object.
     */
    public abstract getColor(): Color;

    /**
     * @returns The names of the colors that can be or have been chosen
     * by the color selector.
     */
    public get colorNames(): string[] {
        return Array.from(this.#COLOR_NAMES);
    }

    /**
     * @returns The name of the selector (e.g. 'blue rgb color selector').
     */
    public get name(): string {
        return this.#NAME;
    }

    /**
     * Select and return a {@link Color} object to be used as a background.
     * The color will either be black (#000000), white (#FFFFFF), or a color
     * from the selector, chosen by the {@link getColor} method.<br/>
     * <b>IMPORTANT: The sum of chanceOfBlack, chanceOfWhite, and chanceOfColor
     * should be equal to 1.0.</b>
     *
     * @param chanceOfBlack - The percent (0-1) chance that the chosen color
     * will be black (#000000). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfWhite - The percent (0-1) chance that the chosen color
     * will be white (#FFFFFF). The sum of all percentages should be equal to 1.0.
     *
     * @param chanceOfColor - The percent (0-1) chance that the chosen color
     * will be a color from the selector ({@link getColor}).
     * The sum of all percentages should be equal to 1.0.
     */
    public getBackgroundColor(chanceOfBlack: number,
                              chanceOfWhite: number,
                              chanceOfColor: number): Color {
        const p5: P5Lib = P5Context.p5;
        const weightedColors: WeightedElement<Color>[] = [
            { VALUE: new Color(p5.color(0)), WEIGHT: chanceOfBlack, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: new Color(p5.color(255)), WEIGHT: chanceOfWhite, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT },
            { VALUE: this.getColor(), WEIGHT: chanceOfColor, DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT }
        ];

        const selection: Color = Random.randomWeightedElement(weightedColors) ?? (new Color());
        return Color.copy(selection);
    }

    /**
     * @returns A Set of the names of the colors that can be
     * or have been chosen by the color selector.
     */
    protected get COLOR_NAMES(): Set<string> {
        return this.#COLOR_NAMES;
    }

    /**
     * Add a {@link Color} to the list of possible color choices.
     * @param color -
     */
    protected addColorChoice(color: Color): void {
        const choice: Color = Color.copy(color);
        this.#COLOR_CHOICES.push(choice);
        this.#COLOR_NAMES.add(choice.name);
    }

    /**
     * @returns The selected {@link Color}.<br/>
     * If the list of color choices is empty, a default {@link Color}
     * object (black) will be returned.
     */
    protected selectColorFromChoices(): Color {
        let selection: Color | undefined = new Color();

        if (this.#RANDOM_ORDER) {
            selection = Random.randomElement(this.#COLOR_CHOICES);
        } else {
            if (this.#currentIndex < this.#COLOR_CHOICES.length) {
                selection = this.#COLOR_CHOICES[this.#currentIndex];
                this.incrementCurrentIndex();
            }
        }

        if (!selection) {
            selection = new Color();
        }

        return Color.copy(selection);
    }

    /**
     * Increment the index used to select the next
     * {@link Color} object when colors are selected in list order.
     */
    private incrementCurrentIndex(): void {
        const length: number = this.#COLOR_CHOICES.length;

        if (length > 0) {
            this.#currentIndex = (this.#currentIndex + 1) % length;
        }
    }
}
