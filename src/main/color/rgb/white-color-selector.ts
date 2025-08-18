/*
 * Copyright (C) 2022-2025 brittni and the polar bear LLC.
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

import { Range } from 'math';
import { Random } from 'random';

import { Color } from '../color';

import { RGBColorSelector } from './rgb-color-selector';

// TODO - test gray color range
// TODO - add alpha range parameter
// TODO - release notes
// TODO - documentation
// TODO - unit tests
// - all color selector names should be unique

// TODO - update config for RGB Range OR GRAY Range

export class WhiteColorSelector extends RGBColorSelector {
    public constructor() {
        super({
            NAME: 'white-rgb-color-selector',
            RED_RANGE: new Range(255, 255),
            GREEN_RANGE: new Range(255, 255),
            BLUE_RANGE: new Range(255, 255)
        });
    }

    public override getColor(): Color {
        const gray: number = Random.randomInt(100, 255);
        return new Color(gray, gray, gray);
    }
}
