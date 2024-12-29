/*
 * Copyright (C) 2023-2024 brittni and the polar bear LLC.
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
 * A map of string keys to some ValueType.
 *
 * @category Utility
 */
export class StringMap<ValueType> {
    /**
     * The underlying map object.
     */
    readonly #MAP: Map<string, ValueType>;

    public constructor() {
        this.#MAP = new Map<string, ValueType>();
    }

    /**
     * @returns All the keys of the map.
     */
    public get keys(): IterableIterator<string> {
        return this.#MAP.keys();
    }

    /**
     * @returns All the values of the map.
     */
    public get values(): IterableIterator<ValueType> {
        return this.#MAP.values();
    }

    /**
     * @returns The size of the map.
     */
    public get size(): number {
        return this.#MAP.size;
    }

    /**
     * @param key - The key of the desired value in the map.
     *
     * @returns The value associated with the given key.
     */
    public get(key: string): ValueType | undefined {
        return this.#MAP.get(key);
    }

    /**
     * Does the map contain the given key?
     *
     * @param key -
     *
     * @returns `true` if the map contains the given key,
     * returns `false` if it does not.
     */
    public hasKey(key: string): boolean {
        return this.#MAP.has(key);
    }

    /**
     * Associate the given key with the given value in the map.
     *
     * @param key -
     * @param value -
     */
    public setKey(key: string, value: ValueType): void {
        this.#MAP.set(key, value);
    }

    /**
     * Associate the given key with the given value in the map
     * only if the key has not been set in the map.
     *
     * @param key -
     * @param value -
     * @param errorMessage - Message to log if the key already has a value.
     * @returns `true` if the operation is successful, `false` if it is not.
     */
    public setUndefinedKey(key: string, value: ValueType, errorMessage?: string): boolean {
        let isSet: boolean;

        if (this.#MAP.has(key)) {
            if (errorMessage) {
                console.warn(errorMessage);
            }

            isSet = false;
        } else {
            this.setKey(key, value);
            isSet = true;
        }

        return isSet;
    }
}
