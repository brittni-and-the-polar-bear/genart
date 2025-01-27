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

import { Range } from 'math';

import { Random } from '../random';

import { RandomSelector } from './random-selector';

export class RandomRangeSelector<Type> extends RandomSelector {
    readonly #CHOICES: Map<Type, Range> = new Map<Type, Range>();

    #currentCategory: Type | undefined = undefined;
    #currentSelection: number | undefined = undefined;

    public constructor(choices: { category: Type; range: Range; }[], sameChoice: boolean) {
        super(sameChoice);

        for (const choice of choices) {
            this.#CHOICES.set(choice.category, choice.range);
        }

        this.#currentCategory = this.getRandomCategory();
    }

    public isValid(): boolean {
        return this.#CHOICES.size > 0;
    }

    public reset(): void {
        this.#currentSelection = undefined;
    }

    public select(): number {
        let result: number;

        if (this.sameChoice) {
            if (!this.#currentSelection) {
                this.#currentSelection = this.#calculateChoice();
            }

            result = this.#currentSelection;
        } else {
            result = this.#calculateChoice();
        }

        return result;
    }

    public getRandomCategory(): Type | undefined {
        const keys: Type[] = Array.from(this.#CHOICES.keys());
        return Random.randomElement(keys);
    }

    public setRandomCategory(): void {
        this.reset();
        this.#currentCategory = this.getRandomCategory();
    }

    public get currentCategory(): Type | undefined {
        return this.#currentCategory;
    }

    public set currentCategory(category: Type | undefined) {
        if (category) {
            this.#currentCategory = category;
        }
    }

    public getCurrentCategoryRange(): Range | undefined {
        let range: Range | undefined = undefined;

        if (this.#currentCategory) {
            range = this.#CHOICES.get(this.#currentCategory);
        }

        return range;
    }

    #calculateChoice(): number {
        let result: number = 0;

        if (this.#currentCategory) {
            const range: Range | undefined = this.#CHOICES.get(this.#currentCategory);

            if (range) {
                result = Random.randomFloatInRange(range);
            }
        }

        return result;
    }
}
