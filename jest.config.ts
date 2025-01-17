/*
 * Copyright (C) 2023-2025 brittni and the polar bear LLC.
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

import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
    collectCoverage: true,
    coverageDirectory: './out/tests-coverage',
    coverageReporters: ['text', 'lcov', 'json', 'json-summary'],
    errorOnDeprecated: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'mjs', 'cjs', 'json', 'node'],
    moduleNameMapper: {
        // '^color$': '<rootDir>/src/main/color'
        '^discriminator$': '<rootDir>/src/main/discriminator',
        '^map$': '<rootDir>/src/main/map',
        '^math$': '<rootDir>/src/main/math',
        '^p5-context$': '<rootDir>/src/main/sketch/p5-context',
        // '^palette$': '<rootDir>/src/main/color/palette',
        // '^palette-colors$': '<rootDir>/src/main/color/palette/palette-colors',
        // '^palettes$': '<rootDir>/src/main/color/palette/palettes',
        '^random$': '<rootDir>/src/main/random',
        // '^screen$': '<rootDir>/src/main/screen',
        // '^string$': '<rootDir>/src/main/string',
        // '^sketch-context$': '<rootDir>/src/main/sketch',
        '^unit-test/shared$': '<rootDir>/src/test/shared',
        // '^color-name-list$': '<rootDir>/node_modules/color-name-list'
        '^string$': '<rootDir>/src/main/string'
    },
    testEnvironment: '@happy-dom/jest-environment',
    testRegex: './src/test/.*\\.(test|spec)?\\.(ts|tsx)$',
    transform: { '^.+\\.(ts|tsx)$': 'ts-jest' },
    verbose: true
};

export default config;
