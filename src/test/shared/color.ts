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

import P5Lib from 'p5';

import { Color, ColorSelector, ColorSelectorType } from 'color';
import { P5Context } from 'p5-context';

import { checkNumberWithinAmount } from './math';

export const red: Color = new Color(P5Context.p5.color(255, 0, 0));
export const green: Color = new Color(P5Context.p5.color(0, 255, 0));
export const blue: Color = new Color(P5Context.p5.color(0, 0, 255));
export const cyan: Color = new Color(P5Context.p5.color(0, 255, 255));
export const magenta: Color = new Color(P5Context.p5.color(255, 0, 255));
export const yellow: Color = new Color(P5Context.p5.color(255, 255, 0));

export interface ColorComponents {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a?: number;
}

export class SampleSelector extends ColorSelector {
    constructor(colors: Color[], randomOrder?: boolean) {
        super('sample color selector', randomOrder);
        for (const c of colors) {
            this.addColorChoice(c);
        }

        this.COLOR_NAMES.add('name1');
        this.COLOR_NAMES.add('name2');
        this.COLOR_NAMES.add('name3');
    }

    getColor(): Color {
        return this.selectColorFromChoices();
    }

    get type(): ColorSelectorType {
        return ColorSelectorType.PALETTE;
    }
}

export function colorToColorComponents(c: Color): ColorComponents {
    return { r: c.red, g: c.green, b: c.blue, a: c.alpha };
}

export function p5ColorToColorComponents(color: P5Lib.Color): ColorComponents {
    const p5: P5Lib = P5Context.p5;
    return {
        r: Math.floor(p5.red(color)),
        g: Math.floor(p5.green(color)),
        b: Math.floor(p5.blue(color)),
        a: Math.floor(p5.alpha(color))
    };
}

export function checkForEquivalentComponents(actual: ColorComponents, expected: ColorComponents): void {
    checkNumberWithinAmount(actual.r, expected.r, 1);
    checkNumberWithinAmount(actual.g, expected.g, 1);
    checkNumberWithinAmount(actual.b, expected.b, 1);
}
