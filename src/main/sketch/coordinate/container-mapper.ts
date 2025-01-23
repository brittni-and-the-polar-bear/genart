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

import { CoordinateRatioMapper } from './coordinate-ratio-mapper';

export interface ContainerMapperConfig {
    /**
     * minimum (x, y) coordinate of the context relative to the container.
     */
    readonly MIN_CONTAINER_POSITION: P5Lib.Vector;

    /**
     * maximum (x, y) coordinate of the context relative to the container.
     */
    readonly MAX_CONTAINER_POSITION: P5Lib.Vector;

    readonly CONTEXT_COORDINATE_MAPPER: CoordinateRatioMapper;

    readonly CONTAINER_COORDINATE_MAPPER: CoordinateRatioMapper;
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
     * {@link CoordinateRatioMapper} of the context.
     */
    #contextCoordinateMapper: CoordinateRatioMapper;

    /**
     * {@link CoordinateRatioMapper} of the container.
     */
    #containerCoordinateMapper: CoordinateRatioMapper;

    public constructor(config: ContainerMapperConfig) {
        this.#minContainerPosition = config.MIN_CONTAINER_POSITION;
        this.#maxContainerPosition = config.MAX_CONTAINER_POSITION;
        this.#contextCoordinateMapper = config.CONTEXT_COORDINATE_MAPPER;
        this.#containerCoordinateMapper = config.CONTAINER_COORDINATE_MAPPER;
    }

    public mapContextRatioXToContainerRatioX(ratio: number) {
        const containerX: number =
            P5Context.p5.map(ratio, 0, 1,
                             this.#minContainerPosition.x, this.#maxContainerPosition.x);
        return this.#containerCoordinateMapper.mapCoordinateXToRatio(containerX);
    }

    public mapContextRatioYToContainerRatioY(ratio: number) {
        const containerY: number =
            P5Context.p5.map(ratio, 0, 1,
                             this.#minContainerPosition.y, this.#maxContainerPosition.y);
        return this.#containerCoordinateMapper.mapCoordinateYToRatio(containerY);
    }

    public mapContextRatioToContainerRatio(ratioVector: P5Lib.Vector): P5Lib.Vector {
        const containerRatioX: number = this.mapContextRatioXToContainerRatioX(ratioVector.x);
        const containerRatioY: number = this.mapContextRatioYToContainerRatioY(ratioVector.y);
        return P5Context.p5.createVector(containerRatioX, containerRatioY);
    }

    public mapContextCoordinateXToContainerRatioX(x: number): number {
        const contextRatioX: number = this.#contextCoordinateMapper.mapCoordinateXToRatio(x);
        return this.mapContextRatioXToContainerRatioX(contextRatioX);
    }

    public mapContextCoordinateYToContainerRatioY(y: number): number {
        const contextRatioY: number = this.#contextCoordinateMapper.mapCoordinateYToRatio(y);
        return this.mapContextRatioYToContainerRatioY(contextRatioY);
    }

    public mapContextCoordinateToContainerRatio(coordinate: P5Lib.Vector): P5Lib.Vector {
        const containerRatioX: number = this.mapContextCoordinateXToContainerRatioX(coordinate.x);
        const containerRatioY: number = this.mapContextCoordinateYToContainerRatioY(coordinate.y);
        return P5Context.p5.createVector(containerRatioX, containerRatioY);
    }

    public mapContextCoordinateXToContainerCoordinateX(x: number): number {
        const containerRatioX: number = this.mapContextCoordinateXToContainerRatioX(x);
        return this.#containerCoordinateMapper.mapRatioToCoordinateX(containerRatioX);
    }

    public mapContextCoordinateYToContainerCoordinateY(y: number): number {
        const containerRatioY: number = this.mapContextCoordinateYToContainerRatioY(y);
        return this.#containerCoordinateMapper.mapRatioToCoordinateY(containerRatioY);
    }

    public mapContextCoordinateToContainerCoordinate(coordinate: P5Lib.Vector): P5Lib.Vector {
        const containerCoordinateX: number = this.mapContextCoordinateXToContainerCoordinateX(coordinate.x);
        const containerCoordinateY: number = this.mapContextCoordinateYToContainerCoordinateY(coordinate.y);
        return P5Context.p5.createVector(containerCoordinateX, containerCoordinateY);
    }
}
