/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**
 * A map of string keys to some ValueType.
 * Provides a type-safe wrapper around the native Map class for string-based keys.
 *
 * @since 2.0.0
 *
 * @category Utility
 */
export class StringMap<ValueType> {
    /**
     * The underlying map object.
     *
     * @readonly
     * @private
     */
    readonly #MAP: Map<string, ValueType>;

    /**
     * Creates a new StringMap instance.
     *
     * @param map {StringMap<ValueType> | Map<string, ValueType>} - Optional map to initialize from.
     * If provided, all entries from the given map will be copied to this new instance.
     *
     * @constructor
     *
     * @since 2.0.0
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
     * @param map {StringMap<Type> | Map<string, Type>} - The map to copy.
     *
     * @returns {StringMap<Type>} A new {@link StringMap} instance containing the same key-value pairs as the given map.
     *
     * @static
     *
     * @since 2.0.0
     */
    public static copy<Type>(map: StringMap<Type> | Map<string, Type>): StringMap<Type> {
        return new StringMap<Type>(map);
    }

    /**
     * @returns {number} The size of the map.
     *
     * @since 2.0.0
     */
    public get size(): number {
        return this.#MAP.size;
    }

    /**
     * Get the value associated with the given key in the map.
     * If the given key does not exist in the map, the method will return `undefined`.
     *
     * @param key {string} - The key of the desired value in the map.
     *
     * @returns {ValueType | undefined} The value associated with the given key, or `undefined` if the key does not exist in the map.
     *
     * @since 2.0.0
     */
    public get(key: string): ValueType | undefined {
        return this.#MAP.get(key);
    }

    /**
     * Associate the given key with the given value in the map.
     *
     * @param key {string} - The key to associate with the value in the map.
     * @param value {ValueType} - The value to store in the map.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public set(key: string, value: ValueType): void {
        this.#MAP.set(key, value);
    }

    /**
     * Associate the given key with the given value in the map only if the key has not been set in the map.
     *
     * @param key {string} - The key to associate with the value in the map.
     * @param value {ValueType} - The value to store in the map.
     * @param errorMessage {string} - Message to log if the key already has a value.
     *
     * @returns {boolean} `true` if the operation is successful, `false` if it is not.
     *
     * @since 2.0.0
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
     * @param key {string} - The key to check for in the map.
     *
     * @returns {boolean} `true` if the map contains the given key, `false` otherwise.
     *
     * @since 2.0.0
     */
    public hasKey(key: string): boolean {
        return this.#MAP.has(key);
    }

    /**
     * @returns {IterableIterator<ValueType>} All the values of the map.
     *
     * @since 2.0.0
     */
    public values(): IterableIterator<ValueType> {
        return this.#MAP.values();
    }

    /**
     * @returns {IterableIterator<string>} All the keys of the map.
     *
     * @since 2.0.0
     */
    public keys(): IterableIterator<string> {
        return this.#MAP.keys();
    }

    /**
     * @returns {IterableIterator<[string, ValueType]>} An iterator of key-value pairs for the map.
     *
     * @since 2.0.0
     */
    public entries(): IterableIterator<[string, ValueType]> {
        return this.#MAP.entries();
    }

    /**
     * Remove all key-value pairs from the map.
     *
     * @returns {void}
     *
     * @since 2.0.0
     */
    public clear(): void {
        this.#MAP.clear();
    }

    /**
     * Removes the given key from the map.
     *
     * @param key {string} - The key to delete from the map.
     *
     * @returns {boolean} `true` if the given key has been removed from the map,
     * `false` if the element does not exist.
     *
     * @since 2.0.0
     */
    public delete(key: string): boolean {
        return this.#MAP.delete(key);
    }
}
