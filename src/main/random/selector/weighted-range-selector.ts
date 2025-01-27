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
import { WeightedElement } from '../weighted-element';

import { RandomRangeSelector } from './range-selector';

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export class WeightedRangeSelector<Type> extends RandomRangeSelector<Type>{
    readonly #WEIGHTED_CHOICES: WeightedElement<{ category: Type; range: Range; }>[] = [];

    public constructor(choices: WeightedElement<{ category: Type; range: Range; }>[], sameChoice: boolean) {
        super(choices.map((choice: WeightedElement<{ category: Type; range: Range; }>): { category: Type; range: Range } => choice.VALUE), sameChoice);

        for (const choice of choices) {
            this.#WEIGHTED_CHOICES.push(choice);
        }
    }

    public override isValid(): boolean {
        return this.#WEIGHTED_CHOICES.length > 0;
    }

    public override getRandomCategory(): Type | undefined {
        if (this.isValid()) {
            const element: { category: Type; range: Range; } | undefined = Random.randomWeightedElement(this.#WEIGHTED_CHOICES);

            if (element) {
                return element.category;
            }
        }

        return undefined;
    }
}
