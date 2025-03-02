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

import P5Lib from 'p5';

import { P5Context } from 'p5-context';
import { ASPECT_RATIOS, Canvas } from 'sketch';

describe('Canvas tests', (): void => {
    beforeAll(async (): Promise<void> => {
        const p5: P5Lib = P5Context.p5;
        const size: number = 1080;

        p5.setup = (): void => {
            Canvas.buildCanvas(ASPECT_RATIOS.SQUARE, size, p5.P2D, 'test-canvas', false, true);
        };

        await new Promise<void>((f: (value: void | PromiseLike<void>) => void): void => {
            setTimeout(f, 3000);
        });
    });

    test('Canvas.buildCanvas', (): void => {
        expect(P5Context.p5.width).toBe(1080);
        expect(P5Context.p5.height).toBe(1080);
    });
});
