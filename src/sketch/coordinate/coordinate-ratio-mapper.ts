/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
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

export class CoordinateRatioMapper {
    #width: number;
    #height: number;
    #isWebGL: boolean;

    public constructor();
    public constructor(width: number, height: number, isWebGL: boolean);
    public constructor(width?: number, height?: number, isWebGL?: boolean) {
        this.#width = width ?? 720;
        this.#height = height ?? 720;
        this.#isWebGL = isWebGL ?? false;
    }

    public get width(): number {
        return this.#width;
    }

    public set width(width: number) {
        this.#width = width;
    }

    public get height(): number {
        return this.#height;
    }

    public set height(height: number) {
        this.#height = height;
    }

    public get isWebGL(): boolean {
        return this.#isWebGL;
    }

    public set isWebGL(isWebGL: boolean) {
        this.#isWebGL = isWebGL;
    }
}
