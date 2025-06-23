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

import { Discriminable, Discriminators } from 'discriminator';

/**
 * A structure for specifying weights of different values
 * when selecting elements in an uneven distribution.
 * The greater the weight, the more likely the element will be chosen.
 *
 * @since 2.0.0
 *
 * @category Random
 */
export interface WeightedElement<Type> extends Discriminable {
    /**
     * The value returned if this element is selected.
     *
     * @since 2.0.0
     */
    readonly VALUE: Type;

    /**
     * The weight associated with this element.
     * The greater the weight, the more likely the element will be selected.
     *
     * @since 2.0.0
     */
    readonly WEIGHT: number;

    /**
     * @inheritDoc
     */
    readonly DISCRIMINATOR: Discriminators.WEIGHTED_ELEMENT;
}
