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

import { StringMap } from 'map';

import { Palette } from '../palette';

// TODO - FIX LINK
/**
 * A map of palette names to {@link Palette} objects for all palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/all-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Color/Palette/Palettes/Collections
 * @category Color/Palette/Palettes/All
 */
export const ALL_PALETTES: StringMap<Palette> = new StringMap<Palette>();

// TODO - FIX LINK
/**
 * A map of palette names to {@link Palette} objects for gradient palettes.
 *
 * <a href="https://brittni-and-the-polar-bear.github.io/generative-art-library/palettes/gradient-palettes.html" target="_blank" rel="noopener noreferrer">See the Palettes</a>
 *
 * @category Color/Palette/Palettes/Collections
 * @category Color/Palette/Palettes/Gradient
 */
export const GRADIENT_PALETTES: StringMap<Palette> = new StringMap<Palette>();
