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

import P5Lib from "p5";
import {CoordinateMapper} from "./coordinate-mapper";
import {P5Context} from "p5-context";

export interface ContainerMapperConfig {
    /**
     * minimum (x, y) coordinate of the context relative to the container.
     */
    readonly MIN_CONTAINER_POSITION: P5Lib.Vector;

    /**
     * maximum (x, y) coordinate of the context relative to the container.
     */
    readonly MAX_CONTAINER_POSITION: P5Lib.Vector;
}

export class ContainerMapper {
    /**
     * The minimum (x, y) coordinate of the context relative to the container.
     * The top-left corner of the context in the container's coordinate system.
     */
    #minContainerPosition: P5Lib.Vector;

    /**
     * The maximum (x, y) coordinate of the context relative to the container.
     * The bottom-right corner of the context in the container's coordinate system.
     */
    #maxContainerPosition: P5Lib.Vector;

    /**
     * {@link CoordinateMapper} of the context.
     */
    #contextCoordinateMapper: CoordinateMapper;

    /**
     * {@link CoordinateMapper} of the container.
     */
    #containerCoordinateMapper: CoordinateMapper;

    public constructor(config: ContainerMapperConfig) {
        this.#minContainerPosition = config.MIN_CONTAINER_POSITION;
        this.#maxContainerPosition = config.MAX_CONTAINER_POSITION;
    }

    public mapContextRatioToContainerRatioX(ratio: number) {
        const containerCoordinate: number =
            P5Context.p5.map(ratio, 0, 1,
                             this.#minContainerPosition.x, this.#maxContainerPosition.x);
        return this.#containerCoordinateMapper.mapCoordinateXToRatio(containerCoordinate);
    }

    public mapContextRatioToContainerRatioY(ratio: number) {
        const containerCoordinate: number =
            P5Context.p5.map(ratio, 0, 1,
                             this.#minContainerPosition.y, this.#maxContainerPosition.y);
        return this.#containerCoordinateMapper.mapCoordinateYToRatio(containerCoordinate);
    }
}
