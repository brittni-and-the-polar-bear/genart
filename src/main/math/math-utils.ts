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

/**
 * Converts a two-dimensional row and column index into a single-dimension index.
 *
 * @param row - Current row number. Rows are zero-indexed; the first row is row 0.
 * @param column - Current column number. Columns are zero-indexed; the first column is column 0.
 * @param totalRows - Total number of rows.
 * @param totalColumns - Total number of columns.
 *
 * @return The index in a single-dimension structure of the given row and column in a two-dimensional structure.<br/>
 * If `row` or `column` are negative, the function will return undefined.<br/>
 * If `row` is greater than or equal to `totalRows`, the function will return undefined.<br/>
 * If `column` is greater than or equal to `totalColumns`, the function will return undefined.
 *
 * @since 2.0.0
 *
 * @category Utility
 */
export function getSingleDimensionIndex(row: number, column: number, totalRows: number, totalColumns: number): number | undefined {
    if ((row >= 0) && (column >= 0) && (row < totalRows) && (column < totalColumns)) {
        return ((row * totalColumns) + column);
    }

    return undefined;
}
