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

// TODO - click event handler
// TODO - hover handler
// TODO - keyboard event handler
// TODO - keyboard mapper

// TODO - documentation
// TODO - unit tests
// TODO - release notes

import P5Lib from 'p5';

import { P5Context } from 'p5-context';

import { AspectRatio } from '../aspect-ratio';
import { Canvas } from '../canvas';
import { GraphicsContext, GraphicsContextHandler } from '../graphics';
import { RedrawEvent, RedrawListener } from '../redraw-event';

export interface CanvasScreenConfig {
    readonly NAME: string;
    readonly ACTIVE_GRAPHICS: GraphicsContext;
    readonly OTHER_GRAPHICS?: GraphicsContext[];
}

/**
 * @category Sketch
 * @category Sketch / Screen
 */
export abstract class CanvasScreen {
    readonly #REDRAW_EVENT: RedrawEvent = new RedrawEvent();
    readonly #GRAPHICS_HANDLER: GraphicsContextHandler;
    readonly #NAME: string;

    #isActive: boolean = false;
    #saveCount: number = 0;

    protected constructor(config: CanvasScreenConfig) {
        this.#NAME = config.NAME;
        this.#GRAPHICS_HANDLER = new GraphicsContextHandler(config.ACTIVE_GRAPHICS, config.OTHER_GRAPHICS);
    }

    public get isActive(): boolean {
        return this.#isActive;
    }

    public get NAME(): string {
        return this.#NAME;
    }

    public get minX(): number {
        return this.GRAPHICS_HANDLER.getActiveContext().coordinateMapper.minX;
    }

    public get minY(): number {
        return this.GRAPHICS_HANDLER.getActiveContext().coordinateMapper.minY;
    }

    public get maxX(): number {
        return this.GRAPHICS_HANDLER.getActiveContext().coordinateMapper.maxX;
    }

    public get maxY(): number {
        return this.GRAPHICS_HANDLER.getActiveContext().coordinateMapper.maxY;
    }

    public abstract drawToGraphics(context: GraphicsContext): void;

    public activate(): void {
        this.#isActive = true;
        this.publishRedraw();
    }

    public deactivate(): void {
        this.#isActive = false;
    }

    public render(): void {
        if (this.isActive) {
            const p5: P5Lib = P5Context.p5;
            this.drawToActiveGraphics();
            p5.imageMode(p5.CENTER);
            const canvasCenter: P5Lib.Vector = Canvas.center;
            const { width, height } = this.#calculateGraphicsDimensions();

            p5.image(
                this.#GRAPHICS_HANDLER.getActiveGraphics(),
                canvasCenter.x,
                canvasCenter.y,
                width,
                height
            );
        }
    }

    public mousePressed(): void {
        /* empty */
    }

    public keyPressed(): void {
        /* empty */
    }

    public drawToActiveGraphics(): void {
        this.drawToGraphics(this.#GRAPHICS_HANDLER.getActiveContext());
    }

    public saveActiveGraphics(): void {
        this.#saveGraphics(this.#GRAPHICS_HANDLER.getActiveContext(), 1_000)
            .then(
                (filename: string): void => {
                    console.log(`Saved file: ${filename}.`);
                },
                (error: unknown): void => {
                    console.error(error);
                }
            );
    }

    public saveAllGraphics(): void {
        this.#saveAllGraphics()
            .then(
                (): void => {
                    console.log('All files saved.');
                },
                (error: unknown): void => {
                    console.error(error);
                });
    }

    public publishRedraw(): void {
        this.#REDRAW_EVENT.publishRedraw(this.#GRAPHICS_HANDLER.getActiveContext());
    }

    public addRedrawListener(listener: RedrawListener): void {
        this.#REDRAW_EVENT.addListener(listener);
    }

    protected get GRAPHICS_HANDLER(): GraphicsContextHandler {
        return this.#GRAPHICS_HANDLER;
    }

    #calculateGraphicsDimensions(): { width: number; height: number; } {
        const graphicsContext: GraphicsContext = this.#GRAPHICS_HANDLER.getActiveContext();
        const graphicsRatio: AspectRatio = graphicsContext.aspectRatio;

        let width: number = graphicsRatio.getWidth(Canvas.resolution, true);
        let height: number = graphicsRatio.getHeight(Canvas.resolution, true);

        if (width > Canvas.width) {
            width = graphicsRatio.getWidth(Canvas.width, true);
            height = graphicsRatio.getHeight(Canvas.width, true);
        }

        if (height > Canvas.height) {
            width = graphicsRatio.getWidth(Canvas.height, true);
            height = graphicsRatio.getHeight(Canvas.height, true);
        }

        return { width: width, height: height };
    }

    #getSaveCount(): number {
        return this.#saveCount++;
    }

    #buildFileName(graphicsContext: GraphicsContext): string {
        const saveCount: string = this.#getSaveCount().toString().padStart(3, '0');
        return `${this.#NAME}_${saveCount}_${graphicsContext.NAME}.png`;
    }

    async #saveAllGraphics(): Promise<void> {
        for (const context of this.#GRAPHICS_HANDLER.getAllContexts()) {
            await this.#saveGraphics(context, 1_000)
                .then(
                    (filename: string): void => {
                        console.log(`Saved file: ${filename}.`);
                    },
                    (error: unknown): void => {
                        console.error(error);
                    });
        }
    }

    async #saveGraphics(graphicsContext: GraphicsContext, timeout: number): Promise<string> {
        this.drawToGraphics(graphicsContext);
        await this.#timeout(timeout);
        const filename: string = this.#buildFileName(graphicsContext);
        P5Context.p5.save(graphicsContext.GRAPHICS, filename);
        await this.#timeout(timeout);
        return filename;
    }

    async #timeout(milliseconds: number): Promise<void> {
        await new Promise<void>((f: (value: void | PromiseLike<void>) => void): void => {
            setTimeout(f, milliseconds);
        });
    }
}
