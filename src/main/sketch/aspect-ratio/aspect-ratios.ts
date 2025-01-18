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

// TODO - unit tests
// TODO - release notes
import { AspectRatioConfig } from './aspect-ratio-config';

/**
 * Valid keys for the {@link ASPECT_RATIOS} record.
 * Each key corresponds to a pre-saved {@link AspectRatioConfig} object.
 *
 * @category Sketch
 * @category Sketch/Aspect Ratio
 */
export enum AspectRatioName {
    /**
     * Match the aspect ratio of the browser window.
     * The aspect ratio of the canvas will continue to match
     * the browser window until a different ratio is selected.
     */
    MATCH = 'MATCH',

    /**
     * Use the initial or current aspect ratio of the browser window.
     * This aspect ratio will only change the canvas aspect ratio one time.
     */
    INITIAL = 'INITIAL',

    /**
     * The standard aspect ratio of an Instagram photo.
     */
    INSTAGRAM_PHOTO = 'INSTAGRAM_PHOTO',

    /**
     * The standard aspect ratio of a Pinterest pin.
     */
    PINTEREST_PIN = 'PINTEREST_PIN',

    /**
     * The standard aspect ratio of a social media video
     * (e.g. TikTok, Instagram Reels, YouTube Shorts).
     */
    SOCIAL_VIDEO = 'SOCIAL_VIDEO',

    /**
     * Square (1:1) aspect ratio.
     */
    SQUARE = 'SQUARE',

    /**
     * The aspect ratio for a photo post in TikTok.
     */
    TIKTOK_PHOTO = 'TIKTOK_PHOTO',

    /**
     * The ratio for a 21:9 ultrawide movie.
     */
    ULTRAWIDE = 'ULTRAWIDE',

    /**
     * The ratio for a 16:9 widescreen movie.
     */
    WIDESCREEN = 'WIDESCREEN'
}

/**
 * Pre-set {@link AspectRatioConfig} objects for easy access.
 *
 * @category Sketch
 * @category Sketch/Aspect Ratio
 */
export const ASPECT_RATIOS: Record<AspectRatioName, AspectRatioConfig> = {
    [AspectRatioName.MATCH]: {
        NAME: 'match',
        WIDTH_RATIO: 0,
        HEIGHT_RATIO: 0
    },
    [AspectRatioName.INITIAL]: {
        NAME: 'initial',
        WIDTH_RATIO: 0,
        HEIGHT_RATIO: 0
    },
    [AspectRatioName.INSTAGRAM_PHOTO]: {
        NAME: '4:5',
        WIDTH_RATIO: 4,
        HEIGHT_RATIO: 5
    },
    [AspectRatioName.PINTEREST_PIN]: {
        NAME: '2:3',
        WIDTH_RATIO: 2,
        HEIGHT_RATIO: 3
    },
    [AspectRatioName.SOCIAL_VIDEO]: {
        NAME: '9:16',
        WIDTH_RATIO: 9,
        HEIGHT_RATIO: 16
    },
    [AspectRatioName.SQUARE]: {
        NAME: 'square',
        WIDTH_RATIO: 1,
        HEIGHT_RATIO: 1
    },
    [AspectRatioName.TIKTOK_PHOTO]: {
        NAME: '3:4',
        WIDTH_RATIO: 3,
        HEIGHT_RATIO: 4
    },
    [AspectRatioName.ULTRAWIDE]: {
        NAME: 'ultrawide (21:9)',
        WIDTH_RATIO: 64,
        HEIGHT_RATIO: 27
    },
    [AspectRatioName.WIDESCREEN]: {
        NAME: 'widescreen (16:9)',
        WIDTH_RATIO: 16,
        HEIGHT_RATIO: 9
    }
};
