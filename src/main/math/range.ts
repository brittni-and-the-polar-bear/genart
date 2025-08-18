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
 * Structure to handle a range of number values, where the range has a minimum value and a maximum value.
 *
 * @since 2.0.0
 *
 * @category Random
 * @category Utility
 */
export class Range {
    #minimum: number;
    #maximum: number;

    /**
     * @param min - The minimum value of the Range object.
     * @param max - The maximum value of the Range object.
     *
     * @since 2.0.0
     */
    public constructor(min: number, max: number) {
        this.#minimum = min;
        this.#maximum = max;

        if (this.#maximum < this.#minimum) {
            console.warn(`max (${this.#maximum.toString()}) is less than min (${this.#minimum.toString()}). Object fields will be updated so that min is less than max.`);
            const temp: number = this.#maximum;
            this.#maximum = this.#minimum;
            this.#minimum = temp;
        }
    }

    /**
     * @returns The maximum value of the Range object.
     *
     * @since 2.0.0
     */
    public get max(): number {
        return this.#maximum;
    }

    /**
     * @param max - The new maximum value of the Range object.
     * If the given max is less than the current min, the fields `min` and `max` will be updated so that `min` is less than `max`.
     *
     * @since 2.0.0
     */
    public set max(max: number) {
        if (max < this.#minimum) {
            console.warn(`max (${max.toString()}) is less than current min (${this.#minimum.toString()}). object fields will be updated so that min is less than max.`);
            this.#maximum = this.#minimum;
            this.#minimum = max;
        } else {
            this.#maximum = max;
        }
    }

    /**
     * @returns The minimum value of the Range object.
     *
     * @since 2.0.0
     */
    public get min(): number {
        return this.#minimum;
    }

    /**
     * @param min - The new minimum value of the Range object.
     * If the given min is greater than the current max, the fields `min` and `max` will be updated so that `min` is less than `max`.
     *
     * @since 2.0.0
     */
    public set min(min: number) {
        if (min > this.#maximum) {
            console.warn(`min (${min.toString()}) is greater than current max (${this.#maximum.toString()}). object fields will be updated so that min is less than max.`);
            this.#minimum = this.#maximum;
            this.#maximum = min;
        } else {
            this.#minimum = min;
        }
    }
}
