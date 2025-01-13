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

/**
 * Structure to handle a range of values,
 * where the range has a minimum value and a maximum value.
 *
 * @category Random
 * @category Utility
 */
export class Range {
    #minimum: number;
    #maximum: number;

    /**
     * @param min - The minimum value of the Range.
     * @param max - The maximum value of the Range.
     */
    public constructor(min: number, max: number) {
        this.#minimum = min;
        this.#maximum = max;

        if (max < min) {
            const temp: number = max;
            this.#maximum = min;
            this.#minimum = temp;
        }
    }

    /**
     * @returns The maximum value of the Range.
     */
    public get max(): number {
        return this.#maximum;
    }

    /**
     * If the given maximum is less than the current minimum,
     * the fields `min` and `max` will be set so that `min` is less than `max`.
     *
     * @param max - The new maximum value of the Range.
     */
    public set max(max: number) {
        if (max < this.#minimum) {
            console.warn(`max (${max.toString()}) is less than current min (${this.#minimum.toString()}). object fields will be set so that min is less than max.`);
            this.#maximum = this.#minimum;
            this.#minimum = max;
        } else {
            this.#maximum = max;
        }
    }

    /**
     * @returns The minimum value of the Range.
     */
    public get min(): number {
        return this.#minimum;
    }

    /**
     * If the given minimum is greater than the current maximum,
     * the fields `min` and `max` will be set so that `min` is less than `max`.
     *
     * @param min - The new minimum value of the Range.
     */
    public set min(min: number) {
        if (min > this.#maximum) {
            console.warn(`min (${min.toString()}) is greater than current max (${this.#maximum.toString()}). object fields will be set so that min is less than max.`);
            this.#minimum = this.#maximum;
            this.#maximum = min;
        } else {
            this.#minimum = min;
        }
    }
}
