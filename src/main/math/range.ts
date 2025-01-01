/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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
 * @category Math
 * @category Random
 */
export class Range {
    /**
     * @param _min - The minimum value of the Range.
     * @param _max - The maximum value of the Range.
     */
    public constructor(private _min: number, private _max: number) {
        if (_max < _min) {
            const temp: number = _max;
            this._max = _min;
            this._min = temp;
        }
    }

    /**
     * @returns The maximum value of the Range.
     */
    public get max(): number {
        return this._max;
    }

    /**
     * If the given {@link newMax} is less than the current {@link min},
     * the fields {@link min} and {@link max} will be set so that {@link min} is less than {@link max}.
     *
     * @param newMax - The new maximum value of the Range.
     */
    public set max(newMax: number) {
        if (newMax < this._min) {
            console.warn(`max (${newMax.toString()}) is less than current min (${this._min.toString()}). object fields will be set so that min is less than max.`);
            this._max = this._min;
            this._min = newMax;
        } else {
            this._max = newMax;
        }
    }

    /**
     * @returns The minimum value of the Range.
     */
    public get min(): number {
        return this._min;
    }

    /**
     * If the given {@link newMin} is greater than the current {@link max},
     * the fields {@link min} and {@link max} will be set so that {@link min} is less than {@link max}.
     *
     * @param newMin - The new minimum value of the Range.
     */
    public set min(newMin: number) {
        if (newMin > this._max) {
            console.warn(`min (${newMin.toString()}) is greater than current max (${this._max.toString()}). object fields will be set so that min is less than max.`);
            this._min = this._max;
            this._max = newMin;
        } else {
            this._min = newMin;
        }
    }
}
