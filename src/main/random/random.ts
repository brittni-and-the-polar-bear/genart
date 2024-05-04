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

import {Range} from 'math';

import {WeightedElement} from './weighted-element';

/**
 * A collection of static methods for retrieving random values.
 * @category Random
 */
class Random {
    /**
     * The primary function to be called when generating any random numbers.
     * Set to {@link !Math.random} by default.
     */
    private static _randomMethod: (() => number) = Math.random;

    /**
     * @param method - The primary function to be called when generating any random numbers.<br/>
     * Set to {@link !Math.random} by default.
     */
    public static set randomMethod(method: () => number) {
        Random._randomMethod = method;
    }

    /**
     * @param min - The minimum number that can be returned from this function (inclusive).
     * @param max - The maximum number that can be returned from the function (non-inclusive).
     * @returns A random floating point value greater than or equal to min and less than max.
     */
    public static randomFloat(min: number, max: number): number {
        if (min > max) {
            const temp: number = max;
            max = min;
            min = temp;
        }

        return (Random._randomMethod() * (max - min)) + min;
    }

    /**
     * @param range - The {@link Range} that determines the minimum and maximum
     * values that can be returned from the function.
     * @returns A random floating point value greater than or equal to {@link Range.min}
     * and less than {@link Range.max}.
     */
    public static randomFloatInRange(range: Range): number {
        return Random.randomFloat(range.min, range.max);
    }

    /**
     * @param min - The minimum number that can be returned from this function (inclusive).
     * @param max - The maximum number that can be returned from the function (non-inclusive).
     * @returns A random integer value greater than or equal to min and less than max.
     */
    public static randomInt(min: number, max: number): number {
        return Math.floor(Random.randomFloat(min, max));
    }

    /**
     * @param range - The {@link Range} that determines the minimum and maximum
     * values that can be returned from the function.
     * @returns A random integer value greater than or equal to {@link Range.min}
     * and less than {@link Range.max}.
     */
    public static randomIntInRange(range: Range): number {
        return Math.floor(Random.randomFloatInRange(range));
    }

    /**
     * @param chanceOfTrue - A floating point number between 0 and 1.
     * If provided, it represents the percent chance that this method will return true.
     * @returns A random boolean value.
     */
    public static randomBoolean(chanceOfTrue?: number): boolean {
        let value: boolean = true;

        if (chanceOfTrue
            && (chanceOfTrue > 0 && chanceOfTrue < 1)) {
            const r: number = Random.randomFloat(0, 1);

            if (r > chanceOfTrue) {
                value = false;
            }
        } else {
            const r: number = Random.randomInt(0, 2);
            value = r % 2 === 0;
        }

        return value;
    }

    /**
     * @param list - The list of elements to be selected from.
     * @returns A random element from the given list.
     * This method assumes an equal distribution for all elements of the list.<br/>
     * If an empty list is provided, the function will return {@link !undefined}.
     */
    public static randomElement<Type>(list: Type[]): Type | undefined {
        let element: Type | undefined = undefined;

        if (list.length > 0) {
            const size: number = list.length;
            const index: number = Random.randomInt(0, size);

            if (index < size) {
                element = list[index];
            }
        }

        return element;
    }

    /**
     * @param list - The list of elements to be selected from.<br/>
     * <b>IMPORTANT: The sum of weights of the objects in this list should be equal to 1.0.</b>
     * @returns A random element from the given list.
     * The distribution of the choices will be determined by the weights of each
     * element in the list.<br/>
     * If an empty list is provided, the function will return {@link !undefined}.<br/>
     * If the sum of weights in the list is less than 1.0, the function will return {@link !undefined}.
     */
    public static randomWeightedElement<Type>(list: WeightedElement<Type>[]): Type | undefined {
        let element: Type | undefined = undefined;

        if (list.length > 0) {
            let weightSum: number = list.reduce((total: number, e: WeightedElement<Type>): number => {
                return total + e.weight;
            }, 0);

            weightSum = parseFloat(weightSum.toFixed(4));

            if (weightSum >= 1) {
                if (weightSum > 1) {
                    console.warn('Sum of element weights is greater than 1.0. This could cause some elements to never be selected from the list.');
                }

                const r: number = Random.randomFloat(0, 1);
                let sum: number = 0;

                for (const e of list) {
                    if (r < sum + e.weight) {
                        element = e.value;
                        break;
                    } else {
                        sum += e.weight;
                    }
                }
            } else {
                console.warn('Sum of element weights is less than 1.0. Random element cannot be retrieved.');
            }
        }

        return element;
    }
}

export {Random};
