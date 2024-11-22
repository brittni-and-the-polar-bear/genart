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

import P5Lib from 'p5';

import { Color } from 'color';
import { ColorContrastTester, ContrastFontSize, ContrastStandard } from 'color-contrast';
import { PC_0437F1, PC_0FFF4F, PC_121212, PC_FF6BB5 } from 'palette-colors';
import { P5Context } from 'sketch-context';

describe('ColorContrastTester tests', (): void => {
    const p5: P5Lib = P5Context.p5;

    test.each([
        {
            colorA: new Color(PC_0437F1),
            colorB: new Color(PC_0437F1),
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: new Color(PC_0437F1),
            colorB: new Color(PC_0FFF4F),
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: new Color(PC_0437F1),
            colorB: new Color(PC_121212),
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: new Color(PC_FF6BB5),
            colorB: new Color(PC_121212),
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        },
        {
            colorA: new Color(p5.color('#61CE51')),
            colorB: new Color(p5.color('#A02DAE')),
            AA_normal: false,
            AA_large: true,
            AAA_normal: false,
            AAA_large: false
        }
    ])('$# ColorContrastTester.meetsContrastStandard()',
        ({ colorA,
            colorB,
            AA_normal,
            AA_large,
            AAA_normal,
            AAA_large }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );

    test.each([
        {
            colorA: PC_0437F1,
            colorB: PC_0437F1,
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: PC_0437F1,
            colorB: PC_0FFF4F,
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: PC_0437F1,
            colorB: PC_121212,
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: PC_FF6BB5,
            colorB: PC_121212,
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        }
    ])('$# ColorContrastTester.meetsContrastStandard() - PaletteColors: $colorA.HEX and $colorB.HEX',
        ({ colorA,
            colorB,
            AA_normal,
            AA_large,
            AAA_normal,
            AAA_large }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );

    test.each([
        {
            colorA: '#0437F2',
            colorB: '#0437F2',
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: '#0437F2',
            colorB: '#0FFF4F',
            AA_normal: true,
            AA_large: true,
            AAA_normal: false,
            AAA_large: true
        },
        {
            colorA: '#0437F2',
            colorB: '#121212',
            AA_normal: false,
            AA_large: false,
            AAA_normal: false,
            AAA_large: false
        },
        {
            colorA: '#FF6BB5',
            colorB: '#121212',
            AA_normal: true,
            AA_large: true,
            AAA_normal: true,
            AAA_large: true
        },
        {
            colorA: '#61CE51',
            colorB: '#A02DAE',
            AA_normal: false,
            AA_large: true,
            AAA_normal: false,
            AAA_large: false
        }
    ])('$# ColorContrastTester.meetsContrastStandard($colorA, $colorB)',
        ({ colorA,
            colorB,
            AA_normal,
            AA_large,
            AAA_normal,
            AAA_large }): void => {
            // AB Contrasts
            const contrast_ab_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB
                );
            const contrast_ab_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ab_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ab_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorA,
                    colorB,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            // BA Contrasts
            const contrast_ba_default: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA
                );
            const contrast_ba_AA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AA,
                    ContrastFontSize.LARGE
                );
            const contrast_ba_AAA_normal: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.NORMAL
                );
            const contrast_ba_AAA_large: boolean =
                ColorContrastTester.meetsContrastStandard(
                    colorB,
                    colorA,
                    ContrastStandard.AAA,
                    ContrastFontSize.LARGE
                );

            expect(contrast_ab_default).toBe(AA_normal);
            expect(contrast_ba_default).toBe(AA_normal);

            expect(contrast_ab_AA_normal).toBe(AA_normal);
            expect(contrast_ba_AA_normal).toBe(AA_normal);

            expect(contrast_ab_AA_large).toBe(AA_large);
            expect(contrast_ba_AA_large).toBe(AA_large);

            expect(contrast_ab_AAA_normal).toBe(AAA_normal);
            expect(contrast_ba_AAA_normal).toBe(AAA_normal);

            expect(contrast_ab_AAA_large).toBe(AAA_large);
            expect(contrast_ba_AAA_large).toBe(AAA_large);
        }
    );
});
