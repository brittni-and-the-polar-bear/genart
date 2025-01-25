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

import { AspectRatioConfig } from '../aspect-ratio';
import { Context, ContextConfig } from '../context';

export class CanvasContext extends Context {
    // TODO - container mapper to Canvas

    public constructor(config: ContextConfig) {
        super(config);
    }

    public get minX(): number {
        return 0;
    }

    public get maxX(): number {
        return 0;
    }

    public get minY(): number {
        return 0;
    }

    public get maxY(): number {
        return 0;
    }

    public get width(): number {
        return 0;
    }

    public get height(): number {
        return 0;
    }

    public resize(): void {
    }

    protected updateAspectRatio(config: AspectRatioConfig): void {
    }

    protected updateResolution(resolution: number): void {
    }
}
