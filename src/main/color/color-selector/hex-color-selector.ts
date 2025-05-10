/*
 * Copyright (C) 2025 brittni and the polar bear LLC.
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

import { StringValidator } from 'string';

import { Color } from '../color';
import { ListColorSelector, ListColorSelectorConfig } from './list-color-selector';
import { ColorSelectorType } from './color-selector-type';

export interface HexColorSelectorConfig extends ListColorSelectorConfig<string> {
    /* empty */
}

export class HexColorSelector extends ListColorSelector<string> {
    public constructor(config: HexColorSelectorConfig) {
        super(config);
    }

    public override get type(): ColorSelectorType {
        return ColorSelectorType.HEX;
    }

    protected override convertColor(color: string): Color {
        if (StringValidator.isHex(color) || StringValidator.isHexWithAlpha(color)) {
            return (new Color(color));
        } else {
            return (new Color());
        }
    }
}
