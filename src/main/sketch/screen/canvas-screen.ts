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

// TODO - CanvasScreenBuilder
// TODO - - methods to build graphics contexts and screen.
// TODO - - add a list of graphics configurations at one time.

// TODO - click event handler
// TODO - hover handler
// TODO - keyboard event handler
// TODO - keyboard mapper

// TODO - documentation
// TODO - unit tests
// TODO - release notes

import P5Lib from 'p5';

import { P5Context } from 'p5-context';

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

    public abstract drawToGraphics(graphics: P5Lib.Graphics): void;

    public activate(): void {
        this.#isActive = true;
        this.publishRedraw();
    }

    public deactivate(): void {
        this.#isActive = false;
    }

    public render(): void {
        if (this.isActive) {
            console.log(`Rendering screen: ${this.NAME}.`);
            const p5: P5Lib = P5Context.p5;
            this.drawToActiveGraphics();
            p5.imageMode(p5.CENTER);
            const canvasCenter: P5Lib.Vector = Canvas.center;
            p5.image(
                this.#GRAPHICS_HANDLER.getActiveGraphics(),
                canvasCenter.x,
                canvasCenter.y,
                Canvas.width,
                Canvas.height
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
        this.drawToGraphics(this.#GRAPHICS_HANDLER.getActiveGraphics());
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
        this.#GRAPHICS_HANDLER.getAllContexts()
            .forEach((context: GraphicsContext): void => {
                this.#saveGraphics(context, 1_000)
                    .then(
                        (filename: string): void => {
                            console.log(`Saved file: ${filename}.`);
                        },
                        (error: unknown): void => {
                            console.error(error);
                        }
                    );
            });
    }

    public publishRedraw(): void {
        this.#REDRAW_EVENT.publishRedraw();
    }

    public addRedrawListener(listener: RedrawListener): void {
        this.#REDRAW_EVENT.addListener(listener);
    }

    #getSaveCount(): number {
        return this.#saveCount++;
    }

    #buildFileName(graphicsContext: GraphicsContext): string {
        const saveCount: string = this.#getSaveCount().toString().padStart(3, '0');
        return `${this.#NAME}_${saveCount}_${graphicsContext.NAME}.png`;
    }

    async #saveGraphics(graphicsContext: GraphicsContext, timeout: number): Promise<string> {
        this.drawToGraphics(graphicsContext.GRAPHICS);
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
