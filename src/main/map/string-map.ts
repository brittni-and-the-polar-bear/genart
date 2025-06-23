/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
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
 * Provides a type-safe wrapper around the native Map class for string-based keys.
 *
 * @category Utility
 */
export class StringMap<ValueType> {
    /**
     * The underlying map object.
     */
    readonly #MAP: Map<string, ValueType>;

    /**
     * Creates a new StringMap instance.
     *
     * @param map - Optional map to initialize from.
     * If provided, all entries from the given map will be copied to this new instance.
     */
    public constructor(map?: StringMap<ValueType> | Map<string, ValueType>) {
        if (map && (map instanceof StringMap || map instanceof Map)) {
            this.#MAP = new Map<string, ValueType>(map.entries());
        } else {
            this.#MAP = new Map<string, ValueType>();
        }
    }

    /**
     * Creates a shallow copy of the given map.
     *
     * @param map - The map to copy.
     *
     * @returns A new {@link StringMap} instance containing the same key-value pairs as the given map.
     */
    public static copy<Type>(map: StringMap<Type> | Map<string, Type>): StringMap<Type> {
        return new StringMap<Type>(map);
    }

    /**
     * @returns The size of the map.
     */
    public get size(): number {
        return this.#MAP.size;
    }

    /**
     * Get the value associated with the given key in the map.
     * If the given key does not exist in the map, the method will return `undefined`.
     *
     * @param key - The key of the desired value in the map.
     */
    public get(key: string): ValueType | undefined {
        return this.#MAP.get(key);
    }

    /**
     * Associate the given key with the given value in the map.
     *
     * @param key - The key to associate with the value in the map.
     * @param value - The value to store in the map.
     *
     * @throws {@link TypeError} If the key is not a string.
     */
    public set(key: string, value: ValueType): void {
        if (typeof key !== 'string') {
            throw new TypeError(`key must be a string, received ${typeof key}`);
        }

        this.#MAP.set(key, value);
    }

    /**
     * Associate the given key with the given value in the map only if the key has not been set in the map.
     *
     * @param key - The key to associate with the value in the map.
     * @param value - The value to store in the map.
     * @param errorMessage - Message to log if the key already has a value.
     *
     * @returns `true` if the operation is successful, `false` if it is not.
     */
    public setIfAbsent(key: string, value: ValueType, errorMessage?: string): boolean {
        let isSet: boolean;

        if (this.#MAP.has(key)) {
            if (errorMessage) {
                console.warn(errorMessage);
            }

            isSet = false;
        } else {
            this.set(key, value);
            isSet = true;
        }

        return isSet;
    }

    /**
     * Does the map contain the given key?
     *
     * @param key - The key to check for in the map.
     *
     * @returns `true` if the map contains the given key, `false` otherwise.
     */
    public hasKey(key: string): boolean {
        return this.#MAP.has(key);
    }

    /**
     * @returns All the values of the map.
     */
    public values(): IterableIterator<ValueType> {
        return this.#MAP.values();
    }

    /**
     * @returns All the keys of the map.
     */
    public keys(): IterableIterator<string> {
        return this.#MAP.keys();
    }

    /**
     * @returns An iterator of key-value pairs for the map.
     */
    public entries(): IterableIterator<[string, ValueType]> {
        return this.#MAP.entries();
    }

    /**
     * Remove all key-value pairs from the map.
     */
    public clear(): void {
        this.#MAP.clear();
    }

    /**
     * Removes the given key from the map.
     *
     * @param key - The key to delete from the map.
     *
     * @returns `true` if the given key has been removed from the map,
     * `false` if the element does not exist.
     */
    public delete(key: string): boolean {
        return this.#MAP.delete(key);
    }
}
