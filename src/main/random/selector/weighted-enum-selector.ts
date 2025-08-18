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

import { Random } from '../random';
import { WeightedElement } from '../weighted-element';

import { RandomEnumSelector } from './enum-selector';

// TODO - unit tests
// TODO - documentation
// TODO - release notes
export class WeightedEnumSelector<Type> extends RandomEnumSelector<Type> {
    readonly #WEIGHTED_CHOICES: WeightedElement<Type>[] = [];

    public constructor(choices: WeightedElement<Type>[], sameChoice: boolean) {
        super(choices.map((choice: WeightedElement<Type>): Type => choice.VALUE), sameChoice);

        for (const choice of choices) {
            this.#WEIGHTED_CHOICES.push(choice);
        }
    }

    public override getRandomSelection(): Type | undefined {
        if (this.isValid()) {
            return Random.randomWeightedElement(this.#WEIGHTED_CHOICES);
        } else {
            return undefined;
        }
    }

    public override isValid(): boolean {
        return this.#WEIGHTED_CHOICES.length > 0;
    }
}
