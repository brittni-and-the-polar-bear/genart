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

// import P5Lib from 'p5';

import { Discriminator } from 'discriminator';
import { P5Context } from 'p5-context';

import { ColorNames } from './color-name';
import { PaletteColor } from './palette';

import * as P5Lib from 'p5';

// TODO - documentation
// TODO - release notes
// TODO - unit tests

/**
 * Color information and functionality.
 * Colors are stored in RGBA format.
 *
 * @category Color
 */
export class Color {
    /**
     * The color's red component. Ranges in value from 0-255.
     */
    #red: number;

    /**
     * The color's green component. Ranges in value from 0-255.
     */
    #green: number;

    /**
     * The color's blue component. Ranges in value from 0-255.
     */
    #blue: number;

    /**
     * The color's alpha component. Ranges in value from 0-255.
     */
    #alpha: number; // 0-255

    /**
     * The color's name. Retrieved from a {@link PaletteColor} or {@link ColorNames}.
     */
    #name: string | null;

    // TODO - color lerp functionality
    // #originalLerpColor: Color;
    // #endLerpColor: Color;
    // #componentLerp: boolean;
    // #lerpPercentage: { red: number, green: number, blue: number, alpha: number };
    // #lerpSteps: number;
    // #lerpInitiated: boolean;
    // #lerpComplete: boolean;
    // #lerpPaused: boolean;

    /**
     * @param color - A p5.js Color, {@link Color}, or {@link PaletteColor} object.<br/>
     *
     * If given a p5.js Color, the color's RGBA components
     * will become the values of {@link red}, {@link green}, {@link blue}, and {@link alpha}.<br/>
     *
     * If given a {@link Color}, the given color's
     * {@link red}, {@link green}, {@link blue}, {@link alpha}, and {@link name}
     * properties will become the new values of this color's respective properties.<br/>
     *
     * If given a {@link PaletteColor}, the color's
     * {@link PaletteColor.RGB | RGB} and {@link PaletteColor.NAME | NAME } values
     * will be used to build the color.
     */
    public constructor(
        color?: P5Lib.Color | Color | PaletteColor | string
    );
    public constructor(
        red: number,
        green: number,
        blue: number,
        alpha?: number
    );
    public constructor(
        arg1?: P5Lib.Color | Color | PaletteColor | number | string,
        arg2?: number,
        arg3?: number,
        arg4?: number
    ) {
        this.#red = 0;
        this.#green = 0;
        this.#blue = 0;
        this.#alpha = 255;
        this.#name = 'black';

        if (((arg1 && (typeof arg1 === 'number')) || (arg1 === 0)) &&
            (arg2 || (arg2 === 0)) &&
            (arg3 || (arg3 === 0))) {
            this.red = arg1;
            this.green = arg2;
            this.blue = arg3;

            if (arg4 || arg4 === 0) {
                this.alpha = arg4;
            }

            this.#name = null;
        } else if (arg1) {
            if (arg1 instanceof P5Lib.Color) {
                this.#setColorValues(arg1);
                this.#name = null;
            } else if (arg1 instanceof Color) {
                this.#setColorValues(arg1);
            } else if (Discriminator.isPaletteColor(arg1)) {
                if (arg1.RGB) {
                    this.red = arg1.RGB.R;
                    this.green = arg1.RGB.G;
                    this.blue = arg1.RGB.B;
                } else {
                    // TODO - unit test setting color from HEX value
                    const c: P5Lib.Color = P5Context.p5.color(arg1.HEX);
                    this.#setColorValues(c);
                }

                this.#name = arg1.NAME;
            } else if (typeof arg1 === 'string') {
                // TODO - unit test HEX string argument
                // TODO - unit test RGB string argument
                // TODO - unit test HEX with RGBA argument
                const c: P5Lib.Color = P5Context.p5.color(arg1);
                this.#setColorValues(c);
                this.#name = null;
            }
        }

        // this.#originalLerpColor = Color.copy(this);
        // this.#endLerpColor = Color.copy(this);
        // this.#componentLerp = false;
        // this.#lerpPercentage = { red: 0, green: 0, blue: 0, alpha: 0 };
        // this.#lerpSteps = 0;
        // this.#lerpInitiated = false;
        // this.#lerpComplete = false;
        // this.#lerpPaused = false;
    }

    /**
     * Copy the given {@link Color} object and return a new, distinct object.
     *
     * @param color -
     */
    public static copy(color: Color): Color {
        return new Color(color);
    }

    /**
     * @param h - Some number between 0 and 360.
     * @param s - Some number between 0 and 100.
     * @param l - Some number between 0 and 100.
     * @param a - Some number between 0 and 1.
     *
     * @returns A p5.js Color object matching the color specified
     * by the given {@link h}{@link s}{@link l}{@link a} values.
     */
    public static getHSLColor(h: number, s: number, l: number, a?: number): P5Lib.Color {
        // const p5: P5Lib = P5Context.p5;
        let color: P5Lib.Color;
        h = Math.floor(p5.constrain(h, 0, 360));
        s = Math.floor(p5.constrain(s, 0, 100));
        l = Math.floor(p5.constrain(l, 0, 100));

        if (a) {
            a = P5Lib.constrain(a, 0, 1);
            color = p5.color(`hsla(${h.toString()}, ${s.toString()}%, ${l.toString()}%, ${a.toString()})`);
        } else {
            color = p5.color(`hsl(${h.toString()}, ${s.toString()}%, ${l.toString()}%)`);
        }

        return color;
    }

