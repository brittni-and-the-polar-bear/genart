---
layout: base
---

# How to Add a New Color to the Library (Developer Instructions)

----

# Table of Contents

[Step 1: Categorize the Color](#step-1-categorize-the-color)

[Step 2: Add the File For the Color](#step-2-add-the-file-for-the-color)

[Step 3: Create the `PaletteColor` Object](#step-3-create-the-palettecolor-object)

[Step 4: Export the Color from the `index.ts` File](#step-4-export-the-color-from-the-indexts-file)

[Step 5: Add the Color to the `PaletteColor` Maps](#step-5-add-the-color-to-the-palettecolor-maps)

[Step 6: Add the Color to the `ColorNameManager`](#step-6-add-the-color-to-the-colornamemanager)

[Step 7: Add the New Color to the PaletteColor Unit Tests](#step-7-add-the-new-color-to-the-palettecolor-unit-tests)

[Step 8: Add Documentation](#step-8-add-documentation)
  * [Step 8, Part A: Add The Color Block `div`](#step-8-part-a-add-the-color-block-div)
  * [Step 8, Part B: Add the `@category` Annotations](#step-8-part-b-add-the-category-annotations)

[Step 9: Add the New Color to the Palette Colors Jekyll Collection](#step-9-add-the-new-color-to-the-palette-colors-jekyll-collection)

[Full `PaletteColor` File Example](#full-palettecolor-file-example)

----

# Step 1: Categorize the Color

Valid Categories:

* black
* blue
* brown
* gray
* green
* orange
* pink
* purple
* red
* white

[Table of Contents](#table-of-contents)

# Step 2: Add the File For the Color

The directory of the color file will be `/src/main/color/palette/palette-colors/<category>`.

The filename of the color file will be `pc-` followed by the hex value of the color, with all lowercase letters.

If there is already a file with that hex value name, the color already exists in the library and does not need to be added.

**Example:** `/src/main/color/palette/palette-colors/red/pc-bc010a.ts`

[Table of Contents](#table-of-contents)

# Step 3: Create the `PaletteColor` Object

The object will be a `const` object.

The object name will be `PC_` followed by the color hex value with all uppercase letters.<br/>
**Example:** `PC_BC010A`

The object type will be `PaletteColor`.

The `HEX` property should be in all uppercase letters and prepended with a `#` symbol.<br/>
**Example:** `HEX: '#BC010A'`

The `NAME` property should be in all lowercase letters.<br/>
**Example:** `NAME: "bird's eye"`

If you do not have a name in mind for your color, you can find a name on the <a href="https://colornamer.robertcooper.me/" target="_blank" rel="noopener noreferrer">Color namer website</a>.

The `DISCRIMINATOR` property should be `Discriminators.PALETTE_COLOR`.<br/>
**Example:** `DISCRIMINATOR: Discriminators.PALETTE_COLOR`

[Table of Contents](#table-of-contents)

# Step 4: Export the Color from the `index.ts` File

In the `index.ts` file in the same category directory, add a statement to export the color.<br/>
**Example:** `export * from './bc010a';`

[Table of Contents](#table-of-contents)

# Step 5: Add the Color to the `PaletteColor` Maps

Add the color to the `PaletteColor` map matching its category, using the `setUndefinedKey` method. The key will be the `HEX` property, and the value will be the `PaletteColor` object.

Add the color to the `PaletteColor` map for all palette colors, using the `setUndefinedKey` method. The key will be the `HEX` property, and the value will be the `PaletteColor` object.

[Table of Contents](#table-of-contents)

# Step 6: Add the Color to the `ColorNameManager`

Pass the `PaletteColor` object into the `ColorNameManager.addColor` method.

[Table of Contents](#table-of-contents)

# Step 7: Add the New Color to the PaletteColor Unit Tests

In the `/src/test/shared/palette-colors.ts` file, add the hex value of the color to the proper category collection.

Run the unit tests for all palette colors (`/src/test/color/palette/palette-colors/all-palette-colors.test.ts`).

Run the unit tests for all palette color categories (`/src/test/color/palette/palette-colors/palette-colors.test.ts`).

For any failing tests, be sure that the `PaletteColor` object is being properly exported and added to any required maps.

If the "all colors are unique" test fails, the color you have added may be too similar to a different color in the library. Compare your color with the color that caused the collision to determine if two colors are needed. You may choose to use the color that already exists in the library.

If the "consistent color" test fails, the colors created by the `HEX`, `HSL`, and `RGB` properties of your `PaletteColor` object are not creating the same color. Examine these properties closely and make the necessary updates in your object so the test passes.

If the "successful addition of color" test fails, the `PaletteColor` object may not have been added to the proper map, or the key of the object in the map does not match the `HEX` property of the object.

If the "valid color" test fails, the `PaletteColor` object may not be configured properly. The `RGB`, `HSL`, `HEX`, and `NAME` properties should all be truthy. The `HEX` property should be properly formatted, and the `NAME` property should be in all lowercase letters.

[Table of Contents](#table-of-contents)

# Step 8: Add Documentation

## Step 8, Part A: Add The Color Block `div`

Determine if the color has a greater contrast with black (`#000000`) or white (`#FFFFFF`) on the <a href="https://webaim.org/resources/contrastchecker/" target="_blank" rel="noopener noreferrer">WebAIM Contrast Checker website</a>.

Add the color block `div` to the documentation. The class of the `div` should be `color-block`. The `background` of the `div` should be the new color.

The link should go to the corresponding <a href="https://coolors.co/" target="_blank" rel="noopener noreferrer">coolors</a> page for the new color.

The `h2` element should have a class of `color-block`.

The `h2` element should also have a class of `black-pass`, if the color has a higher contrast with black, or `white-pass` if the color has a higher contrast with white.

The content of the `h2` element should be the color name and hex value.

### Color Block `div` Example

```html
<div class="color-block" style="background: #BC010A;">
    <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
        <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
    </a>
</div>
```

[Table of Contents](#table-of-contents)

## Step 8, Part B: Add the `@category` Annotations

Add `@category` annotations for the `Palette Colors (All)` category and the Palette Colors category for the new color (e.g. `@category Palette Colors (Red)`).

[Table of Contents](#table-of-contents)

# Step 9: Add the New Color to the Palette Colors Jekyll Collection

Add a file for the new color to the correct color category in the `_palette_colors`
Jekyll collection.  This file will include the name, hex value, and luminance of
the color.

## Palette Colors Collection Example; white-pass contrast

````markdown
---
layout: "palette_color"
title: "dark tone ink (#121212)"
name: "dark tone ink"
hex: "121212"
luminance: 0.006048833
contrast: "white-pass"
color_category: "black"
---

```typescript
import { PC_{{ page.hex }} } from 'palette-colors';

let name: string = PC_{{ page.hex }}.NAME;
```
````

## Palette Colors Collection Example; black-pass contrast

````markdown
---
layout: "palette_color"
title: "enoki (#FAFBEF)"
name: "enoki"
hex: "FAFBEF"
luminance: 0.9555034902
contrast: "black-pass"
color_category: "white"
---

```typescript
import { PC_{{ page.hex }} } from 'palette-colors';

let name: string = PC_{{ page.hex }}.NAME;
```
````

[Table of Contents](#table-of-contents)

# Full `PaletteColor` File Example

```typescript
import {ColorNameManager} from 'color';
import {Discriminators} from 'discriminator';
import {PaletteColor} from 'palette';

import {ALL_PALETTE_COLORS, RED_PALETTE_COLORS} from '../palette-color-maps';

/**
 * <div class="color-block" style="background: #BC010A;">
 *     <a href="https://coolors.co/bc010a" target="_blank" rel="noopener noreferrer">
 *         <h2 class="color-block white-pass">bird's eye (#BC010A)</h2>
 *     </a>
 * </div>
 *
 * @category Palette Colors (All)
 * @category Palette Colors (Red)
 */
export const PC_BC010A: PaletteColor = {
    HEX: '#BC010A',
    RGB: {R: 188, G: 1, B: 10},
    HSL: {H: 357, S: 99, L: 37},
    NAME: "bird's eye",
    DISCRIMINATOR: Discriminators.PALETTE_COLOR
}

RED_PALETTE_COLORS.setUndefinedKey(PC_BC010A.HEX, PC_BC010A);
ALL_PALETTE_COLORS.setUndefinedKey(PC_BC010A.HEX, PC_BC010A);
ColorNameManager.addColor(PC_BC010A);
```

[Table of Contents](#table-of-contents)
