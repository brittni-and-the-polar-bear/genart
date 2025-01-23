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

    public mapContextRatioToContainerCoordinateX(contextRatioX: number): number {
        return P5Context.p5.map(contextRatioX, 0, 1, this.#minContainerPosition.x, this.#maxContainerPosition.x);
    }

    public mapContextRatioToContainerCoordinateY(contextRatioY: number): number {
        return P5Context.p5.map(contextRatioY, 0, 1, this.#minContainerPosition.y, this.#maxContainerPosition.y);
    }

    public mapContextRatioToContainerCoordinate(contextRatioVector: P5Lib.Vector): P5Lib.Vector {
        const containerX: number = this.mapContextRatioToContainerCoordinateX(contextRatioVector.x);
        const containerY: number = this.mapContextRatioToContainerCoordinateY(contextRatioVector.y);
        return P5Context.p5.createVector(containerX, containerY);
    }

    public mapContextRatioToContainerRatioX(contextRatioX: number) {
        const containerX: number = this.mapContextRatioToContainerCoordinateX(contextRatioX);
        return this.#containerCoordinateMapper.mapCoordinateXToRatio(containerX);
    }

    public mapContextRatioToContainerRatioY(contextRatioY: number) {
        const containerY: number = this.mapContextRatioToContainerCoordinateY(contextRatioY);
        return this.#containerCoordinateMapper.mapCoordinateYToRatio(containerY);
    }

    public mapContextRatioToContainerRatio(contextRatioVector: P5Lib.Vector): P5Lib.Vector {
        const containerRatioX: number = this.mapContextRatioToContainerRatioX(contextRatioVector.x);
        const containerRatioY: number = this.mapContextRatioToContainerRatioY(contextRatioVector.y);
        return P5Context.p5.createVector(containerRatioX, containerRatioY);
    }

    public mapContextCoordinateToContainerRatioX(contextX: number): number {
        const contextRatioX: number = this.#contextCoordinateMapper.mapCoordinateXToRatio(contextX);
        return this.mapContextRatioToContainerRatioX(contextRatioX);
    }

    public mapContextCoordinateToContainerRatioY(contextY: number): number {
        const contextRatioY: number = this.#contextCoordinateMapper.mapCoordinateYToRatio(contextY);
        return this.mapContextRatioToContainerRatioY(contextRatioY);
    }

    public mapContextCoordinateToContainerRatio(contextVector: P5Lib.Vector): P5Lib.Vector {
        const containerRatioX: number = this.mapContextCoordinateToContainerRatioX(contextVector.x);
        const containerRatioY: number = this.mapContextCoordinateToContainerRatioY(contextVector.y);
        return P5Context.p5.createVector(containerRatioX, containerRatioY);
    }

    public mapContextCoordinateToContainerCoordinateX(contextX: number): number {
        const containerRatioX: number = this.mapContextCoordinateToContainerRatioX(contextX);
        return this.#containerCoordinateMapper.mapRatioToCoordinateX(containerRatioX);
    }

    public mapContextCoordinateToContainerCoordinateY(contextY: number): number {
        const containerRatioY: number = this.mapContextCoordinateToContainerRatioY(contextY);
        return this.#containerCoordinateMapper.mapRatioToCoordinateY(containerRatioY);
    }

    public mapContextCoordinateToContainerCoordinate(contextCoordinate: P5Lib.Vector): P5Lib.Vector {
        const containerCoordinateX: number = this.mapContextCoordinateToContainerCoordinateX(contextCoordinate.x);
        const containerCoordinateY: number = this.mapContextCoordinateToContainerCoordinateY(contextCoordinate.y);
        return P5Context.p5.createVector(containerCoordinateX, containerCoordinateY);
    }

    public mapContainerCoordinateToContextRatioX(containerX: number): number {
        return P5Context.p5.map(containerX, this.#minContainerPosition.x, this.#maxContainerPosition.x, 0, 1);
    }

    public mapContainerCoordinateToContextRatioY(containerY: number): number {
        return P5Context.p5.map(containerY, this.#minContainerPosition.y, this.#maxContainerPosition.y, 0, 1);
    }

    public mapContainerCoordinateToContextRatio(containerCoordinate: P5Lib.Vector): P5Lib.Vector {
        const contextRatioX: number = this.mapContainerCoordinateToContextRatioX(containerCoordinate.x);
        const contextRatioY: number = this.mapContainerCoordinateToContextRatioY(containerCoordinate.y);
        return P5Context.p5.createVector(contextRatioX, contextRatioY);
    }
}