    /**
     * @param h - Some number between 0 and 360.
     * @param s - Some number between 0 and 100.
     * @param l - Some number between 0 and 100.
     * @param a - Some number between 0 and 1.
     *
     * @returns A p5.js Color object matching the color specified
     * by the given {@link h}{@link s}{@link l}{@link a} values.
     */
    public static getHSLAColor(h: number, s: number, l: number, a: number): P5Lib.Color {
        return Color.getHSLColor(h, s, l, a);
    }

    /**
     * @returns A p5.js Color object matching the current
     * {@link red}, {@link green}, {@link blue}, and {@link alpha} values.
     */
    public get color(): P5Lib.Color {
        const p5: P5Lib = P5Context.p5;
        p5.colorMode(p5.RGB);
        return p5.color(this.red, this.green, this.blue, this.alpha);
    }

    /**
     * Set the current color.
     *
     * @param c - A p5.js Color object.
     * The color's RGBA components will become the new values of
     * {@link red}, {@link green}, {@link blue}, and {@link alpha}.
     */
    public set color(c: P5Lib.Color) {
        this.#setColorValues(c);
        this.#name = null;
    }

    /**
     * @returns The current red component value (0-255).
     */
    public get red(): number {
        return this.#red;
    }

    /**
     * Set the value of the {@link red} component.
     *
     * @param r -
     */
    public set red(r: number) {
        const p5: P5Lib = P5Context.p5;
        this.#red = Math.floor(p5.constrain(r, 0, 255));
        this.#name = null;
    }

    /**
     * @returns The current green component value (0-255).
     */
    public get green(): number {
        return this.#green;
    }

    /**
     * Set the value of the {@link green} component.<br/>
     *
     * @param g -
     */
    public set green(g: number) {
        const p5: P5Lib = P5Context.p5;
        this.#green = Math.floor(p5.constrain(g, 0, 255));
        this.#name = null;
    }

    /**
     * @returns The current blue component value (0-255).
     */
    public get blue(): number {
        return this.#blue;
    }

    /**
     * Set the value of the {@link blue} component.
     *
     * @param b -
     */
    public set blue(b: number) {
        const p5: P5Lib = P5Context.p5;
        this.#blue = Math.floor(p5.constrain(b, 0, 255));
        this.#name = null;
    }

    /**
     * @returns The current alpha component value (0-255).
     */
    public get alpha(): number {
        return this.#alpha;
    }

    /**
     * Set the value of the {@link alpha} component.
     *
     * @param a -
     */
    public set alpha(a: number) {
        const p5: P5Lib = P5Context.p5;
        this.#alpha = Math.floor(p5.constrain(a, 0, 255));
    }

    /**
     * @returns The name of the color.
     */
    public get name(): string {
        if (!this.#name) {
            this.#name = 'UNKNOWN';
            const name: string | undefined = ColorNames.getColorName(this.hex);

            if (name) {
                this.#name = name;
            }
        }

        return this.#name;
    }

    /**
     * @returns The hex color string for the RGB
     * ({@link red}, {@link green}, {@link blue})
     * components of the color (#RRGGBB).
     */
    public get hex(): string {
        return this.getRGBHex(false);
    }

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     *
     * @param withAlpha - if `true`, an alpha component will be included in the hex
     * string (#RRGGBBAA).<br/>
     * If `false`, only the RGB components will be included (#RRGGBB).
     */
    public getRGBHex(withAlpha: boolean): string {
        let hex: string = '#';
        hex = hex + this.red.toString(16).padStart(2, '0');
        hex = hex + this.green.toString(16).padStart(2, '0');
        hex = hex + this.blue.toString(16).padStart(2, '0');

        if (withAlpha) {
            hex = hex + this.alpha.toString(16).padStart(2, '0');
        }

        return hex.toUpperCase();
    }

    /**
     * The hex color string for the RGBA
     * ({@link red}, {@link green}, {@link blue}, {@link alpha})
     * components of the color.
     */
    public getRGBAHex(): string {
        return this.getRGBHex(true);
    }

    // public beginLerp(finalColor: Color, steps: number, componentLerp: boolean): void {
    //
    // }
    //
    // public pauseLerp(): void {
    //
    // }
    //
    // public resumeLerp(): void {
    //
    // }
    //
    // public endLerp(): void {
    //
    // }
    //
    // public resetLerp(): void {
    //
    // }
    //
    // public isLerping(): boolean {
    //     return false;
    // }

    /**
     * Set the color values.
     *
     * @param color - A p5.js Color or {@link Color} object.<br/>
     *
     * If given a p5.js Color, the color's RGBA components will become the new values of
     * {@link red}, {@link green}, {@link blue}, and {@link alpha}.<br/>
     *
     * If given a {@link Color} object, the given color's
     * {@link red}, {@link green}, {@link blue}, {@link alpha}, and {@link name}
     * properties will become the new values of this color's respective
     * properties.
     */
    #setColorValues(color: P5Lib.Color | Color): void {
        if (color instanceof P5Lib.Color) {
            const p5: P5Lib = P5Context.p5;
            this.red = p5.red(color);
            this.green = p5.green(color);
            this.blue = p5.blue(color);
            this.alpha = p5.alpha(color);
            this.#name = null;
        } else {
            this.red = color.red;
            this.green = color.green;
            this.blue = color.blue;
            this.alpha = color.alpha;
            this.#name = color.name;
        }
    }

    // #lerp(): void {
    //
    // }
}
