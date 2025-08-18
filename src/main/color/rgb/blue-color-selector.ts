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

import { RGBColorSelector } from './rgb-color-selector';

// TODO - release notes
// TODO - documentation
// TODO - unit tests
// - all color selector names should be unique

export class BlueColorSelector extends RGBColorSelector {
    public constructor() {
        super({
            NAME: 'blue-rgb-color-selector',
            RED_RANGE: new Range(0, 85),
            GREEN_RANGE: new Range(0, 85),
            BLUE_RANGE: new Range(100, 255)
        });
    }
}
