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

import { P5Context } from 'p5-context';

// TODO - review unit tests for P5Context

describe('P5Context tests', (): void => {
    afterEach((): void => {
        P5Context.reset();
    });

    afterAll((): void => {
        P5Context.reset();
    });

    test('P5Context.p5 default context', (): void => {
        expect(P5Context.p5).toBeTruthy();
        expect(P5Context.p5.width).toBe(0);
        expect(P5Context.p5.height).toBe(0);
        expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    });

    test('P5Context.p5', (): void => {
        expect(P5Context.p5).toBeTruthy();
        const p5: P5Lib = P5Context.p5;
        p5.setup = (): void => {
            p5.createCanvas(250, 250);
            p5.noLoop();
        };

        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(255, 255, 0)).toBeTruthy();
    });

    test('P5Context.reset()', (): void => {
        expect(P5Context.p5).toBeTruthy();
        const p5: P5Lib = P5Context.p5;
        p5.setup = (): void => {
            p5.createCanvas(250, 250);
            p5.noLoop();
        };

        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(255, 0, 255)).toBeTruthy();

        P5Context.reset();

        const otherP5: P5Lib = P5Context.p5;
        otherP5.setup = (): void => {
            otherP5.createCanvas(250, 250);
            otherP5.noLoop();
        };

        expect(P5Context.p5).toBe(otherP5);
        expect(P5Context.p5).not.toBe(p5);
        expect(P5Context.p5.color(0, 175, 255)).toBeTruthy();
    });
});
