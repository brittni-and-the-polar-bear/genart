/*
 * Copyright (C) 2024 brittni and the polar bear LLC.
 *
 * This file is a part of brittni and the polar bear's generative art library,
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

import { P5Context } from '../p5-context';
import { CoordinateMapper } from '../canvas';

// TODO - release notes
/**
 * The MouseMapper will map the current position of the mouse to
 * corresponding locations on the canvas.
 *
 * @category Sketch Context
 * @category Sketch Context: Mouse
 */
export class MouseMapper {
    // TODO - release notes
    /**
     * The current mouseX position.
     */
    public static get mouseX(): number {
        return MouseMapper.mapMouseXToCanvas(P5Context.p5.mouseX);
    }

    // TODO - release notes
    /**
     * The current mouseY position.
     */
    public static get mouseY(): number {
        return MouseMapper.mapMouseYToCanvas(P5Context.p5.mouseY);
    }

    // TODO - release notes
    /**
     * The current ratio value of the mouseX position,
     * where the left edge of the canvas maps to 0,
     * and the right edge of the canvas maps to 1.
     */
    public static get mouseXRatio(): number {
        return MouseMapper.mapMouseXToRatio(P5Context.p5.mouseX);
    }

    // TODO - release notes
    /**
     * The current ratio value of the mouseY position,
     * where the top edge of the canvas maps to 0,
     * and the bottom edge of the canvas maps to 1.
     */
    public static get mouseYRatio(): number {
        return MouseMapper.mapMouseYToRatio(P5Context.p5.mouseY);
    }

    // TODO - release notes
    /**
     * Map the provided x-axis mouse position to the corresponding value
     * on the scale of {@link CoordinateMapper.minX} to
     * {@link CoordinateMapper.maxX}.
     *
     * @param mouseX
     */
    public static mapMouseXToCanvas(mouseX: number): number {
        const p5: P5Lib = P5Context.p5;
        return p5.map(mouseX, 0, p5.width, CoordinateMapper.minX, CoordinateMapper.maxX);
    }

    // TODO - documentation
    // TODO - release notes
    public static mapMouseYToCanvas(mouseY: number): number {
        const p5: P5Lib = P5Context.p5;
        return p5.map(mouseY, 0, p5.height, CoordinateMapper.minY, CoordinateMapper.maxY);
    }

    // TODO - documentation
    // TODO - release notes
    public static mapMouseXToRatio(mouseX: number): number {
        const p5: P5Lib = P5Context.p5;
        return p5.map(mouseX, 0, p5.width, 0, 1);
    }

    // TODO - documentation
    // TODO - release notes
    public static mapMouseYToRatio(mouseY: number): number {
        const p5: P5Lib = P5Context.p5;
        return p5.map(mouseY, 0, p5.height, 0, 1);
    }
}
