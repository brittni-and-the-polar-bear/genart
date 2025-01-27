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

// TODO - WeightedEnumSelector

import { WeightedElement } from '../weighted-element';

import {Random} from "../random";
import {RandomSelector} from "./random-selector";

export class WeightedEnumSelector<Type> extends RandomSelector {
    readonly #CHOICES: Set<WeightedElement<Type>> = new Set<WeightedElement<Type>>();

    #currentSelection: Type | undefined;

    public constructor(choices: WeightedElement<Type>[], sameChoice: boolean) {
        super(sameChoice);
        for (const choice of choices) {
            this.#CHOICES.add(choice);
        }

        this.#currentSelection = this.getRandomSelection();
    }

    public get currentSelection(): Type | undefined {
        return this.#currentSelection;
    }

    public set currentSelection(currentSelection: Type | undefined) {
        this.#currentSelection = currentSelection;
    }

    public getRandomSelection(): Type | undefined {
        const values: WeightedElement<Type>[] = Array.from(this.#CHOICES.values());
        return Random.randomWeightedElement(values);
    }

    public setRandomSelection(): void {
        this.reset();
        this.currentSelection = this.getRandomSelection();
    }

    public isValid(): boolean {
        return this.#CHOICES.size > 0;
    }

    public reset(): void {
        this.currentSelection = undefined;
    }

    public select(): Type | undefined {
        if (this.sameChoice) {
            if (!this.currentSelection) {
                this.currentSelection = this.getRandomSelection();
            }

            return this.currentSelection;
        } else {
            return this.getRandomSelection();
        }
    }
}
