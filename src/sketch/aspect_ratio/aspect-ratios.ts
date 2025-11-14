/*
 * Copyright (C) 2024-2025 brittni and the polar bear LLC.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { Discriminators } from '../../discriminator';

import { AspectRatioConfig } from './aspect-ratio-config';

/**
 * Valid keys for the {@link ASPECT_RATIOS} record.
 * Each key corresponds to a pre-saved {@link AspectRatioConfig} object.
 *
 * @since 2.0.0
 *
 * @category Aspect Ratio
 */
export enum AspectRatioName {
    /**
     * The standard aspect ratio of an Instagram photo.
     *
     * @since 2.0.0
     */
    INSTAGRAM_PHOTO = 'INSTAGRAM_PHOTO',

    /**
     * The standard aspect ratio of a Pinterest pin.
     *
     * @since 2.0.0
     */
    PINTEREST_PIN = 'PINTEREST_PIN',

    /**
     * The standard aspect ratio of a social media video (e.g. TikTok, Instagram Reels, YouTube Shorts).
     *
     * @since 2.0.0
     */
    SOCIAL_VIDEO = 'SOCIAL_VIDEO',

    /**
     * Square (1:1) aspect ratio.
     *
     * @since 2.0.0
     */
    SQUARE = 'SQUARE',

    /**
     * The aspect ratio for a photo post in TikTok.
     *
     * @since 2.0.0
     */
    TIKTOK_PHOTO = 'TIKTOK_PHOTO',

    /**
     * The ratio for a 21:9 ultrawide movie.
     *
     * @since 2.0.0
     */
    ULTRAWIDE = 'ULTRAWIDE',

    /**
     * The ratio for a 16:9 widescreen movie.
     *
     * @since 2.0.0
     */
    WIDESCREEN = 'WIDESCREEN'
}

/**
 * Pre-set {@link AspectRatioConfig} objects for easy access.
 *
 * @since 2.0.0
 *
 * @category Aspect Ratio
 */
export const ASPECT_RATIOS: Record<AspectRatioName, AspectRatioConfig> = {
    [AspectRatioName.INSTAGRAM_PHOTO]: {
        NAME: '4:5',
        WIDTH_RATIO: 4,
        HEIGHT_RATIO: 5,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.PINTEREST_PIN]: {
        NAME: '2:3',
        WIDTH_RATIO: 2,
        HEIGHT_RATIO: 3,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.SOCIAL_VIDEO]: {
        NAME: '9:16',
        WIDTH_RATIO: 9,
        HEIGHT_RATIO: 16,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.SQUARE]: {
        NAME: 'square',
        WIDTH_RATIO: 1,
        HEIGHT_RATIO: 1,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.TIKTOK_PHOTO]: {
        NAME: '3:4',
        WIDTH_RATIO: 3,
        HEIGHT_RATIO: 4,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.ULTRAWIDE]: {
        NAME: 'ultrawide (21:9)',
        WIDTH_RATIO: 64,
        HEIGHT_RATIO: 27,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    },
    [AspectRatioName.WIDESCREEN]: {
        NAME: 'widescreen (16:9)',
        WIDTH_RATIO: 16,
        HEIGHT_RATIO: 9,
        DISCRIMINATOR: Discriminators.ASPECT_RATIO_CONFIG
    }
};
