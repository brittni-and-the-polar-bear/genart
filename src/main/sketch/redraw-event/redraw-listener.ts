/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
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

import { Drawable } from '../drawable';

// TODO - release notes
// TODO - docs
/**
 * @category Sketch Context
 * @category Sketch Context: Canvas
 * @category Sketch Context: Drawing
 * @category Sketch Context: Events
 */
export interface CanvasRedrawListener extends Drawable {
    // TODO - release notes
    // TODO - docs
    canvasRedraw(): void;
}
