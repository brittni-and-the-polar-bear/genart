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

describe('P5Context tests', (): void => {
    afterEach((): void => {
        P5Context.reset();
    });

    test('P5Context.p5 default context', (): void => {
        expect(P5Context.p5).toBeTruthy();
        expect(P5Context.p5.width).toBe(0);
        expect(P5Context.p5.height).toBe(0);
        expect(P5Context.p5.color(255, 0, 0)).toBeTruthy();
    });

    test('P5Context.initialize()', (): void => {
        expect(P5Context.p5).toBeTruthy();
        const p5: P5Lib = new P5Lib((p: P5Lib): void => {
            p.setup = (): void => {
                p.createCanvas(250, 250);
                p.noLoop();
            };
        });
        P5Context.initialize(p5);
        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(255, 255, 0)).toBeTruthy();
    });

    test('P5Context.p5 singleton', (): void => {
        expect(P5Context.p5).toBeTruthy();
        const p5: P5Lib = new P5Lib((p: P5Lib): void => {
            p.setup = (): void => {
                p.createCanvas(250, 250);
                p.noLoop();
            };
        });
        P5Context.initialize(p5);
        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(255, 175, 255)).toBeTruthy();

        const otherP5: P5Lib = new P5Lib((p: P5Lib): void => {
            p.setup = (): void => {
                p.createCanvas(500, 500);
                p.noLoop();
            };
        });
        P5Context.initialize(otherP5);
        expect(P5Context.p5).not.toBe(otherP5);
        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(175, 175, 255)).toBeTruthy();
    });

    test('P5Context.reset()', (): void => {
        expect(P5Context.p5).toBeTruthy();
        const p5: P5Lib = new P5Lib((p: P5Lib): void => {
            p.setup = (): void => {
                p.createCanvas(250, 250);
                p.noLoop();
            };
        });
        P5Context.initialize(p5);
        expect(P5Context.p5).toBe(p5);
        expect(P5Context.p5.color(255, 0, 255)).toBeTruthy();

        P5Context.reset();

        const otherP5: P5Lib = new P5Lib((p: P5Lib): void => {
            p.setup = (): void => {
                p.createCanvas(500, 500);
                p.noLoop();
            };
        });
        P5Context.initialize(otherP5);
        expect(P5Context.p5).toBe(otherP5);
        expect(P5Context.p5).not.toBe(p5);
        expect(P5Context.p5.color(0, 175, 255)).toBeTruthy();
    });
});
